"DROP TABLE if exists `bubbles`;
CREATE TABLE bubbles ((
    id INT AUTO_INCREMENT NOT NULL,
    firstname VARCHAR(30) NOT NULL,
    location VARCHAR(30) NOT NULL,
    workstations INT,
    wifi BOOLEAN NOT NULL,
    petfriendly BOOLEAN NOT NULL,
    kitchen BOOLEAN NOT NULL,
    quietspace BOOLEAN NOT NULL,
    wheelchair BOOLEAN NOT NULL,
    smoking BOOLEAN NOT NULL)

  );"