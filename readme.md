# Weather App

A simple weather application built using HTML, CSS, and JavaScript that provides weather information based on the city entered by the user. The app uses the OpenWeatherMap API to fetch weather data and display it in a user-friendly format.

## Features
- Display current weather for a given city.
- Shows temperature, humidity, and wind speed.
- Updates weather icon based on the weather condition (e.g., clear, cloudy, rain).
- Handles invalid city input with an error message.

## Technologies Used
- **HTML**: Structure and layout of the page.
- **CSS**: Styling of the application.
- **JavaScript**: Logic to interact with the OpenWeatherMap API, fetch weather data, and update the UI.

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/weather-app.git
    ```

2. Navigate to the project folder:
    ```bash
    cd weather-app
    ```

3. Open `index.html` in your browser to run the application.

## How It Works

1. The user enters a city name in the search box.
2. The application fetches weather data from the OpenWeatherMap API based on the entered city.
3. The weather data is displayed, including the temperature, humidity, wind speed, and an appropriate weather icon.
4. If the city name is invalid, an error message is displayed.
5. The user can also press the "Enter" key to trigger the search functionality.

## Files

- **index.html**: The main HTML file that contains the structure of the app.
- **style.css**: The CSS file that styles the app.
- **script.js**: The JavaScript file that handles the weather fetching logic and event listeners.

## API

The app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. You will need to sign up on the OpenWeatherMap website to get an API key to use in the application.

Replace the placeholder `YOUR API KEY HERE` in `script.js` with your actual API key.

## Example

When a user types "New York" in the search box and clicks the search button or presses "Enter", the application will show the weather details for New York.
