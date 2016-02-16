var postController = require('../posts/postController.js');
// var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, express) {
  app.post('/post', postController.addPost);

  // app.get('/api/links/', linksController.allLinks);
  // app.post('/api/links/', linksController.newLink);

};
