var express = require('express');
var router = express.Router();
const { index, getUsers } = require('./controller');

router.get('', index);
router.get('/users', getUsers);

module.exports = router;
