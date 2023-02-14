// Seventh Assignment Solution

//--------Remove the languages that have 2.0 in their name---------

// getting elements
let main_languages = document.querySelector('.main__languages');
let newContainer = main_languages.cloneNode(true);
let allChildrens = main_languages.children;

// actual task is done by here
function removeChild() {
    for (let i = 2; i < allChildrens.length; i++) {
        if (String(allChildrens[i].innerHTML).includes("2.0")){
            main_languages.removeChild(allChildrens[i]);
        }
        
    }
}
removeChild();

//---Use JavaScript to write something in the input box and submit the form. This should refresh the page and the languages in the left card should come back-----

// getting elements

let main__formInput = document.querySelector('.main__form-input');
let main__formBtn = document.querySelector('.main__form-btn');
let main__form = document.querySelector('form');

// adding attribute in form element
main__form.setAttribute('disabled',true);

// adding text into input box of form
main__formInput.value = 'Get Back All';

// removing the disabled attribute from the submit button element
main__formBtn.removeAttribute('disabled');

// actual task is done here
main__form.addEventListener('submit',function(e) {
    e.preventDefault();
    console.log(newContainer);
    main_languages.innerHTML = newContainer.innerHTML;
})