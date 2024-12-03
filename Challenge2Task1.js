//Code Task 1
//Define a class named User
class User {
    //Constructor for User class to take in 2 parameters, a first and last name
    constructor(firstName, lastName) {
      //Initialse the 'name' property for the instance with the provided parameter
      this.firstName = firstName;
      this.lastName = lastName;
    }
        
    // hello method to return 'Hello' for task 1, to return 'Hello World' for task 2
    hello() {
      console.log(`Hello, ${this.firstName} ${this.lastName}`);
    }
}

  //Create object from the class
  const user1 = new User('John', 'Doe');

  //Use Constructor to print first and last name onto screen
  console.log(user1.firstName);
  console.log(user1.lastName);

  //Call hello method from class
  user1.hello();

  //Create second object from class
  const user2 = new User('Jane', 'Doe'); 
 user2.hello();









  