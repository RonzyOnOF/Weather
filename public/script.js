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

// const weatherLogo = (weather) => {
//     switch (weather) {
//         case 'Clouds':
//             image.src = 'cloud.png';
//             image.style.display = 'block';
//             break;
        
//         default:
//             break;
//     }
// }



submit.addEventListener('click', async () => {
    const location = await getWeather();
    // console.log(stats);
    console.log(stats[0]);
    // weatherLogo(stats[0]);


})




