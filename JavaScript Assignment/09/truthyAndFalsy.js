console.log("Falsy Values :\n\n");
if("") {
    console.log(`"" empty string is truthy value`);
}
else {
    console.log(`"" empty string is falsy value`);
}

if (NaN) {
    console.log(`NaN is truthy value`);
} else {
    console.log(`NaN is falsy value`);
}

if (null) {
    console.log(`null is truthy value`);
} else {
    console.log(`null is falsy value`);
}

if (undefined) {
    console.log(`undefined  is truty value`);
} else {
    console.log(`undefined is falsy value`);
}

if (0) {
    console.log(`0 is truthy value`);
} else {
    console.log(`0 is falsy value`);
}

if(false) {
    console.log(`false is truthy value`);
}
else {
    console.log(`false is falsy value`);
}

// "", NaN, undefined, null, 0, false except these values, everthing in javascript is truthy value.

console.log("\n\nTruthy values: \n");

if(" "){
    console.log(`" " is truthy value`);
}
else {
    console.log(`" " is falsy value`);
}

if ("NaN") {
    console.log(`"NaN" is truthy value`);
} else {
    console.log(`"NaN" is falsy value`);
}

if(`\n`){
    console.log(`\\n is truthy value`);
}
else {
    console.log(`\\n is fasly value`);
}
if(-100) {
    console.log(`-100 is truthy value`);
}
else {
    console.log(`-100 is falsy value`);
}