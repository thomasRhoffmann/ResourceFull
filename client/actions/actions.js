import 'whatwg-fetch';
import utility from '../utils/utilities';

// Action for sign in and sign up are identical, other than the path. The ultimate result is same for both: a user signs in.
// TODO: Figure out error handling.
export const account_access = (user) => {
  return fetch(user.path, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then((res) => {
    return utility.parseJSON(res);
  })
  .then((user) => {
    if (user.error) {
      return {
        type: 'ACCOUNT_ACCESS_ERROR',
        error: user.error
      };
    }
    return {
      type: 'SIGN_IN',
      user: user
    };
  })
  .catch((err) => {
    throw err;
    return;
  });
};
