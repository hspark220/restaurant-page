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
    const about = document.getElementById('about');
    const menu = document.getElementById('menu');
    const contact = document.getElementById('contact');
    about.style.removeProperty('box-shadow');
    menu.style.removeProperty('box-shadow');
    contact.style.removeProperty('box-shadow');
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

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFNBQVM7QUFDbkM7QUFDQSx5QkFBeUIsaUJBQWlCLElBQUksU0FBUztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLE9BQU87Ozs7Ozs7Ozs7Ozs7O0FDWHRCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNia0I7QUFDVjtBQUNDO0FBQ3BDO0FBQ0E7QUFDQSxJQUFJLDREQUFZO0FBQ2hCO0FBQ0EsSUFBSSxzREFBUztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFPO0FBQ1gsSUFBSSx1REFBTztBQUNYLElBQUksdURBQU87QUFDWCxJQUFJLHVEQUFPO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFFBQVE7Ozs7Ozs7Ozs7Ozs7O0FDOUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWRkTWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY2xlYXJDb250ZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zaGFkZVdvcmQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWRkTWVudSA9IChkaXYsIGRpc2hOYW1lLCBkaXNoRGVzY3JpcHRpb24sIGRpc2hDb3N0KSA9PiB7XHJcbiAgICBjb25zdCBkaXNoSDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xyXG4gICAgY29uc3QgZGlzaFAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjb25zdCBjb2xvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgICBkaXNoSDQuaW5uZXJIVE1MID0gYCR7ZGlzaE5hbWV9YDtcclxuICAgIGNvbG9uLmlubmVySFRNTCA9ICc6JztcclxuICAgIGRpc2hQLmlubmVySFRNTCA9IGAke2Rpc2hEZXNjcmlwdGlvbn0gKCQke2Rpc2hDb3N0fSlgO1xyXG4gICAgZGl2LmFwcGVuZChkaXNoSDQsIGNvbG9uLCBkaXNoUCk7XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkTWVudTsiLCJjb25zdCBjbGVhckNvbnRlbnQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgIHdoaWxlKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIGNvbnN0IGFib3V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fib3V0Jyk7XHJcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUnKTtcclxuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xyXG4gICAgYWJvdXQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2JveC1zaGFkb3cnKTtcclxuICAgIG1lbnUuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2JveC1zaGFkb3cnKTtcclxuICAgIGNvbnRhY3Quc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2JveC1zaGFkb3cnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xlYXJDb250ZW50OyIsImltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9jbGVhckNvbnRlbnQuanMnO1xyXG5pbXBvcnQgYWRkTWVudSBmcm9tICcuL2FkZE1lbnUuanMnO1xyXG5pbXBvcnQgc2hhZGVXb3JkIGZyb20gJy4vc2hhZGVXb3JkJztcclxuXHJcbmNvbnN0IG1lbnVQYWdlID0gKCkgPT4ge1xyXG4gICAgY2xlYXJDb250ZW50KCk7XHJcbiAgICBjb25zdCB0YWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudScpO1xyXG4gICAgc2hhZGVXb3JkKHRhYik7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICAvL3NlY3Rpb25zXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBhcHBldGl6ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGVudHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZGVzc2VydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgYXBwZXRpemVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgY29uc3QgZW50cmVlVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgY29uc3QgZGVzc2VydFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuXHJcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywndGl0bGUnKTtcclxuICAgIGFwcGV0aXplci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnYXBwZXRpemVyJyk7XHJcbiAgICBlbnRyZWUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2VudHJlZScpO1xyXG4gICAgZGVzc2VydC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnZGVzc2VydCcpO1xyXG4gICAgYXBwZXRpemVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdlbnRyeScpO1xyXG4gICAgZW50cmVlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdlbnRyeScpO1xyXG4gICAgZGVzc2VydC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywnZW50cnknKTtcclxuXHJcbiAgICAvL2FkZGluZyB0aXRsZXNcclxuICAgIHRpdGxlLmlubmVySFRNTCA9ICdNZW51J1xyXG4gICAgYXBwZXRpemVyVGl0bGUuaW5uZXJIVE1MID0gJ0FwcGV0aXplcic7XHJcbiAgICBlbnRyZWVUaXRsZS5pbm5lckhUTUwgPSAnRW50cmVlJztcclxuICAgIGRlc3NlcnRUaXRsZS5pbm5lckhUTUwgPSAnRGVzc2VydCc7XHJcbiAgICBhcHBldGl6ZXIuYXBwZW5kKGFwcGV0aXplclRpdGxlKTtcclxuICAgIGVudHJlZS5hcHBlbmQoZW50cmVlVGl0bGUpO1xyXG4gICAgZGVzc2VydC5hcHBlbmQoZGVzc2VydFRpdGxlKTtcclxuXHJcbiAgICAvL2FkZGluZyBtZW51XHJcbiAgICBhZGRNZW51KGFwcGV0aXplciwgJ0ZyZW5jaCBGcmllcycsICdwb3RhdG9lcyBjdXQgdXAgYW5kIGRlZXAgZnJpZWQnLCA0KTtcclxuICAgIGFkZE1lbnUoYXBwZXRpemVyLCAnUG90YXRvIFdlZGdlJywgJ3BvdGF0b2VzIGN1dCB1cCBhbmQgZGVlcCBmcmllZCcsIDQpO1xyXG4gICAgYWRkTWVudShlbnRyZWUsICdCYWtlZCBQb3RhdG8nLCdwb3RhdG8gYmFrZWQgd2l0aCB0b3BwaW5ncyBhZGRlZCcsIDExKTtcclxuICAgIGFkZE1lbnUoZGVzc2VydCwgJ1N3ZWV0IFBvdGF0byBDYWtlJywgJ3N3ZWV0IHBvdGF0byBjaGVlc2UgY2FrZScsIDcpO1xyXG5cclxuICAgIFxyXG4gICAgY29udGVudC5hcHBlbmQodGl0bGUsIGFwcGV0aXplciwgZW50cmVlLCBkZXNzZXJ0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudVBhZ2U7IiwiY29uc3Qgc2hhZGVXb3JkID0gKGVsZW1lbnQpID0+IHtcclxuICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJ2JveC1zaGFkb3cnLCdpbnNldCAwIC0wLjRyZW0gMCAjZmNkMzRkZGEnKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2hhZGVXb3JkOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==