module.exports = function(app, db) {
  //GET all events
  app.get("/events", function(req, res) {
    db.guests.findAll().then(function(events) {
      res.json(events);
    });
  });

  //GET event by date
  app.get("/events", function(req, res) {
    var date = req.params.id;
    db.host
      .find({
        where: { date: date }
      })
      .then(function(event) {
        res.json(event);
      });
  });

  //POST events
  app.post("/events", function(req, res) {
    var name = req.body.name;
    var event = req.body.event;
    db.guests
      .create({
        //verify that these are in db
        name: name,
        event: event
      })
      .then(function(newGuest) {
        res.json(newGuest);
      });
  });
}; //end module.exports
