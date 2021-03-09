import React from 'react'
import {List, ListItem, ListItemIcon,ListItemText, Divider} from '@material-ui/core'

import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import MapIcon from '@material-ui/icons/Map';
import HelpIcon from '@material-ui/icons/Help';


const Lista = () =>{
    return (
        <List component='nav'>
            <ListItem button>
                <ListItemIcon>
                    <AssignmentIndIcon/>
                </ListItemIcon>
                <ListItemText>
                    Lista de Amigos.
                </ListItemText>
            </ListItem>
            
            <ListItem button>
                <ListItemIcon>
                    <MapIcon/>
                </ListItemIcon>
                <ListItemText>
                    Consultar Localización.
                </ListItemText>
            </ListItem>
            <Divider/>

            <ListItem button>
                <ListItemIcon>
                    <HelpIcon/>
                </ListItemIcon>
                <ListItemText>
                    Ayuda.
                </ListItemText>
            </ListItem>
        </List>
    )
}
export default Lista