(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

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
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\Index\\Header\\BestCard\\BestCard.tsx";

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
    type: "full",
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
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\Index\\Header\\Header.tsx";
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
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\Index\\Header\\TextHeader\\TextHeader.tsx";
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
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\Index\\TopCards\\TopCards.tsx";
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
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\Index\\UpdatedInforamtion\\UpdatedInformation.tsx";

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
    type: "full",
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
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\Index\\WhyUs\\WhyUs.tsx";
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
      marginTop: 50
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

/***/ "./src/components/Ui/Buttons/ButtonBlue.tsx":
/*!**************************************************!*\
  !*** ./src/components/Ui/Buttons/ButtonBlue.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Buttons_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Buttons.module.css */ "./src/components/Ui/Buttons/Buttons.module.css");
/* harmony import */ var _Buttons_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Buttons_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\Ui\\Buttons\\ButtonBlue.tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const ButtonBlue = props => {
  return __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: props.href ? props.href : '#',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: `${(_Buttons_module_css__WEBPACK_IMPORTED_MODULE_2___default().ButtonOrange)} ${props.className} ${props.type === "outline" ? (_Buttons_module_css__WEBPACK_IMPORTED_MODULE_2___default().outlinedBlue) : props.type === "full" ? (_Buttons_module_css__WEBPACK_IMPORTED_MODULE_2___default().fullBlue) : null}`,
    onClick: props.onClick,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, props.text));
};

/* harmony default export */ __webpack_exports__["default"] = (ButtonBlue);

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
/* harmony import */ var _Buttons_ButtonBlue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Buttons/ButtonBlue */ "./src/components/Ui/Buttons/ButtonBlue.tsx");
/* harmony import */ var _context_State__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../context/State */ "./src/context/State.tsx");
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\Ui\\Creditcard\\Creditcard.tsx";
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
  }, __jsx(_Buttons_ButtonBlue__WEBPACK_IMPORTED_MODULE_4__.default, {
    type: "full",
    text: "Ans\xF6k nu!",
    href: `/Redirect?card=${card.properties._id}`,
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default()["ansökButton"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }), __jsx(_Buttons_ButtonBlue__WEBPACK_IMPORTED_MODULE_4__.default, {
    type: "outline",
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
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\Ui\\DisplayCards\\DisplayCards.tsx";

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
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\Ui\\Rating\\Rating.tsx";
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
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\context\\State.tsx";
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

/***/ "./src/hoc/FadeInSection/FadeInSection.js":
/*!************************************************!*\
  !*** ./src/hoc/FadeInSection/FadeInSection.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\hoc\\FadeInSection\\FadeInSection.js";
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\pages\\index.tsx";
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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "unstated-next":
/*!********************************!*\
  !*** external "unstated-next" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("unstated-next");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","vendors-node_modules_next_image_js","src_classes_CreditCard_ts-src_components_Ui_Buttons_ButtonWhite_tsx-src_hoc_Container_Contain-6cadcf"], function() { return __webpack_exec__("./src/pages/index.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY2xhc3Nlcy9DcmVkaXRDYXJkcy50cyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9JbmRleC9IZWFkZXIvQmVzdENhcmQvQmVzdENhcmQudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L0hlYWRlci9IZWFkZXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L0hlYWRlci9UZXh0SGVhZGVyL1RleHRIZWFkZXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L1RvcENhcmRzL1RvcENhcmRzLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9JbmRleC9VcGRhdGVkSW5mb3JhbXRpb24vVXBkYXRlZEluZm9ybWF0aW9uLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9JbmRleC9XaHlVcy9XaHlVcy50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvQnV0dG9ucy9CdXR0b25CbHVlLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9DcmVkaXRjYXJkL0NyZWRpdGNhcmQudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL0Rpc3BsYXlDYXJkcy9EaXNwbGF5Q2FyZHMudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL1JhdGluZy9SYXRpbmcudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb250ZXh0L1N0YXRlLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvaG9jL0ZhZGVJblNlY3Rpb24vRmFkZUluU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9zdGF0ZS9jb21wYXJlLnRzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L0hlYWRlci9CZXN0Q2FyZC9CZXN0Q2FyZC5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L0hlYWRlci9IZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9JbmRleC9IZWFkZXIvVGV4dEhlYWRlci9UZXh0SGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvSW5kZXgvVG9wQ2FyZHMvVG9wQ2FyZHMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9JbmRleC9VcGRhdGVkSW5mb3JhbXRpb24vVXBkYXRlZEluZm9ybWF0aW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvSW5kZXgvV2h5VXMvV2h5VXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9DcmVkaXRjYXJkL0NyZWRpdGNhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9SYXRpbmcvUmF0aW5nLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwiQHRpcHB5anMvcmVhY3RcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcInJlYWN0LWdyaWQtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJ1bnN0YXRlZC1uZXh0XCIiXSwibmFtZXMiOlsiQ3JlZGl0Q2FyZHMiLCJjb25zdHJ1Y3RvciIsImNhcmRzIiwiZ2V0Q2FyZHMiLCJCZXN0Q2FyZCIsImJlc3RjYXJkIiwic3R5bGVzIiwiaW1nIiwiZGVzY3JpcHRpb24iLCJuYW1lIiwiSGVhZGVyIiwiVGV4dEhlYWRlciIsIlRvcENhcmRzIiwiY3JlZGl0Q2FyZHMiLCJzcGxpY2UiLCJVcGRhdGVkSW5mb3JtYXRpb24iLCJXaHlVcyIsIm1hcmdpblRvcCIsIkJ1dHRvbkJsdWUiLCJwcm9wcyIsImhyZWYiLCJjbGFzc05hbWUiLCJ0eXBlIiwib25DbGljayIsInRleHQiLCJDcmVkaXRjYXJkIiwiY2FyZCIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VDb250ZXh0IiwiU3RhdGVDb250ZXh0IiwiYWRkVG9Db21wYXJlIiwiU3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJjb21wYXJlSWRzIiwicHVzaCIsInJlbW92ZUZyb21Db21wYXJlIiwiaWQiLCJpbmRleCIsImZpbmRJbmRleCIsIkNhcmQiLCJfaWQiLCJpc0NhcmRDb21wYXJlIiwiZXhpc3RzIiwiZmluZCIsInByb3BlcnRpZXMiLCJyYXRpbmciLCJtYXAiLCJwcm9wZXJ0aWUiLCJzcGVjaWZpY3MiLCJzcGVjaWZpYyIsInNwbGl0IiwiZm9udFdlaWdodCIsInJlcGxhY2UiLCJEaXNwbGF5Q2FyZHMiLCJDcmVkaXRDYXJkIiwiUmF0aW5nIiwicGFyc2VJbnQiLCJjcmVhdGVDb250ZXh0IiwiU3RhdGVQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJGYWRlSW5TZWN0aW9uIiwiaXNWaXNpYmxlIiwic2V0VmlzaWJsZSIsIlJlYWN0IiwiZG9tUmVmIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJjdXJyZW50IiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJvYnNlcnZlIiwidW5vYnNlcnZlIiwiSW5kZXhQYWdlIiwicmVuZGVyIiwibGlzdCIsImdldFN0YXRpY1Byb3BzIiwicHJvbWlzZXMiLCJnZXRCZXN0Q2FyZCIsInJlc3BvbnNlcyIsIlByb21pc2UiLCJhbGwiLCJjYXJkc1Jlc3BvbnNlIiwiYmVzdGNhcmRSZXNwb25zZSIsImVycm9yIiwiRXJyb3IiLCJ1bmRlZmluZWQiLCJyZXZhbGlkYXRlIiwidXNlQ3VzdG9tSG9vayIsInNldENvbXBhcmVJZHMiLCJJZHMiLCJjb21wYXJl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MEU7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMkMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDcmVkaXRDYXJkIH0gZnJvbSAnLi9DcmVkaXRDYXJkJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVkaXRDYXJkcyB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGNhcmRzIDogQ3JlZGl0Q2FyZFtdID0gW10pIHt9XHJcblxyXG4gIGdldENhcmRzICgpIDogQ3JlZGl0Q2FyZFtdIHtcclxuICAgIHJldHVybiB0aGlzLmNhcmRzO1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vQmVzdENhcmQubW9kdWxlLmNzcyc7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgQmVzdENhcmQgYXMgQmVzdENhcmRJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9pbnRlcmZhY2VzL0Jlc3RDYXJkJztcclxuaW1wb3J0IEJ1dHRvbldoaXRlIGZyb20gJy4uLy4uLy4uL1VpL0J1dHRvbnMvQnV0dG9uV2hpdGUnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBiZXN0Y2FyZCA6IEJlc3RDYXJkSW50ZXJmYWNlO1xyXG59XHJcblxyXG5jb25zdCBCZXN0Q2FyZCA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7YmVzdGNhcmR9KSA9PiB7XHJcbiAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5CZXN0Q2FyZH0+XHJcbiAgICAgICAgPGgzPkLDpHN0YSBrb3J0ZXQgbnU8L2gzPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXtiZXN0Y2FyZC5pbWd9XHJcbiAgICAgICAgICB3aWR0aD17MjUwfVxyXG4gICAgICAgICAgaGVpZ2h0PXsxNDB9XHJcbiAgICAgICAgICBhbHQ9XCJCw6RzdGEga3JlZGl0a29ydGV0IGp1c3QgbnUhXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiA8aDQ+e2Jlc3RjYXJkLm5hbWV9PC9oND4gKi99XHJcbiAgICAgICAgPHA+e2Jlc3RjYXJkLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8QnV0dG9uV2hpdGUgdHlwZT1cImZ1bGxcIiB0ZXh0PVwiQW5zw7ZrIG51IVwiIGhyZWY9e2AvUmVkaXJlY3Q/Y2FyZD0ke2Jlc3RjYXJkLm5hbWV9YH0gY2xhc3NOYW1lPXtzdHlsZXMuYnRufSAvPlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCZXN0Q2FyZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uLy4uL2hvYy9Db250YWluZXIvQ29udGFpbmVyJztcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ncmlkLXN5c3RlbSc7XHJcbmltcG9ydCBUZXh0SGVhZGVyIGZyb20gJy4vVGV4dEhlYWRlci9UZXh0SGVhZGVyJztcclxuaW1wb3J0IEJlc3RDYXJkIGZyb20gJy4vQmVzdENhcmQvQmVzdENhcmQnO1xyXG5pbXBvcnQgeyBCZXN0Q2FyZCBhcyBCZXN0Q2FyZEludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvQmVzdENhcmQnO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgYmVzdGNhcmQgOiBCZXN0Q2FyZEludGVyZmFjZVxyXG59XHJcblxyXG5jb25zdCBIZWFkZXIgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoe2Jlc3RjYXJkfSkgOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBpZD17c3R5bGVzLkhlYWRlcn0+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8Um93IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSBsZz17N30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0SGVhZGVyIC8+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MTJ9IGxnPXs1fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJlc3RDYXJkIGJlc3RjYXJkPXtiZXN0Y2FyZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RleHRIZWFkZXIubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBUZXh0SGVhZGVyIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKSA6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGlkPXtzdHlsZXMuVGV4dEhlYWRlcn0+XHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLkhlYWRpbmdUaXRsZX0+XHJcbiAgICAgICAgICAgIDxoMT5WaSBoasOkbHBlciBkaWcgYXR0IGhpdHRhIGRldCBiw6RzdGEga29ydGV0IGbDtnIganVzdCBkaWcuLi48L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5IZWFkaW5nRGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICA8cD5zdXNjaXBpdCBxdWFzIHNhZXBlIGJsYW5kaXRpaXMsIG9iY2FlY2F0aSBldmVuaWV0IHJhdGlvbmUgYSBtb2RpIGNvbnNlY3RldHVyIHNpdCBlb3MgZWFxdWUgZG9sb3JpYnVzIGRvbG9yZT88L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbjwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0SGVhZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENyZWRpdENhcmRzIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9DcmVkaXRDYXJkcyc7XHJcbmltcG9ydCBEaXNwbGF5Q2FyZHMgZnJvbSAnLi4vLi4vVWkvRGlzcGxheUNhcmRzL0Rpc3BsYXlDYXJkcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ub3BDYXJkcy5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IFRvcENhcmRzIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8e2NyZWRpdENhcmRzIDogQ3JlZGl0Q2FyZHN9PiA9ICh7Y3JlZGl0Q2FyZHN9KSA6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IGNhcmRzID0gY3JlZGl0Q2FyZHMuY2FyZHMuc3BsaWNlKDIsIDUpXHJcbiAgICByZXR1cm4gPGRpdiBpZD17c3R5bGVzLlRvcENhcmRzfT4gICAgXHJcbiAgICAgICAgPGgzPlbDpXJhIHBvcHVsw6RyYXN0ZSBrcmVkaXRrb3J0PC9oMz5cclxuICAgICAgICA8RGlzcGxheUNhcmRzIGNyZWRpdENhcmRzPXtjYXJkc30gLz5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BDYXJkczsiLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vVXBkYXRlZEluZm9ybWF0aW9uLm1vZHVsZS5jc3MnXHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi8uLi9ob2MvQ29udGFpbmVyL0NvbnRhaW5lcic7XHJcbmltcG9ydCB7Um93ICwgQ29sfSBmcm9tICdyZWFjdC1ncmlkLXN5c3RlbSc7XHJcbmltcG9ydCBCdXR0b25XaGl0ZSBmcm9tICcuLi8uLi9VaS9CdXR0b25zL0J1dHRvbldoaXRlJztcclxuXHJcblxyXG5jb25zdCBVcGRhdGVkSW5mb3JtYXRpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5VcGRhdGVkSW5mb3JtYXRpb259PlxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPGRpdiBpZD17c3R5bGVzLmNvbnRlbnR9PiAgXHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPENvbCBtZD17MTJ9IGxnPXs2fT5cclxuICAgICAgICAgIDxoND5BbGx0aWQgdXBkYXRlcmF0PC9oND5cclxuICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEaWduaXNzaW1vcyB2ZXJvIGNvbnNlY3RldHVyIHZvbHVwdGF0dW0gY3VtPyBMYWJvcmUgc3VzY2lwaXQgbm9iaXMgY3VwaWRpdGF0ZSBtYWlvcmVzIGF0IGRlbGVuaXRpIG5lc2NpdW50IG9iY2FlY2F0aSByZXBlbGxlbmR1cyBtaW5pbWEgcXVpLCBxdWlkZW0gZXhlcmNpdGF0aW9uZW0gZXhjZXB0dXJpIGVsaWdlbmRpIG5vbiE8L3A+XHJcbiAgICAgICAgICA8QnV0dG9uV2hpdGUgdHlwZT1cImZ1bGxcIiBocmVmPVwiL2tvcnRcIiB0ZXh0PVwiVXRmb3Jza2Ega29ydFwiIGNsYXNzTmFtZT17c3R5bGVzLmJ0bn0gLz4gXHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgPENvbCBtZD17MTJ9IGxnPXs2fT5cclxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuaW1nQ29udGFpbmVyfT4gIFxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgIGhlaWdodD17NzAwfVxyXG4gICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3VwZGF0ZWQuc3ZnXCJcclxuICAgICAgICAgICAgaWQ9e3N0eWxlcy5JbWd9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICAgey8qIDxMaW5rIGhyZWY9XCIva29ydC9hbGxhLWtyZWRpdGtvcnRcIj5cclxuICAgICAgPGE+VXRmb3Jza2Ega3JlZGl0a29ydDwvYT5cclxuICAgIDwvTGluaz4gKi99XHJcbiAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZWRJbmZvcm1hdGlvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vV2h5VXMubW9kdWxlLmNzcyc7XHJcblxyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uLy4uL2hvYy9Db250YWluZXIvQ29udGFpbmVyJztcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ncmlkLXN5c3RlbSc7XHJcbmltcG9ydCBGYWRlSW5TZWN0aW9uIGZyb20gJy4uLy4uLy4uL2hvYy9GYWRlSW5TZWN0aW9uL0ZhZGVJblNlY3Rpb24nO1xyXG5cclxuXHJcbmNvbnN0IFdoeVVzIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKSA6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGlkPXtzdHlsZXMuV2h5VXN9PlxyXG4gICAgPEZhZGVJblNlY3Rpb24+ICAgICAgICBcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8aDI+SHVyIGthbiB2aSBoasOkbHBhIGRpZz88L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICA8Um93IGFsaWduPVwiZW5kXCIganVzdGlmeT1cImVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbW9uZXktY2hlY2tcIj48L2k+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+PGI+T3BhcnRpc2thIGrDpG1mw7ZyZWxzZXI8L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUHJhZXNlbnRpdW0sPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbW9uZXktY2hlY2tcIj48L2k+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+PGI+T3BhcnRpc2thIGrDpG1mw7ZyZWxzZXI8L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUHJhZXNlbnRpdW0sPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tb25leS1jaGVja1wiPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT48Yj5PcGFydGlza2EgasOkbWbDtnJlbHNlcjwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUHJhZXNlbnRpdW0sPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7bWFyZ2luVG9wOjUwfX0gYWxpZ249XCJlbmRcIiBqdXN0aWZ5PVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tb25leS1jaGVja1wiPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT48Yj5PcGFydGlza2EgasOkbWbDtnJlbHNlcjwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQcmFlc2VudGl1bSw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tb25leS1jaGVja1wiPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT48Yj5PcGFydGlza2EgasOkbWbDtnJlbHNlcjwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQcmFlc2VudGl1bSw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGkgY2xhc3NOYW1lPVwiZmFzIGZhLW1vbmV5LWNoZWNrXCI+PC9pPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PjxiPk9wYXJ0aXNrYSBqw6RtZsO2cmVsc2VyPC9iPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQcmFlc2VudGl1bSw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICA8Um93IGFsaWduPVwiZW5kXCIganVzdGlmeT1cImVuZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlYWR9PGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfTxkaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT48Yj5PcGFydGlza2EgasOkbWbDtnJlbHNlcjwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2RpdlxyXG4gICAgICAgICAgICAgICAgPENvbCBzbT17NH0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPENvbCBzbT17NH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZH08ZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgc209ezR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlYWR9PGRpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+PGI+T3BhcnRpc2thIGrDpG1mw7ZyZWxzZXI8L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9GYWRlSW5TZWN0aW9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2h5VXM7IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbnMubW9kdWxlLmNzcyc7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgaHJlZj86IHN0cmluZztcclxuICBvbkNsaWNrPyA6ICgpID0+IHZvaWQ7XHJcbiAgY2xhc3NOYW1lPyA6IHN0cmluZztcclxuICB0eXBlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbkJsdWUgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgcmV0dXJuIDxMaW5rIGhyZWY9e3Byb3BzLmhyZWYgPyBwcm9wcy5ocmVmIDogJyMnfT5cclxuICAgIDxhIGNsYXNzTmFtZT17YCR7c3R5bGVzLkJ1dHRvbk9yYW5nZX0gJHtwcm9wcy5jbGFzc05hbWV9ICR7cHJvcHMudHlwZSA9PT0gXCJvdXRsaW5lXCIgPyBzdHlsZXMub3V0bGluZWRCbHVlIDogcHJvcHMudHlwZSA9PT0gXCJmdWxsXCIgPyBzdHlsZXMuZnVsbEJsdWUgOiBudWxsfWB9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9PlxyXG4gICAgICAgIHtwcm9wcy50ZXh0fVxyXG4gICAgPC9hPlxyXG4gIDwvTGluaz5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uQmx1ZTsiLCJpbXBvcnQgUmVhY3QsIHt1c2VDb250ZXh0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9DcmVkaXRjYXJkLm1vZHVsZS5jc3MnXHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBSYXRpbmcgZnJvbSAnLi4vUmF0aW5nL1JhdGluZyc7XHJcbmltcG9ydCB7IENyZWRpdENhcmQgfSBmcm9tICcuLi8uLi8uLi9jbGFzc2VzL0NyZWRpdENhcmQnO1xyXG5pbXBvcnQgVGlwcHkgZnJvbSAnQHRpcHB5anMvcmVhY3QnO1xyXG5pbXBvcnQgJ3RpcHB5LmpzL2Rpc3QvdGlwcHkuY3NzJztcclxuaW1wb3J0IEJ1dHRvbk9yYW5nZSBmcm9tICcuLi9CdXR0b25zL0J1dHRvbkJsdWUnO1xyXG5pbXBvcnQge0NhcmQgYXMgQ3JlZGl0Q2FyZEludGVyZmFjZX0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9DcmVkaXRDYXJkJ1xyXG5pbXBvcnQgeyBTdGF0ZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0L1N0YXRlJztcclxuXHJcblxyXG5cclxuY29uc3QgQ3JlZGl0Y2FyZCA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PHtjYXJkIDogQ3JlZGl0Q2FyZH0+ID0gKHtjYXJkfSkgPT4ge1xyXG5cclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQ8YW55PihTdGF0ZUNvbnRleHQpXHJcbiAgICAvLyBjb25zdCBpc0NhcmRDb21wYXJlID0gY29tcGFyZVN0YXRlLmNoZWNrSWZDYXJkQ29tcGFyZShjYXJkLnByb3BlcnRpZXMuX2lkKVxyXG5cclxuXHJcbiAgICBjb25zdCBhZGRUb0NvbXBhcmUgPSAoY2FyZCA6IENyZWRpdENhcmRJbnRlcmZhY2UpID0+IHtcclxuICAgICAgICBsZXQgU3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XHJcbiAgICAgICAgU3RhdGUuY29tcGFyZUlkcy5wdXNoKGNhcmQpXHJcbiAgICAgICAgc2V0U3RhdGUoU3RhdGUpXHJcbiAgICB9ICAgXHJcblxyXG4gICAgY29uc3QgcmVtb3ZlRnJvbUNvbXBhcmUgPSAoaWQgOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBsZXQgU3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBTdGF0ZS5jb21wYXJlSWRzLmZpbmRJbmRleCgoQ2FyZCA6IENyZWRpdENhcmRJbnRlcmZhY2UpID0+IENhcmQuX2lkID09PSBpZClcclxuICAgICAgICBpZihpbmRleCA8IDApIHJldHVybjtcclxuICAgICAgICBTdGF0ZS5jb21wYXJlSWRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgc2V0U3RhdGUoU3RhdGUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaXNDYXJkQ29tcGFyZSA9IChpZCA6IHN0cmluZykgOiBCb29sZWFuID0+IHtcclxuICAgICAgICBjb25zdCBleGlzdHMgPSBzdGF0ZS5jb21wYXJlSWRzLmZpbmQoKENhcmQgOiBDcmVkaXRDYXJkSW50ZXJmYWNlKSA9PiBDYXJkLl9pZCA9PT0gaWQpXHJcblxyXG4gICAgICAgIHJldHVybiBleGlzdHMgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXMuSXNtb2JpbGV9PntjYXJkLnByb3BlcnRpZXMubmFtZX08L2g0PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5Jc21vYmlsZX0+PFJhdGluZyBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmd9IHJhdGluZz17Y2FyZC5wcm9wZXJ0aWVzLnJhdGluZ30vPjwvc3Bhbj5cclxuICAgICAgICAgICAgPGltZyBhbHQ9e2BrcmVkaXRrb3J0ICR7Y2FyZC5wcm9wZXJ0aWVzLm5hbWV9YH0gc3JjPXtjYXJkLnByb3BlcnRpZXMuaW1nfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5Jc0NvbXB1dGVyfT57Y2FyZC5wcm9wZXJ0aWVzLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLklzQ29tcHV0ZXJ9PjxSYXRpbmcgcmF0aW5nPXtjYXJkLnByb3BlcnRpZXMucmF0aW5nfSAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvcGVydGllc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcmQucHJvcGVydGllcy5wcm9wZXJ0aWVzLm1hcChwcm9wZXJ0aWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHByb3BlcnRpZS50eXBlID09PSAnR09PRCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvcGVydGllfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmdvb2R9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGVjay1jaXJjbGVcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cHJvcGVydGllLnByb3BlcnRpZX0+e3Byb3BlcnRpZS5wcm9wZXJ0aWV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvcGVydGllfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJhZH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzLWNpcmNsZVwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwcm9wZXJ0aWUucHJvcGVydGllfT57cHJvcGVydGllLnByb3BlcnRpZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3BlY2lmaWN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FyZC5wcm9wZXJ0aWVzLnNwZWNpZmljcy5tYXAoc3BlY2lmaWMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gc3BlY2lmaWMudGV4dC5zcGxpdCgnOiAnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50IGtleT17c3BlY2lmaWMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkJ319Pnt0ZXh0WzBdfTo8L3NwYW4+IDxzcGFuPnt0ZXh0WzFdfTwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idG5CYWNrZ3JvdW5kfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbk9yYW5nZSB0eXBlPVwiZnVsbFwiIHRleHQ9XCJBbnPDtmsgbnUhXCIgaHJlZj17YC9SZWRpcmVjdD9jYXJkPSR7Y2FyZC5wcm9wZXJ0aWVzLl9pZH1gfSBjbGFzc05hbWU9e3N0eWxlcy5hbnPDtmtCdXR0b259IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25PcmFuZ2UgdHlwZT1cIm91dGxpbmVcIiB0ZXh0PVwiTWVyIGluZm9ybWF0aW9uXCIgaHJlZj17YC9rb3J0LyR7Y2FyZC5wcm9wZXJ0aWVzLl9pZC5yZXBsYWNlKC8oXFxzKS9nLCAnLScpfWB9IGNsYXNzTmFtZT17c3R5bGVzLmFuc8O2a0J1dHRvbn0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFRpcHB5IGNvbnRlbnQ9eyFpc0NhcmRDb21wYXJlKGNhcmQucHJvcGVydGllcy5faWQpID8gJ0zDpGdnIHRpbGwga3JlZGl0a29ydCBpIGrDpG1mw7ZyZWxzZScgOiAnVGEgYm9ydCBrcmVkaXRrb3J0IHVyIGrDpG1mw7ZyZWxzZSd9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBpc0NhcmRDb21wYXJlKGNhcmQucHJvcGVydGllcy5faWQpID8gcmVtb3ZlRnJvbUNvbXBhcmUoY2FyZC5wcm9wZXJ0aWVzLl9pZCkgOiBhZGRUb0NvbXBhcmUoY2FyZC5wcm9wZXJ0aWVzKX0gY2xhc3NOYW1lPXtzdHlsZXMudG9Db21wYXJlfT5cclxuICAgICAgICAgICAgICAgICAgICAge2lzQ2FyZENvbXBhcmUoY2FyZC5wcm9wZXJ0aWVzLl9pZCkgPyA8aSBjbGFzc05hbWU9XCJmYXIgZmEtdGltZXMtY2lyY2xlXCI+PC9pPiA6IDxpIGNsYXNzTmFtZT1cImZhcyBmYS1maWxlLWltcG9ydFwiPjwvaT59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9UaXBweT5cclxuICAgICAgIDwvZGl2PlxyXG4gICA8L1JlYWN0LkZyYWdtZW50PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVkaXRjYXJkOyIsImltcG9ydCB7IENyZWRpdENhcmQgfSBmcm9tICcuLi8uLi8uLi9jbGFzc2VzL0NyZWRpdENhcmQnO1xyXG5pbXBvcnQgQ3JlZGl0Y2FyZCBmcm9tICcuLi9DcmVkaXRjYXJkL0NyZWRpdGNhcmQnO1xyXG5pbXBvcnQgQ29tcGFyZUNvbnRhaW5lciBmcm9tICcuLi8uLi8uLi9zdGF0ZS9jb21wYXJlJztcclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjcmVkaXRDYXJkczogQ3JlZGl0Q2FyZFtdO1xyXG59XHJcblxyXG5jb25zdCBEaXNwbGF5Q2FyZHM6IFJlYWN0LkZDPFByb3BzPiA9ICh7Y3JlZGl0Q2FyZHN9KSA6IGFueSA9PiB7XHJcbiAgcmV0dXJuIGNyZWRpdENhcmRzLm1hcChDcmVkaXRDYXJkID0+IHtcclxuICAgIHJldHVybiA8Q29tcGFyZUNvbnRhaW5lci5Qcm92aWRlcj5cclxuICAgICAgPENyZWRpdGNhcmQgY2FyZD17Q3JlZGl0Q2FyZH0gLz5cclxuICAgIDwvQ29tcGFyZUNvbnRhaW5lci5Qcm92aWRlcj5cclxuICB9KVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERpc3BsYXlDYXJkczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vUmF0aW5nLm1vZHVsZS5jc3MnXHJcblxyXG5jb25zdCBSYXRpbmcgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDx7cmF0aW5nIDogc3RyaW5nLCBjbGFzc05hbWU/IDogc3RyaW5nfT4gPSAoe3JhdGluZywgY2xhc3NOYW1lfSkgPT4ge1xyXG4gICAgbGV0IFJhdGluZztcclxuICAgIHN3aXRjaCAgKHBhcnNlSW50KHJhdGluZykpIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIFJhdGluZyA9IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya30+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIFJhdGluZyA9IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgUmF0aW5nID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICBSYXRpbmcgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICBSYXRpbmcgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgUmF0aW5nID0gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya30+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya30+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgICAgICByZXR1cm4gIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PntSYXRpbmd9PC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYXRpbmc7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIGNyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDYXJkIGFzIENyZWRpdENhcmRJbnRlcmZhY2V9IGZyb20gJy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZCc7XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gIGNhcmRzOiBDcmVkaXRDYXJkSW50ZXJmYWNlW107XHJcbiAgY29tcGFyZUlkczogQ3JlZGl0Q2FyZEludGVyZmFjZVtdOyBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pXHJcblxyXG5leHBvcnQgY29uc3QgU3RhdGVQcm92aWRlciA6IFJlYWN0LkZDID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPFN0YXRlPih7XHJcbiAgICBjYXJkczpbXSxcclxuICAgIGNvbXBhcmVJZHM6W11cclxuICB9KVxyXG4gIHJldHVybiA8U3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbc3RhdGUsIHNldFN0YXRlXX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gIDwvU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG59XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL0ZhZGVJblNlY3Rpb24ubW9kdWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBGYWRlSW5TZWN0aW9uKHByb3BzKSB7XHJcbiAgICBjb25zdCBbaXNWaXNpYmxlLCBzZXRWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgaWYoaXNWaXNpYmxlKSByZXR1cm5cclxuICAgICAgICBpZihkb21SZWYuY3VycmVudC5jbGFzc05hbWUgPT09ICdmYWRlLWluLXNlY3Rpb25pcy12aXNpYmxlJykgcmV0dXJuXHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldFZpc2libGUoZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2BmYWRlLWluLXNlY3Rpb24gJHtpc1Zpc2libGUgPyAnaXMtdmlzaWJsZScgOiAnJ31gfVxyXG4gICAgICAgIHJlZj17ZG9tUmVmfVxyXG4gICAgICA+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBGYWRlSW5TZWN0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENyZWRpdENhcmQgfSBmcm9tICcuLi9jbGFzc2VzL0NyZWRpdENhcmQnXHJcbmltcG9ydCB7IENhcmQgYXMgQ3JlZGl0Q2FyZEludGVyZmFjZSB9IGZyb20gJy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9JbmRleC9IZWFkZXIvSGVhZGVyJztcclxuaW1wb3J0IFdoeVVzIGZyb20gJy4uL2NvbXBvbmVudHMvSW5kZXgvV2h5VXMvV2h5VXMnO1xyXG5pbXBvcnQgVG9wQ2FyZHMgZnJvbSAnLi4vY29tcG9uZW50cy9JbmRleC9Ub3BDYXJkcy9Ub3BDYXJkcyc7XHJcbmltcG9ydCB7IEJlc3RDYXJkIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9CZXN0Q2FyZCc7XHJcbmltcG9ydCB7IGdldEJlc3RDYXJkLCBnZXRDYXJkcyB9IGZyb20gJy4uL3Jlc291cmNlcy9DYXJkcydcclxuaW1wb3J0IHsgQ3JlZGl0Q2FyZHMgfSBmcm9tICcuLi9jbGFzc2VzL0NyZWRpdENhcmRzJztcclxuaW1wb3J0IFVwZGF0ZWRJbmZvcm1hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0luZGV4L1VwZGF0ZWRJbmZvcmFtdGlvbi9VcGRhdGVkSW5mb3JtYXRpb24nO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gIGNhcmRzIDogQ3JlZGl0Q2FyZHM7XHJcbn1cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGxvYWRpbmcgOiBib29sZWFuO1xyXG4gICAgY29tcGFyZUlkcyA6IHN0cmluZ1tdO1xyXG4gICAgY2FyZHM6IENyZWRpdENhcmRJbnRlcmZhY2VbXTtcclxuICAgIGJlc3RjYXJkOiBCZXN0Q2FyZDtcclxufVxyXG5cclxuY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTdGF0ZT4gIHtcclxuICByZW5kZXIgKCkge1xyXG4gICAgY29uc3QgY2FyZHMgPSB0aGlzLnByb3BzLmNhcmRzLm1hcChjYXJkID0+IG5ldyBDcmVkaXRDYXJkKGNhcmQpKTtcclxuICAgIGNvbnN0IGxpc3QgPSBuZXcgQ3JlZGl0Q2FyZHMoY2FyZHMpO1xyXG4gICAgY29uc3QgYmVzdGNhcmQgPSB0aGlzLnByb3BzLmJlc3RjYXJkXHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPmtyZWRpdGtvcnRza29sbC5jb208L3RpdGxlPlxyXG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiS3JlZGl0a29ydHNrb2xsLmNvbSBqw6RtZsO2ciBvbGlrYSBrcmVkaXRrb3J0IGbDtnIgYXR0IGhpdHRhIGRldCBiw6RzdGEga3JlZGlrb3J0ZXQgZsO2ciBkaWcuIErDpG1mw7ZyIGtyZWRpdGtvcnQgc29tIFJlbWVtYmVyIGZsZXggb2NoIE5vcndlZ2lhblwiIC8+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwiaW5kZXgsIGZvbGxvd1wiIC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICAgIDxIZWFkZXIgYmVzdGNhcmQ9e2Jlc3RjYXJkfSAvPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICAgIDxXaHlVcyAvPlxyXG4gICAgICAgICAgPFVwZGF0ZWRJbmZvcm1hdGlvbiAvPlxyXG4gICAgICAgICAgPFRvcENhcmRzIGNyZWRpdENhcmRzPXtsaXN0fSAvPlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIHsvKiA8RGlzcGxheUNhcmRzIGNyZWRpdENhcmRzPXt0aGlzLnN0YXRlLmNhcmRzfSAvPiAgKi99XHJcbiAgPC9kaXY+XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwcm9taXNlcyA9IFtnZXRDYXJkcygpLCBnZXRCZXN0Q2FyZCgpXTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZXMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcclxuXHJcblxyXG4gICAgY29uc3QgY2FyZHNSZXNwb25zZSA9IHJlc3BvbnNlc1swXSBhcyB7Y2FyZHM/OiBDcmVkaXRDYXJkSW50ZXJmYWNlW10sIGVycm9yPzogYm9vbGVhbn07XHJcbiAgICBjb25zdCBiZXN0Y2FyZFJlc3BvbnNlID0gcmVzcG9uc2VzWzFdIGFzIHtiZXN0Y2FyZD86IEJlc3RDYXJkLCBlcnJvcj86IGJvb2xlYW59O1xyXG5cclxuXHJcbiAgICBpZihjYXJkc1Jlc3BvbnNlLmVycm9yIHx8IGJlc3RjYXJkUmVzcG9uc2UuZXJyb3IpIHRocm93IG5ldyBFcnJvcigpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHMgOiB7XHJcbiAgICAgICAgY2FyZHM6IGNhcmRzUmVzcG9uc2UuY2FyZHMsXHJcbiAgICAgICAgYmVzdGNhcmQ6IGJlc3RjYXJkUmVzcG9uc2UuYmVzdGNhcmRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIGNhcmRzIDogW10sXHJcbiAgICAgICAgYmVzdGNhcmQ6IHVuZGVmaW5lZFxyXG4gICAgICB9LFxyXG4gICAgICByZXZhbGlkYXRlOiAzNjAwICogNFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGFpbmVyIH0gZnJvbSBcInVuc3RhdGVkLW5leHRcIlxyXG5cclxuZnVuY3Rpb24gdXNlQ3VzdG9tSG9vaygpIHtcclxuICBsZXQgW2NvbXBhcmVJZHMsIHNldENvbXBhcmVJZHNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuICBjb25zdCBhZGRUb0NvbXBhcmUgPSAoaWQgOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IElkcyA9IFsuLi5jb21wYXJlSWRzXTtcclxuICAgIGNvbnN0IGV4aXN0cyA9IElkcy5maW5kKGNvbXBhcmVJZCA9PiBjb21wYXJlSWQgPT09IGlkKTtcclxuICAgIGlmIChleGlzdHMpIHJldHVybiBudWxsO1xyXG4gICAgXHJcbiAgICBJZHMucHVzaChpZCk7XHJcblxyXG4gICAgc2V0Q29tcGFyZUlkcyhJZHMpXHJcblxyXG4gICAgcmV0dXJuIElkcztcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZUZyb21Db21wYXJlID0gKGlkIDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBJZHMgOiBzdHJpbmdbXSA9IFsuLi5jb21wYXJlSWRzXTtcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IElkcy5maW5kSW5kZXgoY29tcGFyZUlkcyA9PiBjb21wYXJlSWRzID09PSBpZCk7XHJcblxyXG4gICAgaWYoaW5kZXggPCAwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBJZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICBzZXRDb21wYXJlSWRzKElkcyk7XHJcblxyXG4gICAgcmV0dXJuIElkcztcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrSWZDYXJkQ29tcGFyZSA9IChpZCA6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgSWRzIDogc3RyaW5nW10gPSBbLi4uY29tcGFyZUlkc107XHJcblxyXG4gICAgcmV0dXJuIElkcy5maW5kKGNvbXBhcmVJZHMgPT4gY29tcGFyZUlkcyA9PT0gaWQpO1xyXG4gIH1cclxuICByZXR1cm4geyBjb21wYXJlSWRzLCBhZGRUb0NvbXBhcmUsIHJlbW92ZUZyb21Db21wYXJlLCBjaGVja0lmQ2FyZENvbXBhcmV9XHJcbn1cclxuXHJcbmxldCBDb250YWluZXIgPSBjcmVhdGVDb250YWluZXIodXNlQ3VzdG9tSG9vaylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJCZXN0Q2FyZFwiOiBcIkJlc3RDYXJkX0Jlc3RDYXJkX18zd0VrcVwiLFxuXHRcImJ0blwiOiBcIkJlc3RDYXJkX2J0bl9fQTRWY2VcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkhlYWRlclwiOiBcIkhlYWRlcl9IZWFkZXJfXzFCU2pIXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJUZXh0SGVhZGVyXCI6IFwiVGV4dEhlYWRlcl9UZXh0SGVhZGVyX18xSnZoSVwiLFxuXHRcIkhlYWRpbmdUaXRsZVwiOiBcIlRleHRIZWFkZXJfSGVhZGluZ1RpdGxlX18zY2RnWFwiLFxuXHRcIm1vdmVJblJpZ2h0XCI6IFwiVGV4dEhlYWRlcl9tb3ZlSW5SaWdodF9fMnUzeVVcIixcblx0XCJIZWFkaW5nRGVzY3JpcHRpb25cIjogXCJUZXh0SGVhZGVyX0hlYWRpbmdEZXNjcmlwdGlvbl9fM0ItTk1cIixcblx0XCJtb3ZlSW5MZWZ0XCI6IFwiVGV4dEhlYWRlcl9tb3ZlSW5MZWZ0X18zMXVfNVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiVG9wQ2FyZHNcIjogXCJUb3BDYXJkc19Ub3BDYXJkc19fM3YwamdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlVwZGF0ZWRJbmZvcm1hdGlvblwiOiBcIlVwZGF0ZWRJbmZvcm1hdGlvbl9VcGRhdGVkSW5mb3JtYXRpb25fX0x6dVdqXCIsXG5cdFwiaW1nQ29udGFpbmVyXCI6IFwiVXBkYXRlZEluZm9ybWF0aW9uX2ltZ0NvbnRhaW5lcl9fMUhYNDhcIixcblx0XCJjb250ZW50XCI6IFwiVXBkYXRlZEluZm9ybWF0aW9uX2NvbnRlbnRfX1NNSGF4XCIsXG5cdFwiYnRuXCI6IFwiVXBkYXRlZEluZm9ybWF0aW9uX2J0bl9fM3Yyd0lcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIldoeVVzXCI6IFwiV2h5VXNfV2h5VXNfXzFKSXVnXCIsXG5cdFwicm93XCI6IFwiV2h5VXNfcm93X18zQzkzOVwiLFxuXHRcInRleHRcIjogXCJXaHlVc190ZXh0X18zNGpwVVwiLFxuXHRcImhlYWRcIjogXCJXaHlVc19oZWFkX18yVm52alwiLFxuXHRcInRpdGxlXCI6IFwiV2h5VXNfdGl0bGVfX3hmOG4yXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXJkXCI6IFwiQ3JlZGl0Y2FyZF9jYXJkX18zX0w0SVwiLFxuXHRcIklzbW9iaWxlXCI6IFwiQ3JlZGl0Y2FyZF9Jc21vYmlsZV9fM05wbmVcIixcblx0XCJJc0NvbXB1dGVyXCI6IFwiQ3JlZGl0Y2FyZF9Jc0NvbXB1dGVyX18xaTI3dFwiLFxuXHRcImNvbnRlbnRcIjogXCJDcmVkaXRjYXJkX2NvbnRlbnRfXzE4VTBxXCIsXG5cdFwic3BlY2lmaWNcIjogXCJDcmVkaXRjYXJkX3NwZWNpZmljX18xcGh1SVwiLFxuXHRcImJ1dHRvbnNcIjogXCJDcmVkaXRjYXJkX2J1dHRvbnNfX01jeDlvXCIsXG5cdFwiYW5zw7ZrQnV0dG9uXCI6IFwiQ3JlZGl0Y2FyZF9hbnNfa0J1dHRvbl9fM1F3OF9cIixcblx0XCJnb29kXCI6IFwiQ3JlZGl0Y2FyZF9nb29kX18xNTFhN1wiLFxuXHRcImJhZFwiOiBcIkNyZWRpdGNhcmRfYmFkX18xaVI2ZFwiLFxuXHRcInRvQ29tcGFyZVwiOiBcIkNyZWRpdGNhcmRfdG9Db21wYXJlX19IVERpVFwiLFxuXHRcInByb3BlcnRpZXNcIjogXCJDcmVkaXRjYXJkX3Byb3BlcnRpZXNfXzJUeW1IXCIsXG5cdFwicHJvcGVydGllXCI6IFwiQ3JlZGl0Y2FyZF9wcm9wZXJ0aWVfXzM3REZIXCIsXG5cdFwiYnRuQmFja2dyb3VuZFwiOiBcIkNyZWRpdGNhcmRfYnRuQmFja2dyb3VuZF9fMS1HR2JcIixcblx0XCJyYXRpbmdcIjogXCJDcmVkaXRjYXJkX3JhdGluZ19fMzE0Q19cIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxpZ2h0XCI6IFwiUmF0aW5nX2xpZ2h0X18xTDYzblwiLFxuXHRcImRhcmtcIjogXCJSYXRpbmdfZGFya19fMmFqb3lcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB0aXBweWpzL3JlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ncmlkLXN5c3RlbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuc3RhdGVkLW5leHRcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=