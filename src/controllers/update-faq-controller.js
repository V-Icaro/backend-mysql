const { connection } = require('../db/db');

async function updateFaqController(req, res, next) {
    try {
        const id = req.params.id;
        const { titulo, conteudo } = req.body
        console.log(id)
        const conn = await connection
        conn.query("UPDATE faqs SET titulo=?, conteudo=? WHERE id=?", [titulo, conteudo, id], (err, results) => {
            if (err) throw err;
            console.log("Number of records inserted: " + results.affectedRows);
            console.log(err)

            res.status(200).json({
                message: "Atualizado com sucesso",
                titulo: titulo,
                conteudo: conteudo
            })
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "algo deu errado"
        })
    }
}


module.exports = { updateFaqController }
