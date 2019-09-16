import React from 'react';

export default function Spinner ({ message }) {
    return (
        <div className='w-100 text-center mt-5 pt-5'>
            <span className='spinner-border' style={{ width: '4rem', height: '4rem' }} role='status'/>
            {message && <h2 className='m-3'>{message}</h2>}
        </div>
    );
}