

const createElement = (type, tag, inner, parent) => {
    let el = document.createElement(type);
    el.classList.add(tag);
    el.innerHTML = inner;
    parent.appendChild(el);
  };


// function to create core div areas
export const loadCoreUi = () => {
    const content = document.querySelector(".content");

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
        // event listener for search bar
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
    // Temperature 
    createElement("div","currentTemp",null,tempDiv);
    // picture for temp
    createElement("picture","currenticon",null,tempDiv);
    // feels like
    createElement("picture","feelsLike",null,tempDiv);
}