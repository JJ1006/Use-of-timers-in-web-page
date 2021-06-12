/* var myMessage =document.getElementById("message");

function showMessage() {
    myMessage.className = "show"
}

setTimeout(showMessage,3000); */

var colourChanger = document.getElementById("colour-changer");
var colours = ["red", "blue","orange"];
var counter = 0;

function changeColour() {
    if (counter >= colours.length) {
        counter = 0;
    }
    colourChanger.style.background = colours[counter];
    counter++;
}

var myTimer  = setInterval(changeColour, 2000);

colourChanger.onclick = function() {
    clearInterval(myTimer);
    colourChanger.innerHTML = "Timer Stopped";
};