import React, { Component } from 'react';
import { Link } from 'react-router'

export default class SignIn extends Component {
  render() {
    return (
      <div className='signin-container'>
        <h1 className='signin-header'>Sign In</h1>
        <form className="signin-form">
          <input className="signin-username" placeholder="username" type='text' />
          <input className="signin-password" placeholder="password" type="password" />
          <input type="submit" value="Sign In" />
        </form>
        <Link to='/signup'>Don't have an account yet? <strong>Sign Up</strong> ...</Link>
      </div>
    )
  }
}