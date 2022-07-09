const quadroDePixels = document.getElementById('pixel-board');
const cores = document.getElementsByClassName('color');

// criador dos pixels;

function criadorDePixel() {
  for (let index = 1; index <= 25; index += 1) {
    const childsQuadro = document.createElement('div');
    childsQuadro.className = 'pixel';
    quadroDePixels.appendChild(childsQuadro);
  }
}
criadorDePixel();

// requisito 07;
for (let seletor = 0; seletor < cores.length; seletor += 1) {
  cores[seletor].addEventListener('click', (event) => {
    const novaCor = document.querySelector('.selected');
    novaCor.classList.remove('selected');
    event.target.classList.add('selected');
  });
}

// requisito 06;

window.onload = () => {
  const quadroI = quadroDePixels.children;
  for (let i = 0; i < quadroI.length; i += 1) {
    quadroI[i].addEventListener('click', (e) => {
      e.target.style.backgroundColor = 'black';
    });
  }
};
