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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ play)\n/* harmony export */ });\n// Playground Examples\nfunction play() {\n    const car = {\n        name: \"Race Car\",\n        maxSpeed: 200,\n        team: \"ferrari\"\n    };\n    const person = {\n        prop1: \"\",\n        prop2: 2,\n        name: \"\",\n        kind: \"academic\",\n        age: 23\n    };\n    function printInfo(someObject) {\n        if (typeof someObject.age === \"string\") {\n            someObject.age.toUpperCase();\n        }\n    // someObject.age.toUpperCase();\n    }\n    printInfo({\n        age: 23,\n        isMarried: true,\n        name: \"Filip\",\n        records: {}\n    });\n    function logPersonInfo(human) {\n        if (human.kind === \"academic\") {\n            console.log(human);\n        } else if (human.kind === \"business\") {\n            console.log(human);\n        } else if (human.kind === \"otherType\") {\n            console.log(human);\n        } else {\n            console.log(human);\n        }\n    }\n    function logCarInfo(car) {\n        switch(car.maxSpeed){\n            case 200:\n                console.log(car.team);\n                break;\n            case 100:\n                console.log(car.space);\n                break;\n            case 150:\n                console.log(car.isCarbonFree);\n                break;\n            default:\n                const _never = car;\n                return _never;\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF5Z3JvdW5kLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQkFBc0I7QUFtRFAsU0FBU0EsT0FBTztJQUM5QixNQUFNQyxNQUFlO1FBQ3BCQyxNQUFNO1FBQ05DLFVBQVU7UUFDVkMsTUFBTTtJQUNQO0lBRUEsTUFBTUMsU0FBaUI7UUFDdEJDLE9BQU87UUFDUEMsT0FBTztRQUNQTCxNQUFNO1FBQ05NLE1BQU07UUFDTkMsS0FBSztJQUNOO0lBRUEsU0FBU0MsVUFBVUMsVUFBc0MsRUFBRTtRQUMxRCxJQUFJLE9BQU9BLFdBQVdGLEdBQUcsS0FBSyxVQUFVO1lBQ3ZDRSxXQUFXRixHQUFHLENBQUNHLFdBQVc7UUFDM0IsQ0FBQztJQUVELGdDQUFnQztJQUNqQztJQUVBRixVQUFVO1FBQ1RELEtBQUs7UUFDTEksV0FBVyxJQUFJO1FBQ2ZYLE1BQU07UUFDTlksU0FBUyxDQUFDO0lBQ1g7SUFFQSxTQUFTQyxjQUFjQyxLQUFZLEVBQUU7UUFDcEMsSUFBSUEsTUFBTVIsSUFBSSxLQUFLLFlBQVk7WUFDOUJTLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDYixPQUFPLElBQUlBLE1BQU1SLElBQUksS0FBSyxZQUFZO1lBQ3JDUyxRQUFRQyxHQUFHLENBQUNGO1FBQ2IsT0FBTyxJQUFJQSxNQUFNUixJQUFJLEtBQUssYUFBYTtZQUN0Q1MsUUFBUUMsR0FBRyxDQUFDRjtRQUNiLE9BQU87WUFDTkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNiLENBQUM7SUFDRjtJQUVBLFNBQVNHLFdBQVdsQixHQUFRLEVBQUU7UUFDN0IsT0FBUUEsSUFBSUUsUUFBUTtZQUNuQixLQUFLO2dCQUNKYyxRQUFRQyxHQUFHLENBQUNqQixJQUFJRyxJQUFJO2dCQUNwQixLQUFNO1lBQ1AsS0FBSztnQkFDSmEsUUFBUUMsR0FBRyxDQUFDakIsSUFBSW1CLEtBQUs7Z0JBQ3JCLEtBQU07WUFDUCxLQUFLO2dCQUNKSCxRQUFRQyxHQUFHLENBQUNqQixJQUFJb0IsWUFBWTtnQkFDNUIsS0FBTTtZQUNQO2dCQUNDLE1BQU1DLFNBQWdCckI7Z0JBQ3RCLE9BQU9xQjtRQUNUO0lBQ0Q7QUFDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXR5cGVzY3JpcHQtc2hvcGlmeS8uL3BsYXlncm91bmQudHM/OWVmYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQbGF5Z3JvdW5kIEV4YW1wbGVzXG5cbmludGVyZmFjZSBQZXJzb24ge1xuXHRraW5kOiAnYnVzaW5lc3MnIHwgJ2FjYWRlbWljJyB8ICdvdGhlclR5cGUnO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGFnZTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgUGVyc29uIHtcblx0cHJvcDE6IHN0cmluZztcblx0cHJvcDI6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIEFjYWRlbWljUGVyc29uIGV4dGVuZHMgUGVyc29uIHtcblx0a2luZDogJ2FjYWRlbWljJztcblx0cHVibGljYXRpb25zOiBzdHJpbmdbXTtcbn1cblxuaW50ZXJmYWNlIEJ1c2luZXNzUGVyc29uIGV4dGVuZHMgUGVyc29uIHtcblx0a2luZDogJ2J1c2luZXNzJztcblx0c2FsYXJ5OiBudW1iZXI7XG59XG5cbnR5cGUgSHVtYW4gPVxuXHR8IEJ1c2luZXNzUGVyc29uXG5cdHwgQWNhZGVtaWNQZXJzb25cblx0fCB7XG5cdFx0XHRraW5kOiAnb3RoZXJUeXBlJztcblx0XHRcdHNwZWNpYWw6IHN0cmluZztcblx0ICB9O1xuXG50eXBlIFJhY2VDYXIgPSB7XG5cdG5hbWU6IHN0cmluZztcblx0bWF4U3BlZWQ6IDIwMDtcblx0dGVhbTogc3RyaW5nO1xufTtcblxudHlwZSBDaXR5Q2FyID0ge1xuXHRuYW1lOiBzdHJpbmc7XG5cdHNwYWNlOiBzdHJpbmc7XG5cdG1heFNwZWVkOiAxMDA7XG59O1xuXG50eXBlIFNVVkNhciA9IHtcblx0bmFtZTogc3RyaW5nO1xuXHRtYXhTcGVlZDogMTUwO1xuXHRpc0NhcmJvbkZyZWU6IGJvb2xlYW47XG59O1xuXG50eXBlIENhciA9IFJhY2VDYXIgfCBDaXR5Q2FyIHwgU1VWQ2FyO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbGF5KCkge1xuXHRjb25zdCBjYXI6IFJhY2VDYXIgPSB7XG5cdFx0bmFtZTogJ1JhY2UgQ2FyJyxcblx0XHRtYXhTcGVlZDogMjAwLFxuXHRcdHRlYW06ICdmZXJyYXJpJyxcblx0fTtcblxuXHRjb25zdCBwZXJzb246IFBlcnNvbiA9IHtcblx0XHRwcm9wMTogJycsXG5cdFx0cHJvcDI6IDIsXG5cdFx0bmFtZTogJycsXG5cdFx0a2luZDogJ2FjYWRlbWljJyxcblx0XHRhZ2U6IDIzLFxuXHR9O1xuXG5cdGZ1bmN0aW9uIHByaW50SW5mbyhzb21lT2JqZWN0OiB7IFtrZXk6IHN0cmluZ106IHVua25vd24gfSkge1xuXHRcdGlmICh0eXBlb2Ygc29tZU9iamVjdC5hZ2UgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRzb21lT2JqZWN0LmFnZS50b1VwcGVyQ2FzZSgpO1xuXHRcdH1cblxuXHRcdC8vIHNvbWVPYmplY3QuYWdlLnRvVXBwZXJDYXNlKCk7XG5cdH1cblxuXHRwcmludEluZm8oe1xuXHRcdGFnZTogMjMsXG5cdFx0aXNNYXJyaWVkOiB0cnVlLFxuXHRcdG5hbWU6ICdGaWxpcCcsXG5cdFx0cmVjb3Jkczoge30sXG5cdH0pO1xuXG5cdGZ1bmN0aW9uIGxvZ1BlcnNvbkluZm8oaHVtYW46IEh1bWFuKSB7XG5cdFx0aWYgKGh1bWFuLmtpbmQgPT09ICdhY2FkZW1pYycpIHtcblx0XHRcdGNvbnNvbGUubG9nKGh1bWFuKTtcblx0XHR9IGVsc2UgaWYgKGh1bWFuLmtpbmQgPT09ICdidXNpbmVzcycpIHtcblx0XHRcdGNvbnNvbGUubG9nKGh1bWFuKTtcblx0XHR9IGVsc2UgaWYgKGh1bWFuLmtpbmQgPT09ICdvdGhlclR5cGUnKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhodW1hbik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKGh1bWFuKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBsb2dDYXJJbmZvKGNhcjogQ2FyKSB7XG5cdFx0c3dpdGNoIChjYXIubWF4U3BlZWQpIHtcblx0XHRcdGNhc2UgMjAwOlxuXHRcdFx0XHRjb25zb2xlLmxvZyhjYXIudGVhbSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxMDA6XG5cdFx0XHRcdGNvbnNvbGUubG9nKGNhci5zcGFjZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxNTA6XG5cdFx0XHRcdGNvbnNvbGUubG9nKGNhci5pc0NhcmJvbkZyZWUpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGNvbnN0IF9uZXZlcjogbmV2ZXIgPSBjYXI7XG5cdFx0XHRcdHJldHVybiBfbmV2ZXI7XG5cdFx0fVxuXHR9XG59XG4iXSwibmFtZXMiOlsicGxheSIsImNhciIsIm5hbWUiLCJtYXhTcGVlZCIsInRlYW0iLCJwZXJzb24iLCJwcm9wMSIsInByb3AyIiwia2luZCIsImFnZSIsInByaW50SW5mbyIsInNvbWVPYmplY3QiLCJ0b1VwcGVyQ2FzZSIsImlzTWFycmllZCIsInJlY29yZHMiLCJsb2dQZXJzb25JbmZvIiwiaHVtYW4iLCJjb25zb2xlIiwibG9nIiwibG9nQ2FySW5mbyIsInNwYWNlIiwiaXNDYXJib25GcmVlIiwiX25ldmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./playground.ts\n");

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