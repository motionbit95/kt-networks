import { Box, Button, Card, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase_conf";
import { formatCurrency } from "./Admin";

import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

function Product(props) {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const q = query(collection(db, "product"));
    const productList = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      productList.push({ ...doc.data(), pid: doc.id });
    });

    setProductList(productList);
  };

  return (
    <Box p={36}>
      <Stack spacing={6}>
        <Text fontSize={"3xl"} fontWeight={"bold"}>
          Product
        </Text>
        <Text fontSize={"lg"} opacity={0.5}>
          상품구매 페이지입니다.
        </Text>
      </Stack>

      <Box mt={16}>
        <SimpleGrid columns={4} spacing={4}>
          {productList.map((product) => (
            <Card key={product.pid} p={4}>
              <Stack spacing={4}>
                <Text fontWeight={"bold"} fontSize={"xl"}>
                  {product.product_name}
                </Text>
                <Text fontWeight={"bold"} fontSize={"lg"} color={"yellow.500"}>
                  {formatCurrency(product.product_price)}
                </Text>
                <>
                  <Button
                    colorScheme="yellow"
                    onClick={() =>
                      navigate(`/payment/${product.pid}`, { state: product })
                    }
                  >
                    구매하기
                  </Button>
                </>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default Product;
