// const staffCtrl = require("../controllers/staffCtrl")
const router = require("express").Router();



/**
 * @swagger
 *  /api/staff/roster:
 *    post:
 *      tags:
 *      - staff
 *      description: 날짜에 해당하는 근무표를 제공 
 */

/**
 * @swagger
 *  /api/staff/salary:
 *    post:
 *      tags:
 *      - staff
 *      description: 해당 월과, 직원이름을 입력받아 해당하는 직원의 월급을 보내줌
 */

/**
 * @swagger
 *  /api/staff/facility:
 *    get:
 *      tags:
 *      - staff
 *      description: 현재 재고, 모델명 , 단가얼마다를 보여주고 수리요망이 있는경우 파손여부도 Text로 보내줌
 */


/**
 * @swagger
 *  /api/staff/foodStock:
 *    get:
 *      tags:
 *      - staff
 *      description: 현재 음식에 대한 모든 재고를 보여줌
 */

/**
 * @swagger
 *  /api/staff/foodStock:
 *     put:
 *      tags:
 *      - staff
 *      description: 수정하려는 음식과 수정값을 입력으로 받아서 그 제품에 대한 재고를 변경
 */

// router.route('/roster')
//     .post(staffCtrl.getSpecifyEvent)

module.exports = router;