const { connectionDb } = require('../db/db');

async function getFaqController(req, res, next) {
    console.log('entrou get')
    try {
        const { id } = req.params;
        const conn = await connectionDb()

        console.log(id)
        conn.query("SELECT * FROM faqs WHERE id = ?", id, (err, results) => {
            if (err) throw err;
            res.status(200).json({
                dados: results[0]
            })
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "algo deu errado"
        })
    }
}


module.exports = { getFaqController }
