'use strict';
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


let lettersInRow = Math.floor(windowWidth / 62);
let lettersInCol = Math.floor(windowHeight / 62);

let lettersInViewport = lettersInRow * lettersInCol;

let word = prompt("Enter a word");
if (!word) { word = 'JS rules'}
let allLetters = word.split("");
let wordLengthCenter = Math.floor(allLetters.length / 2);

function addElement(counter) {
  let newElement        = document.createElement("span");
  newElement.classList.add('letter');
  newElement.dataset.letterNumber = counter;
  newElement.dataset.letter = "A";

  document.body.appendChild(newElement);
}

let sheet = window.document.styleSheets[0];
// Lets create exact number of characters that can fit inside viewport
for(let i=0; i<lettersInViewport; i++) {
    addElement(i);
    let animationDelay = Math.floor((Math.random() * -2000) + 0);
    sheet.insertRule(`.letter:nth-child(${i}):before { animation-delay: ${animationDelay}ms}`, sheet.cssRules.length);
}

// Coordinates to grid center
let gridCenter = [Math.floor(lettersInRow / 2), Math.round(lettersInCol / 2)];

let letterToUpdate = (gridCenter[0] + gridCenter[1]*lettersInRow) - wordLengthCenter;

allLetters.forEach(letter => {
    // Lets get the number of the center letter
    let cell = document.querySelector(`.letter[data-letter-number="${letterToUpdate}"`);

    cell.classList.add('stop-animation');
    cell.dataset.letter = letter;

    letterToUpdate++;
});

function onAfterAnimation() {
    this.classList.add('animation-finished');
}

let allElements = document.querySelectorAll('.letter');
allElements.forEach(letter => {
    letter.addEventListener("animationend", onAfterAnimation, false);
});


console.log(lettersInRow, 'Letters In Row');
console.log(lettersInCol, 'Letters in Col');
console.log(lettersInViewport, 'Total Letters in Viewport');
console.log(letterToUpdate, 'Letter to update');
console.log(gridCenter,'Grid Center');
console.log(allElements, "All elements");