import React from "react";

import { getUserLocalization } from "../../api/api";
//import { store } from 'react-notifications-component';

import addNotification from 'react-push-notification';

class FriendNotification extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			friends: new Map()
		};
	}
    
	async patata() {

        var friendstext = "";

		for (var element of this.props.amigos) {
			var friend = await getUserLocalization(element);
			
			if (friend.user !== "error" ) {
				if( !this.state.friends.has(element)) {
					
					this.state.friends.set(friend.user,friend);
					friendstext += friend.user;
                    friendstext += ", ";
				}
			}
			else {
                if(this.state.friends.has(element)){
                    this.state.friends.delete(element)
				}
			}
		}
        
        //quitar la ultima coma
        
        if (friendstext !== ''){
            addNotification({
                title: 'Los amigos ya conectados',
                subtitle: 'subtitle',
                message: friendstext,
                theme: 'darkblue',
                native: true // when using native, your OS will handle theming.
            });
        }
	}
	
	async componentDidUpdate() {
		for (var element of this.props.amigos) {
			var friend = await getUserLocalization(element);
			
			if (friend.user !== "error" ) {
				if( !this.state.friends.has(element) || this.state.friends.get(element).longitude!== friend.longitude|| this.state.friends.get(element).latitude!== friend.latitude){
					
					if( this.state.friends.has(element)){
						this.state.friends.delete(element)
					}
					this.state.friends.set(friend.user,friend);
					
				}
			}
			else {
				if(this.state.friends.has(element)){
					this.state.friends.delete(element)
				}
			}
		}
	}

	render() {

        this.patata();
		return (
			<div>
				
			</div>
		);
	}
}

export default FriendNotification;