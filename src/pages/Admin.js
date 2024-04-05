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
} from "firebase/firestore";
import { db } from "../firebase_conf";
import { FaRegEdit, FaSearch } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
function Admin(props) {
  const [search, setSearch] = useState({
    product_name: "",
    product_price_start: "",
    product_price_end: "",
  });
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getProducts();
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

  const addProduct = async (product) => {
    if (window.confirm("상품을 추가하시겠습니까?")) {
      const docRef = await addDoc(collection(db, "product"), product);
      console.log("Document written with ID: ", docRef.id);

      setProductList([...productList, product]);
    }
  };

  const updateProduct = async (product) => {
    if (window.confirm("상품을 수정하시겠습니까?")) {
      console.log(product);
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
  return (
    <Tabs variant="soft-rounded" colorScheme="green">
      <TabList>
        <Tab>상품관리</Tab>
        <Tab>결제관리</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
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
                        setSearch({ ...search, product_name: e.target.value })
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
              <SimpleGrid columns={3} spacing={2}>
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
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
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
      console.log(product_name, product_price);
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
            <CardFooter justifyContent={"end"}>
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
            </CardFooter>
          </form>
        </Card>
      )}
    </Box>
  );
}

function formatCurrency(number, currencyCode = "KRW") {
  const formattedNumber = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: currencyCode,
  }).format(number);

  return formattedNumber.substring(1, formattedNumber.length) + "원";
}

export default Admin;
