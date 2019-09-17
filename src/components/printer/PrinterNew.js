import React from 'react';
import PrinterForm from './PrinterForm';
import {useDispatch} from 'react-redux';
import {addPrinter} from '../../actions';

export default () => {
    const dispatch = useDispatch();
    const addNewPrinter = (printer) => dispatch(addPrinter(printer));

    return <PrinterForm onSubmit={addNewPrinter}/>
}