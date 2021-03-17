DROP DATABASE IF EXISTS reviews;

CREATE DATABASE reviews;

-- send API request to products, integrate with Nils
CREATE TABLE products (
  product_id int PRIMARY KEY,
)

CREATE TABLE reviews (
  review_id integer PRIMARY KEY,
  product_id INT NOT NULL,
  rating int NOT NULL,
  date DATETIME NOT NULL,
  summary VARCHAR NOT NULL,
  body VARCHAR NOT NULL,
  recommend bit NOT NULL,
  reported bit NOT NULL,
  response VARCHAR NULL,
  reviewer_name VARCHAR NOT NULL,
  reviewer_email VARCHAR NOT NULL,
  response VARCHAR NULL,
  helpfulness INT NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(product_id)
)

CREATE TABLE photos (
  photo_id int NOT NULL,
  review_id integer NOT NULL,
  photo_url int NOT NULL,
  FOREIGN KEY (review_id) REFERENCES reviews(review_id),
)

CREATE TABLE characteristics (
  characteristic_id integer NOT NULL PRIMARY KEY,
  product_id int NOT NULL,
  characteristic_name VARCHAR NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(product_id),
)

CREATE TABLE characteristics_reviews (
  id int NOT NULL PRIMARY KEY,
  review_id integer NOT NULL,
  characteristic_id integer NOT NULL,
  characteristic_value INT NOT NULL,
  FOREIGN KEY(product_characteristics_id) REFERENCES product_characteristics(id),
  FOREIGN KEY (review_id) REFERENCES reviews(review_id),
)

LOAD DATA INFILE '../../CSV/reviews.csv'
INTO TABLE reviews
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

