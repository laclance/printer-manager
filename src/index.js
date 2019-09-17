import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import createStore from './createStore';
import App from './components/main/App';
import 'bootstrap/dist/css/bootstrap.min.css';

const { store, persistor } = createStore();

render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
