exports.id = "src_resources_Cards_ts";
exports.ids = ["src_resources_Cards_ts"];
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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93aXRoLXR5cGVzY3JpcHQvLi9zcmMvY29uZmlnL2F4aW9zLnRzIiwid2VicGFjazovL3dpdGgtdHlwZXNjcmlwdC8uL3NyYy9yZXNvdXJjZXMvQ2FyZHMudHMiXSwibmFtZXMiOlsiaW5zdGFuY2UiLCJheGlvcyIsImJhc2VVUkwiLCJnZXRCZXN0Q2FyZCIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJkYXRhIiwiYmVzdENhcmQiLCJFcnJvciIsImJlc3RjYXJkIiwiZXJyb3IiLCJnZXRDYXJkcyIsImNhcmRzIiwiZ2V0Q2FyZCIsIm5hbWUiLCJjYXJkIiwiZ2V0Q29tcGFyZUNhcmRzIiwiaWRzIiwiY2FyZHNJbmZvIiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsUUFBUSxHQUFHQyxtREFBQSxDQUFhO0FBQzFCQyxTQUFPLEVBQUU7QUFEaUIsQ0FBYixDQUFqQjtBQU1BLCtEQUFlRixRQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQU1PLE1BQU1HLFdBQVcsR0FBRyxZQUE4RDtBQUNyRkMsU0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWjs7QUFDRixNQUFJO0FBQ0Y7QUFDQSxVQUFNQyxHQUFHLEdBQUcsTUFBTUwsc0RBQUEsQ0FBVSxXQUFWLENBQWxCO0FBRUEsUUFBRyxDQUFDSyxHQUFHLENBQUNDLElBQUosQ0FBU0MsUUFBVCxDQUFrQixDQUFsQixDQUFKLEVBQTBCLE1BQU0sSUFBSUMsS0FBSixFQUFOO0FBRTFCLFVBQU1DLFFBQVEsR0FBR0osR0FBRyxDQUFDQyxJQUFKLENBQVNDLFFBQVQsQ0FBa0IsQ0FBbEIsQ0FBakIsQ0FORSxDQVFGOztBQUNBLFdBQU87QUFDTEU7QUFESyxLQUFQO0FBR0QsR0FaRCxDQVlFLE9BQU9DLEtBQVAsRUFBYztBQUNkLFdBQU87QUFDTEEsV0FBSyxFQUFDO0FBREQsS0FBUDtBQUdIO0FBQ0EsQ0FuQk07QUFxQkEsTUFBTUMsUUFBUSxHQUFHLFlBQTBFO0FBQ2hHO0FBQ0EsTUFBSTtBQUNBLFVBQU1OLEdBQUcsR0FBRyxNQUFNTCxzREFBQSxDQUFVLFFBQVYsQ0FBbEI7QUFDQSxVQUFNWSxLQUFLLEdBQUdQLEdBQUcsQ0FBQ0MsSUFBSixDQUFTTSxLQUF2QjtBQUVBLFdBQU87QUFDTEEsV0FESztBQUVMRixXQUFLLEVBQUM7QUFGRCxLQUFQO0FBSUgsR0FSRCxDQVFFLE9BQU9BLEtBQVAsRUFBYztBQUNkLFdBQU87QUFDTEEsV0FBSyxFQUFDO0FBREQsS0FBUDtBQUdEO0FBQ0YsQ0FmTTtBQWlCQSxNQUFNRyxPQUFPLEdBQUcsTUFBT0MsSUFBUCxJQUFvRjtBQUV6RyxNQUFJO0FBQ0YsVUFBTVQsR0FBRyxHQUFHLE1BQU1MLHNEQUFBLENBQVcsU0FBUWMsSUFBSyxFQUF4QixDQUFsQjtBQUNBLFVBQU1DLElBQUksR0FBR1YsR0FBRyxDQUFDQyxJQUFqQjtBQUVBLFdBQU87QUFDTFMsVUFESztBQUVMTCxXQUFLLEVBQUM7QUFGRCxLQUFQO0FBSUQsR0FSRCxDQVFFLE9BQU9BLEtBQVAsRUFBYztBQUVkLFdBQU87QUFDTEEsV0FBSyxFQUFFO0FBREYsS0FBUDtBQUlEO0FBQ0YsQ0FqQk07QUFvQkEsTUFBTU0sZUFBZSxHQUFHLE1BQU9DLEdBQVAsSUFBaUY7QUFDOUcsTUFBSTtBQUNGO0FBQ0EsVUFBTVosR0FBRyxHQUFHLE1BQU1MLHNEQUFBLENBQVcsc0JBQXFCaUIsR0FBSSxFQUFwQyxDQUFsQjtBQUNBLFFBQUlMLEtBQUssR0FBR1AsR0FBRyxDQUFDQyxJQUFKLENBQVNZLFNBQXJCLENBSEUsQ0FLRjs7QUFDQSxRQUFHLENBQUNOLEtBQUosRUFBVyxNQUFNLElBQUlKLEtBQUosRUFBTixDQU5ULENBUUY7O0FBQ0FJLFNBQUssR0FBR0EsS0FBSyxDQUFDTyxNQUFOLENBQWFELFNBQVMsSUFBSUEsU0FBUyxLQUFLLElBQXhDLENBQVIsQ0FURSxDQVdGOztBQUNBLFdBQU87QUFDTE4sV0FESztBQUVMRixXQUFLLEVBQUM7QUFGRCxLQUFQO0FBSUQsR0FoQkQsQ0FnQkUsT0FBT0EsS0FBUCxFQUFjO0FBQ2Q7QUFDQSxXQUFPO0FBQ0xBLFdBQUssRUFBRTtBQURGLEtBQVA7QUFJRDtBQUNGLENBeEJNLEMiLCJmaWxlIjoic3JjX3Jlc291cmNlc19DYXJkc190cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiAnaHR0cHM6Ly9rcmVkaXRrb3J0c2tvbGxhcGkuZXcuci5hcHBzcG90LmNvbS8nLFxyXG5cclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJy4uL2NvbmZpZy9heGlvcyc7XHJcbmltcG9ydCB7IENhcmQgYXMgQ3JlZGl0Q2FyZEludGVyZmFjZSB9IGZyb20gJy4uL2NsYXNzZXMvQ3JlZGl0Q2FyZCc7XHJcbmltcG9ydCB7IEJlc3RDYXJkIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9CZXN0Q2FyZCc7XHJcbmltcG9ydCB7IENvbXBhcmVDYXJkcyB9IGZyb20gJy4uL2ludGVyZmFjZXMvQ29tcGFyZUNhcmRzJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QmVzdENhcmQgPSBhc3luYyAoKSA6IFByb21pc2U8e2Jlc3RjYXJkPzogQmVzdENhcmQsIGVycm9yPzogYm9vbGVhbn0+ID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdOb3Qgc3RhdGljJylcclxuICB0cnkge1xyXG4gICAgLy8gRmV0Y2ggYmVzdGNhcmQgZnJvbSBzZXJ2ZXJcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnL2Jlc3RjYXJkJyk7XHJcblxyXG4gICAgaWYoIXJlcy5kYXRhLmJlc3RDYXJkWzBdKSB0aHJvdyBuZXcgRXJyb3IoKTtcclxuXHJcbiAgICBjb25zdCBiZXN0Y2FyZCA9IHJlcy5kYXRhLmJlc3RDYXJkWzBdIGFzIEJlc3RDYXJkXHJcbiAgXHJcbiAgICAvLyBSZXR1cm4gYmVzdGNhcmRcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJlc3RjYXJkXHJcbiAgICB9OyAgICBcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZXJyb3I6dHJ1ZVxyXG4gICAgfTtcclxufVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2FyZHMgPSBhc3luYyAoKSA6IFByb21pc2U8e2NhcmRzPyA6IENyZWRpdENhcmRJbnRlcmZhY2VbXSwgZXJyb3I/IDogYm9vbGVhbn0+ID0+IHtcclxuICAvLyBGZXRjaCBjYXJkcyBmcm9tIHNlcnZlclxyXG4gIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldCgnL2NhcmRzJyk7XHJcbiAgICAgIGNvbnN0IGNhcmRzID0gcmVzLmRhdGEuY2FyZHMgYXMgQ3JlZGl0Q2FyZEludGVyZmFjZVtdOyAgICBcclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgY2FyZHMsXHJcbiAgICAgICAgZXJyb3I6ZmFsc2VcclxuICAgICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBlcnJvcjp0cnVlXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0Q2FyZCA9IGFzeW5jIChuYW1lIDogc3RyaW5nKSA6IFByb21pc2U8e2NhcmQ/IDogQ3JlZGl0Q2FyZEludGVyZmFjZSwgZXJyb3I/IDogYm9vbGVhbn0+ID0+IHtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgL2NhcmQvJHtuYW1lfWApO1xyXG4gICAgY29uc3QgY2FyZCA9IHJlcy5kYXRhIGFzIENyZWRpdENhcmRJbnRlcmZhY2U7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2FyZCxcclxuICAgICAgZXJyb3I6ZmFsc2VcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yOiB0cnVlXHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb21wYXJlQ2FyZHMgPSBhc3luYyAoaWRzIDogc3RyaW5nW10pIDogUHJvbWlzZTx7Y2FyZHM/IDogQ29tcGFyZUNhcmRzW10sIGVycm9yPyA6IGJvb2xlYW59PiA9PiB7IFxyXG4gIHRyeSB7XHJcbiAgICAvLyBGZXRjaGluZyBjYXJkc1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAvY2FyZHMvY29tcGFyZT9pZHM9JHtpZHN9YCk7XHJcbiAgICBsZXQgY2FyZHMgPSByZXMuZGF0YS5jYXJkc0luZm8gYXMgQ29tcGFyZUNhcmRzW107XHJcblxyXG4gICAgLy8gQ2hlY2sgZm9yIGNhcmRzXHJcbiAgICBpZighY2FyZHMpIHRocm93IG5ldyBFcnJvcigpO1xyXG5cclxuICAgIC8vIEZpbHRlciB1bmRlZmluZWQgY2FyZHNcclxuICAgIGNhcmRzID0gY2FyZHMuZmlsdGVyKGNhcmRzSW5mbyA9PiBjYXJkc0luZm8gIT09IG51bGwpO1xyXG5cclxuICAgIC8vIFJldHVybiBjYXJkc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2FyZHMsXHJcbiAgICAgIGVycm9yOmZhbHNlXHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIC8vIEVycm9yLCByZXR1cm5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVycm9yOiB0cnVlXHJcbiAgICB9XHJcblxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=