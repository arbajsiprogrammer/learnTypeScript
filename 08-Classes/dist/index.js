"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class myClass {
    name;
    organizationName;
    salary;
    constructor(name, organizationName, salary) {
        this.name = name;
        this.organizationName = organizationName;
        this.salary = salary;
    }
    getSalary() {
        return this.salary;
    }
}
class childClass extends myClass {
    constructor(name, organizationName, salary) {
        super(name, organizationName, salary);
    }
    getOrganizationName() {
        console.log(`organizationName : ${this.organizationName}`);
    }
}
const obj = new myClass("Arbaj", "iProgrammer", 4.2);
console.log("printing object data");
console.log(obj.name); // Arbaj
const obj2 = new childClass("Arbaj2", "iProgrammer", 7.5);
// console.log(obj.organizationName); Error : Property 'organizationName' is protected and only accessible within class 'myClass' and its subclasses.
console.log(obj2.getOrganizationName());
console.log(obj.getSalary());
// console.log(obj.salary) ;// Error : Property 'salary' is private and only accessible within class 'myClass'.
//# sourceMappingURL=index.js.map