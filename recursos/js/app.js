let app_debug = true

try {
    window.$ = window.jQuery = require('jquery');
} catch (e) {
	console.error('Se produjo un error:')
	console.error(e);
}

require('./spatial_navigation');
require('./interaccion');

if (app_debug) {
    require('./mostrar');
}
