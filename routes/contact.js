
const express = require('express');


const contactControllers = require('../controllers/contact_us')

const router = express.Router();

router.get('/contact',contactControllers.getContact)

router.post('/success',contactControllers.postSuccess)

module.exports = router; 