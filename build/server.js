/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./server/devBundle.ts":
/*!*****************************!*\
  !*** ./server/devBundle.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _webpack_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webpack.client */ \"./webpack.client.js\");\n/* harmony import */ var _webpack_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_webpack_client__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (app) {\r\n    var compiler = webpack__WEBPACK_IMPORTED_MODULE_0___default()((_webpack_client__WEBPACK_IMPORTED_MODULE_3___default()));\r\n    var middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\r\n        publicPath: (_webpack_client__WEBPACK_IMPORTED_MODULE_3___default().output.publicPath),\r\n    });\r\n    app.use(middleware);\r\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_1___default()(compiler));\r\n});\r\n\n\n//# sourceURL=webpack://zadanie/./server/devBundle.ts?");

/***/ }),

/***/ "./server/index.ts":
/*!*************************!*\
  !*** ./server/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../template */ \"./template.ts\");\n\r\n\r\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\r\nif (true) {\r\n    __webpack_require__(/*! ./devBundle */ \"./server/devBundle.ts\").default(app);\r\n}\r\napp.get(\"*\", function (_, res) {\r\n    return res.send((0,_template__WEBPACK_IMPORTED_MODULE_1__.default)());\r\n});\r\nvar port = process.env.PORT || 3000;\r\napp.listen(port, function () { return console.log(\"Server listening at port \" + port); });\r\n\n\n//# sourceURL=webpack://zadanie/./server/index.ts?");

/***/ }),

/***/ "./template.ts":
/*!*********************!*\
  !*** ./template.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => (`\r\n  <!DOCTYPE HTML>\r\n  <html lang=\"pl\">\r\n    <head>\r\n      <title>Zadanie</title>\r\n      <meta charset=\"utf-8\">\r\n    </head>\r\n    <body>\r\n      <div id=\"root\"></div>\r\n      <script src=\"/build/dist.js\"></script>\r\n    </body>\r\n  </html>\r\n`));\n\n//# sourceURL=webpack://zadanie/./template.ts?");

/***/ }),

/***/ "./webpack.client.js":
/*!***************************!*\
  !*** ./webpack.client.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const path = __webpack_require__(/*! path */ \"path\");\r\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\r\nconst cwd = process.cwd();\r\n\r\nmodule.exports = {\r\n  name: \"browser\",\r\n  mode: \"development\",\r\n  devtool: \"eval-source-map\",\r\n  entry: [\r\n    \"webpack-hot-middleware/client?reload=true\",\r\n    path.join(cwd, \"client\", \"index.tsx\"),\r\n  ],\r\n  output: {\r\n    path: path.join(cwd, \"build\"),\r\n    filename: \"dist.js\",\r\n    publicPath: \"/build/\",\r\n  },\r\n  module: {\r\n    rules: [\r\n      {\r\n        test: /\\.tsx?$/,\r\n        use: \"ts-loader\",\r\n        include: [path.join(cwd, \"client\")],\r\n      },\r\n      {\r\n        test: /\\.scss$/,\r\n        include: [path.join(cwd, \"client\")],\r\n        use: [\r\n          \"style-loader\",\r\n          \"css-loader\",\r\n          {\r\n            loader: \"sass-loader\",\r\n            options: {\r\n              implementation: __webpack_require__(/*! sass */ \"sass\"),\r\n              sassOptions: {\r\n                fiber: __webpack_require__(/*! fibers */ \"fibers\"),\r\n              },\r\n            },\r\n          },\r\n        ],\r\n      },\r\n    ],\r\n  },\r\n  plugins: [new webpack.HotModuleReplacementPlugin()],\r\n  optimization: {\r\n    emitOnErrors: false,\r\n  },\r\n  resolve: {\r\n    extensions: ['.ts', '.tsx', '.js', '.jsx'],\r\n    alias: {\r\n      \"react-dom\": \"@hot-loader/react-dom\",\r\n    }\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://zadanie/./webpack.client.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");;

/***/ }),

/***/ "fibers":
/*!*************************!*\
  !*** external "fibers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("fibers");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "sass":
/*!***********************!*\
  !*** external "sass" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("sass");;

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");;

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");;

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.ts");
/******/ 	
/******/ })()
;