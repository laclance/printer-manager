import React from 'react';
import PrinterForm from './PrinterForm';
import {useDispatch} from 'react-redux';
import {updatePrinter} from '../../actions';
import { withRouter } from 'react-router-dom';

export default withRouter((props) => {
    const dispatch = useDispatch();
    const editPrinter = (printer) => dispatch(updatePrinter(printer));

    return <PrinterForm onSubmit={editPrinter} printer={props.location.state.printer}/>
});