var Post = require('./postModel');

module.exports = {

	addPost: function(req, res, next) {
		var title = req.body.title;
		var comment = req.body.comment;
		var tags = req.body.tags;
		tags = tags.replace(/ /g,'').split(",");
		Post.create({title: title, comment: comment, tags: tags}, function (err, post) {
			if (err) {
				res.send(400);
			} else {
				res.send(200);
			}
		});
	},

	getPosts: function(req, res, next) {
		var criteria = req.body.criteria;
		criteria = criteria.replace(/ /g,'').split(",");
		Post.find({tags: { $all: criteria} }).exec(function (err, data) {
			if (err) {
				res.send(400);
			} else {
				res.send(data);
			}
		})
	}

};