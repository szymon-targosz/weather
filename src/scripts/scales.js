const getCelsius = (kelvin) => {
    return kelvin - 273;
}

const getFahrenheit = (kelvin) => {
    return (kelvin * 1.8) - 459.67;
}

export { getCelsius, getFahrenheit };