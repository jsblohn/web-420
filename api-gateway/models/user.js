/*
============================================
; Title:  user.js
; Author: Professor Krasso
; Date:   07 May 2020
; Modified By: Janet Blohn
; Last Modified Date: 21 May 2020
; Description: User program for API-Gateway Project
============================================
*/

// Import blohn-header.js file
const header = require("../../blohn-header");

// Print the Header
console.log(header.display("Janet", "Blohn", "User Program"));

// Create the variables
var mongoose = require("mongoose");

// Create the Schema for the Mongoose database with 3 fields: username, password, and email
var userSchema = new mongoose.Schema ({
  username: String,
  password: String,
  email: String
});

const User = module.exports = mongoose.model("User", userSchema);

// Add a new user to the database. user.save will add it to the database.
module.exports.add = (user, callback) => {
  user.save(callback);
};

// Query to find user by id
module.exports.getById = (id, callback) => {
  var query = {_id: id};
  User.findById(query, callback);
};

/**
* Database queries
 */
