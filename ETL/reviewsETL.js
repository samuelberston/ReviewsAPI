/* eslint-disable no-restricted-syntax */
const fs = require('fs');
const readLine = require('readline');

const validateReviews = require('./validateReviews');

const readStream = fs.createReadStream('/Users/samuelberston/Desktop/CSV/reviews.csv', { encoding: 'utf8' });
const writeStream = fs.createWriteStream('/Users/samuelberston/Desktop/CSV/reviews-clean.csv');

const rl = readLine.createInterface({
  input: readStream,
  output: writeStream,
  console: false,
});

rl.on('line', (line) => {
  const validatedLine = validateReviews(line);
  if (validatedLine) {
    rl.output.write(`${validatedLine}\n`);
  }
});
