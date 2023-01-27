"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _playground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../playground */ \"./playground.ts\");\n\n\n\nfunction Home() {\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (0,_playground__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Hello world\"\n    }, void 0, false, {\n        fileName: \"/Applications/GitHub/nextjs-typescript-shopify/pages/index.tsx\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBa0M7QUFDRDtBQUVsQixTQUFTRSxPQUFPO0lBQzlCRixnREFBU0EsQ0FBQyxJQUFNO1FBQ2ZDLHVEQUFJQTtJQUNMLEdBQUcsRUFBRTtJQUVMLHFCQUFPLDhEQUFDRTtrQkFBSTs7Ozs7O0FBQ2IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10eXBlc2NyaXB0LXNob3BpZnkvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcGxheSBmcm9tICcuLi9wbGF5Z3JvdW5kJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRwbGF5KCk7XG5cdH0sIFtdKTtcblxuXHRyZXR1cm4gPGRpdj5IZWxsbyB3b3JsZDwvZGl2Pjtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJwbGF5IiwiSG9tZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./playground.ts":
/*!***********************!*\
  !*** ./playground.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ play)\n/* harmony export */ });\n// Playground Examples\n// TS recommends to use interface over types\n// Option 1: interfaces describe data structures in a more natural way\n// Describing objects e.g. shipments, orders\nfunction play() {\n    const name = \"Filip\";\n    const age = 30;\n    const person = {\n        name: \"John\",\n        age: 34\n    };\n    // function logPersonInfo(personName: string, personAge: number): string {\n    // \tconst info = `Name: ${personName}, age: ${personAge}`;\n    // \tconsole.log(info);\n    // \treturn info;\n    // }\n    const logPersonInfo = (personName, personAge)=>{\n        const info = `Name: ${personName}, age: ${personAge}`;\n        console.log(info);\n        return info;\n    };\n    function logPersonInfo2(person) {\n        // const info = \"Name: \" + personName + \", age: \" + personAge;\n        const info = `Name: ${person.name}, age: ${person.age}`;\n        console.log(info);\n        return info;\n    }\n    const log = logPersonInfo(name, age);\n    logPersonInfo2(person);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF5Z3JvdW5kLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQkFBc0I7QUFFdEIsNENBQTRDO0FBRTVDLHNFQUFzRTtBQUN0RSw0Q0FBNEM7QUFzQjdCLFNBQVNBLE9BQU87SUFDOUIsTUFBTUMsT0FBZTtJQUNyQixNQUFNQyxNQUFjO0lBRXBCLE1BQU1DLFNBQWlCO1FBQ3RCRixNQUFNO1FBQ05DLEtBQUs7SUFDTjtJQUVBLDBFQUEwRTtJQUMxRSwwREFBMEQ7SUFDMUQsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixJQUFJO0lBRUosTUFBTUUsZ0JBQWdDLENBQ3JDQyxZQUNBQyxZQUNZO1FBQ1osTUFBTUMsT0FBTyxDQUFDLE1BQU0sRUFBRUYsV0FBVyxPQUFPLEVBQUVDLFVBQVUsQ0FBQztRQUNyREUsUUFBUUMsR0FBRyxDQUFDRjtRQUNaLE9BQU9BO0lBQ1I7SUFFQSxTQUFTRyxlQUFlUCxNQUFxQyxFQUFFO1FBQzlELDhEQUE4RDtRQUM5RCxNQUFNSSxPQUFPLENBQUMsTUFBTSxFQUFFSixPQUFPRixJQUFJLENBQUMsT0FBTyxFQUFFRSxPQUFPRCxHQUFHLENBQUMsQ0FBQztRQUN2RE0sUUFBUUMsR0FBRyxDQUFDRjtRQUNaLE9BQU9BO0lBQ1I7SUFFQSxNQUFNRSxNQUFjTCxjQUFjSCxNQUFNQztJQUN4Q1EsZUFBZVA7QUFDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10eXBlc2NyaXB0LXNob3BpZnkvLi9wbGF5Z3JvdW5kLnRzPzllZmEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUGxheWdyb3VuZCBFeGFtcGxlc1xuXG4vLyBUUyByZWNvbW1lbmRzIHRvIHVzZSBpbnRlcmZhY2Ugb3ZlciB0eXBlc1xuXG4vLyBPcHRpb24gMTogaW50ZXJmYWNlcyBkZXNjcmliZSBkYXRhIHN0cnVjdHVyZXMgaW4gYSBtb3JlIG5hdHVyYWwgd2F5XG4vLyBEZXNjcmliaW5nIG9iamVjdHMgZS5nLiBzaGlwbWVudHMsIG9yZGVyc1xuaW50ZXJmYWNlIFBlcnNvbiB7XG5cdG5hbWU6IHN0cmluZztcblx0YWdlOiBudW1iZXI7XG59XG5cbi8vIGludGVyZmFjZSBQZXJzb25Mb2dnZXJGbiB7XG4vLyBcdChuYW1lOiBzdHJpbmcsIGFnZTogbnVtYmVyKTogc3RyaW5nO1xuLy8gfVxuXG4vLyBPcHRpb24gMjogdHlwZXMgLSB1c2UgdG8gY3JlYXRlIHR5cGUgYWxpYXNlcyBlLmcuIHR5cGUgRGF0YSA9IHN0cmluZyBjYW4gbm90IGJlIGRvbmUgd2l0aCBpbnRlcmZhY2VzXG4vLyB0eXBlcyBhcmUgYmV0dGVyIGZvciBkZXNjcmliaW5nIGZ1bmN0aW9uc1xuXG4vLyB0eXBlIFBlcnNvbiA9IHtcbi8vIFx0bmFtZTogc3RyaW5nO1xuLy8gXHRhZ2U6IG51bWJlcjtcbi8vIH07XG5cbi8vIHR5cGUgRGF0YSA9IHN0cmluZztcblxudHlwZSBQZXJzb25Mb2dnZXJGbiA9IChuYW1lOiBzdHJpbmcsIGFnZTogbnVtYmVyKSA9PiBzdHJpbmc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYXkoKSB7XG5cdGNvbnN0IG5hbWU6IHN0cmluZyA9ICdGaWxpcCc7XG5cdGNvbnN0IGFnZTogbnVtYmVyID0gMzA7XG5cblx0Y29uc3QgcGVyc29uOiBQZXJzb24gPSB7XG5cdFx0bmFtZTogJ0pvaG4nLFxuXHRcdGFnZTogMzQsXG5cdH07XG5cblx0Ly8gZnVuY3Rpb24gbG9nUGVyc29uSW5mbyhwZXJzb25OYW1lOiBzdHJpbmcsIHBlcnNvbkFnZTogbnVtYmVyKTogc3RyaW5nIHtcblx0Ly8gXHRjb25zdCBpbmZvID0gYE5hbWU6ICR7cGVyc29uTmFtZX0sIGFnZTogJHtwZXJzb25BZ2V9YDtcblx0Ly8gXHRjb25zb2xlLmxvZyhpbmZvKTtcblx0Ly8gXHRyZXR1cm4gaW5mbztcblx0Ly8gfVxuXG5cdGNvbnN0IGxvZ1BlcnNvbkluZm86IFBlcnNvbkxvZ2dlckZuID0gKFxuXHRcdHBlcnNvbk5hbWU6IHN0cmluZyxcblx0XHRwZXJzb25BZ2U6IG51bWJlclxuXHQpOiBzdHJpbmcgPT4ge1xuXHRcdGNvbnN0IGluZm8gPSBgTmFtZTogJHtwZXJzb25OYW1lfSwgYWdlOiAke3BlcnNvbkFnZX1gO1xuXHRcdGNvbnNvbGUubG9nKGluZm8pO1xuXHRcdHJldHVybiBpbmZvO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIGxvZ1BlcnNvbkluZm8yKHBlcnNvbjogeyBuYW1lOiBzdHJpbmc7IGFnZTogbnVtYmVyIH0pIHtcblx0XHQvLyBjb25zdCBpbmZvID0gXCJOYW1lOiBcIiArIHBlcnNvbk5hbWUgKyBcIiwgYWdlOiBcIiArIHBlcnNvbkFnZTtcblx0XHRjb25zdCBpbmZvID0gYE5hbWU6ICR7cGVyc29uLm5hbWV9LCBhZ2U6ICR7cGVyc29uLmFnZX1gO1xuXHRcdGNvbnNvbGUubG9nKGluZm8pO1xuXHRcdHJldHVybiBpbmZvO1xuXHR9XG5cblx0Y29uc3QgbG9nOiBzdHJpbmcgPSBsb2dQZXJzb25JbmZvKG5hbWUsIGFnZSk7XG5cdGxvZ1BlcnNvbkluZm8yKHBlcnNvbik7XG59XG4iXSwibmFtZXMiOlsicGxheSIsIm5hbWUiLCJhZ2UiLCJwZXJzb24iLCJsb2dQZXJzb25JbmZvIiwicGVyc29uTmFtZSIsInBlcnNvbkFnZSIsImluZm8iLCJjb25zb2xlIiwibG9nIiwibG9nUGVyc29uSW5mbzIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./playground.ts\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();