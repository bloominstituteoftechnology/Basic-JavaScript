// Do not change any of the function names

// create a new object with a name property with the value set to the name argument
// add an age property to the object with the value set to the age argument
// add a method called meow that returns the string 'Meow!'
// return the object
const makeCat = (catName, catAge) => {
  const cat = {
    name: catName,
    age: catAge,
    meow: () => 'Meow!'
  };
  return cat;
};

// add the property to the object with a value of null
// return the object
// note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
const addProperty = (object, property) => {
  object[property] = null;
  return object;
};
// method is a string that contains the name of a method on the object
// invoke this method
// nothing needs to be returned
const invokeMethod = (object, method) => {
  object[method]();
};

// mysteryNumberObject has a property called mysteryNumber
// multiply the mysteryNumber property by 5 and return the product
const multiplyMysteryNumberByFive = (mysteryNumberObject) => {
  return mysteryNumberObject.mysteryNumber * 5;
};

// remove the property from the object
// return the object
const deleteProperty = (object, property) => {
  delete object[property];
  return object;
};

// create a new object with properties matching the arguments passed in.
// return the new object
const newUser = (userName, userEmail, userPassword) => {
  return {
    name: userName,
    email: userEmail,
    password: userPassword
  };
};

// return true if the user has a value for the property 'email'
// otherwise return false
const hasEmail = user => !!user.email;


// return true if the object has the value of the property argument
// property is a string
// otherwise return false
const hasProperty = (object, property) => {
  return !!object[property];
};

// check to see if the provided password matches the password property on the user object
// return true if they match
// otherwise return false
const verifyPassword = (user, password) => {
  return user.password === password;
};

// replace the existing password on the user object with the value of newPassword
// return the object
const updatePassword = (user, newPassword) => {
  user.password = newPassword;
  return user;
};

// user has a property called friends that is an array
// add newFriend to the end of the friends array
// return the user object
const addFriend = (user, newFriend) => {
  user.friends.push(newFriend);
  return user;
};

// users is an array of user objects.
// each user object has the property 'isPremium'
// set each user's isPremium property to true
// return the users array
const setUsersToPremium = (users) => {
  for (let i = 0; i < users.length; i++) {
    users[i].isPremium = true;
  }
  return users;
};

// user has an array property called 'posts'
// posts is an array of post objects
// each post object has an integer property called 'likes'
// sum together the likes from all the post objects
// return the sum
const sumUserPostLikes = (user) => {
  let sumLikes = 0;
  for (let i = 0; i < user.posts.length; i++) {
    sumLikes += user.posts[i].likes;
  }
  return sumLikes;
};

// Add a method to the storeItem object called 'calculateDiscountPrice'
// This method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
// The method then subtracts the discount from the price and returns the discounted price
// example:
// price -> 20
// discountPercentage -> .2
// discountPrice = 20 - (20 * .2)
// Make sure you return storeItem after adding the method to it
// hint: arrow functions don't bind a this
const addCalculateDiscountPriceMethod = (storeItem) => {
  const priceWithDiscount = () => {
    const discountAmount = storeItem.price * storeItem.discountPercentage;
    const discount = storeItem.price - discountAmount;
    return discount;
  };
  storeItem.calculateDiscountPrice = priceWithDiscount;
  return storeItem;
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
