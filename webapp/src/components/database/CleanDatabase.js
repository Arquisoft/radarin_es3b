import React from "react";

import Button from "@material-ui/core/Button";
import { cleanDatabase } from "../../api/api";

class CleanDatabase extends React.Component {


  async deleteAll() {

    let response = await cleanDatabase();
    //console.log(response);


  }


  render() {
    return (
      <div>


        <Button variant="contained" color="primary" onClick={this.deleteAll}>
          Limpiar base de datos
            </Button>


      </div>
    )
  }
}

export default CleanDatabase;