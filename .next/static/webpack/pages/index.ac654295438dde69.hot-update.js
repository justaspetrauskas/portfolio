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

/***/ "./components/HeaderComponent/Header.tsx":
/*!***********************************************!*\
  !*** ./components/HeaderComponent/Header.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/store */ \"./redux/store.ts\");\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header.module.css */ \"./components/HeaderComponent/header.module.css\");\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _LogoContainer_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LogoContainer/index */ \"./components/LogoContainer/index.tsx\");\n/* harmony import */ var _ScreenNavigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ScreenNavigation */ \"./components/HeaderComponent/ScreenNavigation.tsx\");\nvar _this = undefined;\n\n\n\n\n// components\n\n\n\nvar _s = $RefreshSig$();\nvar links = [\n    {\n        label: \"hello\",\n        url: \"hello\"\n    },\n    {\n        label: \"me\",\n        url: \"me\"\n    },\n    {\n        label: \"projects\",\n        url: \"projects\"\n    },\n    {\n        label: \"contact\",\n        url: \"contact\"\n    },\n    {\n        label: \"download cv\",\n        url: \"\"\n    }, \n];\nvar Header = function() {\n    _s();\n    var activeSection = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_store__WEBPACK_IMPORTED_MODULE_3__.selectActiveLink);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), scrollValue = ref[0], setScrollValue = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isHidden = ref1[0], setIsHidden = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleScroll = function() {\n            if (window.innerWidth > 768) {\n                scrollValue > window.scrollY ? setIsHidden(false) : setIsHidden(true);\n                setScrollValue(window.scrollY);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return function() {\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().navbar),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LogoContainer_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\components\\\\HeaderComponent\\\\Header.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ScreenNavigation__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    links: links\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\components\\\\HeaderComponent\\\\Header.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\components\\\\HeaderComponent\\\\Header.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\components\\\\HeaderComponent\\\\Header.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"P3Td9kMXTj6ArWyGZizYCsUNMn0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlckNvbXBvbmVudC9IZWFkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQW1EO0FBQ1Q7QUFDVztBQUVyRCxhQUFhO0FBQzJCO0FBQ0U7QUFDUTs7QUFFbEQsSUFBTVEsS0FBSyxHQUFHO0lBQ1o7UUFBRUMsS0FBSyxFQUFFLE9BQU87UUFBRUMsR0FBRyxFQUFFLE9BQU87S0FBRTtJQUNoQztRQUFFRCxLQUFLLEVBQUUsSUFBSTtRQUFFQyxHQUFHLEVBQUUsSUFBSTtLQUFFO0lBQzFCO1FBQUVELEtBQUssRUFBRSxVQUFVO1FBQUVDLEdBQUcsRUFBRSxVQUFVO0tBQUU7SUFDdEM7UUFBRUQsS0FBSyxFQUFFLFNBQVM7UUFBRUMsR0FBRyxFQUFFLFNBQVM7S0FBRTtJQUNwQztRQUFFRCxLQUFLLEVBQUUsYUFBYTtRQUFFQyxHQUFHLEVBQUUsRUFBRTtLQUFFO0NBQ2xDO0FBRUQsSUFBTUMsTUFBTSxHQUFHLFdBQU07O0lBQ25CLElBQU1DLGFBQWEsR0FBR1Qsd0RBQVcsQ0FBQ0MsMERBQWdCLENBQUM7SUFDbkQsSUFBc0NGLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBMUNXLFdBQVcsR0FBb0JYLEdBQVcsR0FBL0IsRUFBRVksY0FBYyxHQUFJWixHQUFXLEdBQWY7SUFDbEMsSUFBZ0NBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBeENhLFFBQVEsR0FBaUJiLElBQWUsR0FBaEMsRUFBRWMsV0FBVyxHQUFJZCxJQUFlLEdBQW5CO0lBRTVCRCxnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFNZ0IsWUFBWSxHQUFHLFdBQU07WUFDekIsSUFBSUMsTUFBTSxDQUFDQyxVQUFVLEdBQUcsR0FBRyxFQUFFO2dCQUMzQk4sV0FBVyxHQUFHSyxNQUFNLENBQUNFLE9BQU8sR0FBR0osV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHQSxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3RFRixjQUFjLENBQUNJLE1BQU0sQ0FBQ0UsT0FBTyxDQUFDLENBQUM7YUFDaEM7U0FDRjtRQUVERixNQUFNLENBQUNHLGdCQUFnQixDQUFDLFFBQVEsRUFBRUosWUFBWSxDQUFDLENBQUM7UUFDaEQsT0FBTyxXQUFNO1lBQ1hDLE1BQU0sQ0FBQ0ksbUJBQW1CLENBQUMsUUFBUSxFQUFFTCxZQUFZLENBQUMsQ0FBQztTQUNwRCxDQUFDO0tBQ0gsQ0FBQyxDQUFDO0lBRUgscUJBQ0UsOERBQUNNLFFBQU07a0JBQ0wsNEVBQUNDLEtBQUc7WUFBQ0MsU0FBUyxFQUFFcEIsa0VBQVk7OzhCQUMxQiw4REFBQ0MsNERBQUk7Ozs7eUJBQUc7OEJBQ1IsOERBQUNDLHlEQUFnQjtvQkFBQ0MsS0FBSyxFQUFFQSxLQUFLOzs7Ozt5QkFBSTs7Ozs7O2lCQUU5Qjs7Ozs7YUFFQyxDQUNUO0NBQ0g7R0E3QktHLE1BQU07O1FBQ1lSLG9EQUFXOzs7QUFEN0JRLEtBQUFBLE1BQU07QUErQlosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlckNvbXBvbmVudC9IZWFkZXIudHN4PzRmMzQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0QWN0aXZlTGluayB9IGZyb20gXCIuLi8uLi9yZWR1eC9zdG9yZVwiO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vaGVhZGVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uL0xvZ29Db250YWluZXIvaW5kZXhcIjtcclxuaW1wb3J0IFNjcmVlbk5hdmlnYXRpb24gZnJvbSBcIi4vU2NyZWVuTmF2aWdhdGlvblwiO1xyXG5cclxuY29uc3QgbGlua3MgPSBbXHJcbiAgeyBsYWJlbDogXCJoZWxsb1wiLCB1cmw6IFwiaGVsbG9cIiB9LFxyXG4gIHsgbGFiZWw6IFwibWVcIiwgdXJsOiBcIm1lXCIgfSxcclxuICB7IGxhYmVsOiBcInByb2plY3RzXCIsIHVybDogXCJwcm9qZWN0c1wiIH0sXHJcbiAgeyBsYWJlbDogXCJjb250YWN0XCIsIHVybDogXCJjb250YWN0XCIgfSxcclxuICB7IGxhYmVsOiBcImRvd25sb2FkIGN2XCIsIHVybDogXCJcIiB9LFxyXG5dO1xyXG5cclxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGFjdGl2ZVNlY3Rpb24gPSB1c2VTZWxlY3RvcihzZWxlY3RBY3RpdmVMaW5rKTtcclxuICBjb25zdCBbc2Nyb2xsVmFsdWUsIHNldFNjcm9sbFZhbHVlXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtpc0hpZGRlbiwgc2V0SXNIaWRkZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xyXG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjgpIHtcclxuICAgICAgICBzY3JvbGxWYWx1ZSA+IHdpbmRvdy5zY3JvbGxZID8gc2V0SXNIaWRkZW4oZmFsc2UpIDogc2V0SXNIaWRkZW4odHJ1ZSk7XHJcbiAgICAgICAgc2V0U2Nyb2xsVmFsdWUod2luZG93LnNjcm9sbFkpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxoZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5uYXZiYXJ9PlxyXG4gICAgICAgIDxMb2dvIC8+XHJcbiAgICAgICAgPFNjcmVlbk5hdmlnYXRpb24gbGlua3M9e2xpbmtzfSAvPlxyXG4gICAgICAgIHsvKiA8SGFtYnVyZ2VyIC8+ICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxNb2JpbGVOYXZpZ2F0aW9uIGxpbmtzPXtsaW5rc30gLz4gKi99XHJcbiAgICA8L2hlYWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwic2VsZWN0QWN0aXZlTGluayIsInN0eWxlIiwiTG9nbyIsIlNjcmVlbk5hdmlnYXRpb24iLCJsaW5rcyIsImxhYmVsIiwidXJsIiwiSGVhZGVyIiwiYWN0aXZlU2VjdGlvbiIsInNjcm9sbFZhbHVlIiwic2V0U2Nyb2xsVmFsdWUiLCJpc0hpZGRlbiIsInNldElzSGlkZGVuIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhlYWRlciIsImRpdiIsImNsYXNzTmFtZSIsIm5hdmJhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/HeaderComponent/Header.tsx\n"));

/***/ })

});