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
var _jsxFileName = "D:\\kredit\\client\\src\\components\\Index\\Header\\BestCard\\BestCard.tsx";

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
var _jsxFileName = "D:\\kredit\\client\\src\\components\\Index\\Header\\Header.tsx";
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
var _jsxFileName = "D:\\kredit\\client\\src\\components\\Index\\Header\\TextHeader\\TextHeader.tsx";
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
var _jsxFileName = "D:\\kredit\\client\\src\\components\\Index\\TopCards\\TopCards.tsx";
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
var _jsxFileName = "D:\\kredit\\client\\src\\components\\Index\\UpdatedInforamtion\\UpdatedInformation.tsx";

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
var _jsxFileName = "D:\\kredit\\client\\src\\components\\Index\\WhyUs\\WhyUs.tsx";
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
var _jsxFileName = "D:\\kredit\\client\\src\\components\\Ui\\Buttons\\ButtonOrange.tsx";

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
var _jsxFileName = "D:\\kredit\\client\\src\\components\\Ui\\Creditcard\\Creditcard.tsx";
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
var _jsxFileName = "D:\\kredit\\client\\src\\components\\Ui\\DisplayCards\\DisplayCards.tsx";

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
var _jsxFileName = "D:\\kredit\\client\\src\\components\\Ui\\Rating\\Rating.tsx";
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
var _jsxFileName = "D:\\kredit\\client\\src\\context\\State.tsx";
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
var _jsxFileName = "D:\\kredit\\client\\src\\hoc\\FadeInSection\\FadeInSection.js";
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
var _jsxFileName = "D:\\kredit\\client\\src\\pages\\index.tsx";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY2xhc3Nlcy9DcmVkaXRDYXJkcy50cyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9JbmRleC9IZWFkZXIvQmVzdENhcmQvQmVzdENhcmQudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L0hlYWRlci9IZWFkZXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L0hlYWRlci9UZXh0SGVhZGVyL1RleHRIZWFkZXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L1RvcENhcmRzL1RvcENhcmRzLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9JbmRleC9VcGRhdGVkSW5mb3JhbXRpb24vVXBkYXRlZEluZm9ybWF0aW9uLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9JbmRleC9XaHlVcy9XaHlVcy50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvQnV0dG9ucy9CdXR0b25PcmFuZ2UudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL0NyZWRpdGNhcmQvQ3JlZGl0Y2FyZC50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvRGlzcGxheUNhcmRzL0Rpc3BsYXlDYXJkcy50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvUmF0aW5nL1JhdGluZy50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbnRleHQvU3RhdGUudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9ob2MvRmFkZUluU2VjdGlvbi9GYWRlSW5TZWN0aW9uLmpzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL3N0YXRlL2NvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvSW5kZXgvSGVhZGVyL0Jlc3RDYXJkL0Jlc3RDYXJkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvSW5kZXgvSGVhZGVyL0hlYWRlci5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L0hlYWRlci9UZXh0SGVhZGVyL1RleHRIZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9JbmRleC9Ub3BDYXJkcy9Ub3BDYXJkcy5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L1VwZGF0ZWRJbmZvcmFtdGlvbi9VcGRhdGVkSW5mb3JtYXRpb24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9JbmRleC9XaHlVcy9XaHlVcy5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL0NyZWRpdGNhcmQvQ3JlZGl0Y2FyZC5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL1JhdGluZy9SYXRpbmcubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJAdGlwcHlqcy9yZWFjdFwiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwicmVhY3QtZ3JpZC1zeXN0ZW1cIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcInVuc3RhdGVkLW5leHRcIiJdLCJuYW1lcyI6WyJDcmVkaXRDYXJkcyIsImNvbnN0cnVjdG9yIiwiY2FyZHMiLCJnZXRDYXJkcyIsIkJlc3RDYXJkIiwiYmVzdGNhcmQiLCJzdHlsZXMiLCJpbWciLCJkZXNjcmlwdGlvbiIsIm5hbWUiLCJIZWFkZXIiLCJUZXh0SGVhZGVyIiwiVG9wQ2FyZHMiLCJjcmVkaXRDYXJkcyIsInNwbGljZSIsIlVwZGF0ZWRJbmZvcm1hdGlvbiIsIldoeVVzIiwibWFyZ2luVG9wIiwiQnV0dG9uT3JhbmdlIiwicHJvcHMiLCJocmVmIiwib25DbGljayIsImNsYXNzTmFtZSIsInRleHQiLCJDcmVkaXRjYXJkIiwiY2FyZCIsInN0YXRlIiwic2V0U3RhdGUiLCJ1c2VDb250ZXh0IiwiU3RhdGVDb250ZXh0IiwiYWRkVG9Db21wYXJlIiwiU3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJjb21wYXJlSWRzIiwicHVzaCIsInJlbW92ZUZyb21Db21wYXJlIiwiaWQiLCJpbmRleCIsImZpbmRJbmRleCIsIkNhcmQiLCJfaWQiLCJpc0NhcmRDb21wYXJlIiwiZXhpc3RzIiwiZmluZCIsInByb3BlcnRpZXMiLCJyYXRpbmciLCJtYXAiLCJwcm9wZXJ0aWUiLCJ0eXBlIiwic3BlY2lmaWNzIiwic3BlY2lmaWMiLCJzcGxpdCIsImZvbnRXZWlnaHQiLCJyZXBsYWNlIiwiRGlzcGxheUNhcmRzIiwiQ3JlZGl0Q2FyZCIsIlJhdGluZyIsInBhcnNlSW50IiwiY3JlYXRlQ29udGV4dCIsIlN0YXRlUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiRmFkZUluU2VjdGlvbiIsImlzVmlzaWJsZSIsInNldFZpc2libGUiLCJSZWFjdCIsImRvbVJlZiIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiY3VycmVudCIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwib2JzZXJ2ZSIsInVub2JzZXJ2ZSIsIkluZGV4UGFnZSIsInJlbmRlciIsImxpc3QiLCJnZXRTdGF0aWNQcm9wcyIsInByb21pc2VzIiwiZ2V0QmVzdENhcmQiLCJyZXNwb25zZXMiLCJQcm9taXNlIiwiYWxsIiwiY2FyZHNSZXNwb25zZSIsImJlc3RjYXJkUmVzcG9uc2UiLCJlcnJvciIsIkVycm9yIiwidW5kZWZpbmVkIiwicmV2YWxpZGF0ZSIsInVzZUN1c3RvbUhvb2siLCJzZXRDb21wYXJlSWRzIiwiSWRzIiwiY29tcGFyZUlkIiwiY2hlY2tJZkNhcmRDb21wYXJlIiwiQ29udGFpbmVyIiwiY3JlYXRlQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLE1BQU1BLFdBQU4sQ0FBa0I7QUFDdkJDLGFBQVcsQ0FBUUMsS0FBb0IsR0FBRyxFQUEvQixFQUFtQztBQUFBLFNBQTNCQSxLQUEyQixHQUEzQkEsS0FBMkI7QUFBRTs7QUFFaERDLFVBQVEsR0FBbUI7QUFDekIsV0FBTyxLQUFLRCxLQUFaO0FBQ0Q7O0FBTHNCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NBekI7O0FBQ0E7QUFFQTs7QUFNQSxNQUFNRSxRQUF5QyxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWdCO0FBQ2hFLFNBQU87QUFBSyxNQUFFLEVBQUVDLHNFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURDLEVBRUQsTUFBQyxtREFBRDtBQUNFLE9BQUcsRUFBRUQsUUFBUSxDQUFDRSxHQURoQjtBQUVFLFNBQUssRUFBRSxHQUZUO0FBR0UsVUFBTSxFQUFFLEdBSFY7QUFJRSxPQUFHLEVBQUMsZ0NBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZDLEVBU0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJRixRQUFRLENBQUNHLFdBQWIsQ0FUQyxFQVVELE1BQUMsNERBQUQ7QUFBYSxRQUFJLEVBQUMsY0FBbEI7QUFBOEIsUUFBSSxFQUFHLGtCQUFpQkgsUUFBUSxDQUFDSSxJQUFLLEVBQXBFO0FBQXVFLGFBQVMsRUFBRUgsaUVBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWQyxDQUFQO0FBWUQsQ0FiRDs7QUFlQSwrREFBZUYsUUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0NBR0E7O0FBQ0E7QUFDQTtBQUNBOztBQU1BLE1BQU1NLE1BQXVDLEdBQUcsQ0FBQztBQUFDTDtBQUFELENBQUQsS0FBOEI7QUFDMUUsU0FBTztBQUFLLE1BQUUsRUFBRUMsa0VBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0RBQUQ7QUFBSyxXQUFPLEVBQUMsUUFBYjtBQUFzQixTQUFLLEVBQUMsUUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0RBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJLE1BQUMsa0RBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx1REFBRDtBQUFVLFlBQVEsRUFBRUQsUUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBSkosQ0FESixDQURELENBQVA7QUFZSCxDQWJEOztBQWdCQSwrREFBZUssTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFDQTs7QUFFQSxNQUFNQyxVQUFvQyxHQUFHLE1BQW9CO0FBQzdELFNBQU87QUFBSyxNQUFFLEVBQUVMLDBFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSDtBQUFLLE1BQUUsRUFBRUEsNEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEVBREosQ0FERyxFQUlIO0FBQUssTUFBRSxFQUFFQSxrRkFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvSEFESixDQUpHLENBQVA7QUFRSCxDQVREOztBQVdBLCtEQUFlSyxVQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUVBO0FBQ0E7O0FBRUEsTUFBTUMsUUFBK0QsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFpQztBQUNyRyxRQUFNWCxLQUFLLEdBQUdXLFdBQVcsQ0FBQ1gsS0FBWixDQUFrQlksTUFBbEIsQ0FBeUIsQ0FBekIsRUFBNEIsQ0FBNUIsQ0FBZDtBQUNBLFNBQU87QUFBSyxNQUFFLEVBQUVSLHNFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQURHLEVBRUgsTUFBQyxrRUFBRDtBQUFjLGVBQVcsRUFBRUosS0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZHLENBQVA7QUFJSCxDQU5EOztBQVFBLCtEQUFlVSxRQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NYQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNRyxrQkFBa0IsR0FBRyxNQUFNO0FBQy9CLFNBQU87QUFBSyxNQUFFLEVBQUVULDBGQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTCxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE1BQUUsRUFBRUEsK0VBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0RBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNFBBRkYsRUFHRSxNQUFDLDREQUFEO0FBQWEsUUFBSSxFQUFDLE9BQWxCO0FBQTBCLFFBQUksRUFBQyxlQUEvQjtBQUErQyxhQUFTLEVBQUVBLDJFQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixFQU1FLE1BQUMsa0RBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxNQUFFLEVBQUVBLG9GQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1EQUFEO0FBQ0UsU0FBSyxFQUFFLEdBRFQ7QUFFRSxVQUFNLEVBQUUsR0FGVjtBQUdFLE9BQUcsRUFBQyxxQkFITjtBQUlFLE1BQUUsRUFBRUEsMkVBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREEsQ0FORixDQURBLENBREYsQ0FESyxDQUFQO0FBMEJELENBM0JEOztBQTZCQSwrREFBZVMsa0JBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTtDQUlBOztBQUNBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQyxLQUErQixHQUFHLE1BQW9CO0FBQ3hELFNBQU87QUFBSyxNQUFFLEVBQUVWLGdFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDUCxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURKLEVBRUk7QUFBSyxhQUFTLEVBQUVBLDhEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrREFBRDtBQUFLLFNBQUssRUFBQyxLQUFYO0FBQWlCLFdBQU8sRUFBQyxLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1EsTUFBQyxrREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBRUEsK0RBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUEsK0RBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUTtBQUFHLGFBQVMsRUFBRUEsZ0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUE1QixDQUZSLENBREosRUFLUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZFQUxSLENBREEsQ0FEUixFQVVRLE1BQUMsa0RBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUVBLCtEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVBLCtEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVE7QUFBRyxhQUFTLEVBQUVBLGdFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FBNUIsQ0FGUixDQURKLEVBS1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2RUFMUixDQURBLENBVlIsRUFtQlEsTUFBQyxrREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUEsK0RBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUEsK0RBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFHLGFBQVMsRUFBRUEsZ0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUE1QixDQUZKLENBREosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZFQUxKLENBREosQ0FuQlIsQ0FESixFQThCSSxNQUFDLGtEQUFEO0FBQUssU0FBSyxFQUFFO0FBQUNXLGVBQVMsRUFBQztBQUFYLEtBQVo7QUFBNEIsU0FBSyxFQUFDLEtBQWxDO0FBQXdDLFdBQU8sRUFBQyxLQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1EsTUFBQyxrREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBRVgsK0RBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUEsK0RBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUTtBQUFHLGFBQVMsRUFBRUEsZ0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUE1QixDQUZSLENBREosRUFLUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZFQUxSLENBREEsQ0FEUixFQVVRLE1BQUMsa0RBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUVBLCtEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVBLCtEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVE7QUFBRyxhQUFTLEVBQUVBLGdFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FBNUIsQ0FGUixDQURKLEVBS1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2RUFMUixDQURBLENBVlIsRUFtQlEsTUFBQyxrREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUEsK0RBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUEsK0RBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFHLGFBQVMsRUFBRUEsZ0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUE1QixDQUZKLENBREosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZFQUxKLENBREosQ0FuQlIsQ0E5QkosQ0FGSixDQURKLENBRE8sQ0FBUDtBQThGQyxDQS9GTDs7QUFpR0EsK0RBQWVVLEtBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0dBO0FBRUE7O0FBVUEsTUFBTUUsWUFBNkMsR0FBSUMsS0FBRCxJQUFXO0FBQzlELFNBQU8sTUFBQyxrREFBRDtBQUFNLFFBQUksRUFBRUEsS0FBSyxDQUFDQyxJQUFOLEdBQWFELEtBQUssQ0FBQ0MsSUFBbkIsR0FBMEIsR0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNOO0FBQUcsTUFBRSxFQUFFZCx5RUFBUDtBQUE0QixXQUFPLEVBQUVhLEtBQUssQ0FBQ0UsT0FBM0M7QUFBb0QsYUFBUyxFQUFFRixLQUFLLENBQUNHLFNBQXJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDS0gsS0FBSyxDQUFDSSxJQURYLENBRE0sQ0FBUDtBQUtGLENBTkQ7O0FBUUEsK0RBQWVMLFlBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtDQUdBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBSUEsTUFBTU0sVUFBeUQsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFZO0FBRzFFLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsaURBQVUsQ0FBTUMsd0RBQU4sQ0FBcEMsQ0FIMEUsQ0FJMUU7O0FBR0EsUUFBTUMsWUFBWSxHQUFJTCxJQUFELElBQWdDO0FBQ2pELFFBQUlNLEtBQUssR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQlAsS0FBbEIsQ0FBWjtBQUNBSyxTQUFLLENBQUNHLFVBQU4sQ0FBaUJDLElBQWpCLENBQXNCVixJQUF0QjtBQUNBRSxZQUFRLENBQUNJLEtBQUQsQ0FBUjtBQUNILEdBSkQ7O0FBTUEsUUFBTUssaUJBQWlCLEdBQUlDLEVBQUQsSUFBaUI7QUFDdkMsUUFBSU4sS0FBSyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyxFQUFkLEVBQWtCUCxLQUFsQixDQUFaO0FBQ0EsVUFBTVksS0FBSyxHQUFHUCxLQUFLLENBQUNHLFVBQU4sQ0FBaUJLLFNBQWpCLENBQTRCQyxJQUFELElBQWdDQSxJQUFJLENBQUNDLEdBQUwsS0FBYUosRUFBeEUsQ0FBZDtBQUNBLFFBQUdDLEtBQUssR0FBRyxDQUFYLEVBQWM7QUFDZFAsU0FBSyxDQUFDRyxVQUFOLENBQWlCcEIsTUFBakIsQ0FBd0J3QixLQUF4QixFQUErQixDQUEvQjtBQUNBWCxZQUFRLENBQUNJLEtBQUQsQ0FBUjtBQUNILEdBTkQ7O0FBUUEsUUFBTVcsYUFBYSxHQUFJTCxFQUFELElBQTJCO0FBQzdDLFVBQU1NLE1BQU0sR0FBR2pCLEtBQUssQ0FBQ1EsVUFBTixDQUFpQlUsSUFBakIsQ0FBdUJKLElBQUQsSUFBZ0NBLElBQUksQ0FBQ0MsR0FBTCxLQUFhSixFQUFuRSxDQUFmO0FBRUEsV0FBT00sTUFBTSxHQUFHLElBQUgsR0FBVSxLQUF2QjtBQUNILEdBSkQ7O0FBTUEsU0FBTyxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSjtBQUFLLGFBQVMsRUFBRXJDLG9FQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0s7QUFBSyxhQUFTLEVBQUVBLHVFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUksYUFBUyxFQUFFQSx3RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWlDbUIsSUFBSSxDQUFDb0IsVUFBTCxDQUFnQnBDLElBQWpELENBREEsRUFFQTtBQUFNLGFBQVMsRUFBRUgsd0VBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBa0MsTUFBQyxtREFBRDtBQUFRLGFBQVMsRUFBRUEsc0VBQW5CO0FBQWtDLFVBQU0sRUFBRW1CLElBQUksQ0FBQ29CLFVBQUwsQ0FBZ0JDLE1BQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBbEMsQ0FGQSxFQUdBO0FBQUssT0FBRyxFQUFHLGNBQWFyQixJQUFJLENBQUNvQixVQUFMLENBQWdCcEMsSUFBSyxFQUE3QztBQUFnRCxPQUFHLEVBQUVnQixJQUFJLENBQUNvQixVQUFMLENBQWdCdEMsR0FBckU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhBLENBREEsRUFNQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUVELDBFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUNtQixJQUFJLENBQUNvQixVQUFMLENBQWdCcEMsSUFBbkQsQ0FESixFQUVJO0FBQU0sYUFBUyxFQUFFSCwwRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFvQyxNQUFDLG1EQUFEO0FBQVEsVUFBTSxFQUFFbUIsSUFBSSxDQUFDb0IsVUFBTCxDQUFnQkMsTUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFwQyxDQUZKLEVBR0k7QUFBSyxhQUFTLEVBQUV4QywwRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ttQixJQUFJLENBQUNvQixVQUFMLENBQWdCQSxVQUFoQixDQUEyQkUsR0FBM0IsQ0FBK0JDLFNBQVMsSUFBSTtBQUN6QyxRQUFHQSxTQUFTLENBQUNDLElBQVYsS0FBbUIsTUFBdEIsRUFBOEI7QUFDMUIsYUFBTztBQUFLLGlCQUFTLEVBQUUzQyx5RUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNIO0FBQU0saUJBQVMsRUFBRUEsb0VBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBOEI7QUFBRyxpQkFBUyxFQUFDLHFCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBOUIsQ0FERyxFQUVIO0FBQUksV0FBRyxFQUFFMEMsU0FBUyxDQUFDQSxTQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQStCQSxTQUFTLENBQUNBLFNBQXpDLENBRkcsQ0FBUDtBQUlILEtBTEQsTUFLTTtBQUNGLGFBQU87QUFBSyxpQkFBUyxFQUFFMUMseUVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSDtBQUFNLGlCQUFTLEVBQUVBLG1FQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQTZCO0FBQUcsaUJBQVMsRUFBQyxxQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQTdCLENBREcsRUFFSDtBQUFJLFdBQUcsRUFBRTBDLFNBQVMsQ0FBQ0EsU0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUErQkEsU0FBUyxDQUFDQSxTQUF6QyxDQUZHLENBQVA7QUFJSDtBQUNKLEdBWkEsQ0FETCxDQURKLENBREosQ0FISixDQU5BLEVBNkJJO0FBQUssYUFBUyxFQUFFMUMsd0VBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NtQixJQUFJLENBQUNvQixVQUFMLENBQWdCSyxTQUFoQixDQUEwQkgsR0FBMUIsQ0FBOEJJLFFBQVEsSUFBSTtBQUN2QyxVQUFNNUIsSUFBSSxHQUFHNEIsUUFBUSxDQUFDNUIsSUFBVCxDQUFjNkIsS0FBZCxDQUFvQixJQUFwQixDQUFiO0FBQ0EsV0FBTyxNQUFDLHVEQUFEO0FBQWdCLFNBQUcsRUFBRUQsUUFBUSxDQUFDNUIsSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSTtBQUFNLFdBQUssRUFBRTtBQUFDOEIsa0JBQVUsRUFBQztBQUFaLE9BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFtQzlCLElBQUksQ0FBQyxDQUFELENBQXZDLE1BQUosT0FBd0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFPQSxJQUFJLENBQUMsQ0FBRCxDQUFYLENBQXhELENBREcsQ0FBUDtBQUdILEdBTEEsQ0FERCxDQURKLENBN0JKLENBREwsRUF5Q0s7QUFBSyxhQUFTLEVBQUVqQiw2RUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFFQSx1RUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMERBQUQ7QUFBYyxRQUFJLEVBQUMsY0FBbkI7QUFBK0IsUUFBSSxFQUFHLGtCQUFpQm1CLElBQUksQ0FBQ29CLFVBQUwsQ0FBZ0JKLEdBQUksRUFBM0U7QUFBOEUsYUFBUyxFQUFFbkMsOEVBQXpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMsMERBQUQ7QUFBYyxRQUFJLEVBQUMsaUJBQW5CO0FBQXFDLFFBQUksRUFBRyxTQUFRbUIsSUFBSSxDQUFDb0IsVUFBTCxDQUFnQkosR0FBaEIsQ0FBb0JhLE9BQXBCLENBQTRCLE9BQTVCLEVBQXFDLEdBQXJDLENBQTBDLEVBQTlGO0FBQWlHLGFBQVMsRUFBRWhELDhFQUE1RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESixDQXpDTCxFQStDSyxNQUFDLHVEQUFEO0FBQU8sV0FBTyxFQUFFLENBQUNvQyxhQUFhLENBQUNqQixJQUFJLENBQUNvQixVQUFMLENBQWdCSixHQUFqQixDQUFkLEdBQXNDLG1DQUF0QyxHQUE0RSxrQ0FBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssV0FBTyxFQUFFLE1BQU1DLGFBQWEsQ0FBQ2pCLElBQUksQ0FBQ29CLFVBQUwsQ0FBZ0JKLEdBQWpCLENBQWIsR0FBcUNMLGlCQUFpQixDQUFDWCxJQUFJLENBQUNvQixVQUFMLENBQWdCSixHQUFqQixDQUF0RCxHQUE4RVgsWUFBWSxDQUFDTCxJQUFJLENBQUNvQixVQUFOLENBQTlHO0FBQWlJLGFBQVMsRUFBRXZDLHlFQUE1STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ01vQyxhQUFhLENBQUNqQixJQUFJLENBQUNvQixVQUFMLENBQWdCSixHQUFqQixDQUFiLEdBQXFDO0FBQUcsYUFBUyxFQUFDLHFCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBckMsR0FBK0U7QUFBRyxhQUFTLEVBQUMsb0JBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURyRixDQURKLENBL0NMLENBREksQ0FBUDtBQXVESCxDQWxGRDs7QUFvRkEsK0RBQWVqQixVQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFDQTs7QUFLQSxNQUFNK0IsWUFBNkIsR0FBRyxDQUFDO0FBQUMxQztBQUFELENBQUQsS0FBeUI7QUFDN0QsU0FBT0EsV0FBVyxDQUFDa0MsR0FBWixDQUFnQlMsVUFBVSxJQUFJO0FBQ25DLFdBQU8sTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0wsTUFBQywyREFBRDtBQUFZLFVBQUksRUFBRUEsVUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURLLENBQVA7QUFHRCxHQUpNLENBQVA7QUFNRCxDQVBEOztBQVVBLCtEQUFlRCxZQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBOztBQUVBLE1BQU1FLE1BQXdFLEdBQUcsQ0FBQztBQUFDWCxRQUFEO0FBQVN4QjtBQUFULENBQUQsS0FBeUI7QUFDdEcsTUFBSW1DLE1BQUo7O0FBQ0EsVUFBU0MsUUFBUSxDQUFDWixNQUFELENBQWpCO0FBQ0ksU0FBSyxDQUFMO0FBQ0lXLFlBQU0sR0FDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBTSxpQkFBUyxFQUFFbkQsaUVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBK0I7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUEvQixDQURKLEVBRUk7QUFBTSxpQkFBUyxFQUFFQSxnRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE4QjtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQTlCLENBRkosRUFHSTtBQUFNLGlCQUFTLEVBQUVBLGdFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQThCO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBOUIsQ0FISixFQUlJO0FBQU0saUJBQVMsRUFBRUEsZ0VBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBOEI7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUE5QixDQUpKLEVBS0k7QUFBTSxpQkFBUyxFQUFFQSxnRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE4QjtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQTlCLENBTEosQ0FESjtBQVNBOztBQUNKLFNBQUssQ0FBTDtBQUNJbUQsWUFBTSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSztBQUFNLGlCQUFTLEVBQUVuRCxpRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUErQjtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQS9CLENBREwsRUFFSztBQUFNLGlCQUFTLEVBQUVBLGlFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQStCO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBL0IsQ0FGTCxFQUdLO0FBQU0saUJBQVMsRUFBRUEsZ0VBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBOEI7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUE5QixDQUhMLEVBSUs7QUFBTSxpQkFBUyxFQUFFQSxnRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE4QjtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQTlCLENBSkwsRUFLSztBQUFNLGlCQUFTLEVBQUVBLGdFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQThCO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBOUIsQ0FMTCxDQURSO0FBU0E7O0FBQ0osU0FBSyxDQUFMO0FBQ0ltRCxZQUFNLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNLO0FBQU0saUJBQVMsRUFBRW5ELGlFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQStCO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBL0IsQ0FETCxFQUVJO0FBQU0saUJBQVMsRUFBRUEsaUVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBK0I7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUEvQixDQUZKLEVBR0k7QUFBTSxpQkFBUyxFQUFFQSxpRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUErQjtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQS9CLENBSEosRUFJSTtBQUFNLGlCQUFTLEVBQUVBLGdFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQThCO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBOUIsQ0FKSixFQUtJO0FBQU0saUJBQVMsRUFBRUEsZ0VBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBOEI7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUE5QixDQUxKLENBRFI7QUFTQTs7QUFDSixTQUFLLENBQUw7QUFDSW1ELFlBQU0sR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0s7QUFBTSxpQkFBUyxFQUFFbkQsaUVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBK0I7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUEvQixDQURMLEVBRUk7QUFBTSxpQkFBUyxFQUFFQSxpRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUErQjtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQS9CLENBRkosRUFHSTtBQUFNLGlCQUFTLEVBQUVBLGlFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQStCO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBL0IsQ0FISixFQUlJO0FBQU0saUJBQVMsRUFBRUEsaUVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBK0I7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUEvQixDQUpKLEVBS0k7QUFBTSxpQkFBUyxFQUFFQSxnRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE4QjtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQTlCLENBTEosQ0FEUjtBQVNBOztBQUNKLFNBQUssQ0FBTDtBQUNJbUQsWUFBTSxHQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFNLGlCQUFTLEVBQUVuRCxpRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUErQjtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQS9CLENBREosRUFFSTtBQUFNLGlCQUFTLEVBQUVBLGlFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQStCO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBL0IsQ0FGSixFQUdJO0FBQU0saUJBQVMsRUFBRUEsaUVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBK0I7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUEvQixDQUhKLEVBSUk7QUFBTSxpQkFBUyxFQUFFQSxpRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUErQjtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQS9CLENBSkosRUFLSTtBQUFNLGlCQUFTLEVBQUVBLGlFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQStCO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBL0IsQ0FMSixDQURSO0FBU0E7O0FBQ0o7QUFDSW1ELFlBQU0sR0FDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0s7QUFBTSxpQkFBUyxFQUFFbkQsZ0VBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBOEI7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUE5QixDQURMLEVBRUk7QUFBTSxpQkFBUyxFQUFFQSxnRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE4QjtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQTlCLENBRkosRUFHSTtBQUFNLGlCQUFTLEVBQUVBLGdFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQThCO0FBQUcsaUJBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBOUIsQ0FISixFQUlJO0FBQU0saUJBQVMsRUFBRUEsZ0VBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBOEI7QUFBRyxpQkFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUE5QixDQUpKLEVBS0k7QUFBTSxpQkFBUyxFQUFFQSxnRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE4QjtBQUFHLGlCQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQTlCLENBTEosQ0FESjtBQVNBO0FBbEVSOztBQW9FSSxTQUFRO0FBQUssYUFBUyxFQUFFZ0IsU0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0Qm1DLE1BQTVCLENBQVI7QUFDUCxDQXZFRDs7QUF5RUEsK0RBQWVBLE1BQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFRTyxNQUFNNUIsWUFBWSxnQkFBRzhCLG9EQUFhLENBQUMsRUFBRCxDQUFsQztBQUVBLE1BQU1DLGFBQXdCLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBZ0I7QUFDdEQsUUFBTTtBQUFBLE9BQUNuQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQm1DLCtDQUFRLENBQVE7QUFDeEM1RCxTQUFLLEVBQUMsRUFEa0M7QUFFeENnQyxjQUFVLEVBQUM7QUFGNkIsR0FBUixDQUFsQztBQUlBLFNBQU8sTUFBQyxZQUFELENBQWMsUUFBZDtBQUF1QixTQUFLLEVBQUUsQ0FBQ1IsS0FBRCxFQUFRQyxRQUFSLENBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQWtDLFFBREEsQ0FBUDtBQUdELENBUk0sQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZQO0FBQ0E7O0FBRUEsU0FBU0UsYUFBVCxDQUF1QjVDLEtBQXZCLEVBQThCO0FBQzFCLFFBQU0sQ0FBQzZDLFNBQUQsRUFBWUMsVUFBWixJQUEwQkMscURBQUEsQ0FBZSxLQUFmLENBQWhDO0FBQ0EsUUFBTUMsTUFBTSxHQUFHRCxtREFBQSxFQUFmO0FBQ0FBLHdEQUFBLENBQWdCLE1BQU07QUFDcEIsVUFBTUUsUUFBUSxHQUFHLElBQUlDLG9CQUFKLENBQXlCQyxPQUFPLElBQUk7QUFDbkQsVUFBR04sU0FBSCxFQUFjO0FBQ2QsVUFBR0csTUFBTSxDQUFDSSxPQUFQLENBQWVqRCxTQUFmLEtBQTZCLDJCQUFoQyxFQUE2RDtBQUM3RGdELGFBQU8sQ0FBQ0UsT0FBUixDQUFnQkMsS0FBSyxJQUFJUixVQUFVLENBQUNRLEtBQUssQ0FBQ0MsY0FBUCxDQUFuQztBQUNELEtBSmdCLENBQWpCO0FBS0FOLFlBQVEsQ0FBQ08sT0FBVCxDQUFpQlIsTUFBTSxDQUFDSSxPQUF4QjtBQUNBLFdBQU8sTUFBTUgsUUFBUSxDQUFDUSxTQUFULENBQW1CVCxNQUFNLENBQUNJLE9BQTFCLENBQWI7QUFDRCxHQVJELEVBUUcsRUFSSDtBQVNBLFNBQ0U7QUFDRSxhQUFTLEVBQUcsbUJBQWtCUCxTQUFTLEdBQUcsWUFBSCxHQUFrQixFQUFHLEVBRDlEO0FBRUUsT0FBRyxFQUFFRyxNQUZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJR2hELEtBQUssQ0FBQzBDLFFBSlQsQ0FERjtBQVFEOztBQUVELCtEQUFlRSxhQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkY7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQVdBLE1BQU1jLFNBQU4sU0FBd0JYLHdEQUF4QixDQUF1RDtBQUNyRFksUUFBTSxHQUFJO0FBQ1IsVUFBTTVFLEtBQUssR0FBRyxLQUFLaUIsS0FBTCxDQUFXakIsS0FBWCxDQUFpQjZDLEdBQWpCLENBQXFCdEIsSUFBSSxJQUFJLElBQUkrQiwyREFBSixDQUFlL0IsSUFBZixDQUE3QixDQUFkO0FBQ0EsVUFBTXNELElBQUksR0FBRyxJQUFJL0UsNkRBQUosQ0FBZ0JFLEtBQWhCLENBQWI7QUFDQSxVQUFNRyxRQUFRLEdBQUcsS0FBS2MsS0FBTCxDQUFXZCxRQUE1QjtBQUNGLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNMLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBREYsRUFFRTtBQUFNLFVBQUksRUFBQyxhQUFYO0FBQXlCLGFBQU8sRUFBQyxpS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0U7QUFBTSxVQUFJLEVBQUMsUUFBWDtBQUFvQixhQUFPLEVBQUMsZUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLENBREssRUFNSCxNQUFDLG9FQUFEO0FBQVEsY0FBUSxFQUFFQSxRQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkcsRUFPSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFSSxNQUFDLDRGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSixFQUdJLE1BQUMsd0VBQUQ7QUFBVSxpQkFBVyxFQUFFMEUsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhKLENBUEcsQ0FBUDtBQWNDOztBQW5Cb0Q7O0FBeUJoRCxlQUFlQyxjQUFmLEdBQWdDO0FBRXJDLE1BQUk7QUFDRixVQUFNQyxRQUFRLEdBQUcsQ0FBQzlFLDBEQUFRLEVBQVQsRUFBYStFLDZEQUFXLEVBQXhCLENBQWpCO0FBRUEsVUFBTUMsU0FBUyxHQUFHLE1BQU1DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaLENBQXhCO0FBR0EsVUFBTUssYUFBYSxHQUFHSCxTQUFTLENBQUMsQ0FBRCxDQUEvQjtBQUNBLFVBQU1JLGdCQUFnQixHQUFHSixTQUFTLENBQUMsQ0FBRCxDQUFsQztBQUdBLFFBQUdHLGFBQWEsQ0FBQ0UsS0FBZCxJQUF1QkQsZ0JBQWdCLENBQUNDLEtBQTNDLEVBQWtELE1BQU0sSUFBSUMsS0FBSixFQUFOO0FBRWxELFdBQU87QUFDTHRFLFdBQUssRUFBRztBQUNOakIsYUFBSyxFQUFFb0YsYUFBYSxDQUFDcEYsS0FEZjtBQUVORyxnQkFBUSxFQUFFa0YsZ0JBQWdCLENBQUNsRjtBQUZyQjtBQURILEtBQVA7QUFNRCxHQWxCRCxDQWtCRSxPQUFPbUYsS0FBUCxFQUFjO0FBQ2QsV0FBTztBQUNMckUsV0FBSyxFQUFFO0FBQ0xqQixhQUFLLEVBQUcsRUFESDtBQUVMRyxnQkFBUSxFQUFFcUY7QUFGTCxPQURGO0FBS0xDLGdCQUFVLEVBQUUsT0FBTztBQUxkLEtBQVA7QUFPRDtBQUVGO0FBRUQsK0RBQWVkLFNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUNBOztBQUVBLFNBQVNlLGFBQVQsR0FBeUI7QUFDdkIsTUFBSTtBQUFBLE9BQUMxRCxVQUFEO0FBQUEsT0FBYTJEO0FBQWIsTUFBOEIvQiwrQ0FBUSxDQUFXLEVBQVgsQ0FBMUM7O0FBQ0EsUUFBTWhDLFlBQVksR0FBSU8sRUFBRCxJQUFpQjtBQUNwQyxVQUFNeUQsR0FBRyxHQUFHLENBQUMsR0FBRzVELFVBQUosQ0FBWjtBQUNBLFVBQU1TLE1BQU0sR0FBR21ELEdBQUcsQ0FBQ2xELElBQUosQ0FBU21ELFNBQVMsSUFBSUEsU0FBUyxLQUFLMUQsRUFBcEMsQ0FBZjtBQUNBLFFBQUlNLE1BQUosRUFBWSxPQUFPLElBQVA7QUFFWm1ELE9BQUcsQ0FBQzNELElBQUosQ0FBU0UsRUFBVDtBQUVBd0QsaUJBQWEsQ0FBQ0MsR0FBRCxDQUFiO0FBRUEsV0FBT0EsR0FBUDtBQUNELEdBVkQ7O0FBWUEsUUFBTTFELGlCQUFpQixHQUFJQyxFQUFELElBQWlCO0FBQ3pDLFVBQU15RCxHQUFjLEdBQUcsQ0FBQyxHQUFHNUQsVUFBSixDQUF2QjtBQUVBLFVBQU1JLEtBQUssR0FBR3dELEdBQUcsQ0FBQ3ZELFNBQUosQ0FBY0wsVUFBVSxJQUFJQSxVQUFVLEtBQUtHLEVBQTNDLENBQWQ7QUFFQSxRQUFHQyxLQUFLLEdBQUcsQ0FBWCxFQUFjLE9BQU8sSUFBUDtBQUVkd0QsT0FBRyxDQUFDaEYsTUFBSixDQUFXd0IsS0FBWCxFQUFrQixDQUFsQjtBQUVBdUQsaUJBQWEsQ0FBQ0MsR0FBRCxDQUFiO0FBRUEsV0FBT0EsR0FBUDtBQUNELEdBWkQ7O0FBY0EsUUFBTUUsa0JBQWtCLEdBQUkzRCxFQUFELElBQWlCO0FBQzFDLFVBQU15RCxHQUFjLEdBQUcsQ0FBQyxHQUFHNUQsVUFBSixDQUF2QjtBQUVBLFdBQU80RCxHQUFHLENBQUNsRCxJQUFKLENBQVNWLFVBQVUsSUFBSUEsVUFBVSxLQUFLRyxFQUF0QyxDQUFQO0FBQ0QsR0FKRDs7QUFLQSxTQUFPO0FBQUVILGNBQUY7QUFBY0osZ0JBQWQ7QUFBNEJNLHFCQUE1QjtBQUErQzREO0FBQS9DLEdBQVA7QUFDRDs7QUFFRCxJQUFJQyxTQUFTLEdBQUdDLDhEQUFlLENBQUNOLGFBQUQsQ0FBL0I7QUFFQSwrREFBZUssU0FBZixFOzs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwyQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENyZWRpdENhcmQgfSBmcm9tICcuL0NyZWRpdENhcmQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENyZWRpdENhcmRzIHtcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY2FyZHMgOiBDcmVkaXRDYXJkW10gPSBbXSkge31cclxuXHJcbiAgZ2V0Q2FyZHMgKCkgOiBDcmVkaXRDYXJkW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2FyZHM7XHJcbiAgfVxyXG5cclxufSIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9CZXN0Q2FyZC5tb2R1bGUuY3NzJztcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBCZXN0Q2FyZCBhcyBCZXN0Q2FyZEludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uLy4uL2ludGVyZmFjZXMvQmVzdENhcmQnO1xyXG5pbXBvcnQgQnV0dG9uV2hpdGUgZnJvbSAnLi4vLi4vLi4vVWkvQnV0dG9ucy9CdXR0b25XaGl0ZSc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGJlc3RjYXJkIDogQmVzdENhcmRJbnRlcmZhY2U7XHJcbn1cclxuXHJcbmNvbnN0IEJlc3RDYXJkIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHtiZXN0Y2FyZH0pID0+IHtcclxuICByZXR1cm4gPGRpdiBpZD17c3R5bGVzLkJlc3RDYXJkfT5cclxuICAgICAgICA8aDM+QsOkc3RhIGtvcnRldCBudTwvaDM+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9e2Jlc3RjYXJkLmltZ31cclxuICAgICAgICAgIHdpZHRoPXsyNTB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezE0MH1cclxuICAgICAgICAgIGFsdD1cIkLDpHN0YSBrcmVkaXRrb3J0ZXQganVzdCBudSFcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgey8qIDxoND57YmVzdGNhcmQubmFtZX08L2g0PiAqL31cclxuICAgICAgICA8cD57YmVzdGNhcmQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDxCdXR0b25XaGl0ZSB0ZXh0PVwiQW5zw7ZrIG51IVwiIGhyZWY9e2AvUmVkaXJlY3Q/Y2FyZD0ke2Jlc3RjYXJkLm5hbWV9YH0gY2xhc3NOYW1lPXtzdHlsZXMuYnRufSAvPlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCZXN0Q2FyZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uLy4uL2hvYy9Db250YWluZXIvQ29udGFpbmVyJztcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ncmlkLXN5c3RlbSc7XHJcbmltcG9ydCBUZXh0SGVhZGVyIGZyb20gJy4vVGV4dEhlYWRlci9UZXh0SGVhZGVyJztcclxuaW1wb3J0IEJlc3RDYXJkIGZyb20gJy4vQmVzdENhcmQvQmVzdENhcmQnO1xyXG5pbXBvcnQgeyBCZXN0Q2FyZCBhcyBCZXN0Q2FyZEludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvQmVzdENhcmQnO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgYmVzdGNhcmQgOiBCZXN0Q2FyZEludGVyZmFjZVxyXG59XHJcblxyXG5jb25zdCBIZWFkZXIgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoe2Jlc3RjYXJkfSkgOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBpZD17c3R5bGVzLkhlYWRlcn0+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8Um93IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSBsZz17N30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0SGVhZGVyIC8+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MTJ9IGxnPXs1fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJlc3RDYXJkIGJlc3RjYXJkPXtiZXN0Y2FyZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RleHRIZWFkZXIubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBUZXh0SGVhZGVyIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKSA6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGlkPXtzdHlsZXMuVGV4dEhlYWRlcn0+XHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLkhlYWRpbmdUaXRsZX0+XHJcbiAgICAgICAgICAgIDxoMT5WaSBoasOkbHBlciBkaWcgYXR0IGhpdHRhIGRldCBiw6RzdGEga29ydGV0IGbDtnIganVzdCBkaWcuLi48L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5IZWFkaW5nRGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICA8cD5zdXNjaXBpdCBxdWFzIHNhZXBlIGJsYW5kaXRpaXMsIG9iY2FlY2F0aSBldmVuaWV0IHJhdGlvbmUgYSBtb2RpIGNvbnNlY3RldHVyIHNpdCBlb3MgZWFxdWUgZG9sb3JpYnVzIGRvbG9yZT88L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbjwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0SGVhZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENyZWRpdENhcmRzIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9DcmVkaXRDYXJkcyc7XHJcbmltcG9ydCBEaXNwbGF5Q2FyZHMgZnJvbSAnLi4vLi4vVWkvRGlzcGxheUNhcmRzL0Rpc3BsYXlDYXJkcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ub3BDYXJkcy5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IFRvcENhcmRzIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8e2NyZWRpdENhcmRzIDogQ3JlZGl0Q2FyZHN9PiA9ICh7Y3JlZGl0Q2FyZHN9KSA6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IGNhcmRzID0gY3JlZGl0Q2FyZHMuY2FyZHMuc3BsaWNlKDIsIDUpXHJcbiAgICByZXR1cm4gPGRpdiBpZD17c3R5bGVzLlRvcENhcmRzfT4gICAgXHJcbiAgICAgICAgPGgzPlbDpXJhIHBvcHVsw6RyYXN0ZSBrcmVkaXRrb3J0PC9oMz5cclxuICAgICAgICA8RGlzcGxheUNhcmRzIGNyZWRpdENhcmRzPXtjYXJkc30gLz5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BDYXJkczsiLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vVXBkYXRlZEluZm9ybWF0aW9uLm1vZHVsZS5jc3MnXHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi8uLi9ob2MvQ29udGFpbmVyL0NvbnRhaW5lcic7XHJcbmltcG9ydCB7Um93ICwgQ29sfSBmcm9tICdyZWFjdC1ncmlkLXN5c3RlbSc7XHJcbmltcG9ydCBCdXR0b25XaGl0ZSBmcm9tICcuLi8uLi9VaS9CdXR0b25zL0J1dHRvbldoaXRlJztcclxuXHJcblxyXG5jb25zdCBVcGRhdGVkSW5mb3JtYXRpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5VcGRhdGVkSW5mb3JtYXRpb259PlxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPGRpdiBpZD17c3R5bGVzLmNvbnRlbnR9PiAgXHJcbiAgICAgIDxSb3c+XHJcbiAgICAgICAgPENvbCBtZD17MTJ9IGxnPXs2fT5cclxuICAgICAgICAgIDxoND5BbGx0aWQgdXBkYXRlcmF0PC9oND5cclxuICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEaWduaXNzaW1vcyB2ZXJvIGNvbnNlY3RldHVyIHZvbHVwdGF0dW0gY3VtPyBMYWJvcmUgc3VzY2lwaXQgbm9iaXMgY3VwaWRpdGF0ZSBtYWlvcmVzIGF0IGRlbGVuaXRpIG5lc2NpdW50IG9iY2FlY2F0aSByZXBlbGxlbmR1cyBtaW5pbWEgcXVpLCBxdWlkZW0gZXhlcmNpdGF0aW9uZW0gZXhjZXB0dXJpIGVsaWdlbmRpIG5vbiE8L3A+XHJcbiAgICAgICAgICA8QnV0dG9uV2hpdGUgaHJlZj1cIi9rb3J0XCIgdGV4dD1cIlV0Zm9yc2thIGtvcnRcIiBjbGFzc05hbWU9e3N0eWxlcy5idG59IC8+IFxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgbWQ9ezEyfSBsZz17Nn0+XHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLmltZ0NvbnRhaW5lcn0+ICBcclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICBoZWlnaHQ9ezcwMH1cclxuICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy91cGRhdGVkLnN2Z1wiXHJcbiAgICAgICAgICAgIGlkPXtzdHlsZXMuSW1nfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICA8L1Jvdz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICAgIHsvKiA8TGluayBocmVmPVwiL2tvcnQvYWxsYS1rcmVkaXRrb3J0XCI+XHJcbiAgICAgIDxhPlV0Zm9yc2thIGtyZWRpdGtvcnQ8L2E+XHJcbiAgICA8L0xpbms+ICovfVxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVcGRhdGVkSW5mb3JtYXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1doeVVzLm1vZHVsZS5jc3MnO1xyXG5cclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi8uLi9ob2MvQ29udGFpbmVyL0NvbnRhaW5lcic7XHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3QtZ3JpZC1zeXN0ZW0nO1xyXG5pbXBvcnQgRmFkZUluU2VjdGlvbiBmcm9tICcuLi8uLi8uLi9ob2MvRmFkZUluU2VjdGlvbi9GYWRlSW5TZWN0aW9uJztcclxuXHJcblxyXG5jb25zdCBXaHlVcyA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCkgOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBpZD17c3R5bGVzLldoeVVzfT5cclxuICAgIDxGYWRlSW5TZWN0aW9uPiAgICAgICAgXHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGgyPkh1ciBrYW4gdmkgaGrDpGxwYSBkaWc/PC9oMj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgPFJvdyBhbGlnbj1cImVuZFwiIGp1c3RpZnk9XCJlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGkgY2xhc3NOYW1lPVwiZmFzIGZhLW1vbmV5LWNoZWNrXCI+PC9pPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PjxiPk9wYXJ0aXNrYSBqw6RtZsO2cmVsc2VyPC9iPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFByYWVzZW50aXVtLDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGkgY2xhc3NOYW1lPVwiZmFzIGZhLW1vbmV5LWNoZWNrXCI+PC9pPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PjxiPk9wYXJ0aXNrYSBqw6RtZsO2cmVsc2VyPC9iPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFByYWVzZW50aXVtLDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzbT17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbW9uZXktY2hlY2tcIj48L2k+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+PGI+T3BhcnRpc2thIGrDpG1mw7ZyZWxzZXI8L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFByYWVzZW50aXVtLDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgICAgPFJvdyBzdHlsZT17e21hcmdpblRvcDo2MH19IGFsaWduPVwiZW5kXCIganVzdGlmeT1cImVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbW9uZXktY2hlY2tcIj48L2k+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+PGI+T3BhcnRpc2thIGrDpG1mw7ZyZWxzZXI8L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUHJhZXNlbnRpdW0sPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbW9uZXktY2hlY2tcIj48L2k+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+PGI+T3BhcnRpc2thIGrDpG1mw7ZyZWxzZXI8L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUHJhZXNlbnRpdW0sPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tb25leS1jaGVja1wiPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT48Yj5PcGFydGlza2EgasOkbWbDtnJlbHNlcjwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUHJhZXNlbnRpdW0sPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxyXG4gICAgICAgICAgICAgICAgPFJvdyBhbGlnbj1cImVuZFwiIGp1c3RpZnk9XCJlbmRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfTxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZH08ZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+PGI+T3BhcnRpc2thIGrDpG1mw7ZyZWxzZXI8L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXZcclxuICAgICAgICAgICAgICAgIDxDb2wgc209ezR9PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgc209ezR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhlYWR9PGRpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIHNtPXs0fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfTxkaXY+XHJcbiAgICAgICAgICAgICAgICA8L2RpdlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PjxiPk9wYXJ0aXNrYSBqw6RtZsO2cmVsc2VyPC9iPjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvRmFkZUluU2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdoeVVzOyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b25zLm1vZHVsZS5jc3MnO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBocmVmPzogc3RyaW5nO1xyXG4gIG9uQ2xpY2s/IDogKCkgPT4gdm9pZDtcclxuICBjbGFzc05hbWU/IDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBCdXR0b25PcmFuZ2UgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAocHJvcHMpID0+IHtcclxuICAgcmV0dXJuIDxMaW5rIGhyZWY9e3Byb3BzLmhyZWYgPyBwcm9wcy5ocmVmIDogJyMnfT5cclxuICAgIDxhIGlkPXtzdHlsZXMuQnV0dG9uT3JhbmdlfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfSBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+XHJcbiAgICAgICAge3Byb3BzLnRleHR9XHJcbiAgICA8L2E+XHJcbiAgPC9MaW5rPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25PcmFuZ2U7IiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ3JlZGl0Y2FyZC5tb2R1bGUuY3NzJ1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gJy4uL1JhdGluZy9SYXRpbmcnO1xyXG5pbXBvcnQgeyBDcmVkaXRDYXJkIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9DcmVkaXRDYXJkJztcclxuaW1wb3J0IFRpcHB5IGZyb20gJ0B0aXBweWpzL3JlYWN0JztcclxuaW1wb3J0ICd0aXBweS5qcy9kaXN0L3RpcHB5LmNzcyc7XHJcbmltcG9ydCBCdXR0b25PcmFuZ2UgZnJvbSAnLi4vQnV0dG9ucy9CdXR0b25PcmFuZ2UnO1xyXG5pbXBvcnQge0NhcmQgYXMgQ3JlZGl0Q2FyZEludGVyZmFjZX0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9DcmVkaXRDYXJkJ1xyXG5pbXBvcnQgeyBTdGF0ZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0L1N0YXRlJztcclxuXHJcblxyXG5cclxuY29uc3QgQ3JlZGl0Y2FyZCA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PHtjYXJkIDogQ3JlZGl0Q2FyZH0+ID0gKHtjYXJkfSkgPT4ge1xyXG5cclxuXHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZUNvbnRleHQ8YW55PihTdGF0ZUNvbnRleHQpXHJcbiAgICAvLyBjb25zdCBpc0NhcmRDb21wYXJlID0gY29tcGFyZVN0YXRlLmNoZWNrSWZDYXJkQ29tcGFyZShjYXJkLnByb3BlcnRpZXMuX2lkKVxyXG5cclxuXHJcbiAgICBjb25zdCBhZGRUb0NvbXBhcmUgPSAoY2FyZCA6IENyZWRpdENhcmRJbnRlcmZhY2UpID0+IHtcclxuICAgICAgICBsZXQgU3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XHJcbiAgICAgICAgU3RhdGUuY29tcGFyZUlkcy5wdXNoKGNhcmQpXHJcbiAgICAgICAgc2V0U3RhdGUoU3RhdGUpXHJcbiAgICB9ICAgXHJcblxyXG4gICAgY29uc3QgcmVtb3ZlRnJvbUNvbXBhcmUgPSAoaWQgOiBzdHJpbmcpID0+IHtcclxuICAgICAgICBsZXQgU3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSk7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBTdGF0ZS5jb21wYXJlSWRzLmZpbmRJbmRleCgoQ2FyZCA6IENyZWRpdENhcmRJbnRlcmZhY2UpID0+IENhcmQuX2lkID09PSBpZClcclxuICAgICAgICBpZihpbmRleCA8IDApIHJldHVybjtcclxuICAgICAgICBTdGF0ZS5jb21wYXJlSWRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgc2V0U3RhdGUoU3RhdGUpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaXNDYXJkQ29tcGFyZSA9IChpZCA6IHN0cmluZykgOiBCb29sZWFuID0+IHtcclxuICAgICAgICBjb25zdCBleGlzdHMgPSBzdGF0ZS5jb21wYXJlSWRzLmZpbmQoKENhcmQgOiBDcmVkaXRDYXJkSW50ZXJmYWNlKSA9PiBDYXJkLl9pZCA9PT0gaWQpXHJcblxyXG4gICAgICAgIHJldHVybiBleGlzdHMgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+IFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXMuSXNtb2JpbGV9PntjYXJkLnByb3BlcnRpZXMubmFtZX08L2g0PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5Jc21vYmlsZX0+PFJhdGluZyBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmd9IHJhdGluZz17Y2FyZC5wcm9wZXJ0aWVzLnJhdGluZ30vPjwvc3Bhbj5cclxuICAgICAgICAgICAgPGltZyBhbHQ9e2BrcmVkaXRrb3J0ICR7Y2FyZC5wcm9wZXJ0aWVzLm5hbWV9YH0gc3JjPXtjYXJkLnByb3BlcnRpZXMuaW1nfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5Jc0NvbXB1dGVyfT57Y2FyZC5wcm9wZXJ0aWVzLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLklzQ29tcHV0ZXJ9PjxSYXRpbmcgcmF0aW5nPXtjYXJkLnByb3BlcnRpZXMucmF0aW5nfSAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvcGVydGllc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NhcmQucHJvcGVydGllcy5wcm9wZXJ0aWVzLm1hcChwcm9wZXJ0aWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHByb3BlcnRpZS50eXBlID09PSAnR09PRCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvcGVydGllfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmdvb2R9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGVjay1jaXJjbGVcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cHJvcGVydGllLnByb3BlcnRpZX0+e3Byb3BlcnRpZS5wcm9wZXJ0aWV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvcGVydGllfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmJhZH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzLWNpcmNsZVwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwcm9wZXJ0aWUucHJvcGVydGllfT57cHJvcGVydGllLnByb3BlcnRpZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3BlY2lmaWN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FyZC5wcm9wZXJ0aWVzLnNwZWNpZmljcy5tYXAoc3BlY2lmaWMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gc3BlY2lmaWMudGV4dC5zcGxpdCgnOiAnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50IGtleT17c3BlY2lmaWMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gc3R5bGU9e3tmb250V2VpZ2h0Oidib2xkJ319Pnt0ZXh0WzBdfTo8L3NwYW4+IDxzcGFuPnt0ZXh0WzFdfTwvc3Bhbj48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idG5CYWNrZ3JvdW5kfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbk9yYW5nZSB0ZXh0PVwiQW5zw7ZrIG51IVwiIGhyZWY9e2AvUmVkaXJlY3Q/Y2FyZD0ke2NhcmQucHJvcGVydGllcy5faWR9YH0gY2xhc3NOYW1lPXtzdHlsZXMuYW5zw7ZrQnV0dG9ufSAvPiBcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uT3JhbmdlIHRleHQ9XCJNZXIgaW5mb3JtYXRpb25cIiBocmVmPXtgL2tvcnQvJHtjYXJkLnByb3BlcnRpZXMuX2lkLnJlcGxhY2UoLyhcXHMpL2csICctJyl9YH0gY2xhc3NOYW1lPXtzdHlsZXMuYW5zw7ZrQnV0dG9ufSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VGlwcHkgY29udGVudD17IWlzQ2FyZENvbXBhcmUoY2FyZC5wcm9wZXJ0aWVzLl9pZCkgPyAnTMOkZ2cgdGlsbCBrcmVkaXRrb3J0IGkgasOkbWbDtnJlbHNlJyA6ICdUYSBib3J0IGtyZWRpdGtvcnQgdXIgasOkbWbDtnJlbHNlJ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGlzQ2FyZENvbXBhcmUoY2FyZC5wcm9wZXJ0aWVzLl9pZCkgPyByZW1vdmVGcm9tQ29tcGFyZShjYXJkLnByb3BlcnRpZXMuX2lkKSA6IGFkZFRvQ29tcGFyZShjYXJkLnByb3BlcnRpZXMpfSBjbGFzc05hbWU9e3N0eWxlcy50b0NvbXBhcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICB7aXNDYXJkQ29tcGFyZShjYXJkLnByb3BlcnRpZXMuX2lkKSA/IDxpIGNsYXNzTmFtZT1cImZhciBmYS10aW1lcy1jaXJjbGVcIj48L2k+IDogPGkgY2xhc3NOYW1lPVwiZmFzIGZhLWZpbGUtaW1wb3J0XCI+PC9pPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1RpcHB5PlxyXG4gICAgICAgPC9kaXY+XHJcbiAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWRpdGNhcmQ7IiwiaW1wb3J0IHsgQ3JlZGl0Q2FyZCB9IGZyb20gJy4uLy4uLy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZCc7XHJcbmltcG9ydCBDcmVkaXRjYXJkIGZyb20gJy4uL0NyZWRpdGNhcmQvQ3JlZGl0Y2FyZCc7XHJcbmltcG9ydCBDb21wYXJlQ29udGFpbmVyIGZyb20gJy4uLy4uLy4uL3N0YXRlL2NvbXBhcmUnO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNyZWRpdENhcmRzOiBDcmVkaXRDYXJkW107XHJcbn1cclxuXHJcbmNvbnN0IERpc3BsYXlDYXJkczogUmVhY3QuRkM8UHJvcHM+ID0gKHtjcmVkaXRDYXJkc30pIDogYW55ID0+IHtcclxuICByZXR1cm4gY3JlZGl0Q2FyZHMubWFwKENyZWRpdENhcmQgPT4ge1xyXG4gICAgcmV0dXJuIDxDb21wYXJlQ29udGFpbmVyLlByb3ZpZGVyPlxyXG4gICAgICA8Q3JlZGl0Y2FyZCBjYXJkPXtDcmVkaXRDYXJkfSAvPlxyXG4gICAgPC9Db21wYXJlQ29udGFpbmVyLlByb3ZpZGVyPlxyXG4gIH0pXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGlzcGxheUNhcmRzOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9SYXRpbmcubW9kdWxlLmNzcydcclxuXHJcbmNvbnN0IFJhdGluZyA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PHtyYXRpbmcgOiBzdHJpbmcsIGNsYXNzTmFtZT8gOiBzdHJpbmd9PiA9ICh7cmF0aW5nLCBjbGFzc05hbWV9KSA9PiB7XHJcbiAgICBsZXQgUmF0aW5nO1xyXG4gICAgc3dpdGNoICAocGFyc2VJbnQocmF0aW5nKSkge1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgUmF0aW5nID0gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya30+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgUmF0aW5nID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICBSYXRpbmcgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya30+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgIFJhdGluZyA9IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya30+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgIFJhdGluZyA9IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBSYXRpbmcgPSAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya30+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya30+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgICAgIHJldHVybiAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZX0+e1JhdGluZ308L2Rpdj47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhdGluZzsiLCJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0NhcmQgYXMgQ3JlZGl0Q2FyZEludGVyZmFjZX0gZnJvbSAnLi4vY2xhc3Nlcy9DcmVkaXRDYXJkJztcclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgY2FyZHM6IENyZWRpdENhcmRJbnRlcmZhY2VbXTtcclxuICBjb21wYXJlSWRzOiBDcmVkaXRDYXJkSW50ZXJmYWNlW107IFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSlcclxuXHJcbmV4cG9ydCBjb25zdCBTdGF0ZVByb3ZpZGVyIDogUmVhY3QuRkMgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGU8U3RhdGU+KHtcclxuICAgIGNhcmRzOltdLFxyXG4gICAgY29tcGFyZUlkczpbXVxyXG4gIH0pXHJcbiAgcmV0dXJuIDxTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tzdGF0ZSwgc2V0U3RhdGVdfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgPC9TdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbn1cclxuXHJcbiIsImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJy4vRmFkZUluU2VjdGlvbi5tb2R1bGUuY3NzJztcclxuXHJcbmZ1bmN0aW9uIEZhZGVJblNlY3Rpb24ocHJvcHMpIHtcclxuICAgIGNvbnN0IFtpc1Zpc2libGUsIHNldFZpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgZG9tUmVmID0gUmVhY3QudXNlUmVmKCk7XHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICBpZihpc1Zpc2libGUpIHJldHVyblxyXG4gICAgICAgIGlmKGRvbVJlZi5jdXJyZW50LmNsYXNzTmFtZSA9PT0gJ2ZhZGUtaW4tc2VjdGlvbmlzLXZpc2libGUnKSByZXR1cm5cclxuICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4gc2V0VmlzaWJsZShlbnRyeS5pc0ludGVyc2VjdGluZykpO1xyXG4gICAgICB9KTtcclxuICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb21SZWYuY3VycmVudCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT17YGZhZGUtaW4tc2VjdGlvbiAke2lzVmlzaWJsZSA/ICdpcy12aXNpYmxlJyA6ICcnfWB9XHJcbiAgICAgICAgcmVmPXtkb21SZWZ9XHJcbiAgICAgID5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IEZhZGVJblNlY3Rpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQ3JlZGl0Q2FyZCB9IGZyb20gJy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZCdcclxuaW1wb3J0IHsgQ2FyZCBhcyBDcmVkaXRDYXJkSW50ZXJmYWNlIH0gZnJvbSAnLi4vY2xhc3Nlcy9DcmVkaXRDYXJkJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0luZGV4L0hlYWRlci9IZWFkZXInO1xyXG5pbXBvcnQgV2h5VXMgZnJvbSAnLi4vY29tcG9uZW50cy9JbmRleC9XaHlVcy9XaHlVcyc7XHJcbmltcG9ydCBUb3BDYXJkcyBmcm9tICcuLi9jb21wb25lbnRzL0luZGV4L1RvcENhcmRzL1RvcENhcmRzJztcclxuaW1wb3J0IHsgQmVzdENhcmQgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0Jlc3RDYXJkJztcclxuaW1wb3J0IHsgZ2V0QmVzdENhcmQsIGdldENhcmRzIH0gZnJvbSAnLi4vcmVzb3VyY2VzL0NhcmRzJ1xyXG5pbXBvcnQgeyBDcmVkaXRDYXJkcyB9IGZyb20gJy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZHMnO1xyXG5pbXBvcnQgVXBkYXRlZEluZm9ybWF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvSW5kZXgvVXBkYXRlZEluZm9yYW10aW9uL1VwZGF0ZWRJbmZvcm1hdGlvbic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgY2FyZHMgOiBDcmVkaXRDYXJkcztcclxufVxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgbG9hZGluZyA6IGJvb2xlYW47XHJcbiAgICBjb21wYXJlSWRzIDogc3RyaW5nW107XHJcbiAgICBjYXJkczogQ3JlZGl0Q2FyZEludGVyZmFjZVtdO1xyXG4gICAgYmVzdGNhcmQ6IEJlc3RDYXJkO1xyXG59XHJcblxyXG5jbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiAge1xyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCBjYXJkcyA9IHRoaXMucHJvcHMuY2FyZHMubWFwKGNhcmQgPT4gbmV3IENyZWRpdENhcmQoY2FyZCkpO1xyXG4gICAgY29uc3QgbGlzdCA9IG5ldyBDcmVkaXRDYXJkcyhjYXJkcyk7XHJcbiAgICBjb25zdCBiZXN0Y2FyZCA9IHRoaXMucHJvcHMuYmVzdGNhcmRcclxuICByZXR1cm4gPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+a3JlZGl0a29ydHNrb2xsLmNvbTwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJLcmVkaXRrb3J0c2tvbGwuY29tIGrDpG1mw7ZyIG9saWthIGtyZWRpdGtvcnQgZsO2ciBhdHQgaGl0dGEgZGV0IGLDpHN0YSBrcmVkaWtvcnRldCBmw7ZyIGRpZy4gSsOkbWbDtnIga3JlZGl0a29ydCBzb20gUmVtZW1iZXIgZmxleCBvY2ggTm9yd2VnaWFuXCIgLz5cclxuICAgICAgPG1ldGEgbmFtZT1cInJvYm90c1wiIGNvbnRlbnQ9XCJpbmRleCwgZm9sbG93XCIgLz5cclxuICAgIDwvSGVhZD5cclxuICAgICAgPEhlYWRlciBiZXN0Y2FyZD17YmVzdGNhcmR9IC8+XHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgICAgPFdoeVVzIC8+XHJcbiAgICAgICAgICA8VXBkYXRlZEluZm9ybWF0aW9uIC8+XHJcbiAgICAgICAgICA8VG9wQ2FyZHMgY3JlZGl0Q2FyZHM9e2xpc3R9IC8+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgey8qIDxEaXNwbGF5Q2FyZHMgY3JlZGl0Q2FyZHM9e3RoaXMuc3RhdGUuY2FyZHN9IC8+ICAqL31cclxuICA8L2Rpdj5cclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb21pc2VzID0gW2dldENhcmRzKCksIGdldEJlc3RDYXJkKCldO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlcyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKVxyXG5cclxuXHJcbiAgICBjb25zdCBjYXJkc1Jlc3BvbnNlID0gcmVzcG9uc2VzWzBdIGFzIHtjYXJkcz86IENyZWRpdENhcmRJbnRlcmZhY2VbXSwgZXJyb3I/OiBib29sZWFufTtcclxuICAgIGNvbnN0IGJlc3RjYXJkUmVzcG9uc2UgPSByZXNwb25zZXNbMV0gYXMge2Jlc3RjYXJkPzogQmVzdENhcmQsIGVycm9yPzogYm9vbGVhbn07XHJcblxyXG5cclxuICAgIGlmKGNhcmRzUmVzcG9uc2UuZXJyb3IgfHwgYmVzdGNhcmRSZXNwb25zZS5lcnJvcikgdGhyb3cgbmV3IEVycm9yKClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wcyA6IHtcclxuICAgICAgICBjYXJkczogY2FyZHNSZXNwb25zZS5jYXJkcyxcclxuICAgICAgICBiZXN0Y2FyZDogYmVzdGNhcmRSZXNwb25zZS5iZXN0Y2FyZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgY2FyZHMgOiBbXSxcclxuICAgICAgICBiZXN0Y2FyZDogdW5kZWZpbmVkXHJcbiAgICAgIH0sXHJcbiAgICAgIHJldmFsaWRhdGU6IDM2MDAgKiA0XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlXHJcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250YWluZXIgfSBmcm9tIFwidW5zdGF0ZWQtbmV4dFwiXHJcblxyXG5mdW5jdGlvbiB1c2VDdXN0b21Ib29rKCkge1xyXG4gIGxldCBbY29tcGFyZUlkcywgc2V0Q29tcGFyZUlkc10gPSB1c2VTdGF0ZTxzdHJpbmdbXT4oW10pO1xyXG4gIGNvbnN0IGFkZFRvQ29tcGFyZSA9IChpZCA6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgSWRzID0gWy4uLmNvbXBhcmVJZHNdO1xyXG4gICAgY29uc3QgZXhpc3RzID0gSWRzLmZpbmQoY29tcGFyZUlkID0+IGNvbXBhcmVJZCA9PT0gaWQpO1xyXG4gICAgaWYgKGV4aXN0cykgcmV0dXJuIG51bGw7XHJcbiAgICBcclxuICAgIElkcy5wdXNoKGlkKTtcclxuXHJcbiAgICBzZXRDb21wYXJlSWRzKElkcylcclxuXHJcbiAgICByZXR1cm4gSWRzO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVtb3ZlRnJvbUNvbXBhcmUgPSAoaWQgOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IElkcyA6IHN0cmluZ1tdID0gWy4uLmNvbXBhcmVJZHNdO1xyXG5cclxuICAgIGNvbnN0IGluZGV4ID0gSWRzLmZpbmRJbmRleChjb21wYXJlSWRzID0+IGNvbXBhcmVJZHMgPT09IGlkKTtcclxuXHJcbiAgICBpZihpbmRleCA8IDApIHJldHVybiBudWxsO1xyXG5cclxuICAgIElkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgIHNldENvbXBhcmVJZHMoSWRzKTtcclxuXHJcbiAgICByZXR1cm4gSWRzO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2hlY2tJZkNhcmRDb21wYXJlID0gKGlkIDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBJZHMgOiBzdHJpbmdbXSA9IFsuLi5jb21wYXJlSWRzXTtcclxuXHJcbiAgICByZXR1cm4gSWRzLmZpbmQoY29tcGFyZUlkcyA9PiBjb21wYXJlSWRzID09PSBpZCk7XHJcbiAgfVxyXG4gIHJldHVybiB7IGNvbXBhcmVJZHMsIGFkZFRvQ29tcGFyZSwgcmVtb3ZlRnJvbUNvbXBhcmUsIGNoZWNrSWZDYXJkQ29tcGFyZX1cclxufVxyXG5cclxubGV0IENvbnRhaW5lciA9IGNyZWF0ZUNvbnRhaW5lcih1c2VDdXN0b21Ib29rKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyOyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkJlc3RDYXJkXCI6IFwiQmVzdENhcmRfQmVzdENhcmRfXzN3RWtxXCIsXG5cdFwiYnRuXCI6IFwiQmVzdENhcmRfYnRuX19BNFZjZVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiSGVhZGVyXCI6IFwiSGVhZGVyX0hlYWRlcl9fMUJTakhcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlRleHRIZWFkZXJcIjogXCJUZXh0SGVhZGVyX1RleHRIZWFkZXJfXzFKdmhJXCIsXG5cdFwiSGVhZGluZ1RpdGxlXCI6IFwiVGV4dEhlYWRlcl9IZWFkaW5nVGl0bGVfXzNjZGdYXCIsXG5cdFwibW92ZUluUmlnaHRcIjogXCJUZXh0SGVhZGVyX21vdmVJblJpZ2h0X18ydTN5VVwiLFxuXHRcIkhlYWRpbmdEZXNjcmlwdGlvblwiOiBcIlRleHRIZWFkZXJfSGVhZGluZ0Rlc2NyaXB0aW9uX18zQi1OTVwiLFxuXHRcIm1vdmVJbkxlZnRcIjogXCJUZXh0SGVhZGVyX21vdmVJbkxlZnRfXzMxdV81XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJUb3BDYXJkc1wiOiBcIlRvcENhcmRzX1RvcENhcmRzX18zdjBqZ1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiVXBkYXRlZEluZm9ybWF0aW9uXCI6IFwiVXBkYXRlZEluZm9ybWF0aW9uX1VwZGF0ZWRJbmZvcm1hdGlvbl9fTHp1V2pcIixcblx0XCJpbWdDb250YWluZXJcIjogXCJVcGRhdGVkSW5mb3JtYXRpb25faW1nQ29udGFpbmVyX18xSFg0OFwiLFxuXHRcImNvbnRlbnRcIjogXCJVcGRhdGVkSW5mb3JtYXRpb25fY29udGVudF9fU01IYXhcIixcblx0XCJidG5cIjogXCJVcGRhdGVkSW5mb3JtYXRpb25fYnRuX18zdjJ3SVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiV2h5VXNcIjogXCJXaHlVc19XaHlVc19fMUpJdWdcIixcblx0XCJyb3dcIjogXCJXaHlVc19yb3dfXzNDOTM5XCIsXG5cdFwidGV4dFwiOiBcIldoeVVzX3RleHRfXzM0anBVXCIsXG5cdFwiaGVhZFwiOiBcIldoeVVzX2hlYWRfXzJWbnZqXCIsXG5cdFwidGl0bGVcIjogXCJXaHlVc190aXRsZV9feGY4bjJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcmRcIjogXCJDcmVkaXRjYXJkX2NhcmRfXzNfTDRJXCIsXG5cdFwiSXNtb2JpbGVcIjogXCJDcmVkaXRjYXJkX0lzbW9iaWxlX18zTnBuZVwiLFxuXHRcIklzQ29tcHV0ZXJcIjogXCJDcmVkaXRjYXJkX0lzQ29tcHV0ZXJfXzFpMjd0XCIsXG5cdFwiY29udGVudFwiOiBcIkNyZWRpdGNhcmRfY29udGVudF9fMThVMHFcIixcblx0XCJzcGVjaWZpY1wiOiBcIkNyZWRpdGNhcmRfc3BlY2lmaWNfXzFwaHVJXCIsXG5cdFwiYnV0dG9uc1wiOiBcIkNyZWRpdGNhcmRfYnV0dG9uc19fTWN4OW9cIixcblx0XCJhbnPDtmtCdXR0b25cIjogXCJDcmVkaXRjYXJkX2Fuc19rQnV0dG9uX18zUXc4X1wiLFxuXHRcImdvb2RcIjogXCJDcmVkaXRjYXJkX2dvb2RfXzE1MWE3XCIsXG5cdFwiYmFkXCI6IFwiQ3JlZGl0Y2FyZF9iYWRfXzFpUjZkXCIsXG5cdFwidG9Db21wYXJlXCI6IFwiQ3JlZGl0Y2FyZF90b0NvbXBhcmVfX0hURGlUXCIsXG5cdFwicHJvcGVydGllc1wiOiBcIkNyZWRpdGNhcmRfcHJvcGVydGllc19fMlR5bUhcIixcblx0XCJwcm9wZXJ0aWVcIjogXCJDcmVkaXRjYXJkX3Byb3BlcnRpZV9fMzdERkhcIixcblx0XCJidG5CYWNrZ3JvdW5kXCI6IFwiQ3JlZGl0Y2FyZF9idG5CYWNrZ3JvdW5kX18xLUdHYlwiLFxuXHRcInJhdGluZ1wiOiBcIkNyZWRpdGNhcmRfcmF0aW5nX18zMTRDX1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGlnaHRcIjogXCJSYXRpbmdfbGlnaHRfXzFMNjNuXCIsXG5cdFwiZGFya1wiOiBcIlJhdGluZ19kYXJrX18yYWpveVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHRpcHB5anMvcmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdyaWQtc3lzdGVtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidW5zdGF0ZWQtbmV4dFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==