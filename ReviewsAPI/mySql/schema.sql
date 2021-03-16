CREATE DATABASE reviews;

-- send API request to products, integrate with Nils
CREATE TABLE products (
  product_id int PRIMARY KEY,
)

CREATE TABLE reviews (
  review_id integer PRIMARY KEY,
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
  photo_id int NOT NULL,
  photo_url int NOT NULL,
  product_id int NOT NULL,
  review_id integer NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(product_id), -- some photos might have the same review_id but different product
  FOREIGN KEY (review_id) REFERENCES reviews(review_id),
)

CREATE TABLE characteristics (
  characteristic_id integer NOT NULL PRIMARY KEY,
  characteristic_name VARCHAR NOT NULL,
)

CREATE TABLE product_characteristics (
  id int NOT NULL PRIMARY KEY,
  product_id int NOT NULL,
  characteristic_id integer NOT NULL,
  characteristic_value INT NOT NULL,
  FOREIGN KEY product_id REFERENCES products(product_id),
  FOREIGN KEY characteristic_id REFERENCES characteristics(characteristic_id),
)

CREATE TABLE reviews_characteristics (
  product_characteristics_id int NOT NULL
  review_id integer NOT NULL
  review_value INT NOT NULL,
  FOREIGN KEY(product_characteristics_id) REFERENCES product_characteristics(id)
  FOREIGN KEY (review_id) REFERENCES reviews(review_id),
)