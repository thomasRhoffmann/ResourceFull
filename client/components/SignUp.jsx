import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { account_access } from '../actions/actions';

class SignUp extends Component {
  render() {
    const signUp = (e) => {
      const user = {
        username: this.refs.username.value,
        password: this.refs.password.value,
        path: '/signup'
      };

      this.props.signUp(user);
    };
    return (
      <div className='signup-container'>
        <h1 className='signup-header'>Sign Up</h1>
        <form className="signup-form">
          <input className='signup-username' placeholder='username' ref='username' type='text' />
          <input className='signup-password' placeholder='password' ref='password' type='password' />
          <button type='button' onClick={signUp}>Sign Up</button>
        </form>
        <Link to='/signin'>Already have an account? <strong>Sign In</strong> ...</Link>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (user) => {
      dispatch(account_access(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);