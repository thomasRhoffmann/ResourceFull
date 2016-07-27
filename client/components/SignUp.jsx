import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { sign_up_async } from '../actions/actions';

class SignUp extends Component {
  render() {
    const signUp = (e) => {
      const user = {
        username: this.refs.username.value,
        password: this.refs.password.value
      };

      this.props.signUp(user);
    };
    return (
      <div className='signup-container'>
        <h1 className='signup-header'>Sign Up</h1>
        <form className="signup-form" >
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
      dispatch(sign_up_async(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);