import React from "react";
import { FaArrowUp, FaPen } from "react-icons/fa";
import "../../styles/dashboard.css";
import "../Fotter/footer.css";

const Footer = () => {
  return (
    <div className="footer_wrap">
      <div>
        {/* 배경 이미지 */}
        <div className="footer_bg_img" />
        <div className="footer_bg_opacity" />
        {/* 내용 */}
        <div className="footer_title_box">
          <div className="f36">
            <div style={{ display: "flex" }}>
              <div style={{ color: "red", fontWeight: "bold" }}>KTNETWORKS</div>
              <div style={{ color: "white" }}>
                와 함께 다양한 디자인의 세계에서
              </div>
            </div>
            <div style={{ color: "white" }}>
              고객의 비전을 현실로 만들어보세요.
            </div>
          </div>
          <div>
            <a href="/" className="footer_button">
              <FaPen style={{ marginRight: "10px", display: "inherit" }} />
              지금 바로 문의하기
            </a>
          </div>
        </div>
      </div>
      <div className="footer_info_bg">
        <div className="footer_info_container">
          <img
            src={require("../../assets/ktNetwork_logo_white.png")}
            className="footer_logo"
          />
          <hr />
          <div className="footer_info_box">
            <div className="footer_info">
              <div>Tel. 02-6953-0891 | Fax : 051-635-0892</div>
              <div>
                Addr. Seoul, Korea ㅣ 사업자등록번호 : 619-86-03182 ㅣ
                법인등록번호 : 180111-1526863
              </div>
            </div>
            <div className="pageup_button">
              <FaArrowUp />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
