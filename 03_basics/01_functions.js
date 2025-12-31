
function SayMyName(){
    console.log("A");
    console.log("L");
    console.log("A");
    console.log("M");
}

// SayMyName();

// function addTwoNumbers(number1 , number2){
//     console.log(number1+number2);
// }

function addTwoNumbers(number1 , number2){
// let result = number1 + number2
// return result;
return number1 + number2
}

const result = addTwoNumbers(5,6)
// console.log("Result : ", result);

function loginUserMessage(username="Aoun"){
    if(!username){
        console.log("Please enter user name");
        return
    }
        return `${Shoaib} just logged in`
}

// console.log(loginUserMessage("alam"))
// console.log(loginUserMessage("alam"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 600))

const user = {
        username: "shoaib",
        price: 399
}

function handleOject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleobject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));

    
