import React from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {REMOVE_ERROR} from '../../actions/types';

export default () => {
    const dispatch = useDispatch();
    const removeError = () => dispatch({ type: REMOVE_ERROR });

    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-dark pt-2 p-1'>
            <ul className='navbar-nav m-auto'>
                <li className='nav-item'>
                    <NavLink exact className='nav-link' activeClassName='active'
                             to='/printers' onClick={removeError}>
                        <h4>View Printers</h4>
                    </NavLink>
                </li>
                <li className='nav-item pl-3'>
                    <NavLink exact className='nav-link' activeClassName='active'
                             to='/printers/new' onClick={removeError}>
                        <h4>Add New Printer</h4>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}