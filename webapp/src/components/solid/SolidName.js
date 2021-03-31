const { default: data } = require("@solid/query-ldflex");

/**
 * Given a user's webID, returns his name
 * Provider specific (Solid Community)
 * @param {*} person 
 */
   async function getName(person) {
    person = data[person + "profile/card#me"]; //provider specific?
    var name = await person.name;
    return name;
  }

  export default getName;