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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction App() {\n    _s();\n    const { register, handleSubmit } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm)();\n    let warn = \"\";\n    const onSubmit = (data)=>{};\n    function validation(e) {\n        console.log(e);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col bg-slate-50 bg-opacity-90  rounded-md mx-[10%] lg:w-[28%] \",\n        onSubmit: handleSubmit(onSubmit),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-xl font-light pl-7 pt-7 bg-slate-50 p-5 bg-opacity-50 border-b-2\",\n                children: \"Registration form\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col px-7 mb-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-8 relative border-slate-100 border-2  text-m\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: (e)=>console.log,\n                                minLength: 5,\n                                className: \" p-1 w-full outline-none\",\n                                placeholder: \"Username\",\n                                type: \"text\",\n                                ...register(\"userName\", {\n                                    required: true\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                className: \" bg-white p-2 absolute right-0 border-l-2 text-slate-200 \",\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faUser\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-5 relative border-slate-100 border-2  text-m\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: validation,\n                                className: \"p-1 border-orange-50 w-full outline-none\",\n                                placeholder: \"Email adress\",\n                                type: \"email\",\n                                ...register(\"email\", {\n                                    required: true,\n                                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.(com|net)$/\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faEnvelope,\n                                className: \"bg-white p-2 absolute right-0 border-l-2 text-slate-200\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-5 relative border-slate-100 border-2  text-m\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: validation,\n                                minLength: 8,\n                                className: \"p-1 border-orange-50 w-full outline-none\",\n                                placeholder: \"Password\",\n                                type: \"password\",\n                                ...register(\"password\", {\n                                    required: true\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faLock,\n                                className: \"bg-white p-2 absolute right-0 border-l-2 text-slate-200\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-5 relative border-slate-100 border-2 text-m\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                onChange: validation,\n                                minLength: 8,\n                                className: \"p-1 border-orange-50 w-full outline-none\",\n                                placeholder: \"Confirm password\",\n                                type: \"password\",\n                                ...register(\"confirmPassword\", {\n                                    required: true\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faLock,\n                                className: \"bg-white p-2 absolute right-0 border-l-2 text-slate-200\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                                lineNumber: 90,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-5 px-7 flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" relative border-slate-100 border-2  text-m mr-2\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            onChange: validation,\n                            minLength: 3,\n                            className: \"p-1 border-orange-50 w-full outline-none\",\n                            placeholder: \"First Name\",\n                            type: \"text\",\n                            ...register(\"firstName\", {\n                                required: true\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative border-slate-100 border-2  text-m\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            onChange: validation,\n                            minLength: 3,\n                            className: \"p-1 border-orange-50 w-full outline-none\",\n                            placeholder: \"Last Name\",\n                            type: \"text\",\n                            ...register(\"lastName\", {\n                                required: true\n                            })\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                            lineNumber: 111,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                        lineNumber: 110,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-7 font-light mb-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onChange: validation,\n                        className: \"self-start mt-7 p-1 border-slate-100 border-2\",\n                        name: \"rules\",\n                        type: \"checkbox\",\n                        ...register(\"rules\", {\n                            required: true\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"rules\",\n                        children: \" I agree to the Terms of Service\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                lineNumber: 123,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: warn\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                lineNumber: 133,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                lineNumber: 134,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-l font-light pl-7 pt-7 bg-slate-100 w-full p-5 bg-opacity-90 self-end text-end\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"p-2 bg-[#54d8cb] text-white bg-opacity-40 font-normal px-4 rounded my-2 mx-1\",\n                    type: \"submit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                    lineNumber: 136,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Mohammed\\\\Desktop\\\\stackblitz-starters-kk3npc\\\\components\\\\Form\\\\Form.jsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"zkd3JmxRK/AmyiWtSfciHeYO5Zk=\", false, function() {\n    return [\n        react_hook_form__WEBPACK_IMPORTED_MODULE_3__.useForm\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBTUMsU0FBUTtrQ0FBUTs7Ozs7Ozs7Ozs7OzBCQUV6Qiw4REFBQ0M7MEJBQUd2Qjs7Ozs7OzBCQUNKLDhEQUFDbUI7Ozs7OzBCQUNELDhEQUFDVDtnQkFBSUYsV0FBVTswQkFDZiw0RUFBQ0c7b0JBQU1ILFdBQVU7b0JBQWdGTyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk1RztHQXRJd0JsQjs7UUFDYUQsb0RBQU9BOzs7S0FEcEJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybS9Gb3JtLmpzeD9lZjU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZhRW52ZWxvcGUsIGZhTG9jaywgZmFVc2VyIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tIFwicmVhY3QtaG9vay1mb3JtXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3QgeyByZWdpc3RlciwgaGFuZGxlU3VibWl0IH0gPSB1c2VGb3JtKCk7XHJcbiAgbGV0IHdhcm4gPSBcIlwiO1xyXG5cclxuICBcclxuICBjb25zdCBvblN1Ym1pdCA9IChkYXRhKSA9PiB7XHJcbiAgICBcclxuICB9O1xyXG4gIFxyXG4gIGZ1bmN0aW9uIHZhbGlkYXRpb24oZSkge1xyXG4gICAgY29uc29sZS5sb2coZSlcclxuICB9XHJcblxyXG5cclxuICBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtXHJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgYmctc2xhdGUtNTAgYmctb3BhY2l0eS05MCAgcm91bmRlZC1tZCBteC1bMTAlXSBsZzp3LVsyOCVdIFwiXHJcbiAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxyXG4gICAgPlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWxpZ2h0IHBsLTcgcHQtNyBiZy1zbGF0ZS01MCBwLTUgYmctb3BhY2l0eS01MCBib3JkZXItYi0yXCI+XHJcbiAgICAgICAgUmVnaXN0cmF0aW9uIGZvcm1cclxuICAgICAgPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHB4LTcgbWItOFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCByZWxhdGl2ZSBib3JkZXItc2xhdGUtMTAwIGJvcmRlci0yICB0ZXh0LW1cIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKT0+Y29uc29sZS5sb2d9XHJcbiAgICAgICAgICBtaW5MZW5ndGg9ezV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBwLTEgdy1mdWxsIG91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcInVzZXJOYW1lXCIsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgYmctd2hpdGUgcC0yIGFic29sdXRlIHJpZ2h0LTAgYm9yZGVyLWwtMiB0ZXh0LXNsYXRlLTIwMCBcIlxyXG4gICAgICAgICAgICBpY29uPXtmYVVzZXJ9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSByZWxhdGl2ZSBib3JkZXItc2xhdGUtMTAwIGJvcmRlci0yICB0ZXh0LW1cIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9e3ZhbGlkYXRpb259XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSBib3JkZXItb3JhbmdlLTUwIHctZnVsbCBvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsIGFkcmVzc1wiXHJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImVtYWlsXCIsIHtcclxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICBwYXR0ZXJuOiAvXlthLXpBLVowLTkuXyUrLV0rQFthLXpBLVowLTkuLV0rXFwuKGNvbXxuZXQpJC8sXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgaWNvbj17ZmFFbnZlbG9wZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC0yIGFic29sdXRlIHJpZ2h0LTAgYm9yZGVyLWwtMiB0ZXh0LXNsYXRlLTIwMFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgcmVsYXRpdmUgYm9yZGVyLXNsYXRlLTEwMCBib3JkZXItMiAgdGV4dC1tXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIG9uQ2hhbmdlPXt2YWxpZGF0aW9ufVxyXG4gICAgICAgICAgbWluTGVuZ3RoPXs4fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEgYm9yZGVyLW9yYW5nZS01MCB3LWZ1bGwgb3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcInBhc3N3b3JkXCIsIHtcclxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICBpY29uPXtmYUxvY2t9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtMiBhYnNvbHV0ZSByaWdodC0wIGJvcmRlci1sLTIgdGV4dC1zbGF0ZS0yMDBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IHJlbGF0aXZlIGJvcmRlci1zbGF0ZS0xMDAgYm9yZGVyLTIgdGV4dC1tXCI+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIG9uQ2hhbmdlPXt2YWxpZGF0aW9ufVxyXG4gICAgICAgICAgbWluTGVuZ3RoPXs4fVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwLTEgYm9yZGVyLW9yYW5nZS01MCB3LWZ1bGwgb3V0bGluZS1ub25lXCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIHBhc3N3b3JkXCJcclxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgey4uLnJlZ2lzdGVyKFwiY29uZmlybVBhc3N3b3JkXCIsIHtcclxuICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICBpY29uPXtmYUxvY2t9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtMiBhYnNvbHV0ZSByaWdodC0wIGJvcmRlci1sLTIgdGV4dC1zbGF0ZS0yMDBcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxociAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgcHgtNyBmbGV4XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgcmVsYXRpdmUgYm9yZGVyLXNsYXRlLTEwMCBib3JkZXItMiAgdGV4dC1tIG1yLTJcIj5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9e3ZhbGlkYXRpb259XHJcbiAgICAgICAgICBtaW5MZW5ndGg9ezN9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSBib3JkZXItb3JhbmdlLTUwIHctZnVsbCBvdXRsaW5lLW5vbmVcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIlxyXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgIHsuLi5yZWdpc3RlcihcImZpcnN0TmFtZVwiLCB7XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJvcmRlci1zbGF0ZS0xMDAgYm9yZGVyLTIgIHRleHQtbVwiPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBvbkNoYW5nZT17dmFsaWRhdGlvbn1cclxuICAgICAgICAgIG1pbkxlbmd0aD17M31cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0xIGJvcmRlci1vcmFuZ2UtNTAgdy1mdWxsIG91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICB7Li4ucmVnaXN0ZXIoXCJsYXN0TmFtZVwiLCB7XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNyBmb250LWxpZ2h0IG1iLTVcIj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICBvbkNoYW5nZT17dmFsaWRhdGlvbn1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGYtc3RhcnQgbXQtNyBwLTEgYm9yZGVyLXNsYXRlLTEwMCBib3JkZXItMlwiXHJcbiAgICAgICAgICBuYW1lPVwicnVsZXNcIlxyXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgIHsuLi5yZWdpc3RlcihcInJ1bGVzXCIsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInJ1bGVzXCI+IEkgYWdyZWUgdG8gdGhlIFRlcm1zIG9mIFNlcnZpY2U8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHA+e3dhcm59PC9wPlxyXG4gICAgICA8aHIvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbCBmb250LWxpZ2h0IHBsLTcgcHQtNyBiZy1zbGF0ZS0xMDAgdy1mdWxsIHAtNSBiZy1vcGFjaXR5LTkwIHNlbGYtZW5kIHRleHQtZW5kXCI+XHJcbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJwLTIgYmctWyM1NGQ4Y2JdIHRleHQtd2hpdGUgYmctb3BhY2l0eS00MCBmb250LW5vcm1hbCBweC00IHJvdW5kZWQgbXktMiBteC0xXCIgIHR5cGU9XCJzdWJtaXRcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiZmFFbnZlbG9wZSIsImZhTG9jayIsImZhVXNlciIsIkZvbnRBd2Vzb21lSWNvbiIsInVzZVN0YXRlIiwidXNlRm9ybSIsIkFwcCIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0Iiwid2FybiIsIm9uU3VibWl0IiwiZGF0YSIsInZhbGlkYXRpb24iLCJlIiwiY29uc29sZSIsImxvZyIsImZvcm0iLCJjbGFzc05hbWUiLCJoMSIsImRpdiIsImlucHV0Iiwib25DaGFuZ2UiLCJtaW5MZW5ndGgiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJyZXF1aXJlZCIsImljb24iLCJwYXR0ZXJuIiwiaHIiLCJuYW1lIiwibGFiZWwiLCJodG1sRm9yIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Form/Form.jsx\n"));

/***/ })

});