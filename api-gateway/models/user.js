/*
============================================
; Title:  user.js
; Author: Professor Krasso
; Date:   07 May 2020
; Modified By: Janet Blohn
; Last Modified Date: N/A
; Description: User program for API-Gateway Project
============================================
*/

// Import blohn-header.js file
const header = require("../../blohn-header");

// Print the Header
console.log(header.display("Janet", "Blohn", "Assignment 2.3, User Program"));

// Create the variables
var mongoose = require("mongoose");

// Create the Schema for the Mongoose database with 3 fields: username, password, and email
var userSchema = new mongoose.Schema ({
  username: String,
  password: String,
  email: String
});

module.exports = mongoose.model("User", userSchema);

/**
* Database queries
 */
