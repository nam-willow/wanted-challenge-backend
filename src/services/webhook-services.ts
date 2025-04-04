import axios from "axios";
const portOne = require("../services/portone-services");

module.exports = {
  /**
   * 결제 상세내역 조회 API
   */
  paymentsBalance: async (imp_uid: string) => {
    try {
      const token = await portOne.portGetToken();
      const pay_res = await portOne.getPayDitail(imp_uid, token);
      return pay_res;
    } catch (error) {
      console.error("Error fetching payment balance:", error);
      throw new Error("결제 상세내역 조회 중 오류가 발생했습니다.");
    }
  },

  /**
   * 웹훅 연동 검증
   */
  // portoneWebhook: async(body:{imp_uid:string, merchant_uid:string }) => {
  //     //여기에 결제로직
  //         // req의 body에서 imp_uid, merchant_uid 추출
  //         const { imp_uid, merchant_uid } = body;
  //         // 액세스 토큰(access token) 발급 받기
  //         /* ...중략... */
  //         // imp_uid로 포트원 서버에서 결제 정보 조회
  //         /* ...중략... */
  //         const paymentData = getPaymentData.data; // 조회한 결제 정보
  //         // ...
  //         // DB에서 결제되어야 하는 금액 조회
  //         const order = await Orders.findById(paymentData.merchant_uid);
  //         const amountToBePaid = order.amount; // 결제 되어야 하는 금액
  //         // ...
  //         // 결제 검증하기
  //         const { amount, status } = paymentData;
  //         // 결제금액 일치. 결제 된 금액 === 결제 되어야 하는 금액
  //         if (amount === amountToBePaid) {
  //           // DB에 결제 정보 저장
  //           await Orders.findByIdAndUpdate(merchant_uid, { $set: paymentData });
  //           switch (status) {
  //             case "ready": // 가상계좌 발급
  //               // DB에 가상계좌 발급 정보 저장
  //               const { vbank_num, vbank_date, vbank_name } = paymentData;
  //               await Users.findByIdAndUpdate("/* 고객 id */", {
  //                 $set: { vbank_num, vbank_date, vbank_name },
  //               });
  //               // 가상계좌 발급 안내 문자메시지 발송
  //             //   SMS.send({
  //             //     text: `가상계좌 발급이 성공되었습니다. 계좌 정보 ${vbank_num} ${vbank_date} ${vbank_name}`,
  //             //   });
  //             return { status: "vbankIssued", message: "가상계좌 발급 성공" };
  //             case "paid": // 결제 완료
  //               return { status: "success", message: "일반 결제 성공" };
  //           }
  //         } else {
  //           // 결제금액 불일치. 위/변조 된 결제
  //           throw { status: "forgery", message: "위조된 결제시도" };
  //         }
  // }
};
