const connection = require('../dbConfig')
const nodemailer = require("nodemailer");
const fs = require("fs");
const data = fs.readFileSync('./mailConfig.json');
const conf = JSON.parse(data);

const utilCtrl = {
    getPlaces: async (req, res) => {
        connection.query(`SELECT * FROM place`, (error, rows) => {
            if (error) throw error;
            res.send(rows);
        })
    },

    getDivisons: async (req, res) => {
        connection.query(`SELECT * FROM cinemaDivison`, (error, rows) => {
            if (error) throw error;
            res.send(rows);
        })
    },
    getPlace: async (req, res) => {
        const {DetailDivisionCode} = req.body;
        const sql = `SELECT * FROM place WHERE DetailDivisionCode = '${DetailDivisionCode}' `

        connection.query(sql,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    },
    getSpecifyPlace : async (req,res) => {
        const {CinemaID} = req.body;
        const sql = `SELECT * FROM place WHERE CinemaID = ${CinemaID} `

        connection.query(sql,(error,rows)=>{
            if(error) throw error;
            res.send(rows);
        })
    },
    sendPost : async (req,res) => {

        let data = req.body;
        let smtpTransport = nodemailer.createTransport({
            service: 'Gmail',
            port: 465,
            auth: {
                user: conf.email,
                pass: conf.password
            }
        })

        let mailOptions = {
            // nodemailer
            from: data.email,
            to: 'pgg6713@gmail.com',
            subject: data.subject,
            html: `
            <h3>Informations</h3>
            <ul>    
            <li>Name: ${data.name}</li>
            <li>email: ${data.email}</li>
            </ul>
            
            <h3>Message</h3>
            <p>${data.message}</p>
        `
        };
        smtpTransport.sendMail(mailOptions, (err, response) => {
            if (err) {
                res.send(err)
                console.log(err)
                console.log("실패")
            } else {
                res.send('Success')
                console.log("성공")
            }
        })

        smtpTransport.close();
    }
}
module.exports = utilCtrl