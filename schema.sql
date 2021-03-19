-- SET GLOBAL local_infile = 1;

DROP DATABASE IF EXISTS reviewsAPI;

CREATE DATABASE reviewsAPI;

USE reviewsAPI;

CREATE TABLE reviews (
  review_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  product_id INT NOT NULL,
  rating INT NOT NULL,
  date VARCHAR(12) NOT NULL,
  summary VARCHAR(255) NOT NULL,
  body TEXT NOT NULL,
  recommend TINYINT NOT NULL,
  reported TINYINT NOT NULL,
  reviewer_name VARCHAR(50) NOT NULL,
  reviewer_email VARCHAR(60) NOT NULL,
  response VARCHAR(200) NULL,
  helpfulness INT NOT NULL
);

CREATE TABLE photos (
  photo_id INT NOT NULL,
  review_id INT NOT NULL,
  photo_url VARCHAR(255) NOT NULL
);

CREATE TABLE characteristics (
  characteristic_id INT NOT NULL PRIMARY KEY,
  product_id INT NOT NULL,
  characteristic_name VARCHAR(50) NOT NULL
);

CREATE TABLE characteristics_reviews (
  characteristics_reviews_id INT NOT NULL PRIMARY KEY,
  characteristic_id INT NOT NULL,
  review_id INT NOT NULL,
  characteristic_value INT NOT NULL
);

-- add the foreign keys AFTER the loading --
ALTER TABLE photos
ADD FOREIGN KEY (review_id) REFERENCES reviews(review_id);

ALTER TABLE characteristics_reviews
ADD FOREIGN KEY (review_id) REFERENCES reviews(review_id);

-- add indexes --
CREATE INDEX product_id
ON reviews (product_id);

CREATE INDEX photo_id
ON photos (photo_id);
