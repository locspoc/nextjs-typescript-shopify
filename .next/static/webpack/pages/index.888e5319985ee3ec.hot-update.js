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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ play; }\n/* harmony export */ });\n// Playground Examples\nfunction play() {\n    function logStudentInfo(info) {\n        console.log(info.data.name);\n        console.log(info.data.age);\n    }\n    const info = {\n        data: {\n            name: \"Filip\",\n            age: \"\"\n        },\n        grades: [\n            1,\n            2,\n            3,\n            1\n        ]\n    };\n    logStudentInfo(info);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF5Z3JvdW5kLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQkFBc0I7QUFpQlAsU0FBU0EsT0FBTztJQUM5QixTQUFTQyxlQUFlQyxJQUFzQyxFQUFFO1FBQy9EQyxRQUFRQyxHQUFHLENBQUNGLEtBQUtHLElBQUksQ0FBQ0MsSUFBSTtRQUMxQkgsUUFBUUMsR0FBRyxDQUFDRixLQUFLRyxJQUFJLENBQUNFLEdBQUc7SUFDMUI7SUFFQSxNQUFNTCxPQUFPO1FBQ1pHLE1BQU07WUFDTEMsTUFBTTtZQUNOQyxLQUFLO1FBQ047UUFDQUMsUUFBUTtZQUFDO1lBQUc7WUFBRztZQUFHO1NBQUU7SUFDckI7SUFFQVAsZUFBZUM7QUFDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wbGF5Z3JvdW5kLnRzPzllZmEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUGxheWdyb3VuZCBFeGFtcGxlc1xuXG5pbnRlcmZhY2UgUGVyc29uIHtcblx0bmFtZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgU3R1ZGVudCBleHRlbmRzIFBlcnNvbiB7XG5cdGFnZTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgUG9zdEdyYWR1YXRlU3R1ZGVudCB7fVxuXG50eXBlIFN0dWRlbnRJbmZvPFQgZXh0ZW5kcyBTdHVkZW50ID0gU3R1ZGVudD4gPSB7XG5cdGRhdGE6IFN0dWRlbnQ7XG5cdGdyYWRlczogbnVtYmVyW107XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbGF5KCkge1xuXHRmdW5jdGlvbiBsb2dTdHVkZW50SW5mbyhpbmZvOiBTdHVkZW50SW5mbzxQb3N0R3JhZHVhdGVTdHVkZW50Pikge1xuXHRcdGNvbnNvbGUubG9nKGluZm8uZGF0YS5uYW1lKTtcblx0XHRjb25zb2xlLmxvZyhpbmZvLmRhdGEuYWdlKTtcblx0fVxuXG5cdGNvbnN0IGluZm8gPSB7XG5cdFx0ZGF0YToge1xuXHRcdFx0bmFtZTogJ0ZpbGlwJyxcblx0XHRcdGFnZTogJycsXG5cdFx0fSxcblx0XHRncmFkZXM6IFsxLCAyLCAzLCAxXSxcblx0fTtcblxuXHRsb2dTdHVkZW50SW5mbyhpbmZvKTtcbn1cbiJdLCJuYW1lcyI6WyJwbGF5IiwibG9nU3R1ZGVudEluZm8iLCJpbmZvIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJuYW1lIiwiYWdlIiwiZ3JhZGVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./playground.ts\n"));

/***/ })

});