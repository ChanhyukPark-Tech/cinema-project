const connection = require('../dbConfig')

const storeCtrl = {
    getStores : async (req,res)=>{
        connection.query(`SELECT * FROM storeitem` ,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    },

    getOutstoreTotalrent : async (req,res)=>{
        const sql = `select quarter, place_place_id, sum(rent) totalrent from outstore group by quarter, place_place_id;`
        connection.query(
            sql,(error,rows) => {
                if(error) throw error;
                res.send(rows);
            }
        )
    }
}
module.exports = storeCtrl