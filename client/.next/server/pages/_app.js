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
var _jsxFileName = "D:\\kreditkortskoll\\client\\src\\components\\Ui\\CompareBox\\CompareBox.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





const CompareBox = () => {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_State__WEBPACK_IMPORTED_MODULE_2__.StateContext);

  const removeFromCompare = () => {
    let State = Object.assign({}, state);
    const index = State.compareIds.findIndex(Card => Card.id);
    if (index < 0) return;
    State.compareIds.splice(index, 1);
    setState(State);
  };

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
      href: `/kort/${card.name}`,
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
    href: `/jamfor?cards=${JSON.stringify(state.compareIds.map(Card => Card.id))}`,
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
var _jsxFileName = "D:\\kreditkortskoll\\client\\src\\components\\Ui\\Footer\\Footer.tsx";

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
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navbar.module.css */ "./src/components/Ui/NavBar/Navbar.module.css");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SlideDown_SlideDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SlideDown/SlideDown */ "./src/components/Ui/NavBar/SlideDown/SlideDown.tsx");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\kreditkortskoll\\client\\src\\components\\Ui\\NavBar\\Navbar.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);







const Navbar = () => {
  const {
    0: slideDown,
    1: _setSlideDown
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const slideDownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(slideDown);

  const setSlideDown = data => {
    slideDownRef.current = data;

    _setSlideDown(data);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    var lastScrollTop = 0; // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.

    window.addEventListener("scroll", () => {
      // or window.addEventListener("scroll"....
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"

      if (st < lastScrollTop) {
        if (st > 600) {
          return slideDownRef.current ? null : setSlideDown(true);
        }

        setSlideDown(false);
      } else {
        setSlideDown(false);
      }

      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, {
      capture: true,
      passive: true
    });
  }, []);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 12
    }
  }, __jsx("div", {
    id: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().Navbar),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 6
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("a", {
    id: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().loggo),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "Kreditkortskoll.com")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_4__.Visible, {
    lg: true,
    xl: true,
    xxl: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(_SlideDown_SlideDown__WEBPACK_IMPORTED_MODULE_3__.default, {
    visible: slideDownRef.current,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {
    whileHover: {
      y: -2
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/kort",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 45
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 64
    }
  }, "Alla kreditkort"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {
    whileHover: {
      y: -2
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/kategorier",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 45
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 70
    }
  }, "Kategorier"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {
    whileHover: {
      y: -2
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/artiklar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 45
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 68
    }
  }, "Artiklar"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {
    whileHover: {
      y: -2
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/faq",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 45
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 63
    }
  }, "FAQ"))))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_4__.Visible, {
    xs: true,
    sm: true,
    md: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/components/Ui/NavBar/SlideDown/SlideDown.tsx":
/*!**********************************************************!*\
  !*** ./src/components/Ui/NavBar/SlideDown/SlideDown.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SlideDown_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SlideDown.module.css */ "./src/components/Ui/NavBar/SlideDown/SlideDown.module.css");
/* harmony import */ var _SlideDown_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_SlideDown_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\kreditkortskoll\\client\\src\\components\\Ui\\NavBar\\SlideDown\\SlideDown.tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




const SlideDown = ({
  visible
}) => {
  const variants = {
    open: {
      y: -70
    },
    closed: {
      y: 0
    }
  };
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
    variants: variants,
    animate: visible ? "closed" : "open",
    id: (_SlideDown_module_css__WEBPACK_IMPORTED_MODULE_3___default().SlideDown),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 12
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("a", {
    id: (_SlideDown_module_css__WEBPACK_IMPORTED_MODULE_3___default().loggo),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, "Kreditkortskoll.com")), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.li, {
    whileHover: {
      y: -2
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/kort",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 62
    }
  }, "Alla kreditkort"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.li, {
    whileHover: {
      y: -2
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/kategorier",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 68
    }
  }, "Kategorier"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.li, {
    whileHover: {
      y: -2
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/artiklar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 66
    }
  }, "Artiklar"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.li, {
    whileHover: {
      y: -2
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/faq",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 61
    }
  }, "FAQ")))));
};

/* harmony default export */ __webpack_exports__["default"] = (SlideDown);

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
var _jsxFileName = "D:\\kreditkortskoll\\client\\src\\context\\State.tsx";
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
var _jsxFileName = "D:\\kreditkortskoll\\client\\src\\pages\\_app.tsx";
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
        lineNumber: 31,
        columnNumber: 7
      }
    }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
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
        lineNumber: 33,
        columnNumber: 15
      }
    }), __jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 15
      }
    }), __jsx("link", {
      rel: "shortcut icon",
      href: "/public/favicon.ico",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 15
      }
    })), __jsx(_context_State__WEBPACK_IMPORTED_MODULE_8__.StateProvider, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    }, __jsx(_components_Ui_NavBar_Navbar__WEBPACK_IMPORTED_MODULE_5__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 15
      }
    }), __jsx(Component, _extends({}, pageProps, {
      key: Math.random() * 100,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }
    })), __jsx(_components_Ui_CompareBox_CompareBox__WEBPACK_IMPORTED_MODULE_4__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 15
      }
    }), __jsx(_components_Ui_Footer_Footer__WEBPACK_IMPORTED_MODULE_10__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
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

/***/ "./src/components/Ui/NavBar/SlideDown/SlideDown.module.css":
/*!*****************************************************************!*\
  !*** ./src/components/Ui/NavBar/SlideDown/SlideDown.module.css ***!
  \*****************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"SlideDown": "SlideDown_SlideDown__32UaX",
	"loggo": "SlideDown_loggo__3aa82"
};


/***/ }),

/***/ "./src/global.css":
/*!************************!*\
  !*** ./src/global.css ***!
  \************************/
/***/ (function() {



/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

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

/***/ "react-grid-system":
/*!************************************!*\
  !*** external "react-grid-system" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-grid-system");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9Db21wYXJlQm94L0NvbXBhcmVCb3gudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL0Zvb3Rlci9Gb290ZXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL05hdkJhci9OYXZiYXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL05hdkJhci9TbGlkZURvd24vU2xpZGVEb3duLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29udGV4dC9TdGF0ZS50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL0NvbXBhcmVCb3gvQ29tcGFyZUJveC5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL0Zvb3Rlci9Gb290ZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9OYXZCYXIvTmF2YmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvTmF2QmFyL1NsaWRlRG93bi9TbGlkZURvd24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcInJlYWN0LWdyaWQtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvaWdub3JlZHxEOlxca3JlZGl0a29ydHNrb2xsXFxjbGllbnRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJDb21wYXJlQm94Iiwic3RhdGUiLCJzZXRTdGF0ZSIsInVzZUNvbnRleHQiLCJTdGF0ZUNvbnRleHQiLCJyZW1vdmVGcm9tQ29tcGFyZSIsIlN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiaW5kZXgiLCJjb21wYXJlSWRzIiwiZmluZEluZGV4IiwiQ2FyZCIsImlkIiwic3BsaWNlIiwibGVuZ3RoIiwic3R5bGVzIiwibWFwIiwiY2FyZCIsImltZyIsIm5hbWUiLCJKU09OIiwic3RyaW5naWZ5IiwiRm9vdGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwicGF0aG5hbWUiLCJOYXZiYXIiLCJzbGlkZURvd24iLCJfc2V0U2xpZGVEb3duIiwidXNlU3RhdGUiLCJzbGlkZURvd25SZWYiLCJ1c2VSZWYiLCJzZXRTbGlkZURvd24iLCJkYXRhIiwiY3VycmVudCIsInVzZUVmZmVjdCIsImxhc3RTY3JvbGxUb3AiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwic3QiLCJwYWdlWU9mZnNldCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsVG9wIiwiY2FwdHVyZSIsInBhc3NpdmUiLCJ5IiwiU2xpZGVEb3duIiwidmlzaWJsZSIsInZhcmlhbnRzIiwib3BlbiIsImNsb3NlZCIsImNyZWF0ZUNvbnRleHQiLCJTdGF0ZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjYXJkcyIsIk15QXBwIiwiQXBwIiwicmVuZGVyIiwiTlByb2dyZXNzIiwic2hvd1NwaW5uZXIiLCJSb3V0ZXIiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJwcm9wcyIsIk1hdGgiLCJyYW5kb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsVUFBVSxHQUFHLE1BQU07QUFFckIsUUFBTTtBQUFBLE9BQUNDLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CQyxpREFBVSxDQUFNQyx3REFBTixDQUFwQzs7QUFFQSxRQUFNQyxpQkFBaUIsR0FBRyxNQUFNO0FBQzVCLFFBQUlDLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQlAsS0FBbEIsQ0FBWjtBQUNBLFVBQU1RLEtBQUssR0FBR0gsS0FBSyxDQUFDSSxVQUFOLENBQWlCQyxTQUFqQixDQUE0QkMsSUFBRCxJQUFnQ0EsSUFBSSxDQUFDQyxFQUFoRSxDQUFkO0FBQ0EsUUFBR0osS0FBSyxHQUFHLENBQVgsRUFBYztBQUNkSCxTQUFLLENBQUNJLFVBQU4sQ0FBaUJJLE1BQWpCLENBQXdCTCxLQUF4QixFQUErQixDQUEvQjtBQUNBUCxZQUFRLENBQUNJLEtBQUQsQ0FBUjtBQUNDLEdBTkw7O0FB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QUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGLENBREYsQ0FERixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLElBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsQ0FERixDQU5GLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixDQURGLENBWEYsRUFnQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGLENBREYsQ0FoQkYsRUFxQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBREYsQ0FyQkYsRUEwQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLENBREYsQ0ExQkYsQ0FERixDQUpLLENBQVA7QUF1Q0gsQ0EzQ0Q7O0FBNkNBLCtEQUFlTyxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1JLE1BQU0sR0FBRyxNQUFNO0FBRWpCLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE2QkMsK0NBQVEsQ0FBQyxLQUFELENBQTNDO0FBRUEsUUFBTUMsWUFBWSxHQUFHQyw2Q0FBTSxDQUFDSixTQUFELENBQTNCOztBQUNBLFFBQU1LLFlBQVksR0FBSUMsSUFBRCxJQUFvQjtBQUN2Q0gsZ0JBQVksQ0FBQ0ksT0FBYixHQUF1QkQsSUFBdkI7O0FBQ0FMLGlCQUFhLENBQUNLLElBQUQsQ0FBYjtBQUNELEdBSEQ7O0FBS0FFLGtEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlDLGFBQWEsR0FBRyxDQUFwQixDQURjLENBR2Q7O0FBQ0FDLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsTUFBTTtBQUFFO0FBQ3ZDLFVBQUlDLEVBQUUsR0FBR0YsTUFBTSxDQUFDRyxXQUFQLElBQXNCQyxRQUFRLENBQUNDLGVBQVQsQ0FBeUJDLFNBQXhELENBRHFDLENBQzhCOztBQUNuRSxVQUFJSixFQUFFLEdBQUdILGFBQVQsRUFBd0I7QUFDdEIsWUFBSUcsRUFBRSxHQUFHLEdBQVQsRUFBYztBQUNaLGlCQUFPVCxZQUFZLENBQUNJLE9BQWIsR0FBdUIsSUFBdkIsR0FBOEJGLFlBQVksQ0FBQyxJQUFELENBQWpEO0FBQ0Q7O0FBQ0FBLG9CQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0YsT0FMRCxNQUtPO0FBQ0pBLG9CQUFZLENBQUMsS0FBRCxDQUFaO0FBQ0Y7O0FBQ0RJLG1CQUFhLEdBQUdHLEVBQUUsSUFBSSxDQUFOLEdBQVUsQ0FBVixHQUFjQSxFQUE5QixDQVZxQyxDQVVIO0FBQ3BDLEtBWEQsRUFXRztBQUNESyxhQUFPLEVBQUUsSUFEUjtBQUVEQyxhQUFPLEVBQUU7QUFGUixLQVhIO0FBZUQsR0FuQlEsRUFtQkwsRUFuQkssQ0FBVDtBQXFCQSxTQUFPLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNOO0FBQUssTUFBRSxFQUFFOUIsa0VBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxNQUFFLEVBQUVBLGlFQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosQ0FERCxFQUlDLE1BQUMsc0RBQUQ7QUFBUyxNQUFFLE1BQVg7QUFBWSxNQUFFLE1BQWQ7QUFBZSxPQUFHLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHlEQUFEO0FBQVcsV0FBTyxFQUFFZSxZQUFZLENBQUNJLE9BQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEQSxFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQVcsY0FBVSxFQUFFO0FBQUNZLE9BQUMsRUFBRSxDQUFDO0FBQUwsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQyxNQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLE9BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFuQixDQUFoQyxDQURGLEVBRUUsTUFBQyxvREFBRDtBQUFXLGNBQVUsRUFBRTtBQUFDQSxPQUFDLEVBQUUsQ0FBQztBQUFMLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0MsTUFBQyxrREFBRDtBQUFNLFFBQUksRUFBQyxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBekIsQ0FBaEMsQ0FGRixFQUdFLE1BQUMsb0RBQUQ7QUFBVyxjQUFVLEVBQUU7QUFBQ0EsT0FBQyxFQUFFLENBQUM7QUFBTCxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdDLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQXZCLENBQWhDLENBSEYsRUFJRSxNQUFDLG9EQUFEO0FBQVcsY0FBVSxFQUFFO0FBQUNBLE9BQUMsRUFBRSxDQUFDO0FBQUwsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQyxNQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLE1BQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQWxCLENBQWhDLENBSkYsQ0FGSixDQUpELEVBYUMsTUFBQyxzREFBRDtBQUFTLE1BQUUsTUFBWDtBQUFZLE1BQUUsTUFBZDtBQUFlLE1BQUUsTUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWJELENBRE0sQ0FBUDtBQW1CSCxDQWxERDs7QUFxREEsK0RBQWVwQixNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNURBO0FBQ0E7QUFDQTs7QUFNQSxNQUFNcUIsU0FBMkIsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFlO0FBRS9DLFFBQU1DLFFBQVEsR0FBRztBQUNiQyxRQUFJLEVBQUU7QUFBQ0osT0FBQyxFQUFFLENBQUM7QUFBTCxLQURPO0FBRWJLLFVBQU0sRUFBRTtBQUFDTCxPQUFDLEVBQUU7QUFBSjtBQUZLLEdBQWpCO0FBS0EsU0FBTyxNQUFDLHFEQUFEO0FBQVksWUFBUSxFQUFFRyxRQUF0QjtBQUFnQyxXQUFPLEVBQUVELE9BQU8sR0FBRyxRQUFILEdBQWMsTUFBOUQ7QUFBc0UsTUFBRSxFQUFFakMsd0VBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSCxNQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsTUFBRSxFQUFFQSxvRUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLENBREcsRUFJSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvREFBRDtBQUFXLGNBQVUsRUFBRTtBQUFDK0IsT0FBQyxFQUFFLENBQUM7QUFBTCxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdDLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQW5CLENBQWhDLENBREYsRUFFRSxNQUFDLG9EQUFEO0FBQVcsY0FBVSxFQUFFO0FBQUNBLE9BQUMsRUFBRSxDQUFDO0FBQUwsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQyxNQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUF6QixDQUFoQyxDQUZGLEVBR0UsTUFBQyxvREFBRDtBQUFXLGNBQVUsRUFBRTtBQUFDQSxPQUFDLEVBQUUsQ0FBQztBQUFMLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0MsTUFBQyxrREFBRDtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBdkIsQ0FBaEMsQ0FIRixFQUlFLE1BQUMsb0RBQUQ7QUFBVyxjQUFVLEVBQUU7QUFBQ0EsT0FBQyxFQUFFLENBQUM7QUFBTCxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdDLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBbEIsQ0FBaEMsQ0FKRixDQUpHLENBQVA7QUFXSCxDQWxCRDs7QUFvQkEsK0RBQWVDLFNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFRTyxNQUFNNUMsWUFBWSxnQkFBR2lELG9EQUFhLENBQUMsRUFBRCxDQUFsQztBQUVBLE1BQU1DLGFBQXdCLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBZ0I7QUFDdEQsUUFBTTtBQUFBLE9BQUN0RCxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQjRCLCtDQUFRLENBQVE7QUFDeEMwQixTQUFLLEVBQUMsRUFEa0M7QUFFeEM5QyxjQUFVLEVBQUM7QUFGNkIsR0FBUixDQUFsQztBQUlBLFNBQU8sTUFBQyxZQUFELENBQWMsUUFBZDtBQUF1QixTQUFLLEVBQUUsQ0FBQ1QsS0FBRCxFQUFRQyxRQUFSLENBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQXFELFFBREEsQ0FBUDtBQUdELENBUk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWUDtBQUNBO0FBQ0E7Q0FHQTtBQUNBOztBQUNBO0FBQ0E7Q0FDbUM7O0FBQ25DO0NBTUE7O0FBQ0E7QUFDQTs7QUFFQSxNQUFNRSxLQUFOLFNBQW9CQyxpREFBcEIsQ0FBNkI7QUFDM0JDLFFBQU0sR0FBSTtBQUVSQyw4REFBQSxDQUFvQjtBQUFFQyxpQkFBVyxFQUFFO0FBQWYsS0FBcEI7QUFDQUMsZ0VBQUEsQ0FBaUIsa0JBQWpCLEVBQXFDLE1BQU1GLHNEQUFBLEVBQTNDO0FBQ0FFLGdFQUFBLENBQWlCLHFCQUFqQixFQUF3QyxNQUFNRixxREFBQSxFQUE5QztBQUNBRSxnRUFBQSxDQUFpQixrQkFBakIsRUFBcUMsTUFBTUYscURBQUEsRUFBM0M7QUFFQSxVQUFNO0FBQUVHLGVBQUY7QUFBYUM7QUFBYixRQUEyQixLQUFLQyxLQUF0QztBQUNBLFdBQ0UsTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0k7QUFBTSxTQUFHLEVBQUMsWUFBVjtBQUF1QixVQUFJLEVBQUMseURBQTVCO0FBQXNGLGVBQVMsRUFBQyx5RUFBaEc7QUFBMEssaUJBQVcsRUFBQyxXQUF0TDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFSTtBQUFNLFVBQUksRUFBQyxVQUFYO0FBQXNCLGFBQU8sRUFBQyxxQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLEVBR0k7QUFBTSxTQUFHLEVBQUMsZUFBVjtBQUEwQixVQUFJLEVBQUMscUJBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFISixDQURKLEVBTUksTUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFTSxNQUFDLFNBQUQsZUFBZUQsU0FBZjtBQUEwQixTQUFHLEVBQUVFLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUEvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BRk4sRUFHSSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFISixFQUlJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUpKLENBTkosQ0FERjtBQWVEOztBQXhCMEI7O0FBNkI3QiwrREFBZVYsS0FBZixFOzs7Ozs7Ozs7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBLDJDOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db21wYXJlQm94Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBDYXJkIGFzIENyZWRpdENhcmRJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9jbGFzc2VzL0NyZWRpdENhcmQnO1xyXG5pbXBvcnQgeyBTdGF0ZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0L1N0YXRlJztcclxuXHJcbmNvbnN0IENvbXBhcmVCb3ggPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0PGFueT4oU3RhdGVDb250ZXh0KVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZUZyb21Db21wYXJlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCBTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IFN0YXRlLmNvbXBhcmVJZHMuZmluZEluZGV4KChDYXJkIDogQ3JlZGl0Q2FyZEludGVyZmFjZSkgPT4gQ2FyZC5pZClcclxuICAgICAgICBpZihpbmRleCA8IDApIHJldHVybjtcclxuICAgICAgICBTdGF0ZS5jb21wYXJlSWRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgc2V0U3RhdGUoU3RhdGUpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIGlmKHN0YXRlLmNvbXBhcmVJZHMubGVuZ3RoIDw9IDApIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuQ29tcGFyZUJveH0+XHJcbiAgICAgICAgPGgyPkRpbmEgdmFsZGEga3JlZGl0a29ydDwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkc30+XHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtzdGF0ZS5jb21wYXJlSWRzLmxlbmd0aCA+IDAgPyA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICB7c3RhdGUuY29tcGFyZUlkcy5tYXAoKGNhcmQgOiBDcmVkaXRDYXJkSW50ZXJmYWNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2FyZC5pbWd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2tvcnQvJHtjYXJkLm5hbWV9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+e2NhcmQubmFtZX08L2E+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgb25DbGljaz17KCkgPT4gcmVtb3ZlRnJvbUNvbXBhcmUoKX0gY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzLWNpcmNsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PiA6IG51bGx9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbkJhY2tncm91bmR9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2phbWZvcj9jYXJkcz0ke0pTT04uc3RyaW5naWZ5KHN0YXRlLmNvbXBhcmVJZHMubWFwKChDYXJkIDogQ3JlZGl0Q2FyZEludGVyZmFjZSkgPT4gQ2FyZC5pZCkpfWB9ID5cclxuICAgICAgICAgICAgICAgIDxhIGlkPXtzdHlsZXMuY29tcGFyZUJ0bn0+SsOkbWbDtnIge3N0YXRlLmNvbXBhcmVJZHMubGVuZ3RofXN0IGtyZWRpdGtvcnQ8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG59ICAgXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wYXJlQm94O1xyXG4iLCJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vRm9vdGVyLm1vZHVsZS5jc3MnO1xyXG5cclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gICAgaWYocm91dGVyLnBhdGhuYW1lID09PSBcIi9SZWRpcmVjdFwiKSByZXR1cm4gbnVsbDtcclxuICAgIHJldHVybiA8ZGl2IGlkPXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgPGRpdiBpZD17c3R5bGVzLmxvZ299PlxyXG4gICAgICAgIDxwPktyZWRpdGtvcnRza29sbC5jb208L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMubGlua3N9PlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgPGE+SGVtPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICA8YT5BbGxhIGtyZWRpdGtvcnQ8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgIDxhPkFydGlrbGFyPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICA8YT5GQVE8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgIDxhPkxlZ2FsPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICA8YT5PbSBvc3M8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXZiYXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2xpZGVEb3duIGZyb20gJy4vU2xpZGVEb3duL1NsaWRlRG93bic7XHJcbmltcG9ydCB7IFZpc2libGUgfSBmcm9tICdyZWFjdC1ncmlkLXN5c3RlbSc7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3NsaWRlRG93biwgX3NldFNsaWRlRG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3Qgc2xpZGVEb3duUmVmID0gdXNlUmVmKHNsaWRlRG93bik7XHJcbiAgICBjb25zdCBzZXRTbGlkZURvd24gPSAoZGF0YSA6IGJvb2xlYW4pID0+IHtcclxuICAgICAgc2xpZGVEb3duUmVmLmN1cnJlbnQgPSBkYXRhO1xyXG4gICAgICBfc2V0U2xpZGVEb3duKGRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICB2YXIgbGFzdFNjcm9sbFRvcCA9IDA7XHJcblxyXG4gICAgICAvLyBlbGVtZW50IHNob3VsZCBiZSByZXBsYWNlZCB3aXRoIHRoZSBhY3R1YWwgdGFyZ2V0IGVsZW1lbnQgb24gd2hpY2ggeW91IGhhdmUgYXBwbGllZCBzY3JvbGwsIHVzZSB3aW5kb3cgaW4gY2FzZSBvZiBubyB0YXJnZXQgZWxlbWVudC5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4geyAvLyBvciB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLi4uLlxyXG4gICAgICAgICB2YXIgc3QgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDsgLy8gQ3JlZGl0czogXCJodHRwczovL2dpdGh1Yi5jb20vcWVyZW15L3NvL2Jsb2IvbWFzdGVyL3NvLmRvbS5qcyNMNDI2XCJcclxuICAgICAgICAgaWYgKHN0IDwgbGFzdFNjcm9sbFRvcCkge1xyXG4gICAgICAgICAgIGlmIChzdCA+IDYwMCkge1xyXG4gICAgICAgICAgICAgcmV0dXJuIHNsaWRlRG93blJlZi5jdXJyZW50ID8gbnVsbCA6IHNldFNsaWRlRG93bih0cnVlKTtcclxuICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBzZXRTbGlkZURvd24oZmFsc2UpXHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFNsaWRlRG93bihmYWxzZSlcclxuICAgICAgICAgfVxyXG4gICAgICAgICBsYXN0U2Nyb2xsVG9wID0gc3QgPD0gMCA/IDAgOiBzdDsgLy8gRm9yIE1vYmlsZSBvciBuZWdhdGl2ZSBzY3JvbGxpbmdcclxuICAgICAgfSwge1xyXG4gICAgICAgIGNhcHR1cmU6IHRydWUsXHJcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH0gLCBbXSlcclxuXHJcbiAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgIDxkaXYgaWQ9e3N0eWxlcy5OYXZiYXJ9PlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgaWQ9e3N0eWxlcy5sb2dnb30+S3JlZGl0a29ydHNrb2xsLmNvbTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8VmlzaWJsZSBsZyB4bCB4eGw+XHJcbiAgICAgIDxTbGlkZURvd24gdmlzaWJsZT17c2xpZGVEb3duUmVmLmN1cnJlbnR9IC8+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxtb3Rpb24ubGkgd2hpbGVIb3Zlcj17e3k6IC0yfX0+PExpbmsgaHJlZj1cIi9rb3J0XCI+PGE+QWxsYSBrcmVkaXRrb3J0PC9hPjwvTGluaz48L21vdGlvbi5saT5cclxuICAgICAgICAgICAgPG1vdGlvbi5saSB3aGlsZUhvdmVyPXt7eTogLTJ9fT48TGluayBocmVmPVwiL2thdGVnb3JpZXJcIj48YT5LYXRlZ29yaWVyPC9hPjwvTGluaz48L21vdGlvbi5saT5cclxuICAgICAgICAgICAgPG1vdGlvbi5saSB3aGlsZUhvdmVyPXt7eTogLTJ9fT48TGluayBocmVmPVwiL2FydGlrbGFyXCI+PGE+QXJ0aWtsYXI8L2E+PC9MaW5rPjwvbW90aW9uLmxpPlxyXG4gICAgICAgICAgICA8bW90aW9uLmxpIHdoaWxlSG92ZXI9e3t5OiAtMn19PjxMaW5rIGhyZWY9XCIvZmFxXCI+PGE+RkFRPC9hPjwvTGluaz48L21vdGlvbi5saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgIDwvVmlzaWJsZT5cclxuICAgICAgPFZpc2libGUgeHMgc20gbWQ+XHJcbiAgICAgICAgey8qIDxOYXZpZ2F0aW9uQnV0dG9uIC8+ICovfVxyXG4gICAgICA8L1Zpc2libGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1NsaWRlRG93bi5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHZpc2libGU6IEJvb2xlYW5cclxufVxyXG5cclxuY29uc3QgU2xpZGVEb3duIDogUmVhY3QuRkM8UHJvcHM+ID0gKHt2aXNpYmxlfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHZhcmlhbnRzID0ge1xyXG4gICAgICAgIG9wZW46IHt5OiAtNzAgfSxcclxuICAgICAgICBjbG9zZWQ6IHt5OiAwIH0sXHJcbiAgICAgIH1cclxuXHJcbiAgICByZXR1cm4gPG1vdGlvbi5kaXYgdmFyaWFudHM9e3ZhcmlhbnRzfSBhbmltYXRlPXt2aXNpYmxlID8gXCJjbG9zZWRcIiA6IFwib3BlblwifSBpZD17c3R5bGVzLlNsaWRlRG93bn0+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhIGlkPXtzdHlsZXMubG9nZ299PktyZWRpdGtvcnRza29sbC5jb208L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgIDxtb3Rpb24ubGkgd2hpbGVIb3Zlcj17e3k6IC0yfX0+PExpbmsgaHJlZj1cIi9rb3J0XCI+PGE+QWxsYSBrcmVkaXRrb3J0PC9hPjwvTGluaz48L21vdGlvbi5saT5cclxuICAgICAgICAgIDxtb3Rpb24ubGkgd2hpbGVIb3Zlcj17e3k6IC0yfX0+PExpbmsgaHJlZj1cIi9rYXRlZ29yaWVyXCI+PGE+S2F0ZWdvcmllcjwvYT48L0xpbms+PC9tb3Rpb24ubGk+XHJcbiAgICAgICAgICA8bW90aW9uLmxpIHdoaWxlSG92ZXI9e3t5OiAtMn19PjxMaW5rIGhyZWY9XCIvYXJ0aWtsYXJcIj48YT5BcnRpa2xhcjwvYT48L0xpbms+PC9tb3Rpb24ubGk+XHJcbiAgICAgICAgICA8bW90aW9uLmxpIHdoaWxlSG92ZXI9e3t5OiAtMn19PjxMaW5rIGhyZWY9XCIvZmFxXCI+PGE+RkFRPC9hPjwvTGluaz48L21vdGlvbi5saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlkZURvd247IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIGNyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDYXJkIGFzIENyZWRpdENhcmRJbnRlcmZhY2V9IGZyb20gJy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZCc7XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gIGNhcmRzOiBDcmVkaXRDYXJkSW50ZXJmYWNlW107XHJcbiAgY29tcGFyZUlkczogQ3JlZGl0Q2FyZEludGVyZmFjZVtdOyBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pXHJcblxyXG5leHBvcnQgY29uc3QgU3RhdGVQcm92aWRlciA6IFJlYWN0LkZDID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPFN0YXRlPih7XHJcbiAgICBjYXJkczpbXSxcclxuICAgIGNvbXBhcmVJZHM6W11cclxuICB9KVxyXG4gIHJldHVybiA8U3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbc3RhdGUsIHNldFN0YXRlXX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gIDwvU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG59XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbi8vIGltcG9ydCBOYXZpZ2F0aW9uQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvVWkvTmF2aWdhdGlvbi9OYXZpZ2F0aW9uQnV0dG9uL05hdmlnYXRpb25CdXR0b24nO1xyXG5pbXBvcnQgQ29tcGFyZUJveCBmcm9tICcuLi9jb21wb25lbnRzL1VpL0NvbXBhcmVCb3gvQ29tcGFyZUJveCc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29tcG9uZW50cy9VaS9OYXZCYXIvTmF2YmFyJztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnOyAvL25wcm9ncmVzcyBtb2R1bGVcclxuaW1wb3J0ICducHJvZ3Jlc3MvbnByb2dyZXNzLmNzcyc7XHJcbmltcG9ydCB7IFN0YXRlUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L1N0YXRlJztcclxuXHJcblxyXG5cclxuXHJcbi8vQ3NzXHJcbmltcG9ydCAnLi4vZ2xvYmFsLmNzcydcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL1VpL0Zvb3Rlci9Gb290ZXInO1xyXG5cclxuY2xhc3MgTXlBcHAgZXh0ZW5kcyBBcHA8YW55PiB7XHJcbiAgcmVuZGVyICgpIHtcclxuICAgIFxyXG4gICAgTlByb2dyZXNzLmNvbmZpZ3VyZSh7IHNob3dTcGlubmVyOiBmYWxzZSB9KTtcclxuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKSk7XHJcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7IFxyXG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpO1xyXG4gICAgXHJcbiAgICBjb25zdCB7IENvbXBvbmVudCwgcGFnZVByb3BzIH0gPSB0aGlzLnByb3BzXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vdXNlLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS44LjIvY3NzL2FsbC5jc3NcIiBpbnRlZ3JpdHk9XCJzaGEzODQtb1MzdkpXdiswVWp6QmZRellVaHREWVcrUGoyeWNpREp4cHNLMU9ZUEFZanFUMDg1UXEvMWNxNUZMWEFaUTdBeVwiIGNyb3NzT3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIj48L21ldGE+XHJcbiAgICAgICAgICAgICAgPGxpbmsgcmVsPVwic2hvcnRjdXQgaWNvblwiIGhyZWY9XCIvcHVibGljL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxTdGF0ZVByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30ga2V5PXtNYXRoLnJhbmRvbSgpICogMTAwfSAvPlxyXG4gICAgICAgICAgICAgIDxDb21wYXJlQm94IC8+XHJcbiAgICAgICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgICAgPC9TdGF0ZVByb3ZpZGVyPlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcCIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkNvbXBhcmVCb3hcIjogXCJDb21wYXJlQm94X0NvbXBhcmVCb3hfXzNaUzFKXCIsXG5cdFwiYnV0dG9uQmFja2dyb3VuZFwiOiBcIkNvbXBhcmVCb3hfYnV0dG9uQmFja2dyb3VuZF9fMTNxUm9cIixcblx0XCJjYXJkc1wiOiBcIkNvbXBhcmVCb3hfY2FyZHNfXzN4MkpUXCIsXG5cdFwiY2FyZFwiOiBcIkNvbXBhcmVCb3hfY2FyZF9fNEJHNFpcIixcblx0XCJ0ZXh0XCI6IFwiQ29tcGFyZUJveF90ZXh0X18zbXZjTlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9vdGVyXCI6IFwiRm9vdGVyX2Zvb3Rlcl9fVVhYc1lcIixcblx0XCJsb2dvXCI6IFwiRm9vdGVyX2xvZ29fXzNYTzRKXCIsXG5cdFwibGlua3NcIjogXCJGb290ZXJfbGlua3NfXzFlRjFnXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJOYXZiYXJcIjogXCJOYXZiYXJfTmF2YmFyX18yMUtYYVwiLFxuXHRcImxvZ2dvXCI6IFwiTmF2YmFyX2xvZ2dvX18yLVpiM1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiU2xpZGVEb3duXCI6IFwiU2xpZGVEb3duX1NsaWRlRG93bl9fMzJVYVhcIixcblx0XCJsb2dnb1wiOiBcIlNsaWRlRG93bl9sb2dnb19fM2FhODJcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdyaWQtc3lzdGVtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==