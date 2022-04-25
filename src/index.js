import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './action/redux' 
import * as ReactDOMClient from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App';
const root=ReactDOMClient.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
  <Provider store={store}>
    <App/>
  </Provider>
  </BrowserRouter>
);
// https://sea--battle.herokuapp.com/
reportWebVitals();
