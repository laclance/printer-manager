import React from 'react';

export default ({text, onCLick}) => (
    <div className='d-flex justify-content-center mt-3'>
        <button className='btn btn-dark w-25' type='submit' onClick={onCLick}>
            <h4 className='pt-1'>{text}</h4>
        </button>
    </div>
);