import React, { useState } from "react";
import { confirmPasswordReset, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase_conf";
import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";

function Find() {
  const [email, setEmail] = useState("");
  const [oobCode, setOobCode] = useState(null);

  const handleCodeSent = (email) => {
    setEmail(email);
  };

  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const oobCode = urlParams.get("oobCode");
    if (oobCode) {
      setOobCode(oobCode);
    }
  }, []);

  return (
    <div className="App">
      {!oobCode ? (
        <SendVerificationCode onCodeSent={handleCodeSent} />
      ) : (
        <ResetPassword oobCode={oobCode} />
      )}
    </div>
  );
}

export default Find;

const ResetPassword = ({ oobCode }) => {
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const resetPassword = async () => {
    try {
      await confirmPasswordReset(auth, oobCode, newPassword);
      setMessage("Password has been reset successfully");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <input
        type="password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        placeholder="Enter new password"
      />
      <button onClick={resetPassword}>Reset Password</button>
      <p>{message}</p>
    </div>
  );
};

const SendVerificationCode = ({ onCodeSent }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendVerificationCode = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("이메일에서 비밀번호 재설정 링크를 확인해주세요.");
      onCodeSent(email);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <Container maxW={"container.sm"} p={36}>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Heading size={{ base: "md", md: "lg" }}>비밀번호 재설정</Heading>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="가입시 등록한 이메일을 입력해주세요."
        />
        <Button w={"100%"} onClick={sendVerificationCode}>
          인증하기
        </Button>
        <p>{message}</p>
      </Stack>
    </Container>
  );
};
