webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/List.js":
/*!****************************!*\
  !*** ./components/List.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/Merdoth/Downloads/TodoList/components/List.js";

var deleteStyle = {
  marginLeft: 50,
  display: "block",
  borderRadius: 50,
  marginTop: -15,
  fontSize: "12px",
  height: "20px"
};

var List = function List(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.items.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, item, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: deleteStyle,
      onClick: function onClick() {
        return props.deleteItem(index, item);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, "X"));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ })

})
//# sourceMappingURL=index.js.ab767dcf93b2ca5896a0.hot-update.js.map