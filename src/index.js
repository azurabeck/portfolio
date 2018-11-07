import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

// Site Components
import './Styles/styles';
import App from './Component/App/App';

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, 
  document.getElementById('root'));
