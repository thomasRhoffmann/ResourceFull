var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');
var session = require('express-session');

module.exports = function (app, express) {
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../../client'));
  app.use(session({ secret: 'galvanized fern' }));
};