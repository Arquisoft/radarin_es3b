import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import getFriends from "./LDFlexPODConnection";




class FriendsList extends React.Component { 
    
    constructor(props) {
        super(props);
        this.state = { friends: [] }
    }

    async componentDidUpdate() {

        const data = await getFriends(this.props.webId);

        this.setState({ friends: data });
    }

    
    render() {

        
        return (
            
            <div className="FriendsList">
                <ListGroup>
                    {
                        this.state.friends.map(function (user, i) {
                            return <ListGroup.Item id={i} key={i}>{'' + user}</ListGroup.Item>
                        })
                    }
                </ListGroup>
            </div>
        )
    }
}

export default FriendsList;