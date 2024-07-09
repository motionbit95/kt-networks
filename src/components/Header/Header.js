import React, { useEffect, useState } from "react";
import "./header.css";
import Drawer from "../Drawer/Drawer";
import { Box, Button } from "@chakra-ui/react";
import { auth, db } from "../../firebase_conf";
import { doc, getDoc } from "firebase/firestore";

function Header() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1000);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        getDoc(doc(db, "users", user.uid)).then((doc) => {
          if (doc.data().approved) {
            console.log("승인됨");
            setIsLoggedIn(true);
          } else {
            console.log("승인안됨");
            setIsLoggedIn(false);
          }
        });
      } else {
        setIsLoggedIn(false);
      }
    });
  }, []);

  const handleSignOut = () => {
    auth.signOut();
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  return (
    <>
      {isDesktop ? (
        <div className="desktopheader">
          <div className="hstack">
            <a href="/">
              <img
                src={require("../../assets/ktNetwork_logo.png")}
                className="desktop_logo"
              />
            </a>
            <div className="header_menu">
              <a className="header_link" href="/about">
                회사소개
              </a>
              <a className="header_link" href="/service">
                서비스
              </a>
              <a className="header_link" href="/product">
                상품구매
              </a>
              <Box padding={"0px 20px"}>
                {isLoggedIn ? (
                  <Button onClick={handleSignOut}>로그아웃</Button>
                ) : (
                  <Button onClick={() => (window.location.href = "/login")}>
                    로그인
                  </Button>
                )}
              </Box>
            </div>
          </div>
        </div>
      ) : (
        <div className="mobileheader">
          <div style={{ position: "absolute", left: "15px" }}>
            <Drawer />
          </div>
          <a href="/">
            <img
              src={require("../../assets/ktNetwork_logo.png")}
              style={{ width: "auto", height: "24px" }}
            />
          </a>
        </div>
      )}
    </>
  );
}

export default Header;
