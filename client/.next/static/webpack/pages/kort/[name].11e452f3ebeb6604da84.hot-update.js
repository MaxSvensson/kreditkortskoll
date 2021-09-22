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
var _jsxFileName = "D:\\Kreditkortskoll\\Client\\src\\pages\\kort\\[name].tsx",
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
      lineNumber: 45,
      columnNumber: 10
    }
  }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "Kreditkortskoll.com | ", card.name), __jsx("meta", {
    name: "description",
    content: "En recension av kreditkortet ".concat(creditCard.properties.name),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  })), __jsx(_components_CreditCard_Header_Header__WEBPACK_IMPORTED_MODULE_1__.default, {
    ref: headerRef,
    creditCard: creditCard,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }), __jsx(_components_CreditCard_CardInformation_CardInformation__WEBPACK_IMPORTED_MODULE_3__.default, {
    creditcard: creditCard,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2tvcnQvW25hbWVdLnRzeCJdLCJuYW1lcyI6WyJDcmVkaXRDYXJkIiwiY2FyZCIsImhlYWRlclJlZiIsInVzZVJlZiIsImNyZWRpdENhcmQiLCJDcmVkaXRjYXJkIiwibmFtZSIsInByb3BlcnRpZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxJQUFNQSxVQUEyQyxHQUFHLFNBQTlDQSxVQUE4QyxPQUFZO0FBQUE7O0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVO0FBRTlELE1BQU1DLFNBQVMsR0FBR0MsNkNBQU0sQ0FBaUIsSUFBakIsQ0FBeEIsQ0FGOEQsQ0FJOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNGO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBR0UsTUFBTUMsVUFBVSxHQUFHLElBQUlDLDJEQUFKLENBQWVKLElBQWYsQ0FBbkI7QUFDQSxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTCxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUE4QkEsSUFBSSxDQUFDSyxJQUFuQyxDQURGLEVBRUU7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUF5QixXQUFPLHlDQUFrQ0YsVUFBVSxDQUFDRyxVQUFYLENBQXNCRCxJQUF4RCxDQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FESyxFQUtMLE1BQUMseUVBQUQ7QUFBUSxPQUFHLEVBQUVKLFNBQWI7QUFBd0IsY0FBVSxFQUFFRSxVQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEssRUFNTCxNQUFDLDJGQUFEO0FBQWlCLGNBQVUsRUFBRUEsVUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5LLENBQVA7QUFRRCxDQXRDRDs7R0FBTUosVTs7S0FBQUEsVTs7QUF3Rk4sK0RBQWVBLFVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMva29ydC9bbmFtZV0uMTFlNDUyZjNlYmViNjYwNGRhODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQ3JlZGl0Q2FyZC9IZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCB7IENyZWRpdENhcmQgYXMgQ3JlZGl0Y2FyZCwgQ2FyZCBhcyBDcmVkaXRDYXJkSW50ZXJmYWNlIH0gZnJvbSBcIi4uLy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZFwiO1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IGdldENhcmQsIGdldENhcmRzIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9DYXJkc1wiO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgQ2FyZEluZm9ybWF0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ3JlZGl0Q2FyZC9DYXJkSW5mb3JtYXRpb24vQ2FyZEluZm9ybWF0aW9uJztcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgY2FyZCA6IENyZWRpdENhcmRJbnRlcmZhY2VcclxufVxyXG5cclxuY29uc3QgQ3JlZGl0Q2FyZCA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7Y2FyZH0pID0+IHtcclxuXHJcbiAgY29uc3QgaGVhZGVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuXHJcbiAgLy8gZnVuY3Rpb24gaXNJblZpZXdwb3J0KGVsIDogSFRNTERpdkVsZW1lbnQpIHtcclxuICAvLyAgIGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAvLyAgIGNvbnNvbGUubG9nKHJlY3QpXHJcbiAgLy8gICByZXR1cm4gKFxyXG4gIC8vICAgICAgIC0ocmVjdC50b3ApID49IHdpbmRvdy5pbm5lckhlaWdodCAmJlxyXG4gIC8vICAgICAgIHJlY3QubGVmdCA+PSAwICYmXHJcbiAgLy8gICAgICAgcmVjdC5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKVxyXG5cclxuICAvLyAgICk7XHJcbi8vIH1cclxuXHJcbi8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4vLyAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIGlmKGhlYWRlclJlZi5jdXJyZW50KSB7XHJcbi8vICAgICAgIGNvbnN0IGhlYWRlclZpc2JsZSA9IGlzSW5WaWV3cG9ydChoZWFkZXJSZWYuY3VycmVudClcclxuLy8gICAgICAgY29uc29sZS5sb2coaGVhZGVyVmlzYmxlKVxyXG4vLyAgICAgfVxyXG5cclxuLy8gICB9LCB7XHJcbi8vICAgICAgIHBhc3NpdmU6IHRydWVcclxuLy8gICB9KTtcclxuLy8gfSwgW10pXHJcblxyXG5cclxuICBjb25zdCBjcmVkaXRDYXJkID0gbmV3IENyZWRpdGNhcmQoY2FyZClcclxuICByZXR1cm4gPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+S3JlZGl0a29ydHNrb2xsLmNvbSB8IHtjYXJkLm5hbWV9PC90aXRsZT5cclxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17YEVuIHJlY2Vuc2lvbiBhdiBrcmVkaXRrb3J0ZXQgJHtjcmVkaXRDYXJkLnByb3BlcnRpZXMubmFtZX1gfSAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgPEhlYWRlciByZWY9e2hlYWRlclJlZn0gY3JlZGl0Q2FyZD17Y3JlZGl0Q2FyZH0gLz5cclxuICAgIDxDYXJkSW5mb3JtYXRpb24gY3JlZGl0Y2FyZD17Y3JlZGl0Q2FyZH0gLz5cclxuICA8L2Rpdj5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAvLyBDYWxsIGFuIGV4dGVybmFsIEFQSSBlbmRwb2ludCB0byBnZXQgcG9zdHNcclxuICBjb25zdCByZXMgPSBhd2FpdCBnZXRDYXJkcygpXHJcblxyXG4gIGNvbnN0IGNhcmRzID0gcmVzLmNhcmRzO1xyXG5cclxuICBpZighY2FyZHMpIHRocm93IG5ldyBFcnJvcigpXHJcblxyXG4gIC8vIEdldCB0aGUgcGF0aHMgd2Ugd2FudCB0byBwcmUtcmVuZGVyIGJhc2VkIG9uIHBvc3RzXHJcbiAgY29uc3QgcGF0aHMgPSBjYXJkcy5tYXAoIGNhcmQgPT4gKHtcclxuICAgIHBhcmFtczogeyBuYW1lOiBjYXJkLl9pZCB9LFxyXG4gIH0pKVxyXG5cclxuICAvLyBXZSdsbCBwcmUtcmVuZGVyIG9ubHkgdGhlc2UgcGF0aHMgYXQgYnVpbGQgdGltZS5cclxuICAvLyB7IGZhbGxiYWNrOiBmYWxzZSB9IG1lYW5zIG90aGVyIHJvdXRlcyBzaG91bGQgNDA0LlxyXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jIGNvbnRleHQgPT4ge1xyXG5cclxuICB0cnkge1xyXG4gICAgaWYoIWNvbnRleHQucGFyYW1zKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIGNvbnN0IG5hbWUgPSBjb250ZXh0LnBhcmFtcy5uYW1lIGFzIHN0cmluZ1xyXG5cclxuICAgIGlmKCFuYW1lKSB0aHJvdyBuZXcgRXJyb3IoKVxyXG4gIFxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0Q2FyZChuYW1lKTtcclxuXHJcbiAgICBpZihyZXMuZXJyb3IpIHRocm93IG5ldyBFcnJvcigpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHMgOiB7XHJcbiAgICAgICAgY2FyZDogcmVzLmNhcmRcclxuICAgICAgfSxcclxuICAgICAgcmV2YWxpZGF0ZTogMzYwMCAqIDRcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVkaXJlY3QgOiB7XHJcbiAgICAgICAgZGVzdGluYXRpb246ICcvJyxcclxuICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVkaXRDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=