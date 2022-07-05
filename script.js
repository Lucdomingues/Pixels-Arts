//seletor de elementos;
const quadroDePixels = document.getElementById('pixel-board');
const firstColor = document.getElementsByClassName('black');
//criador dos pixels;
function criadorDePixel() {
  for (let index = 1; index <= 25; index += 1) {
    const childsQuadro = document.createElement('div');
    childsQuadro.className = 'pixel';
    quadroDePixels.appendChild(childsQuadro);
  }
}
criadorDePixel();

//definir cor preta como inicial;
window.onload = iniciarBlack = function iniciarBlack() {
  let quadroFull = quadroDePixels.children;
  for (let i = 0; i < quadroFull.length; i += 1) {
    let guardaI = quadroFull[i];
    guardaI.addEventListener('click', function () {
      guardaI.style.backgroundColor = 'black';
    });
  }
};
