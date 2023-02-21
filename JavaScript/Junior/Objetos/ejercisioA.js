/*
A) Cofla entró a una tienda que vende celulares porque le pareció bastante bueno comprarse un nuevo celular.
De todos los modelos que hay disponibles en esa tienda, a Cofla le llamaón la atención 3 celulares especificamente,
El problema es que ningun vendedor saba nada al respecto entonces no pueden recomendarle absolutamente nada, pero claro:
El antes de comprar esos celulares quiere ver las cualidades y comportamientos de cada uno para poder comprarlos.

	Crear soluciones:
	- Crear un sistema para mostrarle a cofla las particularidades de los 3 celulares.
	- Cada celular debe tener color, peso, resolución de pantalla, resolución de camara y memoria RAM
	- Cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar.

B) Cofla no está satisfecho con los celulares así que decide ir a la sección de celulares de alta gama, donde va a poder
encontrar los celulares mas caros del lugar, asi que al entrar vió dos celulares que le encantaron, estos 2 celulares de alta
gama pueden hacer todo lo que podían hacer los 3 anteriores pero tienen mejores caracteristicas y además pueden grabar en 
camara super lenta, tiene reconocimiento facial y una camara extra.

	Crear soluciones:
	- Implementar todas estas cualidades en los celulares de alta gama.	

C) Cofla ya tiene su nuevo celular y ahora esta mirando las aplicaciones en el PlaySyore ya que quiere jugar juegos que sean
muy populares, que tengan buen puntación y que pesen poco, pero las 7 apps que llamaron su atención son un tanto similares
y sabe que si se descarga todas, problamente juegue con todas, pero él va descargar solo 2 para no tener perdidas
innecesarias de tiempo jugando juegos con su celular, pero el problema viene cuando no puede decidirse cual de todas estas
aplicaciones es la que va a descargar.

	Crea Soluciones:
	- Crear un sistema que ayude a Cofla a decidir cual app descargar.
	- La información de los instaladores debe contener la cantidad de descargas, puntación y peso
	- Las Apps se deben poder instalar, abrir, cerrar y desistalar.

*/


class celular{
	constructor(color,peso,resolucionP,resolucionC,memoria){
		this.color = color;
		this.peso = peso;
		this.resolucionP = resolucionP;
		this.resolucionC = resolucionC;
		this.memoria = memoria;
		this.encendido = false;
		this.informacion = `<br>Celular<br>
		Color: <b>${this.color}</b><br>
		Peso: <b>${this.peso}</b><br>
		Resolución Pantalla: <b>${this.resolucionP}</b><br>
		Resolución Camara: <b>${this.resolucionC}</b><br>
		Memoria RAM: <b>${this.memoria}</b><br>`;
	}
	presionarBotonPower(){
		if(this.encendido == false){
			alert("Encendiendo....");
			document.write("Encendiendo....<br>");
			this.encendido = true;
		}else{
			alert("Apagando....");
			document.write("Apagando....<br>");
			this.encendido = false;
		}
	}

	reiniciar(){
		if(this.encendido == true){
			alert("Reiniciando....");
			document.write("Reiniciando....<br>");
		}else{
			alert("El celular esta apagado.");
			document.write("El celular esta apagado.<br>");
		}
	}

	tomarFotos(){
		if(this.encendido == true){
			alert(`Tomando foto en una resolucion de: ${this.resolucionC}....`);
			document.write(`Tomando foto en una resolucion de: ${this.resolucionC}....<br>`);
		}else{
			alert("El celular esta apagado.");
			document.write("El celular esta apagado.<br>");
		}	
	}

	grabarVideo(){
		if(this.encendido == true){
			alert(`Tomando video en una resolucion de: ${this.resolucionC}....`);
			document.write(`Tomando video en una resolucion de: ${this.resolucionC}....<br>`);
		}else{
			alert("El celular esta apagado.");
			document.write("El celular esta apagado.<br>");
		}	
	}

	mostrarInfo(){
		document.write(this.informacion); 
	}
}

class celularAltaGama extends celular{
	constructor(color,peso,resolucionP,resolucionC,memoria,resolucionCE){
		super(color,peso,resolucionP,resolucionC,memoria);
		this.resolucionCE = resolucionCE;
		this.informacionAG = `<br>Celular Alta Gama<br>
		Color: <b>${this.color}</b><br>
		Peso: <b>${this.peso}</b><br>
		Resolución Pantalla: <b>${this.resolucionP}</b><br>
		Resolución Camara: <b>${this.resolucionC}</b><br>
		Resolución Camara Extra: <b>${this.resolucionCE}</b><br>
		Memoria RAM: <b>${this.memoria}</b><br>`;
	}

	mostrarInfoAG(){
		document.write(this.informacionAG); 
	}

	grabarVideoLento(){
		if(this.encendido == true){
			alert(`Grabando video en camara lente en una resolucion de: ${this.resolucionCE}....`);
			document.write(`Grabando video en camara lente en una resolucion de: ${this.resolucionCE}....`);
		}else{
			alert("El celular esta apagado.");
			document.write("El celular esta apagado.<br>");
		}	
	}

	grabarReconocimientoFacial(){
		if(this.encendido == true){
			alert(`Reconimiento Facial.......`);
			document.write(`Reconimiento Facial.......`);
		}else{
			alert("El celular esta apagado.");
			document.write("El celular esta apagado.<br>");
		}	
	}

}

document.write("<h2><b>SOLUCION A</b></h2>");
const objCelular1 = new celular("Rojo","150gr","5'","FULL HD","2GB");
const objCelular2 = new celular("Negro","350gr","6.5'","4K","6GB");
const objCelular3 = new celular("Blanco","200gr","3'","HD","4GB");



objCelular1.mostrarInfo();
objCelular2.mostrarInfo();
objCelular3.mostrarInfo();

// objCelular1.presionarBotonPower();
// objCelular1.tomarFotos();
// objCelular1.grabarVideo();
// objCelular1.reiniciar();
// objCelular1.presionarBotonPower();

document.write("<h2><b>SOLUCION B</b></h2>");
const objCelularAltaGama1 = new celularAltaGama("Gris","100gr","7'","FULL HD","8GB","4K");
const objCelularAltaGama2 = new celularAltaGama("Azul","95gr","7'","4K","8GB","4K");


objCelularAltaGama1.mostrarInfoAG();
objCelularAltaGama2.mostrarInfoAG();


document.write("<h2><b>SOLUCION C</b></h2>");

class aplicaciones{
	constructor(descargas,puntuacion,peso){
		this.descargas = descargas;
		this.puntuacion = puntuacion;
		this.peso = peso;
		this.abierta = false;
		this.instalada = false;
		this.informacion = `<br>Aplicación<br>
		Descargas: <b>${this.descargas}</b><br>
		Puntuación: <b>${this.puntuacion}</b><br>
		Peso: <b>${this.peso}</b><br>`;
	}
	clickAplicacion(){
		if(this.abierta == false && this.instalada == true){
			alert("Abriendo Aplicación....");
			document.write("Abriendo Aplicación....<br>");
			this.abierta = true;
		}else{
			if(this.abierta == true){
				alert("Cerrando Aplicación....");
				document.write("Cerrando Aplicación....<br>");	
				this.abierta = false;
			}
		}
	}

	instalar(){
		if(this.instalada == false){
			alert("Instalando Aplicación....");
			document.write("Instalando Aplicación....<br>");
			this.instalada = true;
			if(this.instalada == true){
				alert("Instalado Correctamente");
				document.write("Instalado Correctamente<br>");
			}else{
				alert("No se pudo instalar");
				document.write("No se pudo instalar<br>");
			}
		}else{
			alert("Desistalando Aplicación....");
			document.write("Desistalando Aplicación....<br>");
			this.instalada = false;
			if(this.instalada == false){
				alert("Desistalado Correctamente");
				document.write("Desistalado Correctamente<br>");
			}else{
				alert("No se pudo Desinstalar");
				document.write("No se pudo Desinstalar<br>");
			}
		}	
	}

	mostrarInfoApp(){
		document.write(this.informacion);
	}
}

app1 = new aplicaciones("1000","4.0 Estrellas","100MB");
app2 = new aplicaciones("2000","4.2 Estrellas","120MB");
app3 = new aplicaciones("3000","3.0 Estrellas","10MB");
app4 = new aplicaciones("500","3.7 Estrellas","20MB");
app5 = new aplicaciones("110","5.0 Estrellas","35MB");
app6 = new aplicaciones("1560","1.3 Estrellas","40MB");
app7 = new aplicaciones("1089","1.2 Estrellas","80MB");

// app1.instalar();
// app1.clickAplicacion();
// app1.clickAplicacion();
// app1.instalar();

app1.mostrarInfoApp();
app2.mostrarInfoApp();
app3.mostrarInfoApp();
app4.mostrarInfoApp();
app5.mostrarInfoApp();
app6.mostrarInfoApp();
app7.mostrarInfoApp();

