import React, { useState } from "react";
import "./drawer.css"; // Drawer에 관련된 CSS를 추가합니다.
import { FaBars, FaTimes } from "react-icons/fa";

const Drawer = () => {
  const [open, setOpen] = useState(false); // Drawer의 열림/닫힘 상태를 관리합니다.
  const [active, setActive] = useState(false);

  // Drawer를 열거나 닫는 함수입니다.
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawerOpacity = () => {
    setActive(!active);
  };

  return (
    <div>
      {/* 헤더 버튼 */}
      <div
        className="headerButton"
        onMouseDown={drawerOpacity}
        onClick={toggleDrawer}
      >
        <FaBars />
      </div>

      {/* Drawer 컴포넌트 */}

      <div
        className="drawer_background"
        style={{
          display: active ? "block" : "none",
          position: "fixed",
          left: "11vw",
          top: 0,
          flex: 1,
          width: "90vw",
          height: "100vh",
          backgroundColor: "black",
          opacity: 0.5,
        }}
      ></div>
      <div className={`drawer ${open ? "open" : ""}`}>
        <div
          style={{
            fontSize: "24px",
            cursor: "pointer",
            position: "absolute",
            color: "black",
            top: "10px",
            left: "15px",
          }}
          onMouseDown={drawerOpacity}
          onClick={toggleDrawer}
        >
          <FaTimes />
        </div>
        <ul style={{ marginTop: "50px" }}>
          <li>회사소개</li>
          <li>서비스</li>
          {/* 추가적인 메뉴 아이템들을 여기에 추가할 수 있습니다. */}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
