import {
  Box,
  Center,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { GooglePayLogo, MasterCardLogo, PayPalLogo, VisaLogo } from "./Logos";
import { useState } from "react";

export const PaymentInformation = (props) => {
  const [formData, setFormData] = useState({
    payment_method: "card",
    installMonth: "0",
  });

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    props.onChange(e);
  };

  return (
    <Stack spacing={{ base: "6", md: "10" }}>
      <Heading size="md">결제 정보</Heading>
      <RadioGroup
        colorScheme="blue"
        size="lg"
        name="payment_method"
        value={formData.payment_method}
        onChange={(e) => setFormData({ ...formData, payment_method: e })}
      >
        <Stack direction={"column"} spacing="4">
          <Radio value="card" spacing="3" flex="1" color={"gray.200"}>
            <Stack spacing="1.5" direction={{ base: "column", lg: "row" }}>
              <Box>
                <Text
                  color={useColorModeValue("black", "white")}
                  fontWeight="medium"
                >
                  신용카드
                </Text>
              </Box>
            </Stack>
          </Radio>
          {formData.payment_method === "card" && (
            <HStack>
              <Select ml={6} w={"50%"} name="installMonth" onChange={onChange}>
                <option key={0} value={0}>
                  일시불
                </option>
                {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((month) => (
                  <option key={month} value={month}>
                    {month}개월
                  </option>
                ))}
              </Select>
            </HStack>
          )}
          <Box borderBottom="1px" borderBottomColor="gray.200" h={"1px"} />
          <Radio value="cash" spacing="3" flex="1" color={"gray.200"}>
            <Stack spacing="1.5">
              <Box>
                <Text
                  color={useColorModeValue("black", "white")}
                  fontWeight="medium"
                >
                  가상계좌
                </Text>
              </Box>
            </Stack>
          </Radio>
          <Box borderBottom="1px" borderBottomColor="gray.200" h={"1px"} />
          <Radio value="bank" spacing="3" flex="1" color={"gray.200"}>
            <Stack spacing="1.5">
              <Box>
                <Text
                  color={useColorModeValue("black", "white")}
                  fontWeight="medium"
                >
                  계좌이체
                </Text>
              </Box>
            </Stack>
          </Radio>
          <Box borderBottom="1px" borderBottomColor="gray.200" h={"1px"} />
          <Radio value="phone" spacing="3" flex="1" color={"gray.200"}>
            <Stack spacing="1.5">
              <Box>
                <Text
                  color={useColorModeValue("black", "white")}
                  fontWeight="medium"
                >
                  휴대폰결제
                </Text>
              </Box>
            </Stack>
          </Radio>
        </Stack>
      </RadioGroup>
      <Stack spacing="6"></Stack>
      {/* <Stack spacing="8">
        <Stack direction="row" spacing="6">
          <FormControl id="card-number">
            <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
              Credit card number
            </FormLabel>
            <Input
              name="card-number"
              placeholder="Card number"
              focusBorderColor={useColorModeValue("blue.500", "blue.200")}
            />
          </FormControl>
          <FormControl id="card-name">
            <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
              Name on card
            </FormLabel>
            <Input
              name="card-name"
              placeholder="Card name"
              focusBorderColor={useColorModeValue("blue.500", "blue.200")}
            />
          </FormControl>
        </Stack>
        <HStack spacing="6">
          <FormControl id="card-expiry" width="full">
            <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
              Expiry date
            </FormLabel>
            <HStack spacing="3">
              <Select
                aria-label="Select Month"
                focusBorderColor={useColorModeValue("blue.500", "blue.200")}
              >
                <option>01</option>
              </Select>
              <Select
                aria-label="Select Year"
                focusBorderColor={useColorModeValue("blue.500", "blue.200")}
              >
                <option>2017</option>
              </Select>
            </HStack>
          </FormControl>
          <FormControl id="card-cvc">
            <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
              CVV/CVC
            </FormLabel>
            <Input
              name="card-cvc"
              placeholder="CVC"
              focusBorderColor={useColorModeValue("blue.500", "blue.200")}
            />
          </FormControl>
        </HStack>
      </Stack> */}
    </Stack>
  );
};
