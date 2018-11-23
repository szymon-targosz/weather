import React from 'react';
import Icon from './Icon';
import { getCelsius, getFahrenheit } from '../scales';

const ForecastDay = ({ data }) => (
    <div className='forecast__day info'>
        <div className='info__group'>
            <p className='info__detail info__detail--md m-none'>{data.dayName}</p>
        </div>

        <div className='info__group'>
            <i className={`font-icon owf owf-${data.icon}`}></i>
            <p className='info__detail'>{data.description}</p>
        </div>

        <div className='info__group'>
            <Icon icon='thermometer' classes='icon' />
            <p className='info__detail'>
                {getCelsius(data.tempMin).toFixed(0)} &#47; {getCelsius(data.tempMax).toFixed(0)}&deg;C
            </p>
        </div>

        <div className='info__group'>
            <Icon icon='thermometer' classes='icon icon--sm' />
            <p className='info__detail info__detail--sm'>
                {getFahrenheit(data.tempMin).toFixed(0)} &#47; {getFahrenheit(data.tempMax).toFixed(0)}&deg;F
            </p>
        </div>

        <div className='info__group'>
            <Icon icon='pressure' classes='icon' />
            <p className='info__detail t-transform-none'>{data.pressure} hPa</p>
        </div>
    </div>
);

export default ForecastDay;