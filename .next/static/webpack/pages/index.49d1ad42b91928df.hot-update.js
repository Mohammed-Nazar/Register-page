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

/***/ "./components/Form/Form.jsx":
/*!**********************************!*\
  !*** ./components/Form/Form.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction App() {\n    _s();\n    const { register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();\n    const onSubmit = (data)=>console.log(data);\n    const [foucsEl, setFoucsEl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    let fadeCondition = fadeCondition ? true : false;\n    function hanldeFoucs(param) {\n        let { target } = param;\n        setFoucsEl([\n            target.placeholder\n        ]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col bg-slate-50 bg-opacity-90  rounded-md mx-[10%] \",\n        onSubmit: handleSubmit(onSubmit),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-xl font-light pl-7 pt-7 bg-slate-50 p-5 bg-opacity-50 border-b-2\",\n                children: \"Registration form\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                lineNumber: 21,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col px-7 mb-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-8 relative border-slate-100 border-2 text-slate-200 text-m\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onFocus: hanldeFoucs,\n                                className: \" p-1 w-full outline-none\",\n                                placeholder: \"Username\",\n                                type: \"text\",\n                                ...register(\"userName\", {\n                                    required: true\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                                lineNumber: 24,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                className: \" bg-white p-2 absolute right-0 border-l-2 \",\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faUser,\n                                fadeCondition: true\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-8 relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"mt-5 p-1 border-orange-50\",\n                                placeholder: \"Email adress\",\n                                type: \"email\",\n                                ...register(\"email\", {\n                                    required: true,\n                                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.(com|net)$/\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faEnvelope\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                                lineNumber: 43,\n                                columnNumber: 9\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"mt-5 p-1\",\n                        placeholder: \"Password\",\n                        type: \"password\",\n                        ...register(\"password\", {\n                            required: true\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"mt-5 p-1\",\n                        placeholder: \"Confirm password\",\n                        type: \"password\",\n                        ...register(\"confirmPassword\", {\n                            required: true\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-7\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"mt-7 p-1\",\n                        placeholder: \"First name\",\n                        type: \"text\",\n                        ...register(\"firstName\", {\n                            required: true\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"mt-7 p-1\",\n                        placeholder: \"Last name\",\n                        type: \"text\",\n                        ...register(\"lastName\", {\n                            required: true\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-7\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: \"self-start mt-7 p-1\",\n                        name: \"rules\",\n                        type: \"checkbox\",\n                        ...register(\"rules\", {\n                            required: true\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        for: \"rules\",\n                        children: \" I agree to the Terms of Service\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                        lineNumber: 80,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"submit\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"Lr/reeMp4w+q/GG8rHX5oLGbjZw=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0vRm9ybS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF1RTtBQUNOO0FBQ2hDO0FBQ1M7QUFHM0IsU0FBU0s7O0lBQ3RCLE1BQU0sRUFBRUMsUUFBUSxFQUFFQyxZQUFZLEVBQUUsR0FBR0gsd0RBQU9BO0lBQzFDLE1BQU1JLFdBQVcsQ0FBQ0MsT0FBU0MsUUFBUUMsR0FBRyxDQUFDRjtJQUN2QyxNQUFNLENBQUNHLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUN6QyxJQUFJVyxnQkFBZ0JBLGdCQUFnQixPQUFPO0lBSTNDLFNBQVNDLFlBQVksS0FBUTtZQUFSLEVBQUNDLE1BQU0sRUFBQyxHQUFSO1FBQ25CSCxXQUFXO1lBQUNHLE9BQU9DLFdBQVc7U0FBQztJQUNqQztJQUVBLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVO1FBQWdFWCxVQUFVRCxhQUFhQzs7MEJBQ3ZHLDhEQUFDWTtnQkFBR0QsV0FBVTswQkFBd0U7Ozs7OzswQkFDcEYsOERBQUNFO2dCQUFJRixXQUFVOztrQ0FDZiw4REFBQ0U7d0JBQUlGLFdBQVU7OzBDQUNiLDhEQUFDRztnQ0FDREMsU0FBU1I7Z0NBQ1BJLFdBQVU7Z0NBQ1ZGLGFBQVk7Z0NBQ1pPLE1BQUs7Z0NBQ0osR0FBR2xCLFNBQVMsWUFBWTtvQ0FBRW1CLFVBQVU7Z0NBQUssRUFBRTs7Ozs7OzBDQUU5Qyw4REFBQ3ZCLDJFQUFlQTtnQ0FBQ2lCLFdBQVU7Z0NBQTZDTyxNQUFNekIscUVBQU1BO2dDQUFFYSxhQUFhOzs7Ozs7Ozs7Ozs7a0NBRW5HLDhEQUFDTzt3QkFBSUYsV0FBVTs7MENBQ2YsOERBQUNHO2dDQUNDSCxXQUFVO2dDQUNWRixhQUFZO2dDQUNaTyxNQUFLO2dDQUNKLEdBQUdsQixTQUFTLFNBQVM7b0NBQ3BCbUIsVUFBVTtvQ0FDVkUsU0FBUztnQ0FDWCxFQUFFOzs7Ozs7MENBRUosOERBQUN6QiwyRUFBZUE7Z0NBQUN3QixNQUFNMUIseUVBQVVBOzs7Ozs7Ozs7Ozs7a0NBRWpDLDhEQUFDc0I7d0JBQ0NILFdBQVU7d0JBQ1ZGLGFBQVk7d0JBQ1pPLE1BQUs7d0JBQ0osR0FBR2xCLFNBQVMsWUFBWTs0QkFBRW1CLFVBQVU7d0JBQUssRUFBRTs7Ozs7O2tDQUU5Qyw4REFBQ0g7d0JBQ0NILFdBQVU7d0JBQ1ZGLGFBQVk7d0JBQ1pPLE1BQUs7d0JBQ0osR0FBR2xCLFNBQVMsbUJBQW1COzRCQUFFbUIsVUFBVTt3QkFBSyxFQUFFOzs7Ozs7Ozs7Ozs7MEJBR3ZELDhEQUFDRzs7Ozs7MEJBQ0QsOERBQUNQO2dCQUFJRixXQUFVOztrQ0FDYiw4REFBQ0c7d0JBQ0RILFdBQVU7d0JBQ1JGLGFBQVk7d0JBQ1pPLE1BQUs7d0JBQ0osR0FBR2xCLFNBQVMsYUFBYTs0QkFBRW1CLFVBQVU7d0JBQUssRUFBRTs7Ozs7O2tDQUUvQyw4REFBQ0g7d0JBQ0RILFdBQVU7d0JBQ1JGLGFBQVk7d0JBQ1pPLE1BQUs7d0JBQ0osR0FBR2xCLFNBQVMsWUFBWTs0QkFBRW1CLFVBQVU7d0JBQUssRUFBRTs7Ozs7Ozs7Ozs7OzBCQUdoRCw4REFBQ0o7Z0JBQUlGLFdBQVU7O2tDQUNmLDhEQUFDRzt3QkFDREgsV0FBVTt3QkFDUlUsTUFBSzt3QkFDTEwsTUFBSzt3QkFDSixHQUFHbEIsU0FBUyxTQUFTOzRCQUFFbUIsVUFBVTt3QkFBSyxFQUFFOzs7Ozs7a0NBRTNDLDhEQUFDSzt3QkFBTUMsS0FBSTtrQ0FBUTs7Ozs7Ozs7Ozs7OzBCQUVuQiw4REFBQ1Q7Z0JBQU1FLE1BQUs7Ozs7Ozs7Ozs7OztBQUdsQjtHQTlFd0JuQjs7UUFDYUQsb0RBQU9BOzs7S0FEcEJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybS9Gb3JtLmpzeD9lZjU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZhRW52ZWxvcGUsIGZhVXNlciB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSBcInJlYWN0LWhvb2stZm9ybVwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcclxuICBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQgfSA9IHVzZUZvcm0oKTtcclxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiBjb25zb2xlLmxvZyhkYXRhKTtcclxuICBjb25zdCBbZm91Y3NFbCwgc2V0Rm91Y3NFbF0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgbGV0IGZhZGVDb25kaXRpb24gPSBmYWRlQ29uZGl0aW9uID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuXHJcblxyXG4gIGZ1bmN0aW9uIGhhbmxkZUZvdWNzKHt0YXJnZXR9KXtcclxuICAgIHNldEZvdWNzRWwoW3RhcmdldC5wbGFjZWhvbGRlcl0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBiZy1zbGF0ZS01MCBiZy1vcGFjaXR5LTkwICByb3VuZGVkLW1kIG14LVsxMCVdIFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfT5cclxuICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbGlnaHQgcGwtNyBwdC03IGJnLXNsYXRlLTUwIHAtNSBiZy1vcGFjaXR5LTUwIGJvcmRlci1iLTJcIj5SZWdpc3RyYXRpb24gZm9ybTwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBweC03IG1iLThcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC04IHJlbGF0aXZlIGJvcmRlci1zbGF0ZS0xMDAgYm9yZGVyLTIgdGV4dC1zbGF0ZS0yMDAgdGV4dC1tXCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgb25Gb2N1cz17aGFubGRlRm91Y3N9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCIgcC0xIHctZnVsbCBvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJ1c2VyTmFtZVwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9XCIgYmctd2hpdGUgcC0yIGFic29sdXRlIHJpZ2h0LTAgYm9yZGVyLWwtMiBcIiBpY29uPXtmYVVzZXJ9IGZhZGVDb25kaXRpb24gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggcmVsYXRpdmVcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTUgcC0xIGJvcmRlci1vcmFuZ2UtNTBcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZHJlc3NcIlxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcihcImVtYWlsXCIsIHtcclxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIHBhdHRlcm46IC9eW2EtekEtWjAtOS5fJSstXStAW2EtekEtWjAtOS4tXStcXC4oY29tfG5ldCkkLyxcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUVudmVsb3BlfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC01IHAtMVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJwYXNzd29yZFwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC01IHAtMVwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gcGFzc3dvcmRcIlxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcihcImNvbmZpcm1QYXNzd29yZFwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8aHIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC03XCI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibXQtNyBwLTFcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBuYW1lXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcihcImZpcnN0TmFtZVwiLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibXQtNyBwLTFcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IG5hbWVcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgey4uLnJlZ2lzdGVyKFwibGFzdE5hbWVcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC03XCI+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICBjbGFzc05hbWU9XCJzZWxmLXN0YXJ0IG10LTcgcC0xXCJcclxuICAgICAgICBuYW1lPVwicnVsZXNcIlxyXG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgey4uLnJlZ2lzdGVyKFwicnVsZXNcIiwgeyByZXF1aXJlZDogdHJ1ZSB9KX1cclxuICAgICAgLz5cclxuICAgICAgPGxhYmVsIGZvcj1cInJ1bGVzXCI+IEkgYWdyZWUgdG8gdGhlIFRlcm1zIG9mIFNlcnZpY2U8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAvPlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImZhRW52ZWxvcGUiLCJmYVVzZXIiLCJGb250QXdlc29tZUljb24iLCJ1c2VTdGF0ZSIsInVzZUZvcm0iLCJBcHAiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsIm9uU3VibWl0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJmb3Vjc0VsIiwic2V0Rm91Y3NFbCIsImZhZGVDb25kaXRpb24iLCJoYW5sZGVGb3VjcyIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiZm9ybSIsImNsYXNzTmFtZSIsImgxIiwiZGl2IiwiaW5wdXQiLCJvbkZvY3VzIiwidHlwZSIsInJlcXVpcmVkIiwiaWNvbiIsInBhdHRlcm4iLCJociIsIm5hbWUiLCJsYWJlbCIsImZvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Form/Form.jsx\n"));

/***/ })

});