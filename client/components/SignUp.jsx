import React, { Component } from 'react';
import { Link } from 'react-router'

export default class SignUp extends Component {
  render() {
    return (
      <div className='signup-container'>
        <h1 className='signup-header'>Sign Up</h1>
        <form className="signup-form">
          <input className="signup-username" placeholder="username" type='text' />
          <input className="signup-password" placeholder="password" type="password" />
          <input type="submit" value="Sign Up" />
        </form>
        <Link to='/signin'>Already have an account? <strong>Sign In</strong> ...</Link>
      </div>
    )
  }
}