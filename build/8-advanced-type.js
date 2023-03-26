"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CreateUser(data) { }
CreateUser({
    age: 20,
    createdAt: new Date(),
});
const message = {
    id: '1',
    name: 'John Doe',
    address: '',
    age: '12'
};
console.log(message);
const allUsers = {
    '1': { id: 1, name: "John AB", createdAt: new Date(), age: 20 },
    '2': { id: 2, name: "Foe Feng", createdAt: new Date(), age: 36 }
};
console.log(allUsers);
