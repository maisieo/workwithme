DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL UNIQUE,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    postcode VARCHAR(30) NOT NULL,
    hashedpassword VARCHAR(200) NOT NULL,
    email VARCHAR(200) NOT NULL,
    wsneeded INT NOT NULL
);