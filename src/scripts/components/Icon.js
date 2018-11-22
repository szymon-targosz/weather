import React from 'react';
import icons from '../icons';

const Icon = ({ icon, classes }) => (
    <svg className={classes} viewBox="0 0 32 32">
        <path d={icons[icon]}></path>
    </svg>
);

export default Icon;