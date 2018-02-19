// Do not change any of the function names

const makeCat=(name, age)=> {
  let makeCat={
    name: name;
    age: age;
    meow: function (makeCat){
      let meow= 'meow!';
      return meow;
    }
  }
  
};

const addProperty=(object, property)=> {
 object[property]= null;
 return object;
};

const invokeMethod=(object, method) => {
  return object[method]();
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
  // create a new object with properties matching the arguments passed in.
  // return the new object
};

const hasEmail = (user) => {
  // return true if the user has a value for the property 'email'
  // otherwise return false
};

const hasProperty = (object, property) => {
  // return true if the object has the value of the property argument
  // property is a string
  // otherwise return false
};

const verifyPassword = (user, password) => {
  // check to see if the provided password matches the password property on the user object
  // return true if they match
  // otherwise return false
};

const updatePassword = (user, newPassword) => {
  user.password= newPassword;
  return user
};

const addFriend = (user, newFriend) => {
  user.friends.push(newfriend);
  return user;
  
};

const setUsersToPremium = (users) => {
  for (let i = 0; i < users.length; i++)
  users[i].isPremium = true;
  return users;
};

const sumUserPostLikes = (user) => {
  let postsLikeSum = 0
  user.post.forEach(funtion(posts){
    postsLikeSum += posts.likes;
  });
  return postLikeSum;
};

const addCalculateDiscountPriceMethod = (storeItem) => {
  // Add a method to the storeItem object called 'calculateDiscountPrice'
  // This method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  // The method then subtracts the discount from the price and returns the discounted price
  // example:
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)
  // Make sure you return storeItem after adding the method to it
  // hint: arrow functions don't bind a this
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
