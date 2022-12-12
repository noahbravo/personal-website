import {
  config,
  styled
} from "/build/_shared/chunk-NOGK3RZK.js";
import {
  __toESM,
  require_jsx_dev_runtime,
  require_react
} from "/build/_shared/chunk-IE366Y5W.js";

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
var import_react = __toESM(require_react());

// app/ui/primitives/form/Button/styles.tsx
var StyledButton = styled("button", {
  fontSize: "$sm",
  cursor: "pointer",
  transition: "0.15s all ease-in-out"
});

// app/ui/primitives/form/Button/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Button = import_react.default.forwardRef(
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
var import_react2 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Container = import_react2.default.forwardRef(
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

// app/utils/hooks/useProgressiveImage.ts
var import_react3 = __toESM(require_react());
function useProgressiveImage(lowQualitySrc, highQualitySrc) {
  const [src, setSrc] = (0, import_react3.useState)(lowQualitySrc || highQualitySrc);
  (0, import_react3.useEffect)(() => {
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setSrc(highQualitySrc);
    };
  }, [lowQualitySrc, highQualitySrc]);
  return { src, blur: src === lowQualitySrc };
}

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
var variants5 = {
  variant: {
    menu: {
      "&::before": {
        width: "0",
        height: ".15rem",
        position: "absolute",
        bottom: ".75rem",
        content: "",
        left: "0",
        backgroundColor: "white",
        visibility: "hidden",
        transition: "all 25s ease-in-out"
      },
      "&:hover &::before": {
        width: "100%",
        visibility: "visible"
      }
    }
  }
};
var StyledLink = styled("a", {
  color: "$white",
  textDecoration: "none",
  transition: "0.15s color ease-in-out",
  cursor: "pointer",
  "&:hover": {
    color: "lightgray"
  },
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
  theme: { colors: colors2, fontSizes }
} = config;
var fontColor = getStylePropsFromToken(colors2);
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
  fontSize,
  fontColor,
  fontWeight,
  align: align4,
  textTransform
};
var StyledSpan = styled("span", {
  fontFamily: "$primary"
});

// app/ui/primitives/typography/Text/index.tsx
var import_react4 = __toESM(require_react());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Text = import_react4.default.forwardRef(({ as = "span", css, children, ...props }, forwardedRef) => {
  const { mediaStyles, restProps } = getformattedProps({ props, styleProps: styleProps7 });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(StyledSpan, {
    as,
    css: { ...mediaStyles, ...css },
    ref: forwardedRef,
    ...restProps,
    children
  }, void 0, false, {
    fileName: "app/ui/primitives/typography/Text/index.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
});
Text.displayName = "Text";

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
    bottom: 0,
    width: "100%",
    paddingBottom: 86,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
      height: 1,
      variant: "wrap",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
        href: "#about",
        display: "flex",
        width: 40,
        transform: { lg: `translateY(-${toRem(50)})` },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Img, {
          src: arrow_default,
          alt: "down arrow",
          position: "relative",
          width: "100%"
        }, void 0, false, {
          fileName: "app/ui/components/Intro/ScrollDown.tsx",
          lineNumber: 15,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: "app/ui/components/Intro/ScrollDown.tsx",
        lineNumber: 9,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: "app/ui/components/Intro/ScrollDown.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/components/Intro/ScrollDown.tsx",
    lineNumber: 7,
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
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Grid, {
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
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ScrollDown, {}, void 0, false, {
              fileName: "app/ui/components/Intro/index.tsx",
              lineNumber: 14,
              columnNumber: 13
            }, this)
          ]
        }, void 0, true, {
          fileName: "app/ui/components/Intro/index.tsx",
          lineNumber: 11,
          columnNumber: 11
        }, this)
      }, void 0, false, {
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
    left: 20,
    zIndex: "z40",
    css: { "2xl": { left: "calc(((100vw - 1280px)/2) - 28px)" } },
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
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/ui/components/Layout/Menu.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Menu() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, {
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
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
                  fileName: "app/ui/components/Layout/Menu.tsx",
                  lineNumber: 45,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/ui/components/Layout/Menu.tsx",
                lineNumber: 44,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
                as: "nav",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(List, {
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ListItem, {
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
                      href: "#about",
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
                        children: "About"
                      }, void 0, false, {
                        fileName: "app/ui/components/Layout/Menu.tsx",
                        lineNumber: 56,
                        columnNumber: 19
                      }, this)
                    }, void 0, false, {
                      fileName: "app/ui/components/Layout/Menu.tsx",
                      lineNumber: 55,
                      columnNumber: 17
                    }, this)
                  }, void 0, false, {
                    fileName: "app/ui/components/Layout/Menu.tsx",
                    lineNumber: 54,
                    columnNumber: 15
                  }, this)
                }, void 0, false, {
                  fileName: "app/ui/components/Layout/Menu.tsx",
                  lineNumber: 53,
                  columnNumber: 13
                }, this)
              }, void 0, false, {
                fileName: "app/ui/components/Layout/Menu.tsx",
                lineNumber: 52,
                columnNumber: 11
              }, this)
            ]
          }, void 0, true, {
            fileName: "app/ui/components/Layout/Menu.tsx",
            lineNumber: 30,
            columnNumber: 9
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
                      fileName: "app/ui/components/Layout/Menu.tsx",
                      lineNumber: 67,
                      columnNumber: 19
                    }, this)
                  }, void 0, false, {
                    fileName: "app/ui/components/Layout/Menu.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                  }, this)
                }, void 0, false, {
                  fileName: "app/ui/components/Layout/Menu.tsx",
                  lineNumber: 65,
                  columnNumber: 15
                }, this)
              }, void 0, false, {
                fileName: "app/ui/components/Layout/Menu.tsx",
                lineNumber: 64,
                columnNumber: 13
              }, this)
            }, void 0, false, {
              fileName: "app/ui/components/Layout/Menu.tsx",
              lineNumber: 63,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/Layout/Menu.tsx",
            lineNumber: 62,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
              children: "Menu"
            }, void 0, false, {
              fileName: "app/ui/components/Layout/Menu.tsx",
              lineNumber: 74,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/Layout/Menu.tsx",
            lineNumber: 73,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, {
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
              children: "Close"
            }, void 0, false, {
              fileName: "app/ui/components/Layout/Menu.tsx",
              lineNumber: 77,
              columnNumber: 11
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/Layout/Menu.tsx",
            lineNumber: 76,
            columnNumber: 9
          }, this)
        ]
      }, void 0, true, {
        fileName: "app/ui/components/Layout/Menu.tsx",
        lineNumber: 19,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Container, {
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
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Box, {
            paddingY: 5,
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, {
              href: "#about",
              variant: "menu",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, {
                children: "About"
              }, void 0, false, {
                fileName: "app/ui/components/Layout/Menu.tsx",
                lineNumber: 92,
                columnNumber: 15
              }, this)
            }, void 0, false, {
              fileName: "app/ui/components/Layout/Menu.tsx",
              lineNumber: 91,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: "app/ui/components/Layout/Menu.tsx",
            lineNumber: 90,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: "app/ui/components/Layout/Menu.tsx",
          lineNumber: 89,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: "app/ui/components/Layout/Menu.tsx",
        lineNumber: 80,
        columnNumber: 7
      }, this)
    ]
  }, void 0, true, {
    fileName: "app/ui/components/Layout/Menu.tsx",
    lineNumber: 18,
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

// app/ui/screens/Home.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var Home = () => {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, {
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Intro, {}, void 0, false, {
      fileName: "app/ui/screens/Home.tsx",
      lineNumber: 7,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: "app/ui/screens/Home.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
};

// app/routes/index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Home, {}, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 4,
    columnNumber: 10
  }, this);
}
export {
  Index as default
};
//# sourceMappingURL=/build/routes/index-KA7K4WPZ.js.map
