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
/* harmony import */ var _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navigation/Navigation */ "./src/components/Ui/Navigation/Navigation.tsx");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-grid-system */ "./node_modules/react-grid-system/build/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\components\\Ui\\NavBar\\Navbar.tsx",
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
  }, []);
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 12
    }
  }, __jsx("div", {
    id: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().Navbar),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 6
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, __jsx("a", {
    id: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_5___default().loggo),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, "Kreditkortskoll.com")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_4__.Visible, {
    lg: true,
    xl: true,
    xxl: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(_SlideDown_SlideDown__WEBPACK_IMPORTED_MODULE_2__.default, {
    visible: slideDownRef.current,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.li, {
    whileHover: {
      y: -2
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/kort",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 45
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 64
    }
  }, "Alla kreditkort"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.li, {
    whileHover: {
      y: -2
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/artiklar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 45
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 68
    }
  }, "Artiklar"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.li, {
    whileHover: {
      y: -2
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/faq",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 45
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 63
    }
  }, "FAQ"))))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_4__.Visible, {
    xs: true,
    sm: true,
    md: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, __jsx(_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__.default, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
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
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\components\\Ui\\Navigation\\Navigation.tsx",
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
___CSS_LOADER_EXPORT___.push([module.id, "\r\n#Navigation_Navigation__17hQ- .Navigation_navigationCheckbox__3KrbO {\r\n    display: none;\r\n}\r\n\r\n#Navigation_Navigation__17hQ- .Navigation_NavigationButton__16JaW {\r\n    background-color: white;\r\n    height: 65px;\r\n    width: 65px;\r\n    position: fixed;\r\n    top: 37.5px;\r\n    right: 37.5px;\r\n    border-radius: 50%;\r\n    z-index: 2000;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    -webkit-box-shadow: 0px 2px 10px -8px rgba(0,0,0,0.75);\r\n    box-shadow: 0px 2px 10px -8px rgba(0,0,0,0.75);\r\n\r\n    -webkit-box-shadow: 0 10px 30px rgba(black, 0.1);\r\n\r\n            box-shadow: 0 10px 30px rgba(black, 0.1);\r\n}\r\n\r\n#Navigation_Navigation__17hQ- .Navigation_navigationBackground__2wEr6 {\r\n    height: 60px;\r\n    width: 60px;\r\n    border-radius: 50%;\r\n    background-image: -webkit-gradient( linear, left top, left bottom, color-stop(10%, #046bc5), to(#152fb3));\r\n    background-image: -webkit-linear-gradient( #046bc5 10%, #152fb3 100%);\r\n    background-image: linear-gradient( #046bc5 10%, #152fb3 100%);\r\n    backdrop-filter: blur( 20.0px );\r\n    -webkit-backdrop-filter: blur( 20.0px );\r\n    z-index: 1000;\r\n    position: fixed;\r\n    top: 40px;\r\n    right: 40px;\r\n\r\n    -webkit-transition: -webkit-transform .8s cubic-bezier(0.86, 0, 0.07, 1);\r\n\r\n    transition: -webkit-transform .8s cubic-bezier(0.86, 0, 0.07, 1);\r\n\r\n    transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);\r\n\r\n    transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1), -webkit-transform .8s cubic-bezier(0.86, 0, 0.07, 1);\r\n}\r\n\r\n#Navigation_Navigation__17hQ- .Navigation_navigationNav__1aAa0 {\r\n    height: 100vh;\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: 1500;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n\r\n    -webkit-transition: all .6s cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n\r\n    transition: all .6s cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n}\r\n\r\n#Navigation_Navigation__17hQ- .Navigation_navigationNav__1aAa0 h1 {\r\n    position: absolute;\r\n    top: 20px;\r\n    left: 20px;\r\n    color: white;\r\n    z-index: 500;\r\n    font-size: 26px;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n}\r\n\r\n#Navigation_Navigation__17hQ- .Navigation_navigationList__MX0hQ {\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    list-style: none;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\n#Navigation_Navigation__17hQ- .Navigation_navigationItem__2oB0v {\r\n    margin: 15px;\r\n}\r\n\r\n#Navigation_Navigation__17hQ- .Navigation_navigationLink__EePff {\r\n    display: inline-block;\r\n    font-size: 28px;\r\n    font-weight: 300;\r\n    padding: 10px 15px;\r\n    color: white;\r\n    text-decoration: none;\r\n    background-image: -webkit-linear-gradient(330deg, transparent 0%, transparent 50%, white 50%);\r\n    background-image: linear-gradient(120deg, transparent 0%, transparent 50%, white 50%);\r\n    background-size: 250%;\r\n    -webkit-transition: all .4s;\r\n    transition: all .4s;\r\n}\r\n\r\n\r\n#Navigation_Navigation__17hQ- .Navigation_navigationLink__EePff:active, .Navigation_navigationLink__EePff:hover {\r\n    background-position: 100%;\r\n    color: #EE7C7D;\r\n    -webkit-transform: translateX(10px);\r\n            transform: translateX(10px);\r\n}\r\n\r\n#Navigation_Navigation__17hQ- .Navigation_navigationCheckbox__3KrbO:checked ~ .Navigation_navigationBackground__2wEr6 {\r\n    -webkit-transform: scale(80);\r\n            transform: scale(80);\r\n}\r\n\r\n#Navigation_Navigation__17hQ- .Navigation_navigationCheckbox__3KrbO:checked ~ .Navigation_navigationNav__1aAa0 {\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n#Navigation_Navigation__17hQ- .Navigation_navigationIcon__1Sztt {\r\n    position: relative;\r\n    margin-top: 32px;\r\n}\r\n#Navigation_Navigation__17hQ- .Navigation_navigationIcon__1Sztt, .Navigation_navigationIcon__1Sztt::before, .Navigation_navigationIcon__1Sztt:after {\r\n    width: 30px;\r\n    height: 2px;\r\n    background-color: #4a4a4a;\r\n    display: inline-block;\r\n}\r\n\r\n#Navigation_Navigation__17hQ- .Navigation_navigationIcon__1Sztt::before, .Navigation_navigationIcon__1Sztt:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n}\r\n\r\n#Navigation_Navigation__17hQ- .Navigation_navigationIcon__1Sztt::before {\r\n    top: -8px;\r\n    -webkit-transition: all .4s;\r\n    transition: all .4s;\r\n}\r\n\r\n#Navigation_Navigation__17hQ- .Navigation_navigationIcon__1Sztt::after {\r\n    top: 8px;\r\n    -webkit-transition: all .4s;\r\n    transition: all .4s;\r\n}\r\n\r\n#Navigation_Navigation__17hQ- .Navigation_NavigationButton__16JaW:hover .Navigation_navigationIcon__1Sztt::before {\r\n    top: -10px;\r\n}\r\n#Navigation_Navigation__17hQ- .Navigation_NavigationButton__16JaW:hover .Navigation_navigationIcon__1Sztt::after {\r\n    top: 10px;\r\n}\r\n\r\n#Navigation_Navigation__17hQ- .Navigation_navigationCheckbox__3KrbO:checked + .Navigation_NavigationButton__16JaW .Navigation_navigationIcon__1Sztt {\r\n    background-color: transparent;\r\n}\r\n\r\n#Navigation_Navigation__17hQ- .Navigation_navigationCheckbox__3KrbO:checked + .Navigation_NavigationButton__16JaW .Navigation_navigationIcon__1Sztt:before {\r\n    top: 0;\r\n    -webkit-transform: rotate(135deg);\r\n            transform: rotate(135deg);\r\n}\r\n\r\n#Navigation_Navigation__17hQ- .Navigation_navigationCheckbox__3KrbO:checked + .Navigation_NavigationButton__16JaW .Navigation_navigationIcon__1Sztt::after {\r\n    top: 0;\r\n    -webkit-transform: rotate(-135deg);\r\n            transform: rotate(-135deg);\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 4002px) {\r\n    .Navigation_NavigationButton__16JaW {\r\n        top: 15.5px;\r\n        right: 15.5px;\r\n    }\r\n    \r\n    .Navigation_navigationBackground__2wEr6 {\r\n        top: 17px;\r\n        right: 17px;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://src/components/Ui/Navigation/Navigation.module.css"],"names":[],"mappings":";AACA;IACI,aAAa;AACjB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,WAAW;IACX,eAAe;IACf,WAAW;IACX,aAAa;IACb,kBAAkB;IAClB,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,sDAAsD;IAEtD,8CAA8C;;IAE9C,gDAAwC;;YAAxC,wCAAwC;AAC5C;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,yGAA6D;IAA7D,qEAA6D;IAA7D,6DAA6D;IAC7D,+BAA+B;IAC/B,uCAAuC;IACvC,aAAa;IACb,eAAe;IACf,SAAS;IACT,WAAW;;IAEX,wEAAwD;;IAAxD,gEAAwD;;IAAxD,wDAAwD;;IAAxD,8GAAwD;AAC5D;;AAEA;IACI,aAAa;IACb,eAAe;IACf,WAAW;IACX,MAAM;IACN,QAAQ;IACR,aAAa;IACb,UAAU;IACV,kBAAkB;;IAElB,kEAA0D;;IAA1D,0DAA0D;AAC9D;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,wCAAgC;YAAhC,gCAAgC;IAChC,gBAAgB;IAChB,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,qBAAqB;IACrB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,YAAY;IACZ,qBAAqB;IACrB,6FAAqF;IAArF,qFAAqF;IACrF,qBAAqB;IACrB,2BAAmB;IAAnB,mBAAmB;AACvB;;;AAGA;IACI,yBAAyB;IACzB,cAAc;IACd,mCAA2B;YAA3B,2BAA2B;AAC/B;;AAEA;IACI,4BAAoB;YAApB,oBAAoB;AACxB;;AAEA;IACI,UAAU;IACV,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,WAAW;IACX,WAAW;IACX,yBAAyB;IACzB,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,OAAO;AACX;;AAEA;IACI,SAAS;IACT,2BAAmB;IAAnB,mBAAmB;AACvB;;AAEA;IACI,QAAQ;IACR,2BAAmB;IAAnB,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd;AACA;IACI,SAAS;AACb;;AAEA;IACI,6BAA6B;AACjC;;AAEA;IACI,MAAM;IACN,iCAAyB;YAAzB,yBAAyB;AAC7B;;AAEA;IACI,MAAM;IACN,kCAA0B;YAA1B,0BAA0B;AAC9B;;;;AAIA;IACI;QACI,WAAW;QACX,aAAa;IACjB;;IAEA;QACI,SAAS;QACT,WAAW;IACf;AACJ","sourcesContent":["\r\n#Navigation .navigationCheckbox {\r\n    display: none;\r\n}\r\n\r\n#Navigation .NavigationButton {\r\n    background-color: white;\r\n    height: 65px;\r\n    width: 65px;\r\n    position: fixed;\r\n    top: 37.5px;\r\n    right: 37.5px;\r\n    border-radius: 50%;\r\n    z-index: 2000;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    -webkit-box-shadow: 0px 2px 10px -8px rgba(0,0,0,0.75);\r\n    -moz-box-shadow: 0px 2px 10px -8px rgba(0,0,0,0.75);\r\n    box-shadow: 0px 2px 10px -8px rgba(0,0,0,0.75);\r\n\r\n    box-shadow: 0 10px 30px rgba(black, 0.1);\r\n}\r\n\r\n#Navigation .navigationBackground {\r\n    height: 60px;\r\n    width: 60px;\r\n    border-radius: 50%;\r\n    background-image: linear-gradient( #046bc5 10%, #152fb3 100%);\r\n    backdrop-filter: blur( 20.0px );\r\n    -webkit-backdrop-filter: blur( 20.0px );\r\n    z-index: 1000;\r\n    position: fixed;\r\n    top: 40px;\r\n    right: 40px;\r\n\r\n    transition: transform .8s cubic-bezier(0.86, 0, 0.07, 1);\r\n}\r\n\r\n#Navigation .navigationNav {\r\n    height: 100vh;\r\n    position: fixed;\r\n    width: 100%;\r\n    top: 0;\r\n    right: 0;\r\n    z-index: 1500;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n\r\n    transition: all .6s cubic-bezier(0.68, -0.55, 0.265, 1.55);\r\n}\r\n\r\n#Navigation .navigationNav h1 {\r\n    position: absolute;\r\n    top: 20px;\r\n    left: 20px;\r\n    color: white;\r\n    z-index: 500;\r\n    font-size: 26px;\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n}\r\n\r\n#Navigation .navigationList {\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    list-style: none;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\n#Navigation .navigationItem {\r\n    margin: 15px;\r\n}\r\n\r\n#Navigation .navigationLink {\r\n    display: inline-block;\r\n    font-size: 28px;\r\n    font-weight: 300;\r\n    padding: 10px 15px;\r\n    color: white;\r\n    text-decoration: none;\r\n    background-image: linear-gradient(120deg, transparent 0%, transparent 50%, white 50%);\r\n    background-size: 250%;\r\n    transition: all .4s;\r\n}\r\n\r\n\r\n#Navigation .navigationLink:active, .navigationLink:hover {\r\n    background-position: 100%;\r\n    color: #EE7C7D;\r\n    transform: translateX(10px);\r\n}\r\n\r\n#Navigation .navigationCheckbox:checked ~ .navigationBackground {\r\n    transform: scale(80);\r\n}\r\n\r\n#Navigation .navigationCheckbox:checked ~ .navigationNav {\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n#Navigation .navigationIcon {\r\n    position: relative;\r\n    margin-top: 32px;\r\n}\r\n#Navigation .navigationIcon, .navigationIcon::before, .navigationIcon:after {\r\n    width: 30px;\r\n    height: 2px;\r\n    background-color: #4a4a4a;\r\n    display: inline-block;\r\n}\r\n\r\n#Navigation .navigationIcon::before, .navigationIcon:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n}\r\n\r\n#Navigation .navigationIcon::before {\r\n    top: -8px;\r\n    transition: all .4s;\r\n}\r\n\r\n#Navigation .navigationIcon::after {\r\n    top: 8px;\r\n    transition: all .4s;\r\n}\r\n\r\n#Navigation .NavigationButton:hover .navigationIcon::before {\r\n    top: -10px;\r\n}\r\n#Navigation .NavigationButton:hover .navigationIcon::after {\r\n    top: 10px;\r\n}\r\n\r\n#Navigation .navigationCheckbox:checked + .NavigationButton .navigationIcon {\r\n    background-color: transparent;\r\n}\r\n\r\n#Navigation .navigationCheckbox:checked + .NavigationButton .navigationIcon:before {\r\n    top: 0;\r\n    transform: rotate(135deg);\r\n}\r\n\r\n#Navigation .navigationCheckbox:checked + .NavigationButton .navigationIcon::after {\r\n    top: 0;\r\n    transform: rotate(-135deg);\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 4002px) {\r\n    .NavigationButton {\r\n        top: 15.5px;\r\n        right: 15.5px;\r\n    }\r\n    \r\n    .navigationBackground {\r\n        top: 17px;\r\n        right: 17px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
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
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVWkvTmF2QmFyL05hdmJhci50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VpL05hdmlnYXRpb24vTmF2aWdhdGlvbi50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VpL05hdmlnYXRpb24vTmF2aWdhdGlvbi5tb2R1bGUuY3NzP2I3NzYiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1VpL05hdmlnYXRpb24vTmF2aWdhdGlvbi5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbIk5hdmJhciIsInVzZVN0YXRlIiwic2xpZGVEb3duIiwiX3NldFNsaWRlRG93biIsInNsaWRlRG93blJlZiIsInVzZVJlZiIsInNldFNsaWRlRG93biIsImRhdGEiLCJjdXJyZW50IiwidXNlRWZmZWN0IiwibGFzdFNjcm9sbFRvcCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdCIsInBhZ2VZT2Zmc2V0IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxUb3AiLCJjYXB0dXJlIiwicGFzc2l2ZSIsInN0eWxlcyIsInkiLCJOYXZpZ2F0aW9uQnV0dG9uIiwiaW5wdXRSZWYiLCJjbG9zZU5hdmlnYXRpb24iLCJSb3V0ZXIiLCJjaGVja2VkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFFa0JDLCtDQUFRLENBQUMsS0FBRCxDQUYxQjtBQUFBLE1BRVZDLFNBRlU7QUFBQSxNQUVDQyxhQUZEOztBQUlqQixNQUFNQyxZQUFZLEdBQUdDLDZDQUFNLENBQUNILFNBQUQsQ0FBM0I7O0FBQ0EsTUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsSUFBRCxFQUFvQjtB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S0FBSyxpRkFBaUYsb0JBQW9CLG9CQUFvQixrQ0FBa0MsOEJBQThCLEtBQUssb0VBQW9FLHNCQUFzQiwyQkFBMkIsZ0JBQWdCLEtBQUssNkNBQTZDLGtCQUFrQiw0QkFBNEIsS0FBSyw0Q0FBNEMsaUJBQWlCLDRCQUE0QixLQUFLLHFFQUFxRSxtQkFBbUIsS0FBSyxnRUFBZ0Usa0JBQWtCLEtBQUsscUZBQXFGLHNDQUFzQyxLQUFLLDRGQUE0RixlQUFlLGtDQUFrQyxLQUFLLDRGQUE0RixlQUFlLG1DQUFtQyxLQUFLLHVEQUF1RCwyQkFBMkIsd0JBQXdCLDBCQUEwQixTQUFTLHVDQUF1QyxzQkFBc0Isd0JBQXdCLFNBQVMsS0FBSyxtQkFBbUI7QUFDNzlXO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMzJiMmJlZDUxZjg5Mjk0ZjY5M2YuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXZiYXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2xpZGVEb3duIGZyb20gJy4vU2xpZGVEb3duL1NsaWRlRG93bic7XHJcbmltcG9ydCBOYXZpZ2F0aW9uQnV0dG9uIGZyb20gJy4uL05hdmlnYXRpb24vTmF2aWdhdGlvbic7XHJcbmltcG9ydCB7IFZpc2libGUgfSBmcm9tICdyZWFjdC1ncmlkLXN5c3RlbSc7XHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3NsaWRlRG93biwgX3NldFNsaWRlRG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3Qgc2xpZGVEb3duUmVmID0gdXNlUmVmKHNsaWRlRG93bik7XHJcbiAgICBjb25zdCBzZXRTbGlkZURvd24gPSAoZGF0YSA6IGJvb2xlYW4pID0+IHtcclxuICAgICAgc2xpZGVEb3duUmVmLmN1cnJlbnQgPSBkYXRhO1xyXG4gICAgICBfc2V0U2xpZGVEb3duKGRhdGEpO1xyXG4gICAgfTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICB2YXIgbGFzdFNjcm9sbFRvcCA9IDA7XHJcblxyXG4gICAgICAvLyBlbGVtZW50IHNob3VsZCBiZSByZXBsYWNlZCB3aXRoIHRoZSBhY3R1YWwgdGFyZ2V0IGVsZW1lbnQgb24gd2hpY2ggeW91IGhhdmUgYXBwbGllZCBzY3JvbGwsIHVzZSB3aW5kb3cgaW4gY2FzZSBvZiBubyB0YXJnZXQgZWxlbWVudC5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4geyAvLyBvciB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLi4uLlxyXG4gICAgICAgICB2YXIgc3QgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDsgLy8gQ3JlZGl0czogXCJodHRwczovL2dpdGh1Yi5jb20vcWVyZW15L3NvL2Jsb2IvbWFzdGVyL3NvLmRvbS5qcyNMNDI2XCJcclxuICAgICAgICAgaWYgKHN0IDwgbGFzdFNjcm9sbFRvcCkge1xyXG4gICAgICAgICAgIGlmIChzdCA+IDYwMCkge1xyXG4gICAgICAgICAgICAgcmV0dXJuIHNsaWRlRG93blJlZi5jdXJyZW50ID8gbnVsbCA6IHNldFNsaWRlRG93bih0cnVlKTtcclxuICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBzZXRTbGlkZURvd24oZmFsc2UpXHJcbiAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFNsaWRlRG93bihmYWxzZSlcclxuICAgICAgICAgfVxyXG4gICAgICAgICBsYXN0U2Nyb2xsVG9wID0gc3QgPD0gMCA/IDAgOiBzdDsgLy8gRm9yIE1vYmlsZSBvciBuZWdhdGl2ZSBzY3JvbGxpbmdcclxuICAgICAgfSwge1xyXG4gICAgICAgIGNhcHR1cmU6IHRydWUsXHJcbiAgICAgICAgcGFzc2l2ZTogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH0gLCBbXSlcclxuXHJcbiAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgIDxkaXYgaWQ9e3N0eWxlcy5OYXZiYXJ9PlxyXG4gICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPGEgaWQ9e3N0eWxlcy5sb2dnb30+S3JlZGl0a29ydHNrb2xsLmNvbTwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgICA8VmlzaWJsZSBsZyB4bCB4eGw+XHJcbiAgICAgIDxTbGlkZURvd24gdmlzaWJsZT17c2xpZGVEb3duUmVmLmN1cnJlbnR9IC8+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxtb3Rpb24ubGkgd2hpbGVIb3Zlcj17e3k6IC0yfX0+PExpbmsgaHJlZj1cIi9rb3J0XCI+PGE+QWxsYSBrcmVkaXRrb3J0PC9hPjwvTGluaz48L21vdGlvbi5saT5cclxuICAgICAgICAgICAgPG1vdGlvbi5saSB3aGlsZUhvdmVyPXt7eTogLTJ9fT48TGluayBocmVmPVwiL2FydGlrbGFyXCI+PGE+QXJ0aWtsYXI8L2E+PC9MaW5rPjwvbW90aW9uLmxpPlxyXG4gICAgICAgICAgICA8bW90aW9uLmxpIHdoaWxlSG92ZXI9e3t5OiAtMn19PjxMaW5rIGhyZWY9XCIvZmFxXCI+PGE+RkFRPC9hPjwvTGluaz48L21vdGlvbi5saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgIDwvVmlzaWJsZT5cclxuICAgICAgPFZpc2libGUgeHMgc20gbWQ+XHJcbiAgICAgICAgPE5hdmlnYXRpb25CdXR0b24gLz5cclxuICAgICAgPC9WaXNpYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyOyIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9OYXZpZ2F0aW9uLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgTmF2aWdhdGlvbkJ1dHRvbjogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgY29uc3QgaW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IGNsb3NlTmF2aWdhdGlvbiA9ICgpID0+IHtcclxuICAgICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IHtcclxuICAgICAgICBpZighaW5wdXRSZWYuY3VycmVudCkgcmV0dXJuXHJcbiAgICAgICAgaW5wdXRSZWYuY3VycmVudC5jaGVja2VkID0gZmFsc2VcclxuICAgICAgfSk7IFxyXG4gICAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUVycm9yJywgKCkgPT4ge1xyXG4gICAgICAgIGlmKCFpbnB1dFJlZi5jdXJyZW50KSByZXR1cm5cclxuICAgICAgICBpbnB1dFJlZi5jdXJyZW50LmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgICB9KTtcclxuICB9XHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgaWQ9e3N0eWxlcy5OYXZpZ2F0aW9ufT5cclxuICAgICAgPGlucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkNoZWNrYm94fVxyXG4gICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgaWQ9XCJuYXZpLXRvZ2dsZVwiXHJcbiAgICAgICAgcmVmPXtpbnB1dFJlZn1cclxuICAgICAgLz5cclxuXHJcbiAgICAgIDxsYWJlbCBodG1sRm9yPVwibmF2aS10b2dnbGVcIiBjbGFzc05hbWU9e3N0eWxlcy5OYXZpZ2F0aW9uQnV0dG9ufT5cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uSWNvbn0+PC9zcGFuPlxyXG4gICAgICA8L2xhYmVsPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uQmFja2dyb3VuZH0+Jm5ic3A7PC9kaXY+XHJcbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbk5hdn0+XHJcbiAgICAgIDxoMT5LcmVkaXRrb3J0c2tvbGwuY29tPC9oMT5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkxpc3R9PlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25JdGVtfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9rb3J0XCI+XHJcbiAgICAgICAgICAgICAgPGEgb25DbGljaz17Y2xvc2VOYXZpZ2F0aW9ufSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uTGlua30+QWxsYSBrcmVkaXRrb3J0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25JdGVtfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtjbG9zZU5hdmlnYXRpb259IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25MaW5rfT5LcmVkaXRrb3J0cyB0ZXN0ZXQ8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkl0ZW19PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2FydGlrbGFyXCI+XHJcbiAgICAgICAgICAgICAgPGEgb25DbGljaz17Y2xvc2VOYXZpZ2F0aW9ufSBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uTGlua30+QXJ0aWtsYXI8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkl0ZW19PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2ZhcVwiPlxyXG4gICAgICAgICAgICAgIDxhIG9uQ2xpY2s9e2Nsb3NlTmF2aWdhdGlvbn0gY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkxpbmt9PkZBUTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L25hdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uQnV0dG9uO1xyXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXN0eWxlLWxvYWRlci9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzJdIS4vTmF2aWdhdGlvbi5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gZnVuY3Rpb24oZWxlbWVudCl7Ly8gVGhlc2UgZWxlbWVudHMgc2hvdWxkIGFsd2F5cyBleGlzdC4gSWYgdGhleSBkbyBub3QsXG4vLyB0aGlzIGNvZGUgc2hvdWxkIGZhaWwuXG52YXIgYW5jaG9yRWxlbWVudD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjX19uZXh0X2Nzc19fRE9fTk9UX1VTRV9fJyk7dmFyIHBhcmVudE5vZGU9YW5jaG9yRWxlbWVudC5wYXJlbnROb2RlOy8vIE5vcm1hbGx5IDxoZWFkPlxuLy8gRWFjaCBzdHlsZSB0YWcgc2hvdWxkIGJlIHBsYWNlZCByaWdodCBiZWZvcmUgb3VyXG4vLyBhbmNob3IuIEJ5IGluc2VydGluZyBiZWZvcmUgYW5kIG5vdCBhZnRlciwgd2UgZG8gbm90XG4vLyBuZWVkIHRvIHRyYWNrIHRoZSBsYXN0IGluc2VydGVkIGVsZW1lbnQuXG5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlbGVtZW50LGFuY2hvckVsZW1lbnQpO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsYixpc05hbWVkRXhwb3J0KXtpZighYSYmYnx8YSYmIWIpe3JldHVybiBmYWxzZTt9bGV0IHA7Zm9yKHAgaW4gYSl7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoYVtwXSE9PWJbcF0pe3JldHVybiBmYWxzZTt9fWZvcihwIGluIGIpe2lmKGlzTmFtZWRFeHBvcnQmJnA9PT0nZGVmYXVsdCcpey8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuY29udGludWU7fWlmKCFhW3BdKXtyZXR1cm4gZmFsc2U7fX1yZXR1cm4gdHJ1ZTt9O1xuICAgIHZhciBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzJdLnVzZVsyXSEuL05hdmlnYXRpb24ubW9kdWxlLmNzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZlsyXS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbMl0udXNlWzJdIS4vTmF2aWdhdGlvbi5tb2R1bGUuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIlxcclxcbiNOYXZpZ2F0aW9uX05hdmlnYXRpb25fXzE3aFEtIC5OYXZpZ2F0aW9uX25hdmlnYXRpb25DaGVja2JveF9fM0tyYk8ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jTmF2aWdhdGlvbl9OYXZpZ2F0aW9uX18xN2hRLSAuTmF2aWdhdGlvbl9OYXZpZ2F0aW9uQnV0dG9uX18xNkphVyB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBoZWlnaHQ6IDY1cHg7XFxyXFxuICAgIHdpZHRoOiA2NXB4O1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMzcuNXB4O1xcclxcbiAgICByaWdodDogMzcuNXB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHotaW5kZXg6IDIwMDA7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMTBweCAtOHB4IHJnYmEoMCwwLDAsMC43NSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMTBweCAtOHB4IHJnYmEoMCwwLDAsMC43NSk7XFxyXFxuXFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYShibGFjaywgMC4xKTtcXHJcXG5cXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKGJsYWNrLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4jTmF2aWdhdGlvbl9OYXZpZ2F0aW9uX18xN2hRLSAuTmF2aWdhdGlvbl9uYXZpZ2F0aW9uQmFja2dyb3VuZF9fMndFcjYge1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IC13ZWJraXQtZ3JhZGllbnQoIGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDEwJSwgIzA0NmJjNSksIHRvKCMxNTJmYjMpKTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoICMwNDZiYzUgMTAlLCAjMTUyZmIzIDEwMCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoICMwNDZiYzUgMTAlLCAjMTUyZmIzIDEwMCUpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoIDIwLjBweCApO1xcclxcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1ciggMjAuMHB4ICk7XFxyXFxuICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiA0MHB4O1xcclxcbiAgICByaWdodDogNDBweDtcXHJcXG5cXHJcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuOHMgY3ViaWMtYmV6aWVyKDAuODYsIDAsIDAuMDcsIDEpO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuOHMgY3ViaWMtYmV6aWVyKDAuODYsIDAsIDAuMDcsIDEpO1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjhzIGN1YmljLWJlemllcigwLjg2LCAwLCAwLjA3LCAxKTtcXHJcXG5cXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC44cyBjdWJpYy1iZXppZXIoMC44NiwgMCwgMC4wNywgMSksIC13ZWJraXQtdHJhbnNmb3JtIC44cyBjdWJpYy1iZXppZXIoMC44NiwgMCwgMC4wNywgMSk7XFxyXFxufVxcclxcblxcclxcbiNOYXZpZ2F0aW9uX05hdmlnYXRpb25fXzE3aFEtIC5OYXZpZ2F0aW9uX25hdmlnYXRpb25OYXZfXzFhQWEwIHtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgei1pbmRleDogMTUwMDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcclxcblxcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNnMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuNnMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XFxyXFxufVxcclxcblxcclxcbiNOYXZpZ2F0aW9uX05hdmlnYXRpb25fXzE3aFEtIC5OYXZpZ2F0aW9uX25hdmlnYXRpb25OYXZfXzFhQWEwIGgxIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDIwcHg7XFxyXFxuICAgIGxlZnQ6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgei1pbmRleDogNTAwO1xcclxcbiAgICBmb250LXNpemU6IDI2cHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNOYXZpZ2F0aW9uX05hdmlnYXRpb25fXzE3aFEtIC5OYXZpZ2F0aW9uX25hdmlnYXRpb25MaXN0X19NWDBoUSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA0MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuI05hdmlnYXRpb25fTmF2aWdhdGlvbl9fMTdoUS0gLk5hdmlnYXRpb25fbmF2aWdhdGlvbkl0ZW1fXzJvQjB2IHtcXHJcXG4gICAgbWFyZ2luOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4jTmF2aWdhdGlvbl9OYXZpZ2F0aW9uX18xN2hRLSAuTmF2aWdhdGlvbl9uYXZpZ2F0aW9uTGlua19fRWVQZmYge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMzMwZGVnLCB0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNTAlLCB3aGl0ZSA1MCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTIwZGVnLCB0cmFuc3BhcmVudCAwJSwgdHJhbnNwYXJlbnQgNTAlLCB3aGl0ZSA1MCUpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI1MCU7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC40cztcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI05hdmlnYXRpb25fTmF2aWdhdGlvbl9fMTdoUS0gLk5hdmlnYXRpb25fbmF2aWdhdGlvbkxpbmtfX0VlUGZmOmFjdGl2ZSwgLk5hdmlnYXRpb25fbmF2aWdhdGlvbkxpbmtfX0VlUGZmOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJTtcXHJcXG4gICAgY29sb3I6ICNFRTdDN0Q7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI05hdmlnYXRpb25fTmF2aWdhdGlvbl9fMTdoUS0gLk5hdmlnYXRpb25fbmF2aWdhdGlvbkNoZWNrYm94X18zS3JiTzpjaGVja2VkIH4gLk5hdmlnYXRpb25fbmF2aWdhdGlvbkJhY2tncm91bmRfXzJ3RXI2IHtcXHJcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDgwKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDgwKTtcXHJcXG59XFxyXFxuXFxyXFxuI05hdmlnYXRpb25fTmF2aWdhdGlvbl9fMTdoUS0gLk5hdmlnYXRpb25fbmF2aWdhdGlvbkNoZWNrYm94X18zS3JiTzpjaGVja2VkIH4gLk5hdmlnYXRpb25fbmF2aWdhdGlvbk5hdl9fMWFBYTAge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbn1cXHJcXG4jTmF2aWdhdGlvbl9OYXZpZ2F0aW9uX18xN2hRLSAuTmF2aWdhdGlvbl9uYXZpZ2F0aW9uSWNvbl9fMVN6dHQge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDMycHg7XFxyXFxufVxcclxcbiNOYXZpZ2F0aW9uX05hdmlnYXRpb25fXzE3aFEtIC5OYXZpZ2F0aW9uX25hdmlnYXRpb25JY29uX18xU3p0dCwgLk5hdmlnYXRpb25fbmF2aWdhdGlvbkljb25fXzFTenR0OjpiZWZvcmUsIC5OYXZpZ2F0aW9uX25hdmlnYXRpb25JY29uX18xU3p0dDphZnRlciB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4jTmF2aWdhdGlvbl9OYXZpZ2F0aW9uX18xN2hRLSAuTmF2aWdhdGlvbl9uYXZpZ2F0aW9uSWNvbl9fMVN6dHQ6OmJlZm9yZSwgLk5hdmlnYXRpb25fbmF2aWdhdGlvbkljb25fXzFTenR0OmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuI05hdmlnYXRpb25fTmF2aWdhdGlvbl9fMTdoUS0gLk5hdmlnYXRpb25fbmF2aWdhdGlvbkljb25fXzFTenR0OjpiZWZvcmUge1xcclxcbiAgICB0b3A6IC04cHg7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC40cztcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cztcXHJcXG59XFxyXFxuXFxyXFxuI05hdmlnYXRpb25fTmF2aWdhdGlvbl9fMTdoUS0gLk5hdmlnYXRpb25fbmF2aWdhdGlvbkljb25fXzFTenR0OjphZnRlciB7XFxyXFxuICAgIHRvcDogOHB4O1xcclxcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNHM7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XFxyXFxufVxcclxcblxcclxcbiNOYXZpZ2F0aW9uX05hdmlnYXRpb25fXzE3aFEtIC5OYXZpZ2F0aW9uX05hdmlnYXRpb25CdXR0b25fXzE2SmFXOmhvdmVyIC5OYXZpZ2F0aW9uX25hdmlnYXRpb25JY29uX18xU3p0dDo6YmVmb3JlIHtcXHJcXG4gICAgdG9wOiAtMTBweDtcXHJcXG59XFxyXFxuI05hdmlnYXRpb25fTmF2aWdhdGlvbl9fMTdoUS0gLk5hdmlnYXRpb25fTmF2aWdhdGlvbkJ1dHRvbl9fMTZKYVc6aG92ZXIgLk5hdmlnYXRpb25fbmF2aWdhdGlvbkljb25fXzFTenR0OjphZnRlciB7XFxyXFxuICAgIHRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI05hdmlnYXRpb25fTmF2aWdhdGlvbl9fMTdoUS0gLk5hdmlnYXRpb25fbmF2aWdhdGlvbkNoZWNrYm94X18zS3JiTzpjaGVja2VkICsgLk5hdmlnYXRpb25fTmF2aWdhdGlvbkJ1dHRvbl9fMTZKYVcgLk5hdmlnYXRpb25fbmF2aWdhdGlvbkljb25fXzFTenR0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbiNOYXZpZ2F0aW9uX05hdmlnYXRpb25fXzE3aFEtIC5OYXZpZ2F0aW9uX25hdmlnYXRpb25DaGVja2JveF9fM0tyYk86Y2hlY2tlZCArIC5OYXZpZ2F0aW9uX05hdmlnYXRpb25CdXR0b25fXzE2SmFXIC5OYXZpZ2F0aW9uX25hdmlnYXRpb25JY29uX18xU3p0dDpiZWZvcmUge1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG4jTmF2aWdhdGlvbl9OYXZpZ2F0aW9uX18xN2hRLSAuTmF2aWdhdGlvbl9uYXZpZ2F0aW9uQ2hlY2tib3hfXzNLcmJPOmNoZWNrZWQgKyAuTmF2aWdhdGlvbl9OYXZpZ2F0aW9uQnV0dG9uX18xNkphVyAuTmF2aWdhdGlvbl9uYXZpZ2F0aW9uSWNvbl9fMVN6dHQ6OmFmdGVyIHtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDAycHgpIHtcXHJcXG4gICAgLk5hdmlnYXRpb25fTmF2aWdhdGlvbkJ1dHRvbl9fMTZKYVcge1xcclxcbiAgICAgICAgdG9wOiAxNS41cHg7XFxyXFxuICAgICAgICByaWdodDogMTUuNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAuTmF2aWdhdGlvbl9uYXZpZ2F0aW9uQmFja2dyb3VuZF9fMndFcjYge1xcclxcbiAgICAgICAgdG9wOiAxN3B4O1xcclxcbiAgICAgICAgcmlnaHQ6IDE3cHg7XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9jb21wb25lbnRzL1VpL05hdmlnYXRpb24vTmF2aWdhdGlvbi5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxlQUFlO0lBQ2YsV0FBVztJQUNYLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysc0RBQXNEO0lBRXRELDhDQUE4Qzs7SUFFOUMsZ0RBQXdDOztZQUF4Qyx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5R0FBNkQ7SUFBN0QscUVBQTZEO0lBQTdELDZEQUE2RDtJQUM3RCwrQkFBK0I7SUFDL0IsdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7O0lBRVgsd0VBQXdEOztJQUF4RCxnRUFBd0Q7O0lBQXhELHdEQUF3RDs7SUFBeEQsOEdBQXdEO0FBQzVEOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsTUFBTTtJQUNOLFFBQVE7SUFDUixhQUFhO0lBQ2IsVUFBVTtJQUNWLGtCQUFrQjs7SUFFbEIsa0VBQTBEOztJQUExRCwwREFBMEQ7QUFDOUQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1Qsd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQiw2RkFBcUY7SUFBckYscUZBQXFGO0lBQ3JGLHFCQUFxQjtJQUNyQiwyQkFBbUI7SUFBbkIsbUJBQW1CO0FBQ3ZCOzs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDRCQUFvQjtZQUFwQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE9BQU87QUFDWDs7QUFFQTtJQUNJLFNBQVM7SUFDVCwyQkFBbUI7SUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLDJCQUFtQjtJQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLE1BQU07SUFDTixpQ0FBeUI7WUFBekIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksTUFBTTtJQUNOLGtDQUEwQjtZQUExQiwwQkFBMEI7QUFDOUI7Ozs7QUFJQTtJQUNJO1FBQ0ksV0FBVztRQUNYLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsV0FBVztJQUNmO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxyXFxuI05hdmlnYXRpb24gLm5hdmlnYXRpb25DaGVja2JveCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbiNOYXZpZ2F0aW9uIC5OYXZpZ2F0aW9uQnV0dG9uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGhlaWdodDogNjVweDtcXHJcXG4gICAgd2lkdGg6IDY1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAzNy41cHg7XFxyXFxuICAgIHJpZ2h0OiAzNy41cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgei1pbmRleDogMjAwMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IC04cHggcmdiYSgwLDAsMCwwLjc1KTtcXHJcXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDEwcHggLThweCByZ2JhKDAsMCwwLDAuNzUpO1xcclxcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggLThweCByZ2JhKDAsMCwwLDAuNzUpO1xcclxcblxcclxcbiAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKGJsYWNrLCAwLjEpO1xcclxcbn1cXHJcXG5cXHJcXG4jTmF2aWdhdGlvbiAubmF2aWdhdGlvbkJhY2tncm91bmQge1xcclxcbiAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCggIzA0NmJjNSAxMCUsICMxNTJmYjMgMTAwJSk7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1ciggMjAuMHB4ICk7XFxyXFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKCAyMC4wcHggKTtcXHJcXG4gICAgei1pbmRleDogMTAwMDtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICB0b3A6IDQwcHg7XFxyXFxuICAgIHJpZ2h0OiA0MHB4O1xcclxcblxcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjhzIGN1YmljLWJlemllcigwLjg2LCAwLCAwLjA3LCAxKTtcXHJcXG59XFxyXFxuXFxyXFxuI05hdmlnYXRpb24gLm5hdmlnYXRpb25OYXYge1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB6LWluZGV4OiAxNTAwO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuXFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuNnMgY3ViaWMtYmV6aWVyKDAuNjgsIC0wLjU1LCAwLjI2NSwgMS41NSk7XFxyXFxufVxcclxcblxcclxcbiNOYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uTmF2IGgxIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDIwcHg7XFxyXFxuICAgIGxlZnQ6IDIwcHg7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgei1pbmRleDogNTAwO1xcclxcbiAgICBmb250LXNpemU6IDI2cHg7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbiNOYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uTGlzdCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA0MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbiNOYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uSXRlbSB7XFxyXFxuICAgIG1hcmdpbjogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuI05hdmlnYXRpb24gLm5hdmlnYXRpb25MaW5rIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxMjBkZWcsIHRyYW5zcGFyZW50IDAlLCB0cmFuc3BhcmVudCA1MCUsIHdoaXRlIDUwJSk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjUwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC40cztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI05hdmlnYXRpb24gLm5hdmlnYXRpb25MaW5rOmFjdGl2ZSwgLm5hdmlnYXRpb25MaW5rOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJTtcXHJcXG4gICAgY29sb3I6ICNFRTdDN0Q7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcXHJcXG59XFxyXFxuXFxyXFxuI05hdmlnYXRpb24gLm5hdmlnYXRpb25DaGVja2JveDpjaGVja2VkIH4gLm5hdmlnYXRpb25CYWNrZ3JvdW5kIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSg4MCk7XFxyXFxufVxcclxcblxcclxcbiNOYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uQ2hlY2tib3g6Y2hlY2tlZCB+IC5uYXZpZ2F0aW9uTmF2IHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG59XFxyXFxuI05hdmlnYXRpb24gLm5hdmlnYXRpb25JY29uIHtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xcclxcbn1cXHJcXG4jTmF2aWdhdGlvbiAubmF2aWdhdGlvbkljb24sIC5uYXZpZ2F0aW9uSWNvbjo6YmVmb3JlLCAubmF2aWdhdGlvbkljb246YWZ0ZXIge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI05hdmlnYXRpb24gLm5hdmlnYXRpb25JY29uOjpiZWZvcmUsIC5uYXZpZ2F0aW9uSWNvbjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbiNOYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uSWNvbjo6YmVmb3JlIHtcXHJcXG4gICAgdG9wOiAtOHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzO1xcclxcbn1cXHJcXG5cXHJcXG4jTmF2aWdhdGlvbiAubmF2aWdhdGlvbkljb246OmFmdGVyIHtcXHJcXG4gICAgdG9wOiA4cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAuNHM7XFxyXFxufVxcclxcblxcclxcbiNOYXZpZ2F0aW9uIC5OYXZpZ2F0aW9uQnV0dG9uOmhvdmVyIC5uYXZpZ2F0aW9uSWNvbjo6YmVmb3JlIHtcXHJcXG4gICAgdG9wOiAtMTBweDtcXHJcXG59XFxyXFxuI05hdmlnYXRpb24gLk5hdmlnYXRpb25CdXR0b246aG92ZXIgLm5hdmlnYXRpb25JY29uOjphZnRlciB7XFxyXFxuICAgIHRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI05hdmlnYXRpb24gLm5hdmlnYXRpb25DaGVja2JveDpjaGVja2VkICsgLk5hdmlnYXRpb25CdXR0b24gLm5hdmlnYXRpb25JY29uIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxufVxcclxcblxcclxcbiNOYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uQ2hlY2tib3g6Y2hlY2tlZCArIC5OYXZpZ2F0aW9uQnV0dG9uIC5uYXZpZ2F0aW9uSWNvbjpiZWZvcmUge1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XFxyXFxufVxcclxcblxcclxcbiNOYXZpZ2F0aW9uIC5uYXZpZ2F0aW9uQ2hlY2tib3g6Y2hlY2tlZCArIC5OYXZpZ2F0aW9uQnV0dG9uIC5uYXZpZ2F0aW9uSWNvbjo6YWZ0ZXIge1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDAycHgpIHtcXHJcXG4gICAgLk5hdmlnYXRpb25CdXR0b24ge1xcclxcbiAgICAgICAgdG9wOiAxNS41cHg7XFxyXFxuICAgICAgICByaWdodDogMTUuNXB4O1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgICAubmF2aWdhdGlvbkJhY2tncm91bmQge1xcclxcbiAgICAgICAgdG9wOiAxN3B4O1xcclxcbiAgICAgICAgcmlnaHQ6IDE3cHg7XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiTmF2aWdhdGlvblwiOiBcIk5hdmlnYXRpb25fTmF2aWdhdGlvbl9fMTdoUS1cIixcblx0XCJuYXZpZ2F0aW9uQ2hlY2tib3hcIjogXCJOYXZpZ2F0aW9uX25hdmlnYXRpb25DaGVja2JveF9fM0tyYk9cIixcblx0XCJOYXZpZ2F0aW9uQnV0dG9uXCI6IFwiTmF2aWdhdGlvbl9OYXZpZ2F0aW9uQnV0dG9uX18xNkphV1wiLFxuXHRcIm5hdmlnYXRpb25CYWNrZ3JvdW5kXCI6IFwiTmF2aWdhdGlvbl9uYXZpZ2F0aW9uQmFja2dyb3VuZF9fMndFcjZcIixcblx0XCJuYXZpZ2F0aW9uTmF2XCI6IFwiTmF2aWdhdGlvbl9uYXZpZ2F0aW9uTmF2X18xYUFhMFwiLFxuXHRcIm5hdmlnYXRpb25MaXN0XCI6IFwiTmF2aWdhdGlvbl9uYXZpZ2F0aW9uTGlzdF9fTVgwaFFcIixcblx0XCJuYXZpZ2F0aW9uSXRlbVwiOiBcIk5hdmlnYXRpb25fbmF2aWdhdGlvbkl0ZW1fXzJvQjB2XCIsXG5cdFwibmF2aWdhdGlvbkxpbmtcIjogXCJOYXZpZ2F0aW9uX25hdmlnYXRpb25MaW5rX19FZVBmZlwiLFxuXHRcIm5hdmlnYXRpb25JY29uXCI6IFwiTmF2aWdhdGlvbl9uYXZpZ2F0aW9uSWNvbl9fMVN6dHRcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9