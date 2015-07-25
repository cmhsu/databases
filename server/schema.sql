CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE messages (
  userid int NOT NULL,
  roomname VARCHAR(30),
  text TEXT NOT NULL,
  id int NOT NULL auto_increment,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  username VARCHAR(30) NOT NULL,
  id int NOT NULL auto_increment,
  PRIMARY KEY (id)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

