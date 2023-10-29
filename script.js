"use strict";

const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

const dragStart = function () {
  fill.classList.add("hold");
  setTimeout(() => fill.classList.remove("fill"), 0);
};
const dragEnd = function () {
  this.classList.remove("hold");
  this.classList.add("fill");
};

const dragOver = function (e) {
 e.preventDefault()
};
const dragEnter = function (e) {
  e.preventDefault()
  this.classList.add("hovered")

};
const dragLeave = function () {
  this.classList.remove("hovered")};
  
const dragDrop = function () {
  this.classList.remove("hovered")
  this.append(fill)
};

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);
empties.forEach((empty) => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});
