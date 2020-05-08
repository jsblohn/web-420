/*
============================================
; Title:  api-catalog.js
; Author: Professor Krasso
; Date:   07 May 2020
; Modified By: Janet Blohn
; Last Modified Date: N/A
; Description: API-Catalog program for API-Gateway Project
============================================
*/

// Import blohn-header.js file
const header = require("../../blohn-header");

// Print the Header
console.log(header.display("Janet", "Blohn", "Assignment 2.3, API-Catalog Program"));

/*
* API Routes
*/
var express = require("express");
var router = express.Router();
var auth_controller = require("../controllers/authController");

//POST request for registering a user
router.post("/auth/register", auth_controller.user_register);

// GET request for verifying user tokens
router.get("/auth/token", auth_controller.user_token);

module.exports = router;
