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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ play; }\n/* harmony export */ });\n// Playground Examples\n// TS recommends to use interface over types\n// Option 1: interfaces describe data structures in a more natural way\n// Describing objects e.g. shipments, orders\n// interface Person {\n// \tname: string;\n// \tage: number;\n// }\n// interface PersonLoggerFn {\n// \t(name: string, age: number): string;\n// }\nclass Person {\n    constructor(name, age){\n        this.name = \"\";\n        this.age = 0;\n        this.name = name;\n        this.age = age;\n    }\n}\nfunction play() {\n    const name = \"Filip\";\n    const age = 30;\n    const john = {\n        name: \"John\"\n    };\n    // function logPersonInfo(personName: string, personAge: number): string {\n    // \tconst info = `Name: ${personName}, age: ${personAge}`;\n    // \tconsole.log(info);\n    // \treturn info;\n    // }\n    const logPersonInfo = function(personName) {\n        let personAge = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;\n        const info = \"Name: \".concat(personName, \", age: \").concat(personAge);\n        console.log(info);\n        return info;\n    };\n    function logPersonInfo2(person) {\n        // const info = \"Name: \" + personName + \", age: \" + personAge;\n        const info = \"Name: \".concat(person.name, \", age: \").concat(person.age);\n        console.log(info);\n        return info;\n    }\n    const log = logPersonInfo(name);\n    const person = new Person(\"Edward\", 50);\n    logPersonInfo2(person);\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wbGF5Z3JvdW5kLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxzQkFBc0I7QUFFdEIsNENBQTRDO0FBRTVDLHNFQUFzRTtBQUN0RSw0Q0FBNEM7QUFFNUMscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQixnQkFBZ0I7QUFDaEIsSUFBSTtBQUVKLDZCQUE2QjtBQUM3Qix3Q0FBd0M7QUFDeEMsSUFBSTtBQUVKLE1BQU1BO0lBSUxDLFlBQVlDLElBQVksRUFBRUMsR0FBVyxDQUFFO2FBSHZDRCxPQUFlO2FBQ2ZDLE1BQWM7UUFHYixJQUFJLENBQUNELElBQUksR0FBR0E7UUFDWixJQUFJLENBQUNDLEdBQUcsR0FBR0E7SUFDWjtBQUNEO0FBY2UsU0FBU0MsT0FBTztJQUM5QixNQUFNRixPQUFlO0lBQ3JCLE1BQU1DLE1BQWM7SUFFcEIsTUFBTUUsT0FBZTtRQUNwQkgsTUFBTTtJQUNQO0lBRUEsMEVBQTBFO0lBQzFFLDBEQUEwRDtJQUMxRCxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLElBQUk7SUFFSixNQUFNSSxnQkFBZ0MsU0FDckNDLFlBRVk7WUFEWkMsNkVBQW9CO1FBRXBCLE1BQU1DLE9BQU8sU0FBNkJELE9BQXBCRCxZQUFXLFdBQW1CLE9BQVZDO1FBQzFDRSxRQUFRQyxHQUFHLENBQUNGO1FBQ1osT0FBT0E7SUFDUjtJQUVBLFNBQVNHLGVBQWVDLE1BQWMsRUFBRTtRQUN2Qyw4REFBOEQ7UUFDOUQsTUFBTUosT0FBTyxTQUE4QkksT0FBckJBLE9BQU9YLElBQUksRUFBQyxXQUFvQixPQUFYVyxPQUFPVixHQUFHO1FBQ3JETyxRQUFRQyxHQUFHLENBQUNGO1FBQ1osT0FBT0E7SUFDUjtJQUVBLE1BQU1FLE1BQU1MLGNBQWNKO0lBRTFCLE1BQU1XLFNBQVMsSUFBSWIsT0FBTyxVQUFVO0lBRXBDWSxlQUFlQztBQUNoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BsYXlncm91bmQudHM/OWVmYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBQbGF5Z3JvdW5kIEV4YW1wbGVzXG5cbi8vIFRTIHJlY29tbWVuZHMgdG8gdXNlIGludGVyZmFjZSBvdmVyIHR5cGVzXG5cbi8vIE9wdGlvbiAxOiBpbnRlcmZhY2VzIGRlc2NyaWJlIGRhdGEgc3RydWN0dXJlcyBpbiBhIG1vcmUgbmF0dXJhbCB3YXlcbi8vIERlc2NyaWJpbmcgb2JqZWN0cyBlLmcuIHNoaXBtZW50cywgb3JkZXJzXG5cbi8vIGludGVyZmFjZSBQZXJzb24ge1xuLy8gXHRuYW1lOiBzdHJpbmc7XG4vLyBcdGFnZTogbnVtYmVyO1xuLy8gfVxuXG4vLyBpbnRlcmZhY2UgUGVyc29uTG9nZ2VyRm4ge1xuLy8gXHQobmFtZTogc3RyaW5nLCBhZ2U6IG51bWJlcik6IHN0cmluZztcbi8vIH1cblxuY2xhc3MgUGVyc29uIHtcblx0bmFtZTogc3RyaW5nID0gJyc7XG5cdGFnZTogbnVtYmVyID0gMDtcblxuXHRjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGFnZTogbnVtYmVyKSB7XG5cdFx0dGhpcy5uYW1lID0gbmFtZTtcblx0XHR0aGlzLmFnZSA9IGFnZTtcblx0fVxufVxuXG4vLyBPcHRpb24gMjogdHlwZXMgLSB1c2UgdG8gY3JlYXRlIHR5cGUgYWxpYXNlcyBlLmcuIHR5cGUgRGF0YSA9IHN0cmluZyBjYW4gbm90IGJlIGRvbmUgd2l0aCBpbnRlcmZhY2VzXG4vLyB0eXBlcyBhcmUgYmV0dGVyIGZvciBkZXNjcmliaW5nIGZ1bmN0aW9uc1xuXG4vLyB0eXBlIFBlcnNvbiA9IHtcbi8vIFx0bmFtZTogc3RyaW5nO1xuLy8gXHRhZ2U6IG51bWJlcjtcbi8vIH07XG5cbi8vIHR5cGUgRGF0YSA9IHN0cmluZztcblxudHlwZSBQZXJzb25Mb2dnZXJGbiA9IChuYW1lOiBzdHJpbmcsIGFnZT86IG51bWJlcikgPT4gc3RyaW5nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwbGF5KCkge1xuXHRjb25zdCBuYW1lOiBzdHJpbmcgPSAnRmlsaXAnO1xuXHRjb25zdCBhZ2U6IG51bWJlciA9IDMwO1xuXG5cdGNvbnN0IGpvaG46IFBlcnNvbiA9IHtcblx0XHRuYW1lOiAnSm9obicsXG5cdH07XG5cblx0Ly8gZnVuY3Rpb24gbG9nUGVyc29uSW5mbyhwZXJzb25OYW1lOiBzdHJpbmcsIHBlcnNvbkFnZTogbnVtYmVyKTogc3RyaW5nIHtcblx0Ly8gXHRjb25zdCBpbmZvID0gYE5hbWU6ICR7cGVyc29uTmFtZX0sIGFnZTogJHtwZXJzb25BZ2V9YDtcblx0Ly8gXHRjb25zb2xlLmxvZyhpbmZvKTtcblx0Ly8gXHRyZXR1cm4gaW5mbztcblx0Ly8gfVxuXG5cdGNvbnN0IGxvZ1BlcnNvbkluZm86IFBlcnNvbkxvZ2dlckZuID0gKFxuXHRcdHBlcnNvbk5hbWU6IHN0cmluZyxcblx0XHRwZXJzb25BZ2U6IG51bWJlciA9IDBcblx0KTogc3RyaW5nID0+IHtcblx0XHRjb25zdCBpbmZvID0gYE5hbWU6ICR7cGVyc29uTmFtZX0sIGFnZTogJHtwZXJzb25BZ2V9YDtcblx0XHRjb25zb2xlLmxvZyhpbmZvKTtcblx0XHRyZXR1cm4gaW5mbztcblx0fTtcblxuXHRmdW5jdGlvbiBsb2dQZXJzb25JbmZvMihwZXJzb246IFBlcnNvbikge1xuXHRcdC8vIGNvbnN0IGluZm8gPSBcIk5hbWU6IFwiICsgcGVyc29uTmFtZSArIFwiLCBhZ2U6IFwiICsgcGVyc29uQWdlO1xuXHRcdGNvbnN0IGluZm8gPSBgTmFtZTogJHtwZXJzb24ubmFtZX0sIGFnZTogJHtwZXJzb24uYWdlfWA7XG5cdFx0Y29uc29sZS5sb2coaW5mbyk7XG5cdFx0cmV0dXJuIGluZm87XG5cdH1cblxuXHRjb25zdCBsb2cgPSBsb2dQZXJzb25JbmZvKG5hbWUpO1xuXG5cdGNvbnN0IHBlcnNvbiA9IG5ldyBQZXJzb24oJ0Vkd2FyZCcsIDUwKTtcblxuXHRsb2dQZXJzb25JbmZvMihwZXJzb24pO1xufVxuIl0sIm5hbWVzIjpbIlBlcnNvbiIsImNvbnN0cnVjdG9yIiwibmFtZSIsImFnZSIsInBsYXkiLCJqb2huIiwibG9nUGVyc29uSW5mbyIsInBlcnNvbk5hbWUiLCJwZXJzb25BZ2UiLCJpbmZvIiwiY29uc29sZSIsImxvZyIsImxvZ1BlcnNvbkluZm8yIiwicGVyc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./playground.ts\n"));

/***/ })

});