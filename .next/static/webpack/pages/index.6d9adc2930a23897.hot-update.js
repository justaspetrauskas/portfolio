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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_slices_profileSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/slices/profileSlice */ \"./redux/slices/profileSlice.ts\");\n/* harmony import */ var _components_HeaderComponent_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HeaderComponent/Header */ \"./components/HeaderComponent/Header.tsx\");\n/* harmony import */ var _sections_Hello_Section_HelloSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/Hello.Section/HelloSection */ \"./sections/Hello.Section/HelloSection.tsx\");\n/* harmony import */ var _react_spring_parallax__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-spring/parallax */ \"./node_modules/@react-spring/parallax/dist/react-spring-parallax.esm.js\");\n/* harmony import */ var _components_ScrollableContainer_ScrollableContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ScrollableContainer/ScrollableContainer */ \"./components/ScrollableContainer/ScrollableContainer.tsx\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/dist/react-spring.esm.js\");\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function(param) {\n    var profileData = param.profileData;\n    _s();\n    var scrollContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_10__[\"default\"])((0,react_spring__WEBPACK_IMPORTED_MODULE_9__.useSpring)(function() {\n        return {\n            offset: 0\n        };\n    }), 2), offset = ref[0].offset, set = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        dispatch((0,_redux_slices_profileSlice__WEBPACK_IMPORTED_MODULE_4__.setProfileData)(profileData));\n    }, [\n        profileData\n    ]);\n    // useEffect(() => {\n    //   const posY = scrollContainerRef.current!.getBoundingClientRect().top;\n    //   console.log(\"posty\", posY);\n    // }, [scrollContainerRef]);\n    // const handleScroll = () => {\n    //   const posY = scrollContainerRef.current.getBoundingClientRect().top;\n    //   console.log(scrollContainerRef.current);\n    //   const offset = window.pageYOffset - posY;\n    //   console.log({ offset });\n    //   set({ offset });\n    // };\n    // useEffect(() => {\n    //   scrollContainerRef.current.container.addEventListener(\n    //     \"scroll\",\n    //     handleScroll\n    //   );\n    //   return () => {\n    //     scrollContainerRef.current.container.removeEventListener(\n    //       \"scroll\",\n    //       handleScroll\n    //     );\n    //   };\n    // });\n    // useEffect(() => {\n    //   if (scrollContainerRef.current) {\n    //     console.log(\n    //       scrollContainerRef.current.content.current.getBoundingClientRect().top\n    //     );\n    //   }\n    // }, [scrollContainerRef]);\n    var handleScroll = function() {\n        // const posY = scrollContainerRef.current.getBoundingClientRect().top;\n        console.log(scrollContainerRef.current);\n    };\n    // useEffect(() => {\n    //   console.log(scrollContainerRef.current.getBoundingClientRect().top);\n    // });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Justas: Front-end developer\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeaderComponent_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"fixed top-0 left-0 w-full h-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_7__.Parallax, {\n                    pages: 3,\n                    style: {\n                        top: \"0\",\n                        left: \"0\"\n                    },\n                    ref: scrollContainerRef,\n                    onScroll: handleScroll,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ScrollableContainer_ScrollableContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                            offset: 0,\n                            scrollSpeed: 2.5,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_Hello_Section_HelloSection__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_spring_parallax__WEBPACK_IMPORTED_MODULE_7__.ParallaxLayer, {\n                            offset: 1,\n                            speed: 0.5,\n                            style: {\n                                display: \"flex\",\n                                justifyContent: \"center\",\n                                alignItems: \"center\",\n                                color: \"white\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Scroll up\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                                lineNumber: 110,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n        lineNumber: 77,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"gtqJOHuEwxa7d9qCBuKrNpNt1dI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_spring__WEBPACK_IMPORTED_MODULE_9__.useSpring\n    ];\n});\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TjtDQUNIO0dBM0dLN0IsSUFBSTs7UUFFU1Isb0RBQVc7UUFFRk8sbURBQVM7OztBQUovQkMsS0FBQUEsSUFBSTs7QUFtSVYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gXCIuLi9jbGllbnRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IGZldGNoUHJvZmlsZSwgc2V0UHJvZmlsZURhdGEgfSBmcm9tIFwiLi4vcmVkdXgvc2xpY2VzL3Byb2ZpbGVTbGljZVwiO1xuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJDb21wb25lbnQvSGVhZGVyXCI7XG5pbXBvcnQgSGVsbG9TZWN0aW9uIGZyb20gXCIuLi9zZWN0aW9ucy9IZWxsby5TZWN0aW9uL0hlbGxvU2VjdGlvblwiO1xuaW1wb3J0IEFib3V0U2VjdGlvbiBmcm9tIFwiLi4vc2VjdGlvbnMvQWJvdXRNZS5TZWN0aW9uL0Fib3V0U2VjdGlvblwiO1xuaW1wb3J0IENvbnRhY3RTZWN0aW9uIGZyb20gXCIuLi9zZWN0aW9ucy9Db250YWN0LlNlY3Rpb24vQ29udGFjdC5TZWN0aW9uXCI7XG5cbmltcG9ydCB7IFBhcmFsbGF4LCBQYXJhbGxheExheWVyIH0gZnJvbSBcIkByZWFjdC1zcHJpbmcvcGFyYWxsYXhcIjtcbmltcG9ydCBTY3JvbGxhYmxlQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1Njcm9sbGFibGVDb250YWluZXIvU2Nyb2xsYWJsZUNvbnRhaW5lclwiO1xuXG5pbXBvcnQgeyBhbmltYXRlZCwgdXNlU3ByaW5nIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xuXG5pbnRlcmZhY2UgSG9tZVByb3BzIHtcbiAgcHJvZmlsZURhdGE6IGFueTtcbn1cbmNvbnN0IEhvbWUgPSAoeyBwcm9maWxlRGF0YSB9OiBIb21lUHJvcHMpID0+IHtcbiAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyUmVmID0gdXNlUmVmPGFueT4obnVsbCk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBbeyBvZmZzZXQgfSwgc2V0XSA9IHVzZVNwcmluZygoKSA9PiAoeyBvZmZzZXQ6IDAgfSkpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0UHJvZmlsZURhdGEocHJvZmlsZURhdGEpKTtcbiAgfSwgW3Byb2ZpbGVEYXRhXSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBjb25zdCBwb3NZID0gc2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQhLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgLy8gICBjb25zb2xlLmxvZyhcInBvc3R5XCIsIHBvc1kpO1xuICAvLyB9LCBbc2Nyb2xsQ29udGFpbmVyUmVmXSk7XG5cbiAgLy8gY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAvLyAgIGNvbnN0IHBvc1kgPSBzY3JvbGxDb250YWluZXJSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG5cbiAgLy8gICBjb25zb2xlLmxvZyhzY3JvbGxDb250YWluZXJSZWYuY3VycmVudCk7XG4gIC8vICAgY29uc3Qgb2Zmc2V0ID0gd2luZG93LnBhZ2VZT2Zmc2V0IC0gcG9zWTtcbiAgLy8gICBjb25zb2xlLmxvZyh7IG9mZnNldCB9KTtcbiAgLy8gICBzZXQoeyBvZmZzZXQgfSk7XG4gIC8vIH07XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBzY3JvbGxDb250YWluZXJSZWYuY3VycmVudC5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgLy8gICAgIFwic2Nyb2xsXCIsXG4gIC8vICAgICBoYW5kbGVTY3JvbGxcbiAgLy8gICApO1xuXG4gIC8vICAgcmV0dXJuICgpID0+IHtcbiAgLy8gICAgIHNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50LmNvbnRhaW5lci5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAvLyAgICAgICBcInNjcm9sbFwiLFxuICAvLyAgICAgICBoYW5kbGVTY3JvbGxcbiAgLy8gICAgICk7XG4gIC8vICAgfTtcbiAgLy8gfSk7XG5cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAoc2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQpIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKFxuICAvLyAgICAgICBzY3JvbGxDb250YWluZXJSZWYuY3VycmVudC5jb250ZW50LmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG4gIC8vICAgICApO1xuICAvLyAgIH1cbiAgLy8gfSwgW3Njcm9sbENvbnRhaW5lclJlZl0pO1xuXG4gIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAvLyBjb25zdCBwb3NZID0gc2Nyb2xsQ29udGFpbmVyUmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIGNvbnNvbGUubG9nKHNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50KTtcbiAgfTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKHNjcm9sbENvbnRhaW5lclJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCk7XG4gIC8vIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SnVzdGFzOiBGcm9udC1lbmQgZGV2ZWxvcGVyPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgbGVmdC0wIHctZnVsbCBoLXNjcmVlblwiPlxuICAgICAgICA8UGFyYWxsYXhcbiAgICAgICAgICBwYWdlcz17M31cbiAgICAgICAgICBzdHlsZT17eyB0b3A6IFwiMFwiLCBsZWZ0OiBcIjBcIiB9fVxuICAgICAgICAgIHJlZj17c2Nyb2xsQ29udGFpbmVyUmVmfVxuICAgICAgICAgIG9uU2Nyb2xsPXtoYW5kbGVTY3JvbGx9XG4gICAgICAgID5cbiAgICAgICAgICA8U2Nyb2xsYWJsZUNvbnRhaW5lciBvZmZzZXQ9ezB9IHNjcm9sbFNwZWVkPXsyLjV9PlxuICAgICAgICAgICAgPEhlbGxvU2VjdGlvbiAvPlxuICAgICAgICAgIDwvU2Nyb2xsYWJsZUNvbnRhaW5lcj5cblxuICAgICAgICAgIHsvKiA8UGFyYWxsYXhMYXllclxuICAgICAgICAgICAgb2Zmc2V0PXsxfVxuICAgICAgICAgICAgc3BlZWQ9ezEuNX1cbiAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjZmY2ZDZkXCIgfX1cbiAgICAgICAgICAvPiAqL31cblxuICAgICAgICAgIDxQYXJhbGxheExheWVyXG4gICAgICAgICAgICBvZmZzZXQ9ezF9XG4gICAgICAgICAgICBzcGVlZD17MC41fVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICBjb2xvcjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cD5TY3JvbGwgdXA8L3A+XG4gICAgICAgICAgPC9QYXJhbGxheExheWVyPlxuICAgICAgICA8L1BhcmFsbGF4PlxuICAgICAgPC9tYWluPlxuXG4gICAgICB7LyogPGZvb3RlciBjbGFzc05hbWU9XCJmbGV4IGgtMjQgdy1mdWxsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXItdFwiPlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC0yXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgUG93ZXJlZCBieXtcIiBcIn1cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIHdpZHRoPXs3Mn0gaGVpZ2h0PXsxNn0gLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+ICovfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCBwYXJhbXMgPSB7IHByb2ZpbGVJZDogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0FOSVRZX1BST0ZJTEVJRCB9O1xuXG4gIGNvbnN0IHF1ZXJ5ID0gZ3JvcWAqW190eXBlID09IFwicHJvZmlsZVwiICYmIF9pZCA9PSAkcHJvZmlsZUlkXXtcbiAgICBcImhlbGxvXCI6Z3JlZXRpbmcsZmlyc3ROYW1lLGxhc3ROYW1lLGN1cnJlbnRMb2NhdGlvbixzb2NpYWxMaW5rcyxcbiAgICBcInByb2ZpbGVJbWFnZVVSTFwiOnByb2ZpbGVJbWFnZS5hc3NldC0+dXJsLFxuICAgIFwiY3ZVUkxcIjpjdi5hc3NldC0+dXJsLGVkdWNhdGlvbltdLT57dGl0bGUsZGVzY3JpcHRpb24sdW5pdmVyc2l0eX0sXG4gICAgZXhwZXJpZW5jZVtdLT57am9iVGl0bGUsY29tcGFueSxkZXNjcmlwdGlvbixzdGFydERhdGUsZW5kRGF0ZSx0YWdbXS0+e3NraWxsVGl0bGV9fSxcbiAgICBlZHVjYXRpb25bXS0+e3RpdGxlLGRlc2NyaXB0aW9uLHVuaXZlcnNpdHksc3RhcnREYXRlLGVuZERhdGV9LFxuICAgIFwiYWJvdXRNZVwiOmFib3V0TWUsXG4gICAgc2tpbGxzW10tPntfaWQsc2tpbGxUaXRsZSxza2lsbEljb24sY2F0ZWdvcnksc2tpbGxJY29ue3NlY3VyZV91cmx9fX1gO1xuICBjb25zdCBwcm9maWxlRGF0YSA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChxdWVyeSwgcGFyYW1zKTtcblxuICBjb25zb2xlLmxvZyhwcm9maWxlRGF0YSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvZmlsZURhdGEsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdLCJuYW1lcyI6WyJIZWFkIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlRGlzcGF0Y2giLCJzZXRQcm9maWxlRGF0YSIsIkhlYWRlciIsIkhlbGxvU2VjdGlvbiIsIlBhcmFsbGF4IiwiUGFyYWxsYXhMYXllciIsIlNjcm9sbGFibGVDb250YWluZXIiLCJ1c2VTcHJpbmciLCJIb21lIiwicHJvZmlsZURhdGEiLCJzY3JvbGxDb250YWluZXJSZWYiLCJkaXNwYXRjaCIsIm9mZnNldCIsInNldCIsImhhbmRsZVNjcm9sbCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50IiwiZGl2IiwidGl0bGUiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJwYWdlcyIsInN0eWxlIiwidG9wIiwibGVmdCIsInJlZiIsIm9uU2Nyb2xsIiwic2Nyb2xsU3BlZWQiLCJzcGVlZCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJjb2xvciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});