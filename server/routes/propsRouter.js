const propsCtrl = require("../controllers/propsCtrl");
const router = require("express").Router();

/**
 * @swagger
 *  /api/props:
 *    post:
 *      tags:
 *      - props
 *      description: 지점주면 props 정보 + propstype 이름까지 주는 것
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

/**
 * @swagger
 *  /api/props/updateProp:
 *    post:
 *      tags:
 *      - props
 *      description: 지점 , modelNm , damage 주면 어느 지점의 modelNm 행의 damage column 을 전달받은 damage 값으로 update 시키기
 */

/**
 * @swagger
 *  /api/props/updatePropNull:
 *    post:
 *      tags:
 *      - props
 *      description: 지점 , modelNm 주면 어느 지점의 modelNm 행의 damage column 을 null 로 바꿔버리기 (파손 해결)
 */

/**
 * @swagger
 *  /api/props/getPropsNN:
 *    post:
 *      tags:
 *      - props
 *      description: 지점주면 damage 의 값이 null 이 아닌 소품들의정보 + propstype 까지 보여줌
 */

router.route('/')
    .post(propsCtrl.getProps)

router.route('/addProp')
    .post(propsCtrl.addProp)

router.route('/deleteProp')
    .post(propsCtrl.deleteProp)

router.route('/updateProp')
    .post(propsCtrl.updateProp)

router.route('/updatePropNull')
    .post(propsCtrl.updatePropNull)

router.route('/getPropsNN')
    .post(propsCtrl.getPropsNN)

module.exports = router;