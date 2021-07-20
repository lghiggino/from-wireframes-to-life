import React from "react";
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';

//Icons
import HomeIcon from '@material-ui/icons/Home';
import AssessmentIcon from '@material-ui/icons/Assessment';
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import TitleIcon from '@material-ui/icons/Title';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';

import DropdownMenu from "../src/DropdownMenu"

//styling
import utilStyles from '../styles/utils.module.css'

const name = "NextJS-MUI-LNG"
export const siteTitle2 = "NextJS MaterialUI This is The BBC"
const drawerWidth = 200;


const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1
    },
    drawer: {
        flexShrink: 0,
        width: drawerWidth
    },
    drawerPaper: {
        width: drawerWidth
    },
    title: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        // determina o momento em que esse icone aparece
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    toolbar: {
        ...theme.mixins.toolbar,
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3)
    },
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: theme.spacing(8),
    },
    container: {
        maxWidth: "66em",
        padding: "2rem 1rem",
        margin: "0 auto"
    },
    backToHome: {
        margin: "4rem 0 1rem",
    }
}));

const menuItemsArray = [
    {
        text: "Home",
        icon: <HomeIcon />,
        link: "/"
    },
    {
        text: "Charts",
        icon: <AssessmentIcon />,
        link: "/charts"
    },
    {
        text: "MaterialUI",
        icon: <CalendarViewDayIcon />,
        link: "/materialUI"
    },
    {
        text: "TypeScript",
        icon: <TitleIcon />,
        link: "/typescript"
    },
    {
        text: "Posts",
        icon: <InboxIcon />,
        link: "/posts"
    }
]

export default function App({ children, home }) {
    const classes = useStyles();
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = event => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setOpen(!open);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={toggleDrawer}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap className={classes.title}>
                        Material-UI, NextJS, Typescript experimental site
                    </Typography>

                    <DropdownMenu />

                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={() => { console.log("clicou em login") }}
                    >
                        <NotificationsIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={() => { console.log("clicou em login") }}
                    >
                        <PersonIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant={isMdUp ? "permanent" : "temporary"}
                classes={{
                    paper: classes.drawerPaper
                }}
                anchor="left"
                open={open}
                onClose={toggleDrawer}
            >
                <div className={classes.toolbar} />
                <Divider />
                <List className="themed">
                    {menuItemsArray.map(item => (         
                        <Link key={item.text} href={item.link} passHref>
                        <ListItem button>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItem>
                    </Link>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                {/* <Toolbar />  Essa toolbar faz com que o conteudo seja abaixado pela altura de uma toolbar */}
                <header className={classes.header}>
                    {home ? (
                        <>
                            <Image
                                priority
                                src="/images/profile.jpg"
                                className={utilStyles.borderCircle}
                                height={144}
                                width={144}
                                alt={name}
                            />
                            <h1 className={utilStyles.heading2Xl}>{name}</h1>
                        </>
                    ) : (
                        <>
                            <Link href="/">
                                <a>
                                    <Image
                                        priority
                                        src="/images/profile.jpg"
                                        className={utilStyles.borderCircle}
                                        height={98}
                                        width={98}
                                        alt={name}
                                    />
                                </a>
                            </Link>
                            <h2 className={utilStyles.headingLg}>
                                <Link href="/">
                                    <a className={utilStyles.colorInherit}>{name}</a>
                                </Link>
                            </h2>
                        </>
                    )}
                </header>
                <section className={classes.container}>
                    {children}
                </section>
                <footer>
                    {!home && (
                        <div className={classes.backToHome}>
                            <Link href="/">
                                <a>← Back to home</a>
                            </Link>
                        </div>
                    )}
                </footer>
            </main>
        </div>
    );
}
