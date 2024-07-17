/* USERS  */
CREATE table role (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(80) NOT NULL
);

CREATE TABLE user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  username VARCHAR(80) NOT NULL,
  email VARCHAR(120) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role_id INT UNSIGNED NOT NULL DEFAULT 1,
  FOREIGN KEY(role_id) REFERENCES role(id)
);

/* PLANTS */
CREATE TABLE watering_frequency (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  frequency VARCHAR(80) NOT NULL
);

CREATE TABLE solar_expo (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  exposition VARCHAR(80) NOT NULL,
  description VARCHAR(255)
);


CREATE TABLE plant (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(80) NOT NULL,
  surname VARCHAR(80),
  photo VARCHAR(255),
  place VARCHAR(80),
  watering_frequency_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(watering_frequency_id) REFERENCES watering_frequency(id),
  solar_expo_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(solar_expo_id) REFERENCES solar_expo(id)
);

/* JONCTION */

CREATE TABLE user_plant (
  registered_at DATETIME DEFAULT NOW(),
  user_id INT UNSIGNED NOT NULL,
  plant_id INT UNSIGNED NOT NULL,
  FOREIGN KEY(user_id) REFERENCES user(id),
  FOREIGN KEY(plant_id) REFERENCES plant(id)
);


/* CREATION ROLE */
INSERT INTO role (name) VALUES ('user'), ('admin');