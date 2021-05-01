const { Router } = require('express');
const { createFaqController } = require('../controllers/create-faq-controller');
const { deleteFaqController } = require('../controllers/delete-faq-controller');
const { getFaqController } = require('../controllers/get-faq-controller');
const { getallFaqController } = require('../controllers/getall-faq-controller');
const { updateFaqController } = require('../controllers/update-faq-controller');

const router = Router();

router.get('/:id', getFaqController)

router.post('/create', createFaqController)

router.post('/update/:id', updateFaqController)

router.delete('/delete/:id', deleteFaqController)

router.get('/', getallFaqController)

module.exports = { router }