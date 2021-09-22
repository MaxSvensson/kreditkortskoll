exports.id = 976;
exports.ids = [976];
exports.modules = {

/***/ 6062:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const instance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: 'https://kreditkortskollapi.ew.r.appspot.com/'
});
/* harmony default export */ __webpack_exports__["Z"] = (instance);

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

/***/ 8852:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": function() { return /* binding */ getBlogs; },
/* harmony export */   "x": function() { return /* binding */ getBlog; }
/* harmony export */ });
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6062);

const getBlogs = async () => {
  try {
    // Fetching cards
    const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get(`/blog`);
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
    const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__/* .default.get */ .Z.get(`/blog`);
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

/***/ 2403:
/***/ (function(module) {

// Exports
module.exports = {
	"Container": "Container_Container__2FiPT"
};


/***/ })

};
;