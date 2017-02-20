import 'whatwg-fetch';
import {checkStatus} from '../../utilities';
import ActionsConstants from '../../../platform/react_action_constants';

export const signIn = ({user}) => {
    return dispatch => {
        const request = fetch('/sign_in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => {
            return checkStatus(res);
        })
        .then(res => {
            const payload = res.json();
            
            if (payload.reject) {
                return dispatch(signInRejected({payload}));
            }

            dispatch(signInSucceeded({payload}));
        })
        .catch(error => {
            dispatch(signInFailed({error}));
        });

        dispatch(signInRequested({user}));

        return request;
    };
};

export const signInRequested = ({user}) => ({
    type: ActionsConstants.SIGN_IN_REQUESTED,
    user // TODO: remove this info in prod
});

export const signInFailed = ({error}) => ({
    type: ActionsConstants.SIGN_IN_FAILED,
    error
});

export const signInRejected = ({payload}) => ({
    type: ActionsConstants.SIGN_IN_REJECTED,
    payload
});

export const signInSucceeded = ({payload}) => ({
    type: ActionsConstants.SIGN_IN_SUCCEEDED,
    payload
});
