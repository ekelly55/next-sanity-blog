"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[slug]",{

/***/ "./pages/post/[slug].js":
/*!******************************!*\
  !*** ./pages/post/[slug].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n\n\n// import {PortableText} from '@portabletext/react'\n\nfunction urlFor(source1) {\n    console.log(source1);\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).image(source1);\n}\nconsole.log(urlFor(source));\n// const ptComponents = {\n//   types: {\n//     image: ({ value }) => {\n//       if (!value?.asset?._ref) {\n//         return null\n//       }\n//       return (\n//         <img\n//           alt={value.alt || ' '}\n//           loading=\"lazy\"\n//           src={urlFor(value).width(320).height(240).fit('max').auto('format')}\n//         />\n//       )\n//     }\n//   }\n// }\nconst Post = (param)=>{\n    let { post  } = param;\n    const { title =\"Missing title\" , name =\"Missing name\" , categories  } = post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"By \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    \"Posted in\",\n                    categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: category\n                        }, category, false, {\n                            fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n                            lineNumber: 40,\n                            columnNumber: 39\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined),\n            authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: urlFor(authorImage).width(50).url()\n                }, void 0, false, {\n                    fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUMrQztBQUMvQyxtREFBbUQ7QUFDbEI7QUFHakMsU0FBU0UsT0FBUUMsT0FBTSxFQUFFO0lBQ3ZCQyxRQUFRQyxHQUFHLENBQUNGO0lBQ1osT0FBT0gsd0RBQWVBLENBQUNDLCtDQUFNQSxFQUFFSyxLQUFLLENBQUNIO0FBQ3ZDO0FBQ0FDLFFBQVFDLEdBQUcsQ0FBQ0gsT0FBT0M7QUFFbkIseUJBQXlCO0FBQ3pCLGFBQWE7QUFDYiw4QkFBOEI7QUFDOUIsbUNBQW1DO0FBQ25DLHNCQUFzQjtBQUN0QixVQUFVO0FBQ1YsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixtQ0FBbUM7QUFDbkMsMkJBQTJCO0FBQzNCLGlGQUFpRjtBQUNqRixhQUFhO0FBQ2IsVUFBVTtBQUNWLFFBQVE7QUFDUixNQUFNO0FBQ04sSUFBSTtBQUdKLE1BQU1JLE9BQU8sU0FBWTtRQUFYLEVBQUNDLEtBQUksRUFBQztJQUNsQixNQUFNLEVBQUVDLE9BQVEsZ0JBQWUsRUFBRUMsTUFBTyxlQUFjLEVBQUVDLFdBQVUsRUFBRyxHQUFHSDtJQUN4RSxxQkFDRSw4REFBQ0k7OzBCQUNDLDhEQUFDQzswQkFBSUo7Ozs7OzswQkFDTCw4REFBQ0s7O29CQUFLO29CQUFJSjs7Ozs7OztZQUNUQyw0QkFDQyw4REFBQ0k7O29CQUFHO29CQUVESixXQUFXSyxHQUFHLENBQUNDLENBQUFBLHlCQUFZLDhEQUFDQztzQ0FBbUJEOzJCQUFYQTs7Ozs7Ozs7Ozs7WUFHeENFLDZCQUNDLDhEQUFDQzswQkFDQyw0RUFBQ0M7b0JBQ0NDLEtBQUtwQixPQUFPaUIsYUFDVEksS0FBSyxDQUFDLElBQ05DLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxCO0tBdkJNakI7O0FBc0ROLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3QvW3NsdWddLmpzPzM0NWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSdcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG4vLyBpbXBvcnQge1BvcnRhYmxlVGV4dH0gZnJvbSAnQHBvcnRhYmxldGV4dC9yZWFjdCdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50J1xuXG5cbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XG4gIGNvbnNvbGUubG9nKHNvdXJjZSlcbiAgcmV0dXJuIGltYWdlVXJsQnVpbGRlcihjbGllbnQpLmltYWdlKHNvdXJjZSlcbn1cbmNvbnNvbGUubG9nKHVybEZvcihzb3VyY2UpKVxuXG4vLyBjb25zdCBwdENvbXBvbmVudHMgPSB7XG4vLyAgIHR5cGVzOiB7XG4vLyAgICAgaW1hZ2U6ICh7IHZhbHVlIH0pID0+IHtcbi8vICAgICAgIGlmICghdmFsdWU/LmFzc2V0Py5fcmVmKSB7XG4vLyAgICAgICAgIHJldHVybiBudWxsXG4vLyAgICAgICB9XG4vLyAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICA8aW1nXG4vLyAgICAgICAgICAgYWx0PXt2YWx1ZS5hbHQgfHwgJyAnfVxuLy8gICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbi8vICAgICAgICAgICBzcmM9e3VybEZvcih2YWx1ZSkud2lkdGgoMzIwKS5oZWlnaHQoMjQwKS5maXQoJ21heCcpLmF1dG8oJ2Zvcm1hdCcpfVxuLy8gICAgICAgICAvPlxuLy8gICAgICAgKVxuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG5cbmNvbnN0IFBvc3QgPSAoe3Bvc3R9KSA9PiB7XG4gIGNvbnN0IHsgdGl0bGUgPSAnTWlzc2luZyB0aXRsZScsIG5hbWUgPSAnTWlzc2luZyBuYW1lJywgY2F0ZWdvcmllcyAgfSA9IHBvc3RcbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZT5cbiAgICAgIDxoMT57dGl0bGV9PC9oMT5cbiAgICAgIDxzcGFuPkJ5IHtuYW1lfTwvc3Bhbj5cbiAgICAgIHtjYXRlZ29yaWVzICYmIChcbiAgICAgICAgPHVsPlxuICAgICAgICAgIFBvc3RlZCBpblxuICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcChjYXRlZ29yeSA9PiA8bGkga2V5PXtjYXRlZ29yeX0+e2NhdGVnb3J5fTwvbGk+KX1cbiAgICAgICAgPC91bD5cbiAgICAgICl9XG4gICAgICB7YXV0aG9ySW1hZ2UgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17dXJsRm9yKGF1dGhvckltYWdlKVxuICAgICAgICAgICAgICAud2lkdGgoNTApXG4gICAgICAgICAgICAgIC51cmwoKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9hcnRpY2xlPlxuICApXG59XG5cbmNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicG9zdFwiICYmIHNsdWcuY3VycmVudCA9PSAkc2x1Z11bMF17XG4gIHRpdGxlLFxuICBcIm5hbWVcIjogYXV0aG9yLT5uYW1lLFxuICBcImNhdGVnb3JpZXNcIjogY2F0ZWdvcmllc1tdLT50aXRsZVxuICBcImF1dGhvckltYWdlXCI6IGF1dGhvci0+aW1hZ2Vcbn1gXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcGF0aHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goXG4gICAgYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgZGVmaW5lZChzbHVnLmN1cnJlbnQpXVtdLnNsdWcuY3VycmVudGBcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgcGF0aHM6IHBhdGhzLm1hcCgoc2x1ZykgPT4gKHtwYXJhbXM6IHtzbHVnfX0pKSxcbiAgICBmYWxsYmFjazogdHJ1ZSxcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICAvLyBJdCdzIGltcG9ydGFudCB0byBkZWZhdWx0IHRoZSBzbHVnIHNvIHRoYXQgaXQgZG9lc24ndCByZXR1cm4gXCJ1bmRlZmluZWRcIlxuICBjb25zdCB7IHNsdWcgPSBcIlwiIH0gPSBjb250ZXh0LnBhcmFtc1xuICBjb25zdCBwb3N0ID0gYXdhaXQgY2xpZW50LmZldGNoKHF1ZXJ5LCB7IHNsdWcgfSlcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcG9zdFxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0Il0sIm5hbWVzIjpbImltYWdlVXJsQnVpbGRlciIsImNsaWVudCIsInVybEZvciIsInNvdXJjZSIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZSIsIlBvc3QiLCJwb3N0IiwidGl0bGUiLCJuYW1lIiwiY2F0ZWdvcmllcyIsImFydGljbGUiLCJoMSIsInNwYW4iLCJ1bCIsIm1hcCIsImNhdGVnb3J5IiwibGkiLCJhdXRob3JJbWFnZSIsImRpdiIsImltZyIsInNyYyIsIndpZHRoIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n"));

/***/ })

});