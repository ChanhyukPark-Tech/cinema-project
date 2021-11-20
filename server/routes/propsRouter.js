const propsCtrl = require("../controllers/propsCtrl");
const router = require("express").Router();

/**
 * @swagger
 *  /api/props:
 *    get:
 *      tags:
 *      - props
 *      description: 문제가 있는 소품의 정보를 모두 준다.
 */

/**
 * @swagger
 *  /api/props/eventDetail:
 *    post:
 *      tags:
 *      - props
 *      description: 특정 영화에 관련된 이벤트만 가져오기
 */


router.route('/')
    .get(propsCtrl.getprops)

// router.route('/eventDetail')
//     .post(eventCtrl.getSpecifyEvent)

module.exports = router;