
import React from "react";
import {makeStyles, Drawer, Divider,}from "@material-ui/core"
import Lista from "./Lista"

import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";


const styles = makeStyles(theme =>({
     
    drawerPaper: {
        width: 240,
        flexShrink:0,
    },

    toolbar: theme.mixins.toolbar, 

    titulo: {
        paddingTop:15,
        paddingLeft:20,
    },

    name:{
        fontSize: 25,
        fontStyle:"italic",
        fontFamily:"Times New Roman"
    }

}))
const MyDrawer = (props) => {

    const classes = styles()
    return(
        <Drawer  
            classes = {{paper: classes.drawerPaper,}}
            anchor = "left"
            variant={props.variant} 
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
        >
            <div className={classes.toolbar}>
                <div className={classes.titulo}> 
                    <table>
                        <tr>
                            <td>
                                <ExploreOutlinedIcon/>
                            </td>
                            <td className={classes.name}>
                                Radarin
                            </td>
                        </tr>
                    </table>  
                </div>
            </div>
            <Divider/>
            <Lista/>
        </Drawer>
    )
}
export default MyDrawer