// Code Task 1 - Write a function to reverse a string
function reverseString(string) {
    let text =''
    for(let i=string.length - 1; i >= 0; i-- ){
        text += string[i]
    }
    console.log(text)
}


// Code Task 2 - Write a function to reverse an array
function reverseArray(array){
    const reverse = []
    for(let i=array.length - 1; i >= 0; i-- ){
        reverse.push(array[i])
    }
    console.log(reverse)
}

// Code Task 3- Write a function to accept an array of items as a single argument. It should return the item that has the most cost tied up, calculated by the amount in stock * price.

function mostExpensiveItem(array){
    priceXstock = 0
    mostexp = []
    for(let i in array){
        if(array[i].price * array[i].stock > priceXstock){
            priceXstock = array[i].price * array[i].stock
            mostexp = array[i]
        }
    }
        console.log(mostexp)
    }


mostExpensiveItem(
    [
        { item: "irn bru", price: 3.25, stock: 50 },
        { item: "fanta", price: 3.98, stock: 45 },
        { item: "diet coke", price: 4.40, stock: 38 }, 
        { item: "7up", price: 3.99, stock: 42 }, 
     ]
    
 )
