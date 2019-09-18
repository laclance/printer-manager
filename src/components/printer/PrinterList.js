import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Spinner from '../Spinner';
import {fetchPrinters} from '../../actions';
import Alert from '../Alert';
import CenteredButton from '../CenteredButton';
import PrinterTable from './PrinterTable';
import Container from '../Container';

export default () => {
    const dispatch = useDispatch();
    const { printers, loading, error, updated } = useSelector((state) => state);

    useEffect(() => {
        if (!updated) {
            dispatch(fetchPrinters());
        }
    }, [dispatch, updated]);

    if (loading) {
        return <Spinner/>;
    }

    return (
        <Container>
            {error && <Alert message={error} type={'error'}/>}

            {!error && printers.length === 0 &&
            <Alert message={'There are currently no printers available.'}/>}

            <PrinterTable printers={printers}/>
            <CenteredButton text='Refresh' onCLick={() => dispatch(fetchPrinters())}/>
        </Container>
    );
}