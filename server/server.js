var express = require('express');
var db = require('./db');

var app = express();

// configure our server with all the middleware and routin
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// start listening to requests on port 8000
var port = 8000;
app.listen(port, function() {
  console.log(`Listening on port ${port}...`);
});

// export our app for testing and flexibility, required by index.js
module.exports = app;
