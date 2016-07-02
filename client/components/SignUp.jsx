import React, { Component } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import { sign_up } from '../actions/actions';

class SignUp extends Component {
  render() {
    var signUp = this.props.signUp;
    return (
      <div className='signup-container'>
        <h1 className='signup-header'>Sign Up</h1>
        <form className="signup-form">
          <input className='signup-username' placeholder='username' ref='username' type='text' />
          <input className='signup-password' placeholder='password' ref='password' type='password' />
          <input type='submit' value='Sign Up' onClick={() =>
            signUp({
              username: this.refs.username.getValue(),
              password: this.refs.password.getValue()
            })}
          />
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
      dispatch(sign_up(user))
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);