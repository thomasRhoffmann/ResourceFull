import {combineReducers} from 'redux';
import ActionConstants from '../../platform/react_action_constants';

const user = (state = {}, action) => {
    switch(action.type) {
    case ActionConstants.SIGN_IN_SUCCEEDED:
    case ActionConstants.SIGN_UP_SUCCEEDED:
        return action.payload;
    }

    return state;
};

const accessError = (state = null, action) => {
    switch(action.type) {
    case ActionConstants.SIGN_IN_REJECTED:
    case ActionConstants.SIGN_UP_REJECTED:
    	return action.reject;
    case ActionConstants.SIGN_IN_FAILED:
    case ActionConstants.SIGN_UP_FAILED:
        return action.error;
    }

    return state;
};

const auth = combineReducers({
	user,
	accessError
});

export const selectors = state => ({
	getUser: () => state.user,
	getAccessError: () => state.accessError
});

export default auth;