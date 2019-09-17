import {useFormInputs} from '../../hooks';
import React from 'react';
import CenteredButton from '../CenteredButton';
import {useSelector} from 'react-redux';
import Spinner from '../Spinner';

export default ({ onSubmit, printer }) => {
    const initialInputs = printer || { name: '', ip_address: '', status: 'inactive' };
    const { inputs, handleChange, handleSubmit } = useFormInputs(initialInputs, onSubmit);

    const { error, loading } = useSelector((state) => state);

    if (loading) {
        return <Spinner/>;
    }

    return (
        <form className='mt-5' onSubmit={handleSubmit}>
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
                {error && <h4 className='text-danger'>{error}</h4>}
            </div>
            <CenteredButton text={`${printer ? 'Edit' : 'Add'} Printer`}/>
        </form>
    );
}