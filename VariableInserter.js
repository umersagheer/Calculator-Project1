import { operand1 } from "./app.js"

const newBtnName = document.getElementById('name')
const newBtnValue = document.getElementById('value')


export function addNewButton() {
    if (newBtnName.value == "") return alert('cant be empty')
    
    const newBTN = elementFromHtml(`
    <button class="calculator__btn" value=${newBtnValue.value}>
    ${newBtnName.value}
    </button>
`)
    
    addBtn(newBTN);
}



// Function that takes the html and make a template of it
export function elementFromHtml(html) {
    const template = document.createElement('template')
    template.innerHTML = html.trim()

    return template.content.firstElementChild
}

function addBtn(btn) {
    document.getElementsByClassName('calculator')[0].appendChild(btn)
    btn.addEventListener('click', handleNewBtn)
    newBtnName.value = ""
    newBtnValue.value = ""
}


function handleNewBtn(e) {
    operand1.value += e.target.value;
}
