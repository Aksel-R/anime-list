-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema anime_list_DB
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema anime_list_DB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `anime_list_DB` DEFAULT CHARACTER SET utf8 ;
USE `anime_list_DB` ;

-- -----------------------------------------------------
-- Table `anime_list_DB`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `anime_list_DB`.`users` (
  `usersID` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`usersID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `anime_list_DB`.`anime list`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `anime_list_DB`.`anime list` (
  `animeID` INT NOT NULL AUTO_INCREMENT,
  `anime name` VARCHAR(45) NOT NULL,
  `img` VARCHAR(150) NOT NULL,
  `genre` VARCHAR(45) NOT NULL,
  `description` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`animeID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `anime_list_DB`.`user list`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `anime_list_DB`.`user list` (
  `usersID` INT NOT NULL,
  `animeID` INT NOT NULL,
  `status` TINYINT NULL,
  PRIMARY KEY (`usersID`, `animeID`),
  INDEX `fk_users_has_anime list_anime list1_idx` (`animeID` ASC) VISIBLE,
  INDEX `fk_users_has_anime list_users_idx` (`usersID` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_anime list_users`
    FOREIGN KEY (`usersID`)
    REFERENCES `anime_list_DB`.`users` (`usersID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_anime list_anime list1`
    FOREIGN KEY (`animeID`)
    REFERENCES `anime_list_DB`.`anime list` (`animeID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;




 








