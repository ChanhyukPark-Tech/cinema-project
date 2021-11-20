const connection = require('../dbConfig')

const propsCtrl = {
    getprops : async (req,res)=>{
        connection.query(`SELECT * FROM props` ,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    },

    addProp: async (req, res) => {
        const {propsType_propsType_id, place_place_id, price,damage,modelNm,amount,imgUrl} = req.body;
        const sql = `INSERT INTO props(propsType_propsType_id, place_place_id, price,damage,modelNm,amount,imgUrl)
 VALUES(${propsType_propsType_id},${place_place_id},${price},'${damage}','${modelNm}',${amount},'${imgUrl}')`

        connection.query(sql,(error,rows) => {
            if(error) throw error;
            res.json({success:1})
            console.log("게시글 작성 성공!")
        })
    },
    
    deleteProp : async (req,res) => { // 11/15 추가
        const {props_id} = req.body;
        const sql = `DELETE FROM props WHERE props_id = '${props_id}'`
        
        connection.query(sql,(error,rows) => {
            if(error) throw error;
            res.send(rows);
        })
    }

    
}
module.exports = propsCtrl