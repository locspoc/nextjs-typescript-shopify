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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ play; }\n/* harmony export */ });\n// Playground Examples\nclass Logger {\n}\nfunction play() {\n    function iterate(items) {\n        items.forEach((item)=>{\n            console.log(item.toUpperCase());\n        });\n    }\n    iterate([\n        \"filip\",\n        \"john\",\n        \"tom\"\n    ]);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF5Z3JvdW5kLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQkFBc0I7QUFhdEIsTUFBTUE7QUFBUTtBQUVDLFNBQVNDLE9BQU87SUFDOUIsU0FBU0MsUUFBUUMsS0FBaUIsRUFBRTtRQUNuQ0EsTUFBTUMsT0FBTyxDQUFDLENBQUNDLE9BQVM7WUFDdkJDLFFBQVFDLEdBQUcsQ0FBQ0YsS0FBS0csV0FBVztRQUM3QjtJQUNEO0lBRUFOLFFBQVE7UUFBQztRQUFTO1FBQVE7S0FBTTtBQUNqQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BsYXlncm91bmQudHM/OWVmYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQbGF5Z3JvdW5kIEV4YW1wbGVzXG5cbmludGVyZmFjZSBQZXJzb24ge1xuXHRraW5kOiAnYnVzaW5lc3MnIHwgJ2FjYWRlbWljJyB8ICdvdGhlclR5cGUnO1xuXHRuYW1lOiBzdHJpbmc7XG5cdGFnZTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgUGVyc29uIHtcblx0cHJvcDE6IHN0cmluZztcblx0cHJvcDI6IG51bWJlcjtcbn1cblxuY2xhc3MgTG9nZ2VyIHt9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYXkoKSB7XG5cdGZ1bmN0aW9uIGl0ZXJhdGUoaXRlbXM6IEFycmF5PGFueT4pIHtcblx0XHRpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhpdGVtLnRvVXBwZXJDYXNlKCkpO1xuXHRcdH0pO1xuXHR9XG5cblx0aXRlcmF0ZShbJ2ZpbGlwJywgJ2pvaG4nLCAndG9tJ10pO1xufVxuIl0sIm5hbWVzIjpbIkxvZ2dlciIsInBsYXkiLCJpdGVyYXRlIiwiaXRlbXMiLCJmb3JFYWNoIiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJ0b1VwcGVyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./playground.ts\n"));

/***/ })

});