import React from 'react';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: undefined
        }
    }

    onSubmit = e => {
        e.preventDefault();
        const city = e.target.elements.city.value.trim();
        const countryCode = e.target.elements.countryCode.value.trim();

        if (!city || !countryCode) {
            this.setState(() => ({ error: 'Fill both fields' }));
        } else if (!(/^[A-za-z]{2}$/).test(countryCode)) {
            this.setState(() => ({ error: 'Wrong country code' }));
        } else {
            this.setState(() => ({ error: undefined }));
            console.log('last block')
            this.props.handleSubmit();
        }
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input
                    type='text'
                    name='city'
                    placeholder='City'
                    value={this.props.city}
                    onChange={this.props.onCityChange}
                />
                <input
                    type='text'
                    name='countryCode'
                    placeholder='Country code'
                    value={this.props.countryCode}
                    onChange={this.props.onCountryChange}
                />
                <input type="submit" value="Search" />
                {this.state.error && <p>{this.state.error}</p>}
            </form>
        );
    }
}