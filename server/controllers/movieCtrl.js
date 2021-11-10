const connection = require('../dbConfig')

const movieCtrl = {
    getMovies : async (req,res) =>{
        connection.query('SELECT * FROM movie',(error,rows) => {
            if(error) throw error;
            res.send(rows);
        })
    },
    insertMovie : async (req,res) => {
        // javascript 구조분해할당
        const {movieId,title,person,genre,runningtime} = req.body;
        const sql = `INSERT INTO movie(movie_id,title,person,genre,runningtime)
 VALUES(${movieId},'${title}','${person}','${genre}',${runningtime});`
        connection.query(
            sql,(error,rows) => {
                if(error) throw error;
                res.send(rows);
            }
        )
    },
    modifyMovie : async (req,res)=>{
        // update set ~~ 라는 정보로 기존의 영화정보를 업데이트시킨다.
    },

    MovieDetail : async (req,res)=>{
        const {RepresentationMovieCode} = req.body;
        const sql = `SELECT * FROM movie where RepresentationMovieCode = '${RepresentationMovieCode}'`
        connection.query(
            sql,(error,rows) => {
                if(error) throw error;
                res.send(rows);
            }
        )
    }

}

module.exports = movieCtrl