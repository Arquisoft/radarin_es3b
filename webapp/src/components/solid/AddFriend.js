import Button from '@material-ui/core/Button';
import React from 'react';
import Form from "react-bootstrap/Form";
import getName from "../../hooks/solid/SolidName";
import ldflex from "@solid/query-ldflex";




class AddFriend extends React.Component {


    constructor(props) {
        super(props);
        this.state = { friendWebId: '', error:false }
    }


    changeUrl(e) {
        const url = e.target.value ;
        this.setState({friendWebId: url});
    }
	
	async addFriend (friendWebId, userWebId){
		console.log(friendWebId);
		console.log(userWebId);
		
		try {  
			var name = await getName(friendWebId.trim());
			console.log(name)
			if(name!==undefined){
				let response=await ldflex[userWebId].knows.add(ldflex[friendWebId.trim()]);	
				console.log(response);
			}
		} catch (error){
			this.state.error=true;
			
		}	

		
		
	}
	
	async deleteFriend (friendWebId, userWebId){
		console.log(friendWebId);
		console.log(userWebId);
		
	
		


		let response=await ldflex[userWebId].knows.delete(ldflex[friendWebId.trim()]);	
		console.log(response);


		
		
		
	}

    render() {
        return (
            <div className="AddFriend">
                <h3> Añadir amigo </h3>
                <Form name="friend">
                    <Form.Group>
                        <Form.Label>URL del amigo a agregar/borrar: </Form.Label>
                        <Form.Control name="url" type="text" placeholder="WebID/URL" onChange={this.changeUrl.bind(this)} value={this.state.friendWebId} required/>
						<Form.Label> Ejemplo: https://usuario.solidcommunity.net/</Form.Label>
						
                    </Form.Group>
                    <Button variant="contained" color="primary" onClick={() => this.addFriend(this.state.friendWebId,this.props.userWebId)}>
                       agregar </Button>
					 <Button variant="contained" color="secondary" onClick={() => this.deleteFriend(this.state.friendWebId,this.props.userWebId)}>
                       borrar </Button>
                </Form>
                
            </div>
        )
    }






}

export default AddFriend