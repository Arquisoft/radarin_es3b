import React from "react";



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
	 
        <button onClick={this._onButtonClick}>{this.props.buttonName}</button>
		 <button onClick={this._offButtonClick}>{this.props.deleteName}</button>
        {this.state.showComponent ?
           this.props.component:
           null
        }
		
		
      </div>
    );
  }
}

export default ButtonToRender