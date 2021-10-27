const router = require("express").Router();



/**
 * @swagger
 *  /api/ticket/ticketing:
 *    post:
 *      tags:
 *      - ticket
 *      description: 사용자가 보낸 지역,지점,영화,날짜를 기준으로 그영화에 대한 시간을보내줌
 */

/**
 * @swagger
 *  /api/ticket/popcorn:
 *    get:
 *      tags:
 *      - ticket
 *      description: 데이터베이스에 있는 매점의 메뉴를 모두 보여준다.
 */

/**
 * @swagger
 *  /api/ticket/:
 *    post:
 *      tags:
 *      - ticket
 *      description: 결제버튼을 누르면 지금까지 고른, 영화 지점, 시간 , 날짜 영화명 , 팝콘,음료,스낵, 총금액 등을 총 조합해서  결제 하는 동시에 호출하면 이 api 가 결제에 대한 정보를 데이터베이스에 입력시켜준다.
 */





module.exports = router;