//Abstraction
//Create abstract class User
class User {
    constructor (){
        //abstract instance check
        if(this.constructor === User){
            throw new TypeError('Cannot construct Abstract instances directly'); 
        }
        this._username = '';
    }

    //abstract method
    stateYourRole(){
     // Throw an error if the abstract method is called directly from a child class
      throw new TypeError("Do not call abstract method deposit from child.");
    }
    
    //setter and getter methods to set and get the username
    get username(){
        return this._username;
    }

    // Setter method to set a new value for username
    set username(uName) {
        this._username = uName;
    }
}

//Create subclass that inherits User abstract class
class Admin extends User {
    constructor(){
        //call parent class constructor
        super();
    }
    stateYourRole(){
        console.log('admin'); 
    }
}

//Create another subclass that inherits User abstract class
class Viewer extends User {
    constructor(){
        //call parent class constructor
        super();
    }
    stateYourRole(){
        console.log('viewer'); 
    }
}

//create an object admin, from Admin class, set user name and return the stateYourRole function
const admin = new Admin(); 
admin.username = 'Balthazar';
admin.stateYourRole(); 
console.log(admin.username);

//create an object viewer, from Viewer class, set user name and return the stateYourRole function
const viewer = new Viewer(); 
viewer.username = 'Melchior';
viewer.stateYourRole(); 
console.log(viewer.username);


  
