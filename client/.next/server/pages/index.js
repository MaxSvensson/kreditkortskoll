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
var _jsxFileName = "D:\\kreditkortskoll\\client\\src\\components\\Index\\Header\\BestCard\\BestCard.tsx";

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
var _jsxFileName = "D:\\kreditkortskoll\\client\\src\\components\\Index\\Header\\Header.tsx";
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
var _jsxFileName = "D:\\kreditkortskoll\\client\\src\\components\\Index\\Header\\TextHeader\\TextHeader.tsx";
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
  }, "Vi j\xE4mf\xF6r alla kreditkort och ger ut kvalitativa recensioner f\xF6r dig")), __jsx("div", {
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

/***/ "./src/components/Index/Test/Test.tsx":
/*!********************************************!*\
  !*** ./src/components/Index/Test/Test.tsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Test_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Test.module.css */ "./src/components/Index/Test/Test.module.css");
/* harmony import */ var _Test_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Test_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Ui_Buttons_ButtonBlue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Ui/Buttons/ButtonBlue */ "./src/components/Ui/Buttons/ButtonBlue.tsx");
var _jsxFileName = "D:\\kreditkortskoll\\client\\src\\components\\Index\\Test\\Test.tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





const Test = () => {
  return __jsx("div", {
    id: (_Test_module_css__WEBPACK_IMPORTED_MODULE_4___default().Test),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 12
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Col, {
    md: 12,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx("div", {
    id: (_Test_module_css__WEBPACK_IMPORTED_MODULE_4___default().imgContainer),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, __jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
    width: 500,
    height: 450,
    src: "/images/test.svg",
    id: (_Test_module_css__WEBPACK_IMPORTED_MODULE_4___default().Img),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 25
    }
  }))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Col, {
    md: 12,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, __jsx("div", {
    id: (_Test_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }, "V\xE5rt AI test"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 25
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur non, rerum dolor dicta, maxime laboriosam natus aliquam amet modi dolorum fugiat eos ad. Eum, eaque. Non deleniti expedita molestiae animi."), __jsx(_Ui_Buttons_ButtonBlue__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: (_Test_module_css__WEBPACK_IMPORTED_MODULE_4___default().Btn),
    type: "outline",
    text: "Starta testet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Test);

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
var _jsxFileName = "D:\\kreditkortskoll\\client\\src\\components\\Index\\TopCards\\TopCards.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




const TopCards = ({
  creditCards
}) => {
  const cards = creditCards.cards.splice(1, 5);
  return __jsx("div", {
    id: (_TopCards_module_css__WEBPACK_IMPORTED_MODULE_2___default().TopCards),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 12
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, "De popul\xE4raste kreditkort"), __jsx(_Ui_DisplayCards_DisplayCards__WEBPACK_IMPORTED_MODULE_1__.default, {
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
/* harmony import */ var _UpdatedInformation_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UpdatedInformation.module.css */ "./src/components/Index/UpdatedInforamtion/UpdatedInformation.module.css");
/* harmony import */ var _UpdatedInformation_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_UpdatedInformation_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Ui_Buttons_ButtonWhite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Ui/Buttons/ButtonWhite */ "./src/components/Ui/Buttons/ButtonWhite.tsx");
var _jsxFileName = "D:\\kreditkortskoll\\client\\src\\components\\Index\\UpdatedInforamtion\\UpdatedInformation.tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





const UpdatedInformation = () => {
  return __jsx("div", {
    id: (_UpdatedInformation_module_css__WEBPACK_IMPORTED_MODULE_4___default().UpdatedInformation),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 12
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Col, {
    md: 12,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx("div", {
    id: (_UpdatedInformation_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 25
    }
  }, "V\xE5rt AI test"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur non, rerum dolor dicta, maxime laboriosam natus aliquam amet modi dolorum fugiat eos ad. Eum, eaque. Non deleniti expedita molestiae animi."), __jsx(_Ui_Buttons_ButtonWhite__WEBPACK_IMPORTED_MODULE_3__.default, {
    className: (_UpdatedInformation_module_css__WEBPACK_IMPORTED_MODULE_4___default().Btn),
    type: "full",
    text: "Starta testet",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 25
    }
  }))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Col, {
    md: 12,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("div", {
    id: (_UpdatedInformation_module_css__WEBPACK_IMPORTED_MODULE_4___default().imgContainer),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
    width: 500,
    height: 550,
    src: "/images/updated.svg",
    id: (_UpdatedInformation_module_css__WEBPACK_IMPORTED_MODULE_4___default().Img),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }))))));
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
var _jsxFileName = "D:\\kreditkortskoll\\client\\src\\components\\Index\\WhyUs\\WhyUs.tsx";
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
var _jsxFileName = "D:\\kreditkortskoll\\client\\src\\components\\Ui\\Buttons\\ButtonBlue.tsx";

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

/***/ "./src/components/Ui/Categories/Categories.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Ui/Categories/Categories.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Categories_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Categories.module.css */ "./src/components/Ui/Categories/Categories.module.css");
/* harmony import */ var _Categories_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Categories_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Category_Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Category/Category */ "./src/components/Ui/Categories/Category/Category.tsx");
var _jsxFileName = "D:\\kreditkortskoll\\client\\src\\components\\Ui\\Categories\\Categories.tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




const Categories = () => {
  return __jsx("div", {
    id: (_Categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().Categories),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 12
    }
  }, __jsx("div", {
    id: (_Categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx("p", {
    id: (_Categories_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, "Kreditkort kategorier"), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Row, {
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
    sm: 6,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, __jsx(_Category_Category__WEBPACK_IMPORTED_MODULE_2__.default, {
    name: "Bra r\xE4nta",
    href: "/kategorier/bra-ranta",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  })), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
    sm: 6,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx(_Category_Category__WEBPACK_IMPORTED_MODULE_2__.default, {
    name: "Resor",
    href: "/kategorier/resor",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  })), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
    sm: 6,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx(_Category_Category__WEBPACK_IMPORTED_MODULE_2__.default, {
    name: "Cashback",
    href: "/kategorier/cashback",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  })), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
    sm: 6,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx(_Category_Category__WEBPACK_IMPORTED_MODULE_2__.default, {
    name: "Shopping",
    href: "/kategorier/shopping",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  }))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Row, {
    justify: "center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
    sm: 6,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx(_Category_Category__WEBPACK_IMPORTED_MODULE_2__.default, {
    name: "tanka",
    href: "/kategorier/tanka",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  })), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
    sm: 6,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, __jsx(_Category_Category__WEBPACK_IMPORTED_MODULE_2__.default, {
    name: "Studenter",
    href: "/kategorier/studenter",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  })), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
    sm: 6,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx(_Category_Category__WEBPACK_IMPORTED_MODULE_2__.default, {
    name: "Ingen \xE5rsavgift",
    href: "/kategorier/ingen-arsavgift",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  })), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
    sm: 6,
    md: 6,
    lg: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx(_Category_Category__WEBPACK_IMPORTED_MODULE_2__.default, {
    name: "Premium",
    href: "/kategorier/premium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Categories);

/***/ }),

/***/ "./src/components/Ui/Categories/Category/Category.tsx":
/*!************************************************************!*\
  !*** ./src/components/Ui/Categories/Category/Category.tsx ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Category_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Category.module.css */ "./src/components/Ui/Categories/Category/Category.module.css");
/* harmony import */ var _Category_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Category_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\kreditkortskoll\\client\\src\\components\\Ui\\Categories\\Category\\Category.tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




const Category = ({
  name,
  href
}) => {
  return __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: href,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 12
    }
  }, __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
    whileHover: {
      scale: 1.05,
      y: -1
    },
    className: (_Category_module_css__WEBPACK_IMPORTED_MODULE_3___default().Category),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "fas fa-gem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, name))));
};

/* harmony default export */ __webpack_exports__["default"] = (Category);

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
var _jsxFileName = "D:\\kreditkortskoll\\client\\src\\components\\Ui\\Creditcard\\Creditcard.tsx";
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
    const index = State.compareIds.findIndex(Card => Card.id === id);
    if (index < 0) return;
    State.compareIds.splice(index, 1);
    setState(State);
  };

  const isCardCompare = id => {
    const exists = state.compareIds.find(Card => Card.id === id);
    return exists ? true : false;
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 12
    }
  }, __jsx("div", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().card),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 8
    }
  }, __jsx("div", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().content),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().Ismobile),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, card.properties.name), __jsx("span", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().Ismobile),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(_Rating_Rating__WEBPACK_IMPORTED_MODULE_1__.default, {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().rating),
    rating: card.properties.rating,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 47
    }
  })), __jsx("img", {
    alt: `kreditkort ${card.properties.name}`,
    src: card.properties.img,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().IsComputer),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, card.properties.name), __jsx("span", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().IsComputer),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx(_Rating_Rating__WEBPACK_IMPORTED_MODULE_1__.default, {
    rating: card.properties.rating,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 53
    }
  })), __jsx("div", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().properties),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, card.properties.properties.map(propertie => {
    if (propertie.type === 'GOOD') {
      return __jsx("div", {
        className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().propertie),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 44
        }
      }, __jsx("span", {
        className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().good),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 41
        }
      }, __jsx("i", {
        className: "fas fa-check-circle",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 71
        }
      })), __jsx("li", {
        key: propertie.text,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 41
        }
      }, propertie.text));
    }
  }))))), __jsx("div", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().specific),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, card.properties.specifics.map(specific => {
    const text = specific.split(': ');
    return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
      key: specific,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 32
      }
    }, __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 29
      }
    }, __jsx("span", {
      style: {
        fontWeight: 'bold'
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 33
      }
    }, text[0], ":"), " ", __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 85
      }
    }, text[1])));
  })))), __jsx("div", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().btnBackground),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().buttons),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, __jsx(_Buttons_ButtonBlue__WEBPACK_IMPORTED_MODULE_4__.default, {
    type: "full",
    text: "Ans\xF6k nu!",
    href: `/Redirect?card=${card.properties.id}`,
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default()["ansökButton"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }), __jsx(_Buttons_ButtonBlue__WEBPACK_IMPORTED_MODULE_4__.default, {
    type: "outline",
    text: "Mer information",
    href: `/kort/${card.properties.name}`,
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default()["ansökButton"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 21
    }
  }))), __jsx((_tippyjs_react__WEBPACK_IMPORTED_MODULE_2___default()), {
    content: !isCardCompare(card.properties.id) ? 'Lägg till kreditkort i jämförelse' : 'Ta bort kreditkort ur jämförelse',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx("div", {
    onClick: () => isCardCompare(card.properties.id) ? removeFromCompare(card.properties.id) : addToCompare(card.properties),
    className: (_Creditcard_module_css__WEBPACK_IMPORTED_MODULE_6___default().toCompare),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 17
    }
  }, isCardCompare(card.properties.id) ? __jsx("i", {
    className: "far fa-times-circle",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 59
    }
  }) : __jsx("i", {
    className: "fas fa-file-import",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 101
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
var _jsxFileName = "D:\\kreditkortskoll\\client\\src\\components\\Ui\\DisplayCards\\DisplayCards.tsx";

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
var _jsxFileName = "D:\\kreditkortskoll\\client\\src\\components\\Ui\\Rating\\Rating.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const Rating = ({
  rating,
  className
}) => {
  let Rating;

  switch (rating) {
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
var _jsxFileName = "D:\\kreditkortskoll\\client\\src\\context\\State.tsx";
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
var _jsxFileName = "D:\\kreditkortskoll\\client\\src\\hoc\\FadeInSection\\FadeInSection.js";
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
/* harmony import */ var _components_Ui_Categories_Categories__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Ui/Categories/Categories */ "./src/components/Ui/Categories/Categories.tsx");
/* harmony import */ var _components_Index_Test_Test__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Index/Test/Test */ "./src/components/Index/Test/Test.tsx");
var _jsxFileName = "D:\\kreditkortskoll\\client\\src\\pages\\index.tsx";
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
        lineNumber: 33,
        columnNumber: 10
      }
    }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 5
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 7
      }
    }, "Alla kreditkort"), __jsx("meta", {
      name: "description",
      content: "Kreditkortskoll.com j\xE4mf\xF6r olika kreditkort f\xF6r att hitta det b\xE4sta kredikortet f\xF6r dig. J\xE4mf\xF6r kreditkort som Remember flex och Norwegian",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }
    }), __jsx("meta", {
      name: "robots",
      content: "index, follow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 7
      }
    })), __jsx(_components_Index_Header_Header__WEBPACK_IMPORTED_MODULE_2__.default, {
      bestcard: bestcard,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 7
      }
    }), __jsx("main", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }
    }, __jsx("section", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }
    }, __jsx(_components_Index_WhyUs_WhyUs__WEBPACK_IMPORTED_MODULE_3__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }
    })), __jsx("section", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }
    }, __jsx(_components_Index_UpdatedInforamtion_UpdatedInformation__WEBPACK_IMPORTED_MODULE_7__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 11
      }
    })), __jsx("section", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }
    }, __jsx(_components_Index_Test_Test__WEBPACK_IMPORTED_MODULE_10__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 11
      }
    })), __jsx("section", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }
    }, __jsx(_components_Ui_Categories_Categories__WEBPACK_IMPORTED_MODULE_9__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 11
      }
    })), __jsx("section", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }
    }, __jsx(_components_Index_TopCards_TopCards__WEBPACK_IMPORTED_MODULE_4__.default, {
      creditCards: list,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }
    }))));
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

/***/ "./src/components/Index/Test/Test.module.css":
/*!***************************************************!*\
  !*** ./src/components/Index/Test/Test.module.css ***!
  \***************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"Test": "Test_Test__2idfh",
	"Img": "Test_Img__1WDLj",
	"content": "Test_content__LDQvv",
	"Btn": "Test_Btn__2P_Hl",
	"UpdatedInformation": "Test_UpdatedInformation__2sCuk"
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
	"Img": "UpdatedInformation_Img__35ru9",
	"content": "UpdatedInformation_content__SMHax",
	"Btn": "UpdatedInformation_Btn__2Cih-",
	"imgContainer": "UpdatedInformation_imgContainer__1HX48"
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

/***/ "./src/components/Ui/Categories/Categories.module.css":
/*!************************************************************!*\
  !*** ./src/components/Ui/Categories/Categories.module.css ***!
  \************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"Categories": "Categories_Categories__1L4AU",
	"content": "Categories_content__1Q_XR",
	"title": "Categories_title__2ygPH"
};


/***/ }),

/***/ "./src/components/Ui/Categories/Category/Category.module.css":
/*!*******************************************************************!*\
  !*** ./src/components/Ui/Categories/Category/Category.module.css ***!
  \*******************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"Category": "Category_Category__mCA_u"
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

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = require("framer-motion");;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY2xhc3Nlcy9DcmVkaXRDYXJkcy50cyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9JbmRleC9IZWFkZXIvQmVzdENhcmQvQmVzdENhcmQudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L0hlYWRlci9IZWFkZXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L0hlYWRlci9UZXh0SGVhZGVyL1RleHRIZWFkZXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L1Rlc3QvVGVzdC50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvSW5kZXgvVG9wQ2FyZHMvVG9wQ2FyZHMudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L1VwZGF0ZWRJbmZvcmFtdGlvbi9VcGRhdGVkSW5mb3JtYXRpb24udHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L1doeVVzL1doeVVzLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9CdXR0b25zL0J1dHRvbkJsdWUudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL0NhdGVnb3JpZXMvQ2F0ZWdvcmllcy50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvQ2F0ZWdvcmllcy9DYXRlZ29yeS9DYXRlZ29yeS50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvQ3JlZGl0Y2FyZC9DcmVkaXRjYXJkLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9EaXNwbGF5Q2FyZHMvRGlzcGxheUNhcmRzLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9SYXRpbmcvUmF0aW5nLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29udGV4dC9TdGF0ZS50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2hvYy9GYWRlSW5TZWN0aW9uL0ZhZGVJblNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvc3RhdGUvY29tcGFyZS50cyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9JbmRleC9IZWFkZXIvQmVzdENhcmQvQmVzdENhcmQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9JbmRleC9IZWFkZXIvSGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvSW5kZXgvSGVhZGVyL1RleHRIZWFkZXIvVGV4dEhlYWRlci5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L1Rlc3QvVGVzdC5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L1RvcENhcmRzL1RvcENhcmRzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvSW5kZXgvVXBkYXRlZEluZm9yYW10aW9uL1VwZGF0ZWRJbmZvcm1hdGlvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L1doeVVzL1doeVVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvQ2F0ZWdvcmllcy9DYXRlZ29yeS9DYXRlZ29yeS5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL0NyZWRpdGNhcmQvQ3JlZGl0Y2FyZC5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL1JhdGluZy9SYXRpbmcubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJAdGlwcHlqcy9yZWFjdFwiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcInJlYWN0LWdyaWQtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJ1bnN0YXRlZC1uZXh0XCIiXSwibmFtZXMiOlsiQ3JlZGl0Q2FyZHMiLCJjb25zdHJ1Y3RvciIsImNhcmRzIiwiZ2V0Q2FyZHMiLCJCZXN0Q2FyZCIsImJlc3RjYXJkIiwic3R5bGVzIiwiaW1nIiwiZGVzY3JpcHRpb24iLCJuYW1lIiwiSGVhZGVyIiwiVGV4dEhlYWRlciIsIlRlc3QiLCJUb3BDYXJkcyIsImNyZWRpdENhcmRzIiwic3BsaWNlIiwiVXBkYXRlZEluZm9ybWF0aW9uIiwiV2h5VXMiLCJtYXJnaW5Ub3AiLCJCdXR0b25CbHVlIiwicHJvcHMiLCJocmVmIiwiY2xhc3NOYW1lIiwidHlwZSIsIm9uQ2xpY2siLCJ0ZXh0IiwiQ2F0ZWdvcmllcyIsIkNhdGVnb3J5Iiwic2NhbGUiLCJ5IiwiQ3JlZGl0Y2FyZCIsImNhcmQiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlQ29udGV4dCIsIlN0YXRlQ29udGV4dCIsImFkZFRvQ29tcGFyZSIsIlN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiY29tcGFyZUlkcyIsInB1c2giLCJyZW1vdmVGcm9tQ29tcGFyZSIsImlkIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJDYXJkIiwiaXNDYXJkQ29tcGFyZSIsImV4aXN0cyIsImZpbmQiLCJwcm9wZXJ0aWVzIiwicmF0aW5nIiwibWFwIiwicHJvcGVydGllIiwic3BlY2lmaWNzIiwic3BlY2lmaWMiLCJzcGxpdCIsImZvbnRXZWlnaHQiLCJEaXNwbGF5Q2FyZHMiLCJDcmVkaXRDYXJkIiwiUmF0aW5nIiwiY3JlYXRlQ29udGV4dCIsIlN0YXRlUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiRmFkZUluU2VjdGlvbiIsImlzVmlzaWJsZSIsInNldFZpc2libGUiLCJSZWFjdCIsImRvbVJlZiIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiY3VycmVudCIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwib2JzZXJ2ZSIsInVub2JzZXJ2ZSIsIkluZGV4UGFnZSIsInJlbmRlciIsImxpc3QiLCJnZXRTdGF0aWNQcm9wcyIsInByb21pc2VzIiwiZ2V0QmVzdENhcmQiLCJyZXNwb25zZXMiLCJQcm9taXNlIiwiYWxsIiwiY2FyZHNSZXNwb25zZSIsImJlc3RjYXJkUmVzcG9uc2UiLCJlcnJvciIsIkVycm9yIiwidW5kZWZpbmVkIiwicmV2YWxpZGF0ZSIsInVzZUN1c3RvbUhvb2siLCJzZXRDb21wYXJlSWRzIiwiSWRzIiwiY29tcGFyZUlkIiwiY2hlY2tJZkNhcmRDb21wYXJlIiwiQ29udGFpbmVyIiwiY3JlYXRlQ29udGFpbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVPLE1BQU1BLFdBQU4sQ0FBa0I7QUFDdkJDLGFBQVcsQ0FBUUMsS0FBb0IsR0FBRyxFQUEvQixFQUFtQztBQUFBLFNBQTNCQSxLQUEyQixHQUEzQkEsS0FBMkI7QUFBRTs7QUFFaERDLFVBQVEsR0FBbUI7QUFDekIsV0FBTyxLQUFLRCxLQUFaO0FBQ0Q7O0FBTHNCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0NBekI7O0FBQ0E7QUFFQTs7QUFNQSxNQUFNRSxRQUF5QyxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWdCO0FBQ2hFLFNBQU87QUFBSyxNQUFFLEVBQUVDLHNFQUFUO0FBQUE7QUFB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QTVCO0FBQStDd0Q7QUFBL0MsR0FBUDtBQUNEOztBQUVELElBQUlDLFNBQVMsR0FBR0MsOERBQWUsQ0FBQ04sYUFBRCxDQUEvQjtBQUVBLCtEQUFlSyxTQUFmLEU7Ozs7Ozs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkEsNEM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsMkMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDcmVkaXRDYXJkIH0gZnJvbSAnLi9DcmVkaXRDYXJkJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVkaXRDYXJkcyB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGNhcmRzIDogQ3JlZGl0Q2FyZFtdID0gW10pIHt9XHJcblxyXG4gIGdldENhcmRzICgpIDogQ3JlZGl0Q2FyZFtdIHtcclxuICAgIHJldHVybiB0aGlzLmNhcmRzO1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vQmVzdENhcmQubW9kdWxlLmNzcyc7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgQmVzdENhcmQgYXMgQmVzdENhcmRJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9pbnRlcmZhY2VzL0Jlc3RDYXJkJztcclxuaW1wb3J0IEJ1dHRvbldoaXRlIGZyb20gJy4uLy4uLy4uL1VpL0J1dHRvbnMvQnV0dG9uV2hpdGUnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBiZXN0Y2FyZCA6IEJlc3RDYXJkSW50ZXJmYWNlO1xyXG59XHJcblxyXG5jb25zdCBCZXN0Q2FyZCA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7YmVzdGNhcmR9KSA9PiB7XHJcbiAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5CZXN0Q2FyZH0+XHJcbiAgICAgICAgPGgzPkLDpHN0YSBrb3J0ZXQgbnU8L2gzPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXtiZXN0Y2FyZC5pbWd9XHJcbiAgICAgICAgICB3aWR0aD17MjUwfVxyXG4gICAgICAgICAgaGVpZ2h0PXsxNDB9XHJcbiAgICAgICAgICBhbHQ9XCJCw6RzdGEga3JlZGl0a29ydGV0IGp1c3QgbnUhXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiA8aDQ+e2Jlc3RjYXJkLm5hbWV9PC9oND4gKi99XHJcbiAgICAgICAgPHA+e2Jlc3RjYXJkLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8QnV0dG9uV2hpdGUgdHlwZT1cImZ1bGxcIiB0ZXh0PVwiQW5zw7ZrIG51IVwiIGhyZWY9e2AvUmVkaXJlY3Q/Y2FyZD0ke2Jlc3RjYXJkLm5hbWV9YH0gY2xhc3NOYW1lPXtzdHlsZXMuYnRufSAvPlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCZXN0Q2FyZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uLy4uL2hvYy9Db250YWluZXIvQ29udGFpbmVyJztcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ncmlkLXN5c3RlbSc7XHJcbmltcG9ydCBUZXh0SGVhZGVyIGZyb20gJy4vVGV4dEhlYWRlci9UZXh0SGVhZGVyJztcclxuaW1wb3J0IEJlc3RDYXJkIGZyb20gJy4vQmVzdENhcmQvQmVzdENhcmQnO1xyXG5pbXBvcnQgeyBCZXN0Q2FyZCBhcyBCZXN0Q2FyZEludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvQmVzdENhcmQnO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgYmVzdGNhcmQgOiBCZXN0Q2FyZEludGVyZmFjZVxyXG59XHJcblxyXG5jb25zdCBIZWFkZXIgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoe2Jlc3RjYXJkfSkgOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBpZD17c3R5bGVzLkhlYWRlcn0+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8Um93IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSBsZz17N30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0SGVhZGVyIC8+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MTJ9IGxnPXs1fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJlc3RDYXJkIGJlc3RjYXJkPXtiZXN0Y2FyZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RleHRIZWFkZXIubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBUZXh0SGVhZGVyIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKSA6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGlkPXtzdHlsZXMuVGV4dEhlYWRlcn0+XHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLkhlYWRpbmdUaXRsZX0+XHJcbiAgICAgICAgICAgIDxoMT5WaSBqw6RtZsO2ciBhbGxhIGtyZWRpdGtvcnQgb2NoIGdlciB1dCBrdmFsaXRhdGl2YSByZWNlbnNpb25lciBmw7ZyIGRpZzwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLkhlYWRpbmdEZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgIDxwPnN1c2NpcGl0IHF1YXMgc2FlcGUgYmxhbmRpdGlpcywgb2JjYWVjYXRpIGV2ZW5pZXQgcmF0aW9uZSBhIG1vZGkgY29uc2VjdGV0dXIgc2l0IGVvcyBlYXF1ZSBkb2xvcmlidXMgZG9sb3JlPzwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRIZWFkZXI7IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Rlc3QubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWdyaWQtc3lzdGVtJztcclxuaW1wb3J0IEJ1dHRvbkJsdWUgZnJvbSAnLi4vLi4vVWkvQnV0dG9ucy9CdXR0b25CbHVlJztcclxuXHJcbmNvbnN0IFRlc3QgOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGlkPXtzdHlsZXMuVGVzdH0+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSBsZz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17c3R5bGVzLmltZ0NvbnRhaW5lcn0+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3Rlc3Quc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtzdHlsZXMuSW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0gbGc9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlbDpXJ0IEFJIHRlc3Q8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBc3Blcm5hdHVyIG5vbiwgcmVydW0gZG9sb3IgZGljdGEsIG1heGltZSBsYWJvcmlvc2FtIG5hdHVzIGFsaXF1YW0gYW1ldCBtb2RpIGRvbG9ydW0gZnVnaWF0IGVvcyBhZC4gRXVtLCBlYXF1ZS4gTm9uIGRlbGVuaXRpIGV4cGVkaXRhIG1vbGVzdGlhZSBhbmltaS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25CbHVlIGNsYXNzTmFtZT17c3R5bGVzLkJ0bn0gdHlwZT1cIm91dGxpbmVcIiB0ZXh0PVwiU3RhcnRhIHRlc3RldFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXN0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENyZWRpdENhcmRzIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9DcmVkaXRDYXJkcyc7XHJcbmltcG9ydCBEaXNwbGF5Q2FyZHMgZnJvbSAnLi4vLi4vVWkvRGlzcGxheUNhcmRzL0Rpc3BsYXlDYXJkcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ub3BDYXJkcy5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IFRvcENhcmRzIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8e2NyZWRpdENhcmRzIDogQ3JlZGl0Q2FyZHN9PiA9ICh7Y3JlZGl0Q2FyZHN9KSA6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IGNhcmRzID0gY3JlZGl0Q2FyZHMuY2FyZHMuc3BsaWNlKDEsIDUpXHJcbiAgICByZXR1cm4gPGRpdiBpZD17c3R5bGVzLlRvcENhcmRzfT4gICAgXHJcbiAgICAgICAgPGg0PkRlIHBvcHVsw6RyYXN0ZSBrcmVkaXRrb3J0PC9oND5cclxuICAgICAgICA8RGlzcGxheUNhcmRzIGNyZWRpdENhcmRzPXtjYXJkc30gLz5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BDYXJkczsiLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vVXBkYXRlZEluZm9ybWF0aW9uLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ncmlkLXN5c3RlbSc7XHJcbmltcG9ydCBCdXR0b25XaGl0ZSBmcm9tICcuLi8uLi9VaS9CdXR0b25zL0J1dHRvbldoaXRlJztcclxuXHJcbmNvbnN0IFVwZGF0ZWRJbmZvcm1hdGlvbiA6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5VcGRhdGVkSW5mb3JtYXRpb259PlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0gbGc9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlbDpXJ0IEFJIHRlc3Q8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBc3Blcm5hdHVyIG5vbiwgcmVydW0gZG9sb3IgZGljdGEsIG1heGltZSBsYWJvcmlvc2FtIG5hdHVzIGFsaXF1YW0gYW1ldCBtb2RpIGRvbG9ydW0gZnVnaWF0IGVvcyBhZC4gRXVtLCBlYXF1ZS4gTm9uIGRlbGVuaXRpIGV4cGVkaXRhIG1vbGVzdGlhZSBhbmltaS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25XaGl0ZSBjbGFzc05hbWU9e3N0eWxlcy5CdG59IHR5cGU9XCJmdWxsXCIgdGV4dD1cIlN0YXJ0YSB0ZXN0ZXRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSBsZz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17c3R5bGVzLmltZ0NvbnRhaW5lcn0+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3VwZGF0ZWQuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtzdHlsZXMuSW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZWRJbmZvcm1hdGlvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vV2h5VXMubW9kdWxlLmNzcyc7XHJcblxyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uLy4uL2hvYy9Db250YWluZXIvQ29udGFpbmVyJztcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ncmlkLXN5c3RlbSc7XHJcbmltcG9ydCBGYWRlSW5TZWN0aW9uIGZyb20gJy4uLy4uLy4uL2hvYy9GYWRlSW5TZWN0aW9uL0ZhZGVJblNlY3Rpb24nO1xyXG5cclxuXHJcbmNvbnN0IFdoeVVzIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKSA6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGlkPXtzdHlsZXMuV2h5VXN9PlxyXG4gICAgPEZhZGVJblNlY3Rpb24+ICAgICAgICBcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8aDI+SHVyIGthbiB2aSBoasOkbHBhIGRpZz88L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICA8Um93IGFsaWduPVwiZW5kXCIganVzdGlmeT1cImVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbW9uZXktY2hlY2tcIj48L2k+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+PGI+T3BhcnRpc2thIGrDpG1mw7ZyZWxzZXI8L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUHJhZXNlbnRpdW0sPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbW9uZXktY2hlY2tcIj48L2k+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+PGI+T3BhcnRpc2thIGrDpG1mw7ZyZWxzZXI8L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUHJhZXNlbnRpdW0sPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tb25leS1jaGVja1wiPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT48Yj5PcGFydGlza2EgasOkbWbDtnJlbHNlcjwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUHJhZXNlbnRpdW0sPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7bWFyZ2luVG9wOjUwfX0gYWxpZ249XCJlbmRcIiBqdXN0aWZ5PVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tb25leS1jaGVja1wiPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT48Yj5PcGFydGlza2EgasOkbWbDtnJlbHNlcjwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQcmFlc2VudGl1bSw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tb25leS1jaGVja1wiPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT48Yj5PcGFydGlza2EgasOkbWbDtnJlbHNlcjwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQcmFlc2VudGl1bSw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGkgY2xhc3NOYW1lPVwiZmFzIGZhLW1vbmV5LWNoZWNrXCI+PC9pPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PjxiPk9wYXJ0aXNrYSBqw6RtZsO2cmVsc2VyPC9iPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQcmFlc2VudGl1bSw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvRmFkZUluU2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdoeVVzOyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b25zLm1vZHVsZS5jc3MnO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGhyZWY/OiBzdHJpbmc7XHJcbiAgb25DbGljaz8gOiAoKSA9PiB2b2lkO1xyXG4gIGNsYXNzTmFtZT8gOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBCdXR0b25CbHVlIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgIHJldHVybiA8TGluayBocmVmPXtwcm9wcy5ocmVmID8gcHJvcHMuaHJlZiA6ICcjJ30+XHJcbiAgICA8YSBjbGFzc05hbWU9e2Ake3N0eWxlcy5CdXR0b25PcmFuZ2V9ICR7cHJvcHMuY2xhc3NOYW1lfSAke3Byb3BzLnR5cGUgPT09IFwib3V0bGluZVwiID8gc3R5bGVzLm91dGxpbmVkQmx1ZSA6IHByb3BzLnR5cGUgPT09IFwiZnVsbFwiID8gc3R5bGVzLmZ1bGxCbHVlIDogbnVsbH1gfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICB7cHJvcHMudGV4dH1cclxuICAgIDwvYT5cclxuICA8L0xpbms+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkJsdWU7IiwiaW1wb3J0IHsgQ29sLCBDb250YWluZXIsIFJvdyB9IGZyb20gJ3JlYWN0LWdyaWQtc3lzdGVtJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NhdGVnb3JpZXMubW9kdWxlLmNzcydcclxuaW1wb3J0IENhdGVnb3J5IGZyb20gJy4vQ2F0ZWdvcnkvQ2F0ZWdvcnknO1xyXG5cclxuXHJcbmNvbnN0IENhdGVnb3JpZXMgOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGlkPXtzdHlsZXMuQ2F0ZWdvcmllc30+XHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8cCBpZD17c3R5bGVzLnRpdGxlfT5LcmVkaXRrb3J0IGthdGVnb3JpZXI8L3A+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8Um93IGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs2fSBtZD17Nn0gbGc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnkgbmFtZT1cIkJyYSByw6RudGFcIiBocmVmPVwiL2thdGVnb3JpZXIvYnJhLXJhbnRhXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezZ9IG1kPXs2fSBsZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeSBuYW1lPVwiUmVzb3JcIiBocmVmPVwiL2thdGVnb3JpZXIvcmVzb3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezZ9IG1kPXs2fSBsZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeSBuYW1lPVwiQ2FzaGJhY2tcIiBocmVmPVwiL2thdGVnb3JpZXIvY2FzaGJhY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezZ9IG1kPXs2fSBsZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeSBuYW1lPVwiU2hvcHBpbmdcIiBocmVmPVwiL2thdGVnb3JpZXIvc2hvcHBpbmdcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Um93IGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs2fSBtZD17Nn0gbGc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnkgbmFtZT1cInRhbmthXCIgaHJlZj1cIi9rYXRlZ29yaWVyL3RhbmthXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs2fSBtZD17Nn0gbGc9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnkgbmFtZT1cIlN0dWRlbnRlclwiIGhyZWY9XCIva2F0ZWdvcmllci9zdHVkZW50ZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezZ9IG1kPXs2fSBsZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeSBuYW1lPVwiSW5nZW4gw6Vyc2F2Z2lmdFwiIGhyZWY9XCIva2F0ZWdvcmllci9pbmdlbi1hcnNhdmdpZnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezZ9IG1kPXs2fSBsZz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeSBuYW1lPVwiUHJlbWl1bVwiIGhyZWY9XCIva2F0ZWdvcmllci9wcmVtaXVtXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yaWVzOyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXRlZ29yeS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbidcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBocmVmOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IENhdGVnb3J5IDogUmVhY3QuRkM8UHJvcHM+ID0gKHtuYW1lLCBocmVmfSkgPT4ge1xyXG4gICAgcmV0dXJuIDxMaW5rIGhyZWY9e2hyZWZ9PlxyXG4gICAgICAgIDxtb3Rpb24uZGl2IHdoaWxlSG92ZXI9e3tzY2FsZToxLjA1LCB5Oi0xfX0gY2xhc3NOYW1lPXtzdHlsZXMuQ2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1nZW1cIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8cD57bmFtZX08L3A+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICA8L0xpbms+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5OyIsImltcG9ydCBSZWFjdCwge3VzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NyZWRpdGNhcmQubW9kdWxlLmNzcydcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IFJhdGluZyBmcm9tICcuLi9SYXRpbmcvUmF0aW5nJztcclxuaW1wb3J0IHsgQ3JlZGl0Q2FyZCB9IGZyb20gJy4uLy4uLy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZCc7XHJcbmltcG9ydCBUaXBweSBmcm9tICdAdGlwcHlqcy9yZWFjdCc7XHJcbmltcG9ydCAndGlwcHkuanMvZGlzdC90aXBweS5jc3MnO1xyXG5pbXBvcnQgQnV0dG9uT3JhbmdlIGZyb20gJy4uL0J1dHRvbnMvQnV0dG9uQmx1ZSc7XHJcbmltcG9ydCB7Q2FyZCBhcyBDcmVkaXRDYXJkSW50ZXJmYWNlfSBmcm9tICcuLi8uLi8uLi9jbGFzc2VzL0NyZWRpdENhcmQnXHJcbmltcG9ydCB7IFN0YXRlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbnRleHQvU3RhdGUnO1xyXG5cclxuXHJcblxyXG5jb25zdCBDcmVkaXRjYXJkIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8e2NhcmQgOiBDcmVkaXRDYXJkfT4gPSAoe2NhcmR9KSA9PiB7XHJcblxyXG5cclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlQ29udGV4dDxhbnk+KFN0YXRlQ29udGV4dClcclxuICAgIC8vIGNvbnN0IGlzQ2FyZENvbXBhcmUgPSBjb21wYXJlU3RhdGUuY2hlY2tJZkNhcmRDb21wYXJlKGNhcmQucHJvcGVydGllcy5faWQpXHJcblxyXG5cclxuICAgIGNvbnN0IGFkZFRvQ29tcGFyZSA9IChjYXJkIDogQ3JlZGl0Q2FyZEludGVyZmFjZSkgPT4ge1xyXG4gICAgICAgIGxldCBTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcclxuICAgICAgICBTdGF0ZS5jb21wYXJlSWRzLnB1c2goY2FyZClcclxuICAgICAgICBzZXRTdGF0ZShTdGF0ZSlcclxuICAgIH0gICBcclxuXHJcbiAgICBjb25zdCByZW1vdmVGcm9tQ29tcGFyZSA9IChpZCA6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGxldCBTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcclxuICAgICAgICBjb25zdCBpbmRleCA9IFN0YXRlLmNvbXBhcmVJZHMuZmluZEluZGV4KChDYXJkIDogQ3JlZGl0Q2FyZEludGVyZmFjZSkgPT4gQ2FyZC5pZCA9PT0gaWQpXHJcbiAgICAgICAgaWYoaW5kZXggPCAwKSByZXR1cm47XHJcbiAgICAgICAgU3RhdGUuY29tcGFyZUlkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHNldFN0YXRlKFN0YXRlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlzQ2FyZENvbXBhcmUgPSAoaWQgOiBzdHJpbmcpIDogQm9vbGVhbiA9PiB7XHJcbiAgICAgICAgY29uc3QgZXhpc3RzID0gc3RhdGUuY29tcGFyZUlkcy5maW5kKChDYXJkIDogQ3JlZGl0Q2FyZEludGVyZmFjZSkgPT4gQ2FyZC5pZCA9PT0gaWQpXHJcbiAgICAgICAgcmV0dXJuIGV4aXN0cyA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLklzbW9iaWxlfT57Y2FyZC5wcm9wZXJ0aWVzLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5Jc21vYmlsZX0+PFJhdGluZyBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmd9IHJhdGluZz17Y2FyZC5wcm9wZXJ0aWVzLnJhdGluZ30vPjwvc3Bhbj5cclxuICAgICAgICAgICAgPGltZyBhbHQ9e2BrcmVkaXRrb3J0ICR7Y2FyZC5wcm9wZXJ0aWVzLm5hbWV9YH0gc3JjPXtjYXJkLnByb3BlcnRpZXMuaW1nfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLklzQ29tcHV0ZXJ9PntjYXJkLnByb3BlcnRpZXMubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5Jc0NvbXB1dGVyfT48UmF0aW5nIHJhdGluZz17Y2FyZC5wcm9wZXJ0aWVzLnJhdGluZ30gLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnRpZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJkLnByb3BlcnRpZXMucHJvcGVydGllcy5tYXAocHJvcGVydGllID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwcm9wZXJ0aWUudHlwZSA9PT0gJ0dPT0QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnRpZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5nb29kfT48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hlY2stY2lyY2xlXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Byb3BlcnRpZS50ZXh0fT57cHJvcGVydGllLnRleHR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zcGVjaWZpY30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYXJkLnByb3BlcnRpZXMuc3BlY2lmaWNzLm1hcChzcGVjaWZpYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBzcGVjaWZpYy5zcGxpdCgnOiAnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFJlYWN0LkZyYWdtZW50IGtleT17c3BlY2lmaWN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCd9fT57dGV4dFswXX06PC9zcGFuPiA8c3Bhbj57dGV4dFsxXX08L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnRuQmFja2dyb3VuZH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25PcmFuZ2UgdHlwZT1cImZ1bGxcIiB0ZXh0PVwiQW5zw7ZrIG51IVwiIGhyZWY9e2AvUmVkaXJlY3Q/Y2FyZD0ke2NhcmQucHJvcGVydGllcy5pZH1gfSBjbGFzc05hbWU9e3N0eWxlcy5hbnPDtmtCdXR0b259IC8+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25PcmFuZ2UgdHlwZT1cIm91dGxpbmVcIiB0ZXh0PVwiTWVyIGluZm9ybWF0aW9uXCIgaHJlZj17YC9rb3J0LyR7Y2FyZC5wcm9wZXJ0aWVzLm5hbWV9YH0gY2xhc3NOYW1lPXtzdHlsZXMuYW5zw7ZrQnV0dG9ufSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8VGlwcHkgY29udGVudD17IWlzQ2FyZENvbXBhcmUoY2FyZC5wcm9wZXJ0aWVzLmlkKSA/ICdMw6RnZyB0aWxsIGtyZWRpdGtvcnQgaSBqw6RtZsO2cmVsc2UnIDogJ1RhIGJvcnQga3JlZGl0a29ydCB1ciBqw6RtZsO2cmVsc2UnfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaXNDYXJkQ29tcGFyZShjYXJkLnByb3BlcnRpZXMuaWQpID8gcmVtb3ZlRnJvbUNvbXBhcmUoY2FyZC5wcm9wZXJ0aWVzLmlkKSA6IGFkZFRvQ29tcGFyZShjYXJkLnByb3BlcnRpZXMpfSBjbGFzc05hbWU9e3N0eWxlcy50b0NvbXBhcmV9PlxyXG4gICAgICAgICAgICAgICAgICAgICB7aXNDYXJkQ29tcGFyZShjYXJkLnByb3BlcnRpZXMuaWQpID8gPGkgY2xhc3NOYW1lPVwiZmFyIGZhLXRpbWVzLWNpcmNsZVwiPjwvaT4gOiA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZmlsZS1pbXBvcnRcIj48L2k+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvVGlwcHk+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgPC9SZWFjdC5GcmFnbWVudD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlZGl0Y2FyZDsiLCJpbXBvcnQgeyBDcmVkaXRDYXJkIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9DcmVkaXRDYXJkJztcclxuaW1wb3J0IENyZWRpdGNhcmQgZnJvbSAnLi4vQ3JlZGl0Y2FyZC9DcmVkaXRjYXJkJztcclxuaW1wb3J0IENvbXBhcmVDb250YWluZXIgZnJvbSAnLi4vLi4vLi4vc3RhdGUvY29tcGFyZSc7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgY3JlZGl0Q2FyZHM6IENyZWRpdENhcmRbXTtcclxufVxyXG5cclxuY29uc3QgRGlzcGxheUNhcmRzOiBSZWFjdC5GQzxQcm9wcz4gPSAoe2NyZWRpdENhcmRzfSkgOiBhbnkgPT4ge1xyXG4gIHJldHVybiBjcmVkaXRDYXJkcy5tYXAoQ3JlZGl0Q2FyZCA9PiB7XHJcbiAgICByZXR1cm4gPENvbXBhcmVDb250YWluZXIuUHJvdmlkZXI+XHJcbiAgICAgIDxDcmVkaXRjYXJkIGNhcmQ9e0NyZWRpdENhcmR9IC8+XHJcbiAgICA8L0NvbXBhcmVDb250YWluZXIuUHJvdmlkZXI+XHJcbiAgfSlcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5Q2FyZHM7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1JhdGluZy5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgUmF0aW5nIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8e3JhdGluZyA6IG51bWJlciwgY2xhc3NOYW1lPyA6IHN0cmluZ30+ID0gKHtyYXRpbmcsIGNsYXNzTmFtZX0pID0+IHtcclxuICAgIGxldCBSYXRpbmc7XHJcbiAgICBzd2l0Y2ggIChyYXRpbmcpIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgIFJhdGluZyA9IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya30+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIFJhdGluZyA9IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgUmF0aW5nID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA0OlxyXG4gICAgICAgICAgICBSYXRpbmcgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA1OlxyXG4gICAgICAgICAgICBSYXRpbmcgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgUmF0aW5nID0gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya30+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya30+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgICAgICByZXR1cm4gIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PntSYXRpbmd9PC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYXRpbmc7IiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIGNyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDYXJkIGFzIENyZWRpdENhcmRJbnRlcmZhY2V9IGZyb20gJy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZCc7XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gIGNhcmRzOiBDcmVkaXRDYXJkSW50ZXJmYWNlW107XHJcbiAgY29tcGFyZUlkczogQ3JlZGl0Q2FyZEludGVyZmFjZVtdOyBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pXHJcblxyXG5leHBvcnQgY29uc3QgU3RhdGVQcm92aWRlciA6IFJlYWN0LkZDID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPFN0YXRlPih7XHJcbiAgICBjYXJkczpbXSxcclxuICAgIGNvbXBhcmVJZHM6W11cclxuICB9KVxyXG4gIHJldHVybiA8U3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbc3RhdGUsIHNldFN0YXRlXX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gIDwvU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG59XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL0ZhZGVJblNlY3Rpb24ubW9kdWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBGYWRlSW5TZWN0aW9uKHByb3BzKSB7XHJcbiAgICBjb25zdCBbaXNWaXNpYmxlLCBzZXRWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgaWYoaXNWaXNpYmxlKSByZXR1cm5cclxuICAgICAgICBpZihkb21SZWYuY3VycmVudC5jbGFzc05hbWUgPT09ICdmYWRlLWluLXNlY3Rpb25pcy12aXNpYmxlJykgcmV0dXJuXHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldFZpc2libGUoZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2BmYWRlLWluLXNlY3Rpb24gJHtpc1Zpc2libGUgPyAnaXMtdmlzaWJsZScgOiAnJ31gfVxyXG4gICAgICAgIHJlZj17ZG9tUmVmfVxyXG4gICAgICA+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBGYWRlSW5TZWN0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENyZWRpdENhcmQgfSBmcm9tICcuLi9jbGFzc2VzL0NyZWRpdENhcmQnXHJcbmltcG9ydCB7IENhcmQgYXMgQ3JlZGl0Q2FyZEludGVyZmFjZSB9IGZyb20gJy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9JbmRleC9IZWFkZXIvSGVhZGVyJztcclxuaW1wb3J0IFdoeVVzIGZyb20gJy4uL2NvbXBvbmVudHMvSW5kZXgvV2h5VXMvV2h5VXMnO1xyXG5pbXBvcnQgVG9wQ2FyZHMgZnJvbSAnLi4vY29tcG9uZW50cy9JbmRleC9Ub3BDYXJkcy9Ub3BDYXJkcyc7XHJcbmltcG9ydCB7IEJlc3RDYXJkIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9CZXN0Q2FyZCc7XHJcbmltcG9ydCB7IGdldEJlc3RDYXJkLCBnZXRDYXJkcyB9IGZyb20gJy4uL3Jlc291cmNlcy9DYXJkcydcclxuaW1wb3J0IHsgQ3JlZGl0Q2FyZHMgfSBmcm9tICcuLi9jbGFzc2VzL0NyZWRpdENhcmRzJztcclxuaW1wb3J0IFVwZGF0ZWRJbmZvcm1hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0luZGV4L1VwZGF0ZWRJbmZvcmFtdGlvbi9VcGRhdGVkSW5mb3JtYXRpb24nO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tICcuLi9jb21wb25lbnRzL1VpL0NhdGVnb3JpZXMvQ2F0ZWdvcmllcyc7XHJcbmltcG9ydCBUZXN0IGZyb20gJy4uL2NvbXBvbmVudHMvSW5kZXgvVGVzdC9UZXN0JztcclxuXHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gIGNhcmRzIDogQ3JlZGl0Q2FyZHM7XHJcbn1cclxuXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgbG9hZGluZyA6IGJvb2xlYW47XHJcbiAgICBjb21wYXJlSWRzIDogc3RyaW5nW107XHJcbiAgICBjYXJkczogQ3JlZGl0Q2FyZEludGVyZmFjZVtdO1xyXG4gICAgYmVzdGNhcmQ6IEJlc3RDYXJkO1xyXG59XHJcblxyXG5jbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiAge1xyXG4gIHJlbmRlciAoKSB7XHJcbiAgICBjb25zdCBjYXJkcyA9IHRoaXMucHJvcHMuY2FyZHMubWFwKGNhcmQgPT4gbmV3IENyZWRpdENhcmQoY2FyZCkpO1xyXG4gICAgY29uc3QgbGlzdCA9IG5ldyBDcmVkaXRDYXJkcyhjYXJkcyk7XHJcbiAgICBjb25zdCBiZXN0Y2FyZCA9IHRoaXMucHJvcHMuYmVzdGNhcmRcclxuICByZXR1cm4gPGRpdj5cclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+QWxsYSBrcmVkaXRrb3J0PC90aXRsZT5cclxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIktyZWRpdGtvcnRza29sbC5jb20gasOkbWbDtnIgb2xpa2Ega3JlZGl0a29ydCBmw7ZyIGF0dCBoaXR0YSBkZXQgYsOkc3RhIGtyZWRpa29ydGV0IGbDtnIgZGlnLiBKw6RtZsO2ciBrcmVkaXRrb3J0IHNvbSBSZW1lbWJlciBmbGV4IG9jaCBOb3J3ZWdpYW5cIiAvPlxyXG4gICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cImluZGV4LCBmb2xsb3dcIiAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgICA8SGVhZGVyIGJlc3RjYXJkPXtiZXN0Y2FyZH0gLz5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8V2h5VXMgLz5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8VXBkYXRlZEluZm9ybWF0aW9uIC8+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPFRlc3QgLz5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8Q2F0ZWdvcmllcyAvPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDxUb3BDYXJkcyBjcmVkaXRDYXJkcz17bGlzdH0gLz5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuICA8L2Rpdj5cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBwcm9taXNlcyA9IFtnZXRDYXJkcygpLCBnZXRCZXN0Q2FyZCgpXTtcclxuXHJcbiAgICBjb25zdCByZXNwb25zZXMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcclxuXHJcblxyXG4gICAgY29uc3QgY2FyZHNSZXNwb25zZSA9IHJlc3BvbnNlc1swXSBhcyB7Y2FyZHM/OiBDcmVkaXRDYXJkSW50ZXJmYWNlW10sIGVycm9yPzogYm9vbGVhbn07XHJcbiAgICBjb25zdCBiZXN0Y2FyZFJlc3BvbnNlID0gcmVzcG9uc2VzWzFdIGFzIHtiZXN0Y2FyZD86IEJlc3RDYXJkLCBlcnJvcj86IGJvb2xlYW59O1xyXG5cclxuXHJcbiAgICBpZihjYXJkc1Jlc3BvbnNlLmVycm9yIHx8IGJlc3RjYXJkUmVzcG9uc2UuZXJyb3IpIHRocm93IG5ldyBFcnJvcigpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHMgOiB7XHJcbiAgICAgICAgY2FyZHM6IGNhcmRzUmVzcG9uc2UuY2FyZHMsXHJcbiAgICAgICAgYmVzdGNhcmQ6IGJlc3RjYXJkUmVzcG9uc2UuYmVzdGNhcmRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgIGNhcmRzIDogW10sXHJcbiAgICAgICAgYmVzdGNhcmQ6IHVuZGVmaW5lZFxyXG4gICAgICB9LFxyXG4gICAgICByZXZhbGlkYXRlOiAzNjAwICogNFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4UGFnZVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGFpbmVyIH0gZnJvbSBcInVuc3RhdGVkLW5leHRcIlxyXG5cclxuZnVuY3Rpb24gdXNlQ3VzdG9tSG9vaygpIHtcclxuICBsZXQgW2NvbXBhcmVJZHMsIHNldENvbXBhcmVJZHNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuICBjb25zdCBhZGRUb0NvbXBhcmUgPSAoaWQgOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IElkcyA9IFsuLi5jb21wYXJlSWRzXTtcclxuICAgIGNvbnN0IGV4aXN0cyA9IElkcy5maW5kKGNvbXBhcmVJZCA9PiBjb21wYXJlSWQgPT09IGlkKTtcclxuICAgIGlmIChleGlzdHMpIHJldHVybiBudWxsO1xyXG4gICAgXHJcbiAgICBJZHMucHVzaChpZCk7XHJcblxyXG4gICAgc2V0Q29tcGFyZUlkcyhJZHMpXHJcblxyXG4gICAgcmV0dXJuIElkcztcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZUZyb21Db21wYXJlID0gKGlkIDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBJZHMgOiBzdHJpbmdbXSA9IFsuLi5jb21wYXJlSWRzXTtcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IElkcy5maW5kSW5kZXgoY29tcGFyZUlkcyA9PiBjb21wYXJlSWRzID09PSBpZCk7XHJcblxyXG4gICAgaWYoaW5kZXggPCAwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBJZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICBzZXRDb21wYXJlSWRzKElkcyk7XHJcblxyXG4gICAgcmV0dXJuIElkcztcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrSWZDYXJkQ29tcGFyZSA9IChpZCA6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgSWRzIDogc3RyaW5nW10gPSBbLi4uY29tcGFyZUlkc107XHJcblxyXG4gICAgcmV0dXJuIElkcy5maW5kKGNvbXBhcmVJZHMgPT4gY29tcGFyZUlkcyA9PT0gaWQpO1xyXG4gIH1cclxuICByZXR1cm4geyBjb21wYXJlSWRzLCBhZGRUb0NvbXBhcmUsIHJlbW92ZUZyb21Db21wYXJlLCBjaGVja0lmQ2FyZENvbXBhcmV9XHJcbn1cclxuXHJcbmxldCBDb250YWluZXIgPSBjcmVhdGVDb250YWluZXIodXNlQ3VzdG9tSG9vaylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJCZXN0Q2FyZFwiOiBcIkJlc3RDYXJkX0Jlc3RDYXJkX18zd0VrcVwiLFxuXHRcImJ0blwiOiBcIkJlc3RDYXJkX2J0bl9fQTRWY2VcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkhlYWRlclwiOiBcIkhlYWRlcl9IZWFkZXJfXzFCU2pIXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJUZXh0SGVhZGVyXCI6IFwiVGV4dEhlYWRlcl9UZXh0SGVhZGVyX18xSnZoSVwiLFxuXHRcIkhlYWRpbmdUaXRsZVwiOiBcIlRleHRIZWFkZXJfSGVhZGluZ1RpdGxlX18zY2RnWFwiLFxuXHRcIm1vdmVJblJpZ2h0XCI6IFwiVGV4dEhlYWRlcl9tb3ZlSW5SaWdodF9fMnUzeVVcIixcblx0XCJIZWFkaW5nRGVzY3JpcHRpb25cIjogXCJUZXh0SGVhZGVyX0hlYWRpbmdEZXNjcmlwdGlvbl9fM0ItTk1cIixcblx0XCJtb3ZlSW5MZWZ0XCI6IFwiVGV4dEhlYWRlcl9tb3ZlSW5MZWZ0X18zMXVfNVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiVGVzdFwiOiBcIlRlc3RfVGVzdF9fMmlkZmhcIixcblx0XCJJbWdcIjogXCJUZXN0X0ltZ19fMVdETGpcIixcblx0XCJjb250ZW50XCI6IFwiVGVzdF9jb250ZW50X19MRFF2dlwiLFxuXHRcIkJ0blwiOiBcIlRlc3RfQnRuX18yUF9IbFwiLFxuXHRcIlVwZGF0ZWRJbmZvcm1hdGlvblwiOiBcIlRlc3RfVXBkYXRlZEluZm9ybWF0aW9uX18yc0N1a1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiVG9wQ2FyZHNcIjogXCJUb3BDYXJkc19Ub3BDYXJkc19fM3YwamdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlVwZGF0ZWRJbmZvcm1hdGlvblwiOiBcIlVwZGF0ZWRJbmZvcm1hdGlvbl9VcGRhdGVkSW5mb3JtYXRpb25fX0x6dVdqXCIsXG5cdFwiSW1nXCI6IFwiVXBkYXRlZEluZm9ybWF0aW9uX0ltZ19fMzVydTlcIixcblx0XCJjb250ZW50XCI6IFwiVXBkYXRlZEluZm9ybWF0aW9uX2NvbnRlbnRfX1NNSGF4XCIsXG5cdFwiQnRuXCI6IFwiVXBkYXRlZEluZm9ybWF0aW9uX0J0bl9fMkNpaC1cIixcblx0XCJpbWdDb250YWluZXJcIjogXCJVcGRhdGVkSW5mb3JtYXRpb25faW1nQ29udGFpbmVyX18xSFg0OFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiV2h5VXNcIjogXCJXaHlVc19XaHlVc19fMUpJdWdcIixcblx0XCJyb3dcIjogXCJXaHlVc19yb3dfXzNDOTM5XCIsXG5cdFwidGV4dFwiOiBcIldoeVVzX3RleHRfXzM0anBVXCIsXG5cdFwiaGVhZFwiOiBcIldoeVVzX2hlYWRfXzJWbnZqXCIsXG5cdFwidGl0bGVcIjogXCJXaHlVc190aXRsZV9feGY4bjJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkNhdGVnb3JpZXNcIjogXCJDYXRlZ29yaWVzX0NhdGVnb3JpZXNfXzFMNEFVXCIsXG5cdFwiY29udGVudFwiOiBcIkNhdGVnb3JpZXNfY29udGVudF9fMVFfWFJcIixcblx0XCJ0aXRsZVwiOiBcIkNhdGVnb3JpZXNfdGl0bGVfXzJ5Z1BIXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJDYXRlZ29yeVwiOiBcIkNhdGVnb3J5X0NhdGVnb3J5X19tQ0FfdVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFwiOiBcIkNyZWRpdGNhcmRfY2FyZF9fM19MNElcIixcblx0XCJJc21vYmlsZVwiOiBcIkNyZWRpdGNhcmRfSXNtb2JpbGVfXzNOcG5lXCIsXG5cdFwiSXNDb21wdXRlclwiOiBcIkNyZWRpdGNhcmRfSXNDb21wdXRlcl9fMWkyN3RcIixcblx0XCJjb250ZW50XCI6IFwiQ3JlZGl0Y2FyZF9jb250ZW50X18xOFUwcVwiLFxuXHRcInNwZWNpZmljXCI6IFwiQ3JlZGl0Y2FyZF9zcGVjaWZpY19fMXBodUlcIixcblx0XCJidXR0b25zXCI6IFwiQ3JlZGl0Y2FyZF9idXR0b25zX19NY3g5b1wiLFxuXHRcImFuc8O2a0J1dHRvblwiOiBcIkNyZWRpdGNhcmRfYW5zX2tCdXR0b25fXzNRdzhfXCIsXG5cdFwiZ29vZFwiOiBcIkNyZWRpdGNhcmRfZ29vZF9fMTUxYTdcIixcblx0XCJiYWRcIjogXCJDcmVkaXRjYXJkX2JhZF9fMWlSNmRcIixcblx0XCJ0b0NvbXBhcmVcIjogXCJDcmVkaXRjYXJkX3RvQ29tcGFyZV9fSFREaVRcIixcblx0XCJwcm9wZXJ0aWVzXCI6IFwiQ3JlZGl0Y2FyZF9wcm9wZXJ0aWVzX18yVHltSFwiLFxuXHRcInByb3BlcnRpZVwiOiBcIkNyZWRpdGNhcmRfcHJvcGVydGllX18zN0RGSFwiLFxuXHRcImJ0bkJhY2tncm91bmRcIjogXCJDcmVkaXRjYXJkX2J0bkJhY2tncm91bmRfXzEtR0diXCIsXG5cdFwicmF0aW5nXCI6IFwiQ3JlZGl0Y2FyZF9yYXRpbmdfXzMxNENfXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsaWdodFwiOiBcIlJhdGluZ19saWdodF9fMUw2M25cIixcblx0XCJkYXJrXCI6IFwiUmF0aW5nX2RhcmtfXzJham95XCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAdGlwcHlqcy9yZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ3JpZC1zeXN0ZW1cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bnN0YXRlZC1uZXh0XCIpOzsiXSwic291cmNlUm9vdCI6IiJ9