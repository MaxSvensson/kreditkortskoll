(function() {
var exports = {};
exports.id = "pages/artiklar";
exports.ids = ["pages/artiklar"];
exports.modules = {

/***/ "./src/components/Blog/Header/Header.tsx":
/*!***********************************************!*\
  !*** ./src/components/Blog/Header/Header.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.module.css */ "./src/components/Blog/Header/Header.module.css");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hoc_Container_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hoc/Container/Container */ "./src/hoc/Container/Container.tsx");
/* harmony import */ var _TextHeader_TextHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextHeader/TextHeader */ "./src/components/Blog/Header/TextHeader/TextHeader.tsx");
var _jsxFileName = "D:\\Kreditkortskoll\\Client\\src\\components\\Blog\\Header\\Header.tsx";
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
      columnNumber: 21
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Blog/Header/TextHeader/TextHeader.tsx":
/*!**************************************************************!*\
  !*** ./src/components/Blog/Header/TextHeader/TextHeader.tsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextHeader.module.css */ "./src/components/Blog/Header/TextHeader/TextHeader.module.css");
/* harmony import */ var _TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Kreditkortskoll\\Client\\src\\components\\Blog\\Header\\TextHeader\\TextHeader.tsx";
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
  }, "V\xE5ra artiklar")));
};

/* harmony default export */ __webpack_exports__["default"] = (TextHeader);

/***/ }),

/***/ "./src/components/Blog/Post/Post.tsx":
/*!*******************************************!*\
  !*** ./src/components/Blog/Post/Post.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Post_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Post.module.css */ "./src/components/Blog/Post/Post.module.css");
/* harmony import */ var _Post_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Post_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Kreditkortskoll\\Client\\src\\components\\Blog\\Post\\Post.tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);




const Post = ({
  blog
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  return __jsx("div", {
    onClick: () => router.push(`/artiklar/${blog.name}`),
    id: (_Post_module_css__WEBPACK_IMPORTED_MODULE_3___default().Post),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 12
    }
  }, __jsx("div", {
    id: (_Post_module_css__WEBPACK_IMPORTED_MODULE_3___default().top),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: blog.imgUrl,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  })), __jsx("div", {
    id: (_Post_module_css__WEBPACK_IMPORTED_MODULE_3___default().content),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, blog.name), __jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
    href: `/artiklar/${blog.name}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "L\xE4s mer"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./src/config/axios.ts":
/*!*****************************!*\
  !*** ./src/config/axios.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: 'https://kreditkortskollapi.ew.r.appspot.com/'
});
/* harmony default export */ __webpack_exports__["default"] = (instance);

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

/***/ "./src/pages/artiklar.tsx":
/*!********************************!*\
  !*** ./src/pages/artiklar.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Blog_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Blog/Header/Header */ "./src/components/Blog/Header/Header.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Blog_Post_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Blog/Post/Post */ "./src/components/Blog/Post/Post.tsx");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _resources_Blog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../resources/Blog */ "./src/resources/Blog.ts");
var _jsxFileName = "D:\\Kreditkortskoll\\Client\\src\\pages\\artiklar.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);







class IndexPage extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 10
      }
    }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    }, "Kreditkortskoll.com | Artiklar"), __jsx("meta", {
      name: "description",
      content: "Kreditkortskoll.com j\xE4mf\xF6r olika kreditkort f\xF6r att hitta det b\xE4sta kredikortet f\xF6r dig. J\xE4mf\xF6r kreditkort som Remember flex och Norwegian",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }), __jsx("meta", {
      name: "robots",
      content: "index, follow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }
    })), __jsx(_components_Blog_Header_Header__WEBPACK_IMPORTED_MODULE_1__.default, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }), __jsx("main", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_4__.Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }
    }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_4__.Row, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 11
      }
    }, this.props.blogs.map(blog => {
      return __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_4__.Col, {
        sm: 12,
        md: 6,
        lg: 4,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 19
        }
      }, __jsx(_components_Blog_Post_Post__WEBPACK_IMPORTED_MODULE_3__.default, {
        blog: blog,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 15
        }
      }));
    })))));
  }

}

async function getStaticProps() {
  try {
    let responses = await (0,_resources_Blog__WEBPACK_IMPORTED_MODULE_5__.getBlogs)();
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
/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./src/resources/Blog.ts":
/*!*******************************!*\
  !*** ./src/resources/Blog.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBlogs": function() { return /* binding */ getBlogs; },
/* harmony export */   "getBlog": function() { return /* binding */ getBlog; }
/* harmony export */ });
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/axios */ "./src/config/axios.ts");

const getBlogs = async () => {
  try {
    // Fetching cards
    const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__.default.get(`/blog`);
    console.log(res);
    let blogs = res.data; // Check for cards

    if (!blogs) throw new Error(); // Return cards

    return {
      blogs,
      error: false
    };
  } catch (error) {
    // Error, return
    return {
      error: true
    };
  }
};
const getBlog = async name => {
  try {
    // Fetching cards
    const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__.default.get(`/blog`);
    let blogs = res.data;
    const blog = blogs.find(blog => blog.name === name); // Check for cards

    if (!blog) throw new Error(); // Return cards

    return {
      blog,
      error: false
    };
  } catch (error) {
    // Error, return
    return {
      error: true
    };
  }
};

/***/ }),

/***/ "./src/components/Blog/Header/Header.module.css":
/*!******************************************************!*\
  !*** ./src/components/Blog/Header/Header.module.css ***!
  \******************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"Header": "Header_Header__2zE8K"
};


/***/ }),

/***/ "./src/components/Blog/Header/TextHeader/TextHeader.module.css":
/*!*********************************************************************!*\
  !*** ./src/components/Blog/Header/TextHeader/TextHeader.module.css ***!
  \*********************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"TextHeader": "TextHeader_TextHeader__2MxX1",
	"HeadingTitle": "TextHeader_HeadingTitle__Dzc5V",
	"moveInRight": "TextHeader_moveInRight__LhJ-7",
	"moveInLeft": "TextHeader_moveInLeft__FDqal"
};


/***/ }),

/***/ "./src/components/Blog/Post/Post.module.css":
/*!**************************************************!*\
  !*** ./src/components/Blog/Post/Post.module.css ***!
  \**************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"Post": "Post_Post__2hYGv",
	"top": "Post_top__hpcuQ",
	"content": "Post_content__3bngm"
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

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_interopRequireDefault_js-node_modules_next_dist_cl-3e6c6e","vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./src/pages/artiklar.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9CbG9nL0hlYWRlci9IZWFkZXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0Jsb2cvSGVhZGVyL1RleHRIZWFkZXIvVGV4dEhlYWRlci50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvQmxvZy9Qb3N0L1Bvc3QudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb25maWcvYXhpb3MudHMiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2hvYy9Db250YWluZXIvQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvcGFnZXMvYXJ0aWtsYXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9yZXNvdXJjZXMvQmxvZy50cyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9CbG9nL0hlYWRlci9IZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9CbG9nL0hlYWRlci9UZXh0SGVhZGVyL1RleHRIZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9CbG9nL1Bvc3QvUG9zdC5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9ob2MvQ29udGFpbmVyL0NvbnRhaW5lci5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwicmVhY3QtZ3JpZC1zeXN0ZW1cIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9pZ25vcmVkfEQ6XFxLcmVkaXRrb3J0c2tvbGxcXENsaWVudFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkhlYWRlciIsInN0eWxlcyIsIlRleHRIZWFkZXIiLCJQb3N0IiwiYmxvZyIsInJvdXRlciIsInVzZVJvdXRlciIsInB1c2giLCJuYW1lIiwiaW1nVXJsIiwiaW5zdGFuY2UiLCJheGlvcyIsImJhc2VVUkwiLCJDb250YWluZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwiSW5kZXhQYWdlIiwiUmVhY3QiLCJyZW5kZXIiLCJibG9ncyIsIm1hcCIsImdldFN0YXRpY1Byb3BzIiwicmVzcG9uc2VzIiwiZ2V0QmxvZ3MiLCJlcnJvciIsIkVycm9yIiwicmV2YWxpZGF0ZSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZ2V0QmxvZyIsImZpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7O0FBQ0E7O0FBRUEsTUFBTUEsTUFBZ0MsR0FBRyxN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QUFQLEVBQWM7QUFFZDtBQUNBLFdBQU87QUFDTEEsV0FBSyxFQUFFO0FBREYsS0FBUDtBQUlEO0FBQ0YsQ0F6Qk0sQzs7Ozs7Ozs7OztBQzVCUDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBLG1DOzs7Ozs7Ozs7OztBQ0FBLHlFOzs7Ozs7Ozs7OztBQ0FBLGlHOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7O0FDQUEsZSIsImZpbGUiOiJwYWdlcy9hcnRpa2xhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9IZWFkZXIubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vLi4vaG9jL0NvbnRhaW5lci9Db250YWluZXInO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgVGV4dEhlYWRlciBmcm9tICcuL1RleHRIZWFkZXIvVGV4dEhlYWRlcic7XHJcblxyXG5jb25zdCBIZWFkZXIgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICgpIDogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5IZWFkZXJ9PlxyXG4gICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0SGVhZGVyIC8+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vVGV4dEhlYWRlci5tb2R1bGUuY3NzJztcclxuXHJcbmNvbnN0IFRleHRIZWFkZXIgOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICgpIDogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5UZXh0SGVhZGVyfT5cclxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuSGVhZGluZ1RpdGxlfT5cclxuICAgICAgICAgICAgPGgxPlbDpXJhIGFydGlrbGFyPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogPGRpdiBpZD17c3R5bGVzLkhlYWRpbmdEZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEZWJpdGlzIHJlcGVsbGF0IG5vbiByZWljaWVuZGlzIGRlc2VydW50IGRpZ25pc3NpbW9zIGF0IHN1c2NpcGl0IHF1YXMgc2FlcGUgYmxhbmRpdGlpcywgb2JjYWVjYXRpIGV2ZW5pZXQgcmF0aW9uZSBhIG1vZGkgY29uc2VjdGV0dXIgc2l0IGVvcyBlYXF1ZSBkb2xvcmlidXMgZG9sb3JlPzwvcD5cclxuICAgICAgICA8L2Rpdj4gKi99XHJcbjwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0SGVhZGVyOyIsImltcG9ydCBzdHlsZXMgZnJvbSAnLi9Qb3N0Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBCbG9nIH0gZnJvbSAnLi4vLi4vLi4vaW50ZXJmYWNlcy9CbG9nJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICAgYmxvZzogQmxvZ1xyXG59XHJcblxyXG5jb25zdCBQb3N0IDogUmVhY3QuRkM8UHJvcHM+ID0gKHtibG9nfSkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIHJldHVybiA8ZGl2IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvYXJ0aWtsYXIvJHtibG9nLm5hbWV9YCl9IGlkPXtzdHlsZXMuUG9zdH0+XHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLnRvcH0+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIHNyYz17YmxvZy5pbWdVcmx9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLmNvbnRlbnR9PiBcclxuICAgICAgICAgICAgPGgzPntibG9nLm5hbWV9PC9oMz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9hcnRpa2xhci8ke2Jsb2cubmFtZX1gfT5cclxuICAgICAgICAgICAgICAgIDxhPkzDpHMgbWVyPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdCIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnaHR0cHM6Ly9rcmVkaXRrb3J0c2tvbGxhcGkuZXcuci5hcHBzcG90LmNvbS8nLFxyXG5cclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbnRhaW5lci5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcbmNvbnN0IENvbnRhaW5lciA6IFJlYWN0LkZDID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBpZD17c3R5bGVzLkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0Jsb2cvSGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvQmxvZy9Qb3N0L1Bvc3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtZ3JpZC1zeXN0ZW0nO1xyXG5pbXBvcnQgeyBnZXRCbG9ncyB9IGZyb20gJy4uL3Jlc291cmNlcy9CbG9nJztcclxuaW1wb3J0IHsgQmxvZyB9IGZyb20gJy4uL2ludGVyZmFjZXMvQmxvZyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICBibG9nczogQmxvZ1tdXHJcbn1cclxuXHJcbmNsYXNzIEluZGV4UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4gIHtcclxuICByZW5kZXIgKCkge1xyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5LcmVkaXRrb3J0c2tvbGwuY29tIHwgQXJ0aWtsYXI8L3RpdGxlPlxyXG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiS3JlZGl0a29ydHNrb2xsLmNvbSBqw6RtZsO2ciBvbGlrYSBrcmVkaXRrb3J0IGbDtnIgYXR0IGhpdHRhIGRldCBiw6RzdGEga3JlZGlrb3J0ZXQgZsO2ciBkaWcuIErDpG1mw7ZyIGtyZWRpdGtvcnQgc29tIFJlbWVtYmVyIGZsZXggb2NoIE5vcndlZ2lhblwiIC8+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwiaW5kZXgsIGZvbGxvd1wiIC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxSb3cgPlxyXG4gICAgICAgICAgIHt0aGlzLnByb3BzLmJsb2dzLm1hcChibG9nID0+IHtcclxuICAgICAgICAgICByZXR1cm4gPENvbCBzbT17MTJ9IG1kPXs2fSBsZz17NH0+XHJcbiAgICAgICAgICAgICAgPFBvc3QgYmxvZz17YmxvZ30gLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICB7LyogPERpc3BsYXlDYXJkcyBjcmVkaXRDYXJkcz17dGhpcy5zdGF0ZS5jYXJkc30gLz4gICovfVxyXG4gIDwvZGl2PlxyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGxldCByZXNwb25zZXMgPSBhd2FpdCBnZXRCbG9ncygpIGFzIHtibG9nczogQmxvZ1tdLCBlcnJvcjogYm9vbGVhbn07XHJcblxyXG4gICAgaWYocmVzcG9uc2VzLmVycm9yKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBibG9ncyBmb3VuZFwiKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzIDoge1xyXG4gICAgICAgIGJsb2dzOiByZXNwb25zZXMuYmxvZ3MsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJldmFsaWRhdGU6IDM2MDAgKiA0XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgYmxvZ3MgOiBbXSxcclxuICAgICAgfSxcclxuICAgICAgcmV2YWxpZGF0ZTogMzYwMCAqIDRcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2VcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJy4uL2NvbmZpZy9heGlvcyc7XHJcbmltcG9ydCB7IEJsb2cgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0Jsb2cnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEJsb2dzID0gYXN5bmMgKCkgOiBQcm9taXNlPHtibG9ncz8gOiBCbG9nW10sIGVycm9yPyA6IGJvb2xlYW59PiA9PiB7IFxyXG4gIHRyeSB7XHJcbiAgICAvLyBGZXRjaGluZyBjYXJkc1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAvYmxvZ2ApO1xyXG4gICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgbGV0IGJsb2dzID0gcmVzLmRhdGEgYXMgQmxvZ1tdO1xyXG5cclxuICAgIC8vIENoZWNrIGZvciBjYXJkc1xyXG4gICAgaWYoIWJsb2dzKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuXHJcbiAgICAvLyBSZXR1cm4gY2FyZHNcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYmxvZ3MsXHJcbiAgICAgICAgZXJyb3I6ZmFsc2VcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgIC8vIEVycm9yLCByZXR1cm5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yOiB0cnVlXHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEJsb2cgPSBhc3luYyAobmFtZSA6IHN0cmluZykgOiBQcm9taXNlPHtibG9nPyA6IEJsb2csIGVycm9yPyA6IGJvb2xlYW59PiA9PiB7IFxyXG4gIHRyeSB7XHJcblxyXG4gICAgLy8gRmV0Y2hpbmcgY2FyZHNcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgL2Jsb2dgKTtcclxuICAgIGxldCBibG9ncyA9IHJlcy5kYXRhIGFzIEJsb2dbXTtcclxuXHJcbiAgICBjb25zdCBibG9nID0gYmxvZ3MuZmluZChibG9nID0+IGJsb2cubmFtZSA9PT0gbmFtZSlcclxuXHJcbiAgICAvLyBDaGVjayBmb3IgY2FyZHNcclxuICAgIGlmKCFibG9nKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuXHJcbiAgICAvLyBSZXR1cm4gY2FyZHNcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgYmxvZyxcclxuICAgICAgICBlcnJvcjpmYWxzZVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgLy8gRXJyb3IsIHJldHVyblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3I6IHRydWVcclxuICAgIH1cclxuXHJcbiAgfVxyXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiSGVhZGVyXCI6IFwiSGVhZGVyX0hlYWRlcl9fMnpFOEtcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlRleHRIZWFkZXJcIjogXCJUZXh0SGVhZGVyX1RleHRIZWFkZXJfXzJNeFgxXCIsXG5cdFwiSGVhZGluZ1RpdGxlXCI6IFwiVGV4dEhlYWRlcl9IZWFkaW5nVGl0bGVfX0R6YzVWXCIsXG5cdFwibW92ZUluUmlnaHRcIjogXCJUZXh0SGVhZGVyX21vdmVJblJpZ2h0X19MaEotN1wiLFxuXHRcIm1vdmVJbkxlZnRcIjogXCJUZXh0SGVhZGVyX21vdmVJbkxlZnRfX0ZEcWFsXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJQb3N0XCI6IFwiUG9zdF9Qb3N0X18yaFlHdlwiLFxuXHRcInRvcFwiOiBcIlBvc3RfdG9wX19ocGN1UVwiLFxuXHRcImNvbnRlbnRcIjogXCJQb3N0X2NvbnRlbnRfXzNibmdtXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJDb250YWluZXJcIjogXCJDb250YWluZXJfQ29udGFpbmVyX18yRmlQVFwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ncmlkLXN5c3RlbVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIi8qIChpZ25vcmVkKSAqLyJdLCJzb3VyY2VSb290IjoiIn0=