(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

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

/***/ 2796:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__(7544);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./src/components/Ui/CompareBox/CompareBox.module.css
var CompareBox_module = __webpack_require__(530);
var CompareBox_module_default = /*#__PURE__*/__webpack_require__.n(CompareBox_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/context/State.tsx
var State = __webpack_require__(6250);
;// CONCATENATED MODULE: ./src/components/Ui/CompareBox/CompareBox.tsx
var __jsx = (external_react_default()).createElement;





const CompareBox = () => {
  const {
    0: state,
    1: setState
  } = (0,external_react_.useContext)(State/* StateContext */.s);

  const removeFromCompare = () => {
    let State = Object.assign({}, state);
    const index = State.compareIds.findIndex(Card => Card._id);
    if (index < 0) return;
    State.compareIds.splice(index, 1);
    setState(State);
  };

  console.log(state.compareIds.length);
  if (state.compareIds.length <= 0) return null;
  return __jsx("div", {
    className: (CompareBox_module_default()).CompareBox
  }, __jsx("h2", null, "Dina valda kreditkort"), __jsx("div", {
    className: (CompareBox_module_default()).cards
  }, __jsx("ul", null, state.compareIds.length > 0 ? __jsx((external_react_default()).Fragment, null, state.compareIds.map(card => {
    return __jsx("li", null, __jsx("div", {
      className: (CompareBox_module_default()).card
    }, __jsx("img", {
      src: card.img
    }), __jsx(next_link.default, {
      href: `/kort/${card._id}`
    }, __jsx("a", {
      className: (CompareBox_module_default()).text
    }, card.name)), __jsx("i", {
      onClick: () => removeFromCompare(),
      className: "fas fa-times-circle"
    })));
  })) : null)), __jsx("div", {
    className: (CompareBox_module_default()).buttonBackground
  }, __jsx(next_link.default, {
    href: `/jamfor?cards=${JSON.stringify(state.compareIds.map(Card => Card._id))}`
  }, __jsx("a", {
    id: (CompareBox_module_default()).compareBtn
  }, "J\xE4mf\xF6r ", state.compareIds.length, "st kreditkort"))));
};

/* harmony default export */ var CompareBox_CompareBox = (CompareBox);
// EXTERNAL MODULE: ./src/components/Ui/Navigation/Navigation.module.css
var Navigation_module = __webpack_require__(7380);
var Navigation_module_default = /*#__PURE__*/__webpack_require__.n(Navigation_module);
;// CONCATENATED MODULE: ./src/components/Ui/Navigation/Navigation.tsx
var Navigation_jsx = (external_react_default()).createElement;





const NavigationButton = () => {
  var _inputRef$current;

  const inputRef = (0,external_react_.useRef)(null);
  console.log((_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.checked);

  const closeNavigation = () => {
    router_default().events.on('routeChangeComplete', () => {
      if (!inputRef.current) return;
      inputRef.current.checked = false;
    });
    router_default().events.on('routeChangeError', () => {
      if (!inputRef.current) return;
      inputRef.current.checked = false;
    });
  };

  return Navigation_jsx("div", {
    id: (Navigation_module_default()).Navigation
  }, Navigation_jsx("input", {
    className: (Navigation_module_default()).navigationCheckbox,
    type: "checkbox",
    id: "navi-toggle",
    ref: inputRef
  }), Navigation_jsx("label", {
    htmlFor: "navi-toggle",
    className: (Navigation_module_default()).NavigationButton
  }, Navigation_jsx("span", {
    className: (Navigation_module_default()).navigationIcon
  })), Navigation_jsx("div", {
    className: (Navigation_module_default()).navigationBackground
  }, "\xA0"), Navigation_jsx("nav", {
    className: (Navigation_module_default()).navigationNav
  }, Navigation_jsx("h1", null, "Kreditkortskoll.com"), Navigation_jsx("ul", {
    className: (Navigation_module_default()).navigationList
  }, Navigation_jsx("li", {
    className: (Navigation_module_default()).navigationItem
  }, Navigation_jsx(next_link.default, {
    href: "/kort"
  }, Navigation_jsx("a", {
    onClick: closeNavigation,
    className: (Navigation_module_default()).navigationLink
  }, "Alla kreditkort"))), Navigation_jsx("li", {
    className: (Navigation_module_default()).navigationItem
  }, Navigation_jsx(next_link.default, {
    href: "#"
  }, Navigation_jsx("a", {
    onClick: closeNavigation,
    className: (Navigation_module_default()).navigationLink
  }, "Kreditkorts testet"))), Navigation_jsx("li", {
    className: (Navigation_module_default()).navigationItem
  }, Navigation_jsx(next_link.default, {
    href: "/artiklar"
  }, Navigation_jsx("a", {
    onClick: closeNavigation,
    className: (Navigation_module_default()).navigationLink
  }, "Artiklar"))), Navigation_jsx("li", {
    className: (Navigation_module_default()).navigationItem
  }, Navigation_jsx(next_link.default, {
    href: "/faq"
  }, Navigation_jsx("a", {
    onClick: closeNavigation,
    className: (Navigation_module_default()).navigationLink
  }, "FAQ"))))));
};

/* harmony default export */ var Navigation = (NavigationButton);
// EXTERNAL MODULE: ./src/components/Ui/NavBar/Navbar.module.css
var Navbar_module = __webpack_require__(3370);
var Navbar_module_default = /*#__PURE__*/__webpack_require__.n(Navbar_module);
;// CONCATENATED MODULE: ./src/components/Ui/NavBar/Navbar.tsx

var Navbar_jsx = (external_react_default()).createElement;




const Navbar = () => {
  return Navbar_jsx("div", {
    id: (Navbar_module_default()).Navbar
  }, Navbar_jsx(next_link.default, {
    href: "/"
  }, Navbar_jsx("a", {
    id: (Navbar_module_default()).loggo
  }, "Kreditkortskoll.com")), Navbar_jsx(Navigation, null));
};

/* harmony default export */ var NavBar_Navbar = (Navbar);
;// CONCATENATED MODULE: external "nprogress"
var external_nprogress_namespaceObject = require("nprogress");;
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
// EXTERNAL MODULE: ./src/components/Ui/Footer/Footer.module.css
var Footer_module = __webpack_require__(665);
var Footer_module_default = /*#__PURE__*/__webpack_require__.n(Footer_module);
;// CONCATENATED MODULE: ./src/components/Ui/Footer/Footer.tsx

var Footer_jsx = (external_react_default()).createElement;



const Footer = () => {
  return Footer_jsx("div", {
    id: (Footer_module_default()).footer
  }, Footer_jsx("div", {
    id: (Footer_module_default()).logo
  }, Footer_jsx("p", null, "Kreditkortskoll.com")), Footer_jsx("div", {
    id: (Footer_module_default()).links
  }, Footer_jsx("ul", null, Footer_jsx("li", null, Footer_jsx(next_link.default, {
    href: "/#"
  }, Footer_jsx("a", null, "Hem"))), Footer_jsx("li", null, Footer_jsx(next_link.default, {
    href: "/#"
  }, Footer_jsx("a", null, "Alla kreditkort"))), Footer_jsx("li", null, Footer_jsx(next_link.default, {
    href: "/#"
  }, Footer_jsx("a", null, "Artiklar"))), Footer_jsx("li", null, Footer_jsx(next_link.default, {
    href: "/#"
  }, Footer_jsx("a", null, "FAQ"))), Footer_jsx("li", null, Footer_jsx(next_link.default, {
    href: "/#"
  }, Footer_jsx("a", null, "Legal"))), Footer_jsx("li", null, Footer_jsx(next_link.default, {
    href: "/#"
  }, Footer_jsx("a", null, "Om oss"))))));
};

/* harmony default export */ var Footer_Footer = (Footer);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
var _app_jsx = (external_react_default()).createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




 // Components
// import NavigationButton from '../components/Ui/Navigation/NavigationButton/NavigationButton';



 //nprogress module


 //Css




class MyApp extends app.default {
  render() {
    external_nprogress_default().configure({
      showSpinner: false
    });
    router_default().events.on('routeChangeStart', () => external_nprogress_default().start());
    router_default().events.on('routeChangeComplete', () => external_nprogress_default().done());
    router_default().events.on('routeChangeError', () => external_nprogress_default().done());
    const {
      Component,
      pageProps
    } = this.props;
    return _app_jsx((external_react_default()).Fragment, null, _app_jsx((head_default()), null, _app_jsx("link", {
      rel: "stylesheet",
      href: "https://use.fontawesome.com/releases/v5.8.2/css/all.css",
      integrity: "sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay",
      crossOrigin: "anonymous"
    }), _app_jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    })), _app_jsx(State/* StateProvider */.X, null, _app_jsx(NavBar_Navbar, null), _app_jsx(Component, _extends({}, pageProps, {
      key: Math.random() * 100
    })), _app_jsx(CompareBox_CompareBox, null), _app_jsx(Footer_Footer, null)));
  }

}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 530:
/***/ (function(module) {

// Exports
module.exports = {
	"CompareBox": "CompareBox_CompareBox__3ZS1J",
	"buttonBackground": "CompareBox_buttonBackground__13qRo",
	"cards": "CompareBox_cards__3x2JT",
	"card": "CompareBox_card__4BG4Z",
	"text": "CompareBox_text__3mvcN"
};


/***/ }),

/***/ 665:
/***/ (function(module) {

// Exports
module.exports = {
	"footer": "Footer_footer__UXXsY",
	"logo": "Footer_logo__3XO4J",
	"links": "Footer_links__1eF1g"
};


/***/ }),

/***/ 3370:
/***/ (function(module) {

// Exports
module.exports = {
	"Navbar": "Navbar_Navbar__21KXa",
	"loggo": "Navbar_loggo__2-Zb3"
};


/***/ }),

/***/ 7380:
/***/ (function(module) {

// Exports
module.exports = {
	"Navigation": "Navigation_Navigation__17hQ-",
	"navigationCheckbox": "Navigation_navigationCheckbox__3KrbO",
	"NavigationButton": "Navigation_NavigationButton__16JaW",
	"navigationBackground": "Navigation_navigationBackground__2wEr6",
	"navigationNav": "Navigation_navigationNav__1aAa0",
	"navigationList": "Navigation_navigationList__MX0hQ",
	"navigationItem": "Navigation_navigationItem__2oB0v",
	"navigationLink": "Navigation_navigationLink__EePff",
	"navigationIcon": "Navigation_navigationIcon__1Sztt"
};


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

/***/ 7579:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/utils.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
var __webpack_exports__ = __webpack_require__.X(0, [75,664,544], function() { return __webpack_exec__(2796); });
module.exports = __webpack_exports__;

})();