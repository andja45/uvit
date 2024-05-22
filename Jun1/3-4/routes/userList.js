const express = require('express');

const router = express.Router();

const userListController = require('../controllers/userList');

router.get('/userList', userListController.prikazPocetne); 
router.post('/starost', userListController.filtrirajStarost);

module.exports = router;
