var servidor = require("./server");
//var enruta = require("./enrutador");
var peticiones = require("./peticiones");


var manejador = {}
	manejador['/'] = peticiones.home;
	manejador['/pagina1'] = peticiones.pa1;
	manejador['/pagina2'] = peticiones.pa2;
	//manejador['/favicon.ico'] = peticiones.icon;

servidor.serv(manejador);
//servidor.serv(enruta.rutando,manejador);