const { connectionDb } = require('../db/db');

async function createFaqController(req, res, next) {
    try {
        const { titulo, conteudo } = req.body;
        const conn = await connectionDb()
        conn.query("INSERT INTO faqs (titulo, conteudo) VALUES (?,?)", [titulo, conteudo], (err, results) => {
            if (err) throw err;
            console.log("Number of records inserted: " + results.affectedRows);

            res.status(200).json({
                message: "inserido com sucesso"
            })
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "algo deu errado"
        })
    }
}


module.exports = { createFaqController }
