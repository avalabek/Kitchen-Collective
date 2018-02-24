module.exports = function (app, db){
  //GET all hosts
  app.get ("/hosts", function (req,res){
    db.hosts.findAll()
    .then(function(hosts){
      res.json(hosts);
    });
  });

  //GET one host by event
  
}