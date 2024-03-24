import React from "react";
import "../styles/dashboard.css";

const Intro = () => {
  return (
    <div id="Container" className="Container">
      <div id="Section1" className="Section1">
        <div id="about_header" className="about_header">
          <div id="about_Box" className="about_Box">
            <div style={{ fontSize: "36px", color: "red", fontWeight: "bold" }}>
              회사소개
            </div>
            <div style={{ fontSize: "22px" }}>
              최신 트렌드와 기술을 항상 주시하고 적용하여 고객에게 혁신적이고
              시대에 맞는 컨텐츠를 제공합니다.
            </div>
          </div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div class="about_path">
            <div>
              <span>Home</span>
            </div>
            <span>〉</span>
            <div>
              <span>회사소개</span>
            </div>
          </div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div class="about_contents">
            <div
              class="card_0"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <div
                style={{ fontSize: "16px", padding: "30px 0px", color: "red" }}
              >
                ABOUT US
              </div>
              <div style={{ fontSize: "30px" }}>
                고객의 비즈니스 성장을 위해 전략적인 광고 솔루션을 제공합니다.
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  fontSize: "18px",
                }}
              >
                <div>
                  케이티네트웍스는 다양한 형식의 컨텐츠를 제작하는 전문
                  회사입니다.
                </div>
                <div>
                  케이티네트웍스와 함께하면 고객의 브랜드 가치를 향상시킬 수
                  있습니다.
                </div>
              </div>
            </div>

            <div class="card_row">
              <div className="item_img">
                <img
                  src={require("../assets/card1.png")}
                  className="card_img"
                />
              </div>
              <div class="item_text" style={{ width: "50%" }}>
                <div class="item_01">
                  <p>
                    <strong>당신의 브랜드</strong>를
                  </p>
                  <p>돋보이게 만들어 드립니다.</p>
                </div>
                <div class="item_02">
                  <p>우리는 당신의 브랜드를 강조하고</p>
                  <p>
                    독특한 아이덴티티를 구축하는데 전문성을 갖추고 있습니다.
                  </p>
                </div>
                <div class="item_03">
                  <p>우리의 컨텐츠 제작은</p>
                  <p>당신의 브랜드가 시장에서 두드러지게 만들어줄 것입니다.</p>
                </div>
              </div>
            </div>

            <div class="card_row_reverse">
              <div className="item_img">
                <img
                  src={require("../assets/card2.png")}
                  className="card_img"
                />
              </div>
              <div class="item_text_row">
                <div class="item_01 item_text_row">
                  <p>
                    <strong>맞춤형 디자인</strong>과
                  </p>
                  <p>
                    <strong>사용자 경험</strong>을 제공합니다
                  </p>
                </div>
                <div class="item_02 item_text_row">
                  <p>우리는 사용자 중심의 디자인과</p>
                  <p>최신 기술을 활용하여 맞춤형 컨텐츠를 제작합니다.</p>
                </div>
                <div class="item_03 item_text_row">
                  <p>사용자들이 쉽게 찾고, 상호작용하며,</p>
                  <p>
                    당신의 비즈니스에 대한 긍정적인 경험을 얻을 수 있도록
                    돕습니다.
                  </p>
                </div>
              </div>
            </div>

            <div class="card_row">
              <div className="item_img">
                <img
                  src={require("../assets/card3.png")}
                  className="card_img"
                />
              </div>
              <div class="item_text" style={{ width: "50%" }}>
                <div class="item_01">
                  <p>
                    <strong>혁신적이고 시대에 맞는 컨텐츠</strong>를 제공
                    합니다.
                  </p>
                </div>
                <div class="item_02">
                  <p>우리의 목표는 고객의 비즈니스 성공을 돕는 것이며,</p>
                  <p>온라인에서의 가시성과 고객 유치에 도움을 줄 것입니다.</p>
                </div>
              </div>
            </div>

            <div class="card_row_reverse">
              <div className="item_img">
                <img
                  src={require("../assets/card2.png")}
                  className="card_img"
                />
              </div>
              <div class="item_text_row">
                <div class="item_01 item_text_row">
                  <p>경험이 풍부한</p>
                  <p>
                    <strong>전문과들과의 협업</strong>
                  </p>
                </div>
                <div class="item_02 item_text_row">
                  <p>우리는 경험이 풍부한 전문가들로 구성된 팀으로,</p>
                  <p>당신의 컨텐츠에 최상의 결과를 제공합니다.</p>
                  <p>우리의 전문가들은 최신 트렌드와</p>
                </div>
                <div class="item_03 item_text_row">
                  <p>기술에 대한 이해력을 갖추고 있으며,</p>
                  <p>당신의 비즈니스에 맞는 최적의 솔루션을 제공합니다.</p>
                </div>
              </div>
            </div>
            <div class="card_row">
              <div className="item_img">
                <img
                  src={require("../assets/card5.png")}
                  className="card_img"
                />
              </div>
              <div class="item_text" style={{ width: "50%" }}>
                <div class="item_01">
                  <p>지속적인 지원과</p>
                  <p>
                    <strong>유지보수</strong>
                  </p>
                </div>
                <div class="item_02">
                  <p>우리는 컨텐츠 제작 후에도</p>
                  <p>지속적인 지원과 유지보수를 제공합니다.</p>
                </div>
                <div className="item_03">
                  <p>당신의 홈페이지가 항상 최신 상태를 유지하고,</p>
                  <p>원활한 운영을 할 수 있도록 돕습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about_bottom_wrap">
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
                textAlign: "center",
              }}
            >
              <div>
                <div style={{ fontSize: "16px", color: "red" }}>MISSION</div>
                <div style={{ fontSize: "36px", fontWeight: "bold" }}>
                  기업이념
                </div>
              </div>
              <div style={{ fontSize: "20px", textAlign: "center" }}>
                <div>
                  고객 중심의 서비스와 품질, 신뢰, 사회적 책임을 중요시하며,
                  항상 최고의 결과를 위해 노력합니다.
                </div>
                <div>
                  우리와 함께하면 고객의 비즈니스 성장을 위한 효과적인 광고
                  전략을 구현할 수 있습니다.
                </div>
              </div>
            </div>
            <div class="bottom_contents">
              <div class="bottom_column">
                <div class="bottom_text">
                  <div class="bottom_text_title">창의성과 혁신</div>
                  <div class="bottom_desc">
                    우리는 창의적인 아이디어와 혁신적인 접근을 통해 고객의
                    기대를 초월하는 광고를 제작합니다. 새로운 아이디어와
                    트렌드를 적극적으로 수용하며, 항상 변화하는 시장에 적응하고
                    발전합니다.
                  </div>
                </div>
                <img
                  src={require("../assets/bottom1.jpeg")}
                  style={{ width: "300px", height: "350px" }}
                />
              </div>
              <div class="bottom_column">
                <img
                  src={require("../assets/bottom2.jpeg")}
                  style={{ width: "300px", height: "350px" }}
                />
                <div class="bottom_text">
                  <div class="bottom_text_title">고객 중심</div>
                  <div class="bottom_desc">
                    우리는 고객의 성공을 최우선으로 생각합니다. 고객의 니즈와
                    목표를이해하고, 맞춤형 솔루션을 제공하여 고객의 비즈니스
                    성장을 돕습니다. 고객과의 긴밀한 협력을 통해 최상의 결과를
                    창출합니다.
                  </div>
                </div>
              </div>
              <div class="bottom_column">
                <div class="bottom_text">
                  <div class="bottom_text_title">품질과 신뢰</div>
                  <div class="bottom_desc">
                    우리는 고객의 성공을 최우선으로 생각합니다. 고객의 니즈와
                    목표를 이해하고, 맞춤형 솔루션을 제공하여 고객의 비즈니스
                    성장을 돕습니다. 고객과의 긴밀한 협력을 통해 최상의 결과를
                    창출합니다.
                  </div>
                </div>
                <img
                  src={require("../assets/bottom3.jpeg")}
                  style={{ width: "300px", height: "350px" }}
                />
              </div>
              <div class="bottom_column">
                <img
                  src={require("../assets/bottom4.jpeg")}
                  style={{ width: "300px", height: "350px" }}
                />
                <div
                  class="bottom_text"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-once="true"
                >
                  <div class="bottom_text_title">사회적 책임</div>
                  <div class="bottom_desc">
                    우리는 사회적 책임을 중요하게 생각합니다. 우리의 광고는
                    윤리적이고 사회적 가치를 존중합니다. 우리는 고객과의 협력을
                    통해 성공적인 광고 캠페인을 구현하고, 브랜드의 가치를
                    향상시키는데 최선을 다하고 있습니다.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
