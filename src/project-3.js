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
  object[property] = null;
  return object;
};

const invokeMethod = (object, method) => object[method]();

const multiplyMysteryNumberByFive = mysteryNumberObject => mysteryNumberObject.mysteryNumber * 5;


const deleteProperty = (object, property) => {
  // remove the property from the object
  // return the object
  delete object[property];
  return object;
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

const addFriend = (user, newFriend) => {
  user.friends.push(newFriend);
  return user;
};

const setUsersToPremium = (users) => {
  users.forEach((t, i) => {
    t.isPremium = true;
  });
  return users;
};

const sumUserPostLikes = (user) => {
  let total = 0;
  user.posts.forEach((t, i) => {
    total += t.likes;
  });
  return total;
};

const addCalculateDiscountPriceMethod = (storeItem) => {
  // add a method to the storeItem object called 'calculateDiscountPrice'
  // this method should multiply the storeItem's 'price' and 'discountPercentage' to get the discount
  // the method then subtracts the discount from the price and returns the discounted price
  // example:
  // price -> 20
  // discountPercentage -> .2
  // discountPrice = 20 - (20 * .2)
  storeItem.calculateDiscountPrice = () => {
    return storeItem.price - (storeItem.price * storeItem.discountPercentage);
  };
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
