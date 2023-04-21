const apiKey = '902022d14a2ccd623e1966f211a3c908';
const submit = document.querySelector(".submit");

let input = document.querySelector("input");
const image = document.querySelector("img");
const temp = document.getElementById("temperature");
const condition = document.getElementById("weather-condition");
let stats = [];



const getWeather = async () => {
    const location = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`
    stats = [];
    
    try {
        const response = await fetch(url);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log('Succesfuly retrieved weather data');
            // console.log(jsonResponse.weather[0].main);
            // console.log(jsonResponse.main.temp);
            const weather = jsonResponse.weather[0].main;
            const temp = jsonResponse.main.temp;
            stats.push(weather);
            stats.push(temp);
            return stats;
        }
    } catch (error) {
        console.log(error);
    }


}


const kelvinToF = (temp) => {
    temp = Number(temp);
    temp = (temp - 273.15) * 9/5;
    temp += 32;
    console.log(temp);
    stats[1] = Math.round(temp.toString());
    return stats;
}

const kelvinToC = (temp) => {
    return Math.round(temp - 237.15);
}


const weatherLogo = (weather) => {
    switch (weather[0]) {
        case 'Clouds':
            image.src = 'resources/images/cloud.png';
            image.style.display = 'block';
            temp.innerHTML = `${weather[1]}°F`;
            condition.innerHTML = weather[0];
            break;
        case 'Rain':
            image.src = 'resources/images/rain.png';
            image.style.display = 'block';
            temp.innerHTML = `${weather[1]}°F`;
            condition.innerHTML = weather[0];
            break;
        case 'Haze':
            image.src = 'resources/images/cloud.png';
            image.style.display = 'block';
            temp.innerHTML = `${weather[1]}°F`;
            condition.innerHTML = weather[0];
            break;
        case 'Thunderstorm':
            image.src = 'resources/images/snow.png';
            image.style.display = 'block';
            temp.innerHTML = `${weather[1]}°F`;
            condition.innerHTML = weather[0];
            break;
        case 'Clear':
            image.src = 'resources/images/clear.png';
            image.style.display = 'block';
            temp.innerHTML = `${weather[1]}°F`;
            condition.innerHTML = weather[0];
            break;
        case 'Snow':
            image.src = 'resources/images/snow.png';
            image.style.display = 'block';
            temp.innerHTML = `${weather[1]}°F`;
            condition.innerHTML = weather[0];
            break;
        case 'Mist':
            image.src = 'resources/images/mist.png';
            image.style.display = 'block';
            temp.innerHTML = `${weather[1]}°F`;
            condition.innerHTML = weather[0];
            break;
        default:
            break;
    }
}



submit.addEventListener('click', async () => {
    const location = await getWeather();
    kelvinToF(stats[1]);
    console.log(stats[1]);
    weatherLogo(stats);
    console.log(stats[0]);


})




