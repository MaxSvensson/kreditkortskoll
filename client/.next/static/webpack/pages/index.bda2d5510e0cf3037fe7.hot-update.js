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
/* harmony import */ var C_Users_maximilian_svensso1_Desktop_kreditkortskoll_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var C_Users_maximilian_svensso1_Desktop_kreditkortskoll_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var C_Users_maximilian_svensso1_Desktop_kreditkortskoll_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var C_Users_maximilian_svensso1_Desktop_kreditkortskoll_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var C_Users_maximilian_svensso1_Desktop_kreditkortskoll_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
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
/* harmony import */ var _components_Ui_Categories_Categories__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Ui/Categories/Categories */ "./src/components/Ui/Categories/Categories.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\pages\\index.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_5___default().createElement);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,C_Users_maximilian_svensso1_Desktop_kreditkortskoll_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,C_Users_maximilian_svensso1_Desktop_kreditkortskoll_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,C_Users_maximilian_svensso1_Desktop_kreditkortskoll_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var IndexPage = /*#__PURE__*/function (_React$Component) {
  (0,C_Users_maximilian_svensso1_Desktop_kreditkortskoll_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(IndexPage, _React$Component);

  var _super = _createSuper(IndexPage);

  function IndexPage() {
    (0,C_Users_maximilian_svensso1_Desktop_kreditkortskoll_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, IndexPage);

    return _super.apply(this, arguments);
  }

  (0,C_Users_maximilian_svensso1_Desktop_kreditkortskoll_client_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(IndexPage, [{
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
          lineNumber: 34,
          columnNumber: 10
        }
      }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_12___default()), {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 5
        }
      }, __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 7
        }
      }, "Alla kreditkort"), __jsx("meta", {
        name: "description",
        content: "Kreditkortskoll.com j\xE4mf\xF6r olika kreditkort f\xF6r att hitta det b\xE4sta kredikortet f\xF6r dig. J\xE4mf\xF6r kreditkort som Remember flex och Norwegian",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 7
        }
      }), __jsx("meta", {
        name: "robots",
        content: "index, follow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 7
        }
      })), __jsx(_components_Index_Header_Header__WEBPACK_IMPORTED_MODULE_7__.default, {
        bestcard: bestcard,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 7
        }
      }), __jsx("main", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 7
        }
      }, __jsx("section", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }
      }, __jsx(_components_Index_WhyUs_WhyUs__WEBPACK_IMPORTED_MODULE_8__.default, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }
      })), __jsx("section", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }
      }, __jsx(_components_Index_UpdatedInforamtion_UpdatedInformation__WEBPACK_IMPORTED_MODULE_11__.default, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }
      })), __jsx("section", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }
      }, __jsx(_components_Ui_Categories_Categories__WEBPACK_IMPORTED_MODULE_13__.default, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }
      })), __jsx("section", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }
      }, __jsx(_components_Index_TopCards_TopCards__WEBPACK_IMPORTED_MODULE_9__.default, {
        creditCards: list,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJJbmRleFBhZ2UiLCJjYXJkcyIsInByb3BzIiwibWFwIiwiY2FyZCIsIkNyZWRpdENhcmQiLCJsaXN0IiwiQ3JlZGl0Q2FyZHMiLCJiZXN0Y2FyZCIsIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0lBaUJNQSxTOzs7Ozs7Ozs7Ozs7OzZCQUNNO0FBQ1IsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLEtBQUwsQ0FBV0QsS0FBWCxDQUFpQkUsR0FBakIsQ0FBcUIsVUFBQUMsSUFBSTtBQUFBLGVBQUksSUFBSUMsMkRBQUosQ0FBZUQsSUFBZixDQUFKO0FBQUEsT0FBekIsQ0FBZDtBQUNBLFVBQU1FLElBQUksR0FBRyxJQUFJQyw4REFBSixDQUFnQk4sS0FBaEIsQ0FBYjtBQUNBLFVBQU1PLFFBQVEsR0FBRyxLQUFLTixLQUFMLENBQVdNLFFBQTVCO0FBQ0YsYUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0wsTUFBQyxtREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERixFQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDLGlLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkYsRUFHRTtBQUFNLFlBQUksRUFBQyxRQUFYO0FBQW9CLGVBQU8sRUFBQyxlQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSEYsQ0FESyxFQU1ILE1BQUMsb0VBQUQ7QUFBUSxnQkFBUSxFQUFFQSxRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBTkcsRUFPSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0UsTUFBQyw2RkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FKRixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRSxNQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixDQVZGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNFLE1BQUMsd0VBQUQ7QUFBVSxtQkFBVyxFQUFFRixJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREYsQ0FiRixDQVBHLENBQVA7QUF5QkM7Ozs7RUE5QnFCRyx3RDs7O0FBa0V4QiwrREFBZVQsU0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iZGEyZDU1MTBlMGNmMzAzN2ZlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ3JlZGl0Q2FyZCB9IGZyb20gJy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZCdcclxuaW1wb3J0IHsgQ2FyZCBhcyBDcmVkaXRDYXJkSW50ZXJmYWNlIH0gZnJvbSAnLi4vY2xhc3Nlcy9DcmVkaXRDYXJkJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0luZGV4L0hlYWRlci9IZWFkZXInO1xyXG5pbXBvcnQgV2h5VXMgZnJvbSAnLi4vY29tcG9uZW50cy9JbmRleC9XaHlVcy9XaHlVcyc7XHJcbmltcG9ydCBUb3BDYXJkcyBmcm9tICcuLi9jb21wb25lbnRzL0luZGV4L1RvcENhcmRzL1RvcENhcmRzJztcclxuaW1wb3J0IHsgQmVzdENhcmQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0Jlc3RDYXJkJztcclxuaW1wb3J0IHsgZ2V0QmVzdENhcmQsIGdldENhcmRzIH0gZnJvbSAnLi4vcmVzb3VyY2VzL0NhcmRzJ1xyXG5pbXBvcnQgeyBDcmVkaXRDYXJkcyB9IGZyb20gJy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZHMnO1xyXG5pbXBvcnQgVXBkYXRlZEluZm9ybWF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvSW5kZXgvVXBkYXRlZEluZm9yYW10aW9uL1VwZGF0ZWRJbmZvcm1hdGlvbic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBDYXRlZ29yaWVzIGZyb20gJy4uL2NvbXBvbmVudHMvVWkvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzJztcclxuaW1wb3J0IEVtYWlsQXJlYSBmcm9tICcuLi9jb21wb25lbnRzL0luZGV4L0VtYWlsQXJlYS9FbWFpbEFyZWEnO1xyXG5pbXBvcnQgVGVzdCBmcm9tICcuLi9jb21wb25lbnRzL0luZGV4L1Rlc3QvVGVzdCc7XHJcblxyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICBjYXJkcyA6IENyZWRpdENhcmRzO1xyXG59XHJcblxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGxvYWRpbmcgOiBib29sZWFuO1xyXG4gICAgY29tcGFyZUlkcyA6IHN0cmluZ1tdO1xyXG4gICAgY2FyZHM6IENyZWRpdENhcmRJbnRlcmZhY2VbXTtcclxuICAgIGJlc3RjYXJkOiBCZXN0Q2FyZDtcclxufVxyXG5cclxuY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4gIHtcclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3QgY2FyZHMgPSB0aGlzLnByb3BzLmNhcmRzLm1hcChjYXJkID0+IG5ldyBDcmVkaXRDYXJkKGNhcmQpKTtcclxuICAgIGNvbnN0IGxpc3QgPSBuZXcgQ3JlZGl0Q2FyZHMoY2FyZHMpO1xyXG4gICAgY29uc3QgYmVzdGNhcmQgPSB0aGlzLnByb3BzLmJlc3RjYXJkXHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPkFsbGEga3JlZGl0a29ydDwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJLcmVkaXRrb3J0c2tvbGwuY29tIGrDpG1mw7ZyIG9saWthIGtyZWRpdGtvcnQgZsO2ciBhdHQgaGl0dGEgZGV0IGLDpHN0YSBrcmVkaWtvcnRldCBmw7ZyIGRpZy4gSsOkbWbDtnIga3JlZGl0a29ydCBzb20gUmVtZW1iZXIgZmxleCBvY2ggTm9yd2VnaWFuXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJpbmRleCwgZm9sbG93XCIgLz5cclxuICAgIDwvSGVhZD5cclxuICAgICAgPEhlYWRlciBiZXN0Y2FyZD17YmVzdGNhcmR9IC8+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPFdoeVVzIC8+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPFVwZGF0ZWRJbmZvcm1hdGlvbiAvPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICB7LyogPHNlY3Rpb24+XHJcbiAgICAgICAgICA8VGVzdCAvPlxyXG4gICAgICAgIDwvc2VjdGlvbj4gKi99XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8Q2F0ZWdvcmllcyAvPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDxUb3BDYXJkcyBjcmVkaXRDYXJkcz17bGlzdH0gLz5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuICA8L2Rpdj5cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwcm9taXNlcyA9IFtnZXRDYXJkcygpLCBnZXRCZXN0Q2FyZCgpXTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZXMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcclxuXHJcblxyXG4gICAgY29uc3QgY2FyZHNSZXNwb25zZSA9IHJlc3BvbnNlc1swXSBhcyB7Y2FyZHM/OiBDcmVkaXRDYXJkSW50ZXJmYWNlW10sIGVycm9yPzogYm9vbGVhbn07XHJcbiAgICBjb25zdCBiZXN0Y2FyZFJlc3BvbnNlID0gcmVzcG9uc2VzWzFdIGFzIHtiZXN0Y2FyZD86IEJlc3RDYXJkLCBlcnJvcj86IGJvb2xlYW59O1xyXG5cclxuXHJcbiAgICBpZihjYXJkc1Jlc3BvbnNlLmVycm9yIHx8IGJlc3RjYXJkUmVzcG9uc2UuZXJyb3IpIHRocm93IG5ldyBFcnJvcigpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHMgOiB7XHJcbiAgICAgICAgY2FyZHM6IGNhcmRzUmVzcG9uc2UuY2FyZHMsXHJcbiAgICAgICAgYmVzdGNhcmQ6IGJlc3RjYXJkUmVzcG9uc2UuYmVzdGNhcmRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIGNhcmRzIDogW10sXHJcbiAgICAgICAgYmVzdGNhcmQ6IHVuZGVmaW5lZFxyXG4gICAgICB9LFxyXG4gICAgICByZXZhbGlkYXRlOiAzNjAwICogNFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZVxyXG4iXSwic291cmNlUm9vdCI6IiJ9