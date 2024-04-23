import {
  SimpleGrid,
  Stack,
  Text,
  Input,
  HStack,
  GridItem,
  Select,
  Card,
  useColorModeValue,
  Button,
  FormControl,
  FormLabel,
  Container,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { formatCurrency } from "./Admin";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale/ko";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase_conf";
import { CheckOutPages } from "../components/CheckOutPages/App";
import KSPay from "./KSPay";

function Payment(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [product, setProduct] = useState(location.state);
  registerLocale("ko", ko);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [cardNumb, setCardNumb] = useState({
    first: "",
    second: "",
    third: "",
    fourth: "",
  });
  const [expiryDate, setExpiryDate] = useState({
    year: "",
    month: "",
  });

  const [formData, setFormData] = useState({
    installMonth: "0",
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    handlePayment();
  };

  const handlePayment = async () => {
    const card_num =
      cardNumb.first + cardNumb.second + cardNumb.third + cardNumb.fourth;
    const expire_date = expiryDate.year + expiryDate.month;

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      "pgapi Mjk5OTE5OTk5MDpNQTAxOjNEMUVBOEVBRUM0NzA1MTFBMkIyNUVFMzQwRkI5ODQ4"
    );

    const order_num = random(8);

    const raw = JSON.stringify({
      mid: "2999199990",
      orderNumb: order_num,
      userName: formData.userName,
      userEmail: "",
      productType: "REAL",
      productName: product.product_name,
      totalAmount: product.product_price,
      taxFreeAmount: "0",
      payload: "",
      interestType: "PG",
      cardNumb: card_num,
      expiryDate: expire_date,
      installMonth: formData.installMonth,
      currencyType: "KRW",
      password: formData.password,
      userInfo: formData.userInfo,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
    };

    fetch("/api/v1/card/pay/oldcert", requestOptions)
      .then((response) => response.text())
      .then(async (result) => {
        const res = JSON.parse(result);
        if (res.code === "A0200") {
          const totalData = {
            ...product,
            ...res.data,
            ...formData,
            ...{
              startDate: startDate.toLocaleDateString(),
              endDate: endDate.toLocaleDateString(),
            },
          };

          await setDoc(doc(db, "payment", order_num), totalData);

          navigate(`/result/${order_num}`, {
            state: totalData,
          });
        } else if (res.code === "A0201") {
          alert("처리 실패! " + res.data.respMessage);
          return;
        } else if (res.code === "A0400") {
          alert("요청 파라미터 오류");
          return;
        } else if (res.code === "A0401") {
          alert("인증 오류");
          return;
        } else if (res.code === "A0403") {
          alert("프로토콜 오류");
          return;
        } else if (res.code === "A500") {
          alert("서버 오류 (KSNET 기술팀 문의)");
          return;
        } else if (res.code === "A0999") {
          alert("기타 오류");
          return;
        }
      })
      .catch((error) => console.error(error));
  };

  const random = (length = 8) => {
    return Math.random().toString(16).substr(2, length);
  };
  return (
    <Box py={{ base: 16, md: 24 }}>
      <KSPay product={product} />
      {/* <CheckOutPages product={location.state} /> */}
    </Box>
    // <Container maxW={"container.xl"}>
    //   <Stack
    //     py={{ base: 16, md: 36 }}
    //     px={4}
    //     spacing={10}
    //     display={"flex"}
    //     flexDirection={"column"}
    //   >
    //     <Stack spacing={6} w={"100%"}>
    //       <Text fontSize={"3xl"} fontWeight={"bold"}>
    //         Payment
    //       </Text>
    //       <Text fontSize={"lg"} opacity={0.5}>
    //         상품결제 페이지입니다.
    //       </Text>
    //     </Stack>

    //     <form onSubmit={submitForm}>
    //       <SimpleGrid spacing={10} columns={{ base: 1, md: 3 }} w={"100%"}>
    //         <GridItem colSpan={{ base: 1, md: 2 }}>
    //           <Stack spacing={10}>
    //             <Stack>
    //               <Text fontSize={"xl"} fontWeight={"bold"}>
    //                 결제자 정보
    //               </Text>
    //               <Card>
    //                 <Stack borderRadius={"lg"} p={4}>
    //                   <FormControl isRequired>
    //                     <FormLabel>계약기간</FormLabel>
    //                     <HStack>
    //                       <DatePicker
    //                         locale={"ko"}
    //                         selected={startDate}
    //                         onChange={(date) => setStartDate(date)}
    //                         dateFormat="yyyy/MM/dd"
    //                         minDate={new Date()}
    //                         customInput={<Input />}
    //                       />
    //                       <Text>~</Text>
    //                       <DatePicker
    //                         locale={"ko"}
    //                         selected={endDate}
    //                         onChange={(date) => setEndDate(date)}
    //                         dateFormat="yyyy/MM/dd"
    //                         minDate={startDate}
    //                         customInput={<Input />}
    //                       />
    //                     </HStack>
    //                   </FormControl>
    //                   <FormControl isRequired>
    //                     <FormLabel>상호명</FormLabel>
    //                     <Input
    //                       placeholder="상호명"
    //                       name="business_name"
    //                       onChange={onChange}
    //                     />
    //                   </FormControl>
    //                   <FormControl isRequired>
    //                     <FormLabel>대표자 성함</FormLabel>
    //                     <Input
    //                       placeholder="대표자 성함"
    //                       name="userName"
    //                       onChange={onChange}
    //                     />
    //                   </FormControl>
    //                   <FormControl isRequired>
    //                     <FormLabel>영업담당자 성함</FormLabel>
    //                     <Input
    //                       placeholder="영업담당자 성함"
    //                       name="sales_manager"
    //                       onChange={onChange}
    //                     />
    //                   </FormControl>
    //                 </Stack>
    //               </Card>
    //             </Stack>
    //             <Stack>
    //               <Text fontSize={"xl"} fontWeight={"bold"}>
    //                 카드 결제 정보
    //               </Text>
    //               <Card>
    //                 <Stack borderRadius={"lg"} p={4}>
    //                   <FormControl isRequired>
    //                     <FormLabel>카드번호</FormLabel>
    //                     <HStack>
    //                       <Input
    //                         type="number"
    //                         onChange={(e) =>
    //                           setCardNumb({
    //                             ...cardNumb,
    //                             first: e.target.value,
    //                           })
    //                         }
    //                       />
    //                       <Input
    //                         type="number"
    //                         onChange={(e) =>
    //                           setCardNumb({
    //                             ...cardNumb,
    //                             second: e.target.value,
    //                           })
    //                         }
    //                       />
    //                       <Input
    //                         type="number"
    //                         onChange={(e) =>
    //                           setCardNumb({
    //                             ...cardNumb,
    //                             third: e.target.value,
    //                           })
    //                         }
    //                       />
    //                       <Input
    //                         type="number"
    //                         onChange={(e) =>
    //                           setCardNumb({
    //                             ...cardNumb,
    //                             fourth: e.target.value,
    //                           })
    //                         }
    //                       />
    //                     </HStack>
    //                   </FormControl>
    //                   <HStack>
    //                     <FormControl isRequired>
    //                       <FormLabel>유효기간</FormLabel>
    //                       <HStack>
    //                         <Input
    //                           type="number"
    //                           placeholder="월(MM)"
    //                           onChange={(e) =>
    //                             setExpiryDate({
    //                               ...expiryDate,
    //                               month: e.target.value,
    //                             })
    //                           }
    //                         />
    //                         <Input
    //                           type="number"
    //                           placeholder="년(YY)"
    //                           onChange={(e) =>
    //                             setExpiryDate({
    //                               ...expiryDate,
    //                               year: e.target.value,
    //                             })
    //                           }
    //                         />
    //                       </HStack>
    //                     </FormControl>
    //                     <FormControl isRequired>
    //                       <FormLabel>카드비밀번호</FormLabel>
    //                       <HStack>
    //                         <Input
    //                           name="password"
    //                           type="password"
    //                           placeholder="카드비밀번호 앞 2자리"
    //                           onChange={onChange}
    //                         />
    //                       </HStack>
    //                     </FormControl>
    //                   </HStack>
    //                   <FormControl isRequired>
    //                     <FormLabel>할부개월수</FormLabel>
    //                     <Select name="installMonth" onChange={onChange}>
    //                       <option key={0} value={0}>
    //                         일시불
    //                       </option>
    //                       {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
    //                         <option key={month} value={month}>
    //                           {month}개월
    //                         </option>
    //                       ))}
    //                     </Select>
    //                   </FormControl>
    //                   <FormControl isRequired>
    //                     <FormLabel>사용자정보</FormLabel>
    //                     <Input
    //                       name="userInfo"
    //                       onChange={onChange}
    //                       placeholder="생년월일 6자리 혹은 사업자등록번호 10자리"
    //                     />
    //                   </FormControl>
    //                 </Stack>
    //               </Card>
    //             </Stack>
    //           </Stack>
    //         </GridItem>
    //         <GridItem colSpan={1}>
    //           <Stack spacing={10}>
    //             <Stack>
    //               <Text fontSize={"xl"} fontWeight={"bold"}>
    //                 주문상품
    //               </Text>
    //               <Card>
    //                 <HStack
    //                   justifyContent={"space-between"}
    //                   borderRadius={"lg"}
    //                   p={4}
    //                 >
    //                   <Text fontSize={"lg"} fontWeight={"bold"}>
    //                     {product.product_name}
    //                   </Text>
    //                   <Text fontSize={"lg"} fontWeight={"bold"}>
    //                     {formatCurrency(product.product_price)}
    //                   </Text>
    //                 </HStack>
    //               </Card>
    //               <HStack
    //                 justifyContent={"space-between"}
    //                 borderRadius={"lg"}
    //                 p={4}
    //                 bgColor={useColorModeValue("yellow.100", "yellow.800")}
    //               >
    //                 <Text fontSize={"lg"} fontWeight={"bold"}>
    //                   총 주문금액
    //                 </Text>
    //                 <Text
    //                   fontSize={"lg"}
    //                   fontWeight={"bold"}
    //                   color={"yellow.500"}
    //                 >
    //                   {formatCurrency(product.product_price)}
    //                 </Text>
    //               </HStack>
    //             </Stack>
    //             <Stack>
    //               <Text fontSize={"xl"} fontWeight={"bold"}>
    //                 결제상세
    //               </Text>
    //               <Card>
    //                 <HStack
    //                   justifyContent={"space-between"}
    //                   borderRadius={"lg"}
    //                   p={4}
    //                 >
    //                   <Text fontSize={"lg"} fontWeight={"bold"}>
    //                     카드 결제
    //                   </Text>
    //                   <Text fontSize={"lg"} fontWeight={"bold"}>
    //                     {formatCurrency(product.product_price)}
    //                   </Text>
    //                 </HStack>
    //               </Card>
    //               <Button
    //                 type="submit"
    //                 //   onClick={handlePayment}
    //                 size={"lg"}
    //                 colorScheme={"yellow"}
    //               >
    //                 구매하기
    //               </Button>
    //             </Stack>
    //           </Stack>
    //         </GridItem>
    //       </SimpleGrid>
    //     </form>
    //   </Stack>
    // </Container>
  );
}

export default Payment;
