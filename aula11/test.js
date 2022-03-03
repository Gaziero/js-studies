var rowPos = holderStyle.getPropertyValue("align-items");
var colPos = holderStyle.getPropertyValue("justify-content");

function moveSquare() {
    holder.style.justifyContent = "end";
    square.style.width = "100%";
    square.style.backgroundColor = "red";
}

const square = document.getElementById("square");
square.addEventListener("click", moveSquare)
