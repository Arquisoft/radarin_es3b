import React from 'react'
import Nav from "./Nav"
import {makeStyles, Hidden} from '@material-ui/core'
import { cyan } from '@material-ui/core/colors'
import MyDrawer from './MyDrawer'

const styles = makeStyles(theme => ({

    root: {
        display : 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexgrow: 1,
        padding: theme.spacing(2),
        backgroundColor: cyan,
    },

}))
const Contenedor = () => {
    const classes = styles()

    const[abrir, setAbrir] = React.useState(false)

      const accionAbrir = () =>{
          setAbrir(!abrir)
      }
return (

   
    <div className = {classes.root}>
        <Nav accionAbrir={accionAbrir}/>
            <Hidden xsDown>
            <MyDrawer
                variant = "temporary"
                open={abrir}
                onClose={accionAbrir}
            />
            </Hidden>
            <Hidden smUp>
            <MyDrawer
                variant = "temporary"
                open={abrir}
                onClose={accionAbrir}
            />
            </Hidden>
            
        
        <div className={classes.content}>
            <div className={classes.toolbar}>
                
            </div>
            
        </div>
    </div>
    
)

}

export default Contenedor;
