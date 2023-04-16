import { handleInput } from "./HandleInput.js"
import { addNewButton } from "./VariableInserter.js";
export { operand1, operand2 };

// getting the screens in which operations will be shown
const operand1 = document.getElementById("calculator__operand-1")
const operand2 = document.getElementById("calculator__operand-2")
// getting all the buttons and converting the HTML collection to Iterable so can use MAP
const btns = Array.from(document.getElementsByClassName('calculator__btn'))

const variableInserter = document.getElementById('variableInserter')
variableInserter.addEventListener("click", addNewButton)

// Looping through buttons
btns.forEach(btn => {
    btn.addEventListener('click', handleClick)
})

// click handling function
function handleClick(e) {
    const value = e.target.innerText;
    handleInput(value);
}
