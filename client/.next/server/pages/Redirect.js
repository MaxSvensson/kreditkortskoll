(function() {
var exports = {};
exports.id = "pages/Redirect";
exports.ids = ["pages/Redirect"];
exports.modules = {

/***/ "./src/components/Redirect/Background/Background.tsx":
/*!***********************************************************!*\
  !*** ./src/components/Redirect/Background/Background.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Background_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Background.module.css */ "./src/components/Redirect/Background/Background.module.css");
/* harmony import */ var _Background_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Background_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\kredit\\client\\src\\components\\Redirect\\Background\\Background.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);



const Background = () => {
  return __jsx("div", {
    id: (_Background_module_css__WEBPACK_IMPORTED_MODULE_1___default().Background),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 12
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Background);

/***/ }),

/***/ "./src/components/Redirect/RedirectBox/RedirectBox.tsx":
/*!*************************************************************!*\
  !*** ./src/components/Redirect/RedirectBox/RedirectBox.tsx ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RedirectBox_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RedirectBox.module.css */ "./src/components/Redirect/RedirectBox/RedirectBox.module.css");
/* harmony import */ var _RedirectBox_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_RedirectBox_module_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\kredit\\client\\src\\components\\Redirect\\RedirectBox\\RedirectBox.tsx";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


const RedirectBox = ({
  card
}) => {
  return __jsx("div", {
    id: (_RedirectBox_module_css__WEBPACK_IMPORTED_MODULE_1___default().RedirectBox),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 12
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, card.name), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, "Vi omredigerar nu dig"));
};

/* harmony default export */ __webpack_exports__["default"] = (RedirectBox);

/***/ }),

/***/ "./src/pages/Redirect.tsx":
/*!********************************!*\
  !*** ./src/pages/Redirect.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Redirect_RedirectBox_RedirectBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Redirect/RedirectBox/RedirectBox */ "./src/components/Redirect/RedirectBox/RedirectBox.tsx");
/* harmony import */ var _resources_Cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../resources/Cards */ "./src/resources/Cards.ts");
/* harmony import */ var _components_Redirect_Background_Background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Redirect/Background/Background */ "./src/components/Redirect/Background/Background.tsx");
var _jsxFileName = "D:\\kredit\\client\\src\\pages\\Redirect.tsx";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

// Components




const Redirect = ({
  card
}) => {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setTimeout(() => {
      window.location.replace(card.url);
    }, 1000);
  }, []);
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 10
    }
  }, __jsx(_components_Redirect_Background_Background__WEBPACK_IMPORTED_MODULE_3__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(_components_Redirect_RedirectBox_RedirectBox__WEBPACK_IMPORTED_MODULE_1__.default, {
    card: card,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }));
};

const getServerSideProps = async context => {
  try {
    const cardId = context.query.card;
    if (!cardId) throw new Error();
    const res = await (0,_resources_Cards__WEBPACK_IMPORTED_MODULE_2__.getCard)(cardId);
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
/* harmony default export */ __webpack_exports__["default"] = (Redirect);

/***/ }),

/***/ "./src/components/Redirect/Background/Background.module.css":
/*!******************************************************************!*\
  !*** ./src/components/Redirect/Background/Background.module.css ***!
  \******************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"Background": "Background_Background__2c3ri"
};


/***/ }),

/***/ "./src/components/Redirect/RedirectBox/RedirectBox.module.css":
/*!********************************************************************!*\
  !*** ./src/components/Redirect/RedirectBox/RedirectBox.module.css ***!
  \********************************************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"RedirectBox": "RedirectBox_RedirectBox__2qz2A"
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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
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
var __webpack_exports__ = __webpack_require__.X(0, ["src_resources_Cards_ts"], function() { return __webpack_exec__("./src/pages/Redirect.tsx"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9SZWRpcmVjdC9CYWNrZ3JvdW5kL0JhY2tncm91bmQudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1JlZGlyZWN0L1JlZGlyZWN0Qm94L1JlZGlyZWN0Qm94LnRzeCIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvcGFnZXMvUmVkaXJlY3QudHN4Iiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1JlZGlyZWN0L0JhY2tncm91bmQvQmFja2dyb3VuZC5tb2R1bGUuY3NzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL1JlZGlyZWN0L1JlZGlyZWN0Qm94L1JlZGlyZWN0Qm94Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIkJhY2tncm91bmQiLCJzdHlsZXMiLCJSZWRpcmVjdEJveCIsImNhcmQiLCJuYW1lIiwiUmVkaXJlY3QiLCJ1c2VFZmZlY3QiLCJzZXRUaW1lb3V0Iiwid2luZG93IiwibG9jYXRpb24iLCJyZXBsYWNlIiwidXJsIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImNhcmRJZCIsInF1ZXJ5IiwiRXJyb3IiLCJyZXMiLCJnZXRDYXJkIiwiZXJyb3IiLCJwcm9wcyIsInJlZGlyZWN0IiwiZGVzdGluYXRpb24iLCJwZXJtYW5lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxVQUFxQixHQUFHLE1BQU07QUFDaEMsU0FBTztBQUFLLE1BQUUsRUFBRUMsMEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBR0gsQ0FKRDs7QUFPQSwrREFBZUQsVUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7O0FBT0EsTUFBTUUsV0FBNkIsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFZO0FBQzlDLFNBQU87QUFBSyxNQUFFLEVBQUVGLDRFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUtFLElBQUksQ0FBQ0MsSUFBVixDQURLLEVBRUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFGSyxDQUFQO0FBSUgsQ0FMRDs7QUFPQSwrREFBZUYsV0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQSxNQUFNRyxRQUF5QyxHQUFHLENBQUM7QUFBQ0Y7QUFBRCxDQUFELEtBQVk7QUFFNURHLGtEQUFTLENBQUMsTUFBTTtBQUNaQyxjQUFVLENBQUMsTUFBTTtBQUNmQyxZQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCUCxJQUFJLENBQUNRLEdBQTdCO0FBQ0QsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdILEdBSlEsRUFJTixFQUpNLENBQVQ7QUFNQSxTQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSCxNQUFDLCtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERyxFQUVILE1BQUMsaUZBQUQ7QUFBYSxRQUFJLEVBQUVSLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRyxDQUFQO0FBSUQsQ0FaRDs7QUFjTyxNQUFNUyxrQkFBdUMsR0FBRyxNQUFPQyxPQUFQLElBQW1CO0FBRXhFLE1BQUk7QUFDRixVQUFNQyxNQUFNLEdBQUdELE9BQU8sQ0FBQ0UsS0FBUixDQUFjWixJQUE3QjtBQUNBLFFBQUcsQ0FBQ1csTUFBSixFQUFZLE1BQU0sSUFBSUUsS0FBSixFQUFOO0FBRVosVUFBTUMsR0FBRyxHQUFHLE1BQU1DLHlEQUFPLENBQUNKLE1BQUQsQ0FBekI7QUFDQSxRQUFHRyxHQUFHLENBQUNFLEtBQUosSUFBYSxDQUFDRixHQUFHLENBQUNkLElBQXJCLEVBQTJCLE1BQU0sSUFBSWEsS0FBSixFQUFOO0FBRTNCLFdBQU87QUFDTEksV0FBSyxFQUFHO0FBQ05qQixZQUFJLEVBQUdjLEdBQUcsQ0FBQ2Q7QUFETDtBQURILEtBQVA7QUFLRCxHQVpELENBWUUsT0FBT2dCLEtBQVAsRUFBYztBQUNiO0FBQ0EsV0FBTztBQUNORSxjQUFRLEVBQUU7QUFDUkMsbUJBQVcsRUFBRyxHQUROO0FBRVJDLGlCQUFTLEVBQUU7QUFGSDtBQURKLEtBQVA7QUFNRjtBQUNGLENBdkJNO0FBeUJQLCtEQUFlbEIsUUFBZixFOzs7Ozs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNIQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtQyIsImZpbGUiOiJwYWdlcy9SZWRpcmVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9CYWNrZ3JvdW5kLm1vZHVsZS5jc3MnO1xyXG5cclxuY29uc3QgQmFja2dyb3VuZCA6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5CYWNrZ3JvdW5kfT5cclxuXHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmQ7IiwiaW1wb3J0IHN0eWxlcyBmcm9tICcuL1JlZGlyZWN0Qm94Lm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgeyBDYXJkIGFzIENyZWRpdENhcmRJbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9jbGFzc2VzL0NyZWRpdENhcmQnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjYXJkIDogQ3JlZGl0Q2FyZEludGVyZmFjZVxyXG59XHJcblxyXG5jb25zdCBSZWRpcmVjdEJveCA6IFJlYWN0LkZDPFByb3BzPiA9ICh7Y2FyZH0pID0+IHtcclxuICAgIHJldHVybiA8ZGl2IGlkPXtzdHlsZXMuUmVkaXJlY3RCb3h9PlxyXG4gICAgICA8aDE+e2NhcmQubmFtZX08L2gxPlxyXG4gICAgICA8cD5WaSBvbXJlZGlnZXJhciBudSBkaWc8L3A+XHJcbiAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVkaXJlY3RCb3g7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgQ2FyZCBhcyBDcmVkaXRDYXJkSW50ZXJmYWNlIH0gZnJvbSAnLi4vY2xhc3Nlcy9DcmVkaXRDYXJkJztcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IFJlZGlyZWN0Qm94IGZyb20gJy4uL2NvbXBvbmVudHMvUmVkaXJlY3QvUmVkaXJlY3RCb3gvUmVkaXJlY3RCb3gnO1xyXG5pbXBvcnQgeyBnZXRDYXJkIH0gZnJvbSAnLi4vcmVzb3VyY2VzL0NhcmRzJztcclxuaW1wb3J0IEJhY2tncm91bmQgZnJvbSAnLi4vY29tcG9uZW50cy9SZWRpcmVjdC9CYWNrZ3JvdW5kL0JhY2tncm91bmQnO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIHtcclxuICBjYXJkOiBDcmVkaXRDYXJkSW50ZXJmYWNlO1xyXG59XHJcblxyXG5jb25zdCBSZWRpcmVjdCA6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7Y2FyZH0pID0+IHtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoY2FyZC51cmwpO1xyXG4gICAgICB9LCAxMDAwIClcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIDxkaXY+XHJcbiAgICAgIDxCYWNrZ3JvdW5kIC8+XHJcbiAgICAgIDxSZWRpcmVjdEJveCBjYXJkPXtjYXJkfSAvPlxyXG4gIDwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzIDogR2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGNhcmRJZCA9IGNvbnRleHQucXVlcnkuY2FyZCBhcyBzdHJpbmc7XHJcbiAgICBpZighY2FyZElkKSB0aHJvdyBuZXcgRXJyb3IoKVxyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGdldENhcmQoY2FyZElkKVxyXG4gICAgaWYocmVzLmVycm9yIHx8ICFyZXMuY2FyZCkgdGhyb3cgbmV3IEVycm9yKClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwcm9wcyA6IHtcclxuICAgICAgICBjYXJkIDogcmVzLmNhcmRcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgLy8gRXJyb3IsIHJlZGlyZWN0IHRvIGhvbWUgcGFnZVxyXG4gICAgIHJldHVybiB7XHJcbiAgICAgIHJlZGlyZWN0OiB7XHJcbiAgICAgICAgZGVzdGluYXRpb24gOiAnLycsXHJcbiAgICAgICAgcGVybWFuZW50OiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9IFxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVkaXJlY3QiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJCYWNrZ3JvdW5kXCI6IFwiQmFja2dyb3VuZF9CYWNrZ3JvdW5kX18yYzNyaVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiUmVkaXJlY3RCb3hcIjogXCJSZWRpcmVjdEJveF9SZWRpcmVjdEJveF9fMnF6MkFcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==