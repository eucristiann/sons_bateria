function tocaSom (idSom) {
    document.querySelector(idSom).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`
    
    tecla.onclick = function () {
        tocaSom(idAudio)
    }
    
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa')
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}

/* 
                    UTILIZANDO WHILE

let contador = 0

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`
    
    tecla.onclick = function () {
        tocaSom(idAudio)
    }
    contador++
}
*/
