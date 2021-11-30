self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Ui/NavBar/Navbar.tsx":
/*!*********************************************!*\
  !*** ./src/components/Ui/NavBar/Navbar.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar.module.css */ "./src/components/Ui/NavBar/Navbar.module.css");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SlideDown_SlideDown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SlideDown/SlideDown */ "./src/components/Ui/NavBar/SlideDown/SlideDown.tsx");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-grid-system */ "./node_modules/react-grid-system/build/index.js");
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
      lineNumber: 39,
      columnNumber: 12
    }
  }, __jsx("div", {
    id: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().Navbar),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 6
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, __jsx("a", {
    id: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().loggo),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "Kreditkortskoll.com")), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_3__.Visible, {
    lg: true,
    xl: true,
    xxl: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx(_SlideDown_SlideDown__WEBPACK_IMPORTED_MODULE_2__.default, {
    visible: slideDownRef.current,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
    whileHover: {
      y: -2
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/kort",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 45
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 64
    }
  }, "Alla kreditkort"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
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
    href: "/artiklar",
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
      columnNumber: 68
    }
  }, "Artiklar"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.li, {
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
    href: "/faq",
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
      columnNumber: 63
    }
  }, "FAQ"))))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_3__.Visible, {
    xs: true,
    sm: true,
    md: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx(NavigationButton, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVWkvTmF2QmFyL05hdmJhci50c3giXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlU3RhdGUiLCJzbGlkZURvd24iLCJfc2V0U2xpZGVEb3duIiwic2xpZGVEb3duUmVmIiwidXNlUmVmIiwic2V0U2xpZGVEb3duIiwiZGF0YSIsImN1cnJlbnQiLCJ1c2VFZmZlY3QiLCJsYXN0U2Nyb2xsVG9wIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0IiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImNhcHR1cmUiLCJwYXNzaXZlIiwic3R5bGVzIiwieSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQUEsa0JBRWtCQywrQ0FBUSxDQUFDLEtBQUQsQ0FGMUI7QUFBQSxNQUVWQyxTQUZVO0FBQUEsTUFFQ0MsYUFGRDs7QUFJakIsTUFBTUMsWUFBWSxHQUFHQyw2Q0FBTSxDQUFDSCxTQUFELENBQTNCOztBQUNBLE1BQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLElBQUQsRUFBb0I7QUFDdkNILGdCQUFZLENBQUNJLE9BQWIsR0FBdUJELElBQXZCOztBQUNBSixpQkFBYSxDQUFDSSxJQUFELENBQWI7QUFDRCxHQUhEOztBQUtBRSxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxhQUFhLEdBQUcsQ0FBcEIsQ0FEYyxDQUdkOztBQUNBQyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFlBQU07QUFBRTtBQUN2QyxVQUFJQyxFQUFFLEdBQUdGLE1BQU0sQ0FBQ0csV0FBUCxJQUFzQkMsUUFBUSxDQUFDQyxlQUFULENBQXlCQyxTQUF4RCxDQURxQyxDQUM4Qjs7QUFDbkUs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YXBwLjc3ZDIwNDlkYTM0NGU1OWQ4ZTM5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vTmF2YmFyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNsaWRlRG93biBmcm9tICcuL1NsaWRlRG93bi9TbGlkZURvd24nO1xyXG5pbXBvcnQgeyBWaXNpYmxlIH0gZnJvbSAncmVhY3QtZ3JpZC1zeXN0ZW0nO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzbGlkZURvd24sIF9zZXRTbGlkZURvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHNsaWRlRG93blJlZiA9IHVzZVJlZihzbGlkZURvd24pO1xyXG4gICAgY29uc3Qgc2V0U2xpZGVEb3duID0gKGRhdGEgOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIHNsaWRlRG93blJlZi5jdXJyZW50ID0gZGF0YTtcclxuICAgICAgX3NldFNsaWRlRG93bihkYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgdmFyIGxhc3RTY3JvbGxUb3AgPSAwO1xyXG5cclxuICAgICAgLy8gZWxlbWVudCBzaG91bGQgYmUgcmVwbGFjZWQgd2l0aCB0aGUgYWN0dWFsIHRhcmdldCBlbGVtZW50IG9uIHdoaWNoIHlvdSBoYXZlIGFwcGxpZWQgc2Nyb2xsLCB1c2Ugd2luZG93IGluIGNhc2Ugb2Ygbm8gdGFyZ2V0IGVsZW1lbnQuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHsgLy8gb3Igd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIi4uLi5cclxuICAgICAgICAgdmFyIHN0ID0gd2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7IC8vIENyZWRpdHM6IFwiaHR0cHM6Ly9naXRodWIuY29tL3FlcmVteS9zby9ibG9iL21hc3Rlci9zby5kb20uanMjTDQyNlwiXHJcbiAgICAgICAgIGlmIChzdCA8IGxhc3RTY3JvbGxUb3ApIHtcclxuICAgICAgICAgICBpZiAoc3QgPiA2MDApIHtcclxuICAgICAgICAgICAgIHJldHVybiBzbGlkZURvd25SZWYuY3VycmVudCA/IG51bGwgOiBzZXRTbGlkZURvd24odHJ1ZSk7XHJcbiAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgc2V0U2xpZGVEb3duKGZhbHNlKVxyXG4gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRTbGlkZURvd24oZmFsc2UpXHJcbiAgICAgICAgIH1cclxuICAgICAgICAgbGFzdFNjcm9sbFRvcCA9IHN0IDw9IDAgPyAwIDogc3Q7IC8vIEZvciBNb2JpbGUgb3IgbmVnYXRpdmUgc2Nyb2xsaW5nXHJcbiAgICAgIH0sIHtcclxuICAgICAgICBjYXB0dXJlOiB0cnVlLFxyXG4gICAgICAgIHBhc3NpdmU6IHRydWVcclxuICAgICAgfSk7XHJcbiAgICB9ICwgW10pXHJcblxyXG4gICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICA8ZGl2IGlkPXtzdHlsZXMuTmF2YmFyfT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxhIGlkPXtzdHlsZXMubG9nZ299PktyZWRpdGtvcnRza29sbC5jb208L2E+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPFZpc2libGUgbGcgeGwgeHhsPlxyXG4gICAgICA8U2xpZGVEb3duIHZpc2libGU9e3NsaWRlRG93blJlZi5jdXJyZW50fSAvPlxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8bW90aW9uLmxpIHdoaWxlSG92ZXI9e3t5OiAtMn19PjxMaW5rIGhyZWY9XCIva29ydFwiPjxhPkFsbGEga3JlZGl0a29ydDwvYT48L0xpbms+PC9tb3Rpb24ubGk+XHJcbiAgICAgICAgICAgIDxtb3Rpb24ubGkgd2hpbGVIb3Zlcj17e3k6IC0yfX0+PExpbmsgaHJlZj1cIi9hcnRpa2xhclwiPjxhPkFydGlrbGFyPC9hPjwvTGluaz48L21vdGlvbi5saT5cclxuICAgICAgICAgICAgPG1vdGlvbi5saSB3aGlsZUhvdmVyPXt7eTogLTJ9fT48TGluayBocmVmPVwiL2ZhcVwiPjxhPkZBUTwvYT48L0xpbms+PC9tb3Rpb24ubGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICA8L1Zpc2libGU+XHJcbiAgICAgIDxWaXNpYmxlIHhzIHNtIG1kPlxyXG4gICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uIC8+XHJcbiAgICAgIDwvVmlzaWJsZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwic291cmNlUm9vdCI6IiJ9