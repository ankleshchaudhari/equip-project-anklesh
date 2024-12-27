-- Create Procedure
DELIMITER //
CREATE PROCEDURE CreateUser(
    IN firstName VARCHAR(255),
    IN lastName VARCHAR(255),
    IN mobileNumber VARCHAR(10),
    IN passwordHash VARCHAR(255)
)
BEGIN
    INSERT INTO users (first_name, last_name, mobile_number, password_hash)
    VALUES (firstName, lastName, mobileNumber, passwordHash);
END;
//
DELIMITER ;

-- Select Procedure
DELIMITER //
CREATE PROCEDURE GetUser(IN userId INT)
BEGIN
    SELECT * FROM users WHERE id = userId;
END;
//
DELIMITER ;

-- Update Procedure
DELIMITER //
CREATE PROCEDURE UpdateUser(
    IN userId INT,
    IN firstName VARCHAR(255),
    IN lastName VARCHAR(255),
    IN mobileNumber VARCHAR(10)
)
BEGIN
    UPDATE users
    SET first_name = firstName, last_name = lastName, mobile_number = mobileNumber
    WHERE id = userId;
END;
//
DELIMITER ;

-- Delete Procedure
DELIMITER //
CREATE PROCEDURE DeleteUser(IN userId INT)
BEGIN
    DELETE FROM users WHERE id = userId;
END;
//
DELIMITER ;
