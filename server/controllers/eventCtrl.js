const connection = require('../dbConfig')

const eventCtrl = {
    getEvents : async (req,res)=>{
        connection.query(`SELECT * FROM event` ,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    },

    getSpecifyEvent : async (req,res)=>{
        const {RepresentationMovieCode} = req.body;
        const sql = `SELECT * FROM event where RepresentationMovieCode = '${RepresentationMovieCode}'`
        connection.query(
            sql,(error,rows) => {
                if(error) throw error;
                res.send(rows);
            }
        )
    }

}
module.exports = eventCtrl