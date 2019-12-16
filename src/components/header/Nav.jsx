import React from 'react';
import '../../assets/styles/nav.scss';
import Logo from '../../assets/images/logo.gif';

const Nav = () => (
    <nav>
        <img src={Logo} alt='GIPGY' title='GIPGY' className='logo' />
    </nav>
);

export default Nav;
