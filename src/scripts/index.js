import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './components/Weather';
import '../owf-font/css/owfont-regular.min.css';
import '../styles/main.scss';

const jsx = (
    <Weather />
)

ReactDOM.render(jsx, document.getElementById('app'));