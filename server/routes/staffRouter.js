const staffCtrl = require("../controllers/staffCtrl")
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

/**
 * @swagger
 *  /api/staff/getStaffWorkTime:
 *    post:
 *      tags:
 *      - staff
 *      description: staff_id와 월을주면 그 사람의 해당월의 근무한 기록들 보여줌
 */

/**
 * @swagger
 *  /api/staff/getStaffWage:
 *    post:
 *      tags:
 *      - staff
 *      description: staff_id 와 월을주면 그 사람의 해당월의 일반급여 , 초과로인한 급여 , 총급여 세개 보내줌 (초과급여 = 그냥 일반총근무시간 * 시급 / 초과수당시간 * 1.5 * 시급 / 왼쪽두개 합한거 총합)
 */

router.route('/getStaffWorkTime')
    .post(staffCtrl.getStaffWorkTime)

router.route('/getStaffWage')
    .post(staffCtrl.getStaffWage)


module.exports = router;