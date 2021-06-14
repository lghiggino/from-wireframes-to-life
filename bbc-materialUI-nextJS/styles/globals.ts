import { createMuiTheme, useTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { purple } from '@material-ui/core/colors';

// A theme with custom primary and secondary color.
// It's optional.

const globalsMUI = createMuiTheme({
    ...useTheme,
    "palette": {
        "common": {
            "black": "#000",
            "white": "#fff"
        },
        "type": "light",
        "primary": {
            "main": "#2B4570",
            "light": "#4E78BC",
            "dark": "#0B121E",
            "contrastText": "#f5f5f5"
        },
        "secondary": {
            "main": "#FEA485",
            "light": "#FE5D26",
            "dark": "#B62F02",
            "contrastText": "#fff"
        },
        "error": {
            "light": "#e57373",
            "main": "#922D50",
            "dark": "#d32f2f",
            "contrastText": "#fff"
        },
        "warning": {
            "light": "#ffb74d",
            "main": "#E8C547",
            "dark": "#f57c00",
            "contrastText": "rgba(0, 0, 0, 0.87)"
        },
        "info": {
            "light": "#64b5f6",
            "main": "#048BA8",
            "dark": "#1976d2",
            "contrastText": "#fff"
        },
        "success": {
            "light": "#81c784",
            "main": "#3F7D20",
            "dark": "#388e3c",
            "contrastText": "rgba(0, 0, 0, 0.87)"
        },
        "grey": {
            "50": "#fafafa",
            "100": "#f5f5f5",
            "200": "#eeeeee",
            "300": "#e0e0e0",
            "400": "#bdbdbd",
            "500": "#9e9e9e",
            "600": "#757575",
            "700": "#616161",
            "800": "#424242",
            "900": "#212121",
            "A100": "#d5d5d5",
            "A200": "#aaaaaa",
            "A400": "#303030",
            "A700": "#616161"
        },
        "contrastThreshold": 3,
        "tonalOffset": 0.2,
        "text": {
            "primary": "rgba(0, 0, 0, 0.87)",
            "secondary": "rgba(0, 0, 0, 0.54)",
            "disabled": "rgba(0, 0, 0, 0.38)",
            "hint": "rgba(0, 0, 0, 0.38)"
        },
        "divider": "rgba(0, 0, 0, 0.12)",
        "background": {
            "paper": "#fff",
            "default": "#fff",
        },
        "action": {
            "active": "rgba(0, 0, 0, 0.54)",
            "hover": "rgba(0, 0, 0, 0.04)",
            "hoverOpacity": 0.04,
            "selected": "rgba(0, 0, 0, 0.08)",
            "selectedOpacity": 0.08,
            "disabled": "rgba(0, 0, 0, 0.26)",
            "disabledBackground": "rgba(0, 0, 0, 0.12)",
            "disabledOpacity": 0.38,
            "focus": "rgba(0, 0, 0, 0.12)",
            "focusOpacity": 0.12,
            "activatedOpacity": 0.12
        }
    },
    "html *": {
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale"
    },
    body: {
        fontSize: "1rem",
        backgroundColor: "#e5e5e5",
        color: "#3c4858",
        margin: "0",
        textAlign: "left"
    },
    "body,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6": {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontWeight: 300,
        lineHeight: "1.5em"
    },
    "h1,\nh2,\nh3,\nh4,\nh5,\nh6": { color: "inherit" },
    "h1,\nh2,\nh3": { marginTop: "20px", marginBottom: "10px" },
    "h4,\nh5,\nh6": { marginTop: "10px", marginBottom: "10px" },
    h1: { fontSize: "3.3125rem", lineHeight: "1.15em" },
    h2: { fontSize: "2.25rem", lineHeight: "1.5em" },
    h3: { fontSize: "1.5625rem", lineHeight: "1.4em" },
    h4: { fontSize: "1.125rem", lineHeight: "1.5em" },
    h5: { fontSize: "1.0625rem", lineHeight: "1.55em" },
    h6: { fontSize: "0.75rem", textTransform: "uppercase", fontWeight: 500 },
    p: { 
        fontSize: "14px", 
        margin: "0 0 10px",
        "& .primary" : {
            color: "#490b53", 
            fontWeight: "bold", 
            fontSize: "5rem", 
            letterSpacing:"4rem"
        }
    },
    // "p.primary": { color: "#490b53", fontWeight: "bold", fontSize: "3rem", letterSpacing:"4rem" },
    html: {
        fontFamily: "sans-serif",
        lineHeight: 1.15,
        WebkitTextSizeAdjust: "100%",
        msTextSizeAdjust: "100%",
        WebkitTapHighlightColor: "transparent"
    },
    legend: { borderBottom: "0" },
    "*": {
        WebkitTapHighlightColor: ["rgba(255, 255, 255, 0)", "transparent"],
        boxSizing: "border-box"
    },
    "*:focus": { boxSizing: "border-box", outline: "0" },
    a: {
        color: "darken(#9c27b0, 5%)",
        textDecoration: "none",
        backgroundColor: "transparent"
    },
    "a:hover, a:focus": { color: "#490b53", textDecoration: "none" },
    label: {
        fontSize: "14px",
        lineHeight: 1.42857,
        color: "#aaa",
        fontWeight: 400
    },
    small: { fontSize: "75%", color: "#777", fontWeight: 400 },
    img: { verticalAlign: "middle", borderStyle: "none" },
    form: { marginBottom: "1.125rem" }
} as any);
export type Theme = typeof globalsMUI;
export default globalsMUI;


