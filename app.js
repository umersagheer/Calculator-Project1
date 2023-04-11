import {handleInput} from "./HandleInput.js"
export {operand1,operand2};

// getting the screens in which operations will be shown
const operand1 = document.getElementById("calculator__operand-1")
const operand2 = document.getElementById("calculator__operand-2")
// getting all the buttons and converting the HTML collection to Iterable so can use MAP
const btns = Array.from(document.getElementsByClassName('calculator__btn'))

// Looping through buttons
btns.map(btn => {
    btn.addEventListener('click', handleClick)
})


// handling function
function handleClick(e) {
    const value = e.target.innerText;
    handleInput(value);
}


