CREATE DATABASE reviews;

-- send API request to products, integrate with Nils
CREATE TABLE products (
  product_id int PRIMARY KEY,
)

CREATE TABLE reviews (
  review_id int PRIMARY KEY,
  rating int NOT NULL,
  summary VARCHAR NOT NULL,
  recommend bit NOT NULL,
  response VARCHAR NULL,
  body VARCHAR NOT NULL,
  date DATETIME NOT NULL,
  reviewer_name VARCHAR NOT NULL,
  helpfulness INT NOT NULL,
  product_id INT NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(product_id)
)

CREATE TABLE photos (
  id int PRIMARY KEY,
  review_id int NOT NULL,
  photo_id int NOT NULL,
  photo_url int NOT NULL,
  FOREIGN KEY (review_id) REFERENCES reviews(review_id),
)

CREATE TABLE characteristics (
  id int PRIMARY KEY,
  product_id int NOT NULL,
  characteristic_id integer NOT NULL,
  characteristic_value INT NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(product_id),
)