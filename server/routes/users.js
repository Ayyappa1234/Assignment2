/*
File Name: users.js
Name: Ayyappa Dhulipalla
Id: 301238302
Date: 2nd October 2022
*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
