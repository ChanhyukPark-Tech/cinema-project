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
 *  /api/util/Divison:
 *    get:
 *      tags:
 *      - util
 *      description: 모든 지역 보내주기 제공
 */


router.route('/place')
    .get(utilCtrl.getPlaces)

router.route('/divison')
    .get(utilCtrl.getDivisons)


module.exports = router;