import React from "react";
import styled from "styled-components";
function Header(props) {
  return (
    <Headerstlye>
      <HStack>
        <Logo src={require("../assets/ktNetwork_logo.png")}></Logo>
        <HeaderMenu>
          <div>회사소개</div>
          <div>서비스</div>
        </HeaderMenu>
      </HStack>
    </Headerstlye>
  );
}

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
`;

const HeaderMenu = styled.div`
  display: flex;
  flex-direction: row;
`;

const Logo = styled.img`
  width: 300px;
`;

export default Header;
