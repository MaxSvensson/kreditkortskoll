exports.id = "src_hoc_Container_Container_tsx-src_resources_Cards_ts";
exports.ids = ["src_hoc_Container_Container_tsx-src_resources_Cards_ts"];
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

/***/ "./src/resources/Cards.ts":
/*!********************************!*\
  !*** ./src/resources/Cards.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getBestCard": function() { return /* binding */ getBestCard; },
/* harmony export */   "getCards": function() { return /* binding */ getCards; },
/* harmony export */   "getCard": function() { return /* binding */ getCard; },
/* harmony export */   "getCompareCards": function() { return /* binding */ getCompareCards; }
/* harmony export */ });
/* harmony import */ var _config_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/axios */ "./src/config/axios.ts");

const getBestCard = async () => {
  console.log('Not static');

  try {
    // Fetch bestcard from server
    const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/bestcard');
    if (!res.data.bestCard[0]) throw new Error();
    const bestcard = res.data.bestCard[0]; // Return bestcard

    return {
      bestcard
    };
  } catch (error) {
    return {
      error: true
    };
  }
};
const getCards = async () => {
  // Fetch cards from server
  try {
    const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__.default.get('/cards');
    const cards = res.data.cards;
    return {
      cards,
      error: false
    };
  } catch (error) {
    return {
      error: true
    };
  }
};
const getCard = async name => {
  try {
    const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__.default.get(`/card/${name}`);
    const card = res.data;
    return {
      card,
      error: false
    };
  } catch (error) {
    return {
      error: true
    };
  }
};
const getCompareCards = async ids => {
  try {
    // Fetching cards
    const res = await _config_axios__WEBPACK_IMPORTED_MODULE_0__.default.get(`/cards/compare?ids=${ids}`);
    let cards = res.data.cardsInfo; // Check for cards

    if (!cards) throw new Error(); // Filter undefined cards

    cards = cards.filter(cardsInfo => cardsInfo !== null); // Return cards

    return {
      cards,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29uZmlnL2F4aW9zLnRzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9ob2MvQ29udGFpbmVyL0NvbnRhaW5lci50c3giLCJ3ZWJwYWNrOi8vd2l0aC10eXBlc2NyaXB0Ly4vc3JjL3Jlc291cmNlcy9DYXJkcy50cyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvaG9jL0NvbnRhaW5lci9Db250YWluZXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvaWdub3JlZHxDOlxcVXNlcnNcXG1heGltaWxpYW4uc3ZlbnNzbzFcXERlc2t0b3BcXGtyZWRpdGtvcnRza29sbFxcY2xpZW50XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiaW5zdGFuY2UiLCJheGlvcyIsImJhc2VVUkwiLCJDb250YWluZXIiLCJwcm9wcyIsInN0eWxlcyIsImNoaWxkcmVuIiwiZ2V0QmVzdENhcmQiLCJjb25zb2xlIiwibG9nIiwicmVzIiwiZGF0YSIsImJlc3RDYXJkIiwiRXJyb3IiLCJiZXN0Y2FyZCIsImVycm9yIiwiZ2V0Q2FyZHMiLCJjYXJkcyIsImdldENhcmQiLCJuYW1lIiwiY2FyZCIsImdldENvbXBhcmVDYXJkcyIsImlkcyIsImNhcmRzSW5mbyIsImZpbHRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLFFBQVEsR0FBR0MsbURBQUEsQ0FBYTtBQUMxQkMsU0FBTyxFQUFFO0FBRGlCLENBQWIsQ0FBakI7QUFNQSwrREFBZUYsUUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBOztBQUdBLE1BQU1HLFNBQW9CLEdBQUlDLEtBQUQsSUFBVztBQUNwQyxTQUFPO0FBQUssTUFBRSxFQUFFQyx3RUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0FELEtBQUssQ0FBQ0UsUUFETixDQUFQO0FBR0gsQ0FKRDs7QUFNQSwrREFBZUgsU0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFNTyxNQUFNSSxXQUFXLEdBQUcsWUFBOEQ7QUFDckZDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVo7O0FBQ0YsTUFBSTtBQUNGO0FBQ0EsVUFBTUMsR0FBRyxHQUFHLE1BQU1ULHNEQUFBLENBQVUsV0FBVixDQUFsQjtBQUVBLFFBQUcsQ0FBQ1MsR0FBRyxDQUFDQyxJQUFKLENBQVNDLFFBQVQsQ0FBa0IsQ0FBbEIsQ0FBSixFQUEwQixNQUFNLElBQUlDLEtBQUosRUFBTjtBQUUxQixVQUFNQyxRQUFRLEdBQUdKLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxRQUFULENBQWtCLENBQWxCLENBQWpCLENBTkUsQ0FRRjs7QUFDQSxXQUFPO0FBQ0xFO0FBREssS0FBUDtBQUdELEdBWkQsQ0FZRSxPQUFPQyxLQUFQLEVBQWM7QUFDZCxXQUFPO0FBQ0xBLFdBQUssRUFBQztBQURELEtBQVA7QUFHSDtBQUNBLENBbkJNO0FBcUJBLE1BQU1DLFFBQVEsR0FBRyxZQUEwRTtBQUNoRztBQUNBLE1BQUk7QUFDQSxVQUFNTixHQUFHLEdBQUcsTUFBTVQsc0RBQUEsQ0FBVSxRQUFWLENBQWxCO0FBQ0EsVUFBTWdCLEtBQUssR0FBR1AsR0FBRyxDQUFDQyxJQUFKLENBQVNNLEtBQXZCO0FBRUEsV0FBTztBQUNMQSxXQURLO0FBRUxGLFdBQUssRUFBQztBQUZELEtBQVA7QUFJSCxHQVJELENBUUUsT0FBT0EsS0FBUCxFQUFjO0FBQ2QsV0FBTztBQUNMQSxXQUFLLEVBQUM7QUFERCxLQUFQO0FBR0Q7QUFDRixDQWZNO0FBaUJBLE1BQU1HLE9BQU8sR0FBRyxNQUFPQyxJQUFQLElBQW9GO0FBRXpHLE1BQUk7QUFDRixVQUFNVCxHQUFHLEdBQUcsTUFBTVQsc0RBQUEsQ0FBVyxTQUFRa0IsSUFBSyxFQUF4QixDQUFsQjtBQUNBLFVBQU1DLElBQUksR0FBR1YsR0FBRyxDQUFDQyxJQUFqQjtBQUVBLFdBQU87QUFDTFMsVUFESztBQUVMTCxXQUFLLEVBQUM7QUFGRCxLQUFQO0FBSUQsR0FSRCxDQVFFLE9BQU9BLEtBQVAsRUFBYztBQUVkLFdBQU87QUFDTEEsV0FBSyxFQUFFO0FBREYsS0FBUDtBQUlEO0FBQ0YsQ0FqQk07QUFvQkEsTUFBTU0sZUFBZSxHQUFHLE1BQU9DLEdBQVAsSUFBaUY7QUFDOUcsTUFBSTtBQUNGO0FBQ0EsVUFBTVosR0FBRyxHQUFHLE1BQU1ULHNEQUFBLENBQVcsc0JBQXFCcUIsR0FBSSxFQUFwQyxDQUFsQjtBQUNBLFFBQUlMLEtBQUssR0FBR1AsR0FBRyxDQUFDQyxJQUFKLENBQVNZLFNBQXJCLENBSEUsQ0FLRjs7QUFDQSxRQUFHLENBQUNOLEtBQUosRUFBVyxNQUFNLElBQUlKLEtBQUosRUFBTixDQU5ULENBUUY7O0FBQ0FJLFNBQUssR0FBR0EsS0FBSyxDQUFDTyxNQUFOLENBQWFELFNBQVMsSUFBSUEsU0FBUyxLQUFLLElBQXhDLENBQVIsQ0FURSxDQVdGOztBQUNBLFdBQU87QUFDTE4sV0FESztBQUVMRixXQUFLLEVBQUM7QUFGRCxLQUFQO0FBSUQsR0FoQkQsQ0FnQkUsT0FBT0EsS0FBUCxFQUFjO0FBQ2Q7QUFDQSxXQUFPO0FBQ0xBLFdBQUssRUFBRTtBQURGLEtBQVA7QUFJRDtBQUNGLENBeEJNLEM7Ozs7Ozs7Ozs7QUNoRVA7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEEsZSIsImZpbGUiOiJzcmNfaG9jX0NvbnRhaW5lcl9Db250YWluZXJfdHN4LXNyY19yZXNvdXJjZXNfQ2FyZHNfdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogJ2h0dHBzOi8va3JlZGl0a29ydHNrb2xsYXBpLmV3LnIuYXBwc3BvdC5jb20vJyxcclxuXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5zdGFuY2U7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Db250YWluZXIubW9kdWxlLmNzcydcclxuXHJcblxyXG5jb25zdCBDb250YWluZXIgOiBSZWFjdC5GQyA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIDxkaXYgaWQ9e3N0eWxlcy5Db250YWluZXJ9PlxyXG4gICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyOyIsImltcG9ydCBheGlvcyBmcm9tICcuLi9jb25maWcvYXhpb3MnO1xyXG5pbXBvcnQgeyBDYXJkIGFzIENyZWRpdENhcmRJbnRlcmZhY2UgfSBmcm9tICcuLi9jbGFzc2VzL0NyZWRpdENhcmQnO1xyXG5pbXBvcnQgeyBCZXN0Q2FyZCB9IGZyb20gJy4uL2ludGVyZmFjZXMvQmVzdENhcmQnO1xyXG5pbXBvcnQgeyBDb21wYXJlQ2FyZHMgfSBmcm9tICcuLi9pbnRlcmZhY2VzL0NvbXBhcmVDYXJkcyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEJlc3RDYXJkID0gYXN5bmMgKCkgOiBQcm9taXNlPHtiZXN0Y2FyZD86IEJlc3RDYXJkLCBlcnJvcj86IGJvb2xlYW59PiA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnTm90IHN0YXRpYycpXHJcbiAgdHJ5IHtcclxuICAgIC8vIEZldGNoIGJlc3RjYXJkIGZyb20gc2VydmVyXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9iZXN0Y2FyZCcpO1xyXG5cclxuICAgIGlmKCFyZXMuZGF0YS5iZXN0Q2FyZFswXSkgdGhyb3cgbmV3IEVycm9yKCk7XHJcblxyXG4gICAgY29uc3QgYmVzdGNhcmQgPSByZXMuZGF0YS5iZXN0Q2FyZFswXSBhcyBCZXN0Q2FyZFxyXG4gIFxyXG4gICAgLy8gUmV0dXJuIGJlc3RjYXJkXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBiZXN0Y2FyZFxyXG4gICAgfTsgICAgXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yOnRydWVcclxuICAgIH07XHJcbn1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENhcmRzID0gYXN5bmMgKCkgOiBQcm9taXNlPHtjYXJkcz8gOiBDcmVkaXRDYXJkSW50ZXJmYWNlW10sIGVycm9yPyA6IGJvb2xlYW59PiA9PiB7XHJcbiAgLy8gRmV0Y2ggY2FyZHMgZnJvbSBzZXJ2ZXJcclxuICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoJy9jYXJkcycpO1xyXG4gICAgICBjb25zdCBjYXJkcyA9IHJlcy5kYXRhLmNhcmRzIGFzIENyZWRpdENhcmRJbnRlcmZhY2VbXTsgICAgXHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNhcmRzLFxyXG4gICAgICAgIGVycm9yOmZhbHNlXHJcbiAgICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3I6dHJ1ZVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENhcmQgPSBhc3luYyAobmFtZSA6IHN0cmluZykgOiBQcm9taXNlPHtjYXJkPyA6IENyZWRpdENhcmRJbnRlcmZhY2UsIGVycm9yPyA6IGJvb2xlYW59PiA9PiB7XHJcblxyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBheGlvcy5nZXQoYC9jYXJkLyR7bmFtZX1gKTtcclxuICAgIGNvbnN0IGNhcmQgPSByZXMuZGF0YSBhcyBDcmVkaXRDYXJkSW50ZXJmYWNlO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNhcmQsXHJcbiAgICAgIGVycm9yOmZhbHNlXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjogdHJ1ZVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q29tcGFyZUNhcmRzID0gYXN5bmMgKGlkcyA6IHN0cmluZ1tdKSA6IFByb21pc2U8e2NhcmRzPyA6IENvbXBhcmVDYXJkc1tdLCBlcnJvcj8gOiBib29sZWFufT4gPT4geyBcclxuICB0cnkge1xyXG4gICAgLy8gRmV0Y2hpbmcgY2FyZHNcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgL2NhcmRzL2NvbXBhcmU/aWRzPSR7aWRzfWApO1xyXG4gICAgbGV0IGNhcmRzID0gcmVzLmRhdGEuY2FyZHNJbmZvIGFzIENvbXBhcmVDYXJkc1tdO1xyXG5cclxuICAgIC8vIENoZWNrIGZvciBjYXJkc1xyXG4gICAgaWYoIWNhcmRzKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgdW5kZWZpbmVkIGNhcmRzXHJcbiAgICBjYXJkcyA9IGNhcmRzLmZpbHRlcihjYXJkc0luZm8gPT4gY2FyZHNJbmZvICE9PSBudWxsKTtcclxuXHJcbiAgICAvLyBSZXR1cm4gY2FyZHNcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNhcmRzLFxyXG4gICAgICBlcnJvcjpmYWxzZVxyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAvLyBFcnJvciwgcmV0dXJuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjogdHJ1ZVxyXG4gICAgfVxyXG5cclxuICB9XHJcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJDb250YWluZXJcIjogXCJDb250YWluZXJfQ29udGFpbmVyX18yRmlQVFwiXG59O1xuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==