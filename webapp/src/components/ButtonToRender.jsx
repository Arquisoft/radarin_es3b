import React from "react";
import Button from '@material-ui/core/Button';
import "../vistas/mapa.css";



class ButtonToRender extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showComponent: true,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
	this._offButtonClick = this._offButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }
  
  _offButtonClick() {
    this.setState({
      showComponent: false,
    });
  }
  
  

  render() {
    return (
      <div>
	 
        <Button variant="contained" color="primary" onClick={this._onButtonClick}>{this.props.buttonName}</Button>
		    <Button variant="contained" color="secondary" onClick={this._offButtonClick}>{this.props.deleteName}</Button>
        <div class= "mostrarMapa">
        {this.state.showComponent ?
            this.props.component:
		   
           this.props.component2
        }
        </div>
		
      </div>
    );
  }
}

export default ButtonToRender