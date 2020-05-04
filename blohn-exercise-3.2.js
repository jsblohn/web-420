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
console.log(header.display("Janet", "Blohn", "Exercise 3.2"));

// Create the Postgres function class
function Postgres(properties) {
  this.username = properties.username || "admin";
  this.password = properties.password || "s3cret";
  this.server = properties.server || "localhost:5432";
}

// Create the MySql function class
function MySql(properties) {
  this.username = properties.username || "ca-admin";
  this.password = properties.password || "ca-s3cret";
  this.server = properties.server || "localhost:8000";
  this.version = properties.version || 5.7;
}

// Create the Oracle function class.
function Oracle(properties) {
  this.username = properties.username || "maintain";
  this.password = properties.password || "my5tery";
  this.server = properties.server || "localhost:5050";
  this.version = properties.version || "19c";
}

// Create the Informix function class.
function Informix(properties) {
  this.username = properties.username || "ibm-maintain";
  this.password = properties.password || "ibm-my5tery";
  this.server = properties.server || "localhost:3030";
}

// Call the DatabaseFactory Class.
function DatabaseFactory() {}

// Create the Database based on the Database type.
DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
  if (properties.databaseType === "Postgres") {
    this.databaseClass = Postgres;
  }
  if (properties.databaseType === "MySql") {
    this.databaseClass = MySql;
  }
  if (properties.databaseType === "Oracle") {
    this.databaseClass = Oracle;
  }
  if (properties.databaseType === "Informix") {
    this.databaseClass = Informix;
  }

  return new this.databaseClass(properties);
};

// Create the Postgres Factory.
var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
  databaseType: "Postgres",
  username: "admin",
  password: "SuperSecret"
});

// Create the MySql Factory.
var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
  databaseType: "MySQL",
  username: "default",
  password: "password"
});

// Create the Oracle Factory.
var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
  databaseType: "Oracle",
  username: "maintain",
  password: "mySecret"
});

// Create the Informix Factory.
var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
  databaseType: "Informix",
  username: "maintainIfx",
  password: "mySecret2"
});

// Output the Oracle Database
console.log("Oracle {");
for (let [key, value] of Object.entries(oracle)) {
  console.log(key + ": " + value);
}
console.log("}\n");

// Output the Informix Database
console.log("Informix {");
for (let [key, value] of Object.entries(informix)) {
  console.log(key + ": " + value);
}
console.log("}");
