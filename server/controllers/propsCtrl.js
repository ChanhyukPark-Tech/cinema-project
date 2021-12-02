const connection = require('../dbConfig')

const propsCtrl = {
    getProps : async (req,res) => { // 11/15 추가
        const {place_id} = req.body;
        const sql = `SELECT * FROM props left join propsType on props.propsType_propsType_id = propsType.propsType_id
        WHERE place_place_id = ${place_id};`
        
        connection.query(sql,(error,rows) => {
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
    },

   updateProp : async (req,res) => { // 11/15 추가
        const {place_id,damage,modelNm} = req.body;
        const sql = `UPDATE props SET damage = '${damage}' WHERE place_place_id = ${place_id} and modelNm = '${modelNm}';`
        
        connection.query(sql,(error,rows) => {
            if(error) throw error;
            res.send(rows);
        })
    },

    updatePropNull : async (req,res) => { // 11/15 추가
        const {place_id,modelNm} = req.body;
        const sql = `UPDATE props SET damage = null WHERE place_place_id = ${place_id} and modelNm = '${modelNm}';`
        
        connection.query(sql,(error,rows) => {
            if(error) throw error;
            res.send(rows);
        })
    },
    
    getPropsNN : async (req,res) => { // 11/15 추가
        const {place_id} = req.body;
        const sql = `select * from props left join propsType on props.propsType_propsType_id = propsType.propsType_id where place_place_id = ${place_id} and damage IS NOT NULL;`
        
        connection.query(sql,(error,rows) => {
            if(error) throw error;
            res.send(rows);
        })
    }

}
module.exports = propsCtrl