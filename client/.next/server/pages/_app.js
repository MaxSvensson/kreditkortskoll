(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/components/Ui/CompareBox/CompareBox.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Ui/CompareBox/CompareBox.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CompareBox_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CompareBox.module.css */ "./src/components/Ui/CompareBox/CompareBox.module.css");
/* harmony import */ var _CompareBox_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CompareBox_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_State__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context/State */ "./src/context/State.tsx");
var _jsxFileName = "C:\\Users\\Max\\Desktop\\client\\src\\components\\Ui\\CompareBox\\CompareBox.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





const CompareBox = () => {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_State__WEBPACK_IMPORTED_MODULE_2__.StateContext);

  const removeFromCompare = () => {
    let State = Object.assign({}, state);
    const index = State.compareIds.findIndex(Card => Card._id);
    if (index < 0) return;
    State.compareIds.splice(index, 1);
    setState(State);
  };

  console.log(state.compareIds.length);
  if (state.compareIds.length <= 0) return null;
  return __jsx("div", {
    className: (_CompareBox_module_css__WEBPACK_IMPORTED_MODULE_3___default().CompareBox),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 12
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Dina valda kreditkort"), __jsx("div", {
    className: (_CompareBox_module_css__WEBPACK_IMPORTED_MODULE_3___default().cards),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, state.compareIds.length > 0 ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 48
    }
  }, state.compareIds.map(card => {
    return __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 24
      }
    }, __jsx("div", {
      className: (_CompareBox_module_css__WEBPACK_IMPORTED_MODULE_3___default().card),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 25
      }
    }, __jsx("img", {
      src: card.img,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 25
      }
    }), __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: `/kort/${card._id}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 29
      }
    }, __jsx("a", {
      className: (_CompareBox_module_css__WEBPACK_IMPORTED_MODULE_3___default().text),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 33
      }
    }, card.name)), __jsx("i", {
      onClick: () => removeFromCompare(),
      className: "fas fa-times-circle",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 29
      }
    })));
  })) : null)), __jsx("div", {
    className: (_CompareBox_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonBackground),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: `/jamfor?cards=${JSON.stringify(state.compareIds.map(Card => Card._id))}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("a", {
    id: (_CompareBox_module_css__WEBPACK_IMPORTED_MODULE_3___default().compareBtn),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, "J\xE4mf\xF6r ", state.compareIds.length, "st kreditkort"))));
};

/* harmony default export */ __webpack_exports__["default"] = (CompareBox);

/***/ }),

/***/ "./src/components/Ui/Footer/Footer.tsx":
/*!*********************************************!*\
  !*** ./src/components/Ui/Footer/Footer.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer.module.css */ "./src/components/Ui/Footer/Footer.module.css");
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Max\\Desktop\\client\\src\\components\\Ui\\Footer\\Footer.tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




const Footer = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  if (router.pathname === "/Redirect") return null;
  return __jsx("div", {
    id: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 12
    }
  }, __jsx("div", {
    id: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().logo),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "Kreditkortskoll.com")), __jsx("div", {
    id: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().links),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 15
    }
  }, "Hem"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, "Alla kreditkort"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, "Artiklar"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, "FAQ"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "Legal"))), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, "Om oss"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Ui/NavBar/Navbar.tsx":
/*!*********************************************!*\
  !*** ./src/components/Ui/NavBar/Navbar.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Navigation/Navigation */ "./src/components/Ui/Navigation/Navigation.tsx");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar.module.css */ "./src/components/Ui/NavBar/Navbar.module.css");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Max\\Desktop\\client\\src\\components\\Ui\\NavBar\\Navbar.tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




const Navbar = () => {
  return __jsx("div", {
    id: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().Navbar),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 12
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx("a", {
    id: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default().loggo),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, "Kreditkortskoll.com")), __jsx(_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/Ui/Navigation/Navigation.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Ui/Navigation/Navigation.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navigation.module.css */ "./src/components/Ui/Navigation/Navigation.module.css");
/* harmony import */ var _Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Max\\Desktop\\client\\src\\components\\Ui\\Navigation\\Navigation.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





const NavigationButton = () => {
  var _inputRef$current;

  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  console.log((_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.checked);

  const closeNavigation = () => {
    next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeComplete', () => {
      if (!inputRef.current) return;
      inputRef.current.checked = false;
    });
    next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeError', () => {
      if (!inputRef.current) return;
      inputRef.current.checked = false;
    });
  };

  return __jsx("div", {
    id: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().Navigation),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("input", {
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationCheckbox),
    type: "checkbox",
    id: "navi-toggle",
    ref: inputRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx("label", {
    htmlFor: "navi-toggle",
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().NavigationButton),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationIcon),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationBackground),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "\xA0"), __jsx("nav", {
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationNav),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, "Kreditkortskoll.com"), __jsx("ul", {
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationList),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationItem),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/kort",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("a", {
    onClick: closeNavigation,
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationLink),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, "Alla kreditkort"))), __jsx("li", {
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationItem),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("a", {
    onClick: closeNavigation,
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationLink),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, "Kreditkorts testet"))), __jsx("li", {
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationItem),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/artiklar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("a", {
    onClick: closeNavigation,
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationLink),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, "Artiklar"))), __jsx("li", {
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationItem),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/faq",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("a", {
    onClick: closeNavigation,
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationLink),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, "FAQ"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavigationButton);

/***/ }),

/***/ "./src/context/State.tsx":
/*!*******************************!*\
  !*** ./src/context/State.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateContext": function() { return /* binding */ StateContext; },
/* harmony export */   "StateProvider": function() { return /* binding */ StateProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\Max\\Desktop\\client\\src\\context\\State.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

const StateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const StateProvider = ({
  children
}) => {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    cards: [],
    compareIds: []
  });
  return __jsx(StateContext.Provider, {
    value: [state, setState],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 10
    }
  }, children);
};

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Ui_CompareBox_CompareBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Ui/CompareBox/CompareBox */ "./src/components/Ui/CompareBox/CompareBox.tsx");
/* harmony import */ var _components_Ui_NavBar_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Ui/NavBar/Navbar */ "./src/components/Ui/NavBar/Navbar.tsx");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _context_State__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context/State */ "./src/context/State.tsx");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../global.css */ "./src/global.css");
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_global_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Ui_Footer_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Ui/Footer/Footer */ "./src/components/Ui/Footer/Footer.tsx");
var _jsxFileName = "C:\\Users\\Max\\Desktop\\client\\src\\pages\\_app.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




 // Components
// import NavigationButton from '../components/Ui/Navigation/NavigationButton/NavigationButton';



 //nprogress module


 //Css




class MyApp extends (next_app__WEBPACK_IMPORTED_MODULE_1___default()) {
  render() {
    nprogress__WEBPACK_IMPORTED_MODULE_6___default().configure({
      showSpinner: false
    });
    next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeStart', () => nprogress__WEBPACK_IMPORTED_MODULE_6___default().start());
    next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeComplete', () => nprogress__WEBPACK_IMPORTED_MODULE_6___default().done());
    next_router__WEBPACK_IMPORTED_MODULE_3___default().events.on('routeChangeError', () => nprogress__WEBPACK_IMPORTED_MODULE_6___default().done());
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 7
      }
    }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 11
      }
    }, __jsx("link", {
      rel: "stylesheet",
      href: "https://use.fontawesome.com/releases/v5.8.2/css/all.css",
      integrity: "sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay",
      crossOrigin: "anonymous",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 15
      }
    }), __jsx("link", {
      rel: "shortcut icon",
      href: "/public/favicon.ico",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }
    })), __jsx(_context_State__WEBPACK_IMPORTED_MODULE_8__.StateProvider, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }, __jsx(_components_Ui_NavBar_Navbar__WEBPACK_IMPORTED_MODULE_5__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    }), __jsx(Component, _extends({}, pageProps, {
      key: Math.random() * 100,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }
    })), __jsx(_components_Ui_CompareBox_CompareBox__WEBPACK_IMPORTED_MODULE_4__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 15
      }
    }), __jsx(_components_Ui_Footer_Footer__WEBPACK_IMPORTED_MODULE_10__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 15
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/components/Ui/CompareBox/CompareBox.module.css":
/*!************************************************************!*\
  !*** ./src/components/Ui/CompareBox/CompareBox.module.css ***!
  \************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"CompareBox": "CompareBox_CompareBox__3ZS1J",
	"buttonBackground": "CompareBox_buttonBackground__13qRo",
	"cards": "CompareBox_cards__3x2JT",
	"card": "CompareBox_card__4BG4Z",
	"text": "CompareBox_text__3mvcN"
};


/***/ }),

/***/ "./src/components/Ui/Footer/Footer.module.css":
/*!****************************************************!*\
  !*** ./src/components/Ui/Footer/Footer.module.css ***!
  \****************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"footer": "Footer_footer__UXXsY",
	"logo": "Footer_logo__3XO4J",
	"links": "Footer_links__1eF1g"
};


/***/ }),

/***/ "./src/components/Ui/NavBar/Navbar.module.css":
/*!****************************************************!*\
  !*** ./src/components/Ui/NavBar/Navbar.module.css ***!
  \****************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"Navbar": "Navbar_Navbar__21KXa",
	"loggo": "Navbar_loggo__2-Zb3"
};


/***/ }),

/***/ "./src/components/Ui/Navigation/Navigation.module.css":
/*!************************************************************!*\
  !*** ./src/components/Ui/Navigation/Navigation.module.css ***!
  \************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"navigationCheckbox": "Navigation_navigationCheckbox__3KrbO",
	"NavigationButton": "Navigation_NavigationButton__16JaW",
	"navigationBackground": "Navigation_navigationBackground__2wEr6",
	"navigationNav": "Navigation_navigationNav__1aAa0",
	"navigationList": "Navigation_navigationList__MX0hQ",
	"navigationItem": "Navigation_navigationItem__2oB0v",
	"navigationLink": "Navigation_navigationLink__EePff",
	"navigationIcon": "Navigation_navigationIcon__1Sztt"
};


/***/ }),

/***/ "./src/global.css":
/*!************************!*\
  !*** ./src/global.css ***!
  \************************/
/***/ (function() {



/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","vendors-node_modules_next_app_js-node_modules_nprogress_nprogress_css"], function() { return __webpack_exec__("./src/pages/_app.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9Db21wYXJlQm94L0NvbXBhcmVCb3gudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL0Zvb3Rlci9Gb290ZXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL05hdkJhci9OYXZiYXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL05hdmlnYXRpb24vTmF2aWdhdGlvbi50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbnRleHQvU3RhdGUudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9Db21wYXJlQm94L0NvbXBhcmVCb3gubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9Gb290ZXIvRm9vdGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvTmF2QmFyL05hdmJhci5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL05hdmlnYXRpb24vTmF2aWdhdGlvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwibnByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9pZ25vcmVkfEM6XFxVc2Vyc1xcTWF4XFxEZXNrdG9wXFxjbGllbnRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJDb21wYXJlQm94Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZUNvbnRleHQiLCJTdGF0ZUNvbnRleHQiLCJyZW1vdmVGcm9tQ29tcGFyZSIsIlN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5kZXgiLCJjb21wYXJlSWRzIiwiZmluZEluZGV4IiwiQ2FyZCIsIl9pZCIsInNwbGljZSIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJzdHlsZXMiLCJtYXAiLCJjYXJkIiwiaW1nIiwibmFtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJGb290ZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwYXRobmFtZSIsIk5hdmJhciIsIk5hdmlnYXRpb25CdXR0b24iLCJpbnB1dFJlZiIsInVzZVJlZiIsImN1cnJlbnQiLCJjaGVja2VkIiwiY2xvc2VOYXZpZ2F0aW9uIiwiUm91dGVyIiwiY3JlYXRlQ29udGV4dCIsIlN0YXRlUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiY2FyZHMiLCJNeUFwcCIsIkFwcCIsInJlbmRlciIsIk5Qcm9ncmVzcyIsInNob3dTcGlubmVyIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicHJvcHMiLCJNYXRoIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLFVBQVUsR0FBRyxNQUFNO0FBRXJCLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsaURBQVUsQ0FBTUMsd0RBQU4sQ0FBcEM7O0FBRUEsUUFBTUMsaUJBQWlCLEdBQUcsTUFBTTtBQUM1QixRQUFJQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JQLEtBQWxCLENBQVo7QUFDQSxVQUFNUSxLQUFLLEdBQUdILEtBQUssQ0FBQ0ksVUFBTixDQUFpQkMsU0FBakIsQ0FBNEJDLElBQUQsSUFBZ0NBLElBQUksQ0FBQ0MsR0FBaEUsQ0FBZDtBQUNBLFFBQUdKLEtBQUssR0FBRyxDQUFYLEVBQWM7QUFDZEgsU0FBSyxDQUFDSSxVQUFOLENBQWlCSSxNQUFqQixDQUF3QkwsS0FBeEIsRUFBK0IsQ0FBL0I7QUFDQVAsWUFBUSxDQUFDSSxLQUFELENBQVI7QUFDSCxHQU5EOztBQU9BUyxTQUFPLENBQUNDLEdBQVIsQ0FBWWYsS0FBSyxDQUFDUyxVQUFOLENBQWlCTyxNQUE3QjtBQUNBLE1BQUdoQixLQUFLLENBQUNTLFVBQU4sQ0FBaUJPLE1BQWpCLElBQTJCLENBQTlCLEVBQWlDLE9BQU8sSUFBUDtBQUNqQyxTQUFPO0FBQUssYUFBUyxFQUFFQywwRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREcsRUFFSDtBQUFLLGFBQVMsRUFBRUEscUVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBRU0sTUFBQyxTQUFELGVBQWVELFNBQWY7QUFBMEIsU0FBRyxFQUFFRSxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUZOLEVBR0ksTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEosRUFJSSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKSixDQU5KLENBREY7QUFlRDs7QUF2QjBCOztBQTRCN0IsK0RBQWVULEtBQWYsRTs7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29tcGFyZUJveC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQ2FyZCBhcyBDcmVkaXRDYXJkSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9DcmVkaXRDYXJkJztcclxuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dC9TdGF0ZSc7XHJcblxyXG5jb25zdCBDb21wYXJlQm94ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dDxhbnk+KFN0YXRlQ29udGV4dClcclxuXHJcbiAgICBjb25zdCByZW1vdmVGcm9tQ29tcGFyZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgU3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBTdGF0ZS5jb21wYXJlSWRzLmZpbmRJbmRleCgoQ2FyZCA6IENyZWRpdENhcmRJbnRlcmZhY2UpID0+IENhcmQuX2lkKVxyXG4gICAgICAgIGlmKGluZGV4IDwgMCkgcmV0dXJuO1xyXG4gICAgICAgIFN0YXRlLmNvbXBhcmVJZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBzZXRTdGF0ZShTdGF0ZSlcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHN0YXRlLmNvbXBhcmVJZHMubGVuZ3RoKVxyXG4gICAgaWYoc3RhdGUuY29tcGFyZUlkcy5sZW5ndGggPD0gMCkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db21wYXJlQm94fT5cclxuICAgICAgICA8aDI+RGluYSB2YWxkYSBrcmVkaXRrb3J0PC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRzfT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge3N0YXRlLmNvbXBhcmVJZHMubGVuZ3RoID4gMCA/IDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIHtzdGF0ZS5jb21wYXJlSWRzLm1hcCgoY2FyZCA6IENyZWRpdENhcmRJbnRlcmZhY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjYXJkLmltZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ava29ydC8ke2NhcmQuX2lkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PntjYXJkLm5hbWV9PC9hPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9eygpID0+IHJlbW92ZUZyb21Db21wYXJlKCl9IGNsYXNzTmFtZT1cImZhcyBmYS10aW1lcy1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4gOiBudWxsfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25CYWNrZ3JvdW5kfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9qYW1mb3I/Y2FyZHM9JHtKU09OLnN0cmluZ2lmeShzdGF0ZS5jb21wYXJlSWRzLm1hcCgoQ2FyZCA6IENyZWRpdENhcmRJbnRlcmZhY2UpID0+IENhcmQuX2lkKSl9YH0gPlxyXG4gICAgICAgICAgICAgICAgPGEgaWQ9e3N0eWxlcy5jb21wYXJlQnRufT5Kw6RtZsO2ciB7c3RhdGUuY29tcGFyZUlkcy5sZW5ndGh9c3Qga3JlZGl0a29ydDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn0gICBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBhcmVCb3g7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb290ZXIubW9kdWxlLmNzcyc7XHJcblxyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBpZihyb3V0ZXIucGF0aG5hbWUgPT09IFwiL1JlZGlyZWN0XCIpIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMubG9nb30+XHJcbiAgICAgICAgPHA+S3JlZGl0a29ydHNrb2xsLmNvbTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9e3N0eWxlcy5saW5rc30+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICA8YT5IZW08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgIDxhPkFsbGEga3JlZGl0a29ydDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgPGE+QXJ0aWtsYXI8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgIDxhPkZBUTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgPGE+TGVnYWw8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgIDxhPk9tIG9zczwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IEhhbWJ1cmdlckJ1dHRvbiBmcm9tICcuLi9OYXZpZ2F0aW9uL05hdmlnYXRpb24nO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2YmFyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5OYXZiYXJ9PlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgaWQ9e3N0eWxlcy5sb2dnb30+S3JlZGl0a29ydHNrb2xsLmNvbTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8SGFtYnVyZ2VyQnV0dG9uIC8+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2aWdhdGlvbi5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IE5hdmlnYXRpb25CdXR0b246IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnNvbGUubG9nKGlucHV0UmVmLmN1cnJlbnQ/LmNoZWNrZWQpXHJcblxyXG4gIGNvbnN0IGNsb3NlTmF2aWdhdGlvbiA9ICgpID0+IHtcclxuICAgICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IHtcclxuICAgICAgICBpZighaW5wdXRSZWYuY3VycmVudCkgcmV0dXJuXHJcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5jaGVja2VkID0gZmFsc2VcclxuICAgICAgfSk7IFxyXG4gICAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKCkgPT4ge1xyXG4gICAgICAgIGlmKCFpbnB1dFJlZi5jdXJyZW50KSByZXR1cm5cclxuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9e3N0eWxlcy5OYXZpZ2F0aW9ufT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkNoZWNrYm94fVxyXG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgaWQ9XCJuYXZpLXRvZ2dsZVwiXHJcbiAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwibmF2aS10b2dnbGVcIiBjbGFzc05hbWU9e3N0eWxlcy5OYXZpZ2F0aW9uQnV0dG9ufT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uSWNvbn0+PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uQmFja2dyb3VuZH0+Jm5ic3A7PC9kaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbk5hdn0+XHJcbiAgICAgIDxoMT5LcmVkaXRrb3J0c2tvbGwuY29tPC9oMT5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkxpc3R9PlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25JdGVtfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9rb3J0XCI+XHJcbiAgICAgICAgICAgICAgPGEgb25DbGljaz17Y2xvc2VOYXZpZ2F0aW9ufSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uTGlua30+QWxsYSBrcmVkaXRrb3J0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25JdGVtfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtjbG9zZU5hdmlnYXRpb259IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25MaW5rfT5LcmVkaXRrb3J0cyB0ZXN0ZXQ8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkl0ZW19PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2FydGlrbGFyXCI+XHJcbiAgICAgICAgICAgICAgPGEgb25DbGljaz17Y2xvc2VOYXZpZ2F0aW9ufSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uTGlua30+QXJ0aWtsYXI8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkl0ZW19PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2ZhcVwiPlxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2Nsb3NlTmF2aWdhdGlvbn0gY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkxpbmt9PkZBUTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQnV0dG9uO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NhcmQgYXMgQ3JlZGl0Q2FyZEludGVyZmFjZX0gZnJvbSAnLi4vY2xhc3Nlcy9DcmVkaXRDYXJkJztcclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgY2FyZHM6IENyZWRpdENhcmRJbnRlcmZhY2VbXTtcclxuICBjb21wYXJlSWRzOiBDcmVkaXRDYXJkSW50ZXJmYWNlW107IFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSlcclxuXHJcbmV4cG9ydCBjb25zdCBTdGF0ZVByb3ZpZGVyIDogUmVhY3QuRkMgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8U3RhdGU+KHtcclxuICAgIGNhcmRzOltdLFxyXG4gICAgY29tcGFyZUlkczpbXVxyXG4gIH0pXHJcbiAgcmV0dXJuIDxTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tzdGF0ZSwgc2V0U3RhdGVdfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgPC9TdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbn1cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbi8vIENvbXBvbmVudHNcclxuLy8gaW1wb3J0IE5hdmlnYXRpb25CdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9VaS9OYXZpZ2F0aW9uL05hdmlnYXRpb25CdXR0b24vTmF2aWdhdGlvbkJ1dHRvbic7XHJcbmltcG9ydCBDb21wYXJlQm94IGZyb20gJy4uL2NvbXBvbmVudHMvVWkvQ29tcGFyZUJveC9Db21wYXJlQm94JztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL1VpL05hdkJhci9OYXZiYXInO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7IC8vbnByb2dyZXNzIG1vZHVsZVxyXG5pbXBvcnQgJ25wcm9ncmVzcy9ucHJvZ3Jlc3MuY3NzJztcclxuaW1wb3J0IHsgU3RhdGVQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvU3RhdGUnO1xyXG5cclxuXHJcblxyXG5cclxuLy9Dc3NcclxuaW1wb3J0ICcuLi9nbG9iYWwuY3NzJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvVWkvRm9vdGVyL0Zvb3Rlcic7XHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcDxhbnk+IHtcclxuICByZW5kZXIgKCkge1xyXG4gICAgTlByb2dyZXNzLmNvbmZpZ3VyZSh7IHNob3dTcGlubmVyOiBmYWxzZSB9KTtcclxuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKSk7XHJcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7IFxyXG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xyXG4gICAgXHJcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS44LjIvY3NzL2FsbC5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtb1MzdkpXdiswVWp6QmZRellVaHREWVcrUGoyeWNpREp4cHNLMU9ZUEFZanFUMDg1UXEvMWNxNUZMWEFaUTdBeVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIj48L21ldGE+XHJcbiAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvcHVibGljL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxTdGF0ZVByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtNYXRoLnJhbmRvbSgpICogMTAwfSAvPlxyXG4gICAgICAgICAgICAgIDxDb21wYXJlQm94IC8+XHJcbiAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgPC9TdGF0ZVByb3ZpZGVyPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcCIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkNvbXBhcmVCb3hcIjogXCJDb21wYXJlQm94X0NvbXBhcmVCb3hfXzNaUzFKXCIsXG5cdFwiYnV0dG9uQmFja2dyb3VuZFwiOiBcIkNvbXBhcmVCb3hfYnV0dG9uQmFja2dyb3VuZF9fMTNxUm9cIixcblx0XCJjYXJkc1wiOiBcIkNvbXBhcmVCb3hfY2FyZHNfXzN4MkpUXCIsXG5cdFwiY2FyZFwiOiBcIkNvbXBhcmVCb3hfY2FyZF9fNEJHNFpcIixcblx0XCJ0ZXh0XCI6IFwiQ29tcGFyZUJveF90ZXh0X18zbXZjTlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiRm9vdGVyX2Zvb3Rlcl9fVVhYc1lcIixcblx0XCJsb2dvXCI6IFwiRm9vdGVyX2xvZ29fXzNYTzRKXCIsXG5cdFwibGlua3NcIjogXCJGb290ZXJfbGlua3NfXzFlRjFnXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJOYXZiYXJcIjogXCJOYXZiYXJfTmF2YmFyX18yMUtYYVwiLFxuXHRcImxvZ2dvXCI6IFwiTmF2YmFyX2xvZ2dvX18yLVpiM1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2aWdhdGlvbkNoZWNrYm94XCI6IFwiTmF2aWdhdGlvbl9uYXZpZ2F0aW9uQ2hlY2tib3hfXzNLcmJPXCIsXG5cdFwiTmF2aWdhdGlvbkJ1dHRvblwiOiBcIk5hdmlnYXRpb25fTmF2aWdhdGlvbkJ1dHRvbl9fMTZKYVdcIixcblx0XCJuYXZpZ2F0aW9uQmFja2dyb3VuZFwiOiBcIk5hdmlnYXRpb25fbmF2aWdhdGlvbkJhY2tncm91bmRfXzJ3RXI2XCIsXG5cdFwibmF2aWdhdGlvbk5hdlwiOiBcIk5hdmlnYXRpb25fbmF2aWdhdGlvbk5hdl9fMWFBYTBcIixcblx0XCJuYXZpZ2F0aW9uTGlzdFwiOiBcIk5hdmlnYXRpb25fbmF2aWdhdGlvbkxpc3RfX01YMGhRXCIsXG5cdFwibmF2aWdhdGlvbkl0ZW1cIjogXCJOYXZpZ2F0aW9uX25hdmlnYXRpb25JdGVtX18yb0IwdlwiLFxuXHRcIm5hdmlnYXRpb25MaW5rXCI6IFwiTmF2aWdhdGlvbl9uYXZpZ2F0aW9uTGlua19fRWVQZmZcIixcblx0XCJuYXZpZ2F0aW9uSWNvblwiOiBcIk5hdmlnYXRpb25fbmF2aWdhdGlvbkljb25fXzFTenR0XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==