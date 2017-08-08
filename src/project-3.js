// Do not change any of the function names

const makeCat = (name, age) => {
  // create a new object with a name property with the value set to the name argument
  // add an age property to the object with the value set to the age argument
  // add a method called meow that returns the string 'Meow!'
  // return the object
  const cat = {
    name: "Spike",
    age: 10,
    const meow: () => {
      console.log("Meow!");
    }
  }
  return cat;
};

const pet = makeCat();
console.log(pet);

const addProperty = (object, property) => {
  // add the property to the object with a value of null
  // return the object
  // note: the property name is NOT 'property'.  The name is the value of the argument called property (a string)
  const prop = {
    car: "Honda",
  } 
  prop.truck = "Chevy"; // New property
  return prop;
};

const auto = addProperty();
console.log(auto);

const invokeMethod = (object, method) => {
  // method is a string that contains the name of a method on the object
  // invoke this method
  // nothing needs to be returned
  const meth = {
    symptom1: "munchies",
    symptom2: () => {
      console.log("High");
    }
  }
  meth.symptom2(); // Will return "High"
};
  const usage = invokeMethod();
  console.log(usage);

const multiplyMysteryNumberByFive = (mysteryNumberObject) => {
  // mysteryNumberObject has a property called mysteryNumber
  // multiply the mysteryNumber property by 5 and return the product
  const mult = {
    mysteryNumber: mysteryNumberObject * 5,
  }
  return mult;
};
  const multip = multiplyMysteryNumberByFive(4);
  console.log(multip);

const deleteProperty = (object, property) => {
  // remove the property from the object
  // return the object
  const food = {
    item1: "fries",
    item2: "burger",
  }
  delete food.item2;
  return food;
};
  const meal = deleteProperty();
  console.log(meal);

const newUser = (name, email, password) => {
  // create a new object with properties matching the arguments passed in.
  // return the new object
  const user ={
    name: name,
    email: email,
    password,
  }
  return user;
};
  const person = newUser("Allan", "al@al.com", "pwd1");
  console.log(person);

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
  // replace the existing password on the user object with the value of newPassword
  // return the object
};

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
