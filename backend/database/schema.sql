CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
);

INSERT INTO role (name) values ('ADMIN'), ('USER');

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  `email` varchar(75) NOT NULL,
  `password` varchar(255) NOT NULL,
  `id_role` INT,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_role`) REFERENCES role(id)
);
