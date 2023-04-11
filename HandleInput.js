import {operand1,operand2} from"./app.js"

export function handleInput(inputValue) {

    const value = inputValue;

    // using this look-up table to handle different inputs
    const btnHandler = Object.assign({
        "=": evaluate,
        "ac": allClear,
        "del": clear,
        "e": constE,
        "pi": constPi,  
    },
        // Explanation of this line is at the end of code
        Array.from({ length: 10 }, (_, i) => ({ [i]: btnClickHandler })).reduce((a, b) => Object.assign(a, b)), {
        "+": btnClickHandler,
        "*": btnClickHandler,
        "/": btnClickHandler,
        "-": btnClickHandler,
        "sin(": btnClickHandler,
        "cos(": btnClickHandler,
        "tan(": btnClickHandler,
        "sqrt": btnClickHandler,
        "^": btnClickHandler,
        "(": btnClickHandler,
        ")": btnClickHandler,
        ".": btnClickHandler,
    });

    // const btnHandler = {
    //     "=": evaluate,
    //     "0": btnClickHandler,
    //     "1": btnClickHandler,
    //     "2": btnClickHandler,
    //     "3": btnClickHandler,
    //     "4": btnClickHandler,
    //     "5": btnClickHandler,
    //     "6": btnClickHandler,
    //     "7": btnClickHandler,
    //     "8": btnClickHandler,
    //     "9": btnClickHandler,
    //     "+": btnClickHandler,
    //     "*": btnClickHandler,
    //     "/": btnClickHandler,
    //     "sin(": btnClickHandler,
    //     "cos(": btnClickHandler,
    //     "tan(": btnClickHandler,
    //     "sqrt": btnClickHandler,
    //     "^": btnClickHandler,
    //     "(": btnClickHandler,
    //     ")": btnClickHandler,
    //     ".": btnClickHandler,
    //     "ac": allClear,
    //     "del": clear,
    //     "e": e,
    //     "pi": pi,
    // }

    
    // mapping the inputs on the object and applying the related functions to handle
    // if the value dont matches call the arbitrary function instead by using the logical operator
    const valueHandler = btnHandler[value.toLowerCase()] || arbitrary;
    valueHandler(value)
}



// --------evaluate
function evaluate() {
    try {
        if (operand1.value.includes("sin")) return (operand2.value = calculateSin())
        if (operand1.value.includes("cos")) return (operand2.value = calculateCos())
        if (operand1.value.includes("tan")) return (operand2.value = calculateTan())
        if (operand1.value.includes("^")) return (operand2.value = eval(operand1.value.replace("^", "**")))
        if (operand1.value.includes("sqrt")) return (operand2.value = calculateSqrt())
        operand2.value = fixToFourDigits((eval(operand1.value)));
    }
    catch (error) {
        operand2.value = error;
    }
}

// ---------sin
function calculateSin() {
    const check = Math.sin(toRadian(extractedNumber()))
    return fixToFourDigits(check)
}

// ---------cos
function calculateCos() {
    const check = Math.cos(toRadian(extractedNumber()))
    return fixToFourDigits(check)
}

// --------tan
function calculateTan() {
    const check = Math.cos(toRadian(extractedNumber()))
    return fixToFourDigits(check)
}

// -------calculateSqrt
function calculateSqrt(){
    const check = Math.sqrt((extractedNumber()))
    return fixToFourDigits(check)
}

// Extracting the number from the expression
function extractedNumber() {
    const extraction = operand1.value.match(/\d/g);

    if (extraction === null)
        return 0;
    return extraction.join("")
}

function fixToFourDigits(num) {
    if (num)
        return num.toFixed(4);
    return "Any Number is required"
}

// --------digit and operator
function btnClickHandler(value) {
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

// conversion to radian (bcz js cant evaluate expression in degrees)
function toRadian(num) {
    return ((num * Math.PI / 180 )|| undefined) ;
}

// value of pi
function constPi() {
    operand1.value = Math.PI;
}

// value of e
function constE() {
    operand1.value = Math.E;
}

// arbitrary
function arbitrary(value) {
    return console.log("arrr")
}
// Array.from({ length: 10 }, (_, i) => ({ [i]: btnClickHandler })).reduce((a, b) => Object.assign(a, b))

// =>Array.from({ length: 10 }, (_, i) => ({ [i]: btnClickHandler })) In this part we are making an array of length 10.
// Each index of this array contains an object with key of array index and value of "btnClickHandler"

// =>.reduce((a, b) => Object.assign(a, b)) In this part using the reducer method that is assigning
// const arr = [
//     { 1: "val" },
//     { 2: "val" },
//     { 3: "val" },
//     { 4: "val" },
//     { 5: "val" },
//     { 6: "val" },
//     { 7: "val" },
//     { 8: "val" },
//     { 9: "val" },
//     { 0: "val" },
// ]
// console.log(arr.reduce((a, b) => Object.assign(a, b)))