webpackHotUpdate_N_E("pages/signup",{

/***/ "./hooks/useInput.js":
/*!***************************!*\
  !*** ./hooks/useInput.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _s = $RefreshSig$();


/* harmony default export */ __webpack_exports__["default"] = (_s(function (initialValue) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue),
      value = _useState[0],
      setValue = _useState[1];

  var handler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }, []);
  return [value, handler];
}, "zwfZiF3C83B9WQnByKaImAoFfFg="));

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaG9va3MvdXNlSW5wdXQuanMiXSwibmFtZXMiOlsiaW5pdGlhbFZhbHVlIiwidXNlU3RhdGUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaGFuZGxlciIsInVzZUNhbGxiYWNrIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRWUsNEVBQUNBLFlBQUQsRUFBaUI7QUFBQTs7QUFBQSxrQkFDRkMsc0RBQVEsQ0FBQ0QsWUFBRCxDQUROO0FBQUEsTUFDckJFLEtBRHFCO0FBQUEsTUFDZEMsUUFEYzs7QUFFNUIsTUFBTUMsT0FBTyxHQUFFQyx5REFBVyxDQUFDLFVBQUNDLENBQUQsRUFBSztBQUM1QkMsV0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQUMsQ0FBQ0csTUFBRixDQUFTUCxLQUFyQjtBQUNBQyxZQUFRLENBQUNHLENBQUMsQ0FBQ0csTUFBRixDQUFTUCxLQUFWLENBQVI7QUFDSCxHQUh5QixFQUd4QixFQUh3QixDQUExQjtBQUtBLFNBQU8sQ0FBQ0EsS0FBRCxFQUFRRSxPQUFSLENBQVA7QUFDSCxDQVJEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NpZ251cC5jODlhMDU4MDIyZTAwMWQ2NmY5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSwgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChpbml0aWFsVmFsdWUpID0+e1xyXG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShpbml0aWFsVmFsdWUpO1xyXG4gICAgY29uc3QgaGFuZGxlciA9dXNlQ2FsbGJhY2soKGUpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0sW10pO1xyXG5cclxuICAgIHJldHVybiBbdmFsdWUsIGhhbmRsZXJdO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9