// type inference(Implicit)
let ti = 'hello';

// ti = 123

// type annotation(Explicit)
let ta: string = 'hello ts new';

// ta = [1,2,3];


let a;                  // undefined
let b: boolean;           // boolean
b = true;

let c: number;              // number
c = 112

let d: string;        // string
d = "Hello";

let e: bigint;           // big int (starting ES2020)
e = 100n

let f: symbol;          // symbol  (starting ES2015)
f = Symbol("Sym");

let g: () => void;          // function
g = function () {
  return null;
};

let h: null;           // null ( special primitive )
h = null;

let i: {};             // Object Literal
i = {};

let j: [];             // array
j = [];

class Product {
  // class
  //...
}
let k = new Product();

let z: any;         // <<<<+++++++++++++============= tidak disarankan/ hanya untuk case tertentu
z = 1;
z = "asdas";
z = {};
z = [];

function sum(a: number, b: number): number {

  // todo: validatin

  return a + b;

}

let arg1 = 2;
let arg2 = 5;

let result = sum(arg1, arg2);
console.log(result);
// ==============================================================

let multi: string | number;
multi = "asdas";
multi = 1234;
// multi = true;

type CustomType = string | number | boolean;
let myType: CustomType;
myType = "asdsd";
myType = 12323;
myType = false;
