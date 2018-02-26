var path = require("path");

//TODO CHECK that these paths work, or is it just the ones in html files

module.exports = function(app){
  //index route loads index.html
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //about route loads about.html page
  app.get("/about", function(req,res){
    res.sendFile(path.join(__dirname, "../public/about.html"));
  });
  //host route loads about.html page
  app.get("/host", function(req,res){
    res.sendFile(path.join(__dirname, "../public/host.html"));
  });
   
};//end module.exports