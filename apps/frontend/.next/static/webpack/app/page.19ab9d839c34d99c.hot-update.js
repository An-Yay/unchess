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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/../../node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/computer.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/puzzle.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/glasses.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/users.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/user.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/settings.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/x.js\");\n/* harmony import */ var _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! __barrel_optimize__?names=Computer,Glasses,Menu,Puzzle,Settings,User,Users,X!=!lucide-react */ \"(app-pages-browser)/../../node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var _ui_ToolTip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/ToolTip */ \"(app-pages-browser)/./src/components/ui/ToolTip.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/../../node_modules/next/dist/api/link.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Sidebar = ()=>{\n    _s();\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const menuItems = [\n        {\n            name: \"Play\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n            key: \"play\"\n        },\n        {\n            name: \"Puzzles\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            key: \"puzzles\"\n        },\n        {\n            name: \"Watch\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n            key: \"watch\"\n        },\n        {\n            name: \"Social\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n            key: \"social\"\n        },\n        {\n            name: \"Profile\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n            key: \"profile\"\n        },\n        {\n            name: \"Settings\",\n            icon: _barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n            key: \"settings\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"fixed inset-y-0 left-0 z-10 \".concat(isOpen ? \"w-64\" : \"w-16\", \" flex flex-col border-r bg-gray-900 text-gray-100 transition-all duration-300 ease-in-out\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"\".concat(isOpen ? \"block\" : \"hidden\", \" text-xl font-bold\"),\n                        children: \"UNChess\"\n                    }, void 0, false, {\n                        fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"p-2 text-gray-100 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700\",\n                        onClick: ()=>setIsOpen(!isOpen),\n                        children: isOpen ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            className: \"w-6 h-6\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Computer_Glasses_Menu_Puzzle_Settings_User_Users_X_lucide_react__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                            className: \"w-6 h-6\"\n                        }, void 0, false, {\n                            fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 49\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_ToolTip__WEBPACK_IMPORTED_MODULE_2__.TooltipProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"flex flex-col items-center gap-4 px-2 py-4\",\n                    children: menuItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_ToolTip__WEBPACK_IMPORTED_MODULE_2__.Tooltip, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_ToolTip__WEBPACK_IMPORTED_MODULE_2__.TooltipTrigger, {\n                                    asChild: true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        href: \"#\",\n                                        className: \"flex items-center w-full p-2 my-2 text-gray-100 rounded-lg hover:bg-gray-700 hover:text-white transition-colors duration-200 ease-in-out\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(item.icon, {\n                                                className: \"h-6 w-6\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                                lineNumber: 35,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"ml-4\",\n                                                children: item.name\n                                            }, void 0, false, {\n                                                fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                                lineNumber: 36,\n                                                columnNumber: 30\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                    lineNumber: 33,\n                                    columnNumber: 15\n                                }, undefined),\n                                !isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_ToolTip__WEBPACK_IMPORTED_MODULE_2__.TooltipContent, {\n                                    side: \"right\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-sm font-medium\",\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, undefined)\n                            ]\n                        }, item.key, true, {\n                            fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-auto p-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModeToggle, {}, void 0, false, {\n                    fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/nilay/unchess/apps/frontend/src/components/SideBar.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"mEi83NlPXQzy/XIDfTYWzOSvaHw=\");\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1NpZGVCYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDd0Q7QUFDRDtBQUMzRDtBQUU3QixNQUFNYyxVQUFVOztJQUNkLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHaEIsK0NBQVFBLENBQUM7SUFFckMsTUFBTWlCLFlBQVk7UUFDaEI7WUFBRUMsTUFBTTtZQUFRQyxNQUFNbEIsOEhBQVFBO1lBQUVtQixLQUFLO1FBQU87UUFDNUM7WUFBRUYsTUFBTTtZQUFXQyxNQUFNaEIsOEhBQU1BO1lBQUVpQixLQUFLO1FBQVU7UUFDaEQ7WUFBRUYsTUFBTTtZQUFTQyxNQUFNakIsOEhBQU9BO1lBQUVrQixLQUFLO1FBQVE7UUFDN0M7WUFBRUYsTUFBTTtZQUFVQyxNQUFNYiw4SEFBS0E7WUFBRWMsS0FBSztRQUFTO1FBQzdDO1lBQUVGLE1BQU07WUFBV0MsTUFBTWQsOEhBQUlBO1lBQUVlLEtBQUs7UUFBVTtRQUM5QztZQUFFRixNQUFNO1lBQVlDLE1BQU1mLDhIQUFRQTtZQUFFZ0IsS0FBSztRQUFXO0tBQ3JEO0lBRUQscUJBQ0UsOERBQUNDO1FBQU1DLFdBQVcsK0JBQXdELE9BQXpCUCxTQUFTLFNBQVMsUUFBTzs7MEJBQ3hFLDhEQUFDUTtnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUFHRixXQUFXLEdBQStCLE9BQTVCUCxTQUFTLFVBQVUsVUFBUztrQ0FBcUI7Ozs7OztrQ0FDbkUsOERBQUNVO3dCQUNDSCxXQUFVO3dCQUNWSSxTQUFTLElBQU1WLFVBQVUsQ0FBQ0Q7a0NBRXpCQSx1QkFBUyw4REFBQ1AsK0hBQUNBOzRCQUFDYyxXQUFVOzs7OztzREFBZSw4REFBQ2YsK0hBQUlBOzRCQUFDZSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHMUQsOERBQUNYLHdEQUFlQTswQkFDZCw0RUFBQ2dCO29CQUFJTCxXQUFVOzhCQUNaTCxVQUFVVyxHQUFHLENBQUMsQ0FBQ0MscUJBQ2QsOERBQUNwQixnREFBT0E7OzhDQUNOLDhEQUFDRyx1REFBY0E7b0NBQUNrQixPQUFPOzhDQUNyQiw0RUFBQ2pCLGlEQUFJQTt3Q0FBQ2tCLE1BQUs7d0NBQUlULFdBQVU7OzBEQUN2Qiw4REFBQ08sS0FBS1YsSUFBSTtnREFBQ0csV0FBVTs7Ozs7OzRDQUNwQlAsd0JBQVUsOERBQUNpQjtnREFBS1YsV0FBVTswREFBUU8sS0FBS1gsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBRy9DLENBQUNILHdCQUNBLDhEQUFDTCx1REFBY0E7b0NBQUN1QixNQUFLOzhDQUNuQiw0RUFBQ0Q7d0NBQUtWLFdBQVU7a0RBQXVCTyxLQUFLWCxJQUFJOzs7Ozs7Ozs7Ozs7MkJBVHhDVyxLQUFLVCxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7MEJBZ0I1Qiw4REFBQ0c7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNZOzs7Ozs7Ozs7Ozs7Ozs7O0FBSVQ7R0EvQ01wQjtLQUFBQTtBQWlETiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9TaWRlQmFyLnRzeD8wY2I3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29tcHV0ZXIsIEdsYXNzZXMsIFB1enpsZSwgU2V0dGluZ3MsIFVzZXIsIFVzZXJzLCBNZW51LCBYIH0gZnJvbSAnbHVjaWRlLXJlYWN0JztcbmltcG9ydCB7IFRvb2x0aXAsIFRvb2x0aXBDb250ZW50LCBUb29sdGlwUHJvdmlkZXIsIFRvb2x0aXBUcmlnZ2VyIH0gZnJvbSAnLi91aS9Ub29sVGlwJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IFNpZGViYXIgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBtZW51SXRlbXMgPSBbXG4gICAgeyBuYW1lOiAnUGxheScsIGljb246IENvbXB1dGVyLCBrZXk6ICdwbGF5JyB9LFxuICAgIHsgbmFtZTogJ1B1enpsZXMnLCBpY29uOiBQdXp6bGUsIGtleTogJ3B1enpsZXMnIH0sXG4gICAgeyBuYW1lOiAnV2F0Y2gnLCBpY29uOiBHbGFzc2VzLCBrZXk6ICd3YXRjaCcgfSxcbiAgICB7IG5hbWU6ICdTb2NpYWwnLCBpY29uOiBVc2Vycywga2V5OiAnc29jaWFsJyB9LFxuICAgIHsgbmFtZTogJ1Byb2ZpbGUnLCBpY29uOiBVc2VyLCBrZXk6ICdwcm9maWxlJyB9LFxuICAgIHsgbmFtZTogJ1NldHRpbmdzJywgaWNvbjogU2V0dGluZ3MsIGtleTogJ3NldHRpbmdzJyB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGFzaWRlIGNsYXNzTmFtZT17YGZpeGVkIGluc2V0LXktMCBsZWZ0LTAgei0xMCAke2lzT3BlbiA/ICd3LTY0JyA6ICd3LTE2J30gZmxleCBmbGV4LWNvbCBib3JkZXItciBiZy1ncmF5LTkwMCB0ZXh0LWdyYXktMTAwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dGB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcC00XCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e2Ake2lzT3BlbiA/ICdibG9jaycgOiAnaGlkZGVuJ30gdGV4dC14bCBmb250LWJvbGRgfT5VTkNoZXNzPC9oMT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiB0ZXh0LWdyYXktMTAwIGJnLWdyYXktODAwIHJvdW5kZWQtbWQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWdyYXktNzAwXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9XG4gICAgICAgID5cbiAgICAgICAgICB7aXNPcGVuID8gPFggY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+IDogPE1lbnUgY2xhc3NOYW1lPVwidy02IGgtNlwiIC8+fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPFRvb2x0aXBQcm92aWRlcj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtNCBweC0yIHB5LTRcIj5cbiAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPFRvb2x0aXAga2V5PXtpdGVtLmtleX0+XG4gICAgICAgICAgICAgIDxUb29sdGlwVHJpZ2dlciBhc0NoaWxkPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIHAtMiBteS0yIHRleHQtZ3JheS0xMDAgcm91bmRlZC1sZyBob3ZlcjpiZy1ncmF5LTcwMCBob3Zlcjp0ZXh0LXdoaXRlIHRyYW5zaXRpb24tY29sb3JzIGR1cmF0aW9uLTIwMCBlYXNlLWluLW91dFwiPlxuICAgICAgICAgICAgICAgICAgPGl0ZW0uaWNvbiBjbGFzc05hbWU9XCJoLTYgdy02XCIgLz5cbiAgICAgICAgICAgICAgICAgIHtpc09wZW4gJiYgPHNwYW4gY2xhc3NOYW1lPVwibWwtNFwiPntpdGVtLm5hbWV9PC9zcGFuPn1cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvVG9vbHRpcFRyaWdnZXI+XG4gICAgICAgICAgICAgIHshaXNPcGVuICYmIChcbiAgICAgICAgICAgICAgICA8VG9vbHRpcENvbnRlbnQgc2lkZT1cInJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+e2l0ZW0ubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwQ29udGVudD5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L1Rvb2x0aXBQcm92aWRlcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtYXV0byBwLTRcIj5cbiAgICAgICAgPE1vZGVUb2dnbGUgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvYXNpZGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQ29tcHV0ZXIiLCJHbGFzc2VzIiwiUHV6emxlIiwiU2V0dGluZ3MiLCJVc2VyIiwiVXNlcnMiLCJNZW51IiwiWCIsIlRvb2x0aXAiLCJUb29sdGlwQ29udGVudCIsIlRvb2x0aXBQcm92aWRlciIsIlRvb2x0aXBUcmlnZ2VyIiwiTGluayIsIlNpZGViYXIiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJtZW51SXRlbXMiLCJuYW1lIiwiaWNvbiIsImtleSIsImFzaWRlIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDEiLCJidXR0b24iLCJvbkNsaWNrIiwibmF2IiwibWFwIiwiaXRlbSIsImFzQ2hpbGQiLCJocmVmIiwic3BhbiIsInNpZGUiLCJNb2RlVG9nZ2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/SideBar.tsx\n"));

/***/ })

});