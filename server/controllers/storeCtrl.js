const connection = require('../dbConfig')

const storeCtrl = {
    getStores : async (req,res)=>{
        connection.query(`SELECT * FROM storeitem` ,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    },

    getOutstore : async (req,res)=>{
        const sql = `select * from outstore;`
        connection.query(
            sql,(error,rows) => {
                if(error) throw error;
                res.send(rows);
            }
        )
    },

    getStoreMonthSale : async (req,res)=>{
        connection.query(`select place_id , month , sum(total) sale from store group by place_id , month order by place_id asc,month asc;` ,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    },

    getStoreitemMonthSale : async (req,res)=>{
        connection.query(`select place_id, store.storeitem_id ,itemNm, total sale , month from store left join storeitem on store.storeitem_id = storeitem.storeitem_id order by place_id asc ,month asc , storeitem_id asc;` ,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    }
}
module.exports = storeCtrl