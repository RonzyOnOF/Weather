const apiKey = '902022d14a2ccd623e1966f211a3c908';
const url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=';
const param = `${url}${apiKey}`;
const submit = document.querySelector(".submit");
let input = document.querySelector("input");
const image = document.querySelector("img");
const temp = document.getElementById("temperature");
const condition = document.getElementById("weather-condition");




const getWeather = async () => {
    const location = input.value;
    console.log(location);
    
    // try {
    //     const response = await fetch(param);
    //     if (response.ok) {
    //         const jsonResponse = await response.json();
    //         const location = 
    //         console.log('Succesfuly retrieved weather data');
    //         console.log(jsonResponse.city);
    //     }
    // } catch (error) {
    //     console.log(error);
    // }
}

submit.addEventListener('click', () => {
    getWeather();
})
