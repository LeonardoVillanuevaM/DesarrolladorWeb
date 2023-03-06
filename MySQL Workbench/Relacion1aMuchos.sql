USE Empresa;
CREATE TABLE IF NOT EXISTS Pedidos(
id_pedido INT PRIMARY KEY AUTO_INCREMENT,
cliente INT NOT NULL,
fecha DATE,
monto DOUBLE,
FOREIGN KEY (cliente) REFERENCES Clientes(id_cliente)
);
SHOW TABLES;
DESCRIBE Pedidos;
INSERT INTO Pedidos(cliente,fecha,monto) VALUES
(1,"2023-1-18",1500),(2,"2023-1-18",2100),(4,"2023-1-18",650),
(1,"2023-1-18",1600),(2,"2023-1-18",220),(6,"2023-1-18",400),
(1,"2023-1-18",1700),(3,"2023-1-18",500),(19,"2023-1-18",650);
SELECT * FROM Pedidos;