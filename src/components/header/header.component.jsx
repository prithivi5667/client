import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header = (props) => {
    function handleLogout() {
        fetch('https://movie-pt.herokuapp.com/api/logout', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            credentials: 'same-origin',
        })
        .then(res => {
            alert("You have logged out of your account!");
            window.location.replace("https://hopeful-lovelace-8ca5c3.netlify.app");
        })
        .catch(err => console.log(err));
    }

    return (
        <div className='header'>
            <div className='container logo-container'>
                <Link to='/' className='logo'>MovieGo</Link>
            </div>
            <div className='container options'>
                <Link to='/nowshowing' className='option'>Now Showing</Link>
                <Link to='/upcoming' className='option'>Upcoming</Link>
                <Link to='/popular' className='option'>Popular</Link>
            </div>
            <div className='container sign-in-container'>
                {
                    (props.isLoggedIn==='true') ? 
                    (<Link className='log-out' onClick={handleLogout}>Logout</Link>)
                    :
                    (<Link to='/signin' className='sign-in'>Sign In / Register</Link>)
                }
            </div>
        </div>
    );
}

export default Header;


    