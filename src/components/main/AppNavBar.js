import React from 'react';
import {NavLink} from 'react-router-dom';

export default () => (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark pt-2 p-1'>
        <ul className='navbar-nav m-auto'>
            <li className='nav-item'>
                <NavLink exact className='nav-link' activeClassName='active' to='/printers'>
                    <h4>View Printers</h4>
                </NavLink>
            </li>
            <li className='nav-item pl-3'>
                <NavLink exact className='nav-link' activeClassName='active' to='/printers/new'>
                    <h4>Add New Printer</h4>
                </NavLink>
            </li>
        </ul>
    </nav>
);