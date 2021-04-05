import React from 'react'
import {List, ListItem, ListItemIcon,ListItemText, Divider, makeStyles} from '@material-ui/core'

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import MapIcon from '@material-ui/icons/Map';
import HelpIcon from '@material-ui/icons/Help';
import HomeIcon from '@material-ui/icons/Home';
import EmojiPeopleSharpIcon from '@material-ui/icons/EmojiPeopleSharp';
import { Link } from 'react-router-dom';
import {  LoggedIn, LoggedOut} from "@solid/react";
import { AuthButton } from "@solid/react";


const useStyles = makeStyles(theme => ({


    iniButton: {
        
        background: "transparent",
        border: "none",
        fontSize: 17,
        paddingRight:35,
        paddingTop:10,
        paddingBottom:10,

      },


}))
function ListItemLink(props) {
    const { icon, primary, to } = props;

    const CustomLink = props => <Link to={to} {...props} />;

    return (
    <li>
        <ListItem button component={CustomLink}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={primary} />
        </ListItem>
    </li>
)
}

const Lista = () =>{

    const classes = useStyles()
    return (
        <List component='nav'>
            <LoggedOut>
            
            
                <ListItem>
                    <ListItemIcon>
                        <EmojiPeopleSharpIcon/>
                    </ListItemIcon>
                    <AuthButton className={classes.iniButton} 
                        popup="https://solid.github.io/solid-auth-client/dist/popup.html"
                        login="Iniciar Sesión."
                        style="background: transparent"
                        >
                            <EmojiPeopleSharpIcon/>
                        </AuthButton>
                    
                </ListItem>
			</LoggedOut>

            <LoggedIn>

            <ListItemLink 
            icon = {<HomeIcon/>}
            primary = "Inicio"
            to= "../vistas/Home">
            </ListItemLink>

            <ListItemLink 
            icon = {<AssignmentIndIcon/>}
            primary = "Lista de amigos"
            to= "../vistas/Amigos">
            </ListItemLink>

            <ListItemLink 
            icon = {<MapIcon/>}
            primary = "Consultar Localización"
            to= "../vistas/Mapa">
            </ListItemLink>

            </LoggedIn>

            <Divider/>

            <ListItem button>
                <ListItemIcon>
                    <HelpIcon/>
                </ListItemIcon>
                <ListItemText>
                     Ayuda.
                </ListItemText>
            </ListItem>
            <Divider/>
            
        </List>
    )
}
export default Lista