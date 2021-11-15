const storeCtrl = require("../controllers/storeCtrl");
const router = require("express").Router();


/**
 * @swagger
 *  /api/store/:
 *    get:
 *      tags:
 *      - store
 *      description: 모든 메뉴의 정보를 주는 코드
 */

router.route('/')
    .get(storeCtrl.getStores)

module.exports = router;