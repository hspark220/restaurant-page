"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["menu"],{

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
    document.body.removeChild(content);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearContent);

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

    //adding menu
    (0,_addMenu_js__WEBPACK_IMPORTED_MODULE_1__["default"])(appetizer, 'French Fries', 'potatoes cut up and deep fried', 4);
    (0,_addMenu_js__WEBPACK_IMPORTED_MODULE_1__["default"])(entree, 'Baked Potato','potato baked with toppings added', 11);
    (0,_addMenu_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dessert, 'Sweet Potato Cake', 'sweet potato cheese cake', 7);

    content.append(title,appetizerTitle, appetizer, entreeTitle, entree, dessertTitle, dessert);
    document.body.append(content);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFNBQVM7QUFDbkM7QUFDQSx5QkFBeUIsaUJBQWlCLElBQUksU0FBUztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FDWHRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7O0FDUmtCO0FBQ1Y7QUFDbkM7QUFDQTtBQUNBLElBQUksNERBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksdURBQU87QUFDWCxJQUFJLHVEQUFPO0FBQ1gsSUFBSSx1REFBTztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2FkZE1lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NsZWFyQ29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhZGRNZW51ID0gKGRpdiwgZGlzaE5hbWUsIGRpc2hEZXNjcmlwdGlvbiwgZGlzaENvc3QpID0+IHtcclxuICAgIGNvbnN0IGRpc2hINCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICBjb25zdCBkaXNoUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IGNvbG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICAgIGRpc2hINC5pbm5lckhUTUwgPSBgJHtkaXNoTmFtZX1gO1xyXG4gICAgY29sb24uaW5uZXJIVE1MID0gJzonO1xyXG4gICAgZGlzaFAuaW5uZXJIVE1MID0gYCR7ZGlzaERlc2NyaXB0aW9ufSAoJCR7ZGlzaENvc3R9KWA7XHJcbiAgICBkaXYuYXBwZW5kKGRpc2hINCwgY29sb24sIGRpc2hQKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRNZW51OyIsImNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgd2hpbGUoY29udGVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfSAgIFxyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb250ZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xlYXJDb250ZW50OyIsImltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9jbGVhckNvbnRlbnQuanMnO1xyXG5pbXBvcnQgYWRkTWVudSBmcm9tICcuL2FkZE1lbnUuanMnO1xyXG5cclxuY29uc3QgbWVudVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjbGVhckNvbnRlbnQoKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRlbnQnKTtcclxuICAgIC8vc2VjdGlvbnNcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGNvbnN0IGFwcGV0aXplciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZW50cmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBkZXNzZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBhcHBldGl6ZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBjb25zdCBlbnRyZWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XHJcbiAgICBjb25zdCBkZXNzZXJ0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG5cclxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCd0aXRsZScpO1xyXG4gICAgYXBwZXRpemVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdhcHBldGl6ZXInKTtcclxuICAgIGVudHJlZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnZW50cmVlJyk7XHJcbiAgICBkZXNzZXJ0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdkZXNzZXJ0Jyk7XHJcbiAgICBhcHBldGl6ZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2VudHJ5Jyk7XHJcbiAgICBlbnRyZWUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2VudHJ5Jyk7XHJcbiAgICBkZXNzZXJ0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdlbnRyeScpO1xyXG5cclxuICAgIC8vYWRkaW5nIHRpdGxlc1xyXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gJ01lbnUnXHJcbiAgICBhcHBldGl6ZXJUaXRsZS5pbm5lckhUTUwgPSAnQXBwZXRpemVyJztcclxuICAgIGVudHJlZVRpdGxlLmlubmVySFRNTCA9ICdFbnRyZWUnO1xyXG4gICAgZGVzc2VydFRpdGxlLmlubmVySFRNTCA9ICdEZXNzZXJ0JztcclxuXHJcbiAgICAvL2FkZGluZyBtZW51XHJcbiAgICBhZGRNZW51KGFwcGV0aXplciwgJ0ZyZW5jaCBGcmllcycsICdwb3RhdG9lcyBjdXQgdXAgYW5kIGRlZXAgZnJpZWQnLCA0KTtcclxuICAgIGFkZE1lbnUoZW50cmVlLCAnQmFrZWQgUG90YXRvJywncG90YXRvIGJha2VkIHdpdGggdG9wcGluZ3MgYWRkZWQnLCAxMSk7XHJcbiAgICBhZGRNZW51KGRlc3NlcnQsICdTd2VldCBQb3RhdG8gQ2FrZScsICdzd2VldCBwb3RhdG8gY2hlZXNlIGNha2UnLCA3KTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZCh0aXRsZSxhcHBldGl6ZXJUaXRsZSwgYXBwZXRpemVyLCBlbnRyZWVUaXRsZSwgZW50cmVlLCBkZXNzZXJ0VGl0bGUsIGRlc3NlcnQpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoY29udGVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnVQYWdlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==