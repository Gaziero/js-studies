var holder = window.document.getElementById("holder")
var square = window.document.getElementById("square")

var holderStyle = window.getComputedStyle(holder)
var squareStyle = window.getComputedStyle(square)

var rowPos = holderStyle.getPropertyValue("align-items")
var colPos = holderStyle.getPropertyValue("justify-content")

function clicked() {
    if (rowPos == "start" && colPos == "start") {
        var newRowPos = "start"
        var newColPos = "end"
        var newColor = "green"
        var newRound = "0 100% 0 0"
    }
    if (rowPos == "start" && colPos == "end") {
        var newRowPos = "end"
        var newColPos = "end"
        var newColor = "blue"
        var newRound = "0 0 100%  0"
    }
    if (rowPos == "end" && colPos == "end") {
        var newRowPos = "end"
        var newColPos = "start"
        var newColor = "red"
        var newRound = "0 0 0 100%"
    }
    if (rowPos == "end" && colPos == "start") {
        var newRowPos = "start"
        var newColPos = "start"
        var newColor = "yellow"
        var newRound = "100% 0 0 0"
    }

    square.style.backgroundColor = newColor
    square.style.borderRadius = newRound

    holder.style.alignItems = newRowPos
    rowPos = newRowPos

    holder.style.justifyContent = newColPos
    colPos = newColPos
}