import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Grid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  HStack,
  IconButton,
  Stack,
  Box,
  GridItem,
  SimpleGrid,
  Input,
  FormControl,
  FormLabel,
  Text,
  useColorMode,
  Select,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Checkbox,
  ButtonGroup,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import {
  collection,
  query,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase_conf";
import { FaRegEdit, FaSearch } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import {
  BsArrowDown,
  BsArrowUp,
  BsMoonFill,
  BsSunFill,
  BsX,
} from "react-icons/bs";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale/ko";
function Admin(props) {
  const [search, setSearch] = useState({});
  const [paymentSearch, setPaymentSearch] = useState({
    category: "business_name",
    keyword: "",
    price_start: 0,
    price_end: 0,
    order: "tradeDateTime",
    sort: "asc",
  });
  const [productList, setProductList] = useState([]);
  const [paymentList, setPaymentList] = useState([]);
  const { colorMode, toggleColorMode } = useColorMode();
  useEffect(() => {
    registerLocale("ko", ko);
    getProducts();
    getPayment();
  }, []);

  const getProducts = async () => {
    const q = query(collection(db, "product"));
    const productList = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (
        (!search.product_name ||
          doc.data().product_name.includes(search.product_name)) &&
        (!search.product_price_start ||
          parseInt(doc.data().product_price) >=
            parseInt(search.product_price_start)) &&
        (!search.product_price_end ||
          parseInt(doc.data().product_price) <=
            parseInt(search.product_price_end))
      )
        productList.push({ ...doc.data(), pid: doc.id });
    });

    setProductList(productList);
  };

  const getPayment = async () => {
    const strStart = paymentSearch.startDate
      ?.replace("T", "")
      .replace(":", "")
      .replaceAll("-", "");
    const strEnd = paymentSearch.endDate
      ?.replace("T", "")
      .replace(":", "")
      .replaceAll("-", "");

    const q = query(collection(db, "payment"));
    const paymentList = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (
        (!paymentSearch.category && !paymentSearch.keyword) ||
        (doc.data()[paymentSearch.category].includes(paymentSearch.keyword) &&
          (!paymentSearch.price_start ||
            parseInt(doc.data().product_price) >=
              parseInt(paymentSearch.price_start)) &&
          (!paymentSearch.price_end ||
            parseInt(doc.data().product_price) <=
              parseInt(paymentSearch.price_end)) &&
          (!strStart ||
            parseInt(doc.data().tradeDateTime.substring(0, 12)) >=
              parseInt(strStart)) &&
          (!strEnd ||
            parseInt(doc.data().tradeDateTime.substring(0, 12)) <=
              parseInt(strEnd)))
      )
        paymentList.push({ ...doc.data(), pid: doc.id });
    });

    setPaymentList(paymentList);
  };

  const addProduct = async (product) => {
    if (window.confirm("상품을 추가하시겠습니까?")) {
      const docRef = await addDoc(collection(db, "product"), product);
      setProductList([...productList, product]);
    }
  };

  const updateProduct = async (product) => {
    if (window.confirm("상품을 수정하시겠습니까?")) {
      // console.log(product);
      await updateDoc(doc(db, "product", product.pid), product);

      getProducts();
    }
  };

  const deleteProduct = async (product) => {
    if (window.confirm("상품을 삭제하시겠습니까?")) {
      await deleteDoc(doc(db, "product", product.pid));
      getProducts();
    }
  };

  const cancelPayment = async (payment) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "pgapi Mjk5OTE5OTk5MDpNQTAxOjNEMUVBOEVBRUM0NzA1MTFBMkIyNUVFMzQwRkI5ODQ4"
    );

    const raw = JSON.stringify({
      mid: "2999199990",
      cancelType: "FULL",
      orgTradeKeyType: "TID",
      orgTradeKey: payment.data.tid,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    if (window.confirm("해당 결제를 취소하시겠습니까?")) {
      fetch("/api/v1/card/cancel", requestOptions)
        .then((response) => response.text())
        .then(async (result) => {
          const res = JSON.parse(result);

          if (res.code === "A0200") {
            await updateDoc(doc(db, "payment", payment.pid), {
              status: "CANCEL",
            });
          } else {
            alert("결제취소에 실패했습니다. " + res?.data.respMessage);
          }

          getPayment();
        })
        .catch((error) => console.error(error));
    }
  };

  const getDateTime = (date) => {
    return (
      date?.slice(0, 4) +
      "." +
      date?.slice(4, 6) +
      "." +
      date?.slice(6, 8) +
      " " +
      date?.slice(8, 10) +
      ":" +
      date?.slice(10, 12)
    );
  };

  const handleOrder = async (parameter, sort) => {
    setPaymentSearch({
      ...paymentSearch,
      order: parameter,
      sort: sort,
    });

    const q = query(collection(db, "payment"), orderBy(parameter, sort));
    const paymentList = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      paymentList.push({ ...doc.data(), pid: doc.id });
    });

    setPaymentList(paymentList);
  };

  return (
    <>
      <Box p={4}>
        <Tabs variant="soft-rounded" colorScheme="green">
          <HStack justifyContent={"space-between"}>
            <TabList>
              <Tab>상품관리</Tab>
              <Tab>결제관리</Tab>
            </TabList>{" "}
            {(window.location.hostname === "localhost" ||
              window.location.hostname === "127.0.0.1" ||
              window.location.hostname === "motionbit.kr") && (
              <IconButton
                size={{ base: "sm", md: "md" }}
                icon={colorMode === "light" ? <BsMoonFill /> : <BsSunFill />}
                onClick={toggleColorMode}
              />
            )}
          </HStack>
          <TabPanels>
            <TabPanel px={0}>
              <Stack>
                <HStack justifyContent={"space-between"}>
                  <SearchPopup onSearch={getProducts}>
                    <Stack>
                      <FormControl>
                        <FormLabel>상품명</FormLabel>
                        <Input
                          defaultValue={search.product_name}
                          placeholder="검색할 상품명을 입력하세요."
                          onChange={(e) =>
                            setSearch({
                              ...search,
                              product_name: e.target.value,
                            })
                          }
                        ></Input>
                      </FormControl>
                      <FormControl>
                        <FormLabel>상품 가격</FormLabel>
                        <HStack>
                          <Input
                            defaultValue={search.product_price_start}
                            onChange={(e) =>
                              setSearch({
                                ...search,
                                product_price_start: e.target.value,
                              })
                            }
                            type="number"
                            placeholder="최소"
                          />
                          <Text>~</Text>
                          <Input
                            defaultValue={search.product_price_end}
                            onChange={(e) =>
                              setSearch({
                                ...search,
                                product_price_end: e.target.value,
                              })
                            }
                            type="number"
                            placeholder="최대"
                          />
                        </HStack>
                      </FormControl>
                    </Stack>
                  </SearchPopup>
                  <ViewProduct
                    display={"상품등록"}
                    title={"상품등록"}
                    onAddDoc={addProduct}
                  />
                </HStack>
                <Box>
                  <SimpleGrid columns={4} spacing={2}>
                    {productList.map((product) => (
                      <GridItem>
                        <Card key={product.pid}>
                          <CardHeader p={2} fontWeight="bold">
                            {product.product_name}
                          </CardHeader>
                          <CardBody p={2}>
                            {formatCurrency(product.product_price)}
                          </CardBody>
                          <CardFooter
                            p={2}
                            alignItems={"center"}
                            justifyContent={"end"}
                          >
                            <HStack>
                              <ViewProduct
                                display={<FaRegEdit />}
                                title={"상품수정"}
                                defaultValue={product}
                                onEditDoc={updateProduct}
                              />
                              <Button onClick={() => deleteProduct(product)}>
                                <AiOutlineDelete />
                              </Button>
                            </HStack>
                          </CardFooter>
                        </Card>
                      </GridItem>
                    ))}
                  </SimpleGrid>
                </Box>
              </Stack>
            </TabPanel>
            <TabPanel>
              <Stack spacing={4}>
                <HStack w={"full"} justifyContent={"space-between"}>
                  <SearchPopup
                    onSearch={getPayment}
                    onReset={() => {
                      setPaymentSearch({
                        category: "business_name",
                        keyword: "",
                        product_price_start: 0,
                        product_price_end: 0,
                        order: "tradeDateTime",
                        sort: "asc",
                      });
                    }}
                  >
                    <Stack>
                      <FormControl>
                        <FormLabel>검색어</FormLabel>
                        <HStack>
                          <Select
                            value={paymentSearch.category}
                            onChange={(e) =>
                              setPaymentSearch({
                                ...paymentSearch,
                                category: e.target.value,
                              })
                            }
                          >
                            <option value="business_name">상호명</option>
                            <option value="userName">대표자</option>
                            <option value="sales_manager">영업담당자</option>
                            <option value="product_name">상품명</option>
                          </Select>
                          <Input
                            value={paymentSearch.keyword}
                            onChange={(e) =>
                              setPaymentSearch({
                                ...paymentSearch,
                                keyword: e.target.value,
                              })
                            }
                          />
                        </HStack>
                      </FormControl>
                      <FormControl>
                        <FormLabel>결제금액</FormLabel>
                        <HStack>
                          <Input
                            value={paymentSearch.price_start}
                            type="number"
                            placeholder="최소"
                            onChange={(e) =>
                              setPaymentSearch({
                                ...paymentSearch,
                                price_start: e.target.value,
                              })
                            }
                          />
                          <Text>~</Text>
                          <Input
                            value={paymentSearch.price_end}
                            type="number"
                            placeholder="최대"
                            onChange={(e) =>
                              setPaymentSearch({
                                ...paymentSearch,
                                price_end: e.target.value,
                              })
                            }
                          />
                        </HStack>
                      </FormControl>
                      <FormControl>
                        <FormLabel>결제일시</FormLabel>
                        <HStack>
                          <Input
                            type="datetime-local"
                            defaultValue={
                              paymentSearch.startDate
                                ? paymentSearch.startDate
                                : new Date().toISOString().substring(0, 16)
                            }
                            onChange={(e) =>
                              setPaymentSearch({
                                ...paymentSearch,
                                startDate: e.target.value,
                              })
                            }
                          />
                          <Text>~</Text>
                          <Input
                            type="datetime-local"
                            defaultValue={
                              paymentSearch.endDate
                                ? paymentSearch.endDate
                                : new Date().toISOString().substring(0, 16)
                            }
                            onChange={(e) =>
                              setPaymentSearch({
                                ...paymentSearch,
                                endDate: e.target.value,
                              })
                            }
                          />
                        </HStack>
                      </FormControl>
                    </Stack>
                  </SearchPopup>
                </HStack>

                <TableContainer
                  border="1px solid #d9d9d9"
                  borderRadius={"lg"}
                  p={2}
                >
                  <Table size={{ base: "sm", md: "md" }} variant="simple">
                    <Thead>
                      <Tr>
                        <OrderHeader
                          displayText={"승인날짜"}
                          parameter={"tradeDateTime"}
                          onOrder={handleOrder}
                          viewArrow={paymentSearch.order === "tradeDateTime"}
                        />
                        <OrderHeader
                          displayText={"계약상품"}
                          parameter={"product_name"}
                          onOrder={handleOrder}
                          viewArrow={paymentSearch.order === "product_name"}
                        />
                        {/* <Th>계약상품</Th> */}
                        <OrderHeader
                          displayText={"계약기간"}
                          parameter={"endDate"}
                          onOrder={handleOrder}
                          viewArrow={paymentSearch.order === "endDate"}
                        />
                        <OrderHeader
                          displayText={"상호명"}
                          parameter={"business_name"}
                          onOrder={handleOrder}
                          viewArrow={paymentSearch.order === "business_name"}
                        />
                        <OrderHeader
                          displayText={"대표자"}
                          parameter={"userName"}
                          onOrder={handleOrder}
                          viewArrow={paymentSearch.order === "userName"}
                        />
                        <OrderHeader
                          displayText={"카드사"}
                          parameter={"issuerCardName"}
                          onOrder={handleOrder}
                          viewArrow={paymentSearch.order === "issuerCardName"}
                        />
                        <OrderHeader
                          displayText={"승인번호"}
                          parameter={"approvalNumb"}
                          onOrder={handleOrder}
                          viewArrow={paymentSearch.order === "approvalNumb"}
                        />
                        <OrderHeader
                          displayText={"결제금액"}
                          parameter={"product_price"}
                          onOrder={handleOrder}
                          viewArrow={paymentSearch.order === "product_price"}
                        />
                        <OrderHeader
                          displayText={"영업담당자"}
                          parameter={"sales_manager"}
                          onOrder={handleOrder}
                          viewArrow={paymentSearch.order === "sales_manager"}
                        />
                        <Th>결제취소</Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {paymentList.map((payment) => (
                        <Tr
                          fontSize={"sm"}
                          opacity={payment?.status === "CANCEL" ? 0.5 : 1}
                        >
                          <Td>{getDateTime(payment?.tradeDateTime)}</Td>
                          <Td>{payment.product_name}</Td>
                          <Td>
                            {payment?.startDate} ~ {payment?.endDate}
                          </Td>
                          <Td>{payment.business_name}</Td>
                          <Td>{payment.userName}</Td>
                          <Td>{payment?.issuerCardName}</Td>
                          <Td>{payment?.approvalNumb}</Td>
                          <Td>{formatCurrency(payment.product_price)}</Td>
                          <Td>{payment.sales_manager}</Td>
                          <Td>
                            {payment?.status === "CANCEL" ? (
                              <Text>취소완료</Text>
                            ) : (
                              <IconButton
                                size={"sm"}
                                onClick={() => cancelPayment(payment)}
                              >
                                <BsX />
                              </IconButton>
                            )}
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

function ViewProduct(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [product_name, setProduct_name] = useState(
    props.defaultValue?.product_name
  );
  const [product_price, setProduct_price] = useState(
    props.defaultValue?.product_price
  );

  const submitProduct = () => {
    if (props.title === "상품수정") {
      // console.log(product_name, product_price);
      props.onEditDoc({
        pid: props.defaultValue?.pid,
        product_name: product_name,
        product_price: product_price,
      });
    } else {
      props.onAddDoc({
        product_name: product_name,
        product_price: product_price,
        createAt: new Date(),
      });
    }
    onClose();
  };
  return (
    <>
      <Button colorScheme="yellow" onClick={onOpen}>
        {props.display}
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <Stack>
                <FormControl isRequired>
                  <FormLabel>상품 이름</FormLabel>
                  <Input
                    defaultValue={product_name}
                    placeholder="상품 이름"
                    onChange={(e) => setProduct_name(e.target.value)}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>상품 가격</FormLabel>
                  <Input
                    defaultValue={product_price}
                    type="number"
                    placeholder="숫자만 입력해주세요."
                    onChange={(e) => setProduct_price(e.target.value)}
                  />
                </FormControl>
                <HStack justifyContent={"end"} mt={3}>
                  <Button variant="ghost" mr={3} onClick={onClose}>
                    닫기
                  </Button>
                  <Button
                    // type="submit"
                    colorScheme="yellow"
                    onClick={submitProduct}
                  >
                    {props.title.substring(2, 4)}
                  </Button>
                </HStack>
              </Stack>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

function SearchPopup(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const submitSearch = () => {
    props.onSearch();
    onClose();
  };

  const reset = () => {
    props.onReset();
    // onClose();
  };
  return (
    <Box>
      <IconButton onClick={onOpen} icon={<FaSearch />} />
      {isOpen && (
        <Card position={"absolute"} zIndex={10}>
          <CardHeader fontWeight={"bold"} p={2}>
            {/* 검색 */}
          </CardHeader>
          <form onSubmit={submitSearch}>
            <CardBody py={2}>{props.children}</CardBody>
            <CardFooter>
              <HStack w={"100%"} justifyContent={"space-between"}>
                <Button onClick={reset}>초기화</Button>
                <HStack>
                  <Button onClick={onClose}>닫기</Button>
                  <Button
                    // type="submit"
                    colorScheme={"yellow"}
                    onClick={submitSearch}
                  >
                    검색
                  </Button>
                </HStack>
              </HStack>
            </CardFooter>
          </form>
        </Card>
      )}
    </Box>
  );
}

export function formatCurrency(number, currencyCode = "KRW") {
  const formattedNumber = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: currencyCode,
  }).format(number);

  return formattedNumber.substring(1, formattedNumber.length) + "원";
}

export const OrderHeader = (props) => {
  const [order, setOrder] = useState({});
  const [sort, setSort] = useState("asc");
  const handleOrder = (parameter) => {
    const tempSort = sort === "asc" ? "desc" : "asc";
    setSort(tempSort);
    setOrder(parameter);
    props.onOrder(parameter, tempSort);
  };
  return (
    <Th cursor={"pointer"} onClick={() => handleOrder(props.parameter)}>
      <HStack gap={"10px"}>
        <Text color={"blue.500"} whiteSpace={"nowrap"}>
          {props.displayText}
        </Text>
        {props.viewArrow && (sort === "asc" ? <BsArrowDown /> : <BsArrowUp />)}
      </HStack>
    </Th>
  );
};

export default Admin;
