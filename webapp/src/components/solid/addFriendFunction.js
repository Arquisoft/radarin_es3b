import ldflex from "@solid/query-ldflex";


export const addFriend = async (friendWebId, userWebId) => {
	console.log(friendWebId);
	console.log(userWebId);


	await ldflex[userWebId].knows.add(ldflex[friendWebId]);	



	
};