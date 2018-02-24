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

//POST guests would we need this?
app.post("/guests", function(req,res){
  var name = req.body.name;
  var event = req.body.event;
  db.guests.create({
    //verify that these are in db
    name: name,
    event: event
  })
  .then(function(newGuest){
    res.json(newGuest);
  })
});

};//end module.exports