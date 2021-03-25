function validateCharacteristicsReviews(line) {
  const columns = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);

  const characteristicsReviewsId = columns[0];
  const characteristicId = columns[1];
  const reviewId = columns[2];
  const characteristicValue = columns[3];

  if (Number.isNaN(characteristicsReviewsId)) { return false; }
  if (Number.isNaN(characteristicId)) { return false; }
  if (Number.isNaN(reviewId)) { return false; }
  if (Number.isNaN(characteristicValue)) { return false; }

  return columns;
}

module.exports = validateCharacteristicsReviews;
