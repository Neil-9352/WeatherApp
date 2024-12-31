import config from './config.js';

const APIKey = config.APIKey; // Use the API key from config.js
const APIURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response = await fetch(APIURL + `&q=${city}` + `&appid=${APIKey}`);
    let data = await response.json();

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else if (city === '') {
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.weather').style.display = 'none';
    } else {
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '&deg;C';
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';
    
        switch (data.weather[0].main) {
            case 'Clouds':
                weatherIcon.src = '../icons/cloudy.png'
                break;
        
            case 'Haze':
                weatherIcon.src = '../icons/haze.png'
                break;
        
            case 'Clear':
                weatherIcon.src = '../icons/clear.png'
                break;
        
            case 'Rain':
                weatherIcon.src = '../icons/rain.png'
                break;
        
            case 'Drizzle':
                weatherIcon.src = '../icons/drizzle.png'
                break;
            
            case 'Mist':
                weatherIcon.src = '../icons/mist.png'
                break;
            
            case 'Snow':
                weatherIcon.src = '../icons/snow.png'
                break;
            
            default:
                break;
        }
    
        document.querySelector('.error').style.display = 'none';
        document.querySelector('.weather').style.display = 'block';
    }
}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});

searchBox.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkWeather(searchBox.value);
    }
});
