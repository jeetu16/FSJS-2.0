/* 
20. In the following shopping cart add, remove, edit items
    => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
    - add 'Meat' in the beginning of your shopping cart if it has not been already added
    - add Sugar at the end of your shopping cart if it has not been already added
    - remove 'Honey'
    - modify Tea to 'Green Tea'
*/

// Answer :

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

document.write(`<h1> Current in Bag :</h1> <h2>${shoppingCart}</h2>`);

// firstly i,ve checked the 'Meat' is already added or not in the variable shoppingCart using includes() method, if 'Meat' is 'Meat' is not added then i am adding 'Meat' at beggining of the variable shoppingCart using unshift() method  
if (shoppingCart.includes("Meat")) {
    document.write("<h2>'Meat' is already added in a bag</h2>");
}
else {
    shoppingCart.unshift('Meat');
    document.write("<h2>&rightarrow;'Meat' is added</h2>");
    document.write(`<h1> Current in Bag :</h1> <h2>${shoppingCart}</h2>`);
}

// firstly, i've checked 'Sugar' is added or not in variable shoppingCart using includes() method, if 'Sugar' is not present then i am adding 'Sugar' at the end of the variable shoppingCart using push() method

if (shoppingCart.includes("Sugar")) {
    document.write("<h2>'Sugar' is already added in a bag</h2>");
}
else {
    shoppingCart.push('Sugar');
    document.write("<h2>&rightarrow;'Sugar' is added</h2>");
    document.write(`<h1> Current in Bag :</h1> <h2>${shoppingCart}</h2>`);
}

// here i firstly checked, are 'Honey' present in bag or not, then i removed the 'Honey' using splice() method. I have also used indexOf() method for fiding the index of 'Honey'  
if (shoppingCart.includes('Honey')) {
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
    document.write("<h2>&rightarrow; 'Honey' is removed </h2>");
    document.write(`<h1> Current in Bag :</h1> <h2>${shoppingCart}</h2>`);
}
else {
    document.write("<h2>&rightarrow; 'Honey' is not present in bag");
}



// for modifying the cart items i have used splice() method

shoppingCart.splice(shoppingCart.indexOf('Tea'), 1, 'Green Tea');

document.write("<h2>&rightarrow; 'Tea' replaced by 'Green Tea'</h2>");
document.write(`<h1> Current in Bag :</h1> <h2>${shoppingCart}</h2>`);

