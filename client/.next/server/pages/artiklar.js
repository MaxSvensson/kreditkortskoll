(function() {
var exports = {};
exports.id = 404;
exports.ids = [404];
exports.modules = {

/***/ 571:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ artiklar; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/Blog/Header/Header.module.css
var Header_module = __webpack_require__(6151);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./src/hoc/Container/Container.tsx
var Container = __webpack_require__(8032);
// EXTERNAL MODULE: ./src/components/Blog/Header/TextHeader/TextHeader.module.css
var TextHeader_module = __webpack_require__(2841);
var TextHeader_module_default = /*#__PURE__*/__webpack_require__.n(TextHeader_module);
;// CONCATENATED MODULE: ./src/components/Blog/Header/TextHeader/TextHeader.tsx
var __jsx = (external_react_default()).createElement;



const TextHeader = () => {
  return __jsx("div", {
    id: (TextHeader_module_default()).TextHeader
  }, __jsx("div", {
    id: (TextHeader_module_default()).HeadingTitle
  }, __jsx("h1", null, "V\xE5ra artiklar")));
};

/* harmony default export */ var TextHeader_TextHeader = (TextHeader);
;// CONCATENATED MODULE: ./src/components/Blog/Header/Header.tsx
var Header_jsx = (external_react_default()).createElement;


 // Components



const Header = () => {
  return Header_jsx("div", {
    id: (Header_module_default()).Header
  }, Header_jsx(Container/* default */.Z, null, Header_jsx(TextHeader_TextHeader, null)));
};

/* harmony default export */ var Header_Header = (Header);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/components/Blog/Post/Post.module.css
var Post_module = __webpack_require__(3396);
var Post_module_default = /*#__PURE__*/__webpack_require__.n(Post_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./src/components/Blog/Post/Post.tsx

var Post_jsx = (external_react_default()).createElement;




const Post = ({
  blog
}) => {
  const router = (0,router_.useRouter)();
  return Post_jsx("div", {
    onClick: () => router.push(`/artiklar/${blog.name}`),
    id: (Post_module_default()).Post
  }, Post_jsx("div", {
    id: (Post_module_default()).top
  }, Post_jsx("img", {
    src: blog.imgUrl
  })), Post_jsx("div", {
    id: (Post_module_default()).content
  }, Post_jsx("h3", null, blog.name), Post_jsx(next_link.default, {
    href: `/artiklar/${blog.name}`
  }, Post_jsx("a", null, "L\xE4s mer"))));
};

/* harmony default export */ var Post_Post = (Post);
// EXTERNAL MODULE: external "react-grid-system"
var external_react_grid_system_ = __webpack_require__(7865);
// EXTERNAL MODULE: ./src/resources/Blog.ts
var Blog = __webpack_require__(8852);
;// CONCATENATED MODULE: ./src/pages/artiklar.tsx
var artiklar_jsx = (external_react_default()).createElement;







class IndexPage extends (external_react_default()).Component {
  render() {
    return artiklar_jsx("div", null, artiklar_jsx((head_default()), null, artiklar_jsx("title", null, "Kreditkortskoll.com | Artiklar"), artiklar_jsx("meta", {
      name: "description",
      content: "Kreditkortskoll.com j\xE4mf\xF6r olika kreditkort f\xF6r att hitta det b\xE4sta kredikortet f\xF6r dig. J\xE4mf\xF6r kreditkort som Remember flex och Norwegian"
    }), artiklar_jsx("meta", {
      name: "robots",
      content: "index, follow"
    })), artiklar_jsx(Header_Header, null), artiklar_jsx("main", null, artiklar_jsx(external_react_grid_system_.Container, null, artiklar_jsx(external_react_grid_system_.Row, null, this.props.blogs.map(blog => {
      return artiklar_jsx(external_react_grid_system_.Col, {
        sm: 12,
        md: 6,
        lg: 4
      }, artiklar_jsx(Post_Post, {
        blog: blog
      }));
    })))));
  }

}

async function getStaticProps() {
  try {
    let responses = await (0,Blog/* getBlogs */._)();
    if (responses.error) throw new Error("No blogs found");
    return {
      props: {
        blogs: responses.blogs
      },
      revalidate: 3600 * 4
    };
  } catch (error) {
    return {
      props: {
        blogs: []
      },
      revalidate: 3600 * 4
    };
  }
}
/* harmony default export */ var artiklar = (IndexPage);

/***/ }),

/***/ 6151:
/***/ (function(module) {

// Exports
module.exports = {
	"Header": "Header_Header__2zE8K"
};


/***/ }),

/***/ 2841:
/***/ (function(module) {

// Exports
module.exports = {
	"TextHeader": "TextHeader_TextHeader__2MxX1",
	"HeadingTitle": "TextHeader_HeadingTitle__Dzc5V",
	"moveInRight": "TextHeader_moveInRight__LhJ-7",
	"moveInLeft": "TextHeader_moveInLeft__FDqal"
};


/***/ }),

/***/ 3396:
/***/ (function(module) {

// Exports
module.exports = {
	"Post": "Post_Post__2hYGv",
	"top": "Post_top__hpcuQ",
	"content": "Post_content__3bngm"
};


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [75,664,976], function() { return __webpack_exec__(571); });
module.exports = __webpack_exports__;

})();