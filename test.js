collection = [111,222,33,1,2,3,1,1,1,1,2,2,2,3,3,3,4,4]

const uniqueArr = [];

collection.forEach((el) => {
  if (!uniqueArr.includes(el)) { uniqueArr.push(el); }
});