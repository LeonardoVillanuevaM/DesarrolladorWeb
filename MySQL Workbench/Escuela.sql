#Creando la base de datos en caso de que no exista
CREATE DATABASE IF NOT EXISTS Escuela;
#Utilizando la base de datos
USE Escuela;
#Creando tabla Alumnos para la base de datos
CREATE TABLE Alumnos(
id_alumno int primary key not null,
nombre_alumno varchar(40) not null,
edad int,
materia varchar(40),
grado int
);
#Insertando valores a la tabla de Alumnos
INSERT INTO Alumnos(id_alumno,nombre_alumno,edad,materia,grado)
VALUES(1,'Leonardo Villanueva',22,'Programacion',9),(2,'Erika Pineda',21,'Entrevista',7),
(3,'Luis Navas',28,'Base de Datos',9),(4,'Eduardo Villanueva',25,'Calculo 1',1);
#Modificando los valores de materia para alumna Erika Zaide
UPDATE Alumnos SET materia='Psicologia Comunitaria' WHERE id_alumno=2;
#Modificando el valor de grado para el alumno Eduardo Villanueva
UPDATE Alumnos SET grado=8 WHERE id_alumno=4;
#Mostrando todos los datos para la tabla Alumnos
SELECT * FROM Alumnos;
#Mostrando solo el id, el nombre y el grado para los alumnos que vayan en 9 grado
SELECT id_alumno,nombre_alumno,grado FROM Alumnos WHERE grado=9;
#Mostrando el nombre y la edad de los alumnos, que tengan mas de 21
SELECT nombre_alumno,edad FROM Alumnos WHERE edad > 21;
#Modificando nombre y materia para el alumno con id 2
UPDATE Alumnos SET nombre_alumno='Erika Zaide', materia='Psicologia Cognitiva' WHERE id_alumno=2;
#Mostrando todos los datos para la tabla Alumnos
SELECT * FROM Alumnos;
