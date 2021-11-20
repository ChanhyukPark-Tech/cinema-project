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
 *  /api/props/addProp:
 *    post:
 *      tags:
 *      - props
 *      description: 문제가 있는 소품의 정보를 등록한다.
 */

/**
 * @swagger
 *  /api/props/deleteProp:
 *    post:
 *      tags:
 *      - props
 *      description: props_id주면 특정 문제가 있는 소품의 정보를 삭제한다.
 */


router.route('/')
    .get(propsCtrl.getprops)

router.route('/addProp')
    .post(propsCtrl.addProp)

router.route('/deleteProp')
    .post(propsCtrl.deleteProp)

module.exports = router;