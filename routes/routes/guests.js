module.exports = function(app, db) {
  //GET all guests
  app.get("/guests", function(req, res) {
    db.guests.findAll().then(function(hosts) {
      res.json(hosts);
    });
  });

  //GET guests by event
  app.get("/guests", function(req,res){
    var event = req.params.id;
    db.guests.find({
      where: {event: event}
    })
    .then(function(guests){
    res.json(guests);
  });
});

//POST guests 
app.post("/guests", function(req,res){
  var name = req.body.name;
  var event = req.body.event;
  var email = req.body.email;
  var phone = req.body.phone;

  db.guests.create({
    //verify that these are in db
    name: name,
    event: event,
    email: email,
    phone: phone
  })
  .then(function(newGuest){
    res.json(newGuest);
  })
});
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