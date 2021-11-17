const eventCtrl = require("../controllers/eventCtrl");
const router = require("express").Router();




/**
 * @swagger
 *  /api/event/:
 *    get:
 *      tags:
 *      - event
 *      description: 모든 이벤트에 대한 정보를 줄게.
 */

/**
 * @swagger
 *  /api/event/eventDetail:
 *    post:
 *      tags:
 *      - event
 *      description: 특정 영화에 관련된 이벤트만 가져오기
 */

/**
 * @swagger
 *  /api/event/promotionCode:
 *    post:
 *      tags:
 *      - event
 *      description: 프로모션 코드를 주면 그에 해당하는 이벤트의 row 를 넘겨주는 API
 */

router.route('/')
    .get(eventCtrl.getEvents)

router.route('/eventDetail')
    .post(eventCtrl.getSpecifyEvent)

router.route('/promotionCode')
    .post(eventCtrl.getpromotionCode)

// 첫번째 백에서는 다짜고짜 모든 정보를 다줌 니네가 알아서 필터해라

// 프론트에서 독전만줘 => 백에서는 select * from event where 영화.id = '독전'
// 프론트에서 독전이라는 걸클릭해 => 뭘 클릭했는지 백으로감 => 백에서는



module.exports = router;