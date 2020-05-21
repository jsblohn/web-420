/*
============================================
; Title:  index.js
; Author: Professor Krasso
; Date:   03 May 2020
; Modified By: Janet Blohn
; Last Modified Date: N/A
; Description: Index JavaScript Program for API-Gateway Project
============================================
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
