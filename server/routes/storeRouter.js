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
 *      description: outstore에서 정보를 모둘 알 수 있다. 모든 분기별 총 임대료, 총 매출
 */

/**
 * @swagger
 *  /api/store/getStoreMonthSale:
 *    get:
 *      tags:
 *      - store
 *      description: store(매점)에서  place(지점), month 단위 총 매출
 */

/**
 * @swagger
 *  /api/store/getStoreitemMonthSale:
 *    get:
 *      tags:
 *      - store
 *      description: outstore에서 store(매점)에서  place(지점), month 단위 각각의 상품  매출
 */

router.route('/')
    .get(storeCtrl.getStores)

router.route('/outstore')
    .get(storeCtrl.getOutstore)

router.route('/getStoreMonthSale')
    .get(storeCtrl.getStoreMonthSale)

router.route('/getStoreitemMonthSale')
    .post(storeCtrl.getStoreitemMonthSale)
module.exports = router;