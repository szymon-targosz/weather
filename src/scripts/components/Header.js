import React from 'react';
import moment from 'moment';

const Header = () => (
    <header className='header'>
        <h1 className='header__title'>Weather</h1>
        <p className='header__date'>{moment().format('D MMM, dddd')}</p>
    </header>
);

export default Header;