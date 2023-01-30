"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    font-family: Roboto, san-serif;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n#content {\r\n    width: min(100%, 800px);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n    border: 1px solid;\r\n}\r\n\r\n.about {\r\n    display: grid;\r\n    grid-template: 5rem 2fr 1rem / repeat(2, 200px);\r\n    grid-template-areas: \r\n    \"title title\"\r\n    \"desc picture\"\r\n    \"blank citation\";\r\n    column-gap: 2rem;\r\n    padding: 0 20%;\r\n    \r\n}\r\n.about h2 {\r\n    grid-area: title;\r\n    text-align: center;\r\n}\r\n.about p {\r\n    grid-area: desc;\r\n    margin: 0;\r\n}\r\n.about img {\r\n    grid-area: picture;\r\n    height: 300px;\r\n    width: 200px;\r\n}\r\n#citation {\r\n    grid-area: citation;\r\n    width: 200px;\r\n    justify-self: start;\r\n}\r\n.storehours {\r\n    margin-top: 3rem;\r\n\r\n}\r\n.storehours ul {\r\n    padding: 0;\r\n}\r\n.storehours li {\r\n    list-style: none;\r\n}\r\n\r\n\r\n\r\n.entry {\r\n    width: min(90%, 400px);\r\n    \r\n    display: grid;\r\n    grid-template: 3rem 1fr / 120px 0.5rem 1fr;\r\n    grid-template-areas: \"title title title\";\r\n    align-items: center;\r\n}\r\n.entry h3 {\r\n    grid-area: title;\r\n    margin: 0;\r\n\r\n    border-bottom: solid;\r\n}\r\n \r\n\r\nfooter {\r\n    width: min(100%, 800px);\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;IAEnB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,+CAA+C;IAC/C;;;oBAGgB;IAChB,gBAAgB;IAChB,cAAc;;AAElB;AACA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,YAAY;AAChB;AACA;IACI,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;AACvB;AACA;IACI,gBAAgB;;AAEpB;AACA;IACI,UAAU;AACd;AACA;IACI,gBAAgB;AACpB;;;;AAIA;IACI,sBAAsB;;IAEtB,aAAa;IACb,0CAA0C;IAC1C,wCAAwC;IACxC,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,SAAS;;IAET,oBAAoB;AACxB;;;AAGA;IACI,uBAAuB;IACvB,aAAa;IACb,8BAA8B;AAClC","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,900&display=swap');\r\n\r\n* {\r\n    font-family: Roboto, san-serif;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n#content {\r\n    width: min(100%, 800px);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n    border: 1px solid;\r\n}\r\n\r\n.about {\r\n    display: grid;\r\n    grid-template: 5rem 2fr 1rem / repeat(2, 200px);\r\n    grid-template-areas: \r\n    \"title title\"\r\n    \"desc picture\"\r\n    \"blank citation\";\r\n    column-gap: 2rem;\r\n    padding: 0 20%;\r\n    \r\n}\r\n.about h2 {\r\n    grid-area: title;\r\n    text-align: center;\r\n}\r\n.about p {\r\n    grid-area: desc;\r\n    margin: 0;\r\n}\r\n.about img {\r\n    grid-area: picture;\r\n    height: 300px;\r\n    width: 200px;\r\n}\r\n#citation {\r\n    grid-area: citation;\r\n    width: 200px;\r\n    justify-self: start;\r\n}\r\n.storehours {\r\n    margin-top: 3rem;\r\n\r\n}\r\n.storehours ul {\r\n    padding: 0;\r\n}\r\n.storehours li {\r\n    list-style: none;\r\n}\r\n\r\n\r\n\r\n.entry {\r\n    width: min(90%, 400px);\r\n    \r\n    display: grid;\r\n    grid-template: 3rem 1fr / 120px 0.5rem 1fr;\r\n    grid-template-areas: \"title title title\";\r\n    align-items: center;\r\n}\r\n.entry h3 {\r\n    grid-area: title;\r\n    margin: 0;\r\n\r\n    border-bottom: solid;\r\n}\r\n \r\n\r\nfooter {\r\n    width: min(100%, 800px);\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clearContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContent.js */ "./src/clearContent.js");
/* harmony import */ var _aboutPicture_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutPicture.jpg */ "./src/aboutPicture.jpg");



const aboutPage = () => {
    (0,_clearContent_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const content = document.getElementById('content');
    const footer = document.getElementById('footer');
    //sections
    const about = document.createElement('div');
    const storeHours = document.createElement('div');

    about.setAttribute('class','about');
    storeHours.setAttribute('class','storehours');

    //about
    const aboutTitle = document.createElement('h2');
    const aboutText = document.createElement('p');
    const aboutPicture = new Image();

    aboutTitle.innerHTML = "About Potatoe Works...";
    aboutText.innerHTML = "Welcome to potato works, we cook and serve strictly potato related dishes.\
                           Come and enjoy our course of potatos that have been cooked and prepared by the most top notch potato chefs! ";
    aboutPicture.src = _aboutPicture_jpg__WEBPACK_IMPORTED_MODULE_1__;

    //store hourse
    const storeHoursTitle = document.createElement('h2');
    const storeHoursBody = document.createElement('ul');

    storeHoursTitle.innerHTML = "Store Hours";

    const mwf = document.createElement('li');
    const tth = document.createElement('li');
    const sat = document.createElement('li');
    const sun = document.createElement('li');

    mwf.innerHTML = "Mon, Wed, Fri : 11:00am - 08:00pm";
    tth.innerHTML = "Tue Thu       : 07:00am - 05:00pm";
    sat.innerHTML = "Saturday      : 11:00am - 11:00pm";
    sun.innerHTML = "Sunday        : 11:00am - 05:00pm";

    const citation = document.createElement('small');
    citation.setAttribute('id','citation')
    citation.innerHTML = 'photo by Fernanda Martinez on Unsplash';

    
    storeHoursBody.append(mwf, tth, sat, sun);
    storeHours.append(storeHoursTitle, storeHoursBody);
    about.append(aboutTitle, aboutText, aboutPicture, citation);
    content.append(about, storeHours);


    

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutPage);

/***/ }),

/***/ "./src/addMenu.js":
/*!************************!*\
  !*** ./src/addMenu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const addMenu = (div, dishName, dishDescription, dishCost) => {
    const dishH4 = document.createElement('h4');
    const dishP = document.createElement('p');
    const colon = document.createElement('h5');
    dishH4.innerHTML = `${dishName}`;
    colon.innerHTML = ':';
    dishP.innerHTML = `${dishDescription} ($${dishCost})`;
    div.append(dishH4, colon, dishP);

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMenu);

/***/ }),

/***/ "./src/clearContent.js":
/*!*****************************!*\
  !*** ./src/clearContent.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const clearContent = () => {
    const content = document.getElementById('content');
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }   
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearContent);

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clearContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContent.js */ "./src/clearContent.js");


const contactPage = () => {
    (0,_clearContent_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const content = document.getElementById('content');
    
    const title = document.createElement('h2');
    const number = document.createElement('p');
    const location = document.createElement('p');

    title.innerHTML = "Contact Us";
    number.innerHTML = "phone number: xxx-xxx-xxxx";
    location.innerHTML = "location: 123 street name, city, state, 12345";

    content.append(title, number, location);
    
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactPage);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.js */ "./src/about.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");







const restaurant = (() => {
    //header
    const _header = document.createElement('header');
    const _footer = document.createElement('footer');

    _footer.setAttribute('id','footer');

    //navigation
    const _nav = document.createElement('div');
    _nav.setAttribute('id', 'nav');

    //content
    const _content = document.createElement('div');
    _content.setAttribute('id','content');
    
    const _title = document.createElement('h1');
    const _aboutBtn = document.createElement('input');
    const _menuBtn = document.createElement('input');
    const _contactBtn = document.createElement('input');
    
    _title.innerHTML = "Potato Work";
    _aboutBtn.setAttribute('type', 'button');
    _aboutBtn.setAttribute('id','about');
    _menuBtn.setAttribute('type', 'button');
    _menuBtn.setAttribute('id','menu');
    _contactBtn.setAttribute('type', 'button');
    _contactBtn.setAttribute('id','contact');

    
    _aboutBtn.value = 'about';
    _menuBtn.value = 'menu';
    _contactBtn.value = 'contact';

    _aboutBtn.addEventListener('click', _about_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
    _menuBtn.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
    _contactBtn.addEventListener('click', _contact_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

    const copyright = document.createElement('small');
    copyright.setAttribute('id','copyright');
    copyright.innerHTML = '©heonsoo';

    const runPage = () => {
        document.body.append(_header, _content,_footer);
        _header.append(_title, _nav);
        _nav.append(_aboutBtn, _menuBtn, _contactBtn);
        //_footer.append(copyright);
        (0,_about_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    };
    
    return {runPage};
})();

restaurant.runPage();

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clearContent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clearContent.js */ "./src/clearContent.js");
/* harmony import */ var _addMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addMenu.js */ "./src/addMenu.js");



const menuPage = () => {
    (0,_clearContent_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const content = document.getElementById('content');
    //sections
    const title = document.createElement('h2');
    const appetizer = document.createElement('div');
    const entree = document.createElement('div');
    const dessert = document.createElement('div');
    const appetizerTitle = document.createElement('h3');
    const entreeTitle = document.createElement('h3');
    const dessertTitle = document.createElement('h3');

    title.setAttribute('class','title');
    appetizer.setAttribute('class','appetizer');
    entree.setAttribute('class','entree');
    dessert.setAttribute('class','dessert');
    appetizer.setAttribute('class','entry');
    entree.setAttribute('class','entry');
    dessert.setAttribute('class','entry');

    //adding titles
    title.innerHTML = 'Menu'
    appetizerTitle.innerHTML = 'Appetizer';
    entreeTitle.innerHTML = 'Entree';
    dessertTitle.innerHTML = 'Dessert';
    appetizer.append(appetizerTitle);
    entree.append(entreeTitle);
    dessert.append(dessertTitle);

    //adding menu
    (0,_addMenu_js__WEBPACK_IMPORTED_MODULE_1__["default"])(appetizer, 'French Fries', 'potatoes cut up and deep fried', 4);
    (0,_addMenu_js__WEBPACK_IMPORTED_MODULE_1__["default"])(appetizer, 'Potato Wedge', 'potatoes cut up and deep fried', 4);
    (0,_addMenu_js__WEBPACK_IMPORTED_MODULE_1__["default"])(entree, 'Baked Potato','potato baked with toppings added', 11);
    (0,_addMenu_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dessert, 'Sweet Potato Cake', 'sweet potato cheese cake', 7);

    
    content.append(title, appetizer, entree, dessert);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);

/***/ }),

/***/ "./src/aboutPicture.jpg":
/*!******************************!*\
  !*** ./src/aboutPicture.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "978bbc1428db3f2800b5.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGlEQUFTO0FBQ2pELHVDQUF1QyxnREFBUTtBQUMvQywwQ0FBMEMsbURBQVc7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFTO0FBQ2pCO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRDZDO0FBQ1Y7QUFDbkM7QUFDQTtBQUNBLElBQUksNERBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFPO0FBQ1gsSUFBSSx1REFBTztBQUNYLElBQUksdURBQU87QUFDWCxJQUFJLHVEQUFPO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hZGRNZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jbGVhckNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDQwMDswLDcwMDsxLDQwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2FuLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICB3aWR0aDogbWluKDEwMCUsIDgwMHB4KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDVyZW0gMmZyIDFyZW0gLyByZXBlYXQoMiwgMjAwcHgpO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXHJcXG4gICAgXFxcInRpdGxlIHRpdGxlXFxcIlxcclxcbiAgICBcXFwiZGVzYyBwaWN0dXJlXFxcIlxcclxcbiAgICBcXFwiYmxhbmsgY2l0YXRpb25cXFwiO1xcclxcbiAgICBjb2x1bW4tZ2FwOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAwIDIwJTtcXHJcXG4gICAgXFxyXFxufVxcclxcbi5hYm91dCBoMiB7XFxyXFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuLmFib3V0IHAge1xcclxcbiAgICBncmlkLWFyZWE6IGRlc2M7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuLmFib3V0IGltZyB7XFxyXFxuICAgIGdyaWQtYXJlYTogcGljdHVyZTtcXHJcXG4gICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbn1cXHJcXG4jY2l0YXRpb24ge1xcclxcbiAgICBncmlkLWFyZWE6IGNpdGF0aW9uO1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxyXFxufVxcclxcbi5zdG9yZWhvdXJzIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogM3JlbTtcXHJcXG5cXHJcXG59XFxyXFxuLnN0b3JlaG91cnMgdWwge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG4uc3RvcmVob3VycyBsaSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5lbnRyeSB7XFxyXFxuICAgIHdpZHRoOiBtaW4oOTAlLCA0MDBweCk7XFxyXFxuICAgIFxcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAzcmVtIDFmciAvIDEyMHB4IDAuNXJlbSAxZnI7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcXCJ0aXRsZSB0aXRsZSB0aXRsZVxcXCI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5lbnRyeSBoMyB7XFxyXFxuICAgIGdyaWQtYXJlYTogdGl0bGU7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG5cXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XFxyXFxufVxcclxcbiBcXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICB3aWR0aDogbWluKDEwMCUsIDgwMHB4KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7O0lBRW5CLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwrQ0FBK0M7SUFDL0M7OztvQkFHZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGNBQWM7O0FBRWxCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsU0FBUztBQUNiO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7OztBQUlBO0lBQ0ksc0JBQXNCOztJQUV0QixhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLHdDQUF3QztJQUN4QyxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTOztJQUVULG9CQUFvQjtBQUN4Qjs7O0FBR0E7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW4tc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiBtaW4oMTAwJSwgODAwcHgpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNXJlbSAyZnIgMXJlbSAvIHJlcGVhdCgyLCAyMDBweCk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICBcXFwidGl0bGUgdGl0bGVcXFwiXFxyXFxuICAgIFxcXCJkZXNjIHBpY3R1cmVcXFwiXFxyXFxuICAgIFxcXCJibGFuayBjaXRhdGlvblxcXCI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAgMjAlO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLmFib3V0IGgyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uYWJvdXQgcCB7XFxyXFxuICAgIGdyaWQtYXJlYTogZGVzYztcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4uYWJvdXQgaW1nIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBwaWN0dXJlO1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxufVxcclxcbiNjaXRhdGlvbiB7XFxyXFxuICAgIGdyaWQtYXJlYTogY2l0YXRpb247XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG59XFxyXFxuLnN0b3JlaG91cnMge1xcclxcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xcclxcblxcclxcbn1cXHJcXG4uc3RvcmVob3VycyB1bCB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbi5zdG9yZWhvdXJzIGxpIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLmVudHJ5IHtcXHJcXG4gICAgd2lkdGg6IG1pbig5MCUsIDQwMHB4KTtcXHJcXG4gICAgXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDNyZW0gMWZyIC8gMTIwcHggMC41cmVtIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcInRpdGxlIHRpdGxlIHRpdGxlXFxcIjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmVudHJ5IGgzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcblxcclxcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcXHJcXG59XFxyXFxuIFxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIHdpZHRoOiBtaW4oMTAwJSwgODAwcHgpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9jbGVhckNvbnRlbnQuanMnO1xyXG5pbXBvcnQgUGljdHVyZSBmcm9tICcuL2Fib3V0UGljdHVyZS5qcGcnO1xyXG5cclxuY29uc3QgYWJvdXRQYWdlID0gKCkgPT4ge1xyXG4gICAgY2xlYXJDb250ZW50KCk7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcclxuICAgIC8vc2VjdGlvbnNcclxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBzdG9yZUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgYWJvdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2Fib3V0Jyk7XHJcbiAgICBzdG9yZUhvdXJzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdzdG9yZWhvdXJzJyk7XHJcblxyXG4gICAgLy9hYm91dFxyXG4gICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBhYm91dFBpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICBhYm91dFRpdGxlLmlubmVySFRNTCA9IFwiQWJvdXQgUG90YXRvZSBXb3Jrcy4uLlwiO1xyXG4gICAgYWJvdXRUZXh0LmlubmVySFRNTCA9IFwiV2VsY29tZSB0byBwb3RhdG8gd29ya3MsIHdlIGNvb2sgYW5kIHNlcnZlIHN0cmljdGx5IHBvdGF0byByZWxhdGVkIGRpc2hlcy5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBDb21lIGFuZCBlbmpveSBvdXIgY291cnNlIG9mIHBvdGF0b3MgdGhhdCBoYXZlIGJlZW4gY29va2VkIGFuZCBwcmVwYXJlZCBieSB0aGUgbW9zdCB0b3Agbm90Y2ggcG90YXRvIGNoZWZzISBcIjtcclxuICAgIGFib3V0UGljdHVyZS5zcmMgPSBQaWN0dXJlO1xyXG5cclxuICAgIC8vc3RvcmUgaG91cnNlXHJcbiAgICBjb25zdCBzdG9yZUhvdXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY29uc3Qgc3RvcmVIb3Vyc0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICAgIHN0b3JlSG91cnNUaXRsZS5pbm5lckhUTUwgPSBcIlN0b3JlIEhvdXJzXCI7XHJcblxyXG4gICAgY29uc3QgbXdmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IHR0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBzYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3Qgc3VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHJcbiAgICBtd2YuaW5uZXJIVE1MID0gXCJNb24sIFdlZCwgRnJpIDogMTE6MDBhbSAtIDA4OjAwcG1cIjtcclxuICAgIHR0aC5pbm5lckhUTUwgPSBcIlR1ZSBUaHUgICAgICAgOiAwNzowMGFtIC0gMDU6MDBwbVwiO1xyXG4gICAgc2F0LmlubmVySFRNTCA9IFwiU2F0dXJkYXkgICAgICA6IDExOjAwYW0gLSAxMTowMHBtXCI7XHJcbiAgICBzdW4uaW5uZXJIVE1MID0gXCJTdW5kYXkgICAgICAgIDogMTE6MDBhbSAtIDA1OjAwcG1cIjtcclxuXHJcbiAgICBjb25zdCBjaXRhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJyk7XHJcbiAgICBjaXRhdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnY2l0YXRpb24nKVxyXG4gICAgY2l0YXRpb24uaW5uZXJIVE1MID0gJ3Bob3RvIGJ5IEZlcm5hbmRhIE1hcnRpbmV6IG9uIFVuc3BsYXNoJztcclxuXHJcbiAgICBcclxuICAgIHN0b3JlSG91cnNCb2R5LmFwcGVuZChtd2YsIHR0aCwgc2F0LCBzdW4pO1xyXG4gICAgc3RvcmVIb3Vycy5hcHBlbmQoc3RvcmVIb3Vyc1RpdGxlLCBzdG9yZUhvdXJzQm9keSk7XHJcbiAgICBhYm91dC5hcHBlbmQoYWJvdXRUaXRsZSwgYWJvdXRUZXh0LCBhYm91dFBpY3R1cmUsIGNpdGF0aW9uKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kKGFib3V0LCBzdG9yZUhvdXJzKTtcclxuXHJcblxyXG4gICAgXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYm91dFBhZ2U7IiwiY29uc3QgYWRkTWVudSA9IChkaXYsIGRpc2hOYW1lLCBkaXNoRGVzY3JpcHRpb24sIGRpc2hDb3N0KSA9PiB7XHJcbiAgICBjb25zdCBkaXNoSDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgY29uc3QgZGlzaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBjb2xvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgICBkaXNoSDQuaW5uZXJIVE1MID0gYCR7ZGlzaE5hbWV9YDtcclxuICAgIGNvbG9uLmlubmVySFRNTCA9ICc6JztcclxuICAgIGRpc2hQLmlubmVySFRNTCA9IGAke2Rpc2hEZXNjcmlwdGlvbn0gKCQke2Rpc2hDb3N0fSlgO1xyXG4gICAgZGl2LmFwcGVuZChkaXNoSDQsIGNvbG9uLCBkaXNoUCk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkTWVudTsiLCJjb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIHdoaWxlKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcclxuICAgIH0gICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xlYXJDb250ZW50OyIsImltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9jbGVhckNvbnRlbnQuanMnO1xyXG5cclxuY29uc3QgY29udGFjdFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjbGVhckNvbnRlbnQoKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIkNvbnRhY3QgVXNcIjtcclxuICAgIG51bWJlci5pbm5lckhUTUwgPSBcInBob25lIG51bWJlcjogeHh4LXh4eC14eHh4XCI7XHJcbiAgICBsb2NhdGlvbi5pbm5lckhUTUwgPSBcImxvY2F0aW9uOiAxMjMgc3RyZWV0IG5hbWUsIGNpdHksIHN0YXRlLCAxMjM0NVwiO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kKHRpdGxlLCBudW1iZXIsIGxvY2F0aW9uKTtcclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFBhZ2U7IiwiaW1wb3J0IGFib3V0UGFnZSBmcm9tICcuL2Fib3V0LmpzJztcclxuaW1wb3J0IG1lbnVQYWdlIGZyb20gJy4vbWVudS5qcyc7XHJcbmltcG9ydCBjb250YWN0UGFnZSBmcm9tICcuL2NvbnRhY3QuanMnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcblxyXG5cclxuY29uc3QgcmVzdGF1cmFudCA9ICgoKSA9PiB7XHJcbiAgICAvL2hlYWRlclxyXG4gICAgY29uc3QgX2hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgY29uc3QgX2Zvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG5cclxuICAgIF9mb290ZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2Zvb3RlcicpO1xyXG5cclxuICAgIC8vbmF2aWdhdGlvblxyXG4gICAgY29uc3QgX25hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgX25hdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdicpO1xyXG5cclxuICAgIC8vY29udGVudFxyXG4gICAgY29uc3QgX2NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIF9jb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCdjb250ZW50Jyk7XHJcbiAgICBcclxuICAgIGNvbnN0IF90aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBjb25zdCBfYWJvdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY29uc3QgX21lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY29uc3QgX2NvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgXHJcbiAgICBfdGl0bGUuaW5uZXJIVE1MID0gXCJQb3RhdG8gV29ya1wiO1xyXG4gICAgX2Fib3V0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICAgIF9hYm91dEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnYWJvdXQnKTtcclxuICAgIF9tZW51QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICAgIF9tZW51QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdtZW51Jyk7XHJcbiAgICBfY29udGFjdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICBfY29udGFjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGFjdCcpO1xyXG5cclxuICAgIFxyXG4gICAgX2Fib3V0QnRuLnZhbHVlID0gJ2Fib3V0JztcclxuICAgIF9tZW51QnRuLnZhbHVlID0gJ21lbnUnO1xyXG4gICAgX2NvbnRhY3RCdG4udmFsdWUgPSAnY29udGFjdCc7XHJcblxyXG4gICAgX2Fib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWJvdXRQYWdlKTtcclxuICAgIF9tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudVBhZ2UpO1xyXG4gICAgX2NvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250YWN0UGFnZSk7XHJcblxyXG4gICAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKTtcclxuICAgIGNvcHlyaWdodC5zZXRBdHRyaWJ1dGUoJ2lkJywnY29weXJpZ2h0Jyk7XHJcbiAgICBjb3B5cmlnaHQuaW5uZXJIVE1MID0gJ8KpaGVvbnNvbyc7XHJcblxyXG4gICAgY29uc3QgcnVuUGFnZSA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChfaGVhZGVyLCBfY29udGVudCxfZm9vdGVyKTtcclxuICAgICAgICBfaGVhZGVyLmFwcGVuZChfdGl0bGUsIF9uYXYpO1xyXG4gICAgICAgIF9uYXYuYXBwZW5kKF9hYm91dEJ0biwgX21lbnVCdG4sIF9jb250YWN0QnRuKTtcclxuICAgICAgICAvL19mb290ZXIuYXBwZW5kKGNvcHlyaWdodCk7XHJcbiAgICAgICAgYWJvdXRQYWdlKCk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICByZXR1cm4ge3J1blBhZ2V9O1xyXG59KSgpO1xyXG5cclxucmVzdGF1cmFudC5ydW5QYWdlKCk7IiwiaW1wb3J0IGNsZWFyQ29udGVudCBmcm9tICcuL2NsZWFyQ29udGVudC5qcyc7XHJcbmltcG9ydCBhZGRNZW51IGZyb20gJy4vYWRkTWVudS5qcyc7XHJcblxyXG5jb25zdCBtZW51UGFnZSA9ICgpID0+IHtcclxuICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICAvL3NlY3Rpb25zXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBhcHBldGl6ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGVudHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZGVzc2VydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgYXBwZXRpemVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgY29uc3QgZW50cmVlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgY29uc3QgZGVzc2VydFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuXHJcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywndGl0bGUnKTtcclxuICAgIGFwcGV0aXplci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnYXBwZXRpemVyJyk7XHJcbiAgICBlbnRyZWUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2VudHJlZScpO1xyXG4gICAgZGVzc2VydC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnZGVzc2VydCcpO1xyXG4gICAgYXBwZXRpemVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdlbnRyeScpO1xyXG4gICAgZW50cmVlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdlbnRyeScpO1xyXG4gICAgZGVzc2VydC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnZW50cnknKTtcclxuXHJcbiAgICAvL2FkZGluZyB0aXRsZXNcclxuICAgIHRpdGxlLmlubmVySFRNTCA9ICdNZW51J1xyXG4gICAgYXBwZXRpemVyVGl0bGUuaW5uZXJIVE1MID0gJ0FwcGV0aXplcic7XHJcbiAgICBlbnRyZWVUaXRsZS5pbm5lckhUTUwgPSAnRW50cmVlJztcclxuICAgIGRlc3NlcnRUaXRsZS5pbm5lckhUTUwgPSAnRGVzc2VydCc7XHJcbiAgICBhcHBldGl6ZXIuYXBwZW5kKGFwcGV0aXplclRpdGxlKTtcclxuICAgIGVudHJlZS5hcHBlbmQoZW50cmVlVGl0bGUpO1xyXG4gICAgZGVzc2VydC5hcHBlbmQoZGVzc2VydFRpdGxlKTtcclxuXHJcbiAgICAvL2FkZGluZyBtZW51XHJcbiAgICBhZGRNZW51KGFwcGV0aXplciwgJ0ZyZW5jaCBGcmllcycsICdwb3RhdG9lcyBjdXQgdXAgYW5kIGRlZXAgZnJpZWQnLCA0KTtcclxuICAgIGFkZE1lbnUoYXBwZXRpemVyLCAnUG90YXRvIFdlZGdlJywgJ3BvdGF0b2VzIGN1dCB1cCBhbmQgZGVlcCBmcmllZCcsIDQpO1xyXG4gICAgYWRkTWVudShlbnRyZWUsICdCYWtlZCBQb3RhdG8nLCdwb3RhdG8gYmFrZWQgd2l0aCB0b3BwaW5ncyBhZGRlZCcsIDExKTtcclxuICAgIGFkZE1lbnUoZGVzc2VydCwgJ1N3ZWV0IFBvdGF0byBDYWtlJywgJ3N3ZWV0IHBvdGF0byBjaGVlc2UgY2FrZScsIDcpO1xyXG5cclxuICAgIFxyXG4gICAgY29udGVudC5hcHBlbmQodGl0bGUsIGFwcGV0aXplciwgZW50cmVlLCBkZXNzZXJ0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudVBhZ2U7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9