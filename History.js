import { expressions, answers } from './HandleInput.js'
import { elementFromHtml } from './VariableInserter.js'
import {operand1} from './app.js'

const historyBtn = document.getElementById('history_btn')
const answerList = document.getElementById('answers_list')
const expressionList = document.getElementById('expressions_list')
// const crossBtnList = document.getElementById('cross_btn')


historyBtn.addEventListener('click', handleHistory)

// Handling History
function handleHistory(e) {
    
    if (expressions.length >0) {
        expressionList.innerHTML = ""
        answerList.innerHTML = ""
        // crossBtnList.innerHTML = ""
        
        expressions.map(expression => {
            return expressionList.appendChild(listItem(expression))
        })
        answers.map(answer => {
            return answerList.appendChild(listItem(answer))
        })
    }else return alert("No history generated yet")
    const list = Array.from(document.querySelectorAll('#expressions_list li'));
    showIninput(list);
    console.log(list)
}

function listItem(expression) {
    return elementFromHtml(`<li>${expression}</li>`)
}

function showIninput(lists) {
    lists.map(list => {
        list.addEventListener('click', putInInput)
    })
}

function putInInput(e) {
    console.log(e.target.innerText)
    operand1.value = e.target.innerText;

}
// function Btn() {
//     return elementFromHtml(`<button>&times;</button>`)
// }