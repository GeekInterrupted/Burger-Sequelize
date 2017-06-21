//call for sequelize
var Sequelize = require("sequelize");

//create mySQL connection using Sequelize
var sequelize = new Sequelize('takoloko_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});



//exporting connection to be available for other files
module.exports = sequelize;