import React, { useEffect, useState } from "react";
import styled from "styled-components";
function Header(props) {
  return (
    <Headerstlye>
      <HStack>
        <Logo src={require("../assets/ktNetwork_logo.png")}></Logo>
        <HeaderMenu>
          <a
            style={{
              padding: "0px 20px",
              fontWeight: "bold",
              fontSize: "20px",
              color: "black",
              textDecoration: "none",
            }}
            href="/about"
          >
            회사소개
          </a>
          <a
            style={{
              padding: "0px 20px",
              fontWeight: "bold",
              fontSize: "20px",
              color: "black",
              textDecoration: "none",
            }}
            href="/service"
          >
            서비스
          </a>
        </HeaderMenu>
      </HStack>
    </Headerstlye>
  );
}

const Headerstlye = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.6);
`;

const HStack = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 0px 15px;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 1250px;
`;

const Logo = styled.img`
  width: 300px;
`;

const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
`;

export default Header;
