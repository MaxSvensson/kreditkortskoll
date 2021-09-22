self["webpackHotUpdate_N_E"]("main",{

/***/ "./node_modules/next/dist/client/index.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/index.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _slicedToArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");

var _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js?dbce1");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js?4ea41");

exports.__esModule = true;
exports.render = render;
exports.renderError = renderError;
exports.default = exports.emitter = exports.router = exports.version = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

__webpack_require__(/*! @next/polyfill-module */ "./node_modules/@next/polyfill-module/dist/polyfill-module.js");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js?ab5b1"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _headManagerContext = __webpack_require__(/*! ../next-server/lib/head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js?b0c91");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/mitt */ "./node_modules/next/dist/next-server/lib/mitt.js?1e601"));

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js?0b311");

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js?d6da1");

var _isDynamic = __webpack_require__(/*! ../next-server/lib/router/utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js?06621");

var querystring = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js?37861"));

var envConfig = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/runtime-config */ "./node_modules/next/dist/next-server/lib/runtime-config.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js?e6351");

var _portal = __webpack_require__(/*! ./portal */ "./node_modules/next/dist/client/portal/index.js");

var _headManager = _interopRequireDefault(__webpack_require__(/*! ./head-manager */ "./node_modules/next/dist/client/head-manager.js"));

var _pageLoader = _interopRequireDefault(__webpack_require__(/*! ./page-loader */ "./node_modules/next/dist/client/page-loader.js"));

var _performanceRelayer = _interopRequireDefault(__webpack_require__(/*! ./performance-relayer */ "./node_modules/next/dist/client/performance-relayer.js"));

var _routeAnnouncer = __webpack_require__(/*! ./route-announcer */ "./node_modules/next/dist/client/route-announcer.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js?8a641");
/* global location */


var data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
window.__NEXT_DATA__ = data;
var version = "10.2.3";
exports.version = version;

var looseToArray = function looseToArray(input) {
  return [].slice.call(input);
};

var hydrateProps = data.props,
    hydrateErr = data.err,
    page = data.page,
    query = data.query,
    buildId = data.buildId,
    assetPrefix = data.assetPrefix,
    runtimeConfig = data.runtimeConfig,
    dynamicIds = data.dynamicIds,
    isFallback = data.isFallback,
    locale = data.locale,
    locales = data.locales,
    domainLocales = data.domainLocales,
    isPreview = data.isPreview;
var defaultLocale = data.defaultLocale;
var prefix = assetPrefix || ''; // With dynamic assetPrefix it's no longer possible to set assetPrefix at the build time
// So, this is how we do it in the client side at runtime

__webpack_require__.p = "".concat(prefix, "/_next/"); //eslint-disable-line
// Initialize next/config with the environment configuration

envConfig.setConfig({
  serverRuntimeConfig: {},
  publicRuntimeConfig: runtimeConfig || {}
});
var asPath = (0, _utils.getURL)(); // make sure not to attempt stripping basePath for 404s

if ((0, _router.hasBasePath)(asPath)) {
  asPath = (0, _router.delBasePath)(asPath);
}

if (false) { var detectedDomain, localePathResult, parsedAs, _require4, formatUrl, _require3, parseRelativeUrl, _require2, detectDomainLocale, _require, normalizeLocalePath; }

if (false) { var _require5, initScriptLoader; }

var pageLoader = new _pageLoader["default"](buildId, prefix);

var register = function register(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      r = _ref2[0],
      f = _ref2[1];

  return pageLoader.routeLoader.onEntrypoint(r, f);
};

if (window.__NEXT_P) {
  // Defer page registration for another tick. This will increase the overall
  // latency in hydrating the page, but reduce the total blocking time.
  window.__NEXT_P.map(function (p) {
    return setTimeout(function () {
      return register(p);
    }, 0);
  });
}

window.__NEXT_P = [];
window.__NEXT_P.push = register;
var headManager = (0, _headManager["default"])();
var appElement = document.getElementById('__next');

var _lastRenderReject;

var webpackHMR;
var router;
exports.router = router;
var CachedApp, onPerfEntry;

var Container = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(Container, _react$default$Compon);

  var _super = _createSuper(Container);

  function Container() {
    _classCallCheck(this, Container);

    return _super.apply(this, arguments);
  }

  _createClass(Container, [{
    key: "componentDidCatch",
    value: function componentDidCatch(componentErr, info) {
      this.props.fn(componentErr, info);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash(); // We need to replace the router state if:
      // - the page was (auto) exported and has a query string or search (hash)
      // - it was auto exported and is a dynamic route (to provide params)
      // - if it is a client-side skeleton (fallback render)

      if (router.isSsr && // We don't update for 404 requests as this can modify
      // the asPath unexpectedly e.g. adding basePath when
      // it wasn't originally present
      page !== '/404' && !(page === '/_error' && hydrateProps && hydrateProps.pageProps && hydrateProps.pageProps.statusCode === 404) && (isFallback || data.nextExport && ((0, _isDynamic.isDynamicRoute)(router.pathname) || location.search || false) || hydrateProps && hydrateProps.__N_SSG && (location.search || false))) {
        // update query on mount for exported pages
        router.replace(router.pathname + '?' + String(querystring.assign(querystring.urlQueryToSearchParams(router.query), new URLSearchParams(location.search))), asPath, {
          // @ts-ignore
          // WARNING: `_h` is an internal option for handing Next.js
          // client-side hydration. Your app should _never_ use this property.
          // It may change at any time without notice.
          _h: 1,
          // Fallback pages must trigger the data fetch, so the transition is
          // not shallow.
          // Other pages (strictly updating query) happens shallowly, as data
          // requirements would already be present.
          shallow: !isFallback
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var _location = location,
          hash = _location.hash;
      hash = hash && hash.substring(1);
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      if (false) {} else {
        var _require6 = __webpack_require__(/*! @next/react-dev-overlay/lib/client */ "./node_modules/@next/react-dev-overlay/lib/client.js"),
            ReactDevOverlay = _require6.ReactDevOverlay;

        return /*#__PURE__*/_react["default"].createElement(ReactDevOverlay, null, this.props.children);
      }
    }
  }]);

  return Container;
}(_react["default"].Component);

var emitter = (0, _mitt["default"])();
exports.emitter = emitter;
var CachedComponent;

var _default = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    var opts,
        initialErr,
        appEntrypoint,
        app,
        mod,
        pageEntrypoint,
        _require7,
        isValidElementType,
        _require8,
        getNodeError,
        renderCtx,
        _args = arguments;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opts = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};

            // This makes sure this specific lines are removed in production
            if (true) {
              webpackHMR = opts.webpackHMR;
            }

            initialErr = hydrateErr;
            _context.prev = 3;
            _context.next = 6;
            return pageLoader.routeLoader.whenEntrypoint('/_app');

          case 6:
            appEntrypoint = _context.sent;

            if (!('error' in appEntrypoint)) {
              _context.next = 9;
              break;
            }

            throw appEntrypoint.error;

          case 9:
            app = appEntrypoint.component, mod = appEntrypoint.exports;
            CachedApp = app;

            if (mod && mod.reportWebVitals) {
              onPerfEntry = function onPerfEntry(_ref4) {
                var id = _ref4.id,
                    name = _ref4.name,
                    startTime = _ref4.startTime,
                    value = _ref4.value,
                    duration = _ref4.duration,
                    entryType = _ref4.entryType,
                    entries = _ref4.entries;
                // Combines timestamp with random number for unique ID
                var uniqueID = "".concat(Date.now(), "-").concat(Math.floor(Math.random() * (9e12 - 1)) + 1e12);
                var perfStartEntry;

                if (entries && entries.length) {
                  perfStartEntry = entries[0].startTime;
                }

                mod.reportWebVitals({
                  id: id || uniqueID,
                  name: name,
                  startTime: startTime || perfStartEntry,
                  value: value == null ? duration : value,
                  label: entryType === 'mark' || entryType === 'measure' ? 'custom' : 'web-vital'
                });
              };
            }

            if (!( true && hydrateErr)) {
              _context.next = 16;
              break;
            }

            _context.t0 = {
              error: hydrateErr
            };
            _context.next = 19;
            break;

          case 16:
            _context.next = 18;
            return pageLoader.routeLoader.whenEntrypoint(page);

          case 18:
            _context.t0 = _context.sent;

          case 19:
            pageEntrypoint = _context.t0;

            if (!('error' in pageEntrypoint)) {
              _context.next = 22;
              break;
            }

            throw pageEntrypoint.error;

          case 22:
            CachedComponent = pageEntrypoint.component;

            if (false) {}

            _require7 = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js?4cec1"), isValidElementType = _require7.isValidElementType;

            if (isValidElementType(CachedComponent)) {
              _context.next = 27;
              break;
            }

            throw new Error("The default export is not a React Component in page: \"".concat(page, "\""));

          case 27:
            _context.next = 32;
            break;

          case 29:
            _context.prev = 29;
            _context.t1 = _context["catch"](3);
            // This catches errors like throwing in the top level of a module
            initialErr = _context.t1;

          case 32:
            if (true) {
              _require8 = __webpack_require__(/*! @next/react-dev-overlay/lib/client */ "./node_modules/@next/react-dev-overlay/lib/client.js"), getNodeError = _require8.getNodeError; // Server-side runtime errors need to be re-thrown on the client-side so
              // that the overlay is rendered.

              if (initialErr) {
                if (initialErr === hydrateErr) {
                  setTimeout(function () {
                    var error;

                    try {
                      // Generate a new error object. We `throw` it because some browsers
                      // will set the `stack` when thrown, and we want to ensure ours is
                      // not overridden when we re-throw it below.
                      throw new Error(initialErr.message);
                    } catch (e) {
                      error = e;
                    }

                    error.name = initialErr.name;
                    error.stack = initialErr.stack;
                    var node = getNodeError(error);
                    throw node;
                  });
                } // We replaced the server-side error with a client-side error, and should
                // no longer rewrite the stack trace to a Node error.
                else {
                    setTimeout(function () {
                      throw initialErr;
                    });
                  }
              }
            }

            if (!window.__NEXT_PRELOADREADY) {
              _context.next = 36;
              break;
            }

            _context.next = 36;
            return window.__NEXT_PRELOADREADY(dynamicIds);

          case 36:
            exports.router = router = (0, _router2.createRouter)(page, query, asPath, {
              initialProps: hydrateProps,
              pageLoader: pageLoader,
              App: CachedApp,
              Component: CachedComponent,
              wrapApp: wrapApp,
              err: initialErr,
              isFallback: Boolean(isFallback),
              subscription: function subscription(info, App, scroll) {
                return render(Object.assign({}, info, {
                  App: App,
                  scroll: scroll
                }));
              },
              locale: locale,
              locales: locales,
              defaultLocale: defaultLocale,
              domainLocales: domainLocales,
              isPreview: isPreview
            });
            renderCtx = {
              App: CachedApp,
              initial: true,
              Component: CachedComponent,
              props: hydrateProps,
              err: initialErr
            };

            if (true) {
              _context.next = 43;
              break;
            }

            render(renderCtx);
            return _context.abrupt("return", emitter);

          case 43:
            return _context.abrupt("return", {
              emitter: emitter,
              render: render,
              renderCtx: renderCtx
            });

          case 44:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 29]]);
  }));

  return function _default() {
    return _ref3.apply(this, arguments);
  };
}();

exports.default = _default;

function render(_x) {
  return _render.apply(this, arguments);
} // This method handles all runtime and debug errors.
// 404 and 500 errors are special kind of errors
// and they are still handle via the main render method.


function _render() {
  _render = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(renderingProps) {
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!renderingProps.err) {
              _context2.next = 4;
              break;
            }

            _context2.next = 3;
            return renderError(renderingProps);

          case 3:
            return _context2.abrupt("return");

          case 4:
            _context2.prev = 4;
            _context2.next = 7;
            return doRender(renderingProps);

          case 7:
            _context2.next = 16;
            break;

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](4);

            if (!_context2.t0.cancelled) {
              _context2.next = 13;
              break;
            }

            throw _context2.t0;

          case 13:
            if (true) {
              // Ensure this error is displayed in the overlay in development
              setTimeout(function () {
                throw _context2.t0;
              });
            }

            _context2.next = 16;
            return renderError((0, _extends2["default"])({}, renderingProps, {
              err: _context2.t0
            }));

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[4, 9]]);
  }));
  return _render.apply(this, arguments);
}

function renderError(renderErrorProps) {
  var App = renderErrorProps.App,
      err = renderErrorProps.err; // In development runtime errors are caught by our overlay
  // In production we catch runtime errors using componentDidCatch which will trigger renderError

  if (true) {
    // A Next.js rendering runtime error is always unrecoverable
    // FIXME: let's make this recoverable (error in GIP client-transition)
    webpackHMR.onUnrecoverableError(); // We need to render an empty <App> so that the `<ReactDevOverlay>` can
    // render itself.

    return doRender({
      App: function App() {
        return null;
      },
      props: {},
      Component: function Component() {
        return null;
      },
      styleSheets: []
    });
  } // Make sure we log the error to the console, otherwise users can't track down issues.


  console.error(err);
  return pageLoader.loadPage('/_error').then(function (_ref5) {
    var ErrorComponent = _ref5.page,
        styleSheets = _ref5.styleSheets;
    // In production we do a normal render with the `ErrorComponent` as component.
    // If we've gotten here upon initial render, we can use the props from the server.
    // Otherwise, we need to call `getInitialProps` on `App` before mounting.
    var AppTree = wrapApp(App);
    var appCtx = {
      Component: ErrorComponent,
      AppTree: AppTree,
      router: router,
      ctx: {
        err: err,
        pathname: page,
        query: query,
        asPath: asPath,
        AppTree: AppTree
      }
    };
    return Promise.resolve(renderErrorProps.props ? renderErrorProps.props : (0, _utils.loadGetInitialProps)(App, appCtx)).then(function (initProps) {
      return doRender((0, _extends2["default"])({}, renderErrorProps, {
        err: err,
        Component: ErrorComponent,
        styleSheets: styleSheets,
        props: initProps
      }));
    });
  });
}

var reactRoot = null;
var shouldHydrate = typeof _reactDom["default"].hydrate === 'function';

function renderReactElement(domEl, fn) {
  // mark start of hydrate/render
  if (_utils.ST) {
    performance.mark('beforeRender');
  }

  var reactEl = fn(shouldHydrate ? markHydrateComplete : markRenderComplete);

  if (false) { var createRootName; } else {
    // The check for `.hydrate` is there to support React alternatives like preact
    if (shouldHydrate) {
      _reactDom["default"].hydrate(reactEl, domEl);

      shouldHydrate = false;
    } else {
      _reactDom["default"].render(reactEl, domEl);
    }
  }
}

function markHydrateComplete() {
  if (!_utils.ST) return;
  performance.mark('afterHydrate'); // mark end of hydration

  performance.measure('Next.js-before-hydration', 'navigationStart', 'beforeRender');
  performance.measure('Next.js-hydration', 'beforeRender', 'afterHydrate');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-hydration').forEach(onPerfEntry);
  }

  clearMarks();
}

function markRenderComplete() {
  if (!_utils.ST) return;
  performance.mark('afterRender'); // mark end of render

  var navStartEntries = performance.getEntriesByName('routeChange', 'mark');
  if (!navStartEntries.length) return;
  performance.measure('Next.js-route-change-to-render', navStartEntries[0].name, 'beforeRender');
  performance.measure('Next.js-render', 'beforeRender', 'afterRender');

  if (onPerfEntry) {
    performance.getEntriesByName('Next.js-render').forEach(onPerfEntry);
    performance.getEntriesByName('Next.js-route-change-to-render').forEach(onPerfEntry);
  }

  clearMarks();
  ['Next.js-route-change-to-render', 'Next.js-render'].forEach(function (measure) {
    return performance.clearMeasures(measure);
  });
}

function clearMarks() {
  ;
  ['beforeRender', 'afterHydrate', 'afterRender', 'routeChange'].forEach(function (mark) {
    return performance.clearMarks(mark);
  });
}

function AppContainer(_ref6) {
  var children = _ref6.children;
  return /*#__PURE__*/_react["default"].createElement(Container, {
    fn: function fn(error) {
      return renderError({
        App: CachedApp,
        err: error
      })["catch"](function (err) {
        return console.error('Error rendering page: ', err);
      });
    }
  }, /*#__PURE__*/_react["default"].createElement(_routerContext.RouterContext.Provider, {
    value: (0, _router2.makePublicRouterInstance)(router)
  }, /*#__PURE__*/_react["default"].createElement(_headManagerContext.HeadManagerContext.Provider, {
    value: headManager
  }, children)));
}

_c = AppContainer;

var wrapApp = function wrapApp(App) {
  return function (wrappedAppProps) {
    var appProps = (0, _extends2["default"])({}, wrappedAppProps, {
      Component: CachedComponent,
      err: hydrateErr,
      router: router
    });
    return /*#__PURE__*/_react["default"].createElement(AppContainer, null, /*#__PURE__*/_react["default"].createElement(App, appProps));
  };
};

var lastAppProps;

function doRender(input) {
  var App = input.App,
      Component = input.Component,
      props = input.props,
      err = input.err;
  var styleSheets = 'initial' in input ? undefined : input.styleSheets;
  Component = Component || lastAppProps.Component;
  props = props || lastAppProps.props;
  var appProps = (0, _extends2["default"])({}, props, {
    Component: Component,
    err: err,
    router: router
  }); // lastAppProps has to be set before ReactDom.render to account for ReactDom throwing an error.

  lastAppProps = appProps;
  var canceled = false;
  var resolvePromise;
  var renderPromise = new Promise(function (resolve, reject) {
    if (_lastRenderReject) {
      _lastRenderReject();
    }

    resolvePromise = function resolvePromise() {
      _lastRenderReject = null;
      resolve();
    };

    _lastRenderReject = function lastRenderReject() {
      canceled = true;
      _lastRenderReject = null;
      var error = new Error('Cancel rendering route');
      error.cancelled = true;
      reject(error);
    };
  }); // This function has a return type to ensure it doesn't start returning a
  // Promise. It should remain synchronous.

  function onStart() {
    if (!styleSheets || // We use `style-loader` in development, so we don't need to do anything
    // unless we're in production:
    true) {
      return false;
    }

    var currentStyleTags = looseToArray(document.querySelectorAll('style[data-n-href]'));
    var currentHrefs = new Set(currentStyleTags.map(function (tag) {
      return tag.getAttribute('data-n-href');
    }));
    var noscript = document.querySelector('noscript[data-n-css]');
    var nonce = noscript == null ? void 0 : noscript.getAttribute('data-n-css');
    styleSheets.forEach(function (_ref7) {
      var href = _ref7.href,
          text = _ref7.text;

      if (!currentHrefs.has(href)) {
        var styleTag = document.createElement('style');
        styleTag.setAttribute('data-n-href', href);
        styleTag.setAttribute('media', 'x');

        if (nonce) {
          styleTag.setAttribute('nonce', nonce);
        }

        document.head.appendChild(styleTag);
        styleTag.appendChild(document.createTextNode(text));
      }
    });
    return true;
  }

  function onHeadCommit() {
    if ( // We use `style-loader` in development, so we don't need to do anything
    // unless we're in production:
    false) { var referenceNode, idx, currentHrefs, currentStyleTags, desiredHrefs; }

    if (input.scroll) {
      window.scrollTo(input.scroll.x, input.scroll.y);
    }
  }

  function onRootCommit() {
    resolvePromise();
  }

  onStart();

  var elem = /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(Head, {
    callback: onHeadCommit
  }), /*#__PURE__*/_react["default"].createElement(AppContainer, null, /*#__PURE__*/_react["default"].createElement(App, appProps), /*#__PURE__*/_react["default"].createElement(_portal.Portal, {
    type: "next-route-announcer"
  }, /*#__PURE__*/_react["default"].createElement(_routeAnnouncer.RouteAnnouncer, null)))); // We catch runtime errors using componentDidCatch which will trigger renderError


  renderReactElement(appElement, function (callback) {
    return /*#__PURE__*/_react["default"].createElement(Root, {
      callbacks: [callback, onRootCommit]
    },  false ? /*#__PURE__*/0 : elem);
  });
  return renderPromise;
}

function Root(_ref9) {
  _s();

  var callbacks = _ref9.callbacks,
      children = _ref9.children;

  // We use `useLayoutEffect` to guarantee the callbacks are executed
  // as soon as React flushes the update
  _react["default"].useLayoutEffect(function () {
    return callbacks.forEach(function (callback) {
      return callback();
    });
  }, [callbacks]);

  if (undefined) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    _react["default"].useEffect(function () {
      window.__NEXT_HYDRATED = true;

      if (window.__NEXT_HYDRATED_CB) {
        window.__NEXT_HYDRATED_CB();
      }
    }, []);
  } // We should ask to measure the Web Vitals after rendering completes so we
  // don't cause any hydration delay:


  _react["default"].useEffect(function () {
    (0, _performanceRelayer["default"])(onPerfEntry);
  }, []);

  return children;
} // Dummy component that we render as a child of Root so that we can
// toggle the correct styles before the page is rendered.


_s(Root, "KDoBXdlwSU+O+uFsByO25XxhKDU=");

_c2 = Root;

function Head(_ref10) {
  _s2();

  var callback = _ref10.callback;

  // We use `useLayoutEffect` to guarantee the callback is executed
  // as soon as React flushes the update.
  _react["default"].useLayoutEffect(function () {
    return callback();
  }, [callback]);

  return null;
}

_s2(Head, "n7/vCynhJvM+pLkyL2DMQUF0odM=");

_c3 = Head;

var _c, _c2, _c3;

$RefreshReg$(_c, "AppContainer");
$RefreshReg$(_c2, "Root");
$RefreshReg$(_c3, "Head");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vaW5kZXgudHN4Il0sIm5hbWVzIjpbImRhdGEiLCJKU09OIiwiZG9jdW1lbnQiLCJ3aW5kb3ciLCJ2ZXJzaW9uIiwicHJvY2VzcyIsImxvb3NlVG9BcnJheSIsInByb3BzIiwiZXJyIiwiaXNGYWxsYmFjayIsImRlZmF1bHRMb2NhbGUiLCJwcmVmaXgiLCJfX3dlYnBhY2tfcHVibGljX3BhdGhfXyIsImVudkNvbmZpZyIsInNlcnZlclJ1bnRpbWVDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwicnVudGltZUNvbmZpZyIsImFzUGF0aCIsInBhZ2VMb2FkZXIiLCJQYWdlTG9hZGVyIiwicmVnaXN0ZXIiLCJwIiwic2V0VGltZW91dCIsImhlYWRNYW5hZ2VyIiwiYXBwRWxlbWVudCIsImNvbXBvbmVudERpZE1vdW50Iiwicm91dGVyIiwicGFnZSIsImh5ZHJhdGVQcm9wcyIsImxvY2F0aW9uIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJfaCIsInNoYWxsb3ciLCJjb21wb25lbnREaWRVcGRhdGUiLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiZWwiLCJyZW5kZXIiLCJyZXF1aXJlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJlbWl0dGVyIiwib3B0cyIsIndlYnBhY2tITVIiLCJpbml0aWFsRXJyIiwiYXBwRW50cnlwb2ludCIsImNvbXBvbmVudCIsImV4cG9ydHMiLCJDYWNoZWRBcHAiLCJtb2QiLCJvblBlcmZFbnRyeSIsInVuaXF1ZUlEIiwiRGF0ZSIsIk1hdGgiLCJlbnRyaWVzIiwicGVyZlN0YXJ0RW50cnkiLCJpZCIsIm5hbWUiLCJzdGFydFRpbWUiLCJ2YWx1ZSIsImxhYmVsIiwiZW50cnlUeXBlIiwiZXJyb3IiLCJwYWdlRW50cnlwb2ludCIsIkNhY2hlZENvbXBvbmVudCIsImlzVmFsaWRFbGVtZW50VHlwZSIsIm5vZGUiLCJnZXROb2RlRXJyb3IiLCJpbml0aWFsUHJvcHMiLCJBcHAiLCJ3cmFwQXBwIiwiQm9vbGVhbiIsInN1YnNjcmlwdGlvbiIsIk9iamVjdCIsInNjcm9sbCIsImxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiaXNQcmV2aWV3IiwicmVuZGVyQ3R4IiwiaW5pdGlhbCIsInJlbmRlcmluZ1Byb3BzIiwicmVuZGVyRXJyb3IiLCJkb1JlbmRlciIsInJlbmRlckVyciIsInN0eWxlU2hlZXRzIiwiY29uc29sZSIsIkFwcFRyZWUiLCJhcHBDdHgiLCJjdHgiLCJwYXRobmFtZSIsInF1ZXJ5IiwiUHJvbWlzZSIsInJlbmRlckVycm9yUHJvcHMiLCJpbml0UHJvcHMiLCJyZWFjdFJvb3QiLCJzaG91bGRIeWRyYXRlIiwiUmVhY3RET00iLCJTVCIsInBlcmZvcm1hbmNlIiwicmVhY3RFbCIsImZuIiwiY2xlYXJNYXJrcyIsIm5hdlN0YXJ0RW50cmllcyIsIm1lYXN1cmUiLCJtYXJrIiwid3JhcHBlZEFwcFByb3BzIiwiYXBwUHJvcHMiLCJpbnB1dCIsImxhc3RBcHBQcm9wcyIsImNhbmNlbGVkIiwicmVuZGVyUHJvbWlzZSIsImxhc3RSZW5kZXJSZWplY3QiLCJyZXNvbHZlUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJjdXJyZW50U3R5bGVUYWdzIiwiY3VycmVudEhyZWZzIiwidGFnIiwibm9zY3JpcHQiLCJub25jZSIsInN0eWxlVGFnIiwib25TdGFydCIsImVsZW0iLCJyZW5kZXJSZWFjdEVsZW1lbnQiLCJjYWxsYmFjayIsImNhbGxiYWNrcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQU9BOztBQUNBOztBQUNBOztBQUNBOztBQU1BOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBO0FBNUJBOzs7QUFxREEsSUFBTUEsSUFBb0MsR0FBR0MsSUFBSSxDQUFKQSxNQUMzQ0MsUUFBUSxDQUFSQSxnQ0FERixXQUE2Q0QsQ0FBN0M7QUFHQUUs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LE1BQUluQyxTQUFKLEVBQWtDO0FBQ2hDO0FBQ0FtQyxnQ0FBZ0IsWUFBTTtBQUNwQnJDLFlBQU0sQ0FBTkE7O0FBRUEsVUFBSUEsTUFBTSxDQUFWLG9CQUErQjtBQUM3QkEsY0FBTSxDQUFOQTtBQUVIO0FBTkRxQztBQVFGLEdBaEJzQixDQWdCdEI7QUFDQTs7O0FBQ0FBLDhCQUFnQixZQUFNO0FBQ3BCO0FBREZBOztBQUdBO0FBR0YsQyxDQUFBO0FBQ0E7OztHQTlCQSxJOztNQUFBLEk7O0FBK0JBLHNCQUE0RDtBQUFBOztBQUFBLE1BQTVELFFBQTRELFVBQTVELFFBQTREOztBQUMxRDtBQUNBO0FBQ0FBLG9DQUFzQjtBQUFBLFdBQU1zRixRQUE1QnRGLEVBQXNCO0FBQUEsR0FBdEJBLEVBQXdDLENBQXhDQSxRQUF3QyxDQUF4Q0E7O0FBQ0E7QUFDRDs7SUFMRCxJOztNQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svbWFpbi5lZmY1NWRjMzMwYjU5NDRkMzNlMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIGxvY2F0aW9uICovXG5pbXBvcnQgJ0BuZXh0L3BvbHlmaWxsLW1vZHVsZSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nXG5pbXBvcnQgeyBIZWFkTWFuYWdlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvaGVhZC1tYW5hZ2VyLWNvbnRleHQnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9taXR0J1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcbmltcG9ydCBSb3V0ZXIsIHtcbiAgQXBwQ29tcG9uZW50LFxuICBBcHBQcm9wcyxcbiAgZGVsQmFzZVBhdGgsXG4gIGhhc0Jhc2VQYXRoLFxuICBQcml2YXRlUm91dGVJbmZvLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIGVudkNvbmZpZyBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcnVudGltZS1jb25maWcnXG5pbXBvcnQge1xuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5FWFRfREFUQSxcbiAgU1QsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFBvcnRhbCB9IGZyb20gJy4vcG9ydGFsJ1xuaW1wb3J0IGluaXRIZWFkTWFuYWdlciBmcm9tICcuL2hlYWQtbWFuYWdlcidcbmltcG9ydCBQYWdlTG9hZGVyLCB7IFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4vcGFnZS1sb2FkZXInXG5pbXBvcnQgbWVhc3VyZVdlYlZpdGFscyBmcm9tICcuL3BlcmZvcm1hbmNlLXJlbGF5ZXInXG5pbXBvcnQgeyBSb3V0ZUFubm91bmNlciB9IGZyb20gJy4vcm91dGUtYW5ub3VuY2VyJ1xuaW1wb3J0IHsgY3JlYXRlUm91dGVyLCBtYWtlUHVibGljUm91dGVySW5zdGFuY2UgfSBmcm9tICcuL3JvdXRlcidcblxuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJyZWFjdC1kb20vZXhwZXJpbWVudGFsXCIgLz5cblxuZGVjbGFyZSBsZXQgX193ZWJwYWNrX3B1YmxpY19wYXRoX186IHN0cmluZ1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHRlc3QgZm5zICovXG4gICAgX19ORVhUX0hZRFJBVEVEPzogYm9vbGVhblxuICAgIF9fTkVYVF9IWURSQVRFRF9DQj86ICgpID0+IHZvaWRcblxuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfUFJFTE9BRFJFQURZPzogKGlkcz86IChzdHJpbmcgfCBudW1iZXIpW10pID0+IHZvaWRcbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgICBfX05FWFRfUDogYW55W11cbiAgfVxufVxuXG50eXBlIFJlbmRlclJvdXRlSW5mbyA9IFByaXZhdGVSb3V0ZUluZm8gJiB7XG4gIEFwcDogQXBwQ29tcG9uZW50XG4gIHNjcm9sbD86IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbn1cbnR5cGUgUmVuZGVyRXJyb3JQcm9wcyA9IE9taXQ8UmVuZGVyUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdzdHlsZVNoZWV0cyc+XG5cbmNvbnN0IGRhdGE6IHR5cGVvZiB3aW5kb3dbJ19fTkVYVF9EQVRBX18nXSA9IEpTT04ucGFyc2UoXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX05FWFRfREFUQV9fJykhLnRleHRDb250ZW50IVxuKVxud2luZG93Ll9fTkVYVF9EQVRBX18gPSBkYXRhXG5cbmV4cG9ydCBjb25zdCB2ZXJzaW9uID0gcHJvY2Vzcy5lbnYuX19ORVhUX1ZFUlNJT05cblxuY29uc3QgbG9vc2VUb0FycmF5ID0gPFQgZXh0ZW5kcyB7fT4oaW5wdXQ6IGFueSk6IFRbXSA9PiBbXS5zbGljZS5jYWxsKGlucHV0KVxuXG5jb25zdCB7XG4gIHByb3BzOiBoeWRyYXRlUHJvcHMsXG4gIGVycjogaHlkcmF0ZUVycixcbiAgcGFnZSxcbiAgcXVlcnksXG4gIGJ1aWxkSWQsXG4gIGFzc2V0UHJlZml4LFxuICBydW50aW1lQ29uZmlnLFxuICBkeW5hbWljSWRzLFxuICBpc0ZhbGxiYWNrLFxuICBsb2NhbGUsXG4gIGxvY2FsZXMsXG4gIGRvbWFpbkxvY2FsZXMsXG4gIGlzUHJldmlldyxcbn0gPSBkYXRhXG5cbmxldCB7IGRlZmF1bHRMb2NhbGUgfSA9IGRhdGFcblxuY29uc3QgcHJlZml4OiBzdHJpbmcgPSBhc3NldFByZWZpeCB8fCAnJ1xuXG4vLyBXaXRoIGR5bmFtaWMgYXNzZXRQcmVmaXggaXQncyBubyBsb25nZXIgcG9zc2libGUgdG8gc2V0IGFzc2V0UHJlZml4IGF0IHRoZSBidWlsZCB0aW1lXG4vLyBTbywgdGhpcyBpcyBob3cgd2UgZG8gaXQgaW4gdGhlIGNsaWVudCBzaWRlIGF0IHJ1bnRpbWVcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gYCR7cHJlZml4fS9fbmV4dC9gIC8vZXNsaW50LWRpc2FibGUtbGluZVxuLy8gSW5pdGlhbGl6ZSBuZXh0L2NvbmZpZyB3aXRoIHRoZSBlbnZpcm9ubWVudCBjb25maWd1cmF0aW9uXG5lbnZDb25maWcuc2V0Q29uZmlnKHtcbiAgc2VydmVyUnVudGltZUNvbmZpZzoge30sXG4gIHB1YmxpY1J1bnRpbWVDb25maWc6IHJ1bnRpbWVDb25maWcgfHwge30sXG59KVxuXG5sZXQgYXNQYXRoOiBzdHJpbmcgPSBnZXRVUkwoKVxuXG4vLyBtYWtlIHN1cmUgbm90IHRvIGF0dGVtcHQgc3RyaXBwaW5nIGJhc2VQYXRoIGZvciA0MDRzXG5pZiAoaGFzQmFzZVBhdGgoYXNQYXRoKSkge1xuICBhc1BhdGggPSBkZWxCYXNlUGF0aChhc1BhdGgpXG59XG5cbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gIGNvbnN0IHtcbiAgICBub3JtYWxpemVMb2NhbGVQYXRoLFxuICB9ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJylcblxuICBjb25zdCB7XG4gICAgZGV0ZWN0RG9tYWluTG9jYWxlLFxuICB9ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKSBhcyB0eXBlb2YgaW1wb3J0KCcuLi9uZXh0LXNlcnZlci9saWIvaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpXG5cbiAgY29uc3Qge1xuICAgIHBhcnNlUmVsYXRpdmVVcmwsXG4gIH0gPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCcpIGFzIHR5cGVvZiBpbXBvcnQoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJylcblxuICBjb25zdCB7XG4gICAgZm9ybWF0VXJsLFxuICB9ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJylcblxuICBpZiAobG9jYWxlcykge1xuICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGFyc2VkQXMucGF0aG5hbWUsIGxvY2FsZXMpXG5cbiAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICBhc1BhdGggPSBmb3JtYXRVcmwocGFyc2VkQXMpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGRlcml2ZSB0aGUgZGVmYXVsdCBsb2NhbGUgaWYgaXQgd2Fzbid0IGRldGVjdGVkIGluIHRoZSBhc1BhdGhcbiAgICAgIC8vIHNpbmNlIHdlIGRvbid0IHByZXJlbmRlciBzdGF0aWMgcGFnZXMgd2l0aCBhbGwgcG9zc2libGUgZGVmYXVsdFxuICAgICAgLy8gbG9jYWxlc1xuICAgICAgZGVmYXVsdExvY2FsZSA9IGxvY2FsZVxuICAgIH1cblxuICAgIC8vIGF0dGVtcHQgZGV0ZWN0aW5nIGRlZmF1bHQgbG9jYWxlIGJhc2VkIG9uIGhvc3RuYW1lXG4gICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICBwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9ET01BSU5TIGFzIGFueSxcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZVxuICAgIClcblxuICAgIC8vIFRPRE86IGludmVzdGlnYXRlIGlmIGRlZmF1bHRMb2NhbGUgbmVlZHMgdG8gYmUgcG9wdWxhdGVkIGFmdGVyXG4gICAgLy8gaHlkcmF0aW9uIHRvIHByZXZlbnQgbWlzbWF0Y2hlZCByZW5kZXJzXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICBkZWZhdWx0TG9jYWxlID0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZVxuICAgIH1cbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUklQVF9MT0FERVIgJiYgZGF0YS5zY3JpcHRMb2FkZXIpIHtcbiAgY29uc3QgeyBpbml0U2NyaXB0TG9hZGVyIH0gPSByZXF1aXJlKCcuL2V4cGVyaW1lbnRhbC1zY3JpcHQnKVxuICBpbml0U2NyaXB0TG9hZGVyKGRhdGEuc2NyaXB0TG9hZGVyKVxufVxuXG50eXBlIFJlZ2lzdGVyRm4gPSAoaW5wdXQ6IFtzdHJpbmcsICgpID0+IHZvaWRdKSA9PiB2b2lkXG5cbmNvbnN0IHBhZ2VMb2FkZXI6IFBhZ2VMb2FkZXIgPSBuZXcgUGFnZUxvYWRlcihidWlsZElkLCBwcmVmaXgpXG5jb25zdCByZWdpc3RlcjogUmVnaXN0ZXJGbiA9IChbciwgZl0pID0+XG4gIHBhZ2VMb2FkZXIucm91dGVMb2FkZXIub25FbnRyeXBvaW50KHIsIGYpXG5pZiAod2luZG93Ll9fTkVYVF9QKSB7XG4gIC8vIERlZmVyIHBhZ2UgcmVnaXN0cmF0aW9uIGZvciBhbm90aGVyIHRpY2suIFRoaXMgd2lsbCBpbmNyZWFzZSB0aGUgb3ZlcmFsbFxuICAvLyBsYXRlbmN5IGluIGh5ZHJhdGluZyB0aGUgcGFnZSwgYnV0IHJlZHVjZSB0aGUgdG90YWwgYmxvY2tpbmcgdGltZS5cbiAgd2luZG93Ll9fTkVYVF9QLm1hcCgocCkgPT4gc2V0VGltZW91dCgoKSA9PiByZWdpc3RlcihwKSwgMCkpXG59XG53aW5kb3cuX19ORVhUX1AgPSBbXVxuOyh3aW5kb3cuX19ORVhUX1AgYXMgYW55KS5wdXNoID0gcmVnaXN0ZXJcblxuY29uc3QgaGVhZE1hbmFnZXI6IHtcbiAgbW91bnRlZEluc3RhbmNlczogU2V0PHVua25vd24+XG4gIHVwZGF0ZUhlYWQ6IChoZWFkOiBKU1guRWxlbWVudFtdKSA9PiB2b2lkXG59ID0gaW5pdEhlYWRNYW5hZ2VyKClcbmNvbnN0IGFwcEVsZW1lbnQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdfX25leHQnKVxuXG5sZXQgbGFzdFJlbmRlclJlamVjdDogKCgpID0+IHZvaWQpIHwgbnVsbFxubGV0IHdlYnBhY2tITVI6IGFueVxuZXhwb3J0IGxldCByb3V0ZXI6IFJvdXRlclxubGV0IENhY2hlZEFwcDogQXBwQ29tcG9uZW50LCBvblBlcmZFbnRyeTogKG1ldHJpYzogYW55KSA9PiB2b2lkXG5cbmNsYXNzIENvbnRhaW5lciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDx7XG4gIGZuOiAoZXJyOiBFcnJvciwgaW5mbz86IGFueSkgPT4gdm9pZFxufT4ge1xuICBjb21wb25lbnREaWRDYXRjaChjb21wb25lbnRFcnI6IEVycm9yLCBpbmZvOiBhbnkpIHtcbiAgICB0aGlzLnByb3BzLmZuKGNvbXBvbmVudEVyciwgaW5mbylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuc2Nyb2xsVG9IYXNoKClcblxuICAgIC8vIFdlIG5lZWQgdG8gcmVwbGFjZSB0aGUgcm91dGVyIHN0YXRlIGlmOlxuICAgIC8vIC0gdGhlIHBhZ2Ugd2FzIChhdXRvKSBleHBvcnRlZCBhbmQgaGFzIGEgcXVlcnkgc3RyaW5nIG9yIHNlYXJjaCAoaGFzaClcbiAgICAvLyAtIGl0IHdhcyBhdXRvIGV4cG9ydGVkIGFuZCBpcyBhIGR5bmFtaWMgcm91dGUgKHRvIHByb3ZpZGUgcGFyYW1zKVxuICAgIC8vIC0gaWYgaXQgaXMgYSBjbGllbnQtc2lkZSBza2VsZXRvbiAoZmFsbGJhY2sgcmVuZGVyKVxuICAgIGlmIChcbiAgICAgIHJvdXRlci5pc1NzciAmJlxuICAgICAgLy8gV2UgZG9uJ3QgdXBkYXRlIGZvciA0MDQgcmVxdWVzdHMgYXMgdGhpcyBjYW4gbW9kaWZ5XG4gICAgICAvLyB0aGUgYXNQYXRoIHVuZXhwZWN0ZWRseSBlLmcuIGFkZGluZyBiYXNlUGF0aCB3aGVuXG4gICAgICAvLyBpdCB3YXNuJ3Qgb3JpZ2luYWxseSBwcmVzZW50XG4gICAgICBwYWdlICE9PSAnLzQwNCcgJiZcbiAgICAgICEoXG4gICAgICAgIHBhZ2UgPT09ICcvX2Vycm9yJyAmJlxuICAgICAgICBoeWRyYXRlUHJvcHMgJiZcbiAgICAgICAgaHlkcmF0ZVByb3BzLnBhZ2VQcm9wcyAmJlxuICAgICAgICBoeWRyYXRlUHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPT09IDQwNFxuICAgICAgKSAmJlxuICAgICAgKGlzRmFsbGJhY2sgfHxcbiAgICAgICAgKGRhdGEubmV4dEV4cG9ydCAmJlxuICAgICAgICAgIChpc0R5bmFtaWNSb3V0ZShyb3V0ZXIucGF0aG5hbWUpIHx8XG4gICAgICAgICAgICBsb2NhdGlvbi5zZWFyY2ggfHxcbiAgICAgICAgICAgIHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpKSB8fFxuICAgICAgICAoaHlkcmF0ZVByb3BzICYmXG4gICAgICAgICAgaHlkcmF0ZVByb3BzLl9fTl9TU0cgJiZcbiAgICAgICAgICAobG9jYXRpb24uc2VhcmNoIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpKSlcbiAgICApIHtcbiAgICAgIC8vIHVwZGF0ZSBxdWVyeSBvbiBtb3VudCBmb3IgZXhwb3J0ZWQgcGFnZXNcbiAgICAgIHJvdXRlci5yZXBsYWNlKFxuICAgICAgICByb3V0ZXIucGF0aG5hbWUgK1xuICAgICAgICAgICc/JyArXG4gICAgICAgICAgU3RyaW5nKFxuICAgICAgICAgICAgcXVlcnlzdHJpbmcuYXNzaWduKFxuICAgICAgICAgICAgICBxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHJvdXRlci5xdWVyeSksXG4gICAgICAgICAgICAgIG5ldyBVUkxTZWFyY2hQYXJhbXMobG9jYXRpb24uc2VhcmNoKVxuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzXG4gICAgICAgICAgLy8gY2xpZW50LXNpZGUgaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS5cbiAgICAgICAgICAvLyBJdCBtYXkgY2hhbmdlIGF0IGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgICAgIF9oOiAxLFxuICAgICAgICAgIC8vIEZhbGxiYWNrIHBhZ2VzIG11c3QgdHJpZ2dlciB0aGUgZGF0YSBmZXRjaCwgc28gdGhlIHRyYW5zaXRpb24gaXNcbiAgICAgICAgICAvLyBub3Qgc2hhbGxvdy5cbiAgICAgICAgICAvLyBPdGhlciBwYWdlcyAoc3RyaWN0bHkgdXBkYXRpbmcgcXVlcnkpIGhhcHBlbnMgc2hhbGxvd2x5LCBhcyBkYXRhXG4gICAgICAgICAgLy8gcmVxdWlyZW1lbnRzIHdvdWxkIGFscmVhZHkgYmUgcHJlc2VudC5cbiAgICAgICAgICBzaGFsbG93OiAhaXNGYWxsYmFjayxcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLnNjcm9sbFRvSGFzaCgpXG4gIH1cblxuICBzY3JvbGxUb0hhc2goKSB7XG4gICAgbGV0IHsgaGFzaCB9ID0gbG9jYXRpb25cbiAgICBoYXNoID0gaGFzaCAmJiBoYXNoLnN1YnN0cmluZygxKVxuICAgIGlmICghaGFzaCkgcmV0dXJuXG5cbiAgICBjb25zdCBlbDogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoIWVsKSByZXR1cm5cblxuICAgIC8vIElmIHdlIGNhbGwgc2Nyb2xsSW50b1ZpZXcoKSBpbiBoZXJlIHdpdGhvdXQgYSBzZXRUaW1lb3V0XG4gICAgLy8gaXQgd29uJ3Qgc2Nyb2xsIHByb3Blcmx5LlxuICAgIHNldFRpbWVvdXQoKCkgPT4gZWwuc2Nyb2xsSW50b1ZpZXcoKSwgMClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW5cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgeyBSZWFjdERldk92ZXJsYXkgfSA9IHJlcXVpcmUoJ0BuZXh0L3JlYWN0LWRldi1vdmVybGF5L2xpYi9jbGllbnQnKVxuICAgICAgcmV0dXJuIDxSZWFjdERldk92ZXJsYXk+e3RoaXMucHJvcHMuY2hpbGRyZW59PC9SZWFjdERldk92ZXJsYXk+XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBlbWl0dGVyOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxubGV0IENhY2hlZENvbXBvbmVudDogUmVhY3QuQ29tcG9uZW50VHlwZVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAob3B0czogeyB3ZWJwYWNrSE1SPzogYW55IH0gPSB7fSkgPT4ge1xuICAvLyBUaGlzIG1ha2VzIHN1cmUgdGhpcyBzcGVjaWZpYyBsaW5lcyBhcmUgcmVtb3ZlZCBpbiBwcm9kdWN0aW9uXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIHdlYnBhY2tITVIgPSBvcHRzLndlYnBhY2tITVJcbiAgfVxuXG4gIGxldCBpbml0aWFsRXJyID0gaHlkcmF0ZUVyclxuXG4gIHRyeSB7XG4gICAgY29uc3QgYXBwRW50cnlwb2ludCA9IGF3YWl0IHBhZ2VMb2FkZXIucm91dGVMb2FkZXIud2hlbkVudHJ5cG9pbnQoJy9fYXBwJylcbiAgICBpZiAoJ2Vycm9yJyBpbiBhcHBFbnRyeXBvaW50KSB7XG4gICAgICB0aHJvdyBhcHBFbnRyeXBvaW50LmVycm9yXG4gICAgfVxuXG4gICAgY29uc3QgeyBjb21wb25lbnQ6IGFwcCwgZXhwb3J0czogbW9kIH0gPSBhcHBFbnRyeXBvaW50XG4gICAgQ2FjaGVkQXBwID0gYXBwIGFzIEFwcENvbXBvbmVudFxuICAgIGlmIChtb2QgJiYgbW9kLnJlcG9ydFdlYlZpdGFscykge1xuICAgICAgb25QZXJmRW50cnkgPSAoe1xuICAgICAgICBpZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc3RhcnRUaW1lLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIGVudHJ5VHlwZSxcbiAgICAgICAgZW50cmllcyxcbiAgICAgIH0pOiB2b2lkID0+IHtcbiAgICAgICAgLy8gQ29tYmluZXMgdGltZXN0YW1wIHdpdGggcmFuZG9tIG51bWJlciBmb3IgdW5pcXVlIElEXG4gICAgICAgIGNvbnN0IHVuaXF1ZUlEOiBzdHJpbmcgPSBgJHtEYXRlLm5vdygpfS0ke1xuICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICg5ZTEyIC0gMSkpICsgMWUxMlxuICAgICAgICB9YFxuICAgICAgICBsZXQgcGVyZlN0YXJ0RW50cnk6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICAgIGlmIChlbnRyaWVzICYmIGVudHJpZXMubGVuZ3RoKSB7XG4gICAgICAgICAgcGVyZlN0YXJ0RW50cnkgPSBlbnRyaWVzWzBdLnN0YXJ0VGltZVxuICAgICAgICB9XG5cbiAgICAgICAgbW9kLnJlcG9ydFdlYlZpdGFscyh7XG4gICAgICAgICAgaWQ6IGlkIHx8IHVuaXF1ZUlELFxuICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgc3RhcnRUaW1lOiBzdGFydFRpbWUgfHwgcGVyZlN0YXJ0RW50cnksXG4gICAgICAgICAgdmFsdWU6IHZhbHVlID09IG51bGwgPyBkdXJhdGlvbiA6IHZhbHVlLFxuICAgICAgICAgIGxhYmVsOlxuICAgICAgICAgICAgZW50cnlUeXBlID09PSAnbWFyaycgfHwgZW50cnlUeXBlID09PSAnbWVhc3VyZSdcbiAgICAgICAgICAgICAgPyAnY3VzdG9tJ1xuICAgICAgICAgICAgICA6ICd3ZWItdml0YWwnLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VFbnRyeXBvaW50ID1cbiAgICAgIC8vIFRoZSBkZXYgc2VydmVyIGZhaWxzIHRvIHNlcnZlIHNjcmlwdCBhc3NldHMgd2hlbiB0aGVyZSdzIGEgaHlkcmF0aW9uXG4gICAgICAvLyBlcnJvciwgc28gd2UgbmVlZCB0byBza2lwIHdhaXRpbmcgZm9yIHRoZSBlbnRyeXBvaW50LlxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgJiYgaHlkcmF0ZUVyclxuICAgICAgICA/IHsgZXJyb3I6IGh5ZHJhdGVFcnIgfVxuICAgICAgICA6IGF3YWl0IHBhZ2VMb2FkZXIucm91dGVMb2FkZXIud2hlbkVudHJ5cG9pbnQocGFnZSlcbiAgICBpZiAoJ2Vycm9yJyBpbiBwYWdlRW50cnlwb2ludCkge1xuICAgICAgdGhyb3cgcGFnZUVudHJ5cG9pbnQuZXJyb3JcbiAgICB9XG4gICAgQ2FjaGVkQ29tcG9uZW50ID0gcGFnZUVudHJ5cG9pbnQuY29tcG9uZW50XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENhY2hlZENvbXBvbmVudCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYWdlfVwiYFxuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vIFRoaXMgY2F0Y2hlcyBlcnJvcnMgbGlrZSB0aHJvd2luZyBpbiB0aGUgdG9wIGxldmVsIG9mIGEgbW9kdWxlXG4gICAgaW5pdGlhbEVyciA9IGVycm9yXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBjb25zdCB7IGdldE5vZGVFcnJvciB9ID0gcmVxdWlyZSgnQG5leHQvcmVhY3QtZGV2LW92ZXJsYXkvbGliL2NsaWVudCcpXG4gICAgLy8gU2VydmVyLXNpZGUgcnVudGltZSBlcnJvcnMgbmVlZCB0byBiZSByZS10aHJvd24gb24gdGhlIGNsaWVudC1zaWRlIHNvXG4gICAgLy8gdGhhdCB0aGUgb3ZlcmxheSBpcyByZW5kZXJlZC5cbiAgICBpZiAoaW5pdGlhbEVycikge1xuICAgICAgaWYgKGluaXRpYWxFcnIgPT09IGh5ZHJhdGVFcnIpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbGV0IGVycm9yXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IGVycm9yIG9iamVjdC4gV2UgYHRocm93YCBpdCBiZWNhdXNlIHNvbWUgYnJvd3NlcnNcbiAgICAgICAgICAgIC8vIHdpbGwgc2V0IHRoZSBgc3RhY2tgIHdoZW4gdGhyb3duLCBhbmQgd2Ugd2FudCB0byBlbnN1cmUgb3VycyBpc1xuICAgICAgICAgICAgLy8gbm90IG92ZXJyaWRkZW4gd2hlbiB3ZSByZS10aHJvdyBpdCBiZWxvdy5cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihpbml0aWFsRXJyIS5tZXNzYWdlKVxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yID0gZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGVycm9yLm5hbWUgPSBpbml0aWFsRXJyIS5uYW1lXG4gICAgICAgICAgZXJyb3Iuc3RhY2sgPSBpbml0aWFsRXJyIS5zdGFja1xuXG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGdldE5vZGVFcnJvcihlcnJvcilcbiAgICAgICAgICB0aHJvdyBub2RlXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICAvLyBXZSByZXBsYWNlZCB0aGUgc2VydmVyLXNpZGUgZXJyb3Igd2l0aCBhIGNsaWVudC1zaWRlIGVycm9yLCBhbmQgc2hvdWxkXG4gICAgICAvLyBubyBsb25nZXIgcmV3cml0ZSB0aGUgc3RhY2sgdHJhY2UgdG8gYSBOb2RlIGVycm9yLlxuICAgICAgZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRocm93IGluaXRpYWxFcnJcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAod2luZG93Ll9fTkVYVF9QUkVMT0FEUkVBRFkpIHtcbiAgICBhd2FpdCB3aW5kb3cuX19ORVhUX1BSRUxPQURSRUFEWShkeW5hbWljSWRzKVxuICB9XG5cbiAgcm91dGVyID0gY3JlYXRlUm91dGVyKHBhZ2UsIHF1ZXJ5LCBhc1BhdGgsIHtcbiAgICBpbml0aWFsUHJvcHM6IGh5ZHJhdGVQcm9wcyxcbiAgICBwYWdlTG9hZGVyLFxuICAgIEFwcDogQ2FjaGVkQXBwLFxuICAgIENvbXBvbmVudDogQ2FjaGVkQ29tcG9uZW50LFxuICAgIHdyYXBBcHAsXG4gICAgZXJyOiBpbml0aWFsRXJyLFxuICAgIGlzRmFsbGJhY2s6IEJvb2xlYW4oaXNGYWxsYmFjayksXG4gICAgc3Vic2NyaXB0aW9uOiAoaW5mbywgQXBwLCBzY3JvbGwpID0+XG4gICAgICByZW5kZXIoXG4gICAgICAgIE9iamVjdC5hc3NpZ248XG4gICAgICAgICAge30sXG4gICAgICAgICAgT21pdDxSZW5kZXJSb3V0ZUluZm8sICdBcHAnIHwgJ3Njcm9sbCc+LFxuICAgICAgICAgIFBpY2s8UmVuZGVyUm91dGVJbmZvLCAnQXBwJyB8ICdzY3JvbGwnPlxuICAgICAgICA+KHt9LCBpbmZvLCB7XG4gICAgICAgICAgQXBwLFxuICAgICAgICAgIHNjcm9sbCxcbiAgICAgICAgfSkgYXMgUmVuZGVyUm91dGVJbmZvXG4gICAgICApLFxuICAgIGxvY2FsZSxcbiAgICBsb2NhbGVzLFxuICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgZG9tYWluTG9jYWxlcyxcbiAgICBpc1ByZXZpZXcsXG4gIH0pXG5cbiAgY29uc3QgcmVuZGVyQ3R4OiBSZW5kZXJSb3V0ZUluZm8gPSB7XG4gICAgQXBwOiBDYWNoZWRBcHAsXG4gICAgaW5pdGlhbDogdHJ1ZSxcbiAgICBDb21wb25lbnQ6IENhY2hlZENvbXBvbmVudCxcbiAgICBwcm9wczogaHlkcmF0ZVByb3BzLFxuICAgIGVycjogaW5pdGlhbEVycixcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgcmVuZGVyKHJlbmRlckN0eClcbiAgICByZXR1cm4gZW1pdHRlclxuICB9IGVsc2Uge1xuICAgIHJldHVybiB7IGVtaXR0ZXIsIHJlbmRlciwgcmVuZGVyQ3R4IH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVuZGVyKHJlbmRlcmluZ1Byb3BzOiBSZW5kZXJSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgaWYgKHJlbmRlcmluZ1Byb3BzLmVycikge1xuICAgIGF3YWl0IHJlbmRlckVycm9yKHJlbmRlcmluZ1Byb3BzKVxuICAgIHJldHVyblxuICB9XG5cbiAgdHJ5IHtcbiAgICBhd2FpdCBkb1JlbmRlcihyZW5kZXJpbmdQcm9wcylcbiAgfSBjYXRjaCAocmVuZGVyRXJyKSB7XG4gICAgLy8gYnViYmxlIHVwIGNhbmNlbGF0aW9uIGVycm9yc1xuICAgIGlmIChyZW5kZXJFcnIuY2FuY2VsbGVkKSB7XG4gICAgICB0aHJvdyByZW5kZXJFcnJcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgIC8vIEVuc3VyZSB0aGlzIGVycm9yIGlzIGRpc3BsYXllZCBpbiB0aGUgb3ZlcmxheSBpbiBkZXZlbG9wbWVudFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRocm93IHJlbmRlckVyclxuICAgICAgfSlcbiAgICB9XG4gICAgYXdhaXQgcmVuZGVyRXJyb3IoeyAuLi5yZW5kZXJpbmdQcm9wcywgZXJyOiByZW5kZXJFcnIgfSlcbiAgfVxufVxuXG4vLyBUaGlzIG1ldGhvZCBoYW5kbGVzIGFsbCBydW50aW1lIGFuZCBkZWJ1ZyBlcnJvcnMuXG4vLyA0MDQgYW5kIDUwMCBlcnJvcnMgYXJlIHNwZWNpYWwga2luZCBvZiBlcnJvcnNcbi8vIGFuZCB0aGV5IGFyZSBzdGlsbCBoYW5kbGUgdmlhIHRoZSBtYWluIHJlbmRlciBtZXRob2QuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRXJyb3IocmVuZGVyRXJyb3JQcm9wczogUmVuZGVyRXJyb3JQcm9wcyk6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IHsgQXBwLCBlcnIgfSA9IHJlbmRlckVycm9yUHJvcHNcblxuICAvLyBJbiBkZXZlbG9wbWVudCBydW50aW1lIGVycm9ycyBhcmUgY2F1Z2h0IGJ5IG91ciBvdmVybGF5XG4gIC8vIEluIHByb2R1Y3Rpb24gd2UgY2F0Y2ggcnVudGltZSBlcnJvcnMgdXNpbmcgY29tcG9uZW50RGlkQ2F0Y2ggd2hpY2ggd2lsbCB0cmlnZ2VyIHJlbmRlckVycm9yXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgLy8gQSBOZXh0LmpzIHJlbmRlcmluZyBydW50aW1lIGVycm9yIGlzIGFsd2F5cyB1bnJlY292ZXJhYmxlXG4gICAgLy8gRklYTUU6IGxldCdzIG1ha2UgdGhpcyByZWNvdmVyYWJsZSAoZXJyb3IgaW4gR0lQIGNsaWVudC10cmFuc2l0aW9uKVxuICAgIHdlYnBhY2tITVIub25VbnJlY292ZXJhYmxlRXJyb3IoKVxuXG4gICAgLy8gV2UgbmVlZCB0byByZW5kZXIgYW4gZW1wdHkgPEFwcD4gc28gdGhhdCB0aGUgYDxSZWFjdERldk92ZXJsYXk+YCBjYW5cbiAgICAvLyByZW5kZXIgaXRzZWxmLlxuICAgIHJldHVybiBkb1JlbmRlcih7XG4gICAgICBBcHA6ICgpID0+IG51bGwsXG4gICAgICBwcm9wczoge30sXG4gICAgICBDb21wb25lbnQ6ICgpID0+IG51bGwsXG4gICAgICBzdHlsZVNoZWV0czogW10sXG4gICAgfSlcbiAgfVxuXG4gIC8vIE1ha2Ugc3VyZSB3ZSBsb2cgdGhlIGVycm9yIHRvIHRoZSBjb25zb2xlLCBvdGhlcndpc2UgdXNlcnMgY2FuJ3QgdHJhY2sgZG93biBpc3N1ZXMuXG4gIGNvbnNvbGUuZXJyb3IoZXJyKVxuICByZXR1cm4gcGFnZUxvYWRlclxuICAgIC5sb2FkUGFnZSgnL19lcnJvcicpXG4gICAgLnRoZW4oKHsgcGFnZTogRXJyb3JDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0pID0+IHtcbiAgICAgIC8vIEluIHByb2R1Y3Rpb24gd2UgZG8gYSBub3JtYWwgcmVuZGVyIHdpdGggdGhlIGBFcnJvckNvbXBvbmVudGAgYXMgY29tcG9uZW50LlxuICAgICAgLy8gSWYgd2UndmUgZ290dGVuIGhlcmUgdXBvbiBpbml0aWFsIHJlbmRlciwgd2UgY2FuIHVzZSB0aGUgcHJvcHMgZnJvbSB0aGUgc2VydmVyLlxuICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSBuZWVkIHRvIGNhbGwgYGdldEluaXRpYWxQcm9wc2Agb24gYEFwcGAgYmVmb3JlIG1vdW50aW5nLlxuICAgICAgY29uc3QgQXBwVHJlZSA9IHdyYXBBcHAoQXBwKVxuICAgICAgY29uc3QgYXBwQ3R4ID0ge1xuICAgICAgICBDb21wb25lbnQ6IEVycm9yQ29tcG9uZW50LFxuICAgICAgICBBcHBUcmVlLFxuICAgICAgICByb3V0ZXIsXG4gICAgICAgIGN0eDogeyBlcnIsIHBhdGhuYW1lOiBwYWdlLCBxdWVyeSwgYXNQYXRoLCBBcHBUcmVlIH0sXG4gICAgICB9XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFxuICAgICAgICByZW5kZXJFcnJvclByb3BzLnByb3BzXG4gICAgICAgICAgPyByZW5kZXJFcnJvclByb3BzLnByb3BzXG4gICAgICAgICAgOiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCwgYXBwQ3R4KVxuICAgICAgKS50aGVuKChpbml0UHJvcHMpID0+XG4gICAgICAgIGRvUmVuZGVyKHtcbiAgICAgICAgICAuLi5yZW5kZXJFcnJvclByb3BzLFxuICAgICAgICAgIGVycixcbiAgICAgICAgICBDb21wb25lbnQ6IEVycm9yQ29tcG9uZW50LFxuICAgICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICAgIHByb3BzOiBpbml0UHJvcHMsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfSlcbn1cblxubGV0IHJlYWN0Um9vdDogYW55ID0gbnVsbFxubGV0IHNob3VsZEh5ZHJhdGU6IGJvb2xlYW4gPSB0eXBlb2YgUmVhY3RET00uaHlkcmF0ZSA9PT0gJ2Z1bmN0aW9uJ1xuXG5mdW5jdGlvbiByZW5kZXJSZWFjdEVsZW1lbnQoXG4gIGRvbUVsOiBIVE1MRWxlbWVudCxcbiAgZm46IChjYjogKCkgPT4gdm9pZCkgPT4gSlNYLkVsZW1lbnRcbik6IHZvaWQge1xuICAvLyBtYXJrIHN0YXJ0IG9mIGh5ZHJhdGUvcmVuZGVyXG4gIGlmIChTVCkge1xuICAgIHBlcmZvcm1hbmNlLm1hcmsoJ2JlZm9yZVJlbmRlcicpXG4gIH1cblxuICBjb25zdCByZWFjdEVsID0gZm4oc2hvdWxkSHlkcmF0ZSA/IG1hcmtIeWRyYXRlQ29tcGxldGUgOiBtYXJrUmVuZGVyQ29tcGxldGUpXG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfUkVBQ1RfUk9PVCkge1xuICAgIGlmICghcmVhY3RSb290KSB7XG4gICAgICBjb25zdCBjcmVhdGVSb290TmFtZSA9XG4gICAgICAgIHR5cGVvZiAoUmVhY3RET00gYXMgYW55KS51bnN0YWJsZV9jcmVhdGVSb290ID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgPyAndW5zdGFibGVfY3JlYXRlUm9vdCdcbiAgICAgICAgICA6ICdjcmVhdGVSb290J1xuICAgICAgcmVhY3RSb290ID0gKFJlYWN0RE9NIGFzIGFueSlbY3JlYXRlUm9vdE5hbWVdKGRvbUVsLCB7XG4gICAgICAgIGh5ZHJhdGU6IHNob3VsZEh5ZHJhdGUsXG4gICAgICB9KVxuICAgIH1cbiAgICByZWFjdFJvb3QucmVuZGVyKHJlYWN0RWwpXG4gICAgc2hvdWxkSHlkcmF0ZSA9IGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgLy8gVGhlIGNoZWNrIGZvciBgLmh5ZHJhdGVgIGlzIHRoZXJlIHRvIHN1cHBvcnQgUmVhY3QgYWx0ZXJuYXRpdmVzIGxpa2UgcHJlYWN0XG4gICAgaWYgKHNob3VsZEh5ZHJhdGUpIHtcbiAgICAgIFJlYWN0RE9NLmh5ZHJhdGUocmVhY3RFbCwgZG9tRWwpXG4gICAgICBzaG91bGRIeWRyYXRlID0gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3RET00ucmVuZGVyKHJlYWN0RWwsIGRvbUVsKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtYXJrSHlkcmF0ZUNvbXBsZXRlKCk6IHZvaWQge1xuICBpZiAoIVNUKSByZXR1cm5cblxuICBwZXJmb3JtYW5jZS5tYXJrKCdhZnRlckh5ZHJhdGUnKSAvLyBtYXJrIGVuZCBvZiBoeWRyYXRpb25cblxuICBwZXJmb3JtYW5jZS5tZWFzdXJlKFxuICAgICdOZXh0LmpzLWJlZm9yZS1oeWRyYXRpb24nLFxuICAgICduYXZpZ2F0aW9uU3RhcnQnLFxuICAgICdiZWZvcmVSZW5kZXInXG4gIClcbiAgcGVyZm9ybWFuY2UubWVhc3VyZSgnTmV4dC5qcy1oeWRyYXRpb24nLCAnYmVmb3JlUmVuZGVyJywgJ2FmdGVySHlkcmF0ZScpXG5cbiAgaWYgKG9uUGVyZkVudHJ5KSB7XG4gICAgcGVyZm9ybWFuY2UuZ2V0RW50cmllc0J5TmFtZSgnTmV4dC5qcy1oeWRyYXRpb24nKS5mb3JFYWNoKG9uUGVyZkVudHJ5KVxuICB9XG4gIGNsZWFyTWFya3MoKVxufVxuXG5mdW5jdGlvbiBtYXJrUmVuZGVyQ29tcGxldGUoKTogdm9pZCB7XG4gIGlmICghU1QpIHJldHVyblxuXG4gIHBlcmZvcm1hbmNlLm1hcmsoJ2FmdGVyUmVuZGVyJykgLy8gbWFyayBlbmQgb2YgcmVuZGVyXG4gIGNvbnN0IG5hdlN0YXJ0RW50cmllczogUGVyZm9ybWFuY2VFbnRyeUxpc3QgPSBwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlOYW1lKFxuICAgICdyb3V0ZUNoYW5nZScsXG4gICAgJ21hcmsnXG4gIClcblxuICBpZiAoIW5hdlN0YXJ0RW50cmllcy5sZW5ndGgpIHJldHVyblxuXG4gIHBlcmZvcm1hbmNlLm1lYXN1cmUoXG4gICAgJ05leHQuanMtcm91dGUtY2hhbmdlLXRvLXJlbmRlcicsXG4gICAgbmF2U3RhcnRFbnRyaWVzWzBdLm5hbWUsXG4gICAgJ2JlZm9yZVJlbmRlcidcbiAgKVxuICBwZXJmb3JtYW5jZS5tZWFzdXJlKCdOZXh0LmpzLXJlbmRlcicsICdiZWZvcmVSZW5kZXInLCAnYWZ0ZXJSZW5kZXInKVxuICBpZiAob25QZXJmRW50cnkpIHtcbiAgICBwZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlOYW1lKCdOZXh0LmpzLXJlbmRlcicpLmZvckVhY2gob25QZXJmRW50cnkpXG4gICAgcGVyZm9ybWFuY2VcbiAgICAgIC5nZXRFbnRyaWVzQnlOYW1lKCdOZXh0LmpzLXJvdXRlLWNoYW5nZS10by1yZW5kZXInKVxuICAgICAgLmZvckVhY2gob25QZXJmRW50cnkpXG4gIH1cbiAgY2xlYXJNYXJrcygpXG4gIDtbJ05leHQuanMtcm91dGUtY2hhbmdlLXRvLXJlbmRlcicsICdOZXh0LmpzLXJlbmRlciddLmZvckVhY2goKG1lYXN1cmUpID0+XG4gICAgcGVyZm9ybWFuY2UuY2xlYXJNZWFzdXJlcyhtZWFzdXJlKVxuICApXG59XG5cbmZ1bmN0aW9uIGNsZWFyTWFya3MoKTogdm9pZCB7XG4gIDtbXG4gICAgJ2JlZm9yZVJlbmRlcicsXG4gICAgJ2FmdGVySHlkcmF0ZScsXG4gICAgJ2FmdGVyUmVuZGVyJyxcbiAgICAncm91dGVDaGFuZ2UnLFxuICBdLmZvckVhY2goKG1hcmspID0+IHBlcmZvcm1hbmNlLmNsZWFyTWFya3MobWFyaykpXG59XG5cbmZ1bmN0aW9uIEFwcENvbnRhaW5lcih7XG4gIGNoaWxkcmVuLFxufTogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48e30+KTogUmVhY3QuUmVhY3RFbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyXG4gICAgICBmbj17KGVycm9yKSA9PlxuICAgICAgICByZW5kZXJFcnJvcih7IEFwcDogQ2FjaGVkQXBwLCBlcnI6IGVycm9yIH0pLmNhdGNoKChlcnIpID0+XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVuZGVyaW5nIHBhZ2U6ICcsIGVycilcbiAgICAgICAgKVxuICAgICAgfVxuICAgID5cbiAgICAgIDxSb3V0ZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXttYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKX0+XG4gICAgICAgIDxIZWFkTWFuYWdlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2hlYWRNYW5hZ2VyfT5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvSGVhZE1hbmFnZXJDb250ZXh0LlByb3ZpZGVyPlxuICAgICAgPC9Sb3V0ZXJDb250ZXh0LlByb3ZpZGVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmNvbnN0IHdyYXBBcHAgPSAoQXBwOiBBcHBDb21wb25lbnQpID0+IChcbiAgd3JhcHBlZEFwcFByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4pOiBKU1guRWxlbWVudCA9PiB7XG4gIGNvbnN0IGFwcFByb3BzOiBBcHBQcm9wcyA9IHtcbiAgICAuLi53cmFwcGVkQXBwUHJvcHMsXG4gICAgQ29tcG9uZW50OiBDYWNoZWRDb21wb25lbnQsXG4gICAgZXJyOiBoeWRyYXRlRXJyLFxuICAgIHJvdXRlcixcbiAgfVxuICByZXR1cm4gKFxuICAgIDxBcHBDb250YWluZXI+XG4gICAgICA8QXBwIHsuLi5hcHBQcm9wc30gLz5cbiAgICA8L0FwcENvbnRhaW5lcj5cbiAgKVxufVxuXG5sZXQgbGFzdEFwcFByb3BzOiBBcHBQcm9wc1xuZnVuY3Rpb24gZG9SZW5kZXIoaW5wdXQ6IFJlbmRlclJvdXRlSW5mbyk6IFByb21pc2U8YW55PiB7XG4gIGxldCB7IEFwcCwgQ29tcG9uZW50LCBwcm9wcywgZXJyIH06IFJlbmRlclJvdXRlSW5mbyA9IGlucHV0XG4gIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW10gfCB1bmRlZmluZWQgPVxuICAgICdpbml0aWFsJyBpbiBpbnB1dCA/IHVuZGVmaW5lZCA6IGlucHV0LnN0eWxlU2hlZXRzXG4gIENvbXBvbmVudCA9IENvbXBvbmVudCB8fCBsYXN0QXBwUHJvcHMuQ29tcG9uZW50XG4gIHByb3BzID0gcHJvcHMgfHwgbGFzdEFwcFByb3BzLnByb3BzXG5cbiAgY29uc3QgYXBwUHJvcHM6IEFwcFByb3BzID0ge1xuICAgIC4uLnByb3BzLFxuICAgIENvbXBvbmVudCxcbiAgICBlcnIsXG4gICAgcm91dGVyLFxuICB9XG4gIC8vIGxhc3RBcHBQcm9wcyBoYXMgdG8gYmUgc2V0IGJlZm9yZSBSZWFjdERvbS5yZW5kZXIgdG8gYWNjb3VudCBmb3IgUmVhY3REb20gdGhyb3dpbmcgYW4gZXJyb3IuXG4gIGxhc3RBcHBQcm9wcyA9IGFwcFByb3BzXG5cbiAgbGV0IGNhbmNlbGVkOiBib29sZWFuID0gZmFsc2VcbiAgbGV0IHJlc29sdmVQcm9taXNlOiAoKSA9PiB2b2lkXG4gIGNvbnN0IHJlbmRlclByb21pc2UgPSBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgaWYgKGxhc3RSZW5kZXJSZWplY3QpIHtcbiAgICAgIGxhc3RSZW5kZXJSZWplY3QoKVxuICAgIH1cbiAgICByZXNvbHZlUHJvbWlzZSA9ICgpID0+IHtcbiAgICAgIGxhc3RSZW5kZXJSZWplY3QgPSBudWxsXG4gICAgICByZXNvbHZlKClcbiAgICB9XG4gICAgbGFzdFJlbmRlclJlamVjdCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGVkID0gdHJ1ZVxuICAgICAgbGFzdFJlbmRlclJlamVjdCA9IG51bGxcblxuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcignQ2FuY2VsIHJlbmRlcmluZyByb3V0ZScpXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICByZWplY3QoZXJyb3IpXG4gICAgfVxuICB9KVxuXG4gIC8vIFRoaXMgZnVuY3Rpb24gaGFzIGEgcmV0dXJuIHR5cGUgdG8gZW5zdXJlIGl0IGRvZXNuJ3Qgc3RhcnQgcmV0dXJuaW5nIGFcbiAgLy8gUHJvbWlzZS4gSXQgc2hvdWxkIHJlbWFpbiBzeW5jaHJvbm91cy5cbiAgZnVuY3Rpb24gb25TdGFydCgpOiBib29sZWFuIHtcbiAgICBpZiAoXG4gICAgICAhc3R5bGVTaGVldHMgfHxcbiAgICAgIC8vIFdlIHVzZSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudCwgc28gd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZ1xuICAgICAgLy8gdW5sZXNzIHdlJ3JlIGluIHByb2R1Y3Rpb246XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50U3R5bGVUYWdzOiBIVE1MU3R5bGVFbGVtZW50W10gPSBsb29zZVRvQXJyYXk8SFRNTFN0eWxlRWxlbWVudD4oXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzdHlsZVtkYXRhLW4taHJlZl0nKVxuICAgIClcbiAgICBjb25zdCBjdXJyZW50SHJlZnM6IFNldDxzdHJpbmcgfCBudWxsPiA9IG5ldyBTZXQoXG4gICAgICBjdXJyZW50U3R5bGVUYWdzLm1hcCgodGFnKSA9PiB0YWcuZ2V0QXR0cmlidXRlKCdkYXRhLW4taHJlZicpKVxuICAgIClcblxuICAgIGNvbnN0IG5vc2NyaXB0OiBFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnbm9zY3JpcHRbZGF0YS1uLWNzc10nXG4gICAgKVxuICAgIGNvbnN0IG5vbmNlOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkID0gbm9zY3JpcHQ/LmdldEF0dHJpYnV0ZShcbiAgICAgICdkYXRhLW4tY3NzJ1xuICAgIClcblxuICAgIHN0eWxlU2hlZXRzLmZvckVhY2goKHsgaHJlZiwgdGV4dCB9OiB7IGhyZWY6IHN0cmluZzsgdGV4dDogYW55IH0pID0+IHtcbiAgICAgIGlmICghY3VycmVudEhyZWZzLmhhcyhocmVmKSkge1xuICAgICAgICBjb25zdCBzdHlsZVRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgICAgICAgc3R5bGVUYWcuc2V0QXR0cmlidXRlKCdkYXRhLW4taHJlZicsIGhyZWYpXG4gICAgICAgIHN0eWxlVGFnLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCAneCcpXG5cbiAgICAgICAgaWYgKG5vbmNlKSB7XG4gICAgICAgICAgc3R5bGVUYWcuc2V0QXR0cmlidXRlKCdub25jZScsIG5vbmNlKVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZVRhZylcbiAgICAgICAgc3R5bGVUYWcuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gb25IZWFkQ29tbWl0KCk6IHZvaWQge1xuICAgIGlmIChcbiAgICAgIC8vIFdlIHVzZSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudCwgc28gd2UgZG9uJ3QgbmVlZCB0byBkbyBhbnl0aGluZ1xuICAgICAgLy8gdW5sZXNzIHdlJ3JlIGluIHByb2R1Y3Rpb246XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmXG4gICAgICAvLyBXZSBjYW4gc2tpcCB0aGlzIGR1cmluZyBoeWRyYXRpb24uIFJ1bm5pbmcgaXQgd29udCBjYXVzZSBhbnkgaGFybSwgYnV0XG4gICAgICAvLyB3ZSBtYXkgYXMgd2VsbCBzYXZlIHRoZSBDUFUgY3ljbGVzOlxuICAgICAgc3R5bGVTaGVldHMgJiZcbiAgICAgIC8vIEVuc3VyZSB0aGlzIHJlbmRlciB3YXMgbm90IGNhbmNlbGVkXG4gICAgICAhY2FuY2VsZWRcbiAgICApIHtcbiAgICAgIGNvbnN0IGRlc2lyZWRIcmVmczogU2V0PHN0cmluZz4gPSBuZXcgU2V0KHN0eWxlU2hlZXRzLm1hcCgocykgPT4gcy5ocmVmKSlcbiAgICAgIGNvbnN0IGN1cnJlbnRTdHlsZVRhZ3M6IEhUTUxTdHlsZUVsZW1lbnRbXSA9IGxvb3NlVG9BcnJheTxcbiAgICAgICAgSFRNTFN0eWxlRWxlbWVudFxuICAgICAgPihkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzdHlsZVtkYXRhLW4taHJlZl0nKSlcbiAgICAgIGNvbnN0IGN1cnJlbnRIcmVmczogc3RyaW5nW10gPSBjdXJyZW50U3R5bGVUYWdzLm1hcChcbiAgICAgICAgKHRhZykgPT4gdGFnLmdldEF0dHJpYnV0ZSgnZGF0YS1uLWhyZWYnKSFcbiAgICAgIClcblxuICAgICAgLy8gVG9nZ2xlIGA8c3R5bGU+YCB0YWdzIG9uIG9yIG9mZiBkZXBlbmRpbmcgb24gaWYgdGhleSdyZSBuZWVkZWQ6XG4gICAgICBmb3IgKGxldCBpZHggPSAwOyBpZHggPCBjdXJyZW50SHJlZnMubGVuZ3RoOyArK2lkeCkge1xuICAgICAgICBpZiAoZGVzaXJlZEhyZWZzLmhhcyhjdXJyZW50SHJlZnNbaWR4XSkpIHtcbiAgICAgICAgICBjdXJyZW50U3R5bGVUYWdzW2lkeF0ucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY3VycmVudFN0eWxlVGFnc1tpZHhdLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCAneCcpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gUmVvcmRlciBzdHlsZXMgaW50byBpbnRlbmRlZCBvcmRlcjpcbiAgICAgIGxldCByZWZlcmVuY2VOb2RlOiBFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICdub3NjcmlwdFtkYXRhLW4tY3NzXSdcbiAgICAgIClcbiAgICAgIGlmIChcbiAgICAgICAgLy8gVGhpcyBzaG91bGQgYmUgYW4gaW52YXJpYW50OlxuICAgICAgICByZWZlcmVuY2VOb2RlXG4gICAgICApIHtcbiAgICAgICAgc3R5bGVTaGVldHMuZm9yRWFjaCgoeyBocmVmIH06IHsgaHJlZjogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgICBjb25zdCB0YXJnZXRUYWc6IEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIGBzdHlsZVtkYXRhLW4taHJlZj1cIiR7aHJlZn1cIl1gXG4gICAgICAgICAgKVxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIC8vIFRoaXMgc2hvdWxkIGJlIGFuIGludmFyaWFudDpcbiAgICAgICAgICAgIHRhcmdldFRhZ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgcmVmZXJlbmNlTm9kZSEucGFyZW50Tm9kZSEuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAgICAgICB0YXJnZXRUYWcsXG4gICAgICAgICAgICAgIHJlZmVyZW5jZU5vZGUhLm5leHRTaWJsaW5nXG4gICAgICAgICAgICApXG4gICAgICAgICAgICByZWZlcmVuY2VOb2RlID0gdGFyZ2V0VGFnXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICAvLyBGaW5hbGx5LCBjbGVhbiB1cCBzZXJ2ZXIgcmVuZGVyZWQgc3R5bGVzaGVldHM6XG4gICAgICBsb29zZVRvQXJyYXk8SFRNTExpbmtFbGVtZW50PihcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1tkYXRhLW4tcF0nKVxuICAgICAgKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICBlbC5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZChlbClcbiAgICAgIH0pXG5cbiAgICAgIC8vIEZvcmNlIGJyb3dzZXIgdG8gcmVjb21wdXRlIGxheW91dCwgd2hpY2ggc2hvdWxkIHByZXZlbnQgYSBmbGFzaCBvZlxuICAgICAgLy8gdW5zdHlsZWQgY29udGVudDpcbiAgICAgIGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSwgJ2hlaWdodCcpXG4gICAgfVxuXG4gICAgaWYgKGlucHV0LnNjcm9sbCkge1xuICAgICAgd2luZG93LnNjcm9sbFRvKGlucHV0LnNjcm9sbC54LCBpbnB1dC5zY3JvbGwueSlcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBvblJvb3RDb21taXQoKTogdm9pZCB7XG4gICAgcmVzb2x2ZVByb21pc2UoKVxuICB9XG5cbiAgb25TdGFydCgpXG5cbiAgY29uc3QgZWxlbTogSlNYLkVsZW1lbnQgPSAoXG4gICAgPD5cbiAgICAgIDxIZWFkIGNhbGxiYWNrPXtvbkhlYWRDb21taXR9IC8+XG4gICAgICA8QXBwQ29udGFpbmVyPlxuICAgICAgICA8QXBwIHsuLi5hcHBQcm9wc30gLz5cbiAgICAgICAgPFBvcnRhbCB0eXBlPVwibmV4dC1yb3V0ZS1hbm5vdW5jZXJcIj5cbiAgICAgICAgICA8Um91dGVBbm5vdW5jZXIgLz5cbiAgICAgICAgPC9Qb3J0YWw+XG4gICAgICA8L0FwcENvbnRhaW5lcj5cbiAgICA8Lz5cbiAgKVxuXG4gIC8vIFdlIGNhdGNoIHJ1bnRpbWUgZXJyb3JzIHVzaW5nIGNvbXBvbmVudERpZENhdGNoIHdoaWNoIHdpbGwgdHJpZ2dlciByZW5kZXJFcnJvclxuICByZW5kZXJSZWFjdEVsZW1lbnQoYXBwRWxlbWVudCEsIChjYWxsYmFjaykgPT4gKFxuICAgIDxSb290IGNhbGxiYWNrcz17W2NhbGxiYWNrLCBvblJvb3RDb21taXRdfT5cbiAgICAgIHtwcm9jZXNzLmVudi5fX05FWFRfU1RSSUNUX01PREUgPyAoXG4gICAgICAgIDxSZWFjdC5TdHJpY3RNb2RlPntlbGVtfTwvUmVhY3QuU3RyaWN0TW9kZT5cbiAgICAgICkgOiAoXG4gICAgICAgIGVsZW1cbiAgICAgICl9XG4gICAgPC9Sb290PlxuICApKVxuXG4gIHJldHVybiByZW5kZXJQcm9taXNlXG59XG5cbmZ1bmN0aW9uIFJvb3Qoe1xuICBjYWxsYmFja3MsXG4gIGNoaWxkcmVuLFxufTogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48e1xuICBjYWxsYmFja3M6IEFycmF5PCgpID0+IHZvaWQ+XG59Pik6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gIC8vIFdlIHVzZSBgdXNlTGF5b3V0RWZmZWN0YCB0byBndWFyYW50ZWUgdGhlIGNhbGxiYWNrcyBhcmUgZXhlY3V0ZWRcbiAgLy8gYXMgc29vbiBhcyBSZWFjdCBmbHVzaGVzIHRoZSB1cGRhdGVcbiAgUmVhY3QudXNlTGF5b3V0RWZmZWN0KCgpID0+IGNhbGxiYWNrcy5mb3JFYWNoKChjYWxsYmFjaykgPT4gY2FsbGJhY2soKSksIFtcbiAgICBjYWxsYmFja3MsXG4gIF0pXG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfVEVTVF9NT0RFKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIHdpbmRvdy5fX05FWFRfSFlEUkFURUQgPSB0cnVlXG5cbiAgICAgIGlmICh3aW5kb3cuX19ORVhUX0hZRFJBVEVEX0NCKSB7XG4gICAgICAgIHdpbmRvdy5fX05FWFRfSFlEUkFURURfQ0IoKVxuICAgICAgfVxuICAgIH0sIFtdKVxuICB9XG4gIC8vIFdlIHNob3VsZCBhc2sgdG8gbWVhc3VyZSB0aGUgV2ViIFZpdGFscyBhZnRlciByZW5kZXJpbmcgY29tcGxldGVzIHNvIHdlXG4gIC8vIGRvbid0IGNhdXNlIGFueSBoeWRyYXRpb24gZGVsYXk6XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbWVhc3VyZVdlYlZpdGFscyhvblBlcmZFbnRyeSlcbiAgfSwgW10pXG4gIHJldHVybiBjaGlsZHJlbiBhcyBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuLy8gRHVtbXkgY29tcG9uZW50IHRoYXQgd2UgcmVuZGVyIGFzIGEgY2hpbGQgb2YgUm9vdCBzbyB0aGF0IHdlIGNhblxuLy8gdG9nZ2xlIHRoZSBjb3JyZWN0IHN0eWxlcyBiZWZvcmUgdGhlIHBhZ2UgaXMgcmVuZGVyZWQuXG5mdW5jdGlvbiBIZWFkKHsgY2FsbGJhY2sgfTogeyBjYWxsYmFjazogKCkgPT4gdm9pZCB9KTogbnVsbCB7XG4gIC8vIFdlIHVzZSBgdXNlTGF5b3V0RWZmZWN0YCB0byBndWFyYW50ZWUgdGhlIGNhbGxiYWNrIGlzIGV4ZWN1dGVkXG4gIC8vIGFzIHNvb24gYXMgUmVhY3QgZmx1c2hlcyB0aGUgdXBkYXRlLlxuICBSZWFjdC51c2VMYXlvdXRFZmZlY3QoKCkgPT4gY2FsbGJhY2soKSwgW2NhbGxiYWNrXSlcbiAgcmV0dXJuIG51bGxcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=