import React from "react";
import Button from '@material-ui/core/Button';



class ButtonToRender extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showComponent: false,
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
        {this.state.showComponent ?
           this.props.component:
           null
        }
		
		
      </div>
    );
  }
}

export default ButtonToRender