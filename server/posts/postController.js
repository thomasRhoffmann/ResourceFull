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
	}

};