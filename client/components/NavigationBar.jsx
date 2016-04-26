import {React Component} from 'react'
import Link from 'react-router'

export default class NavigationBar extends Component {
  render() {
    return (
      <Link to='/search'>Search</Link>
      <Link to='/suggest'>Suggest Resource</Link>
    )
  }
};