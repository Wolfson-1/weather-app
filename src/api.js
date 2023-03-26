/* eslint-disable import/prefer-default-export */
// Initialized objects ready to receive data
let current = {};
let forecast = {};
export let location = {};

// Variable for C or F
let temp = "C";


export const getApiData = async () => {
   try{
    const response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=2231c78911074d8182d152508232503&q=London&days=7&aqi=yes&alerts=no',{mode: 'cors'}
   );

   const data = await response.json();
   console.log(data);
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
const loadToDom = async (selector,obj,path) => {
    let injData = obj[path]

    selector.innerText = injData;
};

export const loadCurrentWetherData = () => {
    // query selectors for current weather divs
    const city = document.querySelector(".city");
    const country = document.querySelector(".country");
    const date = document.querySelector(".date");
    const time = document.querySelector(".time");

    // Load current city
    loadToDom(city,location,"country");


    // load data paths to correct div
    // inject data to DOM
}