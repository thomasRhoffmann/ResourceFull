var express = require('express');
var db = require('./db');

var app = express();

// connect to mongo database named "shortly"

// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// start listening to requests on port 8000
var port = Number(process.env.PORT || 8000);
app.listen(port, function() {
  console.log(`Listening on port ${port}...`);
});

// export our app for testing and flexibility, required by index.js
module.exports = app;
