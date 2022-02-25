document.getElementById("holder", holder);
document.getComputedStyle(holder, holderStyle);
document.getElementById("square", square);
document.getComputedStyle(square, squareStyle);

window.document.getElementById("square").addEventListener("mouseover", mouseOver);
window.document.getElementById("square").addEventListener("mouseout", mouseOut);

var rowPos = holderStyle.getPropertyValue("align-items");
var colPos = holderStyle.getPropertyValue("justify-content");

function clicked() {
    holder.style.justifyContent = "end"
    square.style.width = "100%"
    square.style.backgroundColor = "red"
}

function mouseOver() {
    document.getElementById("square").style.backgroundColor = "green"
}