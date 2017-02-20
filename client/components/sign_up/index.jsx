import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { signUp } from './actions';

const SignUp = React.createClass({
    propTypes: {
        handleSignUp: PropTypes.func
    },

    onSignUp() {
        const {handleSignUp} = this.props;
        const user = {
            username: this.refs.username.value,
            password: this.refs.password.value
        };

        handleSignUp(user);
    },

    render() {
        return (
            <div className='signup-container'>
                <h1 className='signup-header'>Sign Up</h1>
                <form className="signup-form">
                    <input className='signup-username' placeholder='username' ref='username' type='text' />
                    <input className='signup-password' placeholder='password' ref='password' type='password' />
                    <button type='button' onClick={this.onSignUp}>Sign Up</button>
                </form>
                <Link to='/signin'>Already have an account? <strong>Sign In</strong> ...</Link>
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
        handleSignUp: user => {
            dispatch(signUp({user}));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);