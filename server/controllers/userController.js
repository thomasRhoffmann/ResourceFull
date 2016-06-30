var db = require('../db');
var bcrypt = require('bcrypt');

module.exports = {

  signup: function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    db.User.findOne({where: {username: req.body.username}})
    .then(function(user) {
      if (user) {
        next(new Error('Username already exists!'));
        res.status(200);
      }
      bcrypt.hash(req.body.password, 10, function(err, hash) {
        if (err) {
          throw err;
        }
        db.User.create({
          username: req.body.username,
          password: hash
        })
        .then(function(user) {
          console.log('User created successfully');
          res.status(201);
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