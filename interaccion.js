// Interacción con teclas en jQuery: https://stackoverflow.com/questions/1402698/binding-arrow-keys-in-js-jquery
// Pregunta de seleccionar divs: https://stackoverflow.com/questions/15603617/choose-and-select-div-elements-with-keyboard-arrows-and-enter-keys
// Calendario hecho con jQuery: http://jsfiddle.net/eqrNT/

$.getScript('https://luke-chang.github.io/js-spatial-navigation/spatial_navigation.js', function() {
    $('.grupo')
    .SpatialNavigation()
    .focus(function() {
        seleccionarGrupo(this)
    })
    .blur(function() { $(this).css('outline', ''); })
    .first()
    .focus();
});

function seleccionarGrupo() {
    grupos = $('.grupo')
    grupos.removeClass('elegido')

    grupoElegido = $('.grupo:focus')
    grupoElegido.addClass('elegido')
    grupoElegido.css('outline', 'red')
}

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
