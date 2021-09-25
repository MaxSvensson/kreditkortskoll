(function() {
var exports = {};
exports.id = "pages/artiklar/[name]";
exports.ids = ["pages/artiklar/[name]"];
exports.modules = {

/***/ "./src/components/Post/Header/Header.tsx":
/*!***********************************************!*\
  !*** ./src/components/Post/Header/Header.tsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header.module.css */ "./src/components/Post/Header/Header.module.css");
/* harmony import */ var _Header_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Header_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hoc_Container_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hoc/Container/Container */ "./src/hoc/Container/Container.tsx");
/* harmony import */ var _TextHeader_TextHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextHeader/TextHeader */ "./src/components/Post/Header/TextHeader/TextHeader.tsx");
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\Post\\Header\\Header.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


 // Components



const Header = ({
  name,
  description
}) => {
  return __jsx("div", {
    id: (_Header_module_css__WEBPACK_IMPORTED_MODULE_3___default().Header),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 12
    }
  }, __jsx(_hoc_Container_Container__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx(_TextHeader_TextHeader__WEBPACK_IMPORTED_MODULE_2__.default, {
    name: name,
    description: description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Post/Header/TextHeader/TextHeader.tsx":
/*!**************************************************************!*\
  !*** ./src/components/Post/Header/TextHeader/TextHeader.tsx ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextHeader.module.css */ "./src/components/Post/Header/TextHeader/TextHeader.module.css");
/* harmony import */ var _TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\components\\Post\\Header\\TextHeader\\TextHeader.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const TextHeader = ({
  name,
  description
}) => {
  return __jsx("div", {
    id: (_TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().TextHeader),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 12
    }
  }, __jsx("div", {
    id: (_TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().HeadingTitle),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, name)), __jsx("div", {
    id: (_TextHeader_module_css__WEBPACK_IMPORTED_MODULE_1___default().HeadingDescription),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, description)));
};

/* harmony default export */ __webpack_exports__["default"] = (TextHeader);

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
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\hoc\\Container\\Container.tsx";
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

/***/ "./src/pages/artiklar/[name].tsx":
/*!***************************************!*\
  !*** ./src/pages/artiklar/[name].tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Post_Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Post/Header/Header */ "./src/components/Post/Header/Header.tsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-grid-system */ "react-grid-system");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_grid_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _resources_Blog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../resources/Blog */ "./src/resources/Blog.ts");
var _jsxFileName = "C:\\Users\\maximilian.svensso1\\Desktop\\kreditkortskoll\\client\\src\\pages\\artiklar\\[name].tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class IndexPage extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "createMarkup", () => {
      return {
        __html: this.props.blog.html
      };
    });
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 10
      }
    }, __jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 5
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }, "Kreditkortskoll.com | ", this.props.blog.name), __jsx("meta", {
      name: "description",
      content: "Kreditkortskoll.com j\xE4mf\xF6r olika kreditkort f\xF6r att hitta det b\xE4sta kredikortet f\xF6r dig. J\xE4mf\xF6r kreditkort som Remember flex och Norwegian",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }), __jsx("meta", {
      name: "robots",
      content: "index, follow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }
    })), __jsx(_components_Post_Header_Header__WEBPACK_IMPORTED_MODULE_1__.default, {
      name: this.props.blog.name,
      description: this.props.blog.description,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }
    }), __jsx("main", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, __jsx(react_grid_system__WEBPACK_IMPORTED_MODULE_3__.Container, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }
    }, __jsx("div", {
      dangerouslySetInnerHTML: this.createMarkup(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }))));
  }

}

async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await (0,_resources_Blog__WEBPACK_IMPORTED_MODULE_4__.getBlogs)();
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
    const res = await (0,_resources_Blog__WEBPACK_IMPORTED_MODULE_4__.getBlog)(name);
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

/***/ "./src/components/Post/Header/Header.module.css":
/*!******************************************************!*\
  !*** ./src/components/Post/Header/Header.module.css ***!
  \******************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"Header": "Header_Header__1NAFo"
};


/***/ }),

/***/ "./src/components/Post/Header/TextHeader/TextHeader.module.css":
/*!*********************************************************************!*\
  !*** ./src/components/Post/Header/TextHeader/TextHeader.module.css ***!
  \*********************************************************************/
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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/artiklar/[name].tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9Qb3N0L0hlYWRlci9IZWFkZXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1Bvc3QvSGVhZGVyL1RleHRIZWFkZXIvVGV4dEhlYWRlci50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL2NvbmZpZy9heGlvcy50cyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvaG9jL0NvbnRhaW5lci9Db250YWluZXIudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9wYWdlcy9hcnRpa2xhci9bbmFtZV0udHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9yZXNvdXJjZXMvQmxvZy50cyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9Qb3N0L0hlYWRlci9IZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9Qb3N0L0hlYWRlci9UZXh0SGVhZGVyL1RleHRIZWFkZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvaG9jL0NvbnRhaW5lci9Db250YWluZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwicmVhY3QtZ3JpZC1zeXN0ZW1cIiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJzdHlsZXMiLCJUZXh0SGVhZGVyIiwiaW5zdGFuY2UiLCJheGlvcyIsImJhc2VVUkwiLCJDb250YWluZXIiLCJwcm9wcyIsImNoaWxkcmVuIiwiSW5kZXhQYWdlIiwiUmVhY3QiLCJfX2h0bWwiLCJibG9nIiwiaHRtbCIsInJlbmRlciIsImNyZWF0ZU1hcmt1cCIsImdldFN0YXRpY1BhdGhzIiwicmVzIiwiZ2V0QmxvZ3MiLCJibG9ncyIsIkVycm9yIiwicGF0aHMiLCJtYXAiLCJwYXJhbXMiLCJmYWxsYmFjayIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCIsImdldEJsb2ciLCJlcnJvciIsInJldmFsaWRhdGUiLCJyZWRpcmVjdCIsImRlc3RpbmF0aW9uIiwicGVybWFuZW50IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJmaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBOztBQUNBOztBQU9BLE1BQU1BLE1BQXdCLEdBQUcsQ0FBQztBQUFDQyxNQUFEO0FBQU9DO0FBQVAsQ0FBRCxLQUF1QztBQUNwRSxTQUFPO0FBQUssTUFBRSxFQUFFQyxrRUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywyREFBRDtBQUFZLFFBQUksRUFBRUYsSUFBbEI7QUFBd0IsZUFBVyxFQUFFQyxXQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FERCxDQUFQO0FBS0gsQ0FORDs7QUFTQSwrREFBZUYsTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQTs7QUFTQSxNQUFNSSxVQUE0QixHQUFHLENBQUM7QUFBQ0gsTUFBRDtBQUFPQztBQUFQLENBQUQsS0FBdUM7QUFDeEUsU0FBTztBQUFLLE1BQUUsRUFBRUMsMEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNIO0FBQUssTUFBRSxFQUFFQSw0RUFBVDtBQUFB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RUFBQztBQUZILEtBQVA7QUFJRCxHQWRELENBY0UsT0FBT0EsS0FBUCxFQUFjO0FBRWQ7QUFDQSxXQUFPO0FBQ0xBLFdBQUssRUFBRTtBQURGLEtBQVA7QUFJRDtBQUNGLENBdkJNO0FBeUJBLE1BQU1ELE9BQU8sR0FBRyxNQUFPNUIsSUFBUCxJQUFxRTtBQUMxRixNQUFJO0FBRUY7QUFDQSxVQUFNa0IsR0FBRyxHQUFHLE1BQU1iLHNEQUFBLENBQVcsT0FBWCxDQUFsQjtBQUNBLFFBQUllLEtBQUssR0FBR0YsR0FBRyxDQUFDa0IsSUFBaEI7QUFFQSxVQUFNdkIsSUFBSSxHQUFHTyxLQUFLLENBQUNpQixJQUFOLENBQVd4QixJQUFJLElBQUlBLElBQUksQ0FBQ2IsSUFBTCxLQUFjQSxJQUFqQyxDQUFiLENBTkUsQ0FRRjs7QUFDQSxRQUFHLENBQUNhLElBQUosRUFBVSxNQUFNLElBQUlRLEtBQUosRUFBTixDQVRSLENBV0Y7O0FBQ0EsV0FBTztBQUNIUixVQURHO0FBRUhnQixXQUFLLEVBQUM7QUFGSCxLQUFQO0FBSUQsR0FoQkQsQ0FnQkUsT0FBT0EsS0FBUCxFQUFjO0FBRWQ7QUFDQSxXQUFPO0FBQ0xBLFdBQUssRUFBRTtBQURGLEtBQVA7QUFJRDtBQUNGLENBekJNLEM7Ozs7Ozs7Ozs7QUM1QlA7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEEsbUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvYXJ0aWtsYXIvW25hbWVdLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlci5tb2R1bGUuY3NzJztcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICcuLi8uLi8uLi9ob2MvQ29udGFpbmVyL0NvbnRhaW5lcic7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBUZXh0SGVhZGVyIGZyb20gJy4vVGV4dEhlYWRlci9UZXh0SGVhZGVyJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyB7XHJcbiAgICAgICAgbmFtZTogc3RyaW5nO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IEhlYWRlciA6IFJlYWN0LkZDPFByb3BzPiA9ICh7bmFtZSwgZGVzY3JpcHRpb259KSA6IEpTWC5FbGVtZW50ID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGlkPXtzdHlsZXMuSGVhZGVyfT5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPFRleHRIZWFkZXIgbmFtZT17bmFtZX0gZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9ufSAvPiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL1RleHRIZWFkZXIubW9kdWxlLmNzcyc7XHJcblxyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcblxyXG5jb25zdCBUZXh0SGVhZGVyIDogUmVhY3QuRkM8UHJvcHM+ID0gKHtuYW1lLCBkZXNjcmlwdGlvbn0pIDogSlNYLkVsZW1lbnQgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5UZXh0SGVhZGVyfT5cclxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuSGVhZGluZ1RpdGxlfT5cclxuICAgICAgICAgICAgPGgxPntuYW1lfTwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5IZWFkaW5nRGVzY3JpcHRpb259PlxyXG4gICAgICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbjwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0SGVhZGVyOyIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnaHR0cHM6Ly9rcmVkaXRrb3J0c2tvbGxhcGkuZXcuci5hcHBzcG90LmNvbS8nLFxyXG5cclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0NvbnRhaW5lci5tb2R1bGUuY3NzJ1xyXG5cclxuXHJcbmNvbnN0IENvbnRhaW5lciA6IFJlYWN0LkZDID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gPGRpdiBpZD17c3R5bGVzLkNvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Bvc3QvSGVhZGVyL0hlYWRlcic7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWdyaWQtc3lzdGVtJztcclxuaW1wb3J0IHsgZ2V0QmxvZywgZ2V0QmxvZ3MgfSBmcm9tICcuLi8uLi9yZXNvdXJjZXMvQmxvZyc7XHJcbmltcG9ydCB7IEJsb2cgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL0Jsb2cnO1xyXG5pbXBvcnQgeyBHZXRTdGF0aWNQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICAgYmxvZzogQmxvZ1xyXG59XHJcblxyXG5jbGFzcyBJbmRleFBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+ICB7XHJcblxyXG4gIGNyZWF0ZU1hcmt1cCA9ICgpID0+IHtcclxuICAgIHJldHVybiB7IF9faHRtbDogdGhpcy5wcm9wcy5ibG9nLmh0bWwgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlciAoKSB7XHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPktyZWRpdGtvcnRza29sbC5jb20gfCB7dGhpcy5wcm9wcy5ibG9nLm5hbWV9PC90aXRsZT5cclxuICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIktyZWRpdGtvcnRza29sbC5jb20gasOkbWbDtnIgb2xpa2Ega3JlZGl0a29ydCBmw7ZyIGF0dCBoaXR0YSBkZXQgYsOkc3RhIGtyZWRpa29ydGV0IGbDtnIgZGlnLiBKw6RtZsO2ciBrcmVkaXRrb3J0IHNvbSBSZW1lbWJlciBmbGV4IG9jaCBOb3J3ZWdpYW5cIiAvPlxyXG4gICAgICA8bWV0YSBuYW1lPVwicm9ib3RzXCIgY29udGVudD1cImluZGV4LCBmb2xsb3dcIiAvPlxyXG4gICAgPC9IZWFkPlxyXG4gICAgICA8SGVhZGVyIG5hbWU9e3RoaXMucHJvcHMuYmxvZy5uYW1lfSBkZXNjcmlwdGlvbj17dGhpcy5wcm9wcy5ibG9nLmRlc2NyaXB0aW9ufSAvPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt0aGlzLmNyZWF0ZU1hcmt1cCgpfT48L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgICB7LyogPERpc3BsYXlDYXJkcyBjcmVkaXRDYXJkcz17dGhpcy5zdGF0ZS5jYXJkc30gLz4gICovfVxyXG4gIDwvZGl2PlxyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIC8vIENhbGwgYW4gZXh0ZXJuYWwgQVBJIGVuZHBvaW50IHRvIGdldCBwb3N0c1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGdldEJsb2dzKClcclxuXHJcbiAgY29uc3QgYmxvZ3MgPSByZXMuYmxvZ3M7XHJcblxyXG4gIGlmKCFibG9ncykgdGhyb3cgbmV3IEVycm9yKClcclxuXHJcbiAgLy8gR2V0IHRoZSBwYXRocyB3ZSB3YW50IHRvIHByZS1yZW5kZXIgYmFzZWQgb24gcG9zdHNcclxuICBjb25zdCBwYXRocyA9IGJsb2dzLm1hcCggYmxvZyA9PiAoe1xyXG4gICAgcGFyYW1zOiB7IG5hbWU6IGJsb2cubmFtZSB9LFxyXG4gIH0pKVxyXG5cclxuICAvLyBXZSdsbCBwcmUtcmVuZGVyIG9ubHkgdGhlc2UgcGF0aHMgYXQgYnVpbGQgdGltZS5cclxuICAvLyB7IGZhbGxiYWNrOiBmYWxzZSB9IG1lYW5zIG90aGVyIHJvdXRlcyBzaG91bGQgNDA0LlxyXG4gIHJldHVybiB7IHBhdGhzLCBmYWxsYmFjazogZmFsc2UgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgOiBHZXRTdGF0aWNQcm9wcyA9IGFzeW5jIGNvbnRleHQgPT4ge1xyXG5cclxuICB0cnkge1xyXG4gICAgaWYoIWNvbnRleHQucGFyYW1zKSB0aHJvdyBuZXcgRXJyb3IoKVxyXG4gICAgY29uc3QgbmFtZSA9IGNvbnRleHQucGFyYW1zLm5hbWUgYXMgc3RyaW5nXHJcblxyXG4gICAgaWYoIW5hbWUpIHRocm93IG5ldyBFcnJvcigpXHJcbiAgXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRCbG9nKG5hbWUpO1xyXG5cclxuICAgIGlmKHJlcy5lcnJvcikgdGhyb3cgbmV3IEVycm9yKClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wcyA6IHtcclxuICAgICAgICBibG9nOiByZXMuYmxvZ1xyXG4gICAgICB9LFxyXG4gICAgICByZXZhbGlkYXRlOiAzNjAwICogNFxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWRpcmVjdCA6IHtcclxuICAgICAgICBkZXN0aW5hdGlvbjogJy9hcnRpa2xhcicsXHJcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlXHJcbiIsImltcG9ydCBheGlvcyBmcm9tICcuLi9jb25maWcvYXhpb3MnO1xyXG5pbXBvcnQgeyBCbG9nIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9CbG9nJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRCbG9ncyA9IGFzeW5jICgpIDogUHJvbWlzZTx7YmxvZ3M/IDogQmxvZ1tdLCBlcnJvcj8gOiBib29sZWFufT4gPT4geyBcclxuICB0cnkge1xyXG4gICAgLy8gRmV0Y2hpbmcgY2FyZHNcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgL2Jsb2dgKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgIGxldCBibG9ncyA9IHJlcy5kYXRhIGFzIEJsb2dbXTtcclxuXHJcbiAgICAvLyBDaGVjayBmb3IgY2FyZHNcclxuICAgIGlmKCFibG9ncykgdGhyb3cgbmV3IEVycm9yKCk7XHJcblxyXG4gICAgLy8gUmV0dXJuIGNhcmRzXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGJsb2dzLFxyXG4gICAgICAgIGVycm9yOmZhbHNlXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAvLyBFcnJvciwgcmV0dXJuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjogdHJ1ZVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRCbG9nID0gYXN5bmMgKG5hbWUgOiBzdHJpbmcpIDogUHJvbWlzZTx7YmxvZz8gOiBCbG9nLCBlcnJvcj8gOiBib29sZWFufT4gPT4geyBcclxuICB0cnkge1xyXG5cclxuICAgIC8vIEZldGNoaW5nIGNhcmRzXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYC9ibG9nYCk7XHJcbiAgICBsZXQgYmxvZ3MgPSByZXMuZGF0YSBhcyBCbG9nW107XHJcblxyXG4gICAgY29uc3QgYmxvZyA9IGJsb2dzLmZpbmQoYmxvZyA9PiBibG9nLm5hbWUgPT09IG5hbWUpXHJcblxyXG4gICAgLy8gQ2hlY2sgZm9yIGNhcmRzXHJcbiAgICBpZighYmxvZykgdGhyb3cgbmV3IEVycm9yKCk7XHJcblxyXG4gICAgLy8gUmV0dXJuIGNhcmRzXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGJsb2csXHJcbiAgICAgICAgZXJyb3I6ZmFsc2VcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgIC8vIEVycm9yLCByZXR1cm5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yOiB0cnVlXHJcbiAgICB9XHJcblxyXG4gIH1cclxufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkhlYWRlclwiOiBcIkhlYWRlcl9IZWFkZXJfXzFOQUZvXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJUZXh0SGVhZGVyXCI6IFwiVGV4dEhlYWRlcl9UZXh0SGVhZGVyX18xSTNtZVwiLFxuXHRcIkhlYWRpbmdUaXRsZVwiOiBcIlRleHRIZWFkZXJfSGVhZGluZ1RpdGxlX18zUWd4X1wiLFxuXHRcIm1vdmVJblJpZ2h0XCI6IFwiVGV4dEhlYWRlcl9tb3ZlSW5SaWdodF9fbzA3am1cIixcblx0XCJIZWFkaW5nRGVzY3JpcHRpb25cIjogXCJUZXh0SGVhZGVyX0hlYWRpbmdEZXNjcmlwdGlvbl9fMUEwZjJcIixcblx0XCJtb3ZlSW5MZWZ0XCI6IFwiVGV4dEhlYWRlcl9tb3ZlSW5MZWZ0X18xb0laaVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiQ29udGFpbmVyXCI6IFwiQ29udGFpbmVyX0NvbnRhaW5lcl9fMkZpUFRcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1ncmlkLXN5c3RlbVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==