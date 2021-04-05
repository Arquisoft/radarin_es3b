import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import getFriends from "./LDFlexPODConnection";




class FriendsList extends React.Component { 
    
    constructor(props) {
        super(props);
        this.state = { friends: ["estado", "inicial"] }
    }

    async componentDidMount() {
        
    
        console.log(this.props.webId);
        const data = await getFriends("https://luislomba.solidcommunity.net/profile/card#me");//this.props.userWebID);
        console.log(data);
        
        this.setState({ friends: data });
    }

    
    render() {

        
        return (
            
            <div className="FriendsList">
                <ListGroup>
                    {
                        this.state.friends.map(function (user, i) {
                            return <ListGroup.Item id={i} key={i}>{ (i+1) + ' : ' + user}</ListGroup.Item>
                        })
                    }
                </ListGroup>
            </div>
        )
    }
}

export default FriendsList