const { Router } = require('express');
const { createFaqController } = require('../controllers/create-faq-controller');
const { getFaqController } = require('../controllers/get-faq-controller');
const router = Router();

router.get('/:id', getFaqController)

router.post('/create', createFaqController)

module.exports = { router }