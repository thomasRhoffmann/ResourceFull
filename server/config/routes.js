var postController = require('../controllers/postController.js');
var userController = require('../controllers/userController.js');
var path = require('path');

module.exports = function (app, express) {

  app.get('*', function (request, response){
    response.sendFile(path.resolve('public', 'index.html'));
  });
  
  // app.post('/post', postController.addPost);
  // app.post('/search', postController.getPosts);

  app.post('/sign_up', userController.signup);
  app.post('/sign_in', userController.signin);
};