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
// month = 3 , currentMv = '독전' < state
// month = 3 , currnetMv = '보이스'
// month = 4 , currnetMv = '보이스'

module.exports = router;
