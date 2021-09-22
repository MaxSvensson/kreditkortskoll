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
var _jsxFileName = "D:\\Kreditkortskoll\\Client\\src\\hoc\\Container\\Container.tsx";
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
	"outlinedWhite": "Buttons_outlinedWhite__3SYep",
	"fullWhite": "Buttons_fullWhite__3R_A7",
	"ButtonOrange": "Buttons_ButtonOrange__zOelK",
	"outlinedBlue": "Buttons_outlinedBlue__2d32b",
	"fullBlue": "Buttons_fullBlue__1YwNn",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY2xhc3Nlcy9DcmVkaXRDYXJkLnRzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL0J1dHRvbnMvQnV0dG9uV2hpdGUudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb25maWcvYXhpb3MudHMiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2hvYy9Db250YWluZXIvQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvcmVzb3VyY2VzL0NhcmRzLnRzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL0J1dHRvbnMvQnV0dG9ucy5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9ob2MvQ29udGFpbmVyL0NvbnRhaW5lci5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9pZ25vcmVkfEQ6XFxLcmVkaXRrb3J0c2tvbGxcXENsaWVudFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkNyZWRpdENhcmQiLCJjb25zdHJ1Y3RvciIsInByb3BlcnRpZXMiLCJhZGRUb0NvbXBhcmUiLCJjaGVja0lmQ2FyZENvbXBhcmUiLCJCdXR0b25XaGl0ZSIsInByb3BzIiwiaHJlZiIsInN0eWxlcyIsImNsYXNzTmFtZSIsInR5cGUiLCJvbkNsaWNrIiwidGV4dCIsImluc3RhbmNlIiwiYXhpb3MiLCJiYXNlVVJMIiwiQ29udGFpbmVyIiwiY2hpbGRyZW4iLCJnZXRCZXN0Q2FyZCIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJkYXRhIiwiYmVzdENhcmQiLCJFcnJvciIsImJlc3RjYXJkIiwiZXJyb3IiLCJnZXRDYXJkcyIsImNhcmRzIiwiZ2V0Q2FyZCIsIm5hbWUiLCJjYXJkIiwiZ2V0Q29tcGFyZUNhcmRzIiwiaWRzIiwiY2FyZHNJbmZvIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFtQk8sTUFBTUEsVUFBTixDQUFpQjtBQUN0QkMsYUFBVyxDQUFTQyxVQUFULEVBQTRCO0FBQUEsU0FBbkJBLFVBQW1CLEdBQW5CQSxVQUFtQjtBQUFHOztBQUUxQ0MsY0FBWSxHQUFJLENBRWY7O0FBRURDLG9CQUFrQixHQUFJLENBRXJCOztBQVRxQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnhCO0FBRUE7O0FBV0EsTUFBTUMsV0FBNEMsR0FBSUMsS0FBRCxJQUFXO0FBQzdELFNBQU8sTUFBQyxrREFBRDtBQUFNLFFBQUksRUFBRUEsS0FBSyxDQUFDQyxJQUFOLEdBQWFELEtBQUssQ0FBQ0MsSUFBbkIsR0FBMEIsR0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNOO0FBQUcsYUFBUyxFQUFHLEdBQUVDLHdFQUFtQixJQUFHRixLQUFLLENBQUNHLFNBQVUsSUFBR0gsS0FBSyxDQUFDSSxJQUFOLEtBQWUsU0FBZixHQUEyQkYsMEVBQTNCLEdBQWtERixLQUFLLENBQUNJLElBQU4sS0FBZSxNQUFmLEdBQXdCRixzRUFBeEIsR0FBMkMsSUFBSyxFQUE1SjtBQUErSixXQUFPLEVBQUVGLEtBQUssQ0FBQ0ssT0FBOUs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLTCxLQUFLLENBQUNNLElBRFgsQ0FETSxDQUFQO0FBS0YsQ0FORDs7QUFRQSwrREFBZVAsV0FBZixFOzs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUVBLE1BQU1RLFFBQVEsR0FBR0MsbURBQUEsQ0FBYTtBQUMxQkMsU0FBTyxFQUFFO0FBRGlCLENBQWIsQ0FBakI7QUFNQSwrREFBZUYsUUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBOztBQUdBLE1BQU1HLFNBQW9CLEdBQUlWLEtBQUQsSUFBVztBQUNwQyxTQUFPO0FBQUssTUFBRSxFQUFFRSx3RUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0FGLEtBQUssQ0FBQ1csUUFETixDQUFQO0FBR0gsQ0FKRDs7QUFNQSwrREFBZUQsU0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFNTyxNQUFNRSxXQUFXLEdBQUcsWUFBOEQ7QUFDckZDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7O0FBQ0YsTUFBSTtBQUNGO0FBQ0EsVUFBTUMsR0FBRyxHQUFHLE1BQU1QLHNEQUFBLENBQVUsV0FBVixDQUFsQjtBQUVBLFFBQUcsQ0FBQ08sR0FBRyxDQUFDQyxJQUFKLENBQVNDLFFBQVQsQ0FBa0IsQ0FBbEIsQ0FBSixFQUEwQixNQUFNLElBQUlDLEtBQUosRUFBTjtBQUUxQixVQUFNQyxRQUFRLEdBQUdKLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxRQUFULENBQWtCLENBQWxCLENBQWpCLENBTkUsQ0FRRjs7QUFDQSxXQUFPO0FBQ0xFO0FBREssS0FBUDtBQUdELEdBWkQsQ0FZRSxPQUFPQyxLQUFQLEVBQWM7QUFDZCxXQUFPO0FBQ0xBLFdBQUssRUFBQztBQURELEtBQVA7QUFHSDtBQUNBLENBbkJNO0FBcUJBLE1BQU1DLFFBQVEsR0FBRyxZQUEwRTtBQUNoRztBQUNBLE1BQUk7QUFDQSxVQUFNTixHQUFHLEdBQUcsTUFBTVAsc0RBQUEsQ0FBVSxRQUFWLENBQWxCO0FBQ0EsVUFBTWMsS0FBSyxHQUFHUCxHQUFHLENBQUNDLElBQUosQ0FBU00sS0FBdkI7QUFFQSxXQUFPO0FBQ0xBLFdBREs7QUFFTEYsV0FBSyxFQUFDO0FBRkQsS0FBUDtBQUlILEdBUkQsQ0FRRSxPQUFPQSxLQUFQLEVBQWM7QUFDZCxXQUFPO0FBQ0xBLFdBQUssRUFBQztBQURELEtBQVA7QUFHRDtBQUNGLENBZk07QUFpQkEsTUFBTUcsT0FBTyxHQUFHLE1BQU9DLElBQVAsSUFBb0Y7QUFFekcsTUFBSTtBQUNGLFVBQU1ULEdBQUcsR0FBRyxNQUFNUCxzREFBQSxDQUFXLFNBQVFnQixJQUFLLEVBQXhCLENBQWxCO0FBQ0EsVUFBTUMsSUFBSSxHQUFHVixHQUFHLENBQUNDLElBQWpCO0FBRUEsV0FBTztBQUNMUyxVQURLO0FBRUxMLFdBQUssRUFBQztBQUZELEtBQVA7QUFJRCxHQVJELENBUUUsT0FBT0EsS0FBUCxFQUFjO0FBRWQsV0FBTztBQUNMQSxXQUFLLEVBQUU7QUFERixLQUFQO0FBSUQ7QUFDRixDQWpCTTtBQW9CQSxNQUFNTSxlQUFlLEdBQUcsTUFBT0MsR0FBUCxJQUFpRjtBQUM5RyxNQUFJO0FBQ0Y7QUFDQSxVQUFNWixHQUFHLEdBQUcsTUFBTVAsc0RBQUEsQ0FBVyxzQkFBcUJtQixHQUFJLEVBQXBDLENBQWxCO0FBQ0EsUUFBSUwsS0FBSyxHQUFHUCxHQUFHLENBQUNDLElBQUosQ0FBU1ksU0FBckIsQ0FIRSxDQUtGOztBQUNBLFFBQUcsQ0FBQ04sS0FBSixFQUFXLE1BQU0sSUFBSUosS0FBSixFQUFOLENBTlQsQ0FRRjs7QUFDQUksU0FBSyxHQUFHQSxLQUFLLENBQUNPLE1BQU4sQ0FBYUQsU0FBUyxJQUFJQSxTQUFTLEtBQUssSUFBeEMsQ0FBUixDQVRFLENBV0Y7O0FBQ0EsV0FBTztBQUNMTixXQURLO0FBRUxGLFdBQUssRUFBQztBQUZELEtBQVA7QUFJRCxHQWhCRCxDQWdCRSxPQUFPQSxLQUFQLEVBQWM7QUFDZDtBQUNBLFdBQU87QUFDTEEsV0FBSyxFQUFFO0FBREYsS0FBUDtBQUlEO0FBQ0YsQ0F4Qk0sQzs7Ozs7Ozs7OztBQ2hFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQSxlIiwiZmlsZSI6InNyY19jbGFzc2VzX0NyZWRpdENhcmRfdHMtc3JjX2NvbXBvbmVudHNfVWlfQnV0dG9uc19CdXR0b25XaGl0ZV90c3gtc3JjX2hvY19Db250YWluZXJfQ29udGFpbi02Y2FkY2YuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIENhcmQge1xyXG4gIF9pZDogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBzaG93OiBib29sZWFuO1xyXG4gIHJlcXVpcmVtZW50czogc3RyaW5nW107XHJcbiAgcmF0aW5nOiBzdHJpbmc7XHJcbiAgcHJvcGVydGllczoge19pZD86IG51bWJlciwgcHJvcGVydGllOiBzdHJpbmcsIHR5cGU6IHN0cmluZ31bXTtcclxuICBzcGVjaWZpY3M6IHtfaWQ/OiBudW1iZXIsIHRleHQ6IHN0cmluZywgdmFsdWU6IHN0cmluZ31bXTtcclxuICBpbWc6IHN0cmluZztcclxuICBpbnN1cmFuY2VzOiB7X2lkPzogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIHR5cGU6IHN0cmluZyB9W107XHJcbiAgYm9udXN0ZXh0OiBzdHJpbmc7XHJcbiAgY3JlZGl0VGV4dDogc3RyaW5nO1xyXG4gIGluc3VyYW5jZVRleHQ6IHN0cmluZztcclxuICBmYWN0czoge19pZD86IG51bWJlciwgdGV4dDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfVtdO1xyXG4gIG9yZGVyOiBudW1iZXI7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb24gOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVkaXRDYXJkIHtcclxuICBjb25zdHJ1Y3RvciAocHVibGljIHByb3BlcnRpZXMgOiBDYXJkKSB7IH1cclxuXHJcbiAgYWRkVG9Db21wYXJlICgpIHtcclxuXHJcbiAgfVxyXG5cclxuICBjaGVja0lmQ2FyZENvbXBhcmUgKCkge1xyXG4gICAgXHJcbiAgfVxyXG59IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbnMubW9kdWxlLmNzcyc7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGhyZWY/OiBzdHJpbmc7XHJcbiAgb25DbGljaz8gOiAoKSA9PiB2b2lkO1xyXG4gIGNsYXNzTmFtZT8gOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbldoaXRlIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgIHJldHVybiA8TGluayBocmVmPXtwcm9wcy5ocmVmID8gcHJvcHMuaHJlZiA6ICcjJ30+XHJcbiAgICA8YSBjbGFzc05hbWU9e2Ake3N0eWxlcy5CdXR0b25XaGl0ZX0gJHtwcm9wcy5jbGFzc05hbWV9ICR7cHJvcHMudHlwZSA9PT0gXCJvdXRsaW5lXCIgPyBzdHlsZXMub3V0bGluZWRXaGl0ZSA6IHByb3BzLnR5cGUgPT09IFwiZnVsbFwiID8gc3R5bGVzLmZ1bGxXaGl0ZSA6IG51bGx9YH0gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAge3Byb3BzLnRleHR9XHJcbiAgICA8L2E+XHJcbiAgPC9MaW5rPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25XaGl0ZTsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogJ2h0dHBzOi8va3JlZGl0a29ydHNrb2xsYXBpLmV3LnIuYXBwc3BvdC5jb20vJyxcclxuXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250YWluZXIubW9kdWxlLmNzcydcclxuXHJcblxyXG5jb25zdCBDb250YWluZXIgOiBSZWFjdC5GQyA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5Db250YWluZXJ9PlxyXG4gICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyOyIsImltcG9ydCBheGlvcyBmcm9tICcuLi9jb25maWcvYXhpb3MnO1xyXG5pbXBvcnQgeyBDYXJkIGFzIENyZWRpdENhcmRJbnRlcmZhY2UgfSBmcm9tICcuLi9jbGFzc2VzL0NyZWRpdENhcmQnO1xyXG5pbXBvcnQgeyBCZXN0Q2FyZCB9IGZyb20gJy4uL2ludGVyZmFjZXMvQmVzdENhcmQnO1xyXG5pbXBvcnQgeyBDb21wYXJlQ2FyZHMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0NvbXBhcmVDYXJkcyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEJlc3RDYXJkID0gYXN5bmMgKCkgOiBQcm9taXNlPHtiZXN0Y2FyZD86IEJlc3RDYXJkLCBlcnJvcj86IGJvb2xlYW59PiA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnTm90IHN0YXRpYycpXHJcbiAgdHJ5IHtcclxuICAgIC8vIEZldGNoIGJlc3RjYXJkIGZyb20gc2VydmVyXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9iZXN0Y2FyZCcpO1xyXG5cclxuICAgIGlmKCFyZXMuZGF0YS5iZXN0Q2FyZFswXSkgdGhyb3cgbmV3IEVycm9yKCk7XHJcblxyXG4gICAgY29uc3QgYmVzdGNhcmQgPSByZXMuZGF0YS5iZXN0Q2FyZFswXSBhcyBCZXN0Q2FyZFxyXG4gIFxyXG4gICAgLy8gUmV0dXJuIGJlc3RjYXJkXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiZXN0Y2FyZFxyXG4gICAgfTsgICAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yOnRydWVcclxuICAgIH07XHJcbn1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENhcmRzID0gYXN5bmMgKCkgOiBQcm9taXNlPHtjYXJkcz8gOiBDcmVkaXRDYXJkSW50ZXJmYWNlW10sIGVycm9yPyA6IGJvb2xlYW59PiA9PiB7XHJcbiAgLy8gRmV0Y2ggY2FyZHMgZnJvbSBzZXJ2ZXJcclxuICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9jYXJkcycpO1xyXG4gICAgICBjb25zdCBjYXJkcyA9IHJlcy5kYXRhLmNhcmRzIGFzIENyZWRpdENhcmRJbnRlcmZhY2VbXTsgICAgXHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNhcmRzLFxyXG4gICAgICAgIGVycm9yOmZhbHNlXHJcbiAgICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3I6dHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENhcmQgPSBhc3luYyAobmFtZSA6IHN0cmluZykgOiBQcm9taXNlPHtjYXJkPyA6IENyZWRpdENhcmRJbnRlcmZhY2UsIGVycm9yPyA6IGJvb2xlYW59PiA9PiB7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYC9jYXJkLyR7bmFtZX1gKTtcclxuICAgIGNvbnN0IGNhcmQgPSByZXMuZGF0YSBhcyBDcmVkaXRDYXJkSW50ZXJmYWNlO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNhcmQsXHJcbiAgICAgIGVycm9yOmZhbHNlXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjogdHJ1ZVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29tcGFyZUNhcmRzID0gYXN5bmMgKGlkcyA6IHN0cmluZ1tdKSA6IFByb21pc2U8e2NhcmRzPyA6IENvbXBhcmVDYXJkc1tdLCBlcnJvcj8gOiBib29sZWFufT4gPT4geyBcclxuICB0cnkge1xyXG4gICAgLy8gRmV0Y2hpbmcgY2FyZHNcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgL2NhcmRzL2NvbXBhcmU/aWRzPSR7aWRzfWApO1xyXG4gICAgbGV0IGNhcmRzID0gcmVzLmRhdGEuY2FyZHNJbmZvIGFzIENvbXBhcmVDYXJkc1tdO1xyXG5cclxuICAgIC8vIENoZWNrIGZvciBjYXJkc1xyXG4gICAgaWYoIWNhcmRzKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgdW5kZWZpbmVkIGNhcmRzXHJcbiAgICBjYXJkcyA9IGNhcmRzLmZpbHRlcihjYXJkc0luZm8gPT4gY2FyZHNJbmZvICE9PSBudWxsKTtcclxuXHJcbiAgICAvLyBSZXR1cm4gY2FyZHNcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNhcmRzLFxyXG4gICAgICBlcnJvcjpmYWxzZVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyBFcnJvciwgcmV0dXJuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjogdHJ1ZVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJCdXR0b25XaGl0ZVwiOiBcIkJ1dHRvbnNfQnV0dG9uV2hpdGVfXzJET2d5XCIsXG5cdFwib3V0bGluZWRXaGl0ZVwiOiBcIkJ1dHRvbnNfb3V0bGluZWRXaGl0ZV9fM1NZZXBcIixcblx0XCJmdWxsV2hpdGVcIjogXCJCdXR0b25zX2Z1bGxXaGl0ZV9fM1JfQTdcIixcblx0XCJCdXR0b25PcmFuZ2VcIjogXCJCdXR0b25zX0J1dHRvbk9yYW5nZV9fek9lbEtcIixcblx0XCJvdXRsaW5lZEJsdWVcIjogXCJCdXR0b25zX291dGxpbmVkQmx1ZV9fMmQzMmJcIixcblx0XCJmdWxsQmx1ZVwiOiBcIkJ1dHRvbnNfZnVsbEJsdWVfXzFZd05uXCIsXG5cdFwiYnV0dG9uSG92ZXJcIjogXCJCdXR0b25zX2J1dHRvbkhvdmVyX19MZHNLRFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQ29udGFpbmVyXCI6IFwiQ29udGFpbmVyX0NvbnRhaW5lcl9fMkZpUFRcIlxufTtcbiIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=