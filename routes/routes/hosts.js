var express = require("express");
var app = express.Router();
var db = require("../../models/hosts.js");

module.exports = function (app, db){

  app.get("/", function(req,res){
    db.Hosts.findAll()
    .then(function(data){
      var hosts = {
        hosts: data
      };
      console.log(hosts);
      res.render("index", hosts);
    });
  });
  
  //GET all hosts
  app.get ("/api/hosts", function (req,res){
    db.Hosts.findAll()
    .then(function(hosts){
      res.json(hosts);
    });
  });
//GET host by event
  // app.get("/hosts:event", function(req, res) {
  //   var event = req.params.id;
  //   db.host
  //     .find({
  //       where: { event: event }
  //     })
  //     .then(function(event) {
  //       res.json(event);
  //     });
  // });
//changed this to match input on page
  //POST one host so when host is posted
  //event also needs to be posted. 
  app.post("api/hosts", function(req, res) {
    db.Hosts.create({
      firstname: req.body.firstname,
       lastname: req.body.lastname,
      cuisine: req.body.cuisine,
       email: req.body.email,
      address: req.body.address,
      date: req.body.date,
      peoplecount: req.body.peoplecount

    }).then(function(result) {
        res.json(result);
        console.log("Your host: ", req.body.firstname);
      })
  });
  
  
  }//end module.exports