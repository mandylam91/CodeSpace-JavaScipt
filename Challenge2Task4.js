//Code task4, Polymorphism
//Create user class that stores the unmer of articles a user has authored or editted.
class User {
    constructor() {
      this._numberOfArticles = 0;
    }

    //crete a method to set the number of articles
    set setNumberOfArticles(numberOfArticles){
        this._numberOfArticles = (numberOfArticles);
    }

    //crete a method to get the number of articles
    get getNumberOfArticles(){
        return this._numberOfArticles;
    }

    //create a method that performs the scores calculation separately for each class
    calcScores(){
      throw new Error('Method calcScores must be implemeneted in subclasses.')
    }
}
  
//create Author class that inherits from User class
class Author extends User {
  //class constructor
  constructor(){
    super();
  }
  //method to calcualte scores for author
  calcScores(){
    return this.getNumberOfArticles * 10 + 20 ; 
  }

}

//create Editor class that inherits from User class
class Editor extends User {
  calcScores(){
    return this.getNumberOfArticles * 6 + 15 ; 

  }

}

//create object from Author and use setter to set number of articles to 8, print scores that author gained
const author = new Author();
author.setNumberOfArticles = 8;
console.log('author has gained a score of: ' + author.calcScores());

//create object from Editor class and set number of atricles to 15  
const editor = new Editor();
editor.setNumberOfArticles = 15;
console.log('editor has gained a score of: ' + editor.calcScores());
