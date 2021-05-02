import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import getFriends from "../../hooks/solid/LDFlexSolidFriends";
import ProcessAddFriend from "../../hooks/solid/ProcessAddFriend"




/**
 * Renders the list of friends the user has.
 * Receives the user webId as props
 * Holds a list of friends as state
 */
class FriendsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { friends: [] }
    }

    /**
     * The list is the component state.
     * Here we control what happens when that state changes.
     */
    async componentDidUpdate() {

        //Stores the friends list returned by getFriends(), which needs the user webId as a parameter.
        const friendsList = await getFriends(this.props.webId);

        this.setState({ friends: friendsList });
    }


    render() {

        return (

            <div className="FriendsList">
                <ListGroup>
                    {
                        //For each friend, it returns a ListGroup.item holding his information
                        this.state.friends.map(function (user, i) {
                            return <ListGroup.Item id={i} key={i}>{'' + user}</ListGroup.Item>
                        })
                    }
                </ListGroup>
                <ProcessAddFriend/>
            </div>
        )
    }
}

export default FriendsList;