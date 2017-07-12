// Do not change any of the function names

const makeCat = (name, age) => {
  class Cat {
    constructor() {
      this.name = name;
      this.age = age;
      this.meow = () => 'Meow!';
    }
  }
  return new Cat();
};

const addProperty = (object, property) => {
  // add the property to the object with a value of null
  // return the object
  // note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)


};

const invokeMethod = (object, method) => {
  // method is a string that contains the name of a method on the object
  // invoke this method
  // nothing needs to be returned
};

const multiplyMysteryNumberByFive = (mysteryNumberObject) => {
  // mysteryNumberObject has a property called mysteryNumber
  // multiply the mysteryNumber property by 5 and return the product
};

const deleteProperty = (object, property) => {
  // remove the property from the object
  // return the object
};

const newUser = (name, email, password) => {
  class User {
    constructor() {
      this.name = name;
      this.email = email;
      this.password = password;
    }
  }
  return new User();
};

const hasEmail = user => typeof user.email !== 'undefined' && user.email !== '';
  // return true if the user has a value for the property 'email'
  // otherwise return false


const hasProperty = (object, property) => typeof object[property] !== 'undefined';
  // return true if the object has the value of the property argument
  // property is a string
  // otherwise return false


const verifyPassword = (user, password) => user.password === password;
  // check to see if the provided password matches the password property on the user object
  // return true if they match
  // otherwise return false


const updatePassword = (user, newPassword) => {
  user.password = newPassword;
  return user;
};
  // replace the existing password on the user object with the value of newPassword
  // return the object


const addFriend = (user, newFriend) => {
  // user has a property called friends that is an array
  // add newFriend to the end of the friends array
  // return the user object
};

const setUsersToPremium = (users) => {
  // users is an array of user objects.
  // each user object has the property 'isPremium'
  // set each user's isPremium property to true
  // return the users array
};

const sumUserPostLikes = (user) => {
  // user has an array property called 'posts'
  // posts is an array of post objects
  // each post object has an integer property called 'likes'
  // sum together the likes from all the post objects
  // return the sum
};

const addCalculateDiscountPriceMethod = (storeItem) => {
  // add a method to the storeItem object called 'calculateDiscountPrice'
  // this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  // the method then subtracts the discount from the price and returns the discounted price
  // example:
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)
};

// Do not modify code below this line.
// --------------------------------

module.exports = {
  makeCat,
  addProperty,
  invokeMethod,
  multiplyMysteryNumberByFive,
  deleteProperty,
  newUser,
  hasEmail,
  hasProperty,
  verifyPassword,
  updatePassword,
  addFriend,
  setUsersToPremium,
  sumUserPostLikes,
  addCalculateDiscountPriceMethod
};
