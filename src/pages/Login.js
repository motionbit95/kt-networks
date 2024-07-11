import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useDisclosure,
  useMergeRefs,
  useToast,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { forwardRef, useRef } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { auth, db } from "../firebase_conf";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";

const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    signIn(formData.email, formData.password).then((res) => {
      if (res.uid) {
        // uid에 해당하는 고객이 승인 고객인지 아닌지 판단
        getDoc(doc(db, "users", res.uid)).then((doc) => {
          if (doc.exists()) {
            if (doc.data().approved) {
              // 관리자 페이지로 이동
              // navigate("/admin");
              window.open("/admin", "_self");
            } else {
              toast({
                title: "관리자의 승인이 필요한 계정입니다.",
                status: "error",
                isClosable: true,
              });
            }
          }
        });
      } else {
        toast({
          title: res.error,
          status: "error",
          isClosable: true,
        });
      }
    });
  };
  async function signIn(email, password) {
    let userId, errorMsg;
    console.log(email, password);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        userId = user.uid;

        console.log("uid : ", user.uid);
      })
      .catch((error) => {
        const errorCode = error.code;

        if (errorCode.includes("invalid-email")) {
          errorMsg = "이메일 형식이 옳지 않습니다.";
        } else if (errorCode.includes("invalid-credential")) {
          errorMsg = "이메일과 비밀번호를 다시 확인해주세요.";
        } else {
          errorMsg = error.message;
        }

        console.log(errorCode, errorMsg);
      });

    return { uid: userId, error: errorMsg };
  }

  return (
    <Container
      maxW="lg"
      py={{ base: "24", md: "36" }}
      px={{ base: "0", sm: "8" }}
    >
      <Stack spacing="8">
        <Stack spacing="6">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "md", md: "lg" }}>로그인</Heading>
            <Text color="gray.500">
              아직 회원이 아니신가요? <Link href="/signup">회원가입하기</Link>
            </Text>
          </Stack>
        </Stack>
        <Box
          py={{ base: "0", sm: "8" }}
          px={{ base: "4", sm: "10" }}
          bg={{ base: "transparent", sm: "bg.surface" }}
          boxShadow={{ base: "none", sm: "md" }}
          borderRadius={{ base: "none", sm: "xl" }}
        >
          <Stack spacing="6">
            <Stack spacing="5">
              <FormControl>
                <FormLabel htmlFor="email">이메일</FormLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="이메일을 입력하세요."
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </FormControl>
              <PasswordField
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </Stack>
            <HStack justify="flex-end">
              <Button
                variant="text"
                size="sm"
                onClick={() => navigate("/find")}
              >
                비밀번호를 잊으셨나요?
              </Button>
            </HStack>
            <Stack spacing="6">
              <Button colorScheme="yellow" onClick={handleSubmit}>
                로그인
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default Login;

const PasswordField = forwardRef((props, ref) => {
  const { isOpen, onToggle } = useDisclosure();
  const inputRef = useRef < HTMLInputElement > null;

  const mergeRef = useMergeRefs(inputRef, ref);
  const onClickReveal = () => {
    onToggle();
    if (inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  };

  return (
    <FormControl>
      <FormLabel htmlFor="password">비밀번호</FormLabel>
      <InputGroup>
        <InputRightElement>
          <IconButton
            variant="text"
            aria-label={isOpen ? "Mask password" : "Reveal password"}
            icon={isOpen ? <HiEyeOff /> : <HiEye />}
            onClick={onClickReveal}
          />
        </InputRightElement>
        <Input
          id="password"
          ref={mergeRef}
          name="password"
          type={isOpen ? "text" : "password"}
          autoComplete="current-password"
          required
          placeholder="비밀번호를 입력하세요."
          onChange={props.onChange}
          {...props}
        />
      </InputGroup>
    </FormControl>
  );
});

PasswordField.displayName = "PasswordField";
