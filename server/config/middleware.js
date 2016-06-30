var bodyParser = require('body-parser');
var morgan = require('morgan');
var session = require('express-session');
var webpack = require('webpack');
var webpackConfig = require('../../webpack.config');
var compiler = webpack(webpackConfig);

module.exports = function (app, express) {

  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(morgan('dev'));
  app.use(express.static(__dirname + '/../../public'));
  app.use(session({ secret: 'suggested reading' }));
};