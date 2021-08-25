CREATE DATABASE  IF NOT EXISTS `userform` ;
USE `userform`;


DROP TABLE IF EXISTS `user`;


CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `mobile` varchar(100),
  `email` varchar(100) NOT NULL,
  `linkdin` varchar(100) ,
  `addressLine_1` varchar(100) NOT NULL,
  `addressLine_2` varchar(100) not NULL,
  `state` varchar(100) not NULL,
  `city` varchar(50) NOT NULL,
  `zipcode` varchar(100) NOT NULL,
  `country` varchar(30) ,
  `salary` varchar(30),
  PRIMARY KEY (`id`)
);



