const connection = require('../dbConfig')

const reserveCtrl = {

    getPlaceMovies : async (req,res) => {
        const {CinemaID} = req.body;
        const sql = `SELECT * FROM movie join (SELECT * FROM place join schedule on place.place_id = schedule.place_place_id WHERE CinemaID = ${CinemaID}) foo 
WHERE movie.movie_id = foo.movie_movie_id GROUP BY (movieNm);`

        connection.query(sql,(error,rows) => {
            if(error) throw error;
            res.send(rows);
        })
    }
}

module.exports = reserveCtrl