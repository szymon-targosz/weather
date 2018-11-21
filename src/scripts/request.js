const byCityName = async (city, countryCode) => {
    const response = await fetch(`//api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&&APPID=acca32af084cfaa09d496f1ce1c1d9b0`);
    if (!response.ok) throw Error(`Unable to fetch data. Status: ${response.status}`);
    const data = await response.json();
    return data; 
}

export { byCityName };