exports.id = 788;
exports.ids = [788];
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

/***/ 3591:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ DisplayCards_DisplayCards; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/Ui/Creditcard/Creditcard.module.css
var Creditcard_module = __webpack_require__(4682);
var Creditcard_module_default = /*#__PURE__*/__webpack_require__.n(Creditcard_module);
// EXTERNAL MODULE: ./src/components/Ui/Rating/Rating.module.css
var Rating_module = __webpack_require__(1866);
var Rating_module_default = /*#__PURE__*/__webpack_require__.n(Rating_module);
;// CONCATENATED MODULE: ./src/components/Ui/Rating/Rating.tsx
var __jsx = (external_react_default()).createElement;



const Rating = ({
  rating,
  className
}) => {
  let Rating;

  switch (parseInt(rating)) {
    case 1:
      Rating = __jsx("div", null, __jsx("span", {
        className: (Rating_module_default()).light
      }, __jsx("i", {
        className: "fas fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).dark
      }, __jsx("i", {
        className: "far fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).dark
      }, __jsx("i", {
        className: "far fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).dark
      }, __jsx("i", {
        className: "far fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).dark
      }, __jsx("i", {
        className: "far fa-star"
      })));
      break;

    case 2:
      Rating = __jsx("div", null, __jsx("span", {
        className: (Rating_module_default()).light
      }, __jsx("i", {
        className: "fas fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).light
      }, __jsx("i", {
        className: "fas fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).dark
      }, __jsx("i", {
        className: "far fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).dark
      }, __jsx("i", {
        className: "far fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).dark
      }, __jsx("i", {
        className: "far fa-star"
      })));
      break;

    case 3:
      Rating = __jsx("div", null, __jsx("span", {
        className: (Rating_module_default()).light
      }, __jsx("i", {
        className: "fas fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).light
      }, __jsx("i", {
        className: "fas fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).light
      }, __jsx("i", {
        className: "fas fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).dark
      }, __jsx("i", {
        className: "far fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).dark
      }, __jsx("i", {
        className: "far fa-star"
      })));
      break;

    case 4:
      Rating = __jsx("div", null, __jsx("span", {
        className: (Rating_module_default()).light
      }, __jsx("i", {
        className: "fas fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).light
      }, __jsx("i", {
        className: "fas fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).light
      }, __jsx("i", {
        className: "fas fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).light
      }, __jsx("i", {
        className: "fas fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).dark
      }, __jsx("i", {
        className: "far fa-star"
      })));
      break;

    case 5:
      Rating = __jsx("div", null, __jsx("span", {
        className: (Rating_module_default()).light
      }, __jsx("i", {
        className: "fas fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).light
      }, __jsx("i", {
        className: "fas fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).light
      }, __jsx("i", {
        className: "fas fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).light
      }, __jsx("i", {
        className: "fas fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).light
      }, __jsx("i", {
        className: "fas fa-star"
      })));
      break;

    default:
      Rating = __jsx("div", null, __jsx("span", {
        className: (Rating_module_default()).dark
      }, __jsx("i", {
        className: "far fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).dark
      }, __jsx("i", {
        className: "far fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).dark
      }, __jsx("i", {
        className: "far fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).dark
      }, __jsx("i", {
        className: "far fa-star"
      })), __jsx("span", {
        className: (Rating_module_default()).dark
      }, __jsx("i", {
        className: "far fa-star"
      })));
      break;
  }

  return __jsx("div", {
    className: className
  }, Rating);
};

/* harmony default export */ var Rating_Rating = (Rating);
// EXTERNAL MODULE: external "@tippyjs/react"
var react_ = __webpack_require__(7836);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/tippy.js/dist/tippy.css
var tippy = __webpack_require__(8933);
// EXTERNAL MODULE: ./src/components/Ui/Buttons/Buttons.module.css
var Buttons_module = __webpack_require__(7259);
var Buttons_module_default = /*#__PURE__*/__webpack_require__.n(Buttons_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./src/components/Ui/Buttons/ButtonOrange.tsx

var ButtonOrange_jsx = (external_react_default()).createElement;



const ButtonOrange = props => {
  return ButtonOrange_jsx(next_link.default, {
    href: props.href ? props.href : '#'
  }, ButtonOrange_jsx("a", {
    id: (Buttons_module_default()).ButtonOrange,
    onClick: props.onClick,
    className: props.className
  }, props.text));
};

/* harmony default export */ var Buttons_ButtonOrange = (ButtonOrange);
// EXTERNAL MODULE: ./src/context/State.tsx
var State = __webpack_require__(6250);
;// CONCATENATED MODULE: ./src/components/Ui/Creditcard/Creditcard.tsx
var Creditcard_jsx = (external_react_default()).createElement;

 // Components







const Creditcard = ({
  card
}) => {
  const {
    0: state,
    1: setState
  } = (0,external_react_.useContext)(State/* StateContext */.s); // const isCardCompare = compareState.checkIfCardCompare(card.properties._id)

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

  return Creditcard_jsx((external_react_default()).Fragment, null, Creditcard_jsx("div", {
    className: (Creditcard_module_default()).card
  }, Creditcard_jsx("div", {
    className: (Creditcard_module_default()).content
  }, Creditcard_jsx("div", null, Creditcard_jsx("h4", {
    className: (Creditcard_module_default()).Ismobile
  }, card.properties.name), Creditcard_jsx("span", {
    className: (Creditcard_module_default()).Ismobile
  }, Creditcard_jsx(Rating_Rating, {
    className: (Creditcard_module_default()).rating,
    rating: card.properties.rating
  })), Creditcard_jsx("img", {
    alt: `kreditkort ${card.properties.name}`,
    src: card.properties.img
  })), Creditcard_jsx("div", null, Creditcard_jsx("h4", {
    className: (Creditcard_module_default()).IsComputer
  }, card.properties.name), Creditcard_jsx("span", {
    className: (Creditcard_module_default()).IsComputer
  }, Creditcard_jsx(Rating_Rating, {
    rating: card.properties.rating
  })), Creditcard_jsx("div", {
    className: (Creditcard_module_default()).properties
  }, Creditcard_jsx("div", null, Creditcard_jsx("ul", null, card.properties.properties.map(propertie => {
    if (propertie.type === 'GOOD') {
      return Creditcard_jsx("div", {
        className: (Creditcard_module_default()).propertie
      }, Creditcard_jsx("span", {
        className: (Creditcard_module_default()).good
      }, Creditcard_jsx("i", {
        className: "fas fa-check-circle"
      })), Creditcard_jsx("li", {
        key: propertie.propertie
      }, propertie.propertie));
    } else {
      return Creditcard_jsx("div", {
        className: (Creditcard_module_default()).propertie
      }, Creditcard_jsx("span", {
        className: (Creditcard_module_default()).bad
      }, Creditcard_jsx("i", {
        className: "fas fa-times-circle"
      })), Creditcard_jsx("li", {
        key: propertie.propertie
      }, propertie.propertie));
    }
  }))))), Creditcard_jsx("div", {
    className: (Creditcard_module_default()).specific
  }, Creditcard_jsx("ul", null, card.properties.specifics.map(specific => {
    const text = specific.text.split(': ');
    return Creditcard_jsx((external_react_default()).Fragment, {
      key: specific.text
    }, Creditcard_jsx("li", null, Creditcard_jsx("span", {
      style: {
        fontWeight: 'bold'
      }
    }, text[0], ":"), " ", Creditcard_jsx("span", null, text[1])));
  })))), Creditcard_jsx("div", {
    className: (Creditcard_module_default()).btnBackground
  }, Creditcard_jsx("div", {
    className: (Creditcard_module_default()).buttons
  }, Creditcard_jsx(Buttons_ButtonOrange, {
    text: "Ans\xF6k nu!",
    href: `/Redirect?card=${card.properties._id}`,
    className: (Creditcard_module_default())["ansökButton"]
  }), Creditcard_jsx(Buttons_ButtonOrange, {
    text: "Mer information",
    href: `/kort/${card.properties._id.replace(/(\s)/g, '-')}`,
    className: (Creditcard_module_default())["ansökButton"]
  }))), Creditcard_jsx((react_default()), {
    content: !isCardCompare(card.properties._id) ? 'Lägg till kreditkort i jämförelse' : 'Ta bort kreditkort ur jämförelse'
  }, Creditcard_jsx("div", {
    onClick: () => isCardCompare(card.properties._id) ? removeFromCompare(card.properties._id) : addToCompare(card.properties),
    className: (Creditcard_module_default()).toCompare
  }, isCardCompare(card.properties._id) ? Creditcard_jsx("i", {
    className: "far fa-times-circle"
  }) : Creditcard_jsx("i", {
    className: "fas fa-file-import"
  })))));
};

/* harmony default export */ var Creditcard_Creditcard = (Creditcard);
// EXTERNAL MODULE: external "unstated-next"
var external_unstated_next_ = __webpack_require__(9892);
;// CONCATENATED MODULE: ./src/state/compare.ts



function useCustomHook() {
  let {
    0: compareIds,
    1: setCompareIds
  } = (0,external_react_.useState)([]);

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

let Container = (0,external_unstated_next_.createContainer)(useCustomHook);
/* harmony default export */ var compare = (Container);
;// CONCATENATED MODULE: ./src/components/Ui/DisplayCards/DisplayCards.tsx

var DisplayCards_jsx = (external_react_default()).createElement;



const DisplayCards = ({
  creditCards
}) => {
  return creditCards.map(CreditCard => {
    return DisplayCards_jsx(compare.Provider, null, DisplayCards_jsx(Creditcard_Creditcard, {
      card: CreditCard
    }));
  });
};

/* harmony default export */ var DisplayCards_DisplayCards = (DisplayCards);

/***/ }),

/***/ 6250:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": function() { return /* binding */ StateContext; },
/* harmony export */   "X": function() { return /* binding */ StateProvider; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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
    value: [state, setState]
  }, children);
};

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

/***/ 7259:
/***/ (function(module) {

// Exports
module.exports = {
	"ButtonWhite": "Buttons_ButtonWhite__2DOgy",
	"ButtonOrange": "Buttons_ButtonOrange__zOelK",
	"buttonHover": "Buttons_buttonHover__LdsKD"
};


/***/ }),

/***/ 4682:
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

/***/ 1866:
/***/ (function(module) {

// Exports
module.exports = {
	"light": "Rating_light__1L63n",
	"dark": "Rating_dark__2ajoy"
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

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;