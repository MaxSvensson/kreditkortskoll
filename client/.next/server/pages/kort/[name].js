(function() {
var exports = {};
exports.id = 367;
exports.ids = [367];
exports.modules = {

/***/ 9389:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ CreditCard; }
/* harmony export */ });
class CreditCard {
  constructor(properties) {
    this.properties = properties;
  }

  addToCompare() {}

  checkIfCardCompare() {}

}

/***/ }),

/***/ 5293:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Buttons_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7259);
/* harmony import */ var _Buttons_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Buttons_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const ButtonWhite = props => {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
    href: props.href ? props.href : '#'
  }, __jsx("a", {
    id: (_Buttons_module_css__WEBPACK_IMPORTED_MODULE_2___default().ButtonWhite),
    onClick: props.onClick,
    className: props.className
  }, props.text));
};

/* harmony default export */ __webpack_exports__["Z"] = (ButtonWhite);

/***/ }),

/***/ 8032:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Container_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2403);
/* harmony import */ var _Container_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Container_module_css__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const Container = props => {
  return __jsx("div", {
    id: (_Container_module_css__WEBPACK_IMPORTED_MODULE_1___default().Container)
  }, props.children);
};

/* harmony default export */ __webpack_exports__["Z"] = (Container);

/***/ }),

/***/ 4024:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _name_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/CreditCard/Header/Header.module.css
var Header_module = __webpack_require__(7335);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./src/hoc/Container/Container.tsx
var Container = __webpack_require__(8032);
// EXTERNAL MODULE: external "react-grid-system"
var external_react_grid_system_ = __webpack_require__(7865);
// EXTERNAL MODULE: ./src/components/CreditCard/Header/TextHeader/TextHeader.module.css
var TextHeader_module = __webpack_require__(8401);
var TextHeader_module_default = /*#__PURE__*/__webpack_require__.n(TextHeader_module);
;// CONCATENATED MODULE: ./src/components/CreditCard/Header/TextHeader/TextHeader.tsx
var __jsx = (external_react_default()).createElement;



const TextHeader = ({
  cardName,
  cardDescription
}) => {
  return __jsx("div", {
    id: (TextHeader_module_default()).TextHeader
  }, __jsx("div", {
    id: (TextHeader_module_default()).HeadingTitle
  }, __jsx("h1", null, cardName)), __jsx("div", {
    id: (TextHeader_module_default()).HeadingDescription
  }, __jsx("p", null, cardDescription)));
};

/* harmony default export */ var TextHeader_TextHeader = (TextHeader);
// EXTERNAL MODULE: ./src/components/CreditCard/Header/CardBox/CardBox.module.css
var CardBox_module = __webpack_require__(3555);
var CardBox_module_default = /*#__PURE__*/__webpack_require__.n(CardBox_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/components/Ui/Buttons/ButtonWhite.tsx
var ButtonWhite = __webpack_require__(5293);
;// CONCATENATED MODULE: ./src/components/CreditCard/Header/CardBox/CardBox.tsx

var CardBox_jsx = (external_react_default()).createElement;
 // Interface

// Components



const CardBox = ({
  card
}) => {
  return CardBox_jsx("div", {
    id: (CardBox_module_default()).CardBox
  }, CardBox_jsx("h2", null, card.name), CardBox_jsx(next_image.default, {
    src: card.img,
    alt: `Information kreditkort ${card.name}`,
    width: 250,
    height: 150,
    layout: "intrinsic",
    quality: 100,
    priority: true,
    id: (CardBox_module_default()).Img
  }), CardBox_jsx(ButtonWhite/* default */.Z, {
    text: "Ans\xF6k nu!",
    href: `/Redirect?card=${card._id}`
  }));
};

/* harmony default export */ var CardBox_CardBox = (CardBox);
;// CONCATENATED MODULE: ./src/components/CreditCard/Header/Header.tsx
var Header_jsx = (external_react_default()).createElement;



// Components



const Header = /*#__PURE__*/external_react_default().forwardRef(({
  creditCard
}, ref) => {
  return Header_jsx("div", {
    ref: ref,
    id: (Header_module_default()).Header
  }, Header_jsx(Container/* default */.Z, null, Header_jsx(external_react_grid_system_.Row, {
    justify: "center",
    align: "center"
  }, Header_jsx(external_react_grid_system_.Col, {
    md: 12,
    lg: 7
  }, Header_jsx(TextHeader_TextHeader, {
    cardName: creditCard.properties.name,
    cardDescription: creditCard.properties.description
  })), Header_jsx(external_react_grid_system_.Col, {
    md: 12,
    lg: 5
  }, Header_jsx(CardBox_CardBox, {
    card: creditCard.properties
  })))));
});
/* harmony default export */ var Header_Header = (Header);
// EXTERNAL MODULE: ./src/classes/CreditCard.ts
var CreditCard = __webpack_require__(9389);
// EXTERNAL MODULE: ./src/resources/Cards.ts
var Cards = __webpack_require__(1467);
// EXTERNAL MODULE: ./src/components/CreditCard/CardInformation/SpecificsTable/SpecificsTable.module.css
var SpecificsTable_module = __webpack_require__(1519);
var SpecificsTable_module_default = /*#__PURE__*/__webpack_require__.n(SpecificsTable_module);
;// CONCATENATED MODULE: ./src/components/CreditCard/CardInformation/SpecificsTable/SpecificsTable.tsx
var SpecificsTable_jsx = (external_react_default()).createElement;



const CardTable = ({
  cardsFacts
}) => {
  return SpecificsTable_jsx("div", {
    className: (SpecificsTable_module_default()).CardTable
  }, SpecificsTable_jsx("h1", null, "Fakta om kortet"), SpecificsTable_jsx("table", null, SpecificsTable_jsx("tbody", null, cardsFacts.map(fact => {
    return SpecificsTable_jsx("tr", {
      key: fact.text
    }, SpecificsTable_jsx("td", null, fact.text), SpecificsTable_jsx("td", null, fact.value));
  }))));
};

/* harmony default export */ var SpecificsTable = (CardTable);
// EXTERNAL MODULE: ./src/components/CreditCard/CardInformation/CardInsurances/CardInsurances.module.css
var CardInsurances_module = __webpack_require__(4465);
var CardInsurances_module_default = /*#__PURE__*/__webpack_require__.n(CardInsurances_module);
;// CONCATENATED MODULE: ./src/components/CreditCard/CardInformation/CardInsurances/CardInsurances.tsx
var CardInsurances_jsx = (external_react_default()).createElement;



const CardInsurances = ({
  insurances
}) => {
  return CardInsurances_jsx("div", {
    className: (CardInsurances_module_default())["försäkring"]
  }, CardInsurances_jsx("h1", null, "F\xF6rs\xE4kringar"), CardInsurances_jsx("div", {
    className: (CardInsurances_module_default()).content
  }, CardInsurances_jsx("div", {
    className: (CardInsurances_module_default()).left
  }, CardInsurances_jsx("h2", null, "Ing\xE5r"), CardInsurances_jsx("ul", null, insurances.map(insurance => {
    if (insurance.type === 'GOOD') {
      return CardInsurances_jsx("li", {
        key: insurance.text
      }, CardInsurances_jsx("span", {
        className: (CardInsurances_module_default()).good
      }, CardInsurances_jsx("i", {
        className: "fas fa-check-circle"
      })), insurance.text);
    }
  }))), CardInsurances_jsx("div", {
    className: (CardInsurances_module_default()).right
  }, CardInsurances_jsx("h2", null, "Ing\xE5r inte"), CardInsurances_jsx("ul", null, insurances.map(insurance => {
    if (insurance.type === 'BAD') {
      return CardInsurances_jsx("li", {
        key: insurance.text
      }, CardInsurances_jsx("span", {
        className: (CardInsurances_module_default()).bad
      }, CardInsurances_jsx("i", {
        className: "fas fa-times-circle"
      })), insurance.text);
    }
  })))));
};

/* harmony default export */ var CardInsurances_CardInsurances = (CardInsurances);
// EXTERNAL MODULE: ./src/components/CreditCard/CardInformation/CardRequierments/CardRequirements.module.css
var CardRequirements_module = __webpack_require__(6506);
var CardRequirements_module_default = /*#__PURE__*/__webpack_require__.n(CardRequirements_module);
;// CONCATENATED MODULE: ./src/components/CreditCard/CardInformation/CardRequierments/CardRequierments.tsx
var CardRequierments_jsx = (external_react_default()).createElement;



const CardRequirements = ({
  requirements
}) => {
  return CardRequierments_jsx("div", {
    className: (CardRequirements_module_default()).krav
  }, CardRequierments_jsx("h1", null, "Krav"), CardRequierments_jsx("ul", null, requirements.map(requirement => {
    return CardRequierments_jsx("li", {
      key: requirement
    }, CardRequierments_jsx("span", {
      className: (CardRequirements_module_default()).good
    }, CardRequierments_jsx("i", {
      className: "fas fa-check-circle"
    })), requirement);
  })));
};

/* harmony default export */ var CardRequierments = (CardRequirements);
;// CONCATENATED MODULE: ./src/components/CreditCard/CardInformation/CardText/BonusText/BonusText.tsx
var BonusText_jsx = (external_react_default()).createElement;


const BonusText = ({
  bonustext
}) => {
  return BonusText_jsx((external_react_default()).Fragment, null, BonusText_jsx("h4", null, "Bonus"), BonusText_jsx("p", null, bonustext));
};

/* harmony default export */ var BonusText_BonusText = (BonusText);
// EXTERNAL MODULE: ./src/components/CreditCard/CardInformation/CardText/CardText.module.css
var CardText_module = __webpack_require__(2175);
var CardText_module_default = /*#__PURE__*/__webpack_require__.n(CardText_module);
;// CONCATENATED MODULE: ./src/components/CreditCard/CardInformation/CardText/CreditText/CreditText.tsx
var CreditText_jsx = (external_react_default()).createElement;


const CreditText = ({
  creditText
}) => {
  return CreditText_jsx((external_react_default()).Fragment, null, CreditText_jsx("h4", null, "Kredit"), CreditText_jsx("p", null, creditText));
};

/* harmony default export */ var CreditText_CreditText = (CreditText);
;// CONCATENATED MODULE: ./src/components/CreditCard/CardInformation/CardText/InsuranceText/InsuranceText.tsx
var InsuranceText_jsx = (external_react_default()).createElement;


const InsuranceText = ({
  insurancetext
}) => {
  return InsuranceText_jsx((external_react_default()).Fragment, null, InsuranceText_jsx("h4", null, "F\xF6rs\xE4kringar"), InsuranceText_jsx("p", null, insurancetext));
};

/* harmony default export */ var InsuranceText_InsuranceText = (InsuranceText);
;// CONCATENATED MODULE: ./src/components/CreditCard/CardInformation/CardText/CardText.tsx

var CardText_jsx = (external_react_default()).createElement;





const CardText = ({
  creditcard
}) => {
  return CardText_jsx("div", {
    id: (CardText_module_default()).CardText
  }, CardText_jsx(BonusText_BonusText, {
    bonustext: creditcard.bonustext
  }), CardText_jsx(CreditText_CreditText, {
    creditText: creditcard.creditText
  }), CardText_jsx(InsuranceText_InsuranceText, {
    insurancetext: creditcard.insuranceText
  }));
};

/* harmony default export */ var CardText_CardText = (CardText);
;// CONCATENATED MODULE: ./src/components/CreditCard/CardInformation/CardInformation.tsx
var CardInformation_jsx = (external_react_default()).createElement;
 // Components








const CardInformation = ({
  creditcard
}) => {
  return CardInformation_jsx("div", null, CardInformation_jsx(Container/* default */.Z, null, CardInformation_jsx(external_react_grid_system_.Row, null, CardInformation_jsx(external_react_grid_system_.Col, {
    md: 12,
    lg: 6
  }, CardInformation_jsx(SpecificsTable, {
    cardsFacts: creditcard.properties.facts
  })), CardInformation_jsx(external_react_grid_system_.Col, {
    md: 12,
    lg: 6
  }, CardInformation_jsx(CardInsurances_CardInsurances, {
    insurances: creditcard.properties.insurances
  }))), CardInformation_jsx(external_react_grid_system_.Row, null, CardInformation_jsx(external_react_grid_system_.Col, null, CardInformation_jsx(CardRequierments, {
    requirements: creditcard.properties.requirements
  }))), CardInformation_jsx(CardText_CardText, {
    creditcard: creditcard.properties
  })));
};

/* harmony default export */ var CardInformation_CardInformation = (CardInformation);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/pages/kort/[name].tsx

var _name_jsx = (external_react_default()).createElement;


 // Components





const _name_CreditCard = ({
  card
}) => {
  const headerRef = (0,external_react_.useRef)(null); // function isInViewport(el : HTMLDivElement) {
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

  const creditCard = new CreditCard/* CreditCard */.a(card);
  return _name_jsx("div", null, _name_jsx((head_default()), null, _name_jsx("title", null, "Kreditkortskoll.com | ", card.name)), _name_jsx(Header_Header, {
    ref: headerRef,
    creditCard: creditCard
  }), _name_jsx(CardInformation_CardInformation, {
    creditcard: creditCard
  }));
};

async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await (0,Cards/* getCards */.vm)();
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
    const res = await (0,Cards/* getCard */.nO)(name);
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
/* harmony default export */ var _name_ = (_name_CreditCard);

/***/ }),

/***/ 4465:
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

/***/ 6506:
/***/ (function(module) {

// Exports
module.exports = {
	"krav": "CardRequirements_krav__1ONMR",
	"good": "CardRequirements_good__2iQFA"
};


/***/ }),

/***/ 2175:
/***/ (function(module) {

// Exports
module.exports = {
	"CardText": "CardText_CardText__1GvId"
};


/***/ }),

/***/ 1519:
/***/ (function(module) {

// Exports
module.exports = {
	"CardTable": "SpecificsTable_CardTable__2uBEA"
};


/***/ }),

/***/ 3555:
/***/ (function(module) {

// Exports
module.exports = {
	"CardBox": "CardBox_CardBox__3Zapr"
};


/***/ }),

/***/ 7335:
/***/ (function(module) {

// Exports
module.exports = {
	"Header": "Header_Header__Zxqi3"
};


/***/ }),

/***/ 8401:
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

/***/ 7259:
/***/ (function(module) {

// Exports
module.exports = {
	"ButtonWhite": "Buttons_ButtonWhite__2DOgy",
	"ButtonOrange": "Buttons_ButtonOrange__zOelK",
	"buttonHover": "Buttons_buttonHover__LdsKD"
};


/***/ }),

/***/ 2403:
/***/ (function(module) {

// Exports
module.exports = {
	"Container": "Container_Container__2FiPT"
};


/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

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

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

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

/***/ 7865:
/***/ (function(module) {

"use strict";
module.exports = require("react-grid-system");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [75,664,675,467], function() { return __webpack_exec__(4024); });
module.exports = __webpack_exports__;

})();