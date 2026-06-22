// array declaration syntax

// using []
const numArray : number[] = [1,2,3,4,5,6,7,8,9];
 
// using <>
const stringArray : Array<string> = ["abc","xyz", "opq", "efg"];

// operations 
const fruits: string[] = ["apple", "banana", "mango"];
fruits.push("orange");           // add at end
fruits.pop();                    // remove from end
fruits.unshift("grapes");        // add at start
fruits.shift();                  // remove from start

console.log(fruits.length);      // 3
console.log(fruits[0]);          // apple
console.log(fruits.includes("mango")); // true

// fruits.push(42);     // ERROR! only strings allowed
// fruits.push(true);


// Array of Object 

interface Student{
    name : string;
    age : number;
    grade : string;
}

const students : Student[] = [];

students.push({name : "arbaj", age:22, grade : "A"})

students.push({name : "arbaj2", age:22, grade : "A"})

// students.push({name : "arbaj", age:22 ) // Error => missing property (grade)

students.forEach((student) => {
  console.log(`${student.name} - Grade: ${student.grade}`);
});

const mixedData : (string | number)[] = ["abc", 21,32, "xyz"];

mixedData.push(21);
mixedData.push("efg");
// mixedData.push(true); //Error : Argument of type 'boolean' is not assignable to parameter of type 'string | number'


// read only array - can not be modify 

const tempArray : readonly number[] = [1, 2, 3, 4];

console.log(tempArray[0]);// reading allowed

// tempArray.push(5); //push= modification not allowed  => Property 'push' does not exist on type 'readonly number[]'.ts(2339)

// tempArray.pop();//Error : Property 'pop' does not exist on type 'readonly number[]'.

// tempArray[0] = 10;//Error : Index signature in type 'readonly number[]' only permits reading.

const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// console.log(matrix[0][0]); //Error: Object is possibly 'undefined'.
console.log(matrix[0]? matrix[0][0] : 0); 
console.log((matrix[0] as number[])[0]); 
console.log(matrix[0]![0]); 