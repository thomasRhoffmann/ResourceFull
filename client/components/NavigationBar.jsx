import React, { Component} from 'react'
import { Link } from 'react-router'

export default class NavigationBar extends Component {
  render() {
    return (
      <div className='nav'>
        <Link to='' className='nav-button'>Search</Link>
        <Link to='' className='nav-button'>Suggest Resource</Link>
      </div>
    )
  }
};