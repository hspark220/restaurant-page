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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFNBQVM7QUFDbkM7QUFDQSx5QkFBeUIsaUJBQWlCLElBQUksU0FBUztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FDWHRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7OztBQ1BrQjtBQUNWO0FBQ25DO0FBQ0E7QUFDQSxJQUFJLDREQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx1REFBTztBQUNYLElBQUksdURBQU87QUFDWCxJQUFJLHVEQUFPO0FBQ1gsSUFBSSx1REFBTztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2FkZE1lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NsZWFyQ29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhZGRNZW51ID0gKGRpdiwgZGlzaE5hbWUsIGRpc2hEZXNjcmlwdGlvbiwgZGlzaENvc3QpID0+IHtcclxuICAgIGNvbnN0IGRpc2hINCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICBjb25zdCBkaXNoUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGNvbnN0IGNvbG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICAgIGRpc2hINC5pbm5lckhUTUwgPSBgJHtkaXNoTmFtZX1gO1xyXG4gICAgY29sb24uaW5uZXJIVE1MID0gJzonO1xyXG4gICAgZGlzaFAuaW5uZXJIVE1MID0gYCR7ZGlzaERlc2NyaXB0aW9ufSAoJCR7ZGlzaENvc3R9KWA7XHJcbiAgICBkaXYuYXBwZW5kKGRpc2hINCwgY29sb24sIGRpc2hQKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRNZW51OyIsImNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgd2hpbGUoY29udGVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfSAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGVhckNvbnRlbnQ7IiwiaW1wb3J0IGNsZWFyQ29udGVudCBmcm9tICcuL2NsZWFyQ29udGVudC5qcyc7XHJcbmltcG9ydCBhZGRNZW51IGZyb20gJy4vYWRkTWVudS5qcyc7XHJcblxyXG5jb25zdCBtZW51UGFnZSA9ICgpID0+IHtcclxuICAgIGNsZWFyQ29udGVudCgpO1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICAvL3NlY3Rpb25zXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBhcHBldGl6ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGVudHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZGVzc2VydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgYXBwZXRpemVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgY29uc3QgZW50cmVlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgY29uc3QgZGVzc2VydFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuXHJcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywndGl0bGUnKTtcclxuICAgIGFwcGV0aXplci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnYXBwZXRpemVyJyk7XHJcbiAgICBlbnRyZWUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2VudHJlZScpO1xyXG4gICAgZGVzc2VydC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnZGVzc2VydCcpO1xyXG4gICAgYXBwZXRpemVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdlbnRyeScpO1xyXG4gICAgZW50cmVlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdlbnRyeScpO1xyXG4gICAgZGVzc2VydC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnZW50cnknKTtcclxuXHJcbiAgICAvL2FkZGluZyB0aXRsZXNcclxuICAgIHRpdGxlLmlubmVySFRNTCA9ICdNZW51J1xyXG4gICAgYXBwZXRpemVyVGl0bGUuaW5uZXJIVE1MID0gJ0FwcGV0aXplcic7XHJcbiAgICBlbnRyZWVUaXRsZS5pbm5lckhUTUwgPSAnRW50cmVlJztcclxuICAgIGRlc3NlcnRUaXRsZS5pbm5lckhUTUwgPSAnRGVzc2VydCc7XHJcbiAgICBhcHBldGl6ZXIuYXBwZW5kKGFwcGV0aXplclRpdGxlKTtcclxuICAgIGVudHJlZS5hcHBlbmQoZW50cmVlVGl0bGUpO1xyXG4gICAgZGVzc2VydC5hcHBlbmQoZGVzc2VydFRpdGxlKTtcclxuXHJcbiAgICAvL2FkZGluZyBtZW51XHJcbiAgICBhZGRNZW51KGFwcGV0aXplciwgJ0ZyZW5jaCBGcmllcycsICdwb3RhdG9lcyBjdXQgdXAgYW5kIGRlZXAgZnJpZWQnLCA0KTtcclxuICAgIGFkZE1lbnUoYXBwZXRpemVyLCAnUG90YXRvIFdlZGdlJywgJ3BvdGF0b2VzIGN1dCB1cCBhbmQgZGVlcCBmcmllZCcsIDQpO1xyXG4gICAgYWRkTWVudShlbnRyZWUsICdCYWtlZCBQb3RhdG8nLCdwb3RhdG8gYmFrZWQgd2l0aCB0b3BwaW5ncyBhZGRlZCcsIDExKTtcclxuICAgIGFkZE1lbnUoZGVzc2VydCwgJ1N3ZWV0IFBvdGF0byBDYWtlJywgJ3N3ZWV0IHBvdGF0byBjaGVlc2UgY2FrZScsIDcpO1xyXG5cclxuICAgIFxyXG4gICAgY29udGVudC5hcHBlbmQodGl0bGUsIGFwcGV0aXplciwgZW50cmVlLCBkZXNzZXJ0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudVBhZ2U7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9