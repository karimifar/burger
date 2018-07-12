var burgers = require("../models/burger");
var express = require("express");

var router = express.Router();
router.get("/", function(req,res){
    burgers.all(function(data){
        var hbsObject = {
            burgers: data
        }
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res){
    console.log(req.body.name, req.body.devoured)
    burgers.add(["burgerName", "devoured"],[req.body.name, req.body.devoured], function(result){
        res.json(result.insertId)
    })
})

router.put("/api/burgers/:id", function(req, res){
    var condition = "id="+req.params.id;
    burgers.update({
        devoured: req.body.devoured
        }, condition,
        function(result){
        res.json(result)
    })
})


module.exports = router;