CREATE TABLE users (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(30) NOT NULL,
  password VARCHAR(255) NOT NULL
);

INSERT INTO `users` (`username`, `password`) VALUES
  ('john', 'password123'),
  ('jane', 'p@ssw0rd'),
  ('bob', '12345');