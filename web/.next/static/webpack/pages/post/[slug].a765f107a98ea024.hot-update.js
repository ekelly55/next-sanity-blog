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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"../node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n\n\n\n\nconsole.log((_sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()));\nfunction urlFor(source) {\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_client__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).image(source);\n}\nconst ptComponents = {\n    types: {\n        image: (param)=>{\n            let { value  } = param;\n            var _value_asset;\n            if (!(value === null || value === void 0 ? void 0 : (_value_asset = value.asset) === null || _value_asset === void 0 ? void 0 : _value_asset._ref)) {\n                return null;\n            }\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                alt: value.alt || \" \",\n                loading: \"lazy\",\n                src: urlFor(value).width(320).height(240).fit(\"max\").auto(\"format\")\n            }, void 0, false, {\n                fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, undefined);\n        }\n    }\n};\nconst Post = (param)=>{\n    let { post  } = param;\n    const { title =\"Missing title\" , name =\"Missing name\" , categories  } = post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"By \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    \"Posted in\",\n                    categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: category\n                        }, category, false, {\n                            fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n                            lineNumber: 39,\n                            columnNumber: 39\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n                lineNumber: 37,\n                columnNumber: 9\n            }, undefined),\n            authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: urlFor(authorImage).width(50).url()\n                }, void 0, false, {\n                    fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Post;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUMrQztBQUNDO0FBQ2Y7QUFFakNHLFFBQVFDLEdBQUcsQ0FBQ0osMERBQWVBO0FBRTNCLFNBQVNLLE9BQVFDLE1BQU0sRUFBRTtJQUN2QixPQUFPTix3REFBZUEsQ0FBQ0UsK0NBQU1BLEVBQUVLLEtBQUssQ0FBQ0Q7QUFDdkM7QUFFQSxNQUFNRSxlQUFlO0lBQ25CQyxPQUFPO1FBQ0xGLE9BQU8sU0FBZTtnQkFBZCxFQUFFRyxNQUFLLEVBQUU7Z0JBQ1ZBO1lBQUwsSUFBSSxDQUFDQSxDQUFBQSxrQkFBQUEsbUJBQUFBLEtBQUFBLElBQUFBLENBQUFBLGVBQUFBLE1BQU9DLEtBQUssY0FBWkQsMEJBQUFBLEtBQUFBLElBQUFBLGFBQWNFLElBQUYsR0FBUTtnQkFDdkIsT0FBTyxJQUFJO1lBQ2IsQ0FBQztZQUNELHFCQUNFLDhEQUFDQztnQkFDQ0MsS0FBS0osTUFBTUksR0FBRyxJQUFJO2dCQUNsQkMsU0FBUTtnQkFDUkMsS0FBS1gsT0FBT0ssT0FBT08sS0FBSyxDQUFDLEtBQUtDLE1BQU0sQ0FBQyxLQUFLQyxHQUFHLENBQUMsT0FBT0MsSUFBSSxDQUFDOzs7Ozs7UUFHaEU7SUFDRjtBQUNGO0FBR0EsTUFBTUMsT0FBTyxTQUFZO1FBQVgsRUFBQ0MsS0FBSSxFQUFDO0lBQ2xCLE1BQU0sRUFBRUMsT0FBUSxnQkFBZSxFQUFFQyxNQUFPLGVBQWMsRUFBRUMsV0FBVSxFQUFHLEdBQUdIO0lBQ3hFLHFCQUNFLDhEQUFDSTs7MEJBQ0MsOERBQUNDOzBCQUFJSjs7Ozs7OzBCQUNMLDhEQUFDSzs7b0JBQUs7b0JBQUlKOzs7Ozs7O1lBQ1RDLDRCQUNDLDhEQUFDSTs7b0JBQUc7b0JBRURKLFdBQVdLLEdBQUcsQ0FBQ0MsQ0FBQUEseUJBQVksOERBQUNDO3NDQUFtQkQ7MkJBQVhBOzs7Ozs7Ozs7OztZQUd4Q0UsNkJBQ0MsOERBQUNDOzBCQUNDLDRFQUFDckI7b0JBQ0NHLEtBQUtYLE9BQU80QixhQUNUaEIsS0FBSyxDQUFDLElBQ05rQixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7OztBQU1sQjtLQXZCTWQ7O0FBcUROLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bvc3QvW3NsdWddLmpzPzM0NWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyb3EgZnJvbSAnZ3JvcSdcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5pbXBvcnQge1BvcnRhYmxlVGV4dH0gZnJvbSAnQHBvcnRhYmxldGV4dC9yZWFjdCdcbmltcG9ydCBjbGllbnQgZnJvbSAnLi4vLi4vY2xpZW50J1xuXG5jb25zb2xlLmxvZyhpbWFnZVVybEJ1aWxkZXIpXG5cbmZ1bmN0aW9uIHVybEZvciAoc291cmNlKSB7XG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXG59XG5cbmNvbnN0IHB0Q29tcG9uZW50cyA9IHtcbiAgdHlwZXM6IHtcbiAgICBpbWFnZTogKHsgdmFsdWUgfSkgPT4ge1xuICAgICAgaWYgKCF2YWx1ZT8uYXNzZXQ/Ll9yZWYpIHtcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxpbWdcbiAgICAgICAgICBhbHQ9e3ZhbHVlLmFsdCB8fCAnICd9XG4gICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgIHNyYz17dXJsRm9yKHZhbHVlKS53aWR0aCgzMjApLmhlaWdodCgyNDApLmZpdCgnbWF4JykuYXV0bygnZm9ybWF0Jyl9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfVxuICB9XG59XG5cblxuY29uc3QgUG9zdCA9ICh7cG9zdH0pID0+IHtcbiAgY29uc3QgeyB0aXRsZSA9ICdNaXNzaW5nIHRpdGxlJywgbmFtZSA9ICdNaXNzaW5nIG5hbWUnLCBjYXRlZ29yaWVzICB9ID0gcG9zdFxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlPlxuICAgICAgPGgxPnt0aXRsZX08L2gxPlxuICAgICAgPHNwYW4+Qnkge25hbWV9PC9zcGFuPlxuICAgICAge2NhdGVnb3JpZXMgJiYgKFxuICAgICAgICA8dWw+XG4gICAgICAgICAgUG9zdGVkIGluXG4gICAgICAgICAge2NhdGVnb3JpZXMubWFwKGNhdGVnb3J5ID0+IDxsaSBrZXk9e2NhdGVnb3J5fT57Y2F0ZWdvcnl9PC9saT4pfVxuICAgICAgICA8L3VsPlxuICAgICAgKX1cbiAgICAgIHthdXRob3JJbWFnZSAmJiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXt1cmxGb3IoYXV0aG9ySW1hZ2UpXG4gICAgICAgICAgICAgIC53aWR0aCg1MClcbiAgICAgICAgICAgICAgLnVybCgpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2FydGljbGU+XG4gIClcbn1cblxuY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwb3N0XCIgJiYgc2x1Zy5jdXJyZW50ID09ICRzbHVnXVswXXtcbiAgdGl0bGUsXG4gIFwibmFtZVwiOiBhdXRob3ItPm5hbWUsXG4gIFwiY2F0ZWdvcmllc1wiOiBjYXRlZ29yaWVzW10tPnRpdGxlXG59YFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBhdGhzID0gYXdhaXQgY2xpZW50LmZldGNoKFxuICAgIGAqW190eXBlID09IFwicG9zdFwiICYmIGRlZmluZWQoc2x1Zy5jdXJyZW50KV1bXS5zbHVnLmN1cnJlbnRgXG4gIClcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwYXRocy5tYXAoKHNsdWcpID0+ICh7cGFyYW1zOiB7c2x1Z319KSksXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcbiAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5wYXJhbXNcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyBzbHVnIH0pXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJuYW1lcyI6WyJpbWFnZVVybEJ1aWxkZXIiLCJQb3J0YWJsZVRleHQiLCJjbGllbnQiLCJjb25zb2xlIiwibG9nIiwidXJsRm9yIiwic291cmNlIiwiaW1hZ2UiLCJwdENvbXBvbmVudHMiLCJ0eXBlcyIsInZhbHVlIiwiYXNzZXQiLCJfcmVmIiwiaW1nIiwiYWx0IiwibG9hZGluZyIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiZml0IiwiYXV0byIsIlBvc3QiLCJwb3N0IiwidGl0bGUiLCJuYW1lIiwiY2F0ZWdvcmllcyIsImFydGljbGUiLCJoMSIsInNwYW4iLCJ1bCIsIm1hcCIsImNhdGVnb3J5IiwibGkiLCJhdXRob3JJbWFnZSIsImRpdiIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n"));

/***/ })

});