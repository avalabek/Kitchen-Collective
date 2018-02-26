module.exports = function (app, db){
  //GET all hosts
  app.get ("/hosts", function (req,res){
    db.hosts.findAll()
    .then(function(hosts){
      res.json(hosts);
    });
  });
//GET host by event
  app.get("/hosts:event", function(req, res) {
    var event = req.params.id;
    db.host
      .find({
        where: { event: event }
      })
      .then(function(event) {
        res.json(event);
      });
  });

  //POST one host so when host is posted
  //event also needs to be posted. 
  app.post("/host", function(req, res) {
    var name = req.body.name;
    var event = req.body.event;
    var address = req.body.address;
    var phone = req.body.phone;
    var email = req.body.email;
    
    db.hosts
      .create({
        //verify that these are in db
        name: name,
        event: event,
        address: address,
        phone: phone,
        email: email
      })
      .then(function(newHost) {
        res.json(newHost);
      });
  });
  
  
  }//end module.exports