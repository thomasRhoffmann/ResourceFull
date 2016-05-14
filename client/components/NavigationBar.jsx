import React, { Component} from 'react'
import { Link } from 'react-router'

export default class NavigationBar extends Component {
  render() {
    return (
      <div className='nav'>
        <ul>
          <h1 className='logo'><span className='logo-first-half'>Resource</span><span className='logo-second-half'>Full</span></h1>
          <li><a href="">Search</a></li> 
          <li><a href="">Post</a></li>
        </ul>
      </div>
    )
  }
};