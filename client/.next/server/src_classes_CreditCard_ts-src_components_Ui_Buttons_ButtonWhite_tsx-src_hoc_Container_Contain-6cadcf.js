exports.id = "src_classes_CreditCard_ts-src_components_Ui_Buttons_ButtonWhite_tsx-src_hoc_Container_Contain-6cadcf";
exports.ids = ["src_classes_CreditCard_ts-src_components_Ui_Buttons_ButtonWhite_tsx-src_hoc_Container_Contain-6cadcf"];
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
var _jsxFileName = "D:\\kredit\\client\\src\\components\\Ui\\Buttons\\ButtonWhite.tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const ButtonWhite = props => {
  return __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: props.href ? props.href : '#',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("a", {
    id: (_Buttons_module_css__WEBPACK_IMPORTED_MODULE_2___default().ButtonWhite),
    onClick: props.onClick,
    className: props.className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, props.text));
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonWhite);

/***/ }),

/***/ "./src/config/axios.ts":
/*!*****************************!*\
  !*** ./src/config/axios.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: 'https://kreditkortskollapi.ew.r.appspot.com/'
});
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/hoc/Container/Container.tsx":
/*!*****************************************!*\
  !*** ./src/hoc/Container/Container.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Container_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container.module.css */ "./src/hoc/Container/Container.module.css");
/* harmony import */ var _Container_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Container_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\kredit\\client\\src\\hoc\\Container\\Container.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const Container = props => {
  return __jsx("div", {
    id: (_Container_module_css__WEBPACK_IMPORTED_MODULE_1___default().Container),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 12
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./src/resources/Cards.ts":
/*!********************************!*\
  !*** ./src/resources/Cards.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBestCard": function() { return /* binding */ getBestCard; },
/* harmony export */   "getCards": function() { return /* binding */ getCards; },
/* harmony export */   "getCard": function() { return /* binding */ getCard; },
/* harmony export */   "getCompareCards": function() { return /* binding */ getCompareCards; }
/* harmony export */ });
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/axios */ "./src/config/axios.ts");

const getBestCard = async () => {
  console.log('Not static');

  try {
    // Fetch bestcard from server
    const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/bestcard');
    if (!res.data.bestCard[0]) throw new Error();
    const bestcard = res.data.bestCard[0]; // Return bestcard

    return {
      bestcard
    };
  } catch (error) {
    return {
      error: true
    };
  }
};
const getCards = async () => {
  // Fetch cards from server
  try {
    const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/cards');
    const cards = res.data.cards;
    return {
      cards,
      error: false
    };
  } catch (error) {
    return {
      error: true
    };
  }
};
const getCard = async name => {
  try {
    const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__.default.get(`/card/${name}`);
    const card = res.data;
    return {
      card,
      error: false
    };
  } catch (error) {
    return {
      error: true
    };
  }
};
const getCompareCards = async ids => {
  try {
    // Fetching cards
    const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__.default.get(`/cards/compare?ids=${ids}`);
    let cards = res.data.cardsInfo; // Check for cards

    if (!cards) throw new Error(); // Filter undefined cards

    cards = cards.filter(cardsInfo => cardsInfo !== null); // Return cards

    return {
      cards,
      error: false
    };
  } catch (error) {
    // Error, return
    return {
      error: true
    };
  }
};

/***/ }),

/***/ "./src/components/Ui/Buttons/Buttons.module.css":
/*!******************************************************!*\
  !*** ./src/components/Ui/Buttons/Buttons.module.css ***!
  \******************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"ButtonWhite": "Buttons_ButtonWhite__2DOgy",
	"ButtonOrange": "Buttons_ButtonOrange__zOelK",
	"buttonHover": "Buttons_buttonHover__LdsKD"
};


/***/ }),

/***/ "./src/hoc/Container/Container.module.css":
/*!************************************************!*\
  !*** ./src/hoc/Container/Container.module.css ***!
  \************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"Container": "Container_Container__2FiPT"
};


/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY2xhc3Nlcy9DcmVkaXRDYXJkLnRzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL0J1dHRvbnMvQnV0dG9uV2hpdGUudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb25maWcvYXhpb3MudHMiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2hvYy9Db250YWluZXIvQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvcmVzb3VyY2VzL0NhcmRzLnRzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL0J1dHRvbnMvQnV0dG9ucy5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9ob2MvQ29udGFpbmVyL0NvbnRhaW5lci5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9pZ25vcmVkfEQ6XFxrcmVkaXRcXGNsaWVudFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkNyZWRpdENhcmQiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJhZGRUb0NvbXBhcmUiLCJjaGVja0lmQ2FyZENvbXBhcmUiLCJCdXR0b25XaGl0ZSIsInByb3BzIiwiaHJlZiIsInN0eWxlcyIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJ0ZXh0IiwiaW5zdGFuY2UiLCJheGlvcyIsImJhc2VVUkwiLCJDb250YWluZXIiLCJjaGlsZHJlbiIsImdldEJlc3RDYXJkIiwiY29uc29sZSIsImxvZyIsInJlcyIsImRhdGEiLCJiZXN0Q2FyZCIsIkVycm9yIiwiYmVzdGNhcmQiLCJlcnJvciIsImdldENhcmRzIiwiY2FyZHMiLCJnZXRDYXJkIiwibmFtZSIsImNhcmQiLCJnZXRDb21wYXJlQ2FyZHMiLCJpZHMiLCJjYXJkc0luZm8iLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQW1CTyxNQUFNQSxVQUFOLENBQWlCO0FBQ3RCQyxhQUFXLENBQVNDLFVBQVQsRUFBNEI7QUFBQSxTQUFuQkEsVUFBbUIsR0FBbkJBLFVBQW1CO0FBQUc7O0FBRTFDQyxjQUFZLEdBQUksQ0FFZjs7QUFFREMsb0JBQWtCLEdBQUksQ0FFckI7O0FBVHFCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CeEI7QUFFQTs7QUFVQSxNQUFNQyxXQUE0QyxHQUFJQyxLQUFELElBQVc7QUFDN0QsU0FBTyxNQUFDLGtEQUFEO0FBQU0sUUFBSSxFQUFFQSxLQUFLLENBQUNDLElBQU4sR0FBYUQsS0FBSyxDQUFDQyxJQUFuQixHQUEwQixHQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ047QUFBRyxNQUFFLEVBQUVDLHdFQUFQO0FBQTJCLFdBQU8sRUFBRUYsS0FBSyxDQUFDRyxPQUExQztBQUFtRCxhQUFTLEVBQUVILEtBQUssQ0FBQ0ksU0FBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLSixLQUFLLENBQUNLLElBRFgsQ0FETSxDQUFQO0FBS0YsQ0FORDs7QUFRQSwrREFBZU4sV0FBZixFOzs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUVBLE1BQU1PLFFBQVEsR0FBR0MsbURBQUEsQ0FBYTtBQUMxQkMsU0FBTyxFQUFFO0FBRGlCLENBQWIsQ0FBakI7QUFNQSwrREFBZUYsUUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBOztBQUdBLE1BQU1HLFNBQW9CLEdBQUlULEtBQUQsSUFBVztBQUNwQyxTQUFPO0FBQUssTUFBRSxFQUFFRSx3RUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0FGLEtBQUssQ0FBQ1UsUUFETixDQUFQO0FBR0gsQ0FKRDs7QUFNQSwrREFBZUQsU0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFNTyxNQUFNRSxXQUFXLEdBQUcsWUFBOEQ7QUFDckZDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7O0FBQ0YsTUFBSTtBQUNGO0FBQ0EsVUFBTUMsR0FBRyxHQUFHLE1BQU1QLHNEQUFBLENBQVUsV0FBVixDQUFsQjtBQUVBLFFBQUcsQ0FBQ08sR0FBRyxDQUFDQyxJQUFKLENBQVNDLFFBQVQsQ0FBa0IsQ0FBbEIsQ0FBSixFQUEwQixNQUFNLElBQUlDLEtBQUosRUFBTjtBQUUxQixVQUFNQyxRQUFRLEdBQUdKLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxRQUFULENBQWtCLENBQWxCLENBQWpCLENBTkUsQ0FRRjs7QUFDQSxXQUFPO0FBQ0xFO0FBREssS0FBUDtBQUdELEdBWkQsQ0FZRSxPQUFPQyxLQUFQLEVBQWM7QUFDZCxXQUFPO0FBQ0xBLFdBQUssRUFBQztBQURELEtBQVA7QUFHSDtBQUNBLENBbkJNO0FBcUJBLE1BQU1DLFFBQVEsR0FBRyxZQUEwRTtBQUNoRztBQUNBLE1BQUk7QUFDQSxVQUFNTixHQUFHLEdBQUcsTUFBTVAsc0RBQUEsQ0FBVSxRQUFWLENBQWxCO0FBQ0EsVUFBTWMsS0FBSyxHQUFHUCxHQUFHLENBQUNDLElBQUosQ0FBU00sS0FBdkI7QUFFQSxXQUFPO0FBQ0xBLFdBREs7QUFFTEYsV0FBSyxFQUFDO0FBRkQsS0FBUDtBQUlILEdBUkQsQ0FRRSxPQUFPQSxLQUFQLEVBQWM7QUFDZCxXQUFPO0FBQ0xBLFdBQUssRUFBQztBQURELEtBQVA7QUFHRDtBQUNGLENBZk07QUFpQkEsTUFBTUcsT0FBTyxHQUFHLE1BQU9DLElBQVAsSUFBb0Y7QUFFekcsTUFBSTtBQUNGLFVBQU1ULEdBQUcsR0FBRyxNQUFNUCxzREFBQSxDQUFXLFNBQVFnQixJQUFLLEVBQXhCLENBQWxCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHVixHQUFHLENBQUNDLElBQWpCO0FBRUEsV0FBTztBQUNMUyxVQURLO0FBRUxMLFdBQUssRUFBQztBQUZELEtBQVA7QUFJRCxHQVJELENBUUUsT0FBT0EsS0FBUCxFQUFjO0FBRWQsV0FBTztBQUNMQSxXQUFLLEVBQUU7QUFERixLQUFQO0FBSUQ7QUFDRixDQWpCTTtBQW9CQSxNQUFNTSxlQUFlLEdBQUcsTUFBT0MsR0FBUCxJQUFpRjtBQUM5RyxNQUFJO0FBQ0Y7QUFDQSxVQUFNWixHQUFHLEdBQUcsTUFBTVAsc0RBQUEsQ0FBVyxzQkFBcUJtQixHQUFJLEVBQXBDLENBQWxCO0FBQ0EsUUFBSUwsS0FBSyxHQUFHUCxHQUFHLENBQUNDLElBQUosQ0FBU1ksU0FBckIsQ0FIRSxDQUtGOztBQUNBLFFBQUcsQ0FBQ04sS0FBSixFQUFXLE1BQU0sSUFBSUosS0FBSixFQUFOLENBTlQsQ0FRRjs7QUFDQUksU0FBSyxHQUFHQSxLQUFLLENBQUNPLE1BQU4sQ0FBYUQsU0FBUyxJQUFJQSxTQUFTLEtBQUssSUFBeEMsQ0FBUixDQVRFLENBV0Y7O0FBQ0EsV0FBTztBQUNMTixXQURLO0FBRUxGLFdBQUssRUFBQztBQUZELEtBQVA7QUFJRCxHQWhCRCxDQWdCRSxPQUFPQSxLQUFQLEVBQWM7QUFDZDtBQUNBLFdBQU87QUFDTEEsV0FBSyxFQUFFO0FBREYsS0FBUDtBQUlEO0FBQ0YsQ0F4Qk0sQzs7Ozs7Ozs7OztBQ2hFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEEsZSIsImZpbGUiOiJzcmNfY2xhc3Nlc19DcmVkaXRDYXJkX3RzLXNyY19jb21wb25lbnRzX1VpX0J1dHRvbnNfQnV0dG9uV2hpdGVfdHN4LXNyY19ob2NfQ29udGFpbmVyX0NvbnRhaW4tNmNhZGNmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGludGVyZmFjZSBDYXJkIHtcclxuICBfaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgc2hvdzogYm9vbGVhbjtcclxuICByZXF1aXJlbWVudHM6IHN0cmluZ1tdO1xyXG4gIHJhdGluZzogc3RyaW5nO1xyXG4gIHByb3BlcnRpZXM6IHtfaWQ/OiBudW1iZXIsIHByb3BlcnRpZTogc3RyaW5nLCB0eXBlOiBzdHJpbmd9W107XHJcbiAgc3BlY2lmaWNzOiB7X2lkPzogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd9W107XHJcbiAgaW1nOiBzdHJpbmc7XHJcbiAgaW5zdXJhbmNlczoge19pZD86IG51bWJlciwgdGV4dDogc3RyaW5nLCB0eXBlOiBzdHJpbmcgfVtdO1xyXG4gIGJvbnVzdGV4dDogc3RyaW5nO1xyXG4gIGNyZWRpdFRleHQ6IHN0cmluZztcclxuICBpbnN1cmFuY2VUZXh0OiBzdHJpbmc7XHJcbiAgZmFjdHM6IHtfaWQ/OiBudW1iZXIsIHRleHQ6IHN0cmluZywgdmFsdWU6IHN0cmluZ31bXTtcclxuICBvcmRlcjogbnVtYmVyO1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uIDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ3JlZGl0Q2FyZCB7XHJcbiAgY29uc3RydWN0b3IgKHB1YmxpYyBwcm9wZXJ0aWVzIDogQ2FyZCkgeyB9XHJcblxyXG4gIGFkZFRvQ29tcGFyZSAoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgY2hlY2tJZkNhcmRDb21wYXJlICgpIHtcclxuICAgIFxyXG4gIH1cclxufSIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b25zLm1vZHVsZS5jc3MnO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBocmVmPzogc3RyaW5nO1xyXG4gIG9uQ2xpY2s/IDogKCkgPT4gdm9pZDtcclxuICBjbGFzc05hbWU/IDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBCdXR0b25XaGl0ZSA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICByZXR1cm4gPExpbmsgaHJlZj17cHJvcHMuaHJlZiA/IHByb3BzLmhyZWYgOiAnIyd9PlxyXG4gICAgPGEgaWQ9e3N0eWxlcy5CdXR0b25XaGl0ZX0gb25DbGljaz17cHJvcHMub25DbGlja30gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9PlxyXG4gICAgICAgIHtwcm9wcy50ZXh0fVxyXG4gICAgPC9hPlxyXG4gIDwvTGluaz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uV2hpdGU7IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IGluc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIGJhc2VVUkw6ICdodHRwczovL2tyZWRpdGtvcnRza29sbGFwaS5ldy5yLmFwcHNwb3QuY29tLycsXHJcblxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29udGFpbmVyLm1vZHVsZS5jc3MnXHJcblxyXG5cclxuY29uc3QgQ29udGFpbmVyIDogUmVhY3QuRkMgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGlkPXtzdHlsZXMuQ29udGFpbmVyfT5cclxuICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnLi4vY29uZmlnL2F4aW9zJztcclxuaW1wb3J0IHsgQ2FyZCBhcyBDcmVkaXRDYXJkSW50ZXJmYWNlIH0gZnJvbSAnLi4vY2xhc3Nlcy9DcmVkaXRDYXJkJztcclxuaW1wb3J0IHsgQmVzdENhcmQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0Jlc3RDYXJkJztcclxuaW1wb3J0IHsgQ29tcGFyZUNhcmRzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9Db21wYXJlQ2FyZHMnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRCZXN0Q2FyZCA9IGFzeW5jICgpIDogUHJvbWlzZTx7YmVzdGNhcmQ/OiBCZXN0Q2FyZCwgZXJyb3I/OiBib29sZWFufT4gPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ05vdCBzdGF0aWMnKVxyXG4gIHRyeSB7XHJcbiAgICAvLyBGZXRjaCBiZXN0Y2FyZCBmcm9tIHNlcnZlclxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvYmVzdGNhcmQnKTtcclxuXHJcbiAgICBpZighcmVzLmRhdGEuYmVzdENhcmRbMF0pIHRocm93IG5ldyBFcnJvcigpO1xyXG5cclxuICAgIGNvbnN0IGJlc3RjYXJkID0gcmVzLmRhdGEuYmVzdENhcmRbMF0gYXMgQmVzdENhcmRcclxuICBcclxuICAgIC8vIFJldHVybiBiZXN0Y2FyZFxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYmVzdGNhcmRcclxuICAgIH07ICAgIFxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjp0cnVlXHJcbiAgICB9O1xyXG59XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDYXJkcyA9IGFzeW5jICgpIDogUHJvbWlzZTx7Y2FyZHM/IDogQ3JlZGl0Q2FyZEludGVyZmFjZVtdLCBlcnJvcj8gOiBib29sZWFufT4gPT4ge1xyXG4gIC8vIEZldGNoIGNhcmRzIGZyb20gc2VydmVyXHJcbiAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCcvY2FyZHMnKTtcclxuICAgICAgY29uc3QgY2FyZHMgPSByZXMuZGF0YS5jYXJkcyBhcyBDcmVkaXRDYXJkSW50ZXJmYWNlW107ICAgIFxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBjYXJkcyxcclxuICAgICAgICBlcnJvcjpmYWxzZVxyXG4gICAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yOnRydWVcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDYXJkID0gYXN5bmMgKG5hbWUgOiBzdHJpbmcpIDogUHJvbWlzZTx7Y2FyZD8gOiBDcmVkaXRDYXJkSW50ZXJmYWNlLCBlcnJvcj8gOiBib29sZWFufT4gPT4ge1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAvY2FyZC8ke25hbWV9YCk7XHJcbiAgICBjb25zdCBjYXJkID0gcmVzLmRhdGEgYXMgQ3JlZGl0Q2FyZEludGVyZmFjZTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjYXJkLFxyXG4gICAgICBlcnJvcjpmYWxzZVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3I6IHRydWVcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbXBhcmVDYXJkcyA9IGFzeW5jIChpZHMgOiBzdHJpbmdbXSkgOiBQcm9taXNlPHtjYXJkcz8gOiBDb21wYXJlQ2FyZHNbXSwgZXJyb3I/IDogYm9vbGVhbn0+ID0+IHsgXHJcbiAgdHJ5IHtcclxuICAgIC8vIEZldGNoaW5nIGNhcmRzXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYC9jYXJkcy9jb21wYXJlP2lkcz0ke2lkc31gKTtcclxuICAgIGxldCBjYXJkcyA9IHJlcy5kYXRhLmNhcmRzSW5mbyBhcyBDb21wYXJlQ2FyZHNbXTtcclxuXHJcbiAgICAvLyBDaGVjayBmb3IgY2FyZHNcclxuICAgIGlmKCFjYXJkcykgdGhyb3cgbmV3IEVycm9yKCk7XHJcblxyXG4gICAgLy8gRmlsdGVyIHVuZGVmaW5lZCBjYXJkc1xyXG4gICAgY2FyZHMgPSBjYXJkcy5maWx0ZXIoY2FyZHNJbmZvID0+IGNhcmRzSW5mbyAhPT0gbnVsbCk7XHJcblxyXG4gICAgLy8gUmV0dXJuIGNhcmRzXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjYXJkcyxcclxuICAgICAgZXJyb3I6ZmFsc2VcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gRXJyb3IsIHJldHVyblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3I6IHRydWVcclxuICAgIH1cclxuXHJcbiAgfVxyXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQnV0dG9uV2hpdGVcIjogXCJCdXR0b25zX0J1dHRvbldoaXRlX18yRE9neVwiLFxuXHRcIkJ1dHRvbk9yYW5nZVwiOiBcIkJ1dHRvbnNfQnV0dG9uT3JhbmdlX196T2VsS1wiLFxuXHRcImJ1dHRvbkhvdmVyXCI6IFwiQnV0dG9uc19idXR0b25Ib3Zlcl9fTGRzS0RcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkNvbnRhaW5lclwiOiBcIkNvbnRhaW5lcl9Db250YWluZXJfXzJGaVBUXCJcbn07XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9