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
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n    font-family: Roboto, san-serif;\r\n}\r\np, li {\r\n    font-size: 1.3rem;\r\n}\r\n.entry p {\r\n    font-size: 1rem;\r\n}\r\n\r\n/* \r\nLAYOUT\r\n*/\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 0;\r\n}\r\nheader {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border-color: white;\r\n}\r\nheader h1 {\r\n    font-size: 2.5rem;\r\n}\r\n#nav {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 3rem;\r\n}\r\n#nav input {\r\n    font-size: 1.3rem;\r\n    font-weight: 900;\r\n    border: none;\r\n    padding: 0;\r\n\r\n}\r\n#nav input:hover {\r\n    cursor: pointer;\r\n    box-shadow: inset 0 -0.4rem 0 #fcd34dda;\r\n\r\n}\r\n\r\n\r\n#content {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 2rem;\r\n\r\n    \r\n    padding-bottom: 3rem;\r\n}\r\n\r\n.about {\r\n    display: grid;\r\n    grid-template: 5rem 2fr 1rem / repeat(2, 200px);\r\n    grid-template-areas: \r\n    \"title title\"\r\n    \"desc picture\"\r\n    \"blank citation\";\r\n    column-gap: 2rem;\r\n    padding: 0 20%;\r\n    \r\n}\r\n.about h2 {\r\n    grid-area: title;\r\n    text-align: center;\r\n}\r\n.about p {\r\n    grid-area: desc;\r\n    margin: 0;\r\n}\r\n.about img {\r\n    grid-area: picture;\r\n    height: 300px;\r\n    width: 200px;\r\n}\r\n#citation {\r\n    grid-area: citation;\r\n    width: 200px;\r\n    justify-self: start;\r\n}\r\n\r\n.storehours ul {\r\n    padding: 0;\r\n}\r\n.storehours li {\r\n    list-style: none;\r\n}\r\n\r\n\r\n#content h2 {\r\n    margin-bottom: 0;\r\n}\r\n.entry {\r\n    width: min(90%, 400px);\r\n    \r\n    display: grid;\r\n    grid-template: 3rem 1fr / 120px 0.5rem 1fr;\r\n    grid-template-areas: \"title title title\";\r\n    align-items: center;\r\n}\r\n.entry h3 {\r\n    grid-area: title;\r\n    border-bottom: 2px solid;\r\n}\r\n.entry > * {\r\n    margin: 0;\r\n}\r\n/* \r\ncontacts\r\n*/\r\n.contact-container {\r\n    width: min(90%, 410px);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n.contact-container h2 {\r\n    padding-bottom: 1rem;\r\n}\r\n.contact-container p {\r\n    margin: 0;\r\n    align-self: flex-start\r\n}\r\n.contact-container strong {\r\n    box-shadow: inset 0 -0.4rem 0 #fcd34dda;\r\n}\r\n\r\n\r\nfooter {\r\n    width: min(100%, 800px);\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n/* \r\nCOLOR\r\n*/\r\nbody {\r\n    background-color: white;\r\n}\r\n#nav input {\r\n    background-color: white;\r\n}\r\n\r\n\r\n#content {\r\n    background-color: white;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,8BAA8B;AAClC;AACA;IACI,iBAAiB;AACrB;AACA;IACI,eAAe;AACnB;;AAEA;;CAEC;AACD;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,mBAAmB;AACvB;AACA;IACI,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,SAAS;AACb;AACA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,YAAY;IACZ,UAAU;;AAEd;AACA;IACI,eAAe;IACf,uCAAuC;;AAE3C;;;AAGA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;;;IAGT,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,+CAA+C;IAC/C;;;oBAGgB;IAChB,gBAAgB;IAChB,cAAc;;AAElB;AACA;IACI,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,eAAe;IACf,SAAS;AACb;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,YAAY;AAChB;AACA;IACI,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd;AACA;IACI,gBAAgB;AACpB;;;AAGA;IACI,gBAAgB;AACpB;AACA;IACI,sBAAsB;;IAEtB,aAAa;IACb,0CAA0C;IAC1C,wCAAwC;IACxC,mBAAmB;AACvB;AACA;IACI,gBAAgB;IAChB,wBAAwB;AAC5B;AACA;IACI,SAAS;AACb;AACA;;CAEC;AACD;IACI,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,oBAAoB;AACxB;AACA;IACI,SAAS;IACT;AACJ;AACA;IACI,uCAAuC;AAC3C;;;AAGA;IACI,uBAAuB;IACvB,aAAa;IACb,8BAA8B;AAClC;;;AAGA;;CAEC;AACD;IACI,uBAAuB;AAC3B;AACA;IACI,uBAAuB;AAC3B;;;AAGA;IACI,uBAAuB;AAC3B","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,900&display=swap');\r\n\r\n* {\r\n    font-family: Roboto, san-serif;\r\n}\r\np, li {\r\n    font-size: 1.3rem;\r\n}\r\n.entry p {\r\n    font-size: 1rem;\r\n}\r\n\r\n/* \r\nLAYOUT\r\n*/\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 0;\r\n}\r\nheader {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border-color: white;\r\n}\r\nheader h1 {\r\n    font-size: 2.5rem;\r\n}\r\n#nav {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 3rem;\r\n}\r\n#nav input {\r\n    font-size: 1.3rem;\r\n    font-weight: 900;\r\n    border: none;\r\n    padding: 0;\r\n\r\n}\r\n#nav input:hover {\r\n    cursor: pointer;\r\n    box-shadow: inset 0 -0.4rem 0 #fcd34dda;\r\n\r\n}\r\n\r\n\r\n#content {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 2rem;\r\n\r\n    \r\n    padding-bottom: 3rem;\r\n}\r\n\r\n.about {\r\n    display: grid;\r\n    grid-template: 5rem 2fr 1rem / repeat(2, 200px);\r\n    grid-template-areas: \r\n    \"title title\"\r\n    \"desc picture\"\r\n    \"blank citation\";\r\n    column-gap: 2rem;\r\n    padding: 0 20%;\r\n    \r\n}\r\n.about h2 {\r\n    grid-area: title;\r\n    text-align: center;\r\n}\r\n.about p {\r\n    grid-area: desc;\r\n    margin: 0;\r\n}\r\n.about img {\r\n    grid-area: picture;\r\n    height: 300px;\r\n    width: 200px;\r\n}\r\n#citation {\r\n    grid-area: citation;\r\n    width: 200px;\r\n    justify-self: start;\r\n}\r\n\r\n.storehours ul {\r\n    padding: 0;\r\n}\r\n.storehours li {\r\n    list-style: none;\r\n}\r\n\r\n\r\n#content h2 {\r\n    margin-bottom: 0;\r\n}\r\n.entry {\r\n    width: min(90%, 400px);\r\n    \r\n    display: grid;\r\n    grid-template: 3rem 1fr / 120px 0.5rem 1fr;\r\n    grid-template-areas: \"title title title\";\r\n    align-items: center;\r\n}\r\n.entry h3 {\r\n    grid-area: title;\r\n    border-bottom: 2px solid;\r\n}\r\n.entry > * {\r\n    margin: 0;\r\n}\r\n/* \r\ncontacts\r\n*/\r\n.contact-container {\r\n    width: min(90%, 410px);\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n.contact-container h2 {\r\n    padding-bottom: 1rem;\r\n}\r\n.contact-container p {\r\n    margin: 0;\r\n    align-self: flex-start\r\n}\r\n.contact-container strong {\r\n    box-shadow: inset 0 -0.4rem 0 #fcd34dda;\r\n}\r\n\r\n\r\nfooter {\r\n    width: min(100%, 800px);\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n/* \r\nCOLOR\r\n*/\r\nbody {\r\n    background-color: white;\r\n}\r\n#nav input {\r\n    background-color: white;\r\n}\r\n\r\n\r\n#content {\r\n    background-color: white;\r\n}\r\n\r\n"],"sourceRoot":""}]);
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
/* harmony import */ var _shadeWord_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shadeWord.js */ "./src/shadeWord.js");




const aboutPage = () => {
    //initialize content
    (0,_clearContent_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const tab = document.getElementById('about');
    (0,_shadeWord_js__WEBPACK_IMPORTED_MODULE_2__["default"])(tab);

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
    const about = document.getElementById('about');
    const menu = document.getElementById('menu');
    const contact = document.getElementById('contact');
    about.style.removeProperty('box-shadow');
    menu.style.removeProperty('box-shadow');
    contact.style.removeProperty('box-shadow');
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
/* harmony import */ var _shadeWord_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shadeWord.js */ "./src/shadeWord.js");



const contactPage = () => {
    (0,_clearContent_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const tab = document.getElementById('contact');
    (0,_shadeWord_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tab);

    const content = document.getElementById('content');
    const contact = document.createElement('div');
    contact.setAttribute('class','contact-container');
    
    const title = document.createElement('h2');
    const number = document.createElement('p');
    const location = document.createElement('p');
    const email = document.createElement('p');

    title.innerHTML = "Contact Us";
    number.innerHTML = "phone number: xxx-xxx-xxxx";
    location.innerHTML = "location: 123 street name, city, state, 12345";
    email.innerHTML = "email at <strong>potatowork@potato.com</strong>";

    contact.append(title, number, email, location);
    content.append(contact);
    
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
/* harmony import */ var _shadeWord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shadeWord */ "./src/shadeWord.js");




const menuPage = () => {
    (0,_clearContent_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const tab = document.getElementById('menu');
    (0,_shadeWord__WEBPACK_IMPORTED_MODULE_2__["default"])(tab);

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

/***/ "./src/shadeWord.js":
/*!**************************!*\
  !*** ./src/shadeWord.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const shadeWord = (element) => {
    element.style.setProperty('box-shadow','inset 0 -0.4rem 0 #fcd34dda');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shadeWord);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUVBQWUsU0FBUyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2FkZE1lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NsZWFyQ29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3NoYWRlV29yZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCw0MDA7MCw3MDA7MSw0MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbi1zZXJpZjtcXHJcXG59XFxyXFxucCwgbGkge1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuLmVudHJ5IHAge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi8qIFxcclxcbkxBWU9VVFxcclxcbiovXFxyXFxuYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbmhlYWRlciBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcclxcbn1cXHJcXG4jbmF2IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxufVxcclxcbiNuYXYgaW5wdXQge1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcblxcclxcbn1cXHJcXG4jbmF2IGlucHV0OmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0wLjRyZW0gMCAjZmNkMzRkZGE7XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG5cXHJcXG4gICAgXFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiA1cmVtIDJmciAxcmVtIC8gcmVwZWF0KDIsIDIwMHB4KTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxyXFxuICAgIFxcXCJ0aXRsZSB0aXRsZVxcXCJcXHJcXG4gICAgXFxcImRlc2MgcGljdHVyZVxcXCJcXHJcXG4gICAgXFxcImJsYW5rIGNpdGF0aW9uXFxcIjtcXHJcXG4gICAgY29sdW1uLWdhcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMCAyMCU7XFxyXFxuICAgIFxcclxcbn1cXHJcXG4uYWJvdXQgaDIge1xcclxcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcbi5hYm91dCBwIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBkZXNjO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi5hYm91dCBpbWcge1xcclxcbiAgICBncmlkLWFyZWE6IHBpY3R1cmU7XFxyXFxuICAgIGhlaWdodDogMzAwcHg7XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG59XFxyXFxuI2NpdGF0aW9uIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBjaXRhdGlvbjtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc3RvcmVob3VycyB1bCB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcbi5zdG9yZWhvdXJzIGxpIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2NvbnRlbnQgaDIge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG4uZW50cnkge1xcclxcbiAgICB3aWR0aDogbWluKDkwJSwgNDAwcHgpO1xcclxcbiAgICBcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogM3JlbSAxZnIgLyAxMjBweCAwLjVyZW0gMWZyO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwidGl0bGUgdGl0bGUgdGl0bGVcXFwiO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uZW50cnkgaDMge1xcclxcbiAgICBncmlkLWFyZWE6IHRpdGxlO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XFxyXFxufVxcclxcbi5lbnRyeSA+ICoge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi8qIFxcclxcbmNvbnRhY3RzXFxyXFxuKi9cXHJcXG4uY29udGFjdC1jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogbWluKDkwJSwgNDEwcHgpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4uY29udGFjdC1jb250YWluZXIgaDIge1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuLmNvbnRhY3QtY29udGFpbmVyIHAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnRcXHJcXG59XFxyXFxuLmNvbnRhY3QtY29udGFpbmVyIHN0cm9uZyB7XFxyXFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTAuNHJlbSAwICNmY2QzNGRkYTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgd2lkdGg6IG1pbigxMDAlLCA4MDBweCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogXFxyXFxuQ09MT1JcXHJcXG4qL1xcclxcbmJvZHkge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuI25hdiBpbnB1dCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7O0NBRUM7QUFDRDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFNBQVM7QUFDYjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0FBQ2I7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFVBQVU7O0FBRWQ7QUFDQTtJQUNJLGVBQWU7SUFDZix1Q0FBdUM7O0FBRTNDOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixTQUFTOzs7SUFHVCxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsK0NBQStDO0lBQy9DOzs7b0JBR2dCO0lBQ2hCLGdCQUFnQjtJQUNoQixjQUFjOztBQUVsQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7QUFDYjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7QUFHQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksc0JBQXNCOztJQUV0QixhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLHdDQUF3QztJQUN4QyxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBOztDQUVDO0FBQ0Q7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksU0FBUztJQUNUO0FBQ0o7QUFDQTtJQUNJLHVDQUF1QztBQUMzQzs7O0FBR0E7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7O0FBR0E7O0NBRUM7QUFDRDtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCOzs7QUFHQTtJQUNJLHVCQUF1QjtBQUMzQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsNDAwOzAsNzAwOzEsNDAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW4tc2VyaWY7XFxyXFxufVxcclxcbnAsIGxpIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcbi5lbnRyeSBwIHtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBcXHJcXG5MQVlPVVRcXHJcXG4qL1xcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcbmhlYWRlciB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5oZWFkZXIgaDEge1xcclxcbiAgICBmb250LXNpemU6IDIuNXJlbTtcXHJcXG59XFxyXFxuI25hdiB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbn1cXHJcXG4jbmF2IGlucHV0IHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG5cXHJcXG59XFxyXFxuI25hdiBpbnB1dDpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtMC40cmVtIDAgI2ZjZDM0ZGRhO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuXFxyXFxuICAgIFxcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogNXJlbSAyZnIgMXJlbSAvIHJlcGVhdCgyLCAyMDBweCk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcclxcbiAgICBcXFwidGl0bGUgdGl0bGVcXFwiXFxyXFxuICAgIFxcXCJkZXNjIHBpY3R1cmVcXFwiXFxyXFxuICAgIFxcXCJibGFuayBjaXRhdGlvblxcXCI7XFxyXFxuICAgIGNvbHVtbi1nYXA6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAgMjAlO1xcclxcbiAgICBcXHJcXG59XFxyXFxuLmFib3V0IGgyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG4uYWJvdXQgcCB7XFxyXFxuICAgIGdyaWQtYXJlYTogZGVzYztcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4uYWJvdXQgaW1nIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiBwaWN0dXJlO1xcclxcbiAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxufVxcclxcbiNjaXRhdGlvbiB7XFxyXFxuICAgIGdyaWQtYXJlYTogY2l0YXRpb247XFxyXFxuICAgIHdpZHRoOiAyMDBweDtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLnN0b3JlaG91cnMgdWwge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG4uc3RvcmVob3VycyBsaSB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNjb250ZW50IGgyIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuLmVudHJ5IHtcXHJcXG4gICAgd2lkdGg6IG1pbig5MCUsIDQwMHB4KTtcXHJcXG4gICAgXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDNyZW0gMWZyIC8gMTIwcHggMC41cmVtIDFmcjtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxcInRpdGxlIHRpdGxlIHRpdGxlXFxcIjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmVudHJ5IGgzIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiB0aXRsZTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkO1xcclxcbn1cXHJcXG4uZW50cnkgPiAqIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4vKiBcXHJcXG5jb250YWN0c1xcclxcbiovXFxyXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IG1pbig5MCUsIDQxMHB4KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLmNvbnRhY3QtY29udGFpbmVyIGgyIHtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XFxyXFxufVxcclxcbi5jb250YWN0LWNvbnRhaW5lciBwIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0XFxyXFxufVxcclxcbi5jb250YWN0LWNvbnRhaW5lciBzdHJvbmcge1xcclxcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0wLjRyZW0gMCAjZmNkMzRkZGE7XFxyXFxufVxcclxcblxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIHdpZHRoOiBtaW4oMTAwJSwgODAwcHgpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIFxcclxcbkNPTE9SXFxyXFxuKi9cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbiNuYXYgaW5wdXQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNsZWFyQ29udGVudCBmcm9tICcuL2NsZWFyQ29udGVudC5qcyc7XHJcbmltcG9ydCBQaWN0dXJlIGZyb20gJy4vYWJvdXRQaWN0dXJlLmpwZyc7XHJcbmltcG9ydCBzaGFkZVdvcmQgZnJvbSAnLi9zaGFkZVdvcmQuanMnO1xyXG5cclxuY29uc3QgYWJvdXRQYWdlID0gKCkgPT4ge1xyXG4gICAgLy9pbml0aWFsaXplIGNvbnRlbnRcclxuICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgY29uc3QgdGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0Jyk7XHJcbiAgICBzaGFkZVdvcmQodGFiKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb290ZXInKTtcclxuICAgIC8vc2VjdGlvbnNcclxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBzdG9yZUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgYWJvdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2Fib3V0Jyk7XHJcbiAgICBzdG9yZUhvdXJzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdzdG9yZWhvdXJzJyk7XHJcblxyXG4gICAgLy9hYm91dFxyXG4gICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBhYm91dFBpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICBhYm91dFRpdGxlLmlubmVySFRNTCA9IFwiQWJvdXQgUG90YXRvZSBXb3Jrcy4uLlwiO1xyXG4gICAgYWJvdXRUZXh0LmlubmVySFRNTCA9IFwiV2VsY29tZSB0byBwb3RhdG8gd29ya3MsIHdlIGNvb2sgYW5kIHNlcnZlIHN0cmljdGx5IHBvdGF0byByZWxhdGVkIGRpc2hlcy5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBDb21lIGFuZCBlbmpveSBvdXIgY291cnNlIG9mIHBvdGF0b3MgdGhhdCBoYXZlIGJlZW4gY29va2VkIGFuZCBwcmVwYXJlZCBieSB0aGUgbW9zdCB0b3Agbm90Y2ggcG90YXRvIGNoZWZzISBcIjtcclxuICAgIGFib3V0UGljdHVyZS5zcmMgPSBQaWN0dXJlO1xyXG5cclxuICAgIC8vc3RvcmUgaG91cnNlXHJcbiAgICBjb25zdCBzdG9yZUhvdXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY29uc3Qgc3RvcmVIb3Vyc0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICAgIHN0b3JlSG91cnNUaXRsZS5pbm5lckhUTUwgPSBcIlN0b3JlIEhvdXJzXCI7XHJcblxyXG4gICAgY29uc3QgbXdmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IHR0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBzYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3Qgc3VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHJcbiAgICBtd2YuaW5uZXJIVE1MID0gXCJNb24sIFdlZCwgRnJpIDogMTE6MDBhbSAtIDA4OjAwcG1cIjtcclxuICAgIHR0aC5pbm5lckhUTUwgPSBcIlR1ZSBUaHUgICAgICAgOiAwNzowMGFtIC0gMDU6MDBwbVwiO1xyXG4gICAgc2F0LmlubmVySFRNTCA9IFwiU2F0dXJkYXkgICAgICA6IDExOjAwYW0gLSAxMTowMHBtXCI7XHJcbiAgICBzdW4uaW5uZXJIVE1MID0gXCJTdW5kYXkgICAgICAgIDogMTE6MDBhbSAtIDA1OjAwcG1cIjtcclxuXHJcbiAgICBjb25zdCBjaXRhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJyk7XHJcbiAgICBjaXRhdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnY2l0YXRpb24nKVxyXG4gICAgY2l0YXRpb24uaW5uZXJIVE1MID0gJ3Bob3RvIGJ5IEZlcm5hbmRhIE1hcnRpbmV6IG9uIFVuc3BsYXNoJztcclxuXHJcbiAgICBcclxuICAgIHN0b3JlSG91cnNCb2R5LmFwcGVuZChtd2YsIHR0aCwgc2F0LCBzdW4pO1xyXG4gICAgc3RvcmVIb3Vycy5hcHBlbmQoc3RvcmVIb3Vyc1RpdGxlLCBzdG9yZUhvdXJzQm9keSk7XHJcbiAgICBhYm91dC5hcHBlbmQoYWJvdXRUaXRsZSwgYWJvdXRUZXh0LCBhYm91dFBpY3R1cmUsIGNpdGF0aW9uKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kKGFib3V0LCBzdG9yZUhvdXJzKTtcclxuXHJcblxyXG4gICAgXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYm91dFBhZ2U7IiwiY29uc3QgYWRkTWVudSA9IChkaXYsIGRpc2hOYW1lLCBkaXNoRGVzY3JpcHRpb24sIGRpc2hDb3N0KSA9PiB7XHJcbiAgICBjb25zdCBkaXNoSDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgY29uc3QgZGlzaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBjb2xvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgICBkaXNoSDQuaW5uZXJIVE1MID0gYCR7ZGlzaE5hbWV9YDtcclxuICAgIGNvbG9uLmlubmVySFRNTCA9ICc6JztcclxuICAgIGRpc2hQLmlubmVySFRNTCA9IGAke2Rpc2hEZXNjcmlwdGlvbn0gKCQke2Rpc2hDb3N0fSlgO1xyXG4gICAgZGl2LmFwcGVuZChkaXNoSDQsIGNvbG9uLCBkaXNoUCk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkTWVudTsiLCJjb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIHdoaWxlKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0Jyk7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcclxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xyXG4gICAgYWJvdXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2JveC1zaGFkb3cnKTtcclxuICAgIG1lbnUuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2JveC1zaGFkb3cnKTtcclxuICAgIGNvbnRhY3Quc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2JveC1zaGFkb3cnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xlYXJDb250ZW50OyIsImltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9jbGVhckNvbnRlbnQuanMnO1xyXG5pbXBvcnQgc2hhZGVXb3JkIGZyb20gJy4vc2hhZGVXb3JkLmpzJztcclxuXHJcbmNvbnN0IGNvbnRhY3RQYWdlID0gKCkgPT4ge1xyXG4gICAgY2xlYXJDb250ZW50KCk7XHJcbiAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xyXG4gICAgc2hhZGVXb3JkKHRhYik7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdjb250YWN0LWNvbnRhaW5lcicpO1xyXG4gICAgXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBudW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG5cclxuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiQ29udGFjdCBVc1wiO1xyXG4gICAgbnVtYmVyLmlubmVySFRNTCA9IFwicGhvbmUgbnVtYmVyOiB4eHgteHh4LXh4eHhcIjtcclxuICAgIGxvY2F0aW9uLmlubmVySFRNTCA9IFwibG9jYXRpb246IDEyMyBzdHJlZXQgbmFtZSwgY2l0eSwgc3RhdGUsIDEyMzQ1XCI7XHJcbiAgICBlbWFpbC5pbm5lckhUTUwgPSBcImVtYWlsIGF0IDxzdHJvbmc+cG90YXRvd29ya0Bwb3RhdG8uY29tPC9zdHJvbmc+XCI7XHJcblxyXG4gICAgY29udGFjdC5hcHBlbmQodGl0bGUsIG51bWJlciwgZW1haWwsIGxvY2F0aW9uKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kKGNvbnRhY3QpO1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0UGFnZTsiLCJpbXBvcnQgYWJvdXRQYWdlIGZyb20gJy4vYWJvdXQuanMnO1xyXG5pbXBvcnQgbWVudVBhZ2UgZnJvbSAnLi9tZW51LmpzJztcclxuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gJy4vY29udGFjdC5qcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuXHJcblxyXG5jb25zdCByZXN0YXVyYW50ID0gKCgpID0+IHtcclxuICAgIC8vaGVhZGVyXHJcbiAgICBjb25zdCBfaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBjb25zdCBfZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcblxyXG4gICAgX2Zvb3Rlci5zZXRBdHRyaWJ1dGUoJ2lkJywnZm9vdGVyJyk7XHJcblxyXG4gICAgLy9uYXZpZ2F0aW9uXHJcbiAgICBjb25zdCBfbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBfbmF2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmF2Jyk7XHJcblxyXG4gICAgLy9jb250ZW50XHJcbiAgICBjb25zdCBfY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgX2NvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRlbnQnKTtcclxuICAgIFxyXG4gICAgY29uc3QgX3RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGNvbnN0IF9hYm91dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjb25zdCBfbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjb25zdCBfY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBcclxuICAgIF90aXRsZS5pbm5lckhUTUwgPSBcIlBvdGF0byBXb3JrXCI7XHJcbiAgICBfYWJvdXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgX2Fib3V0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdhYm91dCcpO1xyXG4gICAgX21lbnVCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgX21lbnVCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ21lbnUnKTtcclxuICAgIF9jb250YWN0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICAgIF9jb250YWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdjb250YWN0Jyk7XHJcblxyXG4gICAgXHJcbiAgICBfYWJvdXRCdG4udmFsdWUgPSAnYWJvdXQnO1xyXG4gICAgX21lbnVCdG4udmFsdWUgPSAnbWVudSc7XHJcbiAgICBfY29udGFjdEJ0bi52YWx1ZSA9ICdjb250YWN0JztcclxuXHJcbiAgICBfYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhYm91dFBhZ2UpO1xyXG4gICAgX21lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtZW51UGFnZSk7XHJcbiAgICBfY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRhY3RQYWdlKTtcclxuXHJcbiAgICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpO1xyXG4gICAgY29weXJpZ2h0LnNldEF0dHJpYnV0ZSgnaWQnLCdjb3B5cmlnaHQnKTtcclxuICAgIGNvcHlyaWdodC5pbm5lckhUTUwgPSAnwqloZW9uc29vJztcclxuXHJcbiAgICBjb25zdCBydW5QYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKF9oZWFkZXIsIF9jb250ZW50LF9mb290ZXIpO1xyXG4gICAgICAgIF9oZWFkZXIuYXBwZW5kKF90aXRsZSwgX25hdik7XHJcbiAgICAgICAgX25hdi5hcHBlbmQoX2Fib3V0QnRuLCBfbWVudUJ0biwgX2NvbnRhY3RCdG4pO1xyXG4gICAgICAgIC8vX2Zvb3Rlci5hcHBlbmQoY29weXJpZ2h0KTtcclxuICAgICAgICBhYm91dFBhZ2UoKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybiB7cnVuUGFnZX07XHJcbn0pKCk7XHJcblxyXG5yZXN0YXVyYW50LnJ1blBhZ2UoKTsiLCJpbXBvcnQgY2xlYXJDb250ZW50IGZyb20gJy4vY2xlYXJDb250ZW50LmpzJztcclxuaW1wb3J0IGFkZE1lbnUgZnJvbSAnLi9hZGRNZW51LmpzJztcclxuaW1wb3J0IHNoYWRlV29yZCBmcm9tICcuL3NoYWRlV29yZCc7XHJcblxyXG5jb25zdCBtZW51UGFnZSA9ICgpID0+IHtcclxuICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgY29uc3QgdGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcclxuICAgIHNoYWRlV29yZCh0YWIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgLy9zZWN0aW9uc1xyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY29uc3QgYXBwZXRpemVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBlbnRyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGRlc3NlcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGFwcGV0aXplclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGNvbnN0IGVudHJlZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGNvbnN0IGRlc3NlcnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcblxyXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3RpdGxlJyk7XHJcbiAgICBhcHBldGl6ZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2FwcGV0aXplcicpO1xyXG4gICAgZW50cmVlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdlbnRyZWUnKTtcclxuICAgIGRlc3NlcnQuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2Rlc3NlcnQnKTtcclxuICAgIGFwcGV0aXplci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnZW50cnknKTtcclxuICAgIGVudHJlZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnZW50cnknKTtcclxuICAgIGRlc3NlcnQuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2VudHJ5Jyk7XHJcblxyXG4gICAgLy9hZGRpbmcgdGl0bGVzXHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSAnTWVudSdcclxuICAgIGFwcGV0aXplclRpdGxlLmlubmVySFRNTCA9ICdBcHBldGl6ZXInO1xyXG4gICAgZW50cmVlVGl0bGUuaW5uZXJIVE1MID0gJ0VudHJlZSc7XHJcbiAgICBkZXNzZXJ0VGl0bGUuaW5uZXJIVE1MID0gJ0Rlc3NlcnQnO1xyXG4gICAgYXBwZXRpemVyLmFwcGVuZChhcHBldGl6ZXJUaXRsZSk7XHJcbiAgICBlbnRyZWUuYXBwZW5kKGVudHJlZVRpdGxlKTtcclxuICAgIGRlc3NlcnQuYXBwZW5kKGRlc3NlcnRUaXRsZSk7XHJcblxyXG4gICAgLy9hZGRpbmcgbWVudVxyXG4gICAgYWRkTWVudShhcHBldGl6ZXIsICdGcmVuY2ggRnJpZXMnLCAncG90YXRvZXMgY3V0IHVwIGFuZCBkZWVwIGZyaWVkJywgNCk7XHJcbiAgICBhZGRNZW51KGFwcGV0aXplciwgJ1BvdGF0byBXZWRnZScsICdwb3RhdG9lcyBjdXQgdXAgYW5kIGRlZXAgZnJpZWQnLCA0KTtcclxuICAgIGFkZE1lbnUoZW50cmVlLCAnQmFrZWQgUG90YXRvJywncG90YXRvIGJha2VkIHdpdGggdG9wcGluZ3MgYWRkZWQnLCAxMSk7XHJcbiAgICBhZGRNZW51KGRlc3NlcnQsICdTd2VldCBQb3RhdG8gQ2FrZScsICdzd2VldCBwb3RhdG8gY2hlZXNlIGNha2UnLCA3KTtcclxuXHJcbiAgICBcclxuICAgIGNvbnRlbnQuYXBwZW5kKHRpdGxlLCBhcHBldGl6ZXIsIGVudHJlZSwgZGVzc2VydCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnVQYWdlOyIsImNvbnN0IHNoYWRlV29yZCA9IChlbGVtZW50KSA9PiB7XHJcbiAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCdib3gtc2hhZG93JywnaW5zZXQgMCAtMC40cmVtIDAgI2ZjZDM0ZGRhJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNoYWRlV29yZDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=