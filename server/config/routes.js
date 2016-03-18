var postController = require('../controllers/postController.js');
var userController = require('../controllers/userController.js');
var passport = require('./authentication.js').passport;

module.exports = function (app, express) {
  app.post('/post', postController.addPost);
  // app.post('/search', postController.getPosts);

  app.post('/signup', userController.signup);
  app.post('/signin', passport.authenticate('local'), userController.signin);
};
