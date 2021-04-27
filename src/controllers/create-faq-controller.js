const { connectionDb } = require('../db/db');

function createFaqController(req, res, next) {
    try {
        const { titulo, texto } = req.body;
        const conn = connectionDb()
        conn.query("INSERT INTO faqs (titulo, texto) VALUES ?", [titulo, texto], (err, results) => {
            if (err) throw err;
            console.log("Number of records inserted: " + results.affectedRows);
        })
    } catch (error) {
        console.log(error)
    }
}


module.exports = { createFaqController }
