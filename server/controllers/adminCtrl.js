const connection = require('../dbConfig')

const adminCtrl = {

    getSalesTotal: async (req, res) => {
        const sql = `SELECT month(payDt) month,sum(totalPrice) totalPrice FROM payinfo GROUP BY month(payDt);`
        connection.query(sql, (error, rows) => {
            if (error) throw error
            res.send(rows)
        })

    },

    getmonthTotal: async (req, res) => {
        const {month} = req.body;
        const sql = `SELECT sum(totalPrice) FROM payinfo WHERE month(payDt) = '${month}' AND cancel = 0`
        connection.query(
            sql, (error, rows) => {
                if (error) throw error;
                res.send(rows);
            }
        )
    },

    getgenderTotal: async (req, res) => {
        const {gender} = req.body;
        const sql = `SELECT sum(totalPrice) FROM payinfo join member on payinfo.member_member_id = member.member_id WHERE member.gender = '${gender}' AND cancel = 0`
        connection.query(
            sql, (error, rows) => {
                if (error) throw error;
                res.send(rows);
            }
        )
    }
    ,
    getBothGenderTotal : async (req,res) => {
        const sql = `SELECT gender,sum(totalPrice) totalPrice FROM payinfo join member on payinfo.member_member_id = member.member_id GROUP BY gender;`
        connection.query(sql,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    }

}

module.exports = adminCtrl