const { default: data } = require("@solid/query-ldflex");

//Store a reference to the user POD




/**
 * Given a user, returns his name
 * 
 * @param {*} person 
 */
async function getName(person) {
  const name = await person.name;
  return name;
}

/**
 * Given a user's webID, returns a list of his friends webIDs
 * @param {*} person 
 */
async function getFriends(person) {

  var friends = [];
  person = data[person];
  for await (const friendWebID of person.friends){ //Alternativas: person.friends.firstName
    friends.push(friendWebID);
  }
  return friends;
    
}

/**
 * DEBUG ONLY
 * Function to test the retrieval of data from a user's POD
 * Queries the data and prints the user's name and friends list
 */
//async function showProfile(person) {
  
  //const name = await getName(person);
  //console.log(`\nNAME: ${name}`);

  //console.log('\nFRIENDS');
 // const friends = await getFriends(person);
  //for (const webID of friends){
    //console.log(`  - ${webID} is a friend`);
  //}
    
}

export default getFriends