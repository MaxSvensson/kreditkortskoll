(function() {
var exports = {};
exports.id = 373;
exports.ids = [373];
exports.modules = {

/***/ 5550:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Header_Header; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/Faq/Header/Header.module.css
var Header_module = __webpack_require__(7056);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./src/hoc/Container/Container.tsx
var Container = __webpack_require__(8032);
// EXTERNAL MODULE: ./src/components/Faq/Header/TextHeader/TextHeader.module.css
var TextHeader_module = __webpack_require__(2170);
var TextHeader_module_default = /*#__PURE__*/__webpack_require__.n(TextHeader_module);
;// CONCATENATED MODULE: ./src/components/Faq/Header/TextHeader/TextHeader.tsx
var __jsx = (external_react_default()).createElement;



const TextHeader = () => {
  return __jsx("div", {
    id: (TextHeader_module_default()).TextHeader
  }, __jsx("div", {
    id: (TextHeader_module_default()).HeadingTitle
  }, __jsx("h1", null, "Alla kreditkort")));
};

/* harmony default export */ var TextHeader_TextHeader = (TextHeader);
;// CONCATENATED MODULE: ./src/components/Faq/Header/Header.tsx
var Header_jsx = (external_react_default()).createElement;


 // Components



const Header = () => {
  return Header_jsx("div", {
    id: (Header_module_default()).Header
  }, Header_jsx(Container/* default */.Z, null, Header_jsx(TextHeader_TextHeader, null)));
};

/* harmony default export */ var Header_Header = (Header);

/***/ }),

/***/ 3337:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes_CreditCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9389);
/* harmony import */ var _components_Faq_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5550);
/* harmony import */ var _resources_Cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1467);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Ui_DisplayCards_DisplayCards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3591);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





 // import Filter from '../components/Cards/Filter/Filter';

class IndexPage extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    const cards = this.props.cards.map(card => new _classes_CreditCard__WEBPACK_IMPORTED_MODULE_5__/* .CreditCard */ .a(card));
    return __jsx("div", null, __jsx((next_head__WEBPACK_IMPORTED_MODULE_3___default()), null, __jsx("title", null, "Kreditkortskoll.com | Alla kort"), __jsx("meta", {
      name: "description",
      content: "Kreditkortskoll.com j\xE4mf\xF6r olika kreditkort f\xF6r att hitta det b\xE4sta kredikortet f\xF6r dig. J\xE4mf\xF6r kreditkort som Remember flex och Norwegian"
    }), __jsx("meta", {
      name: "robots",
      content: "index, follow"
    })), __jsx(_components_Faq_Header_Header__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, null), __jsx("main", null, __jsx(_components_Ui_DisplayCards_DisplayCards__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      creditCards: cards
    })));
  }

}

async function getStaticProps() {
  try {
    const promises = [(0,_resources_Cards__WEBPACK_IMPORTED_MODULE_2__/* .getCards */ .vm)(), (0,_resources_Cards__WEBPACK_IMPORTED_MODULE_2__/* .getBestCard */ .ZL)()];
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

/***/ 7056:
/***/ (function(module) {

// Exports
module.exports = {
	"Header": "Header_Header__-VxiE"
};


/***/ }),

/***/ 2170:
/***/ (function(module) {

// Exports
module.exports = {
	"TextHeader": "TextHeader_TextHeader__11Jlt",
	"HeadingTitle": "TextHeader_HeadingTitle__H-7Gy",
	"moveInRight": "TextHeader_moveInRight__H9ylq",
	"moveInLeft": "TextHeader_moveInLeft__1koC1"
};


/***/ }),

/***/ 7836:
/***/ (function(module) {

"use strict";
module.exports = require("@tippyjs/react");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 9892:
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
var __webpack_exports__ = __webpack_require__.X(0, [75,664,467,788], function() { return __webpack_exec__(3337); });
module.exports = __webpack_exports__;

})();