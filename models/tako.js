"use strict";
var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
    var Tako = sequelize.define("Tako", {
        tako_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN,
        customer: DataTypes.STRING
    });
    return Tako;
};