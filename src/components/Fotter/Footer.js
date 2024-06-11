import React from "react";
import { FaArrowUp, FaPen } from "react-icons/fa";
import "../../styles/dashboard.css";
import "../Fotter/footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="footer_wrap">
        <div>
          {/* 배경 이미지 */}
          <div className="footer_bg_img" />
          <div className="footer_bg_opacity" />
          {/* 내용 */}
          <div className="footer_title_box">
            <div className="footer_title_text">
              <div className="text_style">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div
                    className="title"
                    style={{
                      color: "red",
                      fontWeight: "bold",
                    }}
                  >
                    KTNETWORKS
                  </div>
                  <div className="title">와 함께</div>
                </div>
                <div className="title">다양한 디자인의 세계에서</div>
              </div>
              <div className="title">고객의 비전을 현실로 만들어보세요.</div>
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
            <div className="hr" />
            <div className="footer_info_box">
              <div className="footer_info">
                <div>
                  대표자명 : 김남훈 | Tel. 02-6953-0891 | Fax : 051-635-0892
                </div>
                <div>통신판매신고번호 : 제 2024-부산진-0770호</div>
                <div>주소 : 부산광역시 부산진구 중앙대로 630, BCC 건물 2층</div>
                {/* <div>
                  Addr. Seoul, Korea ㅣ 사업자등록번호 : 619-86-03182 ㅣ
                  법인등록번호 : 180111-1526863
                </div> */}
                <div className="footer_info_detail">
                  {/* <div>Addr. Seoul, Korea</div> */}
                  {/* <div className="vr" /> */}
                  <div>사업자등록번호 : 619-86-03182</div>
                  <div className="vr" />
                  <div>법인등록번호 : 180111-1526863</div>
                </div>
              </div>
              <div className="pageup_button" onClick={scrollToTop}>
                <FaArrowUp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
