import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

function Nav() {
    return (
            <nav className={s.nav}>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/registration'>Registration</NavLink>
                <NavLink to='/restore_pass'>RestorePass</NavLink>
                <NavLink to='/pass'>NewPass</NavLink>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/test'>Test</NavLink>
            </nav>
    );
}

export default Nav;