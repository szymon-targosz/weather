import React from 'react';
import Icon from './Icon';

export default class Data extends React.Component {
    state = {
        scale: 'c'
    }

    handleScaleC = () => {
        this.setState((prevState) => ({ scale: 'c' }));
    }

    handleScaleF = () => {
        this.setState((prevState) => ({ scale: 'f' }));
    }

    getCelsius(kelvin) {
        return kelvin - 273;
    }

    getFahrenheit(kelvin) {
        return (kelvin * 1.8) - 459.67;
    }

    render() {
        const { weather, main, wind, clouds, name, sys } = this.props.data;
        const mainTemp = main.temp.toFixed(0);

        const temp = this.state.scale === 'c' ? this.getCelsius(mainTemp).toFixed(0) : this.getFahrenheit(mainTemp).toFixed(0);

        return (
            <div className='data'>
                <div className='data__group data__group--main'>
                    <i className={`data__icon-weather owf owf-${weather[0].id}`}></i>
                    <p className='data__detail m-none'>{weather[0].description}</p>
                </div>

                <div className='data__group data__group--main'>
                    <p className='data__detail data__detail--lg m-none'>{temp}&deg;{this.state.scale === 'c' ? 'C' : 'F'}</p>

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

                <div className='data__group data__group--full'>
                    <Icon icon='location' classes='icon' />
                    <p className='data__detail'>{name}, {sys.country}</p>
                </div>

                <div className='data__group'>
                    <Icon icon='pressure' classes='icon' />
                    <p className='data__detail'>{main.pressure} hPa</p>
                </div>

                <div className='data__group'>
                    <Icon icon='humidity' classes='icon' />
                    <p className='data__detail'>{main.humidity} %</p>
                </div>

                <div className='data__group'>
                    <Icon icon='wind' classes='icon' />
                    <p className='data__detail'>{wind.speed} m/s</p>
                </div>

                <div className='data__group'>
                    <Icon icon='clouds' classes='icon' />
                    <p className='data__detail'>{clouds.all} %</p>
                </div>
            </div>
        );
    }
}
