"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./playground.ts":
/*!***********************!*\
  !*** ./playground.ts ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ play; }\n/* harmony export */ });\n// Playground Examples\nfunction play() {\n    function logStudentInfo(info) {\n        console.log(info.data.name);\n        console.log(info.data.age);\n    }\n    const info = {\n        data: {\n            name: \"Filip\",\n            age: \"\"\n        },\n        grades: [\n            1,\n            2,\n            3,\n            1\n        ]\n    };\n    logStudentInfo(info);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF5Z3JvdW5kLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQkFBc0I7QUFlUCxTQUFTQSxPQUFPO0lBQzlCLFNBQVNDLGVBQWVDLElBQWlCLEVBQUU7UUFDMUNDLFFBQVFDLEdBQUcsQ0FBQ0YsS0FBS0csSUFBSSxDQUFDQyxJQUFJO1FBQzFCSCxRQUFRQyxHQUFHLENBQUNGLEtBQUtHLElBQUksQ0FBQ0UsR0FBRztJQUMxQjtJQUVBLE1BQU1MLE9BQU87UUFDWkcsTUFBTTtZQUNMQyxNQUFNO1lBQ05DLEtBQUs7UUFDTjtRQUNBQyxRQUFRO1lBQUM7WUFBRztZQUFHO1lBQUc7U0FBRTtJQUNyQjtJQUVBUCxlQUFlQztBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BsYXlncm91bmQudHM/OWVmYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQbGF5Z3JvdW5kIEV4YW1wbGVzXG5cbmludGVyZmFjZSBQZXJzb24ge1xuXHRuYW1lOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTdHVkZW50IGV4dGVuZHMgUGVyc29uIHtcblx0YWdlOiBudW1iZXI7XG59XG5cbnR5cGUgU3R1ZGVudEluZm88VCBleHRlbmRzIFN0dWRlbnQgPSBTdHVkZW50PiA9IHtcblx0ZGF0YTogU3R1ZGVudDtcblx0Z3JhZGVzPzogbnVtYmVyW107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbGF5KCkge1xuXHRmdW5jdGlvbiBsb2dTdHVkZW50SW5mbyhpbmZvOiBTdHVkZW50SW5mbykge1xuXHRcdGNvbnNvbGUubG9nKGluZm8uZGF0YS5uYW1lKTtcblx0XHRjb25zb2xlLmxvZyhpbmZvLmRhdGEuYWdlKTtcblx0fVxuXG5cdGNvbnN0IGluZm8gPSB7XG5cdFx0ZGF0YToge1xuXHRcdFx0bmFtZTogJ0ZpbGlwJyxcblx0XHRcdGFnZTogJycsXG5cdFx0fSxcblx0XHRncmFkZXM6IFsxLCAyLCAzLCAxXSxcblx0fTtcblxuXHRsb2dTdHVkZW50SW5mbyhpbmZvKTtcbn1cbiJdLCJuYW1lcyI6WyJwbGF5IiwibG9nU3R1ZGVudEluZm8iLCJpbmZvIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJuYW1lIiwiYWdlIiwiZ3JhZGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./playground.ts\n"));

/***/ })

});