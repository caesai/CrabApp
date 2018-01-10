webpackJsonp([1],{

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(160);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRedux = __webpack_require__(18);

var _reactRouterDom = __webpack_require__(30);

var _reactRouterRedux = __webpack_require__(106);

var _createBrowserHistory = __webpack_require__(93);

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _store = __webpack_require__(215);

var _store2 = _interopRequireDefault(_store);

__webpack_require__(221);

var _Header = __webpack_require__(223);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(227);

var _Footer2 = _interopRequireDefault(_Footer);

var _PopUp = __webpack_require__(228);

var _PopUp2 = _interopRequireDefault(_PopUp);

var _routes = __webpack_require__(229);

var _routes2 = _interopRequireDefault(_routes);

var _actions = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)({});

var history = (0, _createBrowserHistory2.default)();

var mapStateToProps = function mapStateToProps(state) {
  return {
    popUpOpened: state.popups.popUpOpened
  };
};

var token = localStorage.getItem('token');
if (token !== null) {
  store.dispatch(_actions.actions.auth({
    name: 'admin',
    isAuthenticated: true,
    token: token
  }));
}

var Root = function (_React$Component) {
  _inherits(Root, _React$Component);

  function Root(props) {
    _classCallCheck(this, Root);

    return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).call(this, props));
  }

  _createClass(Root, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_routes2.default, null)
        ),
        _react2.default.createElement(_Footer2.default, null),
        this.props.popUpOpened ? _react2.default.createElement(_PopUp2.default, null) : null
      );
    }
  }]);

  return Root;
}(_react2.default.Component);

Root = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(Root));

var WebApp = function (_React$Component2) {
  _inherits(WebApp, _React$Component2);

  function WebApp() {
    _classCallCheck(this, WebApp);

    return _possibleConstructorReturn(this, (WebApp.__proto__ || Object.getPrototypeOf(WebApp)).apply(this, arguments));
  }

  _createClass(WebApp, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
          _reactRouterRedux.ConnectedRouter,
          { history: history },
          _react2.default.createElement(Root, null)
        )
      );
    }
  }]);

  return WebApp;
}(_react2.default.Component);

exports.default = WebApp;


_reactDom2.default.render(_react2.default.createElement(WebApp, { ref: function ref(instance) {
    if (instance) {
      // do something
    }
  } }), document.getElementById('webapp'), function () {
  console.log(this); // instance
});

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var actions = exports.actions = {
  openPopUp: function openPopUp(payload) {
    return {
      type: 'OPEN_POPUP',
      payload: payload
    };
  },
  closePopUp: function closePopUp() {
    return {
      type: 'CLOSE_POPUP'
    };
  },
  throwPopUpError: function throwPopUpError(errmsg) {
    return {
      type: 'CATCH_POPUP_ERROR',
      err: errmsg
    };
  },
  login: function login(payload) {
    return function (dispatch) {
      dispatch({
        type: 'LOGIN_REQUEST',
        payload: {
          name: payload.name,
          nextUrl: '/profile'
        }
      });
    };
  },

  auth: function auth(payload) {
    return {
      type: 'LOGIN_SUCCESS',
      payload: payload
    };
  },
  logout: function logout() {
    return {
      type: 'LOGOUT'
    };
  },
  loadContract: function loadContract(payload) {
    return {
      type: 'LOAD_CONTRACT',
      payload: payload
    };
  },
  loadCommunties: function loadCommunties(payload) {
    return {
      type: 'LOAD_COMMUNITIES',
      payload: payload
    };
  },
  selectComm: function selectComm(payload) {
    return {
      type: 'SELECT_COMMUNITY',
      payload: payload
    };
  }
};

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(56);

var _reduxThunk = __webpack_require__(216);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(217);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore(initialState) {
  var middleware = (0, _redux.applyMiddleware)(_reduxThunk2.default);
  var createStoreWithMiddleware = (0, _redux.compose)(middleware, typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : function (f) {
    return f;
  })(_redux.createStore);

  var store = createStoreWithMiddleware(_reducers2.default, initialState);

  return store;
}

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _popups = __webpack_require__(218);

var _popups2 = _interopRequireDefault(_popups);

var _auth = __webpack_require__(219);

var _auth2 = _interopRequireDefault(_auth);

var _currentGames = __webpack_require__(220);

var _currentGames2 = _interopRequireDefault(_currentGames);

var _reactRouterRedux = __webpack_require__(106);

var _redux = __webpack_require__(56);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({ popups: _popups2.default, user: _auth2.default, currentGames: _currentGames2.default, routing: _reactRouterRedux.routerReducer });

exports.default = rootReducer;

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = popups;
var reducerState = {
  loggedIn: false,
  popUpOpened: false,
  popUpBody: {
    title: '',
    body: ''
  },
  err: ''
};

function popups() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : reducerState;
  var action = arguments[1];

  switch (action.type) {
    case 'OPEN_POPUP':
      return Object.assign({}, state, {
        popUpOpened: true,
        popUpBody: action.payload
      });
    case 'CLOSE_POPUP':
      return Object.assign({}, state, {
        popUpOpened: false,
        popUpBody: {},
        err: ''
      });
    case 'CATCH_POPUP_ERROR':
      return Object.assign({}, state, {
        err: action.err
      });
    default:
      return state;
  }
}

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = user;
var initialState = {
  isAuthenticating: false,
  isAuthenticated: false,
  token: '',
  name: '',
  redirectingTo: ''
};

function user() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'LOGIN_REQUEST':
      return Object.assign({}, state, {
        isAuthenticating: true,
        name: action.payload.name,
        redirectingTo: action.payload.nextUrl
      });
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return Object.assign({}, state, {
        isAuthenticating: false,
        name: action.payload.name,
        isAuthenticated: action.payload.isAuthenticated,
        token: action.payload.token
      });
    case 'LOGOUT':
      localStorage.removeItem('token');
      return initialState;
    default:
      return state;
  }
}

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = currentGames;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  contractLoaded: false,
  communitiesQnt: 0,
  communities: [],
  selectedComm: ''
};

function currentGames() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'LOAD_CONTRACT':
      return Object.assign({}, state, {
        contractLoaded: action.payload.contractLoaded,
        communitiesQnt: action.payload.qnt
      });
    case 'LOAD_COMMUNITIES':
      return Object.assign({}, state, {
        communities: [].concat(_toConsumableArray(state.communities), [action.payload])
      });
    case 'SELECT_COMMUNITY':
      return Object.assign({}, state, {
        selectedComm: action.payload.selectedComm
      });
    default:
      return state;
  }
}

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(18);

var _actions = __webpack_require__(21);

var _utils = __webpack_require__(224);

var _MainMenu = __webpack_require__(226);

var _MainMenu2 = _interopRequireDefault(_MainMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    isAuthenticated: state.user.isAuthenticated,
    userName: state.user.name,
    popUpOpened: state.popups.popUpOpened
  };
};

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'header' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'ul',
            null,
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { href: '/' },
                'Main Page'
              )
            ),
            _react2.default.createElement(_MainMenu2.default, null)
          ),
          _react2.default.createElement(
            'div',
            { className: 'logInBtn' },
            !this.props.isAuthenticated ? _react2.default.createElement(
              'a',
              { href: '#', onClick: function onClick(e) {
                  e.preventDefault();
                  _this2.props.dispatch(_actions.actions.openPopUp(_utils.signInPopUp));
                } },
              'Sign In/Up'
            ) : _react2.default.createElement(
              'div',
              { className: 'userMenu' },
              _react2.default.createElement(
                'p',
                null,
                this.props.userName
              ),
              _react2.default.createElement(
                'ul',
                { className: 'userMenuList' },
                _react2.default.createElement(
                  'li',
                  null,
                  _react2.default.createElement(
                    'a',
                    { href: '/profile' },
                    'Profile'
                  )
                ),
                _react2.default.createElement(
                  'li',
                  { onClick: function onClick() {
                      _this2.props.dispatch(_actions.actions.logout());
                    } },
                  'Log Out'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react2.default.Component);

Header = (0, _reactRedux.connect)(mapStateToProps)(Header);

exports.default = Header;

/***/ }),

/***/ 224:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newsLetterPopUp = exports.signUpPopUp = exports.signInPopUp = undefined;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(18);

var _actions = __webpack_require__(21);

var _signInForm = __webpack_require__(225);

var _signInForm2 = _interopRequireDefault(_signInForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var signUpForm = function signUpForm() {
  return _react2.default.createElement(
    'form',
    { onSubmit: function onSubmit(e) {
        e.preventDefault();
      } },
    _react2.default.createElement(
      'p',
      null,
      'Enter your login'
    ),
    _react2.default.createElement('input', { type: 'text' }),
    _react2.default.createElement(
      'p',
      null,
      'Enter your email'
    ),
    _react2.default.createElement('input', { type: 'text' }),
    _react2.default.createElement(
      'p',
      null,
      'Enter password'
    ),
    _react2.default.createElement('input', { type: 'password' }),
    _react2.default.createElement(
      'p',
      null,
      'Confirm your password'
    ),
    _react2.default.createElement('input', { type: 'password' }),
    _react2.default.createElement(
      'button',
      { type: 'submit' },
      'Submit'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Or use your FaceBook account to authorize'
    )
  );
};

var signInUpBtns = function signInUpBtns(props) {
  return _react2.default.createElement(
    'div',
    { onClick: function onClick(e) {
        e.currentTarget.querySelector('.active').classList.remove('active');
        if (e.target && e.target.nodeName === 'H3') {
          var btnValue = e.target.innerText;
          e.target.classList.add('active');
          props.dispatch(_actions.actions.openPopUp(btnValue === 'Sign Up' ? signUpPopUp : signInPopUp));
        }
      } },
    _react2.default.createElement(
      'h3',
      { className: 'active' },
      'Sign In'
    ),
    _react2.default.createElement(
      'h3',
      null,
      'Sign Up'
    )
  );
};

var newsLetter = function newsLetter(props) {
  return _react2.default.createElement(
    'form',
    { onSubmit: function onSubmit(e) {
        e.preventDefault();
        var inputs = e.target.querySelectorAll('input');
        try {
          inputs.forEach(function (val) {
            if (val.value === '') {
              throw e;
            }
          });
        } catch (e) {
          props.dispatch(_actions.actions.throwPopUpError('Invalid email address'));
        }
      } },
    _react2.default.createElement(
      'p',
      null,
      'Enter your email to subscribe'
    ),
    _react2.default.createElement('input', { type: 'text' }),
    _react2.default.createElement(
      'p',
      { className: 'errormsg' },
      props.err ? props.err : null
    ),
    _react2.default.createElement(
      'button',
      { type: 'submit' },
      'Submit'
    )
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    title: state.popups.popUpBody.title,
    btns: state.popups.popUpBody.btns,
    body: state.popups.popUpBody.body
  };
};

var mapErrorsToProps = function mapErrorsToProps(state) {
  return {
    err: state.popups.err
  };
};

signInUpBtns = (0, _reactRedux.connect)(mapStateToProps)(signInUpBtns);
newsLetter = (0, _reactRedux.connect)(mapErrorsToProps)(newsLetter);

var signInPopUp = exports.signInPopUp = {
  btns: signInUpBtns,
  body: _signInForm2.default,
  err: ''
};

var signUpPopUp = exports.signUpPopUp = {
  btns: signInUpBtns,
  body: signUpForm,
  err: ''
};

var newsLetterPopUp = exports.newsLetterPopUp = {
  title: 'Subscribe to our newsletter',
  body: newsLetter
};

/***/ }),

/***/ 225:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(18);

var _reactRouterDom = __webpack_require__(30);

var _actions = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var signInForm = function (_React$Component) {
  _inherits(signInForm, _React$Component);

  function signInForm() {
    _classCallCheck(this, signInForm);

    return _possibleConstructorReturn(this, (signInForm.__proto__ || Object.getPrototypeOf(signInForm)).apply(this, arguments));
  }

  _createClass(signInForm, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'form',
        { onSubmit: function onSubmit(e) {
            e.preventDefault();
            var input = e.target.querySelector('input');
            // Fake authentication
            if (input.value !== 'admin') {
              _this2.props.dispatch(_actions.actions.throwPopUpError('Invalid login or password'));
            } else {
              _this2.props.dispatch(_actions.actions.login({
                name: input.value
              }));
              setTimeout(function () {
                if (_this2.props.isAuthenticating) {
                  _this2.props.dispatch(_actions.actions.auth({
                    name: 'admin',
                    isAuthenticated: true,
                    token: 'serverToken'
                  }));
                }
                _this2.props.dispatch(_actions.actions.closePopUp());
              }, 1000);
            }
            // Fake authentication
          } },
        _react2.default.createElement(
          'p',
          null,
          'Enter your login or email'
        ),
        _react2.default.createElement('input', { type: 'text' }),
        _react2.default.createElement(
          'p',
          null,
          'Enter password'
        ),
        _react2.default.createElement('input', { type: 'password' }),
        _react2.default.createElement(
          'button',
          { type: 'submit' },
          'Submit'
        ),
        _react2.default.createElement(
          'p',
          { className: 'errormsg' },
          this.props.err ? this.props.err : null
        ),
        _react2.default.createElement(
          'p',
          null,
          'Or use your FaceBook account to authorize'
        )
      );
    }
  }]);

  return signInForm;
}(_react2.default.Component);

var authStateToProps = function authStateToProps(state) {
  return {
    isAuthenticating: state.user.isAuthenticating,
    redirectingTo: state.user.redirectingTo
  };
};

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(authStateToProps)(signInForm));

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainMenu = function (_React$Component) {
  _inherits(MainMenu, _React$Component);

  function MainMenu() {
    _classCallCheck(this, MainMenu);

    return _possibleConstructorReturn(this, (MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).apply(this, arguments));
  }

  _createClass(MainMenu, [{
    key: "render",
    value: function render() {
      return [_react2.default.createElement(
        "li",
        { key: "1" },
        "Statement"
      ), _react2.default.createElement(
        "li",
        { key: "2" },
        "News"
      ), _react2.default.createElement(
        "li",
        { key: "3" },
        "Whitepaper"
      ), _react2.default.createElement(
        "li",
        { key: "4" },
        "Roadmap"
      ), _react2.default.createElement(
        "li",
        { key: "5" },
        "Rules"
      )];
    }
  }]);

  return MainMenu;
}(_react2.default.Component);

exports.default = MainMenu;

/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'p',
          null,
          '\xA92018 Web App'
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(18);

var _actions = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    popUpOpened: state.popups.popUpOpened,
    popUpBody: {
      title: state.popups.popUpBody.title,
      btns: state.popups.popUpBody.btns,
      body: state.popups.popUpBody.body
    }
  };
};

var PopUp = function (_React$Component) {
  _inherits(PopUp, _React$Component);

  function PopUp() {
    _classCallCheck(this, PopUp);

    return _possibleConstructorReturn(this, (PopUp.__proto__ || Object.getPrototypeOf(PopUp)).apply(this, arguments));
  }

  _createClass(PopUp, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'blackbg', onClick: function onClick(e) {
            if (e.target === e.currentTarget) {
              _this2.props.dispatch(_actions.actions.closePopUp());
            }
          } },
        _react2.default.createElement(
          'div',
          { className: 'popUp' },
          _react2.default.createElement(
            'div',
            { className: 'popUpCls', onClick: function onClick() {
                _this2.props.dispatch(_actions.actions.closePopUp());
              } },
            'x'
          ),
          _react2.default.createElement(
            'div',
            { className: 'popUpHead' },
            _react2.default.createElement(
              'h3',
              null,
              this.props.popUpBody.title && this.props.popUpBody.title
            ),
            this.props.popUpBody.btns ? _react2.default.createElement(this.props.popUpBody.btns, null) : null
          ),
          _react2.default.createElement(
            'div',
            { className: 'popUpBody' },
            _react2.default.createElement(this.props.popUpBody.body, null)
          )
        )
      );
    }
  }]);

  return PopUp;
}(_react2.default.Component);

exports.default = (0, _reactRedux.connect)(mapStateToProps)(PopUp);

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(30);

var _AuthenticatedComponent = __webpack_require__(230);

var _AuthenticatedComponent2 = _interopRequireDefault(_AuthenticatedComponent);

var _MainPage = __webpack_require__(231);

var _MainPage2 = _interopRequireDefault(_MainPage);

var _Profile = __webpack_require__(393);

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Routes = function Routes() {
  return _react2.default.createElement(
    _reactRouterDom.Switch,
    null,
    _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _MainPage2.default }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/profile', component: (0, _AuthenticatedComponent2.default)(_Profile2.default) })
  );
};

exports.default = Routes;

/***/ }),

/***/ 230:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = requireAuthentication;

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(18);

var _reactRouterDom = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function requireAuthentication(Component) {
  var AuthenticatedComponent = function (_React$Component) {
    _inherits(AuthenticatedComponent, _React$Component);

    function AuthenticatedComponent() {
      _classCallCheck(this, AuthenticatedComponent);

      return _possibleConstructorReturn(this, (AuthenticatedComponent.__proto__ || Object.getPrototypeOf(AuthenticatedComponent)).apply(this, arguments));
    }

    _createClass(AuthenticatedComponent, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        this.checkAuth(this.props.user);
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        this.checkAuth(nextProps.user);
      }
    }, {
      key: 'checkAuth',
      value: function checkAuth(user) {
        var _this2 = this;

        if (!user.isAuthenticated) {
          setTimeout(function () {
            _this2.props.history.push('/');
          }, 2000);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          this.props.user.isAuthenticated === true ? _react2.default.createElement(Component, this.props) : _react2.default.createElement(
            'div',
            { className: 'container' },
            _react2.default.createElement(
              'p',
              null,
              'You need to be authenticated to see this page content'
            )
          )
        );
      }
    }]);

    return AuthenticatedComponent;
  }(_react2.default.Component);

  function mapStateToProps(state) {
    return {
      user: state.user
    };
  }

  return (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(AuthenticatedComponent));
}

/***/ }),

/***/ 231:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _TopBlock = __webpack_require__(232);

var _TopBlock2 = _interopRequireDefault(_TopBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainPage = function (_React$Component) {
  _inherits(MainPage, _React$Component);

  function MainPage() {
    _classCallCheck(this, MainPage);

    return _possibleConstructorReturn(this, (MainPage.__proto__ || Object.getPrototypeOf(MainPage)).apply(this, arguments));
  }

  _createClass(MainPage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(_TopBlock2.default, null)
      );
    }
  }]);

  return MainPage;
}(_react2.default.Component);

exports.default = MainPage;

/***/ }),

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(18);

var _reactRouterDom = __webpack_require__(30);

var _actions = __webpack_require__(21);

var _CurrentGames = __webpack_require__(233);

var _CurrentGames2 = _interopRequireDefault(_CurrentGames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    popUpOpened: state.popups.popUpOpened,
    location: state.routing
  };
};

var TopBlock = function (_React$Component) {
  _inherits(TopBlock, _React$Component);

  function TopBlock() {
    _classCallCheck(this, TopBlock);

    return _possibleConstructorReturn(this, (TopBlock.__proto__ || Object.getPrototypeOf(TopBlock)).apply(this, arguments));
  }

  _createClass(TopBlock, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Crab bucket'
        ),
        _react2.default.createElement(
          'h2',
          null,
          'Current game:'
        ),
        _react2.default.createElement(_CurrentGames2.default, null)
      );
    }
  }]);

  return TopBlock;
}(_react2.default.Component);

exports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(TopBlock));

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _web = __webpack_require__(234);

var _web2 = _interopRequireDefault(_web);

var _abi = __webpack_require__(392);

var _abi2 = _interopRequireDefault(_abi);

var _actions = __webpack_require__(21);

var _reactRedux = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var web3 = new _web2.default(global.web3.currentProvider);
var contractAddress = '0xDaa7fF74c625b3feE326c62f6DC7D3d0C378088a';
var contract = new web3.eth.Contract(_abi2.default, contractAddress);

var mapStateToProps = function mapStateToProps(state) {
  return {
    contractLoaded: state.currentGames.contractLoaded,
    communitiesQnt: state.currentGames.communitiesQnt,
    communities: state.currentGames.communities,
    selectedComm: state.currentGames.selectedComm
  };
};

var voteForm = function voteForm(props) {
  return _react2.default.createElement(
    'form',
    { onSubmit: function onSubmit(e) {
        e.preventDefault();
        var senderAddr = e.currentTarget.querySelector('input').value;
        contract.methods.voteForCommunity(props.selectedComm).send({ from: senderAddr.toString() }).then(function (reciept) {
          console.log(reciept);
        });
        props.dispatch(_actions.actions.closePopUp());
      } },
    _react2.default.createElement(
      'p',
      null,
      'Enter your address'
    ),
    _react2.default.createElement('input', { type: 'text' }),
    _react2.default.createElement(
      'button',
      { type: 'submit' },
      'Vote'
    )
  );
};

var CurrentGames = function (_React$Component) {
  _inherits(CurrentGames, _React$Component);

  function CurrentGames(props) {
    _classCallCheck(this, CurrentGames);

    var _this = _possibleConstructorReturn(this, (CurrentGames.__proto__ || Object.getPrototypeOf(CurrentGames)).call(this, props));

    _this.getCommunitiesData = _this.getCommunitiesData.bind(_this);
    return _this;
  }

  _createClass(CurrentGames, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      contract.methods.communitiesNumber().call().then(function (qnt) {
        _this2.props.dispatch(_actions.actions.loadContract({
          contractLoaded: true,
          qnt: qnt
        }));
      });
      setTimeout(function () {
        if (_this2.props.contractLoaded) {
          for (var i = 0; i <= _this2.props.communitiesQnt - 1; i++) {
            _this2.getCommunitiesData(i);
          }
        }
      }, 1000);
    }
  }, {
    key: 'getCommunitiesData',
    value: function getCommunitiesData(index) {
      var _this3 = this;

      var community = {
        name: '',
        votes: 0
      };
      contract.methods.communities(index).call().then(function (name) {
        community.name = name;
      });
      contract.methods.votes(index).call().then(function (votes) {
        community.votes = votes;
      });
      setTimeout(function () {
        _this3.props.dispatch(_actions.actions.loadCommunties(community));
      }, 1000);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'table',
        { className: 'gameTable' },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Name'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Votes'
            ),
            _react2.default.createElement('th', null)
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          this.props.communities.map(function (comm, key) {
            return _react2.default.createElement(
              'tr',
              { key: key },
              _react2.default.createElement(
                'td',
                null,
                comm.name
              ),
              _react2.default.createElement(
                'td',
                null,
                comm.votes
              ),
              _react2.default.createElement(
                'td',
                { className: 'btnTd' },
                _react2.default.createElement(
                  'button',
                  { onClick: function onClick() {
                      _this4.props.dispatch(_actions.actions.selectComm({
                        selectedComm: key
                      }));
                      _this4.props.dispatch(_actions.actions.openPopUp({
                        title: 'Vote for ' + comm.name,
                        body: voteForm
                      }));
                    } },
                  'Vote'
                )
              )
            );
          })
        )
      );
    }
  }]);

  return CurrentGames;
}(_react2.default.Component);

voteForm = (0, _reactRedux.connect)(mapStateToProps)(voteForm);
CurrentGames = (0, _reactRedux.connect)(mapStateToProps)(CurrentGames);

exports.default = CurrentGames;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 284:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 392:
/***/ (function(module, exports) {

module.exports = [{"constant":true,"inputs":[],"name":"challengeStarted","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"uint256"}],"name":"voteBalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"challengeDuration","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getTheTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"communityIndex","type":"uint32"}],"name":"voteForCommunity","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"getTheReward","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"checkEndOfChallenge","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"prizeInWei","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"votes","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"resetMistCallPayload","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"computeVotePrice","outputs":[{"name":"price","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"theWinnerIndex","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"participant","type":"address"},{"name":"communityIndex","type":"uint32"}],"name":"computeTheReward","outputs":[{"name":"reward","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"isVotingPeriod","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"communitiesNumber","outputs":[{"name":"","type":"uint32"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"communities","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"amount","type":"uint256"},{"name":"communityIndex","type":"uint32"}],"name":"transferVotes","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"communityName","type":"string"}],"name":"createCommunity","outputs":[],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"theWinnerIs","outputs":[{"name":"community","type":"uint32"}],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"communityIndex","type":"uint32"},{"indexed":false,"name":"communityName","type":"string"},{"indexed":false,"name":"votes","type":"uint256"},{"indexed":false,"name":"creator","type":"address"}],"name":"NewCommunity","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"communityIndex","type":"uint32"},{"indexed":false,"name":"votes","type":"uint256"}],"name":"NewVotesFor","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"communityIndex","type":"uint32"},{"indexed":false,"name":"votes","type":"uint256"}],"name":"TransferVotes","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"communityWinnerIndex","type":"uint32"},{"indexed":false,"name":"votesWinner","type":"uint256"}],"name":"EndOfChallenge","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"participant","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"RewardWasPaid","type":"event"}]

/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Profile = function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
  }

  _createClass(Profile, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'h1',
          null,
          'Profile'
        )
      );
    }
  }]);

  return Profile;
}(_react2.default.Component);

exports.default = Profile;

/***/ })

},[157]);