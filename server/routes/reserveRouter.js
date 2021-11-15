const reserveCtrl = require("../controllers/reserveCtrl")
const router = require("express").Router();

router.route('/getPlaceMovies')
    .post(reserveCtrl.getPlaceMovies)



module.exports = router;