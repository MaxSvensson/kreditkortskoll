self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Ui/NavBar/Navbar.tsx":
/*!*********************************************!*\
  !*** ./src/components/Ui/NavBar/Navbar.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar.module.css */ "./src/components/Ui/NavBar/Navbar.module.css");
/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\Ui\\NavBar\\Navbar.tsx",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





var Navbar = function Navbar() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
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
          slideDownRef ? null : setSlideDown(true);
        } else {
          setSlideDown(false);
        }
      }

      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);
  }, []);
  return __jsx("div", {
    id: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default().Navbar),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 12
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("a", {
    id: (_Navbar_module_css__WEBPACK_IMPORTED_MODULE_2___default().loggo),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Kreditkortskoll.com")), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.li, {
    whileHover: {
      y: -2
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/kort",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 62
    }
  }, "Alla kreditkort"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.li, {
    whileHover: {
      y: -2
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/kategorier",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 68
    }
  }, "Kategorier"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.li, {
    whileHover: {
      y: -2
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/artiklar",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 66
    }
  }, "Artiklar"))), __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.li, {
    whileHover: {
      y: -2
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: "/faq",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 43
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 61
    }
  }, "FAQ")))));
};

_s(Navbar, "cEY84Y1D/AJUAeBPDJXGtAAOe4A=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVWkvTmF2QmFyL05hdmJhci50c3giXSwibmFtZXMiOlsiTmF2YmFyIiwidXNlU3RhdGUiLCJzbGlkZURvd24iLCJfc2V0U2xpZGVEb3duIiwic2xpZGVEb3duUmVmIiwidXNlUmVmIiwic2V0U2xpZGVEb3duIiwiZGF0YSIsImN1cnJlbnQiLCJ1c2VFZmZlY3QiLCJsYXN0U2Nyb2xsVG9wIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0IiwicGFnZVlPZmZzZXQiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsInN0eWxlcyIsInkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFBQSxrQkFFa0JDLCtDQUFRLENBQUMsQ0FBRCxDQUYxQjtBQUFBLE1BRVZDLFNBRlU7QUFBQSxNQUVDQyxhQUZEOztBQUlqQixNQUFNQyxZQUFZLEdBQUdDLDZDQUFNLENBQUNILFNBQUQsQ0FBM0I7O0FBQ0EsTUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQUMsSUFBSSxFQUFJO0FBQzNCSCxnQkFBWSxDQUFDSSxPQUFiLEdBQXVCRCxJQUF2Qjs7QUFDQUosaUJBQWEsQ0FBQ0ksSUFBRCxDQUFiO0FBQ0QsR0FIRDs7QUFLQUUsa0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSUMsYUFBYSxHQUFHLENBQXBCLENBRGMsQ0FHZDs7QUFDQUMsVUFBTSxDQUFDQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxZQUFVO0FBQUU7QUFDM0MsVUFBSUMsRUFBRSxHQUFHRixNQUFNLENBQUNHLFdBQVAsSUFBc0JDLFFBQVEsQ0FBQ0MsZUFBVCxDQUF5QkMsU0FBeEQsQ0FEeUMsQ0FDMEI7O0FBQ25FLFVBQUlKLEVBQUUsR0FBR0gsYUFBVCxFQUF1QjtBQUNyQixZQUFJRyxFQUFFLEdBQUcsR0FBVCxFQUFjO0FBQ1hULHNCQUFZLEdBQUcsSUFBSCxHQUFVRSxZQUFZLENBQUMsSUFBRCxDQUFsQztBQUNGLFNBRkQsTUFFTztBQUNKQSxzQkFBWSxDQUFDLEtBQUQsQ0FBWjtBQUNGO0FBQ0Y7O0FBQ0RJLG1CQUFhLEdBQUdHLEVBQUUsSUFBSSxDQUFOLEdBQVUsQ0FBVixHQUFjQSxFQUE5QixDQVR5QyxDQVNQO0FBQ3BDLEtBVkQsRUFVRyxLQVZIO0FBV0QsR0FmUSxFQWVMLEVBZkssQ0FBVDtBQWlCQSxTQUFPO0FBQUssTUFBRSxFQUFFSyxrRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0wsTUFBQyxrREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLE1BQUUsRUFBRUEsaUVBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFESixDQURLLEVBSUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsb0RBQUQ7QUFBVyxjQUFVLEVBQUU7QUFBQ0MsT0FBQyxFQUFFLENBQUM7QUFBTCxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdDLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQW5CLENBQWhDLENBREYsRUFFRSxNQUFDLG9EQUFEO0FBQVcsY0FBVSxFQUFFO0FBQUNBLE9BQUMsRUFBRSxDQUFDO0FBQUwsS0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQyxNQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUF6QixDQUFoQyxDQUZGLEVBR0UsTUFBQyxvREFBRDtBQUFXLGNBQVUsRUFBRTtBQUFDQSxPQUFDLEVBQUUsQ0FBQztBQUFMLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0MsTUFBQyxrREFBRDtBQUFNLFFBQUksRUFBQyxXQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBdkIsQ0FBaEMsQ0FIRixFQUlFLE1BQUMsb0RBQUQ7QUFBVyxjQUFVLEVBQUU7QUFBQ0EsT0FBQyxFQUFFLENBQUM7QUFBTCxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdDLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUMsTUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWtCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBbEIsQ0FBaEMsQ0FKRixDQUpHLENBQVA7QUFXSCxDQXRDRDs7R0FBTW5CLE07O0tBQUFBLE07QUF5Q04sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wYTFlNGYzZTc5MDI1MmYyY2RkZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL05hdmJhci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbc2xpZGVEb3duLCBfc2V0U2xpZGVEb3duXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGNvbnN0IHNsaWRlRG93blJlZiA9IHVzZVJlZihzbGlkZURvd24pO1xyXG4gICAgY29uc3Qgc2V0U2xpZGVEb3duID0gZGF0YSA9PiB7XHJcbiAgICAgIHNsaWRlRG93blJlZi5jdXJyZW50ID0gZGF0YTtcclxuICAgICAgX3NldFNsaWRlRG93bihkYXRhKTtcclxuICAgIH07XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgdmFyIGxhc3RTY3JvbGxUb3AgPSAwO1xyXG5cclxuICAgICAgLy8gZWxlbWVudCBzaG91bGQgYmUgcmVwbGFjZWQgd2l0aCB0aGUgYWN0dWFsIHRhcmdldCBlbGVtZW50IG9uIHdoaWNoIHlvdSBoYXZlIGFwcGxpZWQgc2Nyb2xsLCB1c2Ugd2luZG93IGluIGNhc2Ugb2Ygbm8gdGFyZ2V0IGVsZW1lbnQuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uKCl7IC8vIG9yIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIuLi4uXHJcbiAgICAgICAgIHZhciBzdCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wOyAvLyBDcmVkaXRzOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9xZXJlbXkvc28vYmxvYi9tYXN0ZXIvc28uZG9tLmpzI0w0MjZcIlxyXG4gICAgICAgICBpZiAoc3QgPCBsYXN0U2Nyb2xsVG9wKXtcclxuICAgICAgICAgICBpZiAoc3QgPiA2MDApIHtcclxuICAgICAgICAgICAgICBzbGlkZURvd25SZWYgPyBudWxsIDogc2V0U2xpZGVEb3duKHRydWUpO1xyXG4gICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgc2V0U2xpZGVEb3duKGZhbHNlKVxyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgfSBcclxuICAgICAgICAgbGFzdFNjcm9sbFRvcCA9IHN0IDw9IDAgPyAwIDogc3Q7IC8vIEZvciBNb2JpbGUgb3IgbmVnYXRpdmUgc2Nyb2xsaW5nXHJcbiAgICAgIH0sIGZhbHNlKTtcclxuICAgIH0gLCBbXSlcclxuXHJcbiAgICByZXR1cm4gPGRpdiBpZD17c3R5bGVzLk5hdmJhcn0+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICA8YSBpZD17c3R5bGVzLmxvZ2dvfT5LcmVkaXRrb3J0c2tvbGwuY29tPC9hPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPG1vdGlvbi5saSB3aGlsZUhvdmVyPXt7eTogLTJ9fT48TGluayBocmVmPVwiL2tvcnRcIj48YT5BbGxhIGtyZWRpdGtvcnQ8L2E+PC9MaW5rPjwvbW90aW9uLmxpPlxyXG4gICAgICAgICAgPG1vdGlvbi5saSB3aGlsZUhvdmVyPXt7eTogLTJ9fT48TGluayBocmVmPVwiL2thdGVnb3JpZXJcIj48YT5LYXRlZ29yaWVyPC9hPjwvTGluaz48L21vdGlvbi5saT5cclxuICAgICAgICAgIDxtb3Rpb24ubGkgd2hpbGVIb3Zlcj17e3k6IC0yfX0+PExpbmsgaHJlZj1cIi9hcnRpa2xhclwiPjxhPkFydGlrbGFyPC9hPjwvTGluaz48L21vdGlvbi5saT5cclxuICAgICAgICAgIDxtb3Rpb24ubGkgd2hpbGVIb3Zlcj17e3k6IC0yfX0+PExpbmsgaHJlZj1cIi9mYXFcIj48YT5GQVE8L2E+PC9MaW5rPjwvbW90aW9uLmxpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjsiXSwic291cmNlUm9vdCI6IiJ9