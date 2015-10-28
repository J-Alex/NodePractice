function inicio(respuesta){
	/*console.log("Estoy en la página de inicio");
	return "Inicio";*/
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	//respuesta.write("<h1>Esta es la home</h1>");
	respuesta.end();
}

function pag1(respuesta){
	/*console.log("Estas en la página 1");
	return "p1";*/
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	//respuesta.write("<h1>Esta es la pág 1</h1>");
	respuesta.end();
}

function pag2(respuesta){
	/*console.log("Estas en la página 2");
	return "p2";*/
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	//respuesta.write("<h1>Esta es la pág2</h1>");
	respuesta.end();
}

/*function favicon(respuesta){
	//console.log("Se ha pedido el favicon");
	respuesta.writeHead(200,{"Content-Type":"text/html"});
	//respuesta.write("<h1>Esta es el favicon</h1>");
	respuesta.end();
}*/

/*exports.home = inicio;
exports.pa1 = pag1;
exports.pa2 = pag2;
exports.icon = favicon;*/