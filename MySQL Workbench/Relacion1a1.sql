CREATE DATABASE IF NOT EXISTS Matrimonio;
USE Matrimonio;
SHOW TABLES;
CREATE TABLE IF NOT EXISTS Novios(
id_novio INT PRIMARY KEY AUTO_INCREMENT,
nombre varchar(20),
edad int
);
CREATE TABLE IF NOT EXISTS Novias(
id_novia INT PRIMARY KEY AUTO_INCREMENT,
nombre varchar(20),
edad int
);
CREATE TABLE IF NOT EXISTS Parejas(
id_pareja INT PRIMARY KEY AUTO_INCREMENT,
novio int,
novia int,
fecha date,
FOREIGN KEY (novio) REFERENCES Novios(id_novio),
FOREIGN KEY (novia) REFERENCES Novias(id_novia)
);
INSERT INTO novios(nombre,edad) VALUES
('Leonardo',22),('Gilberto',53),
('Benito',53),('Eduardo',25),
('Juan',72),('Manuel',40);

INSERT INTO novias(nombre,edad) VALUES
('Erika',22),('Susana',52),
('Blanca',54),('Omega',26),
('Socorro',73),('Carmen',38);

INSERT INTO parejas(novio,novia,fecha) VALUES
(1,1,"2019-07-07"),
(2,2,"2000-03-18"),
(3,3,"2019-07-07"),
(4,4,"1990-02-17"),
(5,5,"1950-01-12"),
(6,6,"2017-02-8");

SELECT * FROM Novios;
SELECT * FROM Novias;
SELECT * FROM Parejas;

