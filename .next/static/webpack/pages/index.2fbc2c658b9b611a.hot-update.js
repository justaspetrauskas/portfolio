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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_slices_profileSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/slices/profileSlice */ \"./redux/slices/profileSlice.ts\");\n/* harmony import */ var _components_HeaderComponent_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HeaderComponent/Header */ \"./components/HeaderComponent/Header.tsx\");\n/* harmony import */ var _sections_Hello_Section_HelloSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/Hello.Section/HelloSection */ \"./sections/Hello.Section/HelloSection.tsx\");\n/* harmony import */ var _react_spring_parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-spring/parallax */ \"./node_modules/@react-spring/parallax/dist/react-spring-parallax.esm.js\");\n/* harmony import */ var _components_ScrollableContainer_ScrollableContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ScrollableContainer/ScrollableContainer */ \"./components/ScrollableContainer/ScrollableContainer.tsx\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function(param) {\n    var profileData = param.profileData;\n    _s();\n    var scrollContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(profileData);\n        dispatch((0,_redux_slices_profileSlice__WEBPACK_IMPORTED_MODULE_4__.setProfileData)(profileData));\n    }, [\n        profileData\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        var handleScroll = function() {\n            if (window.innerWidth > 768) {\n                // scrollValue > window.scrollY ? setIsHidden(false) : setIsHidden(true);\n                // setScrollValue(window.scrollY);\n                console.log(window.scrollY);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return function() {\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(scrollContainerRef.current.scrolY);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-screen flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Justas: Front-end developer\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeaderComponent_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"fixed top-0 left-0 w-full h-screen\",\n                ref: scrollContainerRef,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_7__.Parallax, {\n                    pages: 4,\n                    style: {\n                        top: \"0\",\n                        left: \"0\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ScrollableContainer_ScrollableContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            offset: 0,\n                            scrollSpeed: 2.5,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_Hello_Section_HelloSection__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_7__.ParallaxLayer, {\n                            offset: 1,\n                            speed: 2,\n                            style: {\n                                backgroundColor: \"#ff6d6d\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_7__.ParallaxLayer, {\n                            offset: 1,\n                            speed: 0.5,\n                            style: {\n                                display: \"flex\",\n                                justifyContent: \"center\",\n                                alignItems: \"center\",\n                                color: \"white\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Scroll up\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"jrfDEqoaTZHQtxE2BTfCwVj8alc=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBc0dWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tIFwiLi4vY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBmZXRjaFByb2ZpbGUsIHNldFByb2ZpbGVEYXRhIH0gZnJvbSBcIi4uL3JlZHV4L3NsaWNlcy9wcm9maWxlU2xpY2VcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyQ29tcG9uZW50L0hlYWRlclwiO1xuaW1wb3J0IEhlbGxvU2VjdGlvbiBmcm9tIFwiLi4vc2VjdGlvbnMvSGVsbG8uU2VjdGlvbi9IZWxsb1NlY3Rpb25cIjtcbmltcG9ydCBBYm91dFNlY3Rpb24gZnJvbSBcIi4uL3NlY3Rpb25zL0Fib3V0TWUuU2VjdGlvbi9BYm91dFNlY3Rpb25cIjtcbmltcG9ydCBDb250YWN0U2VjdGlvbiBmcm9tIFwiLi4vc2VjdGlvbnMvQ29udGFjdC5TZWN0aW9uL0NvbnRhY3QuU2VjdGlvblwiO1xuXG5pbXBvcnQgeyBQYXJhbGxheCwgUGFyYWxsYXhMYXllciB9IGZyb20gXCJAcmVhY3Qtc3ByaW5nL3BhcmFsbGF4XCI7XG5pbXBvcnQgU2Nyb2xsYWJsZUNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9TY3JvbGxhYmxlQ29udGFpbmVyL1Njcm9sbGFibGVDb250YWluZXJcIjtcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIHByb2ZpbGVEYXRhOiBhbnk7XG59XG5jb25zdCBIb21lID0gKHsgcHJvZmlsZURhdGEgfTogSG9tZVByb3BzKSA9PiB7XG4gIGNvbnN0IHNjcm9sbENvbnRhaW5lclJlZiA9IHVzZVJlZjxhbnk+KG51bGwpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhwcm9maWxlRGF0YSk7XG4gICAgZGlzcGF0Y2goc2V0UHJvZmlsZURhdGEocHJvZmlsZURhdGEpKTtcbiAgfSwgW3Byb2ZpbGVEYXRhXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjgpIHtcbiAgICAgICAgLy8gc2Nyb2xsVmFsdWUgPiB3aW5kb3cuc2Nyb2xsWSA/IHNldElzSGlkZGVuKGZhbHNlKSA6IHNldElzSGlkZGVuKHRydWUpO1xuICAgICAgICAvLyBzZXRTY3JvbGxWYWx1ZSh3aW5kb3cuc2Nyb2xsWSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5zY3JvbGxZKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50LnNjcm9sWSk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SnVzdGFzOiBGcm9udC1lbmQgZGV2ZWxvcGVyPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPG1haW5cbiAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCBoLXNjcmVlblwiXG4gICAgICAgIHJlZj17c2Nyb2xsQ29udGFpbmVyUmVmfVxuICAgICAgPlxuICAgICAgICA8UGFyYWxsYXggcGFnZXM9ezR9IHN0eWxlPXt7IHRvcDogXCIwXCIsIGxlZnQ6IFwiMFwiIH19PlxuICAgICAgICAgIDxTY3JvbGxhYmxlQ29udGFpbmVyIG9mZnNldD17MH0gc2Nyb2xsU3BlZWQ9ezIuNX0+XG4gICAgICAgICAgICA8SGVsbG9TZWN0aW9uIC8+XG4gICAgICAgICAgPC9TY3JvbGxhYmxlQ29udGFpbmVyPlxuXG4gICAgICAgICAgPFBhcmFsbGF4TGF5ZXJcbiAgICAgICAgICAgIG9mZnNldD17MX1cbiAgICAgICAgICAgIHNwZWVkPXsyfVxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmZjZkNmRcIiB9fVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8UGFyYWxsYXhMYXllclxuICAgICAgICAgICAgb2Zmc2V0PXsxfVxuICAgICAgICAgICAgc3BlZWQ9ezAuNX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHA+U2Nyb2xsIHVwPC9wPlxuICAgICAgICAgIDwvUGFyYWxsYXhMYXllcj5cbiAgICAgICAgPC9QYXJhbGxheD5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgey8qIDxmb290ZXIgY2xhc3NOYW1lPVwiZmxleCBoLTI0IHctZnVsbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYm9yZGVyLXRcIj5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtMlwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7XCIgXCJ9XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiB3aWR0aD17NzJ9IGhlaWdodD17MTZ9IC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPiAqL31cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgcGFyYW1zID0geyBwcm9maWxlSWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9GSUxFSUQgfTtcblxuICBjb25zdCBxdWVyeSA9IGdyb3FgKltfdHlwZSA9PSBcInByb2ZpbGVcIiAmJiBfaWQgPT0gJHByb2ZpbGVJZF17XG4gICAgXCJoZWxsb1wiOmdyZWV0aW5nLGZpcnN0TmFtZSxsYXN0TmFtZSxjdXJyZW50TG9jYXRpb24sc29jaWFsTGlua3MsXG4gICAgXCJwcm9maWxlSW1hZ2VVUkxcIjpwcm9maWxlSW1hZ2UuYXNzZXQtPnVybCxcbiAgICBcImN2VVJMXCI6Y3YuYXNzZXQtPnVybCxlZHVjYXRpb25bXS0+e3RpdGxlLGRlc2NyaXB0aW9uLHVuaXZlcnNpdHl9LFxuICAgIGV4cGVyaWVuY2VbXS0+e2pvYlRpdGxlLGNvbXBhbnksZGVzY3JpcHRpb24sc3RhcnREYXRlLGVuZERhdGUsdGFnW10tPntza2lsbFRpdGxlfX0sXG4gICAgZWR1Y2F0aW9uW10tPnt0aXRsZSxkZXNjcmlwdGlvbix1bml2ZXJzaXR5LHN0YXJ0RGF0ZSxlbmREYXRlfSxcbiAgICBcImFib3V0TWVcIjphYm91dE1lLFxuICAgIHNraWxsc1tdLT57X2lkLHNraWxsVGl0bGUsc2tpbGxJY29uLGNhdGVnb3J5LHNraWxsSWNvbntzZWN1cmVfdXJsfX19YDtcbiAgY29uc3QgcHJvZmlsZURhdGEgPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2gocXVlcnksIHBhcmFtcyk7XG5cbiAgY29uc29sZS5sb2cocHJvZmlsZURhdGEpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHByb2ZpbGVEYXRhLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwibmFtZXMiOlsiSGVhZCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZURpc3BhdGNoIiwic2V0UHJvZmlsZURhdGEiLCJIZWFkZXIiLCJIZWxsb1NlY3Rpb24iLCJQYXJhbGxheCIsIlBhcmFsbGF4TGF5ZXIiLCJTY3JvbGxhYmxlQ29udGFpbmVyIiwiSG9tZSIsInByb2ZpbGVEYXRhIiwic2Nyb2xsQ29udGFpbmVyUmVmIiwiZGlzcGF0Y2giLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU2Nyb2xsIiwid2luZG93IiwiaW5uZXJXaWR0aCIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImN1cnJlbnQiLCJzY3JvbFkiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsInJlZiIsInBhZ2VzIiwic3R5bGUiLCJ0b3AiLCJsZWZ0Iiwib2Zmc2V0Iiwic2Nyb2xsU3BlZWQiLCJzcGVlZCIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJjb2xvciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});