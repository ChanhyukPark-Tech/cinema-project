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

/**
 * @swagger
 *  /api/store/outstore:
 *    get:
 *      tags:
 *      - store
 *      description: outstore에서 지점 , 분기당 총 Rent 가격을 보여준다.
 */

router.route('/')
    .get(storeCtrl.getStores)

router.route('/outstore')
    .get(storeCtrl.getOutstoreTotalrent)

module.exports = router;