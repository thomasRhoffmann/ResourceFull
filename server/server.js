var express = require('express');
var db = require('./db');

var app = express();

require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// Start listening to requests on port 8000
var port = 8000;
app.listen(port, function() {
  console.log(`Listening on port ${port}...`);
});

module.exports = app;
