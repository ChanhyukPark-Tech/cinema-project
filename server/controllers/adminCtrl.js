const connection = require('../dbConfig')
let today = new Date();  

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
    },
    

    getPlacePayTop10 : async (req,res) => {  // 4번
        const sql = `select AA.place_id, total,CinemaNameKR
        from(
        select place_id,CinemaNameKR ,sum(totalPrice) total
        from payinfo join place using(place_id)
        group by place_id
        order by total desc
        ) AA LIMIT 10;`
        connection.query(sql,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    },

    getMonthPay : async (req,res) => {   // 5번
        const {place_id} = req.body;
        const sql = `SELECT year(payDt) year, month(payDt) month,sum(totalPrice) totalPrice  FROM payinfo WHERE place_id = ${place_id}
        group by month(payDt) order by month(payDt) asc; `
        connection.query(sql,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    },

    getRecentTicketTop5 : async (req,res) => {  //6번
        const sql = `SELECT * FROM ticket
        LEFT JOIN payinfo on ticket.payinfo_payinfo_id = payinfo.payinfo_id
        LEFT JOIN movie on ticket.RepresentationMovieCode = movie.RepresentationMovieCode
        GROUP BY payinfo_id ORDER BY payinfo_id DESC LIMIT 5;`
        connection.query(sql,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    },
    
    // getTodayPay : async (req,res) => {   // 8번
    //     const {place_id} = req.body;
    //     var today = new Date();
    //     var year = today.getFullYear();
    //     var month = ('0' + (today.getMonth() + 1)).slice(-2);
    //     var day = ('0' + today.getDate()).slice(-2);
    //     var dateString = year + '-' + month  + '-' + day;
    //     console.log(dateString);
    //     const sql = `SELECT place_id, payDt, sum(totalPrice) totalPrice FROM payinfo
    //     WHERE place_id = ${place_id} AND payDt = "${dateString}";`
    //     connection.query(sql,(error,rows)=>{
    //         if(error) throw error;
    //         res.send(rows);
    //     })
    // },

    getLastMonthPlacePay : async (req,res) => {   // 9번
        let month = today.getMonth(); 
        const sql = `SELECT place_id, sum(totalPrice) totalPrice FROM payinfo
        WHERE month(payDt) = ${month}
        group by place_id order by place_id asc;`
        connection.query(sql,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    },

    getAgePay : async (req,res) => {   // 5번
        const {place_id} = req.body;
        const sql = `SELECT place_id,
        sum(if(age between 10 and 19, totalPrice, 0)) as age_10,
        sum(if(age between 20 and 29, totalPrice, 0)) as age_20,
        sum(if(age between 30 and 39, totalPrice, 0)) as age_30,
        sum(if(age between 40 and 49, totalPrice, 0)) as age_40,
        sum(if(age between 50 and 59, totalPrice, 0)) as age_50
        FROM payinfo
        left join member on payinfo.member_member_id = member.member_id
        WHERE place_id = ${place_id}; `
        connection.query(sql,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    },

    getPlaceGenderPay : async (req,res) => {   // 11-28 지점별 성별별 매출
        const {place_id} = req.body;
        const sql = `SELECT place_id, sum(if(gender = "남성", totalPrice,0)) as man, sum(if(gender = "여성", totalPrice,0)) as woman
        FROM payinfo left join member on payinfo.member_member_id = member.member_id
        WHERE place_id = ${place_id}
        group by place_id order by place_id asc`
        connection.query(sql,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    },

    getPlaceDayPay : async (req,res) => {   // 11-28 지점과 월 주면 일별 매출
        const {place_id, month} = req.body;
        const sql = `SELECT place_id, day(payDt) as day, sum(totalPrice) as totalPrice FROM payinfo WHERE place_id = ${place_id} AND month(payDt) = ${month}
        group by day(payDt) order by day(payDt) asc;`
        connection.query(sql,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    },

    getStaffWage : async (req,res) => {   
        const {place_id, month} = req.body;
        const sql = `SELECT place_place_id as place_id, MONTH(Day) as month, class_class_id as class, sum((hour(end) - hour(attend)) * hourWage) as Wage
        FROM workSchedule
        left join staff on workSchedule.staff_staff_id = staff.staff_id
        left join class on staff.class_class_id = class.class_id
        WHERE place_place_id = ${place_id} AND MONTH(Day) = ${month}
        group by class_class_id;`
        connection.query(sql,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    }

}

module.exports = adminCtrl
