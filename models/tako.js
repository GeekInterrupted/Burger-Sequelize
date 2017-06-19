"use strict";

module.exports = function(sequelize, DataTypes) {
    var Tako = sequelize.define("Tako", {
        tako_name: DataTypes.STRING,
        devoured: DataTypes.BOOLEAN,
        customerId: DataTypes.INTEGER

    }, {
        classMethods: {
            associate: function(models) {
                Tako.hasOne(models.customer)
            }
        }
    });
    return Tako;
};