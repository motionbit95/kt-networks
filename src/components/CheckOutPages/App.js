import { Box, Flex, Stack, useColorModeValue, Button } from "@chakra-ui/react";
import { OrderSummary } from "./OrderSummary";
import { PaymentInformation } from "./PaymentInformation";
import { ShippingInformation } from "./ShippingInformation";
import { ShippingMethod } from "./ShippingMethod";
import { useState } from "react";
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
import KSPay from "../../pages/KSPay";

import { useLocation, useNavigate } from "react-router-dom";

function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <KSPay />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export const CheckOutPages = (props) => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

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

    navigate("/kspay", { state: { ...formData } });
  };

  return (
    <Box
      bgGradient={useColorModeValue(
        "linear(to-l, gray.50 50%, white 50%)",
        "linear(to-l, gray.700 50%, gray.800 50%)"
      )}
    >
      {/* <BasicUsage /> */}
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
