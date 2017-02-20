import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signIn } from './actions';

const SignIn = React.createClass({
    PropTypes: {
        handleSignIn: PropTypes.func
    },

    onSignIn() {
        const {handleSignIn} = this.props;
        const user = {
            username: this.refs.username.value,
            password: this.refs.password.value
        };

        handleSignIn(user);
    },

    render() {
        return (
            <div className='signin-container'>
                <h1 className='signin-header'>Sign In</h1>
                <form className="signin-form">
                    <input className='signin-username' placeholder='username' ref='username' type='text' />
                    <input className='signin-password' placeholder='password' ref='password' type='password' />
                    <button type='button' onClick={this.onSignIn}>Sign In</button>
                </form>
                <Link to='/signin'>Don't have an account yet? <strong>Sign Up</strong> ...</Link>
            </div>
        );
    }
});

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleSignIn: user => {
            dispatch(signIn({user}));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);