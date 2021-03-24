DROP TABLE IF EXISTS `bubbles`;
CREATE TABLE `bubbles` (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    ownername VARCHAR(30) NOT NULL,
    username VARCHAR(30) NOT NULL UNIQUE,
    place VARCHAR(30) NOT NULL,
    wsneeded INT NOT NULL,
    totalws INT NOT NULL,
    wifi BOOLEAN NOT NULL,
    petfriendly BOOLEAN NOT NULL,
    kitchen BOOLEAN NOT NULL,
    quietspace BOOLEAN NOT NULL,
    smokerfriendly BOOLEAN NOT NULL,
    monday BOOLEAN NOT NULL,
    tuesday BOOLEAN NOT NULL,
    wednesday BOOLEAN NOT NULL,
    thursday BOOLEAN NOT NULL,
    friday BOOLEAN NOT NULL,
    availablews INT NOT NULL,
    wheelchairaccess BOOLEAN NOT NULL,
    usersinbubble INT NOT NULL
);