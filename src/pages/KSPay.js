import { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { formatCurrency } from "./Admin";
import DatePicker, { registerLocale } from "react-datepicker";
import { ko } from "date-fns/locale/ko";

<script
  language="javascript"
  src="https://kspay.ksnet.to/store/KSPayWebV1.4/js/kspay_web_ssl.js"
></script>;

function KSPay(props) {
  const random = (length = 8) => {
    return Math.random().toString(16).substr(2, length);
  };
  const [formData, setFormData] = useState({
    sndPaymethod: "1000000000",
    sndStoreid: "2999199999",
    sndOrdernumber: random(),
    sndGoodname: props.product.product_name,
    sndAmount: props.product.product_price,
    sndOrdername: "",
    sndEmail: "",
    sndReply: getLocalUrl("kspay_wh_rcv"),
    sndShowcard: "C",
    sndCurrencytype: "WON",
    sndInstallmenttype: "ALL(0:2:3:4:5:6:7:8:9:10:11:12)",
    sndInteresttype: "NONE",
  });
  async function _submit(_frm) {
    if (formData.sndOrdername == "") {
      alert("주문자명을 입력하세요.");
      return;
    }

    console.log({ _frm }, getLocalUrl("kspay_wh_rcv"));
    _frm.sndReply.value =
      "https://kspay.ksnet.to/store/KSPayWebV1.4/web_host/post_send.jsp";
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
    // const queryStr = new URLSearchParams(formData);
    // // console.log(queryStr.toString());
    // if (!window.location.search) {
    //   window.location.search = queryStr.toString();
    // }
    console.log(props.product);
  }, []);

  return (
    <Container
      // py={{ base: "4", md: "8" }}
      border={"1px"}
      borderRadius={"lg"}
      overflow={"hidden"}
      boxShadow={"lg"}
      maxW={{ base: "4xl", md: "5xl" }}
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("gray.200", "gray.700")}
      bgColor={useColorModeValue("gray.50", "gray.800")}
      px={0}
    >
      <form name="KSPayWeb" method="post">
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: "4", lg: "8" }}
          w={"full"}
        >
          <Stack
            w={{ base: "full", lg: "60%" }}
            spacing="6"
            p={{ base: "4", lg: "8" }}
          >
            {/* <FormControl id="period" isRequired>
              <FormLabel color={useColorModeValue("gray.700", "gray.200")}>
                계약기간
              </FormLabel>
              <HStack w={"100%"}>
                <DatePicker
                  name="startDate"
                  locale={"ko"}
                  selected={formData.startDate}
                  onChange={(date) =>
                    setFormData({ ...formData, startDate: date })
                  }
                  dateFormat="yyyy/MM/dd"
                  minDate={new Date()}
                  customInput={<Input bgColor={"white"} />}
                />
                <Text>~</Text>
                <DatePicker
                  name="endDate"
                  locale={"ko"}
                  selected={formData.endDate}
                  onChange={(date) =>
                    setFormData({ ...formData, endDate: date })
                  }
                  dateFormat="yyyy/MM/dd"
                  minDate={formData.startDate}
                  customInput={<Input bgColor={"white"} />}
                />
              </HStack>
            </FormControl> */}
            <FormControl isRequired>
              <FormLabel>대표자 성함</FormLabel>
              <Input
                bgColor={"white"}
                type="text"
                name="sndOrdername"
                defaultValue={formData.sndOrdername}
                onChange={onChange}
                // size="30"
                placeholder="대표자 성함을 입력해주세요."
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>상호명</FormLabel>
              <Input
                bgColor={"white"}
                type="text"
                name="business_name"
                defaultValue={formData.business_name}
                onChange={onChange}
                // size="30"
                placeholder="상호명을 입력해주세요."
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>영업담당자 성함</FormLabel>
              <Input
                bgColor={"white"}
                type="text"
                name="sales_manager"
                defaultValue={formData.sales_manager}
                onChange={onChange}
                // size="30"
                placeholder="영업담당자 성함을 입력해주세요."
              />
            </FormControl>
            <input
              type="hidden"
              name="sndEmail"
              value={formData.sndEmail}
              size="30"
            />
            <FormControl isRequired>
              <FormLabel>결제수단</FormLabel>
              <Select bgColor={"white"} name="sndPaymethod" onChange={onChange}>
                <option value="1000000000" selected>
                  신용카드
                </option>
                <option value="0100000000">가상계좌</option>
                <option value="0010000000">계좌이체</option>
                <option value="0000010000">휴대폰결제</option>
              </Select>
            </FormControl>
            <input
              type="hidden"
              name="sndStoreid"
              value={formData.sndStoreid}
              size="15"
              maxlength="10"
            />
            <input
              type="hidden"
              name="sndOrdernumber"
              value={formData.sndOrdernumber}
              size="30"
            />
          </Stack>
          <Stack
            w={{ base: "full", lg: "40%" }}
            spacing="6"
            p={{ base: "4", lg: "8" }}
            bgColor={"white"}
          >
            <FormControl>
              <HStack alignItems={"baseline"}>
                <FormLabel fontWeight={"bold"}>상품이름</FormLabel>
                <Text>{formData.sndGoodname}</Text>
              </HStack>
              <input
                type="hidden"
                name="sndGoodname"
                readOnly
                value={formData.sndGoodname}
                size="30"
                style={{ outlineWidth: 0 }}
              />
            </FormControl>
            <FormControl>
              <HStack alignItems={"baseline"}>
                <FormLabel fontWeight={"bold"}>상품가격</FormLabel>
                <Text>{formatCurrency(formData.sndAmount)}</Text>
              </HStack>
              <input
                readOnly
                type="hidden"
                name="sndAmount"
                value={formData.sndAmount}
                size="15"
                maxlength="9"
                style={{ outlineWidth: 0 }}
              />
            </FormControl>
            <Button
              colorScheme="yellow"
              type="button"
              onClick={() => _submit(document.KSPayWeb)}
            >
              결제하기
            </Button>

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
          </Stack>
        </Stack>
      </form>
    </Container>
  );
}

export default KSPay;
