/*
A) Un joven muy afortunado logró ganar el primer premio de la loteriía, estamos hablando de leonardo, al que cofle le
dió una mano, leonardo decide hacer una fiesta para festejar que salió de la pobreza con
este millonario boleto, compró una máquina que deja pasar solamente a los mayores de edad, entre otras cosas
	- Deja pasar solo a los mayores de edad
	- La primer persona que entre despues de las 2 AM, no paga. 
*/
entrada = false;

const validarInvitado = (time)=>{
	let nombre = prompt("Como te llamas?");
	let edad = prompt("Cuánto años tienes");
	if(edad > 18){
		if(time > 2 && time < 7 && entrada==false){
			alert(`${nombre} puedes pasar gratis por ser la primer persona despues de las 2. La hora es: ${time}:00`);	
			document.write(`${nombre} puedes pasar gratis por ser la primer persona despues de las 2. La hora es: ${time}:00<br>`);
			entrada = true;

		}else{
			alert(`${nombre} paga la entrada, para poder pasar. La hora es: ${time}:00`);	
			document.write(`${nombre} paga la entrada, para poder pasar. La hora es: ${time}:00<br>`);
		}
	}else{
		alert(`${nombre} eres menor de edad, no puedes pasar. La hora es: ${time}:00`);	
		document.write(`${nombre} eres menor de edad, no puedes pasar. La hora es: ${time}:00<br>`);

	}
}

for (var i = 0; i < 5; i++) {
	validarInvitado(i);
}