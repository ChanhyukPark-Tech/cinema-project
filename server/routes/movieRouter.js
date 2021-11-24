const movieCtrl = require("../controllers/movieCtrl")
const router = require("express").Router();

/**
 * @swagger
 *  /api/movie/:
 *    get:
 *      tags:
 *      - movie
 *      description: 모든 영화에 대한 정보를줌
 */

/**
 * @swagger
 *  /api/movie/movieDetail:
 *    post:
 *      tags:
 *      - movie
 *      description: 원하는 영화의 상세정보를 제공
 */

/**
 * @swagger
 *  /api/movie/addMovie:
 *    post:
 *      tags:
 *      - movie
 *      description: 관리자가 영화를 추가함
 */


/**
 * @swagger
 *  /api/movie/modifyMovie:
 *    put:
 *      tags:
 *      - movie
 *      description: 관리자가 영화를 수정함
 */

/**
 * @swagger
 *  /api/movie/reviewMovieRatingUpdate:
 *    post:
 *      tags:
 *      - movie
 *      description: 사용자가 한 영화에 대해서 리뷰를 작성함, 이후 다시 평점 업데이트됩
 */

/**
 * @swagger
 *  /api/movie/reviewMovie:
 *    post:
 *      tags:
 *      - movie
 *      description: 영화코드(RepresentationMovieCode)를 주면 그영화에 해당하는 모든리뷰  보여주기
 */

/**
 * @swagger
 *  /api/movie/reviewMovieDelete:
 *    delete:
 *      tags:
 *      - movie
 *      description: 사용자가 한 영화에 리뷰를 삭제함
 */

// 배우클릭하면 => 그배우에대한정보를

// 리뷰테이블에 지금 온 content 랑 user 그 영화에 대한 그걸넣어라



router.route('/')
    .get(movieCtrl.getMovies)
    .post(movieCtrl.insertMovie)

router.route('/movieDetail')
    .post(movieCtrl.MovieDetail)

router.route('/modifyMovie')
    .put(movieCtrl.modifyMovie)

router.route('/reviewMovies')
    .post(movieCtrl.reviewMovies)

router.route('/reviewMovieDelete')
    .delete(movieCtrl.reviewMovieDelete)

router.route('/reviewMovieRatingUpdate')
    .post(movieCtrl.reviewMovieRatingUpdate)

module.exports = router;