"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let product_p = {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    note: ""
};
let product;
product = {
    id: "ID-2",
    productName: "Macbook Air Pro",
    price: 4000,
    note: ""
};
let product_2;
let product_3;
product_2 = {
    id: "ID-3",
    productName: "Asus Rog Gaming",
    price: 2500,
    note: "kredit"
};
product_3 = {
    id: "ID-4",
    productName: "Es Kalapa",
    price: 40,
    note: "nganjuk"
};
let item1;
item1 = {
    id: "ID-1",
    productName: "Macbook Pro",
    price: 2000,
    productDetail: {
        year: 2019,
        storage: 256
    }
};
let user1;
user1 = {
    id: "U-1",
    name: "Adi dodi",
    address: [
        {
            street: "Jln. Setapak No.2",
            city: "Jakarta"
        },
        {
            street: "Jln. Lebar sekali no 10",
            city: "Medan"
        }
    ]
};
let Cart1;
Cart1 = {
    idCart: "C1",
    dateOrdered: "2020-05-20",
    items: {
        p1: {
            "id": "P-1",
            "name": "Mechanical Keyboard",
            "qty": 2
        },
        p2: {
            "id": "P-2",
            "name": "USB Hub",
            "qty": 1
        },
    }
};
let fullName = {
    firstName: "Ma'mun",
    lastName: "Ramdhan"
};
let { firstName, lastName } = fullName;
console.log(lastName);
