exports.id = "src_classes_CreditCard_ts-src_components_Ui_Buttons_ButtonWhite_tsx-src_resources_Cards_ts";
exports.ids = ["src_classes_CreditCard_ts-src_components_Ui_Buttons_ButtonWhite_tsx-src_resources_Cards_ts"];
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
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\Ui\\Buttons\\ButtonWhite.tsx";

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


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY2xhc3Nlcy9DcmVkaXRDYXJkLnRzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL0J1dHRvbnMvQnV0dG9uV2hpdGUudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9yZXNvdXJjZXMvQ2FyZHMudHMiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvQnV0dG9ucy9CdXR0b25zLm1vZHVsZS5jc3MiXSwibmFtZXMiOlsiQ3JlZGl0Q2FyZCIsImNvbnN0cnVjdG9yIiwicHJvcGVydGllcyIsImFkZFRvQ29tcGFyZSIsImNoZWNrSWZDYXJkQ29tcGFyZSIsIkJ1dHRvbldoaXRlIiwicHJvcHMiLCJocmVmIiwic3R5bGVzIiwiY2xhc3NOYW1lIiwidHlwZSIsIm9uQ2xpY2siLCJ0ZXh0IiwiZ2V0QmVzdENhcmQiLCJjb25zb2xlIiwibG9nIiwicmVzIiwiYXhpb3MiLCJkYXRhIiwiYmVzdENhcmQiLCJFcnJvciIsImJlc3RjYXJkIiwiZXJyb3IiLCJnZXRDYXJkcyIsImNhcmRzIiwiZ2V0Q2FyZCIsIm5hbWUiLCJjYXJkIiwiZ2V0Q29tcGFyZUNhcmRzIiwiaWRzIiwiY2FyZHNJbmZvIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFtQk8sTUFBTUEsVUFBTixDQUFpQjtBQUN0QkMsYUFBVyxDQUFTQyxVQUFULEVBQTRCO0FBQUEsU0FBbkJBLFVBQW1CLEdBQW5CQSxVQUFtQjtBQUFHOztBQUUxQ0MsY0FBWSxHQUFJLENBRWY7O0FBRURDLG9CQUFrQixHQUFJLENBRXJCOztBQVRxQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQnhCO0FBRUE7O0FBV0EsTUFBTUMsV0FBNEMsR0FBSUMsS0FBRCxJQUFXO0FBQzdELFNBQU8sTUFBQyxrREFBRDtBQUFNLFFBQUksRUFBRUEsS0FBSyxD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RixDQXhCTSxDOzs7Ozs7Ozs7O0FDaEVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNyY19jbGFzc2VzX0NyZWRpdENhcmRfdHMtc3JjX2NvbXBvbmVudHNfVWlfQnV0dG9uc19CdXR0b25XaGl0ZV90c3gtc3JjX3Jlc291cmNlc19DYXJkc190cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQ2FyZCB7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHNob3c6IGJvb2xlYW47XHJcbiAgcmVxdWlyZW1lbnRzOiBzdHJpbmdbXTtcclxuICByYXRpbmc6IHN0cmluZztcclxuICBwcm9wZXJ0aWVzOiB7X2lkPzogbnVtYmVyLCBwcm9wZXJ0aWU6IHN0cmluZywgdHlwZTogc3RyaW5nfVtdO1xyXG4gIHNwZWNpZmljczoge19pZD86IG51bWJlciwgdGV4dDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfVtdO1xyXG4gIGltZzogc3RyaW5nO1xyXG4gIGluc3VyYW5jZXM6IHtfaWQ/OiBudW1iZXIsIHRleHQ6IHN0cmluZywgdHlwZTogc3RyaW5nIH1bXTtcclxuICBib251c3RleHQ6IHN0cmluZztcclxuICBjcmVkaXRUZXh0OiBzdHJpbmc7XHJcbiAgaW5zdXJhbmNlVGV4dDogc3RyaW5nO1xyXG4gIGZhY3RzOiB7X2lkPzogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd9W107XHJcbiAgb3JkZXI6IG51bWJlcjtcclxuICB1cmw6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbiA6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENyZWRpdENhcmQge1xyXG4gIGNvbnN0cnVjdG9yIChwdWJsaWMgcHJvcGVydGllcyA6IENhcmQpIHsgfVxyXG5cclxuICBhZGRUb0NvbXBhcmUgKCkge1xyXG5cclxuICB9XHJcblxyXG4gIGNoZWNrSWZDYXJkQ29tcGFyZSAoKSB7XHJcbiAgICBcclxuICB9XHJcbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vQnV0dG9ucy5tb2R1bGUuY3NzJztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgaHJlZj86IHN0cmluZztcclxuICBvbkNsaWNrPyA6ICgpID0+IHZvaWQ7XHJcbiAgY2xhc3NOYW1lPyA6IHN0cmluZztcclxuICB0eXBlOiBzdHJpbmdcclxufVxyXG5cclxuY29uc3QgQnV0dG9uV2hpdGUgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgcmV0dXJuIDxMaW5rIGhyZWY9e3Byb3BzLmhyZWYgPyBwcm9wcy5ocmVmIDogJyMnfT5cclxuICAgIDxhIGNsYXNzTmFtZT17YCR7c3R5bGVzLkJ1dHRvbldoaXRlfSAke3Byb3BzLmNsYXNzTmFtZX0gJHtwcm9wcy50eXBlID09PSBcIm91dGxpbmVcIiA/IHN0eWxlcy5vdXRsaW5lZFdoaXRlIDogcHJvcHMudHlwZSA9PT0gXCJmdWxsXCIgPyBzdHlsZXMuZnVsbFdoaXRlIDogbnVsbH1gfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICB7cHJvcHMudGV4dH1cclxuICAgIDwvYT5cclxuICA8L0xpbms+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbldoaXRlOyIsImltcG9ydCBheGlvcyBmcm9tICcuLi9jb25maWcvYXhpb3MnO1xyXG5pbXBvcnQgeyBDYXJkIGFzIENyZWRpdENhcmRJbnRlcmZhY2UgfSBmcm9tICcuLi9jbGFzc2VzL0NyZWRpdENhcmQnO1xyXG5pbXBvcnQgeyBCZXN0Q2FyZCB9IGZyb20gJy4uL2ludGVyZmFjZXMvQmVzdENhcmQnO1xyXG5pbXBvcnQgeyBDb21wYXJlQ2FyZHMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0NvbXBhcmVDYXJkcyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEJlc3RDYXJkID0gYXN5bmMgKCkgOiBQcm9taXNlPHtiZXN0Y2FyZD86IEJlc3RDYXJkLCBlcnJvcj86IGJvb2xlYW59PiA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnTm90IHN0YXRpYycpXHJcbiAgdHJ5IHtcclxuICAgIC8vIEZldGNoIGJlc3RjYXJkIGZyb20gc2VydmVyXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9iZXN0Y2FyZCcpO1xyXG5cclxuICAgIGlmKCFyZXMuZGF0YS5iZXN0Q2FyZFswXSkgdGhyb3cgbmV3IEVycm9yKCk7XHJcblxyXG4gICAgY29uc3QgYmVzdGNhcmQgPSByZXMuZGF0YS5iZXN0Q2FyZFswXSBhcyBCZXN0Q2FyZFxyXG4gIFxyXG4gICAgLy8gUmV0dXJuIGJlc3RjYXJkXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiZXN0Y2FyZFxyXG4gICAgfTsgICAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yOnRydWVcclxuICAgIH07XHJcbn1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENhcmRzID0gYXN5bmMgKCkgOiBQcm9taXNlPHtjYXJkcz8gOiBDcmVkaXRDYXJkSW50ZXJmYWNlW10sIGVycm9yPyA6IGJvb2xlYW59PiA9PiB7XHJcbiAgLy8gRmV0Y2ggY2FyZHMgZnJvbSBzZXJ2ZXJcclxuICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9jYXJkcycpO1xyXG4gICAgICBjb25zdCBjYXJkcyA9IHJlcy5kYXRhLmNhcmRzIGFzIENyZWRpdENhcmRJbnRlcmZhY2VbXTsgICAgXHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNhcmRzLFxyXG4gICAgICAgIGVycm9yOmZhbHNlXHJcbiAgICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3I6dHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENhcmQgPSBhc3luYyAobmFtZSA6IHN0cmluZykgOiBQcm9taXNlPHtjYXJkPyA6IENyZWRpdENhcmRJbnRlcmZhY2UsIGVycm9yPyA6IGJvb2xlYW59PiA9PiB7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYC9jYXJkLyR7bmFtZX1gKTtcclxuICAgIGNvbnN0IGNhcmQgPSByZXMuZGF0YSBhcyBDcmVkaXRDYXJkSW50ZXJmYWNlO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNhcmQsXHJcbiAgICAgIGVycm9yOmZhbHNlXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjogdHJ1ZVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29tcGFyZUNhcmRzID0gYXN5bmMgKGlkcyA6IHN0cmluZ1tdKSA6IFByb21pc2U8e2NhcmRzPyA6IENvbXBhcmVDYXJkc1tdLCBlcnJvcj8gOiBib29sZWFufT4gPT4geyBcclxuICB0cnkge1xyXG4gICAgLy8gRmV0Y2hpbmcgY2FyZHNcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgL2NhcmRzL2NvbXBhcmU/aWRzPSR7aWRzfWApO1xyXG4gICAgbGV0IGNhcmRzID0gcmVzLmRhdGEuY2FyZHNJbmZvIGFzIENvbXBhcmVDYXJkc1tdO1xyXG5cclxuICAgIC8vIENoZWNrIGZvciBjYXJkc1xyXG4gICAgaWYoIWNhcmRzKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgdW5kZWZpbmVkIGNhcmRzXHJcbiAgICBjYXJkcyA9IGNhcmRzLmZpbHRlcihjYXJkc0luZm8gPT4gY2FyZHNJbmZvICE9PSBudWxsKTtcclxuXHJcbiAgICAvLyBSZXR1cm4gY2FyZHNcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNhcmRzLFxyXG4gICAgICBlcnJvcjpmYWxzZVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyBFcnJvciwgcmV0dXJuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjogdHJ1ZVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJCdXR0b25XaGl0ZVwiOiBcIkJ1dHRvbnNfQnV0dG9uV2hpdGVfXzJET2d5XCIsXG5cdFwib3V0bGluZWRXaGl0ZVwiOiBcIkJ1dHRvbnNfb3V0bGluZWRXaGl0ZV9fM1NZZXBcIixcblx0XCJmdWxsV2hpdGVcIjogXCJCdXR0b25zX2Z1bGxXaGl0ZV9fM1JfQTdcIixcblx0XCJCdXR0b25PcmFuZ2VcIjogXCJCdXR0b25zX0J1dHRvbk9yYW5nZV9fek9lbEtcIixcblx0XCJvdXRsaW5lZEJsdWVcIjogXCJCdXR0b25zX291dGxpbmVkQmx1ZV9fMmQzMmJcIixcblx0XCJmdWxsQmx1ZVwiOiBcIkJ1dHRvbnNfZnVsbEJsdWVfXzFZd05uXCIsXG5cdFwiYnV0dG9uSG92ZXJcIjogXCJCdXR0b25zX2J1dHRvbkhvdmVyX19MZHNLRFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==