/* <!--Student name : Komatineni Apoorva(301231336),
Subject :COMP229-web application development
Date : 19 feb 2022 -->*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
