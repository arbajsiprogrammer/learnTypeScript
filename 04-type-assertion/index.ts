// tye assertion 

const input = window.prompt("Enter something!!!");

// input.charAt(0); withput ?//error : input is possibly null

input?.charAt(0);// with ?

interface User {
    name : string;
    age: number;
}

const getUser = async () => {
    
  const response = await fetch("https://api.example.com/user");
  const data = await response.json();

  const user = data as User;

  console.log(user.name);
  console.log(user.age);
}

function process(value: string | number) {

  // TYPE ASSERTION — You're FORCING TS to believe you
  // Dangerous! No actual runtime check!
  const str = value as string;
  str.toUpperCase(); // might CRASH if value is actually a number!


  // TYPE NARROWING — You're actually CHECKING the type
  // Safe! Actual runtime check happens
  if (typeof value === "string") {
    value.toUpperCase(); // 100% safe!
  }
}


// interface User {
//   name: string;
//   email: string;
//   age: number;
// }

// // fetch returns → Promise<any>
// // TS has no idea what shape the data is
// async function getUser() {
//   const response = await fetch("https://api.example.com/user");
//   const data = await response.json(); // TS thinks → any

//   // You KNOW the API returns a User shape
//   // So you assert it!
//   const user = data as User;

//   // Now you get full type safety ✅
//   console.log(user.name);
//   console.log(user.email);
//   console.log(user.age);
// }