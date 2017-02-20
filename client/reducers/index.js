import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import authReducer, {selectors as authSelectors} from './auth';

const rootReducer = combineReducers({
    auth: authReducer,
    routing: routerReducer
});

export const selectors = state => ({
    authSelectors: () => authSelectors(state.auth)
});

export default rootReducer;