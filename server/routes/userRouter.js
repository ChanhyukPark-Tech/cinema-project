const router = require("express").Router();
const {
    createUser,
    login,
    getUserByUserId,
    getUsers,
    updateUsers,
    deleteUser, getUserDetail
} = require("../controllers/userCtrl");
const {checkToken} = require("../auth/token_validation");

/**
 * @swagger
 *  /api/user:
 *    get:
 *      tags:
 *      - user
 *      description: 모든 유저 조회
 *      produces:
 *      - application/json
 *      parameters:
 *        - in: query
 *          name: category
 *          required: false
 *          schema:
 *            type: integer
 *            description: 카테고리
 *
 */
router.get("/", checkToken, getUsers);



/**
 * @swagger
 *  /api/user/:
 *    post:
 *      tags:
 *      - user
 *      description: 입력한 정보를 기반으로 회원가입 시켜줌
 */
router.post("/", createUser);

router.get("/:id", checkToken, getUserByUserId);

/**
 * @swagger
 *  /api/user/login:
 *    post:
 *      tags:
 *      - user
 *      description: 로그인 ( 이메일과 패스워드를 입력받음)
 */
router.post("/login", login);



/**
 * @swagger
 *  /api/user/:
 *    patch:
 *      tags:
 *      - user
 *      description: 사용자 정보를 업데이트 시켜줌
 */
router.patch("/", checkToken, updateUsers);

/**
 * @swagger
 *  /api/user/:
 *    delete:
 *      tags:
 *      - user
 *      description: 사용자 정보를 삭제 시켜줌
 */
router.delete("/", checkToken, deleteUser);

/**
 * @swagger
 *  /api/user/userDetail:
 *    post:
 *      tags:
 *      - user
 *      description: 특정 사용자에 대한 상세정보를 전달함 member_id 를 post로 받음
 */


router.post("/userDetail",getUserDetail);


module.exports = router;