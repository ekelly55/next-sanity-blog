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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! groq */ \"groq\");\n/* harmony import */ var groq__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(groq__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @sanity/image-url */ \"@sanity/image-url\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../client */ \"./client.js\");\n\n\n\n// import {PortableText} from '@portabletext/react'\n\nfunction urlFor(source1 = SanityImageSource) {\n    console.log(source1);\n    return _sanity_image_url__WEBPACK_IMPORTED_MODULE_2___default()(_client__WEBPACK_IMPORTED_MODULE_3__[\"default\"]).image(source1);\n}\nconsole.log(urlFor(source));\n// const ptComponents = {\n//   types: {\n//     image: ({ value }) => {\n//       if (!value?.asset?._ref) {\n//         return null\n//       }\n//       return (\n//         <img\n//           alt={value.alt || ' '}\n//           loading=\"lazy\"\n//           src={urlFor(value).width(320).height(240).fit('max').auto('format')}\n//         />\n//       )\n//     }\n//   }\n// }\nconst Post = ({ post  })=>{\n    const { title =\"Missing title\" , name =\"Missing name\" , categories  } = post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: [\n                    \"By \",\n                    name\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            categories && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: [\n                    \"Posted in\",\n                    categories.map((category)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            children: category\n                        }, category, false, {\n                            fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n                            lineNumber: 40,\n                            columnNumber: 39\n                        }, undefined))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined),\n            authorImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: urlFor(authorImage).width(50).url()\n                }, void 0, false, {\n                    fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n                lineNumber: 44,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/eamonnkelly/sei/self-engineer/stack-practice/next-sanity/web/pages/post/[slug].js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, undefined);\n};\nconst query = (groq__WEBPACK_IMPORTED_MODULE_1___default())`*[_type == \"post\" && slug.current == $slug][0]{\n  title,\n  \"name\": author->name,\n  \"categories\": categories[]->title\n  \"authorImage\": author->image\n}`;\nasync function getStaticPaths() {\n    const paths = await _client__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fetch(`*[_type == \"post\" && defined(slug.current)][].slug.current`);\n    return {\n        paths: paths.map((slug)=>({\n                params: {\n                    slug\n                }\n            })),\n        fallback: true\n    };\n}\nasync function getStaticProps(context) {\n    // It's important to default the slug so that it doesn't return \"undefined\"\n    const { slug =\"\"  } = context.params;\n    const post = await _client__WEBPACK_IMPORTED_MODULE_3__[\"default\"].fetch(query, {\n        slug\n    });\n    return {\n        props: {\n            post\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0L1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBdUI7QUFDd0I7QUFDL0MsbURBQW1EO0FBQ2xCO0FBR2pDLFNBQVNHLE9BQVFDLFVBQVNDLGlCQUFpQixFQUFFO0lBQzNDQyxRQUFRQyxHQUFHLENBQUNIO0lBQ1osT0FBT0gsd0RBQWVBLENBQUNDLCtDQUFNQSxFQUFFTSxLQUFLLENBQUNKO0FBQ3ZDO0FBQ0FFLFFBQVFDLEdBQUcsQ0FBQ0osT0FBT0M7QUFFbkIseUJBQXlCO0FBQ3pCLGFBQWE7QUFDYiw4QkFBOEI7QUFDOUIsbUNBQW1DO0FBQ25DLHNCQUFzQjtBQUN0QixVQUFVO0FBQ1YsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZixtQ0FBbUM7QUFDbkMsMkJBQTJCO0FBQzNCLGlGQUFpRjtBQUNqRixhQUFhO0FBQ2IsVUFBVTtBQUNWLFFBQVE7QUFDUixNQUFNO0FBQ04sSUFBSTtBQUdKLE1BQU1LLE9BQU8sQ0FBQyxFQUFDQyxLQUFJLEVBQUMsR0FBSztJQUN2QixNQUFNLEVBQUVDLE9BQVEsZ0JBQWUsRUFBRUMsTUFBTyxlQUFjLEVBQUVDLFdBQVUsRUFBRyxHQUFHSDtJQUN4RSxxQkFDRSw4REFBQ0k7OzBCQUNDLDhEQUFDQzswQkFBSUo7Ozs7OzswQkFDTCw4REFBQ0s7O29CQUFLO29CQUFJSjs7Ozs7OztZQUNUQyw0QkFDQyw4REFBQ0k7O29CQUFHO29CQUVESixXQUFXSyxHQUFHLENBQUNDLENBQUFBLHlCQUFZLDhEQUFDQztzQ0FBbUJEOzJCQUFYQTs7Ozs7Ozs7Ozs7WUFHeENFLDZCQUNDLDhEQUFDQzswQkFDQyw0RUFBQ0M7b0JBQ0NDLEtBQUtyQixPQUFPa0IsYUFDVEksS0FBSyxDQUFDLElBQ05DLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxCO0FBRUEsTUFBTUMsUUFBUTNCLDZDQUFJLENBQUM7Ozs7O0NBS2xCLENBQUM7QUFFSyxlQUFlNEIsaUJBQWlCO0lBQ3JDLE1BQU1DLFFBQVEsTUFBTTNCLHFEQUFZLENBQzlCLENBQUMsMERBQTBELENBQUM7SUFHOUQsT0FBTztRQUNMMkIsT0FBT0EsTUFBTVgsR0FBRyxDQUFDLENBQUNhLE9BQVU7Z0JBQUNDLFFBQVE7b0JBQUNEO2dCQUFJO1lBQUM7UUFDM0NFLFVBQVUsSUFBSTtJQUNoQjtBQUNGLENBQUM7QUFFTSxlQUFlQyxlQUFlQyxPQUFPLEVBQUU7SUFDNUMsMkVBQTJFO0lBQzNFLE1BQU0sRUFBRUosTUFBTyxHQUFFLEVBQUUsR0FBR0ksUUFBUUgsTUFBTTtJQUNwQyxNQUFNdEIsT0FBTyxNQUFNUixxREFBWSxDQUFDeUIsT0FBTztRQUFFSTtJQUFLO0lBQzlDLE9BQU87UUFDTEssT0FBTztZQUNMMUI7UUFDRjtJQUNGO0FBQ0YsQ0FBQztBQUVELGlFQUFlRCxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViLy4vcGFnZXMvcG9zdC9bc2x1Z10uanM/MzQ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3JvcSBmcm9tICdncm9xJ1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcbi8vIGltcG9ydCB7UG9ydGFibGVUZXh0fSBmcm9tICdAcG9ydGFibGV0ZXh0L3JlYWN0J1xuaW1wb3J0IGNsaWVudCBmcm9tICcuLi8uLi9jbGllbnQnXG5cblxuZnVuY3Rpb24gdXJsRm9yIChzb3VyY2UgPSBTYW5pdHlJbWFnZVNvdXJjZSkge1xuICBjb25zb2xlLmxvZyhzb3VyY2UpXG4gIHJldHVybiBpbWFnZVVybEJ1aWxkZXIoY2xpZW50KS5pbWFnZShzb3VyY2UpXG59XG5jb25zb2xlLmxvZyh1cmxGb3Ioc291cmNlKSlcblxuLy8gY29uc3QgcHRDb21wb25lbnRzID0ge1xuLy8gICB0eXBlczoge1xuLy8gICAgIGltYWdlOiAoeyB2YWx1ZSB9KSA9PiB7XG4vLyAgICAgICBpZiAoIXZhbHVlPy5hc3NldD8uX3JlZikge1xuLy8gICAgICAgICByZXR1cm4gbnVsbFxuLy8gICAgICAgfVxuLy8gICAgICAgcmV0dXJuIChcbi8vICAgICAgICAgPGltZ1xuLy8gICAgICAgICAgIGFsdD17dmFsdWUuYWx0IHx8ICcgJ31cbi8vICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4vLyAgICAgICAgICAgc3JjPXt1cmxGb3IodmFsdWUpLndpZHRoKDMyMCkuaGVpZ2h0KDI0MCkuZml0KCdtYXgnKS5hdXRvKCdmb3JtYXQnKX1cbi8vICAgICAgICAgLz5cbi8vICAgICAgIClcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cblxuXG5jb25zdCBQb3N0ID0gKHtwb3N0fSkgPT4ge1xuICBjb25zdCB7IHRpdGxlID0gJ01pc3NpbmcgdGl0bGUnLCBuYW1lID0gJ01pc3NpbmcgbmFtZScsIGNhdGVnb3JpZXMgIH0gPSBwb3N0XG4gIHJldHVybiAoXG4gICAgPGFydGljbGU+XG4gICAgICA8aDE+e3RpdGxlfTwvaDE+XG4gICAgICA8c3Bhbj5CeSB7bmFtZX08L3NwYW4+XG4gICAgICB7Y2F0ZWdvcmllcyAmJiAoXG4gICAgICAgIDx1bD5cbiAgICAgICAgICBQb3N0ZWQgaW5cbiAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoY2F0ZWdvcnkgPT4gPGxpIGtleT17Y2F0ZWdvcnl9PntjYXRlZ29yeX08L2xpPil9XG4gICAgICAgIDwvdWw+XG4gICAgICApfVxuICAgICAge2F1dGhvckltYWdlICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e3VybEZvcihhdXRob3JJbWFnZSlcbiAgICAgICAgICAgICAgLndpZHRoKDUwKVxuICAgICAgICAgICAgICAudXJsKCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvYXJ0aWNsZT5cbiAgKVxufVxuXG5jb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInBvc3RcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJHNsdWddWzBde1xuICB0aXRsZSxcbiAgXCJuYW1lXCI6IGF1dGhvci0+bmFtZSxcbiAgXCJjYXRlZ29yaWVzXCI6IGNhdGVnb3JpZXNbXS0+dGl0bGVcbiAgXCJhdXRob3JJbWFnZVwiOiBhdXRob3ItPmltYWdlXG59YFxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IHBhdGhzID0gYXdhaXQgY2xpZW50LmZldGNoKFxuICAgIGAqW190eXBlID09IFwicG9zdFwiICYmIGRlZmluZWQoc2x1Zy5jdXJyZW50KV1bXS5zbHVnLmN1cnJlbnRgXG4gIClcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBwYXRocy5tYXAoKHNsdWcpID0+ICh7cGFyYW1zOiB7c2x1Z319KSksXG4gICAgZmFsbGJhY2s6IHRydWUsXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgLy8gSXQncyBpbXBvcnRhbnQgdG8gZGVmYXVsdCB0aGUgc2x1ZyBzbyB0aGF0IGl0IGRvZXNuJ3QgcmV0dXJuIFwidW5kZWZpbmVkXCJcbiAgY29uc3QgeyBzbHVnID0gXCJcIiB9ID0gY29udGV4dC5wYXJhbXNcbiAgY29uc3QgcG9zdCA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSwgeyBzbHVnIH0pXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdCJdLCJuYW1lcyI6WyJncm9xIiwiaW1hZ2VVcmxCdWlsZGVyIiwiY2xpZW50IiwidXJsRm9yIiwic291cmNlIiwiU2FuaXR5SW1hZ2VTb3VyY2UiLCJjb25zb2xlIiwibG9nIiwiaW1hZ2UiLCJQb3N0IiwicG9zdCIsInRpdGxlIiwibmFtZSIsImNhdGVnb3JpZXMiLCJhcnRpY2xlIiwiaDEiLCJzcGFuIiwidWwiLCJtYXAiLCJjYXRlZ29yeSIsImxpIiwiYXV0aG9ySW1hZ2UiLCJkaXYiLCJpbWciLCJzcmMiLCJ3aWR0aCIsInVybCIsInF1ZXJ5IiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsImZldGNoIiwic2x1ZyIsInBhcmFtcyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/post/[slug].js\n");

/***/ }),

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "@sanity/image-url":
/*!************************************!*\
  !*** external "@sanity/image-url" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@sanity/image-url");

/***/ }),

/***/ "groq":
/*!***********************!*\
  !*** external "groq" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("groq");

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