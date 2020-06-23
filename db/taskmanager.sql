CREATE DATABASE taskmanager;
USE taskmanager;

CREATE TABLE task (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(50) DEFAULT NULL,
  description varchar(250) DEFAULT NULL,
  status int DEFAULT NULL,
  PRIMARY KEY (id)
)