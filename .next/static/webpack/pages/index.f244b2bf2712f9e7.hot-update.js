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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ play; }\n/* harmony export */ });\n// Playground Examples\n// TS recommends to use interface over types\n// Option 1: interfaces describe data structures in a more natural way\n// Describing objects e.g. shipments, orders\n// interface Person {\n// \tname: string;\n// \tage: number;\n// }\n// interface PersonLoggerFn {\n// \t(name: string, age: number): string;\n// }\nclass Person {\n}\nfunction play() {\n    const name = \"Filip\";\n    const age = 30;\n    const person = {\n        name: \"John\",\n        age: 34\n    };\n    // function logPersonInfo(personName: string, personAge: number): string {\n    // \tconst info = `Name: ${personName}, age: ${personAge}`;\n    // \tconsole.log(info);\n    // \treturn info;\n    // }\n    const logPersonInfo = (personName, personAge)=>{\n        const info = \"Name: \".concat(personName, \", age: \").concat(personAge);\n        console.log(info);\n        return info;\n    };\n    function logPersonInfo2(person) {\n        // const info = \"Name: \" + personName + \", age: \" + personAge;\n        const info = \"Name: \".concat(person.name, \", age: \").concat(person.age);\n        console.log(info);\n        return info;\n    }\n    const log = logPersonInfo(name, age);\n    logPersonInfo2(person);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF5Z3JvdW5kLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQkFBc0I7QUFFdEIsNENBQTRDO0FBRTVDLHNFQUFzRTtBQUN0RSw0Q0FBNEM7QUFFNUMscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsSUFBSTtBQUVKLDZCQUE2QjtBQUM3Qix3Q0FBd0M7QUFDeEMsSUFBSTtBQUVKLE1BQU1BO0FBQVE7QUFjQyxTQUFTQyxPQUFPO0lBQzlCLE1BQU1DLE9BQWU7SUFDckIsTUFBTUMsTUFBYztJQUVwQixNQUFNQyxTQUFpQjtRQUN0QkYsTUFBTTtRQUNOQyxLQUFLO0lBQ047SUFFQSwwRUFBMEU7SUFDMUUsMERBQTBEO0lBQzFELHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsSUFBSTtJQUVKLE1BQU1FLGdCQUFnQyxDQUNyQ0MsWUFDQUMsWUFDWTtRQUNaLE1BQU1DLE9BQU8sU0FBNkJELE9BQXBCRCxZQUFXLFdBQW1CLE9BQVZDO1FBQzFDRSxRQUFRQyxHQUFHLENBQUNGO1FBQ1osT0FBT0E7SUFDUjtJQUVBLFNBQVNHLGVBQWVQLE1BQXFDLEVBQUU7UUFDOUQsOERBQThEO1FBQzlELE1BQU1JLE9BQU8sU0FBOEJKLE9BQXJCQSxPQUFPRixJQUFJLEVBQUMsV0FBb0IsT0FBWEUsT0FBT0QsR0FBRztRQUNyRE0sUUFBUUMsR0FBRyxDQUFDRjtRQUNaLE9BQU9BO0lBQ1I7SUFFQSxNQUFNRSxNQUFjTCxjQUFjSCxNQUFNQztJQUN4Q1EsZUFBZVA7QUFDaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wbGF5Z3JvdW5kLnRzPzllZmEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUGxheWdyb3VuZCBFeGFtcGxlc1xuXG4vLyBUUyByZWNvbW1lbmRzIHRvIHVzZSBpbnRlcmZhY2Ugb3ZlciB0eXBlc1xuXG4vLyBPcHRpb24gMTogaW50ZXJmYWNlcyBkZXNjcmliZSBkYXRhIHN0cnVjdHVyZXMgaW4gYSBtb3JlIG5hdHVyYWwgd2F5XG4vLyBEZXNjcmliaW5nIG9iamVjdHMgZS5nLiBzaGlwbWVudHMsIG9yZGVyc1xuXG4vLyBpbnRlcmZhY2UgUGVyc29uIHtcbi8vIFx0bmFtZTogc3RyaW5nO1xuLy8gXHRhZ2U6IG51bWJlcjtcbi8vIH1cblxuLy8gaW50ZXJmYWNlIFBlcnNvbkxvZ2dlckZuIHtcbi8vIFx0KG5hbWU6IHN0cmluZywgYWdlOiBudW1iZXIpOiBzdHJpbmc7XG4vLyB9XG5cbmNsYXNzIFBlcnNvbiB7fVxuXG4vLyBPcHRpb24gMjogdHlwZXMgLSB1c2UgdG8gY3JlYXRlIHR5cGUgYWxpYXNlcyBlLmcuIHR5cGUgRGF0YSA9IHN0cmluZyBjYW4gbm90IGJlIGRvbmUgd2l0aCBpbnRlcmZhY2VzXG4vLyB0eXBlcyBhcmUgYmV0dGVyIGZvciBkZXNjcmliaW5nIGZ1bmN0aW9uc1xuXG4vLyB0eXBlIFBlcnNvbiA9IHtcbi8vIFx0bmFtZTogc3RyaW5nO1xuLy8gXHRhZ2U6IG51bWJlcjtcbi8vIH07XG5cbi8vIHR5cGUgRGF0YSA9IHN0cmluZztcblxudHlwZSBQZXJzb25Mb2dnZXJGbiA9IChuYW1lOiBzdHJpbmcsIGFnZTogbnVtYmVyKSA9PiBzdHJpbmc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYXkoKSB7XG5cdGNvbnN0IG5hbWU6IHN0cmluZyA9ICdGaWxpcCc7XG5cdGNvbnN0IGFnZTogbnVtYmVyID0gMzA7XG5cblx0Y29uc3QgcGVyc29uOiBQZXJzb24gPSB7XG5cdFx0bmFtZTogJ0pvaG4nLFxuXHRcdGFnZTogMzQsXG5cdH07XG5cblx0Ly8gZnVuY3Rpb24gbG9nUGVyc29uSW5mbyhwZXJzb25OYW1lOiBzdHJpbmcsIHBlcnNvbkFnZTogbnVtYmVyKTogc3RyaW5nIHtcblx0Ly8gXHRjb25zdCBpbmZvID0gYE5hbWU6ICR7cGVyc29uTmFtZX0sIGFnZTogJHtwZXJzb25BZ2V9YDtcblx0Ly8gXHRjb25zb2xlLmxvZyhpbmZvKTtcblx0Ly8gXHRyZXR1cm4gaW5mbztcblx0Ly8gfVxuXG5cdGNvbnN0IGxvZ1BlcnNvbkluZm86IFBlcnNvbkxvZ2dlckZuID0gKFxuXHRcdHBlcnNvbk5hbWU6IHN0cmluZyxcblx0XHRwZXJzb25BZ2U6IG51bWJlclxuXHQpOiBzdHJpbmcgPT4ge1xuXHRcdGNvbnN0IGluZm8gPSBgTmFtZTogJHtwZXJzb25OYW1lfSwgYWdlOiAke3BlcnNvbkFnZX1gO1xuXHRcdGNvbnNvbGUubG9nKGluZm8pO1xuXHRcdHJldHVybiBpbmZvO1xuXHR9O1xuXG5cdGZ1bmN0aW9uIGxvZ1BlcnNvbkluZm8yKHBlcnNvbjogeyBuYW1lOiBzdHJpbmc7IGFnZTogbnVtYmVyIH0pIHtcblx0XHQvLyBjb25zdCBpbmZvID0gXCJOYW1lOiBcIiArIHBlcnNvbk5hbWUgKyBcIiwgYWdlOiBcIiArIHBlcnNvbkFnZTtcblx0XHRjb25zdCBpbmZvID0gYE5hbWU6ICR7cGVyc29uLm5hbWV9LCBhZ2U6ICR7cGVyc29uLmFnZX1gO1xuXHRcdGNvbnNvbGUubG9nKGluZm8pO1xuXHRcdHJldHVybiBpbmZvO1xuXHR9XG5cblx0Y29uc3QgbG9nOiBzdHJpbmcgPSBsb2dQZXJzb25JbmZvKG5hbWUsIGFnZSk7XG5cdGxvZ1BlcnNvbkluZm8yKHBlcnNvbik7XG59XG4iXSwibmFtZXMiOlsiUGVyc29uIiwicGxheSIsIm5hbWUiLCJhZ2UiLCJwZXJzb24iLCJsb2dQZXJzb25JbmZvIiwicGVyc29uTmFtZSIsInBlcnNvbkFnZSIsImluZm8iLCJjb25zb2xlIiwibG9nIiwibG9nUGVyc29uSW5mbzIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./playground.ts\n"));

/***/ })

});