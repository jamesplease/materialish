(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://materialish.js.org/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("materialish");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Preview = exports.CodeManager = exports.Editor = exports.Markdown = undefined;

var _markdown = __webpack_require__(55);

var _markdown2 = _interopRequireDefault(_markdown);

var _editor = __webpack_require__(57);

var _editor2 = _interopRequireDefault(_editor);

var _codeManager = __webpack_require__(59);

var _codeManager2 = _interopRequireDefault(_codeManager);

var _preview = __webpack_require__(61);

var _preview2 = _interopRequireDefault(_preview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Markdown = _markdown2.default;
exports.Editor = _editor2.default;
exports.CodeManager = _codeManager2.default;
exports.Preview = _preview2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("materialish/icons");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warning = warning;
exports.resetCodeCache = resetCodeCache;
var codeCache = {};

function warning(message, code) {
  // This ensures that each warning type is only logged out one time
  if (code) {
    if (codeCache[code]) {
      return;
    }

    codeCache[code] = true;
  }

  if (console && typeof console.error === 'function') {
    console.error('Warning: ' + message);
  }

  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {
    // Intentionally blank
  }
}

function resetCodeCache() {
  codeCache = {};
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-lowlight");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createElement = exports.findExport = exports.resolveExport = exports.requireById = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};
var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod.default : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return _react2.default.createElement(
    'div',
    null,
    'Loading...'
  );
};
var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return _react2.default.createElement(
    'div',
    null,
    'Error: ',
    error && error.message
  );
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return requireById(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {
      console.warn('chunk not available for synchronous require yet: ' + id + ': ' + err.message, err.stack);
    }
  }

  return null;
};

var requireById = exports.requireById = function requireById(id) {
  if (!isWebpack() && typeof id === 'string') {
    return module.require(id);
  }

  return __webpack_require__(id);
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;

  var exp = findExport(mod, key);
  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';
    var info = { isServer: _isServer, isSync: isSync };
    onLoad(mod, info, props, context);
  }
  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return _react2.default.isValidElement(Component) ? _react2.default.cloneElement(Component, props) : _react2.default.createElement(Component, props);
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _docComponents = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = exports.Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      var homeMarkdown = this.props.homeMarkdown;


      return _react2.default.createElement(_docComponents.Markdown, { markdownText: homeMarkdown, className: 'editorialPage' });
    }
  }]);

  return Home;
}(_react.Component);

exports.default = (0, _reactStatic.withRouteData)(Home);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("fetch-dedupe");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactLowlight = __webpack_require__(10);

var _reactLowlight2 = _interopRequireDefault(_reactLowlight);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CodeHighlighter = function (_Component) {
  _inherits(CodeHighlighter, _Component);

  function CodeHighlighter() {
    _classCallCheck(this, CodeHighlighter);

    return _possibleConstructorReturn(this, (CodeHighlighter.__proto__ || Object.getPrototypeOf(CodeHighlighter)).apply(this, arguments));
  }

  _createClass(CodeHighlighter, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          language = _props.language,
          value = _props.value,
          inline = _props.inline,
          rest = _objectWithoutProperties(_props, ['language', 'value', 'inline']);

      return _react2.default.createElement(_reactLowlight2.default, _extends({
        language: language || 'js',
        value: value,
        inline: inline
      }, rest));
    }
  }]);

  return CodeHighlighter;
}(_react.Component);

exports.default = CodeHighlighter;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Philosophy = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _docComponents = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Philosophy = exports.Philosophy = function (_Component) {
  _inherits(Philosophy, _Component);

  function Philosophy() {
    _classCallCheck(this, Philosophy);

    return _possibleConstructorReturn(this, (Philosophy.__proto__ || Object.getPrototypeOf(Philosophy)).apply(this, arguments));
  }

  _createClass(Philosophy, [{
    key: 'render',
    value: function render() {
      var philosophyMarkdown = this.props.philosophyMarkdown;


      return _react2.default.createElement(_docComponents.Markdown, { markdownText: philosophyMarkdown, className: 'editorialPage' });
    }
  }]);

  return Philosophy;
}(_react.Component);

exports.default = (0, _reactStatic.withRouteData)(Philosophy);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alternatives = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _docComponents = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alternatives = exports.Alternatives = function (_Component) {
  _inherits(Alternatives, _Component);

  function Alternatives() {
    _classCallCheck(this, Alternatives);

    return _possibleConstructorReturn(this, (Alternatives.__proto__ || Object.getPrototypeOf(Alternatives)).apply(this, arguments));
  }

  _createClass(Alternatives, [{
    key: 'render',
    value: function render() {
      var alternativesMarkdown = this.props.alternativesMarkdown;


      return _react2.default.createElement(_docComponents.Markdown, { markdownText: alternativesMarkdown, className: 'editorialPage' });
    }
  }]);

  return Alternatives;
}(_react.Component);

exports.default = (0, _reactStatic.withRouteData)(Alternatives);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Icons = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

__webpack_require__(62);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icons = exports.Icons = function (_Component) {
  _inherits(Icons, _Component);

  function Icons() {
    _classCallCheck(this, Icons);

    return _possibleConstructorReturn(this, (Icons.__proto__ || Object.getPrototypeOf(Icons)).apply(this, arguments));
  }

  _createClass(Icons, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'componentDoc' },
        _react2.default.createElement(
          'h1',
          { className: 'primaryHeader componentDoc_primaryHeader' },
          'Icons'
        ),
        _react2.default.createElement(
          'p',
          { className: 'paragraph' },
          'Material Design includes a collection of icons. Materialish exports these icons as individual React components for you to use in your applications.'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'icons_links' },
          _react2.default.createElement(
            'li',
            { className: 'icons_link' },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/icons/usage' },
              'Usage'
            ),
            ': Learn how to import and use icons in your application'
          ),
          _react2.default.createElement(
            'li',
            { className: 'icons_link' },
            _react2.default.createElement(
              _reactStatic.Link,
              { to: '/icons/catalog' },
              'Catalog'
            ),
            ': View and search the icon collection'
          )
        ),
        _react2.default.createElement(
          'h2',
          { className: 'secondaryHeader componentDoc_standaloneSecondaryHeader' },
          'Useful Links'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'componentDoc_links' },
          _react2.default.createElement(
            'li',
            { className: 'componentDoc_linkItem' },
            _react2.default.createElement(
              'a',
              {
                href: 'https://material.io/tools/icons/?style=baseline',
                className: 'componentDoc_linkAnchor' },
              _react2.default.createElement('i', { className: 'componentDoc_icon zmdi zmdi-file-text' }),
              'Material Design Icons Docs'
            )
          ),
          _react2.default.createElement(
            'li',
            { className: 'componentDoc_linkItem' },
            _react2.default.createElement(
              'a',
              {
                href: 'https://github.com/google/material-design-icons',
                className: 'componentDoc_linkAnchor' },
              _react2.default.createElement('i', { className: 'componentDoc_icon zmdi zmdi-file-text' }),
              'Material Design Icons GitHub Repository'
            )
          )
        )
      );
    }
  }]);

  return Icons;
}(_react.Component);

exports.default = (0, _reactStatic.withRouteData)(Icons);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconsCatalog = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _icons = __webpack_require__(8);

var MaterialishIcons = _interopRequireWildcard(_icons);

var _iconsData = __webpack_require__(63);

var _iconsData2 = _interopRequireDefault(_iconsData);

var _reactClipboard = __webpack_require__(64);

var _reactClipboard2 = _interopRequireDefault(_reactClipboard);

var _lodash = __webpack_require__(7);

var _lodash2 = _interopRequireDefault(_lodash);

var _materialish = __webpack_require__(3);

var _iconContentCopy = __webpack_require__(65);

var _iconContentCopy2 = _interopRequireDefault(_iconContentCopy);

var _reactStatic = __webpack_require__(2);

var _aliases = __webpack_require__(66);

var _aliases2 = _interopRequireDefault(_aliases);

var _reactOver = __webpack_require__(67);

var _reactOver2 = _interopRequireDefault(_reactOver);

var _codeHighlighter = __webpack_require__(15);

var _codeHighlighter2 = _interopRequireDefault(_codeHighlighter);

var _reactOverAnimations = __webpack_require__(86);

__webpack_require__(87);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IconsCatalog = exports.IconsCatalog = function (_Component) {
  _inherits(IconsCatalog, _Component);

  function IconsCatalog() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, IconsCatalog);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = IconsCatalog.__proto__ || Object.getPrototypeOf(IconsCatalog)).call.apply(_ref, [this].concat(args))), _this), _this.searchRef = (0, _react.createRef)(), _this.resetSearch = function () {
      var location = _this.props.history.location;
      var pathname = location.pathname;


      _this.props.history.replace({
        pathname: pathname,
        query: {}
      });

      if (_this.searchRef.current) {
        _this.searchRef.current.focus();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(IconsCatalog, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var location = this.props.history.location;
      var _location$query = location.query,
          query = _location$query === undefined ? {} : _location$query,
          pathname = location.pathname;
      var _query$search = query.search,
          search = _query$search === undefined ? '' : _query$search;


      var lowercaseQuery = search.toLowerCase();

      var filteredCategories = _lodash2.default.mapValues(_iconsData2.default.categories, function (categoryIcons, categoryName) {
        return categoryIcons.filter(function (icon) {
          if (!icon.iconName || !icon.iconClass) {
            return false;
          }

          var iconAliases = _aliases2.default[icon.iconName] || [];

          var wordsToCheck = [].concat(_toConsumableArray(iconAliases), [icon.iconName.toLowerCase(), icon.iconClass.toLowerCase(), categoryName.toLowerCase()]);

          return wordsToCheck.some(function (word) {
            return word.includes(lowercaseQuery);
          });
        });
      });

      var visibleCount = _lodash2.default.chain(filteredCategories).flatMap().uniqBy('iconName').value().length;
      var totalCount = _lodash2.default.size(_iconsData2.default.icons);

      return _react2.default.createElement(
        _reactOver2.default.Provider,
        null,
        _react2.default.createElement(
          _reactOver2.default.Consumer,
          null,
          function (_ref2) {
            var open = _ref2.open;

            return _react2.default.createElement(
              'div',
              { className: 'iconsCatalog' },
              _react2.default.createElement(
                'h1',
                { className: 'primaryHeader iconsCatalog_primaryHeader' },
                'Icons Catalog'
              ),
              _react2.default.createElement(
                'div',
                { className: 'iconsCatalog_heading' },
                _react2.default.createElement(_materialish.Input, {
                  clearable: true,
                  onClear: function onClear() {
                    _this2.resetSearch();
                  },
                  nodeRef: _this2.searchRef,
                  className: 'iconsCatalog_searchInput',
                  autoComplete: 'off',
                  autoFocus: true,
                  inputMode: 'text',
                  spellCheck: 'false',
                  maxLength: '50',
                  type: 'text',
                  placeholder: 'Filter icons',
                  value: search,
                  onChange: function onChange(e) {
                    return _this2.props.history.replace({
                      pathname: pathname,
                      query: {
                        search: e.currentTarget.value
                      }
                    });
                  }
                }),
                _react2.default.createElement(
                  'p',
                  { className: 'iconsCatalog_count' },
                  'Displaying ',
                  _react2.default.createElement(
                    'b',
                    null,
                    visibleCount
                  ),
                  ' of ',
                  _react2.default.createElement(
                    'b',
                    null,
                    totalCount
                  ),
                  ' ',
                  'icons. Click an icon to see how to import it.'
                )
              ),
              _react2.default.createElement(
                'div',
                null,
                _lodash2.default.map(filteredCategories, function (category, categoryName) {
                  if (!category.length) {
                    return null;
                  }

                  return _react2.default.createElement(
                    'div',
                    { className: 'iconsCatalog_category', key: categoryName },
                    _react2.default.createElement(
                      'h2',
                      { className: 'iconsCategory_categoryHeader' },
                      _lodash2.default.startCase(categoryName)
                    ),
                    _react2.default.createElement(
                      'ul',
                      { className: 'iconsCatalog_iconList' },
                      _lodash2.default.map(category, function (icon, index) {
                        var Comp = MaterialishIcons[icon.iconClass];
                        var importStatement = 'import ' + icon.iconClass + ' from \'materialish/' + icon.fileName + '\';';
                        return _react2.default.createElement(
                          'div',
                          {
                            className: 'iconsCatalog_icon',
                            key: icon.iconName + '-' + index,
                            onClick: function onClick(e) {
                              open({
                                triggerEl: e.currentTarget,
                                targetEl: e.currentTarget,
                                component: _react2.default.createElement(
                                  _materialish.Elevation,
                                  { depth: 2 },
                                  _react2.default.createElement(
                                    'div',
                                    { className: 'iconsCatalog_iconDetails' },
                                    _react2.default.createElement(Comp, { size: '1.4rem' }),
                                    _react2.default.createElement(
                                      'span',
                                      { className: 'iconsCatalog_iconClass' },
                                      icon.iconClass
                                    ),
                                    _react2.default.createElement(
                                      'div',
                                      { className: 'iconsCatalog_detailsImport' },
                                      _react2.default.createElement(_codeHighlighter2.default, {
                                        className: 'iconsCatalog_importStatement',
                                        inline: true,
                                        value: importStatement
                                      }),
                                      _react2.default.createElement(
                                        _reactClipboard2.default,
                                        {
                                          className: 'iconsCatalog_copyImportBtn',
                                          'data-clipboard-text': importStatement },
                                        _react2.default.createElement(_iconContentCopy2.default, { size: '1.3em' })
                                      )
                                    )
                                  )
                                ),
                                config: {
                                  allowOverlap: true,
                                  overlay: 'rgba(0, 0, 0, 0)',
                                  id: icon.iconName + '-' + index,
                                  closeOnScroll: 30,
                                  position: 'top',
                                  origin: 'top',
                                  removeOnClickOutside: true,
                                  animation: (0, _reactOverAnimations.morph)(200)
                                }
                              });
                            } },
                          _react2.default.createElement(Comp, { size: '1.4rem' }),
                          _react2.default.createElement(
                            'span',
                            { className: 'iconsCatalog_iconClass' },
                            icon.iconClass
                          )
                        );
                      })
                    )
                  );
                })
              )
            );
          }
        )
      );
    }
  }]);

  return IconsCatalog;
}(_react.Component);

exports.default = (0, _reactStatic.withRouteData)(IconsCatalog);

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("no-scroll");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Usage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _materialish = __webpack_require__(3);

var Materialish = _interopRequireWildcard(_materialish);

var _icons = __webpack_require__(8);

var MaterialishIcons = _interopRequireWildcard(_icons);

var _reactStatic = __webpack_require__(2);

var _docComponents = __webpack_require__(5);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var demoScope = _extends({
  React: _react2.default,
  Component: _react.Component,
  Fragment: _react.Fragment,
  PropTypes: _propTypes2.default
}, Materialish, MaterialishIcons);

var Usage = exports.Usage = function (_Component) {
  _inherits(Usage, _Component);

  function Usage() {
    _classCallCheck(this, Usage);

    return _possibleConstructorReturn(this, (Usage.__proto__ || Object.getPrototypeOf(Usage)).apply(this, arguments));
  }

  _createClass(Usage, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          markdown = _props.markdown,
          example = _props.example;


      return _react2.default.createElement(
        'div',
        { className: 'componentDoc' },
        _react2.default.createElement(
          'h1',
          { className: 'primaryHeader componentDoc_primaryHeader' },
          'Using Icons'
        ),
        _react2.default.createElement(
          'p',
          { className: 'paragraph' },
          'Each icon provided by Materialish is an individual React Component. Because the components render SVG, you do not need to import CSS file to use the icons.'
        ),
        _react2.default.createElement(
          _docComponents.CodeManager,
          { initialCode: example, scope: demoScope },
          function (_ref) {
            var inputCode = _ref.inputCode,
                compiledCode = _ref.compiledCode,
                err = _ref.err,
                handleCodeChange = _ref.handleCodeChange;
            return _react2.default.createElement(
              _react.Fragment,
              null,
              inputCode && _react2.default.createElement(_docComponents.Preview, {
                className: 'componentDoc_preview',
                code: inputCode,
                compiledCode: compiledCode,
                scope: demoScope,
                err: err
              }),
              _react2.default.createElement(
                'div',
                { className: 'componentDoc_note' },
                _react2.default.createElement(
                  'span',
                  { className: 'componentDoc_noteEmoji' },
                  '\uD83D\uDE4C'
                ),
                ' Heads up! This code is editable. The preview above will update to reflect your changes.'
              ),
              _react2.default.createElement(_docComponents.Editor, {
                className: 'componentDoc_editor',
                theme: 'oceanic-next',
                codeText: inputCode,
                onChange: handleCodeChange
              }),
              err && _react2.default.createElement(
                'pre',
                { className: 'componentDoc_errorMsg' },
                err.toString()
              )
            );
          }
        ),
        _react2.default.createElement(_docComponents.Markdown, { markdownText: markdown })
      );
    }
  }]);

  return Usage;
}(_react.Component);

exports.default = (0, _reactStatic.withRouteData)(Usage);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

__webpack_require__(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Components = function (_Component) {
  _inherits(Components, _Component);

  function Components() {
    _classCallCheck(this, Components);

    return _possibleConstructorReturn(this, (Components.__proto__ || Object.getPrototypeOf(Components)).apply(this, arguments));
  }

  _createClass(Components, [{
    key: 'render',
    value: function render() {
      var components = this.props.components;


      var sortedComponentsData = Array.from(components).sort(function (a, b) {
        if (a.componentKey === b.componentKey) {
          return 0;
        }

        return a.componentKey < b.componentKey ? -1 : 1;
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          { className: 'primaryHeader' },
          'Components'
        ),
        _react2.default.createElement(
          'p',
          { className: 'paragraph' },
          'Materialish is a collection of React components. Select the component you would like to read more about.'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'components_list' },
          sortedComponentsData.map(function (component) {
            return _react2.default.createElement(
              'li',
              { key: component.componentKey, className: 'components_listItem' },
              _react2.default.createElement(
                _reactStatic.Link,
                { to: '/components/' + component.url },
                component.name
              )
            );
          })
        )
      );
    }
  }]);

  return Components;
}(_react.Component);

exports.default = (0, _reactStatic.withRouteData)(Components);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComponentDoc = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _materialish = __webpack_require__(3);

var Materialish = _interopRequireWildcard(_materialish);

var _icons = __webpack_require__(8);

var MaterialishIcons = _interopRequireWildcard(_icons);

var _reactStatic = __webpack_require__(2);

var _docComponents = __webpack_require__(5);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(89);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var demoScope = _extends({
  React: _react2.default,
  Component: _react.Component,
  Fragment: _react.Fragment,
  PropTypes: _propTypes2.default
}, Materialish, MaterialishIcons);

var rootSourceUrl = 'https://github.com/jamesplease/materialish/tree/master/src/';

var ComponentDoc = exports.ComponentDoc = function (_Component) {
  _inherits(ComponentDoc, _Component);

  function ComponentDoc() {
    _classCallCheck(this, ComponentDoc);

    return _possibleConstructorReturn(this, (ComponentDoc.__proto__ || Object.getPrototypeOf(ComponentDoc)).apply(this, arguments));
  }

  _createClass(ComponentDoc, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          component = _props.component,
          markdown = _props.markdown,
          example = _props.example;
      var name = component.name,
          description = component.description,
          componentKey = component.componentKey,
          sourceLink = component.sourceLink,
          materialDocsLink = component.materialDocsLink,
          _component$wrapperSty = component.wrapperStyle,
          wrapperStyle = _component$wrapperSty === undefined ? {} : _component$wrapperSty,
          _component$editorHeig = component.editorHeight,
          editorHeight = _component$editorHeig === undefined ? '300px' : _component$editorHeig;


      var sourceLinkToUse = sourceLink ? sourceLink : '' + rootSourceUrl + componentKey;

      return _react2.default.createElement(
        'div',
        { className: 'componentDoc' },
        _react2.default.createElement(
          'h1',
          { className: 'primaryHeader componentDoc_primaryHeader' },
          name
        ),
        _react2.default.createElement(
          'p',
          { className: 'paragraph' },
          description
        ),
        _react2.default.createElement(
          _docComponents.CodeManager,
          { initialCode: example, scope: demoScope },
          function (_ref) {
            var inputCode = _ref.inputCode,
                compiledCode = _ref.compiledCode,
                err = _ref.err,
                handleCodeChange = _ref.handleCodeChange;

            return _react2.default.createElement(
              _react.Fragment,
              null,
              inputCode && _react2.default.createElement(_docComponents.Preview, {
                wrapperStyle: wrapperStyle,
                className: 'componentDoc_preview',
                code: inputCode,
                compiledCode: compiledCode,
                err: err,
                scope: demoScope
              }),
              _react2.default.createElement(
                'div',
                { className: 'componentDoc_note' },
                _react2.default.createElement(
                  'div',
                  { className: 'componentDoc_noteContent' },
                  _react2.default.createElement(
                    'span',
                    { className: 'componentDoc_noteEmoji' },
                    '\uD83D\uDE4C'
                  ),
                  ' Heads up! This code is editable. The preview above will update to reflect your changes.'
                )
              ),
              _react2.default.createElement(_docComponents.Editor, {
                style: {
                  '--editorHeight': editorHeight
                },
                className: 'componentDoc_editor',
                theme: 'oceanic-next',
                codeText: inputCode,
                onChange: handleCodeChange
              }),
              err && _react2.default.createElement(
                'pre',
                { className: 'componentDoc_errorMsg' },
                err.toString()
              )
            );
          }
        ),
        _react2.default.createElement(_docComponents.Markdown, { markdownText: markdown }),
        _react2.default.createElement(
          'h2',
          { className: 'secondaryHeader' },
          'Useful Links'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'componentDoc_links' },
          _react2.default.createElement(
            'li',
            { className: 'componentDoc_linkItem' },
            _react2.default.createElement(
              'a',
              { href: sourceLinkToUse, className: 'componentDoc_linkAnchor' },
              _react2.default.createElement('i', { className: 'componentDoc_icon zmdi zmdi-code' }),
              'Source Code'
            )
          ),
          materialDocsLink && _react2.default.createElement(
            'li',
            { className: 'componentDoc_linkItem' },
            _react2.default.createElement(
              'a',
              { href: materialDocsLink, className: 'componentDoc_linkAnchor' },
              _react2.default.createElement('i', { className: 'componentDoc_icon zmdi zmdi-file-text' }),
              'Material Guidelines'
            )
          )
        )
      );
    }
  }]);

  return ComponentDoc;
}(_react.Component);

exports.default = (0, _reactStatic.withRouteData)(ComponentDoc);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextFields = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _materialish = __webpack_require__(3);

__webpack_require__(90);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextFields = exports.TextFields = function (_Component) {
  _inherits(TextFields, _Component);

  function TextFields() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, TextFields);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextFields.__proto__ || Object.getPrototypeOf(TextFields)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      field: 'Paris, France',
      input: '',
      textarea: ''
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TextFields, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var component = this.props.component;
      var materialDocsLink = component.materialDocsLink;
      var _state = this.state,
          input = _state.input,
          field = _state.field,
          textarea = _state.textarea;


      return _react2.default.createElement(
        'div',
        { className: 'componentDoc' },
        _react2.default.createElement(
          'h1',
          { className: 'primaryHeader componentDoc_primaryHeader' },
          'Text Fields'
        ),
        _react2.default.createElement(
          'p',
          { className: 'paragraph' },
          'Text fields let users enter and edit text.'
        ),
        _react2.default.createElement(
          _materialish.Table,
          { className: 'componentDoc_componentsTable' },
          _react2.default.createElement(
            _materialish.Table.Head,
            null,
            _react2.default.createElement(
              _materialish.Table.HeadRow,
              null,
              _react2.default.createElement(
                _materialish.Table.HeadCell,
                { width: '270px' },
                'Preview'
              ),
              _react2.default.createElement(
                _materialish.Table.HeadCell,
                { width: '150px' },
                'Name'
              ),
              _react2.default.createElement(
                _materialish.Table.HeadCell,
                null,
                'Description'
              )
            )
          ),
          _react2.default.createElement(
            _materialish.Table.Body,
            null,
            _react2.default.createElement(
              _materialish.Table.Row,
              null,
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  _materialish.Field,
                  { required: true },
                  _react2.default.createElement(
                    _materialish.Field.Label,
                    null,
                    'Place of Residence'
                  ),
                  _react2.default.createElement(_materialish.Field.Input, {
                    error: true,
                    value: field,
                    onChange: function onChange(e) {
                      return _this2.setState({ field: e.target.value });
                    },
                    className: 'textFields_exampleField'
                  }),
                  _react2.default.createElement(
                    _materialish.Field.ErrorMessage,
                    null,
                    'Invalid place of residence.'
                  )
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/components/field' },
                  'Field'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                'provides a text input, label, and error message'
              )
            ),
            _react2.default.createElement(
              _materialish.Table.Row,
              null,
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(_materialish.Input, {
                  value: input,
                  onChange: function onChange(e) {
                    return _this2.setState({ input: e.target.value });
                  },
                  className: 'textFields_exampleInput'
                })
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/components/input' },
                  'Input'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                'a standalone text input, for when you do not need a label or error message'
              )
            ),
            _react2.default.createElement(
              _materialish.Table.Row,
              null,
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(_materialish.TextArea, {
                  value: textarea,
                  onChange: function onChange(e) {
                    return _this2.setState({ textarea: e.target.value });
                  },
                  style: { width: '230px', minWidth: '230px' }
                })
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/components/text-area' },
                  'TextArea'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                'a standalone, multiline text input, for when you do not need a label or error message'
              )
            )
          )
        ),
        _react2.default.createElement(
          'h2',
          { className: 'secondaryHeader componentDoc_standaloneSecondaryHeader' },
          'Useful Links'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'componentDoc_links' },
          _react2.default.createElement(
            'li',
            { className: 'componentDoc_linkItem' },
            _react2.default.createElement(
              'a',
              { href: materialDocsLink, className: 'componentDoc_linkAnchor' },
              _react2.default.createElement('i', { className: 'componentDoc_icon zmdi zmdi-file-text' }),
              ' Material Guidelines'
            )
          )
        )
      );
    }
  }]);

  return TextFields;
}(_react.Component);

exports.default = (0, _reactStatic.withRouteData)(TextFields);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProgressIndicators = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _materialish = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressIndicators = exports.ProgressIndicators = function (_Component) {
  _inherits(ProgressIndicators, _Component);

  function ProgressIndicators() {
    _classCallCheck(this, ProgressIndicators);

    return _possibleConstructorReturn(this, (ProgressIndicators.__proto__ || Object.getPrototypeOf(ProgressIndicators)).apply(this, arguments));
  }

  _createClass(ProgressIndicators, [{
    key: 'render',
    value: function render() {
      var component = this.props.component;
      var materialDocsLink = component.materialDocsLink;


      return _react2.default.createElement(
        'div',
        { className: 'componentDoc' },
        _react2.default.createElement(
          'h1',
          { className: 'primaryHeader componentDoc_primaryHeader' },
          'Progress Indicators'
        ),
        _react2.default.createElement(
          'p',
          { className: 'paragraph' },
          'Progress indicators provide information regarding the progress of a deterministic or nondeterministic process.'
        ),
        _react2.default.createElement(
          _materialish.Table,
          { className: 'componentDoc_componentsTable' },
          _react2.default.createElement(
            _materialish.Table.Head,
            null,
            _react2.default.createElement(
              _materialish.Table.HeadRow,
              null,
              _react2.default.createElement(
                _materialish.Table.HeadCell,
                { width: '100px' },
                'Preview'
              ),
              _react2.default.createElement(
                _materialish.Table.HeadCell,
                { width: '150px' },
                'Name'
              ),
              _react2.default.createElement(
                _materialish.Table.HeadCell,
                null,
                'Description'
              )
            )
          ),
          _react2.default.createElement(
            _materialish.Table.Body,
            null,
            _react2.default.createElement(
              _materialish.Table.Row,
              null,
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(_materialish.Spinner, null)
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/components/spinner' },
                  'Spinner'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                'a nondeterministic loading indicator'
              )
            ),
            _react2.default.createElement(
              _materialish.Table.Row,
              null,
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(_materialish.LoadingDots, null)
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/components/loading-dots' },
                  'Loading Dots'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                'another nondeterministic loading indicator'
              )
            ),
            _react2.default.createElement(
              _materialish.Table.Row,
              null,
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(_materialish.ProgressBar, { loaded: 75 })
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/components/progress-bar' },
                  'Progress Bar'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                'a horizontal loading indicator that can represent deterministic and nondeterministic processes'
              )
            )
          )
        ),
        _react2.default.createElement(
          'h2',
          { className: 'secondaryHeader componentDoc_standaloneSecondaryHeader' },
          'Useful Links'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'componentDoc_links' },
          _react2.default.createElement(
            'li',
            { className: 'componentDoc_linkItem' },
            _react2.default.createElement(
              'a',
              { href: materialDocsLink, className: 'componentDoc_linkAnchor' },
              _react2.default.createElement('i', { className: 'componentDoc_icon zmdi zmdi-file-text' }),
              ' Material Guidelines'
            )
          )
        )
      );
    }
  }]);

  return ProgressIndicators;
}(_react.Component);

exports.default = (0, _reactStatic.withRouteData)(ProgressIndicators);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectionControls = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _materialish = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectionControls = exports.SelectionControls = function (_Component) {
  _inherits(SelectionControls, _Component);

  function SelectionControls() {
    _classCallCheck(this, SelectionControls);

    return _possibleConstructorReturn(this, (SelectionControls.__proto__ || Object.getPrototypeOf(SelectionControls)).apply(this, arguments));
  }

  _createClass(SelectionControls, [{
    key: 'render',
    value: function render() {
      var component = this.props.component;
      var materialDocsLink = component.materialDocsLink;


      return _react2.default.createElement(
        'div',
        { className: 'componentDoc' },
        _react2.default.createElement(
          'h1',
          { className: 'primaryHeader componentDoc_primaryHeader' },
          'Selection Controls'
        ),
        _react2.default.createElement(
          'p',
          { className: 'paragraph' },
          'Selection controls allow the user to select options.'
        ),
        _react2.default.createElement(
          _materialish.Table,
          { className: 'componentDoc_componentsTable' },
          _react2.default.createElement(
            _materialish.Table.Head,
            null,
            _react2.default.createElement(
              _materialish.Table.HeadRow,
              null,
              _react2.default.createElement(
                _materialish.Table.HeadCell,
                { width: '100px' },
                'Preview'
              ),
              _react2.default.createElement(
                _materialish.Table.HeadCell,
                { width: '150px' },
                'Name'
              ),
              _react2.default.createElement(
                _materialish.Table.HeadCell,
                null,
                'Description'
              )
            )
          ),
          _react2.default.createElement(
            _materialish.Table.Body,
            null,
            _react2.default.createElement(
              _materialish.Table.Row,
              null,
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(_materialish.Checkbox, null)
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/components/checkbox' },
                  'Checkbox'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                'represents a boolean value that can be in one of two states, true or false'
              )
            ),
            _react2.default.createElement(
              _materialish.Table.Row,
              null,
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(_materialish.Radio, null)
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/components/radio' },
                  'Radio Button'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                'represents one option among several choices'
              )
            ),
            _react2.default.createElement(
              _materialish.Table.Row,
              null,
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(_materialish.Switch, null)
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/components/switch' },
                  'Switch'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                'represents a value that can be toggled on or off'
              )
            )
          )
        ),
        _react2.default.createElement(
          'h2',
          { className: 'secondaryHeader componentDoc_standaloneSecondaryHeader' },
          'Useful Links'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'componentDoc_links' },
          _react2.default.createElement(
            'li',
            { className: 'componentDoc_linkItem' },
            _react2.default.createElement(
              'a',
              { href: materialDocsLink, className: 'componentDoc_linkAnchor' },
              _react2.default.createElement('i', { className: 'componentDoc_icon zmdi zmdi-file-text' }),
              ' Material Guidelines'
            )
          )
        )
      );
    }
  }]);

  return SelectionControls;
}(_react.Component);

exports.default = (0, _reactStatic.withRouteData)(SelectionControls);

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Buttons = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _materialish = __webpack_require__(3);

var _iconAddAlert = __webpack_require__(91);

var _iconAddAlert2 = _interopRequireDefault(_iconAddAlert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Buttons = exports.Buttons = function (_Component) {
  _inherits(Buttons, _Component);

  function Buttons() {
    _classCallCheck(this, Buttons);

    return _possibleConstructorReturn(this, (Buttons.__proto__ || Object.getPrototypeOf(Buttons)).apply(this, arguments));
  }

  _createClass(Buttons, [{
    key: 'render',
    value: function render() {
      var component = this.props.component;
      var materialDocsLink = component.materialDocsLink;


      return _react2.default.createElement(
        'div',
        { className: 'componentDoc' },
        _react2.default.createElement(
          'h1',
          { className: 'primaryHeader componentDoc_primaryHeader' },
          'Buttons'
        ),
        _react2.default.createElement(
          'p',
          { className: 'paragraph' },
          'Buttons represent that an action will occur when the user clicks or touches them.'
        ),
        _react2.default.createElement(
          _materialish.Table,
          { className: 'componentDoc_componentsTable' },
          _react2.default.createElement(
            _materialish.Table.Head,
            null,
            _react2.default.createElement(
              _materialish.Table.HeadRow,
              null,
              _react2.default.createElement(
                _materialish.Table.HeadCell,
                { width: '170px' },
                'Preview'
              ),
              _react2.default.createElement(
                _materialish.Table.HeadCell,
                { width: '150px' },
                'Name'
              ),
              _react2.default.createElement(
                _materialish.Table.HeadCell,
                null,
                'Description'
              )
            )
          ),
          _react2.default.createElement(
            _materialish.Table.Body,
            null,
            _react2.default.createElement(
              _materialish.Table.Row,
              null,
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  _materialish.Button,
                  null,
                  'Click Me'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/components/button' },
                  'Button'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                'a button that has text, and may optionally also include an icon'
              )
            ),
            _react2.default.createElement(
              _materialish.Table.Row,
              null,
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  _materialish.IconButton,
                  null,
                  _react2.default.createElement(_iconAddAlert2.default, null)
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/components/icon-button' },
                  'Icon Button'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                'a round button with an icon, and no text'
              )
            )
          )
        ),
        _react2.default.createElement(
          'h2',
          { className: 'secondaryHeader componentDoc_standaloneSecondaryHeader' },
          'Useful Links'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'componentDoc_links' },
          _react2.default.createElement(
            'li',
            { className: 'componentDoc_linkItem' },
            _react2.default.createElement(
              'a',
              { href: materialDocsLink, className: 'componentDoc_linkAnchor' },
              _react2.default.createElement('i', { className: 'componentDoc_icon zmdi zmdi-file-text' }),
              ' Material Guidelines'
            )
          )
        )
      );
    }
  }]);

  return Buttons;
}(_react.Component);

exports.default = (0, _reactStatic.withRouteData)(Buttons);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Chips = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _materialish = __webpack_require__(3);

var _iconBusiness = __webpack_require__(92);

var _iconBusiness2 = _interopRequireDefault(_iconBusiness);

var _iconPhoneIphone = __webpack_require__(93);

var _iconPhoneIphone2 = _interopRequireDefault(_iconPhoneIphone);

var _iconEmail = __webpack_require__(94);

var _iconEmail2 = _interopRequireDefault(_iconEmail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Chips = exports.Chips = function (_Component) {
  _inherits(Chips, _Component);

  function Chips() {
    _classCallCheck(this, Chips);

    return _possibleConstructorReturn(this, (Chips.__proto__ || Object.getPrototypeOf(Chips)).apply(this, arguments));
  }

  _createClass(Chips, [{
    key: 'render',
    value: function render() {
      var component = this.props.component;
      var materialDocsLink = component.materialDocsLink;


      return _react2.default.createElement(
        'div',
        { className: 'componentDoc' },
        _react2.default.createElement(
          'h1',
          { className: 'primaryHeader componentDoc_primaryHeader' },
          'Chips'
        ),
        _react2.default.createElement(
          'p',
          { className: 'paragraph' },
          'Chips are versatile, compact elements that represent an input, attribute, or action. Materialish provides several different Components that reflect the different uses of Chips.'
        ),
        _react2.default.createElement(
          'p',
          { className: 'paragraph' },
          'Although each chip is visually similar, they are implemented with different DOM elements under-the-hood, and consequently behave in slightly different ways.'
        ),
        _react2.default.createElement(
          'p',
          { className: 'paragraph' },
          'Pick the Chip that is most appropriate for your use case.'
        ),
        _react2.default.createElement(
          _materialish.Table,
          { className: 'componentDoc_componentsTable' },
          _react2.default.createElement(
            _materialish.Table.Head,
            null,
            _react2.default.createElement(
              _materialish.Table.HeadRow,
              null,
              _react2.default.createElement(
                _materialish.Table.HeadCell,
                { width: '170px' },
                'Preview'
              ),
              _react2.default.createElement(
                _materialish.Table.HeadCell,
                { width: '110px' },
                'Name'
              ),
              _react2.default.createElement(
                _materialish.Table.HeadCell,
                { width: '90px' },
                'Element'
              ),
              _react2.default.createElement(
                _materialish.Table.HeadCell,
                null,
                'Description'
              )
            )
          ),
          _react2.default.createElement(
            _materialish.Table.Body,
            null,
            _react2.default.createElement(
              _materialish.Table.Row,
              null,
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  _materialish.InputChip,
                  { icon: _react2.default.createElement(_iconBusiness2.default, null) },
                  'San Francisco'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/components/input-chip' },
                  'Input Chip'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  'code',
                  null,
                  'div'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                'represents an entity or different attributes'
              )
            ),
            _react2.default.createElement(
              _materialish.Table.Row,
              null,
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  _materialish.ActionChip,
                  { onClick: function onClick() {}, icon: _react2.default.createElement(_iconEmail2.default, null) },
                  'Send Email'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/components/action-chip' },
                  'Action Chip'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  'code',
                  null,
                  'button'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                'an alternative to buttons'
              )
            ),
            _react2.default.createElement(
              _materialish.Table.Row,
              null,
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  _materialish.ChoiceChip,
                  { name: 'size', icon: _react2.default.createElement(_iconPhoneIphone2.default, null) },
                  'Phone'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/components/choice-chip' },
                  'Choice Chip'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  'code',
                  null,
                  'radio'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                'an alternative to radio buttons'
              )
            ),
            _react2.default.createElement(
              _materialish.Table.Row,
              null,
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  _materialish.FilterChip,
                  null,
                  'Netflix'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  _reactStatic.Link,
                  { to: '/components/filter-chip' },
                  'Filter Chip'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                _react2.default.createElement(
                  'code',
                  null,
                  'checkbox'
                )
              ),
              _react2.default.createElement(
                _materialish.Table.Cell,
                null,
                'an alternative to checkboxes'
              )
            )
          )
        ),
        _react2.default.createElement(
          'h2',
          { className: 'secondaryHeader componentDoc_standaloneSecondaryHeader' },
          'Useful Links'
        ),
        _react2.default.createElement(
          'ul',
          { className: 'componentDoc_links' },
          _react2.default.createElement(
            'li',
            { className: 'componentDoc_linkItem' },
            _react2.default.createElement(
              'a',
              { href: materialDocsLink, className: 'componentDoc_linkAnchor' },
              _react2.default.createElement('i', { className: 'componentDoc_icon zmdi zmdi-file-text' }),
              ' Material Guidelines'
            )
          )
        )
      );
    }
  }]);

  return Chips;
}(_react.Component);

exports.default = (0, _reactStatic.withRouteData)(Chips);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = function (_Component) {
  _inherits(NotFound, _Component);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h1",
          { className: "primaryHeader" },
          "Not Found"
        ),
        _react2.default.createElement(
          "p",
          { className: "paragraph" },
          "\uD83D\uDE48 This page could not be found."
        )
      );
    }
  }]);

  return NotFound;
}(_react.Component);

exports.default = NotFound;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

__webpack_require__(31);

__webpack_require__(32);

__webpack_require__(33);

__webpack_require__(34);

__webpack_require__(35);

__webpack_require__(36);

__webpack_require__(37);

__webpack_require__(38);

__webpack_require__(43);

var _app = __webpack_require__(45);

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This export is used for static rendering
exports.default = _app2.default;


if (typeof document !== 'undefined') {
  _reactDom2.default.render(_react2.default.createElement(_app2.default, null), document.getElementById('root'));
}

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("focus-visible");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ":root{--maxAppWidth:1200px;--standardContentPadding:20px;--appBodyPadding:40px;--navWidth:300px;--headerHeight:65px;--appTopPadding:30px;--mainColor:#6045f5;--mt-baseFontSize:16px}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;position:relative}body,html{background-color:#fff;margin:0;padding:0;font-family:Roboto,sans-serif}#root,.app_body,body,html{min-height:calc(100vh - var(--headerHeight))}.contents{max-width:var(--maxAppWidth);padding:0 var(--standardContentPadding);margin:0 auto}ul{margin:0;padding:0;list-style:none}a{text-decoration:none}", ""]);

// exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "body{font-size:1rem;-webkit-font-smoothing:antialiased}.markdown h1,.markdown h2,.primaryHeader,.secondaryHeader{color:var(--mainColor);font-weight:400;-webkit-font-smoothing:antialiased;padding:0}.markdown h1,.primaryHeader{margin:45px 0 30px;font-size:2.3rem}.componentDoc_editor~.markdown h1{margin-top:80px;font-size:2.6rem}.markdown h1 code{padding:0 5px;margin-left:-5px;border-radius:3px}.markdown h1~h1+p+h2,.markdown h1~h1+p+p+h2{margin-top:30px}.markdown h1:first-child,.primaryHeader:first-child{margin-top:25px}.markdown h2,.secondaryHeader{margin:80px 0 20px;font-size:1.5rem}.markdown h1+h2{margin-top:10px}.editorialPage .secondaryHeader,.editorialPage h2{margin-top:50px}.componentDoc_standaloneSecondaryHeader{margin-top:60px}a{color:var(--mainColor)}.markdown pre{border:1px solid #d8e4fb}.markdown code,.markdown pre{background-color:#f4f8ff}.hljs{color:#000}.markdown pre{padding:13px 10px;color:#514056;border-radius:2px;font-size:1.2rem;line-height:1.4}.markdown p,.paragraph{line-height:1.7}.markdown ul{margin-left:40px;list-style:inherit}.markdown li{margin-bottom:10px;line-height:1.7}", ""]);

// exports


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".CodeMirror{font-family:monospace;height:300px;color:#000;direction:ltr}.CodeMirror-lines{padding:4px 0}.CodeMirror pre{padding:0 4px}.CodeMirror-gutter-filler,.CodeMirror-scrollbar-filler{background-color:#fff}.CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{width:auto;border:0!important;background:#7e7}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-fat-cursor-mark{background-color:rgba(20,255,20,.5)}.cm-animate-fat-cursor,.cm-fat-cursor-mark{-webkit-animation:blink 1.06s steps(1) infinite;animation:blink 1.06s steps(1) infinite}.cm-animate-fat-cursor{width:auto;border:0;background-color:#7e7}@-webkit-keyframes blink{50%{background-color:transparent}}@keyframes blink{50%{background-color:transparent}}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-rulers{position:absolute;left:0;right:0;top:-50px;bottom:-20px;overflow:hidden}.CodeMirror-ruler{border-left:1px solid #ccc;top:0;bottom:0;position:absolute}.cm-s-default .cm-header{color:blue}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-type,.cm-s-default .cm-variable-3{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta,.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-invalidchar,.cm-s-default .cm-error{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}.CodeMirror-matchingtag{background:rgba(255,150,0,.3)}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{position:relative;overflow:hidden;background:#fff}.CodeMirror-scroll{overflow:scroll!important;margin-bottom:-30px;margin-right:-30px;padding-bottom:30px;height:100%;outline:none;position:relative}.CodeMirror-sizer{position:relative;border-right:30px solid transparent}.CodeMirror-gutter-filler,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-vscrollbar{position:absolute;z-index:6;display:none}.CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}.CodeMirror-scrollbar-filler{right:0;bottom:0}.CodeMirror-gutter-filler{left:0;bottom:0}.CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}.CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-30px}.CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:none!important;border:none!important}.CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}.CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}.CodeMirror-gutter-wrapper ::selection{background-color:transparent}.CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre{border-radius:0;border-width:0;background:transparent;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;-webkit-font-variant-ligatures:contextual;font-variant-ligatures:contextual}.CodeMirror-wrap pre{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{position:absolute;left:0;right:0;top:0;bottom:0;z-index:0}.CodeMirror-linewidget{position:relative;z-index:2;padding:.1px}.CodeMirror-rtl pre{direction:rtl}.CodeMirror-code{outline:none}.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber,.CodeMirror-scroll,.CodeMirror-sizer{-webkit-box-sizing:content-box;box-sizing:content-box}.CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}.CodeMirror-cursor{position:absolute;pointer-events:none}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}.CodeMirror-focused div.CodeMirror-cursors,div.CodeMirror-dragcursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background-color:#ffa;background-color:rgba(255,255,0,.4)}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:\"\"}span.CodeMirror-selectedtext{background:none}", ""]);

// exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".CodeMirror{padding:10px;font-size:1.25rem}", ""]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "body{cursor:default}code{cursor:text}a,button,input[type=button],input[type=checkbox],input[type=radio],input[type=submit]{cursor:pointer}button[disabled],input[disabled]{cursor:default}", ""]);

// exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".markdown table{width:100%;border-spacing:0;border-collapse:separate;border:1px solid #ddd;border-radius:2px}.markdown th{font-weight:500;font-size:.8rem;text-align:left;padding:13px 10px;color:#757575;background-color:#fafafa;border-bottom:1px solid #ddd}.markdown tr:hover td{background-color:#f9f9f9}.markdown td{font-size:.85rem;padding:13px 10px;border-bottom:1px solid #ddd}.markdown tr:last-child td{border-bottom:none}.markdown td:first-child,.markdown td:nth-child(2){font-family:monospace;font-size:.9rem}", ""]);

// exports


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactLowlight = __webpack_require__(10);

var _reactLowlight2 = _interopRequireDefault(_reactLowlight);

var _javascript = __webpack_require__(39);

var _javascript2 = _interopRequireDefault(_javascript);

__webpack_require__(40);

__webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This allows us to use the JS mode of CodeMirror

// This themes the highlighted syntax within Markdown as a GitHub Gist.
// There are two separate types of code that this documentation
// supports.
//
// 1. Code blocks within imported Markdown files
// 2. Code files that can be executed and modified with the
//   in-browser text editor
//
// For the first use case, a few libraries are used:
//
// - React Markdown: this parses the Markdown files. Note that
//   this library is not configured in this file.
// - React Lowlight: this adds syntax highlighting support to
//   React Markdown
// - Highlight.js: This is the actual syntax highlighting used
//   by Lowlight
//
//
// And in the second use case, CodeMirror is used.
//
// This file configures all of these libraries

if (typeof navigator !== 'undefined') {
  __webpack_require__(42).default;
}

// This registers JavaScript as a language for Highlight.js.


// Oceanic Next is the theme that we use for CodeMirror
_reactLowlight2.default.registerLanguage('js', _javascript2.default);

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("highlight.js/lib/languages/javascript");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".hljs{display:block;background:#fff;padding:.5em;color:#333;overflow-x:auto}.hljs-comment,.hljs-meta{color:#969896}.hljs-emphasis,.hljs-quote,.hljs-string,.hljs-strong,.hljs-template-variable,.hljs-variable{color:#df5000}.hljs-keyword,.hljs-selector-tag,.hljs-type{color:#a71d5d}.hljs-attribute,.hljs-bullet,.hljs-literal,.hljs-symbol{color:#0086b3}.hljs-name,.hljs-section{color:#63a35c}.hljs-tag{color:#333}.hljs-attr,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-selector-pseudo,.hljs-title{color:#795da3}.hljs-addition{color:#55a532;background-color:#eaffea}.hljs-deletion{color:#bd2c00;background-color:#ffecec}.hljs-link{text-decoration:underline}", ""]);

// exports


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".cm-s-oceanic-next.CodeMirror{background:#304148;color:#f8f8f2}.cm-s-oceanic-next div.CodeMirror-selected{background:rgba(101,115,126,.33)}.cm-s-oceanic-next .CodeMirror-line::selection,.cm-s-oceanic-next .CodeMirror-line>span::selection,.cm-s-oceanic-next .CodeMirror-line>span>span::selection{background:rgba(101,115,126,.33)}.cm-s-oceanic-next .CodeMirror-line::-moz-selection,.cm-s-oceanic-next .CodeMirror-line>span::-moz-selection,.cm-s-oceanic-next .CodeMirror-line>span>span::-moz-selection{background:rgba(101,115,126,.33)}.cm-s-oceanic-next .CodeMirror-gutters{background:#304148;border-right:10px}.cm-s-oceanic-next .CodeMirror-guttermarker{color:#fff}.cm-s-oceanic-next .CodeMirror-guttermarker-subtle,.cm-s-oceanic-next .CodeMirror-linenumber{color:#d0d0d0}.cm-s-oceanic-next .CodeMirror-cursor{border-left:1px solid #f8f8f0}.cm-s-oceanic-next span.cm-comment{color:#65737e}.cm-s-oceanic-next span.cm-atom{color:#c594c5}.cm-s-oceanic-next span.cm-number{color:#f99157}.cm-s-oceanic-next span.cm-property{color:#99c794}.cm-s-oceanic-next span.cm-attribute,.cm-s-oceanic-next span.cm-keyword{color:#c594c5}.cm-s-oceanic-next span.cm-builtin{color:#66d9ef}.cm-s-oceanic-next span.cm-string{color:#99c794}.cm-s-oceanic-next span.cm-variable,.cm-s-oceanic-next span.cm-variable-2,.cm-s-oceanic-next span.cm-variable-3{color:#f8f8f2}.cm-s-oceanic-next span.cm-def{color:#69c}.cm-s-oceanic-next span.cm-bracket{color:#5fb3b3}.cm-s-oceanic-next span.cm-header,.cm-s-oceanic-next span.cm-link,.cm-s-oceanic-next span.cm-tag{color:#c594c5}.cm-s-oceanic-next span.cm-error{background:#c594c5;color:#f8f8f0}.cm-s-oceanic-next .CodeMirror-activeline-background{background:rgba(101,115,126,.33)}.cm-s-oceanic-next .CodeMirror-matchingbracket{text-decoration:underline;color:#fff!important}", ""]);

// exports


/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("codemirror/mode/javascript/javascript");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(44);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".mt-chip{--_mt-chip-backgroundColor:var(--mt-chip-backgroundColor,#e0dfe0);--_mt-chip-backgroundColorFocus:var(--mt-chip-backgroundColorFocus,rgba(51,51,51,.2));--_mt-chip-backgroundColorActive:var(--mt-chip-backgroundColorActive,#d9edff);--_mt-chip-backgroundColorActiveFocus:var(--mt-chip-backgroundColorActiveFocus,rgba(33,150,243,.2));--_mt-chip-rippleColor:var(--mt-chip-rippleColor,var(--mt-mainColor,#2196f3));--_mt-chip-textColor:var(--mt-chip-textColor,#212121);--_mt-chip-textColorActive:var(--mt-chip-textColorActive,#005496);--mt-ripple-color:rgba(0,0,0,.5);font-size:calc(var(--mt-baseFontSize, 1rem) * .875);font-family:var(--mt-fontFamily,\"Roboto\");background-color:var(--_mt-chip-backgroundColor);display:inline-block;padding:.5em .87em;border-radius:2em;border:none;-webkit-font-smoothing:antialiased;font-weight:400;position:relative;z-index:0;cursor:pointer;outline:none;overflow:hidden}.mt-chip-notClickable{cursor:default}.mt-chip_input{width:100%;height:100%;border:none;border-radius:0;display:inline-block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;display:block;cursor:pointer;z-index:20;-webkit-transform:translateZ(0);transform:translateZ(0);margin:0;padding:0}.mt-chip_chip{position:static;color:var(--_mt-chip-textColor);display:inline-block;vertical-align:middle;padding:0;white-space:nowrap}.mt-chip_chip:after,.mt-chip_chip:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;background-color:var(--_mt-chip-backgroundColorActive);border-radius:1em;z-index:-1;will-change:opacity;opacity:0;-webkit-transition:opacity .2s cubic-bezier(0,0,.2,1);-o-transition:opacity .2s cubic-bezier(0,0,.2,1);transition:opacity .2s cubic-bezier(0,0,.2,1)}.mt-chip_chip:after{background-color:var(--_mt-chip-backgroundColorFocus)}.mt-chip:focus .mt-chip_chip:after,.mt-chip_input:checked~.mt-chip_chip:before,.mt-chip_input:focus~.mt-chip_chip:after{opacity:1}.mt-chip_input:focus:checked~.mt-chip_chip:after{background-color:var(--_mt-chip-backgroundColorActiveFocus);opacity:1}.mt-chip_input:checked~.mt-chip_chip{color:var(--_mt-chip-textColorActive)}.mt-chip_closeIcon{height:1.3em;width:1.3em;margin:-.3em -.5em -.3em .3em;cursor:pointer}.mt-chip_choiceIcon,.mt-chip_closeIcon,.mt-chip_icon{display:inline-block;vertical-align:middle;-webkit-transition:opacity .2s linear .3s;-o-transition:opacity .2s .3s linear;transition:opacity .2s linear .3s;fill:#606060}.mt-chip_choiceIcon,.mt-chip_icon{margin:-.3em 0}.mt-chip_icon+.mt-chip_checkmark{position:absolute;left:1em;top:calc(50% - .45em);width:1.5em}.mt-chip_checkmark~.mt-chip_chip,.mt-chip_choiceIcon~.mt-chip_chip,.mt-chip_icon~.mt-chip_chip{padding-left:.25em}.mt-chip_checkmark{width:0;height:1.5em;display:inline-block;vertical-align:middle;margin:-.3em -.1em -.3em -.3em;-webkit-transition:width .15s cubic-bezier(.4,0,.2,1);-o-transition:width .15s cubic-bezier(.4,0,.2,1);transition:width .15s cubic-bezier(.4,0,.2,1)}.mt-chip_input:checked~.mt-chip_icon{opacity:0;-webkit-transition:opacity .01s linear;-o-transition:opacity .01s linear;transition:opacity .01s linear}.mt-chip_input:checked~.mt-chip_choiceIcon{fill:var(--_mt-chip-textColorActive)}.mt-chip_input:checked~.mt-chip_checkmark{width:1.5em}.mt-chip_checkmarkPath{stroke-dashoffset:29.78334;stroke-dasharray:29.78334;-webkit-transition:stroke-dashoffset .15s cubic-bezier(.4,0,.6,1) 50ms;-o-transition:stroke-dashoffset .15s cubic-bezier(.4,0,.6,1) 50ms;transition:stroke-dashoffset .15s cubic-bezier(.4,0,.6,1) 50ms}.mt-chip_input:checked~.mt-chip_checkmark .mt-chip_checkmarkPath{stroke:var(--_mt-chip-textColorActive);stroke-dashoffset:0}.mt-chip_input:checked~.mt-ripple{--mt-ripple-color:var(--_mt-chip-rippleColor)}.mt-avatar{--_mt-avatar-backgroundColor:var(--mt-avatar-backgroundColor,#ccc);--_mt-avatar-color:var(--mt-avatar-color,#333);--_mt-avatar-bg-image:var(--mt-avatar-bg-image,\"none\");font-size:var(--mt-baseFontSize,1rem);font-family:var(--mt-fontFamily,\"Roboto\");width:2.5em;height:2.5em;overflow:hidden;border-radius:50%;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background-color:var(--_mt-avatar-backgroundColor);background-image:var(--_mt-avatar-bg-image);background-size:cover;background-position:50%;color:var(--_mt-avatar-color);vertical-align:middle}.mt-avatar_initials{font-size:1.2em;width:100%;text-align:center}.mt-button{--_mt-button-backgroundColor:var(--mt-button-backgroundColor,var(--mt-mainColor,#2196f3));--_mt-button-textColor:var(--mt-button-textColor,#fff);--_mt-button-disabledTextColor:var(--mt-button-disabledTextColor,rgba(0,0,0,.38));all:initial;font-family:var(--mt-fontFamily,\"Roboto\");-webkit-font-smoothing:antialiased;font-size:calc(.875 * var(--mt-baseFontSize, 1rem));font-weight:500;letter-spacing:.075em;text-decoration:none;text-transform:uppercase;will-change:transform,opacity;display:inline-block;position:relative;min-width:4.6em;padding:.65em 1.15em;border:none;outline:none;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:.22em;cursor:pointer;white-space:nowrap;background-color:var(--_mt-button-backgroundColor);color:var(--_mt-button-textColor)}.mt-button:before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;background-color:#fff;pointer-events:none;opacity:0;will-change:opacity;-webkit-transition:opacity .1s ease-in-out;-o-transition:opacity .1s ease-in-out;transition:opacity .1s ease-in-out;z-index:-1}.mt-button:focus:before,.mt-button:hover:before{opacity:.3}.mt-button:disabled{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.38);cursor:default;pointer-events:none}.mt-button-flat:disabled,.mt-button-stroked:disabled{background-color:transparent}.mt-button-compact{padding:.63em .57em}.mt-button-raised{-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mt-button-raised:disabled{-webkit-box-shadow:none;box-shadow:none}.mt-button-flat,.mt-button-stroked{background-color:transparent;color:var(--_mt-button-backgroundColor)}.mt-button-flat:before,.mt-button-stroked:before{background-color:var(--_mt-button-backgroundColor)}.mt-button-flat:focus:before,.mt-button-flat:hover:before,.mt-button-stroked:focus:before,.mt-button-stroked:hover:before{opacity:.1}.mt-button-stroked{border:.17em solid var(--_mt-button-backgroundColor);padding:.48em .98em}.mt-button-flat:disabled,.mt-button-stroked:disabled{color:var(--_mt-button-disabledTextColor);border-color:var(--_mt-button-disabledTextColor)}.mt-button-flat .mt-ripple:after,.mt-button-stroked .mt-ripple:after{background-color:var(--_mt-button-backgroundColor)}.mt-checkbox{--_mt-checkbox-backgroundColor:var(--mt-checkbox-backgroundColor,var(--mt-mainColor,#2196f3));--_mt-checkbox-tickColor:var(--mt-checkbox-tickColor,#fff);--_mt-checkbox-focusColor:var(--mt-checkbox-focusColor,#e8e8e8);position:relative;font-size:calc(var(--mt-baseFontSize, 1rem) * 1.125);cursor:pointer;display:inline-block;vertical-align:bottom;margin:2px;-webkit-tap-highlight-color:rgba(0,0,0,0);z-index:0}.mt-checkbox_input{width:100%;height:100%;border:none;border-radius:0;display:inline-block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;display:block;cursor:pointer;z-index:20}.mt-checkbox_checkbox{width:1em;height:1em;border-radius:.11em;position:relative;overflow:hidden;-webkit-box-shadow:inset 0 0 0 .11em #6d6c6c;box-shadow:inset 0 0 0 .11em #6d6c6c;-webkit-mask-image:-webkit-radial-gradient(#fff,#000)}.mt-checkbox_checkbox:before{top:0;left:0;right:0;bottom:0;background-color:var(--_mt-checkbox-backgroundColor);border-radius:100%;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0)}.mt-checkbox_checkbox:after,.mt-checkbox_checkbox:before{content:\"\";position:absolute;will-change:transform;-webkit-transition:-webkit-transform .15s ease-in;transition:-webkit-transform .15s ease-in;-o-transition:transform .15s ease-in;transition:transform .15s ease-in;transition:transform .15s ease-in,-webkit-transform .15s ease-in;z-index:3}.mt-checkbox_checkbox:after{top:.2em;left:.35em;right:.35em;bottom:.2em;border:.11em solid var(--_mt-checkbox-tickColor);border-top:none;border-left:none;-webkit-transform:translateZ(0) rotate(45deg) scale(0);transform:translateZ(0) rotate(45deg) scale(0)}.mt-checkbox_input:checked+.mt-checkbox_checkbox:before{-webkit-transform:scale(2);-ms-transform:scale(2);transform:scale(2)}.mt-checkbox_input:checked+.mt-checkbox_checkbox:after{-webkit-transform:translate3d(0,-.07em,0) rotate(45deg) scale(1);transform:translate3d(0,-.07em,0) rotate(45deg) scale(1)}.mt-checkbox_focus{position:absolute;top:-.3em;left:-.3em;right:-.3em;bottom:-.3em;z-index:-1;border-radius:50%;pointer-events:none;overflow:hidden}.mt-checkbox_focus:before{background-color:var(--_mt-checkbox-backgroundColor)}.mt-checkbox_focus:after,.mt-checkbox_focus:before{content:\"\";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;will-change:opacity;-webkit-transition:opacity .15s ease-out;-o-transition:opacity .15s ease-out;transition:opacity .15s ease-out}.mt-checkbox_focus:after{background-color:var(--_mt-checkbox-focusColor)}.mt-checkbox_input:focus+.mt-checkbox_checkbox+.mt-checkbox_focus:after{opacity:1}.mt-checkbox_input:focus:checked+.mt-checkbox_checkbox+.mt-checkbox_focus:after{opacity:0}.mt-checkbox_input:focus:checked+.mt-checkbox_checkbox+.mt-checkbox_focus:before{opacity:.3}.mt-checkbox_input:disabled{cursor:not-allowed}.mt-checkbox_input:disabled+.mt-checkbox_checkbox{-webkit-box-shadow:inset 0 0 0 .11em #ccc,0 0 0 2px #ccc!important;box-shadow:inset 0 0 0 .11em #ccc,0 0 0 2px #ccc!important}.mt-checkbox_input:disabled:checked{cursor:not-allowed}.mt-checkbox_input:disabled:checked+.mt-checkbox_checkbox:before{background-color:var(--_mt-checkbox-focusColor)}.mt-dialog{font-family:var(--mt-fontFamily,\"Roboto\");font-size:var(--mt-baseFontSize,1rem);background-color:#fff;text-align:left;-webkit-box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);border-radius:.125em}.mt-dialog_title{color:#212121;font-size:1.25em;padding:1.2em 1.2em 0;font-weight:500}.mt-dialog_content{color:#757575;margin:1.25em 1.5em 1.5em}.mt-dialog_actions{padding:.5em;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.mt-dialog_actions .mt-button+.mt-button{margin-left:.43em}.mt-elevation{font-size:var(--mt-baseFontSize,1rem);font-family:var(--mt-fontFamily,\"Roboto\");background:#fff;border-radius:.125em;display:inline-block;position:relative;-webkit-transition:-webkit-box-shadow .3s cubic-bezier(.25,.8,.25,1);transition:-webkit-box-shadow .3s cubic-bezier(.25,.8,.25,1);-o-transition:box-shadow .3s cubic-bezier(.25,.8,.25,1);transition:box-shadow .3s cubic-bezier(.25,.8,.25,1);transition:box-shadow .3s cubic-bezier(.25,.8,.25,1),-webkit-box-shadow .3s cubic-bezier(.25,.8,.25,1)}mt-elevation-0{-webkit-box-shadow:none;box-shadow:none}.mt-elevation-1{-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mt-elevation-2{-webkit-box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12);box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.mt-elevation-3{-webkit-box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12);box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.mt-elevation-4{-webkit-box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12);box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.mt-elevation-5{-webkit-box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.mt-expandable{height:0;overflow:hidden}.mt-expandable-open{height:auto}.mt-expansionPanel{font-size:var(--mt-baseFontSize,1rem);font-family:var(--mt-fontFamily,\"Roboto\");display:block;-webkit-box-shadow:0 -1px 0 #e5e5e5,0 0 2px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24);box-shadow:0 -1px 0 #e5e5e5,0 0 2px rgba(0,0,0,.12),0 2px 4px rgba(0,0,0,.24);background-color:#fff;-webkit-transition:margin .2s ease-out;-o-transition:margin .2s ease-out;transition:margin .2s ease-out}.mt-expansionPanel-open{margin:0 0 1em}.mt-expansionPanel+.mt-expansionPanel-open{margin:1em 0}.mt-expansionPanel_header{padding:.75em 3em .75em 1.5em;position:relative}.mt-expansionPanel_icon{width:1.5em;height:1.5em;fill:#666;position:absolute;right:1em;top:calc(50% - .75em);will-change:transform;-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;-o-transition:transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out}.mt-expansionPanel-open .mt-expansionPanel_icon{-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg)}.mt-expansionPanel_bodyWrapper{padding:.5em 1.5em 1.5em}.mt-field{--_mt-field-labelColor:var(--mt-field-labelColor,#757575);--_mt-field-labelErrorColor:var(--mt-field-labelErrorColor,#f34335);font-size:var(--mt-baseFontSize,1rem);font-family:var(--mt-fontFamily,\"Roboto\");display:inline-block;vertical-align:text-top}.mt-field_label{font-size:.875em;padding:0 0 .7em;color:var(--_mt-field-labelColor);display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;position:relative}.mt-field_label>svg{fill:var(--_mt-field-labelColor);margin:0 .2em}.mt-field_errorMessage{font-size:.875em;padding:.7em 0;color:var(--_mt-field-labelErrorColor);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-top:-2.6em}.mt-field_errorMessage>svg{fill:var(--_mt-field-labelErrorColor);margin:0 .2em}.mt-field_errorMessage>svg:first-child,.mt-field_label>svg:first-child{margin:0 .2em 0 0}.mt-field-required>.mt-field_label:after{content:\"*\";font-size:1.3em;color:var(--_mt-field-labelErrorColor);position:absolute;right:-.6em}.mt-field>.mt-input,.mt-field>.mt-input_container,.mt-field>.mt-textarea{display:block;margin-bottom:2.5em}.mt-iconButton{--_mt-iconButton-color:var(--mt-iconButton-color,#6d6c6c);--_mt-iconButton-disabledColor:var(--mt-iconButton-disabledColor,rgba(0,0,0,.38));all:initial;font-size:calc(1.5 * var(--mt-baseFontSize, 1rem));border:none;position:relative;width:2em;height:2em;border-radius:2em;cursor:pointer;outline:none;background-color:transparent;-webkit-mask-image:-webkit-radial-gradient(#fff,#000);-ms-touch-action:manipulation;touch-action:manipulation;z-index:0;--mt-ripple-color:var(--_mt-iconButton-color);--mt-ripple-spread:1.2}.mt-iconButton:after{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;background-color:var(--_mt-iconButton-color);opacity:0;border-radius:2em;z-index:-1}.mt-iconButton:focus:after,.mt-iconButton:hover:after{opacity:.1}.mt-iconButton>svg{position:absolute;top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);fill:var(--_mt-iconButton-color);pointer-events:none}.mt-iconButton:disabled{cursor:default}.mt-iconButton:disabled>svg{fill:var(--_mt-iconButton-disabledColor)}.mt-iconButton:disabled:focus:after,.mt-iconButton:disabled:hover:after{opacity:0}.mt-input_container,.mt-textarea{--_mt-input-focusBorderColor:var(--mt-input-focusBorderColor,var(--mt-mainColor,#4a8fe2));font-size:calc(var(--mt-baseFontSize) * .875);font-family:var(--mt-fontFamily,\"Roboto\")}.mt-input_container{position:relative;display:inline-block}.mt-input{font-size:1em}.mt-input,.mt-textarea{border:1px solid #e1e0e0;padding:.85em .8em;border-radius:.1875em;min-width:18.75em;outline:none;background-color:#fff;-webkit-appearance:none;resize:none}.mt-input-clearable{padding-right:2.6em}.mt-input-withIcon{padding-left:2.6em}.mt-input::-webkit-input-placeholder,.mt-textarea::-webkit-input-placeholder{color:#9e9d9d}.mt-input::-ms-input-placeholder,.mt-textarea::-ms-input-placeholder{color:#9e9d9d}.mt-input::placeholder,.mt-textarea::placeholder{color:#9e9d9d}.mt-input:focus,.mt-textarea:focus{-webkit-box-shadow:0 0 0 1px var(--_mt-input-focusBorderColor);box-shadow:0 0 0 1px var(--_mt-input-focusBorderColor);border:1px solid var(--_mt-input-focusBorderColor);caret-color:var(--_mt-input-focusBorderColor)}.mt-input-error,.mt-textarea-error{border:1px solid #e69c96}.mt-input-error:focus,.mt-textarea-error:focus{-webkit-box-shadow:0 0 0 1px #f34335;box-shadow:0 0 0 1px #f34335;border:1px solid #f34335;caret-color:#f34335}.mt-input:disabled,.mt-textarea:disabled{border-color:#e1e0e0;background-color:#f9f9f9f9;color:#9e9d9d}.mt-input:-moz-read-only,.mt-input:-moz-read-only:focus,.mt-textarea:-moz-read-only,.mt-textarea:-moz-read-only:focus{cursor:default;box-shadow:none;border-color:#e1e0e0}.mt-input:read-only,.mt-input:read-only:focus,.mt-textarea:read-only,.mt-textarea:read-only:focus{cursor:default;-webkit-box-shadow:none;box-shadow:none;border-color:#e1e0e0}.mt-input_closeBtn{position:absolute;top:50%;right:.625em;fill:#999;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer;outline:none;border:2px solid transparent;border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;opacity:0;will-change:opacity;-webkit-transition:opacity .3s ease-in-out;-o-transition:opacity .3s ease-in-out;transition:opacity .3s ease-in-out;pointer-events:none}.mt-input_closeBtn:focus{border-color:var(--_mt-input-focusBorderColor)}.mt-input_closeBtn-visible{opacity:1;pointer-events:all}.mt-input:disabled+.mt-input_closeBtn-visible{opacity:0;pointer-events:none}.mt-input-icon{position:absolute;left:.625em;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);fill:#999;pointer-events:none}.mt-input_container-disabled .mt-input-icon{opacity:.75}.mt-loadingDots_circle{fill:var(--mt-loadingDots-fill,#000);-webkit-animation:mt-loadingDots-jump var(--mt-loadingDots-animationDuration,.3s) cubic-bezier(.68,.06,.68,.42) infinite alternate;animation:mt-loadingDots-jump var(--mt-loadingDots-animationDuration,.3s) cubic-bezier(.68,.06,.68,.42) infinite alternate;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation-delay:var(--mt-loadingDots-delay,0);animation-delay:var(--mt-loadingDots-delay,0);will-change:transform}.mt-loadingDots_two{--mt-loadingDots-delay:0.1s}.mt-loadingDots_three{--mt-loadingDots-delay:0.2s}@-webkit-keyframes mt-loadingDots-jump{0%,10%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(0,15px,0);transform:translate3d(0,15px,0)}}@keyframes mt-loadingDots-jump{0%,10%{-webkit-transform:translateZ(0);transform:translateZ(0)}to{-webkit-transform:translate3d(0,15px,0);transform:translate3d(0,15px,0)}}.mt-menu{--mt-ripple-color:#666;all:initial;font-size:calc(var(--mt-baseFontSize, 1rem) * .875);font-family:var(--mt-fontFamily,\"Roboto\");border-radius:2px;text-align:left;padding:.55em 0;display:inline-block;background-color:#fff;min-width:10em;overflow:hidden}.mt-menu,.mt-menu_item{position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0}.mt-menu_item{display:block;min-height:var(--mt-menuItemMinHeight);padding:1.1em 1.7em;z-index:0;cursor:pointer}.mt-menu_item:after{content:\"\";display:block;position:absolute;top:0;left:0;right:0;bottom:0;background-color:#eee;z-index:-1;opacity:0;will-change:opacity;-webkit-transition:opacity .1s ease-in-out;-o-transition:opacity .1s ease-in-out;transition:opacity .1s ease-in-out}.mt-menu_item:hover:after{opacity:1}.mt-menu_separator{height:0;border-bottom:1px solid #e3e2e2}.mt-menu_item-selected:after{background-color:#e1e0e0;opacity:1}.mt-navigation{--_mt-navigation-color:var(--mt-navigation-color,var(--mt-mainColor,#2196f3));width:100%;font-size:calc(.875 * var(--mt-baseFontSize, 1rem));font-family:var(--mt-fontFamily,\"Roboto\");background-color:#fff;display:-ms-flexbox;display:flex;color:#757575;list-style:none;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-font-smoothing:antialiased;font-weight:500;position:relative;-ms-flex-align:stretch;align-items:stretch;--mt-ripple-color:var(--_mt-navigation-color)}.mt-navigation-vertical{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;width:auto}.mt-navigation-centered{-ms-flex-pack:center;justify-content:center}.mt-navigation-fullWidth .mt-navigation_item{-ms-flex:1 1;flex:1 1}.mt-navigation_item{font-size:1em;font-family:inherit;min-width:6.5em;text-align:center;text-transform:uppercase;overflow:hidden;position:relative;z-index:0;padding:1.15em 1em;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;cursor:pointer;text-decoration:none;color:inherit;border:none;outline:none;background-color:transparent}.mt-navigation_item:after{content:\"\";display:block;position:absolute;top:0;left:0;right:0;bottom:0;background-color:#000;opacity:0;z-index:-1}.mt-navigation_item:focus:after,.mt-navigation_item:hover:after{opacity:.03}.mt-navigation_item>svg{--_mt-iconSize:1.7em;fill:#757575}.mt-navigation_item-active{color:var(--_mt-navigation-color)}.mt-navigation_item-active>svg{fill:var(--_mt-navigation-color)}.mt-navigation-vertical .mt-navigation_item{text-align:left;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-direction:row;flex-direction:row;min-width:auto}.mt-navigation_tracker{position:absolute;left:var(--mt-tracker-left,0);bottom:0;width:var(--mt-tracker-width,8.5em);height:3px;background-color:var(--_mt-navigation-color);-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;-o-transition:transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out}.mt-navigation-vertical .mt-navigation_tracker{width:3px;height:var(--mt-tracker-height);top:var(--mt-tracker-top,0);bottom:auto;left:0}.mt-progressBar{--_mt-progressBar-backgroundColor:var(--mt-progressBar-backgroundColor,var(--mt-mainColor,#2196f3));--mt-progressBar-buffered:50;--mt-progressBar-loaded:30;font-size:var(--mt-baseFontSize,1rem);height:.25em;width:100%;position:relative;z-index:0;overflow:hidden}.mt-progressBar_buffer{background-image:-webkit-radial-gradient(circle,#e6e5e5 2px,transparent 0);background-image:-o-radial-gradient(circle,#e6e5e5 2px,transparent 2px);background-image:radial-gradient(circle,#e6e5e5 2px,transparent 0);background-repeat:repeat-x;background-size:8px 4px;-webkit-animation:buffering .3s infinite linear;animation:buffering .3s infinite linear}.mt-progressBar_buffer,.mt-progressBar_total{width:100%;height:.25em;position:absolute;top:0;left:0}.mt-progressBar_total{background-color:#e6e5e5;-webkit-transform-origin:center left;-ms-transform-origin:center left;transform-origin:center left;-webkit-transform:scaleX(calc(var(--mt-progressBar-buffered) / 100));-ms-transform:scaleX(calc(var(--mt-progressBar-buffered) / 100));transform:scaleX(calc(var(--mt-progressBar-buffered) / 100))}.mt-progressBar_loaded,.mt-progressBar_total{will-change:transform;-webkit-transition:-webkit-transform .2s ease-out;transition:-webkit-transform .2s ease-out;-o-transition:transform .2s ease-out;transition:transform .2s ease-out;transition:transform .2s ease-out,-webkit-transform .2s ease-out}.mt-progressBar_loaded{width:100%;height:.25em;background-color:var(--_mt-progressBar-backgroundColor);position:absolute;top:0;left:0;-webkit-transform-origin:center left;-ms-transform-origin:center left;transform-origin:center left;-webkit-transform:scaleX(calc(var(--mt-progressBar-loaded) / 100));-ms-transform:scaleX(calc(var(--mt-progressBar-loaded) / 100));transform:scaleX(calc(var(--mt-progressBar-loaded) / 100))}.mt-progressBar-indeterminate{--mt-progressBar-buffered:100;--mt-progressBar-loaded:100}.mt-progressBar-indeterminate .mt-progressBar_loaded{background-color:transparent;-webkit-animation:indeterminate-first-bar-translate 2s linear infinite;animation:indeterminate-first-bar-translate 2s linear infinite;-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;left:-100%}.mt-progressBar-indeterminate .mt-progressBar_buffer{-webkit-animation:indeterminate-second-bar-translate 2s linear infinite;animation:indeterminate-second-bar-translate 2s linear infinite;-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;z-index:1;background-image:none}.mt-progressBar-indeterminate .mt-progressBar_buffer:after,.mt-progressBar-indeterminate .mt-progressBar_loaded:after{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;background-color:var(--_mt-progressBar-backgroundColor);-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;-webkit-animation:indeterminate-first-bar-expand 2s infinite linear;animation:indeterminate-first-bar-expand 2s infinite linear}.mt-progressBar-indeterminate .mt-progressBar_buffer:after{-webkit-animation:indeterminate-second-bar-expand 2s infinite linear;animation:indeterminate-second-bar-expand 2s infinite linear}@-webkit-keyframes buffering{to{-webkit-transform:translateX(-8px);transform:translateX(-8px)}}@keyframes buffering{to{-webkit-transform:translateX(-8px);transform:translateX(-8px)}}@-webkit-keyframes indeterminate-first-bar-expand{0%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);-webkit-transform:scaleX(.08);transform:scaleX(.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);-webkit-transform:scaleX(.66148);transform:scaleX(.66148)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@keyframes indeterminate-first-bar-expand{0%{-webkit-transform:scaleX(.08);transform:scaleX(.08)}36.65%{-webkit-animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);animation-timing-function:cubic-bezier(.33473,.12482,.78584,1);-webkit-transform:scaleX(.08);transform:scaleX(.08)}69.15%{-webkit-animation-timing-function:cubic-bezier(.06,.11,.6,1);animation-timing-function:cubic-bezier(.06,.11,.6,1);-webkit-transform:scaleX(.66148);transform:scaleX(.66148)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@-webkit-keyframes indeterminate-first-bar-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.70173,.49582);animation-timing-function:cubic-bezier(.5,0,.70173,.49582);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}to{-webkit-transform:translateX(200.61106%);transform:translateX(200.61106%)}}@keyframes indeterminate-first-bar-translate{0%{-webkit-transform:translateX(0);transform:translateX(0)}20%{-webkit-animation-timing-function:cubic-bezier(.5,0,.70173,.49582);animation-timing-function:cubic-bezier(.5,0,.70173,.49582);-webkit-transform:translateX(0);transform:translateX(0)}59.15%{-webkit-animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635);-webkit-transform:translateX(83.67142%);transform:translateX(83.67142%)}to{-webkit-transform:translateX(200.61106%);transform:translateX(200.61106%)}}@-webkit-keyframes indeterminate-second-bar-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);-webkit-transform:translateX(37.65191%);transform:translateX(37.65191%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);-webkit-transform:translateX(84.38617%);transform:translateX(84.38617%)}to{-webkit-transform:translateX(160.27778%);transform:translateX(160.27778%)}}@keyframes indeterminate-second-bar-translate{0%{-webkit-animation-timing-function:cubic-bezier(.15,0,.51506,.40969);animation-timing-function:cubic-bezier(.15,0,.51506,.40969);-webkit-transform:translateX(0);transform:translateX(0)}25%{-webkit-animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371);-webkit-transform:translateX(37.65191%);transform:translateX(37.65191%)}48.35%{-webkit-animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);animation-timing-function:cubic-bezier(.4,.62704,.6,.90203);-webkit-transform:translateX(84.38617%);transform:translateX(84.38617%)}to{-webkit-transform:translateX(160.27778%);transform:translateX(160.27778%)}}@-webkit-keyframes indeterminate-second-bar-expand{0%{-webkit-animation-timing-function:cubic-bezier(.20503,.05705,.57661,.45397);animation-timing-function:cubic-bezier(.20503,.05705,.57661,.45397);-webkit-transform:scaleX(.08);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.15231,.19643,.64837,1.00432);animation-timing-function:cubic-bezier(.15231,.19643,.64837,1.00432);-webkit-transform:scaleX(.4571);transform:scaleX(.4571)}44.15%{-webkit-animation-timing-function:cubic-bezier(.25776,-.00316,.21176,1.38179);animation-timing-function:cubic-bezier(.25776,-.00316,.21176,1.38179);-webkit-transform:scaleX(.72796);transform:scaleX(.72796)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}@keyframes indeterminate-second-bar-expand{0%{-webkit-animation-timing-function:cubic-bezier(.20503,.05705,.57661,.45397);animation-timing-function:cubic-bezier(.20503,.05705,.57661,.45397);-webkit-transform:scaleX(.08);transform:scaleX(.08)}19.15%{-webkit-animation-timing-function:cubic-bezier(.15231,.19643,.64837,1.00432);animation-timing-function:cubic-bezier(.15231,.19643,.64837,1.00432);-webkit-transform:scaleX(.4571);transform:scaleX(.4571)}44.15%{-webkit-animation-timing-function:cubic-bezier(.25776,-.00316,.21176,1.38179);animation-timing-function:cubic-bezier(.25776,-.00316,.21176,1.38179);-webkit-transform:scaleX(.72796);transform:scaleX(.72796)}to{-webkit-transform:scaleX(.08);transform:scaleX(.08)}}.mt-radio{--_mt-radio-checkedColor:var(--mt-radio-checkedColor,var(--mt-mainColor,#2196f3));--_mt-radio-focusColor:var(--mt-radio-focusColor,#e8e8e8);font-size:var(--mt-baseFontSize,1rem);position:relative;height:1.25em;width:1.25em;z-index:0;display:inline-block}.mt-radio_input{width:100%;height:100%;border:none;border-radius:0;display:inline-block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;display:block;cursor:pointer;z-index:20;-webkit-transform:translateZ(0);transform:translateZ(0);margin:0;padding:0}.mt-radio_radio{width:100%;height:100%;border-radius:50%;border:2px solid #6f6e6e;-webkit-box-sizing:border-box;box-sizing:border-box;position:relative}.mt-radio_radio:after,.mt-radio_radio:before{content:\"\";position:absolute;height:.75em;width:.75em;top:calc(50% - .375em);left:calc(50% - .375em);background-color:var(--_mt-radio-checkedColor);border-radius:50%;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);-webkit-transition:-webkit-transform .2s cubic-bezier(0,0,.2,1);transition:-webkit-transform .2s cubic-bezier(0,0,.2,1);-o-transition:transform .2s cubic-bezier(0,0,.2,1);transition:transform .2s cubic-bezier(0,0,.2,1);transition:transform .2s cubic-bezier(0,0,.2,1),-webkit-transform .2s cubic-bezier(0,0,.2,1);will-change:transform}.mt-radio_input:checked+.mt-radio_radio{border-color:var(--_mt-radio-checkedColor)}.mt-radio_input:disabled+.mt-radio_radio{border-color:#b3b2b2}.mt-radio_input:checked:disabled+.mt-radio_radio:before{background-color:#b3b2b2}.mt-radio_input:checked+.mt-radio_radio:before{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.mt-radio_focus{position:absolute;top:-.4em;bottom:-.4em;left:-.4em;right:-.4em;opacity:0;z-index:-1;-webkit-transition:opacity .2s ease-out;-o-transition:opacity .2s ease-out;transition:opacity .2s ease-out;will-change:opacity}.mt-radio_focus:before{position:absolute;top:1px;left:1px;right:1px;bottom:1px;content:\"\";background-color:var(--_mt-radio-focusColor);border-radius:50%}.mt-radio_input:focus+.mt-radio_radio+.mt-radio_focus{opacity:1}.mt-radio_input:checked:focus+.mt-radio_radio+.mt-radio_focus:before{background-color:var(--_mt-radio-checkedColor);opacity:.3}.mt-ripple{--_mt-ripple-spread:var(--mt-ripple-spread,4);--_mt-ripple-color:var(--mt-ripple-color,#fff);--_mt-ripple-top:var(--mt-ripple-top,50%);--_mt-ripple-left:var(--mt-ripple-left,50%);all:initial;font-size:inherit;display:block;top:0;bottom:0;left:0;right:0;overflow:hidden}.mt-ripple,.mt-ripple:after{position:absolute;pointer-events:none}.mt-ripple:after{content:\"\";top:var(--_mt-ripple-top);left:var(--_mt-ripple-left);margin-top:-0.625em;margin-left:-0.625em;width:1.25em;height:1.25em;border-radius:200%;background-color:var(--_mt-ripple-color);will-change:transform;opacity:0}.mt-ripple-active:after{-webkit-animation:ripple .6s;animation:ripple .6s}@-webkit-keyframes ripple{0%{opacity:.3;-webkit-transform:scale(var(--_mt-ripple-spread));transform:scale(var(--_mt-ripple-spread))}to{-webkit-transform:scale(calc(4 * var(--_mt-ripple-spread)));transform:scale(calc(4 * var(--_mt-ripple-spread)));opacity:0}}@keyframes ripple{0%{opacity:.3;-webkit-transform:scale(var(--_mt-ripple-spread));transform:scale(var(--_mt-ripple-spread))}to{-webkit-transform:scale(calc(4 * var(--_mt-ripple-spread)));transform:scale(calc(4 * var(--_mt-ripple-spread)));opacity:0}}.mt-snackbar{all:initial;background-color:#323232;color:#fff;font-size:calc(var(--mt-baseFontSize, 1rem) * .875);font-family:var(--mt-fontFamily,\"Roboto\");padding:0 1.5em;display:inline-block;border-radius:.125em;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-align:center;align-items:center;height:3em;line-height:3em;-webkit-font-smoothing:antialiased}.mt-snackbar>.mt-button{font-size:1em;margin-right:-1.3em;margin-left:.3em}.mt-spinner{--duration:2s;-webkit-animation:mt-spinner-rotator var(--duration) ease-in infinite;animation:mt-spinner-rotator var(--duration) ease-in infinite}.mt-spinner_path{stroke-dasharray:187;stroke-dashoffset:0;-webkit-transform-origin:center;-ms-transform-origin:center;transform-origin:center;-webkit-animation:mt-spinner-dash var(--duration) ease-in-out infinite,mt-spinner-colors calc(var(--duration) * 4) ease-in-out infinite;animation:mt-spinner-dash var(--duration) ease-in-out infinite,mt-spinner-colors calc(var(--duration) * 4) ease-in-out infinite}@-webkit-keyframes mt-spinner-rotator{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes mt-spinner-rotator{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-webkit-keyframes mt-spinner-colors{0%{stroke:var(--mt-spinnerColor,#4285f4)}25%{stroke:var(--mt-spinnerColor,#de3e35)}50%{stroke:var(--mt-spinnerColor,#f7c223)}75%{stroke:var(--mt-spinnerColor,#1b9a59)}to{stroke:var(--mt-spinnerColor,#4285f4)}}@keyframes mt-spinner-colors{0%{stroke:var(--mt-spinnerColor,#4285f4)}25%{stroke:var(--mt-spinnerColor,#de3e35)}50%{stroke:var(--mt-spinnerColor,#f7c223)}75%{stroke:var(--mt-spinnerColor,#1b9a59)}to{stroke:var(--mt-spinnerColor,#4285f4)}}@-webkit-keyframes mt-spinner-dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46;-webkit-transform:rotate(90deg);transform:rotate(90deg)}to{stroke-dashoffset:187;-webkit-transform:rotate(355deg);transform:rotate(355deg)}}@keyframes mt-spinner-dash{0%{stroke-dashoffset:187}50%{stroke-dashoffset:46;-webkit-transform:rotate(90deg);transform:rotate(90deg)}to{stroke-dashoffset:187;-webkit-transform:rotate(355deg);transform:rotate(355deg)}}.mt-switch{--_mt-switch-backgroundColor:var(--mt-switch-backgroundColor,#979696);--_mt-switch-backgroundColorActive:var(--mt-switch-backgroundColorActive,#b0cfe9);--_mt-switch-backgroundColorDisabled:var(--mt-switch-backgroundColorDisabled,#d9d9d9);--_mt-switch-knobColor:var(--mt-switch-knobColor,#fafafa);--_mt-switch-knobColorActive:var(--mt-switch-knobColorActive,var(--mt-mainColor,#2196f3));--_mt-switch-knobColorDisabled:var(--mt-switch-knobColorDisabled,#979696);--_mt-switch-focusColorActive:var(--mt-switch-focusColorActive,var(--_mt-switch-knobColorActive));--_mt-switch-focusColor:var(--mt-switch-focusColor,var(--_mt-switch-knobColorDisabled));font-size:var(--mt-baseFontSize,1rem);display:-ms-inline-flexbox;display:inline-flex;height:1.25em;-ms-flex-align:center;align-items:center;position:relative;z-index:0}.mt-switch_input{width:100%;height:100%;border:none;border-radius:0;display:inline-block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;display:block;cursor:pointer;z-index:20;-webkit-transform:translateZ(0);transform:translateZ(0)}.mt-switch_switch{width:2em;height:.875em;background:-webkit-gradient(linear,left top,right top,from(var(--_mt-switch-backgroundColorActive)),color-stop(50%,var(--_mt-switch-backgroundColorActive)),color-stop(50%,var(--_mt-switch-backgroundColor)),to(var(--_mt-switch-backgroundColor)));background:-webkit-linear-gradient(left,var(--_mt-switch-backgroundColorActive),var(--_mt-switch-backgroundColorActive) 50%,var(--_mt-switch-backgroundColor) 0,var(--_mt-switch-backgroundColor));background:-o-linear-gradient(left,var(--_mt-switch-backgroundColorActive) 0,var(--_mt-switch-backgroundColorActive) 50%,var(--_mt-switch-backgroundColor) 50%,var(--_mt-switch-backgroundColor) 100%);background:linear-gradient(90deg,var(--_mt-switch-backgroundColorActive) 0,var(--_mt-switch-backgroundColorActive) 50%,var(--_mt-switch-backgroundColor) 0,var(--_mt-switch-backgroundColor));border-radius:.875em;position:static}.mt-switch_switch:after,.mt-switch_switch:before{content:\"\";display:inline-block;width:1.25em;height:1.25em;border-radius:50%;background-color:var(--_mt-switch-knobColor);position:absolute;top:0;left:0;will-change:transform;-webkit-transition:-webkit-transform 90ms cubic-bezier(.4,0,.2,1);transition:-webkit-transform 90ms cubic-bezier(.4,0,.2,1);-o-transition:transform 90ms cubic-bezier(.4,0,.2,1);transition:transform 90ms cubic-bezier(.4,0,.2,1);transition:transform 90ms cubic-bezier(.4,0,.2,1),-webkit-transform 90ms cubic-bezier(.4,0,.2,1);-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.mt-switch_switch:after{background-color:var(--_mt-switch-knobColorActive);opacity:0;will-change:opacity;-webkit-transition:opacity 90ms cubic-bezier(.4,0,.2,1),-webkit-transform 90ms cubic-bezier(.4,0,.2,1);transition:opacity 90ms cubic-bezier(.4,0,.2,1),-webkit-transform 90ms cubic-bezier(.4,0,.2,1);-o-transition:transform 90ms cubic-bezier(.4,0,.2,1),opacity 90ms cubic-bezier(.4,0,.2,1);transition:transform 90ms cubic-bezier(.4,0,.2,1),opacity 90ms cubic-bezier(.4,0,.2,1);transition:transform 90ms cubic-bezier(.4,0,.2,1),opacity 90ms cubic-bezier(.4,0,.2,1),-webkit-transform 90ms cubic-bezier(.4,0,.2,1)}.mt-switch_input:checked+.mt-switch_switch:after,.mt-switch_input:checked+.mt-switch_switch:before{-webkit-transform:translateX(.75em);-ms-transform:translateX(.75em);transform:translateX(.75em);-webkit-transform-origin:right center;-ms-transform-origin:right center;transform-origin:right center}.mt-switch_input:checked+.mt-switch_switch:after{opacity:1}.mt-switch_input:disabled+.mt-switch_switch{background:var(--_mt-switch-backgroundColorDisabled)}.mt-switch_input:disabled+.mt-switch_switch:after,.mt-switch_input:disabled+.mt-switch_switch:before{background-color:var(--_mt-switch-knobColorDisabled)}.mt-switch_focus{position:absolute;top:-.3em;bottom:-.3em;left:-.3em;right:-.3em;z-index:-1;opacity:.2;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);will-change:transform;-webkit-transition:-webkit-transform .15s cubic-bezier(.4,0,.2,1);transition:-webkit-transform .15s cubic-bezier(.4,0,.2,1);-o-transition:transform .15s cubic-bezier(.4,0,.2,1);transition:transform .15s cubic-bezier(.4,0,.2,1);transition:transform .15s cubic-bezier(.4,0,.2,1),-webkit-transform .15s cubic-bezier(.4,0,.2,1)}.mt-switch_focus:after,.mt-switch_focus:before{content:\"\";position:absolute;display:block;top:0;right:0;bottom:0;left:0;background-color:var(--_mt-switch-focusColor);border-radius:1em}.mt-switch_focus:after{background-color:var(--_mt-switch-focusColorActive);opacity:0;will-change:opacity}.mt-switch_input:focus+.mt-switch_switch+.mt-switch_focus{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1)}.mt-switch_input:focus:checked+.mt-switch_switch+.mt-switch_focus:after{opacity:1}.mt-table{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:100%;border:1px solid #d5d5d5;border-bottom:none;font-family:var(--mt-fontFamily,\"Roboto\");font-size:calc(.875 * var(--mt-baseFontSize, 1rem));-webkit-box-sizing:border-box;box-sizing:border-box;will-change:transform;color:#000}.mt-table-clickableElement{cursor:pointer}.mt-table_header{color:#757575}.mt-table_header,.mt-table_row{background-color:#fff;-webkit-box-sizing:border-box;box-sizing:border-box}.mt-table_row{display:-ms-flexbox;display:flex;border-bottom:1px solid #d5d5d5;position:relative;z-index:0;-ms-flex-wrap:wrap;flex-wrap:wrap}.mt-table_expandedRowContent{-ms-flex-preferred-size:100%;flex-basis:100%;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;height:0}.mt-table_expandedRowContent-open{height:auto}.mt-table_row:after{content:\"\";-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;top:0;left:0;right:0;bottom:0;background-color:#eee;z-index:-1;pointer-events:none;opacity:0;will-change:opacity}.mt-table_headerRow:after{content:none}.mt-table_row:hover:after{opacity:1}.mt-table_row-highlighted{background-color:#e3f2fd}.mt-table_row-highlighted:after{background-color:#dceefe}.mt-table_cell{-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;-ms-flex-preferred-size:0;flex-basis:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:1em;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;text-align:left}.mt-table_headerCell{padding:1.2em 1em}.mt-table_cell-rightBorder{border-right:1px solid #d5d5d5}.mt-table_headerCellContent{font-size:.9em;-webkit-box-sizing:border-box;box-sizing:border-box}", ""]);

// exports


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

var _reactStaticRoutes = __webpack_require__(46);

var _reactStaticRoutes2 = _interopRequireDefault(_reactStaticRoutes);

var _noScroll = __webpack_require__(20);

var _noScroll2 = _interopRequireDefault(_noScroll);

var _history = __webpack_require__(95);

__webpack_require__(96);

var _queryString = __webpack_require__(97);

var _queryString2 = _interopRequireDefault(_queryString);

var _header = __webpack_require__(98);

var _header2 = _interopRequireDefault(_header);

var _nav = __webpack_require__(101);

var _nav2 = _interopRequireDefault(_nav);

var _footer = __webpack_require__(107);

var _footer2 = _interopRequireDefault(_footer);

var _historyWithQuery = __webpack_require__(109);

var _historyWithQuery2 = _interopRequireDefault(_historyWithQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var history = void 0;
if (typeof document !== 'undefined') {
  history = (0, _historyWithQuery2.default)((0, _history.createBrowserHistory)(), _queryString2.default.stringify, _queryString2.default.parse);
}

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isMenuOpen: false
    }, _this.onToggleMenu = function () {
      var isMenuOpen = _this.state.isMenuOpen;


      _noScroll2.default.toggle();

      _this.setState({ isMenuOpen: !isMenuOpen });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var isMenuOpen = this.state.isMenuOpen;


      return _react2.default.createElement(
        _reactStatic.Router,
        { history: history },
        _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(_header2.default, { onToggleMenu: this.onToggleMenu }),
          _react2.default.createElement(
            'div',
            { className: 'app_body' },
            _react2.default.createElement(_nav2.default, { isMenuOpen: isMenuOpen, onToggleMenu: this.onToggleMenu }),
            _react2.default.createElement(
              'div',
              { className: 'app_bodyContents' },
              _react2.default.createElement(_reactStaticRoutes2.default, null),
              _react2.default.createElement(_footer2.default, null)
            )
          )
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path2 = __webpack_require__(47);

var _path3 = _interopRequireDefault(_path2);

var _importCss2 = __webpack_require__(48);

var _importCss3 = _interopRequireDefault(_importCss2);

var _universalImport2 = __webpack_require__(49);

var _universalImport3 = _interopRequireDefault(_universalImport2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(50);

var _reactUniversalComponent = __webpack_require__(51);

var _reactUniversalComponent2 = _interopRequireDefault(_reactUniversalComponent);

var _reactStatic = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _reactUniversalComponent.setHasBabelPlugin)();

var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return _react2.default.createElement(
      'div',
      null,
      'An error occurred loading this page\'s template. More information is available in the console.'
    );
  }
};

var t_0 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/home/index',
  file: '/Users/jamess/webdev/react-projects/materialish/docs/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 13)), (0, _importCss3.default)('src/home/index', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/home/index');
  },
  resolve: function resolve() {
    return /*require.resolve*/(13);
  },
  chunkName: function chunkName() {
    return 'src/home/index';
  }
}), universalOptions);
var t_1 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/home/philosophy',
  file: '/Users/jamess/webdev/react-projects/materialish/docs/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 16)), (0, _importCss3.default)('src/home/philosophy', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/home/philosophy');
  },
  resolve: function resolve() {
    return /*require.resolve*/(16);
  },
  chunkName: function chunkName() {
    return 'src/home/philosophy';
  }
}), universalOptions);
var t_2 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/home/alternatives',
  file: '/Users/jamess/webdev/react-projects/materialish/docs/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 17)), (0, _importCss3.default)('src/home/alternatives', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/home/alternatives');
  },
  resolve: function resolve() {
    return /*require.resolve*/(17);
  },
  chunkName: function chunkName() {
    return 'src/home/alternatives';
  }
}), universalOptions);
var t_3 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/icons',
  file: '/Users/jamess/webdev/react-projects/materialish/docs/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 18)), (0, _importCss3.default)('src/icons', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/icons');
  },
  resolve: function resolve() {
    return /*require.resolve*/(18);
  },
  chunkName: function chunkName() {
    return 'src/icons';
  }
}), universalOptions);
var t_4 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/icons/catalog',
  file: '/Users/jamess/webdev/react-projects/materialish/docs/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 19)), (0, _importCss3.default)('src/icons/catalog', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/icons/catalog');
  },
  resolve: function resolve() {
    return /*require.resolve*/(19);
  },
  chunkName: function chunkName() {
    return 'src/icons/catalog';
  }
}), universalOptions);
var t_5 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/icons/usage',
  file: '/Users/jamess/webdev/react-projects/materialish/docs/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 21)), (0, _importCss3.default)('src/icons/usage', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/icons/usage');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return 'src/icons/usage';
  }
}), universalOptions);
var t_6 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/components/index',
  file: '/Users/jamess/webdev/react-projects/materialish/docs/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 22)), (0, _importCss3.default)('src/components/index', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/components/index');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return 'src/components/index';
  }
}), universalOptions);
var t_7 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/components/component-doc',
  file: '/Users/jamess/webdev/react-projects/materialish/docs/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 23)), (0, _importCss3.default)('src/components/component-doc', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/components/component-doc');
  },
  resolve: function resolve() {
    return /*require.resolve*/(23);
  },
  chunkName: function chunkName() {
    return 'src/components/component-doc';
  }
}), universalOptions);
var t_8 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/components/text-fields',
  file: '/Users/jamess/webdev/react-projects/materialish/docs/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 24)), (0, _importCss3.default)('src/components/text-fields', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/components/text-fields');
  },
  resolve: function resolve() {
    return /*require.resolve*/(24);
  },
  chunkName: function chunkName() {
    return 'src/components/text-fields';
  }
}), universalOptions);
var t_9 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/components/progress-indicators',
  file: '/Users/jamess/webdev/react-projects/materialish/docs/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 25)), (0, _importCss3.default)('src/components/progress-indicators', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/components/progress-indicators');
  },
  resolve: function resolve() {
    return /*require.resolve*/(25);
  },
  chunkName: function chunkName() {
    return 'src/components/progress-indicators';
  }
}), universalOptions);
var t_10 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/components/selection-controls',
  file: '/Users/jamess/webdev/react-projects/materialish/docs/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 26)), (0, _importCss3.default)('src/components/selection-controls', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/components/selection-controls');
  },
  resolve: function resolve() {
    return /*require.resolve*/(26);
  },
  chunkName: function chunkName() {
    return 'src/components/selection-controls';
  }
}), universalOptions);
var t_11 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/components/buttons',
  file: '/Users/jamess/webdev/react-projects/materialish/docs/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 27)), (0, _importCss3.default)('src/components/buttons', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/components/buttons');
  },
  resolve: function resolve() {
    return /*require.resolve*/(27);
  },
  chunkName: function chunkName() {
    return 'src/components/buttons';
  }
}), universalOptions);
var t_12 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/components/chips',
  file: '/Users/jamess/webdev/react-projects/materialish/docs/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 28)), (0, _importCss3.default)('src/components/chips', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/components/chips');
  },
  resolve: function resolve() {
    return /*require.resolve*/(28);
  },
  chunkName: function chunkName() {
    return 'src/components/chips';
  }
}), universalOptions);
var t_13 = (0, _reactUniversalComponent2.default)((0, _universalImport3.default)({
  id: '../src/common/404',
  file: '/Users/jamess/webdev/react-projects/materialish/docs/dist/react-static-routes.js',
  load: function load() {
    return Promise.all([new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 29)), (0, _importCss3.default)('src/common/404', {
      disableWarnings: true
    })]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return _path3.default.join(__dirname, '../src/common/404');
  },
  resolve: function resolve() {
    return /*require.resolve*/(29);
  },
  chunkName: function chunkName() {
    return 'src/common/404';
  }
}), universalOptions);

// Template Map
global.componentsByTemplateID = global.componentsByTemplateID || [t_0, t_1, t_2, t_3, t_4, t_5, t_6, t_7, t_8, t_9, t_10, t_11, t_12, t_13];

// Template Tree
global.templateIDsByPath = global.templateIDsByPath || {
  '404': 13

  // Get template for given path
};var getComponentForPath = function getComponentForPath(path) {
  path = (0, _reactStatic.cleanPath)(path);
  return global.componentsByTemplateID[global.templateIDsByPath[path]];
};

global.reactStaticGetComponentForPath = getComponentForPath;
global.reactStaticRegisterTemplateIDForPath = function (path, id) {
  global.templateIDsByPath[path] = id;
};

var Routes = function (_Component) {
  _inherits(Routes, _Component);

  function Routes() {
    _classCallCheck(this, Routes);

    return _possibleConstructorReturn(this, (Routes.__proto__ || Object.getPrototypeOf(Routes)).apply(this, arguments));
  }

  _createClass(Routes, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          Comp = _props.component,
          render = _props.render,
          children = _props.children;


      var getFullComponentForPath = function getFullComponentForPath(path) {
        var Comp = getComponentForPath(path);
        var is404 = path === '404';
        if (!Comp) {
          is404 = true;
          Comp = getComponentForPath('404');
        }
        return function (newProps) {
          return Comp ? _react2.default.createElement(Comp, _extends({}, newProps, is404 ? { is404: true } : {})) : null;
        };
      };

      var renderProps = {
        componentsByTemplateID: global.componentsByTemplateID,
        templateIDsByPath: global.templateIDsByPath,
        getComponentForPath: getFullComponentForPath
      };

      if (Comp) {
        return _react2.default.createElement(Comp, renderProps);
      }

      if (render || children) {
        return (render || children)(renderProps);
      }

      // This is the default auto-routing renderer
      return _react2.default.createElement(_reactRouterDom.Route, { path: '*', render: function render(props) {
          var Comp = getFullComponentForPath(props.location.pathname);
          // If Comp is used as a component here, it triggers React to re-mount the entire
          // component tree underneath during reconciliation, losing all internal state.
          // By unwrapping it here we keep the real, static component exposed directly to React.
          return Comp && Comp(_extends({}, props, { key: props.location.pathname }));
        } });
    }
  }]);

  return Routes;
}(_react.Component);

exports.default = Routes;
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/importCss");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _requireUniversalModule = __webpack_require__(52);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(53);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks).default;
  }
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(54);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (
    // $FlowIgnore
    module.hot && (module.hot.data || module.hot.status() === 'apply')
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(component) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.modCache = {};
  options.promCache = {};

  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, null, [{
      key: 'preload',

      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        props = props || {};

        var _req = (0, _requireUniversalModule2.default)(component, options, props),
            requireAsync = _req.requireAsync,
            requireSync = _req.requireSync;

        var Component = void 0;

        try {
          Component = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (Component) return Component;
          return requireAsync(props, context);
        }).then(function (Component) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });
          return Component;
        });
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

        if (!_this._mounted) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = { error: null };
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this._mounted = true;

        var _req2 = (0, _requireUniversalModule2.default)(component, options, this.props),
            addModule = _req2.addModule,
            requireSync = _req2.requireSync,
            requireAsync = _req2.requireAsync,
            asyncOnly = _req2.asyncOnly;

        var Component = void 0;

        try {
          Component = requireSync(this.props, this.context);
        } catch (error) {
          return this.update({ error: error });
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(this.props); // record the module for SSR flushing :)

        if (this.context.report) {
          this.context.report(chunkName);
        }

        if (Component || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          this.update({ Component: Component }, true, true, _utils.isServer);
          return;
        }

        this.handleBefore(true, false);
        this.requireAsync(requireAsync, this.props, true);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._mounted = false;
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var _this2 = this;

        if (isDynamic || this._asyncOnly) {
          var _req3 = (0, _requireUniversalModule2.default)(component, options, nextProps, this.props),
              requireSync = _req3.requireSync,
              requireAsync = _req3.requireAsync,
              shouldUpdate = _req3.shouldUpdate;

          if (shouldUpdate(nextProps, this.props)) {
            var Component = void 0;

            try {
              Component = requireSync(nextProps, this.context);
            } catch (error) {
              return this.update({ error: error });
            }

            this.handleBefore(false, !!Component);

            if (!Component) {
              return this.requireAsync(requireAsync, nextProps);
            }

            var state = { Component: Component };

            if (alwaysDelay) {
              if (loadingTransition) this.update({ Component: null }); // display `loading` during componentWillReceiveProps
              setTimeout(function () {
                return _this2.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          } else if (isHMR()) {
            var _Component = requireSync(nextProps, this.context);
            this.setState({ Component: function Component() {
                return null;
              } }); // HMR /w Redux and HOCs can be finicky, so we
            setTimeout(function () {
              return _this2.setState({ Component: _Component });
            }); // toggle components to insure updates occur
          }
        }
      }
    }, {
      key: 'requireAsync',
      value: function requireAsync(_requireAsync, props, isMount) {
        var _this3 = this;

        if (this.state.Component && loadingTransition) {
          this.update({ Component: null }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();

        _requireAsync(props, this.context).then(function (Component) {
          var state = { Component: Component };

          var timeLapsed = new Date() - time;
          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this3.update(state, isMount);
            }, extraDelay);
          }

          _this3.update(state, isMount);
        }).catch(function (error) {
          return _this3.update({ error: error });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;

          var info = { isMount: isMount, isSync: isSync, isServer: isServer };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var Component = state.Component,
            error = state.error;


        if (Component && !error) {
          (0, _hoistNonReactStatics2.default)(UniversalComponent, Component, { preload: true });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;

            var info = { isMount: isMount, isSync: isSync, isServer: isServer };
            onAfter(info, Component);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      }
    }, {
      key: 'render',
      value: function render() {
        var _state = this.state,
            error = _state.error,
            Component = _state.Component;

        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        // user-provided props (e.g. for data-fetching loading):


        if (isLoading) {
          return (0, _utils.createElement)(Loading, props);
        } else if (userError) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: userError }));
        } else if (error) {
          return (0, _utils.createElement)(Err, _extends({}, props, { error: error }));
        } else if (Component) {
          // primary usage (for async import loading + errors):
          return (0, _utils.createElement)(Component, props);
        }

        return (0, _utils.createElement)(Loading, props);
      }
    }]);

    return UniversalComponent;
  }(_react2.default.Component), _class.contextTypes = {
    store: _propTypes2.default.object,
    report: _propTypes2.default.func
  }, _temp;
}
exports.default = universal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;
exports.default = requireUniversalModule;

var _utils = __webpack_require__(12);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache;


  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;

  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);

    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;

    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);
        if (onError) {
          var _isServer = typeof window === 'undefined';
          var info = { isServer: _isServer };
          onError(error, info);
        }
        rej(error);
      };

      // const timer = timeout && setTimeout(reject, timeout)
      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);

        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);

        reject(new Error('export not found'));
      };

      var request = load(props, { resolve: resolve, reject: reject });

      // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.
      if (!request || typeof request.then !== 'function') return;
      request.then(resolve).catch(reject);
    });

    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);
        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);

    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);

    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    return typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };

  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load
  };
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2.default.Component);

ReportChunks.propTypes = {
  report: _propTypes2.default.func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2.default.func.isRequired
};
exports.default = ReportChunks;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactMarkdown = __webpack_require__(56);

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

var _fetchDedupe = __webpack_require__(14);

var _codeHighlighter = __webpack_require__(15);

var _codeHighlighter2 = _interopRequireDefault(_codeHighlighter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Markdown = function (_Component) {
  _inherits(Markdown, _Component);

  function Markdown() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Markdown);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Markdown.__proto__ || Object.getPrototypeOf(Markdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      markdownText: null
    }, _this.fetchMarkdown = function (props) {
      var _ref2 = props || _this.props,
          markdownUrl = _ref2.markdownUrl;

      (0, _fetchDedupe.fetchDedupe)(markdownUrl, { responseType: 'text' }).then(function (res) {
        _this.setState({
          markdownText: res.data
        });
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Markdown, [{
    key: 'render',
    value: function render() {
      var markdownText = this.props.markdownText || this.state.markdownText;

      if (!markdownText) {
        return null;
      }

      return _react2.default.createElement(_reactMarkdown2.default, {
        source: markdownText,
        className: 'markdown ' + this.props.className,
        renderers: {
          code: _codeHighlighter2.default
        }
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.markdownUrl) {
        this.fetchMarkdown();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.markdownUrl !== nextProps.markdownUrl) {
        this.fetchMarkdown(nextProps);
      }
    }
  }]);

  return Markdown;
}(_react.Component);

exports.default = Markdown;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _lodash = __webpack_require__(7);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CodeMirror = void 0;
if (typeof document !== 'undefined') {
  CodeMirror = __webpack_require__(58);
}

var Editor = function (_React$Component) {
  _inherits(Editor, _React$Component);

  function Editor(props) {
    _classCallCheck(this, Editor);

    var _this = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));

    _this.handleChange = function () {
      if (!_this.props.readOnly && _this.props.onChange) {
        _this.debouncedOnChange(_this.editor.getValue());
      }
    };

    _this.debouncedOnChange = _lodash2.default.debounce(props.onChange, 500);
    return _this;
  }

  _createClass(Editor, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!CodeMirror) {
        return;
      }

      this.editor = CodeMirror.fromTextArea(this.refs.editor, {
        mode: 'javascript',
        lineNumbers: this.props.lineNumbers,
        smartIndent: false,
        tabSize: this.props.tabSize,
        matchBrackets: true,
        theme: this.props.theme,
        readOnly: this.props.readOnly
      });

      this.editor.on('change', this.handleChange);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.props.readOnly) {
        this.editor.setValue(this.props.codeText);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style;


      return _react2.default.createElement(
        'div',
        { className: className, style: style },
        _react2.default.createElement('textarea', { ref: 'editor', defaultValue: this.props.codeText })
      );
    }
  }]);

  return Editor;
}(_react2.default.Component);

Editor.propTypes = {
  className: _propTypes2.default.string,
  codeText: _propTypes2.default.string,
  lineNumbers: _propTypes2.default.bool,
  onChange: _propTypes2.default.func,
  readOnly: _propTypes2.default.bool,
  tabSize: _propTypes2.default.number,
  theme: _propTypes2.default.string
};
Editor.defaultProps = {
  className: '',
  lineNumbers: false,
  readOnly: false,
  tabSize: 2,
  theme: 'oceanic-next'
};
exports.default = Editor;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("codemirror");

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fetchDedupe = __webpack_require__(14);

var _standalone = __webpack_require__(60);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CodeManager = function (_React$Component) {
  _inherits(CodeManager, _React$Component);

  _createClass(CodeManager, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var _state = this.state,
          compiledCode = _state.compiledCode,
          err = _state.err,
          inputCode = _state.inputCode;


      if (inputCode === null) {
        return null;
      }

      return children({
        inputCode: inputCode,
        compiledCode: compiledCode,
        err: err,
        handleCodeChange: this.handleCodeChange
      });
    }
  }]);

  function CodeManager(props) {
    _classCallCheck(this, CodeManager);

    var _this = _possibleConstructorReturn(this, (CodeManager.__proto__ || Object.getPrototypeOf(CodeManager)).call(this, props));

    _initialiseProps.call(_this);

    var initialState = {};

    if (props.initialCode) {
      initialState = _this.compileCode(_this.props.initialCode);
    }

    _this.state = initialState;
    return _this;
  }

  _createClass(CodeManager, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.codeTextUrl !== nextProps.codeTextUrl) {
        if (nextProps.codeTextUrl) {
          this.fetchCode(nextProps);
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.codeTextUrl) {
        this.fetchCode();
      }
    }
  }]);

  return CodeManager;
}(_react2.default.Component);

CodeManager.propTypes = {
  codeTextUrl: _propTypes2.default.string
};
CodeManager.defaultProps = {
  codeTextUrl: null
};

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.compileCode = function (inputCode) {
    var code = '\n      (function (' + Object.keys(_this2.props.scope).join(', ') + ', mountNode) {\n        ' + inputCode + '\n      });';

    var returnValue = {
      inputCode: inputCode,
      compiledCode: null,
      err: null
    };

    try {
      returnValue.compiledCode = (0, _standalone.transform)(code, {
        presets: ['es2017', 'stage-3', 'react']
      }).code;
    } catch (e) {
      returnValue.err = e;
    }

    return returnValue;
  };

  this.handleCodeChange = function (code) {
    _this2.setState(_this2.compileCode(code));
  };

  this.fetchCode = function (props) {
    var _ref = props || _this2.props,
        codeTextUrl = _ref.codeTextUrl;

    (0, _fetchDedupe.fetchDedupe)(codeTextUrl, { responseType: 'text' }).then(function (res) {
      _this2.setState(_this2.compileCode(res.data));
    });
  };
};

exports.default = CodeManager;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("@babel/standalone");

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(4);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ERROR_TIMEOUT = 500;

var Preview = function (_Component) {
  _inherits(Preview, _Component);

  function Preview() {
    var _ref,
        _arguments = arguments;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, Preview);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Preview.__proto__ || Object.getPrototypeOf(Preview)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      error: null
    }, _this.setTimeout = function () {
      clearTimeout(_this.timeoutID);
      _this.timeoutID = setTimeout.apply(undefined, _arguments);
    }, _this.buildScope = function (mountNode) {
      return Object.keys(_this.props.scope).map(function (key) {
        return _this.props.scope[key];
      }).concat(mountNode);
    }, _this.executeCode = function () {
      var mountNode = _this.refs.mount;
      var scope = _this.buildScope(mountNode);

      try {
        _reactDom2.default.unmountComponentAtNode(mountNode);
      } catch (e) {
        console.error(e);
      }

      try {
        var code = _this.props.compiledCode;

        _reactDom2.default.render(eval(code).apply(undefined, _toConsumableArray(scope)), mountNode);
        if (_this.state.error) {
          _this.setState({ error: null });
        }
      } catch (err) {
        setTimeout(function () {
          _this.setState({ error: err.toString() });
        }, ERROR_TIMEOUT);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Preview, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (!this.props.err) {
        this.executeCode();
      }
    }
  }, {
    key: 'componentDidCatch',
    value: function componentDidCatch() {
      this.setState({ hasError: true });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      clearTimeout(this.timeoutID);
      if (this.props.code !== prevProps.code && !this.props.err) {
        this.executeCode();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          wrapperStyle = _props.wrapperStyle;


      return _react2.default.createElement(
        'div',
        { className: className },
        this.state.error !== null ? _react2.default.createElement(
          'span',
          null,
          this.state.error
        ) : null,
        _react2.default.createElement('div', { ref: 'mount', style: wrapperStyle })
      );
    }
  }]);

  return Preview;
}(_react.Component);

Preview.propTypes = {
  className: _propTypes2.default.string,
  code: _propTypes2.default.string.isRequired,
  scope: _propTypes2.default.object
};
Preview.defaultProps = {
  className: "",
  scope: { React: _react2.default, Component: _react.Component }
};
exports.default = Preview;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".icons_links{margin-top:40px}.icons_link{margin-bottom:20px}", ""]);

// exports


/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("materialish/icons-data.json");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("react-clipboard.js");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("materialish/icon-content-copy");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = {"3_d_rotation":["arrows","vr"],"accessibility":["user","person"],"accessible":["wheelchair","user"],"account_balance":["building","temple"],"account_balance_wallet":[],"account_box":["user"],"account_circle":["user"],"add_shopping_cart":[],"alarm":["time","clock"],"alarm_add":["time","clock"],"alarm_off":["time","clock"],"alarm_on":["time","clock","checkmark"],"all_out":["arrows","circle","directional","expand"],"android":["operating system"],"announcement":["comment","chat","message","balloon","exclamation"],"aspect_ratio":["screen","resolution","monitor"],"assessment":["graph","chart"],"assignment":["clipboard"],"assignment_ind":["user","clipboard"],"assignment_late":["exclamation","clipboard"],"assignment_return":["clipboard","arrow"],"assignment_returned":["clipboard","arrow"],"assignment_turned_in":["clipboard","checkmark"],"autorenew":["arrows","loader","loading","refresh"],"backup":["cloud","arrow","upload"],"book":["bookmark"],"bookmark":["favorite"],"bookmark_border":["favorite"],"bug_report":["ticket","issue"],"build":["wrench","spanner"],"cached":["arrows","refresh","loading","loader"],"camera_enhance":["photo"],"card_giftcard":["creditcard"],"card_membership":["creditcard"],"card_travel":["creditcard"],"change_history":["triangle"],"check_circle":[],"chrome_reader_mode":[],"class":[],"code":["parenthesis","brackets"],"compare_arrows":["directional"],"copyright":[],"credit_card":["creditcard"],"dashboard":[],"date_range":["calendar","agenda"],"delete":["trashcan","bin","recycle","junk"],"delete_forever":["trashcan","bin","recycle","junk"],"description":["file","document"],"dns":["server","network"],"done":["checkmark"],"done_all":["checkmark"],"donut_large":["circle"],"donut_small":["circle"],"eject":[],"euro_symbol":["financial","money"],"event":["calendar","agenda"],"event_seat":["chair","bench","sit"],"exit_to_app":["quit"],"explore":["compass","map"],"extension":["puzzle"],"face":["person","user"],"favorite":["heart","love"],"favorite_border":["heart","love"],"feedback":["comment","message","chat"],"find_in_page":["search"],"find_replace":["search"],"fingerprint":["biometrics","touchid"],"flight_land":["airplane","flying"],"flight_takeoff":["airplane","flying"],"flip_to_back":[],"flip_to_front":[],"g_translate":["google"],"gavel":["hammer"],"get_app":["download"],"gif":["animated"],"grade":["star","rating","rate"],"group_work":["circle","film","reel"],"help":["question mark"],"help_outline":["question mark"],"highlight_off":["delete","disable","clear","remove","circle","times"],"history":["time","revert","undo","clock"],"home":["building","house"],"hourglass_empty":["time"],"hourglass_full":["time"],"http":["network","internet","web"],"https":["network","internet","web","security","lock","ssl","encrypt"],"important_devices":["computer","phone","monitor"],"info":["circle","information"],"info_outline":["circle","information"],"input":["arrow"],"invert_colors":["drop","water","liquid"],"label":["tag","badge"],"label_outline":["tag","badge"],"language":["earth","world","web"],"launch":["arrow"],"lightbulb_outline":[],"line_style":["editor"],"line_weight":["editor"],"list":["editor"],"lock":["security"],"lock_open":["security"],"lock_outline":["security"],"loyalty":["tag","badge","heart","love"],"markunread_mailbox":[],"motorcycle":["motorbike"],"note_add":["document","create"],"offline_pin":["checkmark","circle"],"opacity":["drop","water","liquid"],"open_in_browser":[],"open_in_new":[],"open_with":["arrows","directional","expand"],"pageview":["search","find","looking glass"],"pan_tool":["hand","touch","drag"],"payment":["creditcard","financial","money"],"perm_camera_mic":[],"perm_contact_calendar":["user","agenda"],"perm_data_setting":["wifi","wireless","network","cellular","configure"],"perm_device_information":["phone","mobile"],"perm_identity":["user"],"perm_media":["folders","directories"],"perm_phone_msg":["mobile","message"],"perm_scan_wifi":["network","wireless"],"pets":["animal","claw","paw","dog","cat"],"picture_in_picture":[],"picture_in_picture_alt":[],"play_for_work":["arrow"],"polymer":[],"power_settings_new":["off"],"pregnant_woman":["user","person"],"print":["printer","paper"],"query_builder":["clock","time"],"question_answer":["comment","message","chat"],"receipt":["transaction"],"record_voice_over":["user","sound"],"redeem":["present","giftcard"],"remove_shopping_cart":[],"reorder":["lines"],"report_problem":["triangle","warning","danger","exclamation"],"restore":["clock","undo","time","history"],"restore_page":["history","web","undo"],"room":["location","gps"],"rounded_corner":[],"rowing":["sports"],"schedule":["time","clock"],"search":["find","looking glass"],"settings":["gear"],"settings_applications":["gear"],"settings_backup_restore":["time","history","undo"],"settings_bluetooth":["network"],"settings_brightness":["sun"],"settings_cell":["mobile","phone"],"settings_ethernet":["brackets","parenthesis","network"],"settings_input_antenna":["wifi","network"],"settings_input_component":["plugs","cable"],"settings_input_composite":["plugs","cable"],"settings_input_hdmi":["cable"],"settings_input_svideo":["plugs"],"settings_overscan":["expand"],"settings_phone":[],"settings_power":[],"settings_remote":["control"],"settings_voice":["microphone"],"shop":["briefcase"],"shop_two":["briefcase"],"shopping_basket":[],"shopping_cart":[],"speaker_notes":["message","chat","comment"],"speaker_notes_off":["message","chat","comment"],"spellcheck":["letter","alphabet","checkmark"],"stars":["rating"],"store":["building"],"subject":["lines","text"],"supervisor_account":["user","administrator","person"],"swap_horiz":["arrows"],"swap_vert":["arrows"],"swap_vertical_circle":["arrows"],"system_update_alt":["arrow"],"tab":[],"tab_unselected":[],"theaters":["video","media","photography"],"thumb_down":["hand"],"thumb_up":["hand"],"thumbs_up_down":["hand"],"timeline":["chart","graph","line"],"toc":["lines","text"],"today":["agenda","calendar"],"toll":["circles"],"touch_app":["hand"],"track_changes":["radar","circle"],"translate":["alphabet","text","letter"],"trending_down":["chart","graph","arrow"],"trending_flat":["arrow","chart","graph"],"trending_up":["arrow","chart","graph"],"turned_in":[],"turned_in_not":[],"update":["clock","time","arrow","future"],"verified_user":["shield","checkmark"],"view_agenda":["blocks"],"view_array":["blocks"],"view_carousel":["blocks"],"view_column":["blocks"],"view_day":["blocks"],"view_headline":["blocks"],"view_list":["blocks"],"view_module":["blocks"],"view_quilt":["blocks"],"view_stream":["blocks"],"view_week":["blocks"],"visibility":["eye"],"visibility_off":["eye","invisible"],"watch_later":["clock","time"],"work":["briefcase","suitcase"],"youtube_searched_for":["arrow","looking glass"],"zoom_in":["looking glass"],"zoom_out":["looking glass"],"add_alert":["bell","notification","reminder"],"error":["warning","danger","exclamation","circle"],"error_outline":["warning","danger","exclamation","circle"],"warning":["danger","exclamation","triangle"],"add_to_queue":["television","monitor","plus"],"airplay":["apple","television","monitor"],"album":["vinyl","cd","record"],"art_track":[],"av_timer":["stopwatch"],"branding_watermark":[],"call_to_action":[],"closed_caption":["subtitles"],"equalizer":["graph","chart"],"explicit":[],"fast_forward":[],"fast_rewind":[],"featured_play_list":[],"featured_video":[],"fiber_dvr":[],"fiber_manual_record":["dot","circle"],"fiber_new":[],"fiber_pin":[],"fiber_smart_record":[],"forward_10":["arrow","circle"],"forward_30":["arrow","circle"],"forward_5":["arrow","circle"],"games":["playstation","nintendo","xbox","dpad","controller"],"hd":[],"hearing":[],"high_quality":["hq"],"library_add":["collection"],"library_books":["collection"],"library_music":["collection"],"loop":["refresh","loader","loading"],"mic":["microphone"],"mic_none":["microphone"],"mic_off":["microphone"],"movie":["video","film"],"music_video":[],"new_releases":["exclamation"],"not_interested":["disabled","not allowed","banned","prohibited"],"note":[],"pause":[],"pause_circle_filled":[],"pause_circle_outline":[],"play_arrow":[],"play_circle_filled":[],"play_circle_outline":[],"playlist_add":[],"playlist_add_check":["checkmark"],"playlist_play":[],"queue":[],"queue_music":[],"queue_play_next":[],"radio":[],"recent_actors":["contacts"],"remove_from_queue":["television","monitor"],"repeat":["arrows"],"repeat_one":["arrows"],"replay":["undo","rewind","arrow"],"replay_10":["rewind","arrow"],"replay_30":["rewind","arrow"],"replay_5":["rewind","arrow"],"shuffle":["arrows"],"skip_next":[],"skip_previous":[],"slow_motion_video":["circle","time"],"snooze":["alarm"],"sort_by_alpha":["alphabet","letters"],"stop":["square"],"subscriptions":["youtube","playlist","queue"],"subtitles":["captions"],"surround_sound":["audio"],"video_call":["camera"],"video_label":[],"video_library":["collection"],"videocam":["camera"],"videocam_off":["camera"],"volume_down":["sound"],"volume_mute":["sound"],"volume_off":["sound"],"volume_up":["sound"],"web":["blocks"],"web_asset":[],"business":["building","flat","apartment"],"call":["phone"],"call_end":["phone"],"call_made":["arrow"],"call_merge":["arrow"],"call_missed":["arrow"],"call_missed_outgoing":["arrow"],"call_received":["arrow"],"call_split":["arrow"],"chat":["message","comment"],"chat_bubble":["message","comment"],"chat_bubble_outline":["message","comment"],"clear_all":["lines","notifications"],"comment":["chat","message"],"contact_mail":["user","person"],"contact_phone":["user","person"],"contacts":["user","person"],"dialer_sip":["phone"],"dialpad":["dots","phone"],"email":["letter","envelope"],"forum":["chat","messages","conversation"],"import_contacts":["book","magazine"],"import_export":["arrows"],"invert_colors_off":["drop","liquid","water"],"live_help":["comment","question","faq"],"location_off":["gps"],"location_on":["gps"],"mail_outline":["letter","envelope"],"message":["chat","comment"],"no_sim":[],"phone":["mobile"],"phonelink_erase":["mobile"],"phonelink_lock":["mobile","security"],"phonelink_ring":["mobile"],"phonelink_setup":["mobile","settings"],"portable_wifi_off":["network"],"present_to_all":["arrow"],"ring_volume":["phone","mobile"],"rss_feed":["wifi","network"],"screen_share":["monitor","laptop"],"speaker_phone":["mobile"],"stay_current_landscape":["mobile","phone"],"stay_current_portrait":["mobile","phone"],"stay_primary_landscape":["mobile","phone"],"stay_primary_portrait":["mobile","phone"],"stop_screen_share":["monitor","laptop"],"swap_calls":["arrow"],"textsms":["message","chat","comment"],"voicemail":[],"vpn_key":["security"],"add":["plus","new","create"],"add_box":["plus","new","create","square"],"add_circle":["plus","new","create"],"add_circle_outline":["plus","new","create"],"archive":[],"backspace":["delete","clear","remove"],"block":["disable","not allowed","cancel","banned"],"clear":["disable","cancel","cross","times","x"],"content_copy":["files"],"content_cut":["scissor"],"content_paste":["clipboard"],"create":["pencil","new"],"delete_sweep":["trashcan","bin"],"drafts":["email","letter","envelope"],"filter_list":["lines"],"flag":[],"font_download":["letter","square"],"forward":["arrow"],"gesture":["line","drawing"],"inbox":[],"link":[],"low_priority":["arrow","list"],"mail":["letter","envelope"],"markunread":["letter","envelope"],"move_to_inbox":[],"next_week":["suitcase","briefcase"],"redo":["arrow"],"remove":["minus","line"],"remove_circle":["not allowed","disable","banned"],"remove_circle_outline":["not allowed","disable","banned"],"reply":["arrow"],"reply_all":["arrows"],"report":["exclamation"],"save":["floppy","diskette"],"select_all":[],"send":["chat","message","telegram"],"sort":["lines"],"text_format":["letter"],"unarchive":["arrow"],"undo":["arrow"],"weekend":["couch","seat","chair"],"access_alarm":["time","clock"],"access_alarms":["time","clock"],"access_time":["time","clock"],"add_alarm":["time","clock","plus"],"airplanemode_active":["flying"],"airplanemode_inactive":["flying"],"battery_20":[],"battery_30":[],"battery_50":[],"battery_60":[],"battery_80":[],"battery_90":[],"battery_alert":["exclamation"],"battery_charging_20":[],"battery_charging_30":[],"battery_charging_50":[],"battery_charging_60":[],"battery_charging_80":[],"battery_charging_90":[],"battery_charging_full":["lightning"],"battery_full":[],"battery_std":[],"battery_unknown":["question"],"bluetooth":["wireless","network"],"bluetooth_connected":["wireless","network"],"bluetooth_disabled":["wireless","network"],"bluetooth_searching":["wireless","network"],"brightness_auto":[],"brightness_high":[],"brightness_low":[],"brightness_medium":[],"data_usage":["circle"],"developer_mode":["code"],"devices":["laptop","phone","mobile"],"dvr":["monitor","laptop"],"gps_fixed":["location"],"gps_not_fixed":[],"gps_off":[],"graphic_eq":["equalizer","audio"],"location_disabled":[],"location_searching":[],"network_cell":[],"network_wifi":[],"nfc":[],"screen_lock_landscape":["mobile","phone","security"],"screen_lock_portrait":["mobile","phone","security"],"screen_lock_rotation":["mobile","phone"],"screen_rotation":["mobile","phone"],"sd_storage":["microsd"],"settings_system_daydream":["cloud"],"signal_cellular_0_bar":[],"signal_cellular_1_bar":[],"signal_cellular_2_bar":[],"signal_cellular_3_bar":[],"signal_cellular_4_bar":["network"],"signal_cellular_connected_no_internet_0_bar":[],"signal_cellular_connected_no_internet_1_bar":[],"signal_cellular_connected_no_internet_2_bar":[],"signal_cellular_connected_no_internet_3_bar":[],"signal_cellular_connected_no_internet_4_bar":["network"],"signal_cellular_no_sim":[],"signal_cellular_null":["wifi"],"signal_cellular_off":["network"],"signal_wifi_0_bar":[],"signal_wifi_1_bar":[],"signal_wifi_1_bar_lock":[],"signal_wifi_2_bar":[],"signal_wifi_2_bar_lock":[],"signal_wifi_3_bar":[],"signal_wifi_3_bar_lock":[],"signal_wifi_4_bar":[],"signal_wifi_4_bar_lock":["network"],"signal_wifi_off":["network"],"signal_wifi_statusbar_1_bar_26_x":[],"signal_wifi_statusbar_2_bar_26_x":[],"signal_wifi_statusbar_3_bar_26_x":[],"signal_wifi_statusbar_4_bar_26_x":[],"signal_wifi_statusbar_connected_no_internet_1_26_x":[],"signal_wifi_statusbar_connected_no_internet_2_26_x":[],"signal_wifi_statusbar_connected_no_internet_26_x":[],"signal_wifi_statusbar_connected_no_internet_3_26_x":[],"signal_wifi_statusbar_connected_no_internet_4_26_x":[],"signal_wifi_statusbar_not_connected_26_x":[],"signal_wifi_statusbar_null_26_x":[],"storage":["network","server","database"],"usb":[],"wallpaper":["image","picture"],"widgets":["blocks"],"wifi_lock":["network"],"wifi_tethering":["network"],"attach_file":["paperclip"],"attach_money":["financial","dollar"],"border_all":[],"border_bottom":[],"border_clear":[],"border_color":["pencil","marker","create"],"border_horizontal":[],"border_inner":[],"border_left":[],"border_outer":[],"border_right":[],"border_style":[],"border_top":[],"border_vertical":[],"bubble_chart":["graph"],"drag_handle":["lines"],"format_align_center":["lines"],"format_align_justify":["lines"],"format_align_left":["lines"],"format_align_right":["lines"],"format_bold":[],"format_clear":[],"format_color_fill":["bucket"],"format_color_reset":["drop","water","liquid"],"format_color_text":[],"format_indent_decrease":[],"format_indent_increase":[],"format_italic":[],"format_line_spacing":[],"format_list_bulleted":[],"format_list_numbered":[],"format_paint":["paintroller"],"format_quote":["quotation"],"format_shapes":[],"format_size":[],"format_strikethrough":[],"format_textdirection_l_to_r":["paragraph"],"format_textdirection_r_to_l":["paragraph"],"format_underlined":[],"functions":["sigma"],"highlight":["marker","flashlight"],"insert_chart":["graph"],"insert_comment":["chat","message"],"insert_drive_file":[],"insert_emoticon":[],"insert_invitation":["agenda","calendar"],"insert_link":[],"insert_photo":["image","wallpaper"],"linear_scale":[],"merge_type":["arrow"],"mode_comment":["message","chat"],"mode_edit":["pencil","create","new"],"monetization_on":["money","financial","dollar"],"money_off":["money","financial","dollar"],"multiline_chart":["graph"],"pie_chart":["graph"],"pie_chart_outlined":["graph"],"publish":["upload","arrow"],"short_text":["lines"],"show_chart":["graph"],"space_bar":[],"strikethrough_s":[],"text_fields":[],"title":[],"vertical_align_bottom":["arrow"],"vertical_align_center":["arrow"],"vertical_align_top":["arrow"],"wrap_text":["arrow"],"attachment":["paperclip"],"cloud":[],"cloud_circle":[],"cloud_done":["checkmark"],"cloud_download":[],"cloud_off":[],"cloud_queue":[],"cloud_upload":[],"create_new_folder":["directory"],"file_download":[],"file_upload":[],"folder":["directory"],"folder_open":["directory"],"folder_shared":["directory"],"cast":["chromecast"],"cast_connected":["chromecast"],"computer":["laptop","pc","monitor"],"desktop_mac":["pc","apple","monitor"],"desktop_windows":["pc","monitor"],"developer_board":["devkit"],"device_hub":[],"devices_other":["smartwatch"],"dock":["charger"],"gamepad":[],"headset":["earmuffs","headphones"],"headset_mic":["headphones"],"keyboard":[],"keyboard_arrow_down":["chevron"],"keyboard_arrow_left":["chevron"],"keyboard_arrow_right":["chevron"],"keyboard_arrow_up":["chevron"],"keyboard_backspace":[],"keyboard_capslock":["arrow"],"keyboard_hide":[],"keyboard_return":["arrow"],"keyboard_tab":["arrow"],"keyboard_voice":[],"laptop":[],"laptop_chromebook":[],"laptop_mac":["apple"],"laptop_windows":[],"memory":["chip"],"mouse":[],"phone_android":["mobile"],"phone_iphone":["mobile","apple"],"phonelink":[],"phonelink_off":[],"power_input":["dc"],"router":["device","network"],"scanner":["device"],"security":["shield"],"sim_card":[],"smartphone":["mobile"],"speaker":["audio"],"speaker_group":["audio"],"tablet":[],"tablet_android":[],"tablet_mac":["apple"],"toys":["fan"],"tv":["television"],"videogame_asset":["gamepad","controller","playstation","xbox","nintendo"],"watch":["smartwatch"],"add_a_photo":["camera"],"add_to_photos":["plus"],"adjust":["circle"],"assistant":["star","comment","chat"],"assistant_photo":[],"audiotrack":["note"],"blur_circular":["circle"],"blur_linear":[],"blur_off":[],"blur_on":[],"brightness_1":[],"brightness_2":["moon"],"brightness_3":["moon"],"brightness_4":["moon","sun"],"brightness_5":["sun"],"brightness_6":["sun"],"brightness_7":["sun"],"broken_image":["picture"],"brush":["paint"],"burst_mode":["image","picture"],"camera":[],"camera_alt":[],"camera_front":[],"camera_rear":[],"camera_roll":[],"center_focus_strong":[],"center_focus_weak":[],"collections":[],"collections_bookmark":[],"color_lens":[],"colorize":["color picker","pipette"],"compare":[],"control_point":["circle","plus"],"control_point_duplicate":["circle","plus"],"crop":[],"crop_16_9":["square"],"crop_3_2":["square"],"crop_5_4":["square"],"crop_7_5":["square"],"crop_din":["square"],"crop_free":["square"],"crop_landscape":["square"],"crop_original":["square"],"crop_portrait":["square"],"crop_rotate":[],"crop_square":[],"dehaze":[],"details":["triangle"],"edit":[],"exposure":["plus","minus"],"exposure_neg_1":["minus"],"exposure_neg_2":["minus"],"exposure_plus_1":["plus"],"exposure_plus_2":["plus"],"exposure_zero":[],"filter":[],"filter_1":[],"filter_2":[],"filter_3":[],"filter_4":[],"filter_5":[],"filter_6":[],"filter_7":[],"filter_8":[],"filter_9":[],"filter_9_plus":[],"filter_b_and_w":[],"filter_center_focus":[],"filter_drama":["cloud"],"filter_frames":[],"filter_hdr":["mountains"],"filter_none":[],"filter_tilt_shift":[],"filter_vintage":["flower"],"flare":["lensflare"],"flash_auto":["lightning"],"flash_off":["lightning"],"flash_on":["lightning"],"flip":[],"gradient":[],"grain":[],"grid_off":[],"grid_on":[],"hdr_off":[],"hdr_on":[],"hdr_strong":[],"hdr_weak":[],"healing":["bandaid"],"image":["picture"],"image_aspect_ratio":[],"iso":[],"landscape":[],"leak_add":[],"leak_remove":[],"lens":[],"linked_camera":[],"looks":["rainbow"],"looks_3":[],"looks_4":[],"looks_5":[],"looks_6":[],"looks_one":[],"looks_two":[],"loupe":[],"monochrome_photos":[],"movie_creation":["video","film"],"movie_filter":["video","film"],"music_note":[],"nature":["tree","forest"],"nature_people":["tree","forest","person"],"navigate_before":["arrow"],"navigate_next":["arrow"],"palette":[],"panorama":["picture","image"],"panorama_fish_eye":[],"panorama_horizontal":[],"panorama_vertical":[],"panorama_wide_angle":[],"photo":[],"photo_album":["picture","image"],"photo_camera":["picture","image"],"photo_filter":[],"photo_library":["picture","image"],"photo_size_select_actual":[],"photo_size_select_large":[],"photo_size_select_small":[],"picture_as_pdf":[],"portrait":[],"remove_red_eye":[],"rotate_90_degrees_ccw":["arrow"],"rotate_left":["arrow","circle"],"rotate_right":["arrow","circle"],"slideshow":[],"straighten":["piano"],"style":[],"switch_camera":[],"switch_video":[],"tag_faces":[],"texture":[],"timelapse":[],"timer":["stopwatch"],"timer_10":[],"timer_3":[],"timer_off":["stopwatch"],"tonality":[],"transform":[],"tune":["settings","sliders"],"view_comfy":["grid"],"view_compact":["grid"],"vignette":[],"wb_auto":[],"wb_cloudy":[],"wb_incandescent":["lightbulb"],"wb_iridescent":[],"wb_sunny":[],"add_location":["gps"],"beenhere":["checkmark"],"directions":["naviate","arrow"],"directions_bike":["bicycle"],"directions_boat":[],"directions_bus":[],"directions_car":[],"directions_railway":[],"directions_run":["person"],"directions_subway":[],"directions_transit":["subway","metro"],"directions_walk":["person"],"edit_location":["gps"],"ev_station":["gas station","gasoline","fuel","filling station"],"flight":["flying","airplane"],"hotel":["bed","sleep"],"layers":[],"layers_clear":[],"local_activity":["star"],"local_airport":["flying","airplane"],"local_atm":["financial","dollar","money"],"local_bar":["alcohol","drink","martini"],"local_cafe":["drink","coffee"],"local_car_wash":[],"local_convenience_store":["building"],"local_dining":["cutlery","knife","spoon"],"local_drink":["glass","water"],"local_florist":["flower"],"local_gas_station":["gasoline","fuel","filling station"],"local_grocery_store":[],"local_hospital":["plus"],"local_hotel":[],"local_laundry_service":[],"local_library":["book","person"],"local_mall":["shopping bag"],"local_movies":[],"local_offer":[],"local_parking":[],"local_pharmacy":["food"],"local_phone":[],"local_pizza":[],"local_play":[],"local_post_office":[],"local_printshop":[],"local_see":[],"local_shipping":["car","truck","semi"],"local_taxi":["car"],"map":[],"my_location":[],"navigation":["arrow"],"near_me":["arrow"],"person_pin":["location","gps"],"person_pin_circle":["location","gps"],"pin_drop":["location","gps"],"place":[],"rate_review":["comment","message","chat"],"restaurant":["cutlery","knife","fork"],"restaurant_menu":[],"satellite":[],"store_mall_directory":["building"],"streetview":["map","gps","location"],"subway":["metro"],"terrain":[],"traffic":["light"],"train":[],"tram":[],"transfer_within_a_station":["person"],"zoom_out_map":["arrows"],"apps":["grid"],"arrow_back":[],"arrow_downward":[],"arrow_drop_down":[],"arrow_drop_down_circle":[],"arrow_drop_up":[],"arrow_forward":[],"arrow_upward":[],"cancel":["disable","cross"],"check":["checkmark"],"chevron_left":["arrow"],"chevron_right":["arrow"],"close":["cancel","disable","not allowed"],"expand_less":["arrow"],"expand_more":["arrow"],"first_page":["arrow"],"fullscreen":[],"fullscreen_exit":[],"last_page":["arrow"],"menu":[],"more_horiz":["dots"],"more_vert":["dots"],"refresh":[],"subdirectory_arrow_left":["arrow"],"subdirectory_arrow_right":["arrow"],"unfold_less":["arrow"],"unfold_more":["arrow"],"adb":["android"],"airline_seat_flat":["bed","sleep"],"airline_seat_flat_angled":["bed","sleep"],"airline_seat_individual_suite":["bed","sleep"],"airline_seat_legroom_extra":[],"airline_seat_legroom_normal":[],"airline_seat_legroom_reduced":[],"airline_seat_recline_extra":[],"airline_seat_recline_normal":[],"bluetooth_audio":[],"confirmation_number":["ticket"],"disc_full":["cd","vinyl","exclamation"],"do_not_disturb":["banned"],"do_not_disturb_alt":["banned"],"do_not_disturb_off":["banned"],"do_not_disturb_on":["banned"],"drive_eta":[],"enhanced_encryption":["security","lock"],"event_available":["agenda","calendar"],"event_busy":["agenda","calendar"],"event_note":["agenda","calendar"],"folder_special":["directory"],"live_tv":["monitor","television"],"mms":["chat","message","comment"],"more":["tag","badge"],"network_check":["wifi"],"network_locked":["wifi"],"no_encryption":["lock","security"],"ondemand_video":["monitor","television"],"personal_video":["monitor","television"],"phone_bluetooth_speaker":[],"phone_forwarded":[],"phone_in_talk":[],"phone_locked":["security"],"phone_missed":[],"phone_paused":[],"power":["socket","plug"],"priority_high":["exclamation"],"sd_card":[],"sim_card_alert":["exclamation"],"sms":["chat","comment","message"],"sms_failed":["chat","comment","message"],"sync":[],"sync_disabled":["refresh","arrows"],"sync_problem":["refresh","arrows"],"system_update":["download"],"tap_and_play":["nfc","wifi"],"time_to_leave":[],"vibration":["mobile","phone"],"voice_chat":["camera"],"vpn_lock":["world","security"],"wc":["person","toilet","unisex"],"wifi":["network"],"ac_unit":["snowflake","freeze"],"airport_shuttle":["bus","car"],"all_inclusive":["infinite"],"beach_access":["umbrella","parasol"],"business_center":["suitcase","briefcase"],"casino":["dice"],"child_care":["baby"],"child_friendly":["baby"],"fitness_center":["weights","workout"],"free_breakfast":["tea","coffee","drink"],"golf_course":["flag"],"hot_tub":["jacuzzi"],"kitchen":["refrigerator","cabinet"],"pool":["water","swimming"],"room_service":["bell","concierge"],"rv_hookup":[],"smoke_free":["cigarette"],"smoking_rooms":["cigarette"],"spa":["flower"],"cake":["pie"],"domain":[],"group":["person","user"],"group_add":["person","user","people"],"location_city":["building"],"mood":["smiley","emoji","emoticon"],"mood_bad":["smiley","emoji","emoticon"],"notifications":["bell","ring"],"notifications_active":["bell","ring"],"notifications_none":["bell","ring"],"notifications_off":["bell","ring"],"notifications_paused":["bell","ring"],"pages":[],"party_mode":[],"people":["person","user"],"people_outline":["person","user"],"person":["user"],"person_add":["user"],"person_outline":["user"],"plus_one":["add"],"poll":["graph","chart"],"public":["world","earth"],"school":["university","college"],"sentiment_very_dissatisfied":["smiley","emoji","emoticon","sad"],"sentiment_dissatisfied":["smiley","emoji","emoticon","sad"],"sentiment_neutral":["smiley","emoji","emoticon"],"sentiment_satisfied":["smiley","emoji","emoticon","happy"],"sentiment_very_satisfied":["smiley","emoji","emoticon","happy"],"share":[],"whatshot":["fire"],"check_box":["checkmark","square"],"check_box_outline_blank":["square"],"indeterminate_check_box":["square","minus"],"radio_button_checked":["circle"],"radio_button_unchecked":["circle"],"star":["rating"],"star_border":["rating"],"star_half":["rating"]}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(6);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactTransitionGroupPlus = __webpack_require__(68);

var _reactTransitionGroupPlus2 = _interopRequireDefault(_reactTransitionGroupPlus);

var _noScroll = __webpack_require__(20);

var _noScroll2 = _interopRequireDefault(_noScroll);

var _overlay = __webpack_require__(69);

var _overlay2 = _interopRequireDefault(_overlay);

var _overWrapper = __webpack_require__(70);

var _overWrapper2 = _interopRequireDefault(_overWrapper);

var _isValidTriggerElement = __webpack_require__(84);

var _isValidTriggerElement2 = _interopRequireDefault(_isValidTriggerElement);

var _validateOverConfig = __webpack_require__(85);

var _validateOverConfig2 = _interopRequireDefault(_validateOverConfig);

var _warning = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Context is used here so that a single Portal can be used for every
// overelement in the application.
var OverContext = (0, _react.createContext)();

// This Provider sets up the Portal, appending a new element to the
// body of the page.
// Then, it provides an API to Consumers to open and close overelements
// with that portal.

var Provider = function (_Component) {
  _inherits(Provider, _Component);

  _createClass(Provider, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;


      return _react2.default.createElement(
        OverContext.Provider,
        { value: this.providerValue },
        children,
        this.getPortal()
      );
    }
  }]);

  function Provider() {
    var _ref;

    _classCallCheck(this, Provider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Provider.__proto__ || Object.getPrototypeOf(Provider)).call.apply(_ref, [this].concat(args)));

    _this.state = {
      // We keep track of how many overelements are currently visible that
      // are disabling scroll. Anytime that the count is > 0, scroll is disabled
      // on the page.
      // Typically, there will only ever be one element that prevents scroll
      // on the page, as they are frequently paired with an overlay. Nevertheless,
      // this logic _should_ catch any strange edge cases that exist.
      noScrollCount: 0,
      // This is a mapping of "descriptions". A description is an object that represents an
      // overelement that is currently visible. Within render, we loop the descriptions
      // and render overs.
      activeOverDescriptions: {}
    };

    _this.getPortal = function () {
      if (typeof document !== 'undefined') {
        return _reactDom2.default.createPortal(_this.getPortalChild(), document.body);
      } else {
        return null;
      }
    };

    _this.getPortalChild = function () {
      var activeOverDescriptions = _this.state.activeOverDescriptions;


      var overIds = Object.keys(activeOverDescriptions);

      // Within the portal, we use a transition group so that we can animate each of
      // the overlements individually.
      return _react2.default.createElement(
        _reactTransitionGroupPlus2.default,
        { style: { zIndex: 2147483647 } },
        overIds.map(function (key) {
          // This is the configuration object for the component that we are about to render.
          var overDescription = activeOverDescriptions[key];

          // If we have no config, then this is an over's key that has been null'd. The config is
          // set to null when the Over is closed.
          if (!overDescription) {
            return null;
          }

          var onMouseEnter = overDescription.config.removeOnMouseOut ? function () {
            return _this.onMouseEnterWrapper(overDescription.id);
          } : undefined;

          var onMouseLeave = overDescription.config.removeOnMouseOut ? function () {
            return _this.close(overDescription.id);
          } : undefined;

          return [_react2.default.createElement(_overlay2.default, {
            config: overDescription.config.overlay,
            key: overDescription.id + '-overlay'
          }), _react2.default.createElement(
            _overWrapper2.default,
            {
              id: overDescription.id,
              key: overDescription.id,
              onMouseEnter: onMouseEnter,
              onMouseLeave: onMouseLeave,
              targetEl: overDescription.targetEl,
              triggerEl: overDescription.triggerEl,
              config: overDescription.config,
              close: _this.close },
            overDescription.component
          )];
        })
      );
    };

    _this.componentsToCloseTimeouts = {};

    _this.open = function (_ref2) {
      var triggerEl = _ref2.triggerEl,
          targetEl = _ref2.targetEl,
          component = _ref2.component,
          config = _ref2.config;

      if (!(0, _isValidTriggerElement2.default)(triggerEl)) {
        if (false) {
          (0, _warning.warning)('You attempted to open a React Over element with an invalid triggerElement.' + ' triggerElements must be element nodes such as <div> or <p>.', 'INVALID_TRIGGER_EL_TO_OPEN');
        }

        return;
      }

      if (targetEl && !(0, _isValidTriggerElement2.default)(targetEl) && typeof targetEl !== 'function') {
        if (false) {
          (0, _warning.warning)('You attempted to open a React Over element with an invalid targetElement.' + ' targetElements must be element nodes such as <div> or <p>.', 'INVALID_TARGET_EL_TO_OPEN');
        }

        return;
      }

      if (!_react2.default.isValidElement(component)) {
        if (false) {
          (0, _warning.warning)('You attempted to open a React Over element with an invalid overelement.' + ' Over elements must be valid React elements.', 'INVALID_OVER_ELEMENT_TO_OPEN');
        }

        return;
      }

      if (!(0, _validateOverConfig2.default)(config)) {
        return;
      }

      var id = config.id;

      // The first thing that we need to do if a component is attempted to be
      // opened is clear out any timeouts the close the component.
      clearInterval(_this.componentsToCloseTimeouts[id]);

      // We may or may not need to update the state. The only way to know this is to
      // look at the previous state, so we go ahead and call `setState` to gain access
      // to the previous state.
      // Should we decide that we do not need to update state, we can return `undefined`.
      _this.setState(function (prevState) {
        // If the component is already in our `activeOverDescriptions`, then we have nothing
        // to do. It is already open!
        if (prevState.activeOverDescriptions[id]) {
          return;
        }

        if (config.disableScroll) {
          // `noScroll.on()` is idempotent, so it is okay to call it even if the scroll
          // is already prevented.
          _noScroll2.default.on();
        }

        // We need to keep track of the number of Overs that want to prevent scroll.
        // When this count hits 0, we need to reenable it.
        var noScrollCount = config.disableScroll ? prevState.noScrollCount + 1 : prevState.noScrollCount;

        var targetElement = void 0;
        if (typeof targetEl === 'function') {
          targetElement = targetEl();
        } else if (typeof targetEl !== 'undefined') {
          targetElement = targetEl;
        } else {
          targetElement = triggerEl;
        }

        return {
          noScrollCount: noScrollCount,
          activeOverDescriptions: _extends({}, prevState.activeOverDescriptions, _defineProperty({}, id, {
            targetEl: targetElement,
            component: component,
            triggerEl: triggerEl,
            config: config,
            id: id
          }))
        };
      });
    };

    _this.close = function (id) {
      if (typeof id === 'undefined') {
        return;
      }

      if (false) {
        if (typeof id !== 'string' && typeof id !== 'number') {
          (0, _warning.warning)('You attempted to close an over with an invalid ID. Over IDs must be' + ' strings or numbers.', 'INVALID_ID_PASSED_TO_CLOSE');
        }
      }

      var timeout = _this.componentsToCloseTimeouts[id];

      // Note: timeout IDs are always positive integers. If we have
      // one, then this component is already in the process of
      // being closed, so there is nothing to do.
      if (timeout) {
        return;
      }

      _this.setState(function (prevState) {
        var overDescription = prevState.activeOverDescriptions[id];
        var delay = overDescription && overDescription.config.delay || 0;

        if (!delay) {
          _this.performOverClose(id);
        } else {
          _this.componentsToCloseTimeouts[id] = setTimeout(function () {
            _this.performOverClose(id);
          }, delay);
        }
      });
    };

    _this.performOverClose = function (id) {
      // Because we plan to set state in here, we defensively add a `setTimeout` here.
      // Other functions may call this synchronously from within another `setState`,
      // which is not supported:
      // https://github.com/facebook/react/issues/8132#issuecomment-334169842
      setTimeout(function () {
        _this.setState(function (prevState) {
          var overDescription = prevState.activeOverDescriptions[id];

          var noScrollCount = void 0;
          if (overDescription && overDescription.config.disableScroll) {
            noScrollCount = prevState.noScrollCount - 1;
          } else {
            noScrollCount = prevState.noScrollCount;
          }

          return {
            noScrollCount: noScrollCount,
            activeOverDescriptions: _extends({}, prevState.activeOverDescriptions, _defineProperty({}, id, null))
          };
        }, function () {
          // We need to wipe out any existing timeouts for this ID.
          _this.componentsToCloseTimeouts[id] = null;
          // Once we noScrollCount hits 0, we can reenable scrolling.
          if (_this.state.noScrollCount === 0) {
            _noScroll2.default.off();
          }
        });
      });
    };

    _this.onMouseEnterWrapper = function (id) {
      clearTimeout(_this.componentsToCloseTimeouts[id]);
    };

    _this.getOverProps = function (_ref3) {
      var triggerProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var type = _ref3.type,
          config = _objectWithoutProperties(_ref3, ['type']);

      if (type === 'hover') {
        return _this.getHoverProps(config, triggerProps);
      } else if (type === 'click') {
        return _this.getClickProps(config, triggerProps);
      } else {
        if (false) {
          if (typeof id === 'undefined') {
            (0, _warning.warning)('You called getOverProps() with an invalid type. The valid types are' + ' "hover" and "click". You should check your calls to getOverProps().', 'INVALID_TYPE_TO_GET_OVER_PROPS');
          }
        }
      }
    };

    _this.getHoverProps = function (_ref4, _ref5) {
      var _onMouseEnter = _ref5.onMouseEnter,
          _onMouseLeave = _ref5.onMouseLeave,
          otherProps = _objectWithoutProperties(_ref5, ['onMouseEnter', 'onMouseLeave']);

      var component = _ref4.component,
          targetEl = _ref4.targetEl,
          config = _objectWithoutProperties(_ref4, ['component', 'targetEl']);

      var removeOnMouseOut = typeof config.removeOnMouseOut === 'boolean' ? config.removeOnMouseOut : true;

      var removeOnClickOutside = typeof config.removeOnClickOutside === 'boolean' ? config.removeOnClickOutside : false;

      return _extends({}, otherProps, {
        onMouseEnter: function onMouseEnter(e) {
          _this.open({
            targetEl: targetEl,
            triggerEl: e.target,
            component: component,
            config: _extends({
              removeOnMouseOut: removeOnMouseOut,
              removeOnClickOutside: removeOnClickOutside,
              id: config.id
            }, config)
          });

          if (typeof _onMouseEnter === 'function') {
            _onMouseEnter(e);
          }
        },
        onMouseLeave: function onMouseLeave(e) {
          if (removeOnMouseOut) {
            _this.close(config.id);
          }

          if (typeof _onMouseLeave === 'function') {
            _onMouseLeave(e);
          }
        }
      });
    };

    _this.getClickProps = function (_ref6, _ref7) {
      var _onClick = _ref7.onClick,
          _onMouseLeave2 = _ref7.onMouseLeave,
          otherProps = _objectWithoutProperties(_ref7, ['onClick', 'onMouseLeave']);

      var component = _ref6.component,
          targetEl = _ref6.targetEl,
          config = _objectWithoutProperties(_ref6, ['component', 'targetEl']);

      var removeOnMouseOut = typeof config.removeOnMouseOut === 'boolean' ? config.removeOnMouseOut : false;

      var removeOnClickOutside = typeof config.removeOnClickOutside === 'boolean' ? config.removeOnClickOutside : true;

      return _extends({}, otherProps, {
        onClick: function onClick(e) {
          // By default, click overs will close when you click them again. Should
          // this be a configuration option?
          if (_this.state.activeOverDescriptions[config.id]) {
            _this.close(config.id);
          }

          // If we reach this point, then the over is not open, so we open it.
          else {
              _this.open({
                triggerEl: e.target,
                targetEl: targetEl,
                component: component,
                config: _extends({
                  removeOnMouseOut: removeOnMouseOut,
                  removeOnClickOutside: removeOnClickOutside
                }, config)
              });
            }

          if (typeof _onClick === 'function') {
            _onClick(e);
          }
        },
        onMouseLeave: function onMouseLeave(e) {
          if (removeOnMouseOut) {
            _this.close(config.id);
          }

          if (typeof _onMouseLeave2 === 'function') {
            _onMouseLeave2(e);
          }
        }
      });
    };

    _this.providerValue = {
      // Manually open an overelement (by passing a config object)
      open: _this.open,
      // Manually close an overelement (by passing an ID)
      close: _this.close,
      // A convenience API that manages opening and closing for you
      getOverProps: _this.getOverProps
    };
    return _this;
  }

  // This is an object, where each key is an Over's ID.
  // They map to `setTimeouts`. Once the timeout ends, the Over
  // will be closed. This map is used for Overs that have a delay.


  // If you mouse over an element that is configured to close on mouse out, then we
  // clear any existing timeout the close the element.


  return Provider;
}(_react.Component);

exports.default = {
  Consumer: OverContext.Consumer,
  Provider: Provider
};

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("react-transition-group-plus");

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _warning = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultColor = 'rgba(0, 0, 0, 0.7)';
var transition = 'opacity 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';

// Overlays are optional backgrounds to the over.
// By default, overs do not have an overlay. There are
// three ways to configure one, all involving the value that you
// pass as the `overlay` option:
//
// 1. Pass a React Element to use that Element for the Overlay
// 2. Pass a string to set the background color for the overlay.
// 3. Pass a truthy value to use the default color
//

// TODO: Possibly allow the user to customize the transition for the default
// overlay. Maybe something like:
//
// {
//   overlay: {
//     color: '#000',
//     transitionDuration: '450ms'
//   }
// }

var Overlay = function (_Component) {
  _inherits(Overlay, _Component);

  function Overlay() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Overlay);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Overlay.__proto__ || Object.getPrototypeOf(Overlay)).call.apply(_ref, [this].concat(args))), _this), _this.getRef = function (ref) {
      _this.el = ref;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Overlay, [{
    key: 'render',
    value: function render() {
      var config = this.props.config;


      if (_react2.default.isValidElement(config)) {
        return config;
      } else if (!config) {
        return null;
      }

      var color = void 0;
      if (typeof config !== 'string') {
        if (false) {
          (0, _warning.warning)('You passed an invalid value as overlay when configuring a React Over element.' + ' The overlay option must be a React Element or a string.', 'MISSING_CONFIG');
        }

        color = defaultColor;
      } else {
        color = config || defaultColor;
      }

      return _react2.default.createElement('div', {
        ref: this.getRef,
        style: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: color
        }
      });
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(cb) {
      var _this2 = this;

      if (!this.el) {
        return;
      }

      this.el.style.opacity = 0;

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          if (!_this2.el) {
            cb();
            return;
          }

          _this2.el.style.transition = transition;
          _this2.el.style.opacity = 1;
          cb();
        });
      });
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(cb) {
      if (!this.el) {
        cb();
        return;
      }

      this.el.style.transition = transition;
      this.el.style.opacity = 0;

      setTimeout(cb, 300);
    }
  }]);

  return Overlay;
}(_react.Component);

exports.default = Overlay;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _computePosition = __webpack_require__(71);

var _computePosition2 = _interopRequireDefault(_computePosition);

var _getStyles = __webpack_require__(81);

var _getStyles2 = _interopRequireDefault(_getStyles);

var _simpleShallowEquals = __webpack_require__(83);

var _simpleShallowEquals2 = _interopRequireDefault(_simpleShallowEquals);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OverWrapper = function (_Component) {
  _inherits(OverWrapper, _Component);

  function OverWrapper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OverWrapper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OverWrapper.__proto__ || Object.getPrototypeOf(OverWrapper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      style: {
        position: 'fixed'
      }
    }, _this.getRef = function (ref) {
      _this.el = ref;
    }, _this.cachedOverBoundingBox = null, _this.getTargetElBoundingBox = function () {
      var targetEl = _this.props.targetEl;


      return targetEl.getBoundingClientRect();
    }, _this.positionElement = function () {
      var _this$props = _this.props,
          triggerEl = _this$props.triggerEl,
          targetEl = _this$props.targetEl,
          config = _this$props.config;


      if (!triggerEl || !_this.el) {
        return;
      }

      if (typeof config.position === 'function') {
        return config.position({ overEl: _this.el, triggerEl: triggerEl, targetEl: targetEl });
      }

      var targetBoundingBox = _this.getTargetElBoundingBox();
      var overBoundingBox = _this.cachedOverBoundingBox || _this.el.getBoundingClientRect();

      var positionObj = (0, _computePosition2.default)({
        position: config.position,
        origin: config.origin,
        targetBoundingBox: targetBoundingBox,
        overBoundingBox: overBoundingBox,
        config: config
      });

      // Should this go onto component state?
      _this.positionObj = positionObj;

      var newStyles = (0, _getStyles2.default)(positionObj);

      for (var attr in newStyles) {
        _this.el.style[attr] = newStyles[attr];
      }

      _this.setState(function (prevState) {
        return {
          style: _extends({}, prevState.style, newStyles)
        };
      });
    }, _this.onClickOutside = function (e) {
      var _this$props2 = _this.props,
          close = _this$props2.close,
          config = _this$props2.config;


      if (!_this.el || _this.el.contains(e.target)) {
        return;
      }

      close(config.id);
    }, _this.onScroll = function (e) {
      requestAnimationFrame(function () {
        var _this$props3 = _this.props,
            config = _this$props3.config,
            targetEl = _this$props3.targetEl,
            close = _this$props3.close,
            id = _this$props3.id;
        var closeOnScroll = config.closeOnScroll;


        if (e.target.contains(targetEl)) {
          // This allows a user to specify a maximum acceptable distance before
          // the thing closes.
          if (typeof closeOnScroll === 'number') {
            var position = targetEl.getBoundingClientRect();

            var topChange = position.top - _this.initialPosition.top;
            var leftChange = position.left - _this.initialPosition.left;

            var totalChange = Math.sqrt(Math.pow(topChange, 2) - Math.pow(leftChange, 2));

            // If the total movement of the trigger exceeds our limit,
            // then we close this overelement.
            if (totalChange > closeOnScroll) {
              close(id);
            }

            // Otherwise, we need to position the overelement
            else {
                _this.positionElement();
              }
          }
          // If a truthy value was passed as closeOnScroll, then we close it
          else if (closeOnScroll) {
              close(id);
            }
            // Lastly, if they do not want to close on scroll, we must reposition the
            // element.
            else {
                _this.positionElement();
              }
        }
      });
    }, _this.onResize = function () {
      requestAnimationFrame(function () {
        _this.positionElement();
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OverWrapper, [{
    key: 'render',
    value: function render() {
      var children = this.props.children;
      var style = this.state.style;


      return _react2.default.createElement(
        'div',
        { style: style, ref: this.getRef },
        children
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          config = _props.config,
          targetEl = _props.targetEl;


      this.positionElement();

      if (config.removeOnClickOutside) {
        document.addEventListener('click', this.onClickOutside);
      }

      window.addEventListener('resize', this.onResize);
      window.addEventListener('scroll', this.onScroll, true);

      // If we have `closeOnScroll` configured, then we need to get the
      // initial position of the `targetEl`.
      // This is so that we can track the movement of the trigger element to
      // determine if we need to close the overelement, based on the scroll.
      if (targetEl && config.closeOnScroll) {
        var rect = this.getTargetElBoundingBox();

        this.initialPosition = {
          top: rect.top,
          left: rect.left
        };
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var targetElChanged = this.props.targetEl !== nextProps.targetEl;
      var styleChanges = !(0, _simpleShallowEquals2.default)(this.state.style, nextState.style);
      return targetElChanged || styleChanges;
    }

    // Question: can the targetEl even change?

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (prevProps.targetEl !== this.props.targetEl) {
        this.positionElement();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.onClickOutside);
      window.removeEventListener('scroll', this.onScroll, true);
      window.removeEventListener('resize', this.onResize);
    }
  }, {
    key: 'componentWillEnter',
    value: function componentWillEnter(done) {
      var _props2 = this.props,
          config = _props2.config,
          triggerEl = _props2.triggerEl,
          targetEl = _props2.targetEl;


      if (!config.animation || !config.animation.componentWillEnter) {
        return done();
      }

      this.cachedOverBoundingBox = this.el.getBoundingClientRect();

      return config.animation.componentWillEnter({
        done: done,
        overEl: this.el,
        triggerEl: triggerEl,
        targetEl: targetEl,
        positionObj: this.positionObj
      });
    }
  }, {
    key: 'componentDidEnter',
    value: function componentDidEnter() {
      var _props3 = this.props,
          config = _props3.config,
          triggerEl = _props3.triggerEl,
          targetEl = _props3.targetEl;


      this.cachedOverBoundingBox = null;

      if (!config.animation || !config.animation.componentDidEnter) {
        return;
      }

      return config.animation.componentDidEnter({
        overEl: this.el,
        triggerEl: triggerEl,
        targetEl: targetEl,
        positionObj: this.positionObj
      });
    }
  }, {
    key: 'componentWillLeave',
    value: function componentWillLeave(done) {
      var _props4 = this.props,
          config = _props4.config,
          triggerEl = _props4.triggerEl,
          targetEl = _props4.targetEl;


      if (!config.animation || !config.animation.componentWillLeave) {
        return done();
      }

      this.cachedOverBoundingBox = this.el.getBoundingClientRect();

      return config.animation.componentWillLeave({
        done: done,
        triggerEl: triggerEl,
        targetEl: targetEl,
        overEl: this.el,
        positionObj: this.positionObj
      });
    }
  }, {
    key: 'componentDidLeave',
    value: function componentDidLeave() {
      var _props5 = this.props,
          config = _props5.config,
          triggerEl = _props5.triggerEl,
          targetEl = _props5.targetEl;


      this.cachedOverBoundingBox = null;

      if (!config.animation || !config.animation.componentDidLeave) {
        return;
      }

      return config.animation.componentDidLeave({
        overEl: this.el,
        triggerEl: triggerEl,
        targetEl: targetEl,
        positionObj: this.positionObj
      });
    }

    // There is a bug in this code, or at least how it is called. If it's called during
    // a transition, the transition will break.
    // We will likely need to append the styles rather than completely replace them,
    // or something like that.

  }]);

  return OverWrapper;
}(_react.Component);

exports.default = OverWrapper;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computePosition;

var _rotation = __webpack_require__(72);

var _rotation2 = _interopRequireDefault(_rotation);

var _coordinatesMap = __webpack_require__(73);

var _coordinatesMap2 = _interopRequireDefault(_coordinatesMap);

var _computePixelCoordinates = __webpack_require__(74);

var _computePixelCoordinates2 = _interopRequireDefault(_computePixelCoordinates);

var _getDefaultOriginFromRotatedCoordinates = __webpack_require__(75);

var _getDefaultOriginFromRotatedCoordinates2 = _interopRequireDefault(_getDefaultOriginFromRotatedCoordinates);

var _getFirstResolutionAxisFromRotatedCoordinates = __webpack_require__(76);

var _getFirstResolutionAxisFromRotatedCoordinates2 = _interopRequireDefault(_getFirstResolutionAxisFromRotatedCoordinates);

var _getGoHigherFromRotatedCoordinates = __webpack_require__(77);

var _getGoHigherFromRotatedCoordinates2 = _interopRequireDefault(_getGoHigherFromRotatedCoordinates);

var _skipBoundary = __webpack_require__(78);

var _skipBoundary2 = _interopRequireDefault(_skipBoundary);

var _clamp = __webpack_require__(79);

var _clamp2 = _interopRequireDefault(_clamp);

var _dimensionsOverlap = __webpack_require__(80);

var _dimensionsOverlap2 = _interopRequireDefault(_dimensionsOverlap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function computePosition(_ref) {
  var targetBoundingBox = _ref.targetBoundingBox,
      overBoundingBox = _ref.overBoundingBox,
      position = _ref.position,
      origin = _ref.origin,
      config = _ref.config;
  var allowOverlap = config.allowOverlap;


  if (!position) {
    position = 'top';
  } else if (typeof position === 'string') {
    position = position.toLowerCase();
  }

  var positionCoordinates = void 0;
  if (Array.isArray(position)) {
    positionCoordinates = position;
  } else if (typeof position === 'string') {
    positionCoordinates = _coordinatesMap2.default[position];
  }

  positionCoordinates = positionCoordinates || _coordinatesMap2.default['top-left'];

  // The relative anchor point is the anchor point relative to the trigger element
  // (0, 0) in this coordinate system is the top-left of the trigger element
  var relativeAnchorPoint = (0, _computePixelCoordinates2.default)({
    coordinates: positionCoordinates,
    boundingBox: targetBoundingBox
  });

  var absoluteAnchorPoint = {
    left: relativeAnchorPoint.left + targetBoundingBox.left,
    top: relativeAnchorPoint.top + targetBoundingBox.top
  };

  var transformedCoordinates = void 0;

  if (!origin) {
    transformedCoordinates = (0, _rotation2.default)({
      position: relativeAnchorPoint,
      boundingBox: targetBoundingBox
    });

    origin = (0, _getDefaultOriginFromRotatedCoordinates2.default)(transformedCoordinates);
  } else if (typeof origin === 'string') {
    origin = origin.toLowerCase();
  }

  var originCoordinates = void 0;
  if (Array.isArray(origin)) {
    originCoordinates = origin;
  } else if (typeof origin === 'string') {
    originCoordinates = _coordinatesMap2.default[origin];
  }

  originCoordinates = originCoordinates || _coordinatesMap2.default['top-left'];

  var originAdjustment = (0, _computePixelCoordinates2.default)({
    coordinates: originCoordinates,
    boundingBox: overBoundingBox
  });

  // These coordinates are where it would be if there was no bottom or
  // right boundary to the viewport. But there are, so we may not use these.
  var computedLeft = absoluteAnchorPoint.left - originAdjustment.left;
  var computedTop = absoluteAnchorPoint.top - originAdjustment.top;

  // These are the furthest to the left and top that the element can go
  // without extending beyond the viewport in that direction.
  var maxLeft = window.innerWidth - overBoundingBox.width;
  var maxTop = window.innerHeight - overBoundingBox.height;

  var clampedLeft = (0, _clamp2.default)(0, computedLeft, maxLeft);
  var clampedTop = (0, _clamp2.default)(0, computedTop, maxTop);

  var top = void 0,
      left = void 0;
  if (allowOverlap) {
    top = clampedTop;
    left = clampedLeft;
  } else {
    transformedCoordinates = transformedCoordinates || (0, _rotation2.default)({
      position: relativeAnchorPoint,
      boundingBox: targetBoundingBox
    });

    var axisToResolveFirst = (0, _getFirstResolutionAxisFromRotatedCoordinates2.default)(transformedCoordinates);

    var yAxisFirst = axisToResolveFirst === 'y';

    var firstLeftOne = yAxisFirst ? targetBoundingBox.left : targetBoundingBox.top;
    var firstRightOne = yAxisFirst ? targetBoundingBox.right : targetBoundingBox.bottom;
    var firstLeftTwo = yAxisFirst ? clampedLeft : clampedTop;
    var firstRightTwo = yAxisFirst ? clampedLeft + overBoundingBox.width : clampedTop + overBoundingBox.height;

    var overlapFirstDim = (0, _dimensionsOverlap2.default)({
      leftOne: firstLeftOne,
      rightOne: firstRightOne,
      leftTwo: firstLeftTwo,
      rightTwo: firstRightTwo
    });

    if (overlapFirstDim) {
      var firstDimStartBoundary = void 0;
      var firstDimEndBoundary = void 0;

      if (yAxisFirst) {
        firstDimStartBoundary = targetBoundingBox.top - overBoundingBox.height;
        firstDimEndBoundary = targetBoundingBox.top + targetBoundingBox.height;
      } else {
        firstDimStartBoundary = targetBoundingBox.left - overBoundingBox.width;
        firstDimEndBoundary = targetBoundingBox.left + targetBoundingBox.width;
      }

      transformedCoordinates = transformedCoordinates || (0, _rotation2.default)({
        position: relativeAnchorPoint,
        boundingBox: targetBoundingBox
      });

      var firstDimSkippedValue = (0, _skipBoundary2.default)({
        val: yAxisFirst ? clampedTop : clampedLeft,
        boundaryStart: firstDimStartBoundary,
        boundaryEnd: firstDimEndBoundary,
        goHigher: (0, _getGoHigherFromRotatedCoordinates2.default)(transformedCoordinates)
      });

      if (yAxisFirst) {
        top = firstDimSkippedValue;
      } else {
        left = firstDimSkippedValue;
      }
    } else {
      if (yAxisFirst) {
        top = clampedTop;
      } else {
        left = clampedLeft;
      }
    }

    var secondLeftOne = yAxisFirst ? targetBoundingBox.top : targetBoundingBox.left;
    var secondRightOne = yAxisFirst ? targetBoundingBox.bottom : targetBoundingBox.right;

    var secondLeftTwo = yAxisFirst ? top : left;
    var secondRightTwo = yAxisFirst ? top + overBoundingBox.height : left + overBoundingBox.width;

    var overlapSecondDim = (0, _dimensionsOverlap2.default)({
      leftOne: secondLeftOne,
      rightOne: secondRightOne,
      leftTwo: secondLeftTwo,
      rightTwo: secondRightTwo
    });

    if (overlapSecondDim) {
      var secondDimStartBoundary = void 0;
      var secondDimEndBoundary = void 0;

      if (yAxisFirst) {
        secondDimStartBoundary = targetBoundingBox.left - overBoundingBox.width;
        secondDimEndBoundary = targetBoundingBox.left + targetBoundingBox.width;
      } else {
        secondDimStartBoundary = targetBoundingBox.top - overBoundingBox.height;
        secondDimEndBoundary = targetBoundingBox.top + targetBoundingBox.height;
      }

      var secondDimSkippedValue = (0, _skipBoundary2.default)({
        val: yAxisFirst ? clampedLeft : clampedTop,
        boundaryStart: secondDimStartBoundary,
        boundaryEnd: secondDimEndBoundary,
        goHigher: (0, _getGoHigherFromRotatedCoordinates2.default)(transformedCoordinates)
      });

      if (yAxisFirst) {
        left = secondDimSkippedValue;
      } else {
        top = secondDimSkippedValue;
      }
    } else {
      if (yAxisFirst) {
        left = clampedLeft;
      } else {
        top = clampedTop;
      }
    }
  }

  if (position === 'bottom') {
    var _topPos = targetBoundingBox.top + targetBoundingBox.height;
    var topEndPos = _topPos + overBoundingBox.height;
    var _pointerTop = 0;
    var _pointerLeft = overBoundingBox.width / 2;
    var _pointerRotation = 180;

    if (topEndPos > window.scrollY + window.innerHeight) {
      _topPos = targetBoundingBox.top - overBoundingBox.height;
      _pointerTop = overBoundingBox.height;
      _pointerRotation = 0;
    }

    return {
      top: top,
      left: left,
      pointerTop: _pointerTop,
      pointerLeft: _pointerLeft,
      pointerRotation: _pointerRotation
    };
  }

  if (position === 'right') {
    var leftPos = targetBoundingBox.left + targetBoundingBox.width;
    var leftEndPos = leftPos + overBoundingBox.width;
    var _pointerTop2 = overBoundingBox.height / 2;
    var _pointerLeft2 = 0;
    var _pointerRotation2 = 90;

    if (leftEndPos > window.innerWidth) {
      leftPos = targetBoundingBox.left - overBoundingBox.width;
      _pointerLeft2 = overBoundingBox.width;
      _pointerRotation2 = -90;
    }

    return {
      top: top,
      left: left,
      pointerLeft: _pointerLeft2,
      pointerTop: _pointerTop2,
      pointerRotation: _pointerRotation2
    };
  }

  if (position === 'left') {
    var _leftPos = targetBoundingBox.left - overBoundingBox.width;
    var _pointerTop3 = overBoundingBox.height / 2;
    var _pointerLeft3 = overBoundingBox.width;
    var _pointerRotation3 = -90;

    if (_leftPos < 0) {
      _leftPos = targetBoundingBox.left + targetBoundingBox.width;
      _pointerLeft3 = 0;
      _pointerRotation3 = 90;
    }

    return {
      top: top,
      left: left,
      pointerTop: _pointerTop3,
      pointerLeft: _pointerLeft3,
      pointerRotation: _pointerRotation3
    };
  }

  if (position === 'center') {
    return {
      top: top,
      left: left,
      pointerOpacity: 0
    };
  }

  var topPos = targetBoundingBox.top - overBoundingBox.height;
  var pointerTop = overBoundingBox.height;
  var pointerLeft = overBoundingBox.width / 2;
  var pointerRotation = 0;

  if (topPos < window.scrollY) {
    topPos = targetBoundingBox.top + targetBoundingBox.height;
    pointerTop = 0;
    pointerRotation = 180;
  }

  return {
    top: top,
    left: left,
    pointerTop: pointerTop,
    pointerLeft: pointerLeft,
    pointerRotation: pointerRotation,
    relativeAnchorPoint: relativeAnchorPoint,
    absoluteAnchorPoint: absoluteAnchorPoint
  };
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = rotateCoordinateSystem;
var rotationSin = Math.sin(Math.PI / 4);
var rotationCos = Math.cos(Math.PI / 4);

// This applies two rotations:
//
// First, a circular rotation by 45 degrees
// Then, a hyperbolic rotation
// Lastly, a reflection about the x axis
//
// This is to simplify the calculation of the default origin
function rotateCoordinateSystem(_ref) {
  var position = _ref.position,
      boundingBox = _ref.boundingBox;

  var absoluteX = position.left;
  var absoluteY = position.top;

  var xOffset = boundingBox.width / 2;
  var yOffset = boundingBox.height / 2;

  // Relative coordinates treat the `boundingBox` origin as "center".
  // This centers our coordinate system on the center of the bounding box.
  var relativeX = absoluteX - xOffset;
  var relativeY = absoluteY - yOffset;

  // Rotate the system by 45 degrees...
  var xPrime = relativeX * rotationCos - relativeY * rotationSin;
  var yPrime = relativeX * rotationSin + relativeY * rotationCos;

  // Now we apply our squeeze map. There may be a more succinct way to do this
  // using a hyperbolic rotation matrix, but I am not clever enough to come up
  // with that, so I made up this solution.
  var area = boundingBox.height * boundingBox.width;
  var squeezeFactor = Math.sqrt(area);
  var squeezeFactorX = boundingBox.width / squeezeFactor;
  var squeezeFactorY = boundingBox.height / squeezeFactor;

  var squeezedXPrime = xPrime / squeezeFactorX;
  var squeezedYPrime = yPrime / squeezeFactorY;

  return {
    // We fix the numbers to get rid of precision errors
    x: Number(squeezedXPrime.toFixed(2)),
    y: -Number(squeezedYPrime.toFixed(2))
  };
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'top-left': [0, 0],
  top: [0.5, 0],
  'top-right': [1, 0],
  left: [0, 0.5],
  center: [0.5, 0.5],
  right: [1, 0.5],
  'bottom-left': [0, 1],
  bottom: [0.5, 1],
  'bottom-right': [1, 1]
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = computePixelCoordinates;
function computePixelCoordinates(_ref) {
  var coordinates = _ref.coordinates,
      boundingBox = _ref.boundingBox;

  var left = void 0,
      top = void 0;

  var x = coordinates[0];
  var y = coordinates[1];

  if (typeof x === 'string') {
    var numericLeft = void 0;
    if (x.includes('px')) {
      numericLeft = Number(x.replace('px', ''));
    } else if (x.includes('%')) {
      numericLeft = Number(x.replace('%', '')) * boundingBox.width / 100;
    } else {
      numericLeft = Number(x);
    }

    left = Number.isNaN(numericLeft) ? 0 : numericLeft;
  } else if (typeof x === 'number') {
    left = Number.isNaN(x) ? 0 : x * boundingBox.width;
  }

  if (typeof y === 'string') {
    var numericTop = void 0;

    if (y.includes('px')) {
      numericTop = Number(y.replace('px', ''));
    } else if (y.includes('%')) {
      numericTop = Number(y.replace('%', '')) * boundingBox.height / 100;
    } else {
      numericTop = Number(y);
    }

    top = Number.isNaN(numericTop) ? 0 : numericTop;
  } else if (typeof y === 'number') {
    top = Number.isNaN(y) ? 0 : y * boundingBox.height;
  }

  return {
    left: left,
    top: top
  };
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDefaultOriginFromRotatedCoordinates;
function getDefaultOriginFromRotatedCoordinates(_ref) {
  var x = _ref.x,
      y = _ref.y;

  if (x > 0 && y > 0) {
    return 'bottom';
  } else if (x < 0 && y > 0) {
    return 'right';
  } else if (x < 0 && y < 0) {
    return 'top';
  } else if (x > 0 && y < 0) {
    return 'left';
  } else if (x > 0 && y === 0) {
    return 'top-left';
  } else if (x < 0 && y === 0) {
    return 'top-left';
  } else if (x === 0 && y > 0) {
    return 'top-right';
  } else if (x === 0 && y < 0) {
    return 'top-right';
  } else if (x === 0 && y === 0) {
    return 'center';
  }

  // I don't think this will ever happen, but just in case.
  return 'top-left';
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFirstResolutionAxisFromRotatedCoordinates;
function getFirstResolutionAxisFromRotatedCoordinates(_ref) {
  var x = _ref.x,
      y = _ref.y;

  if (x > 0 && y > 0) {
    return 'y';
  } else if (x < 0 && y > 0) {
    return 'x';
  } else if (x < 0 && y < 0) {
    return 'y';
  } else if (x > 0 && y < 0) {
    return 'x';
  } else if (x > 0 && y === 0) {
    return 'y';
  } else if (x < 0 && y === 0) {
    return 'y';
  } else if (x === 0 && y > 0) {
    return 'y';
  } else if (x === 0 && y < 0) {
    return 'y';
  } else if (x === 0 && y === 0) {
    return 'y';
  }

  // I don't think this will ever happen, but just in case.
  return 'x';
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getGoHigherFromRotatedCoordinates;
function getGoHigherFromRotatedCoordinates(_ref) {
  var x = _ref.x,
      y = _ref.y;

  if (x > 0 && y > 0) {
    return true;
  } else if (x < 0 && y > 0) {
    return true;
  } else if (x < 0 && y < 0) {
    return false;
  } else if (x > 0 && y < 0) {
    return false;
  }

  // We do not specify specific values for 5 out of 9 conditions: the 4 axes and the center.
  // This is because we do not think that it matters whether they are true or false.
  // Accordingly, we just return true to keep things simple. If you run into an edge case,
  // let us know and we can revisit this decision.
  return true;
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = skipBoundary;
function skipBoundary(_ref) {
  var val = _ref.val,
      boundaryStart = _ref.boundaryStart,
      boundaryEnd = _ref.boundaryEnd,
      _ref$goHigher = _ref.goHigher,
      goHigher = _ref$goHigher === undefined ? true : _ref$goHigher;

  var isBetween = val > boundaryStart && val < boundaryEnd;

  if (isBetween) {
    return goHigher ? boundaryEnd : boundaryStart;
  } else {
    return val;
  }
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = clamp;
function clamp(min, val, max) {
  return Math.min(Math.max(min, val), max);
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dimensionsOverlap;
function dimensionsOverlap(_ref) {
  var leftOne = _ref.leftOne,
      rightOne = _ref.rightOne,
      leftTwo = _ref.leftTwo,
      rightTwo = _ref.rightTwo;

  var overlap = rightOne > leftTwo && rightTwo > leftOne;

  return overlap;
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getStyles;

var _identification = __webpack_require__(82);

function getStyles(_ref) {
  var top = _ref.top,
      left = _ref.left,
      pointerTop = _ref.pointerTop,
      pointerLeft = _ref.pointerLeft,
      pointerRotation = _ref.pointerRotation,
      pointerOpacity = _ref.pointerOpacity;

  var style = {};

  if ((0, _identification.exists)(top)) {
    style.top = top + 'px';
  }

  if ((0, _identification.exists)(left)) {
    style.left = left + 'px';
  }

  if ((0, _identification.exists)(pointerTop)) {
    style['--pointer-top'] = pointerTop + 'px';
  }

  if ((0, _identification.exists)(pointerLeft)) {
    style['--pointer-left'] = pointerLeft + 'px';
  }

  if ((0, _identification.exists)(pointerRotation)) {
    style['--pointer-rotation'] = pointerRotation + 'deg';
  }

  if ((0, _identification.exists)(pointerOpacity)) {
    style['--pointer-opacity'] = pointerOpacity;
  }

  return style;
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exists = exists;
function exists(val) {
  return typeof val !== 'undefined';
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = simpleShallowEquals;
function simpleShallowEquals(a, b) {
  // Handle exact object matches and primitives
  if (a === b) {
    return true;
  }

  // When either value are null, then a strict equals comparison will return
  // the expected value.
  if (a === null || b === null) {
    return a === b;
  }

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);

  // If they are both objects, then they must have the same
  // number of keys. Otherwise, they can't be shallowly equal!
  if (aKeys.length !== bKeys.length) {
    return false;
  }

  for (var prop in b) {
    if (a[prop] !== b[prop]) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isValidTriggerElement;
// Trigger elements need to be regular nodes like <div> or <p>.
function isValidTriggerElement(element) {
  return element && (element.nodeType === 1 || element === window);
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateOverConfig;

var _warning = __webpack_require__(9);

function validateOverConfig(config) {
  // The config object itself is required.
  if (!config) {
    if (false) {
      (0, _warning.warning)('You attempted to open an Over Element without passing a config.' + ' The config argument is required.', 'MISSING_CONFIG');
    }

    return false;
  }

  // Configs must have an ID.
  if (typeof config.id !== 'string' && typeof config.id !== 'number') {
    if (false) {
      (0, _warning.warning)('You attempted to open an Over Element with an invalid config.id.' + ' The ID must be a string or a number.', 'INVALID_CONFIG_ID');
    }

    return false;
  }

  return true;
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var morph = exports.morph = function morph(time) {
  return {
    componentWillEnter: function componentWillEnter(_ref) {
      var done = _ref.done,
          overEl = _ref.overEl,
          triggerEl = _ref.triggerEl,
          targetEl = _ref.targetEl,
          positionObj = _ref.positionObj;

      var bb = triggerEl.getBoundingClientRect();
      var mybb = overEl.getBoundingClientRect();

      overEl.style.pointerEvents = 'none';
      overEl.style.opacity = 0;
      overEl.style.transition = 'none';
      overEl.style.transformOrigin = 'top left';

      overEl.style.transform = ['translate3d(calc(' + (bb.x - mybb.x) + 'px), ' + (bb.y - mybb.y) + 'px, 0)', 'scale(' + bb.width / mybb.width + ', ' + bb.height / mybb.height + ')'].join(' ');

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          overEl.style.transition = 'opacity ' + time + 'ms cubic-bezier(0.175, 0.885, 0.32, 1), transform ' + time + 'ms cubic-bezier(0.175, 0.885, 0.32, 1)';
          overEl.style.opacity = 1;
          overEl.style.transform = 'none';
          setTimeout(function () {
            overEl.style.pointerEvents = 'all';
            done();
          }, time);
        });
      });
    },
    componentWillLeave: function componentWillLeave(_ref2) {
      var done = _ref2.done,
          overEl = _ref2.overEl,
          triggerEl = _ref2.triggerEl,
          targetEl = _ref2.targetEl,
          positionObj = _ref2.positionObj;

      var bb = triggerEl.getBoundingClientRect();
      var mybb = overEl.getBoundingClientRect();

      overEl.style.transition = 'opacity ' + time + 'ms cubic-bezier(0.375, 0.685, 0.32, 1), transform ' + time + 'ms cubic-bezier(0.375, 0.685, 0.32, 1)';

      requestAnimationFrame(function () {
        overEl.style.opacity = 0;
        overEl.style.transformOrigin = 'top left';

        overEl.style.transform = ['translate3d(calc(' + (bb.x - mybb.x) + 'px), ' + (bb.y - mybb.y) + 'px, 0)', 'scale(' + bb.width / mybb.width + ', ' + bb.height / mybb.height + ')'].join(' ');

        setTimeout(function () {
          done();
        }, time);
      });
    }
  };
};

var expand = exports.expand = function expand(time) {
  return {
    componentWillEnter: function componentWillEnter(_ref3) {
      var done = _ref3.done,
          overEl = _ref3.overEl,
          triggerEl = _ref3.triggerEl,
          targetEl = _ref3.targetEl,
          positionObj = _ref3.positionObj;

      overEl.style.pointerEvents = 'none';
      overEl.style.opacity = 0;
      overEl.style.transition = 'none';
      // This needs to be the anchor point relative to the node itself
      overEl.style.transformOrigin = 'top right';
      overEl.style.transform = 'scale(0)';

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          overEl.style.transition = 'opacity ' + time + 'ms cubic-bezier(0.175, 0.885, 0.32, 1.275), transform ' + time + 'ms cubic-bezier(0.175, 0.885, 0.32, 1.275)';
          overEl.style.opacity = 1;
          overEl.style.transform = 'none';
          setTimeout(function () {
            overEl.style.pointerEvents = 'all';
            done();
          }, time);
        });
      });
    },
    componentWillLeave: function componentWillLeave(_ref4) {
      var done = _ref4.done,
          overEl = _ref4.overEl,
          triggerEl = _ref4.triggerEl,
          targetEl = _ref4.targetEl,
          positionObj = _ref4.positionObj;

      overEl.style.transition = 'opacity ' + time + 'ms cubic-bezier(0.6, -0.28, 0.735, 0.045), transform ' + time + 'ms cubic-bezier(0.6, -0.28, 0.735, 0.045)';

      requestAnimationFrame(function () {
        overEl.style.opacity = 0;
        overEl.style.transformOrigin = 'top right';
        overEl.style.transform = 'scale(0)';

        setTimeout(function () {
          done();
        }, time);
      });
    }
  };
};

var fadeIn = exports.fadeIn = function fadeIn(time) {
  return {
    componentWillEnter: function componentWillEnter(_ref5) {
      var done = _ref5.done,
          overEl = _ref5.overEl,
          triggerEl = _ref5.triggerEl,
          targetEl = _ref5.targetEl,
          positionObj = _ref5.positionObj;

      overEl.style.opacity = 0;

      requestAnimationFrame(function () {
        requestAnimationFrame(function () {
          overEl.style.transition = 'opacity ' + time + 'ms ease-out';
          overEl.style.opacity = 1;
          done();
        });
      });
    },
    componentWillLeave: function componentWillLeave(_ref6) {
      var done = _ref6.done,
          overEl = _ref6.overEl;

      overEl.style.transition = 'opacity ' + time + 'ms ease-in';
      overEl.style.opacity = 0;
      setTimeout(done, time);
    }
  };
};

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".iconsCatalog_searchInput{--mt-input-focusBorderColor:var(--mainColor);margin-bottom:10px}.iconsCatalog_searchInput .mt-input{width:22rem}.iconsCatalog_primaryHeader{margin-bottom:0}.iconsCatalog_heading{position:-webkit-sticky;position:sticky;z-index:1;top:var(--headerHeight);background:#fff;padding:40px 0;border-bottom:1px solid #ddd}.iconsCatalog_count{margin-bottom:0}.iconsCatalog_icon{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;z-index:0;position:relative;border-radius:5px;padding:15px;cursor:pointer;border:1px solid transparent;-webkit-transition:-webkit-box-shadow .2s;transition:-webkit-box-shadow .2s;-o-transition:box-shadow .2s;transition:box-shadow .2s;transition:box-shadow .2s,-webkit-box-shadow .2s}.iconsCatalog_icon:hover{-webkit-box-shadow:0 1px 3px rgba(0,0,0,.25);box-shadow:0 1px 3px rgba(0,0,0,.25)}.iconsCatalog_icon>svg,.iconsCatalog_iconDetails>svg{margin-bottom:10px}.iconsCatalog_iconList{display:grid;grid-column-gap:20px;grid-row-gap:50px;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));padding:0 5px}.iconsCatalog_iconClass{display:block;text-align:center;width:100%;font-size:.75rem;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.iconsCatalog_category{border-bottom:1px solid #ddd;padding-bottom:50px;margin-bottom:50px}.iconsCatalog_category:first-child{padding-top:40px}.iconsCategory_categoryHeader{color:var(--mainColor);font-size:1rem;font-weight:500}.iconsCatalog_iconDetails{background:#fff;border-radius:3px;min-width:400px;padding:15px;text-align:center;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center}.iconsCatalog_detailsImport{margin-top:15px;background-color:#fafafa;border-radius:3px}.iconsCatalog_importStatement{font-size:.85rem;padding:10px 8px}.iconsCatalog_copyImportBtn{display:inline-block;border:1px solid transparent;border-radius:0 3px 3px 0;background-color:transparent;border-left:1px solid #eee;fill:var(--mainColor);padding:10px 8px;width:40px;outline:none}.iconsCatalog_copyImportBtn:hover{background-color:#efedfb}.iconsCatalog_copyImportBtn.focus-visible{border:1px solid var(--mainColor)}.iconsCatalog_iconDetailsName{font-size:1.2rem;font-weight:500}@media (max-width:650px){.iconsCatalog_searchInput,.iconsCatalog_searchInput .mt-input{width:100%}.iconsCatalog_count{text-align:center}.iconsCatalog_heading{padding:20px 0}}", ""]);

// exports


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".components_list{margin-top:30px}.components_listItem{margin-bottom:15px}", ""]);

// exports


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".componentDoc{--mt-navigation-backgroundColor:transparent;--mt-navigation-textColor:#757575;--mt-navigation-activeIndicatorColor:var(--mainColor)}.componentDoc_links{margin:40px 0 0;padding:0;margin-bottom:25px;list-style:none}.primaryHeader.componentDoc_primaryHeader{margin-bottom:20px}.componentDoc_linkItem{margin-bottom:18px}.componentDoc_linkAnchor{font-size:1.05rem;font-weight:500;text-decoration:none;color:#333}.componentDoc_linkAnchor:hover{text-decoration:underline}.componentDoc_icon{display:inline-block;margin-right:10px}.componentDoc .mt-navigation{border-bottom:1px solid #ddd}.componentDoc_noteEmoji{font-size:1.2rem;top:-4px;margin-right:5px}.componentDoc_note{margin:0;padding:10px;font-size:.9rem;font-weight:500;background-color:#314048;color:#9ec4d8}.componentDoc_noteContent{border-radius:4px;background-color:#3f576d;margin:3px;padding:5px 15px}.componentDoc_noteContent,.componentDoc_preview{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.componentDoc_preview{-ms-flex-pack:center;justify-content:center;min-height:150px;padding:50px;border-style:solid;border-width:1px 1px 0;border-color:#e7e7e7;background-color:#f7f7f7;border-radius:5px 5px 0 0;margin-top:30px}.componentDoc_editor .CodeMirror{min-height:var(--editorHeight,300px)}.componentDoc_componentsTable{margin-top:30px}.componentDoc_componentsTable .mt-table_row:hover:after{opacity:0}.componentDoc_errorMsg{margin:0;padding:20px;font-size:1rem;background-color:#bd3f3f;color:#fff;border-radius:0 0 5px 5px}", ""]);

// exports


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".textFields_exampleField .mt-input,.textFields_exampleInput .mt-input{width:230px;min-width:230px}", ""]);

// exports


/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("materialish/icon-add-alert");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("materialish/icon-business");

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = require("materialish/icon-phone-iphone");

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = require("materialish/icon-email");

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = require("history");

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".app_bodyContents{--bodyPadding:40px;width:calc(100% - var(--navWidth));min-height:calc(100vh - var(--headerHeight));margin:var(--headerHeight) 0 0 var(--navWidth);padding:var(--appTopPadding) var(--bodyPadding) 0;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.app_bodyContents>*{width:100%;max-width:calc(var(--maxAppWidth) - var(--navWidth));margin:0 auto;-ms-flex:1 1;flex:1 1}.app_bodyContents>:first-child{margin-bottom:100px}.app_bodyContents>.editorialPage:first-child{max-width:650px}@media (max-width:1000px){.app_bodyContents{--bodyPadding:20px;margin-left:0;width:100%}.app_bodyContents>*{width:100%;max-width:none;margin:0}}", ""]);

// exports


/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactStatic = __webpack_require__(2);

__webpack_require__(99);

var _materialishLogo = __webpack_require__(100);

var _materialishLogo2 = _interopRequireDefault(_materialishLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      menuOpen: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var onToggleMenu = this.props.onToggleMenu;


      return _react2.default.createElement(
        'header',
        { className: 'header' },
        _react2.default.createElement('i', { className: 'zmdi zmdi-menu header_navToggle', onClick: onToggleMenu }),
        _react2.default.createElement(
          _reactStatic.Link,
          { to: '/', tabIndex: '-1', className: 'header_logoLink' },
          _react2.default.createElement('img', { src: _materialishLogo2.default, className: 'materialishLogo' })
        ),
        _react2.default.createElement(
          'h1',
          { className: 'header_appName' },
          _react2.default.createElement(
            _reactStatic.Link,
            { to: '/', className: 'header_appLink' },
            'Materialish'
          )
        ),
        _react2.default.createElement(
          'a',
          {
            href: 'https://github.com/jamesplease/materialish',
            className: 'header_githubLink' },
          _react2.default.createElement('i', { className: 'zmdi zmdi-github' })
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".header{background-color:var(--mainColor);height:var(--headerHeight);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:100%;padding:0 var(--standardContentPadding);position:fixed;top:0;z-index:1500}.header_appName{margin:0;padding:0;font-size:1.2rem;-webkit-font-smoothing:antialiased}.header_appLink,.header_logoLink{outline:none}.header_appLink{color:#fff;text-decoration:none;font-weight:400;border-radius:3px;border:1px solid transparent;padding:3px 5px}.header_appLink.focus-visible{background-color:hsla(0,0%,100%,.25)}.materialishLogo{width:33px;position:relative;margin-right:5px}.header .header_navToggle{color:#fff;margin-right:15px;font-size:1.2rem;display:none}.header_githubLink{margin-left:auto;font-size:1.5rem;color:#fff;width:34px;text-align:center;padding:3px 5px;border-radius:3px;outline:none}.header_githubLink.focus-visible{background-color:hsla(0,0%,100%,.25)}@media (max-width:1000px){.header .header_navToggle{display:block}}", ""]);

// exports


/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDYiIGhlaWdodD0iMjkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjRkZGIiBzdHJva2Utd2lkdGg9IjEuNDUiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTI4LjY0IDJsMTUuMzY0IDI1LjY2NGgtMzAuNzN6Ii8+PHBhdGggZD0iTTE2LjY0IDJsMTUuMzY0IDI1LjY2NEgxLjI3NHoiLz48L2c+PC9zdmc+"

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Nav = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(102);

var _classnames2 = _interopRequireDefault(_classnames);

var _lodash = __webpack_require__(7);

var _lodash2 = _interopRequireDefault(_lodash);

var _reactStatic = __webpack_require__(2);

var _materialish = __webpack_require__(3);

var _iconKeyboardArrowRight = __webpack_require__(103);

var _iconKeyboardArrowRight2 = _interopRequireDefault(_iconKeyboardArrowRight);

var _overlay = __webpack_require__(104);

var _overlay2 = _interopRequireDefault(_overlay);

__webpack_require__(106);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Nav = exports.Nav = function (_Component) {
  _inherits(Nav, _Component);

  _createClass(Nav, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          components = _props.components,
          isMenuOpen = _props.isMenuOpen,
          onToggleMenu = _props.onToggleMenu;
      var openStates = this.state.openStates;

      // This ensures that the components appear in the navigation in
      // alphabetical order

      var sortedComponentsData = Array.from(components).sort(function (a, b) {
        if (a.componentKey === b.componentKey) {
          return 0;
        }

        return a.componentKey < b.componentKey ? -1 : 1;
      });

      var navClassnames = (0, _classnames2.default)('nav', {
        'nav-open': isMenuOpen
      });

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'nav',
          { className: navClassnames },
          _react2.default.createElement(
            'ul',
            { className: 'nav_navList' },
            _react2.default.createElement(
              'li',
              { className: 'nav_navListItem' },
              _react2.default.createElement(
                _reactStatic.Link,
                {
                  exact: true,
                  to: '/',
                  className: 'nav_navSectionLink',
                  onClick: this.onNavigate },
                'Introduction'
              ),
              _react2.default.createElement(
                'ul',
                { className: 'nav_navSubList' },
                _react2.default.createElement(
                  'li',
                  { className: 'nav_navSubListItem' },
                  _react2.default.createElement(
                    _reactStatic.Link,
                    {
                      exact: true,
                      to: '/philosophy',
                      className: 'nav_navLink',
                      onClick: this.onNavigate },
                    'Philosophy'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav_navSubListItem' },
                  _react2.default.createElement(
                    _reactStatic.Link,
                    {
                      exact: true,
                      to: '/alternatives',
                      className: 'nav_navLink',
                      onClick: this.onNavigate },
                    'Alternatives'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'nav_navListItem' },
              _react2.default.createElement(
                _reactStatic.Link,
                {
                  exact: true,
                  to: '/icons',
                  className: 'nav_navSectionLink',
                  onClick: this.onNavigate },
                'Icons'
              ),
              _react2.default.createElement(
                'ul',
                { className: 'nav_navSubList' },
                _react2.default.createElement(
                  'li',
                  { className: 'nav_navSubListItem' },
                  _react2.default.createElement(
                    _reactStatic.Link,
                    {
                      exact: true,
                      to: '/icons/usage',
                      className: 'nav_navLink',
                      onClick: this.onNavigate },
                    'Usage'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { className: 'nav_navSubListItem' },
                  _react2.default.createElement(
                    _reactStatic.Link,
                    {
                      exact: true,
                      to: '/icons/catalog',
                      className: 'nav_navLink',
                      onClick: this.onNavigate },
                    'Catalog'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'nav_navListItem' },
              _react2.default.createElement(
                _reactStatic.Link,
                {
                  exact: true,
                  to: '/components',
                  className: 'nav_navSectionLink',
                  onClick: this.onNavigate },
                'Components'
              ),
              _react2.default.createElement(
                'ul',
                { className: 'nav_navSubList' },
                sortedComponentsData.map(function (component) {
                  var hasChildren = Boolean(_lodash2.default.size(component.children));
                  var isOpen = Boolean(openStates[component.componentKey]);

                  var arrowClassnames = (0, _classnames2.default)('nav_expandIcon', {
                    'nav_expandIcon-open': isOpen
                  });

                  return _react2.default.createElement(
                    'li',
                    { className: 'nav_navSubListItem', key: component.name },
                    _react2.default.createElement(
                      _reactStatic.Link,
                      {
                        exact: true,
                        to: '/components/' + component.url,
                        className: 'nav_navLink',
                        onClick: function onClick() {
                          _this2.onNavigate();

                          _this2.setState({
                            openStates: _extends({}, openStates, _defineProperty({}, component.componentKey, true))
                          });
                        } },
                      component.name,
                      hasChildren && _react2.default.createElement(_iconKeyboardArrowRight2.default, {
                        tabIndex: '0',
                        className: arrowClassnames,
                        fill: '#888',
                        size: '28px',
                        onKeyPress: function onKeyPress(e) {
                          if (e.key === 'Enter') {
                            e.preventDefault();
                            e.stopPropagation();

                            _this2.setState({
                              openStates: _extends({}, openStates, _defineProperty({}, component.componentKey, !isOpen))
                            });
                          }
                        },
                        onClick: function onClick(e) {
                          e.stopPropagation();
                          e.preventDefault();

                          _this2.setState({
                            openStates: _extends({}, openStates, _defineProperty({}, component.componentKey, !isOpen))
                          });
                        }
                      })
                    ),
                    hasChildren && _react2.default.createElement(
                      _materialish.Expandable,
                      { open: isOpen, durationMs: '200' },
                      _react2.default.createElement(
                        'ul',
                        null,
                        component.children.map(function (childComponent) {
                          return _react2.default.createElement(
                            'li',
                            {
                              key: childComponent.name,
                              className: 'nav_navSubListItem' },
                            _react2.default.createElement(
                              _reactStatic.Link,
                              {
                                tabIndex: isOpen ? 0 : -1,
                                exact: true,
                                to: '/components/' + childComponent.url,
                                className: 'nav_navSubLink',
                                onClick: _this2.onNavigate },
                              childComponent.name
                            )
                          );
                        })
                      )
                    )
                  );
                })
              )
            )
          )
        ),
        _react2.default.createElement(_overlay2.default, { active: isMenuOpen, onClick: onToggleMenu })
      );
    }
  }]);

  function Nav(props) {
    _classCallCheck(this, Nav);

    var _this = _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));

    _this.onNavigate = function () {
      var _this$props = _this.props,
          isMenuOpen = _this$props.isMenuOpen,
          onToggleMenu = _this$props.onToggleMenu;


      if (isMenuOpen) {
        onToggleMenu();
      }
    };

    var componentToOpen = props.parentComponent ? props.parentComponent : props.component;

    var openStates = {};

    if (componentToOpen) {
      openStates[componentToOpen.componentKey] = true;
    }

    _this.state = {
      openStates: openStates
    };
    return _this;
  }

  return Nav;
}(_react.Component);

exports.default = (0, _reactStatic.withSiteData)((0, _reactStatic.withRouteData)(Nav));

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = require("materialish/icon-keyboard-arrow-right");

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(105);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Overlay = function (_Component) {
  _inherits(Overlay, _Component);

  function Overlay() {
    _classCallCheck(this, Overlay);

    return _possibleConstructorReturn(this, (Overlay.__proto__ || Object.getPrototypeOf(Overlay)).apply(this, arguments));
  }

  _createClass(Overlay, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          onClick = _props.onClick;

      return _react2.default.createElement('div', {
        className: 'overlay ' + (active ? 'overlay-active' : ''),
        onClick: onClick
      });
    }
  }]);

  return Overlay;
}(_react.Component);

exports.default = Overlay;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".overlay{position:fixed;top:0;left:0;bottom:0;right:0;background:#000;opacity:0;pointer-events:none;-webkit-transition:opacity .2s ease-in-out;-o-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out;will-change:opacity;z-index:1000}.overlay-active{opacity:.65;pointer-events:all}", ""]);

// exports


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".nav{width:var(--navWidth);display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;min-height:calc(100% - var(--headerHeight));padding:var(--appTopPadding) 0;border-right:1px solid #e1dfe6;position:fixed;left:0;top:var(--headerHeight);height:calc(100% - var(--headerHeight));overflow-y:scroll;overscroll-behavior:contain;-webkit-overflow-scrolling:touch;background:#fff}.nav_navList,.nav_navSubList{list-style:none;margin:0;padding:0}.nav_navListItem{margin-bottom:15px}.nav_navListItem:last-child{margin-bottom:50px}.nav_navList{width:var(--navWidth);margin:0;padding:0}.nav_navLink,.nav_navSectionLink,.nav_navSubLink{outline:none;color:#222;text-decoration:none}.nav_navSectionLink{font-size:1.15rem;font-weight:400;padding:13px var(--standardContentPadding);-webkit-font-smoothing:antialiased;display:block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;position:relative}.nav_navLink:after,.nav_navSectionLink:after,.nav_navSubLink:after{content:\"\";display:block;top:0;left:0;right:0;bottom:0;position:absolute;z-index:-1;background:#f5f5f5;opacity:0;will-change:opacity;-webkit-transition:opacity .1s ease-in-out;-o-transition:opacity .1s ease-in-out;transition:opacity .1s ease-in-out}.nav_navLink.active:after,.nav_navLink:focus:after,.nav_navLink:hover:after,.nav_navSectionLink.active:after,.nav_navSectionLink:focus:after,.nav_navSectionLink:hover:after,.nav_navSubLink.active:after,.nav_navSubLink:focus:after,.nav_navSubLink:hover:after{opacity:1}.nav_navLink,.nav_navSubLink{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:.9rem;height:43px;padding:6px var(--standardContentPadding) 6px calc(var(--standardContentPadding) + 25px);-webkit-font-smoothing:antialiased;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#616161;position:relative}.nav_navSubLink{padding-left:calc(var(--standardContentPadding) + 45px)}.nav_expandIcon{will-change:transform;-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;-o-transition:transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s;margin-left:auto;padding:6px;cursor:pointer;border-radius:100%;outline:none}.nav_expandIcon.focus-visible,.nav_expandIcon:hover{background-color:rgba(0,0,0,.07)}.nav_expandIcon-open{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg)}@media (max-width:1000px){.nav{-webkit-transform:translateX(-100%);-ms-transform:translateX(-100%);transform:translateX(-100%);will-change:transform;-webkit-transition:-webkit-transform .25s cubic-bezier(.215,.61,.355,1);transition:-webkit-transform .25s cubic-bezier(.215,.61,.355,1);-o-transition:transform .25s cubic-bezier(.215,.61,.355,1);transition:transform .25s cubic-bezier(.215,.61,.355,1);transition:transform .25s cubic-bezier(.215,.61,.355,1),-webkit-transform .25s cubic-bezier(.215,.61,.355,1);z-index:4000}.nav-open{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}}@media (max-width:650px){.nav_navSectionLink{font-size:1.15rem}.nav_navLink,.nav_navSubLink{font-size:1rem}}", ""]);

// exports


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(108);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'footer',
        { className: 'footer' },
        _react2.default.createElement(
          'span',
          { className: 'footer_licenseText' },
          'Materialish is licensed under the',
          ' ',
          _react2.default.createElement(
            'a',
            {
              href: 'https://github.com/jamesplease/materialish/blob/master/LICENSE',
              className: 'footer_licenseLink' },
            'MIT License'
          ),
          '.'
        ),
        _react2.default.createElement(
          'span',
          { className: 'footer_licenseTextShort' },
          _react2.default.createElement('i', { className: 'zmdi zmdi-globe footer_icon' }),
          _react2.default.createElement(
            'a',
            {
              href: 'https://github.com/jamesplease/materialish/blob/master/LICENSE',
              className: 'footer_licenseLink footer_licenseLink-short' },
            'MIT License'
          )
        ),
        _react2.default.createElement(
          'a',
          {
            className: 'footer_githubLink',
            href: 'https://github.com/jamesplease/materialish' },
          _react2.default.createElement('i', { className: 'zmdi zmdi-github footer_icon' }),
          ' ',
          _react2.default.createElement(
            'span',
            { className: 'footer_githubLinkText' },
            'View Project on GitHub'
          )
        )
      );
    }
  }]);

  return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, ".footer{margin-top:auto;-ms-flex:0 0 80px;flex:0 0 80px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;border-top:1px solid #e1dfe7;color:#999;font-size:.85rem}.footer_licenseIcon{display:inline-block;margin:0 3px 0 6px}.footer_licenseLink{outline:none;padding:3px 5px}.footer_licenseLink.focus-visible{background-color:#f0f5ff}.footer_licenseLink-short{color:inherit}.footer_githubLink{margin-left:auto;color:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;outline:none;border-radius:3px;padding:3px 5px}.footer_githubLink.focus-visible{color:var(--mainColor);background-color:#f0f5ff}.footer_icon{font-size:1.3rem;margin-right:5px}.footer_licenseTextShort{display:none}@media (max-width:650px){.footer_licenseText{display:none}.footer_licenseTextShort{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}}", ""]);

// exports


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = historyWithQuery;
// This code is from the qhistory library:
// https://github.com/pshrmn/qhistory
// It didn't seem like big enough code to justify a new dep

/* eslint-disable */

function historyWithQuery(history, stringify, parse) {
  var addSearch = function addSearch(location) {
    if ((typeof location === 'undefined' ? 'undefined' : _typeof(location)) === 'object') {
      location.search = location.query ? stringify(location.query) : location.search || '';
    }
  };

  var addQuery = function addQuery(location) {
    var search = location.search;

    if (search) {
      location.query = parse(search.charAt(0) === '?' ? search.substring(1) : search);
    } else {
      location.query = {};
    }
  };

  var updateProperties = function updateProperties(history, queryHistory) {
    var properties = ['location', 'length', 'entries', 'index', 'action'];
    properties.forEach(function (prop) {
      if (history.hasOwnProperty(prop)) {
        queryHistory[prop] = history[prop];
      }
    });
  };

  // make sure that the initial location has query support
  addQuery(history.location);

  var queryHistory = _extends({}, history, {
    push: function push(location, state) {
      addSearch(location);
      history.push(location, state);
    },
    replace: function replace(location, state) {
      addSearch(location);
      history.replace(location, state);
    },
    createHref: function createHref(location) {
      addSearch(location);
      return history.createHref(location);
    }
  });

  // This relies on being the first listener called by
  // the actual history instance. If you register a
  // listener on the history instance before modifying
  // it with qhistory, the location object will not have
  // the query property set on it when that listener
  // is called.
  history.listen(function (location) {
    addQuery(location);
    updateProperties(history, queryHistory);
  });

  return queryHistory;
}

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.a2668e07.js.map