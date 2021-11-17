const paymentCtrl = require("../controllers/paymentCtrl")
const router = require("express").Router();


/**
 * @swagger
 *  /api/payment/payComplete:
 *    post:
 *      tags:
 *      - payment
 *      description: 스케쥴 id , 좌석 , 인원 , 최종 결제,멤버아이디 금액 보내주면 그에 맞게 테이블에 따따따따 다 집어넣어주는 API /주의사항 ["A13","A14","A15"] 이런식으로 보내주기
 */

router.route('/payComplete')
    .post(paymentCtrl.insertPayComplete)



module.exports = router;