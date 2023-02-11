"use strict";

Liferay.Loader.define("my-react-app@1.0.0/App", ['module', 'exports', 'require', 'my-react-app$react', '@my-react-app$clayui/table', '@my-react-app$clayui/form', '@my-react-app$clayui/button', '@my-react-app$clayui/drop-down'], function (module, exports, require) {
  var define = undefined;
  var global = window;
  {
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      }, _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;
    var _react = _interopRequireWildcard(require("my-react-app$react"));
    var _table = _interopRequireDefault(require("@my-react-app$clayui/table"));
    var _form = _interopRequireWildcard(require("@my-react-app$clayui/form"));
    var _button = _interopRequireDefault(require("@my-react-app$clayui/button"));
    var _dropDown = _interopRequireDefault(require("@my-react-app$clayui/drop-down"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function") return null;var cacheBabelInterop = new WeakMap();var cacheNodeInterop = new WeakMap();return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
        return { "default": obj };
      }var cache = _getRequireWildcardCache(nodeInterop);if (cache && cache.has(obj)) {
        return cache.get(obj);
      }var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }newObj["default"] = obj;if (cache) {
        cache.set(obj, newObj);
      }return newObj;
    }
    function _regeneratorRuntime() {
      "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
      _regeneratorRuntime = function _regeneratorRuntime() {
        return exports;
      };var exports = {},
          Op = Object.prototype,
          hasOwn = Op.hasOwnProperty,
          defineProperty = Object.defineProperty || function (obj, key, desc) {
        obj[key] = desc.value;
      },
          $Symbol = "function" == typeof Symbol ? Symbol : {},
          iteratorSymbol = $Symbol.iterator || "@@iterator",
          asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
          toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";function define(obj, key, value) {
        return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key];
      }try {
        define({}, "");
      } catch (err) {
        define = function define(obj, key, value) {
          return obj[key] = value;
        };
      }function wrap(innerFn, outerFn, self, tryLocsList) {
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
            generator = Object.create(protoGenerator.prototype),
            context = new Context(tryLocsList || []);return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator;
      }function tryCatch(fn, obj, arg) {
        try {
          return { type: "normal", arg: fn.call(obj, arg) };
        } catch (err) {
          return { type: "throw", arg: err };
        }
      }exports.wrap = wrap;var ContinueSentinel = {};function Generator() {}function GeneratorFunction() {}function GeneratorFunctionPrototype() {}var IteratorPrototype = {};define(IteratorPrototype, iteratorSymbol, function () {
        return this;
      });var getProto = Object.getPrototypeOf,
          NativeIteratorPrototype = getProto && getProto(getProto(values([])));NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          define(prototype, method, function (arg) {
            return this._invoke(method, arg);
          });
        });
      }function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);if ("throw" !== record.type) {
            var result = record.arg,
                value = result.value;return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            }) : PromiseImpl.resolve(value).then(function (unwrapped) {
              result.value = unwrapped, resolve(result);
            }, function (error) {
              return invoke("throw", error, resolve, reject);
            });
          }reject(record.arg);
        }var previousPromise;defineProperty(this, "_invoke", { value: function value(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new PromiseImpl(function (resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          } });
      }function makeInvokeMethod(innerFn, self, context) {
        var state = "suspendedStart";return function (method, arg) {
          if ("executing" === state) throw new Error("Generator is already running");if ("completed" === state) {
            if ("throw" === method) throw arg;return doneResult();
          }for (context.method = method, context.arg = arg;;) {
            var delegate = context.delegate;if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;return delegateResult;
              }
            }if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
              if ("suspendedStart" === state) throw state = "completed", context.arg;context.dispatchException(context.arg);
            } else "return" === context.method && context.abrupt("return", context.arg);state = "executing";var record = tryCatch(innerFn, self, context);if ("normal" === record.type) {
              if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;return { value: record.arg, done: context.done };
            }"throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
          }
        };
      }function maybeInvokeDelegate(delegate, context) {
        var methodName = context.method,
            method = delegate.iterator[methodName];if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;var record = tryCatch(method, delegate.iterator, context.arg);if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;var info = record.arg;return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
      }function pushTryEntry(locs) {
        var entry = { tryLoc: locs[0] };1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
      }function resetTryEntry(entry) {
        var record = entry.completion || {};record.type = "normal", delete record.arg, entry.completion = record;
      }function Context(tryLocsList) {
        this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
      }function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];if (iteratorMethod) return iteratorMethod.call(iterable);if ("function" == typeof iterable.next) return iterable;if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
              for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;return next.value = undefined, next.done = !0, next;
            };return next.next = next;
          }
        }return { next: doneResult };
      }function doneResult() {
        return { value: undefined, done: !0 };
      }return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
        var ctor = "function" == typeof genFun && genFun.constructor;return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
      }, exports.mark = function (genFun) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
      }, exports.awrap = function (arg) {
        return { __await: arg };
      }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
        return this;
      }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        void 0 === PromiseImpl && (PromiseImpl = Promise);var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
          return result.done ? result.value : iter.next();
        });
      }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
        return this;
      }), define(Gp, "toString", function () {
        return "[object Generator]";
      }), exports.keys = function (val) {
        var object = Object(val),
            keys = [];for (var key in object) keys.push(key);return keys.reverse(), function next() {
          for (; keys.length;) {
            var key = keys.pop();if (key in object) return next.value = key, next.done = !1, next;
          }return next.done = !0, next;
        };
      }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) {
          if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
        }, stop: function stop() {
          this.done = !0;var rootRecord = this.tryEntries[0].completion;if ("throw" === rootRecord.type) throw rootRecord.arg;return this.rval;
        }, dispatchException: function dispatchException(exception) {
          if (this.done) throw exception;var context = this;function handle(loc, caught) {
            return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
          }for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i],
                record = entry.completion;if ("root" === entry.tryLoc) return handle("end");if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc"),
                  hasFinally = hasOwn.call(entry, "finallyLoc");if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
              } else {
                if (!hasFinally) throw new Error("try statement without catch or finally");if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
              }
            }
          }
        }, abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;break;
            }
          }finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);var record = finallyEntry ? finallyEntry.completion : {};return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
        }, complete: function complete(record, afterLoc) {
          if ("throw" === record.type) throw record.arg;return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
        }, finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
          }
        }, "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];if (entry.tryLoc === tryLoc) {
              var record = entry.completion;if ("throw" === record.type) {
                var thrown = record.arg;resetTryEntry(entry);
              }return thrown;
            }
          }throw new Error("illegal catch attempt");
        }, delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
        } }, exports;
    }
    function _createForOfIteratorHelper(o, allowArrayLike) {
      var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {
              if (i >= o.length) return { done: true };return { done: false, value: o[i++] };
            }, e: function e(_e2) {
              throw _e2;
            }, f: F };
        }throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }var normalCompletion = true,
          didErr = false,
          err;return { s: function s() {
          it = it.call(o);
        }, n: function n() {
          var step = it.next();normalCompletion = step.done;return step;
        }, e: function e(_e3) {
          didErr = true;err = _e3;
        }, f: function f() {
          try {
            if (!normalCompletion && it["return"] != null) it["return"]();
          } finally {
            if (didErr) throw err;
          }
        } };
    }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);var value = info.value;
      } catch (error) {
        reject(error);return;
      }if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
    function _asyncToGenerator(fn) {
      return function () {
        var self = this,
            args = arguments;return new Promise(function (resolve, reject) {
          var gen = fn.apply(self, args);function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }_next(undefined);
        });
      };
    }
    function _slicedToArray(arr, i) {
      return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _nonIterableRest() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function _unsupportedIterableToArray(o, minLen) {
      if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];return arr2;
    }
    function _iterableToArrayLimit(arr, i) {
      var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];if (null != _i) {
        var _s,
            _e,
            _x,
            _r,
            _arr = [],
            _n = !0,
            _d = !1;try {
          if (_x = (_i = _i.call(arr)).next, 0 === i) {
            if (Object(_i) !== _i) return;_n = !1;
          } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
        } catch (err) {
          _d = !0, _e = err;
        } finally {
          try {
            if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
          } finally {
            if (_d) throw _e;
          }
        }return _arr;
      }
    }
    function _arrayWithHoles(arr) {
      if (Array.isArray(arr)) return arr;
    }
    function App() {
      var _useState = (0, _react.useState)([]),
          _useState2 = _slicedToArray(_useState, 2),
          lists = _useState2[0],
          setList = _useState2[1];
      function Disable() {
        document.getElementById('Blogs').style.display = "none";
        document.getElementById('Documents').style.display = "none";
        document.getElementById('Knowledges').style.display = "none";
      }

      function readed() {
        document.getElementById('display2').style.display = "";
        console.log("Readed");
        document.getElementById('titles').value;
        document.getElementById('descs').value;

        function getapi(_x2) {
          return _getapi.apply(this, arguments);
        }
        function _getapi() {
          _getapi = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url) {
            var auth, response, data;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  auth = "Basic " + btoa("test@liferay.com:learn");
                  _context.next = 3;
                  return fetch(url, {
                    headers: {
                      "Content-Type": "application/json",
                      "Authorization": auth
                    }
                  });
                case 3:
                  response = _context.sent;
                  _context.next = 6;
                  return response.json();
                case 6:
                  data = _context.sent;
                  console.log(data);
                  show(data);
                case 9:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          return _getapi.apply(this, arguments);
        }
        getapi("/o/headless-delivery/v1.0/sites/20121/blog-postings/");
        function show(data) {
          console.log('its Showedd');
          var newList = [];
          var _iterator = _createForOfIteratorHelper(data.items),
              _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var r = _step.value;
              newList.push({
                id: r.id,
                name: r.headline,
                desc: r.articleBody,
                doc: '---------------'
              });
              console.log(r.id);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          console.log(newList);
          setList(newList);
        }
      }

      function getfile() {
        function getapi(_x3) {
          return _getapi2.apply(this, arguments);
        }
        function _getapi2() {
          _getapi2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url) {
            var auth, response, data;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  auth = "Basic " + btoa("test@liferay.com:learn");
                  _context2.next = 3;
                  return fetch(url, {
                    headers: {
                      "Authorization": auth
                    }
                  });
                case 3:
                  response = _context2.sent;
                  _context2.next = 6;
                  return response.json();
                case 6:
                  data = _context2.sent;
                  console.log(data);
                  show(data);
                case 9:
                case "end":
                  return _context2.stop();
              }
            }, _callee2);
          }));
          return _getapi2.apply(this, arguments);
        }
        getapi("/o/headless-delivery/v1.0/sites/20121/documents");
        function show(data) {
          console.log('its Showedd');
          var newList = [];
          var _iterator2 = _createForOfIteratorHelper(data.items),
              _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var r = _step2.value;
              var a = "http://localhost:8080" + r.contentUrl;
              newList.push({
                id: r.id,
                doc: /*#__PURE__*/_react["default"].createElement("a", {
                  href: a
                }, r.title),
                desc: '---------------',
                name: '---------------'
              });
              console.log(r.id);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          console.log(newList);
          setList(newList);
        }
      }

      function kbaseget() {
        function getapi(_x4) {
          return _getapi3.apply(this, arguments);
        }
        function _getapi3() {
          _getapi3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(url) {
            var auth, response, data;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  auth = "Basic " + btoa("test@liferay.com:learn");
                  _context3.next = 3;
                  return fetch(url, {
                    headers: {
                      "Content-Type": "application/json",
                      "Authorization": auth
                    }
                  });
                case 3:
                  response = _context3.sent;
                  _context3.next = 6;
                  return response.json();
                case 6:
                  data = _context3.sent;
                  show(data);
                case 8:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          return _getapi3.apply(this, arguments);
        }
        getapi("/o/headless-delivery/v1.0/sites/20121/knowledge-base-articles");
        function show(data) {
          console.log('its Showedd');
          var newList = [];
          var _iterator3 = _createForOfIteratorHelper(data.items),
              _step3;
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var r = _step3.value;
              newList.push({
                id: r.id,
                name: r.title,
                desc: r.articleBody,
                doc: '---------------'
              });
              console.log(r.id);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          console.log(newList);
          setList(newList);
        }
      }

      function Blogs() {
        document.getElementById('Blogs').style.display = "";
        document.getElementById('Documents').style.display = "none";
        document.getElementById('Knowledges').style.display = "none";
      }
      function Documents() {
        document.getElementById('Blogs').style.display = "none";
        document.getElementById('Documents').style.display = "";
        document.getElementById('Knowledges').style.display = "none";
      }
      function Knowledges() {
        document.getElementById('Blogs').style.display = "none";
        document.getElementById('Documents').style.display = "none";
        document.getElementById('Knowledges').style.display = "";
      }
      (0, _react.useEffect)(function () {
        Disable();
      });
      return (/*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
          inline: true
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "sheet sheet-lg"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "sheet-header"
        }, /*#__PURE__*/_react["default"].createElement("h2", {
          className: "sheet-title center"
        }, "Application programming interface (API)")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "sheet-section"
        }, /*#__PURE__*/_react["default"].createElement(_form["default"].Group, {
          className: "form-group-sm has-success"
        }, /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: "basicInput"
        }, "TITLE"), /*#__PURE__*/_react["default"].createElement(_form.ClayInput, {
          placeholder: "Enter The Title",
          type: "text",
          id: "titles"
        })), /*#__PURE__*/_react["default"].createElement(_form["default"].Group, {
          className: "form-group-sm has-success"
        }, /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: "basicInput"
        }, "DESCRIPTION"), /*#__PURE__*/_react["default"].createElement("textarea", {
          className: "form-control",
          placeholder: "Enter The Description",
          id: "descs"
        })), /*#__PURE__*/_react["default"].createElement(_form["default"].Group, {
          className: "form-group-sm has-success",
          id: "ID"
        }, /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: "basicInput"
        }, "ID"), /*#__PURE__*/_react["default"].createElement(_form.ClayInput, {
          placeholder: "Enter The ID",
          type: "number",
          id: "ids"
        })), /*#__PURE__*/_react["default"].createElement(_form["default"].Group, {
          className: "form-group-sm has-success"
        }, /*#__PURE__*/_react["default"].createElement("label", {
          htmlFor: "basicInput"
        }, "Upload File"), /*#__PURE__*/_react["default"].createElement(_form.ClayInput, {
          placeholder: "Upload the file",
          type: "file",
          id: "myFile"
        }))), /*#__PURE__*/_react["default"].createElement(_dropDown["default"], {
          filterKey: "name",
          trigger: /*#__PURE__*/_react["default"].createElement(_button["default"], null, "Select"),
          style: {
            textAlign: 'center'
          }
        }, /*#__PURE__*/_react["default"].createElement(_dropDown["default"].ItemList, {
          items: [{
            children: [{
              id: 1,
              name: "Blogs"
            }, {
              id: 2,
              name: "Documents"
            }, {
              id: 3,
              name: "Knowledge Base"
            }],
            id: 1,
            name: "API"
          }]
        }, function (item) {
          return (/*#__PURE__*/_react["default"].createElement(_dropDown["default"].Group, {
              header: item.name,
              items: item.children,
              key: item.name
            }, function (item) {
              return (/*#__PURE__*/_react["default"].createElement(_dropDown["default"].Item, {
                  key: item.name,
                  onClick: function onClick() {
                    if (item.id == 1) Blogs();else if (item.id == 2) Documents();else Knowledges();
                  }
                }, item.name)
              );
            })
          );
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "sheet-footer sheet-footer-btn-block-sm-down",
          id: "Blogs"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "btn-group ",
          style: {
            textAlign: 'center'
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "btn-group-item"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          className: "btn btn-success",
          type: "button",
          onClick: function created() {
            document.getElementById("ID").style.display = '';
            var a = document.getElementById('titles').value;
            var b = document.getElementById('descs').value;
            document.getElementById('ids').value;

            if (a == '' || b == '') {
              alert("Fill the Details");
              return;
            }

            var auth = "Basic " + btoa("test@liferay.com:learn");
            fetch("/o/headless-delivery/v1.0/sites/20121/blog-postings/", {
              method: "POST",
              body: JSON.stringify({
                headline: a,
                articleBody: b
              }),
              headers: {
                "Content-Type": "application/json",
                "Authorization": auth
              }
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              console.log("Success:", data);
            })["catch"](function (error) {
              console.log("Error:", error);
            });
          }
        }, "Create")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "btn-group-item"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          className: "btn btn-warning",
          type: "button",
          onClick: readed
        }, "Read")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "btn-group-item"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          className: "btn btn-primary",
          type: "button",
          onClick: function updated() {
            console.log("Updated");
            var a = document.getElementById('titles').value;
            var b = document.getElementById('descs').value;
            var c = document.getElementById('ids').value;
            if (a == '' || b == '' || c == "") {
              alert("Fill the Details");
              return;
            }

            var auth = "Basic " + btoa("test@liferay.com:learn");
            fetch("/o/headless-delivery/v1.0/blog-postings/" + c, {
              method: "PATCH",
              body: JSON.stringify({
                headline: a,
                articleBody: b
              }),
              headers: {
                "Content-Type": "application/json",
                "Authorization": auth
              }
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              console.log("Success:", data);
            })["catch"](function (error) {
              console.log("Error:", error);
            });
            readed();
          }
        }, "Update")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "btn-group-item"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          className: "btn btn-danger",
          type: "button",
          onClick: function deleted() {
            console.log("Deleted");
            document.getElementById("ID").style.display = '';
            var c = document.getElementById('ids').value;
            if (c == '') {
              alert("Fill the Details");
              return;
            }

            var auth = "Basic " + btoa("test@liferay.com:learn");
            fetch("/o/headless-delivery/v1.0/blog-postings/" + c, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                "Authorization": auth
              }
            });
            readed();
          }
        }, "Delete")))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "sheet-footer sheet-footer-btn-block-sm-down",
          id: "Documents"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "btn-group",
          style: {
            textAlign: 'center'
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "btn-group-item"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          className: "btn btn-success",
          type: "button",
          onClick: function postfile() {
            var f = document.getElementById('myFile');
            if (f.value == '') {
              alert("Fill the Details");
              return;
            }
            var formData = new FormData();
            formData.append('file', f.files[0]);
            console.log(formData);

            var auth = "Basic " + btoa("test@liferay.com:learn");
            fetch("/o/headless-delivery/v1.0/sites/20121/documents", {
              method: "POST",
              body: formData,
              headers: {
                "Authorization": auth
              }
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              console.log("Success:", data);
            })["catch"](function (error) {
              console.log("Error:", error);
            });
          }
        }, "Doc Upload")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "btn-group-item"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          className: "btn btn-warning",
          type: "button",
          onClick: getfile
        }, "Doc Read")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "btn-group-item"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          className: "btn btn-primary",
          type: "button",
          onClick: function updatefile() {
            var f = document.getElementById('myFile');
            if (f.value == '') {
              alert("Fill the Details");
              return;
            }
            var formData = new FormData();
            formData.append('file', f.files[0]);
            var c = document.getElementById('ids').value;

            var auth = "Basic " + btoa("test@liferay.com:learn");
            fetch("/o/headless-delivery/v1.0/documents/" + c, {
              method: "PATCH",
              body: formData,
              headers: {
                "Authorization": auth
              }
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              console.log("Success:", data);
            })["catch"](function (error) {
              console.log("Error:", error);
            });
            getfile();
          }
        }, "Doc Update")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "btn-group-item"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          className: "btn btn-danger",
          type: "button",
          onClick: function deletefile() {
            var c = document.getElementById('ids').value;
            if (c == '') {
              alert("Fill the Details");
              return;
            }

            var auth = "Basic " + btoa("test@liferay.com:learn");
            fetch("/o/headless-delivery/v1.0/documents/" + c, {
              method: "DELETE",
              headers: {
                "Authorization": auth
              }
            });
            getfile();
          }
        }, "Doc Delete")))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "sheet-footer sheet-footer-btn-block-sm-down",
          id: "Knowledges"
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "btn-group",
          style: {
            textAlign: 'center'
          }
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "btn-group-item"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          className: "btn btn-success",
          type: "button",
          onClick: function kbasecreate() {
            console.log("Hello World");
            var a = document.getElementById('titles').value;
            var b = document.getElementById('descs').value;
            if (a == '' || b == '') {
              alert("Fill the Details");
              return;
            }

            var data = {
              title: a,
              articleBody: b
            };
            console.log(data);
            var auth = "Basic " + btoa("test@liferay.com:learn");
            fetch("/o/headless-delivery/v1.0/sites/20121/knowledge-base-articles", {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                "Content-Type": "application/json",
                "Authorization": auth
              }
            }).then(function (response) {
              return response.json();
            }).then(function (a) {
              console.log("Success:", a);
            })["catch"](function (error) {
              console.log("Error:", error);
            });
          }
        }, "KBase Create")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "btn-group-item"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          className: "btn btn-warning",
          type: "button",
          onClick: kbaseget
        }, "KBase Read")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "btn-group-item"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          className: "btn btn-primary",
          type: "button",
          onClick: function kbaseupdate() {
            var a = document.getElementById('titles').value;
            var b = document.getElementById('descs').value;
            var c = document.getElementById('ids').value;
            if (a == '' || b == '' || c == "") {
              alert("Fill the Details");
              return;
            }

            var auth = "Basic " + btoa("test@liferay.com:learn");
            fetch("/o/headless-delivery/v1.0/knowledge-base-articles/" + c, {
              method: "PATCH",
              body: JSON.stringify({
                title: a,
                articleBody: b
              }),
              headers: {
                "Content-Type": "application/json",
                "Authorization": auth
              }
            }).then(function (response) {
              return response.json();
            }).then(function (data) {
              console.log("Success:", data);
            })["catch"](function (error) {
              console.log("Error:", error);
            });
            kbaseget();
          }
        }, "KBase Update")), /*#__PURE__*/_react["default"].createElement("div", {
          className: "btn-group-item"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          className: "btn btn-danger",
          type: "button",
          onClick: function kbasedelete() {
            var c = document.getElementById('ids').value;
            if (c == '') {
              alert("Fill the ID");
              return;
            }

            var auth = "Basic " + btoa("test@liferay.com:learn");
            fetch("/o/headless-delivery/v1.0/knowledge-base-articles/" + c, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                "Authorization": auth
              }
            });
            alert("Deleted Sucessfully");
            kbaseget();
          }
        }, "KBase Delete"))))), /*#__PURE__*/_react["default"].createElement("div", {
          id: "display2"
        }, /*#__PURE__*/_react["default"].createElement(_table["default"], null, /*#__PURE__*/_react["default"].createElement(_table["default"].Body, null, /*#__PURE__*/_react["default"].createElement(_table["default"].Row, null, /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
          headingCell: true,
          id: "clayhname"
        }, "Title"), /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
          headingCell: true,
          id: "clayhdesc"
        }, "Description"), /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
          headingCell: true,
          id: "clayhdoc"
        }, "Document"), /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
          headingCell: true,
          id: "clayhid"
        }, "Id")), lists.map(function (current) {
          return (/*#__PURE__*/_react["default"].createElement(_table["default"].Row, null, /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
              headingTitle: true,
              id: "clayname"
            }, current.name), /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
              id: "claydesc"
            }, current.desc), /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
              id: "claydoc"
            }, current.doc), /*#__PURE__*/_react["default"].createElement(_table["default"].Cell, {
              id: "clayid"
            }, current.id))
          );
        }))))))
      );
    }
    var _default = App;
    exports["default"] = _default;
    //# sourceMappingURL=App.js.map
  }
});
//# sourceMappingURL=App.js.map