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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/about.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDSjtBQUNGO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQVk7QUFDaEI7QUFDQSxJQUFJLHlEQUFTO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDhDQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7OztBQzVEeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7OztBQ2IzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NsZWFyQ29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc2hhZGVXb3JkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9jbGVhckNvbnRlbnQuanMnO1xyXG5pbXBvcnQgUGljdHVyZSBmcm9tICcuL2Fib3V0UGljdHVyZS5qcGcnO1xyXG5pbXBvcnQgc2hhZGVXb3JkIGZyb20gJy4vc2hhZGVXb3JkLmpzJztcclxuXHJcbmNvbnN0IGFib3V0UGFnZSA9ICgpID0+IHtcclxuICAgIC8vaW5pdGlhbGl6ZSBjb250ZW50XHJcbiAgICBjbGVhckNvbnRlbnQoKTtcclxuICAgIGNvbnN0IHRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dCcpO1xyXG4gICAgc2hhZGVXb3JkKHRhYik7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZm9vdGVyJyk7XHJcbiAgICAvL3NlY3Rpb25zXHJcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3Qgc3RvcmVIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGFib3V0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdhYm91dCcpO1xyXG4gICAgc3RvcmVIb3Vycy5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnc3RvcmVob3VycycpO1xyXG5cclxuICAgIC8vYWJvdXRcclxuICAgIGNvbnN0IGFib3V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY29uc3QgYWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgYWJvdXRQaWN0dXJlID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgYWJvdXRUaXRsZS5pbm5lckhUTUwgPSBcIkFib3V0IFBvdGF0b2UgV29ya3MuLi5cIjtcclxuICAgIGFib3V0VGV4dC5pbm5lckhUTUwgPSBcIldlbGNvbWUgdG8gcG90YXRvIHdvcmtzLCB3ZSBjb29rIGFuZCBzZXJ2ZSBzdHJpY3RseSBwb3RhdG8gcmVsYXRlZCBkaXNoZXMuXFxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29tZSBhbmQgZW5qb3kgb3VyIGNvdXJzZSBvZiBwb3RhdG9zIHRoYXQgaGF2ZSBiZWVuIGNvb2tlZCBhbmQgcHJlcGFyZWQgYnkgdGhlIG1vc3QgdG9wIG5vdGNoIHBvdGF0byBjaGVmcyEgXCI7XHJcbiAgICBhYm91dFBpY3R1cmUuc3JjID0gUGljdHVyZTtcclxuXHJcbiAgICAvL3N0b3JlIGhvdXJzZVxyXG4gICAgY29uc3Qgc3RvcmVIb3Vyc1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGNvbnN0IHN0b3JlSG91cnNCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHJcbiAgICBzdG9yZUhvdXJzVGl0bGUuaW5uZXJIVE1MID0gXCJTdG9yZSBIb3Vyc1wiO1xyXG5cclxuICAgIGNvbnN0IG13ZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCB0dGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3Qgc2F0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IHN1biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcblxyXG4gICAgbXdmLmlubmVySFRNTCA9IFwiTW9uLCBXZWQsIEZyaSA6IDExOjAwYW0gLSAwODowMHBtXCI7XHJcbiAgICB0dGguaW5uZXJIVE1MID0gXCJUdWUgVGh1ICAgICAgIDogMDc6MDBhbSAtIDA1OjAwcG1cIjtcclxuICAgIHNhdC5pbm5lckhUTUwgPSBcIlNhdHVyZGF5ICAgICAgOiAxMTowMGFtIC0gMTE6MDBwbVwiO1xyXG4gICAgc3VuLmlubmVySFRNTCA9IFwiU3VuZGF5ICAgICAgICA6IDExOjAwYW0gLSAwNTowMHBtXCI7XHJcblxyXG4gICAgY29uc3QgY2l0YXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpO1xyXG4gICAgY2l0YXRpb24uc2V0QXR0cmlidXRlKCdpZCcsJ2NpdGF0aW9uJylcclxuICAgIGNpdGF0aW9uLmlubmVySFRNTCA9ICdwaG90byBieSBGZXJuYW5kYSBNYXJ0aW5leiBvbiBVbnNwbGFzaCc7XHJcblxyXG4gICAgXHJcbiAgICBzdG9yZUhvdXJzQm9keS5hcHBlbmQobXdmLCB0dGgsIHNhdCwgc3VuKTtcclxuICAgIHN0b3JlSG91cnMuYXBwZW5kKHN0b3JlSG91cnNUaXRsZSwgc3RvcmVIb3Vyc0JvZHkpO1xyXG4gICAgYWJvdXQuYXBwZW5kKGFib3V0VGl0bGUsIGFib3V0VGV4dCwgYWJvdXRQaWN0dXJlLCBjaXRhdGlvbik7XHJcbiAgICBjb250ZW50LmFwcGVuZChhYm91dCwgc3RvcmVIb3Vycyk7XHJcblxyXG5cclxuICAgIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJvdXRQYWdlOyIsImNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgd2hpbGUoY29udGVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWJvdXQnKTtcclxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xyXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250YWN0Jyk7XHJcbiAgICBhYm91dC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnYm94LXNoYWRvdycpO1xyXG4gICAgbWVudS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnYm94LXNoYWRvdycpO1xyXG4gICAgY29udGFjdC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnYm94LXNoYWRvdycpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGVhckNvbnRlbnQ7IiwiY29uc3Qgc2hhZGVXb3JkID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ2JveC1zaGFkb3cnLCdpbnNldCAwIC0wLjRyZW0gMCAjZmNkMzRkZGEnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hhZGVXb3JkOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==