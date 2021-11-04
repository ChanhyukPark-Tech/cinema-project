const connection = require('../dbConfig')

const eventCtrl = {
    getEvents : async (req,res)=>{
        connection.query(`SELECT * FROM event` ,(error,rows)=>{
            res.send(rows);
        })
    },
    getSpecifyEvents : async (req,res)=>{
        const {movieId} = req.body;

        sql = ``
    }

}
module.exports = eventCtrl