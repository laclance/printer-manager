import React from 'react';
import PrinterTableRow from './PrinterTableRow';

export default ({printers}) => (
    <table className='table table-striped table-bordered mr-5'>
        <thead>
        <tr>
            <th scope='col'>Name</th>
            <th scope='col'>IP Address</th>
            <th scope='col'>Status</th>
            <th scope='col' style={{ width: '15%' }}/>
        </tr>
        </thead>

        <tbody>
            {printers.map(printer =>
                <PrinterTableRow
                    key={printer.id}
                    {...printer}
                />
            )}
        </tbody>
    </table>
);