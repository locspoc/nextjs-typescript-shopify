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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ play; }\n/* harmony export */ });\n// Playground Examples\nclass Logger {\n    log(items, callback) {\n        items.forEach((item)=>{\n            console.log(item);\n        });\n    }\n}\nfunction play() {\n    const logger = new Logger();\n    const cars = [\n        \"auldi\",\n        \"skoda\",\n        \"citreon\"\n    ];\n    logger.log(cars, (car)=>{\n        console.log(car);\n    });\n    const logger2 = new Logger();\n    const numbers = [\n        1,\n        2,\n        3,\n        4\n    ];\n    logger2.log(numbers, (num)=>{\n        console.log(num);\n    });\n    const logger3 = new Logger();\n    const persons = [\n        {\n            name: \"filip\",\n            age: 30\n        },\n        {\n            name: \"john\",\n            age: 25\n        }\n    ];\n    logger3.log(persons, (num)=>{\n        console.log(num);\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF5Z3JvdW5kLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQkFBc0I7QUFPdEIsTUFBTUE7SUFDTEMsSUFBSUMsS0FBZSxFQUFFQyxRQUF3QixFQUFFO1FBQzlDRCxNQUFNRSxPQUFPLENBQUMsQ0FBQ0MsT0FBUztZQUN2QkMsUUFBUUwsR0FBRyxDQUFDSTtRQUNiO0lBQ0Q7QUFDRDtBQUVlLFNBQVNFLE9BQU87SUFDOUIsTUFBTUMsU0FBUyxJQUFJUjtJQUVuQixNQUFNUyxPQUFPO1FBQUM7UUFBUztRQUFTO0tBQVU7SUFDMUNELE9BQU9QLEdBQUcsQ0FBQ1EsTUFBTSxDQUFDQyxNQUFRO1FBQ3pCSixRQUFRTCxHQUFHLENBQUNTO0lBQ2I7SUFFQSxNQUFNQyxVQUFVLElBQUlYO0lBRXBCLE1BQU1ZLFVBQVU7UUFBQztRQUFHO1FBQUc7UUFBRztLQUFFO0lBQzVCRCxRQUFRVixHQUFHLENBQUNXLFNBQVMsQ0FBQ0MsTUFBUTtRQUM3QlAsUUFBUUwsR0FBRyxDQUFDWTtJQUNiO0lBRUEsTUFBTUMsVUFBVSxJQUFJZDtJQUVwQixNQUFNZSxVQUFVO1FBQ2Y7WUFBRUMsTUFBTTtZQUFTQyxLQUFLO1FBQUc7UUFDekI7WUFBRUQsTUFBTTtZQUFRQyxLQUFLO1FBQUc7S0FDeEI7SUFDREgsUUFBUWIsR0FBRyxDQUFDYyxTQUFTLENBQUNGLE1BQVE7UUFDN0JQLFFBQVFMLEdBQUcsQ0FBQ1k7SUFDYjtBQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGxheWdyb3VuZC50cz85ZWZhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFBsYXlncm91bmQgRXhhbXBsZXNcblxuaW50ZXJmYWNlIFBlcnNvbiB7XG5cdG5hbWU6IHN0cmluZztcblx0YWdlOiBudW1iZXI7XG59XG5cbmNsYXNzIExvZ2dlcjxUPiB7XG5cdGxvZyhpdGVtczogQXJyYXk8VD4sIGNhbGxiYWNrOiAoaTogVCkgPT4gdm9pZCkge1xuXHRcdGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKGl0ZW0pO1xuXHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYXkoKSB7XG5cdGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXI8c3RyaW5nPigpO1xuXG5cdGNvbnN0IGNhcnMgPSBbJ2F1bGRpJywgJ3Nrb2RhJywgJ2NpdHJlb24nXTtcblx0bG9nZ2VyLmxvZyhjYXJzLCAoY2FyKSA9PiB7XG5cdFx0Y29uc29sZS5sb2coY2FyKTtcblx0fSk7XG5cblx0Y29uc3QgbG9nZ2VyMiA9IG5ldyBMb2dnZXI8bnVtYmVyPigpO1xuXG5cdGNvbnN0IG51bWJlcnMgPSBbMSwgMiwgMywgNF07XG5cdGxvZ2dlcjIubG9nKG51bWJlcnMsIChudW0pID0+IHtcblx0XHRjb25zb2xlLmxvZyhudW0pO1xuXHR9KTtcblxuXHRjb25zdCBsb2dnZXIzID0gbmV3IExvZ2dlcjxQZXJzb24+KCk7XG5cblx0Y29uc3QgcGVyc29ucyA9IFtcblx0XHR7IG5hbWU6ICdmaWxpcCcsIGFnZTogMzAgfSxcblx0XHR7IG5hbWU6ICdqb2huJywgYWdlOiAyNSB9LFxuXHRdO1xuXHRsb2dnZXIzLmxvZyhwZXJzb25zLCAobnVtKSA9PiB7XG5cdFx0Y29uc29sZS5sb2cobnVtKTtcblx0fSk7XG59XG4iXSwibmFtZXMiOlsiTG9nZ2VyIiwibG9nIiwiaXRlbXMiLCJjYWxsYmFjayIsImZvckVhY2giLCJpdGVtIiwiY29uc29sZSIsInBsYXkiLCJsb2dnZXIiLCJjYXJzIiwiY2FyIiwibG9nZ2VyMiIsIm51bWJlcnMiLCJudW0iLCJsb2dnZXIzIiwicGVyc29ucyIsIm5hbWUiLCJhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./playground.ts\n"));

/***/ })

});