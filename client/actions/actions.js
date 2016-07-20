import 'whatwg-fetch';
import utility from '../utils/utilities';

export const sign_up_async = (user) => {
  return(dispatch) => {
    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: user
      })
    })
    .then((res) => {
      console.log('made it here');
      return utility.parseJSON(res);
    })
    .then((user) => {
      dispatch(sign_up(user));
    })
    .catch((err) => {
      throw err;
      return;
    });
  };
};

export const sign_up = (user) => {
  return {
    type: 'SIGN_UP',
    user: user
  };
};