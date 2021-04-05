import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import getFriends from "./LDFlexPODConnection";



class FriendsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { friends: ["estado", "inicial"] }
    }

    async componentDidMount() {
        
       
        
        //Sustituir la URL siguiente, 
        //por el webID que debería recibirse como props (this.props.userWebID)
        // ¿Cómo pasarlo como parámetro sin llamar a hooks?
        const data = await getFriends(this.props.webId);//this.props.userWebID);
        console.log(data);
        
        this.setState({ friends: data });
    }

    render() {
        return (
            <div className="FriendsList">
                <h2>Amigos (class + lib)</h2>
                <ListGroup>
                    {
                        this.state.friends.map(function (user, i) {
                            return <ListGroup.Item id={i} key={i}>{ i + ' : ' + user}</ListGroup.Item>
                        })
                    }
                </ListGroup>
            </div>
        )
    }
}

export default FriendsList