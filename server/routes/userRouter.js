const router = require("express").Router();
const {
    createUser,
    login,
    getUserByUserId,
    getUsers,
    updateUsers,
    deleteUser
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
 *      description: 회원가입
 */
router.post("/", createUser);
router.get("/:id", checkToken, getUserByUserId);

/**
 * @swagger
 *  /api/user/login:
 *    post:
 *      tags:
 *      - user
 *      description: 로그인
 */
router.post("/login", login);
router.patch("/", checkToken, updateUsers);
router.delete("/", checkToken, deleteUser);

module.exports = router;