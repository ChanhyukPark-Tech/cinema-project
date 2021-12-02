const connection = require('../dbConfig')

const staffCtrl = {

    getWorkTime : async (req,res)=>{
        const {staff_id,month} = req.body;
        const sql = `SELECT * FROM workSchedule WHERE staff_staff_id = ${staff_id} and month(Day) = ${month};`
        connection.query(
            sql,(error,rows) => {
                if(error) throw error;
                res.send(rows);
            }
        )
    },

    getWage : async (req,res)=>{
        const {staff_id,month} = req.body;
        const sql = `SELECT staff_staff_id as staff_id, MONTH(Day) as month,
        sum((hour(end) - hour(attend)) * hourWage) as normalWage,
        sum(hour(overtime) * hourWage * 1.5) as overWage,
        (sum((hour(end) - hour(attend)) * hourWage) + sum(hour(overtime) * hourWage * 1.5)) as totalWage
        FROM workSchedule
        left join staff on workSchedule.staff_staff_id = staff.staff_id
        left join class on staff.class_class_id = class.class_id
        WHERE staff_staff_id = ${staff_id} AND MONTH(Day) = ${month}
        group by staff_staff_id;`
        connection.query(
            sql,(error,rows) => {
                if(error) throw error;
                res.send(rows);
            }
        )
    },




}
module.exports = staffCtrl