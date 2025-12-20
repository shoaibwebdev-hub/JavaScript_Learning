// Array

const myArr = [0,1,2,3,4,5]
const myHeros = ["Superman", "Spiderman"]

const myArr2 = new Array (5,6,7,8)
// console.log(myArr[1]);
// console.log(myArr2[2])

// Array methods

// myArr.push(8)
// myArr.pop(4)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);

// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B", myArr);

const  myn2 = myArr.splice(1,3)
console.log("C", myArr);
console.log(myn2);