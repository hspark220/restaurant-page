"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["contact"],{

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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/contact.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JrQjtBQUNOO0FBQ3ZDO0FBQ0E7QUFDQSxJQUFJLDREQUFZO0FBQ2hCO0FBQ0EsSUFBSSx5REFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7O0FDNUIxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY2xlYXJDb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zaGFkZVdvcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2xlYXJDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICB3aGlsZShjb250ZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhYm91dCcpO1xyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jyk7XHJcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKTtcclxuICAgIGFib3V0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdib3gtc2hhZG93Jyk7XHJcbiAgICBtZW51LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdib3gtc2hhZG93Jyk7XHJcbiAgICBjb250YWN0LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdib3gtc2hhZG93Jyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsZWFyQ29udGVudDsiLCJpbXBvcnQgY2xlYXJDb250ZW50IGZyb20gJy4vY2xlYXJDb250ZW50LmpzJztcclxuaW1wb3J0IHNoYWRlV29yZCBmcm9tICcuL3NoYWRlV29yZC5qcyc7XHJcblxyXG5jb25zdCBjb250YWN0UGFnZSA9ICgpID0+IHtcclxuICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgY29uc3QgdGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRhY3QnKTtcclxuICAgIHNoYWRlV29yZCh0YWIpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnY29udGFjdC1jb250YWluZXInKTtcclxuICAgIFxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY29uc3QgbnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuXHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIkNvbnRhY3QgVXNcIjtcclxuICAgIG51bWJlci5pbm5lckhUTUwgPSBcInBob25lIG51bWJlcjogeHh4LXh4eC14eHh4XCI7XHJcbiAgICBsb2NhdGlvbi5pbm5lckhUTUwgPSBcImxvY2F0aW9uOiAxMjMgc3RyZWV0IG5hbWUsIGNpdHksIHN0YXRlLCAxMjM0NVwiO1xyXG4gICAgZW1haWwuaW5uZXJIVE1MID0gXCJlbWFpbCBhdCA8c3Ryb25nPnBvdGF0b3dvcmtAcG90YXRvLmNvbTwvc3Ryb25nPlwiO1xyXG5cclxuICAgIGNvbnRhY3QuYXBwZW5kKHRpdGxlLCBudW1iZXIsIGVtYWlsLCBsb2NhdGlvbik7XHJcbiAgICBjb250ZW50LmFwcGVuZChjb250YWN0KTtcclxuICAgIFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFBhZ2U7IiwiY29uc3Qgc2hhZGVXb3JkID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ2JveC1zaGFkb3cnLCdpbnNldCAwIC0wLjRyZW0gMCAjZmNkMzRkZGEnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hhZGVXb3JkOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==