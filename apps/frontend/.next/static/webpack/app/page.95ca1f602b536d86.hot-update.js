"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/SideBar.tsx":
/*!************************************!*\
  !*** ./src/components/SideBar.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/computer.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/puzzle.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/glasses.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/users.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/user.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/settings.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var _ui_ToolTip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/ToolTip */ \"(app-pages-browser)/./src/components/ui/ToolTip.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/../../node_modules/next/dist/api/link.js\");\n/* harmony import */ var _ModeToggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ModeToggle */ \"(app-pages-browser)/./src/components/ModeToggle.tsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/../../node_modules/next/dist/api/router.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Sidebar = (param)=>{\n    let { show, setter } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const menuItems = [\n        {\n            name: \"Play\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            key: \"play\",\n            route: \"/play\"\n        },\n        {\n            name: \"Puzzles\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            key: \"puzzles\",\n            route: \"/puzzle\"\n        },\n        {\n            name: \"Watch\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n            key: \"watch\",\n            route: \"/watch\"\n        },\n        {\n            name: \"Social\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n            key: \"social\",\n            route: \"/social\"\n        },\n        {\n            name: \"Profile\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n            key: \"profile\",\n            route: \"/profile\"\n        },\n        {\n            name: \"Settings\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n            key: \"settings\",\n            route: \"/setting\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"fixed inset-y-0 left-0 z-10 \".concat(isOpen ? \"w-64\" : \"w-16\", \" flex flex-col border-r bg-gray-900 text-gray-100 transition-all duration-300 ease-in-out\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between pl-3 pt-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"\".concat(isOpen ? \"block\" : \"hidden\", \" text-xl font-bold text-white\"),\n                        children: \"UNChess\"\n                    }, void 0, false, {\n                        fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"p-2 text-gray-100 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700\",\n                        onClick: ()=>setIsOpen(!isOpen),\n                        children: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                            className: \"w-6 h-6\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 31\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n                            className: \"w-6 h-6\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 59\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_ToolTip__WEBPACK_IMPORTED_MODULE_2__.TooltipProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"flex flex-col items-stretch gap-1 px-2 py-4\",\n                    children: menuItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                            href: \"\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_ToolTip__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_ToolTip__WEBPACK_IMPORTED_MODULE_2__.TooltipTrigger, {\n                                        asChild: true,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                            href: \"#\",\n                                            className: \"flex items-center p-3 w-full rounded-lg transition-transform transform duration-300 ease-in-out \".concat(isOpen ? \"hover:bg-gray-700 hover:scale-105\" : \"text-gray-400 hover:text-gray-100 hover:bg-zinc-500\", \" \").concat(isOpen ? \"hover:shadow-md\" : \"\"),\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(item.icon, {\n                                                    className: \"h-6 w-6\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                                    lineNumber: 40,\n                                                    columnNumber: 41\n                                                }, undefined),\n                                                isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"ml-4 text-lg font-medium\",\n                                                    children: item.name\n                                                }, void 0, false, {\n                                                    fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                                    lineNumber: 41,\n                                                    columnNumber: 52\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 37\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    !isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_ToolTip__WEBPACK_IMPORTED_MODULE_2__.TooltipContent, {\n                                        side: \"right\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-sm font-medium\",\n                                            children: item.name\n                                        }, void 0, false, {\n                                            fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 41\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 37\n                                    }, undefined)\n                                ]\n                            }, item.key, true, {\n                                fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 29\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 25\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-auto p-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ModeToggle__WEBPACK_IMPORTED_MODULE_4__.ModeToggle, {}, void 0, false, {\n                    fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Sidebar, \"J3l0LaLumK52+AVwtQ7tkayGPsk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NpZGVCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUN3RDtBQUNEO0FBQzNEO0FBQ2E7QUFDRjtBQUV4QyxNQUFNZ0IsVUFBVTtRQUFDLEVBQUVDLElBQUksRUFBRUMsTUFBTSxFQUFFOztJQUM3QixNQUFNQyxTQUFTSixzREFBU0E7SUFFeEIsTUFBTSxDQUFDSyxRQUFRQyxVQUFVLEdBQUdyQiwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNc0IsWUFBWTtRQUNkO1lBQUVDLE1BQU07WUFBUUMsTUFBTXZCLDhIQUFRQTtZQUFFd0IsS0FBSztZQUFRQyxPQUFPO1FBQVE7UUFDNUQ7WUFBRUgsTUFBTTtZQUFXQyxNQUFNckIsOEhBQU1BO1lBQUVzQixLQUFLO1lBQVdDLE9BQU87UUFBVTtRQUNsRTtZQUFFSCxNQUFNO1lBQVNDLE1BQU10Qiw4SEFBT0E7WUFBRXVCLEtBQUs7WUFBU0MsT0FBTztRQUFTO1FBQzlEO1lBQUVILE1BQU07WUFBVUMsTUFBTWxCLDhIQUFLQTtZQUFFbUIsS0FBSztZQUFVQyxPQUFPO1FBQVU7UUFDL0Q7WUFBRUgsTUFBTTtZQUFXQyxNQUFNbkIsK0hBQUlBO1lBQUVvQixLQUFLO1lBQVdDLE9BQU87UUFBVztRQUNqRTtZQUFFSCxNQUFNO1lBQVlDLE1BQU1wQiwrSEFBUUE7WUFBRXFCLEtBQUs7WUFBWUMsT0FBTztRQUFXO0tBQzFFO0lBRUQscUJBQ0ksOERBQUNDO1FBQU1DLFdBQVcsK0JBQXdELE9BQXpCUixTQUFTLFNBQVMsUUFBTzs7MEJBQ3RFLDhEQUFDUztnQkFBSUQsV0FBVTs7a0NBQ1gsOERBQUNFO3dCQUFHRixXQUFXLEdBQStCLE9BQTVCUixTQUFTLFVBQVUsVUFBUztrQ0FBZ0M7Ozs7OztrQ0FDOUUsOERBQUNXO3dCQUNHSCxXQUFVO3dCQUNWSSxTQUFTLElBQU1YLFVBQVUsQ0FBQ0Q7a0NBRXpCQSx1QkFBUyw4REFBQ1osK0hBQUNBOzRCQUFDb0IsV0FBVTs7Ozs7c0RBQWUsOERBQUNyQiwrSEFBSUE7NEJBQUNxQixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHOUQsOERBQUNqQix3REFBZUE7MEJBQ1osNEVBQUNzQjtvQkFBSUwsV0FBVTs4QkFDVk4sVUFBVVksR0FBRyxDQUFDLENBQUNDLHFCQUNaLDhEQUFDdEIsaURBQUlBOzRCQUFDdUIsTUFBTTtzQ0FDUiw0RUFBQzNCLGdEQUFPQTs7a0RBQ0osOERBQUNHLHVEQUFjQTt3Q0FBQ3lCLE9BQU87a0RBQ25CLDRFQUFDeEIsaURBQUlBOzRDQUFDdUIsTUFBSzs0Q0FBSVIsV0FBVyxtR0FBMk1SLE9BQXhHQSxTQUFTLHNDQUFzQyx1REFBc0QsS0FBbUMsT0FBaENBLFNBQVMsb0JBQW9COzs4REFDOVAsOERBQUNlLEtBQUtYLElBQUk7b0RBQUNJLFdBQVU7Ozs7OztnREFDcEJSLHdCQUFVLDhEQUFDa0I7b0RBQUtWLFdBQVU7OERBQTRCTyxLQUFLWixJQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztvQ0FHdkUsQ0FBQ0gsd0JBQ0UsOERBQUNWLHVEQUFjQTt3Q0FBQzZCLE1BQUs7a0RBQ2pCLDRFQUFDRDs0Q0FBS1YsV0FBVTtzREFBdUJPLEtBQUtaLElBQUk7Ozs7Ozs7Ozs7OzsrQkFUOUNZLEtBQUtWLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQWdCdEMsOERBQUNJO2dCQUFJRCxXQUFVOzBCQUNYLDRFQUFDZCxtREFBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJM0I7R0FsRE1FOztRQUNhRCxrREFBU0E7OztLQUR0QkM7QUFvRE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU2lkZUJhci50c3g/MGNiNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvbXB1dGVyLCBHbGFzc2VzLCBQdXp6bGUsIFNldHRpbmdzLCBVc2VyLCBVc2VycywgTWVudSwgWCB9IGZyb20gJ2x1Y2lkZS1yZWFjdCc7XG5pbXBvcnQgeyBUb29sdGlwLCBUb29sdGlwQ29udGVudCwgVG9vbHRpcFByb3ZpZGVyLCBUb29sdGlwVHJpZ2dlciB9IGZyb20gJy4vdWkvVG9vbFRpcCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgTW9kZVRvZ2dsZSB9IGZyb20gJy4vTW9kZVRvZ2dsZSc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmNvbnN0IFNpZGViYXIgPSAoeyBzaG93LCBzZXR0ZXIgfSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gICAgY29uc3QgbWVudUl0ZW1zID0gW1xuICAgICAgICB7IG5hbWU6ICdQbGF5JywgaWNvbjogQ29tcHV0ZXIsIGtleTogJ3BsYXknLCByb3V0ZTogXCIvcGxheVwiIH0sXG4gICAgICAgIHsgbmFtZTogJ1B1enpsZXMnLCBpY29uOiBQdXp6bGUsIGtleTogJ3B1enpsZXMnLCByb3V0ZTogXCIvcHV6emxlXCIgfSxcbiAgICAgICAgeyBuYW1lOiAnV2F0Y2gnLCBpY29uOiBHbGFzc2VzLCBrZXk6ICd3YXRjaCcsIHJvdXRlOiBcIi93YXRjaFwiIH0sXG4gICAgICAgIHsgbmFtZTogJ1NvY2lhbCcsIGljb246IFVzZXJzLCBrZXk6ICdzb2NpYWwnLCByb3V0ZTogXCIvc29jaWFsXCIgfSxcbiAgICAgICAgeyBuYW1lOiAnUHJvZmlsZScsIGljb246IFVzZXIsIGtleTogJ3Byb2ZpbGUnLCByb3V0ZTogXCIvcHJvZmlsZVwiIH0sXG4gICAgICAgIHsgbmFtZTogJ1NldHRpbmdzJywgaWNvbjogU2V0dGluZ3MsIGtleTogJ3NldHRpbmdzJywgcm91dGU6IFwiL3NldHRpbmdcIiB9LFxuICAgIF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YXNpZGUgY2xhc3NOYW1lPXtgZml4ZWQgaW5zZXQteS0wIGxlZnQtMCB6LTEwICR7aXNPcGVuID8gJ3ctNjQnIDogJ3ctMTYnfSBmbGV4IGZsZXgtY29sIGJvcmRlci1yIGJnLWdyYXktOTAwIHRleHQtZ3JheS0xMDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBwbC0zIHB0LTJcIj5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtgJHtpc09wZW4gPyAnYmxvY2snIDogJ2hpZGRlbid9IHRleHQteGwgZm9udC1ib2xkIHRleHQtd2hpdGVgfT5VTkNoZXNzPC9oMT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWdyYXktMTAwIGJnLWdyYXktODAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyYXktNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2lzT3BlbiA/IDxYIGNsYXNzTmFtZT1cInctNiBoLTZcIiAvPiA6IDxNZW51IGNsYXNzTmFtZT1cInctNiBoLTZcIiAvPn1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFRvb2x0aXBQcm92aWRlcj5cbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtc3RyZXRjaCBnYXAtMSBweC0yIHB5LTRcIj5cbiAgICAgICAgICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eycnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VG9vbHRpcCBrZXk9e2l0ZW0ua2V5fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRvb2x0aXBUcmlnZ2VyIGFzQ2hpbGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIHAtMyB3LWZ1bGwgcm91bmRlZC1sZyB0cmFuc2l0aW9uLXRyYW5zZm9ybSB0cmFuc2Zvcm0gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0ICR7aXNPcGVuID8gJ2hvdmVyOmJnLWdyYXktNzAwIGhvdmVyOnNjYWxlLTEwNScgOiAndGV4dC1ncmF5LTQwMCBob3Zlcjp0ZXh0LWdyYXktMTAwIGhvdmVyOmJnLXppbmMtNTAwJ30gJHtpc09wZW4gPyAnaG92ZXI6c2hhZG93LW1kJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpdGVtLmljb24gY2xhc3NOYW1lPVwiaC02IHctNlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzT3BlbiAmJiA8c3BhbiBjbGFzc05hbWU9XCJtbC00IHRleHQtbGcgZm9udC1tZWRpdW1cIj57aXRlbS5uYW1lfTwvc3Bhbj59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcFRyaWdnZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaXNPcGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUb29sdGlwQ29udGVudCBzaWRlPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1Rvb2x0aXBDb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz4pKX1cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgIDwvVG9vbHRpcFByb3ZpZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1hdXRvIHAtNFwiPlxuICAgICAgICAgICAgICAgIDxNb2RlVG9nZ2xlIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hc2lkZT5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkNvbXB1dGVyIiwiR2xhc3NlcyIsIlB1enpsZSIsIlNldHRpbmdzIiwiVXNlciIsIlVzZXJzIiwiTWVudSIsIlgiLCJUb29sdGlwIiwiVG9vbHRpcENvbnRlbnQiLCJUb29sdGlwUHJvdmlkZXIiLCJUb29sdGlwVHJpZ2dlciIsIkxpbmsiLCJNb2RlVG9nZ2xlIiwidXNlUm91dGVyIiwiU2lkZWJhciIsInNob3ciLCJzZXR0ZXIiLCJyb3V0ZXIiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJtZW51SXRlbXMiLCJuYW1lIiwiaWNvbiIsImtleSIsInJvdXRlIiwiYXNpZGUiLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJuYXYiLCJtYXAiLCJpdGVtIiwiaHJlZiIsImFzQ2hpbGQiLCJzcGFuIiwic2lkZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SideBar.tsx\n"));

/***/ })

});