class animal{
	constructor(especie,edad,color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.informacion = `Soy ${this.especie}, tengo ${this.edad} años y
		soy de color ${this.color}<br>`;
	}
	verInformacion(){
		document.write(this.informacion);
	}
	ladrar(){
		if(this.especie == "perro"){
			document.write(`${this.especie} empezo a ladrar<br>`);
		}else{
			document.write(`No puede ladrar, ya que es ${this.especie}<br>`);
		}
	}
}

class perro extends animal{
	constructor(especie,edad,color,raza){
		super(especie,edad,color);
		this.raza = raza;
	}
	ladrarP(){
		alert("WAW WAAW");
		document.write("WAW WAAW");
	}
	set setEspecie(newEspecie){
		this.especie = newEspecie;
	}
	set setEdad(newEdad){
		this.edad = newEdad;
	}
	set setColor(newColor){
		this.color = newColor;
	}
	set setRaza(newRaza){
		this.raza = newRaza;
	}

	get getEspecie(){
		return this.especie;
	}

	get getEdad(){
		return this.edad;
	}

	get getColor(){
		return this.color;
	}

	get getRaza(){
		return this.raza;
	}

}

const objPerro = new perro("perro",3,"blanco","chihuahua");
const gato = new animal("gato",1,"gris");
const gallo = new animal("gallo",2,"alimonado");

// document.write(perro.informacion);
// document.write(gato.informacion);
// document.write(gallo.informacion);
objPerro.verInformacion();
gato.verInformacion();
gallo.verInformacion();
document.write("<h2>Polimorfismo</h2><br>")
objPerro.ladrar();
gato.ladrar();
gallo.ladrar();
document.write("<h2>Herencia</h2><br>")
objPerro.ladrarP();
document.write("<h2>Setters & Getters</h2><br>");
objPerro.setEspecie = "Cachorro";
objPerro.setEdad = 1;
objPerro.setColor = "Blanco";
objPerro.setRaza = "Snauzer";

document.write(`Ahora soy ${objPerro.getEspecie} y tengo ${objPerro.getEdad} año
	, soy de color ${objPerro.getColor} y de la raza ${objPerro.getRaza}`);