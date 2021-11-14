const {
    create,
    getUserByUserEmail,
    getUserByUserId,
    getUsers,
} = require("../service/user.service");
const {hashSync, genSaltSync, compareSync} = require("bcrypt");
const {sign} = require("jsonwebtoken");
const connection = require("../dbConfig");

module.exports = {
    createUser: (req, res) => {
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection errror"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    login: (req, res) => {
        const body = req.body;
        getUserByUserEmail(body.email, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }
            const result = compareSync(body.password, results.pin);
            if (result) {
                results.password = undefined;
                const jsontoken = sign({result: results}, "qwe1234", {
                    expiresIn: "1h"
                });
                return res.json({
                    success: 1,
                    message: "login successfully",
                    token: jsontoken,
                    name: results.Nm,
                    member_id: results.member_id
                });
            } else {
                return res.json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }
        });
    },
    getUserByUserId: (req, res) => {
        const id = req.params.id;
        getUserByUserId(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not Found"
                });
            }
            results.password = undefined;
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getUsers: (req, res) => {
        getUsers((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    updateUsers: async (req, res) => {
        const {id, name, email, password, phoneNm, age, gender, dateEvent, selfPR} = req.body;
        const salt = genSaltSync(10);
        const hashedPassword = hashSync(password, salt);
        const sql = `UPDATE member SET pin='${hashedPassword}', age=${age},Nm='${name}', phoneNm=${phoneNm},
 email='${email}',gender='${gender}',dateEventAgree='${dateEvent}',selfPR='${selfPR}' WHERE member_id = ${id} `

        connection.query(sql,(error,rows)=>{
            if(error) throw error;
            res.json({msg:"회원정보수정성공",id:id})
        })
    },
    deleteUser: async (req, res) => {
        const {member_id} = req.body;
        console.log(member_id)
        const sql = `DELETE FROM member WHERE member_id = ${member_id}`
        connection.query(sql, (error, rows) => {
            if (error) throw error;
            res.json({msg: "회원탈퇴 완료"})
        })

    },
    getUserDetail: (req, res) => {
        const {memberId} = req.body;
        const sql = `SELECT * FROM member WHERE member_id = ${memberId}`

        connection.query(sql, (error, rows) => {
            if (error) throw error;
            res.send(rows);
        })
    }
};