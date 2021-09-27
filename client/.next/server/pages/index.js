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
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\components\\Index\\Header\\BestCard\\BestCard.tsx";

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
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\components\\Index\\Header\\Header.tsx";
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
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\components\\Index\\Header\\TextHeader\\TextHeader.tsx";
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
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\components\\Index\\Test\\Test.tsx";

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
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\components\\Index\\TopCards\\TopCards.tsx";
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
  }, __jsx("h4", {
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
/* harmony import */ var _UpdatedInformation_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UpdatedInformation.module.css */ "./src/components/Index/UpdatedInforamtion/UpdatedInformation.module.css");
/* harmony import */ var _UpdatedInformation_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_UpdatedInformation_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Ui_Buttons_ButtonWhite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Ui/Buttons/ButtonWhite */ "./src/components/Ui/Buttons/ButtonWhite.tsx");
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\components\\Index\\UpdatedInforamtion\\UpdatedInformation.tsx";

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
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\components\\Index\\WhyUs\\WhyUs.tsx";
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
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\components\\Ui\\Buttons\\ButtonBlue.tsx";

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
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\components\\Ui\\Buttons\\ButtonWhite.tsx";

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
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\components\\Ui\\Categories\\Categories.tsx";

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
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, __jsx(_Category_Category__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  })), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx(_Category_Category__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  })), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx(_Category_Category__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  })), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, __jsx(_Category_Category__WEBPACK_IMPORTED_MODULE_2__.default, {
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
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }, __jsx(_Category_Category__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  })), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, __jsx(_Category_Category__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  })), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx(_Category_Category__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  })), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
    md: 3,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx(_Category_Category__WEBPACK_IMPORTED_MODULE_2__.default, {
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
/* harmony import */ var _Category_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Category.module.css */ "./src/components/Ui/Categories/Category/Category.module.css");
/* harmony import */ var _Category_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Category_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\components\\Ui\\Categories\\Category\\Category.tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const Category = () => {
  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
    whileHover: {
      scale: 1.05,
      y: -1
    },
    className: (_Category_module_css__WEBPACK_IMPORTED_MODULE_2___default().Category),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 12
    }
  }, __jsx("i", {
    className: "fas fa-gem",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "R\xE4ntor"));
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
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\components\\Ui\\Creditcard\\Creditcard.tsx";
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
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\components\\Ui\\DisplayCards\\DisplayCards.tsx";

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
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\components\\Ui\\Rating\\Rating.tsx";
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
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\context\\State.tsx";
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
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\hoc\\Container\\Container.tsx";
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
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\hoc\\FadeInSection\\FadeInSection.js";
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
var _jsxFileName = "E:\\kreditkortskollNew\\client\\src\\pages\\index.tsx";
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
        lineNumber: 34,
        columnNumber: 10
      }
    }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_8___default()), {
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
    })), __jsx(_components_Index_Header_Header__WEBPACK_IMPORTED_MODULE_2__.default, {
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
    }, __jsx(_components_Index_WhyUs_WhyUs__WEBPACK_IMPORTED_MODULE_3__.default, {
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
    }, __jsx(_components_Index_UpdatedInforamtion_UpdatedInformation__WEBPACK_IMPORTED_MODULE_7__.default, {
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
        lineNumber: 48,
        columnNumber: 9
      }
    }, __jsx(_components_Index_Test_Test__WEBPACK_IMPORTED_MODULE_10__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    })), __jsx("section", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }
    }, __jsx(_components_Ui_Categories_Categories__WEBPACK_IMPORTED_MODULE_9__.default, {
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
    }, __jsx(_components_Index_TopCards_TopCards__WEBPACK_IMPORTED_MODULE_4__.default, {
      creditCards: list,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
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
	"Btn": "Test_Btn__2P_Hl"
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","vendors-node_modules_tippy_js_dist_tippy_css-node_modules_next_image_js"], function() { return __webpack_exec__("./src/pages/index.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY2xhc3Nlcy9DcmVkaXRDYXJkLnRzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jbGFzc2VzL0NyZWRpdENhcmRzLnRzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L0hlYWRlci9CZXN0Q2FyZC9CZXN0Q2FyZC50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvSW5kZXgvSGVhZGVyL0hlYWRlci50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvSW5kZXgvSGVhZGVyL1RleHRIZWFkZXIvVGV4dEhlYWRlci50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvSW5kZXgvVGVzdC9UZXN0LnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9JbmRleC9Ub3BDYXJkcy9Ub3BDYXJkcy50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvSW5kZXgvVXBkYXRlZEluZm9yYW10aW9uL1VwZGF0ZWRJbmZvcm1hdGlvbi50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvSW5kZXgvV2h5VXMvV2h5VXMudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL0J1dHRvbnMvQnV0dG9uQmx1ZS50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvQnV0dG9ucy9CdXR0b25XaGl0ZS50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9DYXRlZ29yaWVzL0NhdGVnb3J5L0NhdGVnb3J5LnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9DcmVkaXRjYXJkL0NyZWRpdGNhcmQudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL0Rpc3BsYXlDYXJkcy9EaXNwbGF5Q2FyZHMudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1VpL1JhdGluZy9SYXRpbmcudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb25maWcvYXhpb3MudHMiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbnRleHQvU3RhdGUudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9ob2MvQ29udGFpbmVyL0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2hvYy9GYWRlSW5TZWN0aW9uL0ZhZGVJblNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL3BhZ2VzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvcmVzb3VyY2VzL0NhcmRzLnRzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9zdGF0ZS9jb21wYXJlLnRzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L0hlYWRlci9CZXN0Q2FyZC9CZXN0Q2FyZC5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0luZGV4L0hlYWRlci9IZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9JbmRleC9IZWFkZXIvVGV4dEhlYWRlci9UZXh0SGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvSW5kZXgvVGVzdC9UZXN0Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvSW5kZXgvVG9wQ2FyZHMvVG9wQ2FyZHMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9JbmRleC9VcGRhdGVkSW5mb3JhbXRpb24vVXBkYXRlZEluZm9ybWF0aW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvSW5kZXgvV2h5VXMvV2h5VXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9CdXR0b25zL0J1dHRvbnMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9DYXRlZ29yaWVzL0NhdGVnb3JpZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9VaS9DYXRlZ29yaWVzL0NhdGVnb3J5L0NhdGVnb3J5Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvQ3JlZGl0Y2FyZC9DcmVkaXRjYXJkLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvVWkvUmF0aW5nL1JhdGluZy5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9ob2MvQ29udGFpbmVyL0NvbnRhaW5lci5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIkB0aXBweWpzL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJmcmFtZXItbW90aW9uXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwicmVhY3QtZ3JpZC1zeXN0ZW1cIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcInVuc3RhdGVkLW5leHRcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvaWdub3JlZHxFOlxca3JlZGl0a29ydHNrb2xsTmV3XFxjbGllbnRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJDcmVkaXRDYXJkIiwiY29uc3RydWN0b3IiLCJwcm9wZXJ0aWVzIiwiYWRkVG9Db21wYXJlIiwiY2hlY2tJZkNhcmRDb21wYXJlIiwiQ3JlZGl0Q2FyZHMiLCJjYXJkcyIsImdldENhcmRzIiwiQmVzdENhcmQiLCJiZXN0Y2FyZCIsInN0eWxlcyIsImltZyIsImRlc2NyaXB0aW9uIiwibmFtZSIsIkhlYWRlciIsIlRleHRIZWFkZXIiLCJUZXN0IiwiVG9wQ2FyZHMiLCJjcmVkaXRDYXJkcyIsInNwbGljZSIsIlVwZGF0ZWRJbmZvcm1hdGlvbiIsIldoeVVzIiwibWFyZ2luVG9wIiwiQnV0dG9uQmx1ZSIsInByb3BzIiwiaHJlZiIsImNsYXNzTmFtZSIsInR5cGUiLCJvbkNsaWNrIiwidGV4dCIsIkJ1dHRvbldoaXRlIiwiQ2F0ZWdvcmllcyIsIkNhdGVnb3J5Iiwic2NhbGUiLCJ5IiwiQ3JlZGl0Y2FyZCIsImNhcmQiLCJzdGF0ZSIsInNldFN0YXRlIiwidXNlQ29udGV4dCIsIlN0YXRlQ29udGV4dCIsIlN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiY29tcGFyZUlkcyIsInB1c2giLCJyZW1vdmVGcm9tQ29tcGFyZSIsImlkIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJDYXJkIiwiX2lkIiwiaXNDYXJkQ29tcGFyZSIsImV4aXN0cyIsImZpbmQiLCJyYXRpbmciLCJtYXAiLCJwcm9wZXJ0aWUiLCJzcGVjaWZpY3MiLCJzcGVjaWZpYyIsInNwbGl0IiwiZm9udFdlaWdodCIsInJlcGxhY2UiLCJEaXNwbGF5Q2FyZHMiLCJSYXRpbmciLCJwYXJzZUludCIsImluc3RhbmNlIiwiYXhpb3MiLCJiYXNlVVJMIiwiY3JlYXRlQ29udGV4dCIsIlN0YXRlUHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiRmFkZUluU2VjdGlvbiIsImlzVmlzaWJsZSIsInNldFZpc2libGUiLCJSZWFjdCIsImRvbVJlZiIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiY3VycmVudCIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwib2JzZXJ2ZSIsInVub2JzZXJ2ZSIsIkluZGV4UGFnZSIsInJlbmRlciIsImxpc3QiLCJnZXRTdGF0aWNQcm9wcyIsInByb21pc2VzIiwiZ2V0QmVzdENhcmQiLCJyZXNwb25zZXMiLCJQcm9taXNlIiwiYWxsIiwiY2FyZHNSZXNwb25zZSIsImJlc3RjYXJkUmVzcG9uc2UiLCJlcnJvciIsIkVycm9yIiwidW5kZWZpbmVkIiwicmV2YWxpZGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJkYXRhIiwiYmVzdENhcmQiLCJnZXRDYXJkIiwiZ2V0Q29tcGFyZUNhcmRzIiwiaWRzIiwiY2FyZHNJbmZvIiwiZmlsdGVyIiwidXNlQ3VzdG9tSG9vayIsInNldENvbXBhcmVJZHMiLCJJZHMiLCJjb21wYXJlSWQiLCJjcmVhdGVDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJPLE1BQU1BLFVBQU4sQ0FBaUI7QUFDdEJDLGFBQVcsQ0FBU0MsVUFBVCxFQUE0QjtBQUFBLFNBQW5CQSxVQUFtQixHQUFuQkEsVUFBbUI7QUFBRzs7QUFFMUNDLGNBQVksR0FBSSxDQUVmOztBQUVEQyxvQkFBa0IsR0FBSSxDQUVyQjs7QUFUcUIsQzs7Ozs7Ozs7Ozs7Ozs7O0FDakJqQixNQUFNQyxXQUFOLENBQWtCO0FBQ3ZCSixhQUFXLENBQVFLLEtBQW9CLEdBQUcsRUFBL0IsRUFBbUM7QUFBQSxTQUEzQkEsS0FBMkIsR0FBM0JBLEtBQTJCO0FBQUU7O0FBRWhEQyxVQUFRLEdBQW1CO0FBQ3pCLFdBQU8sS0FBS0QsS0FBWjtBQUNEOztBQUxzQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NDQXpCOztBQUNBO0FBRUE7O0FBTUEsTUFBTUUsUUFBeUMsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFnQjtBQUNoRSxTQUFPO0FBQUssTUFBRSxFQUFFQyxzRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFEQyxFQUVELE1BQUMsbURBQUQ7QUFDRSxPQUFHLEVBQUVELFFBQVEsQ0FBQ0UsR0FEaEI7QUFFRSxTQUFLLEVBQUUsR0FGVDtBQUdFLFVBQU0sRUFBRSxHQUhWO0FBSUUsT0FBRyxFQUFDLGdDQUpOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGQyxFQVNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUYsUUFBUSxDQUFDRyxXQUFiLENBVEMsRUFVRCxNQUFDLDREQUFEO0FBQWEsUUFBSSxFQUFDLE1BQWxCO0FBQXlCLFFBQUksRUFBQyxjQUE5QjtBQUEwQyxRQUFJLEVBQUcsa0JBQWlCSCxRQUFRLENBQUNJLElBQUssRUFBaEY7QUFBbUYsYUFBUyxFQUFFSCxpRUFBOUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZDLENBQVA7QUFZRCxDQWJEOztBQWVBLCtEQUFlRixRQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7O0FBTUEsTUFBTU0sTUFBdUMsR0FBRyxDQUFDO0FBQUNMO0FBQUQsQ0FBRCxLQUE4QjtBQUMxRSxTQUFPO0FBQUssTUFBRSxFQUFFQyxrRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrREFBRDtBQUFLLFdBQU8sRUFBQyxRQUFiO0FBQXNCLFNBQUssRUFBQyxRQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrREFBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLEVBSUksTUFBQyxrREFBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHVEQUFEO0FBQVUsWUFBUSxFQUFFRCxRQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FKSixDQURKLENBREQsQ0FBUDtBQVlILENBYkQ7O0FBZ0JBLCtEQUFlSyxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUNBOztBQUVBLE1BQU1DLFVBQW9DLEdBQUcsTUFBb0I7QUFDN0QsU0FBTztBQUFLLE1BQUUsRUFBRUwsMEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNIO0FBQUssTUFBRSxFQUFFQSw0RUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxRkFESixDQURHLEVBSUg7QUFBSyxNQUFFLEVBQUVBLGtGQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9IQURKLENBSkcsQ0FBUDtBQVFILENBVEQ7O0FBV0EsK0RBQWVLLFVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUMsSUFBZSxHQUFHLE1BQU07QUFDMUIsU0FBTztBQUFLLE1BQUUsRUFBRU4sOERBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNILE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0RBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxNQUFFLEVBQUVBLHNFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1EQUFEO0FBQ0ksU0FBSyxFQUFFLEdBRFg7QUFFSSxVQUFNLEVBQUUsR0FGWjtBQUdJLE9BQUcsRUFBQyxrQkFIUjtBQUlJLE1BQUUsRUFBRUEsNkRBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosQ0FESixFQVdJLE1BQUMsa0RBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxNQUFFLEVBQUVBLGlFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1TkFGSixFQUdJLE1BQUMsMkRBQUQ7QUFBWSxhQUFTLEVBQUVBLDZEQUF2QjtBQUFtQyxRQUFJLEVBQUMsU0FBeEM7QUFBa0QsUUFBSSxFQUFDLGVBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQURKLENBWEosQ0FESixDQURHLENBQVA7QUF1QkgsQ0F4QkQ7O0FBMEJBLCtEQUFlTSxJQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQkE7QUFFQTtBQUNBOztBQUVBLE1BQU1DLFFBQStELEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBaUM7QUFDckcsUUFBTVosS0FBSyxHQUFHWSxXQUFXLENBQUNaLEtBQVosQ0FBa0JhLE1BQWxCLENBQXlCLENBQXpCLEVBQTRCLENBQTVCLENBQWQ7QUFDQSxTQUFPO0FBQUssTUFBRSxFQUFFVCxzRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5Q0FERyxFQUVILE1BQUMsa0VBQUQ7QUFBYyxlQUFXLEVBQUVKLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRyxDQUFQO0FBSUgsQ0FORDs7QUFRQSwrREFBZVcsUUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRyxrQkFBNkIsR0FBRyxNQUFNO0FBQ3hDLFNBQU87QUFBSyxNQUFFLEVBQUVWLDBGQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSCxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtEQUFEO0FBQUssTUFBRSxFQUFFLEVBQVQ7QUFBYSxNQUFFLEVBQUUsQ0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssTUFBRSxFQUFFQSwrRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdU5BRkosRUFHSSxNQUFDLDREQUFEO0FBQWEsYUFBUyxFQUFFQSwyRUFBeEI7QUFBb0MsUUFBSSxFQUFDLE1BQXpDO0FBQWdELFFBQUksRUFBQyxlQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FESixDQURKLEVBUUksTUFBQyxrREFBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQWEsTUFBRSxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLE1BQUUsRUFBRUEsb0ZBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFDSSxTQUFLLEVBQUUsR0FEWDtBQUVJLFVBQU0sRUFBRSxHQUZaO0FBR0ksT0FBRyxFQUFDLHFCQUhSO0FBSUksTUFBRSxFQUFFQSwyRUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixDQVJKLENBREosQ0FERyxDQUFQO0FBdUJILENBeEJEOztBQTBCQSwrREFBZVUsa0JBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtDQUlBOztBQUNBO0FBQ0E7QUFDQTs7QUFHQSxNQUFNQyxLQUErQixHQUFHLE1BQW9CO0FBQ3hELFNBQU87QUFBSyxNQUFFLEVBQUVYLGdFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDUCxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURKLEVBRUk7QUFBSyxhQUFTLEVBQUVBLDhEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxrREFBRDtBQUFLLFNBQUssRUFBQyxLQUFYO0FBQWlCLFdBQU8sRUFBQyxLQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1EsTUFBQyxrREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBRUEsK0RBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUEsK0RBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFUTtBQUFHLGFBQVMsRUFBRUEsZ0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUE1QixDQUZSLENBREosRUFLUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZFQUxSLENBREEsQ0FEUixFQVVRLE1BQUMsa0RBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUVBLCtEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUVBLCtEQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRVE7QUFBRyxhQUFTLEVBQUVBLGdFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FBNUIsQ0FGUixDQURKLEVBS1E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2RUFMUixDQURBLENBVlIsRUFtQlEsTUFBQyxrREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUEsK0RBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBRUEsK0RBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFHLGFBQVMsRUFBRUEsZ0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QyxrREFBRDtBQUFLLFdBQU8sRUFBQyxRQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLGtEQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBREosRUFJSSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUpKLEVBT0ksTUFBQyxrREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVBKLEVBVUksTUFBQyxrREFBRDtBQUFLLE1BQUUsRUFBRSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHVEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVZKLENBREosRUFlSSxNQUFDLGtEQUFEO0FBQUssV0FBTyxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0RBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJLE1BQUMsa0RBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx1REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQ2FyZCB7XHJcbiAgX2lkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHNob3c6IGJvb2xlYW47XHJcbiAgcmVxdWlyZW1lbnRzOiBzdHJpbmdbXTtcclxuICByYXRpbmc6IHN0cmluZztcclxuICBwcm9wZXJ0aWVzOiB7X2lkPzogbnVtYmVyLCBwcm9wZXJ0aWU6IHN0cmluZywgdHlwZTogc3RyaW5nfVtdO1xyXG4gIHNwZWNpZmljczoge19pZD86IG51bWJlciwgdGV4dDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfVtdO1xyXG4gIGltZzogc3RyaW5nO1xyXG4gIGluc3VyYW5jZXM6IHtfaWQ/OiBudW1iZXIsIHRleHQ6IHN0cmluZywgdHlwZTogc3RyaW5nIH1bXTtcclxuICBib251c3RleHQ6IHN0cmluZztcclxuICBjcmVkaXRUZXh0OiBzdHJpbmc7XHJcbiAgaW5zdXJhbmNlVGV4dDogc3RyaW5nO1xyXG4gIGZhY3RzOiB7X2lkPzogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmd9W107XHJcbiAgb3JkZXI6IG51bWJlcjtcclxuICB1cmw6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbiA6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENyZWRpdENhcmQge1xyXG4gIGNvbnN0cnVjdG9yIChwdWJsaWMgcHJvcGVydGllcyA6IENhcmQpIHsgfVxyXG5cclxuICBhZGRUb0NvbXBhcmUgKCkge1xyXG5cclxuICB9XHJcblxyXG4gIGNoZWNrSWZDYXJkQ29tcGFyZSAoKSB7XHJcbiAgICBcclxuICB9XHJcbn0iLCJpbXBvcnQgeyBDcmVkaXRDYXJkIH0gZnJvbSAnLi9DcmVkaXRDYXJkJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVkaXRDYXJkcyB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIGNhcmRzIDogQ3JlZGl0Q2FyZFtdID0gW10pIHt9XHJcblxyXG4gIGdldENhcmRzICgpIDogQ3JlZGl0Q2FyZFtdIHtcclxuICAgIHJldHVybiB0aGlzLmNhcmRzO1xyXG4gIH1cclxuXHJcbn0iLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vQmVzdENhcmQubW9kdWxlLmNzcyc7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgQmVzdENhcmQgYXMgQmVzdENhcmRJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9pbnRlcmZhY2VzL0Jlc3RDYXJkJztcclxuaW1wb3J0IEJ1dHRvbldoaXRlIGZyb20gJy4uLy4uLy4uL1VpL0J1dHRvbnMvQnV0dG9uV2hpdGUnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBiZXN0Y2FyZCA6IEJlc3RDYXJkSW50ZXJmYWNlO1xyXG59XHJcblxyXG5jb25zdCBCZXN0Q2FyZCA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7YmVzdGNhcmR9KSA9PiB7XHJcbiAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5CZXN0Q2FyZH0+XHJcbiAgICAgICAgPGgzPkLDpHN0YSBrb3J0ZXQgbnU8L2gzPlxyXG4gICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgc3JjPXtiZXN0Y2FyZC5pbWd9XHJcbiAgICAgICAgICB3aWR0aD17MjUwfVxyXG4gICAgICAgICAgaGVpZ2h0PXsxNDB9XHJcbiAgICAgICAgICBhbHQ9XCJCw6RzdGEga3JlZGl0a29ydGV0IGp1c3QgbnUhXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIHsvKiA8aDQ+e2Jlc3RjYXJkLm5hbWV9PC9oND4gKi99XHJcbiAgICAgICAgPHA+e2Jlc3RjYXJkLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICA8QnV0dG9uV2hpdGUgdHlwZT1cImZ1bGxcIiB0ZXh0PVwiQW5zw7ZrIG51IVwiIGhyZWY9e2AvUmVkaXJlY3Q/Y2FyZD0ke2Jlc3RjYXJkLm5hbWV9YH0gY2xhc3NOYW1lPXtzdHlsZXMuYnRufSAvPlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCZXN0Q2FyZDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vSGVhZGVyLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uLy4uL2hvYy9Db250YWluZXIvQ29udGFpbmVyJztcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ncmlkLXN5c3RlbSc7XHJcbmltcG9ydCBUZXh0SGVhZGVyIGZyb20gJy4vVGV4dEhlYWRlci9UZXh0SGVhZGVyJztcclxuaW1wb3J0IEJlc3RDYXJkIGZyb20gJy4vQmVzdENhcmQvQmVzdENhcmQnO1xyXG5pbXBvcnQgeyBCZXN0Q2FyZCBhcyBCZXN0Q2FyZEludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL2ludGVyZmFjZXMvQmVzdENhcmQnO1xyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgYmVzdGNhcmQgOiBCZXN0Q2FyZEludGVyZmFjZVxyXG59XHJcblxyXG5jb25zdCBIZWFkZXIgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoe2Jlc3RjYXJkfSkgOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBpZD17c3R5bGVzLkhlYWRlcn0+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8Um93IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSBsZz17N30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0SGVhZGVyIC8+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MTJ9IGxnPXs1fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJlc3RDYXJkIGJlc3RjYXJkPXtiZXN0Y2FyZH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RleHRIZWFkZXIubW9kdWxlLmNzcyc7XHJcblxyXG5jb25zdCBUZXh0SGVhZGVyIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKSA6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGlkPXtzdHlsZXMuVGV4dEhlYWRlcn0+XHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLkhlYWRpbmdUaXRsZX0+XHJcbiAgICAgICAgICAgIDxoMT5WaSBqw6RtZsO2ciBhbGxhIGtyZWRpdGtvcnQgb2NoIGdlciB1dCBrdmFsaXRhdGl2YSByZWNlbnNpb25lciBmw7ZyIGRpZzwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLkhlYWRpbmdEZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgIDxwPnN1c2NpcGl0IHF1YXMgc2FlcGUgYmxhbmRpdGlpcywgb2JjYWVjYXRpIGV2ZW5pZXQgcmF0aW9uZSBhIG1vZGkgY29uc2VjdGV0dXIgc2l0IGVvcyBlYXF1ZSBkb2xvcmlidXMgZG9sb3JlPzwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRIZWFkZXI7IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Rlc3QubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWdyaWQtc3lzdGVtJztcclxuaW1wb3J0IEJ1dHRvbkJsdWUgZnJvbSAnLi4vLi4vVWkvQnV0dG9ucy9CdXR0b25CbHVlJztcclxuXHJcbmNvbnN0IFRlc3QgOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGlkPXtzdHlsZXMuVGVzdH0+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSBsZz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17c3R5bGVzLmltZ0NvbnRhaW5lcn0+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3Rlc3Quc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtzdHlsZXMuSW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0gbGc9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlbDpXJ0IEFJIHRlc3Q8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBc3Blcm5hdHVyIG5vbiwgcmVydW0gZG9sb3IgZGljdGEsIG1heGltZSBsYWJvcmlvc2FtIG5hdHVzIGFsaXF1YW0gYW1ldCBtb2RpIGRvbG9ydW0gZnVnaWF0IGVvcyBhZC4gRXVtLCBlYXF1ZS4gTm9uIGRlbGVuaXRpIGV4cGVkaXRhIG1vbGVzdGlhZSBhbmltaS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25CbHVlIGNsYXNzTmFtZT17c3R5bGVzLkJ0bn0gdHlwZT1cIm91dGxpbmVcIiB0ZXh0PVwiU3RhcnRhIHRlc3RldFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXN0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENyZWRpdENhcmRzIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9DcmVkaXRDYXJkcyc7XHJcbmltcG9ydCBEaXNwbGF5Q2FyZHMgZnJvbSAnLi4vLi4vVWkvRGlzcGxheUNhcmRzL0Rpc3BsYXlDYXJkcyc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Ub3BDYXJkcy5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IFRvcENhcmRzIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8e2NyZWRpdENhcmRzIDogQ3JlZGl0Q2FyZHN9PiA9ICh7Y3JlZGl0Q2FyZHN9KSA6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIGNvbnN0IGNhcmRzID0gY3JlZGl0Q2FyZHMuY2FyZHMuc3BsaWNlKDIsIDUpXHJcbiAgICByZXR1cm4gPGRpdiBpZD17c3R5bGVzLlRvcENhcmRzfT4gICAgXHJcbiAgICAgICAgPGg0PlbDpXJhIHBvcHVsw6RyYXN0ZSBrcmVkaXRrb3J0PC9oND5cclxuICAgICAgICA8RGlzcGxheUNhcmRzIGNyZWRpdENhcmRzPXtjYXJkc30gLz5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BDYXJkczsiLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vVXBkYXRlZEluZm9ybWF0aW9uLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ncmlkLXN5c3RlbSc7XHJcbmltcG9ydCBCdXR0b25XaGl0ZSBmcm9tICcuLi8uLi9VaS9CdXR0b25zL0J1dHRvbldoaXRlJztcclxuXHJcbmNvbnN0IFVwZGF0ZWRJbmZvcm1hdGlvbiA6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5VcGRhdGVkSW5mb3JtYXRpb259PlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgICAgICA8Q29sIG1kPXsxMn0gbGc9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg0PlbDpXJ0IEFJIHRlc3Q8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBBc3Blcm5hdHVyIG5vbiwgcmVydW0gZG9sb3IgZGljdGEsIG1heGltZSBsYWJvcmlvc2FtIG5hdHVzIGFsaXF1YW0gYW1ldCBtb2RpIGRvbG9ydW0gZnVnaWF0IGVvcyBhZC4gRXVtLCBlYXF1ZS4gTm9uIGRlbGVuaXRpIGV4cGVkaXRhIG1vbGVzdGlhZSBhbmltaS48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25XaGl0ZSBjbGFzc05hbWU9e3N0eWxlcy5CdG59IHR5cGU9XCJmdWxsXCIgdGV4dD1cIlN0YXJ0YSB0ZXN0ZXRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSBsZz17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD17c3R5bGVzLmltZ0NvbnRhaW5lcn0+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3VwZGF0ZWQuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtzdHlsZXMuSW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVwZGF0ZWRJbmZvcm1hdGlvbjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vV2h5VXMubW9kdWxlLmNzcyc7XHJcblxyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uLy4uL2hvYy9Db250YWluZXIvQ29udGFpbmVyJztcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tICdyZWFjdC1ncmlkLXN5c3RlbSc7XHJcbmltcG9ydCBGYWRlSW5TZWN0aW9uIGZyb20gJy4uLy4uLy4uL2hvYy9GYWRlSW5TZWN0aW9uL0ZhZGVJblNlY3Rpb24nO1xyXG5cclxuXHJcbmNvbnN0IFdoeVVzIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQgPSAoKSA6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGlkPXtzdHlsZXMuV2h5VXN9PlxyXG4gICAgPEZhZGVJblNlY3Rpb24+ICAgICAgICBcclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8aDI+SHVyIGthbiB2aSBoasOkbHBhIGRpZz88L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XHJcbiAgICAgICAgICAgICAgICA8Um93IGFsaWduPVwiZW5kXCIganVzdGlmeT1cImVuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbW9uZXktY2hlY2tcIj48L2k+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+PGI+T3BhcnRpc2thIGrDpG1mw7ZyZWxzZXI8L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUHJhZXNlbnRpdW0sPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbW9uZXktY2hlY2tcIj48L2k+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+PGI+T3BhcnRpc2thIGrDpG1mw7ZyZWxzZXI8L2I+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUHJhZXNlbnRpdW0sPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29sIHNtPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tb25leS1jaGVja1wiPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT48Yj5PcGFydGlza2EgasOkbWbDtnJlbHNlcjwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUHJhZXNlbnRpdW0sPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Um93IHN0eWxlPXt7bWFyZ2luVG9wOjUwfX0gYWxpZ249XCJlbmRcIiBqdXN0aWZ5PVwiZW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tb25leS1jaGVja1wiPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT48Yj5PcGFydGlza2EgasOkbWbDtnJlbHNlcjwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQcmFlc2VudGl1bSw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tb25leS1jaGVja1wiPjwvaT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT48Yj5PcGFydGlza2EgasOkbWbDtnJlbHNlcjwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQcmFlc2VudGl1bSw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc209ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGkgY2xhc3NOYW1lPVwiZmFzIGZhLW1vbmV5LWNoZWNrXCI+PC9pPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PjxiPk9wYXJ0aXNrYSBqw6RtZsO2cmVsc2VyPC9iPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBQcmFlc2VudGl1bSw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvRmFkZUluU2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdoeVVzOyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9CdXR0b25zLm1vZHVsZS5jc3MnO1xyXG5cclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGhyZWY/OiBzdHJpbmc7XHJcbiAgb25DbGljaz8gOiAoKSA9PiB2b2lkO1xyXG4gIGNsYXNzTmFtZT8gOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBCdXR0b25CbHVlIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgIHJldHVybiA8TGluayBocmVmPXtwcm9wcy5ocmVmID8gcHJvcHMuaHJlZiA6ICcjJ30+XHJcbiAgICA8YSBjbGFzc05hbWU9e2Ake3N0eWxlcy5CdXR0b25PcmFuZ2V9ICR7cHJvcHMuY2xhc3NOYW1lfSAke3Byb3BzLnR5cGUgPT09IFwib3V0bGluZVwiID8gc3R5bGVzLm91dGxpbmVkQmx1ZSA6IHByb3BzLnR5cGUgPT09IFwiZnVsbFwiID8gc3R5bGVzLmZ1bGxCbHVlIDogbnVsbH1gfSBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT5cclxuICAgICAgICB7cHJvcHMudGV4dH1cclxuICAgIDwvYT5cclxuICA8L0xpbms+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbkJsdWU7IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0J1dHRvbnMubW9kdWxlLmNzcyc7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGhyZWY/OiBzdHJpbmc7XHJcbiAgb25DbGljaz8gOiAoKSA9PiB2b2lkO1xyXG4gIGNsYXNzTmFtZT8gOiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IEJ1dHRvbldoaXRlIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgIHJldHVybiA8TGluayBocmVmPXtwcm9wcy5ocmVmID8gcHJvcHMuaHJlZiA6ICcjJ30+XHJcbiAgICA8YSBjbGFzc05hbWU9e2Ake3N0eWxlcy5CdXR0b25XaGl0ZX0gJHtwcm9wcy5jbGFzc05hbWV9ICR7cHJvcHMudHlwZSA9PT0gXCJvdXRsaW5lXCIgPyBzdHlsZXMub3V0bGluZWRXaGl0ZSA6IHByb3BzLnR5cGUgPT09IFwiZnVsbFwiID8gc3R5bGVzLmZ1bGxXaGl0ZSA6IG51bGx9YH0gb25DbGljaz17cHJvcHMub25DbGlja30+XHJcbiAgICAgICAge3Byb3BzLnRleHR9XHJcbiAgICA8L2E+XHJcbiAgPC9MaW5rPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b25XaGl0ZTsiLCJpbXBvcnQgeyBDb2wsIENvbnRhaW5lciwgUm93IH0gZnJvbSAncmVhY3QtZ3JpZC1zeXN0ZW0nO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2F0ZWdvcmllcy5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnLi9DYXRlZ29yeS9DYXRlZ29yeSc7XHJcblxyXG5cclxuY29uc3QgQ2F0ZWdvcmllcyA6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5DYXRlZ29yaWVzfT5cclxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgIDxwIGlkPXtzdHlsZXMudGl0bGV9PktyZWRpdGtvcnQga2F0ZWdvcmllcjwvcD5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxSb3cganVzdGlmeT1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnkgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnkgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhdGVnb3J5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAgICA8Um93IGp1c3RpZnk9XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhdGVnb3J5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnkgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICA8Q29sIG1kPXszfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhdGVnb3J5IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcmllczsiLCJpbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2F0ZWdvcnkubW9kdWxlLmNzcyc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXHJcblxyXG5jb25zdCBDYXRlZ29yeSA6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxtb3Rpb24uZGl2IHdoaWxlSG92ZXI9e3tzY2FsZToxLjA1LCB5Oi0xfX0gY2xhc3NOYW1lPXtzdHlsZXMuQ2F0ZWdvcnl9PlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1nZW1cIj48L2k+XHJcbiAgICAgICAgPHA+UsOkbnRvcjwvcD5cclxuICAgIDwvbW90aW9uLmRpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7IiwiaW1wb3J0IFJlYWN0LCB7dXNlQ29udGV4dH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ3JlZGl0Y2FyZC5tb2R1bGUuY3NzJ1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgUmF0aW5nIGZyb20gJy4uL1JhdGluZy9SYXRpbmcnO1xyXG5pbXBvcnQgeyBDcmVkaXRDYXJkIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9DcmVkaXRDYXJkJztcclxuaW1wb3J0IFRpcHB5IGZyb20gJ0B0aXBweWpzL3JlYWN0JztcclxuaW1wb3J0ICd0aXBweS5qcy9kaXN0L3RpcHB5LmNzcyc7XHJcbmltcG9ydCBCdXR0b25PcmFuZ2UgZnJvbSAnLi4vQnV0dG9ucy9CdXR0b25CbHVlJztcclxuaW1wb3J0IHtDYXJkIGFzIENyZWRpdENhcmRJbnRlcmZhY2V9IGZyb20gJy4uLy4uLy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZCdcclxuaW1wb3J0IHsgU3RhdGVDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dC9TdGF0ZSc7XHJcblxyXG5cclxuXHJcbmNvbnN0IENyZWRpdGNhcmQgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDx7Y2FyZCA6IENyZWRpdENhcmR9PiA9ICh7Y2FyZH0pID0+IHtcclxuXHJcblxyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VDb250ZXh0PGFueT4oU3RhdGVDb250ZXh0KVxyXG4gICAgLy8gY29uc3QgaXNDYXJkQ29tcGFyZSA9IGNvbXBhcmVTdGF0ZS5jaGVja0lmQ2FyZENvbXBhcmUoY2FyZC5wcm9wZXJ0aWVzLl9pZClcclxuXHJcblxyXG4gICAgY29uc3QgYWRkVG9Db21wYXJlID0gKGNhcmQgOiBDcmVkaXRDYXJkSW50ZXJmYWNlKSA9PiB7XHJcbiAgICAgICAgbGV0IFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xyXG4gICAgICAgIFN0YXRlLmNvbXBhcmVJZHMucHVzaChjYXJkKVxyXG4gICAgICAgIHNldFN0YXRlKFN0YXRlKVxyXG4gICAgfSAgIFxyXG5cclxuICAgIGNvbnN0IHJlbW92ZUZyb21Db21wYXJlID0gKGlkIDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgbGV0IFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpO1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gU3RhdGUuY29tcGFyZUlkcy5maW5kSW5kZXgoKENhcmQgOiBDcmVkaXRDYXJkSW50ZXJmYWNlKSA9PiBDYXJkLl9pZCA9PT0gaWQpXHJcbiAgICAgICAgaWYoaW5kZXggPCAwKSByZXR1cm47XHJcbiAgICAgICAgU3RhdGUuY29tcGFyZUlkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHNldFN0YXRlKFN0YXRlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlzQ2FyZENvbXBhcmUgPSAoaWQgOiBzdHJpbmcpIDogQm9vbGVhbiA9PiB7XHJcbiAgICAgICAgY29uc3QgZXhpc3RzID0gc3RhdGUuY29tcGFyZUlkcy5maW5kKChDYXJkIDogQ3JlZGl0Q2FyZEludGVyZmFjZSkgPT4gQ2FyZC5faWQgPT09IGlkKVxyXG5cclxuICAgICAgICByZXR1cm4gZXhpc3RzID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PiBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLklzbW9iaWxlfT57Y2FyZC5wcm9wZXJ0aWVzLm5hbWV9PC9oND5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuSXNtb2JpbGV9PjxSYXRpbmcgY2xhc3NOYW1lPXtzdHlsZXMucmF0aW5nfSByYXRpbmc9e2NhcmQucHJvcGVydGllcy5yYXRpbmd9Lz48L3NwYW4+XHJcbiAgICAgICAgICAgIDxpbWcgYWx0PXtga3JlZGl0a29ydCAke2NhcmQucHJvcGVydGllcy5uYW1lfWB9IHNyYz17Y2FyZC5wcm9wZXJ0aWVzLmltZ30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXMuSXNDb21wdXRlcn0+e2NhcmQucHJvcGVydGllcy5uYW1lfTwvaDQ+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5Jc0NvbXB1dGVyfT48UmF0aW5nIHJhdGluZz17Y2FyZC5wcm9wZXJ0aWVzLnJhdGluZ30gLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnRpZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXJkLnByb3BlcnRpZXMucHJvcGVydGllcy5tYXAocHJvcGVydGllID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwcm9wZXJ0aWUudHlwZSA9PT0gJ0dPT0QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnRpZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5nb29kfT48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hlY2stY2lyY2xlXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Byb3BlcnRpZS5wcm9wZXJ0aWV9Pntwcm9wZXJ0aWUucHJvcGVydGllfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb3BlcnRpZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5iYWR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lcy1jaXJjbGVcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17cHJvcGVydGllLnByb3BlcnRpZX0+e3Byb3BlcnRpZS5wcm9wZXJ0aWV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNwZWNpZmljfT5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhcmQucHJvcGVydGllcy5zcGVjaWZpY3MubWFwKHNwZWNpZmljID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IHNwZWNpZmljLnRleHQuc3BsaXQoJzogJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxSZWFjdC5GcmFnbWVudCBrZXk9e3NwZWNpZmljLnRleHR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIHN0eWxlPXt7Zm9udFdlaWdodDonYm9sZCd9fT57dGV4dFswXX06PC9zcGFuPiA8c3Bhbj57dGV4dFsxXX08L3NwYW4+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnRuQmFja2dyb3VuZH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25PcmFuZ2UgdHlwZT1cImZ1bGxcIiB0ZXh0PVwiQW5zw7ZrIG51IVwiIGhyZWY9e2AvUmVkaXJlY3Q/Y2FyZD0ke2NhcmQucHJvcGVydGllcy5faWR9YH0gY2xhc3NOYW1lPXtzdHlsZXMuYW5zw7ZrQnV0dG9ufSAvPiBcclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uT3JhbmdlIHR5cGU9XCJvdXRsaW5lXCIgdGV4dD1cIk1lciBpbmZvcm1hdGlvblwiIGhyZWY9e2Ava29ydC8ke2NhcmQucHJvcGVydGllcy5faWQucmVwbGFjZSgvKFxccykvZywgJy0nKX1gfSBjbGFzc05hbWU9e3N0eWxlcy5hbnPDtmtCdXR0b259IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxUaXBweSBjb250ZW50PXshaXNDYXJkQ29tcGFyZShjYXJkLnByb3BlcnRpZXMuX2lkKSA/ICdMw6RnZyB0aWxsIGtyZWRpdGtvcnQgaSBqw6RtZsO2cmVsc2UnIDogJ1RhIGJvcnQga3JlZGl0a29ydCB1ciBqw6RtZsO2cmVsc2UnfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gaXNDYXJkQ29tcGFyZShjYXJkLnByb3BlcnRpZXMuX2lkKSA/IHJlbW92ZUZyb21Db21wYXJlKGNhcmQucHJvcGVydGllcy5faWQpIDogYWRkVG9Db21wYXJlKGNhcmQucHJvcGVydGllcyl9IGNsYXNzTmFtZT17c3R5bGVzLnRvQ29tcGFyZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgIHtpc0NhcmRDb21wYXJlKGNhcmQucHJvcGVydGllcy5faWQpID8gPGkgY2xhc3NOYW1lPVwiZmFyIGZhLXRpbWVzLWNpcmNsZVwiPjwvaT4gOiA8aSBjbGFzc05hbWU9XCJmYXMgZmEtZmlsZS1pbXBvcnRcIj48L2k+fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvVGlwcHk+XHJcbiAgICAgICA8L2Rpdj5cclxuICAgPC9SZWFjdC5GcmFnbWVudD5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3JlZGl0Y2FyZDsiLCJpbXBvcnQgeyBDcmVkaXRDYXJkIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9DcmVkaXRDYXJkJztcclxuaW1wb3J0IENyZWRpdGNhcmQgZnJvbSAnLi4vQ3JlZGl0Y2FyZC9DcmVkaXRjYXJkJztcclxuaW1wb3J0IENvbXBhcmVDb250YWluZXIgZnJvbSAnLi4vLi4vLi4vc3RhdGUvY29tcGFyZSc7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgY3JlZGl0Q2FyZHM6IENyZWRpdENhcmRbXTtcclxufVxyXG5cclxuY29uc3QgRGlzcGxheUNhcmRzOiBSZWFjdC5GQzxQcm9wcz4gPSAoe2NyZWRpdENhcmRzfSkgOiBhbnkgPT4ge1xyXG4gIHJldHVybiBjcmVkaXRDYXJkcy5tYXAoQ3JlZGl0Q2FyZCA9PiB7XHJcbiAgICByZXR1cm4gPENvbXBhcmVDb250YWluZXIuUHJvdmlkZXI+XHJcbiAgICAgIDxDcmVkaXRjYXJkIGNhcmQ9e0NyZWRpdENhcmR9IC8+XHJcbiAgICA8L0NvbXBhcmVDb250YWluZXIuUHJvdmlkZXI+XHJcbiAgfSlcclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBEaXNwbGF5Q2FyZHM7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1JhdGluZy5tb2R1bGUuY3NzJ1xyXG5cclxuY29uc3QgUmF0aW5nIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8e3JhdGluZyA6IHN0cmluZywgY2xhc3NOYW1lPyA6IHN0cmluZ30+ID0gKHtyYXRpbmcsIGNsYXNzTmFtZX0pID0+IHtcclxuICAgIGxldCBSYXRpbmc7XHJcbiAgICBzd2l0Y2ggIChwYXJzZUludChyYXRpbmcpKSB7XHJcbiAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICBSYXRpbmcgPSAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya30+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya30+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICBSYXRpbmcgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya30+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya30+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya30+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgIFJhdGluZyA9IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubGlnaHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya30+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgUmF0aW5nID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5saWdodH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgUmF0aW5nID0gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxpZ2h0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIFJhdGluZyA9IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZGFya30+PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXN0YXJcIj48L2k+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmRhcmt9PjxpIGNsYXNzTmFtZT1cImZhciBmYS1zdGFyXCI+PC9pPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kYXJrfT48aSBjbGFzc05hbWU9XCJmYXIgZmEtc3RhclwiPjwvaT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICAgICAgcmV0dXJuICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lfT57UmF0aW5nfTwvZGl2PjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmF0aW5nOyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnaHR0cHM6Ly9rcmVkaXRrb3J0c2tvbGxhcGkuZXcuci5hcHBzcG90LmNvbS8nLFxyXG5cclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIGNyZWF0ZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDYXJkIGFzIENyZWRpdENhcmRJbnRlcmZhY2V9IGZyb20gJy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZCc7XHJcblxyXG5pbnRlcmZhY2UgU3RhdGUge1xyXG4gIGNhcmRzOiBDcmVkaXRDYXJkSW50ZXJmYWNlW107XHJcbiAgY29tcGFyZUlkczogQ3JlZGl0Q2FyZEludGVyZmFjZVtdOyBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFN0YXRlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pXHJcblxyXG5leHBvcnQgY29uc3QgU3RhdGVQcm92aWRlciA6IFJlYWN0LkZDID0gKHtjaGlsZHJlbn0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlPFN0YXRlPih7XHJcbiAgICBjYXJkczpbXSxcclxuICAgIGNvbXBhcmVJZHM6W11cclxuICB9KVxyXG4gIHJldHVybiA8U3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbc3RhdGUsIHNldFN0YXRlXX0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gIDwvU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG59XHJcblxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ29udGFpbmVyLm1vZHVsZS5jc3MnXHJcblxyXG5cclxuY29uc3QgQ29udGFpbmVyIDogUmVhY3QuRkMgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGlkPXtzdHlsZXMuQ29udGFpbmVyfT5cclxuICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjsiLCJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0ICcuL0ZhZGVJblNlY3Rpb24ubW9kdWxlLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBGYWRlSW5TZWN0aW9uKHByb3BzKSB7XHJcbiAgICBjb25zdCBbaXNWaXNpYmxlLCBzZXRWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGRvbVJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgaWYoaXNWaXNpYmxlKSByZXR1cm5cclxuICAgICAgICBpZihkb21SZWYuY3VycmVudC5jbGFzc05hbWUgPT09ICdmYWRlLWluLXNlY3Rpb25pcy12aXNpYmxlJykgcmV0dXJuXHJcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHNldFZpc2libGUoZW50cnkuaXNJbnRlcnNlY3RpbmcpKTtcclxuICAgICAgfSk7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUoZG9tUmVmLmN1cnJlbnQpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKGRvbVJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9e2BmYWRlLWluLXNlY3Rpb24gJHtpc1Zpc2libGUgPyAnaXMtdmlzaWJsZScgOiAnJ31gfVxyXG4gICAgICAgIHJlZj17ZG9tUmVmfVxyXG4gICAgICA+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBGYWRlSW5TZWN0aW9uOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IENyZWRpdENhcmQgfSBmcm9tICcuLi9jbGFzc2VzL0NyZWRpdENhcmQnXHJcbmltcG9ydCB7IENhcmQgYXMgQ3JlZGl0Q2FyZEludGVyZmFjZSB9IGZyb20gJy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9JbmRleC9IZWFkZXIvSGVhZGVyJztcclxuaW1wb3J0IFdoeVVzIGZyb20gJy4uL2NvbXBvbmVudHMvSW5kZXgvV2h5VXMvV2h5VXMnO1xyXG5pbXBvcnQgVG9wQ2FyZHMgZnJvbSAnLi4vY29tcG9uZW50cy9JbmRleC9Ub3BDYXJkcy9Ub3BDYXJkcyc7XHJcbmltcG9ydCB7IEJlc3RDYXJkIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9CZXN0Q2FyZCc7XHJcbmltcG9ydCB7IGdldEJlc3RDYXJkLCBnZXRDYXJkcyB9IGZyb20gJy4uL3Jlc291cmNlcy9DYXJkcydcclxuaW1wb3J0IHsgQ3JlZGl0Q2FyZHMgfSBmcm9tICcuLi9jbGFzc2VzL0NyZWRpdENhcmRzJztcclxuaW1wb3J0IFVwZGF0ZWRJbmZvcm1hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0luZGV4L1VwZGF0ZWRJbmZvcmFtdGlvbi9VcGRhdGVkSW5mb3JtYXRpb24nO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgQ2F0ZWdvcmllcyBmcm9tICcuLi9jb21wb25lbnRzL1VpL0NhdGVnb3JpZXMvQ2F0ZWdvcmllcyc7XHJcbmltcG9ydCBFbWFpbEFyZWEgZnJvbSAnLi4vY29tcG9uZW50cy9JbmRleC9FbWFpbEFyZWEvRW1haWxBcmVhJztcclxuaW1wb3J0IFRlc3QgZnJvbSAnLi4vY29tcG9uZW50cy9JbmRleC9UZXN0L1Rlc3QnO1xyXG5cclxuXHJcbmludGVyZmFjZSBTdGF0ZSB7XHJcbiAgY2FyZHMgOiBDcmVkaXRDYXJkcztcclxufVxyXG5cclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBsb2FkaW5nIDogYm9vbGVhbjtcclxuICAgIGNvbXBhcmVJZHMgOiBzdHJpbmdbXTtcclxuICAgIGNhcmRzOiBDcmVkaXRDYXJkSW50ZXJmYWNlW107XHJcbiAgICBiZXN0Y2FyZDogQmVzdENhcmQ7XHJcbn1cclxuXHJcbmNsYXNzIEluZGV4UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU3RhdGU+ICB7XHJcbiAgcmVuZGVyICgpIHtcclxuICAgIGNvbnN0IGNhcmRzID0gdGhpcy5wcm9wcy5jYXJkcy5tYXAoY2FyZCA9PiBuZXcgQ3JlZGl0Q2FyZChjYXJkKSk7XHJcbiAgICBjb25zdCBsaXN0ID0gbmV3IENyZWRpdENhcmRzKGNhcmRzKTtcclxuICAgIGNvbnN0IGJlc3RjYXJkID0gdGhpcy5wcm9wcy5iZXN0Y2FyZFxyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5BbGxhIGtyZWRpdGtvcnQ8L3RpdGxlPlxyXG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiS3JlZGl0a29ydHNrb2xsLmNvbSBqw6RtZsO2ciBvbGlrYSBrcmVkaXRrb3J0IGbDtnIgYXR0IGhpdHRhIGRldCBiw6RzdGEga3JlZGlrb3J0ZXQgZsO2ciBkaWcuIErDpG1mw7ZyIGtyZWRpdGtvcnQgc29tIFJlbWVtYmVyIGZsZXggb2NoIE5vcndlZ2lhblwiIC8+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwiaW5kZXgsIGZvbGxvd1wiIC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICAgIDxIZWFkZXIgYmVzdGNhcmQ9e2Jlc3RjYXJkfSAvPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDxXaHlVcyAvPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDxVcGRhdGVkSW5mb3JtYXRpb24gLz5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICA8VGVzdCAvPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgIDxDYXRlZ29yaWVzIC8+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgPFRvcENhcmRzIGNyZWRpdENhcmRzPXtsaXN0fSAvPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9tYWluPlxyXG4gIDwvZGl2PlxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb21pc2VzID0gW2dldENhcmRzKCksIGdldEJlc3RDYXJkKCldO1xyXG5cclxuICAgIGNvbnN0IHJlc3BvbnNlcyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKVxyXG5cclxuXHJcbiAgICBjb25zdCBjYXJkc1Jlc3BvbnNlID0gcmVzcG9uc2VzWzBdIGFzIHtjYXJkcz86IENyZWRpdENhcmRJbnRlcmZhY2VbXSwgZXJyb3I/OiBib29sZWFufTtcclxuICAgIGNvbnN0IGJlc3RjYXJkUmVzcG9uc2UgPSByZXNwb25zZXNbMV0gYXMge2Jlc3RjYXJkPzogQmVzdENhcmQsIGVycm9yPzogYm9vbGVhbn07XHJcblxyXG5cclxuICAgIGlmKGNhcmRzUmVzcG9uc2UuZXJyb3IgfHwgYmVzdGNhcmRSZXNwb25zZS5lcnJvcikgdGhyb3cgbmV3IEVycm9yKClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wcyA6IHtcclxuICAgICAgICBjYXJkczogY2FyZHNSZXNwb25zZS5jYXJkcyxcclxuICAgICAgICBiZXN0Y2FyZDogYmVzdGNhcmRSZXNwb25zZS5iZXN0Y2FyZFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgY2FyZHMgOiBbXSxcclxuICAgICAgICBiZXN0Y2FyZDogdW5kZWZpbmVkXHJcbiAgICAgIH0sXHJcbiAgICAgIHJldmFsaWRhdGU6IDM2MDAgKiA0XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlXHJcbiIsImltcG9ydCBheGlvcyBmcm9tICcuLi9jb25maWcvYXhpb3MnO1xyXG5pbXBvcnQgeyBDYXJkIGFzIENyZWRpdENhcmRJbnRlcmZhY2UgfSBmcm9tICcuLi9jbGFzc2VzL0NyZWRpdENhcmQnO1xyXG5pbXBvcnQgeyBCZXN0Q2FyZCB9IGZyb20gJy4uL2ludGVyZmFjZXMvQmVzdENhcmQnO1xyXG5pbXBvcnQgeyBDb21wYXJlQ2FyZHMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0NvbXBhcmVDYXJkcyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEJlc3RDYXJkID0gYXN5bmMgKCkgOiBQcm9taXNlPHtiZXN0Y2FyZD86IEJlc3RDYXJkLCBlcnJvcj86IGJvb2xlYW59PiA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnTm90IHN0YXRpYycpXHJcbiAgdHJ5IHtcclxuICAgIC8vIEZldGNoIGJlc3RjYXJkIGZyb20gc2VydmVyXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9iZXN0Y2FyZCcpO1xyXG5cclxuICAgIGlmKCFyZXMuZGF0YS5iZXN0Q2FyZFswXSkgdGhyb3cgbmV3IEVycm9yKCk7XHJcblxyXG4gICAgY29uc3QgYmVzdGNhcmQgPSByZXMuZGF0YS5iZXN0Q2FyZFswXSBhcyBCZXN0Q2FyZFxyXG4gIFxyXG4gICAgLy8gUmV0dXJuIGJlc3RjYXJkXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiZXN0Y2FyZFxyXG4gICAgfTsgICAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yOnRydWVcclxuICAgIH07XHJcbn1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENhcmRzID0gYXN5bmMgKCkgOiBQcm9taXNlPHtjYXJkcz8gOiBDcmVkaXRDYXJkSW50ZXJmYWNlW10sIGVycm9yPyA6IGJvb2xlYW59PiA9PiB7XHJcbiAgLy8gRmV0Y2ggY2FyZHMgZnJvbSBzZXJ2ZXJcclxuICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9jYXJkcycpO1xyXG4gICAgICBjb25zdCBjYXJkcyA9IHJlcy5kYXRhLmNhcmRzIGFzIENyZWRpdENhcmRJbnRlcmZhY2VbXTsgICAgXHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNhcmRzLFxyXG4gICAgICAgIGVycm9yOmZhbHNlXHJcbiAgICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3I6dHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENhcmQgPSBhc3luYyAobmFtZSA6IHN0cmluZykgOiBQcm9taXNlPHtjYXJkPyA6IENyZWRpdENhcmRJbnRlcmZhY2UsIGVycm9yPyA6IGJvb2xlYW59PiA9PiB7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYC9jYXJkLyR7bmFtZX1gKTtcclxuICAgIGNvbnN0IGNhcmQgPSByZXMuZGF0YSBhcyBDcmVkaXRDYXJkSW50ZXJmYWNlO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNhcmQsXHJcbiAgICAgIGVycm9yOmZhbHNlXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjogdHJ1ZVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29tcGFyZUNhcmRzID0gYXN5bmMgKGlkcyA6IHN0cmluZ1tdKSA6IFByb21pc2U8e2NhcmRzPyA6IENvbXBhcmVDYXJkc1tdLCBlcnJvcj8gOiBib29sZWFufT4gPT4geyBcclxuICB0cnkge1xyXG4gICAgLy8gRmV0Y2hpbmcgY2FyZHNcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgL2NhcmRzL2NvbXBhcmU/aWRzPSR7aWRzfWApO1xyXG4gICAgbGV0IGNhcmRzID0gcmVzLmRhdGEuY2FyZHNJbmZvIGFzIENvbXBhcmVDYXJkc1tdO1xyXG5cclxuICAgIC8vIENoZWNrIGZvciBjYXJkc1xyXG4gICAgaWYoIWNhcmRzKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgdW5kZWZpbmVkIGNhcmRzXHJcbiAgICBjYXJkcyA9IGNhcmRzLmZpbHRlcihjYXJkc0luZm8gPT4gY2FyZHNJbmZvICE9PSBudWxsKTtcclxuXHJcbiAgICAvLyBSZXR1cm4gY2FyZHNcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNhcmRzLFxyXG4gICAgICBlcnJvcjpmYWxzZVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyBFcnJvciwgcmV0dXJuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjogdHJ1ZVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn0iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY3JlYXRlQ29udGFpbmVyIH0gZnJvbSBcInVuc3RhdGVkLW5leHRcIlxyXG5cclxuZnVuY3Rpb24gdXNlQ3VzdG9tSG9vaygpIHtcclxuICBsZXQgW2NvbXBhcmVJZHMsIHNldENvbXBhcmVJZHNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcclxuICBjb25zdCBhZGRUb0NvbXBhcmUgPSAoaWQgOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IElkcyA9IFsuLi5jb21wYXJlSWRzXTtcclxuICAgIGNvbnN0IGV4aXN0cyA9IElkcy5maW5kKGNvbXBhcmVJZCA9PiBjb21wYXJlSWQgPT09IGlkKTtcclxuICAgIGlmIChleGlzdHMpIHJldHVybiBudWxsO1xyXG4gICAgXHJcbiAgICBJZHMucHVzaChpZCk7XHJcblxyXG4gICAgc2V0Q29tcGFyZUlkcyhJZHMpXHJcblxyXG4gICAgcmV0dXJuIElkcztcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbW92ZUZyb21Db21wYXJlID0gKGlkIDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBJZHMgOiBzdHJpbmdbXSA9IFsuLi5jb21wYXJlSWRzXTtcclxuXHJcbiAgICBjb25zdCBpbmRleCA9IElkcy5maW5kSW5kZXgoY29tcGFyZUlkcyA9PiBjb21wYXJlSWRzID09PSBpZCk7XHJcblxyXG4gICAgaWYoaW5kZXggPCAwKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBJZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICBzZXRDb21wYXJlSWRzKElkcyk7XHJcblxyXG4gICAgcmV0dXJuIElkcztcclxuICB9XHJcblxyXG4gIGNvbnN0IGNoZWNrSWZDYXJkQ29tcGFyZSA9IChpZCA6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgSWRzIDogc3RyaW5nW10gPSBbLi4uY29tcGFyZUlkc107XHJcblxyXG4gICAgcmV0dXJuIElkcy5maW5kKGNvbXBhcmVJZHMgPT4gY29tcGFyZUlkcyA9PT0gaWQpO1xyXG4gIH1cclxuICByZXR1cm4geyBjb21wYXJlSWRzLCBhZGRUb0NvbXBhcmUsIHJlbW92ZUZyb21Db21wYXJlLCBjaGVja0lmQ2FyZENvbXBhcmV9XHJcbn1cclxuXHJcbmxldCBDb250YWluZXIgPSBjcmVhdGVDb250YWluZXIodXNlQ3VzdG9tSG9vaylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhaW5lcjsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJCZXN0Q2FyZFwiOiBcIkJlc3RDYXJkX0Jlc3RDYXJkX18zd0VrcVwiLFxuXHRcImJ0blwiOiBcIkJlc3RDYXJkX2J0bl9fQTRWY2VcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkhlYWRlclwiOiBcIkhlYWRlcl9IZWFkZXJfXzFCU2pIXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJUZXh0SGVhZGVyXCI6IFwiVGV4dEhlYWRlcl9UZXh0SGVhZGVyX18xSnZoSVwiLFxuXHRcIkhlYWRpbmdUaXRsZVwiOiBcIlRleHRIZWFkZXJfSGVhZGluZ1RpdGxlX18zY2RnWFwiLFxuXHRcIm1vdmVJblJpZ2h0XCI6IFwiVGV4dEhlYWRlcl9tb3ZlSW5SaWdodF9fMnUzeVVcIixcblx0XCJIZWFkaW5nRGVzY3JpcHRpb25cIjogXCJUZXh0SGVhZGVyX0hlYWRpbmdEZXNjcmlwdGlvbl9fM0ItTk1cIixcblx0XCJtb3ZlSW5MZWZ0XCI6IFwiVGV4dEhlYWRlcl9tb3ZlSW5MZWZ0X18zMXVfNVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiVGVzdFwiOiBcIlRlc3RfVGVzdF9fMmlkZmhcIixcblx0XCJJbWdcIjogXCJUZXN0X0ltZ19fMVdETGpcIixcblx0XCJjb250ZW50XCI6IFwiVGVzdF9jb250ZW50X19MRFF2dlwiLFxuXHRcIkJ0blwiOiBcIlRlc3RfQnRuX18yUF9IbFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiVG9wQ2FyZHNcIjogXCJUb3BDYXJkc19Ub3BDYXJkc19fM3YwamdcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlVwZGF0ZWRJbmZvcm1hdGlvblwiOiBcIlVwZGF0ZWRJbmZvcm1hdGlvbl9VcGRhdGVkSW5mb3JtYXRpb25fX0x6dVdqXCIsXG5cdFwiSW1nXCI6IFwiVXBkYXRlZEluZm9ybWF0aW9uX0ltZ19fMzVydTlcIixcblx0XCJjb250ZW50XCI6IFwiVXBkYXRlZEluZm9ybWF0aW9uX2NvbnRlbnRfX1NNSGF4XCIsXG5cdFwiQnRuXCI6IFwiVXBkYXRlZEluZm9ybWF0aW9uX0J0bl9fMkNpaC1cIixcblx0XCJpbWdDb250YWluZXJcIjogXCJVcGRhdGVkSW5mb3JtYXRpb25faW1nQ29udGFpbmVyX18xSFg0OFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiV2h5VXNcIjogXCJXaHlVc19XaHlVc19fMUpJdWdcIixcblx0XCJyb3dcIjogXCJXaHlVc19yb3dfXzNDOTM5XCIsXG5cdFwidGV4dFwiOiBcIldoeVVzX3RleHRfXzM0anBVXCIsXG5cdFwiaGVhZFwiOiBcIldoeVVzX2hlYWRfXzJWbnZqXCIsXG5cdFwidGl0bGVcIjogXCJXaHlVc190aXRsZV9feGY4bjJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkJ1dHRvbldoaXRlXCI6IFwiQnV0dG9uc19CdXR0b25XaGl0ZV9fMkRPZ3lcIixcblx0XCJvdXRsaW5lZFdoaXRlXCI6IFwiQnV0dG9uc19vdXRsaW5lZFdoaXRlX18zU1llcFwiLFxuXHRcImZ1bGxXaGl0ZVwiOiBcIkJ1dHRvbnNfZnVsbFdoaXRlX18zUl9BN1wiLFxuXHRcIkJ1dHRvbk9yYW5nZVwiOiBcIkJ1dHRvbnNfQnV0dG9uT3JhbmdlX196T2VsS1wiLFxuXHRcIm91dGxpbmVkQmx1ZVwiOiBcIkJ1dHRvbnNfb3V0bGluZWRCbHVlX18yZDMyYlwiLFxuXHRcImZ1bGxCbHVlXCI6IFwiQnV0dG9uc19mdWxsQmx1ZV9fMVl3Tm5cIixcblx0XCJidXR0b25Ib3ZlclwiOiBcIkJ1dHRvbnNfYnV0dG9uSG92ZXJfX0xkc0tEXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJDYXRlZ29yaWVzXCI6IFwiQ2F0ZWdvcmllc19DYXRlZ29yaWVzX18xTDRBVVwiLFxuXHRcImNvbnRlbnRcIjogXCJDYXRlZ29yaWVzX2NvbnRlbnRfXzFRX1hSXCIsXG5cdFwidGl0bGVcIjogXCJDYXRlZ29yaWVzX3RpdGxlX18yeWdQSFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQ2F0ZWdvcnlcIjogXCJDYXRlZ29yeV9DYXRlZ29yeV9fbUNBX3VcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcmRcIjogXCJDcmVkaXRjYXJkX2NhcmRfXzNfTDRJXCIsXG5cdFwiSXNtb2JpbGVcIjogXCJDcmVkaXRjYXJkX0lzbW9iaWxlX18zTnBuZVwiLFxuXHRcIklzQ29tcHV0ZXJcIjogXCJDcmVkaXRjYXJkX0lzQ29tcHV0ZXJfXzFpMjd0XCIsXG5cdFwiY29udGVudFwiOiBcIkNyZWRpdGNhcmRfY29udGVudF9fMThVMHFcIixcblx0XCJzcGVjaWZpY1wiOiBcIkNyZWRpdGNhcmRfc3BlY2lmaWNfXzFwaHVJXCIsXG5cdFwiYnV0dG9uc1wiOiBcIkNyZWRpdGNhcmRfYnV0dG9uc19fTWN4OW9cIixcblx0XCJhbnPDtmtCdXR0b25cIjogXCJDcmVkaXRjYXJkX2Fuc19rQnV0dG9uX18zUXc4X1wiLFxuXHRcImdvb2RcIjogXCJDcmVkaXRjYXJkX2dvb2RfXzE1MWE3XCIsXG5cdFwiYmFkXCI6IFwiQ3JlZGl0Y2FyZF9iYWRfXzFpUjZkXCIsXG5cdFwidG9Db21wYXJlXCI6IFwiQ3JlZGl0Y2FyZF90b0NvbXBhcmVfX0hURGlUXCIsXG5cdFwicHJvcGVydGllc1wiOiBcIkNyZWRpdGNhcmRfcHJvcGVydGllc19fMlR5bUhcIixcblx0XCJwcm9wZXJ0aWVcIjogXCJDcmVkaXRjYXJkX3Byb3BlcnRpZV9fMzdERkhcIixcblx0XCJidG5CYWNrZ3JvdW5kXCI6IFwiQ3JlZGl0Y2FyZF9idG5CYWNrZ3JvdW5kX18xLUdHYlwiLFxuXHRcInJhdGluZ1wiOiBcIkNyZWRpdGNhcmRfcmF0aW5nX18zMTRDX1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibGlnaHRcIjogXCJSYXRpbmdfbGlnaHRfXzFMNjNuXCIsXG5cdFwiZGFya1wiOiBcIlJhdGluZ19kYXJrX18yYWpveVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQ29udGFpbmVyXCI6IFwiQ29udGFpbmVyX0NvbnRhaW5lcl9fMkZpUFRcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB0aXBweWpzL3JlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ncmlkLXN5c3RlbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVuc3RhdGVkLW5leHRcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=