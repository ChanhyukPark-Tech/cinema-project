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
    },

    getCountMember : async (req,res) => {
        const sql = `SELECT COUNT(*) as memberNumber FROM member;`
        connection.query(sql,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    },

    getCountStaff : async (req,res) => {
        const {place_place_id} = req.body;
        const sql = `SELECT COUNT(*) as staffNumber FROM staff WHERE place_place_id = ${place_place_id};`
        connection.query(sql,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    },

    getMovieTop5 : async (req,res) => {
        const sql = `select AA.RepresentationMovieCode, movieNm, AA.cnt
        from(
        select RepresentationMovieCode, count(*) cnt
        from ticket
        group by RepresentationMovieCode
        order by cnt desc
        ) AA LEFT JOIN movie on AA.RepresentationMovieCode = movie.RepresentationMovieCode LIMIT 5;`
        connection.query(sql,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    },

    staffMonthDay : async (req,res) => {
        const {month,day} = req.body;
        const sql = `SELECT * FROM workSchedule where month(Day) = ${month} AND day(Day) = ${day} order by attend ASC;`
        connection.query(sql,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    }

}

module.exports = adminCtrl