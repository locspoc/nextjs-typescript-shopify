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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ play; }\n/* harmony export */ });\nasync function play() {\n    const getHelloProps = async function() {\n        const greeting = {\n            message: \"Hi Friends!\"\n        };\n        return {\n            props: {\n                greeting,\n                data: {\n                    cars: [\n                        \"cars1\",\n                        \"cars2\"\n                    ]\n                }\n            }\n        };\n    };\n    function sayHello(props1) {\n        console.log(props1.data.cars);\n    }\n    const data = await getHelloProps();\n    sayHello(props);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF5Z3JvdW5kLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxlQUFlQSxPQUFPO0lBT3BDLE1BQU1DLGdCQUFnQixpQkFBa0I7UUFDdkMsTUFBTUMsV0FBcUI7WUFBRUMsU0FBUztRQUFjO1FBRXBELE9BQU87WUFDTkMsT0FBTztnQkFDTkY7Z0JBQ0FHLE1BQU07b0JBQ0xDLE1BQU07d0JBQUM7d0JBQVM7cUJBQVE7Z0JBQ3pCO1lBQ0Q7UUFDRDtJQUNEO0lBRUEsU0FBU0MsU0FBU0gsTUFBNEMsRUFBRTtRQUMvREksUUFBUUMsR0FBRyxDQUFDTCxPQUFNQyxJQUFJLENBQUNDLElBQUk7SUFDNUI7SUFFQSxNQUFNRCxPQUFPLE1BQU1KO0lBQ25CTSxTQUFTSDtBQUNWLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGxheWdyb3VuZC50cz85ZWZhIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHBsYXkoKSB7XG5cdHR5cGUgR3JlZXRpbmcgPSB7IG1lc3NhZ2U6IHN0cmluZyB9O1xuXG5cdHR5cGUgSW5mZXJIZWxsb1Byb3BzPFQ+ID0gVCBleHRlbmRzICgpID0+IFByb21pc2U8eyBwcm9wczogaW5mZXIgUHJvcHMgfT5cblx0XHQ/IFByb3BzXG5cdFx0OiBuZXZlcjtcblxuXHRjb25zdCBnZXRIZWxsb1Byb3BzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuXHRcdGNvbnN0IGdyZWV0aW5nOiBHcmVldGluZyA9IHsgbWVzc2FnZTogJ0hpIEZyaWVuZHMhJyB9O1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHByb3BzOiB7XG5cdFx0XHRcdGdyZWV0aW5nLFxuXHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0Y2FyczogWydjYXJzMScsICdjYXJzMiddLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSxcblx0XHR9O1xuXHR9O1xuXG5cdGZ1bmN0aW9uIHNheUhlbGxvKHByb3BzOiBJbmZlckhlbGxvUHJvcHM8dHlwZW9mIGdldEhlbGxvUHJvcHM+KSB7XG5cdFx0Y29uc29sZS5sb2cocHJvcHMuZGF0YS5jYXJzKTtcblx0fVxuXG5cdGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRIZWxsb1Byb3BzKCk7XG5cdHNheUhlbGxvKHByb3BzKTtcbn1cbiJdLCJuYW1lcyI6WyJwbGF5IiwiZ2V0SGVsbG9Qcm9wcyIsImdyZWV0aW5nIiwibWVzc2FnZSIsInByb3BzIiwiZGF0YSIsImNhcnMiLCJzYXlIZWxsbyIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./playground.ts\n"));

/***/ })

});