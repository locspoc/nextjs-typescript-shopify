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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ play; }\n/* harmony export */ });\n// Playground Examples\n// TS recommends to use interface over types\n// Option 1: interfaces describe data structures in a more natural way\n// Describing objects e.g. shipments, orders\n// interface Person {\n// \tname: string;\n// \tage: number;\n// }\n// interface PersonLoggerFn {\n// \t(name: string, age: number): string;\n// }\nclass Person {\n    constructor(name, age){\n        this.name = \"\";\n        this.age = 0;\n        this.name = name;\n        this.age = age;\n    }\n}\nfunction play() {\n    const name = \"Filip\";\n    const age = 30;\n    const john = {\n        name: \"John\",\n        age: 34\n    };\n    // function logPersonInfo(personName: string, personAge: number): string {\n    // \tconst info = `Name: ${personName}, age: ${personAge}`;\n    // \tconsole.log(info);\n    // \treturn info;\n    // }\n    const logPersonInfo = function(personName) {\n        let personAge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;\n        const info = \"Name: \".concat(personName, \", age: \").concat(personAge);\n        console.log(info);\n        return info;\n    };\n    function logPersonInfo2(person) {\n        // const info = \"Name: \" + personName + \", age: \" + personAge;\n        const info = \"Name: \".concat(person.name, \", age: \").concat(person.age);\n        console.log(info);\n        return info;\n    }\n    const log = logPersonInfo(name);\n    const person = new Person(\"Edward\", 50);\n    logPersonInfo2(person);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF5Z3JvdW5kLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQkFBc0I7QUFFdEIsNENBQTRDO0FBRTVDLHNFQUFzRTtBQUN0RSw0Q0FBNEM7QUFFNUMscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsSUFBSTtBQUVKLDZCQUE2QjtBQUM3Qix3Q0FBd0M7QUFDeEMsSUFBSTtBQUVKLE1BQU1BO0lBSUxDLFlBQVlDLElBQVksRUFBRUMsR0FBVyxDQUFFO2FBSHZDRCxPQUFlO2FBQ2ZDLE1BQWM7UUFHYixJQUFJLENBQUNELElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEdBQUcsR0FBR0E7SUFDWjtBQUNEO0FBY2UsU0FBU0MsT0FBTztJQUM5QixNQUFNRixPQUFlO0lBQ3JCLE1BQU1DLE1BQWM7SUFFcEIsTUFBTUUsT0FBZTtRQUNwQkgsTUFBTTtRQUNOQyxLQUFLO0lBQ047SUFFQSwwRUFBMEU7SUFDMUUsMERBQTBEO0lBQzFELHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsSUFBSTtJQUVKLE1BQU1HLGdCQUFnQyxTQUNyQ0MsWUFFWTtZQURaQyw2RUFBb0I7UUFFcEIsTUFBTUMsT0FBTyxTQUE2QkQsT0FBcEJELFlBQVcsV0FBbUIsT0FBVkM7UUFDMUNFLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixPQUFPQTtJQUNSO0lBRUEsU0FBU0csZUFBZUMsTUFBYyxFQUFFO1FBQ3ZDLDhEQUE4RDtRQUM5RCxNQUFNSixPQUFPLFNBQThCSSxPQUFyQkEsT0FBT1gsSUFBSSxFQUFDLFdBQW9CLE9BQVhXLE9BQU9WLEdBQUc7UUFDckRPLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixPQUFPQTtJQUNSO0lBRUEsTUFBTUUsTUFBTUwsY0FBY0o7SUFFMUIsTUFBTVcsU0FBUyxJQUFJYixPQUFPLFVBQVU7SUFFcENZLGVBQWVDO0FBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGxheWdyb3VuZC50cz85ZWZhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFBsYXlncm91bmQgRXhhbXBsZXNcblxuLy8gVFMgcmVjb21tZW5kcyB0byB1c2UgaW50ZXJmYWNlIG92ZXIgdHlwZXNcblxuLy8gT3B0aW9uIDE6IGludGVyZmFjZXMgZGVzY3JpYmUgZGF0YSBzdHJ1Y3R1cmVzIGluIGEgbW9yZSBuYXR1cmFsIHdheVxuLy8gRGVzY3JpYmluZyBvYmplY3RzIGUuZy4gc2hpcG1lbnRzLCBvcmRlcnNcblxuLy8gaW50ZXJmYWNlIFBlcnNvbiB7XG4vLyBcdG5hbWU6IHN0cmluZztcbi8vIFx0YWdlOiBudW1iZXI7XG4vLyB9XG5cbi8vIGludGVyZmFjZSBQZXJzb25Mb2dnZXJGbiB7XG4vLyBcdChuYW1lOiBzdHJpbmcsIGFnZTogbnVtYmVyKTogc3RyaW5nO1xuLy8gfVxuXG5jbGFzcyBQZXJzb24ge1xuXHRuYW1lOiBzdHJpbmcgPSAnJztcblx0YWdlOiBudW1iZXIgPSAwO1xuXG5cdGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgYWdlOiBudW1iZXIpIHtcblx0XHR0aGlzLm5hbWUgPSBuYW1lO1xuXHRcdHRoaXMuYWdlID0gYWdlO1xuXHR9XG59XG5cbi8vIE9wdGlvbiAyOiB0eXBlcyAtIHVzZSB0byBjcmVhdGUgdHlwZSBhbGlhc2VzIGUuZy4gdHlwZSBEYXRhID0gc3RyaW5nIGNhbiBub3QgYmUgZG9uZSB3aXRoIGludGVyZmFjZXNcbi8vIHR5cGVzIGFyZSBiZXR0ZXIgZm9yIGRlc2NyaWJpbmcgZnVuY3Rpb25zXG5cbi8vIHR5cGUgUGVyc29uID0ge1xuLy8gXHRuYW1lOiBzdHJpbmc7XG4vLyBcdGFnZTogbnVtYmVyO1xuLy8gfTtcblxuLy8gdHlwZSBEYXRhID0gc3RyaW5nO1xuXG50eXBlIFBlcnNvbkxvZ2dlckZuID0gKG5hbWU6IHN0cmluZywgYWdlPzogbnVtYmVyKSA9PiBzdHJpbmc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBsYXkoKSB7XG5cdGNvbnN0IG5hbWU6IHN0cmluZyA9ICdGaWxpcCc7XG5cdGNvbnN0IGFnZTogbnVtYmVyID0gMzA7XG5cblx0Y29uc3Qgam9objogUGVyc29uID0ge1xuXHRcdG5hbWU6ICdKb2huJyxcblx0XHRhZ2U6IDM0LFxuXHR9O1xuXG5cdC8vIGZ1bmN0aW9uIGxvZ1BlcnNvbkluZm8ocGVyc29uTmFtZTogc3RyaW5nLCBwZXJzb25BZ2U6IG51bWJlcik6IHN0cmluZyB7XG5cdC8vIFx0Y29uc3QgaW5mbyA9IGBOYW1lOiAke3BlcnNvbk5hbWV9LCBhZ2U6ICR7cGVyc29uQWdlfWA7XG5cdC8vIFx0Y29uc29sZS5sb2coaW5mbyk7XG5cdC8vIFx0cmV0dXJuIGluZm87XG5cdC8vIH1cblxuXHRjb25zdCBsb2dQZXJzb25JbmZvOiBQZXJzb25Mb2dnZXJGbiA9IChcblx0XHRwZXJzb25OYW1lOiBzdHJpbmcsXG5cdFx0cGVyc29uQWdlOiBudW1iZXIgPSAwXG5cdCk6IHN0cmluZyA9PiB7XG5cdFx0Y29uc3QgaW5mbyA9IGBOYW1lOiAke3BlcnNvbk5hbWV9LCBhZ2U6ICR7cGVyc29uQWdlfWA7XG5cdFx0Y29uc29sZS5sb2coaW5mbyk7XG5cdFx0cmV0dXJuIGluZm87XG5cdH07XG5cblx0ZnVuY3Rpb24gbG9nUGVyc29uSW5mbzIocGVyc29uOiBQZXJzb24pIHtcblx0XHQvLyBjb25zdCBpbmZvID0gXCJOYW1lOiBcIiArIHBlcnNvbk5hbWUgKyBcIiwgYWdlOiBcIiArIHBlcnNvbkFnZTtcblx0XHRjb25zdCBpbmZvID0gYE5hbWU6ICR7cGVyc29uLm5hbWV9LCBhZ2U6ICR7cGVyc29uLmFnZX1gO1xuXHRcdGNvbnNvbGUubG9nKGluZm8pO1xuXHRcdHJldHVybiBpbmZvO1xuXHR9XG5cblx0Y29uc3QgbG9nID0gbG9nUGVyc29uSW5mbyhuYW1lKTtcblxuXHRjb25zdCBwZXJzb24gPSBuZXcgUGVyc29uKCdFZHdhcmQnLCA1MCk7XG5cblx0bG9nUGVyc29uSW5mbzIocGVyc29uKTtcbn1cbiJdLCJuYW1lcyI6WyJQZXJzb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJhZ2UiLCJwbGF5Iiwiam9obiIsImxvZ1BlcnNvbkluZm8iLCJwZXJzb25OYW1lIiwicGVyc29uQWdlIiwiaW5mbyIsImNvbnNvbGUiLCJsb2ciLCJsb2dQZXJzb25JbmZvMiIsInBlcnNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./playground.ts\n"));

/***/ })

});