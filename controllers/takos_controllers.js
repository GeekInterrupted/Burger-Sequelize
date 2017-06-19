var express = require("express");

var router = express.Router();

var models = require("../models");

var sequelizeConnection = models.sequelize;

sequelizeConnection.sync();


//create the routes
router.get("/", function(req, res) {
    res.redirect("/index");
});

//redirect to index page
router.get("/index", function(req, res) {

    models.Tako.findAll({

    }).then(function(data) {
        var hbsObject = { takos: data };
        console.log(data);
        res.render("index", hbsObject);
    })
});

//create a new tako
router.post("/tako/create/", function(req, res) {
    models.Tako.create({
        tako_name: req.body.tako_name,
        devoured: false
    }).then(function() {
        res.redirect("/index");
    });
});

//Devour a taco
router.post('/tako/eat/:id', function(req, res) {

    // If not name was added, make it "Anonymous"
    if (req.body.customer_name == "" || req.body.customer_name == null) {
        req.body.customer_name = "Anonymous";
    }

    //Create a new customer, associate it to the eaten taco's id)
    models.Customer.create({
        customer_name: req.body.customer_name,
        takoId: req.params.id
    })

    //Then, select the eaten taco by it's id
    .then(function(newCustomer) {
        models.Tako.findOne({ where: { id: req.params.id } })

        //Then, use the returned taco object to
        .then(function(eatenTako) {
            //Update the taco's status to devoured
            eatenTako.update({
                devoured: true,
            })

            //Then, the taco is devoured, go back to index
            .then(function() {
                res.redirect('/index');
            });

        });

    });

});






module.exports = router;