const adminCtrl = require('../controllers/adminCtrl')
const router = require("express").Router();



/**
 * @swagger
 *  /api/admin/sales:
 *    post:
 *      tags:
 *      - admin
 *      description: 조회하고 싶은 월과, 영화를 기준으로 매출을 보여줌 , 월별매출, 영화별 매출, 식음료 매출 , 이번달 총매출
 */

// month = 3 , currentMv = '독전' < state
// month = 3 , currnetMv = '보이스'
// month = 4 , currnetMv = '보이스'

module.exports = router;