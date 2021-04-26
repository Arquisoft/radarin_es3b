import React from 'react'
import {List, ListItem, ListItemIcon,ListItemText, Divider, makeStyles} from '@material-ui/core'

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import MapIcon from '@material-ui/icons/Map';
import HelpIcon from '@material-ui/icons/Help';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
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
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10, 

      },

      iconIni:{
          color:"grey",
          marginRight:"26px",
      }


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
            

            <ListItemLink 
            icon = {<HomeIcon/>}
            primary = "Inicio"
            to= "/Home">
            </ListItemLink>
            
            <LoggedOut>
                <ListItem>
                    <EmojiPeopleSharpIcon className={classes.iconIni}></EmojiPeopleSharpIcon>
                    <AuthButton className={classes.iniButton} 
                        popup="https://solid.github.io/solid-auth-client/dist/popup.html"
                        login="Iniciar Sesión"
                        style={{background: "transparent"}}
                        >
                            <EmojiPeopleSharpIcon/>
                    </AuthButton>
                    
                </ListItem>
                <ListItemLink 
                    icon = {<SettingsApplicationsIcon/>}
                    primary = "Administrador"
                    to= "/Admin">
                </ListItemLink>
			</LoggedOut>

            <LoggedIn>
            <ListItemLink 
            icon = {<AssignmentIndIcon/>}
            primary = "Lista de amigos"
            to= "/Amigos">
            </ListItemLink>

            <ListItemLink 
            icon = {<MapIcon/>}
            primary = "Consultar Localización"
            to= "/Mapa">
            </ListItemLink>

            </LoggedIn>

            <Divider/>

            <ListItemLink 
            icon = {<HelpIcon/>}
            primary = "Ayuda"
            to= "/Ayuda">
            </ListItemLink>

            <Divider/>
            
        </List>
    )
}
export default Lista