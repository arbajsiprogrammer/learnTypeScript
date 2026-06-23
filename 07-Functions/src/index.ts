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