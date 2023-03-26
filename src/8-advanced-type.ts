/* eslint-disable */

export { }; // quick fix for global variable

/**
 * Partial => Partial<T>
 * Required => Required<T>
 * Readonly => Readonly<T>
 * Pick => Pick<T, K>
 * Omit => Omit<T, K>
 */

// use case : transform existing interface to new interface without modify existing interface

interface User {
  id: number;
  name: string;
  age?: number;
  createdAt: Date;
}

// function CreateUser(data: User) {}
// function CreateUser(data: Partial<User>) {}
// function CreateUser(data: Required<User>) {}
// function CreateUser(data: Readonly<User>) {
//   data.id = 2;                                            //? Error ini karena readonly= tidak boleh merubah isi dari interface
// }

// function CreateUser(data: Pick<User, 'id'|'name'>) {}      //? Memilih beberapa property yg wajib ada dari interface
// CreateUser({
//   id: 1,
//   name: 'doe',
// });

function CreateUser(data: Omit<User, 'id' | 'name'>) { }    //? Kebalikan dari "Pick"
CreateUser({
  age: 20,
  createdAt: new Date(),
});

/**
 * Record  => Record<K,T>
 */

/*
usecase : object of object
  {
    propA: {id,name,age},
    propB: {id,name,age}
  }
*/
type Response = Record<string, string | number>;
const message: Response = {
  id: '1',
  name: 'John Doe',
  address: '',
  age: '12'
}
console.log(message);

type Users = Record<string, User>;
const allUsers: Users = {
  '1': { id: 1, name: "John AB", createdAt: new Date(), age: 20 },
  '2': { id: 2, name: "Foe Feng", createdAt: new Date(), age: 36 }
}
console.log(allUsers)


/**
 * Extract => Extract<T, U>
 * Exclude => Exclude<T, U>
 */

interface Post {
  id: string,
  title: string,
  createdAt: Date
}
// type ExtType = Extract<"id" | "name", "id" | "title">;
// type a = Extract<keyof User, string>;                           //* keyof disini gunanya untuk membuat interface menjadi bentuk Union

type ExtType = Extract<keyof User, keyof Post>;
//* Extract biasanya digunakan saat kita ingin membuat type baru dari type yang sudah ada, dengan menggunakan bantuan dari Record
type MyNewType = Record<string, ExtType>;

// Exclude                                                         //* kebalikan dari Extract,, Exclude mengambil properti yang tidak sama pada kedua interface 
// type ExlType = Exclude<"id" | "name", "id" | "title">;
type ExlType = Exclude<keyof User, keyof Post>;

