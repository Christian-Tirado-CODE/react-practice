//Primitives:
// Arrays and Objects:
// Function Types, parameters

// Primitives

let age: number = 24;
age = 12;

let username: string;
username = "Christian";

let isChristianHandsome: boolean;
isChristianHandsome = true;

// Reference Types

//Arrays
let names: string[];
names = ["Shawn", "Tyrone", "Brad", "Juano"];

// Objects
let person: {
  name: string;
  age: number;
};

person = {
  name: "Juano",
  age: 32,
};

let people: {
  name: string;
  age: number;
}[];

people = [
  { name: "Shakira", age: 28 },
  { name: "Joe", age: 80 },
];

// Type Inference:
let course = "React - The Complete Guide";
//course = 1234; Error: typescript infers the data type based on the value assigned.

// Union Types = A type definition that allows multiple types.
let dog: string | number = "Shailo";

dog = 1;

// Type Aliases - Allows us to reuse type definitions

type Animal = {
  name: string;
  color: string;
};

let cat: Animal;

let cats: Animal[];


// Functions & Function Types

const substract = (a: number, b:number):number => {
  return a - b; // Return is of type number. You can see it after the colon(:) 
                // if you hover over. It can be infered or we can set it after the parameters.
};

const printOutput = (value: any) => {
  console.log(value); // Since we don't return anything it has a return type of void.
};



