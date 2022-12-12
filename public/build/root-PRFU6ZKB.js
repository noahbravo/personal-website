import {
  globalCss
} from "/build/_shared/chunk-EAMOY2JI.js";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-URHDA5WG.js";

// app/utils/root/meta.ts
var meta = {
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  "msapplication-TileColor": "#ffffff",
  "theme-color": "#0098a8",
  title: "Elena Bravo | Front-end Developer",
  description: "Hi, I'm Elena Bravo, a multidisciplinary front-end developer and web designer based in Madrid, Spain"
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

// app/styles/fonts.ts
var fonts_default = {
  fontFamily: "East Border",
  src: 'url("/fonts/east_border.ttf") format("truetype")',
  fontWeight: "400",
  fontStyle: "normal",
  fontDisplay: "swap"
};

// app/styles/global.ts
var boxSizing = { boxSizing: "border-box" };
var height = { height: "100%" };
var mediaStyles = { display: "block", maxWidth: "100%" };
var overflowWrap = { overflowWrap: "break-word" };
var globalStyles = globalCss({
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
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta2 = () => meta;
var links2 = () => links;
var App = () => {
  globalStyles();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    suppressHydrationWarning: true,
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 20,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 21,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          false,
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 38,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 39,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Scripts, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 40,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 41,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
};
var root_default = App;
export {
  root_default as default,
  links2 as links,
  meta2 as meta
};
//# sourceMappingURL=/build/root-PRFU6ZKB.js.map
