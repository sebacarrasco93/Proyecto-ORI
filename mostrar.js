// Comprobar el ancho del navegador
let width = $(window).width();
$(window).on('resize', function() {
    if ($(this).width() != width) {
        width = $(this).width();
        comprobarResolucion(width)
    }
});

function comprobarResolucion(width) {
    if (width < 1200) {
        $('.actual').show()
        $('.mensaje').show()
        $('.teclado').hide()
        $('.texto').hide()
        $('#resolucion').html(width)
    } else {
        $('.mensaje').hide()
        $('.actual').hide()
        $('.teclado').show()
        $('.texto').show()
    }
}
