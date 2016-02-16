var Post = require('./postModel');

module.exports = {

	addPost: function(req, res, next) {
		var title = req.body.title;
		var comment = req.body.comment;
		Post.create({title: title, comment: comment}, function (err, post) {
			if (err) {
				res.send(400);
			} else {
				res.send(200);
			}
		});
	},

	getPosts: function(req, res, next) {
		var criteria = req.body.criteria;
		Post.find({title: criteria}).exec(function (err, data) {
			if (err) {
				res.send(400);
			} else {
				res.send(data);
			}
		})
	}

};