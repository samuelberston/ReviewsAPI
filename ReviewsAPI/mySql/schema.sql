CREATE DATABASE reviews;

CREATE TABLE products (
  product_id int PRIMARY KEY,
  campus VARCHAR NOT NULL,
  name VARCHAR NOT NULL,
  slogan VARCHAR NOT NULL,
  description VARCHAR NOT NULL,
)

CREATE TABLE reviews (
  review_id int PRIMARY KEY,
  rating int NOT NULL,
  summary VARCHAR NOT NULL,
  recommend boolean NOT NULL,
  response VARCHAR NULL,
  body VARCHAR NOT NULL,
  date DATETIME NOT NULL,
  reviewer_name VARCHAR NOT NULL,
  helpfulness INT NOT NULL,
  product_id INT NOT NULL,
)

CREATE TABLE photos (
  id int PRIMARY KEY,
  review_id int NOT NULL,
  photo_id int NOT NULL,
  photo_url int NOT NULL,
  product_id int NOT NULL,
  FOREIGN KEY (review_id) REFERENCES reviews(review_id)
  FOREIGN KEY (product_id) REFERENCES products(product_id)
)

CREATE TABLE ratings (
  id int PRIMARY KEY AUTO_INCREMENT,
  product_id int NOT NULL,
  1 int NOT NULL,
  2 int NOT NULL,
  3 int NOT NULL,
  4 int NOT NULL,
  5 int NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(product_id)
)

CREATE TABLE recommended (
  product_id int NOT NULL,
  false int NOT NULL,
  true int NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(product_id)
)

CREATE TABLE characteristics (
  product_id int NOT NULL,
  fitId int(5) NOT NULL,
  fitVal int NOT NULL,
  lenId int(5) NOT NULL,
  lenVal int NOT NULL,
  ComId int(5) NOT NULL,
  ComVal int NOT NULL,
  QualId int(5) NOT NULL,
  QualVal int NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products(product_id),
)