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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.navigation {\\r\\n  width: 100%;\\r\\n  min-height: 50px;\\r\\n  border-bottom: 2px solid black;\\r\\n  position: fixed;\\r\\n}\\r\\n\\r\\n.flex-display {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\n.nav-list {\\r\\n  justify-content: space-around;\\r\\n  list-style-type: none;\\r\\n  padding: 12px  0 0 0;\\r\\n  font-size: 24px;\\r\\n}\\r\\n\\r\\n.nav-link {\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  position: fixed;\\r\\n  left: 0;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n  margin: auto;\\r\\n  height: 15%;\\r\\n}\\r\\n\\r\\n.footerLicenseDiv {\\r\\n  width: 100%;\\r\\n  border: 1px solid;\\r\\n  height: 66%;\\r\\n}\\r\\n\\r\\n.footerLicense {\\r\\n  margin: 1.5% 0 1.5% 2%;\\r\\n}\\r\\n\\r\\n.footerImageDiv {\\r\\n  background-color: rgba(128, 128, 128, 0.5);\\r\\n  border: 1px solid;\\r\\n  height: 33%;\\r\\n  width: 100%;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.footerImage {\\r\\n  height: 80%;\\r\\n  float: right;\\r\\n  padding: 5px;\\r\\n  transform: rotate(45deg);\\r\\n}\\r\\n\\r\\n.mainBody {\\r\\n  position: absolute;\\r\\n  display: grid;\\r\\n  grid-template-columns: auto auto auto;\\r\\n  grid-template-rows: 50% 50%;\\r\\n  grid-column-gap: 10%;\\r\\n  padding: 10px;\\r\\n  margin: 0 3% 0 3%;\\r\\n  margin-top: 5%;\\r\\n  width: 90%;\\r\\n  height: 70%;\\r\\n}\\r\\n\\r\\n@media (max-width: 782px) {\\r\\n  .mainBody {\\r\\n    margin-top: 10%;\\r\\n  }\\r\\n}\\r\\n\\r\\n.gridDiv {\\r\\n  margin: auto;\\r\\n  height: 80%;\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.pokemonImage {\\r\\n  height: 30%;\\r\\n  width: 30%;\\r\\n}\\r\\n\\r\\n.infoDiv {\\r\\n  padding: 10px;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  height: 20px;\\r\\n  width: 80%;\\r\\n}\\r\\n\\r\\n.pokemonName {\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.like {\\r\\n  height: 80%;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.likeCount {\\r\\n  margin-left: auto;\\r\\n  margin-right: 20%;\\r\\n  font-size: 14px;\\r\\n}\\r\\n\\r\\n.commentButton {\\r\\n  margin: auto;\\r\\n  background-color: white;\\r\\n  line-height: 18px;\\r\\n  font-weight: bold;\\r\\n  box-shadow: 2px 2px;\\r\\n  padding: 0 10px 0 10px;\\r\\n  transition-duration: 0.4s;\\r\\n}\\r\\n\\r\\n.commentButton:hover {\\r\\n  color: rgba(51, 49, 49, 0.507);\\r\\n  transform: scale(1.1);\\r\\n  border: 1px solid grey;\\r\\n}\\r\\n\\r\\n.commentButton:active {\\r\\n  transform: scale(0.9);\\r\\n}\\r\\n\\r\\n.reservationButton {\\r\\n  margin: auto;\\r\\n  background-color: white;\\r\\n  line-height: 18px;\\r\\n  font-weight: bold;\\r\\n  box-shadow: 2px 2px;\\r\\n  padding: 0 10px 0 10px;\\r\\n  transition-duration: 0.4s;\\r\\n}\\r\\n\\r\\n.reservationButton:hover {\\r\\n  color: rgba(51, 49, 49, 0.507);\\r\\n  transform: scale(1.1);\\r\\n  border: 1px solid grey;\\r\\n}\\r\\n\\r\\n.reservationButton:active {\\r\\n  transform: scale(0.9);\\r\\n}\\r\\n\\r\\n.pop-up {\\r\\n  width: 40%;\\r\\n  margin: 60px 30% 0 30%;\\r\\n  border: 2px black solid;\\r\\n  height: 75vh;\\r\\n  position: absolute;\\r\\n  z-index: 2;\\r\\n  background-color: #fff;\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n.popUp-image {\\r\\n  width: 100%;\\r\\n  height: 22vh;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.image-holder {\\r\\n  margin: 20px 20% 0 20%;\\r\\n}\\r\\n\\r\\n.popUp-title {\\r\\n  text-align: center;\\r\\n  margin: 0 0 10px 0;\\r\\n}\\r\\n\\r\\n.properties-holder {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  width: 70%;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.comment-title {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n.comments-holder {\\r\\n  width: 70%;\\r\\n  margin: auto;\\r\\n  height: 38px;\\r\\n  overflow-y: hidden;\\r\\n}\\r\\n\\r\\n.addComment-title {\\r\\n  text-align: center;\\r\\n  margin: 0 0 6px 0;\\r\\n}\\r\\n\\r\\n.addComment-form {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 70%;\\r\\n  margin: auto;\\r\\n}\\r\\n\\r\\n.name {\\r\\n  margin: 0 0 6px 0;\\r\\n  width: 40%;\\r\\n  padding: 0 5px 0 5px;\\r\\n  border: 2px solid black;\\r\\n}\\r\\n\\r\\n.message {\\r\\n  margin: 0 0 6px 0;\\r\\n  width: 70%;\\r\\n  padding: 5px;\\r\\n  border: 2px solid black;\\r\\n}\\r\\n\\r\\n.add-comment {\\r\\n  width: 50%;\\r\\n  height: 30px;\\r\\n  border: 2px solid black;\\r\\n  box-shadow: 0 5px 5px 0;\\r\\n}\\r\\n\\r\\n.close-popUp {\\r\\n  font-size: 50px;\\r\\n  font-weight: bold;\\r\\n  float: right;\\r\\n  margin: 0 5% 0 0;\\r\\n}\\r\\n\\r\\n.close-popUp:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://capston-project-ii/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://capston-project-ii/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://capston-project-ii/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://capston-project-ii/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://capston-project-ii/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://capston-project-ii/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://capston-project-ii/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://capston-project-ii/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://capston-project-ii/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://capston-project-ii/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayHome_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayHome.js */ \"./src/modules/displayHome.js\");\n/* harmony import */ var _modules_pokemonCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/pokemonCounter.js */ \"./src/modules/pokemonCounter.js\");\n\r\n\r\n\r\n\r\nconst component = () => {\r\n  (0,_modules_displayHome_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  setTimeout(() => {\r\n    const pokemonCount = document.querySelectorAll('.gridDiv').length;\r\n    const element = document.getElementById('nav-li2');\r\n    (0,_modules_pokemonCounter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(pokemonCount, element);\r\n  }, 500);\r\n};\r\n\r\ndocument.body.appendChild(component());\n\n//# sourceURL=webpack://capston-project-ii/./src/index.js?");

/***/ }),

/***/ "./src/modules/addLike.js":
/*!********************************!*\
  !*** ./src/modules/addLike.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst addLike = async (pokemonName) => {\r\n  const values = JSON.stringify({\r\n    item_id: pokemonName,\r\n  });\r\n  await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TV7hTpGuCrnTLj903g8c/likes/', {\r\n    method: 'POST',\r\n    headers: { 'Content-Type': 'application/json' },\r\n    body: values,\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLike);\n\n//# sourceURL=webpack://capston-project-ii/./src/modules/addLike.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = (res) => {\r\n  const commentNumber = `comments(${res.length ? res.length : 0})`;\r\n  return commentNumber;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\n\n//# sourceURL=webpack://capston-project-ii/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"allComments\": () => (/* binding */ allComments),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\nconst allComments = async (item_id) => {\r\n  try {\r\n    const results = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TV7hTpGuCrnTLj903g8c/comments?item_id=${item_id}`);\r\n    const data = await results.json();\r\n    return data;\r\n  } catch (error) {\r\n    return error;\r\n  }\r\n};\r\nconst postComment = async (body) => {\r\n  try {\r\n    const results = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TV7hTpGuCrnTLj903g8c/comments', {\r\n      method: 'POST',\r\n      headers: { 'Content-Type': 'application/json' },\r\n      body: JSON.stringify(body),\r\n    });\r\n    return results;\r\n  } catch (error) {\r\n    return error;\r\n  }\r\n};\n\n//# sourceURL=webpack://capston-project-ii/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/displayHome.js":
/*!************************************!*\
  !*** ./src/modules/displayHome.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_heart_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/heart.png */ \"./src/images/heart.png\");\n/* harmony import */ var _fetchPokemon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchPokemon.js */ \"./src/modules/fetchPokemon.js\");\n/* harmony import */ var _images_pikachu_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/pikachu.jpeg */ \"./src/images/pikachu.jpeg\");\n/* harmony import */ var _images_blackpikachu_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/blackpikachu.jpg */ \"./src/images/blackpikachu.jpg\");\n/* harmony import */ var _images_dinasaur_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/dinasaur.jpg */ \"./src/images/dinasaur.jpg\");\n/* harmony import */ var _images_jigglypuff_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/jigglypuff.jpg */ \"./src/images/jigglypuff.jpg\");\n/* harmony import */ var _images_teddybear_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/teddybear.jpg */ \"./src/images/teddybear.jpg\");\n/* harmony import */ var _images_teddybear2_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/teddybear2.jpg */ \"./src/images/teddybear2.jpg\");\n/* harmony import */ var _addLike_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./addLike.js */ \"./src/modules/addLike.js\");\n/* harmony import */ var _fetchLikes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetchLikes.js */ \"./src/modules/fetchLikes.js\");\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/modules/commentCounter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst pokemonImages = [_images_pikachu_jpeg__WEBPACK_IMPORTED_MODULE_2__, _images_blackpikachu_jpg__WEBPACK_IMPORTED_MODULE_3__, _images_dinasaur_jpg__WEBPACK_IMPORTED_MODULE_4__, _images_jigglypuff_jpg__WEBPACK_IMPORTED_MODULE_5__, _images_teddybear_jpg__WEBPACK_IMPORTED_MODULE_6__, _images_teddybear2_jpg__WEBPACK_IMPORTED_MODULE_7__];\r\n\r\nlet loop = 0 - 1;\r\n\r\nconst displayHome = () => {\r\n  const mainBody = document.createElement('div');\r\n  mainBody.classList.add('mainBody');\r\n\r\n  (0,_fetchPokemon_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n    .then((response) => {\r\n      response.forEach((pokemon) => {\r\n        // eslint-disable-next-line no-plusplus\r\n        loop++;\r\n        const gridDiv1 = document.createElement('div');\r\n        gridDiv1.classList.add('gridDiv');\r\n\r\n        const image = document.createElement('img');\r\n        image.src = pokemonImages[loop];\r\n        image.classList.add('pokemonImage');\r\n\r\n        const infoDiv = document.createElement('div');\r\n        infoDiv.classList.add('infoDiv');\r\n\r\n        const pokemonName = document.createElement('p');\r\n        pokemonName.innerText = pokemon.name;\r\n        pokemonName.classList.add('pokemonName');\r\n\r\n        const likeCount = document.createElement('p');\r\n        (0,_fetchLikes_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])()\r\n          .then((response) => {\r\n            const pokemonObject = (response.find((o) => o.item_id === pokemonName.innerText));\r\n            likeCount.innerText = `${pokemonObject.likes} likes`;\r\n          });\r\n        likeCount.classList.add('likeCount');\r\n\r\n        const like = document.createElement('img');\r\n        like.src = _images_heart_png__WEBPACK_IMPORTED_MODULE_0__;\r\n        like.classList.add('like');\r\n        like.addEventListener('click', () => {\r\n          (0,_addLike_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(pokemonName.innerText);\r\n          const myMethod = () => {\r\n            (0,_fetchLikes_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])()\r\n              .then((response) => {\r\n                const pokemonObject = (response.find((o) => o.item_id === pokemonName.innerText));\r\n                likeCount.innerText = '';\r\n                likeCount.innerText = `${pokemonObject.likes} likes`;\r\n              });\r\n          };\r\n          setTimeout(myMethod, 500);\r\n        });\r\n\r\n        infoDiv.appendChild(pokemonName);\r\n        infoDiv.appendChild(like);\r\n\r\n        const commentButton = document.createElement('button');\r\n        commentButton.classList.add('commentButton');\r\n        commentButton.innerText = 'Comment';\r\n        const createCommentTag = (commentItem) => {\r\n          const paragraph = document.createElement('p');\r\n          paragraph.innerText = `${commentItem.creation_date} : ${commentItem.username} : ${commentItem.comment}`;\r\n          return paragraph;\r\n        };\r\n        const retrieveComments = (item_id) => {\r\n          (0,_comments_js__WEBPACK_IMPORTED_MODULE_10__.allComments)(item_id)\r\n            .then((res) => {\r\n              res.sort((a, b) => (a.creation_date < b.creation_date ? 1 : -1));\r\n              document.getElementById('comment-title').innerText = (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"])(res);\r\n              document.getElementById('comments-holder').innerHTML = '';\r\n              res.map((commentItem) => (\r\n                document.getElementById('comments-holder').appendChild(createCommentTag(commentItem))\r\n              ));\r\n            });\r\n        };\r\n\r\n        commentButton.addEventListener('click', () => {\r\n          const popUp = document.createElement('div');\r\n          popUp.classList.add('pop-up');\r\n          popUp.innerHTML = `\r\n          <span class=\"closee\" id=\"close\"><p class=\"close-popUp\">&times;</p></span>\r\n          <div class=\"image-holder\">\r\n              <img src=\"${commentButton.previousElementSibling.previousElementSibling.previousElementSibling.src}\" alt=\"\" class=\"popUp-image\">\r\n          </div>\r\n          <h2 class=\"popUp-title\" id=\"pop-up-title\">${pokemon.name}</h2>\r\n          <div class=\"properties-holder\">\r\n              <div class=\"properties properties-left\">\r\n                  <p class=\"property property-one\">Fuel: 2000</p>\r\n                  <p class=\"property property-two\">Weight: 2000</p>\r\n              </div>\r\n              <div class=\"properties properties-right\">\r\n                  <p class=\"property property-one\">Lenght: 2000</p>\r\n                  <p class=\"property property-two\">Power: 2000</p>\r\n              </div>\r\n          </div>\r\n          <h3 class=\"comment-title\" id=\"comment-title\"> ${retrieveComments(pokemon.name)}</h3>\r\n          <div class=\"comments-holder\" id=\"comments-holder\">\r\n              \r\n          </div>\r\n          <h3 class=\"addComment-title\">Add comment</h3>\r\n          <form class=\"addComment-form\" id=\"comment-form\">\r\n              <input type=\"text\" class=\"name\" id=\"name\" placeholder=\"Your Name\" required>\r\n              <textarea id=\"message\" cols=\"30\" rows=\"5\" class=\"message\" placeholder=\"Your insights\" required></textarea>\r\n              <button type=\"submit\" id=\"add-comment\" class=\"add-comment\">Add comment</button>\r\n          </form>\r\n          `;\r\n          document.body.appendChild(popUp);\r\n          popUp.style.display = 'block';\r\n\r\n          const form = document.getElementById('comment-form');\r\n          form.addEventListener('submit', (event) => {\r\n            event.preventDefault();\r\n            const pokename = document.getElementById('pop-up-title').innerText;\r\n\r\n            const username = document.getElementById('name').value;\r\n            const message = document.getElementById('message').value;\r\n            const body = {\r\n              item_id: pokename,\r\n              comment: message,\r\n              username,\r\n            };\r\n            (0,_comments_js__WEBPACK_IMPORTED_MODULE_10__.postComment)(body).then(() => {\r\n              retrieveComments(pokename);\r\n              document.getElementById('name').value = '';\r\n              document.getElementById('message').value = '';\r\n            });\r\n          });\r\n\r\n          document.addEventListener('click', (e) => {\r\n            if (e.target.classList.contains('close-popUp')) {\r\n              const popUp = document.querySelector('.pop-up');\r\n              popUp.style.display = 'none';\r\n              window.location.reload();\r\n            }\r\n          });\r\n        });\r\n\r\n        const reservationButton = document.createElement('button');\r\n        reservationButton.classList.add('reservationButton');\r\n        reservationButton.innerText = 'Reservation';\r\n\r\n        gridDiv1.appendChild(image);\r\n        gridDiv1.appendChild(infoDiv);\r\n        gridDiv1.appendChild(likeCount);\r\n        gridDiv1.appendChild(commentButton);\r\n        gridDiv1.appendChild(reservationButton);\r\n\r\n        mainBody.appendChild(gridDiv1);\r\n        document.body.appendChild(mainBody);\r\n      });\r\n    });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayHome);\n\n//# sourceURL=webpack://capston-project-ii/./src/modules/displayHome.js?");

/***/ }),

/***/ "./src/modules/fetchLikes.js":
/*!***********************************!*\
  !*** ./src/modules/fetchLikes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchLikes = async () => {\r\n  const response = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/TV7hTpGuCrnTLj903g8c/likes/');\r\n  const results = await response.json();\r\n  return results;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchLikes);\n\n//# sourceURL=webpack://capston-project-ii/./src/modules/fetchLikes.js?");

/***/ }),

/***/ "./src/modules/fetchPokemon.js":
/*!*************************************!*\
  !*** ./src/modules/fetchPokemon.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst fetchPokemon = async () => {\r\n  const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=6&limit=6');\r\n  const results = await response.json();\r\n  return results.results;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchPokemon);\n\n//# sourceURL=webpack://capston-project-ii/./src/modules/fetchPokemon.js?");

/***/ }),

/***/ "./src/modules/pokemonCounter.js":
/*!***************************************!*\
  !*** ./src/modules/pokemonCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst pokemonCounter = (pokemonCount, element) => {\r\n  const newText = `Pokemon ${pokemonCount}`;\r\n  element.innerText = newText;\r\n  element.style.fontWeight = 'bold';\r\n  return newText;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pokemonCounter);\n\n//# sourceURL=webpack://capston-project-ii/./src/modules/pokemonCounter.js?");

/***/ }),

/***/ "./src/images/blackpikachu.jpg":
/*!*************************************!*\
  !*** ./src/images/blackpikachu.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1e0ca5ef433d3a7c2e3a.jpg\";\n\n//# sourceURL=webpack://capston-project-ii/./src/images/blackpikachu.jpg?");

/***/ }),

/***/ "./src/images/dinasaur.jpg":
/*!*********************************!*\
  !*** ./src/images/dinasaur.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4cbb1e7d251b8d208d68.jpg\";\n\n//# sourceURL=webpack://capston-project-ii/./src/images/dinasaur.jpg?");

/***/ }),

/***/ "./src/images/heart.png":
/*!******************************!*\
  !*** ./src/images/heart.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c412cbaead4744166c20.png\";\n\n//# sourceURL=webpack://capston-project-ii/./src/images/heart.png?");

/***/ }),

/***/ "./src/images/jigglypuff.jpg":
/*!***********************************!*\
  !*** ./src/images/jigglypuff.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"181f317fb4e490e1e0ea.jpg\";\n\n//# sourceURL=webpack://capston-project-ii/./src/images/jigglypuff.jpg?");

/***/ }),

/***/ "./src/images/pikachu.jpeg":
/*!*********************************!*\
  !*** ./src/images/pikachu.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"aa459acbaa779eab8a78.jpeg\";\n\n//# sourceURL=webpack://capston-project-ii/./src/images/pikachu.jpeg?");

/***/ }),

/***/ "./src/images/teddybear.jpg":
/*!**********************************!*\
  !*** ./src/images/teddybear.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"83b8f539818813f63d85.jpg\";\n\n//# sourceURL=webpack://capston-project-ii/./src/images/teddybear.jpg?");

/***/ }),

/***/ "./src/images/teddybear2.jpg":
/*!***********************************!*\
  !*** ./src/images/teddybear2.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"886cd1519427730179dd.jpg\";\n\n//# sourceURL=webpack://capston-project-ii/./src/images/teddybear2.jpg?");

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
/******/ 		__webpack_require__.p = "/";
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