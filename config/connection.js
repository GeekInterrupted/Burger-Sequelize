//call for sequelize
var Sequelize = require("sequelize");

//create mySQL connection using Sequelize
var sequelize = new Sequelize('takoloko_db', 'm3mljqs6i6omozbl', '', {
    host: 's54ham9zz83czkff.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});



//exporting connection to be available for other files
module.exports = sequelize;