#Creando base de datos si no existe con el nombre empresa
CREATE DATABASE IF NOT EXISTS Empresa;
#Utilizando la base de datos empresa
USE Empresa;
#Creando tabla Empleados para empresa
CREATE TABLE Empleados(
id_empleado INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(30),
sueldo DOUBLE,
direccion VARCHAR(80),
puesto VARCHAR(40)
);
#Insertando valores para la tabla Empleados
INSERT INTO Empleados(nombre,sueldo,direccion,puesto)
VALUES('Leonardo Villanueva',6300,'Zumpango, Estado de Mexico','Consultor Jr'),('Erika Zaide',6000,'Zumpango, Estado de Mexico','Psicologa'),
('Luis Diaz',8000,'Zumpango, Estado de Mexico','Consultor Jr'),('Amaury Rodriguez',18000,'Santa Fe,Ciudad de México','Desarrollador Backend Jr'),
('Gustavo Quintana',30000,'Santa Fe, Ciudad de Mexico','Desarrollador Backend Sr');
#Mostrando todos los datos de la tabla Empleados
SELECT * FROM Empleados;
#Insertando un registro para la tabla Empleados
INSERT INTO Empleados(nombre,sueldo,direccion,puesto)
VALUES('Maritza Sanchez',12000,'Texcoco, Estado de Mexico','Desarrollador Backend Jr');
#Modificando sueldos para todos los empleados
UPDATE Empleados SET sueldo=6400 WHERE id_empleado=1;
UPDATE Empleados SET sueldo=6100 WHERE id_empleado=2;
UPDATE Empleados SET sueldo=8100 WHERE id_empleado=3;
UPDATE Empleados SET sueldo=18100 WHERE id_empleado=4;
UPDATE Empleados SET sueldo=30500 WHERE id_empleado=5;
UPDATE Empleados SET sueldo=12100 WHERE id_empleado=6;
/*Filtrando informacion para empleados que tengan puesto de desarrollador backend jr o desarrollador backend sr
y tengan un sueldo mayor o igual a 15000*/
SELECT id_empleado,nombre,puesto,sueldo FROM Empleados
WHERE sueldo>=15000 AND puesto='Desarrollador Backend Jr' OR puesto='Desarrollador Backend Sr';
#Filtrando informacion para empleados que vivan en zumpango y tengan puesto de consultor jr
SELECT id_empleado,nombre,direccion,puesto FROM Empleados
WHERE direccion='Zumpango, Estado de Mexico' AND puesto='Consultor Jr';