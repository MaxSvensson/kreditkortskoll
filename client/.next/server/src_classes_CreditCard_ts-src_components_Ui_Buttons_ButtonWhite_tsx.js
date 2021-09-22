exports.id = "src_classes_CreditCard_ts-src_components_Ui_Buttons_ButtonWhite_tsx";
exports.ids = ["src_classes_CreditCard_ts-src_components_Ui_Buttons_ButtonWhite_tsx"];
exports.modules = {

/***/ "./src/classes/CreditCard.ts":
/*!***********************************!*\
  !*** ./src/classes/CreditCard.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreditCard": function() { return /* binding */ CreditCard; }
/* harmony export */ });
class CreditCard {
  constructor(properties) {
    this.properties = properties;
  }

  addToCompare() {}

  checkIfCardCompare() {}

}

/***/ }),

/***/ "./src/components/Ui/Buttons/ButtonWhite.tsx":
/*!***************************************************!*\
  !*** ./src/components/Ui/Buttons/ButtonWhite.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Buttons_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Buttons.module.css */ "./src/components/Ui/Buttons/Buttons.module.css");
/* harmony import */ var _Buttons_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Buttons_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Kreditkortskoll\\Client\\src\\components\\Ui\\Buttons\\ButtonWhite.tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const ButtonWhite = props => {
  return __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: props.href ? props.href : '#',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: `${(_Buttons_module_css__WEBPACK_IMPORTED_MODULE_2___default().ButtonWhite)} ${props.className} ${props.type === "outline" ? (_Buttons_module_css__WEBPACK_IMPORTED_MODULE_2___default().outlinedWhite) : props.type === "full" ? (_Buttons_module_css__WEBPACK_IMPORTED_MODULE_2___default().fullWhite) : null}`,
    onClick: props.onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, props.text));
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonWhite);

/***/ }),

/***/ "./src/components/Ui/Buttons/Buttons.module.css":
/*!******************************************************!*\
  !*** ./src/components/Ui/Buttons/Buttons.module.css ***!
  \******************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"ButtonWhite": "Buttons_ButtonWhite__2DOgy",
	"outlinedWhite": "Buttons_outlinedWhite__3SYep",
	"fullWhite": "Buttons_fullWhite__3R_A7",
	"ButtonOrange": "Buttons_ButtonOrange__zOelK",
	"outlinedBlue": "Buttons_outlinedBlue__2d32b",
	"fullBlue": "Buttons_fullBlue__1YwNn",
	"buttonHover": "Buttons_buttonHover__LdsKD"
};


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY2xhc3Nlcy9DcmVkaXRDYXJkLnRzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL0J1dHRvbnMvQnV0dG9uV2hpdGUudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL0J1dHRvbnMvQnV0dG9ucy5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbIkNyZWRpdENhcmQiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJhZGRUb0NvbXBhcmUiLCJjaGVja0lmQ2FyZENvbXBhcmUiLCJCdXR0b25XaGl0ZSIsInByb3BzIiwiaHJlZiIsInN0eWxlcyIsImNsYXNzTmFtZSIsInR5cGUiLCJvbkNsaWNrIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBbUJPLE1BQU1BLFVBQU4sQ0FBaUI7QUFDdEJDLGFBQVcsQ0FBU0MsVUFBVCxFQUE0QjtBQUFBLFNBQW5CQSxVQUFtQixHQUFuQkEsVUFBbUI7QUFBRzs7QUFFMUNDLGNBQVksR0FBSSxDQUVmOztBQUVEQyxvQkFBa0IsR0FBSSxDQUVyQjs7QUFUcUIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJ4QjtBQUVBOztBQVdBLE1BQU1DLFdBQTRDLEdBQUlDLEtBQUQsSUFBVztBQUM3RCxTQUFPLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUVBLEtBQUssQ0FBQ0MsSUFBTixHQUFhRCxLQUFLLENBQUNDLElBQW5CLEdBQTBCLEdBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTjtBQUFHLGFBQVMsRUFBRyxHQUFFQyx3RUFBbUIsSUFBR0YsS0FBSyxDQUFDRyxTQUFVLElBQUdILEtBQUssQ0FBQ0ksSUFBTixLQUFlLFNBQWYsR0FBMkJGLDBFQUEzQixHQUFrREYsS0FBSyxDQUFDSSxJQUFOLEtBQWUsTUFBZixHQUF3QkYsc0VBQXhCLEdBQTJDLElBQUssRUFBNUo7QUFBK0osV0FBTyxFQUFFRixLQUFLLENBQUNLLE9BQTlLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0wsS0FBSyxDQUFDTSxJQURYLENBRE0sQ0FBUDtBQUtGLENBTkQ7O0FBUUEsK0RBQWVQLFdBQWYsRTs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzcmNfY2xhc3Nlc19DcmVkaXRDYXJkX3RzLXNyY19jb21wb25lbnRzX1VpX0J1dHRvbnNfQnV0dG9uV2hpdGVfdHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBDYXJkIHtcclxuICBfaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgc2hvdzogYm9vbGVhbjtcclxuICByZXF1aXJlbWVudHM6IHN0cmluZ1tdO1xyXG4gIHJhdGluZzogc3RyaW5nO1xyXG4gIHByb3BlcnRpZXM6IHtfaWQ/OiBudW1iZXIsIHByb3BlcnRpZTogc3RyaW5nLCB0eXBlOiBzdHJpbmd9W107XHJcbiAgc3BlY2lmaWNzOiB7X2lkPzogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd9W107XHJcbiAgaW1nOiBzdHJpbmc7XHJcbiAgaW5zdXJhbmNlczoge19pZD86IG51bWJlciwgdGV4dDogc3RyaW5nLCB0eXBlOiBzdHJpbmcgfVtdO1xyXG4gIGJvbnVzdGV4dDogc3RyaW5nO1xyXG4gIGNyZWRpdFRleHQ6IHN0cmluZztcclxuICBpbnN1cmFuY2VUZXh0OiBzdHJpbmc7XHJcbiAgZmFjdHM6IHtfaWQ/OiBudW1iZXIsIHRleHQ6IHN0cmluZywgdmFsdWU6IHN0cmluZ31bXTtcclxuICBvcmRlcjogbnVtYmVyO1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uIDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlZGl0Q2FyZCB7XHJcbiAgY29uc3RydWN0b3IgKHB1YmxpYyBwcm9wZXJ0aWVzIDogQ2FyZCkgeyB9XHJcblxyXG4gIGFkZFRvQ29tcGFyZSAoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgY2hlY2tJZkNhcmRDb21wYXJlICgpIHtcclxuICAgIFxyXG4gIH1cclxufSIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b25zLm1vZHVsZS5jc3MnO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBocmVmPzogc3RyaW5nO1xyXG4gIG9uQ2xpY2s/IDogKCkgPT4gdm9pZDtcclxuICBjbGFzc05hbWU/IDogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZ1xyXG59XHJcblxyXG5jb25zdCBCdXR0b25XaGl0ZSA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICByZXR1cm4gPExpbmsgaHJlZj17cHJvcHMuaHJlZiA/IHByb3BzLmhyZWYgOiAnIyd9PlxyXG4gICAgPGEgY2xhc3NOYW1lPXtgJHtzdHlsZXMuQnV0dG9uV2hpdGV9ICR7cHJvcHMuY2xhc3NOYW1lfSAke3Byb3BzLnR5cGUgPT09IFwib3V0bGluZVwiID8gc3R5bGVzLm91dGxpbmVkV2hpdGUgOiBwcm9wcy50eXBlID09PSBcImZ1bGxcIiA/IHN0eWxlcy5mdWxsV2hpdGUgOiBudWxsfWB9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgIHtwcm9wcy50ZXh0fVxyXG4gICAgPC9hPlxyXG4gIDwvTGluaz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uV2hpdGU7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQnV0dG9uV2hpdGVcIjogXCJCdXR0b25zX0J1dHRvbldoaXRlX18yRE9neVwiLFxuXHRcIm91dGxpbmVkV2hpdGVcIjogXCJCdXR0b25zX291dGxpbmVkV2hpdGVfXzNTWWVwXCIsXG5cdFwiZnVsbFdoaXRlXCI6IFwiQnV0dG9uc19mdWxsV2hpdGVfXzNSX0E3XCIsXG5cdFwiQnV0dG9uT3JhbmdlXCI6IFwiQnV0dG9uc19CdXR0b25PcmFuZ2VfX3pPZWxLXCIsXG5cdFwib3V0bGluZWRCbHVlXCI6IFwiQnV0dG9uc19vdXRsaW5lZEJsdWVfXzJkMzJiXCIsXG5cdFwiZnVsbEJsdWVcIjogXCJCdXR0b25zX2Z1bGxCbHVlX18xWXdOblwiLFxuXHRcImJ1dHRvbkhvdmVyXCI6IFwiQnV0dG9uc19idXR0b25Ib3Zlcl9fTGRzS0RcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=