let elForm = document.querySelector(".form");
let elInput = document.querySelector(".input");
let elLabel = document.querySelector(".button");
let elText = document.querySelector(".text");
let elSpanP = document.querySelector(".spanP");
let elSpanV = document.querySelector(".spanV");
let elSpanM = document.querySelector(".spanM");
let elSpanS = document.querySelector(".spanS");



elForm.addEventListener("submit",function(evt){
  
  evt.preventDefault()
  let distance = elInput.value;

  let Piyoda = 3.6;
  let Velosiped = 20.1;
  let Mashina = 70;
  let Samolyot = 800;

  elSpanP.textContent = `${(distance/Piyoda).toFixed(0)} soat`;
  elSpanV.textContent = `${(distance/Velosiped).toFixed(2)} soat`;
  elSpanM.textContent = `${(distance/Mashina).toFixed(2)} soat`;
  elSpanS.textContent = `${(distance/Samolyot).toFixed(2)} soat`;

  
})




