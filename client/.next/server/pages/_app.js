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
var _jsxFileName = "D:\\kredit\\client\\src\\components\\Ui\\CompareBox\\CompareBox.tsx";
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
var _jsxFileName = "D:\\kredit\\client\\src\\components\\Ui\\Footer\\Footer.tsx";

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
var _jsxFileName = "D:\\kredit\\client\\src\\components\\Ui\\NavBar\\Navbar.tsx";

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
var _jsxFileName = "D:\\kredit\\client\\src\\components\\Ui\\Navigation\\Navigation.tsx";
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
var _jsxFileName = "D:\\kredit\\client\\src\\context\\State.tsx";
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
var _jsxFileName = "D:\\kredit\\client\\src\\pages\\_app.tsx";
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
        lineNumber: 29,
        columnNumber: 7
      }
    }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
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
        lineNumber: 31,
        columnNumber: 15
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 15
      }
    })), __jsx(_context_State__WEBPACK_IMPORTED_MODULE_8__.StateProvider, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }
    }, __jsx(_components_Ui_NavBar_Navbar__WEBPACK_IMPORTED_MODULE_5__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 15
      }
    }), __jsx(Component, _extends({}, pageProps, {
      key: Math.random() * 100,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    })), __jsx(_components_Ui_CompareBox_CompareBox__WEBPACK_IMPORTED_MODULE_4__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 15
      }
    }), __jsx(_components_Ui_Footer_Footer__WEBPACK_IMPORTED_MODULE_10__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9Db21wYXJlQm94L0NvbXBhcmVCb3gudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL0Zvb3Rlci9Gb290ZXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL05hdkJhci9OYXZiYXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL05hdmlnYXRpb24vTmF2aWdhdGlvbi50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbnRleHQvU3RhdGUudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9wYWdlcy9fYXBwLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9Db21wYXJlQm94L0NvbXBhcmVCb3gubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9Gb290ZXIvRm9vdGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvTmF2QmFyL05hdmJhci5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL05hdmlnYXRpb24vTmF2aWdhdGlvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwibnByb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9pZ25vcmVkfEQ6XFxrcmVkaXRcXGNsaWVudFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkNvbXBhcmVCb3giLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlQ29udGV4dCIsIlN0YXRlQ29udGV4dCIsInJlbW92ZUZyb21Db21wYXJlIiwiU3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJpbmRleCIsImNvbXBhcmVJZHMiLCJmaW5kSW5kZXgiLCJDYXJkIiwiX2lkIiwic3BsaWNlIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInN0eWxlcyIsIm1hcCIsImNhcmQiLCJpbWciLCJuYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsIkZvb3RlciIsIk5hdmJhciIsIk5hdmlnYXRpb25CdXR0b24iLCJpbnB1dFJlZiIsInVzZVJlZiIsImN1cnJlbnQiLCJjaGVja2VkIiwiY2xvc2VOYXZpZ2F0aW9uIiwiUm91dGVyIiwiY3JlYXRlQ29udGV4dCIsIlN0YXRlUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiY2FyZHMiLCJNeUFwcCIsIkFwcCIsInJlbmRlciIsIk5Qcm9ncmVzcyIsInNob3dTcGlubmVyIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicHJvcHMiLCJNYXRoIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLE1BQU1BLFVBQVUsR0FBRyxNQUFNO0FBRXJCLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsaURBQVUsQ0FBTUMsd0RBQU4sQ0FBcEM7O0FBRUEsUUFBTUMsaUJBQWlCLEdBQUcsTUFBTTtBQUM1QixRQUFJQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JQLEtBQWxCLENBQVo7QUFDQSxVQUFNUSxLQUFLLEdBQUdILEtBQUssQ0FBQ0ksVUFBTixDQUFpQkMsU0FBakIsQ0FBNEJDLElBQUQsSUFBZ0NBLElBQUksQ0FBQ0MsR0FBaEUsQ0FBZDtBQUNBLFFBQUdKLEtBQUssR0FBRyxDQUFYLEVBQWM7QUFDZEgsU0FBSyxDQUFDSSxVQUFOLENBQWlCSSxNQUFqQixDQUF3QkwsS0FBeEIsRUFBK0IsQ0FBL0I7QUFDQVAsWUFBUSxDQUFDSSxLQUFELENBQVI7QUFDSCxHQU5EOztBQU9BUyxTQUFPLENBQUNDLEdBQVIsQ0FBWWYsS0FBSyxDQUFDUyxVQUFOLENBQWlCTyxNQUE3QjtBQUNBLE1BQUdoQixLQUFLLENBQUNTLFVBQU4sQ0FBaUJPLE1BQWpCLElBQTJCLENBQTlCLEVBQWlDLE9BQU8sSUFBUDtBQUNqQyxTQUFPO0FBQUssYUFBUyxFQUFFQywwRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREcsRUFFSDtBQUFLLGFBQVMsRUFBRUEscUVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtB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RUFJSSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKSixDQUxKLENBREY7QUFjRDs7QUFyQjBCOztBQTBCN0IsK0RBQWVULEtBQWYsRTs7Ozs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db21wYXJlQm94Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBDYXJkIGFzIENyZWRpdENhcmRJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9jbGFzc2VzL0NyZWRpdENhcmQnO1xyXG5pbXBvcnQgeyBTdGF0ZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0L1N0YXRlJztcclxuXHJcbmNvbnN0IENvbXBhcmVCb3ggPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0PGFueT4oU3RhdGVDb250ZXh0KVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZUZyb21Db21wYXJlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IFN0YXRlLmNvbXBhcmVJZHMuZmluZEluZGV4KChDYXJkIDogQ3JlZGl0Q2FyZEludGVyZmFjZSkgPT4gQ2FyZC5faWQpXHJcbiAgICAgICAgaWYoaW5kZXggPCAwKSByZXR1cm47XHJcbiAgICAgICAgU3RhdGUuY29tcGFyZUlkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHNldFN0YXRlKFN0YXRlKVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coc3RhdGUuY29tcGFyZUlkcy5sZW5ndGgpXHJcbiAgICBpZihzdGF0ZS5jb21wYXJlSWRzLmxlbmd0aCA8PSAwKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkNvbXBhcmVCb3h9PlxyXG4gICAgICAgIDxoMj5EaW5hIHZhbGRhIGtyZWRpdGtvcnQ8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZHN9PlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICB7c3RhdGUuY29tcGFyZUlkcy5sZW5ndGggPiAwID8gPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAge3N0YXRlLmNvbXBhcmVJZHMubWFwKChjYXJkIDogQ3JlZGl0Q2FyZEludGVyZmFjZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NhcmQuaW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9rb3J0LyR7Y2FyZC5faWR9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+e2NhcmQubmFtZX08L2E+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgb25DbGljaz17KCkgPT4gcmVtb3ZlRnJvbUNvbXBhcmUoKX0gY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzLWNpcmNsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiA6IG51bGx9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkJhY2tncm91bmR9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2phbWZvcj9jYXJkcz0ke0pTT04uc3RyaW5naWZ5KHN0YXRlLmNvbXBhcmVJZHMubWFwKChDYXJkIDogQ3JlZGl0Q2FyZEludGVyZmFjZSkgPT4gQ2FyZC5faWQpKX1gfSA+XHJcbiAgICAgICAgICAgICAgICA8YSBpZD17c3R5bGVzLmNvbXBhcmVCdG59PkrDpG1mw7ZyIHtzdGF0ZS5jb21wYXJlSWRzLmxlbmd0aH1zdCBrcmVkaXRrb3J0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufSAgIFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcGFyZUJveDtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0Zvb3Rlci5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGlkPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgPGRpdiBpZD17c3R5bGVzLmxvZ299PlxyXG4gICAgICAgIDxwPktyZWRpdGtvcnRza29sbC5jb208L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMubGlua3N9PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgPGE+SGVtPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICA8YT5BbGxhIGtyZWRpdGtvcnQ8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgIDxhPkFydGlrbGFyPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICA8YT5GQVE8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgIDxhPkxlZ2FsPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICA8YT5PbSBvc3M8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBIYW1idXJnZXJCdXR0b24gZnJvbSAnLi4vTmF2aWdhdGlvbi9OYXZpZ2F0aW9uJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdmJhci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGlkPXtzdHlsZXMuTmF2YmFyfT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhIGlkPXtzdHlsZXMubG9nZ299PktyZWRpdGtvcnRza29sbC5jb208L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPEhhbWJ1cmdlckJ1dHRvbiAvPlxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdmlnYXRpb24ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBOYXZpZ2F0aW9uQnV0dG9uOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBpbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcclxuICBjb25zb2xlLmxvZyhpbnB1dFJlZi5jdXJyZW50Py5jaGVja2VkKVxyXG5cclxuICBjb25zdCBjbG9zZU5hdmlnYXRpb24gPSAoKSA9PiB7XHJcbiAgICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYoIWlucHV0UmVmLmN1cnJlbnQpIHJldHVyblxyXG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgIH0pOyBcclxuICAgICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IHtcclxuICAgICAgICBpZighaW5wdXRSZWYuY3VycmVudCkgcmV0dXJuXHJcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5jaGVja2VkID0gZmFsc2VcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPXtzdHlsZXMuTmF2aWdhdGlvbn0+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25DaGVja2JveH1cclxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgIGlkPVwibmF2aS10b2dnbGVcIlxyXG4gICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hdmktdG9nZ2xlXCIgY2xhc3NOYW1lPXtzdHlsZXMuTmF2aWdhdGlvbkJ1dHRvbn0+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkljb259Pjwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkJhY2tncm91bmR9PiZuYnNwOzwvZGl2PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25OYXZ9PlxyXG4gICAgICA8aDE+S3JlZGl0a29ydHNrb2xsLmNvbTwvaDE+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25MaXN0fT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uSXRlbX0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIva29ydFwiPlxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2Nsb3NlTmF2aWdhdGlvbn0gY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkxpbmt9PkFsbGEga3JlZGl0a29ydDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uSXRlbX0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGEgb25DbGljaz17Y2xvc2VOYXZpZ2F0aW9ufSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uTGlua30+S3JlZGl0a29ydHMgdGVzdGV0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25JdGVtfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hcnRpa2xhclwiPlxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2Nsb3NlTmF2aWdhdGlvbn0gY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkxpbmt9PkFydGlrbGFyPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25JdGVtfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mYXFcIj5cclxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtjbG9zZU5hdmlnYXRpb259IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25MaW5rfT5GQVE8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkJ1dHRvbjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIGNyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDYXJkIGFzIENyZWRpdENhcmRJbnRlcmZhY2V9IGZyb20gJy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZCc7XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gIGNhcmRzOiBDcmVkaXRDYXJkSW50ZXJmYWNlW107XHJcbiAgY29tcGFyZUlkczogQ3JlZGl0Q2FyZEludGVyZmFjZVtdOyBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pXHJcblxyXG5leHBvcnQgY29uc3QgU3RhdGVQcm92aWRlciA6IFJlYWN0LkZDID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPFN0YXRlPih7XHJcbiAgICBjYXJkczpbXSxcclxuICAgIGNvbXBhcmVJZHM6W11cclxuICB9KVxyXG4gIHJldHVybiA8U3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbc3RhdGUsIHNldFN0YXRlXX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gIDwvU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG59XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbi8vIGltcG9ydCBOYXZpZ2F0aW9uQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvVWkvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uQnV0dG9uL05hdmlnYXRpb25CdXR0b24nO1xyXG5pbXBvcnQgQ29tcGFyZUJveCBmcm9tICcuLi9jb21wb25lbnRzL1VpL0NvbXBhcmVCb3gvQ29tcGFyZUJveCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9VaS9OYXZCYXIvTmF2YmFyJztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnOyAvL25wcm9ncmVzcyBtb2R1bGVcclxuaW1wb3J0ICducHJvZ3Jlc3MvbnByb2dyZXNzLmNzcyc7XHJcbmltcG9ydCB7IFN0YXRlUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L1N0YXRlJztcclxuXHJcblxyXG5cclxuXHJcbi8vQ3NzXHJcbmltcG9ydCAnLi4vZ2xvYmFsLmNzcydcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL1VpL0Zvb3Rlci9Gb290ZXInO1xyXG5cclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHA8YW55PiB7XHJcbiAgcmVuZGVyICgpIHtcclxuICAgIE5Qcm9ncmVzcy5jb25maWd1cmUoeyBzaG93U3Bpbm5lcjogZmFsc2UgfSk7XHJcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZVN0YXJ0JywgKCkgPT4gTlByb2dyZXNzLnN0YXJ0KCkpO1xyXG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpOyBcclxuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlRXJyb3InLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTtcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjguMi9jc3MvYWxsLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1vUzN2Sld2KzBVanpCZlF6WVVodERZVytQajJ5Y2lESnhwc0sxT1lQQVlqcVQwODVRcS8xY3E1RkxYQVpRN0F5XCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiPjwvbWV0YT5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxTdGF0ZVByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtNYXRoLnJhbmRvbSgpICogMTAwfSAvPlxyXG4gICAgICAgICAgICAgIDxDb21wYXJlQm94IC8+XHJcbiAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgPC9TdGF0ZVByb3ZpZGVyPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcCIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkNvbXBhcmVCb3hcIjogXCJDb21wYXJlQm94X0NvbXBhcmVCb3hfXzNaUzFKXCIsXG5cdFwiYnV0dG9uQmFja2dyb3VuZFwiOiBcIkNvbXBhcmVCb3hfYnV0dG9uQmFja2dyb3VuZF9fMTNxUm9cIixcblx0XCJjYXJkc1wiOiBcIkNvbXBhcmVCb3hfY2FyZHNfXzN4MkpUXCIsXG5cdFwiY2FyZFwiOiBcIkNvbXBhcmVCb3hfY2FyZF9fNEJHNFpcIixcblx0XCJ0ZXh0XCI6IFwiQ29tcGFyZUJveF90ZXh0X18zbXZjTlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiRm9vdGVyX2Zvb3Rlcl9fVVhYc1lcIixcblx0XCJsb2dvXCI6IFwiRm9vdGVyX2xvZ29fXzNYTzRKXCIsXG5cdFwibGlua3NcIjogXCJGb290ZXJfbGlua3NfXzFlRjFnXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJOYXZiYXJcIjogXCJOYXZiYXJfTmF2YmFyX18yMUtYYVwiLFxuXHRcImxvZ2dvXCI6IFwiTmF2YmFyX2xvZ2dvX18yLVpiM1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiTmF2aWdhdGlvblwiOiBcIk5hdmlnYXRpb25fTmF2aWdhdGlvbl9fMTdoUS1cIixcblx0XCJuYXZpZ2F0aW9uQ2hlY2tib3hcIjogXCJOYXZpZ2F0aW9uX25hdmlnYXRpb25DaGVja2JveF9fM0tyYk9cIixcblx0XCJOYXZpZ2F0aW9uQnV0dG9uXCI6IFwiTmF2aWdhdGlvbl9OYXZpZ2F0aW9uQnV0dG9uX18xNkphV1wiLFxuXHRcIm5hdmlnYXRpb25CYWNrZ3JvdW5kXCI6IFwiTmF2aWdhdGlvbl9uYXZpZ2F0aW9uQmFja2dyb3VuZF9fMndFcjZcIixcblx0XCJuYXZpZ2F0aW9uTmF2XCI6IFwiTmF2aWdhdGlvbl9uYXZpZ2F0aW9uTmF2X18xYUFhMFwiLFxuXHRcIm5hdmlnYXRpb25MaXN0XCI6IFwiTmF2aWdhdGlvbl9uYXZpZ2F0aW9uTGlzdF9fTVgwaFFcIixcblx0XCJuYXZpZ2F0aW9uSXRlbVwiOiBcIk5hdmlnYXRpb25fbmF2aWdhdGlvbkl0ZW1fXzJvQjB2XCIsXG5cdFwibmF2aWdhdGlvbkxpbmtcIjogXCJOYXZpZ2F0aW9uX25hdmlnYXRpb25MaW5rX19FZVBmZlwiLFxuXHRcIm5hdmlnYXRpb25JY29uXCI6IFwiTmF2aWdhdGlvbl9uYXZpZ2F0aW9uSWNvbl9fMVN6dHRcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9