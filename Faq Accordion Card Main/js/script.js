"use strict";

function changeArrow(arrowIndex) {
    let arrowDiv = document.getElementsByClassName("arrow")[arrowIndex - 1];
    let headingText = document.getElementsByClassName("text")[arrowIndex - 1].children[0];

    if(arrowDiv.style.length === 0) {
        arrowDiv.setAttribute("style", "animation: flipArrowUp 0.3s forwards;");
        headingText.setAttribute("style", "animation: toBoldText 0.3s forwards");
    }
    else {
        if (arrowDiv.style['animation-name'] === 'flipArrowUp') {
            arrowDiv.style = undefined;
            headingText.style = undefined;

            arrowDiv.setAttribute("style", "animation: flipArrowDown 0.5s forwards;");
            headingText.setAttribute("style", "animation: toRegularText 0.5s forwards");
        }
        else {
            arrowDiv.style = undefined;
            headingText.style = undefined;

            arrowDiv.setAttribute("style", "animation: flipArrowUp 0.5s forwards;");
            headingText.setAttribute("style", "animation: toBoldText 0.5s forwards");
        }
    }
}