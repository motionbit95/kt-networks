import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "700px",
        backgroundColor: "#d9d9d9",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "white",
        }}
      >
        <div style={{ textAlign: "center", fontSize: "36px" }}>
          <div style={{ display: "flex" }}>
            <div style={{ color: "red", fontWeight: "bold" }}>KTNETWORKS</div>와
            함께 다양한 디자인의 세계에서
          </div>
          <div>고객의 비전을 현실로 만들어보세요.</div>
          <button>지금 바로 문의하기</button>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <div
          style={{
            width: "1200px",
            padding: "60px 150px",
          }}
        >
          <img
            src={require("../assets/ktNetwork_logo.png")}
            style={{
              width: "300px",
              marginBottom: "30px",
            }}
          />
          <hr />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "30px",
                gap: "10px",
                // textAlign: "center",
              }}
            >
              <div>Tel. 02-6953-0891 | Fax : 051-635-0892</div>
              <div>
                Addr. Seoul, Korea ㅣ 사업자등록번호 : 619-86-03182 ㅣ
                법인등록번호 : 180111-1526863
              </div>
            </div>
            <PageUPButton>↑</PageUPButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const PageUPButton = styled.div`
  display: flex;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 1px solid white;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 50px;
  font-weight: bold;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
