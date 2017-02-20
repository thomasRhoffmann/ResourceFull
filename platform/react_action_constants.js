var mirrorKeys = require('./utilities').mirrorKeys;

const ActionConstants = [
	// Sign Up
  	'SIGN_UP_REQUESTED',
  	'SIGN_UP_FAILED',
  	'SIGN_UP_REJECTED',
  	'SIGN_UP_SUCCEEDED',

  	// Sign In
  	'SIGN_IN_REQUESTED',
  	'SIGN_IN_FAILED',
  	'SIGN_IN_REJECTED',
  	'SIGN_IN_SUCCEEDED'
];

module.exports = mirrorKeys(ActionConstants);