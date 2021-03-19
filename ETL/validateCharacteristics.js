function validateCharacteristics(line) {
  const columns = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);

  const characteristicId = columns[0];
  const productId = columns[1];
  const characteristicName = columns[2];

  if (Number.isNaN(characteristicId)) { return false; }
  if (Number.isNaN(productId)) { return false; }
  if (typeof characteristicName !== 'string') { return false; }

  return columns;
}

module.exports = validateCharacteristics;
