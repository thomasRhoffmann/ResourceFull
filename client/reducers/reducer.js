import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


const signIn = (state = {}, action) => {
  switch(action.type) {
    case 'SIGN_IN':
      return action.user;
    default:
      return state;
  }
};

const accountAccessError = (state = {}, action) => {
  switch(action.type) {
    case 'ACCOUNT_ACCESS_ERROR':
      return action.error;
    default:
      return state;
  }
};

const AppReducer = combineReducers({
  currentUser: signIn,
  accountAccessError: accountAccessError,

  routing: routerReducer
});

export default AppReducer;
