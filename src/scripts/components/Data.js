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
        return kelvin - 273.15;
    }

    getFahrenheit(kelvin) {
        return (kelvin * 1.8) - 459.67;
    }

    render() {
        const { weather, main, wind } = this.props.data;


        const temp = this.state.scale === 'c' ? this.getCelsius(main.temp).toFixed(1) : this.getFahrenheit(main.temp).toFixed(1);
        return (
            <div>
                <i className={`owf owf-${weather[0].id}`}></i>
                <p>{weather[0].description}</p>
                <Icon icon='thermometer'/>
                <p>{temp}</p>
                <button onClick={this.handleScaleC}>&deg;C</button>
                <button onClick={this.handleScaleF}>&deg;F</button>
                <Icon icon='pressure'/>
                <p>{main.pressure}</p>
                <Icon icon='humidity'/>
                <p>{main.humidity}</p>
                <Icon icon='wind'/>
                <p>{wind.speed}</p>
            </div>
        );
    }
}
