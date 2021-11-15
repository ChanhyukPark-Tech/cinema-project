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

router.route('/getPlaceMovies')
    .post(reserveCtrl.getPlaceMovies)

router.route('/getReserveTimes')
    .post(reserveCtrl.getReserveTimes)    


module.exports = router;