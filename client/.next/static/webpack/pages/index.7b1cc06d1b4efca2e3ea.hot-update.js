self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Ui/Creditcard/Creditcard.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Ui/Creditcard/Creditcard.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Creditcard_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Creditcard.module.css */ "./src/components/Ui/Creditcard/Creditcard.module.css");
/* harmony import */ var _Creditcard_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Rating_Rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Rating/Rating */ "./src/components/Ui/Rating/Rating.tsx");
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tippyjs/react */ "./node_modules/@tippyjs/react/dist/tippy-react.esm.js");
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tippy.js/dist/tippy.css */ "./node_modules/tippy.js/dist/tippy.css");
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Buttons_ButtonBlue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Buttons/ButtonBlue */ "./src/components/Ui/Buttons/ButtonBlue.tsx");
/* harmony import */ var _context_State__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../context/State */ "./src/context/State.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\Ui\\Creditcard\\Creditcard.tsx",
    _this = undefined,
    _s = $RefreshSig$();

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

 // Components







var Creditcard = function Creditcard(_ref) {
  _s();

  var card = _ref.card;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_State__WEBPACK_IMPORTED_MODULE_4__.StateContext),
      state = _useContext[0],
      setState = _useContext[1]; // const isCardCompare = compareState.checkIfCardCompare(card.properties._id)


  var addToCompare = function addToCompare(card) {
    var State = Object.assign({}, state);
    State.compareIds.push(card);
    setState(State);
  };

  var removeFromCompare = function removeFromCompare(id) {
    var State = Object.assign({}, state);
    var index = State.compareIds.findIndex(function (Card) {
      return Card._id === id;
    });
    if (index < 0) return;
    State.compareIds.splice(index, 1);
    setState(State);
  };

  var isCardCompare = function isCardCompare(id) {
    var exists = state.compareIds.find(function (Card) {
      return Card._id === id;
    });
    return exists ? true : false;
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("h4", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_5___default().Ismobile),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, card.properties.name), __jsx("span", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_5___default().Ismobile),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(_Rating_Rating__WEBPACK_IMPORTED_MODULE_1__.default, {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_5___default().rating),
    rating: card.properties.rating,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 47
    }
  })), __jsx("img", {
    alt: "kreditkort ".concat(card.properties.name),
    src: card.properties.img,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("h4", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_5___default().IsComputer),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, card.properties.name), __jsx("span", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_5___default().IsComputer),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx(_Rating_Rating__WEBPACK_IMPORTED_MODULE_1__.default, {
    rating: card.properties.rating,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 53
    }
  })), __jsx("div", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_5___default().properties),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, card.properties.properties.map(function (propertie) {
    if (propertie.type === 'GOOD') {
      return __jsx("div", {
        className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_5___default().propertie),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 44
        }
      }, __jsx("span", {
        className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_5___default().good),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fas fa-check-circle",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 71
        }
      })), __jsx("li", {
        key: propertie.propertie,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 41
        }
      }, propertie.propertie));
    } else {
      return __jsx("div", {
        className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_5___default().propertie),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 44
        }
      }, __jsx("span", {
        className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_5___default().bad),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fas fa-times-circle",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 70
        }
      })), __jsx("li", {
        key: propertie.propertie,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 41
        }
      }, propertie.propertie));
    }
  }))))), __jsx("div", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_5___default().specific),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, card.properties.specifics.map(function (specific) {
    var text = specific.text.split(': ');
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      key: specific.text,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 32
      }
    }, __jsx("li", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 29
      }
    }, __jsx("span", {
      style: {
        fontWeight: 'bold'
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 33
      }
    }, text[0], ":"), " ", __jsx("span", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 85
      }
    }, text[1])));
  })))), __jsx("div", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_5___default().btnBackground),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_5___default().buttons),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, __jsx(_Buttons_ButtonBlue__WEBPACK_IMPORTED_MODULE_3__.default, {
    type: "full",
    text: "Ans\xF6k nu!",
    href: "/Redirect?card=".concat(card.properties._id),
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_5___default()["ansökButton"]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }), __jsx(_Buttons_ButtonBlue__WEBPACK_IMPORTED_MODULE_3__.default, {
    type: "outline",
    text: "Mer information",
    href: "/kort/".concat(card.properties._id.replace(/(\s)/g, '-')),
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_5___default()["ansökButton"]),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }))), __jsx(_tippyjs_react__WEBPACK_IMPORTED_MODULE_6__.default, {
    content: !isCardCompare(card.properties._id) ? 'Lägg till kreditkort i jämförelse' : 'Ta bort kreditkort ur jämförelse',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx("div", {
    onClick: function onClick() {
      return isCardCompare(card.properties._id) ? removeFromCompare(card.properties._id) : addToCompare(card.properties);
    },
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_5___default().toCompare),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, isCardCompare(card.properties._id) ? __jsx("i", {
    className: "far fa-times-circle",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 60
    }
  }) : __jsx("i", {
    className: "fas fa-file-import",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 102
    }
  })))));
};

_s(Creditcard, "IzBrK9Uh5b8SzqXA7wuK/y4Nq84=");

_c = Creditcard;
/* harmony default export */ __webpack_exports__["default"] = (Creditcard);

var _c;

$RefreshReg$(_c, "Creditcard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVWkvQ3JlZGl0Y2FyZC9DcmVkaXRjYXJkLnRzeCJdLCJuYW1lcyI6WyJDcmVkaXRjYXJkIiwiY2FyZCIsInVzZUNvbnRleHQiLCJTdGF0ZUNvbnRleHQiLCJzdGF0ZSIsInNldFN0YXRlIiwiYWRkVG9Db21wYXJlIiwiU3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJjb21wYXJlSWRzIiwicHVzaCIsInJlbW92ZUZyb21Db21wYXJlIiwiaWQiLCJpbmRleCIsImZpbmRJbmRleCIsIkNhcmQiLCJfaWQiLCJzcGxpY2UiLCJpc0NhcmRDb21wYXJlIiwiZXhpc3RzIiwiZmluZCIsInN0eWxlcyIsInByb3BlcnRpZXMiLCJuYW1lIiwicmF0aW5nIiwiaW1nIiwibWFwIiwicHJvcGVydGllIiwidHlwZSIsInNwZWNpZmljcyIsInNwZWNpZmljIiwidGV4dCIsInNwbGl0IiwiZm9udFdlaWdodCIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FHQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUlBLElBQU1BLFVBQXlELEdBQUcsU0FBNURBLFVBQTRELE9BQVk7QUFBQTs7QUFBQSxNQUFWQyxJQUFVLFFBQVZBLElBQVU7O0FBQUEsb0JBR2hEQyxpREFBVSxDQUFNQyx3REFBTixDQUhzQztBQUFBLE1BR25FQyxLQUhtRTtBQUFBLE1BRzVEQyxRQUg0RCxtQkFJMUU7OztBQUdBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNMLElBQUQsRUFBZ0M7QUFDakQsUUFBSU0sS0FBSyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCTCxLQUFsQixDQUFaO0FBQ0FHLFNBQUssQ0FBQ0csVUFBTixDQUFpQkMsSUFBakIsQ0FBc0JWLElBQXRCO0FBQ0FJLFlBQVEsQ0FBQ0UsS0FBRCxDQUFSO0FBQ0gsR0FKRDs7QUFNQSxNQUFNSyxp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QVMsRUFBRWIsOEVBQTNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLENBekNMLEVBK0NLLE1BQUMsbURBQUQ7QUFBTyxXQUFPLEVBQUUsQ0FBQ0gsYUFBYSxDQUFDbEIsSUFBSSxDQUFDc0IsVUFBTCxDQUFnQk4sR0FBakIsQ0FBZCxHQUFzQyxtQ0FBdEMsR0FBNEUsa0NBQTVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLFdBQU8sRUFBRTtBQUFBLGFBQU1FLGFBQWEsQ0FBQ2xCLElBQUksQ0FBQ3NCLFVBQUwsQ0FBZ0JOLEdBQWpCLENBQWIsR0FBcUNMLGlCQUFpQixDQUFDWCxJQUFJLENBQUNzQixVQUFMLENBQWdCTixHQUFqQixDQUF0RCxHQUE4RVgsWUFBWSxDQUFDTCxJQUFJLENBQUNzQixVQUFOLENBQWhHO0FBQUEsS0FBZDtBQUFpSSxhQUFTLEVBQUVELHlFQUE1STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ01ILGFBQWEsQ0FBQ2xCLElBQUksQ0FBQ3NCLFVBQUwsQ0FBZ0JOLEdBQWpCLENBQWIsR0FBcUM7QUFBRyxhQUFTLEVBQUMscUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFyQyxHQUErRTtBQUFHLGFBQVMsRUFBQyxvQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRHJGLENBREosQ0EvQ0wsQ0FESSxDQUFQO0FBdURILENBbEZEOztHQUFNakIsVTs7S0FBQUEsVTtBQW9GTiwrREFBZUEsVUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43YjFjYzA2ZDFiNGVmY2EyZTNlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ3JlZGl0Y2FyZC5tb2R1bGUuY3NzJ1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gJy4uL1JhdGluZy9SYXRpbmcnO1xyXG5pbXBvcnQgeyBDcmVkaXRDYXJkIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9DcmVkaXRDYXJkJztcclxuaW1wb3J0IFRpcHB5IGZyb20gJ0B0aXBweWpzL3JlYWN0JztcclxuaW1wb3J0ICd0aXBweS5qcy9kaXN0L3RpcHB5LmNzcyc7XHJcbmltcG9ydCBCdXR0b25PcmFuZ2UgZnJvbSAnLi4vQnV0dG9ucy9CdXR0b25CbHVlJztcclxuaW1wb3J0IHtDYXJkIGFzIENyZWRpdENhcmRJbnRlcmZhY2V9IGZyb20gJy4uLy4uLy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZCdcclxuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dC9TdGF0ZSc7XHJcblxyXG5cclxuXHJcbmNvbnN0IENyZWRpdGNhcmQgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDx7Y2FyZCA6IENyZWRpdENhcmR9PiA9ICh7Y2FyZH0pID0+IHtcclxuXHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0PGFueT4oU3RhdGVDb250ZXh0KVxyXG4gICAgLy8gY29uc3QgaXNDYXJkQ29tcGFyZSA9IGNvbXBhcmVTdGF0ZS5jaGVja0lmQ2FyZENvbXBhcmUoY2FyZC5wcm9wZXJ0aWVzLl9pZClcclxuXHJcblxyXG4gICAgY29uc3QgYWRkVG9Db21wYXJlID0gKGNhcmQgOiBDcmVkaXRDYXJkSW50ZXJmYWNlKSA9PiB7XHJcbiAgICAgICAgbGV0IFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xyXG4gICAgICAgIFN0YXRlLmNvbXBhcmVJZHMucHVzaChjYXJkKVxyXG4gICAgICAgIHNldFN0YXRlKFN0YXRlKVxyXG4gICAgfSAgIFxyXG5cclxuICAgIGNvbnN0IHJlbW92ZUZyb21Db21wYXJlID0gKGlkIDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgbGV0IFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gU3RhdGUuY29tcGFyZUlkcy5maW5kSW5kZXgoKENhcmQgOiBDcmVkaXRDYXJkSW50ZXJmYWNlKSA9PiBDYXJkLl9pZCA9PT0gaWQpXHJcbiAgICAgICAgaWYoaW5kZXggPCAwKSByZXR1cm47XHJcbiAgICAgICAgU3RhdGUuY29tcGFyZUlkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHNldFN0YXRlKFN0YXRlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlzQ2FyZENvbXBhcmUgPSAoaWQgOiBzdHJpbmcpIDogQm9vbGVhbiA9PiB7XHJcbiAgICAgICAgY29uc3QgZXhpc3RzID0gc3RhdGUuY29tcGFyZUlkcy5maW5kKChDYXJkIDogQ3JlZGl0Q2FyZEludGVyZmFjZSkgPT4gQ2FyZC5faWQgPT09IGlkKVxyXG5cclxuICAgICAgICByZXR1cm4gZXhpc3RzID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLklzbW9iaWxlfT57Y2FyZC5wcm9wZXJ0aWVzLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuSXNtb2JpbGV9PjxSYXRpbmcgY2xhc3NOYW1lPXtzdHlsZXMucmF0aW5nfSByYXRpbmc9e2NhcmQucHJvcGVydGllcy5yYXRpbmd9Lz48L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PXtga3JlZGl0a29ydCAke2NhcmQucHJvcGVydGllcy5uYW1lfWB9IHNyYz17Y2FyZC5wcm9wZXJ0aWVzLmltZ30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXMuSXNDb21wdXRlcn0+e2NhcmQucHJvcGVydGllcy5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5Jc0NvbXB1dGVyfT48UmF0aW5nIHJhdGluZz17Y2FyZC5wcm9wZXJ0aWVzLnJhdGluZ30gLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnRpZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJkLnByb3BlcnRpZXMucHJvcGVydGllcy5tYXAocHJvcGVydGllID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwcm9wZXJ0aWUudHlwZSA9PT0gJ0dPT0QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnRpZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5nb29kfT48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hlY2stY2lyY2xlXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Byb3BlcnRpZS5wcm9wZXJ0aWV9Pntwcm9wZXJ0aWUucHJvcGVydGllfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnRpZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5iYWR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lcy1jaXJjbGVcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cHJvcGVydGllLnByb3BlcnRpZX0+e3Byb3BlcnRpZS5wcm9wZXJ0aWV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNwZWNpZmljfT5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhcmQucHJvcGVydGllcy5zcGVjaWZpY3MubWFwKHNwZWNpZmljID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IHNwZWNpZmljLnRleHQuc3BsaXQoJzogJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudCBrZXk9e3NwZWNpZmljLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCd9fT57dGV4dFswXX06PC9zcGFuPiA8c3Bhbj57dGV4dFsxXX08L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnRuQmFja2dyb3VuZH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25PcmFuZ2UgdHlwZT1cImZ1bGxcIiB0ZXh0PVwiQW5zw7ZrIG51IVwiIGhyZWY9e2AvUmVkaXJlY3Q/Y2FyZD0ke2NhcmQucHJvcGVydGllcy5faWR9YH0gY2xhc3NOYW1lPXtzdHlsZXMuYW5zw7ZrQnV0dG9ufSAvPiBcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uT3JhbmdlIHR5cGU9XCJvdXRsaW5lXCIgdGV4dD1cIk1lciBpbmZvcm1hdGlvblwiIGhyZWY9e2Ava29ydC8ke2NhcmQucHJvcGVydGllcy5faWQucmVwbGFjZSgvKFxccykvZywgJy0nKX1gfSBjbGFzc05hbWU9e3N0eWxlcy5hbnPDtmtCdXR0b259IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxUaXBweSBjb250ZW50PXshaXNDYXJkQ29tcGFyZShjYXJkLnByb3BlcnRpZXMuX2lkKSA/ICdMw6RnZyB0aWxsIGtyZWRpdGtvcnQgaSBqw6RtZsO2cmVsc2UnIDogJ1RhIGJvcnQga3JlZGl0a29ydCB1ciBqw6RtZsO2cmVsc2UnfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaXNDYXJkQ29tcGFyZShjYXJkLnByb3BlcnRpZXMuX2lkKSA/IHJlbW92ZUZyb21Db21wYXJlKGNhcmQucHJvcGVydGllcy5faWQpIDogYWRkVG9Db21wYXJlKGNhcmQucHJvcGVydGllcyl9IGNsYXNzTmFtZT17c3R5bGVzLnRvQ29tcGFyZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIHtpc0NhcmRDb21wYXJlKGNhcmQucHJvcGVydGllcy5faWQpID8gPGkgY2xhc3NOYW1lPVwiZmFyIGZhLXRpbWVzLWNpcmNsZVwiPjwvaT4gOiA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZmlsZS1pbXBvcnRcIj48L2k+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvVGlwcHk+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgPC9SZWFjdC5GcmFnbWVudD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlZGl0Y2FyZDsiXSwic291cmNlUm9vdCI6IiJ9