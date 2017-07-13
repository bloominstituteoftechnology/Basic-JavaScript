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
  object[property] = null;
  return object;
};

const invokeMethod = (object, method) => object[method]();

const multiplyMysteryNumberByFive = mysteryNumberObject => mysteryNumberObject.mysteryNumber * 5;

const deleteProperty = (object, property) => {
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

const hasProperty = (object, property) => typeof object[property] !== 'undefined';

const verifyPassword = (user, password) => user.password === password;

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
