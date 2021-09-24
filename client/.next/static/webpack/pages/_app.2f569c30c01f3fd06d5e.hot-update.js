self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Ui/NavBar/Navbar.tsx":
/*!*********************************************!*\
  !*** ./src/components/Ui/NavBar/Navbar.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Navbar.module.css */ "./src/components/Ui/NavBar/Navbar.module.css");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SlideDown_SlideDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SlideDown/SlideDown */ "./src/components/Ui/NavBar/SlideDown/SlideDown.tsx");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-grid-system */ "./node_modules/react-grid-system/build/index.js");
/* harmony import */ var _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Navigation/Navigation */ "./src/components/Ui/Navigation/Navigation.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\Ui\\NavBar\\Navbar.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);








var Navbar = function Navbar() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      slideDown = _useState[0],
      _setSlideDown = _useState[1];

  var slideDownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(slideDown);

  var setSlideDown = function setSlideDown(data) {
    slideDownRef.current = data;

    _setSlideDown(data);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var lastScrollTop = 0; // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.

    window.addEventListener("scroll", function () {
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
  }, []); // useEffect(() => {
  //     console.log(slideDownRef.current)
  // }, [slideDownRef.current])

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 12
    }
  }, __jsx(_SlideDown_SlideDown__WEBPACK_IMPORTED_MODULE_2__.default, {
    visible: slideDownRef.current,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx("div", {
    id: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().Navbar),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 6
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, __jsx("a", {
    id: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().loggo),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "Kreditkortskoll.com")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_3__.Visible, {
    md: true,
    lg: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.li, {
    whileHover: {
      y: -2
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/kort",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 45
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 64
    }
  }, "Alla kreditkort"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.li, {
    whileHover: {
      y: -2
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/kategorier",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 45
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 70
    }
  }, "Kategorier"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.li, {
    whileHover: {
      y: -2
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/artiklar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 45
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 68
    }
  }, "Artiklar"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.li, {
    whileHover: {
      y: -2
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/faq",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 45
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 63
    }
  }, "FAQ"))))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_3__.Visible, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, __jsx(_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_4__.default, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }))));
};

_s(Navbar, "9YZHxId6Bj8xLntnTA2/eSiHLiY=");

_c = Navbar;
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

var _c;

$RefreshReg$(_c, "Navbar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/components/Ui/Navigation/Navigation.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Ui/Navigation/Navigation.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navigation_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navigation.module.css */ "./src/components/Ui/Navigation/Navigation.module.css");
/* harmony import */ var _Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\Ui\\Navigation\\Navigation.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





var NavigationButton = function NavigationButton() {
  _s();

  var inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  var closeNavigation = function closeNavigation() {
    next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeComplete', function () {
      if (!inputRef.current) return;
      inputRef.current.checked = false;
    });
    next_router__WEBPACK_IMPORTED_MODULE_2___default().events.on('routeChangeError', function () {
      if (!inputRef.current) return;
      inputRef.current.checked = false;
    });
  };

  return __jsx("div", {
    id: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().Navigation),
    __self: _this,
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
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }), __jsx("label", {
    htmlFor: "navi-toggle",
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().NavigationButton),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx("span", {
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationIcon),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationBackground),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, "\xA0"), __jsx("nav", {
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationNav),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, "Kreditkortskoll.com"), __jsx("ul", {
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationList),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("li", {
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationItem),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/kort",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("a", {
    onClick: closeNavigation,
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationLink),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, "Alla kreditkort"))), __jsx("li", {
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationItem),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "#",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("a", {
    onClick: closeNavigation,
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationLink),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, "Kreditkorts testet"))), __jsx("li", {
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationItem),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/artiklar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("a", {
    onClick: closeNavigation,
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationLink),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, "Artiklar"))), __jsx("li", {
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationItem),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/faq",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx("a", {
    onClick: closeNavigation,
    className: (_Navigation_module_css__WEBPACK_IMPORTED_MODULE_3___default().navigationLink),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  }, "FAQ"))))));
};

_s(NavigationButton, "iD9XNNsNOlNDckBemnvlLS+aHYk=");

_c = NavigationButton;
/* harmony default export */ __webpack_exports__["default"] = (NavigationButton);

var _c;

$RefreshReg$(_c, "NavigationButton");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/components/Ui/Navigation/Navigation.module.css":
/*!************************************************************!*\
  !*** ./src/components/Ui/Navigation/Navigation.module.css ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../../../../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./Navigation.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./src/components/Ui/Navigation/Navigation.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./Navigation.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./src/components/Ui/Navigation/Navigation.module.css",
      function () {
        content = __webpack_require__(/*! !!../../../../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!../../../../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./Navigation.module.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./src/components/Ui/Navigation/Navigation.module.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./src/components/Ui/Navigation/Navigation.module.css":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[2].use[2]!./src/components/Ui/Navigation/Navigation.module.css ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n.Navigation_navigationCheckbox__3KrbO {\r\n    display: none;\r\n}\r\n\r\n.Navigation_NavigationButton__16JaW {\r\n    background-color: white;\r\n    height: 65px;\r\n    width: 65px;\r\n    position: fixed;\r\n    top: 37.5px;\r\n    right: 37.5px;\r\n    border-radius: 50%;\r\n    z-index: 2000;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    -webkit-box-shadow: 0px 2px 10px -8px rgba(0,0,0,0.75);\r\n    box-shadow: 0px 2px 10px -8px rgba(0,0,0,0.75);\r\n\r\n    -webkit-box-shadow: 0 10px 30px rgba(black, 0.1);\r\n\r\n            box-shadow: 0 10px 30px rgba(black, 0.1);\r\n}\r\n\r\n.Navigation_navigationBackground__2wEr6 {\r\n    height: 60px;\r\n    width: 60px;\r\n    border-radius: 50%;\r\n    background-image: -webkit-gradient( linear, left top, left bottom, color-stop(10%, #046bc5), to(#152fb3));\r\n    background-image: -webkit-linear-gradient( #046bc5 10%, #152fb3 100%);\r\n    background-image: linear-gradient( #046bc5 10%, #152fb3 100%);\r\n    backdrop-filter: blur( 20.0px );\r\n    -webkit-backdrop-filter: blur( 20.0px );\r\n    z-index: 1000;\r\n    position: fixed;\r\n    top: 40px;\r\n    right: 40px;\r\n\r\n    -webkit-transition: -webkit-transform .8s cubic-bezier(0.86, 0, 0.07, 1);\r\n\r\n    transition: -webkit-transform .8s cubic-bezier(0.86, 0, 0.07, 1);\r\n\r\n    transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);\r\n\r\n    transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform .8s cubic-bezier(0.86, 0, 0.07, 1);\r\n}\r\n\r\n.Navigation_navigationNav__1aAa0 {\r\n    height: 100vh;\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: 1500;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n\r\n    -webkit-transition: all .6s cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n\r\n    transition: all .6s cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n}\r\n\r\n.Navigation_navigationNav__1aAa0 h1 {\r\n    position: absolute;\r\n    top: 20px;\r\n    left: 20px;\r\n    color: white;\r\n    z-index: 500;\r\n    font-size: 26px;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n}\r\n\r\n.Navigation_navigationList__MX0hQ {\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    list-style: none;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\n.Navigation_navigationItem__2oB0v {\r\n    margin: 15px;\r\n}\r\n\r\n.Navigation_navigationLink__EePff {\r\n    display: inline-block;\r\n    font-size: 28px;\r\n    font-weight: 300;\r\n    padding: 10px 15px;\r\n    color: white;\r\n    text-decoration: none;\r\n    background-image: -webkit-linear-gradient(330deg, transparent 0%, transparent 50%, white 50%);\r\n    background-image: linear-gradient(120deg, transparent 0%, transparent 50%, white 50%);\r\n    background-size: 250%;\r\n    -webkit-transition: all .4s;\r\n    transition: all .4s;\r\n}\r\n\r\n\r\n.Navigation_navigationLink__EePff:active, .Navigation_navigationLink__EePff:hover {\r\n    background-position: 100%;\r\n    color: #EE7C7D;\r\n    -webkit-transform: translateX(10px);\r\n            transform: translateX(10px);\r\n}\r\n\r\n.Navigation_navigationCheckbox__3KrbO:checked ~ .Navigation_navigationBackground__2wEr6 {\r\n    -webkit-transform: scale(80);\r\n            transform: scale(80);\r\n}\r\n\r\n.Navigation_navigationCheckbox__3KrbO:checked ~ .Navigation_navigationNav__1aAa0 {\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n.Navigation_navigationIcon__1Sztt {\r\n    position: relative;\r\n    margin-top: 32px;\r\n}\r\n.Navigation_navigationIcon__1Sztt, .Navigation_navigationIcon__1Sztt::before, .Navigation_navigationIcon__1Sztt:after {\r\n    width: 30px;\r\n    height: 2px;\r\n    background-color: #4a4a4a;\r\n    display: inline-block;\r\n}\r\n\r\n.Navigation_navigationIcon__1Sztt::before, .Navigation_navigationIcon__1Sztt:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n}\r\n\r\n.Navigation_navigationIcon__1Sztt::before {\r\n    top: -8px;\r\n    -webkit-transition: all .4s;\r\n    transition: all .4s;\r\n}\r\n\r\n.Navigation_navigationIcon__1Sztt::after {\r\n    top: 8px;\r\n    -webkit-transition: all .4s;\r\n    transition: all .4s;\r\n}\r\n\r\n.Navigation_NavigationButton__16JaW:hover .Navigation_navigationIcon__1Sztt::before {\r\n    top: -10px;\r\n}\r\n.Navigation_NavigationButton__16JaW:hover .Navigation_navigationIcon__1Sztt::after {\r\n    top: 10px;\r\n}\r\n\r\n.Navigation_navigationCheckbox__3KrbO:checked + .Navigation_NavigationButton__16JaW .Navigation_navigationIcon__1Sztt {\r\n    background-color: transparent;\r\n}\r\n\r\n.Navigation_navigationCheckbox__3KrbO:checked + .Navigation_NavigationButton__16JaW .Navigation_navigationIcon__1Sztt:before {\r\n    top: 0;\r\n    -webkit-transform: rotate(135deg);\r\n            transform: rotate(135deg);\r\n}\r\n\r\n.Navigation_navigationCheckbox__3KrbO:checked + .Navigation_NavigationButton__16JaW .Navigation_navigationIcon__1Sztt::after {\r\n    top: 0;\r\n    -webkit-transform: rotate(-135deg);\r\n            transform: rotate(-135deg);\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 4002px) {\r\n    .Navigation_NavigationButton__16JaW {\r\n        top: 15.5px;\r\n        right: 15.5px;\r\n    }\r\n    \r\n    .Navigation_navigationBackground__2wEr6 {\r\n        top: 17px;\r\n        right: 17px;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://src/components/Ui/Navigation/Navigation.module.css"],"names":[],"mappings":";AACA;IACI,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,eAAe;IACf,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,sDAAsD;IAEtD,8CAA8C;;IAE9C,gDAAwC;;YAAxC,wCAAwC;AAC5C;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,yGAA6D;IAA7D,qEAA6D;IAA7D,6DAA6D;IAC7D,+BAA+B;IAC/B,uCAAuC;IACvC,aAAa;IACb,eAAe;IACf,SAAS;IACT,WAAW;;IAEX,wEAAwD;;IAAxD,gEAAwD;;IAAxD,wDAAwD;;IAAxD,8GAAwD;AAC5D;;AAEA;IACI,aAAa;IACb,eAAe;IACf,WAAW;IACX,MAAM;IACN,QAAQ;IACR,aAAa;IACb,UAAU;IACV,kBAAkB;;IAElB,kEAA0D;;IAA1D,0DAA0D;AAC9D;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,wCAAgC;YAAhC,gCAAgC;IAChC,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,qBAAqB;IACrB,6FAAqF;IAArF,qFAAqF;IACrF,qBAAqB;IACrB,2BAAmB;IAAnB,mBAAmB;AACvB;;;AAGA;IACI,yBAAyB;IACzB,cAAc;IACd,mCAA2B;YAA3B,2BAA2B;AAC/B;;AAEA;IACI,4BAAoB;YAApB,oBAAoB;AACxB;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,WAAW;IACX,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,OAAO;AACX;;AAEA;IACI,SAAS;IACT,2BAAmB;IAAnB,mBAAmB;AACvB;;AAEA;IACI,QAAQ;IACR,2BAAmB;IAAnB,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd;AACA;IACI,SAAS;AACb;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,MAAM;IACN,iCAAyB;YAAzB,yBAAyB;AAC7B;;AAEA;IACI,MAAM;IACN,kCAA0B;YAA1B,0BAA0B;AAC9B;;;;AAIA;IACI;QACI,WAAW;QACX,aAAa;IACjB;;IAEA;QACI,SAAS;QACT,WAAW;IACf;AACJ","sourcesContent":["\r\n.navigationCheckbox {\r\n    display: none;\r\n}\r\n\r\n.NavigationButton {\r\n    background-color: white;\r\n    height: 65px;\r\n    width: 65px;\r\n    position: fixed;\r\n    top: 37.5px;\r\n    right: 37.5px;\r\n    border-radius: 50%;\r\n    z-index: 2000;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    -webkit-box-shadow: 0px 2px 10px -8px rgba(0,0,0,0.75);\r\n    -moz-box-shadow: 0px 2px 10px -8px rgba(0,0,0,0.75);\r\n    box-shadow: 0px 2px 10px -8px rgba(0,0,0,0.75);\r\n\r\n    box-shadow: 0 10px 30px rgba(black, 0.1);\r\n}\r\n\r\n.navigationBackground {\r\n    height: 60px;\r\n    width: 60px;\r\n    border-radius: 50%;\r\n    background-image: linear-gradient( #046bc5 10%, #152fb3 100%);\r\n    backdrop-filter: blur( 20.0px );\r\n    -webkit-backdrop-filter: blur( 20.0px );\r\n    z-index: 1000;\r\n    position: fixed;\r\n    top: 40px;\r\n    right: 40px;\r\n\r\n    transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);\r\n}\r\n\r\n.navigationNav {\r\n    height: 100vh;\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: 1500;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n\r\n    transition: all .6s cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n}\r\n\r\n.navigationNav h1 {\r\n    position: absolute;\r\n    top: 20px;\r\n    left: 20px;\r\n    color: white;\r\n    z-index: 500;\r\n    font-size: 26px;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n}\r\n\r\n.navigationList {\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    list-style: none;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\n.navigationItem {\r\n    margin: 15px;\r\n}\r\n\r\n.navigationLink {\r\n    display: inline-block;\r\n    font-size: 28px;\r\n    font-weight: 300;\r\n    padding: 10px 15px;\r\n    color: white;\r\n    text-decoration: none;\r\n    background-image: linear-gradient(120deg, transparent 0%, transparent 50%, white 50%);\r\n    background-size: 250%;\r\n    transition: all .4s;\r\n}\r\n\r\n\r\n.navigationLink:active, .navigationLink:hover {\r\n    background-position: 100%;\r\n    color: #EE7C7D;\r\n    transform: translateX(10px);\r\n}\r\n\r\n.navigationCheckbox:checked ~ .navigationBackground {\r\n    transform: scale(80);\r\n}\r\n\r\n.navigationCheckbox:checked ~ .navigationNav {\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n.navigationIcon {\r\n    position: relative;\r\n    margin-top: 32px;\r\n}\r\n.navigationIcon, .navigationIcon::before, .navigationIcon:after {\r\n    width: 30px;\r\n    height: 2px;\r\n    background-color: #4a4a4a;\r\n    display: inline-block;\r\n}\r\n\r\n.navigationIcon::before, .navigationIcon:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n}\r\n\r\n.navigationIcon::before {\r\n    top: -8px;\r\n    transition: all .4s;\r\n}\r\n\r\n.navigationIcon::after {\r\n    top: 8px;\r\n    transition: all .4s;\r\n}\r\n\r\n.NavigationButton:hover .navigationIcon::before {\r\n    top: -10px;\r\n}\r\n.NavigationButton:hover .navigationIcon::after {\r\n    top: 10px;\r\n}\r\n\r\n.navigationCheckbox:checked + .NavigationButton .navigationIcon {\r\n    background-color: transparent;\r\n}\r\n\r\n.navigationCheckbox:checked + .NavigationButton .navigationIcon:before {\r\n    top: 0;\r\n    transform: rotate(135deg);\r\n}\r\n\r\n.navigationCheckbox:checked + .NavigationButton .navigationIcon::after {\r\n    top: 0;\r\n    transform: rotate(-135deg);\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 4002px) {\r\n    .NavigationButton {\r\n        top: 15.5px;\r\n        right: 15.5px;\r\n    }\r\n    \r\n    .navigationBackground {\r\n        top: 17px;\r\n        right: 17px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"navigationCheckbox": "Navigation_navigationCheckbox__3KrbO",
	"NavigationButton": "Navigation_NavigationButton__16JaW",
	"navigationBackground": "Navigation_navigationBackground__2wEr6",
	"navigationNav": "Navigation_navigationNav__1aAa0",
	"navigationList": "Navigation_navigationList__MX0hQ",
	"navigationItem": "Navigation_navigationItem__2oB0v",
	"navigationLink": "Navigation_navigationLink__EePff",
	"navigationIcon": "Navigation_navigationIcon__1Sztt"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVWkvTmF2QmFyL05hdmJhci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VpL05hdmlnYXRpb24vTmF2aWdhdGlvbi50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VpL05hdmlnYXRpb24vTmF2aWdhdGlvbi5tb2R1bGUuY3NzP2I3NzYiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VpL05hdmlnYXRpb24vTmF2aWdhdGlvbi5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbIk5hdmJhciIsInVzZVN0YXRlIiwic2xpZGVEb3duIiwiX3NldFNsaWRlRG93biIsInNsaWRlRG93blJlZiIsInVzZVJlZiIsInNldFNsaWRlRG93biIsImRhdGEiLCJjdXJyZW50IiwidXNlRWZmZWN0IiwibGFzdFNjcm9sbFRvcCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdCIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJjYXB0dXJlIiwicGFzc2l2ZSIsInN0eWxlcyIsInkiLCJOYXZpZ2F0aW9uQnV0dG9uIiwiaW5wdXRSZWYiLCJjbG9zZU5hdmlnYXRpb24iLCJSb3V0ZXIiLCJjaGVja2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFFa0JDLCtDQUFRLENBQUMsS0FBRCxDQUYxQjtBQUFBLE1BRVZDLFNBRlU7QUFBQSxNQUVDQyxhQUZEOztBQUlqQixNQUFNQyxZQUFZLEdBQUdDLDZDQUFNLENBQUNILFNBQUQsQ0FBM0I7O0FBQ0EsTUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsSUFBSSxFQUFJO0FB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QixxQkFBcUIsS0FBSyx5QkFBeUIsOEJBQThCLHdCQUF3Qix5QkFBeUIsMkJBQTJCLHFCQUFxQiw4QkFBOEIsOEZBQThGLDhCQUE4Qiw0QkFBNEIsS0FBSywyREFBMkQsa0NBQWtDLHVCQUF1QixvQ0FBb0MsS0FBSyw2REFBNkQsNkJBQTZCLEtBQUssc0RBQXNELG1CQUFtQiw0QkFBNEIsS0FBSyxxQkFBcUIsMkJBQTJCLHlCQUF5QixLQUFLLHFFQUFxRSxvQkFBb0Isb0JBQW9CLGtDQUFrQyw4QkFBOEIsS0FBSyx3REFBd0Qsc0JBQXNCLDJCQUEyQixnQkFBZ0IsS0FBSyxpQ0FBaUMsa0JBQWtCLDRCQUE0QixLQUFLLGdDQUFnQyxpQkFBaUIsNEJBQTRCLEtBQUsseURBQXlELG1CQUFtQixLQUFLLG9EQUFvRCxrQkFBa0IsS0FBSyx5RUFBeUUsc0NBQXNDLEtBQUssZ0ZBQWdGLGVBQWUsa0NBQWtDLEtBQUssZ0ZBQWdGLGVBQWUsbUNBQW1DLEtBQUssdURBQXVELDJCQUEyQix3QkFBd0IsMEJBQTBCLFNBQVMsdUNBQXVDLHNCQUFzQix3QkFBd0IsU0FBUyxLQUFLLG1CQUFtQjtBQUMzbVY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMmY1NjljMzBjMDFmM2ZkMDZkNWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXZiYXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2xpZGVEb3duIGZyb20gJy4vU2xpZGVEb3duL1NsaWRlRG93bic7XHJcbmltcG9ydCB7IFZpc2libGUsIEhpZGRlbiB9IGZyb20gJ3JlYWN0LWdyaWQtc3lzdGVtJztcclxuaW1wb3J0IE5hdmlnYXRpb25CdXR0b24gZnJvbSAnLi4vTmF2aWdhdGlvbi9OYXZpZ2F0aW9uJztcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbc2xpZGVEb3duLCBfc2V0U2xpZGVEb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBzbGlkZURvd25SZWYgPSB1c2VSZWYoc2xpZGVEb3duKTtcclxuICAgIGNvbnN0IHNldFNsaWRlRG93biA9IGRhdGEgPT4ge1xyXG4gICAgICBzbGlkZURvd25SZWYuY3VycmVudCA9IGRhdGE7XHJcbiAgICAgIF9zZXRTbGlkZURvd24oZGF0YSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHZhciBsYXN0U2Nyb2xsVG9wID0gMDtcclxuXHJcbiAgICAgIC8vIGVsZW1lbnQgc2hvdWxkIGJlIHJlcGxhY2VkIHdpdGggdGhlIGFjdHVhbCB0YXJnZXQgZWxlbWVudCBvbiB3aGljaCB5b3UgaGF2ZSBhcHBsaWVkIHNjcm9sbCwgdXNlIHdpbmRvdyBpbiBjYXNlIG9mIG5vIHRhcmdldCBlbGVtZW50LlxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7IC8vIG9yIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIuLi4uXHJcbiAgICAgICAgIHZhciBzdCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wOyAvLyBDcmVkaXRzOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9xZXJlbXkvc28vYmxvYi9tYXN0ZXIvc28uZG9tLmpzI0w0MjZcIlxyXG4gICAgICAgICBpZiAoc3QgPCBsYXN0U2Nyb2xsVG9wKSB7XHJcbiAgICAgICAgICAgaWYgKHN0ID4gNjAwKSB7XHJcbiAgICAgICAgICAgICByZXR1cm4gc2xpZGVEb3duUmVmLmN1cnJlbnQgPyBudWxsIDogc2V0U2xpZGVEb3duKHRydWUpO1xyXG4gICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgc2V0U2xpZGVEb3duKGZhbHNlKVxyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0U2xpZGVEb3duKGZhbHNlKVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGxhc3RTY3JvbGxUb3AgPSBzdCA8PSAwID8gMCA6IHN0OyAvLyBGb3IgTW9iaWxlIG9yIG5lZ2F0aXZlIHNjcm9sbGluZ1xyXG4gICAgICB9LCB7XHJcbiAgICAgICAgY2FwdHVyZTogdHJ1ZSxcclxuICAgICAgICBwYXNzaXZlOiB0cnVlXHJcbiAgICAgIH0pO1xyXG4gICAgfSAsIFtdKVxyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coc2xpZGVEb3duUmVmLmN1cnJlbnQpXHJcbiAgICAvLyB9LCBbc2xpZGVEb3duUmVmLmN1cnJlbnRdKVxyXG5cclxuICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxTbGlkZURvd24gdmlzaWJsZT17c2xpZGVEb3duUmVmLmN1cnJlbnR9IC8+XHJcbiAgICAgPGRpdiBpZD17c3R5bGVzLk5hdmJhcn0+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YSBpZD17c3R5bGVzLmxvZ2dvfT5LcmVkaXRrb3J0c2tvbGwuY29tPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgIDxWaXNpYmxlIG1kIGxnPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bW90aW9uLmxpIHdoaWxlSG92ZXI9e3t5OiAtMn19PjxMaW5rIGhyZWY9XCIva29ydFwiPjxhPkFsbGEga3JlZGl0a29ydDwvYT48L0xpbms+PC9tb3Rpb24ubGk+XHJcbiAgICAgICAgICAgIDxtb3Rpb24ubGkgd2hpbGVIb3Zlcj17e3k6IC0yfX0+PExpbmsgaHJlZj1cIi9rYXRlZ29yaWVyXCI+PGE+S2F0ZWdvcmllcjwvYT48L0xpbms+PC9tb3Rpb24ubGk+XHJcbiAgICAgICAgICAgIDxtb3Rpb24ubGkgd2hpbGVIb3Zlcj17e3k6IC0yfX0+PExpbmsgaHJlZj1cIi9hcnRpa2xhclwiPjxhPkFydGlrbGFyPC9hPjwvTGluaz48L21vdGlvbi5saT5cclxuICAgICAgICAgICAgPG1vdGlvbi5saSB3aGlsZUhvdmVyPXt7eTogLTJ9fT48TGluayBocmVmPVwiL2ZhcVwiPjxhPkZBUTwvYT48L0xpbms+PC9tb3Rpb24ubGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICA8L1Zpc2libGU+XHJcbiAgICAgIDxWaXNpYmxlPlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIC8+XHJcbiAgICAgIDwvVmlzaWJsZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2aWdhdGlvbi5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IE5hdmlnYXRpb25CdXR0b246IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gIGNvbnN0IGlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICBjb25zdCBjbG9zZU5hdmlnYXRpb24gPSAoKSA9PiB7XHJcbiAgICAgIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAoKSA9PiB7XHJcbiAgICAgICAgaWYoIWlucHV0UmVmLmN1cnJlbnQpIHJldHVyblxyXG4gICAgICAgIGlucHV0UmVmLmN1cnJlbnQuY2hlY2tlZCA9IGZhbHNlXHJcbiAgICAgIH0pOyBcclxuICAgICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VFcnJvcicsICgpID0+IHtcclxuICAgICAgICBpZighaW5wdXRSZWYuY3VycmVudCkgcmV0dXJuXHJcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5jaGVja2VkID0gZmFsc2VcclxuICAgICAgfSk7XHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGlkPXtzdHlsZXMuTmF2aWdhdGlvbn0+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25DaGVja2JveH1cclxuICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgIGlkPVwibmF2aS10b2dnbGVcIlxyXG4gICAgICAgIHJlZj17aW5wdXRSZWZ9XHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hdmktdG9nZ2xlXCIgY2xhc3NOYW1lPXtzdHlsZXMuTmF2aWdhdGlvbkJ1dHRvbn0+XHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkljb259Pjwvc3Bhbj5cclxuICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkJhY2tncm91bmR9PiZuYnNwOzwvZGl2PlxyXG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25OYXZ9PlxyXG4gICAgICA8aDE+S3JlZGl0a29ydHNrb2xsLmNvbTwvaDE+XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25MaXN0fT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uSXRlbX0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIva29ydFwiPlxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2Nsb3NlTmF2aWdhdGlvbn0gY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkxpbmt9PkFsbGEga3JlZGl0a29ydDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uSXRlbX0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGEgb25DbGljaz17Y2xvc2VOYXZpZ2F0aW9ufSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uTGlua30+S3JlZGl0a29ydHMgdGVzdGV0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25JdGVtfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hcnRpa2xhclwiPlxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2Nsb3NlTmF2aWdhdGlvbn0gY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkxpbmt9PkFydGlrbGFyPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25JdGVtfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mYXFcIj5cclxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtjbG9zZU5hdmlnYXRpb259IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25MaW5rfT5GQVE8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9uYXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbkJ1dHRvbjtcclxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsyXSEuL05hdmlnYXRpb24ubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLGIsaXNOYW1lZEV4cG9ydCl7aWYoIWEmJmJ8fGEmJiFiKXtyZXR1cm4gZmFsc2U7fWxldCBwO2ZvcihwIGluIGEpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKGFbcF0hPT1iW3BdKXtyZXR1cm4gZmFsc2U7fX1mb3IocCBpbiBiKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZighYVtwXSl7cmV0dXJuIGZhbHNlO319cmV0dXJuIHRydWU7fTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMl0hLi9OYXZpZ2F0aW9uLm1vZHVsZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsyXSEuL05hdmlnYXRpb24ubW9kdWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXHJcXG4uTmF2aWdhdGlvbl9uYXZpZ2F0aW9uQ2hlY2tib3hfXzNLcmJPIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLk5hdmlnYXRpb25fTmF2aWdhdGlvbkJ1dHRvbl9fMTZKYVcge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgaGVpZ2h0OiA2NXB4O1xcclxcbiAgICB3aWR0aDogNjVweDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDM3LjVweDtcXHJcXG4gICAgcmlnaHQ6IDM3LjVweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICB6LWluZGV4OiAyMDAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDEwcHggLThweCByZ2JhKDAsMCwwLDAuNzUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggLThweCByZ2JhKDAsMCwwLDAuNzUpO1xcclxcblxcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoYmxhY2ssIDAuMSk7XFxyXFxuXFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYShibGFjaywgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLk5hdmlnYXRpb25fbmF2aWdhdGlvbkJhY2tncm91bmRfXzJ3RXI2IHtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtd2Via2l0LWdyYWRpZW50KCBsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgxMCUsICMwNDZiYzUpLCB0bygjMTUyZmIzKSk7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCAjMDQ2YmM1IDEwJSwgIzE1MmZiMyAxMDAlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCAjMDQ2YmM1IDEwJSwgIzE1MmZiMyAxMDAlKTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKCAyMC4wcHggKTtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDIwLjBweCApO1xcclxcbiAgICB6LWluZGV4OiAxMDAwO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogNDBweDtcXHJcXG4gICAgcmlnaHQ6IDQwcHg7XFxyXFxuXFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjhzIGN1YmljLWJlemllcigwLjg2LCAwLCAwLjA3LCAxKTtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjhzIGN1YmljLWJlemllcigwLjg2LCAwLCAwLjA3LCAxKTtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC44cyBjdWJpYy1iZXppZXIoMC44NiwgMCwgMC4wNywgMSk7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuOHMgY3ViaWMtYmV6aWVyKDAuODYsIDAsIDAuMDcsIDEpLCAtd2Via2l0LXRyYW5zZm9ybSAuOHMgY3ViaWMtYmV6aWVyKDAuODYsIDAsIDAuMDcsIDEpO1xcclxcbn1cXHJcXG5cXHJcXG4uTmF2aWdhdGlvbl9uYXZpZ2F0aW9uTmF2X18xYUFhMCB7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHotaW5kZXg6IDE1MDA7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG5cXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjZzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjZzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xcclxcbn1cXHJcXG5cXHJcXG4uTmF2aWdhdGlvbl9uYXZpZ2F0aW9uTmF2X18xYUFhMCBoMSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyMHB4O1xcclxcbiAgICBsZWZ0OiAyMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHotaW5kZXg6IDUwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4uTmF2aWdhdGlvbl9uYXZpZ2F0aW9uTGlzdF9fTVgwaFEge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNDAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5OYXZpZ2F0aW9uX25hdmlnYXRpb25JdGVtX18yb0IwdiB7XFxyXFxuICAgIG1hcmdpbjogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLk5hdmlnYXRpb25fbmF2aWdhdGlvbkxpbmtfX0VlUGZmIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDMzMGRlZywgdHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDUwJSwgd2hpdGUgNTAlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDEyMGRlZywgdHJhbnNwYXJlbnQgMCUsIHRyYW5zcGFyZW50IDUwJSwgd2hpdGUgNTAlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNTAlO1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNHM7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5OYXZpZ2F0aW9uX25hdmlnYXRpb25MaW5rX19FZVBmZjphY3RpdmUsIC5OYXZpZ2F0aW9uX25hdmlnYXRpb25MaW5rX19FZVBmZjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XFxyXFxuICAgIGNvbG9yOiAjRUU3QzdEO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxyXFxufVxcclxcblxcclxcbi5OYXZpZ2F0aW9uX25hdmlnYXRpb25DaGVja2JveF9fM0tyYk86Y2hlY2tlZCB+IC5OYXZpZ2F0aW9uX25hdmlnYXRpb25CYWNrZ3JvdW5kX18yd0VyNiB7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSg4MCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSg4MCk7XFxyXFxufVxcclxcblxcclxcbi5OYXZpZ2F0aW9uX25hdmlnYXRpb25DaGVja2JveF9fM0tyYk86Y2hlY2tlZCB+IC5OYXZpZ2F0aW9uX25hdmlnYXRpb25OYXZfXzFhQWEwIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuLk5hdmlnYXRpb25fbmF2aWdhdGlvbkljb25fXzFTenR0IHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xcclxcbn1cXHJcXG4uTmF2aWdhdGlvbl9uYXZpZ2F0aW9uSWNvbl9fMVN6dHQsIC5OYXZpZ2F0aW9uX25hdmlnYXRpb25JY29uX18xU3p0dDo6YmVmb3JlLCAuTmF2aWdhdGlvbl9uYXZpZ2F0aW9uSWNvbl9fMVN6dHQ6YWZ0ZXIge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLk5hdmlnYXRpb25fbmF2aWdhdGlvbkljb25fXzFTenR0OjpiZWZvcmUsIC5OYXZpZ2F0aW9uX25hdmlnYXRpb25JY29uX18xU3p0dDphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5OYXZpZ2F0aW9uX25hdmlnYXRpb25JY29uX18xU3p0dDo6YmVmb3JlIHtcXHJcXG4gICAgdG9wOiAtOHB4O1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNHM7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XFxyXFxufVxcclxcblxcclxcbi5OYXZpZ2F0aW9uX25hdmlnYXRpb25JY29uX18xU3p0dDo6YWZ0ZXIge1xcclxcbiAgICB0b3A6IDhweDtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjRzO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xcclxcbn1cXHJcXG5cXHJcXG4uTmF2aWdhdGlvbl9OYXZpZ2F0aW9uQnV0dG9uX18xNkphVzpob3ZlciAuTmF2aWdhdGlvbl9uYXZpZ2F0aW9uSWNvbl9fMVN6dHQ6OmJlZm9yZSB7XFxyXFxuICAgIHRvcDogLTEwcHg7XFxyXFxufVxcclxcbi5OYXZpZ2F0aW9uX05hdmlnYXRpb25CdXR0b25fXzE2SmFXOmhvdmVyIC5OYXZpZ2F0aW9uX25hdmlnYXRpb25JY29uX18xU3p0dDo6YWZ0ZXIge1xcclxcbiAgICB0b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5OYXZpZ2F0aW9uX25hdmlnYXRpb25DaGVja2JveF9fM0tyYk86Y2hlY2tlZCArIC5OYXZpZ2F0aW9uX05hdmlnYXRpb25CdXR0b25fXzE2SmFXIC5OYXZpZ2F0aW9uX25hdmlnYXRpb25JY29uX18xU3p0dCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4uTmF2aWdhdGlvbl9uYXZpZ2F0aW9uQ2hlY2tib3hfXzNLcmJPOmNoZWNrZWQgKyAuTmF2aWdhdGlvbl9OYXZpZ2F0aW9uQnV0dG9uX18xNkphVyAuTmF2aWdhdGlvbl9uYXZpZ2F0aW9uSWNvbl9fMVN6dHQ6YmVmb3JlIHtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuLk5hdmlnYXRpb25fbmF2aWdhdGlvbkNoZWNrYm94X18zS3JiTzpjaGVja2VkICsgLk5hdmlnYXRpb25fTmF2aWdhdGlvbkJ1dHRvbl9fMTZKYVcgLk5hdmlnYXRpb25fbmF2aWdhdGlvbkljb25fXzFTenR0OjphZnRlciB7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwMnB4KSB7XFxyXFxuICAgIC5OYXZpZ2F0aW9uX05hdmlnYXRpb25CdXR0b25fXzE2SmFXIHtcXHJcXG4gICAgICAgIHRvcDogMTUuNXB4O1xcclxcbiAgICAgICAgcmlnaHQ6IDE1LjVweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLk5hdmlnYXRpb25fbmF2aWdhdGlvbkJhY2tncm91bmRfXzJ3RXI2IHtcXHJcXG4gICAgICAgIHRvcDogMTdweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAxN3B4O1xcclxcbiAgICB9XFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvY29tcG9uZW50cy9VaS9OYXZpZ2F0aW9uL05hdmlnYXRpb24ubW9kdWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHNEQUFzRDtJQUV0RCw4Q0FBOEM7O0lBRTlDLGdEQUF3Qzs7WUFBeEMsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUdBQTZEO0lBQTdELHFFQUE2RDtJQUE3RCw2REFBNkQ7SUFDN0QsK0JBQStCO0lBQy9CLHVDQUF1QztJQUN2QyxhQUFhO0lBQ2IsZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXOztJQUVYLHdFQUF3RDs7SUFBeEQsZ0VBQXdEOztJQUF4RCx3REFBd0Q7O0lBQXhELDhHQUF3RDtBQUM1RDs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLE1BQU07SUFDTixRQUFRO0lBQ1IsYUFBYTtJQUNiLFVBQVU7SUFDVixrQkFBa0I7O0lBRWxCLGtFQUEwRDs7SUFBMUQsMERBQTBEO0FBQzlEOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsNkZBQXFGO0lBQXJGLHFGQUFxRjtJQUNyRixxQkFBcUI7SUFDckIsMkJBQW1CO0lBQW5CLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSw0QkFBb0I7WUFBcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixPQUFPO0FBQ1g7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsMkJBQW1CO0lBQW5CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFFBQVE7SUFDUiwyQkFBbUI7SUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxNQUFNO0lBQ04saUNBQXlCO1lBQXpCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLE1BQU07SUFDTixrQ0FBMEI7WUFBMUIsMEJBQTBCO0FBQzlCOzs7O0FBSUE7SUFDSTtRQUNJLFdBQVc7UUFDWCxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksU0FBUztRQUNULFdBQVc7SUFDZjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbi5uYXZpZ2F0aW9uQ2hlY2tib3gge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uTmF2aWdhdGlvbkJ1dHRvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBoZWlnaHQ6IDY1cHg7XFxyXFxuICAgIHdpZHRoOiA2NXB4O1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMzcuNXB4O1xcclxcbiAgICByaWdodDogMzcuNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHotaW5kZXg6IDIwMDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMTBweCAtOHB4IHJnYmEoMCwwLDAsMC43NSk7XFxyXFxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IC04cHggcmdiYSgwLDAsMCwwLjc1KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IC04cHggcmdiYSgwLDAsMCwwLjc1KTtcXHJcXG5cXHJcXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYShibGFjaywgMC4xKTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRpb25CYWNrZ3JvdW5kIHtcXHJcXG4gICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoICMwNDZiYzUgMTAlLCAjMTUyZmIzIDEwMCUpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDIwLjBweCApO1xcclxcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggMjAuMHB4ICk7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiA0MHB4O1xcclxcbiAgICByaWdodDogNDBweDtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC44cyBjdWJpYy1iZXppZXIoMC44NiwgMCwgMC4wNywgMSk7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uTmF2IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgei1pbmRleDogMTUwMDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjZzIGN1YmljLWJlemllcigwLjY4LCAtMC41NSwgMC4yNjUsIDEuNTUpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbk5hdiBoMSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyMHB4O1xcclxcbiAgICBsZWZ0OiAyMHB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHotaW5kZXg6IDUwMDtcXHJcXG4gICAgZm9udC1zaXplOiAyNnB4O1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbkxpc3Qge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNDAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbkl0ZW0ge1xcclxcbiAgICBtYXJnaW46IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uTGluayB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCB0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNTAlLCB3aGl0ZSA1MCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI1MCU7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5uYXZpZ2F0aW9uTGluazphY3RpdmUsIC5uYXZpZ2F0aW9uTGluazpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCU7XFxyXFxuICAgIGNvbG9yOiAjRUU3QzdEO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uQ2hlY2tib3g6Y2hlY2tlZCB+IC5uYXZpZ2F0aW9uQmFja2dyb3VuZCB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoODApO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbkNoZWNrYm94OmNoZWNrZWQgfiAubmF2aWdhdGlvbk5hdiB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxufVxcclxcbi5uYXZpZ2F0aW9uSWNvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMzJweDtcXHJcXG59XFxyXFxuLm5hdmlnYXRpb25JY29uLCAubmF2aWdhdGlvbkljb246OmJlZm9yZSwgLm5hdmlnYXRpb25JY29uOmFmdGVyIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxuICAgIGhlaWdodDogMnB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0YTRhO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uSWNvbjo6YmVmb3JlLCAubmF2aWdhdGlvbkljb246YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbkljb246OmJlZm9yZSB7XFxyXFxuICAgIHRvcDogLThweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cztcXHJcXG59XFxyXFxuXFxyXFxuLm5hdmlnYXRpb25JY29uOjphZnRlciB7XFxyXFxuICAgIHRvcDogOHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xcclxcbn1cXHJcXG5cXHJcXG4uTmF2aWdhdGlvbkJ1dHRvbjpob3ZlciAubmF2aWdhdGlvbkljb246OmJlZm9yZSB7XFxyXFxuICAgIHRvcDogLTEwcHg7XFxyXFxufVxcclxcbi5OYXZpZ2F0aW9uQnV0dG9uOmhvdmVyIC5uYXZpZ2F0aW9uSWNvbjo6YWZ0ZXIge1xcclxcbiAgICB0b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5uYXZpZ2F0aW9uQ2hlY2tib3g6Y2hlY2tlZCArIC5OYXZpZ2F0aW9uQnV0dG9uIC5uYXZpZ2F0aW9uSWNvbiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbkNoZWNrYm94OmNoZWNrZWQgKyAuTmF2aWdhdGlvbkJ1dHRvbiAubmF2aWdhdGlvbkljb246YmVmb3JlIHtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2aWdhdGlvbkNoZWNrYm94OmNoZWNrZWQgKyAuTmF2aWdhdGlvbkJ1dHRvbiAubmF2aWdhdGlvbkljb246OmFmdGVyIHtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwMnB4KSB7XFxyXFxuICAgIC5OYXZpZ2F0aW9uQnV0dG9uIHtcXHJcXG4gICAgICAgIHRvcDogMTUuNXB4O1xcclxcbiAgICAgICAgcmlnaHQ6IDE1LjVweDtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICAgLm5hdmlnYXRpb25CYWNrZ3JvdW5kIHtcXHJcXG4gICAgICAgIHRvcDogMTdweDtcXHJcXG4gICAgICAgIHJpZ2h0OiAxN3B4O1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm5hdmlnYXRpb25DaGVja2JveFwiOiBcIk5hdmlnYXRpb25fbmF2aWdhdGlvbkNoZWNrYm94X18zS3JiT1wiLFxuXHRcIk5hdmlnYXRpb25CdXR0b25cIjogXCJOYXZpZ2F0aW9uX05hdmlnYXRpb25CdXR0b25fXzE2SmFXXCIsXG5cdFwibmF2aWdhdGlvbkJhY2tncm91bmRcIjogXCJOYXZpZ2F0aW9uX25hdmlnYXRpb25CYWNrZ3JvdW5kX18yd0VyNlwiLFxuXHRcIm5hdmlnYXRpb25OYXZcIjogXCJOYXZpZ2F0aW9uX25hdmlnYXRpb25OYXZfXzFhQWEwXCIsXG5cdFwibmF2aWdhdGlvbkxpc3RcIjogXCJOYXZpZ2F0aW9uX25hdmlnYXRpb25MaXN0X19NWDBoUVwiLFxuXHRcIm5hdmlnYXRpb25JdGVtXCI6IFwiTmF2aWdhdGlvbl9uYXZpZ2F0aW9uSXRlbV9fMm9CMHZcIixcblx0XCJuYXZpZ2F0aW9uTGlua1wiOiBcIk5hdmlnYXRpb25fbmF2aWdhdGlvbkxpbmtfX0VlUGZmXCIsXG5cdFwibmF2aWdhdGlvbkljb25cIjogXCJOYXZpZ2F0aW9uX25hdmlnYXRpb25JY29uX18xU3p0dFwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=