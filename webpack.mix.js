let mix = require('laravel-mix');

mix.sass('recursos/sass/estilo.sass', 'compilados/css')
   .js('recursos/js/interaccion.js', 'compilados/js/interaccion.js');
