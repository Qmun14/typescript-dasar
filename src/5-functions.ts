/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

export { }; // quick fix for global variable

/**
 * 1. function declaration, expression, arrow
 * 2. optional & default parameters
 * 3. rest parameter
 * 4. conditional type with union, generic, overlods
 */

/********** 1. Basic Function  ***********/
/* Function Declaration, Expession, Arrow
 */

// function declaration
function add(x: number, y: number, z?: number, a = 0): number {
  return x + y + a;
}

console.log(add(1, 3));

// function expression
const addEx = function (x: number, y: number): number {
  return x + y;
};
console.log(addEx(2, 5));

// arrow function
const addArrow = (x: number, y: number) => x + y;
console.log(addArrow(100, -50));

// function with no return value
const hello = (name: string) => console.log("hello " + name);
hello("namamu");

// function with callback
type Greeter = (message: string) => void;         //! <<========= untuk function with callback atau function yg memiliki callback gunakan type aliases untuk callbacknya

function request(url: string, cb: Greeter) {
  cb(url);
}

let fn = (str: string) => console.log(str);

request('https://qmun14.com/hello', fn);

/********** 2. optional & default parameters  ***********/
/*
| parameters | required | default value |
| ---------- | -------- | ------------- |
| firstName  | Yes      |               |
| lastName   | Yes      |               |
| gender     | No       |               |
| languange  | No       | english       |
*/

type Contact = {
  firstName: string,
  lastName: string,
  languange: string
  gender?: string,
}


function submitContact(firstName: string, lastName: string, languange = 'english', gender?: string): Contact {
  return {
    firstName: firstName,
    lastName: lastName,
    languange,
    ...(gender && { gender }),
  };
}

let result = submitContact('Mayer', "Amstrong", "english");
console.log(result)



/********** 3. Rest Parameter  ***********/

function fruitsCollection(item: string, ...restItems: (string | number)[]) {
  return item + " " + restItems.join(" ");
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado', 90, 1000);
console.log(fruits);

/********* 4. conditional type with union ***********/
/*
  - accept parameter either string or number
  - return either string or number
  - don't use `any`
*/
// solution 1: union
function CT(param: string | number): string | number {
  return param
}

// solution 2 : generic
// type variabel ==> deteksi type data dari caller-nya
function CT_Generic<T>(param: T): T {
  return param
}

CT_Generic<string>('Hello');
CT_Generic<number>(100);

// solution 3 : overloading
function CT_Overload(param: string): string;
function CT_Overload(param: number): number;
function CT_Overload(param: any): any {
  return param;
}

CT_Overload("Hello");
CT_Overload(10);
// CT_Overload(false);

