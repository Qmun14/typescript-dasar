"use strict";
class Root {
}
class User extends Root {
    constructor(id, firstName, lastName, done) {
        super();
        this.retryLogin = 0;
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.save = false;
        this.token = "";
        this.done = false;
    }
    login(username, password) {
        this.retryLogin += 1;
        if (username == 'admin' && password == "admin") {
            return true;
        }
        if (this.retryLogin >= User.MAX_FAILED_LOGIN)
            return "Max Login Attempted!";
        return false;
    }
    ;
    register() { }
    ;
}
User.MAX_FAILED_LOGIN = 2;
User.MAX_FAILED_LOGIN = 4;
let myUser = new User(1, "John", "Doe");
myUser.firstName = "GantiJohn";
console.log(myUser);
console.log(myUser.login("", ""));
console.log(myUser.login("", ""));
console.log(myUser.login("", ""));
console.log(myUser.login("admin", "admin"));
class EnhanchmentUser extends User {
    constructor(location, id, firstName, lastName) {
        super(id, firstName, lastName);
        this.location = location;
        this.save;
    }
}
let myNewUser = new EnhanchmentUser("Bogor", 1, "Bambang", "Sukoco");
console.log(myNewUser);
