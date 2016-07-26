var db = require('../db');
var bcrypt = require('bcrypt');
var utils = require('../utils/utilities');

module.exports = {

  signup: function(req, res, next) {
    var username = req.body.user.username;
    var password = req.body.user.password;

    db.User.findOne({where: {username: username}})
    .then(function(user) {
      if (user) {
        new Error('Username already exists!');
        res.sendStatus(200);
        return;
      }
      bcrypt.hash(password, 10, function(err, hash) {
        if (err) {
          throw err;
          res.sendStatus(500);
          return;
        }
        db.User.create({
          username: username,
          password: hash
        })
        .then(function(user) {
          utils.createSession(req, res, user);
        })
        .catch(function(err) {
          throw err;
          res.sendStatus(500);
        });
      });
    })
    .catch(function(err) {
      throw err;
      res.sendStatus(500);
    });    
  },

  signin: function(req, res, next) {
    res.send('User signed in successfully!');
  }

};