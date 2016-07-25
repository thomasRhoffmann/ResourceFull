var db = require('../db');
var bcrypt = require('bcrypt');
var session = require('express-session');

module.exports = {

  signup: function(req, res, next) {
    var username = req.body.user.username;
    var password = req.body.user.password;

    db.User.findOne({where: {username: username}})
    .then(function(user) {
      if (user) {
        next(new Error('Username already exists!'));
        res.status(200);
      }
      bcrypt.hash(password, 10, function(err, hash) {
        if (err) {
          throw err;
          res.status(500);
        }
        db.User.create({
          username: username,
          password: hash
        })
        .then(function(user) {
          console.log('User created successfully');
          req.session.regenerate(function(err) {
            if (err) {
              throw err;
              res.status(500);
            }
            req.session.userId = user.username;
            // Return user information (excluding password) to client-side.
            var userInfo = JSON.stringify({username: user.username});
            res.send(200, userInfo);
          });
        })
        .catch(function(err) {
          throw err;
          res.status(500);
        });
      });
    })
    .catch(function(err) {
      throw err;
      res.status(500);
    });    
  },

  signin: function(req, res, next) {
    res.send('User signed in successfully!');
  }

};