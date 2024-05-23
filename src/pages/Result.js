import {
  Button,
  ButtonGroup,
  Container,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { formatCurrency } from "./Admin";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase_conf";

function Result(props) {
  const location = useLocation();
  const [data, setData] = useState({});

  useEffect(() => {
    // setData(location.state);
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = async () => {
    await getDoc(
      doc(db, "payment", window.location.pathname.split("/").pop())
    ).then((doc) => {
      setData(doc.data());
    });
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

  return (
    <Container>
      <Stack
        py={{ base: 16, md: 36 }}
        spacing={10}
        display={"flex"}
        flexDirection={"column"}
      >
        <Stack spacing={6} w={"100%"}>
          <Text fontSize={"3xl"} fontWeight={"bold"}>
            결제 완료
          </Text>
          <Text fontSize={"lg"} opacity={0.5}>
            상품이 결제되었습니다.
          </Text>
        </Stack>

        <TableContainer
          border={"1px solid #f1f1f1"}
          borderRadius={"lg"}
          p={{ base: 0, md: 4 }}
        >
          <Table size={{ base: "sm", md: "md" }}>
            <Tbody>
              {/* <Tr>
                <Td>계약기간</Td>
                <Td>
                  {data?.startDate}
                  {" ~ "}
                  {data?.endDate}
                </Td>
              </Tr> */}

              <Tr>
                <Td>상호명</Td>
                <Td>{data?.business_name}</Td>
              </Tr>
              <Tr>
                <Td>대표자 성함</Td>
                <Td>{data?.userName}</Td>
              </Tr>
              <Tr>
                <Td>영업담당자 성함</Td>
                <Td>{data?.sales_manager}</Td>
              </Tr>
              <Tr>
                <Td>계약상품</Td>
                <Td>{data?.product_name}</Td>
              </Tr>
              <Tr>
                <Td>결제금액</Td>
                <Td>{formatCurrency(data?.totalAmount)}</Td>
              </Tr>
              <Tr>
                <Td>승인번호</Td>
                <Td whiteSpace={"pre-wrap"}>{data?.approvalNumb}</Td>
              </Tr>
              <Tr>
                <Td>승인일시</Td>
                <Td whiteSpace={"pre-wrap"}>
                  {getDateTime(data?.tradeDateTime)}
                </Td>
              </Tr>
              <Tr>
                <Td>카드사</Td>
                <Td whiteSpace={"pre-wrap"}>{data?.issuerCardName}</Td>
              </Tr>
              <Tr>
                <Td>카드번호</Td>
                <Td whiteSpace={"pre-wrap"}>{data?.cardNumb}</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <ButtonGroup w={"100%"} alignItems={"center"} justifyContent={"center"}>
          <Button>홈으로가기</Button>
          <Button colorScheme={"yellow"}>계속 상품구매하기</Button>
        </ButtonGroup>
      </Stack>
    </Container>
  );
}

export default Result;
