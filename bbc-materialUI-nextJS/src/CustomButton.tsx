import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";

import { createStyles, Theme } from "@material-ui/core";

const hexColorToRGB = function (hexColor: any) {
    let detectShorthand = /^#?([a-f\d])([a-f\d])([a-f\d])$/i; // #000 vs #000000
    hexColor = hexColor.replace(detectShorthand, function (m: any, r: string, g: string, b: string) {
        return r + r + g + g + b + b;
    });

    const hex_array = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor); // #000000 to #ffffff
    return hex_array
        ? {
            r: parseInt(hex_array[1], 16), // 0-255
            g: parseInt(hex_array[2], 16), // 0-255
            b: parseInt(hex_array[3], 16) // 0-255
        }
        : null;
};

const hexToRGBAlpha = function (hexColor: any, alpha: any) {
    let rgb = hexColorToRGB(hexColor);
    return `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
};

const drawerWidth = 260;

const transition = {
    transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

const grayColor = "#e0e0e0"
const primaryColor = "#4E78BC"
const infoColor = "#048BA8"
const successColor = "#3F7D20"
const warningColor = "#E6E95C"
const dangerColor = "#922D50"
const roseColor = "#E3BAC6"

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            minHeight: "auto",
            minWidth: "auto",
            backgroundColor: grayColor,
            color: "#FFFFFF",
            boxShadow:
                "0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",
            border: "none",
            borderRadius: "3px",
            position: "relative",
            padding: "12px 30px",
            margin: ".3125rem 1px",
            fontSize: "12px",
            fontWeight: 400,
            textTransform: "uppercase",
            letterSpacing: "0",
            willChange: "box-shadow, transform",
            transition:
                "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
            lineHeight: "1.42857143",
            textAlign: "center",
            whiteSpace: "nowrap",
            verticalAlign: "middle",
            touchAction: "manipulation",
            cursor: "pointer",
            "&:hover,&:focus": {
                color: "#FFFFFF",
                backgroundColor: grayColor,
                boxShadow:
                    "0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"
            },
            "& .fab, & .fas, & .far, & .fal, & .material-icons": {
                position: "relative",
                display: "inline-block",
                top: "0",
                fontSize: "1.1rem",
                marginRight: "4px",
                verticalAlign: "middle"
            },
            "& svg": {
                position: "relative",
                display: "inline-block",
                top: "0",
                width: "18px",
                height: "18px",
                marginRight: "4px",
                verticalAlign: "middle"
            },
            "&$justIcon": {
                "& .fab,& .fas,& .far,& .fal,& .material-icons": {
                    marginRight: "0px",
                    position: "absolute",
                    width: "100%",
                    transform: "none",
                    left: "0px",
                    top: "0px",
                    height: "100%",
                    lineHeight: "41px",
                    fontSize: "20px"
                }
            }
        },
        fullWidth: {
            width: "100%"
        },
        primary: {
            backgroundColor: primaryColor,
            boxShadow: `0 2px 2px 0 rgba(43, 69, 112, 0.14), 0 3px 1px -2px rgba(43, 69, 112, 0.2), 0 1px 5px 0 rgba(43, 69, 112, 0.12)`,
            "&:hover,&:focus": {
                backgroundColor: primaryColor,
                boxShadow: `0 14px 26px -12px $rgba(43, 69, 112, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(43, 69, 112, 0.2)`
            }
        },
        info: {
            backgroundColor: infoColor,
            boxShadow: `0 2px 2px 0 rgba(43, 69, 112, 0.14), 0 3px 1px -2px rgba(43, 69, 112, 0.2), 0 1px 5px 0 rgba(43, 69, 112, 0.12)`,
            "&:hover,&:focus": {
                backgroundColor: infoColor,
                boxShadow: `0 14px 26px -12px ${hexToRGBAlpha(
                    infoColor,
                    0.42
                )}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${hexToRGBAlpha(
                    infoColor,
                    0.2
                )}`
            }
        },
        success: {
            backgroundColor: successColor,
            boxShadow: `0 2px 2px 0 ${hexToRGBAlpha(
                successColor,
                0.14
            )}, 0 3px 1px -2px ${hexToRGBAlpha(
                successColor,
                0.2
            )}, 0 1px 5px 0 ${hexToRGBAlpha(successColor, 0.12)}`,
            "&:hover,&:focus": {
                backgroundColor: successColor,
                boxShadow: `0 14px 26px -12px ${hexToRGBAlpha(
                    successColor,
                    0.42
                )}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${hexToRGBAlpha(
                    successColor,
                    0.2
                )}`
            }
        },
        warning: {
            backgroundColor: warningColor,
            boxShadow: `0 2px 2px 0 ${hexToRGBAlpha(
                warningColor,
                0.14
            )}, 0 3px 1px -2px ${hexToRGBAlpha(
                warningColor,
                0.2
            )}, 0 1px 5px 0 ${hexToRGBAlpha(warningColor, 0.12)}`,
            "&:hover,&:focus": {
                backgroundColor: warningColor,
                boxShadow: `0 14px 26px -12px ${hexToRGBAlpha(
                    warningColor,
                    0.42
                )}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${hexToRGBAlpha(
                    warningColor,
                    0.2
                )}`
            }
        },
        danger: {
            backgroundColor: dangerColor,
            boxShadow: `0 2px 2px 0 ${hexToRGBAlpha(
                dangerColor,
                0.14
            )}, 0 3px 1px -2px ${hexToRGBAlpha(
                dangerColor,
                0.2
            )}, 0 1px 5px 0 ${hexToRGBAlpha(dangerColor, 0.12)}`,
            "&:hover,&:focus": {
                backgroundColor: dangerColor,
                boxShadow: `0 14px 26px -12px ${hexToRGBAlpha(
                    dangerColor,
                    0.42
                )}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${hexToRGBAlpha(
                    dangerColor,
                    0.2
                )}`
            }
        },
        rose: {
            backgroundColor: roseColor,
            boxShadow: `0 2px 2px 0 ${hexToRGBAlpha(
                primaryColor,
                0.14
            )}, 0 3px 1px -2px ${hexToRGBAlpha(
                primaryColor,
                0.2
            )}, 0 1px 5px 0 ${hexToRGBAlpha(primaryColor, 0.12)}`,
            "&:hover,&:focus": {
                backgroundColor: roseColor,
                boxShadow: `0 14px 26px -12px ${hexToRGBAlpha(
                    primaryColor,
                    0.42
                )}, 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px ${hexToRGBAlpha(
                    primaryColor,
                    0.2
                )}`
            }
        },
        white: {
            "&,&:focus,&:hover,&:visited": {
                backgroundColor: "#FFFFFF",
                color: grayColor
            }
        },
        twitter: {
            backgroundColor: "#55acee",
            color: "#fff",
            boxShadow:
                "0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)",
            "&:hover,&:focus,&:visited": {
                backgroundColor: "#55acee",
                color: "#fff",
                boxShadow:
                    "0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)"
            }
        },
        facebook: {
            backgroundColor: "#3b5998",
            color: "#fff",
            boxShadow:
                "0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)",
            "&:hover,&:focus": {
                backgroundColor: "#3b5998",
                color: "#fff",
                boxShadow:
                    "0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)"
            }
        },
        google: {
            backgroundColor: "#dd4b39",
            color: "#fff",
            boxShadow:
                "0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)",
            "&:hover,&:focus": {
                backgroundColor: "#dd4b39",
                color: "#fff",
                boxShadow:
                    "0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)"
            }
        },
        github: {
            backgroundColor: "#333333",
            color: "#fff",
            boxShadow:
                "0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)",
            "&:hover,&:focus": {
                backgroundColor: "#333333",
                color: "#fff",
                boxShadow:
                    "0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)"
            }
        },
        simple: {
            "&,&:focus,&:hover,&:visited": {
                color: "#FFFFFF",
                background: "transparent",
                boxShadow: "none"
            },
            "&$primary": {
                "&,&:focus,&:hover,&:visited": {
                    color: primaryColor
                }
            },
            "&$info": {
                "&,&:focus,&:hover,&:visited": {
                    color: infoColor
                }
            },
            "&$success": {
                "&,&:focus,&:hover,&:visited": {
                    color: successColor
                }
            },
            "&$warning": {
                "&,&:focus,&:hover,&:visited": {
                    color: warningColor
                }
            },
            "&$rose": {
                "&,&:focus,&:hover,&:visited": {
                    color: roseColor
                }
            },
            "&$danger": {
                "&,&:focus,&:hover,&:visited": {
                    color: dangerColor
                }
            },
            "&$twitter": {
                "&,&:focus,&:hover,&:visited": {
                    color: "#55acee"
                }
            },
            "&$facebook": {
                "&,&:focus,&:hover,&:visited": {
                    color: "#3b5998"
                }
            },
            "&$google": {
                "&,&:focus,&:hover,&:visited": {
                    color: "#dd4b39"
                }
            },
            "&$github": {
                "&,&:focus,&:hover,&:visited": {
                    color: "#333333"
                }
            }
        },
        transparent: {
            "&,&:focus,&:hover,&:visited": {
                color: "inherit",
                background: "transparent",
                boxShadow: "none"
            }
        },
        disabled: {
            opacity: "0.65",
            pointerEvents: "none"
        },
        lg: {
            padding: "1.125rem 2.25rem",
            fontSize: "0.875rem",
            lineHeight: "1.333333",
            borderRadius: "0.2rem"
        },
        sm: {
            padding: "0.40625rem 1.25rem",
            fontSize: "0.6875rem",
            lineHeight: "1.5",
            borderRadius: "0.2rem"
        },
        round: {
            borderRadius: "30px"
        },
        block: {
            width: "100% !important"
        },
        link: {
            "&,&:hover,&:focus": {
                backgroundColor: "transparent",
                color: "#999999",
                boxShadow: "none"
            }
        },
        justIcon: {
            paddingLeft: "12px",
            paddingRight: "12px",
            fontSize: "20px",
            height: "41px",
            minWidth: "41px",
            width: "41px",
            "& .fab,& .fas,& .far,& .fal,& svg,& .material-icons": {
                marginRight: "0px"
            },
            "&$lg": {
                height: "57px",
                minWidth: "57px",
                width: "57px",
                lineHeight: "56px",
                "& .fab,& .fas,& .far,& .fal,& .material-icons": {
                    fontSize: "32px",
                    lineHeight: "56px"
                },
                "& svg": {
                    width: "32px",
                    height: "32px"
                }
            },
            "&$sm": {
                height: "30px",
                minWidth: "30px",
                width: "30px",
                "& .fab,& .fas,& .far,& .fal,& .material-icons": {
                    fontSize: "17px",
                    lineHeight: "29px"
                },
                "& svg": {
                    width: "17px",
                    height: "17px"
                }
            }
        }
    }
))

const RegularButton = React.forwardRef((props: any, ref) => {
    const {
        color,
        round,
        children,
        fullWidth,
        disabled,
        simple,
        size,
        block,
        link,
        justIcon,
        className,
        ...rest
    } = props;

    const classes = useStyles() as any;

    const btnClasses = classNames({
        [classes.button]: true,
        [classes[size]]: size,
        [classes[color]]: color,
        [classes.round]: round,
        [classes.fullWidth]: fullWidth,
        [classes.disabled]: disabled,
        [classes.simple]: simple,
        [classes.block]: block,
        [classes.link]: link,
        [classes.justIcon]: justIcon,
        [className]: className
    });
    return (
        <Button {...rest} ref={ref} classes={{ root: btnClasses }}>
            {children}
        </Button>
    );
});

RegularButton.propTypes = {
    color: PropTypes.oneOf([
        "primary",
        "info",
        "success",
        "warning",
        "danger",
        "rose",
        "white",
        "facebook",
        "twitter",
        "google",
        "github",
        "transparent"
    ]),
    size: PropTypes.oneOf(["sm", "lg"]),
    simple: PropTypes.bool,
    round: PropTypes.bool,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    link: PropTypes.bool,
    justIcon: PropTypes.bool,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]).isRequired,
    className: PropTypes.string
};

export default RegularButton;
