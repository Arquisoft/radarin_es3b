import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles, IconButton, Button } from '@material-ui/core'

import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({


    menuButton: {
        
        marginRight: theme.spacing(2),
        
      },

    title: {
        flexGrow: 1
    },

    appBar: {
       
        //width:`calc(100% - ${240}px)`,
        marginLeft: 240,
        
    },

}))

const Navbar = (props) => {

    const classes = useStyles()
    return(

            <AppBar className={classes.appBar}> 
                <Toolbar>
                    <IconButton 
                    edge="start"
                    className={classes.menuButton} 
                    color="inherit" 
                    aria-label="menu"
                    onClick={()=> props.accionAbrir()}
                    >
                        <MenuIcon />
                    </IconButton>   
                    <Typography variant="h6" className={classes.title}>
                        Radarin
                    </Typography>
                    
                    <Button variant= "text" color="inherit" >Usuario</Button>
                </Toolbar>
            </AppBar>    
    )
}

export default Navbar