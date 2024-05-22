const express = require('express');

const router = express.Router();

const deleteUserController = require('../controllers/userList');

router.post('/:id', deleteUserController.obrisiKorisnika);  // /:id PARAMETAR

module.exports = router;
