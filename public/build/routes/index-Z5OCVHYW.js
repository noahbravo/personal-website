import {
  __toESM,
  require_jsx_dev_runtime,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-BI5R5UI4.js";

// app/routes/index.tsx
var import_react7 = __toESM(require_react());

// node_modules/@stitches/react/dist/index.mjs
var import_react = __toESM(require_react(), 1);
var e = "colors";
var t = "sizes";
var r = "space";
var n = { gap: r, gridGap: r, columnGap: r, gridColumnGap: r, rowGap: r, gridRowGap: r, inset: r, insetBlock: r, insetBlockEnd: r, insetBlockStart: r, insetInline: r, insetInlineEnd: r, insetInlineStart: r, margin: r, marginTop: r, marginRight: r, marginBottom: r, marginLeft: r, marginBlock: r, marginBlockEnd: r, marginBlockStart: r, marginInline: r, marginInlineEnd: r, marginInlineStart: r, padding: r, paddingTop: r, paddingRight: r, paddingBottom: r, paddingLeft: r, paddingBlock: r, paddingBlockEnd: r, paddingBlockStart: r, paddingInline: r, paddingInlineEnd: r, paddingInlineStart: r, top: r, right: r, bottom: r, left: r, scrollMargin: r, scrollMarginTop: r, scrollMarginRight: r, scrollMarginBottom: r, scrollMarginLeft: r, scrollMarginX: r, scrollMarginY: r, scrollMarginBlock: r, scrollMarginBlockEnd: r, scrollMarginBlockStart: r, scrollMarginInline: r, scrollMarginInlineEnd: r, scrollMarginInlineStart: r, scrollPadding: r, scrollPaddingTop: r, scrollPaddingRight: r, scrollPaddingBottom: r, scrollPaddingLeft: r, scrollPaddingX: r, scrollPaddingY: r, scrollPaddingBlock: r, scrollPaddingBlockEnd: r, scrollPaddingBlockStart: r, scrollPaddingInline: r, scrollPaddingInlineEnd: r, scrollPaddingInlineStart: r, fontSize: "fontSizes", background: e, backgroundColor: e, backgroundImage: e, borderImage: e, border: e, borderBlock: e, borderBlockEnd: e, borderBlockStart: e, borderBottom: e, borderBottomColor: e, borderColor: e, borderInline: e, borderInlineEnd: e, borderInlineStart: e, borderLeft: e, borderLeftColor: e, borderRight: e, borderRightColor: e, borderTop: e, borderTopColor: e, caretColor: e, color: e, columnRuleColor: e, fill: e, outline: e, outlineColor: e, stroke: e, textDecorationColor: e, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: t, minBlockSize: t, maxBlockSize: t, inlineSize: t, minInlineSize: t, maxInlineSize: t, width: t, minWidth: t, maxWidth: t, height: t, minHeight: t, maxHeight: t, flexBasis: t, gridTemplateColumns: t, gridTemplateRows: t, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" };
var i = (e2, t2) => "function" == typeof t2 ? { "()": Function.prototype.toString.call(t2) } : t2;
var o = () => {
  const e2 = /* @__PURE__ */ Object.create(null);
  return (t2, r2, ...n2) => {
    const o2 = ((e3) => JSON.stringify(e3, i))(t2);
    return o2 in e2 ? e2[o2] : e2[o2] = r2(t2, ...n2);
  };
};
var l = Symbol.for("sxs.internal");
var s = (e2, t2) => Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2));
var a = (e2) => {
  for (const t2 in e2)
    return true;
  return false;
};
var { hasOwnProperty: c } = Object.prototype;
var d = (e2) => e2.includes("-") ? e2 : e2.replace(/[A-Z]/g, (e3) => "-" + e3.toLowerCase());
var g = /\s+(?![^()]*\))/;
var p = (e2) => (t2) => e2(..."string" == typeof t2 ? String(t2).split(g) : [t2]);
var u = { appearance: (e2) => ({ WebkitAppearance: e2, appearance: e2 }), backfaceVisibility: (e2) => ({ WebkitBackfaceVisibility: e2, backfaceVisibility: e2 }), backdropFilter: (e2) => ({ WebkitBackdropFilter: e2, backdropFilter: e2 }), backgroundClip: (e2) => ({ WebkitBackgroundClip: e2, backgroundClip: e2 }), boxDecorationBreak: (e2) => ({ WebkitBoxDecorationBreak: e2, boxDecorationBreak: e2 }), clipPath: (e2) => ({ WebkitClipPath: e2, clipPath: e2 }), content: (e2) => ({ content: e2.includes('"') || e2.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e2) ? e2 : `"${e2}"` }), hyphens: (e2) => ({ WebkitHyphens: e2, hyphens: e2 }), maskImage: (e2) => ({ WebkitMaskImage: e2, maskImage: e2 }), maskSize: (e2) => ({ WebkitMaskSize: e2, maskSize: e2 }), tabSize: (e2) => ({ MozTabSize: e2, tabSize: e2 }), textSizeAdjust: (e2) => ({ WebkitTextSizeAdjust: e2, textSizeAdjust: e2 }), userSelect: (e2) => ({ WebkitUserSelect: e2, userSelect: e2 }), marginBlock: p((e2, t2) => ({ marginBlockStart: e2, marginBlockEnd: t2 || e2 })), marginInline: p((e2, t2) => ({ marginInlineStart: e2, marginInlineEnd: t2 || e2 })), maxSize: p((e2, t2) => ({ maxBlockSize: e2, maxInlineSize: t2 || e2 })), minSize: p((e2, t2) => ({ minBlockSize: e2, minInlineSize: t2 || e2 })), paddingBlock: p((e2, t2) => ({ paddingBlockStart: e2, paddingBlockEnd: t2 || e2 })), paddingInline: p((e2, t2) => ({ paddingInlineStart: e2, paddingInlineEnd: t2 || e2 })) };
var h = /([\d.]+)([^]*)/;
var f = (e2, t2) => e2.length ? e2.reduce((e3, r2) => (e3.push(...t2.map((e4) => e4.includes("&") ? e4.replace(/&/g, /[ +>|~]/.test(r2) && /&.*&/.test(e4) ? `:is(${r2})` : r2) : r2 + " " + e4)), e3), []) : t2;
var m = (e2, t2) => e2 in b && "string" == typeof t2 ? t2.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t3, r2, n2, i2) => r2 + ("stretch" === n2 ? `-moz-available${i2};${d(e2)}:${r2}-webkit-fill-available` : `-moz-fit-content${i2};${d(e2)}:${r2}fit-content`) + i2) : String(t2);
var b = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 };
var S = (e2) => e2 ? e2 + "-" : "";
var k = (e2, t2, r2) => e2.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (e3, n2, i2, o2, l2) => "$" == o2 == !!i2 ? e3 : (n2 || "--" == o2 ? "calc(" : "") + "var(--" + ("$" === o2 ? S(t2) + (l2.includes("$") ? "" : S(r2)) + l2.replace(/\$/g, "-") : l2) + ")" + (n2 || "--" == o2 ? "*" + (n2 || "") + (i2 || "1") + ")" : ""));
var y = /\s*,\s*(?![^()]*\))/;
var B = Object.prototype.toString;
var $ = (e2, t2, r2, n2, i2) => {
  let o2, l2, s2;
  const a2 = (e3, t3, r3) => {
    let c2, g2;
    const p2 = (e4) => {
      for (c2 in e4) {
        const R2 = 64 === c2.charCodeAt(0), z2 = R2 && Array.isArray(e4[c2]) ? e4[c2] : [e4[c2]];
        for (g2 of z2) {
          const e5 = /[A-Z]/.test($2 = c2) ? $2 : $2.replace(/-[^]/g, (e6) => e6[1].toUpperCase()), z3 = "object" == typeof g2 && g2 && g2.toString === B && (!n2.utils[e5] || !t3.length);
          if (e5 in n2.utils && !z3) {
            const t4 = n2.utils[e5];
            if (t4 !== l2) {
              l2 = t4, p2(t4(g2)), l2 = null;
              continue;
            }
          } else if (e5 in u) {
            const t4 = u[e5];
            if (t4 !== s2) {
              s2 = t4, p2(t4(g2)), s2 = null;
              continue;
            }
          }
          if (R2 && (b2 = c2.slice(1) in n2.media ? "@media " + n2.media[c2.slice(1)] : c2, c2 = b2.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (e6, t4, r4, n3, i3, o3) => {
            const l3 = h.test(t4), s3 = 0.0625 * (l3 ? -1 : 1), [a3, c3] = l3 ? [n3, t4] : [t4, n3];
            return "(" + ("=" === r4[0] ? "" : ">" === r4[0] === l3 ? "max-" : "min-") + a3 + ":" + ("=" !== r4[0] && 1 === r4.length ? c3.replace(h, (e7, t5, n4) => Number(t5) + s3 * (">" === r4 ? 1 : -1) + n4) : c3) + (i3 ? ") and (" + (">" === i3[0] ? "min-" : "max-") + a3 + ":" + (1 === i3.length ? o3.replace(h, (e7, t5, r5) => Number(t5) + s3 * (">" === i3 ? -1 : 1) + r5) : o3) : "") + ")";
          })), z3) {
            const e6 = R2 ? r3.concat(c2) : [...r3], n3 = R2 ? [...t3] : f(t3, c2.split(y));
            void 0 !== o2 && i2(x(...o2)), o2 = void 0, a2(g2, n3, e6);
          } else
            void 0 === o2 && (o2 = [[], t3, r3]), c2 = R2 || 36 !== c2.charCodeAt(0) ? c2 : `--${S(n2.prefix)}${c2.slice(1).replace(/\$/g, "-")}`, g2 = z3 ? g2 : "number" == typeof g2 ? g2 && e5 in I ? String(g2) + "px" : String(g2) : k(m(e5, null == g2 ? "" : g2), n2.prefix, n2.themeMap[e5]), o2[0].push(`${R2 ? `${c2} ` : `${d(c2)}:`}${g2}`);
        }
      }
      var b2, $2;
    };
    p2(e3), void 0 !== o2 && i2(x(...o2)), o2 = void 0;
  };
  a2(e2, t2, r2);
};
var x = (e2, t2, r2) => `${r2.map((e3) => `${e3}{`).join("")}${t2.length ? `${t2.join(",")}{` : ""}${e2.join(";")}${t2.length ? "}" : ""}${Array(r2.length ? r2.length + 1 : 0).join("}")}`;
var I = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 };
var R = (e2) => String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
var z = (e2) => ((e3) => {
  let t2, r2 = "";
  for (t2 = Math.abs(e3); t2 > 52; t2 = t2 / 52 | 0)
    r2 = R(t2 % 52) + r2;
  return R(t2 % 52) + r2;
})(((e3, t2) => {
  let r2 = t2.length;
  for (; r2; )
    e3 = 33 * e3 ^ t2.charCodeAt(--r2);
  return e3;
})(5381, JSON.stringify(e2)) >>> 0);
var W = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"];
var j = (e2) => {
  if (e2.href && !e2.href.startsWith(location.origin))
    return false;
  try {
    return !!e2.cssRules;
  } catch (e3) {
    return false;
  }
};
var E = (e2) => {
  let t2;
  const r2 = () => {
    const { cssRules: e3 } = t2.sheet;
    return [].map.call(e3, (r3, n3) => {
      const { cssText: i2 } = r3;
      let o2 = "";
      if (i2.startsWith("--sxs"))
        return "";
      if (e3[n3 - 1] && (o2 = e3[n3 - 1].cssText).startsWith("--sxs")) {
        if (!r3.cssRules.length)
          return "";
        for (const e4 in t2.rules)
          if (t2.rules[e4].group === r3)
            return `--sxs{--sxs:${[...t2.rules[e4].cache].join(" ")}}${i2}`;
        return r3.cssRules.length ? `${o2}${i2}` : "";
      }
      return i2;
    }).join("");
  }, n2 = () => {
    if (t2) {
      const { rules: e3, sheet: r3 } = t2;
      if (!r3.deleteRule) {
        for (; 3 === Object(Object(r3.cssRules)[0]).type; )
          r3.cssRules.splice(0, 1);
        r3.cssRules = [];
      }
      for (const t3 in e3)
        delete e3[t3];
    }
    const i2 = Object(e2).styleSheets || [];
    for (const e3 of i2)
      if (j(e3)) {
        for (let i3 = 0, o3 = e3.cssRules; o3[i3]; ++i3) {
          const l3 = Object(o3[i3]);
          if (1 !== l3.type)
            continue;
          const s2 = Object(o3[i3 + 1]);
          if (4 !== s2.type)
            continue;
          ++i3;
          const { cssText: a2 } = l3;
          if (!a2.startsWith("--sxs"))
            continue;
          const c2 = a2.slice(14, -3).trim().split(/\s+/), d2 = W[c2[0]];
          d2 && (t2 || (t2 = { sheet: e3, reset: n2, rules: {}, toString: r2 }), t2.rules[d2] = { group: s2, index: i3, cache: new Set(c2) });
        }
        if (t2)
          break;
      }
    if (!t2) {
      const i3 = (e3, t3) => ({ type: t3, cssRules: [], insertRule(e4, t4) {
        this.cssRules.splice(t4, 0, i3(e4, { import: 3, undefined: 1 }[(e4.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return "@media{}" === e3 ? `@media{${[].map.call(this.cssRules, (e4) => e4.cssText).join("")}}` : e3;
      } });
      t2 = { sheet: e2 ? (e2.head || e2).appendChild(document.createElement("style")).sheet : i3("", "text/css"), rules: {}, reset: n2, toString: r2 };
    }
    const { sheet: o2, rules: l2 } = t2;
    for (let e3 = W.length - 1; e3 >= 0; --e3) {
      const t3 = W[e3];
      if (!l2[t3]) {
        const r3 = W[e3 + 1], n3 = l2[r3] ? l2[r3].index : o2.cssRules.length;
        o2.insertRule("@media{}", n3), o2.insertRule(`--sxs{--sxs:${e3}}`, n3), l2[t3] = { group: o2.cssRules[n3 + 1], index: n3, cache: /* @__PURE__ */ new Set([e3]) };
      }
      v(l2[t3]);
    }
  };
  return n2(), t2;
};
var v = (e2) => {
  const t2 = e2.group;
  let r2 = t2.cssRules.length;
  e2.apply = (e3) => {
    try {
      t2.insertRule(e3, r2), ++r2;
    } catch (e4) {
    }
  };
};
var T = Symbol();
var w = o();
var M = (e2, t2) => w(e2, () => (...r2) => {
  let n2 = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const t3 of r2)
    if (null != t3)
      if (t3[l]) {
        null == n2.type && (n2.type = t3[l].type);
        for (const e3 of t3[l].composers)
          n2.composers.add(e3);
      } else
        t3.constructor !== Object || t3.$$typeof ? null == n2.type && (n2.type = t3) : n2.composers.add(C(t3, e2));
  return null == n2.type && (n2.type = "span"), n2.composers.size || n2.composers.add(["PJLV", {}, [], [], {}, []]), P(e2, n2, t2);
});
var C = ({ variants: e2, compoundVariants: t2, defaultVariants: r2, ...n2 }, i2) => {
  const o2 = `${S(i2.prefix)}c-${z(n2)}`, l2 = [], s2 = [], d2 = /* @__PURE__ */ Object.create(null), g2 = [];
  for (const e3 in r2)
    d2[e3] = String(r2[e3]);
  if ("object" == typeof e2 && e2)
    for (const t3 in e2) {
      p2 = d2, u2 = t3, c.call(p2, u2) || (d2[t3] = "undefined");
      const r3 = e2[t3];
      for (const e3 in r3) {
        const n3 = { [t3]: String(e3) };
        "undefined" === String(e3) && g2.push(t3);
        const i3 = r3[e3], o3 = [n3, i3, !a(i3)];
        l2.push(o3);
      }
    }
  var p2, u2;
  if ("object" == typeof t2 && t2)
    for (const e3 of t2) {
      let { css: t3, ...r3 } = e3;
      t3 = "object" == typeof t3 && t3 || {};
      for (const e4 in r3)
        r3[e4] = String(r3[e4]);
      const n3 = [r3, t3, !a(t3)];
      s2.push(n3);
    }
  return [o2, n2, l2, s2, d2, g2];
};
var P = (e2, t2, r2) => {
  const [n2, i2, o2, a2] = L(t2.composers), c2 = "function" == typeof t2.type || t2.type.$$typeof ? ((e3) => {
    function t3() {
      for (let r3 = 0; r3 < t3[T].length; r3++) {
        const [n3, i3] = t3[T][r3];
        e3.rules[n3].apply(i3);
      }
      return t3[T] = [], null;
    }
    return t3[T] = [], t3.rules = {}, W.forEach((e4) => t3.rules[e4] = { apply: (r3) => t3[T].push([e4, r3]) }), t3;
  })(r2) : null, d2 = (c2 || r2).rules, g2 = `.${n2}${i2.length > 1 ? `:where(.${i2.slice(1).join(".")})` : ""}`, p2 = (l2) => {
    l2 = "object" == typeof l2 && l2 || A;
    const { css: s2, ...p3 } = l2, u2 = {};
    for (const e3 in o2)
      if (delete p3[e3], e3 in l2) {
        let t3 = l2[e3];
        "object" == typeof t3 && t3 ? u2[e3] = { "@initial": o2[e3], ...t3 } : (t3 = String(t3), u2[e3] = "undefined" !== t3 || a2.has(e3) ? t3 : o2[e3]);
      } else
        u2[e3] = o2[e3];
    const h2 = /* @__PURE__ */ new Set([...i2]);
    for (const [n3, i3, o3, l3] of t2.composers) {
      r2.rules.styled.cache.has(n3) || (r2.rules.styled.cache.add(n3), $(i3, [`.${n3}`], [], e2, (e3) => {
        d2.styled.apply(e3);
      }));
      const t3 = O(o3, u2, e2.media), s3 = O(l3, u2, e2.media, true);
      for (const i4 of t3)
        if (void 0 !== i4)
          for (const [t4, o4, l4] of i4) {
            const i5 = `${n3}-${z(o4)}-${t4}`;
            h2.add(i5);
            const s4 = (l4 ? r2.rules.resonevar : r2.rules.onevar).cache, a3 = l4 ? d2.resonevar : d2.onevar;
            s4.has(i5) || (s4.add(i5), $(o4, [`.${i5}`], [], e2, (e3) => {
              a3.apply(e3);
            }));
          }
      for (const t4 of s3)
        if (void 0 !== t4)
          for (const [i4, o4] of t4) {
            const t5 = `${n3}-${z(o4)}-${i4}`;
            h2.add(t5), r2.rules.allvar.cache.has(t5) || (r2.rules.allvar.cache.add(t5), $(o4, [`.${t5}`], [], e2, (e3) => {
              d2.allvar.apply(e3);
            }));
          }
    }
    if ("object" == typeof s2 && s2) {
      const t3 = `${n2}-i${z(s2)}-css`;
      h2.add(t3), r2.rules.inline.cache.has(t3) || (r2.rules.inline.cache.add(t3), $(s2, [`.${t3}`], [], e2, (e3) => {
        d2.inline.apply(e3);
      }));
    }
    for (const e3 of String(l2.className || "").trim().split(/\s+/))
      e3 && h2.add(e3);
    const f2 = p3.className = [...h2].join(" ");
    return { type: t2.type, className: f2, selector: g2, props: p3, toString: () => f2, deferredInjector: c2 };
  };
  return s(p2, { className: n2, selector: g2, [l]: t2, toString: () => (r2.rules.styled.cache.has(n2) || p2(), n2) });
};
var L = (e2) => {
  let t2 = "";
  const r2 = [], n2 = {}, i2 = [];
  for (const [o2, , , , l2, s2] of e2) {
    "" === t2 && (t2 = o2), r2.push(o2), i2.push(...s2);
    for (const e3 in l2) {
      const t3 = l2[e3];
      (void 0 === n2[e3] || "undefined" !== t3 || s2.includes(t3)) && (n2[e3] = t3);
    }
  }
  return [t2, r2, n2, new Set(i2)];
};
var O = (e2, t2, r2, n2) => {
  const i2 = [];
  e:
    for (let [o2, l2, s2] of e2) {
      if (s2)
        continue;
      let e3, a2 = 0, c2 = false;
      for (e3 in o2) {
        const n3 = o2[e3];
        let i3 = t2[e3];
        if (i3 !== n3) {
          if ("object" != typeof i3 || !i3)
            continue e;
          {
            let e4, t3, o3 = 0;
            for (const l3 in i3) {
              if (n3 === String(i3[l3])) {
                if ("@initial" !== l3) {
                  const e5 = l3.slice(1);
                  (t3 = t3 || []).push(e5 in r2 ? r2[e5] : l3.replace(/^@media ?/, "")), c2 = true;
                }
                a2 += o3, e4 = true;
              }
              ++o3;
            }
            if (t3 && t3.length && (l2 = { ["@media " + t3.join(", ")]: l2 }), !e4)
              continue e;
          }
        }
      }
      (i2[a2] = i2[a2] || []).push([n2 ? "cv" : `${e3}-${o2[e3]}`, l2, c2]);
    }
  return i2;
};
var A = {};
var N = o();
var D = (e2, t2) => N(e2, () => (...r2) => {
  const n2 = () => {
    for (let n3 of r2) {
      n3 = "object" == typeof n3 && n3 || {};
      let r3 = z(n3);
      if (!t2.rules.global.cache.has(r3)) {
        if (t2.rules.global.cache.add(r3), "@import" in n3) {
          let e3 = [].indexOf.call(t2.sheet.cssRules, t2.rules.themed.group) - 1;
          for (let r4 of [].concat(n3["@import"]))
            r4 = r4.includes('"') || r4.includes("'") ? r4 : `"${r4}"`, t2.sheet.insertRule(`@import ${r4};`, e3++);
          delete n3["@import"];
        }
        $(n3, [], [], e2, (e3) => {
          t2.rules.global.apply(e3);
        });
      }
    }
    return "";
  };
  return s(n2, { toString: n2 });
});
var H = o();
var V = (e2, t2) => H(e2, () => (r2) => {
  const n2 = `${S(e2.prefix)}k-${z(r2)}`, i2 = () => {
    if (!t2.rules.global.cache.has(n2)) {
      t2.rules.global.cache.add(n2);
      const i3 = [];
      $(r2, [], [], e2, (e3) => i3.push(e3));
      const o2 = `@keyframes ${n2}{${i3.join("")}}`;
      t2.rules.global.apply(o2);
    }
    return n2;
  };
  return s(i2, { get name() {
    return i2();
  }, toString: i2 });
});
var G = class {
  constructor(e2, t2, r2, n2) {
    this.token = null == e2 ? "" : String(e2), this.value = null == t2 ? "" : String(t2), this.scale = null == r2 ? "" : String(r2), this.prefix = null == n2 ? "" : String(n2);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + S(this.prefix) + S(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
};
var F = o();
var J = (e2, t2) => F(e2, () => (r2, n2) => {
  n2 = "object" == typeof r2 && r2 || Object(n2);
  const i2 = `.${r2 = (r2 = "string" == typeof r2 ? r2 : "") || `${S(e2.prefix)}t-${z(n2)}`}`, o2 = {}, l2 = [];
  for (const t3 in n2) {
    o2[t3] = {};
    for (const r3 in n2[t3]) {
      const i3 = `--${S(e2.prefix)}${t3}-${r3}`, s3 = k(String(n2[t3][r3]), e2.prefix, t3);
      o2[t3][r3] = new G(r3, s3, t3, e2.prefix), l2.push(`${i3}:${s3}`);
    }
  }
  const s2 = () => {
    if (l2.length && !t2.rules.themed.cache.has(r2)) {
      t2.rules.themed.cache.add(r2);
      const i3 = `${n2 === e2.theme ? ":root," : ""}.${r2}{${l2.join(";")}}`;
      t2.rules.themed.apply(i3);
    }
    return r2;
  };
  return { ...o2, get className() {
    return s2();
  }, selector: i2, toString: s2 };
});
var U = o();
var Y = o();
var q = (e2) => {
  const t2 = ((e3) => {
    let t3 = false;
    const r2 = U(e3, (e4) => {
      t3 = true;
      const r3 = "prefix" in (e4 = "object" == typeof e4 && e4 || {}) ? String(e4.prefix) : "", i2 = "object" == typeof e4.media && e4.media || {}, o2 = "object" == typeof e4.root ? e4.root || null : globalThis.document || null, l2 = "object" == typeof e4.theme && e4.theme || {}, s2 = { prefix: r3, media: i2, theme: l2, themeMap: "object" == typeof e4.themeMap && e4.themeMap || { ...n }, utils: "object" == typeof e4.utils && e4.utils || {} }, a2 = E(o2), c2 = { css: M(s2, a2), globalCss: D(s2, a2), keyframes: V(s2, a2), createTheme: J(s2, a2), reset() {
        a2.reset(), c2.theme.toString();
      }, theme: {}, sheet: a2, config: s2, prefix: r3, getCssText: a2.toString, toString: a2.toString };
      return String(c2.theme = c2.createTheme(l2)), c2;
    });
    return t3 || r2.reset(), r2;
  })(e2);
  return t2.styled = (({ config: e3, sheet: t3 }) => Y(e3, () => {
    const r2 = M(e3, t3);
    return (...e4) => {
      const t4 = r2(...e4), n2 = t4[l].type, i2 = import_react.default.forwardRef((e5, r3) => {
        const i3 = e5 && e5.as || n2, { props: o2, deferredInjector: l2 } = t4(e5);
        return delete o2.as, o2.ref = r3, l2 ? import_react.default.createElement(import_react.default.Fragment, null, import_react.default.createElement(i3, o2), import_react.default.createElement(l2, null)) : import_react.default.createElement(i3, o2);
      });
      return i2.className = t4.className, i2.displayName = `Styled.${n2.displayName || n2.name || n2}`, i2.selector = t4.selector, i2.toString = () => t4.selector, i2[l] = t4[l], i2;
    };
  }))(t2), t2;
};

// app/stitches.config.ts
var { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = q({
  theme: {
    colors: {
      "turquoise-200": "#0098a8",
      "turquoise-400": "#005C65",
      "yellow-100": "#FFAD00",
      "red-100": "#FF0D00",
      black: "#000",
      white: "#fff"
    },
    fonts: {
      primary: "Karla, Helvetica Neue, Helvetica, sans-serif",
      secondary: "East Border, Helvetica Neue, Helvetica, sans-serif"
    },
    fontSizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.5rem",
      "2xl": "2.25rem",
      "3xl": "3rem",
      "4xl": "3.875rem",
      "5xl": "5rem"
    }
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
    xl: "(min-width: 1280px)",
    "2xl": "(min-width: 1536px)"
  },
  utils: {
    marginX: (value) => ({
      marginLeft: value,
      marginRight: value
    }),
    marginY: (value) => ({
      marginTop: value,
      marginBottom: value
    }),
    paddingX: (value) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    paddingY: (value) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    size: (value) => ({
      width: value,
      height: value
    }),
    borderX: (value) => ({
      borderLeft: value,
      borderRight: value
    }),
    borderY: (value) => ({
      borderTop: value,
      borderBottom: value
    })
  }
});

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
var List = ({ children, css: css2, ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({ props });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledList, {
    css: { ...mediaStyles, ...css2 },
    ...restProps,
    children
  }, void 0, false, {
    fileName: "app/ui/primitives/dataDisplay/List/index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
};
var ListItem = ({ children, css: css2, ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({ props });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledListItem, {
    css: { ...mediaStyles, ...css2 },
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
  ({ children, css: css2, ...props }, forwardedRef) => {
    const { mediaStyles, restProps } = getformattedProps({ props });
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledButton, {
      type: "button",
      css: { ...mediaStyles, ...css2 },
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
var Box = ({ children, border: border2, css: css2, ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({ props, styleProps, styleAliases });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledDiv, {
    border: border2,
    css: { ...mediaStyles, ...css2 },
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
var Center = ({ children, css: css2, border: border2, variant = "center-content", ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({
    props,
    styleProps: styleProps3,
    styleAliases: styleAliases3
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledDiv3, {
    border: border2,
    variant,
    css: { ...mediaStyles, ...css2 },
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
  ({ as = "div", variant, css: css2, children, ...props }, forwardedRef) => {
    const { mediaStyles, restProps } = getformattedProps({ props, styleProps: styleProps2, styleAliases: styleAliases2 });
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledDiv2, {
      as,
      variant,
      css: { ...mediaStyles, ...css2 },
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
var Grid = ({ children, css: css2, ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({ props, styleProps: styleProps4, styleAliases: styleAliases4 });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledDiv4, {
    css: { ...mediaStyles, ...css2 },
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
var Flex = ({ children, variant, css: css2, ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({
    props,
    styleProps: styleProps5,
    styleAliases: styleAliases5
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledDiv5, {
    variant,
    css: { ...mediaStyles, ...css2 },
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
var Img = ({ src, alt, loading = "lazy", width, height, css: css2, ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({
    props: { ...props, width, height },
    styleProps: styleProps6,
    styleAliases: styleAliases6
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledImg, {
    css: {
      ...mediaStyles,
      ...css2
    },
    src,
    alt,
    loading,
    ...restProps
  }, void 0, false, {
    fileName: "app/ui/primitives/media/Img/index.tsx",
    lineNumber: 21,
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
var Link = ({ children, css: css2, isExternal = true, variant, ...props }) => {
  const { mediaStyles, restProps } = getformattedProps({ props });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledLink, {
    css: { ...mediaStyles, ...css2 },
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
var import_react5 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Text = import_react5.default.forwardRef(({ as = "span", css: css2, variant, children, ...props }, forwardedRef) => {
  const { mediaStyles, restProps } = getformattedProps({ props, styleProps: styleProps7 });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSpan, {
    as,
    variant,
    css: { ...mediaStyles, ...css2 },
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

// app/assets/img/profile-bw.jpg
var profile_bw_default = "/build/_assets/profile-bw-IXR6EU56.jpg";

// app/assets/img/bolt.svg
var bolt_default = "/build/_assets/bolt-22GJDHJR.svg";

// app/ui/components/About/FirstRow.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function FirstRow() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
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
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
        as: "p",
        gridColumn: { xs: "12", lg: "3" },
        fontSize: "lg",
        "padding-bottom": { xs: 80, lg: 20, xl: "0" },
        children: "Hi, I'm Elena Bravo, a multidisciplinary front-end developer and digital designer based in Madrid, Spain. With over 7 years of experience working with all types of clients and projects, I thrive on bringing both the technical and visual aspects of digital products to life."
      }, void 0, false, {
        fileName: "app/ui/components/About/FirstRow.tsx",
        lineNumber: 20,
        columnNumber: 7
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
                fileName: "app/ui/components/About/FirstRow.tsx",
                lineNumber: 54,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/ui/components/About/FirstRow.tsx",
              lineNumber: 47,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/About/FirstRow.tsx",
            lineNumber: 40,
            columnNumber: 9
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
              fileName: "app/ui/components/About/FirstRow.tsx",
              lineNumber: 67,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/About/FirstRow.tsx",
            lineNumber: 57,
            columnNumber: 9
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
            fileName: "app/ui/components/About/FirstRow.tsx",
            lineNumber: 77,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/ui/components/About/FirstRow.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/components/About/FirstRow.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/assets/img/skull.svg
var skull_default = "/build/_assets/skull-N67EAKSS.svg";

// app/ui/components/About/SecondRow.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SecondRow() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
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
          fileName: "app/ui/components/About/SecondRow.tsx",
          lineNumber: 15,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
          as: "p",
          fontSize: "lg",
          children: "My main focus as a developer is building accessible, high performance and inclusive digital experiences without sacrificing creativity. Basically, I like creating cool sh*t."
        }, void 0, false, {
          fileName: "app/ui/components/About/SecondRow.tsx",
          lineNumber: 26,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/components/About/SecondRow.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/About/SecondRow.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/ui/components/About/ThirdRow.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ThirdRow() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
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
            fileName: "app/ui/components/About/ThirdRow.tsx",
            lineNumber: 15,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/About/ThirdRow.tsx",
          lineNumber: 8,
          columnNumber: 9
        }, this),
        "and developing smaller projects for friends from time to time. I'm always available for fun and interesting side projects, so feel free to get in touch if you'd like to work together."
      ]
    }, void 0, true, {
      fileName: "app/ui/components/About/ThirdRow.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/About/ThirdRow.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

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
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FirstRow, {}, void 0, false, {
          fileName: "app/ui/components/About/index.tsx",
          lineNumber: 16,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SecondRow, {}, void 0, false, {
          fileName: "app/ui/components/About/index.tsx",
          lineNumber: 17,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ThirdRow, {}, void 0, false, {
          fileName: "app/ui/components/About/index.tsx",
          lineNumber: 18,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/components/About/index.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/About/index.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

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
function ContactEmail() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
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
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/ui/components/Contact/Email.tsx",
        lineNumber: 11,
        columnNumber: 7
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
                          columnNumber: 19
                        }, this)
                      }, void 0, false, {
                        fileName: "app/ui/components/Contact/Email.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/ui/components/Contact/Email.tsx",
                      lineNumber: 34,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
                      fontSize: { xs: "3xl", sm: "5xl" },
                      lineHeight: "none",
                      children: "hey@"
                    }, void 0, false, {
                      fileName: "app/ui/components/Contact/Email.tsx",
                      lineNumber: 52,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/ui/components/Contact/Email.tsx",
                  lineNumber: 33,
                  columnNumber: 13
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
                          columnNumber: 19
                        }, this)
                      }, void 0, false, {
                        fileName: "app/ui/components/Contact/Email.tsx",
                        lineNumber: 66,
                        columnNumber: 17
                      }, this)
                    }, void 0, false, {
                      fileName: "app/ui/components/Contact/Email.tsx",
                      lineNumber: 57,
                      columnNumber: 15
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
                      fontSize: { xs: "3xl", sm: "5xl" },
                      lineHeight: "none",
                      children: "elenabravo.com"
                    }, void 0, false, {
                      fileName: "app/ui/components/Contact/Email.tsx",
                      lineNumber: 75,
                      columnNumber: 15
                    }, this)
                  ]
                }, void 0, true, {
                  fileName: "app/ui/components/Contact/Email.tsx",
                  lineNumber: 56,
                  columnNumber: 13
                }, this)
              ]
            }, void 0, true, {
              fileName: "app/ui/components/Contact/Email.tsx",
              lineNumber: 28,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/Contact/Email.tsx",
            lineNumber: 21,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
            src: ghost_default,
            alt: "ghost",
            display: { xs: "hidden", lg: "flex" },
            width: 120,
            transform: `translateY(-${toRem(80)})`,
            pointerEvents: "none"
          }, void 0, false, {
            fileName: "app/ui/components/Contact/Email.tsx",
            lineNumber: 81,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/ui/components/Contact/Email.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/components/Contact/Email.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

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
function ContactSocial() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
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
        lineNumber: 9,
        columnNumber: 7
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
              lineNumber: 21,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/Contact/Social/index.tsx",
            lineNumber: 20,
            columnNumber: 13
          }, this)
        }, name, false, {
          fileName: "app/ui/components/Contact/Social/index.tsx",
          lineNumber: 19,
          columnNumber: 11
        }, this))
      }, void 0, false, {
        fileName: "app/ui/components/Contact/Social/index.tsx",
        lineNumber: 17,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/components/Contact/Social/index.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/ui/components/Contact/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Contact() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    as: "section",
    paddingTop: { xs: 26, lg: 0 },
    paddingBottom: { xs: 40, lg: 100 },
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
      variant: "wrap",
      maxHeight: 708,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactEmail, {}, void 0, false, {
          fileName: "app/ui/components/Contact/index.tsx",
          lineNumber: 9,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ContactSocial, {}, void 0, false, {
          fileName: "app/ui/components/Contact/index.tsx",
          lineNumber: 10,
          columnNumber: 9
        }, this)
      ]
    }, void 0, true, {
      fileName: "app/ui/components/Contact/index.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Contact/index.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}

// app/ui/components/Inspiration/album.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Album({ album, artist }) {
  const { name: albumName, image: cover } = album;
  const { name: artistName, image: artistImage } = artist;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
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
        lineNumber: 15,
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
        lineNumber: 16,
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
            lineNumber: 25,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
            fontSize: "sm",
            children: artistName
          }, void 0, false, {
            fileName: "app/ui/components/Inspiration/album.tsx",
            lineNumber: 26,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/ui/components/Inspiration/album.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/components/Inspiration/album.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/assets/img/inspiration-heading.svg
var inspiration_heading_default = "/build/_assets/inspiration-heading-BFHYA6PT.svg";

// app/ui/components/Inspiration/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Inspiration({ albums }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    as: "section",
    id: "inspiration",
    height: { xs: 708, xl: 800 },
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
              lineNumber: 13,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/Inspiration/index.tsx",
            lineNumber: 12,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Flex, {
            position: "relative",
            children: albums.map((data) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Album, {
              ...data
            }, data.id, false, {
              fileName: "app/ui/components/Inspiration/index.tsx",
              lineNumber: 23,
              columnNumber: 15
            }, this))
          }, void 0, false, {
            fileName: "app/ui/components/Inspiration/index.tsx",
            lineNumber: 21,
            columnNumber: 11
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/ui/components/Inspiration/index.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/ui/components/Inspiration/index.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Inspiration/index.tsx",
    lineNumber: 9,
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

// app/ui/components/Layout/index.tsx
var import_react6 = __toESM(require_react());

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

// app/assets/img/spotify.svg
var spotify_default = "/build/_assets/spotify-FXIG6M67.svg";

// app/ui/components/Layout/Footer.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var year = new Date().getFullYear();
function footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    as: "footer",
    paddingY: 28,
    paddingBottom: { sm: 20 },
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
              lineNumber: 17,
              columnNumber: 13
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
              children: "Designed & coded with \u{1F525} by Elena Bravo while listening to"
            }, void 0, false, {
              fileName: "app/ui/components/Layout/Footer.tsx",
              lineNumber: 18,
              columnNumber: 13
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
                lineNumber: 20,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/ui/components/Layout/Footer.tsx",
              lineNumber: 19,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/ui/components/Layout/Footer.tsx",
          lineNumber: 16,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/ui/components/Layout/Footer.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/ui/components/Layout/Footer.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Layout/Footer.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/assets/img/grungepattern.png
var grungepattern_default = "/build/_assets/grungepattern-OHO2S5ME.png";

// app/ui/components/Layout/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Layout = ({ children }) => {
  const mainContainer = (0, import_react6.useRef)(null);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
    bgColor: "turquoise-200",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Header, {}, void 0, false, {
        fileName: "app/ui/components/Layout/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Menu, {}, void 0, false, {
        fileName: "app/ui/components/Layout/index.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
        width: { lg: "100vw" },
        minHeight: { lg: "screen" },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
          ref: mainContainer,
          as: "main",
          width: "100%",
          height: "100%",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
            width: "100%",
            height: "100%",
            background: `transparent url("${grungepattern_default}")`,
            children
          }, void 0, false, {
            fileName: "app/ui/components/Layout/index.tsx",
            lineNumber: 29,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/Layout/index.tsx",
          lineNumber: 28,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/ui/components/Layout/index.tsx",
        lineNumber: 27,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(footer, {}, void 0, false, {
        fileName: "app/ui/components/Layout/index.tsx",
        lineNumber: 34,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/components/Layout/index.tsx",
    lineNumber: 24,
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
              lineHeight: { xs: "tight", sm: "none" },
              fontSize: { xs: "2xl", sm: "3xl", md: "4xl" },
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
              lineNumber: 33,
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
var Home = ({ albums }) => {
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
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Inspiration, {
        albums
      }, void 0, false, {
        fileName: "app/ui/screens/Home.tsx",
        lineNumber: 10,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Contact, {}, void 0, false, {
        fileName: "app/ui/screens/Home.tsx",
        lineNumber: 11,
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
  (0, import_react7.useEffect)(() => {
    console.log("ready!!");
  }, []);
  const albums = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Home, {
    albums
  }, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 21,
    columnNumber: 10
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-Z5OCVHYW.js.map
