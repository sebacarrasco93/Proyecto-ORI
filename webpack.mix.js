let mix = require('laravel-mix');

mix.sass('recursos/sass/estilo.sass', 'compilados/css')
   .js('recursos/js/app.js', 'compilados/js');
