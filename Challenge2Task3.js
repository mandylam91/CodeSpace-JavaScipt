
//Code Task 3 - Inheritance
//Define a class named User
class User {
    //Constructor for User class to take in a parameters, username
    constructor() {
      //Initialse the 'username' property for the instance with the provided parameter
      this._username = '';
    }

     //Getter method
    get username(){
        return this._username;
    }

    // Setter method to set a new value for username
    set username(uName) {
        this._username = uName;
    }
}
//Extend the User class with a subclass called Admin
class Admin extends User {
    //class constructor
    constructor(){
        //call the super class constructor
        super();
    }
        //add a method to express your role
        expressYourRole() {
            return 'Admin';
        }
        //add a method to say hello to the user
        sayHello(){
            console.log(`Hello Admin, ${this.username}`);
        }
}
//create an object and assign name to user
const admin = new Admin();
admin.username = 'Balthazar';
admin.sayHello();


