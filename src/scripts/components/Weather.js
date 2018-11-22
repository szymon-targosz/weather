import React from 'react';
import { byCityName, forecast } from '../request';
import Header from './Header';
import Search from './Search';
import Data from './Data';
import Forecast from './Forecast';
import Loading from './Loading';

export default class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: 'london',
            countryCode: 'gb',
            data: undefined,
            tomorrow: undefined,
            dayAfter: undefined,
            dayNext: undefined,
            dayNext2x: undefined,
            ready: false,
            error: undefined
        };
    }

    // SEARCH COMPONENT ACTIONS
    onCityChange = (e) => {
        const city = e.target.value;
        this.setState(() => ({ city }));
    }

    onCountryChange = (e) => {
        const countryCode = e.target.value;
        this.setState(() => ({ countryCode }));
    }

    handleSubmit = async (city, countryCode) => {
        if (!city || !countryCode) {
            this.setState(() => ({ error: 'Fill both fields' }));
        } else if (!(/^[A-za-z]{2}$/).test(countryCode)) {
            this.setState(() => ({ error: 'Wrong country code' }));
        } else {
            this.setState(() => ({ error: undefined }));
            try {
                const data = await byCityName(this.state.city, this.state.countryCode);
                const {
                    tomorrow,
                    dayAfter,
                    dayNext,
                    dayNext2x
                } = await forecast(this.state.city, this.state.countryCode);

                this.setState(() => ({
                    data,
                    tomorrow,
                    dayAfter,
                    dayNext,
                    dayNext2x,
                    error: undefined
                }));
            } catch (err) {
                this.setState(() => ({ error: 'City not found' }));
            }
        }
    }

    render() {
        if (!this.state.ready) {
            return (
                <Loading />
            );
        }

        return (
            <div className='container'>
                <Header />
                <Search
                    city={this.state.city}
                    countryCode={this.state.countryCode}
                    onCityChange={this.onCityChange}
                    onCountryChange={this.onCountryChange}
                    handleSubmit={this.handleSubmit}
                    error={this.state.error}
                />
                <Data data={this.state.data} />
                <Forecast
                    tomorrow={this.state.tomorrow}
                    dayAfter={this.state.dayAfter}
                    dayNext={this.state.dayNext}
                    dayNext2x={this.state.dayNext2x}
                />
            </div>
        )
    }

    async componentDidMount() {
        const data = await byCityName(this.state.city, this.state.countryCode);
        const {
            tomorrow,
            dayAfter,
            dayNext,
            dayNext2x
        } = await forecast(this.state.city, this.state.countryCode);

        this.setState(() => ({
            data,
            tomorrow,
            dayAfter,
            dayNext,
            dayNext2x,
            ready: true
        }));
    }
}

