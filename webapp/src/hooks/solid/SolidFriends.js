import { useLDflexList } from "@solid/react";

export default function SolidFriends() {

	//Retrieves the user's friends
	const friends = useLDflexList("user.friends");
	var usernames = [];
	for (var element of friends) {
		//for each friend, takes his username
		var id = `${element}`.split(".")[0];
		usernames.push(id.substring(8, id.length));
	}

	return usernames;

}



