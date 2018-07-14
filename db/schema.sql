CREATE DATABASE burger_db;
USE burger_db;

DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burgerName VARCHAR(45) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);

SELECT * FROM burgers