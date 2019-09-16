import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from '../Spinner';
import {fetchPrinters} from '../../actions';
import Alert from '../Alert';
import CenteredButton from '../CenteredButton';
import PrinterTable from './PrinterTable';
import Container from '../Container';

export default () => {
    const dispatch = useDispatch();
    const {printers, loading, error} = useSelector((state) => state);

    if (!printers) {
        dispatch(fetchPrinters());
    }

    if (loading) {
        return <Spinner message={'Fetching your printers.'}/>;
    }

    function renderTable() {
        if (error) {
            return <Alert message={'Sorry, there was a problem fetching your printers.'}/>
        }

        if (printers.length === 0 ) {
            return <Alert message={'There are currently no printers available.'}/>
        }

        return <PrinterTable printers={printers}/>;
    }

    return (
        <Container>
            {renderTable()}
            <CenteredButton text='Refresh' onCLick={() => dispatch(fetchPrinters())}/>
        </Container>
    );
}