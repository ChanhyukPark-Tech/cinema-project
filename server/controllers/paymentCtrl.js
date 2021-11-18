const connection = require('../dbConfig')

const paymentCtrl = {

    insertPayComplete : async(req,res) =>{
        // js 구조분해할당, table의 정보(body)를 와서 각각을 변수로 하겠다.
        const {payMethod,payDt,originalPrice,totalPrice,member_member_id,RepresentationMovieCode,schedule_schedule_id,seats,gender} = req.body;
        const sql1 = `insert into payinfo(payMethod,payDt,originalPrice,totalPrice,cancel,member_member_id) 
        values ('${payMethod}', '${payDt}', ${originalPrice}, ${totalPrice}, 0, ${member_member_id});`
        connection.query(
            sql1,(error,rows)=>{
                if(error) throw error;
                
            }
        )  
        
        const sql2 = `insert into ticket(ticketUse, payinfo_payinfo_id, RepresentationMovieCode) 
        values (0, (SELECT max(payinfo_id) FROM payinfo),${RepresentationMovieCode});`
        connection.query(
            sql2,(error,rows)=>{
                if(error) throw error;
                
            }
        )  
        
        seats.map(seat =>{
            const sql3 = `insert into seat(schedule_schedule_id, ticket_ticket_id, seatNm, gender, member_member_id)
            values (${schedule_schedule_id}, (SELECT max(ticket_id) FROM ticket),'${seat}', ${gender} ,${member_member_id});`
            connection.query(
                sql3,(error,rows)=>{                  
                    if(error) throw error;
    
                }
            )               
        })
    }
}

module.exports = paymentCtrl
