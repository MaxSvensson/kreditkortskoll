(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

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
    className: `${(_Buttons_module_css__WEBPACK_IMPORTED_MODULE_2___default().ButtonWhite)} ${props.className} ${props.type === "outline" ? (_Buttons_module_css__WEBPACK_IMPORTED_MODULE_2___default().outlinedWhite) : props.type === "full" ? (_Buttons_module_css__WEBPACK_IMPORTED_MODULE_2___default().fullWhite) : null}`,
    onClick: props.onClick
  }, props.text));
};

/* harmony default export */ __webpack_exports__["Z"] = (ButtonWhite);

/***/ }),

/***/ 1163:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/classes/CreditCard.ts
var CreditCard = __webpack_require__(9389);
// EXTERNAL MODULE: ./src/components/Index/Header/Header.module.css
var Header_module = __webpack_require__(8147);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./src/hoc/Container/Container.tsx
var Container = __webpack_require__(8032);
// EXTERNAL MODULE: external "react-grid-system"
var external_react_grid_system_ = __webpack_require__(7865);
// EXTERNAL MODULE: ./src/components/Index/Header/TextHeader/TextHeader.module.css
var TextHeader_module = __webpack_require__(6298);
var TextHeader_module_default = /*#__PURE__*/__webpack_require__.n(TextHeader_module);
;// CONCATENATED MODULE: ./src/components/Index/Header/TextHeader/TextHeader.tsx
var __jsx = (external_react_default()).createElement;



const TextHeader = () => {
  return __jsx("div", {
    id: (TextHeader_module_default()).TextHeader
  }, __jsx("div", {
    id: (TextHeader_module_default()).HeadingTitle
  }, __jsx("h1", null, "Vi j\xE4mf\xF6r alla kreditkort och ger ut kvalitativa recensioner f\xF6r dig")), __jsx("div", {
    id: (TextHeader_module_default()).HeadingDescription
  }, __jsx("p", null, "suscipit quas saepe blanditiis, obcaecati eveniet ratione a modi consectetur sit eos eaque doloribus dolore?")));
};

/* harmony default export */ var TextHeader_TextHeader = (TextHeader);
// EXTERNAL MODULE: ./src/components/Index/Header/BestCard/BestCard.module.css
var BestCard_module = __webpack_require__(9623);
var BestCard_module_default = /*#__PURE__*/__webpack_require__.n(BestCard_module);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/components/Ui/Buttons/ButtonWhite.tsx
var ButtonWhite = __webpack_require__(5293);
;// CONCATENATED MODULE: ./src/components/Index/Header/BestCard/BestCard.tsx

var BestCard_jsx = (external_react_default()).createElement;
 // Components




const BestCard = ({
  bestcard
}) => {
  return BestCard_jsx("div", {
    id: (BestCard_module_default()).BestCard
  }, BestCard_jsx("h3", null, "B\xE4sta kortet nu"), BestCard_jsx(next_image.default, {
    src: bestcard.img,
    width: 250,
    height: 140,
    alt: "B\xE4sta kreditkortet just nu!"
  }), BestCard_jsx("p", null, bestcard.description), BestCard_jsx(ButtonWhite/* default */.Z, {
    type: "full",
    text: "Ans\xF6k nu!",
    href: `/Redirect?card=${bestcard.name}`,
    className: (BestCard_module_default()).btn
  }));
};

/* harmony default export */ var BestCard_BestCard = (BestCard);
;// CONCATENATED MODULE: ./src/components/Index/Header/Header.tsx
var Header_jsx = (external_react_default()).createElement;


 // Components





const Header = ({
  bestcard
}) => {
  return Header_jsx("div", {
    id: (Header_module_default()).Header
  }, Header_jsx(Container/* default */.Z, null, Header_jsx(external_react_grid_system_.Row, {
    justify: "center",
    align: "center"
  }, Header_jsx(external_react_grid_system_.Col, {
    md: 12,
    lg: 7
  }, Header_jsx(TextHeader_TextHeader, null)), Header_jsx(external_react_grid_system_.Col, {
    md: 12,
    lg: 5
  }, Header_jsx(BestCard_BestCard, {
    bestcard: bestcard
  })))));
};

/* harmony default export */ var Header_Header = (Header);
// EXTERNAL MODULE: ./src/components/Index/WhyUs/WhyUs.module.css
var WhyUs_module = __webpack_require__(5063);
var WhyUs_module_default = /*#__PURE__*/__webpack_require__.n(WhyUs_module);
;// CONCATENATED MODULE: ./src/hoc/FadeInSection/FadeInSection.js
var FadeInSection_jsx = (external_react_default()).createElement;



function FadeInSection(props) {
  const [isVisible, setVisible] = external_react_default().useState(false);
  const domRef = external_react_default().useRef();
  external_react_default().useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (isVisible) return;
      if (domRef.current.className === 'fade-in-sectionis-visible') return;
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return FadeInSection_jsx("div", {
    className: `fade-in-section ${isVisible ? 'is-visible' : ''}`,
    ref: domRef
  }, props.children);
}

/* harmony default export */ var FadeInSection_FadeInSection = (FadeInSection);
;// CONCATENATED MODULE: ./src/components/Index/WhyUs/WhyUs.tsx
var WhyUs_jsx = (external_react_default()).createElement;

 // Components





const WhyUs = () => {
  return WhyUs_jsx("div", {
    id: (WhyUs_module_default()).WhyUs
  }, WhyUs_jsx(FadeInSection_FadeInSection, null, WhyUs_jsx(Container/* default */.Z, null, WhyUs_jsx("h2", null, "Hur kan vi hj\xE4lpa dig?"), WhyUs_jsx("div", {
    className: (WhyUs_module_default()).row
  }, WhyUs_jsx(external_react_grid_system_.Row, {
    align: "end",
    justify: "end"
  }, WhyUs_jsx(external_react_grid_system_.Col, {
    sm: 4
  }, WhyUs_jsx("div", {
    className: (WhyUs_module_default()).text
  }, WhyUs_jsx("div", {
    className: (WhyUs_module_default()).head
  }, WhyUs_jsx("p", {
    className: (WhyUs_module_default()).title
  }, WhyUs_jsx("b", null, "Opartiska j\xE4mf\xF6relser"))), WhyUs_jsx("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,"))), WhyUs_jsx(external_react_grid_system_.Col, {
    sm: 4
  }, WhyUs_jsx("div", {
    className: (WhyUs_module_default()).text
  }, WhyUs_jsx("div", {
    className: (WhyUs_module_default()).head
  }, WhyUs_jsx("p", {
    className: (WhyUs_module_default()).title
  }, WhyUs_jsx("b", null, "Opartiska j\xE4mf\xF6relser"))), WhyUs_jsx("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,"))), WhyUs_jsx(external_react_grid_system_.Col, {
    sm: 4
  }, WhyUs_jsx("div", {
    className: (WhyUs_module_default()).text
  }, WhyUs_jsx("div", {
    className: (WhyUs_module_default()).head
  }, WhyUs_jsx("p", {
    className: (WhyUs_module_default()).title
  }, WhyUs_jsx("b", null, "Opartiska j\xE4mf\xF6relser"))), WhyUs_jsx("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,")))), WhyUs_jsx(external_react_grid_system_.Row, {
    style: {
      marginTop: 50
    },
    align: "end",
    justify: "end"
  }, WhyUs_jsx(external_react_grid_system_.Col, {
    sm: 4
  }, WhyUs_jsx("div", {
    className: (WhyUs_module_default()).text
  }, WhyUs_jsx("div", {
    className: (WhyUs_module_default()).head
  }, WhyUs_jsx("p", {
    className: (WhyUs_module_default()).title
  }, WhyUs_jsx("b", null, "Opartiska j\xE4mf\xF6relser"))), WhyUs_jsx("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,"))), WhyUs_jsx(external_react_grid_system_.Col, {
    sm: 4
  }, WhyUs_jsx("div", {
    className: (WhyUs_module_default()).text
  }, WhyUs_jsx("div", {
    className: (WhyUs_module_default()).head
  }, WhyUs_jsx("p", {
    className: (WhyUs_module_default()).title
  }, WhyUs_jsx("b", null, "Opartiska j\xE4mf\xF6relser"))), WhyUs_jsx("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,"))), WhyUs_jsx(external_react_grid_system_.Col, {
    sm: 4
  }, WhyUs_jsx("div", {
    className: (WhyUs_module_default()).text
  }, WhyUs_jsx("div", {
    className: (WhyUs_module_default()).head
  }, WhyUs_jsx("p", {
    className: (WhyUs_module_default()).title
  }, WhyUs_jsx("b", null, "Opartiska j\xE4mf\xF6relser"))), WhyUs_jsx("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium,"))))))));
};

/* harmony default export */ var WhyUs_WhyUs = (WhyUs);
// EXTERNAL MODULE: ./src/components/Ui/DisplayCards/DisplayCards.tsx + 4 modules
var DisplayCards = __webpack_require__(8971);
// EXTERNAL MODULE: ./src/components/Index/TopCards/TopCards.module.css
var TopCards_module = __webpack_require__(4399);
var TopCards_module_default = /*#__PURE__*/__webpack_require__.n(TopCards_module);
;// CONCATENATED MODULE: ./src/components/Index/TopCards/TopCards.tsx
var TopCards_jsx = (external_react_default()).createElement;




const TopCards = ({
  creditCards
}) => {
  const cards = creditCards.cards.splice(2, 5);
  return TopCards_jsx("div", {
    id: (TopCards_module_default()).TopCards
  }, TopCards_jsx("h4", null, "V\xE5ra popul\xE4raste kreditkort"), TopCards_jsx(DisplayCards/* default */.Z, {
    creditCards: cards
  }));
};

/* harmony default export */ var TopCards_TopCards = (TopCards);
// EXTERNAL MODULE: ./src/resources/Cards.ts
var Cards = __webpack_require__(1467);
;// CONCATENATED MODULE: ./src/classes/CreditCards.ts
class CreditCards {
  constructor(cards = []) {
    this.cards = cards;
  }

  getCards() {
    return this.cards;
  }

}
// EXTERNAL MODULE: ./src/components/Index/UpdatedInforamtion/UpdatedInformation.module.css
var UpdatedInformation_module = __webpack_require__(1552);
var UpdatedInformation_module_default = /*#__PURE__*/__webpack_require__.n(UpdatedInformation_module);
;// CONCATENATED MODULE: ./src/components/Index/UpdatedInforamtion/UpdatedInformation.tsx

var UpdatedInformation_jsx = (external_react_default()).createElement;
 // Components






const UpdatedInformation = () => {
  return UpdatedInformation_jsx("div", {
    id: (UpdatedInformation_module_default()).UpdatedInformation
  }, UpdatedInformation_jsx(Container/* default */.Z, null, UpdatedInformation_jsx("div", {
    id: (UpdatedInformation_module_default()).content
  }, UpdatedInformation_jsx(external_react_grid_system_.Row, null, UpdatedInformation_jsx(external_react_grid_system_.Col, {
    md: 12,
    lg: 6
  }, UpdatedInformation_jsx("h3", null, "Alltid updaterat"), UpdatedInformation_jsx("p", null, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos vero consectetur voluptatum cum? Labore suscipit nobis cupiditate maiores at deleniti nesciunt obcaecati repellendus minima qui, quidem exercitationem excepturi eligendi non!"), UpdatedInformation_jsx(ButtonWhite/* default */.Z, {
    type: "full",
    href: "/kort",
    text: "Utforska kort",
    className: (UpdatedInformation_module_default()).btn
  })), UpdatedInformation_jsx(external_react_grid_system_.Col, {
    md: 12,
    lg: 6
  }, UpdatedInformation_jsx("div", {
    id: (UpdatedInformation_module_default()).imgContainer
  }, UpdatedInformation_jsx(next_image.default, {
    width: 500,
    height: 700,
    src: "/images/updated.svg",
    id: (UpdatedInformation_module_default()).Img
  })))))));
};

/* harmony default export */ var UpdatedInforamtion_UpdatedInformation = (UpdatedInformation);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/pages/index.tsx
var pages_jsx = (external_react_default()).createElement;










class IndexPage extends (external_react_default()).Component {
  render() {
    const cards = this.props.cards.map(card => new CreditCard/* CreditCard */.a(card));
    const list = new CreditCards(cards);
    const bestcard = this.props.bestcard;
    return pages_jsx("div", null, pages_jsx((head_default()), null, pages_jsx("title", null, "Alla kreditkort"), pages_jsx("meta", {
      name: "description",
      content: "Kreditkortskoll.com j\xE4mf\xF6r olika kreditkort f\xF6r att hitta det b\xE4sta kredikortet f\xF6r dig. J\xE4mf\xF6r kreditkort som Remember flex och Norwegian"
    }), pages_jsx("meta", {
      name: "robots",
      content: "index, follow"
    })), pages_jsx(Header_Header, {
      bestcard: bestcard
    }), pages_jsx("main", null, pages_jsx("section", null, pages_jsx(WhyUs_WhyUs, null)), pages_jsx("section", null, pages_jsx(UpdatedInforamtion_UpdatedInformation, null)), pages_jsx("section", null, pages_jsx(TopCards_TopCards, {
      creditCards: list
    }))));
  }

}

async function getStaticProps() {
  try {
    const promises = [(0,Cards/* getCards */.vm)(), (0,Cards/* getBestCard */.ZL)()];
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
/* harmony default export */ var pages = (IndexPage);

/***/ }),

/***/ 9623:
/***/ (function(module) {

// Exports
module.exports = {
	"BestCard": "BestCard_BestCard__3wEkq",
	"btn": "BestCard_btn__A4Vce"
};


/***/ }),

/***/ 8147:
/***/ (function(module) {

// Exports
module.exports = {
	"Header": "Header_Header__1BSjH"
};


/***/ }),

/***/ 6298:
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

/***/ 4399:
/***/ (function(module) {

// Exports
module.exports = {
	"TopCards": "TopCards_TopCards__3v0jg"
};


/***/ }),

/***/ 1552:
/***/ (function(module) {

// Exports
module.exports = {
	"UpdatedInformation": "UpdatedInformation_UpdatedInformation__LzuWj",
	"imgContainer": "UpdatedInformation_imgContainer__1HX48",
	"content": "UpdatedInformation_content__SMHax",
	"btn": "UpdatedInformation_btn__3v2wI"
};


/***/ }),

/***/ 5063:
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
var __webpack_exports__ = __webpack_require__.X(0, [75,664,675,467,886], function() { return __webpack_exec__(1163); });
module.exports = __webpack_exports__;

})();