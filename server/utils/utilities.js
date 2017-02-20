var session = require('express-session');

module.exports = {
  createSession: function(req, res, user) {
    req.session.regenerate(function(err) {
      if (err) {
        res.sendStatus(500);
        return;
      }
      req.session.userId = user.username;
      // Return user information (excluding password) to client-side.
      var userInfo = JSON.stringify({username: user.username});
      res.send(userInfo);
    });
  }
};