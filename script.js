// script.js

const texts = [
  "Linux lover 🐧",
  "Cybersecurity enthusiast 🛡️",
  "Frontend aesthetic developer ✨",
  "Técnico en Sistemas 💻"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
  if(count === texts.length){
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);
  document.querySelector(".typing").textContent = letter;
  if(letter.length === currentText.length){
    count++;
    index = 0;
    setTimeout(type, 1500);
  } else{
    setTimeout(type, 80);
  }
})();

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});