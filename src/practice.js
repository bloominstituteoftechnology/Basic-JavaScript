arr = [2,3];
arr2 = [8,15];
//newarr = arr.reduce ((item, arr) => {return item*2});
//console.log(newarr);
//newarr = arr => arr * 2;
var double = x => {console.log ("Hi!"); return x * 2;};
power = (x,y) => Math.pow(x,y);
newarr = arr.map(double);
console.log(newarr); 


//arr.reduce (<acc, val) 



//const addNumbers = (numbers) => {
    // numbers is an array of integers.
    // add all of the integers and return the value
   // return numbers.reduce((x,y) => x+y);
  //};
//console.log("This is the reduce sum: ", addNumbers([1,2,3,4,5]));  

const addNumbers = (numbers) => {
    // numbers is an array of integers.
    // add all of the integers and return the value
    function reducefunction (x,y) {
        return x + y;
    }
    return numbers.reduce(reducefunction, 5);

  };
console.log("This is the reduce sum: ", addNumbers([1,2,3,4,5]));  

const largestNumber = (numbers) => {
    // numbers is an array of integers
    // return the largest integer
    return numbers.reduce((x,y) => {if (x < y) {return y;} else {return x}});
  };

  console.log("This is the largest nubmer: ", largestNumber([1,2,10, 12, 3,4,5]));  

  //PLAY WITH POSTS & LIKES ARRAY: 

    const sumUserPostLikes = (user) => {
    // user has an array property called 'posts'
    // posts is an array of post objects
    // each post object has an integer property called 'likes'
    // sum together the likes from all the post objects
    // return the sum
    return user.posts.likes.reduce((x, acc) => x + acc, 0);
  };
  
   
    post = function(name, num) {
        this.name = name;
        this.likes = num;

   }


let post1 = new post('post1', 5);

let post2 = new post('post2', 10);

let post3 = new post('post3', 3);

console.log("post1 likes are: ", post1.likes);

console.log("post1 likes are: ", post2.likes);

console.log("post1 likes are: ", post3.likes);

 var user = function() {
      this.posts = [post1, post2, post3];
      }

let Sam = new user;

console.log('This is Sam: ', Sam);

console.log('This is Sam\'s posts: ', Sam.posts);
console.log("This is Sam's likes: ", Sam.posts[1].likes);

console.log("The sum: ", sumUserPostLikes(Sam));

