CREATE DATABASE kenji;
use kenji;

CREATE TABLE elements_enquete (
    id INT PRIMARY KEY AUTO_INCREMENT,
    pseudo VARCHAR(255) NOT NULL,
    contenu TEXT NOT NULL,
    image LONGBLOB,
    date_creation TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);