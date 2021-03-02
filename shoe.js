document.addEventListener("DOMContentLoaded", start);

let elementToPaint;
let colorAlreadyAssigned = false;

async function start(){
    let response = await fetch("shoe-exercise.svg");
    let mySVGData = await response.text();
    document.getElementById("shoe-svg").innerHTML = mySVGData;
    startManipulatingSvg();
}

function startManipulatingSvg(){
     //add Eventlistener to shoe svg and call checkPart 
    document.getElementById("shoe-svg").addEventListener("click", checkPart);

    //add Eventlistener for color boxes
    const colorButtons = document.querySelectorAll("svg rect");
    colorButtons.forEach((colorButton) => {
        colorButton.addEventListener("click", checkColorFill);
    });
}

function checkPart(event){
    let clickedPart = event.path[1].id
    setPart(clickedPart);
}

function setPart(clickedPart){

if (clickedPart == "sole"){
        elementToPaint = document.querySelectorAll("#sole path");
} else if (clickedPart == "top-bottom"){
    elementToPaint = document.querySelectorAll("#top-bottom path");
} else if (clickedPart == "laces"){
    elementToPaint = document.querySelectorAll("#laces path");
} else if (clickedPart == "middle"){
    elementToPaint = document.querySelectorAll("#middle path");
} else if (clickedPart == "front-back"){
    elementToPaint = document.querySelectorAll("#front-back path");
} else if (clickedPart == "net"){
    elementToPaint = document.querySelectorAll("#net path");
} else {
    return;
}

console.log(elementToPaint);
}

function checkColorFill(event){
    let colorSelected = event.target.attributes.fill.value;


    elementToPaint.forEach(element => setColor(element, colorSelected));
}

function setColor(element, colorSelected) {

 if (colorSelected == "#F5B12F"){
    element.classList.add("yellow");
 } else if (colorSelected == "#F55F0F"){
    element.classList.add("orange");
}else if (colorSelected == "#27F569"){
    element.classList.add("green");
} else if (colorSelected == "#2782F5"){
    element.classList.add("blue");
} else if (colorSelected == "#F50702"){
    element.classList.add("red");
}

}