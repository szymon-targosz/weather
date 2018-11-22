import React from 'react';
import Icon from './Icon';

const Loading = () => (
    <div className='loading'>
        <div className='loading__icons'>
            <div className='loading__orbit'>
                <Icon icon='sun' classes='icon icon--lg loading__icon loading__icon--1' />
                <Icon icon='snowy' classes='icon icon--lg loading__icon loading__icon--2' />
                <Icon icon='rainy' classes='icon icon--lg loading__icon loading__icon--3' />
                <Icon icon='lightning' classes='icon icon--lg loading__icon loading__icon--4' />
                <Icon icon='cloudy-sun' classes='icon icon--lg loading__icon loading__icon--5' />
            </div>
        </div>
    </div>
);

export default Loading;