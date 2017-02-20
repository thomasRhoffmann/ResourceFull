import React, {Component, PropTypes} from 'react'
import {selectors} from '../../reducers/';
import {connect} from 'react-redux';
import {Link} from 'react-router'

const NavigationBar = React.createClass({
    propTypes: {
        user: PropTypes.object
    },

    renderAccountAccess() {
        return (
            <li className='nav-account'>
                <Link to='/signin'>Sign In</Link>
                <Link to='/signup'>Sign Up</Link>
            </li>
        );
    },

    renderAccountManagement() {
        const {username} = this.props.user;
        
        return (
            <li className='nav-account'>
                <span>{username}</span>
            </li>
        );
    },

    render() {
        const {username} = this.props.user;

        return (
            <div className='nav'>
                <ul className='clearfix'>
                    <h1 className='logo'>
                        <Link to='/'>
                            <span className='logo-first-half'>Resource</span><span className='logo-second-half'>Full</span>
                        </Link>
                    </h1>
                    <li><Link to=''>Search</Link></li> 
                    <li><Link to=''>Post</Link></li>
                    {username ? this.renderAccountManagement() : this.renderAccountAccess()}
                </ul>
            </div>
        )
    }
});

const mapStateToProps = state => {
    const {authSelectors} = selectors(state);

    return {
        user: authSelectors().getUser()
    };
};

export default connect(mapStateToProps)(NavigationBar);