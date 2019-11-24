window.addEventListener('load', function() {
    SN.init()
    
    SN.add({
        id: 'grupitos',
        selector: '.grupo'
    })

    SN.add({
        id: 'letritas',
        selector: '.seleccionable',
        restrict: 'self-only' // No salirse de la selección hacia el grupo!
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
        SN.focus('grupitos')
        return false
    }
}

function entrarAlGrupo(idGrupo) {
    let parteDom = $(`div[id=${idGrupo}]`).contents('input[type="radio"]')

    console.log(`Se eligió el grupo -> ${idGrupo}`)

    parteDom.each(function (a, b) {
        let idEncontrado = b.id
        let encontrado = $(`label[for="${idEncontrado}"]`)
        encontrado.addClass('seleccionable')

        SN.makeFocusable()
        SN.focus('letritas')
    })

}

function dibujarCaracter(caracter) {
    if (caracter == 'borrarTodo') {
        console.log(`Se borró todo`)
        return borrarTodo()
    }

    if (caracter == 'borrarCaracter') {
        console.log(`Se borró un caracter`)
        return borrarCaracter()
    }
    
    if (caracter == 'espacio') {
        console.log(`Se dibujó un espacio`)
        return dibujarEspacio()
    }

    console.log(`Escrito -> ${caracter}`)
    $('.escrito span[id="aparece"]').remove() // Borra el span
    $('.escrito').append(caracter)
}

function borrarTodo() {
    let texto = $('.escrito').text()
    if (texto.length) {
        $('.escrito').text('')
    }
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

$(document).keydown(function(e) {
    if (e.which === 8) {
        borrarCaracter()
    }
    if (e.which === 32) {
        dibujarEspacio()
    }
})
