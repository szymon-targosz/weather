import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './components/Weather';
import '../styles/main.scss';

const jsx = (
    <Weather />
)

ReactDOM.render(jsx, document.getElementById('app'));