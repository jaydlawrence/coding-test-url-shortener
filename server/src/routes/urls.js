var express = require('express');
var router = express.Router();
const Controller = require('../services/urls/controller');

/* GET shortened URL record by ID */
router.get('/', Controller.get);

/* Create new shortened URL record. */
router.post('/', Controller.add);

module.exports = router;
