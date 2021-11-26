// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"create-element.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateElement = void 0;

var CreateElement =
/** @class */
function () {
  function CreateElement() {}

  CreateElement.prototype.createElement = function (tag, metadata, container) {
    var _this = this;

    this.element = document.createElement(tag);
    container.appendChild(this.element);
    var keys = Object.keys(metadata);
    keys.forEach(function (key) {
      if (key === "style") {
        Object.assign(_this.element.style, metadata[key]);
      } else {
        // this.element[key] = metadata[key]; 
        _this.element.setAttribute(key, metadata[key]);
      }
    });
    return this.element;
  }; // setTextContent(text: string) {
  //   this.element.textContent = text;
  // }


  CreateElement.prototype.setTextContent = function (element, text) {
    element.textContent = text;
  };

  return CreateElement;
}();

exports.CreateElement = CreateElement;
},{}],"create-landpage.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateLandpage = void 0;

var create_element_1 = require("./create-element");

var CreateLandpage =
/** @class */
function () {
  function CreateLandpage() {
    // mainContainer = document.getElementById("landpageContainer");
    this.htmlElement = new create_element_1.CreateElement();
  }

  CreateLandpage.prototype.renderLandpage = function () {
    var mainContainer = document.getElementById("landpageContainer");
    var title = this.htmlElement.createElement("h2", {
      id: "title"
    }, mainContainer);
    var modeButton = this.htmlElement.createElement("button", {}, mainContainer);
    var reviewContainer = this.htmlElement.createElement("div", {
      id: "reviewContainer"
    }, mainContainer);
    this.htmlElement.setTextContent(modeButton, "Change Theme");
    this.htmlElement.setTextContent(title, "Reviews");
    return {
      modeButton: modeButton,
      title: title,
      reviewContainer: reviewContainer
    };
  };

  return CreateLandpage;
}();

exports.CreateLandpage = CreateLandpage;
},{"./create-element":"create-element.ts"}],"reviews-service.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReviewsService = void 0;

var ReviewsService =
/** @class */
function () {
  function ReviewsService() {}

  ReviewsService.prototype.getReviews = function () {
    return [{
      id: 1,
      name: 'Anna',
      job: 'WD',
      content: 'Hello'
    }, {
      id: 2,
      name: 'Jaxy',
      job: 'WPD',
      content: 'Bye'
    }];
  };

  return ReviewsService;
}();

exports.ReviewsService = ReviewsService;
},{}],"create-reviews.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestReviews = void 0;

var create_element_1 = require("./create-element");

var reviews_service_1 = require("./reviews-service");

var TestReviews =
/** @class */
function () {
  function TestReviews() {
    this.htmlElement = new create_element_1.CreateElement();
    this.reviews = new reviews_service_1.ReviewsService().getReviews();
  }

  TestReviews.prototype.getReviews = function () {
    var _this = this;

    var reviewContainer = document.getElementById("reviewContainer");
    this.reviews.map(function (review) {
      var id = _this.htmlElement.createElement("p", {
        id: "id"
      }, reviewContainer);

      var name = _this.htmlElement.createElement("p", {
        id: "name"
      }, reviewContainer);

      var job = _this.htmlElement.createElement("p", {
        id: "job"
      }, reviewContainer);

      var content = _this.htmlElement.createElement("p", {
        id: "content"
      }, reviewContainer);

      _this.htmlElement.setTextContent(id, review.id.toString());

      _this.htmlElement.setTextContent(name, review.name);

      _this.htmlElement.setTextContent(job, review.job);

      _this.htmlElement.setTextContent(content, review.content);
    });
  };

  return TestReviews;
}();

exports.TestReviews = TestReviews;
},{"./create-element":"create-element.ts","./reviews-service":"reviews-service.ts"}],"index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var create_landpage_1 = require("./create-landpage");

var create_reviews_1 = require("./create-reviews");

var Main =
/** @class */
function () {
  function Main() {
    this.landpage = new create_landpage_1.CreateLandpage();
    this.reviews = new create_reviews_1.TestReviews();
  }

  Main.prototype.renderLandpage = function () {
    this.landpage.renderLandpage();
  };

  Main.prototype.renderReviews = function () {
    this.reviews.getReviews();
  };

  return Main;
}();

var main = new Main();
main.renderLandpage();
main.renderReviews();
},{"./create-landpage":"create-landpage.ts","./create-reviews":"create-reviews.ts"}],"C:/Users/Annelise/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62216" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/Annelise/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.ts"], null)
//# sourceMappingURL=/Reviews%20LightDark.77de5100.js.map