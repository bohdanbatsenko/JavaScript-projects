/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart.js */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load.js */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search.js */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog.js */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_filter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/filter.js */ \"./src/modules/filter.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_cart_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_load_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_search_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_catalog_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_filter_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\n\n//# sourceURL=webpack://ozon/./src/index.js?");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCart */ \"./src/modules/renderCart.js\");\n\r\n//import postData from './postData';\r\n\r\nconst cart = () => {\r\n\tconst cartBtn = document.getElementById('cart');\r\n\tconst cartModal = document.querySelector('.cart');\r\n\tconst cartCloseBtn = cartModal.querySelector('.cart-close');\r\n\tconst goodsWrapper = document.querySelector('.goods');\r\n\tconst cartTotal = cartModal.querySelector('.cart-total > span');\r\n\tconst cartWrapper = document.querySelector('.cart-wrapper');\r\n\tconst cartSendbtn = document.querySelector('.cart-confirm');\r\n\tconst cartCounter = document.querySelector('.counter');\r\n\t\r\n\tconst openCart = () => {\r\n\t\tconst cart = localStorage.getItem('cart') \r\n\t\t? JSON.parse(localStorage.getItem('cart')) : [];\t\t\r\n\t\tcartModal.style.display = 'flex';\r\n\t\t(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart);\r\n\t\tcartTotal.textContent = cart.reduce((sum, cartItem) => {\r\n\t\t\treturn sum + cartItem.price;\r\n\t\t}, 0);\r\n\t\tcartCounter.textContent = cart.length;\r\n\t}\r\n\r\n\tconst closeCart = () => {\r\n\t\tcartModal.style.display = '';\r\n\t}\r\n\t\t\r\n\tcartBtn.addEventListener('click', openCart);\r\n\tcartCloseBtn.addEventListener('click', closeCart);\r\n\r\n\r\n\r\n\tgoodsWrapper.addEventListener('click', (e)=> {\r\n\t\tif (e.target.classList.contains('btn-primary')) {\r\n\t\t\tconst card = e.target.closest('.card');\r\n\t\t\tconst key = card.dataset.key;\r\n\t\t\tconst goods = JSON.parse(localStorage.getItem('goods'));\r\n\t\t\tconst cart = localStorage.getItem('cart') \r\n\t\t\t? JSON.parse(localStorage.getItem('cart')) : [];\r\n\t\t\tconst goodItem = goods.find((item) => {\r\n\t\t\t\treturn item.id === +key;\r\n\t\t\t});\t\r\n\t\t\tcart.push(goodItem);\r\n\t\t\tlocalStorage.setItem('cart', JSON.stringify(cart));\r\n\t\t\tcartCounter.textContent = cart.length;\r\n\t\t}\r\n\t});\r\n\tcartWrapper.addEventListener('click', (e)=>{\r\n\t\tif (e.target.classList.contains('btn-primary')) {\r\n\t\t\tconst cart = localStorage.getItem('cart') \r\n\t\t\t? JSON.parse(localStorage.getItem('cart')) : [];\t\r\n\t\t\tconst card = e.target.closest('.card');\r\n\t\t\tconst key = card.dataset.key;\t\t\r\n\t\t\tconst index = cart.findIndex((item) => {\r\n\t\t\t\treturn item.id === +key;\r\n\t\t\t});\r\n\t\t\tcart.splice(index, 1);\r\n\r\n\t\t\tlocalStorage.setItem('cart', JSON.stringify(cart));\r\n\t\t\t(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart);\r\n\t\t\tcartTotal.textContent = cart.reduce((sum, cartItem) => {\r\n\t\t\t\treturn sum + cartItem.price;\r\n\t\t\t}, 0);\r\n\t\t\tcartCounter.textContent = cart.length;\r\n\t\t}\r\n\t});\r\n\tcartSendbtn.addEventListener('click', ()=> {\r\n\t\tconst cart = localStorage.getItem('cart') \r\n\t\t? JSON.parse(localStorage.getItem('cart')) : [];\r\n\t\tpostData(cart).then(()=> {\r\n\t\t\tlocalStorage.removeItem('cart');\r\n\t\t\t(0,_renderCart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([]);\r\n\t\t\tcartTotal.textContent = 0;\r\n\t\t\tcartCounter.textContent = 0\r\n\t\t});\r\n\t});\r\n\r\n\tconst cart = localStorage.getItem('cart') ?\r\n\tJSON.parse(localStorage.getItem('cart')) : []\r\n\tcartCounter.textContent = cart.length;\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://ozon/./src/modules/cart.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n\t//const btnCatalog = document.querySelector('.catalog-button > button');\r\n\tconst catalogModal = document.querySelector('.catalog');\r\n\t//const catalogModalItems = document.querySelectorAll('.catalog li');\r\n\r\n\r\n\t//https://github.com/Rootdiv/ozon-js/blob/main/src/modules/catalog.js\r\n  document.addEventListener('click', event => {\r\n    const target = event.target;\r\n    if (target.closest('.catalog-button')) {\r\n      catalogModal.style.display = 'block';\r\n      if (target.matches('li')) {\r\n        const text = target.textContent;\r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text)));\r\n        catalogModal.removeAttribute('style');\r\n      }\r\n    } else if (!target.closest('.catalog-button')) {\r\n      catalogModal.removeAttribute('style');\r\n    }\r\n  });\r\n\r\n\t// let isOpen = false;\r\n\r\n\t// btnCatalog.addEventListener('click', ()=>{\r\n\t// \tisOpen = !isOpen;\r\n\t// \tif(isOpen) {\r\n\t// \t\tcatalogModal.style.display = 'block';\r\n\t// \t} else {\r\n\t// \t\tcatalogModal.style.display = '';\r\n\t// \t}\r\n\t// });\r\n\t// catalogModalItems.forEach(item => {\r\n\t// \titem.addEventListener('click', () => {\r\n\r\n\t// \t\tconst text = item.textContent;\r\n\t// \t\tgetData().then((data)=> {\r\n\t// \t\t\trenderGoods(categoryFilter(data, text));\r\n\t// \t\t});\r\n\t// \t\tcatalogModal.style.display = '';\r\n\t// \t})\r\n\t// })\r\n\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://ozon/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filter.js":
/*!*******************************!*\
  !*** ./src/modules/filter.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\n\r\nconst filter = () => {\r\nconst minInput = document.getElementById('min');\r\nconst maxInput = document.getElementById('max');\r\nconst checkboxInput = document.getElementById('discount-checkbox');\r\nconst checkboxSpan = document.querySelector('.filter-check_checkmark');\r\n\r\nminInput.addEventListener('input', (e) => {\r\n\t\t(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data)=> {\r\n\t\t\t// to link price range and hotsale functions, change data to hotsale funct\r\n\t\t\t//renderGoods(priceFilter(data, minInput.value, maxInput.value));\r\n\t\t\t(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotsaleFilter)(data, checkboxInput.checked), minInput.value, maxInput.value));\r\n\t\t});\r\n\t});\r\n\tmaxInput.addEventListener('input', (e) => {\r\n\t\t(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data)=> {\r\n\t\t// to link price range and hotsale functions, change data to hotsale funct\r\n\t\t//renderGoods(priceFilter(data, minInput.value, maxInput.value));\r\n\t\t(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotsaleFilter)(data, checkboxInput.checked), minInput.value, maxInput.value));\r\n\t});\r\n});\r\ncheckboxInput.addEventListener('change', ()=> {\r\n\tif(checkboxInput.checked) {\r\n\t\tcheckboxSpan.classList.add('checked');\r\n\t} else {\r\n\t\tcheckboxSpan.classList.remove('checked');\r\n\t}\r\n\t(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data)=> {\r\n\t\t(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.hotsaleFilter)(data, checkboxInput.checked), minInput.value, maxInput.value));\r\n\t});\r\n});\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filter);\n\n//# sourceURL=webpack://ozon/./src/modules/filter.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter),\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter),\n/* harmony export */   \"priceFilter\": () => (/* binding */ priceFilter),\n/* harmony export */   \"hotsaleFilter\": () => (/* binding */ hotsaleFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\r\n\treturn goods.filter((goodsItem)=>{\r\n\t\treturn goodsItem.title.toLowerCase().includes(value.toLowerCase());\r\n\t});\r\n}\r\n\r\nconst categoryFilter = (goods, value) => {\r\n\treturn goods.filter((goodsItem)=>{\r\n\t\treturn goodsItem.category === value;\r\n\t});\r\n}\r\n\r\n\r\nconst priceFilter = (goods, min, max) => {\r\n\treturn goods.filter((goodsItem)=>{\r\n\t\tif(min === '' && max === '') {\r\n\t\t\treturn goodsItem;\r\n\t\t} else if (min !== '' && max !== ''){\r\n\t\t\treturn goodsItem.price > +min && goodsItem.price < +max;\r\n\r\n\t\t} else if(min !== '' && max === '') {\r\n\t\t\treturn goodsItem.price > +min;\r\n\t\t} else if(min === '' && max !== ''){\r\n\t\t\treturn goodsItem.price < +max;\r\n\r\n\t\t}\r\n\t});\r\n}\r\n\r\n\r\nconst hotsaleFilter = (goods, value) => {\r\n\treturn goods.filter((goodsItem)=>{\r\n\t\tif (value) {\r\n\t\t\treturn goodsItem.sale === true;\r\n\t\t} else {\r\n\t\t\treturn goodsItem;\r\n\t\t}\r\n\t});\r\n}\n\n//# sourceURL=webpack://ozon/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = (str) => {\r\n\treturn fetch(\r\n\t\t`https://ozon-glo-default-rtdb.firebaseio.com/goods.json?${str ? `search=${str}` : ''}`\r\n\r\n\t\t)\r\n\t.then((response) => {\r\n\t\treturn response.json();\r\n\t});\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://ozon/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _pagination_paginate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pagination/paginate */ \"./src/modules/pagination/paginate.js\");\n/* harmony import */ var _pagination_displayButtons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagination/displayButtons */ \"./src/modules/pagination/displayButtons.js\");\n\r\n\r\n\r\n\r\n\r\nconst btnContainer = document.querySelector('.btn-container');\r\nlet index = 0;\r\nlet pages = [];\r\n\r\nconst setupUI = () => {\r\n\t(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(pages[index]);\r\n\t(0,_pagination_displayButtons__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(btnContainer, pages, index);\r\n}\r\n\r\nconst load = () => {\r\n\t\t;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data)=> {\r\n\t\t\t// without pagination - renderGoods(data);\r\n\t\t\t//renderGoods(paginate(data)[0]);\r\n\t\t\tpages = (0,_pagination_paginate__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data);\r\n\t\t\tsetupUI();\t\r\n\t\t});\t\t\t\t\r\n}\r\n\r\nbtnContainer.addEventListener('click', (e) => {\r\n\tif(e.target.classList.contains('btn-container')) return;\r\n\tif(e.target.classList.contains('page-btn')){\r\n\t\tindex = parseInt(e.target.dataset.index);\r\n\t}\r\n\tif(e.target.classList.contains('next-btn')){\r\n\t\tindex++;\r\n\t\tif(index > pages.length - 1){\r\n\t\t\tindex = 0;\r\n\t\t}\r\n\t}\r\n\tif(e.target.classList.contains('prev-btn')){\r\n\t\tindex--;\r\n\t\tif(index < 0){\r\n\t\t\tindex = pages.length -1;\r\n\t\t}\r\n\t}\r\n\tsetupUI();\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://ozon/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/pagination/displayButtons.js":
/*!**************************************************!*\
  !*** ./src/modules/pagination/displayButtons.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst displayButtons = (container, pages, activeIndex) => {\r\n\tlet btns = pages.map((_, pageIndex)=> {\r\n\t\treturn `<button class=\"page-btn ${activeIndex === pageIndex ? 'active-btn' : 'null'}\" data-index=\"${pageIndex}\">\r\n\t\t\t${pageIndex + 1}\r\n\t\t</button>`\r\n\t});\r\n\tbtns.push('<button class=\"next-btn\">Next</button>');\r\n\tbtns.unshift('<button class=\"prev-btn\">Prev</button>');\r\n\tcontainer.innerHTML = btns.join('');\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayButtons);\n\n//# sourceURL=webpack://ozon/./src/modules/pagination/displayButtons.js?");

/***/ }),

/***/ "./src/modules/pagination/paginate.js":
/*!********************************************!*\
  !*** ./src/modules/pagination/paginate.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst paginate = (data) => {\r\n\tconst itemsPerPage = 8;\r\n\tconst numberOfPages = Math.ceil(data.length / itemsPerPage);\r\n\tconst paginatedData = Array.from({length:numberOfPages},(_,index)=>{\r\n\t\tconst start = index * itemsPerPage;\r\n\t\treturn data.slice(start,start +itemsPerPage);\r\n\t})\r\n\treturn paginatedData;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (paginate);\n\n//# sourceURL=webpack://ozon/./src/modules/pagination/paginate.js?");

/***/ }),

/***/ "./src/modules/renderCart.js":
/*!***********************************!*\
  !*** ./src/modules/renderCart.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderCart = (goods) => {\r\n\tconst cartWrapper = document.querySelector('.cart-wrapper');\r\n\tconst cartCounter = document.querySelector('.counter');\r\n\t\r\n\tcartWrapper.innerHTML = '';\r\n\tif(goods.length === 0){\r\n\t\tcartWrapper.insertAdjacentHTML('beforeend', `\r\n\t\t\t<div id=\"cart-empty\">\r\n\t\t\t\tВаша корзина пока пуста\r\n\t\t\t</div>\t\t\r\n\t\t`)\r\n\t} else {\r\n\t\tgoods.forEach(cartItem => {\r\n\t\t\tcartWrapper.insertAdjacentHTML('beforeend', `\r\n\t\r\n\t\t\t\t<div class=\"card\" data-key=\"${cartItem.id}\">\r\n\t\t\t\t${cartItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n\t\t\t\t\t<div class=\"card-img-wrapper\">\r\n\t\t\t\t\t\t<span class=\"card-img-top\"\r\n\t\t\t\t\t\t\tstyle=\"background-image: url('${cartItem.img}')\"></span>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card-body justify-content-between\">\r\n\t\t\t\t\t\t<div class=\"card-price\">${cartItem.price} ₽</div>\r\n\t\t\t\t\t\t<h5 class=\"card-title\">${cartItem.title}</h5>\r\n\t\t\t\t\t\t<button class=\"btn btn-primary\">Удалить</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t`)\r\n\r\n\t\t});\r\n\t\tcartCounter.textContent = goods.reduce((sum, item) => \r\n\t\t{\r\n\t\treturn sum + item.count\r\n\t\t}, 0);\t\t\t\t\r\n\t}\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCart);\n\n//# sourceURL=webpack://ozon/./src/modules/renderCart.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = (goods) => {\r\n\tconst goodsWrapper = document.querySelector('.goods');\r\n\r\n\t//localStorage.setItem('goods', JSON.stringify(goods));\r\n\r\n\tgoodsWrapper.innerHTML = '';\r\n\tgoods.forEach(goodsItem => {\r\n\t\tgoodsWrapper.insertAdjacentHTML('beforeend', `\r\n\r\n\t\t\t<div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n\t\t\t<div class=\"card\" data-key=\"${goodsItem.id}\">\r\n\t\t\t${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n\t\t\t\t<div class=\"card-img-wrapper\">\r\n\t\t\t\t\t<span class=\"card-img-top\"\r\n\t\t\t\t\t\tstyle=\"background-image: url('${goodsItem.img}')\"></span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body justify-content-between\">\r\n\t\t\t\t\t<div class=\"card-price\">${goodsItem.price} ₽</div>\r\n\t\t\t\t\t<h5 class=\"card-title\">${goodsItem.title}</h5>\r\n\t\t\t\t\t<button class=\"btn btn-primary\">В корзину</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t`)\r\n\t});\r\n\t\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n//# sourceURL=webpack://ozon/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst search = () =>{\r\n\tconst searchInput = document.querySelector('.search-wrapper_input');\r\n\tsearchInput.addEventListener('input', (event) =>{\r\n\t\tconst value = event.target.value;\r\n\t\t\t(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data)=> {\r\n\t\t\t\t(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value));\r\n\t\t\t});\t\t\t\r\n\t});\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://ozon/./src/modules/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;