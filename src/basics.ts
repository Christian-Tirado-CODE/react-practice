//Primitives: 
// Arrays and Objects:
// Function Types, parameters



// Primitives

let age: number = 24;
age = 12;

let username: string;
username = 'Christian';

let isChristianHandsome:boolean;
isChristianHandsome = true;


// Reference Types

//Arrays
let names: string[];
names = ['Shawn', 'Tyrone', 'Brad', 'Juano'];


// Objects
let person: {
    name: string;
    age: number;
};

person = {
    name: 'Juano',
    age: 32
}

let people: {
 name: string;
 age: number;
}[];

people = [
    {name: 'Shakira', age: 28},
    {name: 'Joe', age: 80}
]


// Type Inference:
let course = "React - The Complete Guide"; 
//course = 1234; Error: typescript infers the data type based on the value assigned.

// Union Types = A type definition that allows multiple types.
let dog: string | number = "Shailo";

dog=1;