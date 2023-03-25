/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

export { };
/**
 * 1. Object Literal
 * 2. Nested Object
 * 3. Nested, Object of Array
 * 4. Nested, Object of Object
 * 5. Object destructuring
 */

/**
 * 1. Object Literal
 */
/*
  {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    note: ""
  }
*/
// type inference
let product_p = {
  id: "ID-1",
  productName: "Macbook Air",
  price: 2000,
  note: ""
}

// inline interface
let product: {
  id: string,
  productName: string,
  price: number,
  note: string
}

product = {
  id: "ID-2",
  productName: "Macbook Air Pro",
  price: 4000,
  note: ""
}

//menggunakan inteface
interface Product1 {
  id: string,
  productName: string,
  price: number,
  note: string
}

let product_2: Product1;
let product_3: Product1;

product_2 = {
  id: "ID-3",
  productName: "Asus Rog Gaming",
  price: 2500,
  note: "kredit"
}

product_3 = {
  id: "ID-4",
  productName: "Es Kalapa",
  price: 40,
  note: "nganjuk"
}

/**
 * 2. Nested Object
 */
/*
  {
    id: "ID-1",
    productName: "Macbook Pro",
    price: 2000,
    productDetail: {
      year: 2019
      storage: 256 
    }
  }
*/

interface Item {
  id: string,
  productName: string,
  price: number,
  productDetail: ItemDetail
}

interface ItemDetail {
  year: number,
  storage: number
}

let item1: Item;
item1 = {
  id: "ID-1",
  productName: "Macbook Pro",
  price: 2000,
  productDetail: {
    year: 2019,
    storage: 256
  }
}


/**
 * 3. Nested, Array of Object
 */

/*
    {
      id: "U-1",
      name: "Adi dodi",
      address: [
        {
          street : "Jln. Setapak No.2",
          city: "Jakarta"
        },
        {
          street: "Jln. Lebar sekali no 10",
          city: "Medan"
        }
      ]
    }
*/

interface User {
  id: string,
  name: string,
  address: Array<{ street: string, city: string }>
}

let user1: User;
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
}

/**
 * 4. Nested, Object of Object
 */

/*
    {
      idCart: "C1",
      dateOrdered: "2020-05-20",
      items: {
        p1 :{
          "id": "P-1",
          "name": "Mechanical Keyboard",
          "qty": 2
        },
        p2 :{
          "id": "P-2",
          "name": "USB Hub",
          "qty": 1
        },
      }
    }
*/

interface Cart {
  idCart: string,
  dateOrdered: string,
  items: {
    [key: string]: CartItem;
  }
}

interface CartItem {
  id: string,
  name: string,
  qty: number
}

let Cart1: Cart;
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
}

/**
 * 5. Object Destructuring
 */


let fullName = {
  firstName: "Ma'mun",
  lastName: "Ramdhan"
}
// type inference
// let { firstName, lastName } = fullName

//inline interface
let { firstName, lastName }: { firstName: string, lastName: string } = fullName;

console.log(lastName)