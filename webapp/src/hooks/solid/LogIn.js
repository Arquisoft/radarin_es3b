import Button from '@material-ui/core/Button';
import React from 'react';

import auth from 'solid-auth-client';





class AddFriend extends React.Component {
	
	



    constructor(props) {
        super(props);
        this.state = { url: '',response:' ' }
		
		
    }
	
    changeUrl(e) {
        const url = e.target.value ;
        this.setState({url: url});
    }
	
	
   async login(idp) {
		
		 let popupUri = 'https://solidcommunity.net/common/popup.html'; 
		 auth.popupLogin({ popupUri });
		
		
		
	}
	
	
	
	  
  

    render() {
		 console.log(this.state.response);
		 	 
        return (
            <div className="login">
				
                
                <Button variant="contained" color="primary" onClick={() => this.login(this.state.url)}>
                     login </Button>
					 
               
                
            </div>
        );
    


	}



}

export default AddFriend