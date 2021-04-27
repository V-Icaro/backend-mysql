const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
    res.send('teste 2');
})

module.exports = { router }