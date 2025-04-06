// const greet = (name: string): string => {
//   return `Hello, ${name}!`;
// }

// console.log(greet("World")); // "Hello, World!"

class Calculator {
    constructor(private a: number, private b: number) {
        this.a = a;
        this.b = b;
    }
    add(): number {
        return this.a + this.b;
    }
    subtract(): number {
        return this.a - this.b;
    }
    multiply(): number {
        return this.a * this.b;
    }
    divide(): number {
        return this.a / this.b;
    }
}


const calc = new Calculator(4, 2);
let added : number = 0;
let subtracted : number = 0;
let multiplied : number = 0 ;
let divided : number = 0;

added = calc.add();
subtracted = calc.subtract();
multiplied = calc.multiply();
divided = calc.divide();


console.log(added);
console.log(subtracted);
console.log(multiplied);
console.log(divided);


function functionTypes(param : number | string) : string{
    if (typeof(param) === "number"){
        return "param is number" ;
    }
    if (typeof(param) === "string"){
        return "param is a string";
    }

    return `param is a ${typeof(param)}`
}

console.log(functionTypes(1));


//union types

type Member = {
    Name: string;
    MemberID: number;
    Active: boolean
}

type Employee = Member & {EmployeeID:number};

const employee : Employee = {
    Name: "Charles",
    MemberID: 0,
    Active: true,
    EmployeeID: 100,
}

console.log(employee)

//interface

interface Address{
    Address: string,

}

interface Student extends Address{
    Name: string,
    StudentID: string,
    Age: number,
    Enrolled? : boolean
    greet(): string,
}

class Person implements Student{
    Name: string;
    Age: number; 
    Enrolled: boolean;
    StudentID: string;
    Address: string;

    constructor(name: string, studentID: string, age: number, address: string, enrolled:boolean = false ){
        this.Name = name;
        this.Age = age;
        this.Enrolled = enrolled;
        this.StudentID = studentID;
        this.Address = address;
    }

    greet(): string {
        return `Hello ${this.Name}, you are probably ${this.Age} years old and lives in ${this.Address}, your student ID is ${this.StudentID}, and you are currently ${this.Enrolled ? "enrolled" : "not yet enrolled"}`
    }
}

const person: Person = new Person("Charles", "A123", 19, "Pasay City");
console.log(person.greet());