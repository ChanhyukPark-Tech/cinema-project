const connection = require('../dbConfig')

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
    }
}
module.exports = utilCtrl