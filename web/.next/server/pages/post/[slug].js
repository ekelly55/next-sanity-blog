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
exports.id = "pages/post/[slug]";
exports.ids = ["pages/post/[slug]"];
exports.modules = {

/***/ "./client.js":
/*!*******************!*\
  !*** ./client.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: \"18d5in1v\",\n    dataset: \"production\",\n    useCdn: true // `false` if you want to ensure fresh data\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBRXpDLGlFQUFlQSxxREFBWUEsQ0FBQztJQUMxQkMsV0FBVztJQUNYQyxTQUFTO0lBQ1RDLFFBQVEsSUFBSSxDQUFDLDJDQUEyQztBQUMxRCxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vY2xpZW50LmpzPzk3MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tICdAc2FuaXR5L2NsaWVudCdcblxuZXhwb3J0IGRlZmF1bHQgc2FuaXR5Q2xpZW50KHtcbiAgcHJvamVjdElkOiAnMThkNWluMXYnLCAvLyB5b3UgY2FuIGZpbmQgdGhpcyBpbiBzYW5pdHkuanNvblxuICBkYXRhc2V0OiAncHJvZHVjdGlvbicsIC8vIG9yIHRoZSBuYW1lIHlvdSBjaG9zZSBpbiBzdGVwIDFcbiAgdXNlQ2RuOiB0cnVlIC8vIGBmYWxzZWAgaWYgeW91IHdhbnQgdG8gZW5zdXJlIGZyZXNoIGRhdGFcbn0pIl0sIm5hbWVzIjpbInNhbml0eUNsaWVudCIsInByb2plY3RJZCIsImRhdGFzZXQiLCJ1c2VDZG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client.js\n");

/***/ }),

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n\n\nconst Post = ({ post  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: post?.slug?.current\n        }, void 0, false, {\n            fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, undefined);\n};\nasync function getStaticPaths() {\n    const paths = await _client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })),\n        fallback: true\n    };\n}\nasync function getStaticProps(context) {\n    // It's important to default the slug so that it doesn't return \"undefined\"\n    const { slug =\"\"  } = context.params;\n    const post = await _client__WEBPACK_IMPORTED_MODULE_1__[\"default\"].fetch(`\n    *[_type == \"post\" && slug.current == $slug][0]\n  `, {\n        slug\n    });\n    return {\n        props: {\n            post\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUFpQztBQUVqQyxNQUFNQyxPQUFPLENBQUMsRUFBQ0MsS0FBSSxFQUFDLEdBQUs7SUFFdkIscUJBQ0UsOERBQUNDO2tCQUNDLDRFQUFDQztzQkFBSUYsTUFBTUcsTUFBTUM7Ozs7Ozs7Ozs7O0FBR3ZCO0FBRU8sZUFBZUMsaUJBQWlCO0lBQ3JDLE1BQU1DLFFBQVEsTUFBTVIscURBQVksQ0FDOUIsQ0FBQywwREFBMEQsQ0FBQztJQUc5RCxPQUFPO1FBQ0xRLE9BQU9BLE1BQU1FLEdBQUcsQ0FBQyxDQUFDTCxPQUFVO2dCQUFDTSxRQUFRO29CQUFDTjtnQkFBSTtZQUFDO1FBQzNDTyxVQUFVLElBQUk7SUFDaEI7QUFDRixDQUFDO0FBRU0sZUFBZUMsZUFBZUMsT0FBTyxFQUFFO0lBQzVDLDJFQUEyRTtJQUMzRSxNQUFNLEVBQUVULE1BQU8sR0FBRSxFQUFFLEdBQUdTLFFBQVFILE1BQU07SUFDcEMsTUFBTVQsT0FBTyxNQUFNRixxREFBWSxDQUFDLENBQUM7O0VBRWpDLENBQUMsRUFBRTtRQUFFSztJQUFLO0lBQ1YsT0FBTztRQUNMVSxPQUFPO1lBQ0xiO1FBQ0Y7SUFDRjtBQUNGLENBQUM7QUFFRCxpRUFBZUQsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYi8uL3BhZ2VzL3Bvc3QvW3NsdWddLmpzPzM0NWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnXG5cbmNvbnN0IFBvc3QgPSAoe3Bvc3R9KSA9PiB7XG4gIFxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlPlxuICAgICAgPGgxPntwb3N0Py5zbHVnPy5jdXJyZW50fTwvaDE+XG4gICAgPC9hcnRpY2xlPlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGF0aHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goXG4gICAgYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgZGVmaW5lZChzbHVnLmN1cnJlbnQpXVtdLnNsdWcuY3VycmVudGBcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHBhdGhzLm1hcCgoc2x1ZykgPT4gKHtwYXJhbXM6IHtzbHVnfX0pKSxcbiAgICBmYWxsYmFjazogdHJ1ZSxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnBhcmFtc1xuICBjb25zdCBwb3N0ID0gYXdhaXQgY2xpZW50LmZldGNoKGBcbiAgICAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF1cbiAgYCwgeyBzbHVnIH0pXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJuYW1lcyI6WyJjbGllbnQiLCJQb3N0IiwicG9zdCIsImFydGljbGUiLCJoMSIsInNsdWciLCJjdXJyZW50IiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsImZldGNoIiwibWFwIiwicGFyYW1zIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/post/[slug].js"));
module.exports = __webpack_exports__;

})();