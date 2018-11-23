import React from 'react';
import ForecastDay from './ForecastDay';

const Forecast = ({ tomorrow, dayAfter, dayNext, dayNext2x }) => {
    // console.log('tomorrow', tomorrow);

    return (
        <div className='forecast'>
            <ForecastDay data={tomorrow} />
            <ForecastDay data={dayAfter} />
            <ForecastDay data={dayNext} />
            <ForecastDay data={dayNext2x} />
        </div>
    );
};

export default Forecast;