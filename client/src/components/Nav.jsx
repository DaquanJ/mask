import React from 'react';
import { Link } from 'react-router-dom';
import Countries from '../components/countries';
import '../styles/Home.css';

const Nav = () => {
    return (
        <div className='header'>
            <Link id='header-link' to='/'> <h1> Mask </h1> </Link>
            <Countries />
        </div>
    );
}

export default Nav;