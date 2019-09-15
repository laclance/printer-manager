import React from 'react';
import {NavLink} from 'react-router-dom';

export default () => (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark p-2'>
        <ul className='navbar-nav p-1 m-auto'>
            <li className='nav-item'>
                <NavLink exact className='nav-link' activeClassName='active' to='/printers'>
                    <h3>View Printers</h3>
                </NavLink>
            </li>
            <li className='nav-item pl-3'>
                <NavLink exact className='nav-link' activeClassName='active' to='/printers/new'>
                    <h3>Add New Printer</h3>
                </NavLink>
            </li>
        </ul>
    </nav>
);