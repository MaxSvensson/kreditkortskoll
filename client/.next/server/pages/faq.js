(function() {
var exports = {};
exports.id = "pages/faq";
exports.ids = ["pages/faq"];
exports.modules = {

/***/ "./src/components/Faq/Accordion/Accordion.tsx":
/*!****************************************************!*\
  !*** ./src/components/Faq/Accordion/Accordion.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Accordion.module.css */ "./src/components/Faq/Accordion/Accordion.module.css");
/* harmony import */ var _Accordion_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Kreditkortskoll\\Client\\src\\components\\Faq\\Accordion\\Accordion.tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


const QuestionAndAnswer = ({
  faq,
  onClick,
  open
}) => {
  return __jsx("div", {
    onClick: () => onClick(faq.id),
    className: (_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1___default().AccordionItem),
    id: open ? (_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1___default().open) : (_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1___default().close),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 12
    }
  }, __jsx("a", {
    className: (_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1___default().AccordionLink),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, faq.title, __jsx("span", {
    id: (_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1___default().openicon),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "fas fa-plus",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  })), __jsx("span", {
    id: (_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1___default().removeicon),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("i", {
    className: "fas fa-minus",
    id: (_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1___default().remove),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: (_Accordion_module_css__WEBPACK_IMPORTED_MODULE_1___default().answer),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, faq.answer)));
};

/* harmony default export */ __webpack_exports__["default"] = (QuestionAndAnswer);

/***/ }),

/***/ "./src/components/Faq/Content/Content.tsx":
/*!************************************************!*\
  !*** ./src/components/Faq/Content/Content.tsx ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Accordion_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Accordion/Accordion */ "./src/components/Faq/Accordion/Accordion.tsx");
/* harmony import */ var _Content_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Content.module.css */ "./src/components/Faq/Content/Content.module.css");
/* harmony import */ var _Content_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Content_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\Kreditkortskoll\\Client\\src\\components\\Faq\\Content\\Content.tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






const Content = () => {
  const faqs = [{
    id: 1,
    title: 'Vilka förmåner och bonusar ger ett kreditkort?',
    answer: `Alla kort erbjuder olika förmåner och bonusar beroende på utgivaren.

    Det varierar mellan extra försäkringar, bonuspoäng, rabbatter och cashback. Vissa kort kan till och med ge dig både bonuspoäng och flera kostnadsfria extraförsäkringar.
    
    Använd tjänsten Jämför Kreditkort för att se alla olika kort.`
  }, {
    id: 2,
    title: 'How often do you go to the beach',
    answer: 'Answer'
  }, {
    id: 3,
    title: 'How often do you go to the beach',
    answer: 'Answer'
  }, {
    id: 4,
    title: 'How often do you go to the beach',
    answer: 'Answer'
  }, {
    id: 5,
    title: 'How often do you go to the beach',
    answer: 'Answer'
  }, {
    id: 6,
    title: 'How often do you go to the beach',
    answer: 'Answer'
  }, {
    id: 7,
    title: 'How often do you go to the beach',
    answer: 'Answer'
  }, {
    id: 8,
    title: 'How often do you go to the beach',
    answer: 'Answer'
  }, {
    id: 9,
    title: 'How often do you go to the beach',
    answer: 'Answer'
  }, {
    id: 10,
    title: 'How often do you go to the beach',
    answer: 'Answer'
  }];
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();

  const onClick = id => {
    if (id === open) return setOpen(0);
    setOpen(id);
  };

  return __jsx("div", {
    id: (_Content_module_css__WEBPACK_IMPORTED_MODULE_4___default().Content),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 10
    }
  }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Container, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx("div", {
    id: (_Content_module_css__WEBPACK_IMPORTED_MODULE_4___default().list),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, faqs.map(faq => {
    return __jsx(_Accordion_Accordion__WEBPACK_IMPORTED_MODULE_2__.default, {
      onClick: onClick,
      faq: faq,
      open: faq.id === open ? true : false,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 18
      }
    });
  }))), __jsx("div", {
    id: (_Content_module_css__WEBPACK_IMPORTED_MODULE_4___default().imgContainer),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }
  }, __jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
    width: 500,
    height: 700,
    src: "/images/faq.svg",
    id: (_Content_module_css__WEBPACK_IMPORTED_MODULE_4___default().Img),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./src/components/Faq/Header/Header.tsx":
/*!**********************************************!*\
  !*** ./src/components/Faq/Header/Header.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.module.css */ "./src/components/Faq/Header/Header.module.css");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hoc_Container_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hoc/Container/Container */ "./src/hoc/Container/Container.tsx");
/* harmony import */ var _TextHeader_TextHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextHeader/TextHeader */ "./src/components/Faq/Header/TextHeader/TextHeader.tsx");
var _jsxFileName = "D:\\Kreditkortskoll\\Client\\src\\components\\Faq\\Header\\Header.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


 // Components



const Header = () => {
  return __jsx("div", {
    id: (_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().Header),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 12
    }
  }, __jsx(_hoc_Container_Container__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx(_TextHeader_TextHeader__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Faq/Header/TextHeader/TextHeader.tsx":
/*!*************************************************************!*\
  !*** ./src/components/Faq/Header/TextHeader/TextHeader.tsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextHeader.module.css */ "./src/components/Faq/Header/TextHeader/TextHeader.module.css");
/* harmony import */ var _TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Kreditkortskoll\\Client\\src\\components\\Faq\\Header\\TextHeader\\TextHeader.tsx";
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
  }, "Alla kreditkort")));
};

/* harmony default export */ __webpack_exports__["default"] = (TextHeader);

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

/***/ "./src/pages/faq.tsx":
/*!***************************!*\
  !*** ./src/pages/faq.tsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Faq_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Faq/Header/Header */ "./src/components/Faq/Header/Header.tsx");
/* harmony import */ var _components_Faq_Content_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Faq/Content/Content */ "./src/components/Faq/Content/Content.tsx");
var _jsxFileName = "D:\\Kreditkortskoll\\Client\\src\\pages\\faq.tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const Faq = () => {
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  }, __jsx(_components_Faq_Header_Header__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), __jsx(_components_Faq_Content_Content__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Faq);

/***/ }),

/***/ "./src/components/Faq/Accordion/Accordion.module.css":
/*!***********************************************************!*\
  !*** ./src/components/Faq/Accordion/Accordion.module.css ***!
  \***********************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"AccordionItem": "Accordion_AccordionItem__2W-qI",
	"AccordionLink": "Accordion_AccordionLink__2wMCu",
	"removeicon": "Accordion_removeicon__2MC5X",
	"open": "Accordion_open__1zIQn",
	"openicon": "Accordion_openicon__xLYyp",
	"answer": "Accordion_answer__2BlSV"
};


/***/ }),

/***/ "./src/components/Faq/Content/Content.module.css":
/*!*******************************************************!*\
  !*** ./src/components/Faq/Content/Content.module.css ***!
  \*******************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"Content": "Content_Content__2BEkA",
	"imgContainer": "Content_imgContainer__1qOmF"
};


/***/ }),

/***/ "./src/components/Faq/Header/Header.module.css":
/*!*****************************************************!*\
  !*** ./src/components/Faq/Header/Header.module.css ***!
  \*****************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"Header": "Header_Header__-VxiE"
};


/***/ }),

/***/ "./src/components/Faq/Header/TextHeader/TextHeader.module.css":
/*!********************************************************************!*\
  !*** ./src/components/Faq/Header/TextHeader/TextHeader.module.css ***!
  \********************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"TextHeader": "TextHeader_TextHeader__11Jlt",
	"HeadingTitle": "TextHeader_HeadingTitle__H-7Gy",
	"moveInRight": "TextHeader_moveInRight__H9ylq",
	"moveInLeft": "TextHeader_moveInLeft__1koC1"
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

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_interopRequireDefault_js-node_modules_next_dist_cl-3e6c6e","vendors-node_modules_next_image_js"], function() { return __webpack_exec__("./src/pages/faq.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9GYXEvQWNjb3JkaW9uL0FjY29yZGlvbi50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvRmFxL0NvbnRlbnQvQ29udGVudC50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvRmFxL0hlYWRlci9IZWFkZXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0ZhcS9IZWFkZXIvVGV4dEhlYWRlci9UZXh0SGVhZGVyLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvaG9jL0NvbnRhaW5lci9Db250YWluZXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9wYWdlcy9mYXEudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0ZhcS9BY2NvcmRpb24vQWNjb3JkaW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvRmFxL0NvbnRlbnQvQ29udGVudC5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0ZhcS9IZWFkZXIvSGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvRmFxL0hlYWRlci9UZXh0SGVhZGVyL1RleHRIZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvaG9jL0NvbnRhaW5lci9Db250YWluZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwicmVhY3QtZ3JpZC1zeXN0ZW1cIiJdLCJuYW1lcyI6WyJRdWVzdGlvbkFuZEFuc3dlciIsImZhcSIsIm9uQ2xpY2siLCJvcGVuIiwiaWQiLCJzdHlsZXMiLCJ0aXRsZSIsImFuc3dlciIsIkNvbnRlbnQiLCJmYXFzIiwic2V0T3BlbiIsInVzZVN0YXRlIiwibWFwIiwiSGVhZGVyIiwiVGV4dEhlYWRlciIsIkNvbnRhaW5lciIsInByb3BzIiwiY2hpbGRyZW4iLCJGYXEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQWFBLE1BQU1BLGlCQUFtQyxHQUFHLENBQUM7QUFBQ0MsS0FBRDtBQUFNQyxTQUFOO0FBQWVDO0FBQWYsQ0FBRCxLQUEwQjtBQUNsRSxTQUFPO0FBQUssV0FBTyxFQUFFLE1BQU1ELE9BQU8sQ0FBQ0QsR0FBRyxDQUFDRyxFQUFMLENBQTNCO0FBQXFDLGFBQVMsRUFBRUMsNEVBQWhEO0FBQXNFLE1BQUUsRUFBRUYsSUFBSSxHQUFHRSxtRUFBSCxHQUFpQkEsb0VBQS9GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSDtBQUFHLGFBQVMsRUFBRUEsNEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNLSixHQUFHLENBQUNLLEtBRFQsRUFFSTtBQUFNLE1BQUUsRUFBRUQsdUVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLGFB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Q0E7O0FBR0EsTUFBTUMsU0FBb0IsR0FBSUMsS0FBRCxJQUFXO0FBQ3BDLFNBQU87QUFBSyxNQUFFLEVBQUVYLHdFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQVcsS0FBSyxDQUFDQyxRQUROLENBQVA7QUFHSCxDQUpEOztBQU1BLCtEQUFlRixTQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBOztBQUVBLE1BQU1HLEdBQUcsR0FBRyxNQUFNO0FBQ2hCLFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNMLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURLLEVBRUwsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkssQ0FBUDtBQUlELENBTEQ7O0FBT0EsK0RBQWVBLEdBQWYsRTs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQSwrRDs7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7QUNBQSwwRTs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSwrQyIsImZpbGUiOiJwYWdlcy9mYXEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4vQWNjb3JkaW9uLm1vZHVsZS5jc3MnO1xyXG5cclxuaW50ZXJmYWNlIEZhcSB7XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGFuc3dlcjogc3RyaW5nO1xyXG59XHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBmYXE6IEZhcTtcclxuICAgIG9wZW46IGJvb2xlYW47XHJcbiAgICBvbkNsaWNrOiAoaWQ6IG51bWJlcikgPT4gYW55XHJcbn1cclxuXHJcbmNvbnN0IFF1ZXN0aW9uQW5kQW5zd2VyIDogUmVhY3QuRkM8UHJvcHM+ID0gKHtmYXEsIG9uQ2xpY2ssIG9wZW59KSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGZhcS5pZCl9IGNsYXNzTmFtZT17c3R5bGVzLkFjY29yZGlvbkl0ZW19IGlkPXtvcGVuID8gc3R5bGVzLm9wZW4gOiBzdHlsZXMuY2xvc2V9PlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLkFjY29yZGlvbkxpbmt9PlxyXG4gICAgICAgICAgICB7ZmFxLnRpdGxlfVxyXG4gICAgICAgICAgICA8c3BhbiBpZD17c3R5bGVzLm9wZW5pY29ufT5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wbHVzXCI+PC9pPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGlkPXtzdHlsZXMucmVtb3ZlaWNvbn0+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbWludXNcIiBpZD17c3R5bGVzLnJlbW92ZX0+PC9pPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYW5zd2VyfT5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICB7ZmFxLmFuc3dlcn1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFF1ZXN0aW9uQW5kQW5zd2VyOyIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ncmlkLXN5c3RlbSc7XHJcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnLi4vQWNjb3JkaW9uL0FjY29yZGlvbic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250ZW50Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmNvbnN0IENvbnRlbnQgOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICBjb25zdCBmYXFzID0gW3tcclxuICAgIGlkOiAxLCBcclxuICAgIHRpdGxlOiAnVmlsa2EgZsO2cm3DpW5lciBvY2ggYm9udXNhciBnZXIgZXR0IGtyZWRpdGtvcnQ/JyxcclxuICAgIGFuc3dlcjogYEFsbGEga29ydCBlcmJqdWRlciBvbGlrYSBmw7ZybcOlbmVyIG9jaCBib251c2FyIGJlcm9lbmRlIHDDpSB1dGdpdmFyZW4uXHJcblxyXG4gICAgRGV0IHZhcmllcmFyIG1lbGxhbiBleHRyYSBmw7Zyc8Oka3JpbmdhciwgYm9udXNwb8OkbmcsIHJhYmJhdHRlciBvY2ggY2FzaGJhY2suIFZpc3NhIGtvcnQga2FuIHRpbGwgb2NoIG1lZCBnZSBkaWcgYsOlZGUgYm9udXNwb8Okbmcgb2NoIGZsZXJhIGtvc3RuYWRzZnJpYSBleHRyYWbDtnJzw6RrcmluZ2FyLlxyXG4gICAgXHJcbiAgICBBbnbDpG5kIHRqw6Ruc3RlbiBKw6RtZsO2ciBLcmVkaXRrb3J0IGbDtnIgYXR0IHNlIGFsbGEgb2xpa2Ega29ydC5gXHJcbiAgfSwge1xyXG4gICAgaWQ6IDIsIFxyXG4gICAgdGl0bGU6ICdIb3cgb2Z0ZW4gZG8geW91IGdvIHRvIHRoZSBiZWFjaCcsXHJcbiAgICBhbnN3ZXI6ICdBbnN3ZXInXHJcbiAgfSwge1xyXG4gICAgaWQ6IDMsIFxyXG4gICAgdGl0bGU6ICdIb3cgb2Z0ZW4gZG8geW91IGdvIHRvIHRoZSBiZWFjaCcsXHJcbiAgICBhbnN3ZXI6ICdBbnN3ZXInXHJcbiAgfSwge1xyXG4gICAgaWQ6IDQsIFxyXG4gICAgdGl0bGU6ICdIb3cgb2Z0ZW4gZG8geW91IGdvIHRvIHRoZSBiZWFjaCcsXHJcbiAgICBhbnN3ZXI6ICdBbnN3ZXInXHJcbiAgfSwge1xyXG4gICAgaWQ6IDUsIFxyXG4gICAgdGl0bGU6ICdIb3cgb2Z0ZW4gZG8geW91IGdvIHRvIHRoZSBiZWFjaCcsXHJcbiAgICBhbnN3ZXI6ICdBbnN3ZXInXHJcbiAgfSwge1xyXG4gICAgaWQ6IDYsIFxyXG4gICAgdGl0bGU6ICdIb3cgb2Z0ZW4gZG8geW91IGdvIHRvIHRoZSBiZWFjaCcsXHJcbiAgICBhbnN3ZXI6ICdBbnN3ZXInXHJcbiAgfSwge1xyXG4gICAgaWQ6IDcsIFxyXG4gICAgdGl0bGU6ICdIb3cgb2Z0ZW4gZG8geW91IGdvIHRvIHRoZSBiZWFjaCcsXHJcbiAgICBhbnN3ZXI6ICdBbnN3ZXInXHJcbiAgfSwge1xyXG4gICAgaWQ6IDgsIFxyXG4gICAgdGl0bGU6ICdIb3cgb2Z0ZW4gZG8geW91IGdvIHRvIHRoZSBiZWFjaCcsXHJcbiAgICBhbnN3ZXI6ICdBbnN3ZXInXHJcbiAgfSwge1xyXG4gICAgaWQ6IDksIFxyXG4gICAgdGl0bGU6ICdIb3cgb2Z0ZW4gZG8geW91IGdvIHRvIHRoZSBiZWFjaCcsXHJcbiAgICBhbnN3ZXI6ICdBbnN3ZXInXHJcbiAgfSwge1xyXG4gICAgaWQ6IDEwLCBcclxuICAgIHRpdGxlOiAnSG93IG9mdGVuIGRvIHlvdSBnbyB0byB0aGUgYmVhY2gnLFxyXG4gICAgYW5zd2VyOiAnQW5zd2VyJ1xyXG4gIH1dO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlPG51bWJlcj4oKVxyXG5cclxuICBjb25zdCBvbkNsaWNrID0gKGlkIDogbnVtYmVyKSA9PiB7XHJcbiAgICBpZihpZCA9PT0gb3BlbikgcmV0dXJuIHNldE9wZW4oMClcclxuICAgIHNldE9wZW4oaWQpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gPGRpdiBpZD17c3R5bGVzLkNvbnRlbnR9PlxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPGRpdiBpZD17c3R5bGVzLmxpc3R9PlxyXG4gICAgICAgIHtmYXFzLm1hcChmYXEgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxBY2NvcmRpb24gb25DbGljaz17b25DbGlja30gZmFxPXtmYXF9IG9wZW49e2ZhcS5pZCA9PT0gb3BlbiA/IHRydWUgOiBmYWxzZX0gLz4gICAgIFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8ZGl2IGlkPXtzdHlsZXMuaW1nQ29udGFpbmVyfT5cclxuICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezcwMH1cclxuICAgICAgICAgIHNyYz1cIi9pbWFnZXMvZmFxLnN2Z1wiXHJcbiAgICAgICAgICBpZD17c3R5bGVzLkltZ31cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGVudCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vLi4vaG9jL0NvbnRhaW5lci9Db250YWluZXInO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgVGV4dEhlYWRlciBmcm9tICcuL1RleHRIZWFkZXIvVGV4dEhlYWRlcic7XHJcblxyXG5jb25zdCBIZWFkZXIgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICgpIDogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5IZWFkZXJ9PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPFRleHRIZWFkZXIgLz4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0SGVhZGVyLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgVGV4dEhlYWRlciA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCkgOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBpZD17c3R5bGVzLlRleHRIZWFkZXJ9PlxyXG4gICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5IZWFkaW5nVGl0bGV9PlxyXG4gICAgICAgICAgICA8aDE+QWxsYSBrcmVkaXRrb3J0PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGRpdiBpZD17c3R5bGVzLkhlYWRpbmdEZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEZWJpdGlzIHJlcGVsbGF0IG5vbiByZWljaWVuZGlzIGRlc2VydW50IGRpZ25pc3NpbW9zIGF0IHN1c2NpcGl0IHF1YXMgc2FlcGUgYmxhbmRpdGlpcywgb2JjYWVjYXRpIGV2ZW5pZXQgcmF0aW9uZSBhIG1vZGkgY29uc2VjdGV0dXIgc2l0IGVvcyBlYXF1ZSBkb2xvcmlidXMgZG9sb3JlPzwvcD5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbjwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0SGVhZGVyOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250YWluZXIubW9kdWxlLmNzcydcclxuXHJcblxyXG5jb25zdCBDb250YWluZXIgOiBSZWFjdC5GQyA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5Db250YWluZXJ9PlxyXG4gICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyOyIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9GYXEvSGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCBDb250ZW50IGZyb20gJy4uL2NvbXBvbmVudHMvRmFxL0NvbnRlbnQvQ29udGVudCc7XHJcblxyXG5jb25zdCBGYXEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICA8SGVhZGVyIC8+XHJcbiAgICA8Q29udGVudCAvPlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYXE7IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQWNjb3JkaW9uSXRlbVwiOiBcIkFjY29yZGlvbl9BY2NvcmRpb25JdGVtX18yVy1xSVwiLFxuXHRcIkFjY29yZGlvbkxpbmtcIjogXCJBY2NvcmRpb25fQWNjb3JkaW9uTGlua19fMndNQ3VcIixcblx0XCJyZW1vdmVpY29uXCI6IFwiQWNjb3JkaW9uX3JlbW92ZWljb25fXzJNQzVYXCIsXG5cdFwib3BlblwiOiBcIkFjY29yZGlvbl9vcGVuX18xeklRblwiLFxuXHRcIm9wZW5pY29uXCI6IFwiQWNjb3JkaW9uX29wZW5pY29uX194TFl5cFwiLFxuXHRcImFuc3dlclwiOiBcIkFjY29yZGlvbl9hbnN3ZXJfXzJCbFNWXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJDb250ZW50XCI6IFwiQ29udGVudF9Db250ZW50X18yQkVrQVwiLFxuXHRcImltZ0NvbnRhaW5lclwiOiBcIkNvbnRlbnRfaW1nQ29udGFpbmVyX18xcU9tRlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiSGVhZGVyXCI6IFwiSGVhZGVyX0hlYWRlcl9fLVZ4aUVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlRleHRIZWFkZXJcIjogXCJUZXh0SGVhZGVyX1RleHRIZWFkZXJfXzExSmx0XCIsXG5cdFwiSGVhZGluZ1RpdGxlXCI6IFwiVGV4dEhlYWRlcl9IZWFkaW5nVGl0bGVfX0gtN0d5XCIsXG5cdFwibW92ZUluUmlnaHRcIjogXCJUZXh0SGVhZGVyX21vdmVJblJpZ2h0X19IOXlscVwiLFxuXHRcIm1vdmVJbkxlZnRcIjogXCJUZXh0SGVhZGVyX21vdmVJbkxlZnRfXzFrb0MxXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJDb250YWluZXJcIjogXCJDb250YWluZXJfQ29udGFpbmVyX18yRmlQVFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3RvLWJhc2UtNjQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZ3JpZC1zeXN0ZW1cIik7OyJdLCJzb3VyY2VSb290IjoiIn0=