// Interacción con teclas en jQuery: https://stackoverflow.com/questions/1402698/binding-arrow-keys-in-js-jquery
// Pregunta de seleccionar divs: https://stackoverflow.com/questions/15603617/choose-and-select-div-elements-with-keyboard-arrows-and-enter-keys
// Calendario hecho con jQuery: http://jsfiddle.net/eqrNT/

window.addEventListener('load', function() {
    SN.init()
    
    SN.add({
        id: 'grupos',
        selector: '.grupo'
    })

    SN.add({
        id: 'letritas',
        selector: '.seleccionable',
        restrict: 'self-only',
    })

    $('.grupo')
        .on('sn:enter-down', function(e) {
            decidirOpcion(e)
    })

    SN.makeFocusable()
    SN.focus()
})

function decidirOpcion(e) {
    let idGrupo = e.target.id
    if (idGrupo) {
        entrarAlGrupo(idGrupo)
    } else {
        let caracterElegido = e.target.control.value
        dibujarCaracter(caracterElegido)
        $('label').removeClass('seleccionable')
        SN.focus('grupos')
        return false
    }
}

function entrarAlGrupo(idGrupo) {
    let parteDom = $(`div[id=${idGrupo}]`).contents('input[type="radio"]')

    parteDom.each(function (a, b) {
        let idEncontrado = b.id
        let encontrado = $(`label[for="${idEncontrado}"]`)
        encontrado.addClass('seleccionable')

        SN.makeFocusable()
        SN.focus('letritas')
    })

}

function dibujarCaracter(caracter) {
    if (caracter == 'borrarCaracter') {
        return borrarCaracter()
    }
    
    if (caracter == 'espacio') {
        return dibujarEspacio()
    }

    $('.escrito span').remove() // Borra el span
    $('.escrito').append(caracter)
}

function borrarCaracter() {
    let texto = $('.escrito').text()
    if (texto.length) {
        let eliminado = texto.slice(0, -1)
        $('.escrito').text(eliminado)
    }
}

function dibujarEspacio() {
    let espacio = ' '
    let texto = $('.escrito').text()
    if (texto.length) {
        $('.escrito').append(espacio)
    }
}

// function seleccionarGrupo() {
//     grupos = $('.grupo')
//     grupos.removeClass('elegido')

//     grupoElegido = $('.grupo:focus')
//     grupoElegido.addClass('elegido')
// }

$(document).keydown(function(e) {
    if (e.which === 8) {
        borrarCaracter()
    }
    if (e.which === 32) {
        dibujarEspacio()
    }
})

// $(document).keydown(function(e) {
//     switch(e.which) {
//         case 13:
//             console.log('enter')
//             seleccionarGrupo()
//         break;

//         case 37:
//             console.log('izquierda')
//         break;

//         case 38:
//             console.log('arriba')
//         break;

//         case 39:
//             console.log('derecha')
//         break;

//         case 40:
//             console.log('abajo')
//         break;

//         default: return;
//     }
//     e.preventDefault();
// });
