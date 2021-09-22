self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var D_Kreditkortskoll_Client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Kreditkortskoll_Client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Kreditkortskoll_Client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_Kreditkortskoll_Client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_Kreditkortskoll_Client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _classes_CreditCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../classes/CreditCard */ "./src/classes/CreditCard.ts");
/* harmony import */ var _components_Index_Header_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Index/Header/Header */ "./src/components/Index/Header/Header.tsx");
/* harmony import */ var _components_Index_WhyUs_WhyUs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Index/WhyUs/WhyUs */ "./src/components/Index/WhyUs/WhyUs.tsx");
/* harmony import */ var _components_Index_TopCards_TopCards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Index/TopCards/TopCards */ "./src/components/Index/TopCards/TopCards.tsx");
/* harmony import */ var _classes_CreditCards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../classes/CreditCards */ "./src/classes/CreditCards.ts");
/* harmony import */ var _components_Index_UpdatedInforamtion_UpdatedInformation__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Index/UpdatedInforamtion/UpdatedInformation */ "./src/components/Index/UpdatedInforamtion/UpdatedInformation.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "D:\\Kreditkortskoll\\Client\\src\\pages\\index.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_5___default().createElement);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,D_Kreditkortskoll_Client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,D_Kreditkortskoll_Client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,D_Kreditkortskoll_Client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var IndexPage = /*#__PURE__*/function (_React$Component) {
  (0,D_Kreditkortskoll_Client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(IndexPage, _React$Component);

  var _super = _createSuper(IndexPage);

  function IndexPage() {
    (0,D_Kreditkortskoll_Client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, IndexPage);

    return _super.apply(this, arguments);
  }

  (0,D_Kreditkortskoll_Client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(IndexPage, [{
    key: "render",
    value: function render() {
      var cards = this.props.cards.map(function (card) {
        return new _classes_CreditCard__WEBPACK_IMPORTED_MODULE_6__.CreditCard(card);
      });
      var list = new _classes_CreditCards__WEBPACK_IMPORTED_MODULE_10__.CreditCards(cards);
      var bestcard = this.props.bestcard;
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 10
        }
      }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_12___default()), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 5
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 7
        }
      }, "Alla kreditkort"), __jsx("meta", {
        name: "description",
        content: "Kreditkortskoll.com j\xE4mf\xF6r olika kreditkort f\xF6r att hitta det b\xE4sta kredikortet f\xF6r dig. J\xE4mf\xF6r kreditkort som Remember flex och Norwegian",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 7
        }
      }), __jsx("meta", {
        name: "robots",
        content: "index, follow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 7
        }
      })), __jsx(_components_Index_Header_Header__WEBPACK_IMPORTED_MODULE_7__.default, {
        bestcard: bestcard,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 7
        }
      }), __jsx("main", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 7
        }
      }, __jsx("section", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }
      }, __jsx(_components_Index_WhyUs_WhyUs__WEBPACK_IMPORTED_MODULE_8__.default, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }
      })), __jsx("section", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 9
        }
      }, __jsx(_components_Index_UpdatedInforamtion_UpdatedInformation__WEBPACK_IMPORTED_MODULE_11__.default, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }
      })), __jsx("section", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }
      }, __jsx(_components_Index_TopCards_TopCards__WEBPACK_IMPORTED_MODULE_9__.default, {
        creditCards: list,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }
      }))));
    }
  }]);

  return IndexPage;
}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJbmRleFBhZ2UiLCJjYXJkcyIsInByb3BzIiwibWFwIiwiY2FyZCIsIkNyZWRpdENhcmQiLCJsaXN0IiwiQ3JlZGl0Q2FyZHMiLCJiZXN0Y2FyZCIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0lBV01BLFM7Ozs7Ozs7Ozs7Ozs7NkJBQ007QUFDUixVQUFNQyxLQUFLLEdBQUcsS0FBS0MsS0FBTCxDQUFXRCxLQUFYLENBQWlCRSxHQUFqQixDQUFxQixVQUFBQyxJQUFJO0FBQUEsZUFBSSxJQUFJQywyREFBSixDQUFlRCxJQUFmLENBQUo7QUFBQSxPQUF6QixDQUFkO0FBQ0EsVUFBTUUsSUFBSSxHQUFHLElBQUlDLDhEQUFKLENBQWdCTixLQUFoQixDQUFiO0FBQ0EsVUFBTU8sUUFBUSxHQUFHLEtBQUtOLEtBQUwsQ0FBV00sUUFBNUI7QUFDRixhQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDTCxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURGLEVBRUU7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUMsaUtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixFQUdFO0FBQU0sWUFBSSxFQUFDLFFBQVg7QUFBb0IsZUFBTyxFQUFDLGVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIRixDQURLLEVBTUgsTUFBQyxvRUFBRDtBQUFRLGdCQUFRLEVBQUVBLFFBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFORyxFQU9IO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLDZGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQUpGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsd0VBQUQ7QUFBVSxtQkFBVyxFQUFFRixJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FQRixDQVBHLENBQVA7QUFtQkM7Ozs7RUF4QnFCRyx3RDs7O0FBNER4QiwrREFBZVQsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zNTVmOGQ4ZDczODM2MTk3Yzk0Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ3JlZGl0Q2FyZCB9IGZyb20gJy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZCdcclxuaW1wb3J0IHsgQ2FyZCBhcyBDcmVkaXRDYXJkSW50ZXJmYWNlIH0gZnJvbSAnLi4vY2xhc3Nlcy9DcmVkaXRDYXJkJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0luZGV4L0hlYWRlci9IZWFkZXInO1xyXG5pbXBvcnQgV2h5VXMgZnJvbSAnLi4vY29tcG9uZW50cy9JbmRleC9XaHlVcy9XaHlVcyc7XHJcbmltcG9ydCBUb3BDYXJkcyBmcm9tICcuLi9jb21wb25lbnRzL0luZGV4L1RvcENhcmRzL1RvcENhcmRzJztcclxuaW1wb3J0IHsgQmVzdENhcmQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0Jlc3RDYXJkJztcclxuaW1wb3J0IHsgZ2V0QmVzdENhcmQsIGdldENhcmRzIH0gZnJvbSAnLi4vcmVzb3VyY2VzL0NhcmRzJ1xyXG5pbXBvcnQgeyBDcmVkaXRDYXJkcyB9IGZyb20gJy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZHMnO1xyXG5pbXBvcnQgVXBkYXRlZEluZm9ybWF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvSW5kZXgvVXBkYXRlZEluZm9yYW10aW9uL1VwZGF0ZWRJbmZvcm1hdGlvbic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgY2FyZHMgOiBDcmVkaXRDYXJkcztcclxufVxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgbG9hZGluZyA6IGJvb2xlYW47XHJcbiAgICBjb21wYXJlSWRzIDogc3RyaW5nW107XHJcbiAgICBjYXJkczogQ3JlZGl0Q2FyZEludGVyZmFjZVtdO1xyXG4gICAgYmVzdGNhcmQ6IEJlc3RDYXJkO1xyXG59XHJcblxyXG5jbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiAge1xyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCBjYXJkcyA9IHRoaXMucHJvcHMuY2FyZHMubWFwKGNhcmQgPT4gbmV3IENyZWRpdENhcmQoY2FyZCkpO1xyXG4gICAgY29uc3QgbGlzdCA9IG5ldyBDcmVkaXRDYXJkcyhjYXJkcyk7XHJcbiAgICBjb25zdCBiZXN0Y2FyZCA9IHRoaXMucHJvcHMuYmVzdGNhcmRcclxuICByZXR1cm4gPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+QWxsYSBrcmVkaXRrb3J0PC90aXRsZT5cclxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIktyZWRpdGtvcnRza29sbC5jb20gasOkbWbDtnIgb2xpa2Ega3JlZGl0a29ydCBmw7ZyIGF0dCBoaXR0YSBkZXQgYsOkc3RhIGtyZWRpa29ydGV0IGbDtnIgZGlnLiBKw6RtZsO2ciBrcmVkaXRrb3J0IHNvbSBSZW1lbWJlciBmbGV4IG9jaCBOb3J3ZWdpYW5cIiAvPlxyXG4gICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cImluZGV4LCBmb2xsb3dcIiAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgICA8SGVhZGVyIGJlc3RjYXJkPXtiZXN0Y2FyZH0gLz5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8V2h5VXMgLz5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8VXBkYXRlZEluZm9ybWF0aW9uIC8+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPFRvcENhcmRzIGNyZWRpdENhcmRzPXtsaXN0fSAvPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9tYWluPlxyXG4gIDwvZGl2PlxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb21pc2VzID0gW2dldENhcmRzKCksIGdldEJlc3RDYXJkKCldO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlcyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKVxyXG5cclxuXHJcbiAgICBjb25zdCBjYXJkc1Jlc3BvbnNlID0gcmVzcG9uc2VzWzBdIGFzIHtjYXJkcz86IENyZWRpdENhcmRJbnRlcmZhY2VbXSwgZXJyb3I/OiBib29sZWFufTtcclxuICAgIGNvbnN0IGJlc3RjYXJkUmVzcG9uc2UgPSByZXNwb25zZXNbMV0gYXMge2Jlc3RjYXJkPzogQmVzdENhcmQsIGVycm9yPzogYm9vbGVhbn07XHJcblxyXG5cclxuICAgIGlmKGNhcmRzUmVzcG9uc2UuZXJyb3IgfHwgYmVzdGNhcmRSZXNwb25zZS5lcnJvcikgdGhyb3cgbmV3IEVycm9yKClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wcyA6IHtcclxuICAgICAgICBjYXJkczogY2FyZHNSZXNwb25zZS5jYXJkcyxcclxuICAgICAgICBiZXN0Y2FyZDogYmVzdGNhcmRSZXNwb25zZS5iZXN0Y2FyZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgY2FyZHMgOiBbXSxcclxuICAgICAgICBiZXN0Y2FyZDogdW5kZWZpbmVkXHJcbiAgICAgIH0sXHJcbiAgICAgIHJldmFsaWRhdGU6IDM2MDAgKiA0XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=