const validateReviews = (line) => {
  const columns = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);

  const reviewId = columns[0];
  const productId = columns[1];
  const rating = columns[2];
  const date = columns[3];
  const summary = columns[4];
  const body = columns[5];
  let recommend = columns[6];
  let reported = columns[7];
  const reviewerName = columns[8];
  const reviewerEmail = columns[9];
  // const response = columns[10];
  const helpfulness = columns[11];

  if (Number.isNaN(reviewId)) { return false; }
  if (Number.isNaN(productId)) { return false; }
  if (Number.isNaN(rating) || rating < 0 || rating > 5) { return false; }
  if (typeof date !== 'string' || date.length > 12) { return false; }
  if (typeof summary !== 'string') { return false; }
  if (typeof body !== 'string') { return false; }
  if (Number.isNaN(recommend)) {
    if (recommend === 'TRUE') {
      recommend = 1;
    } else {
      recommend = 0;
    }
  }
  if (Number.isNaN(reported)) {
    if (reported === 'TRUE') {
      reported = 1;
    } else {
      reported = 0;
    }
  }
  if (typeof reviewerName !== 'string') { return false; }
  if (typeof reviewerEmail !== 'string') { return false; }
  if (Number.isNaN(helpfulness)) { return false; }
  return columns;
};

module.exports = validateReviews;
