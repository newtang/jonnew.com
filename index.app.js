var nconf = require("nconf"),
	express = require('express'),
	app = express();

nconf.env().file({file: ".env"});

var port = nconf.get("PORT");

app.get('*', function(req, res) {
  res.send('The impossible is possible at ' + req.get('host') + req.originalUrl  + "<br/><br/>Also, I have a <a href='http://blog.jonnew.com'>blog</a>.");
});

app.listen(port, function() {
  console.log("Listening on " + port);
});	