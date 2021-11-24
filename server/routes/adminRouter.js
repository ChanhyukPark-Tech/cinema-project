const adminCtrl = require('../controllers/adminCtrl')
const router = require("express").Router();



/**
 * @swagger
 *  /api/admin/sales:
 *    post:
 *      tags:
 *      - admin
 *      description: 조회하고 싶은 월과, 영화를 기준으로 매출을 보여줌 , 월별매출, 영화별 매출, 식음료 매출 , 이번달 총매출
 */

/**
 * @swagger
 *  /api/admin/monthTotal:
 *    get:
 *      tags:
 *      - admin
 *      description: 특정 월을 보내면 그 월에 해당하는 매출합계 보여주기.
 */

/**
 * @swagger
 *  /api/admin/genderTotal:
 *    post:
 *      tags:
 *      - admin
 *      description: 성별에 따라서 남성 이라고 보내면 남성의 payinfo 에서 매출합계 보여주기
 */

/**
 * @swagger
 *  /api/admin/salesTotal:
 *    post:
 *      tags:
 *      - admin
 *      description: 모든 월의 매출을가져옴 월별로 sum 해서
 */

/**
 * @swagger
 *  /api/admin/CountMember:
 *    get:
 *      tags:
 *      - admin
 *      description: 전체회원수를 알려줌
 */

/**
 * @swagger
 *  /api/admin/CountStaff:
 *    post:
 *      tags:
 *      - admin
 *      description: 특정지점 place_place_id의 직원수를 알려줌
 */

/**
 * @swagger
 *  /api/admin/MovieTop5:
 *    get:
 *      tags:
 *      - admin
 *      description: 예매율 top5 영화 보여줌
 */

/**
 * @swagger
 *  /api/admin/staffMonthDay:
 *    post:
 *      tags:
 *      - admin
 *      description: Month 와 Day를 보낼테니 그 날에 일하는 직원들을 일시작시간 기준으로 오름차순해서 보내주는 API 
 */

/**
 * @swagger
 *  /api/admin/getPlacePayTop10:
 *    get:
 *      tags:
 *      - admin
 *      description: 지점별로 매출 TOP10 보여줌
 */

/**
 * @swagger
 *  /api/admin/getMonthPay:
 *    post:
 *      tags:
 *      - admin
 *      description: place_id주면 월별로 총금액을 보여준다.(한지점의 한달 수입)(년도도 나옴) 
 */

/**
 * @swagger
 *  /api/admin/getRecentTicketTop5:
 *    get:
 *      tags:
 *      - admin
 *      description: 최근 거래내역 5개 (전체지점의 최근 거래내역, 영화 제목도 보여줌) 
 */

/**
 * @swagger
 *  /api/admin/getTodayPay:
 *    post:
 *      tags:
 *      - admin
 *      description: place_id주면 월별로 총금액을 보여준다.(한지점의 한달 수입)(년도도 나옴) 
 */

/**
 * @swagger
 *  /api/admin/getLastMonthPlacePay:
 *    get:
 *      tags:
 *      - admin
 *      description: 저번달 기준 지점별 매출 보여주기 (현재 달 자동으로 적용)
 */

/**
 * @swagger
 *  /api/admin/getAgePay:
 *    post:
 *      tags:
 *      - admin
 *      description: place_Id 보내주면 10대 20대 30대 40대 50대 나이대별로 그지점에 해당하는 결재 금액을 보여줌
 */

router.route('/monthTotal')
    .post(adminCtrl.getmonthTotal)

router.route('/salesTotal')
    .get(adminCtrl.getSalesTotal)

router.route('/genderTotal')
    .post(adminCtrl.getgenderTotal)

router.route('/genderBothTotal')
    .get(adminCtrl.getBothGenderTotal)

router.route('/countMember')
    .get(adminCtrl.getCountMember)

router.route('/countStaff')
    .post(adminCtrl.getCountStaff)

router.route('/movieTop5')
    .get(adminCtrl.getMovieTop5)

router.route('/staffMonthDay')
    .post(adminCtrl.staffMonthDay)

router.route('/getPlacePayTop10')
    .get(adminCtrl.getPlacePayTop10)

router.route('/getMonthPay')
    .post(adminCtrl.getMonthPay)

router.route('/getRecentTicketTop5')
    .get(adminCtrl.getRecentTicketTop5)

// router.route('/getTodayPay')
//     .post(adminCtrl.getTodayPay)

router.route('/getLastMonthPlacePay')
    .get(adminCtrl.getLastMonthPlacePay)

router.route('/getAgePay')
    .post(adminCtrl.getAgePay)

// month = 3 , currentMv = '독전' < state
// month = 3 , currnetMv = '보이스'
// month = 4 , currnetMv = '보이스'

module.exports = router;
