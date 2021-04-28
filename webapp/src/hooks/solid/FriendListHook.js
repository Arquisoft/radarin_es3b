import { useWebId } from "@solid/react";
import FriendsList from "../../components/solid/FriendsList.js";


export default function FriendListHook() {
	var id = useWebId();
	id = `${id}`;

	return (

		<FriendsList webId={id} />
	);

}

