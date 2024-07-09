// proxy.js

exports.handler = async function (event, context) {
  try {
    const apiUrl =
      "https://pay.ksnet.co.kr/kspay/webfep/api/v1/card/pay/noncert";

    console.log(event.body);

    // 예시로 request data를 받아온다고 가정
    const requestData = JSON.parse(event.body);

    // API 요청 보내기
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 필요한 경우 추가 헤더 설정
        Authorization:
          "pgapi MjAwMTEwNzE4ODpNQTAxOjc1OTVENzE4NkJBMEVFMTIyMENDNUEyMzkxOEUxMTMw",
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    // API 응답 처리
    const responseData = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(responseData),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
