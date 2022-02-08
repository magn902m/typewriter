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

function load() {
  console.log("load");
  setUp();
}

function setUp() {
  console.log("setUp");
  emptyString.textContent = "";
  initTextLoop();
}

function initTextLoop() {
  console.log("initTextLoop");
  i = -1;
  // maxLen = 10;
  textLoop();
}

function textLoop() {
  console.log("i", i);
  i++;
  if (i < string.length) {
    document.querySelector(".typewritten").innerHTML += string.charAt(i);
    setTimeout(textLoop, 1000);
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
