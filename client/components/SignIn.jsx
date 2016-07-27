import React, { Component } from 'react';
import { Link } from 'react-router'
import { connect } from 'react-redux';


class SignIn extends Component {
  render() {
    const signIn = (e) => {
      const user = {
        username: this.refs.username.value,
        password: this.refs.password.value
      };

      this.props.signIn(user);
    };
    return (
      <div className='signin-container'>
        <h1 className='signin-header'>Sign In</h1>
        <form className="signin-form" >
          <input className='signin-username' placeholder='username' ref='username' type='text' />
          <input className='signin-password' placeholder='password' ref='password' type='password' />
          <button type='button' onClick={signIn}>Sign In</button>
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
    signIn: (user) => {
      dispatch(sign_up_async(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);