(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
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

/***/ "./src/classes/CreditCards.ts":
/*!************************************!*\
  !*** ./src/classes/CreditCards.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreditCards": function() { return /* binding */ CreditCards; }
/* harmony export */ });
class CreditCards {
  constructor(cards = []) {
    this.cards = cards;
  }

  getCards() {
    return this.cards;
  }

}

/***/ }),

/***/ "./src/components/Index/Header/BestCard/BestCard.tsx":
/*!***********************************************************!*\
  !*** ./src/components/Index/Header/BestCard/BestCard.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BestCard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BestCard.module.css */ "./src/components/Index/Header/BestCard/BestCard.module.css");
/* harmony import */ var _BestCard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_BestCard_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Ui_Buttons_ButtonWhite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Ui/Buttons/ButtonWhite */ "./src/components/Ui/Buttons/ButtonWhite.tsx");
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\components\\Index\\Header\\BestCard\\BestCard.tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
 // Components




const BestCard = ({
  bestcard
}) => {
  return __jsx("div", {
    id: (_BestCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().BestCard),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 10
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, "B\xE4sta kortet nu"), __jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
    src: bestcard.img,
    width: 250,
    height: 140,
    alt: "B\xE4sta kreditkortet just nu!",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, bestcard.description), __jsx(_Ui_Buttons_ButtonWhite__WEBPACK_IMPORTED_MODULE_2__.default, {
    text: "Ans\xF6k nu!",
    href: `/Redirect?card=${bestcard.name}`,
    className: (_BestCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BestCard);

/***/ }),

/***/ "./src/components/Index/Header/Header.tsx":
/*!************************************************!*\
  !*** ./src/components/Index/Header/Header.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header.module.css */ "./src/components/Index/Header/Header.module.css");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hoc_Container_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hoc/Container/Container */ "./src/hoc/Container/Container.tsx");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TextHeader_TextHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextHeader/TextHeader */ "./src/components/Index/Header/TextHeader/TextHeader.tsx");
/* harmony import */ var _BestCard_BestCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BestCard/BestCard */ "./src/components/Index/Header/BestCard/BestCard.tsx");
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\components\\Index\\Header\\Header.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


 // Components





const Header = ({
  bestcard
}) => {
  return __jsx("div", {
    id: (_Header_module_css__WEBPACK_IMPORTED_MODULE_5___default().Header),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 12
    }
  }, __jsx(_hoc_Container_Container__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Row, {
    justify: "center",
    align: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Col, {
    md: 12,
    lg: 7,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx(_TextHeader_TextHeader__WEBPACK_IMPORTED_MODULE_3__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  })), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Col, {
    md: 12,
    lg: 5,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx(_BestCard_BestCard__WEBPACK_IMPORTED_MODULE_4__.default, {
    bestcard: bestcard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Index/Header/TextHeader/TextHeader.tsx":
/*!***************************************************************!*\
  !*** ./src/components/Index/Header/TextHeader/TextHeader.tsx ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextHeader.module.css */ "./src/components/Index/Header/TextHeader/TextHeader.module.css");
/* harmony import */ var _TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\components\\Index\\Header\\TextHeader\\TextHeader.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const TextHeader = () => {
  return __jsx("div", {
    id: (_TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().TextHeader),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 12
    }
  }, __jsx("div", {
    id: (_TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().HeadingTitle),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "Vi hj\xE4lper dig att hitta det b\xE4sta kortet f\xF6r just dig...")), __jsx("div", {
    id: (_TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().HeadingDescription),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "suscipit quas saepe blanditiis, obcaecati eveniet ratione a modi consectetur sit eos eaque doloribus dolore?")));
};

/* harmony default export */ __webpack_exports__["default"] = (TextHeader);

/***/ }),

/***/ "./src/components/Index/TopCards/TopCards.tsx":
/*!****************************************************!*\
  !*** ./src/components/Index/TopCards/TopCards.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Ui_DisplayCards_DisplayCards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Ui/DisplayCards/DisplayCards */ "./src/components/Ui/DisplayCards/DisplayCards.tsx");
/* harmony import */ var _TopCards_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TopCards.module.css */ "./src/components/Index/TopCards/TopCards.module.css");
/* harmony import */ var _TopCards_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_TopCards_module_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\components\\Index\\TopCards\\TopCards.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




const TopCards = ({
  creditCards
}) => {
  const cards = creditCards.cards.splice(2, 5);
  return __jsx("div", {
    id: (_TopCards_module_css__WEBPACK_IMPORTED_MODULE_2___default().TopCards),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 12
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "V\xE5ra popul\xE4raste kreditkort"), __jsx(_Ui_DisplayCards_DisplayCards__WEBPACK_IMPORTED_MODULE_1__.default, {
    creditCards: cards,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TopCards);

/***/ }),

/***/ "./src/components/Index/UpdatedInforamtion/UpdatedInformation.tsx":
/*!************************************************************************!*\
  !*** ./src/components/Index/UpdatedInforamtion/UpdatedInformation.tsx ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UpdatedInformation_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UpdatedInformation.module.css */ "./src/components/Index/UpdatedInforamtion/UpdatedInformation.module.css");
/* harmony import */ var _UpdatedInformation_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_UpdatedInformation_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hoc_Container_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hoc/Container/Container */ "./src/hoc/Container/Container.tsx");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Ui_Buttons_ButtonWhite__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Ui/Buttons/ButtonWhite */ "./src/components/Ui/Buttons/ButtonWhite.tsx");
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\components\\Index\\UpdatedInforamtion\\UpdatedInformation.tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
 // Components






const UpdatedInformation = () => {
  return __jsx("div", {
    id: (_UpdatedInformation_module_css__WEBPACK_IMPORTED_MODULE_5___default().UpdatedInformation),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 10
    }
  }, __jsx(_hoc_Container_Container__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, __jsx("div", {
    id: (_UpdatedInformation_module_css__WEBPACK_IMPORTED_MODULE_5___default().content),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_3__.Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_3__.Col, {
    md: 12,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "Alltid updaterat"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos vero consectetur voluptatum cum? Labore suscipit nobis cupiditate maiores at deleniti nesciunt obcaecati repellendus minima qui, quidem exercitationem excepturi eligendi non!"), __jsx(_Ui_Buttons_ButtonWhite__WEBPACK_IMPORTED_MODULE_4__.default, {
    href: "/kort",
    text: "Utforska kort",
    className: (_UpdatedInformation_module_css__WEBPACK_IMPORTED_MODULE_5___default().btn),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  })), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_3__.Col, {
    md: 12,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: (_UpdatedInformation_module_css__WEBPACK_IMPORTED_MODULE_5___default().imgContainer),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
    width: 500,
    height: 700,
    src: "/images/updated.svg",
    id: (_UpdatedInformation_module_css__WEBPACK_IMPORTED_MODULE_5___default().Img),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (UpdatedInformation);

/***/ }),

/***/ "./src/components/Index/WhyUs/WhyUs.tsx":
/*!**********************************************!*\
  !*** ./src/components/Index/WhyUs/WhyUs.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _WhyUs_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WhyUs.module.css */ "./src/components/Index/WhyUs/WhyUs.module.css");
/* harmony import */ var _WhyUs_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_WhyUs_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hoc_Container_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hoc/Container/Container */ "./src/hoc/Container/Container.tsx");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _hoc_FadeInSection_FadeInSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hoc/FadeInSection/FadeInSection */ "./src/hoc/FadeInSection/FadeInSection.js");
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\components\\Index\\WhyUs\\WhyUs.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

 // Components





const WhyUs = () => {
  return __jsx("div", {
    id: (_WhyUs_module_css__WEBPACK_IMPORTED_MODULE_4___default().WhyUs),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 12
    }
  }, __jsx(_hoc_FadeInSection_FadeInSection__WEBPACK_IMPORTED_MODULE_3__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(_hoc_Container_Container__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "Hur kan vi hj\xE4lpa dig?"), __jsx("div", {
    className: (_WhyUs_module_css__WEBPACK_IMPORTED_MODULE_4___default().row),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Row, {
    align: "end",
    justify: "end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Col, {
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: (_WhyUs_module_css__WEBPACK_IMPORTED_MODULE_4___default().text),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: (_WhyUs_module_css__WEBPACK_IMPORTED_MODULE_4___default().head),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: (_WhyUs_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 37
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 65
    }
  }, "Opartiska j\xE4mf\xF6relser"))), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 33
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,"))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Col, {
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: (_WhyUs_module_css__WEBPACK_IMPORTED_MODULE_4___default().text),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: (_WhyUs_module_css__WEBPACK_IMPORTED_MODULE_4___default().head),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: (_WhyUs_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 37
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 65
    }
  }, "Opartiska j\xE4mf\xF6relser"))), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 33
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,"))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Col, {
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: (_WhyUs_module_css__WEBPACK_IMPORTED_MODULE_4___default().text),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: (_WhyUs_module_css__WEBPACK_IMPORTED_MODULE_4___default().head),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: (_WhyUs_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 37
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 65
    }
  }, "Opartiska j\xE4mf\xF6relser"))), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 33
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,")))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Row, {
    style: {
      marginTop: 60
    },
    align: "end",
    justify: "end",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Col, {
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: (_WhyUs_module_css__WEBPACK_IMPORTED_MODULE_4___default().text),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: (_WhyUs_module_css__WEBPACK_IMPORTED_MODULE_4___default().head),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: (_WhyUs_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 37
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 65
    }
  }, "Opartiska j\xE4mf\xF6relser"))), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 33
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,"))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Col, {
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: (_WhyUs_module_css__WEBPACK_IMPORTED_MODULE_4___default().text),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: (_WhyUs_module_css__WEBPACK_IMPORTED_MODULE_4___default().head),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }, __jsx("p", {
    className: (_WhyUs_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 37
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 65
    }
  }, "Opartiska j\xE4mf\xF6relser"))), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 33
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,"))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Col, {
    sm: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: (_WhyUs_module_css__WEBPACK_IMPORTED_MODULE_4___default().text),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: (_WhyUs_module_css__WEBPACK_IMPORTED_MODULE_4___default().head),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: (_WhyUs_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 37
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 65
    }
  }, "Opartiska j\xE4mf\xF6relser"))), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 33
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (WhyUs);

/***/ }),

/***/ "./src/components/Ui/Buttons/ButtonOrange.tsx":
/*!****************************************************!*\
  !*** ./src/components/Ui/Buttons/ButtonOrange.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Buttons_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Buttons.module.css */ "./src/components/Ui/Buttons/Buttons.module.css");
/* harmony import */ var _Buttons_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Buttons_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\components\\Ui\\Buttons\\ButtonOrange.tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const ButtonOrange = props => {
  return __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: props.href ? props.href : '#',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("a", {
    id: (_Buttons_module_css__WEBPACK_IMPORTED_MODULE_2___default().ButtonOrange),
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

/* harmony default export */ __webpack_exports__["default"] = (ButtonOrange);

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
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\components\\Ui\\Buttons\\ButtonWhite.tsx";

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

/***/ "./src/components/Ui/Creditcard/Creditcard.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Ui/Creditcard/Creditcard.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Creditcard.module.css */ "./src/components/Ui/Creditcard/Creditcard.module.css");
/* harmony import */ var _Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Rating_Rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Rating/Rating */ "./src/components/Ui/Rating/Rating.tsx");
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tippyjs/react */ "@tippyjs/react");
/* harmony import */ var _tippyjs_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tippyjs_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tippy.js/dist/tippy.css */ "./node_modules/tippy.js/dist/tippy.css");
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Buttons_ButtonOrange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Buttons/ButtonOrange */ "./src/components/Ui/Buttons/ButtonOrange.tsx");
/* harmony import */ var _context_State__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../context/State */ "./src/context/State.tsx");
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\components\\Ui\\Creditcard\\Creditcard.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

 // Components







const Creditcard = ({
  card
}) => {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_State__WEBPACK_IMPORTED_MODULE_5__.StateContext); // const isCardCompare = compareState.checkIfCardCompare(card.properties._id)

  const addToCompare = card => {
    let State = Object.assign({}, state);
    State.compareIds.push(card);
    setState(State);
  };

  const removeFromCompare = id => {
    let State = Object.assign({}, state);
    const index = State.compareIds.findIndex(Card => Card._id === id);
    if (index < 0) return;
    State.compareIds.splice(index, 1);
    setState(State);
  };

  const isCardCompare = id => {
    const exists = state.compareIds.find(Card => Card._id === id);
    return exists ? true : false;
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().card),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().content),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx("h4", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().Ismobile),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, card.properties.name), __jsx("span", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().Ismobile),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(_Rating_Rating__WEBPACK_IMPORTED_MODULE_1__.default, {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().rating),
    rating: card.properties.rating,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 47
    }
  })), __jsx("img", {
    alt: `kreditkort ${card.properties.name}`,
    src: card.properties.img,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx("h4", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().IsComputer),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, card.properties.name), __jsx("span", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().IsComputer),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx(_Rating_Rating__WEBPACK_IMPORTED_MODULE_1__.default, {
    rating: card.properties.rating,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 53
    }
  })), __jsx("div", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().properties),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, card.properties.properties.map(propertie => {
    if (propertie.type === 'GOOD') {
      return __jsx("div", {
        className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().propertie),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 44
        }
      }, __jsx("span", {
        className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().good),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fas fa-check-circle",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 71
        }
      })), __jsx("li", {
        key: propertie.propertie,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 41
        }
      }, propertie.propertie));
    } else {
      return __jsx("div", {
        className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().propertie),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 44
        }
      }, __jsx("span", {
        className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().bad),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fas fa-times-circle",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 70
        }
      })), __jsx("li", {
        key: propertie.propertie,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 41
        }
      }, propertie.propertie));
    }
  }))))), __jsx("div", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().specific),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, card.properties.specifics.map(specific => {
    const text = specific.text.split(': ');
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      key: specific.text,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 32
      }
    }, __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 29
      }
    }, __jsx("span", {
      style: {
        fontWeight: 'bold'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 33
      }
    }, text[0], ":"), " ", __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 85
      }
    }, text[1])));
  })))), __jsx("div", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().btnBackground),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().buttons),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, __jsx(_Buttons_ButtonOrange__WEBPACK_IMPORTED_MODULE_4__.default, {
    text: "Ans\xF6k nu!",
    href: `/Redirect?card=${card.properties._id}`,
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default()["ansökButton"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }), __jsx(_Buttons_ButtonOrange__WEBPACK_IMPORTED_MODULE_4__.default, {
    text: "Mer information",
    href: `/kort/${card.properties._id.replace(/(\s)/g, '-')}`,
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default()["ansökButton"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  }))), __jsx((_tippyjs_react__WEBPACK_IMPORTED_MODULE_2___default()), {
    content: !isCardCompare(card.properties._id) ? 'Lägg till kreditkort i jämförelse' : 'Ta bort kreditkort ur jämförelse',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx("div", {
    onClick: () => isCardCompare(card.properties._id) ? removeFromCompare(card.properties._id) : addToCompare(card.properties),
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().toCompare),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, isCardCompare(card.properties._id) ? __jsx("i", {
    className: "far fa-times-circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 60
    }
  }) : __jsx("i", {
    className: "fas fa-file-import",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 102
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Creditcard);

/***/ }),

/***/ "./src/components/Ui/DisplayCards/DisplayCards.tsx":
/*!*********************************************************!*\
  !*** ./src/components/Ui/DisplayCards/DisplayCards.tsx ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Creditcard_Creditcard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Creditcard/Creditcard */ "./src/components/Ui/Creditcard/Creditcard.tsx");
/* harmony import */ var _state_compare__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../state/compare */ "./src/state/compare.ts");
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\components\\Ui\\DisplayCards\\DisplayCards.tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const DisplayCards = ({
  creditCards
}) => {
  return creditCards.map(CreditCard => {
    return __jsx(_state_compare__WEBPACK_IMPORTED_MODULE_2__.default.Provider, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 12
      }
    }, __jsx(_Creditcard_Creditcard__WEBPACK_IMPORTED_MODULE_1__.default, {
      card: CreditCard,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 7
      }
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (DisplayCards);

/***/ }),

/***/ "./src/components/Ui/Rating/Rating.tsx":
/*!*********************************************!*\
  !*** ./src/components/Ui/Rating/Rating.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Rating_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Rating.module.css */ "./src/components/Ui/Rating/Rating.module.css");
/* harmony import */ var _Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Rating_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\components\\Ui\\Rating\\Rating.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const Rating = ({
  rating,
  className
}) => {
  let Rating;

  switch (parseInt(rating)) {
    case 1:
      Rating = __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 17
        }
      }, __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().light),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "fas fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 52
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().dark),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "far fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 51
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().dark),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "far fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 51
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().dark),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "far fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 51
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().dark),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "far fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 51
        }
      })));
      break;

    case 2:
      Rating = __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }
      }, __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().light),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 26
        }
      }, __jsx("i", {
        className: "fas fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 57
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().light),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 26
        }
      }, __jsx("i", {
        className: "fas fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 57
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().dark),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 26
        }
      }, __jsx("i", {
        className: "far fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 56
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().dark),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 26
        }
      }, __jsx("i", {
        className: "far fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 56
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().dark),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 26
        }
      }, __jsx("i", {
        className: "far fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 56
        }
      })));
      break;

    case 3:
      Rating = __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }
      }, __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().light),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 26
        }
      }, __jsx("i", {
        className: "fas fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 57
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().light),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "fas fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 56
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().light),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "fas fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 56
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().dark),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "far fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 55
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().dark),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "far fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 55
        }
      })));
      break;

    case 4:
      Rating = __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }
      }, __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().light),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 26
        }
      }, __jsx("i", {
        className: "fas fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 57
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().light),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "fas fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 56
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().light),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "fas fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 56
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().light),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "fas fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 56
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().dark),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "far fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 55
        }
      })));
      break;

    case 5:
      Rating = __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }
      }, __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().light),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "fas fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 56
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().light),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "fas fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 56
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().light),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "fas fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 56
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().light),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "fas fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 56
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().light),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 25
        }
      }, __jsx("i", {
        className: "fas fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 56
        }
      })));
      break;

    default:
      Rating = __jsx("div", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }
      }, __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().dark),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 22
        }
      }, __jsx("i", {
        className: "far fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 52
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().dark),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "far fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 51
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().dark),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "far fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 51
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().dark),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "far fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 51
        }
      })), __jsx("span", {
        className: (_Rating_module_css__WEBPACK_IMPORTED_MODULE_1___default().dark),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }
      }, __jsx("i", {
        className: "far fa-star",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 51
        }
      })));
      break;
  }

  return __jsx("div", {
    className: className,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, Rating);
};

/* harmony default export */ __webpack_exports__["default"] = (Rating);

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

/***/ "./src/context/State.tsx":
/*!*******************************!*\
  !*** ./src/context/State.tsx ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StateContext": function() { return /* binding */ StateContext; },
/* harmony export */   "StateProvider": function() { return /* binding */ StateProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\context\\State.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

const StateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
const StateProvider = ({
  children
}) => {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    cards: [],
    compareIds: []
  });
  return __jsx(StateContext.Provider, {
    value: [state, setState],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 10
    }
  }, children);
};

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
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\hoc\\Container\\Container.tsx";
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

/***/ "./src/hoc/FadeInSection/FadeInSection.js":
/*!************************************************!*\
  !*** ./src/hoc/FadeInSection/FadeInSection.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\hoc\\FadeInSection\\FadeInSection.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



function FadeInSection(props) {
  const [isVisible, setVisible] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(false);
  const domRef = react__WEBPACK_IMPORTED_MODULE_0___default().useRef();
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (isVisible) return;
      if (domRef.current.className === 'fade-in-sectionis-visible') return;
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return __jsx("div", {
    className: `fade-in-section ${isVisible ? 'is-visible' : ''}`,
    ref: domRef,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, props.children);
}

/* harmony default export */ __webpack_exports__["default"] = (FadeInSection);

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes_CreditCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/CreditCard */ "./src/classes/CreditCard.ts");
/* harmony import */ var _components_Index_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Index/Header/Header */ "./src/components/Index/Header/Header.tsx");
/* harmony import */ var _components_Index_WhyUs_WhyUs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Index/WhyUs/WhyUs */ "./src/components/Index/WhyUs/WhyUs.tsx");
/* harmony import */ var _components_Index_TopCards_TopCards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Index/TopCards/TopCards */ "./src/components/Index/TopCards/TopCards.tsx");
/* harmony import */ var _resources_Cards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../resources/Cards */ "./src/resources/Cards.ts");
/* harmony import */ var _classes_CreditCards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../classes/CreditCards */ "./src/classes/CreditCards.ts");
/* harmony import */ var _components_Index_UpdatedInforamtion_UpdatedInformation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Index/UpdatedInforamtion/UpdatedInformation */ "./src/components/Index/UpdatedInforamtion/UpdatedInformation.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "D:\\Kreditkortskoll\\client\\src\\pages\\index.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);










class IndexPage extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    const cards = this.props.cards.map(card => new _classes_CreditCard__WEBPACK_IMPORTED_MODULE_1__.CreditCard(card));
    const list = new _classes_CreditCards__WEBPACK_IMPORTED_MODULE_6__.CreditCards(cards);
    const bestcard = this.props.bestcard;
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 10
      }
    }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
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
    }, "kreditkortskoll.com"), __jsx("meta", {
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
    })), __jsx(_components_Index_Header_Header__WEBPACK_IMPORTED_MODULE_2__.default, {
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
    }, __jsx(_components_Index_WhyUs_WhyUs__WEBPACK_IMPORTED_MODULE_3__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }
    }), __jsx(_components_Index_UpdatedInforamtion_UpdatedInformation__WEBPACK_IMPORTED_MODULE_7__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 11
      }
    }), __jsx(_components_Index_TopCards_TopCards__WEBPACK_IMPORTED_MODULE_4__.default, {
      creditCards: list,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    })));
  }

}

async function getStaticProps() {
  try {
    const promises = [(0,_resources_Cards__WEBPACK_IMPORTED_MODULE_5__.getCards)(), (0,_resources_Cards__WEBPACK_IMPORTED_MODULE_5__.getBestCard)()];
    const responses = await Promise.all(promises);
    const cardsResponse = responses[0];
    const bestcardResponse = responses[1];
    if (cardsResponse.error || bestcardResponse.error) throw new Error();
    return {
      props: {
        cards: cardsResponse.cards,
        bestcard: bestcardResponse.bestcard
      }
    };
  } catch (error) {
    return {
      props: {
        cards: [],
        bestcard: undefined
      },
      revalidate: 3600 * 4
    };
  }
}
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

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

/***/ "./src/state/compare.ts":
/*!******************************!*\
  !*** ./src/state/compare.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unstated-next */ "unstated-next");
/* harmony import */ var unstated_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(unstated_next__WEBPACK_IMPORTED_MODULE_1__);



function useCustomHook() {
  let {
    0: compareIds,
    1: setCompareIds
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  const addToCompare = id => {
    const Ids = [...compareIds];
    const exists = Ids.find(compareId => compareId === id);
    if (exists) return null;
    Ids.push(id);
    setCompareIds(Ids);
    return Ids;
  };

  const removeFromCompare = id => {
    const Ids = [...compareIds];
    const index = Ids.findIndex(compareIds => compareIds === id);
    if (index < 0) return null;
    Ids.splice(index, 1);
    setCompareIds(Ids);
    return Ids;
  };

  const checkIfCardCompare = id => {
    const Ids = [...compareIds];
    return Ids.find(compareIds => compareIds === id);
  };

  return {
    compareIds,
    addToCompare,
    removeFromCompare,
    checkIfCardCompare
  };
}

let Container = (0,unstated_next__WEBPACK_IMPORTED_MODULE_1__.createContainer)(useCustomHook);
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./src/components/Index/Header/BestCard/BestCard.module.css":
/*!******************************************************************!*\
  !*** ./src/components/Index/Header/BestCard/BestCard.module.css ***!
  \******************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"BestCard": "BestCard_BestCard__3wEkq",
	"btn": "BestCard_btn__A4Vce"
};


/***/ }),

/***/ "./src/components/Index/Header/Header.module.css":
/*!*******************************************************!*\
  !*** ./src/components/Index/Header/Header.module.css ***!
  \*******************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"Header": "Header_Header__1BSjH"
};


/***/ }),

/***/ "./src/components/Index/Header/TextHeader/TextHeader.module.css":
/*!**********************************************************************!*\
  !*** ./src/components/Index/Header/TextHeader/TextHeader.module.css ***!
  \**********************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"TextHeader": "TextHeader_TextHeader__1JvhI",
	"HeadingTitle": "TextHeader_HeadingTitle__3cdgX",
	"moveInRight": "TextHeader_moveInRight__2u3yU",
	"HeadingDescription": "TextHeader_HeadingDescription__3B-NM",
	"moveInLeft": "TextHeader_moveInLeft__31u_5"
};


/***/ }),

/***/ "./src/components/Index/TopCards/TopCards.module.css":
/*!***********************************************************!*\
  !*** ./src/components/Index/TopCards/TopCards.module.css ***!
  \***********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"TopCards": "TopCards_TopCards__3v0jg"
};


/***/ }),

/***/ "./src/components/Index/UpdatedInforamtion/UpdatedInformation.module.css":
/*!*******************************************************************************!*\
  !*** ./src/components/Index/UpdatedInforamtion/UpdatedInformation.module.css ***!
  \*******************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"UpdatedInformation": "UpdatedInformation_UpdatedInformation__LzuWj",
	"imgContainer": "UpdatedInformation_imgContainer__1HX48",
	"content": "UpdatedInformation_content__SMHax",
	"btn": "UpdatedInformation_btn__3v2wI"
};


/***/ }),

/***/ "./src/components/Index/WhyUs/WhyUs.module.css":
/*!*****************************************************!*\
  !*** ./src/components/Index/WhyUs/WhyUs.module.css ***!
  \*****************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"WhyUs": "WhyUs_WhyUs__1JIug",
	"row": "WhyUs_row__3C939",
	"text": "WhyUs_text__34jpU",
	"head": "WhyUs_head__2Vnvj",
	"title": "WhyUs_title__xf8n2"
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

/***/ "./src/components/Ui/Creditcard/Creditcard.module.css":
/*!************************************************************!*\
  !*** ./src/components/Ui/Creditcard/Creditcard.module.css ***!
  \************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"card": "Creditcard_card__3_L4I",
	"Ismobile": "Creditcard_Ismobile__3Npne",
	"IsComputer": "Creditcard_IsComputer__1i27t",
	"content": "Creditcard_content__18U0q",
	"specific": "Creditcard_specific__1phuI",
	"buttons": "Creditcard_buttons__Mcx9o",
	"ansökButton": "Creditcard_ans_kButton__3Qw8_",
	"good": "Creditcard_good__151a7",
	"bad": "Creditcard_bad__1iR6d",
	"toCompare": "Creditcard_toCompare__HTDiT",
	"properties": "Creditcard_properties__2TymH",
	"propertie": "Creditcard_propertie__37DFH",
	"btnBackground": "Creditcard_btnBackground__1-GGb",
	"rating": "Creditcard_rating__314C_"
};


/***/ }),

/***/ "./src/components/Ui/Rating/Rating.module.css":
/*!****************************************************!*\
  !*** ./src/components/Ui/Rating/Rating.module.css ***!
  \****************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"light": "Rating_light__1L63n",
	"dark": "Rating_dark__2ajoy"
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

/***/ "./node_modules/tippy.js/dist/tippy.css":
/*!**********************************************!*\
  !*** ./node_modules/tippy.js/dist/tippy.css ***!
  \**********************************************/
/***/ (function() {



/***/ }),

/***/ "@tippyjs/react":
/*!*********************************!*\
  !*** external "@tippyjs/react" ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = require("@tippyjs/react");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-grid-system":
/*!************************************!*\
  !*** external "react-grid-system" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-grid-system");;

/***/ }),

/***/ "unstated-next":
/*!********************************!*\
  !*** external "unstated-next" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("unstated-next");;

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

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_interopRequireDefault_js-node_modules_next_dist_cl-b31ef0","vendors-node_modules_next_dist_client_use-intersection_js","vendors-node_modules_next_head_js-node_modules_next_link_js","vendors-node_modules_next_image_js"], function() { return __webpack_exec__("./src/pages/index.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY2xhc3Nlcy9DcmVkaXRDYXJkLnRzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jbGFzc2VzL0NyZWRpdENhcmRzLnRzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L0hlYWRlci9CZXN0Q2FyZC9CZXN0Q2FyZC50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvSW5kZXgvSGVhZGVyL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvSW5kZXgvSGVhZGVyL1RleHRIZWFkZXIvVGV4dEhlYWRlci50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvSW5kZXgvVG9wQ2FyZHMvVG9wQ2FyZHMudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L1VwZGF0ZWRJbmZvcmFtdGlvbi9VcGRhdGVkSW5mb3JtYXRpb24udHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L1doeVVzL1doeVVzLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9CdXR0b25zL0J1dHRvbk9yYW5nZS50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvQnV0dG9ucy9CdXR0b25XaGl0ZS50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvQ3JlZGl0Y2FyZC9DcmVkaXRjYXJkLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9EaXNwbGF5Q2FyZHMvRGlzcGxheUNhcmRzLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9SYXRpbmcvUmF0aW5nLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29uZmlnL2F4aW9zLnRzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb250ZXh0L1N0YXRlLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvaG9jL0NvbnRhaW5lci9Db250YWluZXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9ob2MvRmFkZUluU2VjdGlvbi9GYWRlSW5TZWN0aW9uLmpzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL3Jlc291cmNlcy9DYXJkcy50cyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvc3RhdGUvY29tcGFyZS50cyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9JbmRleC9IZWFkZXIvQmVzdENhcmQvQmVzdENhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9JbmRleC9IZWFkZXIvSGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvSW5kZXgvSGVhZGVyL1RleHRIZWFkZXIvVGV4dEhlYWRlci5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L1RvcENhcmRzL1RvcENhcmRzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvSW5kZXgvVXBkYXRlZEluZm9yYW10aW9uL1VwZGF0ZWRJbmZvcm1hdGlvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L1doeVVzL1doeVVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvQnV0dG9ucy9CdXR0b25zLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvQ3JlZGl0Y2FyZC9DcmVkaXRjYXJkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvUmF0aW5nL1JhdGluZy5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9ob2MvQ29udGFpbmVyL0NvbnRhaW5lci5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIkB0aXBweWpzL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJyZWFjdC1ncmlkLXN5c3RlbVwiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcInVuc3RhdGVkLW5leHRcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvaWdub3JlZHxEOlxcS3JlZGl0a29ydHNrb2xsXFxDbGllbnRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJDcmVkaXRDYXJkIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiYWRkVG9Db21wYXJlIiwiY2hlY2tJZkNhcmRDb21wYXJlIiwiQ3JlZGl0Q2FyZHMiLCJjYXJkcyIsImdldENhcmRzIiwiQmVzdENhcmQiLCJiZXN0Y2FyZCIsInN0eWxlcyIsImltZyIsImRlc2NyaXB0aW9uIiwibmFtZSIsIkhlYWRlciIsIlRleHRIZWFkZXIiLCJUb3BDYXJkcyIsImNyZWRpdENhcmRzIiwic3BsaWNlIiwiVXBkYXRlZEluZm9ybWF0aW9uIiwiV2h5VXMiLCJtYXJnaW5Ub3AiLCJCdXR0b25PcmFuZ2UiLCJwcm9wcyIsImhyZWYiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwidGV4dCIsIkJ1dHRvbldoaXRlIiwiQ3JlZGl0Y2FyZCIsImNhcmQiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlQ29udGV4dCIsIlN0YXRlQ29udGV4dCIsIlN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiY29tcGFyZUlkcyIsInB1c2giLCJyZW1vdmVGcm9tQ29tcGFyZSIsImlkIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJDYXJkIiwiX2lkIiwiaXNDYXJkQ29tcGFyZSIsImV4aXN0cyIsImZpbmQiLCJyYXRpbmciLCJtYXAiLCJwcm9wZXJ0aWUiLCJ0eXBlIiwic3BlY2lmaWNzIiwic3BlY2lmaWMiLCJzcGxpdCIsImZvbnRXZWlnaHQiLCJyZXBsYWNlIiwiRGlzcGxheUNhcmRzIiwiUmF0aW5nIiwicGFyc2VJbnQiLCJpbnN0YW5jZSIsImF4aW9zIiwiYmFzZVVSTCIsImNyZWF0ZUNvbnRleHQiLCJTdGF0ZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsIkNvbnRhaW5lciIsIkZhZGVJblNlY3Rpb24iLCJpc1Zpc2libGUiLCJzZXRWaXNpYmxlIiwiUmVhY3QiLCJkb21SZWYiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsImN1cnJlbnQiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsIm9ic2VydmUiLCJ1bm9ic2VydmUiLCJJbmRleFBhZ2UiLCJyZW5kZXIiLCJsaXN0IiwiZ2V0U3RhdGljUHJvcHMiLCJwcm9taXNlcyIsImdldEJlc3RDYXJkIiwicmVzcG9uc2VzIiwiUHJvbWlzZSIsImFsbCIsImNhcmRzUmVzcG9uc2UiLCJiZXN0Y2FyZFJlc3BvbnNlIiwiZXJyb3IiLCJFcnJvciIsInVuZGVmaW5lZCIsInJldmFsaWRhdGUiLCJjb25zb2xlIiwibG9nIiwicmVzIiwiZGF0YSIsImJlc3RDYXJkIiwiZ2V0Q2FyZCIsImdldENvbXBhcmVDYXJkcyIsImlkcyIsImNhcmRzSW5mbyIsImZpbHRlciIsInVzZUN1c3RvbUhvb2siLCJzZXRDb21wYXJlSWRzIiwiSWRzIiwiY29tcGFyZUlkIiwiY3JlYXRlQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQW1CTyxNQUFNQSxVQUFOLENBQWlCO0FBQ3RCQyxhQUFXLENBQVNDLFVBQVQsRUFBNEI7QUFBQSxTQUFuQkEsVUFBbUIsR0FBbkJBLFVBQW1CO0FBQUc7O0FBRTFDQyxjQUFZLEdBQUksQ0FFZjs7QUFFREMsb0JBQWtCLEdBQUksQ0FFckI7O0FBVHFCLEM7Ozs7Ozs7Ozs7Ozs7OztBQ2pCakIsTUFBTUMsV0FBTixDQUFrQjtBQUN2QkosYUFBVyxD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Q0hBLDRDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQ2FyZCB7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHNob3c6IGJvb2xlYW47XHJcbiAgcmVxdWlyZW1lbnRzOiBzdHJpbmdbXTtcclxuICByYXRpbmc6IHN0cmluZztcclxuICBwcm9wZXJ0aWVzOiB7X2lkPzogbnVtYmVyLCBwcm9wZXJ0aWU6IHN0cmluZywgdHlwZTogc3RyaW5nfVtdO1xyXG4gIHNwZWNpZmljczoge19pZD86IG51bWJlciwgdGV4dDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfVtdO1xyXG4gIGltZzogc3RyaW5nO1xyXG4gIGluc3VyYW5jZXM6IHtfaWQ/OiBudW1iZXIsIHRleHQ6IHN0cmluZywgdHlwZTogc3RyaW5nIH1bXTtcclxuICBib251c3RleHQ6IHN0cmluZztcclxuICBjcmVkaXRUZXh0OiBzdHJpbmc7XHJcbiAgaW5zdXJhbmNlVGV4dDogc3RyaW5nO1xyXG4gIGZhY3RzOiB7X2lkPzogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd9W107XHJcbiAgb3JkZXI6IG51bWJlcjtcclxuICB1cmw6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbiA6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENyZWRpdENhcmQge1xyXG4gIGNvbnN0cnVjdG9yIChwdWJsaWMgcHJvcGVydGllcyA6IENhcmQpIHsgfVxyXG5cclxuICBhZGRUb0NvbXBhcmUgKCkge1xyXG5cclxuICB9XHJcblxyXG4gIGNoZWNrSWZDYXJkQ29tcGFyZSAoKSB7XHJcbiAgICBcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDcmVkaXRDYXJkIH0gZnJvbSAnLi9DcmVkaXRDYXJkJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVkaXRDYXJkcyB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGNhcmRzIDogQ3JlZGl0Q2FyZFtdID0gW10pIHt9XHJcblxyXG4gIGdldENhcmRzICgpIDogQ3JlZGl0Q2FyZFtdIHtcclxuICAgIHJldHVybiB0aGlzLmNhcmRzO1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vQmVzdENhcmQubW9kdWxlLmNzcyc7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgQmVzdENhcmQgYXMgQmVzdENhcmRJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9pbnRlcmZhY2VzL0Jlc3RDYXJkJztcclxuaW1wb3J0IEJ1dHRvbldoaXRlIGZyb20gJy4uLy4uLy4uL1VpL0J1dHRvbnMvQnV0dG9uV2hpdGUnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBiZXN0Y2FyZCA6IEJlc3RDYXJkSW50ZXJmYWNlO1xyXG59XHJcblxyXG5jb25zdCBCZXN0Q2FyZCA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7YmVzdGNhcmR9KSA9PiB7XHJcbiAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5CZXN0Q2FyZH0+XHJcbiAgICAgICAgPGgzPkLDpHN0YSBrb3J0ZXQgbnU8L2gzPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXtiZXN0Y2FyZC5pbWd9XHJcbiAgICAgICAgICB3aWR0aD17MjUwfVxyXG4gICAgICAgICAgaGVpZ2h0PXsxNDB9XHJcbiAgICAgICAgICBhbHQ9XCJCw6RzdGEga3JlZGl0a29ydGV0IGp1c3QgbnUhXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiA8aDQ+e2Jlc3RjYXJkLm5hbWV9PC9oND4gKi99XHJcbiAgICAgICAgPHA+e2Jlc3RjYXJkLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8QnV0dG9uV2hpdGUgdGV4dD1cIkFuc8O2ayBudSFcIiBocmVmPXtgL1JlZGlyZWN0P2NhcmQ9JHtiZXN0Y2FyZC5uYW1lfWB9IGNsYXNzTmFtZT17c3R5bGVzLmJ0bn0gLz5cclxuICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmVzdENhcmQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi8uLi9ob2MvQ29udGFpbmVyL0NvbnRhaW5lcic7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3QtZ3JpZC1zeXN0ZW0nO1xyXG5pbXBvcnQgVGV4dEhlYWRlciBmcm9tICcuL1RleHRIZWFkZXIvVGV4dEhlYWRlcic7XHJcbmltcG9ydCBCZXN0Q2FyZCBmcm9tICcuL0Jlc3RDYXJkL0Jlc3RDYXJkJztcclxuaW1wb3J0IHsgQmVzdENhcmQgYXMgQmVzdENhcmRJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL0Jlc3RDYXJkJztcclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGJlc3RjYXJkIDogQmVzdENhcmRJbnRlcmZhY2VcclxufVxyXG5cclxuY29uc3QgSGVhZGVyIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHtiZXN0Y2FyZH0pIDogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5IZWFkZXJ9PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFJvdyBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0gbGc9ezd9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEhlYWRlciAvPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSBsZz17NX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCZXN0Q2FyZCBiZXN0Y2FyZD17YmVzdGNhcmR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0SGVhZGVyLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgVGV4dEhlYWRlciA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCkgOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBpZD17c3R5bGVzLlRleHRIZWFkZXJ9PlxyXG4gICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5IZWFkaW5nVGl0bGV9PlxyXG4gICAgICAgICAgICA8aDE+VmkgaGrDpGxwZXIgZGlnIGF0dCBoaXR0YSBkZXQgYsOkc3RhIGtvcnRldCBmw7ZyIGp1c3QgZGlnLi4uPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuSGVhZGluZ0Rlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgPHA+c3VzY2lwaXQgcXVhcyBzYWVwZSBibGFuZGl0aWlzLCBvYmNhZWNhdGkgZXZlbmlldCByYXRpb25lIGEgbW9kaSBjb25zZWN0ZXR1ciBzaXQgZW9zIGVhcXVlIGRvbG9yaWJ1cyBkb2xvcmU/PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG48L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dEhlYWRlcjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDcmVkaXRDYXJkcyB9IGZyb20gJy4uLy4uLy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZHMnO1xyXG5pbXBvcnQgRGlzcGxheUNhcmRzIGZyb20gJy4uLy4uL1VpL0Rpc3BsYXlDYXJkcy9EaXNwbGF5Q2FyZHMnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVG9wQ2FyZHMubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBUb3BDYXJkcyA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PHtjcmVkaXRDYXJkcyA6IENyZWRpdENhcmRzfT4gPSAoe2NyZWRpdENhcmRzfSkgOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICBjb25zdCBjYXJkcyA9IGNyZWRpdENhcmRzLmNhcmRzLnNwbGljZSgyLCA1KVxyXG4gICAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5Ub3BDYXJkc30+ICAgIFxyXG4gICAgICAgIDxoMz5Ww6VyYSBwb3B1bMOkcmFzdGUga3JlZGl0a29ydDwvaDM+XHJcbiAgICAgICAgPERpc3BsYXlDYXJkcyBjcmVkaXRDYXJkcz17Y2FyZHN9IC8+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wQ2FyZHM7IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1VwZGF0ZWRJbmZvcm1hdGlvbi5tb2R1bGUuY3NzJ1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vLi4vaG9jL0NvbnRhaW5lci9Db250YWluZXInO1xyXG5pbXBvcnQge1JvdyAsIENvbH0gZnJvbSAncmVhY3QtZ3JpZC1zeXN0ZW0nO1xyXG5pbXBvcnQgQnV0dG9uV2hpdGUgZnJvbSAnLi4vLi4vVWkvQnV0dG9ucy9CdXR0b25XaGl0ZSc7XHJcblxyXG5cclxuY29uc3QgVXBkYXRlZEluZm9ybWF0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiA8ZGl2IGlkPXtzdHlsZXMuVXBkYXRlZEluZm9ybWF0aW9ufT5cclxuICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxkaXYgaWQ9e3N0eWxlcy5jb250ZW50fT4gIFxyXG4gICAgICA8Um93PlxyXG4gICAgICAgIDxDb2wgbWQ9ezEyfSBsZz17Nn0+XHJcbiAgICAgICAgICA8aDQ+QWxsdGlkIHVwZGF0ZXJhdDwvaDQ+XHJcbiAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRGlnbmlzc2ltb3MgdmVybyBjb25zZWN0ZXR1ciB2b2x1cHRhdHVtIGN1bT8gTGFib3JlIHN1c2NpcGl0IG5vYmlzIGN1cGlkaXRhdGUgbWFpb3JlcyBhdCBkZWxlbml0aSBuZXNjaXVudCBvYmNhZWNhdGkgcmVwZWxsZW5kdXMgbWluaW1hIHF1aSwgcXVpZGVtIGV4ZXJjaXRhdGlvbmVtIGV4Y2VwdHVyaSBlbGlnZW5kaSBub24hPC9wPlxyXG4gICAgICAgICAgPEJ1dHRvbldoaXRlIGhyZWY9XCIva29ydFwiIHRleHQ9XCJVdGZvcnNrYSBrb3J0XCIgY2xhc3NOYW1lPXtzdHlsZXMuYnRufSAvPiBcclxuICAgICAgICA8L0NvbD5cclxuICAgICAgICA8Q29sIG1kPXsxMn0gbGc9ezZ9PlxyXG4gICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5pbWdDb250YWluZXJ9PiAgXHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs3MDB9XHJcbiAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvdXBkYXRlZC5zdmdcIlxyXG4gICAgICAgICAgICBpZD17c3R5bGVzLkltZ31cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbD5cclxuICAgICAgPC9Sb3c+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgICB7LyogPExpbmsgaHJlZj1cIi9rb3J0L2FsbGEta3JlZGl0a29ydFwiPlxyXG4gICAgICA8YT5VdGZvcnNrYSBrcmVkaXRrb3J0PC9hPlxyXG4gICAgPC9MaW5rPiAqL31cclxuICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXBkYXRlZEluZm9ybWF0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9XaHlVcy5tb2R1bGUuY3NzJztcclxuXHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vLi4vaG9jL0NvbnRhaW5lci9Db250YWluZXInO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWdyaWQtc3lzdGVtJztcclxuaW1wb3J0IEZhZGVJblNlY3Rpb24gZnJvbSAnLi4vLi4vLi4vaG9jL0ZhZGVJblNlY3Rpb24vRmFkZUluU2VjdGlvbic7XHJcblxyXG5cclxuY29uc3QgV2h5VXMgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICgpIDogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5XaHlVc30+XHJcbiAgICA8RmFkZUluU2VjdGlvbj4gICAgICAgIFxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxoMj5IdXIga2FuIHZpIGhqw6RscGEgZGlnPzwvaDI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgIDxSb3cgYWxpZ249XCJlbmRcIiBqdXN0aWZ5PVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tb25leS1jaGVja1wiPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT48Yj5PcGFydGlza2EgasOkbWbDtnJlbHNlcjwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQcmFlc2VudGl1bSw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tb25leS1jaGVja1wiPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT48Yj5PcGFydGlza2EgasOkbWbDtnJlbHNlcjwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQcmFlc2VudGl1bSw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGkgY2xhc3NOYW1lPVwiZmFzIGZhLW1vbmV5LWNoZWNrXCI+PC9pPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PjxiPk9wYXJ0aXNrYSBqw6RtZsO2cmVsc2VyPC9iPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQcmFlc2VudGl1bSw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDxSb3cgc3R5bGU9e3ttYXJnaW5Ub3A6NjB9fSBhbGlnbj1cImVuZFwiIGp1c3RpZnk9XCJlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGkgY2xhc3NOYW1lPVwiZmFzIGZhLW1vbmV5LWNoZWNrXCI+PC9pPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PjxiPk9wYXJ0aXNrYSBqw6RtZsO2cmVsc2VyPC9iPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFByYWVzZW50aXVtLDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGkgY2xhc3NOYW1lPVwiZmFzIGZhLW1vbmV5LWNoZWNrXCI+PC9pPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PjxiPk9wYXJ0aXNrYSBqw6RtZsO2cmVsc2VyPC9iPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFByYWVzZW50aXVtLDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbW9uZXktY2hlY2tcIj48L2k+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+PGI+T3BhcnRpc2thIGrDpG1mw7ZyZWxzZXI8L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFByYWVzZW50aXVtLDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fT5cclxuICAgICAgICAgICAgICAgIDxSb3cgYWxpZ249XCJlbmRcIiBqdXN0aWZ5PVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZH08ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlYWR9PGRpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PjxiPk9wYXJ0aXNrYSBqw6RtZsO2cmVsc2VyPC9iPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNtPXs0fT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNtPXs0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfTxkaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBzbT17NH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZH08ZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXZcclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT48Yj5PcGFydGlza2EgasOkbWbDtnJlbHNlcjwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0ZhZGVJblNlY3Rpb24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaHlVczsiLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vQnV0dG9ucy5tb2R1bGUuY3NzJztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgaHJlZj86IHN0cmluZztcclxuICBvbkNsaWNrPyA6ICgpID0+IHZvaWQ7XHJcbiAgY2xhc3NOYW1lPyA6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgQnV0dG9uT3JhbmdlIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgIHJldHVybiA8TGluayBocmVmPXtwcm9wcy5ocmVmID8gcHJvcHMuaHJlZiA6ICcjJ30+XHJcbiAgICA8YSBpZD17c3R5bGVzLkJ1dHRvbk9yYW5nZX0gb25DbGljaz17cHJvcHMub25DbGlja30gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9PlxyXG4gICAgICAgIHtwcm9wcy50ZXh0fVxyXG4gICAgPC9hPlxyXG4gIDwvTGluaz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uT3JhbmdlOyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b25zLm1vZHVsZS5jc3MnO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBocmVmPzogc3RyaW5nO1xyXG4gIG9uQ2xpY2s/IDogKCkgPT4gdm9pZDtcclxuICBjbGFzc05hbWU/IDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBCdXR0b25XaGl0ZSA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gICByZXR1cm4gPExpbmsgaHJlZj17cHJvcHMuaHJlZiA/IHByb3BzLmhyZWYgOiAnIyd9PlxyXG4gICAgPGEgaWQ9e3N0eWxlcy5CdXR0b25XaGl0ZX0gb25DbGljaz17cHJvcHMub25DbGlja30gY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9PlxyXG4gICAgICAgIHtwcm9wcy50ZXh0fVxyXG4gICAgPC9hPlxyXG4gIDwvTGluaz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uV2hpdGU7IiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ3JlZGl0Y2FyZC5tb2R1bGUuY3NzJ1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gJy4uL1JhdGluZy9SYXRpbmcnO1xyXG5pbXBvcnQgeyBDcmVkaXRDYXJkIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9DcmVkaXRDYXJkJztcclxuaW1wb3J0IFRpcHB5IGZyb20gJ0B0aXBweWpzL3JlYWN0JztcclxuaW1wb3J0ICd0aXBweS5qcy9kaXN0L3RpcHB5LmNzcyc7XHJcbmltcG9ydCBCdXR0b25PcmFuZ2UgZnJvbSAnLi4vQnV0dG9ucy9CdXR0b25PcmFuZ2UnO1xyXG5pbXBvcnQge0NhcmQgYXMgQ3JlZGl0Q2FyZEludGVyZmFjZX0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9DcmVkaXRDYXJkJ1xyXG5pbXBvcnQgeyBTdGF0ZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0L1N0YXRlJztcclxuXHJcblxyXG5cclxuY29uc3QgQ3JlZGl0Y2FyZCA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PHtjYXJkIDogQ3JlZGl0Q2FyZH0+ID0gKHtjYXJkfSkgPT4ge1xyXG5cclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQ8YW55PihTdGF0ZUNvbnRleHQpXHJcbiAgICAvLyBjb25zdCBpc0NhcmRDb21wYXJlID0gY29tcGFyZVN0YXRlLmNoZWNrSWZDYXJkQ29tcGFyZShjYXJkLnByb3BlcnRpZXMuX2lkKVxyXG5cclxuXHJcbiAgICBjb25zdCBhZGRUb0NvbXBhcmUgPSAoY2FyZCA6IENyZWRpdENhcmRJbnRlcmZhY2UpID0+IHtcclxuICAgICAgICBsZXQgU3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XHJcbiAgICAgICAgU3RhdGUuY29tcGFyZUlkcy5wdXNoKGNhcmQpXHJcbiAgICAgICAgc2V0U3RhdGUoU3RhdGUpXHJcbiAgICB9ICAgXHJcblxyXG4gICAgY29uc3QgcmVtb3ZlRnJvbUNvbXBhcmUgPSAoaWQgOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBsZXQgU3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBTdGF0ZS5jb21wYXJlSWRzLmZpbmRJbmRleCgoQ2FyZCA6IENyZWRpdENhcmRJbnRlcmZhY2UpID0+IENhcmQuX2lkID09PSBpZClcclxuICAgICAgICBpZihpbmRleCA8IDApIHJldHVybjtcclxuICAgICAgICBTdGF0ZS5jb21wYXJlSWRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgc2V0U3RhdGUoU3RhdGUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaXNDYXJkQ29tcGFyZSA9IChpZCA6IHN0cmluZykgOiBCb29sZWFuID0+IHtcclxuICAgICAgICBjb25zdCBleGlzdHMgPSBzdGF0ZS5jb21wYXJlSWRzLmZpbmQoKENhcmQgOiBDcmVkaXRDYXJkSW50ZXJmYWNlKSA9PiBDYXJkLl9pZCA9PT0gaWQpXHJcblxyXG4gICAgICAgIHJldHVybiBleGlzdHMgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXMuSXNtb2JpbGV9PntjYXJkLnByb3BlcnRpZXMubmFtZX08L2g0PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5Jc21vYmlsZX0+PFJhdGluZyBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmd9IHJhdGluZz17Y2FyZC5wcm9wZXJ0aWVzLnJhdGluZ30vPjwvc3Bhbj5cclxuICAgICAgICAgICAgPGltZyBhbHQ9e2BrcmVkaXRrb3J0ICR7Y2FyZC5wcm9wZXJ0aWVzLm5hbWV9YH0gc3JjPXtjYXJkLnByb3BlcnRpZXMuaW1nfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5Jc0NvbXB1dGVyfT57Y2FyZC5wcm9wZXJ0aWVzLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLklzQ29tcHV0ZXJ9PjxSYXRpbmcgcmF0aW5nPXtjYXJkLnByb3BlcnRpZXMucmF0aW5nfSAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvcGVydGllc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcmQucHJvcGVydGllcy5wcm9wZXJ0aWVzLm1hcChwcm9wZXJ0aWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHByb3BlcnRpZS50eXBlID09PSAnR09PRCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvcGVydGllfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmdvb2R9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGVjay1jaXJjbGVcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cHJvcGVydGllLnByb3BlcnRpZX0+e3Byb3BlcnRpZS5wcm9wZXJ0aWV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvcGVydGllfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJhZH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzLWNpcmNsZVwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwcm9wZXJ0aWUucHJvcGVydGllfT57cHJvcGVydGllLnByb3BlcnRpZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3BlY2lmaWN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FyZC5wcm9wZXJ0aWVzLnNwZWNpZmljcy5tYXAoc3BlY2lmaWMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gc3BlY2lmaWMudGV4dC5zcGxpdCgnOiAnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50IGtleT17c3BlY2lmaWMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkJ319Pnt0ZXh0WzBdfTo8L3NwYW4+IDxzcGFuPnt0ZXh0WzFdfTwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idG5CYWNrZ3JvdW5kfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbk9yYW5nZSB0ZXh0PVwiQW5zw7ZrIG51IVwiIGhyZWY9e2AvUmVkaXJlY3Q/Y2FyZD0ke2NhcmQucHJvcGVydGllcy5faWR9YH0gY2xhc3NOYW1lPXtzdHlsZXMuYW5zw7ZrQnV0dG9ufSAvPiBcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uT3JhbmdlIHRleHQ9XCJNZXIgaW5mb3JtYXRpb25cIiBocmVmPXtgL2tvcnQvJHtjYXJkLnByb3BlcnRpZXMuX2lkLnJlcGxhY2UoLyhcXHMpL2csICctJyl9YH0gY2xhc3NOYW1lPXtzdHlsZXMuYW5zw7ZrQnV0dG9ufSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VGlwcHkgY29udGVudD17IWlzQ2FyZENvbXBhcmUoY2FyZC5wcm9wZXJ0aWVzLl9pZCkgPyAnTMOkZ2cgdGlsbCBrcmVkaXRrb3J0IGkgasOkbWbDtnJlbHNlJyA6ICdUYSBib3J0IGtyZWRpdGtvcnQgdXIgasOkbWbDtnJlbHNlJ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGlzQ2FyZENvbXBhcmUoY2FyZC5wcm9wZXJ0aWVzLl9pZCkgPyByZW1vdmVGcm9tQ29tcGFyZShjYXJkLnByb3BlcnRpZXMuX2lkKSA6IGFkZFRvQ29tcGFyZShjYXJkLnByb3BlcnRpZXMpfSBjbGFzc05hbWU9e3N0eWxlcy50b0NvbXBhcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICB7aXNDYXJkQ29tcGFyZShjYXJkLnByb3BlcnRpZXMuX2lkKSA/IDxpIGNsYXNzTmFtZT1cImZhciBmYS10aW1lcy1jaXJjbGVcIj48L2k+IDogPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWZpbGUtaW1wb3J0XCI+PC9pPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1RpcHB5PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWRpdGNhcmQ7IiwiaW1wb3J0IHsgQ3JlZGl0Q2FyZCB9IGZyb20gJy4uLy4uLy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZCc7XHJcbmltcG9ydCBDcmVkaXRjYXJkIGZyb20gJy4uL0NyZWRpdGNhcmQvQ3JlZGl0Y2FyZCc7XHJcbmltcG9ydCBDb21wYXJlQ29udGFpbmVyIGZyb20gJy4uLy4uLy4uL3N0YXRlL2NvbXBhcmUnO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNyZWRpdENhcmRzOiBDcmVkaXRDYXJkW107XHJcbn1cclxuXHJcbmNvbnN0IERpc3BsYXlDYXJkczogUmVhY3QuRkM8UHJvcHM+ID0gKHtjcmVkaXRDYXJkc30pIDogYW55ID0+IHtcclxuICByZXR1cm4gY3JlZGl0Q2FyZHMubWFwKENyZWRpdENhcmQgPT4ge1xyXG4gICAgcmV0dXJuIDxDb21wYXJlQ29udGFpbmVyLlByb3ZpZGVyPlxyXG4gICAgICA8Q3JlZGl0Y2FyZCBjYXJkPXtDcmVkaXRDYXJkfSAvPlxyXG4gICAgPC9Db21wYXJlQ29udGFpbmVyLlByb3ZpZGVyPlxyXG4gIH0pXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlzcGxheUNhcmRzOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9SYXRpbmcubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IFJhdGluZyA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PHtyYXRpbmcgOiBzdHJpbmcsIGNsYXNzTmFtZT8gOiBzdHJpbmd9PiA9ICh7cmF0aW5nLCBjbGFzc05hbWV9KSA9PiB7XHJcbiAgICBsZXQgUmF0aW5nO1xyXG4gICAgc3dpdGNoICAocGFyc2VJbnQocmF0aW5nKSkge1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgUmF0aW5nID0gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya30+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgUmF0aW5nID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICBSYXRpbmcgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya30+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgIFJhdGluZyA9IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya30+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgIFJhdGluZyA9IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBSYXRpbmcgPSAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya30+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya30+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgICAgIHJldHVybiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e1JhdGluZ308L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhdGluZzsiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogJ2h0dHBzOi8va3JlZGl0a29ydHNrb2xsYXBpLmV3LnIuYXBwc3BvdC5jb20vJyxcclxuXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCBjcmVhdGVDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Q2FyZCBhcyBDcmVkaXRDYXJkSW50ZXJmYWNlfSBmcm9tICcuLi9jbGFzc2VzL0NyZWRpdENhcmQnO1xyXG5cclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICBjYXJkczogQ3JlZGl0Q2FyZEludGVyZmFjZVtdO1xyXG4gIGNvbXBhcmVJZHM6IENyZWRpdENhcmRJbnRlcmZhY2VbXTsgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTdGF0ZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KVxyXG5cclxuZXhwb3J0IGNvbnN0IFN0YXRlUHJvdmlkZXIgOiBSZWFjdC5GQyA9ICh7Y2hpbGRyZW59KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTxTdGF0ZT4oe1xyXG4gICAgY2FyZHM6W10sXHJcbiAgICBjb21wYXJlSWRzOltdXHJcbiAgfSlcclxuICByZXR1cm4gPFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlLCBzZXRTdGF0ZV19PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICA8L1N0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxufVxyXG5cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbnRhaW5lci5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcbmNvbnN0IENvbnRhaW5lciA6IFJlYWN0LkZDID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBpZD17c3R5bGVzLkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7IiwiaW1wb3J0IFJlYWN0LCB7dXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi9GYWRlSW5TZWN0aW9uLm1vZHVsZS5jc3MnO1xyXG5cclxuZnVuY3Rpb24gRmFkZUluU2VjdGlvbihwcm9wcykge1xyXG4gICAgY29uc3QgW2lzVmlzaWJsZSwgc2V0VmlzaWJsZV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBkb21SZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgIGlmKGlzVmlzaWJsZSkgcmV0dXJuXHJcbiAgICAgICAgaWYoZG9tUmVmLmN1cnJlbnQuY2xhc3NOYW1lID09PSAnZmFkZS1pbi1zZWN0aW9uaXMtdmlzaWJsZScpIHJldHVyblxyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiBzZXRWaXNpYmxlKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgICAgcmV0dXJuICgpID0+IG9ic2VydmVyLnVub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPXtgZmFkZS1pbi1zZWN0aW9uICR7aXNWaXNpYmxlID8gJ2lzLXZpc2libGUnIDogJyd9YH1cclxuICAgICAgICByZWY9e2RvbVJlZn1cclxuICAgICAgPlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgRmFkZUluU2VjdGlvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDcmVkaXRDYXJkIH0gZnJvbSAnLi4vY2xhc3Nlcy9DcmVkaXRDYXJkJ1xyXG5pbXBvcnQgeyBDYXJkIGFzIENyZWRpdENhcmRJbnRlcmZhY2UgfSBmcm9tICcuLi9jbGFzc2VzL0NyZWRpdENhcmQnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSW5kZXgvSGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCBXaHlVcyBmcm9tICcuLi9jb21wb25lbnRzL0luZGV4L1doeVVzL1doeVVzJztcclxuaW1wb3J0IFRvcENhcmRzIGZyb20gJy4uL2NvbXBvbmVudHMvSW5kZXgvVG9wQ2FyZHMvVG9wQ2FyZHMnO1xyXG5pbXBvcnQgeyBCZXN0Q2FyZCB9IGZyb20gJy4uL2ludGVyZmFjZXMvQmVzdENhcmQnO1xyXG5pbXBvcnQgeyBnZXRCZXN0Q2FyZCwgZ2V0Q2FyZHMgfSBmcm9tICcuLi9yZXNvdXJjZXMvQ2FyZHMnXHJcbmltcG9ydCB7IENyZWRpdENhcmRzIH0gZnJvbSAnLi4vY2xhc3Nlcy9DcmVkaXRDYXJkcyc7XHJcbmltcG9ydCBVcGRhdGVkSW5mb3JtYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9JbmRleC9VcGRhdGVkSW5mb3JhbXRpb24vVXBkYXRlZEluZm9ybWF0aW9uJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW50ZXJmYWNlIFN0YXRlIHtcclxuICBjYXJkcyA6IENyZWRpdENhcmRzO1xyXG59XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBsb2FkaW5nIDogYm9vbGVhbjtcclxuICAgIGNvbXBhcmVJZHMgOiBzdHJpbmdbXTtcclxuICAgIGNhcmRzOiBDcmVkaXRDYXJkSW50ZXJmYWNlW107XHJcbiAgICBiZXN0Y2FyZDogQmVzdENhcmQ7XHJcbn1cclxuXHJcbmNsYXNzIEluZGV4UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+ICB7XHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IGNhcmRzID0gdGhpcy5wcm9wcy5jYXJkcy5tYXAoY2FyZCA9PiBuZXcgQ3JlZGl0Q2FyZChjYXJkKSk7XHJcbiAgICBjb25zdCBsaXN0ID0gbmV3IENyZWRpdENhcmRzKGNhcmRzKTtcclxuICAgIGNvbnN0IGJlc3RjYXJkID0gdGhpcy5wcm9wcy5iZXN0Y2FyZFxyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5rcmVkaXRrb3J0c2tvbGwuY29tPC90aXRsZT5cclxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIktyZWRpdGtvcnRza29sbC5jb20gasOkbWbDtnIgb2xpa2Ega3JlZGl0a29ydCBmw7ZyIGF0dCBoaXR0YSBkZXQgYsOkc3RhIGtyZWRpa29ydGV0IGbDtnIgZGlnLiBKw6RtZsO2ciBrcmVkaXRrb3J0IHNvbSBSZW1lbWJlciBmbGV4IG9jaCBOb3J3ZWdpYW5cIiAvPlxyXG4gICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cImluZGV4LCBmb2xsb3dcIiAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgICA8SGVhZGVyIGJlc3RjYXJkPXtiZXN0Y2FyZH0gLz5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgICA8V2h5VXMgLz5cclxuICAgICAgICAgIDxVcGRhdGVkSW5mb3JtYXRpb24gLz5cclxuICAgICAgICAgIDxUb3BDYXJkcyBjcmVkaXRDYXJkcz17bGlzdH0gLz5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICB7LyogPERpc3BsYXlDYXJkcyBjcmVkaXRDYXJkcz17dGhpcy5zdGF0ZS5jYXJkc30gLz4gICovfVxyXG4gIDwvZGl2PlxyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG5cclxuICB0cnkge1xyXG4gICAgY29uc3QgcHJvbWlzZXMgPSBbZ2V0Q2FyZHMoKSwgZ2V0QmVzdENhcmQoKV07XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2VzID0gYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpXHJcblxyXG5cclxuICAgIGNvbnN0IGNhcmRzUmVzcG9uc2UgPSByZXNwb25zZXNbMF0gYXMge2NhcmRzPzogQ3JlZGl0Q2FyZEludGVyZmFjZVtdLCBlcnJvcj86IGJvb2xlYW59O1xyXG4gICAgY29uc3QgYmVzdGNhcmRSZXNwb25zZSA9IHJlc3BvbnNlc1sxXSBhcyB7YmVzdGNhcmQ/OiBCZXN0Q2FyZCwgZXJyb3I/OiBib29sZWFufTtcclxuXHJcblxyXG4gICAgaWYoY2FyZHNSZXNwb25zZS5lcnJvciB8fCBiZXN0Y2FyZFJlc3BvbnNlLmVycm9yKSB0aHJvdyBuZXcgRXJyb3IoKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzIDoge1xyXG4gICAgICAgIGNhcmRzOiBjYXJkc1Jlc3BvbnNlLmNhcmRzLFxyXG4gICAgICAgIGJlc3RjYXJkOiBiZXN0Y2FyZFJlc3BvbnNlLmJlc3RjYXJkXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBjYXJkcyA6IFtdLFxyXG4gICAgICAgIGJlc3RjYXJkOiB1bmRlZmluZWRcclxuICAgICAgfSxcclxuICAgICAgcmV2YWxpZGF0ZTogMzYwMCAqIDRcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2VcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJy4uL2NvbmZpZy9heGlvcyc7XHJcbmltcG9ydCB7IENhcmQgYXMgQ3JlZGl0Q2FyZEludGVyZmFjZSB9IGZyb20gJy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZCc7XHJcbmltcG9ydCB7IEJlc3RDYXJkIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9CZXN0Q2FyZCc7XHJcbmltcG9ydCB7IENvbXBhcmVDYXJkcyB9IGZyb20gJy4uL2ludGVyZmFjZXMvQ29tcGFyZUNhcmRzJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QmVzdENhcmQgPSBhc3luYyAoKSA6IFByb21pc2U8e2Jlc3RjYXJkPzogQmVzdENhcmQsIGVycm9yPzogYm9vbGVhbn0+ID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdOb3Qgc3RhdGljJylcclxuICB0cnkge1xyXG4gICAgLy8gRmV0Y2ggYmVzdGNhcmQgZnJvbSBzZXJ2ZXJcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnL2Jlc3RjYXJkJyk7XHJcblxyXG4gICAgaWYoIXJlcy5kYXRhLmJlc3RDYXJkWzBdKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuXHJcbiAgICBjb25zdCBiZXN0Y2FyZCA9IHJlcy5kYXRhLmJlc3RDYXJkWzBdIGFzIEJlc3RDYXJkXHJcbiAgXHJcbiAgICAvLyBSZXR1cm4gYmVzdGNhcmRcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJlc3RjYXJkXHJcbiAgICB9OyAgICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3I6dHJ1ZVxyXG4gICAgfTtcclxufVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2FyZHMgPSBhc3luYyAoKSA6IFByb21pc2U8e2NhcmRzPyA6IENyZWRpdENhcmRJbnRlcmZhY2VbXSwgZXJyb3I/IDogYm9vbGVhbn0+ID0+IHtcclxuICAvLyBGZXRjaCBjYXJkcyBmcm9tIHNlcnZlclxyXG4gIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnL2NhcmRzJyk7XHJcbiAgICAgIGNvbnN0IGNhcmRzID0gcmVzLmRhdGEuY2FyZHMgYXMgQ3JlZGl0Q2FyZEludGVyZmFjZVtdOyAgICBcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY2FyZHMsXHJcbiAgICAgICAgZXJyb3I6ZmFsc2VcclxuICAgICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjp0cnVlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2FyZCA9IGFzeW5jIChuYW1lIDogc3RyaW5nKSA6IFByb21pc2U8e2NhcmQ/IDogQ3JlZGl0Q2FyZEludGVyZmFjZSwgZXJyb3I/IDogYm9vbGVhbn0+ID0+IHtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgL2NhcmQvJHtuYW1lfWApO1xyXG4gICAgY29uc3QgY2FyZCA9IHJlcy5kYXRhIGFzIENyZWRpdENhcmRJbnRlcmZhY2U7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2FyZCxcclxuICAgICAgZXJyb3I6ZmFsc2VcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yOiB0cnVlXHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb21wYXJlQ2FyZHMgPSBhc3luYyAoaWRzIDogc3RyaW5nW10pIDogUHJvbWlzZTx7Y2FyZHM/IDogQ29tcGFyZUNhcmRzW10sIGVycm9yPyA6IGJvb2xlYW59PiA9PiB7IFxyXG4gIHRyeSB7XHJcbiAgICAvLyBGZXRjaGluZyBjYXJkc1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAvY2FyZHMvY29tcGFyZT9pZHM9JHtpZHN9YCk7XHJcbiAgICBsZXQgY2FyZHMgPSByZXMuZGF0YS5jYXJkc0luZm8gYXMgQ29tcGFyZUNhcmRzW107XHJcblxyXG4gICAgLy8gQ2hlY2sgZm9yIGNhcmRzXHJcbiAgICBpZighY2FyZHMpIHRocm93IG5ldyBFcnJvcigpO1xyXG5cclxuICAgIC8vIEZpbHRlciB1bmRlZmluZWQgY2FyZHNcclxuICAgIGNhcmRzID0gY2FyZHMuZmlsdGVyKGNhcmRzSW5mbyA9PiBjYXJkc0luZm8gIT09IG51bGwpO1xyXG5cclxuICAgIC8vIFJldHVybiBjYXJkc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2FyZHMsXHJcbiAgICAgIGVycm9yOmZhbHNlXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vIEVycm9yLCByZXR1cm5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yOiB0cnVlXHJcbiAgICB9XHJcblxyXG4gIH1cclxufSIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250YWluZXIgfSBmcm9tIFwidW5zdGF0ZWQtbmV4dFwiXHJcblxyXG5mdW5jdGlvbiB1c2VDdXN0b21Ib29rKCkge1xyXG4gIGxldCBbY29tcGFyZUlkcywgc2V0Q29tcGFyZUlkc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xyXG4gIGNvbnN0IGFkZFRvQ29tcGFyZSA9IChpZCA6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgSWRzID0gWy4uLmNvbXBhcmVJZHNdO1xyXG4gICAgY29uc3QgZXhpc3RzID0gSWRzLmZpbmQoY29tcGFyZUlkID0+IGNvbXBhcmVJZCA9PT0gaWQpO1xyXG4gICAgaWYgKGV4aXN0cykgcmV0dXJuIG51bGw7XHJcbiAgICBcclxuICAgIElkcy5wdXNoKGlkKTtcclxuXHJcbiAgICBzZXRDb21wYXJlSWRzKElkcylcclxuXHJcbiAgICByZXR1cm4gSWRzO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVtb3ZlRnJvbUNvbXBhcmUgPSAoaWQgOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IElkcyA6IHN0cmluZ1tdID0gWy4uLmNvbXBhcmVJZHNdO1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gSWRzLmZpbmRJbmRleChjb21wYXJlSWRzID0+IGNvbXBhcmVJZHMgPT09IGlkKTtcclxuXHJcbiAgICBpZihpbmRleCA8IDApIHJldHVybiBudWxsO1xyXG5cclxuICAgIElkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgIHNldENvbXBhcmVJZHMoSWRzKTtcclxuXHJcbiAgICByZXR1cm4gSWRzO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tJZkNhcmRDb21wYXJlID0gKGlkIDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBJZHMgOiBzdHJpbmdbXSA9IFsuLi5jb21wYXJlSWRzXTtcclxuXHJcbiAgICByZXR1cm4gSWRzLmZpbmQoY29tcGFyZUlkcyA9PiBjb21wYXJlSWRzID09PSBpZCk7XHJcbiAgfVxyXG4gIHJldHVybiB7IGNvbXBhcmVJZHMsIGFkZFRvQ29tcGFyZSwgcmVtb3ZlRnJvbUNvbXBhcmUsIGNoZWNrSWZDYXJkQ29tcGFyZX1cclxufVxyXG5cclxubGV0IENvbnRhaW5lciA9IGNyZWF0ZUNvbnRhaW5lcih1c2VDdXN0b21Ib29rKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkJlc3RDYXJkXCI6IFwiQmVzdENhcmRfQmVzdENhcmRfXzN3RWtxXCIsXG5cdFwiYnRuXCI6IFwiQmVzdENhcmRfYnRuX19BNFZjZVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiSGVhZGVyXCI6IFwiSGVhZGVyX0hlYWRlcl9fMUJTakhcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlRleHRIZWFkZXJcIjogXCJUZXh0SGVhZGVyX1RleHRIZWFkZXJfXzFKdmhJXCIsXG5cdFwiSGVhZGluZ1RpdGxlXCI6IFwiVGV4dEhlYWRlcl9IZWFkaW5nVGl0bGVfXzNjZGdYXCIsXG5cdFwibW92ZUluUmlnaHRcIjogXCJUZXh0SGVhZGVyX21vdmVJblJpZ2h0X18ydTN5VVwiLFxuXHRcIkhlYWRpbmdEZXNjcmlwdGlvblwiOiBcIlRleHRIZWFkZXJfSGVhZGluZ0Rlc2NyaXB0aW9uX18zQi1OTVwiLFxuXHRcIm1vdmVJbkxlZnRcIjogXCJUZXh0SGVhZGVyX21vdmVJbkxlZnRfXzMxdV81XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJUb3BDYXJkc1wiOiBcIlRvcENhcmRzX1RvcENhcmRzX18zdjBqZ1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiVXBkYXRlZEluZm9ybWF0aW9uXCI6IFwiVXBkYXRlZEluZm9ybWF0aW9uX1VwZGF0ZWRJbmZvcm1hdGlvbl9fTHp1V2pcIixcblx0XCJpbWdDb250YWluZXJcIjogXCJVcGRhdGVkSW5mb3JtYXRpb25faW1nQ29udGFpbmVyX18xSFg0OFwiLFxuXHRcImNvbnRlbnRcIjogXCJVcGRhdGVkSW5mb3JtYXRpb25fY29udGVudF9fU01IYXhcIixcblx0XCJidG5cIjogXCJVcGRhdGVkSW5mb3JtYXRpb25fYnRuX18zdjJ3SVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiV2h5VXNcIjogXCJXaHlVc19XaHlVc19fMUpJdWdcIixcblx0XCJyb3dcIjogXCJXaHlVc19yb3dfXzNDOTM5XCIsXG5cdFwidGV4dFwiOiBcIldoeVVzX3RleHRfXzM0anBVXCIsXG5cdFwiaGVhZFwiOiBcIldoeVVzX2hlYWRfXzJWbnZqXCIsXG5cdFwidGl0bGVcIjogXCJXaHlVc190aXRsZV9feGY4bjJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkJ1dHRvbldoaXRlXCI6IFwiQnV0dG9uc19CdXR0b25XaGl0ZV9fMkRPZ3lcIixcblx0XCJCdXR0b25PcmFuZ2VcIjogXCJCdXR0b25zX0J1dHRvbk9yYW5nZV9fek9lbEtcIixcblx0XCJidXR0b25Ib3ZlclwiOiBcIkJ1dHRvbnNfYnV0dG9uSG92ZXJfX0xkc0tEXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJkXCI6IFwiQ3JlZGl0Y2FyZF9jYXJkX18zX0w0SVwiLFxuXHRcIklzbW9iaWxlXCI6IFwiQ3JlZGl0Y2FyZF9Jc21vYmlsZV9fM05wbmVcIixcblx0XCJJc0NvbXB1dGVyXCI6IFwiQ3JlZGl0Y2FyZF9Jc0NvbXB1dGVyX18xaTI3dFwiLFxuXHRcImNvbnRlbnRcIjogXCJDcmVkaXRjYXJkX2NvbnRlbnRfXzE4VTBxXCIsXG5cdFwic3BlY2lmaWNcIjogXCJDcmVkaXRjYXJkX3NwZWNpZmljX18xcGh1SVwiLFxuXHRcImJ1dHRvbnNcIjogXCJDcmVkaXRjYXJkX2J1dHRvbnNfX01jeDlvXCIsXG5cdFwiYW5zw7ZrQnV0dG9uXCI6IFwiQ3JlZGl0Y2FyZF9hbnNfa0J1dHRvbl9fM1F3OF9cIixcblx0XCJnb29kXCI6IFwiQ3JlZGl0Y2FyZF9nb29kX18xNTFhN1wiLFxuXHRcImJhZFwiOiBcIkNyZWRpdGNhcmRfYmFkX18xaVI2ZFwiLFxuXHRcInRvQ29tcGFyZVwiOiBcIkNyZWRpdGNhcmRfdG9Db21wYXJlX19IVERpVFwiLFxuXHRcInByb3BlcnRpZXNcIjogXCJDcmVkaXRjYXJkX3Byb3BlcnRpZXNfXzJUeW1IXCIsXG5cdFwicHJvcGVydGllXCI6IFwiQ3JlZGl0Y2FyZF9wcm9wZXJ0aWVfXzM3REZIXCIsXG5cdFwiYnRuQmFja2dyb3VuZFwiOiBcIkNyZWRpdGNhcmRfYnRuQmFja2dyb3VuZF9fMS1HR2JcIixcblx0XCJyYXRpbmdcIjogXCJDcmVkaXRjYXJkX3JhdGluZ19fMzE0Q19cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxpZ2h0XCI6IFwiUmF0aW5nX2xpZ2h0X18xTDYzblwiLFxuXHRcImRhcmtcIjogXCJSYXRpbmdfZGFya19fMmFqb3lcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkNvbnRhaW5lclwiOiBcIkNvbnRhaW5lcl9Db250YWluZXJfXzJGaVBUXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdGlwcHlqcy9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdyaWQtc3lzdGVtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bnN0YXRlZC1uZXh0XCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9