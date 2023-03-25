import {getApiData} from "./api";
import * as domloader from "./domloader";
import "./stylesheet.css";

getApiData();

// load core UI divs
domloader.loadCoreUi();

// load header Div elements
domloader.loadSearch();

// load current wether info div
domloader.currentWetherUI();