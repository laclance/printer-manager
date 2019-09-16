import React from 'react';

export default ({text, onCLick}) => (
    <div className='d-flex justify-content-center mt-3'>
        <button className='btn btn-dark w-25' type='submit' onClick={onCLick}>
            {text}
        </button>
    </div>
);