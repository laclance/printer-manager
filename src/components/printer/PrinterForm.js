import React from 'react';
import {useSelector} from 'react-redux';
import {useFormInputs} from '../../hooks';
import CenteredButton from '../CenteredButton';
import Spinner from '../Spinner';

export default ({ onSubmit, printer }) => {
    const initialInputs = printer || { name: '', ip_address: '', status: 'inactive' };
    const { inputs, showMessage, handleChange, handleSubmit } = useFormInputs(initialInputs, onSubmit);

    const { loading, error, success } = useSelector((state) => state);

    if (loading) {
        return <Spinner message={`${printer ? 'Editing' : 'Adding'} Printer`}/>;
    }

    return (
        <form className='mt-4' onSubmit={handleSubmit}>
            <div className='d-flex flex-column align-items-center'>

                <div className='form-group w-25'>
                    <label className='ml-2'>
                        Name
                    </label>
                    <input className='form-control' type='text' value={inputs.name}
                           onChange={handleChange} name='name' required/>
                </div>

                <div className='form-group w-25'>
                    <label className='ml-2'>
                        IP Address
                    </label>
                    <input className='form-control' type='text' value={inputs.ip_address}
                           onChange={handleChange} name='ip_address' required/>
                </div>

                <div className='form-group w-25'>
                    <label className='ml-2'>
                        Status
                    </label>
                    <select className='form-control' onChange={handleChange} name='status' value={inputs.status}>
                        <option value='inactive'>inactive</option>
                        <option value='active'>active</option>
                    </select>
                </div>

                {error && showMessage &&
                <h4 className='text-danger'>{error}</h4>}

                {success && showMessage &&
                <h4 className='text-success'>
                    {`Printer ${printer ? 'updated' : 'added'} successfully`}
                </h4>}

            </div>
            <CenteredButton text={`${printer ? 'Edit' : 'Add'} Printer`}/>
        </form>
    );
}