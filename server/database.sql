CREATE DATABASE pernPyAuto;

CREATE TABLE Script
(
    script_id SERIAL PRIMARY KEY,
    description VARCHAR(255),
    name VARCHAR(255)
);

CREATE TABLE "User"
(
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255),
);

