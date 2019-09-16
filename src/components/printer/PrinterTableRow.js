import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {deletePrinter} from '../../actions';

export default ({ id, name, ip_address, status }) => (
    <tr>
        <td className='align-middle'>{name}</td>
        <td className='align-middle'>{ip_address}</td>
        <td className='align-middle'>{status}</td>
        <td className='d-flex justify-content-around'>
            <Link className='btn btn-secondary'
                  to={{
                      pathname: '/printers/edit',
                      state: { printer: { id, name, ip_address, status } }
                  }}
            >
                EDIT
            </Link>
            <button className='btn btn-danger' onClick={() => useDispatch()(deletePrinter(id))}>
                DELETE
            </button>
        </td>
    </tr>
);