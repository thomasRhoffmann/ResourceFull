var User = require('./userModel');
var jwt = require('jwt-simple');

module.exports = {

	signup: function(req, res, next) {
		var username = req.body.username;
    var password = req.body.password;

    User.find({username: username}).exec( function(err, found) {
    	if (err) {
    		res.send(400);
    	} else if (found.length !== 0) {
    		next (new Error('User already exists!'));
    	} else {
    		User.create({username: username, password: password}, function (err, user) {
    			if (err) {
    				res.send(400);
    			} else {
  				  var token = jwt.encode(user, 'secretcode');
            res.json({token: token});
    			}
    		});
    	}
    })     
	},

  signin: function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    User.find({username: username}).exec( function(err, user) {
      if (err) {
        res.send(400);
      } else if (!user) {
        next (new Error('Unknown username!'));
      } else {
        if (user[0].password === password) {
          var token = jwt.encode(user, 'secretcode');
          res.json({token: token});
        } else {
          next (new Error('Incorrect password!'));
        }
      }
    })
  }

}