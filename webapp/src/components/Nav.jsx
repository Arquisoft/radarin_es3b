import React from "react";
import { AppBar, Toolbar, makeStyles, IconButton } from "@material-ui/core";

import ExitToAppIcon from "@material-ui/icons/ExitToApp"; 
import EmojiPeopleSharpIcon from "@material-ui/icons/EmojiPeopleSharp";

import styled from "styled-components";


import { LoggedIn, LoggedOut } from "@solid/react";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { AuthButton } from "@solid/react";

import Title from "../vistas/img/Title.PNG"; 



const StyledLink = styled(Link)`
      color: #000;
      font-weight: bold;
      text-transform: capitalize;
      text-decoration: none;
      margin: 0 10px;
      padding-top: 5px;
      padding-bottom: 5px;
      padding-right: 5px;
      padding-left: 90px;
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
        width:"100%",
        height:"auto",
        maxWidth:"160px",
        minWidth:"140px"
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

                <StyledLink to="/Home" className={classes.title}>
 
                    <img className={classes.name} src={Title} alt="titulo"></img>
                    
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