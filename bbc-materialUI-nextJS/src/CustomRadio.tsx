import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Theme, ThemeProvider } from '@material-ui/core'
import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles((theme: Theme) => {
    return {
        root: {
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
        icon: {
            borderRadius: '50%',
            width: 16,
            height: 16,
            boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
            backgroundColor: '#f5f8fa',
            backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
            '$root.Mui-focusVisible &': {
                outline: '2px auto rgba(19,124,189,.6)',
                outlineOffset: 2,
            },
            'input:hover ~ &': {
                backgroundColor: '#ebf1f5',
            },
            'input:disabled ~ &': {
                boxShadow: 'none',
                background: 'rgba(206,217,224,.5)',
            },
        },
        checkedIcon: {
            backgroundColor: '#137cbd',
            backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
            '&:before': {
                display: 'block',
                width: 16,
                height: 16,
                backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
                content: '""',
            },
            'input:hover ~ &': {
                backgroundColor: '#106ba3',
            }
        },
        checkRoot: {
            padding: "12px",
            "&:hover": {
                backgroundColor: theme.palette.primary.light
            },
            radioRoot: {
                padding: "12px",
                "&:hover": {
                    backgroundColor: theme.palette.primary.light
                }
            },
            labelRoot: {
                marginLeft: "-14px"
            },
            checkboxAndRadio: {
                position: "relative",
                display: "block",
                marginTop: "10px",
                marginBottom: "10px"
            },
            checkboxAndRadioHorizontal: {
                position: "relative",
                display: "block",
                "&:first-child": {
                    marginTop: "10px"
                },
                "&:not(:first-child)": {
                    marginTop: "-14px"
                },
                marginTop: "0",
                marginBottom: "0"
            },
            checked: {
                color: theme.palette.primary.dark
            },
            checkedIcon: {
                width: "20px",
                height: "20px",
                border: "1px solid rgba(0, 0, 0, .54)",
                borderRadius: "3px"
            },
            uncheckedIcon: {
                width: "0px",
                height: "0px",
                padding: "9px",
                border: "1px solid rgba(0, 0, 0, .54)",
                borderRadius: "3px"
            },
            disabledCheckboxAndRadio: {
                opacity: "0.45"
            },
            label: {
                cursor: "pointer",
                paddingLeft: "0",
                color: "rgba(0, 0, 0, 0.26)",
                fontSize: "14px",
                lineHeight: "1.428571429",
                fontWeight: "400",
                display: "inline-flex",
                transition: "0.3s ease all",
                letterSpacing: "unset"
            },
            labelHorizontal: {
                color: "rgba(0, 0, 0, 0.26)",
                cursor: "pointer",
                display: "inline-flex",
                fontSize: "14px",
                lineHeight: "1.428571429",
                fontWeight: "400",
                paddingTop: "39px",
                marginRight: "0",
                "@media (min-width: 992px)": {
                    float: "right"
                }
            },
            labelHorizontalRadioCheckbox: {
                paddingTop: "22px"
            },
            labelLeftHorizontal: {
                color: "rgba(0, 0, 0, 0.26)",
                cursor: "pointer",
                display: "inline-flex",
                fontSize: "14px",
                lineHeight: "1.428571429",
                fontWeight: "400",
                paddingTop: "22px",
                marginRight: "0"
            },
            labelError: {
                color: theme.palette.error.main
            },
            radio: {
                color: theme.palette.primary.main
            },
            radioChecked: {
                width: "16px",
                height: "16px",
                border: "1px solid " + theme.palette.primary.main,
                borderRadius: "50%"
            },
            radioUnchecked: {
                width: "0px",
                height: "0px",
                padding: "7px",
                border: "1px solid rgba(0, 0, 0, .54)",
                borderRadius: "50%"
            },
            inlineChecks: {
                marginTop: "8px"
            },
            iconCheckbox: {
                height: "116px",
                width: "116px",
                color: theme.palette.grey,
                "& > span:first-child": {
                    borderWidth: "4px",
                    borderStyle: "solid",
                    borderColor: "#CCCCCC",
                    textAlign: "center",
                    verticalAlign: "middle",
                    borderRadius: "50%",
                    color: "inherit",
                    margin: "0 auto 20px",
                    transition: "all 0.2s"
                },
                "&:hover": {
                    color: theme.palette.info,
                    "& > span:first-child": {
                        borderColor: theme.palette.info.dark
                    }
                }
            },
            iconCheckboxChecked: {
                color: theme.palette.info,
                "& > span:first-child": {
                    borderColor: theme.palette.info.dark
                }
            },
            iconCheckboxIcon: {
                fontSize: "40px",
                lineHeight: "111px"
            },
            switchBase: {
                color: theme.palette.info
            },
            switchIcon: {
                boxShadow: "0 1px 3px 1px rgba(0, 0, 0, 0.4)",
                color: "#FFFFFF !important",
                border: "1px solid rgba(0, 0, 0, .54)"
            },
            switchBar: {
                width: "30px",
                height: "15px",
                backgroundColor: "rgb(80, 80, 80)",
                borderRadius: "15px",
                opacity: "0.7!important"
            },
            switchChecked: {
                "& + $switchBar": {
                    backgroundColor: "rgba(156, 39, 176, 1) !important"
                },
                "& $switchIcon": {
                    borderColor: "#9c27b0"
                }
            },
            switchRoot: {
                height: "48px"
            }
        }
    }
})


// Inspired by blueprintjs
function StyledRadio(props: RadioProps) {
    const classes = useStyles();
    return (
        <Radio
            className={classes.root}
            disableRipple
            color="default"
            checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
            icon={<span className={classes.icon} />}
            {...props}
        />
    );
}



export default function CustomizedRadios() {
    const [radioValue, setRadioValue] = useState(null)

    function radioStateSetter(ev) {
        return setRadioValue(ev.target.value)
    }

    return (
        <>
            <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup defaultValue="female" aria-label="gender" name="customized-radios">
                    <FormControlLabel value="female" control={<StyledRadio />} label="Female" onClick={(e: React.MouseEvent) => { radioStateSetter(e) }} />
                    <FormControlLabel value="male" control={<StyledRadio />} label="Male" onClick={(e: React.MouseEvent) => { radioStateSetter(e) }} />
                    <FormControlLabel value="other" control={<StyledRadio />} label="Other" onClick={(e: React.MouseEvent) => { radioStateSetter(e) }} />
                    <FormControlLabel
                        value="disabled"
                        disabled
                        control={<StyledRadio />}
                        label="(Disabled option)"
                    />
                </RadioGroup>
            </FormControl>
            <section>
                <pre>Radio Input Current State is: {radioValue}</pre>
            </section>
        </>
    );
}

