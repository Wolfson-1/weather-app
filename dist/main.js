/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheet.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheet.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\nbody {\\n    margin: 0;\\n    color: whitesmoke;\\n    font-weight:400;\\n    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\\n}\\n  \\n  .content {\\n    width: 100vw;\\n    height: 100vh;\\n    display: grid;\\n    grid-template-columns: repeat(4, 1fr);\\n    grid-template-rows: repeat(4, 1fr);\\n    background-repeat: no-repeat no-repeat;\\n    background-position: center center;\\n    background-size:cover;\\n  }\\n\\n  .header {\\n    grid-column: 1 / 5;\\n    grid-row: 1 / 2;\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n  }\\n\\n  .searchDiv {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    gap:10px;\\n    padding-left: 3%;\\n    padding-top: 1%;\\n  }\\n\\n  .searchInput {\\n    padding: 5px;\\n    width: 450px;\\n    background: none;\\n    color: whitesmoke;\\n    border-width: 0 0 3px 0;\\n    border-color: whitesmoke;\\n  }\\n\\n  ::placeholder {\\n    color: whitesmoke;\\n  }\\n\\n  .searchButton {\\n    padding: 5px;\\n    width: 100px;\\n    border: none;\\n    border-radius: 3px;\\n    color: rgb(95, 92, 92);\\n    font-weight: bold;\\n    background-color: rgba(245, 245, 245, 0.536);\\n  }\\n\\n  .tempUnitButton {\\n    align-self: flex-start;\\n    margin: 2%;\\n    width: 70px;\\n    height: 40px;\\n    border: none;\\n    border-radius: 10px;\\n    color: rgb(95, 92, 92);\\n    font-weight: bold;\\n    font-size:x-large;\\n    background-color: rgba(245, 245, 245, 0.536);\\n  }\\n\\n  .currentWeather {\\n    grid-column: 1 / 2;\\n    grid-row: 2 / 4;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    gap: 10px;\\n    padding-left: 20%;\\n    padding-bottom: 15%;\\n  }\\n\\n  .locationDiv {\\n    display: flex;\\n    gap: 4px;\\n    }\\n\\n    .locationDiv > div {\\n      font-size:larger;\\n    }\\n\\n    .tempDiv {\\n      display: flex;\\n      flex-direction: column;\\n      gap: 10px;\\n    }\\n\\n    .tempDiv > img {\\n      height: 40%;\\n      width: 40%;\\n    }\\n\\n    .tempDiv > * {\\n      font-size: 30px;\\n    }\\n\\n  .dayForecast {\\n    grid-column: 1 / 5;\\n    grid-row: 4 / 5;\\n    display: grid;\\n    grid-template-columns: repeat(7,1fr);\\n    padding-bottom: 4%;\\n    \\n  }\\n\\n  .dayForecast > div {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 3px;\\n  }\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather-app/./src/stylesheet.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/stylesheet.css":
/*!****************************!*\
  !*** ./src/stylesheet.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./stylesheet.css */ \"./node_modules/css-loader/dist/cjs.js!./src/stylesheet.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_stylesheet_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://weather-app/./src/stylesheet.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeTempUnit\": () => (/* binding */ changeTempUnit),\n/* harmony export */   \"checkValid\": () => (/* binding */ checkValid),\n/* harmony export */   \"forecastDay\": () => (/* binding */ forecastDay),\n/* harmony export */   \"getApiData\": () => (/* binding */ getApiData),\n/* harmony export */   \"loadWeather\": () => (/* binding */ loadWeather)\n/* harmony export */ });\n/* eslint-disable import/prefer-default-export */\n// Initialized objects ready to receive data\nlet current = {};\nlet forecast = {};\nlet location = {};\n\n// Variable for C or F\nlet temp = \"c\";\n\n\nconst getApiData = async (local) => {\n   try{\n    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2231c78911074d8182d152508232503&q=${local}&days=7&aqi=yes&alerts=no`,{mode: 'cors'}\n   );\n\n   const data = await response.json();\n   current = data.current;\n   forecast = data.forecast;\n   location = data.location;\n   console.log(current);\n   console.log(forecast);\n   console.log(location);\n\n} catch(error) {\n    console.log(error);\n}};\n\n// function to inject data to the dom\nconst loadToDom = (selector,objPath) => {\n    let injData = objPath\n\n    selector.innerText = injData;\n};\n\n// funciton to load forecast day\nconst forecastDay = (i) => {\n    const weekdays = [\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\",\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\"]\n    \n    const day = new Date().getDay() + i;\n    return weekdays[day]\n};\n\nconst checkValid = () => {\n    if (current === undefined) {\n        alert(\"Locaiton not found\");\n    }\n};\n\n\n// load curent weather data to the DOM based off Fetch\nconst loadCurrentWetherData = () => {\n    // query selectors for current weather divs\n    const city = document.querySelector(\".city\");\n    const country = document.querySelector(\".country\");\n    const date = document.querySelector(\".date\");\n    const time = document.querySelector(\".time\");\n    const currentState = document.querySelector(\".currentState\");\n    const currentIcon = document.querySelector(\".currenticon\");\n    const currentTemp = document.querySelector(\".currentTemp\");\n    const feelsLike = document.querySelector(\".feelsLike\");\n\n\n    // Load current city\n    loadToDom(city,`${location.name},`);\n    // load Current country\n    loadToDom(country,location.country);\n    // load current date\n    loadToDom(date,location.localtime);\n    // load current state\n    loadToDom(currentState,current.condition.text);\n    // set current icon\n    const weatherIcon = current.condition.icon\n    currentIcon.src = weatherIcon;\n    // set current temp\n    loadToDom(currentTemp,`Current: ${current[`temp_${temp}`]} ${temp.toUpperCase()}°`);\n    // sets feels like temp\n    loadToDom(feelsLike, `Feels Like: ${current[`feelslike_${temp}`]} ${temp.toUpperCase()}°`);\n};\n// load current location forecast data to DOm based off Fetch\nconst loadForecastData = () => {\n    // for each to iterate through forecast data\n    forecast.forecastday.forEach((item,i) => {\n        // add day\n        let weekDay = document.querySelector(`.weekDay${i}`);\n        loadToDom(weekDay,forecastDay(i));\n      \n        // add icon\n       let dayImg = document.querySelector(`.img${i}`);\n       dayImg.src = item.day.condition.icon;\n\n        // add avg temp forecast day\n        let maxDiv = document.querySelector(`.maxTemp${i}`);\n        loadToDom(maxDiv,`${item.day[`maxtemp_${temp}`]} ${temp.toUpperCase()}°`);\n\n        // add avg temp forecast night\n        let minDiv = document.querySelector(`.minTemp${i}`);\n        loadToDom(minDiv,`${item.day[`mintemp_${temp}`]} ${temp.toUpperCase()}°`);\n  \n    });\n}\n\n// function to change temp units & reload\nconst changeTempUnit = () => {\n    if (temp === \"c\") {\n        temp = \"f\";\n    } else if (temp === \"f\") {\n        temp = \"c\";\n    };\n\n    loadCurrentWetherData();\n    loadForecastData();\n};\n\n\n// load Initial Data for default location\nconst loadWeather = async (local) => {\n    try {\n        await getApiData(local);\n        await checkValid();\n        await loadCurrentWetherData();\n        await loadForecastData();\n\n    }catch(error) {\n        console.log(error);\n    }\n}\n\n// Function to load new location to Fetch\n\n\n//# sourceURL=webpack://weather-app/./src/api.js?");

/***/ }),

/***/ "./src/domloader.js":
/*!**************************!*\
  !*** ./src/domloader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LoadBackground\": () => (/* binding */ LoadBackground),\n/* harmony export */   \"currentWetherUI\": () => (/* binding */ currentWetherUI),\n/* harmony export */   \"dailyForecastUI\": () => (/* binding */ dailyForecastUI),\n/* harmony export */   \"loadCoreUi\": () => (/* binding */ loadCoreUi),\n/* harmony export */   \"loadSearch\": () => (/* binding */ loadSearch)\n/* harmony export */ });\n/* harmony import */ var _background_imgs_day_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./background-imgs/day.jpg */ \"./src/background-imgs/day.jpg\");\n/* harmony import */ var _background_imgs_night_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./background-imgs/night.jpg */ \"./src/background-imgs/night.jpg\");\n/* harmony import */ var _background_imgs_sunset_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background-imgs/sunset.jpg */ \"./src/background-imgs/sunset.jpg\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n\n\n\n\n\nconst createElement = (type, tag, inner, parent) => {\n    let el = document.createElement(type);\n    el.classList.add(tag);\n    el.innerText = inner;\n    parent.appendChild(el);\n  };\n\n  // function for loading backjground image in correlation with time of day\nconst LoadBackground = () => {\n    // get current time\n    const Currtime = new Date().toString().split(\" \")[4];\n    // get current hour\n    const currentHour = Currtime.split(\":\")[0];\n\n    const content = document.querySelector(\".content\");\n\n    content.style.backgroundImage = `url('${_background_imgs_day_jpg__WEBPACK_IMPORTED_MODULE_0__}')`;\n    // set background based of time of day\n    if (currentHour >= 0 && currentHour < 7 || currentHour >= 19) {\n        content.style.backgroundImage = `url('${_background_imgs_night_jpg__WEBPACK_IMPORTED_MODULE_1__}')`;\n    } else if (currentHour >= 7 && currentHour < 16) {\n        content.style.backgroundImage = `url('${_background_imgs_day_jpg__WEBPACK_IMPORTED_MODULE_0__}')`;\n    } else if (currentHour >= 16 && currentHour < 19) {\n        content.style.backgroundImage = `url('${_background_imgs_sunset_jpg__WEBPACK_IMPORTED_MODULE_2__}')`;\n    };\n};\n\n\n// function to create core div areas\nconst loadCoreUi = () => {\n    const content = document.querySelector(\".content\");\n    // loads background image for appropriate time\n    LoadBackground();\n\n    // create key divs for UI\n    createElement(\"div\",\"header\",null,content);\n    createElement(\"div\",\"currentWeather\",null,content);\n    createElement(\"div\",\"dayForecast\",null,content);\n};\n\n// function to load header content\nconst loadSearch = () => {\n    // query selector for header div\n    const header = document.querySelector(\".header\");\n\n    // create search div\n    createElement(\"div\",\"searchDiv\",null,header);\n    const searchDiv = document.querySelector(\".searchDiv\");\n\n    // Create and append Searchbar\n    createElement(\"input\",\"searchInput\",null,searchDiv);\n    const searchInput = document.querySelector(\".searchInput\");\n    searchInput.type = \"text\";\n    searchInput.placeholder = `City e.g:\"New York, Paris, Peckham...\"`;\n\n    // Search button\n    createElement(\"button\",\"searchButton\",\"Search\",searchDiv);\n    const searchButton = document.querySelector(\".searchButton\");\n    \n    // Toggle button for C & F change\n    createElement(\"button\",\"tempUnitButton\",\"C°\",header);\n    const tempUnitButton = document.querySelector(\".tempUnitButton\");\n    \n    // event listener for search button\n    searchButton.addEventListener(\"click\", () => {\n        if (searchInput.value === \"\") {\n            alert(\"Please enter a location\");\n        } else {\n            (0,_api__WEBPACK_IMPORTED_MODULE_3__.loadWeather)(searchInput.value);    \n        };\n        searchInput.value = \"\";\n    });\n\n    // event listener for change temp button\n    tempUnitButton.addEventListener(\"click\", () => {\n        if (tempUnitButton.innerText === \"C°\") {\n            tempUnitButton.innerText = \"F°\";\n        } else if (tempUnitButton.innerText === \"F°\") {\n            tempUnitButton.innerText = \"C°\";\n        }\n        \n        (0,_api__WEBPACK_IMPORTED_MODULE_3__.changeTempUnit)();\n    })\n};\n\nconst currentWetherUI = () => {\n    // query selector for current weather div\n    const currentWeather = document.querySelector(\".currentWeather\");\n\n    // elements for current weather div\n\n    // City & country div\n    createElement(\"div\",\"locationDiv\",null,currentWeather);\n    const locationDiv = document.querySelector(\".locationDiv\");\n    // City\n    createElement(\"div\",\"city\",null,locationDiv);\n    // Country\n    createElement(\"div\",\"country\",null,locationDiv);\n    \n    // Date & time div\n    createElement(\"div\",\"dateTimeDiv\",null,currentWeather);\n    const dateTimeDiv = document.querySelector(\".dateTimeDiv\");\n    // Date\n    createElement(\"div\",\"date\",null,dateTimeDiv);\n    // Time\n    createElement(\"div\",\"time\",null,dateTimeDiv);\n    \n    // Temperature Div\n    createElement(\"div\",\"tempDiv\",null,currentWeather);\n    const tempDiv = document.querySelector(\".tempDiv\");\n\n    // weather statement \n    createElement(\"div\",\"currentState\",null,tempDiv);\n    // picture for temp\n    createElement(\"img\",\"currenticon\",null,tempDiv);\n    // Temperature \n    createElement(\"div\",\"currentTemp\",null,tempDiv);\n    // feels like\n    createElement(\"div\",\"feelsLike\",null,tempDiv);\n};\n\nconst dailyForecastUI = () => {\n    const dayForecast = document.querySelector(\".dayForecast\");\n    \n    // loop to create day divs\n    for (let i = 0; i < 7; i++) {\n        // create div\n        const dailyDiv = document.createElement(\"div\");\n        dailyDiv.classList.add(`day${i}`);\n        \n        // forecast day\n        createElement(\"div\",`weekDay${i}`,null,dailyDiv);\n        // weather symbol \n        createElement(\"img\",`img${i}`,null,dailyDiv);\n        // day temp\n        createElement(\"div\",`maxTemp${i}`,null,dailyDiv);\n        // night temp\n        createElement(\"div\",`minTemp${i}`,null,dailyDiv);\n\n        // append to div\n        dayForecast.appendChild(dailyDiv);\n    }; \n}\n\n\n//# sourceURL=webpack://weather-app/./src/domloader.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api.js\");\n/* harmony import */ var _domloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domloader */ \"./src/domloader.js\");\n/* harmony import */ var _stylesheet_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stylesheet.css */ \"./src/stylesheet.css\");\n\n\n\n\n// load core UI divs\n_domloader__WEBPACK_IMPORTED_MODULE_1__.loadCoreUi();\n\n// load header Div elements\n_domloader__WEBPACK_IMPORTED_MODULE_1__.loadSearch();\n\n// load current wether info div\n_domloader__WEBPACK_IMPORTED_MODULE_1__.currentWetherUI();\n\n// load daily forecast containers\n_domloader__WEBPACK_IMPORTED_MODULE_1__.dailyForecastUI();\n\n// load default weather data for London\n_api__WEBPACK_IMPORTED_MODULE_0__.loadWeather(\"London\");\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/background-imgs/day.jpg":
/*!*************************************!*\
  !*** ./src/background-imgs/day.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d8e3d2f5b02b76c03206.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/background-imgs/day.jpg?");

/***/ }),

/***/ "./src/background-imgs/night.jpg":
/*!***************************************!*\
  !*** ./src/background-imgs/night.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"772019fb4fb92776d0b5.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/background-imgs/night.jpg?");

/***/ }),

/***/ "./src/background-imgs/sunset.jpg":
/*!****************************************!*\
  !*** ./src/background-imgs/sunset.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2d17823529df7d80ceb4.jpg\";\n\n//# sourceURL=webpack://weather-app/./src/background-imgs/sunset.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;