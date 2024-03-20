var __defProp = Object.defineProperty;
var __require = /* @__PURE__ */ ((x) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(x, {
  get: (a, b) => (typeof require < "u" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require < "u")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __export = (target2, all) => {
  for (var name in all)
    __defProp(target2, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => entry_server_default
});
import { RemixServer } from "@remix-run/react";
import { renderToString } from "react-dom/server";

// app/stitches.config.ts
import { createStitches } from "@stitches/react";
var { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
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
      // 12px
      sm: "0.875rem",
      // 14px
      base: "1rem",
      // 16px
      lg: "1.125rem",
      // 18px
      xl: "1.5rem",
      // 24px
      "2xl": "2.25rem",
      // 36px
      "3xl": "3rem",
      // 48px
      "4xl": "3.875rem",
      // 62px
      "5xl": "5rem"
      // 80px
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

// app/entry.server.tsx
import { jsxDEV } from "react/jsx-dev-runtime";
var handleRequest = (request, responseStatusCode, responseHeaders, remixContext) => {
  let markup = renderToString(/* @__PURE__ */ jsxDEV(RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
    fileName: "app/entry.server.tsx",
    lineNumber: 12,
    columnNumber: 33
  }, this)).replace(
    /<\/head>/,
    `<style id="stitches">${getCssText()}</style></head>`
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}, entry_server_default = handleRequest;

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => root_default,
  links: () => links2,
  meta: () => meta2
});
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

// app/utils/root/meta.ts
var meta = {
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  "msapplication-TileColor": "#ffffff",
  "theme-color": "#0098a8",
  title: "Noah Bravo | Front-end Developer",
  description: "Hi, I'm Noah Bravo, a multidisciplinary front-end developer and web designer based in Madrid, Spain"
};

// app/styles/animations.css
var animations_default = "/build/_assets/animations-B65H4CKE.css";

// app/utils/root/links.ts
var links = [
  {
    rel: "icon",
    href: "/favicon/favicon.ico"
  },
  {
    rel: "apple-touch-icon",
    href: "/favicon/apple-touch-icon.png",
    sizes: "180x180",
    type: "image/png"
  },
  {
    rel: "icon",
    href: "/favicon/favicon-32x32.png",
    sizes: "32x32",
    type: "image/png"
  },
  {
    rel: "icon",
    href: "/favicon/favicon-16x16.png",
    sizes: "16x16",
    type: "image/png"
  },
  {
    rel: "manifest",
    href: "/favicon/site.webmanifest",
    type: "webmanifest"
  },
  {
    rel: "mask-icon",
    href: "/favicon/safari-pinned-tab.svg",
    color: "#0098a8",
    type: "image/svg"
  },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com"
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600;700&amp;display=swap"
  },
  {
    rel: "stylesheet",
    href: animations_default
  },
  {
    rel: "preload",
    href: "/fonts/east_border.ttf",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous"
  }
];

// app/styles/breakpoints.ts
var { media } = config, breakpoints = { xs: "", ...media };

// app/styles/helpers.ts
function getStylePropsFromToken(token) {
  return Object.keys(token).reduce((acc, key) => {
    let tokenKey = key;
    return acc[tokenKey] = `$${key}`, acc;
  }, {});
}
function toRem(px, rootFontSize = 16) {
  return `${px / rootFontSize}rem`;
}

// app/styles/common.ts
var {
  theme: { colors }
} = config, bgColor = getStylePropsFromToken(colors), display = {
  block: "block",
  "inline-block": "inline-block",
  inline: "inline",
  flex: "flex",
  "inline-flex": "inline-flex",
  grid: "grid",
  "inline-grid": "inline-grid",
  hidden: "none"
}, position = {
  static: "static",
  fixed: "fixed",
  absolute: "absolute",
  relative: "relative",
  sticky: "sticky"
}, positionOptions = {
  top: "",
  right: "",
  left: "",
  bottom: ""
}, zIndex = {
  z0: "0",
  z10: "10",
  z20: "20",
  z30: "30",
  z40: "40",
  z50: "50",
  z60: "60",
  zAuto: "auto"
}, maxWidth = {
  0: "0rem",
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
}, minHeight = {
  0: "0",
  none: "none",
  full: "100%",
  screen: "100vh",
  hMin: "min-content",
  hMax: "max-content",
  hFit: "fit-content"
}, opacity = {
  0: "0",
  5: "0.05",
  10: "0.1",
  20: "0.2",
  25: "0.25",
  30: "0.3",
  40: "0.4",
  50: "0.5",
  60: "0.6",
  70: "0.7",
  75: "0.75",
  80: "0.8",
  90: "0.9",
  95: "0.95",
  100: "1"
}, pointerEvents = {
  auto: "auto",
  none: "none"
}, textAlign = {
  left: "left",
  center: "center",
  right: "right",
  justify: "justify",
  start: "start",
  end: "end"
}, overflow = {
  auto: "auto",
  hidden: "hidden",
  clip: "clip",
  visible: "visible",
  scroll: "scroll"
}, overflowX = overflow, overflowY = overflow, visibility = {
  visible: "visible",
  invisible: "hidden",
  collapse: "collapse"
}, gridRow = {
  auto: "auto",
  full: "1 / -1",
  unset: "unset",
  1: "span 1 / span 1",
  2: "span 2 / span 2",
  3: "span 3 / span 3",
  4: "span 4 / span 4",
  5: "span 5 / span 5",
  6: "span 6 / span 6"
}, gridColumn = {
  ...gridRow,
  7: "span 7 / span 7",
  8: "span 8 / span 8",
  9: "span 9 / span 9",
  10: "span 10 / span 10",
  11: "span 11 / span 11",
  12: "span 12 / span 12"
}, gridRowEnd = {
  auto: "auto",
  unset: "unset",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7"
}, gridColumnEnd = {
  ...gridRowEnd,
  8: "8",
  9: "9",
  10: "10",
  11: "11",
  12: "12",
  13: "13"
}, justifySelf = {
  auto: "auto",
  start: "start",
  end: "end",
  center: "center",
  stretch: "stretch"
}, alignSelf = {
  auto: "auto",
  start: "flex-start",
  end: "flex-end",
  center: "center",
  stretch: "stretch",
  baseline: "baseline"
}, grid = {
  gridColumn,
  gridColumnEnd,
  gridColumnStart: gridColumnEnd,
  gridRow,
  gridRowEnd,
  gridRowStart: gridRowEnd,
  justifySelf,
  alignSelf
}, flexGrow = {
  0: "0",
  1: "1"
}, flex = {
  flexBasis: "",
  flexGrow,
  flexShrink: flexGrow
}, size = {
  width: "",
  height: "",
  size: "",
  maxHeight: ""
}, padding = {
  padding: "",
  paddingTop: "",
  paddingRight: "",
  paddingBottom: "",
  paddingLeft: "",
  paddingX: "",
  paddingY: ""
}, margin = {
  margin: "",
  marginTop: "",
  marginRight: "",
  marginBottom: "",
  marginLeft: "",
  marginX: "",
  marginY: ""
}, commonStyleProps = {
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

// app/styles/fonts.ts
var fonts_default = {
  fontFamily: "East Border",
  src: 'url("/fonts/east_border.ttf") format("truetype")',
  fontWeight: "400",
  fontStyle: "normal",
  fontDisplay: "swap"
};

// app/styles/global.ts
var boxSizing = { boxSizing: "border-box" }, height = { height: "100%" }, mediaStyles = { display: "block", maxWidth: "100%" }, overflowWrap = { overflowWrap: "break-word" }, globalStyles = globalCss({
  "@font-face": fonts_default,
  "*": { ...boxSizing, margin: 0 },
  "*:after": boxSizing,
  "*:before": boxSizing,
  html: height,
  img: mediaStyles,
  picture: mediaStyles,
  video: mediaStyles,
  canvas: mediaStyles,
  svg: mediaStyles,
  button: { font: "inherit" },
  p: overflowWrap,
  h1: { ...overflowWrap, margin: 0 },
  h2: overflowWrap,
  h3: overflowWrap,
  h4: overflowWrap,
  "#root": { isolation: "isolate" },
  body: {
    ...height,
    lineHeight: 1.5,
    backgroundColor: "$black",
    color: "$white",
    fontFamily: "$primary",
    overflowX: "hidden",
    overflowY: "hidden"
  }
});

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var meta2 = () => meta, links2 = () => links, App = () => (globalStyles(), /* @__PURE__ */ jsxDEV2("html", { lang: "en", suppressHydrationWarning: !0, children: [
  /* @__PURE__ */ jsxDEV2("head", { children: [
    /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 21,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV2("body", { children: [
    !1,
    /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 38,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 40,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/root.tsx",
  lineNumber: 18,
  columnNumber: 5
}, this)), root_default = App;

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  loader: () => loader
});
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// app/data/artists.json
var artists_default = {
  artists: [
    {
      external_urls: { spotify: "https://open.spotify.com/artist/6guC9FqvlVboSKTI77NG2k" },
      followers: { href: null, total: 615610 },
      genres: ["metalcore", "pixie", "sacramento indie", "screamo", "swancore"],
      href: "https://api.spotify.com/v1/artists/6guC9FqvlVboSKTI77NG2k",
      id: "6guC9FqvlVboSKTI77NG2k",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb7ab31728854684433fe3dc64",
          width: 640
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab676161000051747ab31728854684433fe3dc64",
          width: 320
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f1787ab31728854684433fe3dc64",
          width: 160
        }
      ],
      name: "Dance Gavin Dance",
      popularity: 64,
      type: "artist",
      uri: "spotify:artist:6guC9FqvlVboSKTI77NG2k"
    },
    {
      external_urls: { spotify: "https://open.spotify.com/artist/6bmGjHSXH8rPaZ2iQhgNQ0" },
      followers: { href: null, total: 9712 },
      genres: ["pop punk", "rva indie"],
      href: "https://api.spotify.com/v1/artists/6bmGjHSXH8rPaZ2iQhgNQ0",
      id: "6bmGjHSXH8rPaZ2iQhgNQ0",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb19f52c69c53bf7df8b0403a4",
          width: 640
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab6761610000517419f52c69c53bf7df8b0403a4",
          width: 320
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f17819f52c69c53bf7df8b0403a4",
          width: 160
        }
      ],
      name: "Telltale",
      popularity: 44,
      type: "artist",
      uri: "spotify:artist:6bmGjHSXH8rPaZ2iQhgNQ0"
    },
    {
      external_urls: { spotify: "https://open.spotify.com/artist/0hAd6zwEgt9ILuMDY1prcI" },
      followers: { href: null, total: 553624 },
      genres: ["modern alternative rock", "modern rock", "rock", "vegas indie"],
      href: "https://api.spotify.com/v1/artists/0hAd6zwEgt9ILuMDY1prcI",
      id: "0hAd6zwEgt9ILuMDY1prcI",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb66418075fca6503e959f160f",
          width: 640
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab6761610000517466418075fca6503e959f160f",
          width: 320
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f17866418075fca6503e959f160f",
          width: 160
        }
      ],
      name: "Palaye Royale",
      popularity: 63,
      type: "artist",
      uri: "spotify:artist:0hAd6zwEgt9ILuMDY1prcI"
    },
    {
      external_urls: { spotify: "https://open.spotify.com/artist/3btzEQD6sugImIHPMRgkwV" },
      followers: { href: null, total: 584271 },
      genres: ["indie rock", "modern alternative rock", "modern rock", "rock"],
      href: "https://api.spotify.com/v1/artists/3btzEQD6sugImIHPMRgkwV",
      id: "3btzEQD6sugImIHPMRgkwV",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb8c758dc10677dcff19a8193a",
          width: 640
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab676161000051748c758dc10677dcff19a8193a",
          width: 320
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f1788c758dc10677dcff19a8193a",
          width: 160
        }
      ],
      name: "Wolf Alice",
      popularity: 61,
      type: "artist",
      uri: "spotify:artist:3btzEQD6sugImIHPMRgkwV"
    },
    {
      external_urls: { spotify: "https://open.spotify.com/artist/4QxIol1JzAa4ePmDytv0e4" },
      followers: { href: null, total: 24928 },
      genres: ["modern alternative rock"],
      href: "https://api.spotify.com/v1/artists/4QxIol1JzAa4ePmDytv0e4",
      id: "4QxIol1JzAa4ePmDytv0e4",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb88491b78ce90231cbd5069ef",
          width: 640
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab6761610000517488491b78ce90231cbd5069ef",
          width: 320
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f17888491b78ce90231cbd5069ef",
          width: 160
        }
      ],
      name: "KID BRUNSWICK",
      popularity: 44,
      type: "artist",
      uri: "spotify:artist:4QxIol1JzAa4ePmDytv0e4"
    },
    {
      external_urls: { spotify: "https://open.spotify.com/artist/5FjQVp1Lb0kltmwIuu5kfj" },
      followers: { href: null, total: 150096 },
      genres: ["metalcore"],
      href: "https://api.spotify.com/v1/artists/5FjQVp1Lb0kltmwIuu5kfj",
      id: "5FjQVp1Lb0kltmwIuu5kfj",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb22a2bea5e280b6209916089c",
          width: 640
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab6761610000517422a2bea5e280b6209916089c",
          width: 320
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f17822a2bea5e280b6209916089c",
          width: 160
        }
      ],
      name: "Dayseeker",
      popularity: 61,
      type: "artist",
      uri: "spotify:artist:5FjQVp1Lb0kltmwIuu5kfj"
    },
    {
      external_urls: { spotify: "https://open.spotify.com/artist/4KH4eOg39KeBpnfSgvIteD" },
      followers: { href: null, total: 45663 },
      genres: ["english indie rock", "modern alternative rock", "modern rock", "welsh indie"],
      href: "https://api.spotify.com/v1/artists/4KH4eOg39KeBpnfSgvIteD",
      id: "4KH4eOg39KeBpnfSgvIteD",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb94cde60dddd5cebb0442a919",
          width: 640
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab6761610000517494cde60dddd5cebb0442a919",
          width: 320
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f17894cde60dddd5cebb0442a919",
          width: 160
        }
      ],
      name: "Pretty Vicious",
      popularity: 43,
      type: "artist",
      uri: "spotify:artist:4KH4eOg39KeBpnfSgvIteD"
    },
    {
      external_urls: { spotify: "https://open.spotify.com/artist/0cESlyDxeKCUzc3gm1owur" },
      followers: { href: null, total: 30240 },
      genres: ["progressive post-hardcore", "russian metalcore"],
      href: "https://api.spotify.com/v1/artists/0cESlyDxeKCUzc3gm1owur",
      id: "0cESlyDxeKCUzc3gm1owur",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5ebfe12980643d2ecfb4580f8dd",
          width: 640
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab67616100005174fe12980643d2ecfb4580f8dd",
          width: 320
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f178fe12980643d2ecfb4580f8dd",
          width: 160
        }
      ],
      name: "Shrezzers",
      popularity: 39,
      type: "artist",
      uri: "spotify:artist:0cESlyDxeKCUzc3gm1owur"
    },
    {
      external_urls: { spotify: "https://open.spotify.com/artist/1P1y4wp6V0CwjhGcXPKgAu" },
      followers: { href: null, total: 46020 },
      genres: ["anthem emo", "aussie emo", "pop punk"],
      href: "https://api.spotify.com/v1/artists/1P1y4wp6V0CwjhGcXPKgAu",
      id: "1P1y4wp6V0CwjhGcXPKgAu",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb6d2229439469ff1ec541a075",
          width: 640
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab676161000051746d2229439469ff1ec541a075",
          width: 320
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f1786d2229439469ff1ec541a075",
          width: 160
        }
      ],
      name: "Between You & Me",
      popularity: 44,
      type: "artist",
      uri: "spotify:artist:1P1y4wp6V0CwjhGcXPKgAu"
    },
    {
      external_urls: { spotify: "https://open.spotify.com/artist/6oFs3qk4VepIVFdoD4jmsy" },
      followers: { href: null, total: 613946 },
      genres: ["modern rock", "pixie", "pop", "pop emo", "pop punk"],
      href: "https://api.spotify.com/v1/artists/6oFs3qk4VepIVFdoD4jmsy",
      id: "6oFs3qk4VepIVFdoD4jmsy",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb17bc62067f0a92bfb0ceadf7",
          width: 640
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab6761610000517417bc62067f0a92bfb0ceadf7",
          width: 320
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f17817bc62067f0a92bfb0ceadf7",
          width: 160
        }
      ],
      name: "PVRIS",
      popularity: 62,
      type: "artist",
      uri: "spotify:artist:6oFs3qk4VepIVFdoD4jmsy"
    },
    {
      external_urls: { spotify: "https://open.spotify.com/artist/1W2Fv4YUnjC8hx2qQd6fGh" },
      followers: { href: null, total: 158416 },
      genres: ["anthem emo", "pixie", "pop punk"],
      href: "https://api.spotify.com/v1/artists/1W2Fv4YUnjC8hx2qQd6fGh",
      id: "1W2Fv4YUnjC8hx2qQd6fGh",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb00aa71ba33060789c5483225",
          width: 640
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab6761610000517400aa71ba33060789c5483225",
          width: 320
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f17800aa71ba33060789c5483225",
          width: 160
        }
      ],
      name: "Stand Atlantic",
      popularity: 54,
      type: "artist",
      uri: "spotify:artist:1W2Fv4YUnjC8hx2qQd6fGh"
    },
    {
      external_urls: { spotify: "https://open.spotify.com/artist/3KEhhixoMshqSEJ71rS7w1" },
      followers: { href: null, total: 96623 },
      genres: ["british alternative rock", "modern alternative rock", "modern rock", "pixie"],
      href: "https://api.spotify.com/v1/artists/3KEhhixoMshqSEJ71rS7w1",
      id: "3KEhhixoMshqSEJ71rS7w1",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb0f8976b99292fe454bff2fc8",
          width: 640
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab676161000051740f8976b99292fe454bff2fc8",
          width: 320
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f1780f8976b99292fe454bff2fc8",
          width: 160
        }
      ],
      name: "Marmozets",
      popularity: 37,
      type: "artist",
      uri: "spotify:artist:3KEhhixoMshqSEJ71rS7w1"
    },
    {
      external_urls: { spotify: "https://open.spotify.com/artist/4YW1GDcW9hobRPMDi8v6XH" },
      followers: { href: null, total: 38665 },
      genres: ["progressive post-hardcore", "swancore"],
      href: "https://api.spotify.com/v1/artists/4YW1GDcW9hobRPMDi8v6XH",
      id: "4YW1GDcW9hobRPMDi8v6XH",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb22ada252809f01726281d70d",
          width: 640
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab6761610000517422ada252809f01726281d70d",
          width: 320
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f17822ada252809f01726281d70d",
          width: 160
        }
      ],
      name: "Makari",
      popularity: 40,
      type: "artist",
      uri: "spotify:artist:4YW1GDcW9hobRPMDi8v6XH"
    },
    {
      external_urls: { spotify: "https://open.spotify.com/artist/1aK2PiGHyEgc4wAIKQzMj2" },
      followers: { href: null, total: 81919 },
      genres: ["bay area indie", "progressive post-hardcore"],
      href: "https://api.spotify.com/v1/artists/1aK2PiGHyEgc4wAIKQzMj2",
      id: "1aK2PiGHyEgc4wAIKQzMj2",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb7b60fdd0508b9a770e70d986",
          width: 640
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab676161000051747b60fdd0508b9a770e70d986",
          width: 320
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f1787b60fdd0508b9a770e70d986",
          width: 160
        }
      ],
      name: "I The Mighty",
      popularity: 43,
      type: "artist",
      uri: "spotify:artist:1aK2PiGHyEgc4wAIKQzMj2"
    },
    {
      external_urls: { spotify: "https://open.spotify.com/artist/6Ad91Jof8Niiw0lGLLi3NW" },
      followers: { href: null, total: 2011576 },
      genres: ["british indie rock", "modern rock", "rock"],
      href: "https://api.spotify.com/v1/artists/6Ad91Jof8Niiw0lGLLi3NW",
      id: "6Ad91Jof8Niiw0lGLLi3NW",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5eb62dc5af39a942ba6edc0179a",
          width: 640
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab6761610000517462dc5af39a942ba6edc0179a",
          width: 320
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f17862dc5af39a942ba6edc0179a",
          width: 160
        }
      ],
      name: "YUNGBLUD",
      popularity: 71,
      type: "artist",
      uri: "spotify:artist:6Ad91Jof8Niiw0lGLLi3NW"
    },
    {
      external_urls: { spotify: "https://open.spotify.com/artist/0hp58JplihFjlLstUbKS0x" },
      followers: { href: null, total: 47647 },
      genres: ["pop punk"],
      href: "https://api.spotify.com/v1/artists/0hp58JplihFjlLstUbKS0x",
      id: "0hp58JplihFjlLstUbKS0x",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5ebccc02c3e2aa2a4b947adf45f",
          width: 640
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab67616100005174ccc02c3e2aa2a4b947adf45f",
          width: 320
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f178ccc02c3e2aa2a4b947adf45f",
          width: 160
        }
      ],
      name: "The Home Team",
      popularity: 50,
      type: "artist",
      uri: "spotify:artist:0hp58JplihFjlLstUbKS0x"
    },
    {
      external_urls: { spotify: "https://open.spotify.com/artist/0XGJ3GUPwslwFJ66yNbHeh" },
      followers: { href: null, total: 94437 },
      genres: ["alternative emo", "anthem emo", "pop punk", "uk pop punk"],
      href: "https://api.spotify.com/v1/artists/0XGJ3GUPwslwFJ66yNbHeh",
      id: "0XGJ3GUPwslwFJ66yNbHeh",
      images: [
        {
          height: 640,
          url: "https://i.scdn.co/image/ab6761610000e5ebb9fca0570e38d261de5633ca",
          width: 640
        },
        {
          height: 320,
          url: "https://i.scdn.co/image/ab67616100005174b9fca0570e38d261de5633ca",
          width: 320
        },
        {
          height: 160,
          url: "https://i.scdn.co/image/ab6761610000f178b9fca0570e38d261de5633ca",
          width: 160
        }
      ],
      name: "Trash Boat",
      popularity: 43,
      type: "artist",
      uri: "spotify:artist:0XGJ3GUPwslwFJ66yNbHeh"
    }
  ]
};

// app/data/tracks.json
var tracks_default = {
  tracks: [
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/6guC9FqvlVboSKTI77NG2k"
            },
            href: "https://api.spotify.com/v1/artists/6guC9FqvlVboSKTI77NG2k",
            id: "6guC9FqvlVboSKTI77NG2k",
            name: "Dance Gavin Dance",
            type: "artist",
            uri: "spotify:artist:6guC9FqvlVboSKTI77NG2k"
          }
        ],
        available_markets: [
          "AD",
          "AE",
          "AG",
          "AL",
          "AM",
          "AO",
          "AR",
          "AT",
          "AU",
          "AZ",
          "BA",
          "BB",
          "BD",
          "BE",
          "BF",
          "BG",
          "BH",
          "BI",
          "BJ",
          "BN",
          "BO",
          "BR",
          "BS",
          "BT",
          "BW",
          "BY",
          "BZ",
          "CA",
          "CD",
          "CG",
          "CH",
          "CI",
          "CL",
          "CM",
          "CO",
          "CR",
          "CV",
          "CW",
          "CY",
          "CZ",
          "DE",
          "DJ",
          "DK",
          "DM",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FJ",
          "FM",
          "FR",
          "GA",
          "GB",
          "GD",
          "GE",
          "GH",
          "GM",
          "GN",
          "GQ",
          "GR",
          "GT",
          "GW",
          "GY",
          "HK",
          "HN",
          "HR",
          "HT",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IQ",
          "IS",
          "IT",
          "JM",
          "JO",
          "JP",
          "KE",
          "KG",
          "KH",
          "KI",
          "KM",
          "KN",
          "KR",
          "KW",
          "KZ",
          "LA",
          "LB",
          "LC",
          "LI",
          "LK",
          "LR",
          "LS",
          "LT",
          "LU",
          "LV",
          "LY",
          "MA",
          "MC",
          "MD",
          "ME",
          "MG",
          "MH",
          "MK",
          "ML",
          "MN",
          "MO",
          "MR",
          "MT",
          "MU",
          "MV",
          "MW",
          "MX",
          "MY",
          "MZ",
          "NA",
          "NE",
          "NG",
          "NI",
          "NL",
          "NO",
          "NP",
          "NR",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PG",
          "PH",
          "PK",
          "PL",
          "PS",
          "PT",
          "PW",
          "PY",
          "QA",
          "RO",
          "RS",
          "RW",
          "SA",
          "SB",
          "SC",
          "SE",
          "SG",
          "SI",
          "SK",
          "SL",
          "SM",
          "SN",
          "SR",
          "ST",
          "SV",
          "SZ",
          "TD",
          "TG",
          "TH",
          "TJ",
          "TL",
          "TN",
          "TO",
          "TR",
          "TT",
          "TV",
          "TW",
          "TZ",
          "UA",
          "UG",
          "US",
          "UY",
          "UZ",
          "VC",
          "VE",
          "VN",
          "VU",
          "WS",
          "XK",
          "ZA",
          "ZM",
          "ZW"
        ],
        external_urls: { spotify: "https://open.spotify.com/album/7MfryRchXoNRwG5YbbDL1S" },
        href: "https://api.spotify.com/v1/albums/7MfryRchXoNRwG5YbbDL1S",
        id: "7MfryRchXoNRwG5YbbDL1S",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b27302d0198148ba9d52522456ab",
            width: 640
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e0202d0198148ba9d52522456ab",
            width: 300
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d0000485102d0198148ba9d52522456ab",
            width: 64
          }
        ],
        name: "Afterburner",
        release_date: "2020-04-24",
        release_date_precision: "day",
        total_tracks: 13,
        type: "album",
        uri: "spotify:album:7MfryRchXoNRwG5YbbDL1S"
      },
      artists: [
        {
          external_urls: { spotify: "https://open.spotify.com/artist/6guC9FqvlVboSKTI77NG2k" },
          href: "https://api.spotify.com/v1/artists/6guC9FqvlVboSKTI77NG2k",
          id: "6guC9FqvlVboSKTI77NG2k",
          name: "Dance Gavin Dance",
          type: "artist",
          uri: "spotify:artist:6guC9FqvlVboSKTI77NG2k"
        },
        {
          external_urls: { spotify: "https://open.spotify.com/artist/4PGJvUgudAsX2hwioiyX4O" },
          href: "https://api.spotify.com/v1/artists/4PGJvUgudAsX2hwioiyX4O",
          id: "4PGJvUgudAsX2hwioiyX4O",
          name: "Andrew Wells",
          type: "artist",
          uri: "spotify:artist:4PGJvUgudAsX2hwioiyX4O"
        }
      ],
      available_markets: [
        "AD",
        "AE",
        "AG",
        "AL",
        "AM",
        "AO",
        "AR",
        "AT",
        "AU",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BN",
        "BO",
        "BR",
        "BS",
        "BT",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CD",
        "CG",
        "CH",
        "CI",
        "CL",
        "CM",
        "CO",
        "CR",
        "CV",
        "CW",
        "CY",
        "CZ",
        "DE",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FJ",
        "FM",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GR",
        "GT",
        "GW",
        "GY",
        "HK",
        "HN",
        "HR",
        "HT",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IQ",
        "IS",
        "IT",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KR",
        "KW",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MG",
        "MH",
        "MK",
        "ML",
        "MN",
        "MO",
        "MR",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NE",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PG",
        "PH",
        "PK",
        "PL",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RO",
        "RS",
        "RW",
        "SA",
        "SB",
        "SC",
        "SE",
        "SG",
        "SI",
        "SK",
        "SL",
        "SM",
        "SN",
        "SR",
        "ST",
        "SV",
        "SZ",
        "TD",
        "TG",
        "TH",
        "TJ",
        "TL",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "US",
        "UY",
        "UZ",
        "VC",
        "VE",
        "VN",
        "VU",
        "WS",
        "XK",
        "ZA",
        "ZM",
        "ZW"
      ],
      disc_number: 1,
      duration_ms: 241313,
      explicit: !0,
      external_ids: { isrc: "QMRSZ2000091" },
      external_urls: { spotify: "https://open.spotify.com/track/4PSMNdBxCQ02el8dYzjd7C" },
      href: "https://api.spotify.com/v1/tracks/4PSMNdBxCQ02el8dYzjd7C",
      id: "4PSMNdBxCQ02el8dYzjd7C",
      is_local: !1,
      name: "Nothing Shameful (feat. Andrew Wells)",
      popularity: 47,
      preview_url: "https://p.scdn.co/mp3-preview/5e629670608d414d49c110dd9e35162982771189?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 12,
      type: "track",
      uri: "spotify:track:4PSMNdBxCQ02el8dYzjd7C"
    },
    {
      album: {
        album_type: "single",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/6bmGjHSXH8rPaZ2iQhgNQ0"
            },
            href: "https://api.spotify.com/v1/artists/6bmGjHSXH8rPaZ2iQhgNQ0",
            id: "6bmGjHSXH8rPaZ2iQhgNQ0",
            name: "Telltale",
            type: "artist",
            uri: "spotify:artist:6bmGjHSXH8rPaZ2iQhgNQ0"
          }
        ],
        available_markets: [
          "AD",
          "AE",
          "AG",
          "AL",
          "AM",
          "AO",
          "AR",
          "AT",
          "AU",
          "AZ",
          "BA",
          "BB",
          "BD",
          "BE",
          "BF",
          "BG",
          "BH",
          "BI",
          "BJ",
          "BN",
          "BO",
          "BR",
          "BS",
          "BT",
          "BW",
          "BY",
          "BZ",
          "CA",
          "CD",
          "CG",
          "CH",
          "CI",
          "CL",
          "CM",
          "CO",
          "CR",
          "CV",
          "CW",
          "CY",
          "CZ",
          "DE",
          "DJ",
          "DK",
          "DM",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FJ",
          "FM",
          "FR",
          "GA",
          "GB",
          "GD",
          "GE",
          "GH",
          "GM",
          "GN",
          "GQ",
          "GR",
          "GT",
          "GW",
          "GY",
          "HK",
          "HN",
          "HR",
          "HT",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IQ",
          "IS",
          "IT",
          "JM",
          "JO",
          "JP",
          "KE",
          "KG",
          "KH",
          "KI",
          "KM",
          "KN",
          "KR",
          "KW",
          "KZ",
          "LA",
          "LB",
          "LC",
          "LI",
          "LK",
          "LR",
          "LS",
          "LT",
          "LU",
          "LV",
          "LY",
          "MA",
          "MC",
          "MD",
          "ME",
          "MG",
          "MH",
          "MK",
          "ML",
          "MN",
          "MO",
          "MR",
          "MT",
          "MU",
          "MV",
          "MW",
          "MX",
          "MY",
          "MZ",
          "NA",
          "NE",
          "NG",
          "NI",
          "NL",
          "NO",
          "NP",
          "NR",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PG",
          "PH",
          "PK",
          "PL",
          "PS",
          "PT",
          "PW",
          "PY",
          "QA",
          "RO",
          "RS",
          "RW",
          "SA",
          "SB",
          "SC",
          "SE",
          "SG",
          "SI",
          "SK",
          "SL",
          "SM",
          "SN",
          "SR",
          "ST",
          "SV",
          "SZ",
          "TD",
          "TG",
          "TH",
          "TJ",
          "TL",
          "TN",
          "TO",
          "TR",
          "TT",
          "TV",
          "TW",
          "TZ",
          "UA",
          "UG",
          "US",
          "UY",
          "UZ",
          "VC",
          "VE",
          "VN",
          "VU",
          "WS",
          "XK",
          "ZA",
          "ZM",
          "ZW"
        ],
        external_urls: { spotify: "https://open.spotify.com/album/1FMBcJsS5TdgCTfQtVdoZt" },
        href: "https://api.spotify.com/v1/albums/1FMBcJsS5TdgCTfQtVdoZt",
        id: "1FMBcJsS5TdgCTfQtVdoZt",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273a5c59702f344003c00d6c9c1",
            width: 640
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e02a5c59702f344003c00d6c9c1",
            width: 300
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d00004851a5c59702f344003c00d6c9c1",
            width: 64
          }
        ],
        name: "Slowburn",
        release_date: "2021-09-15",
        release_date_precision: "day",
        total_tracks: 1,
        type: "album",
        uri: "spotify:album:1FMBcJsS5TdgCTfQtVdoZt"
      },
      artists: [
        {
          external_urls: { spotify: "https://open.spotify.com/artist/6bmGjHSXH8rPaZ2iQhgNQ0" },
          href: "https://api.spotify.com/v1/artists/6bmGjHSXH8rPaZ2iQhgNQ0",
          id: "6bmGjHSXH8rPaZ2iQhgNQ0",
          name: "Telltale",
          type: "artist",
          uri: "spotify:artist:6bmGjHSXH8rPaZ2iQhgNQ0"
        }
      ],
      available_markets: [
        "AD",
        "AE",
        "AG",
        "AL",
        "AM",
        "AO",
        "AR",
        "AT",
        "AU",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BN",
        "BO",
        "BR",
        "BS",
        "BT",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CD",
        "CG",
        "CH",
        "CI",
        "CL",
        "CM",
        "CO",
        "CR",
        "CV",
        "CW",
        "CY",
        "CZ",
        "DE",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FJ",
        "FM",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GR",
        "GT",
        "GW",
        "GY",
        "HK",
        "HN",
        "HR",
        "HT",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IQ",
        "IS",
        "IT",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KR",
        "KW",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MG",
        "MH",
        "MK",
        "ML",
        "MN",
        "MO",
        "MR",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NE",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PG",
        "PH",
        "PK",
        "PL",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RO",
        "RS",
        "RW",
        "SA",
        "SB",
        "SC",
        "SE",
        "SG",
        "SI",
        "SK",
        "SL",
        "SM",
        "SN",
        "SR",
        "ST",
        "SV",
        "SZ",
        "TD",
        "TG",
        "TH",
        "TJ",
        "TL",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "US",
        "UY",
        "UZ",
        "VC",
        "VE",
        "VN",
        "VU",
        "WS",
        "XK",
        "ZA",
        "ZM",
        "ZW"
      ],
      disc_number: 1,
      duration_ms: 184647,
      explicit: !1,
      external_ids: { isrc: "ITH712100133" },
      external_urls: { spotify: "https://open.spotify.com/track/7L7pTbNQhbr5tB9XV4Ddb4" },
      href: "https://api.spotify.com/v1/tracks/7L7pTbNQhbr5tB9XV4Ddb4",
      id: "7L7pTbNQhbr5tB9XV4Ddb4",
      is_local: !1,
      name: "Slowburn",
      popularity: 20,
      preview_url: "https://p.scdn.co/mp3-preview/0835d24d7002c259d97def285e38081180c6837c?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 1,
      type: "track",
      uri: "spotify:track:7L7pTbNQhbr5tB9XV4Ddb4"
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0hAd6zwEgt9ILuMDY1prcI"
            },
            href: "https://api.spotify.com/v1/artists/0hAd6zwEgt9ILuMDY1prcI",
            id: "0hAd6zwEgt9ILuMDY1prcI",
            name: "Palaye Royale",
            type: "artist",
            uri: "spotify:artist:0hAd6zwEgt9ILuMDY1prcI"
          }
        ],
        available_markets: [],
        external_urls: { spotify: "https://open.spotify.com/album/5274bCsoBGBuqed5yKLi9D" },
        href: "https://api.spotify.com/v1/albums/5274bCsoBGBuqed5yKLi9D",
        id: "5274bCsoBGBuqed5yKLi9D",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273187b7d39f8826be9839ee939",
            width: 640
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e02187b7d39f8826be9839ee939",
            width: 300
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d00004851187b7d39f8826be9839ee939",
            width: 64
          }
        ],
        name: "The Bastards",
        release_date: "2020-05-29",
        release_date_precision: "day",
        total_tracks: 15,
        type: "album",
        uri: "spotify:album:5274bCsoBGBuqed5yKLi9D"
      },
      artists: [
        {
          external_urls: { spotify: "https://open.spotify.com/artist/0hAd6zwEgt9ILuMDY1prcI" },
          href: "https://api.spotify.com/v1/artists/0hAd6zwEgt9ILuMDY1prcI",
          id: "0hAd6zwEgt9ILuMDY1prcI",
          name: "Palaye Royale",
          type: "artist",
          uri: "spotify:artist:0hAd6zwEgt9ILuMDY1prcI"
        }
      ],
      available_markets: [],
      disc_number: 1,
      duration_ms: 156623,
      explicit: !1,
      external_ids: { isrc: "USYFZ1925201" },
      external_urls: { spotify: "https://open.spotify.com/track/6q6QN3nlvK2OTaHITi4dq2" },
      href: "https://api.spotify.com/v1/tracks/6q6QN3nlvK2OTaHITi4dq2",
      id: "6q6QN3nlvK2OTaHITi4dq2",
      is_local: !1,
      name: "Hang on to Yourself",
      popularity: 43,
      preview_url: null,
      track_number: 6,
      type: "track",
      uri: "spotify:track:6q6QN3nlvK2OTaHITi4dq2"
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3btzEQD6sugImIHPMRgkwV"
            },
            href: "https://api.spotify.com/v1/artists/3btzEQD6sugImIHPMRgkwV",
            id: "3btzEQD6sugImIHPMRgkwV",
            name: "Wolf Alice",
            type: "artist",
            uri: "spotify:artist:3btzEQD6sugImIHPMRgkwV"
          }
        ],
        available_markets: [
          "AD",
          "AE",
          "AG",
          "AL",
          "AM",
          "AO",
          "AR",
          "AT",
          "AZ",
          "BA",
          "BB",
          "BD",
          "BE",
          "BF",
          "BG",
          "BH",
          "BI",
          "BJ",
          "BN",
          "BO",
          "BR",
          "BS",
          "BT",
          "BW",
          "BY",
          "BZ",
          "CD",
          "CG",
          "CH",
          "CI",
          "CL",
          "CM",
          "CO",
          "CR",
          "CV",
          "CW",
          "CY",
          "CZ",
          "DE",
          "DJ",
          "DK",
          "DM",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FJ",
          "FM",
          "FR",
          "GA",
          "GB",
          "GD",
          "GE",
          "GH",
          "GM",
          "GN",
          "GQ",
          "GR",
          "GT",
          "GW",
          "GY",
          "HK",
          "HN",
          "HR",
          "HT",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IQ",
          "IS",
          "IT",
          "JM",
          "JO",
          "JP",
          "KE",
          "KG",
          "KH",
          "KI",
          "KM",
          "KN",
          "KR",
          "KW",
          "KZ",
          "LA",
          "LB",
          "LC",
          "LI",
          "LK",
          "LR",
          "LS",
          "LT",
          "LU",
          "LV",
          "LY",
          "MA",
          "MC",
          "MD",
          "ME",
          "MG",
          "MH",
          "MK",
          "ML",
          "MN",
          "MO",
          "MR",
          "MT",
          "MU",
          "MV",
          "MW",
          "MX",
          "MY",
          "MZ",
          "NA",
          "NE",
          "NG",
          "NI",
          "NL",
          "NO",
          "NP",
          "NR",
          "OM",
          "PA",
          "PE",
          "PG",
          "PH",
          "PK",
          "PL",
          "PS",
          "PT",
          "PW",
          "PY",
          "QA",
          "RO",
          "RS",
          "RW",
          "SA",
          "SB",
          "SC",
          "SE",
          "SG",
          "SI",
          "SK",
          "SL",
          "SM",
          "SN",
          "SR",
          "ST",
          "SV",
          "SZ",
          "TD",
          "TG",
          "TH",
          "TJ",
          "TL",
          "TN",
          "TO",
          "TR",
          "TT",
          "TV",
          "TW",
          "TZ",
          "UA",
          "UG",
          "UY",
          "UZ",
          "VC",
          "VE",
          "VN",
          "VU",
          "WS",
          "XK",
          "ZA",
          "ZM",
          "ZW"
        ],
        external_urls: { spotify: "https://open.spotify.com/album/1zt521PK0lam6J79DNMIJi" },
        href: "https://api.spotify.com/v1/albums/1zt521PK0lam6J79DNMIJi",
        id: "1zt521PK0lam6J79DNMIJi",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273e11f1ac4d5dce1bc5fec6703",
            width: 640
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e02e11f1ac4d5dce1bc5fec6703",
            width: 300
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d00004851e11f1ac4d5dce1bc5fec6703",
            width: 64
          }
        ],
        name: "Blue Weekend",
        release_date: "2021-06-04",
        release_date_precision: "day",
        total_tracks: 11,
        type: "album",
        uri: "spotify:album:1zt521PK0lam6J79DNMIJi"
      },
      artists: [
        {
          external_urls: { spotify: "https://open.spotify.com/artist/3btzEQD6sugImIHPMRgkwV" },
          href: "https://api.spotify.com/v1/artists/3btzEQD6sugImIHPMRgkwV",
          id: "3btzEQD6sugImIHPMRgkwV",
          name: "Wolf Alice",
          type: "artist",
          uri: "spotify:artist:3btzEQD6sugImIHPMRgkwV"
        }
      ],
      available_markets: [
        "AD",
        "AE",
        "AG",
        "AL",
        "AM",
        "AO",
        "AR",
        "AT",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BN",
        "BO",
        "BR",
        "BS",
        "BT",
        "BW",
        "BY",
        "BZ",
        "CD",
        "CG",
        "CH",
        "CI",
        "CL",
        "CM",
        "CO",
        "CR",
        "CV",
        "CW",
        "CY",
        "CZ",
        "DE",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FJ",
        "FM",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GR",
        "GT",
        "GW",
        "GY",
        "HK",
        "HN",
        "HR",
        "HT",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IQ",
        "IS",
        "IT",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KR",
        "KW",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MG",
        "MH",
        "MK",
        "ML",
        "MN",
        "MO",
        "MR",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NE",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "OM",
        "PA",
        "PE",
        "PG",
        "PH",
        "PK",
        "PL",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RO",
        "RS",
        "RW",
        "SA",
        "SB",
        "SC",
        "SE",
        "SG",
        "SI",
        "SK",
        "SL",
        "SM",
        "SN",
        "SR",
        "ST",
        "SV",
        "SZ",
        "TD",
        "TG",
        "TH",
        "TJ",
        "TL",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "UY",
        "UZ",
        "VC",
        "VE",
        "VN",
        "VU",
        "WS",
        "XK",
        "ZA",
        "ZM",
        "ZW"
      ],
      disc_number: 1,
      duration_ms: 196804,
      explicit: !0,
      external_ids: { isrc: "GBK3W2001631" },
      external_urls: { spotify: "https://open.spotify.com/track/0mjOx4zUlL5t4rF1xnrfvi" },
      href: "https://api.spotify.com/v1/tracks/0mjOx4zUlL5t4rF1xnrfvi",
      id: "0mjOx4zUlL5t4rF1xnrfvi",
      is_local: !1,
      name: "Smile",
      popularity: 57,
      preview_url: "https://p.scdn.co/mp3-preview/6cb4e82769f22175bf7e2f9e91f130f4eb4809a5?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 4,
      type: "track",
      uri: "spotify:track:0mjOx4zUlL5t4rF1xnrfvi"
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/4QxIol1JzAa4ePmDytv0e4"
            },
            href: "https://api.spotify.com/v1/artists/4QxIol1JzAa4ePmDytv0e4",
            id: "4QxIol1JzAa4ePmDytv0e4",
            name: "KID BRUNSWICK",
            type: "artist",
            uri: "spotify:artist:4QxIol1JzAa4ePmDytv0e4"
          }
        ],
        available_markets: [
          "AD",
          "AE",
          "AG",
          "AL",
          "AM",
          "AO",
          "AR",
          "AT",
          "AU",
          "AZ",
          "BA",
          "BB",
          "BD",
          "BE",
          "BF",
          "BG",
          "BH",
          "BI",
          "BJ",
          "BN",
          "BO",
          "BR",
          "BS",
          "BT",
          "BW",
          "BY",
          "BZ",
          "CA",
          "CD",
          "CG",
          "CH",
          "CI",
          "CL",
          "CM",
          "CO",
          "CR",
          "CV",
          "CW",
          "CY",
          "CZ",
          "DE",
          "DJ",
          "DK",
          "DM",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FJ",
          "FM",
          "FR",
          "GA",
          "GB",
          "GD",
          "GE",
          "GH",
          "GM",
          "GN",
          "GQ",
          "GR",
          "GT",
          "GW",
          "GY",
          "HK",
          "HN",
          "HR",
          "HT",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IQ",
          "IS",
          "IT",
          "JM",
          "JO",
          "JP",
          "KE",
          "KG",
          "KH",
          "KI",
          "KM",
          "KN",
          "KR",
          "KW",
          "KZ",
          "LA",
          "LB",
          "LC",
          "LI",
          "LK",
          "LR",
          "LS",
          "LT",
          "LU",
          "LV",
          "LY",
          "MA",
          "MC",
          "MD",
          "ME",
          "MG",
          "MH",
          "MK",
          "ML",
          "MN",
          "MO",
          "MR",
          "MT",
          "MU",
          "MV",
          "MW",
          "MX",
          "MY",
          "MZ",
          "NA",
          "NE",
          "NG",
          "NI",
          "NL",
          "NO",
          "NP",
          "NR",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PG",
          "PH",
          "PK",
          "PL",
          "PS",
          "PT",
          "PW",
          "PY",
          "QA",
          "RO",
          "RS",
          "RW",
          "SA",
          "SB",
          "SC",
          "SE",
          "SG",
          "SI",
          "SK",
          "SL",
          "SM",
          "SN",
          "SR",
          "ST",
          "SV",
          "SZ",
          "TD",
          "TG",
          "TH",
          "TJ",
          "TL",
          "TN",
          "TO",
          "TR",
          "TT",
          "TV",
          "TW",
          "TZ",
          "UA",
          "UG",
          "US",
          "UY",
          "UZ",
          "VC",
          "VE",
          "VN",
          "VU",
          "WS",
          "XK",
          "ZA",
          "ZM",
          "ZW"
        ],
        external_urls: { spotify: "https://open.spotify.com/album/6WJB3ie2QvOhlLj4sqcK1n" },
        href: "https://api.spotify.com/v1/albums/6WJB3ie2QvOhlLj4sqcK1n",
        id: "6WJB3ie2QvOhlLj4sqcK1n",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b2735552eebe62911d84f5bc5839",
            width: 640
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e025552eebe62911d84f5bc5839",
            width: 300
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d000048515552eebe62911d84f5bc5839",
            width: 64
          }
        ],
        name: "XFOREVER",
        release_date: "2021-07-30",
        release_date_precision: "day",
        total_tracks: 9,
        type: "album",
        uri: "spotify:album:6WJB3ie2QvOhlLj4sqcK1n"
      },
      artists: [
        {
          external_urls: { spotify: "https://open.spotify.com/artist/4QxIol1JzAa4ePmDytv0e4" },
          href: "https://api.spotify.com/v1/artists/4QxIol1JzAa4ePmDytv0e4",
          id: "4QxIol1JzAa4ePmDytv0e4",
          name: "KID BRUNSWICK",
          type: "artist",
          uri: "spotify:artist:4QxIol1JzAa4ePmDytv0e4"
        }
      ],
      available_markets: [
        "AD",
        "AE",
        "AG",
        "AL",
        "AM",
        "AO",
        "AR",
        "AT",
        "AU",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BN",
        "BO",
        "BR",
        "BS",
        "BT",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CD",
        "CG",
        "CH",
        "CI",
        "CL",
        "CM",
        "CO",
        "CR",
        "CV",
        "CW",
        "CY",
        "CZ",
        "DE",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FJ",
        "FM",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GR",
        "GT",
        "GW",
        "GY",
        "HK",
        "HN",
        "HR",
        "HT",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IQ",
        "IS",
        "IT",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KR",
        "KW",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MG",
        "MH",
        "MK",
        "ML",
        "MN",
        "MO",
        "MR",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NE",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PG",
        "PH",
        "PK",
        "PL",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RO",
        "RS",
        "RW",
        "SA",
        "SB",
        "SC",
        "SE",
        "SG",
        "SI",
        "SK",
        "SL",
        "SM",
        "SN",
        "SR",
        "ST",
        "SV",
        "SZ",
        "TD",
        "TG",
        "TH",
        "TJ",
        "TL",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "US",
        "UY",
        "UZ",
        "VC",
        "VE",
        "VN",
        "VU",
        "WS",
        "XK",
        "ZA",
        "ZM",
        "ZW"
      ],
      disc_number: 1,
      duration_ms: 208266,
      explicit: !0,
      external_ids: { isrc: "GBUM72001368" },
      external_urls: { spotify: "https://open.spotify.com/track/3qFQBjBhJRpqEB2KL2FxLK" },
      href: "https://api.spotify.com/v1/tracks/3qFQBjBhJRpqEB2KL2FxLK",
      id: "3qFQBjBhJRpqEB2KL2FxLK",
      is_local: !1,
      name: "Prescription Kid",
      popularity: 48,
      preview_url: "https://p.scdn.co/mp3-preview/496a43336015fcbaed1b8ef82aac7aedaa8ec4f9?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 1,
      type: "track",
      uri: "spotify:track:3qFQBjBhJRpqEB2KL2FxLK"
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/5FjQVp1Lb0kltmwIuu5kfj"
            },
            href: "https://api.spotify.com/v1/artists/5FjQVp1Lb0kltmwIuu5kfj",
            id: "5FjQVp1Lb0kltmwIuu5kfj",
            name: "Dayseeker",
            type: "artist",
            uri: "spotify:artist:5FjQVp1Lb0kltmwIuu5kfj"
          }
        ],
        available_markets: [
          "AD",
          "AE",
          "AG",
          "AL",
          "AM",
          "AO",
          "AR",
          "AT",
          "AU",
          "AZ",
          "BA",
          "BB",
          "BD",
          "BE",
          "BF",
          "BG",
          "BH",
          "BI",
          "BJ",
          "BN",
          "BO",
          "BR",
          "BS",
          "BT",
          "BW",
          "BY",
          "BZ",
          "CA",
          "CD",
          "CG",
          "CH",
          "CI",
          "CL",
          "CM",
          "CO",
          "CR",
          "CV",
          "CW",
          "CY",
          "CZ",
          "DE",
          "DJ",
          "DK",
          "DM",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FJ",
          "FM",
          "FR",
          "GA",
          "GB",
          "GD",
          "GE",
          "GH",
          "GM",
          "GN",
          "GQ",
          "GR",
          "GT",
          "GW",
          "GY",
          "HK",
          "HN",
          "HR",
          "HT",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IQ",
          "IS",
          "IT",
          "JM",
          "JO",
          "JP",
          "KE",
          "KG",
          "KH",
          "KI",
          "KM",
          "KN",
          "KR",
          "KW",
          "KZ",
          "LA",
          "LB",
          "LC",
          "LI",
          "LK",
          "LR",
          "LS",
          "LT",
          "LU",
          "LV",
          "LY",
          "MA",
          "MC",
          "MD",
          "ME",
          "MG",
          "MH",
          "MK",
          "ML",
          "MN",
          "MO",
          "MR",
          "MT",
          "MU",
          "MV",
          "MW",
          "MX",
          "MY",
          "MZ",
          "NA",
          "NE",
          "NG",
          "NI",
          "NL",
          "NO",
          "NP",
          "NR",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PG",
          "PH",
          "PK",
          "PL",
          "PS",
          "PT",
          "PW",
          "PY",
          "QA",
          "RO",
          "RS",
          "RW",
          "SA",
          "SB",
          "SC",
          "SE",
          "SG",
          "SI",
          "SK",
          "SL",
          "SM",
          "SN",
          "SR",
          "ST",
          "SV",
          "SZ",
          "TD",
          "TG",
          "TH",
          "TJ",
          "TL",
          "TN",
          "TO",
          "TR",
          "TT",
          "TV",
          "TW",
          "TZ",
          "UA",
          "UG",
          "US",
          "UY",
          "UZ",
          "VC",
          "VE",
          "VN",
          "VU",
          "WS",
          "XK",
          "ZA",
          "ZM",
          "ZW"
        ],
        external_urls: { spotify: "https://open.spotify.com/album/2oLk2Z8wtuGX1xC9evzvC9" },
        href: "https://api.spotify.com/v1/albums/2oLk2Z8wtuGX1xC9evzvC9",
        id: "2oLk2Z8wtuGX1xC9evzvC9",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b27337efea3ab03f6ccea7e61a7e",
            width: 640
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e0237efea3ab03f6ccea7e61a7e",
            width: 300
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d0000485137efea3ab03f6ccea7e61a7e",
            width: 64
          }
        ],
        name: "Sleeptalk",
        release_date: "2019-09-27",
        release_date_precision: "day",
        total_tracks: 10,
        type: "album",
        uri: "spotify:album:2oLk2Z8wtuGX1xC9evzvC9"
      },
      artists: [
        {
          external_urls: { spotify: "https://open.spotify.com/artist/5FjQVp1Lb0kltmwIuu5kfj" },
          href: "https://api.spotify.com/v1/artists/5FjQVp1Lb0kltmwIuu5kfj",
          id: "5FjQVp1Lb0kltmwIuu5kfj",
          name: "Dayseeker",
          type: "artist",
          uri: "spotify:artist:5FjQVp1Lb0kltmwIuu5kfj"
        }
      ],
      available_markets: [
        "AD",
        "AE",
        "AG",
        "AL",
        "AM",
        "AO",
        "AR",
        "AT",
        "AU",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BN",
        "BO",
        "BR",
        "BS",
        "BT",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CD",
        "CG",
        "CH",
        "CI",
        "CL",
        "CM",
        "CO",
        "CR",
        "CV",
        "CW",
        "CY",
        "CZ",
        "DE",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FJ",
        "FM",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GR",
        "GT",
        "GW",
        "GY",
        "HK",
        "HN",
        "HR",
        "HT",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IQ",
        "IS",
        "IT",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KR",
        "KW",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MG",
        "MH",
        "MK",
        "ML",
        "MN",
        "MO",
        "MR",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NE",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PG",
        "PH",
        "PK",
        "PL",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RO",
        "RS",
        "RW",
        "SA",
        "SB",
        "SC",
        "SE",
        "SG",
        "SI",
        "SK",
        "SL",
        "SM",
        "SN",
        "SR",
        "ST",
        "SV",
        "SZ",
        "TD",
        "TG",
        "TH",
        "TJ",
        "TL",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "US",
        "UY",
        "UZ",
        "VC",
        "VE",
        "VN",
        "VU",
        "WS",
        "XK",
        "ZA",
        "ZM",
        "ZW"
      ],
      disc_number: 1,
      duration_ms: 223026,
      explicit: !1,
      external_ids: { isrc: "GBUM71903161" },
      external_urls: { spotify: "https://open.spotify.com/track/2NDH7pMWv3UQHOCN4tnXbI" },
      href: "https://api.spotify.com/v1/tracks/2NDH7pMWv3UQHOCN4tnXbI",
      id: "2NDH7pMWv3UQHOCN4tnXbI",
      is_local: !1,
      name: "Sleeptalk",
      popularity: 64,
      preview_url: "https://p.scdn.co/mp3-preview/3a5425ef02e1d4e8382ecbbb554829577b08033a?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 4,
      type: "track",
      uri: "spotify:track:2NDH7pMWv3UQHOCN4tnXbI"
    },
    {
      album: {
        album_type: "single",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/4KH4eOg39KeBpnfSgvIteD"
            },
            href: "https://api.spotify.com/v1/artists/4KH4eOg39KeBpnfSgvIteD",
            id: "4KH4eOg39KeBpnfSgvIteD",
            name: "Pretty Vicious",
            type: "artist",
            uri: "spotify:artist:4KH4eOg39KeBpnfSgvIteD"
          }
        ],
        available_markets: [
          "AD",
          "AE",
          "AG",
          "AL",
          "AM",
          "AO",
          "AR",
          "AT",
          "AU",
          "AZ",
          "BA",
          "BB",
          "BD",
          "BE",
          "BF",
          "BG",
          "BH",
          "BI",
          "BJ",
          "BN",
          "BO",
          "BR",
          "BS",
          "BT",
          "BW",
          "BY",
          "BZ",
          "CA",
          "CD",
          "CG",
          "CH",
          "CI",
          "CL",
          "CM",
          "CO",
          "CR",
          "CV",
          "CW",
          "CY",
          "CZ",
          "DE",
          "DJ",
          "DK",
          "DM",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FJ",
          "FM",
          "GA",
          "GB",
          "GD",
          "GE",
          "GH",
          "GM",
          "GN",
          "GQ",
          "GR",
          "GT",
          "GW",
          "GY",
          "HK",
          "HN",
          "HR",
          "HT",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IQ",
          "IS",
          "IT",
          "JM",
          "JO",
          "JP",
          "KE",
          "KG",
          "KH",
          "KI",
          "KM",
          "KN",
          "KR",
          "KW",
          "KZ",
          "LA",
          "LB",
          "LC",
          "LI",
          "LK",
          "LR",
          "LS",
          "LT",
          "LU",
          "LV",
          "LY",
          "MA",
          "MC",
          "MD",
          "ME",
          "MG",
          "MH",
          "MK",
          "ML",
          "MN",
          "MO",
          "MR",
          "MT",
          "MU",
          "MV",
          "MW",
          "MX",
          "MY",
          "MZ",
          "NA",
          "NE",
          "NG",
          "NI",
          "NL",
          "NO",
          "NP",
          "NR",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PG",
          "PH",
          "PK",
          "PL",
          "PS",
          "PT",
          "PW",
          "PY",
          "QA",
          "RO",
          "RS",
          "RW",
          "SA",
          "SB",
          "SC",
          "SE",
          "SG",
          "SI",
          "SK",
          "SL",
          "SM",
          "SN",
          "SR",
          "ST",
          "SV",
          "SZ",
          "TD",
          "TG",
          "TH",
          "TJ",
          "TL",
          "TN",
          "TO",
          "TR",
          "TT",
          "TV",
          "TW",
          "TZ",
          "UA",
          "UG",
          "US",
          "UY",
          "UZ",
          "VC",
          "VE",
          "VN",
          "VU",
          "WS",
          "XK",
          "ZA",
          "ZM",
          "ZW"
        ],
        external_urls: { spotify: "https://open.spotify.com/album/7dN0RBvJVZY0d7EmLLMxt2" },
        href: "https://api.spotify.com/v1/albums/7dN0RBvJVZY0d7EmLLMxt2",
        id: "7dN0RBvJVZY0d7EmLLMxt2",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273c8ca3b8717c1bb9732432219",
            width: 640
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e02c8ca3b8717c1bb9732432219",
            width: 300
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d00004851c8ca3b8717c1bb9732432219",
            width: 64
          }
        ],
        name: "Are You Ready For Me",
        release_date: "2015-11-11",
        release_date_precision: "day",
        total_tracks: 1,
        type: "album",
        uri: "spotify:album:7dN0RBvJVZY0d7EmLLMxt2"
      },
      artists: [
        {
          external_urls: { spotify: "https://open.spotify.com/artist/4KH4eOg39KeBpnfSgvIteD" },
          href: "https://api.spotify.com/v1/artists/4KH4eOg39KeBpnfSgvIteD",
          id: "4KH4eOg39KeBpnfSgvIteD",
          name: "Pretty Vicious",
          type: "artist",
          uri: "spotify:artist:4KH4eOg39KeBpnfSgvIteD"
        }
      ],
      available_markets: [
        "AD",
        "AE",
        "AG",
        "AL",
        "AM",
        "AO",
        "AR",
        "AT",
        "AU",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BN",
        "BO",
        "BR",
        "BS",
        "BT",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CD",
        "CG",
        "CH",
        "CI",
        "CL",
        "CM",
        "CO",
        "CR",
        "CV",
        "CW",
        "CY",
        "CZ",
        "DE",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FJ",
        "FM",
        "GA",
        "GB",
        "GD",
        "GE",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GR",
        "GT",
        "GW",
        "GY",
        "HK",
        "HN",
        "HR",
        "HT",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IQ",
        "IS",
        "IT",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KR",
        "KW",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MG",
        "MH",
        "MK",
        "ML",
        "MN",
        "MO",
        "MR",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NE",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PG",
        "PH",
        "PK",
        "PL",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RO",
        "RS",
        "RW",
        "SA",
        "SB",
        "SC",
        "SE",
        "SG",
        "SI",
        "SK",
        "SL",
        "SM",
        "SN",
        "SR",
        "ST",
        "SV",
        "SZ",
        "TD",
        "TG",
        "TH",
        "TJ",
        "TL",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "US",
        "UY",
        "UZ",
        "VC",
        "VE",
        "VN",
        "VU",
        "WS",
        "XK",
        "ZA",
        "ZM",
        "ZW"
      ],
      disc_number: 1,
      duration_ms: 215653,
      explicit: !0,
      external_ids: { isrc: "GBUM71507207" },
      external_urls: { spotify: "https://open.spotify.com/track/6SNyMrV6bP0NQrK1NZz9z3" },
      href: "https://api.spotify.com/v1/tracks/6SNyMrV6bP0NQrK1NZz9z3",
      id: "6SNyMrV6bP0NQrK1NZz9z3",
      is_local: !1,
      name: "Are You Ready For Me",
      popularity: 43,
      preview_url: "https://p.scdn.co/mp3-preview/b2362ec139f388f5f7423c7e788497e777392ee0?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 1,
      type: "track",
      uri: "spotify:track:6SNyMrV6bP0NQrK1NZz9z3"
    },
    {
      album: {
        album_type: "single",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0cESlyDxeKCUzc3gm1owur"
            },
            href: "https://api.spotify.com/v1/artists/0cESlyDxeKCUzc3gm1owur",
            id: "0cESlyDxeKCUzc3gm1owur",
            name: "Shrezzers",
            type: "artist",
            uri: "spotify:artist:0cESlyDxeKCUzc3gm1owur"
          }
        ],
        available_markets: [
          "AD",
          "AE",
          "AG",
          "AL",
          "AM",
          "AO",
          "AR",
          "AT",
          "AU",
          "AZ",
          "BA",
          "BB",
          "BD",
          "BE",
          "BF",
          "BG",
          "BH",
          "BJ",
          "BN",
          "BO",
          "BR",
          "BS",
          "BT",
          "BW",
          "BZ",
          "CA",
          "CG",
          "CH",
          "CI",
          "CL",
          "CM",
          "CO",
          "CR",
          "CV",
          "CW",
          "CY",
          "CZ",
          "DE",
          "DJ",
          "DK",
          "DM",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FJ",
          "FM",
          "FR",
          "GA",
          "GB",
          "GD",
          "GE",
          "GH",
          "GM",
          "GN",
          "GQ",
          "GR",
          "GT",
          "GW",
          "GY",
          "HK",
          "HN",
          "HR",
          "HT",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IS",
          "IT",
          "JM",
          "JO",
          "JP",
          "KE",
          "KG",
          "KH",
          "KI",
          "KM",
          "KN",
          "KR",
          "KW",
          "KZ",
          "LA",
          "LB",
          "LC",
          "LI",
          "LK",
          "LR",
          "LS",
          "LT",
          "LU",
          "LV",
          "MA",
          "MC",
          "MD",
          "ME",
          "MG",
          "MH",
          "MK",
          "ML",
          "MN",
          "MO",
          "MR",
          "MT",
          "MU",
          "MV",
          "MW",
          "MX",
          "MY",
          "MZ",
          "NA",
          "NE",
          "NG",
          "NI",
          "NL",
          "NO",
          "NP",
          "NR",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PG",
          "PH",
          "PK",
          "PL",
          "PS",
          "PT",
          "PW",
          "PY",
          "QA",
          "RO",
          "RW",
          "SA",
          "SB",
          "SC",
          "SE",
          "SG",
          "SI",
          "SK",
          "SL",
          "SM",
          "SN",
          "SR",
          "ST",
          "SV",
          "SZ",
          "TD",
          "TG",
          "TH",
          "TJ",
          "TL",
          "TN",
          "TO",
          "TR",
          "TT",
          "TV",
          "TW",
          "TZ",
          "UA",
          "UG",
          "US",
          "UY",
          "UZ",
          "VC",
          "VE",
          "VN",
          "VU",
          "WS",
          "ZA",
          "ZM"
        ],
        external_urls: { spotify: "https://open.spotify.com/album/7BJkhcA96o0uCebe89pj8J" },
        href: "https://api.spotify.com/v1/albums/7BJkhcA96o0uCebe89pj8J",
        id: "7BJkhcA96o0uCebe89pj8J",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273dd470761e9fbe553fa2b9df8",
            width: 640
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e02dd470761e9fbe553fa2b9df8",
            width: 300
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d00004851dd470761e9fbe553fa2b9df8",
            width: 64
          }
        ],
        name: "Noodles",
        release_date: "2020-01-27",
        release_date_precision: "day",
        total_tracks: 1,
        type: "album",
        uri: "spotify:album:7BJkhcA96o0uCebe89pj8J"
      },
      artists: [
        {
          external_urls: { spotify: "https://open.spotify.com/artist/0cESlyDxeKCUzc3gm1owur" },
          href: "https://api.spotify.com/v1/artists/0cESlyDxeKCUzc3gm1owur",
          id: "0cESlyDxeKCUzc3gm1owur",
          name: "Shrezzers",
          type: "artist",
          uri: "spotify:artist:0cESlyDxeKCUzc3gm1owur"
        }
      ],
      available_markets: [
        "AD",
        "AE",
        "AG",
        "AL",
        "AM",
        "AO",
        "AR",
        "AT",
        "AU",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BJ",
        "BN",
        "BO",
        "BR",
        "BS",
        "BT",
        "BW",
        "BZ",
        "CA",
        "CG",
        "CH",
        "CI",
        "CL",
        "CM",
        "CO",
        "CR",
        "CV",
        "CW",
        "CY",
        "CZ",
        "DE",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FJ",
        "FM",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GR",
        "GT",
        "GW",
        "GY",
        "HK",
        "HN",
        "HR",
        "HT",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IS",
        "IT",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KR",
        "KW",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "MA",
        "MC",
        "MD",
        "ME",
        "MG",
        "MH",
        "MK",
        "ML",
        "MN",
        "MO",
        "MR",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NE",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PG",
        "PH",
        "PK",
        "PL",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RO",
        "RW",
        "SA",
        "SB",
        "SC",
        "SE",
        "SG",
        "SI",
        "SK",
        "SL",
        "SM",
        "SN",
        "SR",
        "ST",
        "SV",
        "SZ",
        "TD",
        "TG",
        "TH",
        "TJ",
        "TL",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "US",
        "UY",
        "UZ",
        "VC",
        "VE",
        "VN",
        "VU",
        "WS",
        "ZA",
        "ZM"
      ],
      disc_number: 1,
      duration_ms: 277833,
      explicit: !1,
      external_ids: { isrc: "TCAEQ2027287" },
      external_urls: { spotify: "https://open.spotify.com/track/2qbmTbbwdpubHObz42z9EL" },
      href: "https://api.spotify.com/v1/tracks/2qbmTbbwdpubHObz42z9EL",
      id: "2qbmTbbwdpubHObz42z9EL",
      is_local: !1,
      name: "Noodles",
      popularity: 41,
      preview_url: "https://p.scdn.co/mp3-preview/1fb7961c45cc5b2ffc44a02a2955d45c3ff98af9?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 1,
      type: "track",
      uri: "spotify:track:2qbmTbbwdpubHObz42z9EL"
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1P1y4wp6V0CwjhGcXPKgAu"
            },
            href: "https://api.spotify.com/v1/artists/1P1y4wp6V0CwjhGcXPKgAu",
            id: "1P1y4wp6V0CwjhGcXPKgAu",
            name: "Between You & Me",
            type: "artist",
            uri: "spotify:artist:1P1y4wp6V0CwjhGcXPKgAu"
          }
        ],
        available_markets: [
          "AD",
          "AE",
          "AG",
          "AL",
          "AM",
          "AO",
          "AR",
          "AT",
          "AU",
          "AZ",
          "BA",
          "BB",
          "BD",
          "BE",
          "BF",
          "BG",
          "BH",
          "BI",
          "BJ",
          "BN",
          "BO",
          "BR",
          "BS",
          "BT",
          "BW",
          "BY",
          "BZ",
          "CA",
          "CD",
          "CG",
          "CH",
          "CI",
          "CL",
          "CM",
          "CO",
          "CR",
          "CV",
          "CW",
          "CY",
          "CZ",
          "DE",
          "DJ",
          "DK",
          "DM",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FJ",
          "FM",
          "FR",
          "GA",
          "GB",
          "GD",
          "GE",
          "GH",
          "GM",
          "GN",
          "GQ",
          "GR",
          "GT",
          "GW",
          "GY",
          "HK",
          "HN",
          "HR",
          "HT",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IQ",
          "IS",
          "IT",
          "JM",
          "JO",
          "JP",
          "KE",
          "KG",
          "KH",
          "KI",
          "KM",
          "KN",
          "KR",
          "KW",
          "KZ",
          "LA",
          "LB",
          "LC",
          "LI",
          "LK",
          "LR",
          "LS",
          "LT",
          "LU",
          "LV",
          "LY",
          "MA",
          "MC",
          "MD",
          "ME",
          "MG",
          "MH",
          "MK",
          "ML",
          "MN",
          "MO",
          "MR",
          "MT",
          "MU",
          "MV",
          "MW",
          "MX",
          "MY",
          "MZ",
          "NA",
          "NE",
          "NG",
          "NI",
          "NL",
          "NO",
          "NP",
          "NR",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PG",
          "PH",
          "PK",
          "PL",
          "PS",
          "PT",
          "PW",
          "PY",
          "QA",
          "RO",
          "RS",
          "RW",
          "SA",
          "SB",
          "SC",
          "SE",
          "SG",
          "SI",
          "SK",
          "SL",
          "SM",
          "SN",
          "SR",
          "ST",
          "SV",
          "SZ",
          "TD",
          "TG",
          "TH",
          "TJ",
          "TL",
          "TN",
          "TO",
          "TR",
          "TT",
          "TV",
          "TW",
          "TZ",
          "UA",
          "UG",
          "US",
          "UY",
          "UZ",
          "VC",
          "VE",
          "VN",
          "VU",
          "WS",
          "XK",
          "ZA",
          "ZM",
          "ZW"
        ],
        external_urls: { spotify: "https://open.spotify.com/album/0shZOs5RGfa93z5RYxUHvw" },
        href: "https://api.spotify.com/v1/albums/0shZOs5RGfa93z5RYxUHvw",
        id: "0shZOs5RGfa93z5RYxUHvw",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b2734d25fd15460d358aaf5688f0",
            width: 640
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e024d25fd15460d358aaf5688f0",
            width: 300
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d000048514d25fd15460d358aaf5688f0",
            width: 64
          }
        ],
        name: "Armageddon",
        release_date: "2021-11-19",
        release_date_precision: "day",
        total_tracks: 10,
        type: "album",
        uri: "spotify:album:0shZOs5RGfa93z5RYxUHvw"
      },
      artists: [
        {
          external_urls: { spotify: "https://open.spotify.com/artist/1P1y4wp6V0CwjhGcXPKgAu" },
          href: "https://api.spotify.com/v1/artists/1P1y4wp6V0CwjhGcXPKgAu",
          id: "1P1y4wp6V0CwjhGcXPKgAu",
          name: "Between You & Me",
          type: "artist",
          uri: "spotify:artist:1P1y4wp6V0CwjhGcXPKgAu"
        }
      ],
      available_markets: [
        "AD",
        "AE",
        "AG",
        "AL",
        "AM",
        "AO",
        "AR",
        "AT",
        "AU",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BN",
        "BO",
        "BR",
        "BS",
        "BT",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CD",
        "CG",
        "CH",
        "CI",
        "CL",
        "CM",
        "CO",
        "CR",
        "CV",
        "CW",
        "CY",
        "CZ",
        "DE",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FJ",
        "FM",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GR",
        "GT",
        "GW",
        "GY",
        "HK",
        "HN",
        "HR",
        "HT",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IQ",
        "IS",
        "IT",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KR",
        "KW",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MG",
        "MH",
        "MK",
        "ML",
        "MN",
        "MO",
        "MR",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NE",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PG",
        "PH",
        "PK",
        "PL",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RO",
        "RS",
        "RW",
        "SA",
        "SB",
        "SC",
        "SE",
        "SG",
        "SI",
        "SK",
        "SL",
        "SM",
        "SN",
        "SR",
        "ST",
        "SV",
        "SZ",
        "TD",
        "TG",
        "TH",
        "TJ",
        "TL",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "US",
        "UY",
        "UZ",
        "VC",
        "VE",
        "VN",
        "VU",
        "WS",
        "XK",
        "ZA",
        "ZM",
        "ZW"
      ],
      disc_number: 1,
      duration_ms: 186111,
      explicit: !1,
      external_ids: { isrc: "USHR22111302" },
      external_urls: { spotify: "https://open.spotify.com/track/65zv7lykNpgkBiMGI5FSJY" },
      href: "https://api.spotify.com/v1/tracks/65zv7lykNpgkBiMGI5FSJY",
      id: "65zv7lykNpgkBiMGI5FSJY",
      is_local: !1,
      name: "Pleased to Meet You",
      popularity: 35,
      preview_url: "https://p.scdn.co/mp3-preview/57326c44d3b40a04c4ebb2150f3c505e4d1260c9?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 1,
      type: "track",
      uri: "spotify:track:65zv7lykNpgkBiMGI5FSJY"
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/6oFs3qk4VepIVFdoD4jmsy"
            },
            href: "https://api.spotify.com/v1/artists/6oFs3qk4VepIVFdoD4jmsy",
            id: "6oFs3qk4VepIVFdoD4jmsy",
            name: "PVRIS",
            type: "artist",
            uri: "spotify:artist:6oFs3qk4VepIVFdoD4jmsy"
          }
        ],
        available_markets: [
          "AD",
          "AE",
          "AG",
          "AL",
          "AM",
          "AO",
          "AR",
          "AT",
          "AU",
          "AZ",
          "BA",
          "BB",
          "BD",
          "BE",
          "BF",
          "BG",
          "BH",
          "BI",
          "BJ",
          "BN",
          "BO",
          "BR",
          "BS",
          "BT",
          "BW",
          "BY",
          "BZ",
          "CA",
          "CD",
          "CG",
          "CH",
          "CI",
          "CL",
          "CM",
          "CO",
          "CR",
          "CV",
          "CW",
          "CY",
          "CZ",
          "DE",
          "DJ",
          "DK",
          "DM",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FJ",
          "FM",
          "FR",
          "GA",
          "GB",
          "GD",
          "GE",
          "GH",
          "GM",
          "GN",
          "GQ",
          "GR",
          "GT",
          "GW",
          "GY",
          "HK",
          "HN",
          "HR",
          "HT",
          "HU",
          "ID",
          "IE",
          "IL",
          "IQ",
          "IS",
          "IT",
          "JM",
          "JO",
          "JP",
          "KE",
          "KG",
          "KH",
          "KI",
          "KM",
          "KN",
          "KR",
          "KW",
          "KZ",
          "LA",
          "LB",
          "LC",
          "LI",
          "LK",
          "LR",
          "LS",
          "LT",
          "LU",
          "LV",
          "LY",
          "MA",
          "MC",
          "MD",
          "ME",
          "MG",
          "MH",
          "MK",
          "ML",
          "MN",
          "MO",
          "MR",
          "MT",
          "MU",
          "MV",
          "MW",
          "MX",
          "MY",
          "MZ",
          "NA",
          "NE",
          "NG",
          "NI",
          "NL",
          "NO",
          "NP",
          "NR",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PG",
          "PH",
          "PK",
          "PL",
          "PS",
          "PT",
          "PW",
          "PY",
          "QA",
          "RO",
          "RS",
          "RW",
          "SA",
          "SB",
          "SC",
          "SE",
          "SG",
          "SI",
          "SK",
          "SL",
          "SM",
          "SN",
          "SR",
          "ST",
          "SV",
          "SZ",
          "TD",
          "TG",
          "TH",
          "TJ",
          "TL",
          "TN",
          "TO",
          "TR",
          "TT",
          "TV",
          "TW",
          "TZ",
          "UA",
          "UG",
          "US",
          "UY",
          "UZ",
          "VC",
          "VE",
          "VN",
          "VU",
          "WS",
          "XK",
          "ZA",
          "ZM",
          "ZW"
        ],
        external_urls: { spotify: "https://open.spotify.com/album/7za8qVGR3wUEJ01pLFcnPB" },
        href: "https://api.spotify.com/v1/albums/7za8qVGR3wUEJ01pLFcnPB",
        id: "7za8qVGR3wUEJ01pLFcnPB",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b27359aca3c902712bf5ba4ac523",
            width: 640
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e0259aca3c902712bf5ba4ac523",
            width: 300
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d0000485159aca3c902712bf5ba4ac523",
            width: 64
          }
        ],
        name: "White Noise (Deluxe Version)",
        release_date: "2016-04-22",
        release_date_precision: "day",
        total_tracks: 13,
        type: "album",
        uri: "spotify:album:7za8qVGR3wUEJ01pLFcnPB"
      },
      artists: [
        {
          external_urls: { spotify: "https://open.spotify.com/artist/6oFs3qk4VepIVFdoD4jmsy" },
          href: "https://api.spotify.com/v1/artists/6oFs3qk4VepIVFdoD4jmsy",
          id: "6oFs3qk4VepIVFdoD4jmsy",
          name: "PVRIS",
          type: "artist",
          uri: "spotify:artist:6oFs3qk4VepIVFdoD4jmsy"
        }
      ],
      available_markets: [
        "AD",
        "AE",
        "AG",
        "AL",
        "AM",
        "AO",
        "AR",
        "AT",
        "AU",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BN",
        "BO",
        "BR",
        "BS",
        "BT",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CD",
        "CG",
        "CH",
        "CI",
        "CL",
        "CM",
        "CO",
        "CR",
        "CV",
        "CW",
        "CY",
        "CZ",
        "DE",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FJ",
        "FM",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GR",
        "GT",
        "GW",
        "GY",
        "HK",
        "HN",
        "HR",
        "HT",
        "HU",
        "ID",
        "IE",
        "IL",
        "IQ",
        "IS",
        "IT",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KR",
        "KW",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MG",
        "MH",
        "MK",
        "ML",
        "MN",
        "MO",
        "MR",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NE",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PG",
        "PH",
        "PK",
        "PL",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RO",
        "RS",
        "RW",
        "SA",
        "SB",
        "SC",
        "SE",
        "SG",
        "SI",
        "SK",
        "SL",
        "SM",
        "SN",
        "SR",
        "ST",
        "SV",
        "SZ",
        "TD",
        "TG",
        "TH",
        "TJ",
        "TL",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "US",
        "UY",
        "UZ",
        "VC",
        "VE",
        "VN",
        "VU",
        "WS",
        "XK",
        "ZA",
        "ZM",
        "ZW"
      ],
      disc_number: 1,
      duration_ms: 185066,
      explicit: !1,
      external_ids: { isrc: "USEK71424901" },
      external_urls: { spotify: "https://open.spotify.com/track/7wRN9wIH68eLNUaizLxqRm" },
      href: "https://api.spotify.com/v1/tracks/7wRN9wIH68eLNUaizLxqRm",
      id: "7wRN9wIH68eLNUaizLxqRm",
      is_local: !1,
      name: "Smoke",
      popularity: 42,
      preview_url: "https://p.scdn.co/mp3-preview/410ebd1d699a68cfcc6cd1806fd57b5a131e5b19?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 3,
      type: "track",
      uri: "spotify:track:7wRN9wIH68eLNUaizLxqRm"
    },
    {
      album: {
        album_type: "single",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1W2Fv4YUnjC8hx2qQd6fGh"
            },
            href: "https://api.spotify.com/v1/artists/1W2Fv4YUnjC8hx2qQd6fGh",
            id: "1W2Fv4YUnjC8hx2qQd6fGh",
            name: "Stand Atlantic",
            type: "artist",
            uri: "spotify:artist:1W2Fv4YUnjC8hx2qQd6fGh"
          },
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/7FngGIEGgN3Iwauw1MvO4P"
            },
            href: "https://api.spotify.com/v1/artists/7FngGIEGgN3Iwauw1MvO4P",
            id: "7FngGIEGgN3Iwauw1MvO4P",
            name: "nothing,nowhere.",
            type: "artist",
            uri: "spotify:artist:7FngGIEGgN3Iwauw1MvO4P"
          }
        ],
        available_markets: [
          "AD",
          "AE",
          "AG",
          "AL",
          "AM",
          "AO",
          "AR",
          "AT",
          "AU",
          "AZ",
          "BA",
          "BB",
          "BD",
          "BE",
          "BF",
          "BG",
          "BH",
          "BI",
          "BJ",
          "BN",
          "BO",
          "BR",
          "BS",
          "BT",
          "BW",
          "BY",
          "BZ",
          "CA",
          "CD",
          "CG",
          "CH",
          "CI",
          "CL",
          "CM",
          "CO",
          "CR",
          "CV",
          "CW",
          "CY",
          "CZ",
          "DE",
          "DJ",
          "DK",
          "DM",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FJ",
          "FM",
          "FR",
          "GA",
          "GB",
          "GD",
          "GE",
          "GH",
          "GM",
          "GN",
          "GQ",
          "GR",
          "GT",
          "GW",
          "GY",
          "HK",
          "HN",
          "HR",
          "HT",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IQ",
          "IS",
          "IT",
          "JM",
          "JO",
          "JP",
          "KE",
          "KG",
          "KH",
          "KI",
          "KM",
          "KN",
          "KR",
          "KW",
          "KZ",
          "LA",
          "LB",
          "LC",
          "LI",
          "LK",
          "LR",
          "LS",
          "LT",
          "LU",
          "LV",
          "LY",
          "MA",
          "MC",
          "MD",
          "ME",
          "MG",
          "MH",
          "MK",
          "ML",
          "MN",
          "MO",
          "MR",
          "MT",
          "MU",
          "MV",
          "MW",
          "MX",
          "MY",
          "MZ",
          "NA",
          "NE",
          "NG",
          "NI",
          "NL",
          "NO",
          "NP",
          "NR",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PG",
          "PH",
          "PK",
          "PL",
          "PS",
          "PT",
          "PW",
          "PY",
          "QA",
          "RO",
          "RS",
          "RW",
          "SA",
          "SB",
          "SC",
          "SE",
          "SG",
          "SI",
          "SK",
          "SL",
          "SM",
          "SN",
          "SR",
          "ST",
          "SV",
          "SZ",
          "TD",
          "TG",
          "TH",
          "TJ",
          "TL",
          "TN",
          "TO",
          "TR",
          "TT",
          "TV",
          "TW",
          "TZ",
          "UA",
          "UG",
          "US",
          "UY",
          "UZ",
          "VC",
          "VE",
          "VN",
          "VU",
          "WS",
          "XK",
          "ZA",
          "ZM",
          "ZW"
        ],
        external_urls: { spotify: "https://open.spotify.com/album/04tqbIcuZwsGL5Ut22eOKw" },
        href: "https://api.spotify.com/v1/albums/04tqbIcuZwsGL5Ut22eOKw",
        id: "04tqbIcuZwsGL5Ut22eOKw",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273771af49a70646979faa27720",
            width: 640
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e02771af49a70646979faa27720",
            width: 300
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d00004851771af49a70646979faa27720",
            width: 64
          }
        ],
        name: "deathwish (feat. nothing,nowhere.)",
        release_date: "2021-04-29",
        release_date_precision: "day",
        total_tracks: 1,
        type: "album",
        uri: "spotify:album:04tqbIcuZwsGL5Ut22eOKw"
      },
      artists: [
        {
          external_urls: { spotify: "https://open.spotify.com/artist/1W2Fv4YUnjC8hx2qQd6fGh" },
          href: "https://api.spotify.com/v1/artists/1W2Fv4YUnjC8hx2qQd6fGh",
          id: "1W2Fv4YUnjC8hx2qQd6fGh",
          name: "Stand Atlantic",
          type: "artist",
          uri: "spotify:artist:1W2Fv4YUnjC8hx2qQd6fGh"
        },
        {
          external_urls: { spotify: "https://open.spotify.com/artist/7FngGIEGgN3Iwauw1MvO4P" },
          href: "https://api.spotify.com/v1/artists/7FngGIEGgN3Iwauw1MvO4P",
          id: "7FngGIEGgN3Iwauw1MvO4P",
          name: "nothing,nowhere.",
          type: "artist",
          uri: "spotify:artist:7FngGIEGgN3Iwauw1MvO4P"
        }
      ],
      available_markets: [
        "AD",
        "AE",
        "AG",
        "AL",
        "AM",
        "AO",
        "AR",
        "AT",
        "AU",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BN",
        "BO",
        "BR",
        "BS",
        "BT",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CD",
        "CG",
        "CH",
        "CI",
        "CL",
        "CM",
        "CO",
        "CR",
        "CV",
        "CW",
        "CY",
        "CZ",
        "DE",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FJ",
        "FM",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GR",
        "GT",
        "GW",
        "GY",
        "HK",
        "HN",
        "HR",
        "HT",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IQ",
        "IS",
        "IT",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KR",
        "KW",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MG",
        "MH",
        "MK",
        "ML",
        "MN",
        "MO",
        "MR",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NE",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PG",
        "PH",
        "PK",
        "PL",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RO",
        "RS",
        "RW",
        "SA",
        "SB",
        "SC",
        "SE",
        "SG",
        "SI",
        "SK",
        "SL",
        "SM",
        "SN",
        "SR",
        "ST",
        "SV",
        "SZ",
        "TD",
        "TG",
        "TH",
        "TJ",
        "TL",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "US",
        "UY",
        "UZ",
        "VC",
        "VE",
        "VN",
        "VU",
        "WS",
        "XK",
        "ZA",
        "ZM",
        "ZW"
      ],
      disc_number: 1,
      duration_ms: 147907,
      explicit: !0,
      external_ids: { isrc: "USHR22111801" },
      external_urls: { spotify: "https://open.spotify.com/track/4pi7qRGw2DDKAJMGHGcZ2O" },
      href: "https://api.spotify.com/v1/tracks/4pi7qRGw2DDKAJMGHGcZ2O",
      id: "4pi7qRGw2DDKAJMGHGcZ2O",
      is_local: !1,
      name: "deathwish (feat. nothing,nowhere.)",
      popularity: 53,
      preview_url: "https://p.scdn.co/mp3-preview/1d632592893400712a1dadbef3328554b3b0cf9c?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 1,
      type: "track",
      uri: "spotify:track:4pi7qRGw2DDKAJMGHGcZ2O"
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/3KEhhixoMshqSEJ71rS7w1"
            },
            href: "https://api.spotify.com/v1/artists/3KEhhixoMshqSEJ71rS7w1",
            id: "3KEhhixoMshqSEJ71rS7w1",
            name: "Marmozets",
            type: "artist",
            uri: "spotify:artist:3KEhhixoMshqSEJ71rS7w1"
          }
        ],
        available_markets: [
          "AD",
          "AE",
          "AG",
          "AL",
          "AM",
          "AO",
          "AT",
          "AZ",
          "BA",
          "BB",
          "BD",
          "BE",
          "BF",
          "BG",
          "BH",
          "BI",
          "BJ",
          "BN",
          "BS",
          "BW",
          "BY",
          "BZ",
          "CD",
          "CG",
          "CH",
          "CI",
          "CM",
          "CV",
          "CW",
          "CY",
          "CZ",
          "DE",
          "DJ",
          "DK",
          "DM",
          "DZ",
          "EE",
          "EG",
          "ES",
          "FI",
          "FJ",
          "FM",
          "FR",
          "GA",
          "GD",
          "GH",
          "GM",
          "GN",
          "GQ",
          "GR",
          "GW",
          "HK",
          "HR",
          "HU",
          "ID",
          "IL",
          "IN",
          "IQ",
          "IS",
          "IT",
          "JO",
          "JP",
          "KE",
          "KG",
          "KH",
          "KM",
          "KN",
          "KR",
          "KW",
          "KZ",
          "LA",
          "LB",
          "LI",
          "LK",
          "LR",
          "LS",
          "LT",
          "LU",
          "LV",
          "LY",
          "MA",
          "MC",
          "MD",
          "ME",
          "MG",
          "MK",
          "ML",
          "MN",
          "MO",
          "MR",
          "MT",
          "MU",
          "MW",
          "MY",
          "MZ",
          "NA",
          "NE",
          "NG",
          "NL",
          "NO",
          "NP",
          "OM",
          "PG",
          "PH",
          "PK",
          "PL",
          "PS",
          "PT",
          "QA",
          "RO",
          "RS",
          "RW",
          "SA",
          "SC",
          "SE",
          "SG",
          "SI",
          "SK",
          "SL",
          "SM",
          "SN",
          "ST",
          "SZ",
          "TD",
          "TG",
          "TH",
          "TJ",
          "TL",
          "TN",
          "TR",
          "TT",
          "TW",
          "TZ",
          "UA",
          "UG",
          "UZ",
          "VN",
          "XK",
          "ZA",
          "ZM",
          "ZW"
        ],
        external_urls: { spotify: "https://open.spotify.com/album/6pUqeaxvoVgNDF8Ep1ubLR" },
        href: "https://api.spotify.com/v1/albums/6pUqeaxvoVgNDF8Ep1ubLR",
        id: "6pUqeaxvoVgNDF8Ep1ubLR",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b2730ea27520cd0072f39ee01126",
            width: 640
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e020ea27520cd0072f39ee01126",
            width: 300
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d000048510ea27520cd0072f39ee01126",
            width: 64
          }
        ],
        name: "The Weird And Wonderful Marmozets",
        release_date: "2014-09-29",
        release_date_precision: "day",
        total_tracks: 13,
        type: "album",
        uri: "spotify:album:6pUqeaxvoVgNDF8Ep1ubLR"
      },
      artists: [
        {
          external_urls: { spotify: "https://open.spotify.com/artist/3KEhhixoMshqSEJ71rS7w1" },
          href: "https://api.spotify.com/v1/artists/3KEhhixoMshqSEJ71rS7w1",
          id: "3KEhhixoMshqSEJ71rS7w1",
          name: "Marmozets",
          type: "artist",
          uri: "spotify:artist:3KEhhixoMshqSEJ71rS7w1"
        }
      ],
      available_markets: [
        "AD",
        "AE",
        "AG",
        "AL",
        "AM",
        "AO",
        "AT",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BN",
        "BS",
        "BW",
        "BY",
        "BZ",
        "CD",
        "CG",
        "CH",
        "CI",
        "CM",
        "CV",
        "CW",
        "CY",
        "CZ",
        "DE",
        "DJ",
        "DK",
        "DM",
        "DZ",
        "EE",
        "EG",
        "ES",
        "FI",
        "FJ",
        "FM",
        "FR",
        "GA",
        "GD",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GR",
        "GW",
        "HK",
        "HR",
        "HU",
        "ID",
        "IL",
        "IN",
        "IQ",
        "IS",
        "IT",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KM",
        "KN",
        "KR",
        "KW",
        "KZ",
        "LA",
        "LB",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MG",
        "MK",
        "ML",
        "MN",
        "MO",
        "MR",
        "MT",
        "MU",
        "MW",
        "MY",
        "MZ",
        "NA",
        "NE",
        "NG",
        "NL",
        "NO",
        "NP",
        "OM",
        "PG",
        "PH",
        "PK",
        "PL",
        "PS",
        "PT",
        "QA",
        "RO",
        "RS",
        "RW",
        "SA",
        "SC",
        "SE",
        "SG",
        "SI",
        "SK",
        "SL",
        "SM",
        "SN",
        "ST",
        "SZ",
        "TD",
        "TG",
        "TH",
        "TJ",
        "TL",
        "TN",
        "TR",
        "TT",
        "TW",
        "TZ",
        "UA",
        "UG",
        "UZ",
        "VN",
        "XK",
        "ZA",
        "ZM",
        "ZW"
      ],
      disc_number: 1,
      duration_ms: 240666,
      explicit: !1,
      external_ids: { isrc: "NLA321400202" },
      external_urls: { spotify: "https://open.spotify.com/track/1CUMoWNbw90dPcKJt3GVD0" },
      href: "https://api.spotify.com/v1/tracks/1CUMoWNbw90dPcKJt3GVD0",
      id: "1CUMoWNbw90dPcKJt3GVD0",
      is_local: !1,
      name: "Captivate You",
      popularity: 32,
      preview_url: "https://p.scdn.co/mp3-preview/2f7bd7443528f2adcfcc7ab15f9bbf101dcd6132?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 3,
      type: "track",
      uri: "spotify:track:1CUMoWNbw90dPcKJt3GVD0"
    },
    {
      album: {
        album_type: "single",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/4YW1GDcW9hobRPMDi8v6XH"
            },
            href: "https://api.spotify.com/v1/artists/4YW1GDcW9hobRPMDi8v6XH",
            id: "4YW1GDcW9hobRPMDi8v6XH",
            name: "Makari",
            type: "artist",
            uri: "spotify:artist:4YW1GDcW9hobRPMDi8v6XH"
          }
        ],
        available_markets: [
          "AD",
          "AE",
          "AG",
          "AL",
          "AM",
          "AO",
          "AR",
          "AT",
          "AU",
          "AZ",
          "BA",
          "BB",
          "BD",
          "BE",
          "BF",
          "BG",
          "BH",
          "BI",
          "BJ",
          "BN",
          "BO",
          "BR",
          "BS",
          "BT",
          "BW",
          "BY",
          "BZ",
          "CA",
          "CD",
          "CG",
          "CH",
          "CI",
          "CL",
          "CM",
          "CO",
          "CR",
          "CV",
          "CW",
          "CY",
          "CZ",
          "DE",
          "DJ",
          "DK",
          "DM",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FJ",
          "FM",
          "FR",
          "GA",
          "GB",
          "GD",
          "GE",
          "GH",
          "GM",
          "GN",
          "GQ",
          "GR",
          "GT",
          "GW",
          "GY",
          "HK",
          "HN",
          "HR",
          "HT",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IQ",
          "IS",
          "IT",
          "JM",
          "JO",
          "JP",
          "KE",
          "KG",
          "KH",
          "KI",
          "KM",
          "KN",
          "KR",
          "KW",
          "KZ",
          "LA",
          "LB",
          "LC",
          "LI",
          "LK",
          "LR",
          "LS",
          "LT",
          "LU",
          "LV",
          "LY",
          "MA",
          "MC",
          "MD",
          "ME",
          "MG",
          "MH",
          "MK",
          "ML",
          "MN",
          "MO",
          "MR",
          "MT",
          "MU",
          "MV",
          "MW",
          "MX",
          "MY",
          "MZ",
          "NA",
          "NE",
          "NG",
          "NI",
          "NL",
          "NO",
          "NP",
          "NR",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PG",
          "PH",
          "PK",
          "PL",
          "PS",
          "PT",
          "PW",
          "PY",
          "QA",
          "RO",
          "RS",
          "RW",
          "SA",
          "SB",
          "SC",
          "SE",
          "SG",
          "SI",
          "SK",
          "SL",
          "SM",
          "SN",
          "SR",
          "ST",
          "SV",
          "SZ",
          "TD",
          "TG",
          "TH",
          "TJ",
          "TL",
          "TN",
          "TO",
          "TR",
          "TT",
          "TV",
          "TW",
          "TZ",
          "UA",
          "UG",
          "US",
          "UY",
          "UZ",
          "VC",
          "VE",
          "VN",
          "VU",
          "WS",
          "XK",
          "ZA",
          "ZM",
          "ZW"
        ],
        external_urls: { spotify: "https://open.spotify.com/album/6Mw7nzZLfHuHIGYv3AvLg3" },
        href: "https://api.spotify.com/v1/albums/6Mw7nzZLfHuHIGYv3AvLg3",
        id: "6Mw7nzZLfHuHIGYv3AvLg3",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273a71eea16d750d67ef397d1d0",
            width: 640
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e02a71eea16d750d67ef397d1d0",
            width: 300
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d00004851a71eea16d750d67ef397d1d0",
            width: 64
          }
        ],
        name: "Elegies",
        release_date: "2016-11-18",
        release_date_precision: "day",
        total_tracks: 5,
        type: "album",
        uri: "spotify:album:6Mw7nzZLfHuHIGYv3AvLg3"
      },
      artists: [
        {
          external_urls: { spotify: "https://open.spotify.com/artist/4YW1GDcW9hobRPMDi8v6XH" },
          href: "https://api.spotify.com/v1/artists/4YW1GDcW9hobRPMDi8v6XH",
          id: "4YW1GDcW9hobRPMDi8v6XH",
          name: "Makari",
          type: "artist",
          uri: "spotify:artist:4YW1GDcW9hobRPMDi8v6XH"
        }
      ],
      available_markets: [
        "AD",
        "AE",
        "AG",
        "AL",
        "AM",
        "AO",
        "AR",
        "AT",
        "AU",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BN",
        "BO",
        "BR",
        "BS",
        "BT",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CD",
        "CG",
        "CH",
        "CI",
        "CL",
        "CM",
        "CO",
        "CR",
        "CV",
        "CW",
        "CY",
        "CZ",
        "DE",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FJ",
        "FM",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GR",
        "GT",
        "GW",
        "GY",
        "HK",
        "HN",
        "HR",
        "HT",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IQ",
        "IS",
        "IT",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KR",
        "KW",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MG",
        "MH",
        "MK",
        "ML",
        "MN",
        "MO",
        "MR",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NE",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PG",
        "PH",
        "PK",
        "PL",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RO",
        "RS",
        "RW",
        "SA",
        "SB",
        "SC",
        "SE",
        "SG",
        "SI",
        "SK",
        "SL",
        "SM",
        "SN",
        "SR",
        "ST",
        "SV",
        "SZ",
        "TD",
        "TG",
        "TH",
        "TJ",
        "TL",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "US",
        "UY",
        "UZ",
        "VC",
        "VE",
        "VN",
        "VU",
        "WS",
        "XK",
        "ZA",
        "ZM",
        "ZW"
      ],
      disc_number: 1,
      duration_ms: 240440,
      explicit: !1,
      external_ids: { isrc: "QMUYR1600309" },
      external_urls: { spotify: "https://open.spotify.com/track/2XCC1u8uCPWy6INWJqaP24" },
      href: "https://api.spotify.com/v1/tracks/2XCC1u8uCPWy6INWJqaP24",
      id: "2XCC1u8uCPWy6INWJqaP24",
      is_local: !1,
      name: "Melt",
      popularity: 28,
      preview_url: "https://p.scdn.co/mp3-preview/b745ebf3f0506571e218e3d6a49df8db158bfca5?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 4,
      type: "track",
      uri: "spotify:track:2XCC1u8uCPWy6INWJqaP24"
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/1aK2PiGHyEgc4wAIKQzMj2"
            },
            href: "https://api.spotify.com/v1/artists/1aK2PiGHyEgc4wAIKQzMj2",
            id: "1aK2PiGHyEgc4wAIKQzMj2",
            name: "I The Mighty",
            type: "artist",
            uri: "spotify:artist:1aK2PiGHyEgc4wAIKQzMj2"
          }
        ],
        available_markets: [
          "AD",
          "AE",
          "AL",
          "AM",
          "AO",
          "AR",
          "AT",
          "AU",
          "AZ",
          "BA",
          "BD",
          "BE",
          "BF",
          "BG",
          "BH",
          "BI",
          "BJ",
          "BN",
          "BO",
          "BR",
          "BT",
          "BW",
          "BY",
          "CD",
          "CG",
          "CH",
          "CI",
          "CL",
          "CM",
          "CO",
          "CV",
          "CW",
          "CY",
          "CZ",
          "DE",
          "DJ",
          "DK",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FJ",
          "FM",
          "FR",
          "GA",
          "GB",
          "GE",
          "GH",
          "GM",
          "GN",
          "GQ",
          "GR",
          "GW",
          "GY",
          "HK",
          "HR",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IQ",
          "IS",
          "IT",
          "JO",
          "JP",
          "KE",
          "KG",
          "KH",
          "KI",
          "KM",
          "KR",
          "KW",
          "KZ",
          "LA",
          "LB",
          "LI",
          "LK",
          "LR",
          "LS",
          "LT",
          "LU",
          "LV",
          "LY",
          "MA",
          "MC",
          "MD",
          "ME",
          "MG",
          "MH",
          "MK",
          "ML",
          "MN",
          "MO",
          "MR",
          "MT",
          "MU",
          "MV",
          "MW",
          "MY",
          "MZ",
          "NA",
          "NE",
          "NG",
          "NL",
          "NO",
          "NP",
          "NR",
          "NZ",
          "OM",
          "PE",
          "PG",
          "PH",
          "PK",
          "PL",
          "PS",
          "PT",
          "PW",
          "PY",
          "QA",
          "RO",
          "RS",
          "RW",
          "SA",
          "SB",
          "SC",
          "SE",
          "SG",
          "SI",
          "SK",
          "SL",
          "SM",
          "SN",
          "SR",
          "ST",
          "SZ",
          "TD",
          "TG",
          "TH",
          "TJ",
          "TL",
          "TN",
          "TO",
          "TR",
          "TV",
          "TW",
          "TZ",
          "UA",
          "UG",
          "UY",
          "UZ",
          "VE",
          "VN",
          "VU",
          "WS",
          "XK",
          "ZA",
          "ZM",
          "ZW"
        ],
        external_urls: { spotify: "https://open.spotify.com/album/1cUw3PArs79Nu0Uf6Wi95u" },
        href: "https://api.spotify.com/v1/albums/1cUw3PArs79Nu0Uf6Wi95u",
        id: "1cUw3PArs79Nu0Uf6Wi95u",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273803623a9a46752ad15c87da6",
            width: 640
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e02803623a9a46752ad15c87da6",
            width: 300
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d00004851803623a9a46752ad15c87da6",
            width: 64
          }
        ],
        name: "Where the Mind Wants to Go / Where You Let It Go",
        release_date: "2017-10-20",
        release_date_precision: "day",
        total_tracks: 11,
        type: "album",
        uri: "spotify:album:1cUw3PArs79Nu0Uf6Wi95u"
      },
      artists: [
        {
          external_urls: { spotify: "https://open.spotify.com/artist/1aK2PiGHyEgc4wAIKQzMj2" },
          href: "https://api.spotify.com/v1/artists/1aK2PiGHyEgc4wAIKQzMj2",
          id: "1aK2PiGHyEgc4wAIKQzMj2",
          name: "I The Mighty",
          type: "artist",
          uri: "spotify:artist:1aK2PiGHyEgc4wAIKQzMj2"
        }
      ],
      available_markets: [
        "AD",
        "AE",
        "AL",
        "AM",
        "AO",
        "AR",
        "AT",
        "AU",
        "AZ",
        "BA",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BN",
        "BO",
        "BR",
        "BT",
        "BW",
        "BY",
        "CD",
        "CG",
        "CH",
        "CI",
        "CL",
        "CM",
        "CO",
        "CV",
        "CW",
        "CY",
        "CZ",
        "DE",
        "DJ",
        "DK",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FJ",
        "FM",
        "FR",
        "GA",
        "GB",
        "GE",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GR",
        "GW",
        "GY",
        "HK",
        "HR",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IQ",
        "IS",
        "IT",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KR",
        "KW",
        "KZ",
        "LA",
        "LB",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MG",
        "MH",
        "MK",
        "ML",
        "MN",
        "MO",
        "MR",
        "MT",
        "MU",
        "MV",
        "MW",
        "MY",
        "MZ",
        "NA",
        "NE",
        "NG",
        "NL",
        "NO",
        "NP",
        "NR",
        "NZ",
        "OM",
        "PE",
        "PG",
        "PH",
        "PK",
        "PL",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RO",
        "RS",
        "RW",
        "SA",
        "SB",
        "SC",
        "SE",
        "SG",
        "SI",
        "SK",
        "SL",
        "SM",
        "SN",
        "SR",
        "ST",
        "SZ",
        "TD",
        "TG",
        "TH",
        "TJ",
        "TL",
        "TN",
        "TO",
        "TR",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "UY",
        "UZ",
        "VE",
        "VN",
        "VU",
        "WS",
        "XK",
        "ZA",
        "ZM",
        "ZW"
      ],
      disc_number: 1,
      duration_ms: 194537,
      explicit: !1,
      external_ids: { isrc: "ITH711700089" },
      external_urls: { spotify: "https://open.spotify.com/track/2aOIWYsoyff9nrvEnLe5iu" },
      href: "https://api.spotify.com/v1/tracks/2aOIWYsoyff9nrvEnLe5iu",
      id: "2aOIWYsoyff9nrvEnLe5iu",
      is_local: !1,
      name: "Chaos in Motion",
      popularity: 23,
      preview_url: "https://p.scdn.co/mp3-preview/ed14947c9844a49e1afbdcf03866079d36b43a50?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 3,
      type: "track",
      uri: "spotify:track:2aOIWYsoyff9nrvEnLe5iu"
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/6Ad91Jof8Niiw0lGLLi3NW"
            },
            href: "https://api.spotify.com/v1/artists/6Ad91Jof8Niiw0lGLLi3NW",
            id: "6Ad91Jof8Niiw0lGLLi3NW",
            name: "YUNGBLUD",
            type: "artist",
            uri: "spotify:artist:6Ad91Jof8Niiw0lGLLi3NW"
          }
        ],
        available_markets: [
          "AD",
          "AE",
          "AG",
          "AL",
          "AM",
          "AO",
          "AR",
          "AT",
          "AU",
          "AZ",
          "BA",
          "BB",
          "BD",
          "BE",
          "BG",
          "BH",
          "BI",
          "BJ",
          "BO",
          "BR",
          "BS",
          "BT",
          "BW",
          "BY",
          "BZ",
          "CA",
          "CD",
          "CG",
          "CH",
          "CI",
          "CL",
          "CM",
          "CO",
          "CR",
          "CV",
          "CW",
          "CY",
          "CZ",
          "DE",
          "DJ",
          "DK",
          "DM",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FJ",
          "FM",
          "FR",
          "GA",
          "GB",
          "GD",
          "GE",
          "GH",
          "GM",
          "GN",
          "GQ",
          "GR",
          "GT",
          "GW",
          "GY",
          "HK",
          "HN",
          "HR",
          "HT",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IQ",
          "IS",
          "IT",
          "JM",
          "JO",
          "JP",
          "KE",
          "KG",
          "KH",
          "KI",
          "KM",
          "KN",
          "KR",
          "KW",
          "KZ",
          "LA",
          "LB",
          "LC",
          "LI",
          "LK",
          "LR",
          "LS",
          "LT",
          "LU",
          "LV",
          "LY",
          "MA",
          "MC",
          "MD",
          "ME",
          "MG",
          "MH",
          "MK",
          "ML",
          "MN",
          "MO",
          "MR",
          "MT",
          "MU",
          "MV",
          "MW",
          "MX",
          "MY",
          "MZ",
          "NA",
          "NE",
          "NG",
          "NI",
          "NL",
          "NO",
          "NP",
          "NR",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PG",
          "PH",
          "PK",
          "PL",
          "PS",
          "PT",
          "PW",
          "PY",
          "QA",
          "RO",
          "RS",
          "RW",
          "SA",
          "SB",
          "SC",
          "SE",
          "SG",
          "SI",
          "SK",
          "SL",
          "SM",
          "SN",
          "SR",
          "ST",
          "SV",
          "SZ",
          "TD",
          "TG",
          "TH",
          "TJ",
          "TL",
          "TN",
          "TO",
          "TR",
          "TT",
          "TV",
          "TW",
          "TZ",
          "UA",
          "UG",
          "US",
          "UY",
          "UZ",
          "VC",
          "VE",
          "VN",
          "VU",
          "WS",
          "XK",
          "ZA",
          "ZM",
          "ZW"
        ],
        external_urls: { spotify: "https://open.spotify.com/album/1p64R5tjTpC2oH24YLdQgq" },
        href: "https://api.spotify.com/v1/albums/1p64R5tjTpC2oH24YLdQgq",
        id: "1p64R5tjTpC2oH24YLdQgq",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b273c783f6b606da7235a9c79dd3",
            width: 640
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e02c783f6b606da7235a9c79dd3",
            width: 300
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d00004851c783f6b606da7235a9c79dd3",
            width: 64
          }
        ],
        name: "21st Century Liability",
        release_date: "2018-07-06",
        release_date_precision: "day",
        total_tracks: 12,
        type: "album",
        uri: "spotify:album:1p64R5tjTpC2oH24YLdQgq"
      },
      artists: [
        {
          external_urls: { spotify: "https://open.spotify.com/artist/6Ad91Jof8Niiw0lGLLi3NW" },
          href: "https://api.spotify.com/v1/artists/6Ad91Jof8Niiw0lGLLi3NW",
          id: "6Ad91Jof8Niiw0lGLLi3NW",
          name: "YUNGBLUD",
          type: "artist",
          uri: "spotify:artist:6Ad91Jof8Niiw0lGLLi3NW"
        }
      ],
      available_markets: [
        "AD",
        "AE",
        "AG",
        "AL",
        "AM",
        "AO",
        "AR",
        "AT",
        "AU",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BO",
        "BR",
        "BS",
        "BT",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CD",
        "CG",
        "CH",
        "CI",
        "CL",
        "CM",
        "CO",
        "CR",
        "CV",
        "CW",
        "CY",
        "CZ",
        "DE",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FJ",
        "FM",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GR",
        "GT",
        "GW",
        "GY",
        "HK",
        "HN",
        "HR",
        "HT",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IQ",
        "IS",
        "IT",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KR",
        "KW",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MG",
        "MH",
        "MK",
        "ML",
        "MN",
        "MO",
        "MR",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NE",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PG",
        "PH",
        "PK",
        "PL",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RO",
        "RS",
        "RW",
        "SA",
        "SB",
        "SC",
        "SE",
        "SG",
        "SI",
        "SK",
        "SL",
        "SM",
        "SN",
        "SR",
        "ST",
        "SV",
        "SZ",
        "TD",
        "TG",
        "TH",
        "TJ",
        "TL",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "US",
        "UY",
        "UZ",
        "VC",
        "VE",
        "VN",
        "VU",
        "WS",
        "XK",
        "ZA",
        "ZM",
        "ZW"
      ],
      disc_number: 1,
      duration_ms: 167700,
      explicit: !1,
      external_ids: { isrc: "USUG11800005" },
      external_urls: { spotify: "https://open.spotify.com/track/3vVkxjrTP4SM1Ogq68LoXW" },
      href: "https://api.spotify.com/v1/tracks/3vVkxjrTP4SM1Ogq68LoXW",
      id: "3vVkxjrTP4SM1Ogq68LoXW",
      is_local: !1,
      name: "Anarchist",
      popularity: 54,
      preview_url: "https://p.scdn.co/mp3-preview/bba9c783f1795aa5b520dc8599b92d89a527569d?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 7,
      type: "track",
      uri: "spotify:track:3vVkxjrTP4SM1Ogq68LoXW"
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0hp58JplihFjlLstUbKS0x"
            },
            href: "https://api.spotify.com/v1/artists/0hp58JplihFjlLstUbKS0x",
            id: "0hp58JplihFjlLstUbKS0x",
            name: "The Home Team",
            type: "artist",
            uri: "spotify:artist:0hp58JplihFjlLstUbKS0x"
          }
        ],
        available_markets: [
          "AD",
          "AE",
          "AG",
          "AL",
          "AM",
          "AO",
          "AR",
          "AT",
          "AU",
          "AZ",
          "BA",
          "BB",
          "BD",
          "BE",
          "BF",
          "BG",
          "BH",
          "BI",
          "BJ",
          "BN",
          "BO",
          "BR",
          "BS",
          "BT",
          "BW",
          "BY",
          "BZ",
          "CA",
          "CD",
          "CG",
          "CH",
          "CI",
          "CL",
          "CM",
          "CO",
          "CR",
          "CV",
          "CW",
          "CY",
          "CZ",
          "DE",
          "DJ",
          "DK",
          "DM",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FJ",
          "FM",
          "FR",
          "GA",
          "GB",
          "GD",
          "GE",
          "GH",
          "GM",
          "GN",
          "GQ",
          "GR",
          "GT",
          "GW",
          "GY",
          "HK",
          "HN",
          "HR",
          "HT",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IQ",
          "IS",
          "IT",
          "JM",
          "JO",
          "JP",
          "KE",
          "KG",
          "KH",
          "KI",
          "KM",
          "KN",
          "KR",
          "KW",
          "KZ",
          "LA",
          "LB",
          "LC",
          "LI",
          "LK",
          "LR",
          "LS",
          "LT",
          "LU",
          "LV",
          "LY",
          "MA",
          "MC",
          "MD",
          "ME",
          "MG",
          "MH",
          "MK",
          "ML",
          "MN",
          "MO",
          "MR",
          "MT",
          "MU",
          "MV",
          "MW",
          "MX",
          "MY",
          "MZ",
          "NA",
          "NE",
          "NG",
          "NI",
          "NL",
          "NO",
          "NP",
          "NR",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PG",
          "PH",
          "PK",
          "PL",
          "PS",
          "PT",
          "PW",
          "PY",
          "QA",
          "RO",
          "RS",
          "RW",
          "SA",
          "SB",
          "SC",
          "SE",
          "SG",
          "SI",
          "SK",
          "SL",
          "SM",
          "SN",
          "SR",
          "ST",
          "SV",
          "SZ",
          "TD",
          "TG",
          "TH",
          "TJ",
          "TL",
          "TN",
          "TO",
          "TR",
          "TT",
          "TV",
          "TW",
          "TZ",
          "UA",
          "UG",
          "US",
          "UY",
          "UZ",
          "VC",
          "VE",
          "VN",
          "VU",
          "WS",
          "XK",
          "ZA",
          "ZM",
          "ZW"
        ],
        external_urls: { spotify: "https://open.spotify.com/album/4qszaTKv9Ly2BtNC6OhLH8" },
        href: "https://api.spotify.com/v1/albums/4qszaTKv9Ly2BtNC6OhLH8",
        id: "4qszaTKv9Ly2BtNC6OhLH8",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b2739e7916f88767e81d29f7af75",
            width: 640
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e029e7916f88767e81d29f7af75",
            width: 300
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d000048519e7916f88767e81d29f7af75",
            width: 64
          }
        ],
        name: "Slow Bloom",
        release_date: "2021-10-22",
        release_date_precision: "day",
        total_tracks: 11,
        type: "album",
        uri: "spotify:album:4qszaTKv9Ly2BtNC6OhLH8"
      },
      artists: [
        {
          external_urls: { spotify: "https://open.spotify.com/artist/0hp58JplihFjlLstUbKS0x" },
          href: "https://api.spotify.com/v1/artists/0hp58JplihFjlLstUbKS0x",
          id: "0hp58JplihFjlLstUbKS0x",
          name: "The Home Team",
          type: "artist",
          uri: "spotify:artist:0hp58JplihFjlLstUbKS0x"
        }
      ],
      available_markets: [
        "AD",
        "AE",
        "AG",
        "AL",
        "AM",
        "AO",
        "AR",
        "AT",
        "AU",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BN",
        "BO",
        "BR",
        "BS",
        "BT",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CD",
        "CG",
        "CH",
        "CI",
        "CL",
        "CM",
        "CO",
        "CR",
        "CV",
        "CW",
        "CY",
        "CZ",
        "DE",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FJ",
        "FM",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GR",
        "GT",
        "GW",
        "GY",
        "HK",
        "HN",
        "HR",
        "HT",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IQ",
        "IS",
        "IT",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KR",
        "KW",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MG",
        "MH",
        "MK",
        "ML",
        "MN",
        "MO",
        "MR",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NE",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PG",
        "PH",
        "PK",
        "PL",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RO",
        "RS",
        "RW",
        "SA",
        "SB",
        "SC",
        "SE",
        "SG",
        "SI",
        "SK",
        "SL",
        "SM",
        "SN",
        "SR",
        "ST",
        "SV",
        "SZ",
        "TD",
        "TG",
        "TH",
        "TJ",
        "TL",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "US",
        "UY",
        "UZ",
        "VC",
        "VE",
        "VN",
        "VU",
        "WS",
        "XK",
        "ZA",
        "ZM",
        "ZW"
      ],
      disc_number: 1,
      duration_ms: 151983,
      explicit: !0,
      external_ids: { isrc: "QM6MZ2189496" },
      external_urls: { spotify: "https://open.spotify.com/track/0NlAVwtXrtyuV5fxxlSeUH" },
      href: "https://api.spotify.com/v1/tracks/0NlAVwtXrtyuV5fxxlSeUH",
      id: "0NlAVwtXrtyuV5fxxlSeUH",
      is_local: !1,
      name: "Move It or Lose It",
      popularity: 53,
      preview_url: "https://p.scdn.co/mp3-preview/a9bb7f56d6a62e21ab0e6d576f66c4b9b1a6afd1?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 1,
      type: "track",
      uri: "spotify:track:0NlAVwtXrtyuV5fxxlSeUH"
    },
    {
      album: {
        album_type: "album",
        artists: [
          {
            external_urls: {
              spotify: "https://open.spotify.com/artist/0XGJ3GUPwslwFJ66yNbHeh"
            },
            href: "https://api.spotify.com/v1/artists/0XGJ3GUPwslwFJ66yNbHeh",
            id: "0XGJ3GUPwslwFJ66yNbHeh",
            name: "Trash Boat",
            type: "artist",
            uri: "spotify:artist:0XGJ3GUPwslwFJ66yNbHeh"
          }
        ],
        available_markets: [
          "AD",
          "AE",
          "AG",
          "AL",
          "AM",
          "AO",
          "AR",
          "AT",
          "AU",
          "AZ",
          "BA",
          "BB",
          "BD",
          "BE",
          "BF",
          "BG",
          "BH",
          "BI",
          "BJ",
          "BN",
          "BO",
          "BR",
          "BS",
          "BT",
          "BW",
          "BY",
          "BZ",
          "CA",
          "CD",
          "CG",
          "CH",
          "CI",
          "CL",
          "CM",
          "CO",
          "CR",
          "CV",
          "CW",
          "CY",
          "CZ",
          "DE",
          "DJ",
          "DK",
          "DM",
          "DO",
          "DZ",
          "EC",
          "EE",
          "EG",
          "ES",
          "FI",
          "FJ",
          "FM",
          "FR",
          "GA",
          "GB",
          "GD",
          "GE",
          "GH",
          "GM",
          "GN",
          "GQ",
          "GR",
          "GT",
          "GW",
          "GY",
          "HK",
          "HN",
          "HR",
          "HT",
          "HU",
          "ID",
          "IE",
          "IL",
          "IN",
          "IQ",
          "IS",
          "IT",
          "JM",
          "JO",
          "JP",
          "KE",
          "KG",
          "KH",
          "KI",
          "KM",
          "KN",
          "KR",
          "KW",
          "KZ",
          "LA",
          "LB",
          "LC",
          "LI",
          "LK",
          "LR",
          "LS",
          "LT",
          "LU",
          "LV",
          "LY",
          "MA",
          "MC",
          "MD",
          "ME",
          "MG",
          "MH",
          "MK",
          "ML",
          "MN",
          "MO",
          "MR",
          "MT",
          "MU",
          "MV",
          "MW",
          "MX",
          "MY",
          "MZ",
          "NA",
          "NE",
          "NG",
          "NI",
          "NL",
          "NO",
          "NP",
          "NR",
          "NZ",
          "OM",
          "PA",
          "PE",
          "PG",
          "PH",
          "PK",
          "PL",
          "PS",
          "PT",
          "PW",
          "PY",
          "QA",
          "RO",
          "RS",
          "RW",
          "SA",
          "SB",
          "SC",
          "SE",
          "SG",
          "SI",
          "SK",
          "SL",
          "SM",
          "SN",
          "SR",
          "ST",
          "SV",
          "SZ",
          "TD",
          "TG",
          "TH",
          "TJ",
          "TL",
          "TN",
          "TO",
          "TR",
          "TT",
          "TV",
          "TW",
          "TZ",
          "UA",
          "UG",
          "US",
          "UY",
          "UZ",
          "VC",
          "VE",
          "VN",
          "VU",
          "WS",
          "XK",
          "ZA",
          "ZM",
          "ZW"
        ],
        external_urls: { spotify: "https://open.spotify.com/album/2pxn1lifrye1RIlrLDrzD3" },
        href: "https://api.spotify.com/v1/albums/2pxn1lifrye1RIlrLDrzD3",
        id: "2pxn1lifrye1RIlrLDrzD3",
        images: [
          {
            height: 640,
            url: "https://i.scdn.co/image/ab67616d0000b27325061f5dbac2bf1dcf22ac2a",
            width: 640
          },
          {
            height: 300,
            url: "https://i.scdn.co/image/ab67616d00001e0225061f5dbac2bf1dcf22ac2a",
            width: 300
          },
          {
            height: 64,
            url: "https://i.scdn.co/image/ab67616d0000485125061f5dbac2bf1dcf22ac2a",
            width: 64
          }
        ],
        name: "Don't You Feel Amazing?",
        release_date: "2021-08-13",
        release_date_precision: "day",
        total_tracks: 13,
        type: "album",
        uri: "spotify:album:2pxn1lifrye1RIlrLDrzD3"
      },
      artists: [
        {
          external_urls: { spotify: "https://open.spotify.com/artist/0XGJ3GUPwslwFJ66yNbHeh" },
          href: "https://api.spotify.com/v1/artists/0XGJ3GUPwslwFJ66yNbHeh",
          id: "0XGJ3GUPwslwFJ66yNbHeh",
          name: "Trash Boat",
          type: "artist",
          uri: "spotify:artist:0XGJ3GUPwslwFJ66yNbHeh"
        }
      ],
      available_markets: [
        "AD",
        "AE",
        "AG",
        "AL",
        "AM",
        "AO",
        "AR",
        "AT",
        "AU",
        "AZ",
        "BA",
        "BB",
        "BD",
        "BE",
        "BF",
        "BG",
        "BH",
        "BI",
        "BJ",
        "BN",
        "BO",
        "BR",
        "BS",
        "BT",
        "BW",
        "BY",
        "BZ",
        "CA",
        "CD",
        "CG",
        "CH",
        "CI",
        "CL",
        "CM",
        "CO",
        "CR",
        "CV",
        "CW",
        "CY",
        "CZ",
        "DE",
        "DJ",
        "DK",
        "DM",
        "DO",
        "DZ",
        "EC",
        "EE",
        "EG",
        "ES",
        "FI",
        "FJ",
        "FM",
        "FR",
        "GA",
        "GB",
        "GD",
        "GE",
        "GH",
        "GM",
        "GN",
        "GQ",
        "GR",
        "GT",
        "GW",
        "GY",
        "HK",
        "HN",
        "HR",
        "HT",
        "HU",
        "ID",
        "IE",
        "IL",
        "IN",
        "IQ",
        "IS",
        "IT",
        "JM",
        "JO",
        "JP",
        "KE",
        "KG",
        "KH",
        "KI",
        "KM",
        "KN",
        "KR",
        "KW",
        "KZ",
        "LA",
        "LB",
        "LC",
        "LI",
        "LK",
        "LR",
        "LS",
        "LT",
        "LU",
        "LV",
        "LY",
        "MA",
        "MC",
        "MD",
        "ME",
        "MG",
        "MH",
        "MK",
        "ML",
        "MN",
        "MO",
        "MR",
        "MT",
        "MU",
        "MV",
        "MW",
        "MX",
        "MY",
        "MZ",
        "NA",
        "NE",
        "NG",
        "NI",
        "NL",
        "NO",
        "NP",
        "NR",
        "NZ",
        "OM",
        "PA",
        "PE",
        "PG",
        "PH",
        "PK",
        "PL",
        "PS",
        "PT",
        "PW",
        "PY",
        "QA",
        "RO",
        "RS",
        "RW",
        "SA",
        "SB",
        "SC",
        "SE",
        "SG",
        "SI",
        "SK",
        "SL",
        "SM",
        "SN",
        "SR",
        "ST",
        "SV",
        "SZ",
        "TD",
        "TG",
        "TH",
        "TJ",
        "TL",
        "TN",
        "TO",
        "TR",
        "TT",
        "TV",
        "TW",
        "TZ",
        "UA",
        "UG",
        "US",
        "UY",
        "UZ",
        "VC",
        "VE",
        "VN",
        "VU",
        "WS",
        "XK",
        "ZA",
        "ZM",
        "ZW"
      ],
      disc_number: 1,
      duration_ms: 226520,
      explicit: !0,
      external_ids: { isrc: "USHR22192001" },
      external_urls: { spotify: "https://open.spotify.com/track/7pKobU7htR1875GflYkkd2" },
      href: "https://api.spotify.com/v1/tracks/7pKobU7htR1875GflYkkd2",
      id: "7pKobU7htR1875GflYkkd2",
      is_local: !1,
      name: "He's So Good",
      popularity: 46,
      preview_url: "https://p.scdn.co/mp3-preview/2e375ee2ae942ecef4740e063a01fa1c9e684095?cid=774b29d4f13844c495f206cafdad9c86",
      track_number: 5,
      type: "track",
      uri: "spotify:track:7pKobU7htR1875GflYkkd2"
    }
  ]
};

// app/utils/helpers/getAlbums.ts
function getAlbums() {
  return tracks_default.tracks.map(({ album, artists }) => {
    let { id, images: covers, name: albumName } = album, { id: artistId, name: artistName } = artists[0], albumArtist = artists_default.artists.find(({ id: id2 }) => id2 === artistId);
    return {
      id,
      album: {
        name: albumName,
        image: covers[1].url
      },
      artist: {
        name: artistName,
        image: albumArtist?.images[2].url
      }
    };
  });
}

// app/utils/helpers/getExperience.ts
function getExperience() {
  let today = /* @__PURE__ */ new Date(), startDate = /* @__PURE__ */ new Date("05/01/2015"), diff = today.valueOf() - startDate.valueOf(), timeDiff = new Date(diff);
  return Math.abs(timeDiff.getUTCFullYear() - 1970);
}

// app/utils/hooks/useUserAgent.ts
import { useState, useEffect } from "react";
function useUserAgent() {
  let [userAgent, setUserAgent] = useState("");
  return useEffect(() => {
    navigator && setUserAgent(navigator.userAgent);
  }, [userAgent]), userAgent;
}

// app/utils/hooks/useAnimations.ts
import { useEffect as useEffect5, useCallback, useRef as useRef2 } from "react";
import gsap from "gsap";

// app/utils/animations/about.ts
function animateAbout(gsap3, screenWidths) {
  let tl = gsap3.timeline({
    scrollTrigger: {
      scrub: !0,
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
  ), gsap3.to(".skull" /* skull */, {
    rotation: 360 * 2.98,
    scale: 1,
    ease: "power1.inOut",
    duration: 1,
    scrollTrigger: ".skull" /* skull */
  }), tl.to(
    ".skull" /* skull */,
    {
      y: -140,
      ease: "power1.inOut"
    },
    0
  );
}

// app/utils/animations/albums.ts
function animateInspiration(gsap3, container, width, screenWidths, Draggable) {
  let { offsetHeight: sectionHeight } = container, handleGetPosition = (value) => `random(-15, ${value})`;
  function getAlbumSectionSize() {
    if (screenWidths.phoneOnly)
      return {
        x: handleGetPosition(width / 2),
        y: handleGetPosition(sectionHeight - 150)
      };
    if (screenWidths.bigDesktopUp)
      return {
        x: handleGetPosition(1280 / 1.4),
        y: handleGetPosition(sectionHeight - 300)
      };
    if (screenWidths.desktopUp)
      return {
        x: handleGetPosition(width / 1.65),
        y: handleGetPosition(sectionHeight - 300)
      };
    if (screenWidths.laptopUp)
      return {
        x: handleGetPosition(width / 1.5),
        y: handleGetPosition(sectionHeight - 250)
      };
    if (screenWidths.phoneUp)
      return {
        x: handleGetPosition(width / 1.75),
        y: handleGetPosition(sectionHeight - 250)
      };
  }
  let tl = gsap3.timeline({
    scrollTrigger: {
      trigger: ".albumList" /* container */
    }
  });
  gsap3.to(".album" /* album */, { x: "-200%" }), tl.to(
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
  ), Draggable.create(".album" /* album */, {
    type: "x,y",
    edgeResistance: 0.65,
    bounds: ".main",
    inertia: !0
  });
}

// app/utils/animations/bgColor.ts
function animateBgColorOnScroll(gsap3, container) {
  let { offsetHeight: containerHeight } = container;
  gsap3.to(container, { backgroundColor: "#0098a8" /* turquoise200 */ }), gsap3.timeline({
    scrollTrigger: {
      scrub: !0,
      end: () => `+=${containerHeight - 750}`
    }
  }).to(
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
function animateContact(gsap3) {
  let randomX = random(10, 40), randomY = random(20, 60), randomTime = random(1, 3), randomTime2 = random(3, 5), randomAngle = random(5, 8);
  gsap3.set(target, {
    x: randomX(-1),
    y: randomX(1),
    rotation: randomAngle(-1)
  }), moveX(target, 1), moveY(target, -1), rotate(target, 1);
  function rotate(target2, direction2) {
    gsap3.to(target2, {
      duration: randomTime2(),
      rotation: randomAngle(direction2),
      // delay: randomDelay(),
      ease: "Sine.easeInOut",
      onComplete: rotate,
      onCompleteParams: [target2, direction2 * -1]
    });
  }
  function moveX(target2, direction2) {
    gsap3.to(target2, {
      duration: randomTime(),
      x: randomX(direction2),
      ease: "Sine.easeInOut",
      onComplete: moveX,
      onCompleteParams: [target2, direction2 * -1]
    });
  }
  function moveY(target2, direction2) {
    gsap3.to(target2, {
      duration: randomTime(),
      y: randomY(direction2),
      ease: "Sine.easeInOut",
      onComplete: moveY,
      onCompleteParams: [target2, direction2 * -1]
    });
  }
  function random(min, max) {
    let delta = max - min;
    return (direction2 = 1) => (min + delta * Math.random()) * direction2;
  }
}

// app/utils/animations/mobileMenu.ts
var ease = "Sine.easeInOut", visible = { duration: 0.1, autoAlpha: 1, ease }, invisible = { duration: 0.1, autoAlpha: 0, ease };
function disableScroll() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop, scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
  window.onscroll = function() {
    window.scrollTo(scrollLeft, scrollTop);
  };
}
function enableScroll() {
  window.onscroll = function() {
  };
}
function animateMobileMenu(gsap3) {
  function openMenu() {
    disableScroll(), gsap3.to("body", { duration: 0.1, overflow: "hidden" }), gsap3.to(".mobileMenu" /* menu */, {
      ...visible,
      duration: 0.25,
      pointerEvents: "auto",
      x: "0%"
    }), gsap3.to(".openMenuBtn" /* openBtn */, invisible), gsap3.to(".closeMenuBtn" /* closeBtn */, visible);
  }
  function closeMenu() {
    enableScroll(), gsap3.to("body", { overflow: "auto" }), gsap3.to(".mobileMenu" /* menu */, {
      ...invisible,
      duration: 0.25,
      pointerEvents: "none",
      x: "100%"
    }), gsap3.to(".openMenuBtn" /* openBtn */, visible), gsap3.to(".closeMenuBtn" /* closeBtn */, invisible);
  }
  return { openMenu, closeMenu };
}

// app/utils/animations/smoothScroll.ts
function animateSmoothScroll(gsap3) {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      let section = link.getAttribute("href");
      if (link.getAttribute("data-type") === "mobile") {
        let { closeMenu } = animateMobileMenu(gsap3);
        closeMenu();
      }
      gsap3.to(window, { duration: 1, scrollTo: { y: section, offsetY: -70 } });
    });
  });
}

// app/utils/animations/stack.ts
function animateStack(gsap3) {
  gsap3.timeline({
    scrollTrigger: {
      scrub: !0,
      trigger: "#stack" /* container */,
      start: "top 70%"
    }
  }).to(
    ".skelly" /* skelly */,
    {
      y: -180,
      ease: "power1.inOut"
    },
    0
  );
}

// app/utils/hooks/useIsMounted.ts
import { useState as useState2, useEffect as useEffect2 } from "react";
function useIsMounted() {
  let [isMounted, setIsMounted] = useState2(!1);
  return useEffect2(() => {
    isMounted || setIsMounted(!0);
  }, [isMounted]), isMounted;
}

// app/utils/hooks/useWindowSize.ts
import { useState as useState3 } from "react";

// app/utils/hooks/useEventListener.ts
import { useEffect as useEffect4, useRef } from "react";

// app/utils/hooks/useIsomorphicLayoutEffect.ts
import { useEffect as useEffect3, useLayoutEffect } from "react";
var useIsomorphicLayoutEffect = typeof window < "u" ? useLayoutEffect : useEffect3;

// app/utils/hooks/useEventListener.ts
function useEventListener(eventName, handler, element, options) {
  let savedHandler = useRef(handler);
  useIsomorphicLayoutEffect(() => {
    savedHandler.current = handler;
  }, [handler]), useEffect4(() => {
    let targetElement = element?.current ?? window;
    if (!(targetElement && targetElement.addEventListener))
      return;
    let listener = (event) => savedHandler.current(event);
    return targetElement.addEventListener(eventName, listener, options), () => {
      targetElement.removeEventListener(eventName, listener, options);
    };
  }, [eventName, element, options]);
}

// app/utils/hooks/useWindowSize.ts
function useWindowSize() {
  let [windowSize, setWindowSize] = useState3({
    width: 0,
    height: 0
  }), handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };
  return useEventListener("resize", handleSize), useIsomorphicLayoutEffect(() => {
    handleSize();
  }, []), windowSize;
}

// app/utils/hooks/useScreenWidths.ts
import { useMemo } from "react";
function useScreenWidths() {
  let { width } = useWindowSize();
  return useMemo(
    () => ({
      phoneOnly: width < 480,
      phoneUp: width >= 480,
      laptopUp: width >= 1024,
      desktopUp: width >= 1280,
      bigDesktopUp: width >= 1536
    }),
    [width]
  );
}

// app/utils/hooks/useAnimations.ts
function useAnimations() {
  let ScrollTrigger = useRef2(null), ScrollToPlugin = useRef2(null), Draggable = useRef2(null), isMounted = useIsMounted(), { width } = useWindowSize(), screenWidths = useScreenWidths();
  return useEffect5(() => {
    ScrollTrigger.current = __require("gsap/ScrollTrigger").ScrollTrigger, ScrollToPlugin.current = __require("gsap/ScrollToPlugin").ScrollToPlugin, Draggable.current = __require("gsap/Draggable").Draggable, [ScrollTrigger, ScrollToPlugin, Draggable].forEach((plugin) => {
      plugin?.current && gsap.registerPlugin(plugin.current);
    });
  }, [isMounted]), {
    animateSmoothScroll: useCallback(() => {
      isMounted && animateSmoothScroll(gsap);
    }, [isMounted]),
    animateMobileMenu: useCallback(() => {
      if (isMounted)
        return animateMobileMenu(gsap);
    }, [isMounted]),
    animateBgColorOnScroll: useCallback(
      (container) => {
        isMounted && animateBgColorOnScroll(gsap, container);
      },
      [isMounted]
    ),
    animateAbout: useCallback(() => {
      isMounted && animateAbout(gsap, screenWidths);
    }, [isMounted, screenWidths]),
    animateStack: useCallback(() => {
      isMounted && animateStack(gsap);
    }, [isMounted]),
    animateInspiration: useCallback(
      (container) => {
        isMounted && Draggable.current && animateInspiration(gsap, container, width, screenWidths, Draggable.current);
      },
      [isMounted, width, screenWidths]
    ),
    animateContact: useCallback(() => {
      isMounted && animateContact(gsap);
    }, [isMounted])
  };
}

// app/utils/hooks/useCreateImageInteraction.ts
import { useCallback as useCallback2 } from "react";

// app/utils/canvas-image-interaction/index.ts
import gsap2 from "gsap";

// app/utils/canvas-image-interaction/lib/utils.js
var randomIntegerFromRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min), dist = (a, b) => Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)), splitArray = (array, n) => {
  let [...arr] = array, res = [];
  for (; arr.length; )
    res.push(arr.splice(0, n));
  return res;
}, returnPixelColor = (imageData, width, position2) => {
  let index = (position2.x + position2.y * width) * 4, pixel = {
    r: imageData.data[index + 0],
    g: imageData.data[index + 1],
    b: imageData.data[index + 2]
  };
  return `rgb(${pixel.r}, ${pixel.g}, ${pixel.b})`;
}, toDataURL = (url) => new Promise((resolve, reject) => {
  let xhr = new XMLHttpRequest();
  xhr.onload = function() {
    let reader = new FileReader();
    reader.onloadend = function() {
      resolve(reader.result);
    }, reader.readAsDataURL(xhr.response);
  }, xhr.onerror = reject, xhr.open("GET", url), xhr.responseType = "blob", xhr.send();
}), returnImageData = (image, dimensions) => {
  let imageCanvas = document.createElement("canvas"), imageCanvasCtx = imageCanvas.getContext("2d");
  return imageCanvas.width = dimensions.width, imageCanvas.height = dimensions.height, imageCanvasCtx.drawImage(image, 0, 0, imageCanvas.width, imageCanvas.height), imageCanvasCtx.getImageData(0, 0, imageCanvas.width, imageCanvas.height);
}, loadImage = (imageURL, callback) => {
  toDataURL(imageURL).then((data) => {
    let IMAGE = new Image();
    IMAGE.src = data, IMAGE.onload = function() {
      callback(IMAGE);
    };
  });
}, loadImages = (imagesURLS, callback) => {
  let totalImageToLoad = imagesURLS.length, curentImageIndex = 0, imagesArray = [], load = () => {
    loadImage(imagesURLS[curentImageIndex], (image) => {
      imagesArray.push(image), curentImageIndex++, curentImageIndex === totalImageToLoad ? callback(imagesArray) : load();
    });
  };
  load();
};

// app/utils/canvas-image-interaction/lib/particle.js
var Particle = class {
  constructor(options = {}) {
    this.ctx = options.ctx, this.position = options.position || {
      x: 0,
      y: 0
    }, this.maxVelocity = options.maxVelocity || 5, this.velocity = options.velocity || {
      x: (0.5 - Math.random()) * this.maxVelocity,
      y: (0.5 - Math.random()) * this.maxVelocity
    }, this.radius = options.radius, this.minRadius = this.radius, this.color = options.color, this.imageData = options.imageData, this.rotation = 0, this.rotationIncrement = randomIntegerFromRange(2, 5), this.stroke = !1, this.fill = !0, this.shape = options.shape || "circle", this.edges = options.edges || null, this.bounceFromEdges = options.bounceFromEdges, this.avoidEdges = options.avoidEdges || !1, this.tick = 0, this.tickIncrement = 0.02 + Math.random() * 0.03;
  }
  draw() {
    this.ctx.beginPath(), this.ctx.save(), this.ctx.translate(this.position.x, this.position.y), this.ctx.rotate(Math.PI / 180 * this.rotation), this.drawShape(this.shape), this.ctx.restore(), this.ctx.closePath();
  }
  fillShape() {
    this.ctx.fillStyle = this.color, this.ctx.fill();
  }
  strokeShape() {
    this.ctx.strokeStyle = this.color, this.ctx.stroke();
  }
  drawShape(shape) {
    if (shape === "square")
      this.ctx.rect(-this.radius / 2, -this.radius / 2, this.radius, this.radius);
    else if (shape === "circle")
      this.ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
    else if (shape === "hexagon") {
      this.ctx.moveTo(this.radius * Math.cos(0), this.radius * Math.sin(0));
      for (let side = 0; side < 7; side++)
        this.ctx.lineTo(
          this.radius * Math.cos(side * 2 * Math.PI / 6),
          this.radius * Math.sin(side * 2 * Math.PI / 6)
        );
    }
  }
  update() {
    this.bounceFromEdges ? this.changeVelocityOnBounce(this.edges) : this.continueFromEdge(), this.rotation += this.rotationIncrement, this.tick += this.tickIncrement;
  }
  updatePosition() {
    this.position.x += this.velocity.x, this.position.y += this.velocity.y;
  }
  jumpToRandomPosition(bounds) {
    this.position.x = Math.random() * bounds.width, this.position.y = Math.random() * bounds.height;
  }
  growAndShrink(max) {
    this.radius = this.minRadius + Math.abs(Math.sin(this.tick)) * max;
  }
  updateColor(color2) {
    this.color = color2;
  }
  continueFromEdge() {
    this.avoidEdges || (this.position.x > this.edges.width ? this.position.x = 0 : this.position.x < 0 && (this.position.x = this.edges.width), this.position.y > this.edges.height ? this.position.y = 0 : this.position.y < 0 && (this.position.y = this.edges.height));
  }
  changeVelocityOnBounce() {
    this.avoidEdges || ((this.position.x + this.radius > this.edges.width || this.position.x - this.radius < 0) && (this.velocity.x *= -1), (this.position.y + this.radius > this.edges.height || this.position.y - this.radius < 0) && (this.velocity.y *= -1));
  }
};

// app/utils/canvas-image-interaction/lib/particles.js
var Particles = class {
  constructor(options = {}) {
    this.ctx = options.ctx, this.totalParticles = options.totalParticles, this.maxBounds = options.maxBounds, this.imageData = options.imageData, this.particles = [], this.particlesConfig = {
      jumpToRandomPosition: options.particlesConfig.jumpToRandomPosition || !1,
      growAndShrink: options.particlesConfig.growAndShrink || !1,
      fill: options.particlesConfig.fill || !0,
      bounceFromEdges: options.particlesConfig.bounceFromEdges || !0,
      shape: options.particlesConfig.shape || "circle",
      radius: options.particlesConfig.radius || 5,
      randomRadius: options.particlesConfig.randomRadius || !1,
      maxRadius: options.particlesConfig.maxRadius || 5,
      minRadius: options.particlesConfig.minRadius || 2,
      maxVelocity: options.particlesConfig.maxVelocity || 8
    }, this.init();
  }
  init() {
    let ctx = this.ctx, color2 = "transparent";
    for (let i = 0; i < this.totalParticles; i++) {
      let radius = this.particlesConfig.randomRadius ? randomIntegerFromRange(this.particlesConfig.minRadius, this.particlesConfig.maxRadius) : this.particlesConfig.radius, position2 = {
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
      particle.draw(), this.particlesConfig.fill ? particle.fillShape() : particle.strokeShape(), particle.update(), this.particlesConfig.growAndShrink && particle.growAndShrink(particle.minRadius * 0.65), this.particlesConfig.jumpToRandomPosition ? particle.jumpToRandomPosition({
        width: this.maxBounds.width,
        height: this.maxBounds.height
      }) : particle.updatePosition();
    });
  }
};

// app/utils/canvas-image-interaction/lib/canvas.js
var Canvas = class {
  constructor(options = {}) {
    this.parent = options.parent, this.dimensions = options.dimensions, this.imageURL = options.imageURL || {}, this.images = options.images || {}, this.imagesData = options.imagesData || {
      default: null,
      hovered: null
    }, this.currentImageData = null, this.particles = null, this.totalParticles = options.totalParticles || 400, this.hovered = !1, this.particlesConfig = options.particlesConfig, this.mouseRange = options.mouseRange || null, this.mouse = null, this.init();
  }
  init() {
    this.canvas = document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.canvas.width = this.dimensions.width, this.canvas.height = this.dimensions.height;
    let initialize = () => {
      this.currentImageData = this.imagesData.default, this.addParticles(this.totalParticles), this.startRender(), this.initEvents(), this.parent.appendChild(this.canvas);
    };
    !this.images.default && !this.images.hovered ? loadImages([this.imageURL.default, this.imageURL.hovered], (images) => {
      this.imagesData.default = returnImageData(images[0], this.dimensions), this.imagesData.hovered = returnImageData(images[1], this.dimensions), initialize();
    }) : (this.imagesData.default = returnImageData(this.images.default, this.dimensions), this.imagesData.hovered = returnImageData(this.images.hovered, this.dimensions), initialize()), this.mouseRange != null && (this.mouse = new Particle({
      ctx: this.ctx,
      position: {
        x: 0,
        y: 0
      },
      radius: this.mouseRange,
      color: "#000",
      avoisEdges: !0,
      shape: "circle"
    }));
  }
  initEvents() {
    let onMouseEnter = () => {
      this.hovered = !0, this.currentImageData = this.imagesData.hovered;
    }, onMouseLeave = () => {
      this.hovered = !1, this.currentImageData = this.imagesData.default;
    }, onMouseMove = (e) => {
      this.mouse != null && (this.mouse.position.x = e.offsetX, this.mouse.position.y = e.offsetY);
    };
    this.canvas.addEventListener("mouseenter", onMouseEnter), this.canvas.addEventListener("mouseleave", onMouseLeave), this.canvas.addEventListener("mousemove", onMouseMove);
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
    let color2 = returnPixelColor(imageData, Math.floor(this.dimensions.width), {
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
      this.mouseRange != null ? dist(this.mouse.position, particle.position) < this.mouse.radius + particle.radius && this.hovered ? this.updateParticleColor(this.imagesData.hovered, particle) : this.updateParticleColor(this.imagesData.default, particle) : this.updateParticleColor(this.currentImageData, particle);
    }), this.particles.update(), requestAnimationFrame(() => this.render());
  }
};

// app/utils/canvas-image-interaction/index.ts
var createImageInteraction = (cardOptions) => {
  let cards = Array.from(document.querySelectorAll(".card")), imageURLS = cardOptions.map((option) => Object.values(option.imageURL)).flat();
  loadImages(imageURLS, (images) => {
    let splitedImagesArray = splitArray(images, 2);
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
    }), setTimeout(() => {
      let loading = document.querySelector(".loadingImg");
      loading && loading.remove();
    }, 2e3), gsap2.timeline({
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
    jumpToRandomPosition: !0,
    fill: !0,
    shape: "square",
    radius: 2
  }
};
function checkIfFirefoxOrSafari(userAgent) {
  let formattedUserAgent = userAgent.toLowerCase();
  return ["firefox", "Safari"].some(
    (browser) => formattedUserAgent.indexOf(browser) > -1
  );
}
function useCreateImageInteraction() {
  let isMounted = useIsMounted(), { width } = useWindowSize(), userAgent = useUserAgent(), isFirefoxOrSafari = checkIfFirefoxOrSafari(userAgent);
  return { createImageInteraction: useCallback2(() => {
    isMounted && width >= 1280 && !isFirefoxOrSafari && createImageInteraction([imageInteractionSettings]);
  }, [isFirefoxOrSafari, width, isMounted]) };
}

// app/utils/hooks/useOnPageLoad.ts
import { useState as useState4, useEffect as useEffect6 } from "react";
function useOnPageLoad() {
  let [loaded, setLoaded] = useState4(!1);
  return useEffect6(() => {
    let onPageLoad = () => {
      setLoaded(!0), document.body.style.setProperty("overflow-y", "auto"), window.scrollTo(0, 0);
    };
    if (document.readyState === "complete")
      onPageLoad();
    else
      return window.addEventListener("load", onPageLoad), () => window.removeEventListener("load", onPageLoad);
  }, []), loaded;
}

// app/utils/hooks/useProgressiveImage.ts
import { useState as useState5, useEffect as useEffect7 } from "react";
function useProgressiveImage(lowQualitySrc, highQualitySrc) {
  let [src, setSrc] = useState5(lowQualitySrc || highQualitySrc);
  return useEffect7(() => {
    let img = new Image();
    img.src = highQualitySrc, img.onload = () => {
      setSrc(highQualitySrc);
    };
  }, [lowQualitySrc, highQualitySrc]), { src, blur: src === lowQualitySrc };
}

// app/ui/components/About/index.tsx
import { useEffect as useEffect8 } from "react";

// app/utils/primitives/index.ts
var breakpointKeys = Object.keys(breakpoints), remStyleProps = [
  "margin",
  "padding",
  "width",
  "height",
  "maxHeight",
  "imgWidth",
  "imgHeight",
  "gap",
  "top",
  "left",
  "bottom",
  "right"
];
function splitProps(props, stylePropsKeys) {
  let styleProps7 = {}, restProps = {};
  return Object.entries(props).forEach(([key, value]) => {
    stylePropsKeys.includes(key) ? styleProps7[key] = value : restProps[key] = value;
  }), [styleProps7, restProps];
}
function getMediaStyles(stylesWithBreakpointsProps, stylesWithBreakpoints, styleAliases6) {
  function getValue({
    styleValue,
    index,
    mediaKey,
    defaultValue
  }) {
    let value = defaultValue;
    return Array.isArray(styleValue) ? value = styleValue[index] : typeof styleValue == "object" && (value = styleValue[mediaKey]), value;
  }
  function formatStyles({ styleKey, styleValue, acc, ...options }) {
    let value = getValue({ styleValue, ...options }), key = styleAliases6 && styleAliases6[styleKey] || styleKey;
    if (value != null) {
      let styleProp = stylesWithBreakpoints && stylesWithBreakpoints[styleKey], stylePropsValue = styleProp && typeof styleProp == "object" ? styleProp[value] : value, formatToRem = remStyleProps.some((remStyleProp) => styleKey.includes(remStyleProp)), formattedValue = typeof stylePropsValue == "number" && formatToRem ? toRem(stylePropsValue) : stylePropsValue;
      acc[key] = formattedValue;
    }
  }
  return breakpointKeys.reduce((acc, mediaKey, index) => {
    if (index === 0)
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
    else {
      let accMedia = `@${mediaKey}`;
      acc[accMedia] = Object.entries(stylesWithBreakpointsProps).reduce(
        (styleAcc, [styleKey, styleValue]) => (formatStyles({
          styleKey,
          styleValue,
          index,
          mediaKey,
          acc: styleAcc
        }), styleAcc),
        {}
      );
    }
    return acc;
  }, {});
}
function getformattedProps({ props, styleProps: styleProps7, styleAliases: styleAliases6 }) {
  let stylePropsKeys = [
    ...styleProps7 ? Object.keys(styleProps7) : [],
    ...Object.keys(commonStyleProps)
  ], [componentStyleProps, restProps] = splitProps(props, stylePropsKeys);
  return { mediaStyles: getMediaStyles(
    componentStyleProps,
    { ...styleProps7, ...commonStyleProps },
    styleAliases6
  ), restProps };
}

// app/ui/primitives/dataDisplay/List/styles.tsx
var StyledList = styled("ul", {
  margin: 0,
  padding: 0
}), StyledListItem = styled("li", {
  margin: 0,
  listStyle: "none"
});

// app/ui/primitives/dataDisplay/List/index.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var List = ({ children, css: css2, ...props }) => {
  let { mediaStyles: mediaStyles2, restProps } = getformattedProps({ props });
  return /* @__PURE__ */ jsxDEV3(StyledList, { css: { ...mediaStyles2, ...css2 }, ...restProps, children }, void 0, !1, {
    fileName: "app/ui/primitives/dataDisplay/List/index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}, ListItem = ({ children, css: css2, ...props }) => {
  let { mediaStyles: mediaStyles2, restProps } = getformattedProps({ props });
  return /* @__PURE__ */ jsxDEV3(StyledListItem, { css: { ...mediaStyles2, ...css2 }, ...restProps, children }, void 0, !1, {
    fileName: "app/ui/primitives/dataDisplay/List/index.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
};

// app/ui/primitives/form/Button/index.tsx
import React from "react";

// app/ui/primitives/form/Button/styles.tsx
var StyledButton = styled("button", {
  fontSize: "$sm",
  cursor: "pointer",
  border: 0,
  background: "none",
  transition: "0.15s all ease-in-out"
});

// app/ui/primitives/form/Button/index.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var Button = React.forwardRef(
  ({ children, css: css2, ...props }, forwardedRef) => {
    let { mediaStyles: mediaStyles2, restProps } = getformattedProps({ props });
    return /* @__PURE__ */ jsxDEV4(
      StyledButton,
      {
        type: "button",
        css: { ...mediaStyles2, ...css2 },
        ref: forwardedRef,
        ...restProps,
        children
      },
      void 0,
      !1,
      {
        fileName: "app/ui/primitives/form/Button/index.tsx",
        lineNumber: 15,
        columnNumber: 7
      },
      this
    );
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
}, bgSize = {
  auto: "auto",
  cover: "cover",
  contain: "contain"
}, bgPosition = {
  bottom: "bottom",
  center: "center",
  left: "left",
  leftBottom: "left bottom",
  leftTop: "left top",
  right: "right",
  rightBottom: "right bottom",
  rightTop: "right top",
  top: "top"
}, bgRepeat = {
  repeat: "repeat",
  noRepeat: "no-repeat",
  repeatX: "repeat-x",
  repeatY: "repeat-y",
  repeatRound: "round",
  repeatSpace: "space"
}, customStyleProps = {
  background: "",
  bgImage: "",
  borderRadius: ""
}, styleProps = {
  bgSize,
  bgPosition,
  bgRepeat,
  bgColor,
  ...customStyleProps
}, border = "1px solid $white", variants = {
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
}, StyledDiv = styled("div", {
  variants
});

// app/ui/primitives/layout/Box/index.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var Box = ({ children, border: border2, css: css2, ...props }) => {
  let { mediaStyles: mediaStyles2, restProps } = getformattedProps({ props, styleProps, styleAliases });
  return /* @__PURE__ */ jsxDEV5(StyledDiv, { border: border2, css: { ...mediaStyles2, ...css2 }, ...restProps, children }, void 0, !1, {
    fileName: "app/ui/primitives/layout/Box/index.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
};

// app/ui/primitives/layout/Container/styles.tsx
var styleAliases2 = {
  bgColor: "backgroundColor"
}, styleProps2 = {
  bgColor,
  background: ""
}, variants2 = {
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
}, StyledDiv2 = styled("div", {
  variants: variants2
});

// app/ui/primitives/layout/Container/index.tsx
import React2 from "react";
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var Container = React2.forwardRef(
  ({ as = "div", variant, css: css2, children, ...props }, forwardedRef) => {
    let { mediaStyles: mediaStyles2, restProps } = getformattedProps({ props, styleProps: styleProps2, styleAliases: styleAliases2 });
    return /* @__PURE__ */ jsxDEV6(
      StyledDiv2,
      {
        as,
        variant,
        css: { ...mediaStyles2, ...css2 },
        ...restProps,
        ref: forwardedRef,
        children
      },
      void 0,
      !1,
      {
        fileName: "app/ui/primitives/layout/Container/index.tsx",
        lineNumber: 20,
        columnNumber: 7
      },
      this
    );
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
}, align = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  baseline: "baseline",
  stretch: "stretch"
}, autoColumns = {
  auto: "auto",
  min: "min-content",
  max: "max-content",
  fr: "minmax(0, 1fr)"
}, autoFlow = {
  row: "row",
  col: "column",
  dense: "dense",
  rowDense: "row dense",
  colDense: "col dense"
}, autoRows = autoColumns, templateRows = {
  1: "repeat(1, minmax(0, 1fr))",
  2: "repeat(2, minmax(0, 1fr))",
  3: "repeat(3, minmax(0, 1fr))",
  4: "repeat(4, minmax(0, 1fr))",
  5: "repeat(5, minmax(0, 1fr))",
  6: "repeat(6, minmax(0, 1fr))",
  none: "none"
}, templateColumns = {
  ...templateRows,
  7: "repeat(7, minmax(0, 1fr))",
  8: "repeat(8, minmax(0, 1fr))",
  9: "repeat(9, minmax(0, 1fr))",
  10: "repeat(10, minmax(0, 1fr))",
  11: "repeat(11, minmax(0, 1fr))",
  12: "repeat(12, minmax(0, 1fr))"
}, customStyleProps2 = {
  gap: ""
}, styleProps3 = {
  align,
  autoColumns,
  autoFlow,
  autoRows,
  templateColumns,
  templateRows,
  ...customStyleProps2
}, StyledDiv3 = styled("div", {
  display: "grid"
});

// app/ui/primitives/layout/Grid/index.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var Grid = ({ children, css: css2, ...props }) => {
  let { mediaStyles: mediaStyles2, restProps } = getformattedProps({ props, styleProps: styleProps3, styleAliases: styleAliases3 });
  return /* @__PURE__ */ jsxDEV7(StyledDiv3, { css: { ...mediaStyles2, ...css2 }, ...restProps, children }, void 0, !1, {
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
}, direction = {
  row: "row",
  rowReverse: "row-reverse",
  col: "column",
  colReverse: "column-reverse"
}, justify = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly"
}, align2 = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  baseline: "baseline",
  stretch: "stretch"
}, wrap = {
  wrap: "wrap",
  reverse: "wrap-reverse",
  noWrap: "nowrap"
}, customStyleProps3 = {
  gap: ""
}, styleProps4 = {
  direction,
  justify,
  align: align2,
  wrap,
  ...customStyleProps3
}, StyledDiv4 = styled("div", {
  display: "flex"
});

// app/ui/primitives/layout/Flex/index.tsx
import { jsxDEV as jsxDEV8 } from "react/jsx-dev-runtime";
var Flex = ({ children, css: css2, ...props }) => {
  let { mediaStyles: mediaStyles2, restProps } = getformattedProps({
    props,
    styleProps: styleProps4,
    styleAliases: styleAliases4
  });
  return /* @__PURE__ */ jsxDEV8(StyledDiv4, { css: { ...mediaStyles2, ...css2 }, ...restProps, children }, void 0, !1, {
    fileName: "app/ui/primitives/layout/Flex/index.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
};

// app/ui/primitives/media/Img/index.tsx
import React3 from "react";

// app/ui/primitives/media/Img/styles.tsx
var styleAliases5 = {
  align: "objectPosition",
  fit: "objectFit",
  imgWidth: "width",
  imgHeight: "height"
}, fit = {
  contain: "contain",
  cover: "cover",
  fill: "fill",
  none: "none",
  scaleSown: "scale-down"
}, align3 = {
  bottom: "bottom",
  center: "center",
  left: "left",
  leftBottom: "left bottom",
  leftTop: "left top",
  right: "right",
  rightBottom: "right bottom",
  rightTop: "right top",
  top: "top"
}, customStyleProps4 = {
  borderRadius: "",
  maxWidth: "",
  imgHeight: "",
  imgWidth: ""
}, styleProps5 = {
  align: align3,
  fit,
  ...customStyleProps4
}, StyledImg = styled("img");

// app/ui/primitives/media/Img/index.tsx
import { jsxDEV as jsxDEV9 } from "react/jsx-dev-runtime";
var Img = React3.forwardRef(
  ({ src: fullSrc, thumbSrc, alt, loading = "lazy", css: css2, ...props }, ref) => {
    let { mediaStyles: mediaStyles2, restProps } = getformattedProps({
      props: { ...props },
      styleProps: styleProps5,
      styleAliases: styleAliases5
    }), { src, blur } = useProgressiveImage(thumbSrc, fullSrc);
    return /* @__PURE__ */ jsxDEV9(
      StyledImg,
      {
        css: {
          ...mediaStyles2,
          filter: blur ? "blur(8px)" : "none",
          transition: blur ? "none" : "filter 500ms ease-in 0ms",
          ...css2
        },
        src,
        alt,
        ref,
        loading,
        ...restProps
      },
      void 0,
      !1,
      {
        fileName: "app/ui/primitives/media/Img/index.tsx",
        lineNumber: 25,
        columnNumber: 7
      },
      this
    );
  }
);
Img.displayName = "Img";

// app/ui/primitives/navigation/Link/styles.tsx
var moveUpDown = keyframes({
  "0%, to": { transform: "translateY(-15%)" },
  "50%": { transform: "translateY(15%)" }
}), variants3 = {
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
}, StyledLink = styled("a", {
  color: "$white",
  textDecoration: "none",
  transition: "0.15s color ease-in-out",
  cursor: "pointer",
  outline: "1px solid transparent",
  variants: variants3
});

// app/ui/primitives/navigation/Link/index.tsx
import { jsxDEV as jsxDEV10 } from "react/jsx-dev-runtime";
var externalLinkProps = {
  rel: "noopener noreferrer nofollow",
  target: "_blank"
}, Link = ({ children, css: css2, isExternal = !1, variant, ...props }) => {
  let { mediaStyles: mediaStyles2, restProps } = getformattedProps({ props });
  return /* @__PURE__ */ jsxDEV10(
    StyledLink,
    {
      css: { ...mediaStyles2, ...css2 },
      variant,
      ...isExternal && externalLinkProps,
      ...restProps,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/ui/primitives/navigation/Link/index.tsx",
      lineNumber: 22,
      columnNumber: 5
    },
    this
  );
};

// app/ui/primitives/typography/Text/styles.tsx
var {
  theme: { colors: colors2, fontSizes, fonts }
} = config, color = getStylePropsFromToken(colors2), fontFamily = getStylePropsFromToken(fonts), fontSize = getStylePropsFromToken(fontSizes), fontWeight = {
  normal: "400",
  bold: "700"
}, textTransform = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
  normalCase: "none"
}, lineHeight = {
  3: ".75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  none: "1",
  tight: "1.25",
  snug: "1.375",
  normal: "1.5",
  relaxed: "1.625",
  loose: "2"
}, styleProps6 = {
  color,
  fontFamily,
  fontSize,
  fontWeight,
  textTransform,
  lineHeight
}, variants4 = {
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
}, StyledSpan = styled("span", {
  variants: variants4
});

// app/ui/primitives/typography/Text/index.tsx
import React4 from "react";
import { jsxDEV as jsxDEV11 } from "react/jsx-dev-runtime";
var Text = React4.forwardRef(({ as = "span", css: css2, variant, children, ...props }, forwardedRef) => {
  let { mediaStyles: mediaStyles2, restProps } = getformattedProps({ props, styleProps: styleProps6 });
  return /* @__PURE__ */ jsxDEV11(
    StyledSpan,
    {
      as,
      variant,
      css: { ...mediaStyles2, ...css2 },
      ref: forwardedRef,
      ...restProps,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/ui/primitives/typography/Text/index.tsx",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  );
});
Text.displayName = "Text";

// app/assets/img/about-heading.svg
var about_heading_default = "/build/_assets/about-heading-CI2LQBHM.svg";

// app/assets/img/bolt.svg
var bolt_default = "/build/_assets/bolt-22GJDHJR.svg";

// app/ui/components/About/FirstRow.tsx
import { jsxDEV as jsxDEV12 } from "react/jsx-dev-runtime";
var experience = getExperience(), FirstRow = () => /* @__PURE__ */ jsxDEV12(Grid, { templateColumns: "12", children: [
  /* @__PURE__ */ jsxDEV12(
    Img,
    {
      src: about_heading_default,
      alt: "about",
      display: "flex",
      gridColumn: { xs: "12", lg: "2" },
      gridColumnStart: { lg: "3" },
      maxHeight: 60,
      marginTop: { lg: 12 },
      marginBottom: { xs: 20, lg: 0 },
      css: { maxWidth: `${toRem(60)}` }
    },
    void 0,
    !1,
    {
      fileName: "app/ui/components/About/FirstRow.tsx",
      lineNumber: 12,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ jsxDEV12(
    Text,
    {
      as: "h1",
      display: "inline",
      gridColumn: { xs: "12", lg: "3" },
      paddingBottom: { xs: 80, lg: 20, xl: 0 },
      marginTop: { xs: 18, lg: 6 },
      marginBottom: 18,
      fontWeight: "normal",
      fontSize: "lg",
      lineHeight: "relaxed",
      children: [
        "Hi, I'm Noah Bravo, a multidisciplinary front-end developer and digital designer based in Madrid, Spain. With over ",
        experience,
        " years of experience working with all types of clients and projects, I thrive on bringing both the technical and visual aspects of digital products to life."
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/ui/components/About/FirstRow.tsx",
      lineNumber: 23,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ jsxDEV12(
    Flex,
    {
      className: "profileContainer",
      align: "center",
      justify: "center",
      wrap: "wrap",
      gridColumn: { xs: "12", lg: "3" },
      gridColumnStart: { lg: "9" },
      position: "relative",
      width: "100%",
      children: [
        /* @__PURE__ */ jsxDEV12(
          Box,
          {
            className: "card",
            display: { xs: "hidden", xl: "block" },
            position: "relative",
            width: 280,
            height: 420,
            zIndex: "z20",
            children: /* @__PURE__ */ jsxDEV12(Box, { className: "cardImage", position: "relative", width: "100%", height: "100%", overflow: "hidden", children: /* @__PURE__ */ jsxDEV12(Box, { className: "cardImageInner", width: "100%", height: "100%", overflow: "hidden" }, void 0, !1, {
              fileName: "app/ui/components/About/FirstRow.tsx",
              lineNumber: 58,
              columnNumber: 11
            }, this) }, void 0, !1, {
              fileName: "app/ui/components/About/FirstRow.tsx",
              lineNumber: 57,
              columnNumber: 9
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/ui/components/About/FirstRow.tsx",
            lineNumber: 49,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV12(
          Container,
          {
            className: "profileLoading loadingImg",
            position: { lg: "absolute" },
            top: "0",
            left: { lg: "-28%", xl: "3.5%", "2xl": 20 },
            width: 280,
            height: 420,
            zIndex: "z10",
            css: { "&.hide .profileLoadingImg": { opacity: 0, visibility: "hidden" } },
            children: /* @__PURE__ */ jsxDEV12(
              Img,
              {
                className: "profileLoadingImg",
                src: profile_bw_default,
                alt: "Noah Bravo profile photo in black and white",
                opacity: "100",
                visibility: "visible",
                pointerEvents: "none",
                css: { userSelect: "none" }
              },
              void 0,
              !1,
              {
                fileName: "app/ui/components/About/FirstRow.tsx",
                lineNumber: 71,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/ui/components/About/FirstRow.tsx",
            lineNumber: 61,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV12(
          Img,
          {
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
          },
          void 0,
          !1,
          {
            fileName: "app/ui/components/About/FirstRow.tsx",
            lineNumber: 81,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/ui/components/About/FirstRow.tsx",
      lineNumber: 39,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/ui/components/About/FirstRow.tsx",
  lineNumber: 11,
  columnNumber: 3
}, this), FirstRow_default = FirstRow;

// app/assets/img/skull.svg
var skull_default = "/build/_assets/skull-N67EAKSS.svg";

// app/ui/components/About/SecondRow.tsx
import { jsxDEV as jsxDEV13 } from "react/jsx-dev-runtime";
var SecondRow = () => /* @__PURE__ */ jsxDEV13(Grid, { templateColumns: "12", children: /* @__PURE__ */ jsxDEV13(
  Container,
  {
    gridColumn: { xs: "12", lg: "4" },
    gridColumnStart: { lg: "3" },
    paddingTop: { xs: 60, lg: 0 },
    transform: { xl: `translateY(-${toRem(100)})` },
    position: "relative",
    children: [
      /* @__PURE__ */ jsxDEV13(
        Img,
        {
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
        },
        void 0,
        !1,
        {
          fileName: "app/ui/components/About/SecondRow.tsx",
          lineNumber: 14,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ jsxDEV13(Text, { as: "p", marginY: 18, fontSize: "lg", lineHeight: "relaxed", children: "My main focus as a developer is building accessible, high performance and inclusive digital experiences without sacrificing creativity. Basically, I like creating cool sh*t." }, void 0, !1, {
        fileName: "app/ui/components/About/SecondRow.tsx",
        lineNumber: 26,
        columnNumber: 7
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/ui/components/About/SecondRow.tsx",
    lineNumber: 7,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/ui/components/About/SecondRow.tsx",
  lineNumber: 6,
  columnNumber: 3
}, this), SecondRow_default = SecondRow;

// app/ui/components/About/ThirdRow.tsx
import { jsxDEV as jsxDEV14 } from "react/jsx-dev-runtime";
var ThirdRow = () => /* @__PURE__ */ jsxDEV14(Grid, { templateColumns: "12", children: /* @__PURE__ */ jsxDEV14(
  Text,
  {
    as: "p",
    gridColumn: { xs: "12", lg: "6" },
    gridColumnStart: { lg: "5" },
    marginY: 18,
    fontSize: "lg",
    lineHeight: "relaxed",
    children: [
      "I'm currently working as a lead senior front-end developer at",
      /* @__PURE__ */ jsxDEV14(
        Link,
        {
          href: "https://samy.com/",
          variant: "line",
          display: "inline-flex",
          position: "relative",
          marginX: 6,
          children: /* @__PURE__ */ jsxDEV14(Text, { children: "Samy" }, void 0, !1, {
            fileName: "app/ui/components/About/ThirdRow.tsx",
            lineNumber: 21,
            columnNumber: 11
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/ui/components/About/ThirdRow.tsx",
          lineNumber: 14,
          columnNumber: 9
        },
        this
      ),
      "and developing smaller projects for friends from time to time. I'm always available for fun and interesting side projects, so feel free to get in touch if you'd like to work together."
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/ui/components/About/ThirdRow.tsx",
    lineNumber: 5,
    columnNumber: 7
  },
  this
) }, void 0, !1, {
  fileName: "app/ui/components/About/ThirdRow.tsx",
  lineNumber: 4,
  columnNumber: 5
}, this), ThirdRow_default = ThirdRow;

// app/ui/components/About/index.tsx
import { jsxDEV as jsxDEV15 } from "react/jsx-dev-runtime";
var About = ({ animateAbout: animateAbout2, createImageInteraction: createImageInteraction2 }) => (useEffect8(() => {
  animateAbout2(), createImageInteraction2();
}, [animateAbout2, createImageInteraction2]), /* @__PURE__ */ jsxDEV15(Container, { as: "section", id: "about", paddingTop: { xs: 46, lg: 86 }, paddingBottom: 86, children: /* @__PURE__ */ jsxDEV15(Container, { variant: "wrap", height: "100%", children: [
  /* @__PURE__ */ jsxDEV15(FirstRow_default, {}, void 0, !1, {
    fileName: "app/ui/components/About/index.tsx",
    lineNumber: 19,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV15(SecondRow_default, {}, void 0, !1, {
    fileName: "app/ui/components/About/index.tsx",
    lineNumber: 20,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV15(ThirdRow_default, {}, void 0, !1, {
    fileName: "app/ui/components/About/index.tsx",
    lineNumber: 21,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/ui/components/About/index.tsx",
  lineNumber: 18,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/ui/components/About/index.tsx",
  lineNumber: 17,
  columnNumber: 5
}, this));

// app/ui/components/Contact/index.tsx
import { useEffect as useEffect9 } from "react";

// app/assets/img/contact-heading.svg
var contact_heading_default = "/build/_assets/contact-heading-FMZV5LKH.svg";

// app/assets/img/hover-line-sm.svg
var hover_line_sm_default = "/build/_assets/hover-line-sm-5L3WNE4F.svg";

// app/assets/img/hover-line-xl.svg
var hover_line_xl_default = "/build/_assets/hover-line-xl-6UCRQDWE.svg";

// app/assets/img/ghost.svg
var ghost_default = "/build/_assets/ghost-4TL2I7QX.svg";

// app/ui/components/Contact/Email.tsx
import { Fragment, jsxDEV as jsxDEV16 } from "react/jsx-dev-runtime";
var ContactEmail = () => /* @__PURE__ */ jsxDEV16(Fragment, { children: [
  /* @__PURE__ */ jsxDEV16(Grid, { templateColumns: "12", children: /* @__PURE__ */ jsxDEV16(
    Img,
    {
      src: contact_heading_default,
      alt: "Get in touch",
      gridColumn: "2",
      gridColumnStart: { lg: "3" },
      width: toRem(128),
      css: {
        maxWidth: toRem(128)
      }
    },
    void 0,
    !1,
    {
      fileName: "app/ui/components/Contact/Email.tsx",
      lineNumber: 11,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/ui/components/Contact/Email.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV16(Grid, { templateColumns: "12", children: [
    /* @__PURE__ */ jsxDEV16(
      Container,
      {
        position: "relative",
        gridColumn: { xs: "12", lg: "7" },
        gridColumnStart: { lg: "3" },
        marginTop: 20,
        marginBottom: { xs: 40, lg: 60 },
        children: /* @__PURE__ */ jsxDEV16(
          Link,
          {
            href: "mailto:mailto:hola@noahbravo.dev",
            position: "relative",
            css: { "&:hover .linkLine": { width: "100%" } },
            children: [
              /* @__PURE__ */ jsxDEV16(Container, { children: [
                /* @__PURE__ */ jsxDEV16(
                  Box,
                  {
                    display: { xs: "hidden", lg: "flex" },
                    position: "absolute",
                    top: -5,
                    left: "0",
                    height: 108,
                    width: 244,
                    transform: "translateX(-6%)",
                    children: /* @__PURE__ */ jsxDEV16(
                      Box,
                      {
                        className: "linkLine",
                        display: "flex",
                        width: "0",
                        transition: "width .5s cubic-bezier(.16,1,.3,1)",
                        children: /* @__PURE__ */ jsxDEV16(Img, { src: hover_line_sm_default, alt: "link underline", pointerEvents: "none" }, void 0, !1, {
                          fileName: "app/ui/components/Contact/Email.tsx",
                          lineNumber: 51,
                          columnNumber: 17
                        }, this)
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/ui/components/Contact/Email.tsx",
                        lineNumber: 45,
                        columnNumber: 15
                      },
                      this
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/components/Contact/Email.tsx",
                    lineNumber: 36,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV16(Text, { fontSize: { xs: "3xl", sm: "5xl" }, lineHeight: "none", children: "hola@" }, void 0, !1, {
                  fileName: "app/ui/components/Contact/Email.tsx",
                  lineNumber: 54,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/ui/components/Contact/Email.tsx",
                lineNumber: 35,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV16(Container, { children: [
                /* @__PURE__ */ jsxDEV16(
                  Box,
                  {
                    display: { xs: "hidden", lg: "flex" },
                    position: "absolute",
                    top: 76,
                    left: "0",
                    height: 106,
                    width: 628,
                    transform: "translateX(-2.5%)",
                    children: /* @__PURE__ */ jsxDEV16(
                      Box,
                      {
                        className: "linkLine",
                        display: "flex",
                        width: "0",
                        transition: "width .5s cubic-bezier(.16,1,.3,1)",
                        children: /* @__PURE__ */ jsxDEV16(Img, { src: hover_line_xl_default, alt: "link underline", pointerEvents: "none" }, void 0, !1, {
                          fileName: "app/ui/components/Contact/Email.tsx",
                          lineNumber: 74,
                          columnNumber: 17
                        }, this)
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/ui/components/Contact/Email.tsx",
                        lineNumber: 68,
                        columnNumber: 15
                      },
                      this
                    )
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/ui/components/Contact/Email.tsx",
                    lineNumber: 59,
                    columnNumber: 13
                  },
                  this
                ),
                /* @__PURE__ */ jsxDEV16(Text, { fontSize: { xs: "3xl", sm: "5xl" }, lineHeight: "none", children: "noahbravo.dev" }, void 0, !1, {
                  fileName: "app/ui/components/Contact/Email.tsx",
                  lineNumber: 77,
                  columnNumber: 13
                }, this)
              ] }, void 0, !0, {
                fileName: "app/ui/components/Contact/Email.tsx",
                lineNumber: 58,
                columnNumber: 11
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/ui/components/Contact/Email.tsx",
            lineNumber: 30,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/ui/components/Contact/Email.tsx",
        lineNumber: 23,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ jsxDEV16(
      Img,
      {
        src: ghost_default,
        alt: "ghost",
        className: "ghost",
        display: { xs: "hidden", lg: "flex" },
        width: 120,
        transform: `translateY(-${toRem(80)})`,
        pointerEvents: "none"
      },
      void 0,
      !1,
      {
        fileName: "app/ui/components/Contact/Email.tsx",
        lineNumber: 83,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui/components/Contact/Email.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/ui/components/Contact/Email.tsx",
  lineNumber: 9,
  columnNumber: 3
}, this), Email_default = ContactEmail;

// app/assets/img/follow-heading.svg
var follow_heading_default = "/build/_assets/follow-heading-WPI55DF7.svg";

// app/ui/components/Contact/Social/networks.ts
var networks_default = [
  {
    name: "Github",
    href: "https://github.com/noahbravo"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/noah-bravo/"
  },
  {
    name: "Spotify",
    href: "https://spoti.fi/34t4OZJ"
  }
];

// app/ui/components/Contact/Social/index.tsx
import { jsxDEV as jsxDEV17 } from "react/jsx-dev-runtime";
var ContactSocial = () => /* @__PURE__ */ jsxDEV17(Grid, { templateColumns: "12", children: [
  /* @__PURE__ */ jsxDEV17(
    Img,
    {
      src: follow_heading_default,
      alt: "Follow",
      gridColumn: { xs: "3", lg: "2" },
      gridColumnStart: { lg: "3" },
      width: toRem(85),
      height: toRem(30)
    },
    void 0,
    !1,
    {
      fileName: "app/ui/components/Contact/Social/index.tsx",
      lineNumber: 8,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ jsxDEV17(Flex, { direction: "col", gridColumnStart: { xs: "9", sm: "unset" }, children: networks_default.map(({ name, href }) => /* @__PURE__ */ jsxDEV17(Box, { children: /* @__PURE__ */ jsxDEV17(Link, { variant: "line", href, isExternal: !0, children: /* @__PURE__ */ jsxDEV17(Text, { textTransform: "uppercase", css: { fontSize: toRem(20) }, children: name }, void 0, !1, {
    fileName: "app/ui/components/Contact/Social/index.tsx",
    lineNumber: 20,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/ui/components/Contact/Social/index.tsx",
    lineNumber: 19,
    columnNumber: 11
  }, this) }, name, !1, {
    fileName: "app/ui/components/Contact/Social/index.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this)) }, void 0, !1, {
    fileName: "app/ui/components/Contact/Social/index.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/ui/components/Contact/Social/index.tsx",
  lineNumber: 7,
  columnNumber: 3
}, this), Social_default = ContactSocial;

// app/ui/components/Contact/index.tsx
import { jsxDEV as jsxDEV18 } from "react/jsx-dev-runtime";
var Contact = ({ animateContact: animateContact2 }) => (useEffect9(() => {
  animateContact2();
}, [animateContact2]), /* @__PURE__ */ jsxDEV18(
  Container,
  {
    as: "section",
    id: "contact",
    paddingTop: { xs: 26, lg: 0 },
    paddingBottom: { xs: 80, sm: 40, lg: 100 },
    children: /* @__PURE__ */ jsxDEV18(Container, { variant: "wrap", maxHeight: 708, children: [
      /* @__PURE__ */ jsxDEV18(Email_default, {}, void 0, !1, {
        fileName: "app/ui/components/Contact/index.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV18(Social_default, {}, void 0, !1, {
        fileName: "app/ui/components/Contact/index.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/ui/components/Contact/index.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/ui/components/Contact/index.tsx",
    lineNumber: 15,
    columnNumber: 5
  },
  this
));

// app/ui/components/Inspiration/index.tsx
import { useRef as useRef3, useEffect as useEffect10 } from "react";

// app/ui/components/Inspiration/album.tsx
import { jsxDEV as jsxDEV19 } from "react/jsx-dev-runtime";
var Album = ({ album, artist }) => {
  let { name: albumName, image: cover } = album, { name: artistName, image: artistImage } = artist;
  return /* @__PURE__ */ jsxDEV19(
    Box,
    {
      className: "album",
      position: "absolute",
      size: { xs: 150, sm: 200, lg: 250 },
      opacity: "0",
      visibility: "invisible",
      children: [
        /* @__PURE__ */ jsxDEV19(Img, { src: cover, alt: albumName }, void 0, !1, {
          fileName: "app/ui/components/Inspiration/album.tsx",
          lineNumber: 16,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ jsxDEV19(
          Box,
          {
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "33%",
            background: "linear-gradient(180deg,transparent,rgba(0,0,0,.895))"
          },
          void 0,
          !1,
          {
            fileName: "app/ui/components/Inspiration/album.tsx",
            lineNumber: 17,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV19(Flex, { align: "center", position: "absolute", bottom: "0", left: "0", paddingX: 16, paddingBottom: 16, children: [
          /* @__PURE__ */ jsxDEV19(Img, { src: artistImage, alt: artistName, size: 30, marginRight: 6, borderRadius: "50%" }, void 0, !1, {
            fileName: "app/ui/components/Inspiration/album.tsx",
            lineNumber: 26,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ jsxDEV19(Text, { fontSize: "sm", lineHeight: "tight", children: artistName }, void 0, !1, {
            fileName: "app/ui/components/Inspiration/album.tsx",
            lineNumber: 27,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/ui/components/Inspiration/album.tsx",
          lineNumber: 25,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/ui/components/Inspiration/album.tsx",
      lineNumber: 9,
      columnNumber: 5
    },
    this
  );
}, album_default = Album;

// app/assets/img/inspiration-heading.svg
var inspiration_heading_default = "/build/_assets/inspiration-heading-BFHYA6PT.svg";

// app/ui/components/Inspiration/index.tsx
import { jsxDEV as jsxDEV20 } from "react/jsx-dev-runtime";
var albumLimit = 8, Inspiration = ({ albums, animateInspiration: animateInspiration2 }) => {
  let screenWidths = useScreenWidths(), containerRef = useRef3(null), renderAlbum = (index) => {
    let isNotMobile = !screenWidths.phoneOnly, lessThanLimit = screenWidths.phoneOnly && index + 1 <= albumLimit;
    return isNotMobile || lessThanLimit;
  };
  return useEffect10(() => {
    containerRef?.current && animateInspiration2(containerRef?.current);
  }, [animateInspiration2]), /* @__PURE__ */ jsxDEV20(
    Container,
    {
      as: "section",
      id: "inspiration",
      ref: containerRef,
      height: { xs: 708, xl: 800 },
      marginY: 86,
      children: /* @__PURE__ */ jsxDEV20(Container, { variant: "wrap", children: /* @__PURE__ */ jsxDEV20(Container, { position: "relative", width: "100%", height: "100%", zIndex: "z10", children: [
        /* @__PURE__ */ jsxDEV20(Flex, { align: "center", justify: "center", position: "absolute", width: "100%", children: /* @__PURE__ */ jsxDEV20(
          Img,
          {
            src: inspiration_heading_default,
            alt: "Music is my drug",
            width: "100%",
            maxWidth: "lg",
            transform: `translateY(${toRem(286)})`
          },
          void 0,
          !1,
          {
            fileName: "app/ui/components/Inspiration/index.tsx",
            lineNumber: 43,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/ui/components/Inspiration/index.tsx",
          lineNumber: 42,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV20(Flex, { className: "albumList", position: "relative", children: albums.map((data, index) => renderAlbum(index) ? /* @__PURE__ */ jsxDEV20(album_default, { ...data }, data.id, !1, {
          fileName: "app/ui/components/Inspiration/index.tsx",
          lineNumber: 53,
          columnNumber: 43
        }, this) : null) }, void 0, !1, {
          fileName: "app/ui/components/Inspiration/index.tsx",
          lineNumber: 51,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/ui/components/Inspiration/index.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/ui/components/Inspiration/index.tsx",
        lineNumber: 40,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/ui/components/Inspiration/index.tsx",
      lineNumber: 33,
      columnNumber: 5
    },
    this
  );
};

// app/assets/img/intro-cta.svg
var intro_cta_default = "/build/_assets/intro-cta-4YG5YVOH.svg";

// app/ui/components/Intro/CTA.tsx
import { jsxDEV as jsxDEV21 } from "react/jsx-dev-runtime";
var CTA = () => /* @__PURE__ */ jsxDEV21(
  Link,
  {
    href: "mailto:hola@noahbravo.dev",
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
    children: /* @__PURE__ */ jsxDEV21(Flex, { position: "relative", justify: "center", align: "center", width: "100%", height: "100%", children: [
      /* @__PURE__ */ jsxDEV21(
        Box,
        {
          className: "ctaInner",
          position: "absolute",
          width: "100%",
          height: "100%",
          bgColor: "white",
          borderRadius: "50%",
          transform: "scale(1)",
          transition: "transform 1.2s cubic-bezier(.16,1,.3,1)"
        },
        void 0,
        !1,
        {
          fileName: "app/ui/components/Intro/CTA.tsx",
          lineNumber: 20,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ jsxDEV21(
        Img,
        {
          src: intro_cta_default,
          alt: "Get in touch",
          position: "absolute",
          top: "50%",
          size: "50%",
          transform: "translateY(-50%) rotate(10deg)"
        },
        void 0,
        !1,
        {
          fileName: "app/ui/components/Intro/CTA.tsx",
          lineNumber: 30,
          columnNumber: 7
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui/components/Intro/CTA.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/ui/components/Intro/CTA.tsx",
    lineNumber: 6,
    columnNumber: 3
  },
  this
), CTA_default = CTA;

// app/assets/img/heading.svg
var heading_default = "/build/_assets/heading-QSZHBBAR.svg";

// app/ui/components/Intro/Heading.tsx
import { jsxDEV as jsxDEV22 } from "react/jsx-dev-runtime";
var Heading = () => /* @__PURE__ */ jsxDEV22(
  Img,
  {
    src: heading_default,
    alt: "Senior Front-end Developer",
    gridColumn: { xs: "10", lg: "6" },
    gridColumnStart: { xs: "2", sm: "3", lg: "3" },
    height: toRem(425),
    maxWidth: { sm: "md" },
    paddingY: { xs: 50, sm: 0 },
    pointerEvents: "none"
  },
  void 0,
  !1,
  {
    fileName: "app/ui/components/Intro/Heading.tsx",
    lineNumber: 6,
    columnNumber: 3
  },
  this
), Heading_default = Heading;

// app/assets/img/arrow.svg
var arrow_default = "/build/_assets/arrow-6HCQ7SNL.svg";

// app/ui/components/Intro/ScrollDown.tsx
import { jsxDEV as jsxDEV23 } from "react/jsx-dev-runtime";
var ScrollDown = () => /* @__PURE__ */ jsxDEV23(
  Container,
  {
    position: "absolute",
    bottom: { xs: 0, lg: 50 },
    width: "100%",
    paddingBottom: 86,
    zIndex: "z40",
    children: /* @__PURE__ */ jsxDEV23(Container, { height: 1, variant: "wrap", children: /* @__PURE__ */ jsxDEV23(Link, { href: "#about", variant: "scrollDown", display: "flex", width: 40, children: /* @__PURE__ */ jsxDEV23(Img, { src: arrow_default, alt: "down arrow", position: "relative", width: "100%" }, void 0, !1, {
      fileName: "app/ui/components/Intro/ScrollDown.tsx",
      lineNumber: 14,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/ui/components/Intro/ScrollDown.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/ui/components/Intro/ScrollDown.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/ui/components/Intro/ScrollDown.tsx",
    lineNumber: 5,
    columnNumber: 3
  },
  this
), ScrollDown_default = ScrollDown;

// app/ui/components/Intro/index.tsx
import { jsxDEV as jsxDEV24 } from "react/jsx-dev-runtime";
var Intro = () => /* @__PURE__ */ jsxDEV24(Container, { width: "100%", height: "100vh", as: "section", children: /* @__PURE__ */ jsxDEV24(Container, { height: "100%", variant: "wrap", children: /* @__PURE__ */ jsxDEV24(Flex, { height: "100%", direction: "col", justify: "center", position: "relative", children: [
  /* @__PURE__ */ jsxDEV24(Grid, { align: "center", templateColumns: "12", height: "100%", paddingTop: 20, maxHeight: 500, children: [
    /* @__PURE__ */ jsxDEV24(Heading_default, {}, void 0, !1, {
      fileName: "app/ui/components/Intro/index.tsx",
      lineNumber: 12,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV24(CTA_default, {}, void 0, !1, {
      fileName: "app/ui/components/Intro/index.tsx",
      lineNumber: 13,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/ui/components/Intro/index.tsx",
    lineNumber: 11,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ jsxDEV24(ScrollDown_default, {}, void 0, !1, {
    fileName: "app/ui/components/Intro/index.tsx",
    lineNumber: 15,
    columnNumber: 11
  }, this)
] }, void 0, !0, {
  fileName: "app/ui/components/Intro/index.tsx",
  lineNumber: 10,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/ui/components/Intro/index.tsx",
  lineNumber: 9,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/ui/components/Intro/index.tsx",
  lineNumber: 8,
  columnNumber: 5
}, this);

// app/ui/components/Layout/index.tsx
import { useEffect as useEffect11, useRef as useRef4 } from "react";

// app/assets/img/logo.svg
var logo_default = "/build/_assets/logo-BTSI2KH4.svg";

// app/ui/components/Layout/Header.tsx
import { jsxDEV as jsxDEV25 } from "react/jsx-dev-runtime";
var Header = () => /* @__PURE__ */ jsxDEV25(
  Container,
  {
    as: "header",
    position: { xs: "absolute", lg: "fixed" },
    top: { xs: 40, lg: 86 },
    left: { xs: 20, lg: 40, "2xl": `calc(((100vw - ${toRem(1280)})/2) - ${toRem(28)})` },
    zIndex: "z40",
    children: /* @__PURE__ */ jsxDEV25(Img, { src: logo_default, alt: "Noah Bravo logo", imgWidth: { xs: 120, sm: 150 }, pointerEvents: "none" }, void 0, !1, {
      fileName: "app/ui/components/Layout/Header.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/ui/components/Layout/Header.tsx",
    lineNumber: 7,
    columnNumber: 5
  },
  this
), Header_default = Header;

// app/assets/img/open-btn.svg
var open_btn_default = "/build/_assets/open-btn-5OTJKQG3.svg";

// app/assets/img/close-btn.svg
var close_btn_default = "/build/_assets/close-btn-AEHTDASW.svg";

// app/ui/components/Layout/Menu/Mobile/Buttons.tsx
import { Fragment as Fragment2, jsxDEV as jsxDEV26 } from "react/jsx-dev-runtime";
var MenuButton = ({ openMenu, closeMenu }) => /* @__PURE__ */ jsxDEV26(Fragment2, { children: [
  /* @__PURE__ */ jsxDEV26(
    Button,
    {
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
        /* @__PURE__ */ jsxDEV26(
          Img,
          {
            src: open_btn_default,
            alt: "open menu button",
            position: "absolute",
            top: 37,
            left: "50%",
            width: toRem(48),
            height: toRem(24),
            transform: "translateX(-50%)"
          },
          void 0,
          !1,
          {
            fileName: "app/ui/components/Layout/Menu/Mobile/Buttons.tsx",
            lineNumber: 28,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV26(
          Text,
          {
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
          },
          void 0,
          !1,
          {
            fileName: "app/ui/components/Layout/Menu/Mobile/Buttons.tsx",
            lineNumber: 38,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/ui/components/Layout/Menu/Mobile/Buttons.tsx",
      lineNumber: 13,
      columnNumber: 5
    },
    this
  ),
  /* @__PURE__ */ jsxDEV26(
    Button,
    {
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
        /* @__PURE__ */ jsxDEV26(
          Img,
          {
            src: close_btn_default,
            alt: "close menu button",
            position: "absolute",
            top: 37,
            left: "50%",
            width: toRem(40),
            height: toRem(40),
            transform: "translateY(-30%) translateX(-50%)"
          },
          void 0,
          !1,
          {
            fileName: "app/ui/components/Layout/Menu/Mobile/Buttons.tsx",
            lineNumber: 69,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV26(
          Text,
          {
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
          },
          void 0,
          !1,
          {
            fileName: "app/ui/components/Layout/Menu/Mobile/Buttons.tsx",
            lineNumber: 79,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/ui/components/Layout/Menu/Mobile/Buttons.tsx",
      lineNumber: 54,
      columnNumber: 5
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/ui/components/Layout/Menu/Mobile/Buttons.tsx",
  lineNumber: 12,
  columnNumber: 3
}, this), Buttons_default = MenuButton;

// app/assets/img/grungepattern.png
var grungepattern_default = "/build/_assets/grungepattern-OHO2S5ME.png";

// app/ui/components/Layout/Menu/Mobile/index.tsx
import { jsxDEV as jsxDEV27 } from "react/jsx-dev-runtime";
var MobileMenu = ({ menuItems: menuItems2, networks, animateMobileMenu: animateMobileMenu2 }) => {
  let { openMenu, closeMenu } = animateMobileMenu2() || {};
  return /* @__PURE__ */ jsxDEV27(
    Container,
    {
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
        /* @__PURE__ */ jsxDEV27(
          Container,
          {
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
            children: /* @__PURE__ */ jsxDEV27(Flex, { direction: "col", justify: "between", align: "center", width: "100%", height: "100%", children: [
              /* @__PURE__ */ jsxDEV27(Container, { variant: "wrap", transform: "translateY(108%)", children: /* @__PURE__ */ jsxDEV27(
                Img,
                {
                  src: logo_default,
                  alt: "Noah Bravo logo",
                  imgWidth: { xs: 120, sm: 150 },
                  pointerEvents: "none"
                },
                void 0,
                !1,
                {
                  fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
                  lineNumber: 48,
                  columnNumber: 13
                },
                this
              ) }, void 0, !1, {
                fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
                lineNumber: 47,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV27(Container, { as: "nav", children: /* @__PURE__ */ jsxDEV27(List, { children: menuItems2.map((item) => /* @__PURE__ */ jsxDEV27(ListItem, { textAlign: "center", children: /* @__PURE__ */ jsxDEV27(Link, { href: `#${item}`, "data-type": "mobile", children: /* @__PURE__ */ jsxDEV27(Text, { textTransform: "uppercase", fontSize: "3xl", lineHeight: "tight", children: item }, void 0, !1, {
                fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
                lineNumber: 60,
                columnNumber: 21
              }, this) }, void 0, !1, {
                fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
                lineNumber: 59,
                columnNumber: 19
              }, this) }, item, !1, {
                fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
                lineNumber: 58,
                columnNumber: 17
              }, this)) }, void 0, !1, {
                fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
                lineNumber: 56,
                columnNumber: 13
              }, this) }, void 0, !1, {
                fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
                lineNumber: 55,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ jsxDEV27(Container, { variant: "wrap", width: "100%", children: /* @__PURE__ */ jsxDEV27(Flex, { justify: "center", gap: 16, paddingBottom: 40, children: networks.map(({ name, href }) => /* @__PURE__ */ jsxDEV27(Link, { href, isExternal: !0, children: /* @__PURE__ */ jsxDEV27(Text, { children: name }, void 0, !1, {
                fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
                lineNumber: 72,
                columnNumber: 19
              }, this) }, name, !1, {
                fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
                lineNumber: 71,
                columnNumber: 17
              }, this)) }, void 0, !1, {
                fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
                lineNumber: 69,
                columnNumber: 13
              }, this) }, void 0, !1, {
                fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
                lineNumber: 68,
                columnNumber: 11
              }, this)
            ] }, void 0, !0, {
              fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
              lineNumber: 46,
              columnNumber: 9
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
            lineNumber: 33,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ jsxDEV27(Buttons_default, { openMenu, closeMenu }, void 0, !1, {
          fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
          lineNumber: 79,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/ui/components/Layout/Menu/Mobile/index.tsx",
      lineNumber: 22,
      columnNumber: 5
    },
    this
  );
}, Mobile_default = MobileMenu;

// app/ui/components/Layout/Menu/Desktop.tsx
import { jsxDEV as jsxDEV28 } from "react/jsx-dev-runtime";
var DesktopMenu = ({ menuItems: menuItems2 }) => /* @__PURE__ */ jsxDEV28(
  Container,
  {
    as: "nav",
    display: { xs: "hidden", lg: "flex" },
    position: "fixed",
    bottom: 86,
    right: { xs: "0", lg: 40, "2xl": `calc(((100vw - ${toRem(1280)})/2) - ${toRem(28)})` },
    paddingTop: { lg: 86 },
    zIndex: "z50",
    children: /* @__PURE__ */ jsxDEV28(Flex, { direction: "col", align: "end", children: menuItems2.map((item) => /* @__PURE__ */ jsxDEV28(Link, { href: `#${item}`, variant: "line", position: "relative", paddingY: 5, children: /* @__PURE__ */ jsxDEV28(Text, { fontSize: "lg", textTransform: "uppercase", children: item }, void 0, !1, {
      fileName: "app/ui/components/Layout/Menu/Desktop.tsx",
      lineNumber: 18,
      columnNumber: 11
    }, this) }, item, !1, {
      fileName: "app/ui/components/Layout/Menu/Desktop.tsx",
      lineNumber: 17,
      columnNumber: 9
    }, this)) }, void 0, !1, {
      fileName: "app/ui/components/Layout/Menu/Desktop.tsx",
      lineNumber: 15,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/ui/components/Layout/Menu/Desktop.tsx",
    lineNumber: 6,
    columnNumber: 3
  },
  this
), Desktop_default = DesktopMenu;

// app/ui/components/Layout/Menu/index.tsx
import { Fragment as Fragment3, jsxDEV as jsxDEV29 } from "react/jsx-dev-runtime";
var menuItems = ["about", "stack", "inspiration", "contact"], Menu = ({ animateMobileMenu: animateMobileMenu2 }) => /* @__PURE__ */ jsxDEV29(Fragment3, { children: [
  /* @__PURE__ */ jsxDEV29(Mobile_default, { menuItems, networks: networks_default, animateMobileMenu: animateMobileMenu2 }, void 0, !1, {
    fileName: "app/ui/components/Layout/Menu/index.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ jsxDEV29(Desktop_default, { menuItems }, void 0, !1, {
    fileName: "app/ui/components/Layout/Menu/index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/ui/components/Layout/Menu/index.tsx",
  lineNumber: 11,
  columnNumber: 3
}, this), Menu_default = Menu;

// app/assets/img/spotify.svg
var spotify_default = "/build/_assets/spotify-FXIG6M67.svg";

// app/ui/components/Layout/Footer.tsx
import { jsxDEV as jsxDEV30 } from "react/jsx-dev-runtime";
var year = (/* @__PURE__ */ new Date()).getFullYear(), Footer = () => /* @__PURE__ */ jsxDEV30(
  Container,
  {
    as: "footer",
    position: "absolute",
    bottom: "0",
    width: "100vw",
    paddingY: 28,
    paddingBottom: { sm: 40 },
    paddingX: { xs: 0, sm: 20 },
    children: /* @__PURE__ */ jsxDEV30(Container, { variant: "wrap", children: /* @__PURE__ */ jsxDEV30(
      Flex,
      {
        display: { xs: "hidden", sm: "flex" },
        direction: { xs: "col", sm: "row" },
        align: { xs: "start", sm: "center" },
        justify: { sm: "center" },
        children: /* @__PURE__ */ jsxDEV30(Container, { children: [
          /* @__PURE__ */ jsxDEV30(Text, { variant: "withSeparator", children: [
            "\xA9 ",
            year
          ] }, void 0, !0, {
            fileName: "app/ui/components/Layout/Footer.tsx",
            lineNumber: 25,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV30(Text, { children: "Designed & coded with \u{1F525} by Noah Bravo while listening to" }, void 0, !1, {
            fileName: "app/ui/components/Layout/Footer.tsx",
            lineNumber: 26,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ jsxDEV30(Link, { href: "https://spoti.fi/3JVSAsH", isExternal: !0, display: "inline-flex", marginLeft: 6, children: /* @__PURE__ */ jsxDEV30(
            Img,
            {
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
            },
            void 0,
            !1,
            {
              fileName: "app/ui/components/Layout/Footer.tsx",
              lineNumber: 28,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/ui/components/Layout/Footer.tsx",
            lineNumber: 27,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/ui/components/Layout/Footer.tsx",
          lineNumber: 24,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/ui/components/Layout/Footer.tsx",
        lineNumber: 18,
        columnNumber: 7
      },
      this
    ) }, void 0, !1, {
      fileName: "app/ui/components/Layout/Footer.tsx",
      lineNumber: 17,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/ui/components/Layout/Footer.tsx",
    lineNumber: 8,
    columnNumber: 3
  },
  this
), Footer_default = Footer;

// app/ui/components/Layout/index.tsx
import { jsxDEV as jsxDEV31 } from "react/jsx-dev-runtime";
var Layout = ({
  children,
  animateBgColorOnScroll: animateBgColorOnScroll2,
  animateSmoothScroll: animateSmoothScroll2,
  animateMobileMenu: animateMobileMenu2
}) => {
  let containerRef = useRef4(null);
  return animateSmoothScroll2(), useEffect11(() => {
    containerRef?.current && animateBgColorOnScroll2(containerRef.current);
  }, [animateBgColorOnScroll2]), /* @__PURE__ */ jsxDEV31(Container, { position: "relative", children: [
    /* @__PURE__ */ jsxDEV31(Header_default, {}, void 0, !1, {
      fileName: "app/ui/components/Layout/index.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV31(Menu_default, { animateMobileMenu: animateMobileMenu2 }, void 0, !1, {
      fileName: "app/ui/components/Layout/index.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV31(Container, { width: "100vw", minHeight: { lg: "screen" }, overflow: "auto", children: /* @__PURE__ */ jsxDEV31(Container, { ref: containerRef, as: "main", className: "main", width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV31(
      Container,
      {
        width: "100%",
        height: "100%",
        background: `transparent url("${grungepattern_default}")`,
        paddingBottom: 86,
        children
      },
      void 0,
      !1,
      {
        fileName: "app/ui/components/Layout/index.tsx",
        lineNumber: 37,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/ui/components/Layout/index.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/ui/components/Layout/index.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV31(Footer_default, {}, void 0, !1, {
      fileName: "app/ui/components/Layout/index.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/ui/components/Layout/index.tsx",
    lineNumber: 32,
    columnNumber: 5
  }, this);
};

// app/ui/components/Preloader.tsx
import { jsxDEV as jsxDEV32 } from "react/jsx-dev-runtime";
var Preloader = ({ loaded }) => /* @__PURE__ */ jsxDEV32(
  Container,
  {
    position: "fixed",
    zIndex: "z60",
    display: loaded ? "hidden" : "block",
    width: "100vw",
    height: "100vh",
    bgColor: "black",
    children: /* @__PURE__ */ jsxDEV32(Flex, { direction: "col", justify: "center", width: "100%", height: "100%", children: /* @__PURE__ */ jsxDEV32(Container, { variant: "wrap", children: /* @__PURE__ */ jsxDEV32(Flex, { direction: "col", justify: "center", align: "center", children: [
      /* @__PURE__ */ jsxDEV32(
        "svg",
        {
          x: "0",
          y: "0",
          version: "1.1",
          viewBox: "0 0 82.7 98.1",
          width: 135,
          fill: "#fff",
          style: { animation: "Rotate 1.5s infinite" },
          children: /* @__PURE__ */ jsxDEV32("path", { d: "M82.6,45.6c-0.1,0.6-0.1,1-0.4,1.3c0,0.6,0,1-0.1,1.6c0,0.4-0.3,0.9-0.3,1.5l-0.1,0.3v0.3l-0.1,0.9L81.1,52	L81,52.5c0,0,0,0.1-0.3,0.4c-0.1,0.3-0.3,0.7-0.3,1.2l-0.3,0.4L79.9,55l-0.4,0.6l-0.1,0.6c-0.3,0.1-0.3,0.4-0.3,0.4l-0.1,0.3	c-0.4,0.4-0.6,1-1,1.5c-0.4,0.6-0.6,1-1,1.5c-0.1,0.1-0.1,0.1-0.4,0.4l-0.1,0.3l-0.6,0.7c-0.3,0.1-0.4,0.3-0.7,0.6l-0.6,0.6	c-0.7,0.9-1.6,1.6-2.6,2.2c-0.4,0.4-0.7,0.9-1.5,1.3l-0.1,0.1l-0.4,0.1l-0.7,0.4l-0.6,0.6c-0.4,0-0.7,0.3-0.9,0.4	c-0.4,0.3-1,0.4-1.5,0.9c-0.6,0.1-1,0.3-1.6,0.7c-0.4,0.3-0.7,0.3-1.2,0.4c0,0.1,0,0.1,0,0.4c0.6-0.3,1,1,1.6,0.7c0,0.7,0,1.3,0,1.8	c0,0.3,0.1,0.6,0.4,0.9c0.3,1.8,0.7,3.4,1.3,4.7c-0.1,0-0.1,0.3-0.1,0.4c0.1,0,0.1,0,0.1,0c0,0.4,0,0.6,0,0.9c0,0.1,0.3,0.1,0.3,0.1	c0,0.4,0.1,0.9,0.1,1.5c0,0.1-0.1,0.6-0.1,0.9H67c0,0.3-0.4,0.6-0.1,0.9H67c0.3,1.3,0.3,2.5,0,4c0,0-0.1,0.4-0.4,0.6	c0,0.1-0.1,0.1-0.1,0.4v-0.4c0,0.1,0,0.1,0,0.4c-0.1,0-0.1,0-0.1,0v-0.4c0,0.1,0,0.4,0,0.4c-0.3-0.3,0-0.4,0-0.6	c-0.4,0.6-0.7,0.1-0.9-0.4v0.4c-0.4-0.3,0-0.6,0-0.9c-0.1,0,0,0.9-0.4,0.9c0-0.3,0-0.4,0-0.6c-0.3-0.3,0,0.3-0.1,0.3	c0-0.1,0-0.1,0-0.3c-0.1,0.1-0.6,0-0.6,0.1c-0.6,0.4-0.9,0.7-1.3,0c0,0,0-0.4,0-0.6c-0.1,0-0.1,0.1-0.3,0.4	c-0.3-0.3-0.3-0.4-0.4-0.7h-0.3c-1.6,0.3-2.2,0.9-2.4,1.5c0,0-1,0-1.6,0c0.3,0.6-2.1,0.9-1.9,1.5c-1,0-2.2-0.3-3.2-0.3	c-0.6,0-1.5,0.3-2.1,0.3c-1.6,0.1-3.2,0.4-4.9,0.4c-1.5,0.1-3.1,0.1-4.6,0.3c-0.1,0-0.4-0.1-0.9-0.1v0.1c-0.1,0-0.1,0-0.3,0	c-0.7,0-1-0.1-1.8-0.1c0,0.1,0,0.1,0,0.1c-0.9,0-1.9,0-2.9,0c-0.7,0-1-0.1-1.8-0.1c-0.6,0.1-1.2-0.1-1.8-0.1	c-0.1,0.1-0.1,0.1-0.1,0.3c-1.3-0.1-2.5-0.1-4-0.1c-0.6,0-1.2-0.1-1.8-0.1h-2.1c-0.3,0-0.9-0.4-1.5-0.7c-0.1,0-0.1-0.1-0.4-0.1h0.4	c0,0-0.1,0-0.4-0.1c-0.1,0-0.1,0-0.1,0h0.7c-0.1,0-0.6,0-0.7,0c0-0.3,0-0.3,0-0.3c0.4,0,1,0.3,1.5,0.3c-1.3-0.4-0.7-0.7,0.7-0.9	c-0.1,0-0.6,0-0.6,0c0-0.4,1,0,1.2,0c0.3-0.1-1.2,0-1.3-0.4c0.3,0,1,0,1.3,0c0.3-0.1-1.2,0-1-0.1c0.4,0,0.7,0,1,0	c-0.6-0.1,0-0.4-0.3-0.6c-0.7-0.4-1.5-0.9,0-1c0-0.3,0.1-0.3,0.3-0.3c-0.3-0.3-0.7-0.6-1.3-0.7c-0.3,0,0-0.4,0-0.6	c-0.7,0-0.9-0.9-1.8-0.9c0.3-0.4,0.4-1,0.3-1.5c0-0.1-0.3-0.3-0.3-0.7c-0.1-0.6-0.3-1.3-0.6-1.9c-0.1-0.6-0.1-1.2-0.4-1.8v-0.3h-0.1	v-0.1c0-0.1,0.1-0.4,0-0.6c-0.1-0.4-0.1-0.9-0.1-1.3c0-0.1,0.1-0.3,0.1-0.6h-0.1c0-0.1,0.3-0.4,0.1-0.6h-0.1c0-0.4-0.3-1,0-1.5v-0.3	v-0.3c-0.4-0.1-0.6-0.1-1-0.4c-1.5-0.6-2.9-1.2-4-1.8c-0.6-0.4-0.6-0.3-0.3-0.3c-2.9-1.3-5.4-3.4-7.6-5.6c-2.1-2.5-3.8-5.1-4.9-8.1	C1.9,53.7,1.1,52,1,50.4c-0.4-1.6-0.6-3.2-0.6-4.9c-0.3,0-0.3-0.3-0.3-0.3c-0.1-2.1-0.1-3.8,0-5.7c0-1.8,0.4-3.4,0.7-5.4	c0.1-1.3-0.3-0.4-0.3-0.7L0.8,32l0.3-1.3V30l0.3-0.6l0.4-1.5l0.3-1.5l0.3-0.6L2.6,25l0.6-1.2l0.4-1.5l0.1-0.6l0.4-0.6l0.6-1.5	l0.7-1.2c0.1-0.1,0.1-0.4,0.3-0.6L6.3,17c0.9-1.6,2.1-3.2,3.2-4.7c1.5-1.6,2.9-3.1,4.4-4.3c1.6-1.2,3.2-2.2,4.9-3.2	c1.6-1,3.5-1.9,5.3-2.6c1.9-0.6,3.7-1.3,5.6-1.6c2.1-0.4,5.4-0.9,9.1-0.3c0.4,0,0.9,0.3,1.3,0.4c0.1,0,0.3,0,0.6,0	c0.1,0.1,0.4,0.1,0.6,0.1c-1-0.1-2.1-0.1-3.1-0.3c1.2,0.1,2.5,0.3,3.5,0.6c0.1,0.1,0.6,0.1,0.7,0.4c-1.3-0.4-2.6-0.7-3.8-0.9	c0,0,0.1,0,0.4,0.1c0.3,0,0.7,0,1.2,0.3c0.4,0,1,0,1.5,0.1c0.4,0,0.7,0.3,1,0.3c0,0,0,0,0,0.1c-1.3-0.4-2.9-0.9-4.4-1	c-1.6,0-2.9,0-4.3,0c1.9,0,2.9,0.1,3.4,0.1c0.6,0.3,0.3,0.3-0.3,0.3C36,1.3,33,1.3,29.4,2.3c0.3,0,0.6-0.1,1-0.1	c0.4-0.3,0.9-0.3,1.3-0.3c0.6-0.1,1.2-0.1,1.2-0.1s-0.6,0.1-1,0.1c-0.4,0.3-0.9,0.3-1,0.3c-0.4,0.1-0.9,0.1-1.2,0.1	c-1.6,0.4-3.4,0.9-4,1.2c-0.1,0.3,1.6-0.3,3.5-1c1.8-0.3,4.1-0.6,4.4-0.6c-2.4,0.3-4.9,1-7.1,1.6c-0.4,0.3-0.3,0.3,0.1,0.3	c0.4-0.3,1.3-0.4,2.1-0.6c1.6-0.7,3.5-0.9,3.2-0.9c-1,0.1-2.1,0.4-2.8,0.6c-0.9,0.3-1.9,0.6-2.9,1C28,3.5,28,3.5,28,3.8	c0,0,0,0.1,1,0c1.3-0.3,3.2-0.3,3.7-0.3c0.1,0.3,0.1,0.3-0.4,0.4c-0.6,0.3-1.6,0.4-3.2,1c-0.7,0.3-1.9,0.6-3.4,1.3	c-1.2,0.3-2.8,1.2-4.3,1.9c1-0.6,2.5-1,3.8-1.6c-1.3,0.9-2.8,1.6-4.3,2.5c-1.3,1-2.6,2.1-3.8,3.1c-1.5,1.2-2.6,2.6-4,4.3	C12,18.1,11,20,10,22c-2.1,4-3.2,8.5-3.8,12.8c-0.3,0.4-0.3,0.9-0.3,1.5c-0.1,1.8-0.6,4.6-0.3,7.8c0.1,3.1,0.7,6.5,2.4,10	c1.6,3.5,4.3,6.8,7.8,9.3c1.9,1.2,3.7,2.2,5.9,2.9c2.1,0.9,4.4,1.5,6.5,2.1c2.2,0.4,4.7,0.9,6.9,1c2.2,0.3,4.3,0.3,6.5,0.3	c2.4,0,4.4-0.3,6.3-0.4c1.9-0.3,4-0.6,5.6-1c3.7-0.9,6.6-1.9,8.8-2.9c0.6-0.3,1.2-0.6,1.6-0.7c0.6-0.1,1-0.6,1.5-0.9	c0.7-0.3,1.3-0.7,1.8-1c5.6-3.4,9.7-8.5,11-14.4c0.6-2.9,0.9-6,0.6-9.3v-0.6c0-0.3,0-0.4,0-0.6l-0.1-1l-0.1-1.3L78,34.2	c-0.3-1.5-0.7-2.8-1.3-4.3c-1-3.1-2.8-5.7-4.4-8.4c-1-1.5-2.1-2.6-3.1-4c-0.3-0.6-0.9-1.2-1.6-1.8c-0.3-0.6-1-1-1.6-1.6	c-1.2-1.3-2.2-2.4-3.7-3.1c-1.2-1-2.4-2.1-3.8-2.6c-2.6-1.6-5.7-2.9-8.7-3.2c0.4,0,0.4,0,0.3,0C49.7,5,49.2,5,48.6,4.8	c-0.1,0-0.4,0-0.6,0c-0.3,0-0.4-0.3-0.6-0.3c-0.4,0-0.4,0,0.1,0c0-0.1,0.1-0.1,0.4-0.1c0.4,0.1,0.6,0,1,0.1c0.6,0,1.5,0.3,2.4,0.4	c1.9,0.4,3.8,1.3,5.4,1.9c2.1,0.7,3.7,1.8,4.9,2.6c1.5,0.7,2.5,1.3,3.2,1.8c1.6,1,2.5,1.5,2.9,1.6c0.1,0,0.4,0.3,0.7,0.7	c0.3,0.1,0.6,0.3,0.9,0.7c0.1,0.3,0.6,0.4,0.7,0.9c1.3,1.3,2.8,3.1,3.7,4.4c-0.6-1.2,1.3,0.9,2.9,3.1c1.6,2.5,3.1,5.1,3.2,4.7	c0.4,1.3,1,2.6,1.5,4.1c0.4,1.6,0.6,3.1,0.9,4.7C82.7,39.5,82.7,42.8,82.6,45.6z M15.3,43.1c0.3-0.4,0.3-0.9,0.3-1.5	c0-0.1-0.3-0.1-0.3-0.1c0.3-1.9,1-3.7,2.1-5.6c0.6-0.7,1.5-1.5,2.4-2.1c0.6-0.6,1.6-1.2,2.4-1.6c0.4-0.1,1.3-0.1,2.4-0.1	c0.1,0,0.3,0,0.6,0c-0.3,0.1-0.4,0.1-0.6,0.1c0.1,0,0.3,0,0.6,0c0.1,0,0.1,0,0.1,0c-0.1,0-0.4,0.3-0.7,0.3c0.1,0,0.7-0.3,0.9-0.3	c-0.6,0.3-1.3,0.4-1.9,0.6c1-0.1,1,0,0.7,0.3c-0.1,0.1-0.6,0.3-1.5,0.7c0.3,0,0.3-0.1,0.4-0.1c0.3,0,0.4,0,0.4,0	c0,0.1-0.4,0.1-0.6,0.4c-0.4,0-0.9,0.1-1,0.1c0.1,0.1,0.4,0,0.7-0.1c0.4-0.3,0.9-0.3,1-0.3c-0.3,0.3-1,0.6-1.3,0.9	c0,0.1,0.1,0,0.6-0.3c0.1-0.1,0.6-0.3,0.6-0.1c-0.4,0.1-0.9,0.1-1.2,0.6c0.7-0.1,0.3,0.3,0.7,0.3c0.4,0.1,0.9,0.1,1,0.1	c0.3,0.1,0,0.4-0.6,0.9c0,0,0,0,0,0.1c1.2,0,1.8-0.1,2.2-0.4c0-0.1,0.3,0,0.6,0.3c0.3,0,0.3,0.1,0.4,0.1c0.3,0.1,0.4,0.1,0.4,0.4	c0-0.3,0.1-0.3,0.4-0.3c0.1,0,0.6,0,0.7,0.3c0.7,0.1,1.3,0.6,1.5,0.1c0.4,0.4,0.9,1,1.2,1.9c0.3,0.6,0.4,1.2,0.7,2.1	c0.3,0.7,0.3,1.6,0.3,2.6c0,1.2-0.3,2.2-1,3.2c-0.3,1-1.2,1.8-1.8,2.6c-0.1,0.1-0.4,0.4-0.4,0.4c-0.1,0.1-0.4,0.4-0.6,0.6	c-0.4,0.4-0.9,0.7-1.2,1c-0.7,0.4-1,0.6-1.8,0.7c-0.6,0.4-1.2,0.7-1.8,0.7c-0.4,0-1,0-1.5-0.3l-0.1,0.3c-0.3,0-0.4-0.3-0.6-0.3	c-1.3-0.1-2.1-1-2.6-1.5c-0.3-0.1-0.3,0-0.3,0c-0.6-0.6-1.2-1.2-1.6-1.9c-0.4-0.9-0.9-1.5-1-2.4c-0.1-0.7-0.1-1.6-0.1-2.4h-0.3	C15.3,43.8,15.3,43.5,15.3,43.1z M20.8,43.8c0,0.4,0,1,0.1,1.8c0.3,0.6,0.6,1.2,0.9,1.6c0.1,0.1,0.4,0.1,0.6,0.3c0.1,0,0.4,0,0.4,0	c0.4,0.3,0.7,0,1.5-0.1c0.1-0.1,0.3-0.4,0.6-0.6c0.1,0,0.3-0.1,0.3-0.1c0.3-0.3,0.4-0.4,0.4-0.4c1-1,1.5-1.6,1.6-2.1	c0.3-0.4,0.4-0.9,0.7-1.3c0-0.1,0-0.6,0-0.9c0-0.7-0.4-1.5-1-2.4c-0.4-0.1-0.7-0.6-1-1c-0.7-0.4-1-0.6-1.5-1c-0.4-0.1-1-0.3-1.5-0.6	c-0.4,0.4-0.6,1-0.7,1.5c-0.3,0.4-0.7,1-0.9,1.8c-0.4,0.7-0.6,1.5-0.6,2.1c0,0.3,0,0.3,0,0.3C20.8,42.8,20.8,43.2,20.8,43.8z M22.6,36.7c0,0.1-0.1,0.1-0.1,0.4c0-0.3,0.1-0.3,0.1-0.3c0.3,0,0.3,0,0.4,0C22.9,36.9,22.9,36.7,22.6,36.7z M64.7,92.3	c-0.3,0.1-1.3,0-2.1,0c-1.8,0.4-2.1,1-2.4,1.6c0,0.3-1,0.3-1.6,0.3c0.4,0.6-1.8,1-1.8,1.6c-0.9,0-2.1-0.3-3.1,0	c-0.9,0-1.5,0.1-2.1,0.3c-3.2,0.4-6.3,0.9-9.3,1.3c-0.3,0-0.6,0-0.7,0c0,0,0,0.1-0.3,0.1c0,0,0,0-0.1,0c-0.6,0-1.2,0-1.6,0	c0,0,0,0,0,0.3c-1,0-2.1,0-3.1,0c-0.6,0-1,0-1.6-0.3v0.3c-0.6,0.1-1.3-0.3-1.9-0.3c-0.1,0.3-0.1,0.3-0.1,0.4c-2.5,0-5.1-0.1-7.8-0.1	c-0.1,0-0.7-0.4-1.5-0.7c-0.1,0-0.3-0.1-0.3-0.1h0.3c-0.1,0-0.3,0-0.6,0c0-0.1,0-0.1,0-0.1h0.6c-0.1,0-0.3,0-0.6,0	c0.4-0.3,1,0,1.5,0c-1.2-0.4-0.6-0.7,0.7-0.9c-0.1,0-0.6,0-0.6,0c0-0.4,1,0,1.3,0c0-0.1-1.3,0-1.5-0.4c0.4,0,0.7,0,1.2,0	c0.4-0.1-1,0-1-0.1c0.4,0,0.9,0,1.3,0c-0.7-0.1-0.3-0.4-0.7-0.6c-0.3-0.4-1.2-0.9,0.3-1c0.1-0.3,0.7-0.3,1.5-0.3	c-0.3-0.1-0.4-0.1-0.9-0.3c0.6,0,1.2-0.3,1.9-0.4c1.3-0.4,3.4-0.4,4.9-0.4h0.4c2.8,0.1,14.3,0,15.9-0.4c5.1,0,9.9-0.1,14.7,0	C63.8,91.9,65,92.2,64.7,92.3z M32.3,84.1c0.1,0,0.4,0,0.6,0c0,0,0-0.1,0-0.3c0-0.3-0.1-0.4-0.4-0.7c-0.1-0.3-0.6-0.9-0.7-1.3	c-0.3-0.4-0.7-0.9-0.9-1.3c0-0.1,0-0.1,0-0.3c0,0,0,0.1-0.1,0c0-0.3,0-0.4,0-0.4c0-0.3,0,0-0.3,0c0-0.4-0.1-0.6-0.1-1	c0-0.3,0-0.4,0.1-0.4h-0.1c-0.3-0.1,0.1-0.4,0-0.6H30c-0.1-0.4-0.1-0.9-0.1-1.2c-0.1-0.3-0.1-0.3-0.1-0.4c0-0.3,0-0.4,0-0.6	c0-0.3,0.1-0.4,0.1-0.7c0.1,0,0.1-0.1,0.4-0.1v0.1c0-0.1,0-0.1,0-0.1v-0.1l0.1,0.1v-0.1c0,0.1,0,0.3,0,0.3c0.3-0.3,0.6-0.3,0.9,0	c0,0-0.3-0.1,0-0.1c0.1,0,0,0.4,0,0.4c0.1,0,0-0.4,0.1-0.4l0.3,0.1c0.3,0,0-0.1,0-0.1c0.1,0,0.1,0.1,0.1,0.1	c0.1-0.1,0.4-0.1,0.6-0.3c0,0-0.1,0-0.4,0l-0.7-0.3h-0.9c-1.2-0.1-2.6-0.6-4.1-0.7c-0.1,0-0.1,0-0.6,0c0,0.6,0,2.2,0,3.7	c0,0.6,0,1.3,0,2.1c0,0.3,0.3,1,0.3,1.2c-0.3,1.5-0.3,3.1-0.4,4.6c0.4-0.3,1-0.3,1.5-0.4c1.3-0.3,3.4-0.3,5-0.3H32.3z M26,85.1	c-0.3,0-0.4,0-0.4-0.1c0,0.1,0,0.1,0,0.1S25.7,85.1,26,85.1z M33.6,74.5h0.3H33.6z M55,85.1c-0.4-0.1-0.7-0.3-1.2-0.3	c0,0,0-0.4,0-0.7c-0.9,0.3-1-0.6-1.6-0.6c0-0.4,0-0.7,0-1.2c0-0.1-0.3-0.4-0.4-0.9c-0.4-1-0.9-2.2-1-3.2c0-0.1,0-0.1,0-0.4	c0,0,0,0-0.1,0c0-0.1,0.1-0.3,0.1-0.6c-0.1,0-0.1,0-0.1,0c0-0.4-0.3-0.7-0.3-1.2c0.3-0.3,0.4-0.4,0.4-0.4l-0.1-0.1	c0-0.3,0.3-0.4,0.1-0.7h-0.1c0-0.3,0-0.7,0-1h-0.4c-0.9,0.3-1.6,0.3-2.5,0.4c0,0.3,0.1,0.4,0,0.4v0.1c0,0.4,0.1,1.3,0.1,2.1	c0.3,1,0.4,1.9,0.4,2.1c0.3,1.3,0.6,2.5,0.4,3.7c0,0-0.1,0.4-0.4,0.3c-0.1,0,0-0.3,0-0.4c-0.4-0.4-1.2-0.4-1.6-0.4	c-0.1,0-0.1-0.4-0.1-0.4c-0.6,0.3-1-0.3-1.9-0.3c0-0.3,0.3-0.7,0-0.9c0-0.1-0.1-0.4-0.4-0.4c-0.6-0.7-1-1.6-1.3-2.4v-0.3h-0.3	c0-0.1,0-0.4,0-0.6c0,0,0,0-0.1,0c0-0.1,0-0.4-0.1-0.9c0.1,0,0.1-0.1,0.3-0.3h-0.1c-0.1-0.3,0.1-0.4,0-0.7c0,0,0,0-0.1,0	c0,0,0,0,0-0.1c-1.8,0.1-3.5,0.1-5.1,0.1l-1.6-0.1c-0.3,0-0.7,0-1,0c0.1,0,0.1,0,0.3,0.1c0.4,0.4,0.7,1,0.7,1.8h0.1	c0,0.6,0.1,1.8,0.4,2.9c0.1,0.7,0.1,1.3,0.4,1.8c0,0.3,0.1,0.7,0.1,1c0.1,0.7,0.1,1.6,0.4,2.2c1.2,0.1,2.6,0.1,3.8,0.1	c1.9,0,3.5,0.3,5,0.3c1.3,0,2.4,0,2.8,0C50.7,85,52.9,85,55,85.1z M42.9,54.5c-0.1,0.1,0,0.1,0,0.1V54.5c0.1,0,0.1,0,0.4,0.1	c0,0,0,0,0,0.3c0.1,0,0.1,0,0.1,0c0.3-0.3,0.6-0.3,0.9-0.3c0.4,0.3,0.7,0.4,1,0.3c0.1,0,0.1,0.1,0.1,0.3c0,0,0.3,0.3,0.3,0.4	c0,0.1,0,0.4,0,0.4c0,0.1,0.1,0.4,0.1,0.6c0,0.1,0.1,0.9,0.4,1.2c0,0.3-0.3,0.4-0.3,0.4c0,0.3,0,0.4,0,0.4c0,0.4-0.1,0.6-0.1,1	c-0.1,0-0.1,0.1-0.1,0.4c-0.3,0-0.3,0.1-0.4,0.3l-0.3,0.3C45,61,45,61.3,44.8,61.3c-0.7,0.3-1.3,0.7-2.1,1h-0.3h-0.1	c-0.1,0-0.4,0-0.6,0c-0.4-0.3-1-0.3-1.3-0.4c-0.1-0.3-0.3-0.3-0.6-0.4c-0.1,0-0.1,0-0.1,0c-0.3,0-0.3-0.1-0.3-0.1	c-0.1,0-0.3-0.3-0.3-0.4l-0.3-0.3c0-0.1-0.1-0.1-0.1-0.3L38.3,60c0,0,0,0-0.1,0c0-0.1-0.1-0.3-0.1-0.6c-0.3-0.1-0.3-0.1-0.4-0.4	v-0.3v-0.3c-0.1-0.1-0.1-0.4-0.1-0.6c0-0.1,0-0.4,0-0.6c0,0,0-0.3,0-0.4c-0.3-0.4,0.1-0.9,0-1.2c0-0.3-0.3,0-0.3,0	c0-1.6,0.4-3.1,0.9-4.4c0-0.1,0.3-0.3,0.7-0.7h0.3v0.1c0,0,0-0.1,0.1-0.1v0.1c0,0,0-0.1,0.1-0.1c0,0.1-0.1,0.4-0.3,0.6	c0.6-0.6,0.7,0,0.6,0.6c0-0.1,0.1-0.4,0.1-0.4c0.3,0.3-0.1,0.7-0.1,0.7c0.1,0.1,0.1-0.4,0.6-0.7c-0.1,0.3,0,0.7-0.1,0.9	c0.1,0.1,0.1-0.6,0.3-0.6c-0.1,0.1-0.1,0.4-0.1,0.6c0.1-0.1,0.4,0,0.6,0c0.6-0.1,1-0.4,1.3,0.1c0,0.3,0,0.4-0.3,0.7	c0.3,0,0.4,0,0.4-0.3c0.1,0.4,0.4,0.6,0.4,1C42.7,54,42.9,54.2,42.9,54.5z M49.2,38.1c0.4-1.8,1-3.8,2.1-5.6c0,0-0.1-0.3-0.4-0.3	c-0.1-0.1-0.3-0.4-0.1-0.4c0.1,0,0.4,0,0.7,0.3c0.3-0.3,0.3-0.3,0.3-0.3c0.4-0.6,1.2-1.2,2.1-1.8c0.1-0.3,0.4-0.3,0.7-0.4	c-0.1,0.1-0.3,0.4-0.6,0.6c0.3-0.1,0.4-0.4,0.6-0.6c0.3,0,0.3,0,0.3,0c-0.3,0.1-0.4,0.4-0.6,0.9c0-0.3,0.1-0.3,0.1-0.4	c0.1-0.3,0.4-0.4,0.6-0.4c-0.6,0.4-1.2,1.2-1.6,1.6c0.1-0.1,0.6-0.4,0.6-0.4c0.3-0.1,0.3,0,0.3,0c0,0.4-0.4,1-0.9,1.8	c0.1-0.3,0.4-0.4,0.4-0.4c0,0.1,0,0.1-0.3,0.6c0-0.1,0.3-0.1,0.3-0.1c0.1-0.3,0.1-0.4,0.4-0.4c-0.3,0.1-0.4,0.4-0.4,0.6h0.1	c0,0,0-0.1,0,0c0.9,0,1.5,0,1.9,0c0.6-0.1,0.7-0.4,1-0.6c0.1,0,0.3,0,1,0.1c0.3,0.3,0.7,0.4,1.2,0.6c-0.1-0.3,0.6-0.3,1.5-0.1	c0.7,0,1.6,0.1,1.6-0.1c1.2,0.7,2.8,1.8,4.1,2.8c0.7,0.6,1.6,1.2,2.4,2.1c0.4,0.6,0.9,1.2,1.3,1.8l0.1,0.4c0,0.3,0.1,0.4,0.1,0.6	c0,0.3,0.3,0.4,0.3,0.7v0.3v0.4v0.3v0.6c0,0.3,0,0.7,0,1c-0.3,0.3-0.3,0.7-0.4,1.2c0,0.1-0.1,0.6-0.4,1c-0.6,1.2-1.3,2.2-2.2,3.1	c-0.9,1-1.9,1.8-2.8,2.6c-0.3,0-0.4,0.1-0.7,0.1c-0.1,0-0.3,0.3-0.6,0.3c0,0.1,0,0.1-0.1,0.1c0,0.1-0.3,0.1-0.4,0.4	c-1,0.4-2.2,0.4-3.1,0.6c-0.1,0-0.1,0-0.1,0c-1,0.1-2.4,0-3.4-0.4c-0.9-0.4-1.9-1-2.8-1.8c-0.9-0.9-1.2-1.6-1.9-2.5h-0.1	c-0.1-0.6-0.4-1.2-0.6-1.6c-0.1-0.6-0.1-1-0.6-1.6c0-0.4-0.3,0-0.3,0C49.2,42.8,49.1,40.4,49.2,38.1z M52.5,33.8	c0.3,0,0.4-0.4,0.7-0.7C52.9,33.4,52.7,33.7,52.5,33.8z M53.5,33.2c0,0.1-0.1,0.4-0.3,0.6c0.3-0.1,0.3-0.1,0.6-0.1	c0,0,0.1,0.1,0.4,0c0,0,0.1,0,0.1-0.3C54.2,33.4,53.9,33.2,53.5,33.2z M53.3,33.2c0,0.1-0.1,0.4-0.1,0.6c0,0.3,0.1-0.1,0.3-0.6	C53.5,33.2,53.5,33.2,53.3,33.2z M55.2,33.8c0,0,0,0.3-0.3,0.4c0,0.4-0.4,1-0.6,1.9c0.1-0.3,0.4-0.7,0.6-0.9	c-0.1,0.9-0.1,1.6-0.1,2.5c0,0.7-0.3,1.8,0,2.8c0,1,0.1,2.1,0.4,2.9c0.1,0.1,0.1,0.1,0.1,0.3c0,0.4,0.1,0.9,0.6,1.5	c0.4,0.6,0.9,1.3,1.2,1.6c0.7,0.4,1.3,0.6,1.9,0.9c0.6,0,1.5-0.3,2.2-0.6c0.4-0.3,0.9-0.4,1.3-0.6c0.3-0.4,0.7-0.7,1.2-1	c0.4-0.4,0.6-0.7,1-1c0.1-0.4,0.6-0.7,0.6-1c0.1-0.3,0.4-0.4,0.4-0.7c0.1-0.1,0.1-0.3,0.1-0.6c0-0.1,0-0.1,0-0.1c0-0.1,0-0.1,0-0.1	c0-0.3,0-0.3,0-0.4c0-0.4-0.1-0.9-0.6-1.3c-0.1-0.3-0.6-1-1.2-1.3c-1-1-2.4-1.9-3.7-2.6c-1.5-0.9-3.1-1.5-4.6-2.1	C55.8,34.1,55.4,33.8,55.2,33.8z M55,72.9c0.3-0.1,0.3-0.1,0.4-0.1c-0.1,0-0.1,0-0.4,0V72.9z M61.9,85.6c-0.1-0.7-0.3-1.6-0.3-2.2	v-0.3c0-0.6,0-2.4-0.3-4.3c0-0.7,0-1.8-0.1-2.4c0-0.7,0-1.3-0.3-1.5c0-1.5,0-2.6,0-4.1c-0.3,0.1-0.7,0.1-1.2,0.4	c-1,0.4-2.1,0.7-3.1,1c-0.4,0.1-0.7,0.1-1.2,0.4c0.1,0.1,0.4,0.3,0.4,0.6c0.1,0.3,0.1,1.2,0.1,1.8c0,0.6-0.1,1.9-0.1,3.1	c0,1.2,0,2.5,0.1,2.6c0,1.5,0,2.9,0,4.3C58,85.1,60,85.4,61.9,85.6z" }, void 0, !1, {
            fileName: "app/ui/components/Preloader.tsx",
            lineNumber: 29,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/ui/components/Preloader.tsx",
          lineNumber: 20,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ jsxDEV32(
        "svg",
        {
          x: "0",
          y: "0",
          version: "1.1",
          viewBox: "0 0 114 49.7",
          width: 100,
          style: { display: "flex", marginTop: toRem(46) },
          children: /* @__PURE__ */ jsxDEV32("g", { children: [
            /* @__PURE__ */ jsxDEV32(
              "path",
              {
                fill: "#fff",
                d: "M0.3,0.2h3.9c0.3,0,0.5,0.2,0.5,0.5v3L4.6,3.9l0.1,0.2c0,1.3,0,2.1,0.1,2.3 c0,1.7-0.1,3.2-0.1,4.5v3.9l-0.1,0.2v0.1l0.1,0.2V16c0,0,0,0.1-0.1,0.1l0.1,0.1c0,0.7,0,1.9,0.1,3.5l-0.1,0.1 c-0.1,0-0.2-0.1-0.3-0.1v0.1c0.3,0.2,0.4,0.3,0.4,0.4v1.2H4.6v0.1l0.1,0.2v11.1L4.6,33c0.1,0,0.1,0.1,0.1,0.1v11.3 c0,0.1,0,0.1-0.1,0.1l-0.3-0.1H4.3v0.1c0.3,0,0.5,0.2,0.5,0.6c1.4,0,2,0.1,2,0.4c0.3,0.2,0.4,0.4,0.4,0.4l0.1-0.1h0.3 c0.4,0,0.5,0.1,0.6,0.2c0,0.2,0,0.4-0.1,0.6c0,0.2,0.1,0.4,0.1,0.5l-0.1,0.1l0.1,0.1l-0.1,0.1c0.1,0,0.2,0,0.2,0.1v0.1 c0,0.1-0.1,0.1-0.2,0.2c0.1,0.4,0.1,0.6,0.1,0.7C8,49,7.9,49.1,7.9,49.2c-0.1,0-0.2,0.1-0.4,0.1v0.2L8,49.4l0.1,0.1v0.1H5.8 l-0.4-0.3H5.3l0.1,0.2v0.1H5.3c-0.7,0-2.2,0-4.5,0.1c-0.5-0.1-0.8-0.2-0.8-0.4v-0.7c0-0.1,0.1-0.1,0.2-0.1v-0.1 c-0.1,0-0.2,0-0.2-0.1V35.4c0-1.1,0-2.6,0.1-4.5c0-0.1-0.1-0.2-0.1-0.3c0-0.6,0.1-0.8,0.4-0.8c0.3,0,0.7-0.1,1.2-0.3H2L2,29.3 L2.3,29v-0.2H2.2l-0.9,0.6l-0.4-0.1c0,0.1,0,0.1-0.1,0.1c-0.3-0.1-0.5-0.2-0.6-0.2c0-0.2,0-0.6-0.1-1.1L0.3,28h0.3v0.2h0.2 c0.5-0.2,0.8-0.4,0.8-0.4l-0.1-0.4H1.5C1,27.7,0.8,27.9,0.7,28v-0.2H0.3c-0.1,0-0.1,0-0.1-0.1v-0.6c0-0.1,0.1-0.1,0.2-0.1l-0.3-0.4 V26c0,0,0-0.1,0.1-0.1l-0.1-0.1v-3.9c0.4-0.2,0.6-0.4,0.6-0.6H0.1v-0.3C0.1,21,0.2,21,0.4,21v-0.1c-0.2,0-0.3,0-0.3-0.1V15l0.1-0.2 c-0.1,0-0.1,0-0.1-0.1V8.3c0,0,0-0.1,0.1-0.1L0.1,8.1V1.9L0,1.5c0-0.1,0.1-0.2,0.1-0.4V0.4C0.1,0.4,0.1,0.3,0.3,0.2z M0.1,21.5h0.1 v0.1C0.1,21.7,0.1,21.6,0.1,21.5z M0.2,21.2L0.2,21.2l0.1,0.1v-0.1H0.2z M0.2,48.6L0.2,48.6c0,0.2,0.1,0.2,0.1,0.2h0.2 c0-0.1-0.1-0.2-0.1-0.2H0.2z M0.3,22.7v0.1h0.1C0.4,22.8,0.4,22.7,0.3,22.7z M0.3,46.6v0.1c0,0.1,0.1,0.1,0.1,0.1v-0.3H0.3z M0.4,18c0,0.1,0.1,0.1,0.1,0.1h0.1V18H0.4z M0.4,44.3v0.1h0.1C0.6,44.3,0.5,44.3,0.4,44.3z M0.6,5.1L0.5,5.2l0.1,0.1l0.1-0.1 L0.6,5.1z M0.5,23.2C0.5,23.2,0.6,23.2,0.5,23.2c0.2,0,0.2,0,0.3,0c0-0.1,0-0.1-0.1-0.1C0.5,23.1,0.5,23.1,0.5,23.2z M0.5,23.9 C0.5,24,0.6,24,0.6,24h0.1v-0.1H0.5z M0.5,27.1L0.5,27.1l0.2,0.1v-0.1H0.5z M0.5,33.9L0.6,34L1,34v-0.1H0.5z M0.6,21.8v0.1h0.1 L0.6,21.8L0.6,21.8z M0.6,24.9V25C1,25,1.2,25,1.2,24.8c-0.1,0-0.1,0-0.1-0.1C0.9,24.8,0.7,24.9,0.6,24.9z M0.6,43.9 c0,0,0.1,0.1,0.2,0.2L1.2,44c0.1,0,0.2,0.1,0.6,0.2l0.1-0.1c0.5,0,1.2,0.3,1.9,0.8c0,0,0,0.1,0.1,0.1H4l-0.1-0.1 C4,44.8,4,44.8,4,44.7c-0.3-0.2-0.6-0.4-0.9-0.4v-0.1l0.1-0.1c-0.1,0-0.5-0.1-1.2-0.3H1.5c-0.2,0-0.4,0-0.6,0.1 C0.8,43.9,0.7,43.9,0.6,43.9z M0.8,27.6L0.8,27.6L0.8,27.6c0.3,0,0.5-0.2,0.8-0.4c0-0.1-0.1-0.2-0.1-0.2H1.3L0.8,27.6z M0.8,44.4 c0,0.1,0.1,0.1,0.1,0.1v-0.1H0.8z M0.8,9.8L0.8,9.8L1,9.8V9.8H0.8z M0.8,15.1c0,0.1,0.1,0.1,0.1,0.1h0.1C1.1,15.2,1,15.1,0.8,15.1 L0.8,15.1z M0.8,18.1v0.1H1v-0.1H0.8z M0.8,30.2c0,0.1,0.5,0.3,1.4,0.5l0.1-0.1h0.1l0.2,0.1h0.2v-0.1c-0.3,0-0.5-0.1-0.8-0.4 c0,0-0.1,0-0.2,0.1L0.8,30.2z M0.8,47.7c0,0.1,0.1,0.1,0.3,0.2l0.1-0.1L0.8,47.7z M0.9,22.4L0.9,22.4l0.2,0.1v-0.1H0.9z M0.9,43 v0.3l0.8,0.1h0.4v-0.1H1.8C1.5,43.2,1.1,43.2,0.9,43z M1,10.1L1,10.1l0.2,0.1v-0.1H1z M1,18.4v0.2h0.1c0.1,0,0.1,0,0.1-0.1 l-0.1-0.1H1z M1.1,21.4c0,0.1,0.1,0.1,0.1,0.1h0.1c0.1,0,0.1,0,0.1-0.1H1.1z M1.2,15.3c0,0.1,0.1,0.1,0.1,0.1h0.1 c0-0.1,0-0.1-0.1-0.1H1.2z M1.2,47.5c0.3,0,0.5,0.1,0.6,0.1L2,47.3H1.6C1.3,47.3,1.2,47.3,1.2,47.5z M1.3,2.2h0.1 c0.1,0,0.2-0.1,0.2-0.1C1.6,2,1.6,2,1.5,2C1.4,2,1.3,2,1.3,2.2z M1.3,22.3v0.1c0.1,0,0.2-0.1,0.4-0.1v-0.1H1.7L1.3,22.3z M1.3,37.4 L1.3,37.4l0.3,0.1v-0.1H1.3z M1.5,3.1l0.1,0.1h0.3C2,3.2,2,3.1,2,3L1.7,3H1.6C1.5,3,1.5,3,1.5,3.1z M1.5,24.2L1.5,24.2l0.1,0.1 v-0.1H1.5z M1.5,27.3v0.1c0.1,0,0.1,0,0.1-0.1H1.5z M1.6,15.5L1.6,15.5C2.2,15.8,2.6,16,2.7,16v-0.1C2.4,15.6,2.1,15.5,1.6,15.5 L1.6,15.5z M1.7,18.9L1.7,18.9L1.9,19v-0.1H1.7z M1.8,25.9c0,0.1,0.1,0.2,0.1,0.4H2c0.1,0,0.1,0,0.1-0.1C2,26,1.9,25.9,1.8,25.9z M1.8,1.9L1.8,1.9L2,2V1.9H1.8z M1.8,26.6v0.1H2v-0.1H1.8z M1.8,44.6v0.1h0.4c0-0.1-0.1-0.2-0.1-0.2C1.9,44.6,1.9,44.6,1.8,44.6z M1.9,5.1v0.4H2c0.1,0,0.2-0.1,0.2-0.1c0,0.2,0.2,0.3,0.4,0.3h0.1C2.4,5.3,2.2,5.1,2.2,5.1C2.1,5.1,2,5.1,1.9,5.1z M1.9,23.3v0.1 h0.6v0.2h0.3v-0.1c0-0.1-0.2-0.2-0.7-0.3H1.9z M2,26.6C2,26.9,2,27,2,27.1l0.6,0.6h0.1c0-0.1,0-0.1,0.1-0.1l-0.1-0.1 c0-0.1,0.1-0.2,0.1-0.3L2.7,27c-0.1,0-0.2,0-0.4,0.1v-0.5H2z M2.1,19.1v0.1c0.1,0,0.2,0,0.3,0.1h0.1v-0.1 C2.4,19.2,2.3,19.1,2.1,19.1L2.1,19.1z M2.1,24.4L2.1,24.4l0.1,0.1v-0.1H2.1z M2.2,22v0.1h0.1L3,22.1v-0.1H2.9L2.2,22z M2.2,47 c0,0.1,0.1,0.1,0.1,0.1V47H2.2z M2.3,19.6L2.3,19.6l0.1,0.1v-0.1H2.3z M2.3,26.4L2.3,26.4c0.1,0.1,0.2,0.1,0.4,0.3h0.1v-0.1 l-0.1-0.4H2.4C2.3,26.2,2.3,26.3,2.3,26.4z M2.3,25.9L2.3,25.9L2.5,26v-0.1H2.3z M2.4,27.7c0,0.2,0,0.5-0.1,0.7h0.2l0.1-0.5 C2.5,27.9,2.5,27.8,2.4,27.7L2.4,27.7z M2.5,12.4L2.5,12.4l0.2,0.1v-0.1H2.5z M2.5,31.4L2.5,31.4l0.1,0.1v-0.1H2.5z M2.6,18.2 L2.6,18.2l0.1,0.1v-0.1H2.6z M2.7,6v0.1h0.1V6H2.7z M2.7,19.4c0,0.1,0.1,0.2,0.4,0.4h0.1v-0.2C3,19.5,2.8,19.4,2.7,19.4z M2.7,25.8 l0.1,0.1c0.1,0,0.1-0.1,0.2-0.2H2.9C2.8,25.7,2.7,25.7,2.7,25.8z M2.8,1.3v0.1h0.1L2.8,1.3L2.8,1.3z M3,2.8L2.8,3l0.4,0.1h0.1V3 C3.2,3,3.1,2.9,3,2.8z M2.8,43.7l0.1,0.1c0.1,0,0.2-0.1,0.3-0.1v-0.1H2.8z M2.9,30.8v0.1h0.4c0-0.1,0-0.1-0.1-0.1H2.9z M3,0.8v0.3 c0.1,0,0.2,0.1,0.2,0.4c0.1,0,0.2-0.1,0.5-0.1L3.5,1.2c0-0.1,0.1-0.1,0.1-0.1C3.7,0.9,3.4,0.8,3,0.8z M3,17.6 c0.1,0.2,0.1,0.3,0.2,0.3h0.2c0.1,0,0.1,0,0.1-0.1L3,17.6L3,17.6z M3,46.7L3,46.7l0.1,0.1v-0.1H3z M3.1,25.1c0,0.1,0.1,0.1,0.1,0.1 h0.1C3.3,25.1,3.3,25.1,3.1,25.1L3.1,25.1z M3.1,47.2L3.1,47.2l0.2,0.1v-0.1H3.1z M3.2,16.2L3.2,16.2l0.2,0.1v-0.1H3.2z M3.2,32.1 v0.3h0.2v-0.3H3.2z M3.2,43.8v0.1h0.2v-0.1C3.3,43.9,3.3,43.9,3.2,43.8z M3.2,47.7L3.2,47.7l0.1,0.1v-0.1H3.2z M3.3,19.1v0.1h0.3 v-0.1L3.3,19.1z M3.4,30.9L3.4,30.9L3.7,31v-0.1H3.4z M3.4,43.7v0.2l1,0.2C4.5,44,4.6,44,4.6,44c0-0.1-0.2-0.2-0.7-0.4H3.4z M3.5,20v0.1c0.1,0,0.1,0,0.1-0.1H3.5z M3.5,33.4c0,0.1,0.1,0.1,0.1,0.1v-0.1H3.5z M3.5,36.1L3.5,36.1l0.1,0.1v-0.1H3.5z M3.6,7.3 v0.1h0.1L3.6,7.3L3.6,7.3z M3.6,48.5c0,0.1,0.1,0.1,0.1,0.1h0.1C3.8,48.6,3.8,48.5,3.6,48.5L3.6,48.5z M3.7,1v0.1 c0.1,0,0.2-0.1,0.3-0.1V0.9H3.9C3.8,1,3.8,1,3.7,1z M3.7,19.4L3.7,19.4l0.1,0.1v-0.1H3.7z M3.8,35.9L3.8,35.9l0.1,0.1v-0.1H3.8z M3.8,44.4L3.8,44.4l0.1,0.1v-0.1H3.8z M3.9,20l-0.1,0.1L4,20.2h0.1C4.1,20.1,4.1,20,3.9,20z M3.9,20.3c0,0,0.2,0.2,0.7,0.6 l0.1-0.4c-0.1,0-0.1-0.1-0.1-0.2C4.3,20.3,4.1,20.3,3.9,20.3z M3.9,21.8L3.9,21.8l0.4,0.1v-0.1H3.9z M4.1,8.2l0.1,0.1h0.1 c0.1,0,0.1,0,0.1-0.1L4.3,8H4.2C4.1,8,4.1,8.1,4.1,8.2z M4.1,33L4.1,33L4.4,33V33H4.1z M4.1,19.4v0.1h0.1 C4.3,19.5,4.2,19.4,4.1,19.4z M4.1,22.6h0.1v-0.1C4.2,22.5,4.1,22.6,4.1,22.6z M4.1,24v0.1h0.1V24H4.1z M4.1,32.8L4.1,32.8l0.1,0.1 v-0.1H4.1z M4.1,44.9L4.1,44.9L4.4,45v-0.1H4.1z M4.4,5.1c0,0,0,0.1-0.1,0.2l0.1,0.1l0.1-0.1V5.1H4.4z M4.4,14.8v0.1h0.1 C4.5,14.8,4.5,14.8,4.4,14.8z M4.4,34h0.1c0.1,0,0.1,0,0.1-0.1H4.5C4.4,33.9,4.4,33.9,4.4,34z M4.5,45.2c0,0.1,0.1,0.2,0.4,0.3H5 c0.1,0,0.1,0,0.1-0.1C4.8,45.3,4.6,45.2,4.5,45.2L4.5,45.2z M4.8,45.6l0.1,0.1l-0.1,0.1h0.6c0.1,0,0.1,0,0.1-0.1 c0-0.1-0.1-0.2-0.4-0.2L4.8,45.6z M5,47.3c0,0.1,0.1,0.2,0.1,0.2c-0.1,0-0.1,0.1-0.1,0.1c0.1,0,0.1,0,0.1,0.1 c0.2,0,0.3-0.1,0.3-0.2h0.1l0.2,0.1c0.1,0,0.1,0,0.1-0.1c-0.2-0.1-0.5-0.2-0.6-0.4C5,47.1,5,47.2,5,47.3z M5.9,47.5L5.9,47.5 L6,47.5v-0.1H5.9z M6.2,45.6v0.1h0.1c0.1,0,0.1,0,0.1-0.1v-0.1C6.3,45.6,6.2,45.6,6.2,45.6z M7,47.7L7,47.7l0.1,0.1v-0.1H7z M7.1,45.1h0.3c0.1,0,0.2,0,0.3,0.1c0.1,0,0.2-0.1,0.2-0.1l0.3,0.3c-0.1,0-0.2,0.1-0.3,0.1L8,45.7c-0.1,0-0.3,0-0.5,0.1 c-0.3-0.1-0.4-0.2-0.4-0.3V45.1z M7.1,48L7.1,48L7.4,48V48H7.1z M7.2,48.2L7.2,48.2c0.2,0.1,0.3,0.1,0.4,0.2h0.1v-0.2H7.2z M7.5,46.3L7.5,46.3l0.1,0.1v-0.1H7.5z M8.6,45.1h1.7c0.3,0,0.4,0.1,0.4,0.2v2.5c0,0,0,0.1-0.1,0.1c0,0.1,0.1,0.2,0.1,0.2 s0,0.1-0.1,0.1l0.1,0.4v0.4c0,0,0,0.1-0.1,0.1l0.1,0.1v0.3c0,0.1-0.3,0.2-0.8,0.3c-0.3,0-0.6-0.1-0.8-0.1H8.8l-0.1,0.1 c-0.1-0.2-0.1-0.6-0.1-1.1v-0.1c0,0,0-0.1,0.1-0.1c0,0,0-0.1-0.1-0.1c0-0.8,0.1-1.4,0.1-1.8v-0.8l-0.1-0.5L8.6,45.1z"
              },
              void 0,
              !1,
              {
                fileName: "app/ui/components/Preloader.tsx",
                lineNumber: 40,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV32(
              "path",
              {
                fill: "#fff",
                d: "M20,0h0.7c0.1,0,0.2,0,0.2,0.1L21.3,0h3.1c2.1,0,3.5,0.8,4.4,2.3c0.4,0.6,0.6,1.2,0.6,1.8v1.1 h-0.1L29,5h-0.1c0.1,0.2,0.2,0.3,0.4,0.3v2.8l-0.1,0.2l0.1,0.2v8.9c0,0,0,0.1-0.1,0.1c0,0.1,0.1,0.2,0.1,0.2c0,2.9,0.1,4.6,0.1,5.1 l-0.1,0.1c0,0.1,0.1,0.2,0.1,0.3h-0.1V23h-0.1L29,23.1c0,0.1,0.1,0.2,0.4,0.4v18.8L29,42.1h-0.1c0,0.1,0.1,0.2,0.1,0.3h0.4 c0.1,0,0.1,0.1,0.1,0.1v0.1c0,0.1-0.1,0.1-0.2,0.2h-0.1L29,42.8h-0.1V43l0.1,0.2l-0.1,0.2v0.1c0,0,0.1,0,0.2,0.1 c0.1,0,0.2-0.1,0.2-0.1c0,0,0,0.1,0.1,0.1c0,0,0-0.1,0.1-0.1l0.1,0.1v1.6c0,2-1.1,3.4-3.2,4.2c-0.1,0-0.2,0.1-0.2,0.1V49l-0.1-0.2 c0,0,0-0.1,0.1-0.1c0-0.1-0.1-0.2-0.1-0.4h-0.2c0,0.3-0.1,0.4-0.2,0.4c0,0.2,0.1,0.4,0.3,0.6c0,0.1,0,0.1-0.1,0.1H25 c-0.8,0-1.6,0-2.6,0.1l-0.4-0.1c-0.4,0-0.8,0.1-1.1,0.1h-0.8c-1.1,0-2.1-0.4-3.2-1.3c-0.6-0.7-0.9-1.2-0.9-1.5 c-0.2,0-0.4-1.1-0.4-3.4V28.2l0.1-0.4c0-0.1-0.1-0.4-0.1-1.1c0.1,0,0.2-0.1,0.4-0.1v-0.1c-0.2,0-0.4-0.1-0.4-0.4v-0.4h0.2 c0-0.1-0.1-0.1-0.2-0.1v-8.1c0,0,0-0.1,0.1-0.1l-0.1-0.1v-0.9c0-0.1,0.1-0.1,0.1-0.1l0.1,0.1c0-0.1,0.1-0.1,0.2-0.1V16 c-0.3,0-0.5,0-0.5-0.1v-0.4c0-0.6,0-1.4-0.1-2.4c0,0,0-0.1,0.1-0.1l-0.1-0.5v-2.3c0-0.1,0.1-0.1,0.2-0.1l-0.2-0.3V7.6l0.1-0.2 l-0.1-0.2v-3c0-0.7,0.2-1.4,0.6-1.9h0.1c0,0.2,0.1,0.3,0.2,0.3h0.3c0.1,0,0.1,0,0.1-0.1c-0.4-0.2-0.6-0.3-0.6-0.4 c0.1,0,0.2-0.2,0.4-0.6C17.7,0.5,18.8,0,20,0z M15.9,7.9L15.8,8H16C16,7.9,16,7.9,15.9,7.9z M15.9,6.7c0,0,0.1,0.2,0.4,0.4 C16.5,7,16.6,7,16.6,6.9C16.4,6.8,16.2,6.7,15.9,6.7z M15.9,20.3L15.9,20.3l0.1,0.1v-0.1H15.9z M15.9,31L15.9,31l0.3,0.1 C16.2,31.1,16.1,31,15.9,31L15.9,31z M15.9,33.2L15.9,33.2c0.2,0.4,0.3,0.6,0.4,0.6h0.1c0.1,0,0.1-0.1,0.2-0.3L15.9,33.2L15.9,33.2 z M16,7.7c0,0.1,0.1,0.1,0.1,0.1h0.1C16.2,7.8,16.2,7.7,16,7.7L16,7.7z M16,9.1L16,9.1c0,0.2,0.1,0.2,0.1,0.2h0.1 c0.1,0,0.1,0,0.1-0.1L16,9.1z M16,9.8V10l0.3,0.1l0.1-0.2V9.8H16z M16.1,18.6L16.1,18.6l0.2,0.1v-0.1H16.1z M16.1,34.4v0.4 c0.3,0.2,0.6,0.4,0.9,0.4v-0.3c-0.1,0-0.2,0-0.2-0.1l0.1-0.1c-0.2,0-0.3,0-0.4-0.1H16.1z M16.2,12.2L16.2,12.2 c0,0.2,0.1,0.2,0.1,0.2h0.2c0-0.1,0.1-0.2,0.2-0.2V12C16.4,12.1,16.2,12.2,16.2,12.2z M16.2,16.7L16.2,16.7l0.2,0.1v-0.1H16.2z M16.2,10.2L16.2,10.2c0,0.2,0.1,0.2,0.1,0.2h0.1v-0.1C16.4,10.3,16.3,10.2,16.2,10.2z M16.2,24.5c0,0.1,0.1,0.1,0.1,0.1h0.3 c0-0.1-0.1-0.2-0.1-0.3h-0.2C16.3,24.3,16.2,24.4,16.2,24.5z M16.2,35.4c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H16.2z M16.3,14.1 L16.3,14.1c0,0.2,0.2,0.2,0.6,0.3c0-0.1-0.1-0.2-0.3-0.3H16.3z M16.3,39.8L16.3,39.8l0.2,0.1v-0.1H16.3z M16.3,44.3L16.3,44.3 l0.1,0.1v-0.1H16.3z M16.4,8.8V9h0.2c0.1-0.1,0.2-0.1,0.3-0.1V8.8c0-0.1,0-0.1-0.1-0.1C16.6,8.7,16.5,8.8,16.4,8.8z M16.4,26.3 L16.4,26.3l0.1,0.1v-0.1H16.4z M16.4,4.5v0.1h0.1L16.4,4.5L16.4,4.5z M16.4,11c0,0.1,0.1,0.2,0.1,0.2l0.4-0.1l0.2,0.1h0.1 c0-0.1-0.2-0.2-0.6-0.5C16.6,10.8,16.5,10.9,16.4,11z M16.4,17.7c0,0.1,0.1,0.2,0.4,0.4h0.1V18l-0.2-0.4 C16.6,17.7,16.5,17.7,16.4,17.7z M16.6,25.5L16.6,25.5c0.1,0,0.2,0,0.2,0v-0.1h-0.1C16.6,25.4,16.6,25.4,16.6,25.5z M16.6,40.1 c0,0.1,0.2,0.2,0.6,0.3h0.1c0-0.1-0.2-0.2-0.5-0.3H16.6z M16.6,44.4L16.6,44.4c0,0.1,0.2,0.3,0.7,0.4h0.1v-0.1L16.6,44.4L16.6,44.4 z M16.6,47v0.1c0,0,0.1,0,0.2,0.1l0.1-0.1L16.6,47z M16.7,17.4c0,0.1,0.1,0.1,0.1,0.1v-0.1H16.7z M16.8,9.5h0.1 c0.1,0,0.1,0,0.1-0.1h-0.1C16.8,9.4,16.8,9.4,16.8,9.5z M16.8,31.4v0.1l0.5,0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1c-0.1,0-0.2,0-0.2-0.1 c0,0-0.1,0-0.1,0.1L16.8,31.4L16.8,31.4z M16.8,41.4v0.2h0.3c0-0.1-0.1-0.2-0.1-0.2H16.8z M16.9,9.6v0.1h0.1L16.9,9.6L16.9,9.6z M16.9,6.8L16.9,6.8l0.1,0.1V6.8H16.9z M17,10.2c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H17z M17,12.2L17,12.2l0.4,0.1v-0.1H17z M17.1,18 c0,0.2,0.2,0.3,0.4,0.3h0.1v-0.1C17.4,18.2,17.3,18.1,17.1,18L17.1,18z M17.1,24.5c0,0.1,0.1,0.1,0.2,0.2c0.1,0,0.2-0.1,0.2-0.1 v-0.1c-0.1,0-0.2,0-0.2-0.1C17.3,24.5,17.2,24.5,17.1,24.5z M17.1,28.3L17.1,28.3c0,0.2,0.1,0.2,0.1,0.2h0.1v-0.1 C17.3,28.4,17.2,28.4,17.1,28.3z M17.4,33c0,0.2-0.1,0.3-0.3,0.3v0.1c0.1,0,0.2,0.1,0.3,0.2l0.1-0.1l-0.1-0.1 c0.1-0.2,0.1-0.3,0.1-0.4H17.4z M17.2,3.3l0.3,0.1v0.1h-0.1c0,0.1,0.2,0.1,0.5,0.1L18,3.4c0-0.1-0.1-0.2-0.4-0.4 C17.3,3.2,17.2,3.2,17.2,3.3z M17.3,11.3h0.1v-0.1C17.3,11.2,17.3,11.2,17.3,11.3z M17.3,11.5L17.3,11.5c0,0.1,0.1,0.1,0.2,0.1h0.1 v-0.1C17.5,11.5,17.4,11.5,17.3,11.5L17.3,11.5z M17.4,44.8L17.4,44.8l0.3,0.1v-0.1H17.4z M17.5,21.5L17.5,21.5l0.1,0.1v-0.1H17.5z M17.6,23.3v0.1h0.1v-0.1H17.6z M17.6,43.7v0.1h0.1C17.7,43.7,17.7,43.7,17.6,43.7z M17.6,7L17.6,7c0,0.2,0.1,0.2,0.1,0.2V7H17.6z M17.6,11.6L17.6,11.6c0,0.2,0.1,0.3,0.3,0.3V12c0,0.1-0.1,0.1-0.2,0.1v0.1l0.1-0.1c0.2,0,0.3,0,0.4,0.1c0.4,0,0.6-0.1,0.6-0.2 c-0.6-0.1-0.8-0.2-0.8-0.4H17.6z M17.6,19.2c0,0.1,0.1,0.1,0.2,0.2v-0.2H17.6z M17.7,32.1c0,0.1,0.1,0.1,0.1,0.1v-0.1H17.7z M17.8,1.8L17.8,1.8C17.9,1.9,18,2,18,2.1h0.1c0,0,0-0.1-0.1-0.1l0.1-0.1V1.8L17.8,1.8z M17.8,3.8v0.1h0.2 C18.1,3.8,18,3.8,17.8,3.8L17.8,3.8z M17.9,29.3v0.1c0,0,0.1,0,0.2,0.1l0.1-0.1l-0.1-0.1H17.9z M17.9,38.5c0,0.1,0.1,0.1,0.1,0.1 h0.1C18.1,38.5,18.1,38.5,17.9,38.5L17.9,38.5z M18,48.1L18,48.1l0.1,0.1v-0.1H18z M18.1,35.3h0.3c0-0.1,0-0.1-0.1-0.1 C18.1,35.2,18.1,35.2,18.1,35.3z M18.1,46.3c0,0.1,0.1,0.1,0.3,0.2v-0.1c0-0.1,0-0.1-0.1-0.1H18.1z M18.1,3.9L18.1,3.9 c0,0.1,0.1,0.1,0.2,0.1V3.9H18.1z M18.2,20.7c0,0.1,0.1,0.1,0.1,0.1v-0.1H18.2z M18.3,24.3v0.1h0.1L18.3,24.3L18.3,24.3z M18.3,30.9L18.3,31h0.2C18.5,30.9,18.4,30.9,18.3,30.9z M18.5,19l-0.1,0.2h0.1c0.1,0,0.2-0.1,0.2-0.1C18.6,19,18.6,19,18.5,19z M18.3,20.1L18.3,20.1l0.1,0.2c0.1,0,0.2-0.1,0.2-0.1v-0.1L18.5,20C18.5,20.1,18.4,20.1,18.3,20.1z M18.4,2L18.4,2l0.2,0.1V2H18.4z M18.5,4.6C18.5,4.6,18.5,4.6,18.5,4.6c0,0.2,0,0.2,0,0.3c0.1,0,0.2-0.1,0.2-0.1C18.7,4.7,18.6,4.6,18.5,4.6z M18.6,28.5l0.1,0.1 v0.2h-0.2v0.1c0.1,0,0.3,0.1,0.6,0.3c0-0.1,0-0.2,0.1-0.3c-0.1,0-0.1-0.1-0.2-0.2v-0.1h0.2v-0.1c0-0.1,0-0.1-0.1-0.1L18.6,28.5z M18.5,48.3v0.2c0,0.1,0.1,0.1,0.1,0.1H19v-0.1c-0.1,0-0.2-0.1-0.2-0.2H18.5z M18.5,10.9c0,0.1,0.1,0.2,0.4,0.3l0.1-0.1h0.1 l0.1,0.1l0.1-0.1C18.9,10.9,18.7,10.9,18.5,10.9z M18.6,12.4L18.6,12.4c0.1,0.1,0.2,0.1,0.4,0.2H19v-0.2H18.6z M18.7,40.7v0.1H19 v-0.1L18.7,40.7z M18.7,43.2c0,0.1,0.1,0.1,0.1,0.1H19c0-0.1,0-0.1-0.1-0.1H18.7z M18.8,20.3L18.8,20.3c0.1,0.1,0.2,0.1,0.3,0.1 v-0.1H18.8z M18.8,35c0,0.1,0.1,0.1,0.1,0.1V35H18.8z M18.8,35.3L18.8,35.3c0.2,0.1,0.5,0.1,0.7,0.1c0-0.1-0.1-0.1-0.4-0.2 C19,35.3,18.9,35.3,18.8,35.3z M18.8,39.1c0,0.1,0.1,0.1,0.1,0.1H19c0-0.1,0-0.1-0.1-0.1H18.8z M18.8,32.4L18.8,32.4 c0,0.1,0.1,0.2,0.3,0.4h0.4v-0.2C19.1,32.5,18.9,32.5,18.8,32.4z M18.9,44.6L18.9,44.6l0.1,0.1v-0.1H18.9z M19,17.4l0.1,0.1 l0.4-0.1v-0.1l-0.3-0.1C19.1,17.4,19,17.4,19,17.4z M19,1.8v0.1c0.2,0,0.3,0.1,0.3,0.2L19.7,2h0.5V2c0-0.1,0-0.1-0.1-0.1h-0.1 l-0.4,0.1C19.3,1.8,19.2,1.8,19,1.8z M19.2,20.5L19.2,20.5l0.4,0.1h0.2v-0.1l-0.4-0.1H19.2z M19.2,45.5v0.1h0.2v-0.1 C19.3,45.6,19.3,45.5,19.2,45.5z M19.2,48.6c0,0.1,0.1,0.1,0.1,0.1h0.4c0-0.1,0-0.1-0.1-0.1H19.2z M20.4,10.7L20,10.8V11 c0.1,0,0.1,0,0.1,0.1l0.1-0.1h0.1c0,0.3,0.1,0.5,0.1,0.6c0,0.8-0.1,1.2-0.1,1.2c0.1,0,0.1,0.1,0.1,0.1v0.8c0,0.1,0,0.2-0.1,0.2 l0.1,0.4v4.4l-0.1,0.1l-0.1-0.1h-0.2v0.1c0.2,0,0.3,0.2,0.4,0.5v0.9l-0.3,0.3c0.1,0,0.2,0.1,0.3,0.3v1.3c0,0.1-0.1,0.1-0.3,0.1v0.1 h0.1v0.1l-0.2,0.3c0.2,0.1,0.4,0.1,0.4,0.2v4.4c0,2.1,0,5,0.1,8.8h-0.1l0.1,0.1V42c-0.2,0-0.3,0.2-0.3,0.5c0.1,0,0.2,0,0.2,0.1 c0,0.2-0.1,0.4-0.1,0.4l0.2,0.4v0.6l-0.4-0.1H20v-0.1c0.3-0.2,0.4-0.3,0.4-0.4h-0.1c-0.3,0.1-0.5,0.3-0.5,0.6c-0.2,0-0.3,0-0.3,0.1 v0.3l0.2-0.1l0.4,0.1c0,0,0-0.1,0.1-0.1v0.3h0.1l0.3-0.2h0.1v0.4c-0.1,0-0.2,0-0.2,0.1c-0.2-0.1-0.3-0.1-0.4-0.1 c-0.2,0-0.3,0.1-0.4,0.2l-0.4-0.1v0.1c0.2,0.2,0.4,0.3,0.4,0.4l0.2,0.1c0.1,0,0.1,0,0.1-0.1c-0.1,0-0.2,0-0.2-0.1 c0-0.1,0.1-0.2,0.4-0.3c0.1,0,0.3,0,0.4,0.1l0.1-0.1c0.3,0.1,0.4,0.2,0.4,0.4h0.8v-0.2H22l0.2,0.4c0.1,0,0.1,0,0.1-0.1l-0.2-0.3 v-0.1h2.3l0.1-0.1c0-10.1-0.1-18.1-0.1-23.9v-2.7c0-1.4,0-3.7-0.1-6.8l0.1-0.1c0,0,0,0.1,0.1,0.1v-0.1l-0.2-0.3v-6 c0-0.1,0.1-0.1,0.1-0.1c0.1,0,0.2,0.1,0.2,0.1l-0.1,0.2c0,0.1,0.3,0.2,0.8,0.3h0.1c-0.3-0.2-0.5-0.3-0.5-0.4C25,5.2,25,5.1,25,5 V4.8h-0.1l-0.2,0.1h-0.1c-0.2-0.3-0.4-0.4-0.6-0.4h-3c-0.4,0-0.6,0.2-0.6,0.5V10.7z M19.2,12.3L19.2,12.3c0.2,0,0.2,0,0.2-0.1h-0.1 C19.3,12.2,19.2,12.2,19.2,12.3z M19.2,46.8L19.2,46.8l0.1,0.1v-0.1H19.2z M19.3,29c0.2,0.3,0.4,0.4,0.7,0.4l0.1-0.1 c-0.3-0.1-0.4-0.2-0.4-0.4L19.3,29z M19.3,36.6v0.2h0.1v-0.1C19.5,36.6,19.4,36.6,19.3,36.6z M19.3,43.5v0.1l0.4,0.1v-0.1 L19.3,43.5z M19.4,22.5L19.4,22.5l0.2,0.1v-0.1H19.4z M19.5,19.2L19.5,19.2l0.2,0.1v-0.1H19.5z M19.5,25.7L19.5,25.7l0.2,0.1v-0.1 H19.5z M19.5,5.1h0.1V4.9C19.6,4.9,19.5,5,19.5,5.1z M19.6,34.2L19.6,34.2c0,0.2,0.1,0.2,0.1,0.2h0.1v-0.1c0-0.1,0-0.1-0.1-0.1 H19.6z M19.6,36.1v0.1h0.1v-0.1H19.6z M19.7,12.2L19.7,12.2l0.1,0.1v-0.1H19.7z M19.7,17.8c0,0.1,0.1,0.1,0.1,0.1H20v-0.1H19.7z M19.7,12.7L19.7,12.7l0.6,0.1v-0.1H19.7z M19.7,18.4L19.7,18.4c0,0.2,0.1,0.2,0.1,0.2h0.3v-0.1c0-0.1,0-0.1-0.1-0.1H19.7z M19.7,40.9c0,0.1,0.1,0.1,0.1,0.1H20C20,40.9,19.9,40.9,19.7,40.9L19.7,40.9z M19.9,9.8L19.8,10v0.1H20V10C20,9.9,20,9.8,19.9,9.8 z M19.8,10.3c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1H19.8z M19.8,25.5c0,0.1,0,0.3,0.1,0.5c0.1,0,0.2-0.1,0.2-0.1c0.1,0,0.2,0.1,0.2,0.1 v-0.2c0-0.1-0.1-0.2-0.4-0.3H19.8z M19.9,36.8c0,0.1,0.1,0.1,0.2,0.2l0.1-0.3L20,36.6C19.9,36.6,19.9,36.7,19.9,36.8z M20,11.3 c0,0.1,0,0.2-0.1,0.3l0.4,0.1v-0.3L20,11.3z M20.1,48.4L20,48.6c0,0,0.1,0,0.2,0.1l0.1-0.1C20.3,48.5,20.2,48.5,20.1,48.4z M20.1,5.3L20.1,5.3l0.1,0.1V5.3H20.1z M20.1,36c0,0.1,0.1,0.1,0.2,0.2h0.1v-0.1c-0.1,0-0.1,0-0.1-0.1H20.1z M20.1,46.8L20.1,46.8 l0.1,0.1v-0.1H20.1z M20.2,3.2c0,0.1,0.1,0.1,0.1,0.1h0.1V3.2H20.2z M20.2,5.5v0.2h0.1L20.2,5.5L20.2,5.5z M20.2,1.6v0.1h0.3 c0-0.1,0-0.1-0.1-0.1H20.2z M20.4,45.9v0.1c0,0.1,0.2,0.2,0.6,0.4H21l0.1-0.1l-0.1-0.1v-0.1l0.1-0.1H21c-0.1,0-0.2,0.1-0.2,0.1 C20.8,46,20.7,46,20.4,45.9z M20.5,3.2L20.5,3.2l0.2,0.1V3.2H20.5z M21.2,3.3v0.1c0,0,0.1,0,0.2,0.1V3.4 C21.4,3.4,21.3,3.4,21.2,3.3z M21.2,46.4v0.3h0.1c0.4-0.1,0.6-0.2,0.6-0.3c0,0-0.1,0-0.1-0.1l-0.1,0.1h-0.1c0,0-0.1,0-0.1-0.1 C21.4,46.4,21.3,46.4,21.2,46.4z M22,46.3L22,46.3l0.2,0.1v-0.1H22z M22,48.2v0.1h0.1L22,48.2L22,48.2z M22.3,48v0.1h0.1 C22.5,48,22.4,48,22.3,48z M22.5,46.2L22.5,46.2l0.1,0.1v-0.1H22.5z M22.6,4L22.6,4l0.2,0.1V4H22.6z M22.9,45.8V46 c0,0.1,0.2,0.2,0.4,0.2h0.1C23.5,46,23.3,45.9,22.9,45.8z M23.3,48.9h0.1c0.1,0,0.1,0,0.1-0.1v-0.1h-0.1 C23.4,48.7,23.3,48.8,23.3,48.9z M23.3,1.8L23.3,1.8l0.1,0.1V1.8H23.3z M23.5,46.2L23.5,46.2l0.1,0.1v-0.1H23.5z M24.9,45.1 c0,0.1,0,0.2-0.1,0.2h-0.1l-0.1-0.1c0,0.2,0,0.3-0.1,0.3c-0.2,0-0.4-0.1-0.6-0.2h-0.2v0.1c0.2,0,0.3,0.2,0.4,0.6h0.3 c0-0.1,0.1-0.1,0.3-0.2c0.4,0.2,0.6,0.4,0.6,0.5h-0.1c0,0.4,0.1,0.6,0.2,0.6h0.1c0.1,0,0.1-0.1,0.2-0.3c-0.1,0-0.2-0.2-0.4-0.5 L25,46v-0.1c0.2-0.2,0.4-0.4,0.4-0.6c-0.1,0-0.1,0-0.1-0.1l-0.1,0.1L24.9,45.1z M23.7,48.9c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H23.7z M24.3,3.6l-0.1,0.4V4h0.1l0.1-0.4H24.3z M24.5,12.4L24.5,12.4c0.1,0.1,0.1,0.1,0.1,0.2h0.3C24.9,12.6,24.8,12.5,24.5,12.4 L24.5,12.4z M24.6,12.2L24.6,12.2l0.2,0.1v-0.1H24.6z M24.6,46.3v0.1h0.1C24.7,46.3,24.7,46.3,24.6,46.3z M24.7,46.6 c0,0.1,0.1,0.2,0.1,0.2h0.1c0.1,0,0.1-0.1,0.2-0.2c-0.1,0-0.1,0-0.1-0.1C24.7,46.5,24.7,46.6,24.7,46.6z M24.7,2.7L24.7,2.7 c0,0.2,0.1,0.2,0.2,0.2c0.3-0.3,0.6-0.4,1-0.4c0,0.1,0.1,0.1,0.2,0.2h0.1l0.1-0.5c0-0.1-0.2-0.2-0.6-0.2c-0.3,0.1-0.5,0.3-0.6,0.7 H24.7z M24.7,30.2L24.7,30.2c0.1,0.1,0.2,0.1,0.3,0.1v-0.1H24.7z M24.7,42.8L24.7,42.8l0.1,0.1v-0.1H24.7z M24.8,6.5 c0,0.1,0.3,0.2,0.9,0.4c-0.1-0.3-0.3-0.4-0.5-0.4l-0.1,0.1C25,6.5,24.9,6.5,24.8,6.5z M24.8,43.6L24.8,43.6l0.1,0.1v-0.1H24.8z M24.9,19.4v0.1c0.1,0,0.1,0,0.1-0.1H24.9z M24.9,23.9L24.9,23.9c0.1,0,0.2,0,0.2,0c0.1,0,0.2,0.1,0.2,0.1c0-0.1,0.1-0.1,0.4-0.1 v-0.2C25.2,23.7,24.9,23.8,24.9,23.9z M24.9,41.1c0,0.1,0.2,0.2,0.7,0.2c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1c0-0.1-0.2-0.2-0.7-0.3 C25.1,41,25,41.1,24.9,41.1z M25,27.8L25,27.8l0.3,0.1v-0.1H25z M25,32c0,0.2,0.2,0.3,0.6,0.4v-0.2C25.2,32,25,32,25,32z M25.1,18.1c0.1,0,0.2,0,0.3,0.1l0.1-0.1v-0.3h-0.1C25.2,17.9,25.2,18,25.1,18.1z M25.1,23.1l0.1,0.1h0.2v-0.1c0-0.1,0-0.1-0.1-0.1 h-0.1C25.1,22.9,25.1,23,25.1,23.1z M25.2,37.5L25.2,37.5l0.2,0.1v-0.1H25.2z M25.2,30.4v0.1c0,0,0.1,0.1,0.2,0.2 c0.1,0,0.2-0.1,0.4-0.1C25.9,30.5,25.6,30.4,25.2,30.4z M25.4,47L25.4,47c0.1,0.1,0.2,0.2,0.4,0.4h0.1l-0.1-0.1l0.1-0.1L25.6,47 C25.6,47,25.5,47,25.4,47z M25.5,19v0.1c0.1,0,0.2,0.1,0.2,0.2c0.1,0,0.1,0,0.1-0.1L25.5,19z M25.5,27.4v0.1h0.3 c0-0.1,0-0.1-0.1-0.1H25.5z M25.6,27.8c0,0,0,0.1-0.1,0.2l0.1,0.1h0.4v-0.2L25.6,27.8z M25.7,43c0,0.1,0,0.2-0.1,0.4h0.3 c0.1,0,0.1,0,0.1-0.1V43H25.7z M25.6,32.5L25.6,32.5l0.1,0.1v-0.1H25.6z M25.6,45.1h0.1v-0.1C25.7,44.9,25.6,45,25.6,45.1z M25.7,13.5L25.7,13.5l0.2,0.1v-0.1H25.7z M25.7,19.5l0.1,0.1h0.1v-0.2h-0.1C25.8,19.4,25.7,19.5,25.7,19.5z M25.7,20.7L25.7,20.7 c0.1,0.2,0.1,0.3,0.1,0.4h0.4c0,0,0-0.1-0.1-0.1l0.1-0.1c0-0.1,0-0.1-0.1-0.1H25.7z M25.7,32.1L25.7,32.1l0.1,0.1v-0.1H25.7z M25.7,37.5L25.7,37.5l0.1,0.1v-0.1H25.7z M25.8,5.7v0.1H26V5.7H25.8z M25.8,12.4L25.8,12.4l0.2,0.1v-0.1H25.8z M25.9,31.1 L25.9,31.1l0.4,0.1v-0.1H25.9z M25.9,37.7v0.1c0,0.1,0.2,0.2,0.5,0.2c-0.1-0.2-0.1-0.4-0.2-0.4H25.9z M25.9,32.3 c0,0.1,0.1,0.2,0.1,0.2h0.4v-0.2H25.9z M25.9,32.8l0.1,0.1h0.2c0.5-0.1,0.8-0.2,0.8-0.4c-0.3,0-0.5,0-0.5-0.1 C26.1,32.7,25.9,32.8,25.9,32.8z M26,11.7v0.1h0.1v-0.1H26z M26,13.4v0.2l0.4,0.1v-0.1C26.3,13.5,26.2,13.5,26,13.4L26,13.4z M26,48.2L26,48.2l0.1,0.1v-0.1H26z M26.2,1.5l-0.1,0.2C26.2,1.8,26.2,2,26.2,2C26.3,2,26.4,2,26.5,2V1.9h-0.1V1.8h0.1 C26.5,1.7,26.4,1.6,26.2,1.5z M26.1,12.4v0.1h0.1C26.2,12.5,26.2,12.4,26.1,12.4z M26.2,19.9c0,0.1-0.1,0.2-0.1,0.4 c0.3,0.1,0.5,0.2,0.8,0.4H27v-0.1c-0.1,0-0.2-0.1-0.4-0.4L26.2,19.9z M26.1,42.8L26.1,42.8l0.4,0.1v-0.1H26.1z M26.1,48.4 L26.1,48.4c0,0.2,0.1,0.2,0.1,0.4h-0.1c0,0.1,0.1,0.2,0.1,0.4h0.1l0.1-0.1l-0.1-0.1v-0.4L26.1,48.4z M26.3,12.2L26.3,12.2l0.1,0.1 v-0.1H26.3z M26.3,29v0.1h0.1C26.4,29,26.4,29,26.3,29z M26.3,11.2L26.3,11.2c0,0.2,0.2,0.2,0.6,0.3v-0.1c0-0.1-0.1-0.1-0.2-0.2 H26.3z M26.3,18.9v0.2c0.1,0,0.2,0.1,0.4,0.2h0.1v-0.1C26.7,19,26.5,18.9,26.3,18.9z M26.4,14.5v0.1h0.2v-0.1 C26.6,14.6,26.5,14.5,26.4,14.5z M26.5,13.2L26.5,13.2l0.4,0.1v-0.1c-0.1,0-0.1,0-0.1-0.1C26.6,13.2,26.5,13.2,26.5,13.2z M26.5,17 L26.5,17l0.1,0.1V17H26.5z M26.5,29.3c0.1,0.3,0.2,0.5,0.3,0.5c0.4,0,0.7-0.1,0.8-0.1v-0.1c-0.3,0-0.5-0.1-0.5-0.2l-0.1,0.1 l-0.3-0.2H26.5z M26.5,31.5L26.5,31.5l0.2,0.1v-0.1C26.6,31.5,26.5,31.5,26.5,31.5z M26.6,1.6c0.1,0.2,0.2,0.3,0.4,0.3 c0.1,0,0.2-0.1,0.2-0.1c0,0,0,0.1,0.1,0.1V1.7c-0.1,0-0.1,0-0.1-0.1c0,0-0.1,0-0.1,0.1L26.6,1.6L26.6,1.6z M26.6,11.8 c0,0.4,0.1,0.6,0.4,0.6l0.1-0.1C26.8,12.1,26.7,12,26.6,11.8L26.6,11.8z M26.6,22v0.1h0.1L26.6,22L26.6,22z M26.7,22.2l-0.1,0.1 v0.1c0.1-0.1,0.2-0.1,0.4-0.1v-0.1L26.7,22.2z M26.6,24.7v0.1h0.2C26.8,24.7,26.8,24.7,26.6,24.7L26.6,24.7z M27.1,31.7v0.1h-0.4 c-0.1,0-0.1,0.1-0.1,0.1l0.1,0.1h0.6L27.1,31.7c0.1,0.1,0.1,0,0.1,0H27.1z M26.6,48.7L26.6,48.7l0.2,0.1v-0.2h-0.1 C26.7,48.5,26.6,48.6,26.6,48.7z M26.7,25c0,0.1,0.1,0.1,0.1,0.1H27c0-0.1,0-0.1-0.1-0.1H26.7z M26.8,1.2L26.8,1.2l0.1,0.1V1.2 H26.8z M26.8,6.8c0,0.1,0.1,0.1,0.1,0.1V6.8H26.8z M26.8,28.9V29l0.4,0.1h0.1V29C27.2,29,27,29,26.8,28.9z M26.8,40.3l0.1,0.4 c0.2-0.1,0.3-0.2,0.4-0.4H26.8z M26.8,33.6L26.8,33.6c0,0.2,0.1,0.2,0.1,0.2h0.1v-0.1c0-0.1,0-0.1-0.1-0.1H26.8z M26.8,39.8 L26.8,39.8l0.2,0.1v-0.1H26.8z M27,1.4v0.1h0.2V1.5C27.1,1.5,27.1,1.5,27,1.4z M27,18.2L27,18.2l0.5,0.1c0-0.1,0-0.1-0.1-0.1 L27,18.2z M27,18.4v0.1h0.1C27.1,18.4,27.1,18.4,27,18.4z M27.1,6.7v0.1h0.1c0.1,0,0.2-0.1,0.2-0.1V6.7H27.1z M27.1,11.1L27.1,11.1 c0,0.1,0.1,0.2,0.4,0.4h0.1c0.2-0.1,0.3-0.2,0.4-0.2v-0.1c-0.4-0.1-0.6-0.1-0.6-0.2C27.2,11.1,27.1,11.1,27.1,11.1z M27.1,22 L27.1,22l0.2,0.1V22H27.1z M27.1,37.8v0.1c0,0,0.1,0,0.2,0.1v-0.2H27.1z M27.2,40L27.2,40l0.2,0.1c0.1,0,0.1-0.1,0.2-0.2v-0.1 C27.3,39.8,27.2,39.9,27.2,40z M27.7,6.9c-0.1,0-0.2-0.1-0.3-0.1L27.3,7v0.1c0.2,0,0.4,0,0.6,0.1c0,0,0-0.1,0.1-0.1L27.8,7L28,6.8 V6.8h-0.1L27.7,6.9z M27.4,2.2l-0.1,0.1c0.1,0,0.2,0.1,0.2,0.1c0.2-0.1,0.3-0.1,0.3-0.2C27.8,2.3,27.7,2.2,27.4,2.2z M27.3,26.9 c0,0.1,0.1,0.1,0.1,0.1h0.1C27.5,26.9,27.5,26.9,27.3,26.9L27.3,26.9z M27.3,30.3c0.1,0.2,0.3,0.4,0.6,0.4l0.1-0.1 c-0.1,0-0.3-0.1-0.5-0.2H27.3z M27.4,18L27.4,18c0.1,0.1,0.2,0.1,0.3,0.2l0.1-0.1V18H27.4z M27.4,24.8L27.4,24.8l0.1,0.1v-0.1H27.4 z M27.5,29l0.1,0.1c0,0.1-0.1,0.1-0.2,0.1v0.1c0.3,0.1,0.5,0.2,0.6,0.2H28v-0.1l-0.1-0.2l0.1-0.1L27.8,29H27.5z M27.5,23.4 c0.1,0,0.2,0.1,0.2,0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1c0-0.1,0-0.1-0.1-0.1h-0.1C27.6,23.2,27.5,23.3,27.5,23.4z M27.5,25.4l-0.1,0.1 l0.1,0.1h0.1C27.8,25.5,27.7,25.5,27.5,25.4z M27.5,26L27.5,26l0.2,0.1V26H27.5z M27.5,27.1l-0.1,0.1l0.1,0.1l0.1-0.1L27.5,27.1z M27.5,18.9L27.5,18.9c0,0.2,0.1,0.2,0.1,0.2h0.1V19C27.7,19,27.6,19,27.5,18.9z M27.5,27.5v0.2c0,0.1,0.1,0.1,0.2,0.2l0.1-0.1 C27.8,27.6,27.7,27.5,27.5,27.5L27.5,27.5z M27.5,41.7v0.1h0.2c0.2,0,0.3,0.1,0.4,0.3h0.2l0.1-0.2v-0.1c-0.2,0-0.3,0-0.3-0.1 c-0.2,0-0.3,0.1-0.3,0.1L27.5,41.7z M27.6,36.5L27.6,36.5l0.3,0.1v-0.1H27.6z M27.7,11L27.7,11l0.2,0.1V11H27.7z M28,11.7 c0,0.1-0.1,0.2-0.3,0.3l1,0.3h0.1v-0.1c-0.4-0.2-0.6-0.4-0.6-0.5H28z M27.7,19.3h0.1v-0.1C27.7,19.2,27.7,19.3,27.7,19.3z M27.7,38.5c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H27.7z M27.8,21.7v0.1h0.1L27.8,21.7L27.8,21.7z M27.8,25.8v0.1l0.4,0.1v-0.1 c0-0.1,0-0.1-0.1-0.1H27.8z M27.9,9.2L27.9,9.2L28,9.3V9.2H27.9z M27.9,39.5L27.9,39.5l0.1,0.1v-0.1H27.9z M28,39.1L28,39.1 c0,0.1,0.1,0.1,0.2,0.1v-0.1H28z M28,41L28,41l0.1,0.1V41H28z M28.1,6.3L28,6.5v0.2h0.4V6.6C28.4,6.5,28.3,6.4,28.1,6.3z M28.1,31.4c0,0,0,0.1-0.1,0.2c0.1,0,0.1,0.1,0.1,0.2h0.6v-0.1c0-0.1-0.1-0.2-0.3-0.2c-0.1,0-0.2,0.1-0.2,0.1 C28.2,31.5,28.2,31.4,28.1,31.4z M28,38.8L28,38.8l0.1,0.1v-0.1H28z M28,41.5L28,41.5l0.1,0.1v-0.1H28z M28.1,39.3v0.2h0.2v-0.2 H28.1z M28.5,4.2c-0.1,0-0.2-0.1-0.3-0.1l-0.1,0.1l0.4,0.2C28.8,4.4,29,4.3,29,4.2V4.1h-0.2L28.5,4.2z M28.2,29.3v0.1 c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1l-0.1-0.1c0,0,0.1,0,0.1-0.1H28.2z M28.3,6.8L28.3,6.8l0.1,0.1V6.8H28.3z M28.3,13.1v0.1l0.3,0.1 v-0.1L28.3,13.1z M28.3,22.3L28.3,22.3l0.2,0.1v-0.1H28.3z M28.4,38.5L28.4,38.5l0.3,0.1v-0.1H28.4z M28.4,42.7L28.4,42.7l0.1,0.1 v-0.1H28.4z M28.6,7L28.6,7l0.3,0.1C28.9,7,28.8,7,28.6,7L28.6,7z M28.6,40.9v0.3h0.3L28.8,41c0-0.1,0.1-0.1,0.3-0.1 c0-0.1-0.1-0.1-0.2-0.2h-0.1C28.7,40.6,28.7,40.7,28.6,40.9z M28.8,41.7l-0.1,0.1v0.1H29v-0.1C29,41.7,28.9,41.7,28.8,41.7z M28.8,22.7l0.1,0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1H28.8z M28.9,41.3L28.9,41.3c0.1,0.2,0.1,0.3,0.1,0.4h0.2 C29.1,41.4,29,41.3,28.9,41.3L28.9,41.3z M29,44.9V45h0.1C29.2,44.9,29.1,44.9,29,44.9z M29.1,32.6L29.1,32.6l0.1,0.1v-0.1H29.1z"
              },
              void 0,
              !1,
              {
                fileName: "app/ui/components/Preloader.tsx",
                lineNumber: 44,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV32(
              "path",
              {
                fill: "#fff",
                d: "M38.5,0.1h2.7c0.1,0,0.3,0,0.4,0.1c0.2-0.1,0.3-0.1,0.4-0.1h2c1.1,0,2.1,0.5,3.1,1.6 c0.7,0.9,1,1.9,1,3v3.4c0,0.1,0,0.1-0.1,0.1c0-0.1,0-0.1-0.1-0.1h-0.1l-0.1,0.4c0.2,0,0.3,0.1,0.4,0.3V10c0,0,0,0.1-0.1,0.1 l0.1,0.1v2.2c0,0.1,0,0.1-0.1,0.1c0-0.1,0-0.1-0.1-0.1h-0.2v0.1c0.1,0,0.3,0.2,0.5,0.5v2.5c0,0.1-0.1,0.1-0.3,0.1l0.3,0.3v0.9 c0,0.1-0.2,0.2-0.5,0.2v0.1c0.1,0,0.2,0,0.2,0.1l0.1-0.1c0.1,0,0.1,0.1,0.1,0.1v1.3L48,18.7l-0.1-0.1c-0.1,0-0.1,0.1-0.2,0.2 c0.3,0.1,0.4,0.2,0.4,0.3v1.3c0,0.1,0,0.2-0.1,0.3c0,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.1-0.1,0.1l0.1,0.1l-0.1,0.2 c0.1,0,0.1,0.1,0.2,0.2v0.6c0,0.1-0.1,0.1-0.2,0.1l0.2,0.3V27c0,0.1-0.1,0.1-0.3,0.1c0.2,0.3,0.3,0.5,0.3,0.6c0,0,0,0.1-0.1,0.1 l0.1,0.4V30c0,0.1-0.1,0.2-0.4,0.2c0,0.1,0.1,0.2,0.4,0.4v4.1c0,0.1-0.1,0.1-0.2,0.2l-0.4-0.1v-0.1l0.2-0.3 c-0.3-0.3-0.6-0.4-0.8-0.4v0.1c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1l0.1,0.1l-0.5,0.6l0.6,0.4c0.1,0,0.2-0.1,0.2-0.3h0.1l0.1,0.1v-0.1 h0.2v4.1L48,39.2c-0.1,0-0.2-0.1-0.4-0.4h-0.1c0.2,0.4,0.4,0.6,0.6,0.6v0.7c0,0.1,0,0.2-0.1,0.3c0.1,0.2,0.1,0.4,0.1,0.6v3.4 c0,0.6-0.1,0.8-0.2,0.8h-0.1v0.1c0.2,0,0.4,0,0.4,0.1v2.7h-0.4v0.1l0.1,0.2c-0.1,0-0.1,0.1-0.1,0.1l0.1,0.1H48v-0.3 c0.1,0,0.1,0.1,0.1,0.1v0.8c0,0.1-0.2,0.2-0.4,0.2h-3.9c-0.3,0-0.5-0.2-0.5-0.5V48l0.2-0.3c-0.1,0-0.2,0-0.2-0.1 c0.1,0,0.2-0.1,0.3-0.1c0-0.1-0.1-0.1-0.3-0.2c0-1.2-0.1-2.1-0.1-2.8v-2.7l0.4-0.1c0,0,0,0.1,0.1,0.1l-0.1,0.1V42h0.2 c0-0.2,0.1-0.3,0.4-0.3v-0.1l-0.9-0.6v-0.3h0.2c0-0.1-0.1-0.1-0.2-0.1V40c0-0.9,0-1.4,0.1-1.6c0-0.6-0.1-1.3-0.1-2v-2.9h0.1 l0.3,0.2c0.2-0.1,0.3-0.2,0.5-0.2l0.1,0.1l0.1-0.1c-0.3,0-0.7-0.1-1.1-0.4V33l0.1-0.2c-0.1,0-0.1,0-0.1-0.1v-1.4h0.1 c0.1,0.3,0.2,0.5,0.3,0.5h0.1v-0.2c-0.1-0.4-0.2-0.6-0.3-0.6h-0.2v-0.1c0-0.2,0-0.3,0.1-0.4l-0.1-0.4v-0.3c0,0,0-0.1,0.1-0.1 l-0.1-0.1v-2.3c0-0.1-0.2-0.2-0.6-0.4c0,0,0-0.1-0.1-0.1c0,0.1-0.1,0.2-0.1,0.2h-2.7l-0.5,0.1v3l-0.1,0.1l-0.4-0.1l0.1-0.1V30 c-0.1-0.1-0.1-0.2-0.1-0.3h-0.1l0.1,0.1c-0.1,0-0.1,0.1-0.1,0.1c0.1,0,0.1,0.1,0.1,0.1l-0.1,0.1c0.1,0,0.1,0.1,0.1,0.2h0.4 c0.1,0,0.1,0.1,0.1,0.1v0.2c0,0,0,0.1-0.1,0.1l0.1,0.1v17.9l0.1,0.5c-0.2,0.2-0.3,0.4-0.4,0.4c-0.1,0-0.2,0-0.3-0.1 c0,0-0.2,0-0.4,0.1c-1.8,0-2.7-0.1-2.7-0.3c-0.3-0.1-0.6-0.4-0.9-0.7v-1.3l0.1-0.4h-0.1v-7.5l0.1-0.2v-0.1L34.5,39v-6.8l0.4,0.1 v-0.1c0-0.1-0.1-0.1-0.4-0.1v-4.9c0-0.1,0.1-0.2,0.4-0.2c0-0.2-0.1-0.4-0.4-0.4v-2.5c0-0.1,0.1-0.1,0.2-0.1v-0.1 c-0.1,0-0.2-0.1-0.2-0.2c0-0.8,0-2.6-0.1-5.3l0.1-0.1c0-0.1-0.1-0.2-0.1-0.3v-0.6c0-0.3,0.1-0.5,0.3-0.5v-0.1l-0.3-0.3v-1.6 c0-0.7,0-1.5-0.1-2.4c0-0.6,0.1-1,0.2-1.1c-0.1-0.2-0.2-0.4-0.2-0.8V9.6c0-0.1,0.1-0.1,0.1-0.1c0,0.1,0.1,0.2,0.1,0.2h0.1 c0-0.1,0-0.2,0.1-0.3c-0.1,0-0.1-0.1-0.2-0.2c0.1,0,0.2-0.1,0.2-0.1V8.9c0-0.1,0-0.1-0.1-0.1h-0.1v0.1h-0.1V8.5c0,0,0-0.1,0.1-0.1 l-0.1-0.1V7.5c0.1,0,0.2,0,0.2-0.1h-0.2V6.2c0-0.3,0-0.6-0.1-1.1c0.1-1.5,0.4-2.6,0.8-3.1c0.2,0,0.4,0.1,0.6,0.2 c0-0.1,0.1-0.1,0.2-0.1V2c-0.1-0.2-0.2-0.3-0.4-0.4C35.9,1,36.5,0.6,37,0.6l-0.1-0.1V0.4C37.5,0.2,38,0.1,38.5,0.1z M34.6,4.4 l-0.1,0.3l0.4,0.3h0.1c0-0.1,0-0.2,0.1-0.4C34.9,4.6,34.8,4.5,34.6,4.4z M34.6,9.8c0,0.1,0,0.2-0.1,0.3c0.1,0,0.2,0,0.3,0.1V10 C34.8,9.9,34.8,9.8,34.6,9.8L34.6,9.8z M34.6,49.3L34.6,49.3c0.1,0,0.2,0.1,0.4,0.4v0.1h-0.1C34.9,49.7,34.7,49.6,34.6,49.3 L34.6,49.3z M34.6,22.9V23c0,0.1,0.1,0.1,0.1,0.1h0.1c0.1,0,0.1,0,0.1-0.1s0-0.1-0.1-0.1H34.6z M34.8,10.3l-0.1,0.1 c0,0.1,0.1,0.1,0.1,0.1h0.1c0.1,0,0.1-0.1,0.2-0.2L34.8,10.3z M34.8,13.3L34.8,13.3l0.1,0.1v-0.1H34.8z M34.8,27.8v0.1h0.1 L34.8,27.8L34.8,27.8z M34.8,28.5v0.1h0.1C34.9,28.5,34.9,28.5,34.8,28.5z M34.8,38.7L34.8,38.7l0.1,0.1v-0.1H34.8z M34.8,47.7 c0,0.1,0.1,0.1,0.2,0.2h0.1c0-0.1-0.1-0.2-0.1-0.2H34.8z M34.8,6L34.8,6L35,6.1V6H34.8z M34.8,6.3L34.8,6.3L35,6.4V6.3H34.8z M34.9,10.6l-0.1,0.1c0.1,0.2,0.2,0.3,0.2,0.4L35,11.3c0.1,0.2,0.3,0.6,0.4,1.1c0.1,0,0.2,0.1,0.3,0.1h0.1 c-0.2-0.5-0.3-0.7-0.4-0.8v-0.1c0.3,0.1,0.5,0.1,0.6,0.1c-0.2-0.2-0.3-0.4-0.4-0.6C35.3,10.9,35.1,10.8,34.9,10.6z M34.9,5.1 L34.9,5.1l0.4,0.1V5.1H34.9z M35.1,13.2v0.1c0.1,0,0.2,0,0.3,0.1l0.1-0.1v-0.3C35.3,13.2,35.2,13.2,35.1,13.2z M35.1,16.1 L35.1,16.1l0.1,0.1v-0.1H35.1z M35.1,18.1c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H35.1z M35.1,25.9L35.1,25.9l0.4,0.1v-0.1H35.1z M35.1,27.9L35.1,27.9l0.1,0.1v-0.1H35.1z M35.1,5.9L35.1,5.9c0,0.2,0.1,0.2,0.1,0.2h0.1V6L35.1,5.9z M35.1,19.2v0.1h0.1L35.1,19.2 L35.1,19.2z M35.1,28.1v0.1c0.1,0,0.2,0,0.3,0.1v-0.1C35.3,28.2,35.2,28.2,35.1,28.1z M35.1,46.1L35.1,46.1l0.4,0.1 c0.1,0,0.2-0.1,0.2-0.1l-0.1-0.1C35.5,46.1,35.3,46.1,35.1,46.1z M35.2,27.6L35.2,27.6c0.1,0.1,0.2,0.1,0.4,0.2c0,0,0-0.1,0.1-0.2 H35.2z M35.2,31.4v0.1h0.1v-0.1H35.2z M35.3,19.2c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H35.3z M35.3,32.4c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1 H35.3z M35.3,33.6L35.3,33.6l0.1,0.1v-0.1H35.3z M35.3,36.9v0.1h0.1C35.5,37,35.4,36.9,35.3,36.9z M35.3,47.3v0.2l0.4,0.1v-0.1 c0-0.1-0.1-0.1-0.2-0.2H35.3z M35.4,15.1v0.1c0,0.1,0.2,0.2,0.6,0.4c0-0.1,0.1-0.1,0.1-0.1c0-0.1-0.1-0.2-0.1-0.2 c-0.2,0-0.3,0.1-0.3,0.1L35.4,15.1L35.4,15.1z M35.4,18.7L35.4,18.7l0.1,0.2c0.2,0,0.5-0.1,0.7-0.1v-0.1c-0.3,0-0.4,0-0.4-0.1 C35.7,18.7,35.6,18.7,35.4,18.7z M35.4,25.4c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H35.4z M35.5,46.5v0.1h0.1L35.5,46.5L35.5,46.5z M35.6,11.7c0,0.1,0.1,0.1,0.1,0.1h0.1C35.8,11.7,35.8,11.7,35.6,11.7L35.6,11.7z M35.6,21.2c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1H35.6z M35.6,47.7c0,0.1,0.1,0.2,0.1,0.2H36c-0.1-0.2-0.2-0.3-0.2-0.3C35.7,47.7,35.7,47.7,35.6,47.7z M35.7,14.8L35.7,14.8l0.7,0.1v-0.1 H35.7z M35.8,2.3L35.8,2.3C35.9,2.4,36,2.4,36,2.5c0.1,0,0.2-0.1,0.2-0.1V2.3H35.8z M36,2.9C36,3,35.9,3,35.8,3v0.1h0.4 c0.1,0,0.2,0,0.3,0.1c0.2-0.1,0.3-0.1,0.4-0.1L36.7,3L36.3,3L36,2.9z M35.8,35.6v0.1h0.1v-0.1H35.8z M35.8,16.5H36v-0.1H36 C35.9,16.4,35.8,16.4,35.8,16.5z M35.8,20.4L35.8,20.4l0.3,0.1v-0.1H35.8z M35.9,30.6C35.9,30.6,35.9,30.7,35.9,30.6 c0,0.3,0.1,0.4,0.1,0.4h0.2C36.2,30.9,36.1,30.8,35.9,30.6z M35.8,34.9v0.1H36c0.1,0,0.1,0,0.1-0.1L36,34.8 C35.9,34.8,35.8,34.9,35.8,34.9z M35.9,12c0,0.1,0.1,0.1,0.1,0.1h0.1C36.1,12.1,36.1,12,35.9,12L35.9,12z M35.9,12.8v0.1H36 C36,12.8,36,12.8,35.9,12.8z M35.9,29v0.2c0.2,0,0.4,0,0.4,0.1c0.1,0,0.2-0.1,0.3-0.1c0.1,0.2,0.2,0.3,0.4,0.3l0.1-0.1l0.4,0.2h0.4 v-0.1c0-0.1-0.1-0.1-0.2-0.2l-0.1,0.1c-0.2,0-0.3-0.2-0.4-0.4L35.9,29z M35.9,39c0.1,0,0.2,0.1,0.3,0.4l0.4-0.2 c-0.1-0.3-0.2-0.5-0.2-0.7C36,38.5,35.9,38.6,35.9,39z M35.9,48.3v0.1h0.4c0.1,0,0.1,0,0.1-0.1c0-0.1-0.1-0.2-0.1-0.2h-0.1 C36.1,48.2,36,48.3,35.9,48.3z M36,32.6L36,32.6l0.4,0.1v-0.1H36z M36.1,37.1L36,37.2h0.4v-0.1L36.1,37.1z M36,37.7 c0,0.1,0.1,0.1,0.1,0.1h0.1c0-0.1,0-0.1,0.1-0.1v-0.1h-0.1L36,37.7z M36,41.4L36,41.4l0.2,0.1v-0.1H36z M36,41.7L36,41.7l0.1,0.1 v-0.1H36z M36.1,3.9L36.2,4h0.5V3.9c-0.1,0-0.2,0-0.4-0.1h-0.1C36.2,3.8,36.1,3.9,36.1,3.9z M36.1,5.7L36.1,5.7l0.1,0.1V5.7H36.1z M36.1,21.3L36.1,21.3l0.1,0.1v-0.1H36.1z M36.2,28.4L36.2,28.4l0.1,0.1v-0.1H36.2z M36.2,42.3l-0.1,0.1c0,0.1,0.1,0.1,0.1,0.1 c0.1,0,0.2-0.1,0.2-0.1C36.5,42.4,36.4,42.3,36.2,42.3z M36.2,44.9v0.4c0.1,0,0.2,0,0.3,0.1h0.2v-0.1c-0.2-0.3-0.3-0.5-0.4-0.5 H36.2z M36.2,39.7c0,0.1,0.1,0.2,0.1,0.4h0.4v-0.1c-0.1,0-0.2-0.1-0.4-0.3H36.2z M36.2,46.3v0.2l0.4,0.1l0.1-0.1v-0.1H36.2z M36.4,26.4L36.4,26.4l0.3,0.1v-0.1H36.4z M36.6,18.7c0,0.1,0.1,0.1,0.1,0.1h0.2c0-0.1,0-0.1-0.1-0.1H36.6z M36.6,32.6 c0,0.1,0.1,0.2,0.1,0.2h0.1v-0.1C36.8,32.6,36.8,32.6,36.6,32.6L36.6,32.6z M36.6,41.2L36.6,41.2l0.1,0.1v-0.1H36.6z M36.6,47.4 L36.6,47.4l0.1,0.1v-0.1H36.6z M36.7,7.3c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.1-0.1H36.7z M36.7,15.8c0,0.1,0.1,0.1,0.1,0.1h0.1 v-0.1H36.7z M40.3,3.7v0.1c0.2,0,0.3,0.2,0.4,0.6c0.1,0,0.2,0.1,0.2,0.1v0.1h-1.1l-0.4-0.1c-0.1,0-0.2,0.1-0.4,0.3 c0,0,0,0.1,0.1,0.1c0,0.1,0,0.2-0.1,0.3c0,0.5,0.1,0.9,0.1,1.1v0.2c0,0.1-0.1,0.1-0.3,0.1v0.1c0.2,0,0.3,0,0.3,0.1v5.3 c0,0.1-0.1,0.1-0.4,0.1l0.1,0.1l-0.1,0.1h-0.1c-0.1,0-0.3-0.1-0.6-0.2l-0.1,0.1c-0.4,0-0.6-0.1-0.6-0.2v-0.1h0.2v-0.1h-0.5 c-0.1,0-0.1,0.1-0.2,0.2v0.1c0.2,0,0.3,0,0.3,0.1c0.1,0,0.2-0.1,0.2-0.1c0.2,0.1,0.3,0.1,0.3,0.2c0,0.1-0.1,0.2-0.1,0.3 c0.1,0,0.2,0,0.3-0.1c0.1,0,0.2,0.1,0.3,0.1h0.1c0-0.2,0.2-0.3,0.6-0.3l0.1,0.1l0.1-0.1c0.1,0,0.1,0.1,0.1,0.1v0.3 c0,0.2,0,0.4,0.1,0.6c0,0.4-0.1,0.6-0.1,0.6c0,0.1,0.1,0.4,0.1,1c-0.1,0-0.1,0.1-0.1,0.1v0.1l0.1,0.2v0.7c0,0.1,0,0.2-0.1,0.3 c0,0.1,0.1,0.2,0.1,0.3V17c0,0,0,0.1-0.1,0.1l0.1,0.1v0.4h-0.3v0.1c0.2,0,0.3,0.1,0.3,0.2v0.8l-0.1,0.2c0.1,0,0.1,0.1,0.1,0.1v0.1 l-0.1,0.2v0.2c0.1,0.2,0.2,0.4,0.2,0.8l-0.1,0.5c0,0.2,0.1,0.4,0.1,0.6l-0.1,0.1c0,0.1,0.1,0.2,0.1,0.3l-0.4-0.2v0.1 c0,0.1,0.1,0.1,0.2,0.2l0.1-0.1c0,0.4,0.1,0.6,0.2,0.6h1.4c0.6,0.4,1,0.6,1.2,0.6c0-0.1,0.1-0.1,0.3-0.1l-0.1-0.4 c-0.2,0-0.4,0-0.6,0.1c0-0.1-0.1-0.1-0.4-0.1v-0.1h1.8c0.1,0,0.2-0.2,0.2-0.4V21c0-0.1,0.2-0.1,0.5-0.1v-0.1 c-0.3,0-0.5-0.1-0.5-0.2v-2.3c0,0,0-0.1,0.1-0.1l-0.1-0.1v-3.9c0-0.2,0-0.6-0.1-1.1h0.1l0.2,0.1h0.1c0.1-0.1,0.2-0.1,0.3-0.1 c0.3,0,0.5,0.1,0.6,0.1v-0.1c0-0.1-0.2-0.2-0.6-0.2v-0.1l0.1-0.1l-0.5-0.4v-0.1c0-0.1,0.1-0.2,0.4-0.2c0-0.1-0.2-0.2-0.6-0.4v-2 l0.1,0.1c0.2-0.1,0.3-0.1,0.3-0.2c-0.3,0-0.4-0.1-0.5-0.4V8.9c0-0.6,0-1.1,0.1-1.7c0-0.2-0.1-0.5-0.1-0.8c0.1,0,0.1,0,0.1-0.1 c-0.1,0-0.1,0-0.1-0.1v-1l0.1-0.2l-0.3-0.3h-1c-0.2,0-0.3-0.1-0.5-0.2c0-0.1,0.1-0.2,0.1-0.2c0-0.1-0.1-0.2-0.1-0.4 c-0.2,0.1-0.5,0.2-0.8,0.2c-0.2-0.3-0.3-0.5-0.4-0.5C40.4,3.5,40.3,3.6,40.3,3.7z M36.7,4.3L36.7,4.3l0.1,0.1V4.3H36.7z M36.7,20.6 L36.7,20.6l0.5,0.1v-0.1H36.7z M36.9,21.4L36.9,21.4l0.2,0.1v-0.1H36.9z M36.9,3.6c0,0.1,0.1,0.1,0.1,0.1h0.1 C37.2,3.6,37.1,3.6,36.9,3.6L36.9,3.6z M37,42.2c0.1,0.1,0.2,0.3,0.2,0.6h0.4v-0.1c-0.1,0-0.2,0-0.2-0.1c0-0.1,0.1-0.2,0.4-0.4 h-0.2c0,0-0.1,0-0.1,0.1l-0.1-0.1H37z M37,48.3v0.1h0.3v-0.1L37,48.3z M37,48.7L37,48.7c0.1,0.3,0.3,0.4,0.6,0.4h0.1 C37.7,48.9,37.5,48.8,37,48.7z M37.1,7c0,0.1,0.1,0.1,0.1,0.1V7H37.1z M37.1,45.6L37.1,45.6l0.3,0.1h0.1v-0.1L37.1,45.6L37.1,45.6z M37.2,46.1l-0.1,0.1h0.4v-0.1L37.2,46.1z M37.2,39.7h0.1v-0.1C37.2,39.6,37.2,39.6,37.2,39.7z M37.2,4.1v0.4c0.1,0,0.1,0,0.1,0.1 c0.1,0,0.2-0.1,0.2-0.1V4.4c-0.1,0-0.2,0-0.2-0.1c0-0.1,0.1-0.2,0.1-0.2H37.2z M37.3,24.3c0.2,0.4,0.4,0.5,0.6,0.6V25 c0.1,0,0.2-0.1,0.2-0.1v-0.1c0-0.1-0.2-0.2-0.5-0.4l0.1-0.2H37.3z M37.4,17.7v0.1h0.2v-0.1H37.4z M37.4,18.7v0.1l0.3,0.1 C37.7,18.8,37.6,18.8,37.4,18.7L37.4,18.7z M37.4,41.3l0.3,0.1v-0.1c0-0.1,0-0.1-0.1-0.1C37.4,41.2,37.4,41.3,37.4,41.3z M37.4,5.4 c0.1,0.2,0.2,0.3,0.4,0.4l0.1-0.1h-0.1V5.6l0.1-0.1H37.4z M37.5,7.7v0.1h0.1V7.7H37.5z M37.5,8.4L37.5,8.4l0.1,0.1V8.4H37.5z M37.6,45.7l-0.1,0.1l0.4,0.1v-0.1C37.8,45.8,37.7,45.8,37.6,45.7z M37.6,32.1v0.1h0.2C37.8,32.1,37.7,32.1,37.6,32.1L37.6,32.1z M37.6,39.9L37.6,39.9l0.1,0.1v-0.1H37.6z M37.6,46.1v0.1c0.3,0.3,0.4,0.5,0.4,0.6l0.1,0.1c0,0,0-0.1,0.1-0.1l-0.1-0.1l0.1-0.2 v-0.2c-0.2,0-0.4-0.1-0.6-0.2H37.6z M37.7,34.7L37.7,34.7l0.3,0.1v-0.1H37.7z M37.7,42.4l0.2,0.3c-0.1,0-0.1,0.1-0.2,0.2h0.1 l0.3-0.1C38.1,42.5,37.9,42.4,37.7,42.4z M37.8,10.7c0,0.1,0,0.2-0.1,0.2c0,0.1,0.1,0.2,0.1,0.2h0.4c0.1,0,0.1,0,0.1-0.1 c-0.1-0.2-0.1-0.3-0.2-0.3H37.8z M37.8,17.6l-0.1,0.1c0.2,0,0.3,0,0.4,0.1h0.1v-0.1C38.2,17.8,38,17.7,37.8,17.6z M37.8,8.6 L37.8,8.6l0.1,0.1V8.6H37.8z M37.9,11.5v0.1h0.3c0.1,0,0.1,0,0.1-0.1H37.9z M37.9,1.1L37.9,1.1l0.4,0.1V1.1c0-0.1,0-0.1-0.1-0.1 C38.1,1,38,1.1,37.9,1.1z M38,13.6L38,13.6l0.1,0.1v-0.1H38z M38.1,0.3L38.1,0.3c0.2,0.4,0.3,0.5,0.5,0.5l0.1-0.1 C38.5,0.6,38.3,0.5,38.1,0.3z M38.1,29.9L38.1,29.9l0.1,0.1v-0.1H38.1z M38.1,42.4L38.1,42.4l0.2,0.1v-0.1H38.1z M38.1,2v0.4h0.1 c0.1,0,0.3,0,0.7-0.1V2.2L38.1,2z M38.1,9L38.1,9l0.1,0.1V9H38.1z M38.1,21.6L38.1,21.6c0.2,0,0.2-0.1,0.4-0.1c0,0,0,0.1,0.1,0.1 v-0.1c0-0.1-0.1-0.2-0.1-0.3c0.1,0,0.1-0.1,0.2-0.2V21C38.4,21,38.3,21.2,38.1,21.6z M38.1,29.2c0,0.1,0.1,0.1,0.2,0.2v-0.1 C38.4,29.2,38.3,29.2,38.1,29.2L38.1,29.2z M38.3,4.6l-0.1,0.1l0.1,0.1h0.1C38.5,4.8,38.4,4.7,38.3,4.6z M38.3,18.8V19 c0.1,0,0.1,0,0.1-0.1H38.3z M38.4,3.6L38.4,3.6l0.1,0.1V3.6H38.4z M38.4,5.1v0.2h0.1c0.1,0,0.1-0.1,0.2-0.2c-0.1,0-0.1,0-0.1-0.1 C38.5,5,38.4,5.1,38.4,5.1z M38.6,16.5l-0.1,0.1c0,0,0.1,0,0.1,0.1c-0.1,0-0.2,0.1-0.2,0.1v0.1h0.2c0.1,0,0.1,0,0.1-0.1v-0.1 C38.7,16.6,38.7,16.5,38.6,16.5z M38.4,17.2c0,0.1,0.1,0.1,0.2,0.2h0.1v-0.1c0-0.1,0-0.1-0.1-0.1H38.4z M38.4,47.1L38.4,47.1 l0.1,0.1v-0.1H38.4z M38.4,17.4L38.4,17.4c0,0.1,0.1,0.2,0.2,0.3h0.1l0.1-0.3h-0.1v0.1L38.4,17.4L38.4,17.4z M38.4,38.9 c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1H38.4z M38.5,14.9L38.5,14.9l0.2,0.1v-0.1H38.5z M38.5,32.8L38.5,32.8l0.4,0.1v-0.1H38.5z M38.5,33.2L38.5,33.2c0.1,0.3,0.1,0.4,0.2,0.4h0.2C38.9,33.3,38.8,33.2,38.5,33.2z M38.6,6.1c0,0.1,0.1,0.1,0.1,0.1V6.1H38.6z M38.7,20.3c0,0.3,0,0.4-0.1,0.4c0,0.1,0.1,0.2,0.1,0.2l0.3-0.2l-0.1-0.1c0-0.1,0.1-0.2,0.1-0.2L38.7,20.3L38.7,20.3z M38.6,40.3 l-0.1,0.1c0.2,0.1,0.3,0.1,0.4,0.1v-0.1C38.9,40.4,38.8,40.4,38.6,40.3z M38.6,41.8l-0.1,0.1V42l0.5,0.1 C39.1,42,38.9,41.9,38.6,41.8z M38.7,15.4l-0.1,0.4l0.3,0.1v-0.4H38.7z M38.7,6.3L38.7,6.3l0.1,0.1V6.3H38.7z M38.7,14.7 c0,0.1,0.1,0.1,0.1,0.1h0.1C38.9,14.7,38.9,14.7,38.7,14.7L38.7,14.7z M38.7,39.7v0.2h0.2v-0.2H38.7z M38.8,0.9L38.8,0.9 c0,0.2,0.1,0.2,0.1,0.2H39V1.1C39,1,38.9,0.9,38.8,0.9L38.8,0.9z M38.8,18.8v0.1H39C39,18.8,38.9,18.8,38.8,18.8z M38.8,36v0.1h0.1 L38.8,36L38.8,36z M38.9,29.4L38.9,29.4l0.1,0.1v-0.1H38.9z M39.1,2.2v0.1h0.1C39.2,2.2,39.2,2.2,39.1,2.2z M39.1,3.5v0.1h0.1 L39.1,3.5L39.1,3.5z M39.1,4.4v0.1h0.1V4.4H39.1z M39.1,1.3l0.4,0.4h0.1V1.6c-0.1-0.1-0.2-0.2-0.2-0.3H39.1z M39.3,22.6v0.1h0.1 c0.1,0,0.1,0,0.1-0.1H39.3z M40.3,1.6c0,0.1-0.2,0.2-0.5,0.2v0.1h0.6V1.8C40.5,1.7,40.4,1.6,40.3,1.6z M40.1,1.4L40.1,1.4 c0.2,0,0.2,0,0.2-0.1h-0.1C40.2,1.3,40.1,1.3,40.1,1.4z M40.2,2.5l-0.1,0.1h0.2C40.3,2.5,40.3,2.5,40.2,2.5z M40.4,24.6L40.4,24.6 l0.1,0.1v-0.1H40.4z M40.5,22.6c0,0.1,0.1,0.1,0.1,0.1H41v-0.1L40.5,22.6L40.5,22.6z M40.7,24.8L40.6,25c0,0,0.1,0,0.2,0.1V25 C40.8,24.9,40.8,24.8,40.7,24.8z M41,4c0.1,0,0.2,0.1,0.3,0.3l-0.1,0.1c-0.1,0-0.2-0.1-0.2-0.1V4z M41.3,0.2l-0.1,0.1h0.2 C41.4,0.3,41.4,0.2,41.3,0.2z M41.5,0.6v0.1c0,0,0.3,0.1,0.8,0.2h0.2V0.7c-0.2,0-0.4-0.1-0.5-0.2L41.5,0.6z M41.7,26.1L41.7,26.1 l0.2,0.1v-0.1H41.7z M42.6,1.3l0.1,0.1c-0.3,0.3-0.6,0.4-0.9,0.4v0.1c0.1,0,0.1,0,0.1,0.1C42.6,2,43,1.9,43,1.6L42.6,1.3L42.6,1.3z M42.4,3.6L42.4,3.6l0.2,0.1V3.6H42.4z M42.6,0.8c0,0.1,0.1,0.2,0.1,0.3h0.4V0.9L42.6,0.8z M42.8,0.3c0,0.1,0.1,0.1,0.1,0.1h0.1 c0-0.1,0-0.1-0.1-0.1H42.8z M42.8,3.4L42.8,3.4l0.1,0.1V3.4H42.8z M43.1,1.3L43.1,1.3c0.3,0.2,0.7,0.3,1.1,0.3h0.1V1.5 C43.7,1.4,43.3,1.3,43.1,1.3L43.1,1.3z M43.3,25.2c0,0.1,0,0.2-0.1,0.3h0.1c0.3-0.1,0.5-0.1,0.6-0.1v-0.1 C43.7,25.3,43.5,25.3,43.3,25.2z M43.2,26.4L43.2,26.4l0.1,0.1v-0.1H43.2z M43.3,12.5h0.1v0.2C43.3,12.7,43.3,12.7,43.3,12.5 L43.3,12.5z M43.3,35.1L43.3,35.1l0.1,0.1v-0.1H43.3z M43.4,18.4L43.4,18.4l0.1,0.1v-0.1H43.4z M43.4,19.3c0,0.1,0.1,0.1,0.1,0.1 v-0.1H43.4z M43.4,48.7L43.4,48.7l0.1,0.1v-0.1H43.4z M43.5,24.6v0.2h0.1v-0.2H43.5z M43.5,26.6L43.5,26.6l0.1,0.1v-0.1H43.5z M43.5,43.5L43.5,43.5l0.2,0.1v-0.1H43.5z M43.6,43.8c0,0,0,0.1-0.1,0.2c0.2,0,0.4,0.1,0.4,0.3h0.3v-0.1c-0.1,0-0.2-0.1-0.4-0.4 H43.6z M44.7,9.6l-0.1,0.1v0.4h-0.1c-0.1,0-0.4-0.1-0.9-0.4l-0.1,0.1c0,0.1,0.1,0.1,0.2,0.2c0.1,0,0.2-0.1,0.3-0.1 c0,0.3,0.4,0.4,0.9,0.4c0,0.2,0.3,0.4,0.8,0.5c0.2,0.1,0.5,0.3,0.8,0.5l0.1-0.1v-0.1c-0.1,0-0.2,0-0.2-0.1l0.1-0.1 c-0.1,0-0.3-0.1-0.7-0.3v-0.1l0.1-0.2c-0.2,0-0.4-0.1-0.4-0.4h-0.3C45.2,9.8,45,9.7,44.7,9.6z M43.6,40.7v0.1 c0,0.1,0.1,0.1,0.1,0.1h0.4c0.1,0,0.1,0,0.1-0.1L44,40.7H43.6z M43.7,27l-0.1,0.1v0.1H44c0.1,0,0.2,0,0.3,0.1 c0.1,0,0.2-0.1,0.2-0.1v-0.1C44.1,27,43.9,27,43.7,27z M43.6,28.8c0,0.1,0.1,0.2,0.1,0.2h0.2c0-0.1-0.1-0.2-0.1-0.2H43.6z M43.6,39.2L43.6,39.2l0.2,0.1v-0.1H43.6z M43.7,0.4c0,0.1,0.2,0.2,0.5,0.2C44.2,0.5,44,0.5,43.7,0.4z M43.8,4.6c0,0,0,0.1-0.1,0.2 H44c0.1,0,0.1,0,0.1-0.1L44,4.6H43.8z M43.7,22.1c0,0.1,0.1,0.1,0.1,0.1h0.2c0-0.1,0-0.1-0.1-0.1H43.7z M43.7,22.8v0.1h0.1 L43.7,22.8L43.7,22.8z M43.7,32.4v0.3l0.4,0.1C44.1,32.7,43.9,32.6,43.7,32.4z M43.8,47.6L43.8,48c0.3,0,0.5,0.2,0.5,0.5h0.2 l0.1-0.5C44.6,47.9,44.4,47.8,43.8,47.6z M43.9,3.9L43.9,3.9C44,3.9,44,4,44.1,4l0.1-0.1H43.9z M44,11.2c0,0.1,0.2,0.2,0.6,0.2 c-0.1-0.1-0.1-0.2-0.1-0.3L44,11.2z M44,11.9L44,11.9c0.1,0.1,0.2,0.1,0.3,0.2v-0.2H44z M44,27.7h0.3c0-0.1,0-0.1-0.1-0.1 C44,27.6,44,27.6,44,27.7z M44.1,15.5L44.1,15.5c0.1,0.1,0.2,0.1,0.3,0.2h0.5C44.8,15.7,44.6,15.6,44.1,15.5L44.1,15.5z M44.1,21.8 c0.1,0.3,0.1,0.4,0.2,0.4h0.1v-0.1l-0.1-0.4H44.1z M44.1,31.1v0.3h0.3c0.1,0,0.1-0.1,0.2-0.2v-0.1l-0.1-0.1 C44.3,31.1,44.1,31.1,44.1,31.1z M44.1,43.9L44.1,43.9l0.1,0.2c0.2,0,0.4-0.1,0.5-0.1v-0.1H44.1C44.1,43.9,44.1,43.9,44.1,43.9z M44.1,12.2c0,0.1,0.1,0.1,0.1,0.1l0.4-0.1v-0.1H44.1z M44.1,20.8V21h0.1v-0.1H44.1z M44.1,24.1L44.1,24.1l0.4,0.1v-0.1H44.1z M44.1,29.1L44.1,29.1l0.1,0.1v-0.1H44.1z M44.1,29.4L44.1,29.4c0.1,0.1,0.2,0.2,0.4,0.4c0,0,0-0.1,0.1-0.1l0.1,0.1 c-0.1,0-0.2,0.1-0.3,0.1c0,0.3,0.1,0.4,0.1,0.6h0.2l0.2-0.1H45l0.2,0.1h0.1c0-0.1-0.1-0.2-0.1-0.2c0-0.1,0.1-0.2,0.1-0.2 c-0.3-0.1-0.5-0.2-0.6-0.2v-0.1h0.1v-0.1c-0.3,0-0.4-0.1-0.4-0.2H44.1z M44.3,14.3l-0.1,0.1l0.2,0.1h0.1v-0.2 C44.4,14.4,44.4,14.4,44.3,14.3z M44.3,49.1c0,0.1,0,0.2-0.1,0.3c0.2,0.1,0.3,0.1,0.4,0.1h0.1c-0.1-0.3-0.2-0.4-0.3-0.4H44.3z M44.3,40.6v0.1h0.1L44.3,40.6L44.3,40.6z M44.3,48.7v0.3h0.1c0.1,0,0.1,0,0.1-0.1v-0.1H44.3z M44.3,7.8c0,0.1,0.1,0.2,0.4,0.4h0.1 V7.9L44.3,7.8z M44.3,18.1v0.1h0.1v-0.1H44.3z M44.4,37c0,0,0,0.1-0.1,0.2l0.1,0.1h0.1c0.1,0,0.1,0,0.1-0.1v-0.1 C44.6,37.1,44.5,37,44.4,37z M44.4,12.4L44.4,12.4l0.1,0.1v-0.1H44.4z M44.5,33.6c0.1,0.1,0.1,0.2,0.1,0.3h0.1c0,0,0-0.1,0.1-0.2 L44.5,33.6z M44.5,21.7v0.1h0.3c0-0.1,0-0.1-0.1-0.1H44.5z M44.6,32.3l-0.1,0.1l0.1,0.1h0.2v-0.1L44.6,32.3z M44.6,4.4L44.6,4.4 c0.1,0.2,0.2,0.3,0.2,0.4H45V4.6C44.9,4.6,44.8,4.6,44.6,4.4L44.6,4.4z M44.7,1L44.7,1l0.1,0.1V1H44.7z M44.7,22.1L44.7,22.1 l0.1,0.1v-0.1H44.7z M44.8,12L44.8,12c0,0.1,0.1,0.2,0.2,0.3c0.1,0,0.1,0,0.1-0.1s0-0.1-0.1-0.1H44.8z M44.8,16.8L44.8,16.8 l0.1,0.1v-0.1H44.8z M44.8,34v0.1h0.1C44.9,34.1,44.8,34,44.8,34z M44.8,47.9L44.8,47.9L45,48v-0.1H44.8z M44.8,16.5L44.8,16.5 l0.2,0.1v-0.1H44.8z M44.8,39v0.1h0.4v-0.1L44.8,39z M44.8,41c0.1,0.1,0.2,0.1,0.3,0.1v0.1L45,41.3l0.1,0.1c0.1,0,0.1-0.1,0.2-0.2 L45,40.9C44.9,40.9,44.8,40.9,44.8,41z M45,1.1l-0.1,0.1L45,1.3h0.1V1.3C45.1,1.2,45.1,1.1,45,1.1z M44.9,11.6l0.1,0.1 c0.1,0,0.2-0.1,0.3-0.1v-0.1H44.9z M44.9,28.3L44.9,28.3l0.1,0.1v-0.1H44.9z M45,48.4L45,48.4l0.3,0.1v-0.1H45z M45,36.1L45,36.1 c0,0.1,0.1,0.1,0.2,0.1v-0.1H45z M45.1,26.3L45.1,26.3c0,0.1,0.1,0.1,0.2,0.1h0.1v-0.1C45.3,26.4,45.3,26.3,45.1,26.3L45.1,26.3z M45.2,12.4L45.2,12.4l0.2,0.1v-0.1H45.2z M45.2,28.6L45.2,28.6l0.1,0.1v-0.1H45.2z M45.2,44.6L45.2,44.6c0.2,0.1,0.3,0.2,0.3,0.4 c0.2-0.1,0.3-0.1,0.4-0.1C45.9,44.8,45.7,44.7,45.2,44.6L45.2,44.6z M45.3,16.6v0.1h0.1L45.3,16.6L45.3,16.6z M45.3,43.5v0.2 l0.5,0.1c0-0.1-0.1-0.2-0.3-0.3H45.3z M45.4,3.5L45.4,3.5l1.1,0.3c0.1,0,0.2-0.1,0.3-0.3l-0.4,0.1h-0.1c-0.2-0.2-0.3-0.3-0.4-0.3 C45.6,3.4,45.5,3.5,45.4,3.5z M45.4,24v0.1h0.1C45.5,24,45.5,24,45.4,24z M45.4,41.9c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.1-0.1 c0,0-0.1,0-0.1-0.1C45.5,41.9,45.4,41.9,45.4,41.9z M45.5,17.6L45.5,17.6l0.1,0.1v-0.1H45.5z M45.5,24.3c0,0.1,0.1,0.1,0.2,0.2 c0.1,0,0.1,0,0.1-0.1v-0.1l-0.1,0.1C45.6,24.4,45.5,24.3,45.5,24.3z M45.5,34.7L45.5,34.7l0.2,0.1v-0.1H45.5z M45.5,42.9L45.5,43 h0.3V43C45.7,43,45.6,42.9,45.5,42.9z M45.5,7.8v0.1h0.2C45.7,7.9,45.7,7.8,45.5,7.8L45.5,7.8z M45.5,8.6v0.1h0.1L45.5,8.6 L45.5,8.6z M46.2,39.1c0,0.1-0.1,0.3-0.3,0.4c-0.1,0-0.1,0-0.1-0.1c-0.1,0-0.2,0.1-0.2,0.1l0.6,0.4c0,0,0.1-0.1,0.3-0.4 c-0.1-0.1-0.1-0.2-0.1-0.3H46.2z M45.5,41.1v0.1c0.2,0,0.4,0,0.4,0.1c0.1,0,0.2-0.1,0.2-0.1L46,41.1l-0.1,0.1L45.5,41.1z M45.6,4.7 v0.1c0.1,0,0.2,0.1,0.4,0.4l0.6,0.1l0.1-0.1c-0.2-0.1-0.4-0.2-0.4-0.3c0,0,0.1,0,0.1-0.1L46,4.7H45.6z M45.6,42.1L45.6,42.1 c0,0.1,0.1,0.1,0.2,0.1h0.1v-0.1C45.8,42.2,45.8,42.2,45.6,42.1L45.6,42.1z M45.7,36.1L45.7,36.1c0.2,0.1,0.3,0.1,0.4,0.1l0.1-0.2 H46L45.7,36.1z M45.7,41.6l-0.1,0.1l0.1,0.1H46c0.1,0,0.1,0,0.1-0.1C46.1,41.6,46,41.6,45.7,41.6z M45.7,26.4L45.7,26.4l0.3,0.1 v-0.1H45.7z M45.7,48.2L45.7,48.2c0.2,0,0.2,0,0.2-0.1h-0.1C45.8,48,45.7,48.1,45.7,48.2z M45.9,5.7l-0.1,0.1h0.2 C46.1,5.7,46,5.7,45.9,5.7z M45.9,40.1v0.1h0.1L45.9,40.1L45.9,40.1z M45.9,16.9L45.9,16.9l0.1,0.1v-0.1H45.9z M46,1.3v0.1h0.1 L46,1.3L46,1.3z M46,49.4l0.1,0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1H46z M46.1,4.1v0.1h0.1L46.1,4.1L46.1,4.1z M46.1,5.9L46.1,5.9L46.4,6 V5.8L46.1,5.9z M46.1,17.3v0.1h0.4c0-0.1,0-0.1-0.1-0.1H46.1z M46.1,42.4v0.2c0,0.1,0.1,0.1,0.1,0.1h0.1c0.2-0.1,0.4-0.2,0.4-0.3 c-0.2-0.1-0.3-0.1-0.4-0.1C46.2,42.4,46.1,42.4,46.1,42.4z M46.2,34.7c0,0,0.1,0.1,0.2,0.2c0.1,0,0.2-0.1,0.3-0.1v-0.1l-0.4-0.1 H46.2z M46.2,38.1L46.2,38.1c0,0.2,0.1,0.2,0.1,0.2h0.2l0.1-0.1c-0.1-0.2-0.1-0.3-0.2-0.3h-0.1C46.2,38,46.2,38,46.2,38.1z M46.2,40.1L46.2,40.1l0.1,0.1v-0.1H46.2z M46.2,19L46.2,19l0.2,0.1V19H46.2z M46.3,24.3l-0.1,0.1l0.2,0.1h0.1v-0.1 C46.5,24.4,46.4,24.3,46.3,24.3z M46.2,29.5c0.1,0.2,0.2,0.3,0.4,0.3c0.2-0.1,0.3-0.1,0.3-0.2l-0.1-0.1c0,0.1,0,0.1-0.1,0.1h-0.1 L46.2,29.5L46.2,29.5z M46.2,44.9L46.2,44.9c0,0.2,0.1,0.2,0.1,0.2h0.1v-0.1c0-0.1,0-0.1-0.1-0.1H46.2z M46.2,48.4v0.1h0.1 C46.4,48.5,46.3,48.4,46.2,48.4z M46.3,13.6v0.1h0.2v-0.1H46.3z M46.3,33.8c0,0.1,0.1,0.2,0.3,0.3h0.1c-0.1-0.2-0.1-0.3-0.2-0.3 H46.3z M46.4,21.2L46.4,21.2l0.2,0.1c0,0,0-0.1,0.1-0.2h-0.1C46.4,21,46.4,21.1,46.4,21.2z M46.4,37.3v0.1h0.1L46.4,37.3L46.4,37.3 z M46.5,41.1L46.5,41.1l0.3,0.1l-0.1-0.1C46.6,41.1,46.6,41.1,46.5,41.1z M46.7,17.1c0,0.2,0,0.3-0.1,0.4c0.1,0,0.1,0.1,0.1,0.2 h0.1v-0.1l-0.1-0.5H46.7z M46.6,22.1L46.6,22.1l0.1,0.1v-0.1H46.6z M46.6,37.1L46.6,37.1c0,0.2,0.1,0.2,0.1,0.2 c0.2,0,0.4-0.1,0.4-0.2v-0.3c0,0-0.1,0-0.1,0.1l-0.1-0.1h-0.1C46.8,36.8,46.7,36.9,46.6,37.1z M46.7,7.2L46.7,7.2 c0,0.2,0.2,0.3,0.5,0.5h0.1c-0.1-0.3-0.2-0.4-0.4-0.6C46.8,7.1,46.7,7.2,46.7,7.2z M46.7,14.5l-0.1,0.1c0,0,0.3,0.1,0.8,0.4h0.1 l0.1-0.3L46.7,14.5z M46.7,21h0.1c0.2-0.1,0.3-0.2,0.3-0.4C46.8,20.6,46.7,20.8,46.7,21z M46.7,23.4c0,0.1,0.1,0.1,0.2,0.2 c0.1,0,0.1,0,0.1-0.1l-0.1-0.1H46.7z M46.7,36.6v0.1c0.2-0.1,0.3-0.1,0.3-0.2h-0.1C46.8,36.5,46.7,36.6,46.7,36.6z M46.8,16.5 l-0.1,0.1c0,0.1,0.1,0.2,0.4,0.2v-0.1C47.1,16.7,47,16.6,46.8,16.5z M46.8,42.3c0,0,0,0.1-0.1,0.2h0.2 C46.9,42.4,46.9,42.3,46.8,42.3L46.8,42.3z M46.7,45.3c0,0.1,0.1,0.1,0.4,0.2c0.1,0,0.2-0.1,0.3-0.1v-0.1c-0.1,0-0.3,0-0.5-0.1 C46.8,45.3,46.8,45.3,46.7,45.3z M46.8,17.9L46.8,17.9c0,0.2,0.1,0.2,0.1,0.2v-0.1C46.9,18,46.9,17.9,46.8,17.9z M46.8,37.7 l0.3,0.2h0.4v-0.1c0-0.1-0.1-0.2-0.4-0.4H47C46.9,37.4,46.9,37.5,46.8,37.7z M46.9,32.2c0.2,0.3,0.3,0.5,0.3,0.6c0,0-0.1,0-0.1,0.1 l0.1,0.1h0.1l-0.1-0.1c0-0.3,0.2-0.4,0.7-0.4v-0.1c-0.4-0.1-0.6-0.3-0.6-0.4C47,32.1,46.9,32.1,46.9,32.2z M46.9,33.3v0.1H47 C47,33.4,47,33.3,46.9,33.3z M46.9,5.6c0,0.1,0.1,0.1,0.1,0.1V5.6H46.9z M46.9,36.3c0,0.1,0.1,0.1,0.1,0.1l0.4-0.1v-0.1 c-0.2,0-0.3,0-0.3-0.1C47.1,36.1,47,36.1,46.9,36.3z M46.9,38.3c0,0.1,0.2,0.3,0.5,0.4c0-0.1,0.1-0.1,0.2-0.1v-0.1 c-0.2,0-0.3-0.1-0.6-0.2C47,38.2,46.9,38.2,46.9,38.3z M46.9,47.8V48c0.1,0,0.2,0,0.3,0.1c0.1,0,0.2-0.1,0.3-0.1v-0.1 c-0.1,0-0.2,0.1-0.2,0.1L46.9,47.8z M47,10.8L47,10.8l0.2,0.1v-0.1H47z M47,27.7L47,27.7c0,0.2,0.1,0.2,0.1,0.2h0.1v-0.1 C47.2,27.8,47.2,27.7,47,27.7L47,27.7z M47,41.8v0.1h0.1L47,41.8L47,41.8z M47,42.3L47,42.3l0.1,0.1v-0.1H47z M47,43.7v0.1h0.2 C47.2,43.8,47.2,43.7,47,43.7L47,43.7z M47.6,30.9c0,0.1-0.1,0.3-0.4,0.6c0.1,0.1,0.1,0.2,0.1,0.3h0.1c0-0.1,0.1-0.3,0.4-0.6 C47.7,31.1,47.6,31.1,47.6,30.9L47.6,30.9z M47.2,41.7L47.2,41.7l0.4,0.1v-0.1H47.2z M47.3,18.9v0.2c0,0.1,0.1,0.2,0.4,0.3v-0.3 c0-0.1-0.1-0.1-0.2-0.2H47.3z M47.3,23.3h0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1h-0.2C47.3,23.2,47.3,23.3,47.3,23.3z M47.4,8.8 c0,0.1,0.1,0.1,0.1,0.1h0.1c0-0.1,0-0.1-0.1-0.1H47.4z M47.4,4.5v0.1h0.4V4.5H47.4z M47.4,19.6v0.2l0.1,0.1c0.1,0,0.2-0.1,0.3-0.1 v-0.1C47.8,19.7,47.7,19.7,47.4,19.6z M47.4,42.2L47.4,42.2l0.4-0.1c0-0.1,0-0.1-0.1-0.1h-0.1C47.6,42,47.5,42,47.4,42.2z M47.6,37.5L47.6,37.5l0.4,0.1H48l-0.1-0.2C47.8,37.5,47.7,37.5,47.6,37.5z M47.6,47.6C47.6,47.6,47.6,47.7,47.6,47.6 c0,0.2,0,0.2,0,0.3h0.1v-0.1C47.8,47.6,47.7,47.6,47.6,47.6z M47.6,29.7c0,0.1,0.1,0.1,0.1,0.1v-0.1H47.6z M47.7,26.9L47.7,26.9 l0.2,0.1v-0.1H47.7z M47.8,36.1L47.8,36.1l0.1,0.1v-0.1H47.8z"
              },
              void 0,
              !1,
              {
                fileName: "app/ui/components/Preloader.tsx",
                lineNumber: 48,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV32(
              "path",
              {
                fill: "#fff",
                d: "M53.6,0.3h1.1c0.1,0,0.1,0.1,0.2,0.2c0.5,0,0.8-0.1,0.8-0.2h0.1L56,0.4h0.1V0.3h0.5L57,0.6 h0.1V0.3h1.2c0.3,0.2,0.4,0.4,0.4,0.6L58.5,1l-0.3-0.1C58.2,1,58.1,1,58,1v0.1c0,0.1,0.1,0.1,0.1,0.1c0.2-0.1,0.4-0.1,0.5-0.1v0.1 c0,0,0.1,0,0.1-0.1L59,1.2h0.3c0.1,0,0.1-0.1,0.1-0.2c0,0-0.1-0.2-0.3-0.4V0.5c0-0.1,0.1-0.1,0.2-0.2c0,0,0.1,0,0.1,0.1l0.4-0.1 h2.5c0.8,0,1.5,0.2,2.3,0.6V1l-0.1,0.1l0.1,0.1l0.4-0.1c0.8,0.8,1.4,1.5,1.5,2.1c0,0.3-0.1,0.4-0.3,0.4v0.1c0.1,0,0.2,0,0.3,0.1 L66.4,4v0.6h0.1c0-0.2,0.1-0.4,0.2-0.4h0.1c0,0.1,0,0.3,0.1,0.5c0,0.1,0,0.2-0.1,0.2c0,0.6,0.1,0.9,0.1,1.2v3.5l-0.1,0.5 c0,0,0.1,0,0.1,0.1c0,0-0.1,0-0.1,0.1l-0.1-0.1h-0.2l0.4,0.3v4.2c0,0.2,0,0.3-0.1,0.4l0.1,0.4v2.9c0,0.1,0,0.2-0.1,0.3 c0,0.1,0.1,0.2,0.1,0.3v0.1c0,0.1,0,0.1-0.1,0.1h-0.4c0,0.1-0.1,0.3-0.4,0.4l0.4,0.1c0-0.1,0.1-0.1,0.1-0.1 c0.2,0.1,0.3,0.1,0.4,0.1v0.1L66.7,20c0.1,0,0.1,0.1,0.1,0.1v2.5h-0.2c-0.1,0-0.2,0-0.3-0.1c-0.1,0-0.2,0.1-0.2,0.1v0.1l0.7,0.1 v1.8l-0.1,0.2c0.1,0,0.1,0.1,0.1,0.1v6.7c0,0.1-0.1,0.2-0.4,0.2v0.1h0.1c0.1,0,0.2-0.1,0.2-0.1l0.1,0.1v0.4c0,0.1-0.1,0.4-0.3,0.7 h0.3c0,1.9,0.1,3.3,0.1,4.2v7.7l-0.1,0.2c0.1,0,0.1,0.1,0.1,0.1c0,1-0.4,2-1.3,3c-0.1,0-0.2-0.1-0.2-0.2h-0.2 c-0.1,0-0.1,0.1-0.1,0.1c0.1,0,0.2,0.1,0.3,0.3c-0.1,0.2-0.4,0.4-0.8,0.5c-0.1,0-0.2-0.1-0.2-0.1c-0.4,0.4-0.7,0.6-1.1,0.6 c-0.4,0-0.8,0-1.2,0.1h-1.4c-0.2-0.1-0.3-0.2-0.5-0.2h-0.1l0.1,0.1v0.1h-6l-0.3-0.2h-0.1v0.2h-0.4c-0.1,0-0.1-0.1-0.2-0.2v-0.1h0.1 l0.2,0.1h0.2c0-0.1-0.1-0.2-0.4-0.4l-0.1,0.1h-0.1v-0.1c0,0,0-0.1,0.1-0.1l-0.1-0.1v-8.1c0-0.1,0.1-0.1,0.4-0.1v-0.1 c-0.2,0-0.4-0.1-0.4-0.2c0-0.1,0.1-0.1,0.3-0.1v-0.1h-0.3v-0.5c0-0.1,0.1-0.1,0.3-0.1v-0.2c-0.2,0-0.3,0-0.4-0.1l0.1-0.8v-0.9 c0-0.1,0.1-0.1,0.3-0.1c-0.2-0.1-0.3-0.4-0.4-0.6c0-0.2,0-0.3,0.1-0.4c0-2.8-0.1-5-0.1-6.6v-5.1L53,24.2l0.1-0.1 c0-0.6-0.1-1.1-0.1-1.5v-0.7c0-0.2,0-0.3,0.1-0.3L53,21.1V6c0-0.1,0.1-0.1,0.2-0.1V5.8c-0.1,0-0.2,0-0.2-0.1V2.5 c0-0.2,0-0.5-0.1-0.8L53,1.6L53,1.2V1.1C53,1,53,1,53.2,1l0.3,0.1c0,0,0-0.1,0.1-0.1c0,0.1,0.1,0.1,0.3,0.2c0-0.1,0.3-0.2,0.8-0.2 V0.9c0,0-0.1,0-0.2-0.1l-0.4,0.1h-0.1c0,0-0.1,0-0.1-0.1l-0.1,0.1h-0.4c-0.1-0.1-0.2-0.2-0.3-0.2V0.5C53.1,0.4,53.3,0.3,53.6,0.3z M53.2,6.8L53.1,7L53.5,7v0.1h-0.2v0.1c0.3,0,0.5,0.2,0.6,0.5l0.1-0.1h0.1c0.3,0,0.4,0.1,0.5,0.3v0.1l-0.1,0.1h0.1 c0.5-0.1,0.7-0.2,0.7-0.3V7.9c-0.8-0.3-1.3-0.5-1.4-0.5c0-0.1-0.1-0.1-0.2-0.1c0-0.1,0.1-0.1,0.1-0.1c0.1,0,0.2,0.1,0.3,0.1 C54.2,7,53.9,6.9,53.2,6.8C53.2,6.8,53.2,6.8,53.2,6.8z M53.2,6.2L53.2,6.2l0.1,0.1V6.2H53.2z M53.2,5.6c0,0.2,0.2,0.3,0.6,0.4 c0,0.1,0.1,0.1,0.1,0.1V6c-0.3-0.2-0.5-0.3-0.5-0.4H53.2z M53.3,21.2l-0.1,0.1l0.1,0.1c0.1,0,0.1,0,0.1-0.1 C53.5,21.2,53.4,21.2,53.3,21.2z M53.3,48.7L53.3,48.7l0.1,0.1v-0.1H53.3z M53.4,0.6L53.4,0.6l0.1,0.1V0.6H53.4z M53.4,36v0.1h0.1 C53.5,36,53.5,36,53.4,36z M53.4,38.7L53.4,38.7c0.2,0.1,0.4,0.1,0.4,0.1v-0.1H53.4z M53.5,44L53.5,44l0.1,0.1V44H53.5z M53.5,4.2 L53.5,4.2l0.2,0.1V4.2H53.5z M55.1,36.3v0.2c0,0.1,0.1,0.1,0.2,0.1v0.1c-0.1,0.2-0.3,0.3-0.6,0.4l-0.1,0.1c0,0-0.2-0.1-0.4-0.3 h-0.5v0.1h0.2l0.8,0.3c0-0.1,0.1-0.1,0.1-0.1c0,0,0.1,0,0.1,0.1l0.1-0.1h0.6c0-0.1,0.1-0.2,0.3-0.4C55.6,36.5,55.3,36.3,55.1,36.3z M53.8,2.3c0,0,0,0.1-0.1,0.2c0.1,0,0.2,0.1,0.2,0.2h0.3C54.2,2.4,54.1,2.3,53.8,2.3z M53.8,4.2L53.8,4.2l0.4,0.1V4.2H53.8z M54.1,40.8c0,0.1-0.1,0.2-0.2,0.3h0.3L54.1,40.8L54.1,40.8z M53.9,48.3L53.9,48.3c0,0.2,0.2,0.3,0.4,0.3v-0.1L53.9,48.3z M53.9,15.8L53.9,15.8c0,0.1,0.1,0.1,0.2,0.1l0.1-0.1H53.9z M54.3,39.4L53.9,40v0.2c0.1,0,0.3-0.2,0.5-0.5v-0.1 C54.4,39.5,54.4,39.4,54.3,39.4z M53.9,45.5L53.9,45.5c0,0.2,0.1,0.2,0.2,0.2c0.2-0.1,0.3-0.1,0.3-0.2l-0.1-0.1L53.9,45.5z M54.4,33.8c-0.2,0.1-0.4,0.2-0.4,0.3c0,0-0.1,0.1-0.1,0.2c0.1,0,0.2,0,0.4,0.1c0-0.1,0.1-0.1,0.1-0.1c0,0,0,0.1,0.1,0.1 c0-0.1,0.1-0.2,0.2-0.4L54.4,33.8z M54.1,32.2L54.1,32.2l0.4,0.1v-0.1c0,0-0.1,0-0.2-0.1C54.2,32.2,54.1,32.2,54.1,32.2z M54.6,2.3 l-0.4-0.1v0.1c0,0.1,0.1,0.1,0.2,0.2l0.1-0.1h0.4c0-0.1,0.1-0.1,0.4-0.1V2.2c-0.2,0-0.3,0-0.3-0.1C54.7,2,54.6,2.1,54.6,2.3z M54.4,38.4L54.4,38.4c0,0.2,0.1,0.2,0.1,0.2l-0.1,0.1c0,0.1,0.1,0.2,0.1,0.3h0.1l0.3-0.2h0.1c0,0,0,0.1,0.1,0.2 c0.1,0,0.2-0.1,0.3-0.1l-0.1-0.1l0.1-0.1c0,0-0.1,0-0.1-0.1c0.1,0,0.1,0,0.1-0.1l-0.5-0.1C54.7,38.4,54.5,38.4,54.4,38.4z M54.4,29.5c0,0.1,0.1,0.1,0.1,0.1v-0.1H54.4z M54.5,30.7L54.5,30.7l0.1,0.1v-0.1H54.5z M54.5,34.5L54.5,34.5 c0,0.1,0.1,0.1,0.2,0.1v-0.1H54.5z M54.6,19.9c0,0.1,0.1,0.1,0.1,0.1h0.1C54.8,19.9,54.7,19.9,54.6,19.9L54.6,19.9z M54.8,32.7 l-0.1,0.6h0.1c0.1,0,0.2-0.1,0.4-0.4v-0.1L54.8,32.7z M54.7,33.3v0.1h0.1v-0.1H54.7z M54.8,25.7L54.8,25.7c0.6,0.3,0.9,0.4,1.1,0.4 c0.1,0,0.2-0.1,0.2-0.1v-0.1c-0.1,0-0.4-0.1-0.9-0.3H54.8z M54.8,34.5L54.8,34.5l0.1,0.1v-0.1H54.8z M54.9,14.6v0.1H55 C55,14.7,55,14.6,54.9,14.6z M54.9,29.4L54.9,29.4l0.2,0.1v-0.1H54.9z M54.9,30.2v0.1h0.2C55.1,30.3,55,30.2,54.9,30.2L54.9,30.2z M54.9,45.2L54.9,45.2l0.1,0.1v-0.1H54.9z M55.1,8.4L55,8.6c0,0.1,0.2,0.2,0.7,0.2l0.1-0.1C55.4,8.5,55.2,8.4,55.1,8.4z M55,20 c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1H55z M55,48.7L55,48.7l0.2,0.1v-0.1H55z M55.1,2.4L55.1,2.4l0.2,0.1V2.4H55.1z M55.1,34.4L55.1,34.4 l0.4,0.1h0.1v-0.1L55.1,34.4L55.1,34.4z M55.4,9.7L55.4,9.7c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0,0.1,0,0.1-0.1V9.7H55.4z M55.4,29.3h0.4 c0-0.1,0-0.1-0.1-0.1h-0.1C55.4,29.1,55.4,29.2,55.4,29.3z M55.4,39c0,0.3,0.2,0.5,0.4,0.5v-0.1c0-0.2-0.1-0.4-0.2-0.4H55.4z M55.6,10c0,0.1,0.1,0.2,0.1,0.2H56v-0.1L55.6,10z M55.7,2h0.4V1.9h-0.2C55.8,1.9,55.7,2,55.7,2z M55.7,15.7c0,0.1,0.1,0.1,0.1,0.1 v-0.1H55.7z M55.8,28.8v0.1h0.1c0.1,0,0.1,0,0.1-0.1v-0.1C56,28.7,55.9,28.8,55.8,28.8z M56,40l-0.1,0.1v0.1c0,0.1,0.1,0.2,0.3,0.3 h0.1C56.3,40.2,56.2,40,56,40z M56,31.5v0.1h0.2v-0.1H56z M56,37.5v0.1c0.3,0,0.5,0,0.5,0.1c0.1,0,0.2-0.1,0.2-0.1 c0-0.1-0.1-0.1-0.2-0.2H56z M56,39.5v0.2c0.2,0,0.4,0.2,0.8,0.5v-0.4C56.6,39.8,56.3,39.7,56,39.5z M56.2,25.9L56.2,25.9l0.2,0.1 c0-0.1,0-0.2,0.1-0.3h-0.1C56.3,25.7,56.2,25.8,56.2,25.9z M56.2,31.2v0.2h0.1c0.1,0,0.1,0,0.1-0.1v-0.1H56.2z M56.3,10.7 c0,0.1,0.1,0.1,0.1,0.1v-0.1H56.3z M56.4,14.8L56.4,14.8c0.2,0,0.2,0,0.2-0.1h-0.1C56.5,14.6,56.4,14.7,56.4,14.8z M56.4,30.7 l0.1,0.1c0.1,0,0.2-0.1,0.4-0.1v-0.1c-0.1,0-0.2,0-0.2-0.1C56.5,30.6,56.5,30.7,56.4,30.7z M56.5,7.7L56.5,7.7l0.1,0.1V7.7H56.5z M56.5,9.2l0.1,0.1h0.2c0-0.1-0.1-0.2-0.1-0.2h-0.1C56.5,9.1,56.5,9.1,56.5,9.2z M56.5,21.9v0.2h0.1v-0.2H56.5z M56.6,36.5 c0,0.1,0.1,0.1,0.1,0.1v-0.1H56.6z M56.7,1.3L56.7,1.3c0,0.1,0.1,0.2,0.2,0.3h0.6V1.5c-0.1-0.2-0.2-0.3-0.2-0.3 C56.9,1.2,56.7,1.3,56.7,1.3z M56.7,22.9L56.7,22.9l0.4,0.1v-0.1H56.7z M56.8,13.6v0.1H57v-0.1C56.9,13.6,56.9,13.6,56.8,13.6z M56.8,18v0.1c0.2,0,0.3,0.1,0.4,0.3c0.1,0,0.2,0.1,0.3,0.1h0.1C57.3,18.3,57.1,18.1,56.8,18L56.8,18z M56.8,0.8L56.8,0.8L57,0.9 V0.7C56.9,0.7,56.8,0.8,56.8,0.8z M57,2l-0.1,0.2v0.1c0.1,0,0.2,0.1,0.4,0.4c0.1,0,0.2-0.1,0.3-0.1V2.4C57.5,2.3,57.4,2.2,57,2z M56.9,33.3c0.3,0,0.5-0.1,0.5-0.2V33h-0.3C57,33,57,33.1,56.9,33.3z M56.9,37.8V38H57C57,37.9,57,37.8,56.9,37.8z M56.9,42v0.3 l0.5,0.1h0.1v-0.1C57.3,42.3,57.1,42.2,56.9,42z M57,12.9L57,12.9l0.1,0.1v-0.1H57z M57,30.9L57,30.9l0.4,0.1v-0.1H57z M60.8,4.8 h-3v9.4h-0.1c-0.4-0.2-0.6-0.3-0.6-0.4c-0.1,0-0.1,0.1-0.1,0.1c0.3,0.2,0.5,0.5,0.5,0.6l0.1-0.1h0.1v1.1l-0.1,0.2 c0.1,0,0.1,0.1,0.1,0.1c0,1.7,0.1,3,0.1,3.9c0,0.2,0,0.5-0.1,0.8c0,0.2,0.1,0.4,0.1,0.8v0.1c0,0.1,0,0.2-0.1,0.2l0.1,0.4v3.6 c0,0.2,0,0.4,0.1,0.6l-0.2,0.4c0.1,0,0.2,0.1,0.2,0.2s0,0.2-0.1,0.2l0.1,0.7v5.1L57.5,33c0.3,0,0.4,0.1,0.4,0.2v0.7 c-0.4,0.1-0.6,0.2-0.6,0.4l0.1,0.1h0.2c0-0.1,0-0.2,0.1-0.2c0.1,0,0.1,0.1,0.1,0.1v2.2l-0.4,0.3c0,0.1,0.1,0.2,0.4,0.2v1.2 l-0.1,0.1c0.1,0,0.1,0.1,0.1,0.1v2c0,0.2-0.1,0.4-0.3,0.4v0.1H58v2L57.9,43V43l0.1,0.2v1.6l0.1,0.4h0.5l0.2,0.1c0,0,0.2,0,0.6-0.1 h0.2l0.3,0.2h0.3c0.1,0,0.1-0.1,0.1-0.2h1.2c0.4,0,0.6-0.1,0.6-0.4V34.1h0.1l0.2,0.1c0.1,0,0.2-0.1,0.2-0.1V34h-0.4 c-0.1,0-0.1-0.1-0.2-0.2v-1.5h0.1v-0.1L62,32.1v-1.8h0.3v-0.1c-0.2,0-0.3,0-0.3-0.1c0-0.9,0-3.2-0.1-6.8c0.2-0.1,0.3-0.1,0.3-0.2 v-0.1c-0.2,0-0.3-0.1-0.3-0.2v-0.9H62l0.4,0.1l-0.1-0.1c0-0.1,0.1-0.2,0.1-0.2h-0.2L62,21.7L62,21.6v-8.4c0.1,0,0.1,0.1,0.1,0.2 h0.1v-0.2H62l0.1-0.1V13L62,12.8V6.7c0-0.3,0-0.6-0.1-1.1c0-0.1,0.1-0.2,0.1-0.5c-0.1-0.2-0.2-0.4-0.2-0.4h-0.1v0.1h-0.1 c-0.1-0.2-0.1-0.4-0.1-0.6h-0.1C61,4.4,60.8,4.6,60.8,4.8z M57.1,18.6L57,18.7l0.4,0.1h0.4C57.7,18.7,57.5,18.6,57.1,18.6z M57,21.7l0.1,0.1h0.1v-0.1c0-0.1,0-0.1-0.1-0.1C57.1,21.5,57,21.6,57,21.7z M57.1,25.2v0.1h0.2v-0.1H57.1z M57.2,7.7L57.2,7.7 l0.1,0.1V7.7H57.2z M57.2,30.4l0.4,0.1c0-0.1,0-0.2,0.1-0.3l-0.1-0.1h-0.1C57.3,30.2,57.3,30.2,57.2,30.4z M57.3,2.7V3 c0,0.1,0.2,0.3,0.6,0.6h0.2V3.4l-0.6-0.7H57.3z M57.3,25.5L57.3,25.5l0.3,0.1v-0.1H57.3z M57.3,39.9L57.3,39.9 c0.1,0.1,0.1,0.1,0.1,0.2h0.1V40L57.3,39.9L57.3,39.9z M57.4,29.8l0.1,0.1c0-0.1,0.1-0.1,0.2-0.1c0-0.1-0.1-0.2-0.1-0.2h-0.1 C57.5,29.5,57.5,29.6,57.4,29.8z M57.4,32.6v0.1h0.1C57.5,32.6,57.5,32.6,57.4,32.6z M57.5,37c0,0.1,0.1,0.1,0.2,0.2h0.1v-0.1 c0-0.1,0-0.1-0.1-0.1H57.5z M57.6,0.9v0.1h0.1c0.1,0,0.1,0,0.1-0.1H57.6z M57.6,30.5L57.6,30.5l0.1,0.1v-0.1H57.6z M57.7,27.1 L57.7,27.1l0.1,0.1v-0.1H57.7z M57.7,27.3v0.2h0.1v-0.1C57.8,27.3,57.8,27.3,57.7,27.3z M58.1,4.5l0.2,0.1l0.1-0.2l-0.1-0.1h-0.1 C58.1,4.4,58.1,4.4,58.1,4.5z M58.2,3.9L58.2,3.9l0.4,0.1c0-0.1,0-0.1-0.1-0.1H58.2z M58.3,46.2c0,0.1,0.1,0.1,0.1,0.1v-0.1H58.3z M58.7,3.6v0.1c0,0,0.1,0,0.2,0.1V3.7C58.9,3.6,58.8,3.6,58.7,3.6L58.7,3.6z M58.7,3.9v0.1h0.1c0.1,0,0.1,0,0.1-0.1H58.7z M59.1,3.7v0.1h0.1C59.2,3.8,59.2,3.7,59.1,3.7z M59.1,4.1L59.1,4.1c0.1,0.1,0.2,0.1,0.2,0.1l0.1-0.1l0.1,0.1h0.1V4.1 c-0.1,0-0.3-0.1-0.4-0.2h-0.1C59.1,3.9,59.1,4,59.1,4.1z M59.1,46v0.1h0.2c0.1,0,0.1,0,0.1-0.1H59.1z M59.3,1.3v0.3h0.1 c0.1-0.1,0.3-0.1,0.5-0.1V1.3l-0.4,0.1h-0.1L59.3,1.3z M59.4,49.4L59.4,49.4l0.1,0.1v-0.1H59.4z M59.6,46.3L59.6,46.3l0.1,0.1v-0.1 H59.6z M59.9,0.4L59.9,0.4l0.2,0.1V0.4H59.9z M60.1,1.9L60.1,1.9L60.2,2V1.9H60.1z M60.3,45.5L60.3,45.5c0.2,0.1,0.4,0.1,0.4,0.1 v-0.1l-0.1-0.1H60.3z M60.4,1.8L60.4,1.8l0.1,0.1V1.8H60.4z M61.2,4.6L61.2,4.6l0.1,0.2H61V4.7C61.1,4.6,61.1,4.6,61.2,4.6z M61,49.4L61,49.4l0.2,0.1c0.1,0,0.1,0,0.1-0.1h-0.1C61.2,49.4,61.1,49.4,61,49.4z M61.8,3.6c0,0.1,0.1,0.2,0.1,0.2 c0.3-0.1,0.5-0.2,0.5-0.3V3.3h-0.1L61.8,3.6z M61.9,48.9L61.9,48.9l0.3,0.1v-0.2C62.1,48.9,62,48.9,61.9,48.9z M62.1,4.7v0.1h0.1 V4.7H62.1z M62.1,5.9L62.1,5.9C62.2,6,62.3,6,62.4,6c0,0,0-0.1,0.1-0.1l0.1,0.1c0.1,0,0.2-0.1,0.4-0.1V5.9l-0.4-0.1 C62.4,5.9,62.2,5.9,62.1,5.9z M62.2,14.6l-0.1,0.1h0.2C62.3,14.7,62.3,14.6,62.2,14.6z M62.2,14.8L62.1,15v0.2h0.5L62.2,14.8z M62.3,25.6l-0.1,0.2v0.1l0.4-0.1C62.5,25.7,62.5,25.7,62.3,25.6z M62.3,30.7l-0.1,0.1h0.2C62.5,30.8,62.4,30.7,62.3,30.7z M62.2,46.2v0.1c0,0.1,0.2,0.2,0.5,0.2l-0.1-0.2v-0.1c0.1,0,0.2,0,0.3,0.1h0.1v-0.1c-0.2,0-0.4,0-0.4-0.1 C62.5,46.2,62.4,46.2,62.2,46.2z M62.3,3.2C62.4,3.2,62.4,3.2,62.3,3.2c0.3,0,0.4-0.1,0.4-0.3h-0.1C62.4,3,62.3,3.1,62.3,3.2z M62.4,6.4L62.4,6.4l0.2,0.1V6.4H62.4z M62.4,7.2v0.1l0.4,0.1h0.1c0.1,0,0.1,0,0.1-0.1l-0.4-0.1H62.4z M63.4,23.4 c0,0.3-0.1,0.4-0.4,0.4c0,0.1,0,0.1-0.1,0.1l-0.4-0.4c0,0,0,0.1-0.1,0.1c0,0.1,0.1,0.2,0.4,0.4c0.1,0,0.3-0.1,0.6-0.2 c0.1,0,0.2,0.1,0.3,0.1c0.2-0.1,0.3-0.2,0.4-0.3c-0.2,0-0.4-0.1-0.4-0.3H63.4z M62.5,15.9v0.2c0.1,0,0.1,0,0.1-0.1L62.5,15.9z M62.5,44.6L62.5,44.6l0.1,0.1v-0.1H62.5z M62.6,34.6c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H62.6z M62.7,25.2L62.7,25.2l0.1,0.1v-0.1 H62.7z M62.7,31.9V32l0.1,0.1h0.1V32C62.8,32,62.7,31.9,62.7,31.9L62.7,31.9z M62.8,6.7L62.8,6.7l0.3,0.1V6.7H62.8z M62.8,32.4 L62.8,32.4l0.2,0.1v-0.1H62.8z M62.8,32.8V33h0.1L62.8,32.8L62.8,32.8z M62.9,7.5v0.1H63V7.5H62.9z M62.9,33.5L62.9,33.5l0.3,0.1 v-0.1H62.9z M62.9,44.6v0.1h0.1c0.1,0,0.1,0,0.1-0.1H62.9z M63,9v0.1h0.2V9H63z M63,24.3L63,24.3l0.1,0.1v-0.1H63z M63,33.7v0.2 h0.2c0.1,0,0.1,0,0.1-0.1L63,33.7z M63.1,24.8L63.1,24.8l0.1,0.1v-0.1H63.1z M63.2,6.2L63.2,6.2l0.2,0.1V6.2H63.2z M63.2,1.2 L63.2,1.2l0.2,0.1V1.2H63.2z M63.2,14.6L63.2,14.6c0.1,0.1,0.2,0.1,0.4,0.3h0.1v-0.2c0-0.1-0.1-0.1-0.2-0.1 C63.3,14.6,63.3,14.6,63.2,14.6z M63.2,24.2L63.2,24.2l0.1,0.1v-0.1H63.2z M63.2,30v0.1h0.1c0.1,0,0.1,0,0.1-0.1H63.2z M63.2,46.2 L63.2,46.2l0.2,0.1v-0.1H63.2z M63.3,48.6l-0.1,0.1c0.1,0,0.3,0,0.5,0.1v-0.1C63.5,48.6,63.3,48.6,63.3,48.6z M63.3,5.4L63.3,5.4 l0.2,0.1V5.4H63.3z M63.4,15.3c0,0.1,0.1,0.1,0.1,0.1h0.3v-0.1H63.4z M63.4,24.2c0,0.1,0.1,0.2,0.3,0.2c0.1,0,0.2-0.1,0.2-0.1 c0,0,0,0.1,0.1,0.1v-0.1C63.9,24.3,63.7,24.2,63.4,24.2z M63.5,6.5L63.5,6.5L63.5,6.5c0.2,0,0.2,0,0.3,0c0-0.1,0-0.1-0.1-0.1 C63.6,6.3,63.5,6.4,63.5,6.5z M63.5,43.9l0.1,0.1v-0.2C63.6,43.7,63.5,43.8,63.5,43.9z M63.7,20.5v0.1c0.2,0,0.5,0.1,0.9,0.3 c0.1,0,0.2,0.1,0.4,0.1h0.1V21C64.3,20.7,63.8,20.5,63.7,20.5z M63.7,25.7C63.8,25.7,63.8,25.7,63.7,25.7c0.1,0.1,0.4,0,0.8-0.1 v-0.1h-0.7C63.8,25.5,63.7,25.6,63.7,25.7z M63.7,47.6L63.7,47.6c0.2,0.1,0.4,0,0.4-0.1v-0.1C63.9,47.4,63.7,47.5,63.7,47.6z M63.8,45.5L63.8,45.5l0.1,0.1v-0.1H63.8z M63.9,19.4v0.1h0.2v-0.1C64.1,19.5,64,19.5,63.9,19.4z M63.9,36.4v0.1h0.1 C64.1,36.4,64,36.4,63.9,36.4z M63.9,43.4v0.1h0.1v-0.1H63.9z M64.1,6.3L64,6.5c0.1,0.1,0.2,0.1,0.3,0.1c0.1,0,0.2-0.1,0.2-0.1 C64.5,6.5,64.4,6.4,64.1,6.3z M64,15.5L64,15.5l0.5,0.2v-0.1c0-0.1-0.1-0.2-0.1-0.2c0,0,0.1,0,0.1-0.1l-0.1-0.1 C64.2,15.4,64.1,15.5,64,15.5z M64,24.5L64,24.5l0.1,0.1v-0.1H64z M64,45.8L64,45.8c0,0.1,0.1,0.1,0.2,0.1v-0.1H64z M64.1,7.9 c0,0.1,0.1,0.2,0.1,0.3h0.1l0.1-0.4h-0.1L64.1,7.9z M64.1,6.9L64.1,6.9L64.4,7l0.1-0.1h-0.1C64.3,6.9,64.2,6.9,64.1,6.9z M64.1,15 L64.1,15l0.2,0.1V15H64.1z M64.1,23.4L64.1,23.4l0.3,0.1l0.1-0.1H64.1z M64.1,28.3c0,0.1,0.1,0.1,0.2,0.2l0.1-0.1l-0.1-0.1H64.1z M64.1,31.5v0.1h0.1L64.1,31.5L64.1,31.5z M64.4,13.4L64.4,13.4l0.1,0.1v-0.1H64.4z M64.4,28.9L64.4,28.9l0.1,0.1v-0.1H64.4z M64.4,34L64.4,34l0.3,0.1V34H64.4z M64.5,4.4L64.5,4.4l0.1,0.1V4.4H64.5z M64.5,5.8h0.1c0.1,0,0.1,0,0.1-0.1h-0.1 C64.5,5.6,64.5,5.7,64.5,5.8z M64.6,23L64.6,23l0.1,0.1V23H64.6z M64.6,39.6L64.6,39.6l0.3,0.1v-0.1c0-0.1,0-0.1-0.1-0.1 C64.7,39.5,64.6,39.5,64.6,39.6z M64.7,7.2L64.7,7.2l0.4,0.1V7.2H64.7z M64.7,24.9L64.7,24.9c0.1,0.1,0.2,0.1,0.4,0.2 c0.2,0,0.4-0.1,0.5-0.1v-0.1c-0.2,0-0.4,0-0.6,0.1C64.9,24.9,64.8,24.9,64.7,24.9L64.7,24.9z M64.7,31.1v0.2h0.1 C64.8,31.3,64.8,31.2,64.7,31.1L64.7,31.1z M64.8,22.4L64.8,22.4l0.1,0.1v-0.1H64.8z M64.8,14.7L64.8,14.7l0.2,0.1v-0.1H64.8z M65.1,3.4v0.1c0.1,0,0.1,0,0.1-0.1H65.1z M65.2,22.4c0,0.1,0,0.2-0.1,0.3l0.4,0.1l0.1-0.4H65.2z M65.6,32.3c0,0.2-0.2,0.3-0.6,0.4 c0,0.1,0.1,0.2,0.1,0.4h0.7l-0.1-0.1l0.1-0.1l-0.1-0.1v-0.1l0.1-0.2l-0.2-0.1H65.6z M65.1,14.7L65.1,14.7l0.1,0.1 c0-0.1,0.1-0.1,0.2-0.1v-0.2h-0.1C65.3,14.6,65.2,14.7,65.1,14.7z M65.2,3.2c0,0.1,0.1,0.2,0.1,0.3c0.2-0.1,0.4-0.1,0.8-0.1h0.1 V3.1C65.7,3.1,65.4,3.2,65.2,3.2z M65.3,22.1L65.3,22.1l0.3,0.1v-0.1H65.3z M65.3,23.1v0.1h0.1v-0.1H65.3z M65.4,5.3L65.4,5.3 l0.2,0.1C65.9,5.3,66,5.2,66,5.1h-0.1C65.7,5.3,65.5,5.3,65.4,5.3z M65.7,5.8c0,0.2-0.1,0.4-0.3,0.4v0.1c0,0.1,0.1,0.1,0.1,0.1 c0.1-0.1,0.4-0.2,0.9-0.2V6.1C66.1,6.1,66,6,66,5.8H65.7z M65.4,15.1L65.4,15.1l0.1,0.1v-0.1H65.4z M65.5,21.8v0.1 c0,0,0.1,0,0.2,0.1l0.1-0.1l-0.1-0.1C65.6,21.8,65.5,21.8,65.5,21.8z M65.5,44v0.1h0.1c0.1,0,0.1,0,0.1-0.1H65.5z M65.5,15.4v0.1 c0.2,0,0.4,0,0.4,0.1c0,0-0.1,0-0.1,0.1H66c0,0,0-0.1-0.1-0.1l0.1-0.1c0-0.1-0.1-0.1-0.2-0.2C65.7,15.4,65.7,15.4,65.5,15.4z M65.6,14.2c0,0.1,0.1,0.1,0.1,0.1h0.1c0-0.1,0-0.1-0.1-0.1H65.6z M65.7,20.8L65.6,21h0.3v-0.1C65.9,20.9,65.8,20.9,65.7,20.8z M65.8,42.9c-0.1,0.2-0.1,0.3-0.1,0.4l0.1,0.1c0,0.1-0.1,0.2-0.1,0.3v0.1c0.1,0,0.2-0.1,0.3-0.4c0-0.1-0.1-0.2-0.1-0.2 c0-0.1,0.1-0.2,0.1-0.2L65.8,42.9z M65.7,28.4c0,0.1,0.1,0.1,0.1,0.1v-0.1H65.7z M65.7,33.8h0.2v-0.1h-0.1 C65.7,33.6,65.7,33.7,65.7,33.8z M65.8,24.7L65.8,24.7l0.1,0.1v-0.1H65.8z M65.8,21.9v0.1H66v-0.1H65.8z M65.8,37.5L65.8,37.5 l0.2,0.1v-0.1H65.8z M65.8,46.8L65.8,46.8c0,0.1,0.1,0.1,0.2,0.1v-0.1H65.8z M65.9,23.3L65.9,23.3l0.1,0.1v-0.1H65.9z M66,6.4 L66,6.4l0.2,0.1V6.4H66z M66,20.7c0,0,0,0.1-0.1,0.2h0.4v-0.1c0-0.1,0-0.1-0.1-0.1H66z M66,13.7L66,13.7l0.1,0.1v-0.1H66z M66.2,23.4c0,0,0,0.1-0.1,0.2h0.2C66.3,23.5,66.3,23.5,66.2,23.4L66.2,23.4z M66.2,25c0,0.1,0.1,0.1,0.1,0.1V25H66.2z M66.2,32.1 v0.1h0.1L66.2,32.1L66.2,32.1z M66.4,9.1L66.4,9.1l0.1,0.1V9.1H66.4z M66.4,14.1v0.3h0.1l0.1-0.1c0-0.1-0.1-0.2-0.1-0.2H66.4z M66.4,24.9V25h0.3c0-0.1,0-0.1-0.1-0.1H66.4z M66.4,30.2L66.4,30.2l0.3,0.1v-0.1H66.4z M66.5,5.2c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1 H66.5z M66.5,14.9V15h0.1L66.5,14.9L66.5,14.9z"
              },
              void 0,
              !1,
              {
                fileName: "app/ui/components/Preloader.tsx",
                lineNumber: 52,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV32(
              "path",
              {
                fill: "#fff",
                d: "M75,0.2c0.2,0,0.4,0.1,0.6,0.1h0.1c0.1,0,0.2,0,0.3-0.1c0.3,0,0.5,0.2,0.5,0.6v2.5h-0.1 c-0.4-0.3-0.7-0.5-0.8-0.5c0.1,0.3,0.3,0.6,0.8,0.9l0.1,0.1v1.7l-0.1,0.2c0.1,0,0.1,0.1,0.1,0.1v5.3h-0.4c-0.1,0-0.1,0.1-0.1,0.1 c0.4,0,0.6,0.1,0.6,0.2v5.7c0,0.4,0,0.7-0.1,1c0,0.2,0.1,0.5,0.1,0.9v3c0,0-0.3,0.2-0.8,0.6c0.1,0,0.3-0.1,0.7-0.2l0.1,0.1v3 l-0.4,0.3c0.2,0,0.4,0.1,0.4,0.2v7c0,0.1-0.1,0.1-0.2,0.1v0.1c0.1,0,0.2,0,0.2,0.1v0.6l0.1,0.5c-0.1,0-0.2,0.1-0.3,0.1v0.1 c0.2,0,0.3,0.1,0.3,0.2v1.1c0,0.4,0,1-0.1,1.9L76.4,38l-0.3-0.2h-0.2c-0.1,0.1-0.2,0.1-0.3,0.1V38c0.1,0,0.4,0.1,0.9,0.4h0.1v0.1 c0,0.1,0,0.1-0.1,0.1c0.1,0.2,0.1,0.4,0.1,0.6v1.8c0,0.1,0,0.1-0.1,0.1c-0.2-0.2-0.3-0.4-0.3-0.5h-0.1c0,0.1-0.1,0.2-0.3,0.2V41 c0.2,0,0.5,0.1,0.8,0.4v2.5c0,0.1-0.1,0.1-0.2,0.2h-0.1l-0.1-0.1c0,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.2-0.1-0.2-0.1l-0.1,0.1v0.1 c0.3,0,0.6,0.1,0.8,0.4c0.1,0,0.1,0,0.1,0.1c0,0.4,0,0.9-0.1,1.5c0,0.5,0.1,0.9,0.1,1.1c-0.1,0-0.1,0.1-0.2,0.3 c0.1,0,0.1,0.1,0.2,0.2v1c0,0.5-0.2,0.7-0.6,0.7h-0.1c-0.1,0-0.1-0.1-0.1-0.2h-0.1c0,0.1,0,0.2-0.1,0.2h-3.2 c-0.2,0-0.4-0.1-0.5-0.3v-4.6c0,0,0-0.1,0.1-0.1l-0.1-0.1v-6l-0.1-0.4c0-0.1,0.1-0.2,0.1-0.4v-1c0-0.1,0.1-0.1,0.1-0.1v0.1l0.1-0.1 h0.1l0.1,0.1l0.1-0.1c-0.4,0-0.6,0-0.6-0.1v-0.2c0-0.1,0.1-0.2,0.3-0.2c0-0.1,0-0.1-0.1-0.1c0,0,0,0.1-0.1,0.1 c-0.1-0.2-0.1-0.4-0.1-0.6v-0.1c0-0.2,0-0.5,0.1-0.6l-0.1-0.4c0-0.8,0.1-1.5,0.1-2.1v-0.4c0-0.1,0-0.2,0.1-0.2l-0.1-0.3 c0-0.7,0-2.2-0.1-4.4c0-0.9,0.1-1.5,0.1-1.8l-0.1-0.3c0-0.3,0.1-0.6,0.1-0.9v-0.8c0-0.4,0-0.9-0.1-1.4c0,0,0-0.1,0.1-0.2 c0-0.8-0.1-1.4-0.1-1.8v-4c0-0.4,0-0.9,0.1-1.4c0-0.1-0.1-0.5-0.1-1.1l0.1-0.2c-0.1,0-0.1,0-0.1-0.1v-0.4c0-0.3,0-0.4,0.1-0.5 c0-0.3-0.1-0.5-0.1-0.6V11c0-0.3,0-0.5,0.1-0.5l-0.1-0.8V4.4c0-0.2,0-0.4,0.1-0.6c0-0.2-0.1-0.4-0.1-0.6V1c0-0.4,0.1-0.6,0.4-0.7 h2.3C74.5,0.3,74.8,0.3,75,0.2z M72,22.1L72,22.1c0,0.2,0.1,0.2,0.1,0.2h0.3v-0.1L72,22.1L72,22.1z M72,39.7v0.1 c0,0.1,0.2,0.2,0.6,0.3v-0.1C72.4,39.8,72.2,39.7,72,39.7z M72.1,4.1L72.1,4.1l0.2,0.1V4.1H72.1z M72.1,9.8h0.1V9.6 C72.1,9.6,72.1,9.7,72.1,9.8z M72.1,7.8L72.1,7.8l0.1,0.3c-0.1,0-0.1,0.1-0.1,0.1l0.1,0.1c0.1,0,0.2-0.1,0.2-0.4L72.1,7.8z M72.4,11.8c-0.1,0-0.2-0.1-0.2-0.1v0.1l0.4,0.4v0.4h0.4c0-0.3,0.1-0.4,0.2-0.4l0.1,0.1c0.2-0.1,0.3-0.1,0.4-0.1v-0.2 c-0.2,0-0.3-0.1-0.6-0.2C73,11.7,72.8,11.7,72.4,11.8z M72.2,34.2v0.1c0,0.1,0.1,0.1,0.1,0.1h0.1c0.1,0,0.1,0,0.1-0.1v-0.1H72.2z M72.3,7.7L72.3,7.7c0,0,0.2,0,0.6,0V7.6l-0.5-0.1C72.3,7.5,72.3,7.6,72.3,7.7z M72.3,23.3c0,0.1,0.1,0.1,0.1,0.1v-0.1H72.3z M72.4,24.3v0.1h0.2v-0.1C72.5,24.4,72.4,24.4,72.4,24.3z M72.4,31.4L72.4,31.4l0.2,0.1v-0.1H72.4z M72.4,10.2l0.1,0.4 c0.1,0,0.2-0.1,0.2-0.4H72.4z M72.6,12.9l-0.1,0.2v0.1c0.3,0,0.4,0.1,0.4,0.2v0.1c0,0.1,0,0.1-0.1,0.1c0,0.1,0.2,0.2,0.4,0.4 c0,0,0-0.2,0.1-0.4c-0.1,0-0.1,0-0.1-0.1v-0.5c-0.1,0-0.1,0-0.1-0.1l-0.1,0.1C72.7,12.9,72.6,12.9,72.6,12.9z M72.6,22.3 c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.2-0.1,0.2-0.1c0-0.1,0-0.1-0.1-0.1C72.8,22.3,72.7,22.3,72.6,22.3z M73,40.2h-0.4v0.1l0.4,0.1 c0.1,0,0.1-0.1,0.2-0.2c0,0-0.1,0-0.1-0.1L73,40.2z M72.7,14.8L72.7,14.8c0.1,0.3,0.1,0.4,0.2,0.4l0.2-0.1c0.1,0,0.2,0.1,0.3,0.1 l0.1-0.1v-0.1h-0.1c0,0-0.2,0-0.4,0.1L72.7,14.8z M72.7,21.7L72.7,21.7l0.4,0.1v-0.1H72.7z M72.8,21.9c0,0.1,0.1,0.1,0.1,0.1H73 C73,21.9,72.9,21.9,72.8,21.9L72.8,21.9z M72.8,4.6c0,0.1,0.1,0.1,0.1,0.1V4.6H72.8z M73,21l-0.1,0.2c0.1,0.2,0.1,0.3,0.1,0.4h0.1 l0.1-0.4L73,21z M72.8,45.1v0.1h0.1L72.8,45.1L72.8,45.1z M73.1,14.1v0.2h0.1c0,0,0-0.1,0.1-0.2H73.1z M73.1,9.8L73.1,9.8l0.1,0.1 V9.8H73.1z M73.1,35.7c0.1,0.1,0.1,0.2,0.1,0.3h0.1c0.1,0,0.1-0.1,0.2-0.2v-0.1c0,0-0.1,0-0.2-0.1C73.2,35.7,73.2,35.7,73.1,35.7z M73.2,8.6c0.1,0,0.1,0,0.1,0.1c0.2-0.1,0.4-0.1,0.6-0.1V8.4h-0.6C73.2,8.4,73.2,8.5,73.2,8.6z M73.3,20.3v0.1h0.1L73.3,20.3 L73.3,20.3z M73.3,36.9v0.1h0.2v-0.1H73.3z M73.5,45.3c0.1,0.2,0.2,0.3,0.4,0.3v-0.1C73.9,45.4,73.7,45.4,73.5,45.3L73.5,45.3z M73.6,21.7L73.6,21.7l0.1,0.1v-0.1H73.6z M73.7,31.1L73.7,31.1l0.5,0.1v-0.1c-0.1,0-0.1,0-0.1-0.1C74,31.1,73.8,31.1,73.7,31.1z M73.8,35.9V36H74c0-0.1,0-0.1-0.1-0.1H73.8z M73.8,21.9c0,0.1,0.1,0.1,0.2,0.2v-0.2H73.8z M73.9,41.2L73.9,41.2 c0,0.1,0.1,0.2,0.3,0.3c0.1,0,0.2-0.1,0.5-0.1c0-0.1-0.2-0.2-0.4-0.2H73.9z M74,47.7L74,47.7l0.4,0.1v-0.1H74z M74.1,5.4v0.1 c0,0.1,0.1,0.1,0.1,0.1h0.1c0.1,0,0.1,0,0.1-0.1V5.5L74.1,5.4z M74.1,22.2L74.1,22.2c0,0.2,0.1,0.2,0.1,0.2v-0.1 C74.3,22.3,74.2,22.2,74.1,22.2z M74.2,38.3L74.2,38.3c0.1,0.1,0.2,0.1,0.4,0.2c0.1,0,0.1,0,0.1-0.1v-0.1H74.2z M74.3,16 c0,0.1,0.1,0.1,0.1,0.1h0.1C74.5,16,74.4,16,74.3,16L74.3,16z M74.3,35.6c0,0,0.1,0,0.2,0.1c0.2-0.1,0.3-0.1,0.3-0.2h-0.4 C74.4,35.4,74.3,35.5,74.3,35.6z M74.5,12.9l-0.1,0.1v0.1h0.2v-0.1C74.6,13,74.6,12.9,74.5,12.9z M74.4,19.6L74.4,19.6l0.1,0.1 v-0.1H74.4z M74.5,34.9c0,0.1,0.1,0.1,0.1,0.1h0.1c0.1,0,0.1,0,0.1-0.1v-0.1L74.5,34.9z M74.6,2.4c0,0.1,0.2,0.2,0.6,0.3 c0-0.1-0.1-0.2-0.3-0.3H74.6z M74.7,37.3L74.7,37.3c0,0.2,0.1,0.2,0.1,0.2h0.1c0-0.2,0.1-0.3,0.4-0.3v-0.1h-0.2L74.7,37.3z M74.7,45.8V46h0.2v-0.1H74.7z M74.7,13.1c0,0.1,0.1,0.1,0.1,0.1h0.2v-0.1H74.7z M75.2,38l0.1,0.1l-0.1,0.1l-0.4-0.1v0.1 c0,0,0.1,0,0.2,0.1c0.4-0.1,0.6-0.2,0.6-0.4h-0.1L75.2,38z M74.8,47.7L74.8,47.7c0,0.2,0.1,0.2,0.1,0.2H75v-0.1 C75,47.8,75,47.7,74.8,47.7L74.8,47.7z M74.9,25.5v0.1H75L74.9,25.5L74.9,25.5z M74.9,45.2v0.1c0.1,0,0.2,0,0.3,0.1l0.1-0.1 L74.9,45.2z M75,4.6v0.1c0,0,0.1,0,0.2,0.1l0.1-0.1l-0.1-0.1H75z M75,19.1L75,19.1l0.1,0.1v-0.1H75z M75,30.9 c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H75z M75,48.2v0.2h0.3L75.2,48h-0.1C75,48,75,48.1,75,48.2z M76,8.2c0,0-0.1,0-0.2-0.1 c-0.3,0-0.5,0.1-0.8,0.1v0.1c0.4,0.1,0.7,0.1,0.8,0.1c0.4,0,0.6-0.1,0.6-0.4h-0.2C76.1,7.9,76.1,8,76,8.2z M75,26.2L75,26.2 l0.2,0.1v-0.1H75z M75,37.6L75,37.6l0.1,0.1v-0.1H75z M75,40.7c0,0.1,0.2,0.2,0.6,0.3v-0.1c-0.1,0-0.2,0-0.4-0.1H75z M75,46.6 c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1v-0.1h-0.1C75.1,46.5,75,46.5,75,46.6z M75.1,47.3c0,0,0,0.1-0.1,0.2l0.1,0.1h0.1 c0.1,0,0.1,0,0.1-0.1s0-0.1-0.1-0.1H75.1z M75.1,5.1L75.1,5.1l0.3,0.1L75.3,5C75.2,5,75.1,5.1,75.1,5.1z M75.1,23.4L75.1,23.4 l0.2,0.1v-0.1H75.1z M75.2,34.7L75.2,34.7l0.1,0.1v-0.1H75.2z M75.3,9.7h0.2V9.6h-0.1C75.4,9.6,75.3,9.6,75.3,9.7z M75.3,39.9 L75.3,39.9c0,0.2,0.1,0.2,0.1,0.2h0.1v-0.3C75.4,39.9,75.4,39.9,75.3,39.9z M75.4,12.4v0.2c0.1,0,0.2-0.1,0.3-0.1v-0.1H75.4z M75.4,43.9v0.1h0.1C75.6,44,75.5,43.9,75.4,43.9z M75.5,47L75.5,47l0.2,0.1V47H75.5z M75.7,21.2v0.1c0.1,0.2,0.2,0.3,0.2,0.4 c-0.1,0-0.2,0.1-0.2,0.4l0.8-0.6v-0.1c-0.1,0-0.3-0.1-0.5-0.2H75.7z M75.7,34.7L75.7,34.7c0.1,0.1,0.2,0.1,0.3,0.2v-0.1 C75.9,34.8,75.8,34.8,75.7,34.7L75.7,34.7z M75.7,37.1L75.7,37.1c0,0.2,0.1,0.2,0.1,0.3h0.2c0.1,0,0.1,0,0.1-0.1 c-0.1,0-0.2,0-0.3-0.1H75.7z M75.7,39.3v0.1h0.2v-0.1H75.7z M75.7,25.2c0,0.1,0.1,0.2,0.1,0.2h0.4c0.1-0.1,0.2-0.1,0.3-0.1v-0.1 h-0.2l-0.3,0.1C75.8,25.2,75.8,25.2,75.7,25.2z M75.7,45c0,0.1,0.1,0.1,0.2,0.2h0.2C76.1,45.1,76,45,75.7,45z M75.8,12.6L75.8,12.6 l0.1,0.1v-0.1H75.8z M75.9,5.4L75.9,5.4L76,5.5V5.4H75.9z M75.9,43.5L75.9,43.5c0.1,0.2,0.2,0.3,0.2,0.4h0.1v-0.1h-0.1v-0.1 l0.1-0.1H75.9z M76,45.7c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.1-0.1H76z M76,48.9c0,0.2,0.1,0.2,0.3,0.3c0-0.1,0.1-0.1,0.2-0.2 c0-0.1-0.1-0.2-0.1-0.2h-0.1C76.1,48.7,76,48.8,76,48.9z M76,49.1v0.1h0.1L76,49.1L76,49.1z M76.1,20.9L76.1,20.9l0.2,0.1v-0.1 H76.1z M76.1,24.9L76.1,24.9l0.2,0.1v-0.1H76.1z M76.6,44.4l0.1,0.1v0.2h-0.1l-0.1-0.3L76.6,44.4z"
              },
              void 0,
              !1,
              {
                fileName: "app/ui/components/Preloader.tsx",
                lineNumber: 56,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV32(
              "path",
              {
                fill: "#fff",
                d: "M85.6,0.2c0.6,0,0.8,0.2,0.8,0.7c0,0.3,0.1,0.5,0.1,0.6c0,0.1-0.1,0.2-0.1,0.2 c0.1,0,0.2,0.3,0.3,1c0,0-0.1,0-0.1,0.1c0.2,0,0.3,0.5,0.4,1.5c0,0,0.1,0,0.1,0.1l-0.1,0.1c0-0.1-0.1-0.1-0.2-0.2h-0.1v0.1 c0.4,0.3,0.6,0.6,0.6,0.8c0.3,1.2,0.5,2.3,0.6,3.2c-0.2,0-0.3,0.2-0.4,0.6h0.1C87.4,9,87.5,9,87.6,9h0.1c0.1,0,0.2,0.2,0.2,0.4v0.3 l-0.3,0.4c0.3,0,0.5,0.2,0.5,0.5c0.2,1.6,0.4,2.8,0.6,3.6c-0.1,0-0.2,0.1-0.3,0.1v0.1c0.3,0,0.5,0.5,0.6,1.5l0.1,0.5 c-0.1,0-0.1,0.1-0.2,0.2c0.2,0.1,0.3,0.1,0.3,0.2c0,0.1-0.1,0.1-0.3,0.1c0.3,0,0.6,1.1,0.8,3.3c0.5,2.5,0.8,4.1,0.8,4.6l0.4,0.1 v-0.1l-0.1-0.2c0-0.1,0-0.2,0.1-0.3c-0.1,0-0.2-3.1-0.2-9.4h0.1c0.2,0.1,0.4,0.2,0.6,0.2c0-0.1,0.1-0.2,0.4-0.2v-0.1 c-0.2-0.4-0.4-0.6-0.4-0.7h-0.1c-0.1,0-0.1,0.1-0.2,0.2c0.2,0.2,0.3,0.3,0.3,0.4L91,14.8c-0.1-0.1-0.3-0.1-0.5-0.1v-1.8 c0-1.9,0-4-0.1-6h0.1V6.6h-0.1V6l0.2-0.3l-0.2-0.4V5.3h0.2V5.1h-0.1v0.1h-0.1V0.4c0-0.1,0.2-0.2,0.6-0.2c0,0,0.1,0,0.1,0.1l0.4-0.1 h1.4c0.3,0,0.6,0,0.9,0.1c0.2,0,0.4-0.1,0.8-0.1h0.1c0,0,0.1,0,0.1,0.1l0.1-0.1h0.1c0.2,0.1,0.4,0.3,0.4,0.7v7.5l0.1,0.8 c-0.4,0-0.6,0.1-0.6,0.3c0,0,0.1,0,0.1,0.1c0.2-0.1,0.3-0.1,0.4-0.1h0.1c0,0.4-0.1,0.6-0.1,0.6c0.1,0.2,0.1,0.7,0.1,1.3v5.8 l-0.1,0.1l-0.4-0.1h-0.1v0.1c0.3,0.1,0.5,0.2,0.5,0.3v1.1c0,0.3,0,0.6,0.1,1.1c0,0,0,0.1-0.1,0.1l0.1,0.5v20l-0.1,0.1 c-0.1,0-0.2-0.1-0.2-0.1c-0.1,0-0.2,0.1-0.2,0.1v-0.1l-0.1,0.1h-0.2c-0.1,0-0.1,0-0.1-0.1l0.1-0.1c-0.1,0-0.2-0.1-0.3-0.4 c0,0-0.1,0-0.1-0.1c-0.3,0.1-0.4,0.1-0.4,0.2v0.5h-0.1v0.1c0,0.1,0.1,0.1,0.1,0.1h0.5v-0.1h-0.2v-0.1c0.1,0,0.2,0,0.3-0.1 c0.3,0,0.5,0.1,0.5,0.1c0,0.1-0.1,0.2-0.1,0.2l0.2,0.1c0-0.1,0-0.2,0.1-0.2H95l0.1,0.1v-0.2h0.1v1.6c0,0.6,0,1.3,0.1,2.1 c0,0.3-0.1,0.5-0.3,0.5H95V45c0.2,0,0.3,0,0.3,0.1v0.1h-0.1l-0.4-0.1v0.1c0.1,0,0.3,0.1,0.6,0.4c0,0,0.1,0,0.1,0.1v2.5 c0,0,0,0.1-0.1,0.1c0,0.1,0.1,0.3,0.1,0.6c0,0.3-0.1,0.5-0.4,0.6h-4.2c-0.3,0-0.5-0.8-0.6-2.5c-0.1-0.2-0.5-2.1-1-5.5v-0.1l0.6,0.1 l-0.1-0.1v-0.1l0.1-0.1c-0.2,0-0.4-0.1-0.6-0.3v-0.1l0.4-0.1c0,0,0,0.1,0.1,0.1l0.1-0.1h-0.1l-0.4,0.1c-0.1,0-0.4-1.1-0.7-3.2 l-1.1-6c0-0.2,0-0.5-0.1-1c0.2-0.1,0.4-0.1,0.6-0.1v0.1h0.3c0-0.3,0.1-0.5,0.4-0.5v-0.1h-0.3v-0.1h0.1c0-0.1-0.2-0.2-0.7-0.3h-0.1 l-0.2,0.1h-0.1c-0.2,0-0.5-1.5-0.9-4.5h-0.1l-0.1,0.3c0,2.3,0,7.2,0.1,14.6h-0.1v0.2h0.1v1.8h-0.1v0.1c0,0.1,0.1,0.1,0.1,0.1 c0,2.4,0.1,4.1,0.1,5.3v1.8c0,0.1-0.2,0.2-0.5,0.3l-0.1-0.1c-0.2,0-0.3,0.1-0.3,0.1l-0.5-0.1h-0.8c-0.4,0-0.7,0-1,0.1 c-1,0-1.5-0.2-1.5-0.4v-4.6c0-0.1,0.1-0.1,0.3-0.1v-0.1c-0.2,0-0.3,0-0.3-0.1V43c0-0.2,0-0.6-0.1-1.1c0.1,0,0.1,0,0.1-0.1 c-0.1,0-0.1,0-0.1-0.1v-0.2l0.1-0.2c-0.1,0-0.1,0-0.1-0.1v-7c0-0.7,0-1.8-0.1-3.3h0.1l-0.1-0.1v-4.3h0.1c0,0.2,0.1,0.5,0.4,0.8v0.1 h0.1v-0.4c-0.1-0.3-0.3-0.5-0.4-0.5c-0.2-0.2-0.3-0.6-0.3-1.1v-3.1c0-0.3,0.1-0.4,0.4-0.6c0-0.2,0-0.3,0.1-0.4 c-0.1,0-0.1-0.1-0.2-0.3c0-0.2,0.3-0.5,0.7-0.8h-0.3v0.2h-0.1c0,0-0.1,0-0.1-0.1c-0.1,0-0.3,0.1-0.6,0.4h-0.1v-1H82v-0.1L82,19.5 c0.3,0,0.4-0.1,0.4-0.2c-0.1,0-0.1,0-0.1-0.1h-0.1v0.1H82c-0.1,0-0.2-0.1-0.4-0.4v-0.1l0.1-0.1c-0.1,0-0.1,0-0.1-0.1v-0.7l0.1-0.2 c-0.1,0-0.1,0-0.1-0.1v-0.8c0,0,0-0.1,0.1-0.1c0,0,0-0.1-0.1-0.1c0-1.6-0.1-2.8-0.1-3.5V4.3h0.1C81.8,4.4,82,4.5,82,4.7h0.2V4.6 c0-0.1-0.1-0.2-0.1-0.2c0.1,0,0.2-0.1,0.2-0.1V4.2c-0.3,0-0.4,0-0.4-0.1l-0.1,0.1c-0.1,0-0.2-0.1-0.3-0.1l0.1-0.2 c-0.1,0-0.1,0-0.1-0.1V2.2c0-0.1,0.1-0.1,0.2-0.1V2c-0.1,0-0.2,0-0.2-0.1V0.6c0-0.1,0.1-0.1,0.2-0.2h0.8l0.1,0.1 c0-0.1,0.1-0.1,0.1-0.1L83,0.4l0.2-0.1h2.1C85.4,0.3,85.5,0.3,85.6,0.2z M81.5,11c0,0.1,0.1,0.2,0.4,0.2v-0.1c0-0.1,0-0.1-0.1-0.1 H81.5z M81.5,14.3L81.5,14.3l0.2,0.1c0.4,0,0.6-0.1,0.6-0.2L82,14.1C81.8,14.2,81.6,14.3,81.5,14.3z M82.7,15.4 c-0.1,0.2-0.1,0.3-0.1,0.4c0.1,0.2,0.3,0.3,0.5,0.3v0.2c0,0.1,0,0.1-0.1,0.1c-0.1,0-0.2-0.1-0.2-0.4l-1,0.2v0.4 c0.2,0,0.3,0.1,0.5,0.2c0-0.1,0.2-0.2,0.4-0.2h0.1l0.4,0.1c0.2,0,0.4-0.2,0.4-0.6C83.3,16,83.1,16,83,16v-0.1l0.1-0.2 C83,15.7,82.9,15.6,82.7,15.4z M81.8,17.4v0.2c0.2,0,0.4,0,0.4,0.1c0.1,0,0.2-0.1,0.3-0.1v-0.1l-0.1,0.1L81.8,17.4z M81.8,30.7 L81.8,30.7c0.2,0.3,0.3,0.4,0.3,0.5h0.6c0,0,0-0.1,0.1-0.2c-0.1,0-0.3-0.1-0.8-0.3H81.8z M81.8,38.1L81.8,38.1 c0,0.2,0.1,0.2,0.1,0.2h0.2c0-0.1-0.1-0.1-0.2-0.2H81.8z M81.9,32.3H82v-0.1C81.9,32.2,81.9,32.3,81.9,32.3z M81.9,39l0.1,0.1v-0.2 C81.9,38.9,81.9,38.9,81.9,39z M81.9,44.9L81.9,44.9l0.1,0.1v-0.1H81.9z M82.1,10.8c0,0.1,0,0.2-0.1,0.3c0.3,0,0.4,0.1,0.6,0.1 c0.1,0,0.2-0.1,0.2-0.1c0-0.1-0.1-0.2-0.3-0.3H82.1z M82,9.2L82,9.2l0.4,0.1V9.2H82z M82,16.3h0.4c0,0.1,0,0.1-0.1,0.1h-0.1 C82.1,16.5,82,16.4,82,16.3z M82.2,10.5L82.2,10.5c0.1,0.1,0.2,0.1,0.4,0.2v-0.1l-0.2-0.1H82.2z M82.4,18.5c0,0.1,0,0.2-0.1,0.3 l0.6,0.5H83v-0.2h-0.3l0.2-0.3c-0.2,0-0.3-0.1-0.4-0.4C82.4,18.4,82.4,18.4,82.4,18.5z M82.3,12.7v0.1h0.1L82.3,12.7L82.3,12.7z M82.3,14.8V15h0.2C82.5,14.9,82.5,14.8,82.3,14.8L82.3,14.8z M82.3,21.6L82.3,21.6l0.2,0.1v-0.1H82.3z M82.4,5.1v0.1h0.3 c0-0.1,0-0.1-0.1-0.1H82.4z M82.4,31.9V32h0.1c0.1,0,0.1,0,0.1-0.1H82.4z M82.4,46.3L82.4,46.3l0.1,0.1v-0.1H82.4z M82.4,46.6h0.4 v-0.1c0-0.1,0-0.1-0.1-0.1C82.5,46.4,82.5,46.5,82.4,46.6z M82.5,29.9V30h0.1v-0.1H82.5z M82.5,47.3v0.2h0.1c0-0.1,0.1-0.2,0.2-0.3 h-0.1C82.6,47.2,82.5,47.3,82.5,47.3z M82.5,2c0,0.1,0.1,0.1,0.2,0.2c0.1,0,0.1,0,0.1-0.1L82.7,2H82.5z M82.5,28L82.5,28l0.2,0.1 V28H82.5z M82.5,30.1v0.1c0.1,0,0.2,0.1,0.4,0.3c0.1-0.1,0.2-0.1,0.3-0.1c0.1,0,0.2,0.1,0.2,0.1v-0.1c0-0.1-0.1-0.1-0.4-0.2 L82.9,30C82.8,30.1,82.7,30.1,82.5,30.1z M82.5,39.4v0.2c0.1,0,0.2,0,0.2,0.1c0.1,0,0.1,0,0.1-0.1c0,0-0.1,0-0.1-0.1 c0,0,0.1,0,0.1-0.1L82.5,39.4z M82.7,12.7c0,0.1,0,0.1-0.1,0.1c0,0.1,0.1,0.2,0.1,0.2h0.1L82.7,12.7L82.7,12.7z M82.6,13.1v0.1h0.2 C82.8,13.2,82.8,13.1,82.6,13.1L82.6,13.1z M82.7,41.8V42h0.1L82.7,41.8L82.7,41.8z M82.7,12c0,0.1,0.1,0.1,0.1,0.1V12H82.7z M82.7,18L82.7,18l0.2,0.1V18H82.7z M82.7,32.1v0.1c0,0.1,0.1,0.2,0.1,0.2h0.5v-0.1C83.2,32.3,83,32.2,82.7,32.1z M82.8,9.7L83,9.8 h0.4V9.6H83C82.9,9.6,82.8,9.6,82.8,9.7z M82.8,12.4v0.1H83v-0.1H82.8z M82.8,13.8L82.8,13.8l0.1,0.1v-0.1H82.8z M82.9,38 c0,0.2,0,0.3-0.1,0.4l0.1,0.1h0.2C83.2,38.2,83.1,38.1,82.9,38z M82.8,39.9L82.8,39.9l0.1,0.2c0,0.1-0.1,0.2-0.1,0.3 c0.3,0.1,0.5,0.2,0.6,0.2c-0.1-0.2-0.2-0.4-0.4-0.4v-0.1h0.1V40c0-0.1,0-0.1-0.1-0.1H82.8z M83.4,9.8c0,0.1,0.1,0.2,0.1,0.2 c-0.1,0.3-0.3,0.4-0.6,0.4v0.1c0.1,0,0.3,0.1,0.4,0.2h0.1c0-0.2,0.2-0.4,0.6-0.4v-0.1c-0.2,0-0.3-0.1-0.4-0.3l0.1-0.4V9.6 C83.6,9.6,83.5,9.7,83.4,9.8z M82.9,29.1l0.1,0.1c0,0.1-0.1,0.2-0.1,0.2c0.1,0,0.2,0.2,0.3,0.6c0.3,0,0.4-0.1,0.5-0.4 c-0.1,0-0.2,0-0.2-0.1c0.1,0,0.1-0.1,0.2-0.2C83.5,29.1,83.3,29,83,29C82.9,29,82.9,29,82.9,29.1z M82.9,37.1L82.9,37.1l0.2,0.1 v-0.1H82.9z M83.4,15.2h-0.2c0,0.1-0.1,0.2-0.1,0.3c0.1,0,0.1,0.1,0.1,0.4h0.2c0-0.1,0-0.2,0.1-0.4c0.2,0,0.5,0.1,0.7,0.4V16 l-0.2-0.1H84c0,0-0.1,0.1-0.3,0.3c0,0.4,0.2,0.7,0.4,1c-0.1,0-0.1,0.1-0.2,0.3c-0.2-0.1-0.3-0.1-0.4-0.1v0.2h0.1v0.1 c-0.3-0.1-0.4-0.1-0.6-0.2H83v0.1c0.2,0.5,0.6,0.8,1.1,0.8l0.1-0.1c0,0-0.1,0-0.1-0.1l-0.1,0.1c-0.1,0-0.1,0-0.1-0.1 c0.1-0.3,0.3-0.4,0.6-0.4v-0.1c0,0-0.1,0-0.2-0.1l0.1-0.1l-0.1-0.1c0.1-0.2,0.1-0.4,0.2-0.4h0.2l0.2,0.1v-0.1l-0.1-0.1 c0.2-0.1,0.3-0.1,0.4-0.1c0,0,0,0.1,0.1,0.1v-0.1c0-0.1-0.1-0.1-0.2-0.2l-0.5,0.1v-0.2c0-0.1,0.1-0.1,0.3-0.2l-0.1-0.1 c0-0.1,0.1-0.2,0.1-0.2c0,0-0.1,0-0.1-0.1c0.1,0,0.1,0,0.1-0.1c-0.2,0-0.3-0.1-0.3-0.3h-0.4l-0.3,0.2h-0.1c0-0.2,0-0.3-0.1-0.4 L83.4,15.2z M83,44.4c0.1,0,0.1,0.1,0.1,0.1c0.1,0,0.2-0.1,0.2-0.1c0-0.1-0.1-0.1-0.2-0.2C83,44.2,83,44.3,83,44.4z M83,9.3L83,9.3 l0.1,0.1V9.3H83z M83,11.3L83,11.3l0.1,0.1v-0.1H83z M83,12.2L83,12.2l0.2,0.1v-0.1H83z M83,20.3v0.1h0.1L83,20.3L83,20.3z M83,28.8L83,28.8l0.2,0.1v-0.1H83z M83.1,11.9V12h0.4v-0.1H83.1z M83.1,31.4c0.4,0.3,0.8,0.4,1.3,0.4c0.2-0.1,0.4-0.1,0.6-0.1 v-0.1c-0.4,0-0.6,0-0.6-0.1l-0.1,0.1c-0.3-0.1-0.5-0.2-0.7-0.3C83.4,31.3,83.3,31.4,83.1,31.4z M83.1,34.7c0,0.1,0.1,0.1,0.2,0.1 h0.1v-0.1L83.1,34.7z M83.2,5L83.2,5c0.2,0.1,0.3,0.2,0.3,0.4h0.3l0.1-0.1c0-0.2-0.2-0.4-0.4-0.4H83.2z M83.2,37.6L83.2,37.6 l0.1,0.1v-0.1H83.2z M83.2,8.3h0.1V8.2C83.3,8.2,83.2,8.2,83.2,8.3z M83.2,12.8v0.1h0.1L83.2,12.8L83.2,12.8z M83.2,36.8L83.2,36.8 l0.2,0.1v-0.1H83.2z M83.3,9.1v0.1h0.1C83.4,9.2,83.4,9.1,83.3,9.1z M83.3,35.1l0.1,0.1h0.1v-0.1c0-0.1,0-0.1-0.1-0.1 C83.3,35,83.3,35,83.3,35.1z M83.4,21.4c0,0.1,0.2,0.2,0.6,0.4l0.1-0.1v-0.1h-0.2v-0.1h0.4v-0.1c-0.1-0.1-0.1-0.2-0.1-0.3 C84,21.1,83.8,21.2,83.4,21.4z M83.4,35.6L83.4,35.6l0.1,0.1v-0.1H83.4z M83.4,1.2c0,0.1,0.1,0.2,0.4,0.4V1.3c0-0.1,0-0.1-0.1-0.1 H83.4z M83.4,12.4L83.4,12.4c0,0.1,0,0.1,0.1,0.1l-0.1,0.1c0,0.1,0.1,0.1,0.2,0.2h0.1c0.1,0,0.1,0,0.1-0.1L83.4,12.4L83.4,12.4z M83.5,27.8L83.5,27.8l0.2,0.1v-0.1H83.5z M83.5,44.5l0.1,0.1l-0.1,0.1l0.1,0.1c0.1-0.1,0.1-0.2,0.1-0.4h0.1l0.3,0.2v-0.2 c-0.2-0.2-0.4-0.3-0.4-0.4C83.8,44.1,83.7,44.2,83.5,44.5z M83.6,18.6v0.1h0.2v-0.1C83.7,18.7,83.7,18.7,83.6,18.6z M83.6,33v0.2 l0.4,0.1h0.1v-0.1C83.8,33.1,83.6,33,83.6,33z M83.6,45.3v0.1h0.2v-0.1C83.7,45.4,83.7,45.3,83.6,45.3z M83.7,14.3L83.7,14.3 l0.2,0.1v-0.1H83.7z M83.7,31.1v0.1h0.2v-0.1C83.8,31.2,83.7,31.2,83.7,31.1z M83.7,41.8L83.7,41.8c0,0.2,0.1,0.2,0.1,0.2H84v-0.2 H83.7z M83.9,6.9c0,0,0,0.1-0.1,0.2c0.1,0,0.2,0.1,0.4,0.4h0.4V7.3c-0.3,0-0.5-0.1-0.6-0.4H83.9z M83.8,8.4L83.8,8.4L84,8.4V8.2 h-0.1C83.8,8.2,83.8,8.3,83.8,8.4z M83.8,36.2L83.8,36.2l0.2,0.1v-0.1H83.8z M83.9,43.4c0,0.1,0,0.2-0.1,0.3h0.1 c0.1,0,0.1,0,0.1-0.1S84,43.4,83.9,43.4z M83.9,28.4L83.9,28.4c0,0.1,0.1,0.2,0.2,0.3l0.1-0.2v-0.1C84.1,28.4,84,28.4,83.9,28.4z M83.9,42.9V43H84L83.9,42.9L83.9,42.9z M84,11.1v0.1h0.2v-0.1H84z M84,35.8L84,35.8l0.2,0.1v-0.1H84z M84,36.4v0.1h0.2v-0.1 C84.2,36.5,84.1,36.5,84,36.4z M84.1,19L84.1,19l0.1,0.1V19H84.1z M84.1,23L84.1,23l0.3,0.1V23H84.1z M84.1,28.8L84.1,28.8l0.1,0.1 v-0.1H84.1z M84.8,12.5c0,0.3-0.1,0.5-0.2,0.5l0.1,0.3l-0.1,0.1v0.2c-0.2,0-0.2,0.3-0.3,1c0,0.1,0.1,0.2,0.1,0.2 c-0.1,0-0.2,0.1-0.3,0.1c0,0.1,0.1,0.1,0.1,0.1h0.3c0-0.2,0.1-0.3,0.2-0.3v-0.1c-0.1-0.2-0.2-0.3-0.2-0.4c0-0.2,0.2-0.3,0.5-0.3V14 h-0.2v-0.1c0.1-0.5,0.2-0.8,0.3-0.8c0-0.4-0.1-0.6-0.2-0.6H84.8z M84.1,38.3v0.1h0.1C84.3,38.4,84.2,38.3,84.1,38.3z M84.1,43.9 v0.1c0,0.1,0.1,0.1,0.2,0.2c0.1,0,0.1,0,0.1-0.1L84.1,43.9L84.1,43.9z M84.2,6.7v0.1h0.1C84.4,6.7,84.3,6.7,84.2,6.7z M84.2,7 L84.2,7L84.4,7V7H84.2z M84.3,19.2v0.1l0.1,0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1c0-0.1,0-0.1-0.1-0.1H84.3z M84.4,8.1v0.1h0.1V8.1H84.4z M84.6,35.6c0,0.1,0,0.2-0.1,0.3h0.1c0.3,0,0.4-0.1,0.4-0.2v-0.1H84.6z M84.4,36.3v0.1c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1 C84.6,36.3,84.6,36.3,84.4,36.3L84.4,36.3z M84.5,10.3v0.2h0.2v-0.1C84.7,10.4,84.7,10.3,84.5,10.3L84.5,10.3z M84.5,21.1 L84.5,21.1c0,0.2,0.1,0.2,0.1,0.2l0.1-0.1v-0.1H84.5z M84.6,6.4v0.1h0.1V6.4H84.6z M84.6,28.1L84.6,28.1l0.1,0.1v-0.1H84.6z M84.8,2.7L84.8,2.7L84.8,2.7c0.2,0,0.2,0,0.3,0V2.7H85C84.9,2.7,84.8,2.7,84.8,2.7z M84.8,11.4l-0.1,0.4v0.1h0.1 c0.1,0,0.1,0,0.1-0.1v-0.1C85.1,11.4,85,11.4,84.8,11.4L84.8,11.4z M84.8,12.2c0,0.1,0.1,0.1,0.1,0.1H85 C85,12.2,84.9,12.2,84.8,12.2L84.8,12.2z M84.8,19.6v0.1c0,0.1,0.1,0.2,0.3,0.3h0.1c0.1,0,0.1,0,0.1-0.1v-0.1 C85.2,19.8,85,19.8,84.8,19.6L84.8,19.6z M84.9,7.7l-0.1,0.1L85,7.9h0.1c0.1,0,0.1,0,0.1-0.1L84.9,7.7z M84.8,28.5L84.8,28.5 l0.1,0.1v-0.1H84.8z M84.8,36c0,0.1,0.1,0.1,0.1,0.1V36H84.8z M84.9,37.8l-0.1,0.1V38h0.2v-0.1C85.1,37.8,85,37.8,84.9,37.8z M84.8,38.1v0.3h0.2c0.2-0.1,0.4-0.2,0.4-0.3h-0.1H84.8C84.9,38.1,84.9,38.1,84.8,38.1z M84.9,39.3l-0.1,0.3c0.1,0,0.2-0.1,0.3-0.1 v-0.1C85.1,39.4,85.1,39.3,84.9,39.3L84.9,39.3z M84.8,43.2v0.1H85C85,43.3,84.9,43.2,84.8,43.2z M84.8,44.9v0.1h0.2v-0.1H84.8z M84.9,16.7c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.2-0.1,0.3-0.1v-0.1H84.9z M84.9,27.8V28H85L84.9,27.8L84.9,27.8z M84.9,48.1L84.9,48.1 l0.2,0.1v-0.1H84.9z M85.2,41.1C85.1,41,85,41,85,41c0.1,0.2,0.2,0.3,0.3,0.4l0.3-0.2c0-0.1-0.1-0.2-0.1-0.2 C85.4,41,85.3,41.1,85.2,41.1z M85.1,17L85.1,17l0.1,0.1V17H85.1z M85.1,21.5v0.1h0.1L85.1,21.5L85.1,21.5z M85.2,41.4l-0.1,0.1 v0.1l0.4,0.1h0.2v-0.1C85.5,41.6,85.3,41.5,85.2,41.4z M85.3,21.9v0.1h0.1L85.3,21.9L85.3,21.9z M85.3,39.3L85.3,39.3l0.2,0.1v-0.1 H85.3z M85.3,0.8V1h0.3c0-0.1,0-0.1-0.1-0.1H85.3z M85.3,6.9L85.3,6.9L85.5,7V6.9H85.3z M85.3,9.2L85.3,9.2l0.1,0.1V9.2H85.3z M85.4,10.8l0.1,0.1h0.1c0,0,0-0.1,0.1-0.2h-0.1C85.5,10.7,85.4,10.7,85.4,10.8z M85.4,14.3L85.4,14.3c0,0.2,0.1,0.2,0.1,0.3h0.1 v-0.1C85.5,14.4,85.5,14.3,85.4,14.3L85.4,14.3z M85.4,16.8L85.4,16.8l0.1,0.1v-0.1H85.4z M85.4,22.5L85.4,22.5l0.1,0.1v-0.1H85.4z M85.5,2.6L85.5,2.6L85.5,2.6C85.9,2.5,86,2.4,86,2.4V2.3h-0.1C85.6,2.4,85.5,2.5,85.5,2.6z M85.5,7.8v0.1h0.2 C85.7,7.9,85.6,7.8,85.5,7.8L85.5,7.8z M85.5,16.5c0,0.1,0.1,0.1,0.1,0.1h0.1C85.7,16.6,85.6,16.5,85.5,16.5L85.5,16.5z M85.5,20.1 L85.5,20.1c0,0.1,0,0.1,0.1,0.1l-0.1,0.1v0.1h0.1c0-0.1,0.1-0.2,0.4-0.2c0-0.2,0.1-0.3,0.4-0.3v-0.1c0-0.1,0-0.1-0.1-0.1H86 C85.7,20,85.6,20.1,85.5,20.1z M85.6,38L85.6,38l0.2,0.1V38H85.6z M85.6,40.6L85.6,40.6l0.1,0.1v-0.1H85.6z M85.6,15.3L85.6,15.3 c0,0.2,0.1,0.2,0.1,0.2v-0.1C85.8,15.4,85.7,15.3,85.6,15.3z M85.7,29.3l-0.1,0.1c0.1,0,0.2,0,0.3,0.1v-0.1 C85.9,29.5,85.8,29.4,85.7,29.3z M85.7,21.4L85.7,21.4c0,0.2,0.1,0.2,0.1,0.2h0.1c0.1,0,0.1,0,0.1-0.1l-0.1-0.1H85.7z M85.8,24.7 c0,0.1,0,0.2-0.1,0.4v0.1h0.1c0.1,0,0.2-0.1,0.3-0.4L86,24.7H85.8z M85.8,16.5v0.1h0.8v-0.1c-0.3-0.1-0.5-0.2-0.6-0.2H86 C85.9,16.3,85.8,16.4,85.8,16.5z M85.8,23.4v0.2H86C85.9,23.5,85.9,23.5,85.8,23.4L85.8,23.4z M85.9,41.7c0,0.1,0.1,0.1,0.1,0.1 v-0.1H85.9z M86,5.4h0.1V5.3C86,5.3,86,5.3,86,5.4z M86,11.1L86,11.3l0.1,0.1h0.1c0.1,0,0.1,0,0.1-0.1C86.2,11.2,86.1,11.2,86,11.1 z M86,45.4h0.1v-0.1C86,45.2,86,45.3,86,45.4z M86,45.4L86,45.6l0.1,0.1l0.1-0.1L86,45.4z M86,23.7L86,23.7l0.1,0.1v-0.1H86z M86.1,13c0,0.1,0.1,0.2,0.1,0.2h0.1c0.1,0,0.1,0,0.1-0.1L86.1,13z M86.3,45.8L86.3,45.8l0.1,0.1v-0.1H86.3z M86.3,47.5v0.1 c0.1,0,0.1,0,0.1-0.1H86.3z M86.4,3.7c0,0,0,0.1-0.1,0.2h0.1c0.1,0,0.1,0,0.1-0.1C86.6,3.7,86.5,3.7,86.4,3.7z M86.4,5v0.2h0.1 c0.1,0,0.1,0,0.1-0.1V5H86.4z M86.4,18.7v0.1l0.2,0.3c0.3,0,0.5-0.1,0.8-0.1l-0.1-0.1l0.1-0.1h-0.3c0,0-0.1,0-0.1,0.1l-0.1-0.1 l-0.4,0.1v-0.1H86.4z M86.4,23.8V24h0.1L86.4,23.8L86.4,23.8z M86.4,24.2L86.4,24.2c0,0.2,0.1,0.2,0.1,0.2h0.1 C86.6,24.3,86.5,24.3,86.4,24.2z M86.5,19.4L86.5,19.4h0.4c0.2,0.1,0.3,0.1,0.4,0.1c0-0.1-0.1-0.2-0.4-0.4 C86.6,19.2,86.5,19.3,86.5,19.4z M86.5,19.8L86.5,19.8c0.1,0.1,0.1,0.1,0.1,0.2h0.3v-0.1C86.8,19.9,86.7,19.9,86.5,19.8L86.5,19.8z M86.6,8.7L86.6,8.7l0.1,0.1V8.7H86.6z M86.6,17v0.2c0.2,0,0.3,0,0.4,0.1h0.5c0,0.1,0,0.2,0.1,0.3c-0.1,0-0.2,0.1-0.3,0.4 c0.4,0,0.7,0,0.8,0.1l0.1-0.1v-0.1c-0.1,0-0.2-0.1-0.3-0.4L86.8,17H86.6z M86.8,16.3v0.1c0.1,0,0.2,0.1,0.3,0.3l0.1-0.1 c0.1,0,0.2,0.1,0.3,0.1v-0.1c0-0.1-0.2-0.2-0.5-0.4H86.8z M86.8,20L86.8,20l0.3,0.1c0-0.1,0.1-0.1,0.2-0.1V20h-0.1L86.8,20z M86.9,21.9v0.1H87v-0.1H86.9z M86.9,27.8L86.9,27.8c0.1,0.3,0.2,0.4,0.3,0.4c0.2-0.1,0.4-0.3,0.4-0.4h0.1c0,0.1,0.1,0.2,0.4,0.2 h0.2c0.1,0,0.1,0,0.1-0.1c-0.1,0-0.2-0.1-0.3-0.4c-0.1,0-0.1,0-0.1-0.1C87.6,27.4,87.3,27.5,86.9,27.8z M87,18.6v0.1H87L87,18.6 L87,18.6z M87.1,7.7v0.1h0.2V7.7C87.3,7.7,87.2,7.7,87.1,7.7z M87.1,19.6v0.1h0.1L87.1,19.6L87.1,19.6z M87.2,18.3L87.2,18.3 l0.1,0.1v-0.1H87.2z M87.2,12.5c0,0.1,0.1,0.1,0.1,0.1h0.2v-0.1L87.2,12.5z M87.2,15.8L87.2,15.8l0.2,0.1v-0.1H87.2z M87.9,29.7 c0,0,0,0.1,0.1,0.2c-0.3,0.2-0.5,0.4-0.6,0.4l-0.1-0.1v-0.1c0.3,0,0.4-0.1,0.4-0.4H87.9z M87.5,26.1l-0.1,0.4c0,0,0.1,0.2,0.3,0.4 l-0.1,0.3c0,0.1,0.1,0.2,0.1,0.2h0.6l-0.1-0.1c0.1,0,0.2-0.1,0.3-0.1v-0.4c-0.1,0-0.2,0-0.2-0.1v-0.1h0.2v-0.1 c0-0.1-0.1-0.2-0.4-0.2l-0.1,0.1L87.5,26.1z M87.4,28.8L87.4,28.8l0.1,0.1v-0.1H87.4z M87.5,29.2L87.5,29.2c0,0.2,0.1,0.2,0.1,0.2 h0.3v-0.1c0-0.1,0-0.1-0.1-0.1H87.5z M87.7,20.9c0,0.1,0.1,0.1,0.1,0.1v-0.1H87.7z M87.8,16.1L87.8,16.1l0.2,0.1v-0.1H87.8z M87.9,11.5L87.9,11.5l0.2,0.1v-0.1H87.9z M87.9,12h0.1v-0.1C88,11.8,87.9,11.9,87.9,12z M88,17.2c0,0.1,0.1,0.1,0.1,0.1h0.1 c0.1,0,0.1,0,0.1-0.1v-0.1h-0.1L88,17.2z M88.4,30.5c0,0.2-0.1,0.3-0.3,0.3v0.1h0.1c0.3,0,0.4-0.1,0.6-0.1v-0.1 C88.7,30.7,88.6,30.6,88.4,30.5z M88.2,31.1l0.4,0.2v-0.2c0-0.1,0-0.1-0.1-0.1h-0.1C88.2,31,88.2,31.1,88.2,31.1z M88.2,28.3 L88.2,28.3l0.1,0.1v-0.1H88.2z M88.4,17.5L88.4,17.5c0.1,0.1,0.2,0.1,0.2,0.3h0.3v-0.1c-0.2,0-0.3-0.1-0.3-0.2H88.4z M88.4,35.4 l-0.1,0.1l0.1,0.1h0.1v-0.1C88.6,35.4,88.5,35.4,88.4,35.4z M88.4,28.2v0.1h0.2v-0.1H88.4z M88.5,17.2L88.5,17.2l0.4,0.1V17h-0.2 C88.6,17,88.5,17.1,88.5,17.2z M88.6,26.1l-0.1,0.3h0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1C88.8,26.1,88.7,26.1,88.6,26.1z M88.5,28.5 c0,0.1,0.1,0.1,0.2,0.1h0.1v-0.1L88.5,28.5z M88.6,26.6c0.1,0,0.2,0.1,0.3,0.3c0,0.1-0.1,0.2-0.1,0.2c0,0,0.1,0,0.1,0.1 c0.1,0,0.2-0.1,0.3-0.3c0-0.1-0.1-0.2-0.1-0.2c0.1,0,0.2-0.1,0.4-0.2c0-0.1-0.1-0.2-0.1-0.2C88.8,26.3,88.6,26.5,88.6,26.6z M88.6,18L88.6,18l0.2,0.1V18H88.6z M88.6,27.4c0.1,0.1,0.1,0.2,0.1,0.4l0.3-0.1c0-0.1-0.1-0.2-0.1-0.3L88.6,27.4z M88.6,27.7v0.2 c0.1,0,0.1,0,0.1-0.1L88.6,27.7z M88.6,29.8L88.6,29.8l0.1,0.1v-0.1H88.6z M88.7,16.2c0,0.1,0.1,0.1,0.1,0.1v-0.1H88.7z M89,31.1 l-0.1,0.1l0.4,0.1h0.3v-0.1c-0.1,0-0.2,0-0.3-0.1C89.2,31.2,89.1,31.2,89,31.1C89.1,31.2,89,31.1,89,31.1z M88.9,35.6 c0,0.1,0.1,0.1,0.1,0.1v-0.1H88.9z M89,31L89,31l0.1,0.1V31H89z M89.1,29.8v0.3h0.1v-0.3H89.1z M89.5,41.7c0.2,0.2,0.3,0.4,0.3,0.5 H90c0.1,0,0.1,0,0.1-0.1L89.5,41.7L89.5,41.7z M89.6,27.4v0.1h0.2C89.8,27.5,89.8,27.4,89.6,27.4L89.6,27.4z M89.7,32.8 c0,0.1,0.1,0.1,0.1,0.1h0.2v-0.1H89.7z M89.8,27L89.8,27l0.3,0.1V27H89.8z M89.9,27.8L89.9,27.8l0.2,0.1v-0.1H89.9z M89.9,30.5 l0.1,0.1c0.1,0,0.2-0.1,0.4-0.1v-0.1H89.9z M90.1,40.9v0.1h0.1L90.1,40.9L90.1,40.9z M90.2,29l0.1,0.1l0.1-0.1l0.1,0.1V29H90.2z M90.3,25c0,0.1,0.2,0.2,0.4,0.2c0,0,0-0.1,0.1-0.2H90.3z M90.5,6.3L90.5,6.3l0.2,0.1V6.3H90.5z M90.5,38.3L90.5,38.3l0.1,0.1v-0.1 H90.5z M90.6,15.8L90.6,15.8l0.3,0.1v-0.2C90.8,15.8,90.7,15.8,90.6,15.8z M90.7,25.5l-0.1,0.1l0.1,0.1c0.1,0,0.2-0.1,0.4-0.1 C91,25.7,90.9,25.6,90.7,25.5z M91.1,26h-0.3l-0.1-0.1l-0.1,0.1c0.1,0,0.1,0,0.1,0.1c0.2,0,0.4-0.1,0.6-0.1c0-0.1-0.1-0.2-0.1-0.2 L91.1,26z M90.6,33.3c0,0.1,0.3,0.2,0.8,0.5h0.1L91,33.3C90.9,33.3,90.8,33.3,90.6,33.3z M90.9,11.3c0,0.1,0.2,0.2,0.4,0.2l0.1-0.1 l-0.3-0.1C91,11.3,90.9,11.3,90.9,11.3z M90.9,27.7c0,0.1,0.1,0.2,0.1,0.2h0.4v-0.1C91.3,27.8,91.1,27.8,90.9,27.7z M90.9,47.3 c0.1,0.1,0.1,0.2,0.1,0.3h0.1l0.4-0.1v-0.1C91.3,47.3,91.2,47.3,90.9,47.3z M91,19.8c0,0.1,0.1,0.1,0.2,0.2h0.1v-0.2H91z M91.2,23.9c0,0.1,0,0.2-0.1,0.2c0,0,0-0.1-0.1-0.1L91,24.2c0,0,0.2,0,0.4,0.1v-0.1L91.2,23.9L91.2,23.9z M91,45.3v0.1 c0,0,0.1,0,0.2,0.1l0.1-0.1v-0.1H91z M91,47.8L91,47.8l0.1,0.1v-0.1H91z M91,7L91,7c0.1,0.2,0.3,0.4,0.6,0.5V7.3 C91.6,7.3,91.4,7.2,91,7z M91,21.5L91,21.5c0,0.2,0.1,0.2,0.1,0.2h0.1v-0.2H91z M91,31.7h0.1l0.5-0.1c0-0.1,0-0.1-0.1-0.1h-0.1 C91.2,31.5,91,31.6,91,31.7z M91.8,20c0,0.1-0.2,0.2-0.7,0.2v0.1c0.1,0,0.4,0.1,0.8,0.4l0.4,0.1c0.1,0,0.2-0.1,0.2-0.1v0.2h0.2 l-0.1-0.4h-0.3l-0.4-0.1v-0.1h0.2c0-0.1-0.1-0.2-0.4-0.4H91.8z M91.1,30.9v0.1h0.2C91.3,31,91.3,30.9,91.1,30.9L91.1,30.9z M91.1,40.3c0,0.1,0.1,0.1,0.1,0.1h0.2v-0.1c0-0.1,0-0.1-0.1-0.1h-0.1C91.2,40.2,91.1,40.2,91.1,40.3z M91.2,12.6v0.1h0.1 L91.2,12.6L91.2,12.6z M91.2,25.7L91.2,25.7l0.1,0.1v-0.1H91.2z M91.2,26.9V27h0.1C91.3,26.9,91.3,26.9,91.2,26.9z M91.2,33 c0,0.1,0.1,0.2,0.1,0.3h0.1c0,0,0-0.1,0.1-0.2L91.2,33L91.2,33z M91.2,17.3v0.1h0.1L91.2,17.3L91.2,17.3z M91.2,22L91.2,22l0.2,0.1 V22H91.2z M91.2,37.9v0.2h0.3c0-0.1-0.1-0.2-0.1-0.2H91.2z M91.3,15v0.1h0.1V15H91.3z M91.4,0.4v0.2c0.3,0.2,0.6,0.4,0.6,0.4V0.8 l-0.2-0.3c0,0,0.1,0,0.1-0.1C91.7,0.5,91.5,0.4,91.4,0.4z M91.5,1.6l-0.1,0.1c0,0,0.1,0,0.1,0.1L92,1.8h0.1V1.6H92 c-0.1,0-0.2,0-0.3,0.1C91.7,1.6,91.6,1.6,91.5,1.6z M91.4,4.3L91.4,4.3l0.1,0.1V4.3H91.4z M91.4,29.8L91.4,29.8 c0.1,0.1,0.2,0.1,0.3,0.2H92C92,29.9,91.8,29.9,91.4,29.8L91.4,29.8z M91.5,13.3l0.4,0.1l0.1-0.1l-0.2-0.1h-0.1 C91.5,13.2,91.5,13.2,91.5,13.3z M91.6,6.5l-0.1,0.1h0.4V6.6L91.6,6.5z M91.5,12.4L91.5,12.4l0.1,0.2c0.1,0,0.2-0.1,0.2-0.1v-0.1 C91.7,12.5,91.6,12.5,91.5,12.4z M91.5,13.5l0.2,0.2c0.1,0,0.2-0.1,0.2-0.1v-0.1L91.5,13.5L91.5,13.5z M92.5,18.6L92.5,18.6 l0.1,0.3L92.5,19h-0.1c-0.2-0.1-0.3-0.2-0.6-0.3c-0.2,0.1-0.3,0.1-0.3,0.2s0.1,0.2,0.4,0.4l0.2-0.1l0.4,0.2c0-0.1,0.1-0.1,0.2-0.2 h0.1l0.4,0.1l-0.1,0.1h0.6l0.1-0.1l-0.1-0.1l-0.5,0.1l0.1-0.1c-0.3-0.1-0.5-0.3-0.6-0.4l-0.1,0.1L92.5,18.6z M91.7,14.2l-0.1,0.1 H92v-0.1L91.7,14.2z M91.6,15.5v0.1h0.1L91.6,15.5L91.6,15.5z M91.6,18L91.6,18c0,0.1,0.1,0.2,0.4,0.4H92v-0.1 C92,18.2,91.9,18.1,91.6,18L91.6,18z M91.6,44.7L91.6,44.7l0.2,0.1v-0.1H91.6z M91.7,34.5L91.7,34.5l0.2,0.1v-0.1H91.7z M92,32.5 l-0.2,0.3c0.2,0.1,0.4,0.1,0.6,0.1C92.1,32.6,92,32.5,92,32.5z M91.7,33.8L91.7,33.8l0.2,0.1v-0.1H91.7z M91.8,3.3v0.1 c0.1,0,0.1,0,0.1,0.1c0.2-0.1,0.3-0.1,0.3-0.2V3.2L91.8,3.3z M91.8,11.5L91.8,11.5l0.1,0.1v-0.1H91.8z M91.8,31.3L91.8,31.3 c0,0.2,0.1,0.2,0.1,0.3c0,0-0.1,0-0.1,0.1c0.4,0.1,0.6,0.2,0.6,0.3c0.1,0,0.2-0.1,0.4-0.1L92,31.3H91.8z M91.8,38 c0,0.1,0.1,0.1,0.2,0.1h0.1v-0.1L91.8,38z M91.9,22.8L91.9,22.8l0.3,0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1H91.9z M92,33.8V34 c0,0,0.1,0,0.3,0.1C92.3,34,92.2,33.9,92,33.8L92,33.8z M92.1,26.7c0,0.1,0.1,0.1,0.1,0.1v-0.1H92.1z M92.1,44.2l0.1,0.1 c0.1,0,0.2-0.1,0.3-0.1v-0.1H92.1z M92.2,30.1L92.2,30.1c0,0.2,0.1,0.2,0.2,0.2h0.1v-0.1C92.4,30.2,92.3,30.2,92.2,30.1z M92.2,34.9V35h0.1C92.3,34.9,92.3,34.9,92.2,34.9z M92.2,16.2L92.2,16.2l0.3,0.1v-0.1H92.2z M92.3,10.6L92.3,10.6l0.2,0.1v-0.1 H92.3z M92.5,29l-0.1,0.1h0.2C92.7,29,92.6,29,92.5,29z M92.5,8.5L92.5,8.5l0.1,0.1V8.5H92.5z M92.5,43.1L92.5,43.1l0.1,0.1v-0.1 H92.5z M92.7,7.1v0.1h0.1V7.1H92.7z M92.7,40.5L92.7,40.5l0.1,0.1v-0.1H92.7z M92.7,44.5L92.7,44.5l0.3,0.1v-0.1 c0-0.1,0-0.1-0.1-0.1C92.7,44.4,92.7,44.4,92.7,44.5z M92.7,38.2v0.1h0.1L92.7,38.2L92.7,38.2z M92.7,38.6L92.7,38.6l0.1,0.1v-0.1 H92.7z M92.9,0.7L92.9,0.7c0,0.2,0.1,0.2,0.1,0.3h0.3C93.2,0.9,93.1,0.8,92.9,0.7z M92.9,17.9c0,0.1,0,0.2-0.1,0.3H93l0.1-0.3H92.9 z M92.9,29.3c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H92.9z M92.9,34.7L92.9,34.7l0.1,0.1v-0.1H92.9z M92.9,11.7c0,0.1,0.1,0.1,0.1,0.1 v-0.1H92.9z M92.9,27.8v0.1H93L92.9,27.8L92.9,27.8z M92.9,33.2L92.9,33.2l0.2,0.1v-0.1H92.9z M92.9,38.6c0,0,0.1,0,0.2,0.1 l0.1-0.1l-0.1-0.1C93,38.5,92.9,38.5,92.9,38.6z M93.2,12c0.1,0,0.1,0.1,0.1,0.1v0.1L93,12.2v0.1c0,0,0.1,0,0.2,0.1 c0-0.1,0.2-0.3,0.6-0.4l0.1-0.4l-0.1-0.1C93.4,11.6,93.2,11.8,93.2,12z M93,17.2L93,17.2l0.1,0.1v-0.1H93z M93,43.4 c0,0.1,0.1,0.2,0.1,0.2h0.1c0.1,0,0.1,0,0.1-0.1l-0.1-0.1H93z M93.1,17.5v0.2c0.1,0,0.1,0,0.1-0.1L93.1,17.5z M93.1,18.4v0.1h0.1 C93.2,18.4,93.2,18.4,93.1,18.4z M93.1,18.6v0.1h0.1v-0.1H93.1z M93.1,30.9L93.1,30.9c0,0.2,0.2,0.3,0.4,0.3 c0.1-0.2,0.2-0.3,0.4-0.3v-0.1c-0.2,0-0.4,0-0.4-0.1C93.3,30.8,93.2,30.9,93.1,30.9z M93.2,21.4L93.2,21.4l0.1,0.2 c0.2-0.1,0.3-0.1,0.4-0.1l-0.1-0.1L93.2,21.4z M93.3,26.2L93.3,26.2l0.1,0.1v-0.1H93.3z M93.8,38.5h-0.2l-0.4-0.1 c0.1,0.2,0.1,0.3,0.1,0.4c-0.1,0-0.1,0.1-0.1,0.1c0.4,0.3,0.6,0.6,0.6,0.8h0.1l0.2-0.1c0,0.1,0.2,0.3,0.5,0.4 c0-0.1,0.1-0.1,0.4-0.1c-0.1-0.2-0.1-0.3-0.2-0.3l-0.2,0.1c0-0.1,0-0.2-0.1-0.3v-0.1c0-0.1,0.1-0.2,0.3-0.2c0.2,0,0.4,0.1,0.4,0.1 h0.1v-0.1c-0.2,0-0.3-0.1-0.3-0.2v-0.1h0.2V39h0.1v-0.1L95,38.7c-0.1,0-0.2,0.1-0.2,0.1c-0.2-0.3-0.4-0.5-0.4-0.5h-0.1 C94,38.3,93.8,38.3,93.8,38.5z M93.4,16.5v0.1h0.1C93.6,16.5,93.5,16.5,93.4,16.5z M93.6,1.9L93.6,1.9l0.1,0.2 c0,0.1-0.1,0.2-0.1,0.3v0.1c0.2,0,0.4,0.1,0.4,0.1l0.1-0.1l0.2,0.1h0.1V2.5c-0.2,0-0.4-0.1-0.5-0.4C93.8,2,93.8,2,93.6,1.9z M93.6,29.9v0.2c0.2,0,0.3,0.1,0.3,0.2h0.4V30C94,30,93.8,30,93.6,29.9z M93.7,37.3L93.7,37.3l0.2,0.1v-0.1H93.7z M93.7,43.8v0.3 c0.1,0,0.3,0.1,0.6,0.4l0.1-0.1C94.3,44,94,43.8,93.7,43.8L93.7,43.8z M93.8,16.7c0,0,0,0.1-0.1,0.2H94v-0.2H93.8z M93.8,19.8 L94,20c-0.1,0-0.2,0.1-0.2,0.1c0,0.1,0.1,0.1,0.1,0.1H94c0.1,0,0.1,0,0.1-0.1l-0.1-0.1c0.1,0,0.1,0,0.1-0.1H93.8z M93.8,19.5v0.1 h0.1L93.8,19.5L93.8,19.5z M93.8,37.7v0.1h0.1L93.8,37.7L93.8,37.7z M93.8,45.7v0.1c0,0.1,0.1,0.1,0.2,0.2h0.1l0.2-0.1l0.2,0.1 v-0.2h-0.5L93.8,45.7L93.8,45.7z M93.9,35.9L93.9,35.9c0,0.2,0.1,0.2,0.1,0.2v-0.2H93.9z M94,19.1L94,19.1c0.2,0.1,0.3,0.3,0.4,0.6 c0.1,0,0.2,0.1,0.3,0.1h0.2v-0.1l-0.1-0.2v-0.1h0.1c-0.1-0.2-0.1-0.4-0.2-0.4L94,19.1z M94,38L94,38l0.1,0.1V38H94z M94.1,12 L94.1,12c0.1,0.3,0.2,0.4,0.4,0.4c0.1,0,0.2-0.1,0.2-0.1v-0.1l-0.1-0.2L94.3,12c0,0-0.1,0-0.1-0.1C94.2,11.9,94.1,12,94.1,12z M94.1,36.3c0,0.1,0.1,0.1,0.2,0.2v-0.2H94.1z M94.1,37v0.1h0.1V37H94.1z M94.1,44.8c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H94.1z M94.2,17.9v0.2h0.1c0.1,0,0.1,0,0.1-0.1l-0.1-0.1H94.2z M94.2,37.8V38c0.1,0,0.2,0,0.3,0.1V38c0-0.1,0-0.1-0.1-0.1H94.2z M94.2,48.8L94.2,48.8l0.1,0.1v-0.1H94.2z M94.3,2C94.3,2,94.3,2,94.3,2v0.2l-0.1,0.1c0.4,0,0.6,0.2,0.6,0.4H95V2.4 C94.9,2.4,94.7,2.3,94.3,2z M94.3,9.5L94.3,9.5l0.1,0.1V9.5H94.3z M94.3,30.4L94.3,30.4c0,0.2,0.1,0.2,0.1,0.2l0.1-0.1v-0.1H94.3z M94.3,13.5L94.3,13.5l0.1,0.1v-0.1H94.3z M94.4,17.4L94.4,17.4c0.1,0.4,0.2,0.6,0.3,0.6h0.2C94.9,17.7,94.7,17.5,94.4,17.4z M94.5,21.5l0.1,0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1H94.5z M94.5,44.9c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H94.5z M94.6,39.3v0.1h0.1 L94.6,39.3L94.6,39.3z M94.6,4.1h0.2V3.9h-0.1C94.7,3.9,94.6,4,94.6,4.1z M94.6,47.5L94.6,47.5l0.1,0.1v-0.1H94.6z M94.7,20.7 L94.7,20.7c0,0.2,0.1,0.2,0.1,0.2H95v-0.2H94.7z M94.7,44.2c0,0.1,0.1,0.1,0.2,0.2h0.3v-0.1L94.7,44.2z M94.8,35.9L94.8,35.9L95,36 v-0.1H94.8z M94.8,42.1L94.8,42.1l0.1,0.1v-0.1H94.8z M95,18.5L95,18.5l0.1,0.1v-0.1H95z M95,48c0,0.1,0.1,0.1,0.1,0.1h0.1 c0-0.1,0-0.1-0.1-0.1H95z"
              },
              void 0,
              !1,
              {
                fileName: "app/ui/components/Preloader.tsx",
                lineNumber: 60,
                columnNumber: 15
              },
              this
            ),
            /* @__PURE__ */ jsxDEV32(
              "path",
              {
                fill: "#fff",
                d: "M106.3,0l0.3,0.1c0.3,0,0.5-0.1,0.6-0.1c1,0,1.8,0.1,2.4,0.1c0,0.1,0.1,0.1,0.1,0.1 c0-0.1,0.1-0.1,0.1-0.1c0.3,0,0.4,0.1,0.6,0.1v0.1h-0.3l-0.4-0.1c0.1,0.2,0.1,0.3,0.2,0.3h0.8c0,0,0.1,0,0.1,0.1 c0.2-0.1,0.4-0.1,0.6-0.1c0.8,0.5,1.4,1,1.6,1.5h0.1V2c0,0.1-0.1,0.1-0.2,0.1l0.1,0.2l0.1-0.1h0.1c0.1,0,0.2,0.2,0.4,0.6V3 l-0.1,0.1c0.2,0,0.4,0.6,0.4,1.8c-0.1,0-0.2,0.1-0.2,0.1v0.1c0.1,0,0.2,0.2,0.2,0.7v0.7l-0.3,0.3v0.1h0.1l0.1-0.1l0.1,0.1v2.3 l-0.1,0.7h-0.1c0-0.1,0-0.1-0.1-0.1c-0.1,0-0.2,0.1-0.2,0.1v0.1h0.3V10l-0.5,0.1h-0.1V9.8H113v0.2h-0.2c0-0.1,0-0.2-0.1-0.2v0.2 h-1.5c-0.2,0-0.3,0-0.4,0.1l-0.4-0.1h-0.9c-0.1,0-0.1,0-0.1-0.1c0.1,0,0.2-0.1,0.2-0.1V9.8l-0.3-0.1V9.1c0,0,0-0.1,0.1-0.1 l-0.1-0.1V7.8c0.2,0.2,0.3,0.3,0.4,0.3h0.4c0-0.1-0.2-0.2-0.6-0.4l-0.1-0.1c0.1-0.2,0.1-0.4,0.2-0.4v0.1l-0.1,0.1h0.2 c0.1,0,0.2-0.1,0.3-0.3c-0.2-0.1-0.4-0.1-0.4-0.2c0-0.1,0.1-0.2,0.1-0.2h-0.1l-0.1,0.1l-0.1-0.1V5c0-0.1,0.1-0.1,0.3-0.1V4.8 c-0.5-0.2-0.9-0.3-1.1-0.3c-0.3,0-0.6,0.1-0.9,0.1h-0.2V4.5c0-0.2,0.2-0.4,0.6-0.4V4.1c-0.3,0-0.4,0-0.4-0.1 c-0.1,0-0.3,0.1-0.6,0.4h-0.1c0-0.2-0.1-0.3-0.3-0.3V3.9l0.2-0.3V3.6c-0.2,0.2-0.6,0.4-1,0.4c0,0,0-0.1-0.1-0.1L105.6,4l0.2,0.1 L106,4h0.3c0.1,0,0.1,0.1,0.1,0.1v0.4h-0.3c-0.1,0-0.1-0.1-0.1-0.3c-0.2,0.2-0.5,0.3-0.8,0.4c0,0.3-0.1,0.5-0.2,0.5h-0.1L104.6,5 h-0.1c0,0,0,0.1-0.1,0.2c0.1,0,0.3,0.1,0.5,0.2h0.2c-0.1,0.3-0.3,0.4-0.5,0.4c0,0.2,0.1,0.4,0.1,0.4c0.1,0,0.2-0.1,0.2-0.1v0.3 c0,0.1,0,0.1-0.1,0.1l0.1,0.1v0.1L104,7v0.2c0.1,0,0.2,0,0.2,0.1v0.1c-0.2,0-0.4,0.2-0.4,0.5h-0.1l0.1,0.1v0.1l-0.1,0.1l0.1,0.1 h0.1c0.1-0.3,0.2-0.5,0.4-0.5c0.1,0,0.2,0.1,0.2,0.1c0-0.1-0.1-0.2-0.3-0.4c0-0.1,0.3-0.4,0.7-0.7h0.1v1.4l0.1,0.4l-0.1,0.1 c0,0.3,0.1,0.5,0.1,0.6c-0.1,0.2-0.4,0.4-0.7,0.4v0.1h0.6c0,0.7,0.1,1.2,0.1,1.5v1.7c0,0.1-0.1,0.1-0.3,0.1l0.3,0.3v1.7 c-0.3,0.1-0.5,0.2-0.6,0.2v0.1h0.1c0.2-0.1,0.3-0.2,0.4-0.2v3.8c0,0.1,0,0.2-0.1,0.3c0,0.1,0.1,0.2,0.1,0.3c-0.1,0-0.2,0.1-0.2,0.1 l0.2,0.3v0.3c0,0,0,0.1-0.1,0.1l0.1,0.1v2c-0.2,0.3-0.4,0.5-0.5,0.5l0.1,0.2c0,0-0.1,0-0.1,0.1h0.1c0-0.1,0.1-0.2,0.3-0.2v1.5 c0,0.1-0.1,0.1-0.2,0.1v0.1c0.1,0,0.2,0,0.2,0.1v3.7c0,0.3-0.2,0.5-0.5,0.5v0.1c0.1,0,0.1,0,0.1,0.1l0.1-0.1h0.1 c0.1,0,0.1,0.1,0.1,0.1v0.8c0,0.1-0.1,0.1-0.2,0.1l0.2,0.4v1.1c0,0.1,0,0.1-0.1,0.1h-0.1l-0.1-0.1V32h0.2v0.1l-0.1,0.1 c0.1,0,0.2,0,0.2,0.1v7.9c0,0.1,0,0.1-0.1,0.1h-0.2c-0.1,0-0.1,0-0.1-0.1c-0.2,0.1-0.3,0.1-0.4,0.1v-0.1l0.1-0.1l-0.4,0.1h-0.2v0.2 c0.2,0,0.3,0,0.3,0.1c-0.1,0-0.1,0.1-0.1,0.3l-0.4-0.1V41h0.1l0.8,0.1l0.1-0.1v-0.2c-0.3,0-0.4,0-0.4-0.1l0.8-0.1h0.1v0.1h-0.1v0.1 c0.2,0,0.3,0,0.3,0.1v3.8c0,0,0,0.1-0.1,0.1l0.1,0.1l-0.1,0.1c0.2,0.2,0.3,0.4,0.4,0.4l0.1-0.1h2.9c0.1,0,0.3,0,0.4,0.1 c0.2-0.2,0.3-0.3,0.3-0.5V44c0-0.2,0-0.5-0.1-0.6c0-0.2,0.1-0.5,0.1-0.7c0-0.4,0-0.8-0.1-1.2c0-0.5,0.1-0.9,0.1-1.2 c0-0.1,0-0.6-0.1-1.7l0.1-0.3l-0.1-0.3c0-1,0.1-1.7,0.1-2.1l-0.1-0.7c0-0.2,0.1-0.4,0.1-0.8v-0.2c0-0.1,0.1-0.1,0.2-0.2l-0.3-0.5 v-0.1c0-0.1,0.2-0.2,0.6-0.5c-0.4-0.1-0.6-0.2-0.6-0.3V32c0-0.1,0.1-0.1,0.1-0.1v0.1l0.1-0.1h0.1l0.1,0.1l0.1-0.1 c0-0.1-0.1-0.2-0.1-0.2c0.1,0,0.2-0.1,0.2-0.1v-0.1l-0.4-0.1c0,0.1-0.1,0.1-0.2,0.2h-0.1c0-0.3-0.1-0.4-0.1-0.6 c0-0.1,0-0.2,0.1-0.4c-0.1,0-0.1,0-0.1-0.1c0,0,0.2,0,0.4-0.1v-0.1c-0.3,0-0.4,0-0.4-0.1v-1.4l0.1-0.2l-0.1-0.2l0.3-0.3 c-0.2,0-0.3,0-0.3-0.1v-0.5c0-0.1,0.2-0.2,0.5-0.2l-0.1-0.4h-0.1l-0.1,0.1l0.1,0.1v0.1h-0.1c-0.1,0-0.1,0-0.1-0.1v-2.1l0.1-0.1 l0.1,0.1h0.3c0-0.1-0.1-0.2-0.4-0.4l0.1-0.1c-0.1,0-0.1,0-0.1-0.1v-0.6l0.1-0.2l-0.1-0.2v-0.7h-1.6c-0.2-0.1-0.3-0.2-0.3-0.5v-0.5 h0.1l0.3,0.2h0.1v-0.1l-0.5-0.5v-1.4c0,0,0-0.1,0.1-0.1l-0.1-0.1v-0.9c0-0.4,0.1-0.6,0.3-0.6h0.4V18l-0.1,0.1l0.4,0.1 c0.1,0,0.1-0.1,0.1-0.3h4.4c0,0,0.1,0,0.1,0.1l0.1-0.1h0.1l0.2,0.1c0-0.1,0.1-0.1,0.1-0.1h0.4c0.1,0,0.2,0.1,0.3,0.3v0.6 c0,0.1,0,0.1-0.1,0.1h-0.1v-0.1l0.1-0.2h-0.4c-0.2,0-0.4,0.1-0.4,0.1c0,0.1,0.1,0.2,0.1,0.2c-0.1,0-0.2,0.1-0.3,0.1 c0,0.1,0.1,0.1,0.1,0.1s0.2,0,0.4-0.1c0.3,0.1,0.5,0.2,0.5,0.3v1l-0.4,0.3c0.3,0,0.4,0.1,0.4,0.4v0.5c0,0.1-0.1,0.1-0.2,0.1v0.1 c0.1,0,0.2,0,0.2,0.1V25c0,0.1-0.1,0.1-0.3,0.1l0.1,0.1l-0.2,0.3c0.2,0,0.3,0.1,0.4,0.3v1.5h-0.1c0-0.2-0.1-0.3-0.2-0.3h-0.2 c0,0.2-0.2,0.3-0.6,0.3c0,0.3,0.3,0.4,0.7,0.4v0.1c-0.3,0-0.6,0-0.9,0.1c-0.1,0-0.2-0.1-0.2-0.1c0,0.2-0.2,0.4-0.4,0.4v0.1 c0,0.1,0.1,0.1,0.1,0.1h0.1l-0.1-0.1v-0.1h0.1c0,0,0,0.1,0.1,0.2c-0.3,0.2-0.4,0.3-0.4,0.4c0.1,0,0.2,0,0.3,0.1c0,0,0-0.1,0.1-0.1 l0.1,0.1c0,0.1-0.1,0.2-0.3,0.2v0.1c0.1,0,0.2,0.1,0.2,0.3h0.1v-0.4c0.1,0,0.1,0.1,0.2,0.2l-0.2,0.4c0.2,0,0.4,0.1,0.4,0.4v0.2h0.2 v-0.2c0-0.2-0.1-0.5-0.2-0.6c0,0,0-0.1,0.1-0.1l-0.1-0.1v-0.1c0.2,0,0.4-0.1,0.4-0.4c0,0-0.1,0-0.1-0.1c-0.2,0.1-0.3,0.1-0.4,0.1 v-0.1c0-0.1,0.1-0.1,0.1-0.1h0.4c0-0.1,0-0.2,0.1-0.3c0-0.1,0-0.1-0.1-0.1h-0.1c0,0.1,0,0.2-0.1,0.2h-0.1v-0.1 c0-0.2,0.3-0.4,0.8-0.6h0.1v0.1c0,0,0,0.1-0.1,0.1l0.1,0.1c0,0,0,0.1-0.1,0.1l0.1,0.1c0,0.2-0.1,0.3-0.1,0.3 c0.1,0.2,0.1,0.3,0.1,0.4c0,0.4,0,1.2,0.1,2.5c0,0.1-0.1,0.2-0.1,0.2h-0.1c-0.1,0-0.1-0.1-0.1-0.3h-0.1c0,0.2-0.2,0.4-0.5,0.6 c0,0,0.1,0,0.1,0.1c0.3-0.1,0.6-0.2,0.7-0.3c0.1,0.1,0.1,0.3,0.1,0.7c0,0.6-0.3,1-0.8,1.1c-0.1,0-0.1,0.1-0.1,0.1h0.1l0.7-0.1 c0.1,0.1,0.1,0.2,0.1,0.3c0,0.1,0,0.3-0.1,0.5c0,0.3,0.1,0.6,0.1,0.9v0.4c0,0.1-0.1,0.2-0.3,0.3h-0.1c0,0-0.1,0-0.1-0.1 c-0.1,0-0.2,0.1-0.2,0.1v0.1c0.1,0.1,0.1,0.2,0.1,0.4h0.2l0.1-0.1l0.1,0.1c-0.1,0-0.1,0.1-0.1,0.1l0.1,0.2c0,0.1-0.1,0.2-0.4,0.4 l-0.1,0.2h0.2c0-0.1,0-0.2,0.1-0.2c0.1,0,0.1,0.1,0.1,0.1c0,0-0.1,0-0.1,0.1c0.1,0,0.2,0,0.2,0.1V38c-0.1,0.3-0.2,0.4-0.4,0.4v0.1 c0,0.1,0.1,0.1,0.4,0.1V39h-0.4v0.4h0.1l0.3-0.2h0.1v0.1c0,0,0,0.1-0.1,0.1c0,0.1,0,0.1,0.1,0.1c0,0.5-0.1,0.8-0.1,1.1v0.8 c0,0.4,0,0.9,0.1,1.5c0,0.3-0.2,0.5-0.6,0.5l-0.4-0.1h-0.5c0,0.1,0.1,0.1,0.2,0.2c0,0,0-0.1,0.1-0.1c0,0.1,0.3,0.2,0.8,0.2 c0.2,0.1,0.3,0.3,0.3,0.4c0,0.7-0.1,1.2-0.1,1.5c-0.2,0.1-0.3,0.2-0.4,0.2l0.1,0.1l0.1-0.1c0.1,0,0.1,0.1,0.1,0.1 c-0.2,0.9-0.4,1.4-0.6,1.7c0,0.2-0.2,0.3-0.5,0.3v0.2h0.1v0.1c-1,1-2.1,1.5-3.5,1.5h-0.4v-0.1h0.2v-0.1c-0.2,0-0.4-0.1-0.7-0.4 c-0.1,0-0.1,0.1-0.1,0.1v0.1c0.2,0.2,0.3,0.3,0.3,0.4h-0.5l0.1-0.4h-0.1c-0.2,0.3-0.3,0.4-0.6,0.4h-2.8c-0.1,0-0.2,0-0.3-0.1 c0,0-0.1,0-0.1,0.1c-0.6,0-1.2-0.2-1.8-0.6c-0.2,0-0.3,0-0.3-0.1c0.4,0,0.5-0.1,0.6-0.2v-0.1c-0.4,0-0.6,0.1-0.6,0.3h-0.1 c-0.1,0-0.2-0.1-0.4-0.4c0-0.1,0.2-0.2,0.6-0.2v-0.1L102,48v-0.1c0-0.1,0.1-0.1,0.2-0.1v-0.1c-0.1,0-0.2,0-0.2-0.1v-0.1l0.2-0.3 c-0.2,0-0.3-0.1-0.3-0.2l0.1-0.4h-0.1c0.1-0.2,0.1-0.3,0.2-0.3l0.1,0.1c0-0.1,0.1-0.1,0.1-0.1h0.2c0,0.2,0.1,0.3,0.4,0.3v0.1h0.2 c0-0.1,0.1-0.2,0.2-0.2c0-0.1,0-0.1-0.1-0.1l-0.4,0.1v-0.1l0.4-0.4l-0.1-0.1c-0.1,0-0.2,0-0.4,0.1c0-0.1,0-0.1-0.1-0.1l-0.3,0.3 c-0.2-0.2-0.4-0.4-0.4-0.6h0.1c0.1,0,0.2-0.1,0.4-0.4H102c0-0.1,0-0.2,0.1-0.3c0-0.1-0.1-0.2-0.1-0.3v-0.1l0.2-0.3v-0.1 c-0.2,0-0.3-0.1-0.3-0.4c0.3-0.3,0.4-0.4,0.4-0.5h-0.1c-0.1,0-0.2,0.1-0.2,0.1v-0.1l0.1-0.1c-0.1,0-0.1,0-0.1-0.1v-0.1 c0,0,0-0.1,0.1-0.1c-0.1-0.2-0.1-0.3-0.1-0.4c0.1-0.4,0.3-0.6,0.4-0.6h0.4v-0.1c-0.2-0.1-0.3-0.3-0.3-0.4H102v-0.1 c0-0.1,0-0.3,0.1-0.4c-0.1,0-0.2,0-0.2-0.1c0.2-0.1,0.3-0.1,0.4-0.1l-0.1,0.1v0.1c0.3,0,0.7,0.3,1.1,0.9v0.1l-0.1,0.1h0.1 c0.2-0.1,0.3-0.1,0.3-0.2v-0.1c-0.3-0.6-0.6-0.8-0.6-0.8v-0.1c0.1,0,0.3-0.1,0.4-0.4V40H103v0.3l-0.4,0.1c-0.1-0.1-0.2-0.3-0.2-0.5 c0.2,0,0.4-0.1,0.4-0.2c-0.2-0.1-0.3-0.1-0.4-0.1c-0.2,0.2-0.4,0.3-0.4,0.3c-0.1,0-0.2-0.1-0.2-0.1V41c0,0.2,0,0.3-0.1,0.4l0.1,0.4 V42c0,0.2,0,0.5-0.1,0.6l0.1,1.3h-0.1l0.1,0.1v0.2c0,0,0,0.1-0.1,0.1l0.1,0.1v0.1c0,0.1,0,0.2-0.1,0.3c0,0.1,0.1,0.2,0.1,0.2 l-0.1,0.4l0.1,0.4c0,0.1,0,0.2-0.1,0.3c0,0.3,0.1,0.6,0.1,0.8v0.8c0,0.1,0,0.2,0.1,0.3c-0.1,0.2-0.1,0.3-0.1,0.4h-0.1 c-0.6-0.6-1-1.5-1.2-2.5v-1.5l0.1-0.2c-0.1,0-0.1,0-0.1-0.1v-1.3l0.2-0.3c-0.2,0-0.3-0.3-0.3-0.9v-4.1l0.2-0.4l-0.1-0.3 c0-0.1,0.1-0.2,0.1-0.2c-0.1,0-0.1,0-0.1-0.1v-0.7l0.2-0.3c-0.1,0-0.1-0.1-0.2-0.2v-0.8c0-0.1,0.1-0.1,0.3-0.1v-0.2l-0.3-0.3V20.7 c0-0.1,0.1-0.1,0.3-0.1v-0.1c-0.2,0-0.3,0-0.3-0.1v-1.3l-0.1-0.4c0.1,0,0.1,0,0.1-0.1c-0.1,0-0.1,0-0.1-0.1v-0.8 c0-0.1,0-0.2,0.1-0.3l-0.1-0.1c0-0.5,0.1-0.7,0.1-0.7l-0.1-0.1l0.1-0.2v-0.3h-0.2V15h0.1l0.1,0.1c0-0.2,0-0.3,0.1-0.4l-0.1-0.1 c-0.1,0-0.2,0.1-0.2,0.1V9.5c0.4-0.5,0.7-0.7,0.9-0.7V8.7c-0.2,0-0.4-0.2-0.6-0.6h-0.1c0,0.2,0.1,0.3,0.2,0.5 c-0.1,0.2-0.2,0.4-0.4,0.4V8.7c0-0.1,0-0.2,0.1-0.2l-0.1-0.4V5.1c0-0.8,0.1-1.3,0.2-1.3l-0.1-0.1V3.3c0.2-0.6,0.5-1.1,0.9-1.6h0.1 v2.2c0,0.1,0,0.2-0.1,0.3c0.1,0.3,0.1,0.6,0.1,0.9c0,0.6-0.1,0.9-0.1,1.1l0.1,0.1c0,0.1-0.1,0.2-0.1,0.3c0,0.2,0,0.3,0.1,0.4 c0,0.3-0.1,0.4-0.1,0.6c0,0.6,0.1,0.9,0.1,1l-0.1,0.1l0.1,0.5c0,0,0,0.1-0.1,0.1c0,0.1,0,0.1,0.1,0.1l-0.1,2.5c0,2,0.1,3.8,0.2,5.4 c-0.1,0.4-0.1,0.6-0.1,0.6l0.1,0.1c0,0.1,0,0.1-0.1,0.1c0,0.6,0.1,1.1,0.1,1.4v0.4c0,0.4,0,0.9-0.1,1.5c0.1,0.2,0.1,0.4,0.1,0.8 c0,0.1,0,0.5-0.1,1.3c0.1,0.2,0.1,0.3,0.1,0.4v2.6c0,0.4,0,0.9-0.1,1.5c0,0.1,0.1,0.2,0.1,0.2h-0.1l0.1,0.1V30c0,0.3,0,0.6-0.1,0.8 c0,0,0,0.1,0.1,0.1l-0.1,0.5v2l0.1,0.4c0,0.1-0.1,0.2-0.1,0.3l0.3,3.4c0,0.3-0.1,0.6-0.1,0.9v1.3h0.1c0.1,0,0.2-0.2,0.2-0.5 l-0.1-0.1V39c0-0.1,0.1-0.1,0.3-0.2l-0.1-0.1l0.1-0.1H102v-0.2h0.1c0.2,0.2,0.5,0.3,0.6,0.3h0.1l0.1-0.1l-0.1-0.1v-0.1 c0,0,0.1,0,0.1,0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1c-0.2,0-0.3-0.1-0.3-0.3h-0.7c-0.1,0-0.1,0-0.1-0.1h0.1l-0.2-0.4 c0.1-0.5,0.3-0.7,0.5-0.7c0-0.1-0.1-0.2-0.4-0.4l0.1-0.1c0,0,0-0.2-0.1-0.4l0.1-0.1c0-0.1-0.1-0.2-0.1-0.2l0.1-0.1 c0-0.1-0.1-0.2-0.1-0.3c0,0,0-0.1,0.1-0.1l-0.1-0.4l0.1-0.4l-0.1-0.4c0-0.8,0.1-1.3,0.1-1.5c0-0.1-0.1-0.2-0.1-0.4v-0.1l0.2-0.3 c-0.2,0-0.3,0-0.3-0.1c0.1-0.3,0.2-0.4,0.4-0.4l-0.1-0.1c0.1,0,0.2-0.1,0.3-0.1v-0.1h-0.3v-0.1h0.1c0.1,0,0.2,0,0.4,0.1 c0.3-0.1,0.5-0.1,0.5-0.2c-0.1,0-0.2,0-0.2-0.1c0.1,0,0.1,0,0.1-0.1c0,0-0.1,0-0.2-0.1c0,0-0.2,0.1-0.4,0.3h-0.1 c-0.1,0-0.1,0-0.1-0.1c0,0,0-0.1,0.1-0.1c0-0.1-0.1-0.2-0.1-0.2l-0.2,0.1H102V30c0-0.1,0.1-0.2,0.1-0.2l-0.1-0.1L102,29V29 c0-0.2,0-0.4-0.1-0.6c0-0.2,0.2-0.4,0.6-0.6c0-0.1,0.1-0.1,0.1-0.1c0.1,0,0.2,0.1,0.2,0.1l-0.1-0.1v-0.1c0.2,0,0.4-0.1,0.4-0.2 v-0.1h-0.1l-0.4,0.1c0,0,0-0.1-0.1-0.1c0,0.1,0,0.1-0.1,0.1h-0.2c-0.3-0.2-0.4-0.3-0.4-0.4v-0.4c0-0.3,0.1-0.5,0.1-0.5 c-0.1-0.2-0.1-0.3-0.1-0.4c0.1,0,0.2-0.1,0.3-0.1l-0.3-0.3v-0.1c0,0,0-0.1,0.1-0.1l-0.1-0.1l0.1-0.1c0-0.2-0.1-0.4-0.1-0.4l0.1-0.4 v-0.5c0-0.1,0.1-0.2,0.4-0.3l-0.1-0.1v-0.2l0.6-0.1l0.1,0.1v0.1h-0.3c0.1,0.1,0.1,0.2,0.1,0.4l0.6-0.3v-0.1h-0.1v-0.1 c0.4,0,0.6,0,0.8-0.1c0.1,0,0.2,0.1,0.4,0.1v-0.2c-0.4,0-0.6-0.1-0.6-0.3c-0.3,0.2-0.6,0.3-0.6,0.3c0-0.1,0-0.1-0.1-0.1h-0.1 l-0.2,0.1h-0.1v-0.1l0.1-0.1c-0.1,0-0.1,0-0.1-0.1c0,0,0.1,0,0.1-0.1h-0.1v0.1h-0.1v-0.1l0.1-0.2v-0.1h-0.1v0.1 c-0.1,0-0.2-0.1-0.4-0.4v-0.3c0-0.3,0.1-0.4,0.2-0.4c0.1,0,0.2,0.1,0.3,0.1c0-0.1,0.1-0.2,0.3-0.3h0.1l0.1,0.1c0-0.7,0.3-1,0.8-1 l0.4-0.2v-0.1H104c-0.1,0-0.5,0.2-1.3,0.5l0.1,0.1c0,0.1-0.1,0.1-0.3,0.2l-0.1-0.1c0-0.1,0-0.2,0.1-0.3v-0.1h-0.1 c0,0.1-0.1,0.2-0.4,0.4h-0.1v-0.1l0.4-0.4c-0.2,0-0.3-0.1-0.4-0.3c0-0.4,0.1-0.7,0.1-1v-0.3c0.1,0,0.2-0.1,0.4-0.4h0.3V18 c-0.1,0-0.3-0.1-0.4-0.4c-0.1,0-0.2,0-0.2-0.1l0.1-0.3c-0.1-0.2-0.1-0.3-0.1-0.4c0,0,0-0.1,0.1-0.1l-0.1-0.4c0-0.3,0-0.5,0.1-0.5 l-0.1-0.4v-0.3c0-0.3,0.1-0.5,0.4-0.5v-0.1c-0.1,0-0.2-0.1-0.4-0.4c0.1-0.2,0.1-0.3,0.2-0.3h0.1c0.1,0,0.1,0.1,0.1,0.2 c0.3,0,0.4-0.2,0.4-0.5c0,0,0.1,0,0.1-0.1v-0.1l-0.1-0.1c0.1,0,0.2-0.1,0.4-0.1c0-0.1-0.1-0.1-0.2-0.1c-0.2,0-0.4,0.2-0.6,0.6 l-0.3,0.1l-0.1-0.2h0.3v-0.1c-0.2,0-0.4,0-0.4-0.1c0.4-0.1,0.6-0.2,0.6-0.4c-0.4,0-0.6-0.2-0.6-0.5v-0.3l0.1-0.1c0,0,0,0.1,0.1,0.1 c0-0.1,0.2-0.2,0.6-0.3l-0.1,0.1v0.1c0.2,0,0.3,0.1,0.3,0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1c0-0.1,0-0.1-0.1-0.1l-0.1,0.1l-0.1-0.2 c0.1,0,0.2-0.1,0.4-0.4h0.1v-0.1c-0.1,0-0.2,0-0.3-0.1c-0.3,0.2-0.5,0.4-0.6,0.6h-0.1l0.1,0.1v0.1H102c0-0.6,0.2-1,0.6-1.2 c0-0.1-0.1-0.2-0.4-0.3c0,0.1,0,0.1-0.1,0.1s-0.1,0-0.1-0.1c0.2,0,0.3-0.1,0.3-0.1c0.5,0.1,0.8,0.2,0.8,0.3 c0.2-0.1,0.4-0.2,0.6-0.2c0-0.1,0-0.1-0.1-0.1l-0.6,0.1l-0.1-0.1l0.1-0.1c-0.3,0-0.4,0-0.4-0.1c0.1,0,0.2-0.1,0.3-0.3 c0.1,0,0.2,0.1,0.2,0.2h0.4v-0.1c-0.1,0-0.2-0.1-0.4-0.3l-0.4,0.1l-0.1-0.1c-0.2,0.1-0.3,0.1-0.4,0.1L102,9.7l0.2-0.3 c-0.2,0-0.3,0-0.3-0.1V9.2c0,0,0-0.1,0.1-0.1c0-0.1-0.1-0.2-0.1-0.2l0.3-0.5c-0.2-0.1-0.3-0.1-0.3-0.2l0.6-0.4l0.1,0.1h0.2 c0,0.1-0.1,0.2-0.1,0.2h0.3c0.1,0,0.2,0,0.3-0.1c0.1,0,0.2,0.1,0.3,0.1h0.1c-0.1-0.3-0.3-0.4-0.6-0.4V7.6c0.1,0,0.1,0,0.1-0.1V7.4 c-0.6,0.1-1,0.2-1.1,0.4H102c0-0.1,0-0.3,0.1-0.4c-0.1,0-0.1,0-0.1-0.1c0.1,0,0.1,0,0.1-0.1c-0.1,0-0.1-0.1-0.2-0.2V6.8 c0,0,0-0.1,0.1-0.1l-0.1-0.1c0-0.1,0.1-0.1,0.2-0.1L102,6.2c0.1,0,0.2-0.1,0.2-0.1V6c-0.1,0-0.2,0-0.2-0.1c0,0,0-0.1,0.1-0.1 L102,5.7l0.1-0.1c-0.1,0-0.2-0.2-0.2-0.4c0.1-0.2,0.1-0.3,0.1-0.4c-0.1,0-0.1,0-0.1-0.1c0-0.1,0.1-0.2,0.1-0.2l-0.1-0.4 c0,0,0-0.2,0.1-0.4c0,0-0.1,0-0.1-0.1l0.1-0.1c0,0.1,0.1,0.1,0.2,0.2h0.1V3.5c-0.3,0-0.5-0.1-0.5-0.2l0.1-0.1c0,0,0-0.1-0.1-0.1 l0.1-0.4c0-0.2,0-0.3-0.1-0.4l0.1-0.3c0-0.4-0.1-0.8-0.1-1.1C102.8,0.4,104.2,0,106.3,0z M100.6,10.5L100.6,10.5l0.3,0.1 c0.1,0,0.2-0.2,0.3-0.5h-0.1C100.9,10.4,100.7,10.5,100.6,10.5z M100.6,24.3L100.6,24.3l0.1,0.1v-0.1H100.6z M100.7,22.5 L100.7,22.5l0.2,0.1v-0.1H100.7z M100.8,42.8L100.8,42.8l0.2,0.1v-0.1H100.8z M100.8,43.8c0.1,0.2,0.1,0.3,0.2,0.3h0.2 c0.1,0,0.1,0,0.1-0.1c-0.2-0.1-0.3-0.1-0.4-0.1H100.8z M100.9,11.7C101,11.9,101,12,101,12h0.1v-0.3H100.9z M100.9,13.8 c0,0.1,0.1,0.1,0.1,0.1h0.1c0-0.1,0-0.1-0.1-0.1H100.9z M100.9,45.6v0.2c0.3,0,0.4,0.1,0.4,0.3h0.1v-0.3c-0.1,0-0.2-0.1-0.4-0.2 H100.9z M101.1,33.8c0,0.1,0,0.1-0.1,0.1v0.4c0.1,0,0.2-0.1,0.4-0.4L101.1,33.8L101.1,33.8z M100.9,36.3v0.1h0.1 C101.1,36.3,101,36.3,100.9,36.3z M101,10h0.1V9.8C101.1,9.9,101,9.9,101,10z M101,10.8V11h0.2C101.2,10.9,101.2,10.8,101,10.8 L101,10.8z M101,44.4L101,44.4l0.1,0.1v-0.1H101z M101.1,30.9L101.1,30.9l0.1,0.1v-0.1H101.1z M101.2,43L101.2,43l0.1,0.1V43H101.2 z M101.2,45.5L101.2,45.5l0.2,0.1v-0.1H101.2z M101.9,40L101.9,40c0.2,0,0.2,0.1,0.2,0.1l-0.1,0.1L101.9,40L101.9,40z M102,13.1 h0.1v0.1H102V13.1z M102.2,27.4L102.2,27.4c0.1,0.1,0,0.1-0.1,0.2v-0.1C102.1,27.5,102.1,27.4,102.2,27.4z M102.2,48.2L102.2,48.2 l0.1,0.1h-0.2C102.1,48.2,102.1,48.2,102.2,48.2z M102.1,1.8v0.1h0.3V1.8H102.1z M102.1,4.9l0.1,0.1h0.1l0.5-0.1c0,0,0,0.1,0.1,0.1 l-0.1,0.1v0.1h0.4c0.1,0.1,0.2,0.1,0.4,0.1v0.2h-0.1l-0.1-0.1c0,0.1-0.2,0.2-0.5,0.3V6c0.1,0,0.2,0,0.4,0.1c0.4,0,0.8-0.2,1.1-0.6 h0.1V5.5c-0.1,0-0.1,0-0.1-0.1c0-0.1,0.1-0.2,0.1-0.2L104,5.1c-0.2,0.1-0.4,0.1-0.6,0.1V5.1c0-0.1,0.1-0.2,0.4-0.2V4.9 c-0.2,0-0.3-0.1-0.3-0.2l-0.4,0.1l-0.3-0.1C102.4,4.7,102.1,4.8,102.1,4.9z M102.1,17.3L102.1,17.3c0,0.1,0.1,0.2,0.2,0.3 c0.1,0,0.2-0.1,0.3-0.3c0,0-0.1,0-0.2-0.1C102.3,17.3,102.2,17.3,102.1,17.3z M102.1,19.1L102.1,19.1l0.2,0.1v-0.1H102.1z M102.2,4.4v0.2h0.2V4.4H102.2z M102.2,35.9L102.2,35.9l0.1,0.2c0,0.1-0.1,0.2-0.1,0.2l0.2,0.1h0.3c0.1-0.1,0.2-0.1,0.3-0.1v-0.1 c-0.2,0-0.4-0.1-0.6-0.4H102.2z M102.2,44.9L102.2,44.9l0.3,0.1v-0.1H102.2z M102.3,9.3L102.3,9.3l0.3,0.1V9.3c0-0.1,0-0.1-0.1-0.1 C102.3,9.2,102.3,9.2,102.3,9.3z M102.3,27.1L102.3,27.1c0.2,0,0.2,0,0.2-0.1h-0.1C102.3,26.9,102.3,27,102.3,27.1z M102.3,31.5 h0.1c0.1,0,0.2-0.1,0.3-0.3v-0.1h-0.1C102.5,31.1,102.4,31.3,102.3,31.5z M102.3,47.7h0.2c0.2-0.1,0.3-0.2,0.4-0.2v-0.3h-0.1 C102.7,47.3,102.6,47.4,102.3,47.7z M102.3,47.3L102.3,47.3l0.1,0.1v-0.1H102.3z M102.4,18.8l-0.1,0.1h0.5v-0.1L102.4,18.8z M102.5,38l0.1,0.2c0,0.1,0,0.1-0.1,0.1l-0.1-0.3L102.5,38z M102.4,25.4v0.1h0.1v-0.1H102.4z M102.5,45.6L102.5,45.6l0.1,0.1v-0.1 H102.5z M102.8,16c0,0.1-0.1,0.2-0.2,0.4v0.1c0.3-0.1,0.5-0.1,0.5-0.2C102.9,16.2,102.8,16.2,102.8,16L102.8,16z M102.6,17.6v0.1 l0.4-0.1h0.1v0.1h-0.2v0.1c0.1,0,0.2,0.1,0.4,0.3h0.1v-0.1c-0.1,0-0.2,0-0.3-0.1c0-0.1,0.1-0.2,0.1-0.2c0-0.2-0.1-0.3-0.1-0.3 C102.9,17.5,102.7,17.6,102.6,17.6z M102.6,42.5h0.1c0.1,0,0.1,0,0.1-0.1v-0.1C102.8,42.2,102.7,42.3,102.6,42.5z M102.6,6.5h0.1 V6.3C102.7,6.3,102.6,6.4,102.6,6.5z M102.7,8.7l-0.1,0.1l0.1,0.1c0.1,0,0.2-0.1,0.2-0.1V8.8L102.7,8.7z M102.6,15 c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1H102.6z M102.6,16.8V17h0.2c0.1,0,0.1,0,0.1-0.1L102.6,16.8z M102.6,42L102.6,42l0.1,0.1 c0.1,0,0.1,0,0.1-0.1v-0.1h-0.1C102.7,41.9,102.6,42,102.6,42z M102.7,6.8L102.7,6.8l0.1,0.1V6.6C102.7,6.6,102.7,6.7,102.7,6.8z M102.7,18.6L102.7,18.6c0.1,0.1,0.1,0,0.1-0.1v-0.1C102.7,18.4,102.7,18.5,102.7,18.6z M102.7,31.9L102.7,31.9l0.1,0.1v-0.1H102.7 z M102.8,1.9V2h0.1L102.8,1.9L102.8,1.9z M102.8,9.6h0.3c0-0.1,0-0.1-0.1-0.1C102.8,9.5,102.8,9.6,102.8,9.6z M102.8,12.5v0.1h0.1 L102.8,12.5L102.8,12.5z M102.8,23.8L102.8,23.8l0.1,0.1v-0.1H102.8z M102.8,31.6v0.1h0.2c0-0.1,0.1-0.1,0.2-0.1v-0.2h-0.1 C103,31.6,102.9,31.6,102.8,31.6z M102.9,23.6v0.1h0.1L102.9,23.6L102.9,23.6z M103.1,36.5h-0.2v0.1c0.1,0,0.2,0,0.3,0.1h0.4 c0.2,0,0.4-0.1,0.4-0.2c0-0.1-0.1-0.2-0.4-0.3h-0.1C103.4,36.4,103.3,36.5,103.1,36.5z M102.9,44.4v0.1h0.2l0.4,0.1v-0.1 c-0.1-0.1-0.1-0.2-0.1-0.4h-0.1C103.1,44.3,103,44.4,102.9,44.4z M102.9,44.9L102.9,44.9h0.4v-0.2h-0.2 C103,44.7,103,44.8,102.9,44.9z M103,6.3L103,6.3c0.1,0.1,0.1,0.1,0.1,0.1c0.1,0,0.2-0.1,0.2-0.1c0-0.1,0-0.1-0.1-0.1 C103.1,6.3,103,6.3,103,6.3z M103,25.7L103,25.7c0,0.1,0.1,0.1,0.2,0.1l0.1-0.1c0,0-0.1,0-0.1-0.1C103.1,25.6,103,25.7,103,25.7z M103,31.9v0.2h0.2V32C103.2,31.9,103.1,31.9,103,31.9L103,31.9z M103,34.8v0.1h0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1H103z M103,49v0.1 h0.1L103,49L103,49z M103.1,3.4L103,3.6l0.4,0.2l0.1-0.1L103.1,3.4z M103.1,7L103,7.2h0.2C103.3,7.1,103.2,7,103.1,7z M103.5,18.4 c0,0.3-0.2,0.4-0.5,0.4v0.1c0.3,0,0.7-0.2,1.1-0.6H103.5z M103,28.3L103,28.3c0.1,0.1,0.2,0.1,0.2,0.1c0,0.1-0.1,0.2-0.1,0.2h0.2 c0-0.1,0-0.2,0.1-0.3v-0.1c0,0-0.1,0-0.2-0.1C103.2,28.2,103.1,28.3,103,28.3z M103.3,31.1v0.1l-0.1-0.1c0,0,0,0.1-0.1,0.2h0.1 c0.1,0,0.1,0,0.1-0.1l0.1,0.1h0.1v-0.1C103.5,31.1,103.4,31.1,103.3,31.1L103.3,31.1z M103,46.8V47c0,0.1,0.1,0.1,0.1,0.1 c0-0.1,0.1-0.1,0.2-0.1v-0.1L103,46.8z M103,48.4L103,48.4c0.2,0.1,0.3,0.2,0.3,0.4h0.2v-0.2c-0.1,0-0.2,0-0.2-0.1H103z M103.2,14.7l-0.1,0.1l0.4,0.1v-0.1L103.2,14.7z M103.1,21v0.1h0.1L103.1,21L103.1,21z M103.1,29.6v0.1h0.2v-0.1H103.1z M103.1,35.8v0.1h0.1L103.1,35.8L103.1,35.8z M103.1,40.5L103.1,40.5l0.4-0.1v-0.1c-0.1,0-0.1,0-0.1-0.1 C103.2,40.4,103.1,40.4,103.1,40.5z M103.1,47.5v0.2l0.4-0.1c0-0.1,0-0.1-0.1-0.1H103.1z M103.2,8.4v0.2h0.2c0-0.1,0-0.2,0.1-0.3 V8.2h-0.2C103.2,8.2,103.2,8.3,103.2,8.4z M103.2,25L103.2,25l0.4,0.1h0.1c0-0.1,0-0.1-0.1-0.1H103.2z M103.2,45.3L103.2,45.3 c0.6,0.3,1,0.4,1.1,0.4h0.1v-0.1C104.4,45.6,104,45.5,103.2,45.3L103.2,45.3z M103.6,26.9c0,0.3-0.1,0.4-0.4,0.4 c0,0.1,0.1,0.1,0.1,0.1c0,0,0-0.1,0.1-0.1c0,0.1,0.1,0.1,0.2,0.2c0,0,0.1-0.1,0.2-0.2c0,0,0-0.1-0.1-0.1l0.1-0.4v-0.1H103.6z M103.3,35.6c0,0.1,0,0.2-0.1,0.3h0.1l0.1-0.1C103.4,35.7,103.4,35.6,103.3,35.6L103.3,35.6z M103.3,2.6L103.3,2.6 c0.2,0,0.2,0,0.2-0.1h-0.1C103.4,2.5,103.3,2.5,103.3,2.6z M103.3,25.6L103.3,25.6l0.2,0.1c0.2-0.1,0.3-0.1,0.4-0.1h0.2 c0-0.1,0-0.2,0.1-0.3h-0.1C104.1,25.2,103.8,25.4,103.3,25.6z M103.3,25.9V26l0.4,0.1v-0.1L103.3,25.9z M103.3,28.9V29 c0.1,0.1,0.1,0.2,0.1,0.4c0.1,0,0.2-0.1,0.3-0.3V29C103.6,29,103.5,29,103.3,28.9z M103.5,31.5c0,0.1,0,0.2-0.1,0.4h0.1 c0.1,0,0.2-0.1,0.2-0.1v-0.1C103.7,31.6,103.6,31.6,103.5,31.5z M103.4,3.3c0.1,0.4,0.4,0.6,0.7,0.6c0.1,0,0.2-0.1,0.2-0.1V3.7 c-0.2,0-0.4,0-0.4-0.1V3.5c0.2,0,0.3-0.1,0.3-0.2V3.2h-0.1c-0.1,0.1-0.3,0.1-0.5,0.1V3.2h-0.1L103.4,3.3z M103.4,10.1 c0,0.1,0.1,0.1,0.1,0.1v-0.1h0.4l0.2,0.1c0.1-0.1,0.2-0.1,0.3-0.1v-0.1c-0.3,0-0.5,0-0.5-0.1C103.7,10.1,103.5,10.1,103.4,10.1z M103.4,28v0.1h0.1c0.1,0,0.1,0,0.1-0.1c0,0-0.1,0-0.1-0.1C103.5,28,103.4,28,103.4,28z M103.4,32.9L103.4,32.9l0.1,0.1v-0.1H103.4 z M103.5,27.6L103.5,27.6c0,0.2,0.1,0.2,0.1,0.2v-0.1C103.6,27.7,103.6,27.6,103.5,27.6z M103.5,42.8L103.5,42.8l0.3,0.1 c0-0.1-0.1-0.2-0.1-0.2h-0.1C103.5,42.6,103.5,42.7,103.5,42.8z M103.5,13.5L103.5,13.5l0.5,0.1v-0.1H103.5z M103.5,15.5 L103.5,15.5l0.3,0.1v-0.1H103.5z M103.5,19.3v0.1c0,0.1,0.1,0.1,0.2,0.2l0.1-0.1C103.8,19.4,103.7,19.3,103.5,19.3L103.5,19.3z M103.5,23.3v0.4h0.1c0-0.1,0.1-0.2,0.2-0.4v-0.1L103.5,23.3z M103.5,35.5L103.5,35.5l0.1,0.1v-0.1H103.5z M103.6,8.9 c0,0.1,0.1,0.1,0.1,0.1V8.9H103.6z M103.7,13.2l-0.1,0.1l0.1,0.1l0.1-0.1L103.7,13.2z M103.6,48c0,0.1,0.1,0.1,0.1,0.1 c0-0.1,0.1-0.2,0.4-0.2c0-0.1,0-0.1-0.1-0.1C103.8,47.9,103.7,48,103.6,48z M103.7,14.5v0.1h0.1c0.1,0,0.1,0,0.1-0.1H103.7z M103.7,16v0.1h0.1L103.7,16L103.7,16z M103.7,38.2v0.1h0.1L103.7,38.2L103.7,38.2z M103.7,41.6l-0.1,0.1l0.1,0.1 c0.1,0,0.2-0.1,0.2-0.1v-0.1L103.7,41.6z M103.7,42.9V43h0.1L103.7,42.9L103.7,42.9z M103.7,43.2v0.1h0.1L103.7,43.2L103.7,43.2z M103.7,43.6L103.7,43.6l0.3,0.1v-0.1H103.7z M103.7,18.1L103.7,18.1l0.1,0.2c0.2-0.1,0.3-0.1,0.4-0.1v-0.2h-0.1 C104,18,103.9,18.1,103.7,18.1z M103.7,30v0.4h0.2l-0.1-0.4H103.7z M103.7,31.4L103.7,31.4c0,0.2,0.1,0.2,0.2,0.2l0.5-0.1v-0.1 h-0.1l-0.4,0.1C103.9,31.5,103.8,31.4,103.7,31.4z M103.7,46.3v0.1c0.1,0,0.1,0,0.1,0.1c0.1,0,0.2-0.1,0.2-0.1c0-0.1,0-0.1-0.1-0.1 H103.7z M103.8,4.4c0.1,0,0.4,0.1,0.8,0.1c0.1,0,0.2-0.1,0.3-0.1c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1V4.4c-0.3,0-0.5-0.1-0.8-0.3 C104,4.1,103.8,4.2,103.8,4.4z M103.9,10.8L103.9,10.8L103.9,10.8c0.2,0,0.3,0,0.4,0v-0.2C104.1,10.8,104,10.8,103.9,10.8z M103.9,15.3L103.9,15.3l0.1,0.1v-0.1H103.9z M103.9,28.6L103.9,28.6l0.2,0.1v-0.1H103.9z M103.9,48.9V49c0.1,0,0.3,0,0.6,0.1 l0.1-0.1v-0.1H103.9z M104,1.3c0,0.1,0.1,0.1,0.2,0.2c0.1,0,0.1,0,0.1-0.1V1.3H104z M104,4.6v0.1h0.4V4.7 C104.3,4.7,104.2,4.7,104,4.6z M104,12.9V13h0.1v-0.1H104z M104,21.3c0,0.1,0.1,0.1,0.1,0.1h0.2v-0.1L104,21.3z M104,35.1 c0.1,0.2,0.3,0.4,0.4,0.4c0.1,0,0.2-0.1,0.2-0.1c0-0.1-0.2-0.2-0.5-0.3H104z M104,41.4L104,41.4c0.2,0.1,0.4,0.1,0.4,0.1 c0-0.1-0.1-0.2-0.1-0.3C104.2,41.4,104.1,41.4,104,41.4z M104.2,13.1l-0.1-0.1v0.1l0.1,0.4h0.2c0.1,0,0.1-0.1,0.2-0.2 c0,0-0.1,0-0.1-0.1c0.1,0,0.2-0.1,0.2-0.1V13h-0.3L104.2,13.1z M104.1,8.4L104.1,8.4c0.1,0.1,0.2,0.1,0.3,0.2h0.1V8.5 C104.3,8.5,104.3,8.5,104.1,8.4L104.1,8.4z M104.1,15.3v0.1c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.1-0.1L104.1,15.3z M104.2,15.8 c0,0.1,0,0.4-0.1,0.8l0.1,0.1h0.1c0.1-0.2,0.3-0.4,0.4-0.4l-0.2-0.3c0-0.1,0.1-0.2,0.1-0.2H104.2z M104.1,17.2 c0.1,0.2,0.1,0.3,0.2,0.3h0.1c0-0.1-0.1-0.2-0.1-0.4C104.2,17.2,104.1,17.2,104.1,17.2z M104.1,18.9L104.1,18.9 c0,0.1,0.1,0.2,0.4,0.4h0.2C104.7,19.2,104.5,19.1,104.1,18.9z M104.1,38.3L104.1,38.3l0.4,0.1v-0.1c0,0-0.1,0-0.2-0.1 C104.2,38.2,104.1,38.3,104.1,38.3z M104.2,6.5L104.2,6.5l0.2,0.1V6.5H104.2z M104.4,22.5c0,0.1-0.1,0.1-0.2,0.1v0.1h0.2 c0-0.1,0.1-0.1,0.2-0.1v-0.1H104.4z M104.2,32.8L104.2,32.8l0.1,0.1v-0.1H104.2z M104.2,27.2L104.2,27.2c0,0.2,0.1,0.2,0.1,0.2 l0.1-0.1v-0.1H104.2z M104.2,28.6L104.2,28.6l0.4,0.1v-0.1L104.2,28.6z M104.2,36.6L104.2,36.6l0.3,0.1v-0.1H104.2z M104.2,46.3 L104.2,46.3l0.1,0.1v-0.1H104.2z M104.3,19.8L104.3,19.8l0.1,0.1v-0.1H104.3z M104.4,42.1l-0.1,0.2h0.1c0.1-0.1,0.2-0.1,0.3-0.1 v-0.1H104.4z M104.4,14.1L104.4,14.1l0.3,0.1v-0.1C104.6,14.1,104.5,14.1,104.4,14.1z M104.4,44.8v0.1h0.1 C104.5,44.8,104.5,44.8,104.4,44.8z M104.4,1.1v0.1h0.3V1.2C104.6,1.2,104.5,1.2,104.4,1.1z M104.4,13.9L104.4,13.9l0.1,0.1v-0.1 H104.4z M104.4,27L104.4,27l0.1,0.1V27H104.4z M104.5,18.1L104.5,18.1l0.1,0.1v-0.1H104.5z M104.6,2.5c0,0.1,0.1,0.1,0.1,0.1V2.5 H104.6z M104.6,3.4L104.6,3.4l0.1,0.1V3.4H104.6z M104.6,17.8L104.6,17.8l0.1,0.1v-0.1H104.6z M104.6,31.9v0.1h0.1L104.6,31.9 L104.6,31.9z M104.6,46.1l0.1,0.1c0.1-0.1,0.4-0.2,0.9-0.2c0-0.1,0-0.1-0.1-0.1C104.9,45.9,104.6,46,104.6,46.1z M104.8,7.5 c0,0.1,0,0.1-0.1,0.1c0,0.1,0.1,0.1,0.1,0.1h0.1c0-0.1,0-0.1,0.1-0.1C105,7.5,105,7.5,104.8,7.5L104.8,7.5z M104.7,34.5 c0,0.1,0.1,0.1,0.2,0.2c0-0.1,0.1-0.1,0.2-0.1l-0.1-0.1C104.9,34.5,104.8,34.5,104.7,34.5z M104.7,35.3v0.1h0.1L104.7,35.3 L104.7,35.3z M104.7,42.7v0.1h0.3v-0.1L104.7,42.7z M104.7,44.2L104.7,44.2l0.1,0.1v-0.1H104.7z M104.7,5.9h0.1 c0,0.1,0,0.1-0.1,0.1V5.9z M104.7,22.5L104.7,22.5l0.4,0.1v-0.1H104.7z M104.7,38.7L104.7,38.7l0.1,0.1v-0.1H104.7z M104.8,20.7 v0.1c0.1,0,0.1,0,0.1-0.1H104.8z M104.8,42.4L104.8,42.4l0.1,0.1v-0.1H104.8z M104.8,43.6v0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1H104.8z M104.8,48.9L104.8,48.9c0,0.2,0.3,0.3,0.8,0.3c0.1,0,0.2-0.1,0.3-0.3h-0.1l-0.4,0.1c0-0.1-0.1-0.2-0.1-0.2 C105.3,48.8,105.1,48.9,104.8,48.9z M104.9,1.3L104.9,1.3l0.1,0.1V1.3H104.9z M104.9,2.7h0.2V2.5H105 C104.9,2.5,104.9,2.6,104.9,2.7z M104.9,7.1L104.9,7.1l0.1,0.1V7.1H104.9z M104.9,8.4v0.1h0.1V8.4H104.9z M104.9,3.2 c0,0.1,0.1,0.1,0.1,0.1h0.3V3.2H104.9z M105,48.2v0.2h0.3l0.6-0.4v-0.1h-0.2C105.4,48.1,105.2,48.2,105,48.2z M105.1,47.4v0.1h0.1 v-0.1H105.1z M105.2,46.5L105.2,46.5l0.3,0.1v-0.1H105.2z M105.2,47L105.2,47c0,0.2,0.1,0.2,0.1,0.2l0.1-0.2H105.2z M105.3,3.4v0.1 c0.1,0,0.1,0,0.1-0.1H105.3z M105.4,1.9V2h0.1c0.1,0,0.1,0,0.1-0.1H105.4z M105.6,3.6v0.2c0.1,0,0.1-0.1,0.2-0.2H105.6z M105.6,46.5v0.1h0.1L105.6,46.5L105.6,46.5z M105.6,48.7L105.6,48.7l0.1,0.1v-0.1H105.6z M105.6,45.6L105.6,45.6l0.1,0.1v-0.1 H105.6z M105.9,1.3l-0.1,0.1c0,0.1,0.1,0.1,0.1,0.1c0,0,0-0.1,0.1-0.2L105.9,1.3z M105.9,47.5v0.1h0.2c0.1,0,0.1,0,0.1-0.1H105.9z M106.1,0.8L106,0.9V1h0.1c0.1,0,0.1,0,0.1-0.1L106.1,0.8z M106,48.4L106,48.4l0.1,0.1v-0.1H106z M106.2,47.1L106.2,47.1l0.1,0.1 v-0.1H106.2z M106.3,2.1c0,0.1,0.1,0.1,0.1,0.1h0.1V2.1H106.3z M106.4,47v0.4h0.1c0.1,0,0.2-0.1,0.4-0.4l-0.1-0.1L106.4,47z M106.5,4.4L106.5,4.4l0.1,0.1h-0.1V4.4z M106.6,48.4L106.6,48.4l0.1,0.1v-0.1H106.6z M106.8,1.3L106.8,1.3l0.1,0.1V1.3H106.8z M106.8,3.3L106.8,3.3l0.1,0.1V3.3H106.8z M106.8,49v0.1l0.5,0.1c0.1,0,0.2-0.1,0.2-0.1V49l-0.4,0.1c0-0.1-0.1-0.2-0.1-0.3 C106.9,48.9,106.8,48.9,106.8,49z M107,46.9L107,46.9l0.1,0.1v-0.1H107z M107.2,2.7c0,0.1,0.1,0.1,0.2,0.1h0.1V2.8L107.2,2.7z M107.3,47.3c0.1,0.2,0.1,0.3,0.2,0.3c0.1-0.1,0.2-0.1,0.3-0.1v-0.1C107.7,47.4,107.5,47.4,107.3,47.3z M107.4,1.5L107.4,1.5 l0.3,0.1V1.5H107.4z M108.3,3.4c0,0.1-0.1,0.2-0.3,0.2c-0.1,0-0.2-0.1-0.2-0.1h-0.1v0.1l0.4,0.1h0.2c0.1,0,0.1,0,0.1-0.1V3.4H108.3 z M108,48.4l-0.1,0.3l0.1,0.1c0.1,0,0.1-0.1,0.2-0.2v-0.1C108.1,48.5,108.1,48.5,108,48.4z M107.9,2.4L107.9,2.4l0.1,0.2l0.1-0.1 h0.1l0.1,0.1V2.5C108.2,2.5,108.1,2.4,107.9,2.4z M108,47.7v0.1h0.1L108,47.7L108,47.7z M108,21.6v0.1c0.1,0.1,0.1,0.2,0.1,0.3 c0.1,0,0.2-0.1,0.3-0.4v-0.1h-0.1L108,21.6z M108.4,20L108.4,20l0.1,0.1V20H108.4z M108.4,20.7L108.4,20.7l0.1,0.1v-0.1H108.4z M108.9,2.3l-0.2-0.1c-0.1,0-0.1,0.1-0.2,0.3l0.1,0.1l0.1-0.1c0,0.1,0.1,0.1,0.1,0.1l0.4-0.4V2h-0.1L108.9,2.3z M108.6,46.1 L108.6,46.1c0.1,0.1,0.2,0.1,0.4,0.2h0.2v-0.2H108.6z M108.7,46.9L108.7,46.9l0.2,0.1v-0.1H108.7z M108.8,2.7v0.1h0.1V2.7H108.8z M108.9,2.6L108.9,2.6l0.1,0.1V2.6H108.9z M109,1.2L109,1.2l0.1,0.1V1.2H109z M109.1,18.2c0,0.1,0.1,0.1,0.1,0.1 c0.1,0,0.1,0,0.1-0.1H109.1z M109.2,4.3v0.3c0.2-0.1,0.4-0.2,0.6-0.2c0-0.1,0-0.1-0.1-0.1L109.2,4.3z M110.2,8.6 c0,0.1-0.1,0.2-0.4,0.2c0-0.1,0-0.1-0.1-0.1h-0.1l-0.4,0.1c0,0.2,0.3,0.4,1,0.6l0.1-0.1c-0.2,0-0.3,0-0.3-0.1l0.1-0.1 c0.1,0,0.3,0.1,0.7,0.3v0.1h-0.4v0.1c0.1,0,0.2,0,0.4,0.1c0.1,0,0.2-0.1,0.3-0.3c0-0.1,0-0.1-0.1-0.1l-0.1,0.1 c-0.3-0.3-0.4-0.5-0.4-0.6H110.2z M109.2,21.5l0.1,0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1H109.2z M109.5,1c0,0.1-0.1,0.2-0.2,0.2v0.1 c0.1,0,0.2,0.1,0.4,0.2c0-0.2,0-0.3,0.1-0.3c0.1,0,0.2,0.1,0.2,0.1l-0.1-0.1c0.1,0,0.1,0,0.1-0.1H109.5z M109.4,5.9 C109.4,5.9,109.4,5.9,109.4,5.9c0.2,0,0.2,0,0.3,0V5.8h-0.1C109.4,5.8,109.4,5.8,109.4,5.9z M110.2,26.9l0.2,0.3 c-0.2,0.1-0.4,0.2-0.5,0.2c0,0,0-0.1-0.1-0.1c0,0-0.2,0.2-0.5,0.4l0.1,0.1h0.2c0.2,0,0.3-0.1,0.5-0.2h0.2v0.1h0.1 c0.1,0,0.2-0.2,0.2-0.5L110.2,26.9L110.2,26.9z M109.4,35.9h0.3v-0.1h-0.1C109.4,35.7,109.4,35.8,109.4,35.9z M109.4,5.2 c0,0.1,0.1,0.1,0.1,0.1V5.2H109.4z M109.4,18.9v0.1h0.4c0-0.1,0-0.1-0.1-0.1H109.4z M109.4,24v0.1h0.4v-0.1 C109.7,24.1,109.5,24.1,109.4,24z M109.4,29.3L109.4,29.3c0,0.2,0.1,0.2,0.1,0.2c0.1,0,0.2-0.1,0.2-0.1v-0.1L109.4,29.3z M109.4,30.7v0.1c0,0,0.1,0,0.2,0.1v-0.1C109.7,30.7,109.6,30.7,109.4,30.7L109.4,30.7z M110.9,32.2c0,0.1-0.1,0.4-0.4,0.6l0.1,0.1 v0.4h-0.3v-0.1h-0.2c0,0,0,0.1-0.1,0.2l-0.1-0.1h-0.3c-0.1,0-0.1,0.1-0.1,0.1c0.4,0,0.7,0.2,1.1,0.5h0.1v-0.1l-0.1-0.4 c0.2-0.1,0.3-0.1,0.4-0.1l0.1,0.1c0.1,0,0.2-0.1,0.4-0.1v-0.1c-0.2,0-0.4-0.1-0.4-0.2v-0.1c0,0,0-0.1,0.1-0.1l-0.1-0.1 c0.1-0.4,0.1-0.6,0.1-0.7H110.9z M109.4,34.8V35c0.1,0,0.2,0,0.2,0.1l0.1-0.1l0.5,0.1l0.1-0.1l-0.1-0.1h-0.1l-0.1,0.1l-0.1-0.1 c0,0,0.1,0,0.1-0.1l-0.2-0.1C109.6,34.8,109.5,34.8,109.4,34.8z M109.4,47.2v0.2h0.5v-0.3L109.4,47.2z M109.5,1.5L109.5,1.5 l0.1,0.1V1.5H109.5z M110,4.4c0,0.2-0.2,0.3-0.5,0.5l0.6,0.1c0-0.2,0.1-0.4,0.3-0.6l-0.1-0.1H110z M109.5,6.3L109.5,6.3l0.1,0.1 V6.3H109.5z M109.5,28.1L109.5,28.1l0.3,0.1v-0.1H109.5z M109.8,28.7c0,0-0.1,0.2-0.3,0.4c0,0,0.1,0,0.1,0.1 c0.2-0.1,0.4-0.1,0.4-0.2v-0.1C109.9,28.7,109.9,28.7,109.8,28.7z M109.5,46.7L109.5,46.7l0.1,0.1v-0.1H109.5z M109.6,32.1v0.1h0.1 L109.6,32.1L109.6,32.1z M109.6,41.4c0,0.1,0.1,0.1,0.1,0.1l0.1-0.1H109.6z M109.7,48.7c0,0,0,0.1-0.1,0.2h0.3v-0.1 C109.8,48.7,109.7,48.7,109.7,48.7z M109.7,7.5v0.1h0.3V7.5l-0.1-0.1C109.8,7.4,109.7,7.5,109.7,7.5z M109.7,21L109.7,21l0.1,0.1 V21H109.7z M109.8,25.7l-0.1,0.2V26h0.2c0.1-0.1,0.3-0.1,0.6-0.1v-0.1L109.8,25.7z M109.7,24.8V25h0.1c0.1-0.1,0.2-0.1,0.4-0.1 v-0.1L109.7,24.8L109.7,24.8z M109.7,26.4L109.7,26.4l0.1,0.1v-0.1H109.7z M109.7,39.7L109.7,39.7L109.7,39.7 c0.3,0,0.4-0.1,0.4-0.1l-0.1-0.1C109.9,39.4,109.8,39.5,109.7,39.7z M109.7,46.8L109.7,46.8l0.1,0.1v-0.1H109.7z M109.8,49.3 l-0.1,0.1l0.1,0.1h0.2v-0.1C110,49.4,109.9,49.4,109.8,49.3z M110,34.2c0,0.1-0.1,0.1-0.2,0.1v0.1h0.4v-0.1 C110.1,34.3,110.1,34.2,110,34.2z M109.9,4L109.9,4l0.1,0.1V4H109.9z M109.9,6.8V7h0.1c0.1,0,0.2-0.1,0.2-0.1V6.8H109.9z M109.9,18.4L109.9,18.4c0.1,0.1,0.2,0.1,0.4,0.2h0.1v-0.1L109.9,18.4L109.9,18.4z M109.9,21L109.9,21c0.1,0.1,0.2,0.1,0.3,0.1h0.1 v-0.1c0,0-0.1,0-0.2-0.1H109.9z M109.9,23.8h0.3c0-0.1,0-0.1-0.1-0.1C109.9,23.7,109.9,23.8,109.9,23.8z M109.9,26.6L109.9,26.6 l0.1,0.1v-0.1H109.9z M109.9,41.6L109.9,41.6l0.1,0.1v-0.1H109.9z M110,26.7v0.1h0.2C110.2,26.8,110.2,26.7,110,26.7L110,26.7z M110,42.4L110,42.4c0,0.1,0.1,0.1,0.2,0.1v-0.1H110z M110,43.9V44h0.1L110,43.9L110,43.9z M110.1,3.8c0.1,0.2,0.1,0.3,0.2,0.3 l0.4-0.1V3.8l-0.4-0.1C110.2,3.8,110.1,3.8,110.1,3.8z M110.1,18.1c0.1,0.2,0.2,0.3,0.2,0.3c0.1,0,0.2-0.1,0.2-0.1 C110.5,18.2,110.4,18.1,110.1,18.1z M110.1,24.1L110.1,24.1l0.1,0.2c0.1,0,0.2-0.1,0.4-0.1V24C110.4,24.1,110.2,24.1,110.1,24.1z M110.1,46.3L110.1,46.3l0.1,0.1v-0.1H110.1z M110.1,46.6L110.1,46.6l0.1,0.1v-0.1H110.1z M110.1,48.8h0.1c0.1,0,0.1,0,0.1-0.1 v-0.1h-0.1C110.2,48.6,110.1,48.7,110.1,48.8z M110.1,32.5c0.1,0.2,0.2,0.3,0.3,0.4v-0.1c0-0.1-0.1-0.2-0.1-0.3H110.1z M110.6,6.6 l-0.2-0.1h-0.1l-0.1,0.4h0.2L110.6,6.6l0.3,0.1v0.1h0.2V6.7c-0.1,0-0.1-0.1-0.1-0.3h-0.1L110.6,6.6z M110.3,30.1 c0.1,0,0.2,0.1,0.4,0.2l0.1-0.1c0-0.1-0.1-0.2-0.1-0.3h-0.1C110.4,29.9,110.4,30,110.3,30.1z M110.3,45.8L110.3,45.8 c0.7,0,1-0.1,1.1-0.1l-0.1-0.1v-0.1l0.1-0.1h-0.2C110.6,45.5,110.3,45.6,110.3,45.8z M110.4,2.9V3c0.1,0,0.1,0,0.1-0.1H110.4z M110.4,23.3L110.4,23.3l0.1,0.1v-0.1H110.4z M110.4,23.8L110.4,23.8l0.3,0.1v-0.1H110.4z M110.5,3.2l-0.1,0.1l0.4,0.1 c0.1,0,0.1-0.1,0.2-0.2h-0.1c-0.1,0-0.2,0.1-0.2,0.1C110.6,3.3,110.5,3.2,110.5,3.2z M110.5,25.7c0.3,0.3,0.5,0.4,0.6,0.4v0.1 l-0.4,0.4v0.1c0.3,0,0.5-0.3,0.6-0.8c-0.2,0-0.4-0.1-0.5-0.3h-0.1C110.5,25.5,110.5,25.6,110.5,25.7z M110.6,35.2L110.6,35.2 l0.1,0.1v-0.1H110.6z M110.6,36v0.2h0.2c0.1,0,0.1,0,0.1-0.1C110.8,36.1,110.6,36,110.6,36z M110.9,23c0,0.1-0.1,0.2-0.3,0.2 l0.1,0.1c0,0.1-0.1,0.2-0.1,0.2l0.1,0.1c0.1-0.2,0.3-0.3,0.6-0.3l-0.1-0.1V23H110.9z M110.6,26.9v0.1h0.1c0.1,0,0.1,0,0.1-0.1 H110.6z M110.6,30.6v0.1c0,0,0.1,0,0.2,0.1v-0.4C110.8,30.4,110.7,30.4,110.6,30.6z M110.6,44.7L110.6,44.7c0,0.1,0.2,0.1,0.4,0.1 c0.1,0,0.2-0.1,0.2-0.1c0-0.1,0-0.1-0.1-0.1C110.9,44.7,110.8,44.7,110.6,44.7z M110.7,0.4h0.1v0.1C110.8,0.5,110.7,0.4,110.7,0.4z M112,3.5l-0.4-0.1c-0.1,0-0.2,0.1-0.3,0.1v0.1h0.4c-0.1,0.4-0.2,0.6-0.4,0.6h-0.1l-0.4-0.1l-0.1,0.2c0.1,0,0.3,0,0.6,0.1l0.7-0.6 c0.4,0,0.6-0.1,0.6-0.4c0,0-0.1,0-0.1-0.1l-0.3,0.1l-0.1-0.1c0,0,0.1,0,0.1-0.1h-0.1C112,3.3,112,3.4,112,3.5z M110.7,30.9v0.1h0.1 v-0.1H110.7z M110.8,7.4h0.1V7.2C110.8,7.3,110.8,7.3,110.8,7.4z M110.8,27.6L110.8,27.6c0.1,0.2,0.1,0.3,0.1,0.4h0.1 c0,0,0-0.1,0.1-0.2L110.8,27.6L110.8,27.6z M110.8,6.9c0,0.1,0.1,0.1,0.1,0.1V6.9H110.8z M110.8,38.4L110.8,38.4l0.3,0.1v-0.1h-0.1 C111,38.4,110.9,38.4,110.8,38.4z M110.8,42.6v0.1h0.1l0.4-0.1v-0.1H110.8z M110.9,1.3v0.1l0.5,0.1c0.1,0,0.1,0,0.1-0.1L110.9,1.3z M110.9,5.6h0.2V5.4l0.4,0.1c0-0.1,0.1-0.3,0.4-0.6h-0.2c-0.2,0.1-0.3,0.3-0.5,0.6C111,5.4,110.9,5.5,110.9,5.6z M110.9,28.1v0.1 h0.3c0-0.1,0-0.1-0.1-0.1H110.9z M110.9,34.7L110.9,34.7l0.2,0.1v-0.1H110.9z M111.1,2.3L111,2.4h0.4V2.3L111.1,2.3z M111,29.1 L111,29.1c0,0.3,0.1,0.5,0.4,0.5c0-0.1,0-0.2,0.1-0.3l-0.3-0.2H111z M111,30.8L111,30.8l0.2,0.1v-0.1C111.1,30.8,111,30.8,111,30.8 z M111,33.8c0,0.1,0.1,0.1,0.1,0.1h0.1v-0.1H111z M111.7,24h-0.3l-0.1-0.1c0,0.1-0.1,0.2-0.2,0.2c0,0.1,0.1,0.1,0.1,0.1 c0,0,0.2,0,0.4-0.1c0.1,0,0.3,0,0.6,0.1c0-0.1,0.2-0.2,0.7-0.3l0.2-0.2v-0.1l-0.5,0.1l-0.2-0.1L111.7,24z M111.1,40.5L111.1,40.5 c0,0.2,0.1,0.2,0.2,0.2h0.1v-0.1C111.3,40.6,111.2,40.6,111.1,40.5z M111.1,43L111.1,43l0.1,0.1V43H111.1z M111.1,26.7 c0,0.1,0.1,0.2,0.4,0.4c0-0.1,0.1-0.2,0.2-0.2v-0.1c0,0-0.1,0-0.2-0.1l-0.1,0.1C111.3,26.7,111.2,26.7,111.1,26.7z M111.1,31.4 L111.1,31.4l0.2,0.1c0.1,0,0.1,0,0.1-0.1h-0.1C111.2,31.3,111.2,31.4,111.1,31.4z M111.1,43.7l0.1,0.1c0.3-0.4,0.4-0.7,0.4-0.8 h-0.1C111.5,43,111.3,43.3,111.1,43.7z M112,7.1c-0.1,0-0.2-0.1-0.3-0.1c0,0.3-0.1,0.5-0.4,0.5v0.1c0.2,0,0.4,0,0.4,0.1l-0.1,0.2 c0.2,0,0.3,0.1,0.3,0.2c-0.2,0-0.4,0.1-0.6,0.1v0.1c0.6,0,0.8,0,0.8,0.1c0.1-0.1,0.4-0.1,0.7-0.1l-0.1-0.1c0.1,0,0.2,0,0.2-0.1V7.8 c0-0.1,0-0.1-0.1-0.1h-0.1l-0.2,0.1c0-0.1,0-0.1-0.1-0.1l0.1-0.3h-0.4V7.3c0.4-0.5,0.7-0.8,0.8-0.8V6.3h-0.2 C112.3,6.5,112.1,6.8,112,7.1L112,7.1z M111.2,29h0.2c0.1,0,0.1,0,0.1-0.1v-0.1h-0.1C111.3,28.9,111.2,29,111.2,29z M111.2,38.3 h0.1v-0.1C111.2,38.2,111.2,38.2,111.2,38.3z M111.2,47.3c0,0.1,0.1,0.1,0.1,0.1h0.3c0,0,0-0.1,0.1-0.2c-0.1,0-0.1,0-0.1-0.1 C111.4,47.3,111.3,47.3,111.2,47.3z M111.8,33.5c-0.1,0.2-0.3,0.4-0.5,0.4l0.1,0.1l-0.1,0.2l0.4-0.1c0,0,0.1,0,0.1,0.1 c0.1,0,0.3-0.2,0.6-0.6h0.2v-0.1C112.3,33.6,112.1,33.6,111.8,33.5z M111.3,28.7L111.3,28.7l0.1,0.1v-0.1H111.3z M111.3,32.1 L111.3,32.1c0.1,0.3,0.1,0.4,0.2,0.4h0.1c0.1,0,0.1,0,0.1-0.1l-0.3-0.2H111.3z M111.3,37.3L111.3,37.3c0.7-0.2,1-0.4,1.1-0.4 c0,0,0,0.1,0.1,0.1V37c-0.1-0.1-0.1-0.2-0.1-0.3h-0.1C111.7,37,111.4,37.2,111.3,37.3z M111.3,42.6v0.1c0.1,0,0.1,0,0.1-0.1H111.3z M111.4,35.3l0.1,0.2l-0.1,0.1l0.1,0.1h0.2c0-0.1,0-0.2,0.1-0.2v-0.1h-0.2L111.4,35.3z M111.5,18.4h0.1v-0.1 C111.5,18.3,111.5,18.3,111.5,18.4z M111.5,19.5c0.2,0.3,0.4,0.5,0.6,0.6l0.1-0.1v-0.1c-0.2,0-0.4-0.1-0.5-0.4H111.5z M111.8,28.8 l-0.2,0.3c0.1,0,0.1,0,0.1,0.1c0.2-0.1,0.4-0.1,0.5-0.1v-0.1L111.8,28.8z M111.6,46.4L111.6,46.4l0.1,0.1v-0.1H111.6z M111.7,1.6 v0.3c0.1,0,0.3,0.1,0.5,0.2c0.1,0,0.2-0.1,0.3-0.3h-0.1l-0.1,0.1C112.1,1.9,112,1.8,111.7,1.6L111.7,1.6z M111.7,18.4v0.1 c0.2,0,0.4,0,0.6,0.1c0.1,0,0.2-0.1,0.2-0.1v-0.1c-0.4,0-0.6,0-0.6-0.1C111.8,18.4,111.7,18.4,111.7,18.4z M111.8,5.9h0.1V5.8 C111.8,5.8,111.8,5.8,111.8,5.9z M111.8,6c0,0.1,0.1,0.1,0.1,0.1V6H111.8z M112.1,7.4v0.2c-0.1,0.2-0.2,0.4-0.3,0.4h-0.1V7.9 C111.9,7.5,112,7.4,112.1,7.4z M111.8,8.6l0.1,0.1c0.1,0,0.2-0.1,0.3-0.1V8.6H111.8z M111.8,23.3L111.8,23.3l0.1,0.1v-0.1H111.8z M111.8,28.1L111.8,28.1l0.1,0.1v-0.1H111.8z M111.8,26.3L111.8,26.3l0.1,0.1v-0.1H111.8z M111.8,30.9V31c0.1,0,0.1,0,0.1-0.1 H111.8z M111.8,32.3L111.8,32.3l0.1,0.1v-0.1H111.8z M111.8,33.3v0.1c0.1,0,0.1,0,0.1-0.1H111.8z M111.8,37.7l0.1,0.1 c0,0,0-0.1,0.1-0.2H112C111.9,37.6,111.8,37.6,111.8,37.7z M111.9,4.5v0.2h0.1c0.1,0,0.1,0,0.1-0.1V4.5H111.9z M111.9,46.5 c0,0.1,0.1,0.1,0.1,0.1h0.4v-0.1L111.9,46.5L111.9,46.5z M112,31.8l-0.1,0.1l0.1,0.1h0.2C112.3,31.9,112.2,31.9,112,31.8z M112.3,7.8h0.2l0.1,0.4c-0.1,0-0.2,0.1-0.2,0.1c-0.1,0-0.2-0.1-0.2-0.1V8h0.2L112.3,7.8L112.3,7.8z M112.1,9.5 c0,0.1,0.1,0.1,0.1,0.1h0.1V9.5H112.1z M112.2,27.2C112.2,27.3,112.2,27.3,112.2,27.2v0.2l-0.1,0.1l0.3,0.1c0.1,0,0.2-0.1,0.2-0.1 v-0.1C112.4,27.5,112.3,27.4,112.2,27.2z M112.3,38.3c-0.1,0.2-0.1,0.3-0.1,0.4c0,0,0.1,0,0.1,0.1c0.3-0.1,0.5-0.2,0.6-0.2 C112.8,38.3,112.6,38.3,112.3,38.3z M112.2,5.3L112.2,5.3l0.1,0.1V5.3H112.2z M112.3,45.9L112.3,45.9l0.1,0.1v-0.1H112.3z M112.3,37.3L112.3,37.3c0,0.2,0.1,0.2,0.1,0.2h0.1c0.1,0,0.1,0,0.1-0.1L112.3,37.3z M112.3,38L112.3,38l0.1,0.1V38H112.3z M112.4,36.3c0,0.1,0.1,0.1,0.1,0.1c0.1,0,0.1,0,0.1-0.1s0-0.1-0.1-0.1C112.4,36.2,112.4,36.2,112.4,36.3z M112.4,44.3v0.1 c0.1,0,0.1,0,0.1-0.1H112.4z M112.5,33.2l-0.1,0.1c0,0.1,0.1,0.1,0.1,0.1c0-0.1,0.1-0.1,0.2-0.1v-0.1 C112.7,33.2,112.6,33.2,112.5,33.2z M112.5,34.8h0.1v-0.1C112.5,34.7,112.5,34.7,112.5,34.8z M112.5,30.4v0.1h0.1L112.5,30.4 L112.5,30.4z M112.5,35.2h0.1c0.1,0,0.2-0.1,0.2-0.4h-0.1C112.7,34.9,112.6,35,112.5,35.2z M112.7,3.7L112.6,4l0.1,0.1 c0.1,0,0.2-0.1,0.3-0.1l0.1,0.1c0,0-0.1,0-0.1,0.1h0.1c0-0.1,0-0.1,0.1-0.1V3.9C113.1,3.9,112.9,3.9,112.7,3.7L112.7,3.7z M112.6,23L112.6,23c0.1,0.4,0.3,0.5,0.6,0.6c0-0.1,0.1-0.1,0.1-0.1h0.1v0.1h0.4v-0.1c-0.1-0.2-0.1-0.3-0.2-0.3l-0.1,0.1 c-0.2,0-0.3-0.1-0.3-0.3l-0.4,0.1h-0.1L112.6,23z M112.6,26.4h0.6c0.3-0.2,0.5-0.3,0.5-0.4h-0.1C113.4,26.2,113,26.3,112.6,26.4 L112.6,26.4z M112.6,32.9v0.2c0.1,0,0.1-0.1,0.2-0.2H112.6z M112.7,24.5L112.7,24.5c0,0.1,0.1,0.2,0.2,0.3l0.1-0.1 c0-0.1,0-0.1-0.1-0.1H112.7z M112.7,26.6L112.7,26.6l0.1,0.1v-0.1H112.7z M112.7,40.5c0,0.1,0.1,0.1,0.1,0.1h0.1 c0-0.1,0-0.1-0.1-0.1H112.7z M112.7,6l0.4,0.1c0.1,0,0.2-0.1,0.2-0.1c0-0.1,0-0.1-0.1-0.1h-0.3C112.8,5.9,112.7,6,112.7,6z M112.8,37.3l-0.1,0.1h0.6v-0.1h-0.1l-0.1,0.1C113.1,37.3,113,37.3,112.8,37.3z M112.7,43.9v0.1h0.3c0-0.1,0-0.1-0.1-0.1H112.7z M112.8,5.3L112.8,5.3l0.2,0.1V5.3H112.8z M112.8,20.5L112.8,20.5l0.1,0.1v-0.1H112.8z M112.8,36.1h0.2v-0.1H113 C112.9,35.9,112.8,36,112.8,36.1z M113,45.4L113,45.4l0.1,0.2c-0.1,0-0.2,0.1-0.2,0.1v0.1h0.3c0.1,0,0.1,0,0.1-0.1v-0.1 C113.2,45.5,113.1,45.4,113,45.4z M112.9,18.4L112.9,18.4l0.4,0.1l0.4-0.1c0,0.1,0.1,0.1,0.1,0.1v-0.1c0-0.1,0-0.1-0.1-0.1H113 C112.9,18.2,112.9,18.3,112.9,18.4z M113,35.4c0,0.1,0,0.2-0.1,0.2c0,0.1,0.1,0.2,0.1,0.2c0.1,0,0.2-0.1,0.2-0.1v-0.1 C113.1,35.6,113,35.5,113,35.4L113,35.4z M113.2,2.5c0,0.1-0.1,0.2-0.1,0.2c0,0.1,0.1,0.2,0.1,0.3c0.1,0,0.2-0.1,0.2-0.4L113.2,2.5 z M113.1,25.1h0.1V25C113.1,25,113.1,25,113.1,25.1z M113.1,34.9L113.1,34.9l0.2,0.1l0.1-0.1h-0.1 C113.2,34.9,113.1,34.9,113.1,34.9z M113.1,47.4h0.1v-0.1C113.1,47.3,113.1,47.3,113.1,47.4z M113.2,21v0.1l0.1,0.1 c0.2,0,0.4-0.1,0.5-0.1v-0.1c-0.1,0-0.2,0-0.3-0.1H113.2z M113.3,3.6L113.3,3.6l0.1,0.1V3.6H113.3z M113.3,33.5L113.3,33.5 c0.2-0.1,0.4-0.1,0.4-0.1v-0.1h-0.1C113.4,33.4,113.3,33.5,113.3,33.5z M113.3,39.6v0.1h0.1L113.3,39.6L113.3,39.6z M113.4,26.4 L113.4,26.4l0.2,0.1v-0.1H113.4z M113.4,42.3L113.4,42.3l0.2,0.1v-0.1H113.4z M113.4,5.8v0.1h0.1c0.1,0,0.1,0,0.1-0.1H113.4z M113.4,30.4h0.4c0-0.1,0-0.1-0.1-0.1h-0.1C113.5,30.2,113.4,30.3,113.4,30.4z M113.5,27.8h0.1v0.1L113.5,27.8L113.5,27.8z M113.5,34.9V35h0.2v-0.1H113.5z M113.7,22.4v0.3c0.1,0,0.1,0,0.1-0.1v-0.1H113.7z M113.7,29.4v0.1h0.1 C113.8,29.4,113.8,29.4,113.7,29.4z M113.7,35.9V36c0.1,0,0.1,0,0.1-0.1H113.7z M113.7,44.4L113.7,44.4l0.1,0.1v-0.1H113.7z"
              },
              void 0,
              !1,
              {
                fileName: "app/ui/components/Preloader.tsx",
                lineNumber: 64,
                columnNumber: 15
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/ui/components/Preloader.tsx",
            lineNumber: 39,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/ui/components/Preloader.tsx",
          lineNumber: 31,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/ui/components/Preloader.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/ui/components/Preloader.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this) }, void 0, !1, {
      fileName: "app/ui/components/Preloader.tsx",
      lineNumber: 17,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/ui/components/Preloader.tsx",
    lineNumber: 9,
    columnNumber: 3
  },
  this
);

// app/ui/components/Stack/index.tsx
import { useEffect as useEffect12 } from "react";

// app/assets/img/stack-heading.svg
var stack_heading_default = "/build/_assets/stack-heading-ZOPFLVVX.svg";

// app/assets/img/skelly.svg
var skelly_default = "/build/_assets/skelly-RE5E4ZTX.svg";

// app/ui/components/Stack/index.tsx
import { jsxDEV as jsxDEV33 } from "react/jsx-dev-runtime";
var Stack = ({ animateStack: animateStack2 }) => (useEffect12(() => {
  animateStack2();
}, [animateStack2]), /* @__PURE__ */ jsxDEV33(Container, { as: "section", className: "section", id: "stack", paddingY: { xs: 0, lg: 86 }, children: /* @__PURE__ */ jsxDEV33(Container, { variant: "wrap", maxHeight: { xl: 708 }, children: [
  /* @__PURE__ */ jsxDEV33(Grid, { templateColumns: "12", marginBottom: 18, children: /* @__PURE__ */ jsxDEV33(
    Img,
    {
      src: stack_heading_default,
      alt: "Stack/Technologies",
      gridColumn: { xs: "3", lg: "2" },
      gridColumnStart: { lg: "3" },
      width: toRem(200),
      css: {
        maxWidth: toRem(200)
      }
    },
    void 0,
    !1,
    {
      fileName: "app/ui/components/Stack/index.tsx",
      lineNumber: 19,
      columnNumber: 11
    },
    this
  ) }, void 0, !1, {
    fileName: "app/ui/components/Stack/index.tsx",
    lineNumber: 18,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ jsxDEV33(Grid, { templateColumns: "12", children: [
    /* @__PURE__ */ jsxDEV33(
      Text,
      {
        as: "p",
        gridColumn: { xs: "12", lg: "7" },
        gridColumnStart: { lg: "3" },
        marginTop: { xs: 20 },
        fontFamily: "secondary",
        lineHeight: { xs: "tight", sm: "none" },
        fontSize: { xs: "2xl", sm: "3xl", md: "4xl" },
        children: "JAVASCRIPT, TYPESCRIPT, REACT, NEXT, REMIX, GRAPHQL, APOLLO, REDUX, WEBPACK, JEST, REACT TESTING LIBRARY, PLAYWRIGHT, CYPRESS, NODE, EXPRESS, SASS, CSS IN JS, TAILWINDCSS, GSAP, PUG, GIT, GITLAB, STORYBOOK, FIREBASE, NETLIFY, GATSBY, FIGMA, ILLUSTRATOR"
      },
      void 0,
      !1,
      {
        fileName: "app/ui/components/Stack/index.tsx",
        lineNumber: 31,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ jsxDEV33(
      Img,
      {
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
      },
      void 0,
      !1,
      {
        fileName: "app/ui/components/Stack/index.tsx",
        lineNumber: 44,
        columnNumber: 11
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/ui/components/Stack/index.tsx",
    lineNumber: 30,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/ui/components/Stack/index.tsx",
  lineNumber: 17,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/ui/components/Stack/index.tsx",
  lineNumber: 16,
  columnNumber: 5
}, this));

// app/ui/screens/Home.tsx
import { Fragment as Fragment4, jsxDEV as jsxDEV34 } from "react/jsx-dev-runtime";
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
}) => /* @__PURE__ */ jsxDEV34(Fragment4, { children: [
  /* @__PURE__ */ jsxDEV34(Preloader, { loaded }, void 0, !1, {
    fileName: "app/ui/screens/Home.tsx",
    lineNumber: 23,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV34(
    Layout,
    {
      animateBgColorOnScroll: animateBgColorOnScroll2,
      animateSmoothScroll: animateSmoothScroll2,
      animateMobileMenu: animateMobileMenu2,
      children: [
        /* @__PURE__ */ jsxDEV34(Intro, {}, void 0, !1, {
          fileName: "app/ui/screens/Home.tsx",
          lineNumber: 29,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV34(About, { animateAbout: animateAbout2, createImageInteraction: createImageInteraction2 }, void 0, !1, {
          fileName: "app/ui/screens/Home.tsx",
          lineNumber: 30,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV34(Stack, { animateStack: animateStack2 }, void 0, !1, {
          fileName: "app/ui/screens/Home.tsx",
          lineNumber: 31,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV34(Inspiration, { albums, animateInspiration: animateInspiration2 }, void 0, !1, {
          fileName: "app/ui/screens/Home.tsx",
          lineNumber: 32,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ jsxDEV34(Contact, { animateContact: animateContact2 }, void 0, !1, {
          fileName: "app/ui/screens/Home.tsx",
          lineNumber: 33,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/ui/screens/Home.tsx",
      lineNumber: 24,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/ui/screens/Home.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this);

// app/routes/index.tsx
import { jsxDEV as jsxDEV35 } from "react/jsx-dev-runtime";
var loader = async () => {
  let albums = getAlbums();
  return json(albums);
}, Index = () => {
  let albums = useLoaderData(), animations = useAnimations(), loaded = useOnPageLoad(), { createImageInteraction: createImageInteraction2 } = useCreateImageInteraction();
  return /* @__PURE__ */ jsxDEV35(
    Home,
    {
      albums,
      loaded,
      ...animations,
      createImageInteraction: createImageInteraction2
    },
    void 0,
    !1,
    {
      fileName: "app/routes/index.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  );
}, routes_default = Index;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-IK5OTYT5.js", imports: ["/build/_shared/chunk-ULORKHW2.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-PZHPRUKB.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-R3NLD3WS.js", imports: ["/build/_shared/chunk-PVUC7G6J.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: "index", index: void 0, caseSensitive: void 0, module: "/build/routes/index-RFFBI7Q3.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "ac0788ae", hmr: { runtime: "/build/_shared/chunk-PZHPRUKB.js", timestamp: 1710962211629 }, url: "/build/manifest-AC0788AE.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: "index",
    index: void 0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
