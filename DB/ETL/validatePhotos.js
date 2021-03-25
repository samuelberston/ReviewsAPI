function validatePhotos(line) {
  const columns = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);

  const photoId = columns[0];
  const reviewId = columns[1];
  const url = columns[2];

  if (Number.isNaN(photoId)) { return false; }
  if (Number.isNaN(reviewId)) { return false; }
  if (typeof url !== 'string') { return false; }

  return columns;
}

module.exports = validatePhotos;
