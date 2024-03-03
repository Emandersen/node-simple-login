var express = require('express');
var router = express.Router();
var database = require('../utils/database.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Test' });
});


module.exports = router;
