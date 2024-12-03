
//Code Task 2 - Encapsulation
//Define a class named User
class User {
    //Constructor for User class 
    constructor() {
      //Initialse the 'name' property for the instance with the provided parameter, use underscore to show they should be private
      this._firstName = '';
      this._lastName = '';
    }

     //Getter method
    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    // Setter method to set a new value for the first and last name
    set firstNa(fname) {
        this._firstName = fname;
    }

    set lastNa(lname) {
        this._lastName = lname;
    }
        
    // hello method to return 'Hello' for task 1, to return 'Hello World' for task 2
    hello() {
      return('Hello World ');
    }
}

    //Create object from the class
    const user = new User();

    //Use Setter method to set the firstName and lastName instance variables of user object
    user.firstNa = 'firstName';
    user.lastNa='lastName';

    //Run Hello World Method
    console.log(user.hello())

    //Use getters methods to retrieve the firstName and lastName Strings from the user object and add a blank space in between.

    console.log (` ${user.firstName} ${user.lastName}`)



