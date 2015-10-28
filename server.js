var servidor = require('http');
var url = require('url');
var fileSystem = require('fs');

function inicio(enrutar, manejador){
	function runServer(requiere, respuesta) {
		var ruta = url.parse(requiere.url).pathname;
		/*var contenido = enrutar(manejador,ruta,respuesta);*/
		if (ruta=="/"){ruta="index.html";}
		var index = fileSystem.readFileSync("www/"+ruta);

		/*var registro = fileSystem.createWriteStream('registro.txt',{'flags':'a'});
		registro.write(ruta + '\n'); */

		console.log("Conexion establecida");

	    respuesta.writeHead(200,{"Content-Type":"text/html"});
		//respuesta.write("<h1>Mi primer servidor con nodeJS</h1>");
		respuesta.write(index);
		respuesta.end();
	}	
	servidor.createServer(runServer).listen(2500,"localhost" || "127.0.0.1");
	console.log('Server running at http://127.0.0.1:2500/');
}
exports.serv = inicio;
/*var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');*/