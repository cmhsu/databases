CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE messages (
  userID int(5),
  roomID int(5),
  createdAt TIMESTAMP(6),
  -- updatedAt TIMESTAMP(6),
  text TEXT,
  messageID int(5) NOT NULL auto_increment,
  PRIMARY KEY (messageID)
);

CREATE TABLE users (
  username VARCHAR(30),
  userID int(5) NOT NULL auto_increment,
  PRIMARY KEY (userID)
);
CREATE TABLE rooms (
  roomname VARCHAR(30),
  roomID int(5) NOT NULL auto_increment,
  PRIMARY KEY (roomID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

