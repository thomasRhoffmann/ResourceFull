var User = require('./userModel');

module.exports = {

	signup: function(req, res, next) {
		var username = req.body.username;
    var password = req.body.password;

    User.find({username: username}).exec( function(err, found) {
    	if (err) {
    		res.send(400);
    	} else if (found.length !== 0) {
        console.log(found.length);
    		next (new Error('User already exists!'));
    	} else {
    		User.create({username: username, password: password}, function (err, user) {
    			if (err) {
    				res.send(400);
    			} else {
    				res.send(200);
    			}
    		});
    	}
    })     
	}

}