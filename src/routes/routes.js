const { Router } = require('express');
const { createFaqController } = require('../controllers/create-faq-controller');
const router = Router();

router.get('/', (req, res) => {
    res.send('teste 2');
})

router.post('/create', createFaqController)

module.exports = { router }