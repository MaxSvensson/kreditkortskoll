(function() {
var exports = {};
exports.id = "pages/kort/[name]";
exports.ids = ["pages/kort/[name]"];
exports.modules = {

/***/ "./src/components/CreditCard/CardInformation/CardInformation.tsx":
/*!***********************************************************************!*\
  !*** ./src/components/CreditCard/CardInformation/CardInformation.tsx ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hoc_Container_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hoc/Container/Container */ "./src/hoc/Container/Container.tsx");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SpecificsTable_SpecificsTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SpecificsTable/SpecificsTable */ "./src/components/CreditCard/CardInformation/SpecificsTable/SpecificsTable.tsx");
/* harmony import */ var _CardInsurances_CardInsurances__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardInsurances/CardInsurances */ "./src/components/CreditCard/CardInformation/CardInsurances/CardInsurances.tsx");
/* harmony import */ var _CardRequierments_CardRequierments__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./CardRequierments/CardRequierments */ "./src/components/CreditCard/CardInformation/CardRequierments/CardRequierments.tsx");
/* harmony import */ var _CardText_CardText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CardText/CardText */ "./src/components/CreditCard/CardInformation/CardText/CardText.tsx");
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\CreditCard\\CardInformation\\CardInformation.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
 // Components








const CardInformation = ({
  creditcard
}) => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }
  }, __jsx(_hoc_Container_Container__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Col, {
    md: 12,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx(_SpecificsTable_SpecificsTable__WEBPACK_IMPORTED_MODULE_3__.default, {
    cardsFacts: creditcard.properties.facts,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  })), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Col, {
    md: 12,
    lg: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }
  }, __jsx(_CardInsurances_CardInsurances__WEBPACK_IMPORTED_MODULE_4__.default, {
    insurances: creditcard.properties.insurances,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }))), __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Row, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Col, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_CardRequierments_CardRequierments__WEBPACK_IMPORTED_MODULE_5__.default, {
    requirements: creditcard.properties.requirements,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }))), __jsx(_CardText_CardText__WEBPACK_IMPORTED_MODULE_6__.default, {
    creditcard: creditcard.properties,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CardInformation);

/***/ }),

/***/ "./src/components/CreditCard/CardInformation/CardInsurances/CardInsurances.tsx":
/*!*************************************************************************************!*\
  !*** ./src/components/CreditCard/CardInformation/CardInsurances/CardInsurances.tsx ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardInsurances_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardInsurances.module.css */ "./src/components/CreditCard/CardInformation/CardInsurances/CardInsurances.module.css");
/* harmony import */ var _CardInsurances_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CardInsurances_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\CreditCard\\CardInformation\\CardInsurances\\CardInsurances.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const CardInsurances = ({
  insurances
}) => {
  return __jsx("div", {
    className: (_CardInsurances_module_css__WEBPACK_IMPORTED_MODULE_1___default()["försäkring"]),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 12
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "F\xF6rs\xE4kringar"), __jsx("div", {
    className: (_CardInsurances_module_css__WEBPACK_IMPORTED_MODULE_1___default().content),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: (_CardInsurances_module_css__WEBPACK_IMPORTED_MODULE_1___default().left),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, "Ing\xE5r"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, insurances.map(insurance => {
    if (insurance.type === 'GOOD') {
      return __jsx("li", {
        key: insurance.text,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 40
        }
      }, __jsx("span", {
        className: (_CardInsurances_module_css__WEBPACK_IMPORTED_MODULE_1___default().good),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 65
        }
      }, __jsx("i", {
        className: "fas fa-check-circle",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 95
        }
      })), insurance.text);
    }
  }))), __jsx("div", {
    className: (_CardInsurances_module_css__WEBPACK_IMPORTED_MODULE_1___default().right),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "Ing\xE5r inte"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, insurances.map(insurance => {
    if (insurance.type === 'BAD') {
      return __jsx("li", {
        key: insurance.text,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 40
        }
      }, __jsx("span", {
        className: (_CardInsurances_module_css__WEBPACK_IMPORTED_MODULE_1___default().bad),
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 65
        }
      }, __jsx("i", {
        className: "fas fa-times-circle",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 94
        }
      })), insurance.text);
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (CardInsurances);

/***/ }),

/***/ "./src/components/CreditCard/CardInformation/CardRequierments/CardRequierments.tsx":
/*!*****************************************************************************************!*\
  !*** ./src/components/CreditCard/CardInformation/CardRequierments/CardRequierments.tsx ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardRequirements_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CardRequirements.module.css */ "./src/components/CreditCard/CardInformation/CardRequierments/CardRequirements.module.css");
/* harmony import */ var _CardRequirements_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_CardRequirements_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\CreditCard\\CardInformation\\CardRequierments\\CardRequierments.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const CardRequirements = ({
  requirements
}) => {
  return __jsx("div", {
    className: (_CardRequirements_module_css__WEBPACK_IMPORTED_MODULE_1___default().krav),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 12
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "Krav"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, requirements.map(requirement => {
    return __jsx("li", {
      key: requirement,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 32
      }
    }, __jsx("span", {
      className: (_CardRequirements_module_css__WEBPACK_IMPORTED_MODULE_1___default().good),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 54
      }
    }, __jsx("i", {
      className: "fas fa-check-circle",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 84
      }
    })), requirement);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (CardRequirements);

/***/ }),

/***/ "./src/components/CreditCard/CardInformation/CardText/BonusText/BonusText.tsx":
/*!************************************************************************************!*\
  !*** ./src/components/CreditCard/CardInformation/CardText/BonusText/BonusText.tsx ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\CreditCard\\CardInformation\\CardText\\BonusText\\BonusText.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


const BonusText = ({
  bonustext
}) => {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 10
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, "Bonus"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, bonustext));
};

/* harmony default export */ __webpack_exports__["default"] = (BonusText);

/***/ }),

/***/ "./src/components/CreditCard/CardInformation/CardText/CardText.tsx":
/*!*************************************************************************!*\
  !*** ./src/components/CreditCard/CardInformation/CardText/CardText.tsx ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BonusText_BonusText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BonusText/BonusText */ "./src/components/CreditCard/CardInformation/CardText/BonusText/BonusText.tsx");
/* harmony import */ var _CardText_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardText.module.css */ "./src/components/CreditCard/CardInformation/CardText/CardText.module.css");
/* harmony import */ var _CardText_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_CardText_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _CreditText_CreditText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreditText/CreditText */ "./src/components/CreditCard/CardInformation/CardText/CreditText/CreditText.tsx");
/* harmony import */ var _InsuranceText_InsuranceText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InsuranceText/InsuranceText */ "./src/components/CreditCard/CardInformation/CardText/InsuranceText/InsuranceText.tsx");
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\CreditCard\\CardInformation\\CardText\\CardText.tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





const CardText = ({
  creditcard
}) => {
  return __jsx("div", {
    id: (_CardText_module_css__WEBPACK_IMPORTED_MODULE_4___default().CardText),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 10
    }
  }, __jsx(_BonusText_BonusText__WEBPACK_IMPORTED_MODULE_1__.default, {
    bonustext: creditcard.bonustext,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }), __jsx(_CreditText_CreditText__WEBPACK_IMPORTED_MODULE_2__.default, {
    creditText: creditcard.creditText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }), __jsx(_InsuranceText_InsuranceText__WEBPACK_IMPORTED_MODULE_3__.default, {
    insurancetext: creditcard.insuranceText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CardText);

/***/ }),

/***/ "./src/components/CreditCard/CardInformation/CardText/CreditText/CreditText.tsx":
/*!**************************************************************************************!*\
  !*** ./src/components/CreditCard/CardInformation/CardText/CreditText/CreditText.tsx ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\CreditCard\\CardInformation\\CardText\\CreditText\\CreditText.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


const CreditText = ({
  creditText
}) => {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 10
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Kredit"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, creditText));
};

/* harmony default export */ __webpack_exports__["default"] = (CreditText);

/***/ }),

/***/ "./src/components/CreditCard/CardInformation/CardText/InsuranceText/InsuranceText.tsx":
/*!********************************************************************************************!*\
  !*** ./src/components/CreditCard/CardInformation/CardText/InsuranceText/InsuranceText.tsx ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\CreditCard\\CardInformation\\CardText\\InsuranceText\\InsuranceText.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


const InsuranceText = ({
  insurancetext
}) => {
  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 10
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "F\xF6rs\xE4kringar"), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, insurancetext));
};

/* harmony default export */ __webpack_exports__["default"] = (InsuranceText);

/***/ }),

/***/ "./src/components/CreditCard/CardInformation/SpecificsTable/SpecificsTable.tsx":
/*!*************************************************************************************!*\
  !*** ./src/components/CreditCard/CardInformation/SpecificsTable/SpecificsTable.tsx ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SpecificsTable_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpecificsTable.module.css */ "./src/components/CreditCard/CardInformation/SpecificsTable/SpecificsTable.module.css");
/* harmony import */ var _SpecificsTable_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SpecificsTable_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\CreditCard\\CardInformation\\SpecificsTable\\SpecificsTable.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const CardTable = ({
  cardsFacts
}) => {
  return __jsx("div", {
    className: (_SpecificsTable_module_css__WEBPACK_IMPORTED_MODULE_1___default().CardTable),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 12
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, "Fakta om kortet"), __jsx("table", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, cardsFacts.map(fact => {
    return __jsx("tr", {
      key: fact.text,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 28
      }
    }, __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 21
      }
    }, fact.text), __jsx("td", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }
    }, fact.value));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (CardTable);

/***/ }),

/***/ "./src/components/CreditCard/Header/CardBox/CardBox.tsx":
/*!**************************************************************!*\
  !*** ./src/components/CreditCard/Header/CardBox/CardBox.tsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CardBox_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardBox.module.css */ "./src/components/CreditCard/Header/CardBox/CardBox.module.css");
/* harmony import */ var _CardBox_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CardBox_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Ui_Buttons_ButtonWhite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Ui/Buttons/ButtonWhite */ "./src/components/Ui/Buttons/ButtonWhite.tsx");
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\CreditCard\\Header\\CardBox\\CardBox.tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);
 // Interface

// Components



const CardBox = ({
  card
}) => {
  return __jsx("div", {
    id: (_CardBox_module_css__WEBPACK_IMPORTED_MODULE_3___default().CardBox),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, card.name), __jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
    src: card.img,
    alt: `Information kreditkort ${card.name}`,
    width: 250,
    height: 150,
    layout: "intrinsic",
    quality: 100,
    priority: true,
    id: (_CardBox_module_css__WEBPACK_IMPORTED_MODULE_3___default().Img),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }), __jsx(_Ui_Buttons_ButtonWhite__WEBPACK_IMPORTED_MODULE_2__.default, {
    type: "outline",
    text: "Ans\xF6k nu!",
    href: `/Redirect?card=${card._id}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CardBox);

/***/ }),

/***/ "./src/components/CreditCard/Header/Header.tsx":
/*!*****************************************************!*\
  !*** ./src/components/CreditCard/Header/Header.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Header.module.css */ "./src/components/CreditCard/Header/Header.module.css");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hoc_Container_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hoc/Container/Container */ "./src/hoc/Container/Container.tsx");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _TextHeader_TextHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextHeader/TextHeader */ "./src/components/CreditCard/Header/TextHeader/TextHeader.tsx");
/* harmony import */ var _CardBox_CardBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardBox/CardBox */ "./src/components/CreditCard/Header/CardBox/CardBox.tsx");
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\CreditCard\\Header\\Header.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



// Components



const Header = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(({
  creditCard
}, ref) => {
  return __jsx("div", {
    ref: ref,
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
    cardName: creditCard.properties.name,
    cardDescription: creditCard.properties.description,
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
  }, __jsx(_CardBox_CardBox__WEBPACK_IMPORTED_MODULE_4__.default, {
    card: creditCard.properties,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 25
    }
  })))));
});
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/CreditCard/Header/TextHeader/TextHeader.tsx":
/*!********************************************************************!*\
  !*** ./src/components/CreditCard/Header/TextHeader/TextHeader.tsx ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextHeader.module.css */ "./src/components/CreditCard/Header/TextHeader/TextHeader.module.css");
/* harmony import */ var _TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\CreditCard\\Header\\TextHeader\\TextHeader.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const TextHeader = ({
  cardName,
  cardDescription
}) => {
  return __jsx("div", {
    id: (_TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().TextHeader),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 12
    }
  }, __jsx("div", {
    id: (_TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().HeadingTitle),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, cardName)), __jsx("div", {
    id: (_TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().HeadingDescription),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, cardDescription)));
};

/* harmony default export */ __webpack_exports__["default"] = (TextHeader);

/***/ }),

/***/ "./src/pages/kort/[name].tsx":
/*!***********************************!*\
  !*** ./src/pages/kort/[name].tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_CreditCard_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/CreditCard/Header/Header */ "./src/components/CreditCard/Header/Header.tsx");
/* harmony import */ var _classes_CreditCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/CreditCard */ "./src/classes/CreditCard.ts");
/* harmony import */ var _resources_Cards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../resources/Cards */ "./src/resources/Cards.ts");
/* harmony import */ var _components_CreditCard_CardInformation_CardInformation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CreditCard/CardInformation/CardInformation */ "./src/components/CreditCard/CardInformation/CardInformation.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\pages\\kort\\[name].tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


 // Components





const CreditCard = ({
  card
}) => {
  const headerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // function isInViewport(el : HTMLDivElement) {
  //   const rect = el.getBoundingClientRect();
  //   console.log(rect)
  //   return (
  //       -(rect.top) >= window.innerHeight &&
  //       rect.left >= 0 &&
  //       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //   );
  // }
  // useEffect(() => {
  //   document.addEventListener('scroll', function () {
  //     if(headerRef.current) {
  //       const headerVisble = isInViewport(headerRef.current)
  //       console.log(headerVisble)
  //     }
  //   }, {
  //       passive: true
  //   });
  // }, [])

  const creditCard = new _classes_CreditCard__WEBPACK_IMPORTED_MODULE_2__.CreditCard(card);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 10
    }
  }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "Kreditkortskoll.com | ", card.name)), __jsx(_components_CreditCard_Header_Header__WEBPACK_IMPORTED_MODULE_1__.default, {
    ref: headerRef,
    creditCard: creditCard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }), __jsx(_components_CreditCard_CardInformation_CardInformation__WEBPACK_IMPORTED_MODULE_4__.default, {
    creditcard: creditCard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }));
};

async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await (0,_resources_Cards__WEBPACK_IMPORTED_MODULE_3__.getCards)();
  const cards = res.cards;
  if (!cards) throw new Error(); // Get the paths we want to pre-render based on posts

  const paths = cards.map(card => ({
    params: {
      name: card._id
    }
  })); // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.

  return {
    paths,
    fallback: false
  };
}
const getStaticProps = async context => {
  try {
    if (!context.params) throw new Error();
    const name = context.params.name;
    if (!name) throw new Error();
    const res = await (0,_resources_Cards__WEBPACK_IMPORTED_MODULE_3__.getCard)(name);
    if (res.error) throw new Error();
    return {
      props: {
        card: res.card
      },
      revalidate: 3600 * 4
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }
};
/* harmony default export */ __webpack_exports__["default"] = (CreditCard);

/***/ }),

/***/ "./src/components/CreditCard/CardInformation/CardInsurances/CardInsurances.module.css":
/*!********************************************************************************************!*\
  !*** ./src/components/CreditCard/CardInformation/CardInsurances/CardInsurances.module.css ***!
  \********************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"försäkring": "CardInsurances_f_rs_kring__1FvUU",
	"content": "CardInsurances_content__3vHbf",
	"left": "CardInsurances_left__360hg",
	"right": "CardInsurances_right__2KNHd",
	"good": "CardInsurances_good__1Srwb",
	"bad": "CardInsurances_bad__2jM4e"
};


/***/ }),

/***/ "./src/components/CreditCard/CardInformation/CardRequierments/CardRequirements.module.css":
/*!************************************************************************************************!*\
  !*** ./src/components/CreditCard/CardInformation/CardRequierments/CardRequirements.module.css ***!
  \************************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"krav": "CardRequirements_krav__1ONMR",
	"good": "CardRequirements_good__2iQFA"
};


/***/ }),

/***/ "./src/components/CreditCard/CardInformation/CardText/CardText.module.css":
/*!********************************************************************************!*\
  !*** ./src/components/CreditCard/CardInformation/CardText/CardText.module.css ***!
  \********************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"CardText": "CardText_CardText__1GvId"
};


/***/ }),

/***/ "./src/components/CreditCard/CardInformation/SpecificsTable/SpecificsTable.module.css":
/*!********************************************************************************************!*\
  !*** ./src/components/CreditCard/CardInformation/SpecificsTable/SpecificsTable.module.css ***!
  \********************************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"CardTable": "SpecificsTable_CardTable__2uBEA"
};


/***/ }),

/***/ "./src/components/CreditCard/Header/CardBox/CardBox.module.css":
/*!*********************************************************************!*\
  !*** ./src/components/CreditCard/Header/CardBox/CardBox.module.css ***!
  \*********************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"CardBox": "CardBox_CardBox__3Zapr"
};


/***/ }),

/***/ "./src/components/CreditCard/Header/Header.module.css":
/*!************************************************************!*\
  !*** ./src/components/CreditCard/Header/Header.module.css ***!
  \************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"Header": "Header_Header__Zxqi3"
};


/***/ }),

/***/ "./src/components/CreditCard/Header/TextHeader/TextHeader.module.css":
/*!***************************************************************************!*\
  !*** ./src/components/CreditCard/Header/TextHeader/TextHeader.module.css ***!
  \***************************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"TextHeader": "TextHeader_TextHeader__gRjMu",
	"HeadingTitle": "TextHeader_HeadingTitle__2v45u",
	"moveInRight": "TextHeader_moveInRight__2cbhR",
	"HeadingDescription": "TextHeader_HeadingDescription__1Dr5N",
	"moveInLeft": "TextHeader_moveInLeft__20OQo"
};


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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","vendors-node_modules_next_image_js","src_classes_CreditCard_ts-src_components_Ui_Buttons_ButtonWhite_tsx-src_hoc_Container_Contain-6cadcf"], function() { return __webpack_exec__("./src/pages/kort/[name].tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9DcmVkaXRDYXJkL0NhcmRJbmZvcm1hdGlvbi9DYXJkSW5mb3JtYXRpb24udHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0NyZWRpdENhcmQvQ2FyZEluZm9ybWF0aW9uL0NhcmRJbnN1cmFuY2VzL0NhcmRJbnN1cmFuY2VzLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9DcmVkaXRDYXJkL0NhcmRJbmZvcm1hdGlvbi9DYXJkUmVxdWllcm1lbnRzL0NhcmRSZXF1aWVybWVudHMudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0NyZWRpdENhcmQvQ2FyZEluZm9ybWF0aW9uL0NhcmRUZXh0L0JvbnVzVGV4dC9Cb251c1RleHQudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0NyZWRpdENhcmQvQ2FyZEluZm9ybWF0aW9uL0NhcmRUZXh0L0NhcmRUZXh0LnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9DcmVkaXRDYXJkL0NhcmRJbmZvcm1hdGlvbi9DYXJkVGV4dC9DcmVkaXRUZXh0L0NyZWRpdFRleHQudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0NyZWRpdENhcmQvQ2FyZEluZm9ybWF0aW9uL0NhcmRUZXh0L0luc3VyYW5jZVRleHQvSW5zdXJhbmNlVGV4dC50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvQ3JlZGl0Q2FyZC9DYXJkSW5mb3JtYXRpb24vU3BlY2lmaWNzVGFibGUvU3BlY2lmaWNzVGFibGUudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0NyZWRpdENhcmQvSGVhZGVyL0NhcmRCb3gvQ2FyZEJveC50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvQ3JlZGl0Q2FyZC9IZWFkZXIvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9DcmVkaXRDYXJkL0hlYWRlci9UZXh0SGVhZGVyL1RleHRIZWFkZXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9wYWdlcy9rb3J0L1tuYW1lXS50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvQ3JlZGl0Q2FyZC9DYXJkSW5mb3JtYXRpb24vQ2FyZEluc3VyYW5jZXMvQ2FyZEluc3VyYW5jZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9DcmVkaXRDYXJkL0NhcmRJbmZvcm1hdGlvbi9DYXJkUmVxdWllcm1lbnRzL0NhcmRSZXF1aXJlbWVudHMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9DcmVkaXRDYXJkL0NhcmRJbmZvcm1hdGlvbi9DYXJkVGV4dC9DYXJkVGV4dC5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0NyZWRpdENhcmQvQ2FyZEluZm9ybWF0aW9uL1NwZWNpZmljc1RhYmxlL1NwZWNpZmljc1RhYmxlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvQ3JlZGl0Q2FyZC9IZWFkZXIvQ2FyZEJveC9DYXJkQm94Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvQ3JlZGl0Q2FyZC9IZWFkZXIvSGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvQ3JlZGl0Q2FyZC9IZWFkZXIvVGV4dEhlYWRlci9UZXh0SGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJyZWFjdC1ncmlkLXN5c3RlbVwiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcInJlYWN0LWlzXCIiXSwibmFtZXMiOlsiQ2FyZEluZm9ybWF0aW9uIiwiY3JlZGl0Y2FyZCIsInByb3BlcnRpZXMiLCJmYWN0cyIsImluc3VyYW5jZXMiLCJyZXF1aXJlbWVudHMiLCJDYXJkSW5zdXJhbmNlcyIsInN0eWxlcyIsIm1hcCIsImluc3VyYW5jZSIsInR5cGUiLCJ0ZXh0IiwiQ2FyZFJlcXVpcmVtZW50cyIsInJlcXVpcmVtZW50IiwiQm9udXNUZXh0IiwiYm9udXN0ZXh0IiwiQ2FyZFRleHQiLCJjcmVkaXRUZXh0IiwiaW5zdXJhbmNlVGV4dCIsIkNyZWRpdFRleHQiLCJJbnN1cmFuY2VUZXh0IiwiaW5zdXJhbmNldGV4dCIsIkNhcmRUYWJsZSIsImNhcmRzRmFjdHMiLCJmYWN0IiwidmFsdWUiLCJDYXJkQm94IiwiY2FyZCIsIm5hbWUiLCJpbWciLCJfaWQiLCJIZWFkZXIiLCJSZWFjdCIsImNyZWRpdENhcmQiLCJyZWYiLCJkZXNjcmlwdGlvbiIsIlRleHRIZWFkZXIiLCJjYXJkTmFtZSIsImNhcmREZXNjcmlwdGlvbiIsIkNyZWRpdENhcmQiLCJoZWFkZXJSZWYiLCJ1c2VSZWYiLCJDcmVkaXRjYXJkIiwiZ2V0U3RhdGljUGF0aHMiLCJyZXMiLCJnZXRDYXJkcyIsImNhcmRzIiwiRXJyb3IiLCJwYXRocyIsInBhcmFtcyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwiZ2V0Q2FyZCIsImVycm9yIiwicHJvcHMiLCJyZXZhbGlkYXRlIiwicmVkaXJlY3QiLCJkZXN0aW5hdGlvbiIsInBlcm1hbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFNQSxNQUFNQSxlQUFnRCxHQUFHLENBQUM7QUFBQ0M7QUFBRCxDQUFELEtBQWdDO0FBQ3JGLFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNILE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsa0RBQUQ7QUFBSyxNQUFFLEVBQUUsRUFBVDtBQUFhLE1BQUUsRUFBRSxDQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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QTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtEOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHFFOzs7Ozs7Ozs7OztBQ0FBLDBFOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDIiwiZmlsZSI6InBhZ2VzL2tvcnQvW25hbWVdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi8uLi9ob2MvQ29udGFpbmVyL0NvbnRhaW5lcic7XHJcbmltcG9ydCB7IFJvdywgQ29sIH0gZnJvbSAncmVhY3QtZ3JpZC1zeXN0ZW0nO1xyXG5pbXBvcnQgU3BlY2lmaWNzVGFibGUgZnJvbSAnLi9TcGVjaWZpY3NUYWJsZS9TcGVjaWZpY3NUYWJsZSc7XHJcbmltcG9ydCBDYXJkSW5zdXJhbmNlcyBmcm9tICcuL0NhcmRJbnN1cmFuY2VzL0NhcmRJbnN1cmFuY2VzJztcclxuaW1wb3J0IENhcmRSZXF1aXJlbWVudHMgZnJvbSAnLi9DYXJkUmVxdWllcm1lbnRzL0NhcmRSZXF1aWVybWVudHMnO1xyXG5pbXBvcnQgeyBDcmVkaXRDYXJkIH0gZnJvbSAnLi4vLi4vLi4vY2xhc3Nlcy9DcmVkaXRDYXJkJztcclxuaW1wb3J0IENhcmRUZXh0IGZyb20gJy4vQ2FyZFRleHQvQ2FyZFRleHQnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIGNyZWRpdGNhcmQgOiBDcmVkaXRDYXJkXHJcbn1cclxuXHJcbmNvbnN0IENhcmRJbmZvcm1hdGlvbiA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7Y3JlZGl0Y2FyZH0pIDogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sIG1kPXsxMn0gbGc9ezZ9PlxyXG4gICAgICAgICAgICAgICAgPFNwZWNpZmljc1RhYmxlIGNhcmRzRmFjdHM9e2NyZWRpdGNhcmQucHJvcGVydGllcy5mYWN0c30gLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgPENvbCBtZD17MTJ9IGxnPXs2fT5cclxuICAgICAgICAgICAgICAgIDxDYXJkSW5zdXJhbmNlcyBpbnN1cmFuY2VzPXtjcmVkaXRjYXJkLnByb3BlcnRpZXMuaW5zdXJhbmNlc30gLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICA8Q29sPlxyXG4gICAgICAgICAgICAgICAgPENhcmRSZXF1aXJlbWVudHMgcmVxdWlyZW1lbnRzPXtjcmVkaXRjYXJkLnByb3BlcnRpZXMucmVxdWlyZW1lbnRzfSAvPlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8Q2FyZFRleHQgY3JlZGl0Y2FyZD17Y3JlZGl0Y2FyZC5wcm9wZXJ0aWVzfSAvPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkSW5mb3JtYXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NhcmRJbnN1cmFuY2VzLm1vZHVsZS5jc3MnXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgaW5zdXJhbmNlcyA6IHtfaWQ/OiBudW1iZXIsIHRleHQ6IHN0cmluZywgdHlwZTogc3RyaW5nIH1bXTtcclxufVxyXG5cclxuY29uc3QgQ2FyZEluc3VyYW5jZXMgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoe2luc3VyYW5jZXN9KSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mw7Zyc8Oka3Jpbmd9PlxyXG4gICAgICAgICAgICA8aDE+RsO2cnPDpGtyaW5nYXI8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+SW5nw6VyPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbnN1cmFuY2VzLm1hcChpbnN1cmFuY2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW5zdXJhbmNlLnR5cGUgPT09ICdHT09EJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpbnN1cmFuY2UudGV4dH0+PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZ29vZH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZWNrLWNpcmNsZVwiPjwvaT48L3NwYW4+e2luc3VyYW5jZS50ZXh0fTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj5JbmfDpXIgaW50ZTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW5zdXJhbmNlcy5tYXAoaW5zdXJhbmNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGluc3VyYW5jZS50eXBlID09PSAnQkFEJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8bGkga2V5PXtpbnN1cmFuY2UudGV4dH0+PHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYmFkfT48aSBjbGFzc05hbWU9XCJmYXMgZmEtdGltZXMtY2lyY2xlXCI+PC9pPjwvc3Bhbj57aW5zdXJhbmNlLnRleHR9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkSW5zdXJhbmNlczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FyZFJlcXVpcmVtZW50cy5tb2R1bGUuY3NzJ1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIHJlcXVpcmVtZW50cyA6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5jb25zdCBDYXJkUmVxdWlyZW1lbnRzIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHtyZXF1aXJlbWVudHN9KSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5rcmF2fT5cclxuICAgICAgICAgICAgPGgxPktyYXY8L2gxPlxyXG4gICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAge3JlcXVpcmVtZW50cy5tYXAocmVxdWlyZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIGtleT17cmVxdWlyZW1lbnR9PjxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmdvb2R9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGVjay1jaXJjbGVcIj48L2k+PC9zcGFuPntyZXF1aXJlbWVudH08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhcmRSZXF1aXJlbWVudHM7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgYm9udXN0ZXh0IDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBCb251c1RleHQgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoe2JvbnVzdGV4dH0pID0+IHtcclxuICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgPGg0PlxyXG4gICAgICBCb251c1xyXG4gICAgPC9oND5cclxuICAgIDxwPlxyXG4gICAgICB7Ym9udXN0ZXh0fVxyXG4gICAgPC9wPlxyXG4gIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvbnVzVGV4dDsiLCJpbXBvcnQgeyBDYXJkIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xhc3Nlcy9DcmVkaXRDYXJkJztcclxuaW1wb3J0IEJvbnVzVGV4dCBmcm9tICcuL0JvbnVzVGV4dC9Cb251c1RleHQnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQ2FyZFRleHQubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBDcmVkaXRUZXh0IGZyb20gJy4vQ3JlZGl0VGV4dC9DcmVkaXRUZXh0JztcclxuaW1wb3J0IEluc3VyYW5jZVRleHQgZnJvbSAnLi9JbnN1cmFuY2VUZXh0L0luc3VyYW5jZVRleHQnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjcmVkaXRjYXJkIDogQ2FyZFxyXG59XHJcblxyXG5jb25zdCBDYXJkVGV4dCA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7Y3JlZGl0Y2FyZH0pID0+IHtcclxuICByZXR1cm4gPGRpdiBpZD17c3R5bGVzLkNhcmRUZXh0fT4gIFxyXG4gICAgICA8Qm9udXNUZXh0IGJvbnVzdGV4dD17Y3JlZGl0Y2FyZC5ib251c3RleHR9IC8+XHJcbiAgICAgIDxDcmVkaXRUZXh0IGNyZWRpdFRleHQ9e2NyZWRpdGNhcmQuY3JlZGl0VGV4dH0gLz5cclxuICAgICAgPEluc3VyYW5jZVRleHQgaW5zdXJhbmNldGV4dD17Y3JlZGl0Y2FyZC5pbnN1cmFuY2VUZXh0fSAvPlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJkVGV4dDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjcmVkaXRUZXh0IDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBDcmVkaXRUZXh0IDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHtjcmVkaXRUZXh0fSkgPT4ge1xyXG4gIHJldHVybiA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxoND5cclxuICAgICAgICBLcmVkaXRcclxuICAgICAgPC9oND5cclxuICAgICAgPHA+XHJcbiAgICAgICAge2NyZWRpdFRleHR9XHJcbiAgICAgIDwvcD5cclxuICA8L1JlYWN0LkZyYWdtZW50PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVkaXRUZXh0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgaW5zdXJhbmNldGV4dCA6IHN0cmluZztcclxufVxyXG5cclxuY29uc3QgSW5zdXJhbmNlVGV4dCA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7aW5zdXJhbmNldGV4dH0pID0+IHtcclxuICByZXR1cm4gPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8aDQ+XHJcbiAgICAgICAgRsO2cnPDpGtyaW5nYXJcclxuICAgICAgPC9oND5cclxuICAgICAgPHA+XHJcbiAgICAgICAge2luc3VyYW5jZXRleHR9XHJcbiAgICAgIDwvcD5cclxuICA8L1JlYWN0LkZyYWdtZW50PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnN1cmFuY2VUZXh0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9TcGVjaWZpY3NUYWJsZS5tb2R1bGUuY3NzJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBjYXJkc0ZhY3RzIDoge19pZD86IG51bWJlciwgdGV4dDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nfVtdO1xyXG59XHJcblxyXG5jb25zdCBDYXJkVGFibGUgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoe2NhcmRzRmFjdHN9KSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5DYXJkVGFibGV9ID5cclxuICAgICAgICA8aDE+RmFrdGEgb20ga29ydGV0PC9oMT5cclxuICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgICAgIHtjYXJkc0ZhY3RzLm1hcChmYWN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPHRyIGtleT17ZmFjdC50ZXh0fT5cclxuICAgICAgICAgICAgICAgICAgICA8dGQ+e2ZhY3QudGV4dH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZD57ZmFjdC52YWx1ZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FyZFRhYmxlOyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9DYXJkQm94Lm1vZHVsZS5jc3MnO1xyXG5cclxuLy8gSW50ZXJmYWNlXHJcbmltcG9ydCB7IENhcmQgYXMgQ3JlZGl0Q2FyZEludGVyZmFjZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jbGFzc2VzL0NyZWRpdENhcmRcIjtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgQnV0dG9uV2hpdGUgZnJvbSAnLi4vLi4vLi4vVWkvQnV0dG9ucy9CdXR0b25XaGl0ZSc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNhcmQgOiBDcmVkaXRDYXJkSW50ZXJmYWNlXHJcbn1cclxuXHJcbmNvbnN0IENhcmRCb3ggOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoe2NhcmR9KSA9PiB7XHJcbiAgIHJldHVybiA8ZGl2IGlkPXtzdHlsZXMuQ2FyZEJveH0+XHJcbiAgICAgICAgPGgyPntjYXJkLm5hbWV9PC9oMj5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICBzcmM9e2NhcmQuaW1nfVxyXG4gICAgICAgIGFsdD17YEluZm9ybWF0aW9uIGtyZWRpdGtvcnQgJHtjYXJkLm5hbWV9YH1cclxuICAgICAgICB3aWR0aD17MjUwfVxyXG4gICAgICAgIGhlaWdodD17MTUwfVxyXG4gICAgICAgIGxheW91dD1cImludHJpbnNpY1wiXHJcbiAgICAgICAgcXVhbGl0eT17MTAwfVxyXG4gICAgICAgIHByaW9yaXR5XHJcbiAgICAgICAgaWQ9e3N0eWxlcy5JbWd9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QnV0dG9uV2hpdGUgdHlwZT1cIm91dGxpbmVcIiB0ZXh0PVwiQW5zw7ZrIG51IVwiIGhyZWY9e2AvUmVkaXJlY3Q/Y2FyZD0ke2NhcmQuX2lkfWB9IC8+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRCb3g7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi8uLi9ob2MvQ29udGFpbmVyL0NvbnRhaW5lcic7XHJcbmltcG9ydCB7IENyZWRpdENhcmQgfSBmcm9tICcuLi8uLi8uLi9jbGFzc2VzL0NyZWRpdENhcmQnO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0LWdyaWQtc3lzdGVtJztcclxuaW1wb3J0IFRleHRIZWFkZXIgZnJvbSAnLi9UZXh0SGVhZGVyL1RleHRIZWFkZXInO1xyXG5pbXBvcnQgQ2FyZEJveCBmcm9tICcuL0NhcmRCb3gvQ2FyZEJveCc7XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBjcmVkaXRDYXJkIDogQ3JlZGl0Q2FyZFxyXG59XHJcblxyXG5jb25zdCBIZWFkZXIgPSBSZWFjdC5mb3J3YXJkUmVmPEhUTUxEaXZFbGVtZW50LCBQcm9wcz4oKHtjcmVkaXRDYXJkfSwgcmVmKSA6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiA8ZGl2IHJlZj17cmVmfSBpZD17c3R5bGVzLkhlYWRlcn0+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8Um93IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbWQ9ezEyfSBsZz17N30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0SGVhZGVyIGNhcmROYW1lPXtjcmVkaXRDYXJkLnByb3BlcnRpZXMubmFtZX0gY2FyZERlc2NyaXB0aW9uPXtjcmVkaXRDYXJkLnByb3BlcnRpZXMuZGVzY3JpcHRpb259IC8+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgPENvbCBtZD17MTJ9IGxnPXs1fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcmRCb3ggY2FyZD17Y3JlZGl0Q2FyZC5wcm9wZXJ0aWVzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RleHRIZWFkZXIubW9kdWxlLmNzcyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgY2FyZE5hbWU6IHN0cmluZztcclxuICAgIGNhcmREZXNjcmlwdGlvbjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBUZXh0SGVhZGVyIDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHtjYXJkTmFtZSwgY2FyZERlc2NyaXB0aW9ufSkgOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBpZD17c3R5bGVzLlRleHRIZWFkZXJ9PlxyXG4gICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5IZWFkaW5nVGl0bGV9PlxyXG4gICAgICAgICAgICA8aDE+e2NhcmROYW1lfTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLkhlYWRpbmdEZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgIDxwPntjYXJkRGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG48L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dEhlYWRlcjsiLCJpbXBvcnQgSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0NyZWRpdENhcmQvSGVhZGVyL0hlYWRlclwiO1xyXG5pbXBvcnQgeyBDcmVkaXRDYXJkIGFzIENyZWRpdGNhcmQsIENhcmQgYXMgQ3JlZGl0Q2FyZEludGVyZmFjZSB9IGZyb20gXCIuLi8uLi9jbGFzc2VzL0NyZWRpdENhcmRcIjtcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgeyBnZXRDYXJkLCBnZXRDYXJkcyB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvQ2FyZHNcIjtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IENhcmRJbmZvcm1hdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NyZWRpdENhcmQvQ2FyZEluZm9ybWF0aW9uL0NhcmRJbmZvcm1hdGlvbic7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIGNhcmQgOiBDcmVkaXRDYXJkSW50ZXJmYWNlXHJcbn1cclxuXHJcbmNvbnN0IENyZWRpdENhcmQgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoe2NhcmR9KSA9PiB7XHJcblxyXG4gIGNvbnN0IGhlYWRlclJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcblxyXG4gIC8vIGZ1bmN0aW9uIGlzSW5WaWV3cG9ydChlbCA6IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgLy8gICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhyZWN0KVxyXG4gIC8vICAgcmV0dXJuIChcclxuICAvLyAgICAgICAtKHJlY3QudG9wKSA+PSB3aW5kb3cuaW5uZXJIZWlnaHQgJiZcclxuICAvLyAgICAgICByZWN0LmxlZnQgPj0gMCAmJlxyXG4gIC8vICAgICAgIHJlY3QucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aClcclxuXHJcbiAgLy8gICApO1xyXG4vLyB9XHJcblxyXG4vLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuLy8gICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbiAoKSB7XHJcbi8vICAgICBpZihoZWFkZXJSZWYuY3VycmVudCkge1xyXG4vLyAgICAgICBjb25zdCBoZWFkZXJWaXNibGUgPSBpc0luVmlld3BvcnQoaGVhZGVyUmVmLmN1cnJlbnQpXHJcbi8vICAgICAgIGNvbnNvbGUubG9nKGhlYWRlclZpc2JsZSlcclxuLy8gICAgIH1cclxuXHJcbi8vICAgfSwge1xyXG4vLyAgICAgICBwYXNzaXZlOiB0cnVlXHJcbi8vICAgfSk7XHJcbi8vIH0sIFtdKVxyXG5cclxuXHJcbiAgY29uc3QgY3JlZGl0Q2FyZCA9IG5ldyBDcmVkaXRjYXJkKGNhcmQpXHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPktyZWRpdGtvcnRza29sbC5jb20gfCB7Y2FyZC5uYW1lfTwvdGl0bGU+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICA8SGVhZGVyIHJlZj17aGVhZGVyUmVmfSBjcmVkaXRDYXJkPXtjcmVkaXRDYXJkfSAvPlxyXG4gICAgPENhcmRJbmZvcm1hdGlvbiBjcmVkaXRjYXJkPXtjcmVkaXRDYXJkfSAvPlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIC8vIENhbGwgYW4gZXh0ZXJuYWwgQVBJIGVuZHBvaW50IHRvIGdldCBwb3N0c1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGdldENhcmRzKClcclxuXHJcbiAgY29uc3QgY2FyZHMgPSByZXMuY2FyZHM7XHJcblxyXG4gIGlmKCFjYXJkcykgdGhyb3cgbmV3IEVycm9yKClcclxuXHJcbiAgLy8gR2V0IHRoZSBwYXRocyB3ZSB3YW50IHRvIHByZS1yZW5kZXIgYmFzZWQgb24gcG9zdHNcclxuICBjb25zdCBwYXRocyA9IGNhcmRzLm1hcCggY2FyZCA9PiAoe1xyXG4gICAgcGFyYW1zOiB7IG5hbWU6IGNhcmQuX2lkIH0sXHJcbiAgfSkpXHJcblxyXG4gIC8vIFdlJ2xsIHByZS1yZW5kZXIgb25seSB0aGVzZSBwYXRocyBhdCBidWlsZCB0aW1lLlxyXG4gIC8vIHsgZmFsbGJhY2s6IGZhbHNlIH0gbWVhbnMgb3RoZXIgcm91dGVzIHNob3VsZCA0MDQuXHJcbiAgcmV0dXJuIHsgcGF0aHMsIGZhbGxiYWNrOiBmYWxzZSB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMgY29udGV4dCA9PiB7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBpZighY29udGV4dC5wYXJhbXMpIHRocm93IG5ldyBFcnJvcigpO1xyXG4gICAgY29uc3QgbmFtZSA9IGNvbnRleHQucGFyYW1zLm5hbWUgYXMgc3RyaW5nXHJcblxyXG4gICAgaWYoIW5hbWUpIHRocm93IG5ldyBFcnJvcigpXHJcbiAgXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRDYXJkKG5hbWUpO1xyXG5cclxuICAgIGlmKHJlcy5lcnJvcikgdGhyb3cgbmV3IEVycm9yKClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wcyA6IHtcclxuICAgICAgICBjYXJkOiByZXMuY2FyZFxyXG4gICAgICB9LFxyXG4gICAgICByZXZhbGlkYXRlOiAzNjAwICogNFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWRpcmVjdCA6IHtcclxuICAgICAgICBkZXN0aW5hdGlvbjogJy8nLFxyXG4gICAgICAgIHBlcm1hbmVudDogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENyZWRpdENhcmQ7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZsO2cnPDpGtyaW5nXCI6IFwiQ2FyZEluc3VyYW5jZXNfZl9yc19rcmluZ19fMUZ2VVVcIixcblx0XCJjb250ZW50XCI6IFwiQ2FyZEluc3VyYW5jZXNfY29udGVudF9fM3ZIYmZcIixcblx0XCJsZWZ0XCI6IFwiQ2FyZEluc3VyYW5jZXNfbGVmdF9fMzYwaGdcIixcblx0XCJyaWdodFwiOiBcIkNhcmRJbnN1cmFuY2VzX3JpZ2h0X18yS05IZFwiLFxuXHRcImdvb2RcIjogXCJDYXJkSW5zdXJhbmNlc19nb29kX18xU3J3YlwiLFxuXHRcImJhZFwiOiBcIkNhcmRJbnN1cmFuY2VzX2JhZF9fMmpNNGVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImtyYXZcIjogXCJDYXJkUmVxdWlyZW1lbnRzX2tyYXZfXzFPTk1SXCIsXG5cdFwiZ29vZFwiOiBcIkNhcmRSZXF1aXJlbWVudHNfZ29vZF9fMmlRRkFcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkNhcmRUZXh0XCI6IFwiQ2FyZFRleHRfQ2FyZFRleHRfXzFHdklkXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJDYXJkVGFibGVcIjogXCJTcGVjaWZpY3NUYWJsZV9DYXJkVGFibGVfXzJ1QkVBXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJDYXJkQm94XCI6IFwiQ2FyZEJveF9DYXJkQm94X18zWmFwclwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiSGVhZGVyXCI6IFwiSGVhZGVyX0hlYWRlcl9fWnhxaTNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlRleHRIZWFkZXJcIjogXCJUZXh0SGVhZGVyX1RleHRIZWFkZXJfX2dSak11XCIsXG5cdFwiSGVhZGluZ1RpdGxlXCI6IFwiVGV4dEhlYWRlcl9IZWFkaW5nVGl0bGVfXzJ2NDV1XCIsXG5cdFwibW92ZUluUmlnaHRcIjogXCJUZXh0SGVhZGVyX21vdmVJblJpZ2h0X18yY2JoUlwiLFxuXHRcIkhlYWRpbmdEZXNjcmlwdGlvblwiOiBcIlRleHRIZWFkZXJfSGVhZGluZ0Rlc2NyaXB0aW9uX18xRHI1TlwiLFxuXHRcIm1vdmVJbkxlZnRcIjogXCJUZXh0SGVhZGVyX21vdmVJbkxlZnRfXzIwT1FvXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ncmlkLXN5c3RlbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=