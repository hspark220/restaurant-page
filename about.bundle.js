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
    aboutText.innerHTML = "Welcome to potato works, we cook and serve strictly potato related dishes.\
                           Come and enjoy our course of potatos that have been cooked and prepared by the most top notch potato chefs! ";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQzdDO0FBQ0E7QUFDQSxJQUFJLDREQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7QUMvQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jbGVhckNvbnRlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsZWFyQ29udGVudCBmcm9tICcuL2NsZWFyQ29udGVudC5qcyc7XHJcblxyXG5jb25zdCBhYm91dFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjbGVhckNvbnRlbnQoKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRlbnQnKTtcclxuICAgIC8vc2VjdGlvbnNcclxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBzdG9yZUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgYWJvdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2Fib3V0Jyk7XHJcbiAgICBzdG9yZUhvdXJzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdzdG9yZWhvdXJzJyk7XHJcblxyXG4gICAgLy9hYm91dFxyXG4gICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBhYm91dFBpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICBhYm91dFRpdGxlLmlubmVySFRNTCA9IFwiQWJvdXQgUG90YXRvZSBXb3Jrcy4uLlwiO1xyXG4gICAgYWJvdXRUZXh0LmlubmVySFRNTCA9IFwiV2VsY29tZSB0byBwb3RhdG8gd29ya3MsIHdlIGNvb2sgYW5kIHNlcnZlIHN0cmljdGx5IHBvdGF0byByZWxhdGVkIGRpc2hlcy5cXFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBDb21lIGFuZCBlbmpveSBvdXIgY291cnNlIG9mIHBvdGF0b3MgdGhhdCBoYXZlIGJlZW4gY29va2VkIGFuZCBwcmVwYXJlZCBieSB0aGUgbW9zdCB0b3Agbm90Y2ggcG90YXRvIGNoZWZzISBcIjtcclxuICAgIGFib3V0UGljdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLycpO1xyXG5cclxuICAgIC8vc3RvcmUgaG91cnNlXHJcbiAgICBjb25zdCBzdG9yZUhvdXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY29uc3Qgc3RvcmVIb3Vyc0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICAgIHN0b3JlSG91cnNUaXRsZS5pbm5lckhUTUwgPSBcIlN0b3JlIEhvdXJzXCI7XHJcblxyXG4gICAgY29uc3QgbXdmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IHR0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBzYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3Qgc3VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHJcbiAgICBtd2YuaW5uZXJIVE1MID0gXCJNb24sIFdlZCwgRnJpIDogMTE6MDBhbSAtIDA4OjAwcG1cIjtcclxuICAgIHR0aC5pbm5lckhUTUwgPSBcIlR1ZSBUaHUgICAgICAgOiAwNzowMGFtIC0gMDU6MDBwbVwiO1xyXG4gICAgc2F0LmlubmVySFRNTCA9IFwiU2F0dXJkYXkgICAgICA6IDExOjAwYW0gLSAxMTowMHBtXCI7XHJcbiAgICBzdW4uaW5uZXJIVE1MID0gXCJTdW5kYXkgICAgICAgIDogMTE6MDBhbSAtIDA1OjAwcG1cIjtcclxuXHJcbiAgICBcclxuICAgIHN0b3JlSG91cnNCb2R5LmFwcGVuZChtd2YsIHR0aCwgc2F0LCBzdW4pO1xyXG4gICAgc3RvcmVIb3Vycy5hcHBlbmQoc3RvcmVIb3Vyc1RpdGxlLCBzdG9yZUhvdXJzQm9keSk7XHJcbiAgICBhYm91dC5hcHBlbmQoYWJvdXRUaXRsZSwgYWJvdXRUZXh0LCBhYm91dFBpY3R1cmUpO1xyXG4gICAgY29udGVudC5hcHBlbmQoYWJvdXQsIHN0b3JlSG91cnMpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFib3V0UGFnZTsiLCJjb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIHdoaWxlKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcclxuICAgIH0gICBcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsZWFyQ29udGVudDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=