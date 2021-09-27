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
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\components\\Ui\\CompareBox\\CompareBox.tsx";
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
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\components\\Ui\\Footer\\Footer.tsx";

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
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Navbar.module.css */ "./src/components/Ui/NavBar/Navbar.module.css");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SlideDown_SlideDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SlideDown/SlideDown */ "./src/components/Ui/NavBar/SlideDown/SlideDown.tsx");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Navigation/Navigation */ "./src/components/Ui/Navigation/Navigation.tsx");
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\components\\Ui\\NavBar\\Navbar.tsx";
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
        console.log("down");
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
      lineNumber: 41,
      columnNumber: 12
    }
  }, __jsx("div", {
    id: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().Navbar),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 6
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("a", {
    id: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_6___default().loggo),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, "Kreditkortskoll.com")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_4__.Visible, {
    lg: true,
    xl: true,
    xxl: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(_SlideDown_SlideDown__WEBPACK_IMPORTED_MODULE_3__.default, {
    visible: slideDownRef.current,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {
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
    href: "/kort",
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
      columnNumber: 64
    }
  }, "Alla kreditkort"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {
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
    href: "/kategorier",
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
      columnNumber: 70
    }
  }, "Kategorier"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {
    whileHover: {
      y: -2
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/artiklar",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 45
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 68
    }
  }, "Artiklar"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {
    whileHover: {
      y: -2
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/faq",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 45
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 63
    }
  }, "FAQ"))))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_4__.Visible, {
    xs: true,
    sm: true,
    md: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx(_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_5__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }))));
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
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\components\\Ui\\NavBar\\SlideDown\\SlideDown.tsx";

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
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\components\\Ui\\Navigation\\Navigation.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





const NavigationButton = () => {
  const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

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
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\context\\State.tsx";
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
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\pages\\_app.tsx";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9Db21wYXJlQm94L0NvbXBhcmVCb3gudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL0Zvb3Rlci9Gb290ZXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL05hdkJhci9OYXZiYXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL05hdkJhci9TbGlkZURvd24vU2xpZGVEb3duLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9OYXZpZ2F0aW9uL05hdmlnYXRpb24udHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb250ZXh0L1N0YXRlLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvQ29tcGFyZUJveC9Db21wYXJlQm94Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvRm9vdGVyL0Zvb3Rlci5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL05hdkJhci9OYXZiYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9OYXZCYXIvU2xpZGVEb3duL1NsaWRlRG93bi5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL05hdmlnYXRpb24vTmF2aWdhdGlvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5wcm9ncmVzc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwicmVhY3QtZ3JpZC1zeXN0ZW1cIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9pZ25vcmVkfEU6XFxrcmVkaXRrb3J0c2tvbGxOZXdcXGNsaWVudFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkNvbXBhcmVCb3giLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlQ29udGV4dCIsIlN0YXRlQ29udGV4dCIsInJlbW92ZUZyb21Db21wYXJlIiwiU3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJpbmRleCIsImNvbXBhcmVJZHMiLCJmaW5kSW5kZXgiLCJDYXJkIiwiX2lkIiwic3BsaWNlIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsInN0eWxlcyIsIm1hcCIsImNhcmQiLCJpbWciLCJuYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsIkZvb3RlciIsInJvdXRlciIsInVzZVJvdXRlciIsInBhdGhuYW1lIiwiTmF2YmFyIiwic2xpZGVEb3duIiwiX3NldFNsaWRlRG93biIsInVzZVN0YXRlIiwic2xpZGVEb3duUmVmIiwidXNlUmVmIiwic2V0U2xpZGVEb3duIiwiZGF0YSIsImN1cnJlbnQiLCJ1c2VFZmZlY3QiLCJsYXN0U2Nyb2xsVG9wIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0IiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImNhcHR1cmUiLCJwYXNzaXZlIiwieSIsIlNsaWRlRG93biIsInZpc2libGUiLCJ2YXJpYW50cyIsIm9wZW4iLCJjbG9zZWQiLCJOYXZpZ2F0aW9uQnV0dG9uIiwiaW5wdXRSZWYiLCJjbG9zZU5hdmlnYXRpb24iLCJSb3V0ZXIiLCJjaGVja2VkIiwiY3JlYXRlQ29udGV4dCIsIlN0YXRlUHJvdmlkZXIiLCJjaGlsZHJlbiIsImNhcmRzIiwiTXlBcHAiLCJBcHAiLCJyZW5kZXIiLCJOUHJvZ3Jlc3MiLCJzaG93U3Bpbm5lciIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInByb3BzIiwiTWF0aCIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxVQUFVLEdBQUcsTUFBTTtBQUVyQixRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLGlEQUFVLENBQU1DLHdEQUFOLENBQXBDOztBQUVBLFFBQU1DLGlCQUFpQixHQUFHLE1BQU07QUFDNUIsUUFBSUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCUCxL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LEVBQW9DLE9BQU8sSUFBUDtBQUNwQyxTQUFPO0FBQUssTUFBRSxFQUFFVixrRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0w7QUFBSyxNQUFFLEVBQUVBLGdFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLENBREssRUFJTDtBQUFLLE1BQUUsRUFBRUEsaUVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUFNLFFBQUksRUFBQyxJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREYsQ0FERixDQURGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsSUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixDQURGLENBTkYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUFNLFFBQUksRUFBQyxJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLENBREYsQ0FYRixFQWdCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxrREFBRDtBQUFNLFFBQUksRUFBQyxJQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQSwyQzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29tcGFyZUJveC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgQ2FyZCBhcyBDcmVkaXRDYXJkSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9DcmVkaXRDYXJkJztcclxuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dC9TdGF0ZSc7XHJcblxyXG5jb25zdCBDb21wYXJlQm94ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dDxhbnk+KFN0YXRlQ29udGV4dClcclxuXHJcbiAgICBjb25zdCByZW1vdmVGcm9tQ29tcGFyZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgU3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBTdGF0ZS5jb21wYXJlSWRzLmZpbmRJbmRleCgoQ2FyZCA6IENyZWRpdENhcmRJbnRlcmZhY2UpID0+IENhcmQuX2lkKVxyXG4gICAgICAgIGlmKGluZGV4IDwgMCkgcmV0dXJuO1xyXG4gICAgICAgIFN0YXRlLmNvbXBhcmVJZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBzZXRTdGF0ZShTdGF0ZSlcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHN0YXRlLmNvbXBhcmVJZHMubGVuZ3RoKVxyXG4gICAgaWYoc3RhdGUuY29tcGFyZUlkcy5sZW5ndGggPD0gMCkgcmV0dXJuIG51bGw7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Db21wYXJlQm94fT5cclxuICAgICAgICA8aDI+RGluYSB2YWxkYSBrcmVkaXRrb3J0PC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRzfT5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAge3N0YXRlLmNvbXBhcmVJZHMubGVuZ3RoID4gMCA/IDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIHtzdGF0ZS5jb21wYXJlSWRzLm1hcCgoY2FyZCA6IENyZWRpdENhcmRJbnRlcmZhY2UpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjYXJkLmltZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Ava29ydC8ke2NhcmQuX2lkfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PntjYXJkLm5hbWV9PC9hPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIG9uQ2xpY2s9eygpID0+IHJlbW92ZUZyb21Db21wYXJlKCl9IGNsYXNzTmFtZT1cImZhcyBmYS10aW1lcy1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD4gOiBudWxsfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25CYWNrZ3JvdW5kfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9qYW1mb3I/Y2FyZHM9JHtKU09OLnN0cmluZ2lmeShzdGF0ZS5jb21wYXJlSWRzLm1hcCgoQ2FyZCA6IENyZWRpdENhcmRJbnRlcmZhY2UpID0+IENhcmQuX2lkKSl9YH0gPlxyXG4gICAgICAgICAgICAgICAgPGEgaWQ9e3N0eWxlcy5jb21wYXJlQnRufT5Kw6RtZsO2ciB7c3RhdGUuY29tcGFyZUlkcy5sZW5ndGh9c3Qga3JlZGl0a29ydDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn0gICBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBhcmVCb3g7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Gb290ZXIubW9kdWxlLmNzcyc7XHJcblxyXG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgICBpZihyb3V0ZXIucGF0aG5hbWUgPT09IFwiL1JlZGlyZWN0XCIpIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMubG9nb30+XHJcbiAgICAgICAgPHA+S3JlZGl0a29ydHNrb2xsLmNvbTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgaWQ9e3N0eWxlcy5saW5rc30+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5cclxuICAgICAgICAgICAgICA8YT5IZW08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgIDxhPkFsbGEga3JlZGl0a29ydDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgPGE+QXJ0aWtsYXI8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgIDxhPkZBUTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi8jXCI+XHJcbiAgICAgICAgICAgICAgPGE+TGVnYWw8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI1wiPlxyXG4gICAgICAgICAgICAgIDxhPk9tIG9zczwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdmJhci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTbGlkZURvd24gZnJvbSAnLi9TbGlkZURvd24vU2xpZGVEb3duJztcclxuaW1wb3J0IHsgVmlzaWJsZSwgSGlkZGVuIH0gZnJvbSAncmVhY3QtZ3JpZC1zeXN0ZW0nO1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJ1dHRvbiBmcm9tICcuLi9OYXZpZ2F0aW9uL05hdmlnYXRpb24nO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzbGlkZURvd24sIF9zZXRTbGlkZURvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHNsaWRlRG93blJlZiA9IHVzZVJlZihzbGlkZURvd24pO1xyXG4gICAgY29uc3Qgc2V0U2xpZGVEb3duID0gZGF0YSA9PiB7XHJcbiAgICAgIHNsaWRlRG93blJlZi5jdXJyZW50ID0gZGF0YTtcclxuICAgICAgX3NldFNsaWRlRG93bihkYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgdmFyIGxhc3RTY3JvbGxUb3AgPSAwO1xyXG5cclxuICAgICAgLy8gZWxlbWVudCBzaG91bGQgYmUgcmVwbGFjZWQgd2l0aCB0aGUgYWN0dWFsIHRhcmdldCBlbGVtZW50IG9uIHdoaWNoIHlvdSBoYXZlIGFwcGxpZWQgc2Nyb2xsLCB1c2Ugd2luZG93IGluIGNhc2Ugb2Ygbm8gdGFyZ2V0IGVsZW1lbnQuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHsgLy8gb3Igd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIi4uLi5cclxuICAgICAgICAgdmFyIHN0ID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7IC8vIENyZWRpdHM6IFwiaHR0cHM6Ly9naXRodWIuY29tL3FlcmVteS9zby9ibG9iL21hc3Rlci9zby5kb20uanMjTDQyNlwiXHJcbiAgICAgICAgIGlmIChzdCA8IGxhc3RTY3JvbGxUb3ApIHtcclxuICAgICAgICAgICBpZiAoc3QgPiA2MDApIHtcclxuICAgICAgICAgICAgIHJldHVybiBzbGlkZURvd25SZWYuY3VycmVudCA/IG51bGwgOiBzZXRTbGlkZURvd24odHJ1ZSk7XHJcbiAgICAgICAgICAgfSBcclxuICAgICAgICAgICBzZXRTbGlkZURvd24oZmFsc2UpXHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzZXRTbGlkZURvd24oZmFsc2UpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImRvd25cIilcclxuICAgICAgICAgfVxyXG4gICAgICAgICBsYXN0U2Nyb2xsVG9wID0gc3QgPD0gMCA/IDAgOiBzdDsgLy8gRm9yIE1vYmlsZSBvciBuZWdhdGl2ZSBzY3JvbGxpbmdcclxuICAgICAgfSwge1xyXG4gICAgICAgIGNhcHR1cmU6IHRydWUsXHJcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH0gLCBbXSlcclxuXHJcbiAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgIDxkaXYgaWQ9e3N0eWxlcy5OYXZiYXJ9PlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgaWQ9e3N0eWxlcy5sb2dnb30+S3JlZGl0a29ydHNrb2xsLmNvbTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8VmlzaWJsZSBsZyB4bCB4eGw+XHJcbiAgICAgIDxTbGlkZURvd24gdmlzaWJsZT17c2xpZGVEb3duUmVmLmN1cnJlbnR9IC8+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxtb3Rpb24ubGkgd2hpbGVIb3Zlcj17e3k6IC0yfX0+PExpbmsgaHJlZj1cIi9rb3J0XCI+PGE+QWxsYSBrcmVkaXRrb3J0PC9hPjwvTGluaz48L21vdGlvbi5saT5cclxuICAgICAgICAgICAgPG1vdGlvbi5saSB3aGlsZUhvdmVyPXt7eTogLTJ9fT48TGluayBocmVmPVwiL2thdGVnb3JpZXJcIj48YT5LYXRlZ29yaWVyPC9hPjwvTGluaz48L21vdGlvbi5saT5cclxuICAgICAgICAgICAgPG1vdGlvbi5saSB3aGlsZUhvdmVyPXt7eTogLTJ9fT48TGluayBocmVmPVwiL2FydGlrbGFyXCI+PGE+QXJ0aWtsYXI8L2E+PC9MaW5rPjwvbW90aW9uLmxpPlxyXG4gICAgICAgICAgICA8bW90aW9uLmxpIHdoaWxlSG92ZXI9e3t5OiAtMn19PjxMaW5rIGhyZWY9XCIvZmFxXCI+PGE+RkFRPC9hPjwvTGluaz48L21vdGlvbi5saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgIDwvVmlzaWJsZT5cclxuICAgICAgPFZpc2libGUgeHMgc20gbWQ+XHJcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gLz5cclxuICAgICAgPC9WaXNpYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9TbGlkZURvd24ubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICB2aXNpYmxlOiBCb29sZWFuXHJcbn1cclxuXHJcbmNvbnN0IFNsaWRlRG93biA6IFJlYWN0LkZDPFByb3BzPiA9ICh7dmlzaWJsZX0pID0+IHtcclxuXHJcbiAgICBjb25zdCB2YXJpYW50cyA9IHtcclxuICAgICAgICBvcGVuOiB7eTogLTcwIH0sXHJcbiAgICAgICAgY2xvc2VkOiB7eTogMCB9LFxyXG4gICAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXt2YXJpYW50c30gYW5pbWF0ZT17dmlzaWJsZSA/IFwiY2xvc2VkXCIgOiBcIm9wZW5cIn0gaWQ9e3N0eWxlcy5TbGlkZURvd259PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YSBpZD17c3R5bGVzLmxvZ2dvfT5LcmVkaXRrb3J0c2tvbGwuY29tPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bW90aW9uLmxpIHdoaWxlSG92ZXI9e3t5OiAtMn19PjxMaW5rIGhyZWY9XCIva29ydFwiPjxhPkFsbGEga3JlZGl0a29ydDwvYT48L0xpbms+PC9tb3Rpb24ubGk+XHJcbiAgICAgICAgICA8bW90aW9uLmxpIHdoaWxlSG92ZXI9e3t5OiAtMn19PjxMaW5rIGhyZWY9XCIva2F0ZWdvcmllclwiPjxhPkthdGVnb3JpZXI8L2E+PC9MaW5rPjwvbW90aW9uLmxpPlxyXG4gICAgICAgICAgPG1vdGlvbi5saSB3aGlsZUhvdmVyPXt7eTogLTJ9fT48TGluayBocmVmPVwiL2FydGlrbGFyXCI+PGE+QXJ0aWtsYXI8L2E+PC9MaW5rPjwvbW90aW9uLmxpPlxyXG4gICAgICAgICAgPG1vdGlvbi5saSB3aGlsZUhvdmVyPXt7eTogLTJ9fT48TGluayBocmVmPVwiL2ZhcVwiPjxhPkZBUTwvYT48L0xpbms+PC9tb3Rpb24ubGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgIDwvbW90aW9uLmRpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpZGVEb3duOyIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXZpZ2F0aW9uLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgTmF2aWdhdGlvbkJ1dHRvbjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IGNsb3NlTmF2aWdhdGlvbiA9ICgpID0+IHtcclxuICAgICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IHtcclxuICAgICAgICBpZighaW5wdXRSZWYuY3VycmVudCkgcmV0dXJuXHJcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5jaGVja2VkID0gZmFsc2VcclxuICAgICAgfSk7IFxyXG4gICAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKCkgPT4ge1xyXG4gICAgICAgIGlmKCFpbnB1dFJlZi5jdXJyZW50KSByZXR1cm5cclxuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9e3N0eWxlcy5OYXZpZ2F0aW9ufT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkNoZWNrYm94fVxyXG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgaWQ9XCJuYXZpLXRvZ2dsZVwiXHJcbiAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwibmF2aS10b2dnbGVcIiBjbGFzc05hbWU9e3N0eWxlcy5OYXZpZ2F0aW9uQnV0dG9ufT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uSWNvbn0+PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uQmFja2dyb3VuZH0+Jm5ic3A7PC9kaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbk5hdn0+XHJcbiAgICAgIDxoMT5LcmVkaXRrb3J0c2tvbGwuY29tPC9oMT5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkxpc3R9PlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25JdGVtfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9rb3J0XCI+XHJcbiAgICAgICAgICAgICAgPGEgb25DbGljaz17Y2xvc2VOYXZpZ2F0aW9ufSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uTGlua30+QWxsYSBrcmVkaXRrb3J0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25JdGVtfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtjbG9zZU5hdmlnYXRpb259IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25MaW5rfT5LcmVkaXRrb3J0cyB0ZXN0ZXQ8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkl0ZW19PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2FydGlrbGFyXCI+XHJcbiAgICAgICAgICAgICAgPGEgb25DbGljaz17Y2xvc2VOYXZpZ2F0aW9ufSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uTGlua30+QXJ0aWtsYXI8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkl0ZW19PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2ZhcVwiPlxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2Nsb3NlTmF2aWdhdGlvbn0gY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkxpbmt9PkZBUTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQnV0dG9uO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NhcmQgYXMgQ3JlZGl0Q2FyZEludGVyZmFjZX0gZnJvbSAnLi4vY2xhc3Nlcy9DcmVkaXRDYXJkJztcclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgY2FyZHM6IENyZWRpdENhcmRJbnRlcmZhY2VbXTtcclxuICBjb21wYXJlSWRzOiBDcmVkaXRDYXJkSW50ZXJmYWNlW107IFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSlcclxuXHJcbmV4cG9ydCBjb25zdCBTdGF0ZVByb3ZpZGVyIDogUmVhY3QuRkMgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8U3RhdGU+KHtcclxuICAgIGNhcmRzOltdLFxyXG4gICAgY29tcGFyZUlkczpbXVxyXG4gIH0pXHJcbiAgcmV0dXJuIDxTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tzdGF0ZSwgc2V0U3RhdGVdfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgPC9TdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbn1cclxuXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBBcHAgZnJvbSAnbmV4dC9hcHAnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbi8vIENvbXBvbmVudHNcclxuLy8gaW1wb3J0IE5hdmlnYXRpb25CdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9VaS9OYXZpZ2F0aW9uL05hdmlnYXRpb25CdXR0b24vTmF2aWdhdGlvbkJ1dHRvbic7XHJcbmltcG9ydCBDb21wYXJlQm94IGZyb20gJy4uL2NvbXBvbmVudHMvVWkvQ29tcGFyZUJveC9Db21wYXJlQm94JztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb21wb25lbnRzL1VpL05hdkJhci9OYXZiYXInO1xyXG5pbXBvcnQgTlByb2dyZXNzIGZyb20gJ25wcm9ncmVzcyc7IC8vbnByb2dyZXNzIG1vZHVsZVxyXG5pbXBvcnQgJ25wcm9ncmVzcy9ucHJvZ3Jlc3MuY3NzJztcclxuaW1wb3J0IHsgU3RhdGVQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHQvU3RhdGUnO1xyXG5cclxuXHJcblxyXG5cclxuLy9Dc3NcclxuaW1wb3J0ICcuLi9nbG9iYWwuY3NzJ1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvVWkvRm9vdGVyL0Zvb3Rlcic7XHJcblxyXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcDxhbnk+IHtcclxuICByZW5kZXIgKCkge1xyXG4gICAgXHJcbiAgICBOUHJvZ3Jlc3MuY29uZmlndXJlKHsgc2hvd1NwaW5uZXI6IGZhbHNlIH0pO1xyXG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VTdGFydCcsICgpID0+IE5Qcm9ncmVzcy5zdGFydCgpKTtcclxuICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKTsgXHJcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKCkgPT4gTlByb2dyZXNzLmRvbmUoKSk7XHJcbiAgICBcclxuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHNcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly91c2UuZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjguMi9jc3MvYWxsLmNzc1wiIGludGVncml0eT1cInNoYTM4NC1vUzN2Sld2KzBVanpCZlF6WVVodERZVytQajJ5Y2lESnhwc0sxT1lQQVlqcVQwODVRcS8xY3E1RkxYQVpRN0F5XCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiPjwvbWV0YT5cclxuICAgICAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9wdWJsaWMvZmF2aWNvbi5pY29cIiAvPlxyXG4gICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgPFN0YXRlUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBrZXk9e01hdGgucmFuZG9tKCkgKiAxMDB9IC8+XHJcbiAgICAgICAgICAgICAgPENvbXBhcmVCb3ggLz5cclxuICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICA8L1N0YXRlUHJvdmlkZXI+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE15QXBwIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQ29tcGFyZUJveFwiOiBcIkNvbXBhcmVCb3hfQ29tcGFyZUJveF9fM1pTMUpcIixcblx0XCJidXR0b25CYWNrZ3JvdW5kXCI6IFwiQ29tcGFyZUJveF9idXR0b25CYWNrZ3JvdW5kX18xM3FSb1wiLFxuXHRcImNhcmRzXCI6IFwiQ29tcGFyZUJveF9jYXJkc19fM3gySlRcIixcblx0XCJjYXJkXCI6IFwiQ29tcGFyZUJveF9jYXJkX180Qkc0WlwiLFxuXHRcInRleHRcIjogXCJDb21wYXJlQm94X3RleHRfXzNtdmNOXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb290ZXJcIjogXCJGb290ZXJfZm9vdGVyX19VWFhzWVwiLFxuXHRcImxvZ29cIjogXCJGb290ZXJfbG9nb19fM1hPNEpcIixcblx0XCJsaW5rc1wiOiBcIkZvb3Rlcl9saW5rc19fMWVGMWdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIk5hdmJhclwiOiBcIk5hdmJhcl9OYXZiYXJfXzIxS1hhXCIsXG5cdFwibG9nZ29cIjogXCJOYXZiYXJfbG9nZ29fXzItWmIzXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJTbGlkZURvd25cIjogXCJTbGlkZURvd25fU2xpZGVEb3duX18zMlVhWFwiLFxuXHRcImxvZ2dvXCI6IFwiU2xpZGVEb3duX2xvZ2dvX18zYWE4MlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2aWdhdGlvbkNoZWNrYm94XCI6IFwiTmF2aWdhdGlvbl9uYXZpZ2F0aW9uQ2hlY2tib3hfXzNLcmJPXCIsXG5cdFwiTmF2aWdhdGlvbkJ1dHRvblwiOiBcIk5hdmlnYXRpb25fTmF2aWdhdGlvbkJ1dHRvbl9fMTZKYVdcIixcblx0XCJuYXZpZ2F0aW9uQmFja2dyb3VuZFwiOiBcIk5hdmlnYXRpb25fbmF2aWdhdGlvbkJhY2tncm91bmRfXzJ3RXI2XCIsXG5cdFwibmF2aWdhdGlvbk5hdlwiOiBcIk5hdmlnYXRpb25fbmF2aWdhdGlvbk5hdl9fMWFBYTBcIixcblx0XCJuYXZpZ2F0aW9uTGlzdFwiOiBcIk5hdmlnYXRpb25fbmF2aWdhdGlvbkxpc3RfX01YMGhRXCIsXG5cdFwibmF2aWdhdGlvbkl0ZW1cIjogXCJOYXZpZ2F0aW9uX25hdmlnYXRpb25JdGVtX18yb0IwdlwiLFxuXHRcIm5hdmlnYXRpb25MaW5rXCI6IFwiTmF2aWdhdGlvbl9uYXZpZ2F0aW9uTGlua19fRWVQZmZcIixcblx0XCJuYXZpZ2F0aW9uSWNvblwiOiBcIk5hdmlnYXRpb25fbmF2aWdhdGlvbkljb25fXzFTenR0XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJucHJvZ3Jlc3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ncmlkLXN5c3RlbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=