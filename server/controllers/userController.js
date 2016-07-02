var db = require('../db');
var bcrypt = require('bcrypt');

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
        }
        db.User.create({
          username: username,
          password: hash
        })
        .then(function(user) {
          console.log('User created successfully');
          res.sendStatus(201);
        })
        .catch(function(err) {
          throw err;
        });
      });
    })
    .catch(function(err) {
      throw err;
    });    
  },

  signin: function(req, res, next) {
    res.send('User signed in successfully!');
  }

};