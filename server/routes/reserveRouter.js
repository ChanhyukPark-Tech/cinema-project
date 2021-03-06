const reserveCtrl = require("../controllers/reserveCtrl")
const router = require("express").Router();


/**
 * @swagger
 *  /api/reserve/getPlaceMovies:
 *    post:
 *      tags:
 *      - reserve
 *      description: 특정지점에서 상영하는 모든 영화 가져오기
 */

/**
 * @swagger
 *  /api/reserve/getReserveTimes:
 *    post:
 *      tags:
 *      - reserve
 *      description: 특정지점에서 특정영화, 특정날짜에 맞는 상영시간표를 가져오기
 */

/**
 * @swagger
 *  /api/reserve/getCurMovie:
 *    post:
 *      tags:
 *      - reserve
 *      description: 스케줄 아이디주면 그에대한 영화를 준다..
 */

/**
 * @swagger
 *  /api/reserve/getSeats:
 *    post:
 *      tags:
 *      - reserve
 *      description: 스케쥴 아이디 보내면 그 스케쥴에 예약된 좌석 보내주기 (예약된 좌석에 예약한 사람의 '한마디 소개'도 얻을 수 있다.'))
 */

/**
 * @swagger
 *  /api/reserve/getReserveDelete:
 *    delete:
 *      tags:
 *      - reserve
 *      description: payinfo_id 를 보내면 그에 관련된 예매 정보들 삭제하는 api
 */

router.route('/getPlaceMovies')
    .post(reserveCtrl.getPlaceMovies)

router.route('/getReserveTimes')
    .post(reserveCtrl.getReserveTimes)    

router.route('/getCurMovie')
    .post(reserveCtrl.getCurMovie)

router.route('/getSeats')
    .post(reserveCtrl.getSeats)

router.route('/getReserveDelete')
    .post(reserveCtrl.getReserveDelete)
    
module.exports = router;