class myClass {
    public name :string;
    protected organizationName : string;
    private salary : number;

    
    constructor(name:string,organizationName : string, salary : number ){
        this.name = name;
        this.organizationName = organizationName;
        this.salary = salary;
    }

    getSalary() : number{
        return this.salary;
    }

}

class childClass extends myClass{
    constructor(name:string,organizationName : string, salary : number ){
        super(name, organizationName, salary)
    }
    getOrganizationName() {
        console.log(`organizationName : ${this.organizationName}`);
    }
}

const obj = new myClass("Arbaj", "iProgrammer", 4.2);
console.log("printing object data");

console.log(obj.name);// Arbaj


// console.log(obj.organizationName); Error : Property 'organizationName' is protected and only accessible within class 'myClass' and its subclasses.
const obj2  = new childClass("Arbaj2", "iProgrammer", 7.5);
obj2.getOrganizationName();

console.log(obj.getSalary());
// console.log(obj.salary) ;// Error : Property 'salary' is private and only accessible within class 'myClass'.



