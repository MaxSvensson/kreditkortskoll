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
var _jsxFileName = "D:\\kredit\\client\\src\\components\\Blog\\Header\\Header.tsx";
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
var _jsxFileName = "D:\\kredit\\client\\src\\components\\Blog\\Header\\TextHeader\\TextHeader.tsx";
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
var _jsxFileName = "D:\\kredit\\client\\src\\components\\Blog\\Post\\Post.tsx";

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
var _jsxFileName = "D:\\kredit\\client\\src\\pages\\artiklar.tsx";
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
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_babel_runtime_helpers_interopRequireDefault_js-node_modules_next_dist_cl-3e6c6e","vendors-node_modules_next_link_js","src_hoc_Container_Container_tsx-src_resources_Blog_ts"], function() { return __webpack_exec__("./src/pages/artiklar.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9CbG9nL0hlYWRlci9IZWFkZXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL0Jsb2cvSGVhZGVyL1RleHRIZWFkZXIvVGV4dEhlYWRlci50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvQmxvZy9Qb3N0L1Bvc3QudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9wYWdlcy9hcnRpa2xhci50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvQmxvZy9IZWFkZXIvSGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvQmxvZy9IZWFkZXIvVGV4dEhlYWRlci9UZXh0SGVhZGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbXBvbmVudHMvQmxvZy9Qb3N0L1Bvc3QubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcInJlYWN0LWdyaWQtc3lzdGVtXCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvaWdub3JlZHxEOlxca3JlZGl0XFxjbGllbnRcXG5vZGVfbW9kdWxlc1xcbmV4dFxcZGlzdFxcbmV4dC1zZXJ2ZXJcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJzdHlsZXMiLCJUZXh0SGVhZGVyIiwiUG9zdCIsImJsb2ciLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJwdXNoIiwibmFtZSIsImltZ1VybCIsIkluZGV4UGFnZSIsIlJlYWN0IiwicmVuZGVyIiwicHJvcHMiLCJibG9ncyIsIm1hcCIsImdldFN0YXRpY1Byb3BzIiwicmVzcG9uc2VzIiwiZ2V0QmxvZ3MiLCJlcnJvciIsIkVycm9yIiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQTs7QUFFQSxNQUFNQSxNQUFnQyxHQUFHLE1BQW9CO0FBQ3pELFNBQU87QUFBSyxNQUFFLEVBQUVDLGtFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQyxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDUSxNQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEUixDQURELENBQVA7QUFLSCxDQU5EOztBQVNBLCtEQUFlRCxNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBOztBQUVBLE1BQU1FLFVBQW9DLEdBQUcsTUFBb0I7QUFDN0QsU0FBTztBQUFLLE1BQUUsRUFBRUQsMEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNIO0FBQUssTUFBRSxFQUFFQSw0RUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFESixDQURHLENBQVA7QUFRSCxDQVREOztBQVdBLCtEQUFlQyxVQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUVBOztBQU1BLE1BQU1DLElBQXNCLEdBQUcsQ0FBQztBQUFDQztBQUFELENBQUQsS0FBWTtBQUN2QyxRQUFNQyxNQUFNLEdBQUdDLHNEQUFTLEVBQXhCO0FBQ0EsU0FBTztBQUFLLFdBQU8sRUFBRSxNQUFNRCxNQUFNLENBQUNFLElBQVAsQ0FBYSxhQUFZSCxJQUFJLENBQUNJLElBQUssRUFBbkMsQ0FBcEI7QUFBMkQsTUFBRSxFQUFFUCw4REFBL0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNIO0FBQUssTUFBRSxFQUFFQSw2REFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFDSSxPQUFHLEVBQUVHLElBQUksQ0FBQ0ssTUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FERyxFQU1IO0FBQUssTUFBRSxFQUFFUixpRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLRyxJQUFJLENBQUNJLElBQVYsQ0FESixFQUVJLE1BQUMsa0RBQUQ7QUFBTSxRQUFJLEVBQUcsYUFBWUosSUFBSSxDQUFDSSxJQUFLLEVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLENBRkosQ0FORyxDQUFQO0FBYUgsQ0FmRDs7QUFpQkEsK0RBQWVMLElBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQU9BLE1BQU1PLFNBQU4sU0FBd0JDLHdEQUF4QixDQUFnRDtBQUM5Q0MsUUFBTSxHQUFJO0FBQ1YsV0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0wsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FERixFQUVFO0FBQU0sVUFBSSxFQUFDLGFBQVg7QUFBeUIsYUFBTyxFQUFDLGlLQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsRUFHRTtBQUFNLFVBQUksRUFBQyxRQUFYO0FBQW9CLGFBQU8sRUFBQyxlQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsQ0FESyxFQU1ILE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5HLEVBT0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsd0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLEtBQUtDLEtBQUwsQ0FBV0MsS0FBWCxDQUFpQkMsR0FBakIsQ0FBcUJYLElBQUksSUFBSTtBQUM5QixhQUFPLE1BQUMsa0RBQUQ7QUFBSyxVQUFFLEVBQUUsRUFBVDtBQUFhLFVBQUUsRUFBRSxDQUFqQjtBQUFvQixVQUFFLEVBQUUsQ0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNKLE1BQUMsK0RBQUQ7QUFBTSxZQUFJLEVBQUVBLElBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURJLENBQVA7QUFHQyxLQUpBLENBREYsQ0FERixDQURGLENBUEcsQ0FBUDtBQW9CQzs7QUF0QjZDOztBQTRCekMsZUFBZVksY0FBZixHQUFnQztBQUVyQyxNQUFJO0FBRUYsUUFBSUMsU0FBUyxHQUFHLE1BQU1DLHlEQUFRLEVBQTlCO0FBRUEsUUFBR0QsU0FBUyxDQUFDRSxLQUFiLEVBQW9CLE1BQU0sSUFBSUMsS0FBSixDQUFVLGdCQUFWLENBQU47QUFFcEIsV0FBTztBQUNMUCxXQUFLLEVBQUc7QUFDTkMsYUFBSyxFQUFFRyxTQUFTLENBQUNIO0FBRFgsT0FESDtBQUlMTyxnQkFBVSxFQUFFLE9BQU87QUFKZCxLQUFQO0FBTUQsR0FaRCxDQVlFLE9BQU9GLEtBQVAsRUFBYztBQUNkLFdBQU87QUFDTE4sV0FBSyxFQUFFO0FBQ0xDLGFBQUssRUFBRztBQURILE9BREY7QUFJTE8sZ0JBQVUsRUFBRSxPQUFPO0FBSmQsS0FBUDtBQU1EO0FBRUY7QUFFRCwrREFBZVgsU0FBZixFOzs7Ozs7Ozs7O0FDakVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTEEsbUM7Ozs7Ozs7Ozs7O0FDQUEseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2FydGlrbGFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi8uLi9ob2MvQ29udGFpbmVyL0NvbnRhaW5lcic7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBUZXh0SGVhZGVyIGZyb20gJy4vVGV4dEhlYWRlci9UZXh0SGVhZGVyJztcclxuXHJcbmNvbnN0IEhlYWRlciA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCkgOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBpZD17c3R5bGVzLkhlYWRlcn0+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRIZWFkZXIgLz4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9UZXh0SGVhZGVyLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgVGV4dEhlYWRlciA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKCkgOiBKU1guRWxlbWVudCA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBpZD17c3R5bGVzLlRleHRIZWFkZXJ9PlxyXG4gICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5IZWFkaW5nVGl0bGV9PlxyXG4gICAgICAgICAgICA8aDE+VsOlcmEgYXJ0aWtsYXI8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiA8ZGl2IGlkPXtzdHlsZXMuSGVhZGluZ0Rlc2NyaXB0aW9ufT5cclxuICAgICAgICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERlYml0aXMgcmVwZWxsYXQgbm9uIHJlaWNpZW5kaXMgZGVzZXJ1bnQgZGlnbmlzc2ltb3MgYXQgc3VzY2lwaXQgcXVhcyBzYWVwZSBibGFuZGl0aWlzLCBvYmNhZWNhdGkgZXZlbmlldCByYXRpb25lIGEgbW9kaSBjb25zZWN0ZXR1ciBzaXQgZW9zIGVhcXVlIGRvbG9yaWJ1cyBkb2xvcmU/PC9wPlxyXG4gICAgICAgIDwvZGl2PiAqL31cclxuPC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRIZWFkZXI7IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1Bvc3QubW9kdWxlLmNzcyc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IEJsb2cgfSBmcm9tICcuLi8uLi8uLi9pbnRlcmZhY2VzL0Jsb2cnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICBibG9nOiBCbG9nXHJcbn1cclxuXHJcbmNvbnN0IFBvc3QgOiBSZWFjdC5GQzxQcm9wcz4gPSAoe2Jsb2d9KSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgcmV0dXJuIDxkaXYgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9hcnRpa2xhci8ke2Jsb2cubmFtZX1gKX0gaWQ9e3N0eWxlcy5Qb3N0fT5cclxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMudG9wfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgc3JjPXtibG9nLmltZ1VybH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuY29udGVudH0+IFxyXG4gICAgICAgICAgICA8aDM+e2Jsb2cubmFtZX08L2gzPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2FydGlrbGFyLyR7YmxvZy5uYW1lfWB9PlxyXG4gICAgICAgICAgICAgICAgPGE+TMOkcyBtZXI8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0Jsb2cvSGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBQb3N0IGZyb20gJy4uL2NvbXBvbmVudHMvQmxvZy9Qb3N0L1Bvc3QnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIFJvdywgQ29sIH0gZnJvbSAncmVhY3QtZ3JpZC1zeXN0ZW0nO1xyXG5pbXBvcnQgeyBnZXRCbG9ncyB9IGZyb20gJy4uL3Jlc291cmNlcy9CbG9nJztcclxuaW1wb3J0IHsgQmxvZyB9IGZyb20gJy4uL2ludGVyZmFjZXMvQmxvZyc7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gICBibG9nczogQmxvZ1tdXHJcbn1cclxuXHJcbmNsYXNzIEluZGV4UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4gIHtcclxuICByZW5kZXIgKCkge1xyXG4gIHJldHVybiA8ZGl2PlxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5LcmVkaXRrb3J0c2tvbGwuY29tIHwgQXJ0aWtsYXI8L3RpdGxlPlxyXG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiS3JlZGl0a29ydHNrb2xsLmNvbSBqw6RtZsO2ciBvbGlrYSBrcmVkaXRrb3J0IGbDtnIgYXR0IGhpdHRhIGRldCBiw6RzdGEga3JlZGlrb3J0ZXQgZsO2ciBkaWcuIErDpG1mw7ZyIGtyZWRpdGtvcnQgc29tIFJlbWVtYmVyIGZsZXggb2NoIE5vcndlZ2lhblwiIC8+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJyb2JvdHNcIiBjb250ZW50PVwiaW5kZXgsIGZvbGxvd1wiIC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxSb3cgPlxyXG4gICAgICAgICAgIHt0aGlzLnByb3BzLmJsb2dzLm1hcChibG9nID0+IHtcclxuICAgICAgICAgICByZXR1cm4gPENvbCBzbT17MTJ9IG1kPXs2fSBsZz17NH0+XHJcbiAgICAgICAgICAgICAgPFBvc3QgYmxvZz17YmxvZ30gLz5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICB7LyogPERpc3BsYXlDYXJkcyBjcmVkaXRDYXJkcz17dGhpcy5zdGF0ZS5jYXJkc30gLz4gICovfVxyXG4gIDwvZGl2PlxyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG5cclxuICB0cnkge1xyXG5cclxuICAgIGxldCByZXNwb25zZXMgPSBhd2FpdCBnZXRCbG9ncygpIGFzIHtibG9nczogQmxvZ1tdLCBlcnJvcjogYm9vbGVhbn07XHJcblxyXG4gICAgaWYocmVzcG9uc2VzLmVycm9yKSB0aHJvdyBuZXcgRXJyb3IoXCJObyBibG9ncyBmb3VuZFwiKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzIDoge1xyXG4gICAgICAgIGJsb2dzOiByZXNwb25zZXMuYmxvZ3MsXHJcbiAgICAgIH0sXHJcbiAgICAgIHJldmFsaWRhdGU6IDM2MDAgKiA0XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgYmxvZ3MgOiBbXSxcclxuICAgICAgfSxcclxuICAgICAgcmV2YWxpZGF0ZTogMzYwMCAqIDRcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2VcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiSGVhZGVyXCI6IFwiSGVhZGVyX0hlYWRlcl9fMnpFOEtcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIlRleHRIZWFkZXJcIjogXCJUZXh0SGVhZGVyX1RleHRIZWFkZXJfXzJNeFgxXCIsXG5cdFwiSGVhZGluZ1RpdGxlXCI6IFwiVGV4dEhlYWRlcl9IZWFkaW5nVGl0bGVfX0R6YzVWXCIsXG5cdFwibW92ZUluUmlnaHRcIjogXCJUZXh0SGVhZGVyX21vdmVJblJpZ2h0X19MaEotN1wiLFxuXHRcIm1vdmVJbkxlZnRcIjogXCJUZXh0SGVhZGVyX21vdmVJbkxlZnRfX0ZEcWFsXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJQb3N0XCI6IFwiUG9zdF9Qb3N0X18yaFlHdlwiLFxuXHRcInRvcFwiOiBcIlBvc3RfdG9wX19ocGN1UVwiLFxuXHRcImNvbnRlbnRcIjogXCJQb3N0X2NvbnRlbnRfXzNibmdtXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWdyaWQtc3lzdGVtXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==