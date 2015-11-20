


var express = require('express'),
  app = express();



// serve the client
app.use(express.static(__dirname + '/build'));





// start server
var server = app.listen(process.env.PORT || 5000, function () {


  var host = server.address().address,
    port = server.address().port;
  console.log('server listening at http://%s:%s', host, port);
});