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
    },
    getReserveTimes : async (req,res) => {
        const {CinemaID,movie_movie_id,ymd} = req.body;
        const sql = `SELECT * FROM schedule 
        join theater on theater_id = schedule.theater_theater_id
        join place on place_id = schedule.place_place_id
        WHERE CinemaID = ${CinemaID} AND movie_movie_id=${movie_movie_id} AND ymd='${ymd}';`

        connection.query(sql,(error,rows) => {
            if(error) throw error;
            res.send(rows);
        })
    }
    ,
    getCurMovie : async (req,res) =>{
        const {schedule_id} = req.body;
        const sql = `SELECT * FROM (SELECT * FROM (SELECT * FROM schedule join movie on schedule.movie_movie_id = movie.movie_id WHERE schedule_id = ${schedule_id}) foo join theater
on foo.theater_theater_id = theater.theater_id ) poo join place on poo.place_place_id = place.place_id
 ;`

        connection.query(sql,(error,rows) => {
            if(error) throw error;
            res.send(rows);

        })
    }
}

module.exports = reserveCtrl