import React from 'react';
import ReactDOM from 'react-dom';
import './Pagedex/pagedex.css';
import Router from './routes';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>,
    document.getElementById('root')
);