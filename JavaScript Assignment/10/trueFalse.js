/*

    - 4 > 3
    - 4 >= 3
    - 4 < 3
    - 4 <= 3
    - 4 == 4
    - 4 === 4
    - 4 != 4
    - 4 !== 4
    - 4 != '4'
    - 4 == '4'
    - 4 === '4'
*/

console.log("`4 > 3` result will be `true`. Actual Answer is: ", 4 > 3);
console.log("`4 >= 3` result will be `true`. Actual Answer is: ", 4 >= 3);
console.log("`4 < 3` result will be `false`. Actual Answer is: ", 4 < 3);
console.log("`4 <= 3` result will be `false`. Actual Answer is: ", 4 <= 3);
console.log("`4 == 4` result will be `true`. Actual Answer is: ", 4 == 4);
console.log("`4 === 4` result will be `true`. Actual Answer is: ", 4 === 4);
console.log("`4 != 4` result will be `false`. Actual Answer is: ", 4 != 4);
console.log("`4 !== 4` result will be `false`. Actual Answer is: ", 4 !== 4);
console.log("`4 != '4'` result will be `false`. Actual Answer is: ", 4 != '4');
console.log("`4 == '4'` result will be `true`. Actual Answer is: ", 4 == '4');
console.log("`4 === '4'` result will be `false`. Actual Answer is: ", 4 === '4');


let strPython = "python";
let strJargon = "jargon";

let lengthOfPython = strPython.length;
let lengthOfJargon = strJargon.length;

if(`${lengthOfPython}` === lengthOfJargon){
    console.log("Length of 'python' and 'jargon' is Equal");
}
else {
    console.log("Length of 'python' and 'jargon' is not Equal");
}