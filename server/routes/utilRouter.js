const utilCtrl = require("../controllers/utilCtrl")
const router = require("express").Router();

/**
 * @swagger
 *  /api/util/timeTable:
 *    post:
 *      tags:
 *      - util
 *      description: 원하는 지점의 상영시간표를 제공
 */

/**
 * @swagger
 *  /api/util/branch:
 *    post:
 *      tags:
 *      - util
 *      description: 원하는 지점의 상세정보를 제공
 */

 /**
 * @swagger
 *  /api/util/place:
 *    get:
 *      tags:
 *      - util
 *      description: 모든 지점 정보 제공
 */

 /**
 * @swagger
 *  /api/util/divison:
 *    get:
 *      tags:
 *      - util
 *      description: 모든 지역 보내주기 제공
 */

/**
 * @swagger
 *  /api/util/place:
 *    post:
 *      tags:
 *      - util
 *      description: 한 지역에 해당하는 모든 지점 보내주기
 */


/**
 * @swagger
 *  /api/util/placeDetail:
 *    post:
 *      tags:
 *      - util
 *      description: 한 지점에 해당하는 상세정보 보여주기
 */


/**
 * @swagger
 *  /api/util/form:
 *    post:
 *      tags:
 *      - util
 *      description: 문의페이지에서 문의하는거 이름이랑 문의내용 넘어올거임
 */


router.route('/place')
    .get(utilCtrl.getPlaces)
    .post(utilCtrl.getPlace)

router.route('/divison')
    .get(utilCtrl.getDivisons)

router.route('/placeDetail')
    .post(utilCtrl.getSpecifyPlace)

router.route('/form')
    .post(utilCtrl.sendPost)

module.exports = router;