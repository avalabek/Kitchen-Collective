// var db = require("../models");

module.exports = function (app, db) {
  //GET all events
  app.get("/", function (req, res) {
    db.Events.findAll()
      .then(function (data) {
        var events = {
          events: data
        };
        console.log(events);
        res.render("index", events);
      });
  });


  app.get("/api/events", function (req, res) {

    db.Events.findAll()
      .then(function (events) {
        res.json(events);
        console.log("and again...", events);
      });
  });


  app.post("/api/events", function (req, res) {
    db.Events.create({
      //now here we want the data to come from db, not req.body
      event: req.body.cuisine,
      cuisine: req.body.last_name,
      date: req.body.email,
      time: req.body.phone
      number: req.body.number
    }).then(function (result) {
      res.json(result);
      console.log("New event: ", req.body.cuisine);
    })
  });
} //end module.exports
//POST events not sure if