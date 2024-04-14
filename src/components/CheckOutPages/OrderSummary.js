import {
  Button,
  Divider,
  Heading,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { HiOutlineChat, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { products } from "./_data";
import { ProductItem } from "./ProductItem";
import { formatCurrency } from "../../pages/Admin";

export const OrderSummary = (props) => (
  <Stack spacing={{ base: "6", md: "10" }}>
    <Heading size="md">주문 정보</Heading>
    <Stack spacing="8">
      <Stack spacing="6">
        <ProductItem product={props.product} />
      </Stack>

      <Stack spacing="6">
        <Stack spacing="3">
          <Stack direction="row" justify="space-between">
            <Text color={useColorModeValue("gray.600", "gray.300")}>
              상품 금액
            </Text>
            <Text color={useColorModeValue("black", "white")}>
              {formatCurrency(props.product.product_price)}
            </Text>
          </Stack>
        </Stack>
        <Divider />
        <Stack direction="row" justify="space-between">
          <Text
            fontSize="lg"
            fontWeight="semibold"
            color={useColorModeValue("gray.700", "gray.200")}
          >
            총 금액
          </Text>
          <Text
            fontSize="xl"
            fontWeight="semibold"
            color={useColorModeValue("black", "white")}
          >
            {formatCurrency(props.product.product_price)}
          </Text>
        </Stack>
      </Stack>
    </Stack>
    <Stack spacing="8">
      <Button colorScheme="blue" size="lg" py="7" onClick={props.onClick}>
        결제하기
      </Button>
    </Stack>
  </Stack>
);
