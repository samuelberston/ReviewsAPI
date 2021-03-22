USE reviewsAPI;

LOAD DATA LOCAL INFILE '/Users/samuelberston/Desktop/CSV/reviews-clean.csv'
INTO TABLE reviews
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE '/Users/samuelberston/Desktop/CSV/reviewsPhotos-clean.csv'
INTO TABLE photos
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE '/Users/samuelberston/Desktop/CSV/characteristics-clean.csv'
INTO TABLE characteristics
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE '/Users/samuelberston/Desktop/CSV/characteristicsReviews-clean.csv'
INTO TABLE characteristics_reviews
FIELDS TERMINATED BY ','
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
