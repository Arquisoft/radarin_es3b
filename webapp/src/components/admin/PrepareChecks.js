import React from "react";



import CheckSession from "./CheckSession"


//import { store } from 'react-notifications-component';

class PrepareChecks extends React.Component {

	
	
	
	
	
  
	

	

	render() {
		
		console.log(this.props.userWebID)
		
		 return (
		 
			<CheckSession userWebID={this.props.userWebID}/>
			
		 );
		
	}



}

export default PrepareChecks;