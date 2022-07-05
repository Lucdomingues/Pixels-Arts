const quadroDePixels = document.getElementById('pixel-board');

function criadorDePixel() {
  for (let index = 1; index <= 25; index += 1) {
    const childsQuadro = document.createElement('div');
    childsQuadro.className = 'pixel';
    quadroDePixels.appendChild(childsQuadro);
  }
}
criadorDePixel();
