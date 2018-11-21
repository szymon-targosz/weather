import React from 'react';
import moment from 'moment';

const Header = () => (
    <header className='header'>
        {moment().format('D MMM, dddd')}
    </header>
);

export default Header;