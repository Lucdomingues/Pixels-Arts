const quadroDePixels = document.getElementById('pixel-board');
const first = document.getElementById('black');
const second = document.getElementById('red');
const third = document.getElementById('green');
const quarto = document.getElementById('blue');

// criador dos pixels;

let childsQuadro;
function criadorDePixel() {
  for (let index = 1; index <= 25; index += 1) {
    childsQuadro = document.createElement('div');
    childsQuadro.className = 'pixel';
    quadroDePixels.appendChild(childsQuadro);
  }
}
criadorDePixel();
// requisito 06;
function comeco() {
  const quadroI = quadroDePixels.children;
  first.classList.add('selected');
  for (let i = 0; i < quadroI.length; i += 1) {
    quadroI[i].addEventListener('click', (e) => {
      e.target.style.backgroundColor = 'black';
    });
  }
}
comeco();

// requisito 07;
function selecionar(event) {
  const classe = document.querySelector('.selected');
  classe.classList.remove('selected');
  event.target.classList.add('selected');
}

first.addEventListener('click', selecionar);
second.addEventListener('click', selecionar);
third.addEventListener('click', selecionar);
quarto.addEventListener('click', selecionar);
// requisito 08;

function pintar() {
  const quadrados = document.getElementsByClassName('pixel');
  for (let g = 0; g < quadrados.length; g += 1) {
    quadrados[g].addEventListener('click', () => {
      const seletor = document.querySelector('.selected');
      const mudarCor = getComputedStyle(seletor).backgroundColor;
      quadrados[g].style.backgroundColor = mudarCor;
    });
  }
}
pintar();
// // requisito 06;

// window.onload = () => {
