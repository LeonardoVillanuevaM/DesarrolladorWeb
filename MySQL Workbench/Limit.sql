CREATE DATABASE IF NOT EXISTS Empresa;
USE EMPRESA;
CREATE TABLE Clientes(
id_cliente INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(45),
telefono VARCHAR(12)
);
CREATE TABLE Empleados(
id_empleado INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(45),
edad INT,
telefono VARCHAR(12),
direccion VARCHAR(80),
puesto VARCHAR(45),
sueldo DOUBLE
);
SHOW TABLES;
INSERT INTO Clientes(nombre,telefono) VALUES
('Juan Aldama','1234563421'),('Maria Gonzales','3244564321'),('Enrique Davalos','4564323421'),
('Arturo Perez','5554563321'),('Carlos Armenta','4354353654'),('Daniel Gomez','2222263421'),
('Marina Lopez','1212263421'),('Carlota Perez','3245454312'),('Cristina Gomez','8888883421'),
('Ana Sanchez','1234323421'),('Laura Sanchez','3234532234'),('Maria Aldama','1345463421'),
('Juan Perez','3234543432'),('Carlos Lopez','2345432123'),('Luis Gamez','1234563421'),
('Dionicio Perez','2324322421'),('Luna Garcia','2334343421'),('Abril Perez','1345456342'),
('Laura Gomez','1234563421');
INSERT INTO Empleados(nombre,edad,telefono,direccion,puesto,sueldo) VALUES
('Laura Espinoza',35,'2222222222','Las palmas 244','Cajero',1500),
('Luis Gomez',28,'4522242222','Luna del mar','Cocinero',2500),
('Maria Espinoza',25,'2456789765','Las palmas 240','Mesero',1200),
('Adela Marquez',35,'778989765','Palomas 124','Mesero',1200),
('Antonio Perez',40,'1222289765','Benito Juarez 567','Gerente',300);
#Actualizar el suedo de Antonio Perez a 3000
UPDATE Empleados SET sueldo=3000 WHERE id_empleado=5;
SELECT * FROM Clientes;
SELECT * FROM Empleados;
#Mostrar los primeros nombres solamente de 4 Clientes
SELECT nombre FROM Clientes LIMIT 4;
#Mostrar los primeros nombres y el sueldos de 2 Empleados
SELECT nombre,sueldo FROM Empleados LIMIT 2;
#Mostrar id, nombre y sueldo de los empleados que ganes mas ó 1500
SELECT id_empleado,nombre,sueldo FROM Empleados
WHERE sueldo>=1500;
#Mostrar los clientes que esten despues de los primeros 10
SELECT * FROM Clientes LIMIT 10,9;
#Mostrar los primeros 5 clientes despues de los primeros 5
SELECT * FROM Clientes LIMIT 5,5;