"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mySong = {
    artisName: "Led Zeppelin",
    songName: "Stairway to Heaven"
};
console.log(mySong);
const myData = {
    id: 1,
    propA: "coba",
    propB: "cobaB"
};
const myData2 = {
    id: 1,
    propB: "cobaB"
};
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName(id) {
        return "Yess Mantap";
    }
}
let myPeople = new People("Ma'mun", 31);
console.log(myPeople);
class People2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.street = "Jalan Raya";
    }
    getName(id) {
        return "Bagus Sekalii";
    }
}
let myOrang = new People2("joko", 2);
console.log(myOrang);
