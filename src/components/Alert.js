import React from 'react';

export default ({ message, type }) => (
    <div className={`mb-5 w-60 text-center ${alertClass(type)}`} role="alert">
        <h2>{message}</h2>
    </div>
);

function alertClass (type) {
    switch (type) {
        case 'info' :
            return 'alert alert-secondary';
        case 'error' :
            return 'alert alert-danger';
        default :
            return 'alert alert-secondary';
    }
}