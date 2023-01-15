/*
21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
*/

// Answer:

// case 1: if 'Ethiopia' is not present in countries list

console.log("Case 1\n");
let countries = ['India', 'Nepal', 'Australia', 'USA', 'England'];

if (!(countries.includes('Ethiopia'))){
    countries.push('ETHIOPIA');
    console.log("'ETHIOPIA' is added in countries list");
    console.log("Countries List: ",countries);
}
else{
    console.log("'ETHIOPIA' is already present in countries list");
}

// case 2: if 'Ethiopia' is present in countries list 
console.log("\nCase 2\n");
let countries2 = ['India', 'Nepal', 'Australia', 'USA', 'England','Ethiopia'];

if (!(countries2.includes('Ethiopia'))) {
    countries2.push('ETHIOPIA');
    console.log("'ETHIOPIA' is added in countries list");
    console.log("Countries2 List: ", countries2);
}
else {
    console.log("'ETHIOPIA' is already present in countries list");
}