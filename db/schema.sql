CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burgerName VARCHAR(45) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY (id)
);