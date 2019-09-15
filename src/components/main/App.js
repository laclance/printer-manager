import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Header from './Header';
import AppNavBar from './AppNavBar';
import AppSwitch from './AppSwitch';

export default () => (
    <BrowserRouter>
        <div>
            <Header/>
            <AppNavBar/>
            <AppSwitch/>
        </div>
    </BrowserRouter>
);
