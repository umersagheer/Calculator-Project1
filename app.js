const operand1 = document.getElementById("calculator__operand-1")
const operand2 = document.getElementById("calculator__operand-2")


const btns = Array.from(document.getElementsByClassName('calculator__btn'))

// Looping through buttons
btns.map(btn => {
    btn.addEventListener('click', handleClick)
})


// handling function
function handleClick(e) {
    const value = e.target.innerText;

    const btnHandler = {
        "=": evaluate,
        "0": handleNumber,
        "1": handleNumber,
        "2": handleNumber,
        "3": handleNumber,
        "4": handleNumber,
        "5": handleNumber,
        "6": handleNumber,
        "7": handleNumber,
        "8": handleNumber,
        "9": handleNumber,
        "+": handleNumber,
        "*": handleNumber,
        "/": handleNumber,
        ".": handleNumber,
        "ac": allClear,
        "del": clear,
    }

    btnHandler[value.toLowerCase()](value);
}


// --------evaluate
function evaluate() {
    try {
        operand2.value = (eval(operand1.value)).toFixed(4);
    }
    catch (error) {
        operand2.value = "Error";
    }
}

// --------digit and operator
function handleNumber(value) {
    operand1.value += (value.trim());
}

// -------allClear
function allClear() {
    operand1.value = "";
    operand2.value = "";
}

// -------clear
function clear() {
    operand1.value = operand1.value.slice(0, -1);
}