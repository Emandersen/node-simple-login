var express = require('express');
var router = express.Router();
var database = require('../utils/database.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hello World!')
  database.connectToDatabase().then((db) => {
    database.pingDatabase().then((result) => {
      console.log(result);
    }).catch((err) => {
      console.log(err);
    });
  });
});

module.exports = router;
