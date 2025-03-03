// your code starts here

// add event listeners
document.getElementById("button-add").addEventListener("click", increment);
document.getElementById("button-subtract").addEventListener("click", decrement);

// get element for displaying
const display = document.getElementById("counter-text")

const numberText = display.innerText;
let numberValue = parseInt(numberText)

function increment() {    
    numberValue++
    display.innerText = numberValue
}

function decrement() {
    if (numberValue == 0) {
        return
    }

    numberValue--
    display.innerText = numberValue

}