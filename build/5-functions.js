"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(x, y, z, a = 0) {
    return x + y + a;
}
console.log(add(1, 3));
const addEx = function (x, y) {
    return x + y;
};
console.log(addEx(2, 5));
const addArrow = (x, y) => x + y;
console.log(addArrow(100, -50));
const hello = (name) => console.log("hello " + name);
hello("namamu");
function request(url, cb) {
    cb(url);
}
let fn = (str) => console.log(str);
request('https://qmun14.com/hello', fn);
function submitContact(firstName, lastName, languange = 'english', gender) {
    return {
        firstName: firstName,
        lastName: lastName,
        languange,
        ...(gender && { gender }),
    };
}
let result = submitContact('Mayer', "Amstrong", "english");
console.log(result);
function fruitsCollection(item, ...restItems) {
    return item + " " + restItems.join(" ");
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado', 90, 1000);
console.log(fruits);
function CT(param) {
    return param;
}
function CT_Generic(param) {
    return param;
}
CT_Generic('Hello');
CT_Generic(100);
function CT_Overload(param) {
    return param;
}
CT_Overload("Hello");
CT_Overload(10);
