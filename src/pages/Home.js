import React, { useEffect, useState } from "react";
import "../styles/dashboard.css";
import { CustomOverlayMap, Map, MapMarker } from "react-kakao-maps-sdk";

const Home = () => {
  const [currentItem, setCurrentItem] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentItem((prevItem) => (prevItem + 1) % 2);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const [title, setTitle] = useState("ktnetworks");
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title ");
    htmlTitle.innerHTML = title;
  };
  useEffect(updateTitle, [title]);

  const items = [
    {
      id: 0,
      content: (
        <div>
          <div
            className="home_carousel_img"
            style={{
              backgroundImage: `url(https://cdn.imweb.me/thumbnail/20231217/ae5f42bdbd643.png)`,
            }}
          />
          <div className="home_carousel_item">
            <div className="f26">KT 네트웍스는</div>
            <div className="f48 bold text_colume_box">
              <div className="red">효과적인 마케팅 전략으로</div>
              <div className="line" />
              <div className="black title">
                {`브랜드의 가치를 높이는 \n디자인 회사입니다.`}
              </div>
            </div>
            <a href="/about" className="carousel_button">
              <div>회사소개</div>
            </a>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      content: (
        <div>
          <div
            className="home_carousel_img"
            style={{
              backgroundImage: `url(https://cdn.imweb.me/thumbnail/20231217/4aca4c3c16b54.png)`,
            }}
          />
          <div className="home_carousel_item">
            <div className="f26">KT 네트웍스는</div>
            <div className="f48 bold text_colume_box">
              <div className="red">맞춤형 광고 서비스로</div>
              <div className="line" />
              <div className="black title">{`고객의 성공을 위해 \n함께합니다.`}</div>
            </div>
            <a href="/about" className="carousel_button">
              <div>VIEW MORE</div>
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div id="Container" className="Container">
      <div id="Section" className="Section">
        <div id="home_carousel" className="home_carousel">
          {items.map((item) => (
            <div key={item.id}>{currentItem === item.id && item.content}</div>
          ))}
        </div>
        <div className="home_about_wrap">
          <div className="home_about_contents">
            <div className="home_about_text">
              <div className="f16 red bold wide-text">ABOUT US</div>
              <div className="f36 bold text_colume_box">
                <div className="black title">KTNETWORKS 는</div>
                <div className="red bold">고객의 성공을 위해 노력하는</div>
                <div className="line" />
                <div className="black title">전문가들로 이루어진 팀입니다.</div>
              </div>
              <div className="black f20">
                <div>우리는 고객의 비전과 목표를 이해하고,</div>
                <div>
                  최적의 전략과 솔루션을 제공하여 그들의 성공을 돕습니다.
                </div>
              </div>
              <a href="/about" className="home_about_button">
                <div>회사소개</div>
              </a>
            </div>
          </div>
          <div className="home_about_bg">
            <img
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="https://cdn.imweb.me/thumbnail/20231212/d27071d578044.jpg"
            />
          </div>
        </div>
        <div className="home_bottom_wrap">
          <div className="home_bottom_container">
            <div className="bottom_title_box">
              <p
                className="f16 red bold wide-text"
                style={{ marginBottom: "35px" }}
              >
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
              <div class="home_bottom_contents">
                <div className="home_bottom_outline">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={require("../assets/homepageimg.png")}
                  />
                </div>
                <div className="home_bottom_outline">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={require("../assets/Appimg.png")}
                  />
                </div>
                <div className="home_bottom_outline">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={require("../assets/productionimg.png")}
                  />
                </div>
                <div className="home_bottom_outline">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={require("../assets/logodesignimg.png")}
                  />
                </div>
                <div className="home_bottom_outline">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={require("../assets/designimg.png")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "auto",
            backgroundColor: "#f1f1f1",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              borderLeft: "1px solid #999",
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
              width: "100%",
            }}
          >
            <div>
              <p
                className="f16 red bold wide-text"
                style={{ backgroundColor: "transparent" }}
              >
                LOCATION
              </p>
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "500px",
                padding: "20px",
                alignItems: "center",
                justifyContent: "center",
                // backgroundColor: "#d9d9d9",
                marginBottom: "50px",
              }}
            >
              <Map
                center={{ lat: 35.148845, lng: 129.059561 }} // 지도의 중심 좌표
                style={{ width: "1000px", height: "500px" }} // 지도 크기
                level={4} // 지도 확대 레벨
              >
                <MapMarker position={{ lat: 35.148845, lng: 129.059561 }}>
                  <a
                    href="https://map.kakao.com/?urlX=969215.0&urlY=463876.0&name=%EB%B6%80%EC%82%B0%20%EB%B6%80%EC%82%B0%EC%A7%84%EA%B5%AC%20%EC%A4%91%EC%95%99%EB%8C%80%EB%A1%9C%20630&map_type=TYPE_MAP&from=roughmap"
                    style={{
                      marginInline: "10px",
                      color: "#000",
                      fontSize: "12px",
                      textDecoration: "underline",
                    }}
                  >
                    부산 부산진구 중앙대로 630
                  </a>
                </MapMarker>
              </Map>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
