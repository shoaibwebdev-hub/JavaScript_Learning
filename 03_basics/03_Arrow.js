
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "shoaib"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "shoaibb"
//     console.log(this.username);
// }


const chai = function() {
    let username = "shoaib"
    console.log(this.username);
}

const chai = () => {
let username = "alam"
console.log(this);
}

chai()

const addTwo = (num1, num2) => {
    return num1 + num2
}

const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => (num1 + num2)

const addTwo (num1, num2) => ({username: "shoab"})

console.log(addTwo(addTWo(3,4)))