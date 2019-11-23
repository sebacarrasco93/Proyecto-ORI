let app_debug = true

try {
    window.$ = window.jQuery = require('jquery');
    SN = require('spatial-navigation-js');
} catch (e) {
	console.error('Se produjo un error:')
	console.error(e);
}

require('./interaccion');

if (app_debug) {
    require('./mostrar');
}
