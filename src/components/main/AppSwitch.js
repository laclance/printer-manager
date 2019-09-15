import React from 'react';
import {Redirect, Route, Switch} from 'react-router';
import PrinterList from '../printer/PrinterList';
import PrinterEdit from '../printer/PrinterEdit';
import PrinterNew from '../printer/PrinterNew';

export default () => (
    <Switch className="p-5">
        <Route exact path='/'>
            <Redirect to='/printers'/>
        </Route>
        <Route exact path='/printers' component={PrinterList}/>
        <Route exact path='/printers/new' component={PrinterNew}/>
        <Route exact path='/printers/edit' component={PrinterEdit}/>
    </Switch>
);