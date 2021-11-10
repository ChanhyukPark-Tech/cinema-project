const connection = require("../dbConfig");

module.exports = {
    create: (data, callBack) => {
        connection.query(
            `insert into member(Nm,email,pin,sex,age,phoneNm,dateEventAgree,selfPR) values(?,?,?,?,?,?,?);
`,
            [
                data.name,
                data.email,
                data.password,
                data.gender,
                data.age,
                data.phoneNm,
                data.dateEvent,
                data.selfPR,
            ],
            (error, results, rows) => {
                if (error) {
                    callBack(error);
                    console.log(error)
                }
                return callBack(null, rows);
            }
        );
    },
    getUserByUserEmail: (email, callBack) => {
        connection.query(
            `select * from member where email = ?`,
            [email],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUserByUserId: (id, callBack) => {
        connection.query(
            `select name,email from user where id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    getUsers: callBack => {
        connection.query(
            `select name,email,gender from user`,
            [],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updateUser: (data, callBack) => {
        connection.query(
            `update user set firstName=?, lastName=?, gender=?, email=?, password=?, number=? where id = ?`,
            [
                data.first_name,
                data.last_name,
                data.gender,
                data.email,
                data.password,
                data.number,
                data.id
            ],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    },
    deleteUser: (data, callBack) => {
        connection.query(
            `delete from user where id = ?`,
            [data.id],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results[0]);
            }
        );
    }
};