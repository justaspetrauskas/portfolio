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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_slices_profileSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/slices/profileSlice */ \"./redux/slices/profileSlice.ts\");\n/* harmony import */ var _components_HeaderComponent_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HeaderComponent/Header */ \"./components/HeaderComponent/Header.tsx\");\n/* harmony import */ var _sections_Hello_Section_HelloSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/Hello.Section/HelloSection */ \"./sections/Hello.Section/HelloSection.tsx\");\n/* harmony import */ var _react_spring_parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-spring/parallax */ \"./node_modules/@react-spring/parallax/dist/react-spring-parallax.esm.js\");\n/* harmony import */ var _components_ScrollableContainer_ScrollableContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ScrollableContainer/ScrollableContainer */ \"./components/ScrollableContainer/ScrollableContainer.tsx\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/dist/react-spring.esm.js\");\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function(param) {\n    var profileData = param.profileData;\n    _s();\n    var scrollContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,react_spring__WEBPACK_IMPORTED_MODULE_9__.useSpring)(function() {\n        return {\n            offset: 0\n        };\n    }), 2), offset = ref[0].offset, set = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        dispatch((0,_redux_slices_profileSlice__WEBPACK_IMPORTED_MODULE_4__.setProfileData)(profileData));\n    }, [\n        profileData\n    ]);\n    // useEffect(() => {\n    //   const posY = scrollContainerRef.current!.getBoundingClientRect().top;\n    //   console.log(\"posty\", posY);\n    // }, [scrollContainerRef]);\n    var handleScroll = function() {\n        var posY = scrollContainerRef.current.getBoundingClientRect().top;\n        console.log(scrollContainerRef.current);\n        var offset = window.pageYOffset - posY;\n        console.log({\n            offset: offset\n        });\n        set({\n            offset: offset\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        window.addEventListener(\"scroll\", handleScroll);\n        return function() {\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (scrollContainerRef.current) {\n            console.log(scrollContainerRef.current.content.current.getBoundingClientRect().top);\n        }\n    }, [\n        scrollContainerRef\n    ]);\n    // useEffect(() => {\n    //   console.log(scrollContainerRef.current.getBoundingClientRect().top);\n    // });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Justas: Front-end developer\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeaderComponent_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"fixed top-0 left-0 w-full h-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_7__.Parallax, {\n                    pages: 3,\n                    style: {\n                        top: \"0\",\n                        left: \"0\"\n                    },\n                    ref: scrollContainerRef,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ScrollableContainer_ScrollableContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            offset: 0,\n                            scrollSpeed: 2.5,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_Hello_Section_HelloSection__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_7__.ParallaxLayer, {\n                            offset: 1,\n                            speed: 0.5,\n                            style: {\n                                display: \"flex\",\n                                justifyContent: \"center\",\n                                alignItems: \"center\",\n                                color: \"white\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Scroll up\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                    lineNumber: 72,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"c24xcUBhmEscDXrQnrJleBuSH4Q=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_spring__WEBPACK_IMPORTED_MODULE_9__.useSpring\n    ];\n});\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O2lDQUNJO3NDQVF0Qiw4REFBQ0UsaUVBQWE7NEJBQ1pPLE1BQU0sRUFBRSxDQUFDOzRCQUNUMEIsS0FBSyxFQUFFLEdBQUc7NEJBQ1ZKLEtBQUssRUFBRTtnQ0FDTEssT0FBTyxFQUFFLE1BQU07Z0NBQ2ZDLGNBQWMsRUFBRSxRQUFRO2dDQUN4QkMsVUFBVSxFQUFFLFFBQVE7Z0NBQ3BCQyxLQUFLLEVBQUUsT0FBTzs2QkFDZjtzQ0FFRCw0RUFBQ0MsR0FBQzswQ0FBQyxXQUFTOzs7OztxQ0FBSTs7Ozs7aUNBQ0Y7Ozs7Ozt5QkFDUDs7Ozs7cUJBQ047Ozs7OzthQWFILENBQ047Q0FDSDtHQTlGS25DLElBQUk7O1FBRVNSLG9EQUFXO1FBRUZPLG1EQUFTOzs7QUFKL0JDLEtBQUFBLElBQUk7O0FBc0hWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdyb3EgZnJvbSBcImdyb3FcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHNhbml0eUNsaWVudCBmcm9tIFwiLi4vY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBmZXRjaFByb2ZpbGUsIHNldFByb2ZpbGVEYXRhIH0gZnJvbSBcIi4uL3JlZHV4L3NsaWNlcy9wcm9maWxlU2xpY2VcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyQ29tcG9uZW50L0hlYWRlclwiO1xuaW1wb3J0IEhlbGxvU2VjdGlvbiBmcm9tIFwiLi4vc2VjdGlvbnMvSGVsbG8uU2VjdGlvbi9IZWxsb1NlY3Rpb25cIjtcbmltcG9ydCBBYm91dFNlY3Rpb24gZnJvbSBcIi4uL3NlY3Rpb25zL0Fib3V0TWUuU2VjdGlvbi9BYm91dFNlY3Rpb25cIjtcbmltcG9ydCBDb250YWN0U2VjdGlvbiBmcm9tIFwiLi4vc2VjdGlvbnMvQ29udGFjdC5TZWN0aW9uL0NvbnRhY3QuU2VjdGlvblwiO1xuXG5pbXBvcnQgeyBQYXJhbGxheCwgUGFyYWxsYXhMYXllciB9IGZyb20gXCJAcmVhY3Qtc3ByaW5nL3BhcmFsbGF4XCI7XG5pbXBvcnQgU2Nyb2xsYWJsZUNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9TY3JvbGxhYmxlQ29udGFpbmVyL1Njcm9sbGFibGVDb250YWluZXJcIjtcblxuaW1wb3J0IHsgYW5pbWF0ZWQsIHVzZVNwcmluZyB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIjtcblxuaW50ZXJmYWNlIEhvbWVQcm9wcyB7XG4gIHByb2ZpbGVEYXRhOiBhbnk7XG59XG5jb25zdCBIb21lID0gKHsgcHJvZmlsZURhdGEgfTogSG9tZVByb3BzKSA9PiB7XG4gIGNvbnN0IHNjcm9sbENvbnRhaW5lclJlZiA9IHVzZVJlZjxhbnk+KG51bGwpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3QgW3sgb2Zmc2V0IH0sIHNldF0gPSB1c2VTcHJpbmcoKCkgPT4gKHsgb2Zmc2V0OiAwIH0pKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldFByb2ZpbGVEYXRhKHByb2ZpbGVEYXRhKSk7XG4gIH0sIFtwcm9maWxlRGF0YV0pO1xuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgY29uc3QgcG9zWSA9IHNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50IS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gIC8vICAgY29uc29sZS5sb2coXCJwb3N0eVwiLCBwb3NZKTtcbiAgLy8gfSwgW3Njcm9sbENvbnRhaW5lclJlZl0pO1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICBjb25zdCBwb3NZID0gc2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIGNvbnNvbGUubG9nKHNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50KTtcbiAgICBjb25zdCBvZmZzZXQgPSB3aW5kb3cucGFnZVlPZmZzZXQgLSBwb3NZO1xuICAgIGNvbnNvbGUubG9nKHsgb2Zmc2V0IH0pO1xuICAgIHNldCh7IG9mZnNldCB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcbiAgICB9O1xuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzY3JvbGxDb250YWluZXJSZWYuY3VycmVudCkge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIHNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50LmNvbnRlbnQuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcbiAgICAgICk7XG4gICAgfVxuICB9LCBbc2Nyb2xsQ29udGFpbmVyUmVmXSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhzY3JvbGxDb250YWluZXJSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xuICAvLyB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkp1c3RhczogRnJvbnQtZW5kIGRldmVsb3BlcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZpeGVkIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1zY3JlZW5cIj5cbiAgICAgICAgPFBhcmFsbGF4XG4gICAgICAgICAgcGFnZXM9ezN9XG4gICAgICAgICAgc3R5bGU9e3sgdG9wOiBcIjBcIiwgbGVmdDogXCIwXCIgfX1cbiAgICAgICAgICByZWY9e3Njcm9sbENvbnRhaW5lclJlZn1cbiAgICAgICAgPlxuICAgICAgICAgIDxTY3JvbGxhYmxlQ29udGFpbmVyIG9mZnNldD17MH0gc2Nyb2xsU3BlZWQ9ezIuNX0+XG4gICAgICAgICAgICA8SGVsbG9TZWN0aW9uIC8+XG4gICAgICAgICAgPC9TY3JvbGxhYmxlQ29udGFpbmVyPlxuXG4gICAgICAgICAgey8qIDxQYXJhbGxheExheWVyXG4gICAgICAgICAgICBvZmZzZXQ9ezF9XG4gICAgICAgICAgICBzcGVlZD17MS41fVxuICAgICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBcIiNmZjZkNmRcIiB9fVxuICAgICAgICAgIC8+ICovfVxuXG4gICAgICAgICAgPFBhcmFsbGF4TGF5ZXJcbiAgICAgICAgICAgIG9mZnNldD17MX1cbiAgICAgICAgICAgIHNwZWVkPXswLjV9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwPlNjcm9sbCB1cDwvcD5cbiAgICAgICAgICA8L1BhcmFsbGF4TGF5ZXI+XG4gICAgICAgIDwvUGFyYWxsYXg+XG4gICAgICA8L21haW4+XG5cbiAgICAgIHsvKiA8Zm9vdGVyIGNsYXNzTmFtZT1cImZsZXggaC0yNCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJvcmRlci10XCI+XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTJcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5e1wiIFwifVxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgd2lkdGg9ezcyfSBoZWlnaHQ9ezE2fSAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHBhcmFtcyA9IHsgcHJvZmlsZUlkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfUFJPRklMRUlEIH07XG5cbiAgY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwcm9maWxlXCIgJiYgX2lkID09ICRwcm9maWxlSWRde1xuICAgIFwiaGVsbG9cIjpncmVldGluZyxmaXJzdE5hbWUsbGFzdE5hbWUsY3VycmVudExvY2F0aW9uLHNvY2lhbExpbmtzLFxuICAgIFwicHJvZmlsZUltYWdlVVJMXCI6cHJvZmlsZUltYWdlLmFzc2V0LT51cmwsXG4gICAgXCJjdlVSTFwiOmN2LmFzc2V0LT51cmwsZWR1Y2F0aW9uW10tPnt0aXRsZSxkZXNjcmlwdGlvbix1bml2ZXJzaXR5fSxcbiAgICBleHBlcmllbmNlW10tPntqb2JUaXRsZSxjb21wYW55LGRlc2NyaXB0aW9uLHN0YXJ0RGF0ZSxlbmREYXRlLHRhZ1tdLT57c2tpbGxUaXRsZX19LFxuICAgIGVkdWNhdGlvbltdLT57dGl0bGUsZGVzY3JpcHRpb24sdW5pdmVyc2l0eSxzdGFydERhdGUsZW5kRGF0ZX0sXG4gICAgXCJhYm91dE1lXCI6YWJvdXRNZSxcbiAgICBza2lsbHNbXS0+e19pZCxza2lsbFRpdGxlLHNraWxsSWNvbixjYXRlZ29yeSxza2lsbEljb257c2VjdXJlX3VybH19fWA7XG4gIGNvbnN0IHByb2ZpbGVEYXRhID0gYXdhaXQgc2FuaXR5Q2xpZW50LmZldGNoKHF1ZXJ5LCBwYXJhbXMpO1xuXG4gIGNvbnNvbGUubG9nKHByb2ZpbGVEYXRhKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9maWxlRGF0YSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VEaXNwYXRjaCIsInNldFByb2ZpbGVEYXRhIiwiSGVhZGVyIiwiSGVsbG9TZWN0aW9uIiwiUGFyYWxsYXgiLCJQYXJhbGxheExheWVyIiwiU2Nyb2xsYWJsZUNvbnRhaW5lciIsInVzZVNwcmluZyIsIkhvbWUiLCJwcm9maWxlRGF0YSIsInNjcm9sbENvbnRhaW5lclJlZiIsImRpc3BhdGNoIiwib2Zmc2V0Iiwic2V0IiwiaGFuZGxlU2Nyb2xsIiwicG9zWSIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJjb25zb2xlIiwibG9nIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnRlbnQiLCJkaXYiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSIsInBhZ2VzIiwic3R5bGUiLCJsZWZ0IiwicmVmIiwic2Nyb2xsU3BlZWQiLCJzcGVlZCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJjb2xvciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});