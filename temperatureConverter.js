var temperature;

function convertToKelvins(){
    temperature = parseFloat(document.getElementById('temperature').value);
    temperature += 273.15;
    document.getElementById('result').innerHTML = temperature + "Kelvins.";
}

function convertToFahrenheit(){
    temperature = parseFloat(document.getElementById('temperature').value);
    temperature = (temperature * 9 / 5) + 32;
    document.getElementById('result').innerHTML = temperature + "Fahrenheit.";
}