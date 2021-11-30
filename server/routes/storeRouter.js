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
 *    post:
 *      tags:
 *      - store
 *      description: 지점이랑 분기보내면 입점매장별 매출과 임대료
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
    .post(storeCtrl.getOutstore)

router.route('/getStoreMonthSale')
    .get(storeCtrl.getStoreMonthSale)

router.route('/getStoreitemMonthSale')
    .post(storeCtrl.getStoreitemMonthSale)
module.exports = router;