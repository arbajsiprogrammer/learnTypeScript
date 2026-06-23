
// interface User {
// name : string;
// age : number;
// }

// type partialUser = Partial<User>;

// const user :partialUser = {
//     name : 'arbaj'
// }

// console.log(user);


//  ************** Required ***************** 
// interface User {
// name?: string;
// age?: number;
// }

// type requiredUser = Required<User>;

// const user :requiredUser = {
//     name : 'arbaj',
//     age:22
// }

// console.log(user);

// ******************** Pick **********************

// interface User {
//     id: number;
//     name: string;
//     email: string;
//     password: string;
// }

// type UserResponse = Pick<User, "id" | "email" |"name">;

// const user:User = {
//     id: 21,
//     name: "string",
//     email: "string",
//     password: "string",
// }


// const response:UserResponse = {
//     id: user.id,
//     name: user.name,
//     email: user.email,
// }; 

// console.log(`response : ${JSON.stringify(response)}`);



// ******** Omit ********************

// interface User {
//     id: number;
//     name: string;
//     email: string;
//     password: string;
// }

// type userResponse = Omit<User, "password">;

// const user:User = {
//     id: 21,
//     name: "string",
//     email: "string",
//     password: "string",
// }


// const response:userResponse = {
//     id: user.id,
//     name: user.name,
//     email: user.email
// }
// console.log(response);

// ************* Record ****************

// type Roles = Record<string, string>;

// type userRoles = Record<"admin" | "vendor" | "customer", string>

// const roles : userRoles = {
//     admin : "admin",
//     vendor : "vendor",
//     customer : "customer"
// }

// **************** Read Only **********************

interface User {
    id: number;
    name: string;
    email: string;
    password: string;
}

type userRestrictions = Readonly<User>;

const user:userRestrictions = {
    id: 21,
    name: "string",
    email: "string",
    password: "string",
}

// user.password = "new password"; Error : Cannot assign to 'password' because it is a read-only property.
