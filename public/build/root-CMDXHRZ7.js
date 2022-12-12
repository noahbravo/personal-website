import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  ScrollRestoration
} from "/build/_shared/chunk-KKTQTPPP.js";
import {
  globalCss
} from "/build/_shared/chunk-RXII7E7K.js";
import {
  __toESM,
  require_jsx_dev_runtime
} from "/build/_shared/chunk-IE366Y5W.js";

// app/utils/root/meta.ts
var meta = {
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
  "msapplication-TileColor": "#ffffff",
  "theme-color": "#0098a8",
  title: "Elena Bravo | Front-end Developer",
  description: "Hi, I'm Elena Bravo, a multidisciplinary front-end developer and web designer based in Madrid, Spain"
};

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
    rel: "preload",
    href: "/fonts/east_border.ttf",
    as: "font",
    type: "font/woff2",
    crossOrigin: "anonymous"
  }
];

// app/styles/global.ts
var boxSizing = { boxSizing: "border-box" };
var height = { height: "100%" };
var mediaStyles = { display: "block", maxWidth: "100%" };
var overflowWrap = { overflowWrap: "break-word" };
var globalStyles = globalCss({
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
    color: "$white",
    fontFamily: "$primary",
    backgroundColor: "$teal"
  }
});

// app/root.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta2 = () => meta;
var links2 = () => links;
function App() {
  globalStyles();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("html", {
    lang: "en",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("head", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Meta, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 19,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Links, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 20,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 18,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("body", {
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Outlet, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 23,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollRestoration, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 24,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(LiveReload, {}, void 0, false, {
            fileName: "app/root.tsx",
            lineNumber: 25,
            columnNumber: 52
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}
export {
  App as default,
  links2 as links,
  meta2 as meta
};
//# sourceMappingURL=/build/root-CMDXHRZ7.js.map
