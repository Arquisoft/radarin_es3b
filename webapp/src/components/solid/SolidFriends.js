import { useLDflexList } from "@solid/react";

export default function SolidFriends() {

	const friends = useLDflexList("user.friends");
	var ids = [];
	for (var element of friends) {

		var id = `${element}`.split(".")[0];
		ids.push(id.substring(8, id.length));
	}


	return ids;

}



