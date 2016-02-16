var express = require('express');
var mongoose = require('mongoose');

var app = express();
app.use(express.static(__dirname + '/client/'))

// connect to mongo database named "shortly"
mongoose.connect('mongodb://localhost/further-reading');

// configure our server with all the middleware and routing
// require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// start listening to requests on port 8000
app.listen(8080);

// export our app for testing and flexibility, required by index.js
module.exports = app;
