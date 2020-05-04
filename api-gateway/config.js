/*
============================================
; Title:  config.js
; Author: Professor Krasso
; Date:   03 May 2020
; Modified By: Janet Blohn
; Description: Configuration Program
; This is the global hub for application level configurations
============================================
*/

// Import blohn-header.js file
const header = require('../blohn-header');

// Print the Header
console.log(header.display("Janet", "Blohn", "Configuration Program"));

// Create the initial configuration requirements

var config = {};
config.web = {};
config.web.port = process.env.PORT || '3000';
module.exports = config;
