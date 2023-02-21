//Modulo que importamos, debido a que el modulo os, no es global
const os = require('os');
//Tipo de Sistema Operativo que tenemos
console.log(os.type());
//Directorio principal de nuestro equipo
console.log(os.homedir());
//Tiempo que nuestro equipo a estado en uso
console.log(os.uptime());
//Informacion del usuario
console.log(os.userInfo());

