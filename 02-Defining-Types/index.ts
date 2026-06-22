interface User {
    name : string;
    id: number | string;
    
}

const user : User = {
    name:"arbaj",
    id:2,
}

const user2 : User = {
    name:"arbaj",
    id:"2"
}

// const user3 : User = {
//     name:"arbaj",
//     id:true
// } // Error because id is only of number or string allowed 


console.log(user);


const names : Array<string> = ["Arbaj", "Sanket"];

names.push("lakhan");
// names.push(2); // ❌ ERROR! Only strings allowed in this box

names.forEach((name)=>console.log(`name  : ${name}`));


class userAccount {
    name : string;
    id : number;

    constructor(name : string, id: number){
        this.name = name;
        this.id = id
    }

}

const user3 : User = new userAccount("arbaj", 2);

// execution right to left
// 1. create object of userAccount 
// 2. user3 : User ==> this ensure newly created object matches User interface 

console.log(" user3 ",user3);


// this ensure function takes the input which matches User Interface
const deleteUser = function (user : User){
    console.log(`user deleted : ${JSON.stringify(user)}`);
}
deleteUser({name:"abc",id:2});

// this ensure that function returns output of type User
const getUser = function () : User{
    return{name:"abc",id:2};
}

console.log(`getUser : ${JSON.stringify(getUser())}`);

const getUserInput = function (){
    return "xyz";
}

const input : unknown = getUserInput();

console.log(typeof input);

if(typeof input == "string"){

console.log(input.toUpperCase());
}
else if (typeof input == "number"){

console.log(input.toFixed(2));
}

// never
function throwError (message : string):never{
    throw new Error(message);
    // this function never returns normally it always throws 
}
type str = string
function doSomething(message : str):void{
    console.log(message);

    // this function never return anything 
    // just do task and exit
}

type response = "success" | "failed" | "pending"

let myResponse :response = "success"; // allowed
myResponse = "failed";
myResponse = "pending";

//myResponse = "done";// not allowed

interface bagPack<type>{
    add: (obj: type) => void;
    get: () => type;
}

declare let stringBackPack:bagPack<string>;
stringBackPack.add("abc");

// console.log(stringBackPack.get());


interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// This variable is NEVER declared as a Point
const myLocation = { x: 10, y: 20 , z:30};

// But TS accepts it because it HAS x and y ✅
logPoint(myLocation);  // logs "10, 20"