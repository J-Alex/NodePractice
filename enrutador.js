function enrutar(manejador, ruta,respuesta) {
	console.log("voy a rutear algo para " + ruta);
	if (typeof manejador[ruta] === 'function') {
		/*return*/ manejador[ruta](respuesta);
		
	} else {
		console.log("No existe una funcion para esa ruta: " + ruta);
	}
}

exports.rutando = enrutar;