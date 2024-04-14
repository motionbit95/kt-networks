import {
  AspectRatio,
  Flex,
  Image,
  Select,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Product } from "./_data";
import { formatCurrency } from "../../pages/Admin";

export const ProductItem = (props) => {
  const { product } = props;
  console.log({ product });
  return (
    <Flex justify="space-between" key={product.id}>
      <Stack direction="row" spacing="5">
        <Stack spacing="3">
          <Stack spacing="1">
            <Text fontWeight="semibold">{product.product_name}</Text>
          </Stack>
        </Stack>
      </Stack>
      <Text fontWeight="medium">{formatCurrency(product.product_price)}</Text>
    </Flex>
  );
};
