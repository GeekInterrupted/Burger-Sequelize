"use strict";

module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customer_name: DataTypes.STRING,
        takoId: DataTypes.INTEGER


    }, {
        classMethods: {
            associate: function(models) {
                Customer.hasMany(models.Tako);
            }
        }
    });
    return Customer;
};