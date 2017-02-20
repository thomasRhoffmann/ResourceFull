var db = require('../db');
var bcrypt = require('bcrypt');
var utils = require('../utils/utilities');

module.exports = {

  signup: function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    db.User.findOne({where: {username: username}})
    .then(function(user) {
      if (user) {
        res.send(JSON.stringify({error: 'username signup'}));
        return;
      }
      bcrypt.hash(password, 10, function(err, hash) {
        if (err) {
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
          res.sendStatus(500);
        });
      });
    })
    .catch(function(err) {
      res.sendStatus(500);
    });    
  },

  signin: function(req, res, next) {
    var username = req.body.username;
    var password = req.body.password;

    db.User.findOne({where: {username: username}})
    .then(function(user) {
      if (!user) {
        res.send(JSON.stringify({error: 'username signin'}));
        return;
      }
      bcrypt.compare(password, user.password, function(err, match) {
        if (err) {
          throw err;
          res.sendStatus(500);
          return;
        }
        if (!match) {
          res.send(JSON.stringify({error: 'password'}));
          return;
        } else {
          utils.createSession(req, res, user);
        }
      });
    })
    .catch(function(err) {
      throw err;
      res.sendStatus(500);
    });
  },


};

















