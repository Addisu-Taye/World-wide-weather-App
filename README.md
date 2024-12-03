
# Weather App

A simple, user-friendly Weather Application that allows users to check the current weather and forecast for any location worldwide. The app integrates with a weather API to fetch real-time weather data and a map to show the selected location.

## Features

- **Current Weather**: Displays current weather conditions (temperature, humidity, wind speed, etc.).
- **Forecast**: Shows a 5-day weather forecast with temperature, weather condition, and wind speed.
- **Location Search**: Users can search for any location (city name or coordinates).
- **Map Integration**: Displays the location on an interactive map using the [Mapbox](https://www.mapbox.com/) API.
- **Responsive Design**: The app is responsive and works on both mobile and desktop devices.

## Tech Stack

- **Frontend**: 
  - React.js
  - CSS (or SCSS)
  - React Router (if needed)
  - Axios (for API requests)
- **Backend** (Optional):
  - Node.js (for proxying requests or if you want to handle API keys securely)
- **APIs**: 
  - [OpenWeatherMap API](https://openweathermap.org/api) (for weather data)
  - [Mapbox API](https://www.mapbox.com/) (for interactive maps)
- **Tools**:
  - Create React App (for bootstrapping)
  - GitHub Pages or Netlify for hosting

## Screenshots

### Home Page
![Weather App Screenshot](weather-app/src/assets/home.png)

---

## Installation

Follow the steps below to set up the project locally on your machine.

### 1. Clone the Repository

```bash
git clone https://github.com/addisu-taye/weather-app.git
cd weather-app
```
2. Install Dependencies
If you're using npm:

```
bash
npm install
```
Or if you're using yarn:
```
bash

yarn install
```
3. Set up the API Keys
    * OpenWeatherMap API:
    * Sign up at OpenWeatherMap and get an API key.
    * Create a .env file in the root directory of your  project (next to package.json) and add your API key as follows:
```
REACT_APP_OPENWEATHERMAP_API_KEY=your_api_key_here
```
- Mapbox API:
Sign up at Mapbox and get an API key.
In your .env file, add your Mapbox API key:
```
REACT_APP_MAPBOX_API_KEY=your_mapbox_api_key_here
```
4. Start the Development Server
To start the development server, run:
```
bash
npm start
```
This will open your app in the browser at http://localhost:3000.

Usage
1. Search for Location
In the search bar, enter the name of a city or location. The app will fetch the current weather data for the specified location and display it on the screen.

2. View Weather Details
The app will show the current temperature, humidity, wind speed, and a description of the weather conditions (e.g., clear sky, rain, snow).

3. View the Map
Once you enter a valid location, a map with the location’s coordinates will appear below the weather details. This map is powered by Mapbox and will center on the specified location.

4. Forecast
The app will show the 5-day weather forecast for the selected location. Each day includes the temperature, weather condition, and wind speed.

## Example Output

Once you search for a location (e.g., London), the app will display something like this:

- Location: London
- Temperature: 18°C
- Humidity: 65%
- Wind Speed: 12 km/h
- Weather Description: Clear Sky
And below that, a 5-day forecast such as:

|Date	|Temperature|	Weather |	Wind Speed|
|-------|-----------|-----------|--------------|
|Today	|18°C	|Clear Sky	|12 km/h
Tomorrow|	20°C|	Partly Cloudy	|14 km/h
Day 3	|15°C	|Rainy	|10 km/h|
Day 4	|17°C	|Cloudy	|13 km/h|
Day 5	|16°C	|Sunny	|8 km/h|


License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- OpenWeatherMap API: For providing weather data.
- Mapbox API: For providing interactive maps.
- React: For the front-end framework.
- Create React App: For the boilerplate setup.



