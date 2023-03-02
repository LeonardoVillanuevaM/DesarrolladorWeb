#Creando base de datos si no existe con el nombre tienda
CREATE DATABASE IF NOT EXISTS Tienda;
#Utilizando la base de datos tienda
USE Tienda;
#Creando tabla productos para tienda
CREATE TABLE Productos(
id_producto INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(50),
precio DOUBLE,
existencias INT,
categoria VARCHAR(20)
);
#Insertando valores para la tabla productos
INSERT INTO Productos(nombre,precio,existencias,categoria)
VALUES('Fantastic Uva',12.5,12,'Refrescos'),('Fantastic Fresa',12.5,14,'Refrescos'),
('Fantastic Naranja',12.5,22,'Refrescos'),('Fantastic Cola',12.5,52,'Refrescos'),
('Harina Oro',14.5,12,'Abarrotes'),('Avena La Campana',17.5,12,'Abarrotes'),
('Cartera de Huevos 30 piezas',52,20,'Canasta Básica'),('Puré La Montaña',4.5,14,'Abarrotes'),
('Aceite La Montaña',24.5,22,'Abarrotes'),('Champiñones La Montaña',16.5,4,'Abarrotes'),
('Arroz Oro',14.5,8,'Abarrotes'),('Sopa Oro',6.5,12,'Abarrotes'),
('Sal La Marina',4.5,15,'Abarrotes'),('Leche La Villa',20.5,20,'Lácteos'),
('Jugo de Naranja El Sol',14.5,9,'Refrescos');
#Mostrando todos los datos para la tabla productos
SELECT * FROM productos;
#Mostrando nombre de los productos que su precio sea mayor a 20 y la existencia sea mayor a 10
SELECT * FROM Productos WHERE
precio>20 AND existencias > 10;
#Mostrando los producotos que pertenezcan a la categoria de refrescos o su precio sea mayor a 15
SELECT * FROM Productos WHERE
categoria='Refrescos' OR precio > 15;
#Mostrando productos que las existencias sean mayor a 50 y el precio sea mayor a 5
SELECT * FROM Productos WHERE
existencias > 50 and precio > 5;