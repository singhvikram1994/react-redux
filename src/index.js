import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import thunk from 'redux-thunk';


import {Provider} from 'react-redux'
import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import allReducers from './reducers/index.reducers'
import {updateUser} from './actions/user.action'
import {updateProduct} from './actions/product.action'


const allStoreEnhancements = compose(
    applyMiddleware(thunk),
    window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
    allReducers, 
    {
        products:[{name:"First Product"}],
        user:"BHOPAL"
    }, 
    allStoreEnhancements
);


ReactDOM.render(<Provider store={store}><App country="INDIA"/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
