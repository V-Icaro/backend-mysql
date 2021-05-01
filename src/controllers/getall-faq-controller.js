const { connection } = require('../db/db');

async function getallFaqController(req, res, next) {
    console.log('entrou get')
    try {
        const conn = await connection
        conn.query("SELECT * FROM faqs ", (err, results) => {
            if (err) throw err;
            res.status(200).json({
                dados: results
            })
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "algo deu errado"
        })
    }
}


module.exports = { getallFaqController }
