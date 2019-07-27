"use strict";
let numberOfSquares = 6;
let colors = generateRandomColors(numberOfSquares);
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.getElementsByTagName("h1")[0];
let resetButton = document.querySelector("#reset");
let easyButton = document.querySelector("#easy");
let hardButton = document.querySelector("#hard");
let pickedColor = pickColor();
colorDisplay.textContent = pickedColor;
for(let i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];
  //click listener
  squares[i].addEventListener("click", () => {
    let clickedColor = squares[i].style.backgroundColor;
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      resetButton.textContent = "Play again?";
      changeColors(clickedColor);
    }
    else{
      squares[i].style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try again.";
    }
  });
}

easyButton.addEventListener("click", () => {
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected");
  numberOfSquares = 3;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(let i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    }
    else{
      squares[i].style.display = "none";
    }
  }
});

hardButton.addEventListener("click", () => {
  easyButton.classList.remove("selected");
  hardButton.classList.add("selected");
  numberOfSquares = 6;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", () => {
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  messageDisplay.textContent = "";
  resetButton.textContent = "New colors";
  colorDisplay.textContent = pickedColor;
  h1.style.backgroundColor = "steelblue";
  for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    //click listener
    squares[i].addEventListener("click", () => {
      let clickedColor = squares[i].style.backgroundColor;
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play again?";
        changeColors(clickedColor);
      }
      else{
        squares[i].style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try again.";
      }
    });
  }
});

function changeColors(color){
  for(let i = 0; i < colors.length; i++){
    squares[i].style.backgroundColor = color;
  }
  h1.style.backgroundColor = color;
}

function pickColor(){
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(number){
  let arr = []
  for(let i = 0; i < number; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
