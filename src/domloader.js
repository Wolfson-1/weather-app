import dayImg from "./background-imgs/day.jpg";
import nightImg from "./background-imgs/night.jpg";
import sunsetImg from "./background-imgs/sunset.jpg";
import {loadWeather} from "./api";

const createElement = (type, tag, inner, parent) => {
    let el = document.createElement(type);
    el.classList.add(tag);
    el.innerHTML = inner;
    parent.appendChild(el);
  };

  // function for loading backjground image in correlation with time of day
export const LoadBackground = () => {
    // get current time
    const Currtime = new Date().toString().split(" ")[4];
    // get current hour
    const currentHour = Currtime.split(":")[0];

    const content = document.querySelector(".content");

    content.style.backgroundImage = `url('${dayImg}')`;
    // set background based of time of day
    if (currentHour >= 0 && currentHour < 7 || currentHour >= 19) {
        content.style.backgroundImage = `url('${nightImg}')`;
    } else if (currentHour >= 7 && currentHour < 16) {
        content.style.backgroundImage = `url('${dayImg}')`;
    } else if (currentHour >= 16 && currentHour < 19) {
        content.style.backgroundImage = `url('${sunsetImg}')`;
    }

};


// function to create core div areas
export const loadCoreUi = () => {
    const content = document.querySelector(".content");
    // loads background image for appropriate time
    LoadBackground();

    // create key divs for UI
    createElement("div","header",null,content);
    createElement("div","currentWeather",null,content);
    createElement("div","dayForecast",null,content);
};

// function to load header content
export const loadSearch = () => {
    // query selector for header div
    const header = document.querySelector(".header");

    // Create and append Searchbar
    createElement("input","searchInput",null,header);
    const searchInput = document.querySelector(".searchInput");
    searchInput.type = "text";
    searchInput.placeholder = `City e.g:"New York, Paris, Peckham..."`;

    // Search button
    createElement("button","searchButton","Search",header);
    const searchButton = document.querySelector(".searchButton");
    searchButton.addEventListener("click", () => {
        
        if (searchInput.value === "") {
            alert("Please enter a location");
        } else {
            loadWeather(searchInput.value);    
        };

        searchInput.value = "";
    });

    // Make toggle button for C & F
};

export const currentWetherUI = () => {
    // query selector for current weather div
    const currentWeather = document.querySelector(".currentWeather");

    // elements for current weather div

    // City & country div
    createElement("div","locationDiv",null,currentWeather);
    const locationDiv = document.querySelector(".locationDiv");
    // City
    createElement("div","city",null,locationDiv);
    // Country
    createElement("div","country",null,locationDiv);
    
    // Date & time div
    createElement("div","dateTimeDiv",null,currentWeather);
    const dateTimeDiv = document.querySelector(".dateTimeDiv");
    // Date
    createElement("div","date",null,dateTimeDiv);
    // Time
    createElement("div","time",null,dateTimeDiv);
    
    // Temperature Div
    createElement("div","tempDiv",null,currentWeather);
    const tempDiv = document.querySelector(".tempDiv");

    // weather statement 
    createElement("div","currentState",null,tempDiv);
    // picture for temp
    createElement("img","currenticon",null,tempDiv);
    // Temperature 
    createElement("div","currentTemp",null,tempDiv);
    // feels like
    createElement("div","feelsLike",null,tempDiv);
};

export const dailyForecastUI = () => {
    const dayForecast = document.querySelector(".dayForecast");
    
    // loop to create day divs
    for (let i = 0; i < 7; i++) {
        // create div
        const dailyDiv = document.createElement("div");
        dailyDiv.classList.add(`day${i}`);
        
        // forecast day
        createElement("div",`weekDay${i}`,null,dailyDiv);
        // weather symbol 
        createElement("img",`img${i}`,null,dailyDiv);
        // day temp
        createElement("div",`maxTemp${i}`,null,dailyDiv);
        // night temp
        createElement("div",`minTemp${i}`,null,dailyDiv);

        // append to div
        dayForecast.appendChild(dailyDiv);
    }; 
}
