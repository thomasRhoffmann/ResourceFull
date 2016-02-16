var postController = require('../posts/postController.js');
var userController = require('../users/userController.js');
// var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, express) {
  app.post('/post', postController.addPost);
  app.post('/search', postController.getPosts);

  app.post('/signup', userController.signup);
  app.post('/signin', userController.signin);
};
