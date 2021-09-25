exports.id = "src_hoc_Container_Container_tsx-src_resources_Blog_ts";
exports.ids = ["src_hoc_Container_Container_tsx-src_resources_Blog_ts"];
exports.modules = {

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

/***/ "./src/hoc/Container/Container.module.css":
/*!************************************************!*\
  !*** ./src/hoc/Container/Container.module.css ***!
  \************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"Container": "Container_Container__2FiPT"
};


/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29uZmlnL2F4aW9zLnRzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9ob2MvQ29udGFpbmVyL0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL3Jlc291cmNlcy9CbG9nLnRzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9ob2MvQ29udGFpbmVyL0NvbnRhaW5lci5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbImluc3RhbmNlIiwiYXhpb3MiLCJiYXNlVVJMIiwiQ29udGFpbmVyIiwicHJvcHMiLCJzdHlsZXMiLCJjaGlsZHJlbiIsImdldEJsb2dzIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJsb2dzIiwiZGF0YSIsIkVycm9yIiwiZXJyb3IiLCJnZXRCbG9nIiwibmFtZSIsImJsb2ciLCJmaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsUUFBUSxHQUFHQyxtREFBQSxDQUFhO0FBQzFCQyxTQUFPLEVBQUU7QUFEaUIsQ0FBYixDQUFqQjtBQU1BLCtEQUFlRixRQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7O0FBR0EsTUFBTUcsU0FBb0IsR0FBSUMsS0FBRCxJQUFXO0FBQ3BDLFNBQU87QUFBSyxNQUFFLEVBQUVDLHdFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQUQsS0FBSyxDQUFDRSxRQUROLENBQVA7QUFHSCxDQUpEOztBQU1BLCtEQUFlSCxTQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFHTyxNQUFNSSxRQUFRLEdBQUcsWUFBMkQ7QUFDakYsTUFBSTtBQUNGO0FBQ0EsVUFBTUMsR0FBRyxHQUFHLE1BQU1QLHNEQUFBLENBQVcsT0FBWCxDQUFsQjtBQUNBUSxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLFFBQUlHLEtBQUssR0FBR0gsR0FBRyxDQUFDSSxJQUFoQixDQUpFLENBTUY7O0FBQ0EsUUFBRyxDQUFDRCxLQUFKLEVBQVcsTUFBTSxJQUFJRSxLQUFKLEVBQU4sQ0FQVCxDQVNGOztBQUNBLFdBQU87QUFDSEYsV0FERztBQUVIRyxXQUFLLEVBQUM7QUFGSCxLQUFQO0FBSUQsR0FkRCxDQWNFLE9BQU9BLEtBQVAsRUFBYztBQUVkO0FBQ0EsV0FBTztBQUNMQSxXQUFLLEVBQUU7QUFERixLQUFQO0FBSUQ7QUFDRixDQXZCTTtBQXlCQSxNQUFNQyxPQUFPLEdBQUcsTUFBT0MsSUFBUCxJQUFxRTtBQUMxRixNQUFJO0FBRUY7QUFDQSxVQUFNUixHQUFHLEdBQUcsTUFBTVAsc0RBQUEsQ0FBVyxPQUFYLENBQWxCO0FBQ0EsUUFBSVUsS0FBSyxHQUFHSCxHQUFHLENBQUNJLElBQWhCO0FBRUEsVUFBTUssSUFBSSxHQUFHTixLQUFLLENBQUNPLElBQU4sQ0FBV0QsSUFBSSxJQUFJQSxJQUFJLENBQUNELElBQUwsS0FBY0EsSUFBakMsQ0FBYixDQU5FLENBUUY7O0FBQ0EsUUFBRyxDQUFDQyxJQUFKLEVBQVUsTUFBTSxJQUFJSixLQUFKLEVBQU4sQ0FUUixDQVdGOztBQUNBLFdBQU87QUFDSEksVUFERztBQUVISCxXQUFLLEVBQUM7QUFGSCxLQUFQO0FBSUQsR0FoQkQsQ0FnQkUsT0FBT0EsS0FBUCxFQUFjO0FBRWQ7QUFDQSxXQUFPO0FBQ0xBLFdBQUssRUFBRTtBQURGLEtBQVA7QUFJRDtBQUNGLENBekJNLEM7Ozs7Ozs7Ozs7QUM1QlA7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic3JjX2hvY19Db250YWluZXJfQ29udGFpbmVyX3RzeC1zcmNfcmVzb3VyY2VzX0Jsb2dfdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogJ2h0dHBzOi8va3JlZGl0a29ydHNrb2xsYXBpLmV3LnIuYXBwc3BvdC5jb20vJyxcclxuXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250YWluZXIubW9kdWxlLmNzcydcclxuXHJcblxyXG5jb25zdCBDb250YWluZXIgOiBSZWFjdC5GQyA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5Db250YWluZXJ9PlxyXG4gICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyOyIsImltcG9ydCBheGlvcyBmcm9tICcuLi9jb25maWcvYXhpb3MnO1xyXG5pbXBvcnQgeyBCbG9nIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9CbG9nJztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRCbG9ncyA9IGFzeW5jICgpIDogUHJvbWlzZTx7YmxvZ3M/IDogQmxvZ1tdLCBlcnJvcj8gOiBib29sZWFufT4gPT4geyBcclxuICB0cnkge1xyXG4gICAgLy8gRmV0Y2hpbmcgY2FyZHNcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgL2Jsb2dgKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgIGxldCBibG9ncyA9IHJlcy5kYXRhIGFzIEJsb2dbXTtcclxuXHJcbiAgICAvLyBDaGVjayBmb3IgY2FyZHNcclxuICAgIGlmKCFibG9ncykgdGhyb3cgbmV3IEVycm9yKCk7XHJcblxyXG4gICAgLy8gUmV0dXJuIGNhcmRzXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGJsb2dzLFxyXG4gICAgICAgIGVycm9yOmZhbHNlXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAvLyBFcnJvciwgcmV0dXJuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjogdHJ1ZVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRCbG9nID0gYXN5bmMgKG5hbWUgOiBzdHJpbmcpIDogUHJvbWlzZTx7YmxvZz8gOiBCbG9nLCBlcnJvcj8gOiBib29sZWFufT4gPT4geyBcclxuICB0cnkge1xyXG5cclxuICAgIC8vIEZldGNoaW5nIGNhcmRzXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYC9ibG9nYCk7XHJcbiAgICBsZXQgYmxvZ3MgPSByZXMuZGF0YSBhcyBCbG9nW107XHJcblxyXG4gICAgY29uc3QgYmxvZyA9IGJsb2dzLmZpbmQoYmxvZyA9PiBibG9nLm5hbWUgPT09IG5hbWUpXHJcblxyXG4gICAgLy8gQ2hlY2sgZm9yIGNhcmRzXHJcbiAgICBpZighYmxvZykgdGhyb3cgbmV3IEVycm9yKCk7XHJcblxyXG4gICAgLy8gUmV0dXJuIGNhcmRzXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGJsb2csXHJcbiAgICAgICAgZXJyb3I6ZmFsc2VcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgIC8vIEVycm9yLCByZXR1cm5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yOiB0cnVlXHJcbiAgICB9XHJcblxyXG4gIH1cclxufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkNvbnRhaW5lclwiOiBcIkNvbnRhaW5lcl9Db250YWluZXJfXzJGaVBUXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9