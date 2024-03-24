import React, { useState } from "react";
import "../styles/dashboard.css";
import { FaCheck } from "react-icons/fa";

const Tab = ({ render, ...props }) => {
  const [tabIndex, setIndex] = useState(0);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
        flexDirection: "column",
        alignItems: "center",
        gap: "50px",
      }}
    >
      {/* 탭 버튼들 */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          maxWidth: "1250px",
          justifyItems: "center",
        }}
      >
        {render.map((item, index) => (
          <div
            style={{
              width: "100%",
              cursor: "pointer",
              color: tabIndex === index ? "white" : "black",
              backgroundColor: tabIndex === index ? "red" : "white",
              border: "1px solid",
              borderColor: tabIndex === index ? "red" : "#d9d9d9",
              padding: "20px",
              textAlign: "center",
            }}
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
      <div id="Section1" className="Section1">
        <div id="about_header" className="about_header">
          <div id="about_Box" className="about_Box">
            <div style={{ fontSize: "36px", color: "red", fontWeight: "bold" }}>
              서비스
            </div>
            <div style={{ fontSize: "22px" }}>
              창의적이고 전문적인 디자인 서비스를 제공합니다. 저희와 함께
              성공적인 광고 디자인을 만들어보세요.
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
              <span>서비스</span>
            </div>
          </div>
        </div>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <Tab
            render={[
              {
                title: "홈페이지 제작",
                content: (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      maxWidth: "1250px",
                    }}
                  >
                    <img
                      src={require("../assets/homepage.jpeg")}
                      style={{
                        width: "100%",
                        display: "flex",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        // height: "300px",
                        justifyContent: "center",
                      }}
                    />
                    <div
                      style={{
                        display: "flex",
                        height: "280px",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "40px",
                        margin: "0px 50px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "15px",
                          alignItems: "flex-end",
                          flex: 1,
                        }}
                      >
                        <div style={{ fontSize: "16px", color: "red" }}>
                          HOMEPAGE
                        </div>
                        <div style={{ fontSize: "36px", fontWeight: "bold" }}>
                          홈페이지 제작
                        </div>
                      </div>
                      <div style={{ width: "900px", fontSize: "20px" }}>
                        홈페이지 제작은 고객의 비전과 목표를 반영하여 웹사이트를
                        구축하는 과정입니다. 우리는 고객과의 철저한
                        커뮤니케이션을 통해 고객의 요구사항을 이해하고, 그에
                        맞는 디자인과 기능을 구현합니다.
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "40px",
                        margin: "30px 50px",
                        paddingBottom: "100px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          height: "280px",
                          gap: "10px",
                          alignItems: "flex-end",
                          flex: 1,
                        }}
                      >
                        <div style={{ fontSize: "26px", fontWeight: "bold" }}>
                          특장점
                        </div>
                      </div>
                      <div style={{ width: "900px" }}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "20px",
                            borderBottom: "1px solid #d9d9d9",
                            padding: "30px 0",
                          }}
                        >
                          <FaCheck style={{ color: "red", fontSize: "48px" }} />
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "10px",
                            }}
                          >
                            <div
                              style={{
                                fontSize: "20px",
                                color: "red",
                                fontWeight: "bold",
                                margin: "10px 0px",
                              }}
                            >
                              맞춤화된 디자인
                            </div>
                            <div style={{ fontSize: "16px" }}>
                              고객의 요구사항을 정확히 이해하고, 그에 맞는
                              디자인을 구현하여 고객의 브랜드를 강화할 수
                              있습니다.
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "20px",
                            borderBottom: "1px solid #d9d9d9",
                            padding: "30px 0",
                          }}
                        >
                          <FaCheck style={{ color: "red", fontSize: "48px" }} />
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "10px",
                            }}
                          >
                            <div
                              style={{
                                fontSize: "20px",
                                color: "red",
                                fontWeight: "bold",
                                margin: "10px 0px",
                              }}
                            >
                              맞춤화된 디자인
                            </div>
                            <div style={{ fontSize: "16px" }}>
                              고객의 요구사항을 정확히 이해하고, 그에 맞는
                              디자인을 구현하여 고객의 브랜드를 강화할 수
                              있습니다.
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            gap: "20px",
                            padding: "30px 0",
                          }}
                        >
                          <FaCheck style={{ color: "red", fontSize: "48px" }} />
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "10px",
                            }}
                          >
                            <div
                              style={{
                                fontSize: "20px",
                                color: "red",
                                fontWeight: "bold",
                                margin: "10px 0px",
                              }}
                            >
                              맞춤화된 디자인
                            </div>
                            <div style={{ fontSize: "16px" }}>
                              고객의 요구사항을 정확히 이해하고, 그에 맞는
                              디자인을 구현하여 고객의 브랜드를 강화할 수
                              있습니다.
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
                content: <div>어플리케이션 제작</div>,
              },
              {
                title: "영상 제작",
                content: <div>영상 제작</div>,
              },
              {
                title: "로고 디자인",
                content: <div>로고 디자인</div>,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
