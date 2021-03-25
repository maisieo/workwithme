DROP TABLE IF EXISTS `bubbles`;
CREATE TABLE `bubbles` (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    ownername VARCHAR(30) NOT NULL,
    username VARCHAR(30), 
    place VARCHAR(30) NOT NULL,
    wsneeded INT, 
    totalws INT NOT NULL,
    wifi BOOLEAN NOT NULL,
    petfriendly BOOLEAN NOT NULL,
    kitchen BOOLEAN NOT NULL,
    quietspace BOOLEAN NOT NULL,
    smokerfriendly BOOLEAN NOT NULL,
    availablews INT,
    wheelchairaccess BOOLEAN NOT NULL
  );

-- I've taken "NOT NULL" out of username, wsneeded, monday, tuesday, wednesday,
-- thursday, friday, availablews and usersinbubble temporarily while I sort out
-- the front end for the bubbles