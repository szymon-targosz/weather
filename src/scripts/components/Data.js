import React from 'react';

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
                <i className={`owf owf-200`}></i>
                <p>{weather[0].description}</p>
                <p>{temp}</p>
                <button onClick={this.handleScaleC}>&deg;C</button>
                <button onClick={this.handleScaleF}>&deg;F</button>
                <p>{main.pressure}</p>
                <p>{main.humidity}</p>
                <p>{wind.speed}</p>
            </div>
        );
    }
}
