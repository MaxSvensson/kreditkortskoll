self["webpackHotUpdate_N_E"]("pages/kort/[name]",{

/***/ "./src/pages/kort/[name].tsx":
/*!***********************************!*\
  !*** ./src/pages/kort/[name].tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CreditCard_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/CreditCard/Header/Header */ "./src/components/CreditCard/Header/Header.tsx");
/* harmony import */ var _classes_CreditCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/CreditCard */ "./src/classes/CreditCard.ts");
/* harmony import */ var _components_CreditCard_CardInformation_CardInformation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/CreditCard/CardInformation/CardInformation */ "./src/components/CreditCard/CardInformation/CardInformation.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\pages\\kort\\[name].tsx",
    _this = undefined,
    _s = $RefreshSig$();


var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


// Components




var CreditCard = function CreditCard(_ref) {
  _s();

  var card = _ref.card;
  var headerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // function isInViewport(el : HTMLDivElement) {
  //   const rect = el.getBoundingClientRect();
  //   console.log(rect)
  //   return (
  //       -(rect.top) >= window.innerHeight &&
  //       rect.left >= 0 &&
  //       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // }
  // useEffect(() => {
  //   document.addEventListener('scroll', function () {
  //     if(headerRef.current) {
  //       const headerVisble = isInViewport(headerRef.current)
  //       console.log(headerVisble)
  //     }
  //   }, {
  //       passive: true
  //   });
  // }, [])

  var creditCard = new _classes_CreditCard__WEBPACK_IMPORTED_MODULE_2__.CreditCard(card);
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 10
    }
  }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, "Recension av ", card.name), __jsx("meta", {
    name: "description",
    content: "En recension av kreditkortet ".concat(creditCard.properties.name, ". Vi listar all information om kreditkortet s\xE5 du kan ta reda p\xE5 om ").concat(creditCard.properties.name, " \xE4r r\xE4tt kreditkort f\xF6r dig."),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  })), __jsx(_components_CreditCard_Header_Header__WEBPACK_IMPORTED_MODULE_1__.default, {
    ref: headerRef,
    creditCard: creditCard,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }), __jsx(_components_CreditCard_CardInformation_CardInformation__WEBPACK_IMPORTED_MODULE_3__.default, {
    creditcard: creditCard,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }));
};

_s(CreditCard, "canN0MUxuQ/dtYQOpbczGOCETl0=");

_c = CreditCard;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (CreditCard);

var _c;

$RefreshReg$(_c, "CreditCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2tvcnQvW25hbWVdLnRzeCJdLCJuYW1lcyI6WyJDcmVkaXRDYXJkIiwiY2FyZCIsImhlYWRlclJlZiIsInVzZVJlZiIsImNyZWRpdENhcmQiLCJDcmVkaXRjYXJkIiwibmFtZSIsInByb3BlcnRpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQSxJQUFNQSxVQUEyQyxHQUFHLFNBQTlDQSxVQUE4QyxPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBRTlELE1BQU1DLFNBQVMsR0FBR0MsNkNBQU0sQ0FBaUIsSUFBakIsQ0FBeEIsQ0FGOEQsQ0FJOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNGO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0UsTUFBTUMsVUFBVSxHQUFHLElBQUlDLDJEQUFKLENBQWVKLElBQWYsQ0FBbkI7QUFDQSxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTCxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFxQkEsSUFBSSxDQUFDSyxJQUExQixDQURGLEVBRUU7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLHlDQUFrQ0YsVUFBVSxDQUFDRyxVQUFYLENBQXNCRCxJQUF4RCx1RkFBbUlGLFVBQVUsQ0FBQ0csVUFBWCxDQUFzQkQsSUFBekosMENBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURLLEVBS0wsTUFBQyx5RUFBRDtBQUFRLE9BQUcsRUFBRUosU0FBYjtBQUF3QixjQUFVLEVBQUVFLFVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSyxFQU9MLE1BQUMsMkZBQUQ7QUFBaUIsY0FBVSxFQUFFQSxVQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUEssQ0FBUDtBQVNELENBdkNEOztHQUFNSixVOztLQUFBQSxVOztBQXdGTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9rb3J0L1tuYW1lXS5lOTM0ODViZDljOGIzODNkNzQ4Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DcmVkaXRDYXJkL0hlYWRlci9IZWFkZXJcIjtcclxuaW1wb3J0IHsgQ3JlZGl0Q2FyZCBhcyBDcmVkaXRjYXJkLCBDYXJkIGFzIENyZWRpdENhcmRJbnRlcmZhY2UgfSBmcm9tIFwiLi4vLi4vY2xhc3Nlcy9DcmVkaXRDYXJkXCI7XHJcbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCdcclxuaW1wb3J0IHsgZ2V0Q2FyZCwgZ2V0Q2FyZHMgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL0NhcmRzXCI7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBDYXJkSW5mb3JtYXRpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DcmVkaXRDYXJkL0NhcmRJbmZvcm1hdGlvbi9DYXJkSW5mb3JtYXRpb24nO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB7IHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9DcmVkaXRDYXJkL05hdmlnYXRpb25CYXIvTmF2aWdhdGlvbkJhclwiO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjYXJkIDogQ3JlZGl0Q2FyZEludGVyZmFjZVxyXG59XHJcblxyXG5jb25zdCBDcmVkaXRDYXJkIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHtjYXJkfSkgPT4ge1xyXG5cclxuICBjb25zdCBoZWFkZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xyXG5cclxuICAvLyBmdW5jdGlvbiBpc0luVmlld3BvcnQoZWwgOiBIVE1MRGl2RWxlbWVudCkge1xyXG4gIC8vICAgY29uc3QgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIC8vICAgY29uc29sZS5sb2cocmVjdClcclxuICAvLyAgIHJldHVybiAoXHJcbiAgLy8gICAgICAgLShyZWN0LnRvcCkgPj0gd2luZG93LmlubmVySGVpZ2h0ICYmXHJcbiAgLy8gICAgICAgcmVjdC5sZWZ0ID49IDAgJiZcclxuICAvLyAgICAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpXHJcblxyXG4gIC8vICAgKTtcclxuLy8gfVxyXG5cclxuLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbi8vICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xyXG4vLyAgICAgaWYoaGVhZGVyUmVmLmN1cnJlbnQpIHtcclxuLy8gICAgICAgY29uc3QgaGVhZGVyVmlzYmxlID0gaXNJblZpZXdwb3J0KGhlYWRlclJlZi5jdXJyZW50KVxyXG4vLyAgICAgICBjb25zb2xlLmxvZyhoZWFkZXJWaXNibGUpXHJcbi8vICAgICB9XHJcblxyXG4vLyAgIH0sIHtcclxuLy8gICAgICAgcGFzc2l2ZTogdHJ1ZVxyXG4vLyAgIH0pO1xyXG4vLyB9LCBbXSlcclxuXHJcblxyXG4gIGNvbnN0IGNyZWRpdENhcmQgPSBuZXcgQ3JlZGl0Y2FyZChjYXJkKVxyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5SZWNlbnNpb24gYXYge2NhcmQubmFtZX08L3RpdGxlPlxyXG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtgRW4gcmVjZW5zaW9uIGF2IGtyZWRpdGtvcnRldCAke2NyZWRpdENhcmQucHJvcGVydGllcy5uYW1lfS4gVmkgbGlzdGFyIGFsbCBpbmZvcm1hdGlvbiBvbSBrcmVkaXRrb3J0ZXQgc8OlIGR1IGthbiB0YSByZWRhIHDDpSBvbSAke2NyZWRpdENhcmQucHJvcGVydGllcy5uYW1lfSDDpHIgcsOkdHQga3JlZGl0a29ydCBmw7ZyIGRpZy5gfSAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPEhlYWRlciByZWY9e2hlYWRlclJlZn0gY3JlZGl0Q2FyZD17Y3JlZGl0Q2FyZH0gLz5cclxuICAgIHsvKiA8TmF2aWdhdGlvbkJhciAvPiAqL31cclxuICAgIDxDYXJkSW5mb3JtYXRpb24gY3JlZGl0Y2FyZD17Y3JlZGl0Q2FyZH0gLz5cclxuICA8L2Rpdj5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAvLyBDYWxsIGFuIGV4dGVybmFsIEFQSSBlbmRwb2ludCB0byBnZXQgcG9zdHNcclxuICBjb25zdCByZXMgPSBhd2FpdCBnZXRDYXJkcygpXHJcblxyXG4gIGNvbnN0IGNhcmRzID0gcmVzLmNhcmRzO1xyXG5cclxuICBpZighY2FyZHMpIHRocm93IG5ldyBFcnJvcigpXHJcblxyXG4gIC8vIEdldCB0aGUgcGF0aHMgd2Ugd2FudCB0byBwcmUtcmVuZGVyIGJhc2VkIG9uIHBvc3RzXHJcbiAgY29uc3QgcGF0aHMgPSBjYXJkcy5tYXAoIGNhcmQgPT4gKHtcclxuICAgIHBhcmFtczogeyBuYW1lOiBjYXJkLm5hbWUgfSxcclxuICB9KSlcclxuXHJcbiAgLy8gV2UnbGwgcHJlLXJlbmRlciBvbmx5IHRoZXNlIHBhdGhzIGF0IGJ1aWxkIHRpbWUuXHJcbiAgLy8geyBmYWxsYmFjazogZmFsc2UgfSBtZWFucyBvdGhlciByb3V0ZXMgc2hvdWxkIDQwNC5cclxuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzIDogR2V0U3RhdGljUHJvcHMgPSBhc3luYyBjb250ZXh0ID0+IHtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGlmKCFjb250ZXh0LnBhcmFtcykgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICBjb25zdCBuYW1lID0gY29udGV4dC5wYXJhbXMubmFtZSBhcyBzdHJpbmdcclxuICAgIGlmKCFuYW1lKSB0aHJvdyBuZXcgRXJyb3IoKVxyXG4gIFxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0Q2FyZChuYW1lKTtcclxuXHJcbiAgICBpZihyZXMuZXJyb3IpIHRocm93IG5ldyBFcnJvcigpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHMgOiB7XHJcbiAgICAgICAgY2FyZDogcmVzLmNhcmRcclxuICAgICAgfSxcclxuICAgICAgcmV2YWxpZGF0ZTogMzYwMCAqIDRcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVkaXJlY3QgOiB7XHJcbiAgICAgICAgZGVzdGluYXRpb246ICcvJyxcclxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVkaXRDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=