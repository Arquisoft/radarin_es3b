import React from "react";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import { makeStyles} from "@material-ui/core";
 
const useStyles = makeStyles(theme => ({

    name: { 
        fontSize: 35,
        fontStyle: "italic",
        fontFamily: "Times New Roman"
    },

}))

function Title() {

    const classes = useStyles()
    return (
    <div className={classes.name}>
         <ExploreOutlinedIcon />
          Radarin
      </div>
    );
  }
  
  
  export default Title;