import React from 'react';
import Icon from './Icon';
import { getCelsius, getFahrenheit } from '../scales';

export default class info extends React.Component {
    state = {
        scale: 'c'
    }

    handleScaleC = () => {
        this.setState((prevState) => ({ scale: 'c' }));
    }

    handleScaleF = () => {
        this.setState((prevState) => ({ scale: 'f' }));
    }

    render() {
        const { weather, main, wind, clouds, name, sys } = this.props.data;
        const mainTemp = main.temp.toFixed(0);

        const temp = this.state.scale === 'c' ? getCelsius(mainTemp).toFixed(0) : getFahrenheit(mainTemp).toFixed(0);

        return (
            <div className='data info'>
                <div className='info__group info__group--d-column'>
                    <i className={`font-icon font-icon--lg owf owf-${weather[0].id}`}></i>
                    <p className='info__detail m-none'>{weather[0].description}</p>
                </div>

                <div className='info__group info__group--d-column'>
                    <p className='info__detail info__detail--lg m-none'>{temp}&deg;{this.state.scale === 'c' ? 'C' : 'F'}</p>

                    <div>
                        <button
                            className={`btn-text ${this.state.scale === 'c' && 'btn-text--active'}`}
                            onClick={this.handleScaleC}
                        >&deg;C</button>

                        <button
                            className={`btn-text ${this.state.scale === 'f' && 'btn-text--active'}`}
                            onClick={this.handleScaleF}
                        >&deg;F</button>
                    </div>
                </div>

                <div className='info__group info__group--long'>
                    <Icon icon='location' classes='icon' />
                    <p className='info__detail'>{name}, {sys.country}</p>
                </div>

                <div className='info__group'>
                    <Icon icon='pressure' classes='icon' />
                    <p className='info__detail t-transform-none'>{main.pressure} hPa</p>
                </div>

                <div className='info__group'>
                    <Icon icon='humidity' classes='icon' />
                    <p className='info__detail'>{main.humidity} %</p>
                </div>

                <div className='info__group'>
                    <Icon icon='wind' classes='icon' />
                    <p className='info__detail t-transform-none'>{wind.speed.toFixed(1)} m/s</p>
                </div>

                <div className='info__group'>
                    <Icon icon='clouds' classes='icon' />
                    <p className='info__detail'>{clouds.all} %</p>
                </div>
            </div>
        );
    }
}