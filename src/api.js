/* eslint-disable import/prefer-default-export */
// Initialized objects ready to receive data
let current = {};
let forecast = {};
let location = {};

// Variable for C or F
let temp = "c";


export const getApiData = async (local) => {
   try{
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2231c78911074d8182d152508232503&q=${local}&days=7&aqi=yes&alerts=no`,{mode: 'cors'}
   );

   const data = await response.json();
   current = data.current;
   forecast = data.forecast;
   location = data.location;
   console.log(current);
   console.log(forecast);
   console.log(location);

} catch(error) {
    console.log(error);
}};

// function to inject data to the dom
const loadToDom = (selector,objPath) => {
    let injData = objPath

    selector.innerText = injData;
};

// funciton to load forecast day
export const forecastDay = (i) => {
    const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    
    const day = new Date().getDay() + i;
    return weekdays[day]
};

export const checkValid = () => {
    if (current === undefined) {
        alert("Locaiton not found");
    }
};



// load curent weather data to the DOM based off Fetch
const loadCurrentWetherData = () => {
    // query selectors for current weather divs
    const city = document.querySelector(".city");
    const country = document.querySelector(".country");
    const date = document.querySelector(".date");
    const time = document.querySelector(".time");
    const currentState = document.querySelector(".currentState");
    const currentIcon = document.querySelector(".currenticon");
    const currentTemp = document.querySelector(".currentTemp");
    const feelsLike = document.querySelector(".feelsLike");


    // Load current city
    loadToDom(city,location.name);
    // load Current country
    loadToDom(country,location.country);
    // load current date
    loadToDom(date,location.localtime);
    // load current state
    loadToDom(currentState,current.condition.text);
    // set current icon
    const weatherIcon = current.condition.icon
    currentIcon.src = weatherIcon;
    // set current temp
    loadToDom(currentTemp,current[`temp_${temp}`]);
    // sets feels like temp
    loadToDom(feelsLike,current[`feelslike_${temp}`]);
};
// load current location forecast data to DOm based off Fetch
const loadForecastData = () => {
    // for each to iterate through forecast data
    forecast.forecastday.forEach((item,i) => {
        // add day
        let weekDay = document.querySelector(`.weekDay${i}`);
        loadToDom(weekDay,forecastDay(i));
      
        // add icon
       let dayImg = document.querySelector(`.img${i}`);
       dayImg.src = item.day.condition.icon;

        // add avg temp forecast day
        let maxDiv = document.querySelector(`.maxTemp${i}`);
        loadToDom(maxDiv,item.day[`maxtemp_${temp}`]);

        // add avg temp forecast night
        let minDiv = document.querySelector(`.minTemp${i}`);
        loadToDom(minDiv,item.day[`mintemp_${temp}`]);
  
    });
}

// load Initial Data for default location
export const loadWeather = async (local) => {
    try {
        await getApiData(local);
        await checkValid();
        await loadCurrentWetherData();
        await loadForecastData();

    }catch(error) {
        console.log(error);
    }
}

// Function to load new location to Fetch
