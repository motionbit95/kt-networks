import React, { useState } from "react";
import "../styles/dashboard.css";
import { FaCheck } from "react-icons/fa";

const Tab = ({ render, ...props }) => {
  const [tabIndex, setIndex] = useState(0);

  return (
    <div id="tap_Wrap" className="tap_Wrap">
      {/* 탭 버튼들 */}
      <div id="tap_Buttons" className="tap_Buttons">
        {render.map((item, index) => (
          <div
            className={
              tabIndex === index ? "tap_Button selected_Button" : "tap_Button"
            }
            onClick={() => setIndex(index)}
          >
            {item.title}
          </div>
        ))}
      </div>

      {/* 탭 패널들 */}
      <div>
        {render.map((item, index) => (
          <div>{tabIndex === index && <div>{item.content}</div>}</div>
        ))}
      </div>
    </div>
  );
};

const Service = () => {
  return (
    <div id="Container" className="Container">
      <div id="Section" className="Section">
        <div id="header_box" className="header_box">
          <div className="header_bg_img" />
          <div id="header_text_box" className="header_text_box">
            <div className="header_text">
              <div className="f36 red bold">서비스</div>
              <div className="f22">
                창의적이고 전문적인 디자인 서비스를 제공합니다. 저희와 함께
                성공적인 광고 디자인을 만들어보세요.
              </div>
            </div>
          </div>
        </div>
        <div id="path_wrap" className="path_wrap">
          <div id="path_box" class="path_box">
            <div style={{ padding: "0px 15px" }}>
              <div className="path_item">
                <a href="/" style={{ textDecoration: "none", opacity: "0.5" }}>
                  <span>Home</span>
                </a>
                <span>〉</span>
                <a
                  href="/service"
                  className="red"
                  style={{ textDecoration: "none" }}
                >
                  <span>서비스</span>
                </a>
              </div>
            </div>
          </div>
          <div className="hr2" />
        </div>
        <div className="tap_container">
          <Tab
            render={[
              {
                title: "홈페이지 제작",
                content: (
                  <div>
                    <img
                      src={require("../assets/homepage.jpeg")}
                      className="service_title_img"
                    />
                    <div className="service_title_box">
                      <div className="service_title">
                        <div className="f16 red bold">HOMEPAGE</div>
                        <div className="f36 bold">홈페이지 제작</div>
                      </div>
                      <div style={{ flex: 3 }}>
                        <div className="f20">
                          홈페이지 제작은 고객의 비전과 목표를 반영하여
                          웹사이트를 구축하는 과정입니다. 우리는 고객과의 철저한
                          커뮤니케이션을 통해 고객의 요구사항을 이해하고, 그에
                          맞는 디자인과 기능을 구현합니다.
                        </div>
                      </div>
                    </div>
                    <div className="service_table">
                      <div className="service_table_title_box">
                        <div className="f26 bold">특장점</div>
                      </div>
                      <div className="service_table_contents">
                        <div className="service_table_item">
                          <FaCheck className="f48 red" />
                          <div className="service_table_item_text">
                            <div className="f20 red bold">맞춤화된 디자인</div>
                            <div className="f16">
                              고객의 요구사항을 정확히 이해하고, 그에 맞는
                              디자인을 구현하여 고객의 브랜드를 강화할 수
                              있습니다.
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="service_table_item">
                          <FaCheck className="f48 red" />
                          <div className="service_table_item_text">
                            <div className="f20 red bold">사용자 경험 개선</div>
                            <div className="f16">
                              홈페이지 제작은 사용자의 편의성과 직관성을
                              고려하여 디자인과 기능을 구현합니다. 사용자가
                              웹사이트를 쉽게 이용할 수 있도록 최적화된 사용자
                              경험을 제공합니다.
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="service_table_item">
                          <FaCheck className="f48 red" />
                          <div className="service_table_item_text">
                            <div className="f20 red bold">확장성과 유연성</div>
                            <div className="f16">
                              홈페이지 제작은 고객의 요구에 따라 다양한 기능을
                              추가할 수 있습니다. 예를 들어, 온라인 쇼핑몰, 예약
                              시스템, 회원 가입 기능 등을 구현할 수 있습니다.
                              또한, 홈페이지는 필요에 따라 확장이 가능하며,
                              유지보수와 업데이트를 통해 항상 최신 상태를 유지할
                              수 있습니다.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                title: "어플리케이션 제작",
                content: (
                  <div>
                    <img
                      src={require("../assets/app.jpeg")}
                      className="service_title_img"
                    />
                    <div className="service_title_box">
                      <div className="service_title">
                        <div className="f16 red bold">APPLICATION</div>
                        <div className="f36 bold">
                          <div style={{ marginBottom: "13px" }}>
                            어플리케이션
                          </div>
                          <div>제작</div>
                        </div>
                      </div>
                      <div style={{ flex: 3 }}>
                        <div className="f20">
                          어플리케이션 제작은 사용자 중심적인 디자인과 직관적인
                          사용성을 고려합니다. 사용자들이 쉽게 어플리케이션을
                          이용하고, 원하는 정보와 기능을 빠르게 찾을 수 있도록
                          최적화된 인터페이스를 제공합니다.
                        </div>
                      </div>
                    </div>
                    <div className="service_table">
                      <div className="service_table_title_box">
                        <div className="f26 bold">특장점</div>
                      </div>
                      <div className="service_table_contents">
                        <div className="service_table_item">
                          <FaCheck className="f48 red" />
                          <div className="service_table_item_text">
                            <div className="f20 red bold">맞춤형 솔루션</div>
                            <div className="f16">
                              고객의 요구와 목표에 맞춰 맞춤형 어플리케이션을
                              제작합니다. 고객의 비전을 이해하고, 최신 기술과
                              디자인 트렌드를 활용하여 고객의 요구에 부합하는
                              어플리케이션을 구현합니다.
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="service_table_item">
                          <FaCheck className="f48 red" />
                          <div className="service_table_item_text">
                            <div className="f20 red bold">
                              사용자 중심적인 디자인
                            </div>
                            <div className="f16">
                              사용자들이 쉽게 어플리케이션을 이용하고, 원하는
                              정보와 기능을 빠르게 찾을 수 있도록 최적화된
                              인터페이스를 제공합니다. 사용자 중심적인 디자인과
                              직관적인 사용성을 고려하여 사용자들에게 편리한
                              경험을 제공합니다.
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="service_table_item">
                          <FaCheck className="f48 red" />
                          <div className="service_table_item_text">
                            <div className="f20 red bold">보안과 안정성</div>
                            <div className="f16">
                              사용자의 개인정보와 데이터를 안전하게 보호하고,
                              어플리케이션의 안정성을 유지하기 위해 최신 보안
                              기술을 적용합니다.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                title: "영상 제작",
                content: (
                  <div>
                    <img
                      src={require("../assets/video.jpeg")}
                      className="service_title_img"
                    />
                    <div className="service_title_box">
                      <div className="service_title">
                        <div className="f16 red bold">PRODUCTION</div>
                        <div className="f36 bold">영상 제작</div>
                      </div>
                      <div style={{ flex: 3 }}>
                        <div className="f20">
                          고객의 요구와 목표에 맞춰 최상의 영상 콘텐츠를
                          제작합니다. 우리의 전문가들은 다양한 분야에서 다년간의
                          경험을 쌓아왔으며, 최신의 기술과 독창적인 아이디어를
                          활용하여 고객의 비전을 현실로 만들어냅니다.
                        </div>
                      </div>
                    </div>
                    <div className="service_table">
                      <div className="service_table_title_box">
                        <div className="f26 bold">특장점</div>
                      </div>
                      <div className="service_table_contents">
                        <div className="service_table_item">
                          <FaCheck className="f48 red" />
                          <div className="service_table_item_text">
                            <div className="f20 red bold">
                              다양한 분야에 적용
                            </div>
                            <div className="f16">
                              광고, 프로모션, 기업 홍보, 제품 소개 등 다양한
                              분야에 적용될 수 있습니다.
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="service_table_item">
                          <FaCheck className="f48 red" />
                          <div className="service_table_item_text">
                            <div className="f20 red bold">
                              전문적인 영상 제작 서비스 제공
                            </div>
                            <div className="f16">
                              고객의 요구에 따라 스토리보드 작성, 촬영, 편집,
                              음향 등 모든 단계를 전문적으로 수행합니다.
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="service_table_item">
                          <FaCheck className="f48 red" />

                          <div className="service_table_item_text">
                            <div className="f20 red bold">맞춤 서비스</div>
                            <div className="f16">
                              <div>
                                항상 고객의 요구와 예산에 맞춰 유연하게
                                제공됩니다.
                              </div>
                              <div>
                                고객과의 긴밀한 협력을 통해 최고의 결과물을
                                만들어내고자 합니다.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                title: "로고 디자인",
                content: (
                  <div>
                    <img
                      src={require("../assets/logo.jpeg")}
                      className="service_title_img"
                    />
                    <div className="service_title_box">
                      <div className="service_title">
                        <div className="f16 red bold">LOGO DESIGN</div>
                        <div className="f36 bold">로고 디자인</div>
                      </div>
                      <div style={{ flex: 3 }}>
                        <div className="f20">
                          우리는 고객의 비전과 가치를 반영한 독특하고 차별화된
                          로고를 제작하는 것을 목표로 하고 있습니다.우리의
                          로고는 고객의 브랜드를 대표하며, 고객의 타겟 시장과
                          고객층에 맞는 이미지를 전달합니다.
                        </div>
                      </div>
                    </div>
                    <div className="service_table">
                      <div className="service_table_title_box">
                        <div className="f26 bold">특장점</div>
                      </div>
                      <div className="service_table_contents">
                        <div className="service_table_item">
                          <FaCheck className="f48 red" />
                          <div className="service_table_item_text">
                            <div className="f20 red bold">
                              창의적인 아이디어
                            </div>
                            <div className="f16">
                              우리는 창의적인 아이디어를 통해 일반적이지 않고,
                              기존의 흔한 로고와는 다른 독특한 모습을 가지고
                              있습니다.
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="service_table_item">
                          <FaCheck className="f48 red" />
                          <div className="service_table_item_text">
                            <div className="f20 red bold">
                              전문적인 지식과 경험
                            </div>
                            <div className="f16">
                              우리는 로고 디자인에 대한 전문적인 지식과 경험을
                              가지고 있습니다. 다양한 산업과 분야에 맞는 로고를
                              제작할 수 있으며, 고객의 브랜드를 대표하는
                              이미지를 전달합니다.
                            </div>
                          </div>
                        </div>
                        <hr />
                        <div className="service_table_item">
                          <FaCheck className="f48 red" />
                          <div className="service_table_item_text">
                            <div className="f20 red bold">
                              최신 디자인 트렌드와 기술
                            </div>
                            <div className="f16">
                              우리는 항상 최신 디자인 트렌드와 기술을
                              업데이트하고 있습니다. 우리의 디자인 팀은
                              역동적이고 창의적인 아이디어를 가지고 있으며, 최신
                              디자인 트렌드를 반영하여 로고를 제작합니다.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
