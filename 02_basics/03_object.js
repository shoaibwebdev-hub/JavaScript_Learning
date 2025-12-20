// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const Jsuser = {
    name: "shoaib",
    "full name" : "Shoaib Alam",
    [mySym]: "mykey1",
    age: 18,
    location: "Islamabad",
    email: "shoaib@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser[mySym])


// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

Jsuser.greeting = function(){
    console.log("Hello JS user");
}

Jsuser.greetingTwo = function(){
console.log(`Hello Js User, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());