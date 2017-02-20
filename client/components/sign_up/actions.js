import 'whatwg-fetch';
import {checkStatus} from '../../utilities';
import ActionsConstants from '../../../platform/react_action_constants';

export const signUp = ({user}) => {
    return dispatch => {
        const request = fetch('/sign_up', {
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
                return dispatch(signUpRejected({payload}));
            }

            dispatch(signUpSucceeded({payload}));
        })
        .catch(error => {
            dispatch(signUpFailed({error}));
        });

        dispatch(signUpRequested({user}));

        return request;
    };
};

export const signUpRequested = ({user}) => ({
    type: ActionsConstants.SIGN_UP_REQUESTED,
    user // TODO: remove this info in prod
});

export const signUpFailed = ({error}) => ({
    type: ActionsConstants.SIGN_UP_FAILED,
    error
});

export const signUpRejected = ({payload}) => ({
    type: ActionsConstants.SIGN_UP_REJECTED,
    payload
});

export const signUpSucceeded = ({payload}) => ({
    type: ActionsConstants.SIGN_UP_SUCCEEDED,
    payload
});
