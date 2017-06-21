//call for sequelize
var Sequelize = require("sequelize");

//create mySQL connection using Sequelize
var sequelize = new Sequelize('takos_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

//testing if the connection succeeds
sequelize
    .authenticate()
    .then(() => {
        console.log("We are good to go!");

    })
    .catch(err => {
        console.error("Unable to connect to db: ", err);
    });

//exporting connection to be available for other files
module.exports = sequelize;