import React from "react";
import { AppBar, Toolbar, makeStyles, IconButton } from "@material-ui/core";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import EmojiPeopleSharpIcon from "@material-ui/icons/EmojiPeopleSharp";

import styled from "styled-components";


import { LoggedIn, LoggedOut } from "@solid/react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { AuthButton } from "@solid/react";


const StyledLink = styled(Link)`
      color: #000;
      font-weight: bold;
      text-transform: capitalize;
      text-decoration: none;
      margin: 0 10px;
      padding-top: 5px;
      padding-bottom: 5px;
      padding-right: 15px;
      padding-left: 109px;
      color: #fff;
    `;

const useStyles = makeStyles(theme => ({


    menuButton: {

        marginRight: theme.spacing(2),

    },

    title: {
        flexGrow: 1,
        textTransform: "capitalize",
        textDecoration: "none",
        fontSize: 25,
        paddingLeft: 30,

    },

    appBar: {

        marginLeft: 240,

    },

    iniButton: {

        background: "transparent",
        border: "none",
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10,
        color: "#fff",

    },


    logOutButton: {

        background: "transparent",
        border: "none",
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10,
        color: "#fff",

    },

    name: {
        fontSize: 35,
        fontStyle: "italic",
        fontFamily: "Times New Roman"
    },



}))

const Navbar = (props) => {

    const classes = useStyles()
    return (

        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton
                    edge="start"
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="menu"
                    onClick={() => props.accionAbrir()}
                >
                    <MenuIcon />
                </IconButton>

                <StyledLink to="../vistas/home" className={classes.title}>

                    <div className={classes.name}>
                        <ExploreOutlinedIcon />
                            Radarin
                        </div>
                </StyledLink>

                <LoggedIn>
                    <ExitToAppIcon />
                    <AuthButton className={classes.logOutButton}
                        logout="Desconectarse"
                        style={{ background: "transparent" }}
                    >
                    </AuthButton>
                </LoggedIn>

                <LoggedOut>
                    <EmojiPeopleSharpIcon />
                    <AuthButton className={classes.iniButton}
                        popup="https://solid.github.io/solid-auth-client/dist/popup.html"
                        login="Iniciar Sesión"
                        style={{ background: "transparent" }}
                    >

                    </AuthButton>
                </LoggedOut>

            </Toolbar>
        </AppBar>
    )
}

export default Navbar