"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["about"],{

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


const aboutPage = () => {
    (0,_clearContent_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const content = document.createElement('div');
    content.setAttribute('id','content');
    //sections
    const about = document.createElement('div');
    const storeHours = document.createElement('div');

    about.setAttribute('class','about');
    storeHours.setAttribute('class','storehours');

    //about
    const aboutTitle = document.createElement('h2');
    const aboutText = document.createElement('p');
    const aboutPicture = document.createElement('img');

    aboutTitle.innerHTML = "About Potatoe Works...";
    aboutText.innerHTML = "Welcome to potato works, we cook and serve strictly potato related dishes";
    aboutPicture.setAttribute('src', './');

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

    
    storeHoursBody.append(mwf, tth, sat, sun);
    storeHours.append(storeHoursTitle, storeHoursBody);
    about.append(aboutTitle, aboutText, aboutPicture);
    content.append(about, storeHours);
    document.body.append(content);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (aboutPage);

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
    document.body.removeChild(content);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearContent);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/about.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQzdDO0FBQ0E7QUFDQSxJQUFJLDREQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FDOUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY2xlYXJDb250ZW50LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9jbGVhckNvbnRlbnQuanMnO1xyXG5cclxuY29uc3QgYWJvdXRQYWdlID0gKCkgPT4ge1xyXG4gICAgY2xlYXJDb250ZW50KCk7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCdjb250ZW50Jyk7XHJcbiAgICAvL3NlY3Rpb25zXHJcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3Qgc3RvcmVIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGFib3V0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdhYm91dCcpO1xyXG4gICAgc3RvcmVIb3Vycy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnc3RvcmVob3VycycpO1xyXG5cclxuICAgIC8vYWJvdXRcclxuICAgIGNvbnN0IGFib3V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY29uc3QgYWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgYWJvdXRQaWN0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgYWJvdXRUaXRsZS5pbm5lckhUTUwgPSBcIkFib3V0IFBvdGF0b2UgV29ya3MuLi5cIjtcclxuICAgIGFib3V0VGV4dC5pbm5lckhUTUwgPSBcIldlbGNvbWUgdG8gcG90YXRvIHdvcmtzLCB3ZSBjb29rIGFuZCBzZXJ2ZSBzdHJpY3RseSBwb3RhdG8gcmVsYXRlZCBkaXNoZXNcIjtcclxuICAgIGFib3V0UGljdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLycpO1xyXG5cclxuICAgIC8vc3RvcmUgaG91cnNlXHJcbiAgICBjb25zdCBzdG9yZUhvdXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY29uc3Qgc3RvcmVIb3Vyc0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICAgIHN0b3JlSG91cnNUaXRsZS5pbm5lckhUTUwgPSBcIlN0b3JlIEhvdXJzXCI7XHJcblxyXG4gICAgY29uc3QgbXdmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IHR0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBzYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3Qgc3VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHJcbiAgICBtd2YuaW5uZXJIVE1MID0gXCJNb24sIFdlZCwgRnJpIDogMTE6MDBhbSAtIDA4OjAwcG1cIjtcclxuICAgIHR0aC5pbm5lckhUTUwgPSBcIlR1ZSBUaHUgICAgICAgOiAwNzowMGFtIC0gMDU6MDBwbVwiO1xyXG4gICAgc2F0LmlubmVySFRNTCA9IFwiU2F0dXJkYXkgICAgICA6IDExOjAwYW0gLSAxMTowMHBtXCI7XHJcbiAgICBzdW4uaW5uZXJIVE1MID0gXCJTdW5kYXkgICAgICAgIDogMTE6MDBhbSAtIDA1OjAwcG1cIjtcclxuXHJcbiAgICBcclxuICAgIHN0b3JlSG91cnNCb2R5LmFwcGVuZChtd2YsIHR0aCwgc2F0LCBzdW4pO1xyXG4gICAgc3RvcmVIb3Vycy5hcHBlbmQoc3RvcmVIb3Vyc1RpdGxlLCBzdG9yZUhvdXJzQm9keSk7XHJcbiAgICBhYm91dC5hcHBlbmQoYWJvdXRUaXRsZSwgYWJvdXRUZXh0LCBhYm91dFBpY3R1cmUpO1xyXG4gICAgY29udGVudC5hcHBlbmQoYWJvdXQsIHN0b3JlSG91cnMpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFib3V0UGFnZTsiLCJjb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIHdoaWxlKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcclxuICAgIH0gICBcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsZWFyQ29udGVudDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=