var db = require('../db');

module.exports = {
  addPost: function(req, res, next) {
    var title = req.body.title;
    var description = req.body.description;
    var tags = req.body.tags;
    tags = tags.replace(/ /g,'').split(',');
    var tagModels = [];
    for (var i = 0; i < tags.length; i++) {
      tagModels.push({name: tags[i]});
    }
    db.Post.create({title: title, description: description})
		.then(function(post) {
      db.Tag.create(tagModels[0])
			.then(function(tag) {
        post.setTags([tag])
				.then(function() {
          res.status(201);
				});
			})
			.catch(function() {
        res.status(400);
			});
		})
		.catch(function() {
      res.status(400);
		});
  },

  getPosts: function(req, res, next) {
    var criteria = req.body.criteria;
    criteria = criteria.replace(/ /g,'').split(',');
    db.Post.findAll({tags: { $all: criteria} }).exec(function (err, data) {
      if (err) {
        res.status(400);
      } else {
        res.send(data);
      }
    });
  }

};