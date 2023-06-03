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

/***/ "./framework/shopify/product/get-all-products.ts":
/*!*******************************************************!*\
  !*** ./framework/shopify/product/get-all-products.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_queries_get_all_products__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/queries/get-all-products */ \"./framework/shopify/utils/queries/get-all-products.ts\");\n\nconst fetchApi = async ({ query  })=>{\n    const url = \"http://localhost:4000/graphql\";\n    const res = await fetch(url, {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify({\n            query\n        })\n    });\n    const data = await res.json();\n    return {\n        data\n    };\n};\nconst getAllProducts = async ()=>{\n    const products = await fetchApi({\n        query: _utils_queries_get_all_products__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    });\n    return products.data;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllProducts);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcmFtZXdvcmsvc2hvcGlmeS9wcm9kdWN0L2dldC1hbGwtcHJvZHVjdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0U7QUFNcEUsTUFBTUMsV0FBVyxPQUFPLEVBQUVDLE1BQUssRUFBZSxHQUFLO0lBQ2xELE1BQU1DLE1BQU07SUFFWixNQUFNQyxNQUFNLE1BQU1DLE1BQU1GLEtBQUs7UUFDNUJHLFFBQVE7UUFDUkMsU0FBUztZQUNSLGdCQUFnQjtRQUNqQjtRQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFDcEJSO1FBQ0Q7SUFDRDtJQUVBLE1BQU1TLE9BQU8sTUFBTVAsSUFBSVEsSUFBSTtJQUMzQixPQUFPO1FBQUVEO0lBQUs7QUFDZjtBQUVBLE1BQU1FLGlCQUFpQixVQUE0QjtJQUNsRCxNQUFNQyxXQUFXLE1BQU1iLFNBQVM7UUFBRUMsT0FBT0YsdUVBQW1CQTtJQUFDO0lBQzdELE9BQU9jLFNBQVNILElBQUk7QUFDckI7QUFFQSxpRUFBZUUsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10eXBlc2NyaXB0LXNob3BpZnkvLi9mcmFtZXdvcmsvc2hvcGlmeS9wcm9kdWN0L2dldC1hbGwtcHJvZHVjdHMudHM/MTA0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0QWxsUHJvZHVjdHNRdWVyeSBmcm9tICcuLi91dGlscy9xdWVyaWVzL2dldC1hbGwtcHJvZHVjdHMnO1xuXG50eXBlIEZldGNoUGFyYW1zID0ge1xuXHRxdWVyeTogc3RyaW5nO1xufTtcblxuY29uc3QgZmV0Y2hBcGkgPSBhc3luYyAoeyBxdWVyeSB9OiBGZXRjaFBhcmFtcykgPT4ge1xuXHRjb25zdCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDo0MDAwL2dyYXBocWwnO1xuXG5cdGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xuXHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdGhlYWRlcnM6IHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG5cdFx0fSxcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRxdWVyeSxcblx0XHR9KSxcblx0fSk7XG5cblx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cdHJldHVybiB7IGRhdGEgfTtcbn07XG5cbmNvbnN0IGdldEFsbFByb2R1Y3RzID0gYXN5bmMgKCk6IFByb21pc2U8YW55W10+ID0+IHtcblx0Y29uc3QgcHJvZHVjdHMgPSBhd2FpdCBmZXRjaEFwaSh7IHF1ZXJ5OiBnZXRBbGxQcm9kdWN0c1F1ZXJ5IH0pO1xuXHRyZXR1cm4gcHJvZHVjdHMuZGF0YTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldEFsbFByb2R1Y3RzO1xuIl0sIm5hbWVzIjpbImdldEFsbFByb2R1Y3RzUXVlcnkiLCJmZXRjaEFwaSIsInF1ZXJ5IiwidXJsIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwianNvbiIsImdldEFsbFByb2R1Y3RzIiwicHJvZHVjdHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./framework/shopify/product/get-all-products.ts\n");

/***/ }),

/***/ "./framework/shopify/utils/queries/get-all-products.ts":
/*!*************************************************************!*\
  !*** ./framework/shopify/utils/queries/get-all-products.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst productConnection = `\n    pageInfo {\n        hasNextPage\n        hasPreviousPage\n    }\n    edges {\n        node {\n            id\n            title\n            vendor\n            handle\n            description\n            priceRange {\n                minVariantPrice {\n                    amount\n                    currencyCode\n            }\n        }\n        images(first: 1) {\n            pageInfo {\n                hasNextPage\n                hasPreviousPage\n            }\n            edges {\n                node {\n                originalSrc\n                altText\n                width\n                height\n            }\n        }\n        }\n        }\n    }\n`;\nconst getAllProductsQuery = `\n    query getAllProducts($first: Int = 250) {\n        products(first: $first) {\n            ${productConnection}\n        }\n    }\n`;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getAllProductsQuery);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mcmFtZXdvcmsvc2hvcGlmeS91dGlscy9xdWVyaWVzL2dldC1hbGwtcHJvZHVjdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE1BQU1BLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0MzQixDQUFDO0FBRUQsTUFBTUMsc0JBQXNCLENBQUM7OztZQUdqQixFQUFFRCxrQkFBa0I7OztBQUdoQyxDQUFDO0FBRUQsaUVBQWVDLG1CQUFtQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy10eXBlc2NyaXB0LXNob3BpZnkvLi9mcmFtZXdvcmsvc2hvcGlmeS91dGlscy9xdWVyaWVzL2dldC1hbGwtcHJvZHVjdHMudHM/NjMzYSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwcm9kdWN0Q29ubmVjdGlvbiA9IGBcbiAgICBwYWdlSW5mbyB7XG4gICAgICAgIGhhc05leHRQYWdlXG4gICAgICAgIGhhc1ByZXZpb3VzUGFnZVxuICAgIH1cbiAgICBlZGdlcyB7XG4gICAgICAgIG5vZGUge1xuICAgICAgICAgICAgaWRcbiAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICB2ZW5kb3JcbiAgICAgICAgICAgIGhhbmRsZVxuICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgIHByaWNlUmFuZ2Uge1xuICAgICAgICAgICAgICAgIG1pblZhcmlhbnRQcmljZSB7XG4gICAgICAgICAgICAgICAgICAgIGFtb3VudFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW5jeUNvZGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpbWFnZXMoZmlyc3Q6IDEpIHtcbiAgICAgICAgICAgIHBhZ2VJbmZvIHtcbiAgICAgICAgICAgICAgICBoYXNOZXh0UGFnZVxuICAgICAgICAgICAgICAgIGhhc1ByZXZpb3VzUGFnZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWRnZXMge1xuICAgICAgICAgICAgICAgIG5vZGUge1xuICAgICAgICAgICAgICAgIG9yaWdpbmFsU3JjXG4gICAgICAgICAgICAgICAgYWx0VGV4dFxuICAgICAgICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgICAgICAgaGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuY29uc3QgZ2V0QWxsUHJvZHVjdHNRdWVyeSA9IGBcbiAgICBxdWVyeSBnZXRBbGxQcm9kdWN0cygkZmlyc3Q6IEludCA9IDI1MCkge1xuICAgICAgICBwcm9kdWN0cyhmaXJzdDogJGZpcnN0KSB7XG4gICAgICAgICAgICAke3Byb2R1Y3RDb25uZWN0aW9ufVxuICAgICAgICB9XG4gICAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0QWxsUHJvZHVjdHNRdWVyeTtcbiJdLCJuYW1lcyI6WyJwcm9kdWN0Q29ubmVjdGlvbiIsImdldEFsbFByb2R1Y3RzUXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./framework/shopify/utils/queries/get-all-products.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _framework_shopify_product_get_all_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../framework/shopify/product/get-all-products */ \"./framework/shopify/product/get-all-products.ts\");\n\n\nasync function getStaticProps() {\n    const products = await (0,_framework_shopify_product_get_all_products__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    return {\n        props: {\n            products\n        },\n        revalidate: 4 * 60 * 60\n    };\n}\nfunction Home({ products  }) {\n    (0,_framework_shopify_product_get_all_products__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: JSON.stringify(products)\n    }, void 0, false, {\n        fileName: \"/Applications/GitHub/nextjs-typescript-shopify/pages/index.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUMyRTtBQUVwRSxlQUFlQyxpQkFBaUI7SUFDdEMsTUFBTUMsV0FBVyxNQUFNRix1RkFBY0E7SUFDckMsT0FBTztRQUNORyxPQUFPO1lBQ05EO1FBQ0Q7UUFDQUUsWUFBWSxJQUFJLEtBQUs7SUFDdEI7QUFDRCxDQUFDO0FBRWMsU0FBU0MsS0FBSyxFQUM1QkgsU0FBUSxFQUN3QyxFQUFFO0lBQ2xERix1RkFBY0E7SUFFZCxxQkFBTyw4REFBQ007a0JBQUtDLEtBQUtDLFNBQVMsQ0FBQ047Ozs7OztBQUM3QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXR5cGVzY3JpcHQtc2hvcGlmeS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGUgfSBmcm9tICduZXh0JztcbmltcG9ydCBnZXRBbGxQcm9kdWN0cyBmcm9tICcuLi9mcmFtZXdvcmsvc2hvcGlmeS9wcm9kdWN0L2dldC1hbGwtcHJvZHVjdHMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG5cdGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgZ2V0QWxsUHJvZHVjdHMoKTtcblx0cmV0dXJuIHtcblx0XHRwcm9wczoge1xuXHRcdFx0cHJvZHVjdHMsXG5cdFx0fSxcblx0XHRyZXZhbGlkYXRlOiA0ICogNjAgKiA2MCxcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7XG5cdHByb2R1Y3RzLFxufTogSW5mZXJHZXRTdGF0aWNQcm9wc1R5cGU8dHlwZW9mIGdldFN0YXRpY1Byb3BzPikge1xuXHRnZXRBbGxQcm9kdWN0cygpO1xuXG5cdHJldHVybiA8ZGl2PntKU09OLnN0cmluZ2lmeShwcm9kdWN0cyl9PC9kaXY+O1xufVxuIl0sIm5hbWVzIjpbImdldEFsbFByb2R1Y3RzIiwiZ2V0U3RhdGljUHJvcHMiLCJwcm9kdWN0cyIsInByb3BzIiwicmV2YWxpZGF0ZSIsIkhvbWUiLCJkaXYiLCJKU09OIiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

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