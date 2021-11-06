const connection = require('../dbConfig')

const utilCtrl = {
    getPlaces : async (req,res)=>{
        connection.query(`SELECT * FROM place` ,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    },

    getDivisons : async (req,res)=>{
        connection.query(`SELECT * FROM cinemaDivison` ,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    }

}
module.exports = utilCtrl