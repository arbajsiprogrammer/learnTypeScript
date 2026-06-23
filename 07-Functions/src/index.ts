function greet(name : string, age?:number): void{
    console.log(`Hello, ${name }`);
}
console.log("greet 1 calling");
greet("arbaj");
greet("arbaj", 23);

// default parameter
function greet2(name : string, age:number = 22): void{
    console.log(`Hello, ${name } ${age}`);
}
console.log("greet 2 calling");

greet2("arbaj");
greet2("arbaj", 23);



// arrow functions
const add = (a:number, b:number):number => a + b;

console.log("\ncalling add")
console.log(add(5, 10));
console.log(add(2, 3));
console.log(add(3, 4));


// function overloading 

function display (value : string):void;
function display (value : number):void;

function display (value : string | number):void {

    if(typeof value == "string"){
        console.log(`this is the string : ${value}`);        
    }else {
        console.log(`this is the number : ${value}`);
    }
}

console.log("\ncalling display");   
display("arbaj");
display(22);


// rest parameters 
function rest(...numbers:number[]):void{

    const addition = numbers.reduce((res, ele)=> res+= ele);
    console.log(`addition is : ${addition}`);

}

console.log("\ncalling rest for addition ");   
rest(1,2,3);
rest(1,2,3,4,5);
