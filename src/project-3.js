// Do not change any of the function names

const makeCat = (name, age) => {
  const cat = {};
  cat.name = name;
  cat.age = age;
  cat.meow = () => 'Meow!';
  return cat;
};

const addProperty = (object, property) => {
  object[property] = null;
  return object;
};

const invokeMethod = (object, method) => {
  object[method]();
};

const multiplyMysteryNumberByFive = (mysteryNumberObject) => {
  return mysteryNumberObject.mysteryNumber * 5;
};

const deleteProperty = (object, property) => {
  delete object[property];
  return object;
};

const newUser = (name, email, password) => {
  const user = {
    name,
    email,
    password,
  };
  return user;
};

const hasEmail = (user) => {
  if (user.email) {
    return true;
  }
  return false;
};

const hasProperty = (object, property) => {
  if (object[property]) {
    return true;
  }
  return false;
};

const verifyPassword = (user, password) => {
  if (user.password === password) {
    return true;
  }
  return false;
};

const updatePassword = (user, newPassword) => {
  user.password = newPassword;
  return user;
};

const addFriend = (user, newFriend) => {
  user.friends.push(newFriend);
  return user;
};

const setUsersToPremium = (users) => {
  for (let i = 0; i < users.length; i++) {
    users[i].isPremium = true;
  }
  return users;
};

const sumUserPostLikes = (user) => {
  let sum = 0;
  for (let i = 0; i < user.posts.length; i++) {
    sum += user.posts[i].likes;
  }
  return sum;
};

const addCalculateDiscountPriceMethod = (storeItem) => {
  storeItem.calculateDiscountPrice = () => {
    const discountPrice = storeItem.price - (storeItem.price * storeItem.discountPercentage);
    return discountPrice;
  };
  return storeItem;
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
