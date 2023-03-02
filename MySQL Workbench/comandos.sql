#Comando para visualizar bases de datos creadas
SHOW DATABASES;
#Comando para visualizar tablas para la base de datos tienda
USE Tienda;
SHOW TABLES;
#Visualizar la estructura de la tabla productos
DESCRIBE Productos;
#Crear tabla empleados y despues eliminarla.
CREATE TABLE Empleados(
id_empleado INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(50)
);
SHOW TABLES;
DROP TABLE IF EXISTS Empleados;
SHOW TABLES;
#Comando para borrar los registros de la tabla empleados de tienda
CREATE TABLE Empleados(
id_empleado INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(50)
);
INSERT INTO Empleados(nombre) VALUES('Leonardo Villanueva'),
('Erika Zaide'),
('Susana Median');
SELECT * FROM Empleados;
TRUNCATE TABLE Empleados;
SELECT * FROM Empleados;
#Comandos para renombrar una tabla
RENAME TABLE Empleados TO Socios;
SHOW TABLES;