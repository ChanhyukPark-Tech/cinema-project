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
    },

    reviewMovies : async (req,res) => {
        // javascript 구조분해할당
        const {RepresentationMovieCode} = req.body;
        const sql = `SELECT * FROM review WHERE movie_RepresentationMovieCode = "${RepresentationMovieCode}";`
        connection.query(
            sql,(error,rows) => {
                if(error) throw error;
                res.send(rows);
            }
        )
    },
    
    reviewMovieDelete : async (req,res) => {
        // javascript 구조분해할당
        const {RepresentationMovieCode, member_id} = req.body;
        const sql = `DELETE FROM review WHERE movie_RepresentationMovieCode = "${RepresentationMovieCode}" AND member_member_id = ${member_id};`
        connection.query(
            sql,(error,rows) => {
                if(error) throw error;
                res.send(rows);
            }
        )
    },

    reviewMovieRatingUpdate: async (req, res) => {
        const {
            
            RepresentationMovieCode,
            member_id,
            content,
            regDt,
            rating

        } = req.body;

        const sql1 = ` INSERT INTO review VALUES("${RepresentationMovieCode}", ${member_id}, "${content}", "${regDt}", ${rating});`;
        connection.query(sql1, (error, rows) => {
            if (error) throw error;
        });

        const sq3 = `set sql_safe_updates=0;`
        connection.query(
            sq3,(error,rows) => {
                if(error) throw error;
                res.send(rows);
            }
        )

        const sql2 = `UPDATE movie SET rate = (SELECT round(avg(rating),1) FROM review WHERE movie_RepresentationMovieCode = "${RepresentationMovieCode}")
        WHERE RepresentationMovieCode = "${RepresentationMovieCode}";`;
        connection.query(sql2, (error, rows) => {
            if (error) throw error;
        });
    }

}

module.exports = movieCtrl