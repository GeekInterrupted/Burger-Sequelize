// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

    app.get("/", function(req, res) {
        db.Tako.findAll({
            raw: true
        }).then(function(dbTako) {
            var hbsObject = {
                takos: dbTako
            }
            console.log(hbsObject);
            res.render('index', hbsObject)
        });
    });
};