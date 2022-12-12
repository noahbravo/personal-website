import {
  config,
  keyframes,
  styled
} from "/build/_shared/chunk-EAMOY2JI.js";
import {
  __esm,
  __export,
  __toCommonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-URHDA5WG.js";

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
      var v1 = value, v2 = value, t1 = _getTime(), t2 = t1, min = minTimeRefresh || 50, dropToZeroTime = Math.max(500, min * 3), update = function update2(value2, force) {
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
        (latestValue || latestValue === 0) && latestValue !== v1 && update(latestValue);
        return t1 === t2 || t - t2 > dropToZeroTime ? 0 : (v1 + (useDelta ? vOld : -vOld)) / ((useDelta ? t : t1) - tOld) * 1e3;
      };
      return {
        update,
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
      _proto.init = function init5(vars) {
        _coreInitted2 || _initCore3(gsap2) || console.warn("Please gsap.registerPlugin(Observer)");
        ScrollTrigger || _setScrollTrigger();
        var tolerance = vars.tolerance, dragMinimum = vars.dragMinimum, type = vars.type, target2 = vars.target, lineHeight2 = vars.lineHeight, debounce = vars.debounce, preventDefault = vars.preventDefault, onStop = vars.onStop, onStopDelay = vars.onStopDelay, ignore = vars.ignore, wheelSpeed = vars.wheelSpeed, event = vars.event, onDragStart = vars.onDragStart, onDragEnd = vars.onDragEnd, onDrag = vars.onDrag, onPress = vars.onPress, onRelease = vars.onRelease, onRight = vars.onRight, onLeft = vars.onLeft, onUp = vars.onUp, onDown = vars.onDown, onChangeX = vars.onChangeX, onChangeY = vars.onChangeY, onChange = vars.onChange, onToggleX = vars.onToggleX, onToggleY = vars.onToggleY, onHover = vars.onHover, onHoverEnd = vars.onHoverEnd, onMove = vars.onMove, ignoreCheck = vars.ignoreCheck, isNormalizer = vars.isNormalizer, onGestureStart = vars.onGestureStart, onGestureEnd = vars.onGestureEnd, onWheel = vars.onWheel, onEnable = vars.onEnable, onDisable = vars.onDisable, onClick = vars.onClick, scrollSpeed = vars.scrollSpeed, capture = vars.capture, allowClicks = vars.allowClicks, lockAxis = vars.lockAxis, onLockAxis = vars.onLockAxis;
        this.target = target2 = _getTarget(target2) || _docEl;
        this.vars = vars;
        ignore && (ignore = gsap2.utils.toArray(ignore));
        tolerance = tolerance || 1e-9;
        dragMinimum = dragMinimum || 0;
        wheelSpeed = wheelSpeed || 1;
        scrollSpeed = scrollSpeed || 1;
        type = type || "wheel,touch,pointer";
        debounce = debounce !== false;
        lineHeight2 || (lineHeight2 = parseFloat(_win3.getComputedStyle(_body).lineHeight) || 22);
        var id, onStopDelayedCall, dragged, moved, wheeled, locked, axis, self = this, prevDeltaX = 0, prevDeltaY = 0, scrollFuncX = _getScrollFunc(target2, _horizontal), scrollFuncY = _getScrollFunc(target2, _vertical), scrollX = scrollFuncX(), scrollY = scrollFuncY(), limitToTouch = ~type.indexOf("touch") && !~type.indexOf("pointer") && _eventTypes[0] === "pointerdown", isViewport = _isViewport(target2), ownerDoc = target2.ownerDocument || _doc3, deltaX = [0, 0, 0], deltaY = [0, 0, 0], onClickTime = 0, clickCapture = function clickCapture2() {
          return onClickTime = _getTime();
        }, _ignoreCheck = function _ignoreCheck2(e, isPointerOrTouch) {
          return (self.event = e) && ignore && ~ignore.indexOf(e.target) || isPointerOrTouch && limitToTouch && e.pointerType !== "touch" || ignoreCheck && ignoreCheck(e, isPointerOrTouch);
        }, onStopFunc = function onStopFunc2() {
          self._vx.reset();
          self._vy.reset();
          onStopDelayedCall.pause();
          onStop && onStop(self);
        }, update = function update2() {
          var dx = self.deltaX = _getAbsoluteMax(deltaX), dy = self.deltaY = _getAbsoluteMax(deltaY), changedX = Math.abs(dx) >= tolerance, changedY = Math.abs(dy) >= tolerance;
          onChange && (changedX || changedY) && onChange(self, dx, dy, deltaX, deltaY);
          if (changedX) {
            onRight && self.deltaX > 0 && onRight(self);
            onLeft && self.deltaX < 0 && onLeft(self);
            onChangeX && onChangeX(self);
            onToggleX && self.deltaX < 0 !== prevDeltaX < 0 && onToggleX(self);
            prevDeltaX = self.deltaX;
            deltaX[0] = deltaX[1] = deltaX[2] = 0;
          }
          if (changedY) {
            onDown && self.deltaY > 0 && onDown(self);
            onUp && self.deltaY < 0 && onUp(self);
            onChangeY && onChangeY(self);
            onToggleY && self.deltaY < 0 !== prevDeltaY < 0 && onToggleY(self);
            prevDeltaY = self.deltaY;
            deltaY[0] = deltaY[1] = deltaY[2] = 0;
          }
          if (moved || dragged) {
            onMove && onMove(self);
            if (dragged) {
              onDrag(self);
              dragged = false;
            }
            moved = false;
          }
          locked && !(locked = false) && onLockAxis && onLockAxis(self);
          if (wheeled) {
            onWheel(self);
            wheeled = false;
          }
          id = 0;
        }, onDelta = function onDelta2(x, y, index) {
          deltaX[index] += x;
          deltaY[index] += y;
          self._vx.update(x);
          self._vy.update(y);
          debounce ? id || (id = requestAnimationFrame(update)) : update();
        }, onTouchOrPointerDelta = function onTouchOrPointerDelta2(x, y) {
          if (lockAxis && !axis) {
            self.axis = axis = Math.abs(x) > Math.abs(y) ? "x" : "y";
            locked = true;
          }
          if (axis !== "y") {
            deltaX[2] += x;
            self._vx.update(x, true);
          }
          if (axis !== "x") {
            deltaY[2] += y;
            self._vy.update(y, true);
          }
          debounce ? id || (id = requestAnimationFrame(update)) : update();
        }, _onDrag = function _onDrag2(e) {
          if (_ignoreCheck(e, 1)) {
            return;
          }
          e = _getEvent(e, preventDefault);
          var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y, isDragging = self.isDragging;
          self.x = x;
          self.y = y;
          if (isDragging || Math.abs(self.startX - x) >= dragMinimum || Math.abs(self.startY - y) >= dragMinimum) {
            onDrag && (dragged = true);
            isDragging || (self.isDragging = true);
            onTouchOrPointerDelta(dx, dy);
            isDragging || onDragStart && onDragStart(self);
          }
        }, _onPress = self.onPress = function(e) {
          if (_ignoreCheck(e, 1)) {
            return;
          }
          self.axis = axis = null;
          onStopDelayedCall.pause();
          self.isPressed = true;
          e = _getEvent(e);
          prevDeltaX = prevDeltaY = 0;
          self.startX = self.x = e.clientX;
          self.startY = self.y = e.clientY;
          self._vx.reset();
          self._vy.reset();
          _addListener(isNormalizer ? target2 : ownerDoc, _eventTypes[1], _onDrag, preventDefault, true);
          self.deltaX = self.deltaY = 0;
          onPress && onPress(self);
        }, _onRelease = function _onRelease2(e) {
          if (_ignoreCheck(e, 1)) {
            return;
          }
          _removeListener(isNormalizer ? target2 : ownerDoc, _eventTypes[1], _onDrag, true);
          var wasDragging = self.isDragging && (Math.abs(self.x - self.startX) > 3 || Math.abs(self.y - self.startY) > 3), eventData = _getEvent(e);
          if (!wasDragging) {
            self._vx.reset();
            self._vy.reset();
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
          self.isDragging = self.isGesturing = self.isPressed = false;
          onStop && !isNormalizer && onStopDelayedCall.restart(true);
          onDragEnd && wasDragging && onDragEnd(self);
          onRelease && onRelease(self, wasDragging);
        }, _onGestureStart = function _onGestureStart2(e) {
          return e.touches && e.touches.length > 1 && (self.isGesturing = true) && onGestureStart(e, self.isDragging);
        }, _onGestureEnd = function _onGestureEnd2() {
          return (self.isGesturing = false) || onGestureEnd(self);
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
          var x = e.clientX, y = e.clientY, dx = x - self.x, dy = y - self.y;
          self.x = x;
          self.y = y;
          moved = true;
          (dx || dy) && onTouchOrPointerDelta(dx, dy);
        }, _onHover = function _onHover2(e) {
          self.event = e;
          onHover(self);
        }, _onHoverEnd = function _onHoverEnd2(e) {
          self.event = e;
          onHoverEnd(self);
        }, _onClick = function _onClick2(e) {
          return _ignoreCheck(e) || _getEvent(e, preventDefault) && onClick(self);
        };
        onStopDelayedCall = self._dc = gsap2.delayedCall(onStopDelay || 0.25, onStopFunc).pause();
        self.deltaX = self.deltaY = 0;
        self._vx = _getVelocityProp(0, 50, true);
        self._vy = _getVelocityProp(0, 50, true);
        self.scrollX = scrollFuncX;
        self.scrollY = scrollFuncY;
        self.isDragging = self.isGesturing = self.isPressed = false;
        self.enable = function(e) {
          if (!self.isEnabled) {
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
            self.isEnabled = true;
            e && e.type && _onPress(e);
            onEnable && onEnable(self);
          }
          return self;
        };
        self.disable = function() {
          if (self.isEnabled) {
            _observers.filter(function(o) {
              return o !== self && _isViewport(o.target);
            }).length || _removeListener(isViewport ? ownerDoc : target2, "scroll", _onScroll);
            if (self.isPressed) {
              self._vx.reset();
              self._vy.reset();
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
            self.isEnabled = self.isPressed = self.isDragging = false;
            onDisable && onDisable(self);
          }
        };
        self.kill = function() {
          self.disable();
          var i = _observers.indexOf(self);
          i >= 0 && _observers.splice(i, 1);
          _normalizer === self && (_normalizer = 0);
        };
        _observers.push(self);
        isNormalizer && _isViewport(target2) && (_normalizer = self);
        self.enable(event);
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
    _callback3 = function _callback4(self, func) {
      if (self.enabled) {
        var result = func(self);
        result && result.totalTime && (self.callbackAnimation = result);
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
      var a = [], labels = timeline2.labels, duration2 = timeline2.duration(), p;
      for (p in labels) {
        a.push(labels[p] / duration2);
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
      var e = _doc4.createElement("div"), useFixedPosition = _isViewport3(container) || _getProxyProp(container, "pinType") === "fixed", isScroller = type.indexOf("scroller") !== -1, parent = useFixedPosition ? _body2 : container, isStart = type.indexOf("start") !== -1, color2 = isStart ? startColor : endColor, css = "border-color:" + color2 + ";font-size:" + fontSize2 + ";color:" + color2 + ";font-weight:" + fontWeight2 + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
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
    _revertAll = function _revertAll2(kill2, media2) {
      var trigger;
      for (_i = 0; _i < _triggers.length; _i++) {
        trigger = _triggers[_i];
        if (trigger && (!media2 || trigger._ctx === media2)) {
          if (kill2) {
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
    _parsePosition3 = function _parsePosition4(value, trigger, scrollerSize, direction2, scroll, marker, markerScroller, self, scrollerBounds, borderWidth, useFixedPosition, scrollerMax, containerAnimation) {
      _isFunction3(value) && (value = value(self));
      if (_isString3(value) && value.substr(0, 3) === "max") {
        value = scrollerMax + (value.charAt(4) === "=" ? _offsetToPx("0" + value.substr(3), scrollerSize) : 0);
      }
      var time = containerAnimation ? containerAnimation.time() : 0, p1, p2, element;
      containerAnimation && containerAnimation.seek(0);
      if (!_isNumber3(value)) {
        _isFunction3(trigger) && (trigger = trigger(self));
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
      var getScroll = _getScrollFunc(scroller, direction2), prop = "_scroll" + direction2.p2, lastScroll1, lastScroll2, getTween = function getTween2(scrollTo, vars, initialValue, change1, change2) {
        var tween = getTween2.tween, onComplete = vars.onComplete, modifiers = {};
        initialValue = initialValue || getScroll();
        change2 = change1 && change2 || 0;
        change1 = change1 || scrollTo - initialValue;
        tween && tween.kill();
        lastScroll1 = Math.round(initialValue);
        vars[prop] = scrollTo;
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
      _proto.init = function init5(vars, animation) {
        this.progress = this.start = 0;
        this.vars && this.kill(true, true);
        if (!_enabled) {
          this.update = this.refresh = this.kill = _passThrough3;
          return;
        }
        vars = _setDefaults3(_isString3(vars) || _isNumber3(vars) || vars.nodeType ? {
          trigger: vars
        } : vars, _defaults2);
        var _vars = vars, onUpdate = _vars.onUpdate, toggleClass = _vars.toggleClass, id = _vars.id, onToggle = _vars.onToggle, onRefresh = _vars.onRefresh, scrub = _vars.scrub, trigger = _vars.trigger, pin = _vars.pin, pinSpacing = _vars.pinSpacing, invalidateOnRefresh = _vars.invalidateOnRefresh, anticipatePin = _vars.anticipatePin, onScrubComplete = _vars.onScrubComplete, onSnapComplete = _vars.onSnapComplete, once = _vars.once, snap3 = _vars.snap, pinReparent = _vars.pinReparent, pinSpacer = _vars.pinSpacer, containerAnimation = _vars.containerAnimation, fastScrollEnd = _vars.fastScrollEnd, preventOverlaps = _vars.preventOverlaps, direction2 = vars.horizontal || vars.containerAnimation && vars.horizontal !== false ? _horizontal : _vertical, isToggle = !scrub && scrub !== 0, scroller = _getTarget(vars.scroller || _win4), scrollerCache = gsap3.core.getCache(scroller), isViewport = _isViewport3(scroller), useFixedPosition = ("pinType" in vars ? vars.pinType : _getProxyProp(scroller, "pinType") || isViewport && "fixed") === "fixed", callbacks = [vars.onEnter, vars.onLeave, vars.onEnterBack, vars.onLeaveBack], toggleActions = isToggle && vars.toggleActions.split(" "), markers = "markers" in vars ? vars.markers : _defaults2.markers, borderWidth = isViewport ? 0 : parseFloat(_getComputedStyle(scroller)["border" + direction2.p2 + _Width]) || 0, self = this, onRefreshInit = vars.onRefreshInit && function() {
          return vars.onRefreshInit(self);
        }, getScrollerSize = _getSizeFunc(scroller, isViewport, direction2), getScrollerOffsets = _getOffsetsFunc(scroller, isViewport), lastSnap = 0, lastRefresh = 0, scrollFunc = _getScrollFunc(scroller, direction2), tweenTo, pinCache, snapFunc, scroll1, scroll2, start, end, markerStart, markerEnd, markerStartTrigger, markerEndTrigger, markerVars, change, pinOriginalState, pinActiveState, pinState, spacer, offset, pinGetter, pinSetter, pinStart, pinChange, spacingStart, spacerState, markerStartSetter, markerEndSetter, cs, snap1, snap22, scrubTween, scrubSmooth, snapDurClamp, snapDelayedCall, prevProgress, prevScroll, prevAnimProgress, caMarkerSetter, customRevertReturn;
        _context2(self);
        self._dir = direction2;
        anticipatePin *= 45;
        self.scroller = scroller;
        self.scroll = containerAnimation ? containerAnimation.time.bind(containerAnimation) : scrollFunc;
        scroll1 = scrollFunc();
        self.vars = vars;
        animation = animation || vars.animation;
        if ("refreshPriority" in vars) {
          _sort = 1;
          vars.refreshPriority === -9999 && (_primary = self);
        }
        scrollerCache.tweenScroll = scrollerCache.tweenScroll || {
          top: _getTweenCreator(scroller, _vertical),
          left: _getTweenCreator(scroller, _horizontal)
        };
        self.tweenTo = tweenTo = scrollerCache.tweenScroll[direction2.p];
        self.scrubDuration = function(value) {
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
                return onScrubComplete && onScrubComplete(self);
              }
            });
          }
        };
        if (animation) {
          animation.vars.lazy = false;
          animation._initted || animation.vars.immediateRender !== false && vars.immediateRender !== false && animation.duration() && animation.render(0, true, true);
          self.animation = animation.pause();
          animation.scrollTrigger = self;
          self.scrubDuration(scrub);
          snap1 = 0;
          id || (id = animation.vars.id);
        }
        _triggers.push(self);
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
            if ((refreshedRecently || Math.abs(self.getVelocity()) < 10) && !tween && !_pointerIsDown && lastSnap !== scroll) {
              var progress = (scroll - start) / change, totalProgress = animation && !isToggle ? animation.totalProgress() : progress, velocity = refreshedRecently ? 0 : (totalProgress - snap22) / (_getTime2() - _time2) * 1e3 || 0, change1 = gsap3.utils.clamp(-progress, 1 - progress, _abs(velocity / 2) * velocity / 0.185), naturalEnd = progress + (snap3.inertia === false ? 0 : change1), endValue = _clamp4(0, 1, snapFunc(naturalEnd, self)), endScroll = Math.round(start + endValue * change), _snap = snap3, onStart = _snap.onStart, _onInterrupt = _snap.onInterrupt, _onComplete = _snap.onComplete;
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
                    return snapDelayedCall.restart(true) && _onInterrupt && _onInterrupt(self);
                  },
                  onComplete: function onComplete() {
                    self.update();
                    lastSnap = scrollFunc();
                    snap1 = snap22 = animation && !isToggle ? animation.totalProgress() : self.progress;
                    onSnapComplete && onSnapComplete(self);
                    _onComplete && _onComplete(self);
                  }
                }, scroll, change1 * change, endScroll - scroll - change1 * change);
                onStart && onStart(self, tweenTo.tween);
              }
            } else if (self.isActive && lastSnap !== scroll) {
              snapDelayedCall.restart(true);
            }
          }).pause();
        }
        id && (_ids[id] = self);
        trigger = self.trigger = _getTarget(trigger || pin);
        customRevertReturn = trigger && trigger._gsap && trigger._gsap.stRevert;
        customRevertReturn && (customRevertReturn = customRevertReturn(self));
        pin = pin === true ? trigger : _getTarget(pin);
        _isString3(toggleClass) && (toggleClass = {
          targets: trigger,
          className: toggleClass
        });
        if (pin) {
          pinSpacing === false || pinSpacing === _margin || (pinSpacing = !pinSpacing && pin.parentNode && pin.parentNode.style && _getComputedStyle(pin.parentNode).display === "flex" ? false : _padding);
          self.pin = pin;
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
          self.spacer = spacer = pinCache.spacer;
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
            self.update(0, 0, 1);
            oldOnUpdate && oldOnUpdate.apply(oldParams || []);
          });
        }
        self.previous = function() {
          return _triggers[_triggers.indexOf(self) - 1];
        };
        self.next = function() {
          return _triggers[_triggers.indexOf(self) + 1];
        };
        self.revert = function(revert, temp) {
          if (!temp) {
            return self.kill(true);
          }
          var r = revert !== false || !self.enabled, prevRefreshing = _refreshing;
          if (r !== self.isReverted) {
            if (r) {
              prevScroll = Math.max(scrollFunc(), self.scroll.rec || 0);
              prevProgress = self.progress;
              prevAnimProgress = animation && animation.progress();
            }
            markerStart && [markerStart, markerEnd, markerStartTrigger, markerEndTrigger].forEach(function(m) {
              return m.style.display = r ? "none" : "block";
            });
            if (r) {
              _refreshing = 1;
              self.update(r);
            }
            if (pin) {
              if (r) {
                _swapPinOut(pin, spacer, pinOriginalState);
              } else {
                (!pinReparent || !self.isActive) && _swapPinIn(pin, spacer, _getComputedStyle(pin), spacerState);
              }
            }
            r || self.update(r);
            _refreshing = prevRefreshing;
            self.isReverted = r;
          }
        };
        self.refresh = function(soft, force) {
          if ((_refreshing || !self.enabled) && !force) {
            return;
          }
          if (pin && soft && _lastScrollTime) {
            _addListener3(ScrollTrigger3, "scrollEnd", _softRefresh);
            return;
          }
          !_refreshingAll && onRefreshInit && onRefreshInit(self);
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
          self.isReverted || self.revert(true, true);
          self._subPinOffset = false;
          var size2 = getScrollerSize(), scrollerBounds = getScrollerOffsets(), max = containerAnimation ? containerAnimation.duration() : _maxScroll(scroller, direction2), offset2 = 0, otherPinOffset = 0, parsedEnd = vars.end, parsedEndTrigger = vars.endTrigger || trigger, parsedStart = vars.start || (vars.start === 0 || !trigger ? 0 : pin ? "0 0" : "0 100%"), pinnedContainer = self.pinnedContainer = vars.pinnedContainer && _getTarget(vars.pinnedContainer), triggerIndex = trigger && Math.max(0, _triggers.indexOf(self)) || 0, i = triggerIndex, cs2, bounds, scroll, isVertical, override, curTrigger, curPin, oppositeScroll, initted, revertedPins;
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
          _isFunction3(parsedStart) && (parsedStart = parsedStart(self));
          start = _parsePosition3(parsedStart, trigger, size2, direction2, scrollFunc(), markerStart, markerStartTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation) || (pin ? -1e-3 : 0);
          _isFunction3(parsedEnd) && (parsedEnd = parsedEnd(self));
          if (_isString3(parsedEnd) && !parsedEnd.indexOf("+=")) {
            if (~parsedEnd.indexOf(" ")) {
              parsedEnd = (_isString3(parsedStart) ? parsedStart.split(" ")[0] : "") + parsedEnd;
            } else {
              offset2 = _offsetToPx(parsedEnd.substr(2), size2);
              parsedEnd = _isString3(parsedStart) ? parsedStart : start + offset2;
              parsedEndTrigger = trigger;
            }
          }
          end = Math.max(start, _parsePosition3(parsedEnd || (parsedEndTrigger ? "100% 0" : max), parsedEndTrigger, size2, direction2, scrollFunc() + offset2, markerEnd, markerEndTrigger, self, scrollerBounds, borderWidth, useFixedPosition, max, containerAnimation)) || -1e-3;
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
          self._pinPush = otherPinOffset;
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
          self.start = start;
          self.end = end;
          scroll1 = scroll2 = _refreshingAll ? prevScroll : scrollFunc();
          if (!containerAnimation && !_refreshingAll) {
            scroll1 < prevScroll && scrollFunc(prevScroll);
            self.scroll.rec = 0;
          }
          self.revert(false, true);
          if (snapDelayedCall) {
            lastSnap = -1;
            self.isActive && scrollFunc(start + change * prevProgress);
            snapDelayedCall.restart(true);
          }
          _refreshing = 0;
          animation && isToggle && (animation._initted || prevAnimProgress) && animation.progress() !== prevAnimProgress && animation.progress(prevAnimProgress, true).render(animation.time(), true, true);
          if (prevProgress !== self.progress || containerAnimation) {
            animation && !isToggle && animation.totalProgress(prevProgress, true);
            self.progress = (scroll1 - start) / change === prevProgress ? 0 : prevProgress;
          }
          pin && pinSpacing && (spacer._pinOffset = Math.round(self.progress * pinChange));
          onRefresh && !_refreshingAll && onRefresh(self);
        };
        self.getVelocity = function() {
          return (scrollFunc() - scroll2) / (_getTime2() - _time2) * 1e3 || 0;
        };
        self.endAnimation = function() {
          _endAnimation(self.callbackAnimation);
          if (animation) {
            scrubTween ? scrubTween.progress(1) : !animation.paused() ? _endAnimation(animation, animation.reversed()) : isToggle || _endAnimation(animation, self.direction < 0, 1);
          }
        };
        self.labelToScroll = function(label) {
          return animation && animation.labels && (start || self.refresh() || start) + animation.labels[label] / animation.duration() * change || 0;
        };
        self.getTrailing = function(name) {
          var i = _triggers.indexOf(self), a = self.direction > 0 ? _triggers.slice(0, i).reverse() : _triggers.slice(i + 1);
          return (_isString3(name) ? a.filter(function(t) {
            return t.vars.preventOverlaps === name;
          }) : a).filter(function(t) {
            return self.direction > 0 ? t.end <= start : t.start >= end;
          });
        };
        self.update = function(reset, recordVelocity, forceFake) {
          if (containerAnimation && !forceFake && !reset) {
            return;
          }
          var scroll = _refreshingAll ? prevScroll : self.scroll(), p = reset ? 0 : (scroll - start) / change, clipped = p < 0 ? 0 : p > 1 ? 1 : p || 0, prevProgress2 = self.progress, isActive, wasActive, toggleState, action, stateChanged, toggled, isAtMax, isTakingAction;
          if (recordVelocity) {
            scroll2 = scroll1;
            scroll1 = containerAnimation ? scrollFunc() : scroll;
            if (snap3) {
              snap22 = snap1;
              snap1 = animation && !isToggle ? animation.totalProgress() : clipped;
            }
          }
          anticipatePin && !clipped && pin && !_refreshing && !_startup2 && _lastScrollTime && start < scroll + (scroll - scroll2) / (_getTime2() - _time2) * anticipatePin && (clipped = 1e-4);
          if (clipped !== prevProgress2 && self.enabled) {
            isActive = self.isActive = !!clipped && clipped < 1;
            wasActive = !!prevProgress2 && prevProgress2 < 1;
            toggled = isActive !== wasActive;
            stateChanged = toggled || !!clipped !== !!prevProgress2;
            self.direction = clipped > prevProgress2 ? 1 : -1;
            self.progress = clipped;
            if (stateChanged && !_refreshing) {
              toggleState = clipped && !prevProgress2 ? 0 : clipped === 1 ? 1 : prevProgress2 === 1 ? 2 : 3;
              if (isToggle) {
                action = !toggled && toggleActions[toggleState + 1] !== "none" && toggleActions[toggleState + 1] || toggleActions[toggleState];
                isTakingAction = animation && (action === "complete" || action === "reset" || action in animation);
              }
            }
            preventOverlaps && (toggled || isTakingAction) && (isTakingAction || scrub || !animation) && (_isFunction3(preventOverlaps) ? preventOverlaps(self) : self.getTrailing(preventOverlaps).forEach(function(t) {
              return t.endAnimation();
            }));
            if (!isToggle) {
              if (scrubTween && !_refreshing && !_startup2) {
                (containerAnimation || _primary && _primary !== self) && scrubTween.render(scrubTween._dp._time - scrubTween._start);
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
            onUpdate && !isToggle && !reset && onUpdate(self);
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
                onUpdate && onUpdate(self);
              }
              if (toggled || !_limitCallbacks) {
                onToggle && toggled && _callback3(self, onToggle);
                callbacks[toggleState] && _callback3(self, callbacks[toggleState]);
                once && (clipped === 1 ? self.kill(false, 1) : callbacks[toggleState] = 0);
                if (!toggled) {
                  toggleState = clipped === 1 ? 1 : 3;
                  callbacks[toggleState] && _callback3(self, callbacks[toggleState]);
                }
              }
              if (fastScrollEnd && !isActive && Math.abs(self.getVelocity()) > (_isNumber3(fastScrollEnd) ? fastScrollEnd : 2500)) {
                _endAnimation(self.callbackAnimation);
                scrubTween ? scrubTween.progress(1) : _endAnimation(animation, action === "reverse" ? 1 : !clipped, 1);
              }
            } else if (isToggle && onUpdate && !_refreshing) {
              onUpdate(self);
            }
          }
          if (markerEndSetter) {
            var n = containerAnimation ? scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0) : scroll;
            markerStartSetter(n + (markerStartTrigger._isFlipped ? 1 : 0));
            markerEndSetter(n);
          }
          caMarkerSetter && caMarkerSetter(-scroll / containerAnimation.duration() * (containerAnimation._caScrollDist || 0));
        };
        self.enable = function(reset, refresh) {
          if (!self.enabled) {
            self.enabled = true;
            _addListener3(scroller, "resize", _onResize);
            _addListener3(isViewport ? _doc4 : scroller, "scroll", _onScroll3);
            onRefreshInit && _addListener3(ScrollTrigger3, "refreshInit", onRefreshInit);
            if (reset !== false) {
              self.progress = prevProgress = 0;
              scroll1 = scroll2 = lastSnap = scrollFunc();
            }
            refresh !== false && self.refresh();
          }
        };
        self.getTween = function(snap4) {
          return snap4 && tweenTo ? tweenTo.tween : scrubTween;
        };
        self.setPositions = function(newStart, newEnd) {
          if (pin) {
            pinStart += newStart - start;
            pinChange += newEnd - newStart - change;
            pinSpacing === _padding && self.adjustPinSpacing(newEnd - newStart - change);
          }
          self.start = start = newStart;
          self.end = end = newEnd;
          change = newEnd - newStart;
          self.update();
        };
        self.adjustPinSpacing = function(amount) {
          if (spacerState) {
            var i = spacerState.indexOf(direction2.d) + 1;
            spacerState[i] = parseFloat(spacerState[i]) + amount + _px;
            spacerState[1] = parseFloat(spacerState[1]) + amount + _px;
            _setState(spacerState);
          }
        };
        self.disable = function(reset, allowAnimation) {
          if (self.enabled) {
            reset !== false && self.revert(true, true);
            self.enabled = self.isActive = false;
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
                if (_triggers[i].scroller === scroller && _triggers[i] !== self) {
                  return;
                }
              }
              _removeListener3(scroller, "resize", _onResize);
              _removeListener3(scroller, "scroll", _onScroll3);
            }
          }
        };
        self.kill = function(revert, allowAnimation) {
          self.disable(revert, allowAnimation);
          scrubTween && !allowAnimation && scrubTween.kill();
          id && delete _ids[id];
          var i = _triggers.indexOf(self);
          i >= 0 && _triggers.splice(i, 1);
          i === _i && _direction > 0 && _i--;
          i = 0;
          _triggers.forEach(function(t) {
            return t.scroller === self.scroller && (i = 1);
          });
          i || _refreshingAll || (self.scroll.rec = 0);
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
          _primary === self && (_primary = 0);
          if (pin) {
            pinCache && (pinCache.uncache = 1);
            i = 0;
            _triggers.forEach(function(t) {
              return t.pin === pin && i++;
            });
            i || (pinCache.spacer = 0);
          }
          vars.onKill && vars.onKill(self);
        };
        self.enable(false, false);
        customRevertReturn && customRevertReturn(self);
        !animation || !animation.add || change ? self.refresh() : gsap3.delayedCall(0.01, function() {
          return start || end || self.refresh();
        }) && (change = 0.01) && (start = end = 0);
        pin && _queueRefreshAll();
      };
      ScrollTrigger3.register = function register2(core) {
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
      ScrollTrigger3.disable = function disable(reset, kill2) {
        _enabled = 0;
        _triggers.forEach(function(trigger) {
          return trigger[kill2 ? "kill" : "disable"](reset);
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
        return function(self) {
          elements.length || delay.restart(true);
          elements.push(self.trigger);
          triggers.push(self);
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
      var _vars2 = vars, normalizeScrollX = _vars2.normalizeScrollX, momentum = _vars2.momentum, allowNestedScroll = _vars2.allowNestedScroll, self, maxY, target2 = _getTarget(vars.target) || _docEl2, smoother = gsap3.core.globals().ScrollSmoother, smootherInstance = smoother && smoother.get(), content = _fixIOSBug && (vars.content && _getTarget(vars.content) || smootherInstance && vars.content !== false && !smootherInstance.smooth() && smootherInstance.content()), scrollFuncY = _getScrollFunc(target2, _vertical), scrollFuncX = _getScrollFunc(target2, _horizontal), scale = 1, initialScale = (Observer.isTouch && _win4.visualViewport ? _win4.visualViewport.scale * _win4.visualViewport.width : _win4.outerWidth) / _win4.innerWidth, wheelRefresh = 0, resolveMomentumDuration = _isFunction3(momentum) ? function() {
        return momentum(self);
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
          var offset = _round3(self.deltaY / 2), scroll = scrollClampY(scrollFuncY.v - offset);
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
        return _fixIOSBug && e.type === "touchmove" && ignoreDrag(e) || scale > 1.05 && e.type !== "touchstart" || self.isGesturing || e.touches && e.touches.length > 1;
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
      vars.onRelease = vars.onGestureStart = function(self2, wasDragging) {
        scrollFuncY.offset && removeContentOffset();
        if (!wasDragging) {
          onStopDelayedCall.restart(true);
        } else {
          _scrollers.cache++;
          var dur = resolveMomentumDuration(), currentScroll, endScroll;
          if (normalizeScrollX) {
            currentScroll = scrollFuncX();
            endScroll = currentScroll + dur * 0.05 * -self2.velocityX / 0.227;
            dur *= _clampScrollAndGetDurationMultiplier(scrollFuncX, currentScroll, endScroll, _maxScroll(target2, _horizontal));
            tween.vars.scrollX = scrollClampX(endScroll);
          }
          currentScroll = scrollFuncY();
          endScroll = currentScroll + dur * 0.05 * -self2.velocityY / 0.227;
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
      vars.onChange = function(self2, dx, dy, xArray, yArray) {
        _refreshID !== lastRefreshID && updateClamps();
        dx && normalizeScrollX && scrollFuncX(scrollClampX(xArray[2] === dx ? startScrollX + (self2.startX - self2.x) : scrollFuncX() + dx - xArray[1]));
        if (dy) {
          scrollFuncY.offset && removeContentOffset();
          var isTouch = yArray[2] === dy, y = isTouch ? startScrollY + self2.startY - self2.y : scrollFuncY() + dy - yArray[1], yClamped = scrollClampY(y);
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
      self = new Observer(vars);
      self.iOS = _fixIOSBug;
      _fixIOSBug && !scrollFuncY() && scrollFuncY(1);
      _fixIOSBug && gsap3.ticker.add(_passThrough3);
      onStopDelayedCall = self._dc;
      tween = gsap3.to(self, {
        ease: "power4",
        paused: true,
        scrollX: normalizeScrollX ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        onComplete: onStopDelayedCall.vars.onComplete
      });
      return self;
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

// node_modules/gsap/ScrollToPlugin.js
var ScrollToPlugin_exports = {};
__export(ScrollToPlugin_exports, {
  ScrollToPlugin: () => ScrollToPlugin,
  default: () => ScrollToPlugin
});
var gsap4, _coreInitted4, _window, _docEl3, _body3, _toArray2, _config2, _windowExists7, _getGSAP5, _isString5, _isFunction5, _max, _buildGetter, _clean, _getOffset, _parseVal, _initCore5, ScrollToPlugin;
var init_ScrollToPlugin = __esm({
  "node_modules/gsap/ScrollToPlugin.js"() {
    _windowExists7 = function _windowExists8() {
      return typeof window !== "undefined";
    };
    _getGSAP5 = function _getGSAP6() {
      return gsap4 || _windowExists7() && (gsap4 = window.gsap) && gsap4.registerPlugin && gsap4;
    };
    _isString5 = function _isString6(value) {
      return typeof value === "string";
    };
    _isFunction5 = function _isFunction6(value) {
      return typeof value === "function";
    };
    _max = function _max2(element, axis) {
      var dim = axis === "x" ? "Width" : "Height", scroll = "scroll" + dim, client = "client" + dim;
      return element === _window || element === _docEl3 || element === _body3 ? Math.max(_docEl3[scroll], _body3[scroll]) - (_window["inner" + dim] || _docEl3[client] || _body3[client]) : element[scroll] - element["offset" + dim];
    };
    _buildGetter = function _buildGetter2(e, axis) {
      var p = "scroll" + (axis === "x" ? "Left" : "Top");
      if (e === _window) {
        if (e.pageXOffset != null) {
          p = "page" + axis.toUpperCase() + "Offset";
        } else {
          e = _docEl3[p] != null ? _docEl3 : _body3;
        }
      }
      return function() {
        return e[p];
      };
    };
    _clean = function _clean2(value, index, target2, targets) {
      _isFunction5(value) && (value = value(index, target2, targets));
      if (typeof value !== "object") {
        return _isString5(value) && value !== "max" && value.charAt(1) !== "=" ? {
          x: value,
          y: value
        } : {
          y: value
        };
      } else if (value.nodeType) {
        return {
          y: value,
          x: value
        };
      } else {
        var result = {}, p;
        for (p in value) {
          result[p] = p !== "onAutoKill" && _isFunction5(value[p]) ? value[p](index, target2, targets) : value[p];
        }
        return result;
      }
    };
    _getOffset = function _getOffset2(element, container) {
      element = _toArray2(element)[0];
      if (!element || !element.getBoundingClientRect) {
        return console.warn("scrollTo target doesn't exist. Using 0") || {
          x: 0,
          y: 0
        };
      }
      var rect = element.getBoundingClientRect(), isRoot = !container || container === _window || container === _body3, cRect = isRoot ? {
        top: _docEl3.clientTop - (_window.pageYOffset || _docEl3.scrollTop || _body3.scrollTop || 0),
        left: _docEl3.clientLeft - (_window.pageXOffset || _docEl3.scrollLeft || _body3.scrollLeft || 0)
      } : container.getBoundingClientRect(), offsets = {
        x: rect.left - cRect.left,
        y: rect.top - cRect.top
      };
      if (!isRoot && container) {
        offsets.x += _buildGetter(container, "x")();
        offsets.y += _buildGetter(container, "y")();
      }
      return offsets;
    };
    _parseVal = function _parseVal2(value, target2, axis, currentVal, offset) {
      return !isNaN(value) && typeof value !== "object" ? parseFloat(value) - offset : _isString5(value) && value.charAt(1) === "=" ? parseFloat(value.substr(2)) * (value.charAt(0) === "-" ? -1 : 1) + currentVal - offset : value === "max" ? _max(target2, axis) - offset : Math.min(_max(target2, axis), _getOffset(value, target2)[axis] - offset);
    };
    _initCore5 = function _initCore6() {
      gsap4 = _getGSAP5();
      if (_windowExists7() && gsap4 && document.body) {
        _window = window;
        _body3 = document.body;
        _docEl3 = document.documentElement;
        _toArray2 = gsap4.utils.toArray;
        gsap4.config({
          autoKillThreshold: 7
        });
        _config2 = gsap4.config();
        _coreInitted4 = 1;
      }
    };
    ScrollToPlugin = {
      version: "3.11.3",
      name: "scrollTo",
      rawVars: 1,
      register: function register(core) {
        gsap4 = core;
        _initCore5();
      },
      init: function init4(target2, value, tween, index, targets) {
        _coreInitted4 || _initCore5();
        var data = this, snapType = gsap4.getProperty(target2, "scrollSnapType");
        data.isWin = target2 === _window;
        data.target = target2;
        data.tween = tween;
        value = _clean(value, index, target2, targets);
        data.vars = value;
        data.autoKill = !!value.autoKill;
        data.getX = _buildGetter(target2, "x");
        data.getY = _buildGetter(target2, "y");
        data.x = data.xPrev = data.getX();
        data.y = data.yPrev = data.getY();
        gsap4.getProperty(target2, "scrollBehavior") === "smooth" && gsap4.set(target2, {
          scrollBehavior: "auto"
        });
        if (snapType && snapType !== "none") {
          data.snap = 1;
          data.snapInline = target2.style.scrollSnapType;
          target2.style.scrollSnapType = "none";
        }
        if (value.x != null) {
          data.add(data, "x", data.x, _parseVal(value.x, target2, "x", data.x, value.offsetX || 0), index, targets);
          data._props.push("scrollTo_x");
        } else {
          data.skipX = 1;
        }
        if (value.y != null) {
          data.add(data, "y", data.y, _parseVal(value.y, target2, "y", data.y, value.offsetY || 0), index, targets);
          data._props.push("scrollTo_y");
        } else {
          data.skipY = 1;
        }
      },
      render: function render3(ratio, data) {
        var pt = data._pt, target2 = data.target, tween = data.tween, autoKill = data.autoKill, xPrev = data.xPrev, yPrev = data.yPrev, isWin = data.isWin, snap3 = data.snap, snapInline = data.snapInline, x, y, yDif, xDif, threshold;
        while (pt) {
          pt.r(ratio, pt.d);
          pt = pt._next;
        }
        x = isWin || !data.skipX ? data.getX() : xPrev;
        y = isWin || !data.skipY ? data.getY() : yPrev;
        yDif = y - yPrev;
        xDif = x - xPrev;
        threshold = _config2.autoKillThreshold;
        if (data.x < 0) {
          data.x = 0;
        }
        if (data.y < 0) {
          data.y = 0;
        }
        if (autoKill) {
          if (!data.skipX && (xDif > threshold || xDif < -threshold) && x < _max(target2, "x")) {
            data.skipX = 1;
          }
          if (!data.skipY && (yDif > threshold || yDif < -threshold) && y < _max(target2, "y")) {
            data.skipY = 1;
          }
          if (data.skipX && data.skipY) {
            tween.kill();
            data.vars.onAutoKill && data.vars.onAutoKill.apply(tween, data.vars.onAutoKillParams || []);
          }
        }
        if (isWin) {
          _window.scrollTo(!data.skipX ? data.x : x, !data.skipY ? data.y : y);
        } else {
          data.skipY || (target2.scrollTop = data.y);
          data.skipX || (target2.scrollLeft = data.x);
        }
        if (snap3 && (ratio === 1 || ratio === 0)) {
          y = target2.scrollTop;
          x = target2.scrollLeft;
          snapInline ? target2.style.scrollSnapType = snapInline : target2.style.removeProperty("scroll-snap-type");
          target2.scrollTop = y + 1;
          target2.scrollLeft = x + 1;
          target2.scrollTop = y;
          target2.scrollLeft = x;
        }
        data.xPrev = data.x;
        data.yPrev = data.y;
      },
      kill: function kill(property) {
        var both = property === "scrollTo";
        if (both || property === "scrollTo_x") {
          this.skipX = 1;
        }
        if (both || property === "scrollTo_y") {
          this.skipY = 1;
        }
      }
    };
    ScrollToPlugin.max = _max;
    ScrollToPlugin.getOffset = _getOffset;
    ScrollToPlugin.buildGetter = _buildGetter;
    _getGSAP5() && gsap4.registerPlugin(ScrollToPlugin);
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
var _doc5, _win5, _docElement2, _body4, _divContainer, _svgContainer, _identityMatrix, _gEl, _transformProp3, _transformOriginProp2, _hasOffsetBug, _setDoc, _forceNonZeroScale, _svgTemps, _divTemps, _getDocScrollTop, _getDocScrollLeft, _svgOwner, _isFixed, _createSibling, _consolidate, _getCTM, _placeSiblings, _setMatrix, Matrix2D;
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
        _body4 = doc.body;
        _gEl = _doc5.createElementNS("http://www.w3.org/2000/svg", "g");
        _gEl.style.transform = "none";
        var d1 = doc.createElement("div"), d2 = doc.createElement("div");
        _body4.appendChild(d1);
        d1.appendChild(d2);
        d1.style.position = "static";
        d1.style[_transformProp3] = "translate3d(0,0,1px)";
        _hasOffsetBug = d2.offsetParent !== d1;
        _body4.removeChild(d1);
      }
      return doc;
    };
    _forceNonZeroScale = function _forceNonZeroScale2(e) {
      var a, cache;
      while (e && e !== _body4) {
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
      return _win5.pageYOffset || _doc5.scrollTop || _docElement2.scrollTop || _body4.scrollTop || 0;
    };
    _getDocScrollLeft = function _getDocScrollLeft2() {
      return _win5.pageXOffset || _doc5.scrollLeft || _docElement2.scrollLeft || _body4.scrollLeft || 0;
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
function _assertThisInitialized2(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _inheritsLoose2(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var gsap5, _win6, _doc6, _docElement3, _body5, _tempDiv2, _placeholderDiv, _coreInitted5, _checkPrefix, _toArray3, _supportsPassive, _isTouchDevice, _touchEventLookup, _isMultiTouching, _isAndroid, InertiaPlugin, _defaultCursor, _supportsPointer, _dragCount, _windowExists9, _getGSAP7, _isFunction7, _isObject5, _isUndefined3, _emptyFunc3, _transformProp4, _transformOriginProp3, _round5, _isArray2, _createElement3, _RAD2DEG2, _bigNum3, _identityMatrix2, _getTime3, _renderQueue, _lookup, _lookupCount, _clickableTagExp, _lastDragTime, _temp1, _windowProxy, _copy, _extend, _setTouchActionForAllDescendants, _renderQueueTick, _addToRenderQueue, _renderQueueTimeout, _removeFromRenderQueue, _setDefaults5, _addListener5, _removeListener5, _preventDefault, _hasTouchID, _onMultiTouchDocumentEnd, _onMultiTouchDocument, _getDocScrollTop3, _getDocScrollLeft3, _addScrollListener, _removeScrollListener, _isRoot, _getMaxScroll, _recordMaxScrolls, _setStyle, _getComputedStyle3, _tempRect, _parseRect, _dispatchEvent, _getBounds3, _point1, _getElementBounds, _parseInertia, _isClickable, _setSelectable, _isFixed3, _supports3D2, _addPaddingBR, ScrollProxy, _initCore7, EventDispatcher, Draggable;
var init_Draggable = __esm({
  "node_modules/gsap/Draggable.js"() {
    init_matrix();
    _dragCount = 0;
    _windowExists9 = function _windowExists10() {
      return typeof window !== "undefined";
    };
    _getGSAP7 = function _getGSAP8() {
      return gsap5 || _windowExists9() && (gsap5 = window.gsap) && gsap5.registerPlugin && gsap5;
    };
    _isFunction7 = function _isFunction8(value) {
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
        gsap5.ticker.add(_renderQueueTick);
      }
    };
    _renderQueueTimeout = function _renderQueueTimeout2() {
      return !_renderQueue.length && gsap5.ticker.remove(_renderQueueTick);
    };
    _removeFromRenderQueue = function _removeFromRenderQueue2(func) {
      var i = _renderQueue.length;
      while (i--) {
        if (_renderQueue[i] === func) {
          _renderQueue.splice(i, 1);
        }
      }
      gsap5.to(_renderQueueTimeout, {
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
      return Math.max(0, _isRoot(element) ? Math.max(_docElement3[scroll], _body5[scroll]) - (_win6["inner" + dim] || _docElement3[client] || _body5[client]) : element[scroll] - element[client]);
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
        _tempRect.width = _tempRect.right = _docElement3.clientWidth || e.innerWidth || _body5.clientWidth || 0;
        _tempRect.height = _tempRect.bottom = (e.innerHeight || 0) - 20 < _docElement3.clientHeight ? _docElement3.clientHeight : e.innerHeight || _body5.clientHeight || 0;
        return _tempRect;
      }
      var doc = e.ownerDocument || _doc6, r = !_isUndefined3(e.pageX) ? {
        left: e.pageX - _getDocScrollLeft3(doc),
        top: e.pageY - _getDocScrollTop3(doc),
        right: e.pageX - _getDocScrollLeft3(doc) + 1,
        bottom: e.pageY - _getDocScrollTop3(doc) + 1
      } : !e.nodeType && !_isUndefined3(e.left) && !_isUndefined3(e.top) ? e : _toArray3(e)[0].getBoundingClientRect();
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
      if (_isFunction7(callback)) {
        result = callback.apply(vars.callbackScope || target2, vars[callbackName + "Params"] || [target2.pointerEvent]);
      }
      if (listeners && target2.dispatchEvent(type) === false) {
        result = false;
      }
      return result;
    };
    _getBounds3 = function _getBounds4(target2, context3) {
      var e = _toArray3(target2)[0], top, left, offset;
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
      context3 = _toArray3(context3)[0];
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
        } else if (_isFunction7(snap3)) {
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
      return !element || !element.getAttribute || element === _body5 ? false : (data = element.getAttribute("data-clickable")) === "true" || data !== "false" && (element.onclick || _clickableTagExp.test(element.nodeName + "") || element.getAttribute("contentEditable") === "true") ? true : _isClickable2(element.parentNode);
    };
    _setSelectable = function _setSelectable2(elements, selectable) {
      var i = elements.length, e;
      while (i--) {
        e = elements[i];
        e.ondragstart = e.onselectstart = selectable ? null : _emptyFunc3;
        gsap5.set(e, {
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
      element = gsap5.utils.toArray(element)[0];
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
          gsap5.killTweensOf(this, {
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
          gsap5.killTweensOf(this, {
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
    _initCore7 = function _initCore8(required) {
      if (_windowExists9() && document.body) {
        var nav = window && window.navigator;
        _win6 = window;
        _doc6 = document;
        _docElement3 = _doc6.documentElement;
        _body5 = _doc6.body;
        _tempDiv2 = _createElement3("div");
        _supportsPointer = !!window.PointerEvent;
        _placeholderDiv = _createElement3("div");
        _placeholderDiv.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab";
        _defaultCursor = _placeholderDiv.style.cursor === "grab" ? "grab" : "move";
        _isAndroid = nav && nav.userAgent.toLowerCase().indexOf("android") !== -1;
        _isTouchDevice = "ontouchstart" in _docElement3 && "orientation" in _win6 || nav && (nav.MaxTouchPoints > 0 || nav.msMaxTouchPoints > 0);
        _addPaddingBR = function() {
          var div = _createElement3("div"), child = _createElement3("div"), childStyle = child.style, parent = _body5, val;
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
        _body5 && _body5.addEventListener("touchstart", _emptyFunc3);
        _addListener5(_doc6, "contextmenu", function() {
          for (var p in _lookup) {
            if (_lookup[p].isPressed) {
              _lookup[p].endDrag();
            }
          }
        });
        gsap5 = _coreInitted5 = _getGSAP7();
      }
      if (gsap5) {
        InertiaPlugin = gsap5.plugins.inertia;
        _checkPrefix = gsap5.utils.checkPrefix;
        _transformProp4 = _checkPrefix(_transformProp4);
        _transformOriginProp3 = _checkPrefix(_transformOriginProp3);
        _toArray3 = gsap5.utils.toArray;
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
        _coreInitted5 || _initCore7(1);
        target2 = _toArray3(target2)[0];
        if (!InertiaPlugin) {
          InertiaPlugin = gsap5.plugins.inertia;
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
        gsap5.getProperty(target2, "x");
        var type = (vars.type || "x,y").toLowerCase(), xyMode = ~type.indexOf("x") || ~type.indexOf("y"), rotationMode = type.indexOf("rotation") !== -1, xProp = rotationMode ? "rotation" : xyMode ? "x" : "left", yProp = xyMode ? "y" : "top", allowX = !!(~type.indexOf("x") || ~type.indexOf("left") || type === "scroll"), allowY = !!(~type.indexOf("y") || ~type.indexOf("top") || type === "scroll"), minimumMovement = vars.minimumMovement || 2, self = _assertThisInitialized2(_this2), triggers = _toArray3(vars.trigger || vars.handle || target2), killProps = {}, dragEndTime = 0, checkAutoScrollBounds = false, autoScrollMarginTop = vars.autoScrollMarginTop || 40, autoScrollMarginRight = vars.autoScrollMarginRight || 40, autoScrollMarginBottom = vars.autoScrollMarginBottom || 40, autoScrollMarginLeft = vars.autoScrollMarginLeft || 40, isClickable = vars.clickableTest || _isClickable, clickTime = 0, gsCache = target2._gsap || gsap5.core.getCache(target2), isFixed = _isFixed3(target2), getPropAsNum = function getPropAsNum2(property, unit) {
          return parseFloat(gsCache.get(target2, property, unit));
        }, ownerDoc = target2.ownerDocument || _doc6, enabled, scrollProxy, startPointerX, startPointerY, startElementX, startElementY, hasBounds, hasDragCallback, hasMoveCallback, maxX, minX, maxY, minY, touch, touchID, rotationOrigin, dirty, old, snapX, snapY, snapXY, isClicking, touchEventTarget, matrix, interrupted, allowNativeTouchScrolling, touchDragAxis, isDispatching, clickDispatch, trustedClickDispatch, isPreventingDefault, innerMatrix, dragged, onContextMenu = function onContextMenu2(e) {
          _preventDefault(e);
          e.stopImmediatePropagation && e.stopImmediatePropagation();
          return false;
        }, render4 = function render5(suppressEvents) {
          if (self.autoScroll && self.isDragging && (checkAutoScrollBounds || dirty)) {
            var e = target2, autoScrollFactor = self.autoScroll * 15, parent, isRoot, rect, pointerX, pointerY, changeX, changeY, gap;
            checkAutoScrollBounds = false;
            _windowProxy.scrollTop = _win6.pageYOffset != null ? _win6.pageYOffset : ownerDoc.documentElement.scrollTop != null ? ownerDoc.documentElement.scrollTop : ownerDoc.body.scrollTop;
            _windowProxy.scrollLeft = _win6.pageXOffset != null ? _win6.pageXOffset : ownerDoc.documentElement.scrollLeft != null ? ownerDoc.documentElement.scrollLeft : ownerDoc.body.scrollLeft;
            pointerX = self.pointerX - _windowProxy.scrollLeft;
            pointerY = self.pointerY - _windowProxy.scrollTop;
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
                setPointerPosition(self.pointerX + changeX, self.pointerY + changeY);
              }
              e = parent;
            }
          }
          if (dirty) {
            var x = self.x, y = self.y;
            if (rotationMode) {
              self.deltaX = x - parseFloat(gsCache.rotation);
              self.rotation = x;
              gsCache.rotation = x + "deg";
              gsCache.renderTransform(1, gsCache);
            } else {
              if (scrollProxy) {
                if (allowY) {
                  self.deltaY = y - scrollProxy.top();
                  scrollProxy.top(y);
                }
                if (allowX) {
                  self.deltaX = x - scrollProxy.left();
                  scrollProxy.left(x);
                }
              } else if (xyMode) {
                if (allowY) {
                  self.deltaY = y - parseFloat(gsCache.y);
                  gsCache.y = y + "px";
                }
                if (allowX) {
                  self.deltaX = x - parseFloat(gsCache.x);
                  gsCache.x = x + "px";
                }
                gsCache.renderTransform(1, gsCache);
              } else {
                if (allowY) {
                  self.deltaY = y - parseFloat(target2.style.top || 0);
                  target2.style.top = y + "px";
                }
                if (allowX) {
                  self.deltaX = x - parseFloat(target2.style.left || 0);
                  target2.style.left = x + "px";
                }
              }
            }
            if (hasDragCallback && !suppressEvents && !isDispatching) {
              isDispatching = true;
              if (_dispatchEvent(self, "drag", "onDrag") === false) {
                if (allowX) {
                  self.x -= self.deltaX;
                }
                if (allowY) {
                  self.y -= self.deltaY;
                }
                render5(true);
              }
              isDispatching = false;
            }
          }
          dirty = false;
        }, syncXY = function syncXY2(skipOnUpdate, skipSnap) {
          var x = self.x, y = self.y, snappedValue, cs;
          if (!target2._gsap) {
            gsCache = gsap5.core.getCache(target2);
          }
          gsCache.uncache && gsap5.getProperty(target2, "x");
          if (xyMode) {
            self.x = parseFloat(gsCache.x);
            self.y = parseFloat(gsCache.y);
          } else if (rotationMode) {
            self.x = self.rotation = parseFloat(gsCache.rotation);
          } else if (scrollProxy) {
            self.y = scrollProxy.top();
            self.x = scrollProxy.left();
          } else {
            self.y = parseFloat(target2.style.top || (cs = _getComputedStyle3(target2)) && cs.top) || 0;
            self.x = parseFloat(target2.style.left || (cs || {}).left) || 0;
          }
          if ((snapX || snapY || snapXY) && !skipSnap && (self.isDragging || self.isThrowing)) {
            if (snapXY) {
              _temp1.x = self.x;
              _temp1.y = self.y;
              snappedValue = snapXY(_temp1);
              if (snappedValue.x !== self.x) {
                self.x = snappedValue.x;
                dirty = true;
              }
              if (snappedValue.y !== self.y) {
                self.y = snappedValue.y;
                dirty = true;
              }
            }
            if (snapX) {
              snappedValue = snapX(self.x);
              if (snappedValue !== self.x) {
                self.x = snappedValue;
                if (rotationMode) {
                  self.rotation = snappedValue;
                }
                dirty = true;
              }
            }
            if (snapY) {
              snappedValue = snapY(self.y);
              if (snappedValue !== self.y) {
                self.y = snappedValue;
              }
              dirty = true;
            }
          }
          dirty && render4(true);
          if (!skipOnUpdate) {
            self.deltaX = self.x - x;
            self.deltaY = self.y - y;
            _dispatchEvent(self, "throwupdate", "onThrowUpdate");
          }
        }, buildSnapFunc = function buildSnapFunc2(snap3, min, max, factor) {
          if (min == null) {
            min = -_bigNum3;
          }
          if (max == null) {
            max = _bigNum3;
          }
          if (_isFunction7(snap3)) {
            return function(n) {
              var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance;
              return snap3.call(self, (n > max ? max + (n - max) * edgeTolerance : n < min ? min + (n - min) * edgeTolerance : n) * factor) * factor;
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
          if (_isFunction7(snap3)) {
            return function(point) {
              var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance, x = point.x, y = point.y, result, dx, dy;
              point.x = x = x > maxX2 ? maxX2 + (x - maxX2) * edgeTolerance : x < minX2 ? minX2 + (x - minX2) * edgeTolerance : x;
              point.y = y = y > maxY2 ? maxY2 + (y - maxY2) * edgeTolerance : y < minY2 ? minY2 + (y - minY2) * edgeTolerance : y;
              result = snap3.call(self, point);
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
            self.minX = minX = -scrollProxy.maxScrollLeft();
            self.minY = minY = -scrollProxy.maxScrollTop();
            self.maxX = maxX = self.maxY = maxY = 0;
            hasBounds = true;
          } else if (!!vars.bounds) {
            bounds = _getBounds3(vars.bounds, target2.parentNode);
            if (rotationMode) {
              self.minX = minX = bounds.left;
              self.maxX = maxX = bounds.left + bounds.width;
              self.minY = minY = self.maxY = maxY = 0;
            } else if (!_isUndefined3(vars.bounds.maxX) || !_isUndefined3(vars.bounds.maxY)) {
              bounds = vars.bounds;
              self.minX = minX = bounds.minX;
              self.minY = minY = bounds.minY;
              self.maxX = maxX = bounds.maxX;
              self.maxY = maxY = bounds.maxY;
            } else {
              targetBounds = _getBounds3(target2, target2.parentNode);
              self.minX = minX = Math.round(getPropAsNum(xProp, "px") + bounds.left - targetBounds.left);
              self.minY = minY = Math.round(getPropAsNum(yProp, "px") + bounds.top - targetBounds.top);
              self.maxX = maxX = Math.round(minX + (bounds.width - targetBounds.width));
              self.maxY = maxY = Math.round(minY + (bounds.height - targetBounds.height));
            }
            if (minX > maxX) {
              self.minX = maxX;
              self.maxX = maxX = minX;
              minX = self.minX;
            }
            if (minY > maxY) {
              self.minY = maxY;
              self.maxY = maxY = minY;
              minY = self.minY;
            }
            if (rotationMode) {
              self.minRotation = minX;
              self.maxRotation = maxX;
            }
            hasBounds = true;
          }
          if (vars.liveSnap) {
            snap3 = vars.liveSnap === true ? vars.snap || {} : vars.liveSnap;
            snapIsRaw = _isArray2(snap3) || _isFunction7(snap3);
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
          self.isThrowing = false;
          _dispatchEvent(self, "throwcomplete", "onThrowComplete");
        }, onThrowInterrupt = function onThrowInterrupt2() {
          self.isThrowing = false;
        }, animate = function animate2(inertia, forceZeroVelocity) {
          var snap3, snapIsRaw, tween, overshootTolerance;
          if (inertia && InertiaPlugin) {
            if (inertia === true) {
              snap3 = vars.snap || vars.liveSnap || {};
              snapIsRaw = _isArray2(snap3) || _isFunction7(snap3);
              inertia = {
                resistance: (vars.throwResistance || vars.resistance || 1e3) / (rotationMode ? 10 : 1)
              };
              if (rotationMode) {
                inertia.rotation = _parseInertia(self, snapIsRaw ? snap3 : snap3.rotation, maxX, minX, 1, forceZeroVelocity);
              } else {
                if (allowX) {
                  inertia[xProp] = _parseInertia(self, snapIsRaw ? snap3 : snap3.points || snap3.x || snap3.left, maxX, minX, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "x");
                }
                if (allowY) {
                  inertia[yProp] = _parseInertia(self, snapIsRaw ? snap3 : snap3.points || snap3.y || snap3.top, maxY, minY, scrollProxy ? -1 : 1, forceZeroVelocity || self.lockedAxis === "y");
                }
                if (snap3.points || _isArray2(snap3) && _isObject5(snap3[0])) {
                  inertia.linkedProps = xProp + "," + yProp;
                  inertia.radius = snap3.radius;
                }
              }
            }
            self.isThrowing = true;
            overshootTolerance = !isNaN(vars.overshootTolerance) ? vars.overshootTolerance : vars.edgeResistance === 1 ? 0 : 1 - self.edgeResistance + 0.2;
            if (!inertia.duration) {
              inertia.duration = {
                max: Math.max(vars.minDuration || 0, "maxDuration" in vars ? vars.maxDuration : 2),
                min: !isNaN(vars.minDuration) ? vars.minDuration : overshootTolerance === 0 || _isObject5(inertia) && inertia.resistance > 1e3 ? 0 : 0.5,
                overshoot: overshootTolerance
              };
            }
            self.tween = tween = gsap5.to(scrollProxy || target2, {
              inertia,
              data: "_draggable",
              onComplete: onThrowComplete,
              onInterrupt: onThrowInterrupt,
              onUpdate: vars.fastMode ? _dispatchEvent : syncXY,
              onUpdateParams: vars.fastMode ? [self, "onthrowupdate", "onThrowUpdate"] : snap3 && snap3.radius ? [false, true] : []
            });
            if (!vars.fastMode) {
              if (scrollProxy) {
                scrollProxy._skip = true;
              }
              tween.render(1e9, true, true);
              syncXY(true, true);
              self.endX = self.x;
              self.endY = self.y;
              if (rotationMode) {
                self.endRotation = self.x;
              }
              tween.play(0);
              syncXY(true, true);
              if (scrollProxy) {
                scrollProxy._skip = false;
              }
            }
          } else if (hasBounds) {
            self.applyBounds();
          }
        }, updateMatrix = function updateMatrix2(shiftStart) {
          var start = matrix, p;
          matrix = getGlobalMatrix(target2.parentNode, true);
          if (shiftStart && self.isPressed && !matrix.equals(start || new Matrix2D())) {
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
          var edgeTolerance = 1 - self.edgeResistance, offsetX = isFixed ? _getDocScrollLeft3(ownerDoc) : 0, offsetY = isFixed ? _getDocScrollTop3(ownerDoc) : 0, parsedOrigin, x, y;
          if (xyMode) {
            gsCache.x = getPropAsNum(xProp, "px") + "px";
            gsCache.y = getPropAsNum(yProp, "px") + "px";
            gsCache.renderTransform();
          }
          updateMatrix(false);
          _point1.x = self.pointerX - offsetX;
          _point1.y = self.pointerY - offsetY;
          matrix && matrix.apply(_point1, _point1);
          startPointerX = _point1.x;
          startPointerY = _point1.y;
          if (dirty) {
            setPointerPosition(self.pointerX, self.pointerY);
            render4(true);
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
              self.applyBounds();
            }
            if (rotationMode) {
              parsedOrigin = target2.ownerSVGElement ? [gsCache.xOrigin - target2.getBBox().x, gsCache.yOrigin - target2.getBBox().y] : (_getComputedStyle3(target2)[_transformOriginProp3] || "0 0").split(" ");
              rotationOrigin = self.rotationOrigin = getGlobalMatrix(target2).apply({
                x: parseFloat(parsedOrigin[0]) || 0,
                y: parseFloat(parsedOrigin[1]) || 0
              });
              syncXY(true, true);
              x = self.pointerX - rotationOrigin.x - offsetX;
              y = rotationOrigin.y - self.pointerY + offsetY;
              startElementX = self.x;
              startElementY = self.y = Math.atan2(y, x) * _RAD2DEG2;
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
          self.startX = startElementX = _round5(startElementX);
          self.startY = startElementY = _round5(startElementY);
        }, isTweening2 = function isTweening3() {
          return self.tween && self.tween.isActive();
        }, removePlaceholder = function removePlaceholder2() {
          if (_placeholderDiv.parentNode && !isTweening2() && !self.isDragging) {
            _placeholderDiv.parentNode.removeChild(_placeholderDiv);
          }
        }, onPress = function onPress2(e, force) {
          var i;
          if (!enabled || self.isPressed || !e || (e.type === "mousedown" || e.type === "pointerdown") && !force && _getTime3() - clickTime < 30 && _touchEventLookup[self.pointerEvent.type]) {
            isPreventingDefault && e && enabled && _preventDefault(e);
            return;
          }
          interrupted = isTweening2();
          dragged = false;
          self.pointerEvent = e;
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
          isClicking = isClickable.call(self, e.target) && vars.dragClickables === false && !force;
          if (isClicking) {
            _addListener5(e.target, "change", onRelease);
            _dispatchEvent(self, "pressInit", "onPressInit");
            _dispatchEvent(self, "press", "onPress");
            _setSelectable(triggers, true);
            isPreventingDefault = false;
            return;
          }
          allowNativeTouchScrolling = !touchEventTarget || allowX === allowY || self.vars.allowNativeTouchScrolling === false || self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2) ? false : allowX ? "y" : "x";
          isPreventingDefault = !allowNativeTouchScrolling && !self.allowEventDefault;
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
          _addToRenderQueue(render4);
          startPointerY = self.pointerY = e.pageY;
          startPointerX = self.pointerX = e.pageX;
          _dispatchEvent(self, "pressInit", "onPressInit");
          if (allowNativeTouchScrolling || self.autoScroll) {
            _recordMaxScrolls(target2.parentNode);
          }
          if (target2.parentNode && self.autoScroll && !scrollProxy && !rotationMode && target2.parentNode._gsMaxScrollX && !_placeholderDiv.parentNode && !target2.getBBox) {
            _placeholderDiv.style.width = target2.parentNode.scrollWidth + "px";
            target2.parentNode.appendChild(_placeholderDiv);
          }
          recordStartPositions();
          self.tween && self.tween.kill();
          self.isThrowing = false;
          gsap5.killTweensOf(scrollProxy || target2, killProps, true);
          scrollProxy && gsap5.killTweensOf(target2, {
            scrollTo: 1
          }, true);
          self.tween = self.lockedAxis = null;
          if (vars.zIndexBoost || !rotationMode && !scrollProxy && vars.zIndexBoost !== false) {
            target2.style.zIndex = Draggable2.zIndex++;
          }
          self.isPressed = true;
          hasDragCallback = !!(vars.onDrag || self._listeners.drag);
          hasMoveCallback = !!(vars.onMove || self._listeners.move);
          if (vars.cursor !== false || vars.activeCursor) {
            i = triggers.length;
            while (--i > -1) {
              gsap5.set(triggers[i], {
                cursor: vars.activeCursor || vars.cursor || (_defaultCursor === "grab" ? "grabbing" : _defaultCursor)
              });
            }
          }
          _dispatchEvent(self, "press", "onPress");
        }, onMove = function onMove2(e) {
          var originalEvent = e, touches, pointerX, pointerY, i, dx, dy;
          if (!enabled || _isMultiTouching || !self.isPressed || !e) {
            isPreventingDefault && e && enabled && _preventDefault(e);
            return;
          }
          self.pointerEvent = e;
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
              if (self.vars.lockAxisOnTouchScroll !== false && allowX && allowY) {
                self.lockedAxis = touchDragAxis === "x" ? "y" : "x";
                _isFunction7(self.vars.onLockAxis) && self.vars.onLockAxis.call(self, originalEvent);
              }
              if (_isAndroid && allowNativeTouchScrolling === touchDragAxis) {
                onRelease(originalEvent);
                return;
              }
            }
          }
          if (!self.allowEventDefault && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling !== touchDragAxis) && originalEvent.cancelable !== false) {
            _preventDefault(originalEvent);
            isPreventingDefault = true;
          } else if (isPreventingDefault) {
            isPreventingDefault = false;
          }
          if (self.autoScroll) {
            checkAutoScrollBounds = true;
          }
          setPointerPosition(e.pageX, e.pageY, hasMoveCallback);
        }, setPointerPosition = function setPointerPosition2(pointerX, pointerY, invokeOnMove) {
          var dragTolerance = 1 - self.dragResistance, edgeTolerance = 1 - self.edgeResistance, prevPointerX = self.pointerX, prevPointerY = self.pointerY, prevStartElementY = startElementY, prevX = self.x, prevY = self.y, prevEndX = self.endX, prevEndY = self.endY, prevEndRotation = self.endRotation, prevDirty = dirty, xChange, yChange, x, y, dif, temp;
          self.pointerX = pointerX;
          self.pointerY = pointerY;
          if (isFixed) {
            pointerX -= _getDocScrollLeft3(ownerDoc);
            pointerY -= _getDocScrollTop3(ownerDoc);
          }
          if (rotationMode) {
            y = Math.atan2(rotationOrigin.y - pointerY, pointerX - rotationOrigin.x) * _RAD2DEG2;
            dif = self.y - y;
            if (dif > 180) {
              startElementY -= 360;
              self.y = y;
            } else if (dif < -180) {
              startElementY += 360;
              self.y = y;
            }
            if (self.x !== startElementX || Math.abs(startElementY - y) > minimumMovement) {
              self.y = y;
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
            if ((self.lockAxis || self.lockedAxis) && (xChange || yChange)) {
              temp = self.lockedAxis;
              if (!temp) {
                self.lockedAxis = temp = allowX && Math.abs(xChange) > Math.abs(yChange) ? "y" : allowY ? "x" : null;
                if (temp && _isFunction7(self.vars.onLockAxis)) {
                  self.vars.onLockAxis.call(self, self.pointerEvent);
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
          if ((snapX || snapY || snapXY) && (self.x !== x || self.y !== y && !rotationMode)) {
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
          if (self.x !== x || self.y !== y && !rotationMode) {
            if (rotationMode) {
              self.endRotation = self.x = self.endX = x;
              dirty = true;
            } else {
              if (allowY) {
                self.y = self.endY = y;
                dirty = true;
              }
              if (allowX) {
                self.x = self.endX = x;
                dirty = true;
              }
            }
            if (!invokeOnMove || _dispatchEvent(self, "move", "onMove") !== false) {
              if (!self.isDragging && self.isPressed) {
                self.isDragging = dragged = true;
                _dispatchEvent(self, "dragstart", "onDragStart");
              }
            } else {
              self.pointerX = prevPointerX;
              self.pointerY = prevPointerY;
              startElementY = prevStartElementY;
              self.x = prevX;
              self.y = prevY;
              self.endX = prevEndX;
              self.endY = prevEndY;
              self.endRotation = prevEndRotation;
              dirty = prevDirty;
            }
          }
        }, onRelease = function onRelease2(e, force) {
          if (!enabled || !self.isPressed || e && touchID != null && !force && (e.pointerId && e.pointerId !== touchID && e.target !== target2 || e.changedTouches && !_hasTouchID(e.changedTouches, touchID))) {
            isPreventingDefault && e && enabled && _preventDefault(e);
            return;
          }
          self.isPressed = false;
          var originalEvent = e, wasDragging = self.isDragging, isContextMenuRelease = self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2), placeholderDelayedCall = gsap5.delayedCall(1e-3, removePlaceholder), touches, i, syntheticEvent, eventTarget, syntheticClick;
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
            self.isDragging = false;
          }
          _removeFromRenderQueue(render4);
          if (isClicking && !isContextMenuRelease) {
            if (e) {
              _removeListener5(e.target, "change", onRelease2);
              self.pointerEvent = originalEvent;
            }
            _setSelectable(triggers, false);
            _dispatchEvent(self, "release", "onRelease");
            _dispatchEvent(self, "click", "onClick");
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
            self.pointerEvent = originalEvent;
            self.pointerX = e.pageX;
            self.pointerY = e.pageY;
          }
          if (isContextMenuRelease && originalEvent) {
            _preventDefault(originalEvent);
            isPreventingDefault = true;
            _dispatchEvent(self, "release", "onRelease");
          } else if (originalEvent && !wasDragging) {
            isPreventingDefault = false;
            if (interrupted && (vars.snap || vars.bounds)) {
              animate(vars.inertia || vars.throwProps);
            }
            _dispatchEvent(self, "release", "onRelease");
            if ((!_isAndroid || originalEvent.type !== "touchmove") && originalEvent.type.indexOf("cancel") === -1) {
              _dispatchEvent(self, "click", "onClick");
              if (_getTime3() - clickTime < 300) {
                _dispatchEvent(self, "doubleclick", "onDoubleClick");
              }
              eventTarget = originalEvent.target || target2;
              clickTime = _getTime3();
              syntheticClick = function syntheticClick2() {
                if (clickTime !== clickDispatch && self.enabled() && !self.isPressed && !originalEvent.defaultPrevented) {
                  if (eventTarget.click) {
                    eventTarget.click();
                  } else if (ownerDoc.createEvent) {
                    syntheticEvent = ownerDoc.createEvent("MouseEvents");
                    syntheticEvent.initMouseEvent("click", true, true, _win6, 1, self.pointerEvent.screenX, self.pointerEvent.screenY, self.pointerX, self.pointerY, false, false, false, false, 0, null);
                    eventTarget.dispatchEvent(syntheticEvent);
                  }
                }
              };
              if (!_isAndroid && !originalEvent.defaultPrevented) {
                gsap5.delayedCall(0.05, syntheticClick);
              }
            }
          } else {
            animate(vars.inertia || vars.throwProps);
            if (!self.allowEventDefault && originalEvent && (vars.dragClickables !== false || !isClickable.call(self, originalEvent.target)) && wasDragging && (!allowNativeTouchScrolling || touchDragAxis && allowNativeTouchScrolling === touchDragAxis) && originalEvent.cancelable !== false) {
              isPreventingDefault = true;
              _preventDefault(originalEvent);
            } else {
              isPreventingDefault = false;
            }
            _dispatchEvent(self, "release", "onRelease");
          }
          isTweening2() && placeholderDelayedCall.duration(self.tween.duration());
          wasDragging && _dispatchEvent(self, "dragend", "onDragEnd");
          return true;
        }, updateScroll = function updateScroll2(e) {
          if (e && self.isDragging && !scrollProxy) {
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
              setPointerPosition(self.pointerX, self.pointerY);
            }
          }
        }, onClick = function onClick2(e) {
          var time = _getTime3(), recentlyClicked = time - clickTime < 100, recentlyDragged = time - dragEndTime < 50, alreadyDispatched = recentlyClicked && clickDispatch === clickTime, defaultPrevented = self.pointerEvent && self.pointerEvent.defaultPrevented, alreadyDispatchedTrusted = recentlyClicked && trustedClickDispatch === clickTime, trusted = e.isTrusted || e.isTrusted == null && recentlyClicked && alreadyDispatched;
          if ((alreadyDispatched || recentlyDragged && self.vars.suppressClickOnDrag !== false) && e.stopImmediatePropagation) {
            e.stopImmediatePropagation();
          }
          if (recentlyClicked && !(self.pointerEvent && self.pointerEvent.defaultPrevented) && (!alreadyDispatched || trusted && !alreadyDispatchedTrusted)) {
            if (trusted && alreadyDispatched) {
              trustedClickDispatch = clickTime;
            }
            clickDispatch = clickTime;
            return;
          }
          if (self.isPressed || recentlyDragged || recentlyClicked) {
            if (!trusted || !e.detail || !recentlyClicked || defaultPrevented) {
              _preventDefault(e);
            }
          }
          if (!recentlyClicked && !recentlyDragged && !dragged) {
            e && e.target && (self.pointerEvent = e);
            _dispatchEvent(self, "click", "onClick");
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
        _this2.startDrag = function(event, align4) {
          var r1, r2, p1, p2;
          onPress(event || self.pointerEvent, true);
          if (align4 && !self.hitTest(event || self.pointerEvent)) {
            r1 = _parseRect(event || self.pointerEvent);
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
          if (!self.isDragging) {
            self.isDragging = dragged = true;
            _dispatchEvent(self, "dragstart", "onDragStart");
          }
        };
        _this2.drag = onMove;
        _this2.endDrag = function(e) {
          return onRelease(e || self.pointerEvent, true);
        };
        _this2.timeSinceDrag = function() {
          return self.isDragging ? 0 : (_getTime3() - dragEndTime) / 1e3;
        };
        _this2.timeSinceClick = function() {
          return (_getTime3() - clickTime) / 1e3;
        };
        _this2.hitTest = function(target3, threshold) {
          return Draggable2.hitTest(self.target, target3, threshold);
        };
        _this2.getDirection = function(from, diagonalThreshold) {
          var mode = from === "velocity" && InertiaPlugin ? from : _isObject5(from) && !rotationMode ? "element" : "start", xChange, yChange, ratio, direction2, r1, r2;
          if (mode === "element") {
            r1 = _parseRect(self.target);
            r2 = _parseRect(from);
          }
          xChange = mode === "start" ? self.x - startElementX : mode === "velocity" ? InertiaPlugin.getVelocity(target2, xProp) : r1.left + r1.width / 2 - (r2.left + r2.width / 2);
          if (rotationMode) {
            return xChange < 0 ? "counter-clockwise" : "clockwise";
          } else {
            diagonalThreshold = diagonalThreshold || 2;
            yChange = mode === "start" ? self.y - startElementY : mode === "velocity" ? InertiaPlugin.getVelocity(target2, yProp) : r1.top + r1.height / 2 - (r2.top + r2.height / 2);
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
            return self.update(true, sticky);
          }
          syncXY(true);
          calculateBounds();
          if (hasBounds && !isTweening2()) {
            x = self.x;
            y = self.y;
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
            if (self.x !== x || self.y !== y) {
              forceZeroVelocity = true;
              self.x = self.endX = x;
              if (rotationMode) {
                self.endRotation = x;
              } else {
                self.y = self.endY = y;
              }
              dirty = true;
              render4(true);
              if (self.autoScroll && !self.isDragging) {
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
            if (self.isThrowing && (forceZeroVelocity || self.endX > maxX || self.endX < minX || self.endY > maxY || self.endY < minY)) {
              animate(vars.inertia || vars.throwProps, forceZeroVelocity);
            }
          }
          return self;
        };
        _this2.update = function(applyBounds, sticky, ignoreExternalChanges) {
          if (sticky && self.isPressed) {
            var m = getGlobalMatrix(target2), p = innerMatrix.apply({
              x: self.x - startElementX,
              y: self.y - startElementY
            }), m2 = getGlobalMatrix(target2.parentNode, true);
            m2.apply({
              x: m.e - p.x,
              y: m.f - p.y
            }, p);
            self.x -= p.x - m2.e;
            self.y -= p.y - m2.f;
            render4(true);
            recordStartPositions();
          }
          var x = self.x, y = self.y;
          updateMatrix(!sticky);
          if (applyBounds) {
            self.applyBounds();
          } else {
            dirty && ignoreExternalChanges && render4(true);
            syncXY(true);
          }
          if (sticky) {
            setPointerPosition(self.pointerX, self.pointerY);
            dirty && render4(true);
          }
          if (self.isPressed && !sticky && (allowX && Math.abs(x - self.x) > 0.01 || allowY && Math.abs(y - self.y) > 0.01 && !rotationMode)) {
            recordStartPositions();
          }
          if (self.autoScroll) {
            _recordMaxScrolls(target2.parentNode, self.isDragging);
            checkAutoScrollBounds = self.isDragging;
            render4(true);
            _removeScrollListener(target2, updateScroll);
            _addScrollListener(target2, updateScroll);
          }
          return self;
        };
        _this2.enable = function(type2) {
          var setVars = {
            lazy: true
          }, id, i, trigger;
          if (vars.cursor !== false) {
            setVars.cursor = vars.cursor || _defaultCursor;
          }
          if (gsap5.utils.checkPrefix("touchCallout")) {
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
              gsap5.set(trigger, setVars);
              if (trigger.getBBox && trigger.ownerSVGElement && allowX !== allowY) {
                gsap5.set(trigger.ownerSVGElement, {
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
          _lookup[id] = self;
          if (scrollProxy) {
            scrollProxy.enable();
            scrollProxy.element._gsDragID = id;
          }
          (vars.bounds || rotationMode) && recordStartPositions();
          vars.bounds && self.applyBounds();
          return self;
        };
        _this2.disable = function(type2) {
          var dragging = self.isDragging, i = triggers.length, trigger;
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
          _removeFromRenderQueue(render4);
          self.isDragging = self.isPressed = isClicking = false;
          dragging && _dispatchEvent(self, "dragend", "onDragEnd");
          return self;
        };
        _this2.enabled = function(value, type2) {
          return arguments.length ? value ? self.enable(type2) : self.disable(type2) : enabled;
        };
        _this2.kill = function() {
          self.isThrowing = false;
          self.tween && self.tween.kill();
          self.disable();
          gsap5.set(triggers, {
            clearProps: "userSelect"
          });
          delete _lookup[target2._gsDragID];
          return self;
        };
        if (~type.indexOf("scroll")) {
          scrollProxy = _this2.scrollProxy = new ScrollProxy(target2, _extend({
            onKill: function onKill() {
              self.isPressed && onRelease(null);
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
      Draggable2.register = function register2(core) {
        gsap5 = core;
        _initCore7();
      };
      Draggable2.create = function create(targets, vars) {
        _coreInitted5 || _initCore7(true);
        return _toArray3(targets).map(function(target2) {
          return new Draggable2(target2, vars);
        });
      };
      Draggable2.get = function get(target2) {
        return _lookup[(_toArray3(target2)[0] || {})._gsDragID];
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
    _getGSAP7() && gsap5.registerPlugin(Draggable);
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
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
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
var _setDuration = function _setDuration2(animation, duration2, skipUncache, leavePlayhead) {
  var repeat = animation._repeat, dur = _roundPrecise(duration2) || 0, totalProgress = animation._tTime / animation._tDur;
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
  }, ease2 = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
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
      ease2 = ease2 && l < 0 ? _invertEase(ease2) : ease2;
    }
    l = (distances[i] - distances.min) / distances.max || 0;
    return _roundPrecise(distances.b + (ease2 ? ease2(l) : l) * distances.v) + distances.u;
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
  var range = max - min;
  return _isArray(min) ? _wrapArray(min, wrap2(0, min.length), max) : _conditionalReturn(value, function(value2) {
    return (range + (value2 - min) % range) % range + min;
  });
};
var wrapYoyo = function wrapYoyo2(min, max, value) {
  var range = max - min, total = range * 2;
  return _isArray(min) ? _wrapArray(min, wrapYoyo2(0, min.length - 1), max) : _conditionalReturn(value, function(value2) {
    value2 = (total + (value2 - min) % total) % total || 0;
    return min + (value2 > range ? total - value2 : value2);
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
  var result = "", colors3 = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
  if (!colors3) {
    return s;
  }
  colors3 = colors3.map(function(color2) {
    return (color2 = splitColor(color2, toHSL, 1)) && type + (toHSL ? color2[0] + "," + color2[1] + "%," + color2[2] + "%," + color2[3] : color2.join(",")) + ")";
  });
  if (orderMatchData) {
    d = _colorOrderData(s);
    c = orderMatchData.c;
    if (c.join(result) !== d.c.join(result)) {
      shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
      l = shell.length - 1;
      for (; i < l; i++) {
        result += shell[i] + (~c.indexOf(i) ? colors3.shift() || type + "0,0,0,0)" : (d.length ? d : colors3.length ? colors3 : orderMatchData).shift());
      }
    }
  }
  if (!shell) {
    shell = s.split(_colorExp);
    l = shell.length - 1;
    for (; i < l; i++) {
      result += shell[i] + colors3[i];
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
  var split = (name + "").split("("), ease2 = _easeMap[split[0]];
  return ease2 && split.length > 1 && ease2.config ? ease2.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease2;
};
var _invertEase = function _invertEase2(ease2) {
  return function(p) {
    return 1 - ease2(1 - p);
  };
};
var _propagateYoyoEase = function _propagateYoyoEase2(timeline2, isYoyo) {
  var child = timeline2._first, ease2;
  while (child) {
    if (child instanceof Timeline) {
      _propagateYoyoEase2(child, isYoyo);
    } else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
      if (child.timeline) {
        _propagateYoyoEase2(child.timeline, isYoyo);
      } else {
        ease2 = child._ease;
        child._ease = child._yEase;
        child._yEase = ease2;
        child._yoyo = isYoyo;
      }
    }
    child = child._next;
  }
};
var _parseEase = function _parseEase2(ease2, defaultEase) {
  return !ease2 ? defaultEase : (_isFunction(ease2) ? ease2 : _easeMap[ease2] || _configEaseFromString(ease2)) || defaultEase;
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
  var ease2 = {
    easeIn,
    easeOut,
    easeInOut
  }, lowercaseName;
  _forEachName(names, function(name) {
    _easeMap[name] = _globals[name] = ease2;
    _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
    for (var p in ease2) {
      _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease2[p];
    }
  });
  return ease2;
};
var _easeInOutFromOut = function _easeInOutFromOut2(easeOut) {
  return function(p) {
    return p < 0.5 ? (1 - easeOut(1 - p * 2)) / 2 : 0.5 + easeOut((p - 0.5) * 2) / 2;
  };
};
var _configElastic = function _configElastic2(type, amplitude, period) {
  var p1 = amplitude >= 1 ? amplitude : 1, p2 = (period || (type ? 0.3 : 0.45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut2(p) {
    return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
  }, ease2 = type === "out" ? easeOut : type === "in" ? function(p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);
  p2 = _2PI / p2;
  ease2.config = function(amplitude2, period2) {
    return _configElastic2(type, amplitude2, period2);
  };
  return ease2;
};
var _configBack = function _configBack2(type, overshoot) {
  if (overshoot === void 0) {
    overshoot = 1.70158;
  }
  var easeOut = function easeOut2(p) {
    return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
  }, ease2 = type === "out" ? easeOut : type === "in" ? function(p) {
    return 1 - easeOut(1 - p);
  } : _easeInOutFromOut(easeOut);
  ease2.config = function(overshoot2) {
    return _configBack2(type, overshoot2);
  };
  return ease2;
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
  _proto.duration = function duration2(value) {
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
    var self = this;
    return new Promise(function(resolve) {
      var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve2() {
        var _then = self.then;
        self.then = null;
        _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
        resolve(f);
        self.then = _then;
      };
      if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
        _resolve();
      } else {
        self._prom = _resolve;
      }
    });
  };
  _proto.kill = function kill2() {
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
  _proto2.staggerTo = function staggerTo(targets, duration2, vars, stagger, position2, onCompleteAll, onCompleteAllParams) {
    vars.duration = duration2;
    vars.stagger = vars.stagger || stagger;
    vars.onComplete = onCompleteAll;
    vars.onCompleteParams = onCompleteAllParams;
    vars.parent = this;
    new Tween(targets, vars, _parsePosition(this, position2));
    return this;
  };
  _proto2.staggerFrom = function staggerFrom(targets, duration2, vars, stagger, position2, onCompleteAll, onCompleteAllParams) {
    vars.runBackwards = 1;
    _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
    return this.staggerTo(targets, duration2, vars, stagger, position2, onCompleteAll, onCompleteAllParams);
  };
  _proto2.staggerFromTo = function staggerFromTo(targets, duration2, fromVars, toVars, stagger, position2, onCompleteAll, onCompleteAllParams) {
    toVars.startAt = fromVars;
    _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
    return this.staggerTo(targets, duration2, toVars, stagger, position2, onCompleteAll, onCompleteAllParams);
  };
  _proto2.render = function render4(totalTime, suppressEvents, force) {
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
          var duration2 = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
          tween._dur !== duration2 && _setDuration(tween, duration2, 0, 1).render(tween._time, true, true);
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
    var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
    if (arguments.length) {
      return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
    }
    if (self._dirty) {
      parent = self.parent;
      while (child) {
        prev = child._prev;
        child._dirty && child.totalDuration();
        start = child._start;
        if (start > prevStart && self._sort && child._ts && !self._lock) {
          self._lock = 1;
          _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
        } else {
          prevStart = start;
        }
        if (start < 0 && child._ts) {
          max -= start;
          if (!parent && !self._dp || parent && parent.smoothChildTiming) {
            self._start += start / self._ts;
            self._time -= start;
            self._tTime -= start;
          }
          self.shiftChildren(-start, false, -Infinity);
          prevStart = 0;
        }
        child._end > max && child._ts && (max = child._end);
        child = prev;
      }
      _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
      self._dirty = 0;
    }
    return self._tDur;
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
  var pt = new PropTween(this._pt, target2, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color2, endNum, chunk, startNum, hasRandom, a;
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
    if (color2) {
      color2 = (color2 + 1) % 5;
    } else if (chunk.substr(-5) === "rgba(") {
      color2 = 1;
    }
    if (endNum !== startNums[matchIndex++]) {
      startNum = parseFloat(startNums[matchIndex - 1]) || 0;
      pt._pt = {
        _next: pt._pt,
        p: chunk || matchIndex === 1 ? chunk : ",",
        s: startNum,
        c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
        m: color2 && color2 < 4 ? Math.round : 0
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
  var vars = tween.vars, ease2 = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes2 = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.vars.targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target2, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
  tl && (!keyframes2 || !ease2) && (ease2 = "none");
  tween._ease = _parseEase(ease2, _defaults.ease);
  tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease2 : yoyoEase, _defaults.ease)) : 0;
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
  var ease2 = obj.ease || easeEach || "power1.inOut", p, a;
  if (_isArray(obj)) {
    a = allProps[prop] || (allProps[prop] = []);
    obj.forEach(function(value, i) {
      return a.push({
        t: i / (obj.length - 1) * 100,
        v: value,
        e: ease2
      });
    });
  } else {
    for (p in obj) {
      a = allProps[p] || (allProps[p] = []);
      p === "ease" || a.push({
        t: parseFloat(prop),
        v: obj[p],
        e: ease2
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
    var _this3$vars = _this3.vars, duration2 = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes2 = _this3$vars.keyframes, defaults2 = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
    _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
    _this3._ptLookup = [];
    _this3._overwrite = overwrite;
    if (keyframes2 || stagger || _isFuncOrString(duration2) || _isFuncOrString(delay)) {
      vars = _this3.vars;
      tl = _this3.timeline = new Timeline({
        data: "nested",
        defaults: defaults2 || {},
        targets: parent && parent.data === "nested" ? parent.vars.targets : parsedTargets
      });
      tl.kill();
      tl.parent = tl._dp = _assertThisInitialized(_this3);
      tl._start = 0;
      if (stagger || _isFuncOrString(duration2) || _isFuncOrString(delay)) {
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
          copy.duration = +_parseFuncOrString(duration2, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
          copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
          if (!stagger && l === 1 && copy.delay) {
            _this3._delay = delay = copy.delay;
            _this3._start += delay;
            copy.delay = 0;
          }
          tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
          tl._ease = _easeMap.none;
        }
        tl.duration() ? duration2 = delay = 0 : _this3.timeline = 0;
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
                duration: (kf.t - (i ? a[i - 1].t : 0)) / 100 * duration2
              };
              v[p] = kf.v;
              tl.to(parsedTargets, v, time);
              time += v.duration;
            }
          }
          tl.duration() < duration2 && tl.to({}, {
            duration: duration2 - tl.duration()
          });
        }
      }
      duration2 || _this3.duration(duration2 = tl.duration());
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
    if (immediateRender || !duration2 && !keyframes2 && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
      _this3._tTime = -_tinyNum;
      _this3.render(Math.max(0, -delay) || 0);
    }
    scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
    return _this3;
  }
  var _proto3 = Tween2.prototype;
  _proto3.render = function render4(totalTime, suppressEvents, force) {
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
  _proto3.kill = function kill2(targets, vars) {
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
    var self = this, f = function f2() {
      var prev = _context, prevSelector = self.selector, result;
      prev && prev !== self && prev.data.push(self);
      scope && (self.selector = selector(scope));
      _context = self;
      result = func.apply(self, arguments);
      _isFunction(result) && self._r.push(result);
      _context = prev;
      self.selector = prevSelector;
      self.isReverted = false;
      return result;
    };
    self.last = f;
    return name === _isFunction ? f(self) : name ? self[name] = f : f;
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
  _proto5.kill = function kill2(revert, matchMedia2) {
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
  _proto6.kill = function kill2(revert) {
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
  registerEase: function registerEase(name, ease2) {
    _easeMap[name] = _parseEase(ease2);
  },
  parseEase: function parseEase(ease2, defaultEase) {
    return arguments.length ? _parseEase(ease2, defaultEase) : _easeMap;
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
    init: function init5(target2, vars, tween) {
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
  var pt = new PropTween(this._pt, target2.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color2, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
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
      if (color2) {
        color2 = (color2 + 1) % 5;
      } else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
        color2 = 1;
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
          m: color2 && color2 < 4 || prop === "zIndex" ? Math.round : 0
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
function animateAbout(gsap6, screenWidths) {
  const tl = gsap6.timeline({
    scrollTrigger: {
      scrub: true,
      trigger: ".profileContainer" /* container */,
      start: "top 50%",
      toggleActions: "play none none reverse"
    }
  });
  tl.to(
    ".bolt" /* bolt */,
    {
      y: screenWidths.phoneOnly ? 20 : 80,
      ease: "power1.inOut"
    },
    0
  );
  gsap6.to(".skull" /* skull */, {
    rotation: 360 * 2.98,
    scale: 1,
    ease: "power1.inOut",
    duration: 1,
    scrollTrigger: ".skull" /* skull */
  });
  tl.to(
    ".skull" /* skull */,
    {
      y: -140,
      ease: "power1.inOut"
    },
    0
  );
}

// app/utils/animations/albums.ts
function animateInspiration(gsap6, container, width, screenWidths, Draggable2) {
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
  const tl = gsap6.timeline({
    scrollTrigger: {
      trigger: ".albumList" /* container */
    }
  });
  gsap6.to(".album" /* album */, { x: "-200%" });
  tl.to(
    ".album" /* album */,
    {
      autoAlpha: 1,
      duration: 0.1
    },
    0
  ).staggerTo(
    ".album" /* album */,
    0.75,
    {
      ...getAlbumSectionSize(),
      ease: "power4.inOut"
    },
    -0.1
  );
  Draggable2.create(".album" /* album */, {
    type: "x,y",
    edgeResistance: 0.65,
    bounds: ".main",
    inertia: true
  });
}

// app/utils/animations/bgColor.ts
function animateBgColorOnScroll(gsap6, container) {
  const { offsetHeight: containerHeight } = container;
  const tl = gsap6.timeline({
    scrollTrigger: {
      scrub: true,
      end: () => `+=${containerHeight - 750}`
    }
  });
  tl.to(
    container,
    {
      duration: 1,
      backgroundColor: "#005C65" /* turquoise400 */,
      ease: "none"
    },
    0
  ).to(
    container,
    {
      duration: 1,
      backgroundColor: "#FFAD00" /* yellow100 */,
      ease: "none"
    },
    1
  ).to(
    container,
    {
      duration: 1,
      backgroundColor: "#FF0D00" /* red100 */,
      ease: "none"
    },
    2
  );
}

// app/utils/animations/contact.ts
var target = ".ghost";
function animateContact(gsap6) {
  const randomX = random3(10, 40);
  const randomY = random3(20, 60);
  const randomTime = random3(1, 3);
  const randomTime2 = random3(3, 5);
  const randomAngle = random3(5, 8);
  gsap6.set(target, {
    x: randomX(-1),
    y: randomX(1),
    rotation: randomAngle(-1)
  });
  moveX(target, 1);
  moveY(target, -1);
  rotate(target, 1);
  function rotate(target2, direction2) {
    gsap6.to(target2, {
      duration: randomTime2(),
      rotation: randomAngle(direction2),
      ease: "Sine.easeInOut",
      onComplete: rotate,
      onCompleteParams: [target2, direction2 * -1]
    });
  }
  function moveX(target2, direction2) {
    gsap6.to(target2, {
      duration: randomTime(),
      x: randomX(direction2),
      ease: "Sine.easeInOut",
      onComplete: moveX,
      onCompleteParams: [target2, direction2 * -1]
    });
  }
  function moveY(target2, direction2) {
    gsap6.to(target2, {
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

// app/utils/animations/mobileMenu.ts
var duration = 0.1;
var ease = "Sine.easeInOut";
var visible = { duration, autoAlpha: 1, ease };
var invisible = { duration, autoAlpha: 0, ease };
function animateMobileMenu(gsap6) {
  function openMenu() {
    gsap6.to(".mobileMenu" /* menu */, {
      ...visible,
      duration: 0.25,
      pointerEvents: "auto",
      x: "0%"
    });
    gsap6.to(".openMenuBtn" /* openBtn */, invisible);
    gsap6.to(".closeMenuBtn" /* closeBtn */, visible);
  }
  function closeMenu() {
    gsap6.to(".mobileMenu" /* menu */, {
      ...invisible,
      duration: 0.25,
      pointerEvents: "none",
      x: "100%"
    });
    gsap6.to(".openMenuBtn" /* openBtn */, visible);
    gsap6.to(".closeMenuBtn" /* closeBtn */, invisible);
  }
  return { openMenu, closeMenu };
}

// app/utils/animations/smoothScroll.ts
function animateSmoothScroll(gsap6) {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const section = link.getAttribute("href");
      const isMobile = link.getAttribute("data-type") === "mobile";
      if (isMobile) {
        const { closeMenu } = animateMobileMenu(gsap6);
        closeMenu();
      }
      gsap6.to(window, { duration: 1, scrollTo: { y: section, offsetY: -70 } });
    });
  });
}

// app/utils/animations/stack.ts
function animateStack(gsap6) {
  const tl = gsap6.timeline({
    scrollTrigger: {
      scrub: true,
      trigger: "#stack" /* container */,
      start: "top 70%"
    }
  });
  tl.to(
    ".skelly" /* skelly */,
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
  const ScrollToPlugin2 = (0, import_react6.useRef)(null);
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
    ScrollToPlugin2.current = (init_ScrollToPlugin(), __toCommonJS(ScrollToPlugin_exports)).ScrollToPlugin;
    Draggable2.current = (init_Draggable(), __toCommonJS(Draggable_exports)).Draggable;
    const plugins = [ScrollTrigger3, ScrollToPlugin2, Draggable2];
    plugins.forEach((plugin) => {
      if (plugin == null ? void 0 : plugin.current) {
        gsapWithCSS.registerPlugin(plugin.current);
      }
    });
  }, [isMounted]);
  const animations = {
    animateSmoothScroll: (0, import_react6.useCallback)(() => {
      if (isMounted) {
        animateSmoothScroll(gsapWithCSS);
      }
    }, [isMounted]),
    animateMobileMenu: (0, import_react6.useCallback)(() => {
      if (isMounted) {
        return animateMobileMenu(gsapWithCSS);
      }
    }, [isMounted]),
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
    animateInspiration: (0, import_react6.useCallback)(
      (container) => {
        if (isMounted && Draggable2.current) {
          animateInspiration(gsapWithCSS, container, width, screenWidths, Draggable2.current);
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
  updateColor(color2) {
    this.color = color2;
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
    const color2 = "transparent";
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
          color: color2,
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
    const color2 = returnPixelColor(imageData, Math.floor(this.dimensions.width), {
      x: Math.floor(particle.position.x),
      y: Math.floor(particle.position.y)
    });
    particle.updateColor(color2);
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

// app/utils/hooks/useOnPageLoad.ts
var import_react9 = __toESM(require_react());
function useOnPageLoad() {
  const [loaded, setLoaded] = (0, import_react9.useState)(false);
  (0, import_react9.useEffect)(() => {
    const onPageLoad = () => {
      setLoaded(true);
    };
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);
  return loaded;
}

// app/ui/components/About/index.tsx
var import_react14 = __toESM(require_react());

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
  theme: { colors }
} = config;
var bgColor = getStylePropsFromToken(colors);
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
  z60: "60",
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
var textAlign = {
  left: "left",
  center: "center",
  right: "right",
  justify: "justify",
  start: "start",
  end: "end"
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
  textAlign,
  overflow,
  overflowX,
  overflowY,
  visibility,
  transform: "",
  transition: "",
  pointerEvents
};

// app/utils/primitives/index.ts
var breakpointKeys = Object.keys(breakpoints);
var remStyleProps = [
  "margin",
  "padding",
  "width",
  "height",
  "gap",
  "top",
  "left",
  "bottom",
  "right"
];
function splitProps(props, stylePropsKeys) {
  const styleProps7 = {};
  const restProps = {};
  Object.entries(props).forEach(([key, value]) => {
    if (stylePropsKeys.includes(key))
      styleProps7[key] = value;
    else
      restProps[key] = value;
  });
  return [styleProps7, restProps];
}
function getMediaStyles(stylesWithBreakpointsProps, stylesWithBreakpoints, styleAliases6) {
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
    const key = styleAliases6 ? styleAliases6[styleKey] || styleKey : styleKey;
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
function getformattedProps({ props, styleProps: styleProps7, styleAliases: styleAliases6 }) {
  const stylePropsKeys = [
    ...styleProps7 ? Object.keys(styleProps7) : [],
    ...Object.keys(commonStyleProps)
  ];
  const [componentStyleProps, restProps] = splitProps(props, stylePropsKeys);
  const mediaStyles = getMediaStyles(
    componentStyleProps,
    { ...styleProps7, ...commonStyleProps },
    styleAliases6
  );
  return { mediaStyles, restProps };
}

// app/ui/primitives/dataDisplay/List/styles.tsx
var StyledList = styled("ul", {
  margin: 0,
  padding: 0
});
var StyledListItem = styled("li", {
  margin: 0,
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
var import_react10 = __toESM(require_react());

// app/ui/primitives/form/Button/styles.tsx
var StyledButton = styled("button", {
  fontSize: "$sm",
  cursor: "pointer",
  border: 0,
  background: "none",
  transition: "0.15s all ease-in-out"
});

// app/ui/primitives/form/Button/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Button = import_react10.default.forwardRef(
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

// app/ui/primitives/layout/Container/index.tsx
var import_react11 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Container = import_react11.default.forwardRef(
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
var styleAliases3 = {
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
var styleProps3 = {
  align,
  autoColumns,
  autoFlow,
  autoRows,
  templateColumns,
  templateRows,
  ...customStyleProps2
};
var StyledDiv3 = styled("div", {
  display: "grid"
});

// app/ui/primitives/layout/Grid/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Grid = ({ children, css, ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({ props, styleProps: styleProps3, styleAliases: styleAliases3 });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledDiv3, {
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
var styleAliases4 = {
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
var styleProps4 = {
  direction,
  justify,
  align: align2,
  wrap: wrap3,
  ...customStyleProps3
};
var variants3 = {
  variant: {
    list: {
      display: "block",
      "@xl": {
        display: "flex"
      }
    }
  }
};
var StyledDiv4 = styled("div", {
  display: "flex",
  variants: variants3
});

// app/ui/primitives/layout/Flex/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Flex = ({ children, variant, css, ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({
    props,
    styleProps: styleProps4,
    styleAliases: styleAliases4
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledDiv4, {
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
var import_react12 = __toESM(require_react());

// app/ui/primitives/media/Img/styles.tsx
var styleAliases5 = {
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
var styleProps5 = {
  align: align3,
  fit,
  ...customStyleProps4
};
var StyledImg = styled("img");

// app/ui/primitives/media/Img/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Img = import_react12.default.forwardRef(
  ({ src: fullSrc, thumbSrc, alt, loading = "lazy", css, ...props }, ref2) => {
    const { mediaStyles, restProps } = getformattedProps({
      props: { ...props },
      styleProps: styleProps5,
      styleAliases: styleAliases5
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
var variants4 = {
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
  variants: variants4
});

// app/ui/primitives/navigation/Link/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var externalLinkProps = {
  rel: "noopener noreferrer nofollow",
  target: "_blank"
};
var Link = ({ children, css, isExternal = false, variant, ...props }) => {
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
  theme: { colors: colors2, fontSizes, fonts }
} = config;
var color = getStylePropsFromToken(colors2);
var fontFamily = getStylePropsFromToken(fonts);
var fontSize = getStylePropsFromToken(fontSizes);
var fontWeight = {
  normal: "400",
  bold: "700"
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
var styleProps6 = {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  textTransform,
  lineHeight
};
var variants5 = {
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
  variants: variants5
});

// app/ui/primitives/typography/Text/index.tsx
var import_react13 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Text = import_react13.default.forwardRef(({ as = "span", css, variant, children, ...props }, forwardedRef) => {
  const { mediaStyles, restProps } = getformattedProps({ props, styleProps: styleProps6 });
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
      marginBottom: { xs: 20, lg: 0 },
      css: { maxWidth: `${toRem(60)}` }
    }, void 0, false, {
      fileName: "app/ui/components/About/FirstRow.tsx",
      lineNumber: 9,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
      as: "p",
      gridColumn: { xs: "12", lg: "3" },
      paddingBottom: { xs: 80, lg: 20, xl: 0 },
      marginY: 18,
      fontSize: "lg",
      lineHeight: "relaxed",
      children: "Hi, I'm Elena Bravo, a multidisciplinary front-end developer and digital designer based in Madrid, Spain. With over 7 years of experience working with all types of clients and projects, I thrive on bringing both the technical and visual aspects of digital products to life."
    }, void 0, false, {
      fileName: "app/ui/components/About/FirstRow.tsx",
      lineNumber: 20,
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
              lineNumber: 51,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/About/FirstRow.tsx",
            lineNumber: 50,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/About/FirstRow.tsx",
          lineNumber: 42,
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
            lineNumber: 64,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/About/FirstRow.tsx",
          lineNumber: 54,
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
          lineNumber: 74,
          columnNumber: 7
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/components/About/FirstRow.tsx",
      lineNumber: 32,
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
  (0, import_react14.useEffect)(() => {
    animateAbout2();
    createImageInteraction2();
  }, [animateAbout2, createImageInteraction2]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    as: "section",
    id: "about",
    paddingTop: { xs: 46, lg: 86 },
    paddingBottom: 86,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
      variant: "wrap",
      height: "100%",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirstRow_default, {}, void 0, false, {
          fileName: "app/ui/components/About/index.tsx",
          lineNumber: 19,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SecondRow_default, {}, void 0, false, {
          fileName: "app/ui/components/About/index.tsx",
          lineNumber: 20,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThirdRow_default, {}, void 0, false, {
          fileName: "app/ui/components/About/index.tsx",
          lineNumber: 21,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/components/About/index.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/About/index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
};

// app/ui/components/Contact/index.tsx
var import_react15 = __toESM(require_react());

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
        width: toRem(128),
        css: {
          maxWidth: toRem(128)
        }
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
                        lineNumber: 52,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/ui/components/Contact/Email.tsx",
                      lineNumber: 46,
                      columnNumber: 15
                    }, this)
                  }, void 0, false, {
                    fileName: "app/ui/components/Contact/Email.tsx",
                    lineNumber: 37,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
                    fontSize: { xs: "3xl", sm: "5xl" },
                    lineHeight: "none",
                    children: "hey@"
                  }, void 0, false, {
                    fileName: "app/ui/components/Contact/Email.tsx",
                    lineNumber: 55,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/ui/components/Contact/Email.tsx",
                lineNumber: 36,
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
                        lineNumber: 75,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/ui/components/Contact/Email.tsx",
                      lineNumber: 69,
                      columnNumber: 15
                    }, this)
                  }, void 0, false, {
                    fileName: "app/ui/components/Contact/Email.tsx",
                    lineNumber: 60,
                    columnNumber: 13
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
                    fontSize: { xs: "3xl", sm: "5xl" },
                    lineHeight: "none",
                    children: "elenabravo.com"
                  }, void 0, false, {
                    fileName: "app/ui/components/Contact/Email.tsx",
                    lineNumber: 78,
                    columnNumber: 13
                  }, this)
                ]
              }, void 0, true, {
                fileName: "app/ui/components/Contact/Email.tsx",
                lineNumber: 59,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/ui/components/Contact/Email.tsx",
            lineNumber: 31,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/Contact/Email.tsx",
          lineNumber: 24,
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
          lineNumber: 84,
          columnNumber: 7
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/components/Contact/Email.tsx",
      lineNumber: 23,
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
          isExternal: true,
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
  (0, import_react15.useEffect)(() => {
    animateContact2();
  }, [animateContact2]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    as: "section",
    id: "#contact",
    paddingTop: { xs: 26, lg: 0 },
    paddingBottom: { xs: 80, sm: 40, lg: 100 },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
      variant: "wrap",
      maxHeight: 708,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Email_default, {}, void 0, false, {
          fileName: "app/ui/components/Contact/index.tsx",
          lineNumber: 22,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Social_default, {}, void 0, false, {
          fileName: "app/ui/components/Contact/index.tsx",
          lineNumber: 23,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/components/Contact/index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Contact/index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
};

// app/ui/components/Inspiration/index.tsx
var import_react16 = __toESM(require_react());

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
var Inspiration = ({ albums, animateInspiration: animateInspiration2 }) => {
  const containerRef = (0, import_react16.useRef)(null);
  (0, import_react16.useEffect)(() => {
    if (containerRef == null ? void 0 : containerRef.current) {
      animateInspiration2(containerRef == null ? void 0 : containerRef.current);
    }
  }, [animateInspiration2]);
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
              lineNumber: 33,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/Inspiration/index.tsx",
            lineNumber: 32,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
            className: "albumList",
            position: "relative",
            children: albums.map((data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(album_default, {
              ...data
            }, data.id, false, {
              fileName: "app/ui/components/Inspiration/index.tsx",
              lineNumber: 43,
              columnNumber: 15
            }, this))
          }, void 0, false, {
            fileName: "app/ui/components/Inspiration/index.tsx",
            lineNumber: 41,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/ui/components/Inspiration/index.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/ui/components/Inspiration/index.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Inspiration/index.tsx",
    lineNumber: 23,
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
  zIndex: "z40",
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
        lineNumber: 20,
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
        lineNumber: 30,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/components/Intro/CTA.tsx",
    lineNumber: 19,
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
  maxWidth: { sm: "md" },
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
  bottom: { xs: 0, lg: 50 },
  width: "100%",
  paddingBottom: 86,
  zIndex: "z40",
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
        lineNumber: 14,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/ui/components/Intro/ScrollDown.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Intro/ScrollDown.tsx",
    lineNumber: 12,
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
var import_react17 = __toESM(require_react());

// app/assets/img/logo.svg
var logo_default = "/build/_assets/logo-LEM2OEFN.svg";

// app/ui/components/Layout/Header.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Header = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    as: "header",
    position: { xs: "absolute", lg: "fixed" },
    top: { xs: 40, lg: 86 },
    left: { xs: 20, lg: 40, "2xl": `calc(((100vw - ${toRem(1280)})/2) - ${toRem(28)})` },
    zIndex: "z40",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
      src: logo_default,
      alt: "Elena Bravo logo",
      css: {
        "@sm": {
          width: toRem(150)
        },
        width: toRem(120)
      },
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

// app/assets/img/open-btn.svg
var open_btn_default = "/build/_assets/open-btn-5OTJKQG3.svg";

// app/assets/img/close-btn.svg
var close_btn_default = "/build/_assets/close-btn-AEHTDASW.svg";

// app/ui/components/Layout/Menu/Mobile/Buttons.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MenuButton = ({ openMenu, closeMenu }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
      type: "button",
      "aria-label": "open menu",
      className: "openMenuBtn",
      onClick: openMenu,
      position: "absolute",
      top: "0",
      right: "0",
      width: 107,
      height: 96,
      padding: 48,
      opacity: "100",
      visibility: "visible",
      pointerEvents: "auto",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
          src: open_btn_default,
          alt: "open menu button",
          position: "absolute",
          top: 37,
          left: "50%",
          width: toRem(48),
          height: toRem(24),
          transform: "translateX(-50%)"
        }, void 0, false, {
          fileName: "app/ui/components/Layout/Menu/Mobile/Buttons.tsx",
          lineNumber: 28,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
          as: "strong",
          position: "absolute",
          left: "0",
          bottom: 3,
          width: "100%",
          marginBottom: 16,
          textTransform: "uppercase",
          fontSize: "xs",
          color: "white",
          textAlign: "center",
          transform: "translateY(20%)",
          children: "Menu"
        }, void 0, false, {
          fileName: "app/ui/components/Layout/Menu/Mobile/Buttons.tsx",
          lineNumber: 38,
          columnNumber: 7
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/components/Layout/Menu/Mobile/Buttons.tsx",
      lineNumber: 13,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
      type: "button",
      "aria-label": "close menu",
      className: "closeMenuBtn",
      onClick: closeMenu,
      position: "absolute",
      top: "0",
      right: "0",
      width: 107,
      height: 96,
      padding: 48,
      opacity: "0",
      visibility: "invisible",
      pointerEvents: "auto",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
          src: close_btn_default,
          alt: "close menu button",
          position: "absolute",
          top: 37,
          left: "50%",
          width: toRem(40),
          height: toRem(40),
          transform: "translateY(-30%) translateX(-50%)"
        }, void 0, false, {
          fileName: "app/ui/components/Layout/Menu/Mobile/Buttons.tsx",
          lineNumber: 69,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
          as: "strong",
          position: "absolute",
          left: "0",
          bottom: 3,
          width: "100%",
          marginBottom: 16,
          textTransform: "uppercase",
          fontSize: "xs",
          color: "white",
          textAlign: "center",
          transform: "translateY(20%)",
          children: "Close"
        }, void 0, false, {
          fileName: "app/ui/components/Layout/Menu/Mobile/Buttons.tsx",
          lineNumber: 79,
          columnNumber: 7
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/components/Layout/Menu/Mobile/Buttons.tsx",
      lineNumber: 54,
      columnNumber: 5
    }, this)
  ]
}, void 0, true, {
  fileName: "app/ui/components/Layout/Menu/Mobile/Buttons.tsx",
  lineNumber: 12,
  columnNumber: 3
}, this);
var Buttons_default = MenuButton;

// app/assets/img/grungepattern.png
var grungepattern_default = "/build/_assets/grungepattern-OHO2S5ME.png";

// app/ui/components/Layout/Menu/Mobile/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var MobileMenu = ({ menuItems: menuItems2, networks, animateMobileMenu: animateMobileMenu2 }) => {
  const { openMenu, closeMenu } = animateMobileMenu2() || {};
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
        className: "mobileMenu",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        opacity: "0",
        pointerEvents: "none",
        transform: "translateX(100%)",
        visibility: "invisible",
        background: `$turquoise-400 url("${grungepattern_default}")`,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
          direction: "col",
          justify: "between",
          align: "center",
          width: "100%",
          height: "100%",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
              variant: "wrap",
              transform: "translateY(108%)",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
                src: logo_default,
                alt: "Elena Bravo logo",
                css: {
                  "@sm": {
                    width: toRem(150)
                  },
                  width: toRem(120)
                },
                pointerEvents: "none"
              }, void 0, false, {
                fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
                lineNumber: 49,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
              lineNumber: 48,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
              as: "nav",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, {
                children: menuItems2.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListItem, {
                  textAlign: "center",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                    href: `#${item}`,
                    "data-type": "mobile",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
                      textTransform: "uppercase",
                      fontSize: "3xl",
                      lineHeight: "tight",
                      children: item
                    }, void 0, false, {
                      fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
                      lineNumber: 66,
                      columnNumber: 21
                    }, this)
                  }, void 0, false, {
                    fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
                    lineNumber: 65,
                    columnNumber: 19
                  }, this)
                }, item, false, {
                  fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
                  lineNumber: 64,
                  columnNumber: 17
                }, this))
              }, void 0, false, {
                fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
                lineNumber: 62,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
              lineNumber: 61,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
              variant: "wrap",
              width: "100%",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
                justify: "center",
                gap: 16,
                paddingBottom: 40,
                children: networks.map(({ name, href }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                  href,
                  isExternal: true,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
                    children: name
                  }, void 0, false, {
                    fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
                    lineNumber: 78,
                    columnNumber: 19
                  }, this)
                }, name, false, {
                  fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
                  lineNumber: 77,
                  columnNumber: 17
                }, this))
              }, void 0, false, {
                fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
                lineNumber: 75,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
              lineNumber: 74,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
          lineNumber: 47,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
        lineNumber: 34,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Buttons_default, {
        openMenu,
        closeMenu
      }, void 0, false, {
        fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
        lineNumber: 85,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
};
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
var Menu = ({ animateMobileMenu: animateMobileMenu2 }) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
  children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Mobile_default, {
      menuItems,
      networks: networks_default,
      animateMobileMenu: animateMobileMenu2
    }, void 0, false, {
      fileName: "app/ui/components/Layout/Menu/index.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Desktop_default, {
      menuItems
    }, void 0, false, {
      fileName: "app/ui/components/Layout/Menu/index.tsx",
      lineNumber: 13,
      columnNumber: 5
    }, this)
  ]
}, void 0, true, {
  fileName: "app/ui/components/Layout/Menu/index.tsx",
  lineNumber: 11,
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
      display: { xs: "hidden", sm: "flex" },
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
            lineNumber: 25,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
            children: "Designed & coded with \u{1F525} by Elena Bravo while listening to"
          }, void 0, false, {
            fileName: "app/ui/components/Layout/Footer.tsx",
            lineNumber: 26,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
            href: "https://spoti.fi/3JVSAsH",
            isExternal: true,
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
              lineNumber: 28,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/Layout/Footer.tsx",
            lineNumber: 27,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/ui/components/Layout/Footer.tsx",
        lineNumber: 24,
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

// app/ui/components/Layout/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Layout = ({
  children,
  animateBgColorOnScroll: animateBgColorOnScroll2,
  animateSmoothScroll: animateSmoothScroll2,
  animateMobileMenu: animateMobileMenu2
}) => {
  const containerRef = (0, import_react17.useRef)(null);
  animateSmoothScroll2();
  (0, import_react17.useEffect)(() => {
    if (containerRef == null ? void 0 : containerRef.current) {
      animateBgColorOnScroll2(containerRef.current);
    }
  }, [animateBgColorOnScroll2]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    position: "relative",
    bgColor: "turquoise-200",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header_default, {}, void 0, false, {
        fileName: "app/ui/components/Layout/index.tsx",
        lineNumber: 33,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu_default, {
        animateMobileMenu: animateMobileMenu2
      }, void 0, false, {
        fileName: "app/ui/components/Layout/index.tsx",
        lineNumber: 34,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
        width: "100vw",
        minHeight: { lg: "screen" },
        overflow: "auto",
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
            lineNumber: 37,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/Layout/index.tsx",
          lineNumber: 36,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/ui/components/Layout/index.tsx",
        lineNumber: 35,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer_default, {}, void 0, false, {
        fileName: "app/ui/components/Layout/index.tsx",
        lineNumber: 47,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/components/Layout/index.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
};

// app/ui/components/Preloader/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Preloader = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
  className: "content",
  position: "relative",
  zIndex: "z60",
  width: "100vw",
  height: "100vh",
  opacity: "100",
  visibility: "visible",
  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
    direction: "col",
    justify: "center",
    width: "100%",
    height: "100%",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
      variant: "wrap",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
        direction: "col",
        justify: "center",
        align: "center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
            x: "0",
            y: "0",
            version: "1.1",
            viewBox: "0 0 82.7 98.1",
            width: 130,
            fill: "#fff",
            style: { animation: "Rotate 1.5s infinite" },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
              d: "M82.6,45.6c-0.1,0.6-0.1,1-0.4,1.3c0,0.6,0,1-0.1,1.6c0,0.4-0.3,0.9-0.3,1.5l-0.1,0.3v0.3l-0.1,0.9L81.1,52	L81,52.5c0,0,0,0.1-0.3,0.4c-0.1,0.3-0.3,0.7-0.3,1.2l-0.3,0.4L79.9,55l-0.4,0.6l-0.1,0.6c-0.3,0.1-0.3,0.4-0.3,0.4l-0.1,0.3	c-0.4,0.4-0.6,1-1,1.5c-0.4,0.6-0.6,1-1,1.5c-0.1,0.1-0.1,0.1-0.4,0.4l-0.1,0.3l-0.6,0.7c-0.3,0.1-0.4,0.3-0.7,0.6l-0.6,0.6	c-0.7,0.9-1.6,1.6-2.6,2.2c-0.4,0.4-0.7,0.9-1.5,1.3l-0.1,0.1l-0.4,0.1l-0.7,0.4l-0.6,0.6c-0.4,0-0.7,0.3-0.9,0.4	c-0.4,0.3-1,0.4-1.5,0.9c-0.6,0.1-1,0.3-1.6,0.7c-0.4,0.3-0.7,0.3-1.2,0.4c0,0.1,0,0.1,0,0.4c0.6-0.3,1,1,1.6,0.7c0,0.7,0,1.3,0,1.8	c0,0.3,0.1,0.6,0.4,0.9c0.3,1.8,0.7,3.4,1.3,4.7c-0.1,0-0.1,0.3-0.1,0.4c0.1,0,0.1,0,0.1,0c0,0.4,0,0.6,0,0.9c0,0.1,0.3,0.1,0.3,0.1	c0,0.4,0.1,0.9,0.1,1.5c0,0.1-0.1,0.6-0.1,0.9H67c0,0.3-0.4,0.6-0.1,0.9H67c0.3,1.3,0.3,2.5,0,4c0,0-0.1,0.4-0.4,0.6	c0,0.1-0.1,0.1-0.1,0.4v-0.4c0,0.1,0,0.1,0,0.4c-0.1,0-0.1,0-0.1,0v-0.4c0,0.1,0,0.4,0,0.4c-0.3-0.3,0-0.4,0-0.6	c-0.4,0.6-0.7,0.1-0.9-0.4v0.4c-0.4-0.3,0-0.6,0-0.9c-0.1,0,0,0.9-0.4,0.9c0-0.3,0-0.4,0-0.6c-0.3-0.3,0,0.3-0.1,0.3	c0-0.1,0-0.1,0-0.3c-0.1,0.1-0.6,0-0.6,0.1c-0.6,0.4-0.9,0.7-1.3,0c0,0,0-0.4,0-0.6c-0.1,0-0.1,0.1-0.3,0.4	c-0.3-0.3-0.3-0.4-0.4-0.7h-0.3c-1.6,0.3-2.2,0.9-2.4,1.5c0,0-1,0-1.6,0c0.3,0.6-2.1,0.9-1.9,1.5c-1,0-2.2-0.3-3.2-0.3	c-0.6,0-1.5,0.3-2.1,0.3c-1.6,0.1-3.2,0.4-4.9,0.4c-1.5,0.1-3.1,0.1-4.6,0.3c-0.1,0-0.4-0.1-0.9-0.1v0.1c-0.1,0-0.1,0-0.3,0	c-0.7,0-1-0.1-1.8-0.1c0,0.1,0,0.1,0,0.1c-0.9,0-1.9,0-2.9,0c-0.7,0-1-0.1-1.8-0.1c-0.6,0.1-1.2-0.1-1.8-0.1	c-0.1,0.1-0.1,0.1-0.1,0.3c-1.3-0.1-2.5-0.1-4-0.1c-0.6,0-1.2-0.1-1.8-0.1h-2.1c-0.3,0-0.9-0.4-1.5-0.7c-0.1,0-0.1-0.1-0.4-0.1h0.4	c0,0-0.1,0-0.4-0.1c-0.1,0-0.1,0-0.1,0h0.7c-0.1,0-0.6,0-0.7,0c0-0.3,0-0.3,0-0.3c0.4,0,1,0.3,1.5,0.3c-1.3-0.4-0.7-0.7,0.7-0.9	c-0.1,0-0.6,0-0.6,0c0-0.4,1,0,1.2,0c0.3-0.1-1.2,0-1.3-0.4c0.3,0,1,0,1.3,0c0.3-0.1-1.2,0-1-0.1c0.4,0,0.7,0,1,0	c-0.6-0.1,0-0.4-0.3-0.6c-0.7-0.4-1.5-0.9,0-1c0-0.3,0.1-0.3,0.3-0.3c-0.3-0.3-0.7-0.6-1.3-0.7c-0.3,0,0-0.4,0-0.6	c-0.7,0-0.9-0.9-1.8-0.9c0.3-0.4,0.4-1,0.3-1.5c0-0.1-0.3-0.3-0.3-0.7c-0.1-0.6-0.3-1.3-0.6-1.9c-0.1-0.6-0.1-1.2-0.4-1.8v-0.3h-0.1	v-0.1c0-0.1,0.1-0.4,0-0.6c-0.1-0.4-0.1-0.9-0.1-1.3c0-0.1,0.1-0.3,0.1-0.6h-0.1c0-0.1,0.3-0.4,0.1-0.6h-0.1c0-0.4-0.3-1,0-1.5v-0.3	v-0.3c-0.4-0.1-0.6-0.1-1-0.4c-1.5-0.6-2.9-1.2-4-1.8c-0.6-0.4-0.6-0.3-0.3-0.3c-2.9-1.3-5.4-3.4-7.6-5.6c-2.1-2.5-3.8-5.1-4.9-8.1	C1.9,53.7,1.1,52,1,50.4c-0.4-1.6-0.6-3.2-0.6-4.9c-0.3,0-0.3-0.3-0.3-0.3c-0.1-2.1-0.1-3.8,0-5.7c0-1.8,0.4-3.4,0.7-5.4	c0.1-1.3-0.3-0.4-0.3-0.7L0.8,32l0.3-1.3V30l0.3-0.6l0.4-1.5l0.3-1.5l0.3-0.6L2.6,25l0.6-1.2l0.4-1.5l0.1-0.6l0.4-0.6l0.6-1.5	l0.7-1.2c0.1-0.1,0.1-0.4,0.3-0.6L6.3,17c0.9-1.6,2.1-3.2,3.2-4.7c1.5-1.6,2.9-3.1,4.4-4.3c1.6-1.2,3.2-2.2,4.9-3.2	c1.6-1,3.5-1.9,5.3-2.6c1.9-0.6,3.7-1.3,5.6-1.6c2.1-0.4,5.4-0.9,9.1-0.3c0.4,0,0.9,0.3,1.3,0.4c0.1,0,0.3,0,0.6,0	c0.1,0.1,0.4,0.1,0.6,0.1c-1-0.1-2.1-0.1-3.1-0.3c1.2,0.1,2.5,0.3,3.5,0.6c0.1,0.1,0.6,0.1,0.7,0.4c-1.3-0.4-2.6-0.7-3.8-0.9	c0,0,0.1,0,0.4,0.1c0.3,0,0.7,0,1.2,0.3c0.4,0,1,0,1.5,0.1c0.4,0,0.7,0.3,1,0.3c0,0,0,0,0,0.1c-1.3-0.4-2.9-0.9-4.4-1	c-1.6,0-2.9,0-4.3,0c1.9,0,2.9,0.1,3.4,0.1c0.6,0.3,0.3,0.3-0.3,0.3C36,1.3,33,1.3,29.4,2.3c0.3,0,0.6-0.1,1-0.1	c0.4-0.3,0.9-0.3,1.3-0.3c0.6-0.1,1.2-0.1,1.2-0.1s-0.6,0.1-1,0.1c-0.4,0.3-0.9,0.3-1,0.3c-0.4,0.1-0.9,0.1-1.2,0.1	c-1.6,0.4-3.4,0.9-4,1.2c-0.1,0.3,1.6-0.3,3.5-1c1.8-0.3,4.1-0.6,4.4-0.6c-2.4,0.3-4.9,1-7.1,1.6c-0.4,0.3-0.3,0.3,0.1,0.3	c0.4-0.3,1.3-0.4,2.1-0.6c1.6-0.7,3.5-0.9,3.2-0.9c-1,0.1-2.1,0.4-2.8,0.6c-0.9,0.3-1.9,0.6-2.9,1C28,3.5,28,3.5,28,3.8	c0,0,0,0.1,1,0c1.3-0.3,3.2-0.3,3.7-0.3c0.1,0.3,0.1,0.3-0.4,0.4c-0.6,0.3-1.6,0.4-3.2,1c-0.7,0.3-1.9,0.6-3.4,1.3	c-1.2,0.3-2.8,1.2-4.3,1.9c1-0.6,2.5-1,3.8-1.6c-1.3,0.9-2.8,1.6-4.3,2.5c-1.3,1-2.6,2.1-3.8,3.1c-1.5,1.2-2.6,2.6-4,4.3	C12,18.1,11,20,10,22c-2.1,4-3.2,8.5-3.8,12.8c-0.3,0.4-0.3,0.9-0.3,1.5c-0.1,1.8-0.6,4.6-0.3,7.8c0.1,3.1,0.7,6.5,2.4,10	c1.6,3.5,4.3,6.8,7.8,9.3c1.9,1.2,3.7,2.2,5.9,2.9c2.1,0.9,4.4,1.5,6.5,2.1c2.2,0.4,4.7,0.9,6.9,1c2.2,0.3,4.3,0.3,6.5,0.3	c2.4,0,4.4-0.3,6.3-0.4c1.9-0.3,4-0.6,5.6-1c3.7-0.9,6.6-1.9,8.8-2.9c0.6-0.3,1.2-0.6,1.6-0.7c0.6-0.1,1-0.6,1.5-0.9	c0.7-0.3,1.3-0.7,1.8-1c5.6-3.4,9.7-8.5,11-14.4c0.6-2.9,0.9-6,0.6-9.3v-0.6c0-0.3,0-0.4,0-0.6l-0.1-1l-0.1-1.3L78,34.2	c-0.3-1.5-0.7-2.8-1.3-4.3c-1-3.1-2.8-5.7-4.4-8.4c-1-1.5-2.1-2.6-3.1-4c-0.3-0.6-0.9-1.2-1.6-1.8c-0.3-0.6-1-1-1.6-1.6	c-1.2-1.3-2.2-2.4-3.7-3.1c-1.2-1-2.4-2.1-3.8-2.6c-2.6-1.6-5.7-2.9-8.7-3.2c0.4,0,0.4,0,0.3,0C49.7,5,49.2,5,48.6,4.8	c-0.1,0-0.4,0-0.6,0c-0.3,0-0.4-0.3-0.6-0.3c-0.4,0-0.4,0,0.1,0c0-0.1,0.1-0.1,0.4-0.1c0.4,0.1,0.6,0,1,0.1c0.6,0,1.5,0.3,2.4,0.4	c1.9,0.4,3.8,1.3,5.4,1.9c2.1,0.7,3.7,1.8,4.9,2.6c1.5,0.7,2.5,1.3,3.2,1.8c1.6,1,2.5,1.5,2.9,1.6c0.1,0,0.4,0.3,0.7,0.7	c0.3,0.1,0.6,0.3,0.9,0.7c0.1,0.3,0.6,0.4,0.7,0.9c1.3,1.3,2.8,3.1,3.7,4.4c-0.6-1.2,1.3,0.9,2.9,3.1c1.6,2.5,3.1,5.1,3.2,4.7	c0.4,1.3,1,2.6,1.5,4.1c0.4,1.6,0.6,3.1,0.9,4.7C82.7,39.5,82.7,42.8,82.6,45.6z M15.3,43.1c0.3-0.4,0.3-0.9,0.3-1.5	c0-0.1-0.3-0.1-0.3-0.1c0.3-1.9,1-3.7,2.1-5.6c0.6-0.7,1.5-1.5,2.4-2.1c0.6-0.6,1.6-1.2,2.4-1.6c0.4-0.1,1.3-0.1,2.4-0.1	c0.1,0,0.3,0,0.6,0c-0.3,0.1-0.4,0.1-0.6,0.1c0.1,0,0.3,0,0.6,0c0.1,0,0.1,0,0.1,0c-0.1,0-0.4,0.3-0.7,0.3c0.1,0,0.7-0.3,0.9-0.3	c-0.6,0.3-1.3,0.4-1.9,0.6c1-0.1,1,0,0.7,0.3c-0.1,0.1-0.6,0.3-1.5,0.7c0.3,0,0.3-0.1,0.4-0.1c0.3,0,0.4,0,0.4,0	c0,0.1-0.4,0.1-0.6,0.4c-0.4,0-0.9,0.1-1,0.1c0.1,0.1,0.4,0,0.7-0.1c0.4-0.3,0.9-0.3,1-0.3c-0.3,0.3-1,0.6-1.3,0.9	c0,0.1,0.1,0,0.6-0.3c0.1-0.1,0.6-0.3,0.6-0.1c-0.4,0.1-0.9,0.1-1.2,0.6c0.7-0.1,0.3,0.3,0.7,0.3c0.4,0.1,0.9,0.1,1,0.1	c0.3,0.1,0,0.4-0.6,0.9c0,0,0,0,0,0.1c1.2,0,1.8-0.1,2.2-0.4c0-0.1,0.3,0,0.6,0.3c0.3,0,0.3,0.1,0.4,0.1c0.3,0.1,0.4,0.1,0.4,0.4	c0-0.3,0.1-0.3,0.4-0.3c0.1,0,0.6,0,0.7,0.3c0.7,0.1,1.3,0.6,1.5,0.1c0.4,0.4,0.9,1,1.2,1.9c0.3,0.6,0.4,1.2,0.7,2.1	c0.3,0.7,0.3,1.6,0.3,2.6c0,1.2-0.3,2.2-1,3.2c-0.3,1-1.2,1.8-1.8,2.6c-0.1,0.1-0.4,0.4-0.4,0.4c-0.1,0.1-0.4,0.4-0.6,0.6	c-0.4,0.4-0.9,0.7-1.2,1c-0.7,0.4-1,0.6-1.8,0.7c-0.6,0.4-1.2,0.7-1.8,0.7c-0.4,0-1,0-1.5-0.3l-0.1,0.3c-0.3,0-0.4-0.3-0.6-0.3	c-1.3-0.1-2.1-1-2.6-1.5c-0.3-0.1-0.3,0-0.3,0c-0.6-0.6-1.2-1.2-1.6-1.9c-0.4-0.9-0.9-1.5-1-2.4c-0.1-0.7-0.1-1.6-0.1-2.4h-0.3	C15.3,43.8,15.3,43.5,15.3,43.1z M20.8,43.8c0,0.4,0,1,0.1,1.8c0.3,0.6,0.6,1.2,0.9,1.6c0.1,0.1,0.4,0.1,0.6,0.3c0.1,0,0.4,0,0.4,0	c0.4,0.3,0.7,0,1.5-0.1c0.1-0.1,0.3-0.4,0.6-0.6c0.1,0,0.3-0.1,0.3-0.1c0.3-0.3,0.4-0.4,0.4-0.4c1-1,1.5-1.6,1.6-2.1	c0.3-0.4,0.4-0.9,0.7-1.3c0-0.1,0-0.6,0-0.9c0-0.7-0.4-1.5-1-2.4c-0.4-0.1-0.7-0.6-1-1c-0.7-0.4-1-0.6-1.5-1c-0.4-0.1-1-0.3-1.5-0.6	c-0.4,0.4-0.6,1-0.7,1.5c-0.3,0.4-0.7,1-0.9,1.8c-0.4,0.7-0.6,1.5-0.6,2.1c0,0.3,0,0.3,0,0.3C20.8,42.8,20.8,43.2,20.8,43.8z M22.6,36.7c0,0.1-0.1,0.1-0.1,0.4c0-0.3,0.1-0.3,0.1-0.3c0.3,0,0.3,0,0.4,0C22.9,36.9,22.9,36.7,22.6,36.7z M64.7,92.3	c-0.3,0.1-1.3,0-2.1,0c-1.8,0.4-2.1,1-2.4,1.6c0,0.3-1,0.3-1.6,0.3c0.4,0.6-1.8,1-1.8,1.6c-0.9,0-2.1-0.3-3.1,0	c-0.9,0-1.5,0.1-2.1,0.3c-3.2,0.4-6.3,0.9-9.3,1.3c-0.3,0-0.6,0-0.7,0c0,0,0,0.1-0.3,0.1c0,0,0,0-0.1,0c-0.6,0-1.2,0-1.6,0	c0,0,0,0,0,0.3c-1,0-2.1,0-3.1,0c-0.6,0-1,0-1.6-0.3v0.3c-0.6,0.1-1.3-0.3-1.9-0.3c-0.1,0.3-0.1,0.3-0.1,0.4c-2.5,0-5.1-0.1-7.8-0.1	c-0.1,0-0.7-0.4-1.5-0.7c-0.1,0-0.3-0.1-0.3-0.1h0.3c-0.1,0-0.3,0-0.6,0c0-0.1,0-0.1,0-0.1h0.6c-0.1,0-0.3,0-0.6,0	c0.4-0.3,1,0,1.5,0c-1.2-0.4-0.6-0.7,0.7-0.9c-0.1,0-0.6,0-0.6,0c0-0.4,1,0,1.3,0c0-0.1-1.3,0-1.5-0.4c0.4,0,0.7,0,1.2,0	c0.4-0.1-1,0-1-0.1c0.4,0,0.9,0,1.3,0c-0.7-0.1-0.3-0.4-0.7-0.6c-0.3-0.4-1.2-0.9,0.3-1c0.1-0.3,0.7-0.3,1.5-0.3	c-0.3-0.1-0.4-0.1-0.9-0.3c0.6,0,1.2-0.3,1.9-0.4c1.3-0.4,3.4-0.4,4.9-0.4h0.4c2.8,0.1,14.3,0,15.9-0.4c5.1,0,9.9-0.1,14.7,0	C63.8,91.9,65,92.2,64.7,92.3z M32.3,84.1c0.1,0,0.4,0,0.6,0c0,0,0-0.1,0-0.3c0-0.3-0.1-0.4-0.4-0.7c-0.1-0.3-0.6-0.9-0.7-1.3	c-0.3-0.4-0.7-0.9-0.9-1.3c0-0.1,0-0.1,0-0.3c0,0,0,0.1-0.1,0c0-0.3,0-0.4,0-0.4c0-0.3,0,0-0.3,0c0-0.4-0.1-0.6-0.1-1	c0-0.3,0-0.4,0.1-0.4h-0.1c-0.3-0.1,0.1-0.4,0-0.6H30c-0.1-0.4-0.1-0.9-0.1-1.2c-0.1-0.3-0.1-0.3-0.1-0.4c0-0.3,0-0.4,0-0.6	c0-0.3,0.1-0.4,0.1-0.7c0.1,0,0.1-0.1,0.4-0.1v0.1c0-0.1,0-0.1,0-0.1v-0.1l0.1,0.1v-0.1c0,0.1,0,0.3,0,0.3c0.3-0.3,0.6-0.3,0.9,0	c0,0-0.3-0.1,0-0.1c0.1,0,0,0.4,0,0.4c0.1,0,0-0.4,0.1-0.4l0.3,0.1c0.3,0,0-0.1,0-0.1c0.1,0,0.1,0.1,0.1,0.1	c0.1-0.1,0.4-0.1,0.6-0.3c0,0-0.1,0-0.4,0l-0.7-0.3h-0.9c-1.2-0.1-2.6-0.6-4.1-0.7c-0.1,0-0.1,0-0.6,0c0,0.6,0,2.2,0,3.7	c0,0.6,0,1.3,0,2.1c0,0.3,0.3,1,0.3,1.2c-0.3,1.5-0.3,3.1-0.4,4.6c0.4-0.3,1-0.3,1.5-0.4c1.3-0.3,3.4-0.3,5-0.3H32.3z M26,85.1	c-0.3,0-0.4,0-0.4-0.1c0,0.1,0,0.1,0,0.1S25.7,85.1,26,85.1z M33.6,74.5h0.3H33.6z M55,85.1c-0.4-0.1-0.7-0.3-1.2-0.3	c0,0,0-0.4,0-0.7c-0.9,0.3-1-0.6-1.6-0.6c0-0.4,0-0.7,0-1.2c0-0.1-0.3-0.4-0.4-0.9c-0.4-1-0.9-2.2-1-3.2c0-0.1,0-0.1,0-0.4	c0,0,0,0-0.1,0c0-0.1,0.1-0.3,0.1-0.6c-0.1,0-0.1,0-0.1,0c0-0.4-0.3-0.7-0.3-1.2c0.3-0.3,0.4-0.4,0.4-0.4l-0.1-0.1	c0-0.3,0.3-0.4,0.1-0.7h-0.1c0-0.3,0-0.7,0-1h-0.4c-0.9,0.3-1.6,0.3-2.5,0.4c0,0.3,0.1,0.4,0,0.4v0.1c0,0.4,0.1,1.3,0.1,2.1	c0.3,1,0.4,1.9,0.4,2.1c0.3,1.3,0.6,2.5,0.4,3.7c0,0-0.1,0.4-0.4,0.3c-0.1,0,0-0.3,0-0.4c-0.4-0.4-1.2-0.4-1.6-0.4	c-0.1,0-0.1-0.4-0.1-0.4c-0.6,0.3-1-0.3-1.9-0.3c0-0.3,0.3-0.7,0-0.9c0-0.1-0.1-0.4-0.4-0.4c-0.6-0.7-1-1.6-1.3-2.4v-0.3h-0.3	c0-0.1,0-0.4,0-0.6c0,0,0,0-0.1,0c0-0.1,0-0.4-0.1-0.9c0.1,0,0.1-0.1,0.3-0.3h-0.1c-0.1-0.3,0.1-0.4,0-0.7c0,0,0,0-0.1,0	c0,0,0,0,0-0.1c-1.8,0.1-3.5,0.1-5.1,0.1l-1.6-0.1c-0.3,0-0.7,0-1,0c0.1,0,0.1,0,0.3,0.1c0.4,0.4,0.7,1,0.7,1.8h0.1	c0,0.6,0.1,1.8,0.4,2.9c0.1,0.7,0.1,1.3,0.4,1.8c0,0.3,0.1,0.7,0.1,1c0.1,0.7,0.1,1.6,0.4,2.2c1.2,0.1,2.6,0.1,3.8,0.1	c1.9,0,3.5,0.3,5,0.3c1.3,0,2.4,0,2.8,0C50.7,85,52.9,85,55,85.1z M42.9,54.5c-0.1,0.1,0,0.1,0,0.1V54.5c0.1,0,0.1,0,0.4,0.1	c0,0,0,0,0,0.3c0.1,0,0.1,0,0.1,0c0.3-0.3,0.6-0.3,0.9-0.3c0.4,0.3,0.7,0.4,1,0.3c0.1,0,0.1,0.1,0.1,0.3c0,0,0.3,0.3,0.3,0.4	c0,0.1,0,0.4,0,0.4c0,0.1,0.1,0.4,0.1,0.6c0,0.1,0.1,0.9,0.4,1.2c0,0.3-0.3,0.4-0.3,0.4c0,0.3,0,0.4,0,0.4c0,0.4-0.1,0.6-0.1,1	c-0.1,0-0.1,0.1-0.1,0.4c-0.3,0-0.3,0.1-0.4,0.3l-0.3,0.3C45,61,45,61.3,44.8,61.3c-0.7,0.3-1.3,0.7-2.1,1h-0.3h-0.1	c-0.1,0-0.4,0-0.6,0c-0.4-0.3-1-0.3-1.3-0.4c-0.1-0.3-0.3-0.3-0.6-0.4c-0.1,0-0.1,0-0.1,0c-0.3,0-0.3-0.1-0.3-0.1	c-0.1,0-0.3-0.3-0.3-0.4l-0.3-0.3c0-0.1-0.1-0.1-0.1-0.3L38.3,60c0,0,0,0-0.1,0c0-0.1-0.1-0.3-0.1-0.6c-0.3-0.1-0.3-0.1-0.4-0.4	v-0.3v-0.3c-0.1-0.1-0.1-0.4-0.1-0.6c0-0.1,0-0.4,0-0.6c0,0,0-0.3,0-0.4c-0.3-0.4,0.1-0.9,0-1.2c0-0.3-0.3,0-0.3,0	c0-1.6,0.4-3.1,0.9-4.4c0-0.1,0.3-0.3,0.7-0.7h0.3v0.1c0,0,0-0.1,0.1-0.1v0.1c0,0,0-0.1,0.1-0.1c0,0.1-0.1,0.4-0.3,0.6	c0.6-0.6,0.7,0,0.6,0.6c0-0.1,0.1-0.4,0.1-0.4c0.3,0.3-0.1,0.7-0.1,0.7c0.1,0.1,0.1-0.4,0.6-0.7c-0.1,0.3,0,0.7-0.1,0.9	c0.1,0.1,0.1-0.6,0.3-0.6c-0.1,0.1-0.1,0.4-0.1,0.6c0.1-0.1,0.4,0,0.6,0c0.6-0.1,1-0.4,1.3,0.1c0,0.3,0,0.4-0.3,0.7	c0.3,0,0.4,0,0.4-0.3c0.1,0.4,0.4,0.6,0.4,1C42.7,54,42.9,54.2,42.9,54.5z M49.2,38.1c0.4-1.8,1-3.8,2.1-5.6c0,0-0.1-0.3-0.4-0.3	c-0.1-0.1-0.3-0.4-0.1-0.4c0.1,0,0.4,0,0.7,0.3c0.3-0.3,0.3-0.3,0.3-0.3c0.4-0.6,1.2-1.2,2.1-1.8c0.1-0.3,0.4-0.3,0.7-0.4	c-0.1,0.1-0.3,0.4-0.6,0.6c0.3-0.1,0.4-0.4,0.6-0.6c0.3,0,0.3,0,0.3,0c-0.3,0.1-0.4,0.4-0.6,0.9c0-0.3,0.1-0.3,0.1-0.4	c0.1-0.3,0.4-0.4,0.6-0.4c-0.6,0.4-1.2,1.2-1.6,1.6c0.1-0.1,0.6-0.4,0.6-0.4c0.3-0.1,0.3,0,0.3,0c0,0.4-0.4,1-0.9,1.8	c0.1-0.3,0.4-0.4,0.4-0.4c0,0.1,0,0.1-0.3,0.6c0-0.1,0.3-0.1,0.3-0.1c0.1-0.3,0.1-0.4,0.4-0.4c-0.3,0.1-0.4,0.4-0.4,0.6h0.1	c0,0,0-0.1,0,0c0.9,0,1.5,0,1.9,0c0.6-0.1,0.7-0.4,1-0.6c0.1,0,0.3,0,1,0.1c0.3,0.3,0.7,0.4,1.2,0.6c-0.1-0.3,0.6-0.3,1.5-0.1	c0.7,0,1.6,0.1,1.6-0.1c1.2,0.7,2.8,1.8,4.1,2.8c0.7,0.6,1.6,1.2,2.4,2.1c0.4,0.6,0.9,1.2,1.3,1.8l0.1,0.4c0,0.3,0.1,0.4,0.1,0.6	c0,0.3,0.3,0.4,0.3,0.7v0.3v0.4v0.3v0.6c0,0.3,0,0.7,0,1c-0.3,0.3-0.3,0.7-0.4,1.2c0,0.1-0.1,0.6-0.4,1c-0.6,1.2-1.3,2.2-2.2,3.1	c-0.9,1-1.9,1.8-2.8,2.6c-0.3,0-0.4,0.1-0.7,0.1c-0.1,0-0.3,0.3-0.6,0.3c0,0.1,0,0.1-0.1,0.1c0,0.1-0.3,0.1-0.4,0.4	c-1,0.4-2.2,0.4-3.1,0.6c-0.1,0-0.1,0-0.1,0c-1,0.1-2.4,0-3.4-0.4c-0.9-0.4-1.9-1-2.8-1.8c-0.9-0.9-1.2-1.6-1.9-2.5h-0.1	c-0.1-0.6-0.4-1.2-0.6-1.6c-0.1-0.6-0.1-1-0.6-1.6c0-0.4-0.3,0-0.3,0C49.2,42.8,49.1,40.4,49.2,38.1z M52.5,33.8	c0.3,0,0.4-0.4,0.7-0.7C52.9,33.4,52.7,33.7,52.5,33.8z M53.5,33.2c0,0.1-0.1,0.4-0.3,0.6c0.3-0.1,0.3-0.1,0.6-0.1	c0,0,0.1,0.1,0.4,0c0,0,0.1,0,0.1-0.3C54.2,33.4,53.9,33.2,53.5,33.2z M53.3,33.2c0,0.1-0.1,0.4-0.1,0.6c0,0.3,0.1-0.1,0.3-0.6	C53.5,33.2,53.5,33.2,53.3,33.2z M55.2,33.8c0,0,0,0.3-0.3,0.4c0,0.4-0.4,1-0.6,1.9c0.1-0.3,0.4-0.7,0.6-0.9	c-0.1,0.9-0.1,1.6-0.1,2.5c0,0.7-0.3,1.8,0,2.8c0,1,0.1,2.1,0.4,2.9c0.1,0.1,0.1,0.1,0.1,0.3c0,0.4,0.1,0.9,0.6,1.5	c0.4,0.6,0.9,1.3,1.2,1.6c0.7,0.4,1.3,0.6,1.9,0.9c0.6,0,1.5-0.3,2.2-0.6c0.4-0.3,0.9-0.4,1.3-0.6c0.3-0.4,0.7-0.7,1.2-1	c0.4-0.4,0.6-0.7,1-1c0.1-0.4,0.6-0.7,0.6-1c0.1-0.3,0.4-0.4,0.4-0.7c0.1-0.1,0.1-0.3,0.1-0.6c0-0.1,0-0.1,0-0.1c0-0.1,0-0.1,0-0.1	c0-0.3,0-0.3,0-0.4c0-0.4-0.1-0.9-0.6-1.3c-0.1-0.3-0.6-1-1.2-1.3c-1-1-2.4-1.9-3.7-2.6c-1.5-0.9-3.1-1.5-4.6-2.1	C55.8,34.1,55.4,33.8,55.2,33.8z M55,72.9c0.3-0.1,0.3-0.1,0.4-0.1c-0.1,0-0.1,0-0.4,0V72.9z M61.9,85.6c-0.1-0.7-0.3-1.6-0.3-2.2	v-0.3c0-0.6,0-2.4-0.3-4.3c0-0.7,0-1.8-0.1-2.4c0-0.7,0-1.3-0.3-1.5c0-1.5,0-2.6,0-4.1c-0.3,0.1-0.7,0.1-1.2,0.4	c-1,0.4-2.1,0.7-3.1,1c-0.4,0.1-0.7,0.1-1.2,0.4c0.1,0.1,0.4,0.3,0.4,0.6c0.1,0.3,0.1,1.2,0.1,1.8c0,0.6-0.1,1.9-0.1,3.1	c0,1.2,0,2.5,0.1,2.6c0,1.5,0,2.9,0,4.3C58,85.1,60,85.4,61.9,85.6z"
            }, void 0, false, {
              fileName: "app/ui/components/Preloader/index.tsx",
              lineNumber: 26,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/Preloader/index.tsx",
            lineNumber: 17,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("svg", {
            x: "0",
            y: "0",
            version: "1.1",
            viewBox: "0 0 114 49.7",
            width: 100,
            style: { display: "flex", marginTop: toRem(46) },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("g", {
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                  fill: "#fff",
                  d: "M0.3,0.2h3.9c0.3,0,0.5,0.2,0.5,0.5v3L4.6,3.9l0.1,0.2c0,1.3,0,2.1,0.1,2.3 c0,1.7-0.1,3.2-0.1,4.5v3.9l-0.1,0.2v0.1l0.1,0.2V16c0,0,0,0.1-0.1,0.1l0.1,0.1c0,0.7,0,1.9,0.1,3.5l-0.1,0.1 c-0.1,0-0.2-0.1-0.3-0.1v0.1c0.3,0.2,0.4,0.3,0.4,0.4v1.2H4.6v0.1l0.1,0.2v11.1L4.6,33c0.1,0,0.1,0.1,0.1,0.1v11.3 c0,0.1,0,0.1-0.1,0.1l-0.3-0.1H4.3v0.1c0.3,0,0.5,0.2,0.5,0.6c1.4,0,2,0.1,2,0.4c0.3,0.2,0.4,0.4,0.4,0.4l0.1-0.1h0.3 c0.4,0,0.5,0.1,0.6,0.2c0,0.2,0,0.4-0.1,0.6c0,0.2,0.1,0.4,0.1,0.5l-0.1,0.1l0.1,0.1l-0.1,0.1c0.1,0,0.2,0,0.2,0.1v0.1 c0,0.1-0.1,0.1-0.2,0.2c0.1,0.4,0.1,0.6,0.1,0.7C8,49,7.9,49.1,7.9,49.2c-0.1,0-0.2,0.1-0.4,0.1v0.2L8,49.4l0.1,0.1v0.1H5.8 l-0.4-0.3H5.3l0.1,0.2v0.1H5.3c-0.7,0-2.2,0-4.5,0.1c-0.5-0.1-0.8-0.2-0.8-0.4v-0.7c0-0.1,0.1-0.1,0.2-0.1v-0.1 c-0.1,0-0.2,0-0.2-0.1V35.4c0-1.1,0-2.6,0.1-4.5c0-0.1-0.1-0.2-0.1-0.3c0-0.6,0.1-0.8,0.4-0.8c0.3,0,0.7-0.1,1.2-0.3H2L2,29.3 L2.3,29v-0.2H2.2l-0.9,0.6l-0.4-0.1c0,0.1,0,0.1-0.1,0.1c-0.3-0.1-0.5-0.2-0.6-0.2c0-0.2,0-0.6-0.1-1.1L0.3,28h0.3v0.2h0.2 c0.5-0.2,0.8-0.4,0.8-0.4l-0.1-0.4H1.5C1,27.7,0.8,27.9,0.7,28v-0.2H0.3c-0.1,0-0.1,0-0.1-0.1v-0.6c0-0.1,0.1-0.1,0.2-0.1l-0.3-0.4 V26c0,0,0-0.1,0.1-0.1l-0.1-0.1v-3.9c0.4-0.2,0.6-0.4,0.6-0.6H0.1v-0.3C0.1,21,0.2,21,0.4,21v-0.1c-0.2,0-0.3,0-0.3-0.1V15l0.1-0.2 c-0.1,0-0.1,0-0.1-0.1V8.3c0,0,0-0.1,0.1-0.1L0.1,8.1V1.9L0,1.5c0-0.1,0.1-0.2,0.1-0.4V0.4C0.1,0.4,0.1,0.3,0.3,0.2z M0.1,21.5h0.1 v0.1C0.1,21.7,0.1,21.6,0.1,21.5z M0.2,21.2L0.2,21.2l0.1,0.1v-0.1H0.2z M0.2,48.6L0.2,48.6c0,0.2,0.1,0.2,0.1,0.2h0.2 c0-0.1-0.1-0.2-0.1-0.2H0.2z M0.3,22.7v0.1h0.1C0.4,22.8,0.4,22.7,0.3,22.7z M0.3,46.6v0.1c0,0.1,0.1,0.1,0.1,0.1v-0.3H0.3z M0.4,18c0,0.1,0.1,0.1,0.1,0.1h0.1V18H0.4z M0.4,44.3v0.1h0.1C0.6,44.3,0.5,44.3,0.4,44.3z M0.6,5.1L0.5,5.2l0.1,0.1l0.1-0.1 L0.6,5.1z M0.5,23.2C0.5,23.2,0.6,23.2,0.5,23.2c0.2,0,0.2,0,0.3,0c0-0.1,0-0.1-0.1-0.1C0.5,23.1,0.5,23.1,0.5,23.2z M0.5,23.9 C0.5,24,0.6,24,0.6,24h0.1v-0.1H0.5z M0.5,27.1L0.5,27.1l0.2,0.1v-0.1H0.5z M0.5,33.9L0.6,34L1,34v-0.1H0.5z M0.6,21.8v0.1h0.1 L0.6,21.8L0.6,21.8z M0.6,24.9V25C1,25,1.2,25,1.2,24.8c-0.1,0-0.1,0-0.1-0.1C0.9,24.8,0.7,24.9,0.6,24.9z M0.6,43.9 c0,0,0.1,0.1,0.2,0.2L1.2,44c0.1,0,0.2,0.1,0.6,0.2l0.1-0.1c0.5,0,1.2,0.3,1.9,0.8c0,0,0,0.1,0.1,0.1H4l-0.1-0.1 C4,44.8,4,44.8,4,44.7c-0.3-0.2-0.6-0.4-0.9-0.4v-0.1l0.1-0.1c-0.1,0-0.5-0.1-1.2-0.3H1.5c-0.2,0-0.4,0-0.6,0.1 C0.8,43.9,0.7,43.9,0.6,43.9z M0.8,27.6L0.8,27.6L0.8,27.6c0.3,0,0.5-0.2,0.8-0.4c0-0.1-0.1-0.2-0.1-0.2H1.3L0.8,27.6z M0.8,44.4 c0,0.1,0.1,0.1,0.1,0.1v-0.1H0.8z M0.8,9.8L0.8,9.8L1,9.8V9.8H0.8z M0.8,15.1c0,0.1,0.1,0.1,0.1,0.1h0.1C1.1,15.2,1,15.1,0.8,15.1 L0.8,15.1z M0.8,18.1v0.1H1v-0.1H0.8z M0.8,30.2c0,0.1,0.5,0.3,1.4,0.5l0.1-0.1h0.1l0.2,0.1h0.2v-0.1c-0.3,0-0.5-0.1-0.8-0.4 c0,0-0.1,0-0.2,0.1L0.8,30.2z M0.8,47.7c0,0.1,0.1,0.1,0.3,0.2l0.1-0.1L0.8,47.7z M0.9,22.4L0.9,22.4l0.2,0.1v-0.1H0.9z M0.9,43 v0.3l0.8,0.1h0.4v-0.1H1.8C1.5,43.2,1.1,43.2,0.9,43z M1,10.1L1,10.1l0.2,0.1v-0.1H1z M1,18.4v0.2h0.1c0.1,0,0.1,0,0.1-0.1 l-0.1-0.1H1z M1.1,21.4c0,0.1,0.1,0.1,0.1,0.1h0.1c0.1,0,0.1,0,0.1-0.1H1.1z M1.2,15.3c0,0.1,0.1,0.1,0.1,0.1h0.1 c0-0.1,0-0.1-0.1-0.1H1.2z M1.2,47.5c0.3,0,0.5,0.1,0.6,0.1L2,47.3H1.6C1.3,47.3,1.2,47.3,1.2,47.5z M1.3,2.2h0.1 c0.1,0,0.2-0.1,0.2-0.1C1.6,2,1.6,2,1.5,2C1.4,2,1.3,2,1.3,2.2z M1.3,22.3v0.1c0.1,0,0.2-0.1,0.4-0.1v-0.1H1.7L1.3,22.3z M1.3,37.4 L1.3,37.4l0.3,0.1v-0.1H1.3z M1.5,3.1l0.1,0.1h0.3C2,3.2,2,3.1,2,3L1.7,3H1.6C1.5,3,1.5,3,1.5,3.1z M1.5,24.2L1.5,24.2l0.1,0.1 v-0.1H1.5z M1.5,27.3v0.1c0.1,0,0.1,0,0.1-0.1H1.5z M1.6,15.5L1.6,15.5C2.2,15.8,2.6,16,2.7,16v-0.1C2.4,15.6,2.1,15.5,1.6,15.5 L1.6,15.5z M1.7,18.9L1.7,18.9L1.9,19v-0.1H1.7z M1.8,25.9c0,0.1,0.1,0.2,0.1,0.4H2c0.1,0,0.1,0,0.1-0.1C2,26,1.9,25.9,1.8,25.9z M1.8,1.9L1.8,1.9L2,2V1.9H1.8z M1.8,26.6v0.1H2v-0.1H1.8z M1.8,44.6v0.1h0.4c0-0.1-0.1-0.2-0.1-0.2C1.9,44.6,1.9,44.6,1.8,44.6z M1.9,5.1v0.4H2c0.1,0,0.2-0.1,0.2-0.1c0,0.2,0.2,0.3,0.4,0.3h0.1C2.4,5.3,2.2,5.1,2.2,5.1C2.1,5.1,2,5.1,1.9,5.1z M1.9,23.3v0.1 h0.6v0.2h0.3v-0.1c0-0.1-0.2-0.2-0.7-0.3H1.9z M2,26.6C2,26.9,2,27,2,27.1l0.6,0.6h0.1c0-0.1,0-0.1,0.1-0.1l-0.1-0.1 c0-0.1,0.1-0.2,0.1-0.3L2.7,27c-0.1,0-0.2,0-0.4,0.1v-0.5H2z M2.1,19.1v0.1c0.1,0,0.2,0,0.3,0.1h0.1v-0.1 C2.4,19.2,2.3,19.1,2.1,19.1L2.1,19.1z M2.1,24.4L2.1,24.4l0.1,0.1v-0.1H2.1z M2.2,22v0.1h0.1L3,22.1v-0.1H2.9L2.2,22z M2.2,47 c0,0.1,0.1,0.1,0.1,0.1V47H2.2z M2.3,19.6L2.3,19.6l0.1,0.1v-0.1H2.3z M2.3,26.4L2.3,26.4c0.1,0.1,0.2,0.1,0.4,0.3h0.1v-0.1 l-0.1-0.4H2.4C2.3,26.2,2.3,26.3,2.3,26.4z M2.3,25.9L2.3,25.9L2.5,26v-0.1H2.3z M2.4,27.7c0,0.2,0,0.5-0.1,0.7h0.2l0.1-0.5 C2.5,27.9,2.5,27.8,2.4,27.7L2.4,27.7z M2.5,12.4L2.5,12.4l0.2,0.1v-0.1H2.5z M2.5,31.4L2.5,31.4l0.1,0.1v-0.1H2.5z M2.6,18.2 L2.6,18.2l0.1,0.1v-0.1H2.6z M2.7,6v0.1h0.1V6H2.7z M2.7,19.4c0,0.1,0.1,0.2,0.4,0.4h0.1v-0.2C3,19.5,2.8,19.4,2.7,19.4z M2.7,25.8 l0.1,0.1c0.1,0,0.1-0.1,0.2-0.2H2.9C2.8,25.7,2.7,25.7,2.7,25.8z M2.8,1.3v0.1h0.1L2.8,1.3L2.8,1.3z M3,2.8L2.8,3l0.4,0.1h0.1V3 C3.2,3,3.1,2.9,3,2.8z M2.8,43.7l0.1,0.1c0.1,0,0.2-0.1,0.3-0.1v-0.1H2.8z M2.9,30.8v0.1h0.4c0-0.1,0-0.1-0.1-0.1H2.9z M3,0.8v0.3 c0.1,0,0.2,0.1,0.2,0.4c0.1,0,0.2-0.1,0.5-0.1L3.5,1.2c0-0.1,0.1-0.1,0.1-0.1C3.7,0.9,3.4,0.8,3,0.8z M3,17.6 c0.1,0.2,0.1,0.3,0.2,0.3h0.2c0.1,0,0.1,0,0.1-0.1L3,17.6L3,17.6z M3,46.7L3,46.7l0.1,0.1v-0.1H3z M3.1,25.1c0,0.1,0.1,0.1,0.1,0.1 h0.1C3.3,25.1,3.3,25.1,3.1,25.1L3.1,25.1z M3.1,47.2L3.1,47.2l0.2,0.1v-0.1H3.1z M3.2,16.2L3.2,16.2l0.2,0.1v-0.1H3.2z M3.2,32.1 v0.3h0.2v-0.3H3.2z M3.2,43.8v0.1h0.2v-0.1C3.3,43.9,3.3,43.9,3.2,43.8z M3.2,47.7L3.2,47.7l0.1,0.1v-0.1H3.2z M3.3,19.1v0.1h0.3 v-0.1L3.3,19.1z M3.4,30.9L3.4,30.9L3.7,31v-0.1H3.4z M3.4,43.7v0.2l1,0.2C4.5,44,4.6,44,4.6,44c0-0.1-0.2-0.2-0.7-0.4H3.4z M3.5,20v0.1c0.1,0,0.1,0,0.1-0.1H3.5z M3.5,33.4c0,0.1,0.1,0.1,0.1,0.1v-0.1H3.5z M3.5,36.1L3.5,36.1l0.1,0.1v-0.1H3.5z M3.6,7.3 v0.1h0.1L3.6,7.3L3.6,7.3z M3.6,48.5c0,0.1,0.1,0.1,0.1,0.1h0.1C3.8,48.6,3.8,48.5,3.6,48.5L3.6,48.5z M3.7,1v0.1 c0.1,0,0.2-0.1,0.3-0.1V0.9H3.9C3.8,1,3.8,1,3.7,1z M3.7,19.4L3.7,19.4l0.1,0.1v-0.1H3.7z M3.8,35.9L3.8,35.9l0.1,0.1v-0.1H3.8z M3.8,44.4L3.8,44.4l0.1,0.1v-0.1H3.8z M3.9,20l-0.1,0.1L4,20.2h0.1C4.1,20.1,4.1,20,3.9,20z M3.9,20.3c0,0,0.2,0.2,0.7,0.6 l0.1-0.4c-0.1,0-0.1-0.1-0.1-0.2C4.3,20.3,4.1,20.3,3.9,20.3z M3.9,21.8L3.9,21.8l0.4,0.1v-0.1H3.9z M4.1,8.2l0.1,0.1h0.1 c0.1,0,0.1,0,0.1-0.1L4.3,8H4.2C4.1,8,4.1,8.1,4.1,8.2z M4.1,33L4.1,33L4.4,33V33H4.1z M4.1,19.4v0.1h0.1 C4.3,19.5,4.2,19.4,4.1,19.4z M4.1,22.6h0.1v-0.1C4.2,22.5,4.1,22.6,4.1,22.6z M4.1,24v0.1h0.1V24H4.1z M4.1,32.8L4.1,32.8l0.1,0.1 v-0.1H4.1z M4.1,44.9L4.1,44.9L4.4,45v-0.1H4.1z M4.4,5.1c0,0,0,0.1-0.1,0.2l0.1,0.1l0.1-0.1V5.1H4.4z M4.4,14.8v0.1h0.1 C4.5,14.8,4.5,14.8,4.4,14.8z M4.4,34h0.1c0.1,0,0.1,0,0.1-0.1H4.5C4.4,33.9,4.4,33.9,4.4,34z M4.5,45.2c0,0.1,0.1,0.2,0.4,0.3H5 c0.1,0,0.1,0,0.1-0.1C4.8,45.3,4.6,45.2,4.5,45.2L4.5,45.2z M4.8,45.6l0.1,0.1l-0.1,0.1h0.6c0.1,0,0.1,0,0.1-0.1 c0-0.1-0.1-0.2-0.4-0.2L4.8,45.6z M5,47.3c0,0.1,0.1,0.2,0.1,0.2c-0.1,0-0.1,0.1-0.1,0.1c0.1,0,0.1,0,0.1,0.1 c0.2,0,0.3-0.1,0.3-0.2h0.1l0.2,0.1c0.1,0,0.1,0,0.1-0.1c-0.2-0.1-0.5-0.2-0.6-0.4C5,47.1,5,47.2,5,47.3z M5.9,47.5L5.9,47.5 L6,47.5v-0.1H5.9z M6.2,45.6v0.1h0.1c0.1,0,0.1,0,0.1-0.1v-0.1C6.3,45.6,6.2,45.6,6.2,45.6z M7,47.7L7,47.7l0.1,0.1v-0.1H7z M7.1,45.1h0.3c0.1,0,0.2,0,0.3,0.1c0.1,0,0.2-0.1,0.2-0.1l0.3,0.3c-0.1,0-0.2,0.1-0.3,0.1L8,45.7c-0.1,0-0.3,0-0.5,0.1 c-0.3-0.1-0.4-0.2-0.4-0.3V45.1z M7.1,48L7.1,48L7.4,48V48H7.1z M7.2,48.2L7.2,48.2c0.2,0.1,0.3,0.1,0.4,0.2h0.1v-0.2H7.2z M7.5,46.3L7.5,46.3l0.1,0.1v-0.1H7.5z M8.6,45.1h1.7c0.3,0,0.4,0.1,0.4,0.2v2.5c0,0,0,0.1-0.1,0.1c0,0.1,0.1,0.2,0.1,0.2 s0,0.1-0.1,0.1l0.1,0.4v0.4c0,0,0,0.1-0.1,0.1l0.1,0.1v0.3c0,0.1-0.3,0.2-0.8,0.3c-0.3,0-0.6-0.1-0.8-0.1H8.8l-0.1,0.1 c-0.1-0.2-0.1-0.6-0.1-1.1v-0.1c0,0,0-0.1,0.1-0.1c0,0,0-0.1-0.1-0.1c0-0.8,0.1-1.4,0.1-1.8v-0.8l-0.1-0.5L8.6,45.1z"
                }, void 0, false, {
                  fileName: "app/ui/components/Preloader/index.tsx",
                  lineNumber: 37,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                  fill: "#fff",
                  d: "M20,0h0.7c0.1,0,0.2,0,0.2,0.1L21.3,0h3.1c2.1,0,3.5,0.8,4.4,2.3c0.4,0.6,0.6,1.2,0.6,1.8v1.1 h-0.1L29,5h-0.1c0.1,0.2,0.2,0.3,0.4,0.3v2.8l-0.1,0.2l0.1,0.2v8.9c0,0,0,0.1-0.1,0.1c0,0.1,0.1,0.2,0.1,0.2c0,2.9,0.1,4.6,0.1,5.1 l-0.1,0.1c0,0.1,0.1,0.2,0.1,0.3h-0.1V23h-0.1L29,23.1c0,0.1,0.1,0.2,0.4,0.4v18.8L29,42.1h-0.1c0,0.1,0.1,0.2,0.1,0.3h0.4 c0.1,0,0.1,0.1,0.1,0.1v0.1c0,0.1-0.1,0.1-0.2,0.2h-0.1L29,42.8h-0.1V43l0.1,0.2l-0.1,0.2v0.1c0,0,0.1,0,0.2,0.1 c0.1,0,0.2-0.1,0.2-0.1c0,0,0,0.1,0.1,0.1c0,0,0-0.1,0.1-0.1l0.1,0.1v1.6c0,2-1.1,3.4-3.2,4.2c-0.1,0-0.2,0.1-0.2,0.1V49l-0.1-0.2 c0,0,0-0.1,0.1-0.1c0-0.1-0.1-0.2-0.1-0.4h-0.2c0,0.3-0.1,0.4-0.2,0.4c0,0.2,0.1,0.4,0.3,0.6c0,0.1,0,0.1-0.1,0.1H25 c-0.8,0-1.6,0-2.6,0.1l-0.4-0.1c-0.4,0-0.8,0.1-1.1,0.1h-0.8c-1.1,0-2.1-0.4-3.2-1.3c-0.6-0.7-0.9-1.2-0.9-1.5 c-0.2,0-0.4-1.1-0.4-3.4V28.2l0.1-0.4c0-0.1-0.1-0.4-0.1-1.1c0.1,0,0.2-0.1,0.4-0.1v-0.1c-0.2,0-0.4-0.1-0.4-0.4v-0.4h0.2 c0-0.1-0.1-0.1-0.2-0.1v-8.1c0,0,0-0.1,0.1-0.1l-0.1-0.1v-0.9c0-0.1,0.1-0.1,0.1-0.1l0.1,0.1c0-0.1,0.1-0.1,0.2-0.1V16 c-0.3,0-0.5,0-0.5-0.1v-0.4c0-0.6,0-1.4-0.1-2.4c0,0,0-0.1,0.1-0.1l-0.1-0.5v-2.3c0-0.1,0.1-0.1,0.2-0.1l-0.2-0.3V7.6l0.1-0.2 l-0.1-0.2v-3c0-0.7,0.2-1.4,0.6-1.9h0.1c0,0.2,0.1,0.3,0.2,0.3h0.3c0.1,0,0.1,0,0.1-0.1c-0.4-0.2-0.6-0.3-0.6-0.4 c0.1,0,0.2-0.2,0.4-0.6C17.7,0.5,18.8,0,20,0z M15.9,7.9L15.8,8H16C16,7.9,16,7.9,15.9,7.9z M15.9,6.7c0,0,0.1,0.2,0.4,0.4 C16.5,7,16.6,7,16.6,6.9C16.4,6.8,16.2,6.7,15.9,6.7z M15.9,20.3L15.9,20.3l0.1,0.1v-0.1H15.9z M15.9,31L15.9,31l0.3,0.1 C16.2,31.1,16.1,31,15.9,31L15.9,31z M15.9,33.2L15.9,33.2c0.2,0.4,0.3,0.6,0.4,0.6h0.1c0.1,0,0.1-0.1,0.2-0.3L15.9,33.2L15.9,33.2 z M16,7.7c0,0.1,0.1,0.1,0.1,0.1h0.1C16.2,7.8,16.2,7.7,16,7.7L16,7.7z M16,9.1L16,9.1c0,0.2,0.1,0.2,0.1,0.2h0.1 c0.1,0,0.1,0,0.1-0.1L16,9.1z M16,9.8V10l0.3,0.1l0.1-0.2V9.8H16z M16.1,18.6L16.1,18.6l0.2,0.1v-0.1H16.1z M16.1,34.4v0.4 c0.3,0.2,0.6,0.4,0.9,0.4v-0.3c-0.1,0-0.2,0-0.2-0.1l0.1-0.1c-0.2,0-0.3,0-0.4-0.1H16.1z M16.2,12.2L16.2,12.2 c0,0.2,0.1,0.2,0.1,0.2h0.2c0-0.1,0.1-0.2,0.2-0.2V12C16.4,12.1,16.2,12.2,16.2,12.2z M16.2,16.7L16.2,16.7l0.2,0.1v-0.1H16.2z M16.2,10.2L16.2,10.2c0,0.2,0.1,0.2,0.1,0.2h0.1v-0.1C16.4,10.3,16.3,10.2,16.2,10.2z M16.2,24.5c0,0.1,0.1,0.1,0.1,0.1h0.3 c0-0.1-0.1-0.2-0.1-0.3h-0.2C16.3,24.3,16.2,24.4,16.2,24.5z M16.2,35.4c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H16.2z M16.3,14.1 L16.3,14.1c0,0.2,0.2,0.2,0.6,0.3c0-0.1-0.1-0.2-0.3-0.3H16.3z M16.3,39.8L16.3,39.8l0.2,0.1v-0.1H16.3z M16.3,44.3L16.3,44.3 l0.1,0.1v-0.1H16.3z M16.4,8.8V9h0.2c0.1-0.1,0.2-0.1,0.3-0.1V8.8c0-0.1,0-0.1-0.1-0.1C16.6,8.7,16.5,8.8,16.4,8.8z M16.4,26.3 L16.4,26.3l0.1,0.1v-0.1H16.4z M16.4,4.5v0.1h0.1L16.4,4.5L16.4,4.5z M16.4,11c0,0.1,0.1,0.2,0.1,0.2l0.4-0.1l0.2,0.1h0.1 c0-0.1-0.2-0.2-0.6-0.5C16.6,10.8,16.5,10.9,16.4,11z M16.4,17.7c0,0.1,0.1,0.2,0.4,0.4h0.1V18l-0.2-0.4 C16.6,17.7,16.5,17.7,16.4,17.7z M16.6,25.5L16.6,25.5c0.1,0,0.2,0,0.2,0v-0.1h-0.1C16.6,25.4,16.6,25.4,16.6,25.5z M16.6,40.1 c0,0.1,0.2,0.2,0.6,0.3h0.1c0-0.1-0.2-0.2-0.5-0.3H16.6z M16.6,44.4L16.6,44.4c0,0.1,0.2,0.3,0.7,0.4h0.1v-0.1L16.6,44.4L16.6,44.4 z M16.6,47v0.1c0,0,0.1,0,0.2,0.1l0.1-0.1L16.6,47z M16.7,17.4c0,0.1,0.1,0.1,0.1,0.1v-0.1H16.7z M16.8,9.5h0.1 c0.1,0,0.1,0,0.1-0.1h-0.1C16.8,9.4,16.8,9.4,16.8,9.5z M16.8,31.4v0.1l0.5,0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1c-0.1,0-0.2,0-0.2-0.1 c0,0-0.1,0-0.1,0.1L16.8,31.4L16.8,31.4z M16.8,41.4v0.2h0.3c0-0.1-0.1-0.2-0.1-0.2H16.8z M16.9,9.6v0.1h0.1L16.9,9.6L16.9,9.6z M16.9,6.8L16.9,6.8l0.1,0.1V6.8H16.9z M17,10.2c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H17z M17,12.2L17,12.2l0.4,0.1v-0.1H17z M17.1,18 c0,0.2,0.2,0.3,0.4,0.3h0.1v-0.1C17.4,18.2,17.3,18.1,17.1,18L17.1,18z M17.1,24.5c0,0.1,0.1,0.1,0.2,0.2c0.1,0,0.2-0.1,0.2-0.1 v-0.1c-0.1,0-0.2,0-0.2-0.1C17.3,24.5,17.2,24.5,17.1,24.5z M17.1,28.3L17.1,28.3c0,0.2,0.1,0.2,0.1,0.2h0.1v-0.1 C17.3,28.4,17.2,28.4,17.1,28.3z M17.4,33c0,0.2-0.1,0.3-0.3,0.3v0.1c0.1,0,0.2,0.1,0.3,0.2l0.1-0.1l-0.1-0.1 c0.1-0.2,0.1-0.3,0.1-0.4H17.4z M17.2,3.3l0.3,0.1v0.1h-0.1c0,0.1,0.2,0.1,0.5,0.1L18,3.4c0-0.1-0.1-0.2-0.4-0.4 C17.3,3.2,17.2,3.2,17.2,3.3z M17.3,11.3h0.1v-0.1C17.3,11.2,17.3,11.2,17.3,11.3z M17.3,11.5L17.3,11.5c0,0.1,0.1,0.1,0.2,0.1h0.1 v-0.1C17.5,11.5,17.4,11.5,17.3,11.5L17.3,11.5z M17.4,44.8L17.4,44.8l0.3,0.1v-0.1H17.4z M17.5,21.5L17.5,21.5l0.1,0.1v-0.1H17.5z M17.6,23.3v0.1h0.1v-0.1H17.6z M17.6,43.7v0.1h0.1C17.7,43.7,17.7,43.7,17.6,43.7z M17.6,7L17.6,7c0,0.2,0.1,0.2,0.1,0.2V7H17.6z M17.6,11.6L17.6,11.6c0,0.2,0.1,0.3,0.3,0.3V12c0,0.1-0.1,0.1-0.2,0.1v0.1l0.1-0.1c0.2,0,0.3,0,0.4,0.1c0.4,0,0.6-0.1,0.6-0.2 c-0.6-0.1-0.8-0.2-0.8-0.4H17.6z M17.6,19.2c0,0.1,0.1,0.1,0.2,0.2v-0.2H17.6z M17.7,32.1c0,0.1,0.1,0.1,0.1,0.1v-0.1H17.7z M17.8,1.8L17.8,1.8C17.9,1.9,18,2,18,2.1h0.1c0,0,0-0.1-0.1-0.1l0.1-0.1V1.8L17.8,1.8z M17.8,3.8v0.1h0.2 C18.1,3.8,18,3.8,17.8,3.8L17.8,3.8z M17.9,29.3v0.1c0,0,0.1,0,0.2,0.1l0.1-0.1l-0.1-0.1H17.9z M17.9,38.5c0,0.1,0.1,0.1,0.1,0.1 h0.1C18.1,38.5,18.1,38.5,17.9,38.5L17.9,38.5z M18,48.1L18,48.1l0.1,0.1v-0.1H18z M18.1,35.3h0.3c0-0.1,0-0.1-0.1-0.1 C18.1,35.2,18.1,35.2,18.1,35.3z M18.1,46.3c0,0.1,0.1,0.1,0.3,0.2v-0.1c0-0.1,0-0.1-0.1-0.1H18.1z M18.1,3.9L18.1,3.9 c0,0.1,0.1,0.1,0.2,0.1V3.9H18.1z M18.2,20.7c0,0.1,0.1,0.1,0.1,0.1v-0.1H18.2z M18.3,24.3v0.1h0.1L18.3,24.3L18.3,24.3z M18.3,30.9L18.3,31h0.2C18.5,30.9,18.4,30.9,18.3,30.9z M18.5,19l-0.1,0.2h0.1c0.1,0,0.2-0.1,0.2-0.1C18.6,19,18.6,19,18.5,19z M18.3,20.1L18.3,20.1l0.1,0.2c0.1,0,0.2-0.1,0.2-0.1v-0.1L18.5,20C18.5,20.1,18.4,20.1,18.3,20.1z M18.4,2L18.4,2l0.2,0.1V2H18.4z M18.5,4.6C18.5,4.6,18.5,4.6,18.5,4.6c0,0.2,0,0.2,0,0.3c0.1,0,0.2-0.1,0.2-0.1C18.7,4.7,18.6,4.6,18.5,4.6z M18.6,28.5l0.1,0.1 v0.2h-0.2v0.1c0.1,0,0.3,0.1,0.6,0.3c0-0.1,0-0.2,0.1-0.3c-0.1,0-0.1-0.1-0.2-0.2v-0.1h0.2v-0.1c0-0.1,0-0.1-0.1-0.1L18.6,28.5z M18.5,48.3v0.2c0,0.1,0.1,0.1,0.1,0.1H19v-0.1c-0.1,0-0.2-0.1-0.2-0.2H18.5z M18.5,10.9c0,0.1,0.1,0.2,0.4,0.3l0.1-0.1h0.1 l0.1,0.1l0.1-0.1C18.9,10.9,18.7,10.9,18.5,10.9z M18.6,12.4L18.6,12.4c0.1,0.1,0.2,0.1,0.4,0.2H19v-0.2H18.6z M18.7,40.7v0.1H19 v-0.1L18.7,40.7z M18.7,43.2c0,0.1,0.1,0.1,0.1,0.1H19c0-0.1,0-0.1-0.1-0.1H18.7z M18.8,20.3L18.8,20.3c0.1,0.1,0.2,0.1,0.3,0.1 v-0.1H18.8z M18.8,35c0,0.1,0.1,0.1,0.1,0.1V35H18.8z M18.8,35.3L18.8,35.3c0.2,0.1,0.5,0.1,0.7,0.1c0-0.1-0.1-0.1-0.4-0.2 C19,35.3,18.9,35.3,18.8,35.3z M18.8,39.1c0,0.1,0.1,0.1,0.1,0.1H19c0-0.1,0-0.1-0.1-0.1H18.8z M18.8,32.4L18.8,32.4 c0,0.1,0.1,0.2,0.3,0.4h0.4v-0.2C19.1,32.5,18.9,32.5,18.8,32.4z M18.9,44.6L18.9,44.6l0.1,0.1v-0.1H18.9z M19,17.4l0.1,0.1 l0.4-0.1v-0.1l-0.3-0.1C19.1,17.4,19,17.4,19,17.4z M19,1.8v0.1c0.2,0,0.3,0.1,0.3,0.2L19.7,2h0.5V2c0-0.1,0-0.1-0.1-0.1h-0.1 l-0.4,0.1C19.3,1.8,19.2,1.8,19,1.8z M19.2,20.5L19.2,20.5l0.4,0.1h0.2v-0.1l-0.4-0.1H19.2z M19.2,45.5v0.1h0.2v-0.1 C19.3,45.6,19.3,45.5,19.2,45.5z M19.2,48.6c0,0.1,0.1,0.1,0.1,0.1h0.4c0-0.1,0-0.1-0.1-0.1H19.2z M20.4,10.7L20,10.8V11 c0.1,0,0.1,0,0.1,0.1l0.1-0.1h0.1c0,0.3,0.1,0.5,0.1,0.6c0,0.8-0.1,1.2-0.1,1.2c0.1,0,0.1,0.1,0.1,0.1v0.8c0,0.1,0,0.2-0.1,0.2 l0.1,0.4v4.4l-0.1,0.1l-0.1-0.1h-0.2v0.1c0.2,0,0.3,0.2,0.4,0.5v0.9l-0.3,0.3c0.1,0,0.2,0.1,0.3,0.3v1.3c0,0.1-0.1,0.1-0.3,0.1v0.1 h0.1v0.1l-0.2,0.3c0.2,0.1,0.4,0.1,0.4,0.2v4.4c0,2.1,0,5,0.1,8.8h-0.1l0.1,0.1V42c-0.2,0-0.3,0.2-0.3,0.5c0.1,0,0.2,0,0.2,0.1 c0,0.2-0.1,0.4-0.1,0.4l0.2,0.4v0.6l-0.4-0.1H20v-0.1c0.3-0.2,0.4-0.3,0.4-0.4h-0.1c-0.3,0.1-0.5,0.3-0.5,0.6c-0.2,0-0.3,0-0.3,0.1 v0.3l0.2-0.1l0.4,0.1c0,0,0-0.1,0.1-0.1v0.3h0.1l0.3-0.2h0.1v0.4c-0.1,0-0.2,0-0.2,0.1c-0.2-0.1-0.3-0.1-0.4-0.1 c-0.2,0-0.3,0.1-0.4,0.2l-0.4-0.1v0.1c0.2,0.2,0.4,0.3,0.4,0.4l0.2,0.1c0.1,0,0.1,0,0.1-0.1c-0.1,0-0.2,0-0.2-0.1 c0-0.1,0.1-0.2,0.4-0.3c0.1,0,0.3,0,0.4,0.1l0.1-0.1c0.3,0.1,0.4,0.2,0.4,0.4h0.8v-0.2H22l0.2,0.4c0.1,0,0.1,0,0.1-0.1l-0.2-0.3 v-0.1h2.3l0.1-0.1c0-10.1-0.1-18.1-0.1-23.9v-2.7c0-1.4,0-3.7-0.1-6.8l0.1-0.1c0,0,0,0.1,0.1,0.1v-0.1l-0.2-0.3v-6 c0-0.1,0.1-0.1,0.1-0.1c0.1,0,0.2,0.1,0.2,0.1l-0.1,0.2c0,0.1,0.3,0.2,0.8,0.3h0.1c-0.3-0.2-0.5-0.3-0.5-0.4C25,5.2,25,5.1,25,5 V4.8h-0.1l-0.2,0.1h-0.1c-0.2-0.3-0.4-0.4-0.6-0.4h-3c-0.4,0-0.6,0.2-0.6,0.5V10.7z M19.2,12.3L19.2,12.3c0.2,0,0.2,0,0.2-0.1h-0.1 C19.3,12.2,19.2,12.2,19.2,12.3z M19.2,46.8L19.2,46.8l0.1,0.1v-0.1H19.2z M19.3,29c0.2,0.3,0.4,0.4,0.7,0.4l0.1-0.1 c-0.3-0.1-0.4-0.2-0.4-0.4L19.3,29z M19.3,36.6v0.2h0.1v-0.1C19.5,36.6,19.4,36.6,19.3,36.6z M19.3,43.5v0.1l0.4,0.1v-0.1 L19.3,43.5z M19.4,22.5L19.4,22.5l0.2,0.1v-0.1H19.4z M19.5,19.2L19.5,19.2l0.2,0.1v-0.1H19.5z M19.5,25.7L19.5,25.7l0.2,0.1v-0.1 H19.5z M19.5,5.1h0.1V4.9C19.6,4.9,19.5,5,19.5,5.1z M19.6,34.2L19.6,34.2c0,0.2,0.1,0.2,0.1,0.2h0.1v-0.1c0-0.1,0-0.1-0.1-0.1 H19.6z M19.6,36.1v0.1h0.1v-0.1H19.6z M19.7,12.2L19.7,12.2l0.1,0.1v-0.1H19.7z M19.7,17.8c0,0.1,0.1,0.1,0.1,0.1H20v-0.1H19.7z M19.7,12.7L19.7,12.7l0.6,0.1v-0.1H19.7z M19.7,18.4L19.7,18.4c0,0.2,0.1,0.2,0.1,0.2h0.3v-0.1c0-0.1,0-0.1-0.1-0.1H19.7z M19.7,40.9c0,0.1,0.1,0.1,0.1,0.1H20C20,40.9,19.9,40.9,19.7,40.9L19.7,40.9z M19.9,9.8L19.8,10v0.1H20V10C20,9.9,20,9.8,19.9,9.8 z M19.8,10.3c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1H19.8z M19.8,25.5c0,0.1,0,0.3,0.1,0.5c0.1,0,0.2-0.1,0.2-0.1c0.1,0,0.2,0.1,0.2,0.1 v-0.2c0-0.1-0.1-0.2-0.4-0.3H19.8z M19.9,36.8c0,0.1,0.1,0.1,0.2,0.2l0.1-0.3L20,36.6C19.9,36.6,19.9,36.7,19.9,36.8z M20,11.3 c0,0.1,0,0.2-0.1,0.3l0.4,0.1v-0.3L20,11.3z M20.1,48.4L20,48.6c0,0,0.1,0,0.2,0.1l0.1-0.1C20.3,48.5,20.2,48.5,20.1,48.4z M20.1,5.3L20.1,5.3l0.1,0.1V5.3H20.1z M20.1,36c0,0.1,0.1,0.1,0.2,0.2h0.1v-0.1c-0.1,0-0.1,0-0.1-0.1H20.1z M20.1,46.8L20.1,46.8 l0.1,0.1v-0.1H20.1z M20.2,3.2c0,0.1,0.1,0.1,0.1,0.1h0.1V3.2H20.2z M20.2,5.5v0.2h0.1L20.2,5.5L20.2,5.5z M20.2,1.6v0.1h0.3 c0-0.1,0-0.1-0.1-0.1H20.2z M20.4,45.9v0.1c0,0.1,0.2,0.2,0.6,0.4H21l0.1-0.1l-0.1-0.1v-0.1l0.1-0.1H21c-0.1,0-0.2,0.1-0.2,0.1 C20.8,46,20.7,46,20.4,45.9z M20.5,3.2L20.5,3.2l0.2,0.1V3.2H20.5z M21.2,3.3v0.1c0,0,0.1,0,0.2,0.1V3.4 C21.4,3.4,21.3,3.4,21.2,3.3z M21.2,46.4v0.3h0.1c0.4-0.1,0.6-0.2,0.6-0.3c0,0-0.1,0-0.1-0.1l-0.1,0.1h-0.1c0,0-0.1,0-0.1-0.1 C21.4,46.4,21.3,46.4,21.2,46.4z M22,46.3L22,46.3l0.2,0.1v-0.1H22z M22,48.2v0.1h0.1L22,48.2L22,48.2z M22.3,48v0.1h0.1 C22.5,48,22.4,48,22.3,48z M22.5,46.2L22.5,46.2l0.1,0.1v-0.1H22.5z M22.6,4L22.6,4l0.2,0.1V4H22.6z M22.9,45.8V46 c0,0.1,0.2,0.2,0.4,0.2h0.1C23.5,46,23.3,45.9,22.9,45.8z M23.3,48.9h0.1c0.1,0,0.1,0,0.1-0.1v-0.1h-0.1 C23.4,48.7,23.3,48.8,23.3,48.9z M23.3,1.8L23.3,1.8l0.1,0.1V1.8H23.3z M23.5,46.2L23.5,46.2l0.1,0.1v-0.1H23.5z M24.9,45.1 c0,0.1,0,0.2-0.1,0.2h-0.1l-0.1-0.1c0,0.2,0,0.3-0.1,0.3c-0.2,0-0.4-0.1-0.6-0.2h-0.2v0.1c0.2,0,0.3,0.2,0.4,0.6h0.3 c0-0.1,0.1-0.1,0.3-0.2c0.4,0.2,0.6,0.4,0.6,0.5h-0.1c0,0.4,0.1,0.6,0.2,0.6h0.1c0.1,0,0.1-0.1,0.2-0.3c-0.1,0-0.2-0.2-0.4-0.5 L25,46v-0.1c0.2-0.2,0.4-0.4,0.4-0.6c-0.1,0-0.1,0-0.1-0.1l-0.1,0.1L24.9,45.1z M23.7,48.9c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H23.7z M24.3,3.6l-0.1,0.4V4h0.1l0.1-0.4H24.3z M24.5,12.4L24.5,12.4c0.1,0.1,0.1,0.1,0.1,0.2h0.3C24.9,12.6,24.8,12.5,24.5,12.4 L24.5,12.4z M24.6,12.2L24.6,12.2l0.2,0.1v-0.1H24.6z M24.6,46.3v0.1h0.1C24.7,46.3,24.7,46.3,24.6,46.3z M24.7,46.6 c0,0.1,0.1,0.2,0.1,0.2h0.1c0.1,0,0.1-0.1,0.2-0.2c-0.1,0-0.1,0-0.1-0.1C24.7,46.5,24.7,46.6,24.7,46.6z M24.7,2.7L24.7,2.7 c0,0.2,0.1,0.2,0.2,0.2c0.3-0.3,0.6-0.4,1-0.4c0,0.1,0.1,0.1,0.2,0.2h0.1l0.1-0.5c0-0.1-0.2-0.2-0.6-0.2c-0.3,0.1-0.5,0.3-0.6,0.7 H24.7z M24.7,30.2L24.7,30.2c0.1,0.1,0.2,0.1,0.3,0.1v-0.1H24.7z M24.7,42.8L24.7,42.8l0.1,0.1v-0.1H24.7z M24.8,6.5 c0,0.1,0.3,0.2,0.9,0.4c-0.1-0.3-0.3-0.4-0.5-0.4l-0.1,0.1C25,6.5,24.9,6.5,24.8,6.5z M24.8,43.6L24.8,43.6l0.1,0.1v-0.1H24.8z M24.9,19.4v0.1c0.1,0,0.1,0,0.1-0.1H24.9z M24.9,23.9L24.9,23.9c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0.1,0.2,0.1c0-0.1,0.1-0.1,0.4-0.1 v-0.2C25.2,23.7,24.9,23.8,24.9,23.9z M24.9,41.1c0,0.1,0.2,0.2,0.7,0.2c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1c0-0.1-0.2-0.2-0.7-0.3 C25.1,41,25,41.1,24.9,41.1z M25,27.8L25,27.8l0.3,0.1v-0.1H25z M25,32c0,0.2,0.2,0.3,0.6,0.4v-0.2C25.2,32,25,32,25,32z M25.1,18.1c0.1,0,0.2,0,0.3,0.1l0.1-0.1v-0.3h-0.1C25.2,17.9,25.2,18,25.1,18.1z M25.1,23.1l0.1,0.1h0.2v-0.1c0-0.1,0-0.1-0.1-0.1 h-0.1C25.1,22.9,25.1,23,25.1,23.1z M25.2,37.5L25.2,37.5l0.2,0.1v-0.1H25.2z M25.2,30.4v0.1c0,0,0.1,0.1,0.2,0.2 c0.1,0,0.2-0.1,0.4-0.1C25.9,30.5,25.6,30.4,25.2,30.4z M25.4,47L25.4,47c0.1,0.1,0.2,0.2,0.4,0.4h0.1l-0.1-0.1l0.1-0.1L25.6,47 C25.6,47,25.5,47,25.4,47z M25.5,19v0.1c0.1,0,0.2,0.1,0.2,0.2c0.1,0,0.1,0,0.1-0.1L25.5,19z M25.5,27.4v0.1h0.3 c0-0.1,0-0.1-0.1-0.1H25.5z M25.6,27.8c0,0,0,0.1-0.1,0.2l0.1,0.1h0.4v-0.2L25.6,27.8z M25.7,43c0,0.1,0,0.2-0.1,0.4h0.3 c0.1,0,0.1,0,0.1-0.1V43H25.7z M25.6,32.5L25.6,32.5l0.1,0.1v-0.1H25.6z M25.6,45.1h0.1v-0.1C25.7,44.9,25.6,45,25.6,45.1z M25.7,13.5L25.7,13.5l0.2,0.1v-0.1H25.7z M25.7,19.5l0.1,0.1h0.1v-0.2h-0.1C25.8,19.4,25.7,19.5,25.7,19.5z M25.7,20.7L25.7,20.7 c0.1,0.2,0.1,0.3,0.1,0.4h0.4c0,0,0-0.1-0.1-0.1l0.1-0.1c0-0.1,0-0.1-0.1-0.1H25.7z M25.7,32.1L25.7,32.1l0.1,0.1v-0.1H25.7z M25.7,37.5L25.7,37.5l0.1,0.1v-0.1H25.7z M25.8,5.7v0.1H26V5.7H25.8z M25.8,12.4L25.8,12.4l0.2,0.1v-0.1H25.8z M25.9,31.1 L25.9,31.1l0.4,0.1v-0.1H25.9z M25.9,37.7v0.1c0,0.1,0.2,0.2,0.5,0.2c-0.1-0.2-0.1-0.4-0.2-0.4H25.9z M25.9,32.3 c0,0.1,0.1,0.2,0.1,0.2h0.4v-0.2H25.9z M25.9,32.8l0.1,0.1h0.2c0.5-0.1,0.8-0.2,0.8-0.4c-0.3,0-0.5,0-0.5-0.1 C26.1,32.7,25.9,32.8,25.9,32.8z M26,11.7v0.1h0.1v-0.1H26z M26,13.4v0.2l0.4,0.1v-0.1C26.3,13.5,26.2,13.5,26,13.4L26,13.4z M26,48.2L26,48.2l0.1,0.1v-0.1H26z M26.2,1.5l-0.1,0.2C26.2,1.8,26.2,2,26.2,2C26.3,2,26.4,2,26.5,2V1.9h-0.1V1.8h0.1 C26.5,1.7,26.4,1.6,26.2,1.5z M26.1,12.4v0.1h0.1C26.2,12.5,26.2,12.4,26.1,12.4z M26.2,19.9c0,0.1-0.1,0.2-0.1,0.4 c0.3,0.1,0.5,0.2,0.8,0.4H27v-0.1c-0.1,0-0.2-0.1-0.4-0.4L26.2,19.9z M26.1,42.8L26.1,42.8l0.4,0.1v-0.1H26.1z M26.1,48.4 L26.1,48.4c0,0.2,0.1,0.2,0.1,0.4h-0.1c0,0.1,0.1,0.2,0.1,0.4h0.1l0.1-0.1l-0.1-0.1v-0.4L26.1,48.4z M26.3,12.2L26.3,12.2l0.1,0.1 v-0.1H26.3z M26.3,29v0.1h0.1C26.4,29,26.4,29,26.3,29z M26.3,11.2L26.3,11.2c0,0.2,0.2,0.2,0.6,0.3v-0.1c0-0.1-0.1-0.1-0.2-0.2 H26.3z M26.3,18.9v0.2c0.1,0,0.2,0.1,0.4,0.2h0.1v-0.1C26.7,19,26.5,18.9,26.3,18.9z M26.4,14.5v0.1h0.2v-0.1 C26.6,14.6,26.5,14.5,26.4,14.5z M26.5,13.2L26.5,13.2l0.4,0.1v-0.1c-0.1,0-0.1,0-0.1-0.1C26.6,13.2,26.5,13.2,26.5,13.2z M26.5,17 L26.5,17l0.1,0.1V17H26.5z M26.5,29.3c0.1,0.3,0.2,0.5,0.3,0.5c0.4,0,0.7-0.1,0.8-0.1v-0.1c-0.3,0-0.5-0.1-0.5-0.2l-0.1,0.1 l-0.3-0.2H26.5z M26.5,31.5L26.5,31.5l0.2,0.1v-0.1C26.6,31.5,26.5,31.5,26.5,31.5z M26.6,1.6c0.1,0.2,0.2,0.3,0.4,0.3 c0.1,0,0.2-0.1,0.2-0.1c0,0,0,0.1,0.1,0.1V1.7c-0.1,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0.1L26.6,1.6L26.6,1.6z M26.6,11.8 c0,0.4,0.1,0.6,0.4,0.6l0.1-0.1C26.8,12.1,26.7,12,26.6,11.8L26.6,11.8z M26.6,22v0.1h0.1L26.6,22L26.6,22z M26.7,22.2l-0.1,0.1 v0.1c0.1-0.1,0.2-0.1,0.4-0.1v-0.1L26.7,22.2z M26.6,24.7v0.1h0.2C26.8,24.7,26.8,24.7,26.6,24.7L26.6,24.7z M27.1,31.7v0.1h-0.4 c-0.1,0-0.1,0.1-0.1,0.1l0.1,0.1h0.6L27.1,31.7c0.1,0.1,0.1,0,0.1,0H27.1z M26.6,48.7L26.6,48.7l0.2,0.1v-0.2h-0.1 C26.7,48.5,26.6,48.6,26.6,48.7z M26.7,25c0,0.1,0.1,0.1,0.1,0.1H27c0-0.1,0-0.1-0.1-0.1H26.7z M26.8,1.2L26.8,1.2l0.1,0.1V1.2 H26.8z M26.8,6.8c0,0.1,0.1,0.1,0.1,0.1V6.8H26.8z M26.8,28.9V29l0.4,0.1h0.1V29C27.2,29,27,29,26.8,28.9z M26.8,40.3l0.1,0.4 c0.2-0.1,0.3-0.2,0.4-0.4H26.8z M26.8,33.6L26.8,33.6c0,0.2,0.1,0.2,0.1,0.2h0.1v-0.1c0-0.1,0-0.1-0.1-0.1H26.8z M26.8,39.8 L26.8,39.8l0.2,0.1v-0.1H26.8z M27,1.4v0.1h0.2V1.5C27.1,1.5,27.1,1.5,27,1.4z M27,18.2L27,18.2l0.5,0.1c0-0.1,0-0.1-0.1-0.1 L27,18.2z M27,18.4v0.1h0.1C27.1,18.4,27.1,18.4,27,18.4z M27.1,6.7v0.1h0.1c0.1,0,0.2-0.1,0.2-0.1V6.7H27.1z M27.1,11.1L27.1,11.1 c0,0.1,0.1,0.2,0.4,0.4h0.1c0.2-0.1,0.3-0.2,0.4-0.2v-0.1c-0.4-0.1-0.6-0.1-0.6-0.2C27.2,11.1,27.1,11.1,27.1,11.1z M27.1,22 L27.1,22l0.2,0.1V22H27.1z M27.1,37.8v0.1c0,0,0.1,0,0.2,0.1v-0.2H27.1z M27.2,40L27.2,40l0.2,0.1c0.1,0,0.1-0.1,0.2-0.2v-0.1 C27.3,39.8,27.2,39.9,27.2,40z M27.7,6.9c-0.1,0-0.2-0.1-0.3-0.1L27.3,7v0.1c0.2,0,0.4,0,0.6,0.1c0,0,0-0.1,0.1-0.1L27.8,7L28,6.8 V6.8h-0.1L27.7,6.9z M27.4,2.2l-0.1,0.1c0.1,0,0.2,0.1,0.2,0.1c0.2-0.1,0.3-0.1,0.3-0.2C27.8,2.3,27.7,2.2,27.4,2.2z M27.3,26.9 c0,0.1,0.1,0.1,0.1,0.1h0.1C27.5,26.9,27.5,26.9,27.3,26.9L27.3,26.9z M27.3,30.3c0.1,0.2,0.3,0.4,0.6,0.4l0.1-0.1 c-0.1,0-0.3-0.1-0.5-0.2H27.3z M27.4,18L27.4,18c0.1,0.1,0.2,0.1,0.3,0.2l0.1-0.1V18H27.4z M27.4,24.8L27.4,24.8l0.1,0.1v-0.1H27.4 z M27.5,29l0.1,0.1c0,0.1-0.1,0.1-0.2,0.1v0.1c0.3,0.1,0.5,0.2,0.6,0.2H28v-0.1l-0.1-0.2l0.1-0.1L27.8,29H27.5z M27.5,23.4 c0.1,0,0.2,0.1,0.2,0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1c0-0.1,0-0.1-0.1-0.1h-0.1C27.6,23.2,27.5,23.3,27.5,23.4z M27.5,25.4l-0.1,0.1 l0.1,0.1h0.1C27.8,25.5,27.7,25.5,27.5,25.4z M27.5,26L27.5,26l0.2,0.1V26H27.5z M27.5,27.1l-0.1,0.1l0.1,0.1l0.1-0.1L27.5,27.1z M27.5,18.9L27.5,18.9c0,0.2,0.1,0.2,0.1,0.2h0.1V19C27.7,19,27.6,19,27.5,18.9z M27.5,27.5v0.2c0,0.1,0.1,0.1,0.2,0.2l0.1-0.1 C27.8,27.6,27.7,27.5,27.5,27.5L27.5,27.5z M27.5,41.7v0.1h0.2c0.2,0,0.3,0.1,0.4,0.3h0.2l0.1-0.2v-0.1c-0.2,0-0.3,0-0.3-0.1 c-0.2,0-0.3,0.1-0.3,0.1L27.5,41.7z M27.6,36.5L27.6,36.5l0.3,0.1v-0.1H27.6z M27.7,11L27.7,11l0.2,0.1V11H27.7z M28,11.7 c0,0.1-0.1,0.2-0.3,0.3l1,0.3h0.1v-0.1c-0.4-0.2-0.6-0.4-0.6-0.5H28z M27.7,19.3h0.1v-0.1C27.7,19.2,27.7,19.3,27.7,19.3z M27.7,38.5c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H27.7z M27.8,21.7v0.1h0.1L27.8,21.7L27.8,21.7z M27.8,25.8v0.1l0.4,0.1v-0.1 c0-0.1,0-0.1-0.1-0.1H27.8z M27.9,9.2L27.9,9.2L28,9.3V9.2H27.9z M27.9,39.5L27.9,39.5l0.1,0.1v-0.1H27.9z M28,39.1L28,39.1 c0,0.1,0.1,0.1,0.2,0.1v-0.1H28z M28,41L28,41l0.1,0.1V41H28z M28.1,6.3L28,6.5v0.2h0.4V6.6C28.4,6.5,28.3,6.4,28.1,6.3z M28.1,31.4c0,0,0,0.1-0.1,0.2c0.1,0,0.1,0.1,0.1,0.2h0.6v-0.1c0-0.1-0.1-0.2-0.3-0.2c-0.1,0-0.2,0.1-0.2,0.1 C28.2,31.5,28.2,31.4,28.1,31.4z M28,38.8L28,38.8l0.1,0.1v-0.1H28z M28,41.5L28,41.5l0.1,0.1v-0.1H28z M28.1,39.3v0.2h0.2v-0.2 H28.1z M28.5,4.2c-0.1,0-0.2-0.1-0.3-0.1l-0.1,0.1l0.4,0.2C28.8,4.4,29,4.3,29,4.2V4.1h-0.2L28.5,4.2z M28.2,29.3v0.1 c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1l-0.1-0.1c0,0,0.1,0,0.1-0.1H28.2z M28.3,6.8L28.3,6.8l0.1,0.1V6.8H28.3z M28.3,13.1v0.1l0.3,0.1 v-0.1L28.3,13.1z M28.3,22.3L28.3,22.3l0.2,0.1v-0.1H28.3z M28.4,38.5L28.4,38.5l0.3,0.1v-0.1H28.4z M28.4,42.7L28.4,42.7l0.1,0.1 v-0.1H28.4z M28.6,7L28.6,7l0.3,0.1C28.9,7,28.8,7,28.6,7L28.6,7z M28.6,40.9v0.3h0.3L28.8,41c0-0.1,0.1-0.1,0.3-0.1 c0-0.1-0.1-0.1-0.2-0.2h-0.1C28.7,40.6,28.7,40.7,28.6,40.9z M28.8,41.7l-0.1,0.1v0.1H29v-0.1C29,41.7,28.9,41.7,28.8,41.7z M28.8,22.7l0.1,0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1H28.8z M28.9,41.3L28.9,41.3c0.1,0.2,0.1,0.3,0.1,0.4h0.2 C29.1,41.4,29,41.3,28.9,41.3L28.9,41.3z M29,44.9V45h0.1C29.2,44.9,29.1,44.9,29,44.9z M29.1,32.6L29.1,32.6l0.1,0.1v-0.1H29.1z"
                }, void 0, false, {
                  fileName: "app/ui/components/Preloader/index.tsx",
                  lineNumber: 41,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                  fill: "#fff",
                  d: "M38.5,0.1h2.7c0.1,0,0.3,0,0.4,0.1c0.2-0.1,0.3-0.1,0.4-0.1h2c1.1,0,2.1,0.5,3.1,1.6 c0.7,0.9,1,1.9,1,3v3.4c0,0.1,0,0.1-0.1,0.1c0-0.1,0-0.1-0.1-0.1h-0.1l-0.1,0.4c0.2,0,0.3,0.1,0.4,0.3V10c0,0,0,0.1-0.1,0.1 l0.1,0.1v2.2c0,0.1,0,0.1-0.1,0.1c0-0.1,0-0.1-0.1-0.1h-0.2v0.1c0.1,0,0.3,0.2,0.5,0.5v2.5c0,0.1-0.1,0.1-0.3,0.1l0.3,0.3v0.9 c0,0.1-0.2,0.2-0.5,0.2v0.1c0.1,0,0.2,0,0.2,0.1l0.1-0.1c0.1,0,0.1,0.1,0.1,0.1v1.3L48,18.7l-0.1-0.1c-0.1,0-0.1,0.1-0.2,0.2 c0.3,0.1,0.4,0.2,0.4,0.3v1.3c0,0.1,0,0.2-0.1,0.3c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.1-0.1,0.1l0.1,0.1l-0.1,0.2 c0.1,0,0.1,0.1,0.2,0.2v0.6c0,0.1-0.1,0.1-0.2,0.1l0.2,0.3V27c0,0.1-0.1,0.1-0.3,0.1c0.2,0.3,0.3,0.5,0.3,0.6c0,0,0,0.1-0.1,0.1 l0.1,0.4V30c0,0.1-0.1,0.2-0.4,0.2c0,0.1,0.1,0.2,0.4,0.4v4.1c0,0.1-0.1,0.1-0.2,0.2l-0.4-0.1v-0.1l0.2-0.3 c-0.3-0.3-0.6-0.4-0.8-0.4v0.1c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1l0.1,0.1l-0.5,0.6l0.6,0.4c0.1,0,0.2-0.1,0.2-0.3h0.1l0.1,0.1v-0.1 h0.2v4.1L48,39.2c-0.1,0-0.2-0.1-0.4-0.4h-0.1c0.2,0.4,0.4,0.6,0.6,0.6v0.7c0,0.1,0,0.2-0.1,0.3c0.1,0.2,0.1,0.4,0.1,0.6v3.4 c0,0.6-0.1,0.8-0.2,0.8h-0.1v0.1c0.2,0,0.4,0,0.4,0.1v2.7h-0.4v0.1l0.1,0.2c-0.1,0-0.1,0.1-0.1,0.1l0.1,0.1H48v-0.3 c0.1,0,0.1,0.1,0.1,0.1v0.8c0,0.1-0.2,0.2-0.4,0.2h-3.9c-0.3,0-0.5-0.2-0.5-0.5V48l0.2-0.3c-0.1,0-0.2,0-0.2-0.1 c0.1,0,0.2-0.1,0.3-0.1c0-0.1-0.1-0.1-0.3-0.2c0-1.2-0.1-2.1-0.1-2.8v-2.7l0.4-0.1c0,0,0,0.1,0.1,0.1l-0.1,0.1V42h0.2 c0-0.2,0.1-0.3,0.4-0.3v-0.1l-0.9-0.6v-0.3h0.2c0-0.1-0.1-0.1-0.2-0.1V40c0-0.9,0-1.4,0.1-1.6c0-0.6-0.1-1.3-0.1-2v-2.9h0.1 l0.3,0.2c0.2-0.1,0.3-0.2,0.5-0.2l0.1,0.1l0.1-0.1c-0.3,0-0.7-0.1-1.1-0.4V33l0.1-0.2c-0.1,0-0.1,0-0.1-0.1v-1.4h0.1 c0.1,0.3,0.2,0.5,0.3,0.5h0.1v-0.2c-0.1-0.4-0.2-0.6-0.3-0.6h-0.2v-0.1c0-0.2,0-0.3,0.1-0.4l-0.1-0.4v-0.3c0,0,0-0.1,0.1-0.1 l-0.1-0.1v-2.3c0-0.1-0.2-0.2-0.6-0.4c0,0,0-0.1-0.1-0.1c0,0.1-0.1,0.2-0.1,0.2h-2.7l-0.5,0.1v3l-0.1,0.1l-0.4-0.1l0.1-0.1V30 c-0.1-0.1-0.1-0.2-0.1-0.3h-0.1l0.1,0.1c-0.1,0-0.1,0.1-0.1,0.1c0.1,0,0.1,0.1,0.1,0.1l-0.1,0.1c0.1,0,0.1,0.1,0.1,0.2h0.4 c0.1,0,0.1,0.1,0.1,0.1v0.2c0,0,0,0.1-0.1,0.1l0.1,0.1v17.9l0.1,0.5c-0.2,0.2-0.3,0.4-0.4,0.4c-0.1,0-0.2,0-0.3-0.1 c0,0-0.2,0-0.4,0.1c-1.8,0-2.7-0.1-2.7-0.3c-0.3-0.1-0.6-0.4-0.9-0.7v-1.3l0.1-0.4h-0.1v-7.5l0.1-0.2v-0.1L34.5,39v-6.8l0.4,0.1 v-0.1c0-0.1-0.1-0.1-0.4-0.1v-4.9c0-0.1,0.1-0.2,0.4-0.2c0-0.2-0.1-0.4-0.4-0.4v-2.5c0-0.1,0.1-0.1,0.2-0.1v-0.1 c-0.1,0-0.2-0.1-0.2-0.2c0-0.8,0-2.6-0.1-5.3l0.1-0.1c0-0.1-0.1-0.2-0.1-0.3v-0.6c0-0.3,0.1-0.5,0.3-0.5v-0.1l-0.3-0.3v-1.6 c0-0.7,0-1.5-0.1-2.4c0-0.6,0.1-1,0.2-1.1c-0.1-0.2-0.2-0.4-0.2-0.8V9.6c0-0.1,0.1-0.1,0.1-0.1c0,0.1,0.1,0.2,0.1,0.2h0.1 c0-0.1,0-0.2,0.1-0.3c-0.1,0-0.1-0.1-0.2-0.2c0.1,0,0.2-0.1,0.2-0.1V8.9c0-0.1,0-0.1-0.1-0.1h-0.1v0.1h-0.1V8.5c0,0,0-0.1,0.1-0.1 l-0.1-0.1V7.5c0.1,0,0.2,0,0.2-0.1h-0.2V6.2c0-0.3,0-0.6-0.1-1.1c0.1-1.5,0.4-2.6,0.8-3.1c0.2,0,0.4,0.1,0.6,0.2 c0-0.1,0.1-0.1,0.2-0.1V2c-0.1-0.2-0.2-0.3-0.4-0.4C35.9,1,36.5,0.6,37,0.6l-0.1-0.1V0.4C37.5,0.2,38,0.1,38.5,0.1z M34.6,4.4 l-0.1,0.3l0.4,0.3h0.1c0-0.1,0-0.2,0.1-0.4C34.9,4.6,34.8,4.5,34.6,4.4z M34.6,9.8c0,0.1,0,0.2-0.1,0.3c0.1,0,0.2,0,0.3,0.1V10 C34.8,9.9,34.8,9.8,34.6,9.8L34.6,9.8z M34.6,49.3L34.6,49.3c0.1,0,0.2,0.1,0.4,0.4v0.1h-0.1C34.9,49.7,34.7,49.6,34.6,49.3 L34.6,49.3z M34.6,22.9V23c0,0.1,0.1,0.1,0.1,0.1h0.1c0.1,0,0.1,0,0.1-0.1s0-0.1-0.1-0.1H34.6z M34.8,10.3l-0.1,0.1 c0,0.1,0.1,0.1,0.1,0.1h0.1c0.1,0,0.1-0.1,0.2-0.2L34.8,10.3z M34.8,13.3L34.8,13.3l0.1,0.1v-0.1H34.8z M34.8,27.8v0.1h0.1 L34.8,27.8L34.8,27.8z M34.8,28.5v0.1h0.1C34.9,28.5,34.9,28.5,34.8,28.5z M34.8,38.7L34.8,38.7l0.1,0.1v-0.1H34.8z M34.8,47.7 c0,0.1,0.1,0.1,0.2,0.2h0.1c0-0.1-0.1-0.2-0.1-0.2H34.8z M34.8,6L34.8,6L35,6.1V6H34.8z M34.8,6.3L34.8,6.3L35,6.4V6.3H34.8z M34.9,10.6l-0.1,0.1c0.1,0.2,0.2,0.3,0.2,0.4L35,11.3c0.1,0.2,0.3,0.6,0.4,1.1c0.1,0,0.2,0.1,0.3,0.1h0.1 c-0.2-0.5-0.3-0.7-0.4-0.8v-0.1c0.3,0.1,0.5,0.1,0.6,0.1c-0.2-0.2-0.3-0.4-0.4-0.6C35.3,10.9,35.1,10.8,34.9,10.6z M34.9,5.1 L34.9,5.1l0.4,0.1V5.1H34.9z M35.1,13.2v0.1c0.1,0,0.2,0,0.3,0.1l0.1-0.1v-0.3C35.3,13.2,35.2,13.2,35.1,13.2z M35.1,16.1 L35.1,16.1l0.1,0.1v-0.1H35.1z M35.1,18.1c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H35.1z M35.1,25.9L35.1,25.9l0.4,0.1v-0.1H35.1z M35.1,27.9L35.1,27.9l0.1,0.1v-0.1H35.1z M35.1,5.9L35.1,5.9c0,0.2,0.1,0.2,0.1,0.2h0.1V6L35.1,5.9z M35.1,19.2v0.1h0.1L35.1,19.2 L35.1,19.2z M35.1,28.1v0.1c0.1,0,0.2,0,0.3,0.1v-0.1C35.3,28.2,35.2,28.2,35.1,28.1z M35.1,46.1L35.1,46.1l0.4,0.1 c0.1,0,0.2-0.1,0.2-0.1l-0.1-0.1C35.5,46.1,35.3,46.1,35.1,46.1z M35.2,27.6L35.2,27.6c0.1,0.1,0.2,0.1,0.4,0.2c0,0,0-0.1,0.1-0.2 H35.2z M35.2,31.4v0.1h0.1v-0.1H35.2z M35.3,19.2c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H35.3z M35.3,32.4c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1 H35.3z M35.3,33.6L35.3,33.6l0.1,0.1v-0.1H35.3z M35.3,36.9v0.1h0.1C35.5,37,35.4,36.9,35.3,36.9z M35.3,47.3v0.2l0.4,0.1v-0.1 c0-0.1-0.1-0.1-0.2-0.2H35.3z M35.4,15.1v0.1c0,0.1,0.2,0.2,0.6,0.4c0-0.1,0.1-0.1,0.1-0.1c0-0.1-0.1-0.2-0.1-0.2 c-0.2,0-0.3,0.1-0.3,0.1L35.4,15.1L35.4,15.1z M35.4,18.7L35.4,18.7l0.1,0.2c0.2,0,0.5-0.1,0.7-0.1v-0.1c-0.3,0-0.4,0-0.4-0.1 C35.7,18.7,35.6,18.7,35.4,18.7z M35.4,25.4c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H35.4z M35.5,46.5v0.1h0.1L35.5,46.5L35.5,46.5z M35.6,11.7c0,0.1,0.1,0.1,0.1,0.1h0.1C35.8,11.7,35.8,11.7,35.6,11.7L35.6,11.7z M35.6,21.2c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1H35.6z M35.6,47.7c0,0.1,0.1,0.2,0.1,0.2H36c-0.1-0.2-0.2-0.3-0.2-0.3C35.7,47.7,35.7,47.7,35.6,47.7z M35.7,14.8L35.7,14.8l0.7,0.1v-0.1 H35.7z M35.8,2.3L35.8,2.3C35.9,2.4,36,2.4,36,2.5c0.1,0,0.2-0.1,0.2-0.1V2.3H35.8z M36,2.9C36,3,35.9,3,35.8,3v0.1h0.4 c0.1,0,0.2,0,0.3,0.1c0.2-0.1,0.3-0.1,0.4-0.1L36.7,3L36.3,3L36,2.9z M35.8,35.6v0.1h0.1v-0.1H35.8z M35.8,16.5H36v-0.1H36 C35.9,16.4,35.8,16.4,35.8,16.5z M35.8,20.4L35.8,20.4l0.3,0.1v-0.1H35.8z M35.9,30.6C35.9,30.6,35.9,30.7,35.9,30.6 c0,0.3,0.1,0.4,0.1,0.4h0.2C36.2,30.9,36.1,30.8,35.9,30.6z M35.8,34.9v0.1H36c0.1,0,0.1,0,0.1-0.1L36,34.8 C35.9,34.8,35.8,34.9,35.8,34.9z M35.9,12c0,0.1,0.1,0.1,0.1,0.1h0.1C36.1,12.1,36.1,12,35.9,12L35.9,12z M35.9,12.8v0.1H36 C36,12.8,36,12.8,35.9,12.8z M35.9,29v0.2c0.2,0,0.4,0,0.4,0.1c0.1,0,0.2-0.1,0.3-0.1c0.1,0.2,0.2,0.3,0.4,0.3l0.1-0.1l0.4,0.2h0.4 v-0.1c0-0.1-0.1-0.1-0.2-0.2l-0.1,0.1c-0.2,0-0.3-0.2-0.4-0.4L35.9,29z M35.9,39c0.1,0,0.2,0.1,0.3,0.4l0.4-0.2 c-0.1-0.3-0.2-0.5-0.2-0.7C36,38.5,35.9,38.6,35.9,39z M35.9,48.3v0.1h0.4c0.1,0,0.1,0,0.1-0.1c0-0.1-0.1-0.2-0.1-0.2h-0.1 C36.1,48.2,36,48.3,35.9,48.3z M36,32.6L36,32.6l0.4,0.1v-0.1H36z M36.1,37.1L36,37.2h0.4v-0.1L36.1,37.1z M36,37.7 c0,0.1,0.1,0.1,0.1,0.1h0.1c0-0.1,0-0.1,0.1-0.1v-0.1h-0.1L36,37.7z M36,41.4L36,41.4l0.2,0.1v-0.1H36z M36,41.7L36,41.7l0.1,0.1 v-0.1H36z M36.1,3.9L36.2,4h0.5V3.9c-0.1,0-0.2,0-0.4-0.1h-0.1C36.2,3.8,36.1,3.9,36.1,3.9z M36.1,5.7L36.1,5.7l0.1,0.1V5.7H36.1z M36.1,21.3L36.1,21.3l0.1,0.1v-0.1H36.1z M36.2,28.4L36.2,28.4l0.1,0.1v-0.1H36.2z M36.2,42.3l-0.1,0.1c0,0.1,0.1,0.1,0.1,0.1 c0.1,0,0.2-0.1,0.2-0.1C36.5,42.4,36.4,42.3,36.2,42.3z M36.2,44.9v0.4c0.1,0,0.2,0,0.3,0.1h0.2v-0.1c-0.2-0.3-0.3-0.5-0.4-0.5 H36.2z M36.2,39.7c0,0.1,0.1,0.2,0.1,0.4h0.4v-0.1c-0.1,0-0.2-0.1-0.4-0.3H36.2z M36.2,46.3v0.2l0.4,0.1l0.1-0.1v-0.1H36.2z M36.4,26.4L36.4,26.4l0.3,0.1v-0.1H36.4z M36.6,18.7c0,0.1,0.1,0.1,0.1,0.1h0.2c0-0.1,0-0.1-0.1-0.1H36.6z M36.6,32.6 c0,0.1,0.1,0.2,0.1,0.2h0.1v-0.1C36.8,32.6,36.8,32.6,36.6,32.6L36.6,32.6z M36.6,41.2L36.6,41.2l0.1,0.1v-0.1H36.6z M36.6,47.4 L36.6,47.4l0.1,0.1v-0.1H36.6z M36.7,7.3c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.1-0.1H36.7z M36.7,15.8c0,0.1,0.1,0.1,0.1,0.1h0.1 v-0.1H36.7z M40.3,3.7v0.1c0.2,0,0.3,0.2,0.4,0.6c0.1,0,0.2,0.1,0.2,0.1v0.1h-1.1l-0.4-0.1c-0.1,0-0.2,0.1-0.4,0.3 c0,0,0,0.1,0.1,0.1c0,0.1,0,0.2-0.1,0.3c0,0.5,0.1,0.9,0.1,1.1v0.2c0,0.1-0.1,0.1-0.3,0.1v0.1c0.2,0,0.3,0,0.3,0.1v5.3 c0,0.1-0.1,0.1-0.4,0.1l0.1,0.1l-0.1,0.1h-0.1c-0.1,0-0.3-0.1-0.6-0.2l-0.1,0.1c-0.4,0-0.6-0.1-0.6-0.2v-0.1h0.2v-0.1h-0.5 c-0.1,0-0.1,0.1-0.2,0.2v0.1c0.2,0,0.3,0,0.3,0.1c0.1,0,0.2-0.1,0.2-0.1c0.2,0.1,0.3,0.1,0.3,0.2c0,0.1-0.1,0.2-0.1,0.3 c0.1,0,0.2,0,0.3-0.1c0.1,0,0.2,0.1,0.3,0.1h0.1c0-0.2,0.2-0.3,0.6-0.3l0.1,0.1l0.1-0.1c0.1,0,0.1,0.1,0.1,0.1v0.3 c0,0.2,0,0.4,0.1,0.6c0,0.4-0.1,0.6-0.1,0.6c0,0.1,0.1,0.4,0.1,1c-0.1,0-0.1,0.1-0.1,0.1v0.1l0.1,0.2v0.7c0,0.1,0,0.2-0.1,0.3 c0,0.1,0.1,0.2,0.1,0.3V17c0,0,0,0.1-0.1,0.1l0.1,0.1v0.4h-0.3v0.1c0.2,0,0.3,0.1,0.3,0.2v0.8l-0.1,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1 l-0.1,0.2v0.2c0.1,0.2,0.2,0.4,0.2,0.8l-0.1,0.5c0,0.2,0.1,0.4,0.1,0.6l-0.1,0.1c0,0.1,0.1,0.2,0.1,0.3l-0.4-0.2v0.1 c0,0.1,0.1,0.1,0.2,0.2l0.1-0.1c0,0.4,0.1,0.6,0.2,0.6h1.4c0.6,0.4,1,0.6,1.2,0.6c0-0.1,0.1-0.1,0.3-0.1l-0.1-0.4 c-0.2,0-0.4,0-0.6,0.1c0-0.1-0.1-0.1-0.4-0.1v-0.1h1.8c0.1,0,0.2-0.2,0.2-0.4V21c0-0.1,0.2-0.1,0.5-0.1v-0.1 c-0.3,0-0.5-0.1-0.5-0.2v-2.3c0,0,0-0.1,0.1-0.1l-0.1-0.1v-3.9c0-0.2,0-0.6-0.1-1.1h0.1l0.2,0.1h0.1c0.1-0.1,0.2-0.1,0.3-0.1 c0.3,0,0.5,0.1,0.6,0.1v-0.1c0-0.1-0.2-0.2-0.6-0.2v-0.1l0.1-0.1l-0.5-0.4v-0.1c0-0.1,0.1-0.2,0.4-0.2c0-0.1-0.2-0.2-0.6-0.4v-2 l0.1,0.1c0.2-0.1,0.3-0.1,0.3-0.2c-0.3,0-0.4-0.1-0.5-0.4V8.9c0-0.6,0-1.1,0.1-1.7c0-0.2-0.1-0.5-0.1-0.8c0.1,0,0.1,0,0.1-0.1 c-0.1,0-0.1,0-0.1-0.1v-1l0.1-0.2l-0.3-0.3h-1c-0.2,0-0.3-0.1-0.5-0.2c0-0.1,0.1-0.2,0.1-0.2c0-0.1-0.1-0.2-0.1-0.4 c-0.2,0.1-0.5,0.2-0.8,0.2c-0.2-0.3-0.3-0.5-0.4-0.5C40.4,3.5,40.3,3.6,40.3,3.7z M36.7,4.3L36.7,4.3l0.1,0.1V4.3H36.7z M36.7,20.6 L36.7,20.6l0.5,0.1v-0.1H36.7z M36.9,21.4L36.9,21.4l0.2,0.1v-0.1H36.9z M36.9,3.6c0,0.1,0.1,0.1,0.1,0.1h0.1 C37.2,3.6,37.1,3.6,36.9,3.6L36.9,3.6z M37,42.2c0.1,0.1,0.2,0.3,0.2,0.6h0.4v-0.1c-0.1,0-0.2,0-0.2-0.1c0-0.1,0.1-0.2,0.4-0.4 h-0.2c0,0-0.1,0-0.1,0.1l-0.1-0.1H37z M37,48.3v0.1h0.3v-0.1L37,48.3z M37,48.7L37,48.7c0.1,0.3,0.3,0.4,0.6,0.4h0.1 C37.7,48.9,37.5,48.8,37,48.7z M37.1,7c0,0.1,0.1,0.1,0.1,0.1V7H37.1z M37.1,45.6L37.1,45.6l0.3,0.1h0.1v-0.1L37.1,45.6L37.1,45.6z M37.2,46.1l-0.1,0.1h0.4v-0.1L37.2,46.1z M37.2,39.7h0.1v-0.1C37.2,39.6,37.2,39.6,37.2,39.7z M37.2,4.1v0.4c0.1,0,0.1,0,0.1,0.1 c0.1,0,0.2-0.1,0.2-0.1V4.4c-0.1,0-0.2,0-0.2-0.1c0-0.1,0.1-0.2,0.1-0.2H37.2z M37.3,24.3c0.2,0.4,0.4,0.5,0.6,0.6V25 c0.1,0,0.2-0.1,0.2-0.1v-0.1c0-0.1-0.2-0.2-0.5-0.4l0.1-0.2H37.3z M37.4,17.7v0.1h0.2v-0.1H37.4z M37.4,18.7v0.1l0.3,0.1 C37.7,18.8,37.6,18.8,37.4,18.7L37.4,18.7z M37.4,41.3l0.3,0.1v-0.1c0-0.1,0-0.1-0.1-0.1C37.4,41.2,37.4,41.3,37.4,41.3z M37.4,5.4 c0.1,0.2,0.2,0.3,0.4,0.4l0.1-0.1h-0.1V5.6l0.1-0.1H37.4z M37.5,7.7v0.1h0.1V7.7H37.5z M37.5,8.4L37.5,8.4l0.1,0.1V8.4H37.5z M37.6,45.7l-0.1,0.1l0.4,0.1v-0.1C37.8,45.8,37.7,45.8,37.6,45.7z M37.6,32.1v0.1h0.2C37.8,32.1,37.7,32.1,37.6,32.1L37.6,32.1z M37.6,39.9L37.6,39.9l0.1,0.1v-0.1H37.6z M37.6,46.1v0.1c0.3,0.3,0.4,0.5,0.4,0.6l0.1,0.1c0,0,0-0.1,0.1-0.1l-0.1-0.1l0.1-0.2 v-0.2c-0.2,0-0.4-0.1-0.6-0.2H37.6z M37.7,34.7L37.7,34.7l0.3,0.1v-0.1H37.7z M37.7,42.4l0.2,0.3c-0.1,0-0.1,0.1-0.2,0.2h0.1 l0.3-0.1C38.1,42.5,37.9,42.4,37.7,42.4z M37.8,10.7c0,0.1,0,0.2-0.1,0.2c0,0.1,0.1,0.2,0.1,0.2h0.4c0.1,0,0.1,0,0.1-0.1 c-0.1-0.2-0.1-0.3-0.2-0.3H37.8z M37.8,17.6l-0.1,0.1c0.2,0,0.3,0,0.4,0.1h0.1v-0.1C38.2,17.8,38,17.7,37.8,17.6z M37.8,8.6 L37.8,8.6l0.1,0.1V8.6H37.8z M37.9,11.5v0.1h0.3c0.1,0,0.1,0,0.1-0.1H37.9z M37.9,1.1L37.9,1.1l0.4,0.1V1.1c0-0.1,0-0.1-0.1-0.1 C38.1,1,38,1.1,37.9,1.1z M38,13.6L38,13.6l0.1,0.1v-0.1H38z M38.1,0.3L38.1,0.3c0.2,0.4,0.3,0.5,0.5,0.5l0.1-0.1 C38.5,0.6,38.3,0.5,38.1,0.3z M38.1,29.9L38.1,29.9l0.1,0.1v-0.1H38.1z M38.1,42.4L38.1,42.4l0.2,0.1v-0.1H38.1z M38.1,2v0.4h0.1 c0.1,0,0.3,0,0.7-0.1V2.2L38.1,2z M38.1,9L38.1,9l0.1,0.1V9H38.1z M38.1,21.6L38.1,21.6c0.2,0,0.2-0.1,0.4-0.1c0,0,0,0.1,0.1,0.1 v-0.1c0-0.1-0.1-0.2-0.1-0.3c0.1,0,0.1-0.1,0.2-0.2V21C38.4,21,38.3,21.2,38.1,21.6z M38.1,29.2c0,0.1,0.1,0.1,0.2,0.2v-0.1 C38.4,29.2,38.3,29.2,38.1,29.2L38.1,29.2z M38.3,4.6l-0.1,0.1l0.1,0.1h0.1C38.5,4.8,38.4,4.7,38.3,4.6z M38.3,18.8V19 c0.1,0,0.1,0,0.1-0.1H38.3z M38.4,3.6L38.4,3.6l0.1,0.1V3.6H38.4z M38.4,5.1v0.2h0.1c0.1,0,0.1-0.1,0.2-0.2c-0.1,0-0.1,0-0.1-0.1 C38.5,5,38.4,5.1,38.4,5.1z M38.6,16.5l-0.1,0.1c0,0,0.1,0,0.1,0.1c-0.1,0-0.2,0.1-0.2,0.1v0.1h0.2c0.1,0,0.1,0,0.1-0.1v-0.1 C38.7,16.6,38.7,16.5,38.6,16.5z M38.4,17.2c0,0.1,0.1,0.1,0.2,0.2h0.1v-0.1c0-0.1,0-0.1-0.1-0.1H38.4z M38.4,47.1L38.4,47.1 l0.1,0.1v-0.1H38.4z M38.4,17.4L38.4,17.4c0,0.1,0.1,0.2,0.2,0.3h0.1l0.1-0.3h-0.1v0.1L38.4,17.4L38.4,17.4z M38.4,38.9 c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1H38.4z M38.5,14.9L38.5,14.9l0.2,0.1v-0.1H38.5z M38.5,32.8L38.5,32.8l0.4,0.1v-0.1H38.5z M38.5,33.2L38.5,33.2c0.1,0.3,0.1,0.4,0.2,0.4h0.2C38.9,33.3,38.8,33.2,38.5,33.2z M38.6,6.1c0,0.1,0.1,0.1,0.1,0.1V6.1H38.6z M38.7,20.3c0,0.3,0,0.4-0.1,0.4c0,0.1,0.1,0.2,0.1,0.2l0.3-0.2l-0.1-0.1c0-0.1,0.1-0.2,0.1-0.2L38.7,20.3L38.7,20.3z M38.6,40.3 l-0.1,0.1c0.2,0.1,0.3,0.1,0.4,0.1v-0.1C38.9,40.4,38.8,40.4,38.6,40.3z M38.6,41.8l-0.1,0.1V42l0.5,0.1 C39.1,42,38.9,41.9,38.6,41.8z M38.7,15.4l-0.1,0.4l0.3,0.1v-0.4H38.7z M38.7,6.3L38.7,6.3l0.1,0.1V6.3H38.7z M38.7,14.7 c0,0.1,0.1,0.1,0.1,0.1h0.1C38.9,14.7,38.9,14.7,38.7,14.7L38.7,14.7z M38.7,39.7v0.2h0.2v-0.2H38.7z M38.8,0.9L38.8,0.9 c0,0.2,0.1,0.2,0.1,0.2H39V1.1C39,1,38.9,0.9,38.8,0.9L38.8,0.9z M38.8,18.8v0.1H39C39,18.8,38.9,18.8,38.8,18.8z M38.8,36v0.1h0.1 L38.8,36L38.8,36z M38.9,29.4L38.9,29.4l0.1,0.1v-0.1H38.9z M39.1,2.2v0.1h0.1C39.2,2.2,39.2,2.2,39.1,2.2z M39.1,3.5v0.1h0.1 L39.1,3.5L39.1,3.5z M39.1,4.4v0.1h0.1V4.4H39.1z M39.1,1.3l0.4,0.4h0.1V1.6c-0.1-0.1-0.2-0.2-0.2-0.3H39.1z M39.3,22.6v0.1h0.1 c0.1,0,0.1,0,0.1-0.1H39.3z M40.3,1.6c0,0.1-0.2,0.2-0.5,0.2v0.1h0.6V1.8C40.5,1.7,40.4,1.6,40.3,1.6z M40.1,1.4L40.1,1.4 c0.2,0,0.2,0,0.2-0.1h-0.1C40.2,1.3,40.1,1.3,40.1,1.4z M40.2,2.5l-0.1,0.1h0.2C40.3,2.5,40.3,2.5,40.2,2.5z M40.4,24.6L40.4,24.6 l0.1,0.1v-0.1H40.4z M40.5,22.6c0,0.1,0.1,0.1,0.1,0.1H41v-0.1L40.5,22.6L40.5,22.6z M40.7,24.8L40.6,25c0,0,0.1,0,0.2,0.1V25 C40.8,24.9,40.8,24.8,40.7,24.8z M41,4c0.1,0,0.2,0.1,0.3,0.3l-0.1,0.1c-0.1,0-0.2-0.1-0.2-0.1V4z M41.3,0.2l-0.1,0.1h0.2 C41.4,0.3,41.4,0.2,41.3,0.2z M41.5,0.6v0.1c0,0,0.3,0.1,0.8,0.2h0.2V0.7c-0.2,0-0.4-0.1-0.5-0.2L41.5,0.6z M41.7,26.1L41.7,26.1 l0.2,0.1v-0.1H41.7z M42.6,1.3l0.1,0.1c-0.3,0.3-0.6,0.4-0.9,0.4v0.1c0.1,0,0.1,0,0.1,0.1C42.6,2,43,1.9,43,1.6L42.6,1.3L42.6,1.3z M42.4,3.6L42.4,3.6l0.2,0.1V3.6H42.4z M42.6,0.8c0,0.1,0.1,0.2,0.1,0.3h0.4V0.9L42.6,0.8z M42.8,0.3c0,0.1,0.1,0.1,0.1,0.1h0.1 c0-0.1,0-0.1-0.1-0.1H42.8z M42.8,3.4L42.8,3.4l0.1,0.1V3.4H42.8z M43.1,1.3L43.1,1.3c0.3,0.2,0.7,0.3,1.1,0.3h0.1V1.5 C43.7,1.4,43.3,1.3,43.1,1.3L43.1,1.3z M43.3,25.2c0,0.1,0,0.2-0.1,0.3h0.1c0.3-0.1,0.5-0.1,0.6-0.1v-0.1 C43.7,25.3,43.5,25.3,43.3,25.2z M43.2,26.4L43.2,26.4l0.1,0.1v-0.1H43.2z M43.3,12.5h0.1v0.2C43.3,12.7,43.3,12.7,43.3,12.5 L43.3,12.5z M43.3,35.1L43.3,35.1l0.1,0.1v-0.1H43.3z M43.4,18.4L43.4,18.4l0.1,0.1v-0.1H43.4z M43.4,19.3c0,0.1,0.1,0.1,0.1,0.1 v-0.1H43.4z M43.4,48.7L43.4,48.7l0.1,0.1v-0.1H43.4z M43.5,24.6v0.2h0.1v-0.2H43.5z M43.5,26.6L43.5,26.6l0.1,0.1v-0.1H43.5z M43.5,43.5L43.5,43.5l0.2,0.1v-0.1H43.5z M43.6,43.8c0,0,0,0.1-0.1,0.2c0.2,0,0.4,0.1,0.4,0.3h0.3v-0.1c-0.1,0-0.2-0.1-0.4-0.4 H43.6z M44.7,9.6l-0.1,0.1v0.4h-0.1c-0.1,0-0.4-0.1-0.9-0.4l-0.1,0.1c0,0.1,0.1,0.1,0.2,0.2c0.1,0,0.2-0.1,0.3-0.1 c0,0.3,0.4,0.4,0.9,0.4c0,0.2,0.3,0.4,0.8,0.5c0.2,0.1,0.5,0.3,0.8,0.5l0.1-0.1v-0.1c-0.1,0-0.2,0-0.2-0.1l0.1-0.1 c-0.1,0-0.3-0.1-0.7-0.3v-0.1l0.1-0.2c-0.2,0-0.4-0.1-0.4-0.4h-0.3C45.2,9.8,45,9.7,44.7,9.6z M43.6,40.7v0.1 c0,0.1,0.1,0.1,0.1,0.1h0.4c0.1,0,0.1,0,0.1-0.1L44,40.7H43.6z M43.7,27l-0.1,0.1v0.1H44c0.1,0,0.2,0,0.3,0.1 c0.1,0,0.2-0.1,0.2-0.1v-0.1C44.1,27,43.9,27,43.7,27z M43.6,28.8c0,0.1,0.1,0.2,0.1,0.2h0.2c0-0.1-0.1-0.2-0.1-0.2H43.6z M43.6,39.2L43.6,39.2l0.2,0.1v-0.1H43.6z M43.7,0.4c0,0.1,0.2,0.2,0.5,0.2C44.2,0.5,44,0.5,43.7,0.4z M43.8,4.6c0,0,0,0.1-0.1,0.2 H44c0.1,0,0.1,0,0.1-0.1L44,4.6H43.8z M43.7,22.1c0,0.1,0.1,0.1,0.1,0.1h0.2c0-0.1,0-0.1-0.1-0.1H43.7z M43.7,22.8v0.1h0.1 L43.7,22.8L43.7,22.8z M43.7,32.4v0.3l0.4,0.1C44.1,32.7,43.9,32.6,43.7,32.4z M43.8,47.6L43.8,48c0.3,0,0.5,0.2,0.5,0.5h0.2 l0.1-0.5C44.6,47.9,44.4,47.8,43.8,47.6z M43.9,3.9L43.9,3.9C44,3.9,44,4,44.1,4l0.1-0.1H43.9z M44,11.2c0,0.1,0.2,0.2,0.6,0.2 c-0.1-0.1-0.1-0.2-0.1-0.3L44,11.2z M44,11.9L44,11.9c0.1,0.1,0.2,0.1,0.3,0.2v-0.2H44z M44,27.7h0.3c0-0.1,0-0.1-0.1-0.1 C44,27.6,44,27.6,44,27.7z M44.1,15.5L44.1,15.5c0.1,0.1,0.2,0.1,0.3,0.2h0.5C44.8,15.7,44.6,15.6,44.1,15.5L44.1,15.5z M44.1,21.8 c0.1,0.3,0.1,0.4,0.2,0.4h0.1v-0.1l-0.1-0.4H44.1z M44.1,31.1v0.3h0.3c0.1,0,0.1-0.1,0.2-0.2v-0.1l-0.1-0.1 C44.3,31.1,44.1,31.1,44.1,31.1z M44.1,43.9L44.1,43.9l0.1,0.2c0.2,0,0.4-0.1,0.5-0.1v-0.1H44.1C44.1,43.9,44.1,43.9,44.1,43.9z M44.1,12.2c0,0.1,0.1,0.1,0.1,0.1l0.4-0.1v-0.1H44.1z M44.1,20.8V21h0.1v-0.1H44.1z M44.1,24.1L44.1,24.1l0.4,0.1v-0.1H44.1z M44.1,29.1L44.1,29.1l0.1,0.1v-0.1H44.1z M44.1,29.4L44.1,29.4c0.1,0.1,0.2,0.2,0.4,0.4c0,0,0-0.1,0.1-0.1l0.1,0.1 c-0.1,0-0.2,0.1-0.3,0.1c0,0.3,0.1,0.4,0.1,0.6h0.2l0.2-0.1H45l0.2,0.1h0.1c0-0.1-0.1-0.2-0.1-0.2c0-0.1,0.1-0.2,0.1-0.2 c-0.3-0.1-0.5-0.2-0.6-0.2v-0.1h0.1v-0.1c-0.3,0-0.4-0.1-0.4-0.2H44.1z M44.3,14.3l-0.1,0.1l0.2,0.1h0.1v-0.2 C44.4,14.4,44.4,14.4,44.3,14.3z M44.3,49.1c0,0.1,0,0.2-0.1,0.3c0.2,0.1,0.3,0.1,0.4,0.1h0.1c-0.1-0.3-0.2-0.4-0.3-0.4H44.3z M44.3,40.6v0.1h0.1L44.3,40.6L44.3,40.6z M44.3,48.7v0.3h0.1c0.1,0,0.1,0,0.1-0.1v-0.1H44.3z M44.3,7.8c0,0.1,0.1,0.2,0.4,0.4h0.1 V7.9L44.3,7.8z M44.3,18.1v0.1h0.1v-0.1H44.3z M44.4,37c0,0,0,0.1-0.1,0.2l0.1,0.1h0.1c0.1,0,0.1,0,0.1-0.1v-0.1 C44.6,37.1,44.5,37,44.4,37z M44.4,12.4L44.4,12.4l0.1,0.1v-0.1H44.4z M44.5,33.6c0.1,0.1,0.1,0.2,0.1,0.3h0.1c0,0,0-0.1,0.1-0.2 L44.5,33.6z M44.5,21.7v0.1h0.3c0-0.1,0-0.1-0.1-0.1H44.5z M44.6,32.3l-0.1,0.1l0.1,0.1h0.2v-0.1L44.6,32.3z M44.6,4.4L44.6,4.4 c0.1,0.2,0.2,0.3,0.2,0.4H45V4.6C44.9,4.6,44.8,4.6,44.6,4.4L44.6,4.4z M44.7,1L44.7,1l0.1,0.1V1H44.7z M44.7,22.1L44.7,22.1 l0.1,0.1v-0.1H44.7z M44.8,12L44.8,12c0,0.1,0.1,0.2,0.2,0.3c0.1,0,0.1,0,0.1-0.1s0-0.1-0.1-0.1H44.8z M44.8,16.8L44.8,16.8 l0.1,0.1v-0.1H44.8z M44.8,34v0.1h0.1C44.9,34.1,44.8,34,44.8,34z M44.8,47.9L44.8,47.9L45,48v-0.1H44.8z M44.8,16.5L44.8,16.5 l0.2,0.1v-0.1H44.8z M44.8,39v0.1h0.4v-0.1L44.8,39z M44.8,41c0.1,0.1,0.2,0.1,0.3,0.1v0.1L45,41.3l0.1,0.1c0.1,0,0.1-0.1,0.2-0.2 L45,40.9C44.9,40.9,44.8,40.9,44.8,41z M45,1.1l-0.1,0.1L45,1.3h0.1V1.3C45.1,1.2,45.1,1.1,45,1.1z M44.9,11.6l0.1,0.1 c0.1,0,0.2-0.1,0.3-0.1v-0.1H44.9z M44.9,28.3L44.9,28.3l0.1,0.1v-0.1H44.9z M45,48.4L45,48.4l0.3,0.1v-0.1H45z M45,36.1L45,36.1 c0,0.1,0.1,0.1,0.2,0.1v-0.1H45z M45.1,26.3L45.1,26.3c0,0.1,0.1,0.1,0.2,0.1h0.1v-0.1C45.3,26.4,45.3,26.3,45.1,26.3L45.1,26.3z M45.2,12.4L45.2,12.4l0.2,0.1v-0.1H45.2z M45.2,28.6L45.2,28.6l0.1,0.1v-0.1H45.2z M45.2,44.6L45.2,44.6c0.2,0.1,0.3,0.2,0.3,0.4 c0.2-0.1,0.3-0.1,0.4-0.1C45.9,44.8,45.7,44.7,45.2,44.6L45.2,44.6z M45.3,16.6v0.1h0.1L45.3,16.6L45.3,16.6z M45.3,43.5v0.2 l0.5,0.1c0-0.1-0.1-0.2-0.3-0.3H45.3z M45.4,3.5L45.4,3.5l1.1,0.3c0.1,0,0.2-0.1,0.3-0.3l-0.4,0.1h-0.1c-0.2-0.2-0.3-0.3-0.4-0.3 C45.6,3.4,45.5,3.5,45.4,3.5z M45.4,24v0.1h0.1C45.5,24,45.5,24,45.4,24z M45.4,41.9c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.1-0.1 c0,0-0.1,0-0.1-0.1C45.5,41.9,45.4,41.9,45.4,41.9z M45.5,17.6L45.5,17.6l0.1,0.1v-0.1H45.5z M45.5,24.3c0,0.1,0.1,0.1,0.2,0.2 c0.1,0,0.1,0,0.1-0.1v-0.1l-0.1,0.1C45.6,24.4,45.5,24.3,45.5,24.3z M45.5,34.7L45.5,34.7l0.2,0.1v-0.1H45.5z M45.5,42.9L45.5,43 h0.3V43C45.7,43,45.6,42.9,45.5,42.9z M45.5,7.8v0.1h0.2C45.7,7.9,45.7,7.8,45.5,7.8L45.5,7.8z M45.5,8.6v0.1h0.1L45.5,8.6 L45.5,8.6z M46.2,39.1c0,0.1-0.1,0.3-0.3,0.4c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.2,0.1-0.2,0.1l0.6,0.4c0,0,0.1-0.1,0.3-0.4 c-0.1-0.1-0.1-0.2-0.1-0.3H46.2z M45.5,41.1v0.1c0.2,0,0.4,0,0.4,0.1c0.1,0,0.2-0.1,0.2-0.1L46,41.1l-0.1,0.1L45.5,41.1z M45.6,4.7 v0.1c0.1,0,0.2,0.1,0.4,0.4l0.6,0.1l0.1-0.1c-0.2-0.1-0.4-0.2-0.4-0.3c0,0,0.1,0,0.1-0.1L46,4.7H45.6z M45.6,42.1L45.6,42.1 c0,0.1,0.1,0.1,0.2,0.1h0.1v-0.1C45.8,42.2,45.8,42.2,45.6,42.1L45.6,42.1z M45.7,36.1L45.7,36.1c0.2,0.1,0.3,0.1,0.4,0.1l0.1-0.2 H46L45.7,36.1z M45.7,41.6l-0.1,0.1l0.1,0.1H46c0.1,0,0.1,0,0.1-0.1C46.1,41.6,46,41.6,45.7,41.6z M45.7,26.4L45.7,26.4l0.3,0.1 v-0.1H45.7z M45.7,48.2L45.7,48.2c0.2,0,0.2,0,0.2-0.1h-0.1C45.8,48,45.7,48.1,45.7,48.2z M45.9,5.7l-0.1,0.1h0.2 C46.1,5.7,46,5.7,45.9,5.7z M45.9,40.1v0.1h0.1L45.9,40.1L45.9,40.1z M45.9,16.9L45.9,16.9l0.1,0.1v-0.1H45.9z M46,1.3v0.1h0.1 L46,1.3L46,1.3z M46,49.4l0.1,0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1H46z M46.1,4.1v0.1h0.1L46.1,4.1L46.1,4.1z M46.1,5.9L46.1,5.9L46.4,6 V5.8L46.1,5.9z M46.1,17.3v0.1h0.4c0-0.1,0-0.1-0.1-0.1H46.1z M46.1,42.4v0.2c0,0.1,0.1,0.1,0.1,0.1h0.1c0.2-0.1,0.4-0.2,0.4-0.3 c-0.2-0.1-0.3-0.1-0.4-0.1C46.2,42.4,46.1,42.4,46.1,42.4z M46.2,34.7c0,0,0.1,0.1,0.2,0.2c0.1,0,0.2-0.1,0.3-0.1v-0.1l-0.4-0.1 H46.2z M46.2,38.1L46.2,38.1c0,0.2,0.1,0.2,0.1,0.2h0.2l0.1-0.1c-0.1-0.2-0.1-0.3-0.2-0.3h-0.1C46.2,38,46.2,38,46.2,38.1z M46.2,40.1L46.2,40.1l0.1,0.1v-0.1H46.2z M46.2,19L46.2,19l0.2,0.1V19H46.2z M46.3,24.3l-0.1,0.1l0.2,0.1h0.1v-0.1 C46.5,24.4,46.4,24.3,46.3,24.3z M46.2,29.5c0.1,0.2,0.2,0.3,0.4,0.3c0.2-0.1,0.3-0.1,0.3-0.2l-0.1-0.1c0,0.1,0,0.1-0.1,0.1h-0.1 L46.2,29.5L46.2,29.5z M46.2,44.9L46.2,44.9c0,0.2,0.1,0.2,0.1,0.2h0.1v-0.1c0-0.1,0-0.1-0.1-0.1H46.2z M46.2,48.4v0.1h0.1 C46.4,48.5,46.3,48.4,46.2,48.4z M46.3,13.6v0.1h0.2v-0.1H46.3z M46.3,33.8c0,0.1,0.1,0.2,0.3,0.3h0.1c-0.1-0.2-0.1-0.3-0.2-0.3 H46.3z M46.4,21.2L46.4,21.2l0.2,0.1c0,0,0-0.1,0.1-0.2h-0.1C46.4,21,46.4,21.1,46.4,21.2z M46.4,37.3v0.1h0.1L46.4,37.3L46.4,37.3 z M46.5,41.1L46.5,41.1l0.3,0.1l-0.1-0.1C46.6,41.1,46.6,41.1,46.5,41.1z M46.7,17.1c0,0.2,0,0.3-0.1,0.4c0.1,0,0.1,0.1,0.1,0.2 h0.1v-0.1l-0.1-0.5H46.7z M46.6,22.1L46.6,22.1l0.1,0.1v-0.1H46.6z M46.6,37.1L46.6,37.1c0,0.2,0.1,0.2,0.1,0.2 c0.2,0,0.4-0.1,0.4-0.2v-0.3c0,0-0.1,0-0.1,0.1l-0.1-0.1h-0.1C46.8,36.8,46.7,36.9,46.6,37.1z M46.7,7.2L46.7,7.2 c0,0.2,0.2,0.3,0.5,0.5h0.1c-0.1-0.3-0.2-0.4-0.4-0.6C46.8,7.1,46.7,7.2,46.7,7.2z M46.7,14.5l-0.1,0.1c0,0,0.3,0.1,0.8,0.4h0.1 l0.1-0.3L46.7,14.5z M46.7,21h0.1c0.2-0.1,0.3-0.2,0.3-0.4C46.8,20.6,46.7,20.8,46.7,21z M46.7,23.4c0,0.1,0.1,0.1,0.2,0.2 c0.1,0,0.1,0,0.1-0.1l-0.1-0.1H46.7z M46.7,36.6v0.1c0.2-0.1,0.3-0.1,0.3-0.2h-0.1C46.8,36.5,46.7,36.6,46.7,36.6z M46.8,16.5 l-0.1,0.1c0,0.1,0.1,0.2,0.4,0.2v-0.1C47.1,16.7,47,16.6,46.8,16.5z M46.8,42.3c0,0,0,0.1-0.1,0.2h0.2 C46.9,42.4,46.9,42.3,46.8,42.3L46.8,42.3z M46.7,45.3c0,0.1,0.1,0.1,0.4,0.2c0.1,0,0.2-0.1,0.3-0.1v-0.1c-0.1,0-0.3,0-0.5-0.1 C46.8,45.3,46.8,45.3,46.7,45.3z M46.8,17.9L46.8,17.9c0,0.2,0.1,0.2,0.1,0.2v-0.1C46.9,18,46.9,17.9,46.8,17.9z M46.8,37.7 l0.3,0.2h0.4v-0.1c0-0.1-0.1-0.2-0.4-0.4H47C46.9,37.4,46.9,37.5,46.8,37.7z M46.9,32.2c0.2,0.3,0.3,0.5,0.3,0.6c0,0-0.1,0-0.1,0.1 l0.1,0.1h0.1l-0.1-0.1c0-0.3,0.2-0.4,0.7-0.4v-0.1c-0.4-0.1-0.6-0.3-0.6-0.4C47,32.1,46.9,32.1,46.9,32.2z M46.9,33.3v0.1H47 C47,33.4,47,33.3,46.9,33.3z M46.9,5.6c0,0.1,0.1,0.1,0.1,0.1V5.6H46.9z M46.9,36.3c0,0.1,0.1,0.1,0.1,0.1l0.4-0.1v-0.1 c-0.2,0-0.3,0-0.3-0.1C47.1,36.1,47,36.1,46.9,36.3z M46.9,38.3c0,0.1,0.2,0.3,0.5,0.4c0-0.1,0.1-0.1,0.2-0.1v-0.1 c-0.2,0-0.3-0.1-0.6-0.2C47,38.2,46.9,38.2,46.9,38.3z M46.9,47.8V48c0.1,0,0.2,0,0.3,0.1c0.1,0,0.2-0.1,0.3-0.1v-0.1 c-0.1,0-0.2,0.1-0.2,0.1L46.9,47.8z M47,10.8L47,10.8l0.2,0.1v-0.1H47z M47,27.7L47,27.7c0,0.2,0.1,0.2,0.1,0.2h0.1v-0.1 C47.2,27.8,47.2,27.7,47,27.7L47,27.7z M47,41.8v0.1h0.1L47,41.8L47,41.8z M47,42.3L47,42.3l0.1,0.1v-0.1H47z M47,43.7v0.1h0.2 C47.2,43.8,47.2,43.7,47,43.7L47,43.7z M47.6,30.9c0,0.1-0.1,0.3-0.4,0.6c0.1,0.1,0.1,0.2,0.1,0.3h0.1c0-0.1,0.1-0.3,0.4-0.6 C47.7,31.1,47.6,31.1,47.6,30.9L47.6,30.9z M47.2,41.7L47.2,41.7l0.4,0.1v-0.1H47.2z M47.3,18.9v0.2c0,0.1,0.1,0.2,0.4,0.3v-0.3 c0-0.1-0.1-0.1-0.2-0.2H47.3z M47.3,23.3h0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1h-0.2C47.3,23.2,47.3,23.3,47.3,23.3z M47.4,8.8 c0,0.1,0.1,0.1,0.1,0.1h0.1c0-0.1,0-0.1-0.1-0.1H47.4z M47.4,4.5v0.1h0.4V4.5H47.4z M47.4,19.6v0.2l0.1,0.1c0.1,0,0.2-0.1,0.3-0.1 v-0.1C47.8,19.7,47.7,19.7,47.4,19.6z M47.4,42.2L47.4,42.2l0.4-0.1c0-0.1,0-0.1-0.1-0.1h-0.1C47.6,42,47.5,42,47.4,42.2z M47.6,37.5L47.6,37.5l0.4,0.1H48l-0.1-0.2C47.8,37.5,47.7,37.5,47.6,37.5z M47.6,47.6C47.6,47.6,47.6,47.7,47.6,47.6 c0,0.2,0,0.2,0,0.3h0.1v-0.1C47.8,47.6,47.7,47.6,47.6,47.6z M47.6,29.7c0,0.1,0.1,0.1,0.1,0.1v-0.1H47.6z M47.7,26.9L47.7,26.9 l0.2,0.1v-0.1H47.7z M47.8,36.1L47.8,36.1l0.1,0.1v-0.1H47.8z"
                }, void 0, false, {
                  fileName: "app/ui/components/Preloader/index.tsx",
                  lineNumber: 45,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                  fill: "#fff",
                  d: "M53.6,0.3h1.1c0.1,0,0.1,0.1,0.2,0.2c0.5,0,0.8-0.1,0.8-0.2h0.1L56,0.4h0.1V0.3h0.5L57,0.6 h0.1V0.3h1.2c0.3,0.2,0.4,0.4,0.4,0.6L58.5,1l-0.3-0.1C58.2,1,58.1,1,58,1v0.1c0,0.1,0.1,0.1,0.1,0.1c0.2-0.1,0.4-0.1,0.5-0.1v0.1 c0,0,0.1,0,0.1-0.1L59,1.2h0.3c0.1,0,0.1-0.1,0.1-0.2c0,0-0.1-0.2-0.3-0.4V0.5c0-0.1,0.1-0.1,0.2-0.2c0,0,0.1,0,0.1,0.1l0.4-0.1 h2.5c0.8,0,1.5,0.2,2.3,0.6V1l-0.1,0.1l0.1,0.1l0.4-0.1c0.8,0.8,1.4,1.5,1.5,2.1c0,0.3-0.1,0.4-0.3,0.4v0.1c0.1,0,0.2,0,0.3,0.1 L66.4,4v0.6h0.1c0-0.2,0.1-0.4,0.2-0.4h0.1c0,0.1,0,0.3,0.1,0.5c0,0.1,0,0.2-0.1,0.2c0,0.6,0.1,0.9,0.1,1.2v3.5l-0.1,0.5 c0,0,0.1,0,0.1,0.1c0,0-0.1,0-0.1,0.1l-0.1-0.1h-0.2l0.4,0.3v4.2c0,0.2,0,0.3-0.1,0.4l0.1,0.4v2.9c0,0.1,0,0.2-0.1,0.3 c0,0.1,0.1,0.2,0.1,0.3v0.1c0,0.1,0,0.1-0.1,0.1h-0.4c0,0.1-0.1,0.3-0.4,0.4l0.4,0.1c0-0.1,0.1-0.1,0.1-0.1 c0.2,0.1,0.3,0.1,0.4,0.1v0.1L66.7,20c0.1,0,0.1,0.1,0.1,0.1v2.5h-0.2c-0.1,0-0.2,0-0.3-0.1c-0.1,0-0.2,0.1-0.2,0.1v0.1l0.7,0.1 v1.8l-0.1,0.2c0.1,0,0.1,0.1,0.1,0.1v6.7c0,0.1-0.1,0.2-0.4,0.2v0.1h0.1c0.1,0,0.2-0.1,0.2-0.1l0.1,0.1v0.4c0,0.1-0.1,0.4-0.3,0.7 h0.3c0,1.9,0.1,3.3,0.1,4.2v7.7l-0.1,0.2c0.1,0,0.1,0.1,0.1,0.1c0,1-0.4,2-1.3,3c-0.1,0-0.2-0.1-0.2-0.2h-0.2 c-0.1,0-0.1,0.1-0.1,0.1c0.1,0,0.2,0.1,0.3,0.3c-0.1,0.2-0.4,0.4-0.8,0.5c-0.1,0-0.2-0.1-0.2-0.1c-0.4,0.4-0.7,0.6-1.1,0.6 c-0.4,0-0.8,0-1.2,0.1h-1.4c-0.2-0.1-0.3-0.2-0.5-0.2h-0.1l0.1,0.1v0.1h-6l-0.3-0.2h-0.1v0.2h-0.4c-0.1,0-0.1-0.1-0.2-0.2v-0.1h0.1 l0.2,0.1h0.2c0-0.1-0.1-0.2-0.4-0.4l-0.1,0.1h-0.1v-0.1c0,0,0-0.1,0.1-0.1l-0.1-0.1v-8.1c0-0.1,0.1-0.1,0.4-0.1v-0.1 c-0.2,0-0.4-0.1-0.4-0.2c0-0.1,0.1-0.1,0.3-0.1v-0.1h-0.3v-0.5c0-0.1,0.1-0.1,0.3-0.1v-0.2c-0.2,0-0.3,0-0.4-0.1l0.1-0.8v-0.9 c0-0.1,0.1-0.1,0.3-0.1c-0.2-0.1-0.3-0.4-0.4-0.6c0-0.2,0-0.3,0.1-0.4c0-2.8-0.1-5-0.1-6.6v-5.1L53,24.2l0.1-0.1 c0-0.6-0.1-1.1-0.1-1.5v-0.7c0-0.2,0-0.3,0.1-0.3L53,21.1V6c0-0.1,0.1-0.1,0.2-0.1V5.8c-0.1,0-0.2,0-0.2-0.1V2.5 c0-0.2,0-0.5-0.1-0.8L53,1.6L53,1.2V1.1C53,1,53,1,53.2,1l0.3,0.1c0,0,0-0.1,0.1-0.1c0,0.1,0.1,0.1,0.3,0.2c0-0.1,0.3-0.2,0.8-0.2 V0.9c0,0-0.1,0-0.2-0.1l-0.4,0.1h-0.1c0,0-0.1,0-0.1-0.1l-0.1,0.1h-0.4c-0.1-0.1-0.2-0.2-0.3-0.2V0.5C53.1,0.4,53.3,0.3,53.6,0.3z M53.2,6.8L53.1,7L53.5,7v0.1h-0.2v0.1c0.3,0,0.5,0.2,0.6,0.5l0.1-0.1h0.1c0.3,0,0.4,0.1,0.5,0.3v0.1l-0.1,0.1h0.1 c0.5-0.1,0.7-0.2,0.7-0.3V7.9c-0.8-0.3-1.3-0.5-1.4-0.5c0-0.1-0.1-0.1-0.2-0.1c0-0.1,0.1-0.1,0.1-0.1c0.1,0,0.2,0.1,0.3,0.1 C54.2,7,53.9,6.9,53.2,6.8C53.2,6.8,53.2,6.8,53.2,6.8z M53.2,6.2L53.2,6.2l0.1,0.1V6.2H53.2z M53.2,5.6c0,0.2,0.2,0.3,0.6,0.4 c0,0.1,0.1,0.1,0.1,0.1V6c-0.3-0.2-0.5-0.3-0.5-0.4H53.2z M53.3,21.2l-0.1,0.1l0.1,0.1c0.1,0,0.1,0,0.1-0.1 C53.5,21.2,53.4,21.2,53.3,21.2z M53.3,48.7L53.3,48.7l0.1,0.1v-0.1H53.3z M53.4,0.6L53.4,0.6l0.1,0.1V0.6H53.4z M53.4,36v0.1h0.1 C53.5,36,53.5,36,53.4,36z M53.4,38.7L53.4,38.7c0.2,0.1,0.4,0.1,0.4,0.1v-0.1H53.4z M53.5,44L53.5,44l0.1,0.1V44H53.5z M53.5,4.2 L53.5,4.2l0.2,0.1V4.2H53.5z M55.1,36.3v0.2c0,0.1,0.1,0.1,0.2,0.1v0.1c-0.1,0.2-0.3,0.3-0.6,0.4l-0.1,0.1c0,0-0.2-0.1-0.4-0.3 h-0.5v0.1h0.2l0.8,0.3c0-0.1,0.1-0.1,0.1-0.1c0,0,0.1,0,0.1,0.1l0.1-0.1h0.6c0-0.1,0.1-0.2,0.3-0.4C55.6,36.5,55.3,36.3,55.1,36.3z M53.8,2.3c0,0,0,0.1-0.1,0.2c0.1,0,0.2,0.1,0.2,0.2h0.3C54.2,2.4,54.1,2.3,53.8,2.3z M53.8,4.2L53.8,4.2l0.4,0.1V4.2H53.8z M54.1,40.8c0,0.1-0.1,0.2-0.2,0.3h0.3L54.1,40.8L54.1,40.8z M53.9,48.3L53.9,48.3c0,0.2,0.2,0.3,0.4,0.3v-0.1L53.9,48.3z M53.9,15.8L53.9,15.8c0,0.1,0.1,0.1,0.2,0.1l0.1-0.1H53.9z M54.3,39.4L53.9,40v0.2c0.1,0,0.3-0.2,0.5-0.5v-0.1 C54.4,39.5,54.4,39.4,54.3,39.4z M53.9,45.5L53.9,45.5c0,0.2,0.1,0.2,0.2,0.2c0.2-0.1,0.3-0.1,0.3-0.2l-0.1-0.1L53.9,45.5z M54.4,33.8c-0.2,0.1-0.4,0.2-0.4,0.3c0,0-0.1,0.1-0.1,0.2c0.1,0,0.2,0,0.4,0.1c0-0.1,0.1-0.1,0.1-0.1c0,0,0,0.1,0.1,0.1 c0-0.1,0.1-0.2,0.2-0.4L54.4,33.8z M54.1,32.2L54.1,32.2l0.4,0.1v-0.1c0,0-0.1,0-0.2-0.1C54.2,32.2,54.1,32.2,54.1,32.2z M54.6,2.3 l-0.4-0.1v0.1c0,0.1,0.1,0.1,0.2,0.2l0.1-0.1h0.4c0-0.1,0.1-0.1,0.4-0.1V2.2c-0.2,0-0.3,0-0.3-0.1C54.7,2,54.6,2.1,54.6,2.3z M54.4,38.4L54.4,38.4c0,0.2,0.1,0.2,0.1,0.2l-0.1,0.1c0,0.1,0.1,0.2,0.1,0.3h0.1l0.3-0.2h0.1c0,0,0,0.1,0.1,0.2 c0.1,0,0.2-0.1,0.3-0.1l-0.1-0.1l0.1-0.1c0,0-0.1,0-0.1-0.1c0.1,0,0.1,0,0.1-0.1l-0.5-0.1C54.7,38.4,54.5,38.4,54.4,38.4z M54.4,29.5c0,0.1,0.1,0.1,0.1,0.1v-0.1H54.4z M54.5,30.7L54.5,30.7l0.1,0.1v-0.1H54.5z M54.5,34.5L54.5,34.5 c0,0.1,0.1,0.1,0.2,0.1v-0.1H54.5z M54.6,19.9c0,0.1,0.1,0.1,0.1,0.1h0.1C54.8,19.9,54.7,19.9,54.6,19.9L54.6,19.9z M54.8,32.7 l-0.1,0.6h0.1c0.1,0,0.2-0.1,0.4-0.4v-0.1L54.8,32.7z M54.7,33.3v0.1h0.1v-0.1H54.7z M54.8,25.7L54.8,25.7c0.6,0.3,0.9,0.4,1.1,0.4 c0.1,0,0.2-0.1,0.2-0.1v-0.1c-0.1,0-0.4-0.1-0.9-0.3H54.8z M54.8,34.5L54.8,34.5l0.1,0.1v-0.1H54.8z M54.9,14.6v0.1H55 C55,14.7,55,14.6,54.9,14.6z M54.9,29.4L54.9,29.4l0.2,0.1v-0.1H54.9z M54.9,30.2v0.1h0.2C55.1,30.3,55,30.2,54.9,30.2L54.9,30.2z M54.9,45.2L54.9,45.2l0.1,0.1v-0.1H54.9z M55.1,8.4L55,8.6c0,0.1,0.2,0.2,0.7,0.2l0.1-0.1C55.4,8.5,55.2,8.4,55.1,8.4z M55,20 c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1H55z M55,48.7L55,48.7l0.2,0.1v-0.1H55z M55.1,2.4L55.1,2.4l0.2,0.1V2.4H55.1z M55.1,34.4L55.1,34.4 l0.4,0.1h0.1v-0.1L55.1,34.4L55.1,34.4z M55.4,9.7L55.4,9.7c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0,0.1,0,0.1-0.1V9.7H55.4z M55.4,29.3h0.4 c0-0.1,0-0.1-0.1-0.1h-0.1C55.4,29.1,55.4,29.2,55.4,29.3z M55.4,39c0,0.3,0.2,0.5,0.4,0.5v-0.1c0-0.2-0.1-0.4-0.2-0.4H55.4z M55.6,10c0,0.1,0.1,0.2,0.1,0.2H56v-0.1L55.6,10z M55.7,2h0.4V1.9h-0.2C55.8,1.9,55.7,2,55.7,2z M55.7,15.7c0,0.1,0.1,0.1,0.1,0.1 v-0.1H55.7z M55.8,28.8v0.1h0.1c0.1,0,0.1,0,0.1-0.1v-0.1C56,28.7,55.9,28.8,55.8,28.8z M56,40l-0.1,0.1v0.1c0,0.1,0.1,0.2,0.3,0.3 h0.1C56.3,40.2,56.2,40,56,40z M56,31.5v0.1h0.2v-0.1H56z M56,37.5v0.1c0.3,0,0.5,0,0.5,0.1c0.1,0,0.2-0.1,0.2-0.1 c0-0.1-0.1-0.1-0.2-0.2H56z M56,39.5v0.2c0.2,0,0.4,0.2,0.8,0.5v-0.4C56.6,39.8,56.3,39.7,56,39.5z M56.2,25.9L56.2,25.9l0.2,0.1 c0-0.1,0-0.2,0.1-0.3h-0.1C56.3,25.7,56.2,25.8,56.2,25.9z M56.2,31.2v0.2h0.1c0.1,0,0.1,0,0.1-0.1v-0.1H56.2z M56.3,10.7 c0,0.1,0.1,0.1,0.1,0.1v-0.1H56.3z M56.4,14.8L56.4,14.8c0.2,0,0.2,0,0.2-0.1h-0.1C56.5,14.6,56.4,14.7,56.4,14.8z M56.4,30.7 l0.1,0.1c0.1,0,0.2-0.1,0.4-0.1v-0.1c-0.1,0-0.2,0-0.2-0.1C56.5,30.6,56.5,30.7,56.4,30.7z M56.5,7.7L56.5,7.7l0.1,0.1V7.7H56.5z M56.5,9.2l0.1,0.1h0.2c0-0.1-0.1-0.2-0.1-0.2h-0.1C56.5,9.1,56.5,9.1,56.5,9.2z M56.5,21.9v0.2h0.1v-0.2H56.5z M56.6,36.5 c0,0.1,0.1,0.1,0.1,0.1v-0.1H56.6z M56.7,1.3L56.7,1.3c0,0.1,0.1,0.2,0.2,0.3h0.6V1.5c-0.1-0.2-0.2-0.3-0.2-0.3 C56.9,1.2,56.7,1.3,56.7,1.3z M56.7,22.9L56.7,22.9l0.4,0.1v-0.1H56.7z M56.8,13.6v0.1H57v-0.1C56.9,13.6,56.9,13.6,56.8,13.6z M56.8,18v0.1c0.2,0,0.3,0.1,0.4,0.3c0.1,0,0.2,0.1,0.3,0.1h0.1C57.3,18.3,57.1,18.1,56.8,18L56.8,18z M56.8,0.8L56.8,0.8L57,0.9 V0.7C56.9,0.7,56.8,0.8,56.8,0.8z M57,2l-0.1,0.2v0.1c0.1,0,0.2,0.1,0.4,0.4c0.1,0,0.2-0.1,0.3-0.1V2.4C57.5,2.3,57.4,2.2,57,2z M56.9,33.3c0.3,0,0.5-0.1,0.5-0.2V33h-0.3C57,33,57,33.1,56.9,33.3z M56.9,37.8V38H57C57,37.9,57,37.8,56.9,37.8z M56.9,42v0.3 l0.5,0.1h0.1v-0.1C57.3,42.3,57.1,42.2,56.9,42z M57,12.9L57,12.9l0.1,0.1v-0.1H57z M57,30.9L57,30.9l0.4,0.1v-0.1H57z M60.8,4.8 h-3v9.4h-0.1c-0.4-0.2-0.6-0.3-0.6-0.4c-0.1,0-0.1,0.1-0.1,0.1c0.3,0.2,0.5,0.5,0.5,0.6l0.1-0.1h0.1v1.1l-0.1,0.2 c0.1,0,0.1,0.1,0.1,0.1c0,1.7,0.1,3,0.1,3.9c0,0.2,0,0.5-0.1,0.8c0,0.2,0.1,0.4,0.1,0.8v0.1c0,0.1,0,0.2-0.1,0.2l0.1,0.4v3.6 c0,0.2,0,0.4,0.1,0.6l-0.2,0.4c0.1,0,0.2,0.1,0.2,0.2s0,0.2-0.1,0.2l0.1,0.7v5.1L57.5,33c0.3,0,0.4,0.1,0.4,0.2v0.7 c-0.4,0.1-0.6,0.2-0.6,0.4l0.1,0.1h0.2c0-0.1,0-0.2,0.1-0.2c0.1,0,0.1,0.1,0.1,0.1v2.2l-0.4,0.3c0,0.1,0.1,0.2,0.4,0.2v1.2 l-0.1,0.1c0.1,0,0.1,0.1,0.1,0.1v2c0,0.2-0.1,0.4-0.3,0.4v0.1H58v2L57.9,43V43l0.1,0.2v1.6l0.1,0.4h0.5l0.2,0.1c0,0,0.2,0,0.6-0.1 h0.2l0.3,0.2h0.3c0.1,0,0.1-0.1,0.1-0.2h1.2c0.4,0,0.6-0.1,0.6-0.4V34.1h0.1l0.2,0.1c0.1,0,0.2-0.1,0.2-0.1V34h-0.4 c-0.1,0-0.1-0.1-0.2-0.2v-1.5h0.1v-0.1L62,32.1v-1.8h0.3v-0.1c-0.2,0-0.3,0-0.3-0.1c0-0.9,0-3.2-0.1-6.8c0.2-0.1,0.3-0.1,0.3-0.2 v-0.1c-0.2,0-0.3-0.1-0.3-0.2v-0.9H62l0.4,0.1l-0.1-0.1c0-0.1,0.1-0.2,0.1-0.2h-0.2L62,21.7L62,21.6v-8.4c0.1,0,0.1,0.1,0.1,0.2 h0.1v-0.2H62l0.1-0.1V13L62,12.8V6.7c0-0.3,0-0.6-0.1-1.1c0-0.1,0.1-0.2,0.1-0.5c-0.1-0.2-0.2-0.4-0.2-0.4h-0.1v0.1h-0.1 c-0.1-0.2-0.1-0.4-0.1-0.6h-0.1C61,4.4,60.8,4.6,60.8,4.8z M57.1,18.6L57,18.7l0.4,0.1h0.4C57.7,18.7,57.5,18.6,57.1,18.6z M57,21.7l0.1,0.1h0.1v-0.1c0-0.1,0-0.1-0.1-0.1C57.1,21.5,57,21.6,57,21.7z M57.1,25.2v0.1h0.2v-0.1H57.1z M57.2,7.7L57.2,7.7 l0.1,0.1V7.7H57.2z M57.2,30.4l0.4,0.1c0-0.1,0-0.2,0.1-0.3l-0.1-0.1h-0.1C57.3,30.2,57.3,30.2,57.2,30.4z M57.3,2.7V3 c0,0.1,0.2,0.3,0.6,0.6h0.2V3.4l-0.6-0.7H57.3z M57.3,25.5L57.3,25.5l0.3,0.1v-0.1H57.3z M57.3,39.9L57.3,39.9 c0.1,0.1,0.1,0.1,0.1,0.2h0.1V40L57.3,39.9L57.3,39.9z M57.4,29.8l0.1,0.1c0-0.1,0.1-0.1,0.2-0.1c0-0.1-0.1-0.2-0.1-0.2h-0.1 C57.5,29.5,57.5,29.6,57.4,29.8z M57.4,32.6v0.1h0.1C57.5,32.6,57.5,32.6,57.4,32.6z M57.5,37c0,0.1,0.1,0.1,0.2,0.2h0.1v-0.1 c0-0.1,0-0.1-0.1-0.1H57.5z M57.6,0.9v0.1h0.1c0.1,0,0.1,0,0.1-0.1H57.6z M57.6,30.5L57.6,30.5l0.1,0.1v-0.1H57.6z M57.7,27.1 L57.7,27.1l0.1,0.1v-0.1H57.7z M57.7,27.3v0.2h0.1v-0.1C57.8,27.3,57.8,27.3,57.7,27.3z M58.1,4.5l0.2,0.1l0.1-0.2l-0.1-0.1h-0.1 C58.1,4.4,58.1,4.4,58.1,4.5z M58.2,3.9L58.2,3.9l0.4,0.1c0-0.1,0-0.1-0.1-0.1H58.2z M58.3,46.2c0,0.1,0.1,0.1,0.1,0.1v-0.1H58.3z M58.7,3.6v0.1c0,0,0.1,0,0.2,0.1V3.7C58.9,3.6,58.8,3.6,58.7,3.6L58.7,3.6z M58.7,3.9v0.1h0.1c0.1,0,0.1,0,0.1-0.1H58.7z M59.1,3.7v0.1h0.1C59.2,3.8,59.2,3.7,59.1,3.7z M59.1,4.1L59.1,4.1c0.1,0.1,0.2,0.1,0.2,0.1l0.1-0.1l0.1,0.1h0.1V4.1 c-0.1,0-0.3-0.1-0.4-0.2h-0.1C59.1,3.9,59.1,4,59.1,4.1z M59.1,46v0.1h0.2c0.1,0,0.1,0,0.1-0.1H59.1z M59.3,1.3v0.3h0.1 c0.1-0.1,0.3-0.1,0.5-0.1V1.3l-0.4,0.1h-0.1L59.3,1.3z M59.4,49.4L59.4,49.4l0.1,0.1v-0.1H59.4z M59.6,46.3L59.6,46.3l0.1,0.1v-0.1 H59.6z M59.9,0.4L59.9,0.4l0.2,0.1V0.4H59.9z M60.1,1.9L60.1,1.9L60.2,2V1.9H60.1z M60.3,45.5L60.3,45.5c0.2,0.1,0.4,0.1,0.4,0.1 v-0.1l-0.1-0.1H60.3z M60.4,1.8L60.4,1.8l0.1,0.1V1.8H60.4z M61.2,4.6L61.2,4.6l0.1,0.2H61V4.7C61.1,4.6,61.1,4.6,61.2,4.6z M61,49.4L61,49.4l0.2,0.1c0.1,0,0.1,0,0.1-0.1h-0.1C61.2,49.4,61.1,49.4,61,49.4z M61.8,3.6c0,0.1,0.1,0.2,0.1,0.2 c0.3-0.1,0.5-0.2,0.5-0.3V3.3h-0.1L61.8,3.6z M61.9,48.9L61.9,48.9l0.3,0.1v-0.2C62.1,48.9,62,48.9,61.9,48.9z M62.1,4.7v0.1h0.1 V4.7H62.1z M62.1,5.9L62.1,5.9C62.2,6,62.3,6,62.4,6c0,0,0-0.1,0.1-0.1l0.1,0.1c0.1,0,0.2-0.1,0.4-0.1V5.9l-0.4-0.1 C62.4,5.9,62.2,5.9,62.1,5.9z M62.2,14.6l-0.1,0.1h0.2C62.3,14.7,62.3,14.6,62.2,14.6z M62.2,14.8L62.1,15v0.2h0.5L62.2,14.8z M62.3,25.6l-0.1,0.2v0.1l0.4-0.1C62.5,25.7,62.5,25.7,62.3,25.6z M62.3,30.7l-0.1,0.1h0.2C62.5,30.8,62.4,30.7,62.3,30.7z M62.2,46.2v0.1c0,0.1,0.2,0.2,0.5,0.2l-0.1-0.2v-0.1c0.1,0,0.2,0,0.3,0.1h0.1v-0.1c-0.2,0-0.4,0-0.4-0.1 C62.5,46.2,62.4,46.2,62.2,46.2z M62.3,3.2C62.4,3.2,62.4,3.2,62.3,3.2c0.3,0,0.4-0.1,0.4-0.3h-0.1C62.4,3,62.3,3.1,62.3,3.2z M62.4,6.4L62.4,6.4l0.2,0.1V6.4H62.4z M62.4,7.2v0.1l0.4,0.1h0.1c0.1,0,0.1,0,0.1-0.1l-0.4-0.1H62.4z M63.4,23.4 c0,0.3-0.1,0.4-0.4,0.4c0,0.1,0,0.1-0.1,0.1l-0.4-0.4c0,0,0,0.1-0.1,0.1c0,0.1,0.1,0.2,0.4,0.4c0.1,0,0.3-0.1,0.6-0.2 c0.1,0,0.2,0.1,0.3,0.1c0.2-0.1,0.3-0.2,0.4-0.3c-0.2,0-0.4-0.1-0.4-0.3H63.4z M62.5,15.9v0.2c0.1,0,0.1,0,0.1-0.1L62.5,15.9z M62.5,44.6L62.5,44.6l0.1,0.1v-0.1H62.5z M62.6,34.6c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H62.6z M62.7,25.2L62.7,25.2l0.1,0.1v-0.1 H62.7z M62.7,31.9V32l0.1,0.1h0.1V32C62.8,32,62.7,31.9,62.7,31.9L62.7,31.9z M62.8,6.7L62.8,6.7l0.3,0.1V6.7H62.8z M62.8,32.4 L62.8,32.4l0.2,0.1v-0.1H62.8z M62.8,32.8V33h0.1L62.8,32.8L62.8,32.8z M62.9,7.5v0.1H63V7.5H62.9z M62.9,33.5L62.9,33.5l0.3,0.1 v-0.1H62.9z M62.9,44.6v0.1h0.1c0.1,0,0.1,0,0.1-0.1H62.9z M63,9v0.1h0.2V9H63z M63,24.3L63,24.3l0.1,0.1v-0.1H63z M63,33.7v0.2 h0.2c0.1,0,0.1,0,0.1-0.1L63,33.7z M63.1,24.8L63.1,24.8l0.1,0.1v-0.1H63.1z M63.2,6.2L63.2,6.2l0.2,0.1V6.2H63.2z M63.2,1.2 L63.2,1.2l0.2,0.1V1.2H63.2z M63.2,14.6L63.2,14.6c0.1,0.1,0.2,0.1,0.4,0.3h0.1v-0.2c0-0.1-0.1-0.1-0.2-0.1 C63.3,14.6,63.3,14.6,63.2,14.6z M63.2,24.2L63.2,24.2l0.1,0.1v-0.1H63.2z M63.2,30v0.1h0.1c0.1,0,0.1,0,0.1-0.1H63.2z M63.2,46.2 L63.2,46.2l0.2,0.1v-0.1H63.2z M63.3,48.6l-0.1,0.1c0.1,0,0.3,0,0.5,0.1v-0.1C63.5,48.6,63.3,48.6,63.3,48.6z M63.3,5.4L63.3,5.4 l0.2,0.1V5.4H63.3z M63.4,15.3c0,0.1,0.1,0.1,0.1,0.1h0.3v-0.1H63.4z M63.4,24.2c0,0.1,0.1,0.2,0.3,0.2c0.1,0,0.2-0.1,0.2-0.1 c0,0,0,0.1,0.1,0.1v-0.1C63.9,24.3,63.7,24.2,63.4,24.2z M63.5,6.5L63.5,6.5L63.5,6.5c0.2,0,0.2,0,0.3,0c0-0.1,0-0.1-0.1-0.1 C63.6,6.3,63.5,6.4,63.5,6.5z M63.5,43.9l0.1,0.1v-0.2C63.6,43.7,63.5,43.8,63.5,43.9z M63.7,20.5v0.1c0.2,0,0.5,0.1,0.9,0.3 c0.1,0,0.2,0.1,0.4,0.1h0.1V21C64.3,20.7,63.8,20.5,63.7,20.5z M63.7,25.7C63.8,25.7,63.8,25.7,63.7,25.7c0.1,0.1,0.4,0,0.8-0.1 v-0.1h-0.7C63.8,25.5,63.7,25.6,63.7,25.7z M63.7,47.6L63.7,47.6c0.2,0.1,0.4,0,0.4-0.1v-0.1C63.9,47.4,63.7,47.5,63.7,47.6z M63.8,45.5L63.8,45.5l0.1,0.1v-0.1H63.8z M63.9,19.4v0.1h0.2v-0.1C64.1,19.5,64,19.5,63.9,19.4z M63.9,36.4v0.1h0.1 C64.1,36.4,64,36.4,63.9,36.4z M63.9,43.4v0.1h0.1v-0.1H63.9z M64.1,6.3L64,6.5c0.1,0.1,0.2,0.1,0.3,0.1c0.1,0,0.2-0.1,0.2-0.1 C64.5,6.5,64.4,6.4,64.1,6.3z M64,15.5L64,15.5l0.5,0.2v-0.1c0-0.1-0.1-0.2-0.1-0.2c0,0,0.1,0,0.1-0.1l-0.1-0.1 C64.2,15.4,64.1,15.5,64,15.5z M64,24.5L64,24.5l0.1,0.1v-0.1H64z M64,45.8L64,45.8c0,0.1,0.1,0.1,0.2,0.1v-0.1H64z M64.1,7.9 c0,0.1,0.1,0.2,0.1,0.3h0.1l0.1-0.4h-0.1L64.1,7.9z M64.1,6.9L64.1,6.9L64.4,7l0.1-0.1h-0.1C64.3,6.9,64.2,6.9,64.1,6.9z M64.1,15 L64.1,15l0.2,0.1V15H64.1z M64.1,23.4L64.1,23.4l0.3,0.1l0.1-0.1H64.1z M64.1,28.3c0,0.1,0.1,0.1,0.2,0.2l0.1-0.1l-0.1-0.1H64.1z M64.1,31.5v0.1h0.1L64.1,31.5L64.1,31.5z M64.4,13.4L64.4,13.4l0.1,0.1v-0.1H64.4z M64.4,28.9L64.4,28.9l0.1,0.1v-0.1H64.4z M64.4,34L64.4,34l0.3,0.1V34H64.4z M64.5,4.4L64.5,4.4l0.1,0.1V4.4H64.5z M64.5,5.8h0.1c0.1,0,0.1,0,0.1-0.1h-0.1 C64.5,5.6,64.5,5.7,64.5,5.8z M64.6,23L64.6,23l0.1,0.1V23H64.6z M64.6,39.6L64.6,39.6l0.3,0.1v-0.1c0-0.1,0-0.1-0.1-0.1 C64.7,39.5,64.6,39.5,64.6,39.6z M64.7,7.2L64.7,7.2l0.4,0.1V7.2H64.7z M64.7,24.9L64.7,24.9c0.1,0.1,0.2,0.1,0.4,0.2 c0.2,0,0.4-0.1,0.5-0.1v-0.1c-0.2,0-0.4,0-0.6,0.1C64.9,24.9,64.8,24.9,64.7,24.9L64.7,24.9z M64.7,31.1v0.2h0.1 C64.8,31.3,64.8,31.2,64.7,31.1L64.7,31.1z M64.8,22.4L64.8,22.4l0.1,0.1v-0.1H64.8z M64.8,14.7L64.8,14.7l0.2,0.1v-0.1H64.8z M65.1,3.4v0.1c0.1,0,0.1,0,0.1-0.1H65.1z M65.2,22.4c0,0.1,0,0.2-0.1,0.3l0.4,0.1l0.1-0.4H65.2z M65.6,32.3c0,0.2-0.2,0.3-0.6,0.4 c0,0.1,0.1,0.2,0.1,0.4h0.7l-0.1-0.1l0.1-0.1l-0.1-0.1v-0.1l0.1-0.2l-0.2-0.1H65.6z M65.1,14.7L65.1,14.7l0.1,0.1 c0-0.1,0.1-0.1,0.2-0.1v-0.2h-0.1C65.3,14.6,65.2,14.7,65.1,14.7z M65.2,3.2c0,0.1,0.1,0.2,0.1,0.3c0.2-0.1,0.4-0.1,0.8-0.1h0.1 V3.1C65.7,3.1,65.4,3.2,65.2,3.2z M65.3,22.1L65.3,22.1l0.3,0.1v-0.1H65.3z M65.3,23.1v0.1h0.1v-0.1H65.3z M65.4,5.3L65.4,5.3 l0.2,0.1C65.9,5.3,66,5.2,66,5.1h-0.1C65.7,5.3,65.5,5.3,65.4,5.3z M65.7,5.8c0,0.2-0.1,0.4-0.3,0.4v0.1c0,0.1,0.1,0.1,0.1,0.1 c0.1-0.1,0.4-0.2,0.9-0.2V6.1C66.1,6.1,66,6,66,5.8H65.7z M65.4,15.1L65.4,15.1l0.1,0.1v-0.1H65.4z M65.5,21.8v0.1 c0,0,0.1,0,0.2,0.1l0.1-0.1l-0.1-0.1C65.6,21.8,65.5,21.8,65.5,21.8z M65.5,44v0.1h0.1c0.1,0,0.1,0,0.1-0.1H65.5z M65.5,15.4v0.1 c0.2,0,0.4,0,0.4,0.1c0,0-0.1,0-0.1,0.1H66c0,0,0-0.1-0.1-0.1l0.1-0.1c0-0.1-0.1-0.1-0.2-0.2C65.7,15.4,65.7,15.4,65.5,15.4z M65.6,14.2c0,0.1,0.1,0.1,0.1,0.1h0.1c0-0.1,0-0.1-0.1-0.1H65.6z M65.7,20.8L65.6,21h0.3v-0.1C65.9,20.9,65.8,20.9,65.7,20.8z M65.8,42.9c-0.1,0.2-0.1,0.3-0.1,0.4l0.1,0.1c0,0.1-0.1,0.2-0.1,0.3v0.1c0.1,0,0.2-0.1,0.3-0.4c0-0.1-0.1-0.2-0.1-0.2 c0-0.1,0.1-0.2,0.1-0.2L65.8,42.9z M65.7,28.4c0,0.1,0.1,0.1,0.1,0.1v-0.1H65.7z M65.7,33.8h0.2v-0.1h-0.1 C65.7,33.6,65.7,33.7,65.7,33.8z M65.8,24.7L65.8,24.7l0.1,0.1v-0.1H65.8z M65.8,21.9v0.1H66v-0.1H65.8z M65.8,37.5L65.8,37.5 l0.2,0.1v-0.1H65.8z M65.8,46.8L65.8,46.8c0,0.1,0.1,0.1,0.2,0.1v-0.1H65.8z M65.9,23.3L65.9,23.3l0.1,0.1v-0.1H65.9z M66,6.4 L66,6.4l0.2,0.1V6.4H66z M66,20.7c0,0,0,0.1-0.1,0.2h0.4v-0.1c0-0.1,0-0.1-0.1-0.1H66z M66,13.7L66,13.7l0.1,0.1v-0.1H66z M66.2,23.4c0,0,0,0.1-0.1,0.2h0.2C66.3,23.5,66.3,23.5,66.2,23.4L66.2,23.4z M66.2,25c0,0.1,0.1,0.1,0.1,0.1V25H66.2z M66.2,32.1 v0.1h0.1L66.2,32.1L66.2,32.1z M66.4,9.1L66.4,9.1l0.1,0.1V9.1H66.4z M66.4,14.1v0.3h0.1l0.1-0.1c0-0.1-0.1-0.2-0.1-0.2H66.4z M66.4,24.9V25h0.3c0-0.1,0-0.1-0.1-0.1H66.4z M66.4,30.2L66.4,30.2l0.3,0.1v-0.1H66.4z M66.5,5.2c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1 H66.5z M66.5,14.9V15h0.1L66.5,14.9L66.5,14.9z"
                }, void 0, false, {
                  fileName: "app/ui/components/Preloader/index.tsx",
                  lineNumber: 49,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                  fill: "#fff",
                  d: "M75,0.2c0.2,0,0.4,0.1,0.6,0.1h0.1c0.1,0,0.2,0,0.3-0.1c0.3,0,0.5,0.2,0.5,0.6v2.5h-0.1 c-0.4-0.3-0.7-0.5-0.8-0.5c0.1,0.3,0.3,0.6,0.8,0.9l0.1,0.1v1.7l-0.1,0.2c0.1,0,0.1,0.1,0.1,0.1v5.3h-0.4c-0.1,0-0.1,0.1-0.1,0.1 c0.4,0,0.6,0.1,0.6,0.2v5.7c0,0.4,0,0.7-0.1,1c0,0.2,0.1,0.5,0.1,0.9v3c0,0-0.3,0.2-0.8,0.6c0.1,0,0.3-0.1,0.7-0.2l0.1,0.1v3 l-0.4,0.3c0.2,0,0.4,0.1,0.4,0.2v7c0,0.1-0.1,0.1-0.2,0.1v0.1c0.1,0,0.2,0,0.2,0.1v0.6l0.1,0.5c-0.1,0-0.2,0.1-0.3,0.1v0.1 c0.2,0,0.3,0.1,0.3,0.2v1.1c0,0.4,0,1-0.1,1.9L76.4,38l-0.3-0.2h-0.2c-0.1,0.1-0.2,0.1-0.3,0.1V38c0.1,0,0.4,0.1,0.9,0.4h0.1v0.1 c0,0.1,0,0.1-0.1,0.1c0.1,0.2,0.1,0.4,0.1,0.6v1.8c0,0.1,0,0.1-0.1,0.1c-0.2-0.2-0.3-0.4-0.3-0.5h-0.1c0,0.1-0.1,0.2-0.3,0.2V41 c0.2,0,0.5,0.1,0.8,0.4v2.5c0,0.1-0.1,0.1-0.2,0.2h-0.1l-0.1-0.1c0,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.2-0.1-0.2-0.1l-0.1,0.1v0.1 c0.3,0,0.6,0.1,0.8,0.4c0.1,0,0.1,0,0.1,0.1c0,0.4,0,0.9-0.1,1.5c0,0.5,0.1,0.9,0.1,1.1c-0.1,0-0.1,0.1-0.2,0.3 c0.1,0,0.1,0.1,0.2,0.2v1c0,0.5-0.2,0.7-0.6,0.7h-0.1c-0.1,0-0.1-0.1-0.1-0.2h-0.1c0,0.1,0,0.2-0.1,0.2h-3.2 c-0.2,0-0.4-0.1-0.5-0.3v-4.6c0,0,0-0.1,0.1-0.1l-0.1-0.1v-6l-0.1-0.4c0-0.1,0.1-0.2,0.1-0.4v-1c0-0.1,0.1-0.1,0.1-0.1v0.1l0.1-0.1 h0.1l0.1,0.1l0.1-0.1c-0.4,0-0.6,0-0.6-0.1v-0.2c0-0.1,0.1-0.2,0.3-0.2c0-0.1,0-0.1-0.1-0.1c0,0,0,0.1-0.1,0.1 c-0.1-0.2-0.1-0.4-0.1-0.6v-0.1c0-0.2,0-0.5,0.1-0.6l-0.1-0.4c0-0.8,0.1-1.5,0.1-2.1v-0.4c0-0.1,0-0.2,0.1-0.2l-0.1-0.3 c0-0.7,0-2.2-0.1-4.4c0-0.9,0.1-1.5,0.1-1.8l-0.1-0.3c0-0.3,0.1-0.6,0.1-0.9v-0.8c0-0.4,0-0.9-0.1-1.4c0,0,0-0.1,0.1-0.2 c0-0.8-0.1-1.4-0.1-1.8v-4c0-0.4,0-0.9,0.1-1.4c0-0.1-0.1-0.5-0.1-1.1l0.1-0.2c-0.1,0-0.1,0-0.1-0.1v-0.4c0-0.3,0-0.4,0.1-0.5 c0-0.3-0.1-0.5-0.1-0.6V11c0-0.3,0-0.5,0.1-0.5l-0.1-0.8V4.4c0-0.2,0-0.4,0.1-0.6c0-0.2-0.1-0.4-0.1-0.6V1c0-0.4,0.1-0.6,0.4-0.7 h2.3C74.5,0.3,74.8,0.3,75,0.2z M72,22.1L72,22.1c0,0.2,0.1,0.2,0.1,0.2h0.3v-0.1L72,22.1L72,22.1z M72,39.7v0.1 c0,0.1,0.2,0.2,0.6,0.3v-0.1C72.4,39.8,72.2,39.7,72,39.7z M72.1,4.1L72.1,4.1l0.2,0.1V4.1H72.1z M72.1,9.8h0.1V9.6 C72.1,9.6,72.1,9.7,72.1,9.8z M72.1,7.8L72.1,7.8l0.1,0.3c-0.1,0-0.1,0.1-0.1,0.1l0.1,0.1c0.1,0,0.2-0.1,0.2-0.4L72.1,7.8z M72.4,11.8c-0.1,0-0.2-0.1-0.2-0.1v0.1l0.4,0.4v0.4h0.4c0-0.3,0.1-0.4,0.2-0.4l0.1,0.1c0.2-0.1,0.3-0.1,0.4-0.1v-0.2 c-0.2,0-0.3-0.1-0.6-0.2C73,11.7,72.8,11.7,72.4,11.8z M72.2,34.2v0.1c0,0.1,0.1,0.1,0.1,0.1h0.1c0.1,0,0.1,0,0.1-0.1v-0.1H72.2z M72.3,7.7L72.3,7.7c0,0,0.2,0,0.6,0V7.6l-0.5-0.1C72.3,7.5,72.3,7.6,72.3,7.7z M72.3,23.3c0,0.1,0.1,0.1,0.1,0.1v-0.1H72.3z M72.4,24.3v0.1h0.2v-0.1C72.5,24.4,72.4,24.4,72.4,24.3z M72.4,31.4L72.4,31.4l0.2,0.1v-0.1H72.4z M72.4,10.2l0.1,0.4 c0.1,0,0.2-0.1,0.2-0.4H72.4z M72.6,12.9l-0.1,0.2v0.1c0.3,0,0.4,0.1,0.4,0.2v0.1c0,0.1,0,0.1-0.1,0.1c0,0.1,0.2,0.2,0.4,0.4 c0,0,0-0.2,0.1-0.4c-0.1,0-0.1,0-0.1-0.1v-0.5c-0.1,0-0.1,0-0.1-0.1l-0.1,0.1C72.7,12.9,72.6,12.9,72.6,12.9z M72.6,22.3 c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.2-0.1,0.2-0.1c0-0.1,0-0.1-0.1-0.1C72.8,22.3,72.7,22.3,72.6,22.3z M73,40.2h-0.4v0.1l0.4,0.1 c0.1,0,0.1-0.1,0.2-0.2c0,0-0.1,0-0.1-0.1L73,40.2z M72.7,14.8L72.7,14.8c0.1,0.3,0.1,0.4,0.2,0.4l0.2-0.1c0.1,0,0.2,0.1,0.3,0.1 l0.1-0.1v-0.1h-0.1c0,0-0.2,0-0.4,0.1L72.7,14.8z M72.7,21.7L72.7,21.7l0.4,0.1v-0.1H72.7z M72.8,21.9c0,0.1,0.1,0.1,0.1,0.1H73 C73,21.9,72.9,21.9,72.8,21.9L72.8,21.9z M72.8,4.6c0,0.1,0.1,0.1,0.1,0.1V4.6H72.8z M73,21l-0.1,0.2c0.1,0.2,0.1,0.3,0.1,0.4h0.1 l0.1-0.4L73,21z M72.8,45.1v0.1h0.1L72.8,45.1L72.8,45.1z M73.1,14.1v0.2h0.1c0,0,0-0.1,0.1-0.2H73.1z M73.1,9.8L73.1,9.8l0.1,0.1 V9.8H73.1z M73.1,35.7c0.1,0.1,0.1,0.2,0.1,0.3h0.1c0.1,0,0.1-0.1,0.2-0.2v-0.1c0,0-0.1,0-0.2-0.1C73.2,35.7,73.2,35.7,73.1,35.7z M73.2,8.6c0.1,0,0.1,0,0.1,0.1c0.2-0.1,0.4-0.1,0.6-0.1V8.4h-0.6C73.2,8.4,73.2,8.5,73.2,8.6z M73.3,20.3v0.1h0.1L73.3,20.3 L73.3,20.3z M73.3,36.9v0.1h0.2v-0.1H73.3z M73.5,45.3c0.1,0.2,0.2,0.3,0.4,0.3v-0.1C73.9,45.4,73.7,45.4,73.5,45.3L73.5,45.3z M73.6,21.7L73.6,21.7l0.1,0.1v-0.1H73.6z M73.7,31.1L73.7,31.1l0.5,0.1v-0.1c-0.1,0-0.1,0-0.1-0.1C74,31.1,73.8,31.1,73.7,31.1z M73.8,35.9V36H74c0-0.1,0-0.1-0.1-0.1H73.8z M73.8,21.9c0,0.1,0.1,0.1,0.2,0.2v-0.2H73.8z M73.9,41.2L73.9,41.2 c0,0.1,0.1,0.2,0.3,0.3c0.1,0,0.2-0.1,0.5-0.1c0-0.1-0.2-0.2-0.4-0.2H73.9z M74,47.7L74,47.7l0.4,0.1v-0.1H74z M74.1,5.4v0.1 c0,0.1,0.1,0.1,0.1,0.1h0.1c0.1,0,0.1,0,0.1-0.1V5.5L74.1,5.4z M74.1,22.2L74.1,22.2c0,0.2,0.1,0.2,0.1,0.2v-0.1 C74.3,22.3,74.2,22.2,74.1,22.2z M74.2,38.3L74.2,38.3c0.1,0.1,0.2,0.1,0.4,0.2c0.1,0,0.1,0,0.1-0.1v-0.1H74.2z M74.3,16 c0,0.1,0.1,0.1,0.1,0.1h0.1C74.5,16,74.4,16,74.3,16L74.3,16z M74.3,35.6c0,0,0.1,0,0.2,0.1c0.2-0.1,0.3-0.1,0.3-0.2h-0.4 C74.4,35.4,74.3,35.5,74.3,35.6z M74.5,12.9l-0.1,0.1v0.1h0.2v-0.1C74.6,13,74.6,12.9,74.5,12.9z M74.4,19.6L74.4,19.6l0.1,0.1 v-0.1H74.4z M74.5,34.9c0,0.1,0.1,0.1,0.1,0.1h0.1c0.1,0,0.1,0,0.1-0.1v-0.1L74.5,34.9z M74.6,2.4c0,0.1,0.2,0.2,0.6,0.3 c0-0.1-0.1-0.2-0.3-0.3H74.6z M74.7,37.3L74.7,37.3c0,0.2,0.1,0.2,0.1,0.2h0.1c0-0.2,0.1-0.3,0.4-0.3v-0.1h-0.2L74.7,37.3z M74.7,45.8V46h0.2v-0.1H74.7z M74.7,13.1c0,0.1,0.1,0.1,0.1,0.1h0.2v-0.1H74.7z M75.2,38l0.1,0.1l-0.1,0.1l-0.4-0.1v0.1 c0,0,0.1,0,0.2,0.1c0.4-0.1,0.6-0.2,0.6-0.4h-0.1L75.2,38z M74.8,47.7L74.8,47.7c0,0.2,0.1,0.2,0.1,0.2H75v-0.1 C75,47.8,75,47.7,74.8,47.7L74.8,47.7z M74.9,25.5v0.1H75L74.9,25.5L74.9,25.5z M74.9,45.2v0.1c0.1,0,0.2,0,0.3,0.1l0.1-0.1 L74.9,45.2z M75,4.6v0.1c0,0,0.1,0,0.2,0.1l0.1-0.1l-0.1-0.1H75z M75,19.1L75,19.1l0.1,0.1v-0.1H75z M75,30.9 c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H75z M75,48.2v0.2h0.3L75.2,48h-0.1C75,48,75,48.1,75,48.2z M76,8.2c0,0-0.1,0-0.2-0.1 c-0.3,0-0.5,0.1-0.8,0.1v0.1c0.4,0.1,0.7,0.1,0.8,0.1c0.4,0,0.6-0.1,0.6-0.4h-0.2C76.1,7.9,76.1,8,76,8.2z M75,26.2L75,26.2 l0.2,0.1v-0.1H75z M75,37.6L75,37.6l0.1,0.1v-0.1H75z M75,40.7c0,0.1,0.2,0.2,0.6,0.3v-0.1c-0.1,0-0.2,0-0.4-0.1H75z M75,46.6 c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1v-0.1h-0.1C75.1,46.5,75,46.5,75,46.6z M75.1,47.3c0,0,0,0.1-0.1,0.2l0.1,0.1h0.1 c0.1,0,0.1,0,0.1-0.1s0-0.1-0.1-0.1H75.1z M75.1,5.1L75.1,5.1l0.3,0.1L75.3,5C75.2,5,75.1,5.1,75.1,5.1z M75.1,23.4L75.1,23.4 l0.2,0.1v-0.1H75.1z M75.2,34.7L75.2,34.7l0.1,0.1v-0.1H75.2z M75.3,9.7h0.2V9.6h-0.1C75.4,9.6,75.3,9.6,75.3,9.7z M75.3,39.9 L75.3,39.9c0,0.2,0.1,0.2,0.1,0.2h0.1v-0.3C75.4,39.9,75.4,39.9,75.3,39.9z M75.4,12.4v0.2c0.1,0,0.2-0.1,0.3-0.1v-0.1H75.4z M75.4,43.9v0.1h0.1C75.6,44,75.5,43.9,75.4,43.9z M75.5,47L75.5,47l0.2,0.1V47H75.5z M75.7,21.2v0.1c0.1,0.2,0.2,0.3,0.2,0.4 c-0.1,0-0.2,0.1-0.2,0.4l0.8-0.6v-0.1c-0.1,0-0.3-0.1-0.5-0.2H75.7z M75.7,34.7L75.7,34.7c0.1,0.1,0.2,0.1,0.3,0.2v-0.1 C75.9,34.8,75.8,34.8,75.7,34.7L75.7,34.7z M75.7,37.1L75.7,37.1c0,0.2,0.1,0.2,0.1,0.3h0.2c0.1,0,0.1,0,0.1-0.1 c-0.1,0-0.2,0-0.3-0.1H75.7z M75.7,39.3v0.1h0.2v-0.1H75.7z M75.7,25.2c0,0.1,0.1,0.2,0.1,0.2h0.4c0.1-0.1,0.2-0.1,0.3-0.1v-0.1 h-0.2l-0.3,0.1C75.8,25.2,75.8,25.2,75.7,25.2z M75.7,45c0,0.1,0.1,0.1,0.2,0.2h0.2C76.1,45.1,76,45,75.7,45z M75.8,12.6L75.8,12.6 l0.1,0.1v-0.1H75.8z M75.9,5.4L75.9,5.4L76,5.5V5.4H75.9z M75.9,43.5L75.9,43.5c0.1,0.2,0.2,0.3,0.2,0.4h0.1v-0.1h-0.1v-0.1 l0.1-0.1H75.9z M76,45.7c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.1-0.1H76z M76,48.9c0,0.2,0.1,0.2,0.3,0.3c0-0.1,0.1-0.1,0.2-0.2 c0-0.1-0.1-0.2-0.1-0.2h-0.1C76.1,48.7,76,48.8,76,48.9z M76,49.1v0.1h0.1L76,49.1L76,49.1z M76.1,20.9L76.1,20.9l0.2,0.1v-0.1 H76.1z M76.1,24.9L76.1,24.9l0.2,0.1v-0.1H76.1z M76.6,44.4l0.1,0.1v0.2h-0.1l-0.1-0.3L76.6,44.4z"
                }, void 0, false, {
                  fileName: "app/ui/components/Preloader/index.tsx",
                  lineNumber: 53,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                  fill: "#fff",
                  d: "M85.6,0.2c0.6,0,0.8,0.2,0.8,0.7c0,0.3,0.1,0.5,0.1,0.6c0,0.1-0.1,0.2-0.1,0.2 c0.1,0,0.2,0.3,0.3,1c0,0-0.1,0-0.1,0.1c0.2,0,0.3,0.5,0.4,1.5c0,0,0.1,0,0.1,0.1l-0.1,0.1c0-0.1-0.1-0.1-0.2-0.2h-0.1v0.1 c0.4,0.3,0.6,0.6,0.6,0.8c0.3,1.2,0.5,2.3,0.6,3.2c-0.2,0-0.3,0.2-0.4,0.6h0.1C87.4,9,87.5,9,87.6,9h0.1c0.1,0,0.2,0.2,0.2,0.4v0.3 l-0.3,0.4c0.3,0,0.5,0.2,0.5,0.5c0.2,1.6,0.4,2.8,0.6,3.6c-0.1,0-0.2,0.1-0.3,0.1v0.1c0.3,0,0.5,0.5,0.6,1.5l0.1,0.5 c-0.1,0-0.1,0.1-0.2,0.2c0.2,0.1,0.3,0.1,0.3,0.2c0,0.1-0.1,0.1-0.3,0.1c0.3,0,0.6,1.1,0.8,3.3c0.5,2.5,0.8,4.1,0.8,4.6l0.4,0.1 v-0.1l-0.1-0.2c0-0.1,0-0.2,0.1-0.3c-0.1,0-0.2-3.1-0.2-9.4h0.1c0.2,0.1,0.4,0.2,0.6,0.2c0-0.1,0.1-0.2,0.4-0.2v-0.1 c-0.2-0.4-0.4-0.6-0.4-0.7h-0.1c-0.1,0-0.1,0.1-0.2,0.2c0.2,0.2,0.3,0.3,0.3,0.4L91,14.8c-0.1-0.1-0.3-0.1-0.5-0.1v-1.8 c0-1.9,0-4-0.1-6h0.1V6.6h-0.1V6l0.2-0.3l-0.2-0.4V5.3h0.2V5.1h-0.1v0.1h-0.1V0.4c0-0.1,0.2-0.2,0.6-0.2c0,0,0.1,0,0.1,0.1l0.4-0.1 h1.4c0.3,0,0.6,0,0.9,0.1c0.2,0,0.4-0.1,0.8-0.1h0.1c0,0,0.1,0,0.1,0.1l0.1-0.1h0.1c0.2,0.1,0.4,0.3,0.4,0.7v7.5l0.1,0.8 c-0.4,0-0.6,0.1-0.6,0.3c0,0,0.1,0,0.1,0.1c0.2-0.1,0.3-0.1,0.4-0.1h0.1c0,0.4-0.1,0.6-0.1,0.6c0.1,0.2,0.1,0.7,0.1,1.3v5.8 l-0.1,0.1l-0.4-0.1h-0.1v0.1c0.3,0.1,0.5,0.2,0.5,0.3v1.1c0,0.3,0,0.6,0.1,1.1c0,0,0,0.1-0.1,0.1l0.1,0.5v20l-0.1,0.1 c-0.1,0-0.2-0.1-0.2-0.1c-0.1,0-0.2,0.1-0.2,0.1v-0.1l-0.1,0.1h-0.2c-0.1,0-0.1,0-0.1-0.1l0.1-0.1c-0.1,0-0.2-0.1-0.3-0.4 c0,0-0.1,0-0.1-0.1c-0.3,0.1-0.4,0.1-0.4,0.2v0.5h-0.1v0.1c0,0.1,0.1,0.1,0.1,0.1h0.5v-0.1h-0.2v-0.1c0.1,0,0.2,0,0.3-0.1 c0.3,0,0.5,0.1,0.5,0.1c0,0.1-0.1,0.2-0.1,0.2l0.2,0.1c0-0.1,0-0.2,0.1-0.2H95l0.1,0.1v-0.2h0.1v1.6c0,0.6,0,1.3,0.1,2.1 c0,0.3-0.1,0.5-0.3,0.5H95V45c0.2,0,0.3,0,0.3,0.1v0.1h-0.1l-0.4-0.1v0.1c0.1,0,0.3,0.1,0.6,0.4c0,0,0.1,0,0.1,0.1v2.5 c0,0,0,0.1-0.1,0.1c0,0.1,0.1,0.3,0.1,0.6c0,0.3-0.1,0.5-0.4,0.6h-4.2c-0.3,0-0.5-0.8-0.6-2.5c-0.1-0.2-0.5-2.1-1-5.5v-0.1l0.6,0.1 l-0.1-0.1v-0.1l0.1-0.1c-0.2,0-0.4-0.1-0.6-0.3v-0.1l0.4-0.1c0,0,0,0.1,0.1,0.1l0.1-0.1h-0.1l-0.4,0.1c-0.1,0-0.4-1.1-0.7-3.2 l-1.1-6c0-0.2,0-0.5-0.1-1c0.2-0.1,0.4-0.1,0.6-0.1v0.1h0.3c0-0.3,0.1-0.5,0.4-0.5v-0.1h-0.3v-0.1h0.1c0-0.1-0.2-0.2-0.7-0.3h-0.1 l-0.2,0.1h-0.1c-0.2,0-0.5-1.5-0.9-4.5h-0.1l-0.1,0.3c0,2.3,0,7.2,0.1,14.6h-0.1v0.2h0.1v1.8h-0.1v0.1c0,0.1,0.1,0.1,0.1,0.1 c0,2.4,0.1,4.1,0.1,5.3v1.8c0,0.1-0.2,0.2-0.5,0.3l-0.1-0.1c-0.2,0-0.3,0.1-0.3,0.1l-0.5-0.1h-0.8c-0.4,0-0.7,0-1,0.1 c-1,0-1.5-0.2-1.5-0.4v-4.6c0-0.1,0.1-0.1,0.3-0.1v-0.1c-0.2,0-0.3,0-0.3-0.1V43c0-0.2,0-0.6-0.1-1.1c0.1,0,0.1,0,0.1-0.1 c-0.1,0-0.1,0-0.1-0.1v-0.2l0.1-0.2c-0.1,0-0.1,0-0.1-0.1v-7c0-0.7,0-1.8-0.1-3.3h0.1l-0.1-0.1v-4.3h0.1c0,0.2,0.1,0.5,0.4,0.8v0.1 h0.1v-0.4c-0.1-0.3-0.3-0.5-0.4-0.5c-0.2-0.2-0.3-0.6-0.3-1.1v-3.1c0-0.3,0.1-0.4,0.4-0.6c0-0.2,0-0.3,0.1-0.4 c-0.1,0-0.1-0.1-0.2-0.3c0-0.2,0.3-0.5,0.7-0.8h-0.3v0.2h-0.1c0,0-0.1,0-0.1-0.1c-0.1,0-0.3,0.1-0.6,0.4h-0.1v-1H82v-0.1L82,19.5 c0.3,0,0.4-0.1,0.4-0.2c-0.1,0-0.1,0-0.1-0.1h-0.1v0.1H82c-0.1,0-0.2-0.1-0.4-0.4v-0.1l0.1-0.1c-0.1,0-0.1,0-0.1-0.1v-0.7l0.1-0.2 c-0.1,0-0.1,0-0.1-0.1v-0.8c0,0,0-0.1,0.1-0.1c0,0,0-0.1-0.1-0.1c0-1.6-0.1-2.8-0.1-3.5V4.3h0.1C81.8,4.4,82,4.5,82,4.7h0.2V4.6 c0-0.1-0.1-0.2-0.1-0.2c0.1,0,0.2-0.1,0.2-0.1V4.2c-0.3,0-0.4,0-0.4-0.1l-0.1,0.1c-0.1,0-0.2-0.1-0.3-0.1l0.1-0.2 c-0.1,0-0.1,0-0.1-0.1V2.2c0-0.1,0.1-0.1,0.2-0.1V2c-0.1,0-0.2,0-0.2-0.1V0.6c0-0.1,0.1-0.1,0.2-0.2h0.8l0.1,0.1 c0-0.1,0.1-0.1,0.1-0.1L83,0.4l0.2-0.1h2.1C85.4,0.3,85.5,0.3,85.6,0.2z M81.5,11c0,0.1,0.1,0.2,0.4,0.2v-0.1c0-0.1,0-0.1-0.1-0.1 H81.5z M81.5,14.3L81.5,14.3l0.2,0.1c0.4,0,0.6-0.1,0.6-0.2L82,14.1C81.8,14.2,81.6,14.3,81.5,14.3z M82.7,15.4 c-0.1,0.2-0.1,0.3-0.1,0.4c0.1,0.2,0.3,0.3,0.5,0.3v0.2c0,0.1,0,0.1-0.1,0.1c-0.1,0-0.2-0.1-0.2-0.4l-1,0.2v0.4 c0.2,0,0.3,0.1,0.5,0.2c0-0.1,0.2-0.2,0.4-0.2h0.1l0.4,0.1c0.2,0,0.4-0.2,0.4-0.6C83.3,16,83.1,16,83,16v-0.1l0.1-0.2 C83,15.7,82.9,15.6,82.7,15.4z M81.8,17.4v0.2c0.2,0,0.4,0,0.4,0.1c0.1,0,0.2-0.1,0.3-0.1v-0.1l-0.1,0.1L81.8,17.4z M81.8,30.7 L81.8,30.7c0.2,0.3,0.3,0.4,0.3,0.5h0.6c0,0,0-0.1,0.1-0.2c-0.1,0-0.3-0.1-0.8-0.3H81.8z M81.8,38.1L81.8,38.1 c0,0.2,0.1,0.2,0.1,0.2h0.2c0-0.1-0.1-0.1-0.2-0.2H81.8z M81.9,32.3H82v-0.1C81.9,32.2,81.9,32.3,81.9,32.3z M81.9,39l0.1,0.1v-0.2 C81.9,38.9,81.9,38.9,81.9,39z M81.9,44.9L81.9,44.9l0.1,0.1v-0.1H81.9z M82.1,10.8c0,0.1,0,0.2-0.1,0.3c0.3,0,0.4,0.1,0.6,0.1 c0.1,0,0.2-0.1,0.2-0.1c0-0.1-0.1-0.2-0.3-0.3H82.1z M82,9.2L82,9.2l0.4,0.1V9.2H82z M82,16.3h0.4c0,0.1,0,0.1-0.1,0.1h-0.1 C82.1,16.5,82,16.4,82,16.3z M82.2,10.5L82.2,10.5c0.1,0.1,0.2,0.1,0.4,0.2v-0.1l-0.2-0.1H82.2z M82.4,18.5c0,0.1,0,0.2-0.1,0.3 l0.6,0.5H83v-0.2h-0.3l0.2-0.3c-0.2,0-0.3-0.1-0.4-0.4C82.4,18.4,82.4,18.4,82.4,18.5z M82.3,12.7v0.1h0.1L82.3,12.7L82.3,12.7z M82.3,14.8V15h0.2C82.5,14.9,82.5,14.8,82.3,14.8L82.3,14.8z M82.3,21.6L82.3,21.6l0.2,0.1v-0.1H82.3z M82.4,5.1v0.1h0.3 c0-0.1,0-0.1-0.1-0.1H82.4z M82.4,31.9V32h0.1c0.1,0,0.1,0,0.1-0.1H82.4z M82.4,46.3L82.4,46.3l0.1,0.1v-0.1H82.4z M82.4,46.6h0.4 v-0.1c0-0.1,0-0.1-0.1-0.1C82.5,46.4,82.5,46.5,82.4,46.6z M82.5,29.9V30h0.1v-0.1H82.5z M82.5,47.3v0.2h0.1c0-0.1,0.1-0.2,0.2-0.3 h-0.1C82.6,47.2,82.5,47.3,82.5,47.3z M82.5,2c0,0.1,0.1,0.1,0.2,0.2c0.1,0,0.1,0,0.1-0.1L82.7,2H82.5z M82.5,28L82.5,28l0.2,0.1 V28H82.5z M82.5,30.1v0.1c0.1,0,0.2,0.1,0.4,0.3c0.1-0.1,0.2-0.1,0.3-0.1c0.1,0,0.2,0.1,0.2,0.1v-0.1c0-0.1-0.1-0.1-0.4-0.2 L82.9,30C82.8,30.1,82.7,30.1,82.5,30.1z M82.5,39.4v0.2c0.1,0,0.2,0,0.2,0.1c0.1,0,0.1,0,0.1-0.1c0,0-0.1,0-0.1-0.1 c0,0,0.1,0,0.1-0.1L82.5,39.4z M82.7,12.7c0,0.1,0,0.1-0.1,0.1c0,0.1,0.1,0.2,0.1,0.2h0.1L82.7,12.7L82.7,12.7z M82.6,13.1v0.1h0.2 C82.8,13.2,82.8,13.1,82.6,13.1L82.6,13.1z M82.7,41.8V42h0.1L82.7,41.8L82.7,41.8z M82.7,12c0,0.1,0.1,0.1,0.1,0.1V12H82.7z M82.7,18L82.7,18l0.2,0.1V18H82.7z M82.7,32.1v0.1c0,0.1,0.1,0.2,0.1,0.2h0.5v-0.1C83.2,32.3,83,32.2,82.7,32.1z M82.8,9.7L83,9.8 h0.4V9.6H83C82.9,9.6,82.8,9.6,82.8,9.7z M82.8,12.4v0.1H83v-0.1H82.8z M82.8,13.8L82.8,13.8l0.1,0.1v-0.1H82.8z M82.9,38 c0,0.2,0,0.3-0.1,0.4l0.1,0.1h0.2C83.2,38.2,83.1,38.1,82.9,38z M82.8,39.9L82.8,39.9l0.1,0.2c0,0.1-0.1,0.2-0.1,0.3 c0.3,0.1,0.5,0.2,0.6,0.2c-0.1-0.2-0.2-0.4-0.4-0.4v-0.1h0.1V40c0-0.1,0-0.1-0.1-0.1H82.8z M83.4,9.8c0,0.1,0.1,0.2,0.1,0.2 c-0.1,0.3-0.3,0.4-0.6,0.4v0.1c0.1,0,0.3,0.1,0.4,0.2h0.1c0-0.2,0.2-0.4,0.6-0.4v-0.1c-0.2,0-0.3-0.1-0.4-0.3l0.1-0.4V9.6 C83.6,9.6,83.5,9.7,83.4,9.8z M82.9,29.1l0.1,0.1c0,0.1-0.1,0.2-0.1,0.2c0.1,0,0.2,0.2,0.3,0.6c0.3,0,0.4-0.1,0.5-0.4 c-0.1,0-0.2,0-0.2-0.1c0.1,0,0.1-0.1,0.2-0.2C83.5,29.1,83.3,29,83,29C82.9,29,82.9,29,82.9,29.1z M82.9,37.1L82.9,37.1l0.2,0.1 v-0.1H82.9z M83.4,15.2h-0.2c0,0.1-0.1,0.2-0.1,0.3c0.1,0,0.1,0.1,0.1,0.4h0.2c0-0.1,0-0.2,0.1-0.4c0.2,0,0.5,0.1,0.7,0.4V16 l-0.2-0.1H84c0,0-0.1,0.1-0.3,0.3c0,0.4,0.2,0.7,0.4,1c-0.1,0-0.1,0.1-0.2,0.3c-0.2-0.1-0.3-0.1-0.4-0.1v0.2h0.1v0.1 c-0.3-0.1-0.4-0.1-0.6-0.2H83v0.1c0.2,0.5,0.6,0.8,1.1,0.8l0.1-0.1c0,0-0.1,0-0.1-0.1l-0.1,0.1c-0.1,0-0.1,0-0.1-0.1 c0.1-0.3,0.3-0.4,0.6-0.4v-0.1c0,0-0.1,0-0.2-0.1l0.1-0.1l-0.1-0.1c0.1-0.2,0.1-0.4,0.2-0.4h0.2l0.2,0.1v-0.1l-0.1-0.1 c0.2-0.1,0.3-0.1,0.4-0.1c0,0,0,0.1,0.1,0.1v-0.1c0-0.1-0.1-0.1-0.2-0.2l-0.5,0.1v-0.2c0-0.1,0.1-0.1,0.3-0.2l-0.1-0.1 c0-0.1,0.1-0.2,0.1-0.2c0,0-0.1,0-0.1-0.1c0.1,0,0.1,0,0.1-0.1c-0.2,0-0.3-0.1-0.3-0.3h-0.4l-0.3,0.2h-0.1c0-0.2,0-0.3-0.1-0.4 L83.4,15.2z M83,44.4c0.1,0,0.1,0.1,0.1,0.1c0.1,0,0.2-0.1,0.2-0.1c0-0.1-0.1-0.1-0.2-0.2C83,44.2,83,44.3,83,44.4z M83,9.3L83,9.3 l0.1,0.1V9.3H83z M83,11.3L83,11.3l0.1,0.1v-0.1H83z M83,12.2L83,12.2l0.2,0.1v-0.1H83z M83,20.3v0.1h0.1L83,20.3L83,20.3z M83,28.8L83,28.8l0.2,0.1v-0.1H83z M83.1,11.9V12h0.4v-0.1H83.1z M83.1,31.4c0.4,0.3,0.8,0.4,1.3,0.4c0.2-0.1,0.4-0.1,0.6-0.1 v-0.1c-0.4,0-0.6,0-0.6-0.1l-0.1,0.1c-0.3-0.1-0.5-0.2-0.7-0.3C83.4,31.3,83.3,31.4,83.1,31.4z M83.1,34.7c0,0.1,0.1,0.1,0.2,0.1 h0.1v-0.1L83.1,34.7z M83.2,5L83.2,5c0.2,0.1,0.3,0.2,0.3,0.4h0.3l0.1-0.1c0-0.2-0.2-0.4-0.4-0.4H83.2z M83.2,37.6L83.2,37.6 l0.1,0.1v-0.1H83.2z M83.2,8.3h0.1V8.2C83.3,8.2,83.2,8.2,83.2,8.3z M83.2,12.8v0.1h0.1L83.2,12.8L83.2,12.8z M83.2,36.8L83.2,36.8 l0.2,0.1v-0.1H83.2z M83.3,9.1v0.1h0.1C83.4,9.2,83.4,9.1,83.3,9.1z M83.3,35.1l0.1,0.1h0.1v-0.1c0-0.1,0-0.1-0.1-0.1 C83.3,35,83.3,35,83.3,35.1z M83.4,21.4c0,0.1,0.2,0.2,0.6,0.4l0.1-0.1v-0.1h-0.2v-0.1h0.4v-0.1c-0.1-0.1-0.1-0.2-0.1-0.3 C84,21.1,83.8,21.2,83.4,21.4z M83.4,35.6L83.4,35.6l0.1,0.1v-0.1H83.4z M83.4,1.2c0,0.1,0.1,0.2,0.4,0.4V1.3c0-0.1,0-0.1-0.1-0.1 H83.4z M83.4,12.4L83.4,12.4c0,0.1,0,0.1,0.1,0.1l-0.1,0.1c0,0.1,0.1,0.1,0.2,0.2h0.1c0.1,0,0.1,0,0.1-0.1L83.4,12.4L83.4,12.4z M83.5,27.8L83.5,27.8l0.2,0.1v-0.1H83.5z M83.5,44.5l0.1,0.1l-0.1,0.1l0.1,0.1c0.1-0.1,0.1-0.2,0.1-0.4h0.1l0.3,0.2v-0.2 c-0.2-0.2-0.4-0.3-0.4-0.4C83.8,44.1,83.7,44.2,83.5,44.5z M83.6,18.6v0.1h0.2v-0.1C83.7,18.7,83.7,18.7,83.6,18.6z M83.6,33v0.2 l0.4,0.1h0.1v-0.1C83.8,33.1,83.6,33,83.6,33z M83.6,45.3v0.1h0.2v-0.1C83.7,45.4,83.7,45.3,83.6,45.3z M83.7,14.3L83.7,14.3 l0.2,0.1v-0.1H83.7z M83.7,31.1v0.1h0.2v-0.1C83.8,31.2,83.7,31.2,83.7,31.1z M83.7,41.8L83.7,41.8c0,0.2,0.1,0.2,0.1,0.2H84v-0.2 H83.7z M83.9,6.9c0,0,0,0.1-0.1,0.2c0.1,0,0.2,0.1,0.4,0.4h0.4V7.3c-0.3,0-0.5-0.1-0.6-0.4H83.9z M83.8,8.4L83.8,8.4L84,8.4V8.2 h-0.1C83.8,8.2,83.8,8.3,83.8,8.4z M83.8,36.2L83.8,36.2l0.2,0.1v-0.1H83.8z M83.9,43.4c0,0.1,0,0.2-0.1,0.3h0.1 c0.1,0,0.1,0,0.1-0.1S84,43.4,83.9,43.4z M83.9,28.4L83.9,28.4c0,0.1,0.1,0.2,0.2,0.3l0.1-0.2v-0.1C84.1,28.4,84,28.4,83.9,28.4z M83.9,42.9V43H84L83.9,42.9L83.9,42.9z M84,11.1v0.1h0.2v-0.1H84z M84,35.8L84,35.8l0.2,0.1v-0.1H84z M84,36.4v0.1h0.2v-0.1 C84.2,36.5,84.1,36.5,84,36.4z M84.1,19L84.1,19l0.1,0.1V19H84.1z M84.1,23L84.1,23l0.3,0.1V23H84.1z M84.1,28.8L84.1,28.8l0.1,0.1 v-0.1H84.1z M84.8,12.5c0,0.3-0.1,0.5-0.2,0.5l0.1,0.3l-0.1,0.1v0.2c-0.2,0-0.2,0.3-0.3,1c0,0.1,0.1,0.2,0.1,0.2 c-0.1,0-0.2,0.1-0.3,0.1c0,0.1,0.1,0.1,0.1,0.1h0.3c0-0.2,0.1-0.3,0.2-0.3v-0.1c-0.1-0.2-0.2-0.3-0.2-0.4c0-0.2,0.2-0.3,0.5-0.3V14 h-0.2v-0.1c0.1-0.5,0.2-0.8,0.3-0.8c0-0.4-0.1-0.6-0.2-0.6H84.8z M84.1,38.3v0.1h0.1C84.3,38.4,84.2,38.3,84.1,38.3z M84.1,43.9 v0.1c0,0.1,0.1,0.1,0.2,0.2c0.1,0,0.1,0,0.1-0.1L84.1,43.9L84.1,43.9z M84.2,6.7v0.1h0.1C84.4,6.7,84.3,6.7,84.2,6.7z M84.2,7 L84.2,7L84.4,7V7H84.2z M84.3,19.2v0.1l0.1,0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1c0-0.1,0-0.1-0.1-0.1H84.3z M84.4,8.1v0.1h0.1V8.1H84.4z M84.6,35.6c0,0.1,0,0.2-0.1,0.3h0.1c0.3,0,0.4-0.1,0.4-0.2v-0.1H84.6z M84.4,36.3v0.1c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1 C84.6,36.3,84.6,36.3,84.4,36.3L84.4,36.3z M84.5,10.3v0.2h0.2v-0.1C84.7,10.4,84.7,10.3,84.5,10.3L84.5,10.3z M84.5,21.1 L84.5,21.1c0,0.2,0.1,0.2,0.1,0.2l0.1-0.1v-0.1H84.5z M84.6,6.4v0.1h0.1V6.4H84.6z M84.6,28.1L84.6,28.1l0.1,0.1v-0.1H84.6z M84.8,2.7L84.8,2.7L84.8,2.7c0.2,0,0.2,0,0.3,0V2.7H85C84.9,2.7,84.8,2.7,84.8,2.7z M84.8,11.4l-0.1,0.4v0.1h0.1 c0.1,0,0.1,0,0.1-0.1v-0.1C85.1,11.4,85,11.4,84.8,11.4L84.8,11.4z M84.8,12.2c0,0.1,0.1,0.1,0.1,0.1H85 C85,12.2,84.9,12.2,84.8,12.2L84.8,12.2z M84.8,19.6v0.1c0,0.1,0.1,0.2,0.3,0.3h0.1c0.1,0,0.1,0,0.1-0.1v-0.1 C85.2,19.8,85,19.8,84.8,19.6L84.8,19.6z M84.9,7.7l-0.1,0.1L85,7.9h0.1c0.1,0,0.1,0,0.1-0.1L84.9,7.7z M84.8,28.5L84.8,28.5 l0.1,0.1v-0.1H84.8z M84.8,36c0,0.1,0.1,0.1,0.1,0.1V36H84.8z M84.9,37.8l-0.1,0.1V38h0.2v-0.1C85.1,37.8,85,37.8,84.9,37.8z M84.8,38.1v0.3h0.2c0.2-0.1,0.4-0.2,0.4-0.3h-0.1H84.8C84.9,38.1,84.9,38.1,84.8,38.1z M84.9,39.3l-0.1,0.3c0.1,0,0.2-0.1,0.3-0.1 v-0.1C85.1,39.4,85.1,39.3,84.9,39.3L84.9,39.3z M84.8,43.2v0.1H85C85,43.3,84.9,43.2,84.8,43.2z M84.8,44.9v0.1h0.2v-0.1H84.8z M84.9,16.7c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.2-0.1,0.3-0.1v-0.1H84.9z M84.9,27.8V28H85L84.9,27.8L84.9,27.8z M84.9,48.1L84.9,48.1 l0.2,0.1v-0.1H84.9z M85.2,41.1C85.1,41,85,41,85,41c0.1,0.2,0.2,0.3,0.3,0.4l0.3-0.2c0-0.1-0.1-0.2-0.1-0.2 C85.4,41,85.3,41.1,85.2,41.1z M85.1,17L85.1,17l0.1,0.1V17H85.1z M85.1,21.5v0.1h0.1L85.1,21.5L85.1,21.5z M85.2,41.4l-0.1,0.1 v0.1l0.4,0.1h0.2v-0.1C85.5,41.6,85.3,41.5,85.2,41.4z M85.3,21.9v0.1h0.1L85.3,21.9L85.3,21.9z M85.3,39.3L85.3,39.3l0.2,0.1v-0.1 H85.3z M85.3,0.8V1h0.3c0-0.1,0-0.1-0.1-0.1H85.3z M85.3,6.9L85.3,6.9L85.5,7V6.9H85.3z M85.3,9.2L85.3,9.2l0.1,0.1V9.2H85.3z M85.4,10.8l0.1,0.1h0.1c0,0,0-0.1,0.1-0.2h-0.1C85.5,10.7,85.4,10.7,85.4,10.8z M85.4,14.3L85.4,14.3c0,0.2,0.1,0.2,0.1,0.3h0.1 v-0.1C85.5,14.4,85.5,14.3,85.4,14.3L85.4,14.3z M85.4,16.8L85.4,16.8l0.1,0.1v-0.1H85.4z M85.4,22.5L85.4,22.5l0.1,0.1v-0.1H85.4z M85.5,2.6L85.5,2.6L85.5,2.6C85.9,2.5,86,2.4,86,2.4V2.3h-0.1C85.6,2.4,85.5,2.5,85.5,2.6z M85.5,7.8v0.1h0.2 C85.7,7.9,85.6,7.8,85.5,7.8L85.5,7.8z M85.5,16.5c0,0.1,0.1,0.1,0.1,0.1h0.1C85.7,16.6,85.6,16.5,85.5,16.5L85.5,16.5z M85.5,20.1 L85.5,20.1c0,0.1,0,0.1,0.1,0.1l-0.1,0.1v0.1h0.1c0-0.1,0.1-0.2,0.4-0.2c0-0.2,0.1-0.3,0.4-0.3v-0.1c0-0.1,0-0.1-0.1-0.1H86 C85.7,20,85.6,20.1,85.5,20.1z M85.6,38L85.6,38l0.2,0.1V38H85.6z M85.6,40.6L85.6,40.6l0.1,0.1v-0.1H85.6z M85.6,15.3L85.6,15.3 c0,0.2,0.1,0.2,0.1,0.2v-0.1C85.8,15.4,85.7,15.3,85.6,15.3z M85.7,29.3l-0.1,0.1c0.1,0,0.2,0,0.3,0.1v-0.1 C85.9,29.5,85.8,29.4,85.7,29.3z M85.7,21.4L85.7,21.4c0,0.2,0.1,0.2,0.1,0.2h0.1c0.1,0,0.1,0,0.1-0.1l-0.1-0.1H85.7z M85.8,24.7 c0,0.1,0,0.2-0.1,0.4v0.1h0.1c0.1,0,0.2-0.1,0.3-0.4L86,24.7H85.8z M85.8,16.5v0.1h0.8v-0.1c-0.3-0.1-0.5-0.2-0.6-0.2H86 C85.9,16.3,85.8,16.4,85.8,16.5z M85.8,23.4v0.2H86C85.9,23.5,85.9,23.5,85.8,23.4L85.8,23.4z M85.9,41.7c0,0.1,0.1,0.1,0.1,0.1 v-0.1H85.9z M86,5.4h0.1V5.3C86,5.3,86,5.3,86,5.4z M86,11.1L86,11.3l0.1,0.1h0.1c0.1,0,0.1,0,0.1-0.1C86.2,11.2,86.1,11.2,86,11.1 z M86,45.4h0.1v-0.1C86,45.2,86,45.3,86,45.4z M86,45.4L86,45.6l0.1,0.1l0.1-0.1L86,45.4z M86,23.7L86,23.7l0.1,0.1v-0.1H86z M86.1,13c0,0.1,0.1,0.2,0.1,0.2h0.1c0.1,0,0.1,0,0.1-0.1L86.1,13z M86.3,45.8L86.3,45.8l0.1,0.1v-0.1H86.3z M86.3,47.5v0.1 c0.1,0,0.1,0,0.1-0.1H86.3z M86.4,3.7c0,0,0,0.1-0.1,0.2h0.1c0.1,0,0.1,0,0.1-0.1C86.6,3.7,86.5,3.7,86.4,3.7z M86.4,5v0.2h0.1 c0.1,0,0.1,0,0.1-0.1V5H86.4z M86.4,18.7v0.1l0.2,0.3c0.3,0,0.5-0.1,0.8-0.1l-0.1-0.1l0.1-0.1h-0.3c0,0-0.1,0-0.1,0.1l-0.1-0.1 l-0.4,0.1v-0.1H86.4z M86.4,23.8V24h0.1L86.4,23.8L86.4,23.8z M86.4,24.2L86.4,24.2c0,0.2,0.1,0.2,0.1,0.2h0.1 C86.6,24.3,86.5,24.3,86.4,24.2z M86.5,19.4L86.5,19.4h0.4c0.2,0.1,0.3,0.1,0.4,0.1c0-0.1-0.1-0.2-0.4-0.4 C86.6,19.2,86.5,19.3,86.5,19.4z M86.5,19.8L86.5,19.8c0.1,0.1,0.1,0.1,0.1,0.2h0.3v-0.1C86.8,19.9,86.7,19.9,86.5,19.8L86.5,19.8z M86.6,8.7L86.6,8.7l0.1,0.1V8.7H86.6z M86.6,17v0.2c0.2,0,0.3,0,0.4,0.1h0.5c0,0.1,0,0.2,0.1,0.3c-0.1,0-0.2,0.1-0.3,0.4 c0.4,0,0.7,0,0.8,0.1l0.1-0.1v-0.1c-0.1,0-0.2-0.1-0.3-0.4L86.8,17H86.6z M86.8,16.3v0.1c0.1,0,0.2,0.1,0.3,0.3l0.1-0.1 c0.1,0,0.2,0.1,0.3,0.1v-0.1c0-0.1-0.2-0.2-0.5-0.4H86.8z M86.8,20L86.8,20l0.3,0.1c0-0.1,0.1-0.1,0.2-0.1V20h-0.1L86.8,20z M86.9,21.9v0.1H87v-0.1H86.9z M86.9,27.8L86.9,27.8c0.1,0.3,0.2,0.4,0.3,0.4c0.2-0.1,0.4-0.3,0.4-0.4h0.1c0,0.1,0.1,0.2,0.4,0.2 h0.2c0.1,0,0.1,0,0.1-0.1c-0.1,0-0.2-0.1-0.3-0.4c-0.1,0-0.1,0-0.1-0.1C87.6,27.4,87.3,27.5,86.9,27.8z M87,18.6v0.1H87L87,18.6 L87,18.6z M87.1,7.7v0.1h0.2V7.7C87.3,7.7,87.2,7.7,87.1,7.7z M87.1,19.6v0.1h0.1L87.1,19.6L87.1,19.6z M87.2,18.3L87.2,18.3 l0.1,0.1v-0.1H87.2z M87.2,12.5c0,0.1,0.1,0.1,0.1,0.1h0.2v-0.1L87.2,12.5z M87.2,15.8L87.2,15.8l0.2,0.1v-0.1H87.2z M87.9,29.7 c0,0,0,0.1,0.1,0.2c-0.3,0.2-0.5,0.4-0.6,0.4l-0.1-0.1v-0.1c0.3,0,0.4-0.1,0.4-0.4H87.9z M87.5,26.1l-0.1,0.4c0,0,0.1,0.2,0.3,0.4 l-0.1,0.3c0,0.1,0.1,0.2,0.1,0.2h0.6l-0.1-0.1c0.1,0,0.2-0.1,0.3-0.1v-0.4c-0.1,0-0.2,0-0.2-0.1v-0.1h0.2v-0.1 c0-0.1-0.1-0.2-0.4-0.2l-0.1,0.1L87.5,26.1z M87.4,28.8L87.4,28.8l0.1,0.1v-0.1H87.4z M87.5,29.2L87.5,29.2c0,0.2,0.1,0.2,0.1,0.2 h0.3v-0.1c0-0.1,0-0.1-0.1-0.1H87.5z M87.7,20.9c0,0.1,0.1,0.1,0.1,0.1v-0.1H87.7z M87.8,16.1L87.8,16.1l0.2,0.1v-0.1H87.8z M87.9,11.5L87.9,11.5l0.2,0.1v-0.1H87.9z M87.9,12h0.1v-0.1C88,11.8,87.9,11.9,87.9,12z M88,17.2c0,0.1,0.1,0.1,0.1,0.1h0.1 c0.1,0,0.1,0,0.1-0.1v-0.1h-0.1L88,17.2z M88.4,30.5c0,0.2-0.1,0.3-0.3,0.3v0.1h0.1c0.3,0,0.4-0.1,0.6-0.1v-0.1 C88.7,30.7,88.6,30.6,88.4,30.5z M88.2,31.1l0.4,0.2v-0.2c0-0.1,0-0.1-0.1-0.1h-0.1C88.2,31,88.2,31.1,88.2,31.1z M88.2,28.3 L88.2,28.3l0.1,0.1v-0.1H88.2z M88.4,17.5L88.4,17.5c0.1,0.1,0.2,0.1,0.2,0.3h0.3v-0.1c-0.2,0-0.3-0.1-0.3-0.2H88.4z M88.4,35.4 l-0.1,0.1l0.1,0.1h0.1v-0.1C88.6,35.4,88.5,35.4,88.4,35.4z M88.4,28.2v0.1h0.2v-0.1H88.4z M88.5,17.2L88.5,17.2l0.4,0.1V17h-0.2 C88.6,17,88.5,17.1,88.5,17.2z M88.6,26.1l-0.1,0.3h0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1C88.8,26.1,88.7,26.1,88.6,26.1z M88.5,28.5 c0,0.1,0.1,0.1,0.2,0.1h0.1v-0.1L88.5,28.5z M88.6,26.6c0.1,0,0.2,0.1,0.3,0.3c0,0.1-0.1,0.2-0.1,0.2c0,0,0.1,0,0.1,0.1 c0.1,0,0.2-0.1,0.3-0.3c0-0.1-0.1-0.2-0.1-0.2c0.1,0,0.2-0.1,0.4-0.2c0-0.1-0.1-0.2-0.1-0.2C88.8,26.3,88.6,26.5,88.6,26.6z M88.6,18L88.6,18l0.2,0.1V18H88.6z M88.6,27.4c0.1,0.1,0.1,0.2,0.1,0.4l0.3-0.1c0-0.1-0.1-0.2-0.1-0.3L88.6,27.4z M88.6,27.7v0.2 c0.1,0,0.1,0,0.1-0.1L88.6,27.7z M88.6,29.8L88.6,29.8l0.1,0.1v-0.1H88.6z M88.7,16.2c0,0.1,0.1,0.1,0.1,0.1v-0.1H88.7z M89,31.1 l-0.1,0.1l0.4,0.1h0.3v-0.1c-0.1,0-0.2,0-0.3-0.1C89.2,31.2,89.1,31.2,89,31.1C89.1,31.2,89,31.1,89,31.1z M88.9,35.6 c0,0.1,0.1,0.1,0.1,0.1v-0.1H88.9z M89,31L89,31l0.1,0.1V31H89z M89.1,29.8v0.3h0.1v-0.3H89.1z M89.5,41.7c0.2,0.2,0.3,0.4,0.3,0.5 H90c0.1,0,0.1,0,0.1-0.1L89.5,41.7L89.5,41.7z M89.6,27.4v0.1h0.2C89.8,27.5,89.8,27.4,89.6,27.4L89.6,27.4z M89.7,32.8 c0,0.1,0.1,0.1,0.1,0.1h0.2v-0.1H89.7z M89.8,27L89.8,27l0.3,0.1V27H89.8z M89.9,27.8L89.9,27.8l0.2,0.1v-0.1H89.9z M89.9,30.5 l0.1,0.1c0.1,0,0.2-0.1,0.4-0.1v-0.1H89.9z M90.1,40.9v0.1h0.1L90.1,40.9L90.1,40.9z M90.2,29l0.1,0.1l0.1-0.1l0.1,0.1V29H90.2z M90.3,25c0,0.1,0.2,0.2,0.4,0.2c0,0,0-0.1,0.1-0.2H90.3z M90.5,6.3L90.5,6.3l0.2,0.1V6.3H90.5z M90.5,38.3L90.5,38.3l0.1,0.1v-0.1 H90.5z M90.6,15.8L90.6,15.8l0.3,0.1v-0.2C90.8,15.8,90.7,15.8,90.6,15.8z M90.7,25.5l-0.1,0.1l0.1,0.1c0.1,0,0.2-0.1,0.4-0.1 C91,25.7,90.9,25.6,90.7,25.5z M91.1,26h-0.3l-0.1-0.1l-0.1,0.1c0.1,0,0.1,0,0.1,0.1c0.2,0,0.4-0.1,0.6-0.1c0-0.1-0.1-0.2-0.1-0.2 L91.1,26z M90.6,33.3c0,0.1,0.3,0.2,0.8,0.5h0.1L91,33.3C90.9,33.3,90.8,33.3,90.6,33.3z M90.9,11.3c0,0.1,0.2,0.2,0.4,0.2l0.1-0.1 l-0.3-0.1C91,11.3,90.9,11.3,90.9,11.3z M90.9,27.7c0,0.1,0.1,0.2,0.1,0.2h0.4v-0.1C91.3,27.8,91.1,27.8,90.9,27.7z M90.9,47.3 c0.1,0.1,0.1,0.2,0.1,0.3h0.1l0.4-0.1v-0.1C91.3,47.3,91.2,47.3,90.9,47.3z M91,19.8c0,0.1,0.1,0.1,0.2,0.2h0.1v-0.2H91z M91.2,23.9c0,0.1,0,0.2-0.1,0.2c0,0,0-0.1-0.1-0.1L91,24.2c0,0,0.2,0,0.4,0.1v-0.1L91.2,23.9L91.2,23.9z M91,45.3v0.1 c0,0,0.1,0,0.2,0.1l0.1-0.1v-0.1H91z M91,47.8L91,47.8l0.1,0.1v-0.1H91z M91,7L91,7c0.1,0.2,0.3,0.4,0.6,0.5V7.3 C91.6,7.3,91.4,7.2,91,7z M91,21.5L91,21.5c0,0.2,0.1,0.2,0.1,0.2h0.1v-0.2H91z M91,31.7h0.1l0.5-0.1c0-0.1,0-0.1-0.1-0.1h-0.1 C91.2,31.5,91,31.6,91,31.7z M91.8,20c0,0.1-0.2,0.2-0.7,0.2v0.1c0.1,0,0.4,0.1,0.8,0.4l0.4,0.1c0.1,0,0.2-0.1,0.2-0.1v0.2h0.2 l-0.1-0.4h-0.3l-0.4-0.1v-0.1h0.2c0-0.1-0.1-0.2-0.4-0.4H91.8z M91.1,30.9v0.1h0.2C91.3,31,91.3,30.9,91.1,30.9L91.1,30.9z M91.1,40.3c0,0.1,0.1,0.1,0.1,0.1h0.2v-0.1c0-0.1,0-0.1-0.1-0.1h-0.1C91.2,40.2,91.1,40.2,91.1,40.3z M91.2,12.6v0.1h0.1 L91.2,12.6L91.2,12.6z M91.2,25.7L91.2,25.7l0.1,0.1v-0.1H91.2z M91.2,26.9V27h0.1C91.3,26.9,91.3,26.9,91.2,26.9z M91.2,33 c0,0.1,0.1,0.2,0.1,0.3h0.1c0,0,0-0.1,0.1-0.2L91.2,33L91.2,33z M91.2,17.3v0.1h0.1L91.2,17.3L91.2,17.3z M91.2,22L91.2,22l0.2,0.1 V22H91.2z M91.2,37.9v0.2h0.3c0-0.1-0.1-0.2-0.1-0.2H91.2z M91.3,15v0.1h0.1V15H91.3z M91.4,0.4v0.2c0.3,0.2,0.6,0.4,0.6,0.4V0.8 l-0.2-0.3c0,0,0.1,0,0.1-0.1C91.7,0.5,91.5,0.4,91.4,0.4z M91.5,1.6l-0.1,0.1c0,0,0.1,0,0.1,0.1L92,1.8h0.1V1.6H92 c-0.1,0-0.2,0-0.3,0.1C91.7,1.6,91.6,1.6,91.5,1.6z M91.4,4.3L91.4,4.3l0.1,0.1V4.3H91.4z M91.4,29.8L91.4,29.8 c0.1,0.1,0.2,0.1,0.3,0.2H92C92,29.9,91.8,29.9,91.4,29.8L91.4,29.8z M91.5,13.3l0.4,0.1l0.1-0.1l-0.2-0.1h-0.1 C91.5,13.2,91.5,13.2,91.5,13.3z M91.6,6.5l-0.1,0.1h0.4V6.6L91.6,6.5z M91.5,12.4L91.5,12.4l0.1,0.2c0.1,0,0.2-0.1,0.2-0.1v-0.1 C91.7,12.5,91.6,12.5,91.5,12.4z M91.5,13.5l0.2,0.2c0.1,0,0.2-0.1,0.2-0.1v-0.1L91.5,13.5L91.5,13.5z M92.5,18.6L92.5,18.6 l0.1,0.3L92.5,19h-0.1c-0.2-0.1-0.3-0.2-0.6-0.3c-0.2,0.1-0.3,0.1-0.3,0.2s0.1,0.2,0.4,0.4l0.2-0.1l0.4,0.2c0-0.1,0.1-0.1,0.2-0.2 h0.1l0.4,0.1l-0.1,0.1h0.6l0.1-0.1l-0.1-0.1l-0.5,0.1l0.1-0.1c-0.3-0.1-0.5-0.3-0.6-0.4l-0.1,0.1L92.5,18.6z M91.7,14.2l-0.1,0.1 H92v-0.1L91.7,14.2z M91.6,15.5v0.1h0.1L91.6,15.5L91.6,15.5z M91.6,18L91.6,18c0,0.1,0.1,0.2,0.4,0.4H92v-0.1 C92,18.2,91.9,18.1,91.6,18L91.6,18z M91.6,44.7L91.6,44.7l0.2,0.1v-0.1H91.6z M91.7,34.5L91.7,34.5l0.2,0.1v-0.1H91.7z M92,32.5 l-0.2,0.3c0.2,0.1,0.4,0.1,0.6,0.1C92.1,32.6,92,32.5,92,32.5z M91.7,33.8L91.7,33.8l0.2,0.1v-0.1H91.7z M91.8,3.3v0.1 c0.1,0,0.1,0,0.1,0.1c0.2-0.1,0.3-0.1,0.3-0.2V3.2L91.8,3.3z M91.8,11.5L91.8,11.5l0.1,0.1v-0.1H91.8z M91.8,31.3L91.8,31.3 c0,0.2,0.1,0.2,0.1,0.3c0,0-0.1,0-0.1,0.1c0.4,0.1,0.6,0.2,0.6,0.3c0.1,0,0.2-0.1,0.4-0.1L92,31.3H91.8z M91.8,38 c0,0.1,0.1,0.1,0.2,0.1h0.1v-0.1L91.8,38z M91.9,22.8L91.9,22.8l0.3,0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1H91.9z M92,33.8V34 c0,0,0.1,0,0.3,0.1C92.3,34,92.2,33.9,92,33.8L92,33.8z M92.1,26.7c0,0.1,0.1,0.1,0.1,0.1v-0.1H92.1z M92.1,44.2l0.1,0.1 c0.1,0,0.2-0.1,0.3-0.1v-0.1H92.1z M92.2,30.1L92.2,30.1c0,0.2,0.1,0.2,0.2,0.2h0.1v-0.1C92.4,30.2,92.3,30.2,92.2,30.1z M92.2,34.9V35h0.1C92.3,34.9,92.3,34.9,92.2,34.9z M92.2,16.2L92.2,16.2l0.3,0.1v-0.1H92.2z M92.3,10.6L92.3,10.6l0.2,0.1v-0.1 H92.3z M92.5,29l-0.1,0.1h0.2C92.7,29,92.6,29,92.5,29z M92.5,8.5L92.5,8.5l0.1,0.1V8.5H92.5z M92.5,43.1L92.5,43.1l0.1,0.1v-0.1 H92.5z M92.7,7.1v0.1h0.1V7.1H92.7z M92.7,40.5L92.7,40.5l0.1,0.1v-0.1H92.7z M92.7,44.5L92.7,44.5l0.3,0.1v-0.1 c0-0.1,0-0.1-0.1-0.1C92.7,44.4,92.7,44.4,92.7,44.5z M92.7,38.2v0.1h0.1L92.7,38.2L92.7,38.2z M92.7,38.6L92.7,38.6l0.1,0.1v-0.1 H92.7z M92.9,0.7L92.9,0.7c0,0.2,0.1,0.2,0.1,0.3h0.3C93.2,0.9,93.1,0.8,92.9,0.7z M92.9,17.9c0,0.1,0,0.2-0.1,0.3H93l0.1-0.3H92.9 z M92.9,29.3c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H92.9z M92.9,34.7L92.9,34.7l0.1,0.1v-0.1H92.9z M92.9,11.7c0,0.1,0.1,0.1,0.1,0.1 v-0.1H92.9z M92.9,27.8v0.1H93L92.9,27.8L92.9,27.8z M92.9,33.2L92.9,33.2l0.2,0.1v-0.1H92.9z M92.9,38.6c0,0,0.1,0,0.2,0.1 l0.1-0.1l-0.1-0.1C93,38.5,92.9,38.5,92.9,38.6z M93.2,12c0.1,0,0.1,0.1,0.1,0.1v0.1L93,12.2v0.1c0,0,0.1,0,0.2,0.1 c0-0.1,0.2-0.3,0.6-0.4l0.1-0.4l-0.1-0.1C93.4,11.6,93.2,11.8,93.2,12z M93,17.2L93,17.2l0.1,0.1v-0.1H93z M93,43.4 c0,0.1,0.1,0.2,0.1,0.2h0.1c0.1,0,0.1,0,0.1-0.1l-0.1-0.1H93z M93.1,17.5v0.2c0.1,0,0.1,0,0.1-0.1L93.1,17.5z M93.1,18.4v0.1h0.1 C93.2,18.4,93.2,18.4,93.1,18.4z M93.1,18.6v0.1h0.1v-0.1H93.1z M93.1,30.9L93.1,30.9c0,0.2,0.2,0.3,0.4,0.3 c0.1-0.2,0.2-0.3,0.4-0.3v-0.1c-0.2,0-0.4,0-0.4-0.1C93.3,30.8,93.2,30.9,93.1,30.9z M93.2,21.4L93.2,21.4l0.1,0.2 c0.2-0.1,0.3-0.1,0.4-0.1l-0.1-0.1L93.2,21.4z M93.3,26.2L93.3,26.2l0.1,0.1v-0.1H93.3z M93.8,38.5h-0.2l-0.4-0.1 c0.1,0.2,0.1,0.3,0.1,0.4c-0.1,0-0.1,0.1-0.1,0.1c0.4,0.3,0.6,0.6,0.6,0.8h0.1l0.2-0.1c0,0.1,0.2,0.3,0.5,0.4 c0-0.1,0.1-0.1,0.4-0.1c-0.1-0.2-0.1-0.3-0.2-0.3l-0.2,0.1c0-0.1,0-0.2-0.1-0.3v-0.1c0-0.1,0.1-0.2,0.3-0.2c0.2,0,0.4,0.1,0.4,0.1 h0.1v-0.1c-0.2,0-0.3-0.1-0.3-0.2v-0.1h0.2V39h0.1v-0.1L95,38.7c-0.1,0-0.2,0.1-0.2,0.1c-0.2-0.3-0.4-0.5-0.4-0.5h-0.1 C94,38.3,93.8,38.3,93.8,38.5z M93.4,16.5v0.1h0.1C93.6,16.5,93.5,16.5,93.4,16.5z M93.6,1.9L93.6,1.9l0.1,0.2 c0,0.1-0.1,0.2-0.1,0.3v0.1c0.2,0,0.4,0.1,0.4,0.1l0.1-0.1l0.2,0.1h0.1V2.5c-0.2,0-0.4-0.1-0.5-0.4C93.8,2,93.8,2,93.6,1.9z M93.6,29.9v0.2c0.2,0,0.3,0.1,0.3,0.2h0.4V30C94,30,93.8,30,93.6,29.9z M93.7,37.3L93.7,37.3l0.2,0.1v-0.1H93.7z M93.7,43.8v0.3 c0.1,0,0.3,0.1,0.6,0.4l0.1-0.1C94.3,44,94,43.8,93.7,43.8L93.7,43.8z M93.8,16.7c0,0,0,0.1-0.1,0.2H94v-0.2H93.8z M93.8,19.8 L94,20c-0.1,0-0.2,0.1-0.2,0.1c0,0.1,0.1,0.1,0.1,0.1H94c0.1,0,0.1,0,0.1-0.1l-0.1-0.1c0.1,0,0.1,0,0.1-0.1H93.8z M93.8,19.5v0.1 h0.1L93.8,19.5L93.8,19.5z M93.8,37.7v0.1h0.1L93.8,37.7L93.8,37.7z M93.8,45.7v0.1c0,0.1,0.1,0.1,0.2,0.2h0.1l0.2-0.1l0.2,0.1 v-0.2h-0.5L93.8,45.7L93.8,45.7z M93.9,35.9L93.9,35.9c0,0.2,0.1,0.2,0.1,0.2v-0.2H93.9z M94,19.1L94,19.1c0.2,0.1,0.3,0.3,0.4,0.6 c0.1,0,0.2,0.1,0.3,0.1h0.2v-0.1l-0.1-0.2v-0.1h0.1c-0.1-0.2-0.1-0.4-0.2-0.4L94,19.1z M94,38L94,38l0.1,0.1V38H94z M94.1,12 L94.1,12c0.1,0.3,0.2,0.4,0.4,0.4c0.1,0,0.2-0.1,0.2-0.1v-0.1l-0.1-0.2L94.3,12c0,0-0.1,0-0.1-0.1C94.2,11.9,94.1,12,94.1,12z M94.1,36.3c0,0.1,0.1,0.1,0.2,0.2v-0.2H94.1z M94.1,37v0.1h0.1V37H94.1z M94.1,44.8c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H94.1z M94.2,17.9v0.2h0.1c0.1,0,0.1,0,0.1-0.1l-0.1-0.1H94.2z M94.2,37.8V38c0.1,0,0.2,0,0.3,0.1V38c0-0.1,0-0.1-0.1-0.1H94.2z M94.2,48.8L94.2,48.8l0.1,0.1v-0.1H94.2z M94.3,2C94.3,2,94.3,2,94.3,2v0.2l-0.1,0.1c0.4,0,0.6,0.2,0.6,0.4H95V2.4 C94.9,2.4,94.7,2.3,94.3,2z M94.3,9.5L94.3,9.5l0.1,0.1V9.5H94.3z M94.3,30.4L94.3,30.4c0,0.2,0.1,0.2,0.1,0.2l0.1-0.1v-0.1H94.3z M94.3,13.5L94.3,13.5l0.1,0.1v-0.1H94.3z M94.4,17.4L94.4,17.4c0.1,0.4,0.2,0.6,0.3,0.6h0.2C94.9,17.7,94.7,17.5,94.4,17.4z M94.5,21.5l0.1,0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1H94.5z M94.5,44.9c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H94.5z M94.6,39.3v0.1h0.1 L94.6,39.3L94.6,39.3z M94.6,4.1h0.2V3.9h-0.1C94.7,3.9,94.6,4,94.6,4.1z M94.6,47.5L94.6,47.5l0.1,0.1v-0.1H94.6z M94.7,20.7 L94.7,20.7c0,0.2,0.1,0.2,0.1,0.2H95v-0.2H94.7z M94.7,44.2c0,0.1,0.1,0.1,0.2,0.2h0.3v-0.1L94.7,44.2z M94.8,35.9L94.8,35.9L95,36 v-0.1H94.8z M94.8,42.1L94.8,42.1l0.1,0.1v-0.1H94.8z M95,18.5L95,18.5l0.1,0.1v-0.1H95z M95,48c0,0.1,0.1,0.1,0.1,0.1h0.1 c0-0.1,0-0.1-0.1-0.1H95z"
                }, void 0, false, {
                  fileName: "app/ui/components/Preloader/index.tsx",
                  lineNumber: 57,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("path", {
                  fill: "#fff",
                  d: "M106.3,0l0.3,0.1c0.3,0,0.5-0.1,0.6-0.1c1,0,1.8,0.1,2.4,0.1c0,0.1,0.1,0.1,0.1,0.1 c0-0.1,0.1-0.1,0.1-0.1c0.3,0,0.4,0.1,0.6,0.1v0.1h-0.3l-0.4-0.1c0.1,0.2,0.1,0.3,0.2,0.3h0.8c0,0,0.1,0,0.1,0.1 c0.2-0.1,0.4-0.1,0.6-0.1c0.8,0.5,1.4,1,1.6,1.5h0.1V2c0,0.1-0.1,0.1-0.2,0.1l0.1,0.2l0.1-0.1h0.1c0.1,0,0.2,0.2,0.4,0.6V3 l-0.1,0.1c0.2,0,0.4,0.6,0.4,1.8c-0.1,0-0.2,0.1-0.2,0.1v0.1c0.1,0,0.2,0.2,0.2,0.7v0.7l-0.3,0.3v0.1h0.1l0.1-0.1l0.1,0.1v2.3 l-0.1,0.7h-0.1c0-0.1,0-0.1-0.1-0.1c-0.1,0-0.2,0.1-0.2,0.1v0.1h0.3V10l-0.5,0.1h-0.1V9.8H113v0.2h-0.2c0-0.1,0-0.2-0.1-0.2v0.2 h-1.5c-0.2,0-0.3,0-0.4,0.1l-0.4-0.1h-0.9c-0.1,0-0.1,0-0.1-0.1c0.1,0,0.2-0.1,0.2-0.1V9.8l-0.3-0.1V9.1c0,0,0-0.1,0.1-0.1 l-0.1-0.1V7.8c0.2,0.2,0.3,0.3,0.4,0.3h0.4c0-0.1-0.2-0.2-0.6-0.4l-0.1-0.1c0.1-0.2,0.1-0.4,0.2-0.4v0.1l-0.1,0.1h0.2 c0.1,0,0.2-0.1,0.3-0.3c-0.2-0.1-0.4-0.1-0.4-0.2c0-0.1,0.1-0.2,0.1-0.2h-0.1l-0.1,0.1l-0.1-0.1V5c0-0.1,0.1-0.1,0.3-0.1V4.8 c-0.5-0.2-0.9-0.3-1.1-0.3c-0.3,0-0.6,0.1-0.9,0.1h-0.2V4.5c0-0.2,0.2-0.4,0.6-0.4V4.1c-0.3,0-0.4,0-0.4-0.1 c-0.1,0-0.3,0.1-0.6,0.4h-0.1c0-0.2-0.1-0.3-0.3-0.3V3.9l0.2-0.3V3.6c-0.2,0.2-0.6,0.4-1,0.4c0,0,0-0.1-0.1-0.1L105.6,4l0.2,0.1 L106,4h0.3c0.1,0,0.1,0.1,0.1,0.1v0.4h-0.3c-0.1,0-0.1-0.1-0.1-0.3c-0.2,0.2-0.5,0.3-0.8,0.4c0,0.3-0.1,0.5-0.2,0.5h-0.1L104.6,5 h-0.1c0,0,0,0.1-0.1,0.2c0.1,0,0.3,0.1,0.5,0.2h0.2c-0.1,0.3-0.3,0.4-0.5,0.4c0,0.2,0.1,0.4,0.1,0.4c0.1,0,0.2-0.1,0.2-0.1v0.3 c0,0.1,0,0.1-0.1,0.1l0.1,0.1v0.1L104,7v0.2c0.1,0,0.2,0,0.2,0.1v0.1c-0.2,0-0.4,0.2-0.4,0.5h-0.1l0.1,0.1v0.1l-0.1,0.1l0.1,0.1 h0.1c0.1-0.3,0.2-0.5,0.4-0.5c0.1,0,0.2,0.1,0.2,0.1c0-0.1-0.1-0.2-0.3-0.4c0-0.1,0.3-0.4,0.7-0.7h0.1v1.4l0.1,0.4l-0.1,0.1 c0,0.3,0.1,0.5,0.1,0.6c-0.1,0.2-0.4,0.4-0.7,0.4v0.1h0.6c0,0.7,0.1,1.2,0.1,1.5v1.7c0,0.1-0.1,0.1-0.3,0.1l0.3,0.3v1.7 c-0.3,0.1-0.5,0.2-0.6,0.2v0.1h0.1c0.2-0.1,0.3-0.2,0.4-0.2v3.8c0,0.1,0,0.2-0.1,0.3c0,0.1,0.1,0.2,0.1,0.3c-0.1,0-0.2,0.1-0.2,0.1 l0.2,0.3v0.3c0,0,0,0.1-0.1,0.1l0.1,0.1v2c-0.2,0.3-0.4,0.5-0.5,0.5l0.1,0.2c0,0-0.1,0-0.1,0.1h0.1c0-0.1,0.1-0.2,0.3-0.2v1.5 c0,0.1-0.1,0.1-0.2,0.1v0.1c0.1,0,0.2,0,0.2,0.1v3.7c0,0.3-0.2,0.5-0.5,0.5v0.1c0.1,0,0.1,0,0.1,0.1l0.1-0.1h0.1 c0.1,0,0.1,0.1,0.1,0.1v0.8c0,0.1-0.1,0.1-0.2,0.1l0.2,0.4v1.1c0,0.1,0,0.1-0.1,0.1h-0.1l-0.1-0.1V32h0.2v0.1l-0.1,0.1 c0.1,0,0.2,0,0.2,0.1v7.9c0,0.1,0,0.1-0.1,0.1h-0.2c-0.1,0-0.1,0-0.1-0.1c-0.2,0.1-0.3,0.1-0.4,0.1v-0.1l0.1-0.1l-0.4,0.1h-0.2v0.2 c0.2,0,0.3,0,0.3,0.1c-0.1,0-0.1,0.1-0.1,0.3l-0.4-0.1V41h0.1l0.8,0.1l0.1-0.1v-0.2c-0.3,0-0.4,0-0.4-0.1l0.8-0.1h0.1v0.1h-0.1v0.1 c0.2,0,0.3,0,0.3,0.1v3.8c0,0,0,0.1-0.1,0.1l0.1,0.1l-0.1,0.1c0.2,0.2,0.3,0.4,0.4,0.4l0.1-0.1h2.9c0.1,0,0.3,0,0.4,0.1 c0.2-0.2,0.3-0.3,0.3-0.5V44c0-0.2,0-0.5-0.1-0.6c0-0.2,0.1-0.5,0.1-0.7c0-0.4,0-0.8-0.1-1.2c0-0.5,0.1-0.9,0.1-1.2 c0-0.1,0-0.6-0.1-1.7l0.1-0.3l-0.1-0.3c0-1,0.1-1.7,0.1-2.1l-0.1-0.7c0-0.2,0.1-0.4,0.1-0.8v-0.2c0-0.1,0.1-0.1,0.2-0.2l-0.3-0.5 v-0.1c0-0.1,0.2-0.2,0.6-0.5c-0.4-0.1-0.6-0.2-0.6-0.3V32c0-0.1,0.1-0.1,0.1-0.1v0.1l0.1-0.1h0.1l0.1,0.1l0.1-0.1 c0-0.1-0.1-0.2-0.1-0.2c0.1,0,0.2-0.1,0.2-0.1v-0.1l-0.4-0.1c0,0.1-0.1,0.1-0.2,0.2h-0.1c0-0.3-0.1-0.4-0.1-0.6 c0-0.1,0-0.2,0.1-0.4c-0.1,0-0.1,0-0.1-0.1c0,0,0.2,0,0.4-0.1v-0.1c-0.3,0-0.4,0-0.4-0.1v-1.4l0.1-0.2l-0.1-0.2l0.3-0.3 c-0.2,0-0.3,0-0.3-0.1v-0.5c0-0.1,0.2-0.2,0.5-0.2l-0.1-0.4h-0.1l-0.1,0.1l0.1,0.1v0.1h-0.1c-0.1,0-0.1,0-0.1-0.1v-2.1l0.1-0.1 l0.1,0.1h0.3c0-0.1-0.1-0.2-0.4-0.4l0.1-0.1c-0.1,0-0.1,0-0.1-0.1v-0.6l0.1-0.2l-0.1-0.2v-0.7h-1.6c-0.2-0.1-0.3-0.2-0.3-0.5v-0.5 h0.1l0.3,0.2h0.1v-0.1l-0.5-0.5v-1.4c0,0,0-0.1,0.1-0.1l-0.1-0.1v-0.9c0-0.4,0.1-0.6,0.3-0.6h0.4V18l-0.1,0.1l0.4,0.1 c0.1,0,0.1-0.1,0.1-0.3h4.4c0,0,0.1,0,0.1,0.1l0.1-0.1h0.1l0.2,0.1c0-0.1,0.1-0.1,0.1-0.1h0.4c0.1,0,0.2,0.1,0.3,0.3v0.6 c0,0.1,0,0.1-0.1,0.1h-0.1v-0.1l0.1-0.2h-0.4c-0.2,0-0.4,0.1-0.4,0.1c0,0.1,0.1,0.2,0.1,0.2c-0.1,0-0.2,0.1-0.3,0.1 c0,0.1,0.1,0.1,0.1,0.1s0.2,0,0.4-0.1c0.3,0.1,0.5,0.2,0.5,0.3v1l-0.4,0.3c0.3,0,0.4,0.1,0.4,0.4v0.5c0,0.1-0.1,0.1-0.2,0.1v0.1 c0.1,0,0.2,0,0.2,0.1V25c0,0.1-0.1,0.1-0.3,0.1l0.1,0.1l-0.2,0.3c0.2,0,0.3,0.1,0.4,0.3v1.5h-0.1c0-0.2-0.1-0.3-0.2-0.3h-0.2 c0,0.2-0.2,0.3-0.6,0.3c0,0.3,0.3,0.4,0.7,0.4v0.1c-0.3,0-0.6,0-0.9,0.1c-0.1,0-0.2-0.1-0.2-0.1c0,0.2-0.2,0.4-0.4,0.4v0.1 c0,0.1,0.1,0.1,0.1,0.1h0.1l-0.1-0.1v-0.1h0.1c0,0,0,0.1,0.1,0.2c-0.3,0.2-0.4,0.3-0.4,0.4c0.1,0,0.2,0,0.3,0.1c0,0,0-0.1,0.1-0.1 l0.1,0.1c0,0.1-0.1,0.2-0.3,0.2v0.1c0.1,0,0.2,0.1,0.2,0.3h0.1v-0.4c0.1,0,0.1,0.1,0.2,0.2l-0.2,0.4c0.2,0,0.4,0.1,0.4,0.4v0.2h0.2 v-0.2c0-0.2-0.1-0.5-0.2-0.6c0,0,0-0.1,0.1-0.1l-0.1-0.1v-0.1c0.2,0,0.4-0.1,0.4-0.4c0,0-0.1,0-0.1-0.1c-0.2,0.1-0.3,0.1-0.4,0.1 v-0.1c0-0.1,0.1-0.1,0.1-0.1h0.4c0-0.1,0-0.2,0.1-0.3c0-0.1,0-0.1-0.1-0.1h-0.1c0,0.1,0,0.2-0.1,0.2h-0.1v-0.1 c0-0.2,0.3-0.4,0.8-0.6h0.1v0.1c0,0,0,0.1-0.1,0.1l0.1,0.1c0,0,0,0.1-0.1,0.1l0.1,0.1c0,0.2-0.1,0.3-0.1,0.3 c0.1,0.2,0.1,0.3,0.1,0.4c0,0.4,0,1.2,0.1,2.5c0,0.1-0.1,0.2-0.1,0.2h-0.1c-0.1,0-0.1-0.1-0.1-0.3h-0.1c0,0.2-0.2,0.4-0.5,0.6 c0,0,0.1,0,0.1,0.1c0.3-0.1,0.6-0.2,0.7-0.3c0.1,0.1,0.1,0.3,0.1,0.7c0,0.6-0.3,1-0.8,1.1c-0.1,0-0.1,0.1-0.1,0.1h0.1l0.7-0.1 c0.1,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.3-0.1,0.5c0,0.3,0.1,0.6,0.1,0.9v0.4c0,0.1-0.1,0.2-0.3,0.3h-0.1c0,0-0.1,0-0.1-0.1 c-0.1,0-0.2,0.1-0.2,0.1v0.1c0.1,0.1,0.1,0.2,0.1,0.4h0.2l0.1-0.1l0.1,0.1c-0.1,0-0.1,0.1-0.1,0.1l0.1,0.2c0,0.1-0.1,0.2-0.4,0.4 l-0.1,0.2h0.2c0-0.1,0-0.2,0.1-0.2c0.1,0,0.1,0.1,0.1,0.1c0,0-0.1,0-0.1,0.1c0.1,0,0.2,0,0.2,0.1V38c-0.1,0.3-0.2,0.4-0.4,0.4v0.1 c0,0.1,0.1,0.1,0.4,0.1V39h-0.4v0.4h0.1l0.3-0.2h0.1v0.1c0,0,0,0.1-0.1,0.1c0,0.1,0,0.1,0.1,0.1c0,0.5-0.1,0.8-0.1,1.1v0.8 c0,0.4,0,0.9,0.1,1.5c0,0.3-0.2,0.5-0.6,0.5l-0.4-0.1h-0.5c0,0.1,0.1,0.1,0.2,0.2c0,0,0-0.1,0.1-0.1c0,0.1,0.3,0.2,0.8,0.2 c0.2,0.1,0.3,0.3,0.3,0.4c0,0.7-0.1,1.2-0.1,1.5c-0.2,0.1-0.3,0.2-0.4,0.2l0.1,0.1l0.1-0.1c0.1,0,0.1,0.1,0.1,0.1 c-0.2,0.9-0.4,1.4-0.6,1.7c0,0.2-0.2,0.3-0.5,0.3v0.2h0.1v0.1c-1,1-2.1,1.5-3.5,1.5h-0.4v-0.1h0.2v-0.1c-0.2,0-0.4-0.1-0.7-0.4 c-0.1,0-0.1,0.1-0.1,0.1v0.1c0.2,0.2,0.3,0.3,0.3,0.4h-0.5l0.1-0.4h-0.1c-0.2,0.3-0.3,0.4-0.6,0.4h-2.8c-0.1,0-0.2,0-0.3-0.1 c0,0-0.1,0-0.1,0.1c-0.6,0-1.2-0.2-1.8-0.6c-0.2,0-0.3,0-0.3-0.1c0.4,0,0.5-0.1,0.6-0.2v-0.1c-0.4,0-0.6,0.1-0.6,0.3h-0.1 c-0.1,0-0.2-0.1-0.4-0.4c0-0.1,0.2-0.2,0.6-0.2v-0.1L102,48v-0.1c0-0.1,0.1-0.1,0.2-0.1v-0.1c-0.1,0-0.2,0-0.2-0.1v-0.1l0.2-0.3 c-0.2,0-0.3-0.1-0.3-0.2l0.1-0.4h-0.1c0.1-0.2,0.1-0.3,0.2-0.3l0.1,0.1c0-0.1,0.1-0.1,0.1-0.1h0.2c0,0.2,0.1,0.3,0.4,0.3v0.1h0.2 c0-0.1,0.1-0.2,0.2-0.2c0-0.1,0-0.1-0.1-0.1l-0.4,0.1v-0.1l0.4-0.4l-0.1-0.1c-0.1,0-0.2,0-0.4,0.1c0-0.1,0-0.1-0.1-0.1l-0.3,0.3 c-0.2-0.2-0.4-0.4-0.4-0.6h0.1c0.1,0,0.2-0.1,0.4-0.4H102c0-0.1,0-0.2,0.1-0.3c0-0.1-0.1-0.2-0.1-0.3v-0.1l0.2-0.3v-0.1 c-0.2,0-0.3-0.1-0.3-0.4c0.3-0.3,0.4-0.4,0.4-0.5h-0.1c-0.1,0-0.2,0.1-0.2,0.1v-0.1l0.1-0.1c-0.1,0-0.1,0-0.1-0.1v-0.1 c0,0,0-0.1,0.1-0.1c-0.1-0.2-0.1-0.3-0.1-0.4c0.1-0.4,0.3-0.6,0.4-0.6h0.4v-0.1c-0.2-0.1-0.3-0.3-0.3-0.4H102v-0.1 c0-0.1,0-0.3,0.1-0.4c-0.1,0-0.2,0-0.2-0.1c0.2-0.1,0.3-0.1,0.4-0.1l-0.1,0.1v0.1c0.3,0,0.7,0.3,1.1,0.9v0.1l-0.1,0.1h0.1 c0.2-0.1,0.3-0.1,0.3-0.2v-0.1c-0.3-0.6-0.6-0.8-0.6-0.8v-0.1c0.1,0,0.3-0.1,0.4-0.4V40H103v0.3l-0.4,0.1c-0.1-0.1-0.2-0.3-0.2-0.5 c0.2,0,0.4-0.1,0.4-0.2c-0.2-0.1-0.3-0.1-0.4-0.1c-0.2,0.2-0.4,0.3-0.4,0.3c-0.1,0-0.2-0.1-0.2-0.1V41c0,0.2,0,0.3-0.1,0.4l0.1,0.4 V42c0,0.2,0,0.5-0.1,0.6l0.1,1.3h-0.1l0.1,0.1v0.2c0,0,0,0.1-0.1,0.1l0.1,0.1v0.1c0,0.1,0,0.2-0.1,0.3c0,0.1,0.1,0.2,0.1,0.2 l-0.1,0.4l0.1,0.4c0,0.1,0,0.2-0.1,0.3c0,0.3,0.1,0.6,0.1,0.8v0.8c0,0.1,0,0.2,0.1,0.3c-0.1,0.2-0.1,0.3-0.1,0.4h-0.1 c-0.6-0.6-1-1.5-1.2-2.5v-1.5l0.1-0.2c-0.1,0-0.1,0-0.1-0.1v-1.3l0.2-0.3c-0.2,0-0.3-0.3-0.3-0.9v-4.1l0.2-0.4l-0.1-0.3 c0-0.1,0.1-0.2,0.1-0.2c-0.1,0-0.1,0-0.1-0.1v-0.7l0.2-0.3c-0.1,0-0.1-0.1-0.2-0.2v-0.8c0-0.1,0.1-0.1,0.3-0.1v-0.2l-0.3-0.3V20.7 c0-0.1,0.1-0.1,0.3-0.1v-0.1c-0.2,0-0.3,0-0.3-0.1v-1.3l-0.1-0.4c0.1,0,0.1,0,0.1-0.1c-0.1,0-0.1,0-0.1-0.1v-0.8 c0-0.1,0-0.2,0.1-0.3l-0.1-0.1c0-0.5,0.1-0.7,0.1-0.7l-0.1-0.1l0.1-0.2v-0.3h-0.2V15h0.1l0.1,0.1c0-0.2,0-0.3,0.1-0.4l-0.1-0.1 c-0.1,0-0.2,0.1-0.2,0.1V9.5c0.4-0.5,0.7-0.7,0.9-0.7V8.7c-0.2,0-0.4-0.2-0.6-0.6h-0.1c0,0.2,0.1,0.3,0.2,0.5 c-0.1,0.2-0.2,0.4-0.4,0.4V8.7c0-0.1,0-0.2,0.1-0.2l-0.1-0.4V5.1c0-0.8,0.1-1.3,0.2-1.3l-0.1-0.1V3.3c0.2-0.6,0.5-1.1,0.9-1.6h0.1 v2.2c0,0.1,0,0.2-0.1,0.3c0.1,0.3,0.1,0.6,0.1,0.9c0,0.6-0.1,0.9-0.1,1.1l0.1,0.1c0,0.1-0.1,0.2-0.1,0.3c0,0.2,0,0.3,0.1,0.4 c0,0.3-0.1,0.4-0.1,0.6c0,0.6,0.1,0.9,0.1,1l-0.1,0.1l0.1,0.5c0,0,0,0.1-0.1,0.1c0,0.1,0,0.1,0.1,0.1l-0.1,2.5c0,2,0.1,3.8,0.2,5.4 c-0.1,0.4-0.1,0.6-0.1,0.6l0.1,0.1c0,0.1,0,0.1-0.1,0.1c0,0.6,0.1,1.1,0.1,1.4v0.4c0,0.4,0,0.9-0.1,1.5c0.1,0.2,0.1,0.4,0.1,0.8 c0,0.1,0,0.5-0.1,1.3c0.1,0.2,0.1,0.3,0.1,0.4v2.6c0,0.4,0,0.9-0.1,1.5c0,0.1,0.1,0.2,0.1,0.2h-0.1l0.1,0.1V30c0,0.3,0,0.6-0.1,0.8 c0,0,0,0.1,0.1,0.1l-0.1,0.5v2l0.1,0.4c0,0.1-0.1,0.2-0.1,0.3l0.3,3.4c0,0.3-0.1,0.6-0.1,0.9v1.3h0.1c0.1,0,0.2-0.2,0.2-0.5 l-0.1-0.1V39c0-0.1,0.1-0.1,0.3-0.2l-0.1-0.1l0.1-0.1H102v-0.2h0.1c0.2,0.2,0.5,0.3,0.6,0.3h0.1l0.1-0.1l-0.1-0.1v-0.1 c0,0,0.1,0,0.1,0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1c-0.2,0-0.3-0.1-0.3-0.3h-0.7c-0.1,0-0.1,0-0.1-0.1h0.1l-0.2-0.4 c0.1-0.5,0.3-0.7,0.5-0.7c0-0.1-0.1-0.2-0.4-0.4l0.1-0.1c0,0,0-0.2-0.1-0.4l0.1-0.1c0-0.1-0.1-0.2-0.1-0.2l0.1-0.1 c0-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0.1-0.1l-0.1-0.4l0.1-0.4l-0.1-0.4c0-0.8,0.1-1.3,0.1-1.5c0-0.1-0.1-0.2-0.1-0.4v-0.1l0.2-0.3 c-0.2,0-0.3,0-0.3-0.1c0.1-0.3,0.2-0.4,0.4-0.4l-0.1-0.1c0.1,0,0.2-0.1,0.3-0.1v-0.1h-0.3v-0.1h0.1c0.1,0,0.2,0,0.4,0.1 c0.3-0.1,0.5-0.1,0.5-0.2c-0.1,0-0.2,0-0.2-0.1c0.1,0,0.1,0,0.1-0.1c0,0-0.1,0-0.2-0.1c0,0-0.2,0.1-0.4,0.3h-0.1 c-0.1,0-0.1,0-0.1-0.1c0,0,0-0.1,0.1-0.1c0-0.1-0.1-0.2-0.1-0.2l-0.2,0.1H102V30c0-0.1,0.1-0.2,0.1-0.2l-0.1-0.1L102,29V29 c0-0.2,0-0.4-0.1-0.6c0-0.2,0.2-0.4,0.6-0.6c0-0.1,0.1-0.1,0.1-0.1c0.1,0,0.2,0.1,0.2,0.1l-0.1-0.1v-0.1c0.2,0,0.4-0.1,0.4-0.2 v-0.1h-0.1l-0.4,0.1c0,0,0-0.1-0.1-0.1c0,0.1,0,0.1-0.1,0.1h-0.2c-0.3-0.2-0.4-0.3-0.4-0.4v-0.4c0-0.3,0.1-0.5,0.1-0.5 c-0.1-0.2-0.1-0.3-0.1-0.4c0.1,0,0.2-0.1,0.3-0.1l-0.3-0.3v-0.1c0,0,0-0.1,0.1-0.1l-0.1-0.1l0.1-0.1c0-0.2-0.1-0.4-0.1-0.4l0.1-0.4 v-0.5c0-0.1,0.1-0.2,0.4-0.3l-0.1-0.1v-0.2l0.6-0.1l0.1,0.1v0.1h-0.3c0.1,0.1,0.1,0.2,0.1,0.4l0.6-0.3v-0.1h-0.1v-0.1 c0.4,0,0.6,0,0.8-0.1c0.1,0,0.2,0.1,0.4,0.1v-0.2c-0.4,0-0.6-0.1-0.6-0.3c-0.3,0.2-0.6,0.3-0.6,0.3c0-0.1,0-0.1-0.1-0.1h-0.1 l-0.2,0.1h-0.1v-0.1l0.1-0.1c-0.1,0-0.1,0-0.1-0.1c0,0,0.1,0,0.1-0.1h-0.1v0.1h-0.1v-0.1l0.1-0.2v-0.1h-0.1v0.1 c-0.1,0-0.2-0.1-0.4-0.4v-0.3c0-0.3,0.1-0.4,0.2-0.4c0.1,0,0.2,0.1,0.3,0.1c0-0.1,0.1-0.2,0.3-0.3h0.1l0.1,0.1c0-0.7,0.3-1,0.8-1 l0.4-0.2v-0.1H104c-0.1,0-0.5,0.2-1.3,0.5l0.1,0.1c0,0.1-0.1,0.1-0.3,0.2l-0.1-0.1c0-0.1,0-0.2,0.1-0.3v-0.1h-0.1 c0,0.1-0.1,0.2-0.4,0.4h-0.1v-0.1l0.4-0.4c-0.2,0-0.3-0.1-0.4-0.3c0-0.4,0.1-0.7,0.1-1v-0.3c0.1,0,0.2-0.1,0.4-0.4h0.3V18 c-0.1,0-0.3-0.1-0.4-0.4c-0.1,0-0.2,0-0.2-0.1l0.1-0.3c-0.1-0.2-0.1-0.3-0.1-0.4c0,0,0-0.1,0.1-0.1l-0.1-0.4c0-0.3,0-0.5,0.1-0.5 l-0.1-0.4v-0.3c0-0.3,0.1-0.5,0.4-0.5v-0.1c-0.1,0-0.2-0.1-0.4-0.4c0.1-0.2,0.1-0.3,0.2-0.3h0.1c0.1,0,0.1,0.1,0.1,0.2 c0.3,0,0.4-0.2,0.4-0.5c0,0,0.1,0,0.1-0.1v-0.1l-0.1-0.1c0.1,0,0.2-0.1,0.4-0.1c0-0.1-0.1-0.1-0.2-0.1c-0.2,0-0.4,0.2-0.6,0.6 l-0.3,0.1l-0.1-0.2h0.3v-0.1c-0.2,0-0.4,0-0.4-0.1c0.4-0.1,0.6-0.2,0.6-0.4c-0.4,0-0.6-0.2-0.6-0.5v-0.3l0.1-0.1c0,0,0,0.1,0.1,0.1 c0-0.1,0.2-0.2,0.6-0.3l-0.1,0.1v0.1c0.2,0,0.3,0.1,0.3,0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1c0-0.1,0-0.1-0.1-0.1l-0.1,0.1l-0.1-0.2 c0.1,0,0.2-0.1,0.4-0.4h0.1v-0.1c-0.1,0-0.2,0-0.3-0.1c-0.3,0.2-0.5,0.4-0.6,0.6h-0.1l0.1,0.1v0.1H102c0-0.6,0.2-1,0.6-1.2 c0-0.1-0.1-0.2-0.4-0.3c0,0.1,0,0.1-0.1,0.1s-0.1,0-0.1-0.1c0.2,0,0.3-0.1,0.3-0.1c0.5,0.1,0.8,0.2,0.8,0.3 c0.2-0.1,0.4-0.2,0.6-0.2c0-0.1,0-0.1-0.1-0.1l-0.6,0.1l-0.1-0.1l0.1-0.1c-0.3,0-0.4,0-0.4-0.1c0.1,0,0.2-0.1,0.3-0.3 c0.1,0,0.2,0.1,0.2,0.2h0.4v-0.1c-0.1,0-0.2-0.1-0.4-0.3l-0.4,0.1l-0.1-0.1c-0.2,0.1-0.3,0.1-0.4,0.1L102,9.7l0.2-0.3 c-0.2,0-0.3,0-0.3-0.1V9.2c0,0,0-0.1,0.1-0.1c0-0.1-0.1-0.2-0.1-0.2l0.3-0.5c-0.2-0.1-0.3-0.1-0.3-0.2l0.6-0.4l0.1,0.1h0.2 c0,0.1-0.1,0.2-0.1,0.2h0.3c0.1,0,0.2,0,0.3-0.1c0.1,0,0.2,0.1,0.3,0.1h0.1c-0.1-0.3-0.3-0.4-0.6-0.4V7.6c0.1,0,0.1,0,0.1-0.1V7.4 c-0.6,0.1-1,0.2-1.1,0.4H102c0-0.1,0-0.3,0.1-0.4c-0.1,0-0.1,0-0.1-0.1c0.1,0,0.1,0,0.1-0.1c-0.1,0-0.1-0.1-0.2-0.2V6.8 c0,0,0-0.1,0.1-0.1l-0.1-0.1c0-0.1,0.1-0.1,0.2-0.1L102,6.2c0.1,0,0.2-0.1,0.2-0.1V6c-0.1,0-0.2,0-0.2-0.1c0,0,0-0.1,0.1-0.1 L102,5.7l0.1-0.1c-0.1,0-0.2-0.2-0.2-0.4c0.1-0.2,0.1-0.3,0.1-0.4c-0.1,0-0.1,0-0.1-0.1c0-0.1,0.1-0.2,0.1-0.2l-0.1-0.4 c0,0,0-0.2,0.1-0.4c0,0-0.1,0-0.1-0.1l0.1-0.1c0,0.1,0.1,0.1,0.2,0.2h0.1V3.5c-0.3,0-0.5-0.1-0.5-0.2l0.1-0.1c0,0,0-0.1-0.1-0.1 l0.1-0.4c0-0.2,0-0.3-0.1-0.4l0.1-0.3c0-0.4-0.1-0.8-0.1-1.1C102.8,0.4,104.2,0,106.3,0z M100.6,10.5L100.6,10.5l0.3,0.1 c0.1,0,0.2-0.2,0.3-0.5h-0.1C100.9,10.4,100.7,10.5,100.6,10.5z M100.6,24.3L100.6,24.3l0.1,0.1v-0.1H100.6z M100.7,22.5 L100.7,22.5l0.2,0.1v-0.1H100.7z M100.8,42.8L100.8,42.8l0.2,0.1v-0.1H100.8z M100.8,43.8c0.1,0.2,0.1,0.3,0.2,0.3h0.2 c0.1,0,0.1,0,0.1-0.1c-0.2-0.1-0.3-0.1-0.4-0.1H100.8z M100.9,11.7C101,11.9,101,12,101,12h0.1v-0.3H100.9z M100.9,13.8 c0,0.1,0.1,0.1,0.1,0.1h0.1c0-0.1,0-0.1-0.1-0.1H100.9z M100.9,45.6v0.2c0.3,0,0.4,0.1,0.4,0.3h0.1v-0.3c-0.1,0-0.2-0.1-0.4-0.2 H100.9z M101.1,33.8c0,0.1,0,0.1-0.1,0.1v0.4c0.1,0,0.2-0.1,0.4-0.4L101.1,33.8L101.1,33.8z M100.9,36.3v0.1h0.1 C101.1,36.3,101,36.3,100.9,36.3z M101,10h0.1V9.8C101.1,9.9,101,9.9,101,10z M101,10.8V11h0.2C101.2,10.9,101.2,10.8,101,10.8 L101,10.8z M101,44.4L101,44.4l0.1,0.1v-0.1H101z M101.1,30.9L101.1,30.9l0.1,0.1v-0.1H101.1z M101.2,43L101.2,43l0.1,0.1V43H101.2 z M101.2,45.5L101.2,45.5l0.2,0.1v-0.1H101.2z M101.9,40L101.9,40c0.2,0,0.2,0.1,0.2,0.1l-0.1,0.1L101.9,40L101.9,40z M102,13.1 h0.1v0.1H102V13.1z M102.2,27.4L102.2,27.4c0.1,0.1,0,0.1-0.1,0.2v-0.1C102.1,27.5,102.1,27.4,102.2,27.4z M102.2,48.2L102.2,48.2 l0.1,0.1h-0.2C102.1,48.2,102.1,48.2,102.2,48.2z M102.1,1.8v0.1h0.3V1.8H102.1z M102.1,4.9l0.1,0.1h0.1l0.5-0.1c0,0,0,0.1,0.1,0.1 l-0.1,0.1v0.1h0.4c0.1,0.1,0.2,0.1,0.4,0.1v0.2h-0.1l-0.1-0.1c0,0.1-0.2,0.2-0.5,0.3V6c0.1,0,0.2,0,0.4,0.1c0.4,0,0.8-0.2,1.1-0.6 h0.1V5.5c-0.1,0-0.1,0-0.1-0.1c0-0.1,0.1-0.2,0.1-0.2L104,5.1c-0.2,0.1-0.4,0.1-0.6,0.1V5.1c0-0.1,0.1-0.2,0.4-0.2V4.9 c-0.2,0-0.3-0.1-0.3-0.2l-0.4,0.1l-0.3-0.1C102.4,4.7,102.1,4.8,102.1,4.9z M102.1,17.3L102.1,17.3c0,0.1,0.1,0.2,0.2,0.3 c0.1,0,0.2-0.1,0.3-0.3c0,0-0.1,0-0.2-0.1C102.3,17.3,102.2,17.3,102.1,17.3z M102.1,19.1L102.1,19.1l0.2,0.1v-0.1H102.1z M102.2,4.4v0.2h0.2V4.4H102.2z M102.2,35.9L102.2,35.9l0.1,0.2c0,0.1-0.1,0.2-0.1,0.2l0.2,0.1h0.3c0.1-0.1,0.2-0.1,0.3-0.1v-0.1 c-0.2,0-0.4-0.1-0.6-0.4H102.2z M102.2,44.9L102.2,44.9l0.3,0.1v-0.1H102.2z M102.3,9.3L102.3,9.3l0.3,0.1V9.3c0-0.1,0-0.1-0.1-0.1 C102.3,9.2,102.3,9.2,102.3,9.3z M102.3,27.1L102.3,27.1c0.2,0,0.2,0,0.2-0.1h-0.1C102.3,26.9,102.3,27,102.3,27.1z M102.3,31.5 h0.1c0.1,0,0.2-0.1,0.3-0.3v-0.1h-0.1C102.5,31.1,102.4,31.3,102.3,31.5z M102.3,47.7h0.2c0.2-0.1,0.3-0.2,0.4-0.2v-0.3h-0.1 C102.7,47.3,102.6,47.4,102.3,47.7z M102.3,47.3L102.3,47.3l0.1,0.1v-0.1H102.3z M102.4,18.8l-0.1,0.1h0.5v-0.1L102.4,18.8z M102.5,38l0.1,0.2c0,0.1,0,0.1-0.1,0.1l-0.1-0.3L102.5,38z M102.4,25.4v0.1h0.1v-0.1H102.4z M102.5,45.6L102.5,45.6l0.1,0.1v-0.1 H102.5z M102.8,16c0,0.1-0.1,0.2-0.2,0.4v0.1c0.3-0.1,0.5-0.1,0.5-0.2C102.9,16.2,102.8,16.2,102.8,16L102.8,16z M102.6,17.6v0.1 l0.4-0.1h0.1v0.1h-0.2v0.1c0.1,0,0.2,0.1,0.4,0.3h0.1v-0.1c-0.1,0-0.2,0-0.3-0.1c0-0.1,0.1-0.2,0.1-0.2c0-0.2-0.1-0.3-0.1-0.3 C102.9,17.5,102.7,17.6,102.6,17.6z M102.6,42.5h0.1c0.1,0,0.1,0,0.1-0.1v-0.1C102.8,42.2,102.7,42.3,102.6,42.5z M102.6,6.5h0.1 V6.3C102.7,6.3,102.6,6.4,102.6,6.5z M102.7,8.7l-0.1,0.1l0.1,0.1c0.1,0,0.2-0.1,0.2-0.1V8.8L102.7,8.7z M102.6,15 c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1H102.6z M102.6,16.8V17h0.2c0.1,0,0.1,0,0.1-0.1L102.6,16.8z M102.6,42L102.6,42l0.1,0.1 c0.1,0,0.1,0,0.1-0.1v-0.1h-0.1C102.7,41.9,102.6,42,102.6,42z M102.7,6.8L102.7,6.8l0.1,0.1V6.6C102.7,6.6,102.7,6.7,102.7,6.8z M102.7,18.6L102.7,18.6c0.1,0.1,0.1,0,0.1-0.1v-0.1C102.7,18.4,102.7,18.5,102.7,18.6z M102.7,31.9L102.7,31.9l0.1,0.1v-0.1H102.7 z M102.8,1.9V2h0.1L102.8,1.9L102.8,1.9z M102.8,9.6h0.3c0-0.1,0-0.1-0.1-0.1C102.8,9.5,102.8,9.6,102.8,9.6z M102.8,12.5v0.1h0.1 L102.8,12.5L102.8,12.5z M102.8,23.8L102.8,23.8l0.1,0.1v-0.1H102.8z M102.8,31.6v0.1h0.2c0-0.1,0.1-0.1,0.2-0.1v-0.2h-0.1 C103,31.6,102.9,31.6,102.8,31.6z M102.9,23.6v0.1h0.1L102.9,23.6L102.9,23.6z M103.1,36.5h-0.2v0.1c0.1,0,0.2,0,0.3,0.1h0.4 c0.2,0,0.4-0.1,0.4-0.2c0-0.1-0.1-0.2-0.4-0.3h-0.1C103.4,36.4,103.3,36.5,103.1,36.5z M102.9,44.4v0.1h0.2l0.4,0.1v-0.1 c-0.1-0.1-0.1-0.2-0.1-0.4h-0.1C103.1,44.3,103,44.4,102.9,44.4z M102.9,44.9L102.9,44.9h0.4v-0.2h-0.2 C103,44.7,103,44.8,102.9,44.9z M103,6.3L103,6.3c0.1,0.1,0.1,0.1,0.1,0.1c0.1,0,0.2-0.1,0.2-0.1c0-0.1,0-0.1-0.1-0.1 C103.1,6.3,103,6.3,103,6.3z M103,25.7L103,25.7c0,0.1,0.1,0.1,0.2,0.1l0.1-0.1c0,0-0.1,0-0.1-0.1C103.1,25.6,103,25.7,103,25.7z M103,31.9v0.2h0.2V32C103.2,31.9,103.1,31.9,103,31.9L103,31.9z M103,34.8v0.1h0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1H103z M103,49v0.1 h0.1L103,49L103,49z M103.1,3.4L103,3.6l0.4,0.2l0.1-0.1L103.1,3.4z M103.1,7L103,7.2h0.2C103.3,7.1,103.2,7,103.1,7z M103.5,18.4 c0,0.3-0.2,0.4-0.5,0.4v0.1c0.3,0,0.7-0.2,1.1-0.6H103.5z M103,28.3L103,28.3c0.1,0.1,0.2,0.1,0.2,0.1c0,0.1-0.1,0.2-0.1,0.2h0.2 c0-0.1,0-0.2,0.1-0.3v-0.1c0,0-0.1,0-0.2-0.1C103.2,28.2,103.1,28.3,103,28.3z M103.3,31.1v0.1l-0.1-0.1c0,0,0,0.1-0.1,0.2h0.1 c0.1,0,0.1,0,0.1-0.1l0.1,0.1h0.1v-0.1C103.5,31.1,103.4,31.1,103.3,31.1L103.3,31.1z M103,46.8V47c0,0.1,0.1,0.1,0.1,0.1 c0-0.1,0.1-0.1,0.2-0.1v-0.1L103,46.8z M103,48.4L103,48.4c0.2,0.1,0.3,0.2,0.3,0.4h0.2v-0.2c-0.1,0-0.2,0-0.2-0.1H103z M103.2,14.7l-0.1,0.1l0.4,0.1v-0.1L103.2,14.7z M103.1,21v0.1h0.1L103.1,21L103.1,21z M103.1,29.6v0.1h0.2v-0.1H103.1z M103.1,35.8v0.1h0.1L103.1,35.8L103.1,35.8z M103.1,40.5L103.1,40.5l0.4-0.1v-0.1c-0.1,0-0.1,0-0.1-0.1 C103.2,40.4,103.1,40.4,103.1,40.5z M103.1,47.5v0.2l0.4-0.1c0-0.1,0-0.1-0.1-0.1H103.1z M103.2,8.4v0.2h0.2c0-0.1,0-0.2,0.1-0.3 V8.2h-0.2C103.2,8.2,103.2,8.3,103.2,8.4z M103.2,25L103.2,25l0.4,0.1h0.1c0-0.1,0-0.1-0.1-0.1H103.2z M103.2,45.3L103.2,45.3 c0.6,0.3,1,0.4,1.1,0.4h0.1v-0.1C104.4,45.6,104,45.5,103.2,45.3L103.2,45.3z M103.6,26.9c0,0.3-0.1,0.4-0.4,0.4 c0,0.1,0.1,0.1,0.1,0.1c0,0,0-0.1,0.1-0.1c0,0.1,0.1,0.1,0.2,0.2c0,0,0.1-0.1,0.2-0.2c0,0,0-0.1-0.1-0.1l0.1-0.4v-0.1H103.6z M103.3,35.6c0,0.1,0,0.2-0.1,0.3h0.1l0.1-0.1C103.4,35.7,103.4,35.6,103.3,35.6L103.3,35.6z M103.3,2.6L103.3,2.6 c0.2,0,0.2,0,0.2-0.1h-0.1C103.4,2.5,103.3,2.5,103.3,2.6z M103.3,25.6L103.3,25.6l0.2,0.1c0.2-0.1,0.3-0.1,0.4-0.1h0.2 c0-0.1,0-0.2,0.1-0.3h-0.1C104.1,25.2,103.8,25.4,103.3,25.6z M103.3,25.9V26l0.4,0.1v-0.1L103.3,25.9z M103.3,28.9V29 c0.1,0.1,0.1,0.2,0.1,0.4c0.1,0,0.2-0.1,0.3-0.3V29C103.6,29,103.5,29,103.3,28.9z M103.5,31.5c0,0.1,0,0.2-0.1,0.4h0.1 c0.1,0,0.2-0.1,0.2-0.1v-0.1C103.7,31.6,103.6,31.6,103.5,31.5z M103.4,3.3c0.1,0.4,0.4,0.6,0.7,0.6c0.1,0,0.2-0.1,0.2-0.1V3.7 c-0.2,0-0.4,0-0.4-0.1V3.5c0.2,0,0.3-0.1,0.3-0.2V3.2h-0.1c-0.1,0.1-0.3,0.1-0.5,0.1V3.2h-0.1L103.4,3.3z M103.4,10.1 c0,0.1,0.1,0.1,0.1,0.1v-0.1h0.4l0.2,0.1c0.1-0.1,0.2-0.1,0.3-0.1v-0.1c-0.3,0-0.5,0-0.5-0.1C103.7,10.1,103.5,10.1,103.4,10.1z M103.4,28v0.1h0.1c0.1,0,0.1,0,0.1-0.1c0,0-0.1,0-0.1-0.1C103.5,28,103.4,28,103.4,28z M103.4,32.9L103.4,32.9l0.1,0.1v-0.1H103.4 z M103.5,27.6L103.5,27.6c0,0.2,0.1,0.2,0.1,0.2v-0.1C103.6,27.7,103.6,27.6,103.5,27.6z M103.5,42.8L103.5,42.8l0.3,0.1 c0-0.1-0.1-0.2-0.1-0.2h-0.1C103.5,42.6,103.5,42.7,103.5,42.8z M103.5,13.5L103.5,13.5l0.5,0.1v-0.1H103.5z M103.5,15.5 L103.5,15.5l0.3,0.1v-0.1H103.5z M103.5,19.3v0.1c0,0.1,0.1,0.1,0.2,0.2l0.1-0.1C103.8,19.4,103.7,19.3,103.5,19.3L103.5,19.3z M103.5,23.3v0.4h0.1c0-0.1,0.1-0.2,0.2-0.4v-0.1L103.5,23.3z M103.5,35.5L103.5,35.5l0.1,0.1v-0.1H103.5z M103.6,8.9 c0,0.1,0.1,0.1,0.1,0.1V8.9H103.6z M103.7,13.2l-0.1,0.1l0.1,0.1l0.1-0.1L103.7,13.2z M103.6,48c0,0.1,0.1,0.1,0.1,0.1 c0-0.1,0.1-0.2,0.4-0.2c0-0.1,0-0.1-0.1-0.1C103.8,47.9,103.7,48,103.6,48z M103.7,14.5v0.1h0.1c0.1,0,0.1,0,0.1-0.1H103.7z M103.7,16v0.1h0.1L103.7,16L103.7,16z M103.7,38.2v0.1h0.1L103.7,38.2L103.7,38.2z M103.7,41.6l-0.1,0.1l0.1,0.1 c0.1,0,0.2-0.1,0.2-0.1v-0.1L103.7,41.6z M103.7,42.9V43h0.1L103.7,42.9L103.7,42.9z M103.7,43.2v0.1h0.1L103.7,43.2L103.7,43.2z M103.7,43.6L103.7,43.6l0.3,0.1v-0.1H103.7z M103.7,18.1L103.7,18.1l0.1,0.2c0.2-0.1,0.3-0.1,0.4-0.1v-0.2h-0.1 C104,18,103.9,18.1,103.7,18.1z M103.7,30v0.4h0.2l-0.1-0.4H103.7z M103.7,31.4L103.7,31.4c0,0.2,0.1,0.2,0.2,0.2l0.5-0.1v-0.1 h-0.1l-0.4,0.1C103.9,31.5,103.8,31.4,103.7,31.4z M103.7,46.3v0.1c0.1,0,0.1,0,0.1,0.1c0.1,0,0.2-0.1,0.2-0.1c0-0.1,0-0.1-0.1-0.1 H103.7z M103.8,4.4c0.1,0,0.4,0.1,0.8,0.1c0.1,0,0.2-0.1,0.3-0.1c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1V4.4c-0.3,0-0.5-0.1-0.8-0.3 C104,4.1,103.8,4.2,103.8,4.4z M103.9,10.8L103.9,10.8L103.9,10.8c0.2,0,0.3,0,0.4,0v-0.2C104.1,10.8,104,10.8,103.9,10.8z M103.9,15.3L103.9,15.3l0.1,0.1v-0.1H103.9z M103.9,28.6L103.9,28.6l0.2,0.1v-0.1H103.9z M103.9,48.9V49c0.1,0,0.3,0,0.6,0.1 l0.1-0.1v-0.1H103.9z M104,1.3c0,0.1,0.1,0.1,0.2,0.2c0.1,0,0.1,0,0.1-0.1V1.3H104z M104,4.6v0.1h0.4V4.7 C104.3,4.7,104.2,4.7,104,4.6z M104,12.9V13h0.1v-0.1H104z M104,21.3c0,0.1,0.1,0.1,0.1,0.1h0.2v-0.1L104,21.3z M104,35.1 c0.1,0.2,0.3,0.4,0.4,0.4c0.1,0,0.2-0.1,0.2-0.1c0-0.1-0.2-0.2-0.5-0.3H104z M104,41.4L104,41.4c0.2,0.1,0.4,0.1,0.4,0.1 c0-0.1-0.1-0.2-0.1-0.3C104.2,41.4,104.1,41.4,104,41.4z M104.2,13.1l-0.1-0.1v0.1l0.1,0.4h0.2c0.1,0,0.1-0.1,0.2-0.2 c0,0-0.1,0-0.1-0.1c0.1,0,0.2-0.1,0.2-0.1V13h-0.3L104.2,13.1z M104.1,8.4L104.1,8.4c0.1,0.1,0.2,0.1,0.3,0.2h0.1V8.5 C104.3,8.5,104.3,8.5,104.1,8.4L104.1,8.4z M104.1,15.3v0.1c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.1-0.1L104.1,15.3z M104.2,15.8 c0,0.1,0,0.4-0.1,0.8l0.1,0.1h0.1c0.1-0.2,0.3-0.4,0.4-0.4l-0.2-0.3c0-0.1,0.1-0.2,0.1-0.2H104.2z M104.1,17.2 c0.1,0.2,0.1,0.3,0.2,0.3h0.1c0-0.1-0.1-0.2-0.1-0.4C104.2,17.2,104.1,17.2,104.1,17.2z M104.1,18.9L104.1,18.9 c0,0.1,0.1,0.2,0.4,0.4h0.2C104.7,19.2,104.5,19.1,104.1,18.9z M104.1,38.3L104.1,38.3l0.4,0.1v-0.1c0,0-0.1,0-0.2-0.1 C104.2,38.2,104.1,38.3,104.1,38.3z M104.2,6.5L104.2,6.5l0.2,0.1V6.5H104.2z M104.4,22.5c0,0.1-0.1,0.1-0.2,0.1v0.1h0.2 c0-0.1,0.1-0.1,0.2-0.1v-0.1H104.4z M104.2,32.8L104.2,32.8l0.1,0.1v-0.1H104.2z M104.2,27.2L104.2,27.2c0,0.2,0.1,0.2,0.1,0.2 l0.1-0.1v-0.1H104.2z M104.2,28.6L104.2,28.6l0.4,0.1v-0.1L104.2,28.6z M104.2,36.6L104.2,36.6l0.3,0.1v-0.1H104.2z M104.2,46.3 L104.2,46.3l0.1,0.1v-0.1H104.2z M104.3,19.8L104.3,19.8l0.1,0.1v-0.1H104.3z M104.4,42.1l-0.1,0.2h0.1c0.1-0.1,0.2-0.1,0.3-0.1 v-0.1H104.4z M104.4,14.1L104.4,14.1l0.3,0.1v-0.1C104.6,14.1,104.5,14.1,104.4,14.1z M104.4,44.8v0.1h0.1 C104.5,44.8,104.5,44.8,104.4,44.8z M104.4,1.1v0.1h0.3V1.2C104.6,1.2,104.5,1.2,104.4,1.1z M104.4,13.9L104.4,13.9l0.1,0.1v-0.1 H104.4z M104.4,27L104.4,27l0.1,0.1V27H104.4z M104.5,18.1L104.5,18.1l0.1,0.1v-0.1H104.5z M104.6,2.5c0,0.1,0.1,0.1,0.1,0.1V2.5 H104.6z M104.6,3.4L104.6,3.4l0.1,0.1V3.4H104.6z M104.6,17.8L104.6,17.8l0.1,0.1v-0.1H104.6z M104.6,31.9v0.1h0.1L104.6,31.9 L104.6,31.9z M104.6,46.1l0.1,0.1c0.1-0.1,0.4-0.2,0.9-0.2c0-0.1,0-0.1-0.1-0.1C104.9,45.9,104.6,46,104.6,46.1z M104.8,7.5 c0,0.1,0,0.1-0.1,0.1c0,0.1,0.1,0.1,0.1,0.1h0.1c0-0.1,0-0.1,0.1-0.1C105,7.5,105,7.5,104.8,7.5L104.8,7.5z M104.7,34.5 c0,0.1,0.1,0.1,0.2,0.2c0-0.1,0.1-0.1,0.2-0.1l-0.1-0.1C104.9,34.5,104.8,34.5,104.7,34.5z M104.7,35.3v0.1h0.1L104.7,35.3 L104.7,35.3z M104.7,42.7v0.1h0.3v-0.1L104.7,42.7z M104.7,44.2L104.7,44.2l0.1,0.1v-0.1H104.7z M104.7,5.9h0.1 c0,0.1,0,0.1-0.1,0.1V5.9z M104.7,22.5L104.7,22.5l0.4,0.1v-0.1H104.7z M104.7,38.7L104.7,38.7l0.1,0.1v-0.1H104.7z M104.8,20.7 v0.1c0.1,0,0.1,0,0.1-0.1H104.8z M104.8,42.4L104.8,42.4l0.1,0.1v-0.1H104.8z M104.8,43.6v0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1H104.8z M104.8,48.9L104.8,48.9c0,0.2,0.3,0.3,0.8,0.3c0.1,0,0.2-0.1,0.3-0.3h-0.1l-0.4,0.1c0-0.1-0.1-0.2-0.1-0.2 C105.3,48.8,105.1,48.9,104.8,48.9z M104.9,1.3L104.9,1.3l0.1,0.1V1.3H104.9z M104.9,2.7h0.2V2.5H105 C104.9,2.5,104.9,2.6,104.9,2.7z M104.9,7.1L104.9,7.1l0.1,0.1V7.1H104.9z M104.9,8.4v0.1h0.1V8.4H104.9z M104.9,3.2 c0,0.1,0.1,0.1,0.1,0.1h0.3V3.2H104.9z M105,48.2v0.2h0.3l0.6-0.4v-0.1h-0.2C105.4,48.1,105.2,48.2,105,48.2z M105.1,47.4v0.1h0.1 v-0.1H105.1z M105.2,46.5L105.2,46.5l0.3,0.1v-0.1H105.2z M105.2,47L105.2,47c0,0.2,0.1,0.2,0.1,0.2l0.1-0.2H105.2z M105.3,3.4v0.1 c0.1,0,0.1,0,0.1-0.1H105.3z M105.4,1.9V2h0.1c0.1,0,0.1,0,0.1-0.1H105.4z M105.6,3.6v0.2c0.1,0,0.1-0.1,0.2-0.2H105.6z M105.6,46.5v0.1h0.1L105.6,46.5L105.6,46.5z M105.6,48.7L105.6,48.7l0.1,0.1v-0.1H105.6z M105.6,45.6L105.6,45.6l0.1,0.1v-0.1 H105.6z M105.9,1.3l-0.1,0.1c0,0.1,0.1,0.1,0.1,0.1c0,0,0-0.1,0.1-0.2L105.9,1.3z M105.9,47.5v0.1h0.2c0.1,0,0.1,0,0.1-0.1H105.9z M106.1,0.8L106,0.9V1h0.1c0.1,0,0.1,0,0.1-0.1L106.1,0.8z M106,48.4L106,48.4l0.1,0.1v-0.1H106z M106.2,47.1L106.2,47.1l0.1,0.1 v-0.1H106.2z M106.3,2.1c0,0.1,0.1,0.1,0.1,0.1h0.1V2.1H106.3z M106.4,47v0.4h0.1c0.1,0,0.2-0.1,0.4-0.4l-0.1-0.1L106.4,47z M106.5,4.4L106.5,4.4l0.1,0.1h-0.1V4.4z M106.6,48.4L106.6,48.4l0.1,0.1v-0.1H106.6z M106.8,1.3L106.8,1.3l0.1,0.1V1.3H106.8z M106.8,3.3L106.8,3.3l0.1,0.1V3.3H106.8z M106.8,49v0.1l0.5,0.1c0.1,0,0.2-0.1,0.2-0.1V49l-0.4,0.1c0-0.1-0.1-0.2-0.1-0.3 C106.9,48.9,106.8,48.9,106.8,49z M107,46.9L107,46.9l0.1,0.1v-0.1H107z M107.2,2.7c0,0.1,0.1,0.1,0.2,0.1h0.1V2.8L107.2,2.7z M107.3,47.3c0.1,0.2,0.1,0.3,0.2,0.3c0.1-0.1,0.2-0.1,0.3-0.1v-0.1C107.7,47.4,107.5,47.4,107.3,47.3z M107.4,1.5L107.4,1.5 l0.3,0.1V1.5H107.4z M108.3,3.4c0,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2-0.1-0.2-0.1h-0.1v0.1l0.4,0.1h0.2c0.1,0,0.1,0,0.1-0.1V3.4H108.3 z M108,48.4l-0.1,0.3l0.1,0.1c0.1,0,0.1-0.1,0.2-0.2v-0.1C108.1,48.5,108.1,48.5,108,48.4z M107.9,2.4L107.9,2.4l0.1,0.2l0.1-0.1 h0.1l0.1,0.1V2.5C108.2,2.5,108.1,2.4,107.9,2.4z M108,47.7v0.1h0.1L108,47.7L108,47.7z M108,21.6v0.1c0.1,0.1,0.1,0.2,0.1,0.3 c0.1,0,0.2-0.1,0.3-0.4v-0.1h-0.1L108,21.6z M108.4,20L108.4,20l0.1,0.1V20H108.4z M108.4,20.7L108.4,20.7l0.1,0.1v-0.1H108.4z M108.9,2.3l-0.2-0.1c-0.1,0-0.1,0.1-0.2,0.3l0.1,0.1l0.1-0.1c0,0.1,0.1,0.1,0.1,0.1l0.4-0.4V2h-0.1L108.9,2.3z M108.6,46.1 L108.6,46.1c0.1,0.1,0.2,0.1,0.4,0.2h0.2v-0.2H108.6z M108.7,46.9L108.7,46.9l0.2,0.1v-0.1H108.7z M108.8,2.7v0.1h0.1V2.7H108.8z M108.9,2.6L108.9,2.6l0.1,0.1V2.6H108.9z M109,1.2L109,1.2l0.1,0.1V1.2H109z M109.1,18.2c0,0.1,0.1,0.1,0.1,0.1 c0.1,0,0.1,0,0.1-0.1H109.1z M109.2,4.3v0.3c0.2-0.1,0.4-0.2,0.6-0.2c0-0.1,0-0.1-0.1-0.1L109.2,4.3z M110.2,8.6 c0,0.1-0.1,0.2-0.4,0.2c0-0.1,0-0.1-0.1-0.1h-0.1l-0.4,0.1c0,0.2,0.3,0.4,1,0.6l0.1-0.1c-0.2,0-0.3,0-0.3-0.1l0.1-0.1 c0.1,0,0.3,0.1,0.7,0.3v0.1h-0.4v0.1c0.1,0,0.2,0,0.4,0.1c0.1,0,0.2-0.1,0.3-0.3c0-0.1,0-0.1-0.1-0.1l-0.1,0.1 c-0.3-0.3-0.4-0.5-0.4-0.6H110.2z M109.2,21.5l0.1,0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1H109.2z M109.5,1c0,0.1-0.1,0.2-0.2,0.2v0.1 c0.1,0,0.2,0.1,0.4,0.2c0-0.2,0-0.3,0.1-0.3c0.1,0,0.2,0.1,0.2,0.1l-0.1-0.1c0.1,0,0.1,0,0.1-0.1H109.5z M109.4,5.9 C109.4,5.9,109.4,5.9,109.4,5.9c0.2,0,0.2,0,0.3,0V5.8h-0.1C109.4,5.8,109.4,5.8,109.4,5.9z M110.2,26.9l0.2,0.3 c-0.2,0.1-0.4,0.2-0.5,0.2c0,0,0-0.1-0.1-0.1c0,0-0.2,0.2-0.5,0.4l0.1,0.1h0.2c0.2,0,0.3-0.1,0.5-0.2h0.2v0.1h0.1 c0.1,0,0.2-0.2,0.2-0.5L110.2,26.9L110.2,26.9z M109.4,35.9h0.3v-0.1h-0.1C109.4,35.7,109.4,35.8,109.4,35.9z M109.4,5.2 c0,0.1,0.1,0.1,0.1,0.1V5.2H109.4z M109.4,18.9v0.1h0.4c0-0.1,0-0.1-0.1-0.1H109.4z M109.4,24v0.1h0.4v-0.1 C109.7,24.1,109.5,24.1,109.4,24z M109.4,29.3L109.4,29.3c0,0.2,0.1,0.2,0.1,0.2c0.1,0,0.2-0.1,0.2-0.1v-0.1L109.4,29.3z M109.4,30.7v0.1c0,0,0.1,0,0.2,0.1v-0.1C109.7,30.7,109.6,30.7,109.4,30.7L109.4,30.7z M110.9,32.2c0,0.1-0.1,0.4-0.4,0.6l0.1,0.1 v0.4h-0.3v-0.1h-0.2c0,0,0,0.1-0.1,0.2l-0.1-0.1h-0.3c-0.1,0-0.1,0.1-0.1,0.1c0.4,0,0.7,0.2,1.1,0.5h0.1v-0.1l-0.1-0.4 c0.2-0.1,0.3-0.1,0.4-0.1l0.1,0.1c0.1,0,0.2-0.1,0.4-0.1v-0.1c-0.2,0-0.4-0.1-0.4-0.2v-0.1c0,0,0-0.1,0.1-0.1l-0.1-0.1 c0.1-0.4,0.1-0.6,0.1-0.7H110.9z M109.4,34.8V35c0.1,0,0.2,0,0.2,0.1l0.1-0.1l0.5,0.1l0.1-0.1l-0.1-0.1h-0.1l-0.1,0.1l-0.1-0.1 c0,0,0.1,0,0.1-0.1l-0.2-0.1C109.6,34.8,109.5,34.8,109.4,34.8z M109.4,47.2v0.2h0.5v-0.3L109.4,47.2z M109.5,1.5L109.5,1.5 l0.1,0.1V1.5H109.5z M110,4.4c0,0.2-0.2,0.3-0.5,0.5l0.6,0.1c0-0.2,0.1-0.4,0.3-0.6l-0.1-0.1H110z M109.5,6.3L109.5,6.3l0.1,0.1 V6.3H109.5z M109.5,28.1L109.5,28.1l0.3,0.1v-0.1H109.5z M109.8,28.7c0,0-0.1,0.2-0.3,0.4c0,0,0.1,0,0.1,0.1 c0.2-0.1,0.4-0.1,0.4-0.2v-0.1C109.9,28.7,109.9,28.7,109.8,28.7z M109.5,46.7L109.5,46.7l0.1,0.1v-0.1H109.5z M109.6,32.1v0.1h0.1 L109.6,32.1L109.6,32.1z M109.6,41.4c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1H109.6z M109.7,48.7c0,0,0,0.1-0.1,0.2h0.3v-0.1 C109.8,48.7,109.7,48.7,109.7,48.7z M109.7,7.5v0.1h0.3V7.5l-0.1-0.1C109.8,7.4,109.7,7.5,109.7,7.5z M109.7,21L109.7,21l0.1,0.1 V21H109.7z M109.8,25.7l-0.1,0.2V26h0.2c0.1-0.1,0.3-0.1,0.6-0.1v-0.1L109.8,25.7z M109.7,24.8V25h0.1c0.1-0.1,0.2-0.1,0.4-0.1 v-0.1L109.7,24.8L109.7,24.8z M109.7,26.4L109.7,26.4l0.1,0.1v-0.1H109.7z M109.7,39.7L109.7,39.7L109.7,39.7 c0.3,0,0.4-0.1,0.4-0.1l-0.1-0.1C109.9,39.4,109.8,39.5,109.7,39.7z M109.7,46.8L109.7,46.8l0.1,0.1v-0.1H109.7z M109.8,49.3 l-0.1,0.1l0.1,0.1h0.2v-0.1C110,49.4,109.9,49.4,109.8,49.3z M110,34.2c0,0.1-0.1,0.1-0.2,0.1v0.1h0.4v-0.1 C110.1,34.3,110.1,34.2,110,34.2z M109.9,4L109.9,4l0.1,0.1V4H109.9z M109.9,6.8V7h0.1c0.1,0,0.2-0.1,0.2-0.1V6.8H109.9z M109.9,18.4L109.9,18.4c0.1,0.1,0.2,0.1,0.4,0.2h0.1v-0.1L109.9,18.4L109.9,18.4z M109.9,21L109.9,21c0.1,0.1,0.2,0.1,0.3,0.1h0.1 v-0.1c0,0-0.1,0-0.2-0.1H109.9z M109.9,23.8h0.3c0-0.1,0-0.1-0.1-0.1C109.9,23.7,109.9,23.8,109.9,23.8z M109.9,26.6L109.9,26.6 l0.1,0.1v-0.1H109.9z M109.9,41.6L109.9,41.6l0.1,0.1v-0.1H109.9z M110,26.7v0.1h0.2C110.2,26.8,110.2,26.7,110,26.7L110,26.7z M110,42.4L110,42.4c0,0.1,0.1,0.1,0.2,0.1v-0.1H110z M110,43.9V44h0.1L110,43.9L110,43.9z M110.1,3.8c0.1,0.2,0.1,0.3,0.2,0.3 l0.4-0.1V3.8l-0.4-0.1C110.2,3.8,110.1,3.8,110.1,3.8z M110.1,18.1c0.1,0.2,0.2,0.3,0.2,0.3c0.1,0,0.2-0.1,0.2-0.1 C110.5,18.2,110.4,18.1,110.1,18.1z M110.1,24.1L110.1,24.1l0.1,0.2c0.1,0,0.2-0.1,0.4-0.1V24C110.4,24.1,110.2,24.1,110.1,24.1z M110.1,46.3L110.1,46.3l0.1,0.1v-0.1H110.1z M110.1,46.6L110.1,46.6l0.1,0.1v-0.1H110.1z M110.1,48.8h0.1c0.1,0,0.1,0,0.1-0.1 v-0.1h-0.1C110.2,48.6,110.1,48.7,110.1,48.8z M110.1,32.5c0.1,0.2,0.2,0.3,0.3,0.4v-0.1c0-0.1-0.1-0.2-0.1-0.3H110.1z M110.6,6.6 l-0.2-0.1h-0.1l-0.1,0.4h0.2L110.6,6.6l0.3,0.1v0.1h0.2V6.7c-0.1,0-0.1-0.1-0.1-0.3h-0.1L110.6,6.6z M110.3,30.1 c0.1,0,0.2,0.1,0.4,0.2l0.1-0.1c0-0.1-0.1-0.2-0.1-0.3h-0.1C110.4,29.9,110.4,30,110.3,30.1z M110.3,45.8L110.3,45.8 c0.7,0,1-0.1,1.1-0.1l-0.1-0.1v-0.1l0.1-0.1h-0.2C110.6,45.5,110.3,45.6,110.3,45.8z M110.4,2.9V3c0.1,0,0.1,0,0.1-0.1H110.4z M110.4,23.3L110.4,23.3l0.1,0.1v-0.1H110.4z M110.4,23.8L110.4,23.8l0.3,0.1v-0.1H110.4z M110.5,3.2l-0.1,0.1l0.4,0.1 c0.1,0,0.1-0.1,0.2-0.2h-0.1c-0.1,0-0.2,0.1-0.2,0.1C110.6,3.3,110.5,3.2,110.5,3.2z M110.5,25.7c0.3,0.3,0.5,0.4,0.6,0.4v0.1 l-0.4,0.4v0.1c0.3,0,0.5-0.3,0.6-0.8c-0.2,0-0.4-0.1-0.5-0.3h-0.1C110.5,25.5,110.5,25.6,110.5,25.7z M110.6,35.2L110.6,35.2 l0.1,0.1v-0.1H110.6z M110.6,36v0.2h0.2c0.1,0,0.1,0,0.1-0.1C110.8,36.1,110.6,36,110.6,36z M110.9,23c0,0.1-0.1,0.2-0.3,0.2 l0.1,0.1c0,0.1-0.1,0.2-0.1,0.2l0.1,0.1c0.1-0.2,0.3-0.3,0.6-0.3l-0.1-0.1V23H110.9z M110.6,26.9v0.1h0.1c0.1,0,0.1,0,0.1-0.1 H110.6z M110.6,30.6v0.1c0,0,0.1,0,0.2,0.1v-0.4C110.8,30.4,110.7,30.4,110.6,30.6z M110.6,44.7L110.6,44.7c0,0.1,0.2,0.1,0.4,0.1 c0.1,0,0.2-0.1,0.2-0.1c0-0.1,0-0.1-0.1-0.1C110.9,44.7,110.8,44.7,110.6,44.7z M110.7,0.4h0.1v0.1C110.8,0.5,110.7,0.4,110.7,0.4z M112,3.5l-0.4-0.1c-0.1,0-0.2,0.1-0.3,0.1v0.1h0.4c-0.1,0.4-0.2,0.6-0.4,0.6h-0.1l-0.4-0.1l-0.1,0.2c0.1,0,0.3,0,0.6,0.1l0.7-0.6 c0.4,0,0.6-0.1,0.6-0.4c0,0-0.1,0-0.1-0.1l-0.3,0.1l-0.1-0.1c0,0,0.1,0,0.1-0.1h-0.1C112,3.3,112,3.4,112,3.5z M110.7,30.9v0.1h0.1 v-0.1H110.7z M110.8,7.4h0.1V7.2C110.8,7.3,110.8,7.3,110.8,7.4z M110.8,27.6L110.8,27.6c0.1,0.2,0.1,0.3,0.1,0.4h0.1 c0,0,0-0.1,0.1-0.2L110.8,27.6L110.8,27.6z M110.8,6.9c0,0.1,0.1,0.1,0.1,0.1V6.9H110.8z M110.8,38.4L110.8,38.4l0.3,0.1v-0.1h-0.1 C111,38.4,110.9,38.4,110.8,38.4z M110.8,42.6v0.1h0.1l0.4-0.1v-0.1H110.8z M110.9,1.3v0.1l0.5,0.1c0.1,0,0.1,0,0.1-0.1L110.9,1.3z M110.9,5.6h0.2V5.4l0.4,0.1c0-0.1,0.1-0.3,0.4-0.6h-0.2c-0.2,0.1-0.3,0.3-0.5,0.6C111,5.4,110.9,5.5,110.9,5.6z M110.9,28.1v0.1 h0.3c0-0.1,0-0.1-0.1-0.1H110.9z M110.9,34.7L110.9,34.7l0.2,0.1v-0.1H110.9z M111.1,2.3L111,2.4h0.4V2.3L111.1,2.3z M111,29.1 L111,29.1c0,0.3,0.1,0.5,0.4,0.5c0-0.1,0-0.2,0.1-0.3l-0.3-0.2H111z M111,30.8L111,30.8l0.2,0.1v-0.1C111.1,30.8,111,30.8,111,30.8 z M111,33.8c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H111z M111.7,24h-0.3l-0.1-0.1c0,0.1-0.1,0.2-0.2,0.2c0,0.1,0.1,0.1,0.1,0.1 c0,0,0.2,0,0.4-0.1c0.1,0,0.3,0,0.6,0.1c0-0.1,0.2-0.2,0.7-0.3l0.2-0.2v-0.1l-0.5,0.1l-0.2-0.1L111.7,24z M111.1,40.5L111.1,40.5 c0,0.2,0.1,0.2,0.2,0.2h0.1v-0.1C111.3,40.6,111.2,40.6,111.1,40.5z M111.1,43L111.1,43l0.1,0.1V43H111.1z M111.1,26.7 c0,0.1,0.1,0.2,0.4,0.4c0-0.1,0.1-0.2,0.2-0.2v-0.1c0,0-0.1,0-0.2-0.1l-0.1,0.1C111.3,26.7,111.2,26.7,111.1,26.7z M111.1,31.4 L111.1,31.4l0.2,0.1c0.1,0,0.1,0,0.1-0.1h-0.1C111.2,31.3,111.2,31.4,111.1,31.4z M111.1,43.7l0.1,0.1c0.3-0.4,0.4-0.7,0.4-0.8 h-0.1C111.5,43,111.3,43.3,111.1,43.7z M112,7.1c-0.1,0-0.2-0.1-0.3-0.1c0,0.3-0.1,0.5-0.4,0.5v0.1c0.2,0,0.4,0,0.4,0.1l-0.1,0.2 c0.2,0,0.3,0.1,0.3,0.2c-0.2,0-0.4,0.1-0.6,0.1v0.1c0.6,0,0.8,0,0.8,0.1c0.1-0.1,0.4-0.1,0.7-0.1l-0.1-0.1c0.1,0,0.2,0,0.2-0.1V7.8 c0-0.1,0-0.1-0.1-0.1h-0.1l-0.2,0.1c0-0.1,0-0.1-0.1-0.1l0.1-0.3h-0.4V7.3c0.4-0.5,0.7-0.8,0.8-0.8V6.3h-0.2 C112.3,6.5,112.1,6.8,112,7.1L112,7.1z M111.2,29h0.2c0.1,0,0.1,0,0.1-0.1v-0.1h-0.1C111.3,28.9,111.2,29,111.2,29z M111.2,38.3 h0.1v-0.1C111.2,38.2,111.2,38.2,111.2,38.3z M111.2,47.3c0,0.1,0.1,0.1,0.1,0.1h0.3c0,0,0-0.1,0.1-0.2c-0.1,0-0.1,0-0.1-0.1 C111.4,47.3,111.3,47.3,111.2,47.3z M111.8,33.5c-0.1,0.2-0.3,0.4-0.5,0.4l0.1,0.1l-0.1,0.2l0.4-0.1c0,0,0.1,0,0.1,0.1 c0.1,0,0.3-0.2,0.6-0.6h0.2v-0.1C112.3,33.6,112.1,33.6,111.8,33.5z M111.3,28.7L111.3,28.7l0.1,0.1v-0.1H111.3z M111.3,32.1 L111.3,32.1c0.1,0.3,0.1,0.4,0.2,0.4h0.1c0.1,0,0.1,0,0.1-0.1l-0.3-0.2H111.3z M111.3,37.3L111.3,37.3c0.7-0.2,1-0.4,1.1-0.4 c0,0,0,0.1,0.1,0.1V37c-0.1-0.1-0.1-0.2-0.1-0.3h-0.1C111.7,37,111.4,37.2,111.3,37.3z M111.3,42.6v0.1c0.1,0,0.1,0,0.1-0.1H111.3z M111.4,35.3l0.1,0.2l-0.1,0.1l0.1,0.1h0.2c0-0.1,0-0.2,0.1-0.2v-0.1h-0.2L111.4,35.3z M111.5,18.4h0.1v-0.1 C111.5,18.3,111.5,18.3,111.5,18.4z M111.5,19.5c0.2,0.3,0.4,0.5,0.6,0.6l0.1-0.1v-0.1c-0.2,0-0.4-0.1-0.5-0.4H111.5z M111.8,28.8 l-0.2,0.3c0.1,0,0.1,0,0.1,0.1c0.2-0.1,0.4-0.1,0.5-0.1v-0.1L111.8,28.8z M111.6,46.4L111.6,46.4l0.1,0.1v-0.1H111.6z M111.7,1.6 v0.3c0.1,0,0.3,0.1,0.5,0.2c0.1,0,0.2-0.1,0.3-0.3h-0.1l-0.1,0.1C112.1,1.9,112,1.8,111.7,1.6L111.7,1.6z M111.7,18.4v0.1 c0.2,0,0.4,0,0.6,0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1c-0.4,0-0.6,0-0.6-0.1C111.8,18.4,111.7,18.4,111.7,18.4z M111.8,5.9h0.1V5.8 C111.8,5.8,111.8,5.8,111.8,5.9z M111.8,6c0,0.1,0.1,0.1,0.1,0.1V6H111.8z M112.1,7.4v0.2c-0.1,0.2-0.2,0.4-0.3,0.4h-0.1V7.9 C111.9,7.5,112,7.4,112.1,7.4z M111.8,8.6l0.1,0.1c0.1,0,0.2-0.1,0.3-0.1V8.6H111.8z M111.8,23.3L111.8,23.3l0.1,0.1v-0.1H111.8z M111.8,28.1L111.8,28.1l0.1,0.1v-0.1H111.8z M111.8,26.3L111.8,26.3l0.1,0.1v-0.1H111.8z M111.8,30.9V31c0.1,0,0.1,0,0.1-0.1 H111.8z M111.8,32.3L111.8,32.3l0.1,0.1v-0.1H111.8z M111.8,33.3v0.1c0.1,0,0.1,0,0.1-0.1H111.8z M111.8,37.7l0.1,0.1 c0,0,0-0.1,0.1-0.2H112C111.9,37.6,111.8,37.6,111.8,37.7z M111.9,4.5v0.2h0.1c0.1,0,0.1,0,0.1-0.1V4.5H111.9z M111.9,46.5 c0,0.1,0.1,0.1,0.1,0.1h0.4v-0.1L111.9,46.5L111.9,46.5z M112,31.8l-0.1,0.1l0.1,0.1h0.2C112.3,31.9,112.2,31.9,112,31.8z M112.3,7.8h0.2l0.1,0.4c-0.1,0-0.2,0.1-0.2,0.1c-0.1,0-0.2-0.1-0.2-0.1V8h0.2L112.3,7.8L112.3,7.8z M112.1,9.5 c0,0.1,0.1,0.1,0.1,0.1h0.1V9.5H112.1z M112.2,27.2C112.2,27.3,112.2,27.3,112.2,27.2v0.2l-0.1,0.1l0.3,0.1c0.1,0,0.2-0.1,0.2-0.1 v-0.1C112.4,27.5,112.3,27.4,112.2,27.2z M112.3,38.3c-0.1,0.2-0.1,0.3-0.1,0.4c0,0,0.1,0,0.1,0.1c0.3-0.1,0.5-0.2,0.6-0.2 C112.8,38.3,112.6,38.3,112.3,38.3z M112.2,5.3L112.2,5.3l0.1,0.1V5.3H112.2z M112.3,45.9L112.3,45.9l0.1,0.1v-0.1H112.3z M112.3,37.3L112.3,37.3c0,0.2,0.1,0.2,0.1,0.2h0.1c0.1,0,0.1,0,0.1-0.1L112.3,37.3z M112.3,38L112.3,38l0.1,0.1V38H112.3z M112.4,36.3c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.1-0.1s0-0.1-0.1-0.1C112.4,36.2,112.4,36.2,112.4,36.3z M112.4,44.3v0.1 c0.1,0,0.1,0,0.1-0.1H112.4z M112.5,33.2l-0.1,0.1c0,0.1,0.1,0.1,0.1,0.1c0-0.1,0.1-0.1,0.2-0.1v-0.1 C112.7,33.2,112.6,33.2,112.5,33.2z M112.5,34.8h0.1v-0.1C112.5,34.7,112.5,34.7,112.5,34.8z M112.5,30.4v0.1h0.1L112.5,30.4 L112.5,30.4z M112.5,35.2h0.1c0.1,0,0.2-0.1,0.2-0.4h-0.1C112.7,34.9,112.6,35,112.5,35.2z M112.7,3.7L112.6,4l0.1,0.1 c0.1,0,0.2-0.1,0.3-0.1l0.1,0.1c0,0-0.1,0-0.1,0.1h0.1c0-0.1,0-0.1,0.1-0.1V3.9C113.1,3.9,112.9,3.9,112.7,3.7L112.7,3.7z M112.6,23L112.6,23c0.1,0.4,0.3,0.5,0.6,0.6c0-0.1,0.1-0.1,0.1-0.1h0.1v0.1h0.4v-0.1c-0.1-0.2-0.1-0.3-0.2-0.3l-0.1,0.1 c-0.2,0-0.3-0.1-0.3-0.3l-0.4,0.1h-0.1L112.6,23z M112.6,26.4h0.6c0.3-0.2,0.5-0.3,0.5-0.4h-0.1C113.4,26.2,113,26.3,112.6,26.4 L112.6,26.4z M112.6,32.9v0.2c0.1,0,0.1-0.1,0.2-0.2H112.6z M112.7,24.5L112.7,24.5c0,0.1,0.1,0.2,0.2,0.3l0.1-0.1 c0-0.1,0-0.1-0.1-0.1H112.7z M112.7,26.6L112.7,26.6l0.1,0.1v-0.1H112.7z M112.7,40.5c0,0.1,0.1,0.1,0.1,0.1h0.1 c0-0.1,0-0.1-0.1-0.1H112.7z M112.7,6l0.4,0.1c0.1,0,0.2-0.1,0.2-0.1c0-0.1,0-0.1-0.1-0.1h-0.3C112.8,5.9,112.7,6,112.7,6z M112.8,37.3l-0.1,0.1h0.6v-0.1h-0.1l-0.1,0.1C113.1,37.3,113,37.3,112.8,37.3z M112.7,43.9v0.1h0.3c0-0.1,0-0.1-0.1-0.1H112.7z M112.8,5.3L112.8,5.3l0.2,0.1V5.3H112.8z M112.8,20.5L112.8,20.5l0.1,0.1v-0.1H112.8z M112.8,36.1h0.2v-0.1H113 C112.9,35.9,112.8,36,112.8,36.1z M113,45.4L113,45.4l0.1,0.2c-0.1,0-0.2,0.1-0.2,0.1v0.1h0.3c0.1,0,0.1,0,0.1-0.1v-0.1 C113.2,45.5,113.1,45.4,113,45.4z M112.9,18.4L112.9,18.4l0.4,0.1l0.4-0.1c0,0.1,0.1,0.1,0.1,0.1v-0.1c0-0.1,0-0.1-0.1-0.1H113 C112.9,18.2,112.9,18.3,112.9,18.4z M113,35.4c0,0.1,0,0.2-0.1,0.2c0,0.1,0.1,0.2,0.1,0.2c0.1,0,0.2-0.1,0.2-0.1v-0.1 C113.1,35.6,113,35.5,113,35.4L113,35.4z M113.2,2.5c0,0.1-0.1,0.2-0.1,0.2c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.2-0.1,0.2-0.4L113.2,2.5 z M113.1,25.1h0.1V25C113.1,25,113.1,25,113.1,25.1z M113.1,34.9L113.1,34.9l0.2,0.1l0.1-0.1h-0.1 C113.2,34.9,113.1,34.9,113.1,34.9z M113.1,47.4h0.1v-0.1C113.1,47.3,113.1,47.3,113.1,47.4z M113.2,21v0.1l0.1,0.1 c0.2,0,0.4-0.1,0.5-0.1v-0.1c-0.1,0-0.2,0-0.3-0.1H113.2z M113.3,3.6L113.3,3.6l0.1,0.1V3.6H113.3z M113.3,33.5L113.3,33.5 c0.2-0.1,0.4-0.1,0.4-0.1v-0.1h-0.1C113.4,33.4,113.3,33.5,113.3,33.5z M113.3,39.6v0.1h0.1L113.3,39.6L113.3,39.6z M113.4,26.4 L113.4,26.4l0.2,0.1v-0.1H113.4z M113.4,42.3L113.4,42.3l0.2,0.1v-0.1H113.4z M113.4,5.8v0.1h0.1c0.1,0,0.1,0,0.1-0.1H113.4z M113.4,30.4h0.4c0-0.1,0-0.1-0.1-0.1h-0.1C113.5,30.2,113.4,30.3,113.4,30.4z M113.5,27.8h0.1v0.1L113.5,27.8L113.5,27.8z M113.5,34.9V35h0.2v-0.1H113.5z M113.7,22.4v0.3c0.1,0,0.1,0,0.1-0.1v-0.1H113.7z M113.7,29.4v0.1h0.1 C113.8,29.4,113.8,29.4,113.7,29.4z M113.7,35.9V36c0.1,0,0.1,0,0.1-0.1H113.7z M113.7,44.4L113.7,44.4l0.1,0.1v-0.1H113.7z"
                }, void 0, false, {
                  fileName: "app/ui/components/Preloader/index.tsx",
                  lineNumber: 61,
                  columnNumber: 15
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/ui/components/Preloader/index.tsx",
              lineNumber: 36,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/Preloader/index.tsx",
            lineNumber: 28,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/ui/components/Preloader/index.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/ui/components/Preloader/index.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Preloader/index.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this)
}, void 0, false, {
  fileName: "app/ui/components/Preloader/index.tsx",
  lineNumber: 5,
  columnNumber: 3
}, this);

// app/ui/components/Stack/index.tsx
var import_react18 = __toESM(require_react());

// app/assets/img/stack-heading.svg
var stack_heading_default = "/build/_assets/stack-heading-ZOPFLVVX.svg";

// app/assets/img/skelly.svg
var skelly_default = "/build/_assets/skelly-RE5E4ZTX.svg";

// app/ui/components/Stack/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Stack = ({ animateStack: animateStack2 }) => {
  (0, import_react18.useEffect)(() => {
    animateStack2();
  }, [animateStack2]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    as: "section",
    className: "section",
    id: "stack",
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
            width: 200,
            css: {
              maxWidth: toRem(200)
            }
          }, void 0, false, {
            fileName: "app/ui/components/Stack/index.tsx",
            lineNumber: 19,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/Stack/index.tsx",
          lineNumber: 18,
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
              lineNumber: 31,
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
              lineNumber: 44,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/ui/components/Stack/index.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/components/Stack/index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Stack/index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
};

// app/ui/screens/Home.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Home = ({
  albums,
  loaded,
  animateBgColorOnScroll: animateBgColorOnScroll2,
  animateAbout: animateAbout2,
  animateStack: animateStack2,
  animateInspiration: animateInspiration2,
  animateContact: animateContact2,
  animateSmoothScroll: animateSmoothScroll2,
  animateMobileMenu: animateMobileMenu2,
  createImageInteraction: createImageInteraction2
}) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: !loaded ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
      animateBgColorOnScroll: animateBgColorOnScroll2,
      animateSmoothScroll: animateSmoothScroll2,
      animateMobileMenu: animateMobileMenu2,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Intro, {}, void 0, false, {
          fileName: "app/ui/screens/Home.tsx",
          lineNumber: 29,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(About, {
          animateAbout: animateAbout2,
          createImageInteraction: createImageInteraction2
        }, void 0, false, {
          fileName: "app/ui/screens/Home.tsx",
          lineNumber: 30,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {
          animateStack: animateStack2
        }, void 0, false, {
          fileName: "app/ui/screens/Home.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Inspiration, {
          albums,
          animateInspiration: animateInspiration2
        }, void 0, false, {
          fileName: "app/ui/screens/Home.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Contact, {
          animateContact: animateContact2
        }, void 0, false, {
          fileName: "app/ui/screens/Home.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/screens/Home.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Preloader, {}, void 0, false, {
      fileName: "app/ui/screens/Home.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this)
  }, void 0, false, {
    fileName: "app/ui/screens/Home.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
};

// app/routes/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Index = () => {
  const albums = useLoaderData();
  const animations = useAnimations();
  const loaded = useOnPageLoad();
  const { createImageInteraction: createImageInteraction2 } = useCreateImageInteraction();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Home, {
    albums,
    loaded,
    ...animations,
    createImageInteraction: createImageInteraction2
  }, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 21,
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
 * ScrollToPlugin 3.11.3
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
//# sourceMappingURL=/build/routes/index-CYDCFP7B.js.map
