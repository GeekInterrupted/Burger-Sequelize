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