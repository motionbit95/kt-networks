import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const contents = [
    <div
      style={{
        //   display: "none",
        width: "100%",
        height: "100%",
        backgroundImage: `url(https://cdn.imweb.me/thumbnail/20231217/ae5f42bdbd643.png)`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0 40px",
          gap: "50px",
        }}
      >
        <div>내용1</div>
        <div>내용</div>
      </div>
    </div>,
    <div
      style={{
        //   display: "none",
        width: "100%",
        height: "100%",
        backgroundImage: `url(https://cdn.imweb.me/thumbnail/20231217/4aca4c3c16b54.png)`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0 40px",
          gap: "50px",
        }}
      >
        <div>내용2</div>
        <div>내용</div>
      </div>
    </div>,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === contents.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // 10초마다 내용 변경

    return () => clearInterval(interval); // 컴포넌트가 언마운트될 때 인터벌 제거
  }, []); // currentIndex가 변경될 때마다 useEffect가 실행되어야 함

  return (
    <div id="Container" className="Container">
      <div id="Section" className="Section">
        <div id="home_carousel" className="home_carousel">
          내용
        </div>
        <div
          style={{
            height: "659px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#d9d9d9",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: "0 70px",
              flex: 4,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "30px",
              }}
            >
              <p className="f16 red bold">ABOUT US</p>
              <div
                className="f36 bold"
                style={{
                  gap: "10px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p>KTNETWORKS 는</p>
                <p>고객의 성공을 위해 노력하는</p>
                <p>전문가들로 이루어진 팀입니다.</p>
              </div>
              <div className="f20">
                <p>우리는 고객의 비전과 목표를 이해하고,</p>
                <p>최적의 전략과 솔루션을 제공하여 그들의 성공을 돕습니다.</p>
              </div>
              <a
                href="/about"
                style={{
                  backgroundColor: "#e50012",
                  textDecoration: "none",
                  color: "white",
                  padding: "10px 60px",
                  fontSize: "16px",
                }}
              >
                회사소개
              </a>
            </div>
          </div>
          <div style={{ flex: 3, width: "100%", height: "100%" }}>
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://cdn.imweb.me/thumbnail/20231212/d27071d578044.jpg"
            />
          </div>
        </div>
        <div className="home_bottom_wrap">
          <div className="home_bottom_container">
            <div className="bottom_title_box">
              <p className="f16 red bold" style={{ marginBottom: "35px" }}>
                SERVICE
              </p>
              <div className="f36 bold" style={{ marginBottom: "35px" }}>
                <p style={{ marginBottom: "15px" }}>다양한 산업 분야에서</p>
                <p>다양한 형식의 컨텐츠를 제공하는 전문 회사입니다.</p>
              </div>
              <div>
                <p>
                  홈페이지 제작, 어플리케이션 제작, 영상 제작, 로고 디자인 등
                  다양한 분야에서 우리의 전문성을 발휘합니다.
                </p>
                <p>
                  우리는 항상 최신 트렌드와 기술을 파악하고, 고객의 요구에 맞춰
                  최고의 결과물을 제공합니다.
                </p>
              </div>
            </div>
            <div class="home_bottom_contents">
              <div
                style={{
                  flex: 1,
                  border: "1px solid red",
                }}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://cdn.imweb.me/thumbnail/20240118/2d0e0f0cb3aea.png"
                />
              </div>
              <div
                style={{
                  flex: 1,
                  border: "1px solid red",
                }}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://cdn.imweb.me/thumbnail/20240117/c4a9d404eaa98.png"
                />
              </div>
              <div
                style={{
                  flex: 1,
                  border: "1px solid red",
                }}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://cdn.imweb.me/thumbnail/20240117/c660e9508e3b9.png"
                />
              </div>
              <div
                style={{
                  flex: 1,
                  border: "1px solid red",
                }}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://cdn.imweb.me/thumbnail/20240117/19b7b196eb437.png"
                />
              </div>
              <div
                style={{
                  flex: 1,
                  border: "1px solid red",
                }}
              >
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://cdn.imweb.me/thumbnail/20240117/72e6ad9620837.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "1000px",
            backgroundColor: "#d9d9d9",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              borderLeft: "1px solid red",
              height: "200px",
              display: "flex",
              marginBottom: "50px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "50px",
            }}
          >
            <div>
              <p className="f16 red bold">LOCATION</p>
            </div>
            <div>지도 API</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
