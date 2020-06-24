/*
============================================
; Title:  check-token.js
; Author: Professor Krasso
; Date:   18 June 2020
; Modified By: Janet Blohn
; Last Modified Date: n/a
; Description: Program to check for a valid JSON web token
============================================
*/

// Import blohn-header.js file
const header = require("./blohn-header");

// Print the Header
console.log(header.display("Janet", "Blohn", "Check-Token Program"));

// Create the variables
var jwt = require('jsonwebtoken');
var config = require('./config');

/**
 * Check the HTTP header for a valid JSON web token
 * @param require
 * @param res
 * @param next
 */
function checkToken(req, res, next) {
  var token = req.headers['x-access-token'];

  if (!token)
    return res.status(403).send({auth: false, message: 'No token provided.'});

    jwt.verify(token, config.web.secret, function(err, decoded) {
      if (err) return res.status(500).send({auth: false, message: 'Failed to authenticate token.'});

      req.userId = decoded.id;
      next();
    });
}

module.exports = checkToken;
