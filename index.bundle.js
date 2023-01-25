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
    dishH4.innerHTML = dishName;
    dishP.innerHTML = `${dishDescription} : $${dishCost}`;
    div.append(dishH4, dishP);

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
/* harmony import */ var _addMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addMenu.js */ "./src/addMenu.js");



const menuPage = () => {
    (0,_clearContent_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    const content = document.createElement('div');
    content.setAttribute('id','content');
    //sections
    const title = document.createElement('h2');
    const appetizer = document.createElement('div');
    const entree = document.createElement('div');
    const dessert = document.createElement('div');

    title.setAttribute('class','title');
    appetizer.setAttribute('class','appetizer');
    entree.setAttribute('class','entree');
    dessert.setAttribute('class','dessert');

    //adding titles
    title.innerHTML = 'Menu'
    appetizer.innerHTML = '<h3>Appetizer<h3>';
    entree.innerHTML = '<h3>Entree<h3>';
    dessert.innerHTML = '<h3>Dessert<h3>';

    //adding menu
    (0,_addMenu_js__WEBPACK_IMPORTED_MODULE_1__["default"])(appetizer, 'French Fries', 'potatoes cut up and deep fried', 4);
    (0,_addMenu_js__WEBPACK_IMPORTED_MODULE_1__["default"])(entree, 'Baked Potato','potato baked with toppings added', 11);
    (0,_addMenu_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dessert, 'Sweet Potato Cake', 'cheese cake flavored with sweet potato', 7);


    content.append(title, appetizer, entree, dessert);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTZDO0FBQzdDO0FBQ0E7QUFDQSxJQUFJLDREQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0FDOUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpQkFBaUIsS0FBSyxTQUFTO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7QUNUdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFlBQVk7Ozs7Ozs7Ozs7Ozs7OztBQ1JrQjtBQUM3QztBQUNBO0FBQ0EsSUFBSSw0REFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFdBQVc7Ozs7Ozs7Ozs7Ozs7O0FDWFM7QUFDRjtBQUNNO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxpREFBUztBQUNqRCx1Q0FBdUMsZ0RBQVE7QUFDL0MsMENBQTBDLG1EQUFXO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFTO0FBQ2pCO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQzZDO0FBQ1Y7QUFDbkM7QUFDQTtBQUNBLElBQUksNERBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQU87QUFDWCxJQUFJLHVEQUFPO0FBQ1gsSUFBSSx1REFBTztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2FkZE1lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NsZWFyQ29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsZWFyQ29udGVudCBmcm9tICcuL2NsZWFyQ29udGVudC5qcyc7XHJcblxyXG5jb25zdCBhYm91dFBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjbGVhckNvbnRlbnQoKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRlbnQnKTtcclxuICAgIC8vc2VjdGlvbnNcclxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBzdG9yZUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgYWJvdXQuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2Fib3V0Jyk7XHJcbiAgICBzdG9yZUhvdXJzLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdzdG9yZWhvdXJzJyk7XHJcblxyXG4gICAgLy9hYm91dFxyXG4gICAgY29uc3QgYWJvdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBhYm91dFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBhYm91dFBpY3R1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICBhYm91dFRpdGxlLmlubmVySFRNTCA9IFwiQWJvdXQgUG90YXRvZSBXb3Jrcy4uLlwiO1xyXG4gICAgYWJvdXRUZXh0LmlubmVySFRNTCA9IFwiV2VsY29tZSB0byBwb3RhdG8gd29ya3MsIHdlIGNvb2sgYW5kIHNlcnZlIHN0cmljdGx5IHBvdGF0byByZWxhdGVkIGRpc2hlc1wiO1xyXG4gICAgYWJvdXRQaWN0dXJlLnNldEF0dHJpYnV0ZSgnc3JjJywgJy4vJyk7XHJcblxyXG4gICAgLy9zdG9yZSBob3Vyc2VcclxuICAgIGNvbnN0IHN0b3JlSG91cnNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBzdG9yZUhvdXJzQm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG4gICAgc3RvcmVIb3Vyc1RpdGxlLmlubmVySFRNTCA9IFwiU3RvcmUgSG91cnNcIjtcclxuXHJcbiAgICBjb25zdCBtd2YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgY29uc3QgdHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IHNhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBjb25zdCBzdW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG5cclxuICAgIG13Zi5pbm5lckhUTUwgPSBcIk1vbiwgV2VkLCBGcmkgOiAxMTowMGFtIC0gMDg6MDBwbVwiO1xyXG4gICAgdHRoLmlubmVySFRNTCA9IFwiVHVlIFRodSAgICAgICA6IDA3OjAwYW0gLSAwNTowMHBtXCI7XHJcbiAgICBzYXQuaW5uZXJIVE1MID0gXCJTYXR1cmRheSAgICAgIDogMTE6MDBhbSAtIDExOjAwcG1cIjtcclxuICAgIHN1bi5pbm5lckhUTUwgPSBcIlN1bmRheSAgICAgICAgOiAxMTowMGFtIC0gMDU6MDBwbVwiO1xyXG5cclxuICAgIFxyXG4gICAgc3RvcmVIb3Vyc0JvZHkuYXBwZW5kKG13ZiwgdHRoLCBzYXQsIHN1bik7XHJcbiAgICBzdG9yZUhvdXJzLmFwcGVuZChzdG9yZUhvdXJzVGl0bGUsIHN0b3JlSG91cnNCb2R5KTtcclxuICAgIGFib3V0LmFwcGVuZChhYm91dFRpdGxlLCBhYm91dFRleHQsIGFib3V0UGljdHVyZSk7XHJcbiAgICBjb250ZW50LmFwcGVuZChhYm91dCwgc3RvcmVIb3Vycyk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChjb250ZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJvdXRQYWdlOyIsImNvbnN0IGFkZE1lbnUgPSAoZGl2LCBkaXNoTmFtZSwgZGlzaERlc2NyaXB0aW9uLCBkaXNoQ29zdCkgPT4ge1xyXG4gICAgY29uc3QgZGlzaEg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcclxuICAgIGNvbnN0IGRpc2hQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZGlzaEg0LmlubmVySFRNTCA9IGRpc2hOYW1lO1xyXG4gICAgZGlzaFAuaW5uZXJIVE1MID0gYCR7ZGlzaERlc2NyaXB0aW9ufSA6ICQke2Rpc2hDb3N0fWA7XHJcbiAgICBkaXYuYXBwZW5kKGRpc2hINCwgZGlzaFApO1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZE1lbnU7IiwiY29uc3QgY2xlYXJDb250ZW50ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICB3aGlsZShjb250ZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XHJcbiAgICB9ICAgXHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRlbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGVhckNvbnRlbnQ7IiwiaW1wb3J0IGNsZWFyQ29udGVudCBmcm9tICcuL2NsZWFyQ29udGVudC5qcyc7XHJcblxyXG5jb25zdCBjb250YWN0UGFnZSA9ICgpID0+IHtcclxuICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGVudCcpO1xyXG4gICAgY29udGVudC5hcHBlbmQoJ3RoaXMgaXMgY29udGFjdCcpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGVudCk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb250YWN0UGFnZTsiLCJpbXBvcnQgYWJvdXRQYWdlIGZyb20gJy4vYWJvdXQuanMnO1xyXG5pbXBvcnQgbWVudVBhZ2UgZnJvbSAnLi9tZW51LmpzJztcclxuaW1wb3J0IGNvbnRhY3RQYWdlIGZyb20gJy4vY29udGFjdC5qcyc7XHJcblxyXG5cclxuXHJcbmNvbnN0IHJlc3RhdXJhbnQgPSAoKCkgPT4ge1xyXG4gICAgLy9oZWFkZXJcclxuICAgIGNvbnN0IF9oZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuXHJcbiAgICAvL25hdmlnYXRpb25cclxuICAgIGNvbnN0IF9uYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIF9uYXYuc2V0QXR0cmlidXRlKCdpZCcsICduYXYnKTtcclxuXHJcbiAgICAvL2NvbnRlbnRcclxuICAgIGNvbnN0IF9jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBfY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGVudCcpO1xyXG4gICAgXHJcbiAgICBjb25zdCBfYWJvdXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY29uc3QgX21lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY29uc3QgX2NvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgX2Fib3V0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICAgIF9hYm91dEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnYWJvdXQnKTtcclxuICAgIF9tZW51QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcclxuICAgIF9tZW51QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdtZW51Jyk7XHJcbiAgICBfY29udGFjdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XHJcbiAgICBfY29udGFjdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGFjdCcpO1xyXG5cclxuICAgIFxyXG4gICAgX2Fib3V0QnRuLnZhbHVlID0gJ2Fib3V0JztcclxuICAgIF9tZW51QnRuLnZhbHVlID0gJ21lbnUnO1xyXG4gICAgX2NvbnRhY3RCdG4udmFsdWUgPSAnY29udGFjdCc7XHJcblxyXG4gICAgX2Fib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWJvdXRQYWdlKTtcclxuICAgIF9tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWVudVBhZ2UpO1xyXG4gICAgX2NvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb250YWN0UGFnZSk7XHJcblxyXG4gICAgY29uc3QgcnVuUGFnZSA9ICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChfaGVhZGVyLCBfY29udGVudClcclxuICAgICAgICBfaGVhZGVyLmFwcGVuZENoaWxkKF9uYXYpO1xyXG4gICAgICAgIF9uYXYuYXBwZW5kKF9hYm91dEJ0biwgX21lbnVCdG4sIF9jb250YWN0QnRuKTtcclxuICAgICAgICBhYm91dFBhZ2UoKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHJldHVybiB7cnVuUGFnZX07XHJcbn0pKCk7XHJcblxyXG5yZXN0YXVyYW50LnJ1blBhZ2UoKTsiLCJpbXBvcnQgY2xlYXJDb250ZW50IGZyb20gJy4vY2xlYXJDb250ZW50LmpzJztcclxuaW1wb3J0IGFkZE1lbnUgZnJvbSAnLi9hZGRNZW51LmpzJztcclxuXHJcbmNvbnN0IG1lbnVQYWdlID0gKCkgPT4ge1xyXG4gICAgY2xlYXJDb250ZW50KCk7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCdjb250ZW50Jyk7XHJcbiAgICAvL3NlY3Rpb25zXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBhcHBldGl6ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGVudHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZGVzc2VydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0aXRsZScpO1xyXG4gICAgYXBwZXRpemVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdhcHBldGl6ZXInKTtcclxuICAgIGVudHJlZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnZW50cmVlJyk7XHJcbiAgICBkZXNzZXJ0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdkZXNzZXJ0Jyk7XHJcblxyXG4gICAgLy9hZGRpbmcgdGl0bGVzXHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSAnTWVudSdcclxuICAgIGFwcGV0aXplci5pbm5lckhUTUwgPSAnPGgzPkFwcGV0aXplcjxoMz4nO1xyXG4gICAgZW50cmVlLmlubmVySFRNTCA9ICc8aDM+RW50cmVlPGgzPic7XHJcbiAgICBkZXNzZXJ0LmlubmVySFRNTCA9ICc8aDM+RGVzc2VydDxoMz4nO1xyXG5cclxuICAgIC8vYWRkaW5nIG1lbnVcclxuICAgIGFkZE1lbnUoYXBwZXRpemVyLCAnRnJlbmNoIEZyaWVzJywgJ3BvdGF0b2VzIGN1dCB1cCBhbmQgZGVlcCBmcmllZCcsIDQpO1xyXG4gICAgYWRkTWVudShlbnRyZWUsICdCYWtlZCBQb3RhdG8nLCdwb3RhdG8gYmFrZWQgd2l0aCB0b3BwaW5ncyBhZGRlZCcsIDExKTtcclxuICAgIGFkZE1lbnUoZGVzc2VydCwgJ1N3ZWV0IFBvdGF0byBDYWtlJywgJ2NoZWVzZSBjYWtlIGZsYXZvcmVkIHdpdGggc3dlZXQgcG90YXRvJywgNyk7XHJcblxyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kKHRpdGxlLCBhcHBldGl6ZXIsIGVudHJlZSwgZGVzc2VydCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChjb250ZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudVBhZ2U7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9