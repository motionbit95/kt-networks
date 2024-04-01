import React, { useEffect, useRef, useState } from "react";
import "../styles/dashboard.css";
import { motion } from "framer-motion";

export const infoData = [
  {
    image: require("../assets/card1.png"),
    title: (
      <div class="item_01">
        <div className="text_row_box">
          <div className="f26 red bold">당신의 브랜드</div>
          <div className="f26">를</div>
        </div>
        <div className="f26">돋보이게 만들어 드립니다.</div>
      </div>
    ),
    discription:
      "우리는 당신의 브랜드를 강조하고 독특한 아이덴티티를 구축하는데 전문성을 갖추고 있습니다.\n우리의 컨텐츠 제작은 당신의 브랜드가 시장에서 두드러지게 만들어 줄 것입니다.",
  },
  {
    image: require("../assets/card2.png"),
    title: (
      <div class="item_01 item_text_reverse">
        <div style={{ display: "flex" }}>
          <div className="red bold">맞춤형 디자인</div>과
        </div>
        <div style={{ display: "flex" }}>
          <div className="red bold">사용자 경험</div>을 제공합니다
        </div>
      </div>
    ),
    discription:
      "우리는 사용자 중심의 디자인과 최신 기술을 활용하여 맞춤형 컨텐츠를 제작합니다.\n사용자들이 쉽게 찾고, 상호작용하며, 당신의 비즈니에 대한 긍정적인 경험을 얻을 수 있도록 돕습니다.",
  },
  {
    image: require("../assets/card3.png"),
    title: (
      <div class="item_01">
        <div className="text_row_box">
          <div className="red bold">혁신적이고 시대에 맞는 컨텐츠</div>를 제공
          합니다.
        </div>
      </div>
    ),
    discription:
      "우리의 목표는 고객의 비즈니스 성공을 돕는 것이며, 온라인에서의 가시성과 고객 유치에 도움을 줄 것입니다.",
  },
  {
    image: require("../assets/card4.png"),
    title: (
      <div class="item_01 item_text_reverse">
        <div>경험이 풍부한</div>
        <div className="red blod">전문과들과의 협업</div>
      </div>
    ),
    discription:
      "우리는 경험이 풍부한 전문가들로 구성된 팀으로, 당신의 컨텐츠에 최상의 결과를 제공합니다.\n 우리의 전문가들은 최신 트렌드와 기술에 대한 이해력을 갖추고 있으며, 당신의 비즈니스에 맞는 최적의 솔루션을 제공합니다.",
  },
  {
    image: require("../assets/card5.png"),
    title: (
      <div class="item_01">
        <div>지속적인 지원과</div>
        <div className="red bold">유지보수</div>
      </div>
    ),
    discription:
      "우리는 컨텐츠 제작 후에도 지속적인 지원과 유지보수를 제공합니다.\n당신의 홈페이지가 항상 최신상태를 유지하고, 원활한 운영을 할 수 있도록 돕습니다.",
  },
];

export const missionData = [
  {
    image: require("../assets/bottom1.jpeg"),
    title: (
      <div class="bottom_text_title">
        <div className="f24 red bold">창의성과 혁신</div>
      </div>
    ),
    discription: (
      <div class="f16">
        <div>
          우리는 창의적인 아이디어와 혁신적인 접근을 통해 고객의 기대를 초월하는
          광고를 제작합니다.
        </div>
        <div>
          새로운 아이디어와 트렌드를 적극적으로 수용하며, 항상 변화하는 시장에
          적응하고 발전합니다.
        </div>
      </div>
    ),
  },
  {
    image: require("../assets/bottom2.jpeg"),
    title: (
      <div class="bottom_text_title">
        <div className="f24 red bold">고객 중심</div>
      </div>
    ),
    discription: (
      <div class="f16">
        <div>
          우리는 고객의 성공을 최우선으로 생각합니다. 고객의 니즈와 목표를
          이해하고, 맞춤형 솔루션을 제공하여 고객의 비즈니스 성장을 돕습니다.
        </div>
        <div>고객과의 긴밀한 협력을 통해 최상의 결과를 창출합니다.</div>
      </div>
    ),
  },
  {
    image: require("../assets/bottom3.jpeg"),
    title: (
      <div class="bottom_text_title">
        <div className="f24 red bold">품질과 신뢰</div>
      </div>
    ),
    discription: (
      <div class="f16">
        <div>
          우리는 고객의 성공을 최우선으로 생각합니다. 고객의 니즈와 목표를
          이해하고, 맞춤형 솔루션을 제공하여 고객의 비즈니스 성장을 돕습니다.
        </div>
        <div>고객과의 긴밀한 협력을 통해 최상의 결과를 창출합니다.</div>
      </div>
    ),
  },
  {
    image: require("../assets/bottom4.jpeg"),
    title: (
      <div class="bottom_text_title">
        <div className="f24 red bold">사회적 책임</div>
      </div>
    ),
    discription: (
      <div class="f16">
        <div>
          우리는 사회적 책임을 중요하게 생각합니다. 우리의 광고는 윤리적이고
          사회적 가치를 존중합니다. 우리는 고객과의 협력을 통해 성공적인 광고
          캠페인을 구현하고, 브랜드의 가치를 향상시키는데 최선을 다하고
          있습니다.
        </div>
      </div>
    ),
  },
];

const Intro = () => {
  const [isVisible, setIsVisible] = useState({});
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prevState) => ({
            ...prevState,
            [entry.target.id]: true,
          }));
          observer.unobserve(entry.target);
        }
      });
    });

    refs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div id="Container" className="Container">
      <div id="Section" className="Section">
        <div id="header_box" className="header_box">
          <div className="header_bg_img" />
          <div id="header_text_box" className="header_text_box">
            <div className="header_text">
              <div className="f36 red bold">회사소개</div>
              <div className="f22">
                최신 트렌드와 기술을 항상 주시하고 적용하여 고객에게 혁신적이고
                시대에 맞는 컨텐츠를 제공합니다.
              </div>
            </div>
          </div>
        </div>
        <div id="path_wrap" className="path_wrap">
          <div id="path_box" class="path_box">
            <div style={{ padding: "0px 15px" }}>
              <div className="path_item">
                <a
                  href="/"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    opacity: "0.5",
                  }}
                >
                  <span>Home 〉</span>
                </a>
                <a
                  href="/service"
                  className="red"
                  style={{ textDecoration: "none" }}
                >
                  <span>회사소개</span>
                </a>
              </div>
            </div>
          </div>
          <div className="hr2" />

          <div id="about_contents" class="about_contents">
            <div id="about_content_title" className="about_content_title">
              <div className="f16 red bold wide-text">ABOUT US</div>
              <div className="f30 bold">
                고객의 비즈니스 성장을 위해 전략적인 광고 솔루션을 제공합니다.
              </div>
              <div className="about_text_table">
                <div className="f20">
                  케이티네트웍스는 다양한 형식의 컨텐츠를 제작하는 전문
                  회사입니다.
                </div>
                <p className="f20">
                  케이티네트웍스와 함께하면 고객의 브랜드 가치를 향상시킬 수
                  있습니다.
                </p>
              </div>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "40px" }}
            >
              {infoData.map((data, index) => (
                <div
                  class={index % 2 === 0 ? "card_row" : "card_row_reverse"}
                  id={`item${index}`}
                  key={index}
                  ref={(el) => (refs.current[index] = el)}
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? "-100%" : "100%",
                    }}
                    animate={
                      isVisible[`item${index}`] ? { opacity: 1, x: 0 } : {}
                    }
                    transition={{ duration: 0.5 }}
                    className="item_img"
                  >
                    <img src={data?.image} className="card_img" />
                  </motion.div>

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: index % 2 === 0 ? "100%" : "-100%",
                    }}
                    animate={
                      isVisible[`item${index}`] ? { opacity: 1, x: 0 } : {}
                    }
                    transition={{ duration: 0.5 }}
                    className={
                      index % 2 === 0
                        ? "item_text_box"
                        : "item_text_box_reverse"
                    }
                  >
                    {data?.title}

                    <div
                      class={`item_02 ${
                        index % 2 === 0 ? "item_text" : "item_text_reverse"
                      }`}
                    >
                      {data?.discription}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="about_bottom_wrap">
          <div className="about_bottom_container">
            <div
              className="bottom_title_box"
              id={`item${5}`}
              key={5}
              ref={(el) => (refs.current[5] = el)}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isVisible[`item${5}`] ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="f16 red bold" style={{ marginBottom: "5px" }}>
                  MISSION
                </div>
                <div className="f36 bold">기업이념</div>
                <div className="f20" style={{ marginTop: "30px" }}>
                  <div>
                    고객 중심의 서비스와 품질, 신뢰, 사회적 책임을 중요시하며,
                    항상 최고의 결과를 위해 노력합니다.
                  </div>
                  <div>
                    우리와 함께하면 고객의 비즈니스 성장을 위한 효과적인 광고
                    전략을 구현할 수 있습니다.
                  </div>
                </div>
              </motion.div>
            </div>
            <div class="bottom_contents">
              {missionData.map((data, index) => (
                <div
                  id={`item${6 + index}`}
                  key={6 + index}
                  ref={(el) => (refs.current[6 + index] = el)}
                  class={
                    index % 2 === 0 ? "bottom_column" : "bottom_column_reverse"
                  }
                >
                  <motion.div
                    initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
                    animate={
                      isVisible[`item${6 + index}`] ? { opacity: 1, y: 0 } : {}
                    }
                    transition={{ duration: 0.5 }}
                    class="bottom_content_text_box"
                  >
                    {data?.title}
                    {data?.discription}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: index % 2 === 0 ? 50 : -50 }}
                    animate={
                      isVisible[`item${6 + index}`] ? { opacity: 1, y: 0 } : {}
                    }
                    transition={{ duration: 0.5 }}
                    className="bottom_content_img_box"
                  >
                    <img src={data?.image} className="bottom_content_img" />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
