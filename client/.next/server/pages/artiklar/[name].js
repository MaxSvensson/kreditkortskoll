(function() {
var exports = {};
exports.id = 311;
exports.ids = [311];
exports.modules = {

/***/ 3324:
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
// EXTERNAL MODULE: ./src/components/Post/Header/Header.module.css
var Header_module = __webpack_require__(3210);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: ./src/hoc/Container/Container.tsx
var Container = __webpack_require__(8032);
// EXTERNAL MODULE: ./src/components/Post/Header/TextHeader/TextHeader.module.css
var TextHeader_module = __webpack_require__(3287);
var TextHeader_module_default = /*#__PURE__*/__webpack_require__.n(TextHeader_module);
;// CONCATENATED MODULE: ./src/components/Post/Header/TextHeader/TextHeader.tsx
var __jsx = (external_react_default()).createElement;



const TextHeader = ({
  name,
  description
}) => {
  return __jsx("div", {
    id: (TextHeader_module_default()).TextHeader
  }, __jsx("div", {
    id: (TextHeader_module_default()).HeadingTitle
  }, __jsx("h1", null, name)), __jsx("div", {
    id: (TextHeader_module_default()).HeadingDescription
  }, __jsx("p", null, description)));
};

/* harmony default export */ var TextHeader_TextHeader = (TextHeader);
;// CONCATENATED MODULE: ./src/components/Post/Header/Header.tsx
var Header_jsx = (external_react_default()).createElement;


 // Components



const Header = ({
  name,
  description
}) => {
  return Header_jsx("div", {
    id: (Header_module_default()).Header
  }, Header_jsx(Container/* default */.Z, null, Header_jsx(TextHeader_TextHeader, {
    name: name,
    description: description
  })));
};

/* harmony default export */ var Header_Header = (Header);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react-grid-system"
var external_react_grid_system_ = __webpack_require__(7865);
// EXTERNAL MODULE: ./src/resources/Blog.ts
var Blog = __webpack_require__(8852);
;// CONCATENATED MODULE: ./src/pages/artiklar/[name].tsx
var _name_jsx = (external_react_default()).createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class IndexPage extends (external_react_default()).Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "createMarkup", () => {
      return {
        __html: this.props.blog.html
      };
    });
  }

  render() {
    return _name_jsx("div", null, _name_jsx((head_default()), null, _name_jsx("title", null, "Kreditkortskoll.com | ", this.props.blog.name), _name_jsx("meta", {
      name: "description",
      content: "Kreditkortskoll.com j\xE4mf\xF6r olika kreditkort f\xF6r att hitta det b\xE4sta kredikortet f\xF6r dig. J\xE4mf\xF6r kreditkort som Remember flex och Norwegian"
    }), _name_jsx("meta", {
      name: "robots",
      content: "index, follow"
    })), _name_jsx(Header_Header, {
      name: this.props.blog.name,
      description: this.props.blog.description
    }), _name_jsx("main", null, _name_jsx(external_react_grid_system_.Container, null, _name_jsx("div", {
      dangerouslySetInnerHTML: this.createMarkup()
    }))));
  }

}

async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await (0,Blog/* getBlogs */._)();
  const blogs = res.blogs;
  if (!blogs) throw new Error(); // Get the paths we want to pre-render based on posts

  const paths = blogs.map(blog => ({
    params: {
      name: blog.name
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
    const res = await (0,Blog/* getBlog */.x)(name);
    if (res.error) throw new Error();
    return {
      props: {
        blog: res.blog
      },
      revalidate: 3600 * 4
    };
  } catch (error) {
    return {
      redirect: {
        destination: '/artiklar',
        permanent: false
      }
    };
  }
};
/* harmony default export */ var _name_ = (IndexPage);

/***/ }),

/***/ 3210:
/***/ (function(module) {

// Exports
module.exports = {
	"Header": "Header_Header__1NAFo"
};


/***/ }),

/***/ 3287:
/***/ (function(module) {

// Exports
module.exports = {
	"TextHeader": "TextHeader_TextHeader__1I3me",
	"HeadingTitle": "TextHeader_HeadingTitle__3Qgx_",
	"moveInRight": "TextHeader_moveInRight__o07jm",
	"HeadingDescription": "TextHeader_HeadingDescription__1A0f2",
	"moveInLeft": "TextHeader_moveInLeft__1oIZi"
};


/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [976], function() { return __webpack_exec__(3324); });
module.exports = __webpack_exports__;

})();