const apiKey = '902022d14a2ccd623e1966f211a3c908';
const submit = document.querySelector(".submit");

let input = document.querySelector("input");
const image = document.querySelector("img");
const temp = document.getElementById("temperature");
const condition = document.getElementById("weather-condition");
const city = document.getElementById("cityText");
const toggle = document.querySelector(".toggle");
const fButton = document.getElementById("F");
const cButton = document.getElementById("C");
const notFound = document.getElementById("city-not-found");
let kelvin;
let fahrenheit;
let celcius;
let stats = [];



//fetch temp and climate of inputted location
const getWeather = async () => {
    const location = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
    stats = [];
    
    try {
        const response = await fetch(url);
        if (response.ok) {
            notFound.style.display = 'none';
            const jsonResponse = await response.json();
            console.log('Succesfuly retrieved weather data');
            // console.log(jsonResponse.weather[0].main);
            // console.log(jsonResponse.main.temp);
            const weather = jsonResponse.weather[0].main;
            const temp = jsonResponse.main.temp;
            const cit = location;
            stats.push(weather);
            stats.push(temp);
            stats.push(cit);
            return stats;
        } else {
            notFound.style.display = 'block';
        }
    } catch (error) {
        console.log(error);
    }


}

//convert kelvin to f
const kelvinToF = (temp) => {
    temp = Number(temp);
    temp = (temp - 273.15) * 9/5;
    temp += 32;
    // console.log(temp);
    fahrenheit = Math.round(temp.toString());
    return fahrenheit;
}

//convert kelvin to c
const kelvinToC = (temp) => {
    temp = Number(temp);
    temp = Math.round(temp - 273.15);
    temp = temp.toString();
    celcius = temp;
    return celcius;
}


//adds image of climate in inputted city and displays temp
const weatherLogo = (weather) => {
    switch (weather[0]) {
        case 'Clouds':
            city.innerHTML = weather[2];
            city.style.display = 'block';
            toggle.style.display = 'flex';
            image.src = 'resources/images/cloud.png';
            image.style.display = 'block';
            temp.innerHTML = `${fahrenheit}°F`;
            condition.innerHTML = weather[0];
            break;
        case 'Rain':
            city.innerHTML = weather[2];
            city.style.display = 'block';
            toggle.style.display = 'flex';
            image.src = 'resources/images/rain.png';
            image.style.display = 'block';
            temp.innerHTML = `${fahrenheit}°F`;
            condition.innerHTML = weather[0];
            break;
        case 'Haze':
            city.innerHTML = weather[2];
            city.style.display = 'block';
            toggle.style.display = 'flex';
            image.src = 'resources/images/cloud.png';
            image.style.display = 'block';
            temp.innerHTML = `${fahrenheit}°F`;
            condition.innerHTML = weather[0];
            break;
        case 'Thunderstorm':
            city.innerHTML = weather[2];
            city.style.display = 'block';
            toggle.style.display = 'flex';
            image.src = 'resources/images/snow.png';
            image.style.display = 'block';
            temp.innerHTML = `${fahrenheit}°F`;
            condition.innerHTML = weather[0];
            break;
        case 'Clear':
            city.innerHTML = weather[2];
            city.style.display = 'block';
            toggle.style.display = 'flex';
            image.src = 'resources/images/clear.png';
            image.style.display = 'block';
            temp.innerHTML = `${fahrenheit}°F`;
            condition.innerHTML = weather[0];
            break;
        case 'Snow':
            city.innerHTML = weather[2];
            city.style.display = 'block';
            toggle.style.display = 'flex';
            image.src = 'resources/images/snow.png';
            image.style.display = 'block';
            temp.innerHTML = `${fahrenheit}°F`;
            condition.innerHTML = weather[0];
            break;
        case 'Mist':
            city.innerHTML = weather[2];
            city.style.display = 'block';
            toggle.style.display = 'flex';
            image.src = 'resources/images/mist.png';
            image.style.display = 'block';
            temp.innerHTML = `${fahrenheit}°F`;
            condition.innerHTML = weather[0];
            break;
        default:
            break;
    }
}


//add event listener to submit button
submit.addEventListener('click', async () => {
    const location = await getWeather();
    kelvin = stats[1];
    kelvinToF(stats[1]);
    weatherLogo(stats);


})

fButton.addEventListener('click', () => {
    kelvinToF(kelvin);
    temp.innerHTML = `${fahrenheit}°F`;
});

cButton.addEventListener('click', () => {
    kelvinToC(kelvin);
    temp.innerHTML = `${celcius}°C`;

});

// console.log(fButton);




