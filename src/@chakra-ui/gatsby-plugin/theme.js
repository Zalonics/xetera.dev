// import "@fontsource/inter/300.css"
// import "@fontsource/inter/400.css"
// import "@fontsource/inter/500.css"
// import "@fontsource/inter/600.css"
// import "@fontsource/inter/700.css"
// import "@fontsource/inter/900.css"
import { extendTheme } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

export const colors = {
  discord: {
    dark: "#36393f",
    light: "",
  },
  textPrimary: {
    light: "gray.900",
    dark: "gray.50",
  },
  textSecondary: {
    light: "gray.700",
    dark: "gray.300",
  },
  textTertiary: {
    light: "gray.600",
    dark: "gray.400",
  },
  bgSecondary: {
    light: "gray.100",
    dark: "#1b1d29",
  },
  borderSubtle: {
    dark: "#1e2131",
    light: "gray.100",
  },
  text: {
    primary: "gray.50",
    secondary: "gray.300",
  },
  brand: {
    light: "hsl(333deg, 100%, 45%)",
    dark: "hsl(333deg, 100%, 45%)",
  },
  brandLight: {
    light: "hsl(0deg, 50%, 41%)",
    dark: "hsl(333deg, 100%, 85%)",
  },
}

export const themedColors = {
  brand: {
    dark: "#EAE3A8",
    light: "#256bc1",
  },
}

const fontFamily =
  "'Wotfard', 'system-ui',-apple-system,'Segoe UI','Roboto','Ubuntu','Cantarell','Noto Sans',sans-serif,'BlinkMacSystemFont','Helvetica Neue','Arial','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji'"

function makeLayer(name, variants) {
  return {
    [name]: variants[1],
    _light: {
      [name]: variants[0],
    },
  }
}

export default extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: fontFamily,
    body: fontFamily,
  },
  layerStyles: {
    discordBackground: makeLayer("background", ["#fbfbfb", "gray.800"]),
    discordTextColor: makeLayer("color", ["#2e3338", "#dcddde"]),
    bgSubtle: makeLayer("background", ["gray.100", "#1e2131"]),
    borderSubtle: makeLayer("borderColor", ["gray.100", "#282c3e"]),
    bgPrimary: makeLayer("background", ["white", "gray.900"]),
    textBrand: makeLayer("color", [colors.brand.light, colors.brand.dark]),
    textBrandLight: makeLayer("color", [
      colors.brandLight.light,
      colors.brandLight.dark,
    ]),
    bgSecondary: makeLayer("background", [
      colors.bgSecondary.light,
      colors.bgSecondary.dark,
    ]),
    bgTertiary: makeLayer("background", ["gray.200", "#232735"]),
    textPrimary: makeLayer("color", [
      colors.textPrimary.light,
      colors.textPrimary.dark,
    ]),
    textSecondary: makeLayer("color", [
      colors.textSecondary.light,
      colors.textSecondary.dark,
    ]),
    textTertiary: makeLayer("color", [
      colors.textTertiary.light,
      colors.textTertiary.dark,
    ]),
  },
  fontSizes: {
    xs: "13px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "24px",
    "2xl": "32px",
    "3xl": "38px",
    "4xl": "48px",
    "5xl": "56px",
  },
  styles: {
    global: props => ({
      code: {
        color: mode(colors.brand.light, colors.brand.dark)(props),
        fontSize: "0.9em",
        fontFamily: fontFamily,
        fontStyle: "italic",
        borderRadius: "5px",
        background: mode(
          colors.bgSecondary.light,
          colors.bgSecondary.dark
        )(props),
        padding: "1px 5px",
      },
      a: {
        wordBreak: "break-word",
      },
      ".widebanner > p": {
        marginBottom: 0,
      },
      ".token-line": {
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
      },
      "pre, kbd, samp": {
        fontFamily: `'Jetbrains Mono', ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace`,
      },
      body: {
        lineBreak: "auto",
        color: mode("gray.700", "gray.300")(props),
        background: mode("white", "gray.900")(props),
      },
    }),
  },
  components: {
    Link: {
      baseStyle: props => ({
        color: mode(themedColors.brand.light, themedColors.brand.dark)(props),
        transition: "all 0.4s",
      }),
    },
    Heading: {
      baseStyle: props => ({
        color: mode(colors.textPrimary.light, colors.textPrimary.dark)(props),
        transition: "all 0.4s",
      }),
    },
    Text: {
      baseStyle: props => ({
        color: mode(colors.textPrimary.light, colors.textPrimary.dark)(props),
        lineHeight: "1.7",
        transition: "all 0.4s",
      }),
    },
  },
  colors,
})
