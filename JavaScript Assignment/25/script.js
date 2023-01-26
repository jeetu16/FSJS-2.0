/*
25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which
calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person
is underweight, normal, overweight or obese based the information given below.
    - The same groups apply to both men and women.
    - Underweight: BMI is less than 18.5
    - Normal weight: BMI is 18.5 to 24.9
    - Overweight: BMI is 25 to 29.9
    - Obese: BMI is 30 or more
*/

// Answer :


let weight = document.querySelector("#weight");
let height = document.querySelector("#height");
let btn = document.querySelector("#btn");
let show = document.querySelector("#show");

btn.addEventListener('click',checkBMI);
height.addEventListener('input',clearShow)
weight.addEventListener('input',clearShow)


function checkBMI() {
    let bmi = (Number(weight.value)/(Number(height.value)*Number(height.value))).toFixed(1)
    console.log(bmi)
    if (bmi < 18.5) {
        show.innerHTML = "Underweight"
    }
    else if(bmi >= 18.5 && bmi <= 24.9) {
        show.innerHTML = "Normal weight"
    }
    else if (bmi >= 25 && bmi < 29.9) {
        show.innerHTML = "Overweight"
    }
    else {
        show.innerHTML = "Obese"
    }
}

function clearShow() {
    show.innerHTML = ""
}