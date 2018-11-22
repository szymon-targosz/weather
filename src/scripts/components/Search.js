import React from 'react';

export default class Search extends React.Component {
    onSubmit = e => {
        e.preventDefault();
        const city = e.target.elements.city.value.trim();
        const countryCode = e.target.elements.countryCode.value.trim();

        this.props.handleSubmit(city, countryCode);
    }

    render() {
        return (
            <form className='form' onSubmit={this.onSubmit}>
                <div className='form__group'>
                    <input
                        id='city'
                        className='form__input'
                        type='text'
                        name='city'
                        placeholder='City'
                        value={this.props.city}
                        onChange={this.props.onCityChange}
                        required
                    />
                    <label htmlFor="city" className='form__label'>City</label>
                </div>
                <div className='form__group'>
                    <input
                        id='countryCode'
                        className='form__input'
                        type='text'
                        name='countryCode'
                        placeholder='Country code'
                        value={this.props.countryCode}
                        onChange={this.props.onCountryChange}
                        required
                    />
                    <label htmlFor="countryCode" className='form__label'>Country Code</label>
                </div>
                {this.props.error && <p className='error'>{this.props.error}</p>}

                <button type='submit' className='btn form__btn'>
                    <span className="btn__visible">Check</span>
                    <span className="btn__invisible">Search</span>
                </button>
            </form>
        );
    }
}