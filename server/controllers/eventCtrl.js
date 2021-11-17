const connection = require('../dbConfig')

const eventCtrl = {
    getEvents : async (req,res)=>{
        connection.query(`SELECT * FROM event` ,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    },

    getSpecifyEvent : async (req,res)=>{
        const {event_id} = req.body;
        const sql = `SELECT * FROM event where event_id = '${event_id}'`
        connection.query(
            sql,(error,rows) => {
                if(error) throw error;
                res.send(rows);
            }
        )
    },

    getpromotionCode : async (req,res)=>{
        const {promotionCode} = req.body;
        const sql = `SELECT * FROM event where promotionCode = '${promotionCode}'`
        connection.query(
            sql,(error,rows) => {
                if(error) throw error;
                res.send(rows);
            }
        )
    }

}
module.exports = eventCtrl