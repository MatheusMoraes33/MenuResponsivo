

var burguer = document.querySelector('.burguer');
var navLinks = document.querySelector('.nav-links');
var classList =document.querySelector('.close');
var img1 = "icons/menuOpen.png";
var img2 ="icons/menuClose.png";

var linha1 = document.querySelector('.burguer div:first-child');
var linha2 = document.querySelector('.burguer div:nth-child(2)');
var linha3 = document.querySelector('.burguer div:last-child');


console.log(linha1);

//console.log(burguer);

burguer.addEventListener('click', () => {
 navLinks.classList.toggle('exibir');
  linha1.classList.toggle ('close1');
  linha2.classList.toggle ('close2');
  linha3.classList.toggle ('close3');
});

