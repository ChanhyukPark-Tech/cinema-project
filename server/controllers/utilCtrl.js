const connection = require("../dbConfig");
const nodemailer = require("nodemailer");
const fs = require("fs");
const data = fs.readFileSync("./mailConfig.json");
const conf = JSON.parse(data);

const utilCtrl = {
    getPlaces: async (req, res) => {
        connection.query(`SELECT * FROM place`, (error, rows) => {
            if (error) throw error;
            res.send(rows);
        });
    },

    getDivisons: async (req, res) => {
        connection.query(`SELECT * FROM cinemaDivison`, (error, rows) => {
            if (error) throw error;
            res.send(rows);
        });
    },
    getPlace: async (req, res) => {
        const {DetailDivisionCode} = req.body;
        const sql = `SELECT * FROM place WHERE DetailDivisionCode = '${DetailDivisionCode}' `;

        connection.query(sql, (error, rows) => {
            if (error) throw error;
            res.send(rows);
        });
    },
    getSpecifyPlace: async (req, res) => {
        const {CinemaID} = req.body;
        const sql = `SELECT * FROM place WHERE CinemaID = ${CinemaID} `;

        connection.query(sql, (error, rows) => {
            if (error) throw error;
            res.send(rows);
        });
    },
    sendPost: async (req, res) => {
        let data = req.body;
        let smtpTransport = nodemailer.createTransport({
            service: "Gmail",
            port: 465,
            auth: {
                user: conf.email,
                pass: conf.password,
            },
        });

        let mailOptions = {
            // nodemailer
            from: data.email,
            to: "pgg6713@gmail.com",
            subject: data.subject,
            html: `
            <h3>Informations</h3>
            <ul>    
            <li>Name: ${data.name}</li>
            <li>email: ${data.email}</li>
            </ul>
            
            <h3>Message</h3>
            <p>${data.message}</p>
        `,
        };
        smtpTransport.sendMail(mailOptions, (err, response) => {
            if (err) {
                res.send(err);
                console.log(err);
                console.log("실패");
            } else {
                res.send("Success");
                console.log("성공");
            }
        });

        smtpTransport.close();
    },
    addMarketPost: async (req, res) => {
        const {payinfoId, content, tag, member_id, today, title} = req.body;
        const sql = `INSERT INTO marketPost(member_member_id,content,payinfo_id,tag,date,title)
 VALUES(${member_id},'${content}',${payinfoId},'${tag}','${today}','${title}')`;

        connection.query(sql, (error, rows) => {
            if (error) throw error;
            res.json({success: 1});
            console.log("게시글 작성 성공!");
        });
    },

    getMarketPosts: async (req, res) => {
        const sql = `SELECT * FROM marketPost left join member on marketPost.member_member_id = member.member_id natural join payinfo natural join ticket natural join schedule foo join movie on foo.movie_movie_id = movie.movie_id GROUP BY payinfo_id`;
        connection.query(sql, (error, rows) => {
            if (error) throw error;
            res.send(rows);
        });
    },

    marketPost: async (req, res) => {
        // 11/15 추가
        const {marketPost_id} = req.body;
        const sql = `SELECT * FROM (marketPost
left join payinfo on marketPost.payinfo_id = payinfo.payinfo_id
left join ticket on payinfo.payinfo_id = ticket.payinfo_payinfo_id
left join seat on ticket.ticket_id = seat.ticket_ticket_id
left join member on seat.member_member_id = member.member_id
left join schedule on seat.schedule_schedule_id = schedule.schedule_id)
left join place on schedule.place_place_id = place.place_id
WHERE marketPost.marketPost_id = ${marketPost_id}`;

        connection.query(sql, (error, rows) => {
            if (error) throw error;
            res.send(rows);
        });
    },

    deleteMarketPost: async (req, res) => {
        // 11/15 추가
        const {marketPost_id} = req.body;
        const sql = `DELETE FROM movieDB.marketPost WHERE marketPost_id = '${marketPost_id}'`;

        connection.query(sql, (error, rows) => {
            if (error) throw error;
            res.send(rows);
        });
    },

    updateMarketPost: async (req, res) => {
        // 11/15 추가
        const {member_id, payinfo_id} = req.body;

        const findId = `SELECT member_id FROM member WHERE Nm = '${member_id}';`;

        connection.query(findId, (error, rows) => {
            const sql = `UPDATE payinfo set member_member_id = ${rows[0].member_id} WHERE payinfo_id = ${payinfo_id};`;
            const sql2 = `UPDATE marketPost SET tag = "판매완료", member_member_id = ${rows[0].member_id} WHERE payinfo_id = ${payinfo_id}`;

            connection.query(sql, (error, rows) => {
                if (error) throw error;
            });

            connection.query(sql2, (error, rows) => {
                if (error) throw error;
                res.send("티켓 양도를 성공했습니다");
            });
        });
    },

    //
    // doTest: async (req,res) => {
    //
    //     const {seats} = req.body;
    //     console.log(seats)
    //     // for(let i = 0 ; i <seats.length ; i++){
    //     //
    //     // }
    //     seats.map(seat => {
    //         const sql = ` INSERT INTO arrayTest(seat) VALUES('${seat}')`
    //
    //         connection.query(sql, (error, rows) => {
    //             console.log("들어감요")
    //             if (error) throw error
    //             console.log(rows)
    //         })
    //     })
    // }

    getTicket: async (req, res) => {
        // javascript 구조분해할당
        const {member_id} = req.body;
        const sql = `SELECT * FROM (payinfo
            left join ticket on payinfo.payinfo_id = ticket.payinfo_payinfo_id
            left join seat on ticket.ticket_id = seat.ticket_ticket_id
            left join schedule on seat.schedule_schedule_id = schedule.schedule_id
            left join movie on schedule.movie_movie_id = movie.movie_id)
            WHERE payinfo.member_member_id = ${member_id};`;
        connection.query(sql, (error, rows) => {
            if (error) throw error;
            res.send(rows);
        });
    },
};
module.exports = utilCtrl;
