"use strict";

window.addEventListener("load", load);

const string = document.querySelector(".typewritten").textContent;
const emptyString = document.querySelector(".typewritten");

// Taking the sound form HTML
const sounds = document.querySelector(".sounds");
const typeKey1 = document.querySelector("#typekey1");
const typeKey2 = document.querySelector("#typekey2");
const typeSpace = document.querySelector("#typespace");
const typeLast = document.querySelector("#typelast");
const typeReturn = document.querySelector("#typereturn");

let i;
let maxLen;
let speed;
let speedSet = 1000;

function load() {
  // console.log("load");
  document.querySelector(".typewritten").textContent = "";
  document.querySelector("html").addEventListener("click", setUp);
  // setUp();
}

function setUp() {
  // console.log("setUp");
  document.querySelector("html").removeEventListener("click", setUp);
  emptyString.textContent = "";
  initTextLoop();
}

function initTextLoop() {
  // console.log("initTextLoop");
  i = -1;
  // maxLen = 10;
  textLoop();
}

document.querySelector("html").addEventListener("click", playSound);

function playSound() {
  if (string.charAt(i) === " ") {
    // console.log("Space");
    typeSpace.play();
  } else {
    // console.log("Type");
    typeKey1.play();
  }
}

function setUpSpeed() {
  speed = Math.floor(Math.random() * 3) + 1;
  if (speed === 1) {
    speedSet = 1000;
  } else if (speed === 2) {
    speedSet = 1250;
  } else if (speed === 2) {
    speedSet = 750;
  }
}

function textLoop() {
  // console.log("i", i);
  i++;
  if (i < string.length) {
    document.querySelector(".typewritten").innerHTML += string.charAt(i);
    setUpSpeed();
    setTimeout(textLoop, speedSet);
    playSound();
  } else {
    console.log("I am done");
    // textLoopDel();
    setUp();
  }
}

// function textLoopDel() {
//   console.log("i", i);
//   i--;
//   if (i > string.length) {
//     document.querySelector(".typewritten").innerHTML += string.charAt(i);
//     setTimeout(textLoop, 200);
//   } else {
//     console.log("I am done");
//     textLoop();
//   }
// }
