// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {


    app.get("/", function(req, res) {
        db.Tako.findAll({})
            .then(function(dbTako) {
                res.render("index", dbTako);
            });
    });

    // POST route for saving a new tako
    app.post("/", function(req, res) {

        db.Tako.create({
            tako_name: req.body.tako_name,
            customer: "Anonymous"
        }).then(function(result) {
            console.log(result);
            // Redirect client
            res.redirect("/");
        });
    });

    //DELETE route for deleting a tako 
    app.delete("/delete/:id", function(req, res) {

        // specify which tako to destroy with "where"
        db.Tako.destroy({
            where: {
                id: req.params.id
            }
        }).then(function() {
            // Redirect client
            res.redirect("/");
        });
    });

    // PUT route for updating a tako
    app.put("/:id", function(req, res) {

        //if a name was not added, make it "Anonymous Eater"
        if (req.body.customer == "" || req.body.customer == null) {
            req.body.customer = "Anonymous TakoEater";
        }
        db.Tako.update({
            devoured: true,
            customer: req.body.customer
        }, {
            where: {
                id: req.params.id
            }
        }).then(function() {
            // Redirect client
            res.redirect("/");
        });
    });
};