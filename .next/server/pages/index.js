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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ play)\n/* harmony export */ });\n// Playground Examples\n// TS recommends to use interface over types\n// Option 1: interfaces describe data structures in a more natural way\n// Describing objects e.g. shipments, orders\n// interface Person {\n// \tname: string;\n// \tage: number;\n// }\n// interface PersonLoggerFn {\n// \t(name: string, age: number): string;\n// }\nclass Person {\n    name = \"\";\n    age = 0;\n    constructor(name, age){\n        this.name = name;\n        this.age = age;\n    }\n}\nfunction play() {\n    const name = \"Filip\";\n    const age = 30;\n    const john = {\n        name: \"John\"\n    };\n    // function logPersonInfo(personName: string, personAge: number): string {\n    // \tconst info = `Name: ${personName}, age: ${personAge}`;\n    // \tconsole.log(info);\n    // \treturn info;\n    // }\n    const logPersonInfo = (personName, personAge = 0)=>{\n        const info = `Name: ${personName}, age: ${personAge}`;\n        console.log(info);\n        return info;\n    };\n    function logPersonInfo2(person) {\n        // const info = \"Name: \" + personName + \", age: \" + personAge;\n        const info = `Name: ${person.name}, age: ${person.age}`;\n        console.log(info);\n        return info;\n    }\n    const log = logPersonInfo(name);\n    const person = new Person(\"Edward\", 50);\n    logPersonInfo2(person);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF5Z3JvdW5kLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQkFBc0I7QUFFdEIsNENBQTRDO0FBRTVDLHNFQUFzRTtBQUN0RSw0Q0FBNEM7QUFFNUMscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsSUFBSTtBQUVKLDZCQUE2QjtBQUM3Qix3Q0FBd0M7QUFDeEMsSUFBSTtBQUVKLE1BQU1BO0lBQ0xDLE9BQWUsR0FBRztJQUNsQkMsTUFBZSxFQUFFO0lBRWpCQyxZQUFZRixJQUFZLEVBQUVDLEdBQVcsQ0FBRTtRQUN0QyxJQUFJLENBQUNELElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEdBQUcsR0FBR0E7SUFDWjtBQUNEO0FBY2UsU0FBU0UsT0FBTztJQUM5QixNQUFNSCxPQUFlO0lBQ3JCLE1BQU1DLE1BQWM7SUFFcEIsTUFBTUcsT0FBZTtRQUNwQkosTUFBTTtJQUNQO0lBRUEsMEVBQTBFO0lBQzFFLDBEQUEwRDtJQUMxRCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLElBQUk7SUFFSixNQUFNSyxnQkFBZ0MsQ0FDckNDLFlBQ0FDLFlBQW9CLENBQUMsR0FDVDtRQUNaLE1BQU1DLE9BQU8sQ0FBQyxNQUFNLEVBQUVGLFdBQVcsT0FBTyxFQUFFQyxVQUFVLENBQUM7UUFDckRFLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixPQUFPQTtJQUNSO0lBRUEsU0FBU0csZUFBZUMsTUFBYyxFQUFFO1FBQ3ZDLDhEQUE4RDtRQUM5RCxNQUFNSixPQUFPLENBQUMsTUFBTSxFQUFFSSxPQUFPWixJQUFJLENBQUMsT0FBTyxFQUFFWSxPQUFPWCxHQUFHLENBQUMsQ0FBQztRQUN2RFEsUUFBUUMsR0FBRyxDQUFDRjtRQUNaLE9BQU9BO0lBQ1I7SUFFQSxNQUFNRSxNQUFNTCxjQUFjTDtJQUUxQixNQUFNWSxTQUFTLElBQUliLE9BQU8sVUFBVTtJQUVwQ1ksZUFBZUM7QUFDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10eXBlc2NyaXB0LXNob3BpZnkvLi9wbGF5Z3JvdW5kLnRzPzllZmEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUGxheWdyb3VuZCBFeGFtcGxlc1xuXG4vLyBUUyByZWNvbW1lbmRzIHRvIHVzZSBpbnRlcmZhY2Ugb3ZlciB0eXBlc1xuXG4vLyBPcHRpb24gMTogaW50ZXJmYWNlcyBkZXNjcmliZSBkYXRhIHN0cnVjdHVyZXMgaW4gYSBtb3JlIG5hdHVyYWwgd2F5XG4vLyBEZXNjcmliaW5nIG9iamVjdHMgZS5nLiBzaGlwbWVudHMsIG9yZGVyc1xuXG4vLyBpbnRlcmZhY2UgUGVyc29uIHtcbi8vIFx0bmFtZTogc3RyaW5nO1xuLy8gXHRhZ2U6IG51bWJlcjtcbi8vIH1cblxuLy8gaW50ZXJmYWNlIFBlcnNvbkxvZ2dlckZuIHtcbi8vIFx0KG5hbWU6IHN0cmluZywgYWdlOiBudW1iZXIpOiBzdHJpbmc7XG4vLyB9XG5cbmNsYXNzIFBlcnNvbiB7XG5cdG5hbWU6IHN0cmluZyA9ICcnO1xuXHRhZ2U/OiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgYWdlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuYWdlID0gYWdlO1xuXHR9XG59XG5cbi8vIE9wdGlvbiAyOiB0eXBlcyAtIHVzZSB0byBjcmVhdGUgdHlwZSBhbGlhc2VzIGUuZy4gdHlwZSBEYXRhID0gc3RyaW5nIGNhbiBub3QgYmUgZG9uZSB3aXRoIGludGVyZmFjZXNcbi8vIHR5cGVzIGFyZSBiZXR0ZXIgZm9yIGRlc2NyaWJpbmcgZnVuY3Rpb25zXG5cbi8vIHR5cGUgUGVyc29uID0ge1xuLy8gXHRuYW1lOiBzdHJpbmc7XG4vLyBcdGFnZTogbnVtYmVyO1xuLy8gfTtcblxuLy8gdHlwZSBEYXRhID0gc3RyaW5nO1xuXG50eXBlIFBlcnNvbkxvZ2dlckZuID0gKG5hbWU6IHN0cmluZywgYWdlPzogbnVtYmVyKSA9PiBzdHJpbmc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYXkoKSB7XG5cdGNvbnN0IG5hbWU6IHN0cmluZyA9ICdGaWxpcCc7XG5cdGNvbnN0IGFnZTogbnVtYmVyID0gMzA7XG5cblx0Y29uc3Qgam9objogUGVyc29uID0ge1xuXHRcdG5hbWU6ICdKb2huJyxcblx0fTtcblxuXHQvLyBmdW5jdGlvbiBsb2dQZXJzb25JbmZvKHBlcnNvbk5hbWU6IHN0cmluZywgcGVyc29uQWdlOiBudW1iZXIpOiBzdHJpbmcge1xuXHQvLyBcdGNvbnN0IGluZm8gPSBgTmFtZTogJHtwZXJzb25OYW1lfSwgYWdlOiAke3BlcnNvbkFnZX1gO1xuXHQvLyBcdGNvbnNvbGUubG9nKGluZm8pO1xuXHQvLyBcdHJldHVybiBpbmZvO1xuXHQvLyB9XG5cblx0Y29uc3QgbG9nUGVyc29uSW5mbzogUGVyc29uTG9nZ2VyRm4gPSAoXG5cdFx0cGVyc29uTmFtZTogc3RyaW5nLFxuXHRcdHBlcnNvbkFnZTogbnVtYmVyID0gMFxuXHQpOiBzdHJpbmcgPT4ge1xuXHRcdGNvbnN0IGluZm8gPSBgTmFtZTogJHtwZXJzb25OYW1lfSwgYWdlOiAke3BlcnNvbkFnZX1gO1xuXHRcdGNvbnNvbGUubG9nKGluZm8pO1xuXHRcdHJldHVybiBpbmZvO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIGxvZ1BlcnNvbkluZm8yKHBlcnNvbjogUGVyc29uKSB7XG5cdFx0Ly8gY29uc3QgaW5mbyA9IFwiTmFtZTogXCIgKyBwZXJzb25OYW1lICsgXCIsIGFnZTogXCIgKyBwZXJzb25BZ2U7XG5cdFx0Y29uc3QgaW5mbyA9IGBOYW1lOiAke3BlcnNvbi5uYW1lfSwgYWdlOiAke3BlcnNvbi5hZ2V9YDtcblx0XHRjb25zb2xlLmxvZyhpbmZvKTtcblx0XHRyZXR1cm4gaW5mbztcblx0fVxuXG5cdGNvbnN0IGxvZyA9IGxvZ1BlcnNvbkluZm8obmFtZSk7XG5cblx0Y29uc3QgcGVyc29uID0gbmV3IFBlcnNvbignRWR3YXJkJywgNTApO1xuXG5cdGxvZ1BlcnNvbkluZm8yKHBlcnNvbik7XG59XG4iXSwibmFtZXMiOlsiUGVyc29uIiwibmFtZSIsImFnZSIsImNvbnN0cnVjdG9yIiwicGxheSIsImpvaG4iLCJsb2dQZXJzb25JbmZvIiwicGVyc29uTmFtZSIsInBlcnNvbkFnZSIsImluZm8iLCJjb25zb2xlIiwibG9nIiwibG9nUGVyc29uSW5mbzIiLCJwZXJzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./playground.ts\n");

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