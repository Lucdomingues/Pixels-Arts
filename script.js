let quadroDePixels = document.getElementById('pixel-board');
function criadorDePixel() {
  for (index = 1; index <= 25; index += 1) {
    let childsQuadro = document.createElement('div');
    childsQuadro.className = 'pixel';
    quadroDePixels.appendChild(childsQuadro);
  }
}
criadorDePixel();
