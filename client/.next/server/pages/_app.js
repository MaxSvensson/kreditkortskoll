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
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\components\\Ui\\CompareBox\\CompareBox.tsx";
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
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer.module.css */ "./src/components/Ui/Footer/Footer.module.css");
/* harmony import */ var _Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Footer_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\components\\Ui\\Footer\\Footer.tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const Footer = () => {
  return __jsx("div", {
    id: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().footer),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 12
    }
  }, __jsx("div", {
    id: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().logo),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "Kreditkortskoll.com")), __jsx("div", {
    id: (_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().links),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }, "Hem"))), __jsx("li", {
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
  }, "Alla kreditkort"))), __jsx("li", {
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
  }, "Artiklar"))), __jsx("li", {
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
  }, "FAQ"))), __jsx("li", {
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
  }, "Legal"))), __jsx("li", {
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
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\components\\Ui\\NavBar\\Navbar.tsx";

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\components\\Ui\\Navigation\\Navigation.tsx";
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
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\context\\State.tsx";
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
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
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\pages\\_app.tsx";
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
    })), __jsx(_context_State__WEBPACK_IMPORTED_MODULE_8__.StateProvider, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }, __jsx(_components_Ui_NavBar_Navbar__WEBPACK_IMPORTED_MODULE_5__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 15
      }
    }), __jsx(Component, _extends({}, pageProps, {
      key: Math.random() * 100,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    })), __jsx(_components_Ui_CompareBox_CompareBox__WEBPACK_IMPORTED_MODULE_4__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    }), __jsx(_components_Ui_Footer_Footer__WEBPACK_IMPORTED_MODULE_10__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
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
	"Navigation": "Navigation_Navigation__17hQ-",
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

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_interopRequireDefault_js-node_modules_next_dist_cl-b31ef0","vendors-node_modules_next_app_js-node_modules_nprogress_nprogress_css-node_modules_next_head_-0a65bf"], function() { return __webpack_exec__("./src/pages/_app.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9Db21wYXJlQm94L0NvbXBhcmVCb3gudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL0Zvb3Rlci9Gb290ZXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL05hdkJhci9OYXZiYXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL05hdmlnYXRpb24vTmF2aWdhdGlvbi50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbnRleHQvU3RhdGUudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9Db21wYXJlQm94L0NvbXBhcmVCb3gubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9Gb290ZXIvRm9vdGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvTmF2QmFyL05hdmJhci5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL05hdmlnYXRpb24vTmF2aWdhdGlvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2lnbm9yZWR8RDpcXEtyZWRpdGtvcnRza29sbFxcQ2xpZW50XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQ29tcGFyZUJveCIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VDb250ZXh0IiwiU3RhdGVDb250ZXh0IiwicmVtb3ZlRnJvbUNvbXBhcmUiLCJTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsImluZGV4IiwiY29tcGFyZUlkcyIsImZpbmRJbmRleCIsIkNhcmQiLCJfaWQiLCJzcGxpY2UiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwic3R5bGVzIiwibWFwIiwiY2FyZCIsImltZyIsIm5hbWUiLCJKU09OIiwic3RyaW5naWZ5IiwiRm9vdGVyIiwiTmF2YmFyIiwiTmF2aWdhdGlvbkJ1dHRvbiIsImlucHV0UmVmIiwidXNlUmVmIiwiY3VycmVudCIsImNoZWNrZWQiLCJjbG9zZU5hdmlnYXRpb24iLCJSb3V0ZXIiLCJjcmVhdGVDb250ZXh0IiwiU3RhdGVQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJjYXJkcyIsIk15QXBwIiwiQXBwIiwicmVuZGVyIiwiTlByb2dyZXNzIiwic2hvd1NwaW5uZXIiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwcm9wcyIsIk1hdGgi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OztBQXRCMEI7O0FBMkI3QiwrREFBZVQsS0FBZixFOzs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWEEsK0Q7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbXBhcmVCb3gubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IENhcmQgYXMgQ3JlZGl0Q2FyZEludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZCc7XHJcbmltcG9ydCB7IFN0YXRlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbnRleHQvU3RhdGUnO1xyXG5cclxuY29uc3QgQ29tcGFyZUJveCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQ8YW55PihTdGF0ZUNvbnRleHQpXHJcblxyXG4gICAgY29uc3QgcmVtb3ZlRnJvbUNvbXBhcmUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gU3RhdGUuY29tcGFyZUlkcy5maW5kSW5kZXgoKENhcmQgOiBDcmVkaXRDYXJkSW50ZXJmYWNlKSA9PiBDYXJkLl9pZClcclxuICAgICAgICBpZihpbmRleCA8IDApIHJldHVybjtcclxuICAgICAgICBTdGF0ZS5jb21wYXJlSWRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgc2V0U3RhdGUoU3RhdGUpXHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhzdGF0ZS5jb21wYXJlSWRzLmxlbmd0aClcclxuICAgIGlmKHN0YXRlLmNvbXBhcmVJZHMubGVuZ3RoIDw9IDApIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tcGFyZUJveH0+XHJcbiAgICAgICAgPGgyPkRpbmEgdmFsZGEga3JlZGl0a29ydDwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkc30+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtzdGF0ZS5jb21wYXJlSWRzLmxlbmd0aCA+IDAgPyA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICB7c3RhdGUuY29tcGFyZUlkcy5tYXAoKGNhcmQgOiBDcmVkaXRDYXJkSW50ZXJmYWNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2FyZC5pbWd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2tvcnQvJHtjYXJkLl9pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT57Y2FyZC5uYW1lfTwvYT4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBvbkNsaWNrPXsoKSA9PiByZW1vdmVGcm9tQ29tcGFyZSgpfSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXMtY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+IDogbnVsbH1cclxuICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uQmFja2dyb3VuZH0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvamFtZm9yP2NhcmRzPSR7SlNPTi5zdHJpbmdpZnkoc3RhdGUuY29tcGFyZUlkcy5tYXAoKENhcmQgOiBDcmVkaXRDYXJkSW50ZXJmYWNlKSA9PiBDYXJkLl9pZCkpfWB9ID5cclxuICAgICAgICAgICAgICAgIDxhIGlkPXtzdHlsZXMuY29tcGFyZUJ0bn0+SsOkbWbDtnIge3N0YXRlLmNvbXBhcmVJZHMubGVuZ3RofXN0IGtyZWRpdGtvcnQ8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG59ICAgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wYXJlQm94O1xyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9vdGVyLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMubG9nb30+XHJcbiAgICAgICAgPHA+S3JlZGl0a29ydHNrb2xsLmNvbTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9e3N0eWxlcy5saW5rc30+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICA8YT5IZW08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgIDxhPkFsbGEga3JlZGl0a29ydDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgPGE+QXJ0aWtsYXI8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgIDxhPkZBUTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgPGE+TGVnYWw8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgIDxhPk9tIG9zczwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IEhhbWJ1cmdlckJ1dHRvbiBmcm9tICcuLi9OYXZpZ2F0aW9uL05hdmlnYXRpb24nO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2YmFyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5OYXZiYXJ9PlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgaWQ9e3N0eWxlcy5sb2dnb30+S3JlZGl0a29ydHNrb2xsLmNvbTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8SGFtYnVyZ2VyQnV0dG9uIC8+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2aWdhdGlvbi5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IE5hdmlnYXRpb25CdXR0b246IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnNvbGUubG9nKGlucHV0UmVmLmN1cnJlbnQ/LmNoZWNrZWQpXHJcblxyXG4gIGNvbnN0IGNsb3NlTmF2aWdhdGlvbiA9ICgpID0+IHtcclxuICAgICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IHtcclxuICAgICAgICBpZighaW5wdXRSZWYuY3VycmVudCkgcmV0dXJuXHJcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5jaGVja2VkID0gZmFsc2VcclxuICAgICAgfSk7IFxyXG4gICAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKCkgPT4ge1xyXG4gICAgICAgIGlmKCFpbnB1dFJlZi5jdXJyZW50KSByZXR1cm5cclxuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICB9KTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9e3N0eWxlcy5OYXZpZ2F0aW9ufT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkNoZWNrYm94fVxyXG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgaWQ9XCJuYXZpLXRvZ2dsZVwiXHJcbiAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwibmF2aS10b2dnbGVcIiBjbGFzc05hbWU9e3N0eWxlcy5OYXZpZ2F0aW9uQnV0dG9ufT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uSWNvbn0+PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uQmFja2dyb3VuZH0+Jm5ic3A7PC9kaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbk5hdn0+XHJcbiAgICAgIDxoMT5LcmVkaXRrb3J0c2tvbGwuY29tPC9oMT5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkxpc3R9PlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25JdGVtfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9rb3J0XCI+XHJcbiAgICAgICAgICAgICAgPGEgb25DbGljaz17Y2xvc2VOYXZpZ2F0aW9ufSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uTGlua30+QWxsYSBrcmVkaXRrb3J0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25JdGVtfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtjbG9zZU5hdmlnYXRpb259IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25MaW5rfT5LcmVkaXRrb3J0cyB0ZXN0ZXQ8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkl0ZW19PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2FydGlrbGFyXCI+XHJcbiAgICAgICAgICAgICAgPGEgb25DbGljaz17Y2xvc2VOYXZpZ2F0aW9ufSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uTGlua30+QXJ0aWtsYXI8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkl0ZW19PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2ZhcVwiPlxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2Nsb3NlTmF2aWdhdGlvbn0gY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkxpbmt9PkZBUTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQnV0dG9uO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NhcmQgYXMgQ3JlZGl0Q2FyZEludGVyZmFjZX0gZnJvbSAnLi4vY2xhc3Nlcy9DcmVkaXRDYXJkJztcclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgY2FyZHM6IENyZWRpdENhcmRJbnRlcmZhY2VbXTtcclxuICBjb21wYXJlSWRzOiBDcmVkaXRDYXJkSW50ZXJmYWNlW107IFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSlcclxuXHJcbmV4cG9ydCBjb25zdCBTdGF0ZVByb3ZpZGVyIDogUmVhY3QuRkMgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8U3RhdGU+KHtcclxuICAgIGNhcmRzOltdLFxyXG4gICAgY29tcGFyZUlkczpbXVxyXG4gIH0pXHJcbiAgcmV0dXJuIDxTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tzdGF0ZSwgc2V0U3RhdGVdfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgPC9TdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbn1cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbi8vIENvbXBvbmVudHNcclxuLy8gaW1wb3J0IE5hdmlnYXRpb25CdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9VaS9OYXZpZ2F0aW9uL05hdmlnYXRpb25CdXR0b24vTmF2aWdhdGlvbkJ1dHRvbic7XHJcbmltcG9ydCBDb21wYXJlQm94IGZyb20gJy4uL2NvbXBvbmVudHMvVWkvQ29tcGFyZUJveC9Db21wYXJlQm94JztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL1VpL05hdkJhci9OYXZiYXInO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7IC8vbnByb2dyZXNzIG1vZHVsZVxyXG5pbXBvcnQgJ25wcm9ncmVzcy9ucHJvZ3Jlc3MuY3NzJztcclxuaW1wb3J0IHsgU3RhdGVQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvU3RhdGUnO1xyXG5cclxuXHJcblxyXG5cclxuLy9Dc3NcclxuaW1wb3J0ICcuLi9nbG9iYWwuY3NzJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvVWkvRm9vdGVyL0Zvb3Rlcic7XHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcDxhbnk+IHtcclxuICByZW5kZXIgKCkge1xyXG4gICAgTlByb2dyZXNzLmNvbmZpZ3VyZSh7IHNob3dTcGlubmVyOiBmYWxzZSB9KTtcclxuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKSk7XHJcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7IFxyXG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xyXG4gICAgXHJcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS44LjIvY3NzL2FsbC5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtb1MzdkpXdiswVWp6QmZRellVaHREWVcrUGoyeWNpREp4cHNLMU9ZUEFZanFUMDg1UXEvMWNxNUZMWEFaUTdBeVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIj48L21ldGE+XHJcbiAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICA8U3RhdGVQcm92aWRlcj5cclxuICAgICAgICAgICAgICA8TmF2YmFyIC8+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGtleT17TWF0aC5yYW5kb20oKSAqIDEwMH0gLz5cclxuICAgICAgICAgICAgICA8Q29tcGFyZUJveCAvPlxyXG4gICAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICAgIDwvU3RhdGVQcm92aWRlcj5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJDb21wYXJlQm94XCI6IFwiQ29tcGFyZUJveF9Db21wYXJlQm94X18zWlMxSlwiLFxuXHRcImJ1dHRvbkJhY2tncm91bmRcIjogXCJDb21wYXJlQm94X2J1dHRvbkJhY2tncm91bmRfXzEzcVJvXCIsXG5cdFwiY2FyZHNcIjogXCJDb21wYXJlQm94X2NhcmRzX18zeDJKVFwiLFxuXHRcImNhcmRcIjogXCJDb21wYXJlQm94X2NhcmRfXzRCRzRaXCIsXG5cdFwidGV4dFwiOiBcIkNvbXBhcmVCb3hfdGV4dF9fM212Y05cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImZvb3RlclwiOiBcIkZvb3Rlcl9mb290ZXJfX1VYWHNZXCIsXG5cdFwibG9nb1wiOiBcIkZvb3Rlcl9sb2dvX18zWE80SlwiLFxuXHRcImxpbmtzXCI6IFwiRm9vdGVyX2xpbmtzX18xZUYxZ1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiTmF2YmFyXCI6IFwiTmF2YmFyX05hdmJhcl9fMjFLWGFcIixcblx0XCJsb2dnb1wiOiBcIk5hdmJhcl9sb2dnb19fMi1aYjNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIk5hdmlnYXRpb25cIjogXCJOYXZpZ2F0aW9uX05hdmlnYXRpb25fXzE3aFEtXCIsXG5cdFwibmF2aWdhdGlvbkNoZWNrYm94XCI6IFwiTmF2aWdhdGlvbl9uYXZpZ2F0aW9uQ2hlY2tib3hfXzNLcmJPXCIsXG5cdFwiTmF2aWdhdGlvbkJ1dHRvblwiOiBcIk5hdmlnYXRpb25fTmF2aWdhdGlvbkJ1dHRvbl9fMTZKYVdcIixcblx0XCJuYXZpZ2F0aW9uQmFja2dyb3VuZFwiOiBcIk5hdmlnYXRpb25fbmF2aWdhdGlvbkJhY2tncm91bmRfXzJ3RXI2XCIsXG5cdFwibmF2aWdhdGlvbk5hdlwiOiBcIk5hdmlnYXRpb25fbmF2aWdhdGlvbk5hdl9fMWFBYTBcIixcblx0XCJuYXZpZ2F0aW9uTGlzdFwiOiBcIk5hdmlnYXRpb25fbmF2aWdhdGlvbkxpc3RfX01YMGhRXCIsXG5cdFwibmF2aWdhdGlvbkl0ZW1cIjogXCJOYXZpZ2F0aW9uX25hdmlnYXRpb25JdGVtX18yb0IwdlwiLFxuXHRcIm5hdmlnYXRpb25MaW5rXCI6IFwiTmF2aWdhdGlvbl9uYXZpZ2F0aW9uTGlua19fRWVQZmZcIixcblx0XCJuYXZpZ2F0aW9uSWNvblwiOiBcIk5hdmlnYXRpb25fbmF2aWdhdGlvbkljb25fXzFTenR0XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=