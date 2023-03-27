import * as api from "./api";
import * as domloader from "./domloader";
import "./stylesheet.css";



// load core UI divs
domloader.loadCoreUi();

// load header Div elements
domloader.loadSearch();

// load current wether info div
domloader.currentWetherUI();

// load daily forecast containers
domloader.dailyForecastUI();

// load default weather data for London
api.loadWeather("London");

api.forecastDay();