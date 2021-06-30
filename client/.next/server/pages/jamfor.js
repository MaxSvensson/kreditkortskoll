(function() {
var exports = {};
exports.id = 314;
exports.ids = [314];
exports.modules = {

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

/***/ 129:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ jamfor; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/resources/Cards.ts
var Cards = __webpack_require__(1467);
// EXTERNAL MODULE: ./src/components/Compare/Header/Header.module.css
var Header_module = __webpack_require__(9295);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./src/hoc/Container/Container.tsx
var Container = __webpack_require__(8032);
// EXTERNAL MODULE: ./src/components/Compare/Header/TextHeader/TextHeader.module.css
var TextHeader_module = __webpack_require__(6301);
var TextHeader_module_default = /*#__PURE__*/__webpack_require__.n(TextHeader_module);
;// CONCATENATED MODULE: ./src/components/Compare/Header/TextHeader/TextHeader.tsx
var __jsx = (external_react_default()).createElement;



const TextHeader = () => {
  return __jsx("div", {
    id: (TextHeader_module_default()).TextHeader
  }, __jsx("div", {
    id: (TextHeader_module_default()).HeadingTitle
  }, __jsx("h1", null, "J\xE4mf\xF6r kreditkorten f\xF6r att hitta det som passar dig b\xE4st")), __jsx("div", {
    id: (TextHeader_module_default()).HeadingDescription
  }, __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis repellat non reiciendis deserunt dignissimos at suscipit quas saepe blanditiis, obcaecati eveniet ratione a modi consectetur sit eos eaque doloribus dolore?")));
};

/* harmony default export */ var TextHeader_TextHeader = (TextHeader);
;// CONCATENATED MODULE: ./src/components/Compare/Header/Header.tsx
var Header_jsx = (external_react_default()).createElement;


 // Components



const Header = () => {
  return Header_jsx("div", {
    id: (Header_module_default()).Header
  }, Header_jsx(Container/* default */.Z, null, Header_jsx(TextHeader_TextHeader, null)));
};

/* harmony default export */ var Header_Header = (Header);
// EXTERNAL MODULE: ./src/components/Compare/CompareTable/CompareTable.module.css
var CompareTable_module = __webpack_require__(5261);
var CompareTable_module_default = /*#__PURE__*/__webpack_require__.n(CompareTable_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@tippyjs/react"
var react_ = __webpack_require__(7836);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/tippy.js/dist/tippy.css
var tippy = __webpack_require__(8933);
;// CONCATENATED MODULE: ./src/components/Compare/CompareTable/CompareTable.tsx

var CompareTable_jsx = (external_react_default()).createElement;
 // Components



 // Interfaces

const CompareTable = ({
  cards
}) => {
  return CompareTable_jsx("div", {
    id: (CompareTable_module_default()).Compare
  }, CompareTable_jsx("div", {
    id: (CompareTable_module_default()).compareTable
  }, CompareTable_jsx("table", null, CompareTable_jsx("tbody", null, CompareTable_jsx("tr", {
    className: (CompareTable_module_default()).TopTr
  }, CompareTable_jsx("td", {
    style: {
      background: 'white'
    }
  }), cards.map(card => {
    return CompareTable_jsx("td", {
      className: (CompareTable_module_default()).info,
      key: card._id
    }, CompareTable_jsx("img", {
      src: card.url
    }), CompareTable_jsx("br", null), " ", CompareTable_jsx("b", null, card.cardName));
  })), CompareTable_jsx("tr", null, CompareTable_jsx("td", {
    className: (CompareTable_module_default()).Statment
  }, "\xC5rsavgift: "), cards.map(card => {
    return card.Årsavgift == "?" ? CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, CompareTable_jsx((react_default()), {
      content: CompareTable_jsx("span", null, "Vi saknar tyv\xE4rr denna information")
    }, CompareTable_jsx("i", {
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      className: "fas fa-question-circle"
    }))) : CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, card.Årsavgift);
  })), CompareTable_jsx("tr", null, CompareTable_jsx("td", {
    className: (CompareTable_module_default()).Statment
  }, "H\xF6gsta kredit: "), cards.map(card => {
    return card.Högsta_kredit == "?" ? CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, CompareTable_jsx((react_default()), {
      content: CompareTable_jsx("span", null, "Vi saknar tyv\xE4rr denna information")
    }, CompareTable_jsx("i", {
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      className: "fas fa-question-circle"
    }))) : CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, card.Högsta_kredit);
  })), CompareTable_jsx("tr", null, CompareTable_jsx("td", {
    className: (CompareTable_module_default()).Statment
  }, "R\xE4nta: "), cards.map(card => {
    return card.Ränta == "?" ? CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, CompareTable_jsx((react_default()), {
      content: CompareTable_jsx("span", null, "Vi saknar tyv\xE4rr denna information")
    }, CompareTable_jsx("i", {
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      className: "fas fa-question-circle"
    }))) : CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, card.Ränta);
  })), CompareTable_jsx("tr", null, CompareTable_jsx("td", {
    className: (CompareTable_module_default()).Statment
  }, "Effektiv r\xE4nta: "), cards.map(card => {
    return card.Effektiv_ränta == "?" ? CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, CompareTable_jsx((react_default()), {
      content: CompareTable_jsx("span", null, "Vi saknar tyv\xE4rr denna information")
    }, CompareTable_jsx("i", {
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      className: "fas fa-question-circle"
    }))) : CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, card.Effektiv_ränta);
  })), CompareTable_jsx("tr", null, CompareTable_jsx("td", {
    className: (CompareTable_module_default()).Statment
  }, "R\xE4ntefritt: "), cards.map(card => {
    return card.Räntefritt == "?" ? CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, CompareTable_jsx((react_default()), {
      content: CompareTable_jsx("span", null, "Vi saknar tyv\xE4rr denna information")
    }, CompareTable_jsx("i", {
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      className: "fas fa-question-circle"
    }))) : CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, card.Räntefritt);
  })), CompareTable_jsx("tr", null, CompareTable_jsx("td", {
    className: (CompareTable_module_default()).Statment
  }, "Bonus: "), cards.map(card => {
    return card.Bonus == "?" ? CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, CompareTable_jsx((react_default()), {
      content: CompareTable_jsx("span", null, "Vi saknar tyv\xE4rr denna information")
    }, CompareTable_jsx("i", {
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      className: "fas fa-question-circle"
    }))) : CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, card.Bonus);
  })), CompareTable_jsx("tr", null, CompareTable_jsx("td", {
    className: (CompareTable_module_default()).Statment
  }, "F\xF6rs\xE4kringar: "), cards.map(card => {
    return card.Försäkringar == "?" ? CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, CompareTable_jsx((react_default()), {
      content: CompareTable_jsx("span", null, "Vi saknar tyv\xE4rr denna information")
    }, CompareTable_jsx("i", {
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      className: "fas fa-question-circle"
    }))) : CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, card.Försäkringar);
  })), CompareTable_jsx("tr", null, CompareTable_jsx("td", {
    className: (CompareTable_module_default()).Statment
  }, "Concierge Service: "), cards.map(card => {
    return card.Concierge_Service == "?" ? CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, CompareTable_jsx((react_default()), {
      content: CompareTable_jsx("span", null, "Vi saknar tyv\xE4rr denna information")
    }, CompareTable_jsx("i", {
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      className: "fas fa-question-circle"
    }))) : CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, card.Concierge_Service);
  })), CompareTable_jsx("tr", null, CompareTable_jsx("td", {
    className: (CompareTable_module_default()).Statment
  }, "Korttyp: "), cards.map(card => {
    return card.Korttyp == "?" ? CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, CompareTable_jsx((react_default()), {
      content: CompareTable_jsx("span", null, "Vi saknar tyv\xE4rr denna information")
    }, CompareTable_jsx("i", {
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      className: "fas fa-question-circle"
    }))) : CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, card.Korttyp);
  })), CompareTable_jsx("tr", null, CompareTable_jsx("td", {
    className: (CompareTable_module_default()).Statment
  }, "\xC5ldersgr\xE4ns: "), cards.map(card => {
    return card.Åldersgräns == "?" ? CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, CompareTable_jsx((react_default()), {
      content: CompareTable_jsx("span", null, "Vi saknar tyv\xE4rr denna information")
    }, CompareTable_jsx("i", {
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      className: "fas fa-question-circle"
    }))) : CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, card.Åldersgräns);
  })), CompareTable_jsx("tr", null, CompareTable_jsx("td", {
    className: (CompareTable_module_default()).Statment
  }, "Inkomstkrav: "), cards.map(card => {
    return card.Inkomstkrav == "?" ? CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, CompareTable_jsx((react_default()), {
      content: CompareTable_jsx("span", null, "Vi saknar tyv\xE4rr denna information")
    }, CompareTable_jsx("i", {
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      className: "fas fa-question-circle"
    }))) : CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, card.Inkomstkrav);
  })), CompareTable_jsx("tr", null, CompareTable_jsx("td", {
    className: (CompareTable_module_default()).Statment
  }, "Valutap\xE5slag i utlandet: "), cards.map(card => {
    return card.Valutapåslag_utlande == "?" ? CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, CompareTable_jsx((react_default()), {
      content: CompareTable_jsx("span", null, "Vi saknar tyv\xE4rr denna information")
    }, CompareTable_jsx("i", {
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      className: "fas fa-question-circle"
    }))) : CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, card.Valutapåslag_utlande);
  })), CompareTable_jsx("tr", null, CompareTable_jsx("td", {
    className: (CompareTable_module_default()).Statment
  }, "Uttagsavgift: "), cards.map(card => {
    return card.Uttagsavgift == "?" ? CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, CompareTable_jsx((react_default()), {
      content: CompareTable_jsx("span", null, "Vi saknar tyv\xE4rr denna information")
    }, CompareTable_jsx("i", {
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      className: "fas fa-question-circle"
    }))) : CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, card.Uttagsavgift);
  })), CompareTable_jsx("tr", null, CompareTable_jsx("td", {
    className: (CompareTable_module_default()).Statment
  }, "Minsta belopp att betala: "), cards.map(card => {
    return card.Minsta_belopp_betala == "?" ? CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, CompareTable_jsx((react_default()), {
      content: CompareTable_jsx("span", null, "Vi saknar tyv\xE4rr denna information")
    }, CompareTable_jsx("i", {
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      className: "fas fa-question-circle"
    }))) : CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, card.Minsta_belopp_betala);
  })), CompareTable_jsx("tr", null, CompareTable_jsx("td", {
    className: (CompareTable_module_default()).Statment
  }, "Betalningsanm\xE4rkningar: "), cards.map(card => {
    return card.Betalningsanmärkningar == "?" ? CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, CompareTable_jsx((react_default()), {
      content: CompareTable_jsx("span", null, "Vi saknar tyv\xE4rr denna information")
    }, CompareTable_jsx("i", {
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      className: "fas fa-question-circle"
    }))) : CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, card.Betalningsanmärkningar);
  })), CompareTable_jsx("tr", null, CompareTable_jsx("td", {
    className: (CompareTable_module_default()).Statment
  }, "Aviavgift: "), cards.map(card => {
    return card.Aviavgift == "?" ? CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, CompareTable_jsx((react_default()), {
      content: CompareTable_jsx("span", null, "Vi saknar tyv\xE4rr denna information")
    }, CompareTable_jsx("i", {
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      className: "fas fa-question-circle"
    }))) : CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, card.Aviavgift);
  })), CompareTable_jsx("tr", null, CompareTable_jsx("td", {
    className: (CompareTable_module_default()).Statment
  }, "F\xF6rseningsavgift: "), cards.map(card => {
    return card.Förseningsavgift == "?" ? CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, CompareTable_jsx((react_default()), {
      content: CompareTable_jsx("span", null, "Vi saknar tyv\xE4rr denna information")
    }, CompareTable_jsx("i", {
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      className: "fas fa-question-circle"
    }))) : CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, card.Förseningsavgift);
  })), CompareTable_jsx("tr", null, CompareTable_jsx("td", {
    className: (CompareTable_module_default()).Statment
  }, "Dr\xF6jsm\xE5lsr\xE4nta: "), cards.map(card => {
    return card.Dröjsmålsränta == "?" ? CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, CompareTable_jsx((react_default()), {
      content: CompareTable_jsx("span", null, "Vi saknar tyv\xE4rr denna information")
    }, CompareTable_jsx("i", {
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      className: "fas fa-question-circle"
    }))) : CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, card.Dröjsmålsränta);
  })), CompareTable_jsx("tr", null, CompareTable_jsx("td", {
    className: (CompareTable_module_default()).Statment
  }, "\xD6vertrasseringsavgift: "), cards.map(card => {
    return card.Övertrasseringsavgift == "?" ? CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, CompareTable_jsx((react_default()), {
      content: CompareTable_jsx("span", null, "Vi saknar tyv\xE4rr denna information")
    }, CompareTable_jsx("i", {
      style: {
        color: 'rgba(0,0,0,.25)'
      },
      className: "fas fa-question-circle"
    }))) : CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, card.Övertrasseringsavgift);
  })), CompareTable_jsx("tr", null, CompareTable_jsx("td", {
    className: (CompareTable_module_default()).Statment
  }, "Recension: "), cards.map(card => {
    return CompareTable_jsx("td", {
      className: (CompareTable_module_default()).tdCard,
      key: card._id
    }, CompareTable_jsx(next_link.default, {
      href: `/kort/${card.cardId}`
    }, "L\xE4s mer h\xE4r"));
  })), CompareTable_jsx("tr", null, CompareTable_jsx("td", {
    className: (CompareTable_module_default()).Statment
  }), cards.map(card => {
    return CompareTable_jsx("td", {
      style: {
        height: '80px'
      },
      className: (CompareTable_module_default()).tdCard
    }, CompareTable_jsx("a", {
      href: card.affliate,
      className: (CompareTable_module_default())["AnsökLink"]
    }, "Ans\xF6k nu!"));
  }))))));
};

/* harmony default export */ var CompareTable_CompareTable = (CompareTable);
;// CONCATENATED MODULE: ./src/pages/jamfor.tsx

var jamfor_jsx = (external_react_default()).createElement;
// import React from 'react';
// import { Card as CreditCardInterface } from '../classes/CreditCard';





const Compare = ({
  cards
}) => {
  return jamfor_jsx("div", null, jamfor_jsx((head_default()), null, jamfor_jsx("meta", {
    key: "5r42",
    charSet: "UTF-8"
  }), jamfor_jsx("title", {
    key: "5r2"
  }, "Kreditkortskoll.com | J\xE4mf\xF6r kreditkort")), jamfor_jsx("main", null, jamfor_jsx(Header_Header, null), jamfor_jsx(CompareTable_CompareTable, {
    cards: cards
  })));
};

const getServerSideProps = async context => {
  try {
    // Get ids from url
    const ids = context.query.cards;
    console.log(ids); // Check if ids are true

    if (!ids || ids.length < 0) throw new Error(); // Fetch card information

    let res = await (0,Cards/* getCompareCards */.WB)(ids);
    const promises = [(0,Cards/* getCompareCards */.WB)(ids), (0,Cards/* getBestCard */.ZL)()];
    const responses = await Promise.all(promises);
    const compareResponse = responses[0];
    const bestcardResponse = responses[1]; // Check if cards are true

    if (!compareResponse.cards || compareResponse.error || !bestcardResponse.bestcard) throw new Error(); // return cards

    return {
      props: {
        cards: res.cards,
        bestcard: bestcardResponse.bestcard
      }
    };
  } catch (e) {
    // Error, redirect to home page
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }
};
/* harmony default export */ var jamfor = (Compare);

/***/ }),

/***/ 5261:
/***/ (function(module) {

// Exports
module.exports = {
	"Compare": "CompareTable_Compare__1ICX2",
	"compareTable": "CompareTable_compareTable__39IDR",
	"info": "CompareTable_info__d3Q78",
	"Statment": "CompareTable_Statment__1cnaB",
	"TopTr": "CompareTable_TopTr__39kuh",
	"tdCard": "CompareTable_tdCard__35L8g",
	"AnsökLink": "CompareTable_Ans_kLink__2ZEsW"
};


/***/ }),

/***/ 9295:
/***/ (function(module) {

// Exports
module.exports = {
	"Header": "Header_Header__oR_qP"
};


/***/ }),

/***/ 6301:
/***/ (function(module) {

// Exports
module.exports = {
	"TextHeader": "TextHeader_TextHeader__2f1wc",
	"HeadingTitle": "TextHeader_HeadingTitle__2YLYR",
	"moveInRight": "TextHeader_moveInRight__2g3IG",
	"HeadingDescription": "TextHeader_HeadingDescription__1fLeP",
	"moveInLeft": "TextHeader_moveInLeft__1YMO_"
};


/***/ }),

/***/ 2403:
/***/ (function(module) {

// Exports
module.exports = {
	"Container": "Container_Container__2FiPT"
};


/***/ }),

/***/ 8933:
/***/ (function() {



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

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [75,664,467], function() { return __webpack_exec__(129); });
module.exports = __webpack_exports__;

})();