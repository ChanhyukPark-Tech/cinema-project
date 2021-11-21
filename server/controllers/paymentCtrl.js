const connection = require("../dbConfig");

const paymentCtrl = {
    insertPayComplete: async (req, res) => {
        // js 구조분해할당, table의 정보(body)를 와서 각각을 변수로 하겠다.
        const {
            payMethod,
            payDt,
            originalPrice,
            totalPrice,
            member_member_id,
            RepresentationMovieCode,
            schedule_schedule_id,
            seats,
            gender,
            place_id,
        } = req.body;
        console.log(req.body);
        const sql1 = `insert into payinfo(payMethod,payDt,originalPrice,totalPrice,cancel,member_member_id, place_id) 
        values ('${payMethod}', '${payDt}', ${originalPrice}, ${totalPrice}, 0, ${member_member_id}, ${place_id});`;
        connection.query(sql1, (error, rows) => {
            if (error) throw error;
            console.log("페이인포들감");
        });

        const sql2 = `insert into ticket(ticketUse, payinfo_payinfo_id, RepresentationMovieCode) 
        values (0, (SELECT max(payinfo_id) FROM payinfo),${RepresentationMovieCode});`;
        connection.query(sql2, (error, rows) => {
            if (error) throw error;
            console.log("티켓들감");
        });

        seats.map((seat) => {
            const sql3 = `insert into seat(schedule_schedule_id, ticket_ticket_id, seatNm, gender, member_member_id)
            values (${schedule_schedule_id}, (SELECT max(ticket_id) FROM ticket),'${seat}', ${gender} ,${member_member_id});`;
            connection.query(sql3, (error, rows) => {
                if (error) throw error;
                console.log("좌석들감");
            });
        });
    },
};

module.exports = paymentCtrl;