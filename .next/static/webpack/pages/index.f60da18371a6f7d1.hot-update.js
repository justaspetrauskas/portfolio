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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/store */ \"./redux/store.ts\");\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header.module.css */ \"./components/HeaderComponent/header.module.css\");\n/* harmony import */ var _header_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_header_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _LogoContainer_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../LogoContainer/index */ \"./components/LogoContainer/index.tsx\");\n/* harmony import */ var _ScreenNavigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ScreenNavigation */ \"./components/HeaderComponent/ScreenNavigation.tsx\");\nvar _this = undefined;\n\n\n\n\n// components\n\n\n\nvar _s = $RefreshSig$();\nvar links = [\n    {\n        label: \"hello\",\n        url: \"hello\"\n    },\n    {\n        label: \"me\",\n        url: \"me\"\n    },\n    {\n        label: \"projects\",\n        url: \"projects\"\n    },\n    {\n        label: \"contact\",\n        url: \"contact\"\n    }, \n];\nvar Header = function() {\n    _s();\n    var activeSection = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(_redux_store__WEBPACK_IMPORTED_MODULE_3__.selectActiveLink);\n    var headerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), scrollValue = ref[0], setScrollValue = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isHidden = ref1[0], setIsHidden = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleScroll = function() {\n            if (window.innerWidth > 768) {\n                scrollValue > window.scrollY ? setIsHidden(false) : setIsHidden(true);\n                setScrollValue(window.scrollY);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return function() {\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"\".concat((_header_module_css__WEBPACK_IMPORTED_MODULE_6___default().container), \" \").concat(isHidden ? \"hidden\" : \"\"),\n        ref: headerRef,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_header_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"nav-container\"]),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LogoContainer_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\components\\\\HeaderComponent\\\\Header.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ScreenNavigation__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    links: links\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\components\\\\HeaderComponent\\\\Header.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\components\\\\HeaderComponent\\\\Header.tsx\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\components\\\\HeaderComponent\\\\Header.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, _this);\n};\n_s(Header, \"S5TJGGsSFHNOSpyWcsWlIwbTOhQ=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlckNvbXBvbmVudC9IZWFkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTJEO0FBQ2pCO0FBQ1c7QUFFckQsYUFBYTtBQUMyQjtBQUNFO0FBQ1E7O0FBRWxELElBQU1TLEtBQUssR0FBRztJQUNaO1FBQUVDLEtBQUssRUFBRSxPQUFPO1FBQUVDLEdBQUcsRUFBRSxPQUFPO0tBQUU7SUFDaEM7UUFBRUQsS0FBSyxFQUFFLElBQUk7UUFBRUMsR0FBRyxFQUFFLElBQUk7S0FBRTtJQUMxQjtRQUFFRCxLQUFLLEVBQUUsVUFBVTtRQUFFQyxHQUFHLEVBQUUsVUFBVTtLQUFFO0lBQ3RDO1FBQUVELEtBQUssRUFBRSxTQUFTO1FBQUVDLEdBQUcsRUFBRSxTQUFTO0tBQUU7Q0FDckM7QUFFRCxJQUFNQyxNQUFNLEdBQUcsV0FBTTs7SUFDbkIsSUFBTUMsYUFBYSxHQUFHVCx3REFBVyxDQUFDQywwREFBZ0IsQ0FBQztJQUNuRCxJQUFNUyxTQUFTLEdBQUdaLDZDQUFNLENBQXdCLElBQUksQ0FBQztJQUNyRCxJQUFzQ0MsR0FBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsQ0FBQyxFQUExQ1ksV0FBVyxHQUFvQlosR0FBVyxHQUEvQixFQUFFYSxjQUFjLEdBQUliLEdBQVcsR0FBZjtJQUNsQyxJQUFnQ0EsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQUF4Q2MsUUFBUSxHQUFpQmQsSUFBZSxHQUFoQyxFQUFFZSxXQUFXLEdBQUlmLElBQWUsR0FBbkI7SUFFNUJGLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQU1rQixZQUFZLEdBQUcsV0FBTTtZQUN6QixJQUFJQyxNQUFNLENBQUNDLFVBQVUsR0FBRyxHQUFHLEVBQUU7Z0JBQzNCTixXQUFXLEdBQUdLLE1BQU0sQ0FBQ0UsT0FBTyxHQUFHSixXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUdBLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdEVGLGNBQWMsQ0FBQ0ksTUFBTSxDQUFDRSxPQUFPLENBQUMsQ0FBQzthQUNoQztTQUNGO1FBRURGLE1BQU0sQ0FBQ0csZ0JBQWdCLENBQUMsUUFBUSxFQUFFSixZQUFZLENBQUMsQ0FBQztRQUNoRCxPQUFPLFdBQU07WUFDWEMsTUFBTSxDQUFDSSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUVMLFlBQVksQ0FBQyxDQUFDO1NBQ3BELENBQUM7S0FDSCxDQUFDLENBQUM7SUFFSCxxQkFDRSw4REFBQ00sUUFBTTtRQUNMQyxTQUFTLEVBQUUsRUFBQyxDQUF3QlQsTUFBd0IsQ0FBOUNYLHFFQUFrQixFQUFDLEdBQUMsQ0FBMkIsUUFBekJXLFFBQVEsR0FBRyxRQUFRLEdBQUcsRUFBRSxDQUFFO1FBQzlEVSxHQUFHLEVBQUViLFNBQVM7a0JBRWQsNEVBQUNjLEtBQUc7WUFBQ0YsU0FBUyxFQUFFcEIsNEVBQXNCOzs4QkFDcEMsOERBQUNDLDREQUFJOzs7O3lCQUFHOzhCQUNSLDhEQUFDQyx5REFBZ0I7b0JBQUNDLEtBQUssRUFBRUEsS0FBSzs7Ozs7eUJBQUk7Ozs7OztpQkFFOUI7Ozs7O2FBRUMsQ0FDVDtDQUNIO0dBakNLRyxNQUFNOztRQUNZUixvREFBVzs7O0FBRDdCUSxLQUFBQSxNQUFNO0FBbUNaLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXJDb21wb25lbnQvSGVhZGVyLnRzeD80ZjM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgc2VsZWN0QWN0aXZlTGluayB9IGZyb20gXCIuLi8uLi9yZWR1eC9zdG9yZVwiO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgc3R5bGUgZnJvbSBcIi4vaGVhZGVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uL0xvZ29Db250YWluZXIvaW5kZXhcIjtcclxuaW1wb3J0IFNjcmVlbk5hdmlnYXRpb24gZnJvbSBcIi4vU2NyZWVuTmF2aWdhdGlvblwiO1xyXG5cclxuY29uc3QgbGlua3MgPSBbXHJcbiAgeyBsYWJlbDogXCJoZWxsb1wiLCB1cmw6IFwiaGVsbG9cIiB9LFxyXG4gIHsgbGFiZWw6IFwibWVcIiwgdXJsOiBcIm1lXCIgfSxcclxuICB7IGxhYmVsOiBcInByb2plY3RzXCIsIHVybDogXCJwcm9qZWN0c1wiIH0sXHJcbiAgeyBsYWJlbDogXCJjb250YWN0XCIsIHVybDogXCJjb250YWN0XCIgfSxcclxuXTtcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcclxuICBjb25zdCBhY3RpdmVTZWN0aW9uID0gdXNlU2VsZWN0b3Ioc2VsZWN0QWN0aXZlTGluayk7XHJcbiAgY29uc3QgaGVhZGVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW3Njcm9sbFZhbHVlLCBzZXRTY3JvbGxWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbaXNIaWRkZW4sIHNldElzSGlkZGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY4KSB7XHJcbiAgICAgICAgc2Nyb2xsVmFsdWUgPiB3aW5kb3cuc2Nyb2xsWSA/IHNldElzSGlkZGVuKGZhbHNlKSA6IHNldElzSGlkZGVuKHRydWUpO1xyXG4gICAgICAgIHNldFNjcm9sbFZhbHVlKHdpbmRvdy5zY3JvbGxZKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8aGVhZGVyXHJcbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVbXCJjb250YWluZXJcIl19ICR7aXNIaWRkZW4gPyBcImhpZGRlblwiIDogXCJcIn1gfVxyXG4gICAgICByZWY9e2hlYWRlclJlZn1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlW1wibmF2LWNvbnRhaW5lclwiXX0+XHJcbiAgICAgICAgPExvZ28gLz5cclxuICAgICAgICA8U2NyZWVuTmF2aWdhdGlvbiBsaW5rcz17bGlua3N9IC8+XHJcbiAgICAgICAgey8qIDxIYW1idXJnZXIgLz4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPE1vYmlsZU5hdmlnYXRpb24gbGlua3M9e2xpbmtzfSAvPiAqL31cclxuICAgIDwvaGVhZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwidXNlU2VsZWN0b3IiLCJzZWxlY3RBY3RpdmVMaW5rIiwic3R5bGUiLCJMb2dvIiwiU2NyZWVuTmF2aWdhdGlvbiIsImxpbmtzIiwibGFiZWwiLCJ1cmwiLCJIZWFkZXIiLCJhY3RpdmVTZWN0aW9uIiwiaGVhZGVyUmVmIiwic2Nyb2xsVmFsdWUiLCJzZXRTY3JvbGxWYWx1ZSIsImlzSGlkZGVuIiwic2V0SXNIaWRkZW4iLCJoYW5kbGVTY3JvbGwiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwicmVmIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/HeaderComponent/Header.tsx\n"));

/***/ })

});