const connection = require('../dbConfig')

const propsCtrl = {
    getprops : async (req,res)=>{
        connection.query(`SELECT * FROM props` ,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    },

    // getSpecifyEvent : async (req,res)=>{
    //     const {event_id} = req.body;
    //     const sql = `SELECT * FROM event where event_id = '${event_id}'`
    //     connection.query(
    //         sql,(error,rows) => {
    //             if(error) throw error;
    //             res.send(rows);
    //         }
    //     )
    // }
}
module.exports = propsCtrl