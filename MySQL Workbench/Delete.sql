CREATE DATABASE IF NOT EXISTS Empresa;
USE EMPRESA;
SELECT * FROM Empleados;
#Eliminar Empleados que tengan mas de 35 años
DELETE FROM Empleados WHERE edad>35;
SELECT * FROM Empleados;
#Eliminar a los empledos que tengan el puesto de Mesero
DELETE FROM Empleados WHERE puesto='Mesero';
SELECT * FROM Empleados;
SELECT * FROM Clientes;
#Eliminar los clientes que tengan el id_cliente = 5 y el id_cliente = 10
DELETE FROM Clientes WHERE id_cliente=5 OR id_cliente=10;
SELECT * FROM Clientes;
