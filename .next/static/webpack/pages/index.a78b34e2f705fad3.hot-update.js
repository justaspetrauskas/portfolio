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

/***/ "./components/ScrollableContainer/ScrollableContainer.tsx":
/*!****************************************************************!*\
  !*** ./components/ScrollableContainer/ScrollableContainer.tsx ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useWindowSize */ \"./hooks/useWindowSize.ts\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ScrollableContainer = function(param) {\n    var children = param.children;\n    _s();\n    var scrollContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var size = (0,_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    var scrollConfigs = {\n        ease: 0.1,\n        current: 0,\n        previous: 0,\n        rounded: 0\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (scrollContainer && scrollContainer.current) {\n            document.body.style.height = \"\".concat(scrollContainer.current.getBoundingClientRect().height, \"px\");\n        }\n    }, [\n        size.height\n    ]);\n    var smoothScrolling = function() {\n        scrollConfigs.current = window.scrollY;\n        scrollConfigs.previous += scrollConfigs.current - scrollConfigs.previous + scrollConfigs.ease;\n        scrollConfigs.rounded = Math.round(scrollConfigs.previous * 100) / 100;\n        var difference = scrollConfigs.current - scrollConfigs.rounded;\n        // to use for other effects\n        var acceleration = difference / size.width;\n        scrollContainer.current.style.transform = \"translate3d(0, -\".concat(scrollConfigs.rounded, \"px, 0)\");\n        //loop vai raf\n        requestAnimationFrame(function() {\n            return smoothScrolling();\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: scrollContainer,\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\components\\\\ScrollableContainer\\\\ScrollableContainer.tsx\",\n        lineNumber: 43,\n        columnNumber: 10\n    }, _this);\n};\n_s(ScrollableContainer, \"3kW3PZrw/ChtZnZNnjwgohtjcBI=\", false, function() {\n    return [\n        _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = ScrollableContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollableContainer);\nvar _c;\n$RefreshReg$(_c, \"ScrollableContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Njcm9sbGFibGVDb250YWluZXIvU2Nyb2xsYWJsZUNvbnRhaW5lci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQWlEO0FBRWU7O0FBTWhFLElBQU1JLG1CQUFtQixHQUFHLGdCQUE0QztRQUF6Q0MsUUFBUSxTQUFSQSxRQUFROztJQUNyQyxJQUFNQyxlQUFlLEdBQUdKLDZDQUFNLENBQXdCLElBQUksQ0FBQztJQUMzRCxJQUFNSyxJQUFJLEdBQVNKLGdFQUFhLEVBQUU7SUFFbEMsSUFBTUssYUFBYSxHQUFHO1FBQ3BCQyxJQUFJLEVBQUUsR0FBRztRQUNUQyxPQUFPLEVBQUUsQ0FBQztRQUNWQyxRQUFRLEVBQUUsQ0FBQztRQUNYQyxPQUFPLEVBQUUsQ0FBQztLQUNYO0lBRURYLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUlLLGVBQWUsSUFBSUEsZUFBZSxDQUFDSSxPQUFPLEVBQUU7WUFDOUNHLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUNDLE1BQU0sR0FBRyxFQUFDLENBRTdCLE1BQUUsQ0FERFYsZUFBZSxDQUFDSSxPQUFPLENBQUNPLHFCQUFxQixFQUFFLENBQUNELE1BQU0sRUFDdkQsSUFBRSxDQUFDLENBQUM7U0FDTjtLQUNGLEVBQUU7UUFBQ1QsSUFBSSxDQUFDUyxNQUFNO0tBQUMsQ0FBQyxDQUFDO0lBRWxCLElBQU1FLGVBQWUsR0FBRyxXQUFNO1FBQzVCVixhQUFhLENBQUNFLE9BQU8sR0FBR1MsTUFBTSxDQUFDQyxPQUFPLENBQUM7UUFDdkNaLGFBQWEsQ0FBQ0csUUFBUSxJQUNwQkgsYUFBYSxDQUFDRSxPQUFPLEdBQUdGLGFBQWEsQ0FBQ0csUUFBUSxHQUFHSCxhQUFhLENBQUNDLElBQUksQ0FBQztRQUN0RUQsYUFBYSxDQUFDSSxPQUFPLEdBQUdTLElBQUksQ0FBQ0MsS0FBSyxDQUFDZCxhQUFhLENBQUNHLFFBQVEsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFdkUsSUFBTVksVUFBVSxHQUFHZixhQUFhLENBQUNFLE9BQU8sR0FBR0YsYUFBYSxDQUFDSSxPQUFPO1FBQ2hFLDJCQUEyQjtRQUMzQixJQUFNWSxZQUFZLEdBQUdELFVBQVUsR0FBR2hCLElBQUksQ0FBQ2tCLEtBQUs7UUFFNUNuQixlQUFlLENBQUNJLE9BQU8sQ0FBRUssS0FBSyxDQUFDVyxTQUFTLEdBQUcsa0JBQWlCLENBQXdCLE1BQU0sQ0FBNUJsQixhQUFhLENBQUNJLE9BQU8sRUFBQyxRQUFNLENBQUMsQ0FBQztRQUM1RixjQUFjO1FBQ2RlLHFCQUFxQixDQUFDO21CQUFNVCxlQUFlLEVBQUU7U0FBQSxDQUFDLENBQUM7S0FDaEQ7SUFFRCxxQkFBTyw4REFBQ1UsS0FBRztRQUFDQyxHQUFHLEVBQUV2QixlQUFlO2tCQUFHRCxRQUFROzs7OzthQUFPLENBQUM7Q0FDcEQ7R0FuQ0tELG1CQUFtQjs7UUFFSkQsNERBQWE7OztBQUY1QkMsS0FBQUEsbUJBQW1CO0FBcUN6QiwrREFBZUEsbUJBQW1CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TY3JvbGxhYmxlQ29udGFpbmVyL1Njcm9sbGFibGVDb250YWluZXIudHN4PzEwNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFBhcmFsbGF4LCBQYXJhbGxheExheWVyIH0gZnJvbSBcIkByZWFjdC1zcHJpbmcvcGFyYWxsYXhcIjtcclxuaW1wb3J0IHVzZVdpbmRvd1NpemUsIHsgU2l6ZSB9IGZyb20gXCIuLi8uLi9ob29rcy91c2VXaW5kb3dTaXplXCI7XHJcblxyXG5pbnRlcmZhY2UgU2Nyb2xsYWJsZUNvbnRhaW5lclByb3BzIHtcclxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xyXG59XHJcblxyXG5jb25zdCBTY3JvbGxhYmxlQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfTogU2Nyb2xsYWJsZUNvbnRhaW5lclByb3BzKSA9PiB7XHJcbiAgY29uc3Qgc2Nyb2xsQ29udGFpbmVyID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50IHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3Qgc2l6ZTogU2l6ZSA9IHVzZVdpbmRvd1NpemUoKTtcclxuXHJcbiAgY29uc3Qgc2Nyb2xsQ29uZmlncyA9IHtcclxuICAgIGVhc2U6IDAuMSxcclxuICAgIGN1cnJlbnQ6IDAsXHJcbiAgICBwcmV2aW91czogMCxcclxuICAgIHJvdW5kZWQ6IDAsXHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChzY3JvbGxDb250YWluZXIgJiYgc2Nyb2xsQ29udGFpbmVyLmN1cnJlbnQpIHtcclxuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5oZWlnaHQgPSBgJHtcclxuICAgICAgICBzY3JvbGxDb250YWluZXIuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcclxuICAgICAgfXB4YDtcclxuICAgIH1cclxuICB9LCBbc2l6ZS5oZWlnaHRdKTtcclxuXHJcbiAgY29uc3Qgc21vb3RoU2Nyb2xsaW5nID0gKCkgPT4ge1xyXG4gICAgc2Nyb2xsQ29uZmlncy5jdXJyZW50ID0gd2luZG93LnNjcm9sbFk7XHJcbiAgICBzY3JvbGxDb25maWdzLnByZXZpb3VzICs9XHJcbiAgICAgIHNjcm9sbENvbmZpZ3MuY3VycmVudCAtIHNjcm9sbENvbmZpZ3MucHJldmlvdXMgKyBzY3JvbGxDb25maWdzLmVhc2U7XHJcbiAgICBzY3JvbGxDb25maWdzLnJvdW5kZWQgPSBNYXRoLnJvdW5kKHNjcm9sbENvbmZpZ3MucHJldmlvdXMgKiAxMDApIC8gMTAwO1xyXG5cclxuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBzY3JvbGxDb25maWdzLmN1cnJlbnQgLSBzY3JvbGxDb25maWdzLnJvdW5kZWQ7XHJcbiAgICAvLyB0byB1c2UgZm9yIG90aGVyIGVmZmVjdHNcclxuICAgIGNvbnN0IGFjY2VsZXJhdGlvbiA9IGRpZmZlcmVuY2UgLyBzaXplLndpZHRoITtcclxuXHJcbiAgICBzY3JvbGxDb250YWluZXIuY3VycmVudCEuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDAsIC0ke3Njcm9sbENvbmZpZ3Mucm91bmRlZH1weCwgMClgO1xyXG4gICAgLy9sb29wIHZhaSByYWZcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBzbW9vdGhTY3JvbGxpbmcoKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIDxkaXYgcmVmPXtzY3JvbGxDb250YWluZXJ9PntjaGlsZHJlbn08L2Rpdj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxhYmxlQ29udGFpbmVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VXaW5kb3dTaXplIiwiU2Nyb2xsYWJsZUNvbnRhaW5lciIsImNoaWxkcmVuIiwic2Nyb2xsQ29udGFpbmVyIiwic2l6ZSIsInNjcm9sbENvbmZpZ3MiLCJlYXNlIiwiY3VycmVudCIsInByZXZpb3VzIiwicm91bmRlZCIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwiaGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic21vb3RoU2Nyb2xsaW5nIiwid2luZG93Iiwic2Nyb2xsWSIsIk1hdGgiLCJyb3VuZCIsImRpZmZlcmVuY2UiLCJhY2NlbGVyYXRpb24iLCJ3aWR0aCIsInRyYW5zZm9ybSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRpdiIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ScrollableContainer/ScrollableContainer.tsx\n"));

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_slices_profileSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/slices/profileSlice */ \"./redux/slices/profileSlice.ts\");\n/* harmony import */ var _components_HeaderComponent_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HeaderComponent/Header */ \"./components/HeaderComponent/Header.tsx\");\n/* harmony import */ var _sections_Hello_Section_HelloSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../sections/Hello.Section/HelloSection */ \"./sections/Hello.Section/HelloSection.tsx\");\n/* harmony import */ var _components_ScrollableContainer_ScrollableContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ScrollableContainer/ScrollableContainer */ \"./components/ScrollableContainer/ScrollableContainer.tsx\");\n/* harmony import */ var _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/useWindowSize */ \"./hooks/useWindowSize.ts\");\n/* harmony import */ var _hooks_useWindowScroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks/useWindowScroll */ \"./hooks/useWindowScroll.ts\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function(param) {\n    var profileData = param.profileData;\n    _s();\n    var windowSize = (0,_hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n    var scrollPosition = (0,_hooks_useWindowScroll__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    console.log(scrollPosition);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        dispatch((0,_redux_slices_profileSlice__WEBPACK_IMPORTED_MODULE_4__.setProfileData)(profileData));\n    }, [\n        profileData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Justas: Front-end developer\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_HeaderComponent_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"fixed top-0 left-0 w-full h-screen overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ScrollableContainer_ScrollableContainer__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    children: [\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_Hello_Section_HelloSection__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_Hello_Section_HelloSection__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_sections_Hello_Section_HelloSection__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\justb\\\\Documents\\\\full_stack_developement\\\\Personal_projects\\\\portfolio-2.0\\\\web\\\\pages\\\\index.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"k3/lSxq28QhH2lBVLB6nYrqvNBo=\", false, function() {\n    return [\n        _hooks_useWindowSize__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n        _hooks_useWindowScroll__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch\n    ];\n});\n_c = Home;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDNkI7QUFHMEI7QUFDQTtBQUNxQjtBQUNsQjtBQUNRO0FBS3NCO0FBRzNCO0FBQ047O0FBS3ZELElBQU1TLElBQUksR0FBRyxnQkFBZ0M7UUFBN0JDLFdBQVcsU0FBWEEsV0FBVzs7SUFDekIsSUFBTUMsVUFBVSxHQUFTSixnRUFBYSxFQUFFO0lBQ3hDLElBQU1LLGNBQWMsR0FBR0osa0VBQWUsRUFBRTtJQUN4QyxJQUFNSyxRQUFRLEdBQUdYLHdEQUFXLEVBQUU7SUFFOUJZLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxjQUFjLENBQUMsQ0FBQztJQUU1QlgsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2RZLFFBQVEsQ0FBQ1YsMEVBQWMsQ0FBQ08sV0FBVyxDQUFDLENBQUMsQ0FBQztLQUN2QyxFQUFFO1FBQUNBLFdBQVc7S0FBQyxDQUFDLENBQUM7SUFFbEIscUJBQ0UsOERBQUNNLEtBQUc7OzBCQUNGLDhEQUFDaEIsa0RBQUk7O2tDQUNILDhEQUFDaUIsT0FBSztrQ0FBQyw2QkFBMkI7Ozs7OzZCQUFRO2tDQUMxQyw4REFBQ0MsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozs2QkFBRzs7Ozs7O3FCQUNsQzswQkFDUCw4REFBQ2hCLDBFQUFNOzs7O3FCQUFHOzBCQUNWLDhEQUFDaUIsTUFBSTtnQkFBQ0MsU0FBUyxFQUFDLG9EQUFvRDswQkFDbEUsNEVBQUNoQiwyRkFBbUI7O3dCQUNqQixHQUFHO3NDQUNKLDhEQUFDRCw0RUFBWTs7OztpQ0FBRztzQ0FDaEIsOERBQUNBLDRFQUFZOzs7O2lDQUFHO3NDQUNoQiw4REFBQ0EsNEVBQVk7Ozs7aUNBQUc7Ozs7Ozt5QkFDSTs7Ozs7cUJBT2pCOzs7Ozs7YUFhSCxDQUNOO0NBQ0g7R0E5Q0tJLElBQUk7O1FBQ2lCRiw0REFBYTtRQUNmQyw4REFBZTtRQUNyQk4sb0RBQVc7OztBQUh4Qk8sS0FBQUEsSUFBSTs7QUFzRVYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ3JvcSBmcm9tIFwiZ3JvcVwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gXCIuLi9jbGllbnRcIjtcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBmZXRjaFByb2ZpbGUsIHNldFByb2ZpbGVEYXRhIH0gZnJvbSBcIi4uL3JlZHV4L3NsaWNlcy9wcm9maWxlU2xpY2VcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyQ29tcG9uZW50L0hlYWRlclwiO1xuaW1wb3J0IEhlbGxvU2VjdGlvbiBmcm9tIFwiLi4vc2VjdGlvbnMvSGVsbG8uU2VjdGlvbi9IZWxsb1NlY3Rpb25cIjtcbmltcG9ydCBBYm91dFNlY3Rpb24gZnJvbSBcIi4uL3NlY3Rpb25zL0Fib3V0TWUuU2VjdGlvbi9BYm91dFNlY3Rpb25cIjtcbmltcG9ydCBDb250YWN0U2VjdGlvbiBmcm9tIFwiLi4vc2VjdGlvbnMvQ29udGFjdC5TZWN0aW9uL0NvbnRhY3QuU2VjdGlvblwiO1xuXG5pbXBvcnQgeyBQYXJhbGxheCwgUGFyYWxsYXhMYXllciB9IGZyb20gXCJAcmVhY3Qtc3ByaW5nL3BhcmFsbGF4XCI7XG5pbXBvcnQgU2Nyb2xsYWJsZUNvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9TY3JvbGxhYmxlQ29udGFpbmVyL1Njcm9sbGFibGVDb250YWluZXJcIjtcblxuaW1wb3J0IHsgYW5pbWF0ZWQsIHVzZVNwcmluZyB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIjtcbmltcG9ydCB1c2VXaW5kb3dTaXplLCB7IFNpemUgfSBmcm9tIFwiLi4vaG9va3MvdXNlV2luZG93U2l6ZVwiO1xuaW1wb3J0IHVzZVdpbmRvd1Njcm9sbCBmcm9tIFwiLi4vaG9va3MvdXNlV2luZG93U2Nyb2xsXCI7XG5cbmludGVyZmFjZSBIb21lUHJvcHMge1xuICBwcm9maWxlRGF0YTogYW55O1xufVxuY29uc3QgSG9tZSA9ICh7IHByb2ZpbGVEYXRhIH06IEhvbWVQcm9wcykgPT4ge1xuICBjb25zdCB3aW5kb3dTaXplOiBTaXplID0gdXNlV2luZG93U2l6ZSgpO1xuICBjb25zdCBzY3JvbGxQb3NpdGlvbiA9IHVzZVdpbmRvd1Njcm9sbCgpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc29sZS5sb2coc2Nyb2xsUG9zaXRpb24pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0UHJvZmlsZURhdGEocHJvZmlsZURhdGEpKTtcbiAgfSwgW3Byb2ZpbGVEYXRhXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5KdXN0YXM6IEZyb250LWVuZCBkZXZlbG9wZXI8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmaXhlZCB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtc2NyZWVuIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICA8U2Nyb2xsYWJsZUNvbnRhaW5lcj5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgPEhlbGxvU2VjdGlvbiAvPlxuICAgICAgICAgIDxIZWxsb1NlY3Rpb24gLz5cbiAgICAgICAgICA8SGVsbG9TZWN0aW9uIC8+XG4gICAgICAgIDwvU2Nyb2xsYWJsZUNvbnRhaW5lcj5cblxuICAgICAgICB7LyogPFBhcmFsbGF4TGF5ZXJcbiAgICAgICAgICAgIG9mZnNldD17MX1cbiAgICAgICAgICAgIHNwZWVkPXsxLjV9XG4gICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmNmQ2ZFwiIH19XG4gICAgICAgICAgLz4gKi99XG4gICAgICA8L21haW4+XG5cbiAgICAgIHsvKiA8Zm9vdGVyIGNsYXNzTmFtZT1cImZsZXggaC0yNCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGJvcmRlci10XCI+XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTJcIlxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5e1wiIFwifVxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgd2lkdGg9ezcyfSBoZWlnaHQ9ezE2fSAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj4gKi99XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHBhcmFtcyA9IHsgcHJvZmlsZUlkOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfUFJPRklMRUlEIH07XG5cbiAgY29uc3QgcXVlcnkgPSBncm9xYCpbX3R5cGUgPT0gXCJwcm9maWxlXCIgJiYgX2lkID09ICRwcm9maWxlSWRde1xuICAgIFwiaGVsbG9cIjpncmVldGluZyxmaXJzdE5hbWUsbGFzdE5hbWUsY3VycmVudExvY2F0aW9uLHNvY2lhbExpbmtzLFxuICAgIFwicHJvZmlsZUltYWdlVVJMXCI6cHJvZmlsZUltYWdlLmFzc2V0LT51cmwsXG4gICAgXCJjdlVSTFwiOmN2LmFzc2V0LT51cmwsZWR1Y2F0aW9uW10tPnt0aXRsZSxkZXNjcmlwdGlvbix1bml2ZXJzaXR5fSxcbiAgICBleHBlcmllbmNlW10tPntqb2JUaXRsZSxjb21wYW55LGRlc2NyaXB0aW9uLHN0YXJ0RGF0ZSxlbmREYXRlLHRhZ1tdLT57c2tpbGxUaXRsZX19LFxuICAgIGVkdWNhdGlvbltdLT57dGl0bGUsZGVzY3JpcHRpb24sdW5pdmVyc2l0eSxzdGFydERhdGUsZW5kRGF0ZX0sXG4gICAgXCJhYm91dE1lXCI6YWJvdXRNZSxcbiAgICBza2lsbHNbXS0+e19pZCxza2lsbFRpdGxlLHNraWxsSWNvbixjYXRlZ29yeSxza2lsbEljb257c2VjdXJlX3VybH19fWA7XG4gIGNvbnN0IHByb2ZpbGVEYXRhID0gYXdhaXQgc2FuaXR5Q2xpZW50LmZldGNoKHF1ZXJ5LCBwYXJhbXMpO1xuXG4gIGNvbnNvbGUubG9nKHByb2ZpbGVEYXRhKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9maWxlRGF0YSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VEaXNwYXRjaCIsInNldFByb2ZpbGVEYXRhIiwiSGVhZGVyIiwiSGVsbG9TZWN0aW9uIiwiU2Nyb2xsYWJsZUNvbnRhaW5lciIsInVzZVdpbmRvd1NpemUiLCJ1c2VXaW5kb3dTY3JvbGwiLCJIb21lIiwicHJvZmlsZURhdGEiLCJ3aW5kb3dTaXplIiwic2Nyb2xsUG9zaXRpb24iLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});