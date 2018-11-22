import moment from 'moment';

const byCityName = async (city, countryCode) => {
    const response = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&&APPID=acca32af084cfaa09d496f1ce1c1d9b0`);
    if (!response.ok) throw Error(`Unable to fetch data. Status: ${response.status}`);
    const data = await response.json();
    return data;
}

const forecast = async (city, countryCode) => {
    const response = await fetch(`//api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&&APPID=acca32af084cfaa09d496f1ce1c1d9b0`);
    if (!response.ok) throw Error(`Unable to fetch data. Status: ${response.status}`);
    const data = await response.json();
    return organizeForecast(data.list);
}

const organizeForecast = (data) => {
    let tomorrow = [];
    let dayAfter = [];
    let dayNext = [];
    let dayNext2x = [];

    const tomorrowDate = moment().add(1, 'days').dayOfYear();
    const dayAfterDate = moment().add(2, 'days').dayOfYear();
    const dayNextDate = moment().add(3, 'days').dayOfYear();
    const dayNext2xDate = moment().add(4, 'days').dayOfYear();

    data.forEach((part) => {
        const dayOfYear = moment.unix(part.dt).dayOfYear();

        if (dayOfYear === tomorrowDate) {
            tomorrow.push(part);
        } else if (dayOfYear === dayAfterDate) {
            dayAfter.push(part);
        } else if (dayOfYear === dayNextDate) {
            dayNext.push(part);
        } else if (dayOfYear === dayNext2xDate) {
            dayNext2x.push(part);
        }
    });

    return computeForecast({ tomorrow, dayAfter, dayNext, dayNext2x });
}

const computeForecast = ({ tomorrow, dayAfter, dayNext, dayNext2x }) => {

    const tomorrowData = computeForecastDay(tomorrow);
    const dayAfterData = computeForecastDay(dayAfter);
    const dayNextData = computeForecastDay(dayNext);
    const dayNext2xData = computeForecastDay(dayNext2x);

    return {
        tomorrow: tomorrowData,
        dayAfter: dayAfterData,
        dayNext: dayNextData,
        dayNext2x: dayNext2xData
    };
};

const computeForecastDay = (day) => {
    let temps = [];
    let pressures = [];

    day.forEach(({ main, weather }) => {
        temps.push(main.temp);
        pressures.push(main.pressure);
    });

    const tempMin = getMinValue(temps);
    const tempMax = getMaxValue(temps);
    const pressure = getAverage(pressures);
    const icon = day[4].weather[0].id;
    
    return {
        tempMin,
        tempMax,
        pressure,
        icon
    };
};

const getMinValue = (data) => Math.min(...data);

const getMaxValue = (data) => Math.max(...data);

const getAverage = (data) => Math.floor(data.reduce((sum, val) => sum + val) / data.length);

export { byCityName, forecast };