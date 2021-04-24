import getName from "./SolidName";

const { default: data } = require("@solid/query-ldflex");

/**
 * Given a user's webID, returns a list of his friends webIDs
 * @param {*} person 
 */
async function getFriends(person) {

  var friends = [];


  person = data[person];
  for await (const friendWebID of person.friends) {
    friends.push(friendWebID);
  }
  //console.log(friends);
  var names = [];
  for await (const friendWebID of friends) {
    var name = await getName(`${friendWebID}`);
    names.push(name);
  }

  return names;

}

export default getFriends;