function convert() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result = '';

    if (isNaN(temperature)) {
        result = 'Please enter a valid number for the temperature.';
    } else {
        switch (unit) {
            case 'celsius':
                result = `${temperature}°C = ${(temperature * 9/5 + 32).toFixed(2)}°F = ${(temperature + 273.15).toFixed(2)} K`;
                break;
            case 'fahrenheit':
                result = `${temperature}°F = ${((temperature - 32) * 5/9).toFixed(2)}°C = ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)} K`;
                break;
            case 'kelvin':
                result = `${temperature} K = ${(temperature - 273.15).toFixed(2)}°C = ${((temperature - 273.15) * 9/5 + 32).toFixed(2)}°F`;
                break;
            default:
                result = 'Please select a valid unit.';
        }
    }

    document.getElementById('result').innerText = result;
}
