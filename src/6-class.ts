/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

/**
 * Object User :
 * - User have personal like such id, firstName, lastName
 * - User have method such as login(), register()
 * - Max Failed login = 5
 */

// class --> OOP ( Object Oriented Programming)
// class --> Object Instance

abstract class Root {
    abstract done: boolean;
}

class User extends Root {
    // properties
    id: number;
    firstName: string;
    lastName: string;
    protected save: boolean;
    private token: string;
    static MAX_FAILED_LOGIN = 2;
    private retryLogin = 0;
    done: boolean;


    // method
    login(username: string, password: string) {
        this.retryLogin += 1;
        if (username == 'admin' && password == "admin") {
            return true;
        }
        if (this.retryLogin >= User.MAX_FAILED_LOGIN) return "Max Login Attempted!";
        return false;
    };

    register() { };

    constructor(id: number, firstName: string, lastName: string, done?: boolean) {
        super()
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.save = false;
        this.token = "";
        this.done = false
    }

}


User.MAX_FAILED_LOGIN = 4;

let myUser = new User(1, "John", "Doe");
myUser.firstName = "GantiJohn";
console.log(myUser);

console.log(myUser.login("", ""));
console.log(myUser.login("", ""));
console.log(myUser.login("", ""));
console.log(myUser.login("admin", "admin"));




class EnhanchmentUser extends User {
    location: string;
    constructor(location: string, id: number, firstName: string, lastName: string) {
        super(id, firstName, lastName);
        this.location = location;
        this.save;
    }
}

let myNewUser = new EnhanchmentUser("Bogor", 1, "Bambang", "Sukoco");
console.log(myNewUser)
