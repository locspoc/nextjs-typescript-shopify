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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ play; }\n/* harmony export */ });\n// Playground Examples\nclass Student {\n    constructor(){\n        this.name = \"\";\n        this.age = 0;\n        this.city = \"\";\n    }\n}\nclass BusinessPerson {\n    constructor(){\n        this.name = \"\";\n        this.age = 0;\n        this.city = \"\";\n    }\n}\nclass Logger {\n    log(items, callback) {\n        items.forEach((item)=>{\n            console.log(item);\n        });\n    }\n}\nfunction play() {\n    const logger = new Logger();\n    const persons = [\n        {\n            name: \"filip\",\n            age: 30,\n            city: \"\"\n        },\n        {\n            name: \"john\",\n            age: 25,\n            city: \"\"\n        }\n    ];\n    logger.log(persons, (person)=>{\n        console.log(person);\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF5Z3JvdW5kLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQkFBc0I7QUFRdEIsTUFBTUE7O2FBQ0xDLE9BQU87YUFDUEMsTUFBTTthQUNOQyxPQUFPOztBQUNSO0FBRUEsTUFBTUM7O2FBQ0xILE9BQU87YUFDUEMsTUFBTTthQUNOQyxPQUFPOztBQUVSO0FBTUEsTUFBTUU7SUFDTEMsSUFBSUMsS0FBZSxFQUFFQyxRQUF3QixFQUFFO1FBQzlDRCxNQUFNRSxPQUFPLENBQUMsQ0FBQ0MsT0FBUztZQUN2QkMsUUFBUUwsR0FBRyxDQUFDSTtRQUNiO0lBQ0Q7QUFDRDtBQUVlLFNBQVNFLE9BQU87SUFDOUIsTUFBTUMsU0FBUyxJQUFJUjtJQUVuQixNQUFNUyxVQUFVO1FBQ2Y7WUFBRWIsTUFBTTtZQUFTQyxLQUFLO1lBQUlDLE1BQU07UUFBRztRQUNuQztZQUFFRixNQUFNO1lBQVFDLEtBQUs7WUFBSUMsTUFBTTtRQUFHO0tBQ2xDO0lBQ0RVLE9BQU9QLEdBQUcsQ0FBQ1EsU0FBUyxDQUFDQyxTQUFXO1FBQy9CSixRQUFRTCxHQUFHLENBQUNTO0lBQ2I7QUFDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BsYXlncm91bmQudHM/OWVmYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQbGF5Z3JvdW5kIEV4YW1wbGVzXG5cbmludGVyZmFjZSBQZXJzb24ge1xuXHRuYW1lOiBzdHJpbmc7XG5cdGFnZTogbnVtYmVyO1xuXHRjaXR5OiBzdHJpbmc7XG59XG5cbmNsYXNzIFN0dWRlbnQgaW1wbGVtZW50cyBQZXJzb24ge1xuXHRuYW1lID0gJyc7XG5cdGFnZSA9IDA7XG5cdGNpdHkgPSAnJztcbn1cblxuY2xhc3MgQnVzaW5lc3NQZXJzb24gaW1wbGVtZW50cyBQZXJzb24ge1xuXHRuYW1lID0gJyc7XG5cdGFnZSA9IDA7XG5cdGNpdHkgPSAnJztcblx0c2FsYXJ5OiAxMDAwO1xufVxuXG5pbnRlcmZhY2UgQ2FyIHtcblx0bmFtZTogc3RyaW5nO1xufVxuXG5jbGFzcyBMb2dnZXI8VCBleHRlbmRzIFBlcnNvbiA9IHsgQnVzaW5lc3NQZXJzb24gfT4ge1xuXHRsb2coaXRlbXM6IEFycmF5PFQ+LCBjYWxsYmFjazogKGk6IFQpID0+IHZvaWQpIHtcblx0XHRpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhpdGVtKTtcblx0XHR9KTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbGF5KCkge1xuXHRjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKCk7XG5cblx0Y29uc3QgcGVyc29ucyA9IFtcblx0XHR7IG5hbWU6ICdmaWxpcCcsIGFnZTogMzAsIGNpdHk6ICcnIH0sXG5cdFx0eyBuYW1lOiAnam9obicsIGFnZTogMjUsIGNpdHk6ICcnIH0sXG5cdF07XG5cdGxvZ2dlci5sb2cocGVyc29ucywgKHBlcnNvbikgPT4ge1xuXHRcdGNvbnNvbGUubG9nKHBlcnNvbik7XG5cdH0pO1xufVxuIl0sIm5hbWVzIjpbIlN0dWRlbnQiLCJuYW1lIiwiYWdlIiwiY2l0eSIsIkJ1c2luZXNzUGVyc29uIiwiTG9nZ2VyIiwibG9nIiwiaXRlbXMiLCJjYWxsYmFjayIsImZvckVhY2giLCJpdGVtIiwiY29uc29sZSIsInBsYXkiLCJsb2dnZXIiLCJwZXJzb25zIiwicGVyc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./playground.ts\n"));

/***/ })

});