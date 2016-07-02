import 'whatwg-fetch';
import utility from '../utils/utilities';

export const sign_up = (user) => {
  return fetch('/signup', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: user
    })
  })
  .then(utility.checkStatus)
  .then(utility.parseJSON)
  .then((user) => {
    console.log(user);
    return {
      type: 'SIGN_UP',
      user: user
    };
  })
  .catch((err) => {
    throw err;
    return;
  });
};