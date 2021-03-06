const { default: data } = require("@solid/query-ldflex");

//Store a reference to the user POD
const user = data["https://rcen.solidcommunity.net/profile/card#me"]; //webID of the user

//For DEBUG purposes, prints data extracted from a users POD
//showProfile(user);


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
 * Given a user, returns his friends webIDs
 * @param {*} person 
 */
async function getFriends(person) {

  var friends = [];
  console.log('\nFRIENDS');
  for await (const friendWebID of person.friends){
    friends.push(friendWebID);
  }
  return friends;
    
}

/**
 * DEBUG ONLY
 * Function to test the retrieval of data from a user's POD
 * Queries the data and prints the user's name and friends list
 */
async function showProfile(person) {
  
  const name = await getName(person);
  //console.log(`\nNAME: ${name}`);

  //console.log('\nFRIENDS');
  const friends = await getFriends(person);
  for (const webID of friends){
    //console.log(`  - ${webID} is a friend`);
  }
    
}