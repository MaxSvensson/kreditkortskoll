(function() {
var exports = {};
exports.id = 682;
exports.ids = [682];
exports.modules = {

/***/ 2171:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages_Redirect; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/Redirect/RedirectBox/RedirectBox.module.css
var RedirectBox_module = __webpack_require__(7474);
var RedirectBox_module_default = /*#__PURE__*/__webpack_require__.n(RedirectBox_module);
;// CONCATENATED MODULE: ./src/components/Redirect/RedirectBox/RedirectBox.tsx

var __jsx = (external_react_default()).createElement;


const RedirectBox = ({
  card
}) => {
  return __jsx("div", {
    id: (RedirectBox_module_default()).RedirectBox
  }, __jsx("h1", null, card.name), __jsx("p", null, "Vi omredigerar nu dig"));
};

/* harmony default export */ var RedirectBox_RedirectBox = (RedirectBox);
// EXTERNAL MODULE: ./src/resources/Cards.ts
var Cards = __webpack_require__(1467);
// EXTERNAL MODULE: ./src/components/Redirect/Background/Background.module.css
var Background_module = __webpack_require__(9958);
var Background_module_default = /*#__PURE__*/__webpack_require__.n(Background_module);
;// CONCATENATED MODULE: ./src/components/Redirect/Background/Background.tsx
var Background_jsx = (external_react_default()).createElement;



const Background = () => {
  return Background_jsx("div", {
    id: (Background_module_default()).Background
  });
};

/* harmony default export */ var Background_Background = (Background);
;// CONCATENATED MODULE: ./src/pages/Redirect.tsx
var Redirect_jsx = (external_react_default()).createElement;

// Components




const Redirect = ({
  card
}) => {
  (0,external_react_.useEffect)(() => {
    setTimeout(() => {
      window.location.replace(card.url);
    }, 1000);
  }, []);
  return Redirect_jsx("div", null, Redirect_jsx(Background_Background, null), Redirect_jsx(RedirectBox_RedirectBox, {
    card: card
  }));
};

const getServerSideProps = async context => {
  try {
    const cardId = context.query.card;
    if (!cardId) throw new Error();
    const res = await (0,Cards/* getCard */.nO)(cardId);
    if (res.error || !res.card) throw new Error();
    return {
      props: {
        card: res.card
      }
    };
  } catch (error) {
    // Error, redirect to home page
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }
};
/* harmony default export */ var pages_Redirect = (Redirect);

/***/ }),

/***/ 9958:
/***/ (function(module) {

// Exports
module.exports = {
	"Background": "Background_Background__2c3ri"
};


/***/ }),

/***/ 7474:
/***/ (function(module) {

// Exports
module.exports = {
	"RedirectBox": "RedirectBox_RedirectBox__2qz2A"
};


/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [467], function() { return __webpack_exec__(2171); });
module.exports = __webpack_exports__;

})();