/*
============================================
; Title:  authController.js
; Author: Professor Krasso
; Date:   07 May 2020
; Modified By: Janet Blohn
; Last Modified Date: N/A
; Description: Controller program for API-Gateway Project
============================================
*/

// Import blohn-header.js file
const header = require("../../blohn-header");

// Print the Header
console.log(header.display("Janet", "Blohn", "Assignment 2.3, Auth Controller Program"));

// Create the variables
var User = require("../models/user");

// Register a new user on POST
exports.user_register = function(req, res) {
  res.send("NOT IMPLEMENTED: User registration POST");
};

// Verify token on GET
exports.user_token = function(req, res) {
  res.send("NOT IMPLEMENTED: User token lookup GET");
};
