import React, { useEffect, useState } from "react";
import "./header.css";
import Drawer from "../Drawer/Drawer";

function Header() {
  const [isDesktop, setIsDesktop] = useState(false);

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
