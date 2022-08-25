function tocaSom(idElementAudio) {
  document.querySelector(idElementAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

/*
//enquanto
let cont = 0
while (cont < listaDeTeclas.length) {
  const tecla = listaDeTeclas[cont]
  
  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function() {
    tocaSom(idAudio);
  };

  cont += 1;
}
*/


//para
for (let cont = 0; cont < listaDeTeclas.length; cont++) {
  const tecla = listaDeTeclas[cont]
  
  const instrumento = tecla.classList[1];

  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function() {
    tocaSom(idAudio);
  };

}
