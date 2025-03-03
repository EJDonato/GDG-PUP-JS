
// get button and add event listener
const btn = document.getElementById("colorButton");
btn.addEventListener("click", changeBackground);

// get body style
const bodyStyle = document.body.style;

// event handler
function changeBackground() {
    let newColor = getRandomColor();

    bodyStyle.backgroundColor = newColor
}

// random color generator
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

