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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_slices_profileSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/slices/profileSlice */ \"./redux/slices/profileSlice.ts\");\n/* harmony import */ var _components_HeaderComponent_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HeaderComponent/Header */ \"./components/HeaderComponent/Header.tsx\");\n/* harmony import */ var _sections_Hello_Section_HelloSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/Hello.Section/HelloSection */ \"./sections/Hello.Section/HelloSection.tsx\");\n/* harmony import */ var _react_spring_parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-spring/parallax */ \"./node_modules/@react-spring/parallax/dist/react-spring-parallax.esm.js\");\n/* harmony import */ var _components_ScrollableContainer_ScrollableContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ScrollableContainer/ScrollableContainer */ \"./components/ScrollableContainer/ScrollableContainer.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function(param) {\n    var profileData = param.profileData;\n    _s();\n    var scrollContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(profileData);\n        dispatch((0,_redux_slices_profileSlice__WEBPACK_IMPORTED_MODULE_4__.setProfileData)(profileData));\n    }, [\n        profileData\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var handleScroll = function() {\n            if (window.innerWidth > 768) {\n                // scrollValue > window.scrollY ? setIsHidden(false) : setIsHidden(true);\n                // setScrollValue(window.scrollY);\n                console.log(window.scrollY);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return function() {\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(scrollContainerRef.current.container.s);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Justas: Front-end developer\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeaderComponent_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"fixed top-0 left-0 w-full h-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_7__.Parallax, {\n                    pages: 4,\n                    style: {\n                        top: \"0\",\n                        left: \"0\"\n                    },\n                    ref: scrollContainerRef,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ScrollableContainer_ScrollableContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            offset: 0,\n                            scrollSpeed: 2.5,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_Hello_Section_HelloSection__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_7__.ParallaxLayer, {\n                            offset: 1,\n                            speed: 2,\n                            style: {\n                                backgroundColor: \"#ff6d6d\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_7__.ParallaxLayer, {\n                            offset: 1,\n                            speed: 0.5,\n                            style: {\n                                display: \"flex\",\n                                justifyContent: \"center\",\n                                alignItems: \"center\",\n                                color: \"white\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Scroll up\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"jrfDEqoaTZHQtxE2BTfCwVj8alc=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBQUEsSUFBSTs7QUF1R1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gXCIuLi9jbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGZldGNoUHJvZmlsZSwgc2V0UHJvZmlsZURhdGEgfSBmcm9tIFwiLi4vcmVkdXgvc2xpY2VzL3Byb2ZpbGVTbGljZVwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJDb21wb25lbnQvSGVhZGVyXCI7XG5pbXBvcnQgSGVsbG9TZWN0aW9uIGZyb20gXCIuLi9zZWN0aW9ucy9IZWxsby5TZWN0aW9uL0hlbGxvU2VjdGlvblwiO1xuaW1wb3J0IEFib3V0U2VjdGlvbiBmcm9tIFwiLi4vc2VjdGlvbnMvQWJvdXRNZS5TZWN0aW9uL0Fib3V0U2VjdGlvblwiO1xuaW1wb3J0IENvbnRhY3RTZWN0aW9uIGZyb20gXCIuLi9zZWN0aW9ucy9Db250YWN0LlNlY3Rpb24vQ29udGFjdC5TZWN0aW9uXCI7XG5cbmltcG9ydCB7IFBhcmFsbGF4LCBQYXJhbGxheExheWVyIH0gZnJvbSBcIkByZWFjdC1zcHJpbmcvcGFyYWxsYXhcIjtcbmltcG9ydCBTY3JvbGxhYmxlQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1Njcm9sbGFibGVDb250YWluZXIvU2Nyb2xsYWJsZUNvbnRhaW5lclwiO1xuXG5pbnRlcmZhY2UgSG9tZVByb3BzIHtcbiAgcHJvZmlsZURhdGE6IGFueTtcbn1cbmNvbnN0IEhvbWUgPSAoeyBwcm9maWxlRGF0YSB9OiBIb21lUHJvcHMpID0+IHtcbiAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyUmVmID0gdXNlUmVmPGFueT4obnVsbCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHByb2ZpbGVEYXRhKTtcbiAgICBkaXNwYXRjaChzZXRQcm9maWxlRGF0YShwcm9maWxlRGF0YSkpO1xuICB9LCBbcHJvZmlsZURhdGFdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCkge1xuICAgICAgICAvLyBzY3JvbGxWYWx1ZSA+IHdpbmRvdy5zY3JvbGxZID8gc2V0SXNIaWRkZW4oZmFsc2UpIDogc2V0SXNIaWRkZW4odHJ1ZSk7XG4gICAgICAgIC8vIHNldFNjcm9sbFZhbHVlKHdpbmRvdy5zY3JvbGxZKTtcbiAgICAgICAgY29uc29sZS5sb2cod2luZG93LnNjcm9sbFkpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coc2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQuY29udGFpbmVyLnMpO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkp1c3RhczogRnJvbnQtZW5kIGRldmVsb3BlcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1zY3JlZW5cIj5cbiAgICAgICAgPFBhcmFsbGF4XG4gICAgICAgICAgcGFnZXM9ezR9XG4gICAgICAgICAgc3R5bGU9e3sgdG9wOiBcIjBcIiwgbGVmdDogXCIwXCIgfX1cbiAgICAgICAgICByZWY9e3Njcm9sbENvbnRhaW5lclJlZn1cbiAgICAgICAgPlxuICAgICAgICAgIDxTY3JvbGxhYmxlQ29udGFpbmVyIG9mZnNldD17MH0gc2Nyb2xsU3BlZWQ9ezIuNX0+XG4gICAgICAgICAgICA8SGVsbG9TZWN0aW9uIC8+XG4gICAgICAgICAgPC9TY3JvbGxhYmxlQ29udGFpbmVyPlxuXG4gICAgICAgICAgPFBhcmFsbGF4TGF5ZXJcbiAgICAgICAgICAgIG9mZnNldD17MX1cbiAgICAgICAgICAgIHNwZWVkPXsyfVxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmZjZkNmRcIiB9fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8UGFyYWxsYXhMYXllclxuICAgICAgICAgICAgb2Zmc2V0PXsxfVxuICAgICAgICAgICAgc3BlZWQ9ezAuNX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHA+U2Nyb2xsIHVwPC9wPlxuICAgICAgICAgIDwvUGFyYWxsYXhMYXllcj5cbiAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgey8qIDxmb290ZXIgY2xhc3NOYW1lPVwiZmxleCBoLTI0IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYm9yZGVyLXRcIj5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMlwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7XCIgXCJ9XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiB3aWR0aD17NzJ9IGhlaWdodD17MTZ9IC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcGFyYW1zID0geyBwcm9maWxlSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9GSUxFSUQgfTtcblxuICBjb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInByb2ZpbGVcIiAmJiBfaWQgPT0gJHByb2ZpbGVJZF17XG4gICAgXCJoZWxsb1wiOmdyZWV0aW5nLGZpcnN0TmFtZSxsYXN0TmFtZSxjdXJyZW50TG9jYXRpb24sc29jaWFsTGlua3MsXG4gICAgXCJwcm9maWxlSW1hZ2VVUkxcIjpwcm9maWxlSW1hZ2UuYXNzZXQtPnVybCxcbiAgICBcImN2VVJMXCI6Y3YuYXNzZXQtPnVybCxlZHVjYXRpb25bXS0+e3RpdGxlLGRlc2NyaXB0aW9uLHVuaXZlcnNpdHl9LFxuICAgIGV4cGVyaWVuY2VbXS0+e2pvYlRpdGxlLGNvbXBhbnksZGVzY3JpcHRpb24sc3RhcnREYXRlLGVuZERhdGUsdGFnW10tPntza2lsbFRpdGxlfX0sXG4gICAgZWR1Y2F0aW9uW10tPnt0aXRsZSxkZXNjcmlwdGlvbix1bml2ZXJzaXR5LHN0YXJ0RGF0ZSxlbmREYXRlfSxcbiAgICBcImFib3V0TWVcIjphYm91dE1lLFxuICAgIHNraWxsc1tdLT57X2lkLHNraWxsVGl0bGUsc2tpbGxJY29uLGNhdGVnb3J5LHNraWxsSWNvbntzZWN1cmVfdXJsfX19YDtcbiAgY29uc3QgcHJvZmlsZURhdGEgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnksIHBhcmFtcyk7XG5cbiAgY29uc29sZS5sb2cocHJvZmlsZURhdGEpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2ZpbGVEYXRhLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZURpc3BhdGNoIiwic2V0UHJvZmlsZURhdGEiLCJIZWFkZXIiLCJIZWxsb1NlY3Rpb24iLCJQYXJhbGxheCIsIlBhcmFsbGF4TGF5ZXIiLCJTY3JvbGxhYmxlQ29udGFpbmVyIiwiSG9tZSIsInByb2ZpbGVEYXRhIiwic2Nyb2xsQ29udGFpbmVyUmVmIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImN1cnJlbnQiLCJjb250YWluZXIiLCJzIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJwYWdlcyIsInN0eWxlIiwidG9wIiwibGVmdCIsInJlZiIsIm9mZnNldCIsInNjcm9sbFNwZWVkIiwic3BlZWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});