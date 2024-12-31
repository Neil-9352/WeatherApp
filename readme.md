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

3. Copy the `config.example.js` file to `config.js` in the `src` folder:
    ```bash
    cp src/config.example.js src/config.js
    ```

4. Open `src/config.js` and replace `"YOUR_API_KEY_HERE"` with your actual OpenWeatherMap API key. You can obtain your API key by signing up on the [OpenWeatherMap website](https://openweathermap.org/api).

5. Open `index.html` in your browser to run the application.

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
- **config.js**: The configuration file where your API key is stored (generated from `config.example.js`).
- **config.example.js**: Example configuration file containing a placeholder for the API key (used to generate `config.js`).

## API

The app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. You will need to sign up on the OpenWeatherMap website to get an API key to use in the application.

Add your API key to `src/config.js` as shown in the setup instructions.

## Example

When a user types "New York" in the search box and clicks the search button or presses "Enter", the application will show the weather details for New York.

## Note

- **Security Reminder**: Keep your `config.js` file private and do not share it in public repositories.
- **Git Ignore**: Ensure that your `config.js` file is included in `.gitignore` to prevent sensitive data from being uploaded to version control systems like GitHub.
