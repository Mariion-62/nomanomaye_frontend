import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import './style.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
