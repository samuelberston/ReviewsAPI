DROP DATABASE IF EXISTS reviewsAPI;

CREATE DATABASE reviewsAPI;

USE reviewsAPI;

CREATE TABLE reviews (
  review_id integer NOT NULL PRIMARY KEY,
  product_id INT NOT NULL,
  rating int NOT NULL,
  date DATE NOT NULL,
  summary VARCHAR(50) NOT NULL,
  body VARCHAR(200) NOT NULL,
  recommend bit NOT NULL,
  reported bit NOT NULL,
  reviewer_name VARCHAR(50) NOT NULL,
  reviewer_email VARCHAR(50) NOT NULL,
  response VARCHAR(200) NULL,
  helpfulness INT NOT NULL
);

CREATE TABLE photos (
  photo_id int NOT NULL,
  review_id integer NOT NULL,
  photo_url int NOT NULL,
  FOREIGN KEY (review_id) REFERENCES reviews(review_id)
);

CREATE TABLE characteristics (
  characteristic_id integer NOT NULL PRIMARY KEY,
  product_id int NOT NULL,
  characteristic_name VARCHAR(50) NOT NULL
);

CREATE TABLE characteristics_reviews (
  id int NOT NULL PRIMARY KEY,
  review_id integer NOT NULL,
  characteristic_id integer NOT NULL,
  characteristic_value INT NOT NULL,
  FOREIGN KEY (review_id) REFERENCES reviews(review_id)
);

LOAD DATA LOCAL INFILE './CSV/reviews.csv'
INTO TABLE reviews
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS
SET response = IF(response = "", null, response);

LOAD DATA LOCAL INFILE './CSV/reviewsPhotos.csv'
INTO TABLE photos
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE './CSV/characteristics.csv'
INTO TABLE characteristics
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE './CSV/characteristicReviews.csv'
INTO TABLE characteristics_reviews
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
