import {
  config,
  keyframes,
  styled
} from "/build/_shared/chunk-A5P3U2HW.js";
import {
  __commonJS,
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-IE366Y5W.js";

// node_modules/webfontloader/webfontloader.js
var require_webfontloader = __commonJS({
  "node_modules/webfontloader/webfontloader.js"(exports, module) {
    (function() {
      function aa(a, b, c) {
        return a.call.apply(a.bind, arguments);
      }
      function ba(a, b, c) {
        if (!a)
          throw Error();
        if (2 < arguments.length) {
          var d = Array.prototype.slice.call(arguments, 2);
          return function() {
            var c2 = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c2, d);
            return a.apply(b, c2);
          };
        }
        return function() {
          return a.apply(b, arguments);
        };
      }
      function p(a, b, c) {
        p = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? aa : ba;
        return p.apply(null, arguments);
      }
      var q = Date.now || function() {
        return +new Date();
      };
      function ca(a, b) {
        this.a = a;
        this.o = b || a;
        this.c = this.o.document;
      }
      var da = !!window.FontFace;
      function t(a, b, c, d) {
        b = a.c.createElement(b);
        if (c)
          for (var e in c)
            c.hasOwnProperty(e) && ("style" == e ? b.style.cssText = c[e] : b.setAttribute(e, c[e]));
        d && b.appendChild(a.c.createTextNode(d));
        return b;
      }
      function u(a, b, c) {
        a = a.c.getElementsByTagName(b)[0];
        a || (a = document.documentElement);
        a.insertBefore(c, a.lastChild);
      }
      function v(a) {
        a.parentNode && a.parentNode.removeChild(a);
      }
      function w(a, b, c) {
        b = b || [];
        c = c || [];
        for (var d = a.className.split(/\s+/), e = 0; e < b.length; e += 1) {
          for (var f = false, g = 0; g < d.length; g += 1)
            if (b[e] === d[g]) {
              f = true;
              break;
            }
          f || d.push(b[e]);
        }
        b = [];
        for (e = 0; e < d.length; e += 1) {
          f = false;
          for (g = 0; g < c.length; g += 1)
            if (d[e] === c[g]) {
              f = true;
              break;
            }
          f || b.push(d[e]);
        }
        a.className = b.join(" ").replace(/\s+/g, " ").replace(/^\s+|\s+$/, "");
      }
      function y(a, b) {
        for (var c = a.className.split(/\s+/), d = 0, e = c.length; d < e; d++)
          if (c[d] == b)
            return true;
        return false;
      }
      function ea(a) {
        return a.o.location.hostname || a.a.location.hostname;
      }
      function z(a, b, c) {
        function d() {
          m && e && f && (m(g), m = null);
        }
        b = t(a, "link", { rel: "stylesheet", href: b, media: "all" });
        var e = false, f = true, g = null, m = c || null;
        da ? (b.onload = function() {
          e = true;
          d();
        }, b.onerror = function() {
          e = true;
          g = Error("Stylesheet failed to load");
          d();
        }) : setTimeout(function() {
          e = true;
          d();
        }, 0);
        u(a, "head", b);
      }
      function A(a, b, c, d) {
        var e = a.c.getElementsByTagName("head")[0];
        if (e) {
          var f = t(a, "script", { src: b }), g = false;
          f.onload = f.onreadystatechange = function() {
            g || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (g = true, c && c(null), f.onload = f.onreadystatechange = null, "HEAD" == f.parentNode.tagName && e.removeChild(f));
          };
          e.appendChild(f);
          setTimeout(function() {
            g || (g = true, c && c(Error("Script load timeout")));
          }, d || 5e3);
          return f;
        }
        return null;
      }
      ;
      function B() {
        this.a = 0;
        this.c = null;
      }
      function C(a) {
        a.a++;
        return function() {
          a.a--;
          D(a);
        };
      }
      function E(a, b) {
        a.c = b;
        D(a);
      }
      function D(a) {
        0 == a.a && a.c && (a.c(), a.c = null);
      }
      ;
      function F(a) {
        this.a = a || "-";
      }
      F.prototype.c = function(a) {
        for (var b = [], c = 0; c < arguments.length; c++)
          b.push(arguments[c].replace(/[\W_]+/g, "").toLowerCase());
        return b.join(this.a);
      };
      function G(a, b) {
        this.c = a;
        this.f = 4;
        this.a = "n";
        var c = (b || "n4").match(/^([nio])([1-9])$/i);
        c && (this.a = c[1], this.f = parseInt(c[2], 10));
      }
      function fa(a) {
        return H(a) + " " + (a.f + "00") + " 300px " + I(a.c);
      }
      function I(a) {
        var b = [];
        a = a.split(/,\s*/);
        for (var c = 0; c < a.length; c++) {
          var d = a[c].replace(/['"]/g, "");
          -1 != d.indexOf(" ") || /^\d/.test(d) ? b.push("'" + d + "'") : b.push(d);
        }
        return b.join(",");
      }
      function J(a) {
        return a.a + a.f;
      }
      function H(a) {
        var b = "normal";
        "o" === a.a ? b = "oblique" : "i" === a.a && (b = "italic");
        return b;
      }
      function ga(a) {
        var b = 4, c = "n", d = null;
        a && ((d = a.match(/(normal|oblique|italic)/i)) && d[1] && (c = d[1].substr(0, 1).toLowerCase()), (d = a.match(/([1-9]00|normal|bold)/i)) && d[1] && (/bold/i.test(d[1]) ? b = 7 : /[1-9]00/.test(d[1]) && (b = parseInt(d[1].substr(0, 1), 10))));
        return c + b;
      }
      ;
      function ha(a, b) {
        this.c = a;
        this.f = a.o.document.documentElement;
        this.h = b;
        this.a = new F("-");
        this.j = false !== b.events;
        this.g = false !== b.classes;
      }
      function ia(a) {
        a.g && w(a.f, [a.a.c("wf", "loading")]);
        K(a, "loading");
      }
      function L(a) {
        if (a.g) {
          var b = y(a.f, a.a.c("wf", "active")), c = [], d = [a.a.c("wf", "loading")];
          b || c.push(a.a.c("wf", "inactive"));
          w(a.f, c, d);
        }
        K(a, "inactive");
      }
      function K(a, b, c) {
        if (a.j && a.h[b])
          if (c)
            a.h[b](c.c, J(c));
          else
            a.h[b]();
      }
      ;
      function ja() {
        this.c = {};
      }
      function ka(a, b, c) {
        var d = [], e;
        for (e in b)
          if (b.hasOwnProperty(e)) {
            var f = a.c[e];
            f && d.push(f(b[e], c));
          }
        return d;
      }
      ;
      function M(a, b) {
        this.c = a;
        this.f = b;
        this.a = t(this.c, "span", { "aria-hidden": "true" }, this.f);
      }
      function N(a) {
        u(a.c, "body", a.a);
      }
      function O(a) {
        return "display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:" + I(a.c) + ";" + ("font-style:" + H(a) + ";font-weight:" + (a.f + "00") + ";");
      }
      ;
      function P(a, b, c, d, e, f) {
        this.g = a;
        this.j = b;
        this.a = d;
        this.c = c;
        this.f = e || 3e3;
        this.h = f || void 0;
      }
      P.prototype.start = function() {
        var a = this.c.o.document, b = this, c = q(), d = new Promise(function(d2, e2) {
          function f2() {
            q() - c >= b.f ? e2() : a.fonts.load(fa(b.a), b.h).then(function(a2) {
              1 <= a2.length ? d2() : setTimeout(f2, 25);
            }, function() {
              e2();
            });
          }
          f2();
        }), e = null, f = new Promise(function(a2, d2) {
          e = setTimeout(d2, b.f);
        });
        Promise.race([f, d]).then(function() {
          e && (clearTimeout(e), e = null);
          b.g(b.a);
        }, function() {
          b.j(b.a);
        });
      };
      function Q(a, b, c, d, e, f, g) {
        this.v = a;
        this.B = b;
        this.c = c;
        this.a = d;
        this.s = g || "BESbswy";
        this.f = {};
        this.w = e || 3e3;
        this.u = f || null;
        this.m = this.j = this.h = this.g = null;
        this.g = new M(this.c, this.s);
        this.h = new M(this.c, this.s);
        this.j = new M(this.c, this.s);
        this.m = new M(this.c, this.s);
        a = new G(this.a.c + ",serif", J(this.a));
        a = O(a);
        this.g.a.style.cssText = a;
        a = new G(this.a.c + ",sans-serif", J(this.a));
        a = O(a);
        this.h.a.style.cssText = a;
        a = new G("serif", J(this.a));
        a = O(a);
        this.j.a.style.cssText = a;
        a = new G("sans-serif", J(this.a));
        a = O(a);
        this.m.a.style.cssText = a;
        N(this.g);
        N(this.h);
        N(this.j);
        N(this.m);
      }
      var R = { D: "serif", C: "sans-serif" }, S = null;
      function T() {
        if (null === S) {
          var a = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);
          S = !!a && (536 > parseInt(a[1], 10) || 536 === parseInt(a[1], 10) && 11 >= parseInt(a[2], 10));
        }
        return S;
      }
      Q.prototype.start = function() {
        this.f.serif = this.j.a.offsetWidth;
        this.f["sans-serif"] = this.m.a.offsetWidth;
        this.A = q();
        U(this);
      };
      function la(a, b, c) {
        for (var d in R)
          if (R.hasOwnProperty(d) && b === a.f[R[d]] && c === a.f[R[d]])
            return true;
        return false;
      }
      function U(a) {
        var b = a.g.a.offsetWidth, c = a.h.a.offsetWidth, d;
        (d = b === a.f.serif && c === a.f["sans-serif"]) || (d = T() && la(a, b, c));
        d ? q() - a.A >= a.w ? T() && la(a, b, c) && (null === a.u || a.u.hasOwnProperty(a.a.c)) ? V(a, a.v) : V(a, a.B) : ma(a) : V(a, a.v);
      }
      function ma(a) {
        setTimeout(p(function() {
          U(this);
        }, a), 50);
      }
      function V(a, b) {
        setTimeout(p(function() {
          v(this.g.a);
          v(this.h.a);
          v(this.j.a);
          v(this.m.a);
          b(this.a);
        }, a), 0);
      }
      ;
      function W(a, b, c) {
        this.c = a;
        this.a = b;
        this.f = 0;
        this.m = this.j = false;
        this.s = c;
      }
      var X = null;
      W.prototype.g = function(a) {
        var b = this.a;
        b.g && w(b.f, [b.a.c("wf", a.c, J(a).toString(), "active")], [b.a.c("wf", a.c, J(a).toString(), "loading"), b.a.c("wf", a.c, J(a).toString(), "inactive")]);
        K(b, "fontactive", a);
        this.m = true;
        na(this);
      };
      W.prototype.h = function(a) {
        var b = this.a;
        if (b.g) {
          var c = y(b.f, b.a.c("wf", a.c, J(a).toString(), "active")), d = [], e = [b.a.c("wf", a.c, J(a).toString(), "loading")];
          c || d.push(b.a.c("wf", a.c, J(a).toString(), "inactive"));
          w(b.f, d, e);
        }
        K(b, "fontinactive", a);
        na(this);
      };
      function na(a) {
        0 == --a.f && a.j && (a.m ? (a = a.a, a.g && w(a.f, [a.a.c("wf", "active")], [a.a.c("wf", "loading"), a.a.c("wf", "inactive")]), K(a, "active")) : L(a.a));
      }
      ;
      function oa(a) {
        this.j = a;
        this.a = new ja();
        this.h = 0;
        this.f = this.g = true;
      }
      oa.prototype.load = function(a) {
        this.c = new ca(this.j, a.context || this.j);
        this.g = false !== a.events;
        this.f = false !== a.classes;
        pa(this, new ha(this.c, a), a);
      };
      function qa(a, b, c, d, e) {
        var f = 0 == --a.h;
        (a.f || a.g) && setTimeout(function() {
          var a2 = e || null, m = d || null || {};
          if (0 === c.length && f)
            L(b.a);
          else {
            b.f += c.length;
            f && (b.j = f);
            var h, l = [];
            for (h = 0; h < c.length; h++) {
              var k = c[h], n = m[k.c], r = b.a, x = k;
              r.g && w(r.f, [r.a.c("wf", x.c, J(x).toString(), "loading")]);
              K(r, "fontloading", x);
              r = null;
              if (null === X)
                if (window.FontFace) {
                  var x = /Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent), xa = /OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent) && /Apple/.exec(window.navigator.vendor);
                  X = x ? 42 < parseInt(x[1], 10) : xa ? false : true;
                } else
                  X = false;
              X ? r = new P(p(b.g, b), p(b.h, b), b.c, k, b.s, n) : r = new Q(p(b.g, b), p(b.h, b), b.c, k, b.s, a2, n);
              l.push(r);
            }
            for (h = 0; h < l.length; h++)
              l[h].start();
          }
        }, 0);
      }
      function pa(a, b, c) {
        var d = [], e = c.timeout;
        ia(b);
        var d = ka(a.a, c, a.c), f = new W(a.c, b, e);
        a.h = d.length;
        b = 0;
        for (c = d.length; b < c; b++)
          d[b].load(function(b2, d2, c2) {
            qa(a, f, b2, d2, c2);
          });
      }
      ;
      function ra(a, b) {
        this.c = a;
        this.a = b;
      }
      ra.prototype.load = function(a) {
        function b() {
          if (f["__mti_fntLst" + d]) {
            var c2 = f["__mti_fntLst" + d](), e2 = [], h;
            if (c2)
              for (var l = 0; l < c2.length; l++) {
                var k = c2[l].fontfamily;
                void 0 != c2[l].fontStyle && void 0 != c2[l].fontWeight ? (h = c2[l].fontStyle + c2[l].fontWeight, e2.push(new G(k, h))) : e2.push(new G(k));
              }
            a(e2);
          } else
            setTimeout(function() {
              b();
            }, 50);
        }
        var c = this, d = c.a.projectId, e = c.a.version;
        if (d) {
          var f = c.c.o;
          A(this.c, (c.a.api || "https://fast.fonts.net/jsapi") + "/" + d + ".js" + (e ? "?v=" + e : ""), function(e2) {
            e2 ? a([]) : (f["__MonotypeConfiguration__" + d] = function() {
              return c.a;
            }, b());
          }).id = "__MonotypeAPIScript__" + d;
        } else
          a([]);
      };
      function sa(a, b) {
        this.c = a;
        this.a = b;
      }
      sa.prototype.load = function(a) {
        var b, c, d = this.a.urls || [], e = this.a.families || [], f = this.a.testStrings || {}, g = new B();
        b = 0;
        for (c = d.length; b < c; b++)
          z(this.c, d[b], C(g));
        var m = [];
        b = 0;
        for (c = e.length; b < c; b++)
          if (d = e[b].split(":"), d[1])
            for (var h = d[1].split(","), l = 0; l < h.length; l += 1)
              m.push(new G(d[0], h[l]));
          else
            m.push(new G(d[0]));
        E(g, function() {
          a(m, f);
        });
      };
      function ta(a, b) {
        a ? this.c = a : this.c = ua;
        this.a = [];
        this.f = [];
        this.g = b || "";
      }
      var ua = "https://fonts.googleapis.com/css";
      function va(a, b) {
        for (var c = b.length, d = 0; d < c; d++) {
          var e = b[d].split(":");
          3 == e.length && a.f.push(e.pop());
          var f = "";
          2 == e.length && "" != e[1] && (f = ":");
          a.a.push(e.join(f));
        }
      }
      function wa(a) {
        if (0 == a.a.length)
          throw Error("No fonts to load!");
        if (-1 != a.c.indexOf("kit="))
          return a.c;
        for (var b = a.a.length, c = [], d = 0; d < b; d++)
          c.push(a.a[d].replace(/ /g, "+"));
        b = a.c + "?family=" + c.join("%7C");
        0 < a.f.length && (b += "&subset=" + a.f.join(","));
        0 < a.g.length && (b += "&text=" + encodeURIComponent(a.g));
        return b;
      }
      ;
      function ya(a) {
        this.f = a;
        this.a = [];
        this.c = {};
      }
      var za = { latin: "BESbswy", "latin-ext": "\xE7\xF6\xFC\u011F\u015F", cyrillic: "\u0439\u044F\u0416", greek: "\u03B1\u03B2\u03A3", khmer: "\u1780\u1781\u1782", Hanuman: "\u1780\u1781\u1782" }, Aa = { thin: "1", extralight: "2", "extra-light": "2", ultralight: "2", "ultra-light": "2", light: "3", regular: "4", book: "4", medium: "5", "semi-bold": "6", semibold: "6", "demi-bold": "6", demibold: "6", bold: "7", "extra-bold": "8", extrabold: "8", "ultra-bold": "8", ultrabold: "8", black: "9", heavy: "9", l: "3", r: "4", b: "7" }, Ba = { i: "i", italic: "i", n: "n", normal: "n" }, Ca = /^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
      function Da(a) {
        for (var b = a.f.length, c = 0; c < b; c++) {
          var d = a.f[c].split(":"), e = d[0].replace(/\+/g, " "), f = ["n4"];
          if (2 <= d.length) {
            var g;
            var m = d[1];
            g = [];
            if (m)
              for (var m = m.split(","), h = m.length, l = 0; l < h; l++) {
                var k;
                k = m[l];
                if (k.match(/^[\w-]+$/)) {
                  var n = Ca.exec(k.toLowerCase());
                  if (null == n)
                    k = "";
                  else {
                    k = n[2];
                    k = null == k || "" == k ? "n" : Ba[k];
                    n = n[1];
                    if (null == n || "" == n)
                      n = "4";
                    else
                      var r = Aa[n], n = r ? r : isNaN(n) ? "4" : n.substr(0, 1);
                    k = [k, n].join("");
                  }
                } else
                  k = "";
                k && g.push(k);
              }
            0 < g.length && (f = g);
            3 == d.length && (d = d[2], g = [], d = d ? d.split(",") : g, 0 < d.length && (d = za[d[0]]) && (a.c[e] = d));
          }
          a.c[e] || (d = za[e]) && (a.c[e] = d);
          for (d = 0; d < f.length; d += 1)
            a.a.push(new G(e, f[d]));
        }
      }
      ;
      function Ea(a, b) {
        this.c = a;
        this.a = b;
      }
      var Fa = { Arimo: true, Cousine: true, Tinos: true };
      Ea.prototype.load = function(a) {
        var b = new B(), c = this.c, d = new ta(this.a.api, this.a.text), e = this.a.families;
        va(d, e);
        var f = new ya(e);
        Da(f);
        z(c, wa(d), C(b));
        E(b, function() {
          a(f.a, f.c, Fa);
        });
      };
      function Ga(a, b) {
        this.c = a;
        this.a = b;
      }
      Ga.prototype.load = function(a) {
        var b = this.a.id, c = this.c.o;
        b ? A(this.c, (this.a.api || "https://use.typekit.net") + "/" + b + ".js", function(b2) {
          if (b2)
            a([]);
          else if (c.Typekit && c.Typekit.config && c.Typekit.config.fn) {
            b2 = c.Typekit.config.fn;
            for (var e = [], f = 0; f < b2.length; f += 2)
              for (var g = b2[f], m = b2[f + 1], h = 0; h < m.length; h++)
                e.push(new G(g, m[h]));
            try {
              c.Typekit.load({ events: false, classes: false, async: true });
            } catch (l) {
            }
            a(e);
          }
        }, 2e3) : a([]);
      };
      function Ha(a, b) {
        this.c = a;
        this.f = b;
        this.a = [];
      }
      Ha.prototype.load = function(a) {
        var b = this.f.id, c = this.c.o, d = this;
        b ? (c.__webfontfontdeckmodule__ || (c.__webfontfontdeckmodule__ = {}), c.__webfontfontdeckmodule__[b] = function(b2, c2) {
          for (var g = 0, m = c2.fonts.length; g < m; ++g) {
            var h = c2.fonts[g];
            d.a.push(new G(h.name, ga("font-weight:" + h.weight + ";font-style:" + h.style)));
          }
          a(d.a);
        }, A(this.c, (this.f.api || "https://f.fontdeck.com/s/css/js/") + ea(this.c) + "/" + b + ".js", function(b2) {
          b2 && a([]);
        })) : a([]);
      };
      var Y = new oa(window);
      Y.a.c.custom = function(a, b) {
        return new sa(b, a);
      };
      Y.a.c.fontdeck = function(a, b) {
        return new Ha(b, a);
      };
      Y.a.c.monotype = function(a, b) {
        return new ra(b, a);
      };
      Y.a.c.typekit = function(a, b) {
        return new Ga(b, a);
      };
      Y.a.c.google = function(a, b) {
        return new Ea(b, a);
      };
      var Z = { load: p(Y.load, Y) };
      "function" === typeof define && define.amd ? define(function() {
        return Z;
      }) : "undefined" !== typeof module && module.exports ? module.exports = Z : (window.WebFont = Z, window.WebFontConfig && Y.load(window.WebFontConfig));
    })();
  }
});

// app/utils/hooks/useProgressiveImage.ts
var import_react = __toESM(require_react());
function useProgressiveImage(lowQualitySrc, highQualitySrc) {
  const [src, setSrc] = (0, import_react.useState)(lowQualitySrc || highQualitySrc);
  (0, import_react.useEffect)(() => {
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setSrc(highQualitySrc);
    };
  }, [lowQualitySrc, highQualitySrc]);
  return { src, blur: src === lowQualitySrc };
}

// app/utils/hooks/useWebFonts.ts
var import_react2 = __toESM(require_react());
var import_webfontloader = __toESM(require_webfontloader());

// app/styles/fonts.css
var fonts_default = "/build/_assets/fonts-7XPFEBWD.css";

// app/utils/hooks/useWebFonts.ts
function useWebFonts() {
  (0, import_react2.useEffect)(() => {
    import_webfontloader.default.load({
      custom: {
        families: ["East Border"],
        urls: [fonts_default]
      }
    });
  });
}

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
var import_react3 = __toESM(require_react());

// app/ui/primitives/form/Button/styles.tsx
var StyledButton = styled("button", {
  fontSize: "$sm",
  cursor: "pointer",
  transition: "0.15s all ease-in-out"
});

// app/ui/primitives/form/Button/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Button = import_react3.default.forwardRef(
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
  bgColor
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
var import_react4 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Container = import_react4.default.forwardRef(
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
var wrap = {
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
  wrap,
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
  maxWidth: ""
};
var styleProps6 = {
  align: align3,
  fit,
  ...customStyleProps4
};
var StyledImg = styled("img");

// app/ui/primitives/media/Img/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Img = ({ src: fullSrc, thumbSrc, alt, loading = "lazy", css, ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({ props, styleProps: styleProps6, styleAliases: styleAliases6 });
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
    loading,
    ...restProps
  }, void 0, false, {
    fileName: "app/ui/primitives/media/Img/index.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
};

// app/ui/primitives/navigation/Link/styles.tsx
var moveUpDown = keyframes({
  "0%, to": { transform: "translateY(-15%)" },
  "50%": { transform: "translateY(15%)" }
});
var variants5 = {
  variant: {
    line: {
      "&::before": {
        width: "0",
        height: ".12rem",
        position: "absolute",
        bottom: "45%",
        content: "",
        left: "-9%",
        backgroundColor: "white",
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
  theme: { colors: colors2, fontSizes, fonts }
} = config;
var fontColor = getStylePropsFromToken(colors2);
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
var styleProps7 = {
  fontColor,
  fontFamily,
  fontSize,
  fontWeight,
  align: align4,
  textTransform
};
var StyledSpan = styled("span");

// app/ui/primitives/typography/Text/index.tsx
var import_react5 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Text = import_react5.default.forwardRef(
  ({ as = "span", css, fontFamily: fontFamily2 = "primary", children, ...props }, forwardedRef) => {
    console.log({ fontFamily: fontFamily2 });
    const { mediaStyles, restProps } = getformattedProps({
      props,
      styleProps: { ...styleProps7, fontFamily: fontFamily2 }
    });
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSpan, {
      as,
      css: { ...mediaStyles, ...css },
      ref: forwardedRef,
      ...restProps,
      children
    }, void 0, false, {
      fileName: "app/ui/primitives/typography/Text/index.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this);
  }
);
Text.displayName = "Text";

// app/assets/img/about-heading.svg
var about_heading_default = "/build/_assets/about-heading-CI2LQBHM.svg";

// app/assets/img/profile-bw.jpg
var profile_bw_default = "/build/_assets/profile-bw-IXR6EU56.jpg";

// app/assets/img/bolt.svg
var bolt_default = "/build/_assets/bolt-22GJDHJR.svg";

// app/assets/img/skull.svg
var skull_default = "/build/_assets/skull-N67EAKSS.svg";

// app/ui/components/About/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function About() {
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
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
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
              fileName: "app/ui/components/About/index.tsx",
              lineNumber: 19,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
              as: "p",
              gridColumn: { xs: "12", lg: "3" },
              fontSize: "lg",
              "padding-bottom": { xs: 80, lg: 20, xl: "0" },
              children: "Hi, I'm Elena Bravo, a multidisciplinary front-end developer and digital designer based in Madrid, Spain. With over 7 years of experience working with all types of clients and projects, I thrive on bringing both the technical and visual aspects of digital products to life."
            }, void 0, false, {
              fileName: "app/ui/components/About/index.tsx",
              lineNumber: 29,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
              align: "center",
              justify: "center",
              wrap: "wrap",
              gridColumn: { xs: "12", lg: "3" },
              gridColumnStart: { lg: "9" },
              position: "relative",
              width: "100%",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
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
                      fileName: "app/ui/components/About/index.tsx",
                      lineNumber: 63,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/ui/components/About/index.tsx",
                    lineNumber: 56,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: "app/ui/components/About/index.tsx",
                  lineNumber: 49,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
                  className: "profileLoading",
                  position: { lg: "absolute" },
                  top: "0",
                  left: { lg: "-28%", xl: "0", "2xl": 20 },
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
                    fileName: "app/ui/components/About/index.tsx",
                    lineNumber: 76,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: "app/ui/components/About/index.tsx",
                  lineNumber: 66,
                  columnNumber: 13
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
                  src: bolt_default,
                  alt: "bolt",
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
                  fileName: "app/ui/components/About/index.tsx",
                  lineNumber: 86,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/ui/components/About/index.tsx",
              lineNumber: 40,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/ui/components/About/index.tsx",
          lineNumber: 18,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
          templateColumns: "12",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
            gridColumn: { xs: "12", lg: "4" },
            gridColumnStart: { lg: "3" },
            paddingTop: { xs: 60, lg: 0 },
            transform: { lg: `translateY(-${toRem(110)})` },
            position: "relative",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
                src: skull_default,
                alt: "skull logo",
                display: { xs: "hidden", lg: "flex" },
                position: "absolute",
                left: "0",
                top: 300,
                width: 120,
                transform: { lg: `translateY(-${toRem(50)})` },
                pointerEvents: "none"
              }, void 0, false, {
                fileName: "app/ui/components/About/index.tsx",
                lineNumber: 112,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
                as: "p",
                fontSize: "lg",
                children: "My main focus as a developer is building accessible, high performance and inclusive digital experiences without sacrificing creativity. Basically, I like creating cool sh*t."
              }, void 0, false, {
                fileName: "app/ui/components/About/index.tsx",
                lineNumber: 123,
                columnNumber: 13
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/ui/components/About/index.tsx",
            lineNumber: 105,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/About/index.tsx",
          lineNumber: 104,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
          templateColumns: "12",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
            as: "p",
            gridColumn: { xs: "12", lg: "6" },
            gridColumnStart: { lg: "5" },
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
                  fileName: "app/ui/components/About/index.tsx",
                  lineNumber: 140,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/ui/components/About/index.tsx",
                lineNumber: 133,
                columnNumber: 13
              }, this),
              "and developing smaller projects for friends from time to time. I'm always available for fun and interesting side projects, so feel free to get in touch if you'd like to work together."
            ]
          }, void 0, true, {
            fileName: "app/ui/components/About/index.tsx",
            lineNumber: 131,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/About/index.tsx",
          lineNumber: 130,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/components/About/index.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/About/index.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/assets/img/intro-cta.svg
var intro_cta_default = "/build/_assets/intro-cta-4YG5YVOH.svg";

// app/ui/components/Intro/CTA.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function CTA() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
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
          lineNumber: 20,
          columnNumber: 9
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
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/components/Intro/CTA.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Intro/CTA.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/assets/img/heading.svg
var heading_default = "/build/_assets/heading-EOWW6AIC.svg";

// app/ui/components/Intro/Heading.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Heading() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
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
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/assets/img/arrow.svg
var arrow_default = "/build/_assets/arrow-6HCQ7SNL.svg";

// app/ui/components/Intro/ScrollDown.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ScrollDown() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
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
          lineNumber: 9,
          columnNumber: 11
        }, this)
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
  }, this);
}

// app/ui/components/Intro/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Intro() {
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
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Heading, {}, void 0, false, {
                fileName: "app/ui/components/Intro/index.tsx",
                lineNumber: 12,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(CTA, {}, void 0, false, {
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
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollDown, {}, void 0, false, {
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
}

// app/assets/img/logo.svg
var logo_default = "/build/_assets/logo-LEM2OEFN.svg";

// app/ui/components/Layout/Header.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    as: "header",
    position: { xs: "absolute", lg: "fixed" },
    top: 30,
    left: { xs: 20, lg: 40, "2xl": "calc(((100vw - 1280px)/2) - 28px)" },
    zIndex: "z40",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
      src: logo_default,
      alt: "Elena Bravo logo",
      size: { xs: 120, sm: 150 },
      pointerEvents: "none"
    }, void 0, false, {
      fileName: "app/ui/components/Layout/Header.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Layout/Header.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/ui/components/Layout/Menu/Mobile.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function MobileMenu({ menuItems: menuItems2 }) {
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
              lineNumber: 33,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
            lineNumber: 32,
            columnNumber: 9
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
                    lineNumber: 40,
                    columnNumber: 19
                  }, this)
                }, void 0, false, {
                  fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
                  lineNumber: 39,
                  columnNumber: 17
                }, this)
              }, item, false, {
                fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
                lineNumber: 38,
                columnNumber: 15
              }, this))
            }, void 0, false, {
              fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
              lineNumber: 36,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
            lineNumber: 35,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
        lineNumber: 18,
        columnNumber: 7
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
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                href: "https://github.com/elenabravo",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
                  children: "Github"
                }, void 0, false, {
                  fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
                  lineNumber: 52,
                  columnNumber: 17
                }, this)
              }, void 0, false, {
                fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
                lineNumber: 51,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
              lineNumber: 50,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
            lineNumber: 49,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
          lineNumber: 48,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
        lineNumber: 47,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
          children: "Menu"
        }, void 0, false, {
          fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
          lineNumber: 59,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
        lineNumber: 58,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
          children: "Close"
        }, void 0, false, {
          fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
          lineNumber: 62,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
        lineNumber: 61,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/components/Layout/Menu/Mobile.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/ui/components/Layout/Menu/Desktop.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function DesktopMenu({ menuItems: menuItems2 }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
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
          lineNumber: 19,
          columnNumber: 13
        }, this)
      }, item, false, {
        fileName: "app/ui/components/Layout/Menu/Desktop.tsx",
        lineNumber: 18,
        columnNumber: 11
      }, this))
    }, void 0, false, {
      fileName: "app/ui/components/Layout/Menu/Desktop.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Layout/Menu/Desktop.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/ui/components/Layout/Menu/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var menuItems = ["about", "stack", "inspiration", "contact"];
function Menu() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(MobileMenu, {
        menuItems
      }, void 0, false, {
        fileName: "app/ui/components/Layout/Menu/index.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(DesktopMenu, {
        menuItems
      }, void 0, false, {
        fileName: "app/ui/components/Layout/Menu/index.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/components/Layout/Menu/index.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/ui/components/Layout/Footer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Footer = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("footer", {}, void 0, false, {
  fileName: "app/ui/components/Layout/Footer.tsx",
  lineNumber: 3,
  columnNumber: 22
}, this);
var Footer_default = Footer;

// app/ui/components/Layout/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Layout = ({ children }) => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, false, {
        fileName: "app/ui/components/Layout/index.tsx",
        lineNumber: 14,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, {}, void 0, false, {
        fileName: "app/ui/components/Layout/index.tsx",
        lineNumber: 15,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
        as: "main",
        children
      }, void 0, false, {
        fileName: "app/ui/components/Layout/index.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Footer_default, {}, void 0, false, {
        fileName: "app/ui/components/Layout/index.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/components/Layout/index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
};

// app/assets/img/stack-heading.svg
var stack_heading_default = "/build/_assets/stack-heading-ZOPFLVVX.svg";

// app/assets/img/skelly.svg
var skelly_default = "/build/_assets/skelly-RE5E4ZTX.svg";

// app/ui/components/Stack/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Stack() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    as: "section",
    id: "stack",
    paddingY: { xs: 0, lg: 86 },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
      variant: "wrap",
      maxHeight: { xl: 708 },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
          templateColumns: "12",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
            src: stack_heading_default,
            alt: "Stack/Technologies",
            gridColumn: { xs: "3", lg: "2" },
            gridColumnStart: { lg: "3" },
            width: 202
          }, void 0, false, {
            fileName: "app/ui/components/Stack/index.tsx",
            lineNumber: 11,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/Stack/index.tsx",
          lineNumber: 10,
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
              children: "JAVASCRIPT, TYPESCRIPT, REACT, NEXT, REMIX, GRAPHQL, APOLLO, REDUX, WEBPACK, JEST, REACT TESTING LIBRARY, CYPRESS, NODE, EXPRESS, SASS, CSS IN JS, TAILWINDCSS, GSAP, PUG, GIT, GITLAB, STORYBOOK, FIREBASE, NETLIFY, GATSBY, FIGMA, ILLUSTRATOR"
            }, void 0, false, {
              fileName: "app/ui/components/Stack/index.tsx",
              lineNumber: 20,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
              src: skelly_default,
              alt: "skelleton illustration with a hat",
              display: { xs: "hidden", lg: "block" },
              alignSelf: "end",
              transform: {
                lg: `translateY(${toRem(80)}) translateX(${toRem(40)})`,
                xl: `translateY(${toRem(80)}) translateX(${toRem(0)})`
              },
              pointerEvents: "none"
            }, void 0, false, {
              fileName: "app/ui/components/Stack/index.tsx",
              lineNumber: 31,
              columnNumber: 11
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/ui/components/Stack/index.tsx",
          lineNumber: 19,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/components/Stack/index.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Stack/index.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/ui/screens/Home.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Home = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Intro, {}, void 0, false, {
        fileName: "app/ui/screens/Home.tsx",
        lineNumber: 7,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(About, {}, void 0, false, {
        fileName: "app/ui/screens/Home.tsx",
        lineNumber: 8,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Stack, {}, void 0, false, {
        fileName: "app/ui/screens/Home.tsx",
        lineNumber: 9,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/screens/Home.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
};

// app/routes/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  useWebFonts();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Home, {}, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 6,
    columnNumber: 10
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-UHOS4E5A.js.map
