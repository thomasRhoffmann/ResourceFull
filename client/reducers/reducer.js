import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';


const SignUp = (state = {}, action) => {
  switch(action.type) {
    case 'SIGN_UP':
      return action.user;
    default:
      return state;
  }
};

const AppReducer = combineReducers({
  currentUser: SignUp,
  routing: routerReducer
});

export default AppReducer;
