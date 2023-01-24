"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

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
    const content = document.createElement('div');
    content.setAttribute('id','content');
    content.append('this is contact');
    document.body.append(content);
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






const restaurant = (() => {
    //header
    const _header = document.createElement('header');

    //navigation
    const _nav = document.createElement('div');
    _nav.setAttribute('id', 'nav');

    //content
    const _content = document.createElement('div');
    _content.setAttribute('id','content');
    
    const _aboutBtn = document.createElement('input');
    const _menuBtn = document.createElement('input');
    const _contactBtn = document.createElement('input');
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

    const runPage = () => {
        document.body.append(_header, _content)
        _header.appendChild(_nav);
        _nav.append(_aboutBtn, _menuBtn, _contactBtn);
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


const menuPage = () => {
    (0,_clearContent_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const content = document.createElement('div');
    content.setAttribute('id','content');
    content.append('this is menu');
    document.body.append(content);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQzdDO0FBQ0E7QUFDQSxJQUFJLDREQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FDM0N4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7O0FDUmtCO0FBQzdDO0FBQ0E7QUFDQSxJQUFJLDREQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7QUNYUztBQUNGO0FBQ007QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGlEQUFTO0FBQ2pELHVDQUF1QyxnREFBUTtBQUMvQywwQ0FBMEMsbURBQVc7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQVM7QUFDakI7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDL0M2QztBQUM3QztBQUNBO0FBQ0EsSUFBSSw0REFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jbGVhckNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9jbGVhckNvbnRlbnQuanMnO1xyXG5cclxuY29uc3QgYWJvdXRQYWdlID0gKCkgPT4ge1xyXG4gICAgY2xlYXJDb250ZW50KCk7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCdjb250ZW50Jyk7XHJcbiAgICAvL3NlY3Rpb25zXHJcbiAgICBjb25zdCBhYm91dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3Qgc3RvcmVIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIC8vYWJvdXRcclxuICAgIGNvbnN0IGFib3V0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY29uc3QgYWJvdXRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgYWJvdXRQaWN0dXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgYWJvdXRUaXRsZS5pbm5lckhUTUwgPSBcIkFib3V0IFBvdGF0b2UgV29ya3MuLi5cIjtcclxuICAgIGFib3V0VGV4dC5pbm5lckhUTUwgPSBcIldlbGNvbWUgdG8gcG90YXRvIHdvcmtzLCB3ZSBjb29rIGFuZCBzZXJ2ZSBzdHJpY3RseSBwb3RhdG8gcmVsYXRlZCBkaXNoZXNcIjtcclxuICAgIGFib3V0UGljdHVyZS5zZXRBdHRyaWJ1dGUoJ3NyYycsICcuLycpO1xyXG5cclxuICAgIC8vc3RvcmUgaG91cnNlXHJcbiAgICBjb25zdCBzdG9yZUhvdXJzVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgY29uc3Qgc3RvcmVIb3Vyc0JvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICAgIHN0b3JlSG91cnNUaXRsZS5pbm5lckhUTUwgPSBcIlN0b3JlIEhvdXJzXCI7XHJcblxyXG4gICAgY29uc3QgbXdmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IHR0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBzYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3Qgc3VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuXHJcbiAgICBtd2YuaW5uZXJIVE1MID0gXCJNb24sIFdlZCwgRnJpIDogMTE6MDBhbSAtIDA4OjAwcG1cIjtcclxuICAgIHR0aC5pbm5lckhUTUwgPSBcIlR1ZSBUaHUgICAgICAgOiAwNzowMGFtIC0gMDU6MDBwbVwiO1xyXG4gICAgc2F0LmlubmVySFRNTCA9IFwiU2F0dXJkYXkgICAgICA6IDExOjAwYW0gLSAxMTowMHBtXCI7XHJcbiAgICBzdW4uaW5uZXJIVE1MID0gXCJTdW5kYXkgICAgICAgIDogMTE6MDBhbSAtIDA1OjAwcG1cIjtcclxuXHJcbiAgICBcclxuICAgIHN0b3JlSG91cnNCb2R5LmFwcGVuZChtd2YsIHR0aCwgc2F0LCBzdW4pO1xyXG4gICAgc3RvcmVIb3Vycy5hcHBlbmQoc3RvcmVIb3Vyc1RpdGxlLCBzdG9yZUhvdXJzQm9keSk7XHJcbiAgICBhYm91dC5hcHBlbmQoYWJvdXRUaXRsZSwgYWJvdXRUZXh0LCBhYm91dFBpY3R1cmUpO1xyXG4gICAgY29udGVudC5hcHBlbmQoYWJvdXQsIHN0b3JlSG91cnMpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFib3V0UGFnZTsiLCJjb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIHdoaWxlKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcclxuICAgIH0gICBcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsZWFyQ29udGVudDsiLCJpbXBvcnQgY2xlYXJDb250ZW50IGZyb20gJy4vY2xlYXJDb250ZW50LmpzJztcclxuXHJcbmNvbnN0IGNvbnRhY3RQYWdlID0gKCkgPT4ge1xyXG4gICAgY2xlYXJDb250ZW50KCk7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCdjb250ZW50Jyk7XHJcbiAgICBjb250ZW50LmFwcGVuZCgndGhpcyBpcyBjb250YWN0Jyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChjb250ZW50KTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3RQYWdlOyIsImltcG9ydCBhYm91dFBhZ2UgZnJvbSAnLi9hYm91dC5qcyc7XHJcbmltcG9ydCBtZW51UGFnZSBmcm9tICcuL21lbnUuanMnO1xyXG5pbXBvcnQgY29udGFjdFBhZ2UgZnJvbSAnLi9jb250YWN0LmpzJztcclxuXHJcblxyXG5cclxuY29uc3QgcmVzdGF1cmFudCA9ICgoKSA9PiB7XHJcbiAgICAvL2hlYWRlclxyXG4gICAgY29uc3QgX2hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG5cclxuICAgIC8vbmF2aWdhdGlvblxyXG4gICAgY29uc3QgX25hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgX25hdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hdicpO1xyXG5cclxuICAgIC8vY29udGVudFxyXG4gICAgY29uc3QgX2NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIF9jb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCdjb250ZW50Jyk7XHJcbiAgICBcclxuICAgIGNvbnN0IF9hYm91dEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjb25zdCBfbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjb25zdCBfY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBfYWJvdXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgX2Fib3V0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdhYm91dCcpO1xyXG4gICAgX21lbnVCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xyXG4gICAgX21lbnVCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ21lbnUnKTtcclxuICAgIF9jb250YWN0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICAgIF9jb250YWN0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdjb250YWN0Jyk7XHJcblxyXG4gICAgXHJcbiAgICBfYWJvdXRCdG4udmFsdWUgPSAnYWJvdXQnO1xyXG4gICAgX21lbnVCdG4udmFsdWUgPSAnbWVudSc7XHJcbiAgICBfY29udGFjdEJ0bi52YWx1ZSA9ICdjb250YWN0JztcclxuXHJcbiAgICBfYWJvdXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhYm91dFBhZ2UpO1xyXG4gICAgX21lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtZW51UGFnZSk7XHJcbiAgICBfY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNvbnRhY3RQYWdlKTtcclxuXHJcbiAgICBjb25zdCBydW5QYWdlID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKF9oZWFkZXIsIF9jb250ZW50KVxyXG4gICAgICAgIF9oZWFkZXIuYXBwZW5kQ2hpbGQoX25hdik7XHJcbiAgICAgICAgX25hdi5hcHBlbmQoX2Fib3V0QnRuLCBfbWVudUJ0biwgX2NvbnRhY3RCdG4pO1xyXG4gICAgICAgIGFib3V0UGFnZSgpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmV0dXJuIHtydW5QYWdlfTtcclxufSkoKTtcclxuXHJcbnJlc3RhdXJhbnQucnVuUGFnZSgpOyIsImltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9jbGVhckNvbnRlbnQuanMnO1xyXG5cclxuY29uc3QgbWVudVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjbGVhckNvbnRlbnQoKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRlbnQnKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kKCd0aGlzIGlzIG1lbnUnKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbnRlbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51UGFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=