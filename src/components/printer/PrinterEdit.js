import React from 'react';
import PrinterForm from './PrinterForm';
import {useDispatch} from 'react-redux';
import {updatePrinter} from '../../actions';
import { withRouter } from 'react-router-dom';
import {REMOVE_ERROR} from '../../actions/types';

export default withRouter((props) => {
    const dispatch = useDispatch();
    const editPrinter = (printer) => dispatch(updatePrinter(printer));

    dispatch({ type: REMOVE_ERROR });

    return <PrinterForm onSubmit={editPrinter} printer={props.location.state.printer}/>
});