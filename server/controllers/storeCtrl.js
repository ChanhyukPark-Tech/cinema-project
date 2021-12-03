const connection = require('../dbConfig')

const storeCtrl = {
    getStores : async (req,res)=>{
        connection.query(`SELECT * FROM storeitem` ,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    },

    getOutstore : async (req,res)=>{
        const {place_id, quarter} = req.body;
        connection.query(`select * from outstore where quarter = ${quarter} and place_place_id = ${place_id} ORDER BY sales desc;` ,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    },

    getStoreMonthSale : async (req,res)=>{
        connection.query(`select place_id , month , sum(total) sale from store group by place_id , month order by place_id asc,month asc;` ,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    },

    getStoreitemMonthSale : async (req,res)=>{
        const {place_id} = req.body;
        connection.query(`select place_id, store.storeitem_id ,itemNm, total sale , month from store left join storeitem on store.storeitem_id = storeitem.storeitem_id WHERE place_id = ${place_id} AND month = 12 order by place_id asc ,month asc , storeitem_id asc;` ,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    }
}
module.exports = storeCtrl