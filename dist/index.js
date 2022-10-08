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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\n\nconst body = document.querySelector('body');\nconst keys = document.querySelectorAll('.keys');\nconst space = document.querySelector('.space');\nconst shift = document.querySelector('.shift');\nconst capsLock = document.querySelector('.caps-lock');\nconst leftAlt = document.querySelectorAll('.alt-left');\nconst rightAlt = document.querySelector('.alt-right');\nconst leftCtrl = document.querySelector('.ctrl-left');\nconst rightCtrl = document.querySelector('.ctrl-right');\nconst nightMode = document.querySelector('.night-mode');\nconst toggleCicle = document.querySelector('.toggle-cicle');\nconst keyboardKeys = document.querySelector('.keyboard_keys');\nconst textInput = document.querySelector('.text');\nconst colorsInput = document.querySelector('.colors-input');\n\nfor (let i = 0; i < keys.length; i++) {\n    keys[i].setAttribute('keyname', keys[i].innerText);\n    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());\n}\n\nwindow.addEventListener('keydown', (e) => {\n    for (let i = 0; i < keys.length; i++) {\n        if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {\n            keys[i].classList.add('active');\n            break;\n        }\n        if (e.code == 'Space') {\n            space.classList.add('active');\n            break;\n        }\n        if (e.code == 'Shift') {\n            shift.classList.add('active');\n            break;\n        }\n        if (e.code == 'CapsLock') {\n            capsLock.classList.toggle('active');\n            break;\n        }\n        if (e.code == 'AltLeft') {\n            leftAlt.classList.add('active');\n            break;\n        }\n        if (e.code == 'AltRight') {\n            rightAlt.classList.add('active');\n            break;\n        }\n        if (e.code == 'ControlLeft') {\n            leftCtrl.classList.add('active');\n            break;\n        }\n        if (e.code == 'ControlRight') {\n            rightCtrl.classList.add('active');\n            break;\n        }\n    }\n});\nwindow.addEventListener('keyup', (e) => {\n    for (let i = 0; i < keys.length; i++) {\n        if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName')) {\n            keys[i].classList.remove('active');\n            break;\n        }\n        if (e.code == 'Space') {\n            space.classList.remove('active');\n            break;\n        }\n        if (e.code == 'Shift') {\n            shift.classList.remove('active');\n            break;\n        }\n        if (e.code == 'AltLeft') {\n            leftAlt.classList.remove('active');\n            break;\n        }\n        if (e.code == 'AltRight') {\n            rightAlt.classList.remove('active');\n            break;\n        }\n        if (e.code == 'ControlLeft') {\n            leftCtrl.classList.remove('active');\n            break;\n        }\n        if (e.code == 'ControlRight') {\n            rightCtrl.classList.remove('active');\n            break;\n        }\n    } \n});\n\nnightMode.addEventListener('click', () => {\n    toggleCicle.classList.toggle('active');\n    body.classList.toggle('active');\n    keyboardKeys.classList.toggle('active');\n    keys.forEach((el) => {\n        el.classList.toggle('keys_night');\n    })\n    nightMode.classList.toggle('active');\n    textInput.classList.toggle('active');\n    textInput.focus();\n});\n\ncolorsInput.addEventListener('input', () => {\n    keyboardKeys.style.backgroundColor = colorsInput.value;\n    textInput.focus();\n});\n\nwindow.addEventListener('click', () => textInput.focus());\n\n//# sourceURL=webpack://virtual-keyboard/./src/index.js?");

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