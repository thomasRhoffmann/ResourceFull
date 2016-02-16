var postController = require('../posts/postController.js');
// var helpers = require('./helpers.js'); // our custom middleware

module.exports = function (app, express) {
  console.log(postController);
  app.post('/search', postController.addPost);

  // app.get('/api/links/', linksController.allLinks);
  // app.post('/api/links/', linksController.newLink);

};
