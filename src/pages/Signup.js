import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth, db } from "../firebase_conf";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";

const Signup = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [password_confirm, setPassword_confirm] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (checkValid()) {
      console.log(formData);
      await signUp(formData.email, formData.password).then((res) => {
        if (res.uid) {
          toast({
            title: "회원가입이 완료되었습니다.",
            status: "success",
            isClosable: true,
          });

          setDoc(doc(db, "users", res.uid), {
            createdAt: Date.now(),
            email: formData.email,
            password: formData.password,
            uid: res.uid,
            approved: false,
          })
            .then(() => {
              navigate("/login");
            })
            .catch((err) => {
              toast({
                title: err.message,
                status: "error",
                isClosable: true,
              });
              console.log(err);
              return;
            });
        } else {
          toast({
            title: res.error,
            status: "error",
            isClosable: true,
          });
        }
      });
    }
  };

  const checkValid = () => {
    console.log(formData.password, password_confirm);
    if (formData.email === "") {
      toast({
        title: "이메일를 입력하세요.",
        status: "error",
        isClosable: true,
      });
      return false;
    }
    if (formData.password === "") {
      toast({
        title: "비밀번호를 입력하세요.",
        status: "error",
        isClosable: true,
      });
      return false;
    }
    if (formData.password !== password_confirm) {
      toast({
        title: "비밀번호가 일치하지 않습니다.",
        status: "error",
        isClosable: true,
      });
      return false;
    }

    return true;
  };

  async function signUp(email, password) {
    let userId, errorMsg;
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log("uid : ", user.uid);
        userId = user.uid;
      })
      .catch(async (error) => {
        const errorCode = error.code;
        const errorMessage = "";
        // ..

        if (errorCode.includes("email-already-in-use")) {
          errorMsg = "이미 존재하는 이메일입니다.";
        } else if (errorCode.includes("invalid-email")) {
          errorMsg = "이메일 형식이 옳지 않습니다.";
        } else if (errorCode.includes("weak-password")) {
          errorMsg =
            "비밀번호는 영어와 숫자를 포함하여 6자 이상으로 작성해야합니다.";
        } else {
          errorMsg = error.message;
        }
      });

    return { uid: userId, error: errorMsg };
  }

  return (
    <Container maxW="md" py={{ base: "24", md: "36" }}>
      <Stack spacing="8">
        <Stack spacing="6" align="center">
          <Stack spacing="3" textAlign="center">
            <Heading size={{ base: "md", md: "lg" }}>회원가입</Heading>
            <Text color="gray.500">
              회원가입 후 관리자의 승인을 기다려주세요.
            </Text>
          </Stack>
        </Stack>
        <Stack spacing="6">
          <Stack spacing="5">
            <FormControl isRequired>
              <FormLabel htmlFor="email">이메일</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="유효한 이메일을 입력해주세요."
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password">비밀번호</FormLabel>
              <Input
                id="password"
                type="password"
                placeholder="6자 이상의 비밀번호를 입력해주세요."
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
              {/* <FormHelperText color="gray.500">
              8자 이상의 비밀번호를 입력해주세요.
            </FormHelperText> */}
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="password_confirm">비밀번호 확인</FormLabel>
              <Input
                id="password_confirm"
                type="password"
                placeholder="비밀번호를 다시 입력해주세요."
                onChange={(e) => setPassword_confirm(e.target.value)}
              />
              {/* <FormHelperText color="gray.500">
              8자 이상의 비밀번호를 입력해주세요.
            </FormHelperText> */}
            </FormControl>
            <Button
              colorScheme="yellow"
              size="lg"
              fontSize="sm"
              onClick={handleSubmit}
            >
              회원가입하기
            </Button>
          </Stack>
        </Stack>
        <Text textStyle="sm" color="gray.500" textAlign="center">
          이미 가입한 계정이 있으십니까?{" "}
          <Link href="/login">로그인하러 가기</Link>
        </Text>
      </Stack>
    </Container>
  );
};

export default Signup;
