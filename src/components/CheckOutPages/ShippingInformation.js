import {
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

import DatePicker, { registerLocale } from "react-datepicker";
import { ko } from "date-fns/locale/ko";
import { useState } from "react";

export const ShippingInformation = (props) => {
  registerLocale("ko", ko);
  const [formData, setFormData] = useState({
    installMonth: "0",
    startDate: new Date(),
    endDate: new Date(),
  });

  const onChange = (name, e) => {
    console.log({ [name]: e });
    if (name) {
      setFormData({
        ...formData,
        [name]: e,
      });

      props.onChange(name, e);
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });

      props.onChange(e);
    }
  };

  return (
    <Stack spacing={{ base: "6", md: "10" }}>
      <Heading size="md">결제자 정보</Heading>
      <Stack spacing={{ base: "6", md: "8" }}>
        {/* <FormControl id="period">
          <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
            계약기간
          </FormLabel>
          <HStack w={"100%"}>
            <DatePicker
              name="startDate"
              locale={"ko"}
              selected={formData.startDate}
              onChange={(date) => onChange("startDate", date)}
              dateFormat="yyyy/MM/dd"
              minDate={new Date()}
              customInput={<Input />}
            />
            <Text>~</Text>
            <DatePicker
              name="endDate"
              locale={"ko"}
              selected={formData.endDate}
              onChange={(date) => onChange("endDate", date)}
              dateFormat="yyyy/MM/dd"
              minDate={formData.startDate}
              customInput={<Input />}
            />
          </HStack>
        </FormControl> */}
        <FormControl id="business_name">
          <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
            상호명
          </FormLabel>
          <Input
            onChange={onChange}
            name="business_name"
            placeholder="상호명"
            focusBorderColor={useColorModeValue("blue.500", "blue.200")}
          />
        </FormControl>
        <FormControl id="userName">
          <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
            대표자 성함
          </FormLabel>
          <Input
            onChange={onChange}
            name="userName"
            placeholder="대표자 성함"
            focusBorderColor={useColorModeValue("blue.500", "blue.200")}
          />
        </FormControl>
        <FormControl id="sales_manager">
          <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
            영업담당자 성함
          </FormLabel>
          <Input
            onChange={onChange}
            name="sales_manager"
            placeholder="영업담당자 성함"
            focusBorderColor={useColorModeValue("blue.500", "blue.200")}
          />
        </FormControl>
      </Stack>
    </Stack>
  );
};
