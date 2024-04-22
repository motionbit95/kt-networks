import { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";

<script
  language="javascript"
  src="https://kspay.ksnet.to/store/KSPayWebV1.4/js/kspay_web_ssl.js"
></script>;

function KSPay() {
  const [formData, setFormData] = useState({
    sndPaymethod: "1000000000",
    sndStoreid: "2999199999",
    sndOrdernumber: "carrot_1234",
    sndGoodname: "당근10kg",
    sndAmount: "1004",
    sndOrdername: "김토끼",
    sndEmail: "kspay@carrot.co.kr",
    sndReply: getLocalUrl("kspay_wh_rcv"),
    sndShowcard: "C",
    sndCurrencytype: "WON",
    sndInstallmenttype: "ALL(0:2:3:4:5:6:7:8:9:10:11:12)",
    sndInteresttype: "NONE",
  });
  async function _submit(_frm) {
    console.log({ _frm }, getLocalUrl("kspay_wh_rcv"));
    _frm.sndReply.value = getLocalUrl("kspay_wh_rcv");
    await window._pay(_frm);
  }
  function getLocalUrl(mypage) {
    var myloc = window.location.href;
    return "http://localhost:8001" + "/" + mypage + window.location.search;
  }
  // goResult() - 함수설명 : 결재완료후 결과값을 지정된 결과페이지(kspay_wh_result.jsp)로 전송합니다.
  function goResult() {
    document.KSPayWeb.target = "";
    document.KSPayWeb.action = "http://localhost:8001/kspay_wh_result";
    document.KSPayWeb.submit();
  }
  // eparamSet() - 함수설명 : 결재완료후 (kspay_wh_rcv.jsp로부터)결과값을 받아 지정된 결과페이지(kspay_wh_result.jsp)로 전송될 form에 세팅합니다.
  function eparamSet(rcid, rctype, rhash) {
    document.KSPayWeb.reCommConId.value = rcid;
    document.KSPayWeb.reCommType.value = rctype;
    document.KSPayWeb.reHash.value = rhash;
  }
  function mcancel() {
    // 취소
    window.closeEvent();
  }

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const queryStr = new URLSearchParams(formData);
    console.log(queryStr.toString());
    if (!window.location.search) {
      window.location.search = queryStr.toString();
    }
  }, []);

  return (
    <Container py={{ base: "12", md: "24" }}>
      <form name="KSPayWeb" method="post">
        <select name="sndPaymethod" onChange={onChange}>
          <option value="1000000000" selected>
            신용카드
          </option>
          <option value="0100000000">가상계좌</option>
          <option value="0010000000">계좌이체</option>
          <option value="0000010000">휴대폰결제</option>
        </select>
        <input
          type="text"
          name="sndStoreid"
          value={formData.sndStoreid}
          size="15"
          maxlength="10"
        />
        <input
          type="text"
          name="sndOrdernumber"
          value={formData.sndOrdernumber}
          size="30"
        />
        <input
          type="text"
          name="sndGoodname"
          value={formData.sndGoodname}
          size="30"
        />
        <input
          type="text"
          name="sndAmount"
          value={formData.sndAmount}
          size="15"
          maxlength="9"
        />
        <input
          type="text"
          name="sndOrdername"
          value={formData.sndOrdername}
          size="30"
        />
        <input
          type="text"
          name="sndEmail"
          value={formData.sndEmail}
          size="30"
        />
        <input
          type="button"
          value="결 제"
          onClick={() => _submit(document.KSPayWeb)}
        />

        <input type="hidden" name="sndReply" value="" />
        <input type="hidden" name="sndGoodType" value="1" />
        <input type="hidden" name="sndCharSet" value="utf-8" />

        <input type="hidden" name="sndShowcard" value="C" />
        <input type="hidden" name="sndCurrencytype" value="WON" />
        <input
          type="hidden"
          name="sndInstallmenttype"
          value="ALL(0:2:3:4:5:6:7:8:9:10:11:12)"
        />
        <input type="hidden" name="sndInteresttype" value="NONE" />

        <input type="hidden" name="sndStoreCeoName" value="" />
        <input type="hidden" name="sndStorePhoneNo" value="" />
        <input type="hidden" name="sndStoreAddress" value="" />

        <input type="hidden" name="sndEscrow" value="0" />

        <input type="hidden" name="sndCashReceipt" value="0" />

        <input type="hidden" name="reCommConId" value="" />
        <input type="hidden" name="reCommType" value="" />
        <input type="hidden" name="reHash" value="" />

        <input type="hidden" name="a" value="a1" />
        <input type="hidden" name="b" value="b1" />
        <input type="hidden" name="c" value="c1" />
        <input type="hidden" name="d" value="d1" />
      </form>
    </Container>
  );
}

export default KSPay;
