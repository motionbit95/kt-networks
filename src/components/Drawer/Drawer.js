import React, { useState } from "react";
import "./drawer.css"; // Drawer에 관련된 CSS를 추가합니다.
import { FaBars, FaTimes } from "react-icons/fa";

const Drawer = () => {
  const [open, setOpen] = useState(false); // Drawer의 열림/닫힘 상태를 관리합니다.

  // Drawer를 열거나 닫는 함수입니다.
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div>
      {/* 헤더 버튼 */}
      <div className="headerButton" onClick={toggleDrawer}>
        <FaBars />
      </div>

      {/* Drawer 컴포넌트 */}

      <div className={`drawer ${open ? "open" : ""}`}>
        <div
          style={{
            fontSize: "30px",
            cursor: "pointer",
            position: "absolute",
            color: "gray",
            top: "10px",
            right: "10px",
          }}
          onClick={toggleDrawer}
        >
          <FaTimes />
        </div>
        <ul>
          <div style={{ height: "50px" }} />
          <li>회사소개</li>
          <li>서비스</li>
          {/* 추가적인 메뉴 아이템들을 여기에 추가할 수 있습니다. */}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
