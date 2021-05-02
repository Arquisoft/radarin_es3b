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
      padding-top: 0.2em;
      padding-bottom: 0.2em;
      padding-right: 1em;
      padding-left: 1em;
    `;

const useStyles = makeStyles(theme => ({

    
    title: {
        flexGrow: 1,
        textTransform: "capitalize",
        textDecoration: "none",
    },


    rightButton: {
        background: "transparent",
        border: "none",
        fontSize: 18,
        paddingTop: "0.2em",
        paddingBottom: "0.2em",
        color: "#fff",
    },

    name: {
        width:"100%",
        height:"auto",
        maxWidth:"12em",
        minWidth:"8em"
    },

}))

const Navbar = (props) => {

    const classes = useStyles()
    return (

        <AppBar>
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
                    <AuthButton className={classes.rightButton}
                        logout="Desconectarse"
                        style={{ background: "transparent" }}
                    >
                    </AuthButton>
                </LoggedIn>

                <LoggedOut>
                    <EmojiPeopleSharpIcon />
                    <AuthButton className={classes.rightButton}
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