var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	title: {
    type: String,
    required: true,
    unique: true
  }
  comment: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('posts', UserSchema);
