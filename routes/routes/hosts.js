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
//changed this to match input on page
  //POST one host so when host is posted
  //event also needs to be posted. 
  app.post("/host", function(req, res) {
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var cuisine = req.body.cuisine;
    var email = req.body.email;
    var address = req.body.address;
    var date = req.body.date;
    var peoplecount = req.body.peoplecount;
    
    
    db.hosts
      .create({
        //verify that these are in db
        firstname: firstname,
        lastname: lastname,
        cuisine: cuisine,
        email: email,
        address: address,
        date: date,
        peoplecount: peoplecount
      })
      .then(function(newHost) {
        res.json(newHost);
      });
  });
  
  
  }//end module.exports