import React from 'react';
import { byCityName } from '../request';
import Header from './Header';
import Search from './Search';
import Data from './Data';

export default class Weather extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: 'london',
            countryCode: 'gb',
            data: undefined,
            error: undefined,
            ready: false
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

    handleSubmit = async () => {
        try {
            const data = await byCityName(this.state.city, this.state.countryCode);
            this.setState(() => ({ 
                data,
                error: undefined
            }));
        } catch (err) {
            this.setState(() => ({ error: 'City not found' }));
        }
    }

    render() {
        if (!this.state.ready) {
            return (
                <div>Loading</div>
            );
        }

        return (
            <div>
                <Header />
                <Search
                    city={this.state.city}
                    countryCode={this.state.countryCode}
                    onCityChange={this.onCityChange}
                    onCountryChange={this.onCountryChange}
                    handleSubmit={this.handleSubmit}
                />
                {this.state.error && <p>{this.state.error}</p>}
                <Data data={this.state.data} />
            </div>
        )
    }

    async componentDidMount() {
        const data = await byCityName(this.state.city, this.state.countryCode);
        this.setState(() => ({ 
            data,
            ready: true
        }));
    }
}

