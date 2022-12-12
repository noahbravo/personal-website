import {
  config,
  keyframes,
  styled
} from "/build/_shared/chunk-EAMOY2JI.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-URHDA5WG.js";

// node_modules/tslib/tslib.js
var require_tslib = __commonJS({
  "node_modules/tslib/tslib.js"(exports, module) {
    var __extends2;
    var __assign2;
    var __rest2;
    var __decorate2;
    var __param2;
    var __metadata2;
    var __awaiter2;
    var __generator2;
    var __exportStar2;
    var __values2;
    var __read2;
    var __spread2;
    var __spreadArrays2;
    var __await2;
    var __asyncGenerator2;
    var __asyncDelegator2;
    var __asyncValues2;
    var __makeTemplateObject2;
    var __importStar2;
    var __importDefault2;
    var __classPrivateFieldGet2;
    var __classPrivateFieldSet2;
    var __createBinding2;
    (function(factory) {
      var root = typeof globalThis === "object" ? globalThis : typeof self === "object" ? self : typeof this === "object" ? this : {};
      if (typeof define === "function" && define.amd) {
        define("tslib", ["exports"], function(exports2) {
          factory(createExporter(root, createExporter(exports2)));
        });
      } else if (typeof module === "object" && typeof module.exports === "object") {
        factory(createExporter(root, createExporter(module.exports)));
      } else {
        factory(createExporter(root));
      }
      function createExporter(exports2, previous) {
        if (exports2 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports2, "__esModule", { value: true });
          } else {
            exports2.__esModule = true;
          }
        }
        return function(id, v) {
          return exports2[id] = previous ? previous(id, v) : v;
        };
      }
    })(function(exporter) {
      var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
        d.__proto__ = b;
      } || function(d, b) {
        for (var p in b)
          if (b.hasOwnProperty(p))
            d[p] = b[p];
      };
      __extends2 = function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
      __assign2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      __rest2 = function(s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate2 = function(decorators, target2, key, desc) {
        var c = arguments.length, r = c < 3 ? target2 : desc === null ? desc = Object.getOwnPropertyDescriptor(target2, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
          r = Reflect.decorate(decorators, target2, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
              r = (c < 3 ? d(r) : c > 3 ? d(target2, key, r) : d(target2, key)) || r;
        return c > 3 && r && Object.defineProperty(target2, key, r), r;
      };
      __param2 = function(paramIndex, decorator) {
        return function(target2, key) {
          decorator(target2, key, paramIndex);
        };
      };
      __metadata2 = function(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter2 = function(thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
          });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator2 = function(thisArg, body) {
        var _ = { label: 0, sent: function() {
          if (t[0] & 1)
            throw t[1];
          return t[1];
        }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
          return this;
        }), g;
        function verb(n) {
          return function(v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f)
            throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                return t;
              if (y = 0, t)
                op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2])
                    _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5)
            throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __createBinding2 = function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      };
      __exportStar2 = function(m, exports2) {
        for (var p in m)
          if (p !== "default" && !exports2.hasOwnProperty(p))
            exports2[p] = m[p];
      };
      __values2 = function(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
          return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function() {
              if (o && i >= o.length)
                o = void 0;
              return { value: o && o[i++], done: !o };
            }
          };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
      };
      __read2 = function(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
          return o;
        var i = m.call(o), r, ar = [], e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"]))
              m.call(i);
          } finally {
            if (e)
              throw e.error;
          }
        }
        return ar;
      };
      __spread2 = function() {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read2(arguments[i]));
        return ar;
      };
      __spreadArrays2 = function() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __await2 = function(v) {
        return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
      };
      __asyncGenerator2 = function(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i;
        function verb(n) {
          if (g[n])
            i[n] = function(v) {
              return new Promise(function(a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator2 = function(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function(e) {
          throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
          return this;
        }, i;
        function verb(n, f) {
          i[n] = o[n] ? function(v) {
            return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
          } : f;
        }
      };
      __asyncValues2 = function(o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function verb(n) {
          i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
              v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
          };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function(v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject2 = function(cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      __importStar2 = function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
              result[k] = mod[k];
        }
        result["default"] = mod;
        return result;
      };
      __importDefault2 = function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      __classPrivateFieldGet2 = function(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
      };
      __classPrivateFieldSet2 = function(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
          throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
      };
      exporter("__extends", __extends2);
      exporter("__assign", __assign2);
      exporter("__rest", __rest2);
      exporter("__decorate", __decorate2);
      exporter("__param", __param2);
      exporter("__metadata", __metadata2);
      exporter("__awaiter", __awaiter2);
      exporter("__generator", __generator2);
      exporter("__exportStar", __exportStar2);
      exporter("__createBinding", __createBinding2);
      exporter("__values", __values2);
      exporter("__read", __read2);
      exporter("__spread", __spread2);
      exporter("__spreadArrays", __spreadArrays2);
      exporter("__await", __await2);
      exporter("__asyncGenerator", __asyncGenerator2);
      exporter("__asyncDelegator", __asyncDelegator2);
      exporter("__asyncValues", __asyncValues2);
      exporter("__makeTemplateObject", __makeTemplateObject2);
      exporter("__importStar", __importStar2);
      exporter("__importDefault", __importDefault2);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
    });
  }
});

// node_modules/core-js/internals/fails.js
var require_fails = __commonJS({
  "node_modules/core-js/internals/fails.js"(exports, module) {
    module.exports = function(exec) {
      try {
        return !!exec();
      } catch (error) {
        return true;
      }
    };
  }
});

// node_modules/core-js/internals/function-bind-native.js
var require_function_bind_native = __commonJS({
  "node_modules/core-js/internals/function-bind-native.js"(exports, module) {
    var fails = require_fails();
    module.exports = !fails(function() {
      var test = function() {
      }.bind();
      return typeof test != "function" || test.hasOwnProperty("prototype");
    });
  }
});

// node_modules/core-js/internals/function-uncurry-this.js
var require_function_uncurry_this = __commonJS({
  "node_modules/core-js/internals/function-uncurry-this.js"(exports, module) {
    var NATIVE_BIND = require_function_bind_native();
    var FunctionPrototype = Function.prototype;
    var call = FunctionPrototype.call;
    var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);
    module.exports = NATIVE_BIND ? uncurryThisWithBind : function(fn) {
      return function() {
        return call.apply(fn, arguments);
      };
    };
  }
});

// node_modules/core-js/internals/classof-raw.js
var require_classof_raw = __commonJS({
  "node_modules/core-js/internals/classof-raw.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    var toString = uncurryThis({}.toString);
    var stringSlice = uncurryThis("".slice);
    module.exports = function(it) {
      return stringSlice(toString(it), 8, -1);
    };
  }
});

// node_modules/core-js/internals/indexed-object.js
var require_indexed_object = __commonJS({
  "node_modules/core-js/internals/indexed-object.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var classof = require_classof_raw();
    var $Object = Object;
    var split = uncurryThis("".split);
    module.exports = fails(function() {
      return !$Object("z").propertyIsEnumerable(0);
    }) ? function(it) {
      return classof(it) == "String" ? split(it, "") : $Object(it);
    } : $Object;
  }
});

// node_modules/core-js/internals/is-null-or-undefined.js
var require_is_null_or_undefined = __commonJS({
  "node_modules/core-js/internals/is-null-or-undefined.js"(exports, module) {
    module.exports = function(it) {
      return it === null || it === void 0;
    };
  }
});

// node_modules/core-js/internals/require-object-coercible.js
var require_require_object_coercible = __commonJS({
  "node_modules/core-js/internals/require-object-coercible.js"(exports, module) {
    var isNullOrUndefined = require_is_null_or_undefined();
    var $TypeError = TypeError;
    module.exports = function(it) {
      if (isNullOrUndefined(it))
        throw $TypeError("Can't call method on " + it);
      return it;
    };
  }
});

// node_modules/core-js/internals/to-indexed-object.js
var require_to_indexed_object = __commonJS({
  "node_modules/core-js/internals/to-indexed-object.js"(exports, module) {
    var IndexedObject = require_indexed_object();
    var requireObjectCoercible = require_require_object_coercible();
    module.exports = function(it) {
      return IndexedObject(requireObjectCoercible(it));
    };
  }
});

// node_modules/core-js/internals/global.js
var require_global = __commonJS({
  "node_modules/core-js/internals/global.js"(exports, module) {
    var check = function(it) {
      return it && it.Math == Math && it;
    };
    module.exports = check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || check(typeof self == "object" && self) || check(typeof globalThis == "object" && globalThis) || function() {
      return this;
    }() || Function("return this")();
  }
});

// node_modules/core-js/internals/is-pure.js
var require_is_pure = __commonJS({
  "node_modules/core-js/internals/is-pure.js"(exports, module) {
    module.exports = false;
  }
});

// node_modules/core-js/internals/define-global-property.js
var require_define_global_property = __commonJS({
  "node_modules/core-js/internals/define-global-property.js"(exports, module) {
    var global2 = require_global();
    var defineProperty = Object.defineProperty;
    module.exports = function(key, value) {
      try {
        defineProperty(global2, key, { value, configurable: true, writable: true });
      } catch (error) {
        global2[key] = value;
      }
      return value;
    };
  }
});

// node_modules/core-js/internals/shared-store.js
var require_shared_store = __commonJS({
  "node_modules/core-js/internals/shared-store.js"(exports, module) {
    var global2 = require_global();
    var defineGlobalProperty = require_define_global_property();
    var SHARED = "__core-js_shared__";
    var store = global2[SHARED] || defineGlobalProperty(SHARED, {});
    module.exports = store;
  }
});

// node_modules/core-js/internals/shared.js
var require_shared = __commonJS({
  "node_modules/core-js/internals/shared.js"(exports, module) {
    var IS_PURE = require_is_pure();
    var store = require_shared_store();
    (module.exports = function(key, value) {
      return store[key] || (store[key] = value !== void 0 ? value : {});
    })("versions", []).push({
      version: "3.26.1",
      mode: IS_PURE ? "pure" : "global",
      copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)",
      license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",
      source: "https://github.com/zloirock/core-js"
    });
  }
});

// node_modules/core-js/internals/to-object.js
var require_to_object = __commonJS({
  "node_modules/core-js/internals/to-object.js"(exports, module) {
    var requireObjectCoercible = require_require_object_coercible();
    var $Object = Object;
    module.exports = function(argument) {
      return $Object(requireObjectCoercible(argument));
    };
  }
});

// node_modules/core-js/internals/has-own-property.js
var require_has_own_property = __commonJS({
  "node_modules/core-js/internals/has-own-property.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    var toObject = require_to_object();
    var hasOwnProperty = uncurryThis({}.hasOwnProperty);
    module.exports = Object.hasOwn || function hasOwn(it, key) {
      return hasOwnProperty(toObject(it), key);
    };
  }
});

// node_modules/core-js/internals/uid.js
var require_uid = __commonJS({
  "node_modules/core-js/internals/uid.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    var id = 0;
    var postfix = Math.random();
    var toString = uncurryThis(1 .toString);
    module.exports = function(key) {
      return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString(++id + postfix, 36);
    };
  }
});

// node_modules/core-js/internals/document-all.js
var require_document_all = __commonJS({
  "node_modules/core-js/internals/document-all.js"(exports, module) {
    var documentAll = typeof document == "object" && document.all;
    var IS_HTMLDDA = typeof documentAll == "undefined" && documentAll !== void 0;
    module.exports = {
      all: documentAll,
      IS_HTMLDDA
    };
  }
});

// node_modules/core-js/internals/is-callable.js
var require_is_callable = __commonJS({
  "node_modules/core-js/internals/is-callable.js"(exports, module) {
    var $documentAll = require_document_all();
    var documentAll = $documentAll.all;
    module.exports = $documentAll.IS_HTMLDDA ? function(argument) {
      return typeof argument == "function" || argument === documentAll;
    } : function(argument) {
      return typeof argument == "function";
    };
  }
});

// node_modules/core-js/internals/get-built-in.js
var require_get_built_in = __commonJS({
  "node_modules/core-js/internals/get-built-in.js"(exports, module) {
    var global2 = require_global();
    var isCallable = require_is_callable();
    var aFunction = function(argument) {
      return isCallable(argument) ? argument : void 0;
    };
    module.exports = function(namespace, method) {
      return arguments.length < 2 ? aFunction(global2[namespace]) : global2[namespace] && global2[namespace][method];
    };
  }
});

// node_modules/core-js/internals/engine-user-agent.js
var require_engine_user_agent = __commonJS({
  "node_modules/core-js/internals/engine-user-agent.js"(exports, module) {
    var getBuiltIn = require_get_built_in();
    module.exports = getBuiltIn("navigator", "userAgent") || "";
  }
});

// node_modules/core-js/internals/engine-v8-version.js
var require_engine_v8_version = __commonJS({
  "node_modules/core-js/internals/engine-v8-version.js"(exports, module) {
    var global2 = require_global();
    var userAgent = require_engine_user_agent();
    var process = global2.process;
    var Deno = global2.Deno;
    var versions = process && process.versions || Deno && Deno.version;
    var v8 = versions && versions.v8;
    var match;
    var version;
    if (v8) {
      match = v8.split(".");
      version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
    }
    if (!version && userAgent) {
      match = userAgent.match(/Edge\/(\d+)/);
      if (!match || match[1] >= 74) {
        match = userAgent.match(/Chrome\/(\d+)/);
        if (match)
          version = +match[1];
      }
    }
    module.exports = version;
  }
});

// node_modules/core-js/internals/symbol-constructor-detection.js
var require_symbol_constructor_detection = __commonJS({
  "node_modules/core-js/internals/symbol-constructor-detection.js"(exports, module) {
    var V8_VERSION = require_engine_v8_version();
    var fails = require_fails();
    module.exports = !!Object.getOwnPropertySymbols && !fails(function() {
      var symbol = Symbol();
      return !String(symbol) || !(Object(symbol) instanceof Symbol) || !Symbol.sham && V8_VERSION && V8_VERSION < 41;
    });
  }
});

// node_modules/core-js/internals/use-symbol-as-uid.js
var require_use_symbol_as_uid = __commonJS({
  "node_modules/core-js/internals/use-symbol-as-uid.js"(exports, module) {
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    module.exports = NATIVE_SYMBOL && !Symbol.sham && typeof Symbol.iterator == "symbol";
  }
});

// node_modules/core-js/internals/well-known-symbol.js
var require_well_known_symbol = __commonJS({
  "node_modules/core-js/internals/well-known-symbol.js"(exports, module) {
    var global2 = require_global();
    var shared = require_shared();
    var hasOwn = require_has_own_property();
    var uid = require_uid();
    var NATIVE_SYMBOL = require_symbol_constructor_detection();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var WellKnownSymbolsStore = shared("wks");
    var Symbol2 = global2.Symbol;
    var symbolFor = Symbol2 && Symbol2["for"];
    var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol2 : Symbol2 && Symbol2.withoutSetter || uid;
    module.exports = function(name) {
      if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
        var description = "Symbol." + name;
        if (NATIVE_SYMBOL && hasOwn(Symbol2, name)) {
          WellKnownSymbolsStore[name] = Symbol2[name];
        } else if (USE_SYMBOL_AS_UID && symbolFor) {
          WellKnownSymbolsStore[name] = symbolFor(description);
        } else {
          WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
        }
      }
      return WellKnownSymbolsStore[name];
    };
  }
});

// node_modules/core-js/internals/is-object.js
var require_is_object = __commonJS({
  "node_modules/core-js/internals/is-object.js"(exports, module) {
    var isCallable = require_is_callable();
    var $documentAll = require_document_all();
    var documentAll = $documentAll.all;
    module.exports = $documentAll.IS_HTMLDDA ? function(it) {
      return typeof it == "object" ? it !== null : isCallable(it) || it === documentAll;
    } : function(it) {
      return typeof it == "object" ? it !== null : isCallable(it);
    };
  }
});

// node_modules/core-js/internals/an-object.js
var require_an_object = __commonJS({
  "node_modules/core-js/internals/an-object.js"(exports, module) {
    var isObject = require_is_object();
    var $String = String;
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isObject(argument))
        return argument;
      throw $TypeError($String(argument) + " is not an object");
    };
  }
});

// node_modules/core-js/internals/descriptors.js
var require_descriptors = __commonJS({
  "node_modules/core-js/internals/descriptors.js"(exports, module) {
    var fails = require_fails();
    module.exports = !fails(function() {
      return Object.defineProperty({}, 1, { get: function() {
        return 7;
      } })[1] != 7;
    });
  }
});

// node_modules/core-js/internals/v8-prototype-define-bug.js
var require_v8_prototype_define_bug = __commonJS({
  "node_modules/core-js/internals/v8-prototype-define-bug.js"(exports, module) {
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    module.exports = DESCRIPTORS && fails(function() {
      return Object.defineProperty(function() {
      }, "prototype", {
        value: 42,
        writable: false
      }).prototype != 42;
    });
  }
});

// node_modules/core-js/internals/document-create-element.js
var require_document_create_element = __commonJS({
  "node_modules/core-js/internals/document-create-element.js"(exports, module) {
    var global2 = require_global();
    var isObject = require_is_object();
    var document2 = global2.document;
    var EXISTS = isObject(document2) && isObject(document2.createElement);
    module.exports = function(it) {
      return EXISTS ? document2.createElement(it) : {};
    };
  }
});

// node_modules/core-js/internals/ie8-dom-define.js
var require_ie8_dom_define = __commonJS({
  "node_modules/core-js/internals/ie8-dom-define.js"(exports, module) {
    var DESCRIPTORS = require_descriptors();
    var fails = require_fails();
    var createElement = require_document_create_element();
    module.exports = !DESCRIPTORS && !fails(function() {
      return Object.defineProperty(createElement("div"), "a", {
        get: function() {
          return 7;
        }
      }).a != 7;
    });
  }
});

// node_modules/core-js/internals/function-call.js
var require_function_call = __commonJS({
  "node_modules/core-js/internals/function-call.js"(exports, module) {
    var NATIVE_BIND = require_function_bind_native();
    var call = Function.prototype.call;
    module.exports = NATIVE_BIND ? call.bind(call) : function() {
      return call.apply(call, arguments);
    };
  }
});

// node_modules/core-js/internals/object-is-prototype-of.js
var require_object_is_prototype_of = __commonJS({
  "node_modules/core-js/internals/object-is-prototype-of.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    module.exports = uncurryThis({}.isPrototypeOf);
  }
});

// node_modules/core-js/internals/is-symbol.js
var require_is_symbol = __commonJS({
  "node_modules/core-js/internals/is-symbol.js"(exports, module) {
    var getBuiltIn = require_get_built_in();
    var isCallable = require_is_callable();
    var isPrototypeOf = require_object_is_prototype_of();
    var USE_SYMBOL_AS_UID = require_use_symbol_as_uid();
    var $Object = Object;
    module.exports = USE_SYMBOL_AS_UID ? function(it) {
      return typeof it == "symbol";
    } : function(it) {
      var $Symbol = getBuiltIn("Symbol");
      return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
    };
  }
});

// node_modules/core-js/internals/try-to-string.js
var require_try_to_string = __commonJS({
  "node_modules/core-js/internals/try-to-string.js"(exports, module) {
    var $String = String;
    module.exports = function(argument) {
      try {
        return $String(argument);
      } catch (error) {
        return "Object";
      }
    };
  }
});

// node_modules/core-js/internals/a-callable.js
var require_a_callable = __commonJS({
  "node_modules/core-js/internals/a-callable.js"(exports, module) {
    var isCallable = require_is_callable();
    var tryToString = require_try_to_string();
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (isCallable(argument))
        return argument;
      throw $TypeError(tryToString(argument) + " is not a function");
    };
  }
});

// node_modules/core-js/internals/get-method.js
var require_get_method = __commonJS({
  "node_modules/core-js/internals/get-method.js"(exports, module) {
    var aCallable = require_a_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    module.exports = function(V, P) {
      var func = V[P];
      return isNullOrUndefined(func) ? void 0 : aCallable(func);
    };
  }
});

// node_modules/core-js/internals/ordinary-to-primitive.js
var require_ordinary_to_primitive = __commonJS({
  "node_modules/core-js/internals/ordinary-to-primitive.js"(exports, module) {
    var call = require_function_call();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var $TypeError = TypeError;
    module.exports = function(input, pref) {
      var fn, val;
      if (pref === "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
        return val;
      if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input)))
        return val;
      if (pref !== "string" && isCallable(fn = input.toString) && !isObject(val = call(fn, input)))
        return val;
      throw $TypeError("Can't convert object to primitive value");
    };
  }
});

// node_modules/core-js/internals/to-primitive.js
var require_to_primitive = __commonJS({
  "node_modules/core-js/internals/to-primitive.js"(exports, module) {
    var call = require_function_call();
    var isObject = require_is_object();
    var isSymbol = require_is_symbol();
    var getMethod = require_get_method();
    var ordinaryToPrimitive = require_ordinary_to_primitive();
    var wellKnownSymbol = require_well_known_symbol();
    var $TypeError = TypeError;
    var TO_PRIMITIVE = wellKnownSymbol("toPrimitive");
    module.exports = function(input, pref) {
      if (!isObject(input) || isSymbol(input))
        return input;
      var exoticToPrim = getMethod(input, TO_PRIMITIVE);
      var result;
      if (exoticToPrim) {
        if (pref === void 0)
          pref = "default";
        result = call(exoticToPrim, input, pref);
        if (!isObject(result) || isSymbol(result))
          return result;
        throw $TypeError("Can't convert object to primitive value");
      }
      if (pref === void 0)
        pref = "number";
      return ordinaryToPrimitive(input, pref);
    };
  }
});

// node_modules/core-js/internals/to-property-key.js
var require_to_property_key = __commonJS({
  "node_modules/core-js/internals/to-property-key.js"(exports, module) {
    var toPrimitive = require_to_primitive();
    var isSymbol = require_is_symbol();
    module.exports = function(argument) {
      var key = toPrimitive(argument, "string");
      return isSymbol(key) ? key : key + "";
    };
  }
});

// node_modules/core-js/internals/object-define-property.js
var require_object_define_property = __commonJS({
  "node_modules/core-js/internals/object-define-property.js"(exports) {
    var DESCRIPTORS = require_descriptors();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var anObject = require_an_object();
    var toPropertyKey = require_to_property_key();
    var $TypeError = TypeError;
    var $defineProperty = Object.defineProperty;
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ENUMERABLE = "enumerable";
    var CONFIGURABLE = "configurable";
    var WRITABLE = "writable";
    exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
        var current = $getOwnPropertyDescriptor(O, P);
        if (current && current[WRITABLE]) {
          O[P] = Attributes.value;
          Attributes = {
            configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
            enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
            writable: false
          };
        }
      }
      return $defineProperty(O, P, Attributes);
    } : $defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPropertyKey(P);
      anObject(Attributes);
      if (IE8_DOM_DEFINE)
        try {
          return $defineProperty(O, P, Attributes);
        } catch (error) {
        }
      if ("get" in Attributes || "set" in Attributes)
        throw $TypeError("Accessors not supported");
      if ("value" in Attributes)
        O[P] = Attributes.value;
      return O;
    };
  }
});

// node_modules/core-js/internals/math-trunc.js
var require_math_trunc = __commonJS({
  "node_modules/core-js/internals/math-trunc.js"(exports, module) {
    var ceil = Math.ceil;
    var floor = Math.floor;
    module.exports = Math.trunc || function trunc(x) {
      var n = +x;
      return (n > 0 ? floor : ceil)(n);
    };
  }
});

// node_modules/core-js/internals/to-integer-or-infinity.js
var require_to_integer_or_infinity = __commonJS({
  "node_modules/core-js/internals/to-integer-or-infinity.js"(exports, module) {
    var trunc = require_math_trunc();
    module.exports = function(argument) {
      var number = +argument;
      return number !== number || number === 0 ? 0 : trunc(number);
    };
  }
});

// node_modules/core-js/internals/to-absolute-index.js
var require_to_absolute_index = __commonJS({
  "node_modules/core-js/internals/to-absolute-index.js"(exports, module) {
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var max = Math.max;
    var min = Math.min;
    module.exports = function(index, length) {
      var integer = toIntegerOrInfinity(index);
      return integer < 0 ? max(integer + length, 0) : min(integer, length);
    };
  }
});

// node_modules/core-js/internals/to-length.js
var require_to_length = __commonJS({
  "node_modules/core-js/internals/to-length.js"(exports, module) {
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var min = Math.min;
    module.exports = function(argument) {
      return argument > 0 ? min(toIntegerOrInfinity(argument), 9007199254740991) : 0;
    };
  }
});

// node_modules/core-js/internals/length-of-array-like.js
var require_length_of_array_like = __commonJS({
  "node_modules/core-js/internals/length-of-array-like.js"(exports, module) {
    var toLength = require_to_length();
    module.exports = function(obj) {
      return toLength(obj.length);
    };
  }
});

// node_modules/core-js/internals/array-includes.js
var require_array_includes = __commonJS({
  "node_modules/core-js/internals/array-includes.js"(exports, module) {
    var toIndexedObject = require_to_indexed_object();
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createMethod = function(IS_INCLUDES) {
      return function($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = lengthOfArrayLike(O);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        if (IS_INCLUDES && el != el)
          while (length > index) {
            value = O[index++];
            if (value != value)
              return true;
          }
        else
          for (; length > index; index++) {
            if ((IS_INCLUDES || index in O) && O[index] === el)
              return IS_INCLUDES || index || 0;
          }
        return !IS_INCLUDES && -1;
      };
    };
    module.exports = {
      includes: createMethod(true),
      indexOf: createMethod(false)
    };
  }
});

// node_modules/core-js/internals/hidden-keys.js
var require_hidden_keys = __commonJS({
  "node_modules/core-js/internals/hidden-keys.js"(exports, module) {
    module.exports = {};
  }
});

// node_modules/core-js/internals/object-keys-internal.js
var require_object_keys_internal = __commonJS({
  "node_modules/core-js/internals/object-keys-internal.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    var hasOwn = require_has_own_property();
    var toIndexedObject = require_to_indexed_object();
    var indexOf = require_array_includes().indexOf;
    var hiddenKeys = require_hidden_keys();
    var push = uncurryThis([].push);
    module.exports = function(object, names) {
      var O = toIndexedObject(object);
      var i = 0;
      var result = [];
      var key;
      for (key in O)
        !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
      while (names.length > i)
        if (hasOwn(O, key = names[i++])) {
          ~indexOf(result, key) || push(result, key);
        }
      return result;
    };
  }
});

// node_modules/core-js/internals/enum-bug-keys.js
var require_enum_bug_keys = __commonJS({
  "node_modules/core-js/internals/enum-bug-keys.js"(exports, module) {
    module.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf"
    ];
  }
});

// node_modules/core-js/internals/object-keys.js
var require_object_keys = __commonJS({
  "node_modules/core-js/internals/object-keys.js"(exports, module) {
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    module.exports = Object.keys || function keys(O) {
      return internalObjectKeys(O, enumBugKeys);
    };
  }
});

// node_modules/core-js/internals/object-define-properties.js
var require_object_define_properties = __commonJS({
  "node_modules/core-js/internals/object-define-properties.js"(exports) {
    var DESCRIPTORS = require_descriptors();
    var V8_PROTOTYPE_DEFINE_BUG = require_v8_prototype_define_bug();
    var definePropertyModule = require_object_define_property();
    var anObject = require_an_object();
    var toIndexedObject = require_to_indexed_object();
    var objectKeys = require_object_keys();
    exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
      anObject(O);
      var props = toIndexedObject(Properties);
      var keys = objectKeys(Properties);
      var length = keys.length;
      var index = 0;
      var key;
      while (length > index)
        definePropertyModule.f(O, key = keys[index++], props[key]);
      return O;
    };
  }
});

// node_modules/core-js/internals/html.js
var require_html = __commonJS({
  "node_modules/core-js/internals/html.js"(exports, module) {
    var getBuiltIn = require_get_built_in();
    module.exports = getBuiltIn("document", "documentElement");
  }
});

// node_modules/core-js/internals/shared-key.js
var require_shared_key = __commonJS({
  "node_modules/core-js/internals/shared-key.js"(exports, module) {
    var shared = require_shared();
    var uid = require_uid();
    var keys = shared("keys");
    module.exports = function(key) {
      return keys[key] || (keys[key] = uid(key));
    };
  }
});

// node_modules/core-js/internals/object-create.js
var require_object_create = __commonJS({
  "node_modules/core-js/internals/object-create.js"(exports, module) {
    var anObject = require_an_object();
    var definePropertiesModule = require_object_define_properties();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = require_hidden_keys();
    var html = require_html();
    var documentCreateElement = require_document_create_element();
    var sharedKey = require_shared_key();
    var GT = ">";
    var LT = "<";
    var PROTOTYPE = "prototype";
    var SCRIPT = "script";
    var IE_PROTO = sharedKey("IE_PROTO");
    var EmptyConstructor = function() {
    };
    var scriptTag = function(content) {
      return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
    };
    var NullProtoObjectViaActiveX = function(activeXDocument2) {
      activeXDocument2.write(scriptTag(""));
      activeXDocument2.close();
      var temp = activeXDocument2.parentWindow.Object;
      activeXDocument2 = null;
      return temp;
    };
    var NullProtoObjectViaIFrame = function() {
      var iframe = documentCreateElement("iframe");
      var JS = "java" + SCRIPT + ":";
      var iframeDocument;
      iframe.style.display = "none";
      html.appendChild(iframe);
      iframe.src = String(JS);
      iframeDocument = iframe.contentWindow.document;
      iframeDocument.open();
      iframeDocument.write(scriptTag("document.F=Object"));
      iframeDocument.close();
      return iframeDocument.F;
    };
    var activeXDocument;
    var NullProtoObject = function() {
      try {
        activeXDocument = new ActiveXObject("htmlfile");
      } catch (error) {
      }
      NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
      var length = enumBugKeys.length;
      while (length--)
        delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
      return NullProtoObject();
    };
    hiddenKeys[IE_PROTO] = true;
    module.exports = Object.create || function create(O, Properties) {
      var result;
      if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        result[IE_PROTO] = O;
      } else
        result = NullProtoObject();
      return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
    };
  }
});

// node_modules/core-js/internals/add-to-unscopables.js
var require_add_to_unscopables = __commonJS({
  "node_modules/core-js/internals/add-to-unscopables.js"(exports, module) {
    var wellKnownSymbol = require_well_known_symbol();
    var create = require_object_create();
    var defineProperty = require_object_define_property().f;
    var UNSCOPABLES = wellKnownSymbol("unscopables");
    var ArrayPrototype = Array.prototype;
    if (ArrayPrototype[UNSCOPABLES] == void 0) {
      defineProperty(ArrayPrototype, UNSCOPABLES, {
        configurable: true,
        value: create(null)
      });
    }
    module.exports = function(key) {
      ArrayPrototype[UNSCOPABLES][key] = true;
    };
  }
});

// node_modules/core-js/internals/iterators.js
var require_iterators = __commonJS({
  "node_modules/core-js/internals/iterators.js"(exports, module) {
    module.exports = {};
  }
});

// node_modules/core-js/internals/weak-map-basic-detection.js
var require_weak_map_basic_detection = __commonJS({
  "node_modules/core-js/internals/weak-map-basic-detection.js"(exports, module) {
    var global2 = require_global();
    var isCallable = require_is_callable();
    var WeakMap2 = global2.WeakMap;
    module.exports = isCallable(WeakMap2) && /native code/.test(String(WeakMap2));
  }
});

// node_modules/core-js/internals/create-property-descriptor.js
var require_create_property_descriptor = __commonJS({
  "node_modules/core-js/internals/create-property-descriptor.js"(exports, module) {
    module.exports = function(bitmap, value) {
      return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value
      };
    };
  }
});

// node_modules/core-js/internals/create-non-enumerable-property.js
var require_create_non_enumerable_property = __commonJS({
  "node_modules/core-js/internals/create-non-enumerable-property.js"(exports, module) {
    var DESCRIPTORS = require_descriptors();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module.exports = DESCRIPTORS ? function(object, key, value) {
      return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
      object[key] = value;
      return object;
    };
  }
});

// node_modules/core-js/internals/internal-state.js
var require_internal_state = __commonJS({
  "node_modules/core-js/internals/internal-state.js"(exports, module) {
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
    var global2 = require_global();
    var isObject = require_is_object();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var hasOwn = require_has_own_property();
    var shared = require_shared_store();
    var sharedKey = require_shared_key();
    var hiddenKeys = require_hidden_keys();
    var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
    var TypeError2 = global2.TypeError;
    var WeakMap2 = global2.WeakMap;
    var set;
    var get;
    var has;
    var enforce = function(it) {
      return has(it) ? get(it) : set(it, {});
    };
    var getterFor = function(TYPE) {
      return function(it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
          throw TypeError2("Incompatible receiver, " + TYPE + " required");
        }
        return state;
      };
    };
    if (NATIVE_WEAK_MAP || shared.state) {
      store = shared.state || (shared.state = new WeakMap2());
      store.get = store.get;
      store.has = store.has;
      store.set = store.set;
      set = function(it, metadata) {
        if (store.has(it))
          throw TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        store.set(it, metadata);
        return metadata;
      };
      get = function(it) {
        return store.get(it) || {};
      };
      has = function(it) {
        return store.has(it);
      };
    } else {
      STATE = sharedKey("state");
      hiddenKeys[STATE] = true;
      set = function(it, metadata) {
        if (hasOwn(it, STATE))
          throw TypeError2(OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
      };
      get = function(it) {
        return hasOwn(it, STATE) ? it[STATE] : {};
      };
      has = function(it) {
        return hasOwn(it, STATE);
      };
    }
    var store;
    var STATE;
    module.exports = {
      set,
      get,
      has,
      enforce,
      getterFor
    };
  }
});

// node_modules/core-js/internals/object-property-is-enumerable.js
var require_object_property_is_enumerable = __commonJS({
  "node_modules/core-js/internals/object-property-is-enumerable.js"(exports) {
    "use strict";
    var $propertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);
    exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
      var descriptor = getOwnPropertyDescriptor(this, V);
      return !!descriptor && descriptor.enumerable;
    } : $propertyIsEnumerable;
  }
});

// node_modules/core-js/internals/object-get-own-property-descriptor.js
var require_object_get_own_property_descriptor = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-descriptor.js"(exports) {
    var DESCRIPTORS = require_descriptors();
    var call = require_function_call();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var createPropertyDescriptor = require_create_property_descriptor();
    var toIndexedObject = require_to_indexed_object();
    var toPropertyKey = require_to_property_key();
    var hasOwn = require_has_own_property();
    var IE8_DOM_DEFINE = require_ie8_dom_define();
    var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
      O = toIndexedObject(O);
      P = toPropertyKey(P);
      if (IE8_DOM_DEFINE)
        try {
          return $getOwnPropertyDescriptor(O, P);
        } catch (error) {
        }
      if (hasOwn(O, P))
        return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
    };
  }
});

// node_modules/core-js/internals/function-name.js
var require_function_name = __commonJS({
  "node_modules/core-js/internals/function-name.js"(exports, module) {
    var DESCRIPTORS = require_descriptors();
    var hasOwn = require_has_own_property();
    var FunctionPrototype = Function.prototype;
    var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;
    var EXISTS = hasOwn(FunctionPrototype, "name");
    var PROPER = EXISTS && function something() {
    }.name === "something";
    var CONFIGURABLE = EXISTS && (!DESCRIPTORS || DESCRIPTORS && getDescriptor(FunctionPrototype, "name").configurable);
    module.exports = {
      EXISTS,
      PROPER,
      CONFIGURABLE
    };
  }
});

// node_modules/core-js/internals/inspect-source.js
var require_inspect_source = __commonJS({
  "node_modules/core-js/internals/inspect-source.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    var isCallable = require_is_callable();
    var store = require_shared_store();
    var functionToString = uncurryThis(Function.toString);
    if (!isCallable(store.inspectSource)) {
      store.inspectSource = function(it) {
        return functionToString(it);
      };
    }
    module.exports = store.inspectSource;
  }
});

// node_modules/core-js/internals/make-built-in.js
var require_make_built_in = __commonJS({
  "node_modules/core-js/internals/make-built-in.js"(exports, module) {
    var fails = require_fails();
    var isCallable = require_is_callable();
    var hasOwn = require_has_own_property();
    var DESCRIPTORS = require_descriptors();
    var CONFIGURABLE_FUNCTION_NAME = require_function_name().CONFIGURABLE;
    var inspectSource = require_inspect_source();
    var InternalStateModule = require_internal_state();
    var enforceInternalState = InternalStateModule.enforce;
    var getInternalState = InternalStateModule.get;
    var defineProperty = Object.defineProperty;
    var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function() {
      return defineProperty(function() {
      }, "length", { value: 8 }).length !== 8;
    });
    var TEMPLATE = String(String).split("String");
    var makeBuiltIn = module.exports = function(value, name, options) {
      if (String(name).slice(0, 7) === "Symbol(") {
        name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
      }
      if (options && options.getter)
        name = "get " + name;
      if (options && options.setter)
        name = "set " + name;
      if (!hasOwn(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
        if (DESCRIPTORS)
          defineProperty(value, "name", { value: name, configurable: true });
        else
          value.name = name;
      }
      if (CONFIGURABLE_LENGTH && options && hasOwn(options, "arity") && value.length !== options.arity) {
        defineProperty(value, "length", { value: options.arity });
      }
      try {
        if (options && hasOwn(options, "constructor") && options.constructor) {
          if (DESCRIPTORS)
            defineProperty(value, "prototype", { writable: false });
        } else if (value.prototype)
          value.prototype = void 0;
      } catch (error) {
      }
      var state = enforceInternalState(value);
      if (!hasOwn(state, "source")) {
        state.source = TEMPLATE.join(typeof name == "string" ? name : "");
      }
      return value;
    };
    Function.prototype.toString = makeBuiltIn(function toString() {
      return isCallable(this) && getInternalState(this).source || inspectSource(this);
    }, "toString");
  }
});

// node_modules/core-js/internals/define-built-in.js
var require_define_built_in = __commonJS({
  "node_modules/core-js/internals/define-built-in.js"(exports, module) {
    var isCallable = require_is_callable();
    var definePropertyModule = require_object_define_property();
    var makeBuiltIn = require_make_built_in();
    var defineGlobalProperty = require_define_global_property();
    module.exports = function(O, key, value, options) {
      if (!options)
        options = {};
      var simple = options.enumerable;
      var name = options.name !== void 0 ? options.name : key;
      if (isCallable(value))
        makeBuiltIn(value, name, options);
      if (options.global) {
        if (simple)
          O[key] = value;
        else
          defineGlobalProperty(key, value);
      } else {
        try {
          if (!options.unsafe)
            delete O[key];
          else if (O[key])
            simple = true;
        } catch (error) {
        }
        if (simple)
          O[key] = value;
        else
          definePropertyModule.f(O, key, {
            value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
          });
      }
      return O;
    };
  }
});

// node_modules/core-js/internals/object-get-own-property-names.js
var require_object_get_own_property_names = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-names.js"(exports) {
    var internalObjectKeys = require_object_keys_internal();
    var enumBugKeys = require_enum_bug_keys();
    var hiddenKeys = enumBugKeys.concat("length", "prototype");
    exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
      return internalObjectKeys(O, hiddenKeys);
    };
  }
});

// node_modules/core-js/internals/object-get-own-property-symbols.js
var require_object_get_own_property_symbols = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-symbols.js"(exports) {
    exports.f = Object.getOwnPropertySymbols;
  }
});

// node_modules/core-js/internals/own-keys.js
var require_own_keys = __commonJS({
  "node_modules/core-js/internals/own-keys.js"(exports, module) {
    var getBuiltIn = require_get_built_in();
    var uncurryThis = require_function_uncurry_this();
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var anObject = require_an_object();
    var concat = uncurryThis([].concat);
    module.exports = getBuiltIn("Reflect", "ownKeys") || function ownKeys(it) {
      var keys = getOwnPropertyNamesModule.f(anObject(it));
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
    };
  }
});

// node_modules/core-js/internals/copy-constructor-properties.js
var require_copy_constructor_properties = __commonJS({
  "node_modules/core-js/internals/copy-constructor-properties.js"(exports, module) {
    var hasOwn = require_has_own_property();
    var ownKeys = require_own_keys();
    var getOwnPropertyDescriptorModule = require_object_get_own_property_descriptor();
    var definePropertyModule = require_object_define_property();
    module.exports = function(target2, source, exceptions) {
      var keys = ownKeys(source);
      var defineProperty = definePropertyModule.f;
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!hasOwn(target2, key) && !(exceptions && hasOwn(exceptions, key))) {
          defineProperty(target2, key, getOwnPropertyDescriptor(source, key));
        }
      }
    };
  }
});

// node_modules/core-js/internals/is-forced.js
var require_is_forced = __commonJS({
  "node_modules/core-js/internals/is-forced.js"(exports, module) {
    var fails = require_fails();
    var isCallable = require_is_callable();
    var replacement = /#|\.prototype\./;
    var isForced = function(feature, detection) {
      var value = data[normalize3(feature)];
      return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
    };
    var normalize3 = isForced.normalize = function(string) {
      return String(string).replace(replacement, ".").toLowerCase();
    };
    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = "N";
    var POLYFILL = isForced.POLYFILL = "P";
    module.exports = isForced;
  }
});

// node_modules/core-js/internals/export.js
var require_export = __commonJS({
  "node_modules/core-js/internals/export.js"(exports, module) {
    var global2 = require_global();
    var getOwnPropertyDescriptor = require_object_get_own_property_descriptor().f;
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var defineBuiltIn = require_define_built_in();
    var defineGlobalProperty = require_define_global_property();
    var copyConstructorProperties = require_copy_constructor_properties();
    var isForced = require_is_forced();
    module.exports = function(options, source) {
      var TARGET = options.target;
      var GLOBAL = options.global;
      var STATIC = options.stat;
      var FORCED, target2, key, targetProperty, sourceProperty, descriptor;
      if (GLOBAL) {
        target2 = global2;
      } else if (STATIC) {
        target2 = global2[TARGET] || defineGlobalProperty(TARGET, {});
      } else {
        target2 = (global2[TARGET] || {}).prototype;
      }
      if (target2)
        for (key in source) {
          sourceProperty = source[key];
          if (options.dontCallGetSet) {
            descriptor = getOwnPropertyDescriptor(target2, key);
            targetProperty = descriptor && descriptor.value;
          } else
            targetProperty = target2[key];
          FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
          if (!FORCED && targetProperty !== void 0) {
            if (typeof sourceProperty == typeof targetProperty)
              continue;
            copyConstructorProperties(sourceProperty, targetProperty);
          }
          if (options.sham || targetProperty && targetProperty.sham) {
            createNonEnumerableProperty(sourceProperty, "sham", true);
          }
          defineBuiltIn(target2, key, sourceProperty, options);
        }
    };
  }
});

// node_modules/core-js/internals/correct-prototype-getter.js
var require_correct_prototype_getter = __commonJS({
  "node_modules/core-js/internals/correct-prototype-getter.js"(exports, module) {
    var fails = require_fails();
    module.exports = !fails(function() {
      function F() {
      }
      F.prototype.constructor = null;
      return Object.getPrototypeOf(new F()) !== F.prototype;
    });
  }
});

// node_modules/core-js/internals/object-get-prototype-of.js
var require_object_get_prototype_of = __commonJS({
  "node_modules/core-js/internals/object-get-prototype-of.js"(exports, module) {
    var hasOwn = require_has_own_property();
    var isCallable = require_is_callable();
    var toObject = require_to_object();
    var sharedKey = require_shared_key();
    var CORRECT_PROTOTYPE_GETTER = require_correct_prototype_getter();
    var IE_PROTO = sharedKey("IE_PROTO");
    var $Object = Object;
    var ObjectPrototype = $Object.prototype;
    module.exports = CORRECT_PROTOTYPE_GETTER ? $Object.getPrototypeOf : function(O) {
      var object = toObject(O);
      if (hasOwn(object, IE_PROTO))
        return object[IE_PROTO];
      var constructor = object.constructor;
      if (isCallable(constructor) && object instanceof constructor) {
        return constructor.prototype;
      }
      return object instanceof $Object ? ObjectPrototype : null;
    };
  }
});

// node_modules/core-js/internals/iterators-core.js
var require_iterators_core = __commonJS({
  "node_modules/core-js/internals/iterators-core.js"(exports, module) {
    "use strict";
    var fails = require_fails();
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var create = require_object_create();
    var getPrototypeOf = require_object_get_prototype_of();
    var defineBuiltIn = require_define_built_in();
    var wellKnownSymbol = require_well_known_symbol();
    var IS_PURE = require_is_pure();
    var ITERATOR = wellKnownSymbol("iterator");
    var BUGGY_SAFARI_ITERATORS = false;
    var IteratorPrototype;
    var PrototypeOfArrayIteratorPrototype;
    var arrayIterator;
    if ([].keys) {
      arrayIterator = [].keys();
      if (!("next" in arrayIterator))
        BUGGY_SAFARI_ITERATORS = true;
      else {
        PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
        if (PrototypeOfArrayIteratorPrototype !== Object.prototype)
          IteratorPrototype = PrototypeOfArrayIteratorPrototype;
      }
    }
    var NEW_ITERATOR_PROTOTYPE = !isObject(IteratorPrototype) || fails(function() {
      var test = {};
      return IteratorPrototype[ITERATOR].call(test) !== test;
    });
    if (NEW_ITERATOR_PROTOTYPE)
      IteratorPrototype = {};
    else if (IS_PURE)
      IteratorPrototype = create(IteratorPrototype);
    if (!isCallable(IteratorPrototype[ITERATOR])) {
      defineBuiltIn(IteratorPrototype, ITERATOR, function() {
        return this;
      });
    }
    module.exports = {
      IteratorPrototype,
      BUGGY_SAFARI_ITERATORS
    };
  }
});

// node_modules/core-js/internals/set-to-string-tag.js
var require_set_to_string_tag = __commonJS({
  "node_modules/core-js/internals/set-to-string-tag.js"(exports, module) {
    var defineProperty = require_object_define_property().f;
    var hasOwn = require_has_own_property();
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    module.exports = function(target2, TAG, STATIC) {
      if (target2 && !STATIC)
        target2 = target2.prototype;
      if (target2 && !hasOwn(target2, TO_STRING_TAG)) {
        defineProperty(target2, TO_STRING_TAG, { configurable: true, value: TAG });
      }
    };
  }
});

// node_modules/core-js/internals/iterator-create-constructor.js
var require_iterator_create_constructor = __commonJS({
  "node_modules/core-js/internals/iterator-create-constructor.js"(exports, module) {
    "use strict";
    var IteratorPrototype = require_iterators_core().IteratorPrototype;
    var create = require_object_create();
    var createPropertyDescriptor = require_create_property_descriptor();
    var setToStringTag = require_set_to_string_tag();
    var Iterators = require_iterators();
    var returnThis = function() {
      return this;
    };
    module.exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
      var TO_STRING_TAG = NAME + " Iterator";
      IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next) });
      setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
      Iterators[TO_STRING_TAG] = returnThis;
      return IteratorConstructor;
    };
  }
});

// node_modules/core-js/internals/a-possible-prototype.js
var require_a_possible_prototype = __commonJS({
  "node_modules/core-js/internals/a-possible-prototype.js"(exports, module) {
    var isCallable = require_is_callable();
    var $String = String;
    var $TypeError = TypeError;
    module.exports = function(argument) {
      if (typeof argument == "object" || isCallable(argument))
        return argument;
      throw $TypeError("Can't set " + $String(argument) + " as a prototype");
    };
  }
});

// node_modules/core-js/internals/object-set-prototype-of.js
var require_object_set_prototype_of = __commonJS({
  "node_modules/core-js/internals/object-set-prototype-of.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    var anObject = require_an_object();
    var aPossiblePrototype = require_a_possible_prototype();
    module.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
      var CORRECT_SETTER = false;
      var test = {};
      var setter;
      try {
        setter = uncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set);
        setter(test, []);
        CORRECT_SETTER = test instanceof Array;
      } catch (error) {
      }
      return function setPrototypeOf(O, proto) {
        anObject(O);
        aPossiblePrototype(proto);
        if (CORRECT_SETTER)
          setter(O, proto);
        else
          O.__proto__ = proto;
        return O;
      };
    }() : void 0);
  }
});

// node_modules/core-js/internals/iterator-define.js
var require_iterator_define = __commonJS({
  "node_modules/core-js/internals/iterator-define.js"(exports, module) {
    "use strict";
    var $ = require_export();
    var call = require_function_call();
    var IS_PURE = require_is_pure();
    var FunctionName = require_function_name();
    var isCallable = require_is_callable();
    var createIteratorConstructor = require_iterator_create_constructor();
    var getPrototypeOf = require_object_get_prototype_of();
    var setPrototypeOf = require_object_set_prototype_of();
    var setToStringTag = require_set_to_string_tag();
    var createNonEnumerableProperty = require_create_non_enumerable_property();
    var defineBuiltIn = require_define_built_in();
    var wellKnownSymbol = require_well_known_symbol();
    var Iterators = require_iterators();
    var IteratorsCore = require_iterators_core();
    var PROPER_FUNCTION_NAME = FunctionName.PROPER;
    var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
    var IteratorPrototype = IteratorsCore.IteratorPrototype;
    var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
    var ITERATOR = wellKnownSymbol("iterator");
    var KEYS = "keys";
    var VALUES = "values";
    var ENTRIES = "entries";
    var returnThis = function() {
      return this;
    };
    module.exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
      createIteratorConstructor(IteratorConstructor, NAME, next);
      var getIterationMethod = function(KIND) {
        if (KIND === DEFAULT && defaultIterator)
          return defaultIterator;
        if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype)
          return IterablePrototype[KIND];
        switch (KIND) {
          case KEYS:
            return function keys() {
              return new IteratorConstructor(this, KIND);
            };
          case VALUES:
            return function values() {
              return new IteratorConstructor(this, KIND);
            };
          case ENTRIES:
            return function entries() {
              return new IteratorConstructor(this, KIND);
            };
        }
        return function() {
          return new IteratorConstructor(this);
        };
      };
      var TO_STRING_TAG = NAME + " Iterator";
      var INCORRECT_VALUES_NAME = false;
      var IterablePrototype = Iterable.prototype;
      var nativeIterator = IterablePrototype[ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
      var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
      var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
      var CurrentIteratorPrototype, methods, KEY;
      if (anyNativeIterator) {
        CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
        if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
          if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
            if (setPrototypeOf) {
              setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
            } else if (!isCallable(CurrentIteratorPrototype[ITERATOR])) {
              defineBuiltIn(CurrentIteratorPrototype, ITERATOR, returnThis);
            }
          }
          setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
          if (IS_PURE)
            Iterators[TO_STRING_TAG] = returnThis;
        }
      }
      if (PROPER_FUNCTION_NAME && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
        if (!IS_PURE && CONFIGURABLE_FUNCTION_NAME) {
          createNonEnumerableProperty(IterablePrototype, "name", VALUES);
        } else {
          INCORRECT_VALUES_NAME = true;
          defaultIterator = function values() {
            return call(nativeIterator, this);
          };
        }
      }
      if (DEFAULT) {
        methods = {
          values: getIterationMethod(VALUES),
          keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
          entries: getIterationMethod(ENTRIES)
        };
        if (FORCED)
          for (KEY in methods) {
            if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
              defineBuiltIn(IterablePrototype, KEY, methods[KEY]);
            }
          }
        else
          $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
      }
      if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
        defineBuiltIn(IterablePrototype, ITERATOR, defaultIterator, { name: DEFAULT });
      }
      Iterators[NAME] = defaultIterator;
      return methods;
    };
  }
});

// node_modules/core-js/internals/create-iter-result-object.js
var require_create_iter_result_object = __commonJS({
  "node_modules/core-js/internals/create-iter-result-object.js"(exports, module) {
    module.exports = function(value, done) {
      return { value, done };
    };
  }
});

// node_modules/core-js/modules/es.array.iterator.js
var require_es_array_iterator = __commonJS({
  "node_modules/core-js/modules/es.array.iterator.js"(exports, module) {
    "use strict";
    var toIndexedObject = require_to_indexed_object();
    var addToUnscopables = require_add_to_unscopables();
    var Iterators = require_iterators();
    var InternalStateModule = require_internal_state();
    var defineProperty = require_object_define_property().f;
    var defineIterator = require_iterator_define();
    var createIterResultObject = require_create_iter_result_object();
    var IS_PURE = require_is_pure();
    var DESCRIPTORS = require_descriptors();
    var ARRAY_ITERATOR = "Array Iterator";
    var setInternalState = InternalStateModule.set;
    var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);
    module.exports = defineIterator(Array, "Array", function(iterated, kind) {
      setInternalState(this, {
        type: ARRAY_ITERATOR,
        target: toIndexedObject(iterated),
        index: 0,
        kind
      });
    }, function() {
      var state = getInternalState(this);
      var target2 = state.target;
      var kind = state.kind;
      var index = state.index++;
      if (!target2 || index >= target2.length) {
        state.target = void 0;
        return createIterResultObject(void 0, true);
      }
      if (kind == "keys")
        return createIterResultObject(index, false);
      if (kind == "values")
        return createIterResultObject(target2[index], false);
      return createIterResultObject([index, target2[index]], false);
    }, "values");
    var values = Iterators.Arguments = Iterators.Array;
    addToUnscopables("keys");
    addToUnscopables("values");
    addToUnscopables("entries");
    if (!IS_PURE && DESCRIPTORS && values.name !== "values")
      try {
        defineProperty(values, "name", { value: "values" });
      } catch (error) {
      }
  }
});

// node_modules/core-js/internals/create-property.js
var require_create_property = __commonJS({
  "node_modules/core-js/internals/create-property.js"(exports, module) {
    "use strict";
    var toPropertyKey = require_to_property_key();
    var definePropertyModule = require_object_define_property();
    var createPropertyDescriptor = require_create_property_descriptor();
    module.exports = function(object, key, value) {
      var propertyKey = toPropertyKey(key);
      if (propertyKey in object)
        definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
      else
        object[propertyKey] = value;
    };
  }
});

// node_modules/core-js/internals/array-slice-simple.js
var require_array_slice_simple = __commonJS({
  "node_modules/core-js/internals/array-slice-simple.js"(exports, module) {
    var toAbsoluteIndex = require_to_absolute_index();
    var lengthOfArrayLike = require_length_of_array_like();
    var createProperty = require_create_property();
    var $Array = Array;
    var max = Math.max;
    module.exports = function(O, start, end) {
      var length = lengthOfArrayLike(O);
      var k = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === void 0 ? length : end, length);
      var result = $Array(max(fin - k, 0));
      for (var n = 0; k < fin; k++, n++)
        createProperty(result, n, O[k]);
      result.length = n;
      return result;
    };
  }
});

// node_modules/core-js/internals/object-get-own-property-names-external.js
var require_object_get_own_property_names_external = __commonJS({
  "node_modules/core-js/internals/object-get-own-property-names-external.js"(exports, module) {
    var classof = require_classof_raw();
    var toIndexedObject = require_to_indexed_object();
    var $getOwnPropertyNames = require_object_get_own_property_names().f;
    var arraySlice = require_array_slice_simple();
    var windowNames = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    var getWindowNames = function(it) {
      try {
        return $getOwnPropertyNames(it);
      } catch (error) {
        return arraySlice(windowNames);
      }
    };
    module.exports.f = function getOwnPropertyNames(it) {
      return windowNames && classof(it) == "Window" ? getWindowNames(it) : $getOwnPropertyNames(toIndexedObject(it));
    };
  }
});

// node_modules/core-js/internals/array-buffer-non-extensible.js
var require_array_buffer_non_extensible = __commonJS({
  "node_modules/core-js/internals/array-buffer-non-extensible.js"(exports, module) {
    var fails = require_fails();
    module.exports = fails(function() {
      if (typeof ArrayBuffer == "function") {
        var buffer = new ArrayBuffer(8);
        if (Object.isExtensible(buffer))
          Object.defineProperty(buffer, "a", { value: 8 });
      }
    });
  }
});

// node_modules/core-js/internals/object-is-extensible.js
var require_object_is_extensible = __commonJS({
  "node_modules/core-js/internals/object-is-extensible.js"(exports, module) {
    var fails = require_fails();
    var isObject = require_is_object();
    var classof = require_classof_raw();
    var ARRAY_BUFFER_NON_EXTENSIBLE = require_array_buffer_non_extensible();
    var $isExtensible = Object.isExtensible;
    var FAILS_ON_PRIMITIVES = fails(function() {
      $isExtensible(1);
    });
    module.exports = FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE ? function isExtensible(it) {
      if (!isObject(it))
        return false;
      if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) == "ArrayBuffer")
        return false;
      return $isExtensible ? $isExtensible(it) : true;
    } : $isExtensible;
  }
});

// node_modules/core-js/internals/freezing.js
var require_freezing = __commonJS({
  "node_modules/core-js/internals/freezing.js"(exports, module) {
    var fails = require_fails();
    module.exports = !fails(function() {
      return Object.isExtensible(Object.preventExtensions({}));
    });
  }
});

// node_modules/core-js/internals/internal-metadata.js
var require_internal_metadata = __commonJS({
  "node_modules/core-js/internals/internal-metadata.js"(exports, module) {
    var $ = require_export();
    var uncurryThis = require_function_uncurry_this();
    var hiddenKeys = require_hidden_keys();
    var isObject = require_is_object();
    var hasOwn = require_has_own_property();
    var defineProperty = require_object_define_property().f;
    var getOwnPropertyNamesModule = require_object_get_own_property_names();
    var getOwnPropertyNamesExternalModule = require_object_get_own_property_names_external();
    var isExtensible = require_object_is_extensible();
    var uid = require_uid();
    var FREEZING = require_freezing();
    var REQUIRED = false;
    var METADATA = uid("meta");
    var id = 0;
    var setMetadata = function(it) {
      defineProperty(it, METADATA, { value: {
        objectID: "O" + id++,
        weakData: {}
      } });
    };
    var fastKey = function(it, create) {
      if (!isObject(it))
        return typeof it == "symbol" ? it : (typeof it == "string" ? "S" : "P") + it;
      if (!hasOwn(it, METADATA)) {
        if (!isExtensible(it))
          return "F";
        if (!create)
          return "E";
        setMetadata(it);
      }
      return it[METADATA].objectID;
    };
    var getWeakData = function(it, create) {
      if (!hasOwn(it, METADATA)) {
        if (!isExtensible(it))
          return true;
        if (!create)
          return false;
        setMetadata(it);
      }
      return it[METADATA].weakData;
    };
    var onFreeze = function(it) {
      if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA))
        setMetadata(it);
      return it;
    };
    var enable = function() {
      meta.enable = function() {
      };
      REQUIRED = true;
      var getOwnPropertyNames = getOwnPropertyNamesModule.f;
      var splice = uncurryThis([].splice);
      var test = {};
      test[METADATA] = 1;
      if (getOwnPropertyNames(test).length) {
        getOwnPropertyNamesModule.f = function(it) {
          var result = getOwnPropertyNames(it);
          for (var i = 0, length = result.length; i < length; i++) {
            if (result[i] === METADATA) {
              splice(result, i, 1);
              break;
            }
          }
          return result;
        };
        $({ target: "Object", stat: true, forced: true }, {
          getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
        });
      }
    };
    var meta = module.exports = {
      enable,
      fastKey,
      getWeakData,
      onFreeze
    };
    hiddenKeys[METADATA] = true;
  }
});

// node_modules/core-js/internals/function-uncurry-this-clause.js
var require_function_uncurry_this_clause = __commonJS({
  "node_modules/core-js/internals/function-uncurry-this-clause.js"(exports, module) {
    var classofRaw = require_classof_raw();
    var uncurryThis = require_function_uncurry_this();
    module.exports = function(fn) {
      if (classofRaw(fn) === "Function")
        return uncurryThis(fn);
    };
  }
});

// node_modules/core-js/internals/function-bind-context.js
var require_function_bind_context = __commonJS({
  "node_modules/core-js/internals/function-bind-context.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this_clause();
    var aCallable = require_a_callable();
    var NATIVE_BIND = require_function_bind_native();
    var bind = uncurryThis(uncurryThis.bind);
    module.exports = function(fn, that) {
      aCallable(fn);
      return that === void 0 ? fn : NATIVE_BIND ? bind(fn, that) : function() {
        return fn.apply(that, arguments);
      };
    };
  }
});

// node_modules/core-js/internals/is-array-iterator-method.js
var require_is_array_iterator_method = __commonJS({
  "node_modules/core-js/internals/is-array-iterator-method.js"(exports, module) {
    var wellKnownSymbol = require_well_known_symbol();
    var Iterators = require_iterators();
    var ITERATOR = wellKnownSymbol("iterator");
    var ArrayPrototype = Array.prototype;
    module.exports = function(it) {
      return it !== void 0 && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
    };
  }
});

// node_modules/core-js/internals/to-string-tag-support.js
var require_to_string_tag_support = __commonJS({
  "node_modules/core-js/internals/to-string-tag-support.js"(exports, module) {
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var test = {};
    test[TO_STRING_TAG] = "z";
    module.exports = String(test) === "[object z]";
  }
});

// node_modules/core-js/internals/classof.js
var require_classof = __commonJS({
  "node_modules/core-js/internals/classof.js"(exports, module) {
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var isCallable = require_is_callable();
    var classofRaw = require_classof_raw();
    var wellKnownSymbol = require_well_known_symbol();
    var TO_STRING_TAG = wellKnownSymbol("toStringTag");
    var $Object = Object;
    var CORRECT_ARGUMENTS = classofRaw(function() {
      return arguments;
    }()) == "Arguments";
    var tryGet = function(it, key) {
      try {
        return it[key];
      } catch (error) {
      }
    };
    module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
      var O, tag, result;
      return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = $Object(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && isCallable(O.callee) ? "Arguments" : result;
    };
  }
});

// node_modules/core-js/internals/get-iterator-method.js
var require_get_iterator_method = __commonJS({
  "node_modules/core-js/internals/get-iterator-method.js"(exports, module) {
    var classof = require_classof();
    var getMethod = require_get_method();
    var isNullOrUndefined = require_is_null_or_undefined();
    var Iterators = require_iterators();
    var wellKnownSymbol = require_well_known_symbol();
    var ITERATOR = wellKnownSymbol("iterator");
    module.exports = function(it) {
      if (!isNullOrUndefined(it))
        return getMethod(it, ITERATOR) || getMethod(it, "@@iterator") || Iterators[classof(it)];
    };
  }
});

// node_modules/core-js/internals/get-iterator.js
var require_get_iterator = __commonJS({
  "node_modules/core-js/internals/get-iterator.js"(exports, module) {
    var call = require_function_call();
    var aCallable = require_a_callable();
    var anObject = require_an_object();
    var tryToString = require_try_to_string();
    var getIteratorMethod = require_get_iterator_method();
    var $TypeError = TypeError;
    module.exports = function(argument, usingIterator) {
      var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
      if (aCallable(iteratorMethod))
        return anObject(call(iteratorMethod, argument));
      throw $TypeError(tryToString(argument) + " is not iterable");
    };
  }
});

// node_modules/core-js/internals/iterator-close.js
var require_iterator_close = __commonJS({
  "node_modules/core-js/internals/iterator-close.js"(exports, module) {
    var call = require_function_call();
    var anObject = require_an_object();
    var getMethod = require_get_method();
    module.exports = function(iterator, kind, value) {
      var innerResult, innerError;
      anObject(iterator);
      try {
        innerResult = getMethod(iterator, "return");
        if (!innerResult) {
          if (kind === "throw")
            throw value;
          return value;
        }
        innerResult = call(innerResult, iterator);
      } catch (error) {
        innerError = true;
        innerResult = error;
      }
      if (kind === "throw")
        throw value;
      if (innerError)
        throw innerResult;
      anObject(innerResult);
      return value;
    };
  }
});

// node_modules/core-js/internals/iterate.js
var require_iterate = __commonJS({
  "node_modules/core-js/internals/iterate.js"(exports, module) {
    var bind = require_function_bind_context();
    var call = require_function_call();
    var anObject = require_an_object();
    var tryToString = require_try_to_string();
    var isArrayIteratorMethod = require_is_array_iterator_method();
    var lengthOfArrayLike = require_length_of_array_like();
    var isPrototypeOf = require_object_is_prototype_of();
    var getIterator = require_get_iterator();
    var getIteratorMethod = require_get_iterator_method();
    var iteratorClose = require_iterator_close();
    var $TypeError = TypeError;
    var Result = function(stopped, result) {
      this.stopped = stopped;
      this.result = result;
    };
    var ResultPrototype = Result.prototype;
    module.exports = function(iterable, unboundFunction, options) {
      var that = options && options.that;
      var AS_ENTRIES = !!(options && options.AS_ENTRIES);
      var IS_RECORD = !!(options && options.IS_RECORD);
      var IS_ITERATOR = !!(options && options.IS_ITERATOR);
      var INTERRUPTED = !!(options && options.INTERRUPTED);
      var fn = bind(unboundFunction, that);
      var iterator, iterFn, index, length, result, next, step;
      var stop = function(condition) {
        if (iterator)
          iteratorClose(iterator, "normal", condition);
        return new Result(true, condition);
      };
      var callFn = function(value) {
        if (AS_ENTRIES) {
          anObject(value);
          return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }
        return INTERRUPTED ? fn(value, stop) : fn(value);
      };
      if (IS_RECORD) {
        iterator = iterable.iterator;
      } else if (IS_ITERATOR) {
        iterator = iterable;
      } else {
        iterFn = getIteratorMethod(iterable);
        if (!iterFn)
          throw $TypeError(tryToString(iterable) + " is not iterable");
        if (isArrayIteratorMethod(iterFn)) {
          for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
            result = callFn(iterable[index]);
            if (result && isPrototypeOf(ResultPrototype, result))
              return result;
          }
          return new Result(false);
        }
        iterator = getIterator(iterable, iterFn);
      }
      next = IS_RECORD ? iterable.next : iterator.next;
      while (!(step = call(next, iterator)).done) {
        try {
          result = callFn(step.value);
        } catch (error) {
          iteratorClose(iterator, "throw", error);
        }
        if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result))
          return result;
      }
      return new Result(false);
    };
  }
});

// node_modules/core-js/internals/an-instance.js
var require_an_instance = __commonJS({
  "node_modules/core-js/internals/an-instance.js"(exports, module) {
    var isPrototypeOf = require_object_is_prototype_of();
    var $TypeError = TypeError;
    module.exports = function(it, Prototype) {
      if (isPrototypeOf(Prototype, it))
        return it;
      throw $TypeError("Incorrect invocation");
    };
  }
});

// node_modules/core-js/internals/check-correctness-of-iteration.js
var require_check_correctness_of_iteration = __commonJS({
  "node_modules/core-js/internals/check-correctness-of-iteration.js"(exports, module) {
    var wellKnownSymbol = require_well_known_symbol();
    var ITERATOR = wellKnownSymbol("iterator");
    var SAFE_CLOSING = false;
    try {
      called = 0;
      iteratorWithReturn = {
        next: function() {
          return { done: !!called++ };
        },
        "return": function() {
          SAFE_CLOSING = true;
        }
      };
      iteratorWithReturn[ITERATOR] = function() {
        return this;
      };
      Array.from(iteratorWithReturn, function() {
        throw 2;
      });
    } catch (error) {
    }
    var called;
    var iteratorWithReturn;
    module.exports = function(exec, SKIP_CLOSING) {
      if (!SKIP_CLOSING && !SAFE_CLOSING)
        return false;
      var ITERATION_SUPPORT = false;
      try {
        var object = {};
        object[ITERATOR] = function() {
          return {
            next: function() {
              return { done: ITERATION_SUPPORT = true };
            }
          };
        };
        exec(object);
      } catch (error) {
      }
      return ITERATION_SUPPORT;
    };
  }
});

// node_modules/core-js/internals/inherit-if-required.js
var require_inherit_if_required = __commonJS({
  "node_modules/core-js/internals/inherit-if-required.js"(exports, module) {
    var isCallable = require_is_callable();
    var isObject = require_is_object();
    var setPrototypeOf = require_object_set_prototype_of();
    module.exports = function($this, dummy, Wrapper) {
      var NewTarget, NewTargetPrototype;
      if (setPrototypeOf && isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype)
        setPrototypeOf($this, NewTargetPrototype);
      return $this;
    };
  }
});

// node_modules/core-js/internals/collection.js
var require_collection = __commonJS({
  "node_modules/core-js/internals/collection.js"(exports, module) {
    "use strict";
    var $ = require_export();
    var global2 = require_global();
    var uncurryThis = require_function_uncurry_this();
    var isForced = require_is_forced();
    var defineBuiltIn = require_define_built_in();
    var InternalMetadataModule = require_internal_metadata();
    var iterate = require_iterate();
    var anInstance = require_an_instance();
    var isCallable = require_is_callable();
    var isNullOrUndefined = require_is_null_or_undefined();
    var isObject = require_is_object();
    var fails = require_fails();
    var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
    var setToStringTag = require_set_to_string_tag();
    var inheritIfRequired = require_inherit_if_required();
    module.exports = function(CONSTRUCTOR_NAME, wrapper, common) {
      var IS_MAP = CONSTRUCTOR_NAME.indexOf("Map") !== -1;
      var IS_WEAK = CONSTRUCTOR_NAME.indexOf("Weak") !== -1;
      var ADDER = IS_MAP ? "set" : "add";
      var NativeConstructor = global2[CONSTRUCTOR_NAME];
      var NativePrototype = NativeConstructor && NativeConstructor.prototype;
      var Constructor = NativeConstructor;
      var exported = {};
      var fixMethod = function(KEY) {
        var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
        defineBuiltIn(
          NativePrototype,
          KEY,
          KEY == "add" ? function add(value) {
            uncurriedNativeMethod(this, value === 0 ? 0 : value);
            return this;
          } : KEY == "delete" ? function(key) {
            return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
          } : KEY == "get" ? function get(key) {
            return IS_WEAK && !isObject(key) ? void 0 : uncurriedNativeMethod(this, key === 0 ? 0 : key);
          } : KEY == "has" ? function has(key) {
            return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
          } : function set(key, value) {
            uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
            return this;
          }
        );
      };
      var REPLACE = isForced(
        CONSTRUCTOR_NAME,
        !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function() {
          new NativeConstructor().entries().next();
        }))
      );
      if (REPLACE) {
        Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
        InternalMetadataModule.enable();
      } else if (isForced(CONSTRUCTOR_NAME, true)) {
        var instance = new Constructor();
        var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
        var THROWS_ON_PRIMITIVES = fails(function() {
          instance.has(1);
        });
        var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function(iterable) {
          new NativeConstructor(iterable);
        });
        var BUGGY_ZERO = !IS_WEAK && fails(function() {
          var $instance = new NativeConstructor();
          var index = 5;
          while (index--)
            $instance[ADDER](index, index);
          return !$instance.has(-0);
        });
        if (!ACCEPT_ITERABLES) {
          Constructor = wrapper(function(dummy, iterable) {
            anInstance(dummy, NativePrototype);
            var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
            if (!isNullOrUndefined(iterable))
              iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
            return that;
          });
          Constructor.prototype = NativePrototype;
          NativePrototype.constructor = Constructor;
        }
        if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
          fixMethod("delete");
          fixMethod("has");
          IS_MAP && fixMethod("get");
        }
        if (BUGGY_ZERO || HASNT_CHAINING)
          fixMethod(ADDER);
        if (IS_WEAK && NativePrototype.clear)
          delete NativePrototype.clear;
      }
      exported[CONSTRUCTOR_NAME] = Constructor;
      $({ global: true, constructor: true, forced: Constructor != NativeConstructor }, exported);
      setToStringTag(Constructor, CONSTRUCTOR_NAME);
      if (!IS_WEAK)
        common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
      return Constructor;
    };
  }
});

// node_modules/core-js/internals/define-built-ins.js
var require_define_built_ins = __commonJS({
  "node_modules/core-js/internals/define-built-ins.js"(exports, module) {
    var defineBuiltIn = require_define_built_in();
    module.exports = function(target2, src, options) {
      for (var key in src)
        defineBuiltIn(target2, key, src[key], options);
      return target2;
    };
  }
});

// node_modules/core-js/internals/set-species.js
var require_set_species = __commonJS({
  "node_modules/core-js/internals/set-species.js"(exports, module) {
    "use strict";
    var getBuiltIn = require_get_built_in();
    var definePropertyModule = require_object_define_property();
    var wellKnownSymbol = require_well_known_symbol();
    var DESCRIPTORS = require_descriptors();
    var SPECIES = wellKnownSymbol("species");
    module.exports = function(CONSTRUCTOR_NAME) {
      var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
      var defineProperty = definePropertyModule.f;
      if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
        defineProperty(Constructor, SPECIES, {
          configurable: true,
          get: function() {
            return this;
          }
        });
      }
    };
  }
});

// node_modules/core-js/internals/collection-strong.js
var require_collection_strong = __commonJS({
  "node_modules/core-js/internals/collection-strong.js"(exports, module) {
    "use strict";
    var defineProperty = require_object_define_property().f;
    var create = require_object_create();
    var defineBuiltIns = require_define_built_ins();
    var bind = require_function_bind_context();
    var anInstance = require_an_instance();
    var isNullOrUndefined = require_is_null_or_undefined();
    var iterate = require_iterate();
    var defineIterator = require_iterator_define();
    var createIterResultObject = require_create_iter_result_object();
    var setSpecies = require_set_species();
    var DESCRIPTORS = require_descriptors();
    var fastKey = require_internal_metadata().fastKey;
    var InternalStateModule = require_internal_state();
    var setInternalState = InternalStateModule.set;
    var internalStateGetterFor = InternalStateModule.getterFor;
    module.exports = {
      getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
        var Constructor = wrapper(function(that, iterable) {
          anInstance(that, Prototype);
          setInternalState(that, {
            type: CONSTRUCTOR_NAME,
            index: create(null),
            first: void 0,
            last: void 0,
            size: 0
          });
          if (!DESCRIPTORS)
            that.size = 0;
          if (!isNullOrUndefined(iterable))
            iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
        });
        var Prototype = Constructor.prototype;
        var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var define2 = function(that, key, value) {
          var state = getInternalState(that);
          var entry = getEntry(that, key);
          var previous, index;
          if (entry) {
            entry.value = value;
          } else {
            state.last = entry = {
              index: index = fastKey(key, true),
              key,
              value,
              previous: previous = state.last,
              next: void 0,
              removed: false
            };
            if (!state.first)
              state.first = entry;
            if (previous)
              previous.next = entry;
            if (DESCRIPTORS)
              state.size++;
            else
              that.size++;
            if (index !== "F")
              state.index[index] = entry;
          }
          return that;
        };
        var getEntry = function(that, key) {
          var state = getInternalState(that);
          var index = fastKey(key);
          var entry;
          if (index !== "F")
            return state.index[index];
          for (entry = state.first; entry; entry = entry.next) {
            if (entry.key == key)
              return entry;
          }
        };
        defineBuiltIns(Prototype, {
          clear: function clear() {
            var that = this;
            var state = getInternalState(that);
            var data = state.index;
            var entry = state.first;
            while (entry) {
              entry.removed = true;
              if (entry.previous)
                entry.previous = entry.previous.next = void 0;
              delete data[entry.index];
              entry = entry.next;
            }
            state.first = state.last = void 0;
            if (DESCRIPTORS)
              state.size = 0;
            else
              that.size = 0;
          },
          "delete": function(key) {
            var that = this;
            var state = getInternalState(that);
            var entry = getEntry(that, key);
            if (entry) {
              var next = entry.next;
              var prev = entry.previous;
              delete state.index[entry.index];
              entry.removed = true;
              if (prev)
                prev.next = next;
              if (next)
                next.previous = prev;
              if (state.first == entry)
                state.first = next;
              if (state.last == entry)
                state.last = prev;
              if (DESCRIPTORS)
                state.size--;
              else
                that.size--;
            }
            return !!entry;
          },
          forEach: function forEach(callbackfn) {
            var state = getInternalState(this);
            var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : void 0);
            var entry;
            while (entry = entry ? entry.next : state.first) {
              boundFunction(entry.value, entry.key, this);
              while (entry && entry.removed)
                entry = entry.previous;
            }
          },
          has: function has(key) {
            return !!getEntry(this, key);
          }
        });
        defineBuiltIns(Prototype, IS_MAP ? {
          get: function get(key) {
            var entry = getEntry(this, key);
            return entry && entry.value;
          },
          set: function set(key, value) {
            return define2(this, key === 0 ? 0 : key, value);
          }
        } : {
          add: function add(value) {
            return define2(this, value = value === 0 ? 0 : value, value);
          }
        });
        if (DESCRIPTORS)
          defineProperty(Prototype, "size", {
            get: function() {
              return getInternalState(this).size;
            }
          });
        return Constructor;
      },
      setStrong: function(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
        var ITERATOR_NAME = CONSTRUCTOR_NAME + " Iterator";
        var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
        defineIterator(Constructor, CONSTRUCTOR_NAME, function(iterated, kind) {
          setInternalState(this, {
            type: ITERATOR_NAME,
            target: iterated,
            state: getInternalCollectionState(iterated),
            kind,
            last: void 0
          });
        }, function() {
          var state = getInternalIteratorState(this);
          var kind = state.kind;
          var entry = state.last;
          while (entry && entry.removed)
            entry = entry.previous;
          if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
            state.target = void 0;
            return createIterResultObject(void 0, true);
          }
          if (kind == "keys")
            return createIterResultObject(entry.key, false);
          if (kind == "values")
            return createIterResultObject(entry.value, false);
          return createIterResultObject([entry.key, entry.value], false);
        }, IS_MAP ? "entries" : "values", !IS_MAP, true);
        setSpecies(CONSTRUCTOR_NAME);
      }
    };
  }
});

// node_modules/core-js/modules/es.map.constructor.js
var require_es_map_constructor = __commonJS({
  "node_modules/core-js/modules/es.map.constructor.js"() {
    "use strict";
    var collection = require_collection();
    var collectionStrong = require_collection_strong();
    collection("Map", function(init4) {
      return function Map2() {
        return init4(this, arguments.length ? arguments[0] : void 0);
      };
    }, collectionStrong);
  }
});

// node_modules/core-js/modules/es.map.js
var require_es_map = __commonJS({
  "node_modules/core-js/modules/es.map.js"() {
    require_es_map_constructor();
  }
});

// node_modules/core-js/internals/object-to-string.js
var require_object_to_string = __commonJS({
  "node_modules/core-js/internals/object-to-string.js"(exports, module) {
    "use strict";
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var classof = require_classof();
    module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
      return "[object " + classof(this) + "]";
    };
  }
});

// node_modules/core-js/modules/es.object.to-string.js
var require_es_object_to_string = __commonJS({
  "node_modules/core-js/modules/es.object.to-string.js"() {
    var TO_STRING_TAG_SUPPORT = require_to_string_tag_support();
    var defineBuiltIn = require_define_built_in();
    var toString = require_object_to_string();
    if (!TO_STRING_TAG_SUPPORT) {
      defineBuiltIn(Object.prototype, "toString", toString, { unsafe: true });
    }
  }
});

// node_modules/core-js/internals/to-string.js
var require_to_string = __commonJS({
  "node_modules/core-js/internals/to-string.js"(exports, module) {
    var classof = require_classof();
    var $String = String;
    module.exports = function(argument) {
      if (classof(argument) === "Symbol")
        throw TypeError("Cannot convert a Symbol value to a string");
      return $String(argument);
    };
  }
});

// node_modules/core-js/internals/string-multibyte.js
var require_string_multibyte = __commonJS({
  "node_modules/core-js/internals/string-multibyte.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    var toIntegerOrInfinity = require_to_integer_or_infinity();
    var toString = require_to_string();
    var requireObjectCoercible = require_require_object_coercible();
    var charAt = uncurryThis("".charAt);
    var charCodeAt = uncurryThis("".charCodeAt);
    var stringSlice = uncurryThis("".slice);
    var createMethod = function(CONVERT_TO_STRING) {
      return function($this, pos) {
        var S = toString(requireObjectCoercible($this));
        var position2 = toIntegerOrInfinity(pos);
        var size2 = S.length;
        var first, second;
        if (position2 < 0 || position2 >= size2)
          return CONVERT_TO_STRING ? "" : void 0;
        first = charCodeAt(S, position2);
        return first < 55296 || first > 56319 || position2 + 1 === size2 || (second = charCodeAt(S, position2 + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt(S, position2) : first : CONVERT_TO_STRING ? stringSlice(S, position2, position2 + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
      };
    };
    module.exports = {
      codeAt: createMethod(false),
      charAt: createMethod(true)
    };
  }
});

// node_modules/core-js/modules/es.string.iterator.js
var require_es_string_iterator = __commonJS({
  "node_modules/core-js/modules/es.string.iterator.js"() {
    "use strict";
    var charAt = require_string_multibyte().charAt;
    var toString = require_to_string();
    var InternalStateModule = require_internal_state();
    var defineIterator = require_iterator_define();
    var createIterResultObject = require_create_iter_result_object();
    var STRING_ITERATOR = "String Iterator";
    var setInternalState = InternalStateModule.set;
    var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);
    defineIterator(String, "String", function(iterated) {
      setInternalState(this, {
        type: STRING_ITERATOR,
        string: toString(iterated),
        index: 0
      });
    }, function next() {
      var state = getInternalState(this);
      var string = state.string;
      var index = state.index;
      var point;
      if (index >= string.length)
        return createIterResultObject(void 0, true);
      point = charAt(string, index);
      state.index += point.length;
      return createIterResultObject(point, false);
    });
  }
});

// node_modules/core-js/internals/path.js
var require_path = __commonJS({
  "node_modules/core-js/internals/path.js"(exports, module) {
    var global2 = require_global();
    module.exports = global2;
  }
});

// node_modules/core-js/es/map/index.js
var require_map = __commonJS({
  "node_modules/core-js/es/map/index.js"(exports, module) {
    require_es_array_iterator();
    require_es_map();
    require_es_object_to_string();
    require_es_string_iterator();
    var path = require_path();
    module.exports = path.Map;
  }
});

// node_modules/core-js/modules/es.set.constructor.js
var require_es_set_constructor = __commonJS({
  "node_modules/core-js/modules/es.set.constructor.js"() {
    "use strict";
    var collection = require_collection();
    var collectionStrong = require_collection_strong();
    collection("Set", function(init4) {
      return function Set2() {
        return init4(this, arguments.length ? arguments[0] : void 0);
      };
    }, collectionStrong);
  }
});

// node_modules/core-js/modules/es.set.js
var require_es_set = __commonJS({
  "node_modules/core-js/modules/es.set.js"() {
    require_es_set_constructor();
  }
});

// node_modules/core-js/es/set/index.js
var require_set = __commonJS({
  "node_modules/core-js/es/set/index.js"(exports, module) {
    require_es_array_iterator();
    require_es_object_to_string();
    require_es_set();
    require_es_string_iterator();
    var path = require_path();
    module.exports = path.Set;
  }
});

// node_modules/core-js/internals/is-array.js
var require_is_array = __commonJS({
  "node_modules/core-js/internals/is-array.js"(exports, module) {
    var classof = require_classof_raw();
    module.exports = Array.isArray || function isArray(argument) {
      return classof(argument) == "Array";
    };
  }
});

// node_modules/core-js/internals/is-constructor.js
var require_is_constructor = __commonJS({
  "node_modules/core-js/internals/is-constructor.js"(exports, module) {
    var uncurryThis = require_function_uncurry_this();
    var fails = require_fails();
    var isCallable = require_is_callable();
    var classof = require_classof();
    var getBuiltIn = require_get_built_in();
    var inspectSource = require_inspect_source();
    var noop = function() {
    };
    var empty = [];
    var construct = getBuiltIn("Reflect", "construct");
    var constructorRegExp = /^\s*(?:class|function)\b/;
    var exec = uncurryThis(constructorRegExp.exec);
    var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
    var isConstructorModern = function isConstructor(argument) {
      if (!isCallable(argument))
        return false;
      try {
        construct(noop, empty, argument);
        return true;
      } catch (error) {
        return false;
      }
    };
    var isConstructorLegacy = function isConstructor(argument) {
      if (!isCallable(argument))
        return false;
      switch (classof(argument)) {
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
          return false;
      }
      try {
        return INCORRECT_TO_STRING || !!exec(constructorRegExp, inspectSource(argument));
      } catch (error) {
        return true;
      }
    };
    isConstructorLegacy.sham = true;
    module.exports = !construct || fails(function() {
      var called;
      return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
        called = true;
      }) || called;
    }) ? isConstructorLegacy : isConstructorModern;
  }
});

// node_modules/core-js/internals/array-species-constructor.js
var require_array_species_constructor = __commonJS({
  "node_modules/core-js/internals/array-species-constructor.js"(exports, module) {
    var isArray = require_is_array();
    var isConstructor = require_is_constructor();
    var isObject = require_is_object();
    var wellKnownSymbol = require_well_known_symbol();
    var SPECIES = wellKnownSymbol("species");
    var $Array = Array;
    module.exports = function(originalArray) {
      var C;
      if (isArray(originalArray)) {
        C = originalArray.constructor;
        if (isConstructor(C) && (C === $Array || isArray(C.prototype)))
          C = void 0;
        else if (isObject(C)) {
          C = C[SPECIES];
          if (C === null)
            C = void 0;
        }
      }
      return C === void 0 ? $Array : C;
    };
  }
});

// node_modules/core-js/internals/array-species-create.js
var require_array_species_create = __commonJS({
  "node_modules/core-js/internals/array-species-create.js"(exports, module) {
    var arraySpeciesConstructor = require_array_species_constructor();
    module.exports = function(originalArray, length) {
      return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
    };
  }
});

// node_modules/core-js/internals/array-iteration.js
var require_array_iteration = __commonJS({
  "node_modules/core-js/internals/array-iteration.js"(exports, module) {
    var bind = require_function_bind_context();
    var uncurryThis = require_function_uncurry_this();
    var IndexedObject = require_indexed_object();
    var toObject = require_to_object();
    var lengthOfArrayLike = require_length_of_array_like();
    var arraySpeciesCreate = require_array_species_create();
    var push = uncurryThis([].push);
    var createMethod = function(TYPE) {
      var IS_MAP = TYPE == 1;
      var IS_FILTER = TYPE == 2;
      var IS_SOME = TYPE == 3;
      var IS_EVERY = TYPE == 4;
      var IS_FIND_INDEX = TYPE == 6;
      var IS_FILTER_REJECT = TYPE == 7;
      var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
      return function($this, callbackfn, that, specificCreate) {
        var O = toObject($this);
        var self2 = IndexedObject(O);
        var boundFunction = bind(callbackfn, that);
        var length = lengthOfArrayLike(self2);
        var index = 0;
        var create = specificCreate || arraySpeciesCreate;
        var target2 = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : void 0;
        var value, result;
        for (; length > index; index++)
          if (NO_HOLES || index in self2) {
            value = self2[index];
            result = boundFunction(value, index, O);
            if (TYPE) {
              if (IS_MAP)
                target2[index] = result;
              else if (result)
                switch (TYPE) {
                  case 3:
                    return true;
                  case 5:
                    return value;
                  case 6:
                    return index;
                  case 2:
                    push(target2, value);
                }
              else
                switch (TYPE) {
                  case 4:
                    return false;
                  case 7:
                    push(target2, value);
                }
            }
          }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target2;
      };
    };
    module.exports = {
      forEach: createMethod(0),
      map: createMethod(1),
      filter: createMethod(2),
      some: createMethod(3),
      every: createMethod(4),
      find: createMethod(5),
      findIndex: createMethod(6),
      filterReject: createMethod(7)
    };
  }
});

// node_modules/core-js/internals/collection-weak.js
var require_collection_weak = __commonJS({
  "node_modules/core-js/internals/collection-weak.js"(exports, module) {
    "use strict";
    var uncurryThis = require_function_uncurry_this();
    var defineBuiltIns = require_define_built_ins();
    var getWeakData = require_internal_metadata().getWeakData;
    var anInstance = require_an_instance();
    var anObject = require_an_object();
    var isNullOrUndefined = require_is_null_or_undefined();
    var isObject = require_is_object();
    var iterate = require_iterate();
    var ArrayIterationModule = require_array_iteration();
    var hasOwn = require_has_own_property();
    var InternalStateModule = require_internal_state();
    var setInternalState = InternalStateModule.set;
    var internalStateGetterFor = InternalStateModule.getterFor;
    var find = ArrayIterationModule.find;
    var findIndex = ArrayIterationModule.findIndex;
    var splice = uncurryThis([].splice);
    var id = 0;
    var uncaughtFrozenStore = function(store) {
      return store.frozen || (store.frozen = new UncaughtFrozenStore());
    };
    var UncaughtFrozenStore = function() {
      this.entries = [];
    };
    var findUncaughtFrozen = function(store, key) {
      return find(store.entries, function(it) {
        return it[0] === key;
      });
    };
    UncaughtFrozenStore.prototype = {
      get: function(key) {
        var entry = findUncaughtFrozen(this, key);
        if (entry)
          return entry[1];
      },
      has: function(key) {
        return !!findUncaughtFrozen(this, key);
      },
      set: function(key, value) {
        var entry = findUncaughtFrozen(this, key);
        if (entry)
          entry[1] = value;
        else
          this.entries.push([key, value]);
      },
      "delete": function(key) {
        var index = findIndex(this.entries, function(it) {
          return it[0] === key;
        });
        if (~index)
          splice(this.entries, index, 1);
        return !!~index;
      }
    };
    module.exports = {
      getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
        var Constructor = wrapper(function(that, iterable) {
          anInstance(that, Prototype);
          setInternalState(that, {
            type: CONSTRUCTOR_NAME,
            id: id++,
            frozen: void 0
          });
          if (!isNullOrUndefined(iterable))
            iterate(iterable, that[ADDER], { that, AS_ENTRIES: IS_MAP });
        });
        var Prototype = Constructor.prototype;
        var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
        var define2 = function(that, key, value) {
          var state = getInternalState(that);
          var data = getWeakData(anObject(key), true);
          if (data === true)
            uncaughtFrozenStore(state).set(key, value);
          else
            data[state.id] = value;
          return that;
        };
        defineBuiltIns(Prototype, {
          "delete": function(key) {
            var state = getInternalState(this);
            if (!isObject(key))
              return false;
            var data = getWeakData(key);
            if (data === true)
              return uncaughtFrozenStore(state)["delete"](key);
            return data && hasOwn(data, state.id) && delete data[state.id];
          },
          has: function has(key) {
            var state = getInternalState(this);
            if (!isObject(key))
              return false;
            var data = getWeakData(key);
            if (data === true)
              return uncaughtFrozenStore(state).has(key);
            return data && hasOwn(data, state.id);
          }
        });
        defineBuiltIns(Prototype, IS_MAP ? {
          get: function get(key) {
            var state = getInternalState(this);
            if (isObject(key)) {
              var data = getWeakData(key);
              if (data === true)
                return uncaughtFrozenStore(state).get(key);
              return data ? data[state.id] : void 0;
            }
          },
          set: function set(key, value) {
            return define2(this, key, value);
          }
        } : {
          add: function add(value) {
            return define2(this, value, true);
          }
        });
        return Constructor;
      }
    };
  }
});

// node_modules/core-js/modules/es.weak-map.constructor.js
var require_es_weak_map_constructor = __commonJS({
  "node_modules/core-js/modules/es.weak-map.constructor.js"() {
    "use strict";
    var global2 = require_global();
    var uncurryThis = require_function_uncurry_this();
    var defineBuiltIns = require_define_built_ins();
    var InternalMetadataModule = require_internal_metadata();
    var collection = require_collection();
    var collectionWeak = require_collection_weak();
    var isObject = require_is_object();
    var isExtensible = require_object_is_extensible();
    var enforceInternalState = require_internal_state().enforce;
    var NATIVE_WEAK_MAP = require_weak_map_basic_detection();
    var IS_IE11 = !global2.ActiveXObject && "ActiveXObject" in global2;
    var InternalWeakMap;
    var wrapper = function(init4) {
      return function WeakMap2() {
        return init4(this, arguments.length ? arguments[0] : void 0);
      };
    };
    var $WeakMap = collection("WeakMap", wrapper, collectionWeak);
    if (NATIVE_WEAK_MAP && IS_IE11) {
      InternalWeakMap = collectionWeak.getConstructor(wrapper, "WeakMap", true);
      InternalMetadataModule.enable();
      WeakMapPrototype = $WeakMap.prototype;
      nativeDelete = uncurryThis(WeakMapPrototype["delete"]);
      nativeHas = uncurryThis(WeakMapPrototype.has);
      nativeGet = uncurryThis(WeakMapPrototype.get);
      nativeSet = uncurryThis(WeakMapPrototype.set);
      defineBuiltIns(WeakMapPrototype, {
        "delete": function(key) {
          if (isObject(key) && !isExtensible(key)) {
            var state = enforceInternalState(this);
            if (!state.frozen)
              state.frozen = new InternalWeakMap();
            return nativeDelete(this, key) || state.frozen["delete"](key);
          }
          return nativeDelete(this, key);
        },
        has: function has(key) {
          if (isObject(key) && !isExtensible(key)) {
            var state = enforceInternalState(this);
            if (!state.frozen)
              state.frozen = new InternalWeakMap();
            return nativeHas(this, key) || state.frozen.has(key);
          }
          return nativeHas(this, key);
        },
        get: function get(key) {
          if (isObject(key) && !isExtensible(key)) {
            var state = enforceInternalState(this);
            if (!state.frozen)
              state.frozen = new InternalWeakMap();
            return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
          }
          return nativeGet(this, key);
        },
        set: function set(key, value) {
          if (isObject(key) && !isExtensible(key)) {
            var state = enforceInternalState(this);
            if (!state.frozen)
              state.frozen = new InternalWeakMap();
            nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
          } else
            nativeSet(this, key, value);
          return this;
        }
      });
    }
    var WeakMapPrototype;
    var nativeDelete;
    var nativeHas;
    var nativeGet;
    var nativeSet;
  }
});

// node_modules/core-js/modules/es.weak-map.js
var require_es_weak_map = __commonJS({
  "node_modules/core-js/modules/es.weak-map.js"() {
    require_es_weak_map_constructor();
  }
});

// node_modules/core-js/es/weak-map/index.js
var require_weak_map = __commonJS({
  "node_modules/core-js/es/weak-map/index.js"(exports, module) {
    require_es_array_iterator();
    require_es_object_to_string();
    require_es_weak_map();
    var path = require_path();
    module.exports = path.WeakMap;
  }
});

// node_modules/core-js/internals/call-with-safe-iteration-closing.js
var require_call_with_safe_iteration_closing = __commonJS({
  "node_modules/core-js/internals/call-with-safe-iteration-closing.js"(exports, module) {
    var anObject = require_an_object();
    var iteratorClose = require_iterator_close();
    module.exports = function(iterator, fn, value, ENTRIES) {
      try {
        return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
      } catch (error) {
        iteratorClose(iterator, "throw", error);
      }
    };
  }
});

// node_modules/core-js/internals/array-from.js
var require_array_from = __commonJS({
  "node_modules/core-js/internals/array-from.js"(exports, module) {
    "use strict";
    var bind = require_function_bind_context();
    var call = require_function_call();
    var toObject = require_to_object();
    var callWithSafeIterationClosing = require_call_with_safe_iteration_closing();
    var isArrayIteratorMethod = require_is_array_iterator_method();
    var isConstructor = require_is_constructor();
    var lengthOfArrayLike = require_length_of_array_like();
    var createProperty = require_create_property();
    var getIterator = require_get_iterator();
    var getIteratorMethod = require_get_iterator_method();
    var $Array = Array;
    module.exports = function from(arrayLike) {
      var O = toObject(arrayLike);
      var IS_CONSTRUCTOR = isConstructor(this);
      var argumentsLength = arguments.length;
      var mapfn = argumentsLength > 1 ? arguments[1] : void 0;
      var mapping = mapfn !== void 0;
      if (mapping)
        mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : void 0);
      var iteratorMethod = getIteratorMethod(O);
      var index = 0;
      var length, result, step, iterator, next, value;
      if (iteratorMethod && !(this === $Array && isArrayIteratorMethod(iteratorMethod))) {
        iterator = getIterator(O, iteratorMethod);
        next = iterator.next;
        result = IS_CONSTRUCTOR ? new this() : [];
        for (; !(step = call(next, iterator)).done; index++) {
          value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
          createProperty(result, index, value);
        }
      } else {
        length = lengthOfArrayLike(O);
        result = IS_CONSTRUCTOR ? new this(length) : $Array(length);
        for (; length > index; index++) {
          value = mapping ? mapfn(O[index], index) : O[index];
          createProperty(result, index, value);
        }
      }
      result.length = index;
      return result;
    };
  }
});

// node_modules/core-js/modules/es.array.from.js
var require_es_array_from = __commonJS({
  "node_modules/core-js/modules/es.array.from.js"() {
    var $ = require_export();
    var from = require_array_from();
    var checkCorrectnessOfIteration = require_check_correctness_of_iteration();
    var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function(iterable) {
      Array.from(iterable);
    });
    $({ target: "Array", stat: true, forced: INCORRECT_ITERATION }, {
      from
    });
  }
});

// node_modules/core-js/es/array/from.js
var require_from = __commonJS({
  "node_modules/core-js/es/array/from.js"(exports, module) {
    require_es_string_iterator();
    require_es_array_from();
    var path = require_path();
    module.exports = path.Array.from;
  }
});

// node_modules/core-js/internals/object-assign.js
var require_object_assign = __commonJS({
  "node_modules/core-js/internals/object-assign.js"(exports, module) {
    "use strict";
    var DESCRIPTORS = require_descriptors();
    var uncurryThis = require_function_uncurry_this();
    var call = require_function_call();
    var fails = require_fails();
    var objectKeys = require_object_keys();
    var getOwnPropertySymbolsModule = require_object_get_own_property_symbols();
    var propertyIsEnumerableModule = require_object_property_is_enumerable();
    var toObject = require_to_object();
    var IndexedObject = require_indexed_object();
    var $assign = Object.assign;
    var defineProperty = Object.defineProperty;
    var concat = uncurryThis([].concat);
    module.exports = !$assign || fails(function() {
      if (DESCRIPTORS && $assign({ b: 1 }, $assign(defineProperty({}, "a", {
        enumerable: true,
        get: function() {
          defineProperty(this, "b", {
            value: 3,
            enumerable: false
          });
        }
      }), { b: 2 })).b !== 1)
        return true;
      var A = {};
      var B = {};
      var symbol = Symbol();
      var alphabet = "abcdefghijklmnopqrst";
      A[symbol] = 7;
      alphabet.split("").forEach(function(chr) {
        B[chr] = chr;
      });
      return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join("") != alphabet;
    }) ? function assign(target2, source) {
      var T = toObject(target2);
      var argumentsLength = arguments.length;
      var index = 1;
      var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
      var propertyIsEnumerable = propertyIsEnumerableModule.f;
      while (argumentsLength > index) {
        var S = IndexedObject(arguments[index++]);
        var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
        var length = keys.length;
        var j = 0;
        var key;
        while (length > j) {
          key = keys[j++];
          if (!DESCRIPTORS || call(propertyIsEnumerable, S, key))
            T[key] = S[key];
        }
      }
      return T;
    } : $assign;
  }
});

// node_modules/core-js/modules/es.object.assign.js
var require_es_object_assign = __commonJS({
  "node_modules/core-js/modules/es.object.assign.js"() {
    var $ = require_export();
    var assign = require_object_assign();
    $({ target: "Object", stat: true, arity: 2, forced: Object.assign !== assign }, {
      assign
    });
  }
});

// node_modules/core-js/es/object/assign.js
var require_assign = __commonJS({
  "node_modules/core-js/es/object/assign.js"(exports, module) {
    require_es_object_assign();
    var path = require_path();
    module.exports = path.Object.assign;
  }
});

// node_modules/lodash.clamp/index.js
var require_lodash = __commonJS({
  "node_modules/lodash.clamp/index.js"(exports, module) {
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    function baseClamp(number, lower, upper) {
      if (number === number) {
        if (upper !== void 0) {
          number = number <= upper ? number : upper;
        }
        if (lower !== void 0) {
          number = number >= lower ? number : lower;
        }
      }
      return number;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    function clamp10(number, lower, upper) {
      if (upper === void 0) {
        upper = lower;
        lower = void 0;
      }
      if (upper !== void 0) {
        upper = toNumber(upper);
        upper = upper === upper ? upper : 0;
      }
      if (lower !== void 0) {
        lower = toNumber(lower);
        lower = lower === lower ? lower : 0;
      }
      return baseClamp(toNumber(number), lower, upper);
    }
    module.exports = clamp10;
  }
});

// node_modules/lodash.debounce/index.js
var require_lodash2 = __commonJS({
  "node_modules/lodash.debounce/index.js"(exports, module) {
    var FUNC_ERROR_TEXT = "Expected a function";
    var NAN = 0 / 0;
    var symbolTag = "[object Symbol]";
    var reTrim = /^\s+|\s+$/g;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsOctal = /^0o[0-7]+$/i;
    var freeParseInt = parseInt;
    var freeGlobal = typeof globalThis == "object" && globalThis && globalThis.Object === Object && globalThis;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var nativeMax = Math.max;
    var nativeMin = Math.min;
    var now = function() {
      return root.Date.now();
    };
    function debounce3(func, wait, options) {
      var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
      if (typeof func != "function") {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      wait = toNumber(wait) || 0;
      if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
      }
      function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = void 0;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
      }
      function leadingEdge(time) {
        lastInvokeTime = time;
        timerId = setTimeout(timerExpired, wait);
        return leading ? invokeFunc(time) : result;
      }
      function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
        return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
      }
      function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
      }
      function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) {
          return trailingEdge(time);
        }
        timerId = setTimeout(timerExpired, remainingWait(time));
      }
      function trailingEdge(time) {
        timerId = void 0;
        if (trailing && lastArgs) {
          return invokeFunc(time);
        }
        lastArgs = lastThis = void 0;
        return result;
      }
      function cancel() {
        if (timerId !== void 0) {
          clearTimeout(timerId);
        }
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = void 0;
      }
      function flush() {
        return timerId === void 0 ? result : trailingEdge(now());
      }
      function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
          if (timerId === void 0) {
            return leadingEdge(lastCallTime);
          }
          if (maxing) {
            timerId = setTimeout(timerExpired, wait);
            return invokeFunc(lastCallTime);
          }
        }
        if (timerId === void 0) {
          timerId = setTimeout(timerExpired, wait);
        }
        return result;
      }
      debounced.cancel = cancel;
      debounced.flush = flush;
      return debounced;
    }
    function isObject(value) {
      var type = typeof value;
      return !!value && (type == "object" || type == "function");
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toNumber(value) {
      if (typeof value == "number") {
        return value;
      }
      if (isSymbol(value)) {
        return NAN;
      }
      if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
      }
      if (typeof value != "string") {
        return value === 0 ? value : +value;
      }
      value = value.replace(reTrim, "");
      var isBinary = reIsBinary.test(value);
      return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
    }
    module.exports = debounce3;
  }
});

// node_modules/gsap/Observer.js
function _defineProperties(target2, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor)
      descriptor.writable = true;
    Object.defineProperty(target2, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps)
    _defineProperties(Constructor.prototype, protoProps);
  if (staticProps)
    _defineProperties(Constructor, staticProps);
  return Constructor;
}
var gsap2, _coreInitted2, _clamp3, _win3, _doc3, _docEl, _body, _isTouch, _pointerType, ScrollTrigger, _root, _normalizer, _eventTypes, _getGSAP, _startup, _observers, _scrollers, _proxies, _getTime, _bridge, _integrate, _getProxyProp, _isViewport, _addListener, _removeListener, _scrollLeft, _scrollTop, _onScroll, _scrollCacheFunc, _horizontal, _vertical, _getTarget, _getScrollFunc, _getVelocityProp, _getEvent, _getAbsoluteMax, _setScrollTrigger, _initCore3, Observer;
var init_Observer = __esm({
  "node_modules/gsap/Observer.js"() {
    _getGSAP = function _getGSAP2() {
      return gsap2 || typeof window !== "undefined" && (gsap2 = window.gsap) && gsap2.registerPlugin && gsap2;
    };
    _startup = 1;
    _observers = [];
    _scrollers = [];
    _proxies = [];
    _getTime = Date.now;
    _bridge = function _bridge2(name, value) {
      return value;
    };
    _integrate = function _integrate2() {
      var core = ScrollTrigger.core, data = core.bridge || {}, scrollers = core._scrollers, proxies = core._proxies;
      scrollers.push.apply(scrollers, _scrollers);
      proxies.push.apply(proxies, _proxies);
      _scrollers = scrollers;
      _proxies = proxies;
      _bridge = function _bridge3(name, value) {
        return data[name](value);
      };
    };
    _getProxyProp = function _getProxyProp2(element, property) {
      return ~_proxies.indexOf(element) && _proxies[_proxies.indexOf(element) + 1][property];
    };
    _isViewport = function _isViewport2(el) {
      return !!~_root.indexOf(el);
    };
    _addListener = function _addListener2(element, type, func, nonPassive, capture) {
      return element.addEventListener(type, func, {
        passive: !nonPassive,
        capture: !!capture
      });
    };
    _removeListener = function _removeListener2(element, type, func, capture) {
      return element.removeEventListener(type, func, !!capture);
    };
    _scrollLeft = "scrollLeft";
    _scrollTop = "scrollTop";
    _onScroll = function _onScroll2() {
      return _normalizer && _normalizer.isPressed || _scrollers.cache++;
    };
    _scrollCacheFunc = function _scrollCacheFunc2(f, doNotCache) {
      var cachingFunc = function cachingFunc2(value) {
        if (value || value === 0) {
          _startup && (_win3.history.scrollRestoration = "manual");
          var isNormalizing = _normalizer && _normalizer.isPressed;
          value = cachingFunc2.v = Math.round(value) || (_normalizer && _normalizer.iOS ? 1 : 0);
          f(value);
          cachingFunc2.cacheID = _scrollers.cache;
          isNormalizing && _bridge("ss", value);
        } else if (doNotCache || _scrollers.cache !== cachingFunc2.cacheID || _bridge("ref")) {
          cachingFunc2.cacheID = _scrollers.cache;
          cachingFunc2.v = f();
        }
        return cachingFunc2.v + cachingFunc2.offset;
      };
      cachingFunc.offset = 0;
      return f && cachingFunc;
    };
    _horizontal = {
      s: _scrollLeft,
      p: "left",
      p2: "Left",
      os: "right",
      os2: "Right",
      d: "width",
      d2: "Width",
      a: "x",
      sc: _scrollCacheFunc(function(value) {
        return arguments.length ? _win3.scrollTo(value, _vertical.sc()) : _win3.pageXOffset || _doc3[_scrollLeft] || _docEl[_scrollLeft] || _body[_scrollLeft] || 0;
      })
    };
    _vertical = {
      s: _scrollTop,
      p: "top",
      p2: "Top",
      os: "bottom",
      os2: "Bottom",
      d: "height",
      d2: "Height",
      a: "y",
      op: _horizontal,
      sc: _scrollCacheFunc(function(value) {
        return arguments.length ? _win3.scrollTo(_horizontal.sc(), value) : _win3.pageYOffset || _doc3[_scrollTop] || _docEl[_scrollTop] || _body[_scrollTop] || 0;
      })
    };
    _getTarget = function _getTarget2(t) {
      return gsap2.utils.toArray(t)[0] || (typeof t === "string" && gsap2.config().nullTargetWarn !== false ? console.warn("Element not found:", t) : null);
    };
    _getScrollFunc = function _getScrollFunc2(element, _ref) {
      var s = _ref.s, sc = _ref.sc;
      _isViewport(element) && (element = _doc3.scrollingElement || _docEl);
      var i = _scrollers.indexOf(element), offset = sc === _vertical.sc ? 1 : 2;
      !~i && (i = _scrollers.push(element) - 1);
      _scrollers[i + offset] || element.addEventListener("scroll", _onScroll);
      var prev = _scrollers[i + offset], func = prev || (_scrollers[i + offset] = _scrollCacheFunc(_getProxyProp(element, s), true) || (_isViewport(element) ? sc : _scrollCacheFunc(function(value) {
        return arguments.length ? element[s] = value : element[s];
      })));
      func.target = element;
      prev || (func.smooth = gsap2.getProperty(element, "scrollBehavior") === "smooth");
      return func;
    };
    _getVelocityProp = function _getVelocityProp2(value, minTimeRefresh, useDelta) {
      var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update2 = function update3(value2, force) {
        var t = _getTime();
        if (force || t - t1 > min) {
          v2 = v1;
          v1 = value2;
          t2 = t1;
          t1 = t;
        } else if (useDelta) {
          v1 += value2;
        } else {
          v1 = v2 + (value2 - v2) / (t - t2) * (t1 - t2);
        }
      }, reset = function reset2() {
        v2 = v1 = useDelta ? 0 : v1;
        t2 = t1 = 0;
      }, getVelocity = function getVelocity2(latestValue) {
        var tOld = t2, vOld = v2, t = _getTime();
        (latestValue || latestValue === 0) && latestValue !== v1 && update2(latestValue);
        return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1e3;
      };
      return {
        update: update2,
        reset,
        getVelocity
      };
    };
    _getEvent = function _getEvent2(e, preventDefault) {
      preventDefault && !e._gsapAllow && e.preventDefault();
      return e.changedTouches ? e.changedTouches[0] : e;
    };
    _getAbsoluteMax = function _getAbsoluteMax2(a) {
      var max = Math.max.apply(Math, a), min = Math.min.apply(Math, a);
      return Math.abs(max) >= Math.abs(min) ? max : min;
    };
    _setScrollTrigger = function _setScrollTrigger2() {
      ScrollTrigger = gsap2.core.globals().ScrollTrigger;
      ScrollTrigger && ScrollTrigger.core && _integrate();
    };
    _initCore3 = function _initCore4(core) {
      gsap2 = core || _getGSAP();
      if (gsap2 && typeof document !== "undefined" && document.body) {
        _win3 = window;
        _doc3 = document;
        _docEl = _doc3.documentElement;
        _body = _doc3.body;
        _root = [_win3, _doc3, _docEl, _body];
        _clamp3 = gsap2.utils.clamp;
        _pointerType = "onpointerenter" in _body ? "pointer" : "mouse";
        _isTouch = Observer.isTouch = _win3.matchMedia && _win3.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in _win3 || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0;
        _eventTypes = Observer.eventTypes = ("ontouchstart" in _docEl ? "touchstart,touchmove,touchcancel,touchend" : !("onpointerdown" in _docEl) ? "mousedown,mousemove,mouseup,mouseup" : "pointerdown,pointermove,pointercancel,pointerup").split(",");
        setTimeout(function() {
          return _startup = 0;
        }, 500);
        _setScrollTrigger();
        _coreInitted2 = 1;
      }
      return _coreInitted2;
    };
    _horizontal.op = _vertical;
    _scrollers.cache = 0;
    Observer = /* @__PURE__ */ function() {
      function Observer2(vars) {
        this.init(vars);
      }
      var _proto = Observer2.prototype;
      _proto.init = function init4(vars) {
        _coreInitted2 || _initCore3(gsap2) || console.warn("Please gsap.registerPlugin(Observer)");
        ScrollTrigger || _setScrollTrigger();
        var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target2 = vars.target, lineHeight2 = vars.lineHeight, debounce3 = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
        this.target = target2 = _getTarget(target2) || _docEl;
        this.vars = vars;
        ignore && (ignore = gsap2.utils.toArray(ignore));
        tolerance = tolerance || 1e-9;
        dragMinimum = dragMinimum || 0;
        wheelSpeed = wheelSpeed || 1;
        scrollSpeed = scrollSpeed || 1;
        type = type || "wheel,touch,pointer";
        debounce3 = debounce3 !== false;
        lineHeight2 || (lineHeight2 = parseFloat(_win3.getComputedStyle(_body).lineHeight) || 22);
        var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self2 = this, prevDeltaX = 0, prevDeltaY = 0, scrollFuncX = _getScrollFunc(target2, _horizontal), scrollFuncY = _getScrollFunc(target2, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target2), ownerDoc = target2.ownerDocument || _doc3, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
          return onClickTime = _getTime();
        }, _ignoreCheck = function _ignoreCheck2(e, isPointerOrTouch) {
          return (self2.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
        }, onStopFunc = function onStopFunc2() {
          self2._vx.reset();
          self2._vy.reset();
          onStopDelayedCall.pause();
          onStop && onStop(self2);
        }, update2 = function update3() {
          var dx = self2.deltaX = _getAbsoluteMax(deltaX), dy = self2.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
          onChange && (changedX || changedY) && onChange(self2, dx, dy, deltaX, deltaY);
          if (changedX) {
            onRight && self2.deltaX > 0 && onRight(self2);
            onLeft && self2.deltaX < 0 && onLeft(self2);
            onChangeX && onChangeX(self2);
            onToggleX && self2.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self2);
            prevDeltaX = self2.deltaX;
            deltaX[0] = deltaX[1] = deltaX[2] = 0;
          }
          if (changedY) {
            onDown && self2.deltaY > 0 && onDown(self2);
            onUp && self2.deltaY < 0 && onUp(self2);
            onChangeY && onChangeY(self2);
            onToggleY && self2.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self2);
            prevDeltaY = self2.deltaY;
            deltaY[0] = deltaY[1] = deltaY[2] = 0;
          }
          if (moved || dragged) {
            onMove && onMove(self2);
            if (dragged) {
              onDrag(self2);
              dragged = false;
            }
            moved = false;
          }
          locked && !(locked = false) && onLockAxis && onLockAxis(self2);
          if (wheeled) {
            onWheel(self2);
            wheeled = false;
          }
          id = 0;
        }, onDelta = function onDelta2(x, y, index) {
          deltaX[index] += x;
          deltaY[index] += y;
          self2._vx.update(x);
          self2._vy.update(y);
          debounce3 ? id || (id = requestAnimationFrame(update2)) : update2();
        }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x, y) {
          if (lockAxis && !axis) {
            self2.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
            locked = true;
          }
          if (axis !== "y") {
            deltaX[2] += x;
            self2._vx.update(x, true);
          }
          if (axis !== "x") {
            deltaY[2] += y;
            self2._vy.update(y, true);
          }
          debounce3 ? id || (id = requestAnimationFrame(update2)) : update2();
        }, _onDrag = function _onDrag2(e) {
          if (_ignoreCheck(e, 1)) {
            return;
          }
          e = _getEvent(e, preventDefault);
          var x = e.clientX, y = e.clientY, dx = x - self2.x, dy = y - self2.y, isDragging = self2.isDragging;
          self2.x = x;
          self2.y = y;
          if (isDragging || Math.abs(self2.startX - x) >= dragMinimum || Math.abs(self2.startY - y) >= dragMinimum) {
            onDrag && (dragged = true);
            isDragging || (self2.isDragging = true);
            onTouchOrPointerDelta(dx, dy);
            isDragging || onDragStart && onDragStart(self2);
          }
        }, _onPress = self2.onPress = function(e) {
          if (_ignoreCheck(e, 1)) {
            return;
          }
          self2.axis = axis = null;
          onStopDelayedCall.pause();
          self2.isPressed = true;
          e = _getEvent(e);
          prevDeltaX = prevDeltaY = 0;
          self2.startX = self2.x = e.clientX;
          self2.startY = self2.y = e.clientY;
          self2._vx.reset();
          self2._vy.reset();
          _addListener(isNormalizer ? target2 : ownerDoc, _eventTypes[1], _onDrag, preventDefault, true);
          self2.deltaX = self2.deltaY = 0;
          onPress && onPress(self2);
        }, _onRelease = function _onRelease2(e) {
          if (_ignoreCheck(e, 1)) {
            return;
          }
          _removeListener(isNormalizer ? target2 : ownerDoc, _eventTypes[1], _onDrag, true);
          var wasDragging = self2.isDragging && (Math.abs(self2.x - self2.startX) > 3 || Math.abs(self2.y - self2.startY) > 3), eventData = _getEvent(e);
          if (!wasDragging) {
            self2._vx.reset();
            self2._vy.reset();
            if (preventDefault && allowClicks) {
              gsap2.delayedCall(0.08, function() {
                if (_getTime() - onClickTime > 300 && !e.defaultPrevented) {
                  if (e.target.click) {
                    e.target.click();
                  } else if (ownerDoc.createEvent) {
                    var syntheticEvent = ownerDoc.createEvent("MouseEvents");
                    syntheticEvent.initMouseEvent("click", true, true, _win3, 1, eventData.screenX, eventData.screenY, eventData.clientX, eventData.clientY, false, false, false, false, 0, null);
                    e.target.dispatchEvent(syntheticEvent);
                  }
                }
              });
            }
          }
          self2.isDragging = self2.isGesturing = self2.isPressed = false;
          onStop && !isNormalizer && onStopDelayedCall.restart(true);
          onDragEnd && wasDragging && onDragEnd(self2);
          onRelease && onRelease(self2, wasDragging);
        }, _onGestureStart = function _onGestureStart2(e) {
          return e.touches && e.touches.length > 1 && (self2.isGesturing = true) && onGestureStart(e, self2.isDragging);
        }, _onGestureEnd = function _onGestureEnd2() {
          return (self2.isGesturing = false) || onGestureEnd(self2);
        }, onScroll = function onScroll2(e) {
          if (_ignoreCheck(e)) {
            return;
          }
          var x = scrollFuncX(), y = scrollFuncY();
          onDelta((x - scrollX) * scrollSpeed, (y - scrollY) * scrollSpeed, 1);
          scrollX = x;
          scrollY = y;
          onStop && onStopDelayedCall.restart(true);
        }, _onWheel = function _onWheel2(e) {
          if (_ignoreCheck(e)) {
            return;
          }
          e = _getEvent(e, preventDefault);
          onWheel && (wheeled = true);
          var multiplier = (e.deltaMode === 1 ? lineHeight2 : e.deltaMode === 2 ? _win3.innerHeight : 1) * wheelSpeed;
          onDelta(e.deltaX * multiplier, e.deltaY * multiplier, 0);
          onStop && !isNormalizer && onStopDelayedCall.restart(true);
        }, _onMove = function _onMove2(e) {
          if (_ignoreCheck(e)) {
            return;
          }
          var x = e.clientX, y = e.clientY, dx = x - self2.x, dy = y - self2.y;
          self2.x = x;
          self2.y = y;
          moved = true;
          (dx || dy) && onTouchOrPointerDelta(dx, dy);
        }, _onHover = function _onHover2(e) {
          self2.event = e;
          onHover(self2);
        }, _onHoverEnd = function _onHoverEnd2(e) {
          self2.event = e;
          onHoverEnd(self2);
        }, _onClick = function _onClick2(e) {
          return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self2);
        };
        onStopDelayedCall = self2._dc = gsap2.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
        self2.deltaX = self2.deltaY = 0;
        self2._vx = _getVelocityProp(0, 50, true);
        self2._vy = _getVelocityProp(0, 50, true);
        self2.scrollX = scrollFuncX;
        self2.scrollY = scrollFuncY;
        self2.isDragging = self2.isGesturing = self2.isPressed = false;
        self2.enable = function(e) {
          if (!self2.isEnabled) {
            _addListener(isViewport ? ownerDoc : target2, "scroll", _onScroll);
            type.indexOf("scroll") >= 0 && _addListener(isViewport ? ownerDoc : target2, "scroll", onScroll, preventDefault, capture);
            type.indexOf("wheel") >= 0 && _addListener(target2, "wheel", _onWheel, preventDefault, capture);
            if (type.indexOf("touch") >= 0 && _isTouch || type.indexOf("pointer") >= 0) {
              _addListener(target2, _eventTypes[0], _onPress, preventDefault, capture);
              _addListener(ownerDoc, _eventTypes[2], _onRelease);
              _addListener(ownerDoc, _eventTypes[3], _onRelease);
              allowClicks && _addListener(target2, "click", clickCapture, false, true);
              onClick && _addListener(target2, "click", _onClick);
              onGestureStart && _addListener(ownerDoc, "gesturestart", _onGestureStart);
              onGestureEnd && _addListener(ownerDoc, "gestureend", _onGestureEnd);
              onHover && _addListener(target2, _pointerType + "enter", _onHover);
              onHoverEnd && _addListener(target2, _pointerType + "leave", _onHoverEnd);
              onMove && _addListener(target2, _pointerType + "move", _onMove);
            }
            self2.isEnabled = true;
            e && e.type && _onPress(e);
            onEnable && onEnable(self2);
          }
          return self2;
        };
        self2.disable = function() {
          if (self2.isEnabled) {
            _observers.filter(function(o) {
              return o !== self2 && _isViewport(o.target);
            }).length || _removeListener(isViewport ? ownerDoc : target2, "scroll", _onScroll);
            if (self2.isPressed) {
              self2._vx.reset();
              self2._vy.reset();
              _removeListener(isNormalizer ? target2 : ownerDoc, _eventTypes[1], _onDrag, true);
            }
            _removeListener(isViewport ? ownerDoc : target2, "scroll", onScroll, capture);
            _removeListener(target2, "wheel", _onWheel, capture);
            _removeListener(target2, _eventTypes[0], _onPress, capture);
            _removeListener(ownerDoc, _eventTypes[2], _onRelease);
            _removeListener(ownerDoc, _eventTypes[3], _onRelease);
            _removeListener(target2, "click", clickCapture, true);
            _removeListener(target2, "click", _onClick);
            _removeListener(ownerDoc, "gesturestart", _onGestureStart);
            _removeListener(ownerDoc, "gestureend", _onGestureEnd);
            _removeListener(target2, _pointerType + "enter", _onHover);
            _removeListener(target2, _pointerType + "leave", _onHoverEnd);
            _removeListener(target2, _pointerType + "move", _onMove);
            self2.isEnabled = self2.isPressed = self2.isDragging = false;
            onDisable && onDisable(self2);
          }
        };
        self2.kill = function() {
          self2.disable();
          var i = _observers.indexOf(self2);
          i >= 0 && _observers.splice(i, 1);
          _normalizer === self2 && (_normalizer = 0);
        };
        _observers.push(self2);
        isNormalizer && _isViewport(target2) && (_normalizer = self2);
        self2.enable(event);
      };
      _createClass(Observer2, [{
        key: "velocityX",
        get: function get() {
          return this._vx.getVelocity();
        }
      }, {
        key: "velocityY",
        get: function get() {
          return this._vy.getVelocity();
        }
      }]);
      return Observer2;
    }();
    Observer.version = "3.11.3";
    Observer.create = function(vars) {
      return new Observer(vars);
    };
    Observer.register = _initCore3;
    Observer.getAll = function() {
      return _observers.slice();
    };
    Observer.getById = function(id) {
      return _observers.filter(function(o) {
        return o.vars.id === id;
      })[0];
    };
    _getGSAP() && gsap2.registerPlugin(Observer);
  }
});

// node_modules/gsap/ScrollTrigger.js
var ScrollTrigger_exports = {};
__export(ScrollTrigger_exports, {
  ScrollTrigger: () => ScrollTrigger2,
  default: () => ScrollTrigger2
});
var gsap3, _coreInitted3, _win4, _doc4, _docEl2, _body2, _root2, _resizeDelay, _toArray, _clamp4, _time2, _syncInterval, _refreshing, _pointerIsDown, _transformProp2, _i, _prevWidth, _prevHeight, _autoRefresh, _sort, _suppressOverwrites2, _ignoreResize, _normalizer2, _ignoreMobileResize, _baseScreenHeight, _baseScreenWidth, _fixIOSBug, _context2, _scrollRestoration, _limitCallbacks, _startup2, _getTime2, _time1, _lastScrollTime, _enabled, _pointerDownHandler, _pointerUpHandler, _passThrough3, _round3, _windowExists5, _getGSAP3, _isViewport3, _getBoundsFunc, _getSizeFunc, _getOffsetsFunc, _maxScroll, _iterateAutoRefresh, _isString3, _isFunction3, _isNumber3, _isObject3, _endAnimation, _callback3, _abs, _left, _top, _right, _bottom, _width, _height, _Right, _Left, _Top, _Bottom, _padding, _margin, _Width, _Height, _px, _getComputedStyle, _makePositionable, _setDefaults3, _getBounds, _getSize, _getLabelRatioArray, _getClosestLabel, _snapDirectional, _getLabelAtDirection, _multiListener, _addListener3, _removeListener3, _wheelListener, _markerDefaults, _defaults2, _keywords, _offsetToPx, _createMarker, _positionMarker, _triggers, _ids, _rafID, _sync, _onScroll3, _setBaseDimensions, _onResize, _listeners2, _emptyArray2, _softRefresh, _dispatch3, _savedStyles, _revertRecorded, _revertAll, _clearScrollMemory, _refreshingAll, _refreshID, _queueRefreshID, _queueRefreshAll, _refreshAll, _lastScroll, _direction, _primary, _updateAll, _propNamesToCopy, _stateProps, _swapPinOut, _swapPinIn, _capsExp2, _setState, _getState, _copyState, _winOffsets, _parsePosition3, _prefixExp, _reparent, _getTweenCreator, ScrollTrigger2, _clampScrollAndGetDurationMultiplier, _allowNativePanning, _overflow, _nestedScroll, _inputObserver, _inputExp, _inputIsFocused, _captureInputs, _getScrollNormalizer;
var init_ScrollTrigger = __esm({
  "node_modules/gsap/ScrollTrigger.js"() {
    init_Observer();
    _startup2 = 1;
    _getTime2 = Date.now;
    _time1 = _getTime2();
    _lastScrollTime = 0;
    _enabled = 0;
    _pointerDownHandler = function _pointerDownHandler2() {
      return _pointerIsDown = 1;
    };
    _pointerUpHandler = function _pointerUpHandler2() {
      return _pointerIsDown = 0;
    };
    _passThrough3 = function _passThrough4(v) {
      return v;
    };
    _round3 = function _round4(value) {
      return Math.round(value * 1e5) / 1e5 || 0;
    };
    _windowExists5 = function _windowExists6() {
      return typeof window !== "undefined";
    };
    _getGSAP3 = function _getGSAP4() {
      return gsap3 || _windowExists5() && (gsap3 = window.gsap) && gsap3.registerPlugin && gsap3;
    };
    _isViewport3 = function _isViewport4(e) {
      return !!~_root2.indexOf(e);
    };
    _getBoundsFunc = function _getBoundsFunc2(element) {
      return _getProxyProp(element, "getBoundingClientRect") || (_isViewport3(element) ? function() {
        _winOffsets.width = _win4.innerWidth;
        _winOffsets.height = _win4.innerHeight;
        return _winOffsets;
      } : function() {
        return _getBounds(element);
      });
    };
    _getSizeFunc = function _getSizeFunc2(scroller, isViewport, _ref) {
      var d = _ref.d, d2 = _ref.d2, a = _ref.a;
      return (a = _getProxyProp(scroller, "getBoundingClientRect")) ? function() {
        return a()[d];
      } : function() {
        return (isViewport ? _win4["inner" + d2] : scroller["client" + d2]) || 0;
      };
    };
    _getOffsetsFunc = function _getOffsetsFunc2(element, isViewport) {
      return !isViewport || ~_proxies.indexOf(element) ? _getBoundsFunc(element) : function() {
        return _winOffsets;
      };
    };
    _maxScroll = function _maxScroll2(element, _ref2) {
      var s = _ref2.s, d2 = _ref2.d2, d = _ref2.d, a = _ref2.a;
      return (s = "scroll" + d2) && (a = _getProxyProp(element, s)) ? a() - _getBoundsFunc(element)()[d] : _isViewport3(element) ? (_docEl2[s] || _body2[s]) - (_win4["inner" + d2] || _docEl2["client" + d2] || _body2["client" + d2]) : element[s] - element["offset" + d2];
    };
    _iterateAutoRefresh = function _iterateAutoRefresh2(func, events) {
      for (var i = 0; i < _autoRefresh.length; i += 3) {
        (!events || ~events.indexOf(_autoRefresh[i + 1])) && func(_autoRefresh[i], _autoRefresh[i + 1], _autoRefresh[i + 2]);
      }
    };
    _isString3 = function _isString4(value) {
      return typeof value === "string";
    };
    _isFunction3 = function _isFunction4(value) {
      return typeof value === "function";
    };
    _isNumber3 = function _isNumber4(value) {
      return typeof value === "number";
    };
    _isObject3 = function _isObject4(value) {
      return typeof value === "object";
    };
    _endAnimation = function _endAnimation2(animation, reversed, pause) {
      return animation && animation.progress(reversed ? 0 : 1) && pause && animation.pause();
    };
    _callback3 = function _callback4(self2, func) {
      if (self2.enabled) {
        var result = func(self2);
        result && result.totalTime && (self2.callbackAnimation = result);
      }
    };
    _abs = Math.abs;
    _left = "left";
    _top = "top";
    _right = "right";
    _bottom = "bottom";
    _width = "width";
    _height = "height";
    _Right = "Right";
    _Left = "Left";
    _Top = "Top";
    _Bottom = "Bottom";
    _padding = "padding";
    _margin = "margin";
    _Width = "Width";
    _Height = "Height";
    _px = "px";
    _getComputedStyle = function _getComputedStyle2(element) {
      return _win4.getComputedStyle(element);
    };
    _makePositionable = function _makePositionable2(element) {
      var position2 = _getComputedStyle(element).position;
      element.style.position = position2 === "absolute" || position2 === "fixed" ? position2 : "relative";
    };
    _setDefaults3 = function _setDefaults4(obj, defaults2) {
      for (var p in defaults2) {
        p in obj || (obj[p] = defaults2[p]);
      }
      return obj;
    };
    _getBounds = function _getBounds2(element, withoutTransforms) {
      var tween = withoutTransforms && _getComputedStyle(element)[_transformProp2] !== "matrix(1, 0, 0, 1, 0, 0)" && gsap3.to(element, {
        x: 0,
        y: 0,
        xPercent: 0,
        yPercent: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0
      }).progress(1), bounds = element.getBoundingClientRect();
      tween && tween.progress(0).kill();
      return bounds;
    };
    _getSize = function _getSize2(element, _ref3) {
      var d2 = _ref3.d2;
      return element["offset" + d2] || element["client" + d2] || 0;
    };
    _getLabelRatioArray = function _getLabelRatioArray2(timeline2) {
      var a = [], labels = timeline2.labels, duration = timeline2.duration(), p;
      for (p in labels) {
        a.push(labels[p] / duration);
      }
      return a;
    };
    _getClosestLabel = function _getClosestLabel2(animation) {
      return function(value) {
        return gsap3.utils.snap(_getLabelRatioArray(animation), value);
      };
    };
    _snapDirectional = function _snapDirectional2(snapIncrementOrArray) {
      var snap3 = gsap3.utils.snap(snapIncrementOrArray), a = Array.isArray(snapIncrementOrArray) && snapIncrementOrArray.slice(0).sort(function(a2, b) {
        return a2 - b;
      });
      return a ? function(value, direction2, threshold) {
        if (threshold === void 0) {
          threshold = 1e-3;
        }
        var i;
        if (!direction2) {
          return snap3(value);
        }
        if (direction2 > 0) {
          value -= threshold;
          for (i = 0; i < a.length; i++) {
            if (a[i] >= value) {
              return a[i];
            }
          }
          return a[i - 1];
        } else {
          i = a.length;
          value += threshold;
          while (i--) {
            if (a[i] <= value) {
              return a[i];
            }
          }
        }
        return a[0];
      } : function(value, direction2, threshold) {
        if (threshold === void 0) {
          threshold = 1e-3;
        }
        var snapped = snap3(value);
        return !direction2 || Math.abs(snapped - value) < threshold || snapped - value < 0 === direction2 < 0 ? snapped : snap3(direction2 < 0 ? value - snapIncrementOrArray : value + snapIncrementOrArray);
      };
    };
    _getLabelAtDirection = function _getLabelAtDirection2(timeline2) {
      return function(value, st) {
        return _snapDirectional(_getLabelRatioArray(timeline2))(value, st.direction);
      };
    };
    _multiListener = function _multiListener2(func, element, types, callback) {
      return types.split(",").forEach(function(type) {
        return func(element, type, callback);
      });
    };
    _addListener3 = function _addListener4(element, type, func, nonPassive, capture) {
      return element.addEventListener(type, func, {
        passive: !nonPassive,
        capture: !!capture
      });
    };
    _removeListener3 = function _removeListener4(element, type, func, capture) {
      return element.removeEventListener(type, func, !!capture);
    };
    _wheelListener = function _wheelListener2(func, el, scrollFunc) {
      return scrollFunc && scrollFunc.wheelHandler && func(el, "wheel", scrollFunc);
    };
    _markerDefaults = {
      startColor: "green",
      endColor: "red",
      indent: 0,
      fontSize: "16px",
      fontWeight: "normal"
    };
    _defaults2 = {
      toggleActions: "play",
      anticipatePin: 0
    };
    _keywords = {
      top: 0,
      left: 0,
      center: 0.5,
      bottom: 1,
      right: 1
    };
    _offsetToPx = function _offsetToPx2(value, size2) {
      if (_isString3(value)) {
        var eqIndex = value.indexOf("="), relative = ~eqIndex ? +(value.charAt(eqIndex - 1) + 1) * parseFloat(value.substr(eqIndex + 1)) : 0;
        if (~eqIndex) {
          value.indexOf("%") > eqIndex && (relative *= size2 / 100);
          value = value.substr(0, eqIndex - 1);
        }
        value = relative + (value in _keywords ? _keywords[value] * size2 : ~value.indexOf("%") ? parseFloat(value) * size2 / 100 : parseFloat(value) || 0);
      }
      return value;
    };
    _createMarker = function _createMarker2(type, name, container, direction2, _ref4, offset, matchWidthEl, containerAnimation) {
      var startColor = _ref4.startColor, endColor = _ref4.endColor, fontSize2 = _ref4.fontSize, indent = _ref4.indent, fontWeight2 = _ref4.fontWeight;
      var e = _doc4.createElement("div"), useFixedPosition = _isViewport3(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body2 : container, isStart = type.indexOf("start") !== -1, color = isStart ? startColor : endColor, css = "border-color:" + color + ";font-size:" + fontSize2 + ";color:" + color + ";font-weight:" + fontWeight2 + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
      css += "position:" + ((isScroller || containerAnimation) && useFixedPosition ? "fixed;" : "absolute;");
      (isScroller || containerAnimation || !useFixedPosition) && (css += (direction2 === _vertical ? _right : _bottom) + ":" + (offset + parseFloat(indent)) + "px;");
      matchWidthEl && (css += "box-sizing:border-box;text-align:left;width:" + matchWidthEl.offsetWidth + "px;");
      e._isStart = isStart;
      e.setAttribute("class", "gsap-marker-" + type + (name ? " marker-" + name : ""));
      e.style.cssText = css;
      e.innerText = name || name === 0 ? type + "-" + name : type;
      parent.children[0] ? parent.insertBefore(e, parent.children[0]) : parent.appendChild(e);
      e._offset = e["offset" + direction2.op.d2];
      _positionMarker(e, 0, direction2, isStart);
      return e;
    };
    _positionMarker = function _positionMarker2(marker, start, direction2, flipped) {
      var vars = {
        display: "block"
      }, side = direction2[flipped ? "os2" : "p2"], oppositeSide = direction2[flipped ? "p2" : "os2"];
      marker._isFlipped = flipped;
      vars[direction2.a + "Percent"] = flipped ? -100 : 0;
      vars[direction2.a] = flipped ? "1px" : 0;
      vars["border" + side + _Width] = 1;
      vars["border" + oppositeSide + _Width] = 0;
      vars[direction2.p] = start + "px";
      gsap3.set(marker, vars);
    };
    _triggers = [];
    _ids = {};
    _sync = function _sync2() {
      return _getTime2() - _lastScrollTime > 34 && (_rafID || (_rafID = requestAnimationFrame(_updateAll)));
    };
    _onScroll3 = function _onScroll4() {
      if (!_normalizer2 || !_normalizer2.isPressed || _normalizer2.startX > _body2.clientWidth) {
        _scrollers.cache++;
        if (_normalizer2) {
          _rafID || (_rafID = requestAnimationFrame(_updateAll));
        } else {
          _updateAll();
        }
        _lastScrollTime || _dispatch3("scrollStart");
        _lastScrollTime = _getTime2();
      }
    };
    _setBaseDimensions = function _setBaseDimensions2() {
      _baseScreenWidth = _win4.innerWidth;
      _baseScreenHeight = _win4.innerHeight;
    };
    _onResize = function _onResize2() {
      _scrollers.cache++;
      !_refreshing && !_ignoreResize && !_doc4.fullscreenElement && !_doc4.webkitFullscreenElement && (!_ignoreMobileResize || _baseScreenWidth !== _win4.innerWidth || Math.abs(_win4.innerHeight - _baseScreenHeight) > _win4.innerHeight * 0.25) && _resizeDelay.restart(true);
    };
    _listeners2 = {};
    _emptyArray2 = [];
    _softRefresh = function _softRefresh2() {
      return _removeListener3(ScrollTrigger2, "scrollEnd", _softRefresh2) || _refreshAll(true);
    };
    _dispatch3 = function _dispatch4(type) {
      return _listeners2[type] && _listeners2[type].map(function(f) {
        return f();
      }) || _emptyArray2;
    };
    _savedStyles = [];
    _revertRecorded = function _revertRecorded2(media2) {
      for (var i = 0; i < _savedStyles.length; i += 5) {
        if (!media2 || _savedStyles[i + 4] && _savedStyles[i + 4].query === media2) {
          _savedStyles[i].style.cssText = _savedStyles[i + 1];
          _savedStyles[i].getBBox && _savedStyles[i].setAttribute("transform", _savedStyles[i + 2] || "");
          _savedStyles[i + 3].uncache = 1;
        }
      }
    };
    _revertAll = function _revertAll2(kill, media2) {
      var trigger;
      for (_i = 0; _i < _triggers.length; _i++) {
        trigger = _triggers[_i];
        if (trigger && (!media2 || trigger._ctx === media2)) {
          if (kill) {
            trigger.kill(1);
          } else {
            trigger.revert(true, true);
          }
        }
      }
      media2 && _revertRecorded(media2);
      media2 || _dispatch3("revert");
    };
    _clearScrollMemory = function _clearScrollMemory2(scrollRestoration, force) {
      _scrollers.cache++;
      (force || !_refreshingAll) && _scrollers.forEach(function(obj) {
        return _isFunction3(obj) && obj.cacheID++ && (obj.rec = 0);
      });
      _isString3(scrollRestoration) && (_win4.history.scrollRestoration = _scrollRestoration = scrollRestoration);
    };
    _refreshID = 0;
    _queueRefreshAll = function _queueRefreshAll2() {
      if (_queueRefreshID !== _refreshID) {
        var id = _queueRefreshID = _refreshID;
        requestAnimationFrame(function() {
          return id === _refreshID && _refreshAll(true);
        });
      }
    };
    _refreshAll = function _refreshAll2(force, skipRevert) {
      if (_lastScrollTime && !force) {
        _addListener3(ScrollTrigger2, "scrollEnd", _softRefresh);
        return;
      }
      _refreshingAll = ScrollTrigger2.isRefreshing = true;
      _scrollers.forEach(function(obj) {
        return _isFunction3(obj) && obj.cacheID++ && (obj.rec = obj());
      });
      var refreshInits = _dispatch3("refreshInit");
      _sort && ScrollTrigger2.sort();
      skipRevert || _revertAll();
      _scrollers.forEach(function(obj) {
        if (_isFunction3(obj)) {
          obj.smooth && (obj.target.style.scrollBehavior = "auto");
          obj(0);
        }
      });
      _triggers.slice(0).forEach(function(t) {
        return t.refresh();
      });
      _triggers.forEach(function(t, i) {
        if (t._subPinOffset && t.pin) {
          var prop = t.vars.horizontal ? "offsetWidth" : "offsetHeight", original = t.pin[prop];
          t.revert(true, 1);
          t.adjustPinSpacing(t.pin[prop] - original);
          t.revert(false, 1);
        }
      });
      _triggers.forEach(function(t) {
        return t.vars.end === "max" && t.setPositions(t.start, Math.max(t.start + 1, _maxScroll(t.scroller, t._dir)));
      });
      refreshInits.forEach(function(result) {
        return result && result.render && result.render(-1);
      });
      _scrollers.forEach(function(obj) {
        if (_isFunction3(obj)) {
          obj.smooth && requestAnimationFrame(function() {
            return obj.target.style.scrollBehavior = "smooth";
          });
          obj.rec && obj(obj.rec);
        }
      });
      _clearScrollMemory(_scrollRestoration, 1);
      _resizeDelay.pause();
      _refreshID++;
      _updateAll(2);
      _triggers.forEach(function(t) {
        return _isFunction3(t.vars.onRefresh) && t.vars.onRefresh(t);
      });
      _refreshingAll = ScrollTrigger2.isRefreshing = false;
      _dispatch3("refresh");
    };
    _lastScroll = 0;
    _direction = 1;
    _updateAll = function _updateAll2(force) {
      if (!_refreshingAll || force === 2) {
        ScrollTrigger2.isUpdating = true;
        _primary && _primary.update(0);
        var l = _triggers.length, time = _getTime2(), recordVelocity = time - _time1 >= 50, scroll = l && _triggers[0].scroll();
        _direction = _lastScroll > scroll ? -1 : 1;
        _lastScroll = scroll;
        if (recordVelocity) {
          if (_lastScrollTime && !_pointerIsDown && time - _lastScrollTime > 200) {
            _lastScrollTime = 0;
            _dispatch3("scrollEnd");
          }
          _time2 = _time1;
          _time1 = time;
        }
        if (_direction < 0) {
          _i = l;
          while (_i-- > 0) {
            _triggers[_i] && _triggers[_i].update(0, recordVelocity);
          }
          _direction = 1;
        } else {
          for (_i = 0; _i < l; _i++) {
            _triggers[_i] && _triggers[_i].update(0, recordVelocity);
          }
        }
        ScrollTrigger2.isUpdating = false;
      }
      _rafID = 0;
    };
    _propNamesToCopy = [_left, _top, _bottom, _right, _margin + _Bottom, _margin + _Right, _margin + _Top, _margin + _Left, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"];
    _stateProps = _propNamesToCopy.concat([_width, _height, "boxSizing", "max" + _Width, "max" + _Height, "position", _margin, _padding, _padding + _Top, _padding + _Right, _padding + _Bottom, _padding + _Left]);
    _swapPinOut = function _swapPinOut2(pin, spacer, state) {
      _setState(state);
      var cache = pin._gsap;
      if (cache.spacerIsNative) {
        _setState(cache.spacerState);
      } else if (pin._gsap.swappedIn) {
        var parent = spacer.parentNode;
        if (parent) {
          parent.insertBefore(pin, spacer);
          parent.removeChild(spacer);
        }
      }
      pin._gsap.swappedIn = false;
    };
    _swapPinIn = function _swapPinIn2(pin, spacer, cs, spacerState) {
      if (!pin._gsap.swappedIn) {
        var i = _propNamesToCopy.length, spacerStyle = spacer.style, pinStyle = pin.style, p;
        while (i--) {
          p = _propNamesToCopy[i];
          spacerStyle[p] = cs[p];
        }
        spacerStyle.position = cs.position === "absolute" ? "absolute" : "relative";
        cs.display === "inline" && (spacerStyle.display = "inline-block");
        pinStyle[_bottom] = pinStyle[_right] = "auto";
        spacerStyle.flexBasis = cs.flexBasis || "auto";
        spacerStyle.overflow = "visible";
        spacerStyle.boxSizing = "border-box";
        spacerStyle[_width] = _getSize(pin, _horizontal) + _px;
        spacerStyle[_height] = _getSize(pin, _vertical) + _px;
        spacerStyle[_padding] = pinStyle[_margin] = pinStyle[_top] = pinStyle[_left] = "0";
        _setState(spacerState);
        pinStyle[_width] = pinStyle["max" + _Width] = cs[_width];
        pinStyle[_height] = pinStyle["max" + _Height] = cs[_height];
        pinStyle[_padding] = cs[_padding];
        if (pin.parentNode !== spacer) {
          pin.parentNode.insertBefore(spacer, pin);
          spacer.appendChild(pin);
        }
        pin._gsap.swappedIn = true;
      }
    };
    _capsExp2 = /([A-Z])/g;
    _setState = function _setState2(state) {
      if (state) {
        var style = state.t.style, l = state.length, i = 0, p, value;
        (state.t._gsap || gsap3.core.getCache(state.t)).uncache = 1;
        for (; i < l; i += 2) {
          value = state[i + 1];
          p = state[i];
          if (value) {
            style[p] = value;
          } else if (style[p]) {
            style.removeProperty(p.replace(_capsExp2, "-$1").toLowerCase());
          }
        }
      }
    };
    _getState = function _getState2(element) {
      var l = _stateProps.length, style = element.style, state = [], i = 0;
      for (; i < l; i++) {
        state.push(_stateProps[i], style[_stateProps[i]]);
      }
      state.t = element;
      return state;
    };
    _copyState = function _copyState2(state, override, omitOffsets) {
      var result = [], l = state.length, i = omitOffsets ? 8 : 0, p;
      for (; i < l; i += 2) {
        p = state[i];
        result.push(p, p in override ? override[p] : state[i + 1]);
      }
      result.t = state.t;
      return result;
    };
    _winOffsets = {
      left: 0,
      top: 0
    };
    _parsePosition3 = function _parsePosition4(value, trigger, scrollerSize, direction2, scroll, marker, markerScroller, self2, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation) {
      _isFunction3(value) && (value = value(self2));
      if (_isString3(value) && value.substr(0, 3) === "max") {
        value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
      }
      var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
      containerAnimation && containerAnimation.seek(0);
      if (!_isNumber3(value)) {
        _isFunction3(trigger) && (trigger = trigger(self2));
        var offsets = (value || "0").split(" "), bounds, localOffset, globalOffset, display2;
        element = _getTarget(trigger) || _body2;
        bounds = _getBounds(element) || {};
        if ((!bounds || !bounds.left && !bounds.top) && _getComputedStyle(element).display === "none") {
          display2 = element.style.display;
          element.style.display = "block";
          bounds = _getBounds(element);
          display2 ? element.style.display = display2 : element.style.removeProperty("display");
        }
        localOffset = _offsetToPx(offsets[0], bounds[direction2.d]);
        globalOffset = _offsetToPx(offsets[1] || "0", scrollerSize);
        value = bounds[direction2.p] - scrollerBounds[direction2.p] - borderWidth + localOffset + scroll - globalOffset;
        markerScroller && _positionMarker(markerScroller, globalOffset, direction2, scrollerSize - globalOffset < 20 || markerScroller._isStart && globalOffset > 20);
        scrollerSize -= scrollerSize - globalOffset;
      } else if (markerScroller) {
        _positionMarker(markerScroller, scrollerSize, direction2, true);
      }
      if (marker) {
        var position2 = value + scrollerSize, isStart = marker._isStart;
        p1 = "scroll" + direction2.d2;
        _positionMarker(marker, position2, direction2, isStart && position2 > 20 || !isStart && (useFixedPosition ? Math.max(_body2[p1], _docEl2[p1]) : marker.parentNode[p1]) <= position2 + 1);
        if (useFixedPosition) {
          scrollerBounds = _getBounds(markerScroller);
          useFixedPosition && (marker.style[direction2.op.p] = scrollerBounds[direction2.op.p] - direction2.op.m - marker._offset + _px);
        }
      }
      if (containerAnimation && element) {
        p1 = _getBounds(element);
        containerAnimation.seek(scrollerMax);
        p2 = _getBounds(element);
        containerAnimation._caScrollDist = p1[direction2.p] - p2[direction2.p];
        value = value / containerAnimation._caScrollDist * scrollerMax;
      }
      containerAnimation && containerAnimation.seek(time);
      return containerAnimation ? value : Math.round(value);
    };
    _prefixExp = /(webkit|moz|length|cssText|inset)/i;
    _reparent = function _reparent2(element, parent, top, left) {
      if (element.parentNode !== parent) {
        var style = element.style, p, cs;
        if (parent === _body2) {
          element._stOrig = style.cssText;
          cs = _getComputedStyle(element);
          for (p in cs) {
            if (!+p && !_prefixExp.test(p) && cs[p] && typeof style[p] === "string" && p !== "0") {
              style[p] = cs[p];
            }
          }
          style.top = top;
          style.left = left;
        } else {
          style.cssText = element._stOrig;
        }
        gsap3.core.getCache(element).uncache = 1;
        parent.appendChild(element);
      }
    };
    _getTweenCreator = function _getTweenCreator2(scroller, direction2) {
      var getScroll = _getScrollFunc(scroller, direction2), prop = "_scroll" + direction2.p2, lastScroll1, lastScroll2, getTween = function getTween2(scrollTo2, vars, initialValue, change1, change2) {
        var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
        initialValue = initialValue || getScroll();
        change2 = change1 && change2 || 0;
        change1 = change1 || scrollTo2 - initialValue;
        tween && tween.kill();
        lastScroll1 = Math.round(initialValue);
        vars[prop] = scrollTo2;
        vars.modifiers = modifiers;
        modifiers[prop] = function(value) {
          value = Math.round(getScroll());
          if (value !== lastScroll1 && value !== lastScroll2 && Math.abs(value - lastScroll1) > 3 && Math.abs(value - lastScroll2) > 3) {
            tween.kill();
            getTween2.tween = 0;
          } else {
            value = initialValue + change1 * tween.ratio + change2 * tween.ratio * tween.ratio;
          }
          lastScroll2 = lastScroll1;
          return lastScroll1 = Math.round(value);
        };
        vars.onComplete = function() {
          getTween2.tween = 0;
          onComplete && onComplete.call(tween);
        };
        tween = getTween2.tween = gsap3.to(scroller, vars);
        return tween;
      };
      scroller[prop] = getScroll;
      getScroll.wheelHandler = function() {
        return getTween.tween && getTween.tween.kill() && (getTween.tween = 0);
      };
      _addListener3(scroller, "wheel", getScroll.wheelHandler);
      return getTween;
    };
    ScrollTrigger2 = /* @__PURE__ */ function() {
      function ScrollTrigger3(vars, animation) {
        _coreInitted3 || ScrollTrigger3.register(gsap3) || console.warn("Please gsap.registerPlugin(ScrollTrigger)");
        this.init(vars, animation);
      }
      var _proto = ScrollTrigger3.prototype;
      _proto.init = function init4(vars, animation) {
        this.progress = this.start = 0;
        this.vars && this.kill(true, true);
        if (!_enabled) {
          this.update = this.refresh = this.kill = _passThrough3;
          return;
        }
        vars = _setDefaults3(_isString3(vars) || _isNumber3(vars) || vars.nodeType ? {
          trigger: vars
        } : vars, _defaults2);
        var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap3 = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction2 = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win4), scrollerCache = gsap3.core.getCache(scroller), isViewport = _isViewport3(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults2.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction2.p2 + _Width]) || 0, self2 = this, onRefreshInit = vars.onRefreshInit && function() {
          return vars.onRefreshInit(self2);
        }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction2), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, scrollFunc = _getScrollFunc(scroller, direction2), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, markerEndSetter, cs, snap1, snap22, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevProgress, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
        _context2(self2);
        self2._dir = direction2;
        anticipatePin *= 45;
        self2.scroller = scroller;
        self2.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
        scroll1 = scrollFunc();
        self2.vars = vars;
        animation = animation || vars.animation;
        if ("refreshPriority" in vars) {
          _sort = 1;
          vars.refreshPriority === -9999 && (_primary = self2);
        }
        scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
          top: _getTweenCreator(scroller, _vertical),
          left: _getTweenCreator(scroller, _horizontal)
        };
        self2.tweenTo = tweenTo = scrollerCache.tweenScroll[direction2.p];
        self2.scrubDuration = function(value) {
          scrubSmooth = _isNumber3(value) && value;
          if (!scrubSmooth) {
            scrubTween && scrubTween.progress(1).kill();
            scrubTween = 0;
          } else {
            scrubTween ? scrubTween.duration(value) : scrubTween = gsap3.to(animation, {
              ease: "expo",
              totalProgress: "+=0.001",
              duration: scrubSmooth,
              paused: true,
              onComplete: function onComplete() {
                return onScrubComplete && onScrubComplete(self2);
              }
            });
          }
        };
        if (animation) {
          animation.vars.lazy = false;
          animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
          self2.animation = animation.pause();
          animation.scrollTrigger = self2;
          self2.scrubDuration(scrub);
          snap1 = 0;
          id || (id = animation.vars.id);
        }
        _triggers.push(self2);
        if (snap3) {
          if (!_isObject3(snap3) || snap3.push) {
            snap3 = {
              snapTo: snap3
            };
          }
          "scrollBehavior" in _body2.style && gsap3.set(isViewport ? [_body2, _docEl2] : scroller, {
            scrollBehavior: "auto"
          });
          _scrollers.forEach(function(o) {
            return _isFunction3(o) && o.target === (isViewport ? _doc4.scrollingElement || _docEl2 : scroller) && (o.smooth = false);
          });
          snapFunc = _isFunction3(snap3.snapTo) ? snap3.snapTo : snap3.snapTo === "labels" ? _getClosestLabel(animation) : snap3.snapTo === "labelsDirectional" ? _getLabelAtDirection(animation) : snap3.directional !== false ? function(value, st) {
            return _snapDirectional(snap3.snapTo)(value, _getTime2() - lastRefresh < 500 ? 0 : st.direction);
          } : gsap3.utils.snap(snap3.snapTo);
          snapDurClamp = snap3.duration || {
            min: 0.1,
            max: 2
          };
          snapDurClamp = _isObject3(snapDurClamp) ? _clamp4(snapDurClamp.min, snapDurClamp.max) : _clamp4(snapDurClamp, snapDurClamp);
          snapDelayedCall = gsap3.delayedCall(snap3.delay || scrubSmooth / 2 || 0.1, function() {
            var scroll = scrollFunc(), refreshedRecently = _getTime2() - lastRefresh < 500, tween = tweenTo.tween;
            if ((refreshedRecently || Math.abs(self2.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
              var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap22) / (_getTime2() - _time2) * 1e3 || 0, change1 = gsap3.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap3.inertia === false ? 0 : change1), endValue = _clamp4(0, 1, snapFunc(naturalEnd, self2)), endScroll = Math.round(start + endValue * change), _snap = snap3, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
              if (scroll <= end && scroll >= start && endScroll !== scroll) {
                if (tween && !tween._initted && tween.data <= _abs(endScroll - scroll)) {
                  return;
                }
                if (snap3.inertia === false) {
                  change1 = endValue - progress;
                }
                tweenTo(endScroll, {
                  duration: snapDurClamp(_abs(Math.max(_abs(naturalEnd - totalProgress), _abs(endValue - totalProgress)) * 0.185 / velocity / 0.05 || 0)),
                  ease: snap3.ease || "power3",
                  data: _abs(endScroll - scroll),
                  onInterrupt: function onInterrupt() {
                    return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self2);
                  },
                  onComplete: function onComplete() {
                    self2.update();
                    lastSnap = scrollFunc();
                    snap1 = snap22 = animation && !isToggle ? animation.totalProgress() : self2.progress;
                    onSnapComplete && onSnapComplete(self2);
                    _onComplete && _onComplete(self2);
                  }
                }, scroll, change1 * change, endScroll - scroll - change1 * change);
                onStart && onStart(self2, tweenTo.tween);
              }
            } else if (self2.isActive && lastSnap !== scroll) {
              snapDelayedCall.restart(true);
            }
          }).pause();
        }
        id && (_ids[id] = self2);
        trigger = self2.trigger = _getTarget(trigger || pin);
        customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
        customRevertReturn && (customRevertReturn = customRevertReturn(self2));
        pin = pin === true ? trigger : _getTarget(pin);
        _isString3(toggleClass) && (toggleClass = {
          targets: trigger,
          className: toggleClass
        });
        if (pin) {
          pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
          self2.pin = pin;
          pinCache = gsap3.core.getCache(pin);
          if (!pinCache.spacer) {
            if (pinSpacer) {
              pinSpacer = _getTarget(pinSpacer);
              pinSpacer && !pinSpacer.nodeType && (pinSpacer = pinSpacer.current || pinSpacer.nativeElement);
              pinCache.spacerIsNative = !!pinSpacer;
              pinSpacer && (pinCache.spacerState = _getState(pinSpacer));
            }
            pinCache.spacer = spacer = pinSpacer || _doc4.createElement("div");
            spacer.classList.add("pin-spacer");
            id && spacer.classList.add("pin-spacer-" + id);
            pinCache.pinState = pinOriginalState = _getState(pin);
          } else {
            pinOriginalState = pinCache.pinState;
          }
          vars.force3D !== false && gsap3.set(pin, {
            force3D: true
          });
          self2.spacer = spacer = pinCache.spacer;
          cs = _getComputedStyle(pin);
          spacingStart = cs[pinSpacing + direction2.os2];
          pinGetter = gsap3.getProperty(pin);
          pinSetter = gsap3.quickSetter(pin, direction2.a, _px);
          _swapPinIn(pin, spacer, cs);
          pinState = _getState(pin);
        }
        if (markers) {
          markerVars = _isObject3(markers) ? _setDefaults3(markers, _markerDefaults) : _markerDefaults;
          markerStartTrigger = _createMarker("scroller-start", id, scroller, direction2, markerVars, 0);
          markerEndTrigger = _createMarker("scroller-end", id, scroller, direction2, markerVars, 0, markerStartTrigger);
          offset = markerStartTrigger["offset" + direction2.op.d2];
          var content = _getTarget(_getProxyProp(scroller, "content") || scroller);
          markerStart = this.markerStart = _createMarker("start", id, content, direction2, markerVars, offset, 0, containerAnimation);
          markerEnd = this.markerEnd = _createMarker("end", id, content, direction2, markerVars, offset, 0, containerAnimation);
          containerAnimation && (caMarkerSetter = gsap3.quickSetter([markerStart, markerEnd], direction2.a, _px));
          if (!useFixedPosition && !(_proxies.length && _getProxyProp(scroller, "fixedMarkers") === true)) {
            _makePositionable(isViewport ? _body2 : scroller);
            gsap3.set([markerStartTrigger, markerEndTrigger], {
              force3D: true
            });
            markerStartSetter = gsap3.quickSetter(markerStartTrigger, direction2.a, _px);
            markerEndSetter = gsap3.quickSetter(markerEndTrigger, direction2.a, _px);
          }
        }
        if (containerAnimation) {
          var oldOnUpdate = containerAnimation.vars.onUpdate, oldParams = containerAnimation.vars.onUpdateParams;
          containerAnimation.eventCallback("onUpdate", function() {
            self2.update(0, 0, 1);
            oldOnUpdate && oldOnUpdate.apply(oldParams || []);
          });
        }
        self2.previous = function() {
          return _triggers[_triggers.indexOf(self2) - 1];
        };
        self2.next = function() {
          return _triggers[_triggers.indexOf(self2) + 1];
        };
        self2.revert = function(revert, temp) {
          if (!temp) {
            return self2.kill(true);
          }
          var r = revert !== false || !self2.enabled, prevRefreshing = _refreshing;
          if (r !== self2.isReverted) {
            if (r) {
              prevScroll = Math.max(scrollFunc(), self2.scroll.rec || 0);
              prevProgress = self2.progress;
              prevAnimProgress = animation && animation.progress();
            }
            markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
              return m.style.display = r ? "none" : "block";
            });
            if (r) {
              _refreshing = 1;
              self2.update(r);
            }
            if (pin) {
              if (r) {
                _swapPinOut(pin, spacer, pinOriginalState);
              } else {
                (!pinReparent || !self2.isActive) && _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
              }
            }
            r || self2.update(r);
            _refreshing = prevRefreshing;
            self2.isReverted = r;
          }
        };
        self2.refresh = function(soft, force) {
          if ((_refreshing || !self2.enabled) && !force) {
            return;
          }
          if (pin && soft && _lastScrollTime) {
            _addListener3(ScrollTrigger3, "scrollEnd", _softRefresh);
            return;
          }
          !_refreshingAll && onRefreshInit && onRefreshInit(self2);
          _refreshing = 1;
          lastRefresh = _getTime2();
          if (tweenTo.tween) {
            tweenTo.tween.kill();
            tweenTo.tween = 0;
          }
          scrubTween && scrubTween.pause();
          invalidateOnRefresh && animation && animation.revert({
            kill: false
          }).invalidate();
          self2.isReverted || self2.revert(true, true);
          self2._subPinOffset = false;
          var size2 = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction2), offset2 = 0, otherPinOffset = 0, parsedEnd = vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self2.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self2)) || 0, i = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins;
          while (i--) {
            curTrigger = _triggers[i];
            curTrigger.end || curTrigger.refresh(0, 1) || (_refreshing = 1);
            curPin = curTrigger.pin;
            if (curPin && (curPin === trigger || curPin === pin) && !curTrigger.isReverted) {
              revertedPins || (revertedPins = []);
              revertedPins.unshift(curTrigger);
              curTrigger.revert(true, true);
            }
            if (curTrigger !== _triggers[i]) {
              triggerIndex--;
              i--;
            }
          }
          _isFunction3(parsedStart) && (parsedStart = parsedStart(self2));
          start = _parsePosition3(parsedStart, trigger, size2, direction2, scrollFunc(), markerStart, markerStartTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation) || (pin ? -1e-3 : 0);
          _isFunction3(parsedEnd) && (parsedEnd = parsedEnd(self2));
          if (_isString3(parsedEnd) && !parsedEnd.indexOf("+=")) {
            if (~parsedEnd.indexOf(" ")) {
              parsedEnd = (_isString3(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
            } else {
              offset2 = _offsetToPx(parsedEnd.substr(2), size2);
              parsedEnd = _isString3(parsedStart) ? parsedStart : start + offset2;
              parsedEndTrigger = trigger;
            }
          }
          end = Math.max(start, _parsePosition3(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size2, direction2, scrollFunc() + offset2, markerEnd, markerEndTrigger, self2, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation)) || -1e-3;
          change = end - start || (start -= 0.01) && 1e-3;
          offset2 = 0;
          i = triggerIndex;
          while (i--) {
            curTrigger = _triggers[i];
            curPin = curTrigger.pin;
            if (curPin && curTrigger.start - curTrigger._pinPush <= start && !containerAnimation && curTrigger.end > 0) {
              cs2 = curTrigger.end - curTrigger.start;
              if ((curPin === trigger && curTrigger.start - curTrigger._pinPush < start || curPin === pinnedContainer) && !_isNumber3(parsedStart)) {
                offset2 += cs2 * (1 - curTrigger.progress);
              }
              curPin === pin && (otherPinOffset += cs2);
            }
          }
          start += offset2;
          end += offset2;
          self2._pinPush = otherPinOffset;
          if (markerStart && offset2) {
            cs2 = {};
            cs2[direction2.a] = "+=" + offset2;
            pinnedContainer && (cs2[direction2.p] = "-=" + scrollFunc());
            gsap3.set([markerStart, markerEnd], cs2);
          }
          if (pin) {
            cs2 = _getComputedStyle(pin);
            isVertical = direction2 === _vertical;
            scroll = scrollFunc();
            pinStart = parseFloat(pinGetter(direction2.a)) + otherPinOffset;
            !max && end > 1 && ((isViewport ? _body2 : scroller).style["overflow-" + direction2.a] = "scroll");
            _swapPinIn(pin, spacer, cs2);
            pinState = _getState(pin);
            bounds = _getBounds(pin, true);
            oppositeScroll = useFixedPosition && _getScrollFunc(scroller, isVertical ? _horizontal : _vertical)();
            if (pinSpacing) {
              spacerState = [pinSpacing + direction2.os2, change + otherPinOffset + _px];
              spacerState.t = spacer;
              i = pinSpacing === _padding ? _getSize(pin, direction2) + change + otherPinOffset : 0;
              i && spacerState.push(direction2.d, i + _px);
              _setState(spacerState);
              if (pinnedContainer) {
                _triggers.forEach(function(t) {
                  if (t.pin === pinnedContainer && t.vars.pinSpacing !== false) {
                    t._subPinOffset = true;
                  }
                });
              }
              useFixedPosition && scrollFunc(prevScroll);
            }
            if (useFixedPosition) {
              override = {
                top: bounds.top + (isVertical ? scroll - start : oppositeScroll) + _px,
                left: bounds.left + (isVertical ? oppositeScroll : scroll - start) + _px,
                boxSizing: "border-box",
                position: "fixed"
              };
              override[_width] = override["max" + _Width] = Math.ceil(bounds.width) + _px;
              override[_height] = override["max" + _Height] = Math.ceil(bounds.height) + _px;
              override[_margin] = override[_margin + _Top] = override[_margin + _Right] = override[_margin + _Bottom] = override[_margin + _Left] = "0";
              override[_padding] = cs2[_padding];
              override[_padding + _Top] = cs2[_padding + _Top];
              override[_padding + _Right] = cs2[_padding + _Right];
              override[_padding + _Bottom] = cs2[_padding + _Bottom];
              override[_padding + _Left] = cs2[_padding + _Left];
              pinActiveState = _copyState(pinOriginalState, override, pinReparent);
              _refreshingAll && scrollFunc(0);
            }
            if (animation) {
              initted = animation._initted;
              _suppressOverwrites2(1);
              animation.render(animation.duration(), true, true);
              pinChange = pinGetter(direction2.a) - pinStart + change + otherPinOffset;
              change !== pinChange && useFixedPosition && pinActiveState.splice(pinActiveState.length - 2, 2);
              animation.render(0, true, true);
              initted || animation.invalidate(true);
              animation.parent || animation.totalTime(animation.totalTime());
              _suppressOverwrites2(0);
            } else {
              pinChange = change;
            }
          } else if (trigger && scrollFunc() && !containerAnimation) {
            bounds = trigger.parentNode;
            while (bounds && bounds !== _body2) {
              if (bounds._pinOffset) {
                start -= bounds._pinOffset;
                end -= bounds._pinOffset;
              }
              bounds = bounds.parentNode;
            }
          }
          revertedPins && revertedPins.forEach(function(t) {
            return t.revert(false, true);
          });
          self2.start = start;
          self2.end = end;
          scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
          if (!containerAnimation && !_refreshingAll) {
            scroll1 < prevScroll && scrollFunc(prevScroll);
            self2.scroll.rec = 0;
          }
          self2.revert(false, true);
          if (snapDelayedCall) {
            lastSnap = -1;
            self2.isActive && scrollFunc(start + change * prevProgress);
            snapDelayedCall.restart(true);
          }
          _refreshing = 0;
          animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress, true).render(animation.time(), true, true);
          if (prevProgress !== self2.progress || containerAnimation) {
            animation && !isToggle && animation.totalProgress(prevProgress, true);
            self2.progress = (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
          }
          pin && pinSpacing && (spacer._pinOffset = Math.round(self2.progress * pinChange));
          onRefresh && !_refreshingAll && onRefresh(self2);
        };
        self2.getVelocity = function() {
          return (scrollFunc() - scroll2) / (_getTime2() - _time2) * 1e3 || 0;
        };
        self2.endAnimation = function() {
          _endAnimation(self2.callbackAnimation);
          if (animation) {
            scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self2.direction < 0, 1);
          }
        };
        self2.labelToScroll = function(label) {
          return animation && animation.labels && (start || self2.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
        };
        self2.getTrailing = function(name) {
          var i = _triggers.indexOf(self2), a = self2.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
          return (_isString3(name) ? a.filter(function(t) {
            return t.vars.preventOverlaps === name;
          }) : a).filter(function(t) {
            return self2.direction > 0 ? t.end <= start : t.start >= end;
          });
        };
        self2.update = function(reset, recordVelocity, forceFake) {
          if (containerAnimation && !forceFake && !reset) {
            return;
          }
          var scroll = _refreshingAll ? prevScroll : self2.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress2 = self2.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
          if (recordVelocity) {
            scroll2 = scroll1;
            scroll1 = containerAnimation ? scrollFunc() : scroll;
            if (snap3) {
              snap22 = snap1;
              snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
            }
          }
          anticipatePin && !clipped && pin && !_refreshing && !_startup2 && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin && (clipped = 1e-4);
          if (clipped !== prevProgress2 && self2.enabled) {
            isActive = self2.isActive = !!clipped && clipped < 1;
            wasActive = !!prevProgress2 && prevProgress2 < 1;
            toggled = isActive !== wasActive;
            stateChanged = toggled || !!clipped !== !!prevProgress2;
            self2.direction = clipped > prevProgress2 ? 1 : -1;
            self2.progress = clipped;
            if (stateChanged && !_refreshing) {
              toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
              if (isToggle) {
                action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
                isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
              }
            }
            preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction3(preventOverlaps) ? preventOverlaps(self2) : self2.getTrailing(preventOverlaps).forEach(function(t) {
              return t.endAnimation();
            }));
            if (!isToggle) {
              if (scrubTween && !_refreshing && !_startup2) {
                (containerAnimation || _primary && _primary !== self2) && scrubTween.render(scrubTween._dp._time - scrubTween._start);
                if (scrubTween.resetTo) {
                  scrubTween.resetTo("totalProgress", clipped, animation._tTime / animation._tDur);
                } else {
                  scrubTween.vars.totalProgress = clipped;
                  scrubTween.invalidate().restart();
                }
              } else if (animation) {
                animation.totalProgress(clipped, !!_refreshing);
              }
            }
            if (pin) {
              reset && pinSpacing && (spacer.style[pinSpacing + direction2.os2] = spacingStart);
              if (!useFixedPosition) {
                pinSetter(_round3(pinStart + pinChange * clipped));
              } else if (stateChanged) {
                isAtMax = !reset && clipped > prevProgress2 && end + 1 > scroll && scroll + 1 >= _maxScroll(scroller, direction2);
                if (pinReparent) {
                  if (!reset && (isActive || isAtMax)) {
                    var bounds = _getBounds(pin, true), _offset = scroll - start;
                    _reparent(pin, _body2, bounds.top + (direction2 === _vertical ? _offset : 0) + _px, bounds.left + (direction2 === _vertical ? 0 : _offset) + _px);
                  } else {
                    _reparent(pin, spacer);
                  }
                }
                _setState(isActive || isAtMax ? pinActiveState : pinState);
                pinChange !== change && clipped < 1 && isActive || pinSetter(pinStart + (clipped === 1 && !isAtMax ? pinChange : 0));
              }
            }
            snap3 && !tweenTo.tween && !_refreshing && !_startup2 && snapDelayedCall.restart(true);
            toggleClass && (toggled || once && clipped && (clipped < 1 || !_limitCallbacks)) && _toArray(toggleClass.targets).forEach(function(el) {
              return el.classList[isActive || once ? "add" : "remove"](toggleClass.className);
            });
            onUpdate && !isToggle && !reset && onUpdate(self2);
            if (stateChanged && !_refreshing) {
              if (isToggle) {
                if (isTakingAction) {
                  if (action === "complete") {
                    animation.pause().totalProgress(1);
                  } else if (action === "reset") {
                    animation.restart(true).pause();
                  } else if (action === "restart") {
                    animation.restart(true);
                  } else {
                    animation[action]();
                  }
                }
                onUpdate && onUpdate(self2);
              }
              if (toggled || !_limitCallbacks) {
                onToggle && toggled && _callback3(self2, onToggle);
                callbacks[toggleState] && _callback3(self2, callbacks[toggleState]);
                once && (clipped === 1 ? self2.kill(false, 1) : callbacks[toggleState] = 0);
                if (!toggled) {
                  toggleState = clipped === 1 ? 1 : 3;
                  callbacks[toggleState] && _callback3(self2, callbacks[toggleState]);
                }
              }
              if (fastScrollEnd && !isActive && Math.abs(self2.getVelocity()) > (_isNumber3(fastScrollEnd) ? fastScrollEnd : 2500)) {
                _endAnimation(self2.callbackAnimation);
                scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
              }
            } else if (isToggle && onUpdate && !_refreshing) {
              onUpdate(self2);
            }
          }
          if (markerEndSetter) {
            var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
            markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
            markerEndSetter(n);
          }
          caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
        };
        self2.enable = function(reset, refresh) {
          if (!self2.enabled) {
            self2.enabled = true;
            _addListener3(scroller, "resize", _onResize);
            _addListener3(isViewport ? _doc4 : scroller, "scroll", _onScroll3);
            onRefreshInit && _addListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
            if (reset !== false) {
              self2.progress = prevProgress = 0;
              scroll1 = scroll2 = lastSnap = scrollFunc();
            }
            refresh !== false && self2.refresh();
          }
        };
        self2.getTween = function(snap4) {
          return snap4 && tweenTo ? tweenTo.tween : scrubTween;
        };
        self2.setPositions = function(newStart, newEnd) {
          if (pin) {
            pinStart += newStart - start;
            pinChange += newEnd - newStart - change;
            pinSpacing === _padding && self2.adjustPinSpacing(newEnd - newStart - change);
          }
          self2.start = start = newStart;
          self2.end = end = newEnd;
          change = newEnd - newStart;
          self2.update();
        };
        self2.adjustPinSpacing = function(amount) {
          if (spacerState) {
            var i = spacerState.indexOf(direction2.d) + 1;
            spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
            spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
            _setState(spacerState);
          }
        };
        self2.disable = function(reset, allowAnimation) {
          if (self2.enabled) {
            reset !== false && self2.revert(true, true);
            self2.enabled = self2.isActive = false;
            allowAnimation || scrubTween && scrubTween.pause();
            prevScroll = 0;
            pinCache && (pinCache.uncache = 1);
            onRefreshInit && _removeListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
            if (snapDelayedCall) {
              snapDelayedCall.pause();
              tweenTo.tween && tweenTo.tween.kill() && (tweenTo.tween = 0);
            }
            if (!isViewport) {
              var i = _triggers.length;
              while (i--) {
                if (_triggers[i].scroller === scroller && _triggers[i] !== self2) {
                  return;
                }
              }
              _removeListener3(scroller, "resize", _onResize);
              _removeListener3(scroller, "scroll", _onScroll3);
            }
          }
        };
        self2.kill = function(revert, allowAnimation) {
          self2.disable(revert, allowAnimation);
          scrubTween && !allowAnimation && scrubTween.kill();
          id && delete _ids[id];
          var i = _triggers.indexOf(self2);
          i >= 0 && _triggers.splice(i, 1);
          i === _i && _direction > 0 && _i--;
          i = 0;
          _triggers.forEach(function(t) {
            return t.scroller === self2.scroller && (i = 1);
          });
          i || _refreshingAll || (self2.scroll.rec = 0);
          if (animation) {
            animation.scrollTrigger = null;
            revert && animation.revert({
              kill: false
            });
            allowAnimation || animation.kill();
          }
          markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
            return m.parentNode && m.parentNode.removeChild(m);
          });
          _primary === self2 && (_primary = 0);
          if (pin) {
            pinCache && (pinCache.uncache = 1);
            i = 0;
            _triggers.forEach(function(t) {
              return t.pin === pin && i++;
            });
            i || (pinCache.spacer = 0);
          }
          vars.onKill && vars.onKill(self2);
        };
        self2.enable(false, false);
        customRevertReturn && customRevertReturn(self2);
        !animation || !animation.add || change ? self2.refresh() : gsap3.delayedCall(0.01, function() {
          return start || end || self2.refresh();
        }) && (change = 0.01) && (start = end = 0);
        pin && _queueRefreshAll();
      };
      ScrollTrigger3.register = function register(core) {
        if (!_coreInitted3) {
          gsap3 = core || _getGSAP3();
          _windowExists5() && window.document && ScrollTrigger3.enable();
          _coreInitted3 = _enabled;
        }
        return _coreInitted3;
      };
      ScrollTrigger3.defaults = function defaults2(config4) {
        if (config4) {
          for (var p in config4) {
            _defaults2[p] = config4[p];
          }
        }
        return _defaults2;
      };
      ScrollTrigger3.disable = function disable(reset, kill) {
        _enabled = 0;
        _triggers.forEach(function(trigger) {
          return trigger[kill ? "kill" : "disable"](reset);
        });
        _removeListener3(_win4, "wheel", _onScroll3);
        _removeListener3(_doc4, "scroll", _onScroll3);
        clearInterval(_syncInterval);
        _removeListener3(_doc4, "touchcancel", _passThrough3);
        _removeListener3(_body2, "touchstart", _passThrough3);
        _multiListener(_removeListener3, _doc4, "pointerdown,touchstart,mousedown", _pointerDownHandler);
        _multiListener(_removeListener3, _doc4, "pointerup,touchend,mouseup", _pointerUpHandler);
        _resizeDelay.kill();
        _iterateAutoRefresh(_removeListener3);
        for (var i = 0; i < _scrollers.length; i += 3) {
          _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 1]);
          _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 2]);
        }
      };
      ScrollTrigger3.enable = function enable() {
        _win4 = window;
        _doc4 = document;
        _docEl2 = _doc4.documentElement;
        _body2 = _doc4.body;
        if (gsap3) {
          _toArray = gsap3.utils.toArray;
          _clamp4 = gsap3.utils.clamp;
          _context2 = gsap3.core.context || _passThrough3;
          _suppressOverwrites2 = gsap3.core.suppressOverwrites || _passThrough3;
          _scrollRestoration = _win4.history.scrollRestoration || "auto";
          gsap3.core.globals("ScrollTrigger", ScrollTrigger3);
          if (_body2) {
            _enabled = 1;
            Observer.register(gsap3);
            ScrollTrigger3.isTouch = Observer.isTouch;
            _fixIOSBug = Observer.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent);
            _addListener3(_win4, "wheel", _onScroll3);
            _root2 = [_win4, _doc4, _docEl2, _body2];
            if (gsap3.matchMedia) {
              ScrollTrigger3.matchMedia = function(vars) {
                var mm = gsap3.matchMedia(), p;
                for (p in vars) {
                  mm.add(p, vars[p]);
                }
                return mm;
              };
              gsap3.addEventListener("matchMediaInit", function() {
                return _revertAll();
              });
              gsap3.addEventListener("matchMediaRevert", function() {
                return _revertRecorded();
              });
              gsap3.addEventListener("matchMedia", function() {
                _refreshAll(0, 1);
                _dispatch3("matchMedia");
              });
              gsap3.matchMedia("(orientation: portrait)", function() {
                _setBaseDimensions();
                return _setBaseDimensions;
              });
            } else {
              console.warn("Requires GSAP 3.11.0 or later");
            }
            _setBaseDimensions();
            _addListener3(_doc4, "scroll", _onScroll3);
            var bodyStyle = _body2.style, border2 = bodyStyle.borderTopStyle, AnimationProto = gsap3.core.Animation.prototype, bounds, i;
            AnimationProto.revert || Object.defineProperty(AnimationProto, "revert", {
              value: function value() {
                return this.time(-0.01, true);
              }
            });
            bodyStyle.borderTopStyle = "solid";
            bounds = _getBounds(_body2);
            _vertical.m = Math.round(bounds.top + _vertical.sc()) || 0;
            _horizontal.m = Math.round(bounds.left + _horizontal.sc()) || 0;
            border2 ? bodyStyle.borderTopStyle = border2 : bodyStyle.removeProperty("border-top-style");
            _syncInterval = setInterval(_sync, 250);
            gsap3.delayedCall(0.5, function() {
              return _startup2 = 0;
            });
            _addListener3(_doc4, "touchcancel", _passThrough3);
            _addListener3(_body2, "touchstart", _passThrough3);
            _multiListener(_addListener3, _doc4, "pointerdown,touchstart,mousedown", _pointerDownHandler);
            _multiListener(_addListener3, _doc4, "pointerup,touchend,mouseup", _pointerUpHandler);
            _transformProp2 = gsap3.utils.checkPrefix("transform");
            _stateProps.push(_transformProp2);
            _coreInitted3 = _getTime2();
            _resizeDelay = gsap3.delayedCall(0.2, _refreshAll).pause();
            _autoRefresh = [_doc4, "visibilitychange", function() {
              var w = _win4.innerWidth, h = _win4.innerHeight;
              if (_doc4.hidden) {
                _prevWidth = w;
                _prevHeight = h;
              } else if (_prevWidth !== w || _prevHeight !== h) {
                _onResize();
              }
            }, _doc4, "DOMContentLoaded", _refreshAll, _win4, "load", _refreshAll, _win4, "resize", _onResize];
            _iterateAutoRefresh(_addListener3);
            _triggers.forEach(function(trigger) {
              return trigger.enable(0, 1);
            });
            for (i = 0; i < _scrollers.length; i += 3) {
              _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 1]);
              _wheelListener(_removeListener3, _scrollers[i], _scrollers[i + 2]);
            }
          }
        }
      };
      ScrollTrigger3.config = function config4(vars) {
        "limitCallbacks" in vars && (_limitCallbacks = !!vars.limitCallbacks);
        var ms = vars.syncInterval;
        ms && clearInterval(_syncInterval) || (_syncInterval = ms) && setInterval(_sync, ms);
        "ignoreMobileResize" in vars && (_ignoreMobileResize = ScrollTrigger3.isTouch === 1 && vars.ignoreMobileResize);
        if ("autoRefreshEvents" in vars) {
          _iterateAutoRefresh(_removeListener3) || _iterateAutoRefresh(_addListener3, vars.autoRefreshEvents || "none");
          _ignoreResize = (vars.autoRefreshEvents + "").indexOf("resize") === -1;
        }
      };
      ScrollTrigger3.scrollerProxy = function scrollerProxy(target2, vars) {
        var t = _getTarget(target2), i = _scrollers.indexOf(t), isViewport = _isViewport3(t);
        if (~i) {
          _scrollers.splice(i, isViewport ? 6 : 2);
        }
        if (vars) {
          isViewport ? _proxies.unshift(_win4, vars, _body2, vars, _docEl2, vars) : _proxies.unshift(t, vars);
        }
      };
      ScrollTrigger3.clearMatchMedia = function clearMatchMedia(query) {
        _triggers.forEach(function(t) {
          return t._ctx && t._ctx.query === query && t._ctx.kill(true, true);
        });
      };
      ScrollTrigger3.isInViewport = function isInViewport(element, ratio, horizontal) {
        var bounds = (_isString3(element) ? _getTarget(element) : element).getBoundingClientRect(), offset = bounds[horizontal ? _width : _height] * ratio || 0;
        return horizontal ? bounds.right - offset > 0 && bounds.left + offset < _win4.innerWidth : bounds.bottom - offset > 0 && bounds.top + offset < _win4.innerHeight;
      };
      ScrollTrigger3.positionInViewport = function positionInViewport(element, referencePoint, horizontal) {
        _isString3(element) && (element = _getTarget(element));
        var bounds = element.getBoundingClientRect(), size2 = bounds[horizontal ? _width : _height], offset = referencePoint == null ? size2 / 2 : referencePoint in _keywords ? _keywords[referencePoint] * size2 : ~referencePoint.indexOf("%") ? parseFloat(referencePoint) * size2 / 100 : parseFloat(referencePoint) || 0;
        return horizontal ? (bounds.left + offset) / _win4.innerWidth : (bounds.top + offset) / _win4.innerHeight;
      };
      ScrollTrigger3.killAll = function killAll(allowListeners) {
        _triggers.forEach(function(t) {
          return t.vars.id !== "ScrollSmoother" && t.kill();
        });
        if (allowListeners !== true) {
          var listeners = _listeners2.killAll || [];
          _listeners2 = {};
          listeners.forEach(function(f) {
            return f();
          });
        }
      };
      return ScrollTrigger3;
    }();
    ScrollTrigger2.version = "3.11.3";
    ScrollTrigger2.saveStyles = function(targets) {
      return targets ? _toArray(targets).forEach(function(target2) {
        if (target2 && target2.style) {
          var i = _savedStyles.indexOf(target2);
          i >= 0 && _savedStyles.splice(i, 5);
          _savedStyles.push(target2, target2.style.cssText, target2.getBBox && target2.getAttribute("transform"), gsap3.core.getCache(target2), _context2());
        }
      }) : _savedStyles;
    };
    ScrollTrigger2.revert = function(soft, media2) {
      return _revertAll(!soft, media2);
    };
    ScrollTrigger2.create = function(vars, animation) {
      return new ScrollTrigger2(vars, animation);
    };
    ScrollTrigger2.refresh = function(safe) {
      return safe ? _onResize() : (_coreInitted3 || ScrollTrigger2.register()) && _refreshAll(true);
    };
    ScrollTrigger2.update = _updateAll;
    ScrollTrigger2.clearScrollMemory = _clearScrollMemory;
    ScrollTrigger2.maxScroll = function(element, horizontal) {
      return _maxScroll(element, horizontal ? _horizontal : _vertical);
    };
    ScrollTrigger2.getScrollFunc = function(element, horizontal) {
      return _getScrollFunc(_getTarget(element), horizontal ? _horizontal : _vertical);
    };
    ScrollTrigger2.getById = function(id) {
      return _ids[id];
    };
    ScrollTrigger2.getAll = function() {
      return _triggers.filter(function(t) {
        return t.vars.id !== "ScrollSmoother";
      });
    };
    ScrollTrigger2.isScrolling = function() {
      return !!_lastScrollTime;
    };
    ScrollTrigger2.snapDirectional = _snapDirectional;
    ScrollTrigger2.addEventListener = function(type, callback) {
      var a = _listeners2[type] || (_listeners2[type] = []);
      ~a.indexOf(callback) || a.push(callback);
    };
    ScrollTrigger2.removeEventListener = function(type, callback) {
      var a = _listeners2[type], i = a && a.indexOf(callback);
      i >= 0 && a.splice(i, 1);
    };
    ScrollTrigger2.batch = function(targets, vars) {
      var result = [], varsCopy = {}, interval = vars.interval || 0.016, batchMax = vars.batchMax || 1e9, proxyCallback = function proxyCallback2(type, callback) {
        var elements = [], triggers = [], delay = gsap3.delayedCall(interval, function() {
          callback(elements, triggers);
          elements = [];
          triggers = [];
        }).pause();
        return function(self2) {
          elements.length || delay.restart(true);
          elements.push(self2.trigger);
          triggers.push(self2);
          batchMax <= elements.length && delay.progress(1);
        };
      }, p;
      for (p in vars) {
        varsCopy[p] = p.substr(0, 2) === "on" && _isFunction3(vars[p]) && p !== "onRefreshInit" ? proxyCallback(p, vars[p]) : vars[p];
      }
      if (_isFunction3(batchMax)) {
        batchMax = batchMax();
        _addListener3(ScrollTrigger2, "refresh", function() {
          return batchMax = vars.batchMax();
        });
      }
      _toArray(targets).forEach(function(target2) {
        var config4 = {};
        for (p in varsCopy) {
          config4[p] = varsCopy[p];
        }
        config4.trigger = target2;
        result.push(ScrollTrigger2.create(config4));
      });
      return result;
    };
    _clampScrollAndGetDurationMultiplier = function _clampScrollAndGetDurationMultiplier2(scrollFunc, current, end, max) {
      current > max ? scrollFunc(max) : current < 0 && scrollFunc(0);
      return end > max ? (max - current) / (end - current) : end < 0 ? current / (current - end) : 1;
    };
    _allowNativePanning = function _allowNativePanning2(target2, direction2) {
      if (direction2 === true) {
        target2.style.removeProperty("touch-action");
      } else {
        target2.style.touchAction = direction2 === true ? "auto" : direction2 ? "pan-" + direction2 + (Observer.isTouch ? " pinch-zoom" : "") : "none";
      }
      target2 === _docEl2 && _allowNativePanning2(_body2, direction2);
    };
    _overflow = {
      auto: 1,
      scroll: 1
    };
    _nestedScroll = function _nestedScroll2(_ref5) {
      var event = _ref5.event, target2 = _ref5.target, axis = _ref5.axis;
      var node = (event.changedTouches ? event.changedTouches[0] : event).target, cache = node._gsap || gsap3.core.getCache(node), time = _getTime2(), cs;
      if (!cache._isScrollT || time - cache._isScrollT > 2e3) {
        while (node && node.scrollHeight <= node.clientHeight) {
          node = node.parentNode;
        }
        cache._isScroll = node && !_isViewport3(node) && node !== target2 && (_overflow[(cs = _getComputedStyle(node)).overflowY] || _overflow[cs.overflowX]);
        cache._isScrollT = time;
      }
      if (cache._isScroll || axis === "x") {
        event.stopPropagation();
        event._gsapAllow = true;
      }
    };
    _inputObserver = function _inputObserver2(target2, type, inputs, nested) {
      return Observer.create({
        target: target2,
        capture: true,
        debounce: false,
        lockAxis: true,
        type,
        onWheel: nested = nested && _nestedScroll,
        onPress: nested,
        onDrag: nested,
        onScroll: nested,
        onEnable: function onEnable() {
          return inputs && _addListener3(_doc4, Observer.eventTypes[0], _captureInputs, false, true);
        },
        onDisable: function onDisable() {
          return _removeListener3(_doc4, Observer.eventTypes[0], _captureInputs, true);
        }
      });
    };
    _inputExp = /(input|label|select|textarea)/i;
    _captureInputs = function _captureInputs2(e) {
      var isInput = _inputExp.test(e.target.tagName);
      if (isInput || _inputIsFocused) {
        e._gsapAllow = true;
        _inputIsFocused = isInput;
      }
    };
    _getScrollNormalizer = function _getScrollNormalizer2(vars) {
      _isObject3(vars) || (vars = {});
      vars.preventDefault = vars.isNormalizer = vars.allowClicks = true;
      vars.type || (vars.type = "wheel,touch");
      vars.debounce = !!vars.debounce;
      vars.id = vars.id || "normalizer";
      var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, self2, maxY, target2 = _getTarget(vars.target) || _docEl2, smoother = gsap3.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target2, _vertical), scrollFuncX = _getScrollFunc(target2, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win4.visualViewport ? _win4.visualViewport.scale * _win4.visualViewport.width : _win4.outerWidth) / _win4.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction3(momentum) ? function() {
        return momentum(self2);
      } : function() {
        return momentum || 2.8;
      }, lastRefreshID, skipTouchMove, inputObserver = _inputObserver(target2, vars.type, true, allowNestedScroll), resumeTouchMove = function resumeTouchMove2() {
        return skipTouchMove = false;
      }, scrollClampX = _passThrough3, scrollClampY = _passThrough3, updateClamps = function updateClamps2() {
        maxY = _maxScroll(target2, _vertical);
        scrollClampY = _clamp4(_fixIOSBug ? 1 : 0, maxY);
        normalizeScrollX && (scrollClampX = _clamp4(0, _maxScroll(target2, _horizontal)));
        lastRefreshID = _refreshID;
      }, removeContentOffset = function removeContentOffset2() {
        content._gsap.y = _round3(parseFloat(content._gsap.y) + scrollFuncY.offset) + "px";
        content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(content._gsap.y) + ", 0, 1)";
        scrollFuncY.offset = scrollFuncY.cacheID = 0;
      }, ignoreDrag = function ignoreDrag2() {
        if (skipTouchMove) {
          requestAnimationFrame(resumeTouchMove);
          var offset = _round3(self2.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
          if (content && scroll !== scrollFuncY.v + scrollFuncY.offset) {
            scrollFuncY.offset = scroll - scrollFuncY.v;
            var y = _round3((parseFloat(content && content._gsap.y) || 0) - scrollFuncY.offset);
            content.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + y + ", 0, 1)";
            content._gsap.y = y + "px";
            scrollFuncY.cacheID = _scrollers.cache;
            _updateAll();
          }
          return true;
        }
        scrollFuncY.offset && removeContentOffset();
        skipTouchMove = true;
      }, tween, startScrollX, startScrollY, onStopDelayedCall, onResize = function onResize2() {
        updateClamps();
        if (tween.isActive() && tween.vars.scrollY > maxY) {
          scrollFuncY() > maxY ? tween.progress(1) && scrollFuncY(maxY) : tween.resetTo("scrollY", maxY);
        }
      };
      content && gsap3.set(content, {
        y: "+=0"
      });
      vars.ignoreCheck = function(e) {
        return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self2.isGesturing || e.touches && e.touches.length > 1;
      };
      vars.onPress = function() {
        var prevScale = scale;
        scale = _round3((_win4.visualViewport && _win4.visualViewport.scale || 1) / initialScale);
        tween.pause();
        prevScale !== scale && _allowNativePanning(target2, scale > 1.01 ? true : normalizeScrollX ? false : "x");
        startScrollX = scrollFuncX();
        startScrollY = scrollFuncY();
        updateClamps();
        lastRefreshID = _refreshID;
      };
      vars.onRelease = vars.onGestureStart = function(self3, wasDragging) {
        scrollFuncY.offset && removeContentOffset();
        if (!wasDragging) {
          onStopDelayedCall.restart(true);
        } else {
          _scrollers.cache++;
          var dur = resolveMomentumDuration(), currentScroll, endScroll;
          if (normalizeScrollX) {
            currentScroll = scrollFuncX();
            endScroll = currentScroll + dur * 0.05 * -self3.velocityX / 0.227;
            dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target2, _horizontal));
            tween.vars.scrollX = scrollClampX(endScroll);
          }
          currentScroll = scrollFuncY();
          endScroll = currentScroll + dur * 0.05 * -self3.velocityY / 0.227;
          dur *= _clampScrollAndGetDurationMultiplier(scrollFuncY, currentScroll, endScroll, _maxScroll(target2, _vertical));
          tween.vars.scrollY = scrollClampY(endScroll);
          tween.invalidate().duration(dur).play(0.01);
          if (_fixIOSBug && tween.vars.scrollY >= maxY || currentScroll >= maxY - 1) {
            gsap3.to({}, {
              onUpdate: onResize,
              duration: dur
            });
          }
        }
      };
      vars.onWheel = function() {
        tween._ts && tween.pause();
        if (_getTime2() - wheelRefresh > 1e3) {
          lastRefreshID = 0;
          wheelRefresh = _getTime2();
        }
      };
      vars.onChange = function(self3, dx, dy, xArray, yArray) {
        _refreshID !== lastRefreshID && updateClamps();
        dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self3.startX - self3.x) : scrollFuncX() + dx - xArray[1]));
        if (dy) {
          scrollFuncY.offset && removeContentOffset();
          var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self3.startY - self3.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
          isTouch && y !== yClamped && (startScrollY += yClamped - y);
          scrollFuncY(yClamped);
        }
        (dy || dx) && _updateAll();
      };
      vars.onEnable = function() {
        _allowNativePanning(target2, normalizeScrollX ? false : "x");
        ScrollTrigger2.addEventListener("refresh", onResize);
        _addListener3(_win4, "resize", onResize);
        if (scrollFuncY.smooth) {
          scrollFuncY.target.style.scrollBehavior = "auto";
          scrollFuncY.smooth = scrollFuncX.smooth = false;
        }
        inputObserver.enable();
      };
      vars.onDisable = function() {
        _allowNativePanning(target2, true);
        _removeListener3(_win4, "resize", onResize);
        ScrollTrigger2.removeEventListener("refresh", onResize);
        inputObserver.kill();
      };
      vars.lockAxis = vars.lockAxis !== false;
      self2 = new Observer(vars);
      self2.iOS = _fixIOSBug;
      _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
      _fixIOSBug && gsap3.ticker.add(_passThrough3);
      onStopDelayedCall = self2._dc;
      tween = gsap3.to(self2, {
        ease: "power4",
        paused: true,
        scrollX: normalizeScrollX ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        onComplete: onStopDelayedCall.vars.onComplete
      });
      return self2;
    };
    ScrollTrigger2.sort = function(func) {
      return _triggers.sort(func || function(a, b) {
        return (a.vars.refreshPriority || 0) * -1e6 + a.start - (b.start + (b.vars.refreshPriority || 0) * -1e6);
      });
    };
    ScrollTrigger2.observe = function(vars) {
      return new Observer(vars);
    };
    ScrollTrigger2.normalizeScroll = function(vars) {
      if (typeof vars === "undefined") {
        return _normalizer2;
      }
      if (vars === true && _normalizer2) {
        return _normalizer2.enable();
      }
      if (vars === false) {
        return _normalizer2 && _normalizer2.kill();
      }
      var normalizer = vars instanceof Observer ? vars : _getScrollNormalizer(vars);
      _normalizer2 && _normalizer2.target === normalizer.target && _normalizer2.kill();
      _isViewport3(normalizer.target) && (_normalizer2 = normalizer);
      return normalizer;
    };
    ScrollTrigger2.core = {
      _getVelocityProp,
      _inputObserver,
      _scrollers,
      _proxies,
      bridge: {
        ss: function ss() {
          _lastScrollTime || _dispatch3("scrollStart");
          _lastScrollTime = _getTime2();
        },
        ref: function ref() {
          return _refreshing;
        }
      }
    };
    _getGSAP3() && gsap3.registerPlugin(ScrollTrigger2);
  }
});

// node_modules/gsap/utils/matrix.js
function getGlobalMatrix(element, inverse, adjustGOffset, includeScrollInFixed) {
  if (!element || !element.parentNode || (_doc5 || _setDoc(element)).documentElement === element) {
    return new Matrix2D();
  }
  var zeroScales = _forceNonZeroScale(element), svg = _svgOwner(element), temps = svg ? _svgTemps : _divTemps, container = _placeSiblings(element, adjustGOffset), b1 = temps[0].getBoundingClientRect(), b2 = temps[1].getBoundingClientRect(), b3 = temps[2].getBoundingClientRect(), parent = container.parentNode, isFixed = !includeScrollInFixed && _isFixed(element), m = new Matrix2D((b2.left - b1.left) / 100, (b2.top - b1.top) / 100, (b3.left - b1.left) / 100, (b3.top - b1.top) / 100, b1.left + (isFixed ? 0 : _getDocScrollLeft()), b1.top + (isFixed ? 0 : _getDocScrollTop()));
  parent.removeChild(container);
  if (zeroScales) {
    b1 = zeroScales.length;
    while (b1--) {
      b2 = zeroScales[b1];
      b2.scaleX = b2.scaleY = 0;
      b2.renderTransform(1, b2);
    }
  }
  return inverse ? m.inverse() : m;
}
var _doc5, _win5, _docElement2, _body3, _divContainer, _svgContainer, _identityMatrix, _gEl, _transformProp3, _transformOriginProp2, _hasOffsetBug, _setDoc, _forceNonZeroScale, _svgTemps, _divTemps, _getDocScrollTop, _getDocScrollLeft, _svgOwner, _isFixed, _createSibling, _consolidate, _getCTM, _placeSiblings, _setMatrix, Matrix2D;
var init_matrix = __esm({
  "node_modules/gsap/utils/matrix.js"() {
    _transformProp3 = "transform";
    _transformOriginProp2 = _transformProp3 + "Origin";
    _setDoc = function _setDoc2(element) {
      var doc = element.ownerDocument || element;
      if (!(_transformProp3 in element.style) && "msTransform" in element.style) {
        _transformProp3 = "msTransform";
        _transformOriginProp2 = _transformProp3 + "Origin";
      }
      while (doc.parentNode && (doc = doc.parentNode)) {
      }
      _win5 = window;
      _identityMatrix = new Matrix2D();
      if (doc) {
        _doc5 = doc;
        _docElement2 = doc.documentElement;
        _body3 = doc.body;
        _gEl = _doc5.createElementNS("http://www.w3.org/2000/svg", "g");
        _gEl.style.transform = "none";
        var d1 = doc.createElement("div"), d2 = doc.createElement("div");
        _body3.appendChild(d1);
        d1.appendChild(d2);
        d1.style.position = "static";
        d1.style[_transformProp3] = "translate3d(0,0,1px)";
        _hasOffsetBug = d2.offsetParent !== d1;
        _body3.removeChild(d1);
      }
      return doc;
    };
    _forceNonZeroScale = function _forceNonZeroScale2(e) {
      var a, cache;
      while (e && e !== _body3) {
        cache = e._gsap;
        cache && cache.uncache && cache.get(e, "x");
        if (cache && !cache.scaleX && !cache.scaleY && cache.renderTransform) {
          cache.scaleX = cache.scaleY = 1e-4;
          cache.renderTransform(1, cache);
          a ? a.push(cache) : a = [cache];
        }
        e = e.parentNode;
      }
      return a;
    };
    _svgTemps = [];
    _divTemps = [];
    _getDocScrollTop = function _getDocScrollTop2() {
      return _win5.pageYOffset || _doc5.scrollTop || _docElement2.scrollTop || _body3.scrollTop || 0;
    };
    _getDocScrollLeft = function _getDocScrollLeft2() {
      return _win5.pageXOffset || _doc5.scrollLeft || _docElement2.scrollLeft || _body3.scrollLeft || 0;
    };
    _svgOwner = function _svgOwner2(element) {
      return element.ownerSVGElement || ((element.tagName + "").toLowerCase() === "svg" ? element : null);
    };
    _isFixed = function _isFixed2(element) {
      if (_win5.getComputedStyle(element).position === "fixed") {
        return true;
      }
      element = element.parentNode;
      if (element && element.nodeType === 1) {
        return _isFixed2(element);
      }
    };
    _createSibling = function _createSibling2(element, i) {
      if (element.parentNode && (_doc5 || _setDoc(element))) {
        var svg = _svgOwner(element), ns = svg ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", type = svg ? i ? "rect" : "g" : "div", x = i !== 2 ? 0 : 100, y = i === 3 ? 100 : 0, css = "position:absolute;display:block;pointer-events:none;margin:0;padding:0;", e = _doc5.createElementNS ? _doc5.createElementNS(ns.replace(/^https/, "http"), type) : _doc5.createElement(type);
        if (i) {
          if (!svg) {
            if (!_divContainer) {
              _divContainer = _createSibling2(element);
              _divContainer.style.cssText = css;
            }
            e.style.cssText = css + "width:0.1px;height:0.1px;top:" + y + "px;left:" + x + "px";
            _divContainer.appendChild(e);
          } else {
            _svgContainer || (_svgContainer = _createSibling2(element));
            e.setAttribute("width", 0.01);
            e.setAttribute("height", 0.01);
            e.setAttribute("transform", "translate(" + x + "," + y + ")");
            _svgContainer.appendChild(e);
          }
        }
        return e;
      }
      throw "Need document and parent.";
    };
    _consolidate = function _consolidate2(m) {
      var c = new Matrix2D(), i = 0;
      for (; i < m.numberOfItems; i++) {
        c.multiply(m.getItem(i).matrix);
      }
      return c;
    };
    _getCTM = function _getCTM2(svg) {
      var m = svg.getCTM(), transform;
      if (!m) {
        transform = svg.style[_transformProp3];
        svg.style[_transformProp3] = "none";
        svg.appendChild(_gEl);
        m = _gEl.getCTM();
        svg.removeChild(_gEl);
        transform ? svg.style[_transformProp3] = transform : svg.style.removeProperty(_transformProp3.replace(/([A-Z])/g, "-$1").toLowerCase());
      }
      return m || _identityMatrix.clone();
    };
    _placeSiblings = function _placeSiblings2(element, adjustGOffset) {
      var svg = _svgOwner(element), isRootSVG = element === svg, siblings = svg ? _svgTemps : _divTemps, parent = element.parentNode, container, m, b, x, y, cs;
      if (element === _win5) {
        return element;
      }
      siblings.length || siblings.push(_createSibling(element, 1), _createSibling(element, 2), _createSibling(element, 3));
      container = svg ? _svgContainer : _divContainer;
      if (svg) {
        if (isRootSVG) {
          b = _getCTM(element);
          x = -b.e / b.a;
          y = -b.f / b.d;
          m = _identityMatrix;
        } else if (element.getBBox) {
          b = element.getBBox();
          m = element.transform ? element.transform.baseVal : {};
          m = !m.numberOfItems ? _identityMatrix : m.numberOfItems > 1 ? _consolidate(m) : m.getItem(0).matrix;
          x = m.a * b.x + m.c * b.y;
          y = m.b * b.x + m.d * b.y;
        } else {
          m = new Matrix2D();
          x = y = 0;
        }
        if (adjustGOffset && element.tagName.toLowerCase() === "g") {
          x = y = 0;
        }
        (isRootSVG ? svg : parent).appendChild(container);
        container.setAttribute("transform", "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + (m.e + x) + "," + (m.f + y) + ")");
      } else {
        x = y = 0;
        if (_hasOffsetBug) {
          m = element.offsetParent;
          b = element;
          while (b && (b = b.parentNode) && b !== m && b.parentNode) {
            if ((_win5.getComputedStyle(b)[_transformProp3] + "").length > 4) {
              x = b.offsetLeft;
              y = b.offsetTop;
              b = 0;
            }
          }
        }
        cs = _win5.getComputedStyle(element);
        if (cs.position !== "absolute" && cs.position !== "fixed") {
          m = element.offsetParent;
          while (parent && parent !== m) {
            x += parent.scrollLeft || 0;
            y += parent.scrollTop || 0;
            parent = parent.parentNode;
          }
        }
        b = container.style;
        b.top = element.offsetTop - y + "px";
        b.left = element.offsetLeft - x + "px";
        b[_transformProp3] = cs[_transformProp3];
        b[_transformOriginProp2] = cs[_transformOriginProp2];
        b.position = cs.position === "fixed" ? "fixed" : "absolute";
        element.parentNode.appendChild(container);
      }
      return container;
    };
    _setMatrix = function _setMatrix2(m, a, b, c, d, e, f) {
      m.a = a;
      m.b = b;
      m.c = c;
      m.d = d;
      m.e = e;
      m.f = f;
      return m;
    };
    Matrix2D = /* @__PURE__ */ function() {
      function Matrix2D2(a, b, c, d, e, f) {
        if (a === void 0) {
          a = 1;
        }
        if (b === void 0) {
          b = 0;
        }
        if (c === void 0) {
          c = 0;
        }
        if (d === void 0) {
          d = 1;
        }
        if (e === void 0) {
          e = 0;
        }
        if (f === void 0) {
          f = 0;
        }
        _setMatrix(this, a, b, c, d, e, f);
      }
      var _proto = Matrix2D2.prototype;
      _proto.inverse = function inverse() {
        var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, determinant = a * d - b * c || 1e-10;
        return _setMatrix(this, d / determinant, -b / determinant, -c / determinant, a / determinant, (c * f - d * e) / determinant, -(a * f - b * e) / determinant);
      };
      _proto.multiply = function multiply(matrix) {
        var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f, a2 = matrix.a, b2 = matrix.c, c2 = matrix.b, d2 = matrix.d, e2 = matrix.e, f2 = matrix.f;
        return _setMatrix(this, a2 * a + c2 * c, a2 * b + c2 * d, b2 * a + d2 * c, b2 * b + d2 * d, e + e2 * a + f2 * c, f + e2 * b + f2 * d);
      };
      _proto.clone = function clone() {
        return new Matrix2D2(this.a, this.b, this.c, this.d, this.e, this.f);
      };
      _proto.equals = function equals(matrix) {
        var a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
        return a === matrix.a && b === matrix.b && c === matrix.c && d === matrix.d && e === matrix.e && f === matrix.f;
      };
      _proto.apply = function apply(point, decoratee) {
        if (decoratee === void 0) {
          decoratee = {};
        }
        var x = point.x, y = point.y, a = this.a, b = this.b, c = this.c, d = this.d, e = this.e, f = this.f;
        decoratee.x = x * a + y * c + e || 0;
        decoratee.y = x * b + y * d + f || 0;
        return decoratee;
      };
      return Matrix2D2;
    }();
  }
});

// node_modules/gsap/Draggable.js
var Draggable_exports = {};
__export(Draggable_exports, {
  Draggable: () => Draggable,
  default: () => Draggable
});
function _assertThisInitialized2(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _inheritsLoose2(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var gsap4, _win6, _doc6, _docElement3, _body4, _tempDiv2, _placeholderDiv, _coreInitted4, _checkPrefix, _toArray2, _supportsPassive, _isTouchDevice, _touchEventLookup, _isMultiTouching, _isAndroid, InertiaPlugin, _defaultCursor, _supportsPointer, _dragCount, _windowExists7, _getGSAP5, _isFunction5, _isObject5, _isUndefined3, _emptyFunc3, _transformProp4, _transformOriginProp3, _round5, _isArray2, _createElement3, _RAD2DEG2, _bigNum3, _identityMatrix2, _getTime3, _renderQueue, _lookup, _lookupCount, _clickableTagExp, _lastDragTime, _temp1, _windowProxy, _copy, _extend, _setTouchActionForAllDescendants, _renderQueueTick, _addToRenderQueue, _renderQueueTimeout, _removeFromRenderQueue, _setDefaults5, _addListener5, _removeListener5, _preventDefault, _hasTouchID, _onMultiTouchDocumentEnd, _onMultiTouchDocument, _getDocScrollTop3, _getDocScrollLeft3, _addScrollListener, _removeScrollListener, _isRoot, _getMaxScroll, _recordMaxScrolls, _setStyle, _getComputedStyle3, _tempRect, _parseRect, _dispatchEvent, _getBounds3, _point1, _getElementBounds, _parseInertia, _isClickable, _setSelectable, _isFixed3, _supports3D2, _addPaddingBR, ScrollProxy, _initCore5, EventDispatcher, Draggable;
var init_Draggable = __esm({
  "node_modules/gsap/Draggable.js"() {
    init_matrix();
    _dragCount = 0;
    _windowExists7 = function _windowExists8() {
      return typeof window !== "undefined";
    };
    _getGSAP5 = function _getGSAP6() {
      return gsap4 || _windowExists7() && (gsap4 = window.gsap) && gsap4.registerPlugin && gsap4;
    };
    _isFunction5 = function _isFunction6(value) {
      return typeof value === "function";
    };
    _isObject5 = function _isObject6(value) {
      return typeof value === "object";
    };
    _isUndefined3 = function _isUndefined4(value) {
      return typeof value === "undefined";
    };
    _emptyFunc3 = function _emptyFunc4() {
      return false;
    };
    _transformProp4 = "transform";
    _transformOriginProp3 = "transformOrigin";
    _round5 = function _round6(value) {
      return Math.round(value * 1e4) / 1e4;
    };
    _isArray2 = Array.isArray;
    _createElement3 = function _createElement4(type, ns) {
      var e = _doc6.createElementNS ? _doc6.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc6.createElement(type);
      return e.style ? e : _doc6.createElement(type);
    };
    _RAD2DEG2 = 180 / Math.PI;
    _bigNum3 = 1e20;
    _identityMatrix2 = new Matrix2D();
    _getTime3 = Date.now || function() {
      return new Date().getTime();
    };
    _renderQueue = [];
    _lookup = {};
    _lookupCount = 0;
    _clickableTagExp = /^(?:a|input|textarea|button|select)$/i;
    _lastDragTime = 0;
    _temp1 = {};
    _windowProxy = {};
    _copy = function _copy2(obj, factor) {
      var copy = {}, p;
      for (p in obj) {
        copy[p] = factor ? obj[p] * factor : obj[p];
      }
      return copy;
    };
    _extend = function _extend2(obj, defaults2) {
      for (var p in defaults2) {
        if (!(p in obj)) {
          obj[p] = defaults2[p];
        }
      }
      return obj;
    };
    _setTouchActionForAllDescendants = function _setTouchActionForAllDescendants2(elements, value) {
      var i = elements.length, children;
      while (i--) {
        value ? elements[i].style.touchAction = value : elements[i].style.removeProperty("touch-action");
        children = elements[i].children;
        children && children.length && _setTouchActionForAllDescendants2(children, value);
      }
    };
    _renderQueueTick = function _renderQueueTick2() {
      return _renderQueue.forEach(function(func) {
        return func();
      });
    };
    _addToRenderQueue = function _addToRenderQueue2(func) {
      _renderQueue.push(func);
      if (_renderQueue.length === 1) {
        gsap4.ticker.add(_renderQueueTick);
      }
    };
    _renderQueueTimeout = function _renderQueueTimeout2() {
      return !_renderQueue.length && gsap4.ticker.remove(_renderQueueTick);
    };
    _removeFromRenderQueue = function _removeFromRenderQueue2(func) {
      var i = _renderQueue.length;
      while (i--) {
        if (_renderQueue[i] === func) {
          _renderQueue.splice(i, 1);
        }
      }
      gsap4.to(_renderQueueTimeout, {
        overwrite: true,
        delay: 15,
        duration: 0,
        onComplete: _renderQueueTimeout,
        data: "_draggable"
      });
    };
    _setDefaults5 = function _setDefaults6(obj, defaults2) {
      for (var p in defaults2) {
        if (!(p in obj)) {
          obj[p] = defaults2[p];
        }
      }
      return obj;
    };
    _addListener5 = function _addListener6(element, type, func, capture) {
      if (element.addEventListener) {
        var touchType = _touchEventLookup[type];
        capture = capture || (_supportsPassive ? {
          passive: false
        } : null);
        element.addEventListener(touchType || type, func, capture);
        touchType && type !== touchType && element.addEventListener(type, func, capture);
      }
    };
    _removeListener5 = function _removeListener6(element, type, func) {
      if (element.removeEventListener) {
        var touchType = _touchEventLookup[type];
        element.removeEventListener(touchType || type, func);
        touchType && type !== touchType && element.removeEventListener(type, func);
      }
    };
    _preventDefault = function _preventDefault2(event) {
      event.preventDefault && event.preventDefault();
      event.preventManipulation && event.preventManipulation();
    };
    _hasTouchID = function _hasTouchID2(list, ID) {
      var i = list.length;
      while (i--) {
        if (list[i].identifier === ID) {
          return true;
        }
      }
    };
    _onMultiTouchDocumentEnd = function _onMultiTouchDocumentEnd2(event) {
      _isMultiTouching = event.touches && _dragCount < event.touches.length;
      _removeListener5(event.target, "touchend", _onMultiTouchDocumentEnd2);
    };
    _onMultiTouchDocument = function _onMultiTouchDocument2(event) {
      _isMultiTouching = event.touches && _dragCount < event.touches.length;
      _addListener5(event.target, "touchend", _onMultiTouchDocumentEnd);
    };
    _getDocScrollTop3 = function _getDocScrollTop4(doc) {
      return _win6.pageYOffset || doc.scrollTop || doc.documentElement.scrollTop || doc.body.scrollTop || 0;
    };
    _getDocScrollLeft3 = function _getDocScrollLeft4(doc) {
      return _win6.pageXOffset || doc.scrollLeft || doc.documentElement.scrollLeft || doc.body.scrollLeft || 0;
    };
    _addScrollListener = function _addScrollListener2(e, callback) {
      _addListener5(e, "scroll", callback);
      if (!_isRoot(e.parentNode)) {
        _addScrollListener2(e.parentNode, callback);
      }
    };
    _removeScrollListener = function _removeScrollListener2(e, callback) {
      _removeListener5(e, "scroll", callback);
      if (!_isRoot(e.parentNode)) {
        _removeScrollListener2(e.parentNode, callback);
      }
    };
    _isRoot = function _isRoot2(e) {
      return !!(!e || e === _docElement3 || e.nodeType === 9 || e === _doc6.body || e === _win6 || !e.nodeType || !e.parentNode);
    };
    _getMaxScroll = function _getMaxScroll2(element, axis) {
      var dim = axis === "x" ? "Width" : "Height", scroll = "scroll" + dim, client = "client" + dim;
      return Math.max(0, _isRoot(element) ? Math.max(_docElement3[scroll], _body4[scroll]) - (_win6["inner" + dim] || _docElement3[client] || _body4[client]) : element[scroll] - element[client]);
    };
    _recordMaxScrolls = function _recordMaxScrolls2(e, skipCurrent) {
      var x = _getMaxScroll(e, "x"), y = _getMaxScroll(e, "y");
      if (_isRoot(e)) {
        e = _windowProxy;
      } else {
        _recordMaxScrolls2(e.parentNode, skipCurrent);
      }
      e._gsMaxScrollX = x;
      e._gsMaxScrollY = y;
      if (!skipCurrent) {
        e._gsScrollX = e.scrollLeft || 0;
        e._gsScrollY = e.scrollTop || 0;
      }
    };
    _setStyle = function _setStyle2(element, property, value) {
      var style = element.style;
      if (!style) {
        return;
      }
      if (_isUndefined3(style[property])) {
        property = _checkPrefix(property, element) || property;
      }
      if (value == null) {
        style.removeProperty && style.removeProperty(property.replace(/([A-Z])/g, "-$1").toLowerCase());
      } else {
        style[property] = value;
      }
    };
    _getComputedStyle3 = function _getComputedStyle4(element) {
      return _win6.getComputedStyle(element instanceof Element ? element : element.host || (element.parentNode || {}).host || element);
    };
    _tempRect = {};
    _parseRect = function _parseRect2(e) {
      if (e === _win6) {
        _tempRect.left = _tempRect.top = 0;
        _tempRect.width = _tempRect.right = _docElement3.clientWidth || e.innerWidth || _body4.clientWidth || 0;
        _tempRect.height = _tempRect.bottom = (e.innerHeight || 0) - 20 < _docElement3.clientHeight ? _docElement3.clientHeight : e.innerHeight || _body4.clientHeight || 0;
        return _tempRect;
      }
      var doc = e.ownerDocument || _doc6, r = !_isUndefined3(e.pageX) ? {
        left: e.pageX - _getDocScrollLeft3(doc),
        top: e.pageY - _getDocScrollTop3(doc),
        right: e.pageX - _getDocScrollLeft3(doc) + 1,
        bottom: e.pageY - _getDocScrollTop3(doc) + 1
      } : !e.nodeType && !_isUndefined3(e.left) && !_isUndefined3(e.top) ? e : _toArray2(e)[0].getBoundingClientRect();
      if (_isUndefined3(r.right) && !_isUndefined3(r.width)) {
        r.right = r.left + r.width;
        r.bottom = r.top + r.height;
      } else if (_isUndefined3(r.width)) {
        r = {
          width: r.right - r.left,
          height: r.bottom - r.top,
          right: r.right,
          left: r.left,
          bottom: r.bottom,
          top: r.top
        };
      }
      return r;
    };
    _dispatchEvent = function _dispatchEvent2(target2, type, callbackName) {
      var vars = target2.vars, callback = vars[callbackName], listeners = target2._listeners[type], result;
      if (_isFunction5(callback)) {
        result = callback.apply(vars.callbackScope || target2, vars[callbackName + "Params"] || [target2.pointerEvent]);
      }
      if (listeners && target2.dispatchEvent(type) === false) {
        result = false;
      }
      return result;
    };
    _getBounds3 = function _getBounds4(target2, context3) {
      var e = _toArray2(target2)[0], top, left, offset;
      if (!e.nodeType && e !== _win6) {
        if (!_isUndefined3(target2.left)) {
          offset = {
            x: 0,
            y: 0
          };
          return {
            left: target2.left - offset.x,
            top: target2.top - offset.y,
            width: target2.width,
            height: target2.height
          };
        }
        left = target2.min || target2.minX || target2.minRotation || 0;
        top = target2.min || target2.minY || 0;
        return {
          left,
          top,
          width: (target2.max || target2.maxX || target2.maxRotation || 0) - left,
          height: (target2.max || target2.maxY || 0) - top
        };
      }
      return _getElementBounds(e, context3);
    };
    _point1 = {};
    _getElementBounds = function _getElementBounds2(element, context3) {
      context3 = _toArray2(context3)[0];
      var isSVG = element.getBBox && element.ownerSVGElement, doc = element.ownerDocument || _doc6, left, right, top, bottom, matrix, p1, p2, p3, p4, bbox, width, height, cs;
      if (element === _win6) {
        top = _getDocScrollTop3(doc);
        left = _getDocScrollLeft3(doc);
        right = left + (doc.documentElement.clientWidth || element.innerWidth || doc.body.clientWidth || 0);
        bottom = top + ((element.innerHeight || 0) - 20 < doc.documentElement.clientHeight ? doc.documentElement.clientHeight : element.innerHeight || doc.body.clientHeight || 0);
      } else if (context3 === _win6 || _isUndefined3(context3)) {
        return element.getBoundingClientRect();
      } else {
        left = top = 0;
        if (isSVG) {
          bbox = element.getBBox();
          width = bbox.width;
          height = bbox.height;
        } else {
          if (element.viewBox && (bbox = element.viewBox.baseVal)) {
            left = bbox.x || 0;
            top = bbox.y || 0;
            width = bbox.width;
            height = bbox.height;
          }
          if (!width) {
            cs = _getComputedStyle3(element);
            bbox = cs.boxSizing === "border-box";
            width = (parseFloat(cs.width) || element.clientWidth || 0) + (bbox ? 0 : parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth));
            height = (parseFloat(cs.height) || element.clientHeight || 0) + (bbox ? 0 : parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth));
          }
        }
        right = width;
        bottom = height;
      }
      if (element === context3) {
        return {
          left,
          top,
          width: right - left,
          height: bottom - top
        };
      }
      matrix = getGlobalMatrix(context3, true).multiply(getGlobalMatrix(element));
      p1 = matrix.apply({
        x: left,
        y: top
      });
      p2 = matrix.apply({
        x: right,
        y: top
      });
      p3 = matrix.apply({
        x: right,
        y: bottom
      });
      p4 = matrix.apply({
        x: left,
        y: bottom
      });
      left = Math.min(p1.x, p2.x, p3.x, p4.x);
      top = Math.min(p1.y, p2.y, p3.y, p4.y);
      return {
        left,
        top,
        width: Math.max(p1.x, p2.x, p3.x, p4.x) - left,
        height: Math.max(p1.y, p2.y, p3.y, p4.y) - top
      };
    };
    _parseInertia = function _parseInertia2(draggable, snap3, max, min, factor, forceZeroVelocity) {
      var vars = {}, a, i, l;
      if (snap3) {
        if (factor !== 1 && snap3 instanceof Array) {
          vars.end = a = [];
          l = snap3.length;
          if (_isObject5(snap3[0])) {
            for (i = 0; i < l; i++) {
              a[i] = _copy(snap3[i], factor);
            }
          } else {
            for (i = 0; i < l; i++) {
              a[i] = snap3[i] * factor;
            }
          }
          max += 1.1;
          min -= 1.1;
        } else if (_isFunction5(snap3)) {
          vars.end = function(value) {
            var result = snap3.call(draggable, value), copy, p;
            if (factor !== 1) {
              if (_isObject5(result)) {
                copy = {};
                for (p in result) {
                  copy[p] = result[p] * factor;
                }
                result = copy;
              } else {
                result *= factor;
              }
            }
            return result;
          };
        } else {
          vars.end = snap3;
        }
      }
      if (max || max === 0) {
        vars.max = max;
      }
      if (min || min === 0) {
        vars.min = min;
      }
      if (forceZeroVelocity) {
        vars.velocity = 0;
      }
      return vars;
    };
    _isClickable = function _isClickable2(element) {
      var data;
      return !element || !element.getAttribute || element === _body4 ? false : (data = element.getAttribute("data-clickable")) === "true" || data !== "false" && (element.onclick || _clickableTagExp.test(element.nodeName + "") || element.getAttribute("contentEditable") === "true") ? true : _isClickable2(element.parentNode);
    };
    _setSelectable = function _setSelectable2(elements, selectable) {
      var i = elements.length, e;
      while (i--) {
        e = elements[i];
        e.ondragstart = e.onselectstart = selectable ? null : _emptyFunc3;
        gsap4.set(e, {
          lazy: true,
          userSelect: selectable ? "text" : "none"
        });
      }
    };
    _isFixed3 = function _isFixed4(element) {
      if (_getComputedStyle3(element).position === "fixed") {
        return true;
      }
      element = element.parentNode;
      if (element && element.nodeType === 1) {
        return _isFixed4(element);
      }
    };
    ScrollProxy = function ScrollProxy2(element, vars) {
      element = gsap4.utils.toArray(element)[0];
      vars = vars || {};
      var content = document.createElement("div"), style = content.style, node = element.firstChild, offsetTop = 0, offsetLeft = 0, prevTop = element.scrollTop, prevLeft = element.scrollLeft, scrollWidth = element.scrollWidth, scrollHeight = element.scrollHeight, extraPadRight = 0, maxLeft = 0, maxTop = 0, elementWidth, elementHeight, contentHeight, nextNode, transformStart, transformEnd;
      if (_supports3D2 && vars.force3D !== false) {
        transformStart = "translate3d(";
        transformEnd = "px,0px)";
      } else if (_transformProp4) {
        transformStart = "translate(";
        transformEnd = "px)";
      }
      this.scrollTop = function(value, force) {
        if (!arguments.length) {
          return -this.top();
        }
        this.top(-value, force);
      };
      this.scrollLeft = function(value, force) {
        if (!arguments.length) {
          return -this.left();
        }
        this.left(-value, force);
      };
      this.left = function(value, force) {
        if (!arguments.length) {
          return -(element.scrollLeft + offsetLeft);
        }
        var dif = element.scrollLeft - prevLeft, oldOffset = offsetLeft;
        if ((dif > 2 || dif < -2) && !force) {
          prevLeft = element.scrollLeft;
          gsap4.killTweensOf(this, {
            left: 1,
            scrollLeft: 1
          });
          this.left(-prevLeft);
          if (vars.onKill) {
            vars.onKill();
          }
          return;
        }
        value = -value;
        if (value < 0) {
          offsetLeft = value - 0.5 | 0;
          value = 0;
        } else if (value > maxLeft) {
          offsetLeft = value - maxLeft | 0;
          value = maxLeft;
        } else {
          offsetLeft = 0;
        }
        if (offsetLeft || oldOffset) {
          if (!this._skip) {
            style[_transformProp4] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
          }
          if (offsetLeft + extraPadRight >= 0) {
            style.paddingRight = offsetLeft + extraPadRight + "px";
          }
        }
        element.scrollLeft = value | 0;
        prevLeft = element.scrollLeft;
      };
      this.top = function(value, force) {
        if (!arguments.length) {
          return -(element.scrollTop + offsetTop);
        }
        var dif = element.scrollTop - prevTop, oldOffset = offsetTop;
        if ((dif > 2 || dif < -2) && !force) {
          prevTop = element.scrollTop;
          gsap4.killTweensOf(this, {
            top: 1,
            scrollTop: 1
          });
          this.top(-prevTop);
          if (vars.onKill) {
            vars.onKill();
          }
          return;
        }
        value = -value;
        if (value < 0) {
          offsetTop = value - 0.5 | 0;
          value = 0;
        } else if (value > maxTop) {
          offsetTop = value - maxTop | 0;
          value = maxTop;
        } else {
          offsetTop = 0;
        }
        if (offsetTop || oldOffset) {
          if (!this._skip) {
            style[_transformProp4] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
          }
        }
        element.scrollTop = value | 0;
        prevTop = element.scrollTop;
      };
      this.maxScrollTop = function() {
        return maxTop;
      };
      this.maxScrollLeft = function() {
        return maxLeft;
      };
      this.disable = function() {
        node = content.firstChild;
        while (node) {
          nextNode = node.nextSibling;
          element.appendChild(node);
          node = nextNode;
        }
        if (element === content.parentNode) {
          element.removeChild(content);
        }
      };
      this.enable = function() {
        node = element.firstChild;
        if (node === content) {
          return;
        }
        while (node) {
          nextNode = node.nextSibling;
          content.appendChild(node);
          node = nextNode;
        }
        element.appendChild(content);
        this.calibrate();
      };
      this.calibrate = function(force) {
        var widthMatches = element.clientWidth === elementWidth, cs, x, y;
        prevTop = element.scrollTop;
        prevLeft = element.scrollLeft;
        if (widthMatches && element.clientHeight === elementHeight && content.offsetHeight === contentHeight && scrollWidth === element.scrollWidth && scrollHeight === element.scrollHeight && !force) {
          return;
        }
        if (offsetTop || offsetLeft) {
          x = this.left();
          y = this.top();
          this.left(-element.scrollLeft);
          this.top(-element.scrollTop);
        }
        cs = _getComputedStyle3(element);
        if (!widthMatches || force) {
          style.display = "block";
          style.width = "auto";
          style.paddingRight = "0px";
          extraPadRight = Math.max(0, element.scrollWidth - element.clientWidth);
          if (extraPadRight) {
            extraPadRight += parseFloat(cs.paddingLeft) + (_addPaddingBR ? parseFloat(cs.paddingRight) : 0);
          }
        }
        style.display = "inline-block";
        style.position = "relative";
        style.overflow = "visible";
        style.verticalAlign = "top";
        style.boxSizing = "content-box";
        style.width = "100%";
        style.paddingRight = extraPadRight + "px";
        if (_addPaddingBR) {
          style.paddingBottom = cs.paddingBottom;
        }
        elementWidth = element.clientWidth;
        elementHeight = element.clientHeight;
        scrollWidth = element.scrollWidth;
        scrollHeight = element.scrollHeight;
        maxLeft = element.scrollWidth - elementWidth;
        maxTop = element.scrollHeight - elementHeight;
        contentHeight = content.offsetHeight;
        style.display = "block";
        if (x || y) {
          this.left(x);
          this.top(y);
        }
      };
      this.content = content;
      this.element = element;
      this._skip = false;
      this.enable();
    };
    _initCore5 = function _initCore6(required) {
      if (_windowExists7() && document.body) {
        var nav = window && window.navigator;
        _win6 = window;
        _doc6 = document;
        _docElement3 = _doc6.documentElement;
        _body4 = _doc6.body;
        _tempDiv2 = _createElement3("div");
        _supportsPointer = !!window.PointerEvent;
        _placeholderDiv = _createElement3("div");
        _placeholderDiv.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab";
        _defaultCursor = _placeholderDiv.style.cursor === "grab" ? "grab" : "move";
        _isAndroid = nav && nav.userAgent.toLowerCase().indexOf("android") !== -1;
        _isTouchDevice = "ontouchstart" in _docElement3 && "orientation" in _win6 || nav && (nav.MaxTouchPoints > 0 || nav.msMaxTouchPoints > 0);
        _addPaddingBR = function() {
          var div = _createElement3("div"), child = _createElement3("div"), childStyle = child.style, parent = _body4, val;
          childStyle.display = "inline-block";
          childStyle.position = "relative";
          div.style.cssText = "width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden";
          div.appendChild(child);
          parent.appendChild(div);
          val = child.offsetHeight + 18 > div.scrollHeight;
          parent.removeChild(div);
          return val;
        }();
        _touchEventLookup = function(types) {
          var standard = types.split(","), converted = ("onpointerdown" in _tempDiv2 ? "pointerdown,pointermove,pointerup,pointercancel" : "onmspointerdown" in _tempDiv2 ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : types).split(","), obj = {}, i = 4;
          while (--i > -1) {
            obj[standard[i]] = converted[i];
            obj[converted[i]] = standard[i];
          }
          try {
            _docElement3.addEventListener("test", null, Object.defineProperty({}, "passive", {
              get: function get() {
                _supportsPassive = 1;
              }
            }));
          } catch (e) {
          }
          return obj;
        }("touchstart,touchmove,touchend,touchcancel");
        _addListener5(_doc6, "touchcancel", _emptyFunc3);
        _addListener5(_win6, "touchmove", _emptyFunc3);
        _body4 && _body4.addEventListener("touchstart", _emptyFunc3);
        _addListener5(_doc6, "contextmenu", function() {
          for (var p in _lookup) {
            if (_lookup[p].isPressed) {
              _lookup[p].endDrag();
            }
          }
        });
        gsap4 = _coreInitted4 = _getGSAP5();
      }
      if (gsap4) {
        InertiaPlugin = gsap4.plugins.inertia;
        _checkPrefix = gsap4.utils.checkPrefix;
        _transformProp4 = _checkPrefix(_transformProp4);
        _transformOriginProp3 = _checkPrefix(_transformOriginProp3);
        _toArray2 = gsap4.utils.toArray;
        _supports3D2 = !!_checkPrefix("perspective");
      } else if (required) {
        console.warn("Please gsap.registerPlugin(Draggable)");
      }
    };
    EventDispatcher = /* @__PURE__ */ function() {
      function EventDispatcher2(target2) {
        this._listeners = {};
        this.target = target2 || this;
      }
      var _proto = EventDispatcher2.prototype;
      _proto.addEventListener = function addEventListener2(type, callback) {
        var list = this._listeners[type] || (this._listeners[type] = []);
        if (!~list.indexOf(callback)) {
          list.push(callback);
        }
      };
      _proto.removeEventListener = function removeEventListener2(type, callback) {
        var list = this._listeners[type], i = list && list.indexOf(callback);
        i >= 0 && list.splice(i, 1);
      };
      _proto.dispatchEvent = function dispatchEvent(type) {
        var _this = this;
        var result;
        (this._listeners[type] || []).forEach(function(callback) {
          return callback.call(_this, {
            type,
            target: _this.target
          }) === false && (result = false);
        });
        return result;
      };
      return EventDispatcher2;
    }();
    Draggable = /* @__PURE__ */ function(_EventDispatcher) {
      _inheritsLoose2(Draggable2, _EventDispatcher);
      function Draggable2(target2, vars) {
        var _this2;
        _this2 = _EventDispatcher.call(this) || this;
        _coreInitted4 || _initCore5(1);
        target2 = _toArray2(target2)[0];
        if (!InertiaPlugin) {
          InertiaPlugin = gsap4.plugins.inertia;
        }
        _this2.vars = vars = _copy(vars || {});
        _this2.target = target2;
        _this2.x = _this2.y = _this2.rotation = 0;
        _this2.dragResistance = parseFloat(vars.dragResistance) || 0;
        _this2.edgeResistance = isNaN(vars.edgeResistance) ? 1 : parseFloat(vars.edgeResistance) || 0;
        _this2.lockAxis = vars.lockAxis;
        _this2.autoScroll = vars.autoScroll || 0;
        _this2.lockedAxis = null;
        _this2.allowEventDefault = !!vars.allowEventDefault;
        gsap4.getProperty(target2, "x");
        var type = (vars.type || "x,y").toLowerCase(), xyMode = ~type.indexOf("x") || ~type.indexOf("y"), rotationMode = type.indexOf("rotation") !== -1, xProp = rotationMode ? "rotation" : xyMode ? "x" : "left", yProp = xyMode ? "y" : "top", allowX = !!(~type.indexOf("x") || ~type.indexOf("left") || type === "scroll"), allowY = !!(~type.indexOf("y") || ~type.indexOf("top") || type === "scroll"), minimumMovement = vars.minimumMovement || 2, self2 = _assertThisInitialized2(_this2), triggers = _toArray2(vars.trigger || vars.handle || target2), killProps = {}, dragEndTime = 0, checkAutoScrollBounds = false, autoScrollMarginTop = vars.autoScrollMarginTop || 40, autoScrollMarginRight = vars.autoScrollMarginRight || 40, autoScrollMarginBottom = vars.autoScrollMarginBottom || 40, autoScrollMarginLeft = vars.autoScrollMarginLeft || 40, isClickable = vars.clickableTest || _isClickable, clickTime = 0, gsCache = target2._gsap || gsap4.core.getCache(target2), isFixed = _isFixed3(target2), getPropAsNum = function getPropAsNum2(property, unit) {
          return parseFloat(gsCache.get(target2, property, unit));
        }, ownerDoc = target2.ownerDocument || _doc6, enabled, scrollProxy, startPointerX, startPointerY, startElementX, startElementY, hasBounds, hasDragCallback, hasMoveCallback, maxX, minX, maxY, minY, touch, touchID, rotationOrigin, dirty, old, snapX, snapY, snapXY, isClicking, touchEventTarget, matrix, interrupted, allowNativeTouchScrolling, touchDragAxis, isDispatching, clickDispatch, trustedClickDispatch, isPreventingDefault, innerMatrix, dragged, onContextMenu = function onContextMenu2(e) {
          _preventDefault(e);
          e.stopImmediatePropagation && e.stopImmediatePropagation();
          return false;
        }, render3 = function render4(suppressEvents) {
          if (self2.autoScroll && self2.isDragging && (checkAutoScrollBounds || dirty)) {
            var e = target2, autoScrollFactor = self2.autoScroll * 15, parent, isRoot, rect, pointerX, pointerY, changeX, changeY, gap;
            checkAutoScrollBounds = false;
            _windowProxy.scrollTop = _win6.pageYOffset != null ? _win6.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
            _windowProxy.scrollLeft = _win6.pageXOffset != null ? _win6.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
            pointerX = self2.pointerX - _windowProxy.scrollLeft;
            pointerY = self2.pointerY - _windowProxy.scrollTop;
            while (e && !isRoot) {
              isRoot = _isRoot(e.parentNode);
              parent = isRoot ? _windowProxy : e.parentNode;
              rect = isRoot ? {
                bottom: Math.max(_docElement3.clientHeight, _win6.innerHeight || 0),
                right: Math.max(_docElement3.clientWidth, _win6.innerWidth || 0),
                left: 0,
                top: 0
              } : parent.getBoundingClientRect();
              changeX = changeY = 0;
              if (allowY) {
                gap = parent._gsMaxScrollY - parent.scrollTop;
                if (gap < 0) {
                  changeY = gap;
                } else if (pointerY > rect.bottom - autoScrollMarginBottom && gap) {
                  checkAutoScrollBounds = true;
                  changeY = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.bottom - pointerY) / autoScrollMarginBottom) | 0);
                } else if (pointerY < rect.top + autoScrollMarginTop && parent.scrollTop) {
                  checkAutoScrollBounds = true;
                  changeY = -Math.min(parent.scrollTop, autoScrollFactor * (1 - Math.max(0, pointerY - rect.top) / autoScrollMarginTop) | 0);
                }
                if (changeY) {
                  parent.scrollTop += changeY;
                }
              }
              if (allowX) {
                gap = parent._gsMaxScrollX - parent.scrollLeft;
                if (gap < 0) {
                  changeX = gap;
                } else if (pointerX > rect.right - autoScrollMarginRight && gap) {
                  checkAutoScrollBounds = true;
                  changeX = Math.min(gap, autoScrollFactor * (1 - Math.max(0, rect.right - pointerX) / autoScrollMarginRight) | 0);
                } else if (pointerX < rect.left + autoScrollMarginLeft && parent.scrollLeft) {
                  checkAutoScrollBounds = true;
                  changeX = -Math.min(parent.scrollLeft, autoScrollFactor * (1 - Math.max(0, pointerX - rect.left) / autoScrollMarginLeft) | 0);
                }
                if (changeX) {
                  parent.scrollLeft += changeX;
                }
              }
              if (isRoot && (changeX || changeY)) {
                _win6.scrollTo(parent.scrollLeft, parent.scrollTop);
                setPointerPosition(self2.pointerX + changeX, self2.pointerY + changeY);
              }
              e = parent;
            }
          }
          if (dirty) {
            var x = self2.x, y = self2.y;
            if (rotationMode) {
              self2.deltaX = x - parseFloat(gsCache.rotation);
              self2.rotation = x;
              gsCache.rotation = x + "deg";
              gsCache.renderTransform(1, gsCache);
            } else {
              if (scrollProxy) {
                if (allowY) {
                  self2.deltaY = y - scrollProxy.top();
                  scrollProxy.top(y);
                }
                if (allowX) {
                  self2.deltaX = x - scrollProxy.left();
                  scrollProxy.left(x);
                }
              } else if (xyMode) {
                if (allowY) {
                  self2.deltaY = y - parseFloat(gsCache.y);
                  gsCache.y = y + "px";
                }
                if (allowX) {
                  self2.deltaX = x - parseFloat(gsCache.x);
                  gsCache.x = x + "px";
                }
                gsCache.renderTransform(1, gsCache);
              } else {
                if (allowY) {
                  self2.deltaY = y - parseFloat(target2.style.top || 0);
                  target2.style.top = y + "px";
                }
                if (allowX) {
                  self2.deltaX = x - parseFloat(target2.style.left || 0);
                  target2.style.left = x + "px";
                }
              }
            }
            if (hasDragCallback && !suppressEvents && !isDispatching) {
              isDispatching = true;
              if (_dispatchEvent(self2, "drag", "onDrag") === false) {
                if (allowX) {
                  self2.x -= self2.deltaX;
                }
                if (allowY) {
                  self2.y -= self2.deltaY;
                }
                render4(true);
              }
              isDispatching = false;
            }
          }
          dirty = false;
        }, syncXY = function syncXY2(skipOnUpdate, skipSnap) {
          var x = self2.x, y = self2.y, snappedValue, cs;
          if (!target2._gsap) {
            gsCache = gsap4.core.getCache(target2);
          }
          gsCache.uncache && gsap4.getProperty(target2, "x");
          if (xyMode) {
            self2.x = parseFloat(gsCache.x);
            self2.y = parseFloat(gsCache.y);
          } else if (rotationMode) {
            self2.x = self2.rotation = parseFloat(gsCache.rotation);
          } else if (scrollProxy) {
            self2.y = scrollProxy.top();
            self2.x = scrollProxy.left();
          } else {
            self2.y = parseFloat(target2.style.top || (cs = _getComputedStyle3(target2)) && cs.top) || 0;
            self2.x = parseFloat(target2.style.left || (cs || {}).left) || 0;
          }
          if ((snapX || snapY || snapXY) && !skipSnap && (self2.isDragging || self2.isThrowing)) {
            if (snapXY) {
              _temp1.x = self2.x;
              _temp1.y = self2.y;
              snappedValue = snapXY(_temp1);
              if (snappedValue.x !== self2.x) {
                self2.x = snappedValue.x;
                dirty = true;
              }
              if (snappedValue.y !== self2.y) {
                self2.y = snappedValue.y;
                dirty = true;
              }
            }
            if (snapX) {
              snappedValue = snapX(self2.x);
              if (snappedValue !== self2.x) {
                self2.x = snappedValue;
                if (rotationMode) {
                  self2.rotation = snappedValue;
                }
                dirty = true;
              }
            }
            if (snapY) {
              snappedValue = snapY(self2.y);
              if (snappedValue !== self2.y) {
                self2.y = snappedValue;
              }
              dirty = true;
            }
          }
          dirty && render3(true);
          if (!skipOnUpdate) {
            self2.deltaX = self2.x - x;
            self2.deltaY = self2.y - y;
            _dispatchEvent(self2, "throwupdate", "onThrowUpdate");
          }
        }, buildSnapFunc = function buildSnapFunc2(snap3, min, max, factor) {
          if (min == null) {
            min = -_bigNum3;
          }
          if (max == null) {
            max = _bigNum3;
          }
          if (_isFunction5(snap3)) {
            return function(n) {
              var edgeTolerance = !self2.isPressed ? 1 : 1 - self2.edgeResistance;
              return snap3.call(self2, (n > max ? max + (n - max) * edgeTolerance : n < min ? min + (n - min) * edgeTolerance : n) * factor) * factor;
            };
          }
          if (_isArray2(snap3)) {
            return function(n) {
              var i = snap3.length, closest = 0, absDif = _bigNum3, val, dif;
              while (--i > -1) {
                val = snap3[i];
                dif = val - n;
                if (dif < 0) {
                  dif = -dif;
                }
                if (dif < absDif && val >= min && val <= max) {
                  closest = i;
                  absDif = dif;
                }
              }
              return snap3[closest];
            };
          }
          return isNaN(snap3) ? function(n) {
            return n;
          } : function() {
            return snap3 * factor;
          };
        }, buildPointSnapFunc = function buildPointSnapFunc2(snap3, minX2, maxX2, minY2, maxY2, radius, factor) {
          radius = radius && radius < _bigNum3 ? radius * radius : _bigNum3;
          if (_isFunction5(snap3)) {
            return function(point) {
              var edgeTolerance = !self2.isPressed ? 1 : 1 - self2.edgeResistance, x = point.x, y = point.y, result, dx, dy;
              point.x = x = x > maxX2 ? maxX2 + (x - maxX2) * edgeTolerance : x < minX2 ? minX2 + (x - minX2) * edgeTolerance : x;
              point.y = y = y > maxY2 ? maxY2 + (y - maxY2) * edgeTolerance : y < minY2 ? minY2 + (y - minY2) * edgeTolerance : y;
              result = snap3.call(self2, point);
              if (result !== point) {
                point.x = result.x;
                point.y = result.y;
              }
              if (factor !== 1) {
                point.x *= factor;
                point.y *= factor;
              }
              if (radius < _bigNum3) {
                dx = point.x - x;
                dy = point.y - y;
                if (dx * dx + dy * dy > radius) {
                  point.x = x;
                  point.y = y;
                }
              }
              return point;
            };
          }
          if (_isArray2(snap3)) {
            return function(p) {
              var i = snap3.length, closest = 0, minDist = _bigNum3, x, y, point, dist2;
              while (--i > -1) {
                point = snap3[i];
                x = point.x - p.x;
                y = point.y - p.y;
                dist2 = x * x + y * y;
                if (dist2 < minDist) {
                  closest = i;
                  minDist = dist2;
                }
              }
              return minDist <= radius ? snap3[closest] : p;
            };
          }
          return function(n) {
            return n;
          };
        }, calculateBounds = function calculateBounds2() {
          var bounds, targetBounds, snap3, snapIsRaw;
          hasBounds = false;
          if (scrollProxy) {
            scrollProxy.calibrate();
            self2.minX = minX = -scrollProxy.maxScrollLeft();
            self2.minY = minY = -scrollProxy.maxScrollTop();
            self2.maxX = maxX = self2.maxY = maxY = 0;
            hasBounds = true;
          } else if (!!vars.bounds) {
            bounds = _getBounds3(vars.bounds, target2.parentNode);
            if (rotationMode) {
              self2.minX = minX = bounds.left;
              self2.maxX = maxX = bounds.left + bounds.width;
              self2.minY = minY = self2.maxY = maxY = 0;
            } else if (!_isUndefined3(vars.bounds.maxX) || !_isUndefined3(vars.bounds.maxY)) {
              bounds = vars.bounds;
              self2.minX = minX = bounds.minX;
              self2.minY = minY = bounds.minY;
              self2.maxX = maxX = bounds.maxX;
              self2.maxY = maxY = bounds.maxY;
            } else {
              targetBounds = _getBounds3(target2, target2.parentNode);
              self2.minX = minX = Math.round(getPropAsNum(xProp, "px") + bounds.left - targetBounds.left);
              self2.minY = minY = Math.round(getPropAsNum(yProp, "px") + bounds.top - targetBounds.top);
              self2.maxX = maxX = Math.round(minX + (bounds.width - targetBounds.width));
              self2.maxY = maxY = Math.round(minY + (bounds.height - targetBounds.height));
            }
            if (minX > maxX) {
              self2.minX = maxX;
              self2.maxX = maxX = minX;
              minX = self2.minX;
            }
            if (minY > maxY) {
              self2.minY = maxY;
              self2.maxY = maxY = minY;
              minY = self2.minY;
            }
            if (rotationMode) {
              self2.minRotation = minX;
              self2.maxRotation = maxX;
            }
            hasBounds = true;
          }
          if (vars.liveSnap) {
            snap3 = vars.liveSnap === true ? vars.snap || {} : vars.liveSnap;
            snapIsRaw = _isArray2(snap3) || _isFunction5(snap3);
            if (rotationMode) {
              snapX = buildSnapFunc(snapIsRaw ? snap3 : snap3.rotation, minX, maxX, 1);
              snapY = null;
            } else {
              if (snap3.points) {
                snapXY = buildPointSnapFunc(snapIsRaw ? snap3 : snap3.points, minX, maxX, minY, maxY, snap3.radius, scrollProxy ? -1 : 1);
              } else {
                if (allowX) {
                  snapX = buildSnapFunc(snapIsRaw ? snap3 : snap3.x || snap3.left || snap3.scrollLeft, minX, maxX, scrollProxy ? -1 : 1);
                }
                if (allowY) {
                  snapY = buildSnapFunc(snapIsRaw ? snap3 : snap3.y || snap3.top || snap3.scrollTop, minY, maxY, scrollProxy ? -1 : 1);
                }
              }
            }
          }
        }, onThrowComplete = function onThrowComplete2() {
          self2.isThrowing = false;
          _dispatchEvent(self2, "throwcomplete", "onThrowComplete");
        }, onThrowInterrupt = function onThrowInterrupt2() {
          self2.isThrowing = false;
        }, animate = function animate2(inertia, forceZeroVelocity) {
          var snap3, snapIsRaw, tween, overshootTolerance;
          if (inertia && InertiaPlugin) {
            if (inertia === true) {
              snap3 = vars.snap || vars.liveSnap || {};
              snapIsRaw = _isArray2(snap3) || _isFunction5(snap3);
              inertia = {
                resistance: (vars.throwResistance || vars.resistance || 1e3) / (rotationMode ? 10 : 1)
              };
              if (rotationMode) {
                inertia.rotation = _parseInertia(self2, snapIsRaw ? snap3 : snap3.rotation, maxX, minX, 1, forceZeroVelocity);
              } else {
                if (allowX) {
                  inertia[xProp] = _parseInertia(self2, snapIsRaw ? snap3 : snap3.points || snap3.x || snap3.left, maxX, minX, scrollProxy ? -1 : 1, forceZeroVelocity || self2.lockedAxis === "x");
                }
                if (allowY) {
                  inertia[yProp] = _parseInertia(self2, snapIsRaw ? snap3 : snap3.points || snap3.y || snap3.top, maxY, minY, scrollProxy ? -1 : 1, forceZeroVelocity || self2.lockedAxis === "y");
                }
                if (snap3.points || _isArray2(snap3) && _isObject5(snap3[0])) {
                  inertia.linkedProps = xProp + "," + yProp;
                  inertia.radius = snap3.radius;
                }
              }
            }
            self2.isThrowing = true;
            overshootTolerance = !isNaN(vars.overshootTolerance) ? vars.overshootTolerance : vars.edgeResistance === 1 ? 0 : 1 - self2.edgeResistance + 0.2;
            if (!inertia.duration) {
              inertia.duration = {
                max: Math.max(vars.minDuration || 0, "maxDuration" in vars ? vars.maxDuration : 2),
                min: !isNaN(vars.minDuration) ? vars.minDuration : overshootTolerance === 0 || _isObject5(inertia) && inertia.resistance > 1e3 ? 0 : 0.5,
                overshoot: overshootTolerance
              };
            }
            self2.tween = tween = gsap4.to(scrollProxy || target2, {
              inertia,
              data: "_draggable",
              onComplete: onThrowComplete,
              onInterrupt: onThrowInterrupt,
              onUpdate: vars.fastMode ? _dispatchEvent : syncXY,
              onUpdateParams: vars.fastMode ? [self2, "onthrowupdate", "onThrowUpdate"] : snap3 && snap3.radius ? [false, true] : []
            });
            if (!vars.fastMode) {
              if (scrollProxy) {
                scrollProxy._skip = true;
              }
              tween.render(1e9, true, true);
              syncXY(true, true);
              self2.endX = self2.x;
              self2.endY = self2.y;
              if (rotationMode) {
                self2.endRotation = self2.x;
              }
              tween.play(0);
              syncXY(true, true);
              if (scrollProxy) {
                scrollProxy._skip = false;
              }
            }
          } else if (hasBounds) {
            self2.applyBounds();
          }
        }, updateMatrix = function updateMatrix2(shiftStart) {
          var start = matrix, p;
          matrix = getGlobalMatrix(target2.parentNode, true);
          if (shiftStart && self2.isPressed && !matrix.equals(start || new Matrix2D())) {
            p = start.inverse().apply({
              x: startPointerX,
              y: startPointerY
            });
            matrix.apply(p, p);
            startPointerX = p.x;
            startPointerY = p.y;
          }
          if (matrix.equals(_identityMatrix2)) {
            matrix = null;
          }
        }, recordStartPositions = function recordStartPositions2() {
          var edgeTolerance = 1 - self2.edgeResistance, offsetX = isFixed ? _getDocScrollLeft3(ownerDoc) : 0, offsetY = isFixed ? _getDocScrollTop3(ownerDoc) : 0, parsedOrigin, x, y;
          if (xyMode) {
            gsCache.x = getPropAsNum(xProp, "px") + "px";
            gsCache.y = getPropAsNum(yProp, "px") + "px";
            gsCache.renderTransform();
          }
          updateMatrix(false);
          _point1.x = self2.pointerX - offsetX;
          _point1.y = self2.pointerY - offsetY;
          matrix && matrix.apply(_point1, _point1);
          startPointerX = _point1.x;
          startPointerY = _point1.y;
          if (dirty) {
            setPointerPosition(self2.pointerX, self2.pointerY);
            render3(true);
          }
          innerMatrix = getGlobalMatrix(target2);
          if (scrollProxy) {
            calculateBounds();
            startElementY = scrollProxy.top();
            startElementX = scrollProxy.left();
          } else {
            if (isTweening2()) {
              syncXY(true, true);
              calculateBounds();
            } else {
              self2.applyBounds();
            }
            if (rotationMode) {
              parsedOrigin = target2.ownerSVGElement ? [gsCache.xOrigin - target2.getBBox().x, gsCache.yOrigin - target2.getBBox().y] : (_getComputedStyle3(target2)[_transformOriginProp3] || "0 0").split(" ");
              rotationOrigin = self2.rotationOrigin = getGlobalMatrix(target2).apply({
                x: parseFloat(parsedOrigin[0]) || 0,
                y: parseFloat(parsedOrigin[1]) || 0
              });
              syncXY(true, true);
              x = self2.pointerX - rotationOrigin.x - offsetX;
              y = rotationOrigin.y - self2.pointerY + offsetY;
              startElementX = self2.x;
              startElementY = self2.y = Math.atan2(y, x) * _RAD2DEG2;
            } else {
              startElementY = getPropAsNum(yProp, "px");
              startElementX = getPropAsNum(xProp, "px");
            }
          }
          if (hasBounds && edgeTolerance) {
            if (startElementX > maxX) {
              startElementX = maxX + (startElementX - maxX) / edgeTolerance;
            } else if (startElementX < minX) {
              startElementX = minX - (minX - startElementX) / edgeTolerance;
            }
            if (!rotationMode) {
              if (startElementY > maxY) {
                startElementY = maxY + (startElementY - maxY) / edgeTolerance;
              } else if (startElementY < minY) {
                startElementY = minY - (minY - startElementY) / edgeTolerance;
              }
            }
          }
          self2.startX = startElementX = _round5(startElementX);
          self2.startY = startElementY = _round5(startElementY);
        }, isTweening2 = function isTweening3() {
          return self2.tween && self2.tween.isActive();
        }, removePlaceholder = function removePlaceholder2() {
          if (_placeholderDiv.parentNode && !isTweening2() && !self2.isDragging) {
            _placeholderDiv.parentNode.removeChild(_placeholderDiv);
          }
        }, onPress = function onPress2(e, force) {
          var i;
          if (!enabled || self2.isPressed || !e || (e.type === "mousedown" || e.type === "pointerdown") && !force && _getTime3() - clickTime < 30 && _touchEventLookup[self2.pointerEvent.type]) {
            isPreventingDefault && e && enabled && _preventDefault(e);
            return;
          }
          interrupted = isTweening2();
          dragged = false;
          self2.pointerEvent = e;
          if (_touchEventLookup[e.type]) {
            touchEventTarget = ~e.type.indexOf("touch") ? e.currentTarget || e.target : ownerDoc;
            _addListener5(touchEventTarget, "touchend", onRelease);
            _addListener5(touchEventTarget, "touchmove", onMove);
            _addListener5(touchEventTarget, "touchcancel", onRelease);
            _addListener5(ownerDoc, "touchstart", _onMultiTouchDocument);
          } else {
            touchEventTarget = null;
            _addListener5(ownerDoc, "mousemove", onMove);
          }
          touchDragAxis = null;
          if (!_supportsPointer || !touchEventTarget) {
            _addListener5(ownerDoc, "mouseup", onRelease);
            e && e.target && _addListener5(e.target, "mouseup", onRelease);
          }
          isClicking = isClickable.call(self2, e.target) && vars.dragClickables === false && !force;
          if (isClicking) {
            _addListener5(e.target, "change", onRelease);
            _dispatchEvent(self2, "pressInit", "onPressInit");
            _dispatchEvent(self2, "press", "onPress");
            _setSelectable(triggers, true);
            isPreventingDefault = false;
            return;
          }
          allowNativeTouchScrolling = !touchEventTarget || allowX === allowY || self2.vars.allowNativeTouchScrolling === false || self2.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2) ? false : allowX ? "y" : "x";
          isPreventingDefault = !allowNativeTouchScrolling && !self2.allowEventDefault;
          if (isPreventingDefault) {
            _preventDefault(e);
            _addListener5(_win6, "touchforcechange", _preventDefault);
          }
          if (e.changedTouches) {
            e = touch = e.changedTouches[0];
            touchID = e.identifier;
          } else if (e.pointerId) {
            touchID = e.pointerId;
          } else {
            touch = touchID = null;
          }
          _dragCount++;
          _addToRenderQueue(render3);
          startPointerY = self2.pointerY = e.pageY;
          startPointerX = self2.pointerX = e.pageX;
          _dispatchEvent(self2, "pressInit", "onPressInit");
          if (allowNativeTouchScrolling || self2.autoScroll) {
            _recordMaxScrolls(target2.parentNode);
          }
          if (target2.parentNode && self2.autoScroll && !scrollProxy && !rotationMode && target2.parentNode._gsMaxScrollX && !_placeholderDiv.parentNode && !target2.getBBox) {
            _placeholderDiv.style.width = target2.parentNode.scrollWidth + "px";
            target2.parentNode.appendChild(_placeholderDiv);
          }
          recordStartPositions();
          self2.tween && self2.tween.kill();
          self2.isThrowing = false;
          gsap4.killTweensOf(scrollProxy || target2, killProps, true);
          scrollProxy && gsap4.killTweensOf(target2, {
            scrollTo: 1
          }, true);
          self2.tween = self2.lockedAxis = null;
          if (vars.zIndexBoost || !rotationMode && !scrollProxy && vars.zIndexBoost !== false) {
            target2.style.zIndex = Draggable2.zIndex++;
          }
          self2.isPressed = true;
          hasDragCallback = !!(vars.onDrag || self2._listeners.drag);
          hasMoveCallback = !!(vars.onMove || self2._listeners.move);
          if (vars.cursor !== false || vars.activeCursor) {
            i = triggers.length;
            while (--i > -1) {
              gsap4.set(triggers[i], {
                cursor: vars.activeCursor || vars.cursor || (_defaultCursor === "grab" ? "grabbing" : _defaultCursor)
              });
            }
          }
          _dispatchEvent(self2, "press", "onPress");
        }, onMove = function onMove2(e) {
          var originalEvent = e, touches, pointerX, pointerY, i, dx, dy;
          if (!enabled || _isMultiTouching || !self2.isPressed || !e) {
            isPreventingDefault && e && enabled && _preventDefault(e);
            return;
          }
          self2.pointerEvent = e;
          touches = e.changedTouches;
          if (touches) {
            e = touches[0];
            if (e !== touch && e.identifier !== touchID) {
              i = touches.length;
              while (--i > -1 && (e = touches[i]).identifier !== touchID && e.target !== target2) {
              }
              if (i < 0) {
                return;
              }
            }
          } else if (e.pointerId && touchID && e.pointerId !== touchID) {
            return;
          }
          if (touchEventTarget && allowNativeTouchScrolling && !touchDragAxis) {
            _point1.x = e.pageX - (isFixed ? _getDocScrollLeft3(ownerDoc) : 0);
            _point1.y = e.pageY - (isFixed ? _getDocScrollTop3(ownerDoc) : 0);
            matrix && matrix.apply(_point1, _point1);
            pointerX = _point1.x;
            pointerY = _point1.y;
            dx = Math.abs(pointerX - startPointerX);
            dy = Math.abs(pointerY - startPointerY);
            if (dx !== dy && (dx > minimumMovement || dy > minimumMovement) || _isAndroid && allowNativeTouchScrolling === touchDragAxis) {
              touchDragAxis = dx > dy && allowX ? "x" : "y";
              if (allowNativeTouchScrolling && touchDragAxis !== allowNativeTouchScrolling) {
                _addListener5(_win6, "touchforcechange", _preventDefault);
              }
              if (self2.vars.lockAxisOnTouchScroll !== false && allowX && allowY) {
                self2.lockedAxis = touchDragAxis === "x" ? "y" : "x";
                _isFunction5(self2.vars.onLockAxis) && self2.vars.onLockAxis.call(self2, originalEvent);
              }
              if (_isAndroid && allowNativeTouchScrolling === touchDragAxis) {
                onRelease(originalEvent);
                return;
              }
            }
          }
          if (!self2.allowEventDefault && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling !== touchDragAxis) && originalEvent.cancelable !== false) {
            _preventDefault(originalEvent);
            isPreventingDefault = true;
          } else if (isPreventingDefault) {
            isPreventingDefault = false;
          }
          if (self2.autoScroll) {
            checkAutoScrollBounds = true;
          }
          setPointerPosition(e.pageX, e.pageY, hasMoveCallback);
        }, setPointerPosition = function setPointerPosition2(pointerX, pointerY, invokeOnMove) {
          var dragTolerance = 1 - self2.dragResistance, edgeTolerance = 1 - self2.edgeResistance, prevPointerX = self2.pointerX, prevPointerY = self2.pointerY, prevStartElementY = startElementY, prevX = self2.x, prevY = self2.y, prevEndX = self2.endX, prevEndY = self2.endY, prevEndRotation = self2.endRotation, prevDirty = dirty, xChange, yChange, x, y, dif, temp;
          self2.pointerX = pointerX;
          self2.pointerY = pointerY;
          if (isFixed) {
            pointerX -= _getDocScrollLeft3(ownerDoc);
            pointerY -= _getDocScrollTop3(ownerDoc);
          }
          if (rotationMode) {
            y = Math.atan2(rotationOrigin.y - pointerY, pointerX - rotationOrigin.x) * _RAD2DEG2;
            dif = self2.y - y;
            if (dif > 180) {
              startElementY -= 360;
              self2.y = y;
            } else if (dif < -180) {
              startElementY += 360;
              self2.y = y;
            }
            if (self2.x !== startElementX || Math.abs(startElementY - y) > minimumMovement) {
              self2.y = y;
              x = startElementX + (startElementY - y) * dragTolerance;
            } else {
              x = startElementX;
            }
          } else {
            if (matrix) {
              temp = pointerX * matrix.a + pointerY * matrix.c + matrix.e;
              pointerY = pointerX * matrix.b + pointerY * matrix.d + matrix.f;
              pointerX = temp;
            }
            yChange = pointerY - startPointerY;
            xChange = pointerX - startPointerX;
            if (yChange < minimumMovement && yChange > -minimumMovement) {
              yChange = 0;
            }
            if (xChange < minimumMovement && xChange > -minimumMovement) {
              xChange = 0;
            }
            if ((self2.lockAxis || self2.lockedAxis) && (xChange || yChange)) {
              temp = self2.lockedAxis;
              if (!temp) {
                self2.lockedAxis = temp = allowX && Math.abs(xChange) > Math.abs(yChange) ? "y" : allowY ? "x" : null;
                if (temp && _isFunction5(self2.vars.onLockAxis)) {
                  self2.vars.onLockAxis.call(self2, self2.pointerEvent);
                }
              }
              if (temp === "y") {
                yChange = 0;
              } else if (temp === "x") {
                xChange = 0;
              }
            }
            x = _round5(startElementX + xChange * dragTolerance);
            y = _round5(startElementY + yChange * dragTolerance);
          }
          if ((snapX || snapY || snapXY) && (self2.x !== x || self2.y !== y && !rotationMode)) {
            if (snapXY) {
              _temp1.x = x;
              _temp1.y = y;
              temp = snapXY(_temp1);
              x = _round5(temp.x);
              y = _round5(temp.y);
            }
            if (snapX) {
              x = _round5(snapX(x));
            }
            if (snapY) {
              y = _round5(snapY(y));
            }
          }
          if (hasBounds) {
            if (x > maxX) {
              x = maxX + Math.round((x - maxX) * edgeTolerance);
            } else if (x < minX) {
              x = minX + Math.round((x - minX) * edgeTolerance);
            }
            if (!rotationMode) {
              if (y > maxY) {
                y = Math.round(maxY + (y - maxY) * edgeTolerance);
              } else if (y < minY) {
                y = Math.round(minY + (y - minY) * edgeTolerance);
              }
            }
          }
          if (self2.x !== x || self2.y !== y && !rotationMode) {
            if (rotationMode) {
              self2.endRotation = self2.x = self2.endX = x;
              dirty = true;
            } else {
              if (allowY) {
                self2.y = self2.endY = y;
                dirty = true;
              }
              if (allowX) {
                self2.x = self2.endX = x;
                dirty = true;
              }
            }
            if (!invokeOnMove || _dispatchEvent(self2, "move", "onMove") !== false) {
              if (!self2.isDragging && self2.isPressed) {
                self2.isDragging = dragged = true;
                _dispatchEvent(self2, "dragstart", "onDragStart");
              }
            } else {
              self2.pointerX = prevPointerX;
              self2.pointerY = prevPointerY;
              startElementY = prevStartElementY;
              self2.x = prevX;
              self2.y = prevY;
              self2.endX = prevEndX;
              self2.endY = prevEndY;
              self2.endRotation = prevEndRotation;
              dirty = prevDirty;
            }
          }
        }, onRelease = function onRelease2(e, force) {
          if (!enabled || !self2.isPressed || e && touchID != null && !force && (e.pointerId && e.pointerId !== touchID && e.target !== target2 || e.changedTouches && !_hasTouchID(e.changedTouches, touchID))) {
            isPreventingDefault && e && enabled && _preventDefault(e);
            return;
          }
          self2.isPressed = false;
          var originalEvent = e, wasDragging = self2.isDragging, isContextMenuRelease = self2.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2), placeholderDelayedCall = gsap4.delayedCall(1e-3, removePlaceholder), touches, i, syntheticEvent, eventTarget, syntheticClick;
          if (touchEventTarget) {
            _removeListener5(touchEventTarget, "touchend", onRelease2);
            _removeListener5(touchEventTarget, "touchmove", onMove);
            _removeListener5(touchEventTarget, "touchcancel", onRelease2);
            _removeListener5(ownerDoc, "touchstart", _onMultiTouchDocument);
          } else {
            _removeListener5(ownerDoc, "mousemove", onMove);
          }
          _removeListener5(_win6, "touchforcechange", _preventDefault);
          if (!_supportsPointer || !touchEventTarget) {
            _removeListener5(ownerDoc, "mouseup", onRelease2);
            e && e.target && _removeListener5(e.target, "mouseup", onRelease2);
          }
          dirty = false;
          if (wasDragging) {
            dragEndTime = _lastDragTime = _getTime3();
            self2.isDragging = false;
          }
          _removeFromRenderQueue(render3);
          if (isClicking && !isContextMenuRelease) {
            if (e) {
              _removeListener5(e.target, "change", onRelease2);
              self2.pointerEvent = originalEvent;
            }
            _setSelectable(triggers, false);
            _dispatchEvent(self2, "release", "onRelease");
            _dispatchEvent(self2, "click", "onClick");
            isClicking = false;
            return;
          }
          i = triggers.length;
          while (--i > -1) {
            _setStyle(triggers[i], "cursor", vars.cursor || (vars.cursor !== false ? _defaultCursor : null));
          }
          _dragCount--;
          if (e) {
            touches = e.changedTouches;
            if (touches) {
              e = touches[0];
              if (e !== touch && e.identifier !== touchID) {
                i = touches.length;
                while (--i > -1 && (e = touches[i]).identifier !== touchID && e.target !== target2) {
                }
                if (i < 0 && !force) {
                  return;
                }
              }
            }
            self2.pointerEvent = originalEvent;
            self2.pointerX = e.pageX;
            self2.pointerY = e.pageY;
          }
          if (isContextMenuRelease && originalEvent) {
            _preventDefault(originalEvent);
            isPreventingDefault = true;
            _dispatchEvent(self2, "release", "onRelease");
          } else if (originalEvent && !wasDragging) {
            isPreventingDefault = false;
            if (interrupted && (vars.snap || vars.bounds)) {
              animate(vars.inertia || vars.throwProps);
            }
            _dispatchEvent(self2, "release", "onRelease");
            if ((!_isAndroid || originalEvent.type !== "touchmove") && originalEvent.type.indexOf("cancel") === -1) {
              _dispatchEvent(self2, "click", "onClick");
              if (_getTime3() - clickTime < 300) {
                _dispatchEvent(self2, "doubleclick", "onDoubleClick");
              }
              eventTarget = originalEvent.target || target2;
              clickTime = _getTime3();
              syntheticClick = function syntheticClick2() {
                if (clickTime !== clickDispatch && self2.enabled() && !self2.isPressed && !originalEvent.defaultPrevented) {
                  if (eventTarget.click) {
                    eventTarget.click();
                  } else if (ownerDoc.createEvent) {
                    syntheticEvent = ownerDoc.createEvent("MouseEvents");
                    syntheticEvent.initMouseEvent("click", true, true, _win6, 1, self2.pointerEvent.screenX, self2.pointerEvent.screenY, self2.pointerX, self2.pointerY, false, false, false, false, 0, null);
                    eventTarget.dispatchEvent(syntheticEvent);
                  }
                }
              };
              if (!_isAndroid && !originalEvent.defaultPrevented) {
                gsap4.delayedCall(0.05, syntheticClick);
              }
            }
          } else {
            animate(vars.inertia || vars.throwProps);
            if (!self2.allowEventDefault && originalEvent && (vars.dragClickables !== false || !isClickable.call(self2, originalEvent.target)) && wasDragging && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling === touchDragAxis) && originalEvent.cancelable !== false) {
              isPreventingDefault = true;
              _preventDefault(originalEvent);
            } else {
              isPreventingDefault = false;
            }
            _dispatchEvent(self2, "release", "onRelease");
          }
          isTweening2() && placeholderDelayedCall.duration(self2.tween.duration());
          wasDragging && _dispatchEvent(self2, "dragend", "onDragEnd");
          return true;
        }, updateScroll = function updateScroll2(e) {
          if (e && self2.isDragging && !scrollProxy) {
            var parent = e.target || target2.parentNode, deltaX = parent.scrollLeft - parent._gsScrollX, deltaY = parent.scrollTop - parent._gsScrollY;
            if (deltaX || deltaY) {
              if (matrix) {
                startPointerX -= deltaX * matrix.a + deltaY * matrix.c;
                startPointerY -= deltaY * matrix.d + deltaX * matrix.b;
              } else {
                startPointerX -= deltaX;
                startPointerY -= deltaY;
              }
              parent._gsScrollX += deltaX;
              parent._gsScrollY += deltaY;
              setPointerPosition(self2.pointerX, self2.pointerY);
            }
          }
        }, onClick = function onClick2(e) {
          var time = _getTime3(), recentlyClicked = time - clickTime < 100, recentlyDragged = time - dragEndTime < 50, alreadyDispatched = recentlyClicked && clickDispatch === clickTime, defaultPrevented = self2.pointerEvent && self2.pointerEvent.defaultPrevented, alreadyDispatchedTrusted = recentlyClicked && trustedClickDispatch === clickTime, trusted = e.isTrusted || e.isTrusted == null && recentlyClicked && alreadyDispatched;
          if ((alreadyDispatched || recentlyDragged && self2.vars.suppressClickOnDrag !== false) && e.stopImmediatePropagation) {
            e.stopImmediatePropagation();
          }
          if (recentlyClicked && !(self2.pointerEvent && self2.pointerEvent.defaultPrevented) && (!alreadyDispatched || trusted && !alreadyDispatchedTrusted)) {
            if (trusted && alreadyDispatched) {
              trustedClickDispatch = clickTime;
            }
            clickDispatch = clickTime;
            return;
          }
          if (self2.isPressed || recentlyDragged || recentlyClicked) {
            if (!trusted || !e.detail || !recentlyClicked || defaultPrevented) {
              _preventDefault(e);
            }
          }
          if (!recentlyClicked && !recentlyDragged && !dragged) {
            e && e.target && (self2.pointerEvent = e);
            _dispatchEvent(self2, "click", "onClick");
          }
        }, localizePoint = function localizePoint2(p) {
          return matrix ? {
            x: p.x * matrix.a + p.y * matrix.c + matrix.e,
            y: p.x * matrix.b + p.y * matrix.d + matrix.f
          } : {
            x: p.x,
            y: p.y
          };
        };
        old = Draggable2.get(target2);
        old && old.kill();
        _this2.startDrag = function(event, align5) {
          var r1, r2, p1, p2;
          onPress(event || self2.pointerEvent, true);
          if (align5 && !self2.hitTest(event || self2.pointerEvent)) {
            r1 = _parseRect(event || self2.pointerEvent);
            r2 = _parseRect(target2);
            p1 = localizePoint({
              x: r1.left + r1.width / 2,
              y: r1.top + r1.height / 2
            });
            p2 = localizePoint({
              x: r2.left + r2.width / 2,
              y: r2.top + r2.height / 2
            });
            startPointerX -= p1.x - p2.x;
            startPointerY -= p1.y - p2.y;
          }
          if (!self2.isDragging) {
            self2.isDragging = dragged = true;
            _dispatchEvent(self2, "dragstart", "onDragStart");
          }
        };
        _this2.drag = onMove;
        _this2.endDrag = function(e) {
          return onRelease(e || self2.pointerEvent, true);
        };
        _this2.timeSinceDrag = function() {
          return self2.isDragging ? 0 : (_getTime3() - dragEndTime) / 1e3;
        };
        _this2.timeSinceClick = function() {
          return (_getTime3() - clickTime) / 1e3;
        };
        _this2.hitTest = function(target3, threshold) {
          return Draggable2.hitTest(self2.target, target3, threshold);
        };
        _this2.getDirection = function(from, diagonalThreshold) {
          var mode = from === "velocity" && InertiaPlugin ? from : _isObject5(from) && !rotationMode ? "element" : "start", xChange, yChange, ratio, direction2, r1, r2;
          if (mode === "element") {
            r1 = _parseRect(self2.target);
            r2 = _parseRect(from);
          }
          xChange = mode === "start" ? self2.x - startElementX : mode === "velocity" ? InertiaPlugin.getVelocity(target2, xProp) : r1.left + r1.width / 2 - (r2.left + r2.width / 2);
          if (rotationMode) {
            return xChange < 0 ? "counter-clockwise" : "clockwise";
          } else {
            diagonalThreshold = diagonalThreshold || 2;
            yChange = mode === "start" ? self2.y - startElementY : mode === "velocity" ? InertiaPlugin.getVelocity(target2, yProp) : r1.top + r1.height / 2 - (r2.top + r2.height / 2);
            ratio = Math.abs(xChange / yChange);
            direction2 = ratio < 1 / diagonalThreshold ? "" : xChange < 0 ? "left" : "right";
            if (ratio < diagonalThreshold) {
              if (direction2 !== "") {
                direction2 += "-";
              }
              direction2 += yChange < 0 ? "up" : "down";
            }
          }
          return direction2;
        };
        _this2.applyBounds = function(newBounds, sticky) {
          var x, y, forceZeroVelocity, e, parent, isRoot;
          if (newBounds && vars.bounds !== newBounds) {
            vars.bounds = newBounds;
            return self2.update(true, sticky);
          }
          syncXY(true);
          calculateBounds();
          if (hasBounds && !isTweening2()) {
            x = self2.x;
            y = self2.y;
            if (x > maxX) {
              x = maxX;
            } else if (x < minX) {
              x = minX;
            }
            if (y > maxY) {
              y = maxY;
            } else if (y < minY) {
              y = minY;
            }
            if (self2.x !== x || self2.y !== y) {
              forceZeroVelocity = true;
              self2.x = self2.endX = x;
              if (rotationMode) {
                self2.endRotation = x;
              } else {
                self2.y = self2.endY = y;
              }
              dirty = true;
              render3(true);
              if (self2.autoScroll && !self2.isDragging) {
                _recordMaxScrolls(target2.parentNode);
                e = target2;
                _windowProxy.scrollTop = _win6.pageYOffset != null ? _win6.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
                _windowProxy.scrollLeft = _win6.pageXOffset != null ? _win6.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
                while (e && !isRoot) {
                  isRoot = _isRoot(e.parentNode);
                  parent = isRoot ? _windowProxy : e.parentNode;
                  if (allowY && parent.scrollTop > parent._gsMaxScrollY) {
                    parent.scrollTop = parent._gsMaxScrollY;
                  }
                  if (allowX && parent.scrollLeft > parent._gsMaxScrollX) {
                    parent.scrollLeft = parent._gsMaxScrollX;
                  }
                  e = parent;
                }
              }
            }
            if (self2.isThrowing && (forceZeroVelocity || self2.endX > maxX || self2.endX < minX || self2.endY > maxY || self2.endY < minY)) {
              animate(vars.inertia || vars.throwProps, forceZeroVelocity);
            }
          }
          return self2;
        };
        _this2.update = function(applyBounds, sticky, ignoreExternalChanges) {
          if (sticky && self2.isPressed) {
            var m = getGlobalMatrix(target2), p = innerMatrix.apply({
              x: self2.x - startElementX,
              y: self2.y - startElementY
            }), m2 = getGlobalMatrix(target2.parentNode, true);
            m2.apply({
              x: m.e - p.x,
              y: m.f - p.y
            }, p);
            self2.x -= p.x - m2.e;
            self2.y -= p.y - m2.f;
            render3(true);
            recordStartPositions();
          }
          var x = self2.x, y = self2.y;
          updateMatrix(!sticky);
          if (applyBounds) {
            self2.applyBounds();
          } else {
            dirty && ignoreExternalChanges && render3(true);
            syncXY(true);
          }
          if (sticky) {
            setPointerPosition(self2.pointerX, self2.pointerY);
            dirty && render3(true);
          }
          if (self2.isPressed && !sticky && (allowX && Math.abs(x - self2.x) > 0.01 || allowY && Math.abs(y - self2.y) > 0.01 && !rotationMode)) {
            recordStartPositions();
          }
          if (self2.autoScroll) {
            _recordMaxScrolls(target2.parentNode, self2.isDragging);
            checkAutoScrollBounds = self2.isDragging;
            render3(true);
            _removeScrollListener(target2, updateScroll);
            _addScrollListener(target2, updateScroll);
          }
          return self2;
        };
        _this2.enable = function(type2) {
          var setVars = {
            lazy: true
          }, id, i, trigger;
          if (vars.cursor !== false) {
            setVars.cursor = vars.cursor || _defaultCursor;
          }
          if (gsap4.utils.checkPrefix("touchCallout")) {
            setVars.touchCallout = "none";
          }
          if (type2 !== "soft") {
            _setTouchActionForAllDescendants(triggers, allowX === allowY ? "none" : vars.allowNativeTouchScrolling && target2.scrollHeight === target2.clientHeight === (target2.scrollWidth === target2.clientHeight) || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x");
            i = triggers.length;
            while (--i > -1) {
              trigger = triggers[i];
              _supportsPointer || _addListener5(trigger, "mousedown", onPress);
              _addListener5(trigger, "touchstart", onPress);
              _addListener5(trigger, "click", onClick, true);
              gsap4.set(trigger, setVars);
              if (trigger.getBBox && trigger.ownerSVGElement && allowX !== allowY) {
                gsap4.set(trigger.ownerSVGElement, {
                  touchAction: vars.allowNativeTouchScrolling || vars.allowEventDefault ? "manipulation" : allowX ? "pan-y" : "pan-x"
                });
              }
              vars.allowContextMenu || _addListener5(trigger, "contextmenu", onContextMenu);
            }
            _setSelectable(triggers, false);
          }
          _addScrollListener(target2, updateScroll);
          enabled = true;
          if (InertiaPlugin && type2 !== "soft") {
            InertiaPlugin.track(scrollProxy || target2, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
          }
          target2._gsDragID = id = "d" + _lookupCount++;
          _lookup[id] = self2;
          if (scrollProxy) {
            scrollProxy.enable();
            scrollProxy.element._gsDragID = id;
          }
          (vars.bounds || rotationMode) && recordStartPositions();
          vars.bounds && self2.applyBounds();
          return self2;
        };
        _this2.disable = function(type2) {
          var dragging = self2.isDragging, i = triggers.length, trigger;
          while (--i > -1) {
            _setStyle(triggers[i], "cursor", null);
          }
          if (type2 !== "soft") {
            _setTouchActionForAllDescendants(triggers, null);
            i = triggers.length;
            while (--i > -1) {
              trigger = triggers[i];
              _setStyle(trigger, "touchCallout", null);
              _removeListener5(trigger, "mousedown", onPress);
              _removeListener5(trigger, "touchstart", onPress);
              _removeListener5(trigger, "click", onClick);
              _removeListener5(trigger, "contextmenu", onContextMenu);
            }
            _setSelectable(triggers, true);
            if (touchEventTarget) {
              _removeListener5(touchEventTarget, "touchcancel", onRelease);
              _removeListener5(touchEventTarget, "touchend", onRelease);
              _removeListener5(touchEventTarget, "touchmove", onMove);
            }
            _removeListener5(ownerDoc, "mouseup", onRelease);
            _removeListener5(ownerDoc, "mousemove", onMove);
          }
          _removeScrollListener(target2, updateScroll);
          enabled = false;
          InertiaPlugin && type2 !== "soft" && InertiaPlugin.untrack(scrollProxy || target2, xyMode ? "x,y" : rotationMode ? "rotation" : "top,left");
          scrollProxy && scrollProxy.disable();
          _removeFromRenderQueue(render3);
          self2.isDragging = self2.isPressed = isClicking = false;
          dragging && _dispatchEvent(self2, "dragend", "onDragEnd");
          return self2;
        };
        _this2.enabled = function(value, type2) {
          return arguments.length ? value ? self2.enable(type2) : self2.disable(type2) : enabled;
        };
        _this2.kill = function() {
          self2.isThrowing = false;
          self2.tween && self2.tween.kill();
          self2.disable();
          gsap4.set(triggers, {
            clearProps: "userSelect"
          });
          delete _lookup[target2._gsDragID];
          return self2;
        };
        if (~type.indexOf("scroll")) {
          scrollProxy = _this2.scrollProxy = new ScrollProxy(target2, _extend({
            onKill: function onKill() {
              self2.isPressed && onRelease(null);
            }
          }, vars));
          target2.style.overflowY = allowY && !_isTouchDevice ? "auto" : "hidden";
          target2.style.overflowX = allowX && !_isTouchDevice ? "auto" : "hidden";
          target2 = scrollProxy.content;
        }
        if (rotationMode) {
          killProps.rotation = 1;
        } else {
          if (allowX) {
            killProps[xProp] = 1;
          }
          if (allowY) {
            killProps[yProp] = 1;
          }
        }
        gsCache.force3D = "force3D" in vars ? vars.force3D : true;
        _this2.enable();
        return _this2;
      }
      Draggable2.register = function register(core) {
        gsap4 = core;
        _initCore5();
      };
      Draggable2.create = function create(targets, vars) {
        _coreInitted4 || _initCore5(true);
        return _toArray2(targets).map(function(target2) {
          return new Draggable2(target2, vars);
        });
      };
      Draggable2.get = function get(target2) {
        return _lookup[(_toArray2(target2)[0] || {})._gsDragID];
      };
      Draggable2.timeSinceDrag = function timeSinceDrag() {
        return (_getTime3() - _lastDragTime) / 1e3;
      };
      Draggable2.hitTest = function hitTest(obj1, obj2, threshold) {
        if (obj1 === obj2) {
          return false;
        }
        var r1 = _parseRect(obj1), r2 = _parseRect(obj2), top = r1.top, left = r1.left, right = r1.right, bottom = r1.bottom, width = r1.width, height = r1.height, isOutside = r2.left > right || r2.right < left || r2.top > bottom || r2.bottom < top, overlap, area, isRatio;
        if (isOutside || !threshold) {
          return !isOutside;
        }
        isRatio = (threshold + "").indexOf("%") !== -1;
        threshold = parseFloat(threshold) || 0;
        overlap = {
          left: Math.max(left, r2.left),
          top: Math.max(top, r2.top)
        };
        overlap.width = Math.min(right, r2.right) - overlap.left;
        overlap.height = Math.min(bottom, r2.bottom) - overlap.top;
        if (overlap.width < 0 || overlap.height < 0) {
          return false;
        }
        if (isRatio) {
          threshold *= 0.01;
          area = overlap.width * overlap.height;
          return area >= width * height * threshold || area >= r2.width * r2.height * threshold;
        }
        return overlap.width > threshold && overlap.height > threshold;
      };
      return Draggable2;
    }(EventDispatcher);
    _setDefaults5(Draggable.prototype, {
      pointerX: 0,
      pointerY: 0,
      startX: 0,
      startY: 0,
      deltaX: 0,
      deltaY: 0,
      isDragging: false,
      isPressed: false
    });
    Draggable.zIndex = 1e3;
    Draggable.version = "3.11.3";
    _getGSAP5() && gsap4.registerPlugin(Draggable);
  }
});

// app/utils/hooks/useUserAgent.ts
var import_react = __toESM(require_react());
function useUserAgent() {
  const [userAgent, setUserAgent] = (0, import_react.useState)("");
  (0, import_react.useEffect)(() => {
    if (navigator) {
      setUserAgent(navigator.userAgent);
    }
  }, [userAgent]);
  return userAgent;
}

// app/utils/hooks/useAnimations.ts
var import_react6 = __toESM(require_react());

// node_modules/gsap/gsap-core.js
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var _config = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
};
var _defaults = {
  duration: 0.5,
  overwrite: false,
  delay: 0
};
var _suppressOverwrites;
var _reverting;
var _context;
var _bigNum = 1e8;
var _tinyNum = 1 / _bigNum;
var _2PI = Math.PI * 2;
var _HALF_PI = _2PI / 4;
var _gsID = 0;
var _sqrt = Math.sqrt;
var _cos = Math.cos;
var _sin = Math.sin;
var _isString = function _isString2(value) {
  return typeof value === "string";
};
var _isFunction = function _isFunction2(value) {
  return typeof value === "function";
};
var _isNumber = function _isNumber2(value) {
  return typeof value === "number";
};
var _isUndefined = function _isUndefined2(value) {
  return typeof value === "undefined";
};
var _isObject = function _isObject2(value) {
  return typeof value === "object";
};
var _isNotFalse = function _isNotFalse2(value) {
  return value !== false;
};
var _windowExists = function _windowExists2() {
  return typeof window !== "undefined";
};
var _isFuncOrString = function _isFuncOrString2(value) {
  return _isFunction(value) || _isString(value);
};
var _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {
};
var _isArray = Array.isArray;
var _strictNumExp = /(?:-?\.?\d|\.)+/gi;
var _numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;
var _numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g;
var _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;
var _relExp = /[+-]=-?[.\d]+/;
var _delimitedValueExp = /[^,'"\[\]\s]+/gi;
var _unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;
var _globalTimeline;
var _win;
var _coreInitted;
var _doc;
var _globals = {};
var _installScope = {};
var _coreReady;
var _install = function _install2(scope) {
  return (_installScope = _merge(scope, _globals)) && gsap;
};
var _missingPlugin = function _missingPlugin2(property, value) {
  return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
};
var _warn = function _warn2(message, suppress) {
  return !suppress && console.warn(message);
};
var _addGlobal = function _addGlobal2(name, obj) {
  return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
};
var _emptyFunc = function _emptyFunc2() {
  return 0;
};
var _startAtRevertConfig = {
  suppressEvents: true,
  isStart: true,
  kill: false
};
var _revertConfigNoKill = {
  suppressEvents: true,
  kill: false
};
var _revertConfig = {
  suppressEvents: true
};
var _reservedProps = {};
var _lazyTweens = [];
var _lazyLookup = {};
var _lastRenderedFrame;
var _plugins = {};
var _effects = {};
var _nextGCFrame = 30;
var _harnessPlugins = [];
var _callbackNames = "";
var _harness = function _harness2(targets) {
  var target2 = targets[0], harnessPlugin, i;
  _isObject(target2) || _isFunction(target2) || (targets = [targets]);
  if (!(harnessPlugin = (target2._gsap || {}).harness)) {
    i = _harnessPlugins.length;
    while (i-- && !_harnessPlugins[i].targetTest(target2)) {
    }
    harnessPlugin = _harnessPlugins[i];
  }
  i = targets.length;
  while (i--) {
    targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
  }
  return targets;
};
var _getCache = function _getCache2(target2) {
  return target2._gsap || _harness(toArray(target2))[0]._gsap;
};
var _getProperty = function _getProperty2(target2, property, v) {
  return (v = target2[property]) && _isFunction(v) ? target2[property]() : _isUndefined(v) && target2.getAttribute && target2.getAttribute(property) || v;
};
var _forEachName = function _forEachName2(names, func) {
  return (names = names.split(",")).forEach(func) || names;
};
var _round = function _round2(value) {
  return Math.round(value * 1e5) / 1e5 || 0;
};
var _roundPrecise = function _roundPrecise2(value) {
  return Math.round(value * 1e7) / 1e7 || 0;
};
var _parseRelative = function _parseRelative2(start, value) {
  var operator = value.charAt(0), end = parseFloat(value.substr(2));
  start = parseFloat(start);
  return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
};
var _arrayContainsAny = function _arrayContainsAny2(toSearch, toFind) {
  var l = toFind.length, i = 0;
  for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l; ) {
  }
  return i < l;
};
var _lazyRender = function _lazyRender2() {
  var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
  _lazyLookup = {};
  _lazyTweens.length = 0;
  for (i = 0; i < l; i++) {
    tween = a[i];
    tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
  }
};
var _lazySafeRender = function _lazySafeRender2(animation, time, suppressEvents, force) {
  _lazyTweens.length && _lazyRender();
  animation.render(time, suppressEvents, force || _reverting && time < 0 && (animation._initted || animation._startAt));
  _lazyTweens.length && _lazyRender();
};
var _numericIfPossible = function _numericIfPossible2(value) {
  var n = parseFloat(value);
  return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
};
var _passThrough = function _passThrough2(p) {
  return p;
};
var _setDefaults = function _setDefaults2(obj, defaults2) {
  for (var p in defaults2) {
    p in obj || (obj[p] = defaults2[p]);
  }
  return obj;
};
var _setKeyframeDefaults = function _setKeyframeDefaults2(excludeDuration) {
  return function(obj, defaults2) {
    for (var p in defaults2) {
      p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults2[p]);
    }
  };
};
var _merge = function _merge2(base, toMerge) {
  for (var p in toMerge) {
    base[p] = toMerge[p];
  }
  return base;
};
var _mergeDeep = function _mergeDeep2(base, toMerge) {
  for (var p in toMerge) {
    p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep2(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
  }
  return base;
};
var _copyExcluding = function _copyExcluding2(obj, excluding) {
  var copy = {}, p;
  for (p in obj) {
    p in excluding || (copy[p] = obj[p]);
  }
  return copy;
};
var _inheritDefaults = function _inheritDefaults2(vars) {
  var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
  if (_isNotFalse(vars.inherit)) {
    while (parent) {
      func(vars, parent.vars.defaults);
      parent = parent.parent || parent._dp;
    }
  }
  return vars;
};
var _arraysMatch = function _arraysMatch2(a1, a2) {
  var i = a1.length, match = i === a2.length;
  while (match && i-- && a1[i] === a2[i]) {
  }
  return i < 0;
};
var _addLinkedListItem = function _addLinkedListItem2(parent, child, firstProp, lastProp, sortBy) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }
  if (lastProp === void 0) {
    lastProp = "_last";
  }
  var prev = parent[lastProp], t;
  if (sortBy) {
    t = child[sortBy];
    while (prev && prev[sortBy] > t) {
      prev = prev._prev;
    }
  }
  if (prev) {
    child._next = prev._next;
    prev._next = child;
  } else {
    child._next = parent[firstProp];
    parent[firstProp] = child;
  }
  if (child._next) {
    child._next._prev = child;
  } else {
    parent[lastProp] = child;
  }
  child._prev = prev;
  child.parent = child._dp = parent;
  return child;
};
var _removeLinkedListItem = function _removeLinkedListItem2(parent, child, firstProp, lastProp) {
  if (firstProp === void 0) {
    firstProp = "_first";
  }
  if (lastProp === void 0) {
    lastProp = "_last";
  }
  var prev = child._prev, next = child._next;
  if (prev) {
    prev._next = next;
  } else if (parent[firstProp] === child) {
    parent[firstProp] = next;
  }
  if (next) {
    next._prev = prev;
  } else if (parent[lastProp] === child) {
    parent[lastProp] = prev;
  }
  child._next = child._prev = child.parent = null;
};
var _removeFromParent = function _removeFromParent2(child, onlyIfParentHasAutoRemove) {
  child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
  child._act = 0;
};
var _uncache = function _uncache2(animation, child) {
  if (animation && (!child || child._end > animation._dur || child._start < 0)) {
    var a = animation;
    while (a) {
      a._dirty = 1;
      a = a.parent;
    }
  }
  return animation;
};
var _recacheAncestors = function _recacheAncestors2(animation) {
  var parent = animation.parent;
  while (parent && parent.parent) {
    parent._dirty = 1;
    parent.totalDuration();
    parent = parent.parent;
  }
  return animation;
};
var _rewindStartAt = function _rewindStartAt2(tween, totalTime, suppressEvents, force) {
  return tween._startAt && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween.vars.immediateRender && !tween.vars.autoRevert || tween._startAt.render(totalTime, true, force));
};
var _hasNoPausedAncestors = function _hasNoPausedAncestors2(animation) {
  return !animation || animation._ts && _hasNoPausedAncestors2(animation.parent);
};
var _elapsedCycleDuration = function _elapsedCycleDuration2(animation) {
  return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
};
var _animationCycle = function _animationCycle2(tTime, cycleDuration) {
  var whole = Math.floor(tTime /= cycleDuration);
  return tTime && whole === tTime ? whole - 1 : whole;
};
var _parentToChildTotalTime = function _parentToChildTotalTime2(parentTime, child) {
  return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
};
var _setEnd = function _setEnd2(animation) {
  return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
};
var _alignPlayhead = function _alignPlayhead2(animation, totalTime) {
  var parent = animation._dp;
  if (parent && parent.smoothChildTiming && animation._ts) {
    animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
    _setEnd(animation);
    parent._dirty || _uncache(parent, animation);
  }
  return animation;
};
var _postAddChecks = function _postAddChecks2(timeline2, child) {
  var t;
  if (child._time || child._initted && !child._dur) {
    t = _parentToChildTotalTime(timeline2.rawTime(), child);
    if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
      child.render(t, true);
    }
  }
  if (_uncache(timeline2, child)._dp && timeline2._initted && timeline2._time >= timeline2._dur && timeline2._ts) {
    if (timeline2._dur < timeline2.duration()) {
      t = timeline2;
      while (t._dp) {
        t.rawTime() >= 0 && t.totalTime(t._tTime);
        t = t._dp;
      }
    }
    timeline2._zTime = -_tinyNum;
  }
};
var _addToTimeline = function _addToTimeline2(timeline2, child, position2, skipChecks) {
  child.parent && _removeFromParent(child);
  child._start = _roundPrecise((_isNumber(position2) ? position2 : position2 || timeline2 !== _globalTimeline ? _parsePosition(timeline2, position2, child) : timeline2._time) + child._delay);
  child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
  _addLinkedListItem(timeline2, child, "_first", "_last", timeline2._sort ? "_start" : 0);
  _isFromOrFromStart(child) || (timeline2._recent = child);
  skipChecks || _postAddChecks(timeline2, child);
  timeline2._ts < 0 && _alignPlayhead(timeline2, timeline2._tTime);
  return timeline2;
};
var _scrollTrigger = function _scrollTrigger2(animation, trigger) {
  return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
};
var _attemptInitTween = function _attemptInitTween2(tween, time, force, suppressEvents, tTime) {
  _initTween(tween, time, tTime);
  if (!tween._initted) {
    return 1;
  }
  if (!force && tween._pt && !_reverting && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
    _lazyTweens.push(tween);
    tween._lazy = [tTime, suppressEvents];
    return 1;
  }
};
var _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart2(_ref) {
  var parent = _ref.parent;
  return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart2(parent));
};
var _isFromOrFromStart = function _isFromOrFromStart2(_ref2) {
  var data = _ref2.data;
  return data === "isFromStart" || data === "isStart";
};
var _renderZeroDurationTween = function _renderZeroDurationTween2(tween, totalTime, suppressEvents, force) {
  var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
  if (repeatDelay && tween._repeat) {
    tTime = _clamp(0, tween._tDur, totalTime);
    iteration = _animationCycle(tTime, repeatDelay);
    tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
    if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
      prevRatio = 1 - ratio;
      tween.vars.repeatRefresh && tween._initted && tween.invalidate();
    }
  }
  if (ratio !== prevRatio || _reverting || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
    if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents, tTime)) {
      return;
    }
    prevIteration = tween._zTime;
    tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0);
    suppressEvents || (suppressEvents = totalTime && !prevIteration);
    tween.ratio = ratio;
    tween._from && (ratio = 1 - ratio);
    tween._time = 0;
    tween._tTime = tTime;
    pt = tween._pt;
    while (pt) {
      pt.r(ratio, pt.d);
      pt = pt._next;
    }
    totalTime < 0 && _rewindStartAt(tween, totalTime, suppressEvents, true);
    tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
    tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
    if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
      ratio && _removeFromParent(tween, 1);
      if (!suppressEvents && !_reverting) {
        _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
        tween._prom && tween._prom();
      }
    }
  } else if (!tween._zTime) {
    tween._zTime = totalTime;
  }
};
var _findNextPauseTween = function _findNextPauseTween2(animation, prevTime, time) {
  var child;
  if (time > prevTime) {
    child = animation._first;
    while (child && child._start <= time) {
      if (child.data === "isPause" && child._start > prevTime) {
        return child;
      }
      child = child._next;
    }
  } else {
    child = animation._last;
    while (child && child._start >= time) {
      if (child.data === "isPause" && child._start < prevTime) {
        return child;
      }
      child = child._prev;
    }
  }
};
var _setDuration = function _setDuration2(animation, duration, skipUncache, leavePlayhead) {
  var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
  totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
  animation._dur = dur;
  animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
  totalProgress > 0 && !leavePlayhead && _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress);
  animation.parent && _setEnd(animation);
  skipUncache || _uncache(animation.parent, animation);
  return animation;
};
var _onUpdateTotalDuration = function _onUpdateTotalDuration2(animation) {
  return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
};
var _zeroPosition = {
  _start: 0,
  endTime: _emptyFunc,
  totalDuration: _emptyFunc
};
var _parsePosition = function _parsePosition2(animation, position2, percentAnimation) {
  var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, i, offset, isPercent;
  if (_isString(position2) && (isNaN(position2) || position2 in labels)) {
    offset = position2.charAt(0);
    isPercent = position2.substr(-1) === "%";
    i = position2.indexOf("=");
    if (offset === "<" || offset === ">") {
      i >= 0 && (position2 = position2.replace(/=/, ""));
      return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position2.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
    }
    if (i < 0) {
      position2 in labels || (labels[position2] = clippedDuration);
      return labels[position2];
    }
    offset = parseFloat(position2.charAt(i - 1) + position2.substr(i + 1));
    if (isPercent && percentAnimation) {
      offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
    }
    return i > 1 ? _parsePosition2(animation, position2.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
  }
  return position2 == null ? clippedDuration : +position2;
};
var _createTweenType = function _createTweenType2(type, params, timeline2) {
  var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
  isLegacy && (vars.duration = params[1]);
  vars.parent = timeline2;
  if (type) {
    irVars = vars;
    parent = timeline2;
    while (parent && !("immediateRender" in irVars)) {
      irVars = parent.vars.defaults || {};
      parent = _isNotFalse(parent.vars.inherit) && parent.parent;
    }
    vars.immediateRender = _isNotFalse(irVars.immediateRender);
    type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1];
  }
  return new Tween(params[0], vars, params[varsIndex + 1]);
};
var _conditionalReturn = function _conditionalReturn2(value, func) {
  return value || value === 0 ? func(value) : func;
};
var _clamp = function _clamp2(min, max, value) {
  return value < min ? min : value > max ? max : value;
};
var getUnit = function getUnit2(value, v) {
  return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
};
var clamp = function clamp2(min, max, value) {
  return _conditionalReturn(value, function(v) {
    return _clamp(min, max, v);
  });
};
var _slice = [].slice;
var _isArrayLike = function _isArrayLike2(value, nonEmpty) {
  return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
};
var _flatten = function _flatten2(ar, leaveStrings, accumulator) {
  if (accumulator === void 0) {
    accumulator = [];
  }
  return ar.forEach(function(value) {
    var _accumulator;
    return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
  }) || accumulator;
};
var toArray = function toArray2(value, scope, leaveStrings) {
  return _context && !scope && _context.selector ? _context.selector(value) : _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
};
var selector = function selector2(value) {
  value = toArray(value)[0] || _warn("Invalid scope") || {};
  return function(v) {
    var el = value.current || value.nativeElement || value;
    return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
  };
};
var shuffle = function shuffle2(a) {
  return a.sort(function() {
    return 0.5 - Math.random();
  });
};
var distribute = function distribute2(v) {
  if (_isFunction(v)) {
    return v;
  }
  var vars = _isObject(v) ? v : {
    each: v
  }, ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
  if (_isString(from)) {
    ratioX = ratioY = {
      center: 0.5,
      edges: 0.5,
      end: 1
    }[from] || 0;
  } else if (!isDecimal && ratios) {
    ratioX = from[0];
    ratioY = from[1];
  }
  return function(i, target2, a) {
    var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
    if (!distances) {
      wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
      if (!wrapAt) {
        max = -_bigNum;
        while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) {
        }
        wrapAt--;
      }
      distances = cache[l] = [];
      originX = ratios ? Math.min(wrapAt, l) * ratioX - 0.5 : from % wrapAt;
      originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - 0.5 : from / wrapAt | 0;
      max = 0;
      min = _bigNum;
      for (j = 0; j < l; j++) {
        x = j % wrapAt - originX;
        y = originY - (j / wrapAt | 0);
        distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
        d > max && (max = d);
        d < min && (min = d);
      }
      from === "random" && shuffle(distances);
      distances.max = max - min;
      distances.min = min;
      distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
      distances.b = l < 0 ? base - l : base;
      distances.u = getUnit(vars.amount || vars.each) || 0;
      ease = ease && l < 0 ? _invertEase(ease) : ease;
    }
    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u;
  };
};
var _roundModifier = function _roundModifier2(v) {
  var p = Math.pow(10, ((v + "").split(".")[1] || "").length);
  return function(raw) {
    var n = _roundPrecise(Math.round(parseFloat(raw) / v) * v * p);
    return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw));
  };
};
var snap = function snap2(snapTo, value) {
  var isArray = _isArray(snapTo), radius, is2D;
  if (!isArray && _isObject(snapTo)) {
    radius = isArray = snapTo.radius || _bigNum;
    if (snapTo.values) {
      snapTo = toArray(snapTo.values);
      if (is2D = !_isNumber(snapTo[0])) {
        radius *= radius;
      }
    } else {
      snapTo = _roundModifier(snapTo.increment);
    }
  }
  return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
    is2D = snapTo(raw);
    return Math.abs(is2D - raw) <= radius ? is2D : raw;
  } : function(raw) {
    var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
    while (i--) {
      if (is2D) {
        dx = snapTo[i].x - x;
        dy = snapTo[i].y - y;
        dx = dx * dx + dy * dy;
      } else {
        dx = Math.abs(snapTo[i] - x);
      }
      if (dx < min) {
        min = dx;
        closest = i;
      }
    }
    closest = !radius || min <= radius ? snapTo[closest] : raw;
    return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
  });
};
var random = function random2(min, max, roundingIncrement, returnFunction) {
  return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function() {
    return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * 0.99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
  });
};
var pipe = function pipe2() {
  for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
    functions[_key] = arguments[_key];
  }
  return function(value) {
    return functions.reduce(function(v, f) {
      return f(v);
    }, value);
  };
};
var unitize = function unitize2(func, unit) {
  return function(value) {
    return func(parseFloat(value)) + (unit || getUnit(value));
  };
};
var normalize = function normalize2(min, max, value) {
  return mapRange(min, max, 0, 1, value);
};
var _wrapArray = function _wrapArray2(a, wrapper, value) {
  return _conditionalReturn(value, function(index) {
    return a[~~wrapper(index)];
  });
};
var wrap = function wrap2(min, max, value) {
  var range2 = max - min;
  return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
    return (range2 + (value2 - min) % range2) % range2 + min;
  });
};
var wrapYoyo = function wrapYoyo2(min, max, value) {
  var range2 = max - min, total = range2 * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
    value2 = (total + (value2 - min) % total) % total || 0;
    return min + (value2 > range2 ? total - value2 : value2);
  });
};
var _replaceRandom = function _replaceRandom2(value) {
  var prev = 0, s = "", i, nums, end, isArray;
  while (~(i = value.indexOf("random(", prev))) {
    end = value.indexOf(")", i);
    isArray = value.charAt(i + 7) === "[";
    nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
    s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
    prev = end + 1;
  }
  return s + value.substr(prev, value.length - prev);
};
var mapRange = function mapRange2(inMin, inMax, outMin, outMax, value) {
  var inRange = inMax - inMin, outRange = outMax - outMin;
  return _conditionalReturn(value, function(value2) {
    return outMin + ((value2 - inMin) / inRange * outRange || 0);
  });
};
var interpolate = function interpolate2(start, end, progress, mutate) {
  var func = isNaN(start + end) ? 0 : function(p2) {
    return (1 - p2) * start + p2 * end;
  };
  if (!func) {
    var isString = _isString(start), master = {}, p, i, interpolators, l, il;
    progress === true && (mutate = 1) && (progress = null);
    if (isString) {
      start = {
        p: start
      };
      end = {
        p: end
      };
    } else if (_isArray(start) && !_isArray(end)) {
      interpolators = [];
      l = start.length;
      il = l - 2;
      for (i = 1; i < l; i++) {
        interpolators.push(interpolate2(start[i - 1], start[i]));
      }
      l--;
      func = function func2(p2) {
        p2 *= l;
        var i2 = Math.min(il, ~~p2);
        return interpolators[i2](p2 - i2);
      };
      progress = end;
    } else if (!mutate) {
      start = _merge(_isArray(start) ? [] : {}, start);
    }
    if (!interpolators) {
      for (p in end) {
        _addPropTween.call(master, start, p, "get", end[p]);
      }
      func = function func2(p2) {
        return _renderPropTweens(p2, master) || (isString ? start.p : start);
      };
    }
  }
  return _conditionalReturn(progress, func);
};
var _getLabelInDirection = function _getLabelInDirection2(timeline2, fromTime, backward) {
  var labels = timeline2.labels, min = _bigNum, p, distance, label;
  for (p in labels) {
    distance = labels[p] - fromTime;
    if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
      label = p;
      min = distance;
    }
  }
  return label;
};
var _callback = function _callback2(animation, type, executeLazyFirst) {
  var v = animation.vars, callback = v[type], prevContext = _context, context3 = animation._ctx, params, scope, result;
  if (!callback) {
    return;
  }
  params = v[type + "Params"];
  scope = v.callbackScope || animation;
  executeLazyFirst && _lazyTweens.length && _lazyRender();
  context3 && (_context = context3);
  result = params ? callback.apply(scope, params) : callback.call(scope);
  _context = prevContext;
  return result;
};
var _interrupt = function _interrupt2(animation) {
  _removeFromParent(animation);
  animation.scrollTrigger && animation.scrollTrigger.kill(!!_reverting);
  animation.progress() < 1 && _callback(animation, "onInterrupt");
  return animation;
};
var _quickTween;
var _createPlugin = function _createPlugin2(config4) {
  config4 = !config4.name && config4["default"] || config4;
  var name = config4.name, isFunc = _isFunction(config4), Plugin = name && !isFunc && config4.init ? function() {
    this._props = [];
  } : config4, instanceDefaults = {
    init: _emptyFunc,
    render: _renderPropTweens,
    add: _addPropTween,
    kill: _killPropTweensOf,
    modifier: _addPluginModifier,
    rawVars: 0
  }, statics = {
    targetTest: 0,
    get: 0,
    getSetter: _getSetter,
    aliases: {},
    register: 0
  };
  _wake();
  if (config4 !== Plugin) {
    if (_plugins[name]) {
      return;
    }
    _setDefaults(Plugin, _setDefaults(_copyExcluding(config4, instanceDefaults), statics));
    _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config4, statics)));
    _plugins[Plugin.prop = name] = Plugin;
    if (config4.targetTest) {
      _harnessPlugins.push(Plugin);
      _reservedProps[name] = 1;
    }
    name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin";
  }
  _addGlobal(name, Plugin);
  config4.register && config4.register(gsap, Plugin, PropTween);
};
var _255 = 255;
var _colorLookup = {
  aqua: [0, _255, _255],
  lime: [0, _255, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, _255],
  navy: [0, 0, 128],
  white: [_255, _255, _255],
  olive: [128, 128, 0],
  yellow: [_255, _255, 0],
  orange: [_255, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [_255, 0, 0],
  pink: [_255, 192, 203],
  cyan: [0, _255, _255],
  transparent: [_255, _255, _255, 0]
};
var _hue = function _hue2(h, m1, m2) {
  h += h < 0 ? 1 : h > 1 ? -1 : 0;
  return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < 0.5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + 0.5 | 0;
};
var splitColor = function splitColor2(v, toHSL, forceAlpha) {
  var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
  if (!a) {
    if (v.substr(-1) === ",") {
      v = v.substr(0, v.length - 1);
    }
    if (_colorLookup[v]) {
      a = _colorLookup[v];
    } else if (v.charAt(0) === "#") {
      if (v.length < 6) {
        r = v.charAt(1);
        g = v.charAt(2);
        b = v.charAt(3);
        v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
      }
      if (v.length === 9) {
        a = parseInt(v.substr(1, 6), 16);
        return [a >> 16, a >> 8 & _255, a & _255, parseInt(v.substr(7), 16) / 255];
      }
      v = parseInt(v.substr(1), 16);
      a = [v >> 16, v >> 8 & _255, v & _255];
    } else if (v.substr(0, 3) === "hsl") {
      a = wasHSL = v.match(_strictNumExp);
      if (!toHSL) {
        h = +a[0] % 360 / 360;
        s = +a[1] / 100;
        l = +a[2] / 100;
        g = l <= 0.5 ? l * (s + 1) : l + s - l * s;
        r = l * 2 - g;
        a.length > 3 && (a[3] *= 1);
        a[0] = _hue(h + 1 / 3, r, g);
        a[1] = _hue(h, r, g);
        a[2] = _hue(h - 1 / 3, r, g);
      } else if (~v.indexOf("=")) {
        a = v.match(_numExp);
        forceAlpha && a.length < 4 && (a[3] = 1);
        return a;
      }
    } else {
      a = v.match(_strictNumExp) || _colorLookup.transparent;
    }
    a = a.map(Number);
  }
  if (toHSL && !wasHSL) {
    r = a[0] / _255;
    g = a[1] / _255;
    b = a[2] / _255;
    max = Math.max(r, g, b);
    min = Math.min(r, g, b);
    l = (max + min) / 2;
    if (max === min) {
      h = s = 0;
    } else {
      d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
      h *= 60;
    }
    a[0] = ~~(h + 0.5);
    a[1] = ~~(s * 100 + 0.5);
    a[2] = ~~(l * 100 + 0.5);
  }
  forceAlpha && a.length < 4 && (a[3] = 1);
  return a;
};
var _colorOrderData = function _colorOrderData2(v) {
  var values = [], c = [], i = -1;
  v.split(_colorExp).forEach(function(v2) {
    var a = v2.match(_numWithUnitExp) || [];
    values.push.apply(values, a);
    c.push(i += a.length + 1);
  });
  values.c = c;
  return values;
};
var _formatColors = function _formatColors2(s, toHSL, orderMatchData) {
  var result = "", colors4 = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
  if (!colors4) {
    return s;
  }
  colors4 = colors4.map(function(color) {
    return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
  });
  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;
    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;
      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors4.shift() || type + "0,0,0,0)" : (d.length ? d : colors4.length ? colors4 : orderMatchData).shift());
      }
    }
  }
  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;
    for (; i < l; i++) {
      result += shell[i] + colors4[i];
    }
  }
  return result + shell[l];
};
var _colorExp = function() {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", p;
  for (p in _colorLookup) {
    s += "|" + p + "\\b";
  }
  return new RegExp(s + ")", "gi");
}();
var _hslExp = /hsl[a]?\(/;
var _colorStringFilter = function _colorStringFilter2(a) {
  var combined = a.join(" "), toHSL;
  _colorExp.lastIndex = 0;
  if (_colorExp.test(combined)) {
    toHSL = _hslExp.test(combined);
    a[1] = _formatColors(a[1], toHSL);
    a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1]));
    return true;
  }
};
var _tickerActive;
var _ticker = function() {
  var _getTime4 = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime4(), _lastUpdate = _startTime, _gap = 1e3 / 240, _nextTime = _gap, _listeners3 = [], _id, _req, _raf, _self, _delta, _i2, _tick = function _tick2(v) {
    var elapsed = _getTime4() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
    elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
    _lastUpdate += elapsed;
    time = _lastUpdate - _startTime;
    overlap = time - _nextTime;
    if (overlap > 0 || manual) {
      frame = ++_self.frame;
      _delta = time - _self.time * 1e3;
      _self.time = time = time / 1e3;
      _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
      dispatch = 1;
    }
    manual || (_id = _req(_tick2));
    if (dispatch) {
      for (_i2 = 0; _i2 < _listeners3.length; _i2++) {
        _listeners3[_i2](time, _delta, frame, v);
      }
    }
  };
  _self = {
    time: 0,
    frame: 0,
    tick: function tick() {
      _tick(true);
    },
    deltaRatio: function deltaRatio(fps) {
      return _delta / (1e3 / (fps || 60));
    },
    wake: function wake() {
      if (_coreReady) {
        if (!_coreInitted && _windowExists()) {
          _win = _coreInitted = window;
          _doc = _win.document || {};
          _globals.gsap = gsap;
          (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
          _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
          _raf = _win.requestAnimationFrame;
        }
        _id && _self.sleep();
        _req = _raf || function(f) {
          return setTimeout(f, _nextTime - _self.time * 1e3 + 1 | 0);
        };
        _tickerActive = 1;
        _tick(2);
      }
    },
    sleep: function sleep() {
      (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
      _tickerActive = 0;
      _req = _emptyFunc;
    },
    lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
      _lagThreshold = threshold || 1 / _tinyNum;
      _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
    },
    fps: function fps(_fps) {
      _gap = 1e3 / (_fps || 240);
      _nextTime = _self.time * 1e3 + _gap;
    },
    add: function add(callback, once, prioritize) {
      var func = once ? function(t, d, f, v) {
        callback(t, d, f, v);
        _self.remove(func);
      } : callback;
      _self.remove(callback);
      _listeners3[prioritize ? "unshift" : "push"](func);
      _wake();
      return func;
    },
    remove: function remove(callback, i) {
      ~(i = _listeners3.indexOf(callback)) && _listeners3.splice(i, 1) && _i2 >= i && _i2--;
    },
    _listeners: _listeners3
  };
  return _self;
}();
var _wake = function _wake2() {
  return !_tickerActive && _ticker.wake();
};
var _easeMap = {};
var _customEaseExp = /^[\d.\-M][\d.\-,\s]/;
var _quotesExp = /["']/g;
var _parseObjectInString = function _parseObjectInString2(value) {
  var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
  for (; i < l; i++) {
    val = split[i];
    index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
    parsedVal = val.substr(0, index);
    obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
    key = val.substr(index + 1).trim();
  }
  return obj;
};
var _valueInParentheses = function _valueInParentheses2(value) {
  var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
  return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
};
var _configEaseFromString = function _configEaseFromString2(name) {
  var split = (name + "").split("("), ease = _easeMap[split[0]];
  return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
};
var _invertEase = function _invertEase2(ease) {
  return function(p) {
    return 1 - ease(1 - p);
  };
};
var _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
  var child = timeline2._first, ease;
  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase2(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase2(child.timeline, isYoyo);
      } else {
        ease = child._ease;
        child._ease = child._yEase;
        child._yEase = ease;
        child._yoyo = isYoyo;
      }
    }
    child = child._next;
  }
};
var _parseEase = function _parseEase2(ease, defaultEase) {
  return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
};
var _insertEase = function _insertEase2(names, easeIn, easeOut, easeInOut) {
  if (easeOut === void 0) {
    easeOut = function easeOut2(p) {
      return 1 - easeIn(1 - p);
    };
  }
  if (easeInOut === void 0) {
    easeInOut = function easeInOut2(p) {
      return p < 0.5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
  }
  var ease = {
    easeIn,
    easeOut,
    easeInOut
  }, lowercaseName;
  _forEachName(names, function(name) {
    _easeMap[name] = _globals[name] = ease;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
    for (var p in ease) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    }
  });
  return ease;
};
var _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
  return function(p) {
    return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
  };
};
var _configElastic = function _configElastic2(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);
  p2 = _2PI / p2;
  ease.config = function(amplitude2, period2) {
    return _configElastic2(type, amplitude2, period2);
  };
  return ease;
};
var _configBack = function _configBack2(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }
  var easeOut = function easeOut2(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);
  ease.config = function(overshoot2) {
    return _configBack2(type, overshoot2);
  };
  return ease;
};
_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
  var power = i < 5 ? i + 1 : i;
  _insertEase(name + ",Power" + (power - 1), i ? function(p) {
    return Math.pow(p, power);
  } : function(p) {
    return p;
  }, function(p) {
    return 1 - Math.pow(1 - p, power);
  }, function(p) {
    return p < 0.5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
  });
});
_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
(function(n, c) {
  var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut2(p) {
    return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + 0.75 : p < n3 ? n * (p -= 2.25 / c) * p + 0.9375 : n * Math.pow(p - 2.625 / c, 2) + 0.984375;
  };
  _insertEase("Bounce", function(p) {
    return 1 - easeOut(1 - p);
  }, easeOut);
})(7.5625, 2.75);
_insertEase("Expo", function(p) {
  return p ? Math.pow(2, 10 * (p - 1)) : 0;
});
_insertEase("Circ", function(p) {
  return -(_sqrt(1 - p * p) - 1);
});
_insertEase("Sine", function(p) {
  return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});
_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
  config: function config2(steps, immediateStart) {
    if (steps === void 0) {
      steps = 1;
    }
    var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
    return function(p) {
      return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
    };
  }
};
_defaults.ease = _easeMap["quad.out"];
_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
  return _callbackNames += name + "," + name + "Params,";
});
var GSCache = function GSCache2(target2, harness) {
  this.id = _gsID++;
  target2._gsap = this;
  this.target = target2;
  this.harness = harness;
  this.get = harness ? harness.get : _getProperty;
  this.set = harness ? harness.getSetter : _getSetter;
};
var Animation = /* @__PURE__ */ function() {
  function Animation2(vars) {
    this.vars = vars;
    this._delay = +vars.delay || 0;
    if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
      this._rDelay = vars.repeatDelay || 0;
      this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
    }
    this._ts = 1;
    _setDuration(this, +vars.duration, 1, 1);
    this.data = vars.data;
    if (_context) {
      this._ctx = _context;
      _context.data.push(this);
    }
    _tickerActive || _ticker.wake();
  }
  var _proto = Animation2.prototype;
  _proto.delay = function delay(value) {
    if (value || value === 0) {
      this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
      this._delay = value;
      return this;
    }
    return this._delay;
  };
  _proto.duration = function duration(value) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
  };
  _proto.totalDuration = function totalDuration(value) {
    if (!arguments.length) {
      return this._tDur;
    }
    this._dirty = 0;
    return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
  };
  _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
    _wake();
    if (!arguments.length) {
      return this._tTime;
    }
    var parent = this._dp;
    if (parent && parent.smoothChildTiming && this._ts) {
      _alignPlayhead(this, _totalTime);
      !parent._dp || parent.parent || _postAddChecks(parent, this);
      while (parent && parent.parent) {
        if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
          parent.totalTime(parent._tTime, true);
        }
        parent = parent.parent;
      }
      if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
        _addToTimeline(this._dp, this, this._start - this._delay);
      }
    }
    if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
      this._ts || (this._pTime = _totalTime);
      _lazySafeRender(this, _totalTime, suppressEvents);
    }
    return this;
  };
  _proto.time = function time(value, suppressEvents) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time;
  };
  _proto.totalProgress = function totalProgress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  };
  _proto.progress = function progress(value, suppressEvents) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  };
  _proto.iteration = function iteration(value, suppressEvents) {
    var cycleDuration = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
  };
  _proto.timeScale = function timeScale(value) {
    if (!arguments.length) {
      return this._rts === -_tinyNum ? 0 : this._rts;
    }
    if (this._rts === value) {
      return this;
    }
    var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime;
    this._rts = +value || 0;
    this._ts = this._ps || value === -_tinyNum ? 0 : this._rts;
    this.totalTime(_clamp(-this._delay, this._tDur, tTime), true);
    _setEnd(this);
    return _recacheAncestors(this);
  };
  _proto.paused = function paused(value) {
    if (!arguments.length) {
      return this._ps;
    }
    if (this._ps !== value) {
      this._ps = value;
      if (value) {
        this._pTime = this._tTime || Math.max(-this._delay, this.rawTime());
        this._ts = this._act = 0;
      } else {
        _wake();
        this._ts = this._rts;
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum));
      }
    }
    return this;
  };
  _proto.startTime = function startTime(value) {
    if (arguments.length) {
      this._start = value;
      var parent = this.parent || this._dp;
      parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
      return this;
    }
    return this._start;
  };
  _proto.endTime = function endTime(includeRepeats) {
    return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  };
  _proto.rawTime = function rawTime(wrapRepeats) {
    var parent = this.parent || this._dp;
    return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
  };
  _proto.revert = function revert(config4) {
    if (config4 === void 0) {
      config4 = _revertConfig;
    }
    var prevIsReverting = _reverting;
    _reverting = config4;
    if (this._initted || this._startAt) {
      this.timeline && this.timeline.revert(config4);
      this.totalTime(-0.01, config4.suppressEvents);
    }
    this.data !== "nested" && config4.kill !== false && this.kill();
    _reverting = prevIsReverting;
    return this;
  };
  _proto.globalTime = function globalTime(rawTime) {
    var animation = this, time = arguments.length ? rawTime : animation.rawTime();
    while (animation) {
      time = animation._start + time / (animation._ts || 1);
      animation = animation._dp;
    }
    return !this.parent && this.vars.immediateRender ? -1 : time;
  };
  _proto.repeat = function repeat(value) {
    if (arguments.length) {
      this._repeat = value === Infinity ? -2 : value;
      return _onUpdateTotalDuration(this);
    }
    return this._repeat === -2 ? Infinity : this._repeat;
  };
  _proto.repeatDelay = function repeatDelay(value) {
    if (arguments.length) {
      var time = this._time;
      this._rDelay = value;
      _onUpdateTotalDuration(this);
      return time ? this.time(time) : this;
    }
    return this._rDelay;
  };
  _proto.yoyo = function yoyo(value) {
    if (arguments.length) {
      this._yoyo = value;
      return this;
    }
    return this._yoyo;
  };
  _proto.seek = function seek(position2, suppressEvents) {
    return this.totalTime(_parsePosition(this, position2), _isNotFalse(suppressEvents));
  };
  _proto.restart = function restart(includeDelay, suppressEvents) {
    return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
  };
  _proto.play = function play(from, suppressEvents) {
    from != null && this.seek(from, suppressEvents);
    return this.reversed(false).paused(false);
  };
  _proto.reverse = function reverse(from, suppressEvents) {
    from != null && this.seek(from || this.totalDuration(), suppressEvents);
    return this.reversed(true).paused(false);
  };
  _proto.pause = function pause(atTime, suppressEvents) {
    atTime != null && this.seek(atTime, suppressEvents);
    return this.paused(true);
  };
  _proto.resume = function resume() {
    return this.paused(false);
  };
  _proto.reversed = function reversed(value) {
    if (arguments.length) {
      !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0));
      return this;
    }
    return this._rts < 0;
  };
  _proto.invalidate = function invalidate() {
    this._initted = this._act = 0;
    this._zTime = -_tinyNum;
    return this;
  };
  _proto.isActive = function isActive() {
    var parent = this.parent || this._dp, start = this._start, rawTime;
    return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
  };
  _proto.eventCallback = function eventCallback(type, callback, params) {
    var vars = this.vars;
    if (arguments.length > 1) {
      if (!callback) {
        delete vars[type];
      } else {
        vars[type] = callback;
        params && (vars[type + "Params"] = params);
        type === "onUpdate" && (this._onUpdate = callback);
      }
      return this;
    }
    return vars[type];
  };
  _proto.then = function then(onFulfilled) {
    var self2 = this;
    return new Promise(function(resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
        var _then = self2.then;
        self2.then = null;
        _isFunction(f) && (f = f(self2)) && (f.then || f === self2) && (self2.then = _then);
        resolve(f);
        self2.then = _then;
      };
      if (self2._initted && self2.totalProgress() === 1 && self2._ts >= 0 || !self2._tTime && self2._ts < 0) {
        _resolve();
      } else {
        self2._prom = _resolve;
      }
    });
  };
  _proto.kill = function kill() {
    _interrupt(this);
  };
  return Animation2;
}();
_setDefaults(Animation.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: false,
  parent: null,
  _initted: false,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -_tinyNum,
  _prom: 0,
  _ps: false,
  _rts: 1
});
var Timeline = /* @__PURE__ */ function(_Animation) {
  _inheritsLoose(Timeline2, _Animation);
  function Timeline2(vars, position2) {
    var _this;
    if (vars === void 0) {
      vars = {};
    }
    _this = _Animation.call(this, vars) || this;
    _this.labels = {};
    _this.smoothChildTiming = !!vars.smoothChildTiming;
    _this.autoRemoveChildren = !!vars.autoRemoveChildren;
    _this._sort = _isNotFalse(vars.sortChildren);
    _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position2);
    vars.reversed && _this.reverse();
    vars.paused && _this.paused(true);
    vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
    return _this;
  }
  var _proto2 = Timeline2.prototype;
  _proto2.to = function to(targets, vars, position2) {
    _createTweenType(0, arguments, this);
    return this;
  };
  _proto2.from = function from(targets, vars, position2) {
    _createTweenType(1, arguments, this);
    return this;
  };
  _proto2.fromTo = function fromTo(targets, fromVars, toVars, position2) {
    _createTweenType(2, arguments, this);
    return this;
  };
  _proto2.set = function set(targets, vars, position2) {
    vars.duration = 0;
    vars.parent = this;
    _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
    vars.immediateRender = !!vars.immediateRender;
    new Tween(targets, vars, _parsePosition(this, position2), 1);
    return this;
  };
  _proto2.call = function call(callback, params, position2) {
    return _addToTimeline(this, Tween.delayedCall(0, callback, params), position2);
  };
  _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position2, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position2));
    return this;
  };
  _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position2, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration, vars, stagger, position2, onCompleteAll, onCompleteAllParams);
  };
  _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position2, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration, toVars, stagger, position2, onCompleteAll, onCompleteAllParams);
  };
  _proto2.render = function render3(totalTime, suppressEvents, force) {
    var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
    this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
    if (tTime !== this._tTime || force || crossingStart) {
      if (prevTime !== this._time && dur) {
        tTime += this._time - prevTime;
        totalTime += this._time - prevTime;
      }
      time = tTime;
      prevStart = this._start;
      timeScale = this._ts;
      prevPaused = !timeScale;
      if (crossingStart) {
        dur || (prevTime = this._zTime);
        (totalTime || !suppressEvents) && (this._zTime = totalTime);
      }
      if (this._repeat) {
        yoyo = this._yoyo;
        cycleDuration = dur + this._rDelay;
        if (this._repeat < -1 && totalTime < 0) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }
        time = _roundPrecise(tTime % cycleDuration);
        if (tTime === tDur) {
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);
          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }
          time > dur && (time = dur);
        }
        prevIteration = _animationCycle(this._tTime, cycleDuration);
        !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration);
        if (yoyo && iteration & 1) {
          time = dur - time;
          isYoyo = 1;
        }
        if (iteration !== prevIteration && !this._lock) {
          var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
          iteration < prevIteration && (rewinding = !rewinding);
          prevTime = rewinding ? 0 : dur;
          this._lock = 1;
          this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
          this._tTime = tTime;
          !suppressEvents && this.parent && _callback(this, "onRepeat");
          this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
          if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) {
            return this;
          }
          dur = this._dur;
          tDur = this._tDur;
          if (doesWrap) {
            this._lock = 2;
            prevTime = rewinding ? dur : -1e-4;
            this.render(prevTime, true);
            this.vars.repeatRefresh && !isYoyo && this.invalidate();
          }
          this._lock = 0;
          if (!this._ts && !prevPaused) {
            return this;
          }
          _propagateYoyoEase(this, isYoyo);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2) {
        pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
        if (pauseTween) {
          tTime -= time - (time = pauseTween._start);
        }
      }
      this._tTime = tTime;
      this._time = time;
      this._act = !timeScale;
      if (!this._initted) {
        this._onUpdate = this.vars.onUpdate;
        this._initted = 1;
        this._zTime = totalTime;
        prevTime = 0;
      }
      if (!prevTime && time && !suppressEvents) {
        _callback(this, "onStart");
        if (this._tTime !== tTime) {
          return this;
        }
      }
      if (time >= prevTime && totalTime >= 0) {
        child = this._first;
        while (child) {
          next = child._next;
          if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              return this.render(totalTime, suppressEvents, force);
            }
            child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
            if (time !== this._time || !this._ts && !prevPaused) {
              pauseTween = 0;
              next && (tTime += this._zTime = -_tinyNum);
              break;
            }
          }
          child = next;
        }
      } else {
        child = this._last;
        var adjustedTime = totalTime < 0 ? totalTime : time;
        while (child) {
          next = child._prev;
          if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
            if (child.parent !== this) {
              return this.render(totalTime, suppressEvents, force);
            }
            child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force || _reverting && (child._initted || child._startAt));
            if (time !== this._time || !this._ts && !prevPaused) {
              pauseTween = 0;
              next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum);
              break;
            }
          }
          child = next;
        }
      }
      if (pauseTween && !suppressEvents) {
        this.pause();
        pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
        if (this._ts) {
          this._start = prevStart;
          _setEnd(this);
          return this.render(totalTime, suppressEvents, force);
        }
      }
      this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
      if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
        if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
          if (!this._lock) {
            (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
            if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
              _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
              this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
            }
          }
        }
      }
    }
    return this;
  };
  _proto2.add = function add(child, position2) {
    var _this2 = this;
    _isNumber(position2) || (position2 = _parsePosition(this, position2, child));
    if (!(child instanceof Animation)) {
      if (_isArray(child)) {
        child.forEach(function(obj) {
          return _this2.add(obj, position2);
        });
        return this;
      }
      if (_isString(child)) {
        return this.addLabel(child, position2);
      }
      if (_isFunction(child)) {
        child = Tween.delayedCall(0, child);
      } else {
        return this;
      }
    }
    return this !== child ? _addToTimeline(this, child, position2) : this;
  };
  _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
    if (nested === void 0) {
      nested = true;
    }
    if (tweens === void 0) {
      tweens = true;
    }
    if (timelines === void 0) {
      timelines = true;
    }
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = -_bigNum;
    }
    var a = [], child = this._first;
    while (child) {
      if (child._start >= ignoreBeforeTime) {
        if (child instanceof Tween) {
          tweens && a.push(child);
        } else {
          timelines && a.push(child);
          nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
        }
      }
      child = child._next;
    }
    return a;
  };
  _proto2.getById = function getById2(id) {
    var animations = this.getChildren(1, 1, 1), i = animations.length;
    while (i--) {
      if (animations[i].vars.id === id) {
        return animations[i];
      }
    }
  };
  _proto2.remove = function remove(child) {
    if (_isString(child)) {
      return this.removeLabel(child);
    }
    if (_isFunction(child)) {
      return this.killTweensOf(child);
    }
    _removeLinkedListItem(this, child);
    if (child === this._recent) {
      this._recent = this._last;
    }
    return _uncache(this);
  };
  _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
    if (!arguments.length) {
      return this._tTime;
    }
    this._forcing = 1;
    if (!this._dp && this._ts) {
      this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
    }
    _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
    this._forcing = 0;
    return this;
  };
  _proto2.addLabel = function addLabel(label, position2) {
    this.labels[label] = _parsePosition(this, position2);
    return this;
  };
  _proto2.removeLabel = function removeLabel(label) {
    delete this.labels[label];
    return this;
  };
  _proto2.addPause = function addPause(position2, callback, params) {
    var t = Tween.delayedCall(0, callback || _emptyFunc, params);
    t.data = "isPause";
    this._hasPause = 1;
    return _addToTimeline(this, t, _parsePosition(this, position2));
  };
  _proto2.removePause = function removePause(position2) {
    var child = this._first;
    position2 = _parsePosition(this, position2);
    while (child) {
      if (child._start === position2 && child.data === "isPause") {
        _removeFromParent(child);
      }
      child = child._next;
    }
  };
  _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
    while (i--) {
      _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
    }
    return this;
  };
  _proto2.getTweensOf = function getTweensOf2(targets, onlyActive) {
    var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), children;
    while (child) {
      if (child instanceof Tween) {
        if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
          a.push(child);
        }
      } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
        a.push.apply(a, children);
      }
      child = child._next;
    }
    return a;
  };
  _proto2.tweenTo = function tweenTo(position2, vars) {
    vars = vars || {};
    var tl = this, endTime = _parsePosition(tl, position2), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
      ease: vars.ease || "none",
      lazy: false,
      immediateRender: false,
      time: endTime,
      overwrite: "auto",
      duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
      onStart: function onStart() {
        tl.pause();
        if (!initted) {
          var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
          initted = 1;
        }
        _onStart && _onStart.apply(tween, onStartParams || []);
      }
    }, vars));
    return immediateRender ? tween.render(0) : tween;
  };
  _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
    return this.tweenTo(toPosition, _setDefaults({
      startAt: {
        time: _parsePosition(this, fromPosition)
      }
    }, vars));
  };
  _proto2.recent = function recent() {
    return this._recent;
  };
  _proto2.nextLabel = function nextLabel(afterTime) {
    if (afterTime === void 0) {
      afterTime = this._time;
    }
    return _getLabelInDirection(this, _parsePosition(this, afterTime));
  };
  _proto2.previousLabel = function previousLabel(beforeTime) {
    if (beforeTime === void 0) {
      beforeTime = this._time;
    }
    return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
  };
  _proto2.currentLabel = function currentLabel(value) {
    return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
  };
  _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
    if (ignoreBeforeTime === void 0) {
      ignoreBeforeTime = 0;
    }
    var child = this._first, labels = this.labels, p;
    while (child) {
      if (child._start >= ignoreBeforeTime) {
        child._start += amount;
        child._end += amount;
      }
      child = child._next;
    }
    if (adjustLabels) {
      for (p in labels) {
        if (labels[p] >= ignoreBeforeTime) {
          labels[p] += amount;
        }
      }
    }
    return _uncache(this);
  };
  _proto2.invalidate = function invalidate(soft) {
    var child = this._first;
    this._lock = 0;
    while (child) {
      child.invalidate(soft);
      child = child._next;
    }
    return _Animation.prototype.invalidate.call(this, soft);
  };
  _proto2.clear = function clear(includeLabels) {
    if (includeLabels === void 0) {
      includeLabels = true;
    }
    var child = this._first, next;
    while (child) {
      next = child._next;
      this.remove(child);
      child = next;
    }
    this._dp && (this._time = this._tTime = this._pTime = 0);
    includeLabels && (this.labels = {});
    return _uncache(this);
  };
  _proto2.totalDuration = function totalDuration(value) {
    var max = 0, self2 = this, child = self2._last, prevStart = _bigNum, prev, start, parent;
    if (arguments.length) {
      return self2.timeScale((self2._repeat < 0 ? self2.duration() : self2.totalDuration()) / (self2.reversed() ? -value : value));
    }
    if (self2._dirty) {
      parent = self2.parent;
      while (child) {
        prev = child._prev;
        child._dirty && child.totalDuration();
        start = child._start;
        if (start > prevStart && self2._sort && child._ts && !self2._lock) {
          self2._lock = 1;
          _addToTimeline(self2, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }
        if (start < 0 && child._ts) {
          max -= start;
          if (!parent && !self2._dp || parent && parent.smoothChildTiming) {
            self2._start += start / self2._ts;
            self2._time -= start;
            self2._tTime -= start;
          }
          self2.shiftChildren(-start, false, -Infinity);
          prevStart = 0;
        }
        child._end > max && child._ts && (max = child._end);
        child = prev;
      }
      _setDuration(self2, self2 === _globalTimeline && self2._time > max ? self2._time : max, 1, 1);
      self2._dirty = 0;
    }
    return self2._tDur;
  };
  Timeline2.updateRoot = function updateRoot(time) {
    if (_globalTimeline._ts) {
      _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
      _lastRenderedFrame = _ticker.frame;
    }
    if (_ticker.frame >= _nextGCFrame) {
      _nextGCFrame += _config.autoSleep || 120;
      var child = _globalTimeline._first;
      if (!child || !child._ts) {
        if (_config.autoSleep && _ticker._listeners.length < 2) {
          while (child && !child._ts) {
            child = child._next;
          }
          child || _ticker.sleep();
        }
      }
    }
  };
  return Timeline2;
}(Animation);
_setDefaults(Timeline.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var _addComplexStringPropTween = function _addComplexStringPropTween2(target2, prop, start, end, setter, stringFilter, funcParam) {
  var pt = new PropTween(this._pt, target2, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
  pt.b = start;
  pt.e = end;
  start += "";
  end += "";
  if (hasRandom = ~end.indexOf("random(")) {
    end = _replaceRandom(end);
  }
  if (stringFilter) {
    a = [start, end];
    stringFilter(a, target2, prop);
    start = a[0];
    end = a[1];
  }
  startNums = start.match(_complexStringNumExp) || [];
  while (result = _complexStringNumExp.exec(end)) {
    endNum = result[0];
    chunk = end.substring(index, result.index);
    if (color) {
      color = (color + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color = 1;
    }
    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0;
      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        s: startNum,
        c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
        m: color && color < 4 ? Math.round : 0
      };
      index = _complexStringNumExp.lastIndex;
    }
  }
  pt.c = index < end.length ? end.substring(index, end.length) : "";
  pt.fp = funcParam;
  if (_relExp.test(end) || hasRandom) {
    pt.e = 0;
  }
  this._pt = pt;
  return pt;
};
var _addPropTween = function _addPropTween2(target2, prop, start, end, index, targets, modifier, stringFilter, funcParam, optional) {
  _isFunction(end) && (end = end(index || 0, target2, targets));
  var currentValue = target2[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target2[prop.indexOf("set") || !_isFunction(target2["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target2[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
  if (_isString(end)) {
    if (~end.indexOf("random(")) {
      end = _replaceRandom(end);
    }
    if (end.charAt(1) === "=") {
      pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
      if (pt || pt === 0) {
        end = pt;
      }
    }
  }
  if (!optional || parsedStart !== end || _forceAllPropTweens) {
    if (!isNaN(parsedStart * end) && end !== "") {
      pt = new PropTween(this._pt, target2, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
      funcParam && (pt.fp = funcParam);
      modifier && pt.modifier(modifier, this, target2);
      return this._pt = pt;
    }
    !currentValue && !(prop in target2) && _missingPlugin(prop, end);
    return _addComplexStringPropTween.call(this, target2, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
  }
};
var _processVars = function _processVars2(vars, index, target2, targets, tween) {
  _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target2, targets));
  if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
    return _isString(vars) ? _parseFuncOrString(vars, tween, index, target2, targets) : vars;
  }
  var copy = {}, p;
  for (p in vars) {
    copy[p] = _parseFuncOrString(vars[p], tween, index, target2, targets);
  }
  return copy;
};
var _checkPlugin = function _checkPlugin2(property, vars, tween, index, target2, targets) {
  var plugin, pt, ptLookup, i;
  if (_plugins[property] && (plugin = new _plugins[property]()).init(target2, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target2, targets, tween), tween, index, targets) !== false) {
    tween._pt = pt = new PropTween(tween._pt, target2, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
    if (tween !== _quickTween) {
      ptLookup = tween._ptLookup[tween._targets.indexOf(target2)];
      i = plugin._props.length;
      while (i--) {
        ptLookup[plugin._props[i]] = pt;
      }
    }
  }
  return plugin;
};
var _overwritingTween;
var _forceAllPropTweens;
var _initTween = function _initTween2(tween, time, tTime) {
  var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes2 = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target2, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
  tl && (!keyframes2 || !ease) && (ease = "none");
  tween._ease = _parseEase(ease, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
  if (yoyoEase && tween._yoyo && !tween._repeat) {
    yoyoEase = tween._yEase;
    tween._yEase = tween._ease;
    tween._ease = yoyoEase;
  }
  tween._from = !tl && !!vars.runBackwards;
  if (!tl || keyframes2 && !vars.stagger) {
    harness = targets[0] ? _getCache(targets[0]).harness : 0;
    harnessVars = harness && vars[harness.prop];
    cleanVars = _copyExcluding(vars, _reservedProps);
    if (prevStartAt) {
      prevStartAt._zTime < 0 && prevStartAt.progress(1);
      time < 0 && runBackwards && immediateRender && !autoRevert ? prevStartAt.render(-1, true) : prevStartAt.revert(runBackwards && dur ? _revertConfigNoKill : _startAtRevertConfig);
      prevStartAt._lazy = 0;
    }
    if (startAt) {
      _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
        data: "isStart",
        overwrite: false,
        parent,
        immediateRender: true,
        lazy: _isNotFalse(lazy),
        startAt: null,
        delay: 0,
        onUpdate,
        onUpdateParams,
        callbackScope,
        stagger: 0
      }, startAt)));
      tween._startAt._dp = 0;
      time < 0 && (_reverting || !immediateRender && !autoRevert) && tween._startAt.revert(_revertConfigNoKill);
      if (immediateRender) {
        if (dur && time <= 0 && tTime <= 0) {
          time && (tween._zTime = time);
          return;
        }
      }
    } else if (runBackwards && dur) {
      if (!prevStartAt) {
        time && (immediateRender = false);
        p = _setDefaults({
          overwrite: false,
          data: "isFromStart",
          lazy: immediateRender && _isNotFalse(lazy),
          immediateRender,
          stagger: 0,
          parent
        }, cleanVars);
        harnessVars && (p[harness.prop] = harnessVars);
        _removeFromParent(tween._startAt = Tween.set(targets, p));
        tween._startAt._dp = 0;
        time < 0 && (_reverting ? tween._startAt.revert(_revertConfigNoKill) : tween._startAt.render(-1, true));
        tween._zTime = time;
        if (!immediateRender) {
          _initTween2(tween._startAt, _tinyNum, _tinyNum);
        } else if (!time) {
          return;
        }
      }
    }
    tween._pt = tween._ptCache = 0;
    lazy = dur && _isNotFalse(lazy) || lazy && !dur;
    for (i = 0; i < targets.length; i++) {
      target2 = targets[i];
      gsData = target2._gsap || _harness(targets)[i]._gsap;
      tween._ptLookup[i] = ptLookup = {};
      _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender();
      index = fullTargets === targets ? i : fullTargets.indexOf(target2);
      if (harness && (plugin = new harness()).init(target2, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target2, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
        plugin._props.forEach(function(name) {
          ptLookup[name] = pt;
        });
        plugin.priority && (hasPriority = 1);
      }
      if (!harness || harnessVars) {
        for (p in cleanVars) {
          if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target2, fullTargets))) {
            plugin.priority && (hasPriority = 1);
          } else {
            ptLookup[p] = pt = _addPropTween.call(tween, target2, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
          }
        }
      }
      tween._op && tween._op[i] && tween.kill(target2, tween._op[i]);
      if (autoOverwrite && tween._pt) {
        _overwritingTween = tween;
        _globalTimeline.killTweensOf(target2, ptLookup, tween.globalTime(time));
        overwritten = !tween.parent;
        _overwritingTween = 0;
      }
      tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
    }
    hasPriority && _sortPropTweensByPriority(tween);
    tween._onInit && tween._onInit(tween);
  }
  tween._onUpdate = onUpdate;
  tween._initted = (!tween._op || tween._pt) && !overwritten;
  keyframes2 && time <= 0 && tl.render(_bigNum, true, true);
};
var _updatePropTweens = function _updatePropTweens2(tween, property, value, start, startIsRelative, ratio, time) {
  var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, rootPT, lookup, i;
  if (!ptCache) {
    ptCache = tween._ptCache[property] = [];
    lookup = tween._ptLookup;
    i = tween._targets.length;
    while (i--) {
      pt = lookup[i][property];
      if (pt && pt.d && pt.d._pt) {
        pt = pt.d._pt;
        while (pt && pt.p !== property && pt.fp !== property) {
          pt = pt._next;
        }
      }
      if (!pt) {
        _forceAllPropTweens = 1;
        tween.vars[property] = "+=0";
        _initTween(tween, time);
        _forceAllPropTweens = 0;
        return 1;
      }
      ptCache.push(pt);
    }
  }
  i = ptCache.length;
  while (i--) {
    rootPT = ptCache[i];
    pt = rootPT._pt || rootPT;
    pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
    pt.c = value - pt.s;
    rootPT.e && (rootPT.e = _round(value) + getUnit(rootPT.e));
    rootPT.b && (rootPT.b = pt.s + getUnit(rootPT.b));
  }
};
var _addAliasesToVars = function _addAliasesToVars2(targets, vars) {
  var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
  if (!propertyAliases) {
    return vars;
  }
  copy = _merge({}, vars);
  for (p in propertyAliases) {
    if (p in copy) {
      aliases = propertyAliases[p].split(",");
      i = aliases.length;
      while (i--) {
        copy[aliases[i]] = copy[p];
      }
    }
  }
  return copy;
};
var _parseKeyframe = function _parseKeyframe2(prop, obj, allProps, easeEach) {
  var ease = obj.ease || easeEach || "power1.inOut", p, a;
  if (_isArray(obj)) {
    a = allProps[prop] || (allProps[prop] = []);
    obj.forEach(function(value, i) {
      return a.push({
        t: i / (obj.length - 1) * 100,
        v: value,
        e: ease
      });
    });
  } else {
    for (p in obj) {
      a = allProps[p] || (allProps[p] = []);
      p === "ease" || a.push({
        t: parseFloat(prop),
        v: obj[p],
        e: ease
      });
    }
  }
};
var _parseFuncOrString = function _parseFuncOrString2(value, tween, i, target2, targets) {
  return _isFunction(value) ? value.call(tween, i, target2, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
};
var _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert";
var _staggerPropsToSkip = {};
_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
  return _staggerPropsToSkip[name] = 1;
});
var Tween = /* @__PURE__ */ function(_Animation2) {
  _inheritsLoose(Tween2, _Animation2);
  function Tween2(targets, vars, position2, skipInherit) {
    var _this3;
    if (typeof vars === "number") {
      position2.duration = vars;
      vars = position2;
      position2 = null;
    }
    _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
    var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes2 = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = [];
    _this3._overwrite = overwrite;
    if (keyframes2 || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults2 || {},
        targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
      });
      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;
      if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
        l = parsedTargets.length;
        staggerFunc = stagger && distribute(stagger);
        if (_isObject(stagger)) {
          for (p in stagger) {
            if (~_staggerTweenProps.indexOf(p)) {
              staggerVarsToMerge || (staggerVarsToMerge = {});
              staggerVarsToMerge[p] = stagger[p];
            }
          }
        }
        for (i = 0; i < l; i++) {
          copy = _copyExcluding(vars, _staggerPropsToSkip);
          copy.stagger = 0;
          yoyoEase && (copy.yoyoEase = yoyoEase);
          staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
          curTarget = parsedTargets[i];
          copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
          if (!stagger && l === 1 && copy.delay) {
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }
          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }
        tl.duration() ? duration = delay = 0 : _this3.timeline = 0;
      } else if (keyframes2) {
        _inheritDefaults(_setDefaults(tl.vars.defaults, {
          ease: "none"
        }));
        tl._ease = _parseEase(keyframes2.ease || vars.ease || "none");
        var time = 0, a, kf, v;
        if (_isArray(keyframes2)) {
          keyframes2.forEach(function(frame) {
            return tl.to(parsedTargets, frame, ">");
          });
          tl.duration();
        } else {
          copy = {};
          for (p in keyframes2) {
            p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes2[p], copy, keyframes2.easeEach);
          }
          for (p in copy) {
            a = copy[p].sort(function(a2, b) {
              return a2.t - b.t;
            });
            time = 0;
            for (i = 0; i < a.length; i++) {
              kf = a[i];
              v = {
                ease: kf.e,
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }
          tl.duration() < duration && tl.to({}, {
            duration: duration - tl.duration()
          });
        }
      }
      duration || _this3.duration(duration = tl.duration());
    } else {
      _this3.timeline = 0;
    }
    if (overwrite === true && !_suppressOverwrites) {
      _overwritingTween = _assertThisInitialized(_this3);
      _globalTimeline.killTweensOf(parsedTargets);
      _overwritingTween = 0;
    }
    _addToTimeline(parent, _assertThisInitialized(_this3), position2);
    vars.reversed && _this3.reverse();
    vars.paused && _this3.paused(true);
    if (immediateRender || !duration && !keyframes2 && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum;
      _this3.render(Math.max(0, -delay) || 0);
    }
    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }
  var _proto3 = Tween2.prototype;
  _proto3.render = function render3(totalTime, suppressEvents, force) {
    var prevTime = this._time, tDur = this._tDur, dur = this._dur, isNegative = totalTime < 0, tTime = totalTime > tDur - _tinyNum && !isNegative ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline2, yoyoEase;
    if (!dur) {
      _renderZeroDurationTween(this, totalTime, suppressEvents, force);
    } else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== isNegative) {
      time = tTime;
      timeline2 = this.timeline;
      if (this._repeat) {
        cycleDuration = dur + this._rDelay;
        if (this._repeat < -1 && isNegative) {
          return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
        }
        time = _roundPrecise(tTime % cycleDuration);
        if (tTime === tDur) {
          iteration = this._repeat;
          time = dur;
        } else {
          iteration = ~~(tTime / cycleDuration);
          if (iteration && iteration === tTime / cycleDuration) {
            time = dur;
            iteration--;
          }
          time > dur && (time = dur);
        }
        isYoyo = this._yoyo && iteration & 1;
        if (isYoyo) {
          yoyoEase = this._yEase;
          time = dur - time;
        }
        prevIteration = _animationCycle(this._tTime, cycleDuration);
        if (time === prevTime && !force && this._initted) {
          this._tTime = tTime;
          return this;
        }
        if (iteration !== prevIteration) {
          timeline2 && this._yEase && _propagateYoyoEase(timeline2, isYoyo);
          if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
            this._lock = force = 1;
            this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
          }
        }
      }
      if (!this._initted) {
        if (_attemptInitTween(this, isNegative ? totalTime : time, force, suppressEvents, tTime)) {
          this._tTime = 0;
          return this;
        }
        if (prevTime !== this._time) {
          return this;
        }
        if (dur !== this._dur) {
          return this.render(totalTime, suppressEvents, force);
        }
      }
      this._tTime = tTime;
      this._time = time;
      if (!this._act && this._ts) {
        this._act = 1;
        this._lazy = 0;
      }
      this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
      if (this._from) {
        this.ratio = ratio = 1 - ratio;
      }
      if (time && !prevTime && !suppressEvents) {
        _callback(this, "onStart");
        if (this._tTime !== tTime) {
          return this;
        }
      }
      pt = this._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
      timeline2 && timeline2.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline2._dur * timeline2._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
      if (this._onUpdate && !suppressEvents) {
        isNegative && _rewindStartAt(this, totalTime, suppressEvents, force);
        _callback(this, "onUpdate");
      }
      this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
      if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
        isNegative && !this._onUpdate && _rewindStartAt(this, totalTime, true, true);
        (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1);
        if (!suppressEvents && !(isNegative && !prevTime) && (tTime || prevTime || isYoyo)) {
          _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
          this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
        }
      }
    }
    return this;
  };
  _proto3.targets = function targets() {
    return this._targets;
  };
  _proto3.invalidate = function invalidate(soft) {
    (!soft || !this.vars.runBackwards) && (this._startAt = 0);
    this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0;
    this._ptLookup = [];
    this.timeline && this.timeline.invalidate(soft);
    return _Animation2.prototype.invalidate.call(this, soft);
  };
  _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
    _tickerActive || _ticker.wake();
    this._ts || this.play();
    var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
    this._initted || _initTween(this, time);
    ratio = this._ease(time / this._dur);
    if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) {
      return this.resetTo(property, value, start, startIsRelative);
    }
    _alignPlayhead(this, 0);
    this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
    return this.render(0);
  };
  _proto3.kill = function kill(targets, vars) {
    if (vars === void 0) {
      vars = "all";
    }
    if (!targets && (!vars || vars === "all")) {
      this._lazy = this._pt = 0;
      return this.parent ? _interrupt(this) : this;
    }
    if (this.timeline) {
      var tDur = this.timeline.totalDuration();
      this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this);
      this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1);
      return this;
    }
    var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
    if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
      vars === "all" && (this._pt = 0);
      return _interrupt(this);
    }
    overwrittenProps = this._op = this._op || [];
    if (vars !== "all") {
      if (_isString(vars)) {
        p = {};
        _forEachName(vars, function(name) {
          return p[name] = 1;
        });
        vars = p;
      }
      vars = _addAliasesToVars(parsedTargets, vars);
    }
    i = parsedTargets.length;
    while (i--) {
      if (~killingTargets.indexOf(parsedTargets[i])) {
        curLookup = propTweenLookup[i];
        if (vars === "all") {
          overwrittenProps[i] = vars;
          props = curLookup;
          curOverwriteProps = {};
        } else {
          curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
          props = vars;
        }
        for (p in props) {
          pt = curLookup && curLookup[p];
          if (pt) {
            if (!("kill" in pt.d) || pt.d.kill(p) === true) {
              _removeLinkedListItem(this, pt, "_pt");
            }
            delete curLookup[p];
          }
          if (curOverwriteProps !== "all") {
            curOverwriteProps[p] = 1;
          }
        }
      }
    }
    this._initted && !this._pt && firstPT && _interrupt(this);
    return this;
  };
  Tween2.to = function to(targets, vars) {
    return new Tween2(targets, vars, arguments[2]);
  };
  Tween2.from = function from(targets, vars) {
    return _createTweenType(1, arguments);
  };
  Tween2.delayedCall = function delayedCall(delay, callback, params, scope) {
    return new Tween2(callback, 0, {
      immediateRender: false,
      lazy: false,
      overwrite: false,
      delay,
      onComplete: callback,
      onReverseComplete: callback,
      onCompleteParams: params,
      onReverseCompleteParams: params,
      callbackScope: scope
    });
  };
  Tween2.fromTo = function fromTo(targets, fromVars, toVars) {
    return _createTweenType(2, arguments);
  };
  Tween2.set = function set(targets, vars) {
    vars.duration = 0;
    vars.repeatDelay || (vars.repeat = 0);
    return new Tween2(targets, vars);
  };
  Tween2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
    return _globalTimeline.killTweensOf(targets, props, onlyActive);
  };
  return Tween2;
}(Animation);
_setDefaults(Tween.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
_forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
  Tween[name] = function() {
    var tl = new Timeline(), params = _slice.call(arguments, 0);
    params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
    return tl[name].apply(tl, params);
  };
});
var _setterPlain = function _setterPlain2(target2, property, value) {
  return target2[property] = value;
};
var _setterFunc = function _setterFunc2(target2, property, value) {
  return target2[property](value);
};
var _setterFuncWithParam = function _setterFuncWithParam2(target2, property, value, data) {
  return target2[property](data.fp, value);
};
var _setterAttribute = function _setterAttribute2(target2, property, value) {
  return target2.setAttribute(property, value);
};
var _getSetter = function _getSetter2(target2, property) {
  return _isFunction(target2[property]) ? _setterFunc : _isUndefined(target2[property]) && target2.setAttribute ? _setterAttribute : _setterPlain;
};
var _renderPlain = function _renderPlain2(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e6) / 1e6, data);
};
var _renderBoolean = function _renderBoolean2(ratio, data) {
  return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
};
var _renderComplexString = function _renderComplexString2(ratio, data) {
  var pt = data._pt, s = "";
  if (!ratio && data.b) {
    s = data.b;
  } else if (ratio === 1 && data.e) {
    s = data.e;
  } else {
    while (pt) {
      s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 1e4) / 1e4) + s;
      pt = pt._next;
    }
    s += data.c;
  }
  data.set(data.t, data.p, s, data);
};
var _renderPropTweens = function _renderPropTweens2(ratio, data) {
  var pt = data._pt;
  while (pt) {
    pt.r(ratio, pt.d);
    pt = pt._next;
  }
};
var _addPluginModifier = function _addPluginModifier2(modifier, tween, target2, property) {
  var pt = this._pt, next;
  while (pt) {
    next = pt._next;
    pt.p === property && pt.modifier(modifier, tween, target2);
    pt = next;
  }
};
var _killPropTweensOf = function _killPropTweensOf2(property) {
  var pt = this._pt, hasNonDependentRemaining, next;
  while (pt) {
    next = pt._next;
    if (pt.p === property && !pt.op || pt.op === property) {
      _removeLinkedListItem(this, pt, "_pt");
    } else if (!pt.dep) {
      hasNonDependentRemaining = 1;
    }
    pt = next;
  }
  return !hasNonDependentRemaining;
};
var _setterWithModifier = function _setterWithModifier2(target2, property, value, data) {
  data.mSet(target2, property, data.m.call(data.tween, value, data.mt), data);
};
var _sortPropTweensByPriority = function _sortPropTweensByPriority2(parent) {
  var pt = parent._pt, next, pt2, first, last;
  while (pt) {
    next = pt._next;
    pt2 = first;
    while (pt2 && pt2.pr > pt.pr) {
      pt2 = pt2._next;
    }
    if (pt._prev = pt2 ? pt2._prev : last) {
      pt._prev._next = pt;
    } else {
      first = pt;
    }
    if (pt._next = pt2) {
      pt2._prev = pt;
    } else {
      last = pt;
    }
    pt = next;
  }
  parent._pt = first;
};
var PropTween = /* @__PURE__ */ function() {
  function PropTween2(next, target2, prop, start, change, renderer, data, setter, priority) {
    this.t = target2;
    this.s = start;
    this.c = change;
    this.p = prop;
    this.r = renderer || _renderPlain;
    this.d = data || this;
    this.set = setter || _setterPlain;
    this.pr = priority || 0;
    this._next = next;
    if (next) {
      next._prev = this;
    }
  }
  var _proto4 = PropTween2.prototype;
  _proto4.modifier = function modifier(func, tween, target2) {
    this.mSet = this.mSet || this.set;
    this.set = _setterWithModifier;
    this.m = func;
    this.mt = target2;
    this.tween = tween;
  };
  return PropTween2;
}();
_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
  return _reservedProps[name] = 1;
});
_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
  sortChildren: false,
  defaults: _defaults,
  autoRemoveChildren: true,
  id: "root",
  smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
var _media = [];
var _listeners = {};
var _emptyArray = [];
var _lastMediaTime = 0;
var _dispatch = function _dispatch2(type) {
  return (_listeners[type] || _emptyArray).map(function(f) {
    return f();
  });
};
var _onMediaChange = function _onMediaChange2() {
  var time = Date.now(), matches = [];
  if (time - _lastMediaTime > 2) {
    _dispatch("matchMediaInit");
    _media.forEach(function(c) {
      var queries = c.queries, conditions = c.conditions, match, p, anyMatch, toggled;
      for (p in queries) {
        match = _win.matchMedia(queries[p]).matches;
        match && (anyMatch = 1);
        if (match !== conditions[p]) {
          conditions[p] = match;
          toggled = 1;
        }
      }
      if (toggled) {
        c.revert();
        anyMatch && matches.push(c);
      }
    });
    _dispatch("matchMediaRevert");
    matches.forEach(function(c) {
      return c.onMatch(c);
    });
    _lastMediaTime = time;
    _dispatch("matchMedia");
  }
};
var Context = /* @__PURE__ */ function() {
  function Context2(func, scope) {
    this.selector = scope && selector(scope);
    this.data = [];
    this._r = [];
    this.isReverted = false;
    func && this.add(func);
  }
  var _proto5 = Context2.prototype;
  _proto5.add = function add(name, func, scope) {
    if (_isFunction(name)) {
      scope = func;
      func = name;
      name = _isFunction;
    }
    var self2 = this, f = function f2() {
      var prev = _context, prevSelector = self2.selector, result;
      prev && prev !== self2 && prev.data.push(self2);
      scope && (self2.selector = selector(scope));
      _context = self2;
      result = func.apply(self2, arguments);
      _isFunction(result) && self2._r.push(result);
      _context = prev;
      self2.selector = prevSelector;
      self2.isReverted = false;
      return result;
    };
    self2.last = f;
    return name === _isFunction ? f(self2) : name ? self2[name] = f : f;
  };
  _proto5.ignore = function ignore(func) {
    var prev = _context;
    _context = null;
    func(this);
    _context = prev;
  };
  _proto5.getTweens = function getTweens() {
    var a = [];
    this.data.forEach(function(e) {
      return e instanceof Context2 ? a.push.apply(a, e.getTweens()) : e instanceof Tween && !(e.parent && e.parent.data === "nested") && a.push(e);
    });
    return a;
  };
  _proto5.clear = function clear() {
    this._r.length = this.data.length = 0;
  };
  _proto5.kill = function kill(revert, matchMedia2) {
    var _this4 = this;
    if (revert) {
      var tweens = this.getTweens();
      this.data.forEach(function(t) {
        if (t.data === "isFlip") {
          t.revert();
          t.getChildren(true, true, false).forEach(function(tween) {
            return tweens.splice(tweens.indexOf(tween), 1);
          });
        }
      });
      tweens.map(function(t) {
        return {
          g: t.globalTime(0),
          t
        };
      }).sort(function(a, b) {
        return b.g - a.g || -1;
      }).forEach(function(o) {
        return o.t.revert(revert);
      });
      this.data.forEach(function(e) {
        return !(e instanceof Animation) && e.revert && e.revert(revert);
      });
      this._r.forEach(function(f) {
        return f(revert, _this4);
      });
      this.isReverted = true;
    } else {
      this.data.forEach(function(e) {
        return e.kill && e.kill();
      });
    }
    this.clear();
    if (matchMedia2) {
      var i = _media.indexOf(this);
      !!~i && _media.splice(i, 1);
    }
  };
  _proto5.revert = function revert(config4) {
    this.kill(config4 || {});
  };
  return Context2;
}();
var MatchMedia = /* @__PURE__ */ function() {
  function MatchMedia2(scope) {
    this.contexts = [];
    this.scope = scope;
  }
  var _proto6 = MatchMedia2.prototype;
  _proto6.add = function add(conditions, func, scope) {
    _isObject(conditions) || (conditions = {
      matches: conditions
    });
    var context3 = new Context(0, scope || this.scope), cond = context3.conditions = {}, mq, p, active;
    this.contexts.push(context3);
    func = context3.add("onMatch", func);
    context3.queries = conditions;
    for (p in conditions) {
      if (p === "all") {
        active = 1;
      } else {
        mq = _win.matchMedia(conditions[p]);
        if (mq) {
          _media.indexOf(context3) < 0 && _media.push(context3);
          (cond[p] = mq.matches) && (active = 1);
          mq.addListener ? mq.addListener(_onMediaChange) : mq.addEventListener("change", _onMediaChange);
        }
      }
    }
    active && func(context3);
    return this;
  };
  _proto6.revert = function revert(config4) {
    this.kill(config4 || {});
  };
  _proto6.kill = function kill(revert) {
    this.contexts.forEach(function(c) {
      return c.kill(revert, true);
    });
  };
  return MatchMedia2;
}();
var _gsap = {
  registerPlugin: function registerPlugin() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    args.forEach(function(config4) {
      return _createPlugin(config4);
    });
  },
  timeline: function timeline(vars) {
    return new Timeline(vars);
  },
  getTweensOf: function getTweensOf(targets, onlyActive) {
    return _globalTimeline.getTweensOf(targets, onlyActive);
  },
  getProperty: function getProperty(target2, property, unit, uncache) {
    _isString(target2) && (target2 = toArray(target2)[0]);
    var getter = _getCache(target2 || {}).get, format = unit ? _passThrough : _numericIfPossible;
    unit === "native" && (unit = "");
    return !target2 ? target2 : !property ? function(property2, unit2, uncache2) {
      return format((_plugins[property2] && _plugins[property2].get || getter)(target2, property2, unit2, uncache2));
    } : format((_plugins[property] && _plugins[property].get || getter)(target2, property, unit, uncache));
  },
  quickSetter: function quickSetter(target2, property, unit) {
    target2 = toArray(target2);
    if (target2.length > 1) {
      var setters = target2.map(function(t) {
        return gsap.quickSetter(t, property, unit);
      }), l = setters.length;
      return function(value) {
        var i = l;
        while (i--) {
          setters[i](value);
        }
      };
    }
    target2 = target2[0] || {};
    var Plugin = _plugins[property], cache = _getCache(target2), p = cache.harness && (cache.harness.aliases || {})[property] || property, setter = Plugin ? function(value) {
      var p2 = new Plugin();
      _quickTween._pt = 0;
      p2.init(target2, unit ? value + unit : value, _quickTween, 0, [target2]);
      p2.render(1, p2);
      _quickTween._pt && _renderPropTweens(1, _quickTween);
    } : cache.set(target2, p);
    return Plugin ? setter : function(value) {
      return setter(target2, p, unit ? value + unit : value, cache, 1);
    };
  },
  quickTo: function quickTo(target2, property, vars) {
    var _merge22;
    var tween = gsap.to(target2, _merge((_merge22 = {}, _merge22[property] = "+=0.1", _merge22.paused = true, _merge22), vars || {})), func = function func2(value, start, startIsRelative) {
      return tween.resetTo(property, value, start, startIsRelative);
    };
    func.tween = tween;
    return func;
  },
  isTweening: function isTweening(targets) {
    return _globalTimeline.getTweensOf(targets, true).length > 0;
  },
  defaults: function defaults(value) {
    value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
    return _mergeDeep(_defaults, value || {});
  },
  config: function config3(value) {
    return _mergeDeep(_config, value || {});
  },
  registerEffect: function registerEffect(_ref3) {
    var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults2 = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
    (plugins || "").split(",").forEach(function(pluginName) {
      return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
    });
    _effects[name] = function(targets, vars, tl) {
      return effect(toArray(targets), _setDefaults(vars || {}, defaults2), tl);
    };
    if (extendTimeline) {
      Timeline.prototype[name] = function(targets, vars, position2) {
        return this.add(_effects[name](targets, _isObject(vars) ? vars : (position2 = vars) && {}, this), position2);
      };
    }
  },
  registerEase: function registerEase(name, ease) {
    _easeMap[name] = _parseEase(ease);
  },
  parseEase: function parseEase(ease, defaultEase) {
    return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
  },
  getById: function getById(id) {
    return _globalTimeline.getById(id);
  },
  exportRoot: function exportRoot(vars, includeDelayedCalls) {
    if (vars === void 0) {
      vars = {};
    }
    var tl = new Timeline(vars), child, next;
    tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
    _globalTimeline.remove(tl);
    tl._dp = 0;
    tl._time = tl._tTime = _globalTimeline._time;
    child = _globalTimeline._first;
    while (child) {
      next = child._next;
      if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
        _addToTimeline(tl, child, child._start - child._delay);
      }
      child = next;
    }
    _addToTimeline(_globalTimeline, tl, 0);
    return tl;
  },
  context: function context(func, scope) {
    return func ? new Context(func, scope) : _context;
  },
  matchMedia: function matchMedia(scope) {
    return new MatchMedia(scope);
  },
  matchMediaRefresh: function matchMediaRefresh() {
    return _media.forEach(function(c) {
      var cond = c.conditions, found, p;
      for (p in cond) {
        if (cond[p]) {
          cond[p] = false;
          found = 1;
        }
      }
      found && c.revert();
    }) || _onMediaChange();
  },
  addEventListener: function addEventListener(type, callback) {
    var a = _listeners[type] || (_listeners[type] = []);
    ~a.indexOf(callback) || a.push(callback);
  },
  removeEventListener: function removeEventListener(type, callback) {
    var a = _listeners[type], i = a && a.indexOf(callback);
    i >= 0 && a.splice(i, 1);
  },
  utils: {
    wrap,
    wrapYoyo,
    distribute,
    random,
    snap,
    normalize,
    getUnit,
    clamp,
    splitColor,
    toArray,
    selector,
    mapRange,
    pipe,
    unitize,
    interpolate,
    shuffle
  },
  install: _install,
  effects: _effects,
  ticker: _ticker,
  updateRoot: Timeline.updateRoot,
  plugins: _plugins,
  globalTimeline: _globalTimeline,
  core: {
    PropTween,
    globals: _addGlobal,
    Tween,
    Timeline,
    Animation,
    getCache: _getCache,
    _removeLinkedListItem,
    reverting: function reverting() {
      return _reverting;
    },
    context: function context2(toAdd) {
      if (toAdd && _context) {
        _context.data.push(toAdd);
        toAdd._ctx = _context;
      }
      return _context;
    },
    suppressOverwrites: function suppressOverwrites(value) {
      return _suppressOverwrites = value;
    }
  }
};
_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
  return _gsap[name] = Tween[name];
});
_ticker.add(Timeline.updateRoot);
_quickTween = _gsap.to({}, {
  duration: 0
});
var _getPluginPropTween = function _getPluginPropTween2(plugin, prop) {
  var pt = plugin._pt;
  while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
    pt = pt._next;
  }
  return pt;
};
var _addModifiers = function _addModifiers2(tween, modifiers) {
  var targets = tween._targets, p, i, pt;
  for (p in modifiers) {
    i = targets.length;
    while (i--) {
      pt = tween._ptLookup[i][p];
      if (pt && (pt = pt.d)) {
        if (pt._pt) {
          pt = _getPluginPropTween(pt, p);
        }
        pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
      }
    }
  }
};
var _buildModifierPlugin = function _buildModifierPlugin2(name, modifier) {
  return {
    name,
    rawVars: 1,
    init: function init4(target2, vars, tween) {
      tween._onInit = function(tween2) {
        var temp, p;
        if (_isString(vars)) {
          temp = {};
          _forEachName(vars, function(name2) {
            return temp[name2] = 1;
          });
          vars = temp;
        }
        if (modifier) {
          temp = {};
          for (p in vars) {
            temp[p] = modifier(vars[p]);
          }
          vars = temp;
        }
        _addModifiers(tween2, vars);
      };
    }
  };
};
var gsap = _gsap.registerPlugin({
  name: "attr",
  init: function init(target2, vars, tween, index, targets) {
    var p, pt, v;
    this.tween = tween;
    for (p in vars) {
      v = target2.getAttribute(p) || "";
      pt = this.add(target2, "setAttribute", (v || 0) + "", vars[p], index, targets, 0, 0, p);
      pt.op = p;
      pt.b = v;
      this._props.push(p);
    }
  },
  render: function render(ratio, data) {
    var pt = data._pt;
    while (pt) {
      _reverting ? pt.set(pt.t, pt.p, pt.b, pt) : pt.r(ratio, pt.d);
      pt = pt._next;
    }
  }
}, {
  name: "endArray",
  init: function init2(target2, value) {
    var i = value.length;
    while (i--) {
      this.add(target2, i, target2[i] || 0, value[i], 0, 0, 0, 0, 0, 1);
    }
  }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap;
Tween.version = Timeline.version = gsap.version = "3.11.3";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0;
var Power1 = _easeMap.Power1;
var Power2 = _easeMap.Power2;
var Power3 = _easeMap.Power3;
var Power4 = _easeMap.Power4;
var Linear = _easeMap.Linear;
var Quad = _easeMap.Quad;
var Cubic = _easeMap.Cubic;
var Quart = _easeMap.Quart;
var Quint = _easeMap.Quint;
var Strong = _easeMap.Strong;
var Elastic = _easeMap.Elastic;
var Back = _easeMap.Back;
var SteppedEase = _easeMap.SteppedEase;
var Bounce = _easeMap.Bounce;
var Sine = _easeMap.Sine;
var Expo = _easeMap.Expo;
var Circ = _easeMap.Circ;

// node_modules/gsap/CSSPlugin.js
var _win2;
var _doc2;
var _docElement;
var _pluginInitted;
var _tempDiv;
var _tempDivStyler;
var _recentSetterPlugin;
var _reverting2;
var _windowExists3 = function _windowExists4() {
  return typeof window !== "undefined";
};
var _transformProps = {};
var _RAD2DEG = 180 / Math.PI;
var _DEG2RAD = Math.PI / 180;
var _atan2 = Math.atan2;
var _bigNum2 = 1e8;
var _capsExp = /([A-Z])/g;
var _horizontalExp = /(left|right|width|margin|padding|x)/i;
var _complexExp = /[\s,\(]\S/;
var _propertyAliases = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
};
var _renderCSSProp = function _renderCSSProp2(ratio, data) {
  return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
};
var _renderPropWithEnd = function _renderPropWithEnd2(ratio, data) {
  return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u, data);
};
var _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning2(ratio, data) {
  return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 1e4) / 1e4 + data.u : data.b, data);
};
var _renderRoundedCSSProp = function _renderRoundedCSSProp2(ratio, data) {
  var value = data.s + data.c * ratio;
  data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : 0.5)) + data.u, data);
};
var _renderNonTweeningValue = function _renderNonTweeningValue2(ratio, data) {
  return data.set(data.t, data.p, ratio ? data.e : data.b, data);
};
var _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd2(ratio, data) {
  return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
};
var _setterCSSStyle = function _setterCSSStyle2(target2, property, value) {
  return target2.style[property] = value;
};
var _setterCSSProp = function _setterCSSProp2(target2, property, value) {
  return target2.style.setProperty(property, value);
};
var _setterTransform = function _setterTransform2(target2, property, value) {
  return target2._gsap[property] = value;
};
var _setterScale = function _setterScale2(target2, property, value) {
  return target2._gsap.scaleX = target2._gsap.scaleY = value;
};
var _setterScaleWithRender = function _setterScaleWithRender2(target2, property, value, data, ratio) {
  var cache = target2._gsap;
  cache.scaleX = cache.scaleY = value;
  cache.renderTransform(ratio, cache);
};
var _setterTransformWithRender = function _setterTransformWithRender2(target2, property, value, data, ratio) {
  var cache = target2._gsap;
  cache[property] = value;
  cache.renderTransform(ratio, cache);
};
var _transformProp = "transform";
var _transformOriginProp = _transformProp + "Origin";
var _saveStyle = function _saveStyle2(property, isNotCSS) {
  var _this = this;
  var target2 = this.target, style = target2.style;
  if (property in _transformProps) {
    this.tfm = this.tfm || {};
    if (property !== "transform") {
      property = _propertyAliases[property] || property;
      ~property.indexOf(",") ? property.split(",").forEach(function(a) {
        return _this.tfm[a] = _get(target2, a);
      }) : this.tfm[property] = target2._gsap.x ? target2._gsap[property] : _get(target2, property);
    }
    if (this.props.indexOf(_transformProp) >= 0) {
      return;
    }
    if (target2._gsap.svg) {
      this.svgo = target2.getAttribute("data-svg-origin");
      this.props.push(_transformOriginProp, isNotCSS, "");
    }
    property = _transformProp;
  }
  (style || isNotCSS) && this.props.push(property, isNotCSS, style[property]);
};
var _removeIndependentTransforms = function _removeIndependentTransforms2(style) {
  if (style.translate) {
    style.removeProperty("translate");
    style.removeProperty("scale");
    style.removeProperty("rotate");
  }
};
var _revertStyle = function _revertStyle2() {
  var props = this.props, target2 = this.target, style = target2.style, cache = target2._gsap, i, p;
  for (i = 0; i < props.length; i += 3) {
    props[i + 1] ? target2[props[i]] = props[i + 2] : props[i + 2] ? style[props[i]] = props[i + 2] : style.removeProperty(props[i].replace(_capsExp, "-$1").toLowerCase());
  }
  if (this.tfm) {
    for (p in this.tfm) {
      cache[p] = this.tfm[p];
    }
    if (cache.svg) {
      cache.renderTransform();
      target2.setAttribute("data-svg-origin", this.svgo || "");
    }
    i = _reverting2();
    if (i && !i.isStart && !style[_transformProp]) {
      _removeIndependentTransforms(style);
      cache.uncache = 1;
    }
  }
};
var _getStyleSaver = function _getStyleSaver2(target2, properties) {
  var saver = {
    target: target2,
    props: [],
    revert: _revertStyle,
    save: _saveStyle
  };
  properties && properties.split(",").forEach(function(p) {
    return saver.save(p);
  });
  return saver;
};
var _supports3D;
var _createElement = function _createElement2(type, ns) {
  var e = _doc2.createElementNS ? _doc2.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc2.createElement(type);
  return e.style ? e : _doc2.createElement(type);
};
var _getComputedProperty = function _getComputedProperty2(target2, property, skipPrefixFallback) {
  var cs = getComputedStyle(target2);
  return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty2(target2, _checkPropPrefix(property) || property, 1) || "";
};
var _prefixes = "O,Moz,ms,Ms,Webkit".split(",");
var _checkPropPrefix = function _checkPropPrefix2(property, element, preferPrefix) {
  var e = element || _tempDiv, s = e.style, i = 5;
  if (property in s && !preferPrefix) {
    return property;
  }
  property = property.charAt(0).toUpperCase() + property.substr(1);
  while (i-- && !(_prefixes[i] + property in s)) {
  }
  return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
};
var _initCore = function _initCore2() {
  if (_windowExists3() && window.document) {
    _win2 = window;
    _doc2 = _win2.document;
    _docElement = _doc2.documentElement;
    _tempDiv = _createElement("div") || {
      style: {}
    };
    _tempDivStyler = _createElement("div");
    _transformProp = _checkPropPrefix(_transformProp);
    _transformOriginProp = _transformProp + "Origin";
    _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0";
    _supports3D = !!_checkPropPrefix("perspective");
    _reverting2 = gsap.core.reverting;
    _pluginInitted = 1;
  }
};
var _getBBoxHack = function _getBBoxHack2(swapIfPossible) {
  var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
  _docElement.appendChild(svg);
  svg.appendChild(this);
  this.style.display = "block";
  if (swapIfPossible) {
    try {
      bbox = this.getBBox();
      this._gsapBBox = this.getBBox;
      this.getBBox = _getBBoxHack2;
    } catch (e) {
    }
  } else if (this._gsapBBox) {
    bbox = this._gsapBBox();
  }
  if (oldParent) {
    if (oldSibling) {
      oldParent.insertBefore(this, oldSibling);
    } else {
      oldParent.appendChild(this);
    }
  }
  _docElement.removeChild(svg);
  this.style.cssText = oldCSS;
  return bbox;
};
var _getAttributeFallbacks = function _getAttributeFallbacks2(target2, attributesArray) {
  var i = attributesArray.length;
  while (i--) {
    if (target2.hasAttribute(attributesArray[i])) {
      return target2.getAttribute(attributesArray[i]);
    }
  }
};
var _getBBox = function _getBBox2(target2) {
  var bounds;
  try {
    bounds = target2.getBBox();
  } catch (error) {
    bounds = _getBBoxHack.call(target2, true);
  }
  bounds && (bounds.width || bounds.height) || target2.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target2, true));
  return bounds && !bounds.width && !bounds.x && !bounds.y ? {
    x: +_getAttributeFallbacks(target2, ["x", "cx", "x1"]) || 0,
    y: +_getAttributeFallbacks(target2, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : bounds;
};
var _isSVG = function _isSVG2(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
};
var _removeProperty = function _removeProperty2(target2, property) {
  if (property) {
    var style = target2.style;
    if (property in _transformProps && property !== _transformOriginProp) {
      property = _transformProp;
    }
    if (style.removeProperty) {
      if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
        property = "-" + property;
      }
      style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
    } else {
      style.removeAttribute(property);
    }
  }
};
var _addNonTweeningPT = function _addNonTweeningPT2(plugin, target2, property, beginning, end, onlySetAtEnd) {
  var pt = new PropTween(plugin._pt, target2, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
  plugin._pt = pt;
  pt.b = beginning;
  pt.e = end;
  plugin._props.push(property);
  return pt;
};
var _nonConvertibleUnits = {
  deg: 1,
  rad: 1,
  turn: 1
};
var _nonStandardLayouts = {
  grid: 1,
  flex: 1
};
var _convertToUnit = function _convertToUnit2(target2, property, value, unit) {
  var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target2.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
  if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
    return curValue;
  }
  curUnit !== "px" && !toPixels && (curValue = _convertToUnit2(target2, property, value, "px"));
  isSVG = target2.getCTM && _isSVG(target2);
  if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
    px = isSVG ? target2.getBBox()[horizontal ? "width" : "height"] : target2[measureProperty];
    return _round(toPercent ? curValue / px * amount : curValue / 100 * px);
  }
  style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
  parent = ~property.indexOf("adius") || unit === "em" && target2.appendChild && !isRootSVG ? target2 : target2.parentNode;
  if (isSVG) {
    parent = (target2.ownerSVGElement || {}).parentNode;
  }
  if (!parent || parent === _doc2 || !parent.appendChild) {
    parent = _doc2.body;
  }
  cache = parent._gsap;
  if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time && !cache.uncache) {
    return _round(curValue / cache.width * amount);
  } else {
    (toPercent || curUnit === "%") && !_nonStandardLayouts[_getComputedProperty(parent, "display")] && (style.position = _getComputedProperty(target2, "position"));
    parent === target2 && (style.position = "static");
    parent.appendChild(_tempDiv);
    px = _tempDiv[measureProperty];
    parent.removeChild(_tempDiv);
    style.position = "absolute";
    if (horizontal && toPercent) {
      cache = _getCache(parent);
      cache.time = _ticker.time;
      cache.width = parent[measureProperty];
    }
  }
  return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
};
var _get = function _get2(target2, property, unit, uncache) {
  var value;
  _pluginInitted || _initCore();
  if (property in _propertyAliases && property !== "transform") {
    property = _propertyAliases[property];
    if (~property.indexOf(",")) {
      property = property.split(",")[0];
    }
  }
  if (_transformProps[property] && property !== "transform") {
    value = _parseTransform(target2, uncache);
    value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target2, _transformOriginProp)) + " " + value.zOrigin + "px";
  } else {
    value = target2.style[property];
    if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
      value = _specialProps[property] && _specialProps[property](target2, property, unit) || _getComputedProperty(target2, property) || _getProperty(target2, property) || (property === "opacity" ? 1 : 0);
    }
  }
  return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target2, property, value, unit) + unit : value;
};
var _tweenComplexCSSString = function _tweenComplexCSSString2(target2, prop, start, end) {
  if (!start || start === "none") {
    var p = _checkPropPrefix(prop, target2, 1), s = p && _getComputedProperty(target2, p, 1);
    if (s && s !== start) {
      prop = p;
      start = s;
    } else if (prop === "borderColor") {
      start = _getComputedProperty(target2, "borderTopColor");
    }
  }
  var pt = new PropTween(this._pt, target2.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
  pt.b = start;
  pt.e = end;
  start += "";
  end += "";
  if (end === "auto") {
    target2.style[prop] = end;
    end = _getComputedProperty(target2, prop) || end;
    target2.style[prop] = start;
  }
  a = [start, end];
  _colorStringFilter(a);
  start = a[0];
  end = a[1];
  startValues = start.match(_numWithUnitExp) || [];
  endValues = end.match(_numWithUnitExp) || [];
  if (endValues.length) {
    while (result = _numWithUnitExp.exec(end)) {
      endValue = result[0];
      chunk = end.substring(index, result.index);
      if (color) {
        color = (color + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color = 1;
      }
      if (endValue !== (startValue = startValues[matchIndex++] || "")) {
        startNum = parseFloat(startValue) || 0;
        startUnit = startValue.substr((startNum + "").length);
        endValue.charAt(1) === "=" && (endValue = _parseRelative(startNum, endValue) + startUnit);
        endNum = parseFloat(endValue);
        endUnit = endValue.substr((endNum + "").length);
        index = _numWithUnitExp.lastIndex - endUnit.length;
        if (!endUnit) {
          endUnit = endUnit || _config.units[prop] || startUnit;
          if (index === end.length) {
            end += endUnit;
            pt.e += endUnit;
          }
        }
        if (startUnit !== endUnit) {
          startNum = _convertToUnit(target2, prop, startValue, endUnit) || 0;
        }
        pt._pt = {
          _next: pt._pt,
          p: chunk || matchIndex === 1 ? chunk : ",",
          s: startNum,
          c: endNum - startNum,
          m: color && color < 4 || prop === "zIndex" ? Math.round : 0
        };
      }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : "";
  } else {
    pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
  }
  _relExp.test(end) && (pt.e = 0);
  this._pt = pt;
  return pt;
};
var _keywordToPercent = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
};
var _convertKeywordsToPercentages = function _convertKeywordsToPercentages2(value) {
  var split = value.split(" "), x = split[0], y = split[1] || "50%";
  if (x === "top" || x === "bottom" || y === "left" || y === "right") {
    value = x;
    x = y;
    y = value;
  }
  split[0] = _keywordToPercent[x] || x;
  split[1] = _keywordToPercent[y] || y;
  return split.join(" ");
};
var _renderClearProps = function _renderClearProps2(ratio, data) {
  if (data.tween && data.tween._time === data.tween._dur) {
    var target2 = data.t, style = target2.style, props = data.u, cache = target2._gsap, prop, clearTransforms, i;
    if (props === "all" || props === true) {
      style.cssText = "";
      clearTransforms = 1;
    } else {
      props = props.split(",");
      i = props.length;
      while (--i > -1) {
        prop = props[i];
        if (_transformProps[prop]) {
          clearTransforms = 1;
          prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
        }
        _removeProperty(target2, prop);
      }
    }
    if (clearTransforms) {
      _removeProperty(target2, _transformProp);
      if (cache) {
        cache.svg && target2.removeAttribute("transform");
        _parseTransform(target2, 1);
        cache.uncache = 1;
        _removeIndependentTransforms(style);
      }
    }
  }
};
var _specialProps = {
  clearProps: function clearProps(plugin, target2, property, endValue, tween) {
    if (tween.data !== "isFromStart") {
      var pt = plugin._pt = new PropTween(plugin._pt, target2, property, 0, 0, _renderClearProps);
      pt.u = endValue;
      pt.pr = -10;
      pt.tween = tween;
      plugin._props.push(property);
      return 1;
    }
  }
};
var _identity2DMatrix = [1, 0, 0, 1, 0, 0];
var _rotationalProperties = {};
var _isNullTransform = function _isNullTransform2(value) {
  return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
};
var _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray2(target2) {
  var matrixString = _getComputedProperty(target2, _transformProp);
  return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
};
var _getMatrix = function _getMatrix2(target2, force2D) {
  var cache = target2._gsap || _getCache(target2), style = target2.style, matrix = _getComputedTransformMatrixAsArray(target2), parent, nextSibling, temp, addedToDOM;
  if (cache.svg && target2.getAttribute("transform")) {
    temp = target2.transform.baseVal.consolidate().matrix;
    matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
    return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
  } else if (matrix === _identity2DMatrix && !target2.offsetParent && target2 !== _docElement && !cache.svg) {
    temp = style.display;
    style.display = "block";
    parent = target2.parentNode;
    if (!parent || !target2.offsetParent) {
      addedToDOM = 1;
      nextSibling = target2.nextElementSibling;
      _docElement.appendChild(target2);
    }
    matrix = _getComputedTransformMatrixAsArray(target2);
    temp ? style.display = temp : _removeProperty(target2, "display");
    if (addedToDOM) {
      nextSibling ? parent.insertBefore(target2, nextSibling) : parent ? parent.appendChild(target2) : _docElement.removeChild(target2);
    }
  }
  return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
};
var _applySVGOrigin = function _applySVGOrigin2(target2, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
  var cache = target2._gsap, matrix = matrixArray || _getMatrix(target2, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
  if (!originIsAbsolute) {
    bounds = _getBBox(target2);
    xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
    yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
  } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
    x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
    y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
    xOrigin = x;
    yOrigin = y;
  }
  if (smooth || smooth !== false && cache.smooth) {
    tx = xOrigin - xOriginOld;
    ty = yOrigin - yOriginOld;
    cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
    cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
  } else {
    cache.xOffset = cache.yOffset = 0;
  }
  cache.xOrigin = xOrigin;
  cache.yOrigin = yOrigin;
  cache.smooth = !!smooth;
  cache.origin = origin;
  cache.originIsAbsolute = !!originIsAbsolute;
  target2.style[_transformOriginProp] = "0px 0px";
  if (pluginToAddPropTweensTo) {
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
    _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
  }
  target2.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
};
var _parseTransform = function _parseTransform2(target2, uncache) {
  var cache = target2._gsap || new GSCache(target2);
  if ("x" in cache && !uncache && !cache.uncache) {
    return cache;
  }
  var style = target2.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", cs = getComputedStyle(target2), origin = _getComputedProperty(target2, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
  x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
  scaleX = scaleY = 1;
  cache.svg = !!(target2.getCTM && _isSVG(target2));
  if (cs.translate) {
    if (cs.translate !== "none" || cs.scale !== "none" || cs.rotate !== "none") {
      style[_transformProp] = (cs.translate !== "none" ? "translate3d(" + (cs.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (cs.rotate !== "none" ? "rotate(" + cs.rotate + ") " : "") + (cs.scale !== "none" ? "scale(" + cs.scale.split(" ").join(",") + ") " : "") + (cs[_transformProp] !== "none" ? cs[_transformProp] : "");
    }
    style.scale = style.rotate = style.translate = "none";
  }
  matrix = _getMatrix(target2, cache.svg);
  if (cache.svg) {
    if (cache.uncache) {
      t2 = target2.getBBox();
      origin = cache.xOrigin - t2.x + "px " + (cache.yOrigin - t2.y) + "px";
      t1 = "";
    } else {
      t1 = !uncache && target2.getAttribute("data-svg-origin");
    }
    _applySVGOrigin(target2, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
  }
  xOrigin = cache.xOrigin || 0;
  yOrigin = cache.yOrigin || 0;
  if (matrix !== _identity2DMatrix) {
    a = matrix[0];
    b = matrix[1];
    c = matrix[2];
    d = matrix[3];
    x = a12 = matrix[4];
    y = a22 = matrix[5];
    if (matrix.length === 6) {
      scaleX = Math.sqrt(a * a + b * b);
      scaleY = Math.sqrt(d * d + c * c);
      rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0;
      skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
      skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
      if (cache.svg) {
        x -= xOrigin - (xOrigin * a + yOrigin * c);
        y -= yOrigin - (xOrigin * b + yOrigin * d);
      }
    } else {
      a32 = matrix[6];
      a42 = matrix[7];
      a13 = matrix[8];
      a23 = matrix[9];
      a33 = matrix[10];
      a43 = matrix[11];
      x = matrix[12];
      y = matrix[13];
      z = matrix[14];
      angle = _atan2(a32, a33);
      rotationX = angle * _RAD2DEG;
      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a12 * cos + a13 * sin;
        t2 = a22 * cos + a23 * sin;
        t3 = a32 * cos + a33 * sin;
        a13 = a12 * -sin + a13 * cos;
        a23 = a22 * -sin + a23 * cos;
        a33 = a32 * -sin + a33 * cos;
        a43 = a42 * -sin + a43 * cos;
        a12 = t1;
        a22 = t2;
        a32 = t3;
      }
      angle = _atan2(-c, a33);
      rotationY = angle * _RAD2DEG;
      if (angle) {
        cos = Math.cos(-angle);
        sin = Math.sin(-angle);
        t1 = a * cos - a13 * sin;
        t2 = b * cos - a23 * sin;
        t3 = c * cos - a33 * sin;
        a43 = d * sin + a43 * cos;
        a = t1;
        b = t2;
        c = t3;
      }
      angle = _atan2(b, a);
      rotation = angle * _RAD2DEG;
      if (angle) {
        cos = Math.cos(angle);
        sin = Math.sin(angle);
        t1 = a * cos + b * sin;
        t2 = a12 * cos + a22 * sin;
        b = b * cos - a * sin;
        a22 = a22 * cos - a12 * sin;
        a = t1;
        a12 = t2;
      }
      if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
        rotationX = rotation = 0;
        rotationY = 180 - rotationY;
      }
      scaleX = _round(Math.sqrt(a * a + b * b + c * c));
      scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
      angle = _atan2(a12, a22);
      skewX = Math.abs(angle) > 2e-4 ? angle * _RAD2DEG : 0;
      perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
    }
    if (cache.svg) {
      t1 = target2.getAttribute("transform");
      cache.forceCSS = target2.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target2, _transformProp));
      t1 && target2.setAttribute("transform", t1);
    }
  }
  if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
    if (invertedScaleX) {
      scaleX *= -1;
      skewX += rotation <= 0 ? 180 : -180;
      rotation += rotation <= 0 ? 180 : -180;
    } else {
      scaleY *= -1;
      skewX += skewX <= 0 ? 180 : -180;
    }
  }
  uncache = uncache || cache.uncache;
  cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target2.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target2.offsetWidth * cache.xPercent / 100 : 0) + px;
  cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target2.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target2.offsetHeight * cache.yPercent / 100 : 0) + px;
  cache.z = z + px;
  cache.scaleX = _round(scaleX);
  cache.scaleY = _round(scaleY);
  cache.rotation = _round(rotation) + deg;
  cache.rotationX = _round(rotationX) + deg;
  cache.rotationY = _round(rotationY) + deg;
  cache.skewX = skewX + deg;
  cache.skewY = skewY + deg;
  cache.transformPerspective = perspective + px;
  if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
    style[_transformOriginProp] = _firstTwoOnly(origin);
  }
  cache.xOffset = cache.yOffset = 0;
  cache.force3D = _config.force3D;
  cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
  cache.uncache = 0;
  return cache;
};
var _firstTwoOnly = function _firstTwoOnly2(value) {
  return (value = value.split(" "))[0] + " " + value[1];
};
var _addPxTranslate = function _addPxTranslate2(target2, start, value) {
  var unit = getUnit(start);
  return _round(parseFloat(start) + parseFloat(_convertToUnit(target2, "x", value + "px", unit))) + unit;
};
var _renderNon3DTransforms = function _renderNon3DTransforms2(ratio, cache) {
  cache.z = "0px";
  cache.rotationY = cache.rotationX = "0deg";
  cache.force3D = 0;
  _renderCSSTransforms(ratio, cache);
};
var _zeroDeg = "0deg";
var _zeroPx = "0px";
var _endParenthesis = ") ";
var _renderCSSTransforms = function _renderCSSTransforms2(ratio, cache) {
  var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target2 = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true;
  if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
    var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
    angle = parseFloat(rotationX) * _DEG2RAD;
    cos = Math.cos(angle);
    x = _addPxTranslate(target2, x, a13 * cos * -zOrigin);
    y = _addPxTranslate(target2, y, -Math.sin(angle) * -zOrigin);
    z = _addPxTranslate(target2, z, a33 * cos * -zOrigin + zOrigin);
  }
  if (transformPerspective !== _zeroPx) {
    transforms += "perspective(" + transformPerspective + _endParenthesis;
  }
  if (xPercent || yPercent) {
    transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
  }
  if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
    transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
  }
  if (rotation !== _zeroDeg) {
    transforms += "rotate(" + rotation + _endParenthesis;
  }
  if (rotationY !== _zeroDeg) {
    transforms += "rotateY(" + rotationY + _endParenthesis;
  }
  if (rotationX !== _zeroDeg) {
    transforms += "rotateX(" + rotationX + _endParenthesis;
  }
  if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
    transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
  }
  if (scaleX !== 1 || scaleY !== 1) {
    transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
  }
  target2.style[_transformProp] = transforms || "translate(0, 0)";
};
var _renderSVGTransforms = function _renderSVGTransforms2(ratio, cache) {
  var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target2 = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
  rotation = parseFloat(rotation);
  skewX = parseFloat(skewX);
  skewY = parseFloat(skewY);
  if (skewY) {
    skewY = parseFloat(skewY);
    skewX += skewY;
    rotation += skewY;
  }
  if (rotation || skewX) {
    rotation *= _DEG2RAD;
    skewX *= _DEG2RAD;
    a11 = Math.cos(rotation) * scaleX;
    a21 = Math.sin(rotation) * scaleX;
    a12 = Math.sin(rotation - skewX) * -scaleY;
    a22 = Math.cos(rotation - skewX) * scaleY;
    if (skewX) {
      skewY *= _DEG2RAD;
      temp = Math.tan(skewX - skewY);
      temp = Math.sqrt(1 + temp * temp);
      a12 *= temp;
      a22 *= temp;
      if (skewY) {
        temp = Math.tan(skewY);
        temp = Math.sqrt(1 + temp * temp);
        a11 *= temp;
        a21 *= temp;
      }
    }
    a11 = _round(a11);
    a21 = _round(a21);
    a12 = _round(a12);
    a22 = _round(a22);
  } else {
    a11 = scaleX;
    a22 = scaleY;
    a21 = a12 = 0;
  }
  if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
    tx = _convertToUnit(target2, "x", x, "px");
    ty = _convertToUnit(target2, "y", y, "px");
  }
  if (xOrigin || yOrigin || xOffset || yOffset) {
    tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
    ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
  }
  if (xPercent || yPercent) {
    temp = target2.getBBox();
    tx = _round(tx + xPercent / 100 * temp.width);
    ty = _round(ty + yPercent / 100 * temp.height);
  }
  temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
  target2.setAttribute("transform", temp);
  forceCSS && (target2.style[_transformProp] = temp);
};
var _addRotationalPropTween = function _addRotationalPropTween2(plugin, target2, property, startNum, endValue) {
  var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction2, pt;
  if (isString) {
    direction2 = endValue.split("_")[1];
    if (direction2 === "short") {
      change %= cap;
      if (change !== change % (cap / 2)) {
        change += change < 0 ? cap : -cap;
      }
    }
    if (direction2 === "cw" && change < 0) {
      change = (change + cap * _bigNum2) % cap - ~~(change / cap) * cap;
    } else if (direction2 === "ccw" && change > 0) {
      change = (change - cap * _bigNum2) % cap - ~~(change / cap) * cap;
    }
  }
  plugin._pt = pt = new PropTween(plugin._pt, target2, property, startNum, change, _renderPropWithEnd);
  pt.e = finalValue;
  pt.u = "deg";
  plugin._props.push(property);
  return pt;
};
var _assign = function _assign2(target2, source) {
  for (var p in source) {
    target2[p] = source[p];
  }
  return target2;
};
var _addRawTransformPTs = function _addRawTransformPTs2(plugin, transforms, target2) {
  var startCache = _assign({}, target2._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target2.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
  if (startCache.svg) {
    startValue = target2.getAttribute("transform");
    target2.setAttribute("transform", "");
    style[_transformProp] = transforms;
    endCache = _parseTransform(target2, 1);
    _removeProperty(target2, _transformProp);
    target2.setAttribute("transform", startValue);
  } else {
    startValue = getComputedStyle(target2)[_transformProp];
    style[_transformProp] = transforms;
    endCache = _parseTransform(target2, 1);
    style[_transformProp] = startValue;
  }
  for (p in _transformProps) {
    startValue = startCache[p];
    endValue = endCache[p];
    if (startValue !== endValue && exclude.indexOf(p) < 0) {
      startUnit = getUnit(startValue);
      endUnit = getUnit(endValue);
      startNum = startUnit !== endUnit ? _convertToUnit(target2, p, startValue, endUnit) : parseFloat(startValue);
      endNum = parseFloat(endValue);
      plugin._pt = new PropTween(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
      plugin._pt.u = endUnit || 0;
      plugin._props.push(p);
    }
  }
  _assign(endCache, startCache);
};
_forEachName("padding,margin,Width,Radius", function(name, index) {
  var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function(side) {
    return index < 2 ? name + side : "border" + side + name;
  });
  _specialProps[index > 1 ? "border" + name : name] = function(plugin, target2, property, endValue, tween) {
    var a, vars;
    if (arguments.length < 4) {
      a = props.map(function(prop) {
        return _get(plugin, prop, property);
      });
      vars = a.join(" ");
      return vars.split(a[0]).length === 5 ? a[0] : vars;
    }
    a = (endValue + "").split(" ");
    vars = {};
    props.forEach(function(prop, i) {
      return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
    });
    plugin.init(target2, vars, tween);
  };
});
var CSSPlugin = {
  name: "css",
  register: _initCore,
  targetTest: function targetTest(target2) {
    return target2.style && target2.nodeType;
  },
  init: function init3(target2, vars, tween, index, targets) {
    var props = this._props, style = target2.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority, inlineProps;
    _pluginInitted || _initCore();
    this.styles = this.styles || _getStyleSaver(target2);
    inlineProps = this.styles.props;
    this.tween = tween;
    for (p in vars) {
      if (p === "autoRound") {
        continue;
      }
      endValue = vars[p];
      if (_plugins[p] && _checkPlugin(p, vars, tween, index, target2, targets)) {
        continue;
      }
      type = typeof endValue;
      specialProp = _specialProps[p];
      if (type === "function") {
        endValue = endValue.call(tween, index, target2, targets);
        type = typeof endValue;
      }
      if (type === "string" && ~endValue.indexOf("random(")) {
        endValue = _replaceRandom(endValue);
      }
      if (specialProp) {
        specialProp(this, target2, p, endValue, tween) && (hasPriority = 1);
      } else if (p.substr(0, 2) === "--") {
        startValue = (getComputedStyle(target2).getPropertyValue(p) + "").trim();
        endValue += "";
        _colorExp.lastIndex = 0;
        if (!_colorExp.test(startValue)) {
          startUnit = getUnit(startValue);
          endUnit = getUnit(endValue);
        }
        endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target2, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
        this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
        props.push(p);
        inlineProps.push(p, 0, style[p]);
      } else if (type !== "undefined") {
        if (startAt && p in startAt) {
          startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target2, targets) : startAt[p];
          _isString(startValue) && ~startValue.indexOf("random(") && (startValue = _replaceRandom(startValue));
          getUnit(startValue + "") || (startValue += _config.units[p] || getUnit(_get(target2, p)) || "");
          (startValue + "").charAt(1) === "=" && (startValue = _get(target2, p));
        } else {
          startValue = _get(target2, p);
        }
        startNum = parseFloat(startValue);
        relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
        relative && (endValue = endValue.substr(2));
        endNum = parseFloat(endValue);
        if (p in _propertyAliases) {
          if (p === "autoAlpha") {
            if (startNum === 1 && _get(target2, "visibility") === "hidden" && endNum) {
              startNum = 0;
            }
            inlineProps.push("visibility", 0, style.visibility);
            _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
          }
          if (p !== "scale" && p !== "transform") {
            p = _propertyAliases[p];
            ~p.indexOf(",") && (p = p.split(",")[0]);
          }
        }
        isTransformRelated = p in _transformProps;
        if (isTransformRelated) {
          this.styles.save(p);
          if (!transformPropTween) {
            cache = target2._gsap;
            cache.renderTransform && !vars.parseTransform || _parseTransform(target2, vars.parseTransform);
            smooth = vars.smoothOrigin !== false && cache.smooth;
            transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1);
            transformPropTween.dep = 1;
          }
          if (p === "scale") {
            this._pt = new PropTween(this._pt, cache, "scaleY", startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum || 0, _renderCSSProp);
            this._pt.u = 0;
            props.push("scaleY", p);
            p += "X";
          } else if (p === "transformOrigin") {
            inlineProps.push(_transformOriginProp, 0, style[_transformOriginProp]);
            endValue = _convertKeywordsToPercentages(endValue);
            if (cache.svg) {
              _applySVGOrigin(target2, endValue, 0, smooth, 0, this);
            } else {
              endUnit = parseFloat(endValue.split(" ")[2]) || 0;
              endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
              _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
            }
            continue;
          } else if (p === "svgOrigin") {
            _applySVGOrigin(target2, endValue, 1, smooth, 0, this);
            continue;
          } else if (p in _rotationalProperties) {
            _addRotationalPropTween(this, cache, p, startNum, relative ? _parseRelative(startNum, relative + endValue) : endValue);
            continue;
          } else if (p === "smoothOrigin") {
            _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
            continue;
          } else if (p === "force3D") {
            cache[p] = endValue;
            continue;
          } else if (p === "transform") {
            _addRawTransformPTs(this, endValue, target2);
            continue;
          }
        } else if (!(p in style)) {
          p = _checkPropPrefix(p) || p;
        }
        if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
          startUnit = (startValue + "").substr((startNum + "").length);
          endNum || (endNum = 0);
          endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
          startUnit !== endUnit && (startNum = _convertToUnit(target2, p, startValue, endUnit));
          this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? _parseRelative(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
          this._pt.u = endUnit || 0;
          if (startUnit !== endUnit && endUnit !== "%") {
            this._pt.b = startValue;
            this._pt.r = _renderCSSPropWithBeginning;
          }
        } else if (!(p in style)) {
          if (p in target2) {
            this.add(target2, p, startValue || target2[p], relative ? relative + endValue : endValue, index, targets);
          } else {
            _missingPlugin(p, endValue);
            continue;
          }
        } else {
          _tweenComplexCSSString.call(this, target2, p, startValue, relative ? relative + endValue : endValue);
        }
        isTransformRelated || (p in style ? inlineProps.push(p, 0, style[p]) : inlineProps.push(p, 1, startValue || target2[p]));
        props.push(p);
      }
    }
    hasPriority && _sortPropTweensByPriority(this);
  },
  render: function render2(ratio, data) {
    if (data.tween._time || !_reverting2()) {
      var pt = data._pt;
      while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
      }
    } else {
      data.styles.revert();
    }
  },
  get: _get,
  aliases: _propertyAliases,
  getSetter: function getSetter(target2, property, plugin) {
    var p = _propertyAliases[property];
    p && p.indexOf(",") < 0 && (property = p);
    return property in _transformProps && property !== _transformOriginProp && (target2._gsap.x || _get(target2, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target2.style && !_isUndefined(target2.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target2, property);
  },
  core: {
    _removeProperty,
    _getMatrix
  }
};
gsap.utils.checkPrefix = _checkPropPrefix;
gsap.core.getStyleSaver = _getStyleSaver;
(function(positionAndScale, rotation, others, aliases) {
  var all = _forEachName(positionAndScale + "," + rotation + "," + others, function(name) {
    _transformProps[name] = 1;
  });
  _forEachName(rotation, function(name) {
    _config.units[name] = "deg";
    _rotationalProperties[name] = 1;
  });
  _propertyAliases[all[13]] = positionAndScale + "," + rotation;
  _forEachName(aliases, function(name) {
    var split = name.split(":");
    _propertyAliases[split[1]] = all[split[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
_forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
  _config.units[name] = "px";
});
gsap.registerPlugin(CSSPlugin);

// node_modules/gsap/index.js
var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
var TweenMaxWithCSS = gsapWithCSS.core.Tween;

// app/utils/animations/about.ts
var selectors = {
  container: ".profileContainer",
  bolt: ".bolt",
  skull: ".skull"
};
function animateAbout(gsap5, screenWidths) {
  const aboutTl = gsap5.timeline({
    scrollTrigger: {
      scrub: true,
      trigger: selectors.container,
      start: "top 50%",
      toggleActions: "play none none reverse"
    }
  });
  aboutTl.to(
    selectors.bolt,
    {
      y: screenWidths.phoneOnly ? 20 : 80,
      ease: "power1.inOut"
    },
    0
  );
  gsap5.to(selectors.skull, {
    rotation: 360 * 2.98,
    scale: 1,
    ease: "power1.inOut",
    duration: 1,
    scrollTrigger: selectors.skull
  });
  aboutTl.to(
    selectors.skull,
    {
      y: -140,
      ease: "power1.inOut"
    },
    0
  );
}

// app/utils/animations/albums.ts
var selectors2 = {
  container: ".albumList",
  album: ".album"
};
function animateAlbums(gsap5, container, width, screenWidths, Draggable2) {
  const { offsetHeight: sectionHeight } = container;
  const handleGetPosition = (value) => `random(-15, ${value})`;
  function getAlbumSectionSize() {
    if (screenWidths.phoneOnly) {
      return {
        x: handleGetPosition(width / 2),
        y: handleGetPosition(sectionHeight - 150)
      };
    }
    if (screenWidths.bigDesktopUp) {
      return {
        x: handleGetPosition(1280 / 1.4),
        y: handleGetPosition(sectionHeight - 300)
      };
    }
    if (screenWidths.desktopUp) {
      return {
        x: handleGetPosition(width / 1.65),
        y: handleGetPosition(sectionHeight - 300)
      };
    }
    if (screenWidths.laptopUp) {
      return {
        x: handleGetPosition(width / 1.5),
        y: handleGetPosition(sectionHeight - 250)
      };
    }
    if (screenWidths.phoneUp) {
      return {
        x: handleGetPosition(width / 1.75),
        y: handleGetPosition(sectionHeight - 250)
      };
    }
  }
  const albumTl = gsap5.timeline({
    scrollTrigger: {
      trigger: selectors2.container
    }
  });
  gsap5.to(selectors2.album, { x: "-200%" });
  albumTl.to(
    selectors2.album,
    {
      autoAlpha: 1,
      duration: 0.1
    },
    0
  ).staggerTo(
    selectors2.album,
    0.75,
    {
      ...getAlbumSectionSize(),
      ease: "power4.inOut"
    },
    -0.1
  );
  Draggable2.create(selectors2.album, {
    type: "x,y",
    edgeResistance: 0.65,
    bounds: ".main",
    inertia: true
  });
}

// app/utils/animations/bgColor.ts
var colors = {
  turquoise400: "#005C65",
  yellow100: "#FFAD00",
  red100: "#FF0D00"
};
function animateBgColorOnScroll(gsap5, container) {
  const { offsetHeight: containerHeight } = container;
  const tl = gsap5.timeline({
    scrollTrigger: {
      scrub: true,
      end: () => `+=${containerHeight - 750}`
    }
  });
  tl.to(
    container,
    {
      duration: 1,
      backgroundColor: colors.turquoise400,
      ease: "none"
    },
    0
  ).to(
    container,
    {
      duration: 1,
      backgroundColor: colors.yellow100,
      ease: "none"
    },
    1
  ).to(
    container,
    {
      duration: 1,
      backgroundColor: colors.red100,
      ease: "none"
    },
    2
  );
}

// app/utils/animations/contact.ts
var target = ".ghost";
function animateContact(gsap5) {
  const randomX = random3(10, 40);
  const randomY = random3(20, 60);
  const randomTime = random3(1, 3);
  const randomTime2 = random3(3, 5);
  const randomAngle = random3(5, 8);
  gsap5.set(target, {
    x: randomX(-1),
    y: randomX(1),
    rotation: randomAngle(-1)
  });
  moveX(target, 1);
  moveY(target, -1);
  rotate(target, 1);
  function rotate(target2, direction2) {
    gsap5.to(target2, {
      duration: randomTime2(),
      rotation: randomAngle(direction2),
      ease: "Sine.easeInOut",
      onComplete: rotate,
      onCompleteParams: [target2, direction2 * -1]
    });
  }
  function moveX(target2, direction2) {
    gsap5.to(target2, {
      duration: randomTime(),
      x: randomX(direction2),
      ease: "Sine.easeInOut",
      onComplete: moveX,
      onCompleteParams: [target2, direction2 * -1]
    });
  }
  function moveY(target2, direction2) {
    gsap5.to(target2, {
      duration: randomTime(),
      y: randomY(direction2),
      ease: "Sine.easeInOut",
      onComplete: moveY,
      onCompleteParams: [target2, direction2 * -1]
    });
  }
  function random3(min, max) {
    const delta = max - min;
    return (direction2 = 1) => (min + delta * Math.random()) * direction2;
  }
}

// node_modules/tslib/modules/index.js
var import_tslib = __toESM(require_tslib(), 1);
var {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __exportStar,
  __createBinding,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet
} = import_tslib.default;

// node_modules/smooth-scrollbar/polyfills.js
var import_map = __toESM(require_map());
var import_set = __toESM(require_set());
var import_weak_map = __toESM(require_weak_map());
var import_from = __toESM(require_from());
var import_assign = __toESM(require_assign());

// node_modules/smooth-scrollbar/scrollbar.js
var import_lodash9 = __toESM(require_lodash());

// node_modules/smooth-scrollbar/decorators/range.js
var import_lodash = __toESM(require_lodash());
function range(min, max) {
  if (min === void 0) {
    min = -Infinity;
  }
  if (max === void 0) {
    max = Infinity;
  }
  return function(proto, key) {
    var alias = "_" + key;
    Object.defineProperty(proto, key, {
      get: function() {
        return this[alias];
      },
      set: function(val) {
        Object.defineProperty(this, alias, {
          value: (0, import_lodash.default)(val, min, max),
          enumerable: false,
          writable: true,
          configurable: true
        });
      },
      enumerable: true,
      configurable: true
    });
  };
}

// node_modules/smooth-scrollbar/decorators/boolean.js
function boolean(proto, key) {
  var alias = "_" + key;
  Object.defineProperty(proto, key, {
    get: function() {
      return this[alias];
    },
    set: function(val) {
      Object.defineProperty(this, alias, {
        value: !!val,
        enumerable: false,
        writable: true,
        configurable: true
      });
    },
    enumerable: true,
    configurable: true
  });
}

// node_modules/smooth-scrollbar/decorators/debounce.js
var import_lodash2 = __toESM(require_lodash2());
function debounce() {
  var options = [];
  for (var _i2 = 0; _i2 < arguments.length; _i2++) {
    options[_i2] = arguments[_i2];
  }
  return function(_proto, key, descriptor) {
    var fn = descriptor.value;
    return {
      get: function() {
        if (!this.hasOwnProperty(key)) {
          Object.defineProperty(this, key, {
            value: import_lodash2.default.apply(void 0, __spreadArrays([fn], options))
          });
        }
        return this[key];
      }
    };
  };
}

// node_modules/smooth-scrollbar/options.js
var Options = function() {
  function Options2(config4) {
    var _this = this;
    if (config4 === void 0) {
      config4 = {};
    }
    this.damping = 0.1;
    this.thumbMinSize = 20;
    this.renderByPixels = true;
    this.alwaysShowTracks = false;
    this.continuousScrolling = true;
    this.delegateTo = null;
    this.plugins = {};
    Object.keys(config4).forEach(function(prop) {
      _this[prop] = config4[prop];
    });
  }
  Object.defineProperty(Options2.prototype, "wheelEventTarget", {
    get: function() {
      return this.delegateTo;
    },
    set: function(el) {
      console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead.");
      this.delegateTo = el;
    },
    enumerable: true,
    configurable: true
  });
  __decorate([
    range(0, 1)
  ], Options2.prototype, "damping", void 0);
  __decorate([
    range(0, Infinity)
  ], Options2.prototype, "thumbMinSize", void 0);
  __decorate([
    boolean
  ], Options2.prototype, "renderByPixels", void 0);
  __decorate([
    boolean
  ], Options2.prototype, "alwaysShowTracks", void 0);
  __decorate([
    boolean
  ], Options2.prototype, "continuousScrolling", void 0);
  return Options2;
}();

// node_modules/smooth-scrollbar/utils/event-hub.js
var eventListenerOptions;
var eventMap = /* @__PURE__ */ new WeakMap();
function getOptions() {
  if (eventListenerOptions !== void 0) {
    return eventListenerOptions;
  }
  var supportPassiveEvent = false;
  try {
    var noop = function() {
    };
    var options = Object.defineProperty({}, "passive", {
      get: function() {
        supportPassiveEvent = true;
      }
    });
    window.addEventListener("testPassive", noop, options);
    window.removeEventListener("testPassive", noop, options);
  } catch (e) {
  }
  eventListenerOptions = supportPassiveEvent ? { passive: false } : false;
  return eventListenerOptions;
}
function eventScope(scrollbar) {
  var configs = eventMap.get(scrollbar) || [];
  eventMap.set(scrollbar, configs);
  return function addEvent(elem, events, fn) {
    function handler(event) {
      if (event.defaultPrevented) {
        return;
      }
      fn(event);
    }
    events.split(/\s+/g).forEach(function(eventName) {
      configs.push({ elem, eventName, handler });
      elem.addEventListener(eventName, handler, getOptions());
    });
  };
}
function clearEventsOn(scrollbar) {
  var configs = eventMap.get(scrollbar);
  if (!configs) {
    return;
  }
  configs.forEach(function(_a) {
    var elem = _a.elem, eventName = _a.eventName, handler = _a.handler;
    elem.removeEventListener(eventName, handler, getOptions());
  });
  eventMap.delete(scrollbar);
}

// node_modules/smooth-scrollbar/utils/get-pointer-data.js
function getPointerData(evt) {
  return evt.touches ? evt.touches[evt.touches.length - 1] : evt;
}

// node_modules/smooth-scrollbar/utils/get-position.js
function getPosition(evt) {
  var data = getPointerData(evt);
  return {
    x: data.clientX,
    y: data.clientY
  };
}

// node_modules/smooth-scrollbar/utils/is-one-of.js
function isOneOf(a, b) {
  if (b === void 0) {
    b = [];
  }
  return b.some(function(v) {
    return a === v;
  });
}

// node_modules/smooth-scrollbar/utils/set-style.js
var VENDOR_PREFIX = [
  "webkit",
  "moz",
  "ms",
  "o"
];
var RE = new RegExp("^-(?!(?:" + VENDOR_PREFIX.join("|") + ")-)");
function autoPrefix(styles) {
  var res = {};
  Object.keys(styles).forEach(function(prop) {
    if (!RE.test(prop)) {
      res[prop] = styles[prop];
      return;
    }
    var val = styles[prop];
    prop = prop.replace(/^-/, "");
    res[prop] = val;
    VENDOR_PREFIX.forEach(function(prefix) {
      res["-" + prefix + "-" + prop] = val;
    });
  });
  return res;
}
function setStyle(elem, styles) {
  styles = autoPrefix(styles);
  Object.keys(styles).forEach(function(prop) {
    var cssProp = prop.replace(/^-/, "").replace(/-([a-z])/g, function(_, $1) {
      return $1.toUpperCase();
    });
    elem.style[cssProp] = styles[prop];
  });
}

// node_modules/smooth-scrollbar/utils/touch-record.js
var Tracker = function() {
  function Tracker2(touch) {
    this.velocityMultiplier = window.devicePixelRatio;
    this.updateTime = Date.now();
    this.delta = { x: 0, y: 0 };
    this.velocity = { x: 0, y: 0 };
    this.lastPosition = { x: 0, y: 0 };
    this.lastPosition = getPosition(touch);
  }
  Tracker2.prototype.update = function(touch) {
    var _a = this, velocity = _a.velocity, updateTime = _a.updateTime, lastPosition = _a.lastPosition;
    var now = Date.now();
    var position2 = getPosition(touch);
    var delta = {
      x: -(position2.x - lastPosition.x),
      y: -(position2.y - lastPosition.y)
    };
    var duration = now - updateTime || 16.7;
    var vx = delta.x / duration * 16.7;
    var vy = delta.y / duration * 16.7;
    velocity.x = vx * this.velocityMultiplier;
    velocity.y = vy * this.velocityMultiplier;
    this.delta = delta;
    this.updateTime = now;
    this.lastPosition = position2;
  };
  return Tracker2;
}();
var TouchRecord = function() {
  function TouchRecord2() {
    this._touchList = {};
  }
  Object.defineProperty(TouchRecord2.prototype, "_primitiveValue", {
    get: function() {
      return { x: 0, y: 0 };
    },
    enumerable: true,
    configurable: true
  });
  TouchRecord2.prototype.isActive = function() {
    return this._activeTouchID !== void 0;
  };
  TouchRecord2.prototype.getDelta = function() {
    var tracker = this._getActiveTracker();
    if (!tracker) {
      return this._primitiveValue;
    }
    return __assign({}, tracker.delta);
  };
  TouchRecord2.prototype.getVelocity = function() {
    var tracker = this._getActiveTracker();
    if (!tracker) {
      return this._primitiveValue;
    }
    return __assign({}, tracker.velocity);
  };
  TouchRecord2.prototype.getEasingDistance = function(damping) {
    var deAcceleration = 1 - damping;
    var distance = {
      x: 0,
      y: 0
    };
    var vel = this.getVelocity();
    Object.keys(vel).forEach(function(dir) {
      var v = Math.abs(vel[dir]) <= 10 ? 0 : vel[dir];
      while (v !== 0) {
        distance[dir] += v;
        v = v * deAcceleration | 0;
      }
    });
    return distance;
  };
  TouchRecord2.prototype.track = function(evt) {
    var _this = this;
    var targetTouches = evt.targetTouches;
    Array.from(targetTouches).forEach(function(touch) {
      _this._add(touch);
    });
    return this._touchList;
  };
  TouchRecord2.prototype.update = function(evt) {
    var _this = this;
    var touches = evt.touches, changedTouches = evt.changedTouches;
    Array.from(touches).forEach(function(touch) {
      _this._renew(touch);
    });
    this._setActiveID(changedTouches);
    return this._touchList;
  };
  TouchRecord2.prototype.release = function(evt) {
    var _this = this;
    delete this._activeTouchID;
    Array.from(evt.changedTouches).forEach(function(touch) {
      _this._delete(touch);
    });
  };
  TouchRecord2.prototype._add = function(touch) {
    if (this._has(touch)) {
      this._delete(touch);
    }
    var tracker = new Tracker(touch);
    this._touchList[touch.identifier] = tracker;
  };
  TouchRecord2.prototype._renew = function(touch) {
    if (!this._has(touch)) {
      return;
    }
    var tracker = this._touchList[touch.identifier];
    tracker.update(touch);
  };
  TouchRecord2.prototype._delete = function(touch) {
    delete this._touchList[touch.identifier];
  };
  TouchRecord2.prototype._has = function(touch) {
    return this._touchList.hasOwnProperty(touch.identifier);
  };
  TouchRecord2.prototype._setActiveID = function(touches) {
    this._activeTouchID = touches[touches.length - 1].identifier;
  };
  TouchRecord2.prototype._getActiveTracker = function() {
    var _a = this, _touchList = _a._touchList, _activeTouchID = _a._activeTouchID;
    return _touchList[_activeTouchID];
  };
  return TouchRecord2;
}();

// node_modules/smooth-scrollbar/track/direction.js
var TrackDirection;
(function(TrackDirection2) {
  TrackDirection2["X"] = "x";
  TrackDirection2["Y"] = "y";
})(TrackDirection || (TrackDirection = {}));

// node_modules/smooth-scrollbar/track/thumb.js
var ScrollbarThumb = function() {
  function ScrollbarThumb2(_direction2, _minSize) {
    if (_minSize === void 0) {
      _minSize = 0;
    }
    this._direction = _direction2;
    this._minSize = _minSize;
    this.element = document.createElement("div");
    this.displaySize = 0;
    this.realSize = 0;
    this.offset = 0;
    this.element.className = "scrollbar-thumb scrollbar-thumb-" + _direction2;
  }
  ScrollbarThumb2.prototype.attachTo = function(trackEl) {
    trackEl.appendChild(this.element);
  };
  ScrollbarThumb2.prototype.update = function(scrollOffset, containerSize, pageSize) {
    this.realSize = Math.min(containerSize / pageSize, 1) * containerSize;
    this.displaySize = Math.max(this.realSize, this._minSize);
    this.offset = scrollOffset / pageSize * (containerSize + (this.realSize - this.displaySize));
    setStyle(this.element, this._getStyle());
  };
  ScrollbarThumb2.prototype._getStyle = function() {
    switch (this._direction) {
      case TrackDirection.X:
        return {
          width: this.displaySize + "px",
          "-transform": "translate3d(" + this.offset + "px, 0, 0)"
        };
      case TrackDirection.Y:
        return {
          height: this.displaySize + "px",
          "-transform": "translate3d(0, " + this.offset + "px, 0)"
        };
      default:
        return null;
    }
  };
  return ScrollbarThumb2;
}();

// node_modules/smooth-scrollbar/track/track.js
var ScrollbarTrack = function() {
  function ScrollbarTrack2(direction2, thumbMinSize) {
    if (thumbMinSize === void 0) {
      thumbMinSize = 0;
    }
    this.element = document.createElement("div");
    this._isShown = false;
    this.element.className = "scrollbar-track scrollbar-track-" + direction2;
    this.thumb = new ScrollbarThumb(direction2, thumbMinSize);
    this.thumb.attachTo(this.element);
  }
  ScrollbarTrack2.prototype.attachTo = function(scrollbarContainer) {
    scrollbarContainer.appendChild(this.element);
  };
  ScrollbarTrack2.prototype.show = function() {
    if (this._isShown) {
      return;
    }
    this._isShown = true;
    this.element.classList.add("show");
  };
  ScrollbarTrack2.prototype.hide = function() {
    if (!this._isShown) {
      return;
    }
    this._isShown = false;
    this.element.classList.remove("show");
  };
  ScrollbarTrack2.prototype.update = function(scrollOffset, containerSize, pageSize) {
    setStyle(this.element, {
      display: pageSize <= containerSize ? "none" : "block"
    });
    this.thumb.update(scrollOffset, containerSize, pageSize);
  };
  return ScrollbarTrack2;
}();

// node_modules/smooth-scrollbar/track/index.js
var TrackController = function() {
  function TrackController2(_scrollbar) {
    this._scrollbar = _scrollbar;
    var thumbMinSize = _scrollbar.options.thumbMinSize;
    this.xAxis = new ScrollbarTrack(TrackDirection.X, thumbMinSize);
    this.yAxis = new ScrollbarTrack(TrackDirection.Y, thumbMinSize);
    this.xAxis.attachTo(_scrollbar.containerEl);
    this.yAxis.attachTo(_scrollbar.containerEl);
    if (_scrollbar.options.alwaysShowTracks) {
      this.xAxis.show();
      this.yAxis.show();
    }
  }
  TrackController2.prototype.update = function() {
    var _a = this._scrollbar, size2 = _a.size, offset = _a.offset;
    this.xAxis.update(offset.x, size2.container.width, size2.content.width);
    this.yAxis.update(offset.y, size2.container.height, size2.content.height);
  };
  TrackController2.prototype.autoHideOnIdle = function() {
    if (this._scrollbar.options.alwaysShowTracks) {
      return;
    }
    this.xAxis.hide();
    this.yAxis.hide();
  };
  __decorate([
    debounce(300)
  ], TrackController2.prototype, "autoHideOnIdle", null);
  return TrackController2;
}();

// node_modules/smooth-scrollbar/geometry/get-size.js
function getSize(scrollbar) {
  var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
  var containerStyles = getComputedStyle(containerEl);
  var paddings = [
    "paddingTop",
    "paddingBottom",
    "paddingLeft",
    "paddingRight"
  ].map(function(prop) {
    return containerStyles[prop] ? parseFloat(containerStyles[prop]) : 0;
  });
  var verticalPadding = paddings[0] + paddings[1];
  var horizontalPadding = paddings[2] + paddings[3];
  return {
    container: {
      width: containerEl.clientWidth,
      height: containerEl.clientHeight
    },
    content: {
      width: contentEl.offsetWidth - contentEl.clientWidth + contentEl.scrollWidth + horizontalPadding,
      height: contentEl.offsetHeight - contentEl.clientHeight + contentEl.scrollHeight + verticalPadding
    }
  };
}

// node_modules/smooth-scrollbar/geometry/is-visible.js
function isVisible(scrollbar, elem) {
  var bounding = scrollbar.bounding;
  var targetBounding = elem.getBoundingClientRect();
  var top = Math.max(bounding.top, targetBounding.top);
  var left = Math.max(bounding.left, targetBounding.left);
  var right = Math.min(bounding.right, targetBounding.right);
  var bottom = Math.min(bounding.bottom, targetBounding.bottom);
  return top < bottom && left < right;
}

// node_modules/smooth-scrollbar/geometry/update.js
function update(scrollbar) {
  var newSize = scrollbar.getSize();
  var limit = {
    x: Math.max(newSize.content.width - newSize.container.width, 0),
    y: Math.max(newSize.content.height - newSize.container.height, 0)
  };
  var containerBounding = scrollbar.containerEl.getBoundingClientRect();
  var bounding = {
    top: Math.max(containerBounding.top, 0),
    right: Math.min(containerBounding.right, window.innerWidth),
    bottom: Math.min(containerBounding.bottom, window.innerHeight),
    left: Math.max(containerBounding.left, 0)
  };
  scrollbar.size = newSize;
  scrollbar.limit = limit;
  scrollbar.bounding = bounding;
  scrollbar.track.update();
  scrollbar.setPosition();
}

// node_modules/smooth-scrollbar/scrolling/set-position.js
var import_lodash3 = __toESM(require_lodash());
function setPosition(scrollbar, x, y) {
  var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit, track = scrollbar.track, contentEl = scrollbar.contentEl;
  if (options.renderByPixels) {
    x = Math.round(x);
    y = Math.round(y);
  }
  x = (0, import_lodash3.default)(x, 0, limit.x);
  y = (0, import_lodash3.default)(y, 0, limit.y);
  if (x !== offset.x)
    track.xAxis.show();
  if (y !== offset.y)
    track.yAxis.show();
  if (!options.alwaysShowTracks) {
    track.autoHideOnIdle();
  }
  if (x === offset.x && y === offset.y) {
    return null;
  }
  offset.x = x;
  offset.y = y;
  setStyle(contentEl, {
    "-transform": "translate3d(" + -x + "px, " + -y + "px, 0)"
  });
  track.update();
  return {
    offset: __assign({}, offset),
    limit: __assign({}, limit)
  };
}

// node_modules/smooth-scrollbar/scrolling/scroll-to.js
var import_lodash4 = __toESM(require_lodash());
var animationIDStorage = /* @__PURE__ */ new WeakMap();
function scrollTo(scrollbar, x, y, duration, _a) {
  if (duration === void 0) {
    duration = 0;
  }
  var _b = _a === void 0 ? {} : _a, _c = _b.easing, easing = _c === void 0 ? defaultEasing : _c, callback = _b.callback;
  var options = scrollbar.options, offset = scrollbar.offset, limit = scrollbar.limit;
  if (options.renderByPixels) {
    x = Math.round(x);
    y = Math.round(y);
  }
  var startX = offset.x;
  var startY = offset.y;
  var disX = (0, import_lodash4.default)(x, 0, limit.x) - startX;
  var disY = (0, import_lodash4.default)(y, 0, limit.y) - startY;
  var start = Date.now();
  function scroll() {
    var elapse = Date.now() - start;
    var progress = duration ? easing(Math.min(elapse / duration, 1)) : 1;
    scrollbar.setPosition(startX + disX * progress, startY + disY * progress);
    if (elapse >= duration) {
      if (typeof callback === "function") {
        callback.call(scrollbar);
      }
    } else {
      var animationID = requestAnimationFrame(scroll);
      animationIDStorage.set(scrollbar, animationID);
    }
  }
  cancelAnimationFrame(animationIDStorage.get(scrollbar));
  scroll();
}
function defaultEasing(t) {
  return Math.pow(t - 1, 3) + 1;
}

// node_modules/smooth-scrollbar/scrolling/scroll-into-view.js
var import_lodash5 = __toESM(require_lodash());
function scrollIntoView(scrollbar, elem, _a) {
  var _b = _a === void 0 ? {} : _a, _c = _b.alignToTop, alignToTop = _c === void 0 ? true : _c, _d = _b.onlyScrollIfNeeded, onlyScrollIfNeeded = _d === void 0 ? false : _d, _e = _b.offsetTop, offsetTop = _e === void 0 ? 0 : _e, _f = _b.offsetLeft, offsetLeft = _f === void 0 ? 0 : _f, _g = _b.offsetBottom, offsetBottom = _g === void 0 ? 0 : _g;
  var containerEl = scrollbar.containerEl, bounding = scrollbar.bounding, offset = scrollbar.offset, limit = scrollbar.limit;
  if (!elem || !containerEl.contains(elem))
    return;
  var targetBounding = elem.getBoundingClientRect();
  if (onlyScrollIfNeeded && scrollbar.isVisible(elem))
    return;
  var delta = alignToTop ? targetBounding.top - bounding.top - offsetTop : targetBounding.bottom - bounding.bottom + offsetBottom;
  scrollbar.setMomentum(targetBounding.left - bounding.left - offsetLeft, (0, import_lodash5.default)(delta, -offset.y, limit.y - offset.y));
}

// node_modules/smooth-scrollbar/plugin.js
var ScrollbarPlugin = function() {
  function ScrollbarPlugin2(scrollbar, options) {
    var _newTarget = this.constructor;
    this.scrollbar = scrollbar;
    this.name = _newTarget.pluginName;
    this.options = __assign(__assign({}, _newTarget.defaultOptions), options);
  }
  ScrollbarPlugin2.prototype.onInit = function() {
  };
  ScrollbarPlugin2.prototype.onDestroy = function() {
  };
  ScrollbarPlugin2.prototype.onUpdate = function() {
  };
  ScrollbarPlugin2.prototype.onRender = function(_remainMomentum) {
  };
  ScrollbarPlugin2.prototype.transformDelta = function(delta, _evt) {
    return __assign({}, delta);
  };
  ScrollbarPlugin2.pluginName = "";
  ScrollbarPlugin2.defaultOptions = {};
  return ScrollbarPlugin2;
}();
var globalPlugins = {
  order: /* @__PURE__ */ new Set(),
  constructors: {}
};
function addPlugins() {
  var Plugins = [];
  for (var _i2 = 0; _i2 < arguments.length; _i2++) {
    Plugins[_i2] = arguments[_i2];
  }
  Plugins.forEach(function(P) {
    var pluginName = P.pluginName;
    if (!pluginName) {
      throw new TypeError("plugin name is required");
    }
    globalPlugins.order.add(pluginName);
    globalPlugins.constructors[pluginName] = P;
  });
}
function initPlugins(scrollbar, options) {
  return Array.from(globalPlugins.order).filter(function(pluginName) {
    return options[pluginName] !== false;
  }).map(function(pluginName) {
    var Plugin = globalPlugins.constructors[pluginName];
    var instance = new Plugin(scrollbar, options[pluginName]);
    options[pluginName] = instance.options;
    return instance;
  });
}

// node_modules/smooth-scrollbar/events/index.js
var events_exports = {};
__export(events_exports, {
  keyboardHandler: () => keyboardHandler,
  mouseHandler: () => mouseHandler,
  resizeHandler: () => resizeHandler,
  selectHandler: () => selectHandler,
  touchHandler: () => touchHandler,
  wheelHandler: () => wheelHandler
});

// node_modules/smooth-scrollbar/events/keyboard.js
var KEY_CODE;
(function(KEY_CODE2) {
  KEY_CODE2[KEY_CODE2["TAB"] = 9] = "TAB";
  KEY_CODE2[KEY_CODE2["SPACE"] = 32] = "SPACE";
  KEY_CODE2[KEY_CODE2["PAGE_UP"] = 33] = "PAGE_UP";
  KEY_CODE2[KEY_CODE2["PAGE_DOWN"] = 34] = "PAGE_DOWN";
  KEY_CODE2[KEY_CODE2["END"] = 35] = "END";
  KEY_CODE2[KEY_CODE2["HOME"] = 36] = "HOME";
  KEY_CODE2[KEY_CODE2["LEFT"] = 37] = "LEFT";
  KEY_CODE2[KEY_CODE2["UP"] = 38] = "UP";
  KEY_CODE2[KEY_CODE2["RIGHT"] = 39] = "RIGHT";
  KEY_CODE2[KEY_CODE2["DOWN"] = 40] = "DOWN";
})(KEY_CODE || (KEY_CODE = {}));
function keyboardHandler(scrollbar) {
  var addEvent = eventScope(scrollbar);
  var container = scrollbar.containerEl;
  addEvent(container, "keydown", function(evt) {
    var activeElement = document.activeElement;
    if (activeElement !== container && !container.contains(activeElement)) {
      return;
    }
    if (isEditable(activeElement)) {
      return;
    }
    var delta = getKeyDelta(scrollbar, evt.keyCode || evt.which);
    if (!delta) {
      return;
    }
    var x = delta[0], y = delta[1];
    scrollbar.addTransformableMomentum(x, y, evt, function(willScroll) {
      if (willScroll) {
        evt.preventDefault();
      } else {
        scrollbar.containerEl.blur();
        if (scrollbar.parent) {
          scrollbar.parent.containerEl.focus();
        }
      }
    });
  });
}
function getKeyDelta(scrollbar, keyCode) {
  var size2 = scrollbar.size, limit = scrollbar.limit, offset = scrollbar.offset;
  switch (keyCode) {
    case KEY_CODE.TAB:
      return handleTabKey(scrollbar);
    case KEY_CODE.SPACE:
      return [0, 200];
    case KEY_CODE.PAGE_UP:
      return [0, -size2.container.height + 40];
    case KEY_CODE.PAGE_DOWN:
      return [0, size2.container.height - 40];
    case KEY_CODE.END:
      return [0, limit.y - offset.y];
    case KEY_CODE.HOME:
      return [0, -offset.y];
    case KEY_CODE.LEFT:
      return [-40, 0];
    case KEY_CODE.UP:
      return [0, -40];
    case KEY_CODE.RIGHT:
      return [40, 0];
    case KEY_CODE.DOWN:
      return [0, 40];
    default:
      return null;
  }
}
function handleTabKey(scrollbar) {
  requestAnimationFrame(function() {
    scrollbar.scrollIntoView(document.activeElement, {
      offsetTop: scrollbar.size.container.height / 2,
      offsetLeft: scrollbar.size.container.width / 2,
      onlyScrollIfNeeded: true
    });
  });
}
function isEditable(elem) {
  if (elem.tagName === "INPUT" || elem.tagName === "SELECT" || elem.tagName === "TEXTAREA" || elem.isContentEditable) {
    return !elem.disabled;
  }
  return false;
}

// node_modules/smooth-scrollbar/events/mouse.js
var import_lodash6 = __toESM(require_lodash());
var Direction;
(function(Direction2) {
  Direction2[Direction2["X"] = 0] = "X";
  Direction2[Direction2["Y"] = 1] = "Y";
})(Direction || (Direction = {}));
function mouseHandler(scrollbar) {
  var addEvent = eventScope(scrollbar);
  var container = scrollbar.containerEl;
  var _a = scrollbar.track, xAxis = _a.xAxis, yAxis = _a.yAxis;
  function calcMomentum2(direction2, clickPosition) {
    var size2 = scrollbar.size, limit = scrollbar.limit, offset = scrollbar.offset;
    if (direction2 === Direction.X) {
      var totalWidth = size2.container.width + (xAxis.thumb.realSize - xAxis.thumb.displaySize);
      return (0, import_lodash6.default)(clickPosition / totalWidth * size2.content.width, 0, limit.x) - offset.x;
    }
    if (direction2 === Direction.Y) {
      var totalHeight = size2.container.height + (yAxis.thumb.realSize - yAxis.thumb.displaySize);
      return (0, import_lodash6.default)(clickPosition / totalHeight * size2.content.height, 0, limit.y) - offset.y;
    }
    return 0;
  }
  function getTrackDirection(elem) {
    if (isOneOf(elem, [xAxis.element, xAxis.thumb.element])) {
      return Direction.X;
    }
    if (isOneOf(elem, [yAxis.element, yAxis.thumb.element])) {
      return Direction.Y;
    }
    return void 0;
  }
  var isMouseDown;
  var isMouseMoving;
  var startOffsetToThumb;
  var trackDirection;
  var containerRect;
  addEvent(container, "click", function(evt) {
    if (isMouseMoving || !isOneOf(evt.target, [xAxis.element, yAxis.element])) {
      return;
    }
    var track = evt.target;
    var direction2 = getTrackDirection(track);
    var rect = track.getBoundingClientRect();
    var clickPos = getPosition(evt);
    if (direction2 === Direction.X) {
      var offsetOnTrack = clickPos.x - rect.left - xAxis.thumb.displaySize / 2;
      scrollbar.setMomentum(calcMomentum2(direction2, offsetOnTrack), 0);
    }
    if (direction2 === Direction.Y) {
      var offsetOnTrack = clickPos.y - rect.top - yAxis.thumb.displaySize / 2;
      scrollbar.setMomentum(0, calcMomentum2(direction2, offsetOnTrack));
    }
  });
  addEvent(container, "mousedown", function(evt) {
    if (!isOneOf(evt.target, [xAxis.thumb.element, yAxis.thumb.element])) {
      return;
    }
    isMouseDown = true;
    var thumb = evt.target;
    var cursorPos = getPosition(evt);
    var thumbRect = thumb.getBoundingClientRect();
    trackDirection = getTrackDirection(thumb);
    startOffsetToThumb = {
      x: cursorPos.x - thumbRect.left,
      y: cursorPos.y - thumbRect.top
    };
    containerRect = container.getBoundingClientRect();
    setStyle(scrollbar.containerEl, {
      "-user-select": "none"
    });
  });
  addEvent(window, "mousemove", function(evt) {
    if (!isMouseDown)
      return;
    isMouseMoving = true;
    var cursorPos = getPosition(evt);
    if (trackDirection === Direction.X) {
      var offsetOnTrack = cursorPos.x - startOffsetToThumb.x - containerRect.left;
      scrollbar.setMomentum(calcMomentum2(trackDirection, offsetOnTrack), 0);
    }
    if (trackDirection === Direction.Y) {
      var offsetOnTrack = cursorPos.y - startOffsetToThumb.y - containerRect.top;
      scrollbar.setMomentum(0, calcMomentum2(trackDirection, offsetOnTrack));
    }
  });
  addEvent(window, "mouseup blur", function() {
    isMouseDown = isMouseMoving = false;
    setStyle(scrollbar.containerEl, {
      "-user-select": ""
    });
  });
}

// node_modules/smooth-scrollbar/events/resize.js
var import_lodash7 = __toESM(require_lodash2());
function resizeHandler(scrollbar) {
  var addEvent = eventScope(scrollbar);
  addEvent(window, "resize", (0, import_lodash7.default)(scrollbar.update.bind(scrollbar), 300));
}

// node_modules/smooth-scrollbar/events/select.js
var import_lodash8 = __toESM(require_lodash());
function selectHandler(scrollbar) {
  var addEvent = eventScope(scrollbar);
  var containerEl = scrollbar.containerEl, contentEl = scrollbar.contentEl;
  var isSelected = false;
  var isContextMenuOpened = false;
  var animationID;
  function scroll(_a) {
    var x = _a.x, y = _a.y;
    if (!x && !y)
      return;
    var offset = scrollbar.offset, limit = scrollbar.limit;
    scrollbar.setMomentum((0, import_lodash8.default)(offset.x + x, 0, limit.x) - offset.x, (0, import_lodash8.default)(offset.y + y, 0, limit.y) - offset.y);
    animationID = requestAnimationFrame(function() {
      scroll({ x, y });
    });
  }
  addEvent(window, "mousemove", function(evt) {
    if (!isSelected)
      return;
    cancelAnimationFrame(animationID);
    var dir = calcMomentum(scrollbar, evt);
    scroll(dir);
  });
  addEvent(contentEl, "contextmenu", function() {
    isContextMenuOpened = true;
    cancelAnimationFrame(animationID);
    isSelected = false;
  });
  addEvent(contentEl, "mousedown", function() {
    isContextMenuOpened = false;
  });
  addEvent(contentEl, "selectstart", function() {
    if (isContextMenuOpened) {
      return;
    }
    cancelAnimationFrame(animationID);
    isSelected = true;
  });
  addEvent(window, "mouseup blur", function() {
    cancelAnimationFrame(animationID);
    isSelected = false;
    isContextMenuOpened = false;
  });
  addEvent(containerEl, "scroll", function(evt) {
    evt.preventDefault();
    containerEl.scrollTop = containerEl.scrollLeft = 0;
  });
}
function calcMomentum(scrollbar, evt) {
  var _a = scrollbar.bounding, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left;
  var _b = getPosition(evt), x = _b.x, y = _b.y;
  var res = {
    x: 0,
    y: 0
  };
  var padding2 = 20;
  if (x === 0 && y === 0)
    return res;
  if (x > right - padding2) {
    res.x = x - right + padding2;
  } else if (x < left + padding2) {
    res.x = x - left - padding2;
  }
  if (y > bottom - padding2) {
    res.y = y - bottom + padding2;
  } else if (y < top + padding2) {
    res.y = y - top - padding2;
  }
  res.x *= 2;
  res.y *= 2;
  return res;
}

// node_modules/smooth-scrollbar/events/touch.js
var activeScrollbar;
function touchHandler(scrollbar) {
  var target2 = scrollbar.options.delegateTo || scrollbar.containerEl;
  var touchRecord = new TouchRecord();
  var addEvent = eventScope(scrollbar);
  var damping;
  var pointerCount = 0;
  addEvent(target2, "touchstart", function(evt) {
    touchRecord.track(evt);
    scrollbar.setMomentum(0, 0);
    if (pointerCount === 0) {
      damping = scrollbar.options.damping;
      scrollbar.options.damping = Math.max(damping, 0.5);
    }
    pointerCount++;
  });
  addEvent(target2, "touchmove", function(evt) {
    if (activeScrollbar && activeScrollbar !== scrollbar)
      return;
    touchRecord.update(evt);
    var _a = touchRecord.getDelta(), x = _a.x, y = _a.y;
    scrollbar.addTransformableMomentum(x, y, evt, function(willScroll) {
      if (willScroll && evt.cancelable) {
        evt.preventDefault();
        activeScrollbar = scrollbar;
      }
    });
  });
  addEvent(target2, "touchcancel touchend", function(evt) {
    var delta = touchRecord.getEasingDistance(damping);
    scrollbar.addTransformableMomentum(delta.x, delta.y, evt);
    pointerCount--;
    if (pointerCount === 0) {
      scrollbar.options.damping = damping;
    }
    touchRecord.release(evt);
    activeScrollbar = null;
  });
}

// node_modules/smooth-scrollbar/events/wheel.js
function wheelHandler(scrollbar) {
  var addEvent = eventScope(scrollbar);
  var target2 = scrollbar.options.delegateTo || scrollbar.containerEl;
  var eventName = "onwheel" in window || document.implementation.hasFeature("Events.wheel", "3.0") ? "wheel" : "mousewheel";
  addEvent(target2, eventName, function(evt) {
    var _a = normalizeDelta(evt), x = _a.x, y = _a.y;
    scrollbar.addTransformableMomentum(x, y, evt, function(willScroll) {
      if (willScroll) {
        evt.preventDefault();
      }
    });
  });
}
var DELTA_SCALE = {
  STANDARD: 1,
  OTHERS: -3
};
var DELTA_MODE = [1, 28, 500];
var getDeltaMode = function(mode) {
  return DELTA_MODE[mode] || DELTA_MODE[0];
};
function normalizeDelta(evt) {
  if ("deltaX" in evt) {
    var mode = getDeltaMode(evt.deltaMode);
    return {
      x: evt.deltaX / DELTA_SCALE.STANDARD * mode,
      y: evt.deltaY / DELTA_SCALE.STANDARD * mode
    };
  }
  if ("wheelDeltaX" in evt) {
    return {
      x: evt.wheelDeltaX / DELTA_SCALE.OTHERS,
      y: evt.wheelDeltaY / DELTA_SCALE.OTHERS
    };
  }
  return {
    x: 0,
    y: evt.wheelDelta / DELTA_SCALE.OTHERS
  };
}

// node_modules/smooth-scrollbar/scrollbar.js
var scrollbarMap = /* @__PURE__ */ new Map();
var Scrollbar = function() {
  function Scrollbar2(containerEl, options) {
    var _this = this;
    this.offset = {
      x: 0,
      y: 0
    };
    this.limit = {
      x: Infinity,
      y: Infinity
    };
    this.bounding = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
    this._plugins = [];
    this._momentum = { x: 0, y: 0 };
    this._listeners = /* @__PURE__ */ new Set();
    this.containerEl = containerEl;
    var contentEl = this.contentEl = document.createElement("div");
    this.options = new Options(options);
    containerEl.setAttribute("data-scrollbar", "true");
    containerEl.setAttribute("tabindex", "-1");
    setStyle(containerEl, {
      overflow: "hidden",
      outline: "none"
    });
    if (window.navigator.msPointerEnabled) {
      containerEl.style.msTouchAction = "none";
    }
    contentEl.className = "scroll-content";
    Array.from(containerEl.childNodes).forEach(function(node) {
      contentEl.appendChild(node);
    });
    containerEl.appendChild(contentEl);
    this.track = new TrackController(this);
    this.size = this.getSize();
    this._plugins = initPlugins(this, this.options.plugins);
    var scrollLeft = containerEl.scrollLeft, scrollTop = containerEl.scrollTop;
    containerEl.scrollLeft = containerEl.scrollTop = 0;
    this.setPosition(scrollLeft, scrollTop, {
      withoutCallbacks: true
    });
    var ResizeObserver = window.ResizeObserver;
    if (typeof ResizeObserver === "function") {
      this._observer = new ResizeObserver(function() {
        _this.update();
      });
      this._observer.observe(contentEl);
    }
    scrollbarMap.set(containerEl, this);
    requestAnimationFrame(function() {
      _this._init();
    });
  }
  Object.defineProperty(Scrollbar2.prototype, "parent", {
    get: function() {
      var elem = this.containerEl.parentElement;
      while (elem) {
        var parentScrollbar = scrollbarMap.get(elem);
        if (parentScrollbar) {
          return parentScrollbar;
        }
        elem = elem.parentElement;
      }
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Scrollbar2.prototype, "scrollTop", {
    get: function() {
      return this.offset.y;
    },
    set: function(y) {
      this.setPosition(this.scrollLeft, y);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Scrollbar2.prototype, "scrollLeft", {
    get: function() {
      return this.offset.x;
    },
    set: function(x) {
      this.setPosition(x, this.scrollTop);
    },
    enumerable: true,
    configurable: true
  });
  Scrollbar2.prototype.getSize = function() {
    return getSize(this);
  };
  Scrollbar2.prototype.update = function() {
    update(this);
    this._plugins.forEach(function(plugin) {
      plugin.onUpdate();
    });
  };
  Scrollbar2.prototype.isVisible = function(elem) {
    return isVisible(this, elem);
  };
  Scrollbar2.prototype.setPosition = function(x, y, options) {
    var _this = this;
    if (x === void 0) {
      x = this.offset.x;
    }
    if (y === void 0) {
      y = this.offset.y;
    }
    if (options === void 0) {
      options = {};
    }
    var status = setPosition(this, x, y);
    if (!status || options.withoutCallbacks) {
      return;
    }
    this._listeners.forEach(function(fn) {
      fn.call(_this, status);
    });
  };
  Scrollbar2.prototype.scrollTo = function(x, y, duration, options) {
    if (x === void 0) {
      x = this.offset.x;
    }
    if (y === void 0) {
      y = this.offset.y;
    }
    if (duration === void 0) {
      duration = 0;
    }
    if (options === void 0) {
      options = {};
    }
    scrollTo(this, x, y, duration, options);
  };
  Scrollbar2.prototype.scrollIntoView = function(elem, options) {
    if (options === void 0) {
      options = {};
    }
    scrollIntoView(this, elem, options);
  };
  Scrollbar2.prototype.addListener = function(fn) {
    if (typeof fn !== "function") {
      throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");
    }
    this._listeners.add(fn);
  };
  Scrollbar2.prototype.removeListener = function(fn) {
    this._listeners.delete(fn);
  };
  Scrollbar2.prototype.addTransformableMomentum = function(x, y, fromEvent, callback) {
    this._updateDebounced();
    var finalDelta = this._plugins.reduce(function(delta, plugin) {
      return plugin.transformDelta(delta, fromEvent) || delta;
    }, { x, y });
    var willScroll = !this._shouldPropagateMomentum(finalDelta.x, finalDelta.y);
    if (willScroll) {
      this.addMomentum(finalDelta.x, finalDelta.y);
    }
    if (callback) {
      callback.call(this, willScroll);
    }
  };
  Scrollbar2.prototype.addMomentum = function(x, y) {
    this.setMomentum(this._momentum.x + x, this._momentum.y + y);
  };
  Scrollbar2.prototype.setMomentum = function(x, y) {
    if (this.limit.x === 0) {
      x = 0;
    }
    if (this.limit.y === 0) {
      y = 0;
    }
    if (this.options.renderByPixels) {
      x = Math.round(x);
      y = Math.round(y);
    }
    this._momentum.x = x;
    this._momentum.y = y;
  };
  Scrollbar2.prototype.updatePluginOptions = function(pluginName, options) {
    this._plugins.forEach(function(plugin) {
      if (plugin.name === pluginName) {
        Object.assign(plugin.options, options);
      }
    });
  };
  Scrollbar2.prototype.destroy = function() {
    var _a = this, containerEl = _a.containerEl, contentEl = _a.contentEl;
    clearEventsOn(this);
    this._listeners.clear();
    this.setMomentum(0, 0);
    cancelAnimationFrame(this._renderID);
    if (this._observer) {
      this._observer.disconnect();
    }
    scrollbarMap.delete(this.containerEl);
    var childNodes = Array.from(contentEl.childNodes);
    while (containerEl.firstChild) {
      containerEl.removeChild(containerEl.firstChild);
    }
    childNodes.forEach(function(el) {
      containerEl.appendChild(el);
    });
    setStyle(containerEl, {
      overflow: ""
    });
    containerEl.scrollTop = this.scrollTop;
    containerEl.scrollLeft = this.scrollLeft;
    this._plugins.forEach(function(plugin) {
      plugin.onDestroy();
    });
    this._plugins.length = 0;
  };
  Scrollbar2.prototype._init = function() {
    var _this = this;
    this.update();
    Object.keys(events_exports).forEach(function(prop) {
      events_exports[prop](_this);
    });
    this._plugins.forEach(function(plugin) {
      plugin.onInit();
    });
    this._render();
  };
  Scrollbar2.prototype._updateDebounced = function() {
    this.update();
  };
  Scrollbar2.prototype._shouldPropagateMomentum = function(deltaX, deltaY) {
    if (deltaX === void 0) {
      deltaX = 0;
    }
    if (deltaY === void 0) {
      deltaY = 0;
    }
    var _a = this, options = _a.options, offset = _a.offset, limit = _a.limit;
    if (!options.continuousScrolling)
      return false;
    if (limit.x === 0 && limit.y === 0) {
      this._updateDebounced();
    }
    var destX = (0, import_lodash9.default)(deltaX + offset.x, 0, limit.x);
    var destY = (0, import_lodash9.default)(deltaY + offset.y, 0, limit.y);
    var res = true;
    res = res && destX === offset.x;
    res = res && destY === offset.y;
    res = res && (offset.x === limit.x || offset.x === 0 || offset.y === limit.y || offset.y === 0);
    return res;
  };
  Scrollbar2.prototype._render = function() {
    var _momentum = this._momentum;
    if (_momentum.x || _momentum.y) {
      var nextX = this._nextTick("x");
      var nextY = this._nextTick("y");
      _momentum.x = nextX.momentum;
      _momentum.y = nextY.momentum;
      this.setPosition(nextX.position, nextY.position);
    }
    var remain = __assign({}, this._momentum);
    this._plugins.forEach(function(plugin) {
      plugin.onRender(remain);
    });
    this._renderID = requestAnimationFrame(this._render.bind(this));
  };
  Scrollbar2.prototype._nextTick = function(direction2) {
    var _a = this, options = _a.options, offset = _a.offset, _momentum = _a._momentum;
    var current = offset[direction2];
    var remain = _momentum[direction2];
    if (Math.abs(remain) <= 0.1) {
      return {
        momentum: 0,
        position: current + remain
      };
    }
    var nextMomentum = remain * (1 - options.damping);
    if (options.renderByPixels) {
      nextMomentum |= 0;
    }
    return {
      momentum: nextMomentum,
      position: current + remain - nextMomentum
    };
  };
  __decorate([
    debounce(100, { leading: true })
  ], Scrollbar2.prototype, "_updateDebounced", null);
  return Scrollbar2;
}();

// node_modules/smooth-scrollbar/style.js
var TRACK_BG = "rgba(222, 222, 222, .75)";
var THUMB_BG = "rgba(0, 0, 0, .5)";
var SCROLLBAR_STYLE = "\n[data-scrollbar] {\n  display: block;\n  position: relative;\n}\n\n.scroll-content {\n  display: flow-root;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n}\n\n.scrollbar-track {\n  position: absolute;\n  opacity: 0;\n  z-index: 1;\n  background: " + TRACK_BG + ";\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-transition: opacity 0.5s 0.5s ease-out;\n          transition: opacity 0.5s 0.5s ease-out;\n}\n.scrollbar-track.show,\n.scrollbar-track:hover {\n  opacity: 1;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n\n.scrollbar-track-x {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 8px;\n}\n.scrollbar-track-y {\n  top: 0;\n  right: 0;\n  width: 8px;\n  height: 100%;\n}\n.scrollbar-thumb {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 8px;\n  height: 8px;\n  background: " + THUMB_BG + ";\n  border-radius: 4px;\n}\n";
var STYLE_ID = "smooth-scrollbar-style";
var isStyleAttached = false;
function attachStyle() {
  if (isStyleAttached || typeof window === "undefined") {
    return;
  }
  var styleEl = document.createElement("style");
  styleEl.id = STYLE_ID;
  styleEl.textContent = SCROLLBAR_STYLE;
  if (document.head) {
    document.head.appendChild(styleEl);
  }
  isStyleAttached = true;
}
function detachStyle() {
  if (!isStyleAttached || typeof window === "undefined") {
    return;
  }
  var styleEl = document.getElementById(STYLE_ID);
  if (!styleEl || !styleEl.parentNode) {
    return;
  }
  styleEl.parentNode.removeChild(styleEl);
  isStyleAttached = false;
}

// node_modules/smooth-scrollbar/index.js
var SmoothScrollbar = function(_super) {
  __extends(SmoothScrollbar2, _super);
  function SmoothScrollbar2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  SmoothScrollbar2.init = function(elem, options) {
    if (!elem || elem.nodeType !== 1) {
      throw new TypeError("expect element to be DOM Element, but got " + elem);
    }
    attachStyle();
    if (scrollbarMap.has(elem)) {
      return scrollbarMap.get(elem);
    }
    return new Scrollbar(elem, options);
  };
  SmoothScrollbar2.initAll = function(options) {
    return Array.from(document.querySelectorAll("[data-scrollbar]"), function(elem) {
      return SmoothScrollbar2.init(elem, options);
    });
  };
  SmoothScrollbar2.has = function(elem) {
    return scrollbarMap.has(elem);
  };
  SmoothScrollbar2.get = function(elem) {
    return scrollbarMap.get(elem);
  };
  SmoothScrollbar2.getAll = function() {
    return Array.from(scrollbarMap.values());
  };
  SmoothScrollbar2.destroy = function(elem) {
    var scrollbar = scrollbarMap.get(elem);
    if (scrollbar) {
      scrollbar.destroy();
    }
  };
  SmoothScrollbar2.destroyAll = function() {
    scrollbarMap.forEach(function(scrollbar) {
      scrollbar.destroy();
    });
  };
  SmoothScrollbar2.use = function() {
    var Plugins = [];
    for (var _i2 = 0; _i2 < arguments.length; _i2++) {
      Plugins[_i2] = arguments[_i2];
    }
    return addPlugins.apply(void 0, Plugins);
  };
  SmoothScrollbar2.attachStyle = function() {
    return attachStyle();
  };
  SmoothScrollbar2.detachStyle = function() {
    return detachStyle();
  };
  SmoothScrollbar2.version = "8.8.1";
  SmoothScrollbar2.ScrollbarPlugin = ScrollbarPlugin;
  return SmoothScrollbar2;
}(Scrollbar);
var smooth_scrollbar_default = SmoothScrollbar;

// app/utils/animations/smoothScrollbar.ts
var scrollerSelector = ".scroller";
function smoothScrollbar(scroller, ScrollTrigger3) {
  const smoothScrollOptions = {
    damping: 0.6,
    delegateTo: document,
    alwaysShowTracks: false,
    continuousScrolling: false
  };
  const bodyScrollBar = smooth_scrollbar_default.init(scroller, smoothScrollOptions);
  console.log({ bodyScrollBar });
  ScrollTrigger3.scrollerProxy(scrollerSelector, {
    scrollTop(value) {
      if (arguments.length) {
        bodyScrollBar.scrollTop = value;
      }
      return bodyScrollBar.scrollTop;
    }
  });
  bodyScrollBar.addListener(ScrollTrigger3.update);
  ScrollTrigger3.defaults({ scroller });
  const menuItemsSelector = ".menu__item__link";
  const sections = document.querySelectorAll(".section");
  sections.forEach((section, index) => {
    ScrollTrigger3.create({
      trigger: section,
      start: "top 50%",
      end: "bottom 50%",
      toggleClass: {
        targets: document.querySelector(`${menuItemsSelector}[href^="#${section.id}"]`),
        className: "active"
      }
    });
  });
}

// app/utils/animations/stack.ts
var selectors3 = {
  container: "#stack",
  skelly: ".skelly"
};
function animateStack(gsap5) {
  const stackTl = gsap5.timeline({
    scrollTrigger: {
      scrub: true,
      trigger: selectors3.container,
      start: "top 70%"
    }
  });
  stackTl.to(
    selectors3.skelly,
    {
      y: -180,
      ease: "power1.inOut"
    },
    0
  );
}

// app/utils/hooks/useIsMounted.ts
var import_react2 = __toESM(require_react());
function useIsMounted() {
  const [isMounted, setIsMounted] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    if (!isMounted)
      setIsMounted(true);
  }, [isMounted]);
  return isMounted;
}

// app/utils/hooks/useWindowSize.ts
var import_react5 = __toESM(require_react());

// app/utils/hooks/useEventListener.ts
var import_react4 = __toESM(require_react());

// app/utils/hooks/useIsomorphicLayoutEffect.ts
var import_react3 = __toESM(require_react());
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? import_react3.useLayoutEffect : import_react3.useEffect;

// app/utils/hooks/useEventListener.ts
function useEventListener(eventName, handler, element, options) {
  const savedHandler = (0, import_react4.useRef)(handler);
  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]);
  (0, import_react4.useEffect)(() => {
    var _a;
    const targetElement = (_a = element == null ? void 0 : element.current) != null ? _a : window;
    if (!(targetElement && targetElement.addEventListener))
      return;
    const listener = (event) => savedHandler.current(event);
    targetElement.addEventListener(eventName, listener, options);
    return () => {
      targetElement.removeEventListener(eventName, listener, options);
    };
  }, [eventName, element, options]);
}

// app/utils/hooks/useWindowSize.ts
function useWindowSize() {
  const [windowSize, setWindowSize] = (0, import_react5.useState)({
    width: 0,
    height: 0
  });
  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };
  useEventListener("resize", handleSize);
  useIsomorphicLayoutEffect(() => {
    handleSize();
  }, []);
  return windowSize;
}

// app/utils/hooks/useAnimations.ts
function useAnimations() {
  const ScrollTrigger3 = (0, import_react6.useRef)(null);
  const Draggable2 = (0, import_react6.useRef)(null);
  const isMounted = useIsMounted();
  const { width } = useWindowSize();
  const screenWidths = (0, import_react6.useMemo)(
    () => ({
      phoneOnly: width < 480,
      phoneUp: width >= 480,
      laptopUp: width >= 1024,
      desktopUp: width >= 1280,
      bigDesktopUp: width >= 1536
    }),
    [width]
  );
  (0, import_react6.useEffect)(() => {
    ScrollTrigger3.current = (init_ScrollTrigger(), __toCommonJS(ScrollTrigger_exports)).ScrollTrigger;
    Draggable2.current = (init_Draggable(), __toCommonJS(Draggable_exports)).Draggable;
    const plugins = [ScrollTrigger3, Draggable2];
    plugins.forEach((plugin) => {
      if (plugin == null ? void 0 : plugin.current) {
        gsapWithCSS.registerPlugin(plugin.current);
      }
    });
  }, [isMounted]);
  const animations = {
    smoothScrollbar: (0, import_react6.useCallback)(
      (scroller) => {
        if (isMounted) {
          smoothScrollbar(scroller, ScrollTrigger3.current);
        }
      },
      [isMounted]
    ),
    animateBgColorOnScroll: (0, import_react6.useCallback)(
      (container) => {
        if (isMounted) {
          animateBgColorOnScroll(gsapWithCSS, container);
        }
      },
      [isMounted]
    ),
    animateAbout: (0, import_react6.useCallback)(() => {
      if (isMounted) {
        animateAbout(gsapWithCSS, screenWidths);
      }
    }, [isMounted, screenWidths]),
    animateStack: (0, import_react6.useCallback)(() => {
      if (isMounted) {
        animateStack(gsapWithCSS);
      }
    }, [isMounted]),
    animateAlbums: (0, import_react6.useCallback)(
      (container) => {
        if (isMounted && Draggable2.current) {
          animateAlbums(gsapWithCSS, container, width, screenWidths, Draggable2.current);
        }
      },
      [isMounted, width, screenWidths]
    ),
    animateContact: (0, import_react6.useCallback)(() => {
      if (isMounted) {
        animateContact(gsapWithCSS);
      }
    }, [isMounted])
  };
  return animations;
}

// app/utils/hooks/useCreateImageInteraction.ts
var import_react7 = __toESM(require_react());

// app/utils/canvas-image-interaction/lib/utils.js
var randomIntegerFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
var dist = (a, b) => Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
var splitArray = (array, n) => {
  const [...arr] = array;
  const res = [];
  while (arr.length) {
    res.push(arr.splice(0, n));
  }
  return res;
};
var returnPixelColor = (imageData, width, position2) => {
  const index = (position2.x + position2.y * width) * 4;
  const pixel = {
    r: imageData.data[index + 0],
    g: imageData.data[index + 1],
    b: imageData.data[index + 2]
  };
  return `rgb(${pixel.r}, ${pixel.g}, ${pixel.b})`;
};
var toDataURL = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      const reader = new FileReader();
      reader.onloadend = function() {
        resolve(reader.result);
      };
      reader.readAsDataURL(xhr.response);
    };
    xhr.onerror = reject;
    xhr.open("GET", url);
    xhr.responseType = "blob";
    xhr.send();
  });
};
var returnImageData = (image, dimensions) => {
  const imageCanvas = document.createElement("canvas");
  const imageCanvasCtx = imageCanvas.getContext("2d");
  imageCanvas.width = dimensions.width;
  imageCanvas.height = dimensions.height;
  imageCanvasCtx.drawImage(image, 0, 0, imageCanvas.width, imageCanvas.height);
  return imageCanvasCtx.getImageData(0, 0, imageCanvas.width, imageCanvas.height);
};
var loadImage = (imageURL, callback) => {
  toDataURL(imageURL).then((data) => {
    const IMAGE = new Image();
    IMAGE.src = data;
    IMAGE.onload = function() {
      callback(IMAGE);
    };
  });
};
var loadImages = (imagesURLS, callback) => {
  const totalImageToLoad = imagesURLS.length;
  let curentImageIndex = 0;
  const imagesArray = [];
  const load = () => {
    loadImage(imagesURLS[curentImageIndex], (image) => {
      imagesArray.push(image);
      curentImageIndex++;
      if (curentImageIndex === totalImageToLoad)
        callback(imagesArray);
      else
        load();
    });
  };
  load();
};

// app/utils/canvas-image-interaction/lib/particle.js
var Particle = class {
  constructor(options = {}) {
    this.ctx = options.ctx;
    this.position = options.position || {
      x: 0,
      y: 0
    };
    this.maxVelocity = options.maxVelocity || 5;
    this.velocity = options.velocity || {
      x: (0.5 - Math.random()) * this.maxVelocity,
      y: (0.5 - Math.random()) * this.maxVelocity
    };
    this.radius = options.radius;
    this.minRadius = this.radius;
    this.color = options.color;
    this.imageData = options.imageData;
    this.rotation = 0;
    this.rotationIncrement = randomIntegerFromRange(2, 5);
    this.stroke = false;
    this.fill = true;
    this.shape = options.shape || "circle";
    this.edges = options.edges || null;
    this.bounceFromEdges = options.bounceFromEdges;
    this.avoidEdges = options.avoidEdges || false;
    this.tick = 0;
    this.tickIncrement = 0.02 + Math.random() * 0.03;
  }
  draw() {
    this.ctx.beginPath();
    this.ctx.save();
    this.ctx.translate(this.position.x, this.position.y);
    this.ctx.rotate(Math.PI / 180 * this.rotation);
    this.drawShape(this.shape);
    this.ctx.restore();
    this.ctx.closePath();
  }
  fillShape() {
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }
  strokeShape() {
    this.ctx.strokeStyle = this.color;
    this.ctx.stroke();
  }
  drawShape(shape) {
    if (shape === "square")
      this.ctx.rect(-this.radius / 2, -this.radius / 2, this.radius, this.radius);
    else if (shape === "circle")
      this.ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
    else if (shape === "hexagon") {
      this.ctx.moveTo(this.radius * Math.cos(0), this.radius * Math.sin(0));
      for (let side = 0; side < 7; side++) {
        this.ctx.lineTo(
          this.radius * Math.cos(side * 2 * Math.PI / 6),
          this.radius * Math.sin(side * 2 * Math.PI / 6)
        );
      }
    }
  }
  update() {
    if (this.bounceFromEdges)
      this.changeVelocityOnBounce(this.edges);
    else
      this.continueFromEdge();
    this.rotation += this.rotationIncrement;
    this.tick += this.tickIncrement;
  }
  updatePosition() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
  jumpToRandomPosition(bounds) {
    this.position.x = Math.random() * bounds.width;
    this.position.y = Math.random() * bounds.height;
  }
  growAndShrink(max) {
    this.radius = this.minRadius + Math.abs(Math.sin(this.tick)) * max;
  }
  updateColor(color) {
    this.color = color;
  }
  continueFromEdge() {
    if (!this.avoidEdges) {
      if (this.position.x > this.edges.width)
        this.position.x = 0;
      else if (this.position.x < 0)
        this.position.x = this.edges.width;
      if (this.position.y > this.edges.height)
        this.position.y = 0;
      else if (this.position.y < 0)
        this.position.y = this.edges.height;
    }
  }
  changeVelocityOnBounce() {
    if (!this.avoidEdges) {
      if (this.position.x + this.radius > this.edges.width || this.position.x - this.radius < 0)
        this.velocity.x *= -1;
      if (this.position.y + this.radius > this.edges.height || this.position.y - this.radius < 0)
        this.velocity.y *= -1;
    }
  }
};

// app/utils/canvas-image-interaction/lib/particles.js
var Particles = class {
  constructor(options = {}) {
    this.ctx = options.ctx;
    this.totalParticles = options.totalParticles;
    this.maxBounds = options.maxBounds;
    this.imageData = options.imageData;
    this.particles = [];
    this.particlesConfig = {
      jumpToRandomPosition: options.particlesConfig.jumpToRandomPosition || false,
      growAndShrink: options.particlesConfig.growAndShrink || false,
      fill: options.particlesConfig.fill || true,
      bounceFromEdges: options.particlesConfig.bounceFromEdges || true,
      shape: options.particlesConfig.shape || "circle",
      radius: options.particlesConfig.radius || 5,
      randomRadius: options.particlesConfig.randomRadius || false,
      maxRadius: options.particlesConfig.maxRadius || 5,
      minRadius: options.particlesConfig.minRadius || 2,
      maxVelocity: options.particlesConfig.maxVelocity || 8
    };
    this.init();
  }
  init() {
    const ctx = this.ctx;
    const color = "transparent";
    for (let i = 0; i < this.totalParticles; i++) {
      const radius = this.particlesConfig.randomRadius ? randomIntegerFromRange(this.particlesConfig.minRadius, this.particlesConfig.maxRadius) : this.particlesConfig.radius;
      const position2 = {
        x: randomIntegerFromRange(radius, this.maxBounds.width - radius),
        y: randomIntegerFromRange(radius, this.maxBounds.height - radius)
      };
      this.particles.push(
        new Particle({
          ctx,
          position: position2,
          radius,
          color,
          imageData: this.imageData,
          maxVelocity: 8,
          bounceFromEdges: this.particlesConfig.bounceFromEdges,
          shape: this.particlesConfig.shape,
          edges: { width: this.maxBounds.width, height: this.maxBounds.height }
        })
      );
    }
  }
  update() {
    this.particles.forEach((particle) => {
      particle.draw();
      if (this.particlesConfig.fill)
        particle.fillShape();
      else
        particle.strokeShape();
      particle.update();
      if (this.particlesConfig.growAndShrink)
        particle.growAndShrink(particle.minRadius * 0.65);
      if (!this.particlesConfig.jumpToRandomPosition)
        particle.updatePosition();
      else
        particle.jumpToRandomPosition({
          width: this.maxBounds.width,
          height: this.maxBounds.height
        });
    });
  }
};

// app/utils/canvas-image-interaction/lib/canvas.js
var Canvas = class {
  constructor(options = {}) {
    this.parent = options.parent;
    this.dimensions = options.dimensions;
    this.imageURL = options.imageURL || {};
    this.images = options.images || {};
    this.imagesData = options.imagesData || {
      default: null,
      hovered: null
    };
    this.currentImageData = null;
    this.particles = null;
    this.totalParticles = options.totalParticles || 400;
    this.hovered = false;
    this.particlesConfig = options.particlesConfig;
    this.mouseRange = options.mouseRange || null;
    this.mouse = null;
    this.init();
  }
  init() {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = this.dimensions.width;
    this.canvas.height = this.dimensions.height;
    const initialize = () => {
      this.currentImageData = this.imagesData.default;
      this.addParticles(this.totalParticles);
      this.startRender();
      this.initEvents();
      this.parent.appendChild(this.canvas);
    };
    if (!this.images.default && !this.images.hovered) {
      loadImages([this.imageURL.default, this.imageURL.hovered], (images) => {
        this.imagesData.default = returnImageData(images[0], this.dimensions);
        this.imagesData.hovered = returnImageData(images[1], this.dimensions);
        initialize();
      });
    } else {
      this.imagesData.default = returnImageData(this.images.default, this.dimensions);
      this.imagesData.hovered = returnImageData(this.images.hovered, this.dimensions);
      initialize();
    }
    if (this.mouseRange != null) {
      this.mouse = new Particle({
        ctx: this.ctx,
        position: {
          x: 0,
          y: 0
        },
        radius: this.mouseRange,
        color: "#000",
        avoisEdges: true,
        shape: "circle"
      });
    }
  }
  initEvents() {
    const onMouseEnter = () => {
      this.hovered = true;
      this.currentImageData = this.imagesData.hovered;
    };
    const onMouseLeave = () => {
      this.hovered = false;
      this.currentImageData = this.imagesData.default;
    };
    const onMouseMove = (e) => {
      if (this.mouse != null) {
        this.mouse.position.x = e.offsetX;
        this.mouse.position.y = e.offsetY;
      }
    };
    this.canvas.addEventListener("mouseenter", onMouseEnter);
    this.canvas.addEventListener("mouseleave", onMouseLeave);
    this.canvas.addEventListener("mousemove", onMouseMove);
  }
  addParticles(n) {
    this.particles = new Particles({
      ctx: this.ctx,
      totalParticles: n,
      maxBounds: {
        width: this.dimensions.width,
        height: this.dimensions.height
      },
      imageData: this.currentImageData,
      particlesConfig: this.particlesConfig
    });
  }
  updateParticleColor(imageData, particle) {
    const color = returnPixelColor(imageData, Math.floor(this.dimensions.width), {
      x: Math.floor(particle.position.x),
      y: Math.floor(particle.position.y)
    });
    particle.updateColor(color);
  }
  startRender() {
    requestAnimationFrame(() => this.render());
  }
  render() {
    this.particles.particles.forEach((particle) => {
      if (this.mouseRange != null) {
        const d = dist(this.mouse.position, particle.position);
        if (d < this.mouse.radius + particle.radius && this.hovered) {
          this.updateParticleColor(this.imagesData.hovered, particle);
        } else
          this.updateParticleColor(this.imagesData.default, particle);
      } else
        this.updateParticleColor(this.currentImageData, particle);
    });
    this.particles.update();
    requestAnimationFrame(() => this.render());
  }
};

// app/utils/canvas-image-interaction/index.ts
var createImageInteraction = (cardOptions) => {
  const cards = Array.from(document.querySelectorAll(".card"));
  const imageURLS = cardOptions.map((option) => Object.values(option.imageURL)).flat();
  loadImages(imageURLS, (images) => {
    const splitedImagesArray = splitArray(images, 2);
    cards.forEach((card, index) => {
      new Canvas({
        parent: card.querySelector(".cardImageInner"),
        dimensions: {
          width: card.getBoundingClientRect().width,
          height: card.getBoundingClientRect().height
        },
        ...cardOptions[index],
        images: {
          default: splitedImagesArray[index][0],
          hovered: splitedImagesArray[index][1]
        }
      });
    });
    setTimeout(() => {
      const loading = document.querySelector(".loadingImg");
      if (loading)
        loading.remove();
    }, 2e3);
    gsapWithCSS.timeline({
      delay: 0.8,
      defaults: {
        duration: 1.5,
        stagger: 0.1,
        ease: "expo.out"
      }
    }).fromTo(
      cards.map((card) => card.querySelector(".cardImage")),
      {
        translateY: "-100%"
      },
      {
        translateY: "0%"
      }
    ).fromTo(
      cards.map((card) => card.querySelector(".cardImageInner")),
      {
        translateY: "100%"
      },
      {
        translateY: "0%"
      },
      0
    );
  });
};

// app/assets/img/profile-bw.jpg
var profile_bw_default = "/build/_assets/profile-bw-IXR6EU56.jpg";

// app/assets/img/profile-rgba.jpg
var profile_rgba_default = "/build/_assets/profile-rgba-HNJORISZ.jpg";

// app/utils/hooks/useCreateImageInteraction.ts
var imageInteractionSettings = {
  imageURL: {
    default: profile_bw_default,
    hovered: profile_rgba_default
  },
  totalParticles: 1500,
  mouseRange: 100,
  particlesConfig: {
    jumpToRandomPosition: true,
    fill: true,
    shape: "square",
    radius: 2
  }
};
function checkIfFirefoxOrSafari(userAgent) {
  const formattedUserAgent = userAgent.toLowerCase();
  const isFirefoxOrSafari = ["firefox", "Safari"].some(
    (browser) => formattedUserAgent.indexOf(browser) > -1
  );
  return isFirefoxOrSafari;
}
function useCreateImageInteraction() {
  const isMounted = useIsMounted();
  const { width } = useWindowSize();
  const userAgent = useUserAgent();
  const isFirefoxOrSafari = checkIfFirefoxOrSafari(userAgent);
  const createImageInteractionCb = (0, import_react7.useCallback)(() => {
    if (isMounted && width >= 1280 && !isFirefoxOrSafari) {
      createImageInteraction([imageInteractionSettings]);
    }
  }, [isFirefoxOrSafari, width, isMounted]);
  return { createImageInteraction: createImageInteractionCb };
}

// app/utils/hooks/useProgressiveImage.ts
var import_react8 = __toESM(require_react());
function useProgressiveImage(lowQualitySrc, highQualitySrc) {
  const [src, setSrc] = (0, import_react8.useState)(lowQualitySrc || highQualitySrc);
  (0, import_react8.useEffect)(() => {
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setSrc(highQualitySrc);
    };
  }, [lowQualitySrc, highQualitySrc]);
  return { src, blur: src === lowQualitySrc };
}

// app/ui/components/About/index.tsx
var import_react13 = __toESM(require_react());

// app/styles/breakpoints.ts
var { media } = config;
var breakpoints = { xs: "", ...media };

// app/styles/helpers.ts
function getStylePropsFromToken(token) {
  return Object.keys(token).reduce((acc, key) => {
    const tokenKey = key;
    acc[tokenKey] = `$${key}`;
    return acc;
  }, {});
}
function toRem(px, rootFontSize = 16) {
  return `${px / rootFontSize}rem`;
}

// app/styles/common.ts
var {
  theme: { colors: colors2 }
} = config;
var bgColor = getStylePropsFromToken(colors2);
var display = {
  block: "block",
  "inline-block": "inline-block",
  inline: "inline",
  flex: "flex",
  "inline-flex": "inline-flex",
  grid: "grid",
  "inline-grid": "inline-grid",
  hidden: "none"
};
var position = {
  static: "static",
  fixed: "fixed",
  absolute: "absolute",
  relative: "relative",
  sticky: "sticky"
};
var positionOptions = {
  top: "",
  right: "",
  left: "",
  bottom: ""
};
var zIndex = {
  z0: "0",
  z10: "10",
  z20: "20",
  z30: "30",
  z40: "40",
  z50: "50",
  zAuto: "auto"
};
var maxWidth = {
  "0": "0rem",
  none: "none",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  full: "100%",
  wMin: "min-content",
  wMax: "max-content",
  wFit: "fit-content"
};
var minHeight = {
  "0": "0",
  none: "none",
  full: "100%",
  screen: "100vh",
  hMin: "min-content",
  hMax: "max-content",
  hFit: "fit-content"
};
var opacity = {
  "0": "0",
  "5": "0.05",
  "10": "0.1",
  "20": "0.2",
  "25": "0.25",
  "30": "0.3",
  "40": "0.4",
  "50": "0.5",
  "60": "0.6",
  "70": "0.7",
  "75": "0.75",
  "80": "0.8",
  "90": "0.9",
  "95": "0.95",
  "100": "1"
};
var pointerEvents = {
  auto: "auto",
  none: "none"
};
var overflow = {
  auto: "auto",
  hidden: "hidden",
  clip: "clip",
  visible: "visible",
  scroll: "scroll"
};
var overflowX = overflow;
var overflowY = overflow;
var visibility = {
  visible: "visible",
  invisible: "hidden",
  collapse: "collapse"
};
var gridRow = {
  auto: "auto",
  full: "1 / -1",
  unset: "unset",
  "1": "span 1 / span 1",
  "2": "span 2 / span 2",
  "3": "span 3 / span 3",
  "4": "span 4 / span 4",
  "5": "span 5 / span 5",
  "6": "span 6 / span 6"
};
var gridColumn = {
  ...gridRow,
  "7": "span 7 / span 7",
  "8": "span 8 / span 8",
  "9": "span 9 / span 9",
  "10": "span 10 / span 10",
  "11": "span 11 / span 11",
  "12": "span 12 / span 12"
};
var gridRowEnd = {
  auto: "auto",
  unset: "unset",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7"
};
var gridColumnEnd = {
  ...gridRowEnd,
  "8": "8",
  "9": "9",
  "10": "10",
  "11": "11",
  "12": "12",
  "13": "13"
};
var justifySelf = {
  auto: "auto",
  start: "start",
  end: "end",
  center: "center",
  stretch: "stretch"
};
var alignSelf = {
  auto: "auto",
  start: "flex-start",
  end: "flex-end",
  center: "center",
  stretch: "stretch",
  baseline: "baseline"
};
var grid = {
  gridColumn,
  gridColumnEnd,
  gridColumnStart: gridColumnEnd,
  gridRow,
  gridRowEnd,
  gridRowStart: gridRowEnd,
  justifySelf,
  alignSelf
};
var flexGrow = {
  "0": "0",
  "1": "1"
};
var flex = {
  flexBasis: "",
  flexGrow,
  flexShrink: flexGrow
};
var size = {
  width: "",
  height: "",
  size: "",
  maxHeight: ""
};
var padding = {
  padding: "",
  paddingTop: "",
  paddingRight: "",
  paddingBottom: "",
  paddingLeft: "",
  paddingX: "",
  paddingY: ""
};
var margin = {
  margin: "",
  marginTop: "",
  marginRight: "",
  marginBottom: "",
  marginLeft: "",
  marginX: "",
  marginY: ""
};
var commonStyleProps = {
  display,
  ...grid,
  ...flex,
  ...size,
  maxWidth,
  minHeight,
  position,
  ...positionOptions,
  zIndex,
  ...margin,
  ...padding,
  opacity,
  pointerEvents,
  overflow,
  overflowX,
  overflowY,
  visibility,
  transform: "",
  transition: ""
};

// app/utils/primitives/index.ts
var breakpointKeys = Object.keys(breakpoints);
var remStyleProps = ["margin", "padding", "width", "height", "gap"];
function splitProps(props, stylePropsKeys) {
  const styleProps8 = {};
  const restProps = {};
  Object.entries(props).forEach(([key, value]) => {
    if (stylePropsKeys.includes(key))
      styleProps8[key] = value;
    else
      restProps[key] = value;
  });
  return [styleProps8, restProps];
}
function getMediaStyles(stylesWithBreakpointsProps, stylesWithBreakpoints, styleAliases7) {
  function getValue({
    styleValue,
    index,
    mediaKey,
    defaultValue
  }) {
    let value = defaultValue;
    if (Array.isArray(styleValue)) {
      value = styleValue[index];
    } else if (typeof styleValue === "object") {
      value = styleValue[mediaKey];
    }
    return value;
  }
  function formatStyles({ styleKey, styleValue, acc, ...options }) {
    const value = getValue({ styleValue, ...options });
    const key = styleAliases7 ? styleAliases7[styleKey] || styleKey : styleKey;
    if (value != null) {
      const styleProp = stylesWithBreakpoints && stylesWithBreakpoints[styleKey];
      const stylePropsValue = styleProp && typeof styleProp === "object" ? styleProp[value] : value;
      const formatToRem = remStyleProps.some((remStyleProp) => styleKey.includes(remStyleProp));
      const formattedValue = typeof stylePropsValue === "number" && formatToRem ? toRem(stylePropsValue) : stylePropsValue;
      acc[key] = formattedValue;
    }
  }
  return breakpointKeys.reduce((acc, mediaKey, index) => {
    if (index === 0) {
      Object.entries(stylesWithBreakpointsProps).forEach(([styleKey, styleValue]) => {
        formatStyles({
          styleKey,
          styleValue,
          index,
          mediaKey,
          defaultValue: styleValue,
          acc
        });
      });
    } else {
      const accMedia = `@${mediaKey}`;
      acc[accMedia] = Object.entries(stylesWithBreakpointsProps).reduce(
        (styleAcc, [styleKey, styleValue]) => {
          formatStyles({
            styleKey,
            styleValue,
            index,
            mediaKey,
            acc: styleAcc
          });
          return styleAcc;
        },
        {}
      );
    }
    return acc;
  }, {});
}
function getformattedProps({ props, styleProps: styleProps8, styleAliases: styleAliases7 }) {
  const stylePropsKeys = [
    ...styleProps8 ? Object.keys(styleProps8) : [],
    ...Object.keys(commonStyleProps)
  ];
  const [componentStyleProps, restProps] = splitProps(props, stylePropsKeys);
  const mediaStyles = getMediaStyles(
    componentStyleProps,
    { ...styleProps8, ...commonStyleProps },
    styleAliases7
  );
  return { mediaStyles, restProps };
}

// app/ui/primitives/dataDisplay/List/styles.tsx
var StyledList = styled("ul", {});
var StyledListItem = styled("li", {
  listStyle: "none"
});

// app/ui/primitives/dataDisplay/List/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var List = ({ children, css, ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({ props });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledList, {
    css: { ...mediaStyles, ...css },
    ...restProps,
    children
  }, void 0, false, {
    fileName: "app/ui/primitives/dataDisplay/List/index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
};
var ListItem = ({ children, css, ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({ props });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledListItem, {
    css: { ...mediaStyles, ...css },
    ...restProps,
    children
  }, void 0, false, {
    fileName: "app/ui/primitives/dataDisplay/List/index.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};

// app/ui/primitives/form/Button/index.tsx
var import_react9 = __toESM(require_react());

// app/ui/primitives/form/Button/styles.tsx
var StyledButton = styled("button", {
  fontSize: "$sm",
  cursor: "pointer",
  transition: "0.15s all ease-in-out"
});

// app/ui/primitives/form/Button/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Button = import_react9.default.forwardRef(
  ({ children, css, ...props }, forwardedRef) => {
    const { mediaStyles, restProps } = getformattedProps({ props });
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledButton, {
      type: "button",
      css: { ...mediaStyles, ...css },
      ref: forwardedRef,
      ...restProps,
      children
    }, void 0, false, {
      fileName: "app/ui/primitives/form/Button/index.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this);
  }
);
Button.displayName = "Button";

// app/ui/primitives/layout/Box/styles.tsx
var styleAliases = {
  bgColor: "backgroundColor",
  bgImage: "backgroundImage",
  bgSize: "backgroundSize",
  bgPosition: "backgroundPosition",
  bgRepeat: "backgroundRepeat"
};
var bgSize = {
  auto: "auto",
  cover: "cover",
  contain: "contain"
};
var bgPosition = {
  bottom: "bottom",
  center: "center",
  left: "left",
  leftBottom: "left bottom",
  leftTop: "left top",
  right: "right",
  rightBottom: "right bottom",
  rightTop: "right top",
  top: "top"
};
var bgRepeat = {
  repeat: "repeat",
  noRepeat: "no-repeat",
  repeatX: "repeat-x",
  repeatY: "repeat-y",
  repeatRound: "round",
  repeatSpace: "space"
};
var customStyleProps = {
  background: "",
  bgImage: "",
  borderRadius: ""
};
var styleProps = {
  bgSize,
  bgPosition,
  bgRepeat,
  bgColor,
  ...customStyleProps
};
var border = "1px solid $white";
var variants = {
  border: {
    full: {
      border
    },
    bottom: {
      borderBottom: border
    },
    x: {
      borderX: border
    },
    y: {
      borderY: border
    }
  }
};
var StyledDiv = styled("div", {
  variants
});

// app/ui/primitives/layout/Box/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Box = ({ children, border: border2, css, ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({ props, styleProps, styleAliases });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledDiv, {
    border: border2,
    css: { ...mediaStyles, ...css },
    ...restProps,
    children
  }, void 0, false, {
    fileName: "app/ui/primitives/layout/Box/index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
};

// app/ui/primitives/layout/Container/styles.tsx
var styleAliases2 = {
  bgColor: "backgroundColor"
};
var styleProps2 = {
  bgColor,
  background: ""
};
var variants2 = {
  variant: {
    "center-self": {
      margin: "0 auto"
    },
    "center-content": {
      display: "flex",
      alignItems: "center"
    },
    wrap: {
      width: "100%",
      marginX: "auto",
      paddingX: toRem(12),
      "@md": {
        paddingX: "0",
        maxWidth: toRem(744)
      },
      "@lg": {
        maxWidth: toRem(980)
      },
      "@xl": {
        maxWidth: toRem(1200)
      },
      "@2xl": {
        maxWidth: toRem(1280)
      }
    }
  }
};
var StyledDiv2 = styled("div", {
  variants: variants2
});

// app/ui/primitives/layout/Center/styles.tsx
var styleAliases3 = styleAliases;
var styleProps3 = styleProps;
var variants3 = {
  ...variants,
  ...variants2
};
var StyledDiv3 = styled("div", {
  variants: variants3
});

// app/ui/primitives/layout/Center/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Center = ({ children, css, border: border2, variant = "center-content", ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({
    props,
    styleProps: styleProps3,
    styleAliases: styleAliases3
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledDiv3, {
    border: border2,
    variant,
    css: { ...mediaStyles, ...css },
    ...restProps,
    children
  }, void 0, false, {
    fileName: "app/ui/primitives/layout/Center/index.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
};

// app/ui/primitives/layout/Container/index.tsx
var import_react10 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Container = import_react10.default.forwardRef(
  ({ as = "div", variant, css, children, ...props }, forwardedRef) => {
    const { mediaStyles, restProps } = getformattedProps({ props, styleProps: styleProps2, styleAliases: styleAliases2 });
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledDiv2, {
      as,
      variant,
      css: { ...mediaStyles, ...css },
      ...restProps,
      ref: forwardedRef,
      children
    }, void 0, false, {
      fileName: "app/ui/primitives/layout/Container/index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this);
  }
);
Container.displayName = "Container";

// app/ui/primitives/layout/Grid/styles.tsx
var styleAliases4 = {
  align: "alignItems",
  autoColumns: "gridAutoColumns",
  autoFlow: "gridAutoFlow",
  autoRows: "gridAutoRows",
  templateColumns: "gridTemplateColumns",
  templateRows: "gridTemplateRows"
};
var align = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  baseline: "baseline",
  stretch: "stretch"
};
var autoColumns = {
  auto: "auto",
  min: "min-content",
  max: "max-content",
  fr: "minmax(0, 1fr)"
};
var autoFlow = {
  row: "row",
  col: "column",
  dense: "dense",
  rowDense: "row dense",
  colDense: "col dense"
};
var autoRows = autoColumns;
var templateRows = {
  "1": "repeat(1, minmax(0, 1fr))",
  "2": "repeat(2, minmax(0, 1fr))",
  "3": "repeat(3, minmax(0, 1fr))",
  "4": "repeat(4, minmax(0, 1fr))",
  "5": "repeat(5, minmax(0, 1fr))",
  "6": "repeat(6, minmax(0, 1fr))",
  none: "none"
};
var templateColumns = {
  ...templateRows,
  "7": "repeat(7, minmax(0, 1fr))",
  "8": "repeat(8, minmax(0, 1fr))",
  "9": "repeat(9, minmax(0, 1fr))",
  "10": "repeat(10, minmax(0, 1fr))",
  "11": "repeat(11, minmax(0, 1fr))",
  "12": "repeat(12, minmax(0, 1fr))"
};
var customStyleProps2 = {
  gap: ""
};
var styleProps4 = {
  align,
  autoColumns,
  autoFlow,
  autoRows,
  templateColumns,
  templateRows,
  ...customStyleProps2
};
var StyledDiv4 = styled("div", {
  display: "grid"
});

// app/ui/primitives/layout/Grid/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Grid = ({ children, css, ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({ props, styleProps: styleProps4, styleAliases: styleAliases4 });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledDiv4, {
    css: { ...mediaStyles, ...css },
    ...restProps,
    children
  }, void 0, false, {
    fileName: "app/ui/primitives/layout/Grid/index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
};

// app/ui/primitives/layout/Flex/styles.tsx
var styleAliases5 = {
  direction: "flexDirection",
  justify: "justifyContent",
  align: "alignItems",
  wrap: "flexWrap"
};
var direction = {
  row: "row",
  rowReverse: "row-reverse",
  col: "column",
  colReverse: "column-reverse"
};
var justify = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly"
};
var align2 = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  baseline: "baseline",
  stretch: "stretch"
};
var wrap3 = {
  wrap: "wrap",
  reverse: "wrap-reverse",
  noWrap: "nowrap"
};
var customStyleProps3 = {
  gap: ""
};
var styleProps5 = {
  direction,
  justify,
  align: align2,
  wrap: wrap3,
  ...customStyleProps3
};
var variants4 = {
  variant: {
    list: {
      display: "block",
      "@xl": {
        display: "flex"
      }
    }
  }
};
var StyledDiv5 = styled("div", {
  display: "flex",
  variants: variants4
});

// app/ui/primitives/layout/Flex/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Flex = ({ children, variant, css, ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({
    props,
    styleProps: styleProps5,
    styleAliases: styleAliases5
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledDiv5, {
    variant,
    css: { ...mediaStyles, ...css },
    ...restProps,
    children
  }, void 0, false, {
    fileName: "app/ui/primitives/layout/Flex/index.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
};

// app/ui/primitives/media/Img/index.tsx
var import_react11 = __toESM(require_react());

// app/ui/primitives/media/Img/styles.tsx
var styleAliases6 = {
  align: "objectPosition",
  fit: "objectFit"
};
var fit = {
  contain: "contain",
  cover: "cover",
  fill: "fill",
  none: "none",
  scaleSown: "scale-down"
};
var align3 = {
  bottom: "bottom",
  center: "center",
  left: "left",
  leftBottom: "left bottom",
  leftTop: "left top",
  right: "right",
  rightBottom: "right bottom",
  rightTop: "right top",
  top: "top"
};
var customStyleProps4 = {
  maxWidth: "",
  borderRadius: ""
};
var styleProps6 = {
  align: align3,
  fit,
  ...customStyleProps4
};
var StyledImg = styled("img");

// app/ui/primitives/media/Img/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Img = import_react11.default.forwardRef(
  ({ src: fullSrc, thumbSrc, alt, loading = "lazy", css, ...props }, ref2) => {
    const { mediaStyles, restProps } = getformattedProps({
      props: { ...props },
      styleProps: styleProps6,
      styleAliases: styleAliases6
    });
    const { src, blur } = useProgressiveImage(thumbSrc, fullSrc);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledImg, {
      css: {
        ...mediaStyles,
        filter: blur ? "blur(8px)" : "none",
        transition: blur ? "none" : "filter 500ms ease-in 0ms",
        ...css
      },
      src,
      alt,
      ref: ref2,
      loading,
      ...restProps
    }, void 0, false, {
      fileName: "app/ui/primitives/media/Img/index.tsx",
      lineNumber: 25,
      columnNumber: 7
    }, this);
  }
);
Img.displayName = "Img";

// app/ui/primitives/navigation/Link/styles.tsx
var moveUpDown = keyframes({
  "0%, to": { transform: "translateY(-15%)" },
  "50%": { transform: "translateY(15%)" }
});
var variants5 = {
  variant: {
    line: {
      position: "relative",
      "&::before": {
        width: "0",
        height: ".12rem",
        position: "absolute",
        bottom: "45%",
        content: "",
        left: "-9%",
        backgroundColor: "$white",
        visibility: "hidden",
        transition: "all .25s ease-in-out"
      },
      "&:hover": {
        "&::before": {
          width: "115%",
          visibility: "visible"
        }
      }
    },
    scrollDown: {
      animation: `${moveUpDown} 1.1s linear infinite`
    }
  }
};
var StyledLink = styled("a", {
  color: "$white",
  textDecoration: "none",
  transition: "0.15s color ease-in-out",
  cursor: "pointer",
  outline: "1px solid transparent",
  variants: variants5
});

// app/ui/primitives/navigation/Link/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var externalLinkProps = {
  rel: "noopener noreferrer nofollow",
  target: "_blank"
};
var Link = ({ children, css, isExternal = true, variant, ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({ props });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledLink, {
    css: { ...mediaStyles, ...css },
    variant,
    ...isExternal && externalLinkProps,
    ...restProps,
    children
  }, void 0, false, {
    fileName: "app/ui/primitives/navigation/Link/index.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
};

// app/ui/primitives/typography/Text/styles.tsx
var {
  theme: { colors: colors3, fontSizes, fonts }
} = config;
var fontColor = getStylePropsFromToken(colors3);
var fontFamily = getStylePropsFromToken(fonts);
var fontSize = getStylePropsFromToken(fontSizes);
var fontWeight = {
  normal: "400",
  bold: "700"
};
var align4 = {
  left: "left",
  center: "center",
  right: "right",
  justify: "justify",
  start: "start",
  end: "end"
};
var textTransform = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
  normalCase: "none"
};
var lineHeight = {
  "3": ".75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "7": "1.75rem",
  "8": "2rem",
  "9": "2.25rem",
  "10": "2.5rem",
  none: "1",
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  loose: "2"
};
var styleProps7 = {
  fontColor,
  fontFamily,
  fontSize,
  fontWeight,
  align: align4,
  textTransform,
  lineHeight
};
var variants6 = {
  variant: {
    withSeparator: {
      "&::after": {
        content: "|",
        display: "none",
        padding: `0 ${toRem(4)}`,
        "@sm": {
          display: "inline-flex"
        }
      }
    }
  }
};
var StyledSpan = styled("span", {
  variants: variants6
});

// app/ui/primitives/typography/Text/index.tsx
var import_react12 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Text = import_react12.default.forwardRef(({ as = "span", css, variant, children, ...props }, forwardedRef) => {
  const { mediaStyles, restProps } = getformattedProps({ props, styleProps: styleProps7 });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSpan, {
    as,
    variant,
    css: { ...mediaStyles, ...css },
    ref: forwardedRef,
    ...restProps,
    children
  }, void 0, false, {
    fileName: "app/ui/primitives/typography/Text/index.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
});
Text.displayName = "Text";

// app/assets/img/about-heading.svg
var about_heading_default = "/build/_assets/about-heading-CI2LQBHM.svg";

// app/assets/img/bolt.svg
var bolt_default = "/build/_assets/bolt-22GJDHJR.svg";

// app/ui/components/About/FirstRow.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var FirstRow = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
  templateColumns: "12",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
      src: about_heading_default,
      alt: "about",
      display: "flex",
      gridColumn: { xs: "12", lg: "2" },
      gridColumnStart: { lg: "3" },
      maxHeight: 60,
      marginTop: { lg: 12 },
      css: { maxWidth: `${toRem(60)}` }
    }, void 0, false, {
      fileName: "app/ui/components/About/FirstRow.tsx",
      lineNumber: 9,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
      as: "p",
      gridColumn: { xs: "12", lg: "3" },
      "padding-bottom": { xs: 80, lg: 20 },
      marginY: 18,
      fontSize: "lg",
      lineHeight: "relaxed",
      children: "Hi, I'm Elena Bravo, a multidisciplinary front-end developer and digital designer based in Madrid, Spain. With over 7 years of experience working with all types of clients and projects, I thrive on bringing both the technical and visual aspects of digital products to life."
    }, void 0, false, {
      fileName: "app/ui/components/About/FirstRow.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
      className: "profileContainer",
      align: "center",
      justify: "center",
      wrap: "wrap",
      gridColumn: { xs: "12", lg: "3" },
      gridColumnStart: { lg: "9" },
      position: "relative",
      width: "100%",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
          className: "card",
          display: { xs: "hidden", xl: "block" },
          position: "relative",
          width: 280,
          height: 420,
          zIndex: "z20",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
            className: "cardImage",
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
              className: "cardImageInner",
              width: "100%",
              height: "100%",
              overflow: "hidden"
            }, void 0, false, {
              fileName: "app/ui/components/About/FirstRow.tsx",
              lineNumber: 50,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/About/FirstRow.tsx",
            lineNumber: 49,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/About/FirstRow.tsx",
          lineNumber: 41,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
          className: "profileLoading loadingImg",
          position: { lg: "absolute" },
          top: "0",
          left: { lg: "-28%", xl: "3.5%", "2xl": 20 },
          width: 280,
          height: 420,
          zIndex: "z10",
          css: { "&.hide .profileLoadingImg": { opacity: 0, visibility: "hidden" } },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
            className: "profileLoadingImg",
            src: profile_bw_default,
            alt: "Elena Bravo profile photo in black and white",
            opacity: "100",
            visibility: "visible",
            pointerEvents: "none",
            css: { userSelect: "none" }
          }, void 0, false, {
            fileName: "app/ui/components/About/FirstRow.tsx",
            lineNumber: 63,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/About/FirstRow.tsx",
          lineNumber: 53,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
          src: bolt_default,
          alt: "bolt",
          className: "bolt",
          position: "absolute",
          top: { xs: "50%", lg: "0" },
          left: { xs: "50%", lg: "0" },
          width: 150,
          zIndex: "z30",
          transform: {
            xs: "translate(-120%, -100%)",
            sm: "translate(-140%, -70%)",
            lg: `translateY(-${toRem(160)}) translateX(-${toRem(100)})`,
            xl: `translateY(-${toRem(160)}) translateX(-${toRem(50)})`
          },
          pointerEvents: "none"
        }, void 0, false, {
          fileName: "app/ui/components/About/FirstRow.tsx",
          lineNumber: 73,
          columnNumber: 7
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/components/About/FirstRow.tsx",
      lineNumber: 31,
      columnNumber: 5
    }, this)
  ]
}, void 0, true, {
  fileName: "app/ui/components/About/FirstRow.tsx",
  lineNumber: 8,
  columnNumber: 3
}, this);
var FirstRow_default = FirstRow;

// app/assets/img/skull.svg
var skull_default = "/build/_assets/skull-N67EAKSS.svg";

// app/ui/components/About/SecondRow.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var SecondRow = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
  templateColumns: "12",
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    gridColumn: { xs: "12", lg: "4" },
    gridColumnStart: { lg: "3" },
    paddingTop: { xs: 60, lg: 0 },
    transform: { xl: `translateY(-${toRem(100)})` },
    position: "relative",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
        src: skull_default,
        alt: "skull logo",
        className: "skull",
        display: { xs: "hidden", lg: "flex" },
        position: "absolute",
        left: "0",
        top: 300,
        width: 120,
        transform: { lg: `scale(0) translateX(-${toRem(50)})` },
        pointerEvents: "none"
      }, void 0, false, {
        fileName: "app/ui/components/About/SecondRow.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
        as: "p",
        marginY: 18,
        fontSize: "lg",
        lineHeight: "relaxed",
        children: "My main focus as a developer is building accessible, high performance and inclusive digital experiences without sacrificing creativity. Basically, I like creating cool sh*t."
      }, void 0, false, {
        fileName: "app/ui/components/About/SecondRow.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/components/About/SecondRow.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this)
}, void 0, false, {
  fileName: "app/ui/components/About/SecondRow.tsx",
  lineNumber: 6,
  columnNumber: 3
}, this);
var SecondRow_default = SecondRow;

// app/ui/components/About/ThirdRow.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ThirdRow = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
  templateColumns: "12",
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
    as: "p",
    gridColumn: { xs: "12", lg: "6" },
    gridColumnStart: { lg: "5" },
    marginY: 18,
    fontSize: "lg",
    lineHeight: "relaxed",
    children: [
      "I'm currently working as a lead senior front-end developer at",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
        href: "https://samy.com/",
        variant: "line",
        display: "inline-flex",
        position: "relative",
        marginX: 6,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
          children: "Samy"
        }, void 0, false, {
          fileName: "app/ui/components/About/ThirdRow.tsx",
          lineNumber: 21,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/ui/components/About/ThirdRow.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      "and developing smaller projects for friends from time to time. I'm always available for fun and interesting side projects, so feel free to get in touch if you'd like to work together."
    ]
  }, void 0, true, {
    fileName: "app/ui/components/About/ThirdRow.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this)
}, void 0, false, {
  fileName: "app/ui/components/About/ThirdRow.tsx",
  lineNumber: 4,
  columnNumber: 5
}, this);
var ThirdRow_default = ThirdRow;

// app/ui/components/About/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var About = ({ animateAbout: animateAbout2, createImageInteraction: createImageInteraction2 }) => {
  (0, import_react13.useEffect)(() => {
    animateAbout2();
    createImageInteraction2();
  }, [animateAbout2, createImageInteraction2]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    as: "section",
    id: "about",
    paddingTop: { xs: 46, lg: 86 },
    paddingBottom: 86,
    minHeight: "screen",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
      variant: "wrap",
      height: "100%",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirstRow_default, {}, void 0, false, {
          fileName: "app/ui/components/About/index.tsx",
          lineNumber: 27,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SecondRow_default, {}, void 0, false, {
          fileName: "app/ui/components/About/index.tsx",
          lineNumber: 28,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThirdRow_default, {}, void 0, false, {
          fileName: "app/ui/components/About/index.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/components/About/index.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/About/index.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
};

// app/ui/components/Contact/index.tsx
var import_react14 = __toESM(require_react());

// app/assets/img/contact-heading.svg
var contact_heading_default = "/build/_assets/contact-heading-FMZV5LKH.svg";

// app/assets/img/hover-line-sm.svg
var hover_line_sm_default = "/build/_assets/hover-line-sm-5L3WNE4F.svg";

// app/assets/img/hover-line-xl.svg
var hover_line_xl_default = "/build/_assets/hover-line-xl-6UCRQDWE.svg";

// app/assets/img/ghost.svg
var ghost_default = "/build/_assets/ghost-4TL2I7QX.svg";

// app/ui/components/Contact/Email.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ContactEmail = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
      templateColumns: "12",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
        src: contact_heading_default,
        alt: "Get in touch",
        gridColumn: "2",
        gridColumnStart: { lg: "3" },
        width: "8rem"
      }, void 0, false, {
        fileName: "app/ui/components/Contact/Email.tsx",
        lineNumber: 12,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: "app/ui/components/Contact/Email.tsx",
      lineNumber: 11,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
      templateColumns: "12",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
          position: "relative",
          gridColumn: { xs: "12", lg: "7" },
          gridColumnStart: { lg: "3" },
          marginTop: 20,
          marginBottom: { xs: 40, lg: 60 },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            href: "mailto:mailto:hey@elenabravo.com",
            position: "relative",
            css: { "&:hover .linkLine": { width: "100%" } },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
                    display: { xs: "hidden", lg: "flex" },
                    position: "absolute",
                    top: -5,
                    left: "0",
                    height: 108,
                    width: 244,
                    transform: "translateX(-6%)",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
                      className: "linkLine",
                      display: "flex",
                      width: "0",
                      transition: "width .5s cubic-bezier(.16,1,.3,1)",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
                        src: hover_line_sm_default,
                        alt: "link underline",
                        pointerEvents: "none"
                      }, void 0, false, {
                        fileName: "app/ui/components/Contact/Email.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/ui/components/Contact/Email.tsx",
                      lineNumber: 43,
                      columnNumber: 15
                    }, this)
                  }, void 0, false, {
                    fileName: "app/ui/components/Contact/Email.tsx",
                    lineNumber: 34,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
                    fontSize: { xs: "3xl", sm: "5xl" },
                    lineHeight: "none",
                    children: "hey@"
                  }, void 0, false, {
                    fileName: "app/ui/components/Contact/Email.tsx",
                    lineNumber: 52,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/ui/components/Contact/Email.tsx",
                lineNumber: 33,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
                    display: { xs: "hidden", lg: "flex" },
                    position: "absolute",
                    top: 76,
                    left: "0",
                    height: 106,
                    width: 628,
                    transform: "translateX(-2.5%)",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
                      className: "linkLine",
                      display: "flex",
                      width: "0",
                      transition: "width .5s cubic-bezier(.16,1,.3,1)",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
                        src: hover_line_xl_default,
                        alt: "link underline",
                        pointerEvents: "none"
                      }, void 0, false, {
                        fileName: "app/ui/components/Contact/Email.tsx",
                        lineNumber: 72,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/ui/components/Contact/Email.tsx",
                      lineNumber: 66,
                      columnNumber: 15
                    }, this)
                  }, void 0, false, {
                    fileName: "app/ui/components/Contact/Email.tsx",
                    lineNumber: 57,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
                    fontSize: { xs: "3xl", sm: "5xl" },
                    lineHeight: "none",
                    children: "elenabravo.com"
                  }, void 0, false, {
                    fileName: "app/ui/components/Contact/Email.tsx",
                    lineNumber: 75,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/ui/components/Contact/Email.tsx",
                lineNumber: 56,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/ui/components/Contact/Email.tsx",
            lineNumber: 28,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/Contact/Email.tsx",
          lineNumber: 21,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
          src: ghost_default,
          alt: "ghost",
          className: "ghost",
          display: { xs: "hidden", lg: "flex" },
          width: 120,
          transform: `translateY(-${toRem(80)})`,
          pointerEvents: "none"
        }, void 0, false, {
          fileName: "app/ui/components/Contact/Email.tsx",
          lineNumber: 81,
          columnNumber: 7
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/components/Contact/Email.tsx",
      lineNumber: 20,
      columnNumber: 5
    }, this)
  ]
}, void 0, true, {
  fileName: "app/ui/components/Contact/Email.tsx",
  lineNumber: 10,
  columnNumber: 3
}, this);
var Email_default = ContactEmail;

// app/assets/img/follow-heading.svg
var follow_heading_default = "/build/_assets/follow-heading-WPI55DF7.svg";

// app/ui/components/Contact/Social/networks.ts
var networks_default = [
  {
    name: "Github",
    href: "https://github.com/elenabravo"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/elena-bravo/"
  },
  {
    name: "Spotify",
    href: "https://spoti.fi/34t4OZJ"
  }
];

// app/ui/components/Contact/Social/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ContactSocial = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
  templateColumns: "12",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
      src: follow_heading_default,
      alt: "Follow",
      gridColumn: { xs: "3", lg: "2" },
      gridColumnStart: { lg: "3" },
      width: 85,
      height: 30
    }, void 0, false, {
      fileName: "app/ui/components/Contact/Social/index.tsx",
      lineNumber: 8,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
      direction: "col",
      gridColumnStart: { xs: "9", sm: "unset" },
      children: networks_default.map(({ name, href }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
          variant: "line",
          href,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
            textTransform: "uppercase",
            css: { fontSize: toRem(20) },
            children: name
          }, void 0, false, {
            fileName: "app/ui/components/Contact/Social/index.tsx",
            lineNumber: 20,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/Contact/Social/index.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this)
      }, name, false, {
        fileName: "app/ui/components/Contact/Social/index.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this))
    }, void 0, false, {
      fileName: "app/ui/components/Contact/Social/index.tsx",
      lineNumber: 16,
      columnNumber: 5
    }, this)
  ]
}, void 0, true, {
  fileName: "app/ui/components/Contact/Social/index.tsx",
  lineNumber: 7,
  columnNumber: 3
}, this);
var Social_default = ContactSocial;

// app/ui/components/Contact/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Contact = ({ animateContact: animateContact2 }) => {
  (0, import_react14.useEffect)(() => {
    animateContact2();
  }, [animateContact2]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    as: "section",
    paddingTop: { xs: 26, lg: 0 },
    paddingBottom: { xs: 40, lg: 100 },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
      variant: "wrap",
      maxHeight: 708,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Email_default, {}, void 0, false, {
          fileName: "app/ui/components/Contact/index.tsx",
          lineNumber: 18,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Social_default, {}, void 0, false, {
          fileName: "app/ui/components/Contact/index.tsx",
          lineNumber: 19,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/components/Contact/index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Contact/index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
};

// app/ui/components/Inspiration/index.tsx
var import_react15 = __toESM(require_react());

// app/ui/components/Inspiration/album.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Album = ({ album, artist }) => {
  const { name: albumName, image: cover } = album;
  const { name: artistName, image: artistImage } = artist;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
    className: "album",
    position: "absolute",
    size: { xs: 150, sm: 200, lg: 250 },
    opacity: "0",
    visibility: "invisible",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
        src: cover,
        alt: albumName
      }, void 0, false, {
        fileName: "app/ui/components/Inspiration/album.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
        position: "absolute",
        bottom: "0",
        left: "0",
        width: "100%",
        height: "33%",
        background: "linear-gradient(180deg,transparent,rgba(0,0,0,.895))"
      }, void 0, false, {
        fileName: "app/ui/components/Inspiration/album.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
        align: "center",
        position: "absolute",
        bottom: "0",
        left: "0",
        paddingX: 16,
        paddingBottom: 16,
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
            src: artistImage,
            alt: artistName,
            size: 30,
            marginRight: 8,
            borderRadius: "50%"
          }, void 0, false, {
            fileName: "app/ui/components/Inspiration/album.tsx",
            lineNumber: 26,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
            fontSize: "sm",
            children: artistName
          }, void 0, false, {
            fileName: "app/ui/components/Inspiration/album.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/ui/components/Inspiration/album.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/components/Inspiration/album.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
};
var album_default = Album;

// app/assets/img/inspiration-heading.svg
var inspiration_heading_default = "/build/_assets/inspiration-heading-BFHYA6PT.svg";

// app/ui/components/Inspiration/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Inspiration = ({ albums, animateAlbums: animateAlbums2 }) => {
  const containerRef = (0, import_react15.useRef)(null);
  (0, import_react15.useEffect)(() => {
    if (containerRef == null ? void 0 : containerRef.current) {
      animateAlbums2(containerRef == null ? void 0 : containerRef.current);
    }
  }, [animateAlbums2]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    as: "section",
    id: "inspiration",
    ref: containerRef,
    height: { xs: 708, xl: 800 },
    marginY: 86,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
      variant: "wrap",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
        position: "relative",
        width: "100%",
        height: "100%",
        zIndex: "z10",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
            align: "center",
            justify: "center",
            position: "absolute",
            width: "100%",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
              src: inspiration_heading_default,
              alt: "Music is my drug",
              width: "100%",
              maxWidth: "lg",
              transform: `translateY(${toRem(286)})`
            }, void 0, false, {
              fileName: "app/ui/components/Inspiration/index.tsx",
              lineNumber: 32,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/Inspiration/index.tsx",
            lineNumber: 31,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
            className: "albumList",
            position: "relative",
            children: albums.map((data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(album_default, {
              ...data
            }, data.id, false, {
              fileName: "app/ui/components/Inspiration/index.tsx",
              lineNumber: 42,
              columnNumber: 15
            }, this))
          }, void 0, false, {
            fileName: "app/ui/components/Inspiration/index.tsx",
            lineNumber: 40,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/ui/components/Inspiration/index.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/ui/components/Inspiration/index.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Inspiration/index.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
};

// app/assets/img/intro-cta.svg
var intro_cta_default = "/build/_assets/intro-cta-4YG5YVOH.svg";

// app/ui/components/Intro/CTA.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var CTA = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
  href: "mailto:hey@elenabravo.com",
  position: { xs: "fixed", lg: "relative" },
  gridColumnStart: { lg: "11" },
  alignSelf: { lg: "start" },
  width: { xs: 100, lg: 120 },
  height: { xs: 100, lg: 120 },
  bottom: { xs: 32, sm: 40 },
  right: 20,
  transform: { xl: `translateY(-${toRem(20)})` },
  css: { "&:hover .ctaInner": { transform: "scale(1.2)" } },
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
    position: "relative",
    justify: "center",
    align: "center",
    width: "100%",
    height: "100%",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
        className: "ctaInner",
        position: "absolute",
        width: "100%",
        height: "100%",
        bgColor: "white",
        borderRadius: "50%",
        transform: "scale(1)",
        transition: "transform 1.2s cubic-bezier(.16,1,.3,1)"
      }, void 0, false, {
        fileName: "app/ui/components/Intro/CTA.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
        src: intro_cta_default,
        alt: "Get in touch",
        position: "absolute",
        top: "50%",
        size: "50%",
        transform: "translateY(-50%) rotate(10deg)"
      }, void 0, false, {
        fileName: "app/ui/components/Intro/CTA.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/components/Intro/CTA.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this)
}, void 0, false, {
  fileName: "app/ui/components/Intro/CTA.tsx",
  lineNumber: 6,
  columnNumber: 3
}, this);
var CTA_default = CTA;

// app/assets/img/heading.svg
var heading_default = "/build/_assets/heading-EOWW6AIC.svg";

// app/ui/components/Intro/Heading.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Heading = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
  src: heading_default,
  alt: "Front-end JAMstack Developer",
  gridColumn: { xs: "10", lg: "6" },
  gridColumnStart: { xs: "2", sm: "3", lg: "3" },
  height: 425,
  maxWidth: "md",
  paddingY: { xs: 50, sm: 0 },
  pointerEvents: "none"
}, void 0, false, {
  fileName: "app/ui/components/Intro/Heading.tsx",
  lineNumber: 5,
  columnNumber: 3
}, this);
var Heading_default = Heading;

// app/assets/img/arrow.svg
var arrow_default = "/build/_assets/arrow-6HCQ7SNL.svg";

// app/ui/components/Intro/ScrollDown.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var ScrollDown = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
  position: "absolute",
  bottom: 50,
  width: "100%",
  paddingBottom: 86,
  zIndex: "z50",
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    height: 1,
    variant: "wrap",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
      href: "#about",
      variant: "scrollDown",
      display: "flex",
      width: 40,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
        src: arrow_default,
        alt: "down arrow",
        position: "relative",
        width: "100%"
      }, void 0, false, {
        fileName: "app/ui/components/Intro/ScrollDown.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/ui/components/Intro/ScrollDown.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Intro/ScrollDown.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this)
}, void 0, false, {
  fileName: "app/ui/components/Intro/ScrollDown.tsx",
  lineNumber: 5,
  columnNumber: 3
}, this);
var ScrollDown_default = ScrollDown;

// app/ui/components/Intro/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Intro = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    width: "100%",
    height: "100vh",
    as: "section",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
      height: "100%",
      variant: "wrap",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
        height: "100%",
        direction: "col",
        justify: "center",
        position: "relative",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
            align: "center",
            templateColumns: "12",
            height: "100%",
            paddingTop: 20,
            maxHeight: 500,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading_default, {}, void 0, false, {
                fileName: "app/ui/components/Intro/index.tsx",
                lineNumber: 12,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CTA_default, {}, void 0, false, {
                fileName: "app/ui/components/Intro/index.tsx",
                lineNumber: 13,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/ui/components/Intro/index.tsx",
            lineNumber: 11,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollDown_default, {}, void 0, false, {
            fileName: "app/ui/components/Intro/index.tsx",
            lineNumber: 15,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/ui/components/Intro/index.tsx",
        lineNumber: 10,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/ui/components/Intro/index.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Intro/index.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
};

// app/ui/components/Layout/index.tsx
var import_react16 = __toESM(require_react());

// app/assets/img/logo.svg
var logo_default = "/build/_assets/logo-LEM2OEFN.svg";

// app/ui/components/Layout/Header.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Header = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    as: "header",
    position: { xs: "absolute", lg: "fixed" },
    top: 30,
    left: { xs: 20, lg: 40, "2xl": `calc(((100vw - ${toRem(1280)})/2) - ${toRem(28)})` },
    zIndex: "z40",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
      src: logo_default,
      alt: "Elena Bravo logo",
      size: { xs: 120, sm: 150 },
      pointerEvents: "none"
    }, void 0, false, {
      fileName: "app/ui/components/Layout/Header.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Layout/Header.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
};
var Header_default = Header;

// app/ui/components/Layout/Menu/Mobile.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MobileMenu = ({ menuItems: menuItems2, networks }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
  position: "fixed",
  display: { xs: "flex", lg: "hidden" },
  width: "100vw",
  height: "100vh",
  top: "0",
  left: "0",
  zIndex: "z50",
  pointerEvents: "none",
  overflow: "hidden",
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
      direction: "col",
      justify: "center",
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      paddingY: 32,
      opacity: "0",
      pointerEvents: "none",
      transform: "translateX(100%)",
      visibility: "invisible",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
          variant: "wrap",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
            src: logo_default,
            alt: "Elena Bravo logo",
            size: { xs: 120, sm: 150 },
            pointerEvents: "none"
          }, void 0, false, {
            fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
          lineNumber: 40,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
          as: "nav",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, {
            children: menuItems2.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListItem, {
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                href: `#${item}`,
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
                  children: item
                }, void 0, false, {
                  fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
                  lineNumber: 48,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
                lineNumber: 47,
                columnNumber: 15
              }, this)
            }, item, false, {
              fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
              lineNumber: 46,
              columnNumber: 13
            }, this))
          }, void 0, false, {
            fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
            lineNumber: 44,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
          lineNumber: 43,
          columnNumber: 7
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
      lineNumber: 26,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
      variant: "wrap",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
        position: "absolute",
        width: "100%",
        bottom: 40,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, {
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Center, {
            variant: "center-self",
            children: networks.map(({ name, href }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
              href,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
                children: name
              }, void 0, false, {
                fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
                lineNumber: 61,
                columnNumber: 17
              }, this)
            }, name, false, {
              fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
              lineNumber: 60,
              columnNumber: 15
            }, this))
          }, void 0, false, {
            fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
            lineNumber: 58,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
          lineNumber: 57,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
        lineNumber: 56,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
      lineNumber: 55,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
        children: "Menu"
      }, void 0, false, {
        fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
        lineNumber: 69,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
      lineNumber: 68,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
        children: "Close"
      }, void 0, false, {
        fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
        lineNumber: 72,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
      lineNumber: 71,
      columnNumber: 5
    }, this)
  ]
}, void 0, true, {
  fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
  lineNumber: 15,
  columnNumber: 3
}, this);
var Mobile_default = MobileMenu;

// app/ui/components/Layout/Menu/Desktop.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var DesktopMenu = ({ menuItems: menuItems2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
  as: "nav",
  display: { xs: "hidden", lg: "flex" },
  position: "fixed",
  bottom: 86,
  right: { xs: "0", lg: 40, xl: `calc(((100vw - ${toRem(1280)})/2) - ${toRem(28)})` },
  paddingTop: { lg: 86 },
  zIndex: "z50",
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
    direction: "col",
    align: "end",
    children: menuItems2.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
      href: `#${item}`,
      variant: "line",
      position: "relative",
      paddingY: 5,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
        fontSize: "lg",
        textTransform: "uppercase",
        children: item
      }, void 0, false, {
        fileName: "app/ui/components/Layout/Menu/Desktop.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this)
    }, item, false, {
      fileName: "app/ui/components/Layout/Menu/Desktop.tsx",
      lineNumber: 17,
      columnNumber: 11
    }, this))
  }, void 0, false, {
    fileName: "app/ui/components/Layout/Menu/Desktop.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this)
}, void 0, false, {
  fileName: "app/ui/components/Layout/Menu/Desktop.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this);
var Desktop_default = DesktopMenu;

// app/ui/components/Layout/Menu/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var menuItems = ["about", "stack", "inspiration", "contact"];
var Menu = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mobile_default, {
      menuItems,
      networks: networks_default
    }, void 0, false, {
      fileName: "app/ui/components/Layout/Menu/index.tsx",
      lineNumber: 9,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Desktop_default, {
      menuItems
    }, void 0, false, {
      fileName: "app/ui/components/Layout/Menu/index.tsx",
      lineNumber: 10,
      columnNumber: 5
    }, this)
  ]
}, void 0, true, {
  fileName: "app/ui/components/Layout/Menu/index.tsx",
  lineNumber: 8,
  columnNumber: 3
}, this);
var Menu_default = Menu;

// app/assets/img/spotify.svg
var spotify_default = "/build/_assets/spotify-FXIG6M67.svg";

// app/ui/components/Layout/Footer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var year = new Date().getFullYear();
var Footer = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
  as: "footer",
  position: "absolute",
  bottom: "0",
  width: "100vw",
  paddingY: 28,
  paddingBottom: { sm: 40 },
  paddingX: { xs: 0, sm: 20 },
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    variant: "wrap",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
      direction: { xs: "col", sm: "row" },
      align: { xs: "start", sm: "center" },
      justify: { sm: "center" },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
            variant: "withSeparator",
            children: [
              "\xA9 ",
              year
            ]
          }, void 0, true, {
            fileName: "app/ui/components/Layout/Footer.tsx",
            lineNumber: 24,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
            children: "Designed & coded with \u{1F525} by Elena Bravo while listening to"
          }, void 0, false, {
            fileName: "app/ui/components/Layout/Footer.tsx",
            lineNumber: 25,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            href: "https://spoti.fi/3JVSAsH",
            display: "inline-flex",
            marginLeft: 6,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
              src: spotify_default,
              alt: "Spotify's logo",
              size: 16,
              transform: `translateY(${toRem(2)}) scale(1)`,
              transition: "transform 0.2s ease-in",
              css: {
                "&:hover": {
                  transform: `translateY(${toRem(2)}) scale(1.15)`,
                  transition: "transform 0.2s ease-in-out"
                }
              }
            }, void 0, false, {
              fileName: "app/ui/components/Layout/Footer.tsx",
              lineNumber: 27,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/Layout/Footer.tsx",
            lineNumber: 26,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/ui/components/Layout/Footer.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/ui/components/Layout/Footer.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Layout/Footer.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this)
}, void 0, false, {
  fileName: "app/ui/components/Layout/Footer.tsx",
  lineNumber: 8,
  columnNumber: 3
}, this);
var Footer_default = Footer;

// app/assets/img/grungepattern.png
var grungepattern_default = "/build/_assets/grungepattern-OHO2S5ME.png";

// app/ui/components/Layout/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Layout = ({ children, animateBgColorOnScroll: animateBgColorOnScroll2, smoothScrollbar: smoothScrollbar2 }) => {
  const containerRef = (0, import_react16.useRef)(null);
  const scrollerRef = (0, import_react16.useRef)(null);
  (0, import_react16.useEffect)(() => {
    if (containerRef == null ? void 0 : containerRef.current) {
      animateBgColorOnScroll2(containerRef.current);
    }
    if (scrollerRef == null ? void 0 : scrollerRef.current) {
      smoothScrollbar2(scrollerRef.current);
    }
  }, [animateBgColorOnScroll2, smoothScrollbar2]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    position: "relative",
    bgColor: "turquoise-200",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header_default, {}, void 0, false, {
        fileName: "app/ui/components/Layout/index.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu_default, {}, void 0, false, {
        fileName: "app/ui/components/Layout/index.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
        ref: scrollerRef,
        className: "scroller",
        width: "100vw",
        height: 1500,
        minHeight: { lg: "screen" },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
          ref: containerRef,
          as: "main",
          className: "main",
          width: "100%",
          height: "100%",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
            width: "100%",
            height: "100%",
            background: `transparent url("${grungepattern_default}")`,
            paddingBottom: 86,
            children
          }, void 0, false, {
            fileName: "app/ui/components/Layout/index.tsx",
            lineNumber: 39,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/Layout/index.tsx",
          lineNumber: 38,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/ui/components/Layout/index.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer_default, {}, void 0, false, {
        fileName: "app/ui/components/Layout/index.tsx",
        lineNumber: 49,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/components/Layout/index.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
};

// app/ui/components/Stack/index.tsx
var import_react17 = __toESM(require_react());

// app/assets/img/stack-heading.svg
var stack_heading_default = "/build/_assets/stack-heading-ZOPFLVVX.svg";

// app/assets/img/skelly.svg
var skelly_default = "/build/_assets/skelly-RE5E4ZTX.svg";

// app/ui/components/Stack/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Stack = ({ animateStack: animateStack2 }) => {
  (0, import_react17.useEffect)(() => {
    animateStack2();
  }, [animateStack2]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    as: "section",
    id: "stack",
    minHeight: "screen",
    paddingY: { xs: 0, lg: 86 },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
      variant: "wrap",
      maxHeight: { xl: 708 },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
          templateColumns: "12",
          marginBottom: 18,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
            src: stack_heading_default,
            alt: "Stack/Technologies",
            gridColumn: { xs: "3", lg: "2" },
            gridColumnStart: { lg: "3" },
            width: 202
          }, void 0, false, {
            fileName: "app/ui/components/Stack/index.tsx",
            lineNumber: 20,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/Stack/index.tsx",
          lineNumber: 19,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
          templateColumns: "12",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
              as: "p",
              gridColumn: { xs: "12", lg: "7" },
              gridColumnStart: { lg: "3" },
              marginTop: { xs: 20 },
              fontFamily: "secondary",
              lineHeight: { xs: "tight", sm: "none" },
              fontSize: { xs: "2xl", sm: "3xl", md: "4xl" },
              children: "JAVASCRIPT, TYPESCRIPT, REACT, NEXT, REMIX, GRAPHQL, APOLLO, REDUX, WEBPACK, JEST, REACT TESTING LIBRARY, CYPRESS, NODE, EXPRESS, SASS, CSS IN JS, TAILWINDCSS, GSAP, PUG, GIT, GITLAB, STORYBOOK, FIREBASE, NETLIFY, GATSBY, FIGMA, ILLUSTRATOR"
            }, void 0, false, {
              fileName: "app/ui/components/Stack/index.tsx",
              lineNumber: 29,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
              src: skelly_default,
              alt: "skelleton illustration with a hat",
              className: "skelly",
              display: { xs: "hidden", lg: "block" },
              alignSelf: "end",
              transform: {
                lg: `translateY(${toRem(80)}) translateX(${toRem(40)})`,
                xl: `translateY(${toRem(80)}) translateX(${toRem(0)})`
              },
              pointerEvents: "none"
            }, void 0, false, {
              fileName: "app/ui/components/Stack/index.tsx",
              lineNumber: 42,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/ui/components/Stack/index.tsx",
          lineNumber: 28,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/components/Stack/index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Stack/index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
};

// app/ui/screens/Home.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Home = ({
  albums,
  animateBgColorOnScroll: animateBgColorOnScroll2,
  animateAbout: animateAbout2,
  animateStack: animateStack2,
  animateAlbums: animateAlbums2,
  animateContact: animateContact2,
  smoothScrollbar: smoothScrollbar2,
  createImageInteraction: createImageInteraction2
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
    animateBgColorOnScroll: animateBgColorOnScroll2,
    smoothScrollbar: smoothScrollbar2,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Intro, {}, void 0, false, {
        fileName: "app/ui/screens/Home.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(About, {
        animateAbout: animateAbout2,
        createImageInteraction: createImageInteraction2
      }, void 0, false, {
        fileName: "app/ui/screens/Home.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
        animateStack: animateStack2
      }, void 0, false, {
        fileName: "app/ui/screens/Home.tsx",
        lineNumber: 28,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Inspiration, {
        albums,
        animateAlbums: animateAlbums2
      }, void 0, false, {
        fileName: "app/ui/screens/Home.tsx",
        lineNumber: 29,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Contact, {
        animateContact: animateContact2
      }, void 0, false, {
        fileName: "app/ui/screens/Home.tsx",
        lineNumber: 30,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/screens/Home.tsx",
    lineNumber: 25,
    columnNumber: 5
  }, this);
};

// app/routes/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Index = () => {
  const albums = useLoaderData();
  const animations = useAnimations();
  const { createImageInteraction: createImageInteraction2 } = useCreateImageInteraction();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Home, {
    albums,
    ...animations,
    createImageInteraction: createImageInteraction2
  }, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 19,
    columnNumber: 10
  }, this);
};
var routes_default = Index;
export {
  routes_default as default
};
/*!
 * CSSPlugin 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * Draggable 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
/*!
 * GSAP 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * Observer 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * ScrollTrigger 3.11.3
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*!
 * matrix 3.11.3
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
//# sourceMappingURL=/build/routes/index-U3FENAWY.js.map
