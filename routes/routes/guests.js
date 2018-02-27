// var db = require("../models");

module.exports = function(app, db) {
  //GET all guests
  app.get("/api/guests", function(req, res) {
    db.Guests.findAll().then(function(guests) {
      res.json(guests);
    });
  });

  //GET guests by event
  app.get("/api/guests/:event", function(req,res){
    
    db.Guests.find({
      where: {
        event: req.params.event
      }
    }).then(function(guests){
    res.json(guests);
  });
});
  app.post("/api/guests", function (req, res) {
    db.Guests.create(req.body).then(function (guests) {
      res.json(guests);
    });
  });
//POST guests not sure if this is correct or above
// app.post("/api/guests", function(req,res){
//   var name = req.body.name;
//   var event = req.body.event;
//   var email = req.body.email;
//   var phone = req.body.phone;

//   db.Guests.create({
//     //verify that these are in db
//     name: name,
//     event: event,
//     email: email,
//     phone: phone
//   })
//   .then(function(newGuest){
//     res.json(newGuest);
//   })
// });
//DELETE single guest
app.delete("/guest/:id", function(req,res){
  var id= req.params.id;

  db.guests.destroy({
    where: {id: id}
  })
  .then(function(deletedGuest){
    res.json(deletedGuest);
  });
});
//when a new guest is posted, number must also be taken from event maximum
};//end module.exports