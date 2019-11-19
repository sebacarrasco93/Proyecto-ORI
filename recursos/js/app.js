try {
    window.$ = window.jQuery = require('jquery');
} catch (e) {
	console.error('Se produjo un error:')
	console.error(e);
}

require('./interaccion');
require('./mostrar');
