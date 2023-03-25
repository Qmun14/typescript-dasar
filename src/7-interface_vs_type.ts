/* eslint-disable */

export { }; // quick fix for global variable

/**
 * Object
 */
// user --> name, age

interface User {
    name: string;     // -->> tidak perlu sama dengan (=) cz defaultnya interface itu adalah object
    age: number;
}

type TUser = {
    name: string;
    age: number;
}


/**
 * Merge
 */
interface Song {
    artisName: string;
}

interface Song {
    songName: string;
}

const mySong: Song = {
    artisName: "Led Zeppelin",
    songName: "Stairway to Heaven"
}
console.log(mySong)

// ?kesimpulannya untuk Merge itu 'type' tidak bisa diimplementasikan


/**
 * Intersection & Union
 */

type typeA = {
    id: number;
    propA: string;
}

type typeB = {
    id: number;
    propB: string;     //? <------  optional type data
}

// intersection
type IntersectionAB = typeA & typeB;

const myData: IntersectionAB = {
    id: 1,
    propA: "coba",
    propB: "cobaB"
}

// union
type UnionAB = typeA | typeB;

const myData2: UnionAB = {
    id: 1,
    // propA: "coba",
    propB: "cobaB"
}
// ?kesimpulannya untuk  Intersection & Union itu 'Interface' tidak bisa diimplementasikan

/**
 * Implements
 */
interface Person {      // todo:  untuk Implementns ini bisa menggunakan type juga eg:: -->  type Person = {}
    name: string;
    age: number;
    getName(id: number): string;
}
class People implements Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getName(id: number) {
        return "Yess Mantap";
    }
}

let myPeople = new People("Ma'mun", 31);
console.log(myPeople)

/**
 * Extend
 */

interface Address {
    street: string;
}

interface Person2 extends Address {
    name: string;
    age: number;
    getName(id: number): string;
}

class People2 implements Person2 {
    name: string;
    age: number;
    street: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.street = "Jalan Raya"
    }

    getName(id: number) {
        return "Bagus Sekalii"
    }

}
// ?kesimpulannya untuk  Extends itu 'type' tidak bisa diimplementasikan