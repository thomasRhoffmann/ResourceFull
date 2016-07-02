import { combineReducers } from 'redux';


const SignUp = (state = {}, action) => {
  switch(action.type) {
    case 'SIGN_UP':
      return action.user;
    default:
      return state;
  }
};

const AppReducer = combineReducers({
  currentUser: SignUp
});

export default AppReducer;
