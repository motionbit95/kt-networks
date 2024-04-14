import { Box, Flex, Stack, useColorModeValue } from "@chakra-ui/react";
import { OrderSummary } from "./OrderSummary";
import { PaymentInformation } from "./PaymentInformation";
import { ShippingInformation } from "./ShippingInformation";
import { ShippingMethod } from "./ShippingMethod";
import { useState } from "react";

export const CheckOutPages = (props) => {
  const [formData, setFormData] = useState({});

  const onChange = (name, e) => {
    if (name) {
      setFormData({
        ...formData,
        [name]: e,
      });

      console.log({ [name]: e });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });

      console.log({ [e.target.name]: e.target.value });
    }
  };
  const handleClick = () => {
    console.log(formData);
    alert("결제 모듈 검토중");
  };

  return (
    <Box
      bgGradient={useColorModeValue(
        "linear(to-l, gray.50 50%, white 50%)",
        "linear(to-l, gray.700 50%, gray.800 50%)"
      )}
    >
      <Flex maxW="8xl" mx="auto" direction={{ base: "column", md: "row" }}>
        <Box
          flex="1"
          bg={useColorModeValue("white", "gray.800")}
          px={{ base: "4", md: "8", lg: "12", xl: "20" }}
          py={{ base: "6", md: "8", lg: "12", xl: "20" }}
        >
          <Stack spacing={{ base: "16", lg: "20" }}>
            <ShippingInformation onChange={onChange} />
            <PaymentInformation onChange={onChange} />
          </Stack>
        </Box>
        <Box
          flex="1"
          maxW={{ lg: "md", xl: "40rem" }}
          bg={{ base: useColorModeValue("white", "gray.800"), md: "inherit" }}
          px={{ base: "4", md: "8", lg: "12", xl: "20" }}
          py={{ base: "6", md: "8", lg: "12", xl: "20" }}
        >
          <OrderSummary product={props.product} onClick={handleClick} />
        </Box>
      </Flex>
    </Box>
  );
};
