import React, { Component} from 'react'
import { Link } from 'react-router'

export default class NavigationBar extends Component {
  render() {
    return (
      <div className='nav'>
        <ul>
          <h1 className='logo'>
            <Link to='/'>
              <span className='logo-first-half'>Resource</span><span className='logo-second-half'>Full</span>
            </Link>
          </h1>
          <li><Link to=''>Search</Link></li> 
          <li><Link to=''>Post</Link></li>
          <li className='nav-account'><Link to='/signin'>Sign In</Link></li>
          <li className='nav-account'><Link to='/signup'>Sign Up</Link></li>
        </ul>
      </div>
    )
  }
};