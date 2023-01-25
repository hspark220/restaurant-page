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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/menu.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlCQUFpQixLQUFLLFNBQVM7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxPQUFPOzs7Ozs7Ozs7Ozs7OztBQ1R0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7OztBQ1JrQjtBQUNWO0FBQ25DO0FBQ0E7QUFDQSxJQUFJLDREQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFPO0FBQ1gsSUFBSSx1REFBTztBQUNYLElBQUksdURBQU87QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2FkZE1lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NsZWFyQ29udGVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhZGRNZW51ID0gKGRpdiwgZGlzaE5hbWUsIGRpc2hEZXNjcmlwdGlvbiwgZGlzaENvc3QpID0+IHtcclxuICAgIGNvbnN0IGRpc2hINCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XHJcbiAgICBjb25zdCBkaXNoUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGRpc2hINC5pbm5lckhUTUwgPSBkaXNoTmFtZTtcclxuICAgIGRpc2hQLmlubmVySFRNTCA9IGAke2Rpc2hEZXNjcmlwdGlvbn0gOiAkJHtkaXNoQ29zdH1gO1xyXG4gICAgZGl2LmFwcGVuZChkaXNoSDQsIGRpc2hQKTtcclxuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRNZW51OyIsImNvbnN0IGNsZWFyQ29udGVudCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG4gICAgd2hpbGUoY29udGVudC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50LmZpcnN0Q2hpbGQpO1xyXG4gICAgfSAgIFxyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb250ZW50KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xlYXJDb250ZW50OyIsImltcG9ydCBjbGVhckNvbnRlbnQgZnJvbSAnLi9jbGVhckNvbnRlbnQuanMnO1xyXG5pbXBvcnQgYWRkTWVudSBmcm9tICcuL2FkZE1lbnUuanMnO1xyXG5cclxuY29uc3QgbWVudVBhZ2UgPSAoKSA9PiB7XHJcbiAgICBjbGVhckNvbnRlbnQoKTtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRlbnQnKTtcclxuICAgIC8vc2VjdGlvbnNcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGNvbnN0IGFwcGV0aXplciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgZW50cmVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBkZXNzZXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdjbGFzcycsJ3RpdGxlJyk7XHJcbiAgICBhcHBldGl6ZXIuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2FwcGV0aXplcicpO1xyXG4gICAgZW50cmVlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCdlbnRyZWUnKTtcclxuICAgIGRlc3NlcnQuc2V0QXR0cmlidXRlKCdjbGFzcycsJ2Rlc3NlcnQnKTtcclxuXHJcbiAgICAvL2FkZGluZyB0aXRsZXNcclxuICAgIHRpdGxlLmlubmVySFRNTCA9ICdNZW51J1xyXG4gICAgYXBwZXRpemVyLmlubmVySFRNTCA9ICc8aDM+QXBwZXRpemVyPGgzPic7XHJcbiAgICBlbnRyZWUuaW5uZXJIVE1MID0gJzxoMz5FbnRyZWU8aDM+JztcclxuICAgIGRlc3NlcnQuaW5uZXJIVE1MID0gJzxoMz5EZXNzZXJ0PGgzPic7XHJcblxyXG4gICAgLy9hZGRpbmcgbWVudVxyXG4gICAgYWRkTWVudShhcHBldGl6ZXIsICdGcmVuY2ggRnJpZXMnLCAncG90YXRvZXMgY3V0IHVwIGFuZCBkZWVwIGZyaWVkJywgNCk7XHJcbiAgICBhZGRNZW51KGVudHJlZSwgJ0Jha2VkIFBvdGF0bycsJ3BvdGF0byBiYWtlZCB3aXRoIHRvcHBpbmdzIGFkZGVkJywgMTEpO1xyXG4gICAgYWRkTWVudShkZXNzZXJ0LCAnU3dlZXQgUG90YXRvIENha2UnLCAnY2hlZXNlIGNha2UgZmxhdm9yZWQgd2l0aCBzd2VldCBwb3RhdG8nLCA3KTtcclxuXHJcblxyXG4gICAgY29udGVudC5hcHBlbmQodGl0bGUsIGFwcGV0aXplciwgZW50cmVlLCBkZXNzZXJ0KTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGNvbnRlbnQpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51UGFnZTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=