import getName from "./SolidName";

const { default: data } = require("@solid/query-ldflex");

/**
 * Given a user's webID, returns a list of his friends names
 * @param {*} person 
 */
async function getFriends(person) {

  person = data[person];
  
  //For each friend, it returns his webID
  var friendsWebIds = [];
  for await (const friendWebID of person.friends) {
    friendsWebIds.push(friendWebID);
  }
  
  //For each friendWebID, it returns his name
  var names = [];
  for await (const friendWebID of friendsWebIds) {
    var name = await getName(`${friendWebID}`);
    names.push(name);
  }

  return names;

}

export default getFriends;