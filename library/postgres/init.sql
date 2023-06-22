CREATE USER admin WITH PASSWORD 'admin';
GRANT ALL PRIVILEGES ON DATABASE postgres TO admin;
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  cpf VARCHAR(11) UNIQUE NOT NULL
);
INSERT INTO users (name, cpf)
VALUES ('John Doe', '12345678901');