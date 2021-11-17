const connection = require('../dbConfig')

const storeCtrl = {
    getStores : async (req,res)=>{
        connection.query(`SELECT * FROM storeitem` ,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    }
}
module.exports = storeCtrl