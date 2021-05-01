const { connection } = require('../db/db');

async function deleteFaqController(req, res, next) {
    try {
        const id = req.params.id;
        const conn = await connection
        conn.query("DELETE from faqs WHERE id=?", id, (err, results) => {
            if (err) throw err;
            console.log("Number of records inserted: " + results.affectedRows);
            console.log(err)

            res.status(200).json({
                message: "Deletado com sucesso",
            })
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: "algo deu errado"
        })
    }
}


module.exports = { deleteFaqController }
